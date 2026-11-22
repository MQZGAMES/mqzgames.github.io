import * as T from 'three';
import { salvageYard, lajes, blocks, roads, station, residence, bed } from './rules.js';
import { piece } from './models.js';
import { groundHeight } from './contact.js';
import { addDistrictBuilding } from './district-buildings.js';
import { districtSpatial } from './district-spatial.js';
import { createProps } from './props.js';
import { createSignals } from './signals.js';

let seed = 473021;
function random() {
  seed = (Math.imul(1664525,seed) + 1013904223) >>> 0;
  return seed / 4294967296;
}
const pick = values => values[Math.floor(random()*values.length)];

export function createWorld(scene) {
  seed=473021;
  scene.background = new T.Color(0xe9b48b);
  scene.fog = new T.FogExp2(0xe9b48b,.0068);
  scene.add(new T.HemisphereLight(0xe8f0f3,0x786461,2.30));
  const sun = new T.DirectionalLight(0xffca94,3.0);
  sun.position.set(-45,48,-32);
  sun.castShadow = true;
  Object.assign(sun.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175});
  sun.shadow.bias = -.00035;
  sun.shadow.normalBias = .12;
  sun.shadow.mapSize.set(2048,2048);
  sun.shadow.autoUpdate = false;
  scene.add(sun);
  const sky = new T.Mesh(new T.SphereGeometry(330,32,16), new T.ShaderMaterial({
    side:T.BackSide, depthWrite:false,
    uniforms:{ sun:{value: new T.Vector3(-.66,.29,-.60).normalize()} },
    vertexShader:'varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}',
    fragmentShader:`
      varying vec3 vDir;
      uniform vec3 sun;
      float cloudNoise(vec2 p){
        vec2 lo=floor(p), f=fract(p);
        f=f*f*(3.-2.*f);
        vec4 q=sin(vec4(0.,1.,127.1,128.1)+lo.x+lo.y*127.1)*43758.5453;
        q=fract(q);
        return mix(mix(q.x,q.y,f.x),mix(q.z,q.w,f.x),f.y);
      }
      void main(){
        vec3 dir=normalize(vDir);
        vec3 dusk=mix(vec3(.89,.56,.36),vec3(.32,.51,.67),smoothstep(-.05,.70,dir.y));
        float glow=max(dot(dir,sun),0.);
        float altitude=max(.09,dir.y+.17);
        vec2 cloud=dir.xz/altitude*2.7;
        float haze=cloudNoise(cloud)*.69+cloudNoise(cloud*2.97)*.31;
        float bank=smoothstep(.61,.87,haze)*smoothstep(.03,.22,dir.y)*(1.-smoothstep(.52,.89,dir.y));
        dusk=mix(dusk,vec3(.91,.73,.57),bank*.46);
        dusk+=vec3(.24,.15,.07)*pow(glow,8.);
        dusk=mix(dusk,vec3(1.,.92,.65),smoothstep(.9990,.99955,glow));
        gl_FragColor=vec4(dusk,1.);
        #include <colorspace_fragment>
      }`
  }));
  sky.frustumCulled=false;sky.renderOrder=-100;scene.add(sky);
  const solid=[], support=[], volume=[], buildings=[];
  const batches = {};
  /** @type {Record<string, T.BufferGeometry>} */
  const geometries = {
    box:new T.BoxGeometry(), foliage:new T.IcosahedronGeometry(1,1),
    pole:new T.CylinderGeometry(.8,1,1,8), hill:new T.SphereGeometry(1,14,9), prism:prismGeometry()
  };
  const transform = new T.Object3D();
  function draw(shape,x,y,z,w,h,d,color,shadow,rotation=0,tilt=0) {
    const region=x===0&&z===0?'center':Math.round(x/31)+','+Math.round(z/31);
    const key = shape+':'+Boolean(shadow)+':'+region;
    const batch = batches[key] ??= {shape,shadow:Boolean(shadow),items:[]};
    transform.position.set(x,y,z);
    transform.scale.set(w,h,d);
    transform.rotation.set(tilt,rotation,0,'YXZ');
    transform.updateMatrix();
    batch.items.push({matrix:transform.matrix.clone(),color:new T.Color(color)});
  }
  function box(x,y,z,w,h,d,color,shadow=false,rotation=0,tilt=0,shape='box') {
    draw(shape,x,y,z,w,h,d,color,shadow,rotation,tilt);
  }
  function blockBox(x,y,z,w,h,d,color) {
    box(x,y,z,w,h,d,color,true);
    solid.push({x,z,w,d,y0:y-h/2,h:y+h/2});
  }
  const props=createProps(scene,solid,groundHeight);
  function tree(x,z,palm=false) {
    props.add(palm?'palm':'tree',x,z,random()*6.28,.82+random()*.36,{w:.45,d:.45,h:3.6});
  }
  function facadeText(label,x,y,z,rotation,color=0x1b3a37,width=4.2,height=.65) {
    const canvas = document.createElement('canvas');
    canvas.width=512; canvas.height=115;
    const ctx=canvas.getContext('2d');
    ctx.fillStyle='#e9d4a0';
    ctx.fillRect(0,0,512,115);
    ctx.strokeStyle='#645a47';
    ctx.lineWidth=6;
    ctx.strokeRect(7,7,498,101);
    ctx.font='900 50px system-ui';
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.fillStyle='#'+color.toString(16).padStart(6,'0');
    ctx.fillText(label,256,57,470);
    const map = new T.CanvasTexture(canvas);
    map.colorSpace = T.SRGBColorSpace;
    const mesh = new T.Mesh(new T.PlaneGeometry(width,height),new T.MeshBasicMaterial({map}));
    mesh.position.set(x,y,z);
    mesh.rotation.y=rotation;
    scene.add(mesh);
  }
  const houseRoof=new T.Group();
  scene.add(houseRoof);
  const doors=[];
  const windowGeometry=new T.PlaneGeometry();
  const windowMaterial=new T.MeshStandardMaterial({
    color:0x82aba7,roughness:.23,metalness:.11,opacity:.31,transparent:true,depthWrite:false,side:T.DoubleSide
  });
  function storefrontGlass(x,y,z,w,h,angle) {
    const pane=new T.Mesh(windowGeometry,windowMaterial);
    pane.position.set(x,y,z);
    pane.scale.set(w,h,1);
    pane.rotation.y=angle;
    scene.add(pane);
  }
  const architecture={box,solid,door:hingedDoor,sign:facadeText,glazing:storefrontGlass,support,volume};
  function hingedDoor(x,z,angle,width,color,base=.228,settings={}) {
    const pivot=new T.Group();
    const id=settings.id??'door-'+doors.length;
    pivot.position.set(x,base,z);
    const leaf=piece(pivot,'box',color,width*.5,1.088,0,width-.045,2.147,.074);
    leaf.castShadow=false;
    const grain=piece(pivot,'box',0x9b846b,width*.50,1.47,-.04,width*.64,.56,.013);
    grain.castShadow=false;
    for(const side of [-1,1]) {
      piece(pivot,'box',0x9b815b,width-.14,.99,side*.046,.11,.13,.035).castShadow=false;
      piece(pivot,'box',0xc1a776,width-.174,1.011,side*.073,.132,.042,.037).castShadow=false;
    }
    const cx=x+Math.cos(angle)*width*.5, cz=z-Math.sin(angle)*width*.5;
    const yaw=settings.normallyOpen?1.48:0;
    pivot.rotation.y=angle+yaw;
    scene.add(pivot);
    const closedSolid={
      x:cx,z:cz,w:Math.abs(Math.cos(angle))*width+.083,d:Math.abs(Math.sin(angle))*width+.083,
      y0:base,h:base+2.155,doorId:id,buildingId:settings.buildingId??null
    };
    const entry={
      door:pivot,id,x:cx,z:cz,base,angle,openAmount:yaw,opened:Boolean(settings.normallyOpen),breached:false,
      private:Boolean(settings.private),normallyOpen:Boolean(settings.normallyOpen),hold:0,
      buildingId:settings.buildingId??null,unitId:settings.unitId??null,normalX:Math.sin(angle),normalZ:Math.cos(angle),
      handle:{x:x+Math.cos(angle)*(width-.17),y:base+1.008,z:z-Math.sin(angle)*(width-.17)},closedSolid
    };
    doors.push(entry);
    for(const edge of [0,width]) {
      box(x+Math.cos(angle)*edge,base+1.09,z-Math.sin(angle)*edge,.105,2.18,.178,0x655348,false,angle);
    }
    box(cx,base+2.185,cz,width+.12,.11,.178,0x655348,false,angle);
    return entry;
  }
  function home() {
    const {x,z}=residence, wall=0xc9aa87;
    blockBox(x,2.08,z,12,3.84,10,wall);
    box(x,.39,z+5.03,12.04,.46,.08,0x81766f);
    box(x,4.0,z,12.06,1.7,9.98,wall,true,0,0,'prism');
    box(x,4.06,z,12.0,1.84,10.7,0x8f5440,true,0,0,'prism');
    box(x+3.6,4.9,z-2.2,.55,1.9,.55,0x8f7a6a,true);
    box(x,1.38,z+5.05,1.42,2.42,.10,0x4f4741);
    box(x,1.31,z+5.09,1.10,2.20,.06,0x695546);
    box(x,.18,z+5.35,1.7,.14,.62,0x81766f);
    box(x,2.85,z+5.45,1.9,.12,.86,0xd9bea0,true);
    for(const u of [-3.6,3.6]) {
      box(x+u,2.03,z+5.04,2.08,1.43,.10,0x4f4741);
      box(x+u,2.03,z+5.07,1.86,1.21,.06,0x4d6a72);
      box(x+u,1.22,z+5.16,2.2,.09,.2,0xd9bea0);
      for(const side of [-1,1]) box(x+u+side*1.17,2.03,z+5.07,.34,1.27,.05,0x5f7b6a);
    }
    facadeText('CASA 38',x+1.6,1.62,z+5.13,0,0x4a4832,.92,.22);
    // Garage beside the house, with a roller door and a driveway to the street.
    blockBox(x+9.6,1.6,z-.4,6,3.2,8,0xbfa27f);
    box(x+9.6,3.27,z-.4,6.3,.16,8.3,0x7e5a46,true);
    box(x+9.6,1.32,z+3.62,4.4,2.5,.08,0x8d9496);
    for(let y=.3;y<2.6;y+=.28) box(x+9.6,y,z+3.67,4.3,.025,.02,0x6f7678);
    box(x+9.6,.173,z+8.6,4.8,.03,9.8,0x9c968a);
    facadeText('GARAGEM',x+9.6,2.85,z+3.68,0,0x3b3a33,1.4,.26);
  }
  function policeStation() {
    const y=station.z;
    box(2,.169,y,19,.045,22,0x696b65);
    const blue=0x879799;
    blockBox(-7.18,2.03,y,7.35,3.68,19.56,blue);
    box(-7.18,3.98,y,7.62,.23,19.80,0x528092);
    box(-3.46,1.35,y,.12,2.32,1.7,0x435664);
    box(-2.5,3.33,y,7.1,.25,19.5,0x526c77,true);
    blockBox(-1.5,1.42,y-9.72,5.4,2.54,.35,0x7d9090);
    blockBox(-1.5,1.42,y+9.72,5.4,2.54,.35,0x7d9090);
    for(const dz of [-9.5,9.5]) blockBox(1.04,1.65,y+dz,.28,3,.31,0x849592);
    box(1.10,2.88,y,.25,.42,19.54,0x5b7882);
    facadeText('POLÍCIA · VILA BRASA',1.26,2.87,y,Math.PI/2,0x294454,7.2,.63);
    for(const dz of [-8.2,-3.95,.3,4.55,8.80]) box(8.15,.208,y+dz,5.3,.016,.10,0xddd3ae);
    for(const dz of [-6.1,-1.85,2.4]) box(5.5,.208,y+dz,.10,.016,3.25,0xddd3ae);
    for(const dz of [-6.8,-3.4,3.4,6.8]) {
      box(-3.46,1.87,y+dz,.08,1.40,2.25,0x4f4741);
      box(-3.43,1.87,y+dz,.05,1.18,2.05,0x37565d);
    }
    box(-3.52,.21,y+3.1,.64,.08,2.45,0x625c51);
  }

  box(0,-.30,0,720,.10,720,0x878072);
  box(0,-.18,0,132,.34,132,0x46474a);
  for(let i=0;i<1250;i++){
    const x=random()*130-65, z=random()*130-65;
    box(x,.001,z,.04+random()*.30,.007,.04+random()*.3,pick([0x535357,0x4b4c4d,0x444246,0x595752]),false,random()*6);
  }
  for (const x of roads) {
    for (const z of blocks) {
      for(let k=-10;k<=10;k+=4) box(x,.014,z+k,.12,.015,1.82,0xd7a666);
      for(const k of [-12.6,12.6]){
        for(let stripe=-4.5;stripe<=4.5;stripe+=.90) box(x+stripe,.015,z+k,.45,.016,1.44,0xc8bfb1);
      }
    }
  }
  for (const z of roads) {
    for (const x of blocks) {
      for(let k=-10;k<=10;k+=4) box(x+k,.014,z,1.82,.015,.12,0xd7a666);
      for(const k of [-12.6,12.6]){
        for(let stripe=-4.5;stripe<=4.5;stripe+=.90) box(x+k,.015,z+stripe,1.44,.016,.45,0xc8bfb1);
      }
    }
  }
  for (const x of blocks) {
    for (const z of blocks) {
      box(x,.067,z,27.1,.16,27.1,0xc6b397);
      box(x,.125,z,26.7,.07,26.7,0xa39786);
      for(const offset of [-12.25,12.25]){
        for(let k=-12;k<=12;k+=2.1){
          box(x+offset,.164,z+k,2.32,.008,.023,0xc5b396);
          box(x+k,.164,z+offset,.023,.008,2.32,0xc5b396);
        }
      }
      if(x===station.x-2 && z===station.z) policeStation();
      else if(x===residence.x && z===residence.z) home();
      else if (x===0&&z===-38) {
        for(const dx of [-6,6]){
          box(x+dx,.185,z,8.2,.08,19,0x71825a);
          for(const dz of [-7,0,7]) tree(x+dx,z+dz,true);
        }
        for(let i=-8;i<=8;i+=4){
          box(x, .177, z+i, 3.1,.033,3.2,0xc9b494);
        }
        blockBox(x,1.04,z-9.89,4.42,1.77,.18,0x8d7963);
        facadeText('PRAÇA DA BRASA',x,1.6,z-10,Math.PI);
      } else {
        for(const side of [-1,1]) {
          const armory=x===0&&z===0&&side===1;
          const plot=buildings.filter(structure=>structure.id.startsWith('lot-')||structure.id==='armory').length;
          const address=plot+10;
          const kind=armory?'armory':plot%5===1?'shop':plot%5===3?'shop':plot%5===0?'house':'apartments';
          const shopNames=['CAFÉ SOL','MERCADO BRASA','QUITANDA DA RUA','ARMAZÉM LUZ','BAR DO PORTO','PADARIA IPÊ'];
          const service=armory?'armory':address===13?'barber':address===18?'clothes':address===21?'black':kind==='shop'?'store':null;
          const special={barber:'BARBEARIA DO ZÉ',clothes:'MODA BRASA',black:'PENHORES 24H'}[service];
          const name=special??(kind==='shop'?shopNames[Math.floor(plot/2)%shopNames.length]:
            kind==='apartments'?'ED. '+['IPÊ','VISTA','BRISA','ESTAÇÃO','HORIZONTE','CAPITAL'][Math.floor(plot/2)%6]:'CASA '+address);
          const color=pick([0xbc8469,0xc3a378,0x898f75,0x95a69a,0xd0ac84,0xa7735f,0xb9a991]);
          const building=addDistrictBuilding(architecture,{
            id:armory?'armory':'lot-'+address,kind,label:armory?'LOJA DE ARMAS':name,
            x:x+side*(armory?5.7:6.25),z:z+(armory?-5.45:0),angle:side*Math.PI/2,
            w:armory?11.35:(kind==='house'?13.7:15.3)+random()*.57,d:armory?9.36:9.38+random()*.25,
            color,upperColor:pick([0xb99878,0x9e9c85,0xbd9c88,0xb6ad97]),
            awning:pick([0x775840,0x5e776f,0x9f6855]),fabrics:pick([0x708277,0x7c6663,0x917b5c]),
            stories:plot%3===0?3:2,doorAt:armory?0:undefined,open:kind==='house'&&plot%3!==0
          });
          building.service=service;
          buildings.push(building);
          const plazaZ=armory?4.32:z+9.83;
          box(x+side*6.8,.168,plazaZ,8.30,.017,2.51,0xa69f8c);
          for(let edge=-3.5;edge<=3.5;edge+=.70) {
            box(x+side*6.8+edge,.18,plazaZ, .022,.012,2.50,0xb9b09c);
          }
        }


      }
      for(const side of [-1,1]){
        const lx=x+side*12.85, lz=z-side*9.85;
        props.add('lamp',lx,lz,side>0?0:Math.PI,1,{w:.17,d:.17,h:4.5});
        props.add('bench',x+side*9,z-side*12.5,side>0?0:Math.PI,1,{w:1.52,d:.50,h:.73});
        const bx=x+side*10.1;
        props.add('bin',bx,z-side*12.55,0,1,{w:.5,d:.5,h:.78});
        props.add('bollard',bx+.72,z-side*12.58,0,1,{w:.14,d:.14,h:.46});
        if(!(x===residence.x && z===residence.z && side===1)) tree(x+side*9.4,z+side*12.6);
      }
    }
  }
  // Low-rise masonry homes open onto pedestrian alleys east of the perimeter road.
  // The signed entrance spans the central alley, leaving the passage clear.
  for(const side of [-1,1]) blockBox(63.6,1.85,side*2.5,.15,3.7,.15,0x705747);
  box(63.6,3.48,0,.16,.64,5.15,0x705747);
  facadeText('VILA DAS LAJES',63.51,3.48,0,-Math.PI/2,0x315453,3.55,.56);
  box(84,-.055,0,44,.1,lajes.halfDepth*2,0x998d7d);
  for(const x of [63.45,71,78,85,93,101]) box(x,-.003,0,2.4,.012,94,0x9e9689);
  for(const z of [-30,-20,-10,0,10,20,30,40]) box(84,-.001,z,43.8,.014,3.2,0xa99b8d);
  for(const [column,x] of [67.5,74.5,81,89,97,104].entries()) for(const [row,z] of [-44,-35,-25,-15,-5,5,15,25,35,44].entries()){
    if(column>=4 && z>=35 || z===-5 && column<3) continue;
    const h=2.9+((column+row)%3)*.85;
    const tint=[0xb57050,0xa28c75,0xad6548,0x998e82][(row+column)%4];
    blockBox(x,h/2,z,4.1,h,5.2,tint);
    box(x,h+.08,z,4.3,.16,5.4,0x847e77);
    box(x-2.06,1.07,z-.8,.05,2.14,.88,0x584c40);
    box(x-2.07,1.64,z+1.15,.055,.88,1.2,0x536265);
    if((row+column)%2===0){
      box(x-2.32,2.28,z-.8,.56,.09,1.36,0x7c8c87);
      for(const dz of [-.42,0,.42]) box(x-2.11,1.64,z+1.15+dz,.04,.88,.04,0x293c40);
    }
    if(row%2===0) box(x,h+.55,z+1,1.3,.92,1.3,0x516578);
  }
  // Four modest rooms around a central hall, connected to the eastern alley.
  const hx=98,hz=41;
  box(hx,.022,hz,6,.044,8,0xb6aa96);
  blockBox(hx,1.37,hz-4,6.2,2.7,.18,0xb5a584);
  blockBox(hx,1.37,hz+4,6.2,2.7,.18,0xb5a584);
  blockBox(hx+3,1.37,hz,.18,2.7,8,0xb5a584);
  for(const side of [-1,1]){
    blockBox(hx-3,1.37,hz+side*2.42,.18,2.7,3.16,0xb5a584);
    blockBox(hx+side*1.76,1.37,hz,2.42,2.7,.14,0xc4b697);
    blockBox(hx,1.37,hz+side*3.18,.14,2.7,1.62,0xc4b697);
  }
  blockBox(hx,2.77,hz,6.18,.17,8.2,0x77726b);
  volume.push({buildingId:'lajes-home',unitId:'lajes-home:0',x:hx,z:hz,w:5.8,d:7.8,floor:0,ceiling:2.68});
  facadeText('CASA',94.87,2.34,hz,-Math.PI/2,0x315453,.95,.28);
  blockBox(96.1,.36,43.7,.85,.70,1.76,0x69786c);
  box(96.1,.75,43.7,.86,.09,1.7,0xb8aa88);
  blockBox(99.7,.27,43.6,1.18,.51,1.91,0x88634d);
  box(99.7,.58,43.6,1.18,.13,1.88,0xc7ad94);
  box(99.7,.67,44.27,.92,.13,.39,0xf1e5ce);
  blockBox(96.4,.44,38.65,1.6,.86,.56,0x6e7875);
  box(96.4,.9,38.65,1.64,.07,.61,0xc0c4b5);
  box(100,.38,38.1,.59,.75,.63,0xe4dccb);
  box(99.1,.84,38.16,.62,.14,.44,0xd6cab5);
  // South of the ring road, with a dedicated driveway and unloading bays.
  const lot=salvageYard;
  const center=(lot.west+lot.east)/2;
  box(center,.005,75,25.8,.014,24,0x736e63);
  box(lot.gate.x,.004,62.2,7.5,.015,4.8,0x736e63);
  for(const x of [lot.west+.3,lot.east-.3]) blockBox(x,.8,75,.24,1.6,24,0x67655b);
  blockBox(center,.8,86.72,25.6,1.6,.24,0x67655b);
  blockBox(45.3,.8,63,12.4,1.6,.22,0x67655b);
  blockBox(62,.8,63,5.6,1.6,.22,0x67655b);
  box(43.8,1.55,66.6,5,3.1,4,0xa99c85);
  facadeText('FERRO-VELHO',43.8,2.5,64.56,Math.PI,0x315453,4.3,.55);
  for(let x=42;x<=62;x+=3.2) box(x,.015,81,.045,.012,5,0xb7a575);
  for(let i=0;i<52;i++){
    const angle=i/52*Math.PI*2;
    const radius=118+random()*58;
    const shade=pick([0x938f84,0xa09a89,0x989c98,0x8c9290]);
    const x=Math.sin(angle)*radius, z=Math.cos(angle)*radius;
    draw('hill',x,-1,z,12+random()*33,3+random()*22,10+random()*20,shade,false,angle);
    const height=4+random()*16;
    box(x,height*.5-1,z,3+random()*9,height,4+random()*8,pick([0x9b8d82,0x888e8d,0x9a8b82]),false);
  }
  props.finalize();
  const signals=createSignals(scene,solid);
  const material=new T.MeshStandardMaterial({roughness:.88});
  for (const {shape,shadow,items} of Object.values(batches)) {
    const instance = new T.InstancedMesh(geometries[shape],material,items.length);
    items.forEach(({matrix,color},index)=>{
      instance.setMatrixAt(index,matrix);
      instance.setColorAt(index,color);
    });
    instance.castShadow = shadow;
    instance.receiveShadow = true;
    scene.add(instance);
  }
  const marker = new T.Group();
  const ring = new T.Mesh(new T.RingGeometry(1.60,1.85,40),new T.MeshBasicMaterial({
    color:0xf0ff86,side:T.DoubleSide,transparent:true,opacity:.85,depthWrite:false
  }));
  ring.rotation.x=-Math.PI/2;
  ring.position.y=.26;
  marker.add(ring);
  const beacon = new T.Mesh(new T.OctahedronGeometry(.43),new T.MeshBasicMaterial({color:0xf0ff86}));
  beacon.position.y=2.8;
  marker.add(beacon);
  scene.add(marker);
  return {solid,marker,beacon,sun,sky,houseRoof,bed,doors,buildings,props,signals,
    ...districtSpatial(solid,support,volume,doors,groundHeight)};
}

function prismGeometry() {
  // Unit gable: base from y=0 (v from -.5 to .5) up to the ridge at y=1, extruded along x.
  const a=[-.5,0,-.5], b=[-.5,0,.5], c=[-.5,1,0], d=[.5,0,-.5], e=[.5,0,.5], f=[.5,1,0];
  const faces=[a,b,c, d,f,e, a,f,d, a,c,f, b,f,c, b,e,f, a,e,b, a,d,e];
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.Float32BufferAttribute(faces.flat(),3));
  geometry.computeVertexNormals();
  return geometry;
}
