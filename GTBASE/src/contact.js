import { clear, distance, blocks } from './rules.js';
import { vehicleContains } from './vehicle.js';

export function groundHeight(x,z) {
  let y=0;
  if(blocks.some(cx=>Math.abs(x-cx)<=13.55) && blocks.some(cz=>Math.abs(z-cz)<=13.55)) y=.16;
  if(Math.abs(x-38)<6.05 && Math.abs(z+38)<5.04) y=.228;
  if(Math.abs(x-2)<9.5 && Math.abs(z-38)<11) y=.191;
  if(x>-10.91 && x< -3.49 && Math.abs(z-38)<9.77) y=.234;
  return y;
}

export function actorClear(actor,x,z,solids,vehicles,crowd,radius=.34) {
  if(!clear(x,z,radius,solids)) return false;
  for(const car of vehicles) {
    if(distance(car,{x,z})>3.4 || !vehicleContains(car,x,z,radius)) continue;
    if(!vehicleContains(car,actor.x,actor.z,radius) || distance(car,{x,z})<=distance(car,actor)) return false;
  }
  for(const other of crowd) {
    if(other===actor || other.health<=0 || other.seated) continue;
    if(Math.abs((actor.floorY??0)-(other.floorY??0))>1.05) continue;
    const minimum=radius+.28;
    if(distance(other,{x,z})<minimum && distance(other,{x,z})<=distance(other,actor)) return false;
  }
  return true;
}

export function moveActor(actor,dx,dz,solids,vehicles,crowd,radius=.34) {
  const count=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.14));
  const startX=actor.x,startZ=actor.z;
  const sx=dx/count,sz=dz/count;
  for(let i=0;i<count;i++) {
    const x=actor.x+sx,z=actor.z+sz;
    if(actorClear(actor,x,z,solids,vehicles,crowd,radius)) {actor.x=x;actor.z=z;continue;}
    if(sx && actorClear(actor,x,actor.z,solids,vehicles,crowd,radius)) actor.x=x;
    if(sz && actorClear(actor,actor.x,z,solids,vehicles,crowd,radius)) actor.z=z;
  }
  return Math.hypot(actor.x-startX,actor.z-startZ);
}

export function sweptVehicleHits(vehicle,start,actor) {
  if(!start) return vehicleContains(vehicle,actor.x,actor.z,.28);
  const steps=Math.max(1,Math.ceil(distance(start,vehicle)/.26));
  for(let i=0;i<=steps;i++) {
    const t=i/steps;
    const x=start.x+(vehicle.x-start.x)*t,z=start.z+(vehicle.z-start.z)*t;
    const probe={x,z,angle:vehicle.angle,kind:vehicle.kind,shape:vehicle.shape};
    if(vehicleContains(probe,actor.x,actor.z,.28)) return true;
  }
  return false;
}

export function threatensPlayer(from,to,player) {
  const dx=to.x-from.x,dz=to.z-from.z;
  const length=dx*dx+dz*dz;
  if(length<.001) return false;
  const at=((player.x-from.x)*dx+(player.z-from.z)*dz)/length;
  return at>=0 && at<=1.05 && Math.hypot(player.x-from.x-dx*at,player.z-from.z-dz*at)<1.20;
}
