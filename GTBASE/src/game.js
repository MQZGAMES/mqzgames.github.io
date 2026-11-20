import * as T from 'three';
import { createWorld } from './world.js';
import { animatePerson, coupe, person, poseCar } from './models.js';
import { blocks, roads, spawn, weaponShop, range, clamp, clear, distance, move, turn } from './rules.js';
import { resetVehicle, stepVehicle, vehicleContains } from './vehicle.js';
import { driveTraffic, positionAvailable, resetDriver, safeSpeed, steeringCommand } from './traffic.js';
import { findPunch, reachable, traceShot } from './combat.js';
import { controls, element } from './input.js';
import { createAudio } from './audio.js';

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
  const player={...spawn,angle:0, model:person(scene,0x246959,0x363844,0xba7750,true)};
  const carSpawns=[
    {x:15.75,z:-1.8,angle:Math.PI,color:0xae4930},
    {x:-22.8,z:4,angle:0,color:0x429277},
    {x:36,z:15.3,angle:Math.PI/2,color:0xc7a652},
    {x:53.3,z:-36,angle:0,color:0x586e9c}
  ];
  const parked=carSpawns.map(({color})=>coupe(scene,color));
  const traffic=[0xe19552,0x4e7c89,0x8a4d45,0x479171,0x95877f,0x596587,0xc6b9a0,0xae9a5a].map((color,index)=>{
    const car=coupe(scene,color);
    car.routeIndex=index;
    return car;
  });
  const cars=[...parked,...traffic];
  const intersections=new Map();
  const patrol=coupe(scene,0x303f56,true);
  const policeSpawn={x:-19,z:-57,angle:Math.PI/2};
  const pedestrians=Array.from({length:12},(_,i)=>{
    const x=blocks[i%3], z=blocks[Math.floor(i/3)%3];
    const path=[{x:x+12,z:z-12},{x:x+12,z:z+12},{x:x-12,z:z+12},{x:x-12,z:z-12}];
    const point=i%4;
    const next=path[(point+1)%4];
    const a=path[point];
    const colors=[0xb1674c,0xdab661,0x6e839f,0x867094,0xc6bd9d];
    const model=person(scene,colors[i%5],i%2?0x4f5554:0x54434b,[0xc18e64,0x855232,0xe5b088][i%3]);
    const f=(i%3+1)/4;
    const home={x:a.x+(next.x-a.x)*f,z:a.z+(next.z-a.z)*f,next:(point+1)%4};
    return {model,path,home,...home,pace:1.08+(i%4)*.15,fear:0,hp:3,down:0,stagger:0};
  });
  const audio=createAudio();
  if (stored('sound')==='off') audio.toggle();
  const sight=new T.Vector3();
  const cameraTarget=new T.Vector3();
  const desiredCamera=new T.Vector3();
  const projection=new T.Vector3();
  const shotFrom=new T.Vector3();
  const shotTo=new T.Vector3();
  const shotDirection=new T.Vector3();
  const tracerData=new T.Float32BufferAttribute(new Float32Array(6),3);
  const tracerGeometry=new T.BufferGeometry();
  tracerGeometry.setAttribute('position',tracerData);
  const tracer=new T.Line(tracerGeometry,new T.LineBasicMaterial({color:0xffdb83,transparent:true,opacity:.9}));
  tracer.frustumCulled=false;
  tracer.visible=false;
  scene.add(tracer);

  let playing=false, started=false, driving=null;
  let heat=0, alertCooldown=0, trouble=0, shotCooldown=0, impactCooldown=0, stepCooldown=0, flash=0;
  let yaw=0, pitch=.23, time=0, introTime=0, uiTime=0, cameraIdle=0, cameraFresh=true;
  let padMode='keyboard', cash=startingCash, armed=false, ammo=0, previousAim=false;
  let punchMotion=0, hitTime=0, impactTime=0;
  let notice='', noticeTime=0;
  let patrolStop;
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
    driving=null;
    cash=startingCash; armed=false; ammo=0; previousAim=false;
    heat=trouble=shotCooldown=flash=impactCooldown=stepCooldown=noticeTime=0;
    punchMotion=hitTime=impactTime=0;
    yaw=.32; pitch=.22;
    cameraIdle=0;
    Object.assign(player,spawn,{angle:0});
    player.model.root.position.set(player.x,0,player.z);
    player.model.root.rotation.y=0;
    player.model.root.visible=true;
    animatePerson(player.model,0,0,false,false);
    parked.forEach((car,index)=>{
      resetVehicle(car,carSpawns[index]);
      car.stolen=false;
      poseCar(car,0);
    });
    intersections.clear();
    traffic.forEach((car,index)=>{resetDriver(car,index);poseCar(car,0);});
    resetVehicle(patrol,policeSpawn);
    patrolStop=null;
    patrol.root.visible=false;
    world.targets.forEach(target=>{
      target.hit=false;
      target.resetAfter=0;
      target.root.visible=true;
      target.plate.scale.set(.52,.12,.52);
    });
    for(const npc of pedestrians) {
      Object.assign(npc,npc.home,{hp:3,fear:0,down:0,stagger:0});
      npc.model.root.position.set(npc.x,groundHeight(npc.x,npc.z),npc.z);
      npc.model.root.rotation.x=0;
    }
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
      ? 'Reponha a munição até '+ammoPack+' cartuchos, sem custo.'
      : 'Uma pistola e '+ammoPack+' cartuchos por R$ '+weaponPrice+'.';
    element('shop-balance').textContent='Saldo: R$ '+cash+' · Cartuchos: '+ammo;
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
      cash-=weaponPrice;
      announce('Pistola comprada.');
    } else announce('Munição reposta.');
    ammo=ammoPack;
    audio.bell();
    closeShop();
  }

  function wanted(duration) {
    if (heat<=0) {
      patrolStop=null;
      const actor=driving??player;
      // Use the farther of two entry intersections so the chase has room to start.
      const entries=[policeSpawn,{x:57,z:57,angle:Math.PI}];
      const entry=distance(actor,entries[0])>distance(actor,entries[1])?entries[0]:entries[1];
      resetVehicle(patrol,entry);
      poseCar(patrol,0);
      alertCooldown=0;
    }
    heat=Math.max(heat,duration);
  }

  const atShop=()=>!driving && distance(player,weaponShop)<2.85;
  const vehicleList=()=>patrol.root.visible?[...cars,patrol]:cars;
  function carAt() {
    let nearest=null, limit=3.0;
    for(const car of cars) {
      const gap=distance(player,car);
      if(gap>=limit || car.integrity<=0 || Math.abs(car.speed)>3.4) continue;
      nearest=car;
      limit=gap;
    }
    return nearest;
  }
  function groundHeight(x,z) {
    if (Math.abs(x)<10.5 && Math.abs(z-38)<10) return .19;
    return blocks.some(cx=>Math.abs(x-cx)<13.35) && blocks.some(cz=>Math.abs(z-cz)<13.35) ? .16 : 0;
  }
  function exitVehicle(forced=false) {
    if(!driving) return;
    const {angle,x,z}=driving;
    if(!forced && Math.hypot(driving.vx,driving.vz)>4.2) {announce('Reduza a velocidade para sair.');return;}
    const spots=[
      [x+Math.cos(angle)*1.75,z-Math.sin(angle)*1.75],
      [x-Math.cos(angle)*1.75,z+Math.sin(angle)*1.75],
      [x-Math.sin(angle)*2.85,z-Math.cos(angle)*2.85]
    ];
    const slot=spots.find(([px,pz])=>clear(px,pz,.4,world.solid) &&
      vehicleList().every(car=>car===driving || !vehicleContains(car,px,pz,.4)));
    if(!slot && !forced) {announce('Sem espaço para abrir a porta.');return;}
    [player.x,player.z]=slot??[spawn.x,spawn.z];
    player.angle=angle;
    driving.abandoned=0;
    driving=null;
    player.model.root.visible=true;
  }

  function interact() {
    if(driving) {exitVehicle();return;}
    if(atShop()) {openShop();return;}
    const car=carAt();
    if(!car) {announce('Aproxime-se de um carro.');return;}
    driving=car;
    car.driver=null;
    player.model.root.visible=false;
    if (!car.stolen) {
      car.stolen=true;
      wanted(23);
    }
    yaw=car.angle;
    cameraIdle=0;
  }

  function harm(npc,amount) {
    if(npc.down>0) return;
    npc.hp-=amount;
    npc.stagger=.37;
    npc.fear=6;
    if(npc.hp<=0) npc.down=13;
  }

  function punch() {
    if(punchMotion>0) return;
    player.angle=yaw;
    punchMotion=.44;
    const npc=findPunch(player,pedestrians,groundHeight(player.x,player.z),world.solid);
    audio.punch(Boolean(npc));
    if(!npc) return;
    harm(npc,1);
    hitTime=.19;
    wanted(12);
    announce(npc.down>0?'Pedestre derrubado.':'Soco acertou.');
  }

  function fire(aim) {
    if(punchMotion>0 || shotCooldown>0) return;
    if(!armed) {announce('Compre a pistola na loja.');return;}
    if(ammo<=0) {announce('Sem munição. Volte à loja para repor.');return;}
    ammo--;
    shotCooldown=.27;
    flash=.095;
    player.angle=yaw;
    audio.shot();
    const height=groundHeight(player.x,player.z);
    shotFrom.set(player.x+Math.sin(yaw)*.43,height+1.35,player.z+Math.cos(yaw)*.43);
    const candidates=[];
    for(const npc of pedestrians) {
      if(npc.down>0 || distance(npc,player)>55) continue;
      const y=groundHeight(npc.x,npc.z);
      candidates.push({
        center:[npc.x,y+1.2,npc.z],bounds:[npc.x-.33,y+.16,npc.z-.33,npc.x+.33,y+1.91,npc.z+.33],
        onHit(){harm(npc,2);wanted(24);announce(npc.down>0?'Pedestre derrubado.':'Disparo acertou.');}
      });
    }
    for(const target of world.targets) {
      if(target.hit) continue;
      candidates.push({
        center:[target.x,1.39,target.z],bounds:[target.x-.20,.87,target.z-.52,target.x+.20,1.91,target.z+.52],
        onHit(){target.hit=true;target.resetAfter=8;target.root.visible=false;audio.bell();}
      });
    }
    for(const car of vehicleList()) {
      if(distance(car,player)>55) continue;
      const xSpace=.96*Math.abs(Math.cos(car.angle))+1.84*Math.abs(Math.sin(car.angle));
      const zSpace=.96*Math.abs(Math.sin(car.angle))+1.84*Math.abs(Math.cos(car.angle));
      candidates.push({
        center:null,bounds:[car.x-xSpace,.22,car.z-zSpace,car.x+xSpace,1.52,car.z+zSpace],
        onHit(){car.integrity=Math.max(0,car.integrity-6);}
      });
    }
    const origin=shotFrom.toArray();
    if(aim) {
      camera.getWorldDirection(shotDirection);
      const cameraHit=traceShot(camera.position.toArray(),shotDirection.toArray(),world.solid,candidates,55);
      shotTo.copy(camera.position).addScaledVector(shotDirection,cameraHit.distance);
    } else shotTo.copy(shotFrom).addScaledVector(shotDirection.set(Math.sin(yaw),0,Math.cos(yaw)),48);
    if((aim && padMode!=='keyboard') || !aim) {
      let closest=aim?.13:.36;
      for(const candidate of candidates) {
        if(!candidate.center || distance(player,{x:candidate.center[0],z:candidate.center[2]})>(aim?21:9)) continue;
        projection.fromArray(candidate.center).project(camera);
        const dx=candidate.center[0]-player.x,dz=candidate.center[2]-player.z;
        const angle=Math.atan2(dx,dz)-yaw;
        const error=aim?Math.hypot(projection.x,projection.y):Math.abs(Math.atan2(Math.sin(angle),Math.cos(angle)));
        if(projection.z>=1 || error>=closest || !reachable(origin,candidate.center,world.solid)) continue;
        closest=error;
        shotTo.fromArray(candidate.center);
      }
    }
    const direction=shotDirection.subVectors(shotTo,shotFrom).normalize();
    const hit=traceShot(origin,direction.toArray(),world.solid,candidates);
    shotTo.copy(shotFrom).addScaledVector(direction,hit.distance);
    if(hit.hit) {
      hit.hit.onHit();
      hitTime=.19;
    }
    if(distance(player,range)>10) wanted(19);
    for(const npc of pedestrians) if(distance(npc,player)<21) npc.fear=Math.max(npc.fear,4.8);
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
    const speed=magnitude*(control.aim?2.1:control.run?7.4:4.2);
    const direction=yaw+Math.atan2(-control.x,control.y || 0);
    const dx=Math.sin(direction)*speed*dt, dz=Math.cos(direction)*speed*dt;
    const clearOfCars=vehicleList().every(car=>!vehicleContains(car,player.x+dx,player.z+dz,.30) ||
      distance(car,{x:player.x+dx,z:player.z+dz})>distance(car,player));
    const moved=speed>.02 && clearOfCars && move(player,player.x+dx,player.z+dz,.32,world.solid);
    if(punchMotion<=0 && (control.aim || magnitude>.05)) player.angle=turn(player.angle,control.aim?yaw:direction,dt*11);
    player.model.root.position.set(player.x,groundHeight(player.x,player.z),player.z);
    player.model.root.rotation.y=player.angle;
    animatePerson(player.model,dt,moved?speed:0,control.aim || flash>0,armed && punchMotion<=0,punchMotion/.44);
    if(moved && stepCooldown<=0) {
      audio.step();
      stepCooldown=control.run?.27:.41;
    }
  }

  const snapRoad=value=>roads.reduce((best,road)=>Math.abs(value-road)<Math.abs(value-best)?road:best,roads[0]);
  function updatePatrol(dt,actor) {
    if(heat<=0) {patrol.root.visible=false;trouble=0;return;}
    patrol.root.visible=true;
    const separation=distance(actor,patrol);
    heat=Math.max(0,heat-dt*(separation>24?1.65:separation>10?.8:.43));
    trouble=clamp(trouble+dt*(separation<3.1?1:-.70),0,4);
    if(trouble>=3.5) {
      exitVehicle(true);
      Object.assign(player,spawn);
      player.model.root.visible=true;
      heat=trouble=0;
      cameraFresh=true;
      announce('A patrulha te parou. Continue a pé.');
    } else if(heat===0) announce('Área limpa.');
    if(heat<=0) {patrol.root.visible=false;return;}
    if(separation<47 && alertCooldown<=0) {
      audio.siren();
      alertCooldown=1.18;
    }
    patrol.lamps[0].visible=Math.floor(introTime*7)%2===0;
    patrol.lamps[1].visible=!patrol.lamps[0].visible;
    const actorRoadX=snapRoad(actor.x), actorRoadZ=snapRoad(actor.z);
    const nearVertical=Math.abs(actor.x-actorRoadX)<Math.abs(actor.z-actorRoadZ);
    const target=nearVertical?{x:actorRoadX,z:actor.z}:{x:actor.x,z:actorRoadZ};
    if(!patrolStop || distance(patrol,patrolStop)<.85) {
      const px=snapRoad(patrol.x), pz=snapRoad(patrol.z);
      const onX=Math.abs(patrol.x-px)<1.5, onZ=Math.abs(patrol.z-pz)<1.5;
      if((nearVertical && onX && target.x===px) || (!nearVertical && onZ && target.z===pz)) patrolStop=target;
      else if(onX && onZ) {
        const goX=nearVertical?target.x:snapRoad(target.x);
        const goZ=nearVertical?snapRoad(target.z):target.z;
        patrolStop=Math.abs(goX-px)>1.5?{x:px+Math.sign(goX-px)*38,z:pz}:{x:px,z:goZ};
      } else if(onX) patrolStop={x:px,z:snapRoad(target.z)};
      else patrolStop={x:snapRoad(target.x),z:pz};
    }
    const vehicles=vehicleList();
    const intent=Math.min(distance(patrol,patrolStop)*2,separation<3?0:driving?15:10.5);
    const desired=safeSpeed(patrol,vehicles,pedestrians,intent);
    const command=steeringCommand(patrol,patrolStop,desired);
    stepVehicle(patrol,dt,command,world.solid,vehicles);
    if(patrol.integrity<=0) {
      heat=0;
      patrol.root.visible=false;
      announce('A patrulha perdeu seu rastro.');
    }
    poseCar(patrol,dt);
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
          if(positionAvailable(next,active.vehicles.filter(other=>other!==car),actor,world.solid)) Object.assign(car,next);
        }
      }
      if (car!==driving && car.impact>5 && distance(actor,car)<18 && impactCooldown<=0) {
        audio.crash();
        impactCooldown=.32;
      }
      poseCar(car,dt,car.steer);
    }
    if (!driving) return;
    if(driving.impact>4.1 && impactCooldown<=0) {
      audio.crash();
      impactTime=.24;
      impactCooldown=.36;
      announce(driving.integrity<43?'Motor avariado.':'Colisão.');
    }
    if(driving.integrity<=0 && Math.hypot(driving.vx,driving.vz)<3) {
      exitVehicle(true);
      announce('Cupê inutilizado. Encontre outro carro.');
    }
  }

  function updatePeople(dt,actor) {
    for(const npc of pedestrians) {
      npc.stagger=Math.max(0,npc.stagger-dt);
      if(npc.down>0) {
        npc.down-=dt;
        npc.model.root.rotation.x+=(Math.PI/2-npc.model.root.rotation.x)*Math.min(1,dt*7.5);
        if(npc.down<=0) {
          if(distance(npc.home,actor)<6) {npc.down=3;continue;}
          Object.assign(npc,npc.home,{hp:3,fear:0,down:0,stagger:0});
          npc.model.root.rotation.x=0;
          npc.model.root.position.set(npc.x,groundHeight(npc.x,npc.z),npc.z);
        }
        continue;
      }
      const goal=npc.path[npc.next];
      if(driving && distance(actor,npc)<4 && Math.abs(driving.speed)>3) {
        npc.fear=3.4;
        if(Math.abs(driving.speed)>6 && vehicleContains(driving,npc.x,npc.z,.21)) {
          harm(npc,3);
          wanted(22);
          continue;
        }
      }
      npc.fear=Math.max(0,npc.fear-dt);
      const fleeing=npc.fear>0 && distance(npc,actor)<13;
      const direction=fleeing?Math.atan2(npc.x-actor.x,npc.z-actor.z):Math.atan2(goal.x-npc.x,goal.z-npc.z);
      const speed=npc.stagger>0?.18:fleeing?3.5:npc.pace;
      if(!fleeing && distance(npc,goal)<.39) npc.next=(npc.next+1)%4;
      const moved=move(npc,npc.x+Math.sin(direction)*speed*dt,npc.z+Math.cos(direction)*speed*dt,.23,world.solid);
      npc.model.root.position.set(npc.x,groundHeight(npc.x,npc.z),npc.z);
      npc.model.root.rotation.y=turn(npc.model.root.rotation.y,direction,dt*8);
      npc.model.root.rotation.z=npc.stagger>0?Math.sin(npc.stagger*9)*.27:0;
      animatePerson(npc.model,dt,moved?speed:0,false,false);
    }
  }

  function cameraPose(dt,actor,aim) {
    const portrait=camera.aspect<.85;
    const walkDistance=portrait?7.9:6.5;
    const length=driving?(portrait?12:10.2):aim?4.45:walkDistance;
    const height=driving?2.0:1.32;
    const side=driving?0:aim?.61:.22;
    const lean=aim?.12+pitch*.25:Math.max(.10,pitch);
    cameraTarget.set(actor.x+Math.cos(yaw)*side,height,actor.z-Math.sin(yaw)*side);
    desiredCamera.set(cameraTarget.x-Math.sin(yaw)*length*Math.cos(lean),height+Math.sin(lean)*length,cameraTarget.z-Math.cos(yaw)*length*Math.cos(lean));
    for(let t=.15;t<=1;t+=.085) {
      const x=T.MathUtils.lerp(cameraTarget.x,desiredCamera.x,t);
      const z=T.MathUtils.lerp(cameraTarget.z,desiredCamera.z,t);
      if(!clear(x,z,.25,world.solid)) {
        desiredCamera.lerp(cameraTarget,1-Math.max(.21,t-.075));
        desiredCamera.y=Math.max(desiredCamera.y,1.95);
        break;
      }
    }
    const lookDistance=aim?14:1.0;
    const lookHeight=aim?height-(pitch-.02)*lookDistance:height-.07;
    sight.set(cameraTarget.x+Math.sin(yaw)*lookDistance,lookHeight,cameraTarget.z+Math.cos(yaw)*lookDistance);
    if(cameraFresh) { camera.position.copy(desiredCamera); cameraFresh=false; }
    else camera.position.lerp(desiredCamera,1-Math.exp(-dt*14));
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
    element('detail').textContent='Loja de armas · '+Math.round(distance(actor,weaponShop))+' m';
    const prompt=element('prompt');
    const key=padMode==='pad'?'Y · ':padMode==='keyboard'?'E · ':'';
    const shopping=atShop();
    const nearby=shopping || (!driving && Boolean(carAt()));
    prompt.hidden=!(driving || nearby || noticeTime>0);
    prompt.textContent=noticeTime>0?notice:key+(driving?'Sair do carro':shopping?'Abrir loja de armas':'Pegar o cupê');
    element('heat').hidden=heat<=0;
    element('heat').textContent=trouble>1?'PATRULHA PRÓXIMA':'★ PROCURADO';
    element('mode').textContent=driving?'Cupê · '+Math.round(driving.integrity)+'% integridade':armed?'Pistola':'Vila Brasa';
    element('reading').textContent=driving?Math.round(Math.hypot(driving.vx,driving.vz)*3.6)+' km/h':armed?ammo+' cartuchos':'Punhos';
    element('crosshair').hidden=!aim;
    element('interact').textContent=driving?'Sair':shopping?'Loja':'Entrar';
    element('sprint').textContent=driving?'Freio':'Correr';
    element('aim').hidden=element('fire').hidden=Boolean(driving)||!armed;
    element('punch').hidden=Boolean(driving);
    element('hud').classList.toggle('armed',armed&&!driving);
    minimap.drawImage(mapBase,0,0);
    for(const car of cars) if(car!==driving && car.integrity>0) dot(car,car.driver?'#82b9b3':'#eab987',car.driver?2.6:3.5);
    dot(weaponShop,'#eaff89',6);
    dot(range,'#cdbc9e',4);
    if(heat>0) dot(patrol,'#ff7769',5.5);
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
      updatePeople(dt,player);
    } else if(playing) {
      padMode=control.mode;
      const aim=control.aim && armed && !driving && punchMotion<=0 && !control.punch;
      if(aim!==previousAim) {
        pitch=aim?.03:.22;
        previousAim=aim;
      }
      cameraIdle=Math.abs(control.lookX)+Math.abs(control.lookY)>.003?0:cameraIdle+dt;
      yaw-=control.lookX;
      pitch=clamp(pitch+control.lookY,-.09,.68);
      if (driving && cameraIdle>1.2) pitch += (.24-pitch)*dt;
      impactCooldown-=dt; shotCooldown-=dt; stepCooldown-=dt;
      alertCooldown-=dt; noticeTime-=dt; flash-=dt;
      punchMotion=Math.max(0,punchMotion-dt);
      hitTime-=dt; impactTime-=dt;
      if (control.interact) interact();
      if (shop.open) return;
      if(driving) drive(dt,control);
      else {
        if(control.punch) punch();
        walk(dt,{...control,aim});
      }
      updateVehicles(dt,driving??player);
      const actor=driving??player;
      updatePeople(dt,actor);
      updatePatrol(dt,actor);
      audio.motor(driving?.speed??0,Boolean(driving));
      const target=driving??player;
      cameraPose(dt,target,aim&&!driving);
      if (control.fire && !driving) fire(aim);
      tracer.visible=flash>0;
      element('hitmark').hidden=hitTime<=0;
      element('impact').hidden=impactTime<=0;
      world.marker.visible=distance(target,weaponShop)<26;
      world.beacon.rotation.y=introTime*2;
      world.beacon.position.y=2.55+Math.sin(introTime*4)*.27;
      for(const target of world.targets) {
        if(!target.hit) continue;
        target.resetAfter-=dt;
        if(target.resetAfter>0) continue;
        target.hit=false;
        target.root.visible=true;
      }
      uiTime-=dt;
      if(uiTime<=0) {
        updateHud(target,aim&&!driving);
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

  const input=controls(()=>shop.open?closeShop():setPlaying(!playing),()=>playing);
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
  play.addEventListener('click',()=>setPlaying(true));
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing) setPlaying(false);});
  window.addEventListener('resize',qualityUpdate);
  renderer.domElement.addEventListener('webglcontextrestored',qualityUpdate);
  reset();
  updateSoundButton();
  qualityUpdate();
  play.textContent='Jogar agora';
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
