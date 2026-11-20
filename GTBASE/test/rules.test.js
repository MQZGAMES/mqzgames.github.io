import test from 'node:test';
import assert from 'node:assert/strict';
import { clear, move, nextMission, turn, axis } from '../src/rules.js';

test('collision respects curbside buildings, corner clearance, and world edge',()=>{
  const solids=[{x:0,z:0,w:4,d:4}];
  assert.equal(clear(2.2,0,.4,solids),false);
  assert.equal(clear(2.3,2.3,.4,solids),true);
  assert.equal(clear(64.91,14,.2,solids),false);
  const entity={x:2.6,z:0};
  assert.equal(move(entity,2.3,1,.4,solids),true);
  assert.deepEqual(entity,{x:2.6,z:1});
});

test('the mission advances in order and cannot repeat a completed stage',()=>{
  assert.equal(nextMission(0,'range'),0);
  assert.equal(nextMission(1,'take'),1);
  const result=['take','deliver','range','targets'].reduce(nextMission,0);
  assert.equal(result,4);
  assert.equal(nextMission(result,'targets'),4);
});

test('Xbox axis ignores drift and yaw takes the short route',()=>{
  assert.equal(axis(.12),0);
  assert.equal(axis(1),1);
  assert.equal(axis(-1),-1);
  assert.ok(Math.abs(turn(Math.PI-.08,-Math.PI+.05,.07)-(Math.PI-.01))<1e-10);
});
