import * as T from 'three';
import { roads } from './rules.js';

/** Each crossing runs green 7 s, yellow 2 s and an all-red second for one axis, then the other. */
export const SIGNAL_CYCLE=20;
export function signalState(time,offset,axis) {
  const local=((time+offset)%SIGNAL_CYCLE+SIGNAL_CYCLE)%SIGNAL_CYCLE;
  const start=axis==='z'?0:10;
  const t=local-start;
  if(t>=0 && t<7) return 'green';
  if(t>=7 && t<9) return 'yellow';
  return 'red';
}

const lampColors={
  red:[new T.Color(1,.12,.08),new T.Color(.2,.05,.05)],
  yellow:[new T.Color(1,.72,.1),new T.Color(.2,.16,.05)],
  green:[new T.Color(.2,1,.45),new T.Color(.05,.17,.08)]
};

/**
 * Builds the traffic lights at every crossing. Poles stand on the near-right corner of each approach
 * (right-hand traffic) and face the arriving drivers. Pole colliders are pushed into solid.
 */
export function createSignals(scene,solid) {
  const junctions=[];
  for(const x of roads) for(const z of roads) junctions.push({id:x+','+z,x,z,offset:((x*7+z*3)%SIGNAL_CYCLE+SIGNAL_CYCLE)%SIGNAL_CYCLE});
  /** @type {[number,number,number,'x'|'z'][]} corner dx, corner dz, facing angle, axis */
  const approaches=[[-6.1,-6.1,Math.PI,'z'],[6.1,6.1,0,'z'],[-6.1,6.1,-Math.PI/2,'x'],[6.1,-6.1,Math.PI/2,'x']];
  const heads=junctions.length*approaches.length;
  const poleMesh=new T.InstancedMesh(new T.CylinderGeometry(.07,.08,3.3,8),new T.MeshStandardMaterial({color:0x2f3433,roughness:.6}),heads);
  const housingMesh=new T.InstancedMesh(new T.BoxGeometry(.34,.95,.26),new T.MeshStandardMaterial({color:0x1d2120,roughness:.7}),heads);
  const lampMesh=new T.InstancedMesh(new T.CylinderGeometry(.105,.105,.06,12),new T.MeshBasicMaterial({color:0xffffff}),heads*3);
  const dummy=new T.Object3D();
  const lamps=[];
  let index=0;
  for(const junction of junctions) {
    for(const [dx,dz,facing,axis] of approaches) {
      const x=junction.x+dx, z=junction.z+dz;
      dummy.position.set(x,1.65+.16,z);dummy.rotation.set(0,facing,0);dummy.scale.set(1,1,1);dummy.updateMatrix();
      poleMesh.setMatrixAt(index,dummy.matrix);
      dummy.position.set(x,3.25+.16,z);dummy.updateMatrix();
      housingMesh.setMatrixAt(index,dummy.matrix);
      ['red','yellow','green'].forEach((color,k)=>{
        // Lamps sit on the face turned towards the approaching traffic.
        dummy.position.set(x+Math.sin(facing)*.14,3.25+.16+.29-k*.29,z+Math.cos(facing)*.14);
        dummy.rotation.set(Math.PI/2,facing,0,'YXZ');
        dummy.updateMatrix();
        lampMesh.setMatrixAt(index*3+k,dummy.matrix);
        lamps.push({junction,axis,color,state:''});
      });
      solid.push({x,z,w:.2,d:.2,h:3.5,signal:true});
      index++;
    }
  }
  poleMesh.castShadow=housingMesh.castShadow=true;
  scene.add(poleMesh,housingMesh,lampMesh);
  const byId=new Map(junctions.map(junction=>[junction.id,junction]));
  let clock=0;
  function update(dt) {
    clock+=dt;
    let changed=false;
    lamps.forEach((lamp,i)=>{
      const state=signalState(clock,lamp.junction.offset,lamp.axis);
      const lit=state===lamp.color;
      const key=lit?'on':'off';
      if(lamp.state===key) return;
      lamp.state=key;
      lampMesh.setColorAt(i,lampColors[lamp.color][lit?0:1]);
      changed=true;
    });
    if(changed && lampMesh.instanceColor) lampMesh.instanceColor.needsUpdate=true;
  }
  update(0);
  return {
    update,
    /** @param {string} id @param {'x'|'z'} axis */
    state(id,axis) {
      const junction=byId.get(id);
      return junction?signalState(clock,junction.offset,axis):'green';
    },
    reset(){clock=0;update(0);}
  };
}
