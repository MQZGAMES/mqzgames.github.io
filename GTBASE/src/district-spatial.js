const cell=10;
const range=(center,width)=>[Math.floor((center-width*.5-1.10)/cell),Math.floor((center+width*.5+1.10)/cell)];

function grid(items) {
  const sectors=new Map();
  for(const item of items) {
    const [minX,maxX]=range(item.x,item.w);
    const [minZ,maxZ]=range(item.z,item.d);
    for(let x=minX;x<=maxX;x++) for(let z=minZ;z<=maxZ;z++) {
      const id=x+','+z;
      if(!sectors.has(id)) sectors.set(id,[]);
      sectors.get(id).push(item);
    }
  }
  return (x,z)=>sectors.get(Math.floor(x/cell)+','+Math.floor(z/cell))??[];
}

const within=(x,z,area)=>Math.abs(x-area.x)<area.w*.5+.002 && Math.abs(z-area.z)<area.d*.5+.002;
const live=actor=>actor && actor.health!==0 && !actor.seated;

export function districtSpatial(solid,support,volume,doors,groundHeight) {
  const solidsNear=grid(solid);
  const floorsNear=grid(support);
  const volumesNear=grid(volume);
  const entriesNear=grid(doors.map(door=>door.closedSolid));
  const doorById=new Map(doors.map(door=>[door.id,door]));
  const doorClosed=solid=>{
    const door=doorById.get(solid.doorId);
    return !door.breached && door.openAmount<1.06;
  };
  const vehicleSolids=solid.filter(box=>(box.y0??0)<.95 && box.h>.28 && !box.stair);

  function floorAt(x,z,currentY=0) {
    let surface=groundHeight(x,z);
    for(const area of floorsNear(x,z)) {
      if(area.y>surface && area.y<=currentY+.305 && within(x,z,area)) {
        surface=area.y;
      }
    }
    return surface;
  }

  function walkSolids(x,z,base=0) {
    const intersectsBody=part=>!part.stair && (!part.walkSurface||part.h>base+.305) &&
      (part.y0??0)<base+1.72 && part.h>base+.13;
    const found=solidsNear(x,z).filter(intersectsBody);
    for(const collider of entriesNear(x,z)) {
      if(intersectsBody(collider) && doorClosed(collider)) found.push(collider);
    }
    return found;
  }

  function interiorAt(x,z,base=0) {
    let room=null;
    for(const area of volumesNear(x,z)) {
      if(area.floor<=base+.14 && area.ceiling>=base && within(x,z,area) && (!room || area.floor>room.floor)) room=area;
    }
    return room;
  }

  function closedDoorSolids() {
    return doors.map(door=>door.closedSolid).filter(doorClosed);
  }

  function breachDoor(id) {
    const door=doorById.get(id);
    if(!door || !door.private || door.breached) return false;
    door.breached=true;
    door.hold=Infinity;
    return true;
  }

  function updateDoors(dt,actors) {
    for(const door of doors) {
      let opening=door.breached||door.normallyOpen;
      door.hold=Math.max(0,door.hold-dt);
      for(const actor of actors) {
        if(opening || !live(actor)) continue;
        const y=actor.floorY??actor.y??0;
        if(Math.abs(y-door.base)>.64) continue;
        const dx=actor.x-door.x,dz=actor.z-door.z;
        const distance=dx*dx+dz*dz;
        if(distance>3.68) continue;
        const owns=actor.buildingId===door.buildingId && (!door.unitId || actor.unitId===door.unitId);
        const exiting=dx*door.normalX+dz*door.normalZ<-.22;
        if(!door.private || owns || (exiting && distance<2.43) || (door.opened && distance<1.92)) {
          opening=true;
          door.hold=1.1;
        }
      }
      const target=opening||door.hold>0?1.48:0;
      door.openAmount+=(target-door.openAmount)*(1-Math.exp(-dt*13));
      door.opened=door.openAmount>=1.06;
      door.door.rotation.y=door.angle+door.openAmount;
    }
  }

  function resetDoors() {
    for(const door of doors) {
      door.breached=false;
      door.hold=0;
      door.opened=door.normallyOpen;
      door.openAmount=door.normallyOpen?1.48:0;
      door.door.rotation.y=door.angle+door.openAmount;
    }
  }

  return {vehicleSolids,floorAt,walkSolids,interiorAt,closedDoorSolids,breachDoor,updateDoors,resetDoors};
}
