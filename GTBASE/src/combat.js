const epsilon = .00001;
const empty=[];

// The leading slab supplies the contact face as well as the hit distance.
function rayBox(origin,direction,bounds,limit,result) {
  let near=-Infinity,far=Infinity,nearFace=-1,farFace=-1;
  for(let axis=0;axis<3;axis++){
    const value=origin[axis],delta=direction[axis];
    const min=bounds[axis],max=bounds[axis+3];
    if(Math.abs(delta)<epsilon) {
      if(value<min || value>max) return Infinity;
      continue;
    }
    const inverse=1/delta;
    const entering=(delta>0?min-value:max-value)*inverse;
    const leaving=(delta>0?max-value:min-value)*inverse;
    if(entering>near){near=entering;nearFace=axis*2+Number(delta<0);}
    if(leaving<far){far=leaving;farFace=axis*2+Number(delta>0);}
    if(near>far) return Infinity;
  }
  if(far<0 || near>=limit) return Infinity;
  if(near>=0) {
    result.face=nearFace;
    return near;
  }
  if(far>=limit) return Infinity;
  result.face=farFace;
  return Math.max(0,far);
}

function groundDistance(origin,direction,limit,ground) {
  if(!ground) return direction[1]<-epsilon && origin[1]>=0?-origin[1]/direction[1]:Infinity;
  if(direction[1]>epsilon) return Infinity;
  // Refine the first crossing. A callback lets sidewalks and ramps receive marks.
  const heightAt=t=>origin[1]+direction[1]*t-ground(origin[0]+direction[0]*t,origin[2]+direction[2]*t);
  if(heightAt(0)<-.005) return Infinity;
  const step=Math.min(1.3,limit/12);
  if(step<epsilon) return Infinity;
  for(let lower=0;lower<limit;lower+=step){
    let low=lower,high=Math.min(lower+step,limit);
    if(heightAt(high)>0) continue;
    for(let iteration=0;iteration<10;iteration++){
      const middle=(low+high)*.5;
      if(heightAt(middle)>0) low=middle;
      else high=middle;
    }
    return high;
  }
  return Infinity;
}

function scanRay(origin,direction,solids,targets,limit,ground) {
  let nearest=limit,hit=null,solid=null,surface=null,face=-1,rotation=0;
  const result={face:-1};
  for(const box of solids) {
    if(box.off) continue;
    const bounds=box.bounds??[box.x-box.w*.5,box.y0??box.base??0,box.z-box.d*.5,box.x+box.w*.5,box.h,box.z+box.d*.5];
    const distance=rayBox(origin,direction,bounds,nearest,result);
    if(distance>=nearest) continue;
    nearest=distance;
    solid=box;
    surface='solid';
    face=result.face;
  }
  const groundAt=groundDistance(origin,direction,nearest,ground);
  if(groundAt<nearest) {
    nearest=groundAt;
    solid=null;
    surface='ground';
    face=3;
  }
  for(const target of targets) {
    let distance;
    const oriented=target.oriented;
    if(oriented){
      const {center,half,angle}=oriented;
      const dx=origin[0]-center[0],dy=origin[1]-center[1],dz=origin[2]-center[2];
      const sin=Math.sin(angle),cos=Math.cos(angle);
      const position=[cos*dx-sin*dz,dy,sin*dx+cos*dz];
      const ray=[cos*direction[0]-sin*direction[2],direction[1],sin*direction[0]+cos*direction[2]];
      distance=rayBox(position,ray,[-half[0],-half[1],-half[2],half[0],half[1],half[2]],nearest,result);
    } else if(target.bounds) distance=rayBox(origin,direction,target.bounds,nearest,result);
    else continue;
    if(distance>=nearest) continue;
    nearest=distance;
    hit=target;
    solid=null;
    surface='target';
    face=result.face;
    rotation=oriented?.angle??0;
  }
  return {distance:nearest,hit,solid,surface,face,rotation};
}

export function traceShot(origin,direction,solids,targets,limit=52) {
  const {distance,hit}=scanRay(origin,direction,solids,targets,limit,null);
  return {distance,hit};
}

export function traceImpact(origin,direction,solids,targets,limit=52,{ground=null}={}) {
  const {distance,hit,solid,surface,face,rotation}=scanRay(origin,direction,solids,targets,limit,ground);
  const point=origin.map((value,index)=>value+direction[index]*distance);
  let normal=null;
  if(face!==-1){
    normal=[0,0,0];
    normal[Math.floor(face/2)]=face%2?1:-1;
    if(rotation){
      const [x,y,z]=normal,sin=Math.sin(rotation),cos=Math.cos(rotation);
      normal=[cos*x+sin*z,y,-sin*x+cos*z];
    }
  }
  return {distance,hit,point,normal,solid,surface};
}

export function aimShot(eye,look,muzzle,solids,targets,{limit=52,ground=null}={}) {
  const lookLength=Math.hypot(...look);
  const forward=lookLength>epsilon?look.map(value=>value/lookLength):[0,0,1];
  const sight=traceImpact(eye,forward,solids,targets,limit,{ground});
  const delta=sight.point.map((value,index)=>value-muzzle[index]);
  const along=delta.reduce((sum,value,index)=>sum+value*forward[index],0);
  const length=Math.hypot(...delta);
  const direction=along>.025 && length>epsilon?delta.map(value=>value/length):forward;
  return {direction,sight,impact:traceImpact(muzzle,direction,solids,targets,limit,{ground})};
}

export function reachable(origin,target,solids) {
  const delta=target.map((value,index)=>value-origin[index]);
  const length=Math.hypot(...delta);
  if(length<=epsilon) return true;
  const direction=delta.map(value=>value/length);
  return traceShot(origin,direction,solids,empty,length).distance>=length-.01;
}

export function canSee(observer,target,solids,{fov=Math.PI*.72,range=25,eye=1.59,aim=1.25,verticalFov=Math.PI*.84}={}) {
  const dx=target.x-observer.x,dz=target.z-observer.z;
  const distance=Math.hypot(dx,dz);
  const fromY=(observer.ground??0)+eye,toY=(target.ground??0)+aim;
  if(Math.hypot(distance,toY-fromY)>range) return false;
  if(distance>epsilon) {
    const angle=observer.angle??0;
    const facing=(Math.sin(angle)*dx+Math.cos(angle)*dz)/distance;
    if(facing<Math.cos(Math.min(Math.PI,fov*.5))) return false;
  }
  if(verticalFov<Math.PI && Math.abs(Math.atan2(toY-fromY,distance)+(observer.pitch??0))>verticalFov*.5) return false;
  return reachable([observer.x,fromY,observer.z],[target.x,toY,target.z],solids);
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
