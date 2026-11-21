(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ad=0,oh=1,ld=2;var Rs=1,cd=2,xr=3,hs=0,yn=1,Tn=2,Is=0,us=1,wo=2,ah=3,lh=4,hd=5;var Ps=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,xd=202,_d=203,ch=204,hh=205,yd=206,vd=207,Md=208,bd=209,Sd=210,wd=211,Td=212,Ad=213,Ed=214,Ra=0,Ia=1,Pa=2,hr=3,La=4,Da=5,Na=6,Ua=7,uh=0,Cd=1,Rd=2,Mi=0,dh=1,fh=2,ph=3,To=4,mh=5,gh=6,xh=7;var _h=300,Ls=301,_r=302,rl=303,ol=304,Fa=1e3,_i=1001,za=1002,mn=1003,Id=1004;var Ao=1005;var gn=1006,al=1007;var Gi=1008;var Fn=1009,yh=1010,vh=1011,yr=1012,ll=1013,ai=1014,$n=1015,li=1016,cl=1017,hl=1018,Ds=1020,Mh=35902,bh=35899,Sh=1021,wh=1022,Xn=1023,Fi=1026,Vi=1027,ul=1028,dl=1029,ds=1030,fl=1031;var pl=1033,Eo=33776,Co=33777,Ro=33778,Io=33779,ml=35840,gl=35841,xl=35842,_l=35843,yl=36196,vl=37492,Ml=37496,bl=37488,Sl=37489,Po=37490,wl=37491,Tl=37808,Al=37809,El=37810,Cl=37811,Rl=37812,Il=37813,Pl=37814,Ll=37815,Dl=37816,Nl=37817,Ul=37818,Fl=37819,zl=37820,Ol=37821,Bl=36492,kl=36494,Gl=36495,Vl=36283,Hl=36284,Lo=36285,Wl=36286;var Qr=2300,Oa=2301,Ea=2302,jc=2303,Qc=2400,eh=2401,th=2402;var Pd=3200;var Xl=0,Ld=1,Hi="",un="srgb",eo="srgb-linear",to="linear",Lt="srgb";var Ca=7680;var Dd=519,Nd=512,Ud=513,Fd=514,Th=515,zd=516,Od=517,Ah=518,Eh=519,Bd=35044,ql=35048;var Ch="300 es",Kn=2e3,ur=2001;function um(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){let n=no("canvas");return n.style.display="block",n}var Du={},dr=null;function Rh(...n){let e="THREE."+n.shift();dr?dr("log",e,...n):console.log(e,...n)}function Gd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=Gd(n);let e="THREE."+n.shift();if(dr)dr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function st(...n){n=Gd(n);let e="THREE."+n.shift();if(dr)dr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Kr(...n){let e=n.join(" ");e in Du||(Du[e]=!0,et(...n))}function Vd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Hd={[Ra]:Ra,[Pa]:Na,[La]:La,[hr]:Da,[Ia]:Ia,[Na]:Pa,[Ua]:Ua,[Da]:hr},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,$r=Math.PI/180,fr=180/Math.PI;function vr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function Ih(n,e){return(n%e+e)%e}function fm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function pm(n,e,t){return n!==e?(t-n)/(e-n):0}function jr(n,e,t){return(1-t)*n+t*e}function mm(n,e,t,i){return jr(n,e,1-Math.exp(-t*i))}function gm(n,e=1){return e-Math.abs(Ih(n,e*2)-e)}function xm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _m(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ym(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vm(n,e){return n+Math.random()*(e-n)}function Mm(n){return n*(.5-Math.random())}function bm(n){n!==void 0&&(Nu=n);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sm(n){return n*$r}function wm(n){return n*fr}function Tm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Am(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ph(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Em(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),h=o((i-e)/2);switch(s){case"XYX":n.set(a*d,c*f,c*p,a*l);break;case"YZY":n.set(c*p,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*p,a*d,a*l);break;case"XZX":n.set(a*d,c*h,c*m,a*l);break;case"YXY":n.set(c*m,a*d,c*h,a*l);break;case"ZYZ":n.set(c*h,c*m,a*d,a*l);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Lh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wd(n,e){if(e.constructor===Float32Array)return n;let t=Lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Xd(n,e){if(e.constructor===Float32Array)return n;let t=Lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Mr={DEG2RAD:$r,RAD2DEG:fr,generateUUID:vr,clamp:St,euclideanModulo:Ih,mapLinear:fm,inverseLerp:pm,lerp:jr,damp:mm,pingpong:gm,smoothstep:xm,smootherstep:_m,randInt:ym,randFloat:vm,randFloatSpread:Mm,seededRandom:bm,degToRad:Sm,radToDeg:wm,isPowerOfTwo:Tm,ceilPowerOfTwo:Am,floorPowerOfTwo:Ph,setQuaternionFromProperEuler:Em,normalize:Xd,denormalize:Wd},ht=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],p=r[o+0],m=r[o+1],h=r[o+2],y=r[o+3];if(f!==y||c!==p||l!==m||d!==h){let x=c*p+l*m+d*h+f*y;x<0&&(p=-p,m=-m,h=-h,y=-y,x=-x);let _=1-a;if(x<.9995){let w=Math.acos(x),C=Math.sin(w);_=Math.sin(_*w)/C,a=Math.sin(a*w)/C,c=c*_+p*a,l=l*_+m*a,d=d*_+h*a,f=f*_+y*a}else{c=c*_+p*a,l=l*_+m*a,d=d*_+h*a,f=f*_+y*a;let w=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=w,l*=w,d*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[o],p=r[o+1],m=r[o+2],h=r[o+3];return e[t]=a*h+d*f+c*m-l*p,e[t+1]=c*h+d*p+l*f-a*m,e[t+2]=l*h+d*m+a*p-c*f,e[t+3]=d*h-a*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(s/2),f=a(r/2),p=c(i/2),m=c(s/2),h=c(r/2);switch(o){case"XYZ":this._x=p*d*f+l*m*h,this._y=l*m*f-p*d*h,this._z=l*d*h+p*m*f,this._w=l*d*f-p*m*h;break;case"YXZ":this._x=p*d*f+l*m*h,this._y=l*m*f-p*d*h,this._z=l*d*h-p*m*f,this._w=l*d*f+p*m*h;break;case"ZXY":this._x=p*d*f-l*m*h,this._y=l*m*f+p*d*h,this._z=l*d*h+p*m*f,this._w=l*d*f-p*m*h;break;case"ZYX":this._x=p*d*f-l*m*h,this._y=l*m*f+p*d*h,this._z=l*d*h-p*m*f,this._w=l*d*f+p*m*h;break;case"YZX":this._x=p*d*f+l*m*h,this._y=l*m*f+p*d*h,this._z=l*d*h-p*m*f,this._w=l*d*f-p*m*h;break;case"XZY":this._x=p*d*f-l*m*h,this._y=l*m*f-p*d*h,this._z=l*d*h+p*m*f,this._w=l*d*f+p*m*h;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],p=i+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(d-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+d)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-i*l,this._z=r*d+o*l+i*c-s*a,this._w=o*d-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new X,Uu=new tn,nt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],p=i[2],m=i[5],h=i[8],y=s[0],x=s[3],_=s[6],w=s[1],C=s[4],v=s[7],E=s[2],b=s[5],g=s[8];return r[0]=o*y+a*w+c*E,r[3]=o*x+a*C+c*b,r[6]=o*_+a*v+c*g,r[1]=l*y+d*w+f*E,r[4]=l*x+d*C+f*b,r[7]=l*_+d*v+f*g,r[2]=p*y+m*w+h*E,r[5]=p*x+m*C+h*b,r[8]=p*_+m*v+h*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*r*d+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,p=a*c-d*r,m=l*r-o*c,h=t*f+i*p+s*m;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/h;return e[0]=f*y,e[1]=(s*l-d*i)*y,e[2]=(a*i-s*o)*y,e[3]=p*y,e[4]=(d*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new nt,Fu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){let n={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?to:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[eo]:{primaries:e,whitePoint:i,transfer:to,toXYZ:Fu,fromXYZ:zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Fu,fromXYZ:zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var bt=Cm();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,Ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=no("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rm=0,pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nc(s[o].image)):r.push(Nc(s[o]))}else r=Nc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var Im=0,Uc=new X,Rn=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_i,s=_i,r=gn,o=Gi,a=Xn,c=Fn,l=n.DEFAULT_ANISOTROPY,d=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=vr(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=_h;Rn.DEFAULT_ANISOTROPY=1;var qt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],p=c[1],m=c[5],h=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(h-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(h+x)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,v=(m+1)/2,E=(_+1)/2,b=(d+p)/4,g=(f+y)/4,S=(h+x)/4;return C>v&&C>E?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=b/i,r=g/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=S/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=g/r,s=S/r),this.set(i,s,r,t),this}let w=Math.sqrt((x-h)*(x-h)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(x-h)/w,this.y=(f-y)/w,this.z=(p-d)/w,this.w=Math.acos((l+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},io=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,d,f,p,m,h,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,d,f,p,m,h,y,x)}set(e,t,i,s,r,o,a,c,l,d,f,p,m,h,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=d,_[10]=f,_[14]=p,_[3]=m,_[7]=h,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*d,m=o*f,h=a*d,y=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=m+h*l,t[5]=p-y*l,t[9]=-a*c,t[2]=y-p*l,t[6]=h+m*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*d,m=c*f,h=l*d,y=l*f;t[0]=p+y*a,t[4]=h*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-h,t[6]=y+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*d,m=c*f,h=l*d,y=l*f;t[0]=p-y*a,t[4]=-o*f,t[8]=h+m*a,t[1]=m+h*a,t[5]=o*d,t[9]=y-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*d,m=o*f,h=a*d,y=a*f;t[0]=c*d,t[4]=h*l-m,t[8]=p*l+y,t[1]=c*f,t[5]=y*l+p,t[9]=m*l-h,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,m=o*l,h=a*c,y=a*l;t[0]=c*d,t[4]=y-p*f,t[8]=h*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*f+h,t[10]=p-y*f}else if(e.order==="XZY"){let p=o*c,m=o*l,h=a*c,y=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=p*f+y,t[5]=o*d,t[9]=m*f-h,t[2]=h*f-m,t[6]=a*d,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Lm)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ji.crossVectors(i,Gn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ji.crossVectors(i,Gn)),ji.normalize(),sa.crossVectors(Gn,ji),s[0]=ji.x,s[4]=sa.x,s[8]=Gn.x,s[1]=ji.y,s[5]=sa.y,s[9]=Gn.y,s[2]=ji.z,s[6]=sa.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],p=i[9],m=i[13],h=i[2],y=i[6],x=i[10],_=i[14],w=i[3],C=i[7],v=i[11],E=i[15],b=s[0],g=s[4],S=s[8],F=s[12],D=s[1],A=s[5],z=s[9],W=s[13],L=s[2],G=s[6],V=s[10],B=s[14],Z=s[3],k=s[7],K=s[11],ie=s[15];return r[0]=o*b+a*D+c*L+l*Z,r[4]=o*g+a*A+c*G+l*k,r[8]=o*S+a*z+c*V+l*K,r[12]=o*F+a*W+c*B+l*ie,r[1]=d*b+f*D+p*L+m*Z,r[5]=d*g+f*A+p*G+m*k,r[9]=d*S+f*z+p*V+m*K,r[13]=d*F+f*W+p*B+m*ie,r[2]=h*b+y*D+x*L+_*Z,r[6]=h*g+y*A+x*G+_*k,r[10]=h*S+y*z+x*V+_*K,r[14]=h*F+y*W+x*B+_*ie,r[3]=w*b+C*D+v*L+E*Z,r[7]=w*g+C*A+v*G+E*k,r[11]=w*S+C*z+v*V+E*K,r[15]=w*F+C*W+v*B+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],p=e[10],m=e[14],h=e[3],y=e[7],x=e[11],_=e[15],w=c*m-l*p,C=a*m-l*f,v=a*p-c*f,E=o*m-l*d,b=o*p-c*d,g=o*f-a*d;return t*(y*w-x*C+_*v)-i*(h*w-x*E+_*b)+s*(h*C-y*E+_*g)-r*(h*v-y*b+x*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-i*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],p=e[10],m=e[11],h=e[12],y=e[13],x=e[14],_=e[15],w=t*a-i*o,C=t*c-s*o,v=t*l-r*o,E=i*c-s*a,b=i*l-r*a,g=s*l-r*c,S=d*y-f*h,F=d*x-p*h,D=d*_-m*h,A=f*x-p*y,z=f*_-m*y,W=p*_-m*x,L=w*W-C*z+v*A+E*D-b*F+g*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return e[0]=(a*W-c*z+l*A)*G,e[1]=(s*z-i*W-r*A)*G,e[2]=(y*g-x*b+_*E)*G,e[3]=(p*b-f*g-m*E)*G,e[4]=(c*D-o*W-l*F)*G,e[5]=(t*W-s*D+r*F)*G,e[6]=(x*v-h*g-_*C)*G,e[7]=(d*g-p*v+m*C)*G,e[8]=(o*z-a*D+l*S)*G,e[9]=(i*D-t*z-r*S)*G,e[10]=(h*b-y*v+_*w)*G,e[11]=(f*v-d*b-m*w)*G,e[12]=(a*F-o*A-c*S)*G,e[13]=(t*A-i*F+s*S)*G,e[14]=(y*C-h*E-x*w)*G,e[15]=(d*E-f*C+p*w)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+i,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,p=r*l,m=r*d,h=r*f,y=o*d,x=o*f,_=a*f,w=c*l,C=c*d,v=c*f,E=i.x,b=i.y,g=i.z;return s[0]=(1-(y+_))*E,s[1]=(m+v)*E,s[2]=(h-C)*E,s[3]=0,s[4]=(m-v)*b,s[5]=(1-(p+_))*b,s[6]=(x+w)*b,s[7]=0,s[8]=(h+C)*g,s[9]=(x-w)*g,s[10]=(1-(p+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),c=Ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let l=1/o,d=1/a,f=1/c;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,t.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Kn,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s),h,y;if(c)h=r/(o-r),y=o*r/(o-r);else if(a===Kn)h=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ur)h=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,c=!1){let l=this.elements,d=2/(t-e),f=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s),h,y;if(c)h=1/(o-r),y=o/(o-r);else if(a===Kn)h=-2/(o-r),y=-(o+r)/(o-r);else if(a===ur)h=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=h,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ks=new X,ni=new wt,Pm=new X(0,0,0),Lm=new X(1,1,1),ji=new X,sa=new X,Gn=new X,Ou=new wt,Bu=new tn,oi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dm=0,ku=new X,$s=new tn,Ii=new wt,ra=new X,Wr=new X,Nm=new X,Um=new tn,Gu=new X(1,0,0),Vu=new X(0,1,0),Hu=new X(0,0,1),Wu={type:"added"},Fm={type:"removed"},js={type:"childadded",child:null},Fc={type:"childremoved",child:null},Vt=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new X,t=new oi,i=new tn,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new nt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ra.copy(e):ra.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Wr,ra,this.up):Ii.lookAt(ra,Wr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ii),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),js.child=e,this.dispatchEvent(js),js.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fm),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),h=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),h.length>0&&(i.nodes=h)}return i.object=s,i;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new X(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,i),_=this._getHandJoint(l,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,h=.005;l.inputState.pinching&&p>m+h?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-h&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=bt.workingColorSpace){if(e=Ih(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return bt.workingToColorSpace(wn.copy(this),e),Math.round(St(wn.r*255,0,255))*65536+Math.round(St(wn.g*255,0,255))*256+Math.round(St(wn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(wn.copy(this),t);let i=wn.r,s=wn.g,r=wn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=un){bt.workingToColorSpace(wn.copy(this),e);let t=wn.r,i=wn.g,s=wn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(oa);let i=jr(Qi.h,oa.h,t),s=jr(Qi.s,oa.s,t),r=jr(Qi.l,oa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new $e;$e.NAMES=qd;var ro=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var oo=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new X,Pi=new X,Oc=new X,Li=new X,Qs=new X,er=new X,Xu=new X,Bc=new X,kc=new X,Gc=new X,Vc=new qt,Hc=new qt,Wc=new qt,is=class n{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),Pi.subVectors(i,t),Oc.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Pi),c=ii.dot(Oc),l=Pi.dot(Pi),d=Pi.dot(Oc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(l*c-a*d)*p,h=(o*d-a*c)*p;return r.set(1-m-h,h,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vc.setScalar(0),Hc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,i),Wc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Hc,r.y),o.addScaledVector(Wc,r.z),o}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),Pi.subVectors(e,t),ii.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ii.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,i),er.subVectors(r,i),Bc.subVectors(e,i);let c=Qs.dot(Bc),l=er.dot(Bc);if(c<=0&&l<=0)return t.copy(i);kc.subVectors(e,s);let d=Qs.dot(kc),f=er.dot(kc);if(d>=0&&f<=d)return t.copy(s);let p=c*f-d*l;if(p<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(i).addScaledVector(Qs,o);Gc.subVectors(e,r);let m=Qs.dot(Gc),h=er.dot(Gc);if(h>=0&&m<=h)return t.copy(r);let y=m*l-c*h;if(y<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(er,a);let x=d*h-m*f;if(x<=0&&f-d>=0&&m-h>=0)return Xu.subVectors(r,s),a=(f-d)/(f-d+(m-h)),t.copy(s).addScaledVector(Xu,a);let _=1/(x+y+p);return o=y*_,a=p*_,t.copy(i).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vi=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),la.subVectors(this.max,Xr),tr.subVectors(e.a,Xr),nr.subVectors(e.b,Xr),ir.subVectors(e.c,Xr),es.subVectors(nr,tr),ts.subVectors(ir,nr),Ms.subVectors(tr,ir);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ms.z,Ms.y,es.z,0,-es.x,ts.z,0,-ts.x,Ms.z,0,-Ms.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ms.y,Ms.x,0];return!Xc(t,tr,nr,ir,la)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,tr,nr,ir,la))?!1:(ca.crossVectors(es,ts),t=[ca.x,ca.y,ca.z],Xc(t,tr,nr,ir,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new X,new X,new X,new X,new X,new X,new X,new X],si=new X,aa=new vi,tr=new X,nr=new X,ir=new X,es=new X,ts=new X,Ms=new X,Xr=new X,la=new X,ca=new X,bs=new X;function Xc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){bs.fromArray(n,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),d=i.dot(bs);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var on=new X,ha=new ht,Om=0,jt=class extends yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?Lh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xd(e,this.array)}};var ao=class extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lo=class extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bm=new vi,qr=new X,qc=new X,zi=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(qc)),this.expandByPoint(qr.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},km=0,Jn=new wt,Yc=new Vt,sr=new X,Vn=new vi,Yr=new vi,pn=new X,Yt=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Vn.min,Yr.min),Vn.expandByPoint(pn),pn.addVectors(Vn.max,Yr.max),Vn.expandByPoint(pn)):(Vn.expandByPoint(Yr.min),Vn.expandByPoint(Yr.max))}Vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)pn.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(e,l),pn.add(sr)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let F=0;F<i.count;F++)a[F]=new X,c[F]=new X;let d=new X,f=new X,p=new X,m=new ht,h=new ht,y=new ht,x=new X,_=new X;function w(F,D,A){l[F]=l[D]=l[A]=1,d.fromBufferAttribute(i,F),f.fromBufferAttribute(i,D),p.fromBufferAttribute(i,A),m.fromBufferAttribute(r,F),h.fromBufferAttribute(r,D),y.fromBufferAttribute(r,A),f.sub(d),p.sub(d),h.sub(m),y.sub(m);let z=1/(h.x*y.y-y.x*h.y);isFinite(z)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(p,-h.y).multiplyScalar(z),_.copy(p).multiplyScalar(h.x).addScaledVector(f,-y.x).multiplyScalar(z),a[F].add(x),a[D].add(x),a[A].add(x),c[F].add(_),c[D].add(_),c[A].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,D=C.length;F<D;++F){let A=C[F],z=A.start,W=A.count;for(let L=z,G=z+W;L<G;L+=3)w(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new X,E=new X,b=new X,g=new X;function S(F){b.fromBufferAttribute(s,F),g.copy(b);let D=a[F];v.copy(D),v.sub(b.multiplyScalar(b.dot(D))).normalize(),E.crossVectors(g,D);let z=E.dot(c[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,z)}for(let F=0,D=i.count;F<D;++F)l[F]&&S(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new X,r=new X,o=new X,a=new X,c=new X,l=new X,d=new X,f=new X;if(e)for(let p=0,m=e.count;p<m;p+=3){let h=e.getX(p+0),y=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,h),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,h),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),a.add(d),c.add(d),l.add(d),i.setXYZ(h,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,p=new l.constructor(c.length*d),m=0,h=0;for(let y=0,x=c.length;y<x;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*d;for(let _=0;_<d;_++)p[h++]=l[m++]}return new jt(p,d,f)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let p=l[d],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,p=l.length;f<p;f++){let m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zc=new X,Gm=new X,Vm=new nt,ri=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Zc.subVectors(i,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vm.getNormalMatrix(e),s=this.coplanarPoint(Zc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Hm=0,Oi=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=us,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ni=new X,Jc=new X,ua=new X,da=new X,co=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jc.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),da.copy(this.origin).sub(Jc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ua),a=da.dot(this.direction),c=-da.dot(ua),l=da.lengthSq(),d=Math.abs(1-o*o),f,p,m,h;if(d>0)if(f=o*c-a,p=o*a-c,h=r*d,f>=0)if(p>=-h)if(p<=h){let y=1/d;f*=y,p*=y,m=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p<=-h?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l):p<=h?(f=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Jc).addScaledVector(ua,p),m}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let i=Ni.dot(this.direction),s=Ni.dot(Ni)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,p=e.y-o.y,m=e.z-o.z,h=t.x-o.x,y=t.y-o.y,x=t.z-o.z,_=i.x-o.x,w=i.y-o.y,C=i.z-o.z,v=Math.abs(c),E=Math.abs(l),b=Math.abs(d),g,S,F,D,A,z,W,L,G,V,B,Z;if(v>=E&&v>=b?(F=c,z=f,G=h,Z=_,c>=0?(g=l,S=d,D=p,A=m,W=y,L=x,V=w,B=C):(g=d,S=l,D=m,A=p,W=x,L=y,V=C,B=w)):E>=b?(F=l,z=p,G=y,Z=w,l>=0?(g=d,S=c,D=m,A=f,W=x,L=h,V=C,B=_):(g=c,S=d,D=f,A=m,W=h,L=x,V=_,B=C)):(F=d,z=m,G=x,Z=C,d>=0?(g=c,S=l,D=f,A=p,W=h,L=y,V=_,B=w):(g=l,S=c,D=p,A=f,W=y,L=h,V=w,B=_)),F===0)return null;let k=g/F,K=S/F,ie=1/F,j=D-k*z,ye=A-K*z,J=W-k*G,fe=L-K*G,Ee=V-k*Z,ge=B-K*Z,ve=Ee*fe-ge*J,Ve=j*ge-ye*Ee,rt=J*ye-fe*j;if(s){if(ve<0||Ve<0||rt<0)return null}else if((ve<0||Ve<0||rt<0)&&(ve>0||Ve>0||rt>0))return null;let qe=ve+Ve+rt;if(qe===0)return null;let ut=ie*(ve*z+Ve*G+rt*Z);return(qe>0?ut<0:ut>0)?null:this.at(ut/qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qu=new wt,Ss=new co,fa=new zi,Yu=new X,pa=new X,ma=new X,ga=new X,Kc=new X,xa=new X,Zu=new X,_a=new X,Ct=class extends Vt{constructor(e=new Yt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(Kc.fromBufferAttribute(f,e),o?xa.addScaledVector(Kc,d):xa.addScaledVector(Kc.sub(t),d))}t.add(xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(fa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(fa,Yu)===null||Ss.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(qu.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let h=0,y=p.length;h<y;h++){let x=p[h],_=o[x.materialIndex],w=Math.max(x.start,m.start),C=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let v=w,E=C;v<E;v+=3){let b=a.getX(v),g=a.getX(v+1),S=a.getX(v+2);s=ya(this,_,e,i,l,d,f,b,g,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let h=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let x=h,_=y;x<_;x+=3){let w=a.getX(x),C=a.getX(x+1),v=a.getX(x+2);s=ya(this,o,e,i,l,d,f,w,C,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let h=0,y=p.length;h<y;h++){let x=p[h],_=o[x.materialIndex],w=Math.max(x.start,m.start),C=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let v=w,E=C;v<E;v+=3){let b=v,g=v+1,S=v+2;s=ya(this,_,e,i,l,d,f,b,g,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let h=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let x=h,_=y;x<_;x+=3){let w=x,C=x+1,v=x+2;s=ya(this,o,e,i,l,d,f,w,C,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function Wm(n,e,t,i,s,r,o,a){let c;if(e.side===yn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===hs,a),c===null)return null;_a.copy(a),_a.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:n}}function ya(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,pa),n.getVertexPosition(c,ma),n.getVertexPosition(l,ga);let d=Wm(n,e,t,i,pa,ma,ga,Zu);if(d){let f=new X;is.getBarycoord(Zu,pa,ma,ga,f),s&&(d.uv=is.getInterpolatedAttribute(s,a,c,l,f,new ht)),r&&(d.uv1=is.getInterpolatedAttribute(r,a,c,l,f,new ht)),o&&(d.normal=is.getInterpolatedAttribute(o,a,c,l,f,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new X,materialIndex:0};is.getNormal(pa,ma,ga,p.normal),d.face=p,d.barycoord=f}return d}var Ts=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=mn,d=mn,f,p){super(null,o,a,c,l,d,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ss=class extends jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new wt,Ju=new wt,va=[],Ku=new vi,Xm=new wt,Zr=new Ct,Jr=new zi,In=class extends Ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),Ku.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),Jr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(i),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),Ju.multiplyMatrices(i,rr),Zr.matrixWorld=Ju,Zr.raycast(e,va);for(let o=0,a=va.length;o<a;o++){let c=va[o];c.instanceId=r,c.object=this,t.push(c)}va.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(s*this.count),s,this.count,ul,$n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new zi,qm=new ht(.5,.5),Ma=new X,rs=class{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],p=r[6],m=r[7],h=r[8],y=r[9],x=r[10],_=r[11],w=r[12],C=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-o,m-d,_-h,E-w).normalize(),s[1].setComponents(l+o,m+d,_+h,E+w).normalize(),s[2].setComponents(l+a,m+f,_+y,E+C).normalize(),s[3].setComponents(l-a,m-f,_-y,E-C).normalize(),i)s[4].setComponents(c,p,x,v).normalize(),s[5].setComponents(l-c,m-p,_-x,E-v).normalize();else if(s[4].setComponents(l-c,m-p,_-x,E-v).normalize(),t===Kn)s[5].setComponents(l+c,m+p,_+x,E+v).normalize();else if(t===ur)s[5].setComponents(c,p,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=qm.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$u=new wt,Va=class n{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];$u.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new rs),i[s].setFromProjectionMatrix($u,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new rs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ha=class extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ju=new wt,nh=new co,ba=new zi,Sa=new X,ho=class extends Vt{constructor(e=new Yt,t=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;ju.copy(s).invert(),nh.copy(e.ray).applyMatrix4(ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let h=p,y=m;h<y;h++){let x=l.getX(h);Sa.fromBufferAttribute(f,x),Qu(Sa,x,c,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let h=p,y=m;h<y;h++)Sa.fromBufferAttribute(f,h),Qu(Sa,h,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qu(n,e,t,i,s,r,o){let a=nh.distanceSqToPoint(n);if(a<t){let c=new X;nh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends Rn{constructor(e=[],t=Ls,i,s,r,o,a,c,l,d){super(e,t,i,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},As=class extends Rn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends Rn{constructor(e,t,i=ai,s,r,o,a=mn,c=mn,l,d=Fi,f=1){if(d!==Fi&&d!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fo=class extends Bi{constructor(e,t=ai,i=Ls,s,r,o=mn,a=mn,c,l=Fi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},po=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},an=class n extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],p=0,m=0;h("z","y","x",-1,-1,i,t,e,o,r,0),h("z","y","x",1,-1,i,t,-e,o,r,1),h("x","z","y",1,1,e,i,t,s,o,2),h("x","z","y",1,-1,e,i,-t,s,o,3),h("x","y","z",1,-1,e,t,i,s,r,4),h("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function h(y,x,_,w,C,v,E,b,g,S,F){let D=v/g,A=E/S,z=v/2,W=E/2,L=b/2,G=g+1,V=S+1,B=0,Z=0,k=new X;for(let K=0;K<V;K++){let ie=K*A-W;for(let j=0;j<G;j++){let ye=j*D-z;k[y]=ye*w,k[x]=ie*C,k[_]=L,l.push(k.x,k.y,k.z),k[y]=0,k[x]=0,k[_]=b>0?1:-1,d.push(k.x,k.y,k.z),f.push(j/g),f.push(1-K/S),B+=1}}for(let K=0;K<S;K++)for(let ie=0;ie<g;ie++){let j=p+ie+G*K,ye=p+ie+G*(K+1),J=p+(ie+1)+G*(K+1),fe=p+(ie+1)+G*K;c.push(j,ye,fe),c.push(ye,J,fe),Z+=6}a.addGroup(m,Z,F),m+=Z,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Es=class n extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new X,d=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let m=i+f/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[p]/e+1)/2,d.y=(o[p+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pn=class n extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],p=[],m=[],h=0,y=[],x=i/2,_=0;w(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(p,3)),this.setAttribute("uv",new Tt(m,2));function w(){let v=new X,E=new X,b=0,g=(t-e)/i;for(let S=0;S<=r;S++){let F=[],D=S/r,A=D*(t-e)+e;for(let z=0;z<=s;z++){let W=z/s,L=W*c+a,G=Math.sin(L),V=Math.cos(L);E.x=A*G,E.y=-D*i+x,E.z=A*V,f.push(E.x,E.y,E.z),v.set(G,g,V).normalize(),p.push(v.x,v.y,v.z),m.push(W,1-D),F.push(h++)}y.push(F)}for(let S=0;S<s;S++)for(let F=0;F<r;F++){let D=y[F][S],A=y[F+1][S],z=y[F+1][S+1],W=y[F][S+1];(e>0||F!==0)&&(d.push(D,A,W),b+=3),(t>0||F!==r-1)&&(d.push(A,z,W),b+=3)}l.addGroup(_,b,0),_+=b}function C(v){let E=h,b=new ht,g=new X,S=0,F=v===!0?e:t,D=v===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,x*D,0),p.push(0,D,0),m.push(.5,.5),h++;let A=h;for(let z=0;z<=s;z++){let L=z/s*c+a,G=Math.cos(L),V=Math.sin(L);g.x=F*V,g.y=x*D,g.z=F*G,f.push(g.x,g.y,g.z),p.push(0,D,0),b.x=G*.5+.5,b.y=V*.5*D+.5,m.push(b.x,b.y),h++}for(let z=0;z<s;z++){let W=E+z,L=A+z;v===!0?d.push(L,L+1,W):d.push(L+1,L,W),S+=3}l.addGroup(_,S,v===!0?1:2),_+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var mo=class n extends Yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),d(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let C=new X,v=new X,E=new X;for(let b=0;b<t.length;b+=3)m(t[b+0],C),m(t[b+1],v),m(t[b+2],E),c(C,v,E,w)}function c(w,C,v,E){let b=E+1,g=[];for(let S=0;S<=b;S++){g[S]=[];let F=w.clone().lerp(v,S/b),D=C.clone().lerp(v,S/b),A=b-S;for(let z=0;z<=A;z++)z===0&&S===b?g[S][z]=F:g[S][z]=F.clone().lerp(D,z/A)}for(let S=0;S<b;S++)for(let F=0;F<2*(b-S)-1;F++){let D=Math.floor(F/2);F%2===0?(p(g[S][D+1]),p(g[S+1][D]),p(g[S][D])):(p(g[S][D+1]),p(g[S+1][D+1]),p(g[S+1][D]))}}function l(w){let C=new X;for(let v=0;v<r.length;v+=3)C.x=r[v+0],C.y=r[v+1],C.z=r[v+2],C.normalize().multiplyScalar(w),r[v+0]=C.x,r[v+1]=C.y,r[v+2]=C.z}function d(){let w=new X;for(let C=0;C<r.length;C+=3){w.x=r[C+0],w.y=r[C+1],w.z=r[C+2];let v=x(w)/2/Math.PI+.5,E=_(w)/Math.PI+.5;o.push(v,1-E)}h(),f()}function f(){for(let w=0;w<o.length;w+=6){let C=o[w+0],v=o[w+2],E=o[w+4],b=Math.max(C,v,E),g=Math.min(C,v,E);b>.9&&g<.1&&(C<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),E<.2&&(o[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function m(w,C){let v=w*3;C.x=e[v+0],C.y=e[v+1],C.z=e[v+2]}function h(){let w=new X,C=new X,v=new X,E=new X,b=new ht,g=new ht,S=new ht;for(let F=0,D=0;F<r.length;F+=9,D+=6){w.set(r[F+0],r[F+1],r[F+2]),C.set(r[F+3],r[F+4],r[F+5]),v.set(r[F+6],r[F+7],r[F+8]),b.set(o[D+0],o[D+1]),g.set(o[D+2],o[D+3]),S.set(o[D+4],o[D+5]),E.copy(w).add(C).add(v).divideScalar(3);let A=x(E);y(b,D+0,w,A),y(g,D+2,C,A),y(S,D+4,v,A)}}function y(w,C,v,E){E<0&&w.x===1&&(o[C]=w.x-1),v.x===0&&v.z===0&&(o[C]=E/2/Math.PI+.5)}function x(w){return Math.atan2(w.z,-w.x)}function _(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var ki=class n extends mo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Cs=class n extends mo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Nn=class n extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,d=c+1,f=e/a,p=t/c,m=[],h=[],y=[],x=[];for(let _=0;_<d;_++){let w=_*p-o;for(let C=0;C<l;C++){let v=C*f-r;h.push(v,-w,0),y.push(0,0,1),x.push(C/a),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let w=0;w<a;w++){let C=w+l*_,v=w+l*(_+1),E=w+1+l*(_+1),b=w+1+l*_;m.push(C,v,b),m.push(v,E,b)}this.setIndex(m),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},go=class n extends Yt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],d=[],f=e,p=(t-e)/s,m=new X,h=new ht;for(let y=0;y<=s;y++){for(let x=0;x<=i;x++){let _=r+x/i*o;m.x=f*Math.cos(_),m.y=f*Math.sin(_),c.push(m.x,m.y,m.z),l.push(0,0,1),h.x=(m.x/t+1)/2,h.y=(m.y/t+1)/2,d.push(h.x,h.y)}f+=p}for(let y=0;y<s;y++){let x=y*(i+1);for(let _=0;_<i;_++){let w=_+x,C=w,v=w+i+1,E=w+i+2,b=w+1;a.push(C,v,b),a.push(v,E,b)}}this.setIndex(a),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var os=class n extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new X,p=new X,m=[],h=[],y=[],x=[];for(let _=0;_<=i;_++){let w=[],C=_/i,v=o+C*a,E=e*Math.cos(v),b=Math.sqrt(e*e-E*E),g=0;_===0&&o===0?g=.5/t:_===i&&c===Math.PI&&(g=-.5/t);for(let S=0;S<=t;S++){let F=S/t,D=s+F*r;f.x=-b*Math.cos(D),f.y=E,f.z=b*Math.sin(D),h.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),x.push(F+g,1-C),w.push(l++)}d.push(w)}for(let _=0;_<i;_++)for(let w=0;w<t;w++){let C=d[_][w+1],v=d[_][w],E=d[_+1][w],b=d[_+1][w+1];(_!==0||o>0)&&m.push(C,v,b),(_!==i-1||c<Math.PI)&&m.push(v,E,b)}this.setIndex(m),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xo=class n extends Yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],d=[],f=[],p=new X,m=new X,h=new X;for(let y=0;y<=i;y++){let x=o+y/i*a;for(let _=0;_<=s;_++){let w=_/s*r;m.x=(e+t*Math.cos(x))*Math.cos(w),m.y=(e+t*Math.cos(x))*Math.sin(w),m.z=t*Math.sin(x),l.push(m.x,m.y,m.z),p.x=e*Math.cos(w),p.y=e*Math.sin(w),h.subVectors(m,p).normalize(),d.push(h.x,h.y,h.z),f.push(_/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let x=1;x<=s;x++){let _=(s+1)*y+x-1,w=(s+1)*(y-1)+x-1,C=(s+1)*(y-1)+x,v=(s+1)*y+x;c.push(_,w,v),c.push(w,C,v)}this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(ed(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ed(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function An(n){let e={};for(let t=0;t<n.length;t++){let i=Ns(n[t]);for(let s in i)e[s]=i[s]}return e}function ed(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ym(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var Yd={clone:Ns,merge:An},Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wa=class extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xa=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qa=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function or(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var as=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends as{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=e,a=2*t-i;break;case th:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case eh:o=e,c=2*i-t;break;case th:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,h=(i-t)/(s-t),y=h*h,x=y*h,_=-p*x+2*p*y-p*h,w=(1+p)*x+(-1.5-2*p)*y+(-.5+p)*h+1,C=(-1-m)*x+(1.5+m)*y+.5*h,v=m*x-m*y;for(let E=0;E!==a;++E)r[E]=_*o[d+E]+w*o[l+E]+C*o[c+E]+v*o[f+E];return r}},Za=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(i-t)/(s-t),f=1-d;for(let p=0;p!==a;++p)r[p]=o[l+p]*f+o[c+p]*d;return r}},Ja=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ka=class extends as{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let h=(i-t)/(s-t),y=1-h;for(let x=0;x!==a;++x)r[x]=o[l+x]*y+o[c+x]*h;return r}let p=a*2,m=e-1;for(let h=0;h!==a;++h){let y=o[l+h],x=o[c+h],_=m*p+h*2,w=f[_],C=f[_+1],v=e*p+h*2,E=d[v],b=d[v+1],g=$m(i,t,w,E,s);r[h]=Zd(g,y,C,b,x)}return r}};function Zd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Km(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function $m(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Zd(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Km(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),wa(e.settings)&&(i.settings={inTangents:or(e.settings.inTangents,Array),outTangents:or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break;case jc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return et("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;wa(this.settings)&&(td(this.settings.inTangents,e),td(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;wa(this.settings)&&(nd(this.settings.inTangents,e),nd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){st("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){st("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&dm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){st("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,p=f-i,m=f+i;for(let h=0;h!==i;++h){let y=t[f+h];if(y!==t[p+h]||y!==t[m+h]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function td(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function nd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Oa;var ls=class extends Wn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Qr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};$a.prototype.ValueTypeName="color";var ja=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};ja.prototype.ValueTypeName="number";var Qa=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},_o=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Wn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Qr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};el.prototype.ValueTypeName="vector";var tl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=l.length;f<p;f+=2){let m=l[f],h=l[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return h}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jd=new tl,nl=class{constructor(e){this.manager=e!==void 0?e:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var yo=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vo=class extends yo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},$c=new wt,id=new X,sd=new X,il=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix($c,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ur||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ta=new X,Aa=new tn,xi=new X,Mo=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ta,Aa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Aa,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ta,Aa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Aa,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new X,rd=new ht,od=new ht,Cn=class extends Mo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,rd,od),t.subVectors(od,rd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var bo=class extends Mo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends il{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},So=class extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ar=-90,lr=1,gr=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Cn(ar,lr,e,t);s.layers=this.layers,this.add(s);let r=new Cn(ar,lr,e,t);r.layers=this.layers,this.add(r);let o=new Cn(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new Cn(ar,lr,e,t);a.layers=this.layers,this.add(a);let c=new Cn(ar,lr,e,t);c.layers=this.layers,this.add(c);let l=new Cn(ar,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}},sl=class extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Nh="\\[\\]\\.:\\/",jm=new RegExp("["+Nh+"]","g"),Uh="[^"+Nh+"]",Qm="[^"+Nh.replace("\\.","")+"]",e0=/((?:WC+[\/:])*)/.source.replace("WC",Uh),t0=/(WCOD+)?/.source.replace("WCOD",Qm),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),s0=new RegExp("^"+e0+t0+n0+i0+"$"),r0=["material","materials","bones","map"],sh=class{constructor(e,t,i){let s=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jm,"")}static parseTrackName(e){let t=s0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);r0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;st("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=sh;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hv=new Float32Array(1);var rh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Fh(n,e,t,i){let s=o0(i);switch(t){case Sh:return n*e;case ul:return n*e/s.components*s.byteLength;case dl:return n*e/s.components*s.byteLength;case ds:return n*e*2/s.components*s.byteLength;case fl:return n*e*2/s.components*s.byteLength;case wh:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case pl:return n*e*4/s.components*s.byteLength;case Eo:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:case _l:return Math.max(n,16)*Math.max(e,8)/4;case ml:case xl:return Math.max(n,8)*Math.max(e,8)/2;case yl:case vl:case bl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ml:case Po:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bl:case kl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lo:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(n){switch(n){case Fn:case yh:return{byteLength:1,components:1};case yr:case vh:case li:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case ai:case ll:case $n:return{byteLength:4,components:1};case Mh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _f(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function f0(n){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((m,h)=>m.start-h.start);let p=0;for(let m=1;m<f.length;m++){let h=f[p],y=f[m];y.start<=h.start+h.count+1?h.count=Math.max(h.count,y.start+y.count-h.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,h=f.length;m<h;m++){let y=f[m];n.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ox=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:_0,alphatest_pars_fragment:y0,aomap_fragment:v0,aomap_pars_fragment:M0,batching_pars_vertex:b0,batching_vertex:S0,begin_vertex:w0,beginnormal_vertex:T0,bsdfs:A0,iridescence_fragment:E0,bumpmap_pars_fragment:C0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:N0,color_pars_vertex:U0,color_vertex:F0,common:z0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:k0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,colorspace_fragment:H0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rg,envmap_vertex:J0,fog_vertex:K0,fog_pars_vertex:$0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:og,lights_toon_pars_fragment:ag,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,lightprobes_pars_fragment:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:yg,map_fragment:vg,map_pars_fragment:Mg,map_particle_fragment:bg,map_particle_pars_fragment:Sg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Ag,morphcolor_vertex:Eg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Ig,normal_fragment_begin:Pg,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:kg,opaque_fragment:Gg,packing:Vg,premultiplied_alpha_fragment:Hg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:$g,shadowmask_pars_fragment:jg,skinbase_vertex:Qg,skinning_pars_vertex:ex,skinning_vertex:tx,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ox,transmission_fragment:ax,transmission_pars_fragment:lx,uv_pars_fragment:cx,uv_pars_vertex:hx,uv_vertex:ux,worldpos_vertex:dx,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:xx,cube_frag:_x,depth_vert:yx,depth_frag:vx,distance_vert:Mx,distance_frag:bx,equirect_vert:Sx,equirect_frag:wx,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Ex,meshbasic_frag:Cx,meshlambert_vert:Rx,meshlambert_frag:Ix,meshmatcap_vert:Px,meshmatcap_frag:Lx,meshnormal_vert:Dx,meshnormal_frag:Nx,meshphong_vert:Ux,meshphong_frag:Fx,meshphysical_vert:zx,meshphysical_frag:Ox,meshtoon_vert:Bx,meshtoon_frag:kx,points_vert:Gx,points_frag:Vx,shadow_vert:Hx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},ze={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Si={basic:{uniforms:An([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new $e(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:An([ze.common,ze.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:An([ze.lights,ze.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Si.physical={uniforms:An([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Yl={r:0,b:0,g:0},Yx=new wt,yf=new nt;yf.set(-1,0,0,0,1,0,0,0,1);function Zx(n,e,t,i,s,r){let o=new $e(0),a=s===!0?0:1,c,l,d=null,f=0,p=null;function m(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let v=w.backgroundBlurriness>0;C=e.get(C,v)}return C}function h(w){let C=!1,v=m(w);v===null?x(o,a):v&&v.isColor&&(x(v,1),C=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(w,C){let v=m(C);v&&v.isCubeTexture?(l===void 0&&(l=new Ct(new an(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ns(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(C.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yf),l.material.toneMapped=bt.getTransfer(v.colorSpace)!==Lt,(d!==v||f!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ct(new Nn(2,2),new Un({name:"BackgroundMaterial",uniforms:Ns(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=bt.getTransfer(v.colorSpace)!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function x(w,C){w.getRGB(Yl,Dh(n)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,C,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,C=1){o.set(w),a=C,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,x(o,a)},render:h,addToRenderList:y,dispose:_}}function Jx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(A,z,W,L,G){let V=!1,B=f(A,L,W,z);r!==B&&(r=B,l(r.object)),V=m(A,L,W,G),V&&h(A,L,W,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(A,z,W,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(A){return n.bindVertexArray(A)}function d(A){return n.deleteVertexArray(A)}function f(A,z,W,L){let G=L.wireframe===!0,V=i[z.id];V===void 0&&(V={},i[z.id]=V);let B=A.isInstancedMesh===!0?A.id:0,Z=V[B];Z===void 0&&(Z={},V[B]=Z);let k=Z[W.id];k===void 0&&(k={},Z[W.id]=k);let K=k[G];return K===void 0&&(K=p(c()),k[G]=K),K}function p(A){let z=[],W=[],L=[];for(let G=0;G<t;G++)z[G]=0,W[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:L,object:A,attributes:{},index:null}}function m(A,z,W,L){let G=r.attributes,V=z.attributes,B=0,Z=W.getAttributes();for(let k in Z)if(Z[k].location>=0){let ie=G[k],j=V[k];if(j===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(j=A.instanceColor)),ie===void 0||ie.attribute!==j||j&&ie.data!==j.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function h(A,z,W,L){let G={},V=z.attributes,B=0,Z=W.getAttributes();for(let k in Z)if(Z[k].location>=0){let ie=V[k];ie===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));let j={};j.attribute=ie,ie&&ie.data&&(j.data=ie.data),G[k]=j,B++}r.attributes=G,r.attributesNum=B,r.index=L}function y(){let A=r.newAttributes;for(let z=0,W=A.length;z<W;z++)A[z]=0}function x(A){_(A,0)}function _(A,z){let W=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;W[A]=1,L[A]===0&&(n.enableVertexAttribArray(A),L[A]=1),G[A]!==z&&(n.vertexAttribDivisor(A,z),G[A]=z)}function w(){let A=r.newAttributes,z=r.enabledAttributes;for(let W=0,L=z.length;W<L;W++)z[W]!==A[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function C(A,z,W,L,G,V,B){B===!0?n.vertexAttribIPointer(A,z,W,G,V):n.vertexAttribPointer(A,z,W,L,G,V)}function v(A,z,W,L){y();let G=L.attributes,V=W.getAttributes(),B=z.defaultAttributeValues;for(let Z in V){let k=V[Z];if(k.location>=0){let K=G[Z];if(K===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),K!==void 0){let ie=K.normalized,j=K.itemSize,ye=e.get(K);if(ye===void 0)continue;let J=ye.buffer,fe=ye.type,Ee=ye.bytesPerElement,ge=fe===n.INT||fe===n.UNSIGNED_INT||K.gpuType===ll;if(K.isInterleavedBufferAttribute){let ve=K.data,Ve=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,rt=K.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let qe=0;qe<k.locationSize;qe++)_(k.location+qe,ve.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<k.locationSize;qe++)x(k.location+qe);n.bindBuffer(n.ARRAY_BUFFER,J);for(let qe=0;qe<k.locationSize;qe++)C(k.location+qe,j/k.locationSize,fe,ie,Ve*Ee,(rt+j/k.locationSize*qe)*Ee,ge)}else{if(K.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)_(k.location+ve,K.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ve=0;ve<k.locationSize;ve++)C(k.location+ve,j/k.locationSize,fe,ie,j*Ee,j/k.locationSize*ve*Ee,ge)}}else if(B!==void 0){let ie=B[Z];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(k.location,ie);break;case 3:n.vertexAttrib3fv(k.location,ie);break;case 4:n.vertexAttrib4fv(k.location,ie);break;default:n.vertexAttrib1fv(k.location,ie)}}}}w()}function E(){F();for(let A in i){let z=i[A];for(let W in z){let L=z[W];for(let G in L){let V=L[G];for(let B in V)d(V[B].object),delete V[B];delete L[G]}}delete i[A]}}function b(A){if(i[A.id]===void 0)return;let z=i[A.id];for(let W in z){let L=z[W];for(let G in L){let V=L[G];for(let B in V)d(V[B].object),delete V[B];delete L[G]}}delete i[A.id]}function g(A){for(let z in i){let W=i[z];for(let L in W){let G=W[L];if(G[A.id]===void 0)continue;let V=G[A.id];for(let B in V)d(V[B].object),delete V[B];delete G[A.id]}}}function S(A){for(let z in i){let W=i[z],L=A.isInstancedMesh===!0?A.id:0,G=W[L];if(G!==void 0){for(let V in G){let B=G[V];for(let Z in B)d(B[Z].object),delete B[Z];delete G[V]}delete W[L],Object.keys(W).length===0&&delete i[z]}}}function F(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}function Kx(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let p=0;for(let m=0;m<d;m++)p+=l[m];t.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $x(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Xn&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let S=g===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Fn&&g!==$n&&!S&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(et("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:h,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:v,maxSamples:E,samples:b}}function jx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ri,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){let h=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=n.get(f);if(!s||h===null||h.length===0||r&&!x)r?d(null):l();else{let w=r?0:i,C=w*4,v=_.clippingState||null;c.value=v,v=d(h,p,C,m);for(let E=0;E!==C;++E)v[E]=t[E];_.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,h){let y=f!==null?f.length:0,x=null;if(y!==0){if(x=c.value,h!==!0||x===null){let _=m+y*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(x===null||x.length<_)&&(x=new Float32Array(_));for(let C=0,v=m;C!==y;++C,v+=4)o.copy(f[C]).applyMatrix4(w,a),o.normal.toArray(x,v),x[v+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}var Uo=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Is});r.uniforms.tEquirect.value=t;let o=new Ct(s,r),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=gn),new gr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Kd=256,Qx=3,e_=20,vf=256,Mf=16,t_=3,n_=new X,i_=new $e,Jl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gr(1,10,null),this._boxMesh=new Ct(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=n_}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,p=c.autoClearColor,m=c.autoClearDepth,h=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(i_));let x=new gr(i,s,d);return x.position.copy(a),x.update(c,e),c.autoClear=f,c.autoClearColor=p,c.autoClearDepth=m,c.autoClearStencil=h,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Kd,Ph(e))}_fromTexture(e,t){e.mapping===Ls||e.mapping===_r?this._setSize(e.image.length===0?Kd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=$d(e,!1,!1),i=Math.log2(e)-Qx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$d(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ls||e.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=s_(),this._integrationMaterial=r_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Mf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-t_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(vf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=o_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function $d(n,e,t){return new Uo(n,{minFilter:Gi,generateMipmaps:e,type:li,colorSpace:eo,depthBuffer:t})}function Fo(n,e,t){return new Un({name:n,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:yn,blending:Is,depthTest:!1,depthWrite:!1})}function s_(){return Fo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function r_(){return Fo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function o_(){return Fo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${e_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function jd(){return Fo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qd(){return Fo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function a_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(p,m=!1){return p==null?null:m?o(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===rl||m===ol)if(e.has(p)){let h=e.get(p).texture;return a(h,p.mapping)}else{let h=p.image;if(h&&h.height>0){let y=new Uo(h.height);return y.fromEquirectangularTexture(n,p),e.set(p,y),p.addEventListener("dispose",l),a(y.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,h=m===rl||m===ol,y=m===Ls||m===_r;if(h||y){let x=t.get(p),_=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return i===null&&(i=new Jl(n)),x=h?i.fromEquirectangular(p,x):i.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),x.texture;if(x!==void 0)return x.texture;{let w=p.image;return h&&w&&w.height>0||y&&w&&c(w)?(i===null&&(i=new Jl(n)),x=h?i.fromEquirectangular(p):i.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),p.addEventListener("dispose",d),x.texture):null}}}return p}function a(p,m){return m===rl?p.mapping=Ls:m===ol&&(p.mapping=_r),p}function c(p){let m=0,h=6;for(let y=0;y<h;y++)p[y]!==void 0&&m++;return m===h}function l(p){let m=p.target;m.removeEventListener("dispose",l);let h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function d(p){let m=p.target;m.removeEventListener("dispose",d);let h=t.get(m);h!==void 0&&(t.delete(m),h.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function l_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Kr("WebGLRenderer: "+i+" extension not supported."),s}}}function c_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(h=>delete s[h]);function a(h){c(h.target)}function c(h){h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id],o.unregister(h);let y=r.get(h);y&&(e.remove(y),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(h,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function d(h){let y=h.attributes;for(let x in y)e.update(y[x],n.ARRAY_BUFFER)}function f(h){let y=h.index,x=h.attributes.position,_=0;if(x===void 0)return;let w=y!==null?y.array.length:x.array.length/3-1,C=x.count>=65535?lo:ao,v=new C(Math.ceil(w/3)*6,1),E=v.array;if(y!==null){let g=y.array;_=y.version;for(let S=0,F=0;S<w;S+=3){let D=g[S+0],A=g[S+1],z=g[S+2];E[F++]=D,E[F++]=A,E[F++]=A,E[F++]=z,E[F++]=z,E[F++]=D}}else{_=x.version;for(let g=0,S=0;g<w;g+=3){let F=g+0,D=g+1,A=g+2;E[S++]=F,E[S++]=D,E[S++]=D,E[S++]=A,E[S++]=A,E[S++]=F}}v.version=_;let b=r.get(h);b&&e.remove(b),r.set(h,v)}function p(h){let y=r.get(h);if(y){let x=h.index;x!==null&&y.version<x.version&&f(h)}else f(h);return r.get(h)}function m(){for(let h in s){let y=s[h].deref();y!==void 0&&c(y)}}return{get:l,update:d,getWireframeAttribute:p,dispose:m}}function h_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,f*o,m),t.update(p,i,m))}function d(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,m);let y=0;for(let x=0;x<m;x++)y+=p[x];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function u_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d_(n,e,t){let i=new WeakMap,s=new qt;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,p=i.get(a);if(p===void 0||p.count!==f){let F=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,h=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],C=0;m===!0&&(C=1),h===!0&&(C=2),y===!0&&(C=3);let v=a.attributes.position.count*C,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*E*4*f),g=new io(b,v,E,f);g.type=$n,g.needsUpdate=!0;let S=C*4;for(let D=0;D<f;D++){let A=x[D],z=_[D],W=w[D],L=v*E*4*D;for(let G=0;G<A.count;G++){let V=G*S;m===!0&&(s.fromBufferAttribute(A,G),b[L+V+0]=s.x,b[L+V+1]=s.y,b[L+V+2]=s.z,b[L+V+3]=0),h===!0&&(s.fromBufferAttribute(z,G),b[L+V+4]=s.x,b[L+V+5]=s.y,b[L+V+6]=s.z,b[L+V+7]=0),y===!0&&(s.fromBufferAttribute(W,G),b[L+V+8]=s.x,b[L+V+9]=s.y,b[L+V+10]=s.z,b[L+V+11]=W.itemSize===4?s.w:1)}}p={count:f,texture:g,size:new ht(v,E)},i.set(a,p),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];let h=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",h),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function f_(n,e,t,i,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var p_={[dh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[To]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[mh]:"CUSTOM_TONE_MAPPING"};function m_(n,e,t,i,s,r){let o=new Hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new Yt;d.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let f=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ct(d,f),m=new bo(-1,1,1,-1,0,1),h=null,y=null,x=!1,_,w=null,C=[],v=!1;this.setSize=function(E,b){o.setSize(E,b),a!==null&&a.setSize(E,b),c!==null&&c.setSize(E,b);for(let g=0;g<C.length;g++){let S=C[g];S.setSize&&S.setSize(E,b)}},this.setEffects=function(E){C=E,v=C.length>0&&C[0].isRenderPass===!0;let b=o.width,g=o.height;C.length>0&&a===null&&(a=new Hn(b,g,{type:li,depthBuffer:!1,stencilBuffer:!1}),c=new Hn(b,g,{type:li,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&C.some(F=>F.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&l===null&&(l=new Bi(b,g),r===!0&&(l.format=Vi,l.type=Ds)),o.dispose(),o.depthTexture=S?l:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let F=0;F<C.length;F++){let D=C[F];D.setSize&&D.setSize(b,g),S&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(E,b){if(x||E.toneMapping===Mi&&C.length===0)return!1;if(w=b,b!==null){let g=b.width,S=b.height;(o.width!==g||o.height!==S)&&this.setSize(g,S)}return v===!1&&E.setRenderTarget(o),_=E.toneMapping,E.toneMapping=Mi,!0},this.hasRenderPass=function(){return v},this.end=function(E,b){E.toneMapping=_,x=!0;let g=o,S=a;for(let F=0;F<C.length;F++){let D=C[F];D.enabled!==!1&&(D.render(E,S,g,b),D.needsSwap!==!1&&(g=S,S=S===a?c:a))}if(h!==E.outputColorSpace||y!==E.toneMapping){h=E.outputColorSpace,y=E.toneMapping,f.defines={},bt.getTransfer(h)===Lt&&(f.defines.SRGB_TRANSFER="");let F=p_[y];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(w),E.render(p,m),w=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var bf=new Rn,Sf=new Bi(1,1),wf=new fo(1),Tf=new io,Af=new Ga,Ef=new uo,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function Sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $l(n,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function v_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;rf.set(i),n.uniformMatrix2fv(this.addr,!1,rf),fn(t,i)}}function M_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;sf.set(i),n.uniformMatrix3fv(this.addr,!1,sf),fn(t,i)}}function b_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),fn(t,i)}}function S_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function A_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function E_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function R_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function jl(n){return n.version===0&&(n.compareFunction=Eh,n.needsUpdate=!0),n}function P_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=jl(Sf):r=bf,t.setTexture2D(e||r,s)}function L_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Af,s)}function D_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=jl(wf):r=Ef,t.setTextureCube(e||r,s)}function N_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tf,s)}function U_(n){switch(n){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return b_;case 5124:case 35670:return S_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return E_;case 36294:return C_;case 36295:return R_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(n,e){n.uniform1fv(this.addr,e)}function z_(n,e){let t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function O_(n,e){let t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function B_(n,e){let t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function k_(n,e){let t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G_(n,e){let t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function V_(n,e){let t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H_(n,e){n.uniform1iv(this.addr,e)}function W_(n,e){n.uniform2iv(this.addr,e)}function X_(n,e){n.uniform3iv(this.addr,e)}function q_(n,e){n.uniform4iv(this.addr,e)}function Y_(n,e){n.uniform1uiv(this.addr,e)}function Z_(n,e){n.uniform2uiv(this.addr,e)}function J_(n,e){n.uniform3uiv(this.addr,e)}function K_(n,e){n.uniform4uiv(this.addr,e)}function $_(n,e,t){let i=this.cache,s=e.length,r=$l(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=jl(Sf):o=bf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function j_(n,e,t){let i=this.cache,s=e.length,r=$l(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Af,r[o])}function Q_(n,e,t){let i=this.cache,s=e.length,r=$l(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=jl(wf):o=Ef;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function ey(n,e,t){let i=this.cache,s=e.length,r=$l(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tf,r[o])}function ty(n){switch(n){case 5126:return F_;case 35664:return z_;case 35665:return O_;case 35666:return B_;case 35674:return k_;case 35675:return G_;case 35676:return V_;case 5124:case 35670:return H_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return Z_;case 36295:return J_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ey}}var Bh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}},kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},zh=/(\w+)(\])?(\[|\.)?/g;function of(n,e){n.seq.push(e),n.map[e.id]=e}function ny(n,e,t){let i=n.name,s=i.length;for(zh.lastIndex=0;;){let r=zh.exec(i),o=zh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){of(t,l===void 0?new Bh(a,n,e):new kh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Gh(a),of(t,f)),t=f}}}var br=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);ny(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function af(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iy=37297,sy=0;function ry(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var lf=new nt;function oy(n){bt._getMatrix(lf,bt.workingColorSpace,n);let e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case to:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ry(n.getShaderSource(e),a)}else return r}function ay(n,e){let t=oy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ly={[dh]:"Linear",[fh]:"Reinhard",[ph]:"Cineon",[To]:"ACESFilmic",[gh]:"AgX",[xh]:"Neutral",[mh]:"Custom"};function cy(n,e){let t=ly[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zl=new X;function hy(){bt.getLuminanceCoefficients(Zl);let n=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function dy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function No(n){return n!==""}function hf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(n){return n.replace(py,my)}function my(n,e){let t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vh(t)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(gy,xy)}function xy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _y={[Rs]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function yy(n){return _y[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vy={[_r]:"ENVMAP_MODE_REFRACTION"};function My(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var by={[uh]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function Sy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":by[n.combine]||"ENVMAP_BLENDING_NONE"}function wy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=yy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=My(t),f=Sy(t),p=uy(t),m=dy(r),h=s.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),x.length>0&&(x+=`
`)):(y=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),x=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Mi?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=Vh(o),o=hf(o,t),o=uf(o,t),a=Vh(a),a=hf(a,t),a=uf(a,t),o=df(o),a=df(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=_+y+o,C=_+x+a,v=af(s,s.VERTEX_SHADER,w),E=af(s,s.FRAGMENT_SHADER,C);s.attachShader(h,v),s.attachShader(h,E),t.index0AttributeName!==void 0?s.bindAttribLocation(h,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(h,0,"position"),s.linkProgram(h);function b(D){if(n.debug.checkShaderErrors){let A=s.getProgramInfoLog(h)||"",z=s.getShaderInfoLog(v)||"",W=s.getShaderInfoLog(E)||"",L=A.trim(),G=z.trim(),V=W.trim(),B=!0,Z=!0;if(s.getProgramParameter(h,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,h,v,E);else{let k=cf(s,v,"vertex"),K=cf(s,E,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(h,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+k+`
`+K)}else L!==""?et("WebGLProgram: Program Info Log:",L):(G===""||V==="")&&(Z=!1);Z&&(D.diagnostics={runnable:B,programLog:L,vertexShader:{log:G,prefix:y},fragmentShader:{log:V,prefix:x}})}s.deleteShader(v),s.deleteShader(E),g=new br(s,h),S=fy(s,h)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(h,iy)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=v,this.fragmentShader=E,this}var Ty=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wh(e),t.set(e,i)),i}},Wh=class{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}};function Ay(n){return n===ds||n===Po||n===Lo}function Ey(n,e,t,i,s,r){let o=new so,a=new Hh,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function h(g,S,F,D,A,z){let W=D.fog,L=A.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||G,V),Z=p[g.type],k=i.precision;g.precision!==null&&(k=i.getMaxPrecision(g.precision),k!==g.precision&&et("WebGLProgram.getParameters:",g.precision,"not supported, using",k,"instead."));let K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=K!==void 0?K.length:0,j=0;L.morphAttributes.position!==void 0&&(j=1),L.morphAttributes.normal!==void 0&&(j=2),L.morphAttributes.color!==void 0&&(j=3);let ye,J,fe,Ee;if(Z){let Pe=Si[Z];ye=Pe.vertexShader,J=Pe.fragmentShader}else{ye=g.vertexShader,J=g.fragmentShader;let Pe=a.getVertexShaderStage(g),Mt=a.getFragmentShaderStage(g);a.update(g,Pe,Mt),fe=Pe.id,Ee=Mt.id}let ge=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ve=A.isInstancedMesh===!0,rt=A.isBatchedMesh===!0,qe=!!g.map,ut=!!g.matcap,vt=!!B,Ke=vt&&B.isPMREMTexture===!0,It=!!g.aoMap,Wt=!!g.lightMap,Xt=!!g.bumpMap&&g.wireframe===!1,Rt=!!g.normalMap,ne=!!g.displacementMap,De=!!g.emissiveMap,mt=!!g.metalnessMap,gt=!!g.roughnessMap,at=g.anisotropy>0,Y=g.clearcoat>0,Dt=g.diffuseRoughness>0,dt=g.dispersion>0,Nt=g.retroreflectivity>0,Le=g.iridescence>0,lt=g.sheen>0,Xe=g.transmission>0,Qe=at&&!!g.anisotropyMap,O=Y&&!!g.clearcoatMap,I=Y&&!!g.clearcoatNormalMap,Q=Y&&!!g.clearcoatRoughnessMap,xe=Dt&&!!g.diffuseRoughnessMap,de=Le&&!!g.iridescenceMap,Se=Le&&!!g.iridescenceThicknessMap,_e=lt&&!!g.sheenColorMap,oe=lt&&!!g.sheenRoughnessMap,ae=!!g.specularMap,Re=!!g.specularColorMap,H=!!g.specularIntensityMap,ce=Xe&&!!g.transmissionMap,re=Xe&&!!g.thicknessMap,Te=!!g.gradientMap,pe=!!g.alphaMap,be=g.alphaTest>0,He=!!g.alphaHash,ot=!!g.extensions,Me=Mi;g.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Me=n.toneMapping);let Ue=Ke?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,it={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:ye,fragmentShader:J,defines:g.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:k,batching:rt,batchingColor:rt&&A._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&A.instanceColor!==null,instancingMorph:Ve&&A.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:qe,matcap:ut,envMap:vt,envMapMode:vt&&B.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?Ue.length-1:null,envMapSize:Ke?Ue[0].width:null,aoMap:It,lightMap:Wt,bumpMap:Xt,normalMap:Rt,displacementMap:ne,emissiveMap:De,normalMapObjectSpace:Rt&&g.normalMapType===Ld,normalMapTangentSpace:Rt&&g.normalMapType===Xl,packedNormalMap:Rt&&g.normalMapType===Xl&&Ay(g.normalMap.format),metalnessMap:mt,roughnessMap:gt,anisotropy:at,anisotropyMap:Qe,clearcoat:Y,clearcoatMap:O,clearcoatNormalMap:I,clearcoatRoughnessMap:Q,diffuseRoughness:Dt,diffuseRoughnessMap:xe,dispersion:dt,retroreflection:Nt,iridescence:Le,iridescenceMap:de,iridescenceThicknessMap:Se,sheen:lt,sheenColorMap:_e,sheenRoughnessMap:oe,specularMap:ae,specularColorMap:Re,specularIntensityMap:H,transmission:Xe,transmissionMap:ce,thicknessMap:re,gradientMap:Te,opaque:g.transparent===!1&&g.blending===us&&g.alphaToCoverage===!1,alphaMap:pe,alphaTest:be,alphaHash:He,combine:g.combine,mapUv:qe&&m(g.map.channel),aoMapUv:It&&m(g.aoMap.channel),lightMapUv:Wt&&m(g.lightMap.channel),bumpMapUv:Xt&&m(g.bumpMap.channel),normalMapUv:Rt&&m(g.normalMap.channel),displacementMapUv:ne&&m(g.displacementMap.channel),emissiveMapUv:De&&m(g.emissiveMap.channel),metalnessMapUv:mt&&m(g.metalnessMap.channel),roughnessMapUv:gt&&m(g.roughnessMap.channel),anisotropyMapUv:Qe&&m(g.anisotropyMap.channel),clearcoatMapUv:O&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:I&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:de&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:oe&&m(g.sheenRoughnessMap.channel),specularMapUv:ae&&m(g.specularMap.channel),specularColorMapUv:Re&&m(g.specularColorMap.channel),specularIntensityMapUv:H&&m(g.specularIntensityMap.channel),transmissionMapUv:ce&&m(g.transmissionMap.channel),thicknessMapUv:re&&m(g.thicknessMap.channel),alphaMapUv:pe&&m(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Rt||at),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!L.attributes.uv&&(qe||pe),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Rt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:j,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:qe&&g.map.isVideoTexture===!0&&bt.getTransfer(g.map.colorSpace)===Lt,decodeVideoTextureEmissive:De&&g.emissiveMap.isVideoTexture===!0&&bt.getTransfer(g.emissiveMap.colorSpace)===Lt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Tn,flipSided:g.side===yn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ot&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&g.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function y(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let F in g.defines)S.push(F),S.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(x(S,g),_(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function x(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function _(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function w(g){let S=p[g.type],F;if(S){let D=Si[S];F=Yd.clone(D.uniforms)}else F=g.uniforms;return F}function C(g,S){let F=d.get(S);return F!==void 0?++F.usedTimes:(F=new wy(n,S,g,s),l.push(F),d.set(S,F)),F}function v(g){if(--g.usedTimes===0){let S=l.indexOf(g);l[S]=l[l.length-1],l.pop(),d.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function b(){a.dispose()}return{getParameters:h,getProgramCacheKey:y,getUniforms:w,acquireProgram:C,releaseProgram:v,releaseShaderCache:E,programs:l,dispose:b}}function Cy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ry(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function a(p,m,h,y,x,_){let w=n[e];return w===void 0?(w={id:p.id,object:p,geometry:m,material:h,materialVariant:o(p),groupOrder:y,renderOrder:p.renderOrder,z:x,group:_},n[e]=w):(w.id=p.id,w.object=p,w.geometry=m,w.material=h,w.materialVariant=o(p),w.groupOrder=y,w.renderOrder=p.renderOrder,w.z=x,w.group=_),e++,w}function c(p,m,h,y,x,_,w){w.reversedDepth===!0&&(x=-x);let C=a(p,m,h,y,x,_);h.transmission>0?i.push(C):h.transparent===!0?s.push(C):t.push(C)}function l(p,m,h,y,x,_){let w=a(p,m,h,y,x,_);h.transmission>0?i.unshift(w):h.transparent===!0?s.unshift(w):t.unshift(w)}function d(p,m){t.length>1&&t.sort(p||Ry),i.length>1&&i.sort(m||pf),s.length>1&&s.sort(m||pf)}function f(){for(let p=e,m=n.length;p<m;p++){let h=n[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function Iy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new mf,n.set(i,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Py(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new $e};break;case"SpotLight":t={position:new X,direction:new X,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function Ly(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Dy=0;function Ny(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uy(n){let e=new Py,t=Ly(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);let s=new X,r=new wt,o=new wt;function a(l){let d=0,f=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,h=0,y=0,x=0,_=0,w=0,C=0,v=0,E=0,b=0,g=0,S=0,F=0,D=0;l.sort(Ny);for(let z=0,W=l.length;z<W;z++){let L=l[z],G=L.color,V=L.intensity,B=L.distance,Z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ds?Z=L.shadow.map.texture:Z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=G.r*V,f+=G.g*V,p+=G.b*V;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],V);D++}else if(L.isSunLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,ie=t.get(L);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[h]=ie,i.sunShadowMap[h]=Z;let j=K.getViewportCount();for(let ye=0;ye<j;ye++)i.sunShadowMatrix[y+ye]=K.getMatrix(ye),i.sunShadowCascade[y+ye]=K._cascadeData[ye];y+=j,h++}i.sun[m]=k,m++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,ie=t.get(L);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.directionalShadow[x]=ie,i.directionalShadowMap[x]=Z,i.directionalShadowMatrix[x]=L.shadow.matrix,E++}i.directional[x]=k,x++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(G).multiplyScalar(V),k.distance=B,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[w]=k;let K=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,K.updateMatrices(L),L.castShadow&&F++),i.spotLightMatrix[w]=K.matrix,L.castShadow){let ie=t.get(L);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.spotShadow[w]=ie,i.spotShadowMap[w]=Z,g++}w++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(G).multiplyScalar(V),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[C]=k,C++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let K=L.shadow,ie=t.get(L);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,ie.shadowCameraNear=K.camera.near,ie.shadowCameraFar=K.camera.far,i.pointShadow[_]=ie,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=L.shadow.matrix,b++}i.point[_]=k,_++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(V),k.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[v]=k,v++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;let A=i.hash;(A.sunLength!==m||A.directionalLength!==x||A.pointLength!==_||A.spotLength!==w||A.rectAreaLength!==C||A.hemiLength!==v||A.numSunShadows!==h||A.numDirectionalShadows!==E||A.numPointShadows!==b||A.numSpotShadows!==g||A.numSpotMaps!==S||A.numLightProbes!==D)&&(i.sun.length=m,i.directional.length=x,i.spot.length=w,i.rectArea.length=C,i.point.length=_,i.hemi.length=v,i.sunShadow.length=h,i.sunShadowMap.length=h,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+S-F,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=D,A.sunLength=m,A.directionalLength=x,A.pointLength=_,A.spotLength=w,A.rectAreaLength=C,A.hemiLength=v,A.numSunShadows=h,A.numDirectionalShadows=E,A.numPointShadows=b,A.numSpotShadows=g,A.numSpotMaps=S,A.numLightProbes=D,i.version=Dy++)}function c(l,d){let f=0,p=0,m=0,h=0,y=0,x=0,_=d.matrixWorldInverse;for(let w=0,C=l.length;w<C;w++){let v=l[w];if(v.isSunLight){let E=i.sun[f];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(_),f++}else if(v.isDirectionalLight){let E=i.directional[p];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),p++}else if(v.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),h++}else if(v.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),o.identity(),r.copy(v.matrixWorld),r.premultiply(_),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let E=i.point[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(_),x++}}}return{setup:a,setupView:c,state:i}}function gf(n){let e=new Uy(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function c(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Fy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new gf(n),e.set(s,[a])):r>=o.length?(a=new gf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,By=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],ky=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],xf=new wt,Do=new X,Oh=new X;function Gy(n,e,t){let i=new rs,s=new ht,r=new ht,o=new qt,a=new Xa,c=new qa,l={},d=t.maxTextureSize,f={[hs]:yn,[yn]:hs,[Tn]:Tn},p=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:zy,fragmentShader:Oy}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Yt;h.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ct(h,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let _=this.type;this.render=function(b,g,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===cd&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let F=n.getRenderTarget(),D=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Is),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=_!==this.type;W&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=b.length;L<G;L++){let V=b[L],B=V.shadow;if(B===void 0){et("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Z=B.getFrameExtents();s.multiply(Z),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y));let k=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=k,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===xr){if(V.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Hn(s.x,s.y,{format:ds,type:li,minFilter:gn,magFilter:gn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Bi(s.x,s.y,$n),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=Fi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn}else V.isPointLight?(B.map=new Uo(s.x),B.map.depthTexture=new fo(s.x,ai)):(B.map=new Hn(s.x,s.y),B.map.depthTexture=new Bi(s.x,s.y,ai)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=Fi,this.type===Rs?(B.map.depthTexture.compareFunction=k?Ah:Th,B.map.depthTexture.minFilter=gn,B.map.depthTexture.magFilter=gn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let K=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,S);let ie=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let j=0;j<K;j++){let ye=B.getCamera(j);if(V.isPointLight){let J=B.camera,fe=B.matrix,Ee=V.distance||J.far;Ee!==J.far&&(J.far=Ee,J.updateProjectionMatrix()),Do.setFromMatrixPosition(V.matrixWorld),J.position.copy(Do),Oh.copy(J.position),Oh.add(By[j]),J.up.copy(ky[j]),J.lookAt(Oh),J.updateMatrixWorld(),fe.makeTranslation(-Do.x,-Do.y,-Do.z),xf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(xf,J.coordinateSystem,J.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,j),n.clear();else{j===0&&(n.setRenderTarget(B.map),n.clear());let J=B.getViewport(j);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),z.viewport(o)}i=B.getFrustum(j),v(g,S,ye,V,ie,this.type)}B.isPointLightShadow!==!0&&this.type===xr&&w(B,S),B.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(F,D,A)};function w(b,g){let S=e.update(y);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Hn(s.x,s.y,{format:ds,type:li}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),p.uniforms.shadow_pass.value=b.map.depthTexture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(g,null,S,p,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(g,null,S,m,y,null)}function C(b,g,S,F){let D=null,A=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)D=A;else if(D=S.isPointLight===!0?c:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=D.uuid,W=g.uuid,L=l[z];L===void 0&&(L={},l[z]=L);let G=L[W];G===void 0&&(G=D.clone(),L[W]=G,g.addEventListener("dispose",E)),D=G}if(D.visible=g.visible,D.wireframe=g.wireframe,F===xr?D.side=g.shadowSide!==null?g.shadowSide:g.side:D.side=g.shadowSide!==null?g.shadowSide:f[g.side],D.alphaMap=g.alphaMap,D.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,D.map=g.map,D.clipShadows=g.clipShadows,D.clippingPlanes=g.clippingPlanes,D.clipIntersection=g.clipIntersection,D.displacementMap=g.displacementMap,D.displacementScale=g.displacementScale,D.displacementBias=g.displacementBias,D.wireframeLinewidth=g.wireframeLinewidth,D.linewidth=g.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=n.properties.get(D);z.light=S}return D}function v(b,g,S,F,D,A){if(b.visible===!1)return;if(b.layers.test(D)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===xr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let L=e.update(b),G=b.material;if(Array.isArray(G)){let V=L.groups;for(let B=0,Z=V.length;B<Z;B++){let k=V[B],K=G[k.materialIndex];if(K&&K.visible){let ie=C(b,K,F,A);b.onBeforeShadow(n,b,g,S,L,ie,k),n.renderBufferDirect(S,null,L,ie,b,k),b.onAfterShadow(n,b,g,S,L,ie,k)}}}else if(G.visible){let V=C(b,G,F,A);b.onBeforeShadow(n,b,g,S,L,V,null),n.renderBufferDirect(S,null,L,V,b,null),b.onAfterShadow(n,b,g,S,L,V,null)}}let W=b.children;for(let L=0,G=W.length;L<G;L++)v(W[L],g,S,F,D,A)}function E(b){b.target.removeEventListener("dispose",E);for(let S in l){let F=l[S],D=b.target.uuid;D in F&&(F[D].dispose(),delete F[D])}}}function Vy(n,e){function t(){let H=!1,ce=new qt,re=null,Te=new qt(0,0,0,0);return{setMask:function(pe){re!==pe&&!H&&(n.colorMask(pe,pe,pe,pe),re=pe)},setLocked:function(pe){H=pe},setClear:function(pe,be,He,ot,Me){Me===!0&&(pe*=ot,be*=ot,He*=ot),ce.set(pe,be,He,ot),Te.equals(ce)===!1&&(n.clearColor(pe,be,He,ot),Te.copy(ce))},reset:function(){H=!1,re=null,Te.set(-1,0,0,0)}}}function i(){let H=!1,ce=!1,re=null,Te=null,pe=null;return{setReversed:function(be){if(ce!==be){let He=e.get("EXT_clip_control");be?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),ce=be;let ot=pe;pe=null,this.setClear(ot)}},getReversed:function(){return ce},setTest:function(be){be?ve(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(be){re!==be&&!H&&(n.depthMask(be),re=be)},setFunc:function(be){if(ce&&(be=Hd[be]),Te!==be){switch(be){case Ra:n.depthFunc(n.NEVER);break;case Ia:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case La:n.depthFunc(n.EQUAL);break;case Da:n.depthFunc(n.GEQUAL);break;case Na:n.depthFunc(n.GREATER);break;case Ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=be}},setLocked:function(be){H=be},setClear:function(be){pe!==be&&(pe=be,ce&&(be=1-be),n.clearDepth(be))},reset:function(){H=!1,re=null,Te=null,pe=null,ce=!1}}}function s(){let H=!1,ce=null,re=null,Te=null,pe=null,be=null,He=null,ot=null,Me=null;return{setTest:function(Ue){H||(Ue?ve(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(Ue){ce!==Ue&&!H&&(n.stencilMask(Ue),ce=Ue)},setFunc:function(Ue,it,Pe){(re!==Ue||Te!==it||pe!==Pe)&&(n.stencilFunc(Ue,it,Pe),re=Ue,Te=it,pe=Pe)},setOp:function(Ue,it,Pe){(be!==Ue||He!==it||ot!==Pe)&&(n.stencilOp(Ue,it,Pe),be=Ue,He=it,ot=Pe)},setLocked:function(Ue){H=Ue},setClear:function(Ue){Me!==Ue&&(n.clearStencil(Ue),Me=Ue)},reset:function(){H=!1,ce=null,re=null,Te=null,pe=null,be=null,He=null,ot=null,Me=null}}}let r=new t,o=new i,a=new s,c={},l=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],y=null,x=!1,_=null,w=null,C=null,v=null,E=null,b=null,g=null,S=new $e(0,0,0),F=0,D=!1,A=null,z=null,W=null,L=null,G=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=Z>=2);let K=null,ie={},j=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),J=new qt().fromArray(j),fe=new qt().fromArray(ye);function Ee(H,ce,re,Te){let pe=new Uint8Array(4),be=n.createTexture();n.bindTexture(H,be),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<re;He++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ce+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return be}let ge={};ge[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(hr),Xt(!1),Rt(oh),ve(n.CULL_FACE),It(Is);function ve(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function Ve(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function rt(H,ce){return p[H]!==ce?(n.bindFramebuffer(H,ce),p[H]=ce,H===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ce),H===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function qe(H,ce){let re=h,Te=!1;if(H){re=m.get(ce),re===void 0&&(re=[],m.set(ce,re));let pe=H.textures;if(re.length!==pe.length||re[0]!==n.COLOR_ATTACHMENT0){for(let be=0,He=pe.length;be<He;be++)re[be]=n.COLOR_ATTACHMENT0+be;re.length=pe.length,Te=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Te=!0);Te&&n.drawBuffers(re)}function ut(H){return y!==H?(n.useProgram(H),y=H,!0):!1}let vt={[Ps]:n.FUNC_ADD,[ud]:n.FUNC_SUBTRACT,[dd]:n.FUNC_REVERSE_SUBTRACT};vt[fd]=n.MIN,vt[pd]=n.MAX;let Ke={[md]:n.ZERO,[gd]:n.ONE,[xd]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Sd]:n.SRC_ALPHA_SATURATE,[Md]:n.DST_COLOR,[yd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[bd]:n.ONE_MINUS_DST_COLOR,[vd]:n.ONE_MINUS_DST_ALPHA,[wd]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[Ad]:n.CONSTANT_ALPHA,[Ed]:n.ONE_MINUS_CONSTANT_ALPHA};function It(H,ce,re,Te,pe,be,He,ot,Me,Ue){if(H===Is){x===!0&&(Ve(n.BLEND),x=!1);return}if(x===!1&&(ve(n.BLEND),x=!0),H!==hd){if(H!==_||Ue!==D){if((w!==Ps||E!==Ps)&&(n.blendEquation(n.FUNC_ADD),w=Ps,E=Ps),Ue)switch(H){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wo:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:st("WebGLState: Invalid blending: ",H);break}else switch(H){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ah:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",H);break}C=null,v=null,b=null,g=null,S.set(0,0,0),F=0,_=H,D=Ue}return}pe=pe||ce,be=be||re,He=He||Te,(ce!==w||pe!==E)&&(n.blendEquationSeparate(vt[ce],vt[pe]),w=ce,E=pe),(re!==C||Te!==v||be!==b||He!==g)&&(n.blendFuncSeparate(Ke[re],Ke[Te],Ke[be],Ke[He]),C=re,v=Te,b=be,g=He),(ot.equals(S)===!1||Me!==F)&&(n.blendColor(ot.r,ot.g,ot.b,Me),S.copy(ot),F=Me),_=H,D=!1}function Wt(H,ce){H.side===Tn?Ve(n.CULL_FACE):ve(n.CULL_FACE);let re=H.side===yn;ce&&(re=!re),Xt(re),H.blending===us&&H.transparent===!1?It(Is):It(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Te=H.stencilWrite;a.setTest(Te),Te&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),De(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(H){A!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),A=H)}function Rt(H){H!==ad?(ve(n.CULL_FACE),H!==z&&(H===oh?n.cullFace(n.BACK):H===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),z=H}function ne(H){H!==W&&(B&&n.lineWidth(H),W=H)}function De(H,ce,re){H?(ve(n.POLYGON_OFFSET_FILL),(L!==ce||G!==re)&&(L=ce,G=re,o.getReversed()&&(ce=-ce,re=-re),n.polygonOffset(ce,re))):Ve(n.POLYGON_OFFSET_FILL)}function mt(H){H?ve(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function gt(H){H===void 0&&(H=n.TEXTURE0+V-1),K!==H&&(n.activeTexture(H),K=H)}function at(H,ce,re){re===void 0&&(K===null?re=n.TEXTURE0+V-1:re=K);let Te=ie[re];Te===void 0&&(Te={type:void 0,texture:void 0},ie[re]=Te),(Te.type!==H||Te.texture!==ce)&&(K!==re&&(n.activeTexture(re),K=re),n.bindTexture(H,ce||ge[H]),Te.type=H,Te.texture=ce)}function Y(){let H=ie[K];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Dt(){try{n.compressedTexImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function dt(){try{n.compressedTexImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function Nt(){try{n.texSubImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function Le(){try{n.texSubImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function lt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function Xe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function Qe(){try{n.texStorage2D(...arguments)}catch(H){st("WebGLState:",H)}}function O(){try{n.texStorage3D(...arguments)}catch(H){st("WebGLState:",H)}}function I(){try{n.texImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function Q(){try{n.texImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function xe(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function de(H,ce){f[H]!==ce&&(n.pixelStorei(H,ce),f[H]=ce)}function Se(H){J.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),J.copy(H))}function _e(H){fe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),fe.copy(H))}function oe(H,ce){let re=l.get(ce);re===void 0&&(re=new WeakMap,l.set(ce,re));let Te=re.get(H);Te===void 0&&(Te=n.getUniformBlockIndex(ce,H.name),n.uniformBlockBinding(ce,Te,Te),re.set(H,Te))}function ae(H,ce,re){let pe=l.get(ce).get(H);c[pe]!==re&&(n.bindBufferBase(n.UNIFORM_BUFFER,pe,re),c[pe]=re)}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},K=null,ie={},p={},c={},m=new WeakMap,h=[],y=null,x=!1,_=null,w=null,C=null,v=null,E=null,b=null,g=null,S=new $e(0,0,0),F=0,D=!1,A=null,z=null,W=null,L=null,G=null,J.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Ve,bindFramebuffer:rt,drawBuffers:qe,useProgram:ut,setBlending:It,setMaterial:Wt,setFlipSided:Xt,setCullFace:Rt,setLineWidth:ne,setPolygonOffset:De,setScissorTest:mt,activeTexture:gt,bindTexture:at,unbindTexture:Y,compressedTexImage2D:Dt,compressedTexImage3D:dt,texImage2D:I,texImage3D:Q,pixelStorei:de,getParameter:xe,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:Qe,texStorage3D:O,texSubImage2D:Nt,texSubImage3D:Le,compressedTexSubImage2D:lt,compressedTexSubImage3D:Xe,scissor:Se,viewport:_e,reset:Re}}function Hy(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,d=new WeakMap,f=new Set,p,m=new WeakMap,h=new Set,y=new FinalizationRegistry(O=>h.delete(O)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,I){return x?new OffscreenCanvas(O,I):no("canvas")}function w(O,I,Q){let xe=1,de=Qe(O);if((de.width>Q||de.height>Q)&&(xe=Q/Math.max(de.width,de.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Se=Math.floor(xe*de.width),_e=Math.floor(xe*de.height);p===void 0&&(p=_(Se,_e));let oe=I?_(Se,_e):p;return oe.width=Se,oe.height=_e,oe.getContext("2d").drawImage(O,0,0,Se,_e),et("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Se+"x"+_e+")."),oe}else return"data"in O&&et("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function C(O){return O.generateMipmaps}function v(O){n.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(O,I,Q,xe,de,Se=!1){if(O!==null){if(n[O]!==void 0)return n[O];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e;xe&&(_e=e.get("EXT_texture_norm16"),_e||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=I;if(I===n.RED&&(Q===n.FLOAT&&(oe=n.R32F),Q===n.HALF_FLOAT&&(oe=n.R16F),Q===n.UNSIGNED_BYTE&&(oe=n.R8),Q===n.UNSIGNED_SHORT&&_e&&(oe=_e.R16_EXT),Q===n.SHORT&&_e&&(oe=_e.R16_SNORM_EXT)),I===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(oe=n.R8UI),Q===n.UNSIGNED_SHORT&&(oe=n.R16UI),Q===n.UNSIGNED_INT&&(oe=n.R32UI),Q===n.BYTE&&(oe=n.R8I),Q===n.SHORT&&(oe=n.R16I),Q===n.INT&&(oe=n.R32I)),I===n.RG&&(Q===n.FLOAT&&(oe=n.RG32F),Q===n.HALF_FLOAT&&(oe=n.RG16F),Q===n.UNSIGNED_BYTE&&(oe=n.RG8),Q===n.UNSIGNED_SHORT&&_e&&(oe=_e.RG16_EXT),Q===n.SHORT&&_e&&(oe=_e.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(oe=n.RG8UI),Q===n.UNSIGNED_SHORT&&(oe=n.RG16UI),Q===n.UNSIGNED_INT&&(oe=n.RG32UI),Q===n.BYTE&&(oe=n.RG8I),Q===n.SHORT&&(oe=n.RG16I),Q===n.INT&&(oe=n.RG32I)),I===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),Q===n.UNSIGNED_INT&&(oe=n.RGB32UI),Q===n.BYTE&&(oe=n.RGB8I),Q===n.SHORT&&(oe=n.RGB16I),Q===n.INT&&(oe=n.RGB32I)),I===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),Q===n.UNSIGNED_INT&&(oe=n.RGBA32UI),Q===n.BYTE&&(oe=n.RGBA8I),Q===n.SHORT&&(oe=n.RGBA16I),Q===n.INT&&(oe=n.RGBA32I)),I===n.RGB&&(Q===n.UNSIGNED_SHORT&&_e&&(oe=_e.RGB16_EXT),Q===n.SHORT&&_e&&(oe=_e.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),I===n.RGBA){let ae=Se?to:bt.getTransfer(de);Q===n.FLOAT&&(oe=n.RGBA32F),Q===n.HALF_FLOAT&&(oe=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(oe=ae===Lt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&_e&&(oe=_e.RGBA16_EXT),Q===n.SHORT&&_e&&(oe=_e.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function g(O,I){let Q;return O?I===null||I===ai||I===Ds?Q=n.DEPTH24_STENCIL8:I===$n?Q=n.DEPTH32F_STENCIL8:I===yr&&(Q=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ai||I===Ds?Q=n.DEPTH_COMPONENT24:I===$n?Q=n.DEPTH_COMPONENT32F:I===yr&&(Q=n.DEPTH_COMPONENT16),Q}function S(O,I){return C(O)===!0||O.isFramebufferTexture&&O.minFilter!==mn&&O.minFilter!==gn?Math.log2(Math.max(I.width,I.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?I.mipmaps.length:1}function F(O){let I=new WeakRef(O);i.get(O).__ref=I,h.add(I),y.register(O,I,I)}function D(O){let I=i.get(O).__ref;I!==void 0&&(h.delete(I),y.unregister(I))}function A(O){W(O.target)}function z(O){L(O.target)}function W(O){O.removeEventListener("dispose",A),D(O),V(O),O.isVideoTexture&&d.delete(O),O.isHTMLTexture&&f.delete(O)}function L(O){O.removeEventListener("dispose",z),D(O),Z(O)}function G(){for(let O of h){let I=O.deref();I!==void 0&&(I.isRenderTarget===!0?L(I):W(I))}h.clear(),f.clear()}function V(O){let I=i.get(O);if(I.__webglInit===void 0)return;let Q=O.source,xe=m.get(Q);if(xe){let de=xe[I.__cacheKey];de.usedTimes--,de.usedTimes===0&&B(O),Object.keys(xe).length===0&&m.delete(Q)}i.remove(O)}function B(O){let I=i.get(O);n.deleteTexture(I.__webglTexture);let Q=O.source,xe=m.get(Q);delete xe[I.__cacheKey],o.memory.textures--}function Z(O){let I=i.get(O);I.__depthDisposeCallback&&I.__depthDisposeCallback();let Q=O.depthTexture;if(Q&&Q.renderTarget===O&&W(Q),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(I.__webglFramebuffer[de]))for(let Se=0;Se<I.__webglFramebuffer[de].length;Se++)n.deleteFramebuffer(I.__webglFramebuffer[de][Se]);else n.deleteFramebuffer(I.__webglFramebuffer[de]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[de])}else{if(Array.isArray(I.__webglFramebuffer))for(let de=0;de<I.__webglFramebuffer.length;de++)n.deleteFramebuffer(I.__webglFramebuffer[de]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let de=0;de<I.__webglColorRenderbuffer.length;de++)I.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[de]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let xe=O.textures;for(let de=0,Se=xe.length;de<Se;de++){let _e=i.get(xe[de]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(xe[de])}i.remove(O)}let k=0;function K(){k=0}function ie(){return k}function j(O){k=O}function ye(){let O=k;return O>=s.maxTextures&&et("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,O}function J(O){let I=[];return I.push(O.wrapS),I.push(O.wrapT),I.push(O.wrapR||0),I.push(O.magFilter),I.push(O.minFilter),I.push(O.anisotropy),I.push(O.internalFormat),I.push(O.format),I.push(O.type),I.push(O.generateMipmaps),I.push(O.mipmapsAutoUpdate),I.push(O.premultiplyAlpha),I.push(O.flipY),I.push(O.unpackAlignment),I.push(O.colorSpace),I.join()}function fe(O,I){let Q=i.get(O);if(O.isVideoTexture&&lt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){let xe=O.image;if(xe===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(Q,O,I);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+I)}function Ee(O,I){let Q=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){Wt(Q,O,I);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+I)}function ge(O,I){let Q=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){Wt(Q,O,I);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+I)}function ve(O,I){let Q=i.get(O);if(O.version>0&&Q.__version!==O.version){Xt(Q,O,I);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+I)}let Ve={[Fa]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},rt={[mn]:n.NEAREST,[Id]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},qe={[Nd]:n.NEVER,[Eh]:n.ALWAYS,[Ud]:n.LESS,[Th]:n.LEQUAL,[Fd]:n.EQUAL,[Ah]:n.GEQUAL,[zd]:n.GREATER,[Od]:n.NOTEQUAL};function ut(O,I){if(I.type===$n&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===gn||I.magFilter===al||I.magFilter===Ao||I.magFilter===Gi||I.minFilter===gn||I.minFilter===al||I.minFilter===Ao||I.minFilter===Gi)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Ve[I.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Ve[I.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Ve[I.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,rt[I.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,rt[I.minFilter]),I.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,qe[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===mn||I.minFilter!==Ao&&I.minFilter!==Gi||I.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function vt(O,I){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,I.addEventListener("dispose",A),F(I));let xe=I.source,de=m.get(xe);de===void 0&&(de={},m.set(xe,de));let Se=J(I);if(Se!==O.__cacheKey){de[Se]===void 0&&(de[Se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),de[Se].usedTimes++;let _e=de[O.__cacheKey];_e!==void 0&&(de[O.__cacheKey].usedTimes--,_e.usedTimes===0&&B(I)),O.__cacheKey=Se,O.__webglTexture=de[Se].texture}return Q}function Ke(O,I,Q){return Math.floor(Math.floor(O/Q)/I)}function It(O,I,Q,xe){let Se=O.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,Q,xe,I.data);else{Se.sort((H,ce)=>H.start-ce.start);let _e=0;for(let H=1;H<Se.length;H++){let ce=Se[_e],re=Se[H],Te=ce.start+ce.count,pe=Ke(re.start,I.width,4),be=Ke(ce.start,I.width,4);re.start<=Te+1&&pe===be&&Ke(re.start+re.count-1,I.width,4)===pe?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++_e,Se[_e]=re)}Se.length=_e+1;let oe=t.getParameter(n.UNPACK_ROW_LENGTH),ae=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let H=0,ce=Se.length;H<ce;H++){let re=Se[H],Te=Math.floor(re.start/4),pe=Math.ceil(re.count/4),be=Te%I.width,He=Math.floor(Te/I.width),ot=pe,Me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,be),t.pixelStorei(n.UNPACK_SKIP_ROWS,He),t.texSubImage2D(n.TEXTURE_2D,0,be,He,ot,Me,Q,xe,I.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Wt(O,I,Q){let xe=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(xe=n.TEXTURE_3D);let de=vt(O,I),Se=I.source;t.bindTexture(xe,O.__webglTexture,n.TEXTURE0+Q);let _e=i.get(Se);if(Se.version!==_e.__version||de===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let Me=bt.getPrimaries(bt.workingColorSpace),Ue=I.colorSpace===Hi?null:bt.getPrimaries(I.colorSpace),it=I.colorSpace===Hi||Me===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let ae=w(I.image,!1,s.maxTextureSize);ae=Xe(I,ae);let Re=r.convert(I.format,I.colorSpace),H=r.convert(I.type),ce=b(I.internalFormat,Re,H,I.normalized,I.colorSpace,I.isVideoTexture);ut(xe,I);let re,Te=I.mipmaps,pe=I.isVideoTexture!==!0,be=_e.__version===void 0||de===!0,He=Se.dataReady,ot=S(I,ae);if(I.isDepthTexture)ce=g(I.format===Vi,I.type),be&&(pe?t.texStorage2D(n.TEXTURE_2D,1,ce,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,ce,ae.width,ae.height,0,Re,H,null));else if(I.isDataTexture)if(Te.length>0){pe&&be&&t.texStorage2D(n.TEXTURE_2D,ot,ce,Te[0].width,Te[0].height);for(let Me=0,Ue=Te.length;Me<Ue;Me++)re=Te[Me],pe?He&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,re.width,re.height,Re,H,re.data):t.texImage2D(n.TEXTURE_2D,Me,ce,re.width,re.height,0,Re,H,re.data);I.generateMipmaps=!1}else pe?(be&&t.texStorage2D(n.TEXTURE_2D,ot,ce,ae.width,ae.height),He&&It(I,ae,Re,H)):t.texImage2D(n.TEXTURE_2D,0,ce,ae.width,ae.height,0,Re,H,ae.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){pe&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ce,Te[0].width,Te[0].height,ae.depth);for(let Me=0,Ue=Te.length;Me<Ue;Me++)if(re=Te[Me],I.format!==Xn)if(Re!==null)if(pe){if(He)if(I.layerUpdates.size>0){let it=Fh(re.width,re.height,I.format,I.type);for(let Pe of I.layerUpdates){let Mt=re.data.subarray(Pe*it/re.data.BYTES_PER_ELEMENT,(Pe+1)*it/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,Pe,re.width,re.height,1,Re,Mt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,re.width,re.height,ae.depth,Re,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,ce,re.width,re.height,ae.depth,0,re.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,re.width,re.height,ae.depth,Re,H,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,ce,re.width,re.height,ae.depth,0,Re,H,re.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{pe&&be&&t.texStorage2D(n.TEXTURE_2D,ot,ce,Te[0].width,Te[0].height);for(let Me=0,Ue=Te.length;Me<Ue;Me++)re=Te[Me],I.format!==Xn?Re!==null?pe?He&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,re.width,re.height,Re,re.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,ce,re.width,re.height,0,re.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?He&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,re.width,re.height,Re,H,re.data):t.texImage2D(n.TEXTURE_2D,Me,ce,re.width,re.height,0,Re,H,re.data)}else if(I.isDataArrayTexture)if(pe){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ce,ae.width,ae.height,ae.depth),He)if(I.layerUpdates.size>0){let Me=Fh(ae.width,ae.height,I.format,I.type);for(let Ue of I.layerUpdates){let it=ae.data.subarray(Ue*Me/ae.data.BYTES_PER_ELEMENT,(Ue+1)*Me/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,ae.width,ae.height,1,Re,H,it)}I.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Re,H,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,ae.width,ae.height,ae.depth,0,Re,H,ae.data);else if(I.isData3DTexture)pe?(be&&t.texStorage3D(n.TEXTURE_3D,ot,ce,ae.width,ae.height,ae.depth),He&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Re,H,ae.data)):t.texImage3D(n.TEXTURE_3D,0,ce,ae.width,ae.height,ae.depth,0,Re,H,ae.data);else if(I.isFramebufferTexture){if(be)if(pe)t.texStorage2D(n.TEXTURE_2D,ot,ce,ae.width,ae.height);else{let Me=ae.width,Ue=ae.height;for(let it=0;it<ot;it++)t.texImage2D(n.TEXTURE_2D,it,ce,Me,Ue,0,Re,H,null),Me>>=1,Ue>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let Me=n.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ae.parentNode!==Me){Me.appendChild(ae),f.add(I),Me.onpaint=Ue=>{let it=Ue.changedElements;for(let Pe of f)it.includes(Pe.image)&&(Pe.needsUpdate=!0)},Me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ae);else{let it=n.RGBA,Pe=n.RGBA,Mt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,it,Pe,Mt,ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(pe&&be){let Me=Qe(Te[0]);t.texStorage2D(n.TEXTURE_2D,ot,ce,Me.width,Me.height)}for(let Me=0,Ue=Te.length;Me<Ue;Me++)re=Te[Me],pe?He&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Re,H,re):t.texImage2D(n.TEXTURE_2D,Me,ce,Re,H,re);I.generateMipmaps=!1}else if(pe){if(be){let Me=Qe(ae);t.texStorage2D(n.TEXTURE_2D,ot,ce,Me.width,Me.height)}He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,H,ae)}else t.texImage2D(n.TEXTURE_2D,0,ce,Re,H,ae);C(I)&&I.mipmapsAutoUpdate===!0&&v(xe),_e.__version=Se.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Xt(O,I,Q){if(I.image.length!==6)return;let xe=vt(O,I),de=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+Q);let Se=i.get(de);if(de.version!==Se.__version||xe===!0){t.activeTexture(n.TEXTURE0+Q);let _e=bt.getPrimaries(bt.workingColorSpace),oe=I.colorSpace===Hi?null:bt.getPrimaries(I.colorSpace),ae=I.colorSpace===Hi||_e===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Re=I.isCompressedTexture||I.image[0].isCompressedTexture,H=I.image[0]&&I.image[0].isDataTexture,ce=[];for(let Pe=0;Pe<6;Pe++)!Re&&!H?ce[Pe]=w(I.image[Pe],!0,s.maxCubemapSize):ce[Pe]=H?I.image[Pe].image:I.image[Pe],ce[Pe]=Xe(I,ce[Pe]);let re=ce[0],Te=r.convert(I.format,I.colorSpace),pe=r.convert(I.type),be=b(I.internalFormat,Te,pe,I.normalized,I.colorSpace),He=I.isVideoTexture!==!0,ot=Se.__version===void 0||xe===!0,Me=de.dataReady,Ue=S(I,re);ut(n.TEXTURE_CUBE_MAP,I);let it;if(I.isDepthTexture){if(be=g(I.format===Vi,I.type),ot)if(He)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,be,re.width,re.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,re.width,re.height,0,Te,pe,null)}else if(Re){He&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,be,re.width,re.height);for(let Pe=0;Pe<6;Pe++){it=ce[Pe].mipmaps;for(let Mt=0;Mt<it.length;Mt++){let Ut=it[Mt];I.format!==Xn?Te!==null?He?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt,0,0,Ut.width,Ut.height,Te,Ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt,be,Ut.width,Ut.height,0,Ut.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt,0,0,Ut.width,Ut.height,Te,pe,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt,be,Ut.width,Ut.height,0,Te,pe,Ut.data)}}}else{if(it=I.mipmaps,He&&ot){it.length>0&&Ue++;let Pe=Qe(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,be,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(H){He?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ce[Pe].width,ce[Pe].height,Te,pe,ce[Pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,ce[Pe].width,ce[Pe].height,0,Te,pe,ce[Pe].data);for(let Mt=0;Mt<it.length;Mt++){let Zt=it[Mt].image[Pe].image;He?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt+1,0,0,Zt.width,Zt.height,Te,pe,Zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt+1,be,Zt.width,Zt.height,0,Te,pe,Zt.data)}}else{He?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Te,pe,ce[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,Te,pe,ce[Pe]);for(let Mt=0;Mt<it.length;Mt++){let Ut=it[Mt];He?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt+1,0,0,Te,pe,Ut.image[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Mt+1,be,Te,pe,Ut.image[Pe])}}}C(I)&&I.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),Se.__version=de.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Rt(O,I,Q,xe,de,Se){let _e=r.convert(Q.format,Q.colorSpace),oe=r.convert(Q.type),ae=b(Q.internalFormat,_e,oe,Q.normalized,Q.colorSpace),Re=i.get(I),H=i.get(Q);if(H.__renderTarget=I,!Re.__hasExternalTextures){let ce=Math.max(1,I.width>>Se),re=Math.max(1,I.height>>Se);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,Se,ae,ce,re,I.depth,0,_e,oe,null):t.texImage2D(de,Se,ae,ce,re,0,_e,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Le(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,de,H.__webglTexture,0,Nt(I)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,de,H.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(O,I,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,O),I.depthBuffer){let xe=I.depthTexture,de=xe&&xe.isDepthTexture?xe.type:null,Se=g(I.stencilBuffer,de),_e=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Le(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(I),Se,I.width,I.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(I),Se,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Se,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,O)}else{let xe=I.textures;for(let de=0;de<xe.length;de++){let Se=xe[de],_e=r.convert(Se.format,Se.colorSpace),oe=r.convert(Se.type),ae=b(Se.internalFormat,_e,oe,Se.normalized,Se.colorSpace);Le(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(I),ae,I.width,I.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(I),ae,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,ae,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(O,I,Q){let xe=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(I.depthTexture);de.__renderTarget=I;let Se=xe?I.depthTexture.image[0]:I.depthTexture.image;(!de.__webglTexture||Se.width!==I.width||Se.height!==I.height)&&(Se.width=I.width,Se.height=I.height,I.depthTexture.needsUpdate=!0),xe?ve(I.depthTexture,0):fe(I.depthTexture,0);let _e=de.__webglTexture,oe=Nt(I),ae=xe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,Re=I.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===Fi)Le(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,ae,_e,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,ae,_e,0);else if(I.depthTexture.format===Vi)Le(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,ae,_e,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,ae,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(O){let I=i.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==O.depthTexture){let xe=O.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),xe){let de=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,xe.removeEventListener("dispose",de)};xe.addEventListener("dispose",de),I.__depthDisposeCallback=de}I.__boundDepthTexture=xe}if(O.depthTexture&&!I.__autoAllocateDepthBuffer)if(Q)for(let xe=0;xe<6;xe++)De(I.__webglFramebuffer[xe],O,xe);else O.texture.mipmaps.length>0?De(I.__webglFramebuffer[0],O,0):De(I.__webglFramebuffer,O,0);else if(Q){I.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[xe]),I.__webglDepthbuffer[xe]===void 0)I.__webglDepthbuffer[xe]=n.createRenderbuffer(),ne(I.__webglDepthbuffer[xe],O,!1);else{let de=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,Se)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),ne(I.__webglDepthbuffer,O,!1);else{let de=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,Se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(O,I,Q){let xe=i.get(O);I!==void 0&&Rt(xe.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&mt(O)}function at(O){let I=O.texture,Q=i.get(O),xe=i.get(I);O.addEventListener("dispose",z),F(O);let de=O.textures,Se=O.isWebGLCubeRenderTarget===!0,_e=de.length>1;if(_e||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=I.version,o.memory.textures++),Se){Q.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(I.mipmaps.length>0){Q.__webglFramebuffer[oe]=[];for(let ae=0;ae<I.mipmaps.length;ae++)Q.__webglFramebuffer[oe][ae]=n.createFramebuffer()}else Q.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(I.mipmaps.length>0){Q.__webglFramebuffer=[];for(let oe=0;oe<I.mipmaps.length;oe++)Q.__webglFramebuffer[oe]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(_e)for(let oe=0,ae=de.length;oe<ae;oe++){let Re=i.get(de[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&Le(O)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let oe=0;oe<de.length;oe++){let ae=de[oe];Q.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[oe]);let Re=r.convert(ae.format,ae.colorSpace),H=r.convert(ae.type),ce=b(ae.internalFormat,Re,H,ae.normalized,ae.colorSpace,O.isXRRenderTarget===!0),re=Nt(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ce,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,Q.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),ut(n.TEXTURE_CUBE_MAP,I);for(let oe=0;oe<6;oe++)if(I.mipmaps.length>0)for(let ae=0;ae<I.mipmaps.length;ae++)Rt(Q.__webglFramebuffer[oe][ae],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Rt(Q.__webglFramebuffer[oe],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);C(I)?v(n.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let oe=0,ae=de.length;oe<ae;oe++){let Re=de[oe],H=i.get(Re),ce=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ce=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,H.__webglTexture),ut(ce,Re),Rt(Q.__webglFramebuffer,O,Re,n.COLOR_ATTACHMENT0+oe,ce,0),C(Re)&&v(ce)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(oe=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,xe.__webglTexture),ut(oe,I),I.mipmaps.length>0)for(let ae=0;ae<I.mipmaps.length;ae++)Rt(Q.__webglFramebuffer[ae],O,I,n.COLOR_ATTACHMENT0,oe,ae);else Rt(Q.__webglFramebuffer,O,I,n.COLOR_ATTACHMENT0,oe,0);C(I)?v(oe):I.mipmaps.length>0&&n.texParameteri(oe,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&mt(O)}function Y(O){let I=O.textures;for(let Q=0,xe=I.length;Q<xe;Q++){let de=I[Q];if(C(de)&&de.mipmapsAutoUpdate===!0){let Se=E(O),_e=i.get(de).__webglTexture;t.bindTexture(Se,_e),v(Se),t.unbindTexture()}}}let Dt=[];function dt(O){if(O.samples>0){if(Le(O)===!1){let I=O.textures,Q=O.width,xe=O.height,de=n.COLOR_BUFFER_BIT,Se=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(O),oe=I.length>1;if(oe)for(let Re=0;Re<I.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Re=0;Re<I.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]);let H=i.get(I[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,Q,xe,0,0,Q,xe,de,n.NEAREST),c===!0&&(Dt.length=0,Dt.push(n.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&Dt.push(Se),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Re=0;Re<I.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]);let H=i.get(I[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let I=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function Nt(O){return Math.min(s.maxSamples,O.samples)}function Le(O){let I=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function lt(O){let I=o.render.frame;d.get(O)!==I&&(d.set(O,I),O.update())}function Xe(O,I){let Q=O.colorSpace,xe=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==eo&&Q!==Hi&&(bt.getTransfer(Q)===Lt?(xe!==Xn||de!==Fn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",Q)),I}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=ye,this.resetTextureUnits=K,this.getTextureUnits=ie,this.setTextureUnits=j,this.setTexture2D=fe,this.setTexture2DArray=Ee,this.setTexture3D=ge,this.setTextureCube=ve,this.rebindTextures=gt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Le,this.dispose=G}function Wy(n,e){function t(i,s=Hi){let r,o=bt.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yh)return n.BYTE;if(i===vh)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===ll)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===Sh)return n.ALPHA;if(i===wh)return n.RGB;if(i===Xn)return n.RGBA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===ul)return n.RED;if(i===dl)return n.RED_INTEGER;if(i===ds)return n.RG;if(i===fl)return n.RG_INTEGER;if(i===pl)return n.RGBA_INTEGER;if(i===Eo||i===Co||i===Ro||i===Io)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===xl||i===_l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yl||i===vl||i===Ml||i===bl||i===Sl||i===Po||i===wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yl||i===vl)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ml)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===bl)return r.COMPRESSED_R11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Po)return r.COMPRESSED_RG11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tl||i===Al||i===El||i===Cl||i===Rl||i===Il||i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===zl||i===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ll)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bl||i===kl||i===Gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bl)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vl||i===Hl||i===Lo||i===Wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new po(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Un({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends yi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,p=null,m=null,h=null,y=typeof XRWebGLBinding<"u",x=new Xh,_={},w=t.getContextAttributes(),C=null,v=null,E=[],b=[],g=new ht,S=null,F=null,D=new Cn;D.viewport=new qt;let A=new Cn;A.viewport=new qt;let z=[D,A],W=new sl,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=E[J];return fe===void 0&&(fe=new mr,E[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=E[J];return fe===void 0&&(fe=new mr,E[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=E[J];return fe===void 0&&(fe=new mr,E[J]=fe),fe.getHandSpace()};function V(J){let fe=b.indexOf(J.inputSource);if(fe===-1)return;let Ee=E[fe];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,l||o),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<E.length;J++){let fe=b[J];fe!==null&&(b[J]=null,E[J].disconnect(fe))}L=null,G=null,x.reset();for(let J in _)delete _[J];if(e.setRenderTarget(C),m=null,p=null,f=null,s=null,v=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(g.width,g.height,!1),F!==null){let J=F.camera;J.fov=F.fov,J.zoom=F.zoom,J.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ge=null,ve=null;w.depth&&(ve=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=w.stencil?Vi:Fi,ge=w.stencil?Ds:ai);let Ve={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Hn(p.textureWidth,p.textureHeight,{format:Xn,type:Fn,depthTexture:new Bi(p.textureWidth,p.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Ee={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(J){for(let fe=0;fe<J.removed.length;fe++){let Ee=J.removed[fe],ge=b.indexOf(Ee);ge>=0&&(b[ge]=null,E[ge].disconnect(Ee))}for(let fe=0;fe<J.added.length;fe++){let Ee=J.added[fe],ge=b.indexOf(Ee);if(ge===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=b.length){b.push(Ee),ge=Ve;break}else if(b[Ve]===null){b[Ve]=Ee,ge=Ve;break}if(ge===-1)break}let ve=E[ge];ve&&ve.connect(Ee)}}function k(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let fe=J.near,Ee=J.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),W.near=A.near=D.near=fe,W.far=A.far=D.far=Ee,(L!==W.near||G!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,G=W.far),W.layers.mask=J.layers.mask|6,D.layers.mask=W.layers.mask&-5,A.layers.mask=W.layers.mask&-3;let ge=J.parent,ve=W.cameras;k(W,ge);for(let Ve=0;Ve<ve.length;Ve++)k(ve[Ve],ge);W.projectionMatrix.copy(D.projectionMatrix),W.projectionMatrixInverse.copy(D.projectionMatrixInverse),F===null&&J.isPerspectiveCamera&&(F={camera:J,fov:J.fov,zoom:J.zoom}),K(J,W,ge)};function K(J,fe,Ee){Ee===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(J){return _[J]};let ie=null;function j(J,fe){if(d=fe.getViewerPose(l||o),h=fe,d!==null){let Ee=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ge=!1;Ee.length!==W.cameras.length&&(W.cameras.length=0,ge=!0);for(let qe=0;qe<Ee.length;qe++){let ut=Ee[qe],vt=null;if(m!==null)vt=m.getViewport(ut);else{let It=f.getViewSubImage(p,ut);vt=It.viewport,qe===0&&(e.setRenderTargetTextures(v,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(v))}let Ke=z[qe];Ke===void 0&&(Ke=new Cn,Ke.layers.enable(qe),Ke.viewport=new qt,z[qe]=Ke),Ke.matrix.fromArray(ut.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ut.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(vt.x,vt.y,vt.width,vt.height),qe===0&&(W.matrix.copy(Ke.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ge===!0&&W.cameras.push(Ke)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let qe=f.getDepthInformation(Ee[0]);qe&&qe.isValid&&qe.texture&&x.init(qe,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<Ee.length;qe++){let ut=Ee[qe].camera;if(ut){let vt=_[ut];vt||(vt=new po,_[ut]=vt);let Ke=f.getCameraImage(ut);vt.sourceTexture=Ke}}}}for(let Ee=0;Ee<E.length;Ee++){let ge=b[Ee],ve=E[Ee];ge!==null&&ve!==void 0&&ve.update(ge,fe,l||o)}ie&&ie(J,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),h=null}let ye=new _f;ye.setAnimationLoop(j),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}},Yy=new wt,Cf=new nt;Cf.set(-1,0,0,0,1,0,0,0,1);function Zy(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,Dh(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,w,C,v){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),f(x,_)):_.isMeshPhongMaterial?(r(x,_),d(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),p(x,_),_.isMeshPhysicalMaterial&&m(x,_,v)):_.isMeshMatcapMaterial?(r(x,_),h(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),y(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?c(x,_,w,C):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===yn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===yn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let w=e.get(_),C=w.envMap,v=w.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(v)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Cf),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function c(x,_,w,C){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*w,x.scale.value=C*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,w){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===yn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function h(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){let w=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jy(n,e,t,i){let s={},r={};function o(w,C){let v=C.program;i.uniformBlockBinding(w,v,s[w.id])}function a(w,C){let v=s[w.id];v===void 0&&(h(w),v=c(w),s[w.id]=v,w.addEventListener("dispose",x));let E=C.program;i.updateUBOMapping(w,E);let b=e.render.frame;r[w.id]!==b&&(l(w),r[w.id]=b)}function c(w){let C=n.createBuffer(),v=w.__size,E=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,v,E),n.bindBuffer(n.UNIFORM_BUFFER,null),C}function l(w){let C=s[w.id],v=w.uniforms,E=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let b=0,g=v.length;b<g;b++){let S=v[b];if(Array.isArray(S))for(let F=0,D=S.length;F<D;F++)d(S[F],b,F,E);else d(S,b,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,C,v,E){if(p(w,C,v,E)===!0){let b=w.__offset,g=w.value;if(Array.isArray(g)){let S=0;for(let F=0;F<g.length;F++){let D=g[F],A=y(D,!0);f(D,w.__data,S),S+=A.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,w.__data)}}function f(w,C,v){typeof w=="number"||typeof w=="boolean"?C[v]=w:w.isMatrix3?(C[v]=w.elements[0],C[v+1]=w.elements[1],C[v+2]=w.elements[2],C[v+3]=0,C[v+4]=w.elements[3],C[v+5]=w.elements[4],C[v+6]=w.elements[5],C[v+7]=0,C[v+8]=w.elements[6],C[v+9]=w.elements[7],C[v+10]=w.elements[8],C[v+11]=0):ArrayBuffer.isView(w)?C.set(w.subarray(0,C.length-v),v):w.toArray(C,v)}function p(w,C,v,E){let b=w.value,g=C+"_"+v;if(Array.isArray(b)){E[g]===void 0&&(E[g]=[]);let S=E[g],F=!1;for(let D=0;D<b.length;D++)m(b[D],S,D)===!0&&(F=!0);return F}return m(b,E,g)}function m(w,C,v){if(C[v]===void 0)return typeof w=="number"||typeof w=="boolean"?C[v]=w:ArrayBuffer.isView(w)?C[v]=w.slice():C[v]=w.clone(),!0;{let E=C[v];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return C[v]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(E.equals(w)===!1)return E.copy(w),!0}}return!1}function h(w){let C=w.uniforms,v=0,E=16;for(let g=0,S=C.length;g<S;g++){let F=Array.isArray(C[g])?C[g]:[C[g]];for(let D=0,A=F.length;D<A;D++){let z=F[D],W=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(C[g])||Array.isArray(z.value),G=v;for(let B=0,Z=W.length;B<Z;B++){let k=W[B],K=y(k,L),ie=v%E,j=ie%K.boundary,ye=ie+j;v+=j,ye!==0&&E-ye<K.storage&&(v+=E-ye),B===0&&(G=v),v+=K.storage}let V=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new V((v-G)/Float32Array.BYTES_PER_ELEMENT),z.__offset=G}}let b=v%E;return b>0&&(v+=E-b),w.__size=v,w.__cache={},this}function y(w,C){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=16,v.storage=48):w.isMatrix4?(v.boundary=16,v.storage=64):w.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(v.boundary=16,v.storage=w.byteLength):et("WebGLRenderer: Unsupported uniform value type.",w),C===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function x(w){let C=w.target;C.removeEventListener("dispose",x),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function _(){for(let w in s)n.deleteBuffer(s[w]);s={},r={}}return{bind:o,update:a,dispose:_}}var Ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function $y(){return bi===null&&(bi=new Ts(Ky,16,16,ds,li),bi.name="DFG_LUT",bi.minFilter=gn,bi.magFilter=gn,bi.wrapS=_i,bi.wrapT=_i,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Kl=class{constructor(e={}){let{canvas:t=kd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Fn}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let y=m,x=new Set([pl,fl,dl]),_=new Set([Fn,ai,yr,Ds,cl,hl]),w=new Uint32Array(4),C=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,b=null,g=[],S=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,A=!1,z=null,W=null,L=null,G=null;this._outputColorSpace=un;let V=0,B=0,Z=null,k=-1,K=null,ie=new qt,j=new qt,ye=null,J=new $e(0),fe=0,Ee=t.width,ge=t.height,ve=1,Ve=null,rt=null,qe=new qt(0,0,Ee,ge),ut=new qt(0,0,Ee,ge),vt=!1,Ke=new rs,It=new Va,Wt=!1,Xt=!1,Rt=new wt,ne=new X,De=new qt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function at(){return Z===null?ve:1}let Y=i;function Dt(P,q){return t.getContext(P,q)}let dt,Nt,Le,lt,Xe,Qe,O,I,Q,xe,de,Se,_e,oe,ae,Re,H,ce,re,Te,pe,be,He;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),Y===null){let q="webgl2";if(Y=Dt(q,P),Y===null)throw Dt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(P){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),st("WebGLRenderer: "+P.message),P}function ot(){dt=new l_(Y),dt.init(),pe=new Wy(Y,dt),Nt=new $x(Y,dt,e,pe),Le=new Vy(Y,dt),Nt.reversedDepthBuffer&&p&&Le.buffers.depth.setReversed(!0),W=Y.createFramebuffer(),L=Y.createFramebuffer(),G=Y.createFramebuffer(),lt=new u_(Y),Xe=new Cy,Qe=new Hy(Y,dt,Le,Xe,Nt,pe,lt),O=new a_(D),I=new f0(Y),be=new Jx(Y,I),Q=new c_(Y,I,lt,be),xe=new f_(Y,Q,I,be,lt),ce=new d_(Y,Nt,Qe),ae=new jx(Xe),de=new Ey(D,O,dt,Nt,be,ae),Se=new Zy(D,Xe),_e=new Iy,oe=new Fy(dt),H=new Zx(D,O,Le,xe,h,c),Re=new Gy(D,xe,Nt),He=new Jy(Y,lt,Nt,Le),re=new Kx(Y,dt,lt),Te=new h_(Y,dt,lt),lt.programs=de.programs,D.capabilities=Nt,D.extensions=dt,D.properties=Xe,D.renderLists=_e,D.shadowMap=Re,D.state=Le,D.info=lt}y!==Fn&&(F=new m_(y,t.width,t.height,a,s,r));let Me=new qh(D,Y);this.xr=Me,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let P=dt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=dt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(P){P!==void 0&&(ve=P,this.setSize(Ee,ge,!1))},this.getSize=function(P){return P.set(Ee,ge)},this.setSize=function(P,q,te=!0){if(Me.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=P,ge=q,t.width=Math.floor(P*ve),t.height=Math.floor(q*ve),te===!0&&(t.style.width=P+"px",t.style.height=q+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(Ee*ve,ge*ve).floor()},this.setDrawingBufferSize=function(P,q,te){Ee=P,ge=q,ve=te,t.width=Math.floor(P*te),t.height=Math.floor(q*te),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(y===Fn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(ie)},this.getViewport=function(P){return P.copy(qe)},this.setViewport=function(P,q,te,ee){P.isVector4?qe.set(P.x,P.y,P.z,P.w):qe.set(P,q,te,ee),Le.viewport(ie.copy(qe).multiplyScalar(at()).round())},this.getScissor=function(P){return P.copy(ut)},this.setScissor=function(P,q,te,ee){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,q,te,ee),Le.scissor(j.copy(ut).multiplyScalar(at()).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(P){Le.setScissorTest(vt=P)},this.setOpaqueSort=function(P){Ve=P},this.setTransparentSort=function(P){rt=P},this.getClearColor=function(P){return P.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,te=!0){let ee=0;if(P){let $=!1;if(Z!==null){let Ae=Z.texture.format;$=x.has(Ae)}if($){let Ae=Z.texture.type,ke=_.has(Ae),Ie=H.getClearColor(),Ne=H.getClearAlpha(),Ze=Ie.r,Ce=Ie.g,ft=Ie.b;ke?(w[0]=Ze,w[1]=Ce,w[2]=ft,w[3]=Ne,Y.clearBufferuiv(Y.COLOR,0,w)):(C[0]=Ze,C[1]=Ce,C[2]=ft,C[3]=Ne,Y.clearBufferiv(Y.COLOR,0,C))}else ee|=Y.COLOR_BUFFER_BIT}q&&(ee|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(ee|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),z=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),H.dispose(),_e.dispose(),oe.dispose(),Qe.dispose(),Xe.dispose(),O.dispose(),xe.dispose(),Q.dispose(),be.dispose(),He.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Xs),Me.removeEventListener("sessionend",xn),On.stop()};function Ue(P){P.preventDefault(),Rh("WebGLRenderer: Context Lost."),A=!0}function it(){Rh("WebGLRenderer: Context Restored."),A=!1;let P=lt.autoReset,q=Re.enabled,te=Re.autoUpdate,ee=Re.needsUpdate,$=Re.type;ot(),lt.autoReset=P,Re.enabled=q,Re.autoUpdate=te,Re.needsUpdate=ee,Re.type=$}function Pe(P){st("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Mt(P){let q=P.target;q.removeEventListener("dispose",Mt),Ut(q)}function Ut(P){Zt(P),Xe.remove(P)}function Zt(P){let q=Xe.get(P).programs;q!==void 0&&(q.forEach(function(te){de.releaseProgram(te)}),P.isShaderMaterial&&de.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,te,ee,$,Ae){q===null&&(q=mt);let ke=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ie=kr(P,q,te,ee,$);Le.setMaterial(ee,ke);let Ne=te.index,Ze=1;if(ee.wireframe===!0){if(Ne=Q.getWireframeAttribute(te),Ne===void 0)return;Ze=2}let Ce=te.drawRange,ft=te.attributes.position,Ge=Ce.start*Ze,je=(Ce.start+Ce.count)*Ze;Ae!==null&&(Ge=Math.max(Ge,Ae.start*Ze),je=Math.min(je,(Ae.start+Ae.count)*Ze)),Ne!==null?(Ge=Math.max(Ge,0),je=Math.min(je,Ne.count)):ft!=null&&(Ge=Math.max(Ge,0),je=Math.min(je,ft.count));let Ot=je-Ge;if(Ot<0||Ot===1/0)return;be.setup($,ee,Ie,te,Ne);let zt,At=re;if(Ne!==null&&(zt=I.get(Ne),At=Te,At.setIndex(zt)),$.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*at()),At.setMode(Y.LINES)):At.setMode(Y.TRIANGLES);else if($.isLine){let ln=ee.linewidth;ln===void 0&&(ln=1),Le.setLineWidth(ln*at()),$.isLineSegments?At.setMode(Y.LINES):$.isLineLoop?At.setMode(Y.LINE_LOOP):At.setMode(Y.LINE_STRIP)}else $.isPoints?At.setMode(Y.POINTS):$.isSprite&&At.setMode(Y.TRIANGLES);if($.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))At.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let ln=$._multiDrawStarts,Fe=$._multiDrawCounts,cn=$._multiDrawCount,Et=Ne?I.get(Ne).bytesPerElement:1,pi=Xe.get(ee).currentProgram.getUniforms();for(let Bt=0;Bt<cn;Bt++)pi.setValue(Y,"_gl_DrawID",Bt),At.render(ln[Bt]/Et,Fe[Bt])}else if($.isInstancedMesh)At.renderInstances(Ge,Ot,$.count);else if(te.isInstancedBufferGeometry){let ln=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Fe=Math.min(te.instanceCount,ln);At.renderInstances(Ge,Ot,Fe)}else At.render(Ge,Ot)};function Qt(P,q,te,ee){z!==null&&P.isNodeMaterial&&z.setObject(ee,P),Wt===!0&&ae.setState(P,te,!1),P.transparent===!0&&P.side===Tn&&P.forceSinglePass===!1?(P.side=yn,P.needsUpdate=!0,Ci(P,q,ee),P.side=hs,P.needsUpdate=!0,Ci(P,q,ee),P.side=Tn):Ci(P,q,ee)}this.compile=function(P,q,te=null){te===null&&(te=P),z!==null&&z.renderStart(P,q,te),b=oe.get(te),b.init(q),S.push(b),te.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),P!==te&&P.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),Xt=this.localClippingEnabled,Wt=ae.init(this.clippingPlanes,Xt),Wt===!0&&ae.setGlobalState(this.clippingPlanes,q),z!==null&&Re.render(b.state.shadowsArray,te,q);let ee=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let ke=0;ke<Ae.length;ke++){let Ie=Ae[ke];Qt(Ie,te,q,$),ee.add(Ie)}else Qt(Ae,te,q,$),ee.add(Ae)}),b=S.pop(),z!==null&&z.renderEnd(),ee},this.compileAsync=function(P,q,te=null){let ee=this.compile(P,q,te);return new Promise($=>{function Ae(){if(ee.forEach(function(ke){let Ne=Xe.get(ke).currentProgram;(Ne===void 0||Ne.isReady())&&ee.delete(ke)}),ee.size===0){$(P);return}setTimeout(Ae,10)}dt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function di(P){Mn&&Mn(P)}function Xs(){On.stop()}function xn(){On.start()}let On=new _f;On.setAnimationLoop(di),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(P){Mn=P,Me.setAnimationLoop(P),P===null?On.stop():On.start()},Me.addEventListener("sessionstart",Xs),Me.addEventListener("sessionend",xn),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;z!==null&&z.renderStart(P,q);let te=Me.enabled===!0&&Me.isPresenting===!0,ee=F!==null&&(Z===null||te)&&F.begin(D,Z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(q),q=Me.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,q,Z),b=oe.get(P,S.length),b.init(q),b.state.textureUnits=Qe.getTextureUnits(),S.push(b),Rt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?It.setFromArrayCamera(q):Ke.setFromProjectionMatrix(Rt,Kn,q.reversedDepth),Xt=this.localClippingEnabled,Wt=ae.init(this.clippingPlanes,Xt),E=_e.get(P,g.length),E.init(),g.push(E),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){let ke=D.xr.getDepthSensingMesh();ke!==null&&$t(ke,q,-1/0,D.sortObjects)}$t(P,q,0,D.sortObjects),E.finish(),z!==null&&z.updateLights(b.state.lightsArray),D.sortObjects===!0&&E.sort(Ve,rt),gt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,gt&&H.addToRenderList(E,P),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&ae.beginShadows();let $=b.state.shadowsArray;if(Re.render($,P,q),Wt===!0&&ae.endShadows(),(ee&&F.hasRenderPass())===!1){let ke=E.opaque,Ie=E.transmissive;if(b.setupLights(),q.isArrayCamera){let Ne=q.cameras;if(Ie.length>0)for(let Ze=0,Ce=Ne.length;Ze<Ce;Ze++){let ft=Ne[Ze];Ko(ke,Ie,P,ft)}gt&&H.render(P);for(let Ze=0,Ce=Ne.length;Ze<Ce;Ze++){let ft=Ne[Ze];nn(E,P,ft,ft.viewport)}}else Ie.length>0&&Ko(ke,Ie,P,q),gt&&H.render(P),nn(E,P,q)}Z!==null&&B===0&&(Qe.updateMultisampleRenderTarget(Z),Qe.updateRenderTargetMipmap(Z)),ee&&F.end(D),P.isScene===!0&&P.onAfterRender(D,P,q),be.resetDefaultState(),k=-1,K=null,S.pop(),S.length>0?(b=S[S.length-1],Qe.setTextureUnits(b.state.textureUnits),Wt===!0&&ae.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,z!==null&&z.renderEnd()};function $t(P,q,te,ee){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){let ke=q.isArrayCamera?It:Ke;if(!P.frustumCulled||P.intersectsFrustum(ke)){ee&&De.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Rt);let Ie=xe.update(P),Ne=P.material;Ne.visible&&E.push(P,Ie,Ne,te,De.z,null,q)}}else if(P.isMesh||P.isLine||P.isPoints){let ke=q.isArrayCamera?It:Ke;if(!P.frustumCulled||P.intersectsFrustum(ke)){let Ie=xe.update(P),Ne=P.material;if(ee&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),De.copy(P.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),De.copy(Ie.boundingSphere.center)),De.applyMatrix4(P.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ne)){let Ze=Ie.groups;for(let Ce=0,ft=Ze.length;Ce<ft;Ce++){let Ge=Ze[Ce],je=Ne[Ge.materialIndex];je&&je.visible&&E.push(P,Ie,je,te,De.z,Ge,q)}}else Ne.visible&&E.push(P,Ie,Ne,te,De.z,null,q)}}}let Ae=P.children;for(let ke=0,Ie=Ae.length;ke<Ie;ke++)$t(Ae[ke],q,te,ee)}function nn(P,q,te,ee){let{opaque:$,transmissive:Ae,transparent:ke}=P;b.setupLightsView(te),Wt===!0&&ae.setGlobalState(D.clippingPlanes,te),ee&&Le.viewport(ie.copy(ee)),$.length>0&&_n($,q,te),Ae.length>0&&_n(Ae,q,te),ke.length>0&&_n(ke,q,te),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ko(P,q,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ee.id]===void 0){let Ge=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ee.id]=new Hn(1,1,{generateMipmaps:!0,type:Ge?li:Fn,minFilter:Gi,samples:Math.max(4,Nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let Ae=b.state.transmissionRenderTarget[ee.id],ke=ee.viewport||ie;Ae.setSize(ke.z*D.transmissionResolutionScale,ke.w*D.transmissionResolutionScale);let Ie=D.getRenderTarget(),Ne=D.getActiveCubeFace(),Ze=D.getActiveMipmapLevel();D.setRenderTarget(Ae),D.getClearColor(J),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),gt&&H.render(te);let Ce=D.toneMapping;D.toneMapping=Mi;let ft=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),b.setupLightsView(ee),Wt===!0&&ae.setGlobalState(D.clippingPlanes,ee),_n(P,te,ee),Qe.updateMultisampleRenderTarget(Ae),Qe.updateRenderTargetMipmap(Ae),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let je=0,Ot=q.length;je<Ot;je++){let zt=q[je],{object:At,geometry:ln,material:Fe,group:cn}=zt;if(Fe.side===Tn&&At.layers.test(ee.layers)){let Et=Fe.side;Fe.side=yn,Fe.needsUpdate=!0,fi(At,te,ee,ln,Fe,cn),Fe.side=Et,Fe.needsUpdate=!0,Ge=!0}}Ge===!0&&(Qe.updateMultisampleRenderTarget(Ae),Qe.updateRenderTargetMipmap(Ae))}D.setRenderTarget(Ie,Ne,Ze),D.setClearColor(J,fe),ft!==void 0&&(ee.viewport=ft),D.toneMapping=Ce}function _n(P,q,te){let ee=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ae=P.length;$<Ae;$++){let ke=P[$],{object:Ie,geometry:Ne,group:Ze}=ke,Ce=ke.material;Ce.allowOverride===!0&&ee!==null&&(Ce=ee),Ie.layers.test(te.layers)&&fi(Ie,q,te,Ne,Ce,Ze)}}function fi(P,q,te,ee,$,Ae){z!==null&&$.isNodeMaterial&&z.setObject(P,$),P.onBeforeRender(D,q,te,ee,$,Ae),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(D,q,te,ee,P,Ae),$.transparent===!0&&$.side===Tn&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,D.renderBufferDirect(te,q,ee,$,P,Ae),$.side=hs,$.needsUpdate=!0,D.renderBufferDirect(te,q,ee,$,P,Ae),$.side=Tn):D.renderBufferDirect(te,q,ee,$,P,Ae),P.onAfterRender(D,q,te,ee,$,Ae)}function Ei(P){let q=0;for(let te of P)te.texture!==null&&q++;return q}function Ci(P,q,te){q.isScene!==!0&&(q=mt);let ee=Xe.get(P),$=b.state.lights,Ae=b.state.shadowsArray,ke=$.state.version,Ie=de.getParameters(P,$.state,Ae,q,te,b.state.lightProbeGridArray),Ne=de.getProgramCacheKey(Ie),Ze=ee.programs;ee.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;let Ce=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ee.envMap=O.get(P.envMap||ee.environment,Ce),ee.envMapRotation=ee.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Ze===void 0&&(P.addEventListener("dispose",Mt),Ze=new Map,ee.programs=Ze,ee.programVariants=new Map);let ft=Ze.get(Ne);if(ft!==void 0){if(ee.currentProgram===ft&&ee.lightsStateVersion===ke)return vs(P,Ie),ft}else Ie.uniforms=de.getUniforms(P),z!==null&&P.isNodeMaterial&&z.build(P,te,Ie),P.onBeforeCompile(Ie,D),ft=de.acquireProgram(Ie,Ne),Ze.set(Ne,ft),ee.uniforms=Ie.uniforms;let Ge=ee.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ge.clippingPlanes=ae.uniform),vs(P,Ie),ee.needsLights=Ji(P),ee.lightsStateVersion=ke,ee.needsLights&&(Ge.ambientLightColor.value=$.state.ambient,Ge.lightProbe.value=$.state.probe,Ge.sunLights.value=$.state.sun,Ge.sunLightShadows.value=$.state.sunShadow,Ge.directionalLights.value=$.state.directional,Ge.directionalLightShadows.value=$.state.directionalShadow,Ge.spotLights.value=$.state.spot,Ge.spotLightShadows.value=$.state.spotShadow,Ge.rectAreaLights.value=$.state.rectArea,Ge.ltc_1.value=$.state.rectAreaLTC1,Ge.ltc_2.value=$.state.rectAreaLTC2,Ge.pointLights.value=$.state.point,Ge.pointLightShadows.value=$.state.pointShadow,Ge.hemisphereLights.value=$.state.hemi,Ge.sunShadowMatrix.value=$.state.sunShadowMatrix,Ge.sunShadowCascade.value=$.state.sunShadowCascade,Ge.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ge.spotLightMatrix.value=$.state.spotLightMatrix,Ge.spotLightMap.value=$.state.spotLightMap,Ge.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.numLightProbeGrids=Ei(b.state.lightProbeGridArray),ee.currentProgram=ft,ee.uniformsList=null,ft}function Br(P,q,te,ee,$){let Ae=Xe.get(P),ke=Ae.currentProgram.id+","+ee+","+$,Ie=Ae.programVariants.get(ke);return Ie===void 0?(Ie=Ci(P,q,te),Ae.programVariants.set(ke,Ie)):(Ae.currentProgram=Ie,Ae.uniformsList=null,Ae.outputColorSpace=ee,Ae.toneMapping=$),Ie}function ys(P){if(P.uniformsList===null){let q=P.currentProgram.getUniforms();P.uniformsList=br.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function vs(P,q){let te=Xe.get(P);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function kr(P,q,te,ee,$){q.isScene!==!0&&(q=mt),Qe.resetTextureUnits();let Ae=q.fog,ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Ie=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:bt.workingColorSpace,Ne=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ze=O.get(ee.envMap||ke,Ne),Ce=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ft=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!te.morphAttributes.position,je=!!te.morphAttributes.normal,Ot=!!te.morphAttributes.color,zt=Mi;ee.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(zt=D.toneMapping);let At=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ln=At!==void 0?At.length:0,Fe=Xe.get(ee),cn=b.state.lights;if(Wt===!0&&(Xt===!0||P!==K)){let Gt=P===K&&ee.id===k;ae.setState(ee,P,Gt)}let Et=!1,pi=!1;ee.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==cn.state.version||$.isBatchedMesh&&Fe.batching===!1||!$.isBatchedMesh&&Fe.batching===!0||$.isBatchedMesh&&Fe.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Fe.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Fe.instancing===!1||!$.isInstancedMesh&&Fe.instancing===!0||$.isSkinnedMesh&&Fe.skinning===!1||!$.isSkinnedMesh&&Fe.skinning===!0||$.isInstancedMesh&&Fe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Fe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Fe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Fe.instancingMorph===!1&&$.morphTexture!==null||Fe.envMap!==Ze||ee.fog===!0&&Fe.fog!==Ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ae.numPlanes||Fe.numIntersection!==ae.numIntersection)||Fe.vertexAlphas!==Ce||Fe.vertexTangents!==ft||Fe.morphTargets!==Ge||Fe.morphNormals!==je||Fe.morphColors!==Ot||Fe.morphTargetsCount!==ln||Fe.numLightProbeGrids!==Ei(b.state.lightProbeGridArray)?Et=!0:(Fe.outputColorSpace!==Ie||Fe.toneMapping!==zt)&&(pi=!0):(Et=!0,Fe.__version=ee.version);let Bt=Fe.currentProgram;(Et===!0||pi===!0)&&(Bt=pi===!0?Br(ee,q,$,Ie,zt):Ci(ee,q,$),z&&ee.isNodeMaterial&&z.onUpdateProgram(ee,Bt,Fe));let qs=!1,mi=!1,Bn=!1,xt=Bt.getUniforms(),sn=Fe.uniforms;if(Le.useProgram(Bt.program)&&(qs=!0,mi=!0,Bn=!0),ee.id!==k&&(k=ee.id,mi=!0),qs||K!==P){Le.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),xt.setValue(Y,"projectionMatrix",P.projectionMatrix),xt.setValue(Y,"viewMatrix",P.matrixWorldInverse);let rn=xt.map.cameraPosition;rn!==void 0&&rn.setValue(Y,ne.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&xt.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&xt.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),K!==P&&(K=P,mi=!0,Bn=!0)}if(Fe.needsLights&&(cn.state.sunShadowMap.length>0&&xt.setValue(Y,"sunShadowMap",cn.state.sunShadowMap,Qe),cn.state.directionalShadowMap.length>0&&xt.setValue(Y,"directionalShadowMap",cn.state.directionalShadowMap,Qe),cn.state.spotShadowMap.length>0&&xt.setValue(Y,"spotShadowMap",cn.state.spotShadowMap,Qe),cn.state.pointShadowMap.length>0&&xt.setValue(Y,"pointShadowMap",cn.state.pointShadowMap,Qe)),$.isSkinnedMesh){xt.setOptional(Y,$,"bindMatrix"),xt.setOptional(Y,$,"bindMatrixInverse");let Gt=$.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),xt.setValue(Y,"boneTexture",Gt.boneTexture,Qe))}$.isBatchedMesh&&(xt.setOptional(Y,$,"batchingTexture"),xt.setValue(Y,"batchingTexture",$._matricesTexture,Qe),xt.setOptional(Y,$,"batchingIdTexture"),xt.setValue(Y,"batchingIdTexture",$._indirectTexture,Qe),xt.setOptional(Y,$,"batchingColorTexture"),$._colorsTexture!==null&&xt.setValue(Y,"batchingColorTexture",$._colorsTexture,Qe));let hn=te.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ce.update($,te,Bt),(mi||Fe.receiveShadow!==$.receiveShadow)&&(Fe.receiveShadow=$.receiveShadow,xt.setValue(Y,"receiveShadow",$.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(sn.envMapIntensity.value=q.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=$y()),mi){if(xt.setValue(Y,"toneMappingExposure",D.toneMappingExposure),Fe.needsLights&&$o(sn,Bn),Ae&&ee.fog===!0&&Se.refreshFogUniforms(sn,Ae),Se.refreshMaterialUniforms(sn,ee,ve,ge,b.state.transmissionRenderTarget[P.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Gt=v,rn=0;for(let Zn of b.state.lightProbeGridArray)Zn.texture!==null&&(Gt.textures[rn]=Zn.texture,Gt.min[rn]=Zn.boundingBox.min,Gt.max[rn]=Zn.boundingBox.max,Gt.resolution[rn]=Zn.resolution,rn++);for(let Zn in Gt)Gt[Zn].length=rn;sn.probesSH.value=Gt.textures,sn.probesMin.value=Gt.min,sn.probesMax.value=Gt.max,sn.probesResolution.value=Gt.resolution}br.upload(Y,ys(Fe),sn,Qe)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(br.upload(Y,ys(Fe),sn,Qe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&xt.setValue(Y,"center",$.center),xt.setValue(Y,"modelViewMatrix",$.modelViewMatrix),xt.setValue(Y,"normalMatrix",$.normalMatrix),xt.setValue(Y,"modelMatrix",$.matrixWorld),ee.uniformsGroups!==void 0){let Gt=ee.uniformsGroups;for(let rn=0,Zn=Gt.length;rn<Zn;rn++){let Ys=Gt[rn];He.update(Ys,Bt),He.bind(Ys,Bt)}}return Bt}function $o(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.sunLights.needsUpdate=q,P.sunLightShadows.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Ji(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(P,q,te){let ee=Xe.get(P);ee.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Xe.get(P.texture).__webglTexture=q,Xe.get(P.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:te,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){let te=Xe.get(P);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,te=0){Z=P,V=q,B=te;let ee=null,$=!1,Ae=!1;if(P){let Ie=Xe.get(P);if(Ie.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(Y.FRAMEBUFFER,Ie.__webglFramebuffer),ie.copy(P.viewport),j.copy(P.scissor),ye=P.scissorTest,Le.viewport(ie),Le.scissor(j),Le.setScissorTest(ye),k=-1;return}else if(Ie.__webglFramebuffer===void 0)Qe.setupRenderTarget(P);else if(Ie.__hasExternalTextures)Qe.rebindTextures(P,Xe.get(P.texture).__webglTexture,Xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ce=P.depthTexture;if(Ie.__boundDepthTexture!==Ce){if(Ce!==null&&Xe.has(Ce)&&(P.width!==Ce.image.width||P.height!==Ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(P)}}let Ne=P.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ae=!0);let Ze=Xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?ee=Ze[q][te]:ee=Ze[q],$=!0):P.samples>0&&Qe.useMultisampledRTT(P)===!1?ee=Xe.get(P).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[te]:ee=Ze,ie.copy(P.viewport),j.copy(P.scissor),ye=P.scissorTest}else ie.copy(qe).multiplyScalar(ve).floor(),j.copy(ut).multiplyScalar(ve).floor(),ye=vt;if(te!==0&&(ee=W),Le.bindFramebuffer(Y.FRAMEBUFFER,ee)&&Le.drawBuffers(P,ee),Le.viewport(ie),Le.scissor(j),Le.setScissorTest(ye),$){let Ie=Xe.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,te)}else if(Ae){let Ie=q;for(let Ne=0;Ne<P.textures.length;Ne++){let Ze=Xe.get(P.textures[Ne]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ne,Ze.__webglTexture,te,Ie)}}else if(P!==null&&te!==0){let Ie=Xe.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ie.__webglTexture,te)}k=-1};function Ri(P){let q=Xe.get(P);return(q.__readFormat!==P.format||q.__readType!==P.type)&&(q.__readFormat=P.format,q.__readType=P.type,q.__formatReadable=Nt.textureFormatReadable(P.format),q.__typeReadable=Nt.textureTypeReadable(P.type)),q}this.readRenderTargetPixels=function(P,q,te,ee,$,Ae,ke,Ie=0){if(!(P&&P.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(Ne=Ne[ke],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){Le.bindFramebuffer(Y.FRAMEBUFFER,Ne);try{let Ze=P.textures[Ie],Ce=Ze.format,ft=Ze.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie);let Ge=Ri(Ze);if(Ge.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ee&&te>=0&&te<=P.height-$&&Y.readPixels(q,te,ee,$,pe.convert(Ce),pe.convert(ft),Ae)}finally{let Ze=Z!==null?Xe.get(Z).__webglFramebuffer:null;Le.bindFramebuffer(Y.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(P,q,te,ee,$,Ae,ke,Ie=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(Ne=Ne[ke],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(q>=0&&q<=P.width-ee&&te>=0&&te<=P.height-$){Le.bindFramebuffer(Y.FRAMEBUFFER,Ne);let Ze=P.textures[Ie],Ce=Ze.format,ft=Ze.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie);let Ge=Ri(Ze);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ae.byteLength,Y.STREAM_READ),Y.readPixels(q,te,ee,$,pe.convert(Ce),pe.convert(ft),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Ot=Z!==null?Xe.get(Z).__webglFramebuffer:null;Le.bindFramebuffer(Y.FRAMEBUFFER,Ot);let zt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Vd(Y,zt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ae),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(je),Y.deleteSync(zt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,te=0){let ee=Math.pow(2,-te),$=Math.floor(P.image.width*ee),Ae=Math.floor(P.image.height*ee),ke=q!==null?q.x:0,Ie=q!==null?q.y:0;Qe.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,te,0,0,ke,Ie,$,Ae),Le.unbindTexture()},this.copyTextureToTexture=function(P,q,te=null,ee=null,$=0,Ae=0){let ke,Ie,Ne,Ze,Ce,ft,Ge,je,Ot,zt=P.isCompressedTexture?P.mipmaps[Ae]:P.image;if(te!==null)ke=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Ne=te.isBox3?te.max.z-te.min.z:1,Ze=te.min.x,Ce=te.min.y,ft=te.isBox3?te.min.z:0;else{let xt=Math.pow(2,-$);ke=Math.floor(zt.width*xt),Ie=Math.floor(zt.height*xt),P.isDataArrayTexture?Ne=zt.depth:P.isData3DTexture?Ne=Math.floor(zt.depth*xt):Ne=1,Ze=0,Ce=0,ft=0}ee!==null?(Ge=ee.x,je=ee.y,Ot=ee.z):(Ge=0,je=0,Ot=0);let At=pe.convert(q.format),ln=pe.convert(q.type),Fe;q.isData3DTexture?(Qe.setTexture3D(q,0),Fe=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Qe.setTexture2DArray(q,0),Fe=Y.TEXTURE_2D_ARRAY):(Qe.setTexture2D(q,0),Fe=Y.TEXTURE_2D),Le.activeTexture(Y.TEXTURE0),Le.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),Le.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Le.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);let cn=Le.getParameter(Y.UNPACK_ROW_LENGTH),Et=Le.getParameter(Y.UNPACK_IMAGE_HEIGHT),pi=Le.getParameter(Y.UNPACK_SKIP_PIXELS),Bt=Le.getParameter(Y.UNPACK_SKIP_ROWS),qs=Le.getParameter(Y.UNPACK_SKIP_IMAGES);Le.pixelStorei(Y.UNPACK_ROW_LENGTH,zt.width),Le.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,zt.height),Le.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ze),Le.pixelStorei(Y.UNPACK_SKIP_ROWS,Ce),Le.pixelStorei(Y.UNPACK_SKIP_IMAGES,ft);let mi=P.isDataArrayTexture||P.isData3DTexture,Bn=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){let xt=Xe.get(P),sn=Xe.get(q),hn=Xe.get(xt.__renderTarget),Gt=Xe.get(sn.__renderTarget);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,hn.__webglFramebuffer),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let rn=0;rn<Ne;rn++)mi&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Xe.get(P).__webglTexture,$,ft+rn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Xe.get(q).__webglTexture,Ae,Ot+rn)),Y.blitFramebuffer(Ze,Ce,Ze+ke,Ce+Ie,Ge,je,Ge+ke,je+Ie,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if($!==0||P.isRenderTargetTexture||Xe.has(P)){let xt=Xe.get(P),sn=Xe.get(q);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,L),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,G);for(let hn=0;hn<Ne;hn++)mi?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,xt.__webglTexture,$,ft+hn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,xt.__webglTexture,$),Bn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,sn.__webglTexture,Ae,Ot+hn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,sn.__webglTexture,Ae),$!==0?Y.blitFramebuffer(Ze,Ce,Ze+ke,Ce+Ie,Ge,je,Ge+ke,je+Ie,Y.COLOR_BUFFER_BIT,Y.NEAREST):Bn?Y.copyTexSubImage3D(Fe,Ae,Ge,je,Ot+hn,Ze,Ce,ke,Ie):Y.copyTexSubImage2D(Fe,Ae,Ge,je,Ze,Ce,ke,Ie);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Bn?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(Fe,Ae,Ge,je,Ot,ke,Ie,Ne,At,ln,zt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Fe,Ae,Ge,je,Ot,ke,Ie,Ne,At,zt.data):Y.texSubImage3D(Fe,Ae,Ge,je,Ot,ke,Ie,Ne,At,ln,zt):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ae,Ge,je,ke,Ie,At,ln,zt.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ae,Ge,je,zt.width,zt.height,At,zt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ae,Ge,je,ke,Ie,At,ln,zt);Le.pixelStorei(Y.UNPACK_ROW_LENGTH,cn),Le.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Et),Le.pixelStorei(Y.UNPACK_SKIP_PIXELS,pi),Le.pixelStorei(Y.UNPACK_SKIP_ROWS,Bt),Le.pixelStorei(Y.UNPACK_SKIP_IMAGES,qs),Ae===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Y.generateMipmap(Fe),Le.unbindTexture()},this.initRenderTarget=function(P){Xe.get(P).__webglFramebuffer===void 0&&Qe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Qe.setTextureCube(P,0):P.isData3DTexture?Qe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Qe.setTexture2DArray(P,0):Qe.setTexture2D(P,0),Le.unbindTexture()},this.resetState=function(){V=0,B=0,Z=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var qn=[-57,-19,19,57],ci=[-38,0,38],zo={x:11.7,z:3.2},wr={x:12.05,z:-5.45},Wi={x:2,z:38},En={x:38,z:-38},Us={door:{x:47.6,z:-33},inside:{x:47.6,z:-38.4,angle:0},out:{x:47.6,z:-29.6,angle:0}},Rf={x:42.3,z:-41.25},_t=(n,e,t)=>Math.max(e,Math.min(t,n)),he=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Ln(n,e,t,i){return Math.abs(n)+t<65&&Math.abs(e)+t<65&&i.every(s=>{if(s.off)return!0;let r=n-_t(n,s.x-s.w/2,s.x+s.w/2),o=e-_t(e,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=t*t})}function Oo(n,e,t,i,s){let r=n.x,o=n.z;return Ln(e,n.z,i,s)&&(n.x=e),Ln(n.x,t,i,s)&&(n.z=t),n.x!==r||n.z!==o}function Yn(n,e,t){let i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+_t(i,-t,t)}function If(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function Ql(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Yt;c.morphTargetsRelative=a;let l=0;for(let d=0;d<n.length;++d){let f=n[d],p=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[h].length!==n[0].morphAttributes[h].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+h+'" morph attribute.'),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,d),l+=h}}if(t){let d=0,f=[];for(let p=0;p<n.length;++p){let m=n[p].index;for(let h=0;h<m.count;++h)f.push(m.getX(h)+d);d+=n[p].attributes.position.count}c.setIndex(f)}for(let d in r){let f=Pf(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let p=0;p<f;++p){let m=[];for(let y=0;y<o[d].length;++y)m.push(o[d][y][p]);let h=Pf(m);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(h)}}}return c}function Pf(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let d=n[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),a=new jt(o,t,i),c=0;for(let l=0;l<n.length;++l){let d=n[l];if(d.isInterleavedBufferAttribute){let f=c/t;for(let p=0,m=d.count;p<m;p++)for(let h=0;h<t;h++){let y=d.getComponent(p,h);a.setComponent(p+f,h,y)}}else o.set(d.array,c);c+=d.count*t}return s!==void 0&&(a.gpuType=s),a}var Bo=new X;function jn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Bo.copy(e),Bo[i]=0,Bo.normalize();let l=.5*o/(o+a),d=1-Bo.angleTo(n)/c;return Math.sign(Bo[t])===1?d*l:a/(o+a)+l+l*(1-d)}var ec=class n extends an{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new X,l=new X,d=new X(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,h=f.length/6,y=new X,x=.5/o;for(let _=0,w=0;_<f.length;_+=3,w+=2)switch(c.fromArray(f,_),l.copy(c),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),f[_+0]=d.x*Math.sign(c.x)+l.x*r,f[_+1]=d.y*Math.sign(c.y)+l.y*r,f[_+2]=d.z*Math.sign(c.z)+l.z*r,p[_+0]=l.x,p[_+1]=l.y,p[_+2]=l.z,Math.floor(_/h)){case 0:y.set(1,0,0),m[w+0]=jn(y,l,"z","y",r,i),m[w+1]=1-jn(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),m[w+0]=1-jn(y,l,"z","y",r,i),m[w+1]=1-jn(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),m[w+0]=1-jn(y,l,"x","z",r,e),m[w+1]=jn(y,l,"z","x",r,i);break;case 3:y.set(0,-1,0),m[w+0]=1-jn(y,l,"x","z",r,e),m[w+1]=1-jn(y,l,"z","x",r,i);break;case 4:y.set(0,0,1),m[w+0]=1-jn(y,l,"x","y",r,e),m[w+1]=1-jn(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),m[w+0]=jn(y,l,"x","y",r,e),m[w+1]=1-jn(y,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var jy={tee:"Camiseta",tank:"Regata",dress:"Camisa social",none:"Sem camisa"},Qy={pants:"Cal\xE7a",shorts:"Bermuda"},ev={sneakers:"T\xEAnis",flipflops:"Chinelo",dress:"Sapato social"},Yh={bald:"Careca",buzz:"Raspado",short:"Curto",afro:"Black power",long:"Comprido",mohawk:"Moicano",cap:"Bon\xE9"},Zh={none:"Sem barba",stubble:"Por fazer",goatee:"Cavanhaque",mustache:"Bigode",full:"Barba cheia",chevron:"Bigode e cavanhaque"},Tr={gold:14266683,silver:13225169,diamond:14677503},Jh=[15921126,2040614,2772879,11680307,3107660,14725949,8014476,14711354,7307148,13214330],Kh=[1906452,3876376,6964005,13081170,9318175,10132118,2772896],tv=[15052936,12684900,11765348,10119749,8475704,6175527];function Fs(){return{shirt:"tee",shirtColor:2386265,legs:"pants",legColor:3553348,shoes:"sneakers",shoeColor:13812648,hair:"cap",hairColor:1906452,beard:"none",skin:12220240,glasses:!1,chain:"none",earrings:"none",watch:"none",ring:"none",height:1,width:1,capColor:1522486}}function Lf(n=12157017){return{...Fs(),shirt:"dress",shirtColor:3558501,legColor:2503491,shoes:"dress",shoeColor:1447446,hair:"cap",capColor:1845820,skin:n,beard:"none"}}function ko(n){let e=n*2654435761>>>0||1,t=()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296),i=r=>r[Math.floor(t()*r.length)],s=r=>{let o=t()*r.reduce((a,[,c])=>a+c,0);for(let[a,c]of r)if(o-=c,o<=0)return a;return r[0][0]};return{shirt:s([["tee",.46],["tank",.2],["dress",.2],["none",.08]]),shirtColor:i(Jh),legs:s([["pants",.62],["shorts",.38]]),legColor:i([3553348,2373199,5917242,2894892,8221798,4020851,11049860]),shoes:s([["sneakers",.5],["flipflops",.28],["dress",.22]]),shoeColor:i([15789282,2236962,9056042,2969482,5915442]),hair:s([["short",.3],["buzz",.18],["bald",.1],["afro",.12],["long",.14],["mohawk",.05],["cap",.11]]),hairColor:i(Kh.slice(0,6)),beard:s([["none",.45],["stubble",.18],["goatee",.1],["mustache",.1],["full",.12],["chevron",.05]]),skin:i(tv),glasses:t()<.14,chain:s([["none",.82],["silver",.11],["gold",.07]]),earrings:s([["none",.88],["silver",.06],["gold",.05],["diamond",.01]]),watch:s([["none",.75],["silver",.17],["gold",.08]]),ring:s([["none",.85],["silver",.1],["gold",.05]]),height:.92+t()*.16,width:.9+t()*.25,capColor:i([1522486,9056042,2236962,2772879,14725949])}}function Df(n){let e=Fs();if(!n||typeof n!="object")return e;let t=(r,o)=>Object.hasOwn(o,n[r])?n[r]:e[r],i=r=>Number.isInteger(n[r])&&n[r]>=0&&n[r]<=16777215?n[r]:e[r],s=(r,o)=>o.includes(n[r])?n[r]:"none";return{shirt:t("shirt",jy),shirtColor:i("shirtColor"),legs:t("legs",Qy),legColor:i("legColor"),shoes:t("shoes",ev),shoeColor:i("shoeColor"),hair:t("hair",Yh),hairColor:i("hairColor"),beard:t("beard",Zh),skin:i("skin"),glasses:n.glasses===!0,chain:s("chain",["gold","silver"]),earrings:s("earrings",["gold","silver","diamond"]),watch:s("watch",["gold","silver"]),ring:s("ring",["gold","silver"]),height:1,width:1,capColor:i("capColor")}}var nv=new an,iv=new ec(1,1,1,2,.29),sv=new os(1,10,7),rv=new Pn(1,1,1,12),$h=new Map,ov=new Kt({vertexColors:!0,roughness:.82}),nc=new Kt({vertexColors:!0,roughness:.36,metalness:.18});function hi(n,e,t=ov){if(!e.length)return;let i=e.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,c=new Float32Array(a*3),l=r.material.color;for(let d=0;d<c.length;d+=3)c[d]=l.r,c[d+1]=l.g,c[d+2]=l.b;return o.setAttribute("color",new jt(c,3)),o});n.remove(...e);let s=new Ct(Ql(i),t);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var Xi=n=>n.children.filter(e=>e instanceof Ct);function yt(n,e,t,i,s,r,o,a,c,l=!1){let d=t+":"+l;$h.has(d)||$h.set(d,new Kt({color:t,roughness:l?.33:.87,metalness:l?.2:0}));let f=new Ct({box:nv,cloth:iv,sphere:sv,cylinder:rv}[e],$h.get(d));return f.scale.set(o,a,c),f.position.set(i,s,r),f.castShadow=!0,f.receiveShadow=!0,n.add(f),f}var av=new Es(1,16),lv=new Jt({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function ic(n,e,t){let i=new Ct(av,lv);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(e,t,1),n.add(i),i}var cv=new xo(1,.09,6,18),hv=new Kt({vertexColors:!0,roughness:.22,metalness:.9});var ps=(n,e)=>{let t=Math.max(0,Math.min(255,(n>>16&255)*e)),i=Math.max(0,Math.min(255,(n>>8&255)*e)),s=Math.max(0,Math.min(255,(n&255)*e));return t<<16|i<<8|s};function ms(n,e){let t={...Fs(),...e},{skin:i}=t,s=new Pt;s.rotation.order="YXZ",s.scale.set(t.width,t.height,t.width);let r=ic(s,.41,.38),o=new Pt;s.add(o);let a=(v,E,b,g,S,F,D,A,z=!1)=>yt(o,v,E,b,g,S,F,D,A,z),c=t.shirt==="none",l=c?i:t.shirtColor;if(a("cloth",t.legColor,0,.94,0,.44,.25,.29),t.shirt==="tank"){a("cloth",l,0,1.21,0,.46,.5,.3),a("cloth",i,0,1.39,0,.5,.2,.31);for(let v of[-1,1])a("cloth",l,v*.12,1.41,0,.07,.2,.315)}else a("cloth",l,0,1.22,0,.49,.49,.31),a("cloth",l,0,1.39,0,.55,.215,.337);if(c){for(let v of[-1,1])a("cloth",ps(i,.9),v*.1,1.33,.142,.17,.12,.03);a("cloth",ps(i,.92),0,1.15,.145,.16,.18,.02)}t.shirt==="dress"&&(a("cloth",ps(l,1.25),0,1.47,.06,.3,.06,.2),a("cloth",ps(l,1.18),0,1.25,.158,.05,.4,.012)),a("cloth",c?3877408:4864812,0,1.05,.006,.473,.049,.312),a("cloth",12891226,-.128,1.05,.16,.06,.05,.01),a("cylinder",i,0,1.5,0,.09,.13,.09),a("sphere",i,0,1.67,.015,.168,.197,.157),a("sphere",i,0,1.655,.165,.033,.034,.034),a("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let v of[-1,1])a("sphere",i,v*.155,1.66,.023,.032,.052,.025),a("cloth",2894120,v*.061,1.711,.152,.043,.012,.012),a("cloth",10985105,v*.061,1.692,.156,.032,.012,.012),a("cloth",3024931,v*.06,1.693,.163,.016,.012,.009);let d=t.hairColor;switch(t.hair){case"buzz":a("sphere",d,0,1.735,-.02,.172,.105,.158);break;case"short":a("sphere",d,0,1.77,-.031,.162,.112,.141);break;case"afro":a("sphere",d,0,1.8,-.035,.235,.19,.225);break;case"long":a("sphere",d,0,1.765,-.03,.175,.12,.16),a("cloth",d,0,1.6,-.115,.32,.34,.1);break;case"mohawk":a("sphere",ps(i,.8),0,1.735,-.02,.171,.1,.157),a("cloth",d,0,1.83,-.02,.05,.11,.3);break;case"cap":a("sphere",t.capColor,0,1.79,.012,.181,.132,.164),a("cloth",ps(t.capColor,1.2),0,1.77,.159,.27,.033,.17);break;default:break}let f=t.beard;if(f==="stubble"&&a("cloth",ps(i,.68),0,1.585,.09,.3,.1,.13),f==="full"&&a("cloth",d,0,1.585,.085,.33,.13,.16),(f==="goatee"||f==="chevron")&&a("cloth",d,0,1.555,.15,.07,.075,.04),(f==="mustache"||f==="chevron"||f==="full")&&a("cloth",d,0,1.618,.164,.1,.022,.02),t.glasses){a("cloth",1118481,0,1.703,.163,.25,.05,.02);for(let v of[-1,1])a("cloth",1118481,v*.155,1.705,.08,.012,.018,.16)}if(t.earrings!=="none")for(let v of[-1,1])a("sphere",Tr[t.earrings],v*.162,1.625,.03,.016,.016,.016,!0);if(t.chain!=="none"){let v=a("box",Tr[t.chain],0,1.43,.06,.15,.15,.15,!0);v.geometry=cv,v.rotation.x=Math.PI/2-.42,a("box",Tr[t.chain],0,1.32,.165,.04,.05,.015,!0)}let p=[],m=[],h=[],y=[];for(let v of[-1,1]){let E=new Pt;E.position.set(v*.31,1.42,0),o.add(E);let b=t.shirt==="tee"||t.shirt==="dress";yt(E,"cloth",b?l:i,0,-.105,0,b?.173:.15,.226,b?.187:.16);let g=new Pt;g.position.y=-.23,E.add(g),yt(g,"cloth",t.shirt==="dress"?l:i,0,-.101,0,.132,.22,.119),yt(g,"sphere",i,0,-.227,.012,.082,.084,.077),v===1&&t.watch!=="none"&&(yt(g,"cloth",2762018,0,-.17,0,.14,.04,.128),yt(g,"box",Tr[t.watch],0,-.17,.065,.05,.045,.012,!0)),v===-1&&t.ring!=="none"&&yt(g,"box",Tr[t.ring],.03,-.27,.05,.022,.022,.022,!0),h.push(g),p.push(E);let S=new Pt;S.position.set(v*.128,.94,0),o.add(S),yt(S,"cloth",t.legColor,0,-.205,0,.21,.427,.228);let F=new Pt;F.position.y=-.412,S.add(F);let D=t.legs==="shorts";if(yt(F,"cloth",D?i:t.legColor,0,-.18,0,D?.15:.182,.38,D?.16:.198),t.shoes==="flipflops")yt(F,"cloth",i,0,-.405,.06,.12,.08,.24),yt(F,"cloth",t.shoeColor,0,-.455,.059,.15,.025,.29);else{let A=t.shoes==="dress"?1906194:t.shoeColor;yt(F,"cloth",A,0,-.386,.062,.201,.143,.304),yt(F,"cloth",t.shoes==="dress"?1183243:ps(A,.55),0,-.445,.059,.202,.037,.313)}y.push(F),m.push(S)}let x=new Pt;x.position.set(0,-.227,.012),yt(x,"box",2635321,0,.012,-.002,.066,.078,.12,!0),yt(x,"box",2635321,0,-.105,.054,.074,.25,.079,!0),yt(x,"box",10263691,0,-.189,.095,.031,.028,.018);let _=new Vt;_.position.set(0,-.235,.053),x.add(_),h[0].add(x);let w=new Pt;w.position.set(0,-.227,.03),yt(w,"box",2828840,0,0,.05,.08,.12,.06,!0),yt(w,"box",2303786,0,-.2,.07,.07,.5,.11,!0),yt(w,"box",1842719,0,-.62,.08,.035,.42,.035,!0),yt(w,"box",5915954,0,.22,.06,.07,.32,.12),yt(w,"box",2303786,0,-.18,-.02,.05,.16,.12,!0);let C=new Vt;C.position.set(0,-.84,.08),w.add(C),h[0].add(w);for(let v of[o,...p,...h,...m,...y,x,w]){let E=Xi(v);hi(v,E.filter(b=>b.material.metalness===0)),hi(v,E.filter(b=>b.material.metalness>0),hv)}return x.visible=!1,w.visible=!1,n.add(s),{root:s,body:o,arms:p,legs:m,forearms:h,shins:y,pistol:x,rifle:w,muzzle:_,rifleMuzzle:C,shadow:r,stride:0,weapon:"pistol",look:t}}function Os(n,e,t,i,s,r=0,o=0,a=!1){n.stride+=e*(4.6+t*1.65);let c=Math.sin(n.stride)*Math.min(.78,t*.15);n.body.position.set(0,Math.abs(c)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(c,0,0),n.legs[1].rotation.set(-c,0,0),n.shins[0].rotation.set(Math.max(0,c)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-c)*.51,0,0);for(let d of n.forearms)d.rotation.set(0,0,0);let l=s&&n.weapon==="rifle";if(n.arms[0].rotation.set(i?-Math.PI/2+o:-c*.76,0,0),n.arms[1].rotation.set(i?l?-Math.PI/2+o+.12:-1.16:c*.76,0,i&&l?.42:0),i&&l&&n.forearms[1].rotation.set(-.35,0,0),n.arms[0].rotation.z=a?-.25:0,(a||!(i&&l))&&(n.arms[1].rotation.z=a?.25:0),a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let d=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-d*1.11,n.forearms[0].rotation.x=-.62*(1-d),n.body.rotation.y=-d*.37}else n.body.rotation.y=0;n.pistol.visible=s&&n.weapon!=="rifle",n.rifle&&(n.rifle.visible=s&&n.weapon==="rifle")}var Nf=new X(0,-1,0),jh=new X,zs=new X,Qh=new X,eu=new X,tc=new X,Ff=new tn;function Uf(n,e,t,i,s,r){zs.subVectors(t,n.position);let o=Math.min(i+s-.001,Math.max(.015,zs.length()));zs.normalize();let a=(i*i-s*s+o*o)/(2*o);Qh.set(r[0],r[1],r[2]).addScaledVector(zs,-Qh.dot(zs)).normalize(),jh.copy(n.position).addScaledVector(zs,a).addScaledVector(Qh,Math.sqrt(Math.max(0,i*i-a*a))),tc.subVectors(jh,n.position).normalize(),n.quaternion.setFromUnitVectors(Nf,tc),tc.copy(n.position).addScaledVector(zs,o).sub(jh).normalize(),e.quaternion.setFromUnitVectors(Nf,tc.applyQuaternion(Ff.copy(n.quaternion).invert()))}function tu(n,e){e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(eu.set(0,.1,-.31))),n.root.quaternion.copy(e.body.getWorldQuaternion(Ff)),n.shadow.visible=!1,n.pistol.visible=!1;let t=.63;n.body.rotation.set(t,0,0),n.body.position.set(0,.94*(1-Math.cos(t)),-.94*Math.sin(t)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(e.handlebar.localToWorld(eu.set(s*.342,.44,-.09)));Uf(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(e.body.localToWorld(eu.set(s*.245,.39,-.22)));Uf(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function Go(n,e,t){let i=Math.min(1,e/.22),s=Math.min(1,Math.max(0,(e-.12)/.5)),r=s*s*(3-2*s),o=e>.62?Math.sin(Math.min(1,(e-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(e-.62)/.25)):0,a=t*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(t*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let c=Math.sin(Math.min(1,e/.5)*Math.PI);return n.arms[0].rotation.set(-t*(.6*c+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-t*(.9*c+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*c-.2,0,0),n.forearms[1].rotation.set(-.3*c-.3,0,0),n.pistol.visible=!1,a}var sc={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},Ho=n=>sc[n]??sc[(n??"car").split(":")[0]]??sc.car,gs=n=>n.shape??n.kind;function zf(n,e){sc[n]=e}function Qn(n,e){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0),n.repair?.(),Object.assign(n,e,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function qi(n,e,t,i,s="car"){let r=Math.sin(t),o=Math.cos(t),{offsets:a,radius:c}=Ho(s);return a.every(l=>Ln(n+r*l,e+o*l,c,i))}function Yi(n,e,t,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=e-n.x,a=t-n.z,{width:c,length:l}=Ho(gs(n)),d=Math.abs(o*r-a*s)-c,f=Math.abs(o*s+a*r)-l;return d<=0&&f<=0||Math.hypot(Math.max(0,d),Math.max(0,f))<i}function xs(n,e=0){let{width:t,length:i}=Ho(n),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));return{width:t*s+i*r,length:i*s+t*r}}function iu(n,e,t,i=n){return qi(n.x,n.z,n.angle,e,gs(n))&&!Vo(i,n.x,n.z,n.angle,t)}function Vo(n,e,t,i,s){let r=Math.sin(i),o=Math.cos(i),a=Ho(gs(n));for(let c of s){if(c===n||Math.abs(c.x-e)>4.5||Math.abs(c.z-t)>4.5)continue;let l=Math.sin(c.angle),d=Math.cos(c.angle),f=Ho(gs(c)),p=a.radius+f.radius,m=p,h=0,y=0;for(let x of a.offsets)for(let _ of f.offsets){let w=e+r*x-c.x-l*_,C=t+o*x-c.z-d*_,v=Math.hypot(w,C);if(v>=m)continue;m=v;let E=Math.hypot(e-c.x,t-c.z);h=v>.02?w/v:E>.02?(e-c.x)/E:r,y=v>.02?C/v:E>.02?(t-c.z)/E:o}if(m<p)return{other:c,nx:h,nz:y,mass:a.mass,otherMass:f.mass}}return null}function nu(n,e){e<2.4||(n.integrity=Math.max(0,n.integrity-(e-2.4)*2.6),n.impact=Math.max(n.impact,e))}function wi(n,e,t,i,s){let{brake:r}=t,o=n.kind==="bike",a=n.integrity>0?t.throttle:0,c=n.integrity>0?t.steer:0;n.impact=Math.max(0,n.impact-e*21),n.steer+=(c-n.steer)*(1-Math.exp(-e*10));let l=Math.sin(n.angle),d=Math.cos(n.angle),f=n.vx*l+n.vz*d,p=n.handling,m=(n.flat??[]).filter(Boolean).length,h=(p?.top??(o?31:27))*(1-m*.22),y=Math.sign(a)*f<-.6?28:a<0?o?4.7:10:(p?.accel??(o?19.7:15.4))*(1-m*.15);f=_t(f+a*y*e,o?-2.7:-8.4,h);let x=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;f*=Math.exp(-e*x);let _=r?o?5.2:2.15:(p?.grip??(o?13.5:8.1))*(1-m*.12),w=(n.vx*d-n.vz*l)*Math.exp(-e*_);n.vx=f*l+w*d,n.vz=f*d-w*l;let C=_t(1.9-Math.abs(f)/24,.75,1.65),v=m?((n.flat?.[0]||n.flat?.[2]?1:0)-(n.flat?.[1]||n.flat?.[3]?1:0))*.12:0,E=(n.steer+v)*e*C*Math.min(1,Math.abs(f)/2.1)*Math.sign(f),b=n.angle+E*(o?1.26:r?1.58:1);qi(n.x,n.z,b,i,gs(n))&&!Vo(n,n.x,n.z,b,s)&&(n.angle=b);let g=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*e/.34)),S=e/g;for(let F=0;F<g;F++){let D=n.x+n.vx*S,A=n.z+n.vz*S,z=Vo(n,D,A,n.angle,s);if(z){let{other:W,nx:L,nz:G,mass:V,otherMass:B}=z,Z=n.vx*L+n.vz*G,k=Z-(W.vx*L+W.vz*G);if(k<0&&Z<0){let ie=-k*1.22/(1/V+1/B);n.vx+=L*ie/V,n.vz+=G*ie/V,W.vx-=L*ie/B,W.vz-=G*ie/B,nu(n,-k),nu(W,-k*.9);break}let K=Math.hypot(n.x-W.x,n.z-W.z);if(Math.hypot(D-W.x,A-W.z)<=K)break}if(qi(D,A,n.angle,i,gs(n)))n.x=D,n.z=A;else{let W=qi(D,n.z,n.angle,i,gs(n))&&!Vo(n,D,n.z,n.angle,s),L=qi(n.x,A,n.angle,i,gs(n))&&!Vo(n,n.x,A,n.angle,s),G=Math.hypot(W?0:n.vx,L?0:n.vz);W!==L?(W&&(n.x=D),L&&(n.z=A),n.vx*=W?.84:-.22,n.vz*=L?.84:-.22):(n.vx*=-.21,n.vz*=-.21),nu(n,G||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function zn(n,e){let t=0;return ci.some(i=>Math.abs(n-i)<=13.55)&&ci.some(i=>Math.abs(e-i)<=13.55)&&(t=.16),Math.abs(n-38)<6.05&&Math.abs(e+38)<5.04&&(t=.228),Math.abs(n-2)<9.5&&Math.abs(e-38)<11&&(t=.191),n>-10.91&&n<-3.49&&Math.abs(e-38)<9.77&&(t=.234),t}function Ti(n,e,t,i,s,r,o=.34){if(!Ln(e,t,o,i))return!1;for(let a of s)if(!(he(a,{x:e,z:t})>3.4||!Yi(a,e,t,o))&&(!Yi(a,n.x,n.z,o)||he(a,{x:e,z:t})<=he(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let c=o+.28;if(he(a,{x:e,z:t})<c&&he(a,{x:e,z:t})<=he(a,n))return!1}return!0}function rc(n,e,t,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(e,t)/.14)),c=n.x,l=n.z,d=e/a,f=t/a;for(let p=0;p<a;p++){let m=n.x+d,h=n.z+f;if(Ti(n,m,h,i,s,r,o)){n.x=m,n.z=h;continue}d&&Ti(n,m,n.z,i,s,r,o)&&(n.x=m),f&&Ti(n,n.x,h,i,s,r,o)&&(n.z=h)}return Math.hypot(n.x-c,n.z-l)}function Of(n,e,t){if(!e)return Yi(n,t.x,t.z,.28);let i=Math.max(1,Math.ceil(he(e,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=e.x+(n.x-e.x)*r,a=e.z+(n.z-e.z)*r,c={x:o,z:a,angle:n.angle,kind:n.kind,shape:n.shape};if(Yi(c,t.x,t.z,.28))return!0}return!1}function Bf(n,e,t){let i=e.x-n.x,s=e.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((t.x-n.x)*i+(t.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(t.x-n.x-i*o,t.z-n.z-s*o)<1.2}function Gf(n,e){let{id:t,x:i,z:s,w:r,d:o,angle:a,kind:c,label:l,color:d}=e,{box:f,solid:p,door:m,sign:h,glazing:y,support:x,volume:_}=n,w=c==="shop"||c==="armory",C=(B,Z,k=.228)=>({x:i+Math.cos(a)*B+Math.sin(a)*Z,z:s-Math.sin(a)*B+Math.cos(a)*Z,y:k}),v=Math.abs(Math.cos(a)),E=Math.abs(Math.sin(a)),b=(B,Z,k,K)=>({...C(B,Z),w:k*v+K*E,d:k*E+K*v}),g=o/2,S=-o/2,F=-r/2,D=r/2,A=(B,Z,k,K,ie,j,ye,J=!1,fe=0,Ee="box")=>{let ge=C(B,Z);f(ge.x,k,ge.z,K,ie,j,ye,J,a,fe,Ee)},z=(B,Z,k,K,ie,j,ye,J=!0)=>{A(B,Z,k,K,ie,j,ye,J);let fe=b(B,Z,K,j);p.push({x:fe.x,z:fe.z,w:fe.w,d:fe.d,y0:k-ie*.5,h:k+ie*.5,buildingId:t})};return w?G():L();function W(B,Z,k,K,ie){if(A(B,g+.05,Z,k+.22,K+.22,.1,5195585),A(B,g+.085,Z,k,K,.06,5073522),A(B,g+.12,Z,.05,K,.03,12168856),A(B,g+.12,Z+K*.18,k,.045,.03,12168856),A(B,g+.13,Z-K*.5-.08,k+.36,.09,.2,ui(d)),ie)for(let j of[-1,1])A(B+j*(k*.5+.24),g+.09,Z,.34,K+.06,.05,ie)}function L(){let B=c==="apartments",Z=B?e.stories:1,k=B?3.3:3.25,K=Z*k,ie=.228+K;z(0,0,.228+K/2,r,K,o,d),A(0,g+.03,.228+.23,r+.04,.46,.08,8484463);for(let J of[F+.12,D-.12])A(J,g+.04,.228+K/2,.26,K,.1,ui(d));for(let J=1;J<Z;J++)A(0,g+.04,.228+J*k,r+.04,.16,.1,ui(d));let j=B?0:-r*.18;if(A(j,g+.05,.228+1.17,1.42,2.42,.1,5195585),A(j,g+.09,.228+1.1,1.1,2.2,.06,B?4151902:7687224),A(j+.38,g+.14,.228+1.08,.06,.16,.05,13810049),A(j,g+.32,.228-.05,1.7,.14,.62,8484463),A(j,g+.42,.228+2.62,1.9,.12,.86,ui(d),!0),B){A(j,g+.12,.228+2.92,1.6,.32,.05,15324320);let J=C(j,g+.15,.228+2.92);h(l,J.x,J.y,J.z,a,5589560,1.56,.3)}else{let J=C(j+1.15,g+.13,1.848);h(l,J.x,J.y,J.z,a,5589560,.92,.22)}let ye=c==="house"?kf(t,[6257514,8019014,6975364]):null;for(let J=0;J<Z;J++){let fe=.228+J*k,Ee=B?[F+r*.17,F+r*.38,D-r*.38,D-r*.17]:[r*.18,r*.38];for(let ge of Ee)if(!(J===0&&Math.abs(ge-j)<1.7)&&(W(ge,fe+1.72,B?1.26:1.2,1.34,ye),B&&J>0&&ge===Ee[3])){A(ge,g+.42,fe+.95,1.8,.12,.74,8484463,!0);for(let ve of[-.8,-.4,0,.4,.8])A(ge+ve,g+.76,fe+1.38,.04,.78,.04,4802113);A(ge,g+.76,fe+1.78,1.72,.05,.06,4802113)}for(let ge of[F,D]){let ve=ge===F?-1:1;for(let Ve of B?[S+2.2,g-2.2]:[0]){let rt=C(ge+ve*.05,Ve);f(rt.x,fe+1.72,rt.z,.1,1.56,1.32,5195585,!1,a);let qe=C(ge+ve*.085,Ve);f(qe.x,fe+1.72,qe.z,.06,1.34,1.1,5073522,!1,a)}}}if(B){A(0,0,ie+.04,r+.12,.1,o+.12,7827562);for(let J of[F+.1,D-.1])A(J,0,ie+.36,.2,.56,o,ui(d),!0);for(let J of[S+.1,g-.1])A(0,J,ie+.36,r,.56,.2,ui(d),!0);A(D-2.4,S+2.1,ie+.95,2,1.8,2,9077369,!0),A(D-2.4,S+2.1,ie+1.93,2.1,.12,2.1,7301732),A(F+2.2,S+1.9,ie+.75,1.4,1.2,1.4,10134691,!0),A(F+2.2,S+1.9,ie+1.42,1.5,.12,1.5,7240057)}else{let J=Math.min(2,o*.2);A(0,0,ie,r-.02,J,o-.02,d,!0,0,"prism"),A(0,0,ie+.06,r+.5,J+.12,o+.7,kf(t,[10115652,9063482,8082502]),!0,0,"prism"),A(D-2.1,S+o*.3,ie+J*.55,.55,1.6,.55,9402986,!0)}return{id:t,kind:c,label:l,units:[],doorIds:[],clerk:null,outside:C(j,g+1.1,.16),entry:C(j,g+.2),inside:C(j,g+.2),approach:C(j,g+2.4,.16),resident:null}}function G(){let Z=4.0200000000000005,k=.228,K=e.doorAt??.1,ie=Math.min(r*.25,3.72),j=[K-r*.248,K+r*.248],ye=.22,J=(De,mt,gt,at,Y,Dt,dt)=>z(De,mt,Y+Dt/2,gt,Dt,at,dt),fe=(De,mt,gt,at,Y,Dt)=>J((mt+gt)/2,De,gt-mt,ye,at,Y,Dt),Ee=(De,mt,gt,at,Y,Dt)=>J(De,(mt+gt)/2,ye,gt-mt,at,Y,Dt),ge=m(...V(K-1.28/2,g),a,1.28,4285290,k,{buildingId:t,private:!1,unitId:null}),ve=C(K,g),Ve=C(K,g+1.05,.16),rt=C(K,g-1.05),qe=C(K,g+2.45,.16);_.push({...b(0,0,r-.2,o-.2),floor:k,ceiling:k+Z,buildingId:t}),z(0,0,k-.066,r-.03,.132,o-.03,11972762,!1),p[p.length-1].walkSurface=!0,x.push({...b(0,0,r-.03,o-.03),y:k,buildingId:t}),Ee(F,S,g,k,Z,d),Ee(D,S,g,k,Z,d),fe(S,F,D,k,Z,d);let ut=F,vt=[{center:K,width:1.28,door:!0},...j.map(De=>({center:De,width:ie,door:!1}))];vt.sort((De,mt)=>De.center-mt.center);let Ke=.61,It=2.58,Wt=It-Ke;for(let De of vt){let mt=De.center-De.width*.5,gt=De.center+De.width*.5;if(fe(g,ut,mt,k,Z,d),A((ut+mt)/2,g+.04,k+.17,mt-ut,.34,.11,8484463),ut=gt,De.door)continue;J(De.center,g,De.width,ye,k,Ke,d),J(De.center,g,De.width,ye,k+It,Z-It,d);let at=C(De.center,g+.068,k+(It+Ke)*.5);y(at.x,at.y,at.z,De.width,Wt,a);let Y=b(De.center,g,De.width,.2);p.push({x:Y.x,z:Y.z,w:Y.w,d:Y.d,y0:k+Ke,h:k+It,buildingId:t});for(let dt of[-1,0,1])A(De.center+dt*(De.width*.5-.042),g+.13,k+(It+Ke)*.5,.07,Wt,.084,5989472);for(let dt of[Ke,It])A(De.center,g+.13,k+dt,De.width+.07,.081,.096,7831928);A(De.center,g+.17,k+Ke-.025,De.width+.2,.091,.25,10065280);let Dt=g-.48;A(De.center,Dt,k+.83,De.width-.24,.078,.45,11771260);for(let dt of[-.78,-.39,.39,.78])A(De.center+dt,Dt,k+.95+(Math.abs(dt)<.5?.055:0),.23,.26,.26,e.awning??12089684)}fe(g,ut,D,k,Z,d),A((ut+D)/2,g+.04,k+.17,D-ut,.34,.11,8484463),z(K,g,k+2.22+(Z-2.22)/2,1.28,Z-2.22,.21,d);for(let De of[F+.17,D-.17])A(De,g+.11,k+Z/2,.22,Z,.17,ui(d));A(0,g+.07,k+4.16-.05,r+.25,.22,.13,ui(d));for(let De of[F,D]){let mt=De===F?-1:1;for(let gt of[S+2.3,g-2.3])A(De+mt*.13,gt,k+1.7,.06,1.2,1.4,5195585),A(De+mt*.16,gt,k+1.7,.04,1.04,1.22,5073522),A(De+mt*.2,gt,k+1.03,.16,.09,1.56,ui(d))}let Xt=C(0,S+1.89,k);Xt.angle=a;let Rt=C(0,g+.18,k+4.16-.64);h(l,Rt.x,Rt.y,Rt.z,a,3232851,Math.min(5.25,r-.72),.58),A(0,g+.6,k+4.16-1.37,r-.56,.19,1.22,e.awning??7820863,!0);for(let De=F+.68;De<D-.42;De+=.46)A(De,g+1.21,k+4.16-1.46,.225,.23,.062,14006413);z(.46,S+3,k+.55,4.4,1.1,.7,6968131),A(.46,S+3,k+1.15,4.58,.14,.79,12166795,!0),A(1.33,S+3.02,k+1.42,.48,.41,.36,4083022),A(1.33,S+3.22,k+1.58,.34,.19,.051,7968922);for(let De of[F+.46,D-.46])for(let mt of[S+1.75,S+4.2]){z(De,mt,k+.83,.61,1.66,1.79,7037271);for(let gt=0;gt<3;gt++)for(let at of[-.55,-.17,.22,.57]){let Y=[12490344,11953479,5997179][(Math.floor((at+.6)*2.3)+gt)%3];A(De+(De<0?.37:-.37),mt+at,k+.47+gt*.43,.15,.25,.22,Y)}}for(let De of[-.26,.26])A(De*r,0,k+4.16-.23,.32,.085,1.91,16245436);A(0,g-.8,k+.009,1.71,.016,.87,5863786);let ne=k+4.16;z(0,0,ne-.053,r+.17,.2,o+.17,8613472,!1);for(let De of[F,D])A(De,0,ne+.28,.25,.59,o+.15,ui(d),!0);for(let De of[S,g])A(0,De,ne+.28,r+.2,.59,.25,ui(d),!0);return A(D-1.5,S+1.45,ne+.46,1.34,.64,1.21,8418922,!0),A(D-1.5,S+1.45,ne+.82,1.14,.08,1.05,10261379),A(F+1.52,S+1.55,ne+.39,.56,.57,.57,4873822,!0),{id:t,kind:c,label:l,entry:ve,outside:Ve,inside:rt,approach:qe,resident:null,clerk:Xt,doorIds:[ge.id],units:[]}}function V(B,Z){let k=C(B,Z,.228);return[k.x,k.z]}}function kf(n,e){let t=0;for(let i of n)t=t*31+i.charCodeAt(0)>>>0;return e[t%e.length]}function ui(n){let e=Math.min(255,(n>>16&255)+26),t=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return e*65536+t*256+i}var Vf=(n,e)=>[Math.floor((n-e*.5-1.1)/10),Math.floor((n+e*.5+1.1)/10)];function oc(n){let e=new Map;for(let t of n){let[i,s]=Vf(t.x,t.w),[r,o]=Vf(t.z,t.d);for(let a=i;a<=s;a++)for(let c=r;c<=o;c++){let l=a+","+c;e.has(l)||e.set(l,[]),e.get(l).push(t)}}return(t,i)=>e.get(Math.floor(t/10)+","+Math.floor(i/10))??[]}var Hf=(n,e,t)=>Math.abs(n-t.x)<t.w*.5+.002&&Math.abs(e-t.z)<t.d*.5+.002,uv=n=>n&&n.health!==0&&!n.seated;function Wf(n,e,t,i,s){let r=oc(n),o=oc(e),a=oc(t),c=oc(i.map(v=>v.closedSolid)),l=new Map(i.map(v=>[v.id,v])),d=v=>{let E=l.get(v.doorId);return!E.breached&&E.openAmount<1.06},f=n.filter(v=>(v.y0??0)<.95&&v.h>.28&&!v.stair);function p(v,E,b=0){let g=s(v,E);for(let S of o(v,E))S.y>g&&S.y<=b+.305&&Hf(v,E,S)&&(g=S.y);return g}function m(v,E,b=0){let g=F=>!F.stair&&(!F.walkSurface||F.h>b+.305)&&(F.y0??0)<b+1.72&&F.h>b+.13,S=r(v,E).filter(g);for(let F of c(v,E))g(F)&&d(F)&&S.push(F);return S}function h(v,E,b=0){let g=null;for(let S of a(v,E))S.floor<=b+.14&&S.ceiling>=b&&Hf(v,E,S)&&(!g||S.floor>g.floor)&&(g=S);return g}function y(v,E,b,g=.3,S=!1){let F=D=>E>=(D.y0??0)-g&&E<=D.h+g&&Math.abs(v-D.x)<D.w*.5+g&&Math.abs(b-D.z)<D.d*.5+g;for(let D of r(v,b))if(!(D.off||D.prop||D.walkSurface||D.stair)&&F(D))return!0;if(S){for(let D of c(v,b))if(F(D))return!0}return!1}function x(){return i.map(v=>v.closedSolid).filter(d)}function _(v){let E=l.get(v);return!E||!E.private||E.breached?!1:(E.breached=!0,E.hold=1/0,!0)}function w(v,E){for(let b of i){let g=b.breached||b.normallyOpen;b.hold=Math.max(0,b.hold-v);for(let F of E){if(g||!uv(F))continue;let D=F.floorY??F.y??0;if(Math.abs(D-b.base)>.64)continue;let A=F.x-b.x,z=F.z-b.z,W=A*A+z*z;if(W>3.68)continue;let L=F.buildingId===b.buildingId&&(!b.unitId||F.unitId===b.unitId),G=A*b.normalX+z*b.normalZ<-.22;(!b.private||L||G&&W<2.43||b.opened&&W<1.92)&&(g=!0,b.hold=1.1)}let S=g||b.hold>0?1.48:0;b.openAmount+=(S-b.openAmount)*(1-Math.exp(-v*13)),b.opened=b.openAmount>=1.06,b.door.rotation.y=b.angle+b.openAmount}}function C(){for(let v of i)v.breached=!1,v.hold=0,v.opened=v.normallyOpen,v.openAmount=v.normallyOpen?1.48:0,v.door.rotation.y=v.angle+v.openAmount}return{vehicleSolids:f,floorAt:p,walkSolids:m,interiorAt:h,closedDoorSolids:x,breachDoor:_,updateDoors:w,resetDoors:C,viewBlocked:y}}var su=3751484,dv={box:new an,cylinder:new Pn(1,1,1,10),pole:new Pn(.8,1,1,8),foliage:new ki(1,1)},Ar={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function Er(n){let e=n.map(([t,i,s,r,o,a,c,l,d=0,f=0])=>{let p=dv[t],m=p.index?p.toNonIndexed():p.clone(),h=new wt().compose(new X(i,s,r),new tn().setFromEuler(new oi(d,f,0,"YXZ")),new X(o,a,c));m.applyMatrix4(h);let y=new $e(l),x=new Float32Array(m.attributes.position.count*3);for(let _=0;_<x.length;_+=3)x[_]=y.r,x[_+1]=y.g,x[_+2]=y.b;m.setAttribute("color",new jt(x,3));for(let _ of Object.keys(m.attributes))["position","normal","color"].includes(_)||m.deleteAttribute(_);return m});return Ql(e)}var Xf={lamp:()=>Er([["pole",0,2.25,0,.083,4.5,.083,su],["box",.35,4.36,0,.79,.075,.075,su],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>Er([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,su])]),bin:()=>Er([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>Er([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>Er([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>Er([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,e)=>{let t=e*Math.PI*2/7;return["foliage",Math.sin(t)*.86,4.55,Math.cos(t)*.86,.42,.24,1.58,[3432266,4879699,7111766][e%3],0,t]})])};function qf(n,e,t){let i=[],s={},r=new Kt({vertexColors:!0,roughness:.84}),o=new wt,a=new X,c=new tn,l=new X,d=new tn,f=new tn,p=new X,m=new X(0,1,0),h=!1;function y(b,g,S,F=0,D=1,A){let z=t(g,S),W={x:g,z:S,w:A?.w??Ar[b].radius*2,d:A?.d??Ar[b].radius*2,y0:z,h:z+(A?.h??1),prop:b};e.push(W),i.push({kind:b,x:g,z:S,y:z,rotation:F,scale:D,solid:W,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function x(b){d.setFromAxisAngle(m,b.rotation+b.spin),p.set(b.axisX,0,b.axisZ),f.setFromAxisAngle(p,b.tilt),c.multiplyQuaternions(f,d);let g=Ar[b.kind].radius;a.set(b.x,b.y+Math.sin(b.tilt)*g+b.lift,b.z),l.setScalar(b.scale),o.compose(a,c,l),s[b.kind].setMatrixAt(b.index,o),s[b.kind].instanceMatrix.needsUpdate=!0}function _(){for(let b of Object.keys(Xf)){let g=i.filter(F=>F.kind===b);if(!g.length)continue;let S=new In(Xf[b](),r,g.length);S.castShadow=!0,S.receiveShadow=!0,s[b]=S,g.forEach((F,D)=>{F.index=D,x(F)}),S.computeBoundingSphere(),n.add(S)}}function w(b,g,S){let F=Ar[b.kind];b.broken=!0,b.solid.off=!0,b.clock=0;let D=.55+Math.random()*.25;b.vx=g.vx*D,b.vz=g.vz*D;let A=Math.max(.01,Math.hypot(g.vx,g.vz));b.axisX=g.vz/A,b.axisZ=-g.vx/A,b.spinRate=(Math.random()-.5)*(b.kind==="bin"?7:2),b.lift=0,b.liftSpeed=b.kind==="bin"||b.kind==="bollard"?Math.min(3.2,S*.22):0;let z=1-F.mass;return g.vx*=z,g.vz*=z,F.damage&&(g.integrity=Math.max(0,g.integrity-F.damage*Math.min(1.6,S/F.speed))),g.impact=Math.max(g.impact,F.mass>.2?4.5:0),h=!0,{kind:b.kind,heavy:F.mass>.2,x:b.x,z:b.z}}function C(b,g,S){let F=[];for(let A of g){let z=Math.hypot(A.vx,A.vz);if(z<.6)continue;let W=z*b*2+.2;for(let L of i){if(L.broken||Math.abs(L.x-A.x)>3.6||Math.abs(L.z-A.z)>3.6)continue;let G={x:A.x+A.vx*b,z:A.z+A.vz*b,angle:A.angle,kind:A.kind};Yi(G,L.x,L.z,Ar[L.kind].radius+W)&&z>=Ar[L.kind].speed&&F.push(w(L,A,z))}}for(let A of i)if(A.broken)if(A.clock+=b,A.clock<2.5){let z=Math.exp(-b*(A.tilt>1.2?6:2.2)),W=A.x+A.vx*b,L=A.z+A.vz*b;A.x=W,A.z=L,A.vx*=z,A.vz*=z,A.spin+=(A.spinRate??0)*b*z,A.tilt=Math.min(Math.PI/2,A.tilt+b*(1.1+A.tilt*3.2)),A.liftSpeed&&(A.lift=Math.max(0,A.lift+A.liftSpeed*b),A.liftSpeed-=9.8*b,A.lift===0&&A.liftSpeed<0&&(A.liftSpeed=0)),x(A)}else A.clock>50&&Math.hypot(S.x-A.solid.x,S.z-A.solid.z)>38&&g.every(z=>Math.hypot(z.x-A.solid.x,z.z-A.solid.z)>3)&&v(A);let D=h;return h=!1,{events:F,shadow:D}}function v(b){Object.assign(b,{broken:!1,x:b.solid.x,z:b.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),b.solid.off=!1,x(b),h=!0}function E(){for(let b of i)b.broken&&v(b)}return{add:y,finalize:_,update:C,reset:E,items:i}}var Cr=20;function Yf(n,e,t){let r=((n+e)%Cr+Cr)%Cr-(t==="z"?0:10);return r>=0&&r<7?"green":r>=7&&r<9?"yellow":"red"}var fv={red:[new $e(1,.12,.08),new $e(.2,.05,.05)],yellow:[new $e(1,.72,.1),new $e(.2,.16,.05)],green:[new $e(.2,1,.45),new $e(.05,.17,.08)]};function Zf(n,e){let t=[];for(let h of qn)for(let y of qn)t.push({id:h+","+y,x:h,z:y,offset:((h*7+y*3)%Cr+Cr)%Cr});let i=[[-6.1,-6.1,Math.PI,"z"],[6.1,6.1,0,"z"],[-6.1,6.1,-Math.PI/2,"x"],[6.1,-6.1,Math.PI/2,"x"]],s=t.length*i.length,r=new In(new Pn(.07,.08,3.3,8),new Kt({color:3093555,roughness:.6}),s),o=new In(new an(.34,.95,.26),new Kt({color:1909024,roughness:.7}),s),a=new In(new Pn(.105,.105,.06,12),new Jt({color:16777215}),s*3),c=new Vt,l=[],d=0;for(let h of t)for(let[y,x,_,w]of i){let C=h.x+y,v=h.z+x;c.position.set(C,1.65+.16,v),c.rotation.set(0,_,0),c.scale.set(1,1,1),c.updateMatrix(),r.setMatrixAt(d,c.matrix),c.position.set(C,3.25+.16,v),c.updateMatrix(),o.setMatrixAt(d,c.matrix),["red","yellow","green"].forEach((E,b)=>{c.position.set(C+Math.sin(_)*.14,3.25+.16+.29-b*.29,v+Math.cos(_)*.14),c.rotation.set(Math.PI/2,_,0,"YXZ"),c.updateMatrix(),a.setMatrixAt(d*3+b,c.matrix),l.push({junction:h,axis:w,color:E,state:""})}),e.push({x:C,z:v,w:.2,d:.2,h:3.5,signal:!0}),d++}r.castShadow=o.castShadow=!0,n.add(r,o,a);let f=new Map(t.map(h=>[h.id,h])),p=0;function m(h){p+=h;let y=!1;l.forEach((x,_)=>{let C=Yf(p,x.junction.offset,x.axis)===x.color,v=C?"on":"off";x.state!==v&&(x.state=v,a.setColorAt(_,fv[x.color][C?0:1]),y=!0)}),y&&a.instanceColor&&(a.instanceColor.needsUpdate=!0)}return m(0),{update:m,state(h,y){let x=f.get(h);return x?Yf(p,x.offset,y):"green"},reset(){p=0,m(0)}}}var ac=473021;function vn(){return ac=Math.imul(1664525,ac)+1013904223>>>0,ac/4294967296}var Bs=n=>n[Math.floor(vn()*n.length)];function Jf(n){ac=473021,n.background=new $e(15316107),n.fog=new ro(15316107,.0068),n.add(new vo(15266035,7890017,2.3));let e=new So(16763540,3);e.position.set(-45,48,-32),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),e.shadow.bias=-35e-5,e.shadow.normalBias=.12,e.shadow.mapSize.set(2048,2048),e.shadow.autoUpdate=!1,n.add(e);let t=new Ct(new os(330,32,16),new Un({side:yn,depthWrite:!1,uniforms:{sun:{value:new X(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));t.frustumCulled=!1,t.renderOrder=-100,n.add(t);let i=[],s=[],r=[],o=[],a={},c={box:new an,foliage:new ki(1,1),pole:new Pn(.8,1,1,8),hill:new os(1,14,9),prism:pv()},l=new Vt;function d(L,G,V,B,Z,k,K,ie,j,ye=0,J=0){let fe=G===0&&B===0?"center":Math.round(G/31)+","+Math.round(B/31),Ee=L+":"+!!j+":"+fe,ge=a[Ee]??={shape:L,shadow:!!j,items:[]};l.position.set(G,V,B),l.scale.set(Z,k,K),l.rotation.set(J,ye,0,"YXZ"),l.updateMatrix(),ge.items.push({matrix:l.matrix.clone(),color:new $e(ie)})}function f(L,G,V,B,Z,k,K,ie=!1,j=0,ye=0,J="box"){d(J,L,G,V,B,Z,k,K,ie,j,ye)}function p(L,G,V,B,Z,k,K){f(L,G,V,B,Z,k,K,!0),i.push({x:L,z:V,w:B,d:k,y0:G-Z/2,h:G+Z/2})}let m=qf(n,i,zn);function h(L,G,V=!1){m.add(V?"palm":"tree",L,G,vn()*6.28,.82+vn()*.36,{w:.45,d:.45,h:3.6})}function y(L,G,V,B,Z,k=1784375,K=4.2,ie=.65){let j=document.createElement("canvas");j.width=512,j.height=115;let ye=j.getContext("2d");ye.fillStyle="#e9d4a0",ye.fillRect(0,0,512,115),ye.strokeStyle="#645a47",ye.lineWidth=6,ye.strokeRect(7,7,498,101),ye.font="900 50px system-ui",ye.textAlign="center",ye.textBaseline="middle",ye.fillStyle="#"+k.toString(16).padStart(6,"0"),ye.fillText(L,256,57,470);let J=new As(j);J.colorSpace=un;let fe=new Ct(new Nn(K,ie),new Jt({map:J}));fe.position.set(G,V,B),fe.rotation.y=Z,n.add(fe)}let x=new Pt;n.add(x);let _=[],w=new Nn,C=new Kt({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:Tn});function v(L,G,V,B,Z,k){let K=new Ct(w,C);K.position.set(L,G,V),K.scale.set(B,Z,1),K.rotation.y=k,n.add(K)}let E={box:f,solid:i,door:b,sign:y,glazing:v,support:s,volume:r};function b(L,G,V,B,Z,k=.228,K={}){let ie=new Pt,j=K.id??"door-"+_.length;ie.position.set(L,k,G);let ye=yt(ie,"box",Z,B*.5,1.088,0,B-.045,2.147,.074);ye.castShadow=!1;let J=yt(ie,"box",10191979,B*.5,1.47,-.04,B*.64,.56,.013);J.castShadow=!1;for(let rt of[-1,1])yt(ie,"box",10191195,B-.14,.99,rt*.046,.11,.13,.035).castShadow=!1,yt(ie,"box",12691318,B-.174,1.011,rt*.073,.132,.042,.037).castShadow=!1;let fe=L+Math.cos(V)*B*.5,Ee=G-Math.sin(V)*B*.5,ge=K.normallyOpen?1.48:0;ie.rotation.y=V+ge,n.add(ie);let ve={x:fe,z:Ee,w:Math.abs(Math.cos(V))*B+.083,d:Math.abs(Math.sin(V))*B+.083,y0:k,h:k+2.155,doorId:j,buildingId:K.buildingId??null},Ve={door:ie,id:j,x:fe,z:Ee,base:k,angle:V,openAmount:ge,opened:!!K.normallyOpen,breached:!1,private:!!K.private,normallyOpen:!!K.normallyOpen,hold:0,buildingId:K.buildingId??null,unitId:K.unitId??null,normalX:Math.sin(V),normalZ:Math.cos(V),handle:{x:L+Math.cos(V)*(B-.17),y:k+1.008,z:G-Math.sin(V)*(B-.17)},closedSolid:ve};_.push(Ve);for(let rt of[0,B])f(L+Math.cos(V)*rt,k+1.09,G-Math.sin(V)*rt,.105,2.18,.178,6640456,!1,V);return f(fe,k+2.185,Ee,B+.12,.11,.178,6640456,!1,V),Ve}function g(){let{x:L,z:G}=En,V=13216391;p(L,2.08,G,12,3.84,10,V),f(L,.39,G+5.03,12.04,.46,.08,8484463),f(L,4,G,12.06,1.7,9.98,V,!0,0,0,"prism"),f(L,4.06,G,12,1.84,10.7,9393216,!0,0,0,"prism"),f(L+3.6,4.9,G-2.2,.55,1.9,.55,9402986,!0),f(L,1.38,G+5.05,1.42,2.42,.1,5195585),f(L,1.31,G+5.09,1.1,2.2,.06,6903110),f(L,.18,G+5.35,1.7,.14,.62,8484463),f(L,2.85,G+5.45,1.9,.12,.86,14270112,!0);for(let B of[-3.6,3.6]){f(L+B,2.03,G+5.04,2.08,1.43,.1,5195585),f(L+B,2.03,G+5.07,1.86,1.21,.06,5073522),f(L+B,1.22,G+5.16,2.2,.09,.2,14270112);for(let Z of[-1,1])f(L+B+Z*1.17,2.03,G+5.07,.34,1.27,.05,6257514)}y("CASA 38",L+1.6,1.62,G+5.13,0,4868146,.92,.22),p(L+9.6,1.6,G-.4,6,3.2,8,12558975),f(L+9.6,3.27,G-.4,6.3,.16,8.3,8280646,!0),f(L+9.6,1.32,G+3.62,4.4,2.5,.08,9278614);for(let B=.3;B<2.6;B+=.28)f(L+9.6,B,G+3.67,4.3,.025,.02,7304824);f(L+9.6,.173,G+8.6,4.8,.03,9.8,10262154),y("GARAGEM",L+9.6,2.85,G+3.68,0,3881523,1.4,.26)}function S(){let L=Wi.z;f(2,.169,L,19,.045,22,6908773),p(-7.18,2.03,L,7.35,3.68,19.56,8886169),f(-7.18,3.98,L,7.62,.23,19.8,5406866),f(-3.46,1.35,L,.12,2.32,1.7,4413028),f(-2.5,3.33,L,7.1,.25,19.5,5401719,!0),p(-1.5,1.42,L-9.72,5.4,2.54,.35,8229008),p(-1.5,1.42,L+9.72,5.4,2.54,.35,8229008);for(let V of[-9.5,9.5])p(1.04,1.65,L+V,.28,3,.31,8689042);f(1.1,2.88,L,.25,.42,19.54,5994626),y("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,L,Math.PI/2,2704468,7.2,.63);for(let V of[-8.2,-3.95,.3,4.55,8.8])f(8.15,.208,L+V,5.3,.016,.1,14537646);for(let V of[-6.1,-1.85,2.4])f(5.5,.208,L+V,.1,.016,3.25,14537646);for(let V of[-6.8,-3.4,3.4,6.8])f(-3.46,1.87,L+V,.08,1.4,2.25,5195585),f(-3.43,1.87,L+V,.05,1.18,2.05,3626589);f(-3.52,.21,L+3.1,.64,.08,2.45,6446161)}f(0,-.3,0,720,.1,720,8880242),f(0,-.18,0,132,.34,132,4605770);for(let L=0;L<1250;L++){let G=vn()*130-65,V=vn()*130-65;f(G,.001,V,.04+vn()*.3,.007,.04+vn()*.3,Bs([5460823,4934733,4473414,5855058]),!1,vn()*6)}for(let L of qn)for(let G of ci){for(let V=-10;V<=10;V+=4)f(L,.014,G+V,.12,.015,1.82,14132838);for(let V of[-12.6,12.6])for(let B=-4.5;B<=4.5;B+=.9)f(L+B,.015,G+V,.45,.016,1.44,13156273)}for(let L of qn)for(let G of ci){for(let V=-10;V<=10;V+=4)f(G+V,.014,L,1.82,.015,.12,14132838);for(let V of[-12.6,12.6])for(let B=-4.5;B<=4.5;B+=.9)f(G+V,.015,L+B,1.44,.016,.45,13156273)}for(let L of ci)for(let G of ci){f(L,.067,G,27.1,.16,27.1,13022103),f(L,.125,G,26.7,.07,26.7,10721158);for(let V of[-12.25,12.25])for(let B=-12;B<=12;B+=2.1)f(L+V,.164,G+B,2.32,.008,.023,12956566),f(L+B,.164,G+V,.023,.008,2.32,12956566);if(L===Wi.x-2&&G===Wi.z)S();else if(L===En.x&&G===En.z)g();else if(L===0&&G===-38){for(let V of[-6,6]){f(L+V,.185,G,8.2,.08,19,7438938);for(let B of[-7,0,7])h(L+V,G+B,!0)}for(let V=-8;V<=8;V+=4)f(L,.177,G+V,3.1,.033,3.2,13218964);p(L,1.04,G-9.89,4.42,1.77,.18,9271651),y("PRA\xC7A DA BRASA",L,1.6,G-10,Math.PI)}else for(let V of[-1,1]){let B=L===0&&G===0&&V===1,Z=o.filter(ve=>ve.id.startsWith("lot-")||ve.id==="armory").length,k=Z+10,K=B?"armory":Z%5===1||Z%5===3?"shop":Z%5===0?"house":"apartments",ie=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],j=B?"armory":k===13?"barber":k===18?"clothes":k===21?"black":K==="shop"?"store":null,J={barber:"BARBEARIA DO Z\xC9",clothes:"MODA BRASA",black:"PENHORES 24H"}[j]??(K==="shop"?ie[Math.floor(Z/2)%ie.length]:K==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(Z/2)%6]:"CASA "+k),fe=Bs([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Ee=Gf(E,{id:B?"armory":"lot-"+k,kind:K,label:B?"LOJA DE ARMAS":J,x:L+V*(B?5.7:6.25),z:G+(B?-5.45:0),angle:V*Math.PI/2,w:B?11.35:(K==="house"?13.7:15.3)+vn()*.57,d:B?9.36:9.38+vn()*.25,color:fe,upperColor:Bs([12163192,10394757,12426376,11971991]),awning:Bs([7821376,6190959,10446933]),fabrics:Bs([7373431,8152675,9534300]),stories:Z%3===0?3:2,doorAt:B?0:void 0,open:K==="house"&&Z%3!==0});Ee.service=j,o.push(Ee);let ge=B?4.32:G+9.83;f(L+V*6.8,.168,ge,8.3,.017,2.51,10919820);for(let ve=-3.5;ve<=3.5;ve+=.7)f(L+V*6.8+ve,.18,ge,.022,.012,2.5,12169372)}for(let V of[-1,1]){let B=L+V*12.85,Z=G-V*9.85;m.add("lamp",B,Z,V>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),m.add("bench",L+V*9,G-V*12.5,V>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let k=L+V*10.1;m.add("bin",k,G-V*12.55,0,1,{w:.5,d:.5,h:.78}),m.add("bollard",k+.72,G-V*12.58,0,1,{w:.14,d:.14,h:.46}),L===En.x&&G===En.z&&V===1||h(L+V*9.4,G+V*12.6)}}for(let L=0;L<52;L++){let G=L/52*Math.PI*2,V=118+vn()*58,B=Bs([9670532,10525321,10001560,9212560]),Z=Math.sin(G)*V,k=Math.cos(G)*V;d("hill",Z,-1,k,12+vn()*33,3+vn()*22,10+vn()*20,B,!1,G);let K=4+vn()*16;f(Z,K*.5-1,k,3+vn()*9,K,4+vn()*8,Bs([10194306,8949389,10128258]),!1)}m.finalize();let F=Zf(n,i),D=new Kt({roughness:.88});for(let{shape:L,shadow:G,items:V}of Object.values(a)){let B=new In(c[L],D,V.length);V.forEach(({matrix:Z,color:k},K)=>{B.setMatrixAt(K,Z),B.setColorAt(K,k)}),B.castShadow=G,B.receiveShadow=!0,n.add(B)}let A=new Pt,z=new Ct(new go(1.6,1.85,40),new Jt({color:15794054,side:Tn,transparent:!0,opacity:.85,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.y=.26,A.add(z);let W=new Ct(new Cs(.43),new Jt({color:15794054}));return W.position.y=2.8,A.add(W),n.add(A),{solid:i,marker:A,beacon:W,sun:e,sky:t,houseRoof:x,bed:Rf,doors:_,buildings:o,props:m,signals:F,...Wf(i,s,r,_,zn)}}function pv(){let n=[-.5,0,-.5],e=[-.5,0,.5],t=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,e,t,i,r,s,n,r,i,n,t,r,e,r,t,e,s,r,n,s,e,n,i,s],a=new Yt;return a.setAttribute("position",new Tt(o.flat(),3)),a.computeVertexNormals(),a}var mv=n=>n===0?"gr\xE1tis":"R$ "+n.toLocaleString("pt-BR"),gv=n=>"#"+n.toString(16).padStart(6,"0");function Kf(n,{balance:e,onClose:t}){let i=n.querySelector("#shop-title"),s=n.querySelector("#shop-detail"),r=n.querySelector("#shop-balance"),o=n.querySelector("#shop-list"),a=n.querySelector("#shop-status"),c=null,l=null;function d(p){let m=p?document.activeElement?.getAttribute("data-key"):null,h=l();c=h,i.textContent=h.title,s.textContent=h.note??"",r.textContent=e(),o.replaceChildren(),h.sections.forEach((_,w)=>{let C=document.createElement("h3");C.textContent=_.title,o.append(C),_.items.forEach((v,E)=>{let b=document.createElement("div");b.className="store-row"+(v.active?" active":"");let g=document.createElement("button");g.type="button",g.className="store-item",g.dataset.key=w+":"+E,g.disabled=!!v.disabled,g.innerHTML="";let S=document.createElement("span");S.textContent=v.label+(v.active?" \xB7 em uso":"");let F=document.createElement("b");if(F.textContent=mv(v.price),g.append(S,F),v.detail){let D=document.createElement("small");D.textContent=v.detail,g.append(D)}if(g.addEventListener("click",()=>f(v,void 0)),b.append(g),v.colors){let D=document.createElement("div");D.className="swatches",v.colors.forEach((A,z)=>{let W=document.createElement("button");W.type="button",W.className="swatch",W.style.background=gv(A),W.dataset.key=w+":"+E+":"+z,W.setAttribute("aria-label",v.label+", cor "+(z+1)),W.disabled=!!v.disabled,W.addEventListener("click",()=>f(v,A)),D.append(W)}),b.append(D)}o.append(b)})}),((m?o.querySelector('[data-key="'+m+'"]'):null)??o.querySelector("button:not(:disabled)"))?.focus({preventScroll:!1})}function f(p,m){let h=p.buy(m);a.textContent=h??"Pronto!",a.classList.toggle("error",!!h),d(!0)}return{show(p){l=p,a.textContent="",d(!1),n.open||n.showModal()},close(){n.open&&n.close(),c=null,t()},move(p){let m=[...n.querySelectorAll("button:not(:disabled)")];if(!m.length)return;let h=m.indexOf(document.activeElement),y=m[(h+p+m.length)%m.length];y.focus(),y.scrollIntoView({block:"nearest"})},activate(){let p=document.activeElement;p&&n.contains(p)&&p.click()},refresh(){c&&d(!0)}}}var qo={sedan:{name:"Brasa",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[-.42,.06],[.42,.06],[-.42,-1.04],[.42,-1.04]],doors:4,handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[11422e3,4362871,13084242,5795484,9063749,14209732,3093558]},hatch:{name:"Pulga",category:"dia a dia",length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[-.38,.18],[.38,.18],[-.38,-.86],[.38,-.86]],doors:4,handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[14783826,6989496,14209732,11876922,9416794]},wagon:{name:"Perua",category:"dia a dia",length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3,cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[-.42,.1],[.42,.1],[-.42,-1],[.42,-1]],doors:4,handling:{top:26,accel:14,grip:8,mass:1.18},palette:[9799551,5143689,8219215,13023648],extras:["roofRack"]},taxi:{name:"T\xE1xi",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[-.42,.06],[.42,.06],[-.42,-1.04],[.42,-1.04]],doors:4,handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[15254855],extras:["taxi"]},pickup:{name:"Picape",category:"utilit\xE1rio",length:5.3,width:2,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[-.44,-.02],[.44,-.02]],doors:2,handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[7043674,9056042,14012354,3100527,3815994],extras:["bed"]},van:{name:"Furg\xE3o",category:"utilit\xE1rio",length:5.15,width:2,sill:.55,belt:1.06,roof:2,wheel:.41,wheelbase:3.15,cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[-.45,.85],[.45,.85]],doors:2,handling:{top:22,accel:11,grip:7,mass:1.6},palette:[15131350,10467269,13218682,7110499],extras:["box"]},suv:{name:"Jip\xE3o",category:"luxo / utilit\xE1rio",length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[-.45,.05],[.45,.05],[-.45,-1],[.45,-1]],doors:4,handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[2042416,14276303,6044462,3758922],extras:["roofRack","chrome"]},sport:{name:"Fa\xEDsca",category:"esportivo",length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[-.4,-.28],[.4,-.28]],doors:2,handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[14236459,15909424,3108822,16052714,2500907],extras:["spoiler"]},muscle:{name:"Trov\xE3o",category:"esportivo",length:4.95,width:2,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,cabin:{base:[-1.3,.5],top:[-1,-.02]},seats:[[-.42,-.45],[.42,-.45]],doors:2,handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[1908514,8199967,13855274,2972991],extras:["scoop","stripes"]},luxury:{name:"Imperador",category:"luxo",length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[-.44,.12],[.44,.12],[-.44,-1.08],[.44,-1.08]],doors:4,handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[1316376,15065818,3882821,4858664],extras:["chrome"]},convertible:{name:"Brisa",category:"luxo / esportivo",length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[-.4,-.12],[.4,-.12],[-.4,-1],[.4,-1]],doors:2,open:!0,handling:{top:34,accel:19,grip:9,mass:1.05},palette:[9425384,15328208,11872828,1851246],extras:["chrome"]}},$f={street:{name:"Rua",handling:{top:31,accel:19.7,grip:13.5,mass:.39}},sport:{name:"Raio",handling:{top:40,accel:24,grip:14.5,mass:.36}},chopper:{name:"Estradeira",handling:{top:29,accel:15,grip:12,mass:.45}},scooter:{name:"Mobilete",handling:{top:19,accel:10,grip:13,mass:.28}}};for(let[n,e]of Object.entries(qo))zf("car:"+n,{width:e.width/2+.02,length:e.length/2+.01,radius:e.width/2-0,offsets:[-(e.length/2-e.width/2),0,e.length/2-e.width/2],mass:e.handling.mass});var xv=new Kt({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:Tn,transparent:!0,opacity:.5,depthWrite:!1});function Yo(n,e="sedan",t,i=!1){let s=qo[e]??qo.sedan,r=t??s.palette[0],{length:o,width:a,sill:c,belt:l,roof:d,wheel:f,wheelbase:p}=s,m=o/2,h=s.extras??[],[y,x]=s.cabin.base,[_,w]=s.cabin.top,C=new Pt;ic(C,a/2+.17,m+.07);let v=new Pt;C.add(v);let E=(j,ye,J,fe,Ee,ge,ve,Ve,rt=!1)=>yt(v,j,ye,J,fe,Ee,ge,ve,Ve,rt),b=h.includes("chrome");E("box",2435629,0,(f*.32+c+.06)/2,0,a-.44,c+.06-f*.32,o-.9);for(let j of[-1,1])E("box",2830387,j*(a/2-.07),c-.06,0,.12,.22,Math.max(.4,p-2*f-.12));E("box",r,0,(c+l)/2,0,a,l-c,o,!0);let g=m-x-.03,S=E("box",r,0,l+.005,(x+m)/2,a-.04,.15,g,!0);!h.includes("bed")&&!h.includes("box")&&m+y>.25&&E("box",r,0,l-.005,(y-m)/2,a-.05,.14,m+y-.02,!0);let F=a/2-.07,D=a/2-.27,A=xv.clone(),z;if(s.open){let j=new Yt;j.setAttribute("position",new Tt([-F,l,x,F,l,x,D,d,w,-D,d,w],3)),j.setIndex([0,1,2,0,2,3]),j.computeVertexNormals(),z=new Ct(j,A),E("box",2895665,0,d,w,a-.5,.06,.07)}else{let j=new Yt;j.setAttribute("position",new Tt([-F,l-.015,y,F,l-.015,y,F,l-.015,x,-F,l-.015,x,-D,d,_,D,d,_,D,d,w,-D,d,w],3)),j.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),j.computeVertexNormals(),z=new Ct(j,A),E("box",r,0,d+.035,(_+w)/2,D*2+.02,.07,w-_+.08,!0);let ye=(J,fe,Ee)=>{let ge=d-l,ve=fe-J;for(let Ve of[-1,1])E("box",r,Ve*(F+D)/2,(l+d)/2,(J+fe)/2,.08,Math.hypot(ge,ve),Ee,!0).rotation.x=Math.atan2(ve,ge)};if(ye(x,w,.08),ye(y,_,.12),s.doors===4){let J=(s.seats[0][1]+s.seats[2][1])/2+.12;for(let fe of[-1,1])E("box",r,fe*(F+D)/2,(l+d)/2,J,.08,d-l,.1,!0)}}z.renderOrder=2,v.add(z);let W=Math.min(l-.395,d-.98),L=Math.min(.62,d-l-.02+.3);for(let[j,ye]of s.seats)E("box",3815219,j,W+.12,ye,.52,.12,.52),E("box",3815219,j,W+.12+L/2,ye-.3,.5,L,.12);E("box",2828840,0,l+.045,x-.24,a-.26,.14,.34);let G=E("cylinder",1907997,s.seats[0][0],l+.07,s.seats[0][1]+.42,.17,.03,.17);G.rotation.x=Math.PI/2-.45,E("box",3355961,0,l-.24,m+.004,a*.44,.14,.05),E("box",13156268,0,c+.035,m+.006,a*.98,.1,.045,!0),E("box",13156268,0,c+.025,-m-.006,a*.98,.1,.05,!0),E("box",16707771,0,(c+l)/2,-m-.008,.4,.14,.03);for(let j of[-1,1]){E("box",16769956,j*(a/2-.29),l-.165,m+.006,.43,.17,.055,!0),E("box",11021858,j*(a/2-.3),l-.165,-m-.006,.48,.17,.055,!0),s.open||E("box",2898236,j*(a/2+.03),l+.07,x-.06,.1,.09,.16);let ye=s.doors===4?[x,(s.seats[0][1]+s.seats[2][1])/2+.12,y+.05]:[x,s.seats[0][1]-.62];for(let J of ye)E("box",1843234,j*(a/2+.005),(c+l)/2,J,.012,l-c-.02,.025);for(let J=0;J<ye.length-1;J++)E("box",13089700,j*(a/2+.01),l-.05,ye[J+1]+.25,.035,.04,.22,!0);b&&E("box",14277074,j*(a/2+.008),l-.03,0,.02,.03,o-.5,!0)}if(h.includes("taxi")&&(E("box",16249304,0,d+.16,(_+w)/2,.68,.2,.26),E("box",2779715,0,(c+l)/2+.06,0,a+.012,.08,o*.6,!0)),h.includes("spoiler")){for(let j of[-1,1])E("box",1776670,j*.6,l+.14,-m+.28,.06,.22,.08);E("box",r,0,l+.27,-m+.25,a-.2,.05,.32,!0)}if(h.includes("scoop")&&E("box",2105892,0,l+.12,(x+m)/2+.1,.5,.12,.62),h.includes("stripes"))for(let j of[-1,1])E("box",15855590,j*.2,l+.083,(x+m)/2,.16,.012,g),E("box",15855590,j*.2,d+.072,(_+w)/2,.16,.012,w-_);if(h.includes("roofRack"))for(let j of[-1,1])E("box",2500907,j*(D-.08),d+.1,(_+w)/2,.05,.06,w-_+.2);if(h.includes("bed")){for(let j of[-1,1])E("box",r,j*(a/2-.04),l+.22,(y-m)/2,.08,.44,m+y,!0);E("box",r,0,l+.22,-m+.04,a,.44,.08,!0),E("box",r,0,l+.22,y-.04,a,.44,.08,!0),E("box",2960169,0,l+.01,(y-m)/2,a-.16,.02,m+y-.12)}if(h.includes("box")){E("box",r,0,(l+2.15)/2,(y+.25-m)/2,a,2.15-l,m+y+.25,!0),E("box",2763306,0,2.15-.05,(y+.25-m)/2,a+.02,.04,m+y+.27);for(let j of[-1,1])E("box",1843234,j*.005,(l+2.1)/2,-m-.004,.015,2-l,.02)}let V=[];for(let j of[-1,1])for(let ye of[-p/2,p/2]){let J=new Pt;J.position.set(j*(a/2-.17),f,ye),C.add(J),yt(J,"cylinder",2434600,0,0,0,f,.24,f).rotation.z=Math.PI/2,yt(J,"cylinder",b?14013903:11052964,j*.115,0,0,f*.53,.02,f*.53,!0).rotation.z=Math.PI/2,V.push(J)}let B=new Pt,Z=s.doors===4?(s.seats[0][1]+s.seats[2][1])/2+.12:s.seats[0][1]-.62;B.position.set(-(a/2+.004),0,x),yt(B,"box",r,0,(c+l)/2+.04,-(x-Z)/2,.036,l-c-.1,x-Z,!0),hi(B,Xi(B),nc),v.add(B);let k=[1,-1].map(j=>{let ye=new Pt;return ye.position.set(0,c-.09,j*(m-.2)),yt(ye,"box",b?13619144:2830387,0,0,0,a-.08,.3,.42,b),hi(ye,Xi(ye),b?nc:void 0),v.add(ye),{mesh:ye,end:j,state:0,home:ye.position.clone(),damage:0,velocity:new X,spin:0}}),K=[];i&&(K.push(E("box",15550262,-.33,d+.13,(_+w)/2,.55,.14,.25)),K.push(E("box",5487086,.33,d+.13,(_+w)/2,.55,.14,.25)));let ie=Xi(v).filter(j=>j!==z&&j!==S&&!K.includes(j));hi(v,ie.filter(j=>j.material.metalness===0)),hi(v,ie.filter(j=>j.material.metalness>0),nc);for(let j of V)hi(j,Xi(j));return v.traverse(j=>{j instanceof Ct&&(j.castShadow=!1)}),n.add(C),tp({root:C,body:v,cabin:z,cracks:[],wheels:V,lamps:K,hood:S,bumpers:k,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"car",model:e,shape:"car:"+e,spec:s,color:r,handling:s.handling,rider:null,door:B,doorTime:0,wheelSpin:0,handlebar:null,wheelRadius:f,wheelbase:p,halfWidth:a/2,halfLength:m,seatHip:W,flat:[!1,!1,!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}function tp(n){let e=n;return e.repair=()=>_v(e),e}var jf=new Kt({color:2038810,roughness:1,metalness:.05});function np(n){n.originals??=new Map,n.root.traverse(e=>{!(e instanceof Ct)||e===n.cabin||e.material===jf||e.parent===n.root&&e.geometry.type==="CircleGeometry"||(n.originals.set(e,e.material),e.material=jf)}),n.cabin&&(n.cabin.visible=!1);for(let e of n.cracks)e.visible=!1}function _v(n){n.flat?.fill(!1);for(let[e,t]of n.originals??[])e.material=t;n.originals?.clear(),n.cabin&&(n.cabin.visible=!0);for(let e of n.bumpers??[])n.body.add(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.state=0,e.damage=0;Object.assign(n,{damageFront:0,damageRear:0,burning:!1,wrecked:!1,fire:0,wreckClock:0})}function lc(n,e,t="street"){let i=$f[t]??$f.street,s=new Pt;ic(s,.42,1.07*1.07);let r=new Pt;s.add(r);let o=(m,h,y,x,_,w,C,v)=>yt(r,m,h,y,x,_,w,C,v),a=t==="scooter"?.25:t==="chopper"?.36:.33,c=t==="chopper"?[-.86,.98]:t==="scooter"?[-.62,.66]:[-.73,.78];t==="scooter"?(o("box",e,0,.42,-.25,.38,.34,.8),o("box",2763821,0,.34,.2,.36,.08,.55),o("box",e,0,.72,.52,.34,.68,.16),o("box",2369834,0,.78,-.32,.34,.12,.55),o("box",13940106,0,.92,.66,.22,.14,.08)):t==="chopper"?(o("box",3882300,0,.46,-.1,.3,.34,.7),o("sphere",e,0,.86,.32,.22,.18,.5),o("box",2369834,0,.68,-.42,.38,.1,.62),o("box",e,0,.62,-.86,.3,.16,.5),o("box",14079696,.22,.34,-.42,.1,.1,.95),o("box",13940106,0,.9,1.02,.22,.2,.1)):(o("box",3882300,0,.48,-.04,.32,.38,.7),o("sphere",e,0,.89,.34,.24,.23,.46),o("box",2369834,0,.85,-.36,.36,.13,.59),o("box",e,0,.65,-.7,.32,.17,.58),o("box",13940106,0,.8,.88,.25,.21,.11),t==="sport"&&(o("box",e,0,.72,.62,.42,.5,.5),o("box",2902871,0,1.04,.72,.34,.18,.06),o("box",e,0,.8,-.72,.28,.12,.5))),o("box",10433836,0,.7,c[0]-.25,.2,.11,.11);let l=new Pt;l.position.set(0,.76,.38),yt(l,"box",3949122,0,.44,-.09,t==="chopper"?.84:.684,.057,.059),yt(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,hi(l,Xi(l)),r.add(l),o("box",5461330,0,.39,-.22,.52,.07,.11),t!=="scooter"&&o("box",11578016,.232,.36,-.54,.12,.12,.72);let d=new Ct(new an(.01,.01,.01));d.visible=!1,r.add(d);let f=[];for(let m of c){let h=new Pt;h.position.set(0,a,m),yt(h,"cylinder",2434601,0,0,0,a,.12,a).rotation.z=Math.PI/2,yt(h,"cylinder",8750213,0,0,0,a*.62,.14,a*.62).rotation.z=Math.PI/2,hi(h,Xi(h)),f.push(h),r.add(h);let y=m>0?t==="chopper"?-.62:-.21:.46;o("box",5988704,0,a+.22,m+(t==="chopper"&&m>0?-.18:0),.09,t==="chopper"&&m>0?.8:.49,.085).rotation.x=y}hi(r,Xi(r).filter(m=>m!==d));let p=new Pt;return n.add(s),tp({root:s,body:r,cabin:null,cracks:[],wheels:f,lamps:[],hood:d,bumpers:[],speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"bike",model:t,shape:"bike",spec:i,color:e,handling:i.handling,rider:null,door:p,doorTime:0,wheelSpin:0,handlebar:l,wheelRadius:a,wheelbase:c[1]-c[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}var yv=new X,vv=new tn;function ip(n,e,t){let i=e.spec.seats?.[t]??e.spec.seats?.[e.spec.seats.length-1];if(!i)return;let[s,r]=i,o=n.root.scale.y||1;e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(yv.set(s,e.seatHip-.94*o,r))),n.root.quaternion.copy(e.body.getWorldQuaternion(vv)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.rifle&&(n.rifle.visible=!1);let a=e.spec.roof-e.seatHip<1;n.body.position.set(0,0,0),n.body.rotation.set(a?-.3:-.12,0,0);for(let c=0;c<2;c++)n.legs[c].rotation.set(-1.42,0,(c?1:-1)*.06),n.shins[c].rotation.set(a?.35:.95,0,0),t===0?(n.arms[c].rotation.set(-.62,0,(c?-1:1)*.18),n.forearms[c].rotation.set(-.85,0,0)):(n.arms[c].rotation.set(-.32,0,(c?-1:1)*.08),n.forearms[c].rotation.set(-1.05,0,0))}var Qf=null,Mv=new Nn(.28,.28),Wo=new X,ep=new X,Xo=new X;function bv(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="rgba(235,242,240,.9)",e.lineWidth=1.6,e.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;e.moveTo(64,64);for(let r=1;r<=4;r++)e.lineTo(64+Math.cos(s+Math.sin(r*3.1+i)*.12)*r*14,64+Math.sin(s+Math.cos(r*2.3+i)*.12)*r*14)}for(let i of[9,20,33]){e.moveTo(64+i,64);for(let s=1;s<=24;s++)e.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}e.stroke(),e.fillStyle="rgba(250,250,245,.95)",e.beginPath(),e.arc(64,64,3.2,0,Math.PI*2),e.fill();let t=new As(n);return t.colorSpace=un,new Jt({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Tn})}function ru(n,e){if(!n.cabin||!e)return;Qf??=bv(),n.root.updateMatrixWorld(!0),Xo.set(e[0],e[1],e[2]),n.body.worldToLocal(Xo);let[t,i]=n.spec.cabin.top;ep.set(0,(n.spec.belt+n.spec.roof)/2,(t+i)/2),Wo.subVectors(Xo,ep),Wo.y*=.35,Wo.normalize();let s=new Ct(Mv,Qf);s.position.copy(Xo).addScaledVector(Wo,.015),s.lookAt(Xo.clone().add(Wo)),s.rotation.z=Math.random()*Math.PI*2,s.renderOrder=3,n.body.add(s),n.cracks.push(s),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function sp(n){let{belt:e,roof:t,width:i,cabin:s}=n.spec,r=Math.min(s.base[0],s.top[0]),o=Math.max(s.base[1],s.top[1]);return{z:(r+o)/2,halfZ:(o-r)/2,y:(e+t)/2+.02,halfY:(t-e)/2,halfX:i/2-.1}}function ei(n,e,t=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,c=0,l=0,d=n.wheels.map(v=>{let{x:E,z:b}=v.position,g=zn(n.x+E*s+b*i,n.z-E*i+b*s);return b>0?o+=g:a+=g,E<0?c+=g:l+=g,g}),f=(o+a)/n.wheels.length;n.root.rotation.y=n.angle;let p=n.flat??[],m=r?0:((p[0]||p[2]?1:0)-(p[1]||p[3]?1:0))*.05;n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),n.wheelbase??2.64);let h=r?n.integrity<=0?1.25:-t*Math.min(.53,Math.abs(n.speed)*.039):t*Math.min(.09,Math.abs(n.speed)*.004),y=r?0:Math.atan2((l-c)*.5,(n.halfWidth??.97)*2)+m;n.body.rotation.z+=(h+y-n.body.rotation.z)*(e>0?Math.min(1,e*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-e),n.door.rotation.y=Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let x=n.wheelRadius??.408,_=r?n.body.rotation.z:0;n.root.position.set(n.x,f+(r?Math.abs(Math.sin(_))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=t*.22),n.wheelSpin=(n.wheelSpin+n.speed*e/x)%(Math.PI*2),n.wheels.forEach((v,E)=>{let b=p[E];r||(v.position.y=d[E]-f+x-(b?x*.28:0)),v.scale.set(1,b?.72:1,b?1.12:1),v.rotation.set(n.wheelSpin,v.position.z>0?t*(r?.22:.23):0,0,"YXZ")});let w=100-n.integrity;n.hood.rotation.x=w*.0031+(n.damageFront>30?.18:0),n.hood.rotation.z=w*.0013;let C=n.hoodSize??(n.hoodSize=n.hood.scale.clone());n.hood.scale.set(C.x,C.y*(1+Math.min(.6,(n.damageFront??0)*.012)),C.z*(1-Math.min(.12,(n.damageFront??0)*.002)));for(let v of n.bumpers??[])v.state===1&&(v.mesh.rotation.x=v.end*.32,v.mesh.position.y=v.home.y-.12)}var Sv=`
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
  }`,wv=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;function rp(n,e,t){let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3),c=new Float32Array(e),l=new Float32Array(e),d=new Float32Array(e),f=new Float32Array(e),p=new Float32Array(e),m=new Float32Array(e),h=new Float32Array(e),y=new Yt;y.setAttribute("position",new jt(i,3)),y.setAttribute("tint",new jt(s,3)),y.setAttribute("size",new jt(r,1)),y.setAttribute("alpha",new jt(o,1));let x=new Un({vertexShader:Sv,fragmentShader:wv,transparent:!0,depthWrite:!1,blending:t?wo:us,uniforms:{scale:{value:520}}}),_=new ho(y,x);_.frustumCulled=!1,_.visible=!1,_.renderOrder=4,n.add(_);let w=0;function C(b,g,S,F,D,A,z,W,L,G,V,B=0,Z=0){let k=w;w=(w+1)%e,i[k*3]=b,i[k*3+1]=g,i[k*3+2]=S,a[k*3]=F,a[k*3+1]=D,a[k*3+2]=A,s[k*3]=V.r,s[k*3+1]=V.g,s[k*3+2]=V.b,c[k]=z,l[k]=z,d[k]=W,f[k]=L,p[k]=G,m[k]=B,h[k]=Z,r[k]=W,o[k]=G,_.visible=!0}function v(b){let g=!1;for(let S=0;S<e;S++){if(c[S]<=0){o[S]!==0&&(o[S]=0,r[S]=0,g=!0);continue}g=!0,c[S]-=b;let F=Math.exp(-h[S]*b);a[S*3]*=F,a[S*3+2]*=F,a[S*3+1]=a[S*3+1]*F+m[S]*b,i[S*3]+=a[S*3]*b,i[S*3+1]+=a[S*3+1]*b,i[S*3+2]+=a[S*3+2]*b,m[S]<0&&i[S*3+1]<.05&&(i[S*3+1]=.05,a[S*3+1]*=-.3);let D=1-Math.max(0,c[S])/l[S];r[S]=d[S]+(f[S]-d[S])*D,o[S]=p[S]*(1-D)*(D<.12?D/.12:1)}if(g)for(let S of["position","size","alpha","tint"])y.attributes[S].needsUpdate=!0;_.visible=g}function E(){c.fill(0),o.fill(0),r.fill(0),y.attributes.alpha.needsUpdate=!0,_.visible=!1}return{spawn:C,update:v,clear:E,material:x}}function op(n){let e=rp(n,700,!1),t=rp(n,600,!0),i=new $e,s=(d,f)=>d+Math.random()*(f-d),r=320,o=new In(new Nn(1,1),new Jt({color:1315860,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),r);o.frustumCulled=!1,o.renderOrder=1;let a=new wt().makeScale(0,0,0);for(let d=0;d<r;d++)o.setMatrixAt(d,a);n.add(o);let c=0,l=new Vt;return{update(d){e.update(d),t.update(d)},clear(){e.clear(),t.clear();for(let d=0;d<r;d++)o.setMatrixAt(d,a);o.instanceMatrix.needsUpdate=!0},setScale(d){e.material.uniforms.scale.value=d,t.material.uniforms.scale.value=d},engineSmoke(d,f,p,m){i.setRGB(m?.16:.5,m?.15:.48,m?.14:.45),e.spawn(d+s(-.2,.2),f,p+s(-.2,.2),s(-.3,.3),s(.9,1.5),s(-.3,.3),s(1.6,2.4),.5,m?2.4:1.8,m?.5:.32,i,0,.6)},tireSmoke(d,f,p){i.setRGB(.78,.76,.72),e.spawn(d,f,p,s(-.6,.6),s(.3,.8),s(-.6,.6),s(.8,1.3),.4,1.6,.3,i,0,1.4)},sparks(d,f,p,m=12,h=4){for(let y=0;y<m;y++)i.setRGB(1,s(.55,.85),s(.15,.35)),t.spawn(d,f,p,s(-h,h),s(.5,h*.9),s(-h,h),s(.18,.45),.09,.03,1,i,-9.8,.4)},flame(d,f,p,m=1){i.setRGB(1,s(.35,.6),.08),t.spawn(d+s(-.35,.35)*m,f,p+s(-.35,.35)*m,s(-.2,.2),s(1.4,2.4),s(-.2,.2),s(.4,.75),.75*m,.2,.85,i,0,.8),Math.random()<.45&&(i.setRGB(.13,.12,.11),e.spawn(d,f+.6,p,s(-.3,.3),s(1.2,2),s(-.3,.3),s(1.8,2.8),.7,2.8,.45,i,0,.5))},explosion(d,f,p){i.setRGB(1,.9,.6),t.spawn(d,f+.6,p,0,0,0,.28,1.5,9,1,i);for(let m=0;m<46;m++){let h=Math.random()*Math.PI*2,y=s(.2,1),x=s(3,10);i.setRGB(1,s(.4,.75),s(.05,.2)),t.spawn(d,f+.5,p,Math.cos(h)*x*(1-y*.5),y*x,Math.sin(h)*x*(1-y*.5),s(.35,.8),s(.6,1.4),.2,.95,i,-2,1.5)}for(let m=0;m<30;m++){let h=Math.random()*Math.PI*2,y=s(1,4);i.setRGB(.1,.09,.085),e.spawn(d,f+.8,p,Math.cos(h)*y,s(1.5,4),Math.sin(h)*y,s(2.2,3.6),1.2,4.5,.7,i,0,.9)}this.sparks(d,f+.5,p,40,9)},skid(d,f,p,m,h=.012){let y=Math.hypot(p-d,m-f);y<.05||(l.position.set((d+p)/2,h+.013,(f+m)/2),l.rotation.set(-Math.PI/2,0,0),l.rotateZ(Math.atan2(p-d,m-f)),l.scale.set(.2,y+.04,1),l.updateMatrix(),o.setMatrixAt(c,l.matrix),c=(c+1)%r,o.instanceMatrix.needsUpdate=!0)}}}function cc(n,e,t,i){let s=Math.hypot(e,i),r=Math.sin(n.angle)*e+Math.cos(n.angle)*i,o=Math.cos(n.angle)*e-Math.sin(n.angle)*i;n.ragdoll={vx:e,vy:t,vz:i,y:n.ragdoll?.y??0,t:0,rest:0,rising:0,spinX:(r>=0?1:-1)*(2.5+s*.55),spinZ:-o*.35,tiltX:0,tiltZ:0},n.pushX=0,n.pushZ=0}function hc(n,e,t,i){let s=n.ragdoll;if(!s)return!1;s.t+=e;let r=n.model,o=s.y>.02||Math.abs(s.vy)>.4,a=n.x+s.vx*e,c=n.z+s.vz*e;if(i(a,n.z)?s.vx*=-.35:n.x=a,i(n.x,c)?s.vz*=-.35:n.z=c,s.vy-=9.8*e,s.y+=s.vy*e,s.y<=0){s.y=0,s.vy=Math.abs(s.vy)>2.2?-s.vy*.28:0;let f=Math.exp(-e*6);s.vx*=f,s.vz*=f,s.spinX*=Math.exp(-e*7),s.spinZ*=Math.exp(-e*7)}s.tiltX+=s.spinX*e,s.tiltZ+=s.spinZ*e;let l=!o&&Math.hypot(s.vx,s.vz)<.5;if(l){let f=Math.round(s.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;s.tiltX+=(f-s.tiltX)*Math.min(1,e*8),s.tiltZ+=(0-s.tiltZ)*Math.min(1,e*6),s.rest+=e}let d=Math.sin(s.tiltX)>=0?1:-1;if(n.health>0&&s.rest>1.1){s.rising+=e/.65;let f=Math.min(1,s.rising),p=Math.sign(Math.sin(s.tiltX))||1;if(s.tiltX=p*Math.PI/2*(1-f),s.tiltZ*=1-f,f>=1)return n.ragdoll=null,r.root.rotation.set(0,n.angle,0),!1}if(r.root.rotation.set(s.tiltX,n.angle,s.tiltZ),r.root.position.set(n.x,t+s.y+Math.abs(Math.sin(s.tiltX))*.17,n.z),o||!l){let f=s.t*13;r.body.position.set(0,0,0),r.body.rotation.set(Math.sin(f*.7)*.25,0,Math.cos(f*.6)*.2),r.arms[0].rotation.set(-1.4+Math.sin(f)*1.1,0,-.6-Math.cos(f*.8)*.5),r.arms[1].rotation.set(-1.2+Math.cos(f*1.1)*1.1,0,.6+Math.sin(f*.9)*.5),r.forearms[0].rotation.set(-.4-Math.sin(f*1.3)*.5,0,0),r.forearms[1].rotation.set(-.4-Math.cos(f*1.2)*.5,0,0),r.legs[0].rotation.set(Math.sin(f*.9)*.9,0,-.2),r.legs[1].rotation.set(-Math.sin(f*.8)*.9,0,.2),r.shins[0].rotation.set(.4+Math.abs(Math.sin(f))*.6,0,0),r.shins[1].rotation.set(.4+Math.abs(Math.cos(f))*.6,0,0),r.pistol.visible=!1,r.rifle&&(r.rifle.visible=!1)}else Go(r,2,d);return r.shadow.visible=!1,!0}var Rr=2.05,uc=7.15;function Tv(n){let e=[];return n.forEach((t,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(t[0]-s[0]),a=Math.sign(t[1]-s[1]),c=Math.sign(r[0]-t[0]),l=Math.sign(r[1]-t[1]),d={x:t[0]-a*Rr-o*uc,z:t[1]+o*Rr-a*uc},f={x:t[0]-l*Rr+c*uc,z:t[1]+c*Rr+l*uc},p=o===c&&a===l,m={x:t[0]-(p?a:a+l)*Rr,z:t[1]+(p?o:o+c)*Rr},h={x:t[0],z:t[1],id:t.join(",")};for(let y=0;y<=6;y++){let x=y/6,_=1-x;e.push({x:_*_*d.x+2*_*x*m.x+x*x*f.x,z:_*_*d.z+2*_*x*m.z+x*x*f.z,junction:h,curve:!p,angle:Math.atan2(o,a)})}}),e}var ks=(n,e,t,i)=>[[n,e],[n,i],[t,i],[t,e]],Av=[ks(-57,-57,57,57),ks(-57,-19,19,57).reverse(),ks(-19,-57,57,19),ks(-19,-19,19,19).reverse(),ks(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],ks(-57,-57,57,57).reverse(),ks(-19,-57,57,57).reverse()];function Ev(n){return n.flatMap((e,t)=>{let i=n[(t+1)%n.length],s=e[0]===i[0]?1:0,r=1-s,o=qn.filter(a=>a>Math.min(e[s],i[s])&&a<Math.max(e[s],i[s]));return i[s]<e[s]&&o.reverse(),[e,...o.map(a=>r===0?[e[0],a]:[a,e[1]])]})}var Cv=Av.map(n=>Tv(Ev(n))),Rv=[1,3,1,1,5,5,7,10];function Ir(n,e,t=0){let i=Cv[e],s=(Rv[e]*7+t)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;Qn(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+e%4*1.02,stuck:0,routeIndex:e,pass:null},n.stolen=!1,n.abandoned=0}function fc(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=t*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:_t(s*1.9,-1,1),throttle:_t((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function ou(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=xs(n.shape??n.kind),a=n.kind==="bike",c=i;for(let l of e){if(l===n||he(l,n)>20)continue;let d=l.x-n.x,f=l.z-n.z,p=d*s+f*r,m=Math.abs(d*r-f*s),h=xs(l.shape??l.kind,l.angle-n.angle);if(p<.2||m>o.width+h.width+.16)continue;let y=Math.max(0,p-o.length-h.length-(a?.39:.64)),x=Math.max(0,l.vx*s+l.vz*r);c=Math.min(c,x+y*.87)}for(let l of t){if(l.down>0||l.health<=0||l.seated||he(l,n)>11)continue;let d=l.x-n.x,f=l.z-n.z,p=d*s+f*r,m=Math.abs(d*r-f*s);p>0&&m<o.width+.4&&(c=Math.min(c,Math.max(0,p-o.length-.9)*.94))}return c}function ap(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...e.filter(l=>l!==n&&Math.hypot(l.vx,l.vz)<2).map(l=>({other:l,radius:1.05})),...t.filter(l=>l.down<=0&&l.health!==0&&!l.seated).map(l=>({other:l,radius:.43}))].find(({other:l,radius:d})=>{let f=l.x-n.x,p=l.z-n.z,m=f*s+p*r;return m>2.25&&m<13.4&&Math.abs(f*r-p*s)<d+1.05});if(!a)return null;let c=(l,d)=>{let f=l.x-n.x,p=l.z-n.z,m=f*s+p*r;return m>-3&&m<23&&Math.abs(f*r-p*s-d)<2.3};for(let l of[2.72,-2.72]){if(e.some(p=>p!==n&&p!==a.other&&c(p,l))||t.some(p=>p!==a.other&&p.down<=0&&c(p,l)))continue;let d=n.x+s*8+r*l,f=n.z+r*8-s*l;if(qi(d,f,n.angle,i,n.shape??n.kind)&&qi((d+n.x)*.5,(f+n.z)*.5,n.angle,i,n.shape??n.kind))return{x:d,z:f}}return null}function lp(n,e,t,i){let s=n.kind==="bike",r=xs(n.shape??n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),c=x=>({along:(x.x-n.x)*o+(x.z-n.z)*a,across:(x.x-n.x)*a-(x.z-n.z)*o}),l=[...e.filter(x=>x!==n).map(x=>({actor:x,...xs(x.shape??x.kind,x.angle-n.angle),moving:!0})),...t.filter(x=>x.health>0&&!x.seated&&!x.down).map(x=>({actor:x,width:.34,length:.34,moving:!1}))].map(x=>({...x,...c(x.actor)})),d=l.filter(({actor:x,along:_,across:w,width:C,length:v,moving:E})=>_>Math.max(s?1.2:2.4,r.length+v-.3)&&_<19&&Math.abs(w)<r.width+C+.16&&(!E||Math.hypot(x.vx,x.vz)<(s?8:6)));d.sort((x,_)=>x.along-_.along);let f=d[0];if(!f||f.along-r.length-f.length<(s?1.85:2.45))return null;let p=r.width+f.width+(s?.23:.38),m=s?Math.max(1.12,p):2.95,h=s?[m,-m,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[m,-m,3.45,-3.45],y=f.along+r.length+f.length+(s?3:4.1);for(let x of h){if(Math.abs(f.across-x)<p)continue;let _=r.length+(s?3.9:5.8);if(!l.every(g=>{if(g===f)return!0;let S=g.moving?Math.max(0,-g.actor.vx*o-g.actor.vz*a):0;return g.along<-r.length-g.length-.2||g.along>y+_+Math.min(10,S)||Math.abs(g.across-x)>r.width+g.width+(s?.25:.46)}))continue;let C=Math.max(s?2.4:3.8,Math.min(s?5:6.1,f.along-r.length+1.2)),v=zn(n.x,n.z),E=Math.ceil(y/.72),b=!0;for(let g=1;g<=E;g++){let S=g*y/E,F=x*Math.min(1,S/C),D=n.x+o*S+a*F,A=n.z+a*S-o*F,z=s?.27:.9;if(Math.abs(zn(D+a*z,A-o*z)-v)>=.08||Math.abs(zn(D-a*z,A+o*z)-v)>=.08||!iu({x:D,z:A,angle:n.angle,kind:n.kind,shape:n.shape},i,e,n)){b=!1;break}}if(b)return{x:n.x,z:n.z,sx:o,sz:a,offset:x,obstacle:f.actor,phase:"out",age:0,clearAfter:r.length+f.length+(s?.9:1.2)}}return null}function Iv(n,e,t,i,s=[]){e.age+=i;let r=n.kind==="bike",o=xs(n.shape??n.kind),{sx:a,sz:c,offset:l}=e,d=(n.x-e.x)*a+(n.z-e.z)*c,f=(n.x-e.x)*c-(n.z-e.z)*a,p=(e.obstacle.x-e.x)*a+(e.obstacle.z-e.z)*c;if(e.age>(r?10:13)||e.phase==="merge"&&Math.abs(f)<.53)return null;e.phase==="out"&&Math.abs(f-l)<(r?.28:.55)&&(e.phase="pass"),e.phase!=="merge"&&d>p+e.clearAfter&&t.every(v=>{if(v===n)return!0;let E=xs(v.shape??v.kind,v.angle-Math.atan2(a,c));return Math.abs((v.x-e.x)*c-(v.z-e.z)*a)>o.width+E.width+.3||Math.abs((v.x-n.x)*a+(v.z-n.z)*c)>o.length+E.length+1.25})&&(e.phase="merge");let m=e.phase==="merge"?0:l,h=t.some(C=>{if(C===n||C===e.obstacle)return!1;let v=(C.x-n.x)*a+(C.z-n.z)*c,E=(C.x-e.x)*c-(C.z-e.z)*a,b=xs(C.shape??C.kind,C.angle-Math.atan2(a,c));return v>0&&v<o.length+b.length+2.7&&Math.abs(E-m)<o.width+b.width+.28})||s.some(C=>{if(C.health<=0||C.seated||C.down)return!1;let v=(C.x-n.x)*a+(C.z-n.z)*c,E=(C.x-e.x)*c-(C.z-e.z)*a;return v>0&&v<o.length+2.1&&Math.abs(E-m)<o.width+.45}),y=e.phase==="out"?r?2.3:4.4:r?4.8:7,x={x:e.x+a*(d+y)+c*m,z:e.z+c*(d+y)-a*m},_=e.phase==="out"?r?4.5:4.8:r?8.1:6.5,w=fc(n,x,h?0:_);return h&&(w.throttle=0),w}function dc(n,e,t,i,s){return iu(e,s,t,n)&&i.every(r=>r.health<=0||r.seated||r.down||!Yi(e,r.x,r.z,.26))}function Pv(n,e,t,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=t.filter(d=>d!==n&&he(n,d)<29),c=null,l=-1/0;for(let d of[0,-.62,.62,-1,1]){let f={x:n.x,z:n.z,angle:n.angle,kind:n.kind,shape:n.shape},p=0;for(let _=0;_<(r?13:19)&&(f.angle-=d*.18*(r?.75:.56),f.x-=Math.sin(f.angle)*.18,f.z-=Math.cos(f.angle)*.18,!!dc(n,f,t,i,s));_++)p+=.18;if(p<(r?.9:1.35))continue;dc(n,f,t,i,s)||(f.x+=Math.sin(f.angle)*.18,f.z+=Math.cos(f.angle)*.18,f.angle+=d*.18*(r?.75:.56));let m={...f},h=0;for(let _=0;_<27;_++){let w=Math.atan2(e.x-m.x,e.z-m.z);if(m.angle=Yn(m.angle,w,r?.13:.092),m.x+=Math.sin(m.angle)*.24,m.z+=Math.cos(m.angle)*.24,!dc(n,m,t,i,s))break;h+=.24}let y=r&&lp(f,a,i,s),x=h*.67+(he(n,e)-he(m,e))*.38+p*.31-Math.abs(d)*.12+(y?4.6:0);x>l&&(l=x,c={steer:d,pace:o,distance:Math.max(.7,p-.26),age:0,x:n.x,z:n.z})}return c}function au(n,e,t,i,s,r,o,a,c=!0){let l=n.kind==="bike",d=e.recoverPosition;e.recoverPosition={x:n.x,z:n.z};let f=d&&he(d,n)>o*.57;if(e.recoverRetry=Math.max(0,(e.recoverRetry??0)-o),e.maneuver){let m=e.maneuver;m.age+=o;let h=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),y={x:n.x-Math.sin(n.angle)*h,z:n.z-Math.cos(n.angle)*h,angle:n.angle,kind:n.kind,shape:n.shape};return he(n,m)>=m.distance||m.age>(l?2.4:2.8)||!dc(n,y,i,s,r)?(e.maneuver=null,e.recoverWait=0,e.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:m.steer,throttle:n.speed>-m.pace?_t((n.speed+m.pace)*-.64,-.54,-.05):0,brake:!1}}e.recoverWait=!c||f||he(n,t)<1.2?0:(e.recoverWait??0)+o;let p=l?1.08:1.75;return e.recoverRetry>0||e.recoverWait<p||n.integrity<=0?a:(e.maneuver=Pv(n,t,i,s,r),e.maneuver?(e.recoverWait=0,{steer:e.maneuver.steer,throttle:-.47,brake:!1}):(e.recoverRetry=.85,a))}function cp(n,e,t,i,s,r,o){for(let[a,c]of r)(!c.driver||c.integrity<=0||he(c,c.driver.route[c.driver.next].junction)>11)&&r.delete(a);for(let a of n){let c=a.driver;if(!c||a.integrity<=0){a!==e.player&&Math.hypot(a.vx,a.vz)>.06?wi(a,s,{throttle:0,steer:0,brake:!0},i,e.vehicles):a!==e.player&&(a.impact=Math.max(0,a.impact-s*21));continue}let{route:l}=c,d=a.kind==="bike",f=l[c.next],p=Math.sin(a.angle),m=Math.cos(a.angle);for(let A=0;!c.maneuver&&A<6;A++){let z=f.x-a.x,W=f.z-a.z;if(Math.hypot(z,W)>2.55&&(z*p+W*m>0||Math.hypot(z,W)>5))break;c.next=(c.next+1)%l.length,f=l[c.next]}let{junction:h}=f,y=he(a,h),x=r.get(h.id);!x&&y<9.7&&r.set(h.id,a);let _=c.cruise*(d?1.13:1),w=f.curve&&y<12?Math.min(d?7.1:5.9,_):_,C=x&&x!==a&&y<15;C&&(w=Math.min(w,Math.max(0,y-7.4)*.96));let v=!1;if(o){let A=(h.x-a.x)*p+(h.z-a.z)*m,z=o.state(h.id,Math.abs(p)>Math.abs(m)?"x":"z"),W=7.6+(a.halfLength??2.4);if(z!=="green"&&A>W-.5&&A<W+40){let L=A-W;(z==="red"||L>a.speed*a.speed/11)&&(w=Math.min(w,Math.max(0,L)*.8),v=!0)}}let E=ou(a,e.vehicles,t,w);!c.pass&&!c.maneuver&&!C&&!v&&E<w*(d?.88:.78)&&(!f.curve||y>(d?8:11))&&(c.pass=lp(a,e.vehicles,t,i));let b=c.pass?Iv(a,c.pass,e.vehicles,s,t):null;b||(c.pass=null);let g=b??fc(a,f,E);!b&&E<.4&&(g.throttle=0);let S=a.x,F=a.z,D=au(a,c,f,e.vehicles,t,i,s,g,!(C||v)||c.stuck>12);c.maneuver&&(c.pass=null),wi(a,s,D,i,e.vehicles),c.stuck=!v&&Math.hypot(a.x-S,a.z-F)<s*.62?c.stuck+s:v?c.stuck:0}}function lu(n,e,t,i){return he(n,t)>13&&qi(n.x,n.z,n.angle,i,n.shape??n.kind)&&e.every(s=>he(s,n)>5.2)}var Lv=[];function cu(n,e,t,i,s){let r=-1/0,o=1/0,a=-1,c=-1;for(let l=0;l<3;l++){let d=n[l],f=e[l],p=t[l],m=t[l+3];if(Math.abs(f)<1e-5){if(d<p||d>m)return 1/0;continue}let h=1/f,y=(f>0?p-d:m-d)*h,x=(f>0?m-d:p-d)*h;if(y>r&&(r=y,a=l*2+ +(f<0)),x<o&&(o=x,c=l*2+ +(f>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=c,Math.max(0,o))}function Dv(n,e,t,i){if(!i)return e[1]<-1e-5&&n[1]>=0?-n[1]/e[1]:1/0;if(e[1]>1e-5)return 1/0;let s=o=>n[1]+e[1]*o-i(n[0]+e[0]*o,n[2]+e[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,t/12);if(r<1e-5)return 1/0;for(let o=0;o<t;o+=r){let a=o,c=Math.min(o+r,t);if(!(s(c)>0)){for(let l=0;l<10;l++){let d=(a+c)*.5;s(d)>0?a=d:c=d}return c}}return 1/0}function hp(n,e,t,i,s,r){let o=s,a=null,c=null,l=null,d=-1,f=0,p={face:-1};for(let h of t){if(h.off)continue;let y=h.bounds??[h.x-h.w*.5,h.y0??h.base??0,h.z-h.d*.5,h.x+h.w*.5,h.h,h.z+h.d*.5],x=cu(n,e,y,o,p);x>=o||(o=x,c=h,l="solid",d=p.face)}let m=Dv(n,e,o,r);m<o&&(o=m,c=null,l="ground",d=3);for(let h of i){let y,x=h.oriented;if(x){let{center:_,half:w,angle:C}=x,v=n[0]-_[0],E=n[1]-_[1],b=n[2]-_[2],g=Math.sin(C),S=Math.cos(C),F=[S*v-g*b,E,g*v+S*b],D=[S*e[0]-g*e[2],e[1],g*e[0]+S*e[2]];y=cu(F,D,[-w[0],-w[1],-w[2],w[0],w[1],w[2]],o,p)}else if(h.bounds)y=cu(n,e,h.bounds,o,p);else continue;y>=o||(o=y,a=h,c=null,l="target",d=p.face,f=x?.angle??0)}return{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}}function Zo(n,e,t,i,s=52){let{distance:r,hit:o}=hp(n,e,t,i,s,null);return{distance:r,hit:o}}function pc(n,e,t,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}=hp(n,e,t,i,s,r),p=n.map((h,y)=>h+e[y]*o),m=null;if(d!==-1&&(m=[0,0,0],m[Math.floor(d/2)]=d%2?1:-1,f)){let[h,y,x]=m,_=Math.sin(f),w=Math.cos(f);m=[w*h+_*x,y,-_*h+w*x]}return{distance:o,hit:a,point:p,normal:m,solid:c,surface:l}}function up(n,e,t,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...e),c=a>1e-5?e.map(h=>h/a):[0,0,1],l=pc(n,c,i,s,r,{ground:o}),d=l.point.map((h,y)=>h-t[y]),f=d.reduce((h,y,x)=>h+y*c[x],0),p=Math.hypot(...d),m=f>.025&&p>1e-5?d.map(h=>h/p):c;return{direction:m,sight:l,impact:pc(t,m,i,s,r,{ground:o})}}function Pr(n,e,t){let i=e.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return Zo(n,r,t,Lv,s).distance>=s-.01}function Lr(n,e,t,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let c=e.x-n.x,l=e.z-n.z,d=Math.hypot(c,l),f=(n.ground??0)+r,p=(e.ground??0)+o;if(Math.hypot(d,p-f)>s)return!1;if(d>1e-5){let m=n.angle??0;if((Math.sin(m)*c+Math.cos(m)*l)/d<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(p-f,d)+(n.pitch??0))>a*.5?!1:Pr([n.x,f,n.z],[e.x,p,e.z],t)}function dp(n,e,t,i){let s=null,r=1.86;for(let o of e){if(o.down>0)continue;let a=o.x-n.x,c=o.z-n.z,l=Math.hypot(a,c),d=Math.sin(n.angle)*a+Math.cos(n.angle)*c;l>=r||d<l*.36||!Pr([n.x,t+1,n.z],[o.x,t+1,o.z],i)||(s=o,r=l)}return s}var Dr=44,Gs=12,hu=new X(0,1,0),Nv=new X(0,0,1),_s=new tn,Zi=new wt,Ai=new X,mc=new X,gc=new X,Uv=new nt;function Fv(){let e=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),c=Math.hypot(r,o),l=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,d=c<.35+Math.sin(a*4)*.06,f=(s*239+i*167)%19/19,p=d?9+f*27:101+f*64,m=d?.99:Math.min(.84,Math.max(0,(l-c)*3.6))*(.51+f*.49),h=(i*32+s)*4;e[h]=p,e[h+1]=p*.92,e[h+2]=p*.81,e[h+3]=Math.round(m*255)}let t=new Ts(e,32,32,Xn);return t.colorSpace=un,t.magFilter=gn,t.minFilter=gn,t.needsUpdate=!0,t}function xc(n,e,t,i){let s=new In(e,t,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(ql),n.add(s),s}function zv(n){let e=new Nn(1,1),t=new ss(new Float32Array(Dr),1);t.setUsage(ql),e.setAttribute("markAlpha",t);let i=new Jt({map:Fv(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=xc(n,e,i,Dr);return s.renderOrder=3,{mesh:s,fade:t}}function fp(n){let{mesh:e,fade:t}=zv(n),i=new Jt({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=xc(n,new Pn(.015,.015,1,5),i,Gs),r=new Jt({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=xc(n,new ki(1,0),r,Gs),a=new Jt({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),c=xc(n,new Cs(1),a,Gs),l=Array.from({length:Gs},()=>({age:1/0,distance:0,point:new X,start:new X,direction:new X,surface:null})),d=Array.from({length:Dr},()=>({time:0,life:0,point:new X,normal:new X,attachment:null,radius:0})),f=0,p=0,m=new wt().makeScale(0,0,0),h=new $e(16768142),y=new $e(16754545);function x(){for(let C=0;C<Gs;C++)l[C].age=1/0,s.setMatrixAt(C,m),o.setMatrixAt(C,m),c.setMatrixAt(C,m);for(let C=0;C<Dr;C++)d[C].time=0,d[C].attachment=null,e.setMatrixAt(C,m),t.setX(C,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=e.instanceMatrix.needsUpdate=t.needsUpdate=!0,f=p=0}x();function _(C,v,{enemy:E=!1,mark:b=v.surface==="solid"||v.surface==="ground",attach:g=null}={}){let S=l[f],F=f;if(f=(f+1)%Gs,S.start.fromArray(C),S.point.fromArray(v.point),S.distance=S.start.distanceTo(S.point),S.direction.subVectors(S.point,S.start).normalize(),S.surface=v.surface,S.age=0,s.setColorAt(F,E?y:h),s.instanceColor.needsUpdate=!0,b&&v.normal&&v.surface){let D=d[p];p=(p+1)%Dr,D.life=(v.surface==="ground"?8:13)+Math.random()*4,D.time=D.life,D.point.copy(S.point),D.normal.fromArray(v.normal).normalize(),D.attachment=g,D.radius=.053+Math.random()*.031,g&&(g.updateWorldMatrix(!0,!1),g.worldToLocal(D.point),D.normal.transformDirection(Zi.copy(g.matrixWorld).invert()))}}function w(C){let v=!1,E=!1;for(let b=0;b<Gs;b++){let g=l[b];if(!Number.isFinite(g.age))continue;v=!0,g.age+=C;let S=234,F=Math.min(g.distance,g.age*S+1.7),D=Math.max(0,g.age*S-3.1),A=F-D;if(A>.018){Ai.copy(g.start).addScaledVector(g.direction,(F+D)*.5),_s.setFromUnitVectors(hu,g.direction);let W=Math.min(1,A/1.3);Zi.compose(Ai,_s,mc.set(W,A,W)),s.setMatrixAt(b,Zi)}else s.setMatrixAt(b,m);if(g.age<.071){let W=Math.max(.025,.084-g.age*.78);_s.setFromUnitVectors(hu,g.direction),Ai.copy(g.start).addScaledVector(g.direction,.052),Zi.compose(Ai,_s,mc.set(W,W*2.2,W)),o.setMatrixAt(b,Zi)}else o.setMatrixAt(b,m);let z=g.age-g.distance/S;if(g.surface&&z>=0&&z<.13){let W=Math.max(.006,.041-z*.27);Ai.copy(g.point).addScaledVector(g.direction,-(.039+z*.38)),_s.setFromUnitVectors(hu,g.direction),Zi.compose(Ai,_s,mc.set(W,W*2.14,W)),c.setMatrixAt(b,Zi)}else c.setMatrixAt(b,m);g.age>g.distance/S+.14&&(g.age=1/0)}for(let b=0;b<Dr;b++){let g=d[b];if(!(g.time<=0)){if(E=!0,g.time-=C,g.time<=0||g.attachment&&!g.attachment.visible){g.time=0,g.attachment=null,e.setMatrixAt(b,m),t.setX(b,0);continue}Ai.copy(g.point),gc.copy(g.normal),g.attachment&&(g.attachment.updateWorldMatrix(!0,!1),Ai.applyMatrix4(g.attachment.matrixWorld),gc.applyNormalMatrix(Uv.getNormalMatrix(g.attachment.matrixWorld))),Ai.addScaledVector(gc,.014),_s.setFromUnitVectors(Nv,gc),Zi.compose(Ai,_s,mc.set(g.radius,g.radius,g.radius)),e.setMatrixAt(b,Zi),t.setX(b,Math.min(1,g.time*.57))}}v&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0),E&&(e.instanceMatrix.needsUpdate=t.needsUpdate=!0)}return{emit:_,update:w,reset:x}}var Nr=.42,Vs=.145,pp=n=>.94*n,uu=n=>n*n*(3-2*n),Jo=(n,e,t)=>n+(e-n)*t;function Ov(n){return n<.065?-.32*uu(n/.065):n<Vs?Jo(-.32,1,uu((n-.065)/(Vs-.065))):n<.182?Jo(1,.89,(n-Vs)/(.182-Vs)):.89*(1-uu((n-.182)/(Nr-.182)))}function du(n,{aim:e=!1,punch:t=0,pitch:i=0,hand:s=0}={}){if(!e&&t<=0)return;let r=n.arms[s],o=n.arms[1-s],a=n.forearms[s],c=n.forearms[1-s],l=s===0?1:-1,d=t>0?Ov(_t(Nr-t,0,Nr)):0,f=Math.max(0,d),p=Math.max(0,-d),m=_t(i,-.64,.53)*.62,h=.07+f*.2-p*.08;n.body.rotation.set(h,l*(.12+f*.46-p*.52),l*(-.02-f*.05)),n.body.position.y+=pp(1-Math.cos(h))-.04-f*.03,n.body.position.z+=pp(-Math.sin(h))+f*.12;let[y,x]=n.legs,[_,w]=n.shins,C=s===0?y:x,v=s===0?x:y,E=s===0?_:w,b=s===0?w:_;v.rotation.set(-.32-f*.08,0,0),b.rotation.set(.34,0,0),C.rotation.set(.26+f*.16,0,0),E.rotation.set(.18-f*.1,0,0),r.rotation.set(Jo(-.86,-1.66+m,f)+p*.7,l*(.1-f*.08),l*Jo(.24,-.04,f)-l*p*.25),a.rotation.set(Jo(-1.62,-.04,f)-p*.2,0,l*(.1-f*.1)),o.rotation.set(-.98+f*.06,-l*.12,-l*.22),c.rotation.set(-1.78,0,-l*.08),n.pistol.visible=!1}function Ye(n){return document.getElementById(n)}function mp(n,e){let t=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Ye("stick"),c=Ye("nub"),l=Ye("look"),d=Ye("game"),f=Ye("view"),p=-1,m=-1,h=[],x=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",_=A=>{x=A,Ye("touch").hidden=A!=="touch",d.classList.toggle("touching",A==="touch")};_(x);let w=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","KeyB","Digit1","Digit2","Digit3","Digit4","Escape"]),C="";window.addEventListener("keydown",A=>{if(!(!w.has(A.code)||A.target instanceof HTMLSelectElement&&!e())){if((e()||A.code==="Escape")&&A.preventDefault(),A.code==="Escape"){A.repeat||n();return}if(e()&&(_("keyboard"),t.add(A.code),!A.repeat)){A.code==="KeyE"&&i.add("interact"),A.code==="KeyF"&&i.add("fire"),A.code==="KeyR"&&i.add("punch"),A.code==="KeyG"&&i.add("recruit"),A.code==="KeyV"&&i.add("weapon"),A.code==="Space"&&i.add("jump"),A.code==="KeyB"&&i.add("sell");let z={Digit1:"follow",Digit2:"wait",Digit3:"attack",Digit4:"dealer"};z[A.code]&&(C=z[A.code])}}}),window.addEventListener("keyup",A=>t.delete(A.code));function v(){t.clear(),i.clear(),s.clear(),o.x=0,o.y=0,c.style.transform="",p=-1,m=-1,r.x=0,r.y=0,r.aim=!1,Ye("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",v),f.addEventListener("contextmenu",A=>A.preventDefault()),f.addEventListener("wheel",A=>{!e()||!A.deltaY||(A.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(E),E=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let E=0;f.addEventListener("pointerdown",A=>{e()&&A.pointerType==="touch"&&_("touch")}),window.addEventListener("mousedown",A=>{if(!(!e()||document.pointerLockElement!==f&&(!(A.target instanceof Node)||!f.contains(A.target)))){if(A.button===0&&document.pointerLockElement!==f&&f.requestPointerLock){let z=f.requestPointerLock();z&&z.catch(()=>{})}_("keyboard"),A.button===0&&(i.add("fire"),s.add("mouseFire")),A.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",A=>{A.button===0&&s.delete("mouseFire"),A.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",A=>{!e()||x!=="keyboard"||A.pointerType==="touch"||(document.pointerLockElement===f||A.target===f||f.contains(A.target))&&(r.x+=A.movementX,r.y+=A.movementY)});function b(A){let z=a.getBoundingClientRect(),W=A.clientX-z.left-z.width/2,L=A.clientY-z.top-z.height/2,G=z.width*.37,V=Math.max(G,Math.hypot(W,L));o.x=W/V,o.y=L/V,c.style.transform="translate("+o.x*G+"px,"+o.y*G+"px)"}a.addEventListener("pointerdown",A=>{p===-1&&(_("touch"),p=A.pointerId,a.setPointerCapture(A.pointerId),b(A))}),a.addEventListener("pointermove",A=>{A.pointerId===p&&b(A)}),a.addEventListener("lostpointercapture",A=>{A.pointerId===p&&(p=-1,o.x=0,o.y=0,c.style.transform="")});let g=0,S=0;l.addEventListener("pointerdown",A=>{m===-1&&(m=A.pointerId,g=A.clientX,S=A.clientY,l.setPointerCapture(A.pointerId))}),l.addEventListener("pointermove",A=>{A.pointerId===m&&(r.x+=(A.clientX-g)*1.45,r.y+=(A.clientY-S)*1.45,g=A.clientX,S=A.clientY)}),l.addEventListener("lostpointercapture",A=>{A.pointerId===m&&(m=-1)});let F=Ye("gang-menu");for(let A of F.querySelectorAll("button"))A.addEventListener("pointerdown",z=>{z.preventDefault(),C=A.dataset.order??"",F.hidden=!0,Ye("gang").setAttribute("aria-expanded","false")});Ye("gang").addEventListener("pointerdown",A=>{A.preventDefault(),_("touch"),F.hidden=!F.hidden,Ye("gang").setAttribute("aria-expanded",String(!F.hidden))});for(let A of["interact","fire","aim","sprint","punch","jump","weapon","recruit","sell"]){let z=Ye(A);z.addEventListener("pointerdown",W=>{W.preventDefault(),_("touch"),z.setPointerCapture(W.pointerId),A==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),z.setAttribute("aria-pressed",String(s.has("aim")))):A==="sprint"||A==="fire"?(s.add(A),A==="fire"&&i.add(A)):i.add(A)}),(A==="sprint"||A==="fire")&&z.addEventListener("lostpointercapture",()=>s.delete(A))}let D=!1;return{clear:v,read(A,z){D!==A&&(s.delete("aim"),Ye("aim").setAttribute("aria-pressed","false"),D=A);let W=Array.from(navigator.getGamepads?.()??[]).find(j=>j?.connected&&j.mapping==="standard"),L=W?.buttons.map(j=>j.pressed||j.value>.45)??[],G=j=>L[j]&&!h[j],V=Array.from({length:4},(j,ye)=>If(W?.axes[ye]));(L.some(Boolean)||V.some(j=>Math.abs(j)>.1))&&_("pad"),(G(9)||!e()&&G(0))&&n();let Z=Number(t.has("KeyD")||t.has("ArrowRight"))-Number(t.has("KeyA")||t.has("ArrowLeft")),k=Number(t.has("KeyW")||t.has("ArrowUp"))-Number(t.has("KeyS")||t.has("ArrowDown")),K=(W?.buttons[7]?.value??0)-(W?.buttons[6]?.value??0),ie={x:_t(Z+o.x+V[0],-1,1),y:_t(k-o.y+(A&&Math.abs(K)>.05?K:-V[1]),-1,1),lookX:_t(r.x,-140,140)*.0032+V[2]*z*2.45,lookY:_t(r.y,-140,140)*.0028+V[3]*z*1.8,aim:!A&&(r.aim||t.has("KeyQ")||s.has("aim")||!!L[6]),run:s.has("sprint")||t.has("ShiftLeft")||t.has("ShiftRight")||!!L[0],brake:t.has("Space")||s.has("sprint")||!!L[2],interact:i.has("interact")||G(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!A&&!!L[7],punch:i.has("punch")||G(1),recruit:i.has("recruit")||G(12),weapon:i.has("weapon")||G(15),jump:i.has("jump")||G(2),confirm:G(0),cancel:G(1),navUp:G(12),navDown:G(13),sell:i.has("sell")||G(13),order:C||(G(14)?"toggle":"")||(G(4)?"attack":"")||(G(5)?"dealer":""),mode:x};return C="",h=L,r.x=0,r.y=0,i.clear(),ie}}}function gp(){let n,e,t,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,e=n.createGain(),e.gain.value=.46,e.connect(n.destination),t=n.createOscillator(),t.type="triangle",i=n.createGain(),i.gain.value=0,t.connect(i).connect(e),t.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(c,l,d,f,p="sine",m=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+m,y=n.createOscillator(),x=n.createGain();y.type=p,y.frequency.setValueAtTime(c,h),y.frequency.exponentialRampToValueAtTime(l,h+d),x.gain.setValueAtTime(f,h),x.gain.exponentialRampToValueAtTime(.001,h+d),y.connect(x).connect(e),y.start(h),y.stop(h+d)}function a(c,l,d){if(!n||!s||n.state!=="running")return;let f=n.createBuffer(1,Math.floor(n.sampleRate*c),n.sampleRate),p=f.getChannelData(0);for(let x=0;x<p.length;x++)p[x]=(Math.random()*2-1)*Math.pow(1-x/p.length,2.2);let m=n.createBufferSource();m.buffer=f;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=d;let y=n.createGain();y.gain.value=l,m.connect(h).connect(y).connect(e),m.start()}return{start:r,explosion(){a(1.4,1.1,620),o(70,24,1.1,.7,"sawtooth")},rifle(){a(.12,.55,2400),o(240,60,.09,.4,"square")},sale(){o(880,1320,.12,.18),o(1320,1760,.16,.14,"sine",.08)},get enabled(){return s},toggle(){return s=!s,e&&(e.gain.value=s?.46:0),r(),s},motor(c,l){n&&(t.frequency.setTargetAtTime(34+Math.abs(c)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(c){o(c?109:187,c?39:73,c?.125:.084,c?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function fu(n){return n>1.53?54:n>.92?32:n>.63?24:15}function pu(n){return Math.round(_t(Math.max(0,n-2.4)**2*.24,0,86))}function _c(n){return n>=36?3:n>=20?2:n>0?1:0}function xp(n){let i=62.474999999999994,s=Array.from({length:2500},(p,m)=>({x:m%50*2.55-i,z:Math.floor(m/50)*2.55-i})),r=s.map(p=>Ln(p.x,p.z,.38,n)),o=s.map((p,m)=>r[m]?[m>=50?m-50:-1,m<2450?m+50:-1,m%50?m-1:-1,m%50<49?m+1:-1].filter(y=>y>=0&&r[y]&&Ln((p.x+s[y].x)*.5,(p.z+s[y].z)*.5,.38,n)):[]),a=(p,m)=>{let h=Math.max(1,Math.ceil(he(p,m)/.42));for(let y=1;y<=h;y++){let x=y/h;if(!Ln(p.x+(m.x-p.x)*x,p.z+(m.z-p.z)*x,.31,n))return!1}return!0},c=p=>{let m=Math.round((p.x+i)/2.55),h=Math.round((p.z+i)/2.55),y=[];for(let x=Math.max(0,h-4);x<=Math.min(49,h+4);x++)for(let _=Math.max(0,m-4);_<=Math.min(49,m+4);_++){let w=x*50+_;if(!r[w])continue;let C=s[w].x-p.x,v=s[w].z-p.z;y.push({index:w,d:C*C+v*v})}y.sort((x,_)=>x.d-_.d);for(let{index:x}of y.slice(0,12))if(a(p,s[x]))return x;return y[0]?.index??-1},l=0,d=-1,f=(p,m)=>{let h=c(p),y=c(m);if(h<0||y<0||h===y)return[];let x=new Int32Array(s.length).fill(-1),_=[h];x[h]=h;for(let w=0;w<_.length;w++){let C=_[w];if(C===y){let v=[];for(let E=y;E!==h;E=x[E])v.push(s[E]);return v.reverse()}for(let v of o[C])x[v]===-1&&(x[v]=C,_.push(v))}return[]};return(p,m,h,y)=>{p.repath=(p.repath??0)-y;let x=m.x-p.x,_=m.z-p.z,w=Math.hypot(x,_);if(w<.16)return 0;let C=w<7&&a(p,m),v=Math.floor(performance.now()/16);for(v!==d&&(d=v,l=3),!C&&p.repath<=0&&(l>0?(l--,p.route=f(p,m),p.repath=1.1+Math.random()*.4):p.repath=.05);p.route?.length&&(he(p,p.route[0])<.7||p.route.length>1&&he(p,p.route[1])<4&&a(p,p.route[1]));)p.route.shift();let E=C?m:p.route?.[0]??m,b=Math.atan2(E.x-p.x,E.z-p.z),g=Math.min(h*y,he(p,E));p.angle=Yn(p.angle,b,y*8.5);let S=Oo(p,p.x+Math.sin(b)*g,p.z+Math.cos(b)*g,.24,n);return S||(p.repath=Math.min(p.repath,.18)),S?h:0}}var yc=n=>qn.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,qn[0]);function _p(n,e,t,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let y=e.z<o.z;n.stop={x:y?20.9:17.2,z:o.z+(y?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&he(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&he(o,n.stop)<2.6){let y=yc(o.x),x=yc(o.z),_=yc(e.x),w=yc(e.z);Math.abs(o.x-y)>3&&Math.abs(o.z-x)>3?n.stop={x:y,z:o.z}:Math.abs(o.x-y)>2.4&&Math.abs(o.z-x)<2.4?n.stop={x:_,z:x}:Math.abs(o.z-x)>2.4?n.stop={x:y,z:w}:_!==y?n.stop={x:y+Math.sign(_-y)*38,z:x}:w!==x?n.stop={x:y,z:x+Math.sign(w-x)*38}:n.stop={x:_,z:e.z}}let a=he(o,e),c=n.departing?6:14,l=Math.min(c,a*.85,Math.max(3,he(o,n.stop)*1.85)),d=ou(o,i,s,l),f=!n.departing&&d<2.5?ap(o,i,s,t):null,p=fc(o,f??n.stop,f?4.4:d),m=au(o,n,n.stop,i,s,t,r,p),h=o.impact>3||Math.abs(o.speed)<1;n.stall=h&&!n.maneuver?n.stall+r:0,wi(o,r,m,t,i)}var yp="gtbase:progress:1",vc=(n,e)=>Number.isFinite(n)?_t(Math.floor(n),0,e):0,Bv=["sedan","hatch","wagon","taxi","pickup","van","suv","sport","muscle","luxury","convertible"],kv=["street","sport","chopper","scooter"];function vp(n){try{let e=JSON.parse((n??globalThis.localStorage).getItem(yp));if(!e||e.version!==1||!Number.isFinite(e.cash)||!Number.isFinite(e.ammo)||!Number.isFinite(e.health))return null;let t=e.stash??{},i=e.garage,s=i&&(i.kind==="car"&&Bv.includes(i.model)||i.kind==="bike"&&kv.includes(i.model))&&Number.isInteger(i.color)&&i.color>=0&&i.color<=16777215?{kind:i.kind,model:i.model,color:i.color}:null;return{x:En.x+2.5,z:En.z-2.73,cash:_t(Math.floor(e.cash),0,999999),armed:e.armed===!0,equipped:e.equipped===!0,ammo:_t(Math.floor(e.ammo),0,360),rifle:e.rifle===!0,rifleAmmo:vc(e.rifleAmmo,900),health:_t(Math.floor(e.health),1,100),look:Df(e.look),stash:{weed:vc(t.weed,999),coke:vc(t.coke,999),ecstasy:vc(t.ecstasy,999)},garage:s,recruits:Array.isArray(e.recruits)?[...new Set(e.recruits.filter(r=>Number.isInteger(r)&&r>=0||typeof r=="string"&&/^[\w:-]{1,80}$/.test(r)))]:[]}}catch{return null}}function Mp(n,e){try{return(e??globalThis.localStorage).setItem(yp,JSON.stringify({...n,version:1})),!0}catch{return!1}}var Ur=Ye("view"),Gv=Ye("menu"),Or=Ye("play"),Fr=Ye("quality"),zr=Ye("shop"),bp=180,Sp=260,Hs=36,Mc=90,Ws={weed:{name:"maconha",pack:100,retail:20},coke:{name:"p\xF3",pack:300,retail:55},ecstasy:{name:"ecstasy",pack:200,retail:35}};function bc(n,e){try{return e!==void 0&&localStorage.setItem("gtbase:"+n,e),localStorage.getItem("gtbase:"+n)}catch{return null}}function Vv(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,e=new Kl({antialias:!n,alpha:!1,powerPreference:"high-performance"});e.toneMapping=To,e.toneMappingExposure=1.17,e.shadowMap.type=Rs,Ur.append(e.domElement);let t=new oo,i=new Cn(57,1,.12,370),s=Jf(t),r=s.vehicleSolids,o=xp(s.vehicleSolids),a=fp(t),c=op(t),l=u=>u.floorY??s.floorAt(u.x,u.z,0),d=u=>s.walkSolids(u.x,u.z,l(u)),f=()=>[...s.solid,...s.closedDoorSolids()],p=u=>{u.floorY=s.floorAt(u.x,u.z,l(u))},m=u=>l(u)>1.25?[]:z,h={...zo,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,ragdoll:null,model:ms(t,Fs())},y=91,x=u=>{let M=qo[u]?.palette??[11422e3];return y=y*1103515245+12345>>>0,M[y%M.length]},_=[{x:15.75,z:-1.8,angle:Math.PI,model:"sport"},{x:-22.8,z:4,angle:0,model:"pickup"},{x:36,z:15.3,angle:Math.PI/2,model:"luxury"},{x:53.3,z:-36,angle:0,model:"muscle"},{x:-15.9,z:-31,angle:0,model:"convertible"}],w=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033,variant:"sport"},{x:22.85,z:28,angle:0,color:4678008,variant:"chopper"}],C=[..._.map(({model:u})=>Yo(t,u,x(u))),...w.map(({color:u,variant:M})=>lc(t,u,M))],v=["sedan","taxi","hatch","scooter","van","suv","wagon","street"],E=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((u,M)=>{let T=v[M],U=M===3||M===7?lc(t,u,T):Yo(t,T,x(T));return U.routeIndex=M,U.kind==="bike"&&(U.rider=ms(t,ko(4e3+M)),U.rider.root.visible=!1),U}),b=[...C,...E],g=new Map,S=Array.from({length:15},(u,M)=>{let T=ci[M%3],U=ci[Math.floor(M/3)%3],N=[{x:T+12,z:U-12},{x:T+12,z:U+12},{x:T-12,z:U+12},{x:T-12,z:U-12}],R=M%4,ue=N[R],se=N[(R+1)%4],me=(M%3+1)/4,Oe={x:ue.x+(se.x-ue.x)*me,z:ue.z+(se.z-ue.z)*me,next:(R+1)%4};return fe({...Oe,id:"street:"+M},"civilian",ms(t,ko(1e3+M)),N)}),F=s.buildings.filter(u=>u.clerk).map((u,M)=>fe({...u.clerk,next:0,id:"clerk:"+u.id,buildingId:u.id},"clerk",ms(t,{...ko(2e3+M),shirt:"tee"}),[])),D=s.buildings.filter(u=>u.clerk),A=Array.from({length:3},(u,M)=>{let T=Wi.z-6.1+M*4.25,U={x:-1.85,z:Wi.z+[-.23,-4.4,3.94][M],next:0,id:"officer:"+M,buildingId:"station"},N=fe(U,"police",ms(t,Lf([12157017,8475704,15052936][M%3])),[]),R={x:8.2,z:T,angle:Math.PI/2},ue=Yo(t,"sedan",3626613,!0);return{officer:N,berth:R,car:ue,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,route:[3,6,1][M],beat:M,startShift:[18,40,26][M]}}),z=[...b,...A.map(u=>u.car)],W=new Map,L=Array.from({length:E.length+2},(u,M)=>{let T=fe({x:0,z:0,next:0,id:"driver:"+M},"civilian",ms(t,ko(3e3+M)),[]);return T.seated=!0,T.model.root.visible=!1,T});E.forEach((u,M)=>{u.kind==="car"&&(u.ownDriver=L[M])});let G=()=>L.find(u=>u.seated&&!u.riding&&!z.some(M=>M.ownDriver===u&&M.driver)),V=u=>u.ownDriver?.seated&&!u.ownDriver.riding?u.ownDriver:G(),B=[...S,...F,...A.map(u=>u.officer),...L],Z=B,k=new Map(B.map(u=>[u.id,u])),K=new Es(1,14),ie=new Jt({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),j=new an(.27,.115,.38),ye={cash:new Kt({color:7838308}),ammo:new Kt({color:14395738}),weapon:new Kt({color:4805464})},J=[];function fe(u,M,T,U){return{home:u,baseRole:M,role:M,model:T,path:U,...u,pace:1.15+Math.abs(u.z)%4*.11,angle:u.angle??0,floorY:u.y??0,scheduleClock:9+Math.abs(u.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function Ee(u){u.drop&&(t.remove(u.drop),u.drop=null),Object.assign(u,u.home,{role:u.baseRole,health:100,fear:0,down:0,angle:u.home.angle??0,floorY:u.home.y??0,scheduleClock:9+Math.abs(u.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1,ragdoll:null}),u.model.root.rotation.set(0,u.angle,0),u.model.shadow.visible=!0,u.model.root.visible=!0,p(u),u.model.root.position.set(u.x,l(u),u.z)}let ge=gp();bc("sound")==="off"&&ge.toggle();let ve=new X,Ve=new X,rt=new X,qe=new X,ut=new X,vt=new X,Ke=new X,It=new X,Wt=new X,Xt=!1,Rt=!1,ne=null,De=!1,mt=0,gt=null,at=0,Y=0,Dt=0,dt=0,Nt=0,Le=0,lt=0,Xe=.23,Qe=0,O=0,I=0,Q=0,xe=!0,de="keyboard",Se=Sp,_e=!1,oe=!1,ae=0,Re=!1,H="pistol",ce=!1,re=0,Te=0,pe=Fs(),be={weed:0,coke:0,ecstasy:0},He=null,ot=3,Me=0,Ue=null,it=!1,Pe=0,Mt=0,Ut=null,Zt=null,Qt=null,Mn=null,di=27,Xs=0,xn=null,On=0,$t=[],nn=vp(),Ko=()=>{Or.textContent=nn?"Continuar do save":"Jogar agora"},_n=0,fi=0,Ei=0,Ci=0,Br=0,ys=!1,vs=0,kr=!1,$o="",Ji=0,Ri=1,P=0,q=0,te=Ye("map").getContext("2d"),ee=document.createElement("canvas");ee.width=ee.height=256;let $=ee.getContext("2d"),Ae=u=>128+u*1.92;$.fillStyle="#1d3433",$.fillRect(0,0,256,256),$.fillStyle="#46605b";for(let u of qn)$.fillRect(Ae(u)-10,0,20,256),$.fillRect(0,Ae(u)-10,256,20);$.fillStyle="#345048";for(let u of s.vehicleSolids)$.fillRect(Ae(u.x-u.w/2),Ae(u.z-u.d/2),u.w*1.92,u.d*1.92);$.fillStyle="#6a7859",$.fillRect(Ae(-10),Ae(28),38,38);function ke(){let u=Fr.value==="high",M=Fr.value==="low";e.setPixelRatio(Math.min(devicePixelRatio,u?2:M?1:n?1.45:1.5)*(M?.85:Ri)),e.setSize(Ur.clientWidth,Ur.clientHeight),e.shadowMap.enabled=!M&&(u||Ri>.76),s.sun.shadow.needsUpdate=!0,c.setScale(Ur.clientHeight*e.getPixelRatio()*.92),i.aspect=Ur.clientWidth/Math.max(1,Ur.clientHeight),i.updateProjectionMatrix()}function Ie(){Ye("sound").textContent=ge.enabled?"Som ligado":"Som desligado",Ye("sound").setAttribute("aria-pressed",String(ge.enabled))}function Ne(u){zr.open&&Bn(),Xt=u,Gv.hidden=u,Ye("hud").hidden=!u,ia.clear(),u?(ge.start(),Rt||(lt=.32,Xe=.22),Rt=!0,xe=!0,Qe=performance.now(),Ye("pause").focus({preventScroll:!0}),Ye("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),ge.motor(0,!1),Ye("help").removeAttribute("open"),Ye("title").innerHTML="GT<span>BASE</span>",Ye("intro").textContent="Jogo pausado em Vila Brasa.",Or.textContent="Continuar",Ye("reset").hidden=!1,Or.focus())}function Ze(){ne=null,Ut=null,Mn=null,Qt=null,Zt=null,$t.length=0,di=27,Se=Sp,_e=!1,oe=!1,ae=0,Re=!1,H="pistol",ce=!1,re=0,Te=0,h.model.weapon="pistol",be.weed=be.coke=be.ecstasy=0,He=null,Ue&&(it=!0,wc(Ue)),at=Dt=Le=dt=Nt=Ji=0,mt=0,De=!1,gt=null,a.reset(),s.resetDoors(),_n=fi=Ei=Pe=Mt=0,ys=!1,vs=0,kr=!1,lt=.32,Xe=.22,Q=0,Object.assign(h,zo,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),p(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,Os(h.model,0,0,!1,!1),C.forEach((M,T)=>{let{x:U,z:N,angle:R}=[..._,...w][T];Qn(M,{x:U,z:N,angle:R}),M.stolen=!1,M.body.rotation.z=0,ei(M,0)}),g.clear(),E.forEach((M,T)=>{Ir(M,T),ei(M,0)});for(let M of A)Qn(M.car,M.berth),Object.assign(M,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),ei(M.car,0);for(let M of B)Ee(M);for(let M of L)M.seated=!0,M.model.root.visible=!1;for(let M of J)t.remove(M.mesh);J.length=0;for(let M of z)M.passengers=[];s.props.reset(),c.clear(),h.ragdoll=null,s.sun.shadow.needsUpdate=!0,h.deadTime=0,na(A[0]);let u=D.find(M=>M.kind==="armory")?.entry??wr;s.marker.position.set(u.x,.02,u.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,I=0}function Ce(u){$o=u,Ji=2.4}let ft=()=>{let u=Object.entries(Ws).filter(([M])=>be[M]>0).map(([M,T])=>T.name+" "+be[M]);return u.length?u.join(" \xB7 "):""},Ge=Kf(zr,{balance:()=>"Saldo: R$ "+Se.toLocaleString("pt-BR")+(ft()?" \xB7 "+ft():"")+(_e||ce?" \xB7 Balas: "+[_e?"pistola "+(H==="pistol"?ae:re):"",ce?"fuzil "+(H==="rifle"?ae:Te):""].filter(Boolean).join(", "):""),onClose:()=>{ia.clear(),I=0}});function je(u){return Se<u?"Saldo insuficiente.":(Se-=u,ge.bell(),null)}function Ot(u){H==="rifle"?Te=ae:re=ae,u==="fists"?oe=!1:(oe=!0,H=u),ae=H==="rifle"?Te:re,h.model.weapon=H,xn=null,On=0}function zt(){let u=["fists",..._e?["pistol"]:[],...ce?["rifle"]:[]],M=oe?H:"fists";Ot(u[(u.indexOf(M)+1)%u.length])}function At(u,M){H===u?ae=Math.min(900,ae+M):u==="rifle"?Te=Math.min(900,Te+M):re=Math.min(360,re+M)}function ln(u,M){let T=u.model,U=ms(t,M);U.root.position.copy(T.root.position),U.root.quaternion.copy(T.root.quaternion),U.root.visible=T.root.visible,U.weapon=T.weapon,t.remove(T.root),T.root.traverse(N=>{N instanceof Ct&&N!==T.shadow&&N.geometry.dispose()}),u.model=U}function Fe(u){return pe={...pe,...u},ln(h,pe),null}let cn=Jh,Et=[3553348,2373199,5917242,2894892,8221798,11049860,15262678],pi=[15789282,2236962,9056042,2969482,14725949,3107660];function Bt(u,M,T,U){let N=pe[M]===T;return{label:N?u+" (tirar)":u,price:N?0:U,active:N,buy:()=>N?Fe({[M]:typeof T=="boolean"?!1:"none"}):je(U)??Fe({[M]:T})}}function qs(u){return u==="armory"?{title:"Loja de armas",note:"Pistola e muni\xE7\xE3o dentro da lei, mais ou menos.",sections:[{title:"Armas",items:[{label:"Pistola + "+Hs+" balas",price:bp,disabled:_e,detail:_e?"Voc\xEA j\xE1 tem uma pistola.":"",buy:()=>je(bp)??(_e=!0,At("pistol",Hs),Ot("pistol"),Ce("Pistola comprada."),null)},{label:"Repor muni\xE7\xE3o da pistola",price:0,disabled:!_e||(H==="pistol"?ae:re)>=Hs,detail:"Completa at\xE9 "+Hs+" balas.",buy:()=>(At("pistol",Hs-(H==="pistol"?ae:re)),null)}]}]}:u==="black"?{title:"Penhores 24h \xB7 fundos",note:"Mercado negro. Pagamento na hora, sem nota fiscal.",sections:[{title:"Armas",items:[{label:"Fuzil + "+Mc+" balas",price:1200,disabled:ce,detail:ce?"Voc\xEA j\xE1 tem um fuzil.":"Rajada r\xE1pida e dano alto.",buy:()=>je(1200)??(ce=!0,At("rifle",Mc),Ot("rifle"),Ce("Fuzil comprado."),null)},{label:"Muni\xE7\xE3o de fuzil ("+Mc+")",price:150,disabled:!ce,buy:()=>je(150)??(At("rifle",Mc),null)},{label:"Pistola + "+Hs+" balas",price:220,disabled:_e,buy:()=>je(220)??(_e=!0,At("pistol",Hs),Ot("pistol"),null)}]},{title:"Drogas no atacado (10 unidades)",items:Object.entries(Ws).map(([M,T])=>({label:T.name[0].toUpperCase()+T.name.slice(1)+" \xB7 estoque "+be[M],price:T.pack,detail:"Venda no varejo por R$ "+T.retail+" a unidade.",buy:()=>je(T.pack)??(be[M]+=10,null)}))}]}:u==="clothes"?{title:"Moda Brasa",note:"Escolha a pe\xE7a e toque em uma cor.",sections:[{title:"Parte de cima",items:[{label:"Camiseta",price:60,active:pe.shirt==="tee",colors:cn,buy:M=>je(60)??Fe({shirt:"tee",shirtColor:M??pe.shirtColor})},{label:"Regata",price:45,active:pe.shirt==="tank",colors:cn,buy:M=>je(45)??Fe({shirt:"tank",shirtColor:M??pe.shirtColor})},{label:"Camisa social",price:120,active:pe.shirt==="dress",colors:cn,buy:M=>je(120)??Fe({shirt:"dress",shirtColor:M??pe.shirtColor})},{label:"Sem camisa",price:0,active:pe.shirt==="none",buy:()=>Fe({shirt:"none"})}]},{title:"Parte de baixo",items:[{label:"Cal\xE7a",price:90,active:pe.legs==="pants",colors:Et,buy:M=>je(90)??Fe({legs:"pants",legColor:M??pe.legColor})},{label:"Bermuda",price:60,active:pe.legs==="shorts",colors:Et,buy:M=>je(60)??Fe({legs:"shorts",legColor:M??pe.legColor})}]},{title:"Cal\xE7ados",items:[{label:"T\xEAnis",price:150,active:pe.shoes==="sneakers",colors:pi,buy:M=>je(150)??Fe({shoes:"sneakers",shoeColor:M??pe.shoeColor})},{label:"Chinelo",price:25,active:pe.shoes==="flipflops",colors:pi,buy:M=>je(25)??Fe({shoes:"flipflops",shoeColor:M??pe.shoeColor})},{label:"Sapato social",price:180,active:pe.shoes==="dress",buy:()=>je(180)??Fe({shoes:"dress"})}]},{title:"Acess\xF3rios",items:[Bt("\xD3culos escuros","glasses",!0,80),Bt("Corrente de prata","chain","silver",250),Bt("Corrente de ouro","chain","gold",900),Bt("Brincos de prata","earrings","silver",120),Bt("Brincos de ouro","earrings","gold",400),Bt("Brincos de diamante","earrings","diamond",1500),Bt("Rel\xF3gio de prata","watch","silver",300),Bt("Rel\xF3gio de ouro","watch","gold",1100),Bt("Anel de prata","ring","silver",150),Bt("Anel de ouro","ring","gold",500)]}]}:u==="barber"?{title:"Barbearia do Z\xE9",note:"Corte e barba. Toque em uma cor para pintar.",sections:[{title:"Cabelo",items:Object.entries(Yh).map(([M,T])=>({label:T,price:M==="cap"?50:40,active:pe.hair===M,colors:M==="bald"?void 0:M==="cap"?[1522486,9056042,2236962,2772879,14725949,15789282]:Kh,buy:U=>je(M==="cap"?50:40)??Fe(M==="cap"?{hair:M,capColor:U??pe.capColor}:{hair:M,hairColor:U??pe.hairColor})}))},{title:"Barba",items:Object.entries(Zh).map(([M,T])=>({label:T,price:M==="none"?15:25,active:pe.beard===M,buy:()=>je(M==="none"?15:25)??Fe({beard:M})}))}]}:{title:"Loja",sections:[]}}function mi(u){ia.clear(),document.pointerLockElement&&document.exitPointerLock(),Ge.show(()=>qs(u.service))}function Bn(){Ge.close()}function xt(u){let M={...u,ground:z.includes(u)?u.root.position.y:l(u),angle:u.angle},T=f();return A.some(U=>{let{officer:N,car:R,mode:ue}=U;return N.health<=0?!1:N.seated&&["driving","patrol","returning"].includes(ue)?Lr({...R,ground:R.root.position.y},M,T,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Lr({...N,ground:l(N)},M,T,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function sn(u,M){if(M<12||Z.some(R=>R.calling))return;let T=f(),U={...u,ground:l(u)},N=Z.find(R=>["civilian","clerk"].includes(R.role)&&en(R)&&!R.buyer&&!(R.brawl>0)&&he(R,u)<24&&he(R,u)>2&&Lr({...R,ground:l(R)},U,T,{range:24,fov:Math.PI*1.3,eye:1.6,aim:1.1}));N&&(N.calling={time:3.6,pressure:M,x:u.x,z:u.z})}function hn(u,M=ne??h,T=xt(M)){if(!T)return sn(M,u),!1;let U=_c(at);return at=Math.min(64,Math.max(at+(at>0?u*.52:0),u)),De=!0,mt=.24,gt={x:M.x,z:M.z,y:l(M),health:100,seated:!1,angle:M.angle},U||Ce("Crime visto pela pol\xEDcia."),!0}let Gt=()=>ne||l(h)>=1?null:D.find(u=>u.service!=="store"&&s.interiorAt(h.x,h.z,l(h))?.buildingId===u.id&&he(h,u.clerk)<3)??null,rn={armory:"Abrir loja de armas",clothes:"Ver roupas",barber:"Cortar cabelo",black:"Negociar nos fundos"},Zn=()=>Ue&&it&&!ne&&he(h,Us.door)<2.6,Ys=()=>ne&&ne!==wp().find(u=>u===ne)&&he(ne,Us.door)<3.4&&Math.hypot(ne.vx,ne.vz)<2,mu=()=>!ne&&he(h,{x:En.x,z:En.z+6.25})<1.7,gu=()=>z,en=u=>u&&u.health>0&&!u.seated,Sc=u=>(u.kind==="bike"?"Moto ":"")+(u.spec?.name??"Carro"),xu=()=>!ne&&s.doors.find(u=>u.private&&!u.breached&&!u.opened&&Math.abs(u.base-l(h))<.85&&he(u,h)<1.62);function _u(){if(l(h)>1.02)return null;let u=null,M=1/0;for(let T of b){let U=he(h,T),N=T.kind==="bike"?3:Math.max(3,T.halfLength+.6);U>=N||U>=M||T.integrity<=0||T.wrecked||Math.abs(T.speed)>3.4||(u=T,M=U)}return u}function Ki(u=!1){if(!ne)return;let{angle:M,x:T,z:U}=ne;if(!u&&Math.hypot(ne.vx,ne.vz)>4.2){Ce("Reduza a velocidade para sair.");return}let N=ne.kind==="bike"?1.02:ne.halfWidth+.67,R=ne.kind==="bike"?1.75:ne.halfLength+.65,ue=[N,-N,N+.53,-N-.53].map(me=>[T+Math.cos(M)*me,U-Math.sin(M)*me]);ue.push([T-Math.sin(M)*R,U-Math.cos(M)*R],[T+Math.sin(M)*R,U+Math.cos(M)*R]);let se=ue.find(([me,Oe])=>Ti({x:me,z:Oe},me,Oe,s.walkSolids(me,Oe,0),z,Z,.36));if(!se&&!u){Ce("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=se??[zo.x,zo.z],h.floorY=0,p(h);for(let me of[...ne.passengers??[]])Rc(me);h.angle=M,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),ne.abandoned=0,ne=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,M,0),Os(h.model,0,0,!1,oe)}function yu(){H==="rifle"?Te=ae:re=ae;let u={health:h.health,cash:Se,armed:_e,equipped:oe,ammo:re,rifle:ce,rifleAmmo:Te,look:pe,stash:{...be},garage:Ue?{kind:Ue.kind,model:Ue.model,color:Ue.color}:null,recruits:$t.map(M=>M.id)};return Mp(u)}let wp=()=>A.map(u=>u.car);function vu(u,M,T){return Ue&&(t.remove(Ue.root),z.splice(z.indexOf(Ue),1),b.splice(b.indexOf(Ue),1)),Ue=u==="bike"?lc(t,T,M):Yo(t,M,T),Ue.stolen=!0,z.push(Ue),b.push(Ue),Ue}function wc(u){Qn(u,Us.inside),u.root.visible=!1,ei(u,0)}function Tp(u){let M=u.kind,T=u.model,U=u.color;if(Ki(!0),u!==Ue){let N=C.indexOf(u);if(N>=0){let{x:R,z:ue,angle:se}=[..._,...w][N];Qn(u,{x:R,z:ue,angle:se}),u.stolen=!1,ei(u,0)}else u.routeIndex>=0&&(Ir(u,u.routeIndex),ei(u,0));vu(M,T,U)}it=!0,wc(Ue),Object.assign(h,{x:Us.door.x-1.6,z:Us.door.z+1.4,floorY:0}),p(h),yu(),Ce("Ve\xEDculo guardado na garagem e salvo."),ge.bell()}function Ap(){Ue&&(it=!1,Qn(Ue,Us.out),Ue.root.visible=!0,ei(Ue,0),Tc(Ue),Ce("Ve\xEDculo retirado da garagem."))}function Ep(){Ki(!0),Object.assign(h,{x:En.x,z:En.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0,ragdoll:null}),p(h),Pe=0,at=0,Mt=0,lt=-Math.PI/2,xe=!0,Ce("Voc\xEA voltou para casa.")}function Cp(){if(Ut||h.health<=0)return;if(ne&&!Ys()){Ki();return}let u=Gt();if(u){mi(u);return}if(Ys()){Tp(ne);return}if(Zn()){Ap();return}if(mu()){Ce(yu()?"Progresso salvo na porta de casa.":"O navegador bloqueou o salvamento."),ge.bell();return}let M=_u();if(!M){Ce(xu()?"Porta trancada.":"Nada para interagir aqui.");return}if(M.driver){let T=V(M)??L.find(U=>U.exitAge>14&&U.role==="civilian"&&he(U,h)>11);if(T){let U=M.angle-Math.PI/2,N=M.x+Math.sin(U)*(M.kind==="bike"?.95:1.51),R=M.z+Math.cos(U)*(M.kind==="bike"?.95:1.51),ue=Ti({x:N,z:R},N,R,s.walkSolids(N,R,0),z,Z,.29)?{x:N,z:R}:{x:h.x,z:h.z};Ee(T),Object.assign(T,ue,{angle:U,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),Math.random()<.35&&(T.fear=0,T.brawl=9,T.attack=1.2),M.rider&&(M.rider.root.visible=!1)}M.driver=null,M.vx=M.vz=M.speed=0,M.doorTime=.65,Ut={car:M,delay:.46},Ce(M.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else Tc(M)}function Tc(u){if(ne=u,u.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),Pe=0,h.model.root.visible=!0,h.model.shadow.visible=!1,u.stolen||(u.stolen=!0,hn(13)),u.passengers??=[],u.kind==="car"){let M=u.spec.seats;$t.filter(U=>en(U)&&he(U,u)<35&&U.order!=="dealer").sort((U,N)=>he(U,u)-he(N,u)).slice(0,Math.max(0,M.length-1-u.passengers.length)).forEach((U,N)=>{let R=M[Math.min(M.length-1,1+N+u.passengers.length)];U.boardCar=u,U.boardRow=R[1],U.boardSide=Math.sign(R[0])||1})}lt=u.angle,Q=0,xe=!0}function Ac(u,M,T){let U=new Ct(j,ye[u]),N=l(M)+.13;U.position.set(M.x+.22,N,M.z+.19),t.add(U),J.push({mesh:U,kind:u,count:T,y:N,wait:.32,left:105})}function Rp(u){for(let M=J.length-1;M>=0;M--){let T=J[M];T.left-=u,T.wait-=u,T.mesh.rotation.y+=u*2.1,T.mesh.position.y=T.y+Math.sin(T.left*3.8)*.08;let U=!ne&&h.health>0&&T.wait<0&&Math.abs(l(h)-T.y)<.65&&Math.hypot(h.x-T.mesh.position.x,h.z-T.mesh.position.z)<1.03;U&&(T.kind==="cash"?(Se+=T.count,Ce("R$ "+T.count+" recolhidos.")):!_e&&T.kind==="weapon"?(_e=!0,At("pistol",T.count),Ot("pistol"),Ce("Pistola recolhida.")):(At("pistol",T.count),Ce("+"+T.count+" balas de pistola.")),ge.bell()),(U||T.left<=0)&&(t.remove(T.mesh),J.splice(M,1))}}function kn(u,M,T=null){if(u.health<=0||M<=0)return;if(u.health=Math.max(0,u.health-M),u.health<=0){let R=T?u.x-T.x:u.pushX,ue=T?u.z-T.z:u.pushZ;if(u.fallDir=Math.sin(u.angle)*R+Math.cos(u.angle)*ue>0?1:-1,u.deadTime=0,T&&u!==h){let se=Math.max(.1,Math.hypot(R,ue));u.pushX+=R/se*1.3,u.pushZ+=ue/se*1.3}}if(u===h){Ei=.22,T&&Ip(T),u.health<=0&&(Ki(!0),Mt=3,Ce("Voc\xEA caiu. Voltando para casa\u2026"));return}if(u.stagger=.32,u.fear=u.brawl>0?0:6,u.calling=null,u.buyer=null,u.surrender=0,Qt?.npc===u&&(Qt=null),u.health>0)return;Zt===u&&(Zt=null),u.down=u.role==="police"?28:19,u.model.shadow.visible=!1;let U=new Ct(K,ie);U.position.set(u.x+Math.sin(u.angle)*u.fallDir*1,l(u)+.019,u.z+Math.cos(u.angle)*u.fallDir*1),U.rotation.x=-Math.PI/2,U.scale.set(.52,.32,1),t.add(U),u.drop=U,u.role==="police"?Ac(_e?"ammo":"weapon",u,12):u.role!=="ally"&&!u.robbed&&Ac("cash",u,24+Math.floor(Math.abs(u.z)%27)),Mn===u&&(Mn=null,di=29);let N=$t.indexOf(u);N>=0&&$t.splice(N,1)}function Ip(u){let M=Math.atan2(u.x-h.x,u.z-h.z)-lt,T=document.createElement("div");T.className="hurt",T.style.transform="rotate("+-M+"rad)",Ye("damage-dir").append(T),window.setTimeout(()=>T.remove(),1100)}function jo(u){return[...Z,h].filter(T=>T!==u&&en(T)&&!(T===h&&ne&&ne.kind==="car")).map(T=>{let U=l(T)+(T===h?h.lift:0);return{actor:T,y:U,bounds:[T.x-.31,U+.1,T.z-.31,T.x+.31,U+1.9,T.z+.31]}})}function Pp(){i.getWorldDirection(vt);let u=jo(h),M=f(),T=Zo(i.position.toArray(),vt.toArray(),M,u,28).hit,U=[h.x,l(h)+1.38+h.lift,h.z];if(T&&he(h,T.actor)<24&&Pr(U,[T.actor.x,T.y+1.25,T.actor.z],M))return T.actor;let N=.15,R=null;for(let{actor:se,y:me}of u){if(he(h,se)>18)continue;qe.set(se.x,me+1.25,se.z).project(i);let Oe=Math.hypot(qe.x,qe.y);qe.z>=1||Oe>=N||!Pr(U,[se.x,me+1.25,se.z],M)||(N=Oe,R=se)}if(R)return R;let ue=z.filter(se=>se!==ne&&se.integrity>0&&he(h,se)<32).map(se=>({car:se,oriented:{center:[se.x,se.root.position.y+.8,se.z],half:se.kind==="bike"?[.4,.75,1.1]:[se.halfWidth+.05,.75,se.halfLength],angle:se.angle}}));return Zo(i.position.toArray(),vt.toArray(),M,ue,34).hit?.car??null}let Gr=u=>A.find(M=>M.car===u),Mu=u=>z.includes(u);function Ec(u){if(u===ne||u.driver)return!0;let M=Gr(u);return!!(M&&M.officer.seated&&M.officer.health>0&&["driving","patrol"].includes(M.mode))}let Cc=u=>!!u&&(Mu(u)?u!==ne&&u.integrity>0&&Ec(u):en(u));function gi(u){if(u){if(Mu(u)){u!==ne&&u.integrity>0&&Ec(u)&&(Zt=u);return}u.role!=="ally"&&u.health>0&&(Zt=u)}}function Qo(u,M,T){let U=Gr(u),N=U&&U.officer.seated&&["driving","patrol"].includes(U.mode)?U:null,R=N?.officer??(u.driver?V(u):null);if(!R)return!1;N||Ee(R);let ue=u.angle-Math.PI/2,se=u.kind==="bike"?.95:u.halfWidth+.6;return Object.assign(R,{seated:!1,x:u.x+Math.sin(ue)*se,z:u.z+Math.cos(ue)*se,fear:6,exitAge:0,floorY:0}),R.model.root.visible=!0,R.model.shadow.visible=!0,u.driver=null,u.vx*=.45,u.vz*=.45,u.speed*=.45,u.rider&&(u.rider.root.visible=!1),N&&(N.mode="foot"),kn(R,M,T),!0}function bu(u,M){if(!M||!u.flat)return!1;let T=Math.sin(u.angle),U=Math.cos(u.angle),N=M[0]-u.x,R=M[2]-u.z,ue=N*U-R*T,se=N*T+R*U,me=M[1]-u.root.position.y,Oe=!1;return u.wheels.forEach((We,tt)=>{!u.flat[tt]&&me<u.wheelRadius*2+.1&&Math.hypot(ue-We.position.x,se-We.position.z)<u.wheelRadius+.2&&(u.flat[tt]=!0,Oe=!0)}),Oe}function Lp(u,M,T,U){if(u.lastHitBy=T,M<u.wheelRadius*2&&bu(u,U)){u===ne&&Ce("Pneu furado.");return}if(U&&c.sparks(U[0],U[1],U[2],4,2),u.kind==="bike"){if(M>.85||Math.random()<.45){u===ne?(kn(h,14,T),h.health>0&&Math.random()<.3&&(Ki(!0),h.trip=.6,Ce("Voc\xC3\xAA caiu da moto."))):Qo(u,40,T);return}u.integrity=Math.max(0,u.integrity-4);return}if(M>.92){if(ru(u,U),u===ne){let N=(u.passengers??[]).filter(ue=>ue.health>0),R=N.length&&Math.random()<N.length/(N.length+1.6)?N[Math.floor(Math.random()*N.length)]:h;kn(R,R===h?16:24,T),R===h&&Ce("Tiro atravessou o vidro.")}else Qo(u,38+Math.round(Math.random()*30),T);return}u.integrity=Math.max(0,u.integrity-5)}function Dp(u,M){let T=Math.sin(u.angle),U=Math.cos(u.angle),N=M.boardRow??-1,R=u.halfWidth+.55;for(let ue of[M.boardSide??1,-(M.boardSide??1)]){let se={x:u.x+U*ue*R+T*N,z:u.z-T*ue*R+U*N};if(Ti(M,se.x,se.z,s.walkSolids(se.x,se.z,0),[],[],.3))return se}return{x:u.x-T*(u.halfLength+.7),z:u.z-U*(u.halfLength+.7)}}function Np(u,M){let T=u.boardCar;if(ne!==T||T.integrity<=0||(T.passengers?.length??0)>=3)return u.boardCar=null,0;if(Math.hypot(T.vx,T.vz)>2.5){let we=Cu(T,$t.indexOf(u));return he(we,u)>1.25?Ic(u,we,6.1,M):0}let U=Dp(T,u),N=Math.sin(T.angle),R=Math.cos(T.angle),ue=u.x-T.x,se=u.z-T.z,me=ue*N+se*R,Oe=ue*R-se*N,We=(U.x-T.x)*R-(U.z-T.z)*N;if(he(u,U)<.75||he(u,T)<T.halfWidth+.9||Math.abs(Oe)>T.halfWidth+.2&&Math.abs(Oe)<T.halfWidth+1&&Math.abs(me)<T.halfLength-.55)return u.seated=!0,u.riding=T,u.boardCar=null,u.model.root.visible=!1,T.passengers.push(u),T.doorTime=.6,0;if(Math.abs(Oe)>=T.halfWidth+.45)return u.boardSide=Math.sign(Oe),Dn(u,U,4.8,M);let tt=Math.sign(We)||1,Je=(Math.sign(me)||1)*Math.max(T.halfLength+.65,Math.abs(me)),Be=T.halfWidth+.68;return Dn(u,{x:T.x+N*Je+R*tt*Be,z:T.z+R*Je-N*tt*Be},4.8,M)}function Rc(u){let M=u.riding;if(u.riding=null,u.boardCar=null,!M)return;M.passengers=(M.passengers??[]).filter(me=>me!==u);let T=Math.sin(M.angle),U=Math.cos(M.angle),N=M.halfWidth+.62,R=M.halfLength+.9,ue=[[N,-1],[-N,-1],[N,.6],[-N,.6],[0,-R],[N+.7,0],[-N-.7,0],[0,R]].map(([me,Oe])=>({x:M.x+U*me+T*Oe,z:M.z-T*me+U*Oe})),se=ue.find(me=>Ti(u,me.x,me.z,s.walkSolids(me.x,me.z,0),z.filter(Oe=>Oe!==M),Z,.3))??ue[0];Object.assign(u,se,{seated:!1,floorY:0,angle:M.angle,exitAnim:.3,exitSide:1}),p(u),u.model.root.visible=!0,u.model.shadow.visible=!0}function Su(u){for(let M of z){if(M.kind!=="car")continue;let T=M===ne||he(M,u)<40,U=Gr(M),N=U&&U.officer.seated&&U.officer.health>0&&["driving","patrol"].includes(U.mode)?U.officer:null,R=M.ownDriver?.seated&&M.driver&&M!==ne?M.ownDriver:null;[M===ne?h:N??R,...M.passengers??[]].forEach((se,me)=>{se&&(T?ip(se.model,M,me):se.model.root.visible=!1)})}}function Up(u){for(let M of $t){if(!M.riding)continue;let T=M.riding;if(ne!==T||M.health<=0){Rc(M);continue}M.x=T.x,M.z=T.z,M.floorY=0,M.attack-=u,Cc(Zt)&&M.attack<=0&&he(T,Zt)<18&&Tu(M,Zt)}}function Fp(u,M){let T=f(),U={...u,ground:l(u)};for(let N of A){let R=N.officer;en(R)&&(R===M||Lr({...R,ground:l(R)},U,T,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(N.retaliation=u)}}function zp(u){if(!u||!["civilian","resident"].includes(u.role)||u.health<=0){Ce("Mire em um pedestre dispon\xEDvel para recrutar.");return}u.role="ally",u.order="follow",u.surrender=0,u.fear=0,u.route=[],$t.push(u),Qt?.npc===u&&(Qt=null),Ce("Guarda-costas recrutado."),ge.bell()}function Op(u,M){if(h.health<=0||!M||!["civilian","resident","clerk"].includes(M.role)||M.robbed||he(h,M)>9||Math.abs(l(h)-l(M))>.65){Qt&&(Qt.npc.surrender=0,Qt=null);return}let T=h.x-M.x,U=h.z-M.z,N=Math.sin(M.angle)*T+Math.cos(M.angle)*U;if(Qt?.npc!==M){if(Qt&&(Qt.npc.surrender=0),Qt=null,N<Math.hypot(T,U)*.3||M.stagger>0||M.fear>0)return;Qt={npc:M,left:5}}M.surrender=1,M.angle=Math.atan2(T,U),Qt.left-=u,Qt.left<=0&&(M.robbed=!0,M.surrender=0,M.fear=7,Ac("cash",M,(M.role==="clerk"?104:38)+Math.floor(Math.abs(M.z)%31)),hn(15),Ce(M.role==="clerk"?"Dinheiro da loja no ch\xE3o.":"Dinheiro no ch\xE3o."),Qt=null)}function Bp(){h.ragdoll||_n>0||h.health<=0||h.trip>.15||Ut||(h.angle=lt,Br=1-Br,h.pushX+=Math.sin(lt)*1.5,h.pushZ+=Math.cos(lt)*1.5,_n=Nr,ys=!0,vs=Vs,gi(xn),ge.punch(!1))}function kp(){if(ys=!1,h.health<=0||ne)return;let u=dp(h,Z.filter(N=>en(N)&&N.role!=="ally"&&Math.abs(l(h)-l(N))<.73),l(h)+h.lift,f());if(!u)return;gi(u),ge.punch(!0);let M=u.x-h.x,T=u.z-h.z,U=Math.max(.2,Math.hypot(M,T));u.pushX=M/U*3.6,u.pushZ=T/U*3.6,kn(u,18,h),u.role==="civilian"&&u.health>0&&!(u.brawl>0)&&Math.random()<(u.model.root.scale.x>1.05?.6:.32)&&(u.brawl=10,u.fear=0,u.attack=.4,gi(u),Ce("Ele vai revidar!")),fi=.19,hn(u.role==="police"?28:12),Ce(u.health<=0?"Pedestre derrubado.":"Soco acertou.")}function Gp(u){if(h.ragdoll||_n>0||Dt>0||h.health<=0||!_e||!oe)return;if(ae<=0){u&&gi(xn),Dt=.32,Ce("Sem balas. Reponha na loja.");return}let M=xt(h),T=H==="rifle";ae--,Dt=T?.11:.28,Le=.095,h.angle=lt,h.model.root.rotation.y=lt,Os(h.model,0,0,!0,!0,0,u?Xe:Xe-.22),(T?h.model.rifleMuzzle:h.model.muzzle).getWorldPosition(ut),T?ge.rifle():ge.shot();let U=jo(h),N=z.map(we=>{let ct=we.root.position.y,Ft=we.kind==="bike",bn=Ft?0:.1,ti=Ft?0:we.spec.belt;return{car:we,oriented:{center:[we.x,ct+(Ft?.67:(bn+ti)/2),we.z],half:Ft?[.31,.44,1.08]:[we.halfWidth-.01,(ti-bn)/2,we.halfLength-.05],angle:we.angle}}});i.getWorldDirection(vt);let R=z.filter(we=>we.rider&&we.driver).map(we=>({rider:we,oriented:{center:[we.x,we.root.position.y+1.42,we.z],half:[.32,.45,.33],angle:we.angle}})),ue=z.filter(we=>we.cabin&&we!==ne).map(we=>{let ct=sp(we);return{windowCar:we,oriented:{center:[we.x+ct.z*Math.sin(we.angle),we.root.position.y+ct.y,we.z+ct.z*Math.cos(we.angle)],half:[ct.halfX,ct.halfY,ct.halfZ],angle:we.angle}}}),se=f(),me=[...U,...R,...ue,...N],Oe=ut.toArray(),We=up(i.position.toArray(),vt.toArray(),Oe,se,me,{ground:zn}),tt=We.impact,le=tt.hit,Je=s.doors.find(we=>we.private&&!we.breached&&tt.solid===we.closedSolid&&Math.hypot(tt.point[0]-we.handle.x,tt.point[1]-we.handle.y,tt.point[2]-we.handle.z)<.28),Be=17;if(Je&&s.breachDoor(Je.id))Be=23,Ce("Fechadura rompida.");else if(le?.actor&&le.actor.role!=="ally")gi(le.actor),kn(le.actor,Math.round(fu(tt.point[1]-le.y)*(T?1.45:1)),h),Be=le.actor.role==="police"?34:23,fi=.21,Ce(le.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(le?.rider||le?.windowCar){let we=le.rider??le.windowCar;gi(we),le.windowCar&&ru(we,tt.point);let[ct,Ft]=we.spec.seats?.[0]??[-.42,0],bn={oriented:{center:[we.x+ct*Math.cos(we.angle)+Ft*Math.sin(we.angle),we.root.position.y+(we.seatHip??.54)+.66,we.z-ct*Math.sin(we.angle)+Ft*Math.cos(we.angle)],half:[.26,.28,.29],angle:we.angle}};Ec(we)&&(le.rider||Zo(Oe,We.direction,[],[bn],52).hit)&&Qo(we,le.rider?T?75:50:100,h)&&(fi=.21)}else le?.car?(gi(le.car),le.car.lastHitBy=h,c.sparks(tt.point[0],tt.point[1],tt.point[2],5,2.2),bu(le.car,tt.point)?Ce("Pneu furado."):le.car.integrity=Math.max(0,le.car.integrity-5),fi=.16):u&&gi(xn);hn(Be,h,M);for(let we of Z)["civilian","resident"].includes(we.role)&&he(we,h)<17&&(we.fear=Math.max(we.fear,4.8));a.emit(Oe,tt,{mark:le?.car?!0:void 0,attach:le?.car?.root})}function Vp(u,M){let T=ne;wi(T,u,{throttle:M.y,steer:-M.x,brake:M.brake},r,gu()),Q>1.15&&Math.abs(T.speed)>2.4&&(lt=Yn(lt,T.angle,u*2.3))}function Hp(u,M){if(h.ragdoll&&(hc(h,u,l(h),(Oe,We)=>!Ln(Oe,We,.25,d(h))),h.ragdoll||h.health<=0))return;let T=Math.min(1,Math.hypot(M.x,M.y)),U=h.health>0&&!Ut&&h.trip<.12,N=U?T*(M.aim?2.1:M.run?7.4:4.2):0,R=lt+Math.atan2(-M.x,M.y||0);M.jump&&U&&h.lift===0&&(Pe=4.18),(Pe!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+Pe*u-11.8*u*u),Pe=h.lift>0?Pe-23.6*u:0);let ue=1-Math.exp(-u*(N>.02?19:27));h.vx+=(Math.sin(R)*N-h.vx)*ue,h.vz+=(Math.cos(R)*N-h.vz)*ue;let se=rc(h,(h.vx+h.pushX)*u,(h.vz+h.pushZ)*u,d(h),m(h),Z);h.pushX*=Math.exp(-u*6.2),h.pushZ*=Math.exp(-u*6.2),h.trip=Math.max(0,h.trip-u),_n<=0&&U&&(M.aim||T>.05)&&(h.angle=Yn(h.angle,M.aim?lt:R,u*11));let me=h.model;if(p(h),me.root.position.set(h.x,l(h)+h.lift,h.z),me.shadow.visible=h.health>0&&h.lift<.06,h.health<=0){h.deadTime=(h.deadTime??0)+u;let Oe=Go(me,h.deadTime,-1);me.root.rotation.set(Oe,h.angle,0),me.root.position.y+=Math.abs(Math.sin(Oe))*.17;return}me.root.rotation.set(Math.min(1.25,h.trip*2.7),h.angle,0),Os(me,u,h.trip>.05?0:Math.min(7.5,se/u),oe&&(M.aim||Le>0)&&_n<=0,oe&&_n<=0,0,M.aim?Xe:0),(_n>0||M.aim&&!oe)&&du(me,{aim:M.aim,punch:_n,pitch:Xe,hand:Br}),se&&Nt<=0&&h.lift===0&&(ge.step(),Nt=M.run?.27:.41)}function wu(u){let M=Math.sin(u.angle),T=Math.cos(u.angle),U=u.halfWidth+.68;return[{x:u.x-T*U,z:u.z+M*U},{x:u.x+T*U,z:u.z-M*U}].find(N=>Ti(N,N.x,N.z,s.walkSolids(N.x,N.z,0),z,Z,.38))}function Wp(u,M,T){let U=Math.sin(M.angle),N=Math.cos(M.angle);if(!T)return null;if(![.28,.5,.73,.92].some(me=>{let Oe=u.x+(T.x-u.x)*me,We=u.z+(T.z-u.z)*me,tt=Oe-M.x,le=We-M.z;return Math.abs(tt*U+le*N)<M.halfLength+.35&&Math.abs(tt*N-le*U)<M.halfWidth+.35}))return T;let ue=((u.x-M.x)*U+(u.z-M.z)*N>0?1:-1)*(M.halfLength+.8),se=(T.x-M.x)*N-(T.z-M.z)*U;return{x:M.x+U*ue+N*se,z:M.z+N*ue-U*se}}function Xp(u){let M=u.officer,T=u.car,U=Math.sin(T.angle),N=Math.cos(T.angle),R=T.halfLength+.7,ue=wu(T)??[{x:T.x-U*R,z:T.z-N*R},{x:T.x+U*R,z:T.z+N*R}].find(se=>Ti(se,se.x,se.z,s.walkSolids(se.x,se.z,0),z,Z,.37));return ue?(M.seated=!1,M.model.root.visible=!0,M.x=ue.x,M.z=ue.z,M.floorY=0,p(M),M.angle=T.angle,M.exitAnim=.38,M.model.shadow.visible=!0,T.doorTime=.65,u.mode="foot",!0):!1}function Tu(u,M){let T=z.includes(M)?M:null;if(he(u,M)>18||he(u,M)<.5||(T?T.integrity<=0:!en(M)))return!1;let U=l(u),N=(T?T.root.position.y:l(M))+(M===h?h.lift:0)+(T?1.08:1.27),R=f();if(!Pr([u.x,U+1.35,u.z],[M.x,N,M.z],R))return!1;u.angle=Math.atan2(M.x-u.x,M.z-u.z),u.model.root.position.set(u.x,U,u.z),u.model.root.rotation.y=u.angle;let ue=Math.atan2(U+1.42-N,Math.max(.4,he(u,M)));Os(u.model,0,0,!0,!0,0,ue),u.model.muzzle.getWorldPosition(Ke);let se=O*14+u.x,me=Math.sin(se)*(u.role==="ally"?.35:.48),Oe=M.x+Math.cos(u.angle)*me,We=M.z-Math.sin(u.angle)*me;It.set(Oe,N+Math.cos(se*1.4)*.32,We);let tt=Math.min(24,Ke.distanceTo(It)+1.65),le=Wt.subVectors(It,Ke).normalize(),Je=jo(u);T&&Je.push({actor:T,y:0,bounds:[M.x-.93,.3,M.z-1.02,M.x+.93,1.52,M.z+1.02]});let Be=pc(Ke.toArray(),le.toArray(),R,Je,tt,{ground:zn});if(u.role==="ally"&&(M.role==="police"||Gr(M)||Be.hit?.actor.role==="police")&&Fp(u,Be.hit?.actor),Be.hit&&(Be.hit.actor===M||Be.hit.actor.role==="civilian")){let we=u.role==="police"&&M===h?.62:.83;if(T&&Be.hit.actor===T){let ct=[Ke.x+le.x*Be.distance,Ke.y+le.y*Be.distance,Ke.z+le.z*Be.distance];Lp(T,ct[1]-T.root.position.y,u,ct)}else kn(Be.hit.actor,Math.round(fu(Ke.y+le.y*Be.distance-Be.hit.y)*we),u)}It.copy(Ke).addScaledVector(le,Be.distance),u.role!=="ally"&&(M===h||M===ne||Bf(Ke,It,ne??h))&&gi(u),a.emit(Ke.toArray(),Be,{enemy:!0});for(let we of Z)["civilian","clerk"].includes(we.role)&&!(we.brawl>0)&&he(we,u)<16&&(we.fear=Math.max(we.fear,4.5));return u.attack=(u.role==="police"?.91:1.07)+(Math.sin(se)+1)*.18,he(u,ne??h)<31&&ge.shot(),!0}function ea(u,M,T){let U=he(u,M);return u.stagger>0||u.exitAnim>0?{speed:0,aim:!1}:U<17&&u.attack<=0&&Tu(u,M)||u.attack>.28&&U<15.5?(u.angle=Yn(u.angle,Math.atan2(M.x-u.x,M.z-u.z),T*12),{speed:0,aim:!0}):{speed:U>3.3||Math.abs(l(u)-l(M))>1.8?Ic(u,M,4.4,T):0,aim:U<12}}function qp(u,M){if(di-=M,Mn){di<=0&&(Mn.role="civilian",Mn.fear=4,Mn=null,di=37);return}if(di>0)return;let T=S.find(U=>U.role==="civilian"&&en(U)&&he(U,u)>14&&he(U,Wi)<55);if(!T){di=8;return}T.role="rogue",Mn=T,di=63,T.attack=.1}let ta=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function Au(u){let M={kind:"car",shape:u.car.shape};return Ir(M,u.route,u.startShift),M}function na(u,M=!0){let{car:T,officer:U}=u;if(M){let N=Au(u);Qn(T,N),T.driver=N.driver}else{let N={};Ir(N,u.route),T.driver=N.driver;let R=Math.sin(T.angle),ue=Math.cos(T.angle),se=1/0;T.driver.route.forEach((me,Oe)=>{let We=me.x-T.x,tt=me.z-T.z,le=Math.hypot(We,tt)+(We*R+tt*ue<0?16:0);le<se&&(se=le,T.driver.next=Oe)})}u.mode="patrol",u.retaliation=null,u.stop=null,u.departing=!1,U.seated=!0,U.model.root.visible=!1,ei(T,0)}function Yp(u,M){let T=u.officer,U=ta[u.beat%ta.length];he(T,U)<1.1&&(u.beat++,U=ta[u.beat%ta.length]),u.intent=Dn(T,U,1.35,M)}function Zp(u,M){mt-=u,mt<=0&&at>0&&(De=xt(M),De&&(gt={x:M.x,z:M.z,y:l(M),health:100,seated:!1,angle:M.angle}),mt=.24);let T=at>0&&h.health>0?De?M:gt:Mn,U=T===Mn?Mn?1:0:_c(at);at>0&&(at=Math.max(0,at-u*(De?.23:1.1)),at===0&&(gt=null,De=!1,Ce("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),A.forEach((N,R)=>{let ue=N.officer,se=N.car;N.retaliation&&!en(N.retaliation)&&(N.retaliation=null);let me=N.retaliation,Oe=me??T,We=!!(me||T&&R<U);if(ue.health<=0){N.mode="disabled",se.driver=null,ue.down<=0&&he(ue,M)>13&&z.every(le=>le===se||he(le,N.berth)>3.5)&&(Ee(ue),Qn(se,N.berth),ei(se,0),N.mode="ready",N.retaliation=null);return}if(N.mode==="patrol"&&(We||se.integrity<=0)&&(N.mode="driving",se.driver=null,N.stop=null,N.stall=0,N.departing=!1),N.mode==="patrol")return;if(me&&(N.mode==="ready"||N.mode==="boarding"||N.mode==="reboard")&&(N.mode="foot"),N.mode==="ready"&&We){let le=se.integrity>0&&he(ue,se)<22;N.mode=le?"boarding":"foot",N.stop=null,N.stall=0,N.departing=le&&he(se,N.berth)<2}if(N.mode==="boarding"||N.mode==="reboard"){N.mode==="boarding"&&!We&&(N.mode="reboard"),N.mode==="reboard"&&We&&(N.mode="boarding");let le=wu(se);se.integrity<=0||he(ue,se)>45?N.mode=We?"foot":"ready":le&&he(ue,le)<.63?(ue.seated=!0,ue.model.root.visible=!1,se.doorTime=.6,N.mode==="reboard"?na(N,!1):N.mode="driving"):le&&(N.intent=Dn(ue,Wp(ue,se,le),N.mode==="boarding"?3.75:1.8,u))}if(N.mode==="driving"){if(!We&&se.integrity>0&&!N.departing){na(N,!1);return}let le=Oe?he(se,Oe):1/0;!We||se.integrity<=0||N.stall>8.2&&!N.maneuver||le<12.7&&!(Oe===ne&&Math.abs(ne.speed)>6)?(wi(se,u,{throttle:0,steer:0,brake:!0},r,z),Math.hypot(se.vx,se.vz)<2.7&&!Xp(N)&&se.integrity>0&&wi(se,u,{throttle:.21,steer:.26,brake:!1},r,z)):_p(N,Oe,r,z,Z,u)}else if(N.mode==="foot")We&&Oe===gt?N.intent=Dn(ue,Oe,3.45,u):We?N.combat=ea(ue,Oe,u):se.integrity>0&&he(ue,se)<40?N.mode="reboard":(N.mode="ready",he(M,se)>25&&z.every(le=>le===se||he(le,N.berth)>3.5)&&(Qn(se,N.berth),ei(se,0)));else if(N.mode==="ready"){let le=R<2&&he(M,ue)>24&&he(M,N.berth)>19&&he(ue,N.berth)<30?Au(N):null;le&&lu(le,z.filter(Je=>Je!==se),M,r)?na(N):Yp(N,u)}let tt=N.mode==="driving"||We&&N.mode==="foot";se.lamps.forEach((le,Je)=>{le.visible=!tt||Math.floor(O*8+Je)%2===0}),tt&&Y<=0&&he(M,se)<42&&(ge.siren(),Y=1.35)})}let Vr=(u,M,T)=>({x:u.x+Math.cos(u.angle)*M+Math.sin(u.angle)*T,z:u.z-Math.sin(u.angle)*M+Math.cos(u.angle)*T}),Eu=!1;function Jp(u,M){for(let T of z){let U=he(T,M)<60,N=T.kind==="bike",R=T.root.position.y,ue=T.lastImpact??0;if(T.impact>3.4&&T.impact>ue+1.5){let le=(T.lastSpeed??T.speed)>=0?1:-1,Je=Vr(T,0,le*(T.halfLength??1.1));U&&c.sparks(Je.x,R+.45,Je.z,8+Math.round(T.impact*2),3+T.impact*.3),N||(le>0?T.damageFront+=T.impact*1.7:T.damageRear+=T.impact*1.7)}T.lastImpact=T.impact,T.lastSpeed=T.speed;for(let le of T.bumpers??[]){let Je=le.end>0?T.damageFront:T.damageRear;if(le.state===0&&Je>22&&(le.state=1),le.state===1&&Je>48&&(le.state=2,t.attach(le.mesh),le.velocity.set(T.vx*.5+(Math.random()-.5),1.4,T.vz*.5+(Math.random()-.5)),le.spin=(Math.random()-.5)*5),le.state===2){let Be=le.mesh;Be.position.addScaledVector(le.velocity,u),le.velocity.y-=9.8*u;let we=zn(Be.position.x,Be.position.z)+.15;Be.position.y<we?(Be.position.y=we,le.velocity.y=0,le.velocity.x*=Math.exp(-u*5),le.velocity.z*=Math.exp(-u*5),le.spin*=Math.exp(-u*5),Be.rotation.x+=(0-Be.rotation.x)*Math.min(1,u*8),Be.rotation.z+=(0-Be.rotation.z)*Math.min(1,u*8)):Be.rotation.x+=le.spin*u*.6,Be.rotation.y+=le.spin*u}}if(T.wrecked){T.wreckClock=(T.wreckClock??0)+u,U&&T.wreckClock<30&&Math.random()<u*5&&c.engineSmoke(T.x,R+1.1,T.z,!0);continue}let se=Vr(T,0,N?.35:T.halfLength-.75),me=R+(N?.65:T.spec.belt+.1);if(T.integrity<45&&U&&Math.random()<u*(T.integrity<22?14:6)&&c.engineSmoke(se.x,me,se.z,T.integrity<22),!T.burning&&T.integrity<=12&&(T.burning=!0,T.fire=N?4.5:7,T===ne&&Ce("O ve\xC3\xADculo pegou fogo! Saia j\xC3\xA1.")),T.burning){if(T.fire-=u,T.integrity=Math.min(T.integrity,12),U)for(let le=0;le<2;le++)c.flame(se.x,me,se.z,N?.7:1.1);T.fire<=0&&Kp(T);continue}let Oe=Math.hypot(T.vx,T.vz),We=Math.abs(T.vx*Math.cos(T.angle)-T.vz*Math.sin(T.angle)),tt=T===ne&&Eu&&Oe>8;if(Oe>4&&(We>2.6||tt)){let le=-(T.wheelbase??1.5)/2,Je=N?[Vr(T,0,le)]:[Vr(T,-(T.halfWidth-.17),le),Vr(T,T.halfWidth-.17,le)];T.skid??=Je.map(Be=>({...Be})),he(T.skid[0],Je[0])>.45&&(Je.forEach((Be,we)=>{c.skid(T.skid[we].x,T.skid[we].z,Be.x,Be.z,zn(Be.x,Be.z)),T.skid[we]={...Be}}),U&&We>3.5&&c.tireSmoke(Je[0].x,R+.2,Je[0].z))}else T.skid=null}}function Kp(u){let M={x:u.x,z:u.z},T=u.root.position.y;u===ne&&(Ki(!0),kn(h,100,M));for(let U of[...u.passengers??[]])Rc(U),kn(U,100,M);(u.driver||Gr(u)?.officer.seated)&&Qo(u,100,M),u.burning=!1,u.wrecked=!0,u.integrity=0,u.driver=null,u.wreckClock=0,u.rider&&(u.rider.root.visible=!1),np(u),c.explosion(u.x,T,u.z),ge.explosion(),he(u,ne??h)<25&&(Ei=.35);for(let U of[...Z,h]){if(U.seated||U===h&&ne)continue;let N=he(U,M);if(N>7.5)continue;let R=1-N/7.5,ue=Math.max(.2,N),se=(U.x-M.x)/ue,me=(U.z-M.z)/ue;cc(U,se*(4+8*R),3+5*R,me*(4+8*R)),kn(U,Math.round(115*R),M)}for(let U of z){if(U===u||U.wrecked)continue;let N=he(U,M);if(N>7)continue;let R=1-N/7,ue=Math.max(.2,N);U.integrity=Math.max(0,U.integrity-48*R),U.vx+=(U.x-M.x)/ue*9*R/(U.handling?.mass??1),U.vz+=(U.z-M.z)/ue*9*R/(U.handling?.mass??1),U.damageFront+=18*R,U.damageRear+=18*R}for(let U of Z)he(U,M)<35&&["civilian","resident"].includes(U.role)&&(U.fear=Math.max(U.fear,6));u.lastHitBy===h&&hn(28,h)}function $p(u,M){let T={player:ne,vehicles:gu()},U=A.filter(N=>N.mode==="patrol").map(N=>N.car);cp([...E,...U],T,Z,r,u,g,s.signals),C.forEach((N,R)=>{if(N.wrecked&&(N.wreckClock??0)>40&&he(M,N)>40){let{x:ue,z:se,angle:me}=[..._,...w][R];he(M,{x:ue,z:se})>40&&(Qn(N,{x:ue,z:se,angle:me}),N.stolen=!1)}});for(let N of C)N!==ne&&Math.hypot(N.vx,N.vz)>.06?wi(N,u,{throttle:0,steer:0,brake:!0},r,T.vehicles):N!==ne&&(N.impact=Math.max(0,N.impact-u*21));for(let N of z){if(N.routeIndex>=0&&N!==ne){N.abandoned+=u;let R=!N.driver&&N.abandoned>25||N.wrecked&&(N.wreckClock??0)>30,ue=N.integrity<=0||(N.driver?.stuck??0)>13;if((R||ue)&&he(M,N)>17){let se={};if(Ir(se,N.routeIndex),se.kind=N.kind,se.shape=N.shape,lu(se,T.vehicles.filter(me=>me!==N),M,r)){Object.assign(N,se);let me=N.ownDriver;me&&!me.seated&&!me.riding&&me.role==="civilian"&&he(me,M)>20&&(Ee(me),me.seated=!0,me.model.root.visible=!1)}}}N!==ne&&N.impact>5&&he(M,N)<18&&dt<=0&&(ge.crash(),dt=.32),ei(N,u,N.steer),N.rider&&(N.rider.root.visible=!!N.driver&&N.integrity>0,N.rider.root.visible&&tu(N.rider,N))}if(ne){if(ne.impact>4.1&&dt<=0){ge.crash(),Ei=.24,dt=.36;let N=ne,R=N.impact;Ce(N.integrity<43?"Motor avariado.":"Colis\xE3o."),ne&&N.kind==="bike"&&R>10.5&&(kn(h,Math.min(40,Math.round(R*1.6))),N.integrity=Math.max(0,N.integrity-8),Ki(!0),Ce("Voc\xEA caiu da moto."))}if(ne&&ne.integrity<=0&&Math.hypot(ne.vx,ne.vz)<3){let N=Sc(ne);Ki(!0),Ce(N+" sem condi\xE7\xF5es de rodar.")}}}function Dn(u,M,T,U){if(!M)return 0;let N=d(u),R=he(u,M);if(R<.13)return 0;let ue=s.interiorAt(u.x,u.z,l(u)),se=s.interiorAt(M.x,M.z,M.y??l(M));if(!ue&&!se&&R>5.9)return o(u,M,T,U);let me=M,Oe=(le,Je)=>[.24,.46,.68,.88,1].every(Be=>Ln(le.x+(Je.x-le.x)*Be,le.z+(Je.z-le.z)*Be,.29,N));if(!Oe(u,M)){let le=1/0;for(let Je of N)if(!(he(u,Je)>Math.hypot(Je.w,Je.d)*.5+3.1))for(let Be of[-1,1])for(let we of[-1,1]){let ct={x:Je.x+Be*(Je.w*.5+.44),z:Je.z+we*(Je.d*.5+.44)},Ft=he(u,ct),bn=he(ct,M);if(Ft<.3||Ft>4.5||!Oe(u,ct))continue;let ti=Ft+bn+(bn>R+.25?1.7:0);ti<le&&(le=ti,me=ct)}}let We=Math.atan2(me.x-u.x,me.z-u.z);u.angle=Yn(u.angle,We,U*8.5);let tt=Math.min(T*U,he(u,me));return Oo(u,u.x+Math.sin(We)*tt,u.z+Math.cos(We)*tt,.26,N)?T:0}function Cu(u,M){let T=l(u);if(s.interiorAt(u.x,u.z,T))return{x:u.x,z:u.z,y:T};let U=Math.floor((Math.sqrt(1+M)-1)*.75),N=(M%2===0?1:-1)*(1.05+M%5*.66),R=(z.includes(u)?u.halfLength+3.2:3.1)+U*1.1,ue=Math.sin(u.angle),se=Math.cos(u.angle);return{x:u.x-ue*R+se*N,z:u.z-se*R-ue*N,y:T}}function Ic(u,M,T,U){let N=s.interiorAt(u.x,u.z,l(u)),R=s.interiorAt(M.x,M.z,M.y??l(M));if(N?.buildingId===R?.buildingId&&Math.abs((N?.floor??0)-(R?.floor??0))<1.1)return u.pursuitRoute=[],u.pursuitKey="",Dn(u,M,T,U);let ue=(R?.buildingId??"street")+":"+(R?.floor??0);if(u.pursuitKey!==ue){u.pursuitKey=ue;let se=[],me=s.buildings.find(le=>le.id===N?.buildingId),Oe=s.buildings.find(le=>le.id===R?.buildingId),We=me?.units.find(le=>Math.abs(le.floor-N.floor)<.25),tt=Oe?.units.find(le=>Math.abs(le.floor-R.floor)<.25);me&&se.push(We?.inside,We?.entry,We?.outside,...[...We?.stairs??[]].reverse(),me.inside,me.entry,me.outside),Oe&&se.push(Oe.outside,Oe.entry,Oe.inside,...tt?.stairs??[],tt?.outside,tt?.entry,tt?.inside),u.pursuitRoute=se.filter(Boolean)}for(;u.pursuitRoute.length&&he(u,u.pursuitRoute[0])<.66&&Math.abs(l(u)-(u.pursuitRoute[0].y??0))<.85;)u.pursuitRoute.shift();return Dn(u,u.pursuitRoute[0]??M,T,U)}function jp(u,M,T){let U=u.itinerary[0];return U?he(u,U)<.58&&Math.abs(l(u)-(U.y??0))<1.1?(u.itinerary.shift(),0):Dn(u,U,M,T):0}function Qp(u){let M=u.calling;u.calling=null,!(!M||u.health<=0)&&(at=Math.min(64,Math.max(at,0)+M.pressure*.7),gt={x:M.x,z:M.z,y:0,health:100,seated:!1,angle:0},De=!1,Ce("Uma testemunha ligou para a pol\xEDcia."))}function em(u,M){if(u.brawl-=M,u.health<35)return u.brawl=0,u.fear=6,{speed:0};let T=he(u,h);if(T>16)return u.brawl=0,{speed:0};if(u.punchLand>0&&(u.punchLand-=M,u.punchLand<=0&&he(u,h)<1.4&&h.health>0&&!h.ragdoll)){kn(h,6,u);let U=Math.max(.2,T);h.pushX+=(h.x-u.x)/U*2.4,h.pushZ+=(h.z-u.z)/U*2.4,ge.punch(!0)}return T>1.15?{speed:Dn(u,h,3.6,M)}:(u.angle=Yn(u.angle,Math.atan2(h.x-u.x,h.z-u.z),M*10),u.attack<=0&&(u.punchT=Nr,u.punchHand=1-(u.punchHand??0),u.attack=1.05,u.punchLand=Vs),{speed:0})}function Ru(){let u=[];He&&!ne&&en(h)&&u.push(h);for(let M of $t)M.order==="dealer"&&en(M)&&M.post&&he(M,M.post)<1.6&&u.push(M);return u}let Hr=()=>Object.keys(Ws).filter(u=>be[u]>0);function tm(u){if(ot-=u,!(ot>0)&&(ot=4+Math.random()*4,!!Hr().length))for(let M of Ru()){if(Z.some(U=>U.buyer?.seller===M))continue;let T=Z.find(U=>U.role==="civilian"&&en(U)&&U.fear<=0&&!U.buyer&&!U.calling&&!(U.brawl>0)&&!U.itinerary.length&&he(U,M)>4&&he(U,M)<38&&(U.boughtAt??-99)<O-45);T&&(T.buyer={seller:M,wait:0})}}function nm(u,M){let T=u.buyer,U=T.seller;if(!Ru().includes(U)||!Hr().length)return u.buyer=null,0;if(he(u,U)>1.3)return Dn(u,U,1.6,M);if(u.angle=Yn(u.angle,Math.atan2(U.x-u.x,U.z-u.z),M*6),T.wait+=M,T.wait<1.6)return 0;let N=Hr(),R=N[Math.floor(Math.random()*N.length)];return be[R]--,Se+=Ws[R].retail,u.buyer=null,u.boughtAt=O,U===h?(Ce("+R$ "+Ws[R].retail+" \xB7 "+Ws[R].name),ge.sale(),xt(h)?hn(16,h,!0):sn(h,12)):(U.sales=(U.sales??0)+Ws[R].retail,he(U,ne??h)<30&&ge.sale()),0}function im(u,M){let T=f();for(let N of A){let R=N.officer;!en(R)||N.retaliation||he(R,u)<26&&Lr({...R,ground:l(R)},{...u,ground:l(u)},T,{range:26,fov:Math.PI*.9,eye:1.6,aim:1.2})&&(N.retaliation=u)}let U=A.map(N=>N.officer).filter(N=>en(N)&&he(N,u)<22&&A.some(R=>R.officer===N&&R.retaliation===u)).sort((N,R)=>he(N,u)-he(R,u))[0];if(U){if(u.health>45)return u.fleeing=!1,ea(u,U,M);u.fleeing=!0;let N=Math.atan2(u.x-U.x,u.z-U.z),R={x:u.x+Math.sin(N)*6,z:u.z+Math.cos(N)*6};return{speed:Dn(u,R,4.6,M),aim:!1}}return u.post&&he(u,u.post)>.8?{speed:Dn(u,u.post,u.fleeing?3.2:2.6,M),aim:!1}:(u.fleeing=!1,{speed:0,aim:!1})}function sm(u){let M=$t.filter(T=>en(T)&&!T.riding);if(!M.length){Ce("Recrute algu\xE9m primeiro.");return}if(u==="toggle"&&(u=M.some(T=>T.order!=="wait"&&T.order!=="dealer")?"wait":"follow"),u==="follow"||u==="wait"){for(let T of M)(T.order!=="dealer"||u==="follow"&&xn===T)&&(T.order=u,T.hold={x:T.x,z:T.z},T.post=null);Ce(u==="wait"?"Gangue: esperem aqui.":"Gangue: comigo.")}else if(u==="attack"){let U=(xn&&xn.role!=="ally"?xn:null)??A.map(N=>N.officer).filter(N=>en(N)&&he(N,h)<30&&at>0).sort((N,R)=>he(N,h)-he(R,h))[0];U?(gi(U),Ce("Gangue: ataquem!")):Ce("Mire no alvo para a gangue atacar.")}else if(u==="dealer"){let T=xn?.role==="ally"?xn:M.filter(U=>U.order!=="dealer"&&he(U,h)<15).sort((U,N)=>he(U,h)-he(N,h))[0];if(!T){Ce("Nenhum integrante perto para montar o ponto.");return}if(T.order==="dealer"){T.order="follow",T.post=null,Ce("Ponto desfeito.");return}T.order="dealer",T.post={x:T.x,z:T.z},T.sales=0,T.boardCar=null,Ce(Hr().length?"Ponto de venda montado.":"Ponto montado, mas falta estoque.")}ge.bell()}function rm(u){if(de!=="pad"&&de!=="touch")return;let M=.2,T=null;for(let{actor:U,y:N}of jo(h)){if(U.role==="ally"||he(U,h)>28)continue;qe.set(U.x,N+1.25,U.z).project(i);let R=Math.hypot(qe.x,qe.y);qe.z<1&&R<M&&(M=R,T={x:qe.x,y:qe.y})}T&&(lt-=_t(T.x*2.2*u,-.04,.04),Xe-=_t(T.y*1.6*u,-.03,.03))}function Iu(u,M,T=!1){Z=B.filter(R=>he(R,M)<(R.role==="civilian"?69:47)||R.role==="ally"||R.role==="police"||R===Mn||R===Zt);let U=new Set(Z);for(let R of B)R.model.root.visible=U.has(R)&&!R.seated;let N=new Map(Z.map(R=>[R,{x:R.x,z:R.z}]));T||(qp(M,u),Zp(u,M));for(let R of Z){if(R.seated||(R.attack-=u,R.stagger=Math.max(0,R.stagger-u),R.injuryCooldown-=u,R.exitAnim=Math.max(0,R.exitAnim-u),R.exitAge+=u,R.ragdoll&&R.health>0&&hc(R,u,l(R),(le,Je)=>!Ln(le,Je,.22,d(R)))))continue;if(R.health<=0){if(R.down=Math.max(0,R.down-u),R.deadTime+=u,R.ragdoll)hc(R,u,l(R),(le,Je)=>!Ln(le,Je,.22,d(R))),R.drop&&R.drop.position.set(R.x,l(R)+.019,R.z);else if(R.deadTime<1.2){R.x+=R.pushX*u,R.z+=R.pushZ*u,R.pushX*=Math.exp(-u*5),R.pushZ*=Math.exp(-u*5);let le=Go(R.model,R.deadTime,R.fallDir);R.model.root.rotation.set(le,R.angle,0),R.model.root.position.set(R.x,l(R)+Math.abs(Math.sin(le))*.17,R.z),R.drop&&R.drop.position.set(R.x+Math.sin(R.angle)*R.fallDir*1.25,l(R)+.019,R.z+Math.cos(R.angle)*R.fallDir*1.25)}if(R.drop){let le=Math.min(.63,.32+(19-R.down)*.09);R.drop.rotation.z=R.angle,R.drop.scale.set(Math.max(.38,le),Math.max(.24,le*.68),1)}R.role!=="police"&&R.down<=0&&he(R.home,M)>7&&he(R,M)>7&&(Ee(R),L.includes(R)&&(R.seated=!0,R.model.root.visible=!1));continue}let ue=0,se=!1,me=A.find(le=>le.officer===R);if(me)ue=me.combat?.speed??me.intent??0,se=!!me.combat?.aim,me.intent=0,me.combat=null;else if(R.role==="ally"&&R.order==="dealer")({speed:ue,aim:se}=im(R,u));else if(R.role==="ally")if(R.boardCar)ue=Np(R,u);else if(Cc(Zt))({speed:ue,aim:se}=ea(R,Zt,u));else if(R.order==="wait")R.hold&&he(R,R.hold)>.9&&(ue=Dn(R,R.hold,3.4,u));else{let le=Cu(M,$t.indexOf(R));(he(le,R)>1.25||Math.abs(l(R)-le.y)>1.75)&&(ue=Ic(R,le,ne?6.1:4.45,u))}else if(R.role==="rogue"){let le=S.filter(Be=>Be!==R&&Be.role==="civilian"&&en(Be)).sort((Be,we)=>he(R,Be)-he(R,we))[0],Je=A.map(Be=>Be.officer).find(Be=>en(Be)&&he(Be,R)<15);(Je||le)&&({speed:ue,aim:se}=ea(R,Je??le,u))}else if(R.brawl>0&&!ne&&en(h))({speed:ue}=em(R,u));else if(R.calling)R.calling.time-=u,R.angle=Yn(R.angle,Math.atan2(R.x-R.calling.x,R.z-R.calling.z),u*4),R.calling.time<=0&&Qp(R);else if(R.buyer&&R.fear<=0)ue=nm(R,u);else if(R.surrender<=0){let le=R.path[R.next];if(R.role==="civilian"&&!R.itinerary.length&&R.fear<=0&&D.length&&(R.scheduleClock-=u,R.scheduleClock<=0)){let Je=D[Math.floor(Math.abs(R.home.x*11+R.home.z*4+O))%D.length];he(R,Je.outside)<38&&(R.itinerary=[Je.outside,Je.entry,Je.inside,Je.entry,Je.outside]),R.scheduleClock=36+Math.abs(R.home.x)%25}if(R.fear=Math.max(0,R.fear-u),R.fear>0&&he(R,M)<15){let Je=Math.atan2(R.x-M.x,R.z-M.z);for(let Be of[0,.84,-.84,1.52,-1.52]){let we=Je+Be;if(Oo(R,R.x+Math.sin(we)*3.7*u,R.z+Math.cos(we)*3.7*u,.22,d(R))){R.angle=Yn(R.angle,we,u*8),ue=3.7;break}}}else R.itinerary.length?ue=jp(R,R.pace,u):le&&(he(R,le)<.54&&(R.next=(R.next+1)%R.path.length,le=R.path[R.next]),ue=Dn(R,le,R.pace,u))}let Oe=N.get(R);if(Oe&&R.exitAnim<=0){let le=R.x-Oe.x+R.pushX*u,Je=R.z-Oe.z+R.pushZ*u;R.x=Oe.x,R.z=Oe.z;let Be=me?.mode==="boarding"?z.filter(Ft=>Ft!==me.car):z,we=R.boardCar?Z.filter(Ft=>Ft.role!=="ally"):Z,ct=rc(R,le,Je,d(R),l(R)>1.25?[]:Be,[...we,...ne?[]:[h]],.29);if(ue>0&&ct<ue*u*.35){let Ft=R.detourSide??1,bn=ue*u;rc(R,Ft*Math.cos(R.angle)*bn,-Ft*Math.sin(R.angle)*bn,d(R),Be,[...we,...ne?[]:[h]],.29)<bn*.25&&(R.detourSide=-Ft),R.repath=0}ue>0&&(ue=Math.min(ue,ct/u))}if(R.pushX*=Math.exp(-u*7.6),R.pushZ*=Math.exp(-u*7.6),!T&&R.injuryCooldown<=0){let le=Pu(R,2.8);if(le){let{car:Je,speed:Be,vx:we,vz:ct}=le,Ft=pu(Be);R.pushX=_t(we,-8,8)*.59,R.pushZ=_t(ct,-8,8)*.59,Ft>0&&(R.injuryCooldown=1.18,Be>6.5&&cc(R,we*.7,1.8+Be*.16,ct*.7),kn(R,Ft),Je===ne&&Ft>12&&hn(19))}}let We=R.model;if(R.health<=0)continue;p(R),We.root.position.set(R.x,l(R)+R.exitAnim*.35,R.z);let tt=R.stagger>0?Math.sin(R.stagger/.32*Math.PI)*.24:0;We.root.rotation.set(R.exitAnim*.7-tt,R.angle,R.exitAnim*R.exitSide*.89+(R.stagger>0?Math.sin(R.stagger*9)*.12:0)),Os(We,u,R.exitAnim>0?2.9:ue,se,["police","rogue","ally"].includes(R.role),0,0,R.surrender>0),R.punchT>0?(R.punchT=Math.max(0,R.punchT-u),du(We,{punch:R.punchT,hand:R.punchHand??0})):R.calling?(We.arms[0].rotation.set(-2.35,0,-.55),We.forearms[0].rotation.set(-2.05,0,0)):R.order==="dealer"&&ue<.1&&!se&&(We.arms[0].rotation.set(-.4,0,-.25),We.arms[1].rotation.set(-.4,0,.25),We.forearms[0].rotation.set(-1.5,0,.4),We.forearms[1].rotation.set(-1.5,0,-.4))}if(!T&&!ne&&l(h)<1.15&&h.health>0&&h.lift<.3&&Ci<=0){let R=Pu(h,2.35);if(R){let{speed:ue,vx:se,vz:me}=R,Oe=pu(ue);h.pushX=_t(se,-13,13)*.73,h.pushZ=_t(me,-13,13)*.73,h.trip=ue>=5.3?Math.min(.82,.35+ue*.021):.12,h.vx=h.vz=0,ue>7&&cc(h,se*.65,1.6+ue*.14,me*.65),Oe>0&&(kn(h,Oe),ge.crash(),Ce("Voc\xEA foi atropelado.")),Ci=.87}}}function Pu(u,M){for(let T of z){if(l(u)>1.2||he(T,u)>5)continue;let U=W.get(T),N=U&&he(U,T)<3?U:null,R=N?Math.hypot(N.vx,N.vz):0,ue=Math.hypot(T.vx,T.vz),se=Math.max(ue,R);if(!(se<M||!Of(T,N,u)))return{car:T,speed:se,vx:R>ue?N.vx:T.vx,vz:R>ue?N.vz:T.vz}}return null}function om(u,M){s.updateDoors(u,[M,...Z.filter(T=>en(T))])}function am(u,M,T){let U=l(M),N=ne?null:s.interiorAt(M.x,M.z,U),R=!!N;kr!==R&&(kr=R,xe=!0);let ue=i.aspect<.85,me=R?T?2.25:3.4:ne?ne.kind==="bike"?8.2:ue?12:10.2:T?4.45:ue?7.9:6.5,Oe=ne?1.95+ne.root.position.y:1.38+U+h.lift*.46,We=ne?0:T?.61:.22,tt=T?.1+Xe*.19:Math.max(R?.28:.1,Xe);Ve.set(M.x+Math.cos(lt)*We,Oe,M.z-Math.sin(lt)*We),rt.set(Ve.x-Math.sin(lt)*me*Math.cos(tt),Oe+Math.sin(tt)*me,Ve.z-Math.cos(lt)*me*Math.cos(tt));function le(ct){N&&(ct.x=_t(ct.x,N.x-N.w*.5+.3,N.x+N.w*.5-.3),ct.z=_t(ct.z,N.z-N.d*.5+.3,N.z+N.d*.5-.3),ct.y=_t(ct.y,N.floor+.55,N.ceiling-.42))}le(rt),s.viewBlocked(Ve.x,Ve.y,Ve.z,.12,!R)&&Ve.set(M.x,Oe,M.z);for(let ct=.06;ct<=1.0001;ct+=.04){let Ft=Mr.lerp(Ve.x,rt.x,ct),bn=Mr.lerp(Ve.y,rt.y,ct),ti=Mr.lerp(Ve.z,rt.z,ct);if(s.viewBlocked(Ft,bn,ti,.32,!R)||z.some(Zs=>Zs!==ne&&he(Zs,{x:Ft,z:ti})<2.1&&bn<Zs.root.position.y+1.7)){rt.lerp(Ve,1-Math.max(.02,ct-.07));break}}le(rt);let Je=T?14:1,Be=Re?Xe:Xe-.22,we=T?Oe-Math.tan(Be)*Je:Oe-.07;ve.set(Ve.x+Math.sin(lt)*Je,we,Ve.z+Math.cos(lt)*Je),xe?(i.position.copy(rt),xe=!1):i.position.lerp(rt,1-Math.exp(-u*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!R)&&i.position.copy(rt),le(i.position),i.lookAt(ve),i.updateMatrixWorld()}function $i(u,M,T){te.fillStyle=M,te.beginPath(),te.arc(Ae(u.x),Ae(u.z),T,0,Math.PI*2),te.fill()}function lm(u,M){let T=_c(at),U=Math.round(he(u,En));Ye("detail").textContent="Casa "+U+" m \xB7 Loja "+Math.round(he(u,wr))+" m",Ye("cash").textContent="R$ "+Se.toLocaleString("pt-BR");let N=$t.filter(kt=>kt.order==="dealer"&&en(kt)),R=$t.some(kt=>kt.order==="wait");Ye("crew").textContent="Gangue "+$t.length+($t.length?R?" \xB7 esperando":" \xB7 seguindo":"")+(N.length?" \xB7 "+N.length+" no ponto":"");let ue=ft();Ye("stash").hidden=!ue,Ye("stash").textContent=ue;let se=N.reduce((kt,hm)=>kt+(hm.sales??0),0);Ye("selling").hidden=!He&&!N.length,Ye("selling").textContent=(He?"Seu ponto de venda est\xE1 aberto. ":"")+(N.length?"Ponto da gangue: R$ "+se:"");let me=Ye("prompt"),Oe=de==="pad"?"Y \xB7 ":de==="keyboard"?"E \xB7 ":"",We=Gt(),tt=!!We,le=mu(),Je=xu(),Be=ne??_u(),we=Ys(),ct=Zn(),Ft=Qt&&M&&Ji<=0;me.hidden=!(Be||tt||le||Je||we||ct||Ji>0||Ft);let bn=we?"Guardar na garagem":ne?"Sair "+(ne.kind==="bike"?"da moto":"do carro"):ct?"Tirar ve\xEDculo da garagem":le?"Salvar na porta de casa":tt?rn[We.service]:Je?"Porta trancada":Be?"Pegar "+Sc(Be):"";me.textContent=Ji>0?$o:Ft?"Mantenha a mira \xB7 "+Math.ceil(Qt.left)+" s":Oe+bn,Ye("heat").hidden=!T,Ye("heat").textContent="\u2605".repeat(T)+" PROCURADO";let ti=H==="rifle"?"Fuzil":"Pistola";Ye("mode").textContent=ne?Sc(ne)+" \xB7 "+Math.round(ne.integrity)+"%"+(ne.burning?" \xB7 FOGO":""):oe?ti:"Vila Brasa",Ye("reading").textContent=ne?Math.round(Math.hypot(ne.vx,ne.vz)*3.6)+" km/h":oe?ae+" balas":"Punhos";let Zs=Ye("health");Zs.value=h.health,Zs.title="Vida: "+Math.ceil(h.health)+"%",Ye("crosshair").hidden=!(M||oe&&On>0&&!ne),Ye("interact").textContent=ne?"Sair":le?"Salvar":tt?"Loja":"Entrar",Ye("sprint").textContent=ne?"Freio":"Correr",Ye("aim").hidden=!!ne,Ye("fire").hidden=!!ne||!oe,Ye("weapon").hidden=!!ne||!(_e||ce),Ye("weapon").textContent="Arma",Ye("sell").hidden=!!ne,Ye("gang").hidden=!!ne||!$t.length,Ye("sell").setAttribute("aria-pressed",String(!!He)),Ye("jump").hidden=Ye("punch").hidden=!!ne,Ye("recruit").hidden=!!ne||!M,Ye("hud").classList.toggle("armed",!ne),Ye("hud").classList.toggle("driving",!!ne),te.drawImage(ee,0,0);for(let kt of b)kt!==ne&&kt.integrity>0&&$i(kt,kt.driver?"#82b9b3":"#eab987",kt.kind==="bike"?2.2:kt.driver?2.6:3.5);$i(wr,"#eaff89",6),$i(En,"#dcc39b",5);for(let kt of D)kt.service==="black"&&$i(kt.entry,"#c58cff",3.2);$i(Wi,"#99c6ff",5);for(let kt of D)kt.kind!=="armory"&&$i(kt.entry,"#dbae80",2.5);for(let kt of A)["driving","patrol","foot"].includes(kt.mode)&&$i(kt.officer.seated?kt.car:kt.officer,kt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let kt of $t)$i(kt,"#97ebaf",3.5);te.save(),te.translate(Ae(u.x),Ae(u.z)),te.rotate(-(ne?ne.angle:h.angle)),te.fillStyle="#fff9e6",te.strokeStyle="#243938",te.lineWidth=2.7,te.beginPath(),te.moveTo(0,10),te.lineTo(-6,-6),te.lineTo(0,-3),te.lineTo(6,-6),te.closePath(),te.stroke(),te.fill(),te.restore()}function cm(u){let M=(u-Qe)/1e3,T=_t(M,1/240,.05);Qe=u,O+=T;let U=ia.read(!!ne,T);if(zr.open){U.cancel||U.interact?Bn():U.confirm?Ge.activate():U.navUp?Ge.move(-1):U.navDown?Ge.move(1):(Me-=T,Math.abs(U.y)>.6&&Me<=0&&(Ge.move(U.y>0?-1:1),Me=.22),Math.abs(U.y)<.3&&(Me=0)),e.render(t,i);return}if(Rt){if(Xt){de=U.mode;for(let We of z)W.set(We,{x:We.x,z:We.z,vx:We.vx,vz:We.vz});U.weapon&&(_e||ce)&&!ne&&zt(),U.order&&sm(U.order),U.sell&&!ne&&(He?(He=null,Ce("Ponto de venda fechado.")):Hr().length?(He={x:h.x,z:h.z},Ce("Ponto de venda aberto. Fique parado.")):Ce("Sem estoque. Compre no mercado negro da casa de penhores.")),He&&(ne||he(h,He)>4)&&(He=null,Ce("Ponto de venda fechado.")),tm(T);let N=U.aim&&!ne&&_n<=0&&h.health>0;if(N!==Re&&(Xe=N?.015:.22,Re=N),Q=Math.abs(U.lookX)+Math.abs(U.lookY)>.003?0:Q+T,lt-=U.lookX,Xe=_t(Xe+U.lookY,N?-1.03:-.31,.84),ne&&Q>1.2&&(Xe+=(.24-Xe)*T),N&&rm(T),dt-=T,Dt-=T,Nt-=T,Ci-=T,Y-=T,Ji-=T,Le-=T,a.update(T),c.update(T),s.signals.update(T),_n=Math.max(0,_n-T),ys&&(vs-=T,vs<=0&&kp()),fi-=T,Ei-=T,On-=T,Xs-=T,Mt>0&&(Mt-=T,Mt<=0&&Ep()),Ut&&(Ut.delay-=T,Ut.delay<=0)){let We=Ut.car;Ut=null,h.health>0&&We.integrity>0&&he(h,We)<3.75&&Tc(We)}if(U.interact&&Cp(),zr.open)return;let R=s.props.update(T,z,ne??h);R.shadow&&(s.sun.shadow.needsUpdate=!0);for(let We of R.events)he(We,ne??h)<30&&(We.heavy?ge.crash():ge.punch(!0));om(T,ne??h),ne?Vp(T,U):Hp(T,{...U,aim:N}),Eu=!!U.brake,$p(T,ne??h),Jp(T,ne??h),ne&&(h.x=ne.x,h.z=ne.z),Up(T),Zt&&!Cc(Zt)&&(Zt=null),ne?.kind==="bike"&&tu(h.model,ne);let ue=ne??h;Iu(T,ue),Su(ue),Rp(T),ge.motor(ne?.speed??0,!!ne);let se=ne??h,me=N&&!ne&&h.health>0;U.fire&&oe&&!ne&&h.health>0&&ae>0&&(On=1.38),am(T,se,me||!ne&&On>0),me&&(Xs<=0||U.recruit||U.punch||U.fire&&Dt<=0)?(xn=Pp(),Xs=.092):me||(xn=null),U.recruit&&!ne&&zp(xn),Op(T,me&&oe?xn:null),(U.punch||U.fire&&!oe)&&!ne&&Bp(),U.fire&&!ne&&Gp(me),Ye("hitmark").hidden=fi<=0,Ye("impact").hidden=Ei<=0,s.marker.visible=he(se,wr)>2.8&&he(se,wr)<13,s.beacon.rotation.y=O*2,s.beacon.position.y=2.55+Math.sin(O*4)*.27,I-=T,I<=0&&(lm(se,me),I=.1)}}else{let N=.54+Math.sin(O*.13)*.19,R=i.aspect<1?26:30;i.position.set(24+Math.sin(N)*R,14,17+Math.cos(N)*R),i.lookAt(10,2,13),Iu(T,h,!0),Su(h)}e.render(t,i),Xt&&Fr.value==="auto"&&M>0&&M<.22&&Ri>.7&&(q+=M,++P>=85&&(q/P>.026&&(Ri=Math.max(.69,Ri-.16),ke()),P=0,q=0))}let ia=mp(()=>{zr.open?Bn():Xt?Ne(!1):Lu()},()=>Xt),Pc=bc("quality");(Pc==="low"||Pc==="high")&&(Fr.value=Pc),Fr.addEventListener("change",()=>{bc("quality",Fr.value),Ri=1,ke()}),Ye("sound").addEventListener("click",()=>{bc("sound",ge.toggle()?"on":"off"),Ie()}),Ye("pause").addEventListener("click",()=>Ne(!1)),Ye("reset").addEventListener("click",()=>{Ze(),Ne(!0)}),Ye("close-shop").addEventListener("click",Bn),zr.addEventListener("cancel",u=>{u.preventDefault(),Bn()});function Lu(){if(!Rt&&nn){Object.assign(h,{x:nn.x,z:nn.z,health:nn.health,floorY:0}),p(h),Se=nn.cash,_e=nn.armed,ce=nn.rifle,re=_e?nn.ammo:0,Te=ce?nn.rifleAmmo:0,H="pistol",ae=re,Ot(_e?"pistol":ce?"rifle":"fists"),Object.assign(be,nn.stash),pe=nn.look,ln(h,pe),nn.garage&&(vu(nn.garage.kind,nn.garage.model,nn.garage.color),it=!0,wc(Ue));for(let u of new Set(nn.recruits)){let M=typeof u=="number"?S[u]:k.get(u);M&&(M.role="ally",M.order="follow",M.seated=!1,M.riding=null,M.model.root.visible=!0,$t.push(M))}Ne(!0),lt=-Math.PI/2}else Ne(!0)}Or.addEventListener("click",Lu),document.addEventListener("visibilitychange",()=>{document.hidden&&Xt&&Ne(!1)}),window.addEventListener("resize",ke),e.domElement.addEventListener("webglcontextrestored",ke),Ze(),Ie(),ke(),Ko(),Or.disabled=!1,Qe=performance.now(),e.setAnimationLoop(cm)}try{Vv()}catch(n){console.error(n),Or.textContent="3D indispon\xEDvel",Ye("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
