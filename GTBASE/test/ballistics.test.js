import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { aimShot, canSee, traceImpact } from '../src/combat.js';
import { createShotEffects } from '../src/shot-effects.js';
import { FIST_DURATION, FIST_CONTACT_DELAY, poseFists } from '../src/fists.js';
import { person, animatePerson } from '../src/models.js';

const close=(actual,expected,tolerance=.001)=>assert.ok(Math.abs(actual-expected)<tolerance,`${actual} ≉ ${expected}`);

test('impact exposes the actual contact face and excludes walls on another floor',()=>{
  const upper={x:0,z:12,w:4,d:1,y0:3.4,h:7};
  const wall={x:0,z:14,w:4,d:1,h:3.4};
  const first=traceImpact([0,1.4,0],[0,0,1],[upper,wall],[]);
  assert.equal(first.solid,wall);
  assert.equal(first.surface,'solid');
  assert.deepEqual(first.point,[0,1.4,13.5]);
  assert.deepEqual(first.normal,[0,0,-1]);
  const second=traceImpact([0,4.6,0],[0,0,1],[upper,wall],[]);
  assert.equal(second.solid,upper);
  assert.deepEqual(second.point,[0,4.6,11.5]);
});

test('sidewalk impacts support surface height and leave targets on the correct side of solid geometry',()=>{
  const sidewalk=()=>.16;
  const result=traceImpact([0,1.7,0],[0,-1,0],[],[],5,{ground:sidewalk});
  assert.equal(result.surface,'ground');
  assert.deepEqual(result.normal,[0,1,0]);
  close(result.point[1],.16);
  const ignored={bounds:[-.4,0,3,.4,1.7,4]};
  const blocked=traceImpact([0,1.13,0],[0,0,1],[{x:0,z:2,w:3,d:.4,h:2}],[ignored]);
  assert.equal(blocked.hit,null);
  close(blocked.point[2],1.8);
});

test('rotated target boxes avoid large false hit corners and return a rotated normal',()=>{
  const vehicle={oriented:{center:[0,.8,8],half:[1,.6,2],angle:Math.PI/4}};
  const hit=traceImpact([0,1,0],[0,0,1],[],[vehicle]);
  assert.equal(hit.hit,vehicle);
  close(hit.normal[0],Math.sqrt(.5));
  close(hit.normal[2],-Math.sqrt(.5));
  assert.equal(traceImpact([1.99,1,0],[0,0,1],[],[vehicle],7).hit,null);
});

test('third-person crosshair point and muzzle ray agree, including muzzle-only cover',()=>{
  const target={bounds:[-.33,1,13,.33,1.8,13.5]};
  const eye=[0,1.5,-3], look=[0,0,1], muzzle=[.75,1.4,0];
  const clear=aimShot(eye,look,muzzle,[],[target]);
  assert.equal(clear.sight.hit,target);
  assert.equal(clear.impact.hit,target);
  close(clear.impact.point[0],0);
  const corner={x:.65,z:1.4,w:.60,d:.4,h:2.4};
  const covered=aimShot(eye,look,muzzle,[corner],[target]);
  assert.equal(covered.sight.hit,target);
  assert.equal(covered.impact.solid,corner);
});

test('witness detection requires range, facing and line of sight on the same level',()=>{
  const observer={x:0,z:0,angle:0,ground:3.4}, target={x:0,z:10,ground:3.4};
  assert.ok(canSee(observer,target,[]));
  assert.equal(canSee({...observer,angle:Math.PI},target,[]),false);
  assert.equal(canSee(observer,target,[],{range:9}),false);
  const lowerWall={x:0,z:5,w:2,d:.3,h:3.3};
  assert.ok(canSee(observer,target,[lowerWall]));
  assert.equal(canSee(observer,target,[{...lowerWall,y0:3.4,h:6.6}]),false);
});

test('rendered tracers travel toward the tested contact and bullet holes expire',()=>{
  const scene=new T.Scene();
  const effects=createShotEffects(scene);
  const origin=[0,1.4,0], impact=traceImpact(origin,[0,0,1],[{x:0,z:12,w:5,d:.4,h:4}],[]);
  effects.emit(origin,impact);
  effects.update(.02);
  const [holes,tracer]=scene.children;
  const transform=new T.Matrix4();
  const point=new T.Vector3();
  tracer.getMatrixAt(0,transform);
  point.setFromMatrixPosition(transform);
  assert.ok(point.z>0 && point.z<impact.point[2]);
  const first=point.z;
  effects.update(.02);
  tracer.getMatrixAt(0,transform);
  assert.ok(point.setFromMatrixPosition(transform).z>first);
  holes.getMatrixAt(0,transform);
  assert.ok(point.setFromMatrixPosition(transform).z<impact.point[2]);
  effects.update(20);
  holes.getMatrixAt(0,transform);
  assert.deepEqual(point.setFromMatrixPosition(transform).toArray(),[0,0,0]);
});

test('attached marks follow the impacted object during a turn',()=>{
  const scene=new T.Scene();
  const vehicle=new T.Group();
  scene.add(vehicle);
  const effects=createShotEffects(scene);
  effects.emit([0,1.4,0],{point:[0,1.4,3],normal:[0,0,-1],surface:'target'},
    {mark:true,attach:vehicle});
  effects.update(.02);
  const holes=scene.children[1];
  const transform=new T.Matrix4();
  const point=new T.Vector3();
  holes.getMatrixAt(0,transform);
  close(point.setFromMatrixPosition(transform).z,2.986);
  vehicle.position.set(10,0,12);
  vehicle.rotation.y=Math.PI*.5;
  effects.update(.02);
  holes.getMatrixAt(0,transform);
  close(point.setFromMatrixPosition(transform).x,12.986);
  close(point.z,12);
});

test('fist aim keeps the guard and a punch retracts, reaches contact then recovers',()=>{
  const fighter=person(new T.Scene(),0x226644,0x112211,0xcc7755);
  function reach(elapsed) {
    animatePerson(fighter,0,0,false,false);
    poseFists(fighter,{aim:true,punch:Math.max(0,FIST_DURATION-elapsed)});
    return fighter.forearms[0].localToWorld(new T.Vector3(0,-.227,0)).z;
  }
  const guard=reach(0);
  assert.ok(guard>.15);
  assert.ok(reach(.06)<guard);
  assert.ok(reach(FIST_CONTACT_DELAY)>guard+.1);
  close(reach(FIST_DURATION),guard);
});
