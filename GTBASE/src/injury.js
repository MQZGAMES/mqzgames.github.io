import {clamp} from './rules.js';

export function shotDamage(relativeHeight) {
  if(relativeHeight>1.53) return 54;
  if(relativeHeight>.92) return 32;
  return relativeHeight>.63?24:15;
}

export function impactDamage(speed) {
  return Math.round(clamp(Math.max(0,speed-2.4)**2*.24,0,86));
}

export function wantedUnits(heat) {
  return heat>=36?3:heat>=20?2:heat>0?1:0;
}
