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
test('every shop has a doorway and an interior floor, and each store has room for a clerk',()=>{
  assert.ok(world.buildings.filter(b=>b.clerk).length>=6);
  const doors=new Set(world.doors.map(door=>door.id));
  assert.equal(doors.size,world.doors.length);
  for(const building of world.buildings) {
    if(!building.clerk) {
      assert.deepEqual(building.doorIds,[]);
      assert.deepEqual(building.units,[]);
      continue;
    }
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


test('home and station reject entry through their walls',()=>{
  for(const [x,z] of [[38,-38],[-7,38]]) {
    assert.equal(clear(x,z,.29,world.walkSolids(x,z,0)),false);
    assert.equal(Boolean(world.interiorAt(x,z,0)),false);
  }
});
