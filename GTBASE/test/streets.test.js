import test from 'node:test';
import assert from 'node:assert/strict';
import { impactDamage, shotDamage, wantedUnits } from '../src/injury.js';
import { bypass } from '../src/traffic.js';
import { vehicleClear, resetVehicle, stepVehicle } from '../src/vehicle.js';
import { loadProgress, saveProgress } from '../src/save.js';

const car=(x,z,kind='car')=>{const vehicle={kind};resetVehicle(vehicle,{x,z,angle:0});return vehicle;};
test('body region and impact velocity change damage without instant death at full health',()=>{
  assert.ok(shotDamage(1.7)>shotDamage(1.2) && shotDamage(1.2)>shotDamage(.45));
  assert.equal(impactDamage(0),0);
  assert.ok(impactDamage(4)<3);
  assert.ok(impactDamage(17)>40 && impactDamage(32)<100);
  assert.deepEqual([0,9,23,40].map(wantedUnits),[0,1,2,3]);
});

test('drivers find space around a parked vehicle and avoid an adjacent occupied lane',()=>{
  const driver=car(0,0), blocker=car(0,8), right=car(2.8,11), left=car(-2.8,11);
  assert.ok(bypass(driver,[driver,blocker],[],[]).x>0);
  assert.ok(bypass(driver,[driver,blocker,right],[],[]).x<0);
  assert.equal(bypass(driver,[driver,blocker,right,left],[],[]),null);
  const walker={x:0,z:8,down:0,health:100};
  assert.ok(bypass(driver,[driver],[walker],[]));
});

test('motorcycle has a narrower collider and distinct acceleration',()=>{
  const solids=[{x:-1.4,z:0,w:1,d:8},{x:1.4,z:0,w:1,d:8}];
  assert.equal(vehicleClear(0,0,0,solids,'car'),false);
  assert.equal(vehicleClear(0,0,0,solids,'bike'),true);
  const motorcycle=car(0,0,'bike'), coupe=car(0,0);
  for(let i=0;i<40;i++) {
    for(const vehicle of [motorcycle,coupe]) stepVehicle(vehicle,1/60,{throttle:1,steer:0,brake:false},[],[vehicle]);
  }
  assert.ok(motorcycle.speed>coupe.speed);
});

test('bed save round trips the inventory, life and recruited IDs',()=>{
  const map=new Map();
  const storage={setItem:(key,value)=>map.set(key,value),getItem:key=>map.get(key)};
  assert.equal(loadProgress(storage),null);
  assert.equal(saveProgress({cash:81,armed:true,equipped:false,ammo:17,health:73,recruits:[2,4]},storage),true);
  const data=loadProgress(storage);
  assert.deepEqual([data.cash,data.armed,data.equipped,data.ammo,data.health,data.recruits],[81,true,false,17,73,[2,4]]);
});

test('the gang save keeps more than three recruits and accepts saves from before string IDs',()=>{
  const map=new Map();
  const storage={setItem:(key,value)=>map.set(key,value),getItem:key=>map.get(key)};
  const recruits=[0,1,'street:3','resident:lot-4:0','resident:lot-5:1','driver:2',1];
  assert.equal(saveProgress({cash:50,armed:false,equipped:false,ammo:0,health:100,recruits},storage),true);
  assert.deepEqual(loadProgress(storage).recruits,recruits.slice(0,-1));
});
