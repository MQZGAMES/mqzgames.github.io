import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { person, ridePerson, animatePerson } from '../src/models.js';
import { motorcycle, coupe, poseCar } from '../src/cars.js';
import { groundHeight, moveActor, sweptVehicleHits, threatensPlayer } from '../src/contact.js';
import { vehicleContains, resetVehicle, stepVehicle } from '../src/vehicle.js';
import { passingPath, followPass } from '../src/traffic.js';

test('the motorcycle pose reaches the handlebars and walking untwists the legs and knees',()=>{
  const scene=new T.Scene(), rider=person(scene,0x223355,0x111111,0xb38751), bike=motorcycle(scene,0x336644);
  resetVehicle(bike,{x:17,z:5,angle:.42});
  poseCar(bike,.025,-.6);
  ridePerson(rider,bike);
  rider.forearms.forEach((arm,i)=>{
    const side=i===0?-1:1;
    const desired=bike.handlebar.localToWorld(new T.Vector3(side*.342,.44,-.09));
    const actual=arm.localToWorld(new T.Vector3(0,-.227,0));
    assert.ok(desired.distanceTo(actual)<.032);
  });
  assert.ok(rider.shins.some(part=>part.quaternion.angleTo(new T.Quaternion())>.2));
  animatePerson(rider,.02,2,false,false);
  assert.ok(rider.legs.every(part=>part.rotation.z===0 && part.rotation.y===0));
  assert.ok(rider.shins.every(part=>part.rotation.z===0 && part.rotation.y===0));
});

test('a car straddling a curb keeps each wheel above its own ground level',()=>{
  const car=coupe(new T.Scene(),0x857c57);
  resetVehicle(car,{x:13.67,z:0,angle:0});
  poseCar(car,0);
  const levels=car.wheels.map(wheel=>wheel.getWorldPosition(new T.Vector3()).y-car.wheelRadius);
  levels.forEach((level,index)=>assert.ok(Math.abs(level-groundHeight(car.x+car.wheels[index].position.x,car.wheels[index].position.z))<1e-8));
  assert.ok(Math.max(...levels)-Math.min(...levels)>.12);
});

test('walking stays outside wall slices, vehicle corners and other people',()=>{
  const car={x:0,z:7,angle:0};
  assert.equal(vehicleContains(car,.91,9.1),true);
  const actor={x:0,z:0,health:100};
  moveActor(actor,0,10,[{x:0,z:2,w:5,d:.13}],[],[]);
  assert.ok(actor.z<1.60);
  actor.z=0;
  moveActor(actor,0,10,[],[car],[{x:0,z:2,health:100}]);
  assert.ok(actor.z<1.40);
  actor.z=0;
  moveActor(actor,0,10,[],[car],[]);
  assert.ok(actor.z<4.57);
});

test('a vehicle sweeps through a crossing position and a nearby miss can threaten the player',()=>{
  const car={x:19,z:6,angle:0,kind:'car'};
  assert.equal(sweptVehicleHits(car,{x:19,z:-5},{x:19,z:0}),true);
  assert.equal(sweptVehicleHits(car,{x:19,z:-5},{x:21,z:0}),false);
  assert.equal(threatensPlayer({x:0,z:0},{x:.7,z:14},{x:0,z:12}),true);
  assert.equal(threatensPlayer({x:0,z:0},{x:.7,z:14},{x:2.9,z:10}),false);
});

test('a driver commits to passing a stationary car, clears it and returns to the lane',()=>{
  const vehicle={kind:'car'}, parked={kind:'car'};
  resetVehicle(vehicle,{x:16.95,z:-12,angle:0});
  resetVehicle(parked,{x:16.95,z:-2,angle:0});
  const fleet=[vehicle,parked];
  let plan=passingPath(vehicle,fleet,[],[]);
  assert.ok(plan);
  let farthest=0;
  for(let frame=0;frame<760&&plan;frame++){
    const command=followPass(vehicle,plan,fleet,1/60);
    if(!command) {plan=null;break;}
    stepVehicle(vehicle,1/60,command,[],fleet);
    farthest=Math.max(farthest,Math.abs(vehicle.x-16.95));
  }
  assert.equal(plan,null);
  assert.ok(farthest>2.7 && vehicle.z>parked.z+5.1);
  assert.ok(Math.abs(vehicle.x-16.95)<.65 && vehicle.integrity===100);
});
