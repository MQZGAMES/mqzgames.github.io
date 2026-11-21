import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { defaultLook, metals } from './looks.js';

const box = new T.BoxGeometry();
const cloth = new RoundedBoxGeometry(1,1,1,2,.29);
const sphere = new T.SphereGeometry(1, 10, 7);
const cylinder = new T.CylinderGeometry(1, 1, 1, 12);
const materials = new Map();
const characterMat = new T.MeshStandardMaterial({vertexColors:true,roughness:.82});
export const paintMat = new T.MeshStandardMaterial({vertexColors:true,roughness:.36,metalness:.18});

export function combineParts(group,parts,material=characterMat) {
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

export const meshes = group => group.children.filter(child=>child instanceof T.Mesh);
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
export function contact(group, x, z) {
  const shadow = new T.Mesh(shadowGeo, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = .025;
  shadow.scale.set(x,z,1);
  group.add(shadow);
  return shadow;
}

const torus = new T.TorusGeometry(1,.09,6,18);
const jewelryMat = new T.MeshStandardMaterial({vertexColors:true,roughness:.22,metalness:.9});

/** Legacy signature kept for tests and simple extras. */
export function person(scene, shirt, trousers, skin, hero = false) {
  return character(scene,{...defaultLook(),shirtColor:shirt,legColor:trousers,skin,hair:hero?'cap':'short',
    shoeColor:hero?0xd2c3a8:0x302b29});
}

const shade=(color,amount)=>{
  const r=Math.max(0,Math.min(255,((color>>16)&255)*amount)),g=Math.max(0,Math.min(255,((color>>8)&255)*amount)),b=Math.max(0,Math.min(255,(color&255)*amount));
  return (r<<16)|(g<<8)|b;
};

/** Builds a person from a look: clothing, hair, beard, jewellery and body build. */
export function character(scene, appearance) {
  const look={...defaultLook(),...appearance};
  const {skin}=look;
  const root = new T.Group();
  root.rotation.order='YXZ';
  root.scale.set(look.width,look.height,look.width);
  const shadow=contact(root,.41,.38);
  const body = new T.Group();
  root.add(body);
  const add = (shape, color, x, y, z, w, h, d, shines=false) => piece(body,shape,color,x,y,z,w,h,d,shines);
  const bare=look.shirt==='none';
  const top=bare?skin:look.shirtColor;
  add('cloth',look.legColor,0,.94,0,.44,.25,.29);
  add('sphere',top,0,1.24,0,.275,.29,.174);
  if(bare && look.feminine) add('sphere',look.shirtColor,0,1.34,.014,.277,.112,.172);
  if(look.shirt==='tank') {
    add('sphere',skin,0,1.47,0,.105,.064,.115);
    for(const side of [-1,1]) add('sphere',top,side*.174,1.435,0,.103,.066,.137);
  }
  if(look.shirt==='dress') {
    add('cloth',shade(top,1.25),0,1.47,.06,.3,.06,.2);
    add('cloth',shade(top,1.18),0,1.25,.158,.05,.4,.012);
  }
  add('cloth',bare?0x3b2a20:0x4a3b2c,0,1.05,.006,.473,.049,.312);
  add('cloth',0xc4b45a,-.128,1.05,.16,.06,.05,.01);
  add('cylinder',skin,0,1.50,0,.09,.13,.09);
  add('sphere',skin,0,1.67,.015,.168,.197,.157);
  add('sphere',skin,0,1.655,.165,.033,.034,.034);
  add('cloth',0x56413a,0,1.588,.154,.072,.012,.015);
  for(const side of [-1,1]) {
    add('sphere',skin,side*.155,1.66,.023,.032,.052,.025);
    add('cloth',0x2c2928,side*.061,1.711,.152,.043,.012,.012);
    add('cloth',0xa79e91,side*.061,1.692,.156,.032,.012,.012);
    add('cloth',0x2e2823,side*.06,1.693,.163,.016,.012,.009);
  }
  const hair=look.hairColor;
  switch(look.hair) {
    case 'buzz': add('sphere',hair,0,1.735,-.02,.172,.105,.158); break;
    case 'short': add('sphere',hair,0,1.77,-.031,.162,.112,.141); break;
    case 'afro': add('sphere',hair,0,1.8,-.035,.235,.19,.225); break;
    case 'long':
      add('sphere',hair,0,1.765,-.03,.175,.12,.16);
      add('cloth',hair,0,1.6,-.115,.32,.34,.1);
      break;
    case 'mohawk':
      add('sphere',shade(skin,.8),0,1.735,-.02,.171,.1,.157);
      add('cloth',hair,0,1.83,-.02,.05,.11,.3);
      break;
    case 'cap':
      add('sphere',look.capColor,0,1.79,.012,.181,.132,.164);
      add('cloth',shade(look.capColor,1.2),0,1.77,.159,.27,.033,.17);
      break;
    default: break;
  }
  const beard=look.beard;
  if(beard==='stubble') add('cloth',shade(skin,.68),0,1.585,.09,.3,.1,.13);
  if(beard==='full') add('cloth',hair,0,1.585,.085,.33,.13,.16);
  if(beard==='goatee' || beard==='chevron') add('cloth',hair,0,1.555,.15,.07,.075,.04);
  if(beard==='mustache' || beard==='chevron' || beard==='full') add('cloth',hair,0,1.618,.164,.1,.022,.02);
  if(look.glasses) {
    add('cloth',0x111111,0,1.703,.163,.25,.05,.02);
    for(const side of [-1,1]) add('cloth',0x111111,side*.155,1.705,.08,.012,.018,.16);
  }
  if(look.earrings!=='none') for(const side of [-1,1]) add('sphere',metals[look.earrings],side*.162,1.625,.03,.016,.016,.016,true);
  if(look.chain!=='none') {
    const chain=add('box',metals[look.chain],0,1.43,.06,.15,.15,.15,true);
    chain.geometry=torus;
    chain.rotation.x=Math.PI/2-.42;
    add('box',metals[look.chain],0,1.32,.165,.04,.05,.015,true);
  }
  const arms = [], legs = [], forearms=[], shins=[];
  for (const side of [-1,1]) {
    const arm = new T.Group();
    arm.position.set(side * .31,1.42,0);
    body.add(arm);
    const sleeve=look.shirt==='tee'||look.shirt==='dress';
    piece(arm,'cloth',sleeve?top:skin,0,-.105,0,sleeve?.173:.15,.226,sleeve?.187:.16);
    const forearm=new T.Group();
    forearm.position.y=-.23;
    arm.add(forearm);
    piece(forearm,'cloth',look.shirt==='dress'?top:skin,0,-.101,0,.132,.22,.119);
    piece(forearm,'sphere',skin,0,-.227,.012,.082,.084,.077);
    if(side===1 && look.watch!=='none') {
      piece(forearm,'cloth',0x2a2522,0,-.17,0,.14,.04,.128);
      piece(forearm,'box',metals[look.watch],0,-.17,.065,.05,.045,.012,true);
    }
    if(side===-1 && look.ring!=='none') piece(forearm,'box',metals[look.ring],.03,-.27,.05,.022,.022,.022,true);
    forearms.push(forearm);
    arms.push(arm);
    const leg = new T.Group();
    leg.position.set(side * .128,.94,0);
    body.add(leg);
    piece(leg,'cloth',look.legColor,0,-.205,0,.210,.427,.228);
    const shin=new T.Group();
    shin.position.y=-.412;
    leg.add(shin);
    const shorts=look.legs==='shorts';
    piece(shin,'cloth',shorts?skin:look.legColor,0,-.18,0,shorts?.15:.182,.38,shorts?.16:.198);
    if(look.shoes==='flipflops') {
      piece(shin,'cloth',skin,0,-.405,.06,.12,.08,.24);
      for(const branch of [-1,1]) piece(shin,'cloth',look.shoeColor,branch*.033,-.366,.09,.023,.019,.1).rotation.y=-branch*.55;
      piece(shin,'cloth',look.shoeColor,0,-.455,.059,.15,.025,.29);
    } else {
      const shoe=look.shoes==='dress'?0x1d1612:look.shoeColor;
      piece(shin,'cloth',shoe,0,-.386,.062,.201,.143,.304);
      piece(shin,'cloth',look.shoes==='dress'?0x120e0b:shade(shoe,.55),0,-.445,.059,.202,.037,.313);
    }
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
  // Rifle: stock towards the shoulder, barrel along the aiming forearm.
  const rifle = new T.Group();
  rifle.position.set(0,-.227,.03);
  piece(rifle,'box',0x2b2a28,0,.0,.05,.08,.12,.06,true);
  piece(rifle,'box',0x23272a,0,-.2,.07,.07,.5,.11,true);
  piece(rifle,'box',0x1c1e1f,0,-.62,.08,.035,.42,.035,true);
  piece(rifle,'box',0x5a4532,0,.22,.06,.07,.32,.12);
  piece(rifle,'box',0x23272a,0,-.18,-.02,.05,.16,.12,true);
  const rifleMuzzle=new T.Object3D();
  rifleMuzzle.position.set(0,-.84,.08);
  rifle.add(rifleMuzzle);
  forearms[0].add(rifle);
  for (const part of [body,...arms,...forearms,...legs,...shins,pistol,rifle]) {
    const parts=meshes(part);
    combineParts(part,parts.filter(mesh=>mesh.material.metalness===0));
    combineParts(part,parts.filter(mesh=>mesh.material.metalness>0),jewelryMat);
  }
  pistol.visible = false;
  rifle.visible = false;
  scene.add(root);
  return {root, body, arms, legs, forearms, shins, pistol, rifle, muzzle, rifleMuzzle, shadow, stride:0, weapon:'pistol', look};
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
  const longGun=gun && person.weapon==='rifle';
  person.arms[0].rotation.set(aim?-Math.PI/2+elevation:-swing*.76,0,0);
  person.arms[1].rotation.set(aim?(longGun?-Math.PI/2+elevation+.12:-1.16):swing*.76,0,aim&&longGun?.42:0);
  if(aim && longGun) person.forearms[1].rotation.set(-.35,0,0);
  person.arms[0].rotation.z=surrender?-.25:0;
  if(surrender || !(aim && longGun)) person.arms[1].rotation.z=surrender?.25:0;
  if(surrender) person.arms[0].rotation.x=person.arms[1].rotation.x=-2.55;
  if(punch>0) {
    const extension=Math.sin(punch*Math.PI);
    person.arms[1].rotation.x=-.64;
    person.arms[0].rotation.x=-.50-extension*1.11;
    person.forearms[0].rotation.x=-.62*(1-extension);
    person.body.rotation.y=-extension*.37;
  } else person.body.rotation.y=0;
  person.pistol.visible = gun && person.weapon!=='rifle';
  if(person.rifle) person.rifle.visible = gun && person.weapon==='rifle';
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

/** Collapse: knees give way, then the body topples forwards (dir 1) or backwards (dir -1). */
export function poseFall(person,time,dir) {
  const buckle=Math.min(1,time/.22);
  const topple=Math.min(1,Math.max(0,(time-.12)/.5));
  const eased=topple*topple*(3-2*topple);
  const bounce=time>.62?Math.sin(Math.min(1,(time-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(time-.62)/.25)):0;
  const tilt=dir*(eased*1.5-bounce);
  person.body.position.set(0,-.16*buckle*(1-eased),0);
  person.body.rotation.set(dir*.2*buckle,0,0);
  person.legs[0].rotation.set(-.55*buckle*(1-eased)+.1*eased,0,-.12*eased);
  person.legs[1].rotation.set(-.35*buckle*(1-eased)-.15*eased,0,.14*eased);
  person.shins[0].rotation.set(1.05*buckle*(1-eased)+.2*eased,0,0);
  person.shins[1].rotation.set(.75*buckle*(1-eased)+.35*eased,0,0);
  const flail=Math.sin(Math.min(1,time/.5)*Math.PI);
  person.arms[0].rotation.set(-dir*(.6*flail+.4*eased),0,-.35-.6*eased);
  person.arms[1].rotation.set(-dir*(.9*flail+.3*eased),0,.35+.7*eased);
  person.forearms[0].rotation.set(-.5*flail-.2,0,0);
  person.forearms[1].rotation.set(-.3*flail-.3,0,0);
  person.pistol.visible=false;
  return tilt;
}
