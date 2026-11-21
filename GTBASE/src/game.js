import * as T from 'three';
import { createWorld } from './world.js';
import { animatePerson, coupe, motorcycle, person, poseCar, poseFall, ridePerson } from './models.js';
import { blocks, roads, spawn, weaponShop, station, residence, clamp, clear, distance, move, turn } from './rules.js';
import { resetVehicle, stepVehicle } from './vehicle.js';
import { driveTraffic, positionAvailable, resetDriver } from './traffic.js';
import { aimShot, canSee, findPunch, reachable, traceImpact, traceShot } from './combat.js';
import { createShotEffects } from './shot-effects.js';
import { FIST_CONTACT_DELAY, FIST_DURATION, poseFists } from './fists.js';
import { controls, element } from './input.js';
import { createAudio } from './audio.js';
import { shotDamage, impactDamage, wantedUnits } from './injury.js';
import { footNavigator, patrolDrive } from './navigation.js';
import { loadProgress, saveProgress } from './save.js';
import { actorClear, groundHeight, moveActor, sweptVehicleHits, threatensPlayer } from './contact.js';

const view=element('view');
const menu=element('menu');
const play=/** @type {HTMLButtonElement} */(element('play'));
const quality=/** @type {HTMLSelectElement} */(element('quality'));
const shop=/** @type {HTMLDialogElement} */(element('shop'));
const buy=/** @type {HTMLButtonElement} */(element('buy'));
const weaponPrice=180, startingCash=260, ammoPack=36;

function stored(key,value) {
  try {
    if(value!==undefined) localStorage.setItem('gtbase:'+key,value);
    return localStorage.getItem('gtbase:'+key);
  } catch { return null; }
}

function start() {
  const touch=matchMedia('(pointer:coarse), (max-width: 600px)').matches;
  const renderer=new T.WebGLRenderer({antialias:!touch,alpha:false,powerPreference:'high-performance'});
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.17;
  renderer.shadowMap.type=T.PCFShadowMap;
  view.append(renderer.domElement);

  const scene=new T.Scene();
  const camera=new T.PerspectiveCamera(57,1,.12,370);
  const world=createWorld(scene);
  const vehicleSolids=world.vehicleSolids;
  const aiWalk=footNavigator(world.vehicleSolids);
  const effects=createShotEffects(scene);
  const actorGround=actor=>actor.floorY??world.floorAt(actor.x,actor.z,0);
  const walkGeometry=actor=>world.walkSolids(actor.x,actor.z,actorGround(actor));
  const scanSolids=()=>[...world.solid,...world.closedDoorSolids()];
  const syncFloor=actor=>{actor.floorY=world.floorAt(actor.x,actor.z,actorGround(actor));};
  const collisionFleet=actor=>actorGround(actor)>1.25?[]:cars;
  const player={...spawn,buildingId:'player-home',unitId:'player-home:0',floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,model:person(scene,0x246959,0x363844,0xba7750,true)};
  const carSpawns=[
    {x:15.75,z:-1.8,angle:Math.PI,color:0xae4930},
    {x:-22.8,z:4,angle:0,color:0x429277},
    {x:36,z:15.3,angle:Math.PI/2,color:0xc7a652},
    {x:53.3,z:-36,angle:0,color:0x586e9c}
  ];
  const bikeSpawns=[
    {x:13.9,z:-12.1,angle:Math.PI,color:0xb88e39},
    {x:22.85,z:28,angle:0,color:0x476178}
  ];
  const parked=[...carSpawns.map(({color})=>coupe(scene,color)),...bikeSpawns.map(({color})=>motorcycle(scene,color))];
  const traffic=[0xe19552,0x4e7c89,0x8a4d45,0x479171,0x95877f,0x596587,0xc6b9a0,0xae9a5a].map((color,index)=>{
    const car=index===3||index===7?motorcycle(scene,color):coupe(scene,color);
    car.routeIndex=index;
    if(car.kind==='bike') {
      car.rider=person(scene,0x715c54,0x393e45,0xa37253);
      car.rider.root.visible=false;
    }
    return car;
  });
  const civilianCars=[...parked,...traffic];
  const intersections=new Map();
  const civilians=Array.from({length:15},(_,i)=>{
    const x=blocks[i%3], z=blocks[Math.floor(i/3)%3];
    const path=[{x:x+12,z:z-12},{x:x+12,z:z+12},{x:x-12,z:z+12},{x:x-12,z:z-12}];
    const point=i%4,a=path[point],b=path[(point+1)%4];
    const f=(i%3+1)/4;
    const home={x:a.x+(b.x-a.x)*f,z:a.z+(b.z-a.z)*f,next:(point+1)%4};
    const colors=[0xb1674c,0xdab661,0x6e839f,0x867094,0xc6bd9d];
    return actorAt({...home,id:'street:'+i},'civilian',person(scene,colors[i%5],i%2?0x4f5554:0x54434b,[0xc18e64,0x855232,0xe5b088][i%3]),path);
  });
  const clerks=world.buildings.filter(building=>building.clerk).map((building,i)=>actorAt({
    ...building.clerk,next:0,id:'clerk:'+building.id,buildingId:building.id
  },'clerk',person(scene,i%2?0x466b66:0x755b52,0x494746,0xc3936f),[]));
  const publicShops=world.buildings.filter(building=>building.clerk);
  const police=Array.from({length:3},(_,i)=>{
    const z=station.z-6.1+i*4.25;
    const home={x:-1.85,z:station.z+[-.23,-4.4,3.94][i],next:0,id:'officer:'+i,buildingId:'station'};
    const officer=actorAt(home,'police',person(scene,0x364c65,0x263343,0xb98059),[]);
    const berth={x:8.2,z,angle:Math.PI/2};
    const car=coupe(scene,0x375675,true);
    return {officer,berth,car,mode:'ready',stall:0,stop:null,intent:0,combat:null,departing:false,retaliation:null,maneuver:null,
      route:[3,6,1][i],beat:i,startShift:[18,40,26][i]};
  });
  const cars=[...civilianCars,...police.map(unit=>unit.car)];
  const vehicleStarts=new Map();
  const ejected=Array.from({length:traffic.length+2},(_,i)=>{
    const npc=actorAt({x:0,z:0,next:0,id:'driver:'+i},'civilian',person(scene,0x82735a,0x424241,[0xb38664,0x815438][i%2]),[]);
    npc.seated=true;
    npc.model.root.visible=false;
    return npc;
  });
  const pedestrians=[...civilians,...clerks,...police.map(unit=>unit.officer),...ejected];
  let activePeople=pedestrians;
  const actorIndex=new Map(pedestrians.map(npc=>[npc.id,npc]));
  const decals=new T.CircleGeometry(1,14);
  const bloodMat=new T.MeshBasicMaterial({color:0x641c22,transparent:true,opacity:.81,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  const pickupGeo=new T.BoxGeometry(.27,.115,.38);
  const pickupColors={cash:new T.MeshStandardMaterial({color:0x779a64}),ammo:new T.MeshStandardMaterial({color:0xdba95a}),weapon:new T.MeshStandardMaterial({color:0x495358})};
  const pickups=[];
  function actorAt(home,role,model,path) {
    return {home,baseRole:role,role,model,path,...home,pace:1.15+(Math.abs(home.z)%4)*.11,
      angle:home.angle??0,floorY:home.y??0,scheduleClock:9+Math.abs(home.z*1.17)%29, itinerary:[], rearWait:0,fear:0,health:100,
      down:0,stagger:0,seated:false,robbed:false,surrender:0,drop:null,attack:0,injuryCooldown:0,
      repath:0,route:[],pursuitRoute:[],pursuitKey:'',exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,
      riding:null,boardCar:null,deadTime:0,fallDir:-1};
  }
  function resetActor(npc) {
    if(npc.drop) {scene.remove(npc.drop);npc.drop=null;}
    Object.assign(npc,npc.home,{role:npc.baseRole,health:100,fear:0,down:0,angle:npc.home.angle??0,
      floorY:npc.home.y??0,scheduleClock:9+Math.abs(npc.home.z*1.17)%29,itinerary:[],rearWait:0,
      seated:false,stagger:0,attack:0,surrender:0,robbed:false,injuryCooldown:0,exitAnim:0,repath:0,route:[],
      pursuitRoute:[],pursuitKey:'',pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1});
    npc.model.root.rotation.set(0,npc.angle,0);
    npc.model.shadow.visible=true;
    npc.model.root.visible=true;
    syncFloor(npc);
    npc.model.root.position.set(npc.x,actorGround(npc),npc.z);
  }
  const audio=createAudio();
  if (stored('sound')==='off') audio.toggle();
  const sight=new T.Vector3();
  const cameraTarget=new T.Vector3();
  const desiredCamera=new T.Vector3();
  const projection=new T.Vector3();
  const shotFrom=new T.Vector3();
  const shotDirection=new T.Vector3();
  const enemyFrom=new T.Vector3(), enemyTo=new T.Vector3(), enemyDirection=new T.Vector3();

  let playing=false, started=false, driving=null;
  let sightOfPolice=false,witnessClock=0,lastKnown=null;
  let heat=0, alertCooldown=0, shotCooldown=0, impactCooldown=0, stepCooldown=0, flash=0;
  let yaw=0, pitch=.23, time=0, introTime=0, uiTime=0, cameraIdle=0, cameraFresh=true;
  let padMode='keyboard', cash=startingCash, armed=false, equipped=false, ammo=0, previousAim=false;
  let jumpVelocity=0, deathClock=0, theft=null, gangTarget=null, robbery=null, rogue=null, rogueClock=27;
  let sightTimer=0, cachedSight=null, crosshairTime=0;
  const gang=[];
  const progress=loadProgress();
  const showSaved=()=>{play.textContent=progress?'Continuar do save':'Jogar agora';};
  let punchMotion=0, hitTime=0, impactTime=0, stepHitTime=0, punchHand=0;
  let punchPending=false,punchAt=0;
  let cameraInside=false;
  let notice='', noticeTime=0;
  let loadFactor=1, frames=0, frameTime=0;

  const minimap=/** @type {HTMLCanvasElement} */(element('map')).getContext('2d');
  const mapBase=document.createElement('canvas');
  mapBase.width=mapBase.height=256;
  const mapCtx=mapBase.getContext('2d');
  const mapPos=value=> 128+value*1.92;
  mapCtx.fillStyle='#1d3433';
  mapCtx.fillRect(0,0,256,256);
  mapCtx.fillStyle='#46605b';
  for (const coordinate of roads) {
    mapCtx.fillRect(mapPos(coordinate)-10,0,20,256);
    mapCtx.fillRect(0,mapPos(coordinate)-10,256,20);
  }
  mapCtx.fillStyle='#345048';
  for(const building of world.vehicleSolids) mapCtx.fillRect(mapPos(building.x-building.w/2),mapPos(building.z-building.d/2),building.w*1.92,building.d*1.92);
  mapCtx.fillStyle='#6a7859';
  mapCtx.fillRect(mapPos(-10),mapPos(28),38,38);

  function qualityUpdate() {
    const high=quality.value==='high', low=quality.value==='low';
    renderer.setPixelRatio(Math.min(devicePixelRatio,high?2:low?1:touch?1.45:1.5)*(low?.85:loadFactor));
    renderer.setSize(view.clientWidth,view.clientHeight);
    renderer.shadowMap.enabled=!low && (high || loadFactor>.76);
    world.sun.shadow.needsUpdate=true;
    camera.aspect=view.clientWidth/Math.max(1,view.clientHeight);
    camera.updateProjectionMatrix();
  }

  function updateSoundButton() {
    element('sound').textContent=audio.enabled?'Som ligado':'Som desligado';
    element('sound').setAttribute('aria-pressed',String(audio.enabled));
  }

  function setPlaying(value) {
    if(shop.open) closeShop();
    playing=value;
    menu.hidden=value;
    element('hud').hidden=!value;
    input.clear();
    if(value) {
      audio.start();
      if(!started) {
        yaw=.32;
        pitch=.22;
      }
      started=true;
      cameraFresh=true;
      time=performance.now();
      element('pause').focus({preventScroll:true});
      element('pause').blur();
    } else {
      if(document.pointerLockElement) document.exitPointerLock();
      audio.motor(0,false);
      element('help').removeAttribute('open');
      element('title').innerHTML='GT<span>BASE</span>';
      element('intro').textContent='Jogo pausado em Vila Brasa.';
      play.textContent='Continuar';
      element('reset').hidden=false;
      play.focus();
    }
  }

  function reset() {
    driving=null; theft=null; rogue=null; robbery=null; gangTarget=null; gang.length=0;
    rogueClock=27;
    cash=startingCash; armed=false; equipped=false; ammo=0; previousAim=false;
    heat=shotCooldown=flash=impactCooldown=stepCooldown=noticeTime=0;
    witnessClock=0;sightOfPolice=false;lastKnown=null;effects.reset();world.resetDoors();
    punchMotion=hitTime=impactTime=jumpVelocity=deathClock=0;
    punchPending=false;punchAt=0;cameraInside=false;
    yaw=.32; pitch=.22;
    cameraIdle=0;
    Object.assign(player,spawn,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0});
    syncFloor(player);
    player.model.root.position.set(player.x,0,player.z);
    player.model.root.rotation.set(0,0,0);
    player.model.root.visible=true;
    player.model.shadow.visible=true;
    animatePerson(player.model,0,0,false,false);
    parked.forEach((car,index)=>{
      resetVehicle(car,[...carSpawns,...bikeSpawns][index]);
      car.stolen=false;
      car.body.rotation.z=0;
      poseCar(car,0);
    });
    intersections.clear();
    traffic.forEach((car,index)=>{resetDriver(car,index);poseCar(car,0);});
    for(const unit of police) {
      resetVehicle(unit.car,unit.berth);
      Object.assign(unit,{mode:'ready',stall:0,stop:null,intent:0,combat:null,departing:false,retaliation:null});
      poseCar(unit.car,0);
    }
    for(const npc of pedestrians) resetActor(npc);
    for(const npc of ejected) {npc.seated=true;npc.model.root.visible=false;}
    for(const item of pickups) scene.remove(item.mesh);
    pickups.length=0;
    for(const car of cars) car.passengers=[];
    world.props.reset();
    world.sun.shadow.needsUpdate=true;
    player.deadTime=0;
    startPatrol(police[0]);
    const arms=publicShops.find(building=>building.kind==='armory')?.entry??weaponShop;
    world.marker.position.set(arms.x,.02,arms.z);
    world.marker.scale.setScalar(.44);
    world.marker.visible=true;
    uiTime=0;
  }

  function announce(message) {
    notice=message;
    noticeTime=2.4;
  }

  function refreshShop() {
    element('shop-detail').textContent=armed
      ? 'Reponha a munição até '+ammoPack+' balas, sem custo.'
      : 'Uma pistola e '+ammoPack+' balas por R$ '+weaponPrice+'.';
    element('shop-balance').textContent='Saldo: R$ '+cash+' · Balas: '+ammo;
    buy.textContent=armed?'Repor munição':'Comprar pistola';
    buy.disabled=armed?ammo>=ammoPack:cash<weaponPrice;
  }

  function openShop() {
    input.clear();
    if(document.pointerLockElement) document.exitPointerLock();
    refreshShop();
    shop.showModal();
    if(!buy.disabled) buy.focus();
    else element('close-shop').focus();
  }

  function closeShop() {
    shop.close();
    input.clear();
    uiTime=0;
  }

  function purchase() {
    if(!shop.open || buy.disabled) return;
    if(!armed) {
      armed=true;
      equipped=true;
      cash-=weaponPrice;
      announce('Pistola comprada.');
    } else announce('Munição reposta.');
    ammo=ammoPack;
    audio.bell();
    closeShop();
  }

  function policeSees(actor) {
    const target={...actor,ground:cars.includes(actor)?actor.root.position.y:actorGround(actor),angle:actor.angle};
    const solids=scanSolids();
    return police.some(unit=>{
      const {officer,car,mode}=unit;
      if(officer.health<=0) return false;
      if(officer.seated && ['driving','patrol','returning'].includes(mode)) {
        return canSee({...car,ground:car.root.position.y},target,solids,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13});
      }
      return canSee({...officer,ground:actorGround(officer)},target,solids,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.20});
    });
  }

  function wanted(pressure,actor=driving??player,observed=policeSees(actor)) {
    if(!observed) return false;
    const oldRank=wantedUnits(heat);
    heat=Math.min(64,Math.max(heat+(heat>0?pressure*.52:0),pressure));
    sightOfPolice=true;
    witnessClock=.24;
    lastKnown={x:actor.x,z:actor.z,y:actorGround(actor),health:100,seated:false,angle:actor.angle};
    if(!oldRank) announce('Crime visto pela polícia.');
    return true;
  }

  const atShop=()=>!driving && actorGround(player)<1 && publicShops.some(building=>building.kind==='armory' &&
    world.interiorAt(player.x,player.z,actorGround(player))?.buildingId===building.id &&
    distance(player,building.clerk)<3.0);
  const atBed=()=>!driving && distance(player,{x:residence.x,z:residence.z+6.25})<1.7;
  const vehicleList=()=>cars;
  const living=actor=>actor && actor.health>0 && !actor.seated;
  const vehicleName=car=>car.kind==='bike'?'Moto':'Cupê';
  const lockedDoor=()=>!driving&&world.doors.find(door=>door.private && !door.breached && !door.opened &&
    Math.abs(door.base-actorGround(player))<.85 && distance(door,player)<1.62);
  function carAt() {
    if(actorGround(player)>1.02) return null;
    let nearest=null, limit=3.0;
    for(const car of civilianCars) {
      const gap=distance(player,car);
      if(gap>=limit || car.integrity<=0 || Math.abs(car.speed)>3.4) continue;
      nearest=car;
      limit=gap;
    }
    return nearest;
  }
  function exitVehicle(forced=false) {
    if(!driving) return;
    const {angle,x,z}=driving;
    if(!forced && Math.hypot(driving.vx,driving.vz)>4.2) {announce('Reduza a velocidade para sair.');return;}
    const side=driving.kind==='bike'?1.02:1.64;
    const spots=[side,-side,side+.53,-side-.53].map(offset=>[x+Math.cos(angle)*offset,z-Math.sin(angle)*offset]);
    spots.push([x-Math.sin(angle)*2.75,z-Math.cos(angle)*2.75],[x+Math.sin(angle)*2.77,z+Math.cos(angle)*2.77]);
    const slot=spots.find(([px,pz])=>actorClear({x:px,z:pz},px,pz,world.walkSolids(px,pz,0),cars,activePeople,.36));
    if(!slot && !forced) {announce('Sem espaço para abrir a porta.');return;}
    [player.x,player.z]=slot??[spawn.x,spawn.z];
    player.floorY=0;syncFloor(player);
    for(const npc of [...(driving.passengers??[])]) unseat(npc);
    player.angle=angle;
    Object.assign(player,{vx:0,vz:0,pushX:0,pushZ:0});
    driving.abandoned=0;
    driving=null;
    player.model.root.visible=true;
    player.model.shadow.visible=true;
    player.model.root.rotation.set(0,angle,0);
    animatePerson(player.model,0,0,false,equipped);
  }

  function wakeUp() {
    exitVehicle(true);
    Object.assign(player,{x:residence.x,z:residence.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0});
    syncFloor(player);
    jumpVelocity=0;
    heat=0;
    deathClock=0;
    yaw=-Math.PI/2;
    cameraFresh=true;
    announce('Você voltou para casa.');
  }

  function interact() {
    if(theft || player.health<=0) return;
    if(driving) {exitVehicle();return;}
    if(atShop()) {openShop();return;}
    if(atBed()) {
      const record={health:player.health,cash,armed,equipped,ammo,recruits:gang.map(npc=>npc.id)};
      announce(saveProgress(record)?'Progresso salvo na porta de casa.':'O navegador bloqueou o salvamento.');
      audio.bell();
      return;
    }
    const car=carAt();
    if(!car) {announce(lockedDoor()?'Porta trancada.':'Nada para interagir aqui.');return;}
    if(car.driver) {
      const driver=ejected.find(npc=>npc.seated && !npc.riding)??ejected.find(npc=>npc.exitAge>14 && npc.role==='civilian' && distance(npc,player)>11);
      if(driver) {
        const dir=car.angle-Math.PI/2;
        const x=car.x+Math.sin(dir)*(car.kind==='bike'?.95:1.51);
        const z=car.z+Math.cos(dir)*(car.kind==='bike'?.95:1.51);
        const safe=actorClear({x,z},x,z,world.walkSolids(x,z,0),cars,activePeople,.29)?{x,z}:{x:player.x,z:player.z};
        resetActor(driver);
        Object.assign(driver,safe,{angle:dir,exitAnim:.44,fear:6,exitSide:-1,exitAge:0});
        if(car.rider) car.rider.root.visible=false;
      }
      car.driver=null;
      car.vx=car.vz=car.speed=0;
      car.doorTime=.65;
      theft={car,delay:.46};
      announce(car.kind==='bike'?'Tirando o piloto da moto…':'Tirando o motorista do carro…');
    } else enter(car);
  }

  function enter(car) {
    driving=car;
    car.driver=null;
    player.lift=0;
    Object.assign(player,{vx:0,vz:0,pushX:0,pushZ:0,trip:0});
    jumpVelocity=0;
    player.model.root.visible=car.kind==='bike';
    if(!car.stolen) {car.stolen=true;wanted(13);}
    car.passengers??=[];
    if(car.kind==='car') {
      const riders=gang.filter(npc=>living(npc) && distance(npc,car)<35)
        .sort((a,b)=>distance(a,car)-distance(b,car)).slice(0,3-car.passengers.length);
      riders.forEach((npc,i)=>{npc.boardCar=car;npc.boardSide=i%2?1:-1;npc.boardRow=i===0?.55:-.75;});
    }
    yaw=car.angle;
    cameraIdle=0;
    cameraFresh=true;
  }

  function leaveLoot(kind, actor, count) {
    const mesh=new T.Mesh(pickupGeo,pickupColors[kind]);
    const y=actorGround(actor)+.13;
    mesh.position.set(actor.x+.22,y,actor.z+.19);
    scene.add(mesh);
    pickups.push({mesh,kind,count,y,wait:.32,left:105});
  }

  function updateLoot(dt) {
    for(let i=pickups.length-1;i>=0;i--) {
      const item=pickups[i];
      item.left-=dt; item.wait-=dt;
      item.mesh.rotation.y+=dt*2.1;
      item.mesh.position.y=item.y+Math.sin(item.left*3.8)*.08;
      const near=!driving && player.health>0 && item.wait<0 && Math.abs(actorGround(player)-item.y)<.65 &&
        Math.hypot(player.x-item.mesh.position.x,player.z-item.mesh.position.z)<1.03;
      if(near) {
        if(item.kind==='cash') {cash+=item.count;announce('R$ '+item.count+' recolhidos.');}
        else if(!armed && item.kind==='weapon') {armed=equipped=true;ammo+=item.count;announce('Pistola recolhida.');}
        else {ammo=Math.min(360,ammo+item.count);announce('+'+item.count+' balas.');}
        audio.bell();
      }
      if(near || item.left<=0) {scene.remove(item.mesh);pickups.splice(i,1);}
    }
  }

  function harm(npc,amount,from=null) {
    if(npc.health<=0 || amount<=0) return;
    npc.health=Math.max(0,npc.health-amount);
    if(npc.health<=0) {
      // Fall away from the attacker, or along the push of a vehicle or punch.
      const vx=from?npc.x-from.x:npc.pushX, vz=from?npc.z-from.z:npc.pushZ;
      npc.fallDir=Math.sin(npc.angle)*vx+Math.cos(npc.angle)*vz>0?1:-1;
      npc.deadTime=0;
      if(from && npc!==player) {
        const length=Math.max(.1,Math.hypot(vx,vz));
        npc.pushX+=vx/length*1.3;npc.pushZ+=vz/length*1.3;
      }
    }
    if(npc===player) {
      impactTime=.22;
      if(npc.health<=0) {exitVehicle(true);deathClock=3;announce('Você caiu. Voltando para casa…');}
      return;
    }
    npc.stagger=.32;
    npc.fear=6;
    npc.surrender=0;
    if(robbery?.npc===npc) robbery=null;
    if(npc.health>0) return;
    if(gangTarget===npc) gangTarget=null;
    npc.down=npc.role==='police'?28:19;
    npc.model.shadow.visible=false;
    const stain=new T.Mesh(decals,bloodMat);
    stain.position.set(npc.x+Math.sin(npc.angle)*npc.fallDir*1.0,actorGround(npc)+.019,npc.z+Math.cos(npc.angle)*npc.fallDir*1.0);
    stain.rotation.x=-Math.PI/2;
    stain.scale.set(.52,.32,1);
    scene.add(stain);
    npc.drop=stain;
    if(npc.role==='police') leaveLoot(armed?'ammo':'weapon',npc,12);
    else if(npc.role!=='ally' && !npc.robbed) leaveLoot('cash',npc,24+Math.floor(Math.abs(npc.z)%27));
    if(rogue===npc) {rogue=null;rogueClock=29;}
    const ally=gang.indexOf(npc);
    if(ally>=0) gang.splice(ally,1);
  }

  function bodies(shooter) {
    const actors=[...activePeople,player];
    return actors.filter(actor=>actor!==shooter && living(actor) && !(actor===player && driving && driving.kind==='car')).map(actor=>{
      const y=actorGround(actor)+(actor===player?player.lift:0);
      return {actor,y,bounds:[actor.x-.31,y+.10,actor.z-.31,actor.x+.31,y+1.9,actor.z+.31]};
    });
  }

  function assessSight() {
    camera.getWorldDirection(shotDirection);
    const subjects=bodies(player);
    const solids=scanSolids();
    const hit=traceShot(camera.position.toArray(),shotDirection.toArray(),solids,subjects,28).hit;
    const origin=[player.x,actorGround(player)+1.38+player.lift,player.z];
    if(hit && distance(player,hit.actor)<24 &&
      reachable(origin,[hit.actor.x,hit.y+1.25,hit.actor.z],solids)) return hit.actor;
    let best=.15,candidate=null;
    for(const {actor,y} of subjects) {
      if(distance(player,actor)>18) continue;
      projection.set(actor.x,y+1.25,actor.z).project(camera);
      const score=Math.hypot(projection.x,projection.y);
      if(projection.z>=1 || score>=best || !reachable(origin,[actor.x,y+1.25,actor.z],solids)) continue;
      best=score;candidate=actor;
    }
    if(candidate) return candidate;
    const boxes=cars.filter(car=>car!==driving && car.integrity>0 && distance(player,car)<32).map(car=>({car,
      oriented:{center:[car.x,car.root.position.y+.8,car.z],half:car.kind==='bike'?[.4,.75,1.1]:[1.0,.75,2.15],angle:car.angle}}));
    return traceShot(camera.position.toArray(),shotDirection.toArray(),solids,boxes,34).hit?.car??null;
  }

  const policeCar=car=>police.find(unit=>unit.car===car);
  const isVehicle=target=>cars.includes(target);
  function occupied(car) {
    if(car===driving || car.driver) return true;
    const unit=policeCar(car);
    return Boolean(unit && unit.officer.seated && unit.officer.health>0 && ['driving','patrol'].includes(unit.mode));
  }
  const targetActive=target=>Boolean(target) && (isVehicle(target)?target!==driving && target.integrity>0 && occupied(target):living(target));

  function tagForGang(target) {
    if(!target) return;
    if(isVehicle(target)) {
      if(target!==driving && target.integrity>0 && occupied(target)) gangTarget=target;
      return;
    }
    if(target.role!=='ally' && target.health>0) gangTarget=target;
  }

  /** Pulls the driver, rider or officer out of a vehicle that was shot and applies the wound. */
  function ejectOccupant(car,damage,from) {
    const unit=policeCar(car);
    const patrol=unit && unit.officer.seated && ['driving','patrol'].includes(unit.mode)?unit:null;
    const victim=patrol?.officer??(car.driver?ejected.find(npc=>npc.seated && !npc.riding):null);
    if(!victim) return false;
    if(!patrol) resetActor(victim);
    const side=car.angle-Math.PI/2, reach=car.kind==='bike'?.95:1.55;
    Object.assign(victim,{seated:false,x:car.x+Math.sin(side)*reach,z:car.z+Math.cos(side)*reach,fear:6,exitAge:0,floorY:0});
    victim.model.root.visible=true;
    victim.model.shadow.visible=true;
    car.driver=null;car.vx*=.45;car.vz*=.45;car.speed*=.45;
    if(car.rider) car.rider.root.visible=false;
    if(patrol) patrol.mode='foot';
    harm(victim,damage,from);
    return true;
  }

  /** NPC bullet against a vehicle: bodywork, then glass, then whoever sits behind the broken glass. */
  function shootVehicle(car,height,shooter) {
    if(car.kind==='bike') {
      if(height>.85 || Math.random()<.45) {
        if(car===driving) {
          harm(player,14,shooter);
          if(player.health>0 && Math.random()<.3) {exitVehicle(true);player.trip=.6;announce('VocÃª caiu da moto.');}
        } else ejectOccupant(car,40,shooter);
        return;
      }
      car.integrity=Math.max(0,car.integrity-4);
      return;
    }
    if(height>.92) {
      if(car.cabin?.visible) {
        car.cabin.visible=false;
        if(car===driving) announce('Vidros estourados.');
        return;
      }
      if(car===driving) harm(player,16,shooter);
      else if(Math.random()<.5) ejectOccupant(car,70,shooter);
      return;
    }
    car.integrity=Math.max(0,car.integrity-5);
  }

  function seatPoint(car,npc) {
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    const row=npc.boardRow??-.75;
    for(const side of [npc.boardSide??1,-(npc.boardSide??1)]) {
      const point={x:car.x+sz*side*1.5+sx*row,z:car.z-sx*side*1.5+sz*row};
      if(actorClear(npc,point.x,point.z,world.walkSolids(point.x,point.z,0),[],[],.3)) return point;
    }
    return {x:car.x-sx*2.8,z:car.z-sz*2.8};
  }

  function boardVehicle(npc,dt) {
    const car=npc.boardCar;
    if(driving!==car || car.integrity<=0 || (car.passengers?.length??0)>=3) {npc.boardCar=null;return 0;}
    if(Math.hypot(car.vx,car.vz)>2.5) {
      const slot=formationPoint(car,gang.indexOf(npc));
      return distance(slot,npc)>1.25?followIndoors(npc,slot,6.1,dt):0;
    }
    const door=seatPoint(car,npc);
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    const dx=npc.x-car.x,dz=npc.z-car.z;
    const along=dx*sx+dz*sz, lateral=dx*sz-dz*sx;
    const doorLateral=(door.x-car.x)*sz-(door.z-car.z)*sx;
    if(distance(npc,door)<.75 || distance(npc,car)<1.9 || Math.abs(lateral)>1.2 && Math.abs(lateral)<1.95 && Math.abs(along)<1.6) {
      npc.seated=true;npc.riding=car;npc.boardCar=null;
      npc.model.root.visible=false;
      car.passengers.push(npc);
      car.doorTime=.6;
      return 0;
    }
    // Beside the car: use the door on that side. In front or behind: step out past the corner first.
    if(Math.abs(lateral)>=1.45) {
      npc.boardSide=Math.sign(lateral);
      return guide(npc,door,4.8,dt);
    }
    const side=Math.sign(doorLateral)||1, end=Math.sign(along)||1;
    const hold=end*Math.max(2.75,Math.abs(along));
    return guide(npc,{x:car.x+sx*hold+sz*side*1.65,z:car.z+sz*hold-sx*side*1.65},4.8,dt);
  }

  function unseat(npc) {
    const car=npc.riding;
    npc.riding=null;npc.boardCar=null;
    if(!car) return;
    car.passengers=(car.passengers??[]).filter(other=>other!==npc);
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    const spots=[[1.6,-.75],[-1.6,-.75],[1.6,.55],[-1.6,.55],[0,-3],[2.3,0],[-2.3,0],[0,3.1]].map(([side,row])=>
      ({x:car.x+sz*side+sx*row,z:car.z-sx*side+sz*row}));
    const spot=spots.find(point=>actorClear(npc,point.x,point.z,world.walkSolids(point.x,point.z,0),cars.filter(other=>other!==car),activePeople,.3))??spots[0];
    Object.assign(npc,spot,{seated:false,floorY:0,angle:car.angle,exitAnim:.3,exitSide:1});
    syncFloor(npc);
    npc.model.root.visible=true;
    npc.model.shadow.visible=true;
  }

  function updatePassengers(dt) {
    for(const npc of gang) {
      if(!npc.riding) continue;
      const car=npc.riding;
      if(driving!==car) {unseat(npc);continue;}
      npc.x=car.x;npc.z=car.z;npc.floorY=0;
      npc.attack-=dt;
      if(targetActive(gangTarget) && npc.attack<=0 && distance(car,gangTarget)<18) fireNPC(npc,gangTarget);
    }
  }

  function policeWitness(shooter,victim) {
    const solids=scanSolids(),target={...shooter,ground:actorGround(shooter)};
    for(const unit of police) {
      const officer=unit.officer;
      if(!living(officer)) continue;
      if(officer===victim || canSee({...officer,ground:actorGround(officer)},target,solids,
        {range:25,fov:Math.PI*.84,eye:1.6,aim:1.24})) unit.retaliation=shooter;
    }
  }

  function recruit(npc) {
    if(!npc || !['civilian','resident'].includes(npc.role) || npc.health<=0) {
      announce('Mire em um pedestre disponível para recrutar.');return;
    }
    npc.role='ally';
    npc.surrender=0;
    npc.fear=0;
    npc.route=[];
    gang.push(npc);
    if(robbery?.npc===npc) robbery=null;
    announce('Guarda-costas recrutado.');
    audio.bell();
  }

  function updateRobbery(dt,npc) {
    if(player.health<=0 || !npc || !['civilian','resident','clerk'].includes(npc.role) ||
      npc.robbed || distance(player,npc)>9.0 || Math.abs(actorGround(player)-actorGround(npc))>.65) {
      if(robbery) {robbery.npc.surrender=0;robbery=null;}
      return;
    }
    const dx=player.x-npc.x,dz=player.z-npc.z;
    const facing=Math.sin(npc.angle)*dx+Math.cos(npc.angle)*dz;
    if(robbery?.npc!==npc) {
      if(robbery) robbery.npc.surrender=0;
      robbery=null;
      if(facing<Math.hypot(dx,dz)*.30 || npc.stagger>0 || npc.fear>0) return;
      robbery={npc,left:5};
    }
    npc.surrender=1;
    npc.angle=Math.atan2(dx,dz);
    robbery.left-=dt;
    if(robbery.left<=0) {
      npc.robbed=true;
      npc.surrender=0;
      npc.fear=7;
      leaveLoot('cash',npc,(npc.role==='clerk'?104:38)+Math.floor(Math.abs(npc.z)%31));
      wanted(15);
      announce(npc.role==='clerk'?'Dinheiro da loja no chão.':'Dinheiro no chão.');
      robbery=null;
    }
  }

  function punch() {
    if(punchMotion>0 || player.health<=0 || player.trip>.15 || theft) return;
    player.angle=yaw;
    punchHand=1-punchHand;
    player.pushX+=Math.sin(yaw)*1.5;player.pushZ+=Math.cos(yaw)*1.5;
    punchMotion=FIST_DURATION;
    punchPending=true;
    punchAt=FIST_CONTACT_DELAY;
    tagForGang(cachedSight);
    audio.punch(false);
  }

  function resolvePunch() {
    punchPending=false;
    if(player.health<=0 || driving) return;
    const victim=findPunch(player,activePeople.filter(person=>living(person)&&person.role!=='ally'&&
      Math.abs(actorGround(player)-actorGround(person))<.73),actorGround(player)+player.lift,scanSolids());
    if(!victim) return;
    tagForGang(victim);
    audio.punch(true);
    const dx=victim.x-player.x,dz=victim.z-player.z,length=Math.max(.2,Math.hypot(dx,dz));
    victim.pushX=dx/length*3.6;victim.pushZ=dz/length*3.6;
    harm(victim,18,player);
    hitTime=.19;
    wanted(victim.role==='police'?28:12);
    announce(victim.health<=0?'Pedestre derrubado.':'Soco acertou.');
  }

  function fire(aim) {
    if(punchMotion>0 || shotCooldown>0 || player.health<=0 || !armed || !equipped) return;
    if(ammo<=0) {if(aim) tagForGang(cachedSight);shotCooldown=.32;announce('Sem balas. Reponha na loja.');return;}
    const watched=policeSees(player);
    ammo--;shotCooldown=.28;flash=.095;
    player.angle=yaw;
    player.model.root.rotation.y=yaw;
    animatePerson(player.model,0,0,true,true,0,aim?pitch:pitch-.22);
    player.model.muzzle.getWorldPosition(shotFrom);
    audio.shot();
    const candidates=bodies(player);
    const vehicles=cars.map(car=>{
      const width=car.kind==='bike'?.31:.96,length=car.kind==='bike'?1.08:1.84;
      const y=car.root.position.y;
      return {car,oriented:{center:[car.x,y+(car.kind==='bike'?.67:.56),car.z],
        half:[width,car.kind==='bike'?.44:.40,length],angle:car.angle}};
    });
    camera.getWorldDirection(shotDirection);
    const riders=cars.filter(car=>car.rider && car.driver).map(car=>({
      rider:car,oriented:{center:[car.x,car.root.position.y+1.42,car.z],half:[.32,.45,.33],angle:car.angle}
    }));
    const cabins=cars.filter(car=>car.cabin && car!==driving).map(car=>({
      windowCar:car,oriented:{center:[car.x-.33*Math.sin(car.angle),car.root.position.y+1.21,car.z-.33*Math.cos(car.angle)],
        half:[.80,.25,1.1],angle:car.angle}
    }));
    const solids=scanSolids(),targets=[...candidates,...riders,...cabins,...vehicles];
    const origin=shotFrom.toArray();
    const shot=aimShot(camera.position.toArray(),shotDirection.toArray(),origin,solids,targets,{ground:groundHeight});
    const result=shot.impact;
    const hit=result.hit;
    const door=world.doors.find(door=>door.private && !door.breached && result.solid===door.closedSolid &&
      Math.hypot(result.point[0]-door.handle.x,result.point[1]-door.handle.y,result.point[2]-door.handle.z)<.28);
    let pressure=17;
    if(door && world.breachDoor(door.id)) {
      pressure=23;
      announce('Fechadura rompida.');
    } else if(hit?.actor && hit.actor.role!=='ally') {
      tagForGang(hit.actor);
      harm(hit.actor,shotDamage(result.point[1]-hit.y),player);
      pressure=hit.actor.role==='police'?34:23;
      hitTime=.21;
      announce(hit.actor.health<=0?'Alvo derrubado.':'Disparo acertou.');
    } else if(hit?.rider || hit?.windowCar) {
      const car=hit.rider??hit.windowCar;
      tagForGang(car);
      if(car.cabin) car.cabin.visible=false;
      const seat={oriented:{center:[car.x-.42*Math.cos(car.angle),car.root.position.y+1.20,car.z+.42*Math.sin(car.angle)],
        half:[.26,.28,.29],angle:car.angle}};
      if(occupied(car) && (hit.rider || traceShot(origin,shot.direction,[],[seat],52).hit) && ejectOccupant(car,hit.rider?50:100,player)) {
        hitTime=.21;
      }
    } else if(hit?.car) {
      tagForGang(hit.car);
      hit.car.integrity=Math.max(0,hit.car.integrity-5);
      hitTime=.16;
    } else if(aim) tagForGang(cachedSight);
    wanted(pressure,player,watched);
    for(const npc of activePeople) {
      if(['civilian','resident'].includes(npc.role) && distance(npc,player)<17) npc.fear=Math.max(npc.fear,4.8);
    }
    effects.emit(origin,result,{mark:hit?.car?true:undefined,attach:hit?.car?.root});
  }

  function drive(dt,control) {
    const car=driving;
    stepVehicle(car,dt,{throttle:control.y,steer:-control.x,brake:control.brake},vehicleSolids,vehicleList());
    if(cameraIdle>1.15 && Math.abs(car.speed)>2.4) yaw=turn(yaw,car.angle,dt*2.3);
  }

  function walk(dt,control) {
    const magnitude=Math.min(1,Math.hypot(control.x,control.y));
    const canMove=player.health>0 && !theft && player.trip<.12;
    const speed=canMove?magnitude*(control.aim?2.1:control.run?7.4:4.2):0;
    const direction=yaw+Math.atan2(-control.x,control.y || 0);
    if(control.jump && canMove && player.lift===0) jumpVelocity=4.18;
    if(jumpVelocity!==0 || player.lift>0) {
      player.lift=Math.max(0,player.lift+jumpVelocity*dt-11.8*dt*dt);
      jumpVelocity=player.lift>0?jumpVelocity-23.6*dt:0;
    }
    const blend=1-Math.exp(-dt*(speed>.02?19:27));
    player.vx+=(Math.sin(direction)*speed-player.vx)*blend;
    player.vz+=(Math.cos(direction)*speed-player.vz)*blend;
    const moved=moveActor(player,(player.vx+player.pushX)*dt,(player.vz+player.pushZ)*dt,
      walkGeometry(player),collisionFleet(player),activePeople);
    player.pushX*=Math.exp(-dt*6.2);player.pushZ*=Math.exp(-dt*6.2);
    player.trip=Math.max(0,player.trip-dt);
    if(punchMotion<=0 && canMove && (control.aim || magnitude>.05)) player.angle=turn(player.angle,control.aim?yaw:direction,dt*11);
    const model=player.model;
    syncFloor(player);
    model.root.position.set(player.x,actorGround(player)+player.lift,player.z);
    model.shadow.visible=player.health>0 && player.lift<.06;
    if(player.health<=0) {
      player.deadTime=(player.deadTime??0)+dt;
      const tilt=poseFall(model,player.deadTime,-1);
      model.root.rotation.set(tilt,player.angle,0);
      model.root.position.y+=Math.abs(Math.sin(tilt))*.17;
      return;
    }
    model.root.rotation.set(Math.min(1.25,player.trip*2.7),player.angle,0);
    animatePerson(model,dt,player.trip>.05?0:Math.min(7.5,moved/dt),
      equipped && (control.aim || flash>0) && punchMotion<=0,equipped && punchMotion<=0,0,control.aim?pitch:0);
    if(punchMotion>0 || control.aim && !equipped) poseFists(model,{aim:control.aim,punch:punchMotion,pitch,hand:punchHand});
    if(moved && stepCooldown<=0 && player.lift===0) {audio.step();stepCooldown=control.run?.27:.41;}
  }

  function doorApproach(car) {
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    return [{x:car.x-sz*1.66,z:car.z+sx*1.66},{x:car.x+sz*1.66,z:car.z-sx*1.66}].find(point=>
      actorClear(point,point.x,point.z,world.walkSolids(point.x,point.z,0),cars,activePeople,.38));
  }

  function approachCar(npc,car,point) {
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    if(!point) return null;
    const through=[.28,.5,.73,.92].some(t=>{
      const x=npc.x+(point.x-npc.x)*t,z=npc.z+(point.z-npc.z)*t;
      const dx=x-car.x,dz=z-car.z;
      return Math.abs(dx*sx+dz*sz)<2.47 && Math.abs(dx*sz-dz*sx)<1.33;
    });
    if(!through) return point;
    const offset=(npc.x-car.x)*sx+(npc.z-car.z)*sz>0?2.9:-2.9;
    const side=(point.x-car.x)*sz-(point.z-car.z)*sx;
    return {x:car.x+sx*offset+sz*side,z:car.z+sz*offset-sx*side};
  }

  function disembark(unit) {
    const npc=unit.officer,car=unit.car;
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    const next=doorApproach(car)??[{x:car.x-sx*2.83,z:car.z-sz*2.83},{x:car.x+sx*2.87,z:car.z+sz*2.87}]
      .find(point=>actorClear(point,point.x,point.z,world.walkSolids(point.x,point.z,0),cars,activePeople,.37));
    if(!next) return false;
    npc.seated=false;
    npc.model.root.visible=true;
    npc.x=next.x;npc.z=next.z;npc.floorY=0;syncFloor(npc);
    npc.angle=car.angle;
    npc.exitAnim=.38;
    npc.model.shadow.visible=true;
    car.doorTime=.65;
    unit.mode='foot';
    return true;
  }

  function fireNPC(npc,target) {
    const vehicle=cars.includes(target)?target:null;
    if(distance(npc,target)>18 || distance(npc,target)<.5 || (vehicle?vehicle.integrity<=0:!living(target))) return false;
    const height=actorGround(npc);
    const destination=(vehicle?vehicle.root.position.y:actorGround(target))+(target===player?player.lift:0)+(vehicle?1.08:1.27);
    const solids=scanSolids();
    if(!reachable([npc.x,height+1.35,npc.z],[target.x,destination,target.z],solids)) return false;
    npc.angle=Math.atan2(target.x-npc.x,target.z-npc.z);
    npc.model.root.position.set(npc.x,height,npc.z);
    npc.model.root.rotation.y=npc.angle;
    const elevation=Math.atan2(height+1.42-destination,Math.max(.4,distance(npc,target)));
    animatePerson(npc.model,0,0,true,true,0,elevation);
    npc.model.muzzle.getWorldPosition(enemyFrom);
    const phase=introTime*14+npc.x;
    const deviation=Math.sin(phase)*(npc.role==='ally'?.35:.48);
    const aimX=target.x+Math.cos(npc.angle)*deviation,aimZ=target.z-Math.sin(npc.angle)*deviation;
    enemyTo.set(aimX,destination+Math.cos(phase*1.4)*.32,aimZ);
    const flight=Math.min(24,enemyFrom.distanceTo(enemyTo)+1.65);
    const dir=enemyDirection.subVectors(enemyTo,enemyFrom).normalize();
    const targets=bodies(npc);
    if(vehicle) targets.push({actor:vehicle,y:0,bounds:[target.x-.93,.30,target.z-1.02,target.x+.93,1.52,target.z+1.02]});
    const result=traceImpact(enemyFrom.toArray(),dir.toArray(),solids,targets,flight,{ground:groundHeight});
    if(npc.role==='ally' && (target.role==='police'||policeCar(target)||result.hit?.actor.role==='police')) {
      policeWitness(npc,result.hit?.actor);
    }
    if(result.hit && (result.hit.actor===target || result.hit.actor.role==='civilian')) {
      const factor=npc.role==='police' && target===player?.62:.83;
      if(vehicle && result.hit.actor===vehicle) {
        shootVehicle(vehicle,enemyFrom.y+dir.y*result.distance-vehicle.root.position.y,npc);
      } else harm(result.hit.actor,Math.round(shotDamage(enemyFrom.y+dir.y*result.distance-result.hit.y)*factor),npc);
    }
    enemyTo.copy(enemyFrom).addScaledVector(dir,result.distance);
    if(npc.role!=='ally' && (target===player || target===driving ||
      threatensPlayer(enemyFrom,enemyTo,driving??player))) tagForGang(npc);
    effects.emit(enemyFrom.toArray(),result,{enemy:true});
    npc.attack=(npc.role==='police'?.91:1.07)+(Math.sin(phase)+1)*.18;
    if(distance(npc,driving??player)<31) audio.shot();
    return true;
  }

  function pursue(npc,target,dt) {
    const gap=distance(npc,target);
    if(npc.stagger>0 || npc.exitAnim>0) return {speed:0,aim:false};
    const ready=gap<17 && npc.attack<=0 && fireNPC(npc,target);
    if(ready || (npc.attack>.28 && gap<15.5)) {
      npc.angle=turn(npc.angle,Math.atan2(target.x-npc.x,target.z-npc.z),dt*12);
      return {speed:0,aim:true};
    }
    return {speed:gap>3.3 || Math.abs(actorGround(npc)-actorGround(target))>1.8?followIndoors(npc,target,4.4,dt):0,aim:gap<12};
  }

  function suspectFor(actor,dt) {
    rogueClock-=dt;
    if(rogue) {
      if(rogueClock<=0) {rogue.role='civilian';rogue.fear=4;rogue=null;rogueClock=37;}
      return;
    }
    if(rogueClock>0) return;
    const candidate=civilians.find(npc=>npc.role==='civilian' && living(npc) && distance(npc,actor)>14 && distance(npc,station)<55);
    if(!candidate) {rogueClock=8;return;}
    candidate.role='rogue'; rogue=candidate; rogueClock=63; candidate.attack=.1;
  }

  const beat=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];

  function patrolStart(unit) {
    const next={kind:'car'};
    resetDriver(next,unit.route,unit.startShift);
    return next;
  }

  function startPatrol(unit,relocate=true) {
    const {car,officer}=unit;
    if(relocate) {
      const next=patrolStart(unit);
      resetVehicle(car,next);
      car.driver=next.driver;
    } else {
      const temp={};
      resetDriver(temp,unit.route);
      car.driver=temp.driver;
      const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
      let best=Infinity;
      car.driver.route.forEach((point,i)=>{
        const dx=point.x-car.x,dz=point.z-car.z;
        const score=Math.hypot(dx,dz)+(dx*sx+dz*sz<0?16:0);
        if(score<best) {best=score;car.driver.next=i;}
      });
    }
    unit.mode='patrol';unit.retaliation=null;unit.stop=null;unit.departing=false;
    officer.seated=true;officer.model.root.visible=false;
    poseCar(car,0);
  }

  function walkBeat(unit,dt) {
    const npc=unit.officer;
    let point=beat[unit.beat%beat.length];
    if(distance(npc,point)<1.1) {unit.beat++;point=beat[unit.beat%beat.length];}
    unit.intent=guide(npc,point,1.35,dt);
  }

  function updatePolice(dt,actor) {
    witnessClock-=dt;
    if(witnessClock<=0 && heat>0) {
      sightOfPolice=policeSees(actor);
      if(sightOfPolice) lastKnown={x:actor.x,z:actor.z,y:actorGround(actor),health:100,seated:false,angle:actor.angle};
      witnessClock=.24;
    }
    const target=heat>0 && player.health>0?(sightOfPolice?actor:lastKnown):rogue;
    const requested=target===rogue?(rogue?1:0):wantedUnits(heat);
    if(heat>0) {
      heat=Math.max(0,heat-dt*(sightOfPolice?.23:1.10));
      if(heat===0) {lastKnown=null;sightOfPolice=false;announce('VocÃª despistou a polÃ­cia.');}
    }
    police.forEach((unit,i)=>{
      const npc=unit.officer,car=unit.car;
      if(unit.retaliation && !living(unit.retaliation)) unit.retaliation=null;
      const defense=unit.retaliation,suspect=defense??target;
      const dispatch=Boolean(defense || target&&i<requested);
      if(npc.health<=0) {
        unit.mode='disabled';car.driver=null;
        if(npc.down<=0 && distance(npc,actor)>13 && cars.every(other=>other===car || distance(other,unit.berth)>3.5)) {
          resetActor(npc);resetVehicle(car,unit.berth);poseCar(car,0);unit.mode='ready';unit.retaliation=null;
        }
        return;
      }
      if(unit.mode==='patrol' && (dispatch || car.integrity<=0)) {
        unit.mode='driving';car.driver=null;unit.stop=null;unit.stall=0;unit.departing=false;
      }
      if(unit.mode==='patrol') return;
      if(defense && (unit.mode==='ready'||unit.mode==='boarding'||unit.mode==='reboard')) unit.mode='foot';
      if(unit.mode==='ready' && dispatch) {
        const nearCar=car.integrity>0 && distance(npc,car)<22;
        unit.mode=nearCar?'boarding':'foot';unit.stop=null;unit.stall=0;unit.departing=nearCar && distance(car,unit.berth)<2;
      }
      if(unit.mode==='boarding' || unit.mode==='reboard') {
        if(unit.mode==='boarding' && !dispatch) unit.mode='reboard';
        if(unit.mode==='reboard' && dispatch) unit.mode='boarding';
        const entry=doorApproach(car);
        if(car.integrity<=0 || distance(npc,car)>45) unit.mode=dispatch?'foot':'ready';
        else if(entry && distance(npc,entry)<.63) {
          npc.seated=true;npc.model.root.visible=false;car.doorTime=.60;
          if(unit.mode==='reboard') startPatrol(unit,false);
          else unit.mode='driving';
        } else if(entry) unit.intent=guide(npc,approachCar(npc,car,entry),unit.mode==='boarding'?3.75:1.8,dt);
      }
      if(unit.mode==='driving') {
        if(!dispatch && car.integrity>0 && !unit.departing) {startPatrol(unit,false);return;}
        const gap=suspect?distance(car,suspect):Infinity;
        const stop=!dispatch || car.integrity<=0 || (unit.stall>8.2 && !unit.maneuver) ||
          (gap<12.7 && !(suspect===driving && Math.abs(driving.speed)>6));
        if(stop) {
          stepVehicle(car,dt,{throttle:0,steer:0,brake:true},vehicleSolids,cars);
          if(Math.hypot(car.vx,car.vz)<2.7 && !disembark(unit) && car.integrity>0) {
            stepVehicle(car,dt,{throttle:.21,steer:.26,brake:false},vehicleSolids,cars);
          }
        } else patrolDrive(unit,suspect,vehicleSolids,cars,activePeople,dt);
      } else if(unit.mode==='foot') {
        if(dispatch && suspect===lastKnown) unit.intent=guide(npc,suspect,3.45,dt);
        else if(dispatch) unit.combat=pursue(npc,suspect,dt);
        else if(car.integrity>0 && distance(npc,car)<40) unit.mode='reboard';
        else {
          unit.mode='ready';
          if(distance(actor,car)>25 && cars.every(other=>other===car || distance(other,unit.berth)>3.5)) {resetVehicle(car,unit.berth);poseCar(car,0);}
        }
      } else if(unit.mode==='ready') {
        // No officer stands still: units with a free route patrol by car, the others walk the station block.
        const next=i<2 && distance(actor,npc)>24 && distance(actor,unit.berth)>19 && distance(npc,unit.berth)<30?patrolStart(unit):null;
        if(next && positionAvailable(next,cars.filter(other=>other!==car),actor,vehicleSolids)) startPatrol(unit);
        else walkBeat(unit,dt);
      }
      const flashing=unit.mode==='driving' || (dispatch && unit.mode==='foot');
      car.lamps.forEach((lamp,j)=>{lamp.visible=!flashing || Math.floor(introTime*8+j)%2===0;});
      if(flashing && alertCooldown<=0 && distance(actor,car)<42) {audio.siren();alertCooldown=1.35;}
    });
  }

  function updateVehicles(dt,actor) {
    const active={player:driving,vehicles:vehicleList()};
    const patrolCars=police.filter(unit=>unit.mode==='patrol').map(unit=>unit.car);
    driveTraffic([...traffic,...patrolCars],active,activePeople,vehicleSolids,dt,intersections);
    for(const car of parked) {
      if(car!==driving && Math.hypot(car.vx,car.vz)>.06) {
        stepVehicle(car,dt,{throttle:0,steer:0,brake:true},vehicleSolids,active.vehicles);
      } else if(car!==driving) car.impact=Math.max(0,car.impact-dt*21);
    }
    for(const car of cars) {
      if(car.routeIndex>=0 && car!==driving) {
        car.abandoned+=dt;
        const needsReturn=!car.driver && car.abandoned>25;
        const broken=car.integrity<=0 || (car.driver?.stuck??0)>13;
        if((needsReturn || broken) && distance(actor,car)>17) {
          const next={};
          resetDriver(next,car.routeIndex);
          next.kind=car.kind;
          if(positionAvailable(next,active.vehicles.filter(other=>other!==car),actor,vehicleSolids)) Object.assign(car,next);
        }
      }
      if (car!==driving && car.impact>5 && distance(actor,car)<18 && impactCooldown<=0) {
        audio.crash();
        impactCooldown=.32;
      }
      poseCar(car,dt,car.steer);
      if(car.rider) {
        car.rider.root.visible=Boolean(car.driver)&&car.integrity>0;
        if(car.rider.root.visible) ridePerson(car.rider,car);
      }
    }
    if (!driving) return;
    if(driving.impact>4.1 && impactCooldown<=0) {
      audio.crash();
      impactTime=.24;
      impactCooldown=.36;
      const crashed=driving;
      const force=crashed.impact;
      announce(crashed.integrity<43?'Motor avariado.':'Colisão.');
      if(driving && crashed.kind==='bike' && force>10.5) {
        harm(player,Math.min(40,Math.round(force*1.6)));
        crashed.integrity=Math.max(0,crashed.integrity-8);
        exitVehicle(true);
        announce('Você caiu da moto.');
      }
    }
    if(driving && driving.integrity<=0 && Math.hypot(driving.vx,driving.vz)<3) {
      const name=vehicleName(driving);
      exitVehicle(true);
      announce(name+' sem condições de rodar.');
    }
  }

  function guide(npc,target,speed,dt) {
    if(!target) return 0;
    const local=walkGeometry(npc),distanceToTarget=distance(npc,target);
    if(distanceToTarget<.13) return 0;
    const space=world.interiorAt(npc.x,npc.z,actorGround(npc));
    const destination=world.interiorAt(target.x,target.z,target.y??actorGround(target));
    if(!space && !destination && distanceToTarget>5.9) return aiWalk(npc,target,speed,dt);
    let point=target;
    const line=(origin,end)=>[.24,.46,.68,.88,1].every(f=>
      clear(origin.x+(end.x-origin.x)*f,origin.z+(end.z-origin.z)*f,.29,local));
    if(!line(npc,target)) {
      let best=Infinity;
      for(const box of local) {
        if(distance(npc,box)>Math.hypot(box.w,box.d)*.5+3.1) continue;
        for(const dx of [-1,1]) for(const dz of [-1,1]) {
          const test={x:box.x+dx*(box.w*.5+.44),z:box.z+dz*(box.d*.5+.44)};
          const gap=distance(npc,test),remaining=distance(test,target);
          if(gap<.30 || gap>4.5 || !line(npc,test)) continue;
          const score=gap+remaining+(remaining>distanceToTarget+.25?1.7:0);
          if(score<best) {best=score;point=test;}
        }
      }
    }
    const dir=Math.atan2(point.x-npc.x,point.z-npc.z);
    npc.angle=turn(npc.angle,dir,dt*8.5);
    const step=Math.min(speed*dt,distance(npc,point));
    return move(npc,npc.x+Math.sin(dir)*step,npc.z+Math.cos(dir)*step,.26,local)?speed:0;
  }

  function formationPoint(actor,index) {
    const y=actorGround(actor);
    if(world.interiorAt(actor.x,actor.z,y)) return {x:actor.x,z:actor.z,y};
    const row=Math.floor((Math.sqrt(1+index)-1)*.75);
    const side=(index%2===0?1:-1)*(1.05+(index%5)*.66);
    const behind=(cars.includes(actor)?5.6:3.1)+row*1.1;
    const sx=Math.sin(actor.angle),sz=Math.cos(actor.angle);
    return {x:actor.x-sx*behind+sz*side,z:actor.z-sz*behind-sx*side,y};
  }

  function followIndoors(npc,target,speed,dt) {
    const from=world.interiorAt(npc.x,npc.z,actorGround(npc));
    const destination=world.interiorAt(target.x,target.z,target.y??actorGround(target));
    if(from?.buildingId===destination?.buildingId && Math.abs((from?.floor??0)-(destination?.floor??0))<1.1) {
      npc.pursuitRoute=[];npc.pursuitKey='';
      return guide(npc,target,speed,dt);
    }
    const key=(destination?.buildingId??'street')+':'+(destination?.floor??0);
    if(npc.pursuitKey!==key) {
      npc.pursuitKey=key;
      const route=[];
      const fromBuilding=world.buildings.find(building=>building.id===from?.buildingId);
      const toBuilding=world.buildings.find(building=>building.id===destination?.buildingId);
      const fromUnit=fromBuilding?.units.find(unit=>Math.abs(unit.floor-from.floor)<.25);
      const toUnit=toBuilding?.units.find(unit=>Math.abs(unit.floor-destination.floor)<.25);
      if(fromBuilding) route.push(fromUnit?.inside,fromUnit?.entry,fromUnit?.outside,...[...(fromUnit?.stairs??[])].reverse(),
        fromBuilding.inside,fromBuilding.entry,fromBuilding.outside);
      if(toBuilding) route.push(toBuilding.outside,toBuilding.entry,toBuilding.inside,...(toUnit?.stairs??[]),
        toUnit?.outside,toUnit?.entry,toUnit?.inside);
      npc.pursuitRoute=route.filter(Boolean);
    }
    while(npc.pursuitRoute.length && distance(npc,npc.pursuitRoute[0])<.66 &&
      Math.abs(actorGround(npc)-(npc.pursuitRoute[0].y??0))<.85) npc.pursuitRoute.shift();
    return guide(npc,npc.pursuitRoute[0]??target,speed,dt);
  }

  function walkItinerary(npc,speed,dt) {
    const stop=npc.itinerary[0];
    if(!stop) return 0;
    if(distance(npc,stop)<.58 && Math.abs(actorGround(npc)-(stop.y??0))<1.1) {
      npc.itinerary.shift();
      return 0;
    }
    return guide(npc,stop,speed,dt);
  }

  function updatePeople(dt,actor,preview=false) {
    activePeople=pedestrians.filter(npc=>distance(npc,actor)<(npc.role==='civilian'?69:47) ||
      npc.role==='ally' || npc.role==='police' || npc===rogue || npc===gangTarget);
    const liveSet=new Set(activePeople);
    for(const npc of pedestrians) npc.model.root.visible=liveSet.has(npc)&&!npc.seated;
    const previous=new Map(activePeople.map(npc=>[npc,{x:npc.x,z:npc.z}]));
    if(!preview) {suspectFor(actor,dt);updatePolice(dt,actor);}
    for(const npc of activePeople) {
      if(npc.seated) continue;
      npc.attack-=dt;
      npc.stagger=Math.max(0,npc.stagger-dt);
      npc.injuryCooldown-=dt;
      npc.exitAnim=Math.max(0,npc.exitAnim-dt);
      npc.exitAge+=dt;
      if(npc.health<=0) {
        npc.down=Math.max(0,npc.down-dt);
        npc.deadTime+=dt;
        if(npc.deadTime<1.2) {
          npc.x+=npc.pushX*dt;npc.z+=npc.pushZ*dt;
          npc.pushX*=Math.exp(-dt*5);npc.pushZ*=Math.exp(-dt*5);
          const tilt=poseFall(npc.model,npc.deadTime,npc.fallDir);
          npc.model.root.rotation.set(tilt,npc.angle,0);
          npc.model.root.position.set(npc.x,actorGround(npc)+Math.abs(Math.sin(tilt))*.17,npc.z);
          if(npc.drop) npc.drop.position.set(npc.x+Math.sin(npc.angle)*npc.fallDir*1.25,actorGround(npc)+.019,npc.z+Math.cos(npc.angle)*npc.fallDir*1.25);
        }
        if(npc.drop) {
          const growth=Math.min(.63,.32+(19-npc.down)*.09);
          npc.drop.rotation.z=npc.angle;
          npc.drop.scale.set(Math.max(.38,growth),Math.max(.24,growth*.68),1);
        }
        if(npc.role!=='police' && npc.down<=0 && distance(npc.home,actor)>7 && distance(npc,actor)>7) {
          resetActor(npc);
          if(ejected.includes(npc)) {npc.seated=true;npc.model.root.visible=false;}
        }
        continue;
      }
      let speed=0,aim=false;
      const unit=police.find(unit=>unit.officer===npc);
      if(unit) {
        speed=unit.combat?.speed??unit.intent??0;
        aim=Boolean(unit.combat?.aim);
        unit.intent=0;unit.combat=null;
      } else if(npc.role==='ally') {
        if(npc.boardCar) speed=boardVehicle(npc,dt);
        else if(targetActive(gangTarget)) ({speed,aim}=pursue(npc,gangTarget,dt));
        else {
          const slot=formationPoint(actor,gang.indexOf(npc));
          if(distance(slot,npc)>1.25 || Math.abs(actorGround(npc)-slot.y)>1.75) speed=followIndoors(npc,slot,driving?6.1:4.45,dt);
        }
      } else if(npc.role==='rogue') {
        const nearby=civilians.filter(person=>person!==npc && person.role==='civilian' && living(person))
          .sort((a,b)=>distance(npc,a)-distance(npc,b))[0];
        const officer=police.map(unit=>unit.officer).find(person=>living(person)&&distance(person,npc)<15);
        if(officer || nearby) ({speed,aim}=pursue(npc,officer??nearby,dt));
      } else if(npc.surrender<=0) {
        let goal=npc.path[npc.next];
        if(npc.role==='civilian' && !npc.itinerary.length && npc.fear<=0 && publicShops.length) {
          npc.scheduleClock-=dt;
          if(npc.scheduleClock<=0) {
            const shop=publicShops[Math.floor(Math.abs(npc.home.x*11+npc.home.z*4+introTime))%publicShops.length];
            if(distance(npc,shop.outside)<38) npc.itinerary=[shop.outside,shop.entry,shop.inside,shop.entry,shop.outside];
            npc.scheduleClock=36+Math.abs(npc.home.x)%25;
          }
        }
        npc.fear=Math.max(0,npc.fear-dt);
        if(npc.fear>0 && distance(npc,actor)<15) {
          const away=Math.atan2(npc.x-actor.x,npc.z-actor.z);
          for(const offset of [0,.84,-.84,1.52,-1.52]) {
            const dir=away+offset;
            if(move(npc,npc.x+Math.sin(dir)*3.7*dt,npc.z+Math.cos(dir)*3.7*dt,.22,walkGeometry(npc))) {
              npc.angle=turn(npc.angle,dir,dt*8);speed=3.7;break;
            }
          }
        } else if(npc.itinerary.length) speed=walkItinerary(npc,npc.pace,dt);
        else if(goal) {
          if(distance(npc,goal)<.54) {npc.next=(npc.next+1)%npc.path.length;goal=npc.path[npc.next];}
          speed=guide(npc,goal,npc.pace,dt);
        }
      }
      const old=previous.get(npc);
      if(old && npc.exitAnim<=0) {
        const dx=npc.x-old.x+npc.pushX*dt,dz=npc.z-old.z+npc.pushZ*dt;
        npc.x=old.x;npc.z=old.z;
        const occupants=unit?.mode==='boarding'?cars.filter(car=>car!==unit.car):cars;
        // Gang members heading for a seat can brush past each other instead of locking at the bumper.
        const crowd=npc.boardCar?activePeople.filter(other=>other.role!=='ally'):activePeople;
        const moved=moveActor(npc,dx,dz,walkGeometry(npc),actorGround(npc)>1.25?[]:occupants,
          [...crowd,...(driving?[]:[player])],.29);
        if(speed>0 && moved<speed*dt*.35) {
          const sign=npc.detourSide??1;
          const step=speed*dt;
          const sideways=moveActor(npc,sign*Math.cos(npc.angle)*step,-sign*Math.sin(npc.angle)*step,
            walkGeometry(npc),occupants,[...crowd,...(driving?[]:[player])],.29);
          if(sideways<step*.25) npc.detourSide=-sign;
          npc.repath=0;
        }
        if(speed>0) speed=Math.min(speed,moved/dt);
      }
      npc.pushX*=Math.exp(-dt*7.6);npc.pushZ*=Math.exp(-dt*7.6);
      if(!preview && npc.injuryCooldown<=0) {
        const struck=hitByVehicle(npc,2.8);
        if(struck) {
          const {car,speed,vx,vz}=struck;
          const damage=impactDamage(speed);
          npc.pushX=clamp(vx,-8,8)*.59;npc.pushZ=clamp(vz,-8,8)*.59;
          if(damage>0) {
            npc.injuryCooldown=1.18;
            harm(npc,damage);
            if(car===driving && damage>12) wanted(19);
          }
        }
      }
      const model=npc.model;
      if(npc.health<=0) continue;
      syncFloor(npc);
      model.root.position.set(npc.x,actorGround(npc)+npc.exitAnim*.35,npc.z);
      const recoil=npc.stagger>0?Math.sin(npc.stagger/.32*Math.PI)*.24:0;
      model.root.rotation.set(npc.exitAnim*.7-recoil,npc.angle,npc.exitAnim*npc.exitSide*.89+(npc.stagger>0?Math.sin(npc.stagger*9)*.12:0));
      animatePerson(model,dt,npc.exitAnim>0?2.9:speed,aim,['police','rogue','ally'].includes(npc.role),0,0,npc.surrender>0);
    }
    if(!preview && !driving && actorGround(player)<1.15 && player.health>0 && player.lift<.3 && stepHitTime<=0) {
      const struck=hitByVehicle(player,2.35);
      if(struck) {
        const {speed,vx,vz}=struck;
        const damage=impactDamage(speed);
        player.pushX=clamp(vx,-13,13)*.73;player.pushZ=clamp(vz,-13,13)*.73;
        player.trip=speed>=5.3?Math.min(.82,.35+speed*.021):.12;
        player.vx=player.vz=0;
        if(damage>0) {
          harm(player,damage);
          audio.crash();
          announce('Você foi atropelado.');
        }
        stepHitTime=.87;
      }
    }
  }

  function hitByVehicle(actor,minimum) {
    for(const car of cars) {
      if(actorGround(actor)>1.2 || distance(car,actor)>5) continue;
      const previous=vehicleStarts.get(car);
      const start=previous && distance(previous,car)<3?previous:null;
      const previousSpeed=start?Math.hypot(start.vx,start.vz):0;
      const currentSpeed=Math.hypot(car.vx,car.vz);
      const speed=Math.max(currentSpeed,previousSpeed);
      if(speed<minimum || !sweptVehicleHits(car,start,actor)) continue;
      return {car,speed,vx:previousSpeed>currentSpeed?start.vx:car.vx,vz:previousSpeed>currentSpeed?start.vz:car.vz};
    }
    return null;
  }

  function updateDoors(dt,actor) {
    world.updateDoors(dt,[actor,...activePeople.filter(npc=>living(npc))]);
  }

  function cameraPose(dt,actor,aim) {
    const floor=actorGround(actor);
    const room=!driving?world.interiorAt(actor.x,actor.z,floor):null;
    const interior=Boolean(room);
    if(cameraInside!==interior) {cameraInside=interior;cameraFresh=true;}
    const portrait=camera.aspect<.85;
    const walkDistance=portrait?7.9:6.5;
    const length=interior?(aim?2.25:3.40):driving?(driving.kind==='bike'?8.2:portrait?12:10.2):aim?4.45:walkDistance;
    const height=(driving?1.95+driving.root.position.y:1.38+floor+player.lift*.46);
    const side=driving?0:aim?.61:.22;
    const lean=aim?.10+pitch*.19:Math.max(interior?.28:.10,pitch);
    cameraTarget.set(actor.x+Math.cos(yaw)*side,height,actor.z-Math.sin(yaw)*side);
    desiredCamera.set(cameraTarget.x-Math.sin(yaw)*length*Math.cos(lean),height+Math.sin(lean)*length,cameraTarget.z-Math.cos(yaw)*length*Math.cos(lean));
    function keepInside(position) {
      if(!room) return;
      position.x=clamp(position.x,room.x-room.w*.5+.30,room.x+room.w*.5-.30);
      position.z=clamp(position.z,room.z-room.d*.5+.30,room.z+room.d*.5-.30);
      position.y=clamp(position.y,room.floor+.55,room.ceiling-.42);
    }
    keepInside(desiredCamera);
    if(world.viewBlocked(cameraTarget.x,cameraTarget.y,cameraTarget.z,.12,!interior)) cameraTarget.set(actor.x,height,actor.z);
    for(let t=.06;t<=1.0001;t+=.04) {
      const x=T.MathUtils.lerp(cameraTarget.x,desiredCamera.x,t);
      const y=T.MathUtils.lerp(cameraTarget.y,desiredCamera.y,t);
      const z=T.MathUtils.lerp(cameraTarget.z,desiredCamera.z,t);
      if(world.viewBlocked(x,y,z,.32,!interior) || cars.some(car=>car!==driving && distance(car,{x,z})<2.1 && y<car.root.position.y+1.7)) {
        desiredCamera.lerp(cameraTarget,1-Math.max(.02,t-.07));
        break;
      }
    }
    keepInside(desiredCamera);
    const lookDistance=aim?14:1.0;
    const angle=previousAim?pitch:pitch-.22;
    const lookHeight=aim?height-Math.tan(angle)*lookDistance:height-.07;
    sight.set(cameraTarget.x+Math.sin(yaw)*lookDistance,lookHeight,cameraTarget.z+Math.cos(yaw)*lookDistance);
    if(cameraFresh) { camera.position.copy(desiredCamera); cameraFresh=false; }
    else camera.position.lerp(desiredCamera,1-Math.exp(-dt*14));
    if(world.viewBlocked(camera.position.x,camera.position.y,camera.position.z,.28,!interior)) camera.position.copy(desiredCamera);
    keepInside(camera.position);
    camera.lookAt(sight);
    camera.updateMatrixWorld();
  }

  function dot(location,color,radius) {
    minimap.fillStyle=color;
    minimap.beginPath();
    minimap.arc(mapPos(location.x),mapPos(location.z),radius,0,Math.PI*2);
    minimap.fill();
  }

  function updateHud(actor,aim) {
    const rank=wantedUnits(heat);
    const homeDistance=Math.round(distance(actor,residence));
    element('detail').textContent='Casa '+homeDistance+' m · Loja '+Math.round(distance(actor,weaponShop))+' m';
    element('cash').textContent='R$ '+cash.toLocaleString('pt-BR');
    element('crew').textContent='Gangue '+gang.length;
    const prompt=element('prompt');
    const key=padMode==='pad'?'Y · ':padMode==='keyboard'?'E · ':'';
    const shopping=atShop(), saving=atBed(), locked=lockedDoor(), car=driving??carAt();
    const activeRobbery=robbery && aim && noticeTime<=0;
    prompt.hidden=!(car || shopping || saving || locked || noticeTime>0 || activeRobbery);
    const action=driving?'Sair '+(driving.kind==='bike'?'da moto':'do carro'):saving?'Salvar na porta de casa':shopping?'Abrir loja de armas':
      locked?'Porta trancada':car?'Pegar '+(car.kind==='bike'?'a moto':'o cupê'):'';
    prompt.textContent=noticeTime>0?notice:activeRobbery?'Mantenha a mira · '+Math.ceil(robbery.left)+' s':key+action;
    element('heat').hidden=!rank;
    element('heat').textContent='★'.repeat(rank)+' PROCURADO';
    element('mode').textContent=driving?vehicleName(driving)+' · '+Math.round(driving.integrity)+'%':equipped?'Pistola':'Vila Brasa';
    element('reading').textContent=driving?Math.round(Math.hypot(driving.vx,driving.vz)*3.6)+' km/h':equipped?ammo+' balas':'Punhos';
    const health=/** @type {HTMLProgressElement} */(element('health'));
    health.value=player.health;
    health.title='Vida: '+Math.ceil(player.health)+'%';
    element('crosshair').hidden=!(aim || (equipped && crosshairTime>0 && !driving));
    element('interact').textContent=driving?'Sair':saving?'Salvar':shopping?'Loja':'Entrar';
    element('sprint').textContent=driving?'Freio':'Correr';
    element('aim').hidden=Boolean(driving);
    element('fire').hidden=Boolean(driving)||!equipped;
    element('weapon').hidden=Boolean(driving)||!armed;
    element('weapon').textContent=equipped?'Punhos':'Pistola';
    element('jump').hidden=element('punch').hidden=Boolean(driving);
    element('recruit').hidden=Boolean(driving)||!aim;
    element('hud').classList.toggle('armed',!driving);
    element('hud').classList.toggle('driving',Boolean(driving));
    minimap.drawImage(mapBase,0,0);
    for(const car of civilianCars) if(car!==driving && car.integrity>0) dot(car,car.driver?'#82b9b3':'#eab987',car.kind==='bike'?2.2:car.driver?2.6:3.5);
    dot(weaponShop,'#eaff89',6);
    dot(residence,'#dcc39b',5);
    dot(station,'#99c6ff',5);
    for(const building of publicShops) if(building.kind!=='armory') dot(building.entry,'#dbae80',2.5);
    for(const unit of police) if(['driving','patrol','foot'].includes(unit.mode)) {
      dot(unit.officer.seated?unit.car:unit.officer,unit.mode==='patrol'?'#8fc9f8':'#ff7769',4.3);
    }
    for(const npc of gang) dot(npc,'#97ebaf',3.5);
    minimap.save();
    minimap.translate(mapPos(actor.x),mapPos(actor.z));
    minimap.rotate(-(driving?driving.angle:player.angle));
    minimap.fillStyle='#fff9e6';
    minimap.strokeStyle='#243938';
    minimap.lineWidth=2.7;
    minimap.beginPath();
    minimap.moveTo(0,10);
    minimap.lineTo(-6,-6);
    minimap.lineTo(0,-3);
    minimap.lineTo(6,-6);
    minimap.closePath();
    minimap.stroke();
    minimap.fill();
    minimap.restore();
  }

  function frame(timestamp) {
    const raw=(timestamp-time)/1000;
    const dt=clamp(raw,1/240,.05);
    time=timestamp;
    introTime+=dt;
    const control=input.read(Boolean(driving),dt);
    if(shop.open) {
      if(control.punch || control.interact) closeShop();
      else if(control.confirm) purchase();
      renderer.render(scene,camera);
      return;
    }
    if(!started) {
      const angle=.54+Math.sin(introTime*.13)*.19;
      const radius=camera.aspect<1?26:30;
      camera.position.set(24+Math.sin(angle)*radius,14,17+Math.cos(angle)*radius);
      camera.lookAt(10,2,13);
      updatePeople(dt,player,true);
    } else if(playing) {
      padMode=control.mode;
      for(const car of cars) vehicleStarts.set(car,{x:car.x,z:car.z,vx:car.vx,vz:car.vz});
      if(control.weapon && armed && !driving) {
        equipped=!equipped;
        cachedSight=null;
        crosshairTime=0;
      }
      const aim=control.aim && !driving && punchMotion<=0 && player.health>0;
      if(aim!==previousAim) {pitch=aim?.015:.22;previousAim=aim;}
      cameraIdle=Math.abs(control.lookX)+Math.abs(control.lookY)>.003?0:cameraIdle+dt;
      yaw-=control.lookX;
      pitch=clamp(pitch+control.lookY,aim?-1.03:-.31,.84);
      if(driving && cameraIdle>1.2) pitch+=(.24-pitch)*dt;
      impactCooldown-=dt; shotCooldown-=dt; stepCooldown-=dt; stepHitTime-=dt;
      alertCooldown-=dt; noticeTime-=dt; flash-=dt;effects.update(dt);
      punchMotion=Math.max(0,punchMotion-dt);
      if(punchPending) {
        punchAt-=dt;
        if(punchAt<=0) resolvePunch();
      }
      hitTime-=dt; impactTime-=dt; crosshairTime-=dt; sightTimer-=dt;
      if(deathClock>0) {
        deathClock-=dt;
        if(deathClock<=0) wakeUp();
      }
      if(theft) {
        theft.delay-=dt;
        if(theft.delay<=0) {
          const car=theft.car;
          theft=null;
          if(player.health>0 && car.integrity>0 && distance(player,car)<3.75) enter(car);
        }
      }
      if(control.interact) interact();
      if(shop.open) return;
      const struck=world.props.update(dt,cars,driving??player);
      if(struck.shadow) world.sun.shadow.needsUpdate=true;
      for(const event of struck.events) if(distance(event,driving??player)<30) {if(event.heavy) audio.crash(); else audio.punch(true);}
      updateDoors(dt,driving??player);
      if(driving) drive(dt,control);
      else walk(dt,{...control,aim});
      updateVehicles(dt,driving??player);
      if(driving) {player.x=driving.x;player.z=driving.z;}
      updatePassengers(dt);
      if(gangTarget && !targetActive(gangTarget)) gangTarget=null;
      if(driving?.kind==='bike') ridePerson(player.model,driving);
      const actor=driving??player;
      updatePeople(dt,actor);
      updateLoot(dt);
      audio.motor(driving?.speed??0,Boolean(driving));
      const target=driving??player;
      const shouldAim=aim && !driving && player.health>0;
      const shooting=control.fire && equipped && !driving && player.health>0 && ammo>0;
      if(shooting) crosshairTime=1.38;
      cameraPose(dt,target,shouldAim || (!driving && crosshairTime>0));
      if(shouldAim && (sightTimer<=0 || control.recruit || control.punch || control.fire && shotCooldown<=0)) {
        cachedSight=assessSight();sightTimer=.092;
      } else if(!shouldAim) cachedSight=null;
      if(control.recruit && !driving) recruit(cachedSight);
      updateRobbery(dt,shouldAim&&equipped?cachedSight:null);
      if((control.punch || control.fire && !equipped) && !driving) punch();
      if(control.fire && !driving) fire(shouldAim);
      element('hitmark').hidden=hitTime<=0;
      element('impact').hidden=impactTime<=0;
      world.marker.visible=distance(target,weaponShop)>2.8 && distance(target,weaponShop)<13;
      world.beacon.rotation.y=introTime*2;
      world.beacon.position.y=2.55+Math.sin(introTime*4)*.27;
      uiTime-=dt;
      if(uiTime<=0) {
        updateHud(target,shouldAim);
        uiTime=.10;
      }
    }
    renderer.render(scene,camera);
    if(playing && quality.value==='auto' && raw>0 && raw<.22 && loadFactor>.7) {
      frameTime+=raw;
      if(++frames>=85) {
        if(frameTime/frames>.026) {
          loadFactor=Math.max(.69,loadFactor-.16);
          qualityUpdate();
        }
        frames=0;frameTime=0;
      }
    }
  }

  const input=controls(()=>{if(shop.open) closeShop();else if(playing) setPlaying(false);else playOrRestore();},()=>playing);
  const choice=stored('quality');
  if(choice==='low'||choice==='high') quality.value=choice;
  quality.addEventListener('change',()=>{
    stored('quality',quality.value);
    loadFactor=1;
    qualityUpdate();
  });
  element('sound').addEventListener('click',()=>{
    stored('sound',audio.toggle()?'on':'off');
    updateSoundButton();
  });
  element('pause').addEventListener('click',()=>setPlaying(false));
  element('reset').addEventListener('click',()=>{reset();setPlaying(true);});
  buy.addEventListener('click',purchase);
  element('close-shop').addEventListener('click',closeShop);
  shop.addEventListener('cancel',event=>{event.preventDefault();closeShop();});
  function playOrRestore() {
    if(!started && progress) {
      Object.assign(player,{x:progress.x,z:progress.z,health:progress.health,floorY:0});
      syncFloor(player);
      cash=progress.cash; armed=progress.armed; equipped=armed&&progress.equipped;
      ammo=armed?progress.ammo:0;
      for(const id of new Set(progress.recruits)) {
        const npc=typeof id==='number'?civilians[id]:actorIndex.get(id);
        if(npc) {npc.role='ally';npc.seated=false;npc.riding=null;npc.model.root.visible=true;gang.push(npc);}
      }
      setPlaying(true);
      yaw=-Math.PI/2;
    } else setPlaying(true);
  }
  play.addEventListener('click',playOrRestore);
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing) setPlaying(false);});
  window.addEventListener('resize',qualityUpdate);
  renderer.domElement.addEventListener('webglcontextrestored',qualityUpdate);
  reset();
  updateSoundButton();
  qualityUpdate();
  showSaved();
  play.disabled=false;
  time=performance.now();
  renderer.setAnimationLoop(frame);
}

try {
  start();
} catch (error) {
  console.error(error);
  play.textContent='3D indisponível';
  element('intro').textContent='Este navegador não conseguiu iniciar o WebGL 2 necessário para jogar.';
}
