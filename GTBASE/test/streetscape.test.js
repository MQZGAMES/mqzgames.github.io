import test from 'node:test';
import assert from 'node:assert/strict';
import { Scene } from 'three';
import { addDistrictBuilding } from '../src/district-buildings.js';
import { createProps } from '../src/props.js';

function lot(kind,angle) {
  const boxes=[], solid=[], volume=[], support=[];
  const spec={id:'lot-test',kind,label:'TESTE',x:20,z:-10,w:14,d:9.4,angle,color:0xb0a080,upperColor:0xa09070,
    awning:0x775840,fabrics:0x708277,stories:3};
  addDistrictBuilding({
    box:(x,y,z,w,h,d)=>boxes.push({x,y,z,w,h,d}),solid,support,volume,
    door:(x,z)=>({id:'door-'+x.toFixed(2)+','+z.toFixed(2),x,z}),sign:()=>{},glazing:()=>{}
  },spec);
  return {spec,boxes};
}

test('facade details stay attached to their building, above ground and below the roofline',()=>{
  for(const kind of ['shop','house','apartments']) {
    for(const angle of [Math.PI/2,-Math.PI/2]) {
      const {spec,boxes}=lot(kind,angle);
      // The lot is rotated a quarter turn, so the depth axis runs along world x.
      const halfX=spec.d/2+1.45, halfZ=spec.w/2+.6;
      for(const box of boxes) {
        assert.ok(Math.abs(box.x-spec.x)<=halfX,`${kind} ${angle}: box x ${box.x}`);
        assert.ok(Math.abs(box.z-spec.z)<=halfZ,`${kind} ${angle}: box z ${box.z}`);
        assert.ok(box.y>=-.2 && box.y<=13,`${kind} ${angle}: box y ${box.y}`);
      }
    }
  }
});

function movingCar(x,z,vx) {
  return {x,z,angle:vx<0?-Math.PI/2:Math.PI/2,vx,vz:0,kind:'car',integrity:100,impact:0};
}

test('street furniture breaks by impact speed and slows the vehicle in proportion to its mass',()=>{
  const solid=[];
  const props=createProps(new Scene(),solid,()=>.16);
  props.add('bin',0,0,0,1,{w:.5,d:.5,h:.78});
  props.add('lamp',0,10,0,1,{w:.17,d:.17,h:4.5});
  props.finalize();
  const binCar=movingCar(2.4,0,-3);
  const binHit=props.update(1/60,[binCar],{x:100,z:100});
  assert.deepEqual(binHit.events.map(event=>event.kind),['bin']);
  assert.equal(solid[0].off,true);
  assert.ok(binCar.vx<-2.8,'a bin barely slows the car');

  const slow=movingCar(2.4,10,-5);
  assert.equal(props.update(1/60,[slow],{x:100,z:100}).events.length,0);
  assert.equal(solid[1].off,undefined,'a lamp post stops a slow car');

  const fast=movingCar(2.4,10,-13);
  const lampHit=props.update(1/60,[fast],{x:100,z:100});
  assert.deepEqual(lampHit.events.map(event=>event.kind),['lamp']);
  assert.ok(fast.integrity<100 && fast.vx>-11,'a lamp post dents and slows a fast car');

  props.reset();
  assert.equal(solid[0].off,false);
  assert.equal(solid[1].off,false);
});
