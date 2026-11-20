import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const box = new T.BoxGeometry();
const sphere = new T.SphereGeometry(1, 10, 7);
const cylinder = new T.CylinderGeometry(1, 1, 1, 12);
const materials = new Map();
const characterMat = new T.MeshStandardMaterial({vertexColors:true,roughness:.82});

function combineCharacter(group) {
  const parts=group.children.filter(child=>child instanceof T.Mesh);
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
  const mesh=new T.Mesh(mergeGeometries(geometries),characterMat);
  mesh.receiveShadow=true;
  group.add(mesh);
  for(const geometry of geometries) geometry.dispose();
}

export function piece(group, shape, color, x, y, z, w, h, d, shines = false) {
  const key = color + ':' + shines;
  if (!materials.has(key)) materials.set(key, new T.MeshStandardMaterial({
    color, roughness: shines ? .33 : .87, metalness: shines ? .2 : 0
  }));
  const mesh = new T.Mesh({box, sphere, cylinder}[shape], materials.get(key));
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
}

export function person(scene, shirt, trousers, skin, hero = false) {
  const root = new T.Group();
  contact(root,.41,.38);
  const body = new T.Group();
  root.add(body);
  const add = (shape, color, x, y, z, w, h, d) => piece(body,shape,color,x,y,z,w,h,d);
  add('box', trousers,0,.94,0,.45,.26,.28);
  add('box',shirt,0,1.24,0,.52,.48,.32);
  add('box', hero ? 0xeadd92 : shirt,0,1.34,.169,.19,.10,.025);
  add('cylinder',skin,0,1.50,0,.09,.13,.09);
  add('sphere',skin,0,1.67,.015,.168,.197,.157);
  add('sphere',0x241b19,0,1.77,-.018,.169,.112,.151);
  if (hero) {
    add('sphere',0x173b36,0,1.79,.012,.181,.132,.164);
    add('box',0x173b36,0,1.77,.146,.25,.033,.19);
  }
  const arms = [], legs = [];
  for (const side of [-1,1]) {
    const arm = new T.Group();
    arm.position.set(side * .31,1.42,0);
    body.add(arm);
    piece(arm,'box',shirt,0,-.12,0,.17,.24,.18);
    piece(arm,'box',skin,0,-.31,0,.14,.20,.13);
    piece(arm,'sphere',skin,0,-.43,.012,.082,.084,.077);
    arms.push(arm);
    const leg = new T.Group();
    leg.position.set(side * .128,.94,0);
    body.add(leg);
    piece(leg,'box',trousers,0,-.38,0,.211,.76,.226);
    piece(leg,'box',hero ? 0xe9dbc8 : 0x221e22,0,-.8,.055,.208,.15,.32);
    legs.push(leg);
  }
  const pistol = new T.Group();
  pistol.position.set(0,-.44,.065);
  piece(pistol,'box',0x283639,0,0,.075,.085,.08,.29,true);
  piece(pistol,'box',0x283639,0,-.055,0,.072,.127,.067);
  arms[1].add(pistol);
  for (const part of [body,...arms,...legs,pistol]) combineCharacter(part);
  pistol.visible = false;
  scene.add(root);
  return {root, body, arms, legs, pistol, stride:0};
}

export function animatePerson(person, dt, speed, aim, gun) {
  person.stride += dt * (4.6 + speed * 1.65);
  const swing = Math.sin(person.stride) * Math.min(.78,speed * .15);
  person.body.position.y = Math.abs(swing) * .072;
  person.legs[0].rotation.x = swing;
  person.legs[1].rotation.x = -swing;
  person.arms[0].rotation.x = aim ? -.87 : -swing * .76;
  person.arms[1].rotation.x = aim ? -1.47 : swing * .76;
  person.pistol.rotation.x = aim ? 1.47 : 0;
  person.pistol.visible = gun;
}

export function coupe(scene, color, police = false) {
  const root = new T.Group();
  contact(root,1.14,2.21);
  const body = new T.Group();
  root.add(body);
  const add = (shape, shade, x,y,z,w,h,d, shiny = false) => piece(body,shape,shade,x,y,z,w,h,d,shiny);
  add('box',0x252a2d,0,.44,0,1.86,.40,4.14);
  add('box',color,0,.72,0,1.94,.43,4.24,true);
  add('box',color,0,.94,1.23,1.90,.15,1.55,true);
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
      body.add(axle);
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
  body.traverse(object=>{
    if(object instanceof T.Mesh) object.castShadow=false;
  });
  scene.add(root);
  return {root, body, wheels, lamps, speed:0, angle:0, x:0,z:0};
}

export function poseCar(car, dt, steer = 0) {
  car.root.position.set(car.x,0,car.z);
  car.root.rotation.y = car.angle;
  car.body.rotation.z += (steer * Math.min(.09,Math.abs(car.speed)*.004) - car.body.rotation.z) * Math.min(1,dt*8);
  for (const wheel of car.wheels) {
    wheel.rotateX(car.speed * dt / .41);
  }
}
