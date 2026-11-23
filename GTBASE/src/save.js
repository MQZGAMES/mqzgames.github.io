import { clamp, lajes, residence } from './rules.js';
import { cleanLook } from './looks.js';

const saveKey='gtbase:progress:1';
const whole=(value,max)=>Number.isFinite(value)?clamp(Math.floor(value),0,max):0;
const vehicleModels=['sedan','hatch','wagon','taxi','pickup','van','suv','sport','muscle','luxury','convertible'];
const bikeModels=['street','sport','chopper','scooter'];
const fittedParts=['spoiler','rack','bullbar'];

export function loadProgress(storage) {
  try {
    const record=JSON.parse((storage??globalThis.localStorage).getItem(saveKey));
    if(!record || record.version!==1 || !Number.isFinite(record.cash) ||
       !Number.isFinite(record.ammo) || !Number.isFinite(record.health)) return null;
    const stash=record.stash??{};
    const stored=record.garage;
    const garage=stored && (stored.kind==='car' && vehicleModels.includes(stored.model) || stored.kind==='bike' && bikeModels.includes(stored.model)) &&
      Number.isInteger(stored.color) && stored.color>=0 && stored.color<=0xffffff?{kind:stored.kind,model:stored.model,color:stored.color,
      upgrades:{engine:whole(stored.upgrades?.engine,3),tires:whole(stored.upgrades?.tires,2)},
      fitted:Array.isArray(stored.fitted)?stored.fitted.filter(part=>fittedParts.includes(part)):[]}:null;
    return {
      checkpoint:record.checkpoint==='lajes'?'lajes':'brasa',
      ...(record.checkpoint==='lajes'?lajes.home:{x:residence.x+2.5,z:residence.z-2.73}),
      cash:clamp(Math.floor(record.cash),0,999999),
      armed:record.armed===true,
      equipped:record.equipped===true,
      ammo:clamp(Math.floor(record.ammo),0,360),
      rifle:record.rifle===true,
      rifleAmmo:whole(record.rifleAmmo,900),
      health:clamp(Math.floor(record.health),1,100),
      look:cleanLook(record.look),
      wardrobe:Array.isArray(record.wardrobe)?record.wardrobe.filter(item=>item && typeof item.label==='string' && item.changes && typeof item.changes==='object'):[],
      stash:{weed:whole(stash.weed,999),coke:whole(stash.coke,999),ecstasy:whole(stash.ecstasy,999)},
      garage,
      recruits:Array.isArray(record.recruits)?[...new Set(record.recruits.filter(id=>
        Number.isInteger(id) && id>=0 || typeof id==='string' && /^[\w:-]{1,80}$/.test(id)))]:[]
    };
  } catch {return null;}
}
export function saveProgress(record,storage) {
  try {
    (storage??globalThis.localStorage).setItem(saveKey,JSON.stringify({...record,version:1}));
    return true;
  } catch {return false;}
}
