import * as T from 'three';

const vertexShader=`
  attribute float size;
  attribute float alpha;
  attribute vec3 tint;
  varying float vAlpha;
  varying vec3 vTint;
  uniform float scale;
  void main(){
    vec4 mv=modelViewMatrix*vec4(position,1.);
    gl_PointSize=size*scale/max(.1,-mv.z);
    gl_Position=projectionMatrix*mv;
    vAlpha=alpha;
    vTint=tint;
  }`;
const fragmentShader=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;

/** Pooled point particles: one draw call for smoke and one for glowing sparks and flames. */
function particleSystem(scene,capacity,additive) {
  const position=new Float32Array(capacity*3), tint=new Float32Array(capacity*3);
  const size=new Float32Array(capacity), alpha=new Float32Array(capacity);
  const velocity=new Float32Array(capacity*3), life=new Float32Array(capacity), span=new Float32Array(capacity);
  const start=new Float32Array(capacity), end=new Float32Array(capacity), fade=new Float32Array(capacity);
  const gravity=new Float32Array(capacity), drag=new Float32Array(capacity);
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.BufferAttribute(position,3));
  geometry.setAttribute('tint',new T.BufferAttribute(tint,3));
  geometry.setAttribute('size',new T.BufferAttribute(size,1));
  geometry.setAttribute('alpha',new T.BufferAttribute(alpha,1));
  const material=new T.ShaderMaterial({vertexShader,fragmentShader,transparent:true,depthWrite:false,
    blending:additive?T.AdditiveBlending:T.NormalBlending,uniforms:{scale:{value:520}}});
  const points=new T.Points(geometry,material);
  points.frustumCulled=false;
  points.visible=false;
  points.renderOrder=4;
  scene.add(points);
  let cursor=0;
  function spawn(x,y,z,vx,vy,vz,lifetime,s0,s1,a0,color,g=0,d=0) {
    const i=cursor;
    cursor=(cursor+1)%capacity;
    position[i*3]=x;position[i*3+1]=y;position[i*3+2]=z;
    velocity[i*3]=vx;velocity[i*3+1]=vy;velocity[i*3+2]=vz;
    tint[i*3]=color.r;tint[i*3+1]=color.g;tint[i*3+2]=color.b;
    life[i]=lifetime;span[i]=lifetime;start[i]=s0;end[i]=s1;fade[i]=a0;gravity[i]=g;drag[i]=d;
    size[i]=s0;alpha[i]=a0;
    points.visible=true;
  }
  function update(dt) {
    let any=false;
    for(let i=0;i<capacity;i++) {
      if(life[i]<=0) {if(alpha[i]!==0){alpha[i]=0;size[i]=0;any=true;}continue;}
      any=true;
      life[i]-=dt;
      const k=Math.exp(-drag[i]*dt);
      velocity[i*3]*=k;velocity[i*3+2]*=k;
      velocity[i*3+1]=velocity[i*3+1]*k+gravity[i]*dt;
      position[i*3]+=velocity[i*3]*dt;position[i*3+1]+=velocity[i*3+1]*dt;position[i*3+2]+=velocity[i*3+2]*dt;
      if(gravity[i]<0 && position[i*3+1]<.05) {position[i*3+1]=.05;velocity[i*3+1]*=-.3;}
      const t=1-Math.max(0,life[i])/span[i];
      size[i]=start[i]+(end[i]-start[i])*t;
      alpha[i]=fade[i]*(1-t)*(t<.12?t/.12:1);
    }
    if(any) {
      for(const name of ['position','size','alpha','tint']) geometry.attributes[name].needsUpdate=true;
    }
    // Nothing alive: skip the draw call entirely.
    points.visible=any;
  }
  function clear() {life.fill(0);alpha.fill(0);size.fill(0);geometry.attributes.alpha.needsUpdate=true;points.visible=false;}
  return {spawn,update,clear,material};
}

export function createFx(scene) {
  const smoke=particleSystem(scene,700,false);
  const glow=particleSystem(scene,600,true);
  const color=new T.Color();
  const rand=(a,b)=>a+Math.random()*(b-a);
  // Tyre marks: recycled flat quads.
  const markCount=320;
  const marks=new T.InstancedMesh(new T.PlaneGeometry(1,1),new T.MeshBasicMaterial({color:0x141414,transparent:true,opacity:.42,
    depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),markCount);
  marks.frustumCulled=false;
  marks.renderOrder=1;
  const hidden=new T.Matrix4().makeScale(0,0,0);
  for(let i=0;i<markCount;i++) marks.setMatrixAt(i,hidden);
  scene.add(marks);
  let markCursor=0;
  const mark=new T.Object3D();

  return {
    update(dt){smoke.update(dt);glow.update(dt);},
    clear(){
      smoke.clear();glow.clear();
      for(let i=0;i<markCount;i++) marks.setMatrixAt(i,hidden);
      marks.instanceMatrix.needsUpdate=true;
    },
    setScale(value){smoke.material.uniforms.scale.value=value;glow.material.uniforms.scale.value=value;},
    /** Grey engine smoke; dark when the engine is about to burn. */
    engineSmoke(x,y,z,dark){
      color.setRGB(dark?.16:.5,dark?.15:.48,dark?.14:.45);
      smoke.spawn(x+rand(-.2,.2),y,z+rand(-.2,.2),rand(-.3,.3),rand(.9,1.5),rand(-.3,.3),rand(1.6,2.4),.5,dark?2.4:1.8,dark?.5:.32,color,0,.6);
    },
    tireSmoke(x,y,z){
      color.setRGB(.78,.76,.72);
      smoke.spawn(x,y,z,rand(-.6,.6),rand(.3,.8),rand(-.6,.6),rand(.8,1.3),.4,1.6,.3,color,0,1.4);
    },
    sparks(x,y,z,count=12,power=4){
      for(let i=0;i<count;i++) {
        color.setRGB(1,rand(.55,.85),rand(.15,.35));
        glow.spawn(x,y,z,rand(-power,power),rand(.5,power*.9),rand(-power,power),rand(.18,.45),.09,.03,1,color,-9.8,.4);
      }
    },
    flame(x,y,z,strength=1){
      color.setRGB(1,rand(.35,.6),.08);
      glow.spawn(x+rand(-.35,.35)*strength,y,z+rand(-.35,.35)*strength,rand(-.2,.2),rand(1.4,2.4),rand(-.2,.2),rand(.4,.75),.75*strength,.2,.85,color,0,.8);
      if(Math.random()<.45) {
        color.setRGB(.13,.12,.11);
        smoke.spawn(x,y+.6,z,rand(-.3,.3),rand(1.2,2),rand(-.3,.3),rand(1.8,2.8),.7,2.8,.45,color,0,.5);
      }
    },
    explosion(x,y,z){
      color.setRGB(1,.9,.6);
      glow.spawn(x,y+.6,z,0,0,0,.28,1.5,9,1,color);
      for(let i=0;i<46;i++) {
        const a=Math.random()*Math.PI*2, up=rand(.2,1), speed=rand(3,10);
        color.setRGB(1,rand(.4,.75),rand(.05,.2));
        glow.spawn(x,y+.5,z,Math.cos(a)*speed*(1-up*.5),up*speed,Math.sin(a)*speed*(1-up*.5),rand(.35,.8),rand(.6,1.4),.2,.95,color,-2,1.5);
      }
      for(let i=0;i<30;i++) {
        const a=Math.random()*Math.PI*2, speed=rand(1,4);
        color.setRGB(.1,.09,.085);
        smoke.spawn(x,y+.8,z,Math.cos(a)*speed,rand(1.5,4),Math.sin(a)*speed,rand(2.2,3.6),1.2,4.5,.7,color,0,.9);
      }
      this.sparks(x,y+.5,z,40,9);
    },
    /** One tyre-mark segment from (x0,z0) to (x1,z1). */
    skid(x0,z0,x1,z1,y=.012){
      const length=Math.hypot(x1-x0,z1-z0);
      if(length<.05) return;
      mark.position.set((x0+x1)/2,y+.013,(z0+z1)/2);
      mark.rotation.set(-Math.PI/2,0,0);
      mark.rotateZ(Math.atan2(x1-x0,z1-z0));
      mark.scale.set(.2,length+.04,1);
      mark.updateMatrix();
      marks.setMatrixAt(markCursor,mark.matrix);
      markCursor=(markCursor+1)%markCount;
      marks.instanceMatrix.needsUpdate=true;
    }
  };
}
