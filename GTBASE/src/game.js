import * as T from 'three';
import { createWorld } from './world.js';
import { animatePerson, coupe, person, poseCar } from './models.js';
import { blocks, roads, spawn, delivery, range, clamp, clear, distance, move, turn, nextMission } from './rules.js';
import { controls, element } from './input.js';
import { createAudio } from './audio.js';

const view=element('view');
const menu=element('menu');
const play=/** @type {HTMLButtonElement} */(element('play'));
const quality=/** @type {HTMLSelectElement} */(element('quality'));

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
    {x:18,z:-5,angle:Math.PI,color:0xae4930},
    {x:-21,z:2,angle:0,color:0x429277},
    {x:36,z:20.8,angle:Math.PI/2,color:0xc7a652},
    {x:58,z:-36,angle:0,color:0x586e9c}
  ];
  const cars=carSpawns.map(({color})=>coupe(scene,color));
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
    return {model,path,next:(point+1)%4,x:a.x+(next.x-a.x)*f,z:a.z+(next.z-a.z)*f,pace:1.08+(i%4)*.15,fear:0};
  });
  const audio=createAudio();
  if (stored('sound')==='off') audio.toggle();
  const sight=new T.Vector3();
  const cameraTarget=new T.Vector3();
  const desiredCamera=new T.Vector3();
  const projection=new T.Vector3();
  const shotFrom=new T.Vector3();
  const shotTo=new T.Vector3();
  const tracerData=new T.Float32BufferAttribute(new Float32Array(6),3);
  const tracerGeometry=new T.BufferGeometry();
  tracerGeometry.setAttribute('position',tracerData);
  const tracer=new T.Line(tracerGeometry,new T.LineBasicMaterial({color:0xffdb83,transparent:true,opacity:.9}));
  tracer.frustumCulled=false;
  tracer.visible=false;
  scene.add(tracer);

  let stage=0, playing=false, started=false, driving=null, missionCar=cars[0];
  let heat=0, alertCooldown=0, trouble=0, shotCooldown=0, impactCooldown=0, stepCooldown=0, flash=0;
  let yaw=0, pitch=.23, time=0, introTime=0, uiTime=0, cameraIdle=0, cameraFresh=true;
  let targetCount=0, padMode='keyboard';
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
  const labels=[
    ['Pegue um cupê','Aproxime-se de um carro e entre.'],
    ['Dirija até a praça','Leve o cupê ao círculo marcado.'],
    ['Vá ao estande','Estacione e entre a pé no círculo.'],
    ['Acerte os alvos','Mire nas placas laranja e atire.'],
    ['Exploração livre','A missão acabou. Vila Brasa é sua para explorar.']
  ];

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
    playing=value;
    menu.hidden=value;
    element('hud').hidden=!value;
    input.clear();
    if(value) {
      audio.start();
      if(!started) {
        yaw=1.11;
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
    stage=0;
    driving=null;
    missionCar=cars[0];
    heat=trouble=shotCooldown=flash=impactCooldown=stepCooldown=noticeTime=0;
    targetCount=0;
    yaw=1.11; pitch=.22;
    cameraIdle=0;
    Object.assign(player,spawn,{angle:0});
    player.model.root.position.set(player.x,0,player.z);
    player.model.root.rotation.y=0;
    player.model.root.visible=true;
    animatePerson(player.model,0,0,false,false);
    cars.forEach((car,index)=>{
      Object.assign(car,carSpawns[index],{speed:0,stolen:false});
      poseCar(car,0);
    });
    Object.assign(patrol,policeSpawn,{speed:0});
    patrolStop=null;
    patrol.root.visible=false;
    world.targets.forEach(target=>{
      target.hit=false;
      target.root.visible=true;
      target.plate.scale.set(.52,.12,.52);
    });
    uiTime=0;
  }

  function announce(message) {
    notice=message;
    noticeTime=2.4;
  }

  function advance(event) {
    const next=nextMission(stage,event);
    if(next===stage) return;
    stage=next;
    uiTime=0;
    audio.bell();
  }

  function wanted(duration) {
    if (heat<=0) {
      patrolStop=null;
      const actor=driving??player;
      // Use the farther of two entry intersections so the chase has room to start.
      const entries=[policeSpawn,{x:57,z:57,angle:Math.PI}];
      const entry=distance(actor,entries[0])>distance(actor,entries[1])?entries[0]:entries[1];
      Object.assign(patrol,entry,{speed:0});
      poseCar(patrol,0);
      alertCooldown=0;
    }
    heat=Math.max(heat,duration);
  }

  const carAt = () => cars.find(car=>distance(player,car)<2.9);
  function groundHeight(x,z) {
    if (Math.abs(x)<10.5 && Math.abs(z-38)<10) return .19;
    return blocks.some(cx=>Math.abs(x-cx)<13.35) && blocks.some(cz=>Math.abs(z-cz)<13.35) ? .16 : 0;
  }
  function interact() {
    if(driving) {
      const {angle,x,z}=driving;
      if(Math.abs(driving.speed)>4.2) {announce('Reduza a velocidade para sair.');return;}
      const spots=[
        [x+Math.cos(angle)*1.75,z-Math.sin(angle)*1.75],
        [x-Math.cos(angle)*1.75,z+Math.sin(angle)*1.75],
        [x-Math.sin(angle)*2.85,z-Math.cos(angle)*2.85]
      ];
      const slot=spots.find(([px,pz])=>clear(px,pz,.4,world.solid) && cars.every(car=>car===driving || distance(car,{x:px,z:pz})>1.65));
      if(!slot) {announce('Sem espaço para abrir a porta.');return;}
      [player.x,player.z]=slot;
      player.angle=angle;
      driving.speed=0;
      driving=null;
      player.model.root.visible=true;
      return;
    }
    const car=carAt();
    if(!car) {announce('Aproxime-se de um carro.');return;}
    driving=car;
    player.model.root.visible=false;
    if (!car.stolen) {
      car.stolen=true;
      wanted(23);
    }
    if(stage===0) {
      missionCar=car;
      advance('take');
    }
    yaw=car.angle;
    cameraIdle=0;
  }

  function fire(aim) {
    if (stage<3) {announce('A pistola fica no estande.');return;}
    if (shotCooldown>0) return;
    shotCooldown=.29;
    flash=.08;
    audio.shot();
    shotFrom.set(player.x,1.38,player.z);
    camera.getWorldDirection(shotTo);
    shotTo.multiplyScalar(36).add(shotFrom);
    const candidates=world.targets.filter(target=>!target.hit && distance(target,player)<33 && player.x>target.x);
    let chosen;
    let best=Infinity;
    for(const target of candidates) {
      projection.set(target.x,1.39,target.z).project(camera);
      const error=Math.hypot(projection.x,projection.y);
      const blocked=world.solid.some(box=>{
        if(box.x+box.w/2<target.x || box.x-box.w/2>player.x) return false;
        for(let fraction=.1; fraction<1; fraction+=.1) {
          const x=player.x+(target.x-player.x)*fraction;
          const z=player.z+(target.z-player.z)*fraction;
          if(Math.abs(x-box.x)<box.w/2 && Math.abs(z-box.z)<box.d/2) return true;
        }
        return false;
      });
      const angle=Math.atan2(target.x-player.x,target.z-player.z);
      const inFront=Math.cos((aim?yaw:player.angle)-angle)>.48;
      const eligible=projection.z<1 && !blocked && (inFront || distance(player,range)<3.4);
      if(eligible && error<best) {
        chosen=target;
        best=error;
      }
    }
    const assisted=distance(player,range)<6;
    if(chosen && (best<(aim?.30:.17) || assisted)) {
      chosen.hit=true;
      chosen.root.visible=false;
      targetCount++;
      shotTo.set(chosen.x,1.39,chosen.z);
      audio.bell();
      if(targetCount===world.targets.length) advance('targets');
    }
    if(!assisted) {
      wanted(16);
      for(const npc of pedestrians) if(distance(npc,player)<21) npc.fear=4;
    }
    tracerData.setXYZ(0,shotFrom.x,shotFrom.y,shotFrom.z);
    tracerData.setXYZ(1,shotTo.x,shotTo.y,shotTo.z);
    tracerData.needsUpdate=true;
  }

  function drive(dt,control) {
    const car=driving;
    car.speed+=control.y*dt*(control.y*car.speed<0?24:14);
    car.speed*=Math.exp(-dt*(control.brake?5:Math.abs(control.y)<.08?1.27:.24));
    car.speed=clamp(car.speed,-7.3,25.5);
    const steer=-control.x;
    const angle=car.angle+steer*dt*(control.brake?2.15:1.68)*Math.min(1,Math.abs(car.speed)/4.9)*Math.sign(car.speed);
    const step=car.speed*dt;
    const nextX=car.x+Math.sin(angle)*step;
    const nextZ=car.z+Math.cos(angle)*step;
    const radius=1.04;
    const front={x:nextX+Math.sin(angle)*1.05,z:nextZ+Math.cos(angle)*1.05};
    const back={x:nextX-Math.sin(angle)*1.05,z:nextZ-Math.cos(angle)*1.05};
    const occupied=cars.some(other=>other!==car && (distance(other,front)<1.75 || distance(other,back)<1.75));
    if(!occupied && clear(front.x,front.z,radius,world.solid) && clear(back.x,back.z,radius,world.solid)) {
      car.x=nextX; car.z=nextZ; car.angle=angle;
    } else if(Math.abs(step)>.005) {
      if(Math.abs(car.speed)>5.8 && impactCooldown<=0) {
        audio.crash();
        impactCooldown=.42;
      }
      car.speed*=-.23;
    }
    poseCar(car,dt,steer);
    if(cameraIdle>1.15 && Math.abs(car.speed)>2.4) yaw=turn(yaw,car.angle,dt*2.3);
    if(stage===1 && distance(car,delivery)<3.3) advance('deliver');
  }

  function walk(dt,control) {
    const magnitude=Math.min(1,Math.hypot(control.x,control.y));
    const speed=magnitude*(control.aim?2.1:control.run?7.4:4.2);
    const direction=yaw+Math.atan2(-control.x,control.y || 0);
    const dx=Math.sin(direction)*speed*dt, dz=Math.cos(direction)*speed*dt;
    const clearOfCars=cars.every(car=>distance(car,{x:player.x+dx,z:player.z+dz})>1.30 ||
      distance(car,{x:player.x+dx,z:player.z+dz})>distance(car,player));
    const moved=speed>.02 && clearOfCars && move(player,player.x+dx,player.z+dz,.32,world.solid);
    if(control.aim || magnitude>.05) player.angle=turn(player.angle,control.aim?yaw:direction,dt*11);
    player.model.root.position.set(player.x,groundHeight(player.x,player.z),player.z);
    player.model.root.rotation.y=player.angle;
    animatePerson(player.model,dt,moved?speed:0,control.aim || flash>0,stage>=3);
    if(moved && stepCooldown<=0) {
      audio.step();
      stepCooldown=control.run?.27:.41;
    }
    if(stage===2 && distance(player,range)<2.6) {
      advance('range');
      yaw=-Math.PI/2;
      pitch=.02;
      cameraFresh=true;
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
      if(driving) driving.speed=0;
      driving=null;
      Object.assign(player,stage>=2?{x:24,z:36}:spawn);
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
    const d=distance(patrol,patrolStop);
    const velocity=Math.min(d/dt,driving?12.0:8.2);
    if(d>.06 && separation>2.2) {
      const direction=Math.atan2(patrolStop.x-patrol.x,patrolStop.z-patrol.z);
      patrol.angle=turn(patrol.angle,direction,dt*4.7);
      patrol.x+=Math.sin(direction)*velocity*dt;
      patrol.z+=Math.cos(direction)*velocity*dt;
      patrol.speed=velocity;
    } else patrol.speed=0;
    poseCar(patrol,dt);
  }

  function updatePeople(dt,actor) {
    for(const npc of pedestrians) {
      const goal=npc.path[npc.next];
      if(distance(npc,goal)<.39) npc.next=(npc.next+1)%4;
      if(driving && distance(actor,npc)<4 && Math.abs(driving.speed)>3) npc.fear=2.7;
      npc.fear=Math.max(0,npc.fear-dt);
      const direction=Math.atan2(goal.x-npc.x,goal.z-npc.z);
      const speed=npc.fear>0?3.35:npc.pace;
      npc.x+=Math.sin(direction)*speed*dt;
      npc.z+=Math.cos(direction)*speed*dt;
      npc.model.root.position.set(npc.x,.16,npc.z);
      npc.model.root.rotation.y=turn(npc.model.root.rotation.y,direction,dt*8);
      animatePerson(npc.model,dt,speed,false,false);
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

  function markerFor(actor) {
    if(stage===0) return cars.reduce((best,car)=>distance(actor,car)<distance(actor,best)?car:best,missionCar);
    if(stage===1) return delivery;
    if(stage===2 || stage===3) return range;
    return null;
  }

  function dot(location,color,radius) {
    minimap.fillStyle=color;
    minimap.beginPath();
    minimap.arc(mapPos(location.x),mapPos(location.z),radius,0,Math.PI*2);
    minimap.fill();
  }

  function updateHud(actor,marker,aim) {
    const [title,detail]=labels[stage];
    element('objective').textContent=title;
    const destination=marker && stage!==3?' · '+Math.round(distance(actor,marker))+' m':'';
    element('detail').textContent=stage===3?detail+' '+targetCount+'/3':detail+destination;
    const prompt=element('prompt');
    const key=padMode==='pad'?'Y · ':padMode==='keyboard'?'E · ':'';
    const nearby=!driving && Boolean(carAt());
    prompt.hidden=!(driving || nearby || noticeTime>0);
    prompt.textContent=noticeTime>0?notice:key+(driving?'Sair do carro':'Pegar o cupê');
    element('heat').hidden=heat<=0;
    element('heat').textContent=trouble>1?'PATRULHA PRÓXIMA':'★ PROCURADO';
    element('mode').textContent=driving?'Cupê Brasa':stage>=3?'Pistola':'Vila Brasa';
    element('reading').textContent=driving?Math.round(Math.abs(driving.speed)*3.6)+' km/h':stage>=3?'∞ munição':'A pé';
    element('crosshair').hidden=!aim;
    element('interact').textContent=driving?'Sair':'Entrar';
    element('sprint').textContent=driving?'Freio':'Correr';
    element('aim').hidden=Boolean(driving)||stage<3;
    element('fire').hidden=Boolean(driving)||stage<3;
    minimap.drawImage(mapBase,0,0);
    for(const car of cars) if(car!==driving) dot(car,'#eab987',3.5);
    if(marker) dot(marker,'#eaff89',6);
    if(heat>0) dot(patrol,'#ff7769',5.5);
    if(stage===3) for(const target of world.targets) if(!target.hit) dot(target,'#ffa34f',4);
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
    if(!started) {
      const angle=.54+Math.sin(introTime*.13)*.19;
      const radius=camera.aspect<1?26:30;
      camera.position.set(24+Math.sin(angle)*radius,14,17+Math.cos(angle)*radius);
      camera.lookAt(10,2,13);
      updatePeople(dt,player);
    } else if(playing) {
      padMode=control.mode;
      const aim=control.aim && stage>=3 && !driving;
      cameraIdle=Math.abs(control.lookX)+Math.abs(control.lookY)>.003?0:cameraIdle+dt;
      yaw-=control.lookX;
      pitch=clamp(pitch+control.lookY,-.09,.68);
      if (driving && cameraIdle>1.2) pitch += (.24-pitch)*dt;
      impactCooldown-=dt; shotCooldown-=dt; stepCooldown-=dt;
      alertCooldown-=dt; noticeTime-=dt; flash-=dt;
      if (control.interact) interact();
      if(driving) drive(dt,control);
      else walk(dt,{...control,aim});
      const actor=driving??player;
      updatePeople(dt,actor);
      updatePatrol(dt,actor);
      audio.motor(driving?.speed??0,Boolean(driving));
      const target=driving??player;
      cameraPose(dt,target,aim);
      if (control.fire && !driving) fire(aim);
      tracer.visible=flash>0;
      const marker=markerFor(target);
      world.marker.visible=Boolean(marker) && stage!==3;
      if(marker) {
        world.marker.position.set(marker.x,0,marker.z);
        world.beacon.rotation.y=introTime*2;
        world.beacon.position.y=2.55+Math.sin(introTime*4)*.27;
      }
      uiTime-=dt;
      if(uiTime<=0) {
        updateHud(target,marker,aim);
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

  const input=controls(()=>setPlaying(!playing),()=>playing);
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
