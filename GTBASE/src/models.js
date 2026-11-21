import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { groundHeight } from './contact.js';

const box = new T.BoxGeometry();
const cloth = new RoundedBoxGeometry(1,1,1,2,.29);
const sphere = new T.SphereGeometry(1, 10, 7);
const cylinder = new T.CylinderGeometry(1, 1, 1, 12);
const materials = new Map();
const characterMat = new T.MeshStandardMaterial({vertexColors:true,roughness:.82});
const paintMat = new T.MeshStandardMaterial({vertexColors:true,roughness:.36,metalness:.18});

function combineParts(group,parts,material=characterMat) {
  if (!parts.length) return;
  const geometries=parts.map(part=>{
    part.updateMatrix();
    const geometry=part.geometry.index?part.geometry.toNonIndexed():part.geometry.clone();
    geometry.applyMatrix4(part.matrix);
    const count=geometry.attributes.position.count;
    const colors=new Float32Array(count*3);
    const color=part.material.color;
    for(let i=0;i<colors.length;i+=3) {
      colors[i]=color.r;
      colors[i+1]=color.g;
      colors[i+2]=color.b;
    }
    geometry.setAttribute('color',new T.BufferAttribute(colors,3));
    return geometry;
  });
  group.remove(...parts);
  const mesh=new T.Mesh(mergeGeometries(geometries),material);
  mesh.receiveShadow=true;
  group.add(mesh);
  for(const geometry of geometries) geometry.dispose();
}

const meshes = group => group.children.filter(child=>child instanceof T.Mesh);
export function piece(group, shape, color, x, y, z, w, h, d, shines = false) {
  const key = color + ':' + shines;
  if (!materials.has(key)) materials.set(key, new T.MeshStandardMaterial({
    color, roughness: shines ? .33 : .87, metalness: shines ? .2 : 0
  }));
  const mesh = new T.Mesh({box,cloth,sphere,cylinder}[shape], materials.get(key));
  mesh.scale.set(w, h, d);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

const shadowGeo = new T.CircleGeometry(1, 16);
const shadowMat = new T.MeshBasicMaterial({color:0x211916,transparent:true,opacity:.22,depthWrite:false});
function contact(group, x, z) {
  const shadow = new T.Mesh(shadowGeo, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = .025;
  shadow.scale.set(x,z,1);
  group.add(shadow);
  return shadow;
}

export function person(scene, shirt, trousers, skin, hero = false) {
  const root = new T.Group();
  const shadow=contact(root,.41,.38);
  const body = new T.Group();
  root.add(body);
  const add = (shape, color, x, y, z, w, h, d) => piece(body,shape,color,x,y,z,w,h,d);
  add('cloth',trousers,0,.94,0,.44,.25,.29);
  add('cloth',shirt,0,1.22,0,.49,.49,.31);
  add('cloth',shirt,0,1.39,0,.55,.215,.337);
  add('cloth',hero?0x817e45:shirt,0,1.05,.006,.473,.049,.312);
  if(hero) {
    add('cloth',0xc4b45a,-.128,1.343,.169,.078,.057,.014);
    add('cloth',0x255043,0,1.427,-.132,.29,.132,.084);
  }
  add('cylinder',skin,0,1.50,0,.09,.13,.09);
  add('sphere',skin,0,1.67,.015,.168,.197,.157);
  add('sphere',0x2e231d,0,1.77,-.031,.162,.112,.141);
  add('sphere',skin,0,1.655,.165,.033,.034,.034);
  add('cloth',0x56413a,0,1.588,.154,.072,.012,.015);
  for(const side of [-1,1]) {
    add('sphere',skin,side*.155,1.66,.023,.032,.052,.025);
    add('cloth',0x2c2928,side*.061,1.711,.152,.043,.012,.012);
    add('cloth',0xa79e91,side*.061,1.692,.156,.032,.012,.012);
    add('cloth',0x2e2823,side*.06,1.693,.163,.016,.012,.009);
  }
  if (hero) {
    add('sphere',0x173b36,0,1.79,.012,.181,.132,.164);
    add('cloth',0x26473e,0,1.77,.159,.27,.033,.17);
  }
  const arms = [], legs = [], forearms=[], shins=[];
  for (const side of [-1,1]) {
    const arm = new T.Group();
    arm.position.set(side * .31,1.42,0);
    body.add(arm);
    piece(arm,'cloth',shirt,0,-.105,0,.173,.226,.187);
    const forearm=new T.Group();
    forearm.position.y=-.23;
    arm.add(forearm);
    piece(forearm,'cloth',skin,0,-.101,0,.132,.22,.119);
    piece(forearm,'sphere',skin,0,-.227,.012,.082,.084,.077);
    forearms.push(forearm);
    arms.push(arm);
    const leg = new T.Group();
    leg.position.set(side * .128,.94,0);
    body.add(leg);
    piece(leg,'cloth',trousers,0,-.205,0,.210,.427,.228);
    const shin=new T.Group();
    shin.position.y=-.412;
    leg.add(shin);
    piece(shin,'cloth',trousers,0,-.18,0,.182,.38,.198);
    piece(shin,'cloth',hero?0xd2c3a8:0x302b29,0,-.386,.062,.201,.143,.304);
    piece(shin,'cloth',hero?0x685d53:0x292523,0,-.445,.059,.202,.037,.313);
    shins.push(shin);
    legs.push(leg);
  }
  const pistol = new T.Group();
  pistol.position.set(0,-.227,.012);
  piece(pistol,'box',0x283639,0,.012,-.002,.066,.078,.12,true);
  piece(pistol,'box',0x283639,0,-.105,.054,.074,.25,.079,true);
  piece(pistol,'box',0x9c9c8b,0,-.189,.095,.031,.028,.018);
  const muzzle=new T.Object3D();
  muzzle.position.set(0,-.235,.053);
  pistol.add(muzzle);
  forearms[0].add(pistol);
  for (const part of [body,...arms,...forearms,...legs,...shins,pistol]) combineParts(part,meshes(part));
  pistol.visible = false;
  scene.add(root);
  return {root, body, arms, legs, forearms, shins, pistol, muzzle, shadow, stride:0};
}

export function animatePerson(person, dt, speed, aim, gun, punch=0, elevation=0, surrender=false) {
  person.stride += dt * (4.6 + speed * 1.65);
  const swing = Math.sin(person.stride) * Math.min(.78,speed * .15);
  person.body.position.set(0,Math.abs(swing)*.072,0);
  person.body.rotation.set(0,0,0);
  person.legs[0].rotation.set(swing,0,0);
  person.legs[1].rotation.set(-swing,0,0);
  person.shins[0].rotation.set(Math.max(0,swing)*.51,0,0);
  person.shins[1].rotation.set(Math.max(0,-swing)*.51,0,0);
  for(const forearm of person.forearms) forearm.rotation.set(0,0,0);
  person.arms[0].rotation.set(aim?-Math.PI/2+elevation:-swing*.76,0,0);
  person.arms[1].rotation.set(aim?-1.16:swing*.76,0,0);
  person.arms[0].rotation.z=surrender?-.25:0;
  person.arms[1].rotation.z=surrender?.25:0;
  if(surrender) person.arms[0].rotation.x=person.arms[1].rotation.x=-2.55;
  if(punch>0) {
    const extension=Math.sin(punch*Math.PI);
    person.arms[1].rotation.x=-.64;
    person.arms[0].rotation.x=-.50-extension*1.11;
    person.forearms[0].rotation.x=-.62*(1-extension);
    person.body.rotation.y=-extension*.37;
  } else person.body.rotation.y=0;
  person.pistol.visible = gun;
}

const downAxis=new T.Vector3(0,-1,0);
const aimJoint=new T.Vector3(), aimDirection=new T.Vector3(), aimHint=new T.Vector3();
const limbTarget=new T.Vector3(), limbVector=new T.Vector3();
const limbRotation=new T.Quaternion();
function bendLimb(upper,lower,point,lengthA,lengthB,bend) {
  aimDirection.subVectors(point,upper.position);
  const distance=Math.min(lengthA+lengthB-.001,Math.max(.015,aimDirection.length()));
  aimDirection.normalize();
  const along=(lengthA*lengthA-lengthB*lengthB+distance*distance)/(2*distance);
  aimHint.set(bend[0],bend[1],bend[2]).addScaledVector(aimDirection,-aimHint.dot(aimDirection)).normalize();
  aimJoint.copy(upper.position).addScaledVector(aimDirection,along)
    .addScaledVector(aimHint,Math.sqrt(Math.max(0,lengthA*lengthA-along*along)));
  limbVector.subVectors(aimJoint,upper.position).normalize();
  upper.quaternion.setFromUnitVectors(downAxis,limbVector);
  limbVector.copy(upper.position).addScaledVector(aimDirection,distance).sub(aimJoint).normalize();
  lower.quaternion.setFromUnitVectors(downAxis,limbVector.applyQuaternion(limbRotation.copy(upper.quaternion).invert()));
}

export function ridePerson(person,vehicle) {
  vehicle.root.updateMatrixWorld(true);
  person.root.position.copy(vehicle.body.localToWorld(limbTarget.set(0,.10,-.31)));
  person.root.quaternion.copy(vehicle.body.getWorldQuaternion(limbRotation));
  person.shadow.visible=false;
  person.pistol.visible=false;
  const lean=.63;
  person.body.rotation.set(lean,0,0);
  person.body.position.set(0,.94*(1-Math.cos(lean)),-.94*Math.sin(lean));
  person.root.updateMatrixWorld(true);
  for(let i=0;i<2;i++) {
    const side=i===0?-1:1;
    const hand=person.body.worldToLocal(vehicle.handlebar.localToWorld(limbTarget.set(side*.342,.44,-.09)));
    bendLimb(person.arms[i],person.forearms[i],hand,.23,.227,[side*.57,-1,.16]);
    const foot=person.body.worldToLocal(vehicle.body.localToWorld(limbTarget.set(side*.245,.39,-.22)));
    bendLimb(person.legs[i],person.shins[i],foot,.412,.388,[side*.65,0,1]);
  }
}

export function coupe(scene, color, police = false) {
  const root = new T.Group();
  contact(root,1.14,2.21);
  const body = new T.Group();
  root.add(body);
  const add = (shape, shade, x,y,z,w,h,d, shiny = false) => piece(body,shape,shade,x,y,z,w,h,d,shiny);
  add('box',0x252a2d,0,.44,0,1.86,.40,4.14);
  add('box',color,0,.72,0,1.94,.43,4.24,true);
  const hood=add('box',color,0,.94,1.23,1.90,.15,1.55,true);
  add('box',color,0,.93,-1.51,1.89,.14,1.10,true);
  const windows = new T.BufferGeometry();
  const vertices = [
    -.87,.92,-1.14, .87,.92,-1.14, .87,.92,.66, -.87,.92,.66,
    -.71,1.49,-.78, .71,1.49,-.78, .71,1.49,.16, -.71,1.49,.16
  ];
  windows.setAttribute('position', new T.Float32BufferAttribute(vertices,3));
  windows.setIndex([0,4,5,0,5,1, 1,5,6,1,6,2, 2,6,7,2,7,3, 3,7,4,3,4,0, 4,7,6,4,6,5]);
  windows.computeVertexNormals();
  const cabin = new T.Mesh(windows,new T.MeshStandardMaterial({color:0x365964,roughness:.24,metalness:.42,flatShading:true,side:T.DoubleSide}));
  cabin.castShadow = true;
  body.add(cabin);
  const door=new T.Group();
  door.position.set(-.974,0,.67);
  piece(door,'box',color,0,.75,-.57,.036,.38,1.18,true);
  piece(door,'box',0xccc1a7,-.024,.881,-.89,.04,.04,.15,true);
  combineParts(door,meshes(door),paintMat);
  body.add(door);
  add('box',color,0,1.495,-.31,1.43,.075,.96,true);
  add('box',0x333539,0,.69,2.126,.86,.13,.05);
  add('box',0xc8bfac,0,.54,2.13,1.92,.12,.045,true);
  add('box',0xc8bfac,0,.53,-2.13,1.93,.12,.05,true);
  add('box',0xfef0bb,0,.72,-2.132,.40,.145,.03);
  const wheels = [];
  for (const side of [-1,1]) {
    add('box',0xffe3a4,side*.68,.77,2.132,.43,.17,.055,true);
    add('box',0xa82e22,side*.65,.77,-2.132,.48,.17,.055,true);
    add('box',0x2c393c,side*.953,1.02,.30,.22,.11,.21);
    add('box',0xc7bba4,side*.98,.89,-.5,.035,.040,.26,true);
    for (const z of [-1.31,1.33]) {
      const axle = new T.Group();
      axle.position.set(side*.945,.39,z);
      root.add(axle);
      piece(axle,'cylinder',0x252628,0,0,0,.408,.26,.408).rotation.z = Math.PI / 2;
      piece(axle,'cylinder',0xa8a7a4,side*.138,0,0,.217,.02,.217,true).rotation.z = Math.PI / 2;
      wheels.push(axle);
    }
  }
  const lamps = [];
  if (police) {
    lamps.push(add('box',0xed4736,-.33,1.62,-.32,.55,.14,.25));
    lamps.push(add('box',0x53b9ee,.33,1.62,-.32,.55,.14,.25));
  }
  const bodyParts=meshes(body).filter(part=>part!==cabin && part!==hood && !lamps.includes(part));
  combineParts(body,bodyParts.filter(part=>part.material.metalness===0));
  combineParts(body,bodyParts.filter(part=>part.material.metalness>0),paintMat);
  for(const wheel of wheels) combineParts(wheel,meshes(wheel));
  body.traverse(object=>{
    if(object instanceof T.Mesh) object.castShadow=false;
  });
  const smoke=new T.Group();
  const cloudMaterial=new T.MeshBasicMaterial({color:0x655f58,transparent:true,opacity:.29,depthWrite:false});
  for(let i=0;i<3;i++) {
    const cloud=new T.Mesh(sphere,cloudMaterial);
    smoke.add(cloud);
  }
  smoke.position.set(0,1.04,1.25);
  smoke.visible=false;
  root.add(smoke);
  scene.add(root);
  return {root,body,cabin,wheels,lamps,hood,smoke,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,
    steer:0,impact:0,stolen:false,abandoned:0,driver:null,routeIndex:-1,smokeTime:0,kind:'car',rider:null,door,doorTime:0,wheelSpin:0,handlebar:null};
}

export function motorcycle(scene,color) {
  const bike=coupe(scene,color);
  const {body,hood,wheels,smoke}=bike;
  body.clear();
  bike.root.remove(...wheels);
  wheels.length=0;
  bike.kind='bike';
  bike.cabin=null;
  bike.root.children[0].scale.set(.42,1.07,1);
  const add=(shape,shade,x,y,z,w,h,d)=>piece(body,shape,shade,x,y,z,w,h,d);
  add('box',0x3b3d3c,0,.48,-.04,.32,.38,.70);
  add('sphere',color,0,.89,.34,.24,.23,.46);
  add('box',0x24292a,0,.85,-.36,.36,.13,.59);
  add('box',color,0,.65,-.70,.32,.17,.58);
  add('box',0xd4b58a,0,.80,.88,.25,.21,.11);
  add('box',0x9f352c,0,.70,-.99,.20,.11,.11);
  const handlebar=new T.Group();
  handlebar.position.set(0,.76,.38);
  piece(handlebar,'box',0x3c4242,0,.44,-.09,.684,.057,.059);
  piece(handlebar,'box',0x677579,0,.25,.02,.061,.39,.058).rotation.x=-.46;
  combineParts(handlebar,meshes(handlebar));
  bike.handlebar=handlebar;
  body.add(handlebar);
  add('box',0x535552,0,.39,-.22,.52,.07,.11);
  add('box',0xb0aaa0,.232,.36,-.54,.12,.12,.72);
  hood.visible=false;
  body.add(hood);
  smoke.position.set(0,.55,.32);
  for(const z of [-.73,.78]) {
    const wheel=new T.Group();
    wheel.position.set(0,.33,z);
    piece(wheel,'cylinder',0x252629,0,0,0,.33,.12,.33).rotation.z=Math.PI/2;
    piece(wheel,'cylinder',0x858485,0,0,0,.205,.14,.205).rotation.z=Math.PI/2;
    combineParts(wheel,meshes(wheel));
    wheels.push(wheel);
    body.add(wheel);
    add('box',0x5b6160,0,.55,z,.09,.49,.085).rotation.x=z>0?-.21:.46;
  }
  combineParts(body,meshes(body).filter(mesh=>mesh!==hood));
  return bike;
}

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
  car.body.rotation.x=-Math.atan2((front-back)/(bike?1:2),bike?1.51:2.64);
  const lean=bike?(car.integrity<=0?1.25:-steer*Math.min(.53,Math.abs(car.speed)*.039)):steer*Math.min(.09,Math.abs(car.speed)*.004);
  const camber=bike?0:Math.atan2((right-left)*.5,1.89);
  car.body.rotation.z+=(lean+camber-car.body.rotation.z)*(dt>0?Math.min(1,dt*(bike?7:13)):1);
  car.doorTime=Math.max(0,car.doorTime-dt);
  car.door.rotation.y=Math.sin(Math.min(1,car.doorTime/.65)*Math.PI)*1.06;
  const radius=bike?.33:.408;
  const tilt=bike?car.body.rotation.z:0;
  car.root.position.set(car.x,ground+(bike?Math.abs(Math.sin(tilt))*.06:0),car.z);
  if(car.handlebar) car.handlebar.rotation.y=steer*.22;
  car.wheelSpin=(car.wheelSpin+car.speed*dt/radius)%(Math.PI*2);
  car.wheels.forEach((wheel,i)=>{
    if(!bike) wheel.position.y=heights[i]-ground+radius;
    wheel.rotation.set(car.wheelSpin,wheel.position.z>0?steer*(bike?.22:.23):0,0,'YXZ');
  });
  car.hood.rotation.x=(100-car.integrity)*.0031;
  car.hood.rotation.z=(100-car.integrity)*.0013;
  car.smoke.visible=car.integrity<43;
  if(car.smoke.visible) {
    car.smokeTime+=dt;
    car.smoke.children.forEach((cloud,i)=>{
      const phase=(car.smokeTime*(car.integrity<=0?.72:1.04)+i/3)%1;
      cloud.position.set(Math.sin(i*3.9+phase*3)*phase*.4,phase*1.85,-phase*.58);
      cloud.scale.setScalar(.12+phase*.32);
    });
  }
}
