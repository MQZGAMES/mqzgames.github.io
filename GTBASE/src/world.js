import * as T from 'three';
import { blocks, roads, station, residence, bed } from './rules.js';
import { piece } from './models.js';

let seed = 473021;
function random() {
  seed = (Math.imul(1664525,seed) + 1013904223) >>> 0;
  return seed / 4294967296;
}
const pick = values => values[Math.floor(random()*values.length)];
const stone = 0xa9a093;
const trim = 0xe3c6a1;
const glass = 0x365d63;
const iron = 0x393e3c;

export function createWorld(scene) {
  scene.background = new T.Color(0xf1b489);
  scene.fog = new T.FogExp2(0xf1b489,.008);
  scene.add(new T.HemisphereLight(0xffe5c5,0x556c71,2.15));
  const sun = new T.DirectionalLight(0xffce95,3.2);
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
    uniforms:{ sun:{value: new T.Vector3(-.56,.21,.80).normalize()} },
    vertexShader:'varying vec3 vDir; void main(){vDir=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`
      varying vec3 vDir;
      uniform vec3 sun;
      void main(){
        vec3 dir=normalize(vDir);
        vec3 dusk=mix(vec3(.91,.54,.34),vec3(.42,.55,.63),smoothstep(-.03,.77,dir.y));
        float glow=max(dot(dir,sun),0.);
        dusk+=vec3(.25,.17,.07)*pow(glow,8.);
        dusk=mix(dusk,vec3(1.,.92,.65),smoothstep(.9990,.99955,glow));
        gl_FragColor=vec4(dusk,1.);
        #include <colorspace_fragment>
      }`
  }));
  scene.add(sky);
  const solid = [];
  const batches = {};
  /** @type {Record<string, T.BufferGeometry>} */
  const geometries = {
    box:new T.BoxGeometry(), foliage:new T.IcosahedronGeometry(1,1),
    pole:new T.CylinderGeometry(.8,1,1,8), hill:new T.SphereGeometry(1,14,9)
  };
  const transform = new T.Object3D();
  function draw(shape,x,y,z,w,h,d,color,shadow,rotation=0) {
    const key = shape + ':' + Boolean(shadow);
    const batch = batches[key] ??= {shape,shadow:Boolean(shadow),items:[]};
    transform.position.set(x,y,z);
    transform.scale.set(w,h,d);
    transform.rotation.y = rotation;
    transform.updateMatrix();
    batch.items.push({matrix:transform.matrix.clone(),color:new T.Color(color)});
  }
  function box(x,y,z,w,h,d,color,shadow=false,rotation=0) {
    draw('box',x,y,z,w,h,d,color,shadow,rotation);
  }
  function blockBox(x,y,z,w,h,d,color) {
    box(x,y,z,w,h,d,color,true);
    solid.push({x,z,w,d,h:y+h/2});
  }
  function tree(x,z,palm=false) {
    const height = 3.25 + random()*2.65;
    draw('pole',x,height*.48,z,palm?.16:.22,height,.22,0x7a6050,true);
    if (palm) {
      for (let i=0; i<7; i++) {
        const angle = i * Math.PI * 2 / 7;
        draw('foliage',x+Math.sin(angle)*.86,height,z+Math.cos(angle)*.86,.42,.24,1.58,pick([0x345f4a,0x4a7553,0x6c8456]),true,angle);
      }
    } else {
      for (let i=0; i<4; i++) {
        draw('foliage',x+(random()-.5)*2,height+(random()-.3)*1.6,z+(random()-.5)*2,1+random()*.7,1.15,1.35,pick([0x466b50,0x668551,0x87a45c]),true,random()*6);
      }
    }
    solid.push({x,z,w:.45,d:.45,h:.9*height});
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
  function building(x,z,w,d,h,color,shop,label,armory) {
    blockBox(x,h/2+.15,z,w,h,d,color);
    box(x,h+.18,z,w+.32,.28,d+.32,trim,true);
    box(x,h+.34,z,w-.2,.14,d-.2,0x6e5c55,true);
    if (random()>.35) box(x+w*.22,h+.72,z-d*.27,1.3,.68,1.2,0x5e655f,true);
    const orientation = [[0,1,w,d],[Math.PI,1,w,d],[Math.PI/2,0,d,w],[-Math.PI/2,0,d,w]];
    for (const [angle,front,width,depth] of orientation) {
      const px = x+Math.sin(angle)*(depth/2+.047);
      const pz = z+Math.cos(angle)*(depth/2+.047);
      const offset = at => [px+Math.cos(angle)*at,pz-Math.sin(angle)*at];
      const windows = Math.floor(width/2.35);
      const [leftX,leftZ]=offset(-width/2+.18);
      const [rightX,rightZ]=offset(width/2-.18);
      box(leftX,h/2+.15,leftZ,.27,h,.095,trim,false,angle);
      box(rightX,h/2+.15,rightZ,.27,h,.095,trim,false,angle);
      box(px,.36,pz,width,.32,.11,0x817068,false,angle);
      for(let floor=2.94; floor<h-.40; floor+=2.72) {
        if(floor<3 && ((armory && angle===Math.PI/2) || (shop && angle===0))) continue;
        box(px,floor,pz,width,.16,.12,trim,false,angle);
      }
      for (let row=0; row<Math.floor((h-.6)/2.72); row++) {
        const y = 1.76+row*2.7;
        for (let column=0; column<windows; column++) {
          const at=(column-(windows-1)/2)*2.28;
          const entry=armory && angle===Math.PI/2 || front && angle===0;
          if(row===0 && (entry&&Math.abs(at)<1.55 || shop&&angle===-Math.PI/2&&Math.abs(at+width*.25)<1.55)) continue;
          const [wx,wz]=offset(at);
          box(wx,y,wz,1.48,1.27,.11,trim,false,angle);
          box(wx,y,wz,1.25,1.04,.15,shop&&row===0?0x557070:glass,false,angle);
          box(wx,y,wz,.06,1.04,.18,trim,false,angle);
          box(wx,y+.16,wz,1.25,.04,.18,trim,false,angle);
          box(wx,y-.56,wz,1.59,.10,.24,stone,false,angle);
          if (row>0 && random()>.88) box(wx,y-.36,wz,.55,.40,.35,0xacafa3,false,angle);
        }
      }
      if (armory && angle===Math.PI/2) {
        box(px,1.33,pz,1.57,2.34,.26,0x183832,false,angle);
        box(px+.14,1.52,pz,1.28,1.51,.11,0x477168,false,angle);
        box(px+.19,1.22,pz+.48,.075,.20,.08,0xf0ed93);
        box(px+.64,2.79,pz,4.9,.22,.78,0x435947,true,angle);
        facadeText('LOJA DE ARMAS',px+.13,3.10,pz,angle,0x315541,4.2,.47);
      } else if (front && angle===0) {
        box(px,1.13,pz,.94,1.94,.24,iron,false,angle);
        if (shop) {
          box(px,2.64,pz+.51,w-.48,.17,1.10,0x6d392c,true);
          for(let k=.4;k<w-.32;k+=.49) box(px-w/2+k,2.53,pz+1.06,.24,.17,.07,0xeac586,false);
          if (label) facadeText(label,px,3.08,pz+.09,angle,0x1b3a37,4.2,.49);
        }
      } else if (shop && angle===-Math.PI/2) {
        const [dx,dz]=offset(-width*.25);
        box(dx,1.23,dz,1.22,2.13,.22,0x626963,false,angle);
        for(let row=.36;row<2.29;row+=.14) box(dx,row,dz,1.21,.027,.24,0x8a9186,false,angle);
      }
    }
  }

  const houseRoof=new T.Group();
  scene.add(houseRoof);
  const doors=[];
  function hingedDoor(x,z,angle,width,color,base=.228) {
    const door=new T.Group();
    door.position.set(x,base,z);
    door.rotation.y=angle;
    const panel=piece(door,'box',color,width*.5,1.035,0,width-.035,2.05,.068);
    panel.castShadow=false;
    piece(door,'box',0xb29b6c,width-.16,1.05,.057,.12,.075,.035).castShadow=false;
    piece(door,'box',0xb29b6c,width-.16,1.05,-.057,.12,.075,.035).castShadow=false;
    scene.add(door);
    doors.push({door,angle,x:x+Math.cos(angle)*width*.5,z:z-Math.sin(angle)*width*.5});
    for(const edge of [0,width]) {
      box(x+Math.cos(angle)*edge,base+1.08,z-Math.sin(angle)*edge,.105,2.16,.18,0x59483a,false,angle);
    }
    box(x+Math.cos(angle)*width*.5,base+2.11,z-Math.sin(angle)*width*.5,width+.12,.105,.18,0x59483a,false,angle);
  }
  function home() {
    const {x,z}=residence, plaster=0xd6be9c, wallHeight=2.65;
    box(x,.17,z,12.1,.09,10.1,0x9d7862);
    box(x-2.8,.218,z,5.3,.017,9.45,0xb29e79);
    box(x+2.9,.218,z+2.2,5.45,.017,4.75,0xc0a582);
    const wall=(dx,dz,w,d)=>blockBox(x+dx,.2+wallHeight/2,z+dz,w,wallHeight,d,plaster);
    wall(-6,0,.22,10.22); wall(6,0,.22,10.22); wall(0,-5,12.10,.23);
    wall(-3.195,5,5.61,.23); wall(3.415,5,5.17,.23);
    wall(.45,-3.92,.15,2.1); wall(.45,-.69,.15,1.9);
    wall(3.5,.05,4.8,.15); wall(-4.3,-.6,3.45,.15);
    wall(-2.63,-3.92,.15,2.05);
    box(x+.22,2.64,z+5,1.24,.43,.25,plaster);
    box(x+.45,2.59,z-2.23,.16,.52,1.27,plaster);
    hingedDoor(x-.39,z+5,0,1.22,0x426559);
    hingedDoor(x+.45,z-1.64,Math.PI/2,1.22,0x80614c);
    hingedDoor(x-2.63,z-1.69,Math.PI/2,1.17,0x89705a);
    box(x-2.63,2.59,z-2.27,.16,.52,1.2,plaster);
    box(x+.28,.11,z+5.9,2.55,.19,1.55,0x9b8b75);
    const furniture=(dx,dz,w,h,d,color)=>blockBox(x+dx,.224+h/2,z+dz,w,h,d,color);
    furniture(4.0,-3.63,1.46,.64,2.0,0x695044);
    box(x+4,.72,z-3.57,1.39,.19,1.95,0x58786f);
    box(x+4,.84,z-4.23,1.10,.13,.41,0xe3d6b9);
    furniture(5.3,-1.20,.96,1.84,1.12,0x75563d);
    furniture(-4.84,-3.75,1.4,.81,.62,0xd8cabb);
    furniture(-4.47,-2.72,.43,.43,.64,0xdad7cf);
    furniture(-5.27,-1.7,.66,.79,.50,0xdad7cf);
    furniture(-5.18,1.3,.78,.88,2.45,0x766d58);
    furniture(-4.95,3.77,1.04,1.76,.75,0xccc7ab);
    box(x-5.18,1.12,z+1.29,.8,.12,2.45,0xddddc2);
    box(x-5.2,1.19,z+1.44,.52,.025,.60,0x7b9090);
    furniture(4.76,2.82,.91,.53,2.55,0x58776c);
    box(x+5.16,.88,z+2.82,.20,.67,2.56,0x43655b);
    furniture(2.78,2.80,1.15,.40,.68,0x875d3f);
    furniture(-.36,2.98,1.23,.75,1.14,0x8a643e);
    box(x+2.76,.245,z+2.77,2.12,.02,2.0,0xa98568);
    box(x+5.88,1.53,z+2.85,.11,1.16,2.13,0xaf9272);
    box(x+6.13,1.53,z+2.85,.10,1.02,1.99,0x527171);
    box(x+6.20,1.53,z+2.85,.08,1.04,.075,0xe0c19e);
    box(x+6.20,1.54,z+2.85,.08,.075,2.07,0xe0c19e);
    box(x+6.18,1.01,z+2.85,.23,.10,2.21,0xb59b7e);
    box(x-3.18,1.57,z+5.16,1.78,1.02,.14,0x617a77);
    box(x-3.18,1.55,z+5.25,.08,1.06,.10,0xe0c19e);
    box(x-3.18,1.59,z+5.25,1.83,.07,.10,0xe0c19e);
    box(x-3.18,1.03,z+5.24,1.95,.11,.24,0xb69879);
    for(const tx of [-3.6,2.62]) {
      box(x+tx,2.752,z+1.6,.35,.11,.35,0xf8ddad);
    }
    box(x-3.73,.27,z+5.63,2.18,.09,1.23,0x839065);
    box(x+3.76,.255,z+5.90,2.15,.09,1.58,0x7e8a60);
    piece(houseRoof,'box',0xceba9d,x,2.94,z,12.34,.16,10.33).castShadow=false;
    for(let side of [-1,1]) {
      const panel=piece(houseRoof,'box',0x92523c,x+side*3.08,3.52,z,6.56,.17,10.78);
      panel.rotation.z=-side*.205; panel.castShadow=false;
      for(let tile=-2;tile<=2;tile++) {
        const seam=piece(houseRoof,'box',0xa26046,x+side*3.08,3.62,z+tile*1.84,6.54,.064,.07);
        seam.rotation.z=panel.rotation.z;seam.castShadow=false;
      }
      const gable=new T.Shape();
      gable.moveTo(-6.10,2.98);gable.lineTo(6.10,2.98);gable.lineTo(0,4.11);gable.closePath();
      const end=new T.Mesh(new T.ShapeGeometry(gable),new T.MeshStandardMaterial({color:0xc0a886,side:T.DoubleSide}));
      end.position.set(x,0,z+side*5.04);
      houseRoof.add(end);
    }
    piece(houseRoof,'box',0x874933,x,4.23,z,.28,.121,10.84).castShadow=false;
    facadeText('CASA 38',x+2.65,2.27,z+5.125,0,0x4a4832,1.65,.34);
    tree(x-9.5,z-5,true);
    box(x+8.8,.19,z-4,4.2,.08,7.6,0x738457);
  }

  function policeStation() {
    const y=station.z;
    box(2,.169,y,19,.045,22,0x696b65);
    const blue=0x879799;
    box(-7.4,.195,y,6.9,.078,19.5,0xb7afa0);
    blockBox(-10.78,1.67,y,.30,2.96,19.80,blue);
    for(const end of [-9.77,9.77]) blockBox(-7.1,1.67,y+end,7.6,2.96,.29,blue);
    for(const end of [-5.51,5.51]) blockBox(-3.62,1.67,y+end,.28,2.96,8.59,blue);
    box(-3.62,2.73,y,.29,.71,2.46,blue);
    box(-7.2,3.24,y,7.64,.24,20.08,0x528092);
    box(-7.2,3.40,y,7.58,.12,20.03,0x456976);
    hingedDoor(-3.62,y+1.22,Math.PI/2,1.20,0x517486,.22);
    hingedDoor(-3.62,y-1.21,-Math.PI/2,1.22,0x517486,.22);
    facadeText('RECEPÇÃO',-3.44,2.63,y,Math.PI/2,0x234653,2.16,.35);
    for(const offset of [-5.5,5.5]) {
      blockBox(-9.36,.74,y+offset,1.35,1.04,2.10,0x656963);
      box(-9.30,1.28,y+offset,1.47,.13,2.20,0xada893);
      box(-9.42,1.51,y+offset,.44,.44,.62,0x293b42);
      box(-10.60,1.74,y+offset,.07,1.16,2.8,0xc1c4b0);
      box(-7.60,3.05,y+offset,1.18,.08,.26,0xffe8b6);
    }
    blockBox(-6.82,.70,y-2.1,2.86,1.01,.62,0x6b8585);
    box(-6.82,1.24,y-2.1,2.99,.12,.77,0xaeaaa0);
    box(-2.5,3.33,y,7.1,.25,19.5,0x526c77,true);
    blockBox(-1.5,1.42,y-9.72,5.4,2.54,.35,0x7d9090);
    blockBox(-1.5,1.42,y+9.72,5.4,2.54,.35,0x7d9090);
    for(const dz of [-9.5,9.5]) blockBox(1.04,1.65,y+dz,.28,3,.31,0x849592);
    box(1.10,2.88,y,.25,.42,19.54,0x5b7882);
    facadeText('POLÍCIA · VILA BRASA',1.26,2.87,y,Math.PI/2,0x294454,7.2,.63);
    for(const dz of [-8.2,-3.95,.3,4.55,8.80]) box(8.15,.208,y+dz,5.3,.016,.10,0xddd3ae);
    for(const dz of [-6.1,-1.85,2.4]) box(5.5,.208,y+dz,.10,.016,3.25,0xddd3ae);
    box(-3.75,1.67,y-6.8,.16,1.18,2.05,0x37565d);
    box(-3.75,1.67,y+6.8,.16,1.18,2.05,0x37565d);
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
      for(const k of [-14.4,14.4]){
        for(let stripe=-2;stripe<=2;stripe+=.85) box(x+stripe,.015,z+k,.45,.016,1.44,0xc8bfb1);
      }
    }
  }
  for (const z of roads) {
    for (const x of blocks) {
      for(let k=-10;k<=10;k+=4) box(x+k,.014,z,1.82,.015,.12,0xd7a666);
      for(const k of [-14.4,14.4]){
        for(let stripe=-2;stripe<=2;stripe+=.85) box(x+k,.015,z+stripe,1.44,.016,.45,0xc8bfb1);
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
        facadeText('PRAÇA DA BRASA',x,1.6,z-10,Math.PI);
      } else {
        const colors = [0xc38368,0xc4a377,0x939977,0x9cb0a0,0xd0ad87,0xa87665,0xb0a48b];
        for(const dx of [-5.85,5.85]){
          for(const dz of [-5.45,5.45]){
            const h=pick([3.4,5.65,6.2,8.9,9.5,11.45]);
            const shop=dz>0 && (dx<0 || z===0);
            const label=shop?pick(['CAFÉ SOL','OFICINA 19','MERCADO BRASA','ARMAZÉM LUZ','BAR DO PORTO']):null;
            const armory=x===0&&z===0&&dx>0&&dz<0;
            building(x+dx,z+dz,8.5+random(),7.6+random(),h,pick(colors),shop,label,armory);
          }
        }
        tree(x+12.55,z-12.05,random()>.37);
        tree(x-10.5,z+12.15,random()>.42);
      }
      for(const side of [-1,1]){
        const lx=x+side*12.85, lz=z-side*9.85;
        draw('pole',lx,2.39,lz,.083,4.5,.083,iron,true);
        solid.push({x:lx,z:lz,w:.17,d:.17,h:4.65});
        box(lx+side*.35,4.52,lz,.79,.075,.075,iron,true);
        box(lx+side*.73,4.48,lz,.32,.12,.19,0xe3b985,true);
        box(x+side*9,.56,z-side*12.5,1.52,.075,.46,0x815846,true);
        box(x+side*9,.78,z-side*12.66,1.52,.23,.075,0x956954,true);
        solid.push({x:x+side*9,z:z-side*12.50,w:1.52,d:.50,h:.89});
        for(const leg of [-.54,.54]) box(x+side*9+leg,.35,z-side*12.5,.06,.37,.37,iron,true);
        const bx=x+side*10.1;
        draw('pole',bx,.52,z-side*12.55,.24,.69,.24,0x355049,true);
        draw('pole',bx,.88,z-side*12.55,.267,.10,.267,0x263d37,true);
        solid.push({x:bx,z:z-side*12.55,w:.5,d:.5,h:.94});
        box(bx+.72,.38,z-side*12.58,.09,.39,.09,0x6c6757,true);
        box(bx+.72,.58,z-side*12.58,.13,.08,.13,0xd8a478,true);
      }
    }
  }
  for(let i=0;i<52;i++){
    const angle=i/52*Math.PI*2;
    const radius=118+random()*58;
    const shade=pick([0x938f84,0xa09a89,0x989c98,0x8c9290]);
    const x=Math.sin(angle)*radius, z=Math.cos(angle)*radius;
    draw('hill',x,-1,z,12+random()*33,3+random()*22,10+random()*20,shade,false,angle);
    const height=4+random()*16;
    box(x*.76,height*.5-1,z*.76,3+random()*9,height,4+random()*8,pick([0x9b8d82,0x888e8d,0x9a8b82]),false);
  }
  const material = new T.MeshStandardMaterial({roughness:.92});
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
  return {solid,marker,beacon,sun,sky,houseRoof,bed,doors};
}
