import test from 'node:test';
import assert from 'node:assert/strict';
import { Scene } from 'three';
import { signalState, SIGNAL_CYCLE } from '../src/signals.js';
import { cleanLook, randomLook } from '../src/looks.js';
import { loadProgress } from '../src/save.js';
import { buildCar, bikeModels, carModels, motorcycle } from '../src/cars.js';
import { driveTraffic, resetDriver } from '../src/traffic.js';

test('crossing axes never show green at the same time and each gets yellow before red',()=>{
  for(let t=0;t<SIGNAL_CYCLE*2;t+=.25) {
    const ns=signalState(t,3,'z'), ew=signalState(t,3,'x');
    assert.ok(!(ns==='green' && ew==='green'),'both green at '+t);
    assert.ok(!(ns!=='red' && ew!=='red'),'conflicting at '+t);
  }
  assert.equal(signalState(6.9,0,'z'),'green');
  assert.equal(signalState(7.5,0,'z'),'yellow');
  assert.equal(signalState(9.5,0,'z'),'red');
});

test('traffic holds behind the stop line while its light is red',()=>{
  const car=buildCar(new Scene(),'sedan');
  resetDriver(car,0);
  const red={state:()=>'red'};
  const route=car.driver.route;
  let closest=Infinity;
  for(let i=0;i<60*12;i++) {
    driveTraffic([car],{player:null,vehicles:[car]},[],[],1/60,new Map(),red);
    const junction=route[car.driver.next].junction;
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    const toward=(junction.x-car.x)*sx+(junction.z-car.z)*sz;
    if(toward>0) closest=Math.min(closest,toward);
  }
  assert.ok(closest>7.6+car.halfLength-1,'stopped '+closest.toFixed(2)+' m from the crossing centre');
  assert.ok(Math.abs(car.speed)<.3);
});

test('pedestrian looks vary but are reproducible, and saves cannot inject bad looks or vehicles',()=>{
  const a=randomLook(1001), b=randomLook(1001), c=randomLook(1002);
  assert.deepEqual(a,b);
  assert.notDeepEqual(a,c);
  const variety=new Set(Array.from({length:40},(_,i)=>randomLook(i).hair+randomLook(i).shirt));
  assert.ok(variety.size>12);
  const clean=cleanLook({shirt:'<script>',shirtColor:-5,chain:'platinum',glasses:'yes',hair:'afro'});
  assert.equal(clean.shirt,'tee');
  assert.equal(clean.chain,'none');
  assert.equal(clean.glasses,false);
  assert.equal(clean.hair,'afro');
  const storage=new Map();
  const fake={getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)};
  fake.setItem('gtbase:progress:1',JSON.stringify({version:1,cash:500,ammo:10,health:80,stash:{weed:'9',coke:12,ecstasy:-4},
    garage:{kind:'car',model:'tank',color:5},look:{beard:'full'}}));
  const progress=loadProgress(fake);
  assert.deepEqual(progress.stash,{weed:0,coke:12,ecstasy:0});
  assert.equal(progress.garage,null);
  assert.equal(progress.look.beard,'full');
});

test('the catalogue has ten new cars across everyday, sport, luxury and utility, plus three new motorcycles',()=>{
  const categories=new Set(Object.values(carModels).map(model=>model.category));
  assert.ok(Object.keys(carModels).length>=11);
  for(const word of ['dia a dia','esportivo','luxo','utilitário']) assert.ok([...categories].some(c=>c.includes(word)),word);
  assert.ok(Object.keys(bikeModels).length>=4);
  const scene=new Scene();
  for(const variant of Object.keys(bikeModels)) assert.equal(motorcycle(scene,0xaa3322,variant).kind,'bike');
});
