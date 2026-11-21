import { clamp, clear } from './rules.js';

const profiles={
  car:{width:.99,length:2.135,radius:.98,offsets:[-1.17,0,1.17],mass:1},
  bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}
};
const profile=kind=>profiles[kind]??profiles.car;

/** @typedef {{x:number,z:number,angle:number,vx:number,vz:number,speed:number,integrity:number,steer:number,impact:number,kind?:string}} VehicleBody */

export function resetVehicle(car, pose) {
  if(car.cabin) car.cabin.visible=true;
  Object.assign(car,pose,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0});
}

export function vehicleClear(x,z,angle,solids,kind='car') {
  const sx=Math.sin(angle), sz=Math.cos(angle);
  const {offsets,radius}=profile(kind);
  return offsets.every(offset=>clear(x+sx*offset,z+sz*offset,radius,solids));
}

export function vehicleContains(car,x,z,extra=0) {
  const sx=Math.sin(car.angle), sz=Math.cos(car.angle);
  const dx=x-car.x,dz=z-car.z;
  const {width,length}=profile(car.kind);
  const across=Math.abs(dx*sz-dz*sx)-width, along=Math.abs(dx*sx+dz*sz)-length;
  return across<=0 && along<=0 || Math.hypot(Math.max(0,across),Math.max(0,along))<extra;
}

export function vehicleExtent(kind,difference=0) {
  const {width,length}=profile(kind);
  const align=Math.abs(Math.cos(difference)),cross=Math.abs(Math.sin(difference));
  return {width:width*align+length*cross,length:length*align+width*cross};
}

export function vehicleFits(frame,solids,vehicles,exclude=frame) {
  return vehicleClear(frame.x,frame.z,frame.angle,solids,frame.kind) &&
    !contact(exclude,frame.x,frame.z,frame.angle,vehicles);
}

function contact(car,x,z,angle,vehicles) {
  const sx=Math.sin(angle), sz=Math.cos(angle);
  const shape=profile(car.kind);
  for(const other of vehicles) {
    if(other===car || Math.abs(other.x-x)>4.5 || Math.abs(other.z-z)>4.5) continue;
    const ox=Math.sin(other.angle), oz=Math.cos(other.angle);
    const otherShape=profile(other.kind);
    const minimum=shape.radius+otherShape.radius;
    let nearest=minimum, nx=0, nz=0;
    for(const a of shape.offsets) for(const b of otherShape.offsets) {
      const dx=x+sx*a-other.x-ox*b, dz=z+sz*a-other.z-oz*b;
      const d=Math.hypot(dx,dz);
      if(d>=nearest) continue;
      nearest=d;
      const centers=Math.hypot(x-other.x,z-other.z);
      nx=d>.02?dx/d:centers>.02?(x-other.x)/centers:sx;
      nz=d>.02?dz/d:centers>.02?(z-other.z)/centers:sz;
    }
    if(nearest<minimum) return {other,nx,nz,mass:shape.mass,otherMass:otherShape.mass};
  }
  return null;
}

function takeImpact(car,strength) {
  if(strength<2.4) return;
  car.integrity=Math.max(0,car.integrity-(strength-2.4)*2.6);
  car.impact=Math.max(car.impact,strength);
}

/**
 * @param {VehicleBody} car
 * @param {number} dt
 * @param {{throttle:number,steer:number,brake:boolean}} command
 * @param {{x:number,z:number,w:number,d:number}[]} solids
 * @param {VehicleBody[]} vehicles
 */
export function stepVehicle(car,dt,command,solids,vehicles) {
  const {brake}=command;
  const bike=car.kind==='bike';
  const throttle=car.integrity>0?command.throttle:0;
  const targetSteer=car.integrity>0?command.steer:0;
  car.impact=Math.max(0,car.impact-dt*21);
  car.steer+=(targetSteer-car.steer)*(1-Math.exp(-dt*10));
  const f0x=Math.sin(car.angle),f0z=Math.cos(car.angle);
  let longitudinal=car.vx*f0x+car.vz*f0z;
  const acceleration=Math.sign(throttle)*longitudinal<-.6?28:throttle<0?(bike?4.7:10):(bike?19.7:15.4);
  longitudinal=clamp(longitudinal+throttle*acceleration*dt,bike?-2.7:-8.4,bike?31:27);
  const drag=car.integrity<=0?3.8:brake?(bike?6.7:5.5):Math.abs(throttle)<.07?1.58:.36;
  longitudinal*=Math.exp(-dt*drag);
  const lateralGrip=bike?(brake?5.2:13.5):(brake?2.15:8.1);
  const lateral=(car.vx*f0z-car.vz*f0x)*Math.exp(-dt*lateralGrip);
  car.vx=longitudinal*f0x+lateral*f0z;
  car.vz=longitudinal*f0z-lateral*f0x;

  const agility=clamp(1.9-Math.abs(longitudinal)/24,.75,1.65);
  const steering=car.steer*dt*agility*Math.min(1,Math.abs(longitudinal)/2.1)*Math.sign(longitudinal);
  const newAngle=car.angle+steering*(bike?1.26:brake?1.58:1);
  if(vehicleClear(car.x,car.z,newAngle,solids,car.kind) && !contact(car,car.x,car.z,newAngle,vehicles)) car.angle=newAngle;

  const steps=Math.max(1,Math.ceil(Math.hypot(car.vx,car.vz)*dt/.34));
  const period=dt/steps;
  for(let i=0;i<steps;i++) {
    const x=car.x+car.vx*period,z=car.z+car.vz*period;
    const hit=contact(car,x,z,car.angle,vehicles);
    if(hit) {
      const {other,nx,nz,mass,otherMass}=hit;
      const inward=car.vx*nx+car.vz*nz;
      const closing=inward-(other.vx*nx+other.vz*nz);
      if(closing<0 && inward<0) {
        const impulse=-closing*1.22/(1/mass+1/otherMass);
        car.vx+=nx*impulse/mass; car.vz+=nz*impulse/mass;
        other.vx-=nx*impulse/otherMass; other.vz-=nz*impulse/otherMass;
        takeImpact(car,-closing);
        takeImpact(other,-closing*.9);
        break;
      }
      const oldDistance=Math.hypot(car.x-other.x,car.z-other.z);
      if(Math.hypot(x-other.x,z-other.z)<=oldDistance) break;
    }
    if(vehicleClear(x,z,car.angle,solids,car.kind)) {
      car.x=x; car.z=z;
    } else {
      const alongX=vehicleClear(x,car.z,car.angle,solids,car.kind) && !contact(car,x,car.z,car.angle,vehicles);
      const alongZ=vehicleClear(car.x,z,car.angle,solids,car.kind) && !contact(car,car.x,z,car.angle,vehicles);
      const impact=Math.hypot(alongX?0:car.vx,alongZ?0:car.vz);
      if(alongX!==alongZ) {
        if(alongX) car.x=x;
        if(alongZ) car.z=z;
        car.vx*=alongX?.84:-.22;
        car.vz*=alongZ?.84:-.22;
      } else {
        car.vx*=-.21; car.vz*=-.21;
      }
      takeImpact(car,impact || Math.hypot(car.vx,car.vz));
      break;
    }
  }
  car.speed=car.vx*Math.sin(car.angle)+car.vz*Math.cos(car.angle);
}
