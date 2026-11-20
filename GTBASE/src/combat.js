const epsilon = .00001;

function rayBox(origin,direction,bounds,limit) {
  let near=0,far=limit;
  for(let axis=0;axis<3;axis++){
    const value=origin[axis],delta=direction[axis];
    const min=bounds[axis],max=bounds[axis+3];
    if(Math.abs(delta)<epsilon) {
      if(value<min || value>max) return Infinity;
      continue;
    }
    const a=(min-value)/delta,b=(max-value)/delta;
    near=Math.max(near,Math.min(a,b));
    far=Math.min(far,Math.max(a,b));
    if(near>far) return Infinity;
  }
  return near;
}

export function traceShot(origin,direction,solids,targets,limit=52) {
  let nearest=limit, hit=null;
  for(const box of solids) {
    const bounds=[box.x-box.w*.5,0,box.z-box.d*.5,box.x+box.w*.5,box.h,box.z+box.d*.5];
    nearest=Math.min(nearest,rayBox(origin,direction,bounds,nearest));
  }
  if(direction[1]<-epsilon) nearest=Math.min(nearest,-origin[1]/direction[1]);
  for(const target of targets) {
    const distance=rayBox(origin,direction,target.bounds,nearest);
    if(distance>=nearest) continue;
    nearest=distance;
    hit=target;
  }
  return {distance:nearest,hit};
}

export function reachable(origin,target,solids) {
  const delta=target.map((value,index)=>value-origin[index]);
  const length=Math.hypot(...delta);
  if(length<=epsilon) return true;
  const direction=delta.map(value=>value/length);
  return traceShot(origin,direction,solids,[],length).distance>=length-.01;
}

export function findPunch(player,people,y,solids) {
  let closest=null, best=1.86;
  for(const person of people) {
    if(person.down>0) continue;
    const dx=person.x-player.x,dz=person.z-player.z;
    const distance=Math.hypot(dx,dz);
    const facing=Math.sin(player.angle)*dx+Math.cos(player.angle)*dz;
    if(distance>=best || facing<distance*.36 ||
      !reachable([player.x,y+1,player.z],[person.x,y+1,person.z],solids)) continue;
    closest=person;
    best=distance;
  }
  return closest;
}
