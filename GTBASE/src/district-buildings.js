const floorTop=.228;
const profileWall=.22;
const apartmentRise=3.58;
const frontDoorWidth=1.28;
const plaster=0xe1ccb3;
const concrete=0x81766f;
const oldPaint=0x645843;
const wood=0x754c38;
const ceramic=0xb0b2a6;

export function addDistrictBuilding(api,spec) {
  const {id,x,z,w,d,angle,kind,label,color}=spec;
  const {box,solid,door,sign,glazing,support,volume}=api;
  const upper=kind==='apartments';
  const shop=kind==='shop'||kind==='armory';
  const stories=upper?spec.stories:1;
  const rise=upper?apartmentRise:shop?4.16:3.45;
  const floorFor=level=>floorTop+level*rise;
  const localToWorld=(u,v,y=floorTop)=>({x:x+Math.cos(angle)*u+Math.sin(angle)*v,z:z-Math.sin(angle)*u+Math.cos(angle)*v,y});
  const cos=Math.abs(Math.cos(angle)),sin=Math.abs(Math.sin(angle));
  const toRect=(u,v,uw,vd)=>({...localToWorld(u,v),w:uw*cos+vd*sin,d:uw*sin+vd*cos});
  const front=d/2, back=-d/2;
  const left=-w/2, right=w/2;
  const hall=left+2.85;
  const foot=(u,v,y,uw,h,vd,tint,shadow=false,rot=0)=>{
    const p=localToWorld(u,v);
    box(p.x,y,p.z,uw,h,vd,tint,shadow,angle+rot);
  };
  const part=(u,v,y,uw,h,vd,tint,shadow=true)=>{
    foot(u,v,y,uw,h,vd,tint,shadow);
    const bounds=toRect(u,v,uw,vd);
    solid.push({x:bounds.x,z:bounds.z,w:bounds.w,d:bounds.d,y0:y-h*.5,h:y+h*.5,buildingId:id});
  };
  const wallAt=(floor,u,v,uw,vd,high,tint)=>part(u,v,floor+high/2,uw,high,vd,tint);
  const horizontal=(floor,v,min,max,high,tint)=>wallAt(floor,(min+max)/2,v,max-min,profileWall,high,tint);
  const vertical=(floor,u,min,max,high,tint)=>wallAt(floor,u,(min+max)/2,profileWall,max-min,high,tint);
  const ground=(u,v,uw,vd,y,tint)=>{
    part(u,v,y-.066,uw,.132,vd,tint,false);
    solid[solid.length-1].walkSurface=true;
    support.push({...toRect(u,v,uw,vd),y,buildingId:id});
  };
  const addDoor=(u,v,base,width,panel,tags,rot=0)=>{
    const hinge=localToWorld(u,v,base);
    return door(hinge.x,hinge.z,angle+rot,width,panel,base,{buildingId:id,...tags});
  };

  const frontPosition=upper?left+1.43:spec.doorAt??.10;
  const glazingWidth=Math.min(w*.25,3.72);
  const displayWindows=shop?[frontPosition-w*.248,frontPosition+w*.248]:[];
  const doors=[];
  if(!shop) {
    const height=stories*rise;
    part(0,0,floorTop+height/2,w,height,d,color);
    foot(0,0,floorTop+height+.10,w+.36,.20,d+.36,spec.upperColor,true);
    foot(0,front+.055,1.35,1.22,2.24,.11,wood);
    for(let level=0;level<stories;level++) {
      for(const u of [-w*.31,w*.31]) {
        foot(u,front+.06,floorFor(level)+1.88,1.74,1.25,.13,0x526970);
        foot(u,front+.12,floorFor(level)+1.22,1.93,.10,.20,concrete);
      }
    }
    return {id,kind,label,units:[],doorIds:[],clerk:null};
  }
  const main=addDoor(frontPosition-frontDoorWidth/2,front,floorTop,frontDoorWidth,shop?0x41636a:0x685041,
    {private:!upper&&!shop,unitId:upper||shop?null:id+':0',normallyOpen:spec.open===true});
  doors.push(main.id);
  const entry=localToWorld(frontPosition,front);
  const outside=localToWorld(frontPosition,front+1.05,.16);
  const inside=localToWorld(frontPosition,front-1.05);
  const curb=localToWorld(frontPosition,front+2.45,.16);
  const units=[];
  let clerk=null;
  for(let level=0;level<stories;level++) {
    const base=floorFor(level),unitHigh=rise-.14;
    volume.push({...toRect(0,0,w-.20,d-.20),floor:base,ceiling:base+unitHigh,buildingId:id});
    // Continuous upper floors close the rooms, with an open stairwell between the landings.
    if(!upper || level===0) ground(0,0,w-.03,d-.03,base,shop?0xb6b09a:0xa89a82);
    else {
      ground((hall+right)/2,0,right-hall,d-.10,base,0xa99b83);
      for(const end of [-1,1]) ground((left+hall)/2,end*(front-.73),hall-left,1.46,base,0x9f9b8c);
    }
    const tint=level===0?color:spec.upperColor??color;
    vertical(base,left,back,front,unitHigh,tint);
    vertical(base,right,back,front,unitHigh,tint);
    horizontal(base,back,left,right,unitHigh,tint);
    if(level===0) {
      let cursor=left;
      const cuts=[{center:frontPosition,width:frontDoorWidth,door:true},...displayWindows.map(center=>({center,width:glazingWidth,door:false}))];
      cuts.sort((a,b)=>a.center-b.center);
      for(const cut of cuts) {
        const start=cut.center-cut.width*.5,end=cut.center+cut.width*.5;
        horizontal(base,front,cursor,start,unitHigh,tint);
        cursor=end;
        if(cut.door) continue;
        const sill=.61, header=2.58, glassHeight=header-sill;
        wallAt(base,cut.center,front,cut.width,.22,sill,tint);
        wallAt(base+header,cut.center,front,cut.width,.22,unitHigh-header,tint);
        const glassCenter=localToWorld(cut.center,front+.068,base+(header+sill)*.5);
        glazing(glassCenter.x,glassCenter.y,glassCenter.z,cut.width,glassHeight,angle);
        const collider=toRect(cut.center,front,cut.width,.20);
        solid.push({x:collider.x,z:collider.z,w:collider.w,d:collider.d,y0:base+sill,h:base+header,buildingId:id});
        for(const side of [-1,0,1]) foot(cut.center+side*(cut.width*.5-.042),base+(header+sill)*.5,front+.13,.070,glassHeight,.084,0x5b6460,false);
        for(const rail of [sill,sill+glassHeight*.34,header]) foot(cut.center,base+rail,front+.13,cut.width+.07,.081,.096,0x778178,false);
        foot(cut.center,base+sill-.025,front+.17,cut.width+.20,.091,.25,0x999580,false);
        const sillInset=front-.48;
        foot(cut.center,base+.83,sillInset,cut.width-.24,.078,.45,0xb39d7c,false);
        for(const offset of [-.78,-.39,.39,.78]) {
          foot(cut.center+offset,base+.95+(Math.abs(offset)<.50?.055:0),sillInset,.23,.26,.26,spec.awning??0xb87954,false);
        }
      }
      horizontal(base,front,cursor,right,unitHigh,tint);
      part(frontPosition,front,base+2.22+(unitHigh-2.22)/2,frontDoorWidth,unitHigh-2.22,.21,tint);
    } else horizontal(base,front,left,right,unitHigh,tint);
    foot(0,base+.25,front+.04,w+.05,.34,.11,concrete,false);
    for(const wing of [left+.17,right-.17]) foot(wing,base+unitHigh/2,front+.11,.22,unitHigh,.17,trimmed(tint),false);
    foot(0,base+rise-.05,front+.07,w+.25,.22,.13,trimmed(tint),false);
    // Deep surrounds and shutters read as architectural elements rather than billboard windows.
    for(const slot of level===0&&shop?[]:[left+w*.25,left+w*.51,left+w*.77]) {
      if(level===0 && Math.abs(slot-frontPosition)<1.35) continue;
      const size=shop?2.06:1.44;
      foot(slot,base+1.66,front+.104,size+.20,1.29,.19,0x655b53,false);
      foot(slot,base+1.66,front+.215,size,1.11,.055,shop?0x547886:0x40565f,false);
      for(const offset of [-size*.45,0,size*.45]) foot(slot+offset,base+1.66,front+.252,.052,1.11,.037,shop?0xb7bdad:0xb0a28c,false);
      foot(slot,base+1.45,front+.252,size,.052,.037,0xaaa385,false);
      foot(slot,base+1.10,front+.264,size+.25,.11,.19,trimmed(tint),false);
      if(level>0 && slot===left+w*.77) {
        foot(slot,base+.92,front+.41,size+.24,.12,.64,concrete,true);
        for(const offset of [-.56,-.28,0,.28,.56]) foot(slot+offset,base+1.27,front+.72,.039,.60,.055,oldPaint,false);
        foot(slot,base+1.58,front+.72,size,.055,.061,oldPaint,false);
      }
    }
    for(const side of [left,right]) {
      for(const v of [back+2.14,front-2.0]) {
        const outer=side===left?-.128:.128;
        foot(side+outer,base+1.82,v,.08,1.11,1.37,0x586d6e,false);
        foot(side+outer*1.65,base+1.24,v,.20,.10,1.53,trimmed(tint),false);
        foot(side+outer*1.5,base+1.82,v,.064,1.10,.059,trimmed(tint),false);
      }
    }

    if(shop) {
      clerk=localToWorld(0,back+1.89,base);
      clerk.angle=angle;
      const show=localToWorld(0,front+.18,base+rise-.64);
      sign(label,show.x,show.y,show.z,angle,0x315453,Math.min(5.25,w-.72),.58);
      foot(0,base+rise-1.37,front+.60,w-.56,.19,1.22,spec.awning??0x77563f,true);
      for(let offset=left+.68;offset<right-.42;offset+=.46) {
        foot(offset,base+rise-1.46,front+1.21,.225,.23,.062,0xd5b88d,false);
      }
      part(.46,back+3.0,base+.55,4.40,1.10,.70,0x6a5343);
      foot(.46,base+1.15,back+3.0,4.58,.14,.79,0xb9a68b,true);
      foot(1.33,base+1.42,back+3.02,.48,.41,.36,0x3e4d4e,false);
      foot(1.33,base+1.58,back+3.22,.34,.19,.051,0x79989a,false);
      for(const column of [left+.46,right-.46]) {
        for(const slot of [back+1.75,back+4.20]) {
          part(column,slot,base+.83,.61,1.66,1.79,0x6b6157);
          for(let shelf=0;shelf<3;shelf++) {
            for(const item of [-.55,-.17,.22,.57]) {
              const color=[0xbe9668,0xb66547,0x5b827b][(Math.floor((item+.6)*2.3)+shelf)%3];
              foot(column+(column<0?.37:-.37),base+.47+shelf*.43,slot+item,.15,.25,.22,color,false);
            }
          }
        }
      }
      for(const lamp of [-.26,.26]) foot(lamp*w,base+rise-.23,0,.32,.085,1.91,0xf7e2bc,false);
      foot(0,base+.009,front-.8,1.71,.016,.87,0x59796a,false);
      continue;
    }

    let livingLeft=left+.14;
    let unitEntry=entry, unitOutside=outside, unitInside=inside, flight=[];
    const unitDoorIds=level===0&&!upper?[main.id]:[];
    if(upper) {
      livingLeft=hall+.10;
      const landingSide=level%2===0?1:-1;
      const landingV=landingSide*(front-.84);
      const gap=1.17;
      vertical(base,hall,back,landingV-gap/2,unitHigh,plaster);
      vertical(base,hall,landingV+gap/2,front,unitHigh,plaster);
      part(hall,landingV,base+2.22+(unitHigh-2.22)/2,.20,unitHigh-2.22,gap,plaster);
      const split=addDoor(hall,landingV-gap/2,base,gap,0x805d46,{private:true,unitId:id+':'+level},-Math.PI/2);
      doors.push(split.id);
      unitDoorIds.push(split.id);
      unitEntry=localToWorld(hall,landingV,base);
      unitOutside=localToWorld(hall-.73,landingV,base);
      unitInside=localToWorld(hall+.74,landingV,base);
      const track=layer=>layer%2===0?left+.79:hall-.77;
      for(let layer=0;layer<level;layer++) {
        const startSide=layer%2===0?1:-1;
        const stairX=track(layer);
        flight.push(localToWorld(stairX,startSide*(front-.71),floorFor(layer)));
        for(let n=0;n<=20;n+=4) {
          const v=startSide*(front-1.30-(d-2.60)*n/20);
          flight.push(localToWorld(stairX,v,floorFor(layer)+rise*n/20));
        }
        flight.push(localToWorld(stairX,-startSide*(front-.82),floorFor(layer+1)));
      }
      if(level<stories-1) {
        const approach=level%2===0?1:-1;
        const stairX=track(level);
        const treads=21, depth=(d-2.82)/treads;
        for(let step=1;step<=treads;step++) {
          const v=approach*(front-1.41-(step-.5)*depth);
          const y=base+rise*step/treads;
          foot(stairX,y-.063,v,1.38,.126,depth+.028,step%2===0?0x8f8374:0x9e8d7d,true);
          const tread=toRect(stairX,v,1.42,depth+.025);
          support.push({...tread,y,buildingId:id});
          solid.push({x:tread.x,z:tread.z,w:tread.w,d:tread.d,y0:y-.127,h:y,buildingId:id,stair:true});
        }
        for(let j=0;j<=10;j++) {
          const v=approach*(front-1.43-(d-2.86)*j/10);
          const y=base+rise*j/10;
          const railing=stairX+(level%2===0?.70:-.70);
          foot(railing,y+.55,v,.051,1.1,.062,0x5e5a51,false);
          foot(railing,y+1.04,v,.061,.082,depth*2.14,0x685343,false);
        }
      }
      foot(left+1.32,base+rise-.20,landingV,.44,.11,.63,0xe5d9ae,false);
    }
    const planWidth=right-livingLeft;
    const middle=livingLeft+planWidth*.44;
    const separation=Math.max(back+3.18,-.48);
    const bathroom=livingLeft+planWidth*.24, bedroom=middle+(right-middle)*.46;
    const roomSide=upper&&level%2===1?-1:1;
    const roomFoot=(u,v,...details)=>foot(u,v*roomSide,...details);
    // Living and kitchen share the front space; the two back rooms have separate doors.
    for(const [a,b] of [[livingLeft,bathroom-.48],[bathroom+.48,bedroom-.53],[bedroom+.53,right]]) {
      horizontal(base,separation*roomSide,a,b,unitHigh,plaster);
    }
    vertical(base,middle,Math.min(back*roomSide,separation*roomSide),Math.max(back*roomSide,separation*roomSide),unitHigh,plaster);
    for(const [center,width,tint] of [[bathroom,.96,0x8d7866],[bedroom,1.06,0x82624e]]) {
      const interiorDoor=addDoor(center-width*roomSide/2,separation*roomSide,base,width,tint,{private:false},roomSide===1?0:Math.PI);
      unitDoorIds.push(interiorDoor.id);
      doors.push(interiorDoor.id);
      part(center,separation*roomSide,base+2.22+(unitHigh-2.22)/2,width,unitHigh-2.22,.20,plaster);
    }
    function furniture(u,v,uw,h,vd,tint) {part(u,v*roomSide,base+h/2,uw,h,vd,tint,false);}
    const bedCenter=right-1.25;
    furniture(bedCenter,back+1.20,1.47,.44,2.08,wood);
    roomFoot(bedCenter,back+1.19,base+.52,1.47,.17,2.02,spec.fabrics??0x687e71,false);
    roomFoot(bedCenter,back+.45,base+.64,1.02,.15,.46,0xd4c8ad,false);
    furniture(middle+.53,back+.36,.88,1.87,.68,wood);
    roomFoot(middle+.55,back+.72,base+1.11,.038,.69,.044,0xc8a77b,false);
    const tub=middle-.63;
    furniture(tub,back+.51,1.04,.53,.75,0xe4dfce);
    roomFoot(tub,back+.42,base+.58,.81,.07,.48,0xbcceca,false);
    furniture(livingLeft+.47,back+1.28,.45,.53,.62,0xd5d4c2);
    roomFoot(livingLeft+.47,back+1.32,base+.55,.39,.055,.43,0xb1ab93,false);
    furniture(livingLeft+.45,separation-.58,.57,.81,.50,0x949386);
    roomFoot(livingLeft+.46,separation-.58,base+.84,.54,.10,.49,0xe6dfc8,false);
    roomFoot((livingLeft+middle)*.5,(back+separation)*.5,base+.011,middle-livingLeft-.24,.019,separation-back-.25,ceramic,false);
    const kitchen=livingLeft+.45;
    furniture(kitchen,front-2.76,.75,.87,1.65,0x806949);
    roomFoot(kitchen,front-2.76,base+.91,.83,.09,1.74,0xc9ae86,false);
    roomFoot(kitchen,front-2.42,base+.963,.45,.022,.49,0x4e7275,false);
    furniture(livingLeft+.45,separation+.63,.72,1.75,.71,0xcbc2a5);
    roomFoot(livingLeft+.81,separation+.62,base+1.19,.049,.28,.064,0x726b5a,false);
    const sofa=right-.63;
    furniture(sofa,front-1.54,1.04,.51,2.03,spec.fabrics??0x6b6358);
    roomFoot(sofa+.43,front-1.54,base+.79,.25,.69,2.04,0x5e695e,false);
    const rug=right-2.02;
    roomFoot(rug,front-1.93,base+.014,1.96,.025,1.87,0x9b7665,false);
    furniture(rug,front-1.72,.64,.43,.82,0x80614a);
    for(const p of [[livingLeft+1.82,front-3.16],[right-2.50,back+2.13]]) roomFoot(p[0],p[1],base+rise-.19,.31,.067,.32,0xfae6b7,false);
    const resident=upper?localToWorld(hall+1.20,(front-1.03)*roomSide,base)
      :localToWorld(frontPosition,front-1.35,base);
    units.push({id:id+':'+level,buildingId:id,floor:base,entry:unitEntry,outside:unitOutside,inside:unitInside,resident,doorIds:unitDoorIds,stairs:flight});
  }
  const roofY=floorFor(stories);
  part(0,0,roofY-.053,w+.17,.20,d+.17,0x836e60,false);
  if(kind==='house') {
    for(let shift=1;shift<=7;shift++) {
      const width=w+.68-shift*.33;
      const depth=d+.65-shift*.58;
      foot(0,roofY+shift*.112,0,width,.171,depth,shift%2===0?0x986148:0xa2684c,true);
    }
    for(let line=-4;line<=4;line++) {
      const v=line*d/9;
      const y=roofY+Math.max(.09,.85-Math.abs(v)*.14);
      foot(0,y+.01,v,w+.56,.079,.081,0xb77b56,false);
    }
  } else {
    for(const edge of [left,right]) foot(edge,roofY+.28,0,.25,.59,d+.15,trimmed(color),true);
    for(const edge of [back,front]) foot(0,roofY+.28,edge,w+.20,.59,.25,trimmed(color),true);
    foot(right-1.5,roofY+.46,back+1.45,1.34,.64,1.21,0x80766a,true);
    foot(right-1.5,roofY+.70,back+1.45,1.14,.12,1.21,0x9c9383,false);
    foot(left+1.52,roofY+.39,front-1.55,.56,.57,.57,0x4a5e5e,true);
    foot(left+1.52,roofY+.71,front-1.55,.62,.13,.62,0x667979,false);
    if(!shop) {
      const address=localToWorld(frontPosition+1.33,front+.17,floorTop+2.53);
      sign(label,address.x,address.y,address.z,angle,0x554a38,2.27,.42);
    }
  }
  return {id,kind,label,entry,outside,inside,approach:curb,resident:units[0]?.resident??null,clerk,doorIds:doors,units};
}

function trimmed(color) {
  const r=Math.min(255,((color>>16)&255)+26),g=Math.min(255,((color>>8)&255)+23),b=Math.min(255,(color&255)+19);
  return r*65536+g*256+b;
}
