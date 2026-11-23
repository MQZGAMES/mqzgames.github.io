const floorTop=.228;
const frontDoorWidth=1.28;
const concrete=0x81766f;
const wood=0x754c38;
const frame=0x4f4741;
const glass=0x4d6a72;

/**
 * Builds one lot. Shops are enterable; homes and apartment blocks are closed volumes with a dressed facade.
 * Local axes: u runs along the street front, v points out of the front, y is height.
 */
export function addDistrictBuilding(api,spec) {
  const {id,x,z,w,d,angle,kind,label,color}=spec;
  const {box,solid,door,sign,glazing,support,volume}=api;
  const shop=kind==='shop'||kind==='armory';
  const localToWorld=(u,v,y=floorTop)=>({x:x+Math.cos(angle)*u+Math.sin(angle)*v,z:z-Math.sin(angle)*u+Math.cos(angle)*v,y});
  const cos=Math.abs(Math.cos(angle)),sin=Math.abs(Math.sin(angle));
  const toRect=(u,v,uw,vd)=>({...localToWorld(u,v),w:uw*cos+vd*sin,d:uw*sin+vd*cos});
  const front=d/2, back=-d/2, left=-w/2, right=w/2;
  /** Decorative box in local coordinates (u, v, y). */
  const foot=(u,v,y,uw,h,vd,tint,shadow=false,tilt=0,shape='box')=>{
    const p=localToWorld(u,v);
    box(p.x,y,p.z,uw,h,vd,tint,shadow,angle,tilt,shape);
  };
  /** Decorative box that also blocks movement and shots. */
  const part=(u,v,y,uw,h,vd,tint,shadow=true)=>{
    foot(u,v,y,uw,h,vd,tint,shadow);
    const bounds=toRect(u,v,uw,vd);
    solid.push({x:bounds.x,z:bounds.z,w:bounds.w,d:bounds.d,y0:y-h*.5,h:y+h*.5,buildingId:id});
  };
  return shop?storefront():closedBuilding();

  function windowAt(u,y,width,height,shutters) {
    foot(u,front+.05,y,width+.22,height+.22,.10,frame);
    foot(u,front+.085,y,width,height,.06,glass);
    foot(u,front+.12,y,.05,height,.03,0xb9ae98);
    foot(u,front+.12,y+height*.18,width,.045,.03,0xb9ae98);
    foot(u,front+.13,y-height*.5-.08,width+.36,.09,.20,trimmed(color));
    if(shutters) for(const side of [-1,1]) foot(u+side*(width*.5+.24),front+.09,y,.34,height+.06,.05,shutters);
  }

  /**
   * Gives a front wall its own history: a painted skirting at the foot of the wall, patches where the plaster has
   * fallen to show brick, rain streaks, a hairline crack and the odd utility box. Seeded by the building id.
   * Nothing is placed over a door or window: `avoid` lists the [min,max] u ranges that must stay clear.
   * @param {number} base floor level @param {number} height wall height @param {number[]} avoid
   */
  function weather(base,height,avoid=[]) {
    const random=seeded(id);
    const free=(u,half)=>{
      if(u-half<left+.35 || u+half>right-.35) return false;
      for(let i=0;i<avoid.length;i+=2) if(u+half>avoid[i] && u-half<avoid[i+1]) return false;
      return true;
    };
    const spot=half=>{
      for(let attempt=0;attempt<8;attempt++) {
        const u=left+.4+half+random()*(w-.8-half*2);
        if(free(u,half)) return u;
      }
      return null;
    };
    if(random()<.55) foot(0,front+.052,base+.36,w-.5,.72,.022,[shade(color,-.28),shade(color,.22),0x6f685f][Math.floor(random()*3)]);
    for(let patch=0;patch<(random()<.7?2:1);patch++) {
      const pw=.8+random()*.7,ph=.5+random()*.5,u=spot(pw/2);
      if(u===null) continue;
      const y=base+.95+random()*Math.max(0,height-ph-1.4)+ph/2;
      foot(u,front+.056,y,pw,ph,.018,0x8d5440);
      for(let course=1;course<Math.floor(ph/.18);course++) foot(u,front+.068,y-ph/2+course*.18,pw,.022,.01,0x5b3a2f);
    }
    for(let streak=0;streak<2+Math.floor(random()*2);streak++) {
      const u=spot(.12);
      if(u===null) continue;
      const length=.8+random()*1.2;
      foot(u,front+.054,base+height-.15-length/2,.14,length,.012,shade(color,-.18));
    }
    if(random()<.6) {
      const u=spot(.12);
      if(u!==null) for(let k=0;k<5;k++) foot(u+(k%2?.05:-.04),front+.058,base+.8+k*.19,.022,.22,.012,0x3b3530);
    }
    if(random()<.7) {
      const u=spot(.25);
      if(u!==null) {foot(u,front+.09,base+1.25,.38,.5,.09,0x8c8f8a);foot(u,front+.15,base+1.4,.14,.1,.04,0xe8e2d0);}
    }
    return random;
  }

  function closedBuilding() {
    const apartments=kind==='apartments';
    const stories=apartments?spec.stories:1;
    const rise=apartments?3.3:3.25;
    const height=stories*rise;
    const top=floorTop+height;
    part(0,0,floorTop+height/2,w,height,d,color);
    // Plinth, corner pilasters and floor bands stay flush with the facade.
    foot(0,front+.03,floorTop+.23,w+.04,.46,.08,concrete);
    for(const u of [left+.12,right-.12]) foot(u,front+.04,floorTop+height/2,.26,height,.10,trimmed(color));
    for(let level=1;level<stories;level++) foot(0,front+.04,floorTop+level*rise,w+.04,.16,.10,trimmed(color));
    const doorU=apartments?0:-w*.18;
    // Door with frame, step and small canopy.
    foot(doorU,front+.05,floorTop+1.17,1.42,2.42,.10,frame);
    foot(doorU,front+.09,floorTop+1.10,1.10,2.20,.06,apartments?0x3f5a5e:wood);
    foot(doorU+.38,front+.14,floorTop+1.08,.06,.16,.05,0xd2b981);
    foot(doorU,front+.32,floorTop-.05,1.70,.14,.62,concrete);
    foot(doorU,front+.42,floorTop+2.62,1.90,.12,.86,trimmed(color),true);
    if(apartments) {
      foot(doorU,front+.12,floorTop+2.92,1.6,.32,.05,0xe9d4a0);
      const plate=localToWorld(doorU,front+.15,floorTop+2.92);
      sign(label,plate.x,plate.y,plate.z,angle,0x554a38,1.56,.30);
    } else {
      const plate=localToWorld(doorU+1.15,front+.13,floorTop+1.62);
      sign(label,plate.x,plate.y,plate.z,angle,0x554a38,.92,.22);
    }
    const shutters=kind==='house'?pick(id,[0x5f7b6a,0x7a5c46,0x6a6f84]):null;
    for(let level=0;level<stories;level++) {
      const base=floorTop+level*rise;
      const slots=apartments?[left+w*.17,left+w*.38,right-w*.38,right-w*.17]:[w*.18,w*.38];
      for(const slot of slots) {
        if(level===0 && Math.abs(slot-doorU)<1.7) continue;
        windowAt(slot,base+1.72,apartments?1.26:1.20,1.34,shutters);
        if(apartments && level>0 && slot===slots[3]) {
          foot(slot,front+.42,base+.95,1.80,.12,.74,concrete,true);
          for(const offset of [-.8,-.4,0,.4,.8]) foot(slot+offset,front+.76,base+1.38,.04,.78,.04,0x494641);
          foot(slot,front+.76,base+1.78,1.72,.05,.06,0x494641);
        }
      }
      // Side windows on the cross-street gables.
      for(const side of [left,right]) {
        const outward=side===left?-1:1;
        for(const v of apartments?[back+2.2,front-2.2]:[0]) {
          const p=localToWorld(side+outward*.05,v);
          box(p.x,base+1.72,p.z,.10,1.56,1.32,frame,false,angle);
          const g=localToWorld(side+outward*.085,v);
          box(g.x,base+1.72,g.z,.06,1.34,1.10,glass,false,angle);
        }
      }
    }
    const windowSlots=apartments?[left+w*.17,left+w*.38,right-w*.38,right-w*.17]:[w*.18,w*.38];
    const halfWindow=(apartments?1.26:1.2)/2+(kind==='house'?.6:.25);
    const random=weather(floorTop,Math.min(height,3.15),[doorU-1.15,doorU+1.15,...windowSlots.flatMap(u=>[u-halfWindow,u+halfWindow])]);
    if(apartments) {
      // Flat roof: parapet, water tank and stair housing well inside the outline.
      foot(0,0,top+.04,w+.12,.10,d+.12,0x77706a);
      for(const edge of [left+.1,right-.1]) foot(edge,0,top+.36,.2,.56,d,trimmed(color),true);
      for(const edge of [back+.1,front-.1]) foot(0,edge,top+.36,w,.56,.2,trimmed(color),true);
      foot(right-2.4,back+2.1,top+.95,2.0,1.8,2.0,0x8a8279,true);
      foot(right-2.4,back+2.1,top+1.93,2.1,.12,2.1,0x6f6a64);
      foot(left+2.2,back+1.9,top+.75,1.4,1.2,1.4,0x9aa4a3,true);
      foot(left+2.2,back+1.9,top+1.42,1.5,.12,1.5,0x6e7979);
    } else {
      // Gabled roof with overhang, built from two prisms so the gable ends stay closed.
      const ridge=Math.min(2.0,d*.2);
      foot(0,0,top,w-.02,ridge,d-.02,color,true,0,'prism');
      const tile=roofTiles[Math.floor(random()*roofTiles.length)];
      foot(0,0,top+.06,w+.5,ridge+.12,d+.7,tile,true,0,'prism');
      foot(0,0,top+ridge+.12,w+.6,.09,.34,shade(tile,-.22),false);               // ridge cap
      foot(0,front+.34,top+.04,w+.5,.09,.12,0x6e7172);                           // gutter
      if(random()<.5) foot(-w*.2+random()*w*.3,front-.9,top+.34,.9,.07,1.4,shade(tile,.18)); // patched tiles
      const chimney=random()<.5?1:-1;
      foot(chimney*(w*.3),back+d*.3,top+ridge*.55,.55+random()*.25,1.6,.55,0x8f7a6a,true);
    }
    return {id,kind,label,units:[],doorIds:[],clerk:null,
      outside:localToWorld(doorU,front+1.1,.16),entry:localToWorld(doorU,front+.2),inside:localToWorld(doorU,front+.2),
      approach:localToWorld(doorU,front+2.4,.16),resident:null};
  }

  function storefront() {
    const rise=4.16, unitHigh=rise-.14, base=floorTop;
    const frontPosition=spec.doorAt??.10;
    const glazingWidth=Math.min(w*.25,3.72);
    const displayWindows=[frontPosition-w*.248,frontPosition+w*.248];
    const wall=.22;
    const wallAt=(u,v,uw,vd,y,high,tint)=>part(u,v,y+high/2,uw,high,vd,tint);
    const horizontal=(v,min,max,y,high,tint)=>wallAt((min+max)/2,v,max-min,wall,y,high,tint);
    const vertical=(u,min,max,y,high,tint)=>wallAt(u,(min+max)/2,wall,max-min,y,high,tint);
    const main=door(...hinge(frontPosition-frontDoorWidth/2,front),angle,frontDoorWidth,0x41636a,base,{buildingId:id,private:false,unitId:null});
    const entry=localToWorld(frontPosition,front);
    const outside=localToWorld(frontPosition,front+1.05,.16);
    const inside=localToWorld(frontPosition,front-1.05);
    const curb=localToWorld(frontPosition,front+2.45,.16);
    volume.push({...toRect(0,0,w-.20,d-.20),floor:base,ceiling:base+unitHigh,buildingId:id});
    part(0,0,base-.066,w-.03,.132,d-.03,0xb6b09a,false);
    solid[solid.length-1].walkSurface=true;
    support.push({...toRect(0,0,w-.03,d-.03),y:base,buildingId:id});
    vertical(left,back,front,base,unitHigh,color);
    vertical(right,back,front,base,unitHigh,color);
    horizontal(back,left,right,base,unitHigh,color);
    let cursor=left;
    const cuts=[{center:frontPosition,width:frontDoorWidth,door:true},...displayWindows.map(center=>({center,width:glazingWidth,door:false}))];
    cuts.sort((a,b)=>a.center-b.center);
    const sill=.61, header=2.58, glassHeight=header-sill;
    for(const cut of cuts) {
      const start=cut.center-cut.width*.5,end=cut.center+cut.width*.5;
      horizontal(front,cursor,start,base,unitHigh,color);
      foot((cursor+start)/2,front+.04,base+.17,start-cursor,.34,.11,concrete);
      cursor=end;
      if(cut.door) continue;
      wallAt(cut.center,front,cut.width,wall,base,sill,color);
      wallAt(cut.center,front,cut.width,wall,base+header,unitHigh-header,color);
      const glassCenter=localToWorld(cut.center,front+.068,base+(header+sill)*.5);
      glazing(glassCenter.x,glassCenter.y,glassCenter.z,cut.width,glassHeight,angle);
      const collider=toRect(cut.center,front,cut.width,.20);
      solid.push({x:collider.x,z:collider.z,w:collider.w,d:collider.d,y0:base+sill,h:base+header,buildingId:id});
      for(const side of [-1,0,1]) foot(cut.center+side*(cut.width*.5-.042),front+.13,base+(header+sill)*.5,.070,glassHeight,.084,0x5b6460);
      for(const rail of [sill,header]) foot(cut.center,front+.13,base+rail,cut.width+.07,.081,.096,0x778178);
      foot(cut.center,front+.17,base+sill-.025,cut.width+.20,.091,.25,0x999580);
      const shelf=front-.48;
      foot(cut.center,shelf,base+.83,cut.width-.24,.078,.45,0xb39d7c);
      for(const offset of [-.78,-.39,.39,.78]) {
        foot(cut.center+offset,shelf,base+.95+(Math.abs(offset)<.50?.055:0),.23,.26,.26,spec.awning??0xb87954);
      }
    }
    horizontal(front,cursor,right,base,unitHigh,color);
    foot((cursor+right)/2,front+.04,base+.17,right-cursor,.34,.11,concrete);
    part(frontPosition,front,base+2.22+(unitHigh-2.22)/2,frontDoorWidth,unitHigh-2.22,.21,color);
    for(const wing of [left+.17,right-.17]) foot(wing,front+.11,base+unitHigh/2,.22,unitHigh,.17,trimmed(color));
    foot(0,front+.07,base+rise-.05,w+.25,.22,.13,trimmed(color));
    // Side display windows on the cross-street walls.
    for(const side of [left,right]) {
      const outward=side===left?-1:1;
      for(const v of [back+2.3,front-2.3]) {
        foot(side+outward*.13,v,base+1.7,.06,1.2,1.4,frame);
        foot(side+outward*.16,v,base+1.7,.04,1.04,1.22,glass);
        foot(side+outward*.2,v,base+1.03,.16,.09,1.56,trimmed(color));
      }
    }
    weather(base,unitHigh-.3,[frontPosition-1.6,frontPosition+1.6,displayWindows[0]-glazingWidth/2-.2,displayWindows[0]+glazingWidth/2+.2,
      displayWindows[1]-glazingWidth/2-.2,displayWindows[1]+glazingWidth/2+.2]);
    const clerk=localToWorld(0,back+1.89,base);
    clerk.angle=angle;
    const show=localToWorld(0,front+.18,base+rise-.64);
    sign(label,show.x,show.y,show.z,angle,0x315453,Math.min(5.25,w-.72),.58);
    foot(0,front+.60,base+rise-1.37,w-.56,.19,1.22,spec.awning??0x77563f,true);
    for(let offset=left+.68;offset<right-.42;offset+=.46) foot(offset,front+1.21,base+rise-1.46,.225,.23,.062,0xd5b88d);
    // Interior: counter, register, shelves, lights and mat.
    part(.46,back+3.0,base+.55,4.40,1.10,.70,0x6a5343);
    foot(.46,back+3.0,base+1.15,4.58,.14,.79,0xb9a68b,true);
    foot(1.33,back+3.02,base+1.42,.48,.41,.36,0x3e4d4e);
    foot(1.33,back+3.22,base+1.58,.34,.19,.051,0x79989a);
    for(const column of [left+.46,right-.46]) {
      for(const slot of [back+1.75,back+4.20]) {
        part(column,slot,base+.83,.61,1.66,1.79,0x6b6157);
        for(let level=0;level<3;level++) {
          for(const item of [-.55,-.17,.22,.57]) {
            const tint=[0xbe9668,0xb66547,0x5b827b][(Math.floor((item+.6)*2.3)+level)%3];
            foot(column+(column<0?.37:-.37),slot+item,base+.47+level*.43,.15,.25,.22,tint);
          }
        }
      }
    }
    for(const lamp of [-.26,.26]) foot(lamp*w,0,base+rise-.23,.32,.085,1.91,0xf7e2bc);
    foot(0,front-.8,base+.009,1.71,.016,.87,0x59796a);
    // Flat roof with parapet and equipment kept inside the outline.
    const roofY=base+rise;
    part(0,0,roofY-.053,w+.17,.20,d+.17,0x836e60,false);
    for(const edge of [left,right]) foot(edge,0,roofY+.28,.25,.59,d+.15,trimmed(color),true);
    for(const edge of [back,front]) foot(0,edge,roofY+.28,w+.20,.59,.25,trimmed(color),true);
    foot(right-1.5,back+1.45,roofY+.46,1.34,.64,1.21,0x80766a,true);
    foot(right-1.5,back+1.45,roofY+.82,1.14,.08,1.05,0x9c9383);
    foot(left+1.52,back+1.55,roofY+.39,.56,.57,.57,0x4a5e5e,true);
    return {id,kind,label,entry,outside,inside,approach:curb,resident:null,clerk,doorIds:[main.id],units:[]};
  }

  function hinge(u,v) {
    const p=localToWorld(u,v,floorTop);
    return [p.x,p.z];
  }
}

function pick(id,values) {
  let hash=0;
  for(const char of id) hash=(hash*31+char.charCodeAt(0))>>>0;
  return values[hash%values.length];
}

function trimmed(color) {
  const r=Math.min(255,((color>>16)&255)+26),g=Math.min(255,((color>>8)&255)+23),b=Math.min(255,(color&255)+19);
  return r*65536+g*256+b;
}

function seeded(id) {
  let state=0;
  for(const char of id) state=(state*131+char.charCodeAt(0))>>>0;
  return ()=>{
    state=(Math.imul(state,1664525)+1013904223)>>>0;
    return state/4294967296;
  };
}

function shade(color,amount) {
  const mix=channel=>Math.max(0,Math.min(255,Math.round(channel*(1+amount))));
  return mix((color>>16)&255)*65536+mix((color>>8)&255)*256+mix(color&255);
}

const roofTiles=[0x9a5a44,0x8a4c3a,0x7b5446,0xa8654a,0x6f6a66,0x5d5148];
