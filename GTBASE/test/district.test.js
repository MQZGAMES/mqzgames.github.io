import test from 'node:test';
import assert from 'node:assert/strict';
import { Scene } from 'three';
import { createWorld } from '../src/world.js';
import { clear } from '../src/rules.js';

const brush={
  fillStyle:'',strokeStyle:'',lineWidth:1,font:'',textAlign:'',textBaseline:'',
  fillRect(){},strokeRect(){},fillText(){}
};

function buildDistrict() {
  const old=globalThis.document;
  globalThis.document={createElement(){return {width:1,height:1,getContext(){return brush;}};}};
  try {
    return createWorld(new Scene());
  } finally {
    globalThis.document=old;
  }
}

const world=buildDistrict();
const ray=(a,b,t)=>a+(b-a)*t;

test('every district lot has a doorway and an interior floor, and each store has room for a clerk',()=>{
  assert.ok(world.buildings.length>=14);
  const doors=new Set(world.doors.map(door=>door.id));
  assert.equal(doors.size,world.doors.length);
  for(const building of world.buildings) {
    assert.ok(building.doorIds.length>=1,building.id);
    assert.ok(building.doorIds.every(id=>doors.has(id)),building.id);
    const inside=building.inside;
    const insideVolume=world.interiorAt(inside.x,inside.z,inside.y);
    assert.ok(insideVolume?.ceiling-inside.y>3.18,building.id);
    assert.ok(Math.abs(world.floorAt(inside.x,inside.z,inside.y)-inside.y)<.078,building.id);
    if(building.kind==='shop'||building.kind==='armory') {
      assert.ok(building.clerk,building.id);
      assert.equal(clear(building.clerk.x,building.clerk.z,.26,world.walkSolids(building.clerk.x,building.clerk.z,building.clerk.y)),true,building.id);
    }
  }
});

test('private doors protect houses, open for the actual owner and have breach association',()=>{
  const building=world.buildings.find(b=>b.kind==='house' && b.id!=='player-home');
  assert.ok(building);
  const entrance=world.doors.find(door=>door.id===building.doorIds[0]);
  assert.equal(entrance.private,true);
  world.resetDoors();
  if(entrance.normallyOpen) entrance.normallyOpen=false;
  world.resetDoors();
  const stranger={...building.outside,floorY:building.outside.y,health:100};
  world.updateDoors(.5,[stranger]);
  assert.equal(entrance.opened,false);
  assert.ok(world.closedDoorSolids().some(part=>part.doorId===entrance.id));
  const owned=building.units[0];
  const owner={...stranger,buildingId:building.id,unitId:owned.id};
  world.updateDoors(.5,[owner]);
  assert.equal(entrance.opened,true);
  world.resetDoors();
  assert.ok(world.breachDoor(entrance.id));
  assert.ok(!world.closedDoorSolids().some(part=>part.doorId===entrance.id));
  world.updateDoors(.5,[stranger]);
  assert.equal(entrance.opened,true);
  world.resetDoors();
});

test('stairs reach each raised apartment floor and every owner spawn is clear',()=>{
  let stairsExercised=0;
  for(const building of world.buildings.filter(item=>item.kind==='apartments')) {
    assert.ok(building.units.length>=2);
    for(const unit of building.units) {
      const {x,y,z}=unit.resident;
      assert.ok(clear(x,z,.26,world.walkSolids(x,z,y)),unit.id);
      const area=world.interiorAt(x,z,y);
      assert.ok(area?.ceiling-area?.floor>3.30,unit.id);
      if(!unit.stairs.length) continue;
      let height=unit.stairs[0].y;
      let previous=unit.stairs[0];
      for(const target of unit.stairs.slice(1)) {
        const count=Math.max(1,Math.ceil(Math.hypot(target.x-previous.x,target.z-previous.z)/.09));
        for(let index=1;index<=count;index++) {
          const t=index/count;
          const x=ray(previous.x,target.x,t),z=ray(previous.z,target.z,t);
          assert.ok(clear(x,z,.25,world.walkSolids(x,z,height)),unit.id+' at '+x+','+z+' y='+height);
          height=world.floorAt(x,z,height);
        }
        previous=target;
      }
      assert.ok(Math.abs(unit.floor-height)<.07,unit.id+' reached '+height);
      stairsExercised++;
    }
  }
  assert.ok(stairsExercised>=4);
});
