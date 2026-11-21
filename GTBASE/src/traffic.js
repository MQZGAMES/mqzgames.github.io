import { clamp, distance, roads } from './rules.js';
import { resetVehicle, stepVehicle, vehicleClear } from './vehicle.js';
import { groundHeight } from './contact.js';

const lane = 2.05;
const corner = 7.15;

function makeRoute(nodes) {
  const path=[];
  nodes.forEach((at,index)=>{
    const before=nodes[(index+nodes.length-1)%nodes.length], after=nodes[(index+1)%nodes.length];
    const ix=Math.sign(at[0]-before[0]), iz=Math.sign(at[1]-before[1]);
    const ox=Math.sign(after[0]-at[0]), oz=Math.sign(after[1]-at[1]);
    const start={x:at[0]-iz*lane-ix*corner,z:at[1]+ix*lane-iz*corner};
    const finish={x:at[0]-oz*lane+ox*corner,z:at[1]+ox*lane+oz*corner};
    const straight=ix===ox&&iz===oz;
    const middle={x:at[0]-(straight?iz:iz+oz)*lane,z:at[1]+(straight?ix:ix+ox)*lane};
    const junction={x:at[0],z:at[1],id:at.join(',')};
    for(let index=0;index<=6;index++){
      const t=index/6, u=1-t;
      path.push({
        x:u*u*start.x+2*u*t*middle.x+t*t*finish.x,
        z:u*u*start.z+2*u*t*middle.z+t*t*finish.z,
        junction,curve:!straight,angle:Math.atan2(ix,iz)
      });
    }
  });
  return path;
}

const rectangle=(a,b,c,d)=>[[a,b],[a,d],[c,d],[c,b]];
const loops=[
  rectangle(-57,-57,57,57),
  rectangle(-57,-19,19,57).reverse(),
  rectangle(-19,-57,57,19),
  rectangle(-19,-19,19,19).reverse(),
  rectangle(-57,-57,19,19).reverse(),
  [[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],
  rectangle(-57,-57,57,57).reverse(),
  rectangle(-19,-57,57,57).reverse()
];

function withIntersections(loop) {
  return loop.flatMap((node,i)=>{
    const next=loop[(i+1)%loop.length];
    const axis=node[0]===next[0]?1:0;
    const fixed=1-axis;
    const between=roads.filter(r=>r>Math.min(node[axis],next[axis])&&r<Math.max(node[axis],next[axis]));
    if(next[axis]<node[axis]) between.reverse();
    return [node,...between.map(r=>fixed===0?[node[0],r]:[r,node[1]])];
  });
}

export const trafficRoutes=loops.map(loop=>makeRoute(withIntersections(loop)));
const startingCorners=[1,3,1,1,5,5,7,10];

export function resetDriver(car, routeIndex) {
  const route=trafficRoutes[routeIndex];
  const next=(startingCorners[routeIndex]*7)%route.length;
  const at=route[next], prev=route[(next+route.length-1)%route.length];
  const t=.49;
  resetVehicle(car,{x:prev.x+(at.x-prev.x)*t,z:prev.z+(at.z-prev.z)*t,angle:at.angle});
  car.driver={route,next,cruise:8.7+(routeIndex%4)*1.02,stuck:0,routeIndex,pass:null};
  car.stolen=false;
  car.abandoned=0;
}

export function steeringCommand(car, target, desiredSpeed) {
  const direction=Math.atan2(target.x-car.x,target.z-car.z);
  const delta=Math.atan2(Math.sin(direction-car.angle),Math.cos(direction-car.angle));
  const desired=desiredSpeed*(1-.52*Math.min(1,Math.abs(delta)/1.2));
  return {
    steer:clamp(delta*1.9,-1,1),
    throttle:clamp((desired-car.speed)*.47,-.6,1),
    brake:desired<1.2 || car.speed>desired+1.8
  };
}

export function safeSpeed(car, vehicles, pedestrians, desired) {
  const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
  let speed=desired;
  for(const other of vehicles) {
    if(other===car || distance(other,car)>20) continue;
    const dx=other.x-car.x,dz=other.z-car.z;
    const ahead=dx*sx+dz*sz;
    const across=Math.abs(dx*sz-dz*sx);
    if(ahead<.2 || across>2.18) continue;
    const available=Math.max(0,ahead-4.9);
    const otherSpeed=Math.max(0,other.vx*sx+other.vz*sz);
    speed=Math.min(speed,otherSpeed+available*.87);
  }
  for(const npc of pedestrians) {
    if(npc.down>0 || npc.health<=0 || npc.seated || distance(npc,car)>11) continue;
    const dx=npc.x-car.x,dz=npc.z-car.z;
    const ahead=dx*sx+dz*sz;
    const across=Math.abs(dx*sz-dz*sx);
    if(ahead>0 && across<1.35) speed=Math.min(speed,Math.max(0,ahead-3.3)*.94);
  }
  return speed;
}

export function bypass(car, vehicles, pedestrians, solids) {
  const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
  const candidates=[
    ...vehicles.filter(other=>other!==car && Math.hypot(other.vx,other.vz)<2.0).map(other=>({other,radius:1.05})),
    ...pedestrians.filter(other=>other.down<=0 && other.health!==0 && !other.seated).map(other=>({other,radius:.43}))
  ];
  const obstruction=candidates.find(({other,radius})=>{
    const dx=other.x-car.x,dz=other.z-car.z;
    const along=dx*sx+dz*sz;
    return along>2.25 && along<13.4 && Math.abs(dx*sz-dz*sx)<radius+1.05;
  });
  if(!obstruction) return null;
  const inLane=(other,side)=>{
    const dx=other.x-car.x,dz=other.z-car.z;
    const along=dx*sx+dz*sz;
    return along>-3 && along<23 && Math.abs(dx*sz-dz*sx-side)<2.3;
  };
  for(const side of [2.72,-2.72]) {
    if(vehicles.some(other=>other!==car && other!==obstruction.other && inLane(other,side)) ||
       pedestrians.some(person=>person!==obstruction.other && person.down<=0 && inLane(person,side))) continue;
    const x=car.x+sx*8+sz*side,z=car.z+sz*8-sx*side;
    if(vehicleClear(x,z,car.angle,solids,car.kind) && vehicleClear((x+car.x)*.5,(z+car.z)*.5,car.angle,solids,car.kind)) return {x,z};
  }
  return null;
}

export function passingPath(car, traffic, crowd, solids) {
  const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
  const project=(actor)=>({along:(actor.x-car.x)*sx+(actor.z-car.z)*sz,across:(actor.x-car.x)*sz-(actor.z-car.z)*sx});
  const possible=[
    ...traffic.filter(other=>other!==car && Math.hypot(other.vx,other.vz)<6.0),
    ...crowd.filter(other=>other.health>0 && !other.seated && !other.down)
  ].map(actor=>({actor,...project(actor)})).filter(({along,across})=>along>3.2 && along<19 && Math.abs(across)<1.73);
  possible.sort((a,b)=>a.along-b.along);
  const obstruction=possible[0];
  if(!obstruction) return null;
  for(const offset of [2.95,-2.95,3.45,-3.45]) {
    const end=Math.max(13,obstruction.along+7);
    const clearLane=[...traffic,...crowd].every(other=>{
      if(other===car || other===obstruction.actor || other.seated || other.health<=0) return true;
      const {along,across}=project(other);
      return along< -3 || along>end+8 || Math.abs(across-offset)>2.28;
    });
    const street=[.30,.58,.94].every(scale=>{
      const along=end*scale;
      const side=offset*Math.min(1,along/5.6);
      const x=car.x+sx*along+sz*side,z=car.z+sz*along-sx*side;
      const tire=car.kind==='bike'?.24:.90;
      const road=groundHeight(car.x,car.z);
      return Math.abs(groundHeight(x+sz*tire,z-sx*tire)-road)<.08 &&
        Math.abs(groundHeight(x-sz*tire,z+sx*tire)-road)<.08 && vehicleClear(x,z,car.angle,solids,car.kind);
    });
    if(clearLane && street) return {x:car.x,z:car.z,sx,sz,offset,obstacle:obstruction.actor,phase:'out',age:0,passed:0};
  }
  return null;
}

export function followPass(car, plan, traffic, dt) {
  plan.age+=dt;
  const {sx,sz,offset}=plan;
  const along=(car.x-plan.x)*sx+(car.z-plan.z)*sz;
  const across=(car.x-plan.x)*sz-(car.z-plan.z)*sx;
  const blocker=(plan.obstacle.x-plan.x)*sx+(plan.obstacle.z-plan.z)*sz;
  if(plan.age>13 || (plan.phase==='merge' && Math.abs(across)<.53)) return null;
  if(plan.phase==='out' && Math.abs(across-offset)<.6) plan.phase='pass';
  if(plan.phase!=='merge' && along>blocker+5.3) {
    const clearToMerge=traffic.every(other=>other===car || Math.abs((other.x-plan.x)*sz-(other.z-plan.z)*sx)>2.0 ||
      Math.abs((other.x-car.x)*sx+(other.z-car.z)*sz)>5.5);
    if(clearToMerge) plan.phase='merge';
  }
  const side=plan.phase==='merge'?0:offset;
  const hazard=traffic.some(other=>{
    if(other===car || other===plan.obstacle) return false;
    const d=(other.x-car.x)*sx+(other.z-car.z)*sz;
    const lane=(other.x-plan.x)*sz-(other.z-plan.z)*sx;
    return d>0 && d<7.1 && Math.abs(lane-side)<1.84;
  });
  const look=plan.phase==='out'?4.4:7.0;
  const target={x:plan.x+sx*(along+look)+sz*side,z:plan.z+sz*(along+look)-sx*side};
  const command=steeringCommand(car,target,hazard?0:plan.phase==='out'?4.8:6.5);
  if(hazard) command.throttle=0;
  return command;
}

export function driveTraffic(cars, active, people, solids, dt, zoneOwners) {
  for(const [key,owner] of zoneOwners) {
    if(!owner.driver || owner.integrity<=0 || distance(owner,owner.driver.route[owner.driver.next].junction)>11) zoneOwners.delete(key);
  }
  for(const car of cars) {
    const driver=car.driver;
    if(!driver || car.integrity<=0) {
      if(car!==active.player && Math.hypot(car.vx,car.vz)>.06) {
        stepVehicle(car,dt,{throttle:0,steer:0,brake:true},solids,active.vehicles);
      } else if(car!==active.player) car.impact=Math.max(0,car.impact-dt*21);
      continue;
    }
    const {route}=driver;
    let point=route[driver.next];
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    for(let i=0;i<6;i++) {
      const dx=point.x-car.x,dz=point.z-car.z;
      if(Math.hypot(dx,dz)>2.55 && (dx*sx+dz*sz>0 || Math.hypot(dx,dz)>5)) break;
      driver.next=(driver.next+1)%route.length;
      point=route[driver.next];
    }
    const {junction}=point;
    const proximity=distance(car,junction);
    const owner=zoneOwners.get(junction.id);
    if(!owner && proximity<9.7) zoneOwners.set(junction.id,car);
    let desired=point.curve&&proximity<12?Math.min(5.9,driver.cruise):driver.cruise;
    if(owner && owner!==car && proximity<15) desired=Math.min(desired,Math.max(0,proximity-7.4)*.96);
    const normalSpeed=safeSpeed(car,active.vehicles,people,desired);
    if(!driver.pass && normalSpeed<desired*.78 && (!point.curve || proximity>11)) {
      driver.pass=passingPath(car,active.vehicles,people,solids);
    }
    const passCommand=driver.pass?followPass(car,driver.pass,active.vehicles,dt):null;
    if(!passCommand) driver.pass=null;
    const command=passCommand??steeringCommand(car,point,normalSpeed);
    if(!passCommand && normalSpeed<.4) command.throttle=0;
    stepVehicle(car,dt,command,solids,active.vehicles);
    driver.stuck=car.speed<.65?driver.stuck+dt:0;
  }
}

export function positionAvailable(car, vehicles, observer, solids) {
  return distance(car,observer)>13 && vehicleClear(car.x,car.z,car.angle,solids,car.kind) &&
    vehicles.every(other=>distance(other,car)>5.2);
}
