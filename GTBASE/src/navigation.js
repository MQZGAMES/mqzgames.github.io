import { clear, distance, move, roads, turn } from './rules.js';
import { bypass, recoverDriver, safeSpeed, steeringCommand } from './traffic.js';
import { stepVehicle } from './vehicle.js';

export function footNavigator(solids) {
  const spacing=2.55, cells=50, edge=(cells-1)*spacing*.5;
  const nodes=Array.from({length:cells*cells},(_,i)=>({x:(i%cells)*spacing-edge,z:Math.floor(i/cells)*spacing-edge}));
  const free=nodes.map(node=>clear(node.x,node.z,.38,solids));
  const neighbors=nodes.map((node,here)=>{
    if(!free[here]) return [];
    const adjacent=[here>=cells?here-cells:-1,here<cells*(cells-1)?here+cells:-1,here%cells?here-1:-1,here%cells<cells-1?here+1:-1];
    return adjacent.filter(next=>next>=0 && free[next] && clear((node.x+nodes[next].x)*.5,(node.z+nodes[next].z)*.5,.38,solids));
  });
  const directLine=(origin,target)=>{
    const steps=Math.max(1,Math.ceil(distance(origin,target)/.42));
    for(let i=1;i<=steps;i++) {
      const f=i/steps;
      if(!clear(origin.x+(target.x-origin.x)*f,origin.z+(target.z-origin.z)*f,.31,solids)) return false;
    }
    return true;
  };
  // Only nodes around the target are candidates; checking every node against every wall stalled frames.
  const nearest=target=>{
    const ci=Math.round((target.x+edge)/spacing), cj=Math.round((target.z+edge)/spacing);
    const candidates=[];
    for(let j=Math.max(0,cj-4);j<=Math.min(cells-1,cj+4);j++) {
      for(let i=Math.max(0,ci-4);i<=Math.min(cells-1,ci+4);i++) {
        const index=j*cells+i;
        if(!free[index]) continue;
        const dx=nodes[index].x-target.x,dz=nodes[index].z-target.z;
        candidates.push({index,d:dx*dx+dz*dz});
      }
    }
    candidates.sort((a,b)=>a.d-b.d);
    for(const {index} of candidates.slice(0,12)) if(directLine(target,nodes[index])) return index;
    return candidates[0]?.index??-1;
  };
  let budget=0, stamp=-1;
  const path=(origin,target)=>{
    const start=nearest(origin), finish=nearest(target);
    if(start<0 || finish<0 || start===finish) return [];
    const previous=new Int32Array(nodes.length).fill(-1);
    const queue=[start]; previous[start]=start;
    for(let cursor=0;cursor<queue.length;cursor++){
      const here=queue[cursor];
      if(here===finish) {
        const result=[];
        for(let node=finish;node!==start;node=previous[node]) result.push(nodes[node]);
        return result.reverse();
      }
      for(const next of neighbors[here]) {
        if(previous[next]!==-1) continue;
        previous[next]=here;queue.push(next);
      }
    }
    return [];
  };
  return (actor,target,speed,dt)=>{
    actor.repath=(actor.repath??0)-dt;
    const dx=target.x-actor.x,dz=target.z-actor.z;
    const gap=Math.hypot(dx,dz);
    if(gap<.16) return 0;
    const direct=gap<7 && directLine(actor,target);
    const now=Math.floor(performance.now()/16);
    if(now!==stamp) {stamp=now;budget=3;}
    if(!direct && actor.repath<=0) {
      // A small per-frame budget spreads route searches over several frames.
      if(budget>0) {
        budget--;
        actor.route=path(actor,target);
        actor.repath=1.1+Math.random()*.4;
      } else actor.repath=.05;
    }
    while(actor.route?.length && (distance(actor,actor.route[0])<.7 ||
      actor.route.length>1 && distance(actor,actor.route[1])<4 && directLine(actor,actor.route[1]))) actor.route.shift();
    const next=direct?target:actor.route?.[0]??target;
    const dir=Math.atan2(next.x-actor.x,next.z-actor.z);
    const step=Math.min(speed*dt,distance(actor,next));
    actor.angle=turn(actor.angle,dir,dt*8.5);
    const moved=move(actor,actor.x+Math.sin(dir)*step,actor.z+Math.cos(dir)*step,.24,solids);
    if(!moved) actor.repath=Math.min(actor.repath,.18);
    return moved?speed:0;
  };
}

const closestRoad=value=>roads.reduce((best,road)=>Math.abs(value-road)<Math.abs(value-best)?road:best,roads[0]);

export function patrolDrive(unit,target,solids,vehicles,people,dt) {
  const car=unit.car;
  if(unit.departing) {
    if(car.x<15.0 && !unit.stop) unit.stop={x:15.6,z:unit.berth.z};
    else if(unit.stop?.x===15.6 && car.x>=14.9) {
      const north=target.z<car.z;
      unit.stop={x:north?20.9:17.2,z:car.z+(north?-1:1)*10.0};
    } else if(unit.stop && unit.stop.x!==15.6 && distance(car,unit.stop)<3.4) {
      unit.departing=false;
      unit.stop=null;
    }
  }
  if(!unit.stop || (!unit.departing && distance(car,unit.stop)<2.6)) {
    const px=closestRoad(car.x),pz=closestRoad(car.z);
    const tx=closestRoad(target.x),tz=closestRoad(target.z);
    if(Math.abs(car.x-px)>3 && Math.abs(car.z-pz)>3) unit.stop={x:px,z:car.z};
    else if(Math.abs(car.x-px)>2.4 && Math.abs(car.z-pz)<2.4) unit.stop={x:tx,z:pz};
    else if(Math.abs(car.z-pz)>2.4) unit.stop={x:px,z:tz};
    else if(tx!==px) unit.stop={x:px+Math.sign(tx-px)*38,z:pz};
    else if(tz!==pz) unit.stop={x:px,z:pz+Math.sign(tz-pz)*38};
    else unit.stop={x:tx,z:target.z};
  }
  const proximity=distance(car,target);
  const pace=unit.departing?6.0:14;
  const planned=Math.min(pace,proximity*.85,Math.max(3,distance(car,unit.stop)*1.85));
  const safe=safeSpeed(car,vehicles,people,planned);
  const detour=!unit.departing && safe<2.5?bypass(car,vehicles,people,solids):null;
  const normal=steeringCommand(car,detour??unit.stop,detour?4.4:safe);
  const command=recoverDriver(car,unit,unit.stop,vehicles,people,solids,dt,normal);
  const blocked=car.impact>3 || Math.abs(car.speed)<1.0;
  unit.stall=blocked&&!unit.maneuver?unit.stall+dt:0;
  stepVehicle(car,dt,command,solids,vehicles);
}
