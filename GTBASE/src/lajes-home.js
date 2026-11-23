import * as T from 'three';
import { piece } from './models.js';

/**
 * Furnishes the player's house in Vila das Lajes: a lounge, a kitchen, a bedroom and a bathroom around the
 * central hall (x 95–101, z 37–45). Every room has a light that can be switched, there are two curtains,
 * and a handful of fixtures the player can use. Everything here is visual or a small gameplay hook;
 * walls and the bed/fridge shells are built in the world module.
 */

const warm=0xffe0a6, off=0x625b52;
const roomBounds={sala:{x:[95,98],z:[41,45]},quarto:{x:[98,101],z:[41,45]},cozinha:{x:[98,101],z:[37,41]},banheiro:{x:[95,98],z:[37,41]}};

/**
 * @param {T.Scene} scene
 * @param {any[]} solid
 */
export function furnishLajesHome(scene,solid) {
  const group=new T.Group();
  scene.add(group);
  const add=(shape,color,x,y,z,w,h,d,shiny=false)=>{
    const mesh=piece(group,shape,color,x,y,z,w,h,d,shiny);
    mesh.castShadow=false;
    return mesh;
  };
  const glow=(color,x,y,z,w,h,d)=>{
    const mesh=new T.Mesh(boxGeometry,new T.MeshBasicMaterial({color}));
    mesh.scale.set(w,h,d);mesh.position.set(x,y,z);
    group.add(mesh);
    return mesh;
  };
  const block=(x,z,w,d,h)=>solid.push({x,z,w,d,y0:.04,h,prop:true});
  const floor=.046;

  // Floors and rugs.
  add('box',0xaab9bb,96.55,floor+.004,39,2.9,.012,3.8);          // bathroom tiles
  add('box',0xd8cfb7,99.5,floor+.004,39,2.9,.012,3.8);           // kitchen tiles
  add('box',0x9c4d3c,96.7,floor+.004,43,2.4,.012,1.7);           // lounge rug
  add('box',0x3f6f7b,99.45,floor+.004,43.5,1.5,.012,1.8);        // bedroom rug

  // Lounge: TV on the dividing wall facing the sofa, a low table, a wall calendar.
  add('box',0x1d1f22,97.9,1.28,44.2,.07,.62,1.1);
  const tvScreen=glow(0x15191d,97.855,1.28,44.2,.02,.52,.98);
  add('box',0x6f5842,97.1,.2,43.7,.5,.4,.9);                    // table
  block(97.1,43.7,.5,.9,.4);
  add('box',0xe9dfc7,95.13,1.7,41.3,.03,.34,.26);
  add('box',0x7a3a2b,95.13,1.72,41.3,.032,.08,.26);

  // Kitchen: shelf, hanging pots, a small table and stools.
  add('box',0x7b5a3f,100.78,1.55,39.6,.28,.07,1.5);
  for(const z of [39.1,39.5,39.95]) add('cylinder',0x8d9293,100.76,1.7,z,.07,.12,.07);
  add('box',0x6f5842,99.2,.38,40.15,.95,.05,.7);
  for(const [x,z] of [[98.8,39.8],[99.6,39.8],[98.8,40.6],[99.6,40.6]]) add('box',0x57483a,x,.28,z,.07,.5,.07);
  add('cylinder',0xb89b6d,99.6,.43,41.05,.2,.04,.2);
  block(99.2,40.15,.95,.7,.6);
  const stoveGlow=glow(0x3a2c24,99.1,.915,38.16,.34,.012,.34);

  // Bathroom: shower stall, toilet and a basin mirror.
  add('box',0xbfcdd0,95.65,.09,37.7,1.0,.09,1.0);
  add('box',0x8da9b3,95.15,1.1,37.7,.03,2.0,1.0);
  add('box',0x9ec0c8,95.65,1.1,38.22,1.0,2.0,.03);
  add('cylinder',0xcfd3d4,95.65,2.1,37.2,.06,.28,.06,true);
  add('box',0xf1efe8,97.15,.24,37.62,.38,.4,.62);
  add('box',0xf1efe8,97.15,.62,37.28,.4,.3,.14);
  block(97.15,37.62,.4,.62,.5);
  add('box',0xcfe0e4,96.4,1.55,37.13,.78,.62,.03,true);        // mirror above the basin
  add('box',0xe9e1cf,96.4,1.0,37.13,.5,.1,.04);

  // Bedroom: nightstand, lamp, window and wardrobe door.
  add('box',0x6f5842,100.55,.26,44.4,.42,.5,.42);
  block(100.55,44.4,.42,.42,.5);
  add('box',0x3a352f,100.55,.55,44.4,.1,.12,.1);
  const bedsideShade=glow(off,100.55,.72,44.4,.26,.2,.26);
  add('box',0x7d6a58,98.7,1.0,44.85,.06,1.9,.02);                // wardrobe line on the wall
  add('box',0xe9dfc7,96.2,1.65,44.86,.5,.36,.02);                // photo frame
  add('box',0x9a7f68,96.2,1.65,44.87,.42,.28,.02);

  // Ceiling lamps and switch plates. Plates sit on the wall; lamps are emissive until switched off.
  /** @type {Record<string,{shade:T.Mesh,x:number,y:number,z:number,on:boolean}>} */
  const lights={};
  for(const [room,x,z] of /** @type {[string,number,number][]} */([['sala',96.55,42.9],['cozinha',99.3,39.2],['banheiro',96.6,39.2]])) {
    add('cylinder',0x4a4741,x,2.66,z,.02,.04,.02);
    lights[room]={shade:glow(off,x,2.58,z,.36,.07,.36),x,y:2.5,z,on:false};
  }
  lights.quarto={shade:bedsideShade,x:100.55,y:.9,z:44.4,on:false};
  for(const [x,y,z,w,d] of /** @type {number[][]} */([[95.12,1.3,44.7,.02,.1],[98.5,1.3,37.12,.1,.02],[97.4,1.3,37.12,.1,.02]])) add('box',0xe6e1d3,x,y,z,w,.16,d);

  // Windows: a glass pane each (daylight, hidden when the curtain is drawn) plus two curtain panels.
  /** @type {{open:number,goal:number,panels:T.Mesh[],pane:T.Mesh,span:number,axis:'x'|'z',base:number}[]} */
  const curtains=[];
  function makeWindow(x,y,z,axis,width,height,color) {
    const pane=glow(0xa6d4e6,x,y,z,axis==='x'?.02:width,height,axis==='x'?width:.02);
    const inside=axis==='x'?(x<98?.06:-.06):0;
    add('box',0x4f4741,x,y,z,axis==='x'?.05:width+.14,height+.14,axis==='x'?width+.14:.05);
    const panels=[-1,1].map(()=>add('box',color,x+inside*1.2,y-.02,z,axis==='x'?.05:width*.5,height+.3,axis==='x'?width*.5:.05));
    return {pane,panels,span:width,axis,base:axis==='x'?z:x,open:1,goal:1,anchor:{x:x+inside*1.2,z}};
  }
  curtains.push(makeWindow(95.17,1.55,43.75,'x',1.1,1.1,0xb5513f));  // lounge, west wall
  curtains.push(makeWindow(100.84,1.55,42.1,'x',1.0,1.1,0x4f7f8c)); // bedroom, east wall
  const kitchenWindow=makeWindow(100.84,1.5,39.0,'x',.9,.9,0xd0b777);
  curtains.push(kitchenWindow);

  // Controller state.
  let tv=false,tvFlicker=0;
  const cooldown={fridge:0,stove:0,shower:0};
  const roomLight=new T.PointLight(0xffd7a0,0,9,1.5);
  roomLight.castShadow=false;
  group.add(roomLight);

  const setLight=(room,on)=>{
    lights[room].on=on;
    /** @type {T.MeshBasicMaterial} */(lights[room].shade.material).color.setHex(on?warm:off);
  };
  const say=text=>text;
  /** @type {{id:string,x:number,z:number,reach:number,label:()=>string,use:(hooks:any)=>string}[]} */
  const things=[
    {id:'sala-light',x:95.45,z:44.65,reach:1.2,label:()=>lights.sala.on?'Apagar a luz da sala':'Acender a luz da sala',use:()=>{setLight('sala',!lights.sala.on);return say(lights.sala.on?'Luz da sala acesa.':'Luz da sala apagada.');}},
    {id:'cozinha-light',x:98.5,z:37.55,reach:1.15,label:()=>lights.cozinha.on?'Apagar a luz da cozinha':'Acender a luz da cozinha',use:()=>{setLight('cozinha',!lights.cozinha.on);return say(lights.cozinha.on?'Luz da cozinha acesa.':'Luz da cozinha apagada.');}},
    {id:'banheiro-light',x:97.4,z:37.55,reach:1.0,label:()=>lights.banheiro.on?'Apagar a luz do banheiro':'Acender a luz do banheiro',use:()=>{setLight('banheiro',!lights.banheiro.on);return say(lights.banheiro.on?'Luz do banheiro acesa.':'Luz do banheiro apagada.');}},
    {id:'abajur',x:100.3,z:44.0,reach:1.2,label:()=>lights.quarto.on?'Apagar o abajur':'Acender o abajur',use:()=>{setLight('quarto',!lights.quarto.on);return say(lights.quarto.on?'Abajur aceso.':'Abajur apagado.');}},
    {id:'tv',x:96.9,z:44.0,reach:1.7,label:()=>tv?'Desligar a TV':'Ligar a TV',use:()=>{tv=!tv;tvScreen.material.color.setHex(tv?0x7fc4f5:0x15191d);return say(tv?'A TV está passando um jogo antigo.':'TV desligada.');}},
    {id:'cortina-sala',x:95.7,z:43.75,reach:1.3,label:()=>curtains[0].goal?'Fechar a cortina da sala':'Abrir a cortina da sala',use:()=>{curtains[0].goal=curtains[0].goal?0:1;return say(curtains[0].goal?'Cortina aberta.':'Cortina fechada.');}},
    {id:'cortina-quarto',x:100.3,z:42.3,reach:1.3,label:()=>curtains[1].goal?'Fechar a cortina do quarto':'Abrir a cortina do quarto',use:()=>{curtains[1].goal=curtains[1].goal?0:1;return say(curtains[1].goal?'Cortina aberta.':'Cortina fechada.');}},
    {id:'geladeira',x:100.0,z:38.9,reach:1.1,label:()=>cooldown.fridge>0?'Geladeira (vazia por agora)':'Pegar algo na geladeira',use:hooks=>{
      if(cooldown.fridge>0) return say('A geladeira está quase vazia.');
      cooldown.fridge=90;hooks.heal(20);return say('Você comeu um prato de arroz com ovo. +20 de vida.');}},
    {id:'fogao',x:99.1,z:38.9,reach:1.0,label:()=>cooldown.stove>0?'Fogão (ainda quente)':'Esquentar uma panela',use:hooks=>{
      if(cooldown.stove>0) return say('A panela ainda está quente.');
      cooldown.stove=70;stoveGlow.material.color.setHex(0xff7a35);hooks.heal(12);return say('Café coado e pão na chapa. +12 de vida.');}},
    {id:'chuveiro',x:95.95,z:38.55,reach:1.1,label:()=>cooldown.shower>0?'Chuveiro':'Tomar banho',use:hooks=>{
      if(cooldown.shower>0) return say('Você acabou de tomar banho.');
      cooldown.shower=120;hooks.heal(10);return say('Banho frio e rápido. +10 de vida.');}},
    {id:'vaso',x:97.15,z:38.45,reach:1.0,label:()=>'Dar descarga',use:hooks=>{hooks.flush();return say('Descarga.');}},
    {id:'pia',x:96.4,z:38.15,reach:1.2,label:()=>'Lavar o rosto',use:()=>say('Você lavou o rosto e se olhou no espelho.')}
  ];

  /** @param {{x:number,z:number}} actor */
  function nearest(actor) {
    let best=null,bestGap=Infinity;
    for(const thing of things) {
      const gap=Math.hypot(actor.x-thing.x,actor.z-thing.z);
      if(gap<thing.reach && gap<bestGap) {best=thing;bestGap=gap;}
    }
    return best;
  }
  function roomOf(x,z) {
    for(const [name,{x:[x0,x1],z:[z0,z1]}] of Object.entries(roomBounds)) if(x>=x0 && x<x1 && z>=z0 && z<z1) return name;
    return null;
  }

  function update(dt,actor,inside) {
    cooldown.fridge=Math.max(0,cooldown.fridge-dt);
    cooldown.stove=Math.max(0,cooldown.stove-dt);
    cooldown.shower=Math.max(0,cooldown.shower-dt);
    if(cooldown.stove<=0) stoveGlow.material.color.setHex(0x3a2c24);
    if(tv) {
      tvFlicker+=dt;
      tvScreen.material.color.setHSL(.55+Math.sin(tvFlicker*3.1)*.04,.55,.58+Math.sin(tvFlicker*17)*.06);
    }
    for(const curtain of curtains) {
      curtain.open+=(curtain.goal-curtain.open)*Math.min(1,dt*4);
      // Open: panels shrink to the edges of the window. Closed: they cover the glass.
      const [left,right]=curtain.panels;
      const half=curtain.span*.5,width=Math.max(.08,half*(1-curtain.open*.78));
      const along=curtain.base;
      if(curtain.axis==='x') {
        left.scale.z=right.scale.z=width;
        left.position.z=along-half+width/2;
        right.position.z=along+half-width/2;
      }
      curtain.pane.visible=curtain.open>.45;
    }
    // One real light follows the lamp nearest to the player, so the interior reads warm without extra draw cost.
    let target=null,gap=Infinity;
    if(inside) for(const light of Object.values(lights)) {
      if(!light.on) continue;
      const d=Math.hypot(actor.x-light.x,actor.z-light.z);
      if(d<gap) {gap=d;target=light;}
    }
    if(target) roomLight.position.set(target.x,target.y,target.z);
    roomLight.intensity+=((target?18:0)-roomLight.intensity)*Math.min(1,dt*6);
  }

  function reset() {
    for(const room of Object.keys(lights)) setLight(room,room==='sala');
    tv=false;tvScreen.material.color.setHex(0x15191d);
    for(const curtain of curtains) {curtain.goal=curtain.open=1;}
    cooldown.fridge=cooldown.stove=cooldown.shower=0;
  }
  reset();
  return {things,nearest,update,reset,roomOf,lights,curtains,get tvOn(){return tv;}};
}

const boxGeometry=new T.BoxGeometry(1,1,1);
