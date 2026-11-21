import * as T from 'three';
import { createWorld } from './world.js';
import { animatePerson, coupe, motorcycle, person, poseCar, ridePerson } from './models.js';
import { blocks, roads, spawn, weaponShop, station, residence, bed, clamp, clear, distance, move, turn } from './rules.js';
import { resetVehicle, stepVehicle } from './vehicle.js';
import { driveTraffic, positionAvailable, resetDriver } from './traffic.js';
import { findPunch, reachable, traceShot } from './combat.js';
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
  const cameraWalls=world.solid.filter(part=>part.h>1.70);
  const aiWalk=footNavigator(world.solid);
  const player={...spawn,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,model:person(scene,0x246959,0x363844,0xba7750,true)};
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
    return actorAt(home,'civilian',person(scene,colors[i%5],i%2?0x4f5554:0x54434b,[0xc18e64,0x855232,0xe5b088][i%3]),path);
  });
  const police=Array.from({length:3},(_,i)=>{
    const z=station.z-6.1+i*4.25;
    const home={x:-7.1,z:station.z+[-.23,-4.4,3.94][i],next:0};
    const officer=actorAt(home,'police',person(scene,0x364c65,0x263343,0xb98059),[]);
    const berth={x:8.2,z,angle:Math.PI/2};
    const car=coupe(scene,0x375675,true);
    return {officer,berth,car,mode:'ready',stall:0,stop:null,intent:0,combat:null,departing:false,retaliation:null};
  });
  const cars=[...civilianCars,...police.map(unit=>unit.car)];
  const vehicleStarts=new Map();
  const ejected=Array.from({length:5},(_,i)=>{
    const npc=actorAt({x:0,z:0,next:0},'civilian',person(scene,0x82735a,0x424241,[0xb38664,0x815438][i%2]),[]);
    npc.seated=true;
    npc.model.root.visible=false;
    return npc;
  });
  const pedestrians=[...civilians,...police.map(unit=>unit.officer),...ejected];
  const decals=new T.CircleGeometry(1,14);
  const bloodMat=new T.MeshBasicMaterial({color:0x641c22,transparent:true,opacity:.81,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  const pickupGeo=new T.BoxGeometry(.27,.115,.38);
  const pickupColors={cash:new T.MeshStandardMaterial({color:0x779a64}),ammo:new T.MeshStandardMaterial({color:0xdba95a}),weapon:new T.MeshStandardMaterial({color:0x495358})};
  const pickups=[];
  function actorAt(home,role,model,path) {
    return {home,role,model,path,...home,pace:1.15+(Math.abs(home.z)%4)*.11,angle:0,fear:0,health:100,
      down:0,stagger:0,seated:false,robbed:false,surrender:0,drop:null,attack:0,injuryCooldown:0,
      repath:0,route:[],exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0};
  }
  function resetActor(npc) {
    if(npc.drop) {scene.remove(npc.drop);npc.drop=null;}
    Object.assign(npc,npc.home,{role:npc.role==='police'?'police':'civilian',health:100,fear:0,down:0,
      seated:false,stagger:0,attack:0,surrender:0,robbed:false,injuryCooldown:0,exitAnim:0,repath:0,route:[],pushX:0,pushZ:0});
    npc.model.root.rotation.set(0,npc.angle,0);
    npc.model.shadow.visible=true;
    npc.model.root.visible=true;
    npc.model.root.position.set(npc.x,groundHeight(npc.x,npc.z),npc.z);
  }
  const audio=createAudio();
  if (stored('sound')==='off') audio.toggle();
  const sight=new T.Vector3();
  const cameraTarget=new T.Vector3();
  const desiredCamera=new T.Vector3();
  const projection=new T.Vector3();
  const shotFrom=new T.Vector3();
  const shotTo=new T.Vector3();
  const shotDirection=new T.Vector3();
  const enemyFrom=new T.Vector3(), enemyTo=new T.Vector3(), enemyDirection=new T.Vector3();
  let hostileFlash=0;
  const tracerData=new T.Float32BufferAttribute(new Float32Array(6),3);
  const tracerGeometry=new T.BufferGeometry();
  tracerGeometry.setAttribute('position',tracerData);
  const tracer=new T.Line(tracerGeometry,new T.LineBasicMaterial({color:0xffdb83,transparent:true,opacity:.9}));
  tracer.frustumCulled=false;
  tracer.visible=false;
  scene.add(tracer);
  const hostileData=new T.Float32BufferAttribute(new Float32Array(6),3);
  const hostileGeo=new T.BufferGeometry();
  hostileGeo.setAttribute('position',hostileData);
  const hostileTracer=new T.Line(hostileGeo,new T.LineBasicMaterial({color:0xffa472,transparent:true,opacity:.87}));
  hostileTracer.frustumCulled=false;
  hostileTracer.visible=false;
  scene.add(hostileTracer);

  let playing=false, started=false, driving=null;
  let heat=0, alertCooldown=0, shotCooldown=0, impactCooldown=0, stepCooldown=0, flash=0;
  let yaw=0, pitch=.23, time=0, introTime=0, uiTime=0, cameraIdle=0, cameraFresh=true;
  let padMode='keyboard', cash=startingCash, armed=false, equipped=false, ammo=0, previousAim=false;
  let jumpVelocity=0, deathClock=0, theft=null, gangTarget=null, robbery=null, rogue=null, rogueClock=27;
  let sightTimer=0, cachedSight=null, crosshairTime=0;
  const gang=[];
  const progress=loadProgress();
  const showSaved=()=>{play.textContent=progress?'Continuar do save':'Jogar agora';};
  let punchMotion=0, hitTime=0, impactTime=0, stepHitTime=0;
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
  for(const building of world.solid) mapCtx.fillRect(mapPos(building.x-building.w/2),mapPos(building.z-building.d/2),building.w*1.92,building.d*1.92);
  mapCtx.fillStyle='#6a7859';
  mapCtx.fillRect(mapPos(-10),mapPos(28),38,38);

  function qualityUpdate() {
    const high=quality.value==='high', low=quality.value==='low';
    renderer.setPixelRatio(Math.min(devicePixelRatio,high?2:low?1:touch?1.45:1.8)*(low?.85:loadFactor));
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
    punchMotion=hitTime=impactTime=jumpVelocity=deathClock=0;
    punchPending=false;punchAt=0;cameraInside=false;
    yaw=.32; pitch=.22;
    cameraIdle=0;
    Object.assign(player,spawn,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0});
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
    world.marker.position.set(weaponShop.x,0,weaponShop.z);
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

  function wanted(pressure) {
    heat=Math.min(56,Math.max(heat+(heat>0?pressure*.58:0),pressure));
  }

  const atShop=()=>!driving && distance(player,weaponShop)<2.85;
  const atBed=()=>!driving && insideHouse(player) && distance(player,bed)<2 &&
    reachable([player.x,1.05,player.z],[bed.x,1.05,bed.z],world.solid);
  const vehicleList=()=>cars;
  const living=actor=>actor.health>0 && !actor.seated;
  const insideHouse=({x,z})=>Math.abs(x-residence.x)<6.08 && Math.abs(z-residence.z)<5.12;
  const insideStation=({x,z})=>x>-10.72&&x< -3.50&&Math.abs(z-station.z)<9.68;
  const vehicleName=car=>car.kind==='bike'?'Moto':'Cup?';
  function carAt() {
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
    const slot=spots.find(([px,pz])=>actorClear({x:px,z:pz},px,pz,world.solid,cars,pedestrians,.36));
    if(!slot && !forced) {announce('Sem espaço para abrir a porta.');return;}
    [player.x,player.z]=slot??[spawn.x,spawn.z];
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
    Object.assign(player,{x:residence.x+2.5,z:residence.z-2.73,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0});
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
      const record={health:player.health,cash,armed,equipped,ammo,recruits:gang.map(npc=>civilians.indexOf(npc))};
      announce(saveProgress(record)?'Progresso salvo na cama.':'O navegador bloqueou o salvamento.');
      audio.bell();
      return;
    }
    const car=carAt();
    if(!car) {announce('Aproxime-se de um carro ou moto.');return;}
    if(car.driver) {
      const driver=ejected.find(npc=>npc.seated)??ejected.find(npc=>npc.exitAge>14 && npc.role==='civilian' && distance(npc,player)>11);
      if(driver) {
        const dir=car.angle-Math.PI/2;
        const x=car.x+Math.sin(dir)*(car.kind==='bike'?.95:1.51);
        const z=car.z+Math.cos(dir)*(car.kind==='bike'?.95:1.51);
        const safe=clear(x,z,.29,world.solid)?{x,z}:{x:player.x,z:player.z};
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
    yaw=car.angle;
    cameraIdle=0;
    cameraFresh=true;
  }

  function leaveLoot(kind, actor, count) {
    const mesh=new T.Mesh(pickupGeo,pickupColors[kind]);
    const y=groundHeight(actor.x,actor.z)+.13;
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
      const near=!driving && player.health>0 && item.wait<0 &&
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

  function harm(npc,amount,byPlayer=false) {
    if(npc.health<=0 || amount<=0) return;
    npc.health=Math.max(0,npc.health-amount);
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
    stain.position.set(npc.x,groundHeight(npc.x,npc.z)+.019,npc.z);
    stain.rotation.x=-Math.PI/2;
    stain.scale.set(.52,.32,1);
    scene.add(stain);
    npc.drop=stain;
    if(npc.role==='police') leaveLoot(armed?'ammo':'weapon',npc,12);
    else if(npc.role!=='ally' && !npc.robbed) leaveLoot('cash',npc,24+Math.floor(Math.abs(npc.z)%27));
    if(byPlayer && npc.role==='police') wanted(43);
    if(rogue===npc) {rogue=null;rogueClock=29;}
    const ally=gang.indexOf(npc);
    if(ally>=0) gang.splice(ally,1);
  }

  function bodies(shooter) {
    const actors=[...pedestrians,player];
    return actors.filter(actor=>actor!==shooter && living(actor) && !(actor===player && driving && driving.kind==='car')).map(actor=>{
      const y=groundHeight(actor.x,actor.z)+(actor===player?player.lift:0);
      return {actor,y,bounds:[actor.x-.31,y+.10,actor.z-.31,actor.x+.31,y+1.9,actor.z+.31]};
    });
  }

  function assessSight() {
    camera.getWorldDirection(shotDirection);
    const subjects=bodies(player);
    const hit=traceShot(camera.position.toArray(),shotDirection.toArray(),world.solid,subjects,28).hit;
    if(hit && distance(player,hit.actor)<24) return hit.actor;
    let best=.17, candidate=null;
    const origin=[player.x,groundHeight(player.x,player.z)+1.38+player.lift,player.z];
    for(const {actor,y} of subjects) {
      if(distance(player,actor)>18) continue;
      projection.set(actor.x,y+1.25,actor.z).project(camera);
      const score=Math.hypot(projection.x,projection.y);
      if(projection.z>=1 || score>=best || !reachable(origin,[actor.x,y+1.25,actor.z],world.solid)) continue;
      best=score; candidate=actor;
    }
    return candidate;
  }

  function tagForGang(npc) {
    if(npc && npc.role!=='ally' && npc.health>0) gangTarget=npc;
  }

  function policeWitness(shooter,victim) {
    const y=groundHeight(shooter.x,shooter.z)+1.27;
    for(const unit of police) {
      const officer=unit.officer;
      if(!living(officer) || distance(officer,shooter)>24) continue;
      const ox=shooter.x-officer.x,oz=shooter.z-officer.z;
      const seen=Math.sin(officer.angle)*ox+Math.cos(officer.angle)*oz;
      if(officer!==victim && distance(officer,shooter)>6 && seen<-.24*Math.hypot(ox,oz)) continue;
      if(officer===victim || reachable([officer.x,groundHeight(officer.x,officer.z)+1.55,officer.z],
        [shooter.x,y,shooter.z],world.solid)) unit.retaliation=shooter;
    }
  }

  function recruit(npc) {
    if(!npc || npc.role!=='civilian' || npc.health<=0) {announce('Mire em um pedestre para recrutar.');return;}
    if(gang.length>=3) {announce('Sua gangue está cheia.');return;}
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
    if(player.health<=0 || !npc || npc.role!=='civilian' || npc.robbed || distance(player,npc)>9.0) {
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
      leaveLoot('cash',npc,38+Math.floor(Math.abs(npc.z)%31));
      wanted(15);
      announce('Dinheiro no chão.');
      robbery=null;
    }
  }

  function punch() {
    if(punchMotion>0 || player.health<=0 || player.trip>.15 || theft) return;
    player.angle=yaw;
    punchMotion=.36;
    punchPending=true;
    punchAt=.106;
    tagForGang(cachedSight);
    audio.punch(false);
  }

  function resolvePunch() {
    punchPending=false;
    if(player.health<=0 || driving) return;
    const victim=findPunch(player,pedestrians.filter(person=>living(person)&&person.role!=='ally'),groundHeight(player.x,player.z)+player.lift,world.solid);
    if(!victim) return;
    tagForGang(victim);
    audio.punch(true);
    const dx=victim.x-player.x,dz=victim.z-player.z,length=Math.max(.2,Math.hypot(dx,dz));
    victim.pushX=dx/length*3.6;victim.pushZ=dz/length*3.6;
    harm(victim,18,true);
    hitTime=.19;
    wanted(victim.role==='police'?28:12);
    announce(victim.health<=0?'Pedestre derrubado.':'Soco acertou.');
  }

  function fire(aim) {
    if(punchMotion>0 || shotCooldown>0 || player.health<=0) return;
    if(!armed || !equipped) return;
    if(ammo<=0) {shotCooldown=.32;announce('Sem balas. Reponha na loja.');return;}
    ammo--; shotCooldown=.28; flash=.095;
    player.angle=yaw;
    player.model.root.rotation.y=yaw;
    animatePerson(player.model,0,0,true,true,0,aim?pitch:pitch-.22);
    player.model.muzzle.getWorldPosition(shotFrom);
    audio.shot();
    const candidates=bodies(player);
    const vehicles=cars.map(car=>{
      const width=car.kind==='bike'?.31:.96,length=car.kind==='bike'?1.08:1.84;
      const xSpace=width*Math.abs(Math.cos(car.angle))+length*Math.abs(Math.sin(car.angle));
      const zSpace=width*Math.abs(Math.sin(car.angle))+length*Math.abs(Math.cos(car.angle));
      return {car,bounds:[car.x-xSpace,.22,car.z-zSpace,car.x+xSpace,car.kind==='bike'?1.10:1.52,car.z+zSpace]};
    });
    const collisionTargets=[...candidates,...vehicles];
    camera.getWorldDirection(shotDirection);
    const origin=shotFrom.toArray();
    const cameraHit=traceShot(camera.position.toArray(),shotDirection.toArray(),world.solid,collisionTargets,52);
    shotTo.copy(camera.position).addScaledVector(shotDirection,cameraHit.distance);
    if((shotTo.x-shotFrom.x)*Math.sin(yaw)+(shotTo.z-shotFrom.z)*Math.cos(yaw)<.25) {
      shotTo.copy(shotFrom).addScaledVector(shotDirection,4);
    }
    if(aim && padMode!=='keyboard' && !cameraHit.hit && cachedSight) {
      shotTo.set(cachedSight.x,groundHeight(cachedSight.x,cachedSight.z)+1.28,cachedSight.z);
    }
    const direction=shotDirection.subVectors(shotTo,shotFrom).normalize();
    const result=traceShot(origin,direction.toArray(),world.solid,collisionTargets);
    shotTo.copy(shotFrom).addScaledVector(direction,result.distance);
    const hit=result.hit;
    if(hit?.actor && hit.actor.role!=='ally') {
      tagForGang(hit.actor);
      harm(hit.actor,shotDamage(shotTo.y-hit.y),true);
      if(hit.actor.role==='police') wanted(32);
      hitTime=.21;
      announce(hit.actor.health<=0?'Alvo derrubado.':'Disparo acertou.');
    } else if(hit?.car) {
      hit.car.integrity=Math.max(0,hit.car.integrity-5);
      hitTime=.16;
    } else if(aim) tagForGang(cachedSight);
    wanted(19);
    for(const npc of civilians) if(npc.role==='civilian' && distance(npc,player)<18) npc.fear=Math.max(npc.fear,4.8);
    tracerData.setXYZ(0,shotFrom.x,shotFrom.y,shotFrom.z);
    tracerData.setXYZ(1,shotTo.x,shotTo.y,shotTo.z);
    tracerData.needsUpdate=true;
  }

  function drive(dt,control) {
    const car=driving;
    stepVehicle(car,dt,{throttle:control.y,steer:-control.x,brake:control.brake},world.solid,vehicleList());
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
    const moved=moveActor(player,(player.vx+player.pushX)*dt,(player.vz+player.pushZ)*dt,world.solid,cars,pedestrians);
    player.pushX*=Math.exp(-dt*6.2);player.pushZ*=Math.exp(-dt*6.2);
    player.trip=Math.max(0,player.trip-dt);
    if(punchMotion<=0 && canMove && (control.aim || magnitude>.05)) player.angle=turn(player.angle,control.aim?yaw:direction,dt*11);
    const model=player.model;
    model.root.position.set(player.x,groundHeight(player.x,player.z)+player.lift,player.z);
    model.root.rotation.set(player.health<=0?1.53:Math.min(1.25,player.trip*2.7),player.angle,0);
    model.shadow.visible=player.health>0 && player.lift<.06;
    animatePerson(model,dt,player.trip>.05?0:Math.min(7.5,moved/dt),control.aim || flash>0,equipped && punchMotion<=0,punchMotion/.36,
      control.aim?pitch:0);
    if(moved && stepCooldown<=0 && player.lift===0) {audio.step();stepCooldown=control.run?.27:.41;}
  }

  function disembark(unit) {
    const npc=unit.officer,car=unit.car;
    npc.seated=false;
    npc.model.root.visible=true;
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    const spots=[{x:car.x-sz*1.62,z:car.z+sx*1.62},{x:car.x+sz*1.62,z:car.z-sx*1.62},{x:car.x-sx*2.72,z:car.z-sz*2.72}];
    const next=spots.find(({x,z})=>actorClear({x,z},x,z,world.solid,cars,pedestrians,.31))??npc.home;
    npc.x=next.x;npc.z=next.z;
    npc.angle=car.angle;
    npc.exitAnim=.38;
    npc.model.shadow.visible=true;
    car.doorTime=.65;
    unit.mode='foot';
  }

  function fireNPC(npc,target) {
    const vehicle=cars.includes(target)?target:null;
    if(distance(npc,target)>18 || distance(npc,target)<.5 || (vehicle?vehicle.integrity<=0:!living(target))) return false;
    const height=groundHeight(npc.x,npc.z);
    const destination=groundHeight(target.x,target.z)+(target===player?player.lift:0)+(vehicle?1.08:1.27);
    if(!reachable([npc.x,height+1.35,npc.z],[target.x,destination,target.z],world.solid)) return false;
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
    const result=traceShot(enemyFrom.toArray(),dir.toArray(),world.solid,targets,flight);
    if(npc.role==='ally' && (target.role==='police'||result.hit?.actor.role==='police')) {
      policeWitness(npc,result.hit?.actor);
    }
    if(result.hit && (result.hit.actor===target || result.hit.actor.role==='civilian')) {
      const factor=npc.role==='police' && target===player?.62:.83;
      if(vehicle && result.hit.actor===vehicle) {
        vehicle.integrity=Math.max(0,vehicle.integrity-5);
        if(vehicle.kind==='bike') harm(player,12);
      } else harm(result.hit.actor,Math.round(shotDamage(enemyFrom.y+dir.y*result.distance-result.hit.y)*factor));
    }
    enemyTo.copy(enemyFrom).addScaledVector(dir,result.distance);
    if(npc.role!=='ally' && (target===player || target===driving ||
      threatensPlayer(enemyFrom,enemyTo,driving??player))) tagForGang(npc);
    hostileData.setXYZ(0,enemyFrom.x,enemyFrom.y,enemyFrom.z);
    hostileData.setXYZ(1,enemyTo.x,enemyTo.y,enemyTo.z);
    hostileData.needsUpdate=true;
    hostileFlash=.098;
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
    return {speed:gap>3.3?aiWalk(npc,target,4.4,dt):0,aim:gap<12};
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

  function stationExit(npc,goal) {
    if(npc.x< -5.2) return {x:-4.65,z:npc.z};
    if(npc.x< -3.63 && Math.abs(npc.z-station.z)>.46) return {x:-4.65,z:station.z};
    if(npc.x< -2.64) return {x:-2.38,z:station.z};
    return goal;
  }

  function stationReturn(npc) {
    if(npc.x> -3.58 && (npc.x> -2.55 || Math.abs(npc.z-station.z)>.50)) return {x:-2.66,z:station.z};
    if(npc.x> -4.33) return {x:-4.68,z:station.z};
    if(npc.x> -5.15 && Math.abs(npc.z-npc.home.z)>.50) return {x:-4.68,z:npc.home.z};
    return npc.home;
  }

  function updatePolice(dt,actor) {
    const target=heat>0 && player.health>0?actor:rogue;
    const requested=target===rogue?(rogue?1:0):wantedUnits(heat);
    if(heat>0) {
      const near=police.some(({mode,officer,car})=>mode==='foot'?living(officer)&&distance(officer,actor)<19:mode==='driving'&&distance(car,actor)<27);
      heat=Math.max(0,heat-dt*(near?.57:.91));
      if(heat===0) announce('Você despistou a polícia.');
    }
    police.forEach((unit,i)=>{
      const npc=unit.officer,car=unit.car;
      if(unit.retaliation && !living(unit.retaliation)) unit.retaliation=null;
      const defense=unit.retaliation, suspect=defense??target;
      const dispatch=Boolean(defense || target && i<requested);
      if(npc.health<=0) {
        unit.mode='disabled';
        if(npc.down<=0 && distance(npc,actor)>13 && cars.every(other=>other===car || distance(other,unit.berth)>3.5)) {
          resetActor(npc);resetVehicle(car,unit.berth);poseCar(car,0);unit.mode='ready';unit.retaliation=null;
        }
        return;
      }
      if(defense && (unit.mode==='ready'||unit.mode==='boarding')) unit.mode='foot';
      const exitTaken=police.slice(0,i).some(other=>other.mode==='boarding' && other.officer.x< -3.12);
      if(unit.mode==='ready' && dispatch && !exitTaken) {unit.mode='boarding';unit.stop=null;unit.stall=0;unit.departing=true;}
      if(unit.mode==='boarding') {
        if(!dispatch) unit.mode='foot';
        else {
          const boardingPoint={x:car.x-1.18,z:car.z};
          if(distance(npc,boardingPoint)<.60) {
            npc.seated=true;npc.model.root.visible=false;unit.mode='driving';
            car.doorTime=.60;
          } else unit.intent=aiWalk(npc,stationExit(npc,boardingPoint),3.85,dt);
        }
      }
      if(unit.mode==='driving') {
        const gap=suspect?distance(car,suspect):Infinity;
        if(!dispatch || car.integrity<=0 || unit.stall>5.7 || (gap<12.7 && !(suspect===driving && Math.abs(driving.speed)>6))) {
          stepVehicle(car,dt,{throttle:0,steer:0,brake:true},world.solid,cars);
          if(Math.hypot(car.vx,car.vz)<3.0) disembark(unit);
        } else patrolDrive(unit,suspect,world.solid,cars,pedestrians,dt);
      } else if(unit.mode==='foot') {
        const leavingLobby=insideStation(npc) || (npc.x> -3.62 && npc.x< -2.64 && Math.abs(npc.z-station.z)<1.2);
        if(dispatch && leavingLobby && !insideStation(suspect)) unit.intent=aiWalk(npc,stationExit(npc,suspect),4.5,dt);
        else if(dispatch) unit.combat=pursue(npc,suspect,dt);
        else if(distance(npc,npc.home)>.72) unit.intent=aiWalk(npc,stationReturn(npc),3.15,dt);
        else if(distance(actor,car)>12 && distance(actor,unit.berth)>9 &&
          cars.every(other=>other===car || distance(other,unit.berth)>3.5)) {
          resetVehicle(car,unit.berth);poseCar(car,0);unit.mode='ready';
        }
      }
      const flashing=unit.mode==='driving' || (dispatch && unit.mode==='foot');
      car.lamps.forEach((lamp,j)=>{lamp.visible=!flashing || Math.floor(introTime*8+j)%2===0;});
      if(flashing && alertCooldown<=0 && distance(actor,car)<42) {audio.siren();alertCooldown=1.35;}
    });
  }

  function updateVehicles(dt,actor) {
    const active={player:driving,vehicles:vehicleList()};
    driveTraffic(traffic,active,pedestrians,world.solid,dt,intersections);
    for(const car of parked) {
      if(car!==driving && Math.hypot(car.vx,car.vz)>.06) {
        stepVehicle(car,dt,{throttle:0,steer:0,brake:true},world.solid,active.vehicles);
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
          if(positionAvailable(next,active.vehicles.filter(other=>other!==car),actor,world.solid)) Object.assign(car,next);
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
      if(force>9) harm(player,Math.min(58,Math.round(force*(crashed.kind==='bike'?2.45:1.05))));
      if(driving && crashed.kind==='bike' && force>10.5) {
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

  function updatePeople(dt,actor,preview=false) {
    const previous=new Map(pedestrians.map(npc=>[npc,{x:npc.x,z:npc.z}]));
    if(!preview) {suspectFor(actor,dt);updatePolice(dt,actor);}
    for(const npc of pedestrians) {
      if(npc.seated) continue;
      npc.attack-=dt;
      npc.stagger=Math.max(0,npc.stagger-dt);
      npc.injuryCooldown-=dt;
      npc.exitAnim=Math.max(0,npc.exitAnim-dt);
      npc.exitAge+=dt;
      if(npc.health<=0) {
        npc.down=Math.max(0,npc.down-dt);
        npc.model.root.rotation.x+=(Math.PI/2-npc.model.root.rotation.x)*Math.min(1,dt*8);
        npc.model.root.position.y=groundHeight(npc.x,npc.z)+.19;
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
        if(gangTarget && living(gangTarget)) ({speed,aim}=pursue(npc,gangTarget,dt));
        else if(distance(actor,npc)>4.25+gang.indexOf(npc)*.93) speed=aiWalk(npc,actor,driving?6.1:4.5,dt);
      } else if(npc.role==='rogue') {
        const nearby=civilians.filter(person=>person!==npc && person.role==='civilian' && living(person))
          .sort((a,b)=>distance(npc,a)-distance(npc,b))[0];
        const officer=police.map(unit=>unit.officer).find(person=>living(person)&&distance(person,npc)<15);
        if(officer || nearby) ({speed,aim}=pursue(npc,officer??nearby,dt));
      } else if(npc.surrender<=0) {
        const goal=npc.path[npc.next];
        npc.fear=Math.max(0,npc.fear-dt);
        if(npc.fear>0 && distance(npc,actor)<15) {
          const away=Math.atan2(npc.x-actor.x,npc.z-actor.z);
          for(const offset of [0,.84,-.84,1.52,-1.52]) {
            const dir=away+offset;
            if(move(npc,npc.x+Math.sin(dir)*3.7*dt,npc.z+Math.cos(dir)*3.7*dt,.22,world.solid)) {
              npc.angle=turn(npc.angle,dir,dt*8);speed=3.7;break;
            }
          }
        } else if(goal) {
          if(distance(npc,goal)<.43) npc.next=(npc.next+1)%npc.path.length;
          const direction=Math.atan2(goal.x-npc.x,goal.z-npc.z);
          if(move(npc,npc.x+Math.sin(direction)*npc.pace*dt,npc.z+Math.cos(direction)*npc.pace*dt,.22,world.solid)) speed=npc.pace;
          npc.angle=turn(npc.angle,direction,dt*8);
        }
      }
      const old=previous.get(npc);
      if(old && npc.exitAnim<=0) {
        const dx=npc.x-old.x+npc.pushX*dt,dz=npc.z-old.z+npc.pushZ*dt;
        npc.x=old.x;npc.z=old.z;
        const occupants=unit?.mode==='boarding'?cars.filter(car=>car!==unit.car):cars;
        const moved=moveActor(npc,dx,dz,world.solid,occupants,[...pedestrians,...(driving?[]:[player])],.29);
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
            harm(npc,damage,car===driving);
            if(car===driving && damage>12) wanted(19);
          }
        }
      }
      const model=npc.model;
      if(npc.health<=0) continue;
      model.root.position.set(npc.x,groundHeight(npc.x,npc.z)+npc.exitAnim*.35,npc.z);
      model.root.rotation.set(npc.exitAnim*.7,npc.angle,npc.exitAnim*npc.exitSide*.89+(npc.stagger>0?Math.sin(npc.stagger*9)*.21:0));
      animatePerson(model,dt,npc.exitAnim>0?2.9:speed,aim,npc.role!=='civilian',0,0,npc.surrender>0);
    }
    if(!preview && !driving && player.health>0 && player.lift<.3 && stepHitTime<=0) {
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
      if(distance(car,actor)>5) continue;
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
    const people=[actor,...police.map(unit=>unit.officer),...gang];
    for(const door of world.doors) {
      const near=people.some(person=>!person.seated && person.health!==0 && distance(person,door)<2.23);
      const angle=door.angle+(near?1.51:0);
      door.door.rotation.y+=(angle-door.door.rotation.y)*(1-Math.exp(-dt*12));
    }
  }

  function cameraPose(dt,actor,aim) {
    const homeInterior=!driving && insideHouse(actor);
    const stationInterior=!driving && insideStation(actor);
    const interior=homeInterior||stationInterior;
    if(cameraInside!==interior) {cameraInside=interior;cameraFresh=true;}
    const portrait=camera.aspect<.85;
    const walkDistance=portrait?7.9:6.5;
    const length=interior?(aim?2.25:3.40):driving?(driving.kind==='bike'?8.2:portrait?12:10.2):aim?4.45:walkDistance;
    const height=driving?1.95:1.38+groundHeight(actor.x,actor.z)+player.lift*.46;
    const side=driving?0:aim?.61:.22;
    const lean=aim?.10+pitch*.19:Math.max(interior?.28:.10,pitch);
    cameraTarget.set(actor.x+Math.cos(yaw)*side,height,actor.z-Math.sin(yaw)*side);
    desiredCamera.set(cameraTarget.x-Math.sin(yaw)*length*Math.cos(lean),height+Math.sin(lean)*length,cameraTarget.z-Math.cos(yaw)*length*Math.cos(lean));
    function keepInside(position) {
      if(homeInterior) {
        position.x=clamp(position.x,residence.x-5.70,residence.x+5.70);
        position.z=clamp(position.z,residence.z-4.71,residence.z+4.66);
      } else if(stationInterior) {
        position.x=clamp(position.x,-10.45,-3.97);
        position.z=clamp(position.z,station.z-9.39,station.z+9.39);
      }
      if(interior) position.y=Math.min(position.y,2.56);
    }
    keepInside(desiredCamera);
    for(let t=.11;t<=1;t+=.067) {
      const x=T.MathUtils.lerp(cameraTarget.x,desiredCamera.x,t);
      const z=T.MathUtils.lerp(cameraTarget.z,desiredCamera.z,t);
      if(!clear(x,z,.20,cameraWalls)) {
        desiredCamera.lerp(cameraTarget,1-Math.max(.06,t-.105));
        desiredCamera.y=Math.max(desiredCamera.y,1.95);
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
    element('crew').textContent='Gangue '+gang.length+' / 3';
    const prompt=element('prompt');
    const key=padMode==='pad'?'Y · ':padMode==='keyboard'?'E · ':'';
    const shopping=atShop(), saving=atBed(), car=driving??carAt();
    const activeRobbery=robbery && aim && noticeTime<=0;
    prompt.hidden=!(car || shopping || saving || noticeTime>0 || activeRobbery);
    const action=driving?'Sair '+(driving.kind==='bike'?'da moto':'do carro'):saving?'Salvar na cama':shopping?'Abrir loja de armas':
      car?'Pegar '+(car.kind==='bike'?'a moto':'o cupê'):'';
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
    element('aim').hidden=element('fire').hidden=Boolean(driving)||!equipped;
    element('weapon').hidden=Boolean(driving)||!armed;
    element('weapon').textContent=equipped?'Punhos':'Pistola';
    element('jump').hidden=element('punch').hidden=Boolean(driving);
    element('recruit').hidden=Boolean(driving)||!aim;
    element('hud').classList.toggle('armed',armed&&!driving);
    element('hud').classList.toggle('driving',Boolean(driving));
    minimap.drawImage(mapBase,0,0);
    for(const car of civilianCars) if(car!==driving && car.integrity>0) dot(car,car.driver?'#82b9b3':'#eab987',car.kind==='bike'?2.2:car.driver?2.6:3.5);
    dot(weaponShop,'#eaff89',6);
    dot(residence,'#dcc39b',5);
    dot(station,'#99c6ff',5);
    for(const unit of police) if(unit.mode==='driving'||unit.mode==='foot') dot(unit.mode==='driving'?unit.car:unit.officer,'#ff7769',4.6);
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
      const aim=control.aim && equipped && !driving && punchMotion<=0 && player.health>0;
      if(aim!==previousAim) {pitch=aim?.015:.22;previousAim=aim;}
      cameraIdle=Math.abs(control.lookX)+Math.abs(control.lookY)>.003?0:cameraIdle+dt;
      yaw-=control.lookX;
      pitch=clamp(pitch+control.lookY,aim?-1.03:-.31,.84);
      if(driving && cameraIdle>1.2) pitch+=(.24-pitch)*dt;
      impactCooldown-=dt; shotCooldown-=dt; stepCooldown-=dt; stepHitTime-=dt;
      alertCooldown-=dt; noticeTime-=dt; flash-=dt; hostileFlash-=dt;
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
      updateDoors(dt,driving??player);
      if(driving) drive(dt,control);
      else walk(dt,{...control,aim});
      updateVehicles(dt,driving??player);
      if(driving) {player.x=driving.x;player.z=driving.z;}
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
      updateRobbery(dt,cachedSight);
      if((control.punch || control.fire && !equipped) && !driving) punch();
      if(control.fire && !driving) fire(shouldAim);
      tracer.visible=flash>0;
      hostileTracer.visible=hostileFlash>0;
      element('hitmark').hidden=hitTime<=0;
      element('impact').hidden=impactTime<=0;
      world.marker.visible=distance(target,weaponShop)<19;
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
      Object.assign(player,{x:progress.x,z:progress.z,health:progress.health});
      cash=progress.cash; armed=progress.armed; equipped=armed&&progress.equipped;
      ammo=armed?progress.ammo:0;
      for(const id of new Set(progress.recruits)) {
        const npc=civilians[id];
        if(npc) {npc.role='ally';gang.push(npc);}
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
