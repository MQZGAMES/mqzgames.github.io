import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { motorcycle, poseCar } from '../src/cars.js';
import { driveTraffic, passingPath, recoverDriver } from '../src/traffic.js';
import { resetVehicle, stepVehicle } from '../src/vehicle.js';

function vehicle(kind,x,z) {
  const car={kind};
  resetVehicle(car,{x,z,angle:0});
  return car;
}

function drivePastObstruction(kind, gap) {
  const driven=vehicle(kind,16.95,0);
  const blocker=vehicle('car',16.95,gap);
  const adjacent=vehicle('car',20.4,gap);
  const goal={x:16.95,z:26,junction:{id:'next',x:16.95,z:43},curve:false};
  driven.driver={route:[goal],next:0,stuck:0,cruise:9};
  const fleet=[driven,blocker,adjacent], zones=new Map();
  let reverseDistance=0, maneuver=false;
  for(let frame=0;frame<850 && driven.z<gap+9;frame++) {
    driveTraffic([driven],{player:null,vehicles:fleet},[],[],1/60,zones);
    reverseDistance=Math.max(reverseDistance,-driven.z);
    maneuver||=Boolean(driven.driver.maneuver);
  }
  return {driven,blocker,adjacent,reverseDistance,maneuver};
}

test('a car trapped close to a parked car backs up and clears the obstruction without crashing',()=>{
  const {driven,blocker,adjacent,reverseDistance,maneuver}=drivePastObstruction('car',4.41);
  assert.equal(maneuver,true);
  assert.ok(reverseDistance>1);
  assert.ok(driven.z>blocker.z+7);
  assert.equal(driven.integrity,100);
  assert.equal(blocker.integrity,100);
  assert.equal(adjacent.integrity,100);
});

test('a motorcycle filters between two vehicles when there is no passing lane for a car',()=>{
  const blocker=vehicle('car',16.95,7), adjacent=vehicle('car',20.4,7);
  const motorcycle=vehicle('bike',16.95,0), car=vehicle('car',16.95,0);
  const plan=passingPath(motorcycle,[motorcycle,blocker,adjacent],[],[]);
  assert.ok(plan);
  assert.ok(Math.abs(plan.offset)<2);
  assert.equal(passingPath(car,[car,blocker,adjacent],[],[]),null);
  const result=drivePastObstruction('bike',7);
  assert.equal(result.maneuver,false);
  assert.ok(result.driven.z>result.blocker.z+7);
  assert.equal(result.driven.integrity,100);
});

test('a motorcycle can back out from a close vehicle and then filter past it',()=>{
  const {driven,blocker,reverseDistance,maneuver}=drivePastObstruction('bike',4);
  assert.equal(maneuver,true);
  assert.ok(reverseDistance>.8);
  assert.ok(driven.z>blocker.z+7);
  assert.equal(driven.integrity,100);
});

test('a blocked car does not reverse through the wall behind it',()=>{
  const car=vehicle('car',16.95,0), blocker=vehicle('car',16.95,4.32);
  const wall={x:16.95,z:-2.44,w:6,d:.30};
  const traffic=[car,blocker], driver={};
  const target={x:16.95,z:25};
  const stopped={throttle:0,steer:0,brake:true};
  for(let frame=0;frame<300;frame++) {
    const command=recoverDriver(car,driver,target,traffic,[],[wall],1/60,stopped);
    assert.equal(command.throttle,0);
    stepVehicle(car,1/60,command,[wall],traffic);
  }
  assert.equal(car.z,0);
  assert.equal(car.integrity,100);
});

test('the rear hub and axle of a motorcycle track the tilted chassis while only the front hub steers',()=>{
  const motorcycleModel=motorcycle(new T.Scene(),0x556c68);
  resetVehicle(motorcycleModel,{x:17,z:-8,angle:.25});
  motorcycleModel.speed=13;
  const rear=motorcycleModel.wheels.find(wheel=>wheel.position.z<0);
  const front=motorcycleModel.wheels.find(wheel=>wheel.position.z>0);
  const rearSeat=new T.Vector3(0,.33,-.73);
  for(const steer of [-.78,.78,0]) {
    poseCar(motorcycleModel,.035,steer);
    const hub=rear.getWorldPosition(new T.Vector3());
    const expectedHub=motorcycleModel.body.localToWorld(rearSeat.clone());
    assert.ok(hub.distanceTo(expectedHub)<1e-9);
    const axle=rear.localToWorld(new T.Vector3(1,0,0)).sub(hub).normalize();
    const expectedAxle=motorcycleModel.body.localToWorld(rearSeat.clone().add(new T.Vector3(1,0,0)))
      .sub(expectedHub).normalize();
    assert.ok(axle.distanceTo(expectedAxle)<1e-9);
    assert.equal(rear.rotation.y,0);
    assert.equal(front.rotation.y,steer*.22);
  }
});
