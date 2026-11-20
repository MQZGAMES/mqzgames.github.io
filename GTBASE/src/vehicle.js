import { clamp, clear } from './rules.js';

const halfAxle = 1.17;
const radius = .98;
const offsets = [-halfAxle, 0, halfAxle];

/** @typedef {{x:number,z:number,angle:number,vx:number,vz:number,speed:number,integrity:number,steer:number,impact:number}} VehicleBody */

export function resetVehicle(car, pose) {
  Object.assign(car,pose,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0});
}

export function vehicleClear(x,z,angle,solids) {
  const sx=Math.sin(angle), sz=Math.cos(angle);
  return offsets.every(offset=>clear(x+sx*offset,z+sz*offset,radius,solids));
}

export function vehicleContains(car,x,z,extra=0) {
  const sx=Math.sin(car.angle), sz=Math.cos(car.angle);
  const length=clamp((x-car.x)*sx+(z-car.z)*sz,-halfAxle,halfAxle);
  return Math.hypot(x-car.x-sx*length,z-car.z-sz*length)<radius+extra;
}

function contact(car,x,z,angle,vehicles) {
  const sx=Math.sin(angle), sz=Math.cos(angle);
  for(const other of vehicles) {
    if(other===car || Math.abs(other.x-x)>4.5 || Math.abs(other.z-z)>4.5) continue;
    const ox=Math.sin(other.angle), oz=Math.cos(other.angle);
    let nearest=radius*2, nx=0, nz=0;
    for(const a of offsets) for(const b of offsets) {
      const dx=x+sx*a-other.x-ox*b, dz=z+sz*a-other.z-oz*b;
      const d=Math.hypot(dx,dz);
      if(d>=nearest) continue;
      nearest=d;
      const centers=Math.hypot(x-other.x,z-other.z);
      nx=d>.02?dx/d:centers>.02?(x-other.x)/centers:sx;
      nz=d>.02?dz/d:centers>.02?(z-other.z)/centers:sz;
    }
    if(nearest<radius*2) return {other,nx,nz};
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
  const throttle=car.integrity>0?command.throttle:0;
  const targetSteer=car.integrity>0?command.steer:0;
  car.impact=Math.max(0,car.impact-dt*21);
  car.steer+=(targetSteer-car.steer)*(1-Math.exp(-dt*10));
  const f0x=Math.sin(car.angle),f0z=Math.cos(car.angle);
  let longitudinal=car.vx*f0x+car.vz*f0z;
  const acceleration=Math.sign(throttle)*longitudinal<-.6?28:throttle<0?10:15.4;
  longitudinal=clamp(longitudinal+throttle*acceleration*dt,-8.4,27);
  const drag=car.integrity<=0?3.8:brake?5.5:Math.abs(throttle)<.07?1.58:.36;
  longitudinal*=Math.exp(-dt*drag);
  const lateral=(car.vx*f0z-car.vz*f0x)*Math.exp(-dt*(brake?2.15:8.1));
  car.vx=longitudinal*f0x+lateral*f0z;
  car.vz=longitudinal*f0z-lateral*f0x;

  const agility=clamp(1.9-Math.abs(longitudinal)/24,.75,1.65);
  const steering=car.steer*dt*agility*Math.min(1,Math.abs(longitudinal)/2.1)*Math.sign(longitudinal);
  const newAngle=car.angle+steering*(brake?1.58:1);
  if(vehicleClear(car.x,car.z,newAngle,solids) && !contact(car,car.x,car.z,newAngle,vehicles)) car.angle=newAngle;

  const steps=Math.max(1,Math.ceil(Math.hypot(car.vx,car.vz)*dt/.34));
  const period=dt/steps;
  for(let i=0;i<steps;i++) {
    const x=car.x+car.vx*period,z=car.z+car.vz*period;
    const hit=contact(car,x,z,car.angle,vehicles);
    if(hit) {
      const {other,nx,nz}=hit;
      const inward=car.vx*nx+car.vz*nz;
      const closing=inward-(other.vx*nx+other.vz*nz);
      if(closing<0 && inward<0) {
        const impulse=-closing*.61;
        car.vx+=nx*impulse; car.vz+=nz*impulse;
        other.vx-=nx*impulse; other.vz-=nz*impulse;
        takeImpact(car,-closing);
        takeImpact(other,-closing*.9);
        break;
      }
      const oldDistance=Math.hypot(car.x-other.x,car.z-other.z);
      if(Math.hypot(x-other.x,z-other.z)<=oldDistance) break;
    }
    if(vehicleClear(x,z,car.angle,solids)) {
      car.x=x; car.z=z;
    } else {
      const alongX=vehicleClear(x,car.z,car.angle,solids) && !contact(car,x,car.z,car.angle,vehicles);
      const alongZ=vehicleClear(car.x,z,car.angle,solids) && !contact(car,car.x,z,car.angle,vehicles);
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
