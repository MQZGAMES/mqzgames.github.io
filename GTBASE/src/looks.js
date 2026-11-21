/** Clothing, hair and accessory catalogue shared by the shops and by pedestrian variety. */
export const shirtStyles={tee:'Camiseta',tank:'Regata',dress:'Camisa social',none:'Sem camisa'};
export const legStyles={pants:'Calça',shorts:'Bermuda'};
export const shoeStyles={sneakers:'Tênis',flipflops:'Chinelo',dress:'Sapato social'};
export const hairStyles={bald:'Careca',buzz:'Raspado',short:'Curto',afro:'Black power',long:'Comprido',mohawk:'Moicano',cap:'Boné'};
export const beardStyles={none:'Sem barba',stubble:'Por fazer',goatee:'Cavanhaque',mustache:'Bigode',full:'Barba cheia',chevron:'Bigode e cavanhaque'};
export const metals={gold:0xd9b13b,silver:0xc9ccd1,diamond:0xdff5ff};

export const clothColors=[0xf2efe6,0x1f2326,0x2a4f8f,0xb23a33,0x2f6b4c,0xe0b33d,0x7a4a8c,0xe07a3a,0x6f7f8c,0xc9a27a];
export const hairColors=[0x1d1714,0x3b2618,0x6a4325,0xc79a52,0x8e2f1f,0x9a9a96,0x2a4fa0];
export const skinTones=[0xe5b088,0xc18e64,0xb38664,0x9a6a45,0x815438,0x5e3b27];

/**
 * @typedef {{shirt:string,shirtColor:number,legs:string,legColor:number,shoes:string,shoeColor:number,
 *   hair:string,hairColor:number,beard:string,skin:number,glasses:boolean,chain:string,earrings:string,
 *   watch:string,ring:string,height:number,width:number,capColor:number}} Look
 */

/** @returns {Look} */
export function defaultLook() {
  return {shirt:'tee',shirtColor:0x246959,legs:'pants',legColor:0x363844,shoes:'sneakers',shoeColor:0xd2c3a8,
    hair:'cap',hairColor:0x1d1714,beard:'none',skin:0xba7750,glasses:false,chain:'none',earrings:'none',
    watch:'none',ring:'none',height:1,width:1,capColor:0x173b36};
}

/** Uniform for police officers. @returns {Look} */
export function policeLook(skin=0xb98059) {
  return {...defaultLook(),shirt:'dress',shirtColor:0x364c65,legColor:0x263343,shoes:'dress',shoeColor:0x161616,
    hair:'cap',capColor:0x1c2a3c,skin,beard:'none'};
}

/** Deterministic pedestrian look from a seed. @returns {Look} */
export function randomLook(seed) {
  let state=(seed*2654435761)>>>0||1;
  const next=()=>{state^=state<<13;state>>>=0;state^=state>>17;state^=state<<5;state>>>=0;return state/4294967296;};
  const pick=list=>list[Math.floor(next()*list.length)];
  const weighted=pairs=>{let roll=next()*pairs.reduce((a,[,w])=>a+w,0);for(const [value,w] of pairs){roll-=w;if(roll<=0) return value;}return pairs[0][0];};
  return {
    shirt:weighted([['tee',.46],['tank',.2],['dress',.2],['none',.08]]),
    shirtColor:pick(clothColors),
    legs:weighted([['pants',.62],['shorts',.38]]),
    legColor:pick([0x363844,0x24364f,0x5a4a3a,0x2c2c2c,0x7d7466,0x3d5a73,0xa89b84]),
    shoes:weighted([['sneakers',.5],['flipflops',.28],['dress',.22]]),
    shoeColor:pick([0xf0ece2,0x222222,0x8a2f2a,0x2d4f8a,0x5a4332]),
    hair:weighted([['short',.3],['buzz',.18],['bald',.1],['afro',.12],['long',.14],['mohawk',.05],['cap',.11]]),
    hairColor:pick(hairColors.slice(0,6)),
    beard:weighted([['none',.45],['stubble',.18],['goatee',.1],['mustache',.1],['full',.12],['chevron',.05]]),
    skin:pick(skinTones),
    glasses:next()<.14,
    chain:weighted([['none',.82],['silver',.11],['gold',.07]]),
    earrings:weighted([['none',.88],['silver',.06],['gold',.05],['diamond',.01]]),
    watch:weighted([['none',.75],['silver',.17],['gold',.08]]),
    ring:weighted([['none',.85],['silver',.1],['gold',.05]]),
    height:.92+next()*.16,
    width:.9+next()*.25,
    capColor:pick([0x173b36,0x8a2f2a,0x222222,0x2a4f8f,0xe0b33d])
  };
}

/** Sanitises a saved look so a tampered save cannot break the model. @returns {Look} */
export function cleanLook(value) {
  const base=defaultLook();
  if(!value || typeof value!=='object') return base;
  const choose=(key,options)=>Object.hasOwn(options,value[key])?value[key]:base[key];
  const color=key=>Number.isInteger(value[key]) && value[key]>=0 && value[key]<=0xffffff?value[key]:base[key];
  const metal=(key,allowed)=>allowed.includes(value[key])?value[key]:'none';
  return {shirt:choose('shirt',shirtStyles),shirtColor:color('shirtColor'),legs:choose('legs',legStyles),legColor:color('legColor'),
    shoes:choose('shoes',shoeStyles),shoeColor:color('shoeColor'),hair:choose('hair',hairStyles),hairColor:color('hairColor'),
    beard:choose('beard',beardStyles),skin:color('skin'),glasses:value.glasses===true,
    chain:metal('chain',['gold','silver']),earrings:metal('earrings',['gold','silver','diamond']),
    watch:metal('watch',['gold','silver']),ring:metal('ring',['gold','silver']),height:1,width:1,capColor:color('capColor')};
}
