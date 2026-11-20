import { clamp, residence } from './rules.js';

const saveKey='gtbase:progress:1';
export function loadProgress(storage) {
  try {
    const record=JSON.parse((storage??globalThis.localStorage).getItem(saveKey));
    if(!record || record.version!==1 || !Number.isFinite(record.cash) ||
       !Number.isFinite(record.ammo) || !Number.isFinite(record.health)) return null;
    return {
      x:residence.x+2.5,z:residence.z-2.73,
      cash:clamp(Math.floor(record.cash),0,999999),
      armed:record.armed===true,
      equipped:record.equipped===true,
      ammo:clamp(Math.floor(record.ammo),0,360),
      health:clamp(Math.floor(record.health),1,100),
      recruits:Array.isArray(record.recruits)?record.recruits.filter(Number.isInteger).slice(0,3):[]
    };
  } catch {return null;}
}
export function saveProgress(record,storage) {
  try {
    (storage??globalThis.localStorage).setItem(saveKey,JSON.stringify({...record,version:1}));
    return true;
  } catch {return false;}
}
