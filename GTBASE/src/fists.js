import {clamp} from './rules.js';

export const FIST_DURATION=.42;
export const FIST_CONTACT_DELAY=.145;
const lift=hipHeight=>.94*hipHeight;
const ease=t=>t*t*(3-2*t);
const mix=(a,b,n)=>a+(b-a)*n;

function strokeAt(elapsed) {
  if(elapsed<.065) return -.32*ease(elapsed/.065);
  if(elapsed<FIST_CONTACT_DELAY){
    return mix(-.32,1,ease((elapsed-.065)/(FIST_CONTACT_DELAY-.065)));
  }
  if(elapsed<.182) return mix(1,.89,(elapsed-FIST_CONTACT_DELAY)/(.182-FIST_CONTACT_DELAY));
  return .89*(1-ease((elapsed-.182)/(FIST_DURATION-.182)));
}

export function poseFists(model,{aim=false,punch=0,pitch=0}={}) {
  if(!aim && punch<=0) return;
  const [right,left]=model.arms;
  const [rightFore, leftFore]=model.forearms;
  const stroke=punch>0?strokeAt(clamp(FIST_DURATION-punch,0,FIST_DURATION)):0;
  const extension=Math.max(0,stroke), windup=Math.max(0,-stroke);
  const finish=clamp(pitch,-.64,.53)*.62;
  const torso=.068+extension*.17-windup*.09;
  model.body.rotation.set(torso,.09+extension*.35-windup*.48,-.019-extension*.041);
  model.body.position.y+=lift(1-Math.cos(torso))-.028;
  model.body.position.z+=lift(-Math.sin(torso))+extension*.07;
  right.rotation.set(mix(-.79,-1.82+finish,extension)+windup*.88,
    .10-extension*.065,mix(.20,-.047,extension)-windup*.31);
  rightFore.rotation.set(mix(-1.16,-.047,extension)-windup*.31,.04,.11-extension*.10);
  left.rotation.set(-.91-extension*.18+finish*.28,-.11,-.18-extension*.02);
  leftFore.rotation.set(-1.04+extension*.17,-.04,-.075);
  model.pistol.visible=false;
}
