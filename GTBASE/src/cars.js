import * as T from 'three';
import { combineParts, contact, meshes, paintMat, piece } from './models.js';
import { groundHeight } from './contact.js';
import { registerShape } from './vehicle.js';

/**
 * Car catalogue. Lengths in metres; z points forward, y up. cabin.base/top are [rear, front] z of the
 * glasshouse at the belt line and at the roof. seats are [x, z] hip positions; the first one drives.
 * handling.top is m/s, accel m/s², grip the lateral damping, mass the collision weight.
 */
export const carModels={
  sedan:{name:'Brasa',category:'dia a dia',length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,
    cabin:{base:[-1.64,.90],top:[-1.20,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,
    handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[0xae4930,0x429277,0xc7a652,0x586e9c,0x8a4d45,0xd8d2c4,0x2f3436]},
  hatch:{name:'Pulga',category:'dia a dia',length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,
    cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[.38,.18],[-.38,.18],[.38,-.86],[-.38,-.86]],doors:4,
    handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[0xe19552,0x6aa6b8,0xd8d2c4,0xb53a3a,0x8fb05a]},
  wagon:{name:'Perua',category:'dia a dia',length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3.0,
    cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[.42,.1],[-.42,.1],[.42,-1.0],[-.42,-1.0]],doors:4,
    handling:{top:26,accel:14,grip:8,mass:1.18},palette:[0x95877f,0x4e7c89,0x7d6a4f,0xc6b9a0],extras:['roofRack']},
  taxi:{name:'Táxi',category:'dia a dia',length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,
    cabin:{base:[-1.64,.90],top:[-1.20,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,
    handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[0xe8c547],extras:['taxi']},
  pickup:{name:'Picape',category:'utilitário',length:5.3,width:2.0,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,
    cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[.44,-.02],[-.44,-.02]],doors:2,
    handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[0x6b7a5a,0x8a2f2a,0xd5cfc2,0x2f4f6f,0x3a3a3a],extras:['bed']},
  van:{name:'Furgão',category:'utilitário',length:5.15,width:2.0,sill:.55,belt:1.06,roof:2.0,wheel:.41,wheelbase:3.15,
    cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[.45,.85],[-.45,.85]],doors:2,
    handling:{top:22,accel:11,grip:7,mass:1.6},palette:[0xe6e2d6,0x9fb7c5,0xc9b37a,0x6c7f63],extras:['box']},
  suv:{name:'Jipão',category:'luxo / utilitário',length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,
    cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[.45,.05],[-.45,.05],[.45,-1.0],[-.45,-1.0]],doors:4,
    handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[0x1f2a30,0xd9d6cf,0x5c3b2e,0x395b4a],extras:['roofRack','chrome']},
  sport:{name:'Faísca',category:'esportivo',length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,
    cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[.4,-.28],[-.4,-.28]],doors:2,
    handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[0xd93b2b,0xf2c230,0x2f6fd6,0xf4f1ea,0x26292b],extras:['spoiler']},
  muscle:{name:'Trovão',category:'esportivo',length:4.95,width:2.0,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,
    cabin:{base:[-1.3,.5],top:[-1.0,-.02]},seats:[[.42,-.45],[-.42,-.45]],doors:2,
    handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[0x1d1f22,0x7d1f1f,0xd36a2a,0x2d5d3f],extras:['scoop','stripes']},
  luxury:{name:'Imperador',category:'luxo',length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,
    cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[.44,.12],[-.44,.12],[.44,-1.08],[-.44,-1.08]],doors:4,
    handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[0x141618,0xe5e2da,0x3b3f45,0x4a2328],extras:['chrome']},
  convertible:{name:'Brisa',category:'luxo / esportivo',length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,
    cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[.4,-.12],[-.4,-.12],[.4,-1.0],[-.4,-1.0]],doors:2,open:true,
    handling:{top:34,accel:19,grip:9,mass:1.05},palette:[0x8fd1e8,0xe9e3d0,0xb52a3c,0x1c3f6e],extras:['chrome']}
};

/** Motorcycle variants share the rider pose; handling differs. */
export const bikeModels={
  street:{name:'Rua',handling:{top:31,accel:19.7,grip:13.5,mass:.39}},
  sport:{name:'Raio',handling:{top:40,accel:24,grip:14.5,mass:.36}},
  chopper:{name:'Estradeira',handling:{top:29,accel:15,grip:12,mass:.45}},
  scooter:{name:'Mobilete',handling:{top:19,accel:10,grip:13,mass:.28}}
};

for(const [id,spec] of Object.entries(carModels)) {
  registerShape('car:'+id,{width:spec.width/2+.02,length:spec.length/2+.01,radius:spec.width/2-.0,
    offsets:[-(spec.length/2-spec.width/2),0,spec.length/2-spec.width/2],mass:spec.handling.mass});
}

const glassBase=new T.MeshStandardMaterial({color:0x2c4b57,roughness:.12,metalness:.35,flatShading:true,
  side:T.DoubleSide,transparent:true,opacity:.5,depthWrite:false});

/** Builds a car from the catalogue; police adds the light bar. */
export function buildCar(scene,model='sedan',color,police=false) {
  const spec=model==='tow'?{...carModels.pickup,name:'Guincho',extras:['bed','tow']}:carModels[model]??carModels.sedan;
  const tint=color??spec.palette[0];
  const {length:L,width:W,sill,belt,roof,wheel:R,wheelbase:WB}=spec;
  const half=L/2, extras=spec.extras??[];
  const [b0,b1]=spec.cabin.base, [t0,t1]=spec.cabin.top;
  const root=new T.Group();
  contact(root,W/2+.17,half+.07);
  const body=new T.Group();
  root.add(body);
  const add=(shape,shade,x,y,z,w,h,d,shiny=false)=>piece(body,shape,shade,x,y,z,w,h,d,shiny);
  const chrome=extras.includes('chrome');
  // Underbody, side skirts, body shell, bonnet and boot.
  add('box',0x252a2d,0,(R*.32+sill+.06)/2,0,W-.44,sill+.06-R*.32,L-.9);
  for(const side of [-1,1]) add('box',0x2b3033,side*(W/2-.07),sill-.06,0,.12,.22,Math.max(.4,WB-2*R-.12));
  // Open passenger well and wheel arches; the seats extend below the window line.
  add('box',0x393739,0,sill,0,W-.44,.075,L-.35);
  for(const side of [-1,1]) {
    for(const [start,end] of [[-half,-WB/2-R],[-WB/2+R,WB/2-R],[WB/2+R,half]]) {
      if(end>start) add('box',tint,side*(W/2-.055),(sill+belt)/2,(start+end)/2,.11,belt-sill,end-start,true);
    }
    for(const axle of [-WB/2,WB/2]) {
      const arch=Math.min(belt-.05,2*R+.03);
      add('box',tint,side*(W/2-.055),(arch+belt)/2,axle,.11,belt-arch,2*R,true);
    }
  }
  for(const end of [-1,1]) add('box',tint,0,(sill+belt)/2,end*(half-.09),W-.04,belt-sill,.18,true);
  const hoodLength=half-b1-.03;
  const hood=add('box',tint,0,belt+.005,(b1+half)/2,W-.04,.15,hoodLength,true);
  if(!extras.includes('bed') && !extras.includes('box') && half+b0>.25) add('box',tint,0,belt-.005,(b0-half)/2,W-.05,.14,half+b0-.02,true);
  // Glasshouse.
  const inset=W/2-.07, top=W/2-.27;
  const glassMaterial=glassBase.clone();
  let cabin;
  if(spec.open) {
    const shield=new T.BufferGeometry();
    shield.setAttribute('position',new T.Float32BufferAttribute([-inset,belt,b1, inset,belt,b1, top,roof,t1, -top,roof,t1],3));
    shield.setIndex([0,1,2,0,2,3]);
    shield.computeVertexNormals();
    cabin=new T.Mesh(shield,glassMaterial);
    add('box',0x2c2f31,0,roof,t1,W-.5,.06,.07);
  } else {
    const geometry=new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute([
      -inset,belt-.015,b0, inset,belt-.015,b0, inset,belt-.015,b1, -inset,belt-.015,b1,
      -top,roof,t0, top,roof,t0, top,roof,t1, -top,roof,t1],3));
    geometry.setIndex([0,4,5,0,5,1, 1,5,6,1,6,2, 2,6,7,2,7,3, 3,7,4,3,4,0, 4,7,6,4,6,5]);
    geometry.computeVertexNormals();
    cabin=new T.Mesh(geometry,glassMaterial);
    add('box',tint,0,roof+.035,(t0+t1)/2,top*2+.02,.07,t1-t0+.08,true);
    // Pillars keep the roof attached through the tinted glass.
    const pillar=(z0,z1,thick)=>{
      const dy=roof-belt, dz=z1-z0;
      for(const side of [-1,1]) {
        add('box',tint,side*(inset+top)/2,(belt+roof)/2,(z0+z1)/2,.08,Math.hypot(dy,dz),thick,true).rotation.x=Math.atan2(dz,dy);
      }
    };
    pillar(b1,t1,.08);
    pillar(b0,t0,.12);
    if(spec.doors===4) {
      const bz=(spec.seats[0][1]+spec.seats[2][1])/2+.12;
      for(const side of [-1,1]) add('box',tint,side*(inset+top)/2,(belt+roof)/2,bz,.08,roof-belt,.1,true);
    }
  }
  cabin.renderOrder=2;
  body.add(cabin);
  // Interior.
  const hip=Math.min(belt-.26,roof-.99);
  const backHigh=Math.min(.62,roof-belt-.02+ .3);
  for(const [x,z] of spec.seats) {
    add('cloth',0x353330,x,hip+.06+backHigh,z-.235,.31,.16,.14);
    add('cloth',0x3a3733,x,hip-.10,z+.12,.51,.14,.54);
    add('box',0x3a3733,x,hip+backHigh/2,z-.235,.5,backHigh,.13);
  }
  add('box',0x2b2a28,0,belt+.045,b1-.24,W-.26,.14,.34);
  const wheelDriver=add('cylinder',0x1d1d1d,spec.seats[0][0],belt+.07,spec.seats[0][1]+.42,.17,.03,.17);
  wheelDriver.rotation.x=Math.PI/2-.45;
  add('cloth',0x20262a,0,hip+.02,(b0+b1)*.5,.19,.23,Math.min(1.25,b1-b0));
  for(const side of [-1,1]){
    add('box',0x655e56,side*(W/2-.15),(sill+belt)/2,(b0+b1)/2,.08,.085,b1-b0);
    add('box',0xb65e24,side*(W*.5-.13),belt-.205,half+.006,.12,.064,.032,true);
    add('box',0xc5bfb0,side*(W*.5-.26),sill-.07,-half-.036,.12,.076,.09,true);
  }
  add('cloth',0x252a2d,0,belt-.21,half+.009,W*.41,.13,.026);
  for(let slat=0;slat<3;slat++) add('box',0x746f66,0,belt-.25+slat*.04,half+.026,W*.36,.013,.014,true);
  // Front and rear faces.
  add('box',0x333539,0,belt-.24,half+.004,W*.44,.14,.05);
  add('box',0xc8bfac,0,sill+.035,half+.006,W*.98,.1,.045,true);
  add('box',0xc8bfac,0,sill+.025,-half-.006,W*.98,.1,.05,true);
  add('box',0xfef0bb,0,(sill+belt)/2,-half-.008,.4,.14,.03);
  for(const side of [-1,1]) {
    add('box',0xffe3a4,side*(W/2-.29),belt-.165,half+.006,.43,.17,.055,true);
    add('box',0xa82e22,side*(W/2-.3),belt-.165,-half-.006,.48,.17,.055,true);
    if(!spec.open) add('box',0x2c393c,side*(W/2+.03),belt+.07,b1-.06,.1,.09,.16);
    // Door seams and handles.
    const seams=spec.doors===4?[b1,(spec.seats[0][1]+spec.seats[2][1])/2+.12,b0+.05]:[b1,spec.seats[0][1]-.62];
    for(const seam of seams) add('box',0x1c2022,side*(W/2+.005),(sill+belt)/2,seam,.012,belt-sill-.02,.025);
    for(let i=0;i<seams.length-1;i++) add('box',0xc7bba4,side*(W/2+.01),belt-.05,seams[i+1]+Math.min(.21,(seams[i]-seams[i+1])*.25),.035,.04,.22,true);
    if(chrome) add('box',0xd9d9d2,side*(W/2+.008),belt-.03,0,.02,.03,L-.5,true);
  }
  // Model details.
  if(extras.includes('taxi')) {
    add('box',0xf7f1d8,0,roof+.16,(t0+t1)/2,.68,.2,.26);
    add('box',0x2a6a43,0,(sill+belt)/2+.06,0,W+.012,.08,L*.6,true);
  }
  if(extras.includes('spoiler')) {
    for(const side of [-1,1]) add('box',0x1b1c1e,side*.6,belt+.14,-half+.28,.06,.22,.08);
    add('box',tint,0,belt+.27,-half+.25,W-.2,.05,.32,true);
  }
  if(extras.includes('scoop')) add('box',0x202224,0,belt+.12,(b1+half)/2+.1,.5,.12,.62);
  if(extras.includes('stripes')) for(const side of [-1,1]) {
    add('box',0xf1efe6,side*.2,belt+.083,(b1+half)/2,.16,.012,hoodLength);
    add('box',0xf1efe6,side*.2,roof+.072,(t0+t1)/2,.16,.012,t1-t0);
  }
  if(extras.includes('roofRack')) for(const side of [-1,1]) add('box',0x26292b,side*(top-.08),roof+.1,(t0+t1)/2,.05,.06,t1-t0+.2);
  if(extras.includes('tow')){
    const boom=add('box',0x454641,0,belt+.35,-L*.30,.135,.16,1.55,true);
    boom.rotation.x=-.32;
    add('box',0x363838,0,belt+.18,-L*.34,.73,.51,.35);
    add('box',0xe59b29,0,roof+.10,(t0+t1)/2,.68,.13,.28,true);
    add('box',0x676860,0,belt-.17,-half-.19,.91,.13,.33,true);
  }
  if(extras.includes('bed')) {
    for(const side of [-1,1]) add('box',tint,side*(W/2-.04),belt+.22,(b0-half)/2,.08,.44,half+b0,true);
    add('box',tint,0,belt+.22,-half+.04,W,.44,.08,true);
    add('box',tint,0,belt+.22,b0-.04,W,.44,.08,true);
    add('box',0x2d2b29,0,belt+.01,(b0-half)/2,W-.16,.02,half+b0-.12);
  }
  if(extras.includes('box')) {
    add('box',tint,0,(belt+2.15)/2,(b0+.25-half)/2,W,2.15-belt,half+b0+.25,true);
    add('box',0x2a2a2a,0,2.15-.05,(b0+.25-half)/2,W+.02,.04,half+b0+.27);
    for(const side of [-1,1]) add('box',0x1c2022,side*.005,(belt+2.1)/2,-half-.004,.015,2.0-belt,.02);
  }
  const wheels=[];
  for(const side of [-1,1]) {
    for(const z of [-WB/2,WB/2]) {
      const axle=new T.Group();
      axle.position.set(side*(W/2-.17),R,z);
      root.add(axle);
      piece(axle,'cylinder',0x252628,0,0,0,R,.24,R).rotation.z=Math.PI/2;
      piece(axle,'cylinder',chrome?0xd5d5cf:0xa8a7a4,side*.115,0,0,R*.53,.02,R*.53,true).rotation.z=Math.PI/2;
      wheels.push(axle);
    }
  }
  // Driver's door swings open on entry.
  const door=new T.Group();
  const doorEnd=spec.doors===4?(spec.seats[0][1]+spec.seats[2][1])/2+.12:spec.seats[0][1]-.62;
  door.position.set(W/2+.004,0,b1);
  piece(door,'box',tint,0,(sill+belt)/2+.04,-(b1-doorEnd)/2,.036,belt-sill-.1,b1-doorEnd,true);
  combineParts(door,meshes(door),paintMat);
  body.add(door);
  // Bumpers are separate so they can hang and fall off.
  const bumpers=[1,-1].map(end=>{
    const group=new T.Group();
    group.position.set(0,sill-.09,end*(half-.2));
    piece(group,'box',chrome?0xcfcfc8:0x2b3033,0,0,0,W-.08,.3,.42,chrome);
    combineParts(group,meshes(group),chrome?paintMat:undefined);
    body.add(group);
    return {mesh:group,end,state:0,home:group.position.clone(),damage:0,velocity:new T.Vector3(),spin:0};
  });
  const lamps=[];
  if(police) {
    lamps.push(add('box',0xed4736,-.33,roof+.13,(t0+t1)/2,.55,.14,.25));
    lamps.push(add('box',0x53b9ee,.33,roof+.13,(t0+t1)/2,.55,.14,.25));
  }
  const bodyParts=meshes(body).filter(part=>part!==cabin && part!==hood && !lamps.includes(part));
  combineParts(body,bodyParts.filter(part=>part.material.metalness===0));
  combineParts(body,bodyParts.filter(part=>part.material.metalness>0),paintMat);
  for(const axle of wheels) combineParts(axle,meshes(axle));
  body.traverse(object=>{if(object instanceof T.Mesh) object.castShadow=false;});
  scene.add(root);
  return withRepair({root,body,cabin,cracks:[],wheels,lamps,hood,bumpers,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,
    steer:0,impact:0,stolen:false,abandoned:0,driver:null,routeIndex:-1,kind:'car',model,shape:model==='tow'?'car:pickup':'car:'+model,spec,
    color:tint,handling:spec.handling,rider:null,door,doorTime:0,wheelSpin:0,handlebar:null,
    wheelRadius:R,wheelbase:WB,halfWidth:W/2,halfLength:half,seatHip:hip,flat:[false,false,false,false],
    fire:0,burning:false,wrecked:false,damageFront:0,damageRear:0});
}

/** Vehicles gain gameplay fields at run time, so they are typed loosely. @param {object} car @returns {any} */
function withRepair(car) {
  const vehicle=/** @type {any} */(car);
  vehicle.repair=()=>repairCar(vehicle);
  return vehicle;
}

const burnt=new T.MeshStandardMaterial({color:0x1f1c1a,roughness:1,metalness:.05});

/** Blackens the shell of an exploded vehicle; the originals come back on repair. */
export function charCar(car) {
  car.originals??=new Map();
  car.root.traverse(object=>{
    if(!(object instanceof T.Mesh) || object===car.cabin || object.material===burnt) return;
    if(object.parent===car.root && object.geometry.type==='CircleGeometry') return;
    car.originals.set(object,object.material);
    object.material=burnt;
  });
  if(car.cabin) car.cabin.visible=false;
  for(const mark of car.cracks) mark.visible=false;
}

/** Restores tyres, bumpers, paint and glass after a reset. */
export function repairCar(car) {
  car.flat?.fill(false);
  for(const [mesh,material] of car.originals??[]) mesh.material=material;
  car.originals?.clear();
  if(car.cabin) car.cabin.visible=true;
  for(const bumper of car.bumpers??[]) {
    car.body.add(bumper.mesh);
    bumper.mesh.position.copy(bumper.home);
    bumper.mesh.rotation.set(0,0,0);
    bumper.state=0;bumper.damage=0;
  }
  Object.assign(car,{damageFront:0,damageRear:0,burning:false,wrecked:false,fire:0,wreckClock:0});
}

export function coupe(scene,color,police=false) {
  return buildCar(scene,'sedan',color,police);
}

/** Motorcycles: street, sport (fairing), chopper (raked fork, long) and scooter (small wheels, floorboard). */
export function motorcycle(scene,color,variant='street') {
  const spec=bikeModels[variant]??bikeModels.street;
  const root=new T.Group();
  contact(root,.42,1.07*1.07);
  const body=new T.Group();
  root.add(body);
  const add=(shape,shade,x,y,z,w,h,d)=>piece(body,shape,shade,x,y,z,w,h,d);
  const wheelR=variant==='scooter'?.25:variant==='chopper'?.36:.33;
  const axles=variant==='chopper'?[-.86,.98]:variant==='scooter'?[-.62,.66]:[-.73,.78];
  if(variant==='scooter') {
    add('box',color,0,.42,-.25,.38,.34,.8);
    add('box',0x2a2c2d,0,.34,.2,.36,.08,.55);
    add('box',color,0,.72,.52,.34,.68,.16);
    add('box',0x24292a,0,.78,-.32,.34,.12,.55);
    add('box',0xd4b58a,0,.92,.66,.22,.14,.08);
  } else if(variant==='chopper') {
    add('box',0x3b3d3c,0,.46,-.1,.3,.34,.7);
    add('sphere',color,0,.86,.32,.22,.18,.5);
    add('box',0x24292a,0,.68,-.42,.38,.1,.62);
    add('box',color,0,.62,-.86,.3,.16,.5);
    add('box',0xd6d6d0,.22,.34,-.42,.1,.1,.95);
    add('box',0xd4b58a,0,.9,1.02,.22,.2,.1);
  } else {
    add('box',0x3b3d3c,0,.48,-.04,.32,.38,.70);
    add('sphere',color,0,.89,.34,.24,.23,.46);
    add('box',0x24292a,0,.85,-.36,.36,.13,.59);
    add('box',color,0,.65,-.70,.32,.17,.58);
    add('box',0xd4b58a,0,.80,.88,.25,.21,.11);
    if(variant==='sport') {
      add('box',color,0,.72,.62,.42,.5,.5);
      add('box',0x2c4b57,0,1.04,.72,.34,.18,.06);
      add('box',color,0,.8,-.72,.28,.12,.5);
    }
  }
  add('box',0x9f352c,0,.70,axles[0]-.25,.20,.11,.11);
  for(const side of [-1,1]){
    const stalk=add('box',0x3a4040,side*.27,1.28,.47,.035,.22,.035);
    stalk.rotation.z=-side*.40;
    add('cloth',0x424848,side*.32,1.39,.47,.17,.078,.056);
    add('box',0xb1763c,side*.19,.76,axles[0]-.17,.11,.073,.08);
  }
  const handlebar=new T.Group();
  handlebar.position.set(0,.76,.38);
  piece(handlebar,'box',0x3c4242,0,.44,-.09,variant==='chopper'?.84:.684,.057,.059);
  piece(handlebar,'box',0x677579,0,.25,.02,.061,.39,.058).rotation.x=-.46;
  combineParts(handlebar,meshes(handlebar));
  body.add(handlebar);
  add('box',0x535552,0,.39,-.22,.52,.07,.11);
  if(variant!=='scooter') add('box',0xb0aaa0,.232,.36,-.54,.12,.12,.72);
  const hood=new T.Mesh(new T.BoxGeometry(.01,.01,.01));
  hood.visible=false;
  body.add(hood);
  const wheels=[];
  for(const z of axles) {
    const wheel=new T.Group();
    wheel.position.set(0,wheelR,z);
    piece(wheel,'cylinder',0x252629,0,0,0,wheelR,.12,wheelR).rotation.z=Math.PI/2;
    piece(wheel,'cylinder',0x858485,0,0,0,wheelR*.62,.14,wheelR*.62).rotation.z=Math.PI/2;
    combineParts(wheel,meshes(wheel));
    wheels.push(wheel);
    body.add(wheel);
    const rake=z>0?(variant==='chopper'?-.62:-.21):.46;
    add('box',0x5b6160,0,wheelR+.22,z+(variant==='chopper'&&z>0?-.18:0),.09,variant==='chopper'&&z>0?.8:.49,.085).rotation.x=rake;
  }
  combineParts(body,meshes(body).filter(mesh=>mesh!==hood));
  const door=new T.Group();
  scene.add(root);
  return withRepair({root,body,cabin:null,cracks:[],wheels,lamps:[],hood,bumpers:[],speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,
    steer:0,impact:0,stolen:false,abandoned:0,driver:null,routeIndex:-1,kind:'bike',model:variant,shape:'bike',spec,
    color,handling:spec.handling,rider:null,door,doorTime:0,wheelSpin:0,handlebar,
    wheelRadius:wheelR,wheelbase:axles[1]-axles[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[false,false],
    fire:0,burning:false,wrecked:false,damageFront:0,damageRear:0});
}

const seatPoint=new T.Vector3(), seatTurn=new T.Quaternion();
/** Seats a person: seat 0 drives, 1 is the front passenger, 2 and 3 the rear bench. */
export function seatPerson(person,car,seat) {
  const spot=car.spec.seats?.[seat]??car.spec.seats?.[car.spec.seats.length-1];
  if(!spot) return;
  const [x,seatZ]=spot;
  const [rearGlass,frontGlass]=car.spec.cabin.top;
  const z=car.spec.open?seatZ:Math.max(rearGlass+.07,Math.min(frontGlass-.03,seatZ));
  const scale=person.root.scale.y||1;
  car.root.updateMatrixWorld(true);
  person.root.position.copy(car.body.localToWorld(seatPoint.set(x,Math.min(car.seatHip,car.spec.roof-1.02*scale)-.94*scale,z)));
  person.root.quaternion.copy(car.body.getWorldQuaternion(seatTurn));
  person.root.visible=true;
  person.shadow.visible=false;
  person.pistol.visible=false;
  if(person.rifle) person.rifle.visible=false;
  const low=car.spec.roof-car.seatHip<1.05;
  person.body.position.set(0,0,0);
  person.body.rotation.set(-.12,0,0);
  for(let i=0;i<2;i++) {
    person.legs[i].rotation.set(low?-1.52:-1.44,0,0);
    person.shins[i].rotation.set(low?1.04:1.26,0,0);
    if(seat===0) {
      person.arms[i].rotation.set(-.62,0,(i?-1:1)*.18);
      person.forearms[i].rotation.set(-.85,0,0);
    } else {
      person.arms[i].rotation.set(-.32,0,(i?-1:1)*.08);
      person.forearms[i].rotation.set(-1.05,0,0);
    }
  }
}

let crackMaterial=null;
const crackGeometry=new T.PlaneGeometry(.28,.28);
const crackNormal=new T.Vector3(), crackCenter=new T.Vector3(), crackLocal=new T.Vector3();
function makeCrackMaterial() {
  const canvas=document.createElement('canvas');
  canvas.width=canvas.height=128;
  const ctx=canvas.getContext('2d');
  ctx.strokeStyle='rgba(235,242,240,.9)';
  ctx.lineWidth=1.6;
  ctx.beginPath();
  for(let i=0;i<11;i++) {
    const a=i/11*Math.PI*2+Math.sin(i*7.1)*.2;
    ctx.moveTo(64,64);
    for(let step=1;step<=4;step++) {
      ctx.lineTo(64+Math.cos(a+Math.sin(step*3.1+i)*.12)*step*14,64+Math.sin(a+Math.cos(step*2.3+i)*.12)*step*14);
    }
  }
  for(const r of [9,20,33]) {
    ctx.moveTo(64+r,64);
    for(let i=1;i<=24;i++) ctx.lineTo(64+Math.cos(i/24*Math.PI*2)*r*(.9+Math.sin(i*5.3)*.1),64+Math.sin(i/24*Math.PI*2)*r*(.9+Math.sin(i*5.3)*.1));
  }
  ctx.stroke();
  ctx.fillStyle='rgba(250,250,245,.95)';
  ctx.beginPath();ctx.arc(64,64,3.2,0,Math.PI*2);ctx.fill();
  const map=new T.CanvasTexture(canvas);
  map.colorSpace=T.SRGBColorSpace;
  return new T.MeshBasicMaterial({map,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,side:T.DoubleSide});
}

/** Leaves a spider-web crack where a bullet went through the glass; keeps the eight newest. */
export function crackGlass(car,point) {
  if(!car.cabin || !point) return;
  crackMaterial??=makeCrackMaterial();
  car.root.updateMatrixWorld(true);
  crackLocal.set(point[0],point[1],point[2]);
  car.body.worldToLocal(crackLocal);
  const [t0,t1]=car.spec.cabin.top;
  crackCenter.set(0,(car.spec.belt+car.spec.roof)/2,(t0+t1)/2);
  crackNormal.subVectors(crackLocal,crackCenter);
  crackNormal.y*=.35;
  crackNormal.normalize();
  const mark=new T.Mesh(crackGeometry,crackMaterial);
  mark.position.copy(crackLocal).addScaledVector(crackNormal,.015);
  mark.lookAt(crackLocal.clone().add(crackNormal));
  mark.rotation.z=Math.random()*Math.PI*2;
  mark.renderOrder=3;
  car.body.add(mark);
  car.cracks.push(mark);
  if(car.cracks.length>8) car.cracks.shift().removeFromParent();
}

/** Local box around the glasshouse, for bullet tests: [centerZ, halfZ, centerY, halfY, halfX]. */
export function glassBox(car) {
  const {belt,roof,width,cabin}=car.spec;
  const z0=Math.min(cabin.base[0],cabin.top[0]), z1=Math.max(cabin.base[1],cabin.top[1]);
  return {z:(z0+z1)/2,halfZ:(z1-z0)/2,y:(belt+roof)/2+.02,halfY:(roof-belt)/2,halfX:width/2-.1};
}

/** Places the car on the ground, steers wheels and shows hood, bumper and tyre damage. */
export function poseCar(car, dt, steer = 0) {
  const sx=Math.sin(car.angle),sz=Math.cos(car.angle);
  const bike=car.kind==='bike';
  let front=0,back=0,left=0,right=0;
  const heights=car.wheels.map(wheel=>{
    const {x,z}=wheel.position;
    const y=groundHeight(car.x+x*sz+z*sx,car.z-x*sx+z*sz);
    if(z>0) front+=y; else back+=y;
    if(x<0) left+=y; else right+=y;
    return y;
  });
  const ground=(front+back)/car.wheels.length;
  car.root.rotation.y=car.angle;
  const flats=car.flat??[];
  const sag=bike?0:((flats[0]||flats[2]?1:0)-(flats[1]||flats[3]?1:0))*.05;
  car.body.rotation.x=-Math.atan2((front-back)/(bike?1:2),car.wheelbase??2.64);
  const lean=bike?(car.integrity<=0?1.25:-steer*Math.min(.53,Math.abs(car.speed)*.039)):steer*Math.min(.09,Math.abs(car.speed)*.004);
  const camber=bike?0:Math.atan2((right-left)*.5,(car.halfWidth??.97)*2)+sag;
  car.body.rotation.z+=(lean+camber-car.body.rotation.z)*(dt>0?Math.min(1,dt*(bike?7:13)):1);
  car.doorTime=Math.max(0,car.doorTime-dt);
  car.door.rotation.y=(bike?1:-1)*Math.sin(Math.min(1,car.doorTime/.65)*Math.PI)*1.06;
  const radius=car.wheelRadius??.408;
  const tilt=bike?car.body.rotation.z:0;
  car.root.position.set(car.x,ground+(bike?Math.abs(Math.sin(tilt))*.06:0),car.z);
  if(car.handlebar) car.handlebar.rotation.y=steer*.22;
  car.wheelSpin=(car.wheelSpin+car.speed*dt/radius)%(Math.PI*2);
  car.wheels.forEach((wheel,i)=>{
    const flat=flats[i];
    if(!bike) wheel.position.y=heights[i]-ground+radius-(flat?radius*.28:0);
    wheel.scale.set(1,flat?.72:1,flat?1.12:1);
    wheel.rotation.set(car.wheelSpin,wheel.position.z>0?steer*(bike?.22:.23):0,0,'YXZ');
  });
  const wear=100-car.integrity;
  car.hood.rotation.x=wear*.0031+(car.damageFront>30?.18:0);
  car.hood.rotation.z=wear*.0013;
  const base=car.hoodSize??(car.hoodSize=car.hood.scale.clone());
  car.hood.scale.set(base.x,base.y*(1+Math.min(.6,(car.damageFront??0)*.012)),base.z*(1-Math.min(.12,(car.damageFront??0)*.002)));
  for(const bumper of car.bumpers??[]) {
    if(bumper.state===1) {
      bumper.mesh.rotation.x=bumper.end*.32;
      bumper.mesh.position.y=bumper.home.y-.12;
    }
  }
}
