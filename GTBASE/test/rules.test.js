import test from 'node:test';
import assert from 'node:assert/strict';
import { clear, move, turn, axis } from '../src/rules.js';

test('collision respects curbside buildings, corner clearance, and world edge',()=>{
  const solids=[{x:0,z:0,w:4,d:4}];
  assert.equal(clear(2.2,0,.4,solids),false);
  assert.equal(clear(2.3,2.3,.4,solids),true);
  assert.equal(clear(64.91,49,.2,solids),false);
  assert.equal(clear(70,43,.3,solids),true);
  assert.equal(clear(104,0,.3,solids),true);
  assert.equal(clear(106,0,.3,solids),false);
  const entity={x:2.6,z:0};
  assert.equal(move(entity,2.3,1,.4,solids),true);
  assert.deepEqual(entity,{x:2.6,z:1});
});

test('Xbox axis ignores drift and yaw takes the short route',()=>{
  assert.equal(axis(.12),0);
  assert.equal(axis(1),1);
  assert.equal(axis(-1),-1);
  assert.ok(Math.abs(turn(Math.PI-.08,-Math.PI+.05,.07)-(Math.PI-.01))<1e-10);
});

test('pedestrians route around a wall in Vila das Lajes',async()=>{
  const {footNavigator}=await import('../src/navigation.js');
  const solids=[{x:74,z:35,w:4,d:5}];
  const walk=footNavigator(solids);
  const actor={x:71,z:35,angle:0,repath:0};
  const goal={x:77,z:35};
  walk(actor,goal,3,1/60);
  assert.ok(actor.route.length>1);
  assert.ok(actor.route.some(point=>Math.abs(point.z-35)>2.5));
});
