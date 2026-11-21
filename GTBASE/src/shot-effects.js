import * as T from 'three';

const marksMax=44, roundsMax=12;
const yAxis=new T.Vector3(0,1,0), zAxis=new T.Vector3(0,0,1);
const turn=new T.Quaternion(), matrix=new T.Matrix4();
const position=new T.Vector3(), scale=new T.Vector3(), normal=new T.Vector3();
const worldNormal=new T.Matrix3();

function bulletHoleTexture() {
  const width=32, pixels=new Uint8Array(width*width*4);
  for(let y=0;y<width;y++) for(let x=0;x<width;x++){
    const px=(x-width*.5+.5)/(width*.5),py=(y-width*.5+.5)/(width*.5);
    const angle=Math.atan2(py,px);
    const distance=Math.hypot(px,py);
    const edge=.78+Math.sin(angle*5.0)*.075+Math.sin(angle*11)*.067;
    const core=distance<.35+Math.sin(angle*4)*.06;
    const speck=((x*239+y*167)%19)/19;
    const gray=core?9+speck*27:101+speck*64;
    const opacity=core?.99:Math.min(.84,Math.max(0,(edge-distance)*3.6))*(.51+speck*.49);
    const offset=(y*width+x)*4;
    pixels[offset]=gray;
    pixels[offset+1]=gray*.92;
    pixels[offset+2]=gray*.81;
    pixels[offset+3]=Math.round(opacity*255);
  }
  const texture=new T.DataTexture(pixels,width,width,T.RGBAFormat);
  texture.colorSpace=T.SRGBColorSpace;
  texture.magFilter=T.LinearFilter;
  texture.minFilter=T.LinearFilter;
  texture.needsUpdate=true;
  return texture;
}

function instances(scene,geometry,material,count) {
  const mesh=new T.InstancedMesh(geometry,material,count);
  mesh.frustumCulled=false;
  mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
  scene.add(mesh);
  return mesh;
}

function fadingMarks(scene) {
  const geometry=new T.PlaneGeometry(1,1);
  const fade=new T.InstancedBufferAttribute(new Float32Array(marksMax),1);
  fade.setUsage(T.DynamicDrawUsage);
  geometry.setAttribute('markAlpha',fade);
  const material=new T.MeshBasicMaterial({
    map:bulletHoleTexture(),transparent:true,depthWrite:false,
    alphaTest:.035,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2
  });
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <common>',
      '#include <common>\nattribute float markAlpha;\nvarying float vMarkAlpha;')
      .replace('#include <begin_vertex>','#include <begin_vertex>\nvMarkAlpha=markAlpha;');
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',
      '#include <common>\nvarying float vMarkAlpha;')
      .replace('#include <alphatest_fragment>','diffuseColor.a*=vMarkAlpha;\n#include <alphatest_fragment>');
  };
  const mesh=instances(scene,geometry,material,marksMax);
  mesh.renderOrder=3;
  return {mesh,fade};
}

export function createShotEffects(scene) {
  const {mesh:holes,fade}=fadingMarks(scene);
  const tracerMaterial=new T.MeshBasicMaterial({color:0xffffff,toneMapped:false,depthWrite:false,transparent:true,opacity:.83});
  const tracer=instances(scene,new T.CylinderGeometry(.015,.015,1,5),tracerMaterial,roundsMax);
  const flashMaterial=new T.MeshBasicMaterial({color:0xffd793,toneMapped:false,depthWrite:false,transparent:true,opacity:.83});
  const flash=instances(scene,new T.IcosahedronGeometry(1,0),flashMaterial,roundsMax);
  const sparkMaterial=new T.MeshBasicMaterial({color:0xffc780,toneMapped:false,depthWrite:false,transparent:true,opacity:.75});
  const spark=instances(scene,new T.OctahedronGeometry(1),sparkMaterial,roundsMax);
  const slots=Array.from({length:roundsMax},()=>({
    age:Infinity,distance:0,point:new T.Vector3(),start:new T.Vector3(),direction:new T.Vector3(),surface:null
  }));
  const marks=Array.from({length:marksMax},()=>({
    time:0,life:0,point:new T.Vector3(),normal:new T.Vector3(),attachment:null,radius:0
  }));
  let roundIndex=0,markIndex=0;
  const paused=new T.Matrix4().makeScale(0,0,0);
  const playerTrace=new T.Color(0xffdc8e), enemyTrace=new T.Color(0xffa771);
  function reset() {
    for(let i=0;i<roundsMax;i++){
      slots[i].age=Infinity;
      tracer.setMatrixAt(i,paused);
      flash.setMatrixAt(i,paused);
      spark.setMatrixAt(i,paused);
    }
    for(let i=0;i<marksMax;i++){
      marks[i].time=0;
      marks[i].attachment=null;
      holes.setMatrixAt(i,paused);
      fade.setX(i,0);
    }
    tracer.instanceMatrix.needsUpdate=flash.instanceMatrix.needsUpdate=spark.instanceMatrix.needsUpdate=holes.instanceMatrix.needsUpdate=fade.needsUpdate=true;
    roundIndex=markIndex=0;
  }
  reset();

  function emit(origin,result,{enemy=false,mark=result.surface==='solid'||result.surface==='ground',attach=null}={}) {
    const slot=slots[roundIndex];
    const index=roundIndex;
    roundIndex=(roundIndex+1)%roundsMax;
    slot.start.fromArray(origin);
    slot.point.fromArray(result.point);
    slot.distance=slot.start.distanceTo(slot.point);
    slot.direction.subVectors(slot.point,slot.start).normalize();
    slot.surface=result.surface;
    slot.age=0;
    tracer.setColorAt(index,enemy?enemyTrace:playerTrace);
    tracer.instanceColor.needsUpdate=true;
    if(mark && result.normal && result.surface){
      const trace=marks[markIndex];
      markIndex=(markIndex+1)%marksMax;
      trace.life=(result.surface==='ground'?8:13)+Math.random()*4;
      trace.time=trace.life;
      trace.point.copy(slot.point);
      trace.normal.fromArray(result.normal).normalize();
      trace.attachment=attach;
      trace.radius=.053+Math.random()*.031;
      if(attach) {
        attach.updateWorldMatrix(true,false);
        attach.worldToLocal(trace.point);
        trace.normal.transformDirection(matrix.copy(attach.matrixWorld).invert());
      }
    }
  }

  function update(dt) {
    let roundsChanged=false,marksChanged=false;
    for(let i=0;i<roundsMax;i++){
      const slot=slots[i];
      if(!Number.isFinite(slot.age)) continue;
      roundsChanged=true;
      slot.age+=dt;
      // Damage is immediate, with a brief streak that moves along the tested ray.
      const speed=234;
      const head=Math.min(slot.distance,slot.age*speed+1.7);
      const tail=Math.max(0,slot.age*speed-3.1);
      const span=head-tail;
      if(span>.018){
        position.copy(slot.start).addScaledVector(slot.direction,(head+tail)*.5);
        turn.setFromUnitVectors(yAxis,slot.direction);
        const width=Math.min(1,span/1.3);
        matrix.compose(position,turn,scale.set(width,span,width));
        tracer.setMatrixAt(i,matrix);
      } else tracer.setMatrixAt(i,paused);
      if(slot.age<.071){
        const size=Math.max(.025,.084-slot.age*.78);
        turn.setFromUnitVectors(yAxis,slot.direction);
        position.copy(slot.start).addScaledVector(slot.direction,.052);
        matrix.compose(position,turn,scale.set(size,size*2.2,size));
        flash.setMatrixAt(i,matrix);
      } else flash.setMatrixAt(i,paused);
      const afterHit=slot.age-slot.distance/speed;
      if(slot.surface && afterHit>=0 && afterHit<.13){
        const size=Math.max(.006,.041-afterHit*.27);
        position.copy(slot.point).addScaledVector(slot.direction,-(.039+afterHit*.38));
        turn.setFromUnitVectors(yAxis,slot.direction);
        matrix.compose(position,turn,scale.set(size,size*2.14,size));
        spark.setMatrixAt(i,matrix);
      } else spark.setMatrixAt(i,paused);
      if(slot.age>slot.distance/speed+.14) slot.age=Infinity;
    }
    for(let i=0;i<marksMax;i++){
      const mark=marks[i];
      if(mark.time<=0) continue;
      marksChanged=true;
      mark.time-=dt;
      if(mark.time<=0 || mark.attachment && !mark.attachment.visible){
        mark.time=0;
        mark.attachment=null;
        holes.setMatrixAt(i,paused);
        fade.setX(i,0);
        continue;
      }
      position.copy(mark.point);
      normal.copy(mark.normal);
      if(mark.attachment){
        mark.attachment.updateWorldMatrix(true,false);
        position.applyMatrix4(mark.attachment.matrixWorld);
        normal.applyNormalMatrix(worldNormal.getNormalMatrix(mark.attachment.matrixWorld));
      }
      position.addScaledVector(normal,.014);
      turn.setFromUnitVectors(zAxis,normal);
      matrix.compose(position,turn,scale.set(mark.radius,mark.radius,mark.radius));
      holes.setMatrixAt(i,matrix);
      fade.setX(i,Math.min(1,mark.time*.57));
    }
    if(roundsChanged) tracer.instanceMatrix.needsUpdate=flash.instanceMatrix.needsUpdate=spark.instanceMatrix.needsUpdate=true;
    if(marksChanged) holes.instanceMatrix.needsUpdate=fade.needsUpdate=true;
  }
  return {emit,update,reset};
}
