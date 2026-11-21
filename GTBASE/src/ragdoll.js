import { poseFall } from './models.js';

/**
 * Simple ragdoll: the whole body flies as one tumbling piece with loose, flailing limbs,
 * bounces on the ground, comes to rest lying down and, if still alive, stands back up.
 */
export function launch(actor,vx,vy,vz) {
  const speed=Math.hypot(vx,vz);
  const forward=Math.sin(actor.angle)*vx+Math.cos(actor.angle)*vz;
  const side=Math.cos(actor.angle)*vx-Math.sin(actor.angle)*vz;
  actor.ragdoll={vx,vy,vz,y:actor.ragdoll?.y??0,t:0,rest:0,rising:0,
    spinX:(forward>=0?1:-1)*(2.5+speed*.55),spinZ:-side*.35,tiltX:0,tiltZ:0};
  actor.pushX=0;actor.pushZ=0;
}

/**
 * Advances the ragdoll. blocked(x,z) reports walls. Returns false once the body is standing again.
 * @param {any} actor
 * @param {number} dt
 * @param {number} ground
 * @param {(x:number,z:number)=>boolean} blocked
 */
export function stepRagdoll(actor,dt,ground,blocked) {
  const r=actor.ragdoll;
  if(!r) return false;
  r.t+=dt;
  const model=actor.model;
  const airborne=r.y>.02 || Math.abs(r.vy)>.4;
  const nx=actor.x+r.vx*dt, nz=actor.z+r.vz*dt;
  if(blocked(nx,actor.z)) r.vx*=-.35; else actor.x=nx;
  if(blocked(actor.x,nz)) r.vz*=-.35; else actor.z=nz;
  r.vy-=9.8*dt;
  r.y+=r.vy*dt;
  if(r.y<=0) {
    r.y=0;
    r.vy=Math.abs(r.vy)>2.2?-r.vy*.28:0;
    const friction=Math.exp(-dt*6);
    r.vx*=friction;r.vz*=friction;
    r.spinX*=Math.exp(-dt*7);r.spinZ*=Math.exp(-dt*7);
  }
  r.tiltX+=r.spinX*dt;
  r.tiltZ+=r.spinZ*dt;
  const settled=!airborne && Math.hypot(r.vx,r.vz)<.5;
  if(settled) {
    // Lie flat on whichever side is nearer.
    const target=Math.round(r.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;
    r.tiltX+=(target-r.tiltX)*Math.min(1,dt*8);
    r.tiltZ+=(0-r.tiltZ)*Math.min(1,dt*6);
    r.rest+=dt;
  }
  const lying=Math.sin(r.tiltX)>=0?1:-1;
  if(actor.health>0 && r.rest>1.1) {
    r.rising+=dt/.65;
    const lift=Math.min(1,r.rising);
    const face=Math.sign(Math.sin(r.tiltX))||1;
    r.tiltX=face*Math.PI/2*(1-lift);
    r.tiltZ*=1-lift;
    if(lift>=1) {actor.ragdoll=null;model.root.rotation.set(0,actor.angle,0);return false;}
  }
  model.root.rotation.set(r.tiltX,actor.angle,r.tiltZ);
  model.root.position.set(actor.x,ground+r.y+Math.max(0,-Math.cos(r.tiltX)*Math.cos(r.tiltZ))*1.88+Math.hypot(Math.sin(r.tiltX),Math.sin(r.tiltZ))*.31,actor.z);
  if(airborne || !settled) {
    const phase=r.t*13;
    model.body.position.set(0,0,0);
    model.body.rotation.set(Math.sin(phase*.7)*.25,0,Math.cos(phase*.6)*.2);
    model.arms[0].rotation.set(-1.4+Math.sin(phase)*1.1,0,-.6-Math.cos(phase*.8)*.5);
    model.arms[1].rotation.set(-1.2+Math.cos(phase*1.1)*1.1,0,.6+Math.sin(phase*.9)*.5);
    model.forearms[0].rotation.set(-.4-Math.sin(phase*1.3)*.5,0,0);
    model.forearms[1].rotation.set(-.4-Math.cos(phase*1.2)*.5,0,0);
    model.legs[0].rotation.set(Math.sin(phase*.9)*.9,0,-.2);
    model.legs[1].rotation.set(-Math.sin(phase*.8)*.9,0,.2);
    model.shins[0].rotation.set(.4+Math.abs(Math.sin(phase))*.6,0,0);
    model.shins[1].rotation.set(.4+Math.abs(Math.cos(phase))*.6,0,0);
    model.pistol.visible=false;
    if(model.rifle) model.rifle.visible=false;
  } else poseFall(model,2,lying);
  model.shadow.visible=false;
  return true;
}
