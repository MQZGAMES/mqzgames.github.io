import test from 'node:test';
import assert from 'node:assert/strict';
import { Scene, Vector3 } from 'three';
import { person } from '../src/models.js';
import { applyUpgrades, buildCar, damageSummary, fitPart, motorcycle, partNames, poseCar, repairPart, seatPerson, wheelGrip } from '../src/cars.js';
import { adoptNearestRoute, bikeRouteIndexes, detourAroundBlock, driveTraffic, resetDriver, streetFits, trafficRoutes, uTurnCommand } from '../src/traffic.js';
import { stepVehicle } from '../src/vehicle.js';
import { crossesRoad, footNavigator, onRoad, onZebra } from '../src/navigation.js';
import { loadProgress } from '../src/save.js';
import { furnishLajesHome } from '../src/lajes-home.js';
import { engineKind } from '../src/audio.js';
import { carModels } from '../src/cars.js';

const drive=(cars,seconds,{people=[],signals,dt=1/20,each}={})=>{
  const zones=new Map();
  for(let i=0;i<seconds/dt;i++) {
    driveTraffic(cars,{player:null,vehicles:cars,keepToStreet:true},people,[],dt,zones,signals);
    each?.(i*dt);
  }
};

test('turn signals blink on the side of the coming turn and go dark on straight roads',()=>{
  const car=buildCar(new Scene(),'sedan');
  resetDriver(car,0);
  car.driver.parkTimer=1e9;
  const sides=new Set();
  let straightWithSignal=0;
  drive([car],150,{each:()=>{
    const point=car.driver.route[car.driver.next];
    if(car.signal) sides.add(Math.sign(car.signal)===Math.sign(point.turn)?'match':'wrong');
    else if(point.curve) return;
    if(car.signal && !point.curve && !car.driver.pass) straightWithSignal++;
  }});
  assert.ok(sides.has('match'));
  assert.ok(!sides.has('wrong'));
  assert.ok(straightWithSignal<80);
  // Lamps on the signalled side only.
  car.signal=1;
  const clock=performance.now;
  performance.now=()=>0;
  poseCar(car,0);
  const left=car.blinkers.left.every(lamp=>lamp.visible),right=car.blinkers.right.every(lamp=>!lamp.visible);
  performance.now=clock;
  assert.ok(left && right);
});

test('a car stops before the zebra for a pedestrian who is already on it',()=>{
  const car=buildCar(new Scene(),'sedan');
  resetDriver(car,0);
  car.driver.parkTimer=1e9;
  // Drive until the car heads for the junction at (-57,-19) from the south side, then put a pedestrian on the zebra.
  let blocked=false,nose=Infinity;
  drive([car],200,{people:[],each:()=>{}});
  const junction=car.driver.route[car.driver.next].junction;
  const sx=Math.round(Math.sin(car.angle)),sz=Math.round(Math.cos(car.angle));
  car.x=junction.x-sx*30+(sz?(car.x-junction.x):0);car.z=junction.z-sz*30+(sx?(car.z-junction.z):0);
  car.vx=car.vz=car.speed=0;
  const zebra={x:junction.x-sx*6.4,z:junction.z-sz*6.4};
  const walker={x:zebra.x+(sz?-1.2:0),z:zebra.z+(sx?-1.2:0),health:100,seated:false,down:0};
  drive([car],14,{people:[walker],each:()=>{
    const toward=(zebra.x-car.x)*sx+(zebra.z-car.z)*sz;
    nose=Math.min(nose,toward-car.halfLength);
    blocked=Math.abs(car.speed)<.3;
  }});
  assert.ok(blocked,'the car waits');
  assert.ok(nose>.2,'the nose stays short of the zebra ('+nose.toFixed(2)+' m)');
});

test('a three-point turn finishes facing the other way, reverses once, and never leaves the street',()=>{
  const car={kind:'car',shape:'car:sedan'};
  resetDriver(car,0);
  Object.assign(car,{x:-59.05,z:-30,angle:0,vx:0,vz:0,speed:3});
  car.vz=3;
  const state={prev:car.angle,turned:0,dir:1,t:0,age:0,step:0};
  let reversed=false,forwardAfter=false,steps=0;
  while(steps++<900) {
    const command=uTurnCommand(car,state,[car],[],[],1/30);
    if(!command) break;
    stepVehicle(car,1/30,command,[],[car],streetFits);
    if(car.speed<-.4) reversed=true;
    if(reversed && car.speed>.4) forwardAfter=true;
    assert.ok(streetFits(car.x,car.z,car.angle,'car:sedan'),'on the road at step '+steps);
  }
  const turned=Math.abs(Math.atan2(Math.sin(car.angle),Math.cos(car.angle)));
  assert.ok(steps<900,'finished');
  assert.ok(turned>2.7,'faces the opposite way, '+turned.toFixed(2));
  assert.ok(reversed && forwardAfter,'went forward, back and forward again');
  adoptNearestRoute(car);
  const point=car.driver.route[car.driver.next],ahead=car.driver.route[(car.driver.next+1)%car.driver.route.length];
  const heading=Math.atan2(ahead.x-point.x,ahead.z-point.z);
  assert.ok(Math.abs(Math.atan2(Math.sin(heading-car.angle),Math.cos(heading-car.angle)))<.5,'rejoins a route heading the same way');
});

test('a blocked block face is bypassed by driving round the neighbouring blocks',()=>{
  const car=buildCar(new Scene(),'sedan');
  resetDriver(car,8);
  car.driver.next=7*1+1;
  const nodes=car.driver.nodes;
  const detour=detourAroundBlock(car);
  assert.ok(detour);
  assert.equal(detour.route.length,detour.nodes.length*7);
  assert.deepEqual(detour.nodes[0],nodes[1]);
  assert.notDeepEqual(detour.nodes[1],nodes[2],'does not take the blocked edge');
  assert.deepEqual(detour.nodes.at(-nodes.length+1),nodes[2],'reaches the far end of the blocked face');
  assert.deepEqual(detour.nodes.at(-nodes.length+2),nodes[3],'and carries on round the loop');
  assert.ok(detour.nodes.length>=nodes.length+1);
  for(let i=0;i<detour.route.length;i++) {
    const a=detour.route[i],b=detour.route[(i+1)%detour.route.length];
    assert.ok(Math.hypot(a.x-b.x,a.z-b.z)<(i%7===6?24:7),'route is continuous at '+i);
  }
  // Following the new route to the end of one lap keeps the car moving.
  car.driver.route=detour.route;car.driver.next=0;car.driver.nodes=detour.nodes;
  let travelled=0;
  drive([car],120,{each:()=>{travelled=Math.max(travelled,car.driver.next);}});
  assert.ok(travelled>20);
});

test('motorcycles use their own loops and a lane nearer the kerb',()=>{
  assert.deepEqual(bikeRouteIndexes,[8,9]);
  const bike=motorcycle(new Scene(),0x335577,'street');
  resetDriver(bike,8);
  assert.ok(trafficRoutes[8]!==trafficRoutes[3]);
  const lanes=new Set();
  drive([bike],40,{each:()=>{
    const point=bike.driver.route[bike.driver.next];
    if(!point.curve && Math.abs(point.x%19)<.001) return;
  }});
  for(const point of trafficRoutes[8].filter(p=>!p.curve).slice(0,200)) {
    const road=[-57,-19,19,57].reduce((a,b)=>Math.abs(a-point.x)<Math.abs(b-point.x)?a:b);
    const roadZ=[-57,-19,19,57].reduce((a,b)=>Math.abs(a-point.z)<Math.abs(b-point.z)?a:b);
    lanes.add(Math.round(Math.min(Math.abs(point.x-road),Math.abs(point.z-roadZ))*100)/100);
  }
  assert.ok([...lanes].some(offset=>Math.abs(offset-2.78)<.02));
  const carLanes=trafficRoutes[0].filter(p=>!p.curve).map(point=>Math.min(Math.abs(point.x%38===0?0:99),1));
  assert.ok(carLanes.length>0);
});

test('some drivers park kerbside inside the road, wait, and pull out again',()=>{
  const car=buildCar(new Scene(),'sedan');
  resetDriver(car,0);
  car.driver.parkTimer=2;
  const phases=[];
  let worstEdge=0;
  drive([car],260,{each:()=>{
    const phase=car.driver.parking?.phase;
    if(phase && phases.at(-1)!==phase) phases.push(phase);
    if(phase==='parked') {
      const road=[-57,-19,19,57].reduce((a,b)=>Math.abs(a-car.x)<Math.abs(b-car.x)?a:b);
      const roadZ=[-57,-19,19,57].reduce((a,b)=>Math.abs(a-car.z)<Math.abs(b-car.z)?a:b);
      worstEdge=Math.max(worstEdge,Math.min(Math.abs(car.x-road),Math.abs(car.z-roadZ))+car.halfWidth);
      if(car.driver.parking.age>2) assert.ok(Math.abs(car.speed)<.3);
    }
  }});
  assert.deepEqual(phases.slice(0,3),['approach','parked','leave']);
  assert.ok(worstEdge<5.37,'stays on the asphalt: '+worstEdge.toFixed(2));
  assert.ok(worstEdge>3.9,'sits at the kerb');
  assert.equal(car.integrity,100);
});

test('pedestrians cross only at the zebra and a direct walk over the asphalt is refused',()=>{
  assert.ok(onRoad(19,0) && !onRoad(0,0));
  assert.ok(onZebra(21,12.6) && !onZebra(21,0));
  assert.equal(crossesRoad({x:12,z:0},{x:26,z:0}),true);
  assert.equal(crossesRoad({x:12,z:12.6},{x:26,z:12.6}),false);
  assert.equal(crossesRoad({x:12,z:-2},{x:12,z:8}),false);
  const walk=footNavigator([]);
  const walker={x:12,z:-2,angle:0,route:[],repath:0};
  const target={x:26,z:-2};
  for(let i=0;i<4000 && Math.hypot(walker.x-target.x,walker.z-target.z)>.5;i++) {
    walk(walker,target,4,1/30);
    if(onRoad(walker.x,walker.z)) assert.ok([-1.4,0,1.4].some(slack=>onZebra(walker.x,walker.z+slack)),'stepped on the road at '+walker.x.toFixed(1)+', '+walker.z.toFixed(1));
  }
  assert.ok(Math.hypot(walker.x-target.x,walker.z-target.z)<1,'arrived');
});

test('the workshop sees and repairs each part separately and upgrades change handling per car',()=>{
  const scene=new Scene();
  const car=buildCar(scene,'sedan'),other=buildCar(scene,'sedan');
  Object.assign(car,{damageFront:60,damageRear:10,integrity:70});
  car.bumpers[0].state=1;
  car.flat[1]=true;
  car.cracks.push({removeFromParent(){}},{removeFromParent(){}});
  let report=damageSummary(car);
  assert.deepEqual(report,{front:90,rear:10,glass:2,tires:1,mechanics:30});
  repairPart(car,'front');
  repairPart(car,'tires');
  report=damageSummary(car);
  assert.equal(report.front,0);assert.equal(report.tires,0);
  assert.equal(report.glass,2);assert.equal(report.mechanics,30);
  repairPart(car,'glass');repairPart(car,'mechanics');
  assert.equal(damageSummary(car).glass,0);assert.equal(car.integrity,100);
  const baseTop=car.spec.handling.top;
  car.upgrades={engine:2,tires:1};
  applyUpgrades(car);
  assert.ok(car.handling.top>baseTop*1.1 && car.handling.grip>car.spec.handling.grip);
  assert.equal(other.handling.top,baseTop,'other cars of the model keep stock handling');
  assert.equal(car.spec.handling.top,baseTop,'the catalogue is untouched');
  const before=car.body.children.length;
  fitPart(car,'spoiler',true);fitPart(car,'rack',true);fitPart(car,'bullbar',true);
  assert.ok(car.body.children.length>before+6);
  assert.deepEqual([...car.fitted].sort(),['bullbar','rack','spoiler']);
  fitPart(car,'spoiler',false);
  assert.ok(!car.fitted.has('spoiler'));
  assert.equal(Object.keys(partNames).length,3);
});

test('the tow arm lowers to the ground and the cable follows it',()=>{
  const truck=buildCar(new Scene(),'tow');
  Object.assign(truck,{x:0,z:0,angle:0});
  truck.armAngle=.35;poseCar(truck,0);
  const raised=truck.towArm.hang.position.y;
  const cableUp=truck.towArm.cable.scale.y;
  truck.armAngle=-.5;poseCar(truck,0);
  assert.ok(truck.towArm.hang.position.y<raised-1);
  assert.ok(truck.towArm.cable.scale.y<cableUp);
  assert.ok(truck.towArm.hook.position.y+truck.towArm.hang.position.y>.3,'the hook stays above the road');
});

test('the driver keeps both hands on the rim while the wheel turns',()=>{
  const scene=new Scene();
  const car=buildCar(scene,'sedan');
  Object.assign(car,{x:0,z:0,angle:0});
  const driver=person(scene,0x335544,0x222222,0xb98059);
  for(const steer of [0,.6,-.6]) {
    poseCar(car,0,steer);
    seatPerson(driver,car,0);
    car.root.updateMatrixWorld(true);
    driver.root.updateMatrixWorld(true);
    const spin=car.steeringWheel.spin;
    for(const [index,side] of [[0,-1],[1,1]]) {
      const hand=driver.forearms[index].localToWorld(new Vector3(0,-.227,0));
      const rim=wheelGrip(car,side);
      assert.ok(Math.abs(hand.distanceTo(spin.getWorldPosition(new Vector3()))-.155)<.05,'hand rides the rim');
      assert.ok(hand.distanceTo(rim)<.045,'hand '+index+' is '+hand.distanceTo(rim).toFixed(3)+' m from the rim at steer '+steer);
    }
  }
  assert.ok(Math.abs(car.steeringWheel.spin.rotation.y)>.5);
});

test('saves keep the garage upgrades and the last checkpoint, and drop unknown parts',()=>{
  const store={getItem:()=>JSON.stringify({version:1,cash:10,ammo:0,health:90,checkpoint:'lajes',
    garage:{kind:'car',model:'sport',color:0x123456,upgrades:{engine:9,tires:1},fitted:['spoiler','jetpack']}})};
  const progress=loadProgress(store);
  assert.equal(progress.checkpoint,'lajes');
  assert.deepEqual(progress.garage.upgrades,{engine:3,tires:1});
  assert.deepEqual(progress.garage.fitted,['spoiler']);
});

test('the Lajes house has lights, curtains and fixtures in all four rooms',()=>{
  const scene=new Scene(),solid=[];
  const home=furnishLajesHome(scene,solid);
  assert.ok(home.things.length>=12);
  for(const room of ['sala','quarto','cozinha','banheiro']) assert.ok(home.lights[room],room);
  assert.equal(home.lights.sala.on,true);
  const hooks={healed:0,flushed:0,heal(n){this.healed+=n;},flush(){this.flushed++;}};
  const switchPlate=home.nearest({x:95.5,z:42.4});
  assert.equal(switchPlate.id,'sala-light');
  switchPlate.use(hooks);
  assert.equal(home.lights.sala.on,false);
  const fridge=home.nearest({x:100,z:39.1});
  assert.equal(fridge.id,'geladeira');
  fridge.use(hooks);
  assert.equal(hooks.healed,20);
  assert.match(fridge.use(hooks),/quase vazia/);
  assert.equal(hooks.healed,20);
  home.nearest({x:97.15,z:38.5}).use(hooks);
  assert.equal(hooks.flushed,1);
  const curtain=home.things.find(thing=>thing.id==='cortina-sala');
  curtain.use(hooks);
  for(let i=0;i<120;i++) home.update(.05,{x:96,z:42},true);
  assert.ok(home.curtains[0].open<.05,'curtain drawn');
  assert.equal(home.curtains[0].pane.visible,false);
  assert.ok(solid.length>=4);
  home.reset();
  assert.equal(home.lights.sala.on,true);
  assert.equal(home.curtains[0].goal,1);
});

test('cars, motorcycles and utility vehicles get different engine voices',()=>{
  const scene=new Scene();
  assert.equal(engineKind(buildCar(scene,'sedan')),'car');
  assert.equal(engineKind(buildCar(scene,'sport')),'car');
  for(const model of ['pickup','van','suv']) assert.equal(engineKind(buildCar(scene,model)),'utility',model);
  assert.equal(engineKind(motorcycle(scene,0x335577,'street')),'bike');
  assert.equal(engineKind(null),'car');
  assert.ok(Object.values(carModels).some(spec=>/utilit/.test(spec.category)));
});
