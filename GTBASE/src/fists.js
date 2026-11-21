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

/**
 * Boxing guard and straight punch. hand 0 throws with the right arm, 1 with the left.
 * The rear foot drives, the hips and shoulders rotate into the punch and the guard hand stays at the chin.
 */
export function poseFists(model,{aim=false,punch=0,pitch=0,hand=0,walking=false}={}) {
  if(!aim && punch<=0) return;
  const lead=model.arms[hand], guard=model.arms[1-hand];
  const leadFore=model.forearms[hand], guardFore=model.forearms[1-hand];
  const mirror=hand===0?1:-1;
  const stroke=punch>0?strokeAt(clamp(FIST_DURATION-punch,0,FIST_DURATION)):0;
  const extension=Math.max(0,stroke), windup=Math.max(0,-stroke);
  const finish=clamp(pitch,-.64,.53)*.62;
  const torso=.07+extension*.2-windup*.08;
  model.body.rotation.set(torso,mirror*(.12+extension*.46-windup*.52),mirror*(-.02-extension*.05));
  model.body.position.y+=lift(1-Math.cos(torso))-.04-extension*.03;
  model.body.position.z+=lift(-Math.sin(torso))+extension*.12;
  // Staggered stance: the punching side's leg stays back and pushes.
  const [rightLeg,leftLeg]=model.legs, [rightShin,leftShin]=model.shins;
  const back=hand===0?rightLeg:leftLeg, front=hand===0?leftLeg:rightLeg;
  const backShin=hand===0?rightShin:leftShin, frontShin=hand===0?leftShin:rightShin;
  if(!walking) {
    front.rotation.set(-.32-extension*.08,0,0);
    frontShin.rotation.set(.34,0,0);
    back.rotation.set(.26+extension*.16,0,0);
    backShin.rotation.set(.18-extension*.1,0,0);
  }
  lead.rotation.set(mix(-.86,-1.66+finish,extension)+windup*.7,mirror*(.10-extension*.08),mirror*mix(.24,-.04,extension)-mirror*windup*.25);
  leadFore.rotation.set(mix(-1.62,-.04,extension)-windup*.2,0,mirror*(.1-extension*.1));
  guard.rotation.set(-.98+extension*.06,-mirror*.12,-mirror*.22);
  guardFore.rotation.set(-1.78,0,-mirror*.08);
  model.pistol.visible=false;
}
