import test from 'node:test';
import assert from 'node:assert/strict';
import { Scene, Vector3 } from 'three';
import { person } from '../src/models.js';
import { buildCar, carModels, coupe, seatPerson } from '../src/cars.js';
import { vehicleContains } from '../src/vehicle.js';

test('a saloon seats four with two in front, two behind and every head below the roof',()=>{
  const scene=new Scene();
  const car=coupe(scene,0xaa3322);
  Object.assign(car,{x:0,z:0,angle:0});
  car.root.position.set(0,0,0);
  const heads=[];
  for(let seat=0;seat<4;seat++) {
    const rider=person(scene,0x335544,0x222222,0xb98059);
    seatPerson(rider,car,seat);
    rider.root.updateMatrixWorld(true);
    const head=rider.body.localToWorld(new Vector3(0,1.77,0));
    heads.push(head);
    assert.ok(head.y<1.5 && head.y>.95,`seat ${seat} head at ${head.y}`);
  }
  assert.ok(heads[0].z>heads[2].z+.8 && heads[1].z>heads[3].z+.8,'rear row sits behind the front row');
  assert.ok(heads[0].x*heads[1].x<0 && heads[2].x*heads[3].x<0,'two seats per row');
});

test('every model collides with its own length and seats its occupants under the roof',()=>{
  const scene=new Scene();
  assert.ok(Object.keys(carModels).length>=11);
  for(const model of Object.keys(carModels)) {
    const car=buildCar(scene,model);
    Object.assign(car,{x:0,z:0,angle:0});
    assert.ok(vehicleContains(car,0,car.halfLength-.05),model);
    assert.ok(!vehicleContains(car,0,car.halfLength+.25),model);
    car.root.position.set(0,0,0);
    for(let seat=0;seat<car.spec.seats.length;seat++) {
      const rider=person(scene,0x335544,0x222222,0xb98059);
      seatPerson(rider,car,seat);
      rider.root.updateMatrixWorld(true);
      const head=rider.body.localToWorld(new Vector3(0,1.77,0));
      assert.ok(head.y<car.spec.roof+.02 || car.spec.open,`${model} seat ${seat} head ${head.y.toFixed(2)} roof ${car.spec.roof}`);
    }
  }
});
