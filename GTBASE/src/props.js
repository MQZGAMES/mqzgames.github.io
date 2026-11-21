import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { vehicleContains } from './vehicle.js';

const iron=0x393e3c;
const shapes={
  box:new T.BoxGeometry(),
  cylinder:new T.CylinderGeometry(1,1,1,10),
  pole:new T.CylinderGeometry(.8,1,1,8),
  foliage:new T.IcosahedronGeometry(1,1)
};

/**
 * Street furniture breaks according to the impact speed of a car or motorcycle.
 * speed: minimum speed in m/s; mass: share of momentum the vehicle loses; damage: integrity loss.
 */
export const propRules={
  bin:{speed:.8,mass:.03,damage:0,radius:.27},
  bollard:{speed:2.6,mass:.05,damage:1,radius:.1},
  bench:{speed:4.2,mass:.14,damage:3,radius:.4},
  lamp:{speed:8.3,mass:.28,damage:9,radius:.12},
  tree:{speed:11.5,mass:.55,damage:16,radius:.25},
  palm:{speed:10.5,mass:.45,damage:13,radius:.2}
};

function template(parts) {
  const geometries=parts.map(([shape,x,y,z,w,h,d,color,rx=0,ry=0])=>{
    const source=shapes[shape];
    const geometry=source.index?source.toNonIndexed():source.clone();
    const matrix=new T.Matrix4().compose(new T.Vector3(x,y,z),new T.Quaternion().setFromEuler(new T.Euler(rx,ry,0,'YXZ')),new T.Vector3(w,h,d));
    geometry.applyMatrix4(matrix);
    const tint=new T.Color(color);
    const colors=new Float32Array(geometry.attributes.position.count*3);
    for(let i=0;i<colors.length;i+=3) {colors[i]=tint.r;colors[i+1]=tint.g;colors[i+2]=tint.b;}
    geometry.setAttribute('color',new T.BufferAttribute(colors,3));
    for(const key of Object.keys(geometry.attributes)) if(!['position','normal','color'].includes(key)) geometry.deleteAttribute(key);
    return geometry;
  });
  return mergeGeometries(geometries);
}

const templates={
  lamp:()=>template([
    ['pole',0,2.25,0,.083,4.5,.083,iron],
    ['box',.35,4.36,0,.79,.075,.075,iron],
    ['box',.73,4.32,0,.32,.12,.19,0xe3b985],
    ['cylinder',0,.12,0,.13,.24,.13,0x2d302f]
  ]),
  bench:()=>template([
    ['box',0,.40,0,1.52,.075,.46,0x815846],
    ['box',0,.62,-.16,1.52,.23,.075,0x956954],
    ...[-.54,.54].map(leg=>['box',leg,.19,0,.06,.37,.37,iron])
  ]),
  bin:()=>template([
    ['pole',0,.36,0,.24,.69,.24,0x355049],
    ['pole',0,.72,0,.267,.10,.267,0x263d37]
  ]),
  bollard:()=>template([
    ['box',0,.22,0,.09,.39,.09,0x6c6757],
    ['box',0,.42,0,.13,.08,.13,0xd8a478]
  ]),
  tree:()=>template([
    ['pole',0,2.0,0,.22,4.0,.22,0x7a6050],
    ['foliage',.2,4.3,.1,1.55,1.25,1.45,0x466b50,0,.4],
    ['foliage',-.7,3.9,-.3,1.25,1.1,1.25,0x668551,0,1.3],
    ['foliage',.5,3.7,-.8,1.15,1.0,1.2,0x587a4f,0,2.1],
    ['foliage',-.2,4.9,-.2,1.05,.95,1.05,0x87a45c,0,3.0]
  ]),
  palm:()=>template([
    ['pole',0,2.3,0,.16,4.6,.22,0x7a6050],
    ...Array.from({length:7},(_,i)=>{
      const a=i*Math.PI*2/7;
      return ['foliage',Math.sin(a)*.86,4.55,Math.cos(a)*.86,.42,.24,1.58,[0x345f4a,0x4a7553,0x6c8456][i%3],0,a];
    })
  ])
};

export function createProps(scene,solid,groundHeight) {
  /** @type {{kind:string,x:number,z:number,y:number,rotation:number,scale:number,solid:any,broken:boolean,clock:number,vx:number,vz:number,tilt:number,axisX:number,axisZ:number,spin:number,index:number,lift:number,liftSpeed:number,spinRate:number}[]} */
  const items=[];
  const meshes={};
  const material=new T.MeshStandardMaterial({vertexColors:true,roughness:.84});
  const matrix=new T.Matrix4(), position=new T.Vector3(), quaternion=new T.Quaternion(), scale=new T.Vector3();
  const yawQ=new T.Quaternion(), tiltQ=new T.Quaternion(), axis=new T.Vector3(), up=new T.Vector3(0,1,0);
  let dirtyShadow=false;

  function add(kind,x,z,rotation=0,size=1,collider) {
    const y=groundHeight(x,z);
    const box={x,z,w:collider?.w??propRules[kind].radius*2,d:collider?.d??propRules[kind].radius*2,y0:y,h:y+(collider?.h??1),prop:kind};
    solid.push(box);
    items.push({kind,x,z,y,rotation,scale:size,solid:box,broken:false,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0});
  }

  function write(item) {
    yawQ.setFromAxisAngle(up,item.rotation+item.spin);
    axis.set(item.axisX,0,item.axisZ);
    tiltQ.setFromAxisAngle(axis,item.tilt);
    quaternion.multiplyQuaternions(tiltQ,yawQ);
    const radius=propRules[item.kind].radius;
    position.set(item.x,item.y+Math.sin(item.tilt)*radius+item.lift,item.z);
    scale.setScalar(item.scale);
    matrix.compose(position,quaternion,scale);
    meshes[item.kind].setMatrixAt(item.index,matrix);
    meshes[item.kind].instanceMatrix.needsUpdate=true;
  }

  function finalize() {
    for(const kind of Object.keys(templates)) {
      const group=items.filter(item=>item.kind===kind);
      if(!group.length) continue;
      const mesh=new T.InstancedMesh(templates[kind](),material,group.length);
      mesh.castShadow=true;mesh.receiveShadow=true;
      meshes[kind]=mesh;
      group.forEach((item,index)=>{item.index=index;write(item);});
      mesh.computeBoundingSphere();
      scene.add(mesh);
    }
  }

  function strike(item,car,speed) {
    const rule=propRules[item.kind];
    item.broken=true;item.solid.off=true;item.clock=0;
    const carry=.55+Math.random()*.25;
    item.vx=car.vx*carry;item.vz=car.vz*carry;
    // The prop falls away from the vehicle: rotate around the horizontal axis perpendicular to travel.
    const length=Math.max(.01,Math.hypot(car.vx,car.vz));
    item.axisX=car.vz/length;item.axisZ=-car.vx/length;
    item.spinRate=(Math.random()-.5)*(item.kind==='bin'?7:2);
    item.lift=0;item.liftSpeed=item.kind==='bin'||item.kind==='bollard'?Math.min(3.2,speed*.22):0;
    const keep=1-rule.mass;
    car.vx*=keep;car.vz*=keep;
    if(rule.damage) car.integrity=Math.max(0,car.integrity-rule.damage*Math.min(1.6,speed/rule.speed));
    car.impact=Math.max(car.impact,rule.mass>.2?4.5:0);
    dirtyShadow=true;
    return {kind:item.kind,heavy:rule.mass>.2,x:item.x,z:item.z};
  }

  /** Checks vehicles against intact props, animates falling props and restores far ones. */
  function update(dt,vehicles,observer) {
    /** @type {{kind:string,heavy:boolean,x:number,z:number}[]} */
    const events=[];
    for(const car of vehicles) {
      const speed=Math.hypot(car.vx,car.vz);
      if(speed<.6) continue;
      const reach=speed*dt*2+.2;
      for(const item of items) {
        if(item.broken || Math.abs(item.x-car.x)>3.6 || Math.abs(item.z-car.z)>3.6) continue;
        const ahead={x:car.x+car.vx*dt,z:car.z+car.vz*dt,angle:car.angle,kind:car.kind};
        if(!vehicleContains(ahead,item.x,item.z,propRules[item.kind].radius+reach)) continue;
        if(speed>=propRules[item.kind].speed) events.push(strike(item,car,speed));
      }
    }
    for(const item of items) {
      if(!item.broken) continue;
      item.clock+=dt;
      if(item.clock<2.5) {
        const drag=Math.exp(-dt*(item.tilt>1.2?6:2.2));
        const nx=item.x+item.vx*dt,nz=item.z+item.vz*dt;
        item.x=nx;item.z=nz;item.vx*=drag;item.vz*=drag;
        item.spin+=(item.spinRate??0)*dt*drag;
        item.tilt=Math.min(Math.PI/2,item.tilt+dt*(1.1+item.tilt*3.2));
        if(item.liftSpeed) {item.lift=Math.max(0,item.lift+item.liftSpeed*dt);item.liftSpeed-=9.8*dt;if(item.lift===0&&item.liftSpeed<0)item.liftSpeed=0;}
        write(item);
      } else if(item.clock>50 && Math.hypot(observer.x-item.solid.x,observer.z-item.solid.z)>38 &&
        vehicles.every(car=>Math.hypot(car.x-item.solid.x,car.z-item.solid.z)>3)) restore(item);
    }
    const shadow=dirtyShadow;
    dirtyShadow=false;
    return {events,shadow};
  }

  function restore(item) {
    Object.assign(item,{broken:false,x:item.solid.x,z:item.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0});
    item.solid.off=false;
    write(item);
    dirtyShadow=true;
  }

  function reset() {
    for(const item of items) if(item.broken) restore(item);
  }

  return {add,finalize,update,reset,items};
}
