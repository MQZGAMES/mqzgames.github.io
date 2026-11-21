import { clamp, distance, roads, turn } from './rules.js';
import { resetVehicle, stepVehicle, vehicleClear, vehicleContains, vehicleExtent, vehicleFits } from './vehicle.js';
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

export function resetDriver(car, routeIndex, shift=0) {
  const route=trafficRoutes[routeIndex];
  const next=(startingCorners[routeIndex]*7+shift)%route.length;
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
  const own=vehicleExtent(car.shape??car.kind);
  const motorcycle=car.kind==='bike';
  let speed=desired;
  for(const other of vehicles) {
    if(other===car || distance(other,car)>20) continue;
    const dx=other.x-car.x,dz=other.z-car.z;
    const ahead=dx*sx+dz*sz;
    const across=Math.abs(dx*sz-dz*sx);
    const extent=vehicleExtent(other.shape??other.kind,other.angle-car.angle);
    if(ahead<.2 || across>own.width+extent.width+.16) continue;
    const available=Math.max(0,ahead-own.length-extent.length-(motorcycle?.39:.64));
    const otherSpeed=Math.max(0,other.vx*sx+other.vz*sz);
    speed=Math.min(speed,otherSpeed+available*.87);
  }
  for(const npc of pedestrians) {
    if(npc.down>0 || npc.health<=0 || npc.seated || distance(npc,car)>11) continue;
    const dx=npc.x-car.x,dz=npc.z-car.z;
    const ahead=dx*sx+dz*sz;
    const across=Math.abs(dx*sz-dz*sx);
    if(ahead>0 && across<own.width+.4) speed=Math.min(speed,Math.max(0,ahead-own.length-.90)*.94);
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
    if(vehicleClear(x,z,car.angle,solids,car.shape??car.kind) && vehicleClear((x+car.x)*.5,(z+car.z)*.5,car.angle,solids,car.shape??car.kind)) return {x,z};
  }
  return null;
}

export function passingPath(car, traffic, crowd, solids) {
  const bike=car.kind==='bike';
  const own=vehicleExtent(car.shape??car.kind);
  const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
  const project=(actor)=>({along:(actor.x-car.x)*sx+(actor.z-car.z)*sz,across:(actor.x-car.x)*sz-(actor.z-car.z)*sx});
  const bodies=[
    ...traffic.filter(other=>other!==car).map(actor=>({actor,...vehicleExtent(actor.shape??actor.kind,actor.angle-car.angle),moving:true})),
    ...crowd.filter(person=>person.health>0 && !person.seated && !person.down).map(actor=>({actor,width:.34,length:.34,moving:false}))
  ].map(body=>({...body,...project(body.actor)}));
  const possible=bodies.filter(({actor,along,across,width,length,moving})=>
    along>Math.max(bike?1.2:2.4,own.length+length-.30) && along<19 &&
    Math.abs(across)<own.width+width+.16 && (!moving || Math.hypot(actor.vx,actor.vz)<(bike?8:6)));
  possible.sort((a,b)=>a.along-b.along);
  const obstruction=possible[0];
  if(!obstruction) return null;
  if(obstruction.along-own.length-obstruction.length<(bike?1.85:2.45)) return null;
  const clearance=own.width+obstruction.width+(bike?.23:.38);
  const tight=bike?Math.max(1.12,clearance):2.95;
  const offsets=bike?[tight,-tight,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[tight,-tight,3.45,-3.45];
  const end=obstruction.along+own.length+obstruction.length+(bike?3:4.1);
  for(const offset of offsets) {
    if(Math.abs(obstruction.across-offset)<clearance) continue;
    const later=own.length+(bike?3.9:5.8);
    const clearLane=bodies.every(body=>{
      if(body===obstruction) return true;
      const closing=body.moving?Math.max(0,-body.actor.vx*sx-body.actor.vz*sz):0;
      return body.along < -own.length-body.length-.2 || body.along > end+later+Math.min(10,closing) ||
        Math.abs(body.across-offset)>own.width+body.width+(bike?.25:.46);
    });
    if(!clearLane) continue;
    const shiftBy=Math.max(bike?2.4:3.8,Math.min(bike?5.0:6.1,obstruction.along-own.length+1.2));
    const road=groundHeight(car.x,car.z);
    const samples=Math.ceil(end/.72);
    let street=true;
    for(let i=1;i<=samples;i++) {
      const along=i*end/samples;
      const side=offset*Math.min(1,along/shiftBy);
      const x=car.x+sx*along+sz*side,z=car.z+sz*along-sx*side;
      const tire=bike?.27:.90;
      if(Math.abs(groundHeight(x+sz*tire,z-sx*tire)-road)>=.08 ||
        Math.abs(groundHeight(x-sz*tire,z+sx*tire)-road)>=.08 ||
        !vehicleFits({x,z,angle:car.angle,kind:car.kind,shape:car.shape},solids,traffic,car)) {
        street=false;
        break;
      }
    }
    if(street) return {x:car.x,z:car.z,sx,sz,offset,obstacle:obstruction.actor,phase:'out',age:0,
      clearAfter:own.length+obstruction.length+(bike?.9:1.2)};
  }
  return null;
}

export function followPass(car, plan, traffic, dt, pedestrians=[]) {
  plan.age+=dt;
  const bike=car.kind==='bike';
  const own=vehicleExtent(car.shape??car.kind);
  const {sx,sz,offset}=plan;
  const along=(car.x-plan.x)*sx+(car.z-plan.z)*sz;
  const across=(car.x-plan.x)*sz-(car.z-plan.z)*sx;
  const blocker=(plan.obstacle.x-plan.x)*sx+(plan.obstacle.z-plan.z)*sz;
  if(plan.age>(bike?10:13) || (plan.phase==='merge' && Math.abs(across)<.53)) return null;
  if(plan.phase==='out' && Math.abs(across-offset)<(bike?.28:.55)) plan.phase='pass';
  if(plan.phase!=='merge' && along>blocker+plan.clearAfter) {
    const clearToMerge=traffic.every(other=>{
      if(other===car) return true;
      const extent=vehicleExtent(other.shape??other.kind,other.angle-Math.atan2(sx,sz));
      return Math.abs((other.x-plan.x)*sz-(other.z-plan.z)*sx)>own.width+extent.width+.30 ||
        Math.abs((other.x-car.x)*sx+(other.z-car.z)*sz)>own.length+extent.length+1.25;
    });
    if(clearToMerge) plan.phase='merge';
  }
  const side=plan.phase==='merge'?0:offset;
  const hazard=traffic.some(other=>{
    if(other===car || other===plan.obstacle) return false;
    const d=(other.x-car.x)*sx+(other.z-car.z)*sz;
    const lane=(other.x-plan.x)*sz-(other.z-plan.z)*sx;
    const extent=vehicleExtent(other.shape??other.kind,other.angle-Math.atan2(sx,sz));
    return d>0 && d<own.length+extent.length+2.7 && Math.abs(lane-side)<own.width+extent.width+.28;
  }) || pedestrians.some(other=>{
    if(other.health<=0 || other.seated || other.down) return false;
    const d=(other.x-car.x)*sx+(other.z-car.z)*sz;
    const lane=(other.x-plan.x)*sz-(other.z-plan.z)*sx;
    return d>0 && d<own.length+2.1 && Math.abs(lane-side)<own.width+.45;
  });
  const look=plan.phase==='out'?(bike?2.30:4.4):(bike?4.8:7);
  const target={x:plan.x+sx*(along+look)+sz*side,z:plan.z+sz*(along+look)-sx*side};
  const pace=plan.phase==='out'?(bike?4.50:4.8):(bike?8.1:6.5);
  const command=steeringCommand(car,target,hazard?0:pace);
  if(hazard) command.throttle=0;
  return command;
}

function maneuverClear(car, probe, vehicles, crowd, solids) {
  return vehicleFits(probe,solids,vehicles,car) && crowd.every(person=>
    person.health<=0 || person.seated || person.down || !vehicleContains(probe,person.x,person.z,.26));
}

function planReverse(car,goal,vehicles,crowd,solids) {
  const bike=car.kind==='bike';
  const pace=bike?1.75:2.75;
  const nearby=vehicles.filter(other=>other!==car && distance(car,other)<29);
  let best=null,bestScore=-Infinity;
  for(const steer of [0,-.62,.62,-1,1]) {
    const pose={x:car.x,z:car.z,angle:car.angle,kind:car.kind,shape:car.shape};
    let reversed=0;
    for(let i=0;i<(bike?13:19);i++) {
      pose.angle-=steer*.18*(bike?.75:.56);
      pose.x-=Math.sin(pose.angle)*.18;
      pose.z-=Math.cos(pose.angle)*.18;
      if(!maneuverClear(car,pose,vehicles,crowd,solids)) break;
      reversed+=.18;
    }
    if(reversed<(bike?.90:1.35)) continue;
    if(!maneuverClear(car,pose,vehicles,crowd,solids)){
      pose.x+=Math.sin(pose.angle)*.18;
      pose.z+=Math.cos(pose.angle)*.18;
      pose.angle+=steer*.18*(bike?.75:.56);
    }
    const look={...pose};
    let forward=0;
    for(let i=0;i<27;i++) {
      const bearing=Math.atan2(goal.x-look.x,goal.z-look.z);
      look.angle=turn(look.angle,bearing,bike?.13:.092);
      look.x+=Math.sin(look.angle)*.24;
      look.z+=Math.cos(look.angle)*.24;
      if(!maneuverClear(car,look,vehicles,crowd,solids)) break;
      forward+=.24;
    }
    const canPass=bike && passingPath(pose,nearby,crowd,solids);
    const score=forward*.67+(distance(car,goal)-distance(look,goal))*.38+reversed*.31-Math.abs(steer)*.12+(canPass?4.6:0);
    if(score>bestScore) {
      bestScore=score;
      best={steer,pace,distance:Math.max(.70,reversed-.26),age:0,x:car.x,z:car.z};
    }
  }
  return best;
}

/**
 * Reverses only after failing to make progress, then returns control to the route.
 * The caller steps the returned command once with the ordinary vehicle physics.
 */
export function recoverDriver(car,state,goal,vehicles,crowd,solids,dt,normal,allow=true) {
  const bike=car.kind==='bike';
  const previous=state.recoverPosition;
  state.recoverPosition={x:car.x,z:car.z};
  const moving=previous && distance(previous,car)>dt*.57;
  state.recoverRetry=Math.max(0,(state.recoverRetry??0)-dt);
  if(state.maneuver) {
    const active=state.maneuver;
    active.age+=dt;
    const gap=Math.min(.26,Math.max(.035,Math.abs(car.speed)*dt*1.35));
    const rear={x:car.x-Math.sin(car.angle)*gap,z:car.z-Math.cos(car.angle)*gap,angle:car.angle,kind:car.kind,shape:car.shape};
    if(distance(car,active)>=active.distance || active.age>(bike?2.4:2.8) || !maneuverClear(car,rear,vehicles,crowd,solids)) {
      state.maneuver=null;
      state.recoverWait=0;
      state.recoverRetry=.58;
      return {steer:0,throttle:0,brake:true};
    }
    return {steer:active.steer,throttle:car.speed> -active.pace?clamp((car.speed+active.pace)*-.64,-.54,-.05):0,brake:false};
  }
  state.recoverWait=!allow || moving || distance(car,goal)<1.2?0:(state.recoverWait??0)+dt;
  const patience=bike?1.08:1.75;
  if(state.recoverRetry>0 || state.recoverWait<patience || car.integrity<=0) return normal;
  state.maneuver=planReverse(car,goal,vehicles,crowd,solids);
  if(!state.maneuver) {
    state.recoverRetry=.85;
    return normal;
  }
  state.recoverWait=0;
  return {steer:state.maneuver.steer,throttle:-.47,brake:false};
}

/**
 * @param {any[]} cars @param {any} active @param {any[]} people @param {any[]} solids @param {number} dt
 * @param {Map<string,any>} zoneOwners @param {{state:(id:string,axis:'x'|'z')=>string}} [signals]
 */
export function driveTraffic(cars, active, people, solids, dt, zoneOwners, signals) {
  for(const [key,owner] of zoneOwners) {
    if(!owner.driver || owner.integrity<=0 || distance(owner,owner.driver.route[owner.driver.next].junction)>11) zoneOwners.delete(key);
  }
  for(const car of cars) {
    const driver=car.driver;
    if(!driver || car.burning || car.wrecked || car.integrity<=0) {
      if(car!==active.player && Math.hypot(car.vx,car.vz)>.06) {
        stepVehicle(car,dt,{throttle:0,steer:0,brake:true},solids,active.vehicles);
      } else if(car!==active.player) car.impact=Math.max(0,car.impact-dt*21);
      continue;
    }
    const {route}=driver;
    const bike=car.kind==='bike';
    let point=route[driver.next];
    const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
    for(let i=0;!driver.maneuver && i<6;i++) {
      const dx=point.x-car.x,dz=point.z-car.z;
      if(Math.hypot(dx,dz)>2.55 && (dx*sx+dz*sz>0 || Math.hypot(dx,dz)>5)) break;
      driver.next=(driver.next+1)%route.length;
      point=route[driver.next];
    }
    const {junction}=point;
    const proximity=distance(car,junction);
    const owner=zoneOwners.get(junction.id);
    if(!owner && proximity<9.7) zoneOwners.set(junction.id,car);
    const cruise=driver.cruise*(bike?1.13:1);
    let desired=point.curve&&proximity<12?Math.min(bike?7.1:5.9,cruise):cruise;
    const yielding=owner && owner!==car && proximity<15;
    if(yielding) desired=Math.min(desired,Math.max(0,proximity-7.4)*.96);
    // Traffic lights: stop before the crosswalk on red, and on yellow when there is room to brake.
    let signalHold=false;
    if(signals) {
      const toward=(junction.x-car.x)*sx+(junction.z-car.z)*sz;
      const light=signals.state(junction.id,Math.abs(sx)>Math.abs(sz)?'x':'z');
      const stopAt=7.6+(car.halfLength??2.4);
      if(light!=='green' && toward>stopAt-.5 && toward<stopAt+40) {
        const room=toward-stopAt;
        if(light==='red' || room>car.speed*car.speed/11) {
          desired=Math.min(desired,Math.max(0,room)*.8);
          signalHold=true;
        }
      }
    }
    const normalSpeed=safeSpeed(car,active.vehicles,people,desired);
    if(!driver.pass && !driver.maneuver && !yielding && !signalHold && normalSpeed<desired*(bike?.88:.78) && (!point.curve || proximity>(bike?8:11))) {
      driver.pass=passingPath(car,active.vehicles,people,solids);
    }
    const passCommand=driver.pass?followPass(car,driver.pass,active.vehicles,dt,people):null;
    if(!passCommand) driver.pass=null;
    const normal=passCommand??steeringCommand(car,point,normalSpeed);
    if(!passCommand && normalSpeed<.4) normal.throttle=0;
    const x=car.x,z=car.z;
    const command=recoverDriver(car,driver,point,active.vehicles,people,solids,dt,normal,!(yielding || signalHold) || driver.stuck>12);
    if(driver.maneuver) driver.pass=null;
    stepVehicle(car,dt,command,solids,active.vehicles);
    driver.stuck=!signalHold && Math.hypot(car.x-x,car.z-z)<dt*.62?driver.stuck+dt:signalHold?driver.stuck:0;
  }
}

export function positionAvailable(car, vehicles, observer, solids) {
  return distance(car,observer)>13 && vehicleClear(car.x,car.z,car.angle,solids,car.shape??car.kind) &&
    vehicles.every(other=>distance(other,car)>5.2);
}
