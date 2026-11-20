import test from 'node:test';
import assert from 'node:assert/strict';
import { findPunch, traceShot } from '../src/combat.js';
import { distance } from '../src/rules.js';
import { driveTraffic, resetDriver, safeSpeed, trafficRoutes } from '../src/traffic.js';
import { resetVehicle, stepVehicle, vehicleClear } from '../src/vehicle.js';

const coast={throttle:0,steer:0,brake:false};
const accelerate={...coast,throttle:1};
const wall={x:0,z:10,w:12,d:1,h:5};
const createCar=(x,z,angle=0)=>{const car={};resetVehicle(car,{x,z,angle});return car;};

test('shots hit the nearest target, respect walls and cannot hit behind the shooter',()=>{
  const close={bounds:[-.3,.1,4,.3,1.9,4.6]};
  const far={bounds:[-.3,.1,18,.3,1.9,18.6]};
  const behind={bounds:[-.3,.1,-8,.3,1.9,-7.6]};
  assert.equal(traceShot([0,1.3,0],[0,0,1],[wall],[far,close,behind]).hit,close);
  assert.deepEqual(traceShot([0,1.3,0],[0,0,1],[wall],[far,behind]),{distance:9.5,hit:null});
});

test('punch selects the closest standing target in front, within reach and without an obstruction',()=>{
  const player={x:0,z:0,angle:0};
  const standing={x:.15,z:1.45,down:0};
  const behind={x:0,z:-.7,down:0};
  const down={x:.05,z:.5,down:5};
  assert.equal(findPunch(player,[behind,down,standing],0,[]),standing);
  assert.equal(findPunch(player,[standing],0,[{x:0,z:.7,w:1,d:.35,h:2}]),null);
});

test('wall impact is swept, loses speed and damages the vehicle',()=>{
  const car=createCar(0,5);
  car.vz=25;
  for(let i=0;i<10;i++) stepVehicle(car,.05,coast,[wall],[car]);
  assert.ok(car.z<7.4);
  assert.ok(car.integrity<90);
  assert.ok(vehicleClear(car.x,car.z,car.angle,[wall]));
});

test('a rear impact pushes and damages the other vehicle',()=>{
  const rear=createCar(0,0);
  const front=createCar(0,6);
  rear.vz=21;
  for(let i=0;i<12;i++){
    stepVehicle(rear,1/60,accelerate,[],[rear,front]);
    stepVehicle(front,1/60,coast,[],[rear,front]);
  }
  assert.ok(front.z>6.2);
  assert.ok(rear.integrity<100 && front.integrity<100);
  assert.ok(rear.speed<20);
});

test('handbrake slows harder than coasting',()=>{
  const rolling=createCar(0,0), braking=createCar(0,0);
  rolling.vz=braking.vz=15;
  for(let i=0;i<22;i++){
    stepVehicle(rolling,1/60,coast,[],[rolling]);
    stepVehicle(braking,1/60,{...coast,brake:true},[],[braking]);
  }
  assert.ok(braking.speed<rolling.speed/2);
});

test('drivers brake for an obstruction ahead and ignore the opposite lane',()=>{
  const driver=createCar(0,0);
  const blocking=createCar(0,6);
  const otherLane=createCar(4.1,6,Math.PI);
  assert.ok(safeSpeed(driver,[driver,blocking],[],10)<2);
  assert.equal(safeSpeed(driver,[driver,otherLane],[],10),10);
});

test('the eight traffic routes circulate and turn away from building footprints',()=>{
  const fleet=trafficRoutes.map((route,i)=>{const car={};resetDriver(car,i);return car;});
  const buildings=[-38,0,38].flatMap(x=>[-38,0,38].map(z=>({x,z,w:25,d:25})));
  const driven=fleet.map(()=>0);
  const last=fleet.map(({x,z})=>({x,z}));
  const zones=new Map();
  for(let i=0;i<3600;i++){
    driveTraffic(fleet,{player:null,vehicles:fleet},[],buildings,1/60,zones);
    fleet.forEach((car,i)=>{
      driven[i]+=distance(car,last[i]);
      last[i]={x:car.x,z:car.z};
    });
  }
  assert.ok(driven.every(length=>length>100),JSON.stringify(driven.map(Math.round)));
  assert.ok(fleet.every(car=>car.integrity>40));
});
