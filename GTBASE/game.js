(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Id=0,_h=1,Pd=2;var Us=1,Ld=2,Rr=3,xs=0,bn=1,En=2,Fs=0,_s=1,Bo=2,yh=3,vh=4,Dd=5;var zs=100,Nd=101,Ud=102,Fd=103,zd=104,Od=200,Bd=201,kd=202,Gd=203,Mh=204,bh=205,Vd=206,Hd=207,Wd=208,Xd=209,qd=210,Yd=211,Zd=212,Jd=213,Kd=214,Ga=0,Va=1,Ha=2,br=3,Wa=4,Xa=5,qa=6,Ya=7,Sh=0,$d=1,jd=2,Ri=0,wh=1,Th=2,Ah=3,ko=4,Eh=5,Ch=6,Rh=7;var Ih=300,Os=301,Ir=302,xl=303,_l=304,Za=1e3,Ai=1001,Ja=1002,xn=1003,Qd=1004;var Go=1005;var _n=1006,yl=1007;var Ji=1008;var qn=1009,Ph=1010,Lh=1011,Pr=1012,vl=1013,_i=1014,li=1015,yi=1016,Ml=1017,bl=1018,Bs=1020,Dh=35902,Nh=35899,Uh=1021,Fh=1022,ni=1023,Hi=1026,Ki=1027,Sl=1028,wl=1029,ys=1030,Tl=1031;var Al=1033,Vo=33776,Ho=33777,Wo=33778,Xo=33779,El=35840,Cl=35841,Rl=35842,Il=35843,Pl=36196,Ll=37492,Dl=37496,Nl=37488,Ul=37489,qo=37490,Fl=37491,zl=37808,Ol=37809,Bl=37810,kl=37811,Gl=37812,Vl=37813,Hl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Zl=37819,Jl=37820,Kl=37821,$l=36492,jl=36494,Ql=36495,ec=36283,tc=36284,Yo=36285,nc=36286;var mo=2300,Ka=2301,Ba=2302,hh=2303,uh=2400,dh=2401,fh=2402;var ef=3200;var ic=0,tf=1,$i="",un="srgb",go="srgb-linear",xo="linear",Dt="srgb";var ka=7680;var nf=519,sf=512,rf=513,of=514,zh=515,af=516,lf=517,Oh=518,Bh=519,cf=35044,sc=35048;var kh="300 es",ai=2e3,Sr=2001;function Um(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hf(){let n=_o("canvas");return n.style.display="block",n}var nd={},wr=null;function Gh(...n){let e="THREE."+n.shift();wr?wr("log",e,...n):console.log(e,...n)}function uf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=uf(n);let e="THREE."+n.shift();if(wr)wr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=uf(n);let e="THREE."+n.shift();if(wr)wr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function uo(...n){let e=n.join(" ");e in nd||(nd[e]=!0,at(...n))}function df(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ff={[Ga]:Ga,[Ha]:qa,[Wa]:Wa,[br]:Xa,[Va]:Va,[qa]:Ha,[Ya]:Ya,[Xa]:br},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=1234567,fo=Math.PI/180,Tr=180/Math.PI;function Lr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Vh(n,e){return(n%e+e)%e}function zm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Om(n,e,t){return n!==e?(t-n)/(e-n):0}function po(n,e,t){return(1-t)*n+t*e}function Bm(n,e,t,i){return po(n,e,1-Math.exp(-t*i))}function km(n,e=1){return e-Math.abs(Vh(n,e*2)-e)}function Gm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Hm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wm(n,e){return n+Math.random()*(e-n)}function Xm(n){return n*(.5-Math.random())}function qm(n){n!==void 0&&(id=n);let e=id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ym(n){return n*fo}function Zm(n){return n*Tr}function Jm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Km(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $m(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),u=o(t/2),l=r((e+i)/2),f=o((e+i)/2),d=r((e-i)/2),m=o((e-i)/2),p=r((i-e)/2),c=o((i-e)/2);switch(s){case"XYX":n.set(a*f,u*d,u*m,a*l);break;case"YZY":n.set(u*m,a*f,u*d,a*l);break;case"ZXZ":n.set(u*d,u*m,a*f,a*l);break;case"XZX":n.set(a*f,u*c,u*p,a*l);break;case"YXY":n.set(u*p,a*f,u*c,a*l);break;case"ZYZ":n.set(u*c,u*p,a*f,a*l);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pf(n,e){if(e.constructor===Float32Array)return n;let t=Wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function mf(n,e){if(e.constructor===Float32Array)return n;let t=Wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Dr={DEG2RAD:fo,RAD2DEG:Tr,generateUUID:Lr,clamp:bt,euclideanModulo:Vh,mapLinear:zm,inverseLerp:Om,lerp:po,damp:Bm,pingpong:km,smoothstep:Gm,smootherstep:Vm,randInt:Hm,randFloat:Wm,randFloatSpread:Xm,seededRandom:qm,degToRad:Ym,radToDeg:Zm,isPowerOfTwo:Jm,ceilPowerOfTwo:Km,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:$m,normalize:mf,denormalize:pf},pt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let u=i[s+0],l=i[s+1],f=i[s+2],d=i[s+3],m=r[o+0],p=r[o+1],c=r[o+2],M=r[o+3];if(d!==M||u!==m||l!==p||f!==c){let x=u*m+l*p+f*c+d*M;x<0&&(m=-m,p=-p,c=-c,M=-M,x=-x);let _=1-a;if(x<.9995){let A=Math.acos(x),R=Math.sin(A);_=Math.sin(_*A)/R,a=Math.sin(a*A)/R,u=u*_+m*a,l=l*_+p*a,f=f*_+c*a,d=d*_+M*a}else{u=u*_+m*a,l=l*_+p*a,f=f*_+c*a,d=d*_+M*a;let A=1/Math.sqrt(u*u+l*l+f*f+d*d);u*=A,l*=A,f*=A,d*=A}}e[t]=u,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],u=i[s+1],l=i[s+2],f=i[s+3],d=r[o],m=r[o+1],p=r[o+2],c=r[o+3];return e[t]=a*c+f*d+u*p-l*m,e[t+1]=u*c+f*m+l*d-a*p,e[t+2]=l*c+f*p+a*m-u*d,e[t+3]=f*c-a*d-u*m-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,u=Math.sin,l=a(i/2),f=a(s/2),d=a(r/2),m=u(i/2),p=u(s/2),c=u(r/2);switch(o){case"XYZ":this._x=m*f*d+l*p*c,this._y=l*p*d-m*f*c,this._z=l*f*c+m*p*d,this._w=l*f*d-m*p*c;break;case"YXZ":this._x=m*f*d+l*p*c,this._y=l*p*d-m*f*c,this._z=l*f*c-m*p*d,this._w=l*f*d+m*p*c;break;case"ZXY":this._x=m*f*d-l*p*c,this._y=l*p*d+m*f*c,this._z=l*f*c+m*p*d,this._w=l*f*d-m*p*c;break;case"ZYX":this._x=m*f*d-l*p*c,this._y=l*p*d+m*f*c,this._z=l*f*c-m*p*d,this._w=l*f*d+m*p*c;break;case"YZX":this._x=m*f*d+l*p*c,this._y=l*p*d+m*f*c,this._z=l*f*c-m*p*d,this._w=l*f*d-m*p*c;break;case"XZY":this._x=m*f*d-l*p*c,this._y=l*p*d-m*f*c,this._z=l*f*c+m*p*d,this._w=l*f*d+m*p*c;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],u=t[9],l=t[2],f=t[6],d=t[10],m=i+a+d;if(m>0){let p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(f-u)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(f-u)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(u+f)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(u+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,u=t._y,l=t._z,f=t._w;return this._x=i*f+o*a+s*l-r*u,this._y=s*f+o*u+r*a-i*l,this._z=r*f+o*l+i*u-s*a,this._w=o*f-i*a-s*u-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let u=1-t;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);u=Math.sin(u*l)/f,t=Math.sin(t*l)/f,this._x=this._x*u+i*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+i*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,u=e.w,l=2*(o*s-a*i),f=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+u*l+o*d-a*f,this.y=i+u*f+a*l-r*d,this.z=s+u*d+r*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,u=t.z;return this.x=s*u-r*a,this.y=r*o-i*u,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new Y,sd=new on,lt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,u,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,u,l)}set(e,t,i,s,r,o,a,u,l){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=u,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],u=i[6],l=i[1],f=i[4],d=i[7],m=i[2],p=i[5],c=i[8],M=s[0],x=s[3],_=s[6],A=s[1],R=s[4],b=s[7],E=s[2],S=s[5],g=s[8];return r[0]=o*M+a*A+u*E,r[3]=o*x+a*R+u*S,r[6]=o*_+a*b+u*g,r[1]=l*M+f*A+d*E,r[4]=l*x+f*R+d*S,r[7]=l*_+f*b+d*g,r[2]=m*M+p*A+c*E,r[5]=m*x+p*R+c*S,r[8]=m*_+p*b+c*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-i*r*f+i*a*u+s*r*l-s*o*u}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],l=e[7],f=e[8],d=f*o-a*l,m=a*u-f*r,p=l*r-o*u,c=t*d+i*m+s*p;if(c===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/c;return e[0]=d*M,e[1]=(s*l-f*i)*M,e[2]=(a*i-s*o)*M,e[3]=m*M,e[4]=(f*t-s*u)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(i*u-l*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let u=Math.cos(r),l=Math.sin(r);return this.set(i*u,i*l,-i*(u*o+l*a)+o+e,-s*l,s*u,-s*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xc=new lt,rd=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jm(){let n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:e,whitePoint:i,transfer:xo,toXYZ:rd,fromXYZ:od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:rd,fromXYZ:od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var Mt=jm();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ar,$a=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=_o("canvas")),ar.width=e.width,ar.height=e.height;let s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_o("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qm=0,Ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qc(s[o].image)):r.push(qc(s[o]))}else r=qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var e0=0,Yc=new Y,Dn=class n extends Ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ai,s=Ai,r=_n,o=Ji,a=ni,u=qn,l=n.DEFAULT_ANISOTROPY,f=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Lr(),this.name="",this.source=new Ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ih;Dn.DEFAULT_ANISOTROPY=1;var Jt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,u=e.elements,l=u[0],f=u[4],d=u[8],m=u[1],p=u[5],c=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(d-M)<.01&&Math.abs(c-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+M)<.1&&Math.abs(c+x)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,b=(p+1)/2,E=(_+1)/2,S=(f+m)/4,g=(d+M)/4,w=(c+x)/4;return R>b&&R>E?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=S/i,r=g/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=g/r,s=w/r),this.set(i,s,r,t),this}let A=Math.sqrt((x-c)*(x-c)+(d-M)*(d-M)+(m-f)*(m-f));return Math.abs(A)<.001&&(A=1),this.x=(x-c)/A,this.y=(d-M)/A,this.z=(m-f)/A,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Dn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ar(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends ja{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},yo=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var St=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,u,l,f,d,m,p,c,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,u,l,f,d,m,p,c,M,x)}set(e,t,i,s,r,o,a,u,l,f,d,m,p,c,M,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=u,_[2]=l,_[6]=f,_[10]=d,_[14]=m,_[3]=p,_[7]=c,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(s),l=Math.sin(s),f=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let m=o*f,p=o*d,c=a*f,M=a*d;t[0]=u*f,t[4]=-u*d,t[8]=l,t[1]=p+c*l,t[5]=m-M*l,t[9]=-a*u,t[2]=M-m*l,t[6]=c+p*l,t[10]=o*u}else if(e.order==="YXZ"){let m=u*f,p=u*d,c=l*f,M=l*d;t[0]=m+M*a,t[4]=c*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=p*a-c,t[6]=M+m*a,t[10]=o*u}else if(e.order==="ZXY"){let m=u*f,p=u*d,c=l*f,M=l*d;t[0]=m-M*a,t[4]=-o*d,t[8]=c+p*a,t[1]=p+c*a,t[5]=o*f,t[9]=M-m*a,t[2]=-o*l,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){let m=o*f,p=o*d,c=a*f,M=a*d;t[0]=u*f,t[4]=c*l-p,t[8]=m*l+M,t[1]=u*d,t[5]=M*l+m,t[9]=p*l-c,t[2]=-l,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){let m=o*u,p=o*l,c=a*u,M=a*l;t[0]=u*f,t[4]=M-m*d,t[8]=c*d+p,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=p*d+c,t[10]=m-M*d}else if(e.order==="XZY"){let m=o*u,p=o*l,c=a*u,M=a*l;t[0]=u*f,t[4]=-d,t[8]=l*f,t[1]=m*d+M,t[5]=o*f,t[9]=p*d-c,t[2]=c*d-p,t[6]=a*f,t[10]=M*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,i){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),rs.crossVectors(i,jn),rs.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),rs.crossVectors(i,jn)),rs.normalize(),ga.crossVectors(jn,rs),s[0]=rs.x,s[4]=ga.x,s[8]=jn.x,s[1]=rs.y,s[5]=ga.y,s[9]=jn.y,s[2]=rs.z,s[6]=ga.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],u=i[8],l=i[12],f=i[1],d=i[5],m=i[9],p=i[13],c=i[2],M=i[6],x=i[10],_=i[14],A=i[3],R=i[7],b=i[11],E=i[15],S=s[0],g=s[4],w=s[8],F=s[12],D=s[1],L=s[5],V=s[9],z=s[13],B=s[2],X=s[6],G=s[10],k=s[14],W=s[3],U=s[7],j=s[11],$=s[15];return r[0]=o*S+a*D+u*B+l*W,r[4]=o*g+a*L+u*X+l*U,r[8]=o*w+a*V+u*G+l*j,r[12]=o*F+a*z+u*k+l*$,r[1]=f*S+d*D+m*B+p*W,r[5]=f*g+d*L+m*X+p*U,r[9]=f*w+d*V+m*G+p*j,r[13]=f*F+d*z+m*k+p*$,r[2]=c*S+M*D+x*B+_*W,r[6]=c*g+M*L+x*X+_*U,r[10]=c*w+M*V+x*G+_*j,r[14]=c*F+M*z+x*k+_*$,r[3]=A*S+R*D+b*B+E*W,r[7]=A*g+R*L+b*X+E*U,r[11]=A*w+R*V+b*G+E*j,r[15]=A*F+R*z+b*k+E*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],u=e[9],l=e[13],f=e[2],d=e[6],m=e[10],p=e[14],c=e[3],M=e[7],x=e[11],_=e[15],A=u*p-l*m,R=a*p-l*d,b=a*m-u*d,E=o*p-l*f,S=o*m-u*f,g=o*d-a*f;return t*(M*A-x*R+_*b)-i*(c*A-x*E+_*S)+s*(c*R-M*E+_*g)-r*(c*b-M*S+x*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],u=e[2],l=e[6],f=e[10];return t*(o*f-a*l)-i*(r*f-a*u)+s*(r*l-o*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],l=e[7],f=e[8],d=e[9],m=e[10],p=e[11],c=e[12],M=e[13],x=e[14],_=e[15],A=t*a-i*o,R=t*u-s*o,b=t*l-r*o,E=i*u-s*a,S=i*l-r*a,g=s*l-r*u,w=f*M-d*c,F=f*x-m*c,D=f*_-p*c,L=d*x-m*M,V=d*_-p*M,z=m*_-p*x,B=A*z-R*V+b*L+E*D-S*F+g*w;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/B;return e[0]=(a*z-u*V+l*L)*X,e[1]=(s*V-i*z-r*L)*X,e[2]=(M*g-x*S+_*E)*X,e[3]=(m*S-d*g-p*E)*X,e[4]=(u*D-o*z-l*F)*X,e[5]=(t*z-s*D+r*F)*X,e[6]=(x*b-c*g-_*R)*X,e[7]=(f*g-m*b+p*R)*X,e[8]=(o*V-a*D+l*w)*X,e[9]=(i*D-t*V-r*w)*X,e[10]=(c*S-M*b+_*A)*X,e[11]=(d*b-f*S-p*A)*X,e[12]=(a*F-o*L-u*w)*X,e[13]=(t*L-i*F+s*w)*X,e[14]=(M*R-c*E-x*A)*X,e[15]=(f*E-d*R+m*A)*X,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,u=e.z,l=r*o,f=r*a;return this.set(l*o+i,l*a-s*u,l*u+s*a,0,l*a+s*u,f*a+i,f*u-s*o,0,l*u-s*a,f*u+s*o,r*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,u=t._w,l=r+r,f=o+o,d=a+a,m=r*l,p=r*f,c=r*d,M=o*f,x=o*d,_=a*d,A=u*l,R=u*f,b=u*d,E=i.x,S=i.y,g=i.z;return s[0]=(1-(M+_))*E,s[1]=(p+b)*E,s[2]=(c-R)*E,s[3]=0,s[4]=(p-b)*S,s[5]=(1-(m+_))*S,s[6]=(x+A)*S,s[7]=0,s[8]=(c+R)*g,s[9]=(x-A)*g,s[10]=(1-(m+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=lr.set(s[0],s[1],s[2]).length(),a=lr.set(s[4],s[5],s[6]).length(),u=lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let l=1/o,f=1/a,d=1/u;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=f,fi.elements[5]*=f,fi.elements[6]*=f,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,t.setFromRotationMatrix(fi),i.x=o,i.y=a,i.z=u,this}makePerspective(e,t,i,s,r,o,a=ai,u=!1){let l=this.elements,f=2*r/(t-e),d=2*r/(i-s),m=(t+e)/(t-e),p=(i+s)/(i-s),c,M;if(u)c=r/(o-r),M=o*r/(o-r);else if(a===ai)c=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Sr)c=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ai,u=!1){let l=this.elements,f=2/(t-e),d=2/(i-s),m=-(t+e)/(t-e),p=-(i+s)/(i-s),c,M;if(u)c=1/(o-r),M=o/(o-r);else if(a===ai)c=-2/(o-r),M=-(o+r)/(o-r);else if(a===Sr)c=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=c,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},lr=new Y,fi=new St,t0=new Y(0,0,0),n0=new Y(1,1,1),rs=new Y,ga=new Y,jn=new Y,ad=new St,ld=new on,xi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],u=s[1],l=s[5],f=s[9],d=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ad,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},i0=0,cd=new Y,cr=new on,zi=new St,xa=new Y,ro=new Y,s0=new Y,r0=new on,hd=new Y(1,0,0),ud=new Y(0,1,0),dd=new Y(0,0,1),fd={type:"added"},o0={type:"removed"},hr={type:"childadded",child:null},Zc={type:"childremoved",child:null},Vt=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new Y,t=new xi,i=new on,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new lt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ro,xa,this.up):zi.lookAt(xa,ro,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(zi),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fd),hr.child=e,this.dispatchEvent(hr),hr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o0),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fd),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let l=0,f=u.length;l<f;l++){let d=u[l];r(e.shapes,d)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(r(e.materials,this.material[u]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];s.animations.push(r(e.animations,u))}}if(t){let a=o(e.geometries),u=o(e.materials),l=o(e.textures),f=o(e.images),d=o(e.shapes),m=o(e.skeletons),p=o(e.animations),c=o(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),c.length>0&&(i.nodes=c)}return i.object=s,i;function o(a){let u=[];for(let l in a){let f=a[l];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new Y(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},a0={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,i),_=this._getHandJoint(l,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=f.position.distanceTo(d.position),p=.02,c=.005;l.inputState.pinching&&m>p+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=p-c&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Jc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=Vh(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Jc(o,r,e+1/3),this.g=Jc(o,r,e),this.b=Jc(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Mt.workingToColorSpace(An.copy(this),e),Math.round(bt(An.r*255,0,255))*65536+Math.round(bt(An.g*255,0,255))*256+Math.round(bt(An.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(An.copy(this),t);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),u,l,f=(a+o)/2;if(a===o)u=0,l=0;else{let d=o-a;switch(l=f<=.5?d/(o+a):d/(2-o-a),o){case i:u=(s-r)/d+(s<r?6:0);break;case s:u=(r-i)/d+2;break;case r:u=(i-s)/d+4;break}u/=6}return e.h=u,e.s=l,e.l=f,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=un){Mt.workingToColorSpace(An.copy(this),e);let t=An.r,i=An.g,s=An.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(_a);let i=po(os.h,_a.h,t),s=po(os.s,_a.s,t),r=po(os.l,_a.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new $e;$e.NAMES=gf;var Mo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var bo=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new Y,Oi=new Y,Kc=new Y,Bi=new Y,ur=new Y,dr=new Y,pd=new Y,$c=new Y,jc=new Y,Qc=new Y,eh=new Jt,th=new Jt,nh=new Jt,hs=class n{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),Oi.subVectors(i,t),Kc.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Oi),u=pi.dot(Kc),l=Oi.dot(Oi),f=Oi.dot(Kc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,p=(l*u-a*f)*m,c=(o*f-a*u)*m;return r.set(1-p-c,c,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,s,r,o,a,u){return this.getBarycoord(e,t,i,s,Bi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Bi.x),u.addScaledVector(o,Bi.y),u.addScaledVector(a,Bi.z),u)}static getInterpolatedAttribute(e,t,i,s,r,o){return eh.setScalar(0),th.setScalar(0),nh.setScalar(0),eh.fromBufferAttribute(e,t),th.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(eh,r.x),o.addScaledVector(th,r.y),o.addScaledVector(nh,r.z),o}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),Oi.subVectors(e,t),pi.cross(Oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),pi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ur.subVectors(s,i),dr.subVectors(r,i),$c.subVectors(e,i);let u=ur.dot($c),l=dr.dot($c);if(u<=0&&l<=0)return t.copy(i);jc.subVectors(e,s);let f=ur.dot(jc),d=dr.dot(jc);if(f>=0&&d<=f)return t.copy(s);let m=u*d-f*l;if(m<=0&&u>=0&&f<=0&&u-f>0)return o=u/(u-f),t.copy(i).addScaledVector(ur,o);Qc.subVectors(e,r);let p=ur.dot(Qc),c=dr.dot(Qc);if(c>=0&&p<=c)return t.copy(r);let M=p*l-u*c;if(M<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(dr,a);let x=f*c-p*d;if(x<=0&&d-f>=0&&p-c>=0)return pd.subVectors(r,s),a=(d-f)/(d-f+(p-c)),t.copy(s).addScaledVector(pd,a);let _=1/(x+M+m);return o=M*_,a=m*_,t.copy(i).addScaledVector(ur,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ci=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),va.subVectors(this.max,oo),fr.subVectors(e.a,oo),pr.subVectors(e.b,oo),mr.subVectors(e.c,oo),as.subVectors(pr,fr),ls.subVectors(mr,pr),Cs.subVectors(fr,mr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Cs.z,Cs.y,as.z,0,-as.x,ls.z,0,-ls.x,Cs.z,0,-Cs.x,-as.y,as.x,0,-ls.y,ls.x,0,-Cs.y,Cs.x,0];return!ih(t,fr,pr,mr,va)||(t=[1,0,0,0,1,0,0,0,1],!ih(t,fr,pr,mr,va))?!1:(Ma.crossVectors(as,ls),t=[Ma.x,Ma.y,Ma.z],ih(t,fr,pr,mr,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],mi=new Y,ya=new Ci,fr=new Y,pr=new Y,mr=new Y,as=new Y,ls=new Y,Cs=new Y,oo=new Y,va=new Y,Ma=new Y,Rs=new Y;function ih(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Rs.fromArray(n,r);let a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),u=e.dot(Rs),l=t.dot(Rs),f=i.dot(Rs);if(Math.max(-Math.max(u,l,f),Math.min(u,l,f))>a)return!1}return!0}var an=new Y,ba=new pt,l0=0,tn=class extends Ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cf,this.updateRanges=[],this.gpuType=li,this.version=0,this._normalizationScale=e!==void 0?Wh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):mf(e,this.array)}};var So=class extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wo=class extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var wt=class extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},c0=new Ci,ao=new Y,sh=new Y,Wi=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):c0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);let t=ao.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ao,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(sh)),this.expandByPoint(ao.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},h0=0,oi=new St,rh=new Vt,gr=new Y,Qn=new Ci,lo=new Ci,gn=new Y,Kt=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?wo:So)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Qn.min,lo.min),Qn.expandByPoint(gn),gn.addVectors(Qn.max,lo.max),Qn.expandByPoint(gn)):(Qn.expandByPoint(lo.min),Qn.expandByPoint(lo.max))}Qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],u=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)gn.fromBufferAttribute(a,l),u&&(gr.fromBufferAttribute(e,l),gn.add(gr)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],u=[],l=new Uint8Array(i.count);for(let F=0;F<i.count;F++)a[F]=new Y,u[F]=new Y;let f=new Y,d=new Y,m=new Y,p=new pt,c=new pt,M=new pt,x=new Y,_=new Y;function A(F,D,L){l[F]=l[D]=l[L]=1,f.fromBufferAttribute(i,F),d.fromBufferAttribute(i,D),m.fromBufferAttribute(i,L),p.fromBufferAttribute(r,F),c.fromBufferAttribute(r,D),M.fromBufferAttribute(r,L),d.sub(f),m.sub(f),c.sub(p),M.sub(p);let V=1/(c.x*M.y-M.x*c.y);isFinite(V)&&(x.copy(d).multiplyScalar(M.y).addScaledVector(m,-c.y).multiplyScalar(V),_.copy(m).multiplyScalar(c.x).addScaledVector(d,-M.x).multiplyScalar(V),a[F].add(x),a[D].add(x),a[L].add(x),u[F].add(_),u[D].add(_),u[L].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,D=R.length;F<D;++F){let L=R[F],V=L.start,z=L.count;for(let B=V,X=V+z;B<X;B+=3)A(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new Y,E=new Y,S=new Y,g=new Y;function w(F){S.fromBufferAttribute(s,F),g.copy(S);let D=a[F];b.copy(D),b.sub(S.multiplyScalar(S.dot(D))).normalize(),E.crossVectors(g,D);let V=E.dot(u[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,V)}for(let F=0,D=i.count;F<D;++F)l[F]&&w(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);let s=new Y,r=new Y,o=new Y,a=new Y,u=new Y,l=new Y,f=new Y,d=new Y;if(e)for(let m=0,p=e.count;m<p;m+=3){let c=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);s.fromBufferAttribute(t,c),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,x),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),a.fromBufferAttribute(i,c),u.fromBufferAttribute(i,M),l.fromBufferAttribute(i,x),a.add(f),u.add(f),l.add(f),i.setXYZ(c,a.x,a.y,a.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),i.setXYZ(m+0,f.x,f.y,f.z),i.setXYZ(m+1,f.x,f.y,f.z),i.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,u){let l=a.array,f=a.itemSize,d=a.normalized,m=new l.constructor(u.length*f),p=0,c=0;for(let M=0,x=u.length;M<x;M++){a.isInterleavedBufferAttribute?p=u[M]*a.data.stride+a.offset:p=u[M]*f;for(let _=0;_<f;_++)m[c++]=l[p++]}return new tn(m,f,d)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let u=s[a],l=e(u,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let u=[],l=r[a];for(let f=0,d=l.length;f<d;f++){let m=l[f],p=e(m,i);u.push(p)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,u=o.length;a<u;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let u in i){let l=i[u];e.data.attributes[u]=l.toJSON(e.data)}let s={},r=!1;for(let u in this.morphAttributes){let l=this.morphAttributes[u],f=[];for(let d=0,m=l.length;d<m;d++){let p=l[d];f.push(p.toJSON(e.data))}f.length>0&&(s[u]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],d=r[l];for(let m=0,p=d.length;m<p;m++)f.push(d[m].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,f=o.length;l<f;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oh=new Y,u0=new Y,d0=new lt,gi=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=oh.subVectors(i,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(oh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||d0.getNormalMatrix(e),s=this.coplanarPoint(oh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},f0=0,Xi=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=_s,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=bh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let u=r[a];delete u.metadata,o.push(u)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gi=new Y,ah=new Y,Sa=new Y,wa=new Y,To=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ah.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),wa.copy(this.origin).sub(ah);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Sa),a=wa.dot(this.direction),u=-wa.dot(Sa),l=wa.lengthSq(),f=Math.abs(1-o*o),d,m,p,c;if(f>0)if(d=o*u-a,m=o*a-u,c=r*f,d>=0)if(m>=-c)if(m<=c){let M=1/f;d*=M,m*=M,p=d*(d+o*m+2*a)+m*(o*d+m+2*u)+l}else m=r,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*u)+l;else m=-r,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*u)+l;else m<=-c?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-u),r),p=-d*d+m*(m+2*u)+l):m<=c?(d=0,m=Math.min(Math.max(-r,-u),r),p=m*(m+2*u)+l):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-u),r),p=-d*d+m*(m+2*u)+l);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*u)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ah).addScaledVector(Sa,m),p}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,u,l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(i=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(i=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),f>=0?(r=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(r=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-m.z)*d,u=(e.max.z-m.z)*d):(a=(e.max.z-m.z)*d,u=(e.min.z-m.z)*d),i>u||a>s)||((a>i||i!==i)&&(i=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,u=a.x,l=a.y,f=a.z,d=e.x-o.x,m=e.y-o.y,p=e.z-o.z,c=t.x-o.x,M=t.y-o.y,x=t.z-o.z,_=i.x-o.x,A=i.y-o.y,R=i.z-o.z,b=Math.abs(u),E=Math.abs(l),S=Math.abs(f),g,w,F,D,L,V,z,B,X,G,k,W;if(b>=E&&b>=S?(F=u,V=d,X=c,W=_,u>=0?(g=l,w=f,D=m,L=p,z=M,B=x,G=A,k=R):(g=f,w=l,D=p,L=m,z=x,B=M,G=R,k=A)):E>=S?(F=l,V=m,X=M,W=A,l>=0?(g=f,w=u,D=p,L=d,z=x,B=c,G=R,k=_):(g=u,w=f,D=d,L=p,z=c,B=x,G=_,k=R)):(F=f,V=p,X=x,W=R,f>=0?(g=u,w=l,D=d,L=m,z=c,B=M,G=_,k=A):(g=l,w=u,D=m,L=d,z=M,B=c,G=A,k=_)),F===0)return null;let U=g/F,j=w/F,$=1/F,K=D-U*V,ge=L-j*V,Z=z-U*X,fe=B-j*X,Ee=G-U*W,Te=k-j*W,Me=Ee*fe-Te*Z,Xe=K*Te-ge*Ee,Ye=Z*ge-fe*K;if(s){if(Me<0||Xe<0||Ye<0)return null}else if((Me<0||Xe<0||Ye<0)&&(Me>0||Xe>0||Ye>0))return null;let Ke=Me+Xe+Ye;if(Ke===0)return null;let je=$*(Me*V+Xe*X+Ye*W);return(Ke>0?je<0:je>0)?null:this.at(je/Ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},md=new St,Is=new To,Ta=new Wi,gd=new Y,Aa=new Y,Ea=new Y,Ca=new Y,lh=new Y,Ra=new Y,xd=new Y,Ia=new Y,Tt=class extends Vt{constructor(e=new Kt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let u=0,l=r.length;u<l;u++){let f=a[u],d=r[u];f!==0&&(lh.fromBufferAttribute(d,e),o?Ra.addScaledVector(lh,f):Ra.addScaledVector(lh.sub(t),f))}t.add(Ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(Ta.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ta,gd)===null||Is.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),Is.copy(e.ray).applyMatrix4(md),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,u=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let c=0,M=m.length;c<M;c++){let x=m[c],_=o[x.materialIndex],A=Math.max(x.start,p.start),R=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let b=A,E=R;b<E;b+=3){let S=a.getX(b),g=a.getX(b+1),w=a.getX(b+2);s=Pa(this,_,e,i,l,f,d,S,g,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let c=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let x=c,_=M;x<_;x+=3){let A=a.getX(x),R=a.getX(x+1),b=a.getX(x+2);s=Pa(this,o,e,i,l,f,d,A,R,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let c=0,M=m.length;c<M;c++){let x=m[c],_=o[x.materialIndex],A=Math.max(x.start,p.start),R=Math.min(u.count,Math.min(x.start+x.count,p.start+p.count));for(let b=A,E=R;b<E;b+=3){let S=b,g=b+1,w=b+2;s=Pa(this,_,e,i,l,f,d,S,g,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let c=Math.max(0,p.start),M=Math.min(u.count,p.start+p.count);for(let x=c,_=M;x<_;x+=3){let A=x,R=x+1,b=x+2;s=Pa(this,o,e,i,l,f,d,A,R,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function p0(n,e,t,i,s,r,o,a){let u;if(e.side===bn?u=i.intersectTriangle(o,r,s,!0,a):u=i.intersectTriangle(s,r,o,e.side===xs,a),u===null)return null;Ia.copy(a),Ia.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ia);return l<t.near||l>t.far?null:{distance:l,point:Ia.clone(),object:n}}function Pa(n,e,t,i,s,r,o,a,u,l){n.getVertexPosition(a,Aa),n.getVertexPosition(u,Ea),n.getVertexPosition(l,Ca);let f=p0(n,e,t,i,Aa,Ea,Ca,xd);if(f){let d=new Y;hs.getBarycoord(xd,Aa,Ea,Ca,d),s&&(f.uv=hs.getInterpolatedAttribute(s,a,u,l,d,new pt)),r&&(f.uv1=hs.getInterpolatedAttribute(r,a,u,l,d,new pt)),o&&(f.normal=hs.getInterpolatedAttribute(o,a,u,l,d,new Y),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let m={a,b:u,c:l,normal:new Y,materialIndex:0};hs.getNormal(Aa,Ea,Ca,m.normal),f.face=m,f.barycoord=d}return f}var Ls=class extends Dn{constructor(e=null,t=1,i=1,s,r,o,a,u,l=xn,f=xn,d,m){super(null,o,a,u,l,f,s,r,d,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var us=class extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xr=new St,_d=new St,La=[],yd=new Ci,m0=new St,co=new Tt,ho=new Wi,Nn=class extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new us(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,m0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),yd.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),ho.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),e.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),_d.multiplyMatrices(i,xr),co.matrixWorld=_d,co.raycast(e,La);for(let o=0,a=La.length;o<a;o++){let u=La[o];u.instanceId=r,u.object=this,t.push(u)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,Sl,li));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,u=s*e;return r[u]=a,r.set(i,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ps=new Wi,g0=new pt(.5,.5),Da=new Y,ds=class{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],u=r[2],l=r[3],f=r[4],d=r[5],m=r[6],p=r[7],c=r[8],M=r[9],x=r[10],_=r[11],A=r[12],R=r[13],b=r[14],E=r[15];if(s[0].setComponents(l-o,p-f,_-c,E-A).normalize(),s[1].setComponents(l+o,p+f,_+c,E+A).normalize(),s[2].setComponents(l+a,p+d,_+M,E+R).normalize(),s[3].setComponents(l-a,p-d,_-M,E-R).normalize(),i)s[4].setComponents(u,m,x,b).normalize(),s[5].setComponents(l-u,p-m,_-x,E-b).normalize();else if(s[4].setComponents(l-u,p-m,_-x,E-b).normalize(),t===ai)s[5].setComponents(l+u,p+m,_+x,E+b).normalize();else if(t===Sr)s[5].setComponents(u,m,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);let t=g0.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Da.x=s.normal.x>0?e.max.x:e.min.x,Da.y=s.normal.y>0?e.max.y:e.min.y,Da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vd=new St,el=class n{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];vd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ds),i[s].setFromProjectionMatrix(vd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ds),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var tl=class extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new St,ph=new To,Na=new Wi,Ua=new Y,Ao=class extends Vt{constructor(e=new Kt,t=new tl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Md.copy(s).invert(),ph.copy(e.ray).applyMatrix4(Md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,l=i.index,d=i.attributes.position;if(l!==null){let m=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let c=m,M=p;c<M;c++){let x=l.getX(c);Ua.fromBufferAttribute(d,x),bd(Ua,x,u,s,e,t,this)}}else{let m=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let c=m,M=p;c<M;c++)Ua.fromBufferAttribute(d,c),bd(Ua,c,u,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bd(n,e,t,i,s,r,o){let a=ph.distanceSqToPoint(n);if(a<t){let u=new Y;ph.closestPointToPoint(n,u),u.applyMatrix4(i);let l=s.ray.origin.distanceTo(u);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Eo=class extends Dn{constructor(e=[],t=Os,i,s,r,o,a,u,l,f){super(e,t,i,s,r,o,a,u,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ds=class extends Dn{constructor(e,t,i,s,r,o,a,u,l){super(e,t,i,s,r,o,a,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Dn{constructor(e,t,i=_i,s,r,o,a=xn,u=xn,l,f=Hi,d=1){if(f!==Hi&&f!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:d};super(m,s,r,o,a,u,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Co=class extends qi{constructor(e,t=_i,i=Os,s,r,o=xn,a=xn,u,l=Hi){let f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,u,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ro=class extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ln=class n extends Kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],l=[],f=[],d=[],m=0,p=0;c("z","y","x",-1,-1,i,t,e,o,r,0),c("z","y","x",1,-1,i,t,-e,o,r,1),c("x","z","y",1,1,e,i,t,s,o,2),c("x","z","y",1,-1,e,i,-t,s,o,3),c("x","y","z",1,-1,e,t,i,s,r,4),c("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(u),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2));function c(M,x,_,A,R,b,E,S,g,w,F){let D=b/g,L=E/w,V=b/2,z=E/2,B=S/2,X=g+1,G=w+1,k=0,W=0,U=new Y;for(let j=0;j<G;j++){let $=j*L-z;for(let K=0;K<X;K++){let ge=K*D-V;U[M]=ge*A,U[x]=$*R,U[_]=B,l.push(U.x,U.y,U.z),U[M]=0,U[x]=0,U[_]=S>0?1:-1,f.push(U.x,U.y,U.z),d.push(K/g),d.push(1-j/w),k+=1}}for(let j=0;j<w;j++)for(let $=0;$<g;$++){let K=m+$+X*j,ge=m+$+X*(j+1),Z=m+($+1)+X*(j+1),fe=m+($+1)+X*j;u.push(K,ge,fe),u.push(ge,Z,fe),W+=6}a.addGroup(p,W,F),p+=W,m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ns=class n extends Kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],u=[],l=new Y,f=new pt;o.push(0,0,0),a.push(0,0,1),u.push(.5,.5);for(let d=0,m=3;d<=t;d++,m+=3){let p=i+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,u.push(f.x,f.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Un=class n extends Kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:u};let l=this;s=Math.floor(s),r=Math.floor(r);let f=[],d=[],m=[],p=[],c=0,M=[],x=i/2,_=0;A(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(f),this.setAttribute("position",new wt(d,3)),this.setAttribute("normal",new wt(m,3)),this.setAttribute("uv",new wt(p,2));function A(){let b=new Y,E=new Y,S=0,g=(t-e)/i;for(let w=0;w<=r;w++){let F=[],D=w/r,L=D*(t-e)+e;for(let V=0;V<=s;V++){let z=V/s,B=z*u+a,X=Math.sin(B),G=Math.cos(B);E.x=L*X,E.y=-D*i+x,E.z=L*G,d.push(E.x,E.y,E.z),b.set(X,g,G).normalize(),m.push(b.x,b.y,b.z),p.push(z,1-D),F.push(c++)}M.push(F)}for(let w=0;w<s;w++)for(let F=0;F<r;F++){let D=M[F][w],L=M[F+1][w],V=M[F+1][w+1],z=M[F][w+1];(e>0||F!==0)&&(f.push(D,L,z),S+=3),(t>0||F!==r-1)&&(f.push(L,V,z),S+=3)}l.addGroup(_,S,0),_+=S}function R(b){let E=c,S=new pt,g=new Y,w=0,F=b===!0?e:t,D=b===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,x*D,0),m.push(0,D,0),p.push(.5,.5),c++;let L=c;for(let V=0;V<=s;V++){let B=V/s*u+a,X=Math.cos(B),G=Math.sin(B);g.x=F*G,g.y=x*D,g.z=F*X,d.push(g.x,g.y,g.z),m.push(0,D,0),S.x=X*.5+.5,S.y=G*.5*D+.5,p.push(S.x,S.y),c++}for(let V=0;V<s;V++){let z=E+V,B=L+V;b===!0?f.push(B,B+1,z):f.push(B+1,B,z),w+=3}l.addGroup(_,w,b===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Io=class n extends Kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),f(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let R=new Y,b=new Y,E=new Y;for(let S=0;S<t.length;S+=3)p(t[S+0],R),p(t[S+1],b),p(t[S+2],E),u(R,b,E,A)}function u(A,R,b,E){let S=E+1,g=[];for(let w=0;w<=S;w++){g[w]=[];let F=A.clone().lerp(b,w/S),D=R.clone().lerp(b,w/S),L=S-w;for(let V=0;V<=L;V++)V===0&&w===S?g[w][V]=F:g[w][V]=F.clone().lerp(D,V/L)}for(let w=0;w<S;w++)for(let F=0;F<2*(S-w)-1;F++){let D=Math.floor(F/2);F%2===0?(m(g[w][D+1]),m(g[w+1][D]),m(g[w][D])):(m(g[w][D+1]),m(g[w+1][D+1]),m(g[w+1][D]))}}function l(A){let R=new Y;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(A),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function f(){let A=new Y;for(let R=0;R<r.length;R+=3){A.x=r[R+0],A.y=r[R+1],A.z=r[R+2];let b=x(A)/2/Math.PI+.5,E=_(A)/Math.PI+.5;o.push(b,1-E)}c(),d()}function d(){for(let A=0;A<o.length;A+=6){let R=o[A+0],b=o[A+2],E=o[A+4],S=Math.max(R,b,E),g=Math.min(R,b,E);S>.9&&g<.1&&(R<.2&&(o[A+0]+=1),b<.2&&(o[A+2]+=1),E<.2&&(o[A+4]+=1))}}function m(A){r.push(A.x,A.y,A.z)}function p(A,R){let b=A*3;R.x=e[b+0],R.y=e[b+1],R.z=e[b+2]}function c(){let A=new Y,R=new Y,b=new Y,E=new Y,S=new pt,g=new pt,w=new pt;for(let F=0,D=0;F<r.length;F+=9,D+=6){A.set(r[F+0],r[F+1],r[F+2]),R.set(r[F+3],r[F+4],r[F+5]),b.set(r[F+6],r[F+7],r[F+8]),S.set(o[D+0],o[D+1]),g.set(o[D+2],o[D+3]),w.set(o[D+4],o[D+5]),E.copy(A).add(R).add(b).divideScalar(3);let L=x(E);M(S,D+0,A,L),M(g,D+2,R,L),M(w,D+4,b,L)}}function M(A,R,b,E){E<0&&A.x===1&&(o[R]=A.x-1),b.x===0&&b.z===0&&(o[R]=E/2/Math.PI+.5)}function x(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Yi=class n extends Io{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Zi=class n extends Io{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Wn=class n extends Kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),u=Math.floor(s),l=a+1,f=u+1,d=e/a,m=t/u,p=[],c=[],M=[],x=[];for(let _=0;_<f;_++){let A=_*m-o;for(let R=0;R<l;R++){let b=R*d-r;c.push(b,-A,0),M.push(0,0,1),x.push(R/a),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let A=0;A<a;A++){let R=A+l*_,b=A+l*(_+1),E=A+1+l*(_+1),S=A+1+l*_;p.push(R,b,S),p.push(b,E,S)}this.setIndex(p),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(M,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Po=class n extends Kt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],u=[],l=[],f=[],d=e,m=(t-e)/s,p=new Y,c=new pt;for(let M=0;M<=s;M++){for(let x=0;x<=i;x++){let _=r+x/i*o;p.x=d*Math.cos(_),p.y=d*Math.sin(_),u.push(p.x,p.y,p.z),l.push(0,0,1),c.x=(p.x/t+1)/2,c.y=(p.y/t+1)/2,f.push(c.x,c.y)}d+=m}for(let M=0;M<s;M++){let x=M*(i+1);for(let _=0;_<i;_++){let A=_+x,R=A,b=A+i+1,E=A+i+2,S=A+1;a.push(R,b,S),a.push(b,E,S)}}this.setIndex(a),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var fs=class n extends Kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let u=Math.min(o+a,Math.PI),l=0,f=[],d=new Y,m=new Y,p=[],c=[],M=[],x=[];for(let _=0;_<=i;_++){let A=[],R=_/i,b=o+R*a,E=e*Math.cos(b),S=Math.sqrt(e*e-E*E),g=0;_===0&&o===0?g=.5/t:_===i&&u===Math.PI&&(g=-.5/t);for(let w=0;w<=t;w++){let F=w/t,D=s+F*r;d.x=-S*Math.cos(D),d.y=E,d.z=S*Math.sin(D),c.push(d.x,d.y,d.z),m.copy(d).normalize(),M.push(m.x,m.y,m.z),x.push(F+g,1-R),A.push(l++)}f.push(A)}for(let _=0;_<i;_++)for(let A=0;A<t;A++){let R=f[_][A+1],b=f[_][A],E=f[_+1][A],S=f[_+1][A+1];(_!==0||o>0)&&p.push(R,b,S),(_!==i-1||u<Math.PI)&&p.push(b,E,S)}this.setIndex(p),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(M,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Lo=class n extends Kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let u=[],l=[],f=[],d=[],m=new Y,p=new Y,c=new Y;for(let M=0;M<=i;M++){let x=o+M/i*a;for(let _=0;_<=s;_++){let A=_/s*r;p.x=(e+t*Math.cos(x))*Math.cos(A),p.y=(e+t*Math.cos(x))*Math.sin(A),p.z=t*Math.sin(x),l.push(p.x,p.y,p.z),m.x=e*Math.cos(A),m.y=e*Math.sin(A),c.subVectors(p,m).normalize(),f.push(c.x,c.y,c.z),d.push(_/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let x=1;x<=s;x++){let _=(s+1)*M+x-1,A=(s+1)*(M-1)+x-1,R=(s+1)*(M-1)+x,b=(s+1)*M+x;u.push(_,A,b),u.push(A,R,b)}this.setIndex(u),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Sd(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Sd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=ks(n[t]);for(let s in i)e[s]=i[s]}return e}function Sd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function x0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}var xf={clone:ks,merge:Cn},_0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=x0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new St().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nl=class extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var il=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _r(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Fa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ps=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let u=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends ps{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],u=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dh:r=e,a=2*t-i;break;case fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(u===void 0)switch(this.getSettings_().endingEnd){case dh:o=e,u=2*i-t;break;case fh:o=1,u=i+s[1]-s[0];break;default:o=e-1,u=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(u-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=e*a,l=u-a,f=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,p=this._weightNext,c=(i-t)/(s-t),M=c*c,x=M*c,_=-m*x+2*m*M-m*c,A=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*c+1,R=(-1-p)*x+(1.5+p)*M+.5*c,b=p*x-p*M;for(let E=0;E!==a;++E)r[E]=_*o[f+E]+A*o[l+E]+R*o[u+E]+b*o[d+E];return r}},ol=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=e*a,l=u-a,f=(i-t)/(s-t),d=1-f;for(let m=0;m!==a;++m)r[m]=o[l+m]*d+o[u+m]*f;return r}},al=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ll=class extends ps{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=e*a,l=u-a,f=this.inTangents,d=this.outTangents;if(!f||!d){let c=(i-t)/(s-t),M=1-c;for(let x=0;x!==a;++x)r[x]=o[l+x]*M+o[u+x]*c;return r}let m=a*2,p=e-1;for(let c=0;c!==a;++c){let M=o[l+c],x=o[u+c],_=p*m+c*2,A=d[_],R=d[_+1],b=e*m+c*2,E=f[b],S=f[b+1],g=M0(i,t,A,E,s);r[c]=_f(g,M,R,S,x)}return r}};function _f(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function v0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function M0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=_f(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let u=v0(r,e,t,i,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-a/u))}return r}var ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Fa(e.settings)&&(i.settings={inTangents:_r(e.settings.inTangents,Array),outTangents:_r(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case Ka:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break;case hh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return at("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Fa(this.settings)&&(wd(this.settings.inTangents,e),wd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Fa(this.settings)&&(Td(this.settings.inTangents,e),Td(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let u=i[a];if(typeof u=="number"&&isNaN(u)){ct("KeyframeTrack: Time is not a valid number.",this,a,u),e=!1;break}if(o!==null&&o>u){ct("KeyframeTrack: Out of order keys.",this,a,u,o),e=!1;break}o=u}if(s!==void 0&&Fm(s))for(let a=0,u=s.length;a!==u;++a){let l=s[a];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ba,r=e.length-1,o=1;for(let a=1;a<r;++a){let u=!1,l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(s)u=!0;else{let d=a*i,m=d-i,p=d+i;for(let c=0;c!==i;++c){let M=t[d+c];if(M!==t[m+c]||M!==t[p+c]){u=!0;break}}}if(u){if(a!==o){e[o]=e[a];let d=a*i,m=o*i;for(let p=0;p!==i;++p)t[m+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,u=o*i,l=0;l!==i;++l)t[u+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Fa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Td(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Ka;var ms=class extends ti{constructor(e,t,i){super(e,t,i)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=mo;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};cl.prototype.ValueTypeName="color";var hl=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="number";var ul=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=(i-t)/(s-t),l=e*a;for(let f=l+a;l!==f;l+=4)on.slerpFlat(r,0,o,l-a,o,l,u);return r}},Do=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends ti{constructor(e,t,i){super(e,t,i)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=mo;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};dl.prototype.ValueTypeName="vector";var fl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,u,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,d){return l.push(f,d),this},this.removeHandler=function(f){let d=l.indexOf(f);return d!==-1&&l.splice(d,2),this},this.getHandler=function(f){for(let d=0,m=l.length;d<m;d+=2){let p=l[d],c=l[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return c}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yf=new fl,pl=class{constructor(e){this.manager=e!==void 0?e:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var No=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Uo=class extends No{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ch=new St,Ad=new Y,Ed=new Y,ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ad),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,u=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Sr||e.reversedDepth?t.set(.5*o,0,0,.5*o+u,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+u,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},za=new Y,Oa=new on,Ti=new Y,Fo=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,Oa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Oa,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(za,Oa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Oa,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new Y,Cd=new pt,Rd=new pt,Ln=class extends Fo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,Cd,Rd),t.subVectors(Rd,Cd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/u,t-=o.offsetY*i/l,s*=o.width/u,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zo=class extends Fo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,u=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,u=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mh=class extends ml{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends No{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var yr=-90,vr=1,Cr=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ln(yr,vr,e,t);s.layers=this.layers,this.add(s);let r=new Ln(yr,vr,e,t);r.layers=this.layers,this.add(r);let o=new Ln(yr,vr,e,t);o.layers=this.layers,this.add(o);let a=new Ln(yr,vr,e,t);a.layers=this.layers,this.add(a);let u=new Ln(yr,vr,e,t);u.layers=this.layers,this.add(u);let l=new Ln(yr,vr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,u]=t;for(let l of t)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,u,l,f]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),c=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,m,p),e.xr.enabled=c,i.texture.needsPMREMUpdate=!0}},gl=class extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var qh="\\[\\]\\.:\\/",b0=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",S0="[^"+qh.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",Yh),T0=/(WCOD+)?/.source.replace("WCOD",S0),A0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),E0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),C0=new RegExp("^"+w0+T0+A0+E0+"$"),R0=["material","materials","bones","map"],gh=class{constructor(e,t,i){let s=i||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(e){let t=C0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);R0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let u=i(a.children);if(u)return u}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=gh;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fM=new Float32Array(1);var xh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Zh(n,e,t,i){let s=I0(i);switch(t){case Uh:return n*e;case Sl:return n*e/s.components*s.byteLength;case wl:return n*e/s.components*s.byteLength;case ys:return n*e*2/s.components*s.byteLength;case Tl:return n*e*2/s.components*s.byteLength;case Fh:return n*e*3/s.components*s.byteLength;case ni:return n*e*4/s.components*s.byteLength;case Al:return n*e*4/s.components*s.byteLength;case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Il:return Math.max(n,16)*Math.max(e,8)/4;case El:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Pl:case Ll:case Nl:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dl:case qo:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $l:case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yo:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function I0(n){switch(n){case qn:case Ph:return{byteLength:1,components:1};case Pr:case Lh:case yi:return{byteLength:2,components:1};case Ml:case bl:return{byteLength:2,components:4};case _i:case vl:case li:return{byteLength:4,components:1};case Dh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function z0(n){let e=new WeakMap;function t(a,u){let l=a.array,f=a.usage,d=l.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,l,f),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,u,l){let f=u.array,d=u.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,f);else{d.sort((p,c)=>p.start-c.start);let m=0;for(let p=1;p<d.length;p++){let c=d[m],M=d[p];M.start<=c.start+c.count+1?c.count=Math.max(c.count,M.start+M.count-c.start):(++m,d[m]=M)}d.length=m+1;for(let p=0,c=d.length;p<c;p++){let M=d[p];n.bufferSubData(l,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=e.get(a);u&&(n.deleteBuffer(u.buffer),e.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,u));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,u),l.version=a.version}}return{get:s,remove:r,update:o}}var O0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
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
#endif`,X0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$0=`#ifdef USE_IRIDESCENCE
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,Ug=`uniform sampler2D dfgLUT;
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
}`,Fg=`
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
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
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
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
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform float backgroundBlurriness;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,qx=`#define DISTANCE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,r_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,h_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:O0,alphahash_pars_fragment:B0,alphamap_fragment:k0,alphamap_pars_fragment:G0,alphatest_fragment:V0,alphatest_pars_fragment:H0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:Y0,begin_vertex:Z0,beginnormal_vertex:J0,bsdfs:K0,iridescence_fragment:$0,bumpmap_pars_fragment:j0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:tg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:og,common:ag,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:xg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Rg,envmap_vertex:yg,fog_vertex:vg,fog_pars_vertex:Mg,fog_fragment:bg,fog_pars_fragment:Sg,gradientmap_pars_fragment:wg,lightmap_pars_fragment:Tg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Eg,lights_pars_begin:Cg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Pg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ng,lights_physical_pars_fragment:Ug,lights_fragment_begin:Fg,lights_fragment_maps:zg,lights_fragment_end:Og,lightprobes_pars_fragment:Bg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Gg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Hg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:Kg,morphcolor_vertex:$g,morphnormal_vertex:jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:hx,opaque_fragment:ux,packing:dx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:vx,shadowmap_vertex:Mx,shadowmask_pars_fragment:bx,skinbase_vertex:Sx,skinning_pars_vertex:wx,skinning_vertex:Tx,skinnormal_vertex:Ax,specularmap_fragment:Ex,specularmap_pars_fragment:Cx,tonemapping_fragment:Rx,tonemapping_pars_fragment:Ix,transmission_fragment:Px,transmission_pars_fragment:Lx,uv_pars_fragment:Dx,uv_pars_vertex:Nx,uv_vertex:Ux,worldpos_vertex:Fx,background_vert:zx,background_frag:Ox,backgroundCube_vert:Bx,backgroundCube_frag:kx,cube_vert:Gx,cube_frag:Vx,depth_vert:Hx,depth_frag:Wx,distance_vert:Xx,distance_frag:qx,equirect_vert:Yx,equirect_frag:Zx,linedashed_vert:Jx,linedashed_frag:Kx,meshbasic_vert:$x,meshbasic_frag:jx,meshlambert_vert:Qx,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:o_,meshphysical_vert:a_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},Be={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Pi={basic:{uniforms:Cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Cn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Cn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new $e(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Cn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Cn([Be.points,Be.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Cn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Cn([Be.common,Be.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Cn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Cn([Be.sprite,Be.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Cn([Be.common,Be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Cn([Be.lights,Be.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Pi.physical={uniforms:Cn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var rc={r:0,b:0,g:0},x_=new St,Vf=new lt;Vf.set(-1,0,0,0,1,0,0,0,1);function __(n,e,t,i,s,r){let o=new $e(0),a=s===!0?0:1,u,l,f=null,d=0,m=null;function p(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let b=A.backgroundBlurriness>0;R=e.get(R,b)}return R}function c(A){let R=!1,b=p(A);b===null?x(o,a):b&&b.isColor&&(x(b,1),R=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(A,R){let b=p(R);b&&b.isCubeTexture?(l===void 0&&(l=new Tt(new ln(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ks(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vf),l.material.toneMapped=Mt.getTransfer(b.colorSpace)!==Dt,(f!==b||d!==b.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Tt(new Wn(2,2),new Xn({name:"BackgroundMaterial",uniforms:ks(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.toneMapped=Mt.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function x(A,R){A.getRGB(rc,Xh(n)),t.buffers.color.setClear(rc.r,rc.g,rc.b,R,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,R=1){o.set(A),a=R,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,x(o,a)},render:c,addToRenderList:M,dispose:_}}function y_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(L,V,z,B,X){let G=!1,k=d(L,B,z,V);r!==k&&(r=k,l(r.object)),G=p(L,B,z,X),G&&c(L,B,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,b(L,V,z,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function u(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function f(L){return n.deleteVertexArray(L)}function d(L,V,z,B){let X=B.wireframe===!0,G=i[V.id];G===void 0&&(G={},i[V.id]=G);let k=L.isInstancedMesh===!0?L.id:0,W=G[k];W===void 0&&(W={},G[k]=W);let U=W[z.id];U===void 0&&(U={},W[z.id]=U);let j=U[X];return j===void 0&&(j=m(u()),U[X]=j),j}function m(L){let V=[],z=[],B=[];for(let X=0;X<t;X++)V[X]=0,z[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:B,object:L,attributes:{},index:null}}function p(L,V,z,B){let X=r.attributes,G=V.attributes,k=0,W=z.getAttributes();for(let U in W)if(W[U].location>=0){let $=X[U],K=G[U];if(K===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),$===void 0||$.attribute!==K||K&&$.data!==K.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function c(L,V,z,B){let X={},G=V.attributes,k=0,W=z.getAttributes();for(let U in W)if(W[U].location>=0){let $=G[U];$===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let K={};K.attribute=$,$&&$.data&&(K.data=$.data),X[U]=K,k++}r.attributes=X,r.attributesNum=k,r.index=B}function M(){let L=r.newAttributes;for(let V=0,z=L.length;V<z;V++)L[V]=0}function x(L){_(L,0)}function _(L,V){let z=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;z[L]=1,B[L]===0&&(n.enableVertexAttribArray(L),B[L]=1),X[L]!==V&&(n.vertexAttribDivisor(L,V),X[L]=V)}function A(){let L=r.newAttributes,V=r.enabledAttributes;for(let z=0,B=V.length;z<B;z++)V[z]!==L[z]&&(n.disableVertexAttribArray(z),V[z]=0)}function R(L,V,z,B,X,G,k){k===!0?n.vertexAttribIPointer(L,V,z,X,G):n.vertexAttribPointer(L,V,z,B,X,G)}function b(L,V,z,B){M();let X=B.attributes,G=z.getAttributes(),k=V.defaultAttributeValues;for(let W in G){let U=G[W];if(U.location>=0){let j=X[W];if(j===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let $=j.normalized,K=j.itemSize,ge=e.get(j);if(ge===void 0)continue;let Z=ge.buffer,fe=ge.type,Ee=ge.bytesPerElement,Te=fe===n.INT||fe===n.UNSIGNED_INT||j.gpuType===vl;if(j.isInterleavedBufferAttribute){let Me=j.data,Xe=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,Ye=j.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Ke=0;Ke<U.locationSize;Ke++)_(U.location+Ke,Me.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ke=0;Ke<U.locationSize;Ke++)x(U.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Ke=0;Ke<U.locationSize;Ke++)R(U.location+Ke,K/U.locationSize,fe,$,Xe*Ee,(Ye+K/U.locationSize*Ke)*Ee,Te)}else{if(j.isInstancedBufferAttribute){for(let Me=0;Me<U.locationSize;Me++)_(U.location+Me,j.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<U.locationSize;Me++)x(U.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Me=0;Me<U.locationSize;Me++)R(U.location+Me,K/U.locationSize,fe,$,K*Ee,K/U.locationSize*Me*Ee,Te)}}else if(k!==void 0){let $=k[W];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(U.location,$);break;case 3:n.vertexAttrib3fv(U.location,$);break;case 4:n.vertexAttrib4fv(U.location,$);break;default:n.vertexAttrib1fv(U.location,$)}}}}A()}function E(){F();for(let L in i){let V=i[L];for(let z in V){let B=V[z];for(let X in B){let G=B[X];for(let k in G)f(G[k].object),delete G[k];delete B[X]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let V=i[L.id];for(let z in V){let B=V[z];for(let X in B){let G=B[X];for(let k in G)f(G[k].object),delete G[k];delete B[X]}}delete i[L.id]}function g(L){for(let V in i){let z=i[V];for(let B in z){let X=z[B];if(X[L.id]===void 0)continue;let G=X[L.id];for(let k in G)f(G[k].object),delete G[k];delete X[L.id]}}}function w(L){for(let V in i){let z=i[V],B=L.isInstancedMesh===!0?L.id:0,X=z[B];if(X!==void 0){for(let G in X){let k=X[G];for(let W in k)f(k[W].object),delete k[W];delete X[G]}delete z[B],Object.keys(z).length===0&&delete i[V]}}}function F(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:x,disableUnusedAttributes:A}}function v_(n,e,t){let i;function s(u){i=u}function r(u,l){n.drawArrays(i,u,l),t.update(l,i,1)}function o(u,l,f){f!==0&&(n.drawArraysInstanced(i,u,l,f),t.update(l,i,f))}function a(u,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,l,0,f);let m=0;for(let p=0;p<f;p++)m+=l[p];t.update(m,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function M_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==ni&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let w=g===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==qn&&g!==li&&!w&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=u(l);f!==l&&(at("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),c=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:c,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:b,maxSamples:E,samples:S}}function b_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new gi,a=new lt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let p=d.length!==0||m||i!==0||s;return s=m,i=d.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){t=f(d,m,0)},this.setState=function(d,m,p){let c=d.clippingPlanes,M=d.clipIntersection,x=d.clipShadows,_=n.get(d);if(!s||c===null||c.length===0||r&&!x)r?f(null):l();else{let A=r?0:i,R=A*4,b=_.clippingState||null;u.value=b,b=f(c,m,R,p);for(let E=0;E!==R;++E)b[E]=t[E];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,m,p,c){let M=d!==null?d.length:0,x=null;if(M!==0){if(x=u.value,c!==!0||x===null){let _=p+M*4,A=m.matrixWorldInverse;a.getNormalMatrix(A),(x===null||x.length<_)&&(x=new Float32Array(_));for(let R=0,b=p;R!==M;++R,b+=4)o.copy(d[R]).applyMatrix4(A,a),o.normal.toArray(x,b),x[b+3]=o.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}var Ko=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Eo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Fs});r.uniforms.tEquirect.value=t;let o=new Tt(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=_n),new Cr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},vf=256,S_=3,w_=20,Hf=256,Wf=16,T_=3,A_=new Y,E_=new $e,ac=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cr(1,10,null),this._boxMesh=new Tt(new ln(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=A_}=r,u=this._renderer;this._setSize(o);let l=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);let d=u.autoClear,m=u.autoClearColor,p=u.autoClearDepth,c=u.autoClearStencil,M=e.background;u.autoClear=!0,u.autoClearColor=!0,u.autoClearDepth=!0,u.autoClearStencil=!0,M===null&&(e.background=u.getClearColor(E_));let x=new Cr(i,s,f);return x.position.copy(a),x.update(u,e),u.autoClear=d,u.autoClearColor=m,u.autoClearDepth=p,u.autoClearStencil=c,e.background=M,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vf,Hh(e))}_fromTexture(e,t){e.mapping===Os||e.mapping===Ir?this._setSize(e.image.length===0?vf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Mf(e,!1,!1),i=Math.log2(e)-S_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Mf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Os||e.mapping===Ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=C_(),this._integrationMaterial=R_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Wf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-T_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let u=a>0?Math.log2(t)+.5*Math.log2(6/(Hf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=u,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=I_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Mf(n,e,t){return new Ko(n,{minFilter:Ji,generateMipmaps:e,type:yi,colorSpace:go,depthBuffer:t})}function $o(n,e,t){return new Xn({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:bn,blending:Fs,depthTest:!1,depthWrite:!1})}function C_(){return $o("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hf}u

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
	`)}function R_(){return $o("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wf}},`

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
	`)}function I_(){return $o("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${w_}
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
	`)}function bf(){return $o("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Sf(){return $o("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(m,p=!1){return m==null?null:p?o(m):r(m)}function r(m){if(m&&m.isTexture){let p=m.mapping;if(p===xl||p===_l)if(e.has(m)){let c=e.get(m).texture;return a(c,m.mapping)}else{let c=m.image;if(c&&c.height>0){let M=new Ko(c.height);return M.fromEquirectangularTexture(n,m),e.set(m,M),m.addEventListener("dispose",l),a(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture&&m.isPMREMTexture!==!0){let p=m.mapping,c=p===xl||p===_l,M=p===Os||p===Ir;if(c||M){let x=t.get(m),_=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new ac(n)),x=c?i.fromEquirectangular(m,x):i.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{let A=m.image;return c&&A&&A.height>0||M&&A&&u(A)?(i===null&&(i=new ac(n)),x=c?i.fromEquirectangular(m):i.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",f),x.texture):null}}}return m}function a(m,p){return p===xl?m.mapping=Os:p===_l&&(m.mapping=Ir),m}function u(m){let p=0,c=6;for(let M=0;M<c;M++)m[M]!==void 0&&p++;return p===c}function l(m){let p=m.target;p.removeEventListener("dispose",l);let c=e.get(p);c!==void 0&&(e.delete(p),c.dispose())}function f(m){let p=m.target;p.removeEventListener("dispose",f);let c=t.get(p);c!==void 0&&(t.delete(p),c.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function L_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&uo("WebGLRenderer: "+i+" extension not supported."),s}}}function D_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(c=>delete s[c]);function a(c){u(c.target)}function u(c){c.index!==null&&e.remove(c.index);for(let x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",a),delete s[c.id],o.unregister(c);let M=r.get(c);M&&(e.remove(M),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(c,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function f(c){let M=c.attributes;for(let x in M)e.update(M[x],n.ARRAY_BUFFER)}function d(c){let M=c.index,x=c.attributes.position,_=0;if(x===void 0)return;let A=M!==null?M.array.length:x.array.length/3-1,R=x.count>=65535?wo:So,b=new R(Math.ceil(A/3)*6,1),E=b.array;if(M!==null){let g=M.array;_=M.version;for(let w=0,F=0;w<A;w+=3){let D=g[w+0],L=g[w+1],V=g[w+2];E[F++]=D,E[F++]=L,E[F++]=L,E[F++]=V,E[F++]=V,E[F++]=D}}else{_=x.version;for(let g=0,w=0;g<A;g+=3){let F=g+0,D=g+1,L=g+2;E[w++]=F,E[w++]=D,E[w++]=D,E[w++]=L,E[w++]=L,E[w++]=F}}b.version=_;let S=r.get(c);S&&e.remove(S),r.set(c,b)}function m(c){let M=r.get(c);if(M){let x=c.index;x!==null&&M.version<x.version&&d(c)}else d(c);return r.get(c)}function p(){for(let c in s){let M=s[c].deref();M!==void 0&&u(M)}}return{get:l,update:f,getWireframeAttribute:m,dispose:p}}function N_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function u(d,m){n.drawElements(i,m,r,d*o),t.update(m,i,1)}function l(d,m,p){p!==0&&(n.drawElementsInstanced(i,m,r,d*o,p),t.update(m,i,p))}function f(d,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,p);let M=0;for(let x=0;x<p;x++)M+=m[x];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=l,this.renderMultiDraw=f}function U_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function F_(n,e,t){let i=new WeakMap,s=new Jt;function r(o,a,u){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0,m=i.get(a);if(m===void 0||m.count!==d){let F=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();let p=a.morphAttributes.position!==void 0,c=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],R=0;p===!0&&(R=1),c===!0&&(R=2),M===!0&&(R=3);let b=a.attributes.position.count*R,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*E*4*d),g=new yo(S,b,E,d);g.type=li,g.needsUpdate=!0;let w=R*4;for(let D=0;D<d;D++){let L=x[D],V=_[D],z=A[D],B=b*E*4*D;for(let X=0;X<L.count;X++){let G=X*w;p===!0&&(s.fromBufferAttribute(L,X),S[B+G+0]=s.x,S[B+G+1]=s.y,S[B+G+2]=s.z,S[B+G+3]=0),c===!0&&(s.fromBufferAttribute(V,X),S[B+G+4]=s.x,S[B+G+5]=s.y,S[B+G+6]=s.z,S[B+G+7]=0),M===!0&&(s.fromBufferAttribute(z,X),S[B+G+8]=s.x,S[B+G+9]=s.y,S[B+G+10]=s.z,S[B+G+11]=z.itemSize===4?s.w:1)}}m={count:d,texture:g,size:new pt(b,E)},i.set(a,m),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let c=a.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",c),u.getUniforms().setValue(n,"morphTargetInfluences",l)}u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function z_(n,e,t,i,s){let r=new WeakMap;function o(l){let f=s.render.frame,d=l.geometry,m=e.get(l,d);if(r.get(m)!==f&&(e.update(m),r.set(m,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",u)===!1&&l.addEventListener("dispose",u),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return m}function a(){r=new WeakMap}function u(l){let f=l.target;f.removeEventListener("dispose",u),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var O_={[wh]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[Ah]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[Ch]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function B_(n,e,t,i,s,r){let o=new ei(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,u=null,l=null,f=new Kt;f.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new wt([0,2,0,0,2,0],2));let d=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Tt(f,d),p=new zo(-1,1,1,-1,0,1),c=null,M=null,x=!1,_,A=null,R=[],b=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),u!==null&&u.setSize(E,S);for(let g=0;g<R.length;g++){let w=R[g];w.setSize&&w.setSize(E,S)}},this.setEffects=function(E){R=E,b=R.length>0&&R[0].isRenderPass===!0;let S=o.width,g=o.height;R.length>0&&a===null&&(a=new ei(S,g,{type:yi,depthBuffer:!1,stencilBuffer:!1}),u=new ei(S,g,{type:yi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&R.some(F=>F.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new qi(S,g),r===!0&&(l.format=Ki,l.type=Bs)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let F=0;F<R.length;F++){let D=R[F];D.setSize&&D.setSize(S,g),w&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(E,S){if(x||E.toneMapping===Ri&&R.length===0)return!1;if(A=S,S!==null){let g=S.width,w=S.height;(o.width!==g||o.height!==w)&&this.setSize(g,w)}return b===!1&&E.setRenderTarget(o),_=E.toneMapping,E.toneMapping=Ri,!0},this.hasRenderPass=function(){return b},this.end=function(E,S){E.toneMapping=_,x=!0;let g=o,w=a;for(let F=0;F<R.length;F++){let D=R[F];D.enabled!==!1&&(D.render(E,w,g,S),D.needsSwap!==!1&&(g=w,w=w===a?u:a))}if(c!==E.outputColorSpace||M!==E.toneMapping){c=E.outputColorSpace,M=E.toneMapping,d.defines={},Mt.getTransfer(c)===Dt&&(d.defines.SRGB_TRANSFER="");let F=O_[M];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(A),E.render(m,p),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),f.dispose(),d.dispose()}}var Xf=new Dn,qf=new qi(1,1),Yf=new Co(1),Zf=new yo,Jf=new Qa,Kf=new Eo,wf=[],Tf=[],Af=new Float32Array(16),Ef=new Float32Array(9),Cf=new Float32Array(4);function Ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cc(n,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function k_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function W_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),fn(t,i)}}function X_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Ef.set(i),n.uniformMatrix3fv(this.addr,!1,Ef),fn(t,i)}}function q_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),fn(t,i)}}function Y_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function J_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function $_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function Q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function hc(n){return n.version===0&&(n.compareFunction=Bh,n.needsUpdate=!0),n}function ty(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=hc(qf):r=Xf,t.setTexture2D(e||r,s)}function ny(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jf,s)}function iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=hc(Yf):r=Kf,t.setTextureCube(e||r,s)}function sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zf,s)}function ry(n){switch(n){case 5126:return k_;case 35664:return G_;case 35665:return V_;case 35666:return H_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return K_;case 5125:return $_;case 36294:return j_;case 36295:return Q_;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}function oy(n,e){n.uniform1fv(this.addr,e)}function ay(n,e){let t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function ly(n,e){let t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function cy(n,e){let t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function hy(n,e){let t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uy(n,e){let t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dy(n,e){let t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fy(n,e){n.uniform1iv(this.addr,e)}function py(n,e){n.uniform2iv(this.addr,e)}function my(n,e){n.uniform3iv(this.addr,e)}function gy(n,e){n.uniform4iv(this.addr,e)}function xy(n,e){n.uniform1uiv(this.addr,e)}function _y(n,e){n.uniform2uiv(this.addr,e)}function yy(n,e){n.uniform3uiv(this.addr,e)}function vy(n,e){n.uniform4uiv(this.addr,e)}function My(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=hc(qf):o=Xf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function by(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jf,r[o])}function Sy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=hc(Yf):o=Kf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function wy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zf,r[o])}function Ty(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return _y;case 36295:return yy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return wy}}var $h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ry(t.type)}},jh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ty(t.type)}},Qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Jh=/(\w+)(\])?(\[|\.)?/g;function Rf(n,e){n.seq.push(e),n.map[e.id]=e}function Ay(n,e,t){let i=n.name,s=i.length;for(Jh.lastIndex=0;;){let r=Jh.exec(i),o=Jh.lastIndex,a=r[1],u=r[2]==="]",l=r[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===s){Rf(t,l===void 0?new $h(a,n,e):new jh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Qh(a),Rf(t,d)),t=d}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Ay(a,u,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function If(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ey=37297,Cy=0;function Ry(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Pf=new lt;function Iy(n){Mt._getMatrix(Pf,Mt.workingColorSpace,n);let e=`mat3( ${Pf.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case xo:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ry(n.getShaderSource(e),a)}else return r}function Py(n,e){let t=Iy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ly={[wh]:"Linear",[Th]:"Reinhard",[Ah]:"Cineon",[ko]:"ACESFilmic",[Ch]:"AgX",[Rh]:"Neutral",[Eh]:"Custom"};function Dy(n,e){let t=Ly[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new Y;function Ny(){Mt.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function Fy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Jo(n){return n!==""}function Df(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Nf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(n){return n.replace(Oy,By)}function By(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return eu(t)}var ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(n){return n.replace(ky,Gy)}function Gy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Vy={[Us]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function Hy(n){return Vy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wy={[Ir]:"ENVMAP_MODE_REFRACTION"};function Xy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Wy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qy={[Sh]:"ENVMAP_BLENDING_MULTIPLY",[$d]:"ENVMAP_BLENDING_MIX",[jd]:"ENVMAP_BLENDING_ADD"};function Yy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qy[n.combine]||"ENVMAP_BLENDING_NONE"}function Zy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,u=Hy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Xy(t),d=Yy(t),m=Uy(t),p=Fy(r),c=s.createProgram(),M,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Jo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Jo).join(`
`),x.length>0&&(x+=`
`)):(M=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),x=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Py("linearToOutputTexel",t.outputColorSpace),Ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),o=eu(o),o=Df(o,t),o=Nf(o,t),a=eu(a),a=Df(a,t),a=Nf(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,M=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let A=_+M+o,R=_+x+a,b=If(s,s.VERTEX_SHADER,A),E=If(s,s.FRAGMENT_SHADER,R);s.attachShader(c,b),s.attachShader(c,E),t.index0AttributeName!==void 0?s.bindAttribLocation(c,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(c,0,"position"),s.linkProgram(c);function S(D){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(c)||"",V=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(E)||"",B=L.trim(),X=V.trim(),G=z.trim(),k=!0,W=!0;if(s.getProgramParameter(c,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,c,b,E);else{let U=Lf(s,b,"vertex"),j=Lf(s,E,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(c,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+U+`
`+j)}else B!==""?at("WebGLProgram: Program Info Log:",B):(X===""||G==="")&&(W=!1);W&&(D.diagnostics={runnable:k,programLog:B,vertexShader:{log:X,prefix:M},fragmentShader:{log:G,prefix:x}})}s.deleteShader(b),s.deleteShader(E),g=new Nr(s,c),w=zy(s,c)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(c,Ey)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(c),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cy++,this.cacheKey=e,this.usedTimes=1,this.program=c,this.vertexShader=b,this.fragmentShader=E,this}var Jy=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new nu(e),t.set(e,i)),i}},nu=class{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}};function Ky(n){return n===ys||n===qo||n===Yo}function $y(n,e,t,i,s,r){let o=new vo,a=new tu,u=new Set,l=[],f=new Map,d=i.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return u.add(g),g===0?"uv":`uv${g}`}function c(g,w,F,D,L,V){let z=D.fog,B=L.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||X,G),W=m[g.type],U=i.precision;g.precision!==null&&(U=i.getMaxPrecision(g.precision),U!==g.precision&&at("WebGLProgram.getParameters:",g.precision,"not supported, using",U,"instead."));let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$=j!==void 0?j.length:0,K=0;B.morphAttributes.position!==void 0&&(K=1),B.morphAttributes.normal!==void 0&&(K=2),B.morphAttributes.color!==void 0&&(K=3);let ge,Z,fe,Ee;if(W){let Ue=Pi[W];ge=Ue.vertexShader,Z=Ue.fragmentShader}else{ge=g.vertexShader,Z=g.fragmentShader;let Ue=a.getVertexShaderStage(g),Qe=a.getFragmentShaderStage(g);a.update(g,Ue,Qe),fe=Ue.id,Ee=Qe.id}let Te=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Xe=L.isInstancedMesh===!0,Ye=L.isBatchedMesh===!0,Ke=!!g.map,je=!!g.matcap,dt=!!k,tt=dt&&k.isPMREMTexture===!0,zt=!!g.aoMap,Ot=!!g.lightMap,Nt=!!g.bumpMap&&g.wireframe===!1,Rt=!!g.normalMap,cn=!!g.displacementMap,Ne=!!g.emissiveMap,_t=!!g.metalnessMap,ee=!!g.roughnessMap,At=g.anisotropy>0,J=g.clearcoat>0,Et=g.diffuseRoughness>0,it=g.dispersion>0,Bt=g.retroreflectivity>0,Pe=g.iridescence>0,Gt=g.sheen>0,et=g.transmission>0,ot=At&&!!g.anisotropyMap,O=J&&!!g.clearcoatMap,I=J&&!!g.clearcoatNormalMap,se=J&&!!g.clearcoatRoughnessMap,me=Et&&!!g.diffuseRoughnessMap,pe=Pe&&!!g.iridescenceMap,Ae=Pe&&!!g.iridescenceThicknessMap,Ce=Gt&&!!g.sheenColorMap,ue=Gt&&!!g.sheenRoughnessMap,he=!!g.specularMap,_e=!!g.specularColorMap,H=!!g.specularIntensityMap,ae=et&&!!g.transmissionMap,le=et&&!!g.thicknessMap,ve=!!g.gradientMap,ye=!!g.alphaMap,be=g.alphaTest>0,We=!!g.alphaHash,He=!!g.extensions,xe=Ri;g.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(xe=n.toneMapping);let Ze=tt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ht={shaderID:W,shaderType:g.type,shaderName:g.name,vertexShader:ge,fragmentShader:Z,defines:g.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:U,batching:Ye,batchingColor:Ye&&L._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&L.instanceColor!==null,instancingMorph:Xe&&L.morphTexture!==null,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ke,matcap:je,envMap:dt,envMapMode:dt&&k.mapping,envMapPMREM:tt,envMapMaxLod:tt?Ze.length-1:null,envMapSize:tt?Ze[0].width:null,aoMap:zt,lightMap:Ot,bumpMap:Nt,normalMap:Rt,displacementMap:cn,emissiveMap:Ne,normalMapObjectSpace:Rt&&g.normalMapType===tf,normalMapTangentSpace:Rt&&g.normalMapType===ic,packedNormalMap:Rt&&g.normalMapType===ic&&Ky(g.normalMap.format),metalnessMap:_t,roughnessMap:ee,anisotropy:At,anisotropyMap:ot,clearcoat:J,clearcoatMap:O,clearcoatNormalMap:I,clearcoatRoughnessMap:se,diffuseRoughness:Et,diffuseRoughnessMap:me,dispersion:it,retroreflection:Bt,iridescence:Pe,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:Gt,sheenColorMap:Ce,sheenRoughnessMap:ue,specularMap:he,specularColorMap:_e,specularIntensityMap:H,transmission:et,transmissionMap:ae,thicknessMap:le,gradientMap:ve,opaque:g.transparent===!1&&g.blending===_s&&g.alphaToCoverage===!1,alphaMap:ye,alphaTest:be,alphaHash:We,combine:g.combine,mapUv:Ke&&p(g.map.channel),aoMapUv:zt&&p(g.aoMap.channel),lightMapUv:Ot&&p(g.lightMap.channel),bumpMapUv:Nt&&p(g.bumpMap.channel),normalMapUv:Rt&&p(g.normalMap.channel),displacementMapUv:cn&&p(g.displacementMap.channel),emissiveMapUv:Ne&&p(g.emissiveMap.channel),metalnessMapUv:_t&&p(g.metalnessMap.channel),roughnessMapUv:ee&&p(g.roughnessMap.channel),anisotropyMapUv:ot&&p(g.anisotropyMap.channel),clearcoatMapUv:O&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:I&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:ue&&p(g.sheenRoughnessMap.channel),specularMapUv:he&&p(g.specularMap.channel),specularColorMapUv:_e&&p(g.specularColorMap.channel),specularIntensityMapUv:H&&p(g.specularIntensityMap.channel),transmissionMapUv:ae&&p(g.transmissionMap.channel),thicknessMapUv:le&&p(g.thicknessMap.channel),alphaMapUv:ye&&p(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Rt||At),vertexNormals:!!B.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ke||ye),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||B.attributes.normal===void 0&&Rt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ke&&g.map.isVideoTexture===!0&&Mt.getTransfer(g.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ne&&g.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(g.emissiveMap.colorSpace)===Dt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===En,flipSided:g.side===bn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:He&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&g.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ht.vertexUv1s=u.has(1),ht.vertexUv2s=u.has(2),ht.vertexUv3s=u.has(3),u.clear(),ht}function M(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let F in g.defines)w.push(F),w.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(x(w,g),_(w,g),w.push(n.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function x(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function _(g,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function A(g){let w=m[g.type],F;if(w){let D=Pi[w];F=xf.clone(D.uniforms)}else F=g.uniforms;return F}function R(g,w){let F=f.get(w);return F!==void 0?++F.usedTimes:(F=new Zy(n,w,g,s),l.push(F),f.set(w,F)),F}function b(g){if(--g.usedTimes===0){let w=l.indexOf(g);l[w]=l[l.length-1],l.pop(),f.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function S(){a.dispose()}return{getParameters:c,getProgramCacheKey:M,getUniforms:A,acquireProgram:R,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:S}}function jy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,u){n.get(o)[a]=u}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Qy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Of(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(m){let p=0;return m.isInstancedMesh&&(p+=2),m.isSkinnedMesh&&(p+=1),p}function a(m,p,c,M,x,_){let A=n[e];return A===void 0?(A={id:m.id,object:m,geometry:p,material:c,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:x,group:_},n[e]=A):(A.id=m.id,A.object=m,A.geometry=p,A.material=c,A.materialVariant=o(m),A.groupOrder=M,A.renderOrder=m.renderOrder,A.z=x,A.group=_),e++,A}function u(m,p,c,M,x,_,A){A.reversedDepth===!0&&(x=-x);let R=a(m,p,c,M,x,_);c.transmission>0?i.push(R):c.transparent===!0?s.push(R):t.push(R)}function l(m,p,c,M,x,_){let A=a(m,p,c,M,x,_);c.transmission>0?i.unshift(A):c.transparent===!0?s.unshift(A):t.unshift(A)}function f(m,p){t.length>1&&t.sort(m||Qy),i.length>1&&i.sort(p||zf),s.length>1&&s.sort(p||zf)}function d(){for(let m=e,p=n.length;m<p;m++){let c=n[m];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:u,unshift:l,finish:d,sort:f}}function ev(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Of,n.set(i,[o])):s>=r.length?(o=new Of,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new $e};break;case"SpotLight":t={position:new Y,direction:new Y,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var iv=0;function sv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rv(n){let e=new tv,t=nv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Y);let s=new Y,r=new St,o=new St;function a(l){let f=0,d=0,m=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,c=0,M=0,x=0,_=0,A=0,R=0,b=0,E=0,S=0,g=0,w=0,F=0,D=0;l.sort(sv);for(let V=0,z=l.length;V<z;V++){let B=l[V],X=B.color,G=B.intensity,k=B.distance,W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ys?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)f+=X.r*G,d+=X.g*G,m+=X.b*G;else if(B.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(B.sh.coefficients[U],G);D++}else if(B.isSunLight){let U=e.get(B);if(U.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let j=B.shadow,$=t.get(B);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[c]=$,i.sunShadowMap[c]=W;let K=j.getViewportCount();for(let ge=0;ge<K;ge++)i.sunShadowMatrix[M+ge]=j.getMatrix(ge),i.sunShadowCascade[M+ge]=j._cascadeData[ge];M+=K,c++}i.sun[p]=U,p++}else if(B.isDirectionalLight){let U=e.get(B);if(U.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let j=B.shadow,$=t.get(B);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,i.directionalShadow[x]=$,i.directionalShadowMap[x]=W,i.directionalShadowMatrix[x]=B.shadow.matrix,E++}i.directional[x]=U,x++}else if(B.isSpotLight){let U=e.get(B);U.position.setFromMatrixPosition(B.matrixWorld),U.color.copy(X).multiplyScalar(G),U.distance=k,U.coneCos=Math.cos(B.angle),U.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),U.decay=B.decay,i.spot[A]=U;let j=B.shadow;if(B.map&&(i.spotLightMap[w]=B.map,w++,j.updateMatrices(B),B.castShadow&&F++),i.spotLightMatrix[A]=j.matrix,B.castShadow){let $=t.get(B);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,i.spotShadow[A]=$,i.spotShadowMap[A]=W,g++}A++}else if(B.isRectAreaLight){let U=e.get(B);U.color.copy(X).multiplyScalar(G),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),i.rectArea[R]=U,R++}else if(B.isPointLight){let U=e.get(B);if(U.color.copy(B.color).multiplyScalar(B.intensity),U.distance=B.distance,U.decay=B.decay,B.castShadow){let j=B.shadow,$=t.get(B);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=B.shadow.matrix,S++}i.point[_]=U,_++}else if(B.isHemisphereLight){let U=e.get(B);U.skyColor.copy(B.color).multiplyScalar(G),U.groundColor.copy(B.groundColor).multiplyScalar(G),i.hemi[b]=U,b++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;let L=i.hash;(L.sunLength!==p||L.directionalLength!==x||L.pointLength!==_||L.spotLength!==A||L.rectAreaLength!==R||L.hemiLength!==b||L.numSunShadows!==c||L.numDirectionalShadows!==E||L.numPointShadows!==S||L.numSpotShadows!==g||L.numSpotMaps!==w||L.numLightProbes!==D)&&(i.sun.length=p,i.directional.length=x,i.spot.length=A,i.rectArea.length=R,i.point.length=_,i.hemi.length=b,i.sunShadow.length=c,i.sunShadowMap.length=c,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+w-F,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=D,L.sunLength=p,L.directionalLength=x,L.pointLength=_,L.spotLength=A,L.rectAreaLength=R,L.hemiLength=b,L.numSunShadows=c,L.numDirectionalShadows=E,L.numPointShadows=S,L.numSpotShadows=g,L.numSpotMaps=w,L.numLightProbes=D,i.version=iv++)}function u(l,f){let d=0,m=0,p=0,c=0,M=0,x=0,_=f.matrixWorldInverse;for(let A=0,R=l.length;A<R;A++){let b=l[A];if(b.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(_),d++}else if(b.isDirectionalLight){let E=i.directional[m];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),m++}else if(b.isSpotLight){let E=i.spot[c];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),c++}else if(b.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),M++}else if(b.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(_),x++}}}return{setup:a,setupView:u,state:i}}function Bf(n){let e=new rv(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function u(){e.setup(t),s.sort((d,m)=>d.priority-m.priority||d.id-m.id)}function l(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:u,setupLightsView:l,pushLight:o,pushShadow:a}}function ov(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Bf(n),e.set(s,[a])):r>=o.length?(a=new Bf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
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
}`,cv=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],hv=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],kf=new St,Zo=new Y,Kh=new Y;function uv(n,e,t){let i=new ds,s=new pt,r=new pt,o=new Jt,a=new il,u=new sl,l={},f=t.maxTextureSize,d={[xs]:bn,[bn]:xs,[En]:En},m=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:av,fragmentShader:lv}),p=m.clone();p.defines.HORIZONTAL_PASS=1;let c=new Kt;c.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Tt(c,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let _=this.type;this.render=function(S,g,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===Ld&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let F=n.getRenderTarget(),D=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Fs),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=_!==this.type;z&&g.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(X=>X.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,X=S.length;B<X;B++){let G=S[B],k=G.shadow;if(k===void 0){at("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let W=k.getFrameExtents();s.multiply(W),r.copy(k.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/W.x),s.x=r.x*W.x,k.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/W.y),s.y=r.y*W.y,k.mapSize.y=r.y));let U=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=U,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Rr){if(G.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ei(s.x,s.y,{format:ys,type:yi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new qi(s.x,s.y,li),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=Hi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xn,k.map.depthTexture.magFilter=xn}else G.isPointLight?(k.map=new Ko(s.x),k.map.depthTexture=new Co(s.x,_i)):(k.map=new ei(s.x,s.y),k.map.depthTexture=new qi(s.x,s.y,_i)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=Hi,this.type===Us?(k.map.depthTexture.compareFunction=U?Oh:zh,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xn,k.map.depthTexture.magFilter=xn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();G.isPointLight!==!0&&k.updateMatrices(G,w);let $=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:w.layers;for(let K=0;K<j;K++){let ge=k.getCamera(K);if(G.isPointLight){let Z=k.camera,fe=k.matrix,Ee=G.distance||Z.far;Ee!==Z.far&&(Z.far=Ee,Z.updateProjectionMatrix()),Zo.setFromMatrixPosition(G.matrixWorld),Z.position.copy(Zo),Kh.copy(Z.position),Kh.add(cv[K]),Z.up.copy(hv[K]),Z.lookAt(Kh),Z.updateMatrixWorld(),fe.makeTranslation(-Zo.x,-Zo.y,-Zo.z),kf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(kf,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,K),n.clear();else{K===0&&(n.setRenderTarget(k.map),n.clear());let Z=k.getViewport(K);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),V.viewport(o)}i=k.getFrustum(K),b(g,w,ge,G,$,this.type)}k.isPointLightShadow!==!0&&this.type===Rr&&A(k,w),k.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(F,D,L)};function A(S,g){let w=e.update(M);m.defines.VSM_SAMPLES!==S.blurSamples&&(m.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new ei(s.x,s.y,{format:ys,type:yi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),m.uniforms.shadow_pass.value=S.map.depthTexture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(g,null,w,m,M,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(g,null,w,p,M,null)}function R(S,g,w,F){let D=null,L=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)D=L;else if(D=w.isPointLight===!0?u:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let V=D.uuid,z=g.uuid,B=l[V];B===void 0&&(B={},l[V]=B);let X=B[z];X===void 0&&(X=D.clone(),B[z]=X,g.addEventListener("dispose",E)),D=X}if(D.visible=g.visible,D.wireframe=g.wireframe,F===Rr?D.side=g.shadowSide!==null?g.shadowSide:g.side:D.side=g.shadowSide!==null?g.shadowSide:d[g.side],D.alphaMap=g.alphaMap,D.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,D.map=g.map,D.clipShadows=g.clipShadows,D.clippingPlanes=g.clippingPlanes,D.clipIntersection=g.clipIntersection,D.displacementMap=g.displacementMap,D.displacementScale=g.displacementScale,D.displacementBias=g.displacementBias,D.wireframeLinewidth=g.wireframeLinewidth,D.linewidth=g.linewidth,w.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let V=n.properties.get(D);V.light=w}return D}function b(S,g,w,F,D,L){if(S.visible===!1)return;if(S.layers.test(D)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Rr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let B=e.update(S),X=S.material;if(Array.isArray(X)){let G=B.groups;for(let k=0,W=G.length;k<W;k++){let U=G[k],j=X[U.materialIndex];if(j&&j.visible){let $=R(S,j,F,L);S.onBeforeShadow(n,S,g,w,B,$,U),n.renderBufferDirect(w,null,B,$,S,U),S.onAfterShadow(n,S,g,w,B,$,U)}}}else if(X.visible){let G=R(S,X,F,L);S.onBeforeShadow(n,S,g,w,B,G,null),n.renderBufferDirect(w,null,B,G,S,null),S.onAfterShadow(n,S,g,w,B,G,null)}}let z=S.children;for(let B=0,X=z.length;B<X;B++)b(z[B],g,w,F,D,L)}function E(S){S.target.removeEventListener("dispose",E);for(let w in l){let F=l[w],D=S.target.uuid;D in F&&(F[D].dispose(),delete F[D])}}}function dv(n,e){function t(){let H=!1,ae=new Jt,le=null,ve=new Jt(0,0,0,0);return{setMask:function(ye){le!==ye&&!H&&(n.colorMask(ye,ye,ye,ye),le=ye)},setLocked:function(ye){H=ye},setClear:function(ye,be,We,He,xe){xe===!0&&(ye*=He,be*=He,We*=He),ae.set(ye,be,We,He),ve.equals(ae)===!1&&(n.clearColor(ye,be,We,He),ve.copy(ae))},reset:function(){H=!1,le=null,ve.set(-1,0,0,0)}}}function i(){let H=!1,ae=!1,le=null,ve=null,ye=null;return{setReversed:function(be){if(ae!==be){let We=e.get("EXT_clip_control");be?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ae=be;let He=ye;ye=null,this.setClear(He)}},getReversed:function(){return ae},setTest:function(be){be?Me(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(be){le!==be&&!H&&(n.depthMask(be),le=be)},setFunc:function(be){if(ae&&(be=ff[be]),ve!==be){switch(be){case Ga:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=be}},setLocked:function(be){H=be},setClear:function(be){ye!==be&&(ye=be,ae&&(be=1-be),n.clearDepth(be))},reset:function(){H=!1,le=null,ve=null,ye=null,ae=!1}}}function s(){let H=!1,ae=null,le=null,ve=null,ye=null,be=null,We=null,He=null,xe=null;return{setTest:function(Ze){H||(Ze?Me(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!H&&(n.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,ht,Ue){(le!==Ze||ve!==ht||ye!==Ue)&&(n.stencilFunc(Ze,ht,Ue),le=Ze,ve=ht,ye=Ue)},setOp:function(Ze,ht,Ue){(be!==Ze||We!==ht||He!==Ue)&&(n.stencilOp(Ze,ht,Ue),be=Ze,We=ht,He=Ue)},setLocked:function(Ze){H=Ze},setClear:function(Ze){xe!==Ze&&(n.clearStencil(Ze),xe=Ze)},reset:function(){H=!1,ae=null,le=null,ve=null,ye=null,be=null,We=null,He=null,xe=null}}}let r=new t,o=new i,a=new s,u={},l=new WeakMap,f={},d={},m={},p=new WeakMap,c=[],M=null,x=!1,_=null,A=null,R=null,b=null,E=null,S=null,g=null,w=new $e(0,0,0),F=0,D=!1,L=null,V=null,z=null,B=null,X=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,W=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=W>=2);let j=null,$={},K=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Z=new Jt().fromArray(K),fe=new Jt().fromArray(ge);function Ee(H,ae,le,ve){let ye=new Uint8Array(4),be=n.createTexture();n.bindTexture(H,be),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<le;We++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ae+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return be}let Te={};Te[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(br),Nt(!1),Rt(_h),Me(n.CULL_FACE),zt(Fs);function Me(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function Xe(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function Ye(H,ae){return m[H]!==ae?(n.bindFramebuffer(H,ae),m[H]=ae,H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ae),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ke(H,ae){let le=c,ve=!1;if(H){le=p.get(ae),le===void 0&&(le=[],p.set(ae,le));let ye=H.textures;if(le.length!==ye.length||le[0]!==n.COLOR_ATTACHMENT0){for(let be=0,We=ye.length;be<We;be++)le[be]=n.COLOR_ATTACHMENT0+be;le.length=ye.length,ve=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ve=!0);ve&&n.drawBuffers(le)}function je(H){return M!==H?(n.useProgram(H),M=H,!0):!1}let dt={[zs]:n.FUNC_ADD,[Nd]:n.FUNC_SUBTRACT,[Ud]:n.FUNC_REVERSE_SUBTRACT};dt[Fd]=n.MIN,dt[zd]=n.MAX;let tt={[Od]:n.ZERO,[Bd]:n.ONE,[kd]:n.SRC_COLOR,[Mh]:n.SRC_ALPHA,[qd]:n.SRC_ALPHA_SATURATE,[Wd]:n.DST_COLOR,[Vd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[bh]:n.ONE_MINUS_SRC_ALPHA,[Xd]:n.ONE_MINUS_DST_COLOR,[Hd]:n.ONE_MINUS_DST_ALPHA,[Yd]:n.CONSTANT_COLOR,[Zd]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[Kd]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(H,ae,le,ve,ye,be,We,He,xe,Ze){if(H===Fs){x===!0&&(Xe(n.BLEND),x=!1);return}if(x===!1&&(Me(n.BLEND),x=!0),H!==Dd){if(H!==_||Ze!==D){if((A!==zs||E!==zs)&&(n.blendEquation(n.FUNC_ADD),A=zs,E=zs),Ze)switch(H){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.ONE,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",H);break}else switch(H){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yh:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",H);break}R=null,b=null,S=null,g=null,w.set(0,0,0),F=0,_=H,D=Ze}return}ye=ye||ae,be=be||le,We=We||ve,(ae!==A||ye!==E)&&(n.blendEquationSeparate(dt[ae],dt[ye]),A=ae,E=ye),(le!==R||ve!==b||be!==S||We!==g)&&(n.blendFuncSeparate(tt[le],tt[ve],tt[be],tt[We]),R=le,b=ve,S=be,g=We),(He.equals(w)===!1||xe!==F)&&(n.blendColor(He.r,He.g,He.b,xe),w.copy(He),F=xe),_=H,D=!1}function Ot(H,ae){H.side===En?Xe(n.CULL_FACE):Me(n.CULL_FACE);let le=H.side===bn;ae&&(le=!le),Nt(le),H.blending===_s&&H.transparent===!1?zt(Fs):zt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ve=H.stencilWrite;a.setTest(ve),ve&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(H){L!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),L=H)}function Rt(H){H!==Id?(Me(n.CULL_FACE),H!==V&&(H===_h?n.cullFace(n.BACK):H===Pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),V=H}function cn(H){H!==z&&(k&&n.lineWidth(H),z=H)}function Ne(H,ae,le){H?(Me(n.POLYGON_OFFSET_FILL),(B!==ae||X!==le)&&(B=ae,X=le,o.getReversed()&&(ae=-ae,le=-le),n.polygonOffset(ae,le))):Xe(n.POLYGON_OFFSET_FILL)}function _t(H){H?Me(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function ee(H){H===void 0&&(H=n.TEXTURE0+G-1),j!==H&&(n.activeTexture(H),j=H)}function At(H,ae,le){le===void 0&&(j===null?le=n.TEXTURE0+G-1:le=j);let ve=$[le];ve===void 0&&(ve={type:void 0,texture:void 0},$[le]=ve),(ve.type!==H||ve.texture!==ae)&&(j!==le&&(n.activeTexture(le),j=le),n.bindTexture(H,ae||Te[H]),ve.type=H,ve.texture=ae)}function J(){let H=$[j];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Et(){try{n.compressedTexImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function Bt(){try{n.texSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function Pe(){try{n.texSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function Gt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function et(){try{n.compressedTexSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function ot(){try{n.texStorage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function O(){try{n.texStorage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function I(){try{n.texImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function se(){try{n.texImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function me(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function pe(H,ae){d[H]!==ae&&(n.pixelStorei(H,ae),d[H]=ae)}function Ae(H){Z.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Z.copy(H))}function Ce(H){fe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),fe.copy(H))}function ue(H,ae){let le=l.get(ae);le===void 0&&(le=new WeakMap,l.set(ae,le));let ve=le.get(H);ve===void 0&&(ve=n.getUniformBlockIndex(ae,H.name),n.uniformBlockBinding(ae,ve,ve),le.set(H,ve))}function he(H,ae,le){let ye=l.get(ae).get(H);u[ye]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,ye,le),u[ye]=le)}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},d={},j=null,$={},m={},u={},p=new WeakMap,c=[],M=null,x=!1,_=null,A=null,R=null,b=null,E=null,S=null,g=null,w=new $e(0,0,0),F=0,D=!1,L=null,V=null,z=null,B=null,X=null,Z.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:Xe,bindFramebuffer:Ye,drawBuffers:Ke,useProgram:je,setBlending:zt,setMaterial:Ot,setFlipSided:Nt,setCullFace:Rt,setLineWidth:cn,setPolygonOffset:Ne,setScissorTest:_t,activeTexture:ee,bindTexture:At,unbindTexture:J,compressedTexImage2D:Et,compressedTexImage3D:it,texImage2D:I,texImage3D:se,pixelStorei:pe,getParameter:me,updateUBOMapping:ue,uniformBlockBinding:he,texStorage2D:ot,texStorage3D:O,texSubImage2D:Bt,texSubImage3D:Pe,compressedTexSubImage2D:Gt,compressedTexSubImage3D:et,scissor:Ae,viewport:Ce,reset:_e}}function fv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,f=new WeakMap,d=new Set,m,p=new WeakMap,c=new Set,M=new FinalizationRegistry(O=>c.delete(O)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,I){return x?new OffscreenCanvas(O,I):_o("canvas")}function A(O,I,se){let me=1,pe=ot(O);if((pe.width>se||pe.height>se)&&(me=se/Math.max(pe.width,pe.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Ae=Math.floor(me*pe.width),Ce=Math.floor(me*pe.height);m===void 0&&(m=_(Ae,Ce));let ue=I?_(Ae,Ce):m;return ue.width=Ae,ue.height=Ce,ue.getContext("2d").drawImage(O,0,0,Ae,Ce),at("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Ce+")."),ue}else return"data"in O&&at("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),O;return O}function R(O){return O.generateMipmaps}function b(O){n.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(O,I,se,me,pe,Ae=!1){if(O!==null){if(n[O]!==void 0)return n[O];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ce;me&&(Ce=e.get("EXT_texture_norm16"),Ce||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=I;if(I===n.RED&&(se===n.FLOAT&&(ue=n.R32F),se===n.HALF_FLOAT&&(ue=n.R16F),se===n.UNSIGNED_BYTE&&(ue=n.R8),se===n.UNSIGNED_SHORT&&Ce&&(ue=Ce.R16_EXT),se===n.SHORT&&Ce&&(ue=Ce.R16_SNORM_EXT)),I===n.RED_INTEGER&&(se===n.UNSIGNED_BYTE&&(ue=n.R8UI),se===n.UNSIGNED_SHORT&&(ue=n.R16UI),se===n.UNSIGNED_INT&&(ue=n.R32UI),se===n.BYTE&&(ue=n.R8I),se===n.SHORT&&(ue=n.R16I),se===n.INT&&(ue=n.R32I)),I===n.RG&&(se===n.FLOAT&&(ue=n.RG32F),se===n.HALF_FLOAT&&(ue=n.RG16F),se===n.UNSIGNED_BYTE&&(ue=n.RG8),se===n.UNSIGNED_SHORT&&Ce&&(ue=Ce.RG16_EXT),se===n.SHORT&&Ce&&(ue=Ce.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(se===n.UNSIGNED_BYTE&&(ue=n.RG8UI),se===n.UNSIGNED_SHORT&&(ue=n.RG16UI),se===n.UNSIGNED_INT&&(ue=n.RG32UI),se===n.BYTE&&(ue=n.RG8I),se===n.SHORT&&(ue=n.RG16I),se===n.INT&&(ue=n.RG32I)),I===n.RGB_INTEGER&&(se===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),se===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),se===n.UNSIGNED_INT&&(ue=n.RGB32UI),se===n.BYTE&&(ue=n.RGB8I),se===n.SHORT&&(ue=n.RGB16I),se===n.INT&&(ue=n.RGB32I)),I===n.RGBA_INTEGER&&(se===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),se===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),se===n.UNSIGNED_INT&&(ue=n.RGBA32UI),se===n.BYTE&&(ue=n.RGBA8I),se===n.SHORT&&(ue=n.RGBA16I),se===n.INT&&(ue=n.RGBA32I)),I===n.RGB&&(se===n.UNSIGNED_SHORT&&Ce&&(ue=Ce.RGB16_EXT),se===n.SHORT&&Ce&&(ue=Ce.RGB16_SNORM_EXT),se===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),se===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),I===n.RGBA){let he=Ae?xo:Mt.getTransfer(pe);se===n.FLOAT&&(ue=n.RGBA32F),se===n.HALF_FLOAT&&(ue=n.RGBA16F),se===n.UNSIGNED_BYTE&&(ue=he===Dt?n.SRGB8_ALPHA8:n.RGBA8),se===n.UNSIGNED_SHORT&&Ce&&(ue=Ce.RGBA16_EXT),se===n.SHORT&&Ce&&(ue=Ce.RGBA16_SNORM_EXT),se===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),se===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function g(O,I){let se;return O?I===null||I===_i||I===Bs?se=n.DEPTH24_STENCIL8:I===li?se=n.DEPTH32F_STENCIL8:I===Pr&&(se=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===_i||I===Bs?se=n.DEPTH_COMPONENT24:I===li?se=n.DEPTH_COMPONENT32F:I===Pr&&(se=n.DEPTH_COMPONENT16),se}function w(O,I){return R(O)===!0||O.isFramebufferTexture&&O.minFilter!==xn&&O.minFilter!==_n?Math.log2(Math.max(I.width,I.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?I.mipmaps.length:1}function F(O){let I=new WeakRef(O);i.get(O).__ref=I,c.add(I),M.register(O,I,I)}function D(O){let I=i.get(O).__ref;I!==void 0&&(c.delete(I),M.unregister(I))}function L(O){z(O.target)}function V(O){B(O.target)}function z(O){O.removeEventListener("dispose",L),D(O),G(O),O.isVideoTexture&&f.delete(O),O.isHTMLTexture&&d.delete(O)}function B(O){O.removeEventListener("dispose",V),D(O),W(O)}function X(){for(let O of c){let I=O.deref();I!==void 0&&(I.isRenderTarget===!0?B(I):z(I))}c.clear(),d.clear()}function G(O){let I=i.get(O);if(I.__webglInit===void 0)return;let se=O.source,me=p.get(se);if(me){let pe=me[I.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&k(O),Object.keys(me).length===0&&p.delete(se)}i.remove(O)}function k(O){let I=i.get(O);n.deleteTexture(I.__webglTexture);let se=O.source,me=p.get(se);delete me[I.__cacheKey],o.memory.textures--}function W(O){let I=i.get(O);I.__depthDisposeCallback&&I.__depthDisposeCallback();let se=O.depthTexture;if(se&&se.renderTarget===O&&z(se),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(I.__webglFramebuffer[pe]))for(let Ae=0;Ae<I.__webglFramebuffer[pe].length;Ae++)n.deleteFramebuffer(I.__webglFramebuffer[pe][Ae]);else n.deleteFramebuffer(I.__webglFramebuffer[pe]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[pe])}else{if(Array.isArray(I.__webglFramebuffer))for(let pe=0;pe<I.__webglFramebuffer.length;pe++)n.deleteFramebuffer(I.__webglFramebuffer[pe]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let pe=0;pe<I.__webglColorRenderbuffer.length;pe++)I.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[pe]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let me=O.textures;for(let pe=0,Ae=me.length;pe<Ae;pe++){let Ce=i.get(me[pe]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(me[pe])}i.remove(O)}let U=0;function j(){U=0}function $(){return U}function K(O){U=O}function ge(){let O=U;return O>=s.maxTextures&&at("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,O}function Z(O){let I=[];return I.push(O.wrapS),I.push(O.wrapT),I.push(O.wrapR||0),I.push(O.magFilter),I.push(O.minFilter),I.push(O.anisotropy),I.push(O.internalFormat),I.push(O.format),I.push(O.type),I.push(O.generateMipmaps),I.push(O.mipmapsAutoUpdate),I.push(O.premultiplyAlpha),I.push(O.flipY),I.push(O.unpackAlignment),I.push(O.colorSpace),I.join()}function fe(O,I){let se=i.get(O);if(O.isVideoTexture&&Gt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&se.__version!==O.version){let me=O.image;if(me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(se,O,I);return}}else O.isExternalTexture&&(se.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,se.__webglTexture,n.TEXTURE0+I)}function Ee(O,I){let se=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&se.__version!==O.version){Ot(se,O,I);return}else O.isExternalTexture&&(se.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,se.__webglTexture,n.TEXTURE0+I)}function Te(O,I){let se=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&se.__version!==O.version){Ot(se,O,I);return}t.bindTexture(n.TEXTURE_3D,se.__webglTexture,n.TEXTURE0+I)}function Me(O,I){let se=i.get(O);if(O.version>0&&se.__version!==O.version){Nt(se,O,I);return}t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture,n.TEXTURE0+I)}let Xe={[Za]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},Ye={[xn]:n.NEAREST,[Qd]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},Ke={[sf]:n.NEVER,[Bh]:n.ALWAYS,[rf]:n.LESS,[zh]:n.LEQUAL,[of]:n.EQUAL,[Oh]:n.GEQUAL,[af]:n.GREATER,[lf]:n.NOTEQUAL};function je(O,I){if(I.type===li&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===_n||I.magFilter===yl||I.magFilter===Go||I.magFilter===Ji||I.minFilter===_n||I.minFilter===yl||I.minFilter===Go||I.minFilter===Ji)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Xe[I.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Xe[I.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Xe[I.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,Ye[I.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,Ye[I.minFilter]),I.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Ke[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===xn||I.minFilter!==Go&&I.minFilter!==Ji||I.type===li&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let se=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function dt(O,I){let se=!1;O.__webglInit===void 0&&(O.__webglInit=!0,I.addEventListener("dispose",L),F(I));let me=I.source,pe=p.get(me);pe===void 0&&(pe={},p.set(me,pe));let Ae=Z(I);if(Ae!==O.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,se=!0),pe[Ae].usedTimes++;let Ce=pe[O.__cacheKey];Ce!==void 0&&(pe[O.__cacheKey].usedTimes--,Ce.usedTimes===0&&k(I)),O.__cacheKey=Ae,O.__webglTexture=pe[Ae].texture}return se}function tt(O,I,se){return Math.floor(Math.floor(O/se)/I)}function zt(O,I,se,me){let Ae=O.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,se,me,I.data);else{Ae.sort((H,ae)=>H.start-ae.start);let Ce=0;for(let H=1;H<Ae.length;H++){let ae=Ae[Ce],le=Ae[H],ve=ae.start+ae.count,ye=tt(le.start,I.width,4),be=tt(ae.start,I.width,4);le.start<=ve+1&&ye===be&&tt(le.start+le.count-1,I.width,4)===ye?ae.count=Math.max(ae.count,le.start+le.count-ae.start):(++Ce,Ae[Ce]=le)}Ae.length=Ce+1;let ue=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let H=0,ae=Ae.length;H<ae;H++){let le=Ae[H],ve=Math.floor(le.start/4),ye=Math.ceil(le.count/4),be=ve%I.width,We=Math.floor(ve/I.width),He=ye,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,be),t.pixelStorei(n.UNPACK_SKIP_ROWS,We),t.texSubImage2D(n.TEXTURE_2D,0,be,We,He,xe,se,me,I.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ue),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Ot(O,I,se){let me=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(me=n.TEXTURE_3D);let pe=dt(O,I),Ae=I.source;t.bindTexture(me,O.__webglTexture,n.TEXTURE0+se);let Ce=i.get(Ae);if(Ae.version!==Ce.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+se),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let xe=Mt.getPrimaries(Mt.workingColorSpace),Ze=I.colorSpace===$i?null:Mt.getPrimaries(I.colorSpace),ht=I.colorSpace===$i||xe===Ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let he=A(I.image,!1,s.maxTextureSize);he=et(I,he);let _e=r.convert(I.format,I.colorSpace),H=r.convert(I.type),ae=S(I.internalFormat,_e,H,I.normalized,I.colorSpace,I.isVideoTexture);je(me,I);let le,ve=I.mipmaps,ye=I.isVideoTexture!==!0,be=Ce.__version===void 0||pe===!0,We=Ae.dataReady,He=w(I,he);if(I.isDepthTexture)ae=g(I.format===Ki,I.type),be&&(ye?t.texStorage2D(n.TEXTURE_2D,1,ae,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ae,he.width,he.height,0,_e,H,null));else if(I.isDataTexture)if(ve.length>0){ye&&be&&t.texStorage2D(n.TEXTURE_2D,He,ae,ve[0].width,ve[0].height);for(let xe=0,Ze=ve.length;xe<Ze;xe++)le=ve[xe],ye?We&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,le.width,le.height,_e,H,le.data):t.texImage2D(n.TEXTURE_2D,xe,ae,le.width,le.height,0,_e,H,le.data);I.generateMipmaps=!1}else ye?(be&&t.texStorage2D(n.TEXTURE_2D,He,ae,he.width,he.height),We&&zt(I,he,_e,H)):t.texImage2D(n.TEXTURE_2D,0,ae,he.width,he.height,0,_e,H,he.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ye&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,ae,ve[0].width,ve[0].height,he.depth);for(let xe=0,Ze=ve.length;xe<Ze;xe++)if(le=ve[xe],I.format!==ni)if(_e!==null)if(ye){if(We)if(I.layerUpdates.size>0){let ht=Zh(le.width,le.height,I.format,I.type);for(let Ue of I.layerUpdates){let Qe=le.data.subarray(Ue*ht/le.data.BYTES_PER_ELEMENT,(Ue+1)*ht/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ue,le.width,le.height,1,_e,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,le.width,le.height,he.depth,_e,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,ae,le.width,le.height,he.depth,0,le.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?We&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,le.width,le.height,he.depth,_e,H,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,ae,le.width,le.height,he.depth,0,_e,H,le.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{ye&&be&&t.texStorage2D(n.TEXTURE_2D,He,ae,ve[0].width,ve[0].height);for(let xe=0,Ze=ve.length;xe<Ze;xe++)le=ve[xe],I.format!==ni?_e!==null?ye?We&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,le.width,le.height,_e,le.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,ae,le.width,le.height,0,le.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?We&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,le.width,le.height,_e,H,le.data):t.texImage2D(n.TEXTURE_2D,xe,ae,le.width,le.height,0,_e,H,le.data)}else if(I.isDataArrayTexture)if(ye){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,ae,he.width,he.height,he.depth),We)if(I.layerUpdates.size>0){let xe=Zh(he.width,he.height,I.format,I.type);for(let Ze of I.layerUpdates){let ht=he.data.subarray(Ze*xe/he.data.BYTES_PER_ELEMENT,(Ze+1)*xe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ze,he.width,he.height,1,_e,H,ht)}I.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,_e,H,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,he.width,he.height,he.depth,0,_e,H,he.data);else if(I.isData3DTexture)ye?(be&&t.texStorage3D(n.TEXTURE_3D,He,ae,he.width,he.height,he.depth),We&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,_e,H,he.data)):t.texImage3D(n.TEXTURE_3D,0,ae,he.width,he.height,he.depth,0,_e,H,he.data);else if(I.isFramebufferTexture){if(be)if(ye)t.texStorage2D(n.TEXTURE_2D,He,ae,he.width,he.height);else{let xe=he.width,Ze=he.height;for(let ht=0;ht<He;ht++)t.texImage2D(n.TEXTURE_2D,ht,ae,xe,Ze,0,_e,H,null),xe>>=1,Ze>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),he.parentNode!==xe){xe.appendChild(he),d.add(I),xe.onpaint=Ze=>{let ht=Ze.changedElements;for(let Ue of d)ht.includes(Ue.image)&&(Ue.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,he);else{let ht=n.RGBA,Ue=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ht,Ue,Qe,he)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(ye&&be){let xe=ot(ve[0]);t.texStorage2D(n.TEXTURE_2D,He,ae,xe.width,xe.height)}for(let xe=0,Ze=ve.length;xe<Ze;xe++)le=ve[xe],ye?We&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,_e,H,le):t.texImage2D(n.TEXTURE_2D,xe,ae,_e,H,le);I.generateMipmaps=!1}else if(ye){if(be){let xe=ot(he);t.texStorage2D(n.TEXTURE_2D,He,ae,xe.width,xe.height)}We&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,H,he)}else t.texImage2D(n.TEXTURE_2D,0,ae,_e,H,he);R(I)&&I.mipmapsAutoUpdate===!0&&b(me),Ce.__version=Ae.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Nt(O,I,se){if(I.image.length!==6)return;let me=dt(O,I),pe=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+se);let Ae=i.get(pe);if(pe.version!==Ae.__version||me===!0){t.activeTexture(n.TEXTURE0+se);let Ce=Mt.getPrimaries(Mt.workingColorSpace),ue=I.colorSpace===$i?null:Mt.getPrimaries(I.colorSpace),he=I.colorSpace===$i||Ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let _e=I.isCompressedTexture||I.image[0].isCompressedTexture,H=I.image[0]&&I.image[0].isDataTexture,ae=[];for(let Ue=0;Ue<6;Ue++)!_e&&!H?ae[Ue]=A(I.image[Ue],!0,s.maxCubemapSize):ae[Ue]=H?I.image[Ue].image:I.image[Ue],ae[Ue]=et(I,ae[Ue]);let le=ae[0],ve=r.convert(I.format,I.colorSpace),ye=r.convert(I.type),be=S(I.internalFormat,ve,ye,I.normalized,I.colorSpace),We=I.isVideoTexture!==!0,He=Ae.__version===void 0||me===!0,xe=pe.dataReady,Ze=w(I,le);je(n.TEXTURE_CUBE_MAP,I);let ht;if(I.isDepthTexture){if(be=g(I.format===Ki,I.type),He)if(We)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,be,le.width,le.height);else for(let Ue=0;Ue<6;Ue++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,be,le.width,le.height,0,ve,ye,null)}else if(_e){We&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,be,le.width,le.height);for(let Ue=0;Ue<6;Ue++){ht=ae[Ue].mipmaps;for(let Qe=0;Qe<ht.length;Qe++){let Ht=ht[Qe];I.format!==ni?ve!==null?We?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,0,0,Ht.width,Ht.height,ve,Ht.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,be,Ht.width,Ht.height,0,Ht.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,0,0,Ht.width,Ht.height,ve,ye,Ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,be,Ht.width,Ht.height,0,ve,ye,Ht.data)}}}else{if(ht=I.mipmaps,We&&He){ht.length>0&&Ze++;let Ue=ot(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,be,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(H){We?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,ae[Ue].width,ae[Ue].height,ve,ye,ae[Ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,be,ae[Ue].width,ae[Ue].height,0,ve,ye,ae[Ue].data);for(let Qe=0;Qe<ht.length;Qe++){let yn=ht[Qe].image[Ue].image;We?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,0,0,yn.width,yn.height,ve,ye,yn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,be,yn.width,yn.height,0,ve,ye,yn.data)}}else{We?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,ve,ye,ae[Ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,be,ve,ye,ae[Ue]);for(let Qe=0;Qe<ht.length;Qe++){let Ht=ht[Qe];We?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,0,0,ve,ye,Ht.image[Ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,be,ve,ye,Ht.image[Ue])}}}R(I)&&I.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Ae.__version=pe.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Rt(O,I,se,me,pe,Ae){let Ce=r.convert(se.format,se.colorSpace),ue=r.convert(se.type),he=S(se.internalFormat,Ce,ue,se.normalized,se.colorSpace),_e=i.get(I),H=i.get(se);if(H.__renderTarget=I,!_e.__hasExternalTextures){let ae=Math.max(1,I.width>>Ae),le=Math.max(1,I.height>>Ae);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ae,he,ae,le,I.depth,0,Ce,ue,null):t.texImage2D(pe,Ae,he,ae,le,0,Ce,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Pe(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,pe,H.__webglTexture,0,Bt(I)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,pe,H.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function cn(O,I,se){if(n.bindRenderbuffer(n.RENDERBUFFER,O),I.depthBuffer){let me=I.depthTexture,pe=me&&me.isDepthTexture?me.type:null,Ae=g(I.stencilBuffer,pe),Ce=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(I),Ae,I.width,I.height):se?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(I),Ae,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,O)}else{let me=I.textures;for(let pe=0;pe<me.length;pe++){let Ae=me[pe],Ce=r.convert(Ae.format,Ae.colorSpace),ue=r.convert(Ae.type),he=S(Ae.internalFormat,Ce,ue,Ae.normalized,Ae.colorSpace);Pe(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(I),he,I.width,I.height):se?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(I),he,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,he,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(O,I,se){let me=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(I.depthTexture);pe.__renderTarget=I;let Ae=me?I.depthTexture.image[0]:I.depthTexture.image;(!pe.__webglTexture||Ae.width!==I.width||Ae.height!==I.height)&&(Ae.width=I.width,Ae.height=I.height,I.depthTexture.needsUpdate=!0),me?Me(I.depthTexture,0):fe(I.depthTexture,0);let Ce=pe.__webglTexture,ue=Bt(I),he=me?n.TEXTURE_CUBE_MAP_POSITIVE_X+se:n.TEXTURE_2D,_e=I.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===Hi)Pe(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,he,Ce,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,_e,he,Ce,0);else if(I.depthTexture.format===Ki)Pe(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,he,Ce,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,_e,he,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(O){let I=i.get(O),se=O.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==O.depthTexture){let me=O.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),me){let pe=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,me.removeEventListener("dispose",pe)};me.addEventListener("dispose",pe),I.__depthDisposeCallback=pe}I.__boundDepthTexture=me}if(O.depthTexture&&!I.__autoAllocateDepthBuffer)if(se)for(let me=0;me<6;me++)Ne(I.__webglFramebuffer[me],O,me);else O.texture.mipmaps.length>0?Ne(I.__webglFramebuffer[0],O,0):Ne(I.__webglFramebuffer,O,0);else if(se){I.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[me]),I.__webglDepthbuffer[me]===void 0)I.__webglDepthbuffer[me]=n.createRenderbuffer(),cn(I.__webglDepthbuffer[me],O,!1);else{let pe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=I.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ae)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),cn(I.__webglDepthbuffer,O,!1);else{let pe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(O,I,se){let me=i.get(O);I!==void 0&&Rt(me.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),se!==void 0&&_t(O)}function At(O){let I=O.texture,se=i.get(O),me=i.get(I);O.addEventListener("dispose",V),F(O);let pe=O.textures,Ae=O.isWebGLCubeRenderTarget===!0,Ce=pe.length>1;if(Ce||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=I.version,o.memory.textures++),Ae){se.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(I.mipmaps.length>0){se.__webglFramebuffer[ue]=[];for(let he=0;he<I.mipmaps.length;he++)se.__webglFramebuffer[ue][he]=n.createFramebuffer()}else se.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(I.mipmaps.length>0){se.__webglFramebuffer=[];for(let ue=0;ue<I.mipmaps.length;ue++)se.__webglFramebuffer[ue]=n.createFramebuffer()}else se.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ue=0,he=pe.length;ue<he;ue++){let _e=i.get(pe[ue]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&Pe(O)===!1){se.__webglMultisampledFramebuffer=n.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ue=0;ue<pe.length;ue++){let he=pe[ue];se.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,se.__webglColorRenderbuffer[ue]);let _e=r.convert(he.format,he.colorSpace),H=r.convert(he.type),ae=S(he.internalFormat,_e,H,he.normalized,he.colorSpace,O.isXRRenderTarget===!0),le=Bt(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ae,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,se.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(se.__webglDepthRenderbuffer=n.createRenderbuffer(),cn(se.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),je(n.TEXTURE_CUBE_MAP,I);for(let ue=0;ue<6;ue++)if(I.mipmaps.length>0)for(let he=0;he<I.mipmaps.length;he++)Rt(se.__webglFramebuffer[ue][he],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else Rt(se.__webglFramebuffer[ue],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);R(I)?b(n.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let ue=0,he=pe.length;ue<he;ue++){let _e=pe[ue],H=i.get(_e),ae=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ae=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,H.__webglTexture),je(ae,_e),Rt(se.__webglFramebuffer,O,_e,n.COLOR_ATTACHMENT0+ue,ae,0),R(_e)&&b(ae)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ue=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,me.__webglTexture),je(ue,I),I.mipmaps.length>0)for(let he=0;he<I.mipmaps.length;he++)Rt(se.__webglFramebuffer[he],O,I,n.COLOR_ATTACHMENT0,ue,he);else Rt(se.__webglFramebuffer,O,I,n.COLOR_ATTACHMENT0,ue,0);R(I)?b(ue):I.mipmaps.length>0&&n.texParameteri(ue,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&_t(O)}function J(O){let I=O.textures;for(let se=0,me=I.length;se<me;se++){let pe=I[se];if(R(pe)&&pe.mipmapsAutoUpdate===!0){let Ae=E(O),Ce=i.get(pe).__webglTexture;t.bindTexture(Ae,Ce),b(Ae),t.unbindTexture()}}}let Et=[];function it(O){if(O.samples>0){if(Pe(O)===!1){let I=O.textures,se=O.width,me=O.height,pe=n.COLOR_BUFFER_BIT,Ae=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(O),ue=I.length>1;if(ue)for(let _e=0;_e<I.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<I.length;_e++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);let H=i.get(I[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,se,me,0,0,se,me,pe,n.NEAREST),u===!0&&(Et.length=0,Et.push(n.COLOR_ATTACHMENT0+_e),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&Et.push(Ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<I.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);let H=i.get(I[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&u){let I=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function Bt(O){return Math.min(s.maxSamples,O.samples)}function Pe(O){let I=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Gt(O){let I=o.render.frame;f.get(O)!==I&&(f.set(O,I),O.update())}function et(O,I){let se=O.colorSpace,me=O.format,pe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||se!==go&&se!==$i&&(Mt.getTransfer(se)===Dt?(me!==ni||pe!==qn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",se)),I}function ot(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=ge,this.resetTextureUnits=j,this.getTextureUnits=$,this.setTextureUnits=K,this.setTexture2D=fe,this.setTexture2DArray=Ee,this.setTexture3D=Te,this.setTextureCube=Me,this.rebindTextures=ee,this.setupRenderTarget=At,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Pe,this.dispose=X}function pv(n,e){function t(i,s=$i){let r,o=Mt.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===Ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ph)return n.BYTE;if(i===Lh)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===vl)return n.INT;if(i===_i)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Uh)return n.ALPHA;if(i===Fh)return n.RGB;if(i===ni)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===Sl)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===ys)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Al)return n.RGBA_INTEGER;if(i===Vo||i===Ho||i===Wo||i===Xo)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===Cl||i===Rl||i===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===qo||i===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Ll)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qo)return r.COMPRESSED_RG11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zl||i===Ol||i===Bl||i===kl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ol)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===jl||i===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$l)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ec||i===tc||i===Yo||i===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Xn({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Ei{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",u=1,l=null,f=null,d=null,m=null,p=null,c=null,M=typeof XRWebGLBinding<"u",x=new iu,_={},A=t.getContextAttributes(),R=null,b=null,E=[],S=[],g=new pt,w=null,F=null,D=new Ln;D.viewport=new Jt;let L=new Ln;L.viewport=new Jt;let V=[D,L],z=new gl,B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=E[Z];return fe===void 0&&(fe=new Er,E[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=E[Z];return fe===void 0&&(fe=new Er,E[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=E[Z];return fe===void 0&&(fe=new Er,E[Z]=fe),fe.getHandSpace()};function G(Z){let fe=S.indexOf(Z.inputSource);if(fe===-1)return;let Ee=E[fe];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,l||o),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",W);for(let Z=0;Z<E.length;Z++){let fe=S[Z];fe!==null&&(S[Z]=null,E[Z].disconnect(fe))}B=null,X=null,x.reset();for(let Z in _)delete _[Z];if(e.setRenderTarget(R),p=null,m=null,d=null,s=null,b=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(g.width,g.height,!1),F!==null){let Z=F.camera;Z.fov=F.fov,Z.zoom=F.zoom,Z.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return c},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",k),s.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Te=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=A.stencil?Ki:Hi,Te=A.stencil?Bs:_i);let Xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),m=d.createProjectionLayer(Xe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new ei(m.textureWidth,m.textureHeight,{format:ni,type:qn,depthTexture:new qi(m.textureWidth,m.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ei(p.framebufferWidth,p.framebufferHeight,{format:ni,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Z){for(let fe=0;fe<Z.removed.length;fe++){let Ee=Z.removed[fe],Te=S.indexOf(Ee);Te>=0&&(S[Te]=null,E[Te].disconnect(Ee))}for(let fe=0;fe<Z.added.length;fe++){let Ee=Z.added[fe],Te=S.indexOf(Ee);if(Te===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=S.length){S.push(Ee),Te=Xe;break}else if(S[Xe]===null){S[Xe]=Ee,Te=Xe;break}if(Te===-1)break}let Me=E[Te];Me&&Me.connect(Ee)}}function U(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let fe=Z.near,Ee=Z.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),z.near=L.near=D.near=fe,z.far=L.far=D.far=Ee,(B!==z.near||X!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,X=z.far),z.layers.mask=Z.layers.mask|6,D.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Te=Z.parent,Me=z.cameras;U(z,Te);for(let Xe=0;Xe<Me.length;Xe++)U(Me[Xe],Te);z.projectionMatrix.copy(D.projectionMatrix),z.projectionMatrixInverse.copy(D.projectionMatrixInverse),F===null&&Z.isPerspectiveCamera&&(F={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,z,Te)};function j(Z,fe,Ee){Ee===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Tr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(m===null&&p===null))return u},this.setFoveation=function(Z){u=Z,m!==null&&(m.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(Z){return _[Z]};let $=null;function K(Z,fe){if(f=fe.getViewerPose(l||o),c=fe,f!==null){let Ee=f.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Te=!1;Ee.length!==z.cameras.length&&(z.cameras.length=0,Te=!0);for(let Ke=0;Ke<Ee.length;Ke++){let je=Ee[Ke],dt=null;if(p!==null)dt=p.getViewport(je);else{let zt=d.getViewSubImage(m,je);dt=zt.viewport,Ke===0&&(e.setRenderTargetTextures(b,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(b))}let tt=V[Ke];tt===void 0&&(tt=new Ln,tt.layers.enable(Ke),tt.viewport=new Jt,V[Ke]=tt),tt.matrix.fromArray(je.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(je.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(dt.x,dt.y,dt.width,dt.height),Ke===0&&(z.matrix.copy(tt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Te===!0&&z.cameras.push(tt)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let Ke=d.getDepthInformation(Ee[0]);Ke&&Ke.isValid&&Ke.texture&&x.init(Ke,s.renderState)}if(Me&&Me.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let Ke=0;Ke<Ee.length;Ke++){let je=Ee[Ke].camera;if(je){let dt=_[je];dt||(dt=new Ro,_[je]=dt);let tt=d.getCameraImage(je);dt.sourceTexture=tt}}}}for(let Ee=0;Ee<E.length;Ee++){let Te=S[Ee],Me=E[Ee];Te!==null&&Me!==void 0&&Me.update(Te,fe,l||o)}$&&$(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),c=null}let ge=new Gf;ge.setAnimationLoop(K),this.setAnimationLoop=function(Z){$=Z},this.dispose=function(){}}},xv=new St,$f=new lt;$f.set(-1,0,0,0,1,0,0,0,1);function _v(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,Xh(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,A,R,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),d(x,_)):_.isMeshPhongMaterial?(r(x,_),f(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),m(x,_),_.isMeshPhysicalMaterial&&p(x,_,b)):_.isMeshMatcapMaterial?(r(x,_),c(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),M(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?u(x,_,A,R):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let A=e.get(_),R=A.envMap,b=A.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply($f),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,A,R){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*A,x.scale.value=R*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function d(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function p(x,_,A){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function c(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){let A=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yv(n,e,t,i){let s={},r={};function o(A,R){let b=R.program;i.uniformBlockBinding(A,b,s[A.id])}function a(A,R){let b=s[A.id];b===void 0&&(c(A),b=u(A),s[A.id]=b,A.addEventListener("dispose",x));let E=R.program;i.updateUBOMapping(A,E);let S=e.render.frame;r[A.id]!==S&&(l(A),r[A.id]=S)}function u(A){let R=n.createBuffer(),b=A.__size,E=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,b,E),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function l(A){let R=s[A.id],b=A.uniforms,E=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let S=0,g=b.length;S<g;S++){let w=b[S];if(Array.isArray(w))for(let F=0,D=w.length;F<D;F++)f(w[F],S,F,E);else f(w,S,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,R,b,E){if(m(A,R,b,E)===!0){let S=A.__offset,g=A.value;if(Array.isArray(g)){let w=0;for(let F=0;F<g.length;F++){let D=g[F],L=M(D,!0);d(D,A.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,A.__data)}}function d(A,R,b){typeof A=="number"||typeof A=="boolean"?R[b]=A:A.isMatrix3?(R[b]=A.elements[0],R[b+1]=A.elements[1],R[b+2]=A.elements[2],R[b+3]=0,R[b+4]=A.elements[3],R[b+5]=A.elements[4],R[b+6]=A.elements[5],R[b+7]=0,R[b+8]=A.elements[6],R[b+9]=A.elements[7],R[b+10]=A.elements[8],R[b+11]=0):ArrayBuffer.isView(A)?R.set(A.subarray(0,R.length-b),b):A.toArray(R,b)}function m(A,R,b,E){let S=A.value,g=R+"_"+b;if(Array.isArray(S)){E[g]===void 0&&(E[g]=[]);let w=E[g],F=!1;for(let D=0;D<S.length;D++)p(S[D],w,D)===!0&&(F=!0);return F}return p(S,E,g)}function p(A,R,b){if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:ArrayBuffer.isView(A)?R[b]=A.slice():R[b]=A.clone(),!0;{let E=R[b];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return R[b]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(E.equals(A)===!1)return E.copy(A),!0}}return!1}function c(A){let R=A.uniforms,b=0,E=16;for(let g=0,w=R.length;g<w;g++){let F=Array.isArray(R[g])?R[g]:[R[g]];for(let D=0,L=F.length;D<L;D++){let V=F[D],z=Array.isArray(V.value)?V.value:[V.value],B=Array.isArray(R[g])||Array.isArray(V.value),X=b;for(let k=0,W=z.length;k<W;k++){let U=z[k],j=M(U,B),$=b%E,K=$%j.boundary,ge=$+K;b+=K,ge!==0&&E-ge<j.storage&&(b+=E-ge),k===0&&(X=b),b+=j.storage}let G=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new G((b-X)/Float32Array.BYTES_PER_ELEMENT),V.__offset=X}}let S=b%E;return S>0&&(b+=E-S),A.__size=b,A.__cache={},this}function M(A,R){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=16,b.storage=48):A.isMatrix4?(b.boundary=16,b.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(b.boundary=16,b.storage=A.byteLength):at("WebGLRenderer: Unsupported uniform value type.",A),R===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function x(A){let R=A.target;R.removeEventListener("dispose",x),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function _(){for(let A in s)n.deleteBuffer(s[A]);s={},r={}}return{bind:o,update:a,dispose:_}}var vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function Mv(){return Ii===null&&(Ii=new Ls(vv,16,16,ys,yi),Ii.name="DFG_LUT",Ii.minFilter=_n,Ii.magFilter=_n,Ii.wrapS=Ai,Ii.wrapT=Ai,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var lc=class{constructor(e={}){let{canvas:t=hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1,outputBufferType:p=qn}=e;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let M=p,x=new Set([Al,Tl,wl]),_=new Set([qn,_i,Pr,Bs,Ml,bl]),A=new Uint32Array(4),R=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,S=null,g=[],w=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,L=!1,V=null,z=null,B=null,X=null;this._outputColorSpace=un;let G=0,k=0,W=null,U=-1,j=null,$=new Jt,K=new Jt,ge=null,Z=new $e(0),fe=0,Ee=t.width,Te=t.height,Me=1,Xe=null,Ye=null,Ke=new Jt(0,0,Ee,Te),je=new Jt(0,0,Ee,Te),dt=!1,tt=new ds,zt=new el,Ot=!1,Nt=!1,Rt=new St,cn=new Y,Ne=new Jt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function At(){return W===null?Me:1}let J=i;function Et(P,q){return t.getContext(P,q)}let it,Bt,Pe,Gt,et,ot,O,I,se,me,pe,Ae,Ce,ue,he,_e,H,ae,le,ve,ye,be,We;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),J===null){let q="webgl2";if(J=Et(q,P),J===null)throw Et(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(P){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ct("WebGLRenderer: "+P.message),P}function He(){it=new L_(J),it.init(),ye=new pv(J,it),Bt=new M_(J,it,e,ye),Pe=new dv(J,it),Bt.reversedDepthBuffer&&m&&Pe.buffers.depth.setReversed(!0),z=J.createFramebuffer(),B=J.createFramebuffer(),X=J.createFramebuffer(),Gt=new U_(J),et=new jy,ot=new fv(J,it,Pe,et,Bt,ye,Gt),O=new P_(D),I=new z0(J),be=new y_(J,I),se=new D_(J,I,Gt,be),me=new z_(J,se,I,be,Gt),ae=new F_(J,Bt,ot),he=new b_(et),pe=new $y(D,O,it,Bt,be,he),Ae=new _v(D,et),Ce=new ev,ue=new ov(it),H=new __(D,O,Pe,me,c,u),_e=new uv(D,me,Bt),We=new yv(J,Gt,Bt,Pe),le=new v_(J,it,Gt),ve=new N_(J,it,Gt),Gt.programs=pe.programs,D.capabilities=Bt,D.extensions=it,D.properties=et,D.renderLists=Ce,D.shadowMap=_e,D.state=Pe,D.info=Gt}M!==qn&&(F=new B_(M,t.width,t.height,a,s,r));let xe=new su(D,J);this.xr=xe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let P=it.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=it.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(P){P!==void 0&&(Me=P,this.setSize(Ee,Te,!1))},this.getSize=function(P){return P.set(Ee,Te)},this.setSize=function(P,q,oe=!0){if(xe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=P,Te=q,t.width=Math.floor(P*Me),t.height=Math.floor(q*Me),oe===!0&&(t.style.width=P+"px",t.style.height=q+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(Ee*Me,Te*Me).floor()},this.setDrawingBufferSize=function(P,q,oe){Ee=P,Te=q,Me=oe,t.width=Math.floor(P*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(M===qn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy($)},this.getViewport=function(P){return P.copy(Ke)},this.setViewport=function(P,q,oe,ie){P.isVector4?Ke.set(P.x,P.y,P.z,P.w):Ke.set(P,q,oe,ie),Pe.viewport($.copy(Ke).multiplyScalar(At()).round())},this.getScissor=function(P){return P.copy(je)},this.setScissor=function(P,q,oe,ie){P.isVector4?je.set(P.x,P.y,P.z,P.w):je.set(P,q,oe,ie),Pe.scissor(K.copy(je).multiplyScalar(At()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(P){Pe.setScissorTest(dt=P)},this.setOpaqueSort=function(P){Xe=P},this.setTransparentSort=function(P){Ye=P},this.getClearColor=function(P){return P.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,oe=!0){let ie=0;if(P){let te=!1;if(W!==null){let Ie=W.texture.format;te=x.has(Ie)}if(te){let Ie=W.texture.type,De=_.has(Ie),we=H.getClearColor(),Oe=H.getClearAlpha(),Ge=we.r,nt=we.g,ut=we.b;De?(A[0]=Ge,A[1]=nt,A[2]=ut,A[3]=Oe,J.clearBufferuiv(J.COLOR,0,A)):(R[0]=Ge,R[1]=nt,R[2]=ut,R[3]=Oe,J.clearBufferiv(J.COLOR,0,R))}else ie|=J.COLOR_BUFFER_BIT}q&&(ie|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&J.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),V=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),H.dispose(),Ce.dispose(),ue.dispose(),ot.dispose(),et.dispose(),O.dispose(),me.dispose(),se.dispose(),be.dispose(),We.dispose(),pe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",nn),xe.removeEventListener("sessionend",$s),vn.stop()};function Ze(P){P.preventDefault(),Gh("WebGLRenderer: Context Lost."),L=!0}function ht(){Gh("WebGLRenderer: Context Restored."),L=!1;let P=Gt.autoReset,q=_e.enabled,oe=_e.autoUpdate,ie=_e.needsUpdate,te=_e.type;He(),Gt.autoReset=P,_e.enabled=q,_e.autoUpdate=oe,_e.needsUpdate=ie,_e.type=te}function Ue(P){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qe(P){let q=P.target;q.removeEventListener("dispose",Qe),Ht(q)}function Ht(P){yn(P),et.remove(P)}function yn(P){let q=et.get(P).programs;q!==void 0&&(q.forEach(function(oe){pe.releaseProgram(oe)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,oe,ie,te,Ie){q===null&&(q=_t);let De=te.isMesh&&te.matrixWorld.determinantAffine()<0,we=er(P,q,oe,ie,te);Pe.setMaterial(ie,De);let Oe=oe.index,Ge=1;if(ie.wireframe===!0){if(Oe=se.getWireframeAttribute(oe),Oe===void 0)return;Ge=2}let nt=oe.drawRange,ut=oe.attributes.position,qe=nt.start*Ge,mt=(nt.start+nt.count)*Ge;Ie!==null&&(qe=Math.max(qe,Ie.start*Ge),mt=Math.min(mt,(Ie.start+Ie.count)*Ge)),Oe!==null?(qe=Math.max(qe,0),mt=Math.min(mt,Oe.count)):ut!=null&&(qe=Math.max(qe,0),mt=Math.min(mt,ut.count));let kt=mt-qe;if(kt<0||kt===1/0)return;be.setup(te,ie,we,oe,Oe);let Ut,Ft=le;if(Oe!==null&&(Ut=I.get(Oe),Ft=ve,Ft.setIndex(Ut)),te.isMesh)ie.wireframe===!0?(Pe.setLineWidth(ie.wireframeLinewidth*At()),Ft.setMode(J.LINES)):Ft.setMode(J.TRIANGLES);else if(te.isLine){let qt=ie.linewidth;qt===void 0&&(qt=1),Pe.setLineWidth(qt*At()),te.isLineSegments?Ft.setMode(J.LINES):te.isLineLoop?Ft.setMode(J.LINE_LOOP):Ft.setMode(J.LINE_STRIP)}else te.isPoints?Ft.setMode(J.POINTS):te.isSprite&&Ft.setMode(J.TRIANGLES);if(te.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let qt=te._multiDrawStarts,Le=te._multiDrawCounts,sn=te._multiDrawCount,Ct=Oe?I.get(Oe).bytesPerElement:1,Hn=et.get(ie).currentProgram.getUniforms();for(let hn=0;hn<sn;hn++)Hn.setValue(J,"_gl_DrawID",hn),Ft.render(qt[hn]/Ct,Le[hn])}else if(te.isInstancedMesh)Ft.renderInstances(qe,kt,te.count);else if(oe.isInstancedBufferGeometry){let qt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Le=Math.min(oe.instanceCount,qt);Ft.renderInstances(qe,kt,Le)}else Ft.render(qe,kt)};function Di(P,q,oe,ie){V!==null&&P.isNodeMaterial&&V.setObject(ie,P),Ot===!0&&he.setState(P,oe,!1),P.transparent===!0&&P.side===En&&P.forceSinglePass===!1?(P.side=bn,P.needsUpdate=!0,Zn(P,q,ie),P.side=xs,P.needsUpdate=!0,Zn(P,q,ie),P.side=En):Zn(P,q,ie)}this.compile=function(P,q,oe=null){oe===null&&(oe=P),V!==null&&V.renderStart(P,q,oe),S=ue.get(oe),S.init(q),w.push(S),oe.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),P!==oe&&P.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),S.setupLights(),V!==null&&V.updateLights(S.state.lightsArray),Nt=this.localClippingEnabled,Ot=he.init(this.clippingPlanes,Nt),Ot===!0&&he.setGlobalState(this.clippingPlanes,q),V!==null&&_e.render(S.state.shadowsArray,oe,q);let ie=new Set;return P.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let De=0;De<Ie.length;De++){let we=Ie[De];Di(we,oe,q,te),ie.add(we)}else Di(Ie,oe,q,te),ie.add(Ie)}),S=w.pop(),V!==null&&V.renderEnd(),ie},this.compileAsync=function(P,q,oe=null){let ie=this.compile(P,q,oe);return new Promise(te=>{function Ie(){if(ie.forEach(function(De){let Oe=et.get(De).currentProgram;(Oe===void 0||Oe.isReady())&&ie.delete(De)}),ie.size===0){te(P);return}setTimeout(Ie,10)}it.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Gn=null;function Vn(P){Gn&&Gn(P)}function nn(){vn.stop()}function $s(){vn.start()}let vn=new Gf;vn.setAnimationLoop(Vn),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(P){Gn=P,xe.setAnimationLoop(P),P===null?vn.stop():vn.start()},xe.addEventListener("sessionstart",nn),xe.addEventListener("sessionend",$s),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;V!==null&&V.renderStart(P,q);let oe=xe.enabled===!0&&xe.isPresenting===!0,ie=F!==null&&(W===null||oe)&&F.begin(D,W);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(q),q=xe.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,q,W),S=ue.get(P,w.length),S.init(q),S.state.textureUnits=ot.getTextureUnits(),w.push(S),Rt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?zt.setFromArrayCamera(q):tt.setFromProjectionMatrix(Rt,ai,q.reversedDepth),Nt=this.localClippingEnabled,Ot=he.init(this.clippingPlanes,Nt),E=Ce.get(P,g.length),E.init(),g.push(E),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){let De=D.xr.getDepthSensingMesh();De!==null&&Ni(De,q,-1/0,D.sortObjects)}Ni(P,q,0,D.sortObjects),E.finish(),V!==null&&V.updateLights(S.state.lightsArray),D.sortObjects===!0&&E.sort(Xe,Ye),ee=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ee&&H.addToRenderList(E,P),this.info.autoReset===!0&&this.info.reset(),Ot===!0&&he.beginShadows();let te=S.state.shadowsArray;if(_e.render(te,P,q),Ot===!0&&he.endShadows(),(ie&&F.hasRenderPass())===!1){let De=E.opaque,we=E.transmissive;if(S.setupLights(),q.isArrayCamera){let Oe=q.cameras;if(we.length>0)for(let Ge=0,nt=Oe.length;Ge<nt;Ge++){let ut=Oe[Ge];jt(De,we,P,ut)}ee&&H.render(P);for(let Ge=0,nt=Oe.length;Ge<nt;Ge++){let ut=Oe[Ge];si(E,P,ut,ut.viewport)}}else we.length>0&&jt(De,we,P,q),ee&&H.render(P),si(E,P,q)}W!==null&&k===0&&(ot.updateMultisampleRenderTarget(W),ot.updateRenderTargetMipmap(W)),ie&&F.end(D),P.isScene===!0&&P.onAfterRender(D,P,q),be.resetDefaultState(),U=-1,j=null,w.pop(),w.length>0?(S=w[w.length-1],ot.setTextureUnits(S.state.textureUnits),Ot===!0&&he.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,V!==null&&V.renderEnd()};function Ni(P,q,oe,ie){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){let De=q.isArrayCamera?zt:tt;if(!P.frustumCulled||P.intersectsFrustum(De)){ie&&Ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Rt);let we=me.update(P),Oe=P.material;Oe.visible&&E.push(P,we,Oe,oe,Ne.z,null,q)}}else if(P.isMesh||P.isLine||P.isPoints){let De=q.isArrayCamera?zt:tt;if(!P.frustumCulled||P.intersectsFrustum(De)){let we=me.update(P),Oe=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ne.copy(P.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ne.copy(we.boundingSphere.center)),Ne.applyMatrix4(P.matrixWorld).applyMatrix4(Rt)),Array.isArray(Oe)){let Ge=we.groups;for(let nt=0,ut=Ge.length;nt<ut;nt++){let qe=Ge[nt],mt=Oe[qe.materialIndex];mt&&mt.visible&&E.push(P,we,mt,oe,Ne.z,qe,q)}}else Oe.visible&&E.push(P,we,Oe,oe,Ne.z,null,q)}}}let Ie=P.children;for(let De=0,we=Ie.length;De<we;De++)Ni(Ie[De],q,oe,ie)}function si(P,q,oe,ie){let{opaque:te,transmissive:Ie,transparent:De}=P;S.setupLightsView(oe),Ot===!0&&he.setGlobalState(D.clippingPlanes,oe),ie&&Pe.viewport($.copy(ie)),te.length>0&&Qt(te,q,oe),Ie.length>0&&Qt(Ie,q,oe),De.length>0&&Qt(De,q,oe),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function jt(P,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){let qe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new ei(1,1,{generateMipmaps:!0,type:qe?yi:qn,minFilter:Ji,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}let Ie=S.state.transmissionRenderTarget[ie.id],De=ie.viewport||$;Ie.setSize(De.z*D.transmissionResolutionScale,De.w*D.transmissionResolutionScale);let we=D.getRenderTarget(),Oe=D.getActiveCubeFace(),Ge=D.getActiveMipmapLevel();D.setRenderTarget(Ie),D.getClearColor(Z),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),ee&&H.render(oe);let nt=D.toneMapping;D.toneMapping=Ri;let ut=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),Ot===!0&&he.setGlobalState(D.clippingPlanes,ie),Qt(P,oe,ie),ot.updateMultisampleRenderTarget(Ie),ot.updateRenderTargetMipmap(Ie),it.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let mt=0,kt=q.length;mt<kt;mt++){let Ut=q[mt],{object:Ft,geometry:qt,material:Le,group:sn}=Ut;if(Le.side===En&&Ft.layers.test(ie.layers)){let Ct=Le.side;Le.side=bn,Le.needsUpdate=!0,ha(Ft,oe,ie,qt,Le,sn),Le.side=Ct,Le.needsUpdate=!0,qe=!0}}qe===!0&&(ot.updateMultisampleRenderTarget(Ie),ot.updateRenderTargetMipmap(Ie))}D.setRenderTarget(we,Oe,Ge),D.setClearColor(Z,fe),ut!==void 0&&(ie.viewport=ut),D.toneMapping=nt}function Qt(P,q,oe){let ie=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Ie=P.length;te<Ie;te++){let De=P[te],{object:we,geometry:Oe,group:Ge}=De,nt=De.material;nt.allowOverride===!0&&ie!==null&&(nt=ie),we.layers.test(oe.layers)&&ha(we,q,oe,Oe,nt,Ge)}}function ha(P,q,oe,ie,te,Ie){V!==null&&te.isNodeMaterial&&V.setObject(P,te),P.onBeforeRender(D,q,oe,ie,te,Ie),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(D,q,oe,ie,P,Ie),te.transparent===!0&&te.side===En&&te.forceSinglePass===!1?(te.side=bn,te.needsUpdate=!0,D.renderBufferDirect(oe,q,ie,te,P,Ie),te.side=xs,te.needsUpdate=!0,D.renderBufferDirect(oe,q,ie,te,P,Ie),te.side=En):D.renderBufferDirect(oe,q,ie,te,P,Ie),P.onAfterRender(D,q,oe,ie,te,Ie)}function In(P){let q=0;for(let oe of P)oe.texture!==null&&q++;return q}function Zn(P,q,oe){q.isScene!==!0&&(q=_t);let ie=et.get(P),te=S.state.lights,Ie=S.state.shadowsArray,De=te.state.version,we=pe.getParameters(P,te.state,Ie,q,oe,S.state.lightProbeGridArray),Oe=pe.getProgramCacheKey(we),Ge=ie.programs;ie.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;let nt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ie.envMap=O.get(P.envMap||ie.environment,nt),ie.envMapRotation=ie.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Ge===void 0&&(P.addEventListener("dispose",Qe),Ge=new Map,ie.programs=Ge,ie.programVariants=new Map);let ut=Ge.get(Oe);if(ut!==void 0){if(ie.currentProgram===ut&&ie.lightsStateVersion===De)return Qs(P,we),ut}else we.uniforms=pe.getUniforms(P),V!==null&&P.isNodeMaterial&&V.build(P,oe,we),P.onBeforeCompile(we,D),ut=pe.acquireProgram(we,Oe),Ge.set(Oe,ut),ie.uniforms=we.uniforms;let qe=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=he.uniform),Qs(P,we),ie.needsLights=eo(P),ie.lightsStateVersion=De,ie.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.sunLights.value=te.state.sun,qe.sunLightShadows.value=te.state.sunShadow,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.sunShadowMatrix.value=te.state.sunShadowMatrix,qe.sunShadowCascade.value=te.state.sunShadowCascade,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.numLightProbeGrids=In(S.state.lightProbeGridArray),ie.currentProgram=ut,ie.uniformsList=null,ut}function ts(P,q,oe,ie,te){let Ie=et.get(P),De=Ie.currentProgram.id+","+ie+","+te,we=Ie.programVariants.get(De);return we===void 0?(we=Zn(P,q,oe),Ie.programVariants.set(De,we)):(Ie.currentProgram=we,Ie.uniformsList=null,Ie.outputColorSpace=ie,Ie.toneMapping=te),we}function js(P){if(P.uniformsList===null){let q=P.currentProgram.getUniforms();P.uniformsList=Nr.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Qs(P,q){let oe=et.get(P);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function er(P,q,oe,ie,te){q.isScene!==!0&&(q=_t),ot.resetTextureUnits();let Ie=q.fog,De=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,we=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Mt.workingColorSpace,Oe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ge=O.get(ie.envMap||De,Oe),nt=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!oe.morphAttributes.position,mt=!!oe.morphAttributes.normal,kt=!!oe.morphAttributes.color,Ut=Ri;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ut=D.toneMapping);let Ft=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,qt=Ft!==void 0?Ft.length:0,Le=et.get(ie),sn=S.state.lights;if(Ot===!0&&(Nt===!0||P!==j)){let Pt=P===j&&ie.id===U;he.setState(ie,P,Pt)}let Ct=!1,Hn=!1;ie.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==sn.state.version||te.isBatchedMesh&&Le.batching===!1||!te.isBatchedMesh&&Le.batching===!0||te.isBatchedMesh&&Le.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Le.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Le.instancing===!1||!te.isInstancedMesh&&Le.instancing===!0||te.isSkinnedMesh&&Le.skinning===!1||!te.isSkinnedMesh&&Le.skinning===!0||te.isInstancedMesh&&Le.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Le.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Le.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Le.instancingMorph===!1&&te.morphTexture!==null||Le.envMap!==Ge||ie.fog===!0&&Le.fog!==Ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==nt||Le.vertexTangents!==ut||Le.morphTargets!==qe||Le.morphNormals!==mt||Le.morphColors!==kt||Le.morphTargetsCount!==qt||Le.numLightProbeGrids!==In(S.state.lightProbeGridArray)?Ct=!0:(Le.outputColorSpace!==we||Le.toneMapping!==Ut)&&(Hn=!0):(Ct=!0,Le.__version=ie.version);let hn=Le.currentProgram;(Ct===!0||Hn===!0)&&(hn=Hn===!0?ts(ie,q,te,we,Ut):Zn(ie,q,te),V&&ie.isNodeMaterial&&V.onUpdateProgram(ie,hn,Le));let st=!1,ri=!1,Pn=!1,rt=hn.getUniforms(),Yt=Le.uniforms;if(Pe.useProgram(hn.program)&&(st=!0,ri=!0,Pn=!0),ie.id!==U&&(U=ie.id,ri=!0),st||j!==P){Pe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),rt.setValue(J,"projectionMatrix",P.projectionMatrix),rt.setValue(J,"viewMatrix",P.matrixWorldInverse);let rn=rt.map.cameraPosition;rn!==void 0&&rn.setValue(J,cn.setFromMatrixPosition(P.matrixWorld)),Bt.logarithmicDepthBuffer&&rt.setValue(J,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&rt.setValue(J,"isOrthographic",P.isOrthographicCamera===!0),j!==P&&(j=P,ri=!0,Pn=!0)}if(Le.needsLights&&(sn.state.sunShadowMap.length>0&&rt.setValue(J,"sunShadowMap",sn.state.sunShadowMap,ot),sn.state.directionalShadowMap.length>0&&rt.setValue(J,"directionalShadowMap",sn.state.directionalShadowMap,ot),sn.state.spotShadowMap.length>0&&rt.setValue(J,"spotShadowMap",sn.state.spotShadowMap,ot),sn.state.pointShadowMap.length>0&&rt.setValue(J,"pointShadowMap",sn.state.pointShadowMap,ot)),te.isSkinnedMesh){rt.setOptional(J,te,"bindMatrix"),rt.setOptional(J,te,"bindMatrixInverse");let Pt=te.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),rt.setValue(J,"boneTexture",Pt.boneTexture,ot))}te.isBatchedMesh&&(rt.setOptional(J,te,"batchingTexture"),rt.setValue(J,"batchingTexture",te._matricesTexture,ot),rt.setOptional(J,te,"batchingIdTexture"),rt.setValue(J,"batchingIdTexture",te._indirectTexture,ot),rt.setOptional(J,te,"batchingColorTexture"),te._colorsTexture!==null&&rt.setValue(J,"batchingColorTexture",te._colorsTexture,ot));let Jn=oe.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&ae.update(te,oe,hn),(ri||Le.receiveShadow!==te.receiveShadow)&&(Le.receiveShadow=te.receiveShadow,rt.setValue(J,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Yt.envMapIntensity.value=q.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Mv()),ri){if(rt.setValue(J,"toneMappingExposure",D.toneMappingExposure),Le.needsLights&&tr(Yt,Pn),Ie&&ie.fog===!0&&Ae.refreshFogUniforms(Yt,Ie),Ae.refreshMaterialUniforms(Yt,ie,Me,Te,S.state.transmissionRenderTarget[P.id]),Le.needsLights&&Le.numLightProbeGrids>0){let Pt=b,rn=0;for(let Wt of S.state.lightProbeGridArray)Wt.texture!==null&&(Pt.textures[rn]=Wt.texture,Pt.min[rn]=Wt.boundingBox.min,Pt.max[rn]=Wt.boundingBox.max,Pt.resolution[rn]=Wt.resolution,rn++);for(let Wt in Pt)Pt[Wt].length=rn;Yt.probesSH.value=Pt.textures,Yt.probesMin.value=Pt.min,Yt.probesMax.value=Pt.max,Yt.probesResolution.value=Pt.resolution}Nr.upload(J,js(Le),Yt,ot)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Nr.upload(J,js(Le),Yt,ot),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&rt.setValue(J,"center",te.center),rt.setValue(J,"modelViewMatrix",te.modelViewMatrix),rt.setValue(J,"normalMatrix",te.normalMatrix),rt.setValue(J,"modelMatrix",te.matrixWorld),ie.uniformsGroups!==void 0){let Pt=ie.uniformsGroups;for(let rn=0,Wt=Pt.length;rn<Wt;rn++){let nr=Pt[rn];We.update(nr,hn),We.bind(nr,hn)}}return hn}function tr(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.sunLights.needsUpdate=q,P.sunLightShadows.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function eo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(P,q,oe){let ie=et.get(P);ie.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),et.get(P.texture).__webglTexture=q,et.get(P.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){let oe=et.get(P);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,oe=0){W=P,G=q,k=oe;let ie=null,te=!1,Ie=!1;if(P){let we=et.get(P);if(we.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(J.FRAMEBUFFER,we.__webglFramebuffer),$.copy(P.viewport),K.copy(P.scissor),ge=P.scissorTest,Pe.viewport($),Pe.scissor(K),Pe.setScissorTest(ge),U=-1;return}else if(we.__webglFramebuffer===void 0)ot.setupRenderTarget(P);else if(we.__hasExternalTextures)ot.rebindTextures(P,et.get(P.texture).__webglTexture,et.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let nt=P.depthTexture;if(we.__boundDepthTexture!==nt){if(nt!==null&&et.has(nt)&&(P.width!==nt.image.width||P.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(P)}}let Oe=P.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ie=!0);let Ge=et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ge[q])?ie=Ge[q][oe]:ie=Ge[q],te=!0):P.samples>0&&ot.useMultisampledRTT(P)===!1?ie=et.get(P).__webglMultisampledFramebuffer:Array.isArray(Ge)?ie=Ge[oe]:ie=Ge,$.copy(P.viewport),K.copy(P.scissor),ge=P.scissorTest}else $.copy(Ke).multiplyScalar(Me).floor(),K.copy(je).multiplyScalar(Me).floor(),ge=dt;if(oe!==0&&(ie=z),Pe.bindFramebuffer(J.FRAMEBUFFER,ie)&&Pe.drawBuffers(P,ie),Pe.viewport($),Pe.scissor(K),Pe.setScissorTest(ge),te){let we=et.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+q,we.__webglTexture,oe)}else if(Ie){let we=q;for(let Oe=0;Oe<P.textures.length;Oe++){let Ge=et.get(P.textures[Oe]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Oe,Ge.__webglTexture,oe,we)}}else if(P!==null&&oe!==0){let we=et.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,we.__webglTexture,oe)}U=-1};function to(P){let q=et.get(P);return(q.__readFormat!==P.format||q.__readType!==P.type)&&(q.__readFormat=P.format,q.__readType=P.type,q.__formatReadable=Bt.textureFormatReadable(P.format),q.__typeReadable=Bt.textureTypeReadable(P.type)),q}this.readRenderTargetPixels=function(P,q,oe,ie,te,Ie,De,we=0){if(!(P&&P.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Pe.bindFramebuffer(J.FRAMEBUFFER,Oe);try{let Ge=P.textures[we],nt=Ge.format,ut=Ge.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+we);let qe=to(Ge);if(qe.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ie&&oe>=0&&oe<=P.height-te&&J.readPixels(q,oe,ie,te,ye.convert(nt),ye.convert(ut),Ie)}finally{let Ge=W!==null?et.get(W).__webglFramebuffer:null;Pe.bindFramebuffer(J.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,q,oe,ie,te,Ie,De,we=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(q>=0&&q<=P.width-ie&&oe>=0&&oe<=P.height-te){Pe.bindFramebuffer(J.FRAMEBUFFER,Oe);let Ge=P.textures[we],nt=Ge.format,ut=Ge.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+we);let qe=to(Ge);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,mt),J.bufferData(J.PIXEL_PACK_BUFFER,Ie.byteLength,J.STREAM_READ),J.readPixels(q,oe,ie,te,ye.convert(nt),ye.convert(ut),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let kt=W!==null?et.get(W).__webglFramebuffer:null;Pe.bindFramebuffer(J.FRAMEBUFFER,kt);let Ut=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await df(J,Ut,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,mt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ie),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(mt),J.deleteSync(Ut),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,oe=0){let ie=Math.pow(2,-oe),te=Math.floor(P.image.width*ie),Ie=Math.floor(P.image.height*ie),De=q!==null?q.x:0,we=q!==null?q.y:0;ot.setTexture2D(P,0),J.copyTexSubImage2D(J.TEXTURE_2D,oe,0,0,De,we,te,Ie),Pe.unbindTexture()},this.copyTextureToTexture=function(P,q,oe=null,ie=null,te=0,Ie=0){let De,we,Oe,Ge,nt,ut,qe,mt,kt,Ut=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(oe!==null)De=oe.max.x-oe.min.x,we=oe.max.y-oe.min.y,Oe=oe.isBox3?oe.max.z-oe.min.z:1,Ge=oe.min.x,nt=oe.min.y,ut=oe.isBox3?oe.min.z:0;else{let rt=Math.pow(2,-te);De=Math.floor(Ut.width*rt),we=Math.floor(Ut.height*rt),P.isDataArrayTexture?Oe=Ut.depth:P.isData3DTexture?Oe=Math.floor(Ut.depth*rt):Oe=1,Ge=0,nt=0,ut=0}ie!==null?(qe=ie.x,mt=ie.y,kt=ie.z):(qe=0,mt=0,kt=0);let Ft=ye.convert(q.format),qt=ye.convert(q.type),Le;q.isData3DTexture?(ot.setTexture3D(q,0),Le=J.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),Le=J.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),Le=J.TEXTURE_2D),Pe.activeTexture(J.TEXTURE0),Pe.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),Pe.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Pe.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment);let sn=Pe.getParameter(J.UNPACK_ROW_LENGTH),Ct=Pe.getParameter(J.UNPACK_IMAGE_HEIGHT),Hn=Pe.getParameter(J.UNPACK_SKIP_PIXELS),hn=Pe.getParameter(J.UNPACK_SKIP_ROWS),st=Pe.getParameter(J.UNPACK_SKIP_IMAGES);Pe.pixelStorei(J.UNPACK_ROW_LENGTH,Ut.width),Pe.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ut.height),Pe.pixelStorei(J.UNPACK_SKIP_PIXELS,Ge),Pe.pixelStorei(J.UNPACK_SKIP_ROWS,nt),Pe.pixelStorei(J.UNPACK_SKIP_IMAGES,ut);let ri=P.isDataArrayTexture||P.isData3DTexture,Pn=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){let rt=et.get(P),Yt=et.get(q),Jn=et.get(rt.__renderTarget),Pt=et.get(Yt.__renderTarget);Pe.bindFramebuffer(J.READ_FRAMEBUFFER,Jn.__webglFramebuffer),Pe.bindFramebuffer(J.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let rn=0;rn<Oe;rn++)ri&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,et.get(P).__webglTexture,te,ut+rn),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,et.get(q).__webglTexture,Ie,kt+rn)),J.blitFramebuffer(Ge,nt,Ge+De,nt+we,qe,mt,qe+De,mt+we,J.DEPTH_BUFFER_BIT,J.NEAREST);Pe.bindFramebuffer(J.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(te!==0||P.isRenderTargetTexture||et.has(P)){let rt=et.get(P),Yt=et.get(q);Pe.bindFramebuffer(J.READ_FRAMEBUFFER,B),Pe.bindFramebuffer(J.DRAW_FRAMEBUFFER,X);for(let Jn=0;Jn<Oe;Jn++)ri?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,rt.__webglTexture,te,ut+Jn):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,rt.__webglTexture,te),Pn?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Yt.__webglTexture,Ie,kt+Jn):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Yt.__webglTexture,Ie),te!==0?J.blitFramebuffer(Ge,nt,Ge+De,nt+we,qe,mt,qe+De,mt+we,J.COLOR_BUFFER_BIT,J.NEAREST):Pn?J.copyTexSubImage3D(Le,Ie,qe,mt,kt+Jn,Ge,nt,De,we):J.copyTexSubImage2D(Le,Ie,qe,mt,Ge,nt,De,we);Pe.bindFramebuffer(J.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Pn?P.isDataTexture||P.isData3DTexture?J.texSubImage3D(Le,Ie,qe,mt,kt,De,we,Oe,Ft,qt,Ut.data):q.isCompressedArrayTexture?J.compressedTexSubImage3D(Le,Ie,qe,mt,kt,De,we,Oe,Ft,Ut.data):J.texSubImage3D(Le,Ie,qe,mt,kt,De,we,Oe,Ft,qt,Ut):P.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ie,qe,mt,De,we,Ft,qt,Ut.data):P.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ie,qe,mt,Ut.width,Ut.height,Ft,Ut.data):J.texSubImage2D(J.TEXTURE_2D,Ie,qe,mt,De,we,Ft,qt,Ut);Pe.pixelStorei(J.UNPACK_ROW_LENGTH,sn),Pe.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ct),Pe.pixelStorei(J.UNPACK_SKIP_PIXELS,Hn),Pe.pixelStorei(J.UNPACK_SKIP_ROWS,hn),Pe.pixelStorei(J.UNPACK_SKIP_IMAGES,st),Ie===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&J.generateMipmap(Le),Pe.unbindTexture()},this.initRenderTarget=function(P){et.get(P).__webglFramebuffer===void 0&&ot.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ot.setTextureCube(P,0):P.isData3DTexture?ot.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ot.setTexture2DArray(P,0):ot.setTexture2D(P,0),Pe.unbindTexture()},this.resetState=function(){G=0,k=0,W=null,Pe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}};var Yn={west:62,east:106,halfDepth:48,home:{x:96,z:41.52}},zn=[-57,-19,19,57],vi=[-38,0,38],jo={x:11.7,z:3.2},Fr={x:12.05,z:-5.45},Ms={x:2,z:38},Rn={x:38,z:-38},Gs={door:{x:47.6,z:-33},inside:{x:47.6,z:-38.4,angle:0},out:{x:47.6,z:-29.6,angle:0}},jf={x:42.3,z:-41.25},xt=(n,e,t)=>Math.max(e,Math.min(t,n)),re=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Fn(n,e,t,i){return(Math.abs(n)+t<65||n>Yn.west&&n+t<Yn.east&&Math.abs(e)+t<Yn.halfDepth)&&Math.abs(e)+t<65&&i.every(s=>{if(s.off)return!0;let r=n-xt(n,s.x-s.w/2,s.x+s.w/2),o=e-xt(e,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=t*t})}function Qo(n,e,t,i,s){let r=n.x,o=n.z;return Fn(e,n.z,i,s)&&(n.x=e),Fn(n.x,t,i,s)&&(n.z=t),n.x!==r||n.z!==o}function On(n,e,t){let i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+xt(i,-t,t)}function Qf(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function uc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,u=new Kt;u.morphTargetsRelative=a;let l=0;for(let f=0;f<n.length;++f){let d=n[f],m=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in d.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(d.attributes[c]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in d.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[c].length!==n[0].morphAttributes[c].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have the same number of morph targets for the "'+c+'" morph attribute.'),null;o[c]===void 0&&(o[c]=[]),o[c].push(d.morphAttributes[c]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of morph attributes."),null;if(e){let c;if(t)c=d.index.count;else if(d.attributes.position!==void 0)c=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;u.addGroup(l,c,f),l+=c}}if(t){let f=0,d=[];for(let m=0;m<n.length;++m){let p=n[m].index;for(let c=0;c<p.count;++c)d.push(p.getX(c)+f);f+=n[m].attributes.position.count}u.setIndex(d)}for(let f in r){let d=ep(r[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;u.setAttribute(f,d)}for(let f in o){let d=o[f][0].length;if(d!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[f]=[];for(let m=0;m<d;++m){let p=[];for(let M=0;M<o[f].length;++M)p.push(o[f][M][m]);let c=ep(p);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;u.morphAttributes[f].push(c)}}}return u}function ep(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let f=n[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}let o=new e(r),a=new tn(o,t,i),u=0;for(let l=0;l<n.length;++l){let f=n[l];if(f.isInterleavedBufferAttribute){let d=u/t;for(let m=0,p=f.count;m<p;m++)for(let c=0;c<t;c++){let M=f.getComponent(m,c);a.setComponent(m+d,c,M)}}else o.set(f.array,u);u+=f.count*t}return s!==void 0&&(a.gpuType=s),a}var ea=new Y;function ci(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),u=Math.PI/4;ea.copy(e),ea[i]=0,ea.normalize();let l=.5*o/(o+a),f=1-ea.angleTo(n)/u;return Math.sign(ea[t])===1?f*l:a/(o+a)+l+l*(1-f)}var ta=class n extends ln{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let u=new Y,l=new Y,f=new Y(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,m=this.attributes.normal.array,p=this.attributes.uv.array,c=d.length/6,M=new Y,x=.5/o;for(let _=0,A=0;_<d.length;_+=3,A+=2)switch(u.fromArray(d,_),l.copy(u),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),d[_+0]=f.x*Math.sign(u.x)+l.x*r,d[_+1]=f.y*Math.sign(u.y)+l.y*r,d[_+2]=f.z*Math.sign(u.z)+l.z*r,m[_+0]=l.x,m[_+1]=l.y,m[_+2]=l.z,Math.floor(_/c)){case 0:M.set(1,0,0),p[A+0]=ci(M,l,"z","y",r,i),p[A+1]=1-ci(M,l,"y","z",r,t);break;case 1:M.set(-1,0,0),p[A+0]=1-ci(M,l,"z","y",r,i),p[A+1]=1-ci(M,l,"y","z",r,t);break;case 2:M.set(0,1,0),p[A+0]=1-ci(M,l,"x","z",r,e),p[A+1]=ci(M,l,"z","x",r,i);break;case 3:M.set(0,-1,0),p[A+0]=1-ci(M,l,"x","z",r,e),p[A+1]=1-ci(M,l,"z","x",r,i);break;case 4:M.set(0,0,1),p[A+0]=1-ci(M,l,"x","y",r,e),p[A+1]=1-ci(M,l,"y","x",r,t);break;case 5:M.set(0,0,-1),p[A+0]=ci(M,l,"x","y",r,e),p[A+1]=1-ci(M,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var bv={tee:"Camiseta",tank:"Regata",dress:"Camisa social",none:"Sem camisa"},Sv={pants:"Cal\xE7a",shorts:"Bermuda"},wv={sneakers:"T\xEAnis",flipflops:"Chinelo",dress:"Sapato social"},ru={bald:"Careca",buzz:"Raspado",short:"Curto",afro:"Black power",long:"Comprido",mohawk:"Moicano",cap:"Bon\xE9"},ou={none:"Sem barba",stubble:"Por fazer",goatee:"Cavanhaque",mustache:"Bigode",full:"Barba cheia",chevron:"Bigode e cavanhaque"},zr={gold:14266683,silver:13225169,diamond:14677503},au=[15921126,2040614,2772879,11680307,3107660,14725949,8014476,14711354,7307148,2592670],lu=[1906452,3876376,6964005,13081170,9318175,10132118,2772896],cu=[15052936,12684900,11765348,10119749,8475704,6175527];function Vs(){return{shirt:"tee",shirtColor:2386265,legs:"pants",legColor:3553348,shoes:"sneakers",shoeColor:13812648,hair:"cap",hairColor:1906452,beard:"none",skin:12220240,glasses:!1,chain:"none",earrings:"none",watch:"none",ring:"none",height:1,width:1,capColor:1522486}}function tp(n=12157017){return{...Vs(),shirt:"dress",shirtColor:3558501,legColor:2503491,shoes:"dress",shoeColor:1447446,hair:"cap",capColor:1845820,skin:n,beard:"none"}}function na(n){let e=n*2654435761>>>0||1,t=()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296),i=r=>r[Math.floor(t()*r.length)],s=r=>{let o=t()*r.reduce((a,[,u])=>a+u,0);for(let[a,u]of r)if(o-=u,o<=0)return a;return r[0][0]};return{feminine:n%3===0,shirt:s([["tee",.46],["tank",.2],["dress",.2],["none",.08]]),shirtColor:i(au),legs:s([["pants",.62],["shorts",.38]]),legColor:i([3553348,2373199,5917242,2894892,8221798,4020851,11049860]),shoes:s([["sneakers",.5],["flipflops",.28],["dress",.22]]),shoeColor:i([15789282,2236962,9056042,2969482,5915442]),hair:s([["short",.3],["buzz",.18],["bald",.1],["afro",.12],["long",.14],["mohawk",.05],["cap",.11]]),hairColor:i(lu.slice(0,6)),beard:n%3===0?"none":s([["none",.45],["stubble",.18],["goatee",.1],["mustache",.1],["full",.12],["chevron",.05]]),skin:i(cu),glasses:t()<.14,chain:s([["none",.82],["silver",.11],["gold",.07]]),earrings:s([["none",.88],["silver",.06],["gold",.05],["diamond",.01]]),watch:s([["none",.75],["silver",.17],["gold",.08]]),ring:s([["none",.85],["silver",.1],["gold",.05]]),height:.92+t()*.16,width:.9+t()*.25,capColor:i([1522486,9056042,2236962,2772879,14725949])}}function np(n){let e=Vs();if(!n||typeof n!="object")return e;let t=(r,o)=>Object.hasOwn(o,n[r])?n[r]:e[r],i=r=>Number.isInteger(n[r])&&n[r]>=0&&n[r]<=16777215?n[r]:e[r],s=(r,o)=>o.includes(n[r])?n[r]:"none";return{shirt:t("shirt",bv),shirtColor:i("shirtColor"),legs:t("legs",Sv),legColor:i("legColor"),shoes:t("shoes",wv),shoeColor:i("shoeColor"),hair:t("hair",ru),hairColor:i("hairColor"),beard:t("beard",ou),skin:i("skin"),glasses:n.glasses===!0,chain:s("chain",["gold","silver"]),earrings:s("earrings",["gold","silver","diamond"]),watch:s("watch",["gold","silver"]),ring:s("ring",["gold","silver"]),height:1,width:1,capColor:i("capColor")}}var Tv=new ln,Av=new ta(1,1,1,4,.23),Ev=new ta(1,1,1,2,.29),Cv=new fs(1,10,7),Rv=new Un(1,1,1,12),hu=new Map,Iv=new en({vertexColors:!0,roughness:.82}),mc=new en({vertexColors:!0,roughness:.36,metalness:.18});function Mi(n,e,t=Iv){if(!e.length)return;let i=e.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,u=new Float32Array(a*3),l=r.material.color;for(let f=0;f<u.length;f+=3){let d=l;if(r.userData.tankSkin){let m=r.geometry.attributes.position,p=Math.floor(f/9)*3,c=(m.getX(p)+m.getX(p+1)+m.getX(p+2))/3,M=(m.getY(p)+m.getY(p+1)+m.getY(p+2))/3;(M>.49||M>.14&&Math.abs(c)>.36||M>.27&&Math.abs(c)<.14)&&(d=r.userData.tankSkin)}u[f]=d.r,u[f+1]=d.g,u[f+2]=d.b}return o.setAttribute("color",new tn(u,3)),o});n.remove(...e);let s=new Tt(uc(i),t);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var ji=n=>n.children.filter(e=>e instanceof Tt);function yt(n,e,t,i,s,r,o,a,u,l=!1){let f=t+":"+l;hu.has(f)||hu.set(f,new en({color:t,roughness:l?.33:.87,metalness:l?.2:0}));let d=new Tt({box:Tv,cloth:Ev,sphere:Cv,cylinder:Rv}[e],hu.get(f));return d.scale.set(o,a,u),d.position.set(i,s,r),d.castShadow=!0,d.receiveShadow=!0,n.add(d),d}var Pv=new Ns(1,16),Lv=new $t({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function gc(n,e,t){let i=new Tt(Pv,Lv);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(e,t,1),n.add(i),i}var Dv=new Lo(1,.09,6,18),Nv=new en({vertexColors:!0,roughness:.22,metalness:.9});var Or=(n,e)=>{let t=Math.max(0,Math.min(255,(n>>16&255)*e)),i=Math.max(0,Math.min(255,(n>>8&255)*e)),s=Math.max(0,Math.min(255,(n&255)*e));return t<<16|i<<8|s};function bs(n,e){let t={...Vs(),...e},{skin:i}=t,s=new Lt;s.rotation.order="YXZ",s.scale.set(t.width,t.height,t.width);let r=gc(s,.41,.38),o=new Lt;s.add(o);let a=(E,S,g,w,F,D,L,V,z=!1)=>yt(o,E,S,g,w,F,D,L,V,z),u=t.shirt==="none",l=u?i:t.shirtColor;a("cloth",t.legColor,0,.94,0,.44,.25,.29);let f=a(t.shirt==="tank"?"box":"cloth",l,0,1.25,0,.52,.49,.32);t.shirt==="tank"&&(f.geometry=Av,f.userData.tankSkin=new $e(i)),u&&t.feminine&&a("cloth",t.shirtColor,0,1.34,.16,.47,.12,.012),t.shirt==="dress"&&(a("cloth",Or(l,1.25),0,1.47,.06,.3,.06,.2),a("cloth",Or(l,1.18),0,1.25,.158,.05,.4,.012)),a("cloth",u?3877408:4864812,0,1.05,.006,.473,.049,.312),a("cloth",12891226,-.128,1.05,.16,.06,.05,.01),a("cylinder",i,0,1.5,0,.09,.13,.09),a("sphere",i,0,1.67,.015,.168,.197,.157),a("sphere",i,0,1.655,.165,.033,.034,.034),a("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let E of[-1,1])a("sphere",i,E*.155,1.66,.023,.032,.052,.025),a("cloth",2894120,E*.061,1.711,.152,.043,.012,.012),a("cloth",10985105,E*.061,1.692,.156,.032,.012,.012),a("cloth",3024931,E*.06,1.693,.163,.016,.012,.009);let d=t.hairColor;switch(t.hair){case"buzz":a("sphere",d,0,1.735,-.02,.172,.105,.158);break;case"short":a("sphere",d,0,1.77,-.031,.162,.112,.141);break;case"afro":a("sphere",d,0,1.8,-.035,.235,.19,.225);break;case"long":a("sphere",d,0,1.765,-.03,.175,.12,.16),a("cloth",d,0,1.6,-.115,.32,.34,.1);break;case"mohawk":a("sphere",Or(i,.8),0,1.735,-.02,.171,.1,.157),a("cloth",d,0,1.83,-.02,.05,.11,.3);break;case"cap":a("sphere",t.capColor,0,1.79,.012,.181,.132,.164),a("cloth",Or(t.capColor,1.2),0,1.77,.159,.27,.033,.17);break;default:break}let m=t.beard;if(m==="stubble"&&a("cloth",Or(i,.68),0,1.585,.09,.3,.1,.13),m==="full"&&a("cloth",d,0,1.585,.085,.33,.13,.16),(m==="goatee"||m==="chevron")&&a("cloth",d,0,1.555,.15,.07,.075,.04),(m==="mustache"||m==="chevron"||m==="full")&&a("cloth",d,0,1.618,.164,.1,.022,.02),t.glasses){a("cloth",1118481,0,1.703,.163,.25,.05,.02);for(let E of[-1,1])a("cloth",1118481,E*.155,1.705,.08,.012,.018,.16)}if(t.earrings!=="none")for(let E of[-1,1])a("sphere",zr[t.earrings],E*.162,1.625,.03,.016,.016,.016,!0);if(t.chain!=="none"){let E=a("box",zr[t.chain],0,1.43,.06,.15,.15,.15,!0);E.geometry=Dv,E.rotation.x=Math.PI/2-.42,a("box",zr[t.chain],0,1.32,.165,.04,.05,.015,!0)}let p=[],c=[],M=[],x=[];for(let E of[-1,1]){let S=new Lt;S.position.set(E*.31,1.42,0),o.add(S);let g=t.shirt==="tee"||t.shirt==="dress";yt(S,"cloth",g?l:i,0,-.105,0,g?.173:.15,.226,g?.187:.16);let w=new Lt;w.position.y=-.23,S.add(w),yt(w,"cloth",t.shirt==="dress"?l:i,0,-.101,0,.132,.22,.119),yt(w,"sphere",i,0,-.227,.012,.082,.084,.077),E===1&&t.watch!=="none"&&(yt(w,"cloth",2762018,0,-.17,0,.14,.04,.128),yt(w,"box",zr[t.watch],0,-.17,.065,.05,.045,.012,!0)),E===-1&&t.ring!=="none"&&yt(w,"box",zr[t.ring],.03,-.27,.05,.022,.022,.022,!0),M.push(w),p.push(S);let F=new Lt;F.position.set(E*.128,.94,0),o.add(F),yt(F,"cloth",t.legColor,0,-.205,0,.21,.427,.228);let D=new Lt;D.position.y=-.412,F.add(D);let L=t.legs==="shorts";if(yt(D,"cloth",L?i:t.legColor,0,-.18,0,L?.15:.182,.38,L?.16:.198),t.shoes==="flipflops"){yt(D,"cloth",i,0,-.405,.06,.12,.08,.24);for(let V of[-1,1])yt(D,"cloth",t.shoeColor,V*.033,-.366,.09,.023,.019,.1).rotation.y=-V*.55;yt(D,"cloth",t.shoeColor,0,-.455,.059,.15,.025,.29)}else{let V=t.shoes==="dress"?1906194:t.shoeColor;yt(D,"cloth",V,0,-.386,.062,.201,.143,.304),yt(D,"cloth",t.shoes==="dress"?1183243:Or(V,.55),0,-.445,.059,.202,.037,.313)}x.push(D),c.push(F)}let _=new Lt;_.position.set(0,-.227,.012),yt(_,"box",2635321,0,.012,-.002,.066,.078,.12,!0),yt(_,"box",2635321,0,-.105,.054,.074,.25,.079,!0),yt(_,"box",10263691,0,-.189,.095,.031,.028,.018);let A=new Vt;A.position.set(0,-.235,.053),_.add(A),M[0].add(_);let R=new Lt;R.position.set(0,-.227,.03),yt(R,"box",2828840,0,0,.05,.08,.12,.06,!0),yt(R,"box",2303786,0,-.2,.07,.07,.5,.11,!0),yt(R,"box",1842719,0,-.62,.08,.035,.42,.035,!0),yt(R,"box",5915954,0,.22,.06,.07,.32,.12),yt(R,"box",2303786,0,-.18,-.02,.05,.16,.12,!0);let b=new Vt;b.position.set(0,-.84,.08),R.add(b),M[0].add(R);for(let E of[o,...p,...M,...c,...x,_,R]){let S=ji(E);Mi(E,S.filter(g=>g.material.metalness===0)),Mi(E,S.filter(g=>g.material.metalness>0),Nv)}return _.visible=!1,R.visible=!1,n.add(s),{root:s,body:o,arms:p,legs:c,forearms:M,shins:x,pistol:_,rifle:R,muzzle:A,rifleMuzzle:b,shadow:r,stride:0,weapon:"pistol",look:t}}function Ws(n,e,t,i,s,r=0,o=0,a=!1){n.stride+=e*(4.6+t*1.65);let u=Math.sin(n.stride)*Math.min(.78,t*.15);n.body.position.set(0,Math.abs(u)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(u,0,0),n.legs[1].rotation.set(-u,0,0),n.shins[0].rotation.set(Math.max(0,u)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-u)*.51,0,0);for(let f of n.forearms)f.rotation.set(0,0,0);let l=s&&n.weapon==="rifle";if(n.arms[0].rotation.set(i?-Math.PI/2+o:-u*.76,0,0),n.arms[1].rotation.set(i?l?-Math.PI/2+o+.12:-1.16:u*.76,0,i&&l?.42:0),n.arms[0].rotation.z=a?-.25:0,(a||!(i&&l))&&(n.arms[1].rotation.z=a?.25:0),a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let f=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-f*1.11,n.forearms[0].rotation.x=-.62*(1-f),n.body.rotation.y=-f*.37}else n.body.rotation.y=0;if(n.pistol.visible=s&&n.weapon!=="rifle",n.rifle)if(n.rifle.visible=l,i&&l&&!a&&r<=0){let f=n.rifle;f.parent!==n.body&&n.body.add(f),f.position.set(.018,1.3,.19),f.rotation.set(-Math.PI/2+o,0,0);let d=sp(f,0,.01,0);pc(n.arms[0],n.forearms[0],d,.23,.227,[-.65,-1,0]);let m=sp(f,0,-.14,-.032);pc(n.arms[1],n.forearms[1],m,.23,.227,[.65,-1,0])}else n.rifle.parent!==n.forearms[0]&&(n.forearms[0].add(n.rifle),n.rifle.position.set(0,-.227,.03),n.rifle.rotation.set(0,0,0))}var ip=new Y(0,-1,0),uu=new Y,Hs=new Y,du=new Y,fc=new Y,dc=new Y,rp=new on;function sp(n,e,t,i){return fc.set(e,t,i).applyEuler(n.rotation).add(n.position)}function pc(n,e,t,i,s,r){Hs.subVectors(t,n.position);let o=Math.min(i+s-.001,Math.max(.015,Hs.length()));Hs.normalize();let a=(i*i-s*s+o*o)/(2*o);du.set(r[0],r[1],r[2]).addScaledVector(Hs,-du.dot(Hs)).normalize(),uu.copy(n.position).addScaledVector(Hs,a).addScaledVector(du,Math.sqrt(Math.max(0,i*i-a*a))),dc.subVectors(uu,n.position).normalize(),n.quaternion.setFromUnitVectors(ip,dc),dc.copy(n.position).addScaledVector(Hs,o).sub(uu).normalize(),e.quaternion.setFromUnitVectors(ip,dc.applyQuaternion(rp.copy(n.quaternion).invert()))}function fu(n,e){e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(fc.set(0,.1,-.31))),n.root.quaternion.copy(e.body.getWorldQuaternion(rp)),n.shadow.visible=!1,n.pistol.visible=!1;let t=.63;n.body.rotation.set(t,0,0),n.body.position.set(0,.94*(1-Math.cos(t)),-.94*Math.sin(t)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(e.handlebar.localToWorld(fc.set(s*.342,.44,-.09)));pc(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(e.body.localToWorld(fc.set(s*.245,.39,-.22)));pc(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function ia(n,e,t){let i=Math.min(1,e/.22),s=Math.min(1,Math.max(0,(e-.12)/.5)),r=s*s*(3-2*s),o=e>.62?Math.sin(Math.min(1,(e-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(e-.62)/.25)):0,a=t*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(t*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let u=Math.sin(Math.min(1,e/.5)*Math.PI);return n.arms[0].rotation.set(-t*(.6*u+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-t*(.9*u+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*u-.2,0,0),n.forearms[1].rotation.set(-.3*u-.3,0,0),n.pistol.visible=!1,a}var xc={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},ra=n=>xc[n]??xc[(n??"car").split(":")[0]]??xc.car,Ss=n=>n.shape??n.kind;function op(n,e){xc[n]=e}function ii(n,e){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0),n.repair?.(),Object.assign(n,e,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function hi(n,e,t,i,s="car"){let r=Math.sin(t),o=Math.cos(t),{offsets:a,radius:u}=ra(s);return a.every(l=>Fn(n+r*l,e+o*l,u,i))}function Qi(n,e,t,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=e-n.x,a=t-n.z,{width:u,length:l}=ra(Ss(n)),f=Math.abs(o*r-a*s)-u,d=Math.abs(o*s+a*r)-l;return f<=0&&d<=0||Math.hypot(Math.max(0,f),Math.max(0,d))<i}function ws(n,e=0){let{width:t,length:i}=ra(n),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));return{width:t*s+i*r,length:i*s+t*r}}function mu(n,e,t,i=n){return hi(n.x,n.z,n.angle,e,Ss(n))&&!sa(i,n.x,n.z,n.angle,t)}function sa(n,e,t,i,s){let r=Math.sin(i),o=Math.cos(i),a=ra(Ss(n));for(let u of s){if(u===n||Math.abs(u.x-e)>4.5||Math.abs(u.z-t)>4.5)continue;let l=Math.sin(u.angle),f=Math.cos(u.angle),d=ra(Ss(u)),m=a.radius+d.radius,p=m,c=0,M=0;for(let x of a.offsets)for(let _ of d.offsets){let A=e+r*x-u.x-l*_,R=t+o*x-u.z-f*_,b=Math.hypot(A,R);if(b>=p)continue;p=b;let E=Math.hypot(e-u.x,t-u.z);c=b>.02?A/b:E>.02?(e-u.x)/E:r,M=b>.02?R/b:E>.02?(t-u.z)/E:o}if(p<m)return{other:u,nx:c,nz:M,mass:a.mass,otherMass:d.mass}}return null}function pu(n,e){e<2.4||(n.integrity=Math.max(0,n.integrity-(e-2.4)*1.15),n.impact=Math.max(n.impact,e))}function ui(n,e,t,i,s){let{brake:r}=t,o=n.kind==="bike",a=n.integrity>0?t.throttle:0;n.bumpedVehicle=null;let u=n.integrity>0?t.steer:0;n.impact=Math.max(0,n.impact-e*21),n.steer+=(u-n.steer)*(1-Math.exp(-e*10));let l=Math.sin(n.angle),f=Math.cos(n.angle),d=n.vx*l+n.vz*f,m=n.handling,p=(n.flat??[]).filter(Boolean).length,c=(m?.top??(o?31:27))*(1-p*.22),M=Math.sign(a)*d<-.6?28:a<0?o?4.7:10:(m?.accel??(o?19.7:15.4))*(1-p*.15);d=xt(d+a*M*e,o?-2.7:-8.4,c);let x=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;d*=Math.exp(-e*x);let _=r?o?5.2:2.15:(m?.grip??(o?13.5:8.1))*(1-p*.12),A=(n.vx*f-n.vz*l)*Math.exp(-e*_);n.vx=d*l+A*f,n.vz=d*f-A*l;let R=xt(1.9-Math.abs(d)/24,.75,1.65),b=p?((n.flat?.[0]||n.flat?.[2]?1:0)-(n.flat?.[1]||n.flat?.[3]?1:0))*.12:0,E=(n.steer+b)*e*R*Math.min(1,Math.abs(d)/2.1)*Math.sign(d),S=n.angle+E*(o?1.26:r?1.58:1);hi(n.x,n.z,S,i,Ss(n))&&!sa(n,n.x,n.z,S,s)&&(n.angle=S);let g=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*e/.34)),w=e/g;for(let F=0;F<g;F++){let D=n.x+n.vx*w,L=n.z+n.vz*w,V=sa(n,D,L,n.angle,s);if(V){let{other:z,nx:B,nz:X,mass:G,otherMass:k}=V,W=n.vx*B+n.vz*X,U=W-(z.vx*B+z.vz*X);if(U<0&&W<0){let $=-U*1.22/(1/G+1/k);n.vx+=B*$/G,n.vz+=X*$/G,z.vx-=B*$/k,z.vz-=X*$/k,U<-3.5&&(n.bumpedVehicle=z),pu(n,-U),pu(z,-U*.9);break}let j=Math.hypot(n.x-z.x,n.z-z.z);if(Math.hypot(D-z.x,L-z.z)<=j)break}if(hi(D,L,n.angle,i,Ss(n)))n.x=D,n.z=L;else{let z=hi(D,n.z,n.angle,i,Ss(n))&&!sa(n,D,n.z,n.angle,s),B=hi(n.x,L,n.angle,i,Ss(n))&&!sa(n,n.x,L,n.angle,s),X=Math.hypot(z?0:n.vx,B?0:n.vz);z!==B?(z&&(n.x=D),B&&(n.z=L),n.vx*=z?.84:-.22,n.vz*=B?.84:-.22):(n.vx*=-.21,n.vz*=-.21),pu(n,X||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function kn(n,e){let t=0;return vi.some(i=>Math.abs(n-i)<=13.55)&&vi.some(i=>Math.abs(e-i)<=13.55)&&(t=.16),Math.abs(n-38)<6.05&&Math.abs(e+38)<5.04&&(t=.228),Math.abs(n-2)<9.5&&Math.abs(e-38)<11&&(t=.191),n>-10.91&&n<-3.49&&Math.abs(e-38)<9.77&&(t=.234),t}function Bn(n,e,t,i,s,r,o=.34){if(!Fn(e,t,o,i))return!1;for(let a of s)if(!(re(a,{x:e,z:t})>3.4||!Qi(a,e,t,o))&&(!Qi(a,n.x,n.z,o)||re(a,{x:e,z:t})<=re(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let u=o+.19;if(re(a,{x:e,z:t})<u&&re(a,{x:e,z:t})<=re(a,n))return!1}return!0}function _c(n,e,t,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(e,t)/.14)),u=n.x,l=n.z,f=e/a,d=t/a;for(let m=0;m<a;m++){let p=n.x+f,c=n.z+d;if(Bn(n,p,c,i,s,r,o)){n.x=p,n.z=c;continue}f&&Bn(n,p,n.z,i,s,r,o)&&(n.x=p),d&&Bn(n,n.x,c,i,s,r,o)&&(n.z=c)}return Math.hypot(n.x-u,n.z-l)}function ap(n,e,t){if(!e)return Qi(n,t.x,t.z,.28);let i=Math.max(1,Math.ceil(re(e,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=e.x+(n.x-e.x)*r,a=e.z+(n.z-e.z)*r,u={x:o,z:a,angle:n.angle,kind:n.kind,shape:n.shape};if(Qi(u,t.x,t.z,.28))return!0}return!1}function lp(n,e,t){let i=e.x-n.x,s=e.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((t.x-n.x)*i+(t.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(t.x-n.x-i*o,t.z-n.z-s*o)<1.2}function hp(n,e){let{id:t,x:i,z:s,w:r,d:o,angle:a,kind:u,label:l,color:f}=e,{box:d,solid:m,door:p,sign:c,glazing:M,support:x,volume:_}=n,A=u==="shop"||u==="armory",R=(k,W,U=.228)=>({x:i+Math.cos(a)*k+Math.sin(a)*W,z:s-Math.sin(a)*k+Math.cos(a)*W,y:U}),b=Math.abs(Math.cos(a)),E=Math.abs(Math.sin(a)),S=(k,W,U,j)=>({...R(k,W),w:U*b+j*E,d:U*E+j*b}),g=o/2,w=-o/2,F=-r/2,D=r/2,L=(k,W,U,j,$,K,ge,Z=!1,fe=0,Ee="box")=>{let Te=R(k,W);d(Te.x,U,Te.z,j,$,K,ge,Z,a,fe,Ee)},V=(k,W,U,j,$,K,ge,Z=!0)=>{L(k,W,U,j,$,K,ge,Z);let fe=S(k,W,j,K);m.push({x:fe.x,z:fe.z,w:fe.w,d:fe.d,y0:U-$*.5,h:U+$*.5,buildingId:t})};return A?X():B();function z(k,W,U,j,$){if(L(k,g+.05,W,U+.22,j+.22,.1,5195585),L(k,g+.085,W,U,j,.06,5073522),L(k,g+.12,W,.05,j,.03,12168856),L(k,g+.12,W+j*.18,U,.045,.03,12168856),L(k,g+.13,W-j*.5-.08,U+.36,.09,.2,bi(f)),$)for(let K of[-1,1])L(k+K*(U*.5+.24),g+.09,W,.34,j+.06,.05,$)}function B(){let k=u==="apartments",W=k?e.stories:1,U=k?3.3:3.25,j=W*U,$=.228+j;V(0,0,.228+j/2,r,j,o,f),L(0,g+.03,.228+.23,r+.04,.46,.08,8484463);for(let Z of[F+.12,D-.12])L(Z,g+.04,.228+j/2,.26,j,.1,bi(f));for(let Z=1;Z<W;Z++)L(0,g+.04,.228+Z*U,r+.04,.16,.1,bi(f));let K=k?0:-r*.18;if(L(K,g+.05,.228+1.17,1.42,2.42,.1,5195585),L(K,g+.09,.228+1.1,1.1,2.2,.06,k?4151902:7687224),L(K+.38,g+.14,.228+1.08,.06,.16,.05,13810049),L(K,g+.32,.228-.05,1.7,.14,.62,8484463),L(K,g+.42,.228+2.62,1.9,.12,.86,bi(f),!0),k){L(K,g+.12,.228+2.92,1.6,.32,.05,15324320);let Z=R(K,g+.15,.228+2.92);c(l,Z.x,Z.y,Z.z,a,5589560,1.56,.3)}else{let Z=R(K+1.15,g+.13,1.848);c(l,Z.x,Z.y,Z.z,a,5589560,.92,.22)}let ge=u==="house"?cp(t,[6257514,8019014,6975364]):null;for(let Z=0;Z<W;Z++){let fe=.228+Z*U,Ee=k?[F+r*.17,F+r*.38,D-r*.38,D-r*.17]:[r*.18,r*.38];for(let Te of Ee)if(!(Z===0&&Math.abs(Te-K)<1.7)&&(z(Te,fe+1.72,k?1.26:1.2,1.34,ge),k&&Z>0&&Te===Ee[3])){L(Te,g+.42,fe+.95,1.8,.12,.74,8484463,!0);for(let Me of[-.8,-.4,0,.4,.8])L(Te+Me,g+.76,fe+1.38,.04,.78,.04,4802113);L(Te,g+.76,fe+1.78,1.72,.05,.06,4802113)}for(let Te of[F,D]){let Me=Te===F?-1:1;for(let Xe of k?[w+2.2,g-2.2]:[0]){let Ye=R(Te+Me*.05,Xe);d(Ye.x,fe+1.72,Ye.z,.1,1.56,1.32,5195585,!1,a);let Ke=R(Te+Me*.085,Xe);d(Ke.x,fe+1.72,Ke.z,.06,1.34,1.1,5073522,!1,a)}}}if(k){L(0,0,$+.04,r+.12,.1,o+.12,7827562);for(let Z of[F+.1,D-.1])L(Z,0,$+.36,.2,.56,o,bi(f),!0);for(let Z of[w+.1,g-.1])L(0,Z,$+.36,r,.56,.2,bi(f),!0);L(D-2.4,w+2.1,$+.95,2,1.8,2,9077369,!0),L(D-2.4,w+2.1,$+1.93,2.1,.12,2.1,7301732),L(F+2.2,w+1.9,$+.75,1.4,1.2,1.4,10134691,!0),L(F+2.2,w+1.9,$+1.42,1.5,.12,1.5,7240057)}else{let Z=Math.min(2,o*.2);L(0,0,$,r-.02,Z,o-.02,f,!0,0,"prism"),L(0,0,$+.06,r+.5,Z+.12,o+.7,cp(t,[10115652,9063482,8082502]),!0,0,"prism"),L(D-2.1,w+o*.3,$+Z*.55,.55,1.6,.55,9402986,!0)}return{id:t,kind:u,label:l,units:[],doorIds:[],clerk:null,outside:R(K,g+1.1,.16),entry:R(K,g+.2),inside:R(K,g+.2),approach:R(K,g+2.4,.16),resident:null}}function X(){let W=4.0200000000000005,U=.228,j=e.doorAt??.1,$=Math.min(r*.25,3.72),K=[j-r*.248,j+r*.248],ge=.22,Z=(Ne,_t,ee,At,J,Et,it)=>V(Ne,_t,J+Et/2,ee,Et,At,it),fe=(Ne,_t,ee,At,J,Et)=>Z((_t+ee)/2,Ne,ee-_t,ge,At,J,Et),Ee=(Ne,_t,ee,At,J,Et)=>Z(Ne,(_t+ee)/2,ge,ee-_t,At,J,Et),Te=p(...G(j-1.28/2,g),a,1.28,4285290,U,{buildingId:t,private:!1,unitId:null}),Me=R(j,g),Xe=R(j,g+1.05,.16),Ye=R(j,g-1.05),Ke=R(j,g+2.45,.16);_.push({...S(0,0,r-.2,o-.2),floor:U,ceiling:U+W,buildingId:t}),V(0,0,U-.066,r-.03,.132,o-.03,11972762,!1),m[m.length-1].walkSurface=!0,x.push({...S(0,0,r-.03,o-.03),y:U,buildingId:t}),Ee(F,w,g,U,W,f),Ee(D,w,g,U,W,f),fe(w,F,D,U,W,f);let je=F,dt=[{center:j,width:1.28,door:!0},...K.map(Ne=>({center:Ne,width:$,door:!1}))];dt.sort((Ne,_t)=>Ne.center-_t.center);let tt=.61,zt=2.58,Ot=zt-tt;for(let Ne of dt){let _t=Ne.center-Ne.width*.5,ee=Ne.center+Ne.width*.5;if(fe(g,je,_t,U,W,f),L((je+_t)/2,g+.04,U+.17,_t-je,.34,.11,8484463),je=ee,Ne.door)continue;Z(Ne.center,g,Ne.width,ge,U,tt,f),Z(Ne.center,g,Ne.width,ge,U+zt,W-zt,f);let At=R(Ne.center,g+.068,U+(zt+tt)*.5);M(At.x,At.y,At.z,Ne.width,Ot,a);let J=S(Ne.center,g,Ne.width,.2);m.push({x:J.x,z:J.z,w:J.w,d:J.d,y0:U+tt,h:U+zt,buildingId:t});for(let it of[-1,0,1])L(Ne.center+it*(Ne.width*.5-.042),g+.13,U+(zt+tt)*.5,.07,Ot,.084,5989472);for(let it of[tt,zt])L(Ne.center,g+.13,U+it,Ne.width+.07,.081,.096,7831928);L(Ne.center,g+.17,U+tt-.025,Ne.width+.2,.091,.25,10065280);let Et=g-.48;L(Ne.center,Et,U+.83,Ne.width-.24,.078,.45,11771260);for(let it of[-.78,-.39,.39,.78])L(Ne.center+it,Et,U+.95+(Math.abs(it)<.5?.055:0),.23,.26,.26,e.awning??12089684)}fe(g,je,D,U,W,f),L((je+D)/2,g+.04,U+.17,D-je,.34,.11,8484463),V(j,g,U+2.22+(W-2.22)/2,1.28,W-2.22,.21,f);for(let Ne of[F+.17,D-.17])L(Ne,g+.11,U+W/2,.22,W,.17,bi(f));L(0,g+.07,U+4.16-.05,r+.25,.22,.13,bi(f));for(let Ne of[F,D]){let _t=Ne===F?-1:1;for(let ee of[w+2.3,g-2.3])L(Ne+_t*.13,ee,U+1.7,.06,1.2,1.4,5195585),L(Ne+_t*.16,ee,U+1.7,.04,1.04,1.22,5073522),L(Ne+_t*.2,ee,U+1.03,.16,.09,1.56,bi(f))}let Nt=R(0,w+1.89,U);Nt.angle=a;let Rt=R(0,g+.18,U+4.16-.64);c(l,Rt.x,Rt.y,Rt.z,a,3232851,Math.min(5.25,r-.72),.58),L(0,g+.6,U+4.16-1.37,r-.56,.19,1.22,e.awning??7820863,!0);for(let Ne=F+.68;Ne<D-.42;Ne+=.46)L(Ne,g+1.21,U+4.16-1.46,.225,.23,.062,14006413);V(.46,w+3,U+.55,4.4,1.1,.7,6968131),L(.46,w+3,U+1.15,4.58,.14,.79,12166795,!0),L(1.33,w+3.02,U+1.42,.48,.41,.36,4083022),L(1.33,w+3.22,U+1.58,.34,.19,.051,7968922);for(let Ne of[F+.46,D-.46])for(let _t of[w+1.75,w+4.2]){V(Ne,_t,U+.83,.61,1.66,1.79,7037271);for(let ee=0;ee<3;ee++)for(let At of[-.55,-.17,.22,.57]){let J=[12490344,11953479,5997179][(Math.floor((At+.6)*2.3)+ee)%3];L(Ne+(Ne<0?.37:-.37),_t+At,U+.47+ee*.43,.15,.25,.22,J)}}for(let Ne of[-.26,.26])L(Ne*r,0,U+4.16-.23,.32,.085,1.91,16245436);L(0,g-.8,U+.009,1.71,.016,.87,5863786);let cn=U+4.16;V(0,0,cn-.053,r+.17,.2,o+.17,8613472,!1);for(let Ne of[F,D])L(Ne,0,cn+.28,.25,.59,o+.15,bi(f),!0);for(let Ne of[w,g])L(0,Ne,cn+.28,r+.2,.59,.25,bi(f),!0);return L(D-1.5,w+1.45,cn+.46,1.34,.64,1.21,8418922,!0),L(D-1.5,w+1.45,cn+.82,1.14,.08,1.05,10261379),L(F+1.52,w+1.55,cn+.39,.56,.57,.57,4873822,!0),{id:t,kind:u,label:l,entry:Me,outside:Xe,inside:Ye,approach:Ke,resident:null,clerk:Nt,doorIds:[Te.id],units:[]}}function G(k,W){let U=R(k,W,.228);return[U.x,U.z]}}function cp(n,e){let t=0;for(let i of n)t=t*31+i.charCodeAt(0)>>>0;return e[t%e.length]}function bi(n){let e=Math.min(255,(n>>16&255)+26),t=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return e*65536+t*256+i}var up=(n,e)=>[Math.floor((n-e*.5-1.1)/10),Math.floor((n+e*.5+1.1)/10)];function yc(n){let e=new Map;for(let t of n){let[i,s]=up(t.x,t.w),[r,o]=up(t.z,t.d);for(let a=i;a<=s;a++)for(let u=r;u<=o;u++){let l=a+","+u;e.has(l)||e.set(l,[]),e.get(l).push(t)}}return(t,i)=>e.get(Math.floor(t/10)+","+Math.floor(i/10))??[]}var dp=(n,e,t)=>Math.abs(n-t.x)<t.w*.5+.002&&Math.abs(e-t.z)<t.d*.5+.002,Uv=n=>n&&n.health!==0&&!n.seated;function fp(n,e,t,i,s){let r=yc(n),o=yc(e),a=yc(t),u=yc(i.map(b=>b.closedSolid)),l=new Map(i.map(b=>[b.id,b])),f=b=>{let E=l.get(b.doorId);return!E.breached&&E.openAmount<1.06},d=n.filter(b=>(b.y0??0)<.95&&b.h>.28&&!b.stair);function m(b,E,S=0){let g=s(b,E);for(let w of o(b,E))w.y>g&&w.y<=S+.305&&dp(b,E,w)&&(g=w.y);return g}function p(b,E,S=0){let g=F=>!F.stair&&(!F.walkSurface||F.h>S+.305)&&(F.y0??0)<S+1.72&&F.h>S+.13,w=r(b,E).filter(g);for(let F of u(b,E))g(F)&&f(F)&&w.push(F);return w}function c(b,E,S=0){let g=null;for(let w of a(b,E))w.floor<=S+.14&&w.ceiling>=S&&dp(b,E,w)&&(!g||w.floor>g.floor)&&(g=w);return g}function M(b,E,S,g=.3,w=!1){let F=D=>E>=(D.y0??0)-g&&E<=D.h+g&&Math.abs(b-D.x)<D.w*.5+g&&Math.abs(S-D.z)<D.d*.5+g;for(let D of r(b,S))if(!(D.off||D.prop||D.walkSurface||D.stair)&&F(D))return!0;if(w){for(let D of u(b,S))if(F(D))return!0}return!1}function x(){return i.map(b=>b.closedSolid).filter(f)}function _(b){let E=l.get(b);return!E||!E.private||E.breached?!1:(E.breached=!0,E.hold=1/0,!0)}function A(b,E){for(let S of i){let g=S.breached||S.normallyOpen;S.hold=Math.max(0,S.hold-b);for(let F of E){if(g||!Uv(F))continue;let D=F.floorY??F.y??0;if(Math.abs(D-S.base)>.64)continue;let L=F.x-S.x,V=F.z-S.z,z=L*L+V*V;if(z>3.68)continue;let B=F.buildingId===S.buildingId&&(!S.unitId||F.unitId===S.unitId),X=L*S.normalX+V*S.normalZ<-.22;(!S.private||B||X&&z<2.43||S.opened&&z<1.92)&&(g=!0,S.hold=1.1)}let w=g||S.hold>0?1.48:0;S.openAmount+=(w-S.openAmount)*(1-Math.exp(-b*13)),S.opened=S.openAmount>=1.06,S.door.rotation.y=S.angle+S.openAmount}}function R(){for(let b of i)b.breached=!1,b.hold=0,b.opened=b.normallyOpen,b.openAmount=b.normallyOpen?1.48:0,b.door.rotation.y=b.angle+b.openAmount}return{vehicleSolids:d,floorAt:m,walkSolids:p,interiorAt:c,closedDoorSolids:x,breachDoor:_,updateDoors:A,resetDoors:R,viewBlocked:M}}var gu=3751484,Fv={box:new ln,cylinder:new Un(1,1,1,10),pole:new Un(.8,1,1,8),foliage:new Yi(1,1)},Br={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function kr(n){let e=n.map(([t,i,s,r,o,a,u,l,f=0,d=0])=>{let m=Fv[t],p=m.index?m.toNonIndexed():m.clone(),c=new St().compose(new Y(i,s,r),new on().setFromEuler(new xi(f,d,0,"YXZ")),new Y(o,a,u));p.applyMatrix4(c);let M=new $e(l),x=new Float32Array(p.attributes.position.count*3);for(let _=0;_<x.length;_+=3)x[_]=M.r,x[_+1]=M.g,x[_+2]=M.b;p.setAttribute("color",new tn(x,3));for(let _ of Object.keys(p.attributes))["position","normal","color"].includes(_)||p.deleteAttribute(_);return p});return uc(e)}var pp={lamp:()=>kr([["pole",0,2.25,0,.083,4.5,.083,gu],["box",.35,4.36,0,.79,.075,.075,gu],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>kr([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,gu])]),bin:()=>kr([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>kr([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>kr([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>kr([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,e)=>{let t=e*Math.PI*2/7;return["foliage",Math.sin(t)*.86,4.55,Math.cos(t)*.86,.42,.24,1.58,[3432266,4879699,7111766][e%3],0,t]})])};function mp(n,e,t){let i=[],s={},r=new en({vertexColors:!0,roughness:.84}),o=new St,a=new Y,u=new on,l=new Y,f=new on,d=new on,m=new Y,p=new Y(0,1,0),c=!1;function M(S,g,w,F=0,D=1,L){let V=t(g,w),z={x:g,z:w,w:L?.w??Br[S].radius*2,d:L?.d??Br[S].radius*2,y0:V,h:V+(L?.h??1),prop:S};e.push(z),i.push({kind:S,x:g,z:w,y:V,rotation:F,scale:D,solid:z,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function x(S){f.setFromAxisAngle(p,S.rotation+S.spin),m.set(S.axisX,0,S.axisZ),d.setFromAxisAngle(m,S.tilt),u.multiplyQuaternions(d,f);let g=Br[S.kind].radius;a.set(S.x,S.y+Math.sin(S.tilt)*g+S.lift,S.z),l.setScalar(S.scale),o.compose(a,u,l),s[S.kind].setMatrixAt(S.index,o),s[S.kind].instanceMatrix.needsUpdate=!0}function _(){for(let S of Object.keys(pp)){let g=i.filter(F=>F.kind===S);if(!g.length)continue;let w=new Nn(pp[S](),r,g.length);w.castShadow=!0,w.receiveShadow=!0,s[S]=w,g.forEach((F,D)=>{F.index=D,x(F)}),w.computeBoundingSphere(),n.add(w)}}function A(S,g,w){let F=Br[S.kind];S.broken=!0,S.solid.off=!0,S.clock=0;let D=.55+Math.random()*.25;S.vx=g.vx*D,S.vz=g.vz*D;let L=Math.max(.01,Math.hypot(g.vx,g.vz));S.axisX=g.vz/L,S.axisZ=-g.vx/L,S.spinRate=(Math.random()-.5)*(S.kind==="bin"?7:2),S.lift=0,S.liftSpeed=S.kind==="bin"||S.kind==="bollard"?Math.min(3.2,w*.22):0;let V=1-F.mass;return g.vx*=V,g.vz*=V,F.damage&&(g.integrity=Math.max(0,g.integrity-F.damage*Math.min(1.6,w/F.speed))),g.impact=Math.max(g.impact,F.mass>.2?4.5:0),c=!0,{kind:S.kind,heavy:F.mass>.2,x:S.x,z:S.z}}function R(S,g,w){let F=[];for(let L of g){let V=Math.hypot(L.vx,L.vz);if(V<.6)continue;let z=V*S*2+.2;for(let B of i){if(B.broken||Math.abs(B.x-L.x)>3.6||Math.abs(B.z-L.z)>3.6)continue;let X={x:L.x+L.vx*S,z:L.z+L.vz*S,angle:L.angle,kind:L.kind};Qi(X,B.x,B.z,Br[B.kind].radius+z)&&V>=Br[B.kind].speed&&F.push(A(B,L,V))}}for(let L of i)if(L.broken)if(L.clock+=S,L.clock<2.5){let V=Math.exp(-S*(L.tilt>1.2?6:2.2)),z=L.x+L.vx*S,B=L.z+L.vz*S;L.x=z,L.z=B,L.vx*=V,L.vz*=V,L.spin+=(L.spinRate??0)*S*V,L.tilt=Math.min(Math.PI/2,L.tilt+S*(1.1+L.tilt*3.2)),L.liftSpeed&&(L.lift=Math.max(0,L.lift+L.liftSpeed*S),L.liftSpeed-=9.8*S,L.lift===0&&L.liftSpeed<0&&(L.liftSpeed=0)),x(L)}else L.clock>50&&Math.hypot(w.x-L.solid.x,w.z-L.solid.z)>38&&g.every(V=>Math.hypot(V.x-L.solid.x,V.z-L.solid.z)>3)&&b(L);let D=c;return c=!1,{events:F,shadow:D}}function b(S){Object.assign(S,{broken:!1,x:S.solid.x,z:S.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),S.solid.off=!1,x(S),c=!0}function E(){for(let S of i)S.broken&&b(S)}return{add:M,finalize:_,update:R,reset:E,items:i}}var Gr=20;function gp(n,e,t){let r=((n+e)%Gr+Gr)%Gr-(t==="z"?0:10);return r>=0&&r<7?"green":r>=7&&r<9?"yellow":"red"}var zv={red:[new $e(1,.12,.08),new $e(.2,.05,.05)],yellow:[new $e(1,.72,.1),new $e(.2,.16,.05)],green:[new $e(.2,1,.45),new $e(.05,.17,.08)]};function xp(n,e){let t=[];for(let c of zn)for(let M of zn)t.push({id:c+","+M,x:c,z:M,offset:((c*7+M*3)%Gr+Gr)%Gr});let i=[[-6.1,-6.1,Math.PI,"z"],[6.1,6.1,0,"z"],[-6.1,6.1,-Math.PI/2,"x"],[6.1,-6.1,Math.PI/2,"x"]],s=t.length*i.length,r=new Nn(new Un(.07,.08,3.3,8),new en({color:3093555,roughness:.6}),s),o=new Nn(new ln(.34,.95,.26),new en({color:1909024,roughness:.7}),s),a=new Nn(new Un(.105,.105,.06,12),new $t({color:16777215}),s*3),u=new Vt,l=[],f=0;for(let c of t)for(let[M,x,_,A]of i){let R=c.x+M,b=c.z+x;u.position.set(R,1.65+.16,b),u.rotation.set(0,_,0),u.scale.set(1,1,1),u.updateMatrix(),r.setMatrixAt(f,u.matrix),u.position.set(R,3.25+.16,b),u.updateMatrix(),o.setMatrixAt(f,u.matrix),["red","yellow","green"].forEach((E,S)=>{u.position.set(R+Math.sin(_)*.14,3.25+.16+.29-S*.29,b+Math.cos(_)*.14),u.rotation.set(Math.PI/2,_,0,"YXZ"),u.updateMatrix(),a.setMatrixAt(f*3+S,u.matrix),l.push({junction:c,axis:A,color:E,state:""})}),e.push({x:R,z:b,w:.2,d:.2,h:3.5,signal:!0}),f++}r.castShadow=o.castShadow=!0,n.add(r,o,a);let d=new Map(t.map(c=>[c.id,c])),m=0;function p(c){m+=c;let M=!1;l.forEach((x,_)=>{let R=gp(m,x.junction.offset,x.axis)===x.color,b=R?"on":"off";x.state!==b&&(x.state=b,a.setColorAt(_,zv[x.color][R?0:1]),M=!0)}),M&&a.instanceColor&&(a.instanceColor.needsUpdate=!0)}return p(0),{update:p,state(c,M){let x=d.get(c);return x?gp(m,x.offset,M):"green"},reset(){m=0,p(0)}}}var vc=473021;function Sn(){return vc=Math.imul(1664525,vc)+1013904223>>>0,vc/4294967296}var Xs=n=>n[Math.floor(Sn()*n.length)];function _p(n){vc=473021,n.background=new $e(15316107),n.fog=new Mo(15316107,.0068),n.add(new Uo(15266035,7890017,2.3));let e=new Oo(16763540,3);e.position.set(-45,48,-32),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),e.shadow.bias=-35e-5,e.shadow.normalBias=.12,e.shadow.mapSize.set(2048,2048),e.shadow.autoUpdate=!1,n.add(e);let t=new Tt(new fs(330,32,16),new Xn({side:bn,depthWrite:!1,uniforms:{sun:{value:new Y(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));t.frustumCulled=!1,t.renderOrder=-100,n.add(t);let i=[],s=[],r=[],o=[],a={},u={box:new ln,foliage:new Yi(1,1),pole:new Un(.8,1,1,8),hill:new fs(1,14,9),prism:Ov()},l=new Vt;function f(G,k,W,U,j,$,K,ge,Z,fe=0,Ee=0){let Te=k===0&&U===0?"center":Math.round(k/31)+","+Math.round(U/31),Me=G+":"+!!Z+":"+Te,Xe=a[Me]??={shape:G,shadow:!!Z,items:[]};l.position.set(k,W,U),l.scale.set(j,$,K),l.rotation.set(Ee,fe,0,"YXZ"),l.updateMatrix(),Xe.items.push({matrix:l.matrix.clone(),color:new $e(ge)})}function d(G,k,W,U,j,$,K,ge=!1,Z=0,fe=0,Ee="box"){f(Ee,G,k,W,U,j,$,K,ge,Z,fe)}function m(G,k,W,U,j,$,K){d(G,k,W,U,j,$,K,!0),i.push({x:G,z:W,w:U,d:$,y0:k-j/2,h:k+j/2})}let p=mp(n,i,kn);function c(G,k,W=!1){p.add(W?"palm":"tree",G,k,Sn()*6.28,.82+Sn()*.36,{w:.45,d:.45,h:3.6})}function M(G,k,W,U,j,$=1784375,K=4.2,ge=.65){let Z=document.createElement("canvas");Z.width=512,Z.height=115;let fe=Z.getContext("2d");fe.fillStyle="#e9d4a0",fe.fillRect(0,0,512,115),fe.strokeStyle="#645a47",fe.lineWidth=6,fe.strokeRect(7,7,498,101),fe.font="900 50px system-ui",fe.textAlign="center",fe.textBaseline="middle",fe.fillStyle="#"+$.toString(16).padStart(6,"0"),fe.fillText(G,256,57,470);let Ee=new Ds(Z);Ee.colorSpace=un;let Te=new Tt(new Wn(K,ge),new $t({map:Ee}));Te.position.set(k,W,U),Te.rotation.y=j,n.add(Te)}let x=new Lt;n.add(x);let _=[],A=new Wn,R=new en({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:En});function b(G,k,W,U,j,$){let K=new Tt(A,R);K.position.set(G,k,W),K.scale.set(U,j,1),K.rotation.y=$,n.add(K)}let E={box:d,solid:i,door:S,sign:M,glazing:b,support:s,volume:r};function S(G,k,W,U,j,$=.228,K={}){let ge=new Lt,Z=K.id??"door-"+_.length;ge.position.set(G,$,k);let fe=yt(ge,"box",j,U*.5,1.088,0,U-.045,2.147,.074);fe.castShadow=!1;let Ee=yt(ge,"box",10191979,U*.5,1.47,-.04,U*.64,.56,.013);Ee.castShadow=!1;for(let je of[-1,1])yt(ge,"box",10191195,U-.14,.99,je*.046,.11,.13,.035).castShadow=!1,yt(ge,"box",12691318,U-.174,1.011,je*.073,.132,.042,.037).castShadow=!1;let Te=G+Math.cos(W)*U*.5,Me=k-Math.sin(W)*U*.5,Xe=K.normallyOpen?1.48:0;ge.rotation.y=W+Xe,n.add(ge);let Ye={x:Te,z:Me,w:Math.abs(Math.cos(W))*U+.083,d:Math.abs(Math.sin(W))*U+.083,y0:$,h:$+2.155,doorId:Z,buildingId:K.buildingId??null},Ke={door:ge,id:Z,x:Te,z:Me,base:$,angle:W,openAmount:Xe,opened:!!K.normallyOpen,breached:!1,private:!!K.private,normallyOpen:!!K.normallyOpen,hold:0,buildingId:K.buildingId??null,unitId:K.unitId??null,normalX:Math.sin(W),normalZ:Math.cos(W),handle:{x:G+Math.cos(W)*(U-.17),y:$+1.008,z:k-Math.sin(W)*(U-.17)},closedSolid:Ye};_.push(Ke);for(let je of[0,U])d(G+Math.cos(W)*je,$+1.09,k-Math.sin(W)*je,.105,2.18,.178,6640456,!1,W);return d(Te,$+2.185,Me,U+.12,.11,.178,6640456,!1,W),Ke}function g(){let{x:G,z:k}=Rn,W=13216391;m(G,2.08,k,12,3.84,10,W),d(G,.39,k+5.03,12.04,.46,.08,8484463),d(G,4,k,12.06,1.7,9.98,W,!0,0,0,"prism"),d(G,4.06,k,12,1.84,10.7,9393216,!0,0,0,"prism"),d(G+3.6,4.9,k-2.2,.55,1.9,.55,9402986,!0),d(G,1.38,k+5.05,1.42,2.42,.1,5195585),d(G,1.31,k+5.09,1.1,2.2,.06,6903110),d(G,.18,k+5.35,1.7,.14,.62,8484463),d(G,2.85,k+5.45,1.9,.12,.86,14270112,!0);for(let U of[-3.6,3.6]){d(G+U,2.03,k+5.04,2.08,1.43,.1,5195585),d(G+U,2.03,k+5.07,1.86,1.21,.06,5073522),d(G+U,1.22,k+5.16,2.2,.09,.2,14270112);for(let j of[-1,1])d(G+U+j*1.17,2.03,k+5.07,.34,1.27,.05,6257514)}M("CASA 38",G+1.6,1.62,k+5.13,0,4868146,.92,.22),m(G+9.6,1.6,k-.4,6,3.2,8,12558975),d(G+9.6,3.27,k-.4,6.3,.16,8.3,8280646,!0),d(G+9.6,1.32,k+3.62,4.4,2.5,.08,9278614);for(let U=.3;U<2.6;U+=.28)d(G+9.6,U,k+3.67,4.3,.025,.02,7304824);d(G+9.6,.173,k+8.6,4.8,.03,9.8,10262154),M("GARAGEM",G+9.6,2.85,k+3.68,0,3881523,1.4,.26)}function w(){let G=Ms.z;d(2,.169,G,19,.045,22,6908773),m(-7.18,2.03,G,7.35,3.68,19.56,8886169),d(-7.18,3.98,G,7.62,.23,19.8,5406866),d(-3.46,1.35,G,.12,2.32,1.7,4413028),d(-2.5,3.33,G,7.1,.25,19.5,5401719,!0),m(-1.5,1.42,G-9.72,5.4,2.54,.35,8229008),m(-1.5,1.42,G+9.72,5.4,2.54,.35,8229008);for(let W of[-9.5,9.5])m(1.04,1.65,G+W,.28,3,.31,8689042);d(1.1,2.88,G,.25,.42,19.54,5994626),M("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,G,Math.PI/2,2704468,7.2,.63);for(let W of[-8.2,-3.95,.3,4.55,8.8])d(8.15,.208,G+W,5.3,.016,.1,14537646);for(let W of[-6.1,-1.85,2.4])d(5.5,.208,G+W,.1,.016,3.25,14537646);for(let W of[-6.8,-3.4,3.4,6.8])d(-3.46,1.87,G+W,.08,1.4,2.25,5195585),d(-3.43,1.87,G+W,.05,1.18,2.05,3626589);d(-3.52,.21,G+3.1,.64,.08,2.45,6446161)}d(0,-.3,0,720,.1,720,8880242),d(0,-.18,0,132,.34,132,4605770);for(let G=0;G<1250;G++){let k=Sn()*130-65,W=Sn()*130-65;d(k,.001,W,.04+Sn()*.3,.007,.04+Sn()*.3,Xs([5460823,4934733,4473414,5855058]),!1,Sn()*6)}for(let G of zn)for(let k of vi){for(let W=-10;W<=10;W+=4)d(G,.014,k+W,.12,.015,1.82,14132838);for(let W of[-12.6,12.6])for(let U=-4.5;U<=4.5;U+=.9)d(G+U,.015,k+W,.45,.016,1.44,13156273)}for(let G of zn)for(let k of vi){for(let W=-10;W<=10;W+=4)d(k+W,.014,G,1.82,.015,.12,14132838);for(let W of[-12.6,12.6])for(let U=-4.5;U<=4.5;U+=.9)d(k+W,.015,G+U,1.44,.016,.45,13156273)}for(let G of vi)for(let k of vi){d(G,.067,k,27.1,.16,27.1,13022103),d(G,.125,k,26.7,.07,26.7,10721158);for(let W of[-12.25,12.25])for(let U=-12;U<=12;U+=2.1)d(G+W,.164,k+U,2.32,.008,.023,12956566),d(G+U,.164,k+W,.023,.008,2.32,12956566);if(G===Ms.x-2&&k===Ms.z)w();else if(G===Rn.x&&k===Rn.z)g();else if(G===0&&k===-38){for(let W of[-6,6]){d(G+W,.185,k,8.2,.08,19,7438938);for(let U of[-7,0,7])c(G+W,k+U,!0)}for(let W=-8;W<=8;W+=4)d(G,.177,k+W,3.1,.033,3.2,13218964);m(G,1.04,k-9.89,4.42,1.77,.18,9271651),M("PRA\xC7A DA BRASA",G,1.6,k-10,Math.PI)}else for(let W of[-1,1]){let U=G===0&&k===0&&W===1,j=o.filter(Ye=>Ye.id.startsWith("lot-")||Ye.id==="armory").length,$=j+10,K=U?"armory":j%5===1||j%5===3?"shop":j%5===0?"house":"apartments",ge=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],Z=U?"armory":$===13?"barber":$===18?"clothes":$===21?"black":K==="shop"?"store":null,Ee={barber:"BARBEARIA DO Z\xC9",clothes:"MODA BRASA",black:"PENHORES 24H"}[Z]??(K==="shop"?ge[Math.floor(j/2)%ge.length]:K==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(j/2)%6]:"CASA "+$),Te=Xs([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Me=hp(E,{id:U?"armory":"lot-"+$,kind:K,label:U?"LOJA DE ARMAS":Ee,x:G+W*(U?5.7:6.25),z:k+(U?-5.45:0),angle:W*Math.PI/2,w:U?11.35:(K==="house"?13.7:15.3)+Sn()*.57,d:U?9.36:9.38+Sn()*.25,color:Te,upperColor:Xs([12163192,10394757,12426376,11971991]),awning:Xs([7821376,6190959,10446933]),fabrics:Xs([7373431,8152675,9534300]),stories:j%3===0?3:2,doorAt:U?0:void 0,open:K==="house"&&j%3!==0});Me.service=Z,o.push(Me);let Xe=U?4.32:k+9.83;d(G+W*6.8,.168,Xe,8.3,.017,2.51,10919820);for(let Ye=-3.5;Ye<=3.5;Ye+=.7)d(G+W*6.8+Ye,.18,Xe,.022,.012,2.5,12169372)}for(let W of[-1,1]){let U=G+W*12.85,j=k-W*9.85;p.add("lamp",U,j,W>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),p.add("bench",G+W*9,k-W*12.5,W>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let $=G+W*10.1;p.add("bin",$,k-W*12.55,0,1,{w:.5,d:.5,h:.78}),p.add("bollard",$+.72,k-W*12.58,0,1,{w:.14,d:.14,h:.46}),G===Rn.x&&k===Rn.z&&W===1||c(G+W*9.4,k+W*12.6)}}for(let G of[-1,1])m(63.6,1.85,G*2.5,.15,3.7,.15,7362375);d(63.6,3.48,0,.16,.64,5.15,7362375),M("VILA DAS LAJES",63.51,3.48,0,-Math.PI/2,3232851,3.55,.56),d(84,-.055,0,44,.1,Yn.halfDepth*2,10063229);for(let G of[63.45,71,78,85,93,101])d(G,-.003,0,2.4,.012,94,10393225);for(let G of[-30,-20,-10,0,10,20,30,40])d(84,-.001,G,43.8,.014,3.2,11115405);for(let[G,k]of[67.5,74.5,81,89,97,104].entries())for(let[W,U]of[-44,-35,-25,-15,-5,5,15,25,35,44].entries()){if(G>=4&&U>=35||U===-5&&G<3)continue;let j=2.9+(G+W)%3*.85,$=[11890768,10652789,11363656,10063490][(W+G)%4];if(m(k,j/2,U,4.1,j,5.2,$),d(k,j+.08,U,4.3,.16,5.4,8683127),d(k-2.06,1.07,U-.8,.05,2.14,.88,5786688),d(k-2.07,1.64,U+1.15,.055,.88,1.2,5464677),(W+G)%2===0){d(k-2.32,2.28,U-.8,.56,.09,1.36,8162439);for(let K of[-.42,0,.42])d(k-2.11,1.64,U+1.15+K,.04,.88,.04,2702400)}W%2===0&&d(k,j+.55,U+1,1.3,.92,1.3,5334392)}let F=98,D=41;d(F,.022,D,6,.044,8,11971222),m(F,1.37,D-4,6.2,2.7,.18,11904388),m(F,1.37,D+4,6.2,2.7,.18,11904388),m(F+3,1.37,D,.18,2.7,8,11904388);for(let G of[-1,1])m(F-3,1.37,D+G*2.42,.18,2.7,3.16,11904388),m(F+G*1.76,1.37,D,2.42,2.7,.14,12891799),m(F,1.37,D+G*3.18,.14,2.7,1.62,12891799);m(F,2.77,D,6.18,.17,8.2,7828075),r.push({buildingId:"lajes-home",unitId:"lajes-home:0",x:F,z:D,w:5.8,d:7.8,floor:0,ceiling:2.68}),M("CASA",94.87,2.34,D,-Math.PI/2,3232851,.95,.28),m(96.1,.36,43.7,.85,.7,1.76,6912108),d(96.1,.75,43.7,.86,.09,1.7,12102280),m(99.7,.27,43.6,1.18,.51,1.91,8938317),d(99.7,.58,43.6,1.18,.13,1.88,13086100),d(99.7,.67,44.27,.92,.13,.39,15853006),m(96.4,.44,38.65,1.6,.86,.56,7239797),d(96.4,.9,38.65,1.64,.07,.61,12633269),d(100,.38,38.1,.59,.75,.63,14998731),d(99.1,.84,38.16,.62,.14,.44,14076597),d(42,.005,61,18,.018,7,7564899),m(43,.8,64,17,1.6,.16,6776155),m(50,.8,61,.16,1.6,6,6776155),M("FERRO-VELHO",44,2.3,63.83,Math.PI,3232851,4.3,.55);for(let G=0;G<52;G++){let k=G/52*Math.PI*2,W=118+Sn()*58,U=Xs([9670532,10525321,10001560,9212560]),j=Math.sin(k)*W,$=Math.cos(k)*W;f("hill",j,-1,$,12+Sn()*33,3+Sn()*22,10+Sn()*20,U,!1,k);let K=4+Sn()*16;d(j,K*.5-1,$,3+Sn()*9,K,4+Sn()*8,Xs([10194306,8949389,10128258]),!1)}p.finalize();let L=xp(n,i),V=new en({roughness:.88});for(let{shape:G,shadow:k,items:W}of Object.values(a)){let U=new Nn(u[G],V,W.length);W.forEach(({matrix:j,color:$},K)=>{U.setMatrixAt(K,j),U.setColorAt(K,$)}),U.castShadow=k,U.receiveShadow=!0,n.add(U)}let z=new Lt,B=new Tt(new Po(1.6,1.85,40),new $t({color:15794054,side:En,transparent:!0,opacity:.85,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=.26,z.add(B);let X=new Tt(new Zi(.43),new $t({color:15794054}));return X.position.y=2.8,z.add(X),n.add(z),{solid:i,marker:z,beacon:X,sun:e,sky:t,houseRoof:x,bed:jf,doors:_,buildings:o,props:p,signals:L,...fp(i,s,r,_,kn)}}function Ov(){let n=[-.5,0,-.5],e=[-.5,0,.5],t=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,e,t,i,r,s,n,r,i,n,t,r,e,r,t,e,s,r,n,s,e,n,i,s],a=new Kt;return a.setAttribute("position",new wt(o.flat(),3)),a.computeVertexNormals(),a}var Bv=n=>n===0?"gr\xE1tis":"R$ "+n.toLocaleString("pt-BR"),kv=n=>"#"+n.toString(16).padStart(6,"0");function yp(n,{balance:e,onClose:t}){let i=n.querySelector("#shop-title"),s=n.querySelector("#shop-detail"),r=n.querySelector("#shop-balance"),o=n.querySelector("#shop-list"),a=n.querySelector("#shop-status"),u=null,l=null;function f(m){let p=m?document.activeElement?.getAttribute("data-key"):null,c=l();u=c,i.textContent=c.title,s.textContent=c.note??"",r.textContent=e(),o.replaceChildren(),c.sections.forEach((_,A)=>{let R=document.createElement("h3");R.textContent=_.title,o.append(R),_.items.forEach((b,E)=>{let S=document.createElement("div");S.className="store-row"+(b.active?" active":"");let g=document.createElement("button");g.type="button",g.className="store-item",g.dataset.key=A+":"+E,g.disabled=!!b.disabled,g.innerHTML="";let w=document.createElement("span");w.textContent=b.label+(b.active?" \xB7 em uso":"");let F=document.createElement("b");if(F.textContent=b.price==null||b.disabled&&c.title==="Invent\xE1rio"?"":Bv(b.price),g.append(w,F),b.detail){let D=document.createElement("small");D.textContent=b.detail,g.append(D)}if(g.addEventListener("click",()=>d(b,void 0)),S.append(g),b.colors){let D=document.createElement("div");D.className="swatches",b.colors.forEach((L,V)=>{let z=document.createElement("button");z.type="button",z.className="swatch",z.style.background=kv(L),z.dataset.key=A+":"+E+":"+V,z.setAttribute("aria-label",b.label+", cor "+(V+1)),z.disabled=!!b.disabled,z.addEventListener("click",()=>d(b,L)),D.append(z)}),S.append(D)}o.append(S)})}),((p?o.querySelector('[data-key="'+p+'"]'):null)??o.querySelector("button:not(:disabled)"))?.focus({preventScroll:!1})}function d(m,p){let c=m.buy(p);a.textContent=c??"Pronto!",a.classList.toggle("error",!!c),f(!0)}return{show(m){l=m,a.textContent="",f(!1),n.open||n.showModal()},close(){n.open&&n.close(),u=null,t()},move(m){let p=[...n.querySelectorAll("button:not(:disabled)")];if(!p.length)return;let c=p.indexOf(document.activeElement),M=p[(c+m+p.length)%p.length];M.focus(),M.scrollIntoView({block:"nearest"})},activate(){let m=document.activeElement;m&&n.contains(m)&&m.click()},refresh(){u&&f(!0)}}}var Vr={sedan:{name:"Brasa",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[11422e3,4362871,13084242,5795484,9063749,14209732,3093558]},hatch:{name:"Pulga",category:"dia a dia",length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[.38,.18],[-.38,.18],[.38,-.86],[-.38,-.86]],doors:4,handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[14783826,6989496,14209732,11876922,9416794]},wagon:{name:"Perua",category:"dia a dia",length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3,cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[.42,.1],[-.42,.1],[.42,-1],[-.42,-1]],doors:4,handling:{top:26,accel:14,grip:8,mass:1.18},palette:[9799551,5143689,8219215,13023648],extras:["roofRack"]},taxi:{name:"T\xE1xi",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[15254855],extras:["taxi"]},pickup:{name:"Picape",category:"utilit\xE1rio",length:5.3,width:2,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[.44,-.02],[-.44,-.02]],doors:2,handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[7043674,9056042,14012354,3100527,3815994],extras:["bed"]},van:{name:"Furg\xE3o",category:"utilit\xE1rio",length:5.15,width:2,sill:.55,belt:1.06,roof:2,wheel:.41,wheelbase:3.15,cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[.45,.85],[-.45,.85]],doors:2,handling:{top:22,accel:11,grip:7,mass:1.6},palette:[15131350,10467269,13218682,7110499],extras:["box"]},suv:{name:"Jip\xE3o",category:"luxo / utilit\xE1rio",length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[.45,.05],[-.45,.05],[.45,-1],[-.45,-1]],doors:4,handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[2042416,14276303,6044462,3758922],extras:["roofRack","chrome"]},sport:{name:"Fa\xEDsca",category:"esportivo",length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[.4,-.28],[-.4,-.28]],doors:2,handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[14236459,15909424,3108822,16052714,2500907],extras:["spoiler"]},muscle:{name:"Trov\xE3o",category:"esportivo",length:4.95,width:2,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,cabin:{base:[-1.3,.5],top:[-1,-.02]},seats:[[.42,-.45],[-.42,-.45]],doors:2,handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[1908514,8199967,13855274,2972991],extras:["scoop","stripes"]},luxury:{name:"Imperador",category:"luxo",length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[.44,.12],[-.44,.12],[.44,-1.08],[-.44,-1.08]],doors:4,handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[1316376,15065818,3882821,4858664],extras:["chrome"]},convertible:{name:"Brisa",category:"luxo / esportivo",length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[.4,-.12],[-.4,-.12],[.4,-1],[-.4,-1]],doors:2,open:!0,handling:{top:34,accel:19,grip:9,mass:1.05},palette:[9425384,15328208,11872828,1851246],extras:["chrome"]}},vp={street:{name:"Rua",handling:{top:31,accel:19.7,grip:13.5,mass:.39}},sport:{name:"Raio",handling:{top:40,accel:24,grip:14.5,mass:.36}},chopper:{name:"Estradeira",handling:{top:29,accel:15,grip:12,mass:.45}},scooter:{name:"Mobilete",handling:{top:19,accel:10,grip:13,mass:.28}}};for(let[n,e]of Object.entries(Vr))op("car:"+n,{width:e.width/2+.02,length:e.length/2+.01,radius:e.width/2-0,offsets:[-(e.length/2-e.width/2),0,e.length/2-e.width/2],mass:e.handling.mass});var Gv=new en({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:En,transparent:!0,opacity:.5,depthWrite:!1});function Hr(n,e="sedan",t,i=!1){let s=e==="tow"?{...Vr.pickup,name:"Guincho",extras:["bed","tow"]}:Vr[e]??Vr.sedan,r=t??s.palette[0],{length:o,width:a,sill:u,belt:l,roof:f,wheel:d,wheelbase:m}=s,p=o/2,c=s.extras??[],[M,x]=s.cabin.base,[_,A]=s.cabin.top,R=new Lt;gc(R,a/2+.17,p+.07);let b=new Lt;R.add(b);let E=(K,ge,Z,fe,Ee,Te,Me,Xe,Ye=!1)=>yt(b,K,ge,Z,fe,Ee,Te,Me,Xe,Ye),S=c.includes("chrome");E("box",2435629,0,(d*.32+u+.06)/2,0,a-.44,u+.06-d*.32,o-.9);for(let K of[-1,1])E("box",2830387,K*(a/2-.07),u-.06,0,.12,.22,Math.max(.4,m-2*d-.12));E("box",3749689,0,u,0,a-.44,.075,o-.35);for(let K of[-1,1]){for(let[ge,Z]of[[-p,-m/2-d],[-m/2+d,m/2-d],[m/2+d,p]])Z>ge&&E("box",r,K*(a/2-.055),(u+l)/2,(ge+Z)/2,.11,l-u,Z-ge,!0);for(let ge of[-m/2,m/2]){let Z=Math.min(l-.05,2*d+.03);E("box",r,K*(a/2-.055),(Z+l)/2,ge,.11,l-Z,2*d,!0)}}for(let K of[-1,1])E("box",r,0,(u+l)/2,K*(p-.09),a-.04,l-u,.18,!0);let g=p-x-.03,w=E("box",r,0,l+.005,(x+p)/2,a-.04,.15,g,!0);!c.includes("bed")&&!c.includes("box")&&p+M>.25&&E("box",r,0,l-.005,(M-p)/2,a-.05,.14,p+M-.02,!0);let F=a/2-.07,D=a/2-.27,L=Gv.clone(),V;if(s.open){let K=new Kt;K.setAttribute("position",new wt([-F,l,x,F,l,x,D,f,A,-D,f,A],3)),K.setIndex([0,1,2,0,2,3]),K.computeVertexNormals(),V=new Tt(K,L),E("box",2895665,0,f,A,a-.5,.06,.07)}else{let K=new Kt;K.setAttribute("position",new wt([-F,l-.015,M,F,l-.015,M,F,l-.015,x,-F,l-.015,x,-D,f,_,D,f,_,D,f,A,-D,f,A],3)),K.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),K.computeVertexNormals(),V=new Tt(K,L),E("box",r,0,f+.035,(_+A)/2,D*2+.02,.07,A-_+.08,!0);let ge=(Z,fe,Ee)=>{let Te=f-l,Me=fe-Z;for(let Xe of[-1,1])E("box",r,Xe*(F+D)/2,(l+f)/2,(Z+fe)/2,.08,Math.hypot(Te,Me),Ee,!0).rotation.x=Math.atan2(Me,Te)};if(ge(x,A,.08),ge(M,_,.12),s.doors===4){let Z=(s.seats[0][1]+s.seats[2][1])/2+.12;for(let fe of[-1,1])E("box",r,fe*(F+D)/2,(l+f)/2,Z,.08,f-l,.1,!0)}}V.renderOrder=2,b.add(V);let z=Math.min(l-.26,f-.99),B=Math.min(.62,f-l-.02+.3);for(let[K,ge]of s.seats)E("cloth",3486512,K,z+.06+B,ge-.235,.31,.16,.14),E("cloth",3815219,K,z-.1,ge+.12,.51,.14,.54),E("box",3815219,K,z+B/2,ge-.235,.5,B,.13);E("box",2828840,0,l+.045,x-.24,a-.26,.14,.34);let X=E("cylinder",1907997,s.seats[0][0],l+.07,s.seats[0][1]+.42,.17,.03,.17);X.rotation.x=Math.PI/2-.45,E("cloth",2106922,0,z+.02,(M+x)*.5,.19,.23,Math.min(1.25,x-M));for(let K of[-1,1])E("box",6643286,K*(a/2-.15),(u+l)/2,(M+x)/2,.08,.085,x-M),E("box",11951652,K*(a*.5-.13),l-.205,p+.006,.12,.064,.032,!0),E("box",12959664,K*(a*.5-.26),u-.07,-p-.036,.12,.076,.09,!0);E("cloth",2435629,0,l-.21,p+.009,a*.41,.13,.026);for(let K=0;K<3;K++)E("box",7630694,0,l-.25+K*.04,p+.026,a*.36,.013,.014,!0);E("box",3355961,0,l-.24,p+.004,a*.44,.14,.05),E("box",13156268,0,u+.035,p+.006,a*.98,.1,.045,!0),E("box",13156268,0,u+.025,-p-.006,a*.98,.1,.05,!0),E("box",16707771,0,(u+l)/2,-p-.008,.4,.14,.03);for(let K of[-1,1]){E("box",16769956,K*(a/2-.29),l-.165,p+.006,.43,.17,.055,!0),E("box",11021858,K*(a/2-.3),l-.165,-p-.006,.48,.17,.055,!0),s.open||E("box",2898236,K*(a/2+.03),l+.07,x-.06,.1,.09,.16);let ge=s.doors===4?[x,(s.seats[0][1]+s.seats[2][1])/2+.12,M+.05]:[x,s.seats[0][1]-.62];for(let Z of ge)E("box",1843234,K*(a/2+.005),(u+l)/2,Z,.012,l-u-.02,.025);for(let Z=0;Z<ge.length-1;Z++)E("box",13089700,K*(a/2+.01),l-.05,ge[Z+1]+Math.min(.21,(ge[Z]-ge[Z+1])*.25),.035,.04,.22,!0);S&&E("box",14277074,K*(a/2+.008),l-.03,0,.02,.03,o-.5,!0)}if(c.includes("taxi")&&(E("box",16249304,0,f+.16,(_+A)/2,.68,.2,.26),E("box",2779715,0,(u+l)/2+.06,0,a+.012,.08,o*.6,!0)),c.includes("spoiler")){for(let K of[-1,1])E("box",1776670,K*.6,l+.14,-p+.28,.06,.22,.08);E("box",r,0,l+.27,-p+.25,a-.2,.05,.32,!0)}if(c.includes("scoop")&&E("box",2105892,0,l+.12,(x+p)/2+.1,.5,.12,.62),c.includes("stripes"))for(let K of[-1,1])E("box",15855590,K*.2,l+.083,(x+p)/2,.16,.012,g),E("box",15855590,K*.2,f+.072,(_+A)/2,.16,.012,A-_);if(c.includes("roofRack"))for(let K of[-1,1])E("box",2500907,K*(D-.08),f+.1,(_+A)/2,.05,.06,A-_+.2);if(c.includes("tow")){let K=E("box",4539969,0,l+.35,-o*.3,.135,.16,1.55,!0);K.rotation.x=-.32,E("box",3553336,0,l+.18,-o*.34,.73,.51,.35),E("box",15047465,0,f+.1,(_+A)/2,.68,.13,.28,!0),E("box",6776928,0,l-.17,-p-.19,.91,.13,.33,!0)}if(c.includes("bed")){for(let K of[-1,1])E("box",r,K*(a/2-.04),l+.22,(M-p)/2,.08,.44,p+M,!0);E("box",r,0,l+.22,-p+.04,a,.44,.08,!0),E("box",r,0,l+.22,M-.04,a,.44,.08,!0),E("box",2960169,0,l+.01,(M-p)/2,a-.16,.02,p+M-.12)}if(c.includes("box")){E("box",r,0,(l+2.15)/2,(M+.25-p)/2,a,2.15-l,p+M+.25,!0),E("box",2763306,0,2.15-.05,(M+.25-p)/2,a+.02,.04,p+M+.27);for(let K of[-1,1])E("box",1843234,K*.005,(l+2.1)/2,-p-.004,.015,2-l,.02)}let G=[];for(let K of[-1,1])for(let ge of[-m/2,m/2]){let Z=new Lt;Z.position.set(K*(a/2-.17),d,ge),R.add(Z),yt(Z,"cylinder",2434600,0,0,0,d,.24,d).rotation.z=Math.PI/2,yt(Z,"cylinder",S?14013903:11052964,K*.115,0,0,d*.53,.02,d*.53,!0).rotation.z=Math.PI/2,G.push(Z)}let k=new Lt,W=s.doors===4?(s.seats[0][1]+s.seats[2][1])/2+.12:s.seats[0][1]-.62;k.position.set(a/2+.004,0,x),yt(k,"box",r,0,(u+l)/2+.04,-(x-W)/2,.036,l-u-.1,x-W,!0),Mi(k,ji(k),mc),b.add(k);let U=[1,-1].map(K=>{let ge=new Lt;return ge.position.set(0,u-.09,K*(p-.2)),yt(ge,"box",S?13619144:2830387,0,0,0,a-.08,.3,.42,S),Mi(ge,ji(ge),S?mc:void 0),b.add(ge),{mesh:ge,end:K,state:0,home:ge.position.clone(),damage:0,velocity:new Y,spin:0}}),j=[];i&&(j.push(E("box",15550262,-.33,f+.13,(_+A)/2,.55,.14,.25)),j.push(E("box",5487086,.33,f+.13,(_+A)/2,.55,.14,.25)));let $=ji(b).filter(K=>K!==V&&K!==w&&!j.includes(K));Mi(b,$.filter(K=>K.material.metalness===0)),Mi(b,$.filter(K=>K.material.metalness>0),mc);for(let K of G)Mi(K,ji(K));return b.traverse(K=>{K instanceof Tt&&(K.castShadow=!1)}),n.add(R),wp({root:R,body:b,cabin:V,cracks:[],wheels:G,lamps:j,hood:w,bumpers:U,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"car",model:e,shape:e==="tow"?"car:pickup":"car:"+e,spec:s,color:r,handling:s.handling,rider:null,door:k,doorTime:0,wheelSpin:0,handlebar:null,wheelRadius:d,wheelbase:m,halfWidth:a/2,halfLength:p,seatHip:z,flat:[!1,!1,!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}function wp(n){let e=n;return e.repair=()=>Vv(e),e}var Mp=new en({color:2038810,roughness:1,metalness:.05});function Tp(n){n.originals??=new Map,n.root.traverse(e=>{!(e instanceof Tt)||e===n.cabin||e.material===Mp||e.parent===n.root&&e.geometry.type==="CircleGeometry"||(n.originals.set(e,e.material),e.material=Mp)}),n.cabin&&(n.cabin.visible=!1);for(let e of n.cracks)e.visible=!1}function Vv(n){n.flat?.fill(!1);for(let[e,t]of n.originals??[])e.material=t;n.originals?.clear(),n.cabin&&(n.cabin.visible=!0);for(let e of n.bumpers??[])n.body.add(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.state=0,e.damage=0;Object.assign(n,{damageFront:0,damageRear:0,burning:!1,wrecked:!1,fire:0,wreckClock:0})}function Mc(n,e,t="street"){let i=vp[t]??vp.street,s=new Lt;gc(s,.42,1.07*1.07);let r=new Lt;s.add(r);let o=(p,c,M,x,_,A,R,b)=>yt(r,p,c,M,x,_,A,R,b),a=t==="scooter"?.25:t==="chopper"?.36:.33,u=t==="chopper"?[-.86,.98]:t==="scooter"?[-.62,.66]:[-.73,.78];t==="scooter"?(o("box",e,0,.42,-.25,.38,.34,.8),o("box",2763821,0,.34,.2,.36,.08,.55),o("box",e,0,.72,.52,.34,.68,.16),o("box",2369834,0,.78,-.32,.34,.12,.55),o("box",13940106,0,.92,.66,.22,.14,.08)):t==="chopper"?(o("box",3882300,0,.46,-.1,.3,.34,.7),o("sphere",e,0,.86,.32,.22,.18,.5),o("box",2369834,0,.68,-.42,.38,.1,.62),o("box",e,0,.62,-.86,.3,.16,.5),o("box",14079696,.22,.34,-.42,.1,.1,.95),o("box",13940106,0,.9,1.02,.22,.2,.1)):(o("box",3882300,0,.48,-.04,.32,.38,.7),o("sphere",e,0,.89,.34,.24,.23,.46),o("box",2369834,0,.85,-.36,.36,.13,.59),o("box",e,0,.65,-.7,.32,.17,.58),o("box",13940106,0,.8,.88,.25,.21,.11),t==="sport"&&(o("box",e,0,.72,.62,.42,.5,.5),o("box",2902871,0,1.04,.72,.34,.18,.06),o("box",e,0,.8,-.72,.28,.12,.5))),o("box",10433836,0,.7,u[0]-.25,.2,.11,.11);for(let p of[-1,1]){let c=o("box",3817536,p*.27,1.28,.47,.035,.22,.035);c.rotation.z=-p*.4,o("cloth",4343880,p*.32,1.39,.47,.17,.078,.056),o("box",11630140,p*.19,.76,u[0]-.17,.11,.073,.08)}let l=new Lt;l.position.set(0,.76,.38),yt(l,"box",3949122,0,.44,-.09,t==="chopper"?.84:.684,.057,.059),yt(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,Mi(l,ji(l)),r.add(l),o("box",5461330,0,.39,-.22,.52,.07,.11),t!=="scooter"&&o("box",11578016,.232,.36,-.54,.12,.12,.72);let f=new Tt(new ln(.01,.01,.01));f.visible=!1,r.add(f);let d=[];for(let p of u){let c=new Lt;c.position.set(0,a,p),yt(c,"cylinder",2434601,0,0,0,a,.12,a).rotation.z=Math.PI/2,yt(c,"cylinder",8750213,0,0,0,a*.62,.14,a*.62).rotation.z=Math.PI/2,Mi(c,ji(c)),d.push(c),r.add(c);let M=p>0?t==="chopper"?-.62:-.21:.46;o("box",5988704,0,a+.22,p+(t==="chopper"&&p>0?-.18:0),.09,t==="chopper"&&p>0?.8:.49,.085).rotation.x=M}Mi(r,ji(r).filter(p=>p!==f));let m=new Lt;return n.add(s),wp({root:s,body:r,cabin:null,cracks:[],wheels:d,lamps:[],hood:f,bumpers:[],speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"bike",model:t,shape:"bike",spec:i,color:e,handling:i.handling,rider:null,door:m,doorTime:0,wheelSpin:0,handlebar:l,wheelRadius:a,wheelbase:u[1]-u[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}var Hv=new Y,Wv=new on;function Ap(n,e,t){let i=e.spec.seats?.[t]??e.spec.seats?.[e.spec.seats.length-1];if(!i)return;let[s,r]=i,[o,a]=e.spec.cabin.top,u=e.spec.open?r:Math.max(o+.07,Math.min(a-.03,r)),l=n.root.scale.y||1;e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(Hv.set(s,Math.min(e.seatHip,e.spec.roof-1.02*l)-.94*l,u))),n.root.quaternion.copy(e.body.getWorldQuaternion(Wv)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.rifle&&(n.rifle.visible=!1);let f=e.spec.roof-e.seatHip<1.05;n.body.position.set(0,0,0),n.body.rotation.set(-.12,0,0);for(let d=0;d<2;d++)n.legs[d].rotation.set(f?-1.52:-1.44,0,0),n.shins[d].rotation.set(f?1.04:1.26,0,0),t===0?(n.arms[d].rotation.set(-.62,0,(d?-1:1)*.18),n.forearms[d].rotation.set(-.85,0,0)):(n.arms[d].rotation.set(-.32,0,(d?-1:1)*.08),n.forearms[d].rotation.set(-1.05,0,0))}var bp=null,Xv=new Wn(.28,.28),oa=new Y,Sp=new Y,aa=new Y;function qv(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="rgba(235,242,240,.9)",e.lineWidth=1.6,e.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;e.moveTo(64,64);for(let r=1;r<=4;r++)e.lineTo(64+Math.cos(s+Math.sin(r*3.1+i)*.12)*r*14,64+Math.sin(s+Math.cos(r*2.3+i)*.12)*r*14)}for(let i of[9,20,33]){e.moveTo(64+i,64);for(let s=1;s<=24;s++)e.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}e.stroke(),e.fillStyle="rgba(250,250,245,.95)",e.beginPath(),e.arc(64,64,3.2,0,Math.PI*2),e.fill();let t=new Ds(n);return t.colorSpace=un,new $t({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:En})}function xu(n,e){if(!n.cabin||!e)return;bp??=qv(),n.root.updateMatrixWorld(!0),aa.set(e[0],e[1],e[2]),n.body.worldToLocal(aa);let[t,i]=n.spec.cabin.top;Sp.set(0,(n.spec.belt+n.spec.roof)/2,(t+i)/2),oa.subVectors(aa,Sp),oa.y*=.35,oa.normalize();let s=new Tt(Xv,bp);s.position.copy(aa).addScaledVector(oa,.015),s.lookAt(aa.clone().add(oa)),s.rotation.z=Math.random()*Math.PI*2,s.renderOrder=3,n.body.add(s),n.cracks.push(s),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function Ep(n){let{belt:e,roof:t,width:i,cabin:s}=n.spec,r=Math.min(s.base[0],s.top[0]),o=Math.max(s.base[1],s.top[1]);return{z:(r+o)/2,halfZ:(o-r)/2,y:(e+t)/2+.02,halfY:(t-e)/2,halfX:i/2-.1}}function di(n,e,t=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,u=0,l=0,f=n.wheels.map(b=>{let{x:E,z:S}=b.position,g=kn(n.x+E*s+S*i,n.z-E*i+S*s);return S>0?o+=g:a+=g,E<0?u+=g:l+=g,g}),d=(o+a)/n.wheels.length;n.root.rotation.y=n.angle;let m=n.flat??[],p=r?0:((m[0]||m[2]?1:0)-(m[1]||m[3]?1:0))*.05;n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),n.wheelbase??2.64);let c=r?n.integrity<=0?1.25:-t*Math.min(.53,Math.abs(n.speed)*.039):t*Math.min(.09,Math.abs(n.speed)*.004),M=r?0:Math.atan2((l-u)*.5,(n.halfWidth??.97)*2)+p;n.body.rotation.z+=(c+M-n.body.rotation.z)*(e>0?Math.min(1,e*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-e),n.door.rotation.y=(r?1:-1)*Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let x=n.wheelRadius??.408,_=r?n.body.rotation.z:0;n.root.position.set(n.x,d+(r?Math.abs(Math.sin(_))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=t*.22),n.wheelSpin=(n.wheelSpin+n.speed*e/x)%(Math.PI*2),n.wheels.forEach((b,E)=>{let S=m[E];r||(b.position.y=f[E]-d+x-(S?x*.28:0)),b.scale.set(1,S?.72:1,S?1.12:1),b.rotation.set(n.wheelSpin,b.position.z>0?t*(r?.22:.23):0,0,"YXZ")});let A=100-n.integrity;n.hood.rotation.x=A*.0031+(n.damageFront>30?.18:0),n.hood.rotation.z=A*.0013;let R=n.hoodSize??(n.hoodSize=n.hood.scale.clone());n.hood.scale.set(R.x,R.y*(1+Math.min(.6,(n.damageFront??0)*.012)),R.z*(1-Math.min(.12,(n.damageFront??0)*.002)));for(let b of n.bumpers??[])b.state===1&&(b.mesh.rotation.x=b.end*.32,b.mesh.position.y=b.home.y-.12)}var Yv=`
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
  }`,Zv=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;function Cp(n,e,t){let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3),u=new Float32Array(e),l=new Float32Array(e),f=new Float32Array(e),d=new Float32Array(e),m=new Float32Array(e),p=new Float32Array(e),c=new Float32Array(e),M=new Kt;M.setAttribute("position",new tn(i,3)),M.setAttribute("tint",new tn(s,3)),M.setAttribute("size",new tn(r,1)),M.setAttribute("alpha",new tn(o,1));let x=new Xn({vertexShader:Yv,fragmentShader:Zv,transparent:!0,depthWrite:!1,blending:t?Bo:_s,uniforms:{scale:{value:520}}}),_=new Ao(M,x);_.frustumCulled=!1,_.visible=!1,_.renderOrder=4,n.add(_);let A=0;function R(S,g,w,F,D,L,V,z,B,X,G,k=0,W=0){let U=A;A=(A+1)%e,i[U*3]=S,i[U*3+1]=g,i[U*3+2]=w,a[U*3]=F,a[U*3+1]=D,a[U*3+2]=L,s[U*3]=G.r,s[U*3+1]=G.g,s[U*3+2]=G.b,u[U]=V,l[U]=V,f[U]=z,d[U]=B,m[U]=X,p[U]=k,c[U]=W,r[U]=z,o[U]=X,_.visible=!0}function b(S){let g=!1;for(let w=0;w<e;w++){if(u[w]<=0){o[w]!==0&&(o[w]=0,r[w]=0,g=!0);continue}g=!0,u[w]-=S;let F=Math.exp(-c[w]*S);a[w*3]*=F,a[w*3+2]*=F,a[w*3+1]=a[w*3+1]*F+p[w]*S,i[w*3]+=a[w*3]*S,i[w*3+1]+=a[w*3+1]*S,i[w*3+2]+=a[w*3+2]*S,p[w]<0&&i[w*3+1]<.05&&(i[w*3+1]=.05,a[w*3+1]*=-.3);let D=1-Math.max(0,u[w])/l[w];r[w]=f[w]+(d[w]-f[w])*D,o[w]=m[w]*(1-D)*(D<.12?D/.12:1)}if(g)for(let w of["position","size","alpha","tint"])M.attributes[w].needsUpdate=!0;_.visible=g}function E(){u.fill(0),o.fill(0),r.fill(0),M.attributes.alpha.needsUpdate=!0,_.visible=!1}return{spawn:R,update:b,clear:E,material:x}}function Rp(n){let e=Cp(n,700,!1),t=Cp(n,600,!0),i=new $e,s=(f,d)=>f+Math.random()*(d-f),r=320,o=new Nn(new Wn(1,1),new $t({color:1315860,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),r);o.frustumCulled=!1,o.renderOrder=1;let a=new St().makeScale(0,0,0);for(let f=0;f<r;f++)o.setMatrixAt(f,a);n.add(o);let u=0,l=new Vt;return{update(f){e.update(f),t.update(f)},clear(){e.clear(),t.clear();for(let f=0;f<r;f++)o.setMatrixAt(f,a);o.instanceMatrix.needsUpdate=!0},setScale(f){e.material.uniforms.scale.value=f,t.material.uniforms.scale.value=f},engineSmoke(f,d,m,p){i.setRGB(p?.16:.5,p?.15:.48,p?.14:.45),e.spawn(f+s(-.2,.2),d,m+s(-.2,.2),s(-.3,.3),s(.9,1.5),s(-.3,.3),s(1.6,2.4),.5,p?2.4:1.8,p?.5:.32,i,0,.6)},tireSmoke(f,d,m){i.setRGB(.78,.76,.72),e.spawn(f,d,m,s(-.6,.6),s(.3,.8),s(-.6,.6),s(.8,1.3),.4,1.6,.3,i,0,1.4)},sparks(f,d,m,p=12,c=4){for(let M=0;M<p;M++)i.setRGB(1,s(.55,.85),s(.15,.35)),t.spawn(f,d,m,s(-c,c),s(.5,c*.9),s(-c,c),s(.18,.45),.09,.03,1,i,-9.8,.4)},flame(f,d,m,p=1){i.setRGB(1,s(.35,.6),.08),t.spawn(f+s(-.35,.35)*p,d,m+s(-.35,.35)*p,s(-.2,.2),s(1.4,2.4),s(-.2,.2),s(.4,.75),.75*p,.2,.85,i,0,.8),Math.random()<.45&&(i.setRGB(.13,.12,.11),e.spawn(f,d+.6,m,s(-.3,.3),s(1.2,2),s(-.3,.3),s(1.8,2.8),.7,2.8,.45,i,0,.5))},blood(f,d,m){i.setRGB(.48,.015,.025);for(let p=0;p<7;p++)e.spawn(f,d,m,s(-1.4,1.4),s(.6,2),s(-1.4,1.4),.34,.065,.025,.94,i,-9,.2)},explosion(f,d,m){i.setRGB(1,.9,.6),t.spawn(f,d+.6,m,0,0,0,.28,1.5,9,1,i);for(let p=0;p<46;p++){let c=Math.random()*Math.PI*2,M=s(.2,1),x=s(3,10);i.setRGB(1,s(.4,.75),s(.05,.2)),t.spawn(f,d+.5,m,Math.cos(c)*x*(1-M*.5),M*x,Math.sin(c)*x*(1-M*.5),s(.35,.8),s(.6,1.4),.2,.95,i,-2,1.5)}for(let p=0;p<30;p++){let c=Math.random()*Math.PI*2,M=s(1,4);i.setRGB(.1,.09,.085),e.spawn(f,d+.8,m,Math.cos(c)*M,s(1.5,4),Math.sin(c)*M,s(2.2,3.6),1.2,4.5,.7,i,0,.9)}this.sparks(f,d+.5,m,40,9)},skid(f,d,m,p,c=.012){let M=Math.hypot(m-f,p-d);M<.05||(l.position.set((f+m)/2,c+.013,(d+p)/2),l.rotation.set(-Math.PI/2,0,0),l.rotateZ(Math.atan2(m-f,p-d)),l.scale.set(.2,M+.04,1),l.updateMatrix(),o.setMatrixAt(u,l.matrix),u=(u+1)%r,o.instanceMatrix.needsUpdate=!0)}}}function bc(n,e,t,i){let s=Math.hypot(e,i),r=Math.sin(n.angle)*e+Math.cos(n.angle)*i,o=Math.cos(n.angle)*e-Math.sin(n.angle)*i;n.ragdoll={vx:e,vy:t,vz:i,y:n.ragdoll?.y??0,t:0,rest:0,rising:0,spinX:(r>=0?1:-1)*(2.5+s*.55),spinZ:-o*.35,tiltX:0,tiltZ:0},n.pushX=0,n.pushZ=0}function Sc(n,e,t,i){let s=n.ragdoll;if(!s)return!1;s.t+=e;let r=n.model,o=s.y>.02||Math.abs(s.vy)>.4,a=n.x+s.vx*e,u=n.z+s.vz*e;if(i(a,n.z)?s.vx*=-.35:n.x=a,i(n.x,u)?s.vz*=-.35:n.z=u,s.vy-=9.8*e,s.y+=s.vy*e,s.y<=0){s.y=0,s.vy=Math.abs(s.vy)>2.2?-s.vy*.28:0;let d=Math.exp(-e*6);s.vx*=d,s.vz*=d,s.spinX*=Math.exp(-e*7),s.spinZ*=Math.exp(-e*7)}s.tiltX+=s.spinX*e,s.tiltZ+=s.spinZ*e;let l=!o&&Math.hypot(s.vx,s.vz)<.5;if(l){let d=Math.round(s.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;s.tiltX+=(d-s.tiltX)*Math.min(1,e*8),s.tiltZ+=(0-s.tiltZ)*Math.min(1,e*6),s.rest+=e}let f=Math.sin(s.tiltX)>=0?1:-1;if(n.health>0&&s.rest>1.1){s.rising+=e/.65;let d=Math.min(1,s.rising),m=Math.sign(Math.sin(s.tiltX))||1;if(s.tiltX=m*Math.PI/2*(1-d),s.tiltZ*=1-d,d>=1)return n.ragdoll=null,r.root.rotation.set(0,n.angle,0),!1}if(r.root.rotation.set(s.tiltX,n.angle,s.tiltZ),r.root.position.set(n.x,t+s.y+Math.max(0,-Math.cos(s.tiltX)*Math.cos(s.tiltZ))*1.88+Math.hypot(Math.sin(s.tiltX),Math.sin(s.tiltZ))*.31,n.z),o||!l){let d=s.t*13;r.body.position.set(0,0,0),r.body.rotation.set(Math.sin(d*.7)*.25,0,Math.cos(d*.6)*.2),r.arms[0].rotation.set(-1.4+Math.sin(d)*1.1,0,-.6-Math.cos(d*.8)*.5),r.arms[1].rotation.set(-1.2+Math.cos(d*1.1)*1.1,0,.6+Math.sin(d*.9)*.5),r.forearms[0].rotation.set(-.4-Math.sin(d*1.3)*.5,0,0),r.forearms[1].rotation.set(-.4-Math.cos(d*1.2)*.5,0,0),r.legs[0].rotation.set(Math.sin(d*.9)*.9,0,-.2),r.legs[1].rotation.set(-Math.sin(d*.8)*.9,0,.2),r.shins[0].rotation.set(.4+Math.abs(Math.sin(d))*.6,0,0),r.shins[1].rotation.set(.4+Math.abs(Math.cos(d))*.6,0,0),r.pistol.visible=!1,r.rifle&&(r.rifle.visible=!1)}else ia(r,2,f);return r.shadow.visible=!1,!0}var Wr=2.05,wc=7.15;function Jv(n){let e=[];return n.forEach((t,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(t[0]-s[0]),a=Math.sign(t[1]-s[1]),u=Math.sign(r[0]-t[0]),l=Math.sign(r[1]-t[1]),f={x:t[0]-a*Wr-o*wc,z:t[1]+o*Wr-a*wc},d={x:t[0]-l*Wr+u*wc,z:t[1]+u*Wr+l*wc},m=o===u&&a===l,p={x:t[0]-(m?a:a+l)*Wr,z:t[1]+(m?o:o+u)*Wr},c={x:t[0],z:t[1],id:t.join(",")};for(let M=0;M<=6;M++){let x=M/6,_=1-x;e.push({x:_*_*f.x+2*_*x*p.x+x*x*d.x,z:_*_*f.z+2*_*x*p.z+x*x*d.z,junction:c,curve:!m,angle:Math.atan2(o,a)})}}),e}var qs=(n,e,t,i)=>[[n,e],[n,i],[t,i],[t,e]],Kv=[qs(-57,-57,57,57),qs(-57,-19,19,57).reverse(),qs(-19,-57,57,19),qs(-19,-19,19,19).reverse(),qs(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],qs(-57,-57,57,57).reverse(),qs(-19,-57,57,57).reverse()];function $v(n){return n.flatMap((e,t)=>{let i=n[(t+1)%n.length],s=e[0]===i[0]?1:0,r=1-s,o=zn.filter(a=>a>Math.min(e[s],i[s])&&a<Math.max(e[s],i[s]));return i[s]<e[s]&&o.reverse(),[e,...o.map(a=>r===0?[e[0],a]:[a,e[1]])]})}var jv=Kv.map(n=>Jv($v(n))),Qv=[1,3,1,1,5,5,7,10];function Xr(n,e,t=0){let i=jv[e],s=(Qv[e]*7+t)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;ii(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+e%4*1.02,stuck:0,routeIndex:e,pass:null},n.stolen=!1,n.abandoned=0}function qr(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=t*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:xt(s*1.9,-1,1),throttle:xt((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function _u(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=ws(n.shape??n.kind),a=n.kind==="bike",u=i;for(let l of e){if(l===n||re(l,n)>20)continue;let f=l.x-n.x,d=l.z-n.z,m=f*s+d*r,p=Math.abs(f*r-d*s),c=ws(l.shape??l.kind,l.angle-n.angle);if(m<.2||p>o.width+c.width+.16)continue;let M=Math.max(0,m-o.length-c.length-(a?.39:.64)),x=Math.max(0,l.vx*s+l.vz*r);u=Math.min(u,x+M*.87)}for(let l of t){if(l.down>0||l.health<=0||l.seated||re(l,n)>11)continue;let f=l.x-n.x,d=l.z-n.z,m=f*s+d*r,p=Math.abs(f*r-d*s);m>0&&p<o.width+.4&&(u=Math.min(u,Math.max(0,m-o.length-.9)*.94))}return u}function Ip(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...e.filter(l=>l!==n&&Math.hypot(l.vx,l.vz)<2).map(l=>({other:l,radius:1.05})),...t.filter(l=>l.down<=0&&l.health!==0&&!l.seated).map(l=>({other:l,radius:.43}))].find(({other:l,radius:f})=>{let d=l.x-n.x,m=l.z-n.z,p=d*s+m*r;return p>2.25&&p<13.4&&Math.abs(d*r-m*s)<f+1.05});if(!a)return null;let u=(l,f)=>{let d=l.x-n.x,m=l.z-n.z,p=d*s+m*r;return p>-3&&p<23&&Math.abs(d*r-m*s-f)<2.3};for(let l of[2.72,-2.72]){if(e.some(m=>m!==n&&m!==a.other&&u(m,l))||t.some(m=>m!==a.other&&m.down<=0&&u(m,l)))continue;let f=n.x+s*8+r*l,d=n.z+r*8-s*l;if(hi(f,d,n.angle,i,n.shape??n.kind)&&hi((f+n.x)*.5,(d+n.z)*.5,n.angle,i,n.shape??n.kind))return{x:f,z:d}}return null}function Pp(n,e,t,i){let s=n.kind==="bike",r=ws(n.shape??n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),u=x=>({along:(x.x-n.x)*o+(x.z-n.z)*a,across:(x.x-n.x)*a-(x.z-n.z)*o}),l=[...e.filter(x=>x!==n).map(x=>({actor:x,...ws(x.shape??x.kind,x.angle-n.angle),moving:!0})),...t.filter(x=>x.health>0&&!x.seated&&!x.down).map(x=>({actor:x,width:.34,length:.34,moving:!1}))].map(x=>({...x,...u(x.actor)})),f=l.filter(({actor:x,along:_,across:A,width:R,length:b,moving:E})=>_>Math.max(s?1.2:2.4,r.length+b-.3)&&_<19&&Math.abs(A)<r.width+R+.16&&(!E||Math.hypot(x.vx,x.vz)<(s?8:6)));f.sort((x,_)=>x.along-_.along);let d=f[0];if(!d||d.along-r.length-d.length<(s?1.85:2.45))return null;let m=r.width+d.width+(s?.23:.38),p=s?Math.max(1.12,m):2.95,c=s?[p,-p,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[p,-p,3.45,-3.45],M=d.along+r.length+d.length+(s?3:4.1);for(let x of c){if(Math.abs(d.across-x)<m)continue;let _=r.length+(s?3.9:5.8);if(!l.every(g=>{if(g===d)return!0;let w=g.moving?Math.max(0,-g.actor.vx*o-g.actor.vz*a):0;return g.along<-r.length-g.length-.2||g.along>M+_+Math.min(10,w)||Math.abs(g.across-x)>r.width+g.width+(s?.25:.46)}))continue;let R=Math.max(s?2.4:3.8,Math.min(s?5:6.1,d.along-r.length+1.2)),b=kn(n.x,n.z),E=Math.ceil(M/.72),S=!0;for(let g=1;g<=E;g++){let w=g*M/E,F=x*Math.min(1,w/R),D=n.x+o*w+a*F,L=n.z+a*w-o*F,V=s?.27:.9;if(Math.abs(kn(D+a*V,L-o*V)-b)>=.08||Math.abs(kn(D-a*V,L+o*V)-b)>=.08||!mu({x:D,z:L,angle:n.angle,kind:n.kind,shape:n.shape},i,e,n)){S=!1;break}}if(S)return{x:n.x,z:n.z,sx:o,sz:a,offset:x,obstacle:d.actor,phase:"out",age:0,clearAfter:r.length+d.length+(s?.9:1.2)}}return null}function eM(n,e,t,i,s=[]){e.age+=i;let r=n.kind==="bike",o=ws(n.shape??n.kind),{sx:a,sz:u,offset:l}=e,f=(n.x-e.x)*a+(n.z-e.z)*u,d=(n.x-e.x)*u-(n.z-e.z)*a,m=(e.obstacle.x-e.x)*a+(e.obstacle.z-e.z)*u;if(e.age>(r?10:13)||e.phase==="merge"&&Math.abs(d)<.53)return null;e.phase==="out"&&Math.abs(d-l)<(r?.28:.55)&&(e.phase="pass"),e.phase!=="merge"&&f>m+e.clearAfter&&t.every(b=>{if(b===n)return!0;let E=ws(b.shape??b.kind,b.angle-Math.atan2(a,u));return Math.abs((b.x-e.x)*u-(b.z-e.z)*a)>o.width+E.width+.3||Math.abs((b.x-n.x)*a+(b.z-n.z)*u)>o.length+E.length+1.25})&&(e.phase="merge");let p=e.phase==="merge"?0:l,c=t.some(R=>{if(R===n||R===e.obstacle)return!1;let b=(R.x-n.x)*a+(R.z-n.z)*u,E=(R.x-e.x)*u-(R.z-e.z)*a,S=ws(R.shape??R.kind,R.angle-Math.atan2(a,u));return b>0&&b<o.length+S.length+2.7&&Math.abs(E-p)<o.width+S.width+.28})||s.some(R=>{if(R.health<=0||R.seated||R.down)return!1;let b=(R.x-n.x)*a+(R.z-n.z)*u,E=(R.x-e.x)*u-(R.z-e.z)*a;return b>0&&b<o.length+2.1&&Math.abs(E-p)<o.width+.45}),M=e.phase==="out"?r?2.3:4.4:r?4.8:7,x={x:e.x+a*(f+M)+u*p,z:e.z+u*(f+M)-a*p},_=e.phase==="out"?r?4.5:4.8:r?8.1:6.5,A=qr(n,x,c?0:_);return c&&(A.throttle=0),A}function Tc(n,e,t,i,s){return mu(e,s,t,n)&&i.every(r=>r.health<=0||r.seated||r.down||!Qi(e,r.x,r.z,.26))}function tM(n,e,t,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=t.filter(f=>f!==n&&re(n,f)<29),u=null,l=-1/0;for(let f of[0,-.62,.62,-1,1]){let d={x:n.x,z:n.z,angle:n.angle,kind:n.kind,shape:n.shape},m=0;for(let _=0;_<(r?13:19)&&(d.angle-=f*.18*(r?.75:.56),d.x-=Math.sin(d.angle)*.18,d.z-=Math.cos(d.angle)*.18,!!Tc(n,d,t,i,s));_++)m+=.18;if(m<(r?.9:1.35))continue;Tc(n,d,t,i,s)||(d.x+=Math.sin(d.angle)*.18,d.z+=Math.cos(d.angle)*.18,d.angle+=f*.18*(r?.75:.56));let p={...d},c=0;for(let _=0;_<27;_++){let A=Math.atan2(e.x-p.x,e.z-p.z);if(p.angle=On(p.angle,A,r?.13:.092),p.x+=Math.sin(p.angle)*.24,p.z+=Math.cos(p.angle)*.24,!Tc(n,p,t,i,s))break;c+=.24}let M=r&&Pp(d,a,i,s),x=c*.67+(re(n,e)-re(p,e))*.38+m*.31-Math.abs(f)*.12+(M?4.6:0);x>l&&(l=x,u={steer:f,pace:o,distance:Math.max(.7,m-.26),age:0,x:n.x,z:n.z})}return u}function yu(n,e,t,i,s,r,o,a,u=!0){let l=n.kind==="bike",f=e.recoverPosition;e.recoverPosition={x:n.x,z:n.z};let d=f&&re(f,n)>o*.57;if(e.recoverRetry=Math.max(0,(e.recoverRetry??0)-o),e.maneuver){let p=e.maneuver;p.age+=o;let c=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),M={x:n.x-Math.sin(n.angle)*c,z:n.z-Math.cos(n.angle)*c,angle:n.angle,kind:n.kind,shape:n.shape};return re(n,p)>=p.distance||p.age>(l?2.4:2.8)||!Tc(n,M,i,s,r)?(e.maneuver=null,e.recoverWait=0,e.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:p.steer,throttle:n.speed>-p.pace?xt((n.speed+p.pace)*-.64,-.54,-.05):0,brake:!1}}e.recoverWait=!u||d||re(n,t)<1.2?0:(e.recoverWait??0)+o;let m=l?1.08:1.75;return e.recoverRetry>0||e.recoverWait<m||n.integrity<=0?a:(e.maneuver=tM(n,t,i,s,r),e.maneuver?(e.recoverWait=0,{steer:e.maneuver.steer,throttle:-.47,brake:!1}):(e.recoverRetry=.85,a))}function Lp(n,e,t,i,s,r,o){for(let[a,u]of r)(!u.driver||u.integrity<=0||re(u,u.driver.route[u.driver.next].junction)>11)&&r.delete(a);for(let a of n){let u=a.driver;if(!u||a.burning||a.wrecked||a.integrity<=0){a!==e.player&&Math.hypot(a.vx,a.vz)>.06?ui(a,s,{throttle:0,steer:0,brake:!0},i,e.vehicles):a!==e.player&&(a.impact=Math.max(0,a.impact-s*21));continue}let{route:l}=u,f=a.kind==="bike",d=l[u.next],m=Math.sin(a.angle),p=Math.cos(a.angle);for(let L=0;!u.maneuver&&L<6;L++){let V=d.x-a.x,z=d.z-a.z;if(Math.hypot(V,z)>2.55&&(V*m+z*p>0||Math.hypot(V,z)>5))break;u.next=(u.next+1)%l.length,d=l[u.next]}let{junction:c}=d,M=re(a,c),x=r.get(c.id);!x&&M<9.7&&r.set(c.id,a);let _=u.cruise*(f?1.13:1),A=d.curve&&M<12?Math.min(f?7.1:5.9,_):_,R=x&&x!==a&&M<15;R&&(A=Math.min(A,Math.max(0,M-7.4)*.96));let b=!1;if(o){let L=(c.x-a.x)*m+(c.z-a.z)*p,V=o.state(c.id,Math.abs(m)>Math.abs(p)?"x":"z"),z=7.6+(a.halfLength??2.4);if(V!=="green"&&L>z-.5&&L<z+40){let B=L-z;(V==="red"||B>a.speed*a.speed/11)&&(A=Math.min(A,Math.max(0,B)*.8),b=!0)}}let E=_u(a,e.vehicles,t,A);!u.pass&&!u.maneuver&&!R&&!b&&E<A*(f?.88:.78)&&(!d.curve||M>(f?8:11))&&(u.pass=Pp(a,e.vehicles,t,i));let S=u.pass?eM(a,u.pass,e.vehicles,s,t):null;S||(u.pass=null);let g=S??qr(a,d,E);!S&&E<.4&&(g.throttle=0);let w=a.x,F=a.z,D=yu(a,u,d,e.vehicles,t,i,s,g,!(R||b)||u.stuck>12);u.maneuver&&(u.pass=null),ui(a,s,D,i,e.vehicles),u.stuck=!b&&Math.hypot(a.x-w,a.z-F)<s*.62?u.stuck+s:b?u.stuck:0}}function vu(n,e,t,i){return re(n,t)>13&&hi(n.x,n.z,n.angle,i,n.shape??n.kind)&&e.every(s=>re(s,n)>5.2)}var nM=[];function Mu(n,e,t,i,s){let r=-1/0,o=1/0,a=-1,u=-1;for(let l=0;l<3;l++){let f=n[l],d=e[l],m=t[l],p=t[l+3];if(Math.abs(d)<1e-5){if(f<m||f>p)return 1/0;continue}let c=1/d,M=(d>0?m-f:p-f)*c,x=(d>0?p-f:m-f)*c;if(M>r&&(r=M,a=l*2+ +(d<0)),x<o&&(o=x,u=l*2+ +(d>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=u,Math.max(0,o))}function iM(n,e,t,i){if(!i)return e[1]<-1e-5&&n[1]>=0?-n[1]/e[1]:1/0;if(e[1]>1e-5)return 1/0;let s=o=>n[1]+e[1]*o-i(n[0]+e[0]*o,n[2]+e[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,t/12);if(r<1e-5)return 1/0;for(let o=0;o<t;o+=r){let a=o,u=Math.min(o+r,t);if(!(s(u)>0)){for(let l=0;l<10;l++){let f=(a+u)*.5;s(f)>0?a=f:u=f}return u}}return 1/0}function Dp(n,e,t,i,s,r){let o=s,a=null,u=null,l=null,f=-1,d=0,m={face:-1};for(let c of t){if(c.off)continue;let M=c.bounds??[c.x-c.w*.5,c.y0??c.base??0,c.z-c.d*.5,c.x+c.w*.5,c.h,c.z+c.d*.5],x=Mu(n,e,M,o,m);x>=o||(o=x,u=c,l="solid",f=m.face)}let p=iM(n,e,o,r);p<o&&(o=p,u=null,l="ground",f=3);for(let c of i){let M,x=c.oriented;if(x){let{center:_,half:A,angle:R}=x,b=n[0]-_[0],E=n[1]-_[1],S=n[2]-_[2],g=Math.sin(R),w=Math.cos(R),F=[w*b-g*S,E,g*b+w*S],D=[w*e[0]-g*e[2],e[1],g*e[0]+w*e[2]];M=Mu(F,D,[-A[0],-A[1],-A[2],A[0],A[1],A[2]],o,m)}else if(c.bounds)M=Mu(n,e,c.bounds,o,m);else continue;M>=o||(o=M,a=c,u=null,l="target",f=m.face,d=x?.angle??0)}return{distance:o,hit:a,solid:u,surface:l,face:f,rotation:d}}function la(n,e,t,i,s=52){let{distance:r,hit:o}=Dp(n,e,t,i,s,null);return{distance:r,hit:o}}function Ac(n,e,t,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:u,surface:l,face:f,rotation:d}=Dp(n,e,t,i,s,r),m=n.map((c,M)=>c+e[M]*o),p=null;if(f!==-1&&(p=[0,0,0],p[Math.floor(f/2)]=f%2?1:-1,d)){let[c,M,x]=p,_=Math.sin(d),A=Math.cos(d);p=[A*c+_*x,M,-_*c+A*x]}return{distance:o,hit:a,point:m,normal:p,solid:u,surface:l}}function Np(n,e,t,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...e),u=a>1e-5?e.map(c=>c/a):[0,0,1],l=Ac(n,u,i,s,r,{ground:o}),f=l.point.map((c,M)=>c-t[M]),d=f.reduce((c,M,x)=>c+M*u[x],0),m=Math.hypot(...f),p=d>.025&&m>1e-5?f.map(c=>c/m):u;return{direction:p,sight:l,impact:Ac(t,p,i,s,r,{ground:o})}}function Yr(n,e,t){let i=e.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return la(n,r,t,nM,s).distance>=s-.01}function Zr(n,e,t,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let u=e.x-n.x,l=e.z-n.z,f=Math.hypot(u,l),d=(n.ground??0)+r,m=(e.ground??0)+o;if(Math.hypot(f,m-d)>s)return!1;if(f>1e-5){let p=n.angle??0;if((Math.sin(p)*u+Math.cos(p)*l)/f<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(m-d,f)+(n.pitch??0))>a*.5?!1:Yr([n.x,d,n.z],[e.x,m,e.z],t)}function Up(n,e,t,i){let s=null,r=1.86;for(let o of e){if(o.down>0)continue;let a=o.x-n.x,u=o.z-n.z,l=Math.hypot(a,u),f=Math.sin(n.angle)*a+Math.cos(n.angle)*u;l>=r||f<l*.36||!Yr([n.x,t+1,n.z],[o.x,t+1,o.z],i)||(s=o,r=l)}return s}var Jr=44,Ys=12,bu=new Y(0,1,0),sM=new Y(0,0,1),Ts=new on,es=new St,Li=new Y,Ec=new Y,Cc=new Y,rM=new lt;function oM(){let e=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),u=Math.hypot(r,o),l=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,f=u<.35+Math.sin(a*4)*.06,d=(s*239+i*167)%19/19,m=f?9+d*27:101+d*64,p=f?.99:Math.min(.84,Math.max(0,(l-u)*3.6))*(.51+d*.49),c=(i*32+s)*4;e[c]=m,e[c+1]=m*.92,e[c+2]=m*.81,e[c+3]=Math.round(p*255)}let t=new Ls(e,32,32,ni);return t.colorSpace=un,t.magFilter=_n,t.minFilter=_n,t.needsUpdate=!0,t}function Rc(n,e,t,i){let s=new Nn(e,t,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(sc),n.add(s),s}function aM(n){let e=new Wn(1,1),t=new us(new Float32Array(Jr),1);t.setUsage(sc),e.setAttribute("markAlpha",t);let i=new $t({map:oM(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=Rc(n,e,i,Jr);return s.renderOrder=3,{mesh:s,fade:t}}function Fp(n){let{mesh:e,fade:t}=aM(n),i=new $t({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=Rc(n,new Un(.015,.015,1,5),i,Ys),r=new $t({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=Rc(n,new Yi(1,0),r,Ys),a=new $t({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),u=Rc(n,new Zi(1),a,Ys),l=Array.from({length:Ys},()=>({age:1/0,distance:0,point:new Y,start:new Y,direction:new Y,surface:null})),f=Array.from({length:Jr},()=>({time:0,life:0,point:new Y,normal:new Y,attachment:null,radius:0})),d=0,m=0,p=new St().makeScale(0,0,0),c=new $e(16768142),M=new $e(16754545);function x(){for(let R=0;R<Ys;R++)l[R].age=1/0,s.setMatrixAt(R,p),o.setMatrixAt(R,p),u.setMatrixAt(R,p);for(let R=0;R<Jr;R++)f[R].time=0,f[R].attachment=null,e.setMatrixAt(R,p),t.setX(R,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=e.instanceMatrix.needsUpdate=t.needsUpdate=!0,d=m=0}x();function _(R,b,{enemy:E=!1,mark:S=b.surface==="solid"||b.surface==="ground",attach:g=null}={}){let w=l[d],F=d;if(d=(d+1)%Ys,w.start.fromArray(R),w.point.fromArray(b.point),w.distance=w.start.distanceTo(w.point),w.direction.subVectors(w.point,w.start).normalize(),w.surface=b.surface,w.age=0,s.setColorAt(F,E?M:c),s.instanceColor.needsUpdate=!0,S&&b.normal&&b.surface){let D=f[m];m=(m+1)%Jr,D.life=(b.surface==="ground"?8:13)+Math.random()*4,D.time=D.life,D.point.copy(w.point),D.normal.fromArray(b.normal).normalize(),D.attachment=g,D.radius=.053+Math.random()*.031,g&&(g.updateWorldMatrix(!0,!1),g.worldToLocal(D.point),D.normal.transformDirection(es.copy(g.matrixWorld).invert()))}}function A(R){let b=!1,E=!1;for(let S=0;S<Ys;S++){let g=l[S];if(!Number.isFinite(g.age))continue;b=!0,g.age+=R;let w=234,F=Math.min(g.distance,g.age*w+1.7),D=Math.max(0,g.age*w-3.1),L=F-D;if(L>.018){Li.copy(g.start).addScaledVector(g.direction,(F+D)*.5),Ts.setFromUnitVectors(bu,g.direction);let z=Math.min(1,L/1.3);es.compose(Li,Ts,Ec.set(z,L,z)),s.setMatrixAt(S,es)}else s.setMatrixAt(S,p);if(g.age<.071){let z=Math.max(.025,.084-g.age*.78);Ts.setFromUnitVectors(bu,g.direction),Li.copy(g.start).addScaledVector(g.direction,.052),es.compose(Li,Ts,Ec.set(z,z*2.2,z)),o.setMatrixAt(S,es)}else o.setMatrixAt(S,p);let V=g.age-g.distance/w;if(g.surface&&V>=0&&V<.13){let z=Math.max(.006,.041-V*.27);Li.copy(g.point).addScaledVector(g.direction,-(.039+V*.38)),Ts.setFromUnitVectors(bu,g.direction),es.compose(Li,Ts,Ec.set(z,z*2.14,z)),u.setMatrixAt(S,es)}else u.setMatrixAt(S,p);g.age>g.distance/w+.14&&(g.age=1/0)}for(let S=0;S<Jr;S++){let g=f[S];if(!(g.time<=0)){if(E=!0,g.time-=R,g.time<=0||g.attachment&&!g.attachment.visible){g.time=0,g.attachment=null,e.setMatrixAt(S,p),t.setX(S,0);continue}Li.copy(g.point),Cc.copy(g.normal),g.attachment&&(g.attachment.updateWorldMatrix(!0,!1),Li.applyMatrix4(g.attachment.matrixWorld),Cc.applyNormalMatrix(rM.getNormalMatrix(g.attachment.matrixWorld))),Li.addScaledVector(Cc,.014),Ts.setFromUnitVectors(sM,Cc),es.compose(Li,Ts,Ec.set(g.radius,g.radius,g.radius)),e.setMatrixAt(S,es),t.setX(S,Math.min(1,g.time*.57))}}b&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=!0),E&&(e.instanceMatrix.needsUpdate=t.needsUpdate=!0)}return{emit:_,update:A,reset:x}}var Kr=.42,Zs=.145,zp=n=>.94*n,Su=n=>n*n*(3-2*n),ca=(n,e,t)=>n+(e-n)*t;function lM(n){return n<.065?-.32*Su(n/.065):n<Zs?ca(-.32,1,Su((n-.065)/(Zs-.065))):n<.182?ca(1,.89,(n-Zs)/(.182-Zs)):.89*(1-Su((n-.182)/(Kr-.182)))}function wu(n,{aim:e=!1,punch:t=0,pitch:i=0,hand:s=0,walking:r=!1}={}){if(!e&&t<=0)return;let o=n.arms[s],a=n.arms[1-s],u=n.forearms[s],l=n.forearms[1-s],f=s===0?1:-1,d=t>0?lM(xt(Kr-t,0,Kr)):0,m=Math.max(0,d),p=Math.max(0,-d),c=xt(i,-.64,.53)*.62,M=.07+m*.2-p*.08;n.body.rotation.set(M,f*(.12+m*.46-p*.52),f*(-.02-m*.05)),n.body.position.y+=zp(1-Math.cos(M))-.04-m*.03,n.body.position.z+=zp(-Math.sin(M))+m*.12;let[x,_]=n.legs,[A,R]=n.shins,b=s===0?x:_,E=s===0?_:x,S=s===0?A:R,g=s===0?R:A;r||(E.rotation.set(-.32-m*.08,0,0),g.rotation.set(.34,0,0),b.rotation.set(.26+m*.16,0,0),S.rotation.set(.18-m*.1,0,0)),o.rotation.set(ca(-.86,-1.66+c,m)+p*.7,f*(.1-m*.08),f*ca(.24,-.04,m)-f*p*.25),u.rotation.set(ca(-1.62,-.04,m)-p*.2,0,f*(.1-m*.1)),a.rotation.set(-.98+m*.06,-f*.12,-f*.22),l.rotation.set(-1.78,0,-f*.08),n.pistol.visible=!1}function Ve(n){return document.getElementById(n)}function Op(n,e){let t=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Ve("stick"),u=Ve("nub"),l=Ve("look"),f=Ve("game"),d=Ve("view"),m=-1,p=-1,c=[],x=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",_=z=>{x=z,Ve("touch").hidden=z!=="touch",f.classList.toggle("touching",z==="touch")};_(x);let A=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","KeyB","Digit1","Digit2","Digit3","Digit4","Escape"]),R="",b=0,E=!1;window.addEventListener("keydown",z=>{if(!(!A.has(z.code)||z.target instanceof HTMLSelectElement&&!e())){if((e()||z.code==="Escape")&&z.preventDefault(),z.code==="Escape"){z.repeat||n();return}if(e()&&(_("keyboard"),t.add(z.code),!z.repeat)){z.code==="KeyE"&&i.add("interact"),z.code==="KeyF"&&i.add("fire"),z.code==="KeyR"&&i.add("punch"),z.code==="KeyG"&&i.add("recruit"),z.code==="KeyV"&&i.add("weapon"),z.code==="Space"&&i.add("jump"),z.code==="KeyB"&&i.add("sell");let B={Digit1:"follow",Digit2:"wait",Digit3:"attack"};B[z.code]&&(R=B[z.code])}}}),window.addEventListener("keyup",z=>{z.code==="Digit4"&&t.has("Digit4")&&!E&&(R="dealer"),t.delete(z.code)});function S(){t.clear(),b=0,E=!1,R="",i.clear(),s.clear(),o.x=0,o.y=0,u.style.transform="",m=-1,p=-1,r.x=0,r.y=0,r.aim=!1,Ve("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",S),d.addEventListener("contextmenu",z=>z.preventDefault()),d.addEventListener("wheel",z=>{!e()||!z.deltaY||(z.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(g),g=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let g=0;d.addEventListener("pointerdown",z=>{e()&&z.pointerType==="touch"&&_("touch")}),window.addEventListener("mousedown",z=>{if(!(!e()||document.pointerLockElement!==d&&(!(z.target instanceof Node)||!d.contains(z.target)))){if(z.button===0&&document.pointerLockElement!==d&&d.requestPointerLock){let B=d.requestPointerLock();B&&B.catch(()=>{})}_("keyboard"),z.button===0&&(i.add("fire"),s.add("mouseFire")),z.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",z=>{z.button===0&&s.delete("mouseFire"),z.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",z=>{!e()||x!=="keyboard"||z.pointerType==="touch"||(document.pointerLockElement===d||z.target===d||d.contains(z.target))&&(r.x+=z.movementX,r.y+=z.movementY)});function w(z){let B=a.getBoundingClientRect(),X=z.clientX-B.left-B.width/2,G=z.clientY-B.top-B.height/2,k=B.width*.37,W=Math.max(k,Math.hypot(X,G));o.x=X/W,o.y=G/W,u.style.transform="translate("+o.x*k+"px,"+o.y*k+"px)"}a.addEventListener("pointerdown",z=>{m===-1&&(_("touch"),m=z.pointerId,a.setPointerCapture(z.pointerId),w(z))}),a.addEventListener("pointermove",z=>{z.pointerId===m&&w(z)}),a.addEventListener("lostpointercapture",z=>{z.pointerId===m&&(m=-1,o.x=0,o.y=0,u.style.transform="")});let F=0,D=0;l.addEventListener("pointerdown",z=>{p===-1&&(p=z.pointerId,F=z.clientX,D=z.clientY,l.setPointerCapture(z.pointerId))}),l.addEventListener("pointermove",z=>{z.pointerId===p&&(r.x+=(z.clientX-F)*1.45,r.y+=(z.clientY-D)*1.45,F=z.clientX,D=z.clientY)}),l.addEventListener("lostpointercapture",z=>{z.pointerId===p&&(p=-1)});let L=Ve("gang-menu");for(let z of L.querySelectorAll("button"))z.addEventListener("pointerdown",B=>{B.preventDefault(),R=z.dataset.order??"",L.hidden=!0,Ve("gang").setAttribute("aria-expanded","false")});Ve("gang").addEventListener("pointerdown",z=>{z.preventDefault(),_("touch"),L.hidden=!L.hidden,Ve("gang").setAttribute("aria-expanded",String(!L.hidden))});for(let z of["interact","fire","aim","sprint","punch","jump","weapon","recruit","sell"]){let B=Ve(z);B.addEventListener("pointerdown",X=>{X.preventDefault(),_("touch"),B.setPointerCapture(X.pointerId),z==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),B.setAttribute("aria-pressed",String(s.has("aim")))):z==="sprint"||z==="fire"?(s.add(z),z==="fire"&&i.add(z)):i.add(z)}),(z==="sprint"||z==="fire")&&B.addEventListener("lostpointercapture",()=>s.delete(z))}let V=!1;return{clear:S,read(z,B){V!==z&&(s.delete("aim"),Ve("aim").setAttribute("aria-pressed","false"),V=z);let X=Array.from(navigator.getGamepads?.()??[]).find(fe=>fe?.connected&&fe.mapping==="standard"),G=X?.buttons.map(fe=>fe.pressed||fe.value>.45)??[],k=fe=>G[fe]&&!c[fe],W=Array.from({length:4},(fe,Ee)=>Qf(X?.axes[Ee]));(G.some(Boolean)||W.some(fe=>Math.abs(fe)>.1))&&_("pad"),(k(9)||!e()&&k(0))&&n();let j=Number(t.has("KeyD")||t.has("ArrowRight"))-Number(t.has("KeyA")||t.has("ArrowLeft")),$=Number(t.has("KeyW")||t.has("ArrowUp"))-Number(t.has("KeyS")||t.has("ArrowDown")),K=(X?.buttons[7]?.value??0)-(X?.buttons[6]?.value??0),ge=t.has("Digit4")||!!G[5];ge&&!E?(b+=B,b>=.55&&(R="undealer",E=!0)):ge||(c[5]&&!E&&(R="dealer"),b=0,E=!1);let Z={x:xt(j+o.x+W[0],-1,1),y:xt($-o.y+(z&&Math.abs(K)>.05?K:-W[1]),-1,1),lookX:xt(r.x,-140,140)*.0032+W[2]*B*2.45,lookY:xt(r.y,-140,140)*.0028+W[3]*B*1.8,aim:!z&&(r.aim||t.has("KeyQ")||s.has("aim")||!!G[6]),run:s.has("sprint")||t.has("ShiftLeft")||t.has("ShiftRight")||!!G[0],brake:t.has("Space")||s.has("sprint")||!!G[2],interact:i.has("interact")||k(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!z&&!!G[7],punch:i.has("punch")||k(1),recruit:i.has("recruit")||k(12),weapon:i.has("weapon")||k(15),jump:i.has("jump")||k(2),map:k(8),confirm:k(0),cancel:k(1),navUp:k(12),navDown:k(13),sell:i.has("sell")||k(13),order:R||(k(14)?"toggle":"")||(k(4)?"attack":""),mode:x};return R="",c=G,r.x=0,r.y=0,i.clear(),Z}}}function Bp(){let n,e,t,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,e=n.createGain(),e.gain.value=.46,e.connect(n.destination),t=n.createOscillator(),t.type="triangle",i=n.createGain(),i.gain.value=0,t.connect(i).connect(e),t.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(u,l,f,d,m="sine",p=0){if(!n||!s||n.state!=="running")return;let c=n.currentTime+p,M=n.createOscillator(),x=n.createGain();M.type=m,M.frequency.setValueAtTime(u,c),M.frequency.exponentialRampToValueAtTime(l,c+f),x.gain.setValueAtTime(d,c),x.gain.exponentialRampToValueAtTime(.001,c+f),M.connect(x).connect(e),M.start(c),M.stop(c+f)}function a(u,l,f){if(!n||!s||n.state!=="running")return;let d=n.createBuffer(1,Math.floor(n.sampleRate*u),n.sampleRate),m=d.getChannelData(0);for(let x=0;x<m.length;x++)m[x]=(Math.random()*2-1)*Math.pow(1-x/m.length,2.2);let p=n.createBufferSource();p.buffer=d;let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=f;let M=n.createGain();M.gain.value=l,p.connect(c).connect(M).connect(e),p.start()}return{start:r,explosion(){a(1.4,1.1,620),o(70,24,1.1,.7,"sawtooth")},rifle(){a(.12,.55,2400),o(240,60,.09,.4,"square")},sale(){o(880,1320,.12,.18),o(1320,1760,.16,.14,"sine",.08)},get enabled(){return s},toggle(){return s=!s,e&&(e.gain.value=s?.46:0),r(),s},motor(u,l){n&&(t.frequency.setTargetAtTime(34+Math.abs(u)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(u){o(u?109:187,u?39:73,u?.125:.084,u?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function Tu(n){return n>1.53?54:n>.92?32:n>.63?24:15}function Au(n){return Math.round(xt(Math.max(0,n-2.4)**2*.24,0,86))}function Ic(n){return n>=36?3:n>=20?2:n>0?1:0}function kp(n){let s=62.474999999999994,r=Array.from({length:3350},(p,c)=>({x:c%67*2.55-s,z:Math.floor(c/67)*2.55-s})),o=r.map(p=>Fn(p.x,p.z,.38,n)),a=r.map((p,c)=>o[c]?[c>=67?c-67:-1,c<3283?c+67:-1,c%67?c-1:-1,c%67<66?c+1:-1].filter(x=>x>=0&&o[x]&&Fn((p.x+r[x].x)*.5,(p.z+r[x].z)*.5,.38,n)):[]),u=(p,c)=>{let M=Math.max(1,Math.ceil(re(p,c)/.42));for(let x=1;x<=M;x++){let _=x/M;if(!Fn(p.x+(c.x-p.x)*_,p.z+(c.z-p.z)*_,.31,n))return!1}return!0},l=p=>{let c=Math.round((p.x+s)/2.55),M=Math.round((p.z+s)/2.55),x=[];for(let _=Math.max(0,M-4);_<=Math.min(49,M+4);_++)for(let A=Math.max(0,c-4);A<=Math.min(66,c+4);A++){let R=_*67+A;if(!o[R])continue;let b=r[R].x-p.x,E=r[R].z-p.z;x.push({index:R,d:b*b+E*E})}x.sort((_,A)=>_.d-A.d);for(let{index:_}of x.slice(0,12))if(u(p,r[_]))return _;return-1},f=0,d=-1,m=(p,c)=>{let M=l(p),x=l(c);if(M<0||x<0)return[];if(M===x)return[r[M]];let _=new Int32Array(r.length).fill(-1),A=[M];_[M]=M;for(let R=0;R<A.length;R++){let b=A[R];if(b===x){let E=[];for(let S=x;S!==M;S=_[S])E.push(r[S]);return E.push(r[M]),E.reverse()}for(let E of a[b])_[E]===-1&&(_[E]=b,A.push(E))}return[]};return(p,c,M,x)=>{p.repath=(p.repath??0)-x;let _=c.x-p.x,A=c.z-p.z,R=Math.hypot(_,A);if(R<.16)return 0;let b=R<12&&u(p,c);b&&(p.route=[]);let E=Math.floor(performance.now()/16);for(E!==d&&(d=E,f=3),!b&&p.repath<=0&&(f>0?(f--,p.route=m(p,c),p.repath=1.1+Math.random()*.4):p.repath=.05);p.route?.length&&(re(p,p.route[0])<.7||p.route.length>1&&re(p,p.route[1])<4&&u(p,p.route[1]));)p.route.shift();let S=b?c:p.route?.[0]??c,g=Math.atan2(S.x-p.x,S.z-p.z),w=Math.min(M*x,re(p,S));p.angle=On(p.angle,g,x*8.5);let F=Qo(p,p.x+Math.sin(g)*w,p.z+Math.cos(g)*w,.24,n);return F||(p.repath=Math.min(p.repath,.18)),F?M:0}}var Pc=n=>zn.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,zn[0]);function Lc(n,e,t,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let M=e.z<o.z;n.stop={x:M?20.9:17.2,z:o.z+(M?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&re(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&re(o,n.stop)<2.6){let M=Pc(o.x),x=Pc(o.z),_=Pc(e.x),A=Pc(e.z);Math.abs(o.x-M)>3&&Math.abs(o.z-x)>3?n.stop={x:M,z:o.z}:Math.abs(o.x-M)>2.4&&Math.abs(o.z-x)<2.4?n.stop={x:_,z:x}:Math.abs(o.z-x)>2.4?n.stop={x:M,z:A}:_!==M?n.stop={x:M+Math.sign(_-M)*38,z:x}:A!==x?n.stop={x:M,z:x+Math.sign(A-x)*38}:n.stop={x:_,z:e.z}}let a=re(o,e),u=n.departing?6:14,l=Math.min(u,a*.85,Math.max(3,re(o,n.stop)*1.85)),f=_u(o,i,s,l),d=!n.departing&&f<2.5?Ip(o,i,s,t):null,m=qr(o,d??n.stop,d?4.4:f),p=yu(o,n,n.stop,i,s,t,r,m),c=o.impact>3||Math.abs(o.speed)<1;n.stall=c&&!n.maneuver?n.stall+r:0,ui(o,r,p,t,i)}var Gp="gtbase:progress:1",Dc=(n,e)=>Number.isFinite(n)?xt(Math.floor(n),0,e):0,cM=["sedan","hatch","wagon","taxi","pickup","van","suv","sport","muscle","luxury","convertible"],hM=["street","sport","chopper","scooter"];function Vp(n){try{let e=JSON.parse((n??globalThis.localStorage).getItem(Gp));if(!e||e.version!==1||!Number.isFinite(e.cash)||!Number.isFinite(e.ammo)||!Number.isFinite(e.health))return null;let t=e.stash??{},i=e.garage,s=i&&(i.kind==="car"&&cM.includes(i.model)||i.kind==="bike"&&hM.includes(i.model))&&Number.isInteger(i.color)&&i.color>=0&&i.color<=16777215?{kind:i.kind,model:i.model,color:i.color}:null;return{...e.checkpoint==="lajes"?Yn.home:{x:Rn.x+2.5,z:Rn.z-2.73},cash:xt(Math.floor(e.cash),0,999999),armed:e.armed===!0,equipped:e.equipped===!0,ammo:xt(Math.floor(e.ammo),0,360),rifle:e.rifle===!0,rifleAmmo:Dc(e.rifleAmmo,900),health:xt(Math.floor(e.health),1,100),look:np(e.look),wardrobe:Array.isArray(e.wardrobe)?e.wardrobe.filter(r=>r&&typeof r.label=="string"&&r.changes&&typeof r.changes=="object"):[],stash:{weed:Dc(t.weed,999),coke:Dc(t.coke,999),ecstasy:Dc(t.ecstasy,999)},garage:s,recruits:Array.isArray(e.recruits)?[...new Set(e.recruits.filter(r=>Number.isInteger(r)&&r>=0||typeof r=="string"&&/^[\w:-]{1,80}$/.test(r)))]:[]}}catch{return null}}function Hp(n,e){try{return(e??globalThis.localStorage).setItem(Gp,JSON.stringify({...n,version:1})),!0}catch{return!1}}var $r=Ve("view"),uM=Ve("menu"),Qr=Ve("play"),jr=Ve("quality"),As=Ve("shop"),Wp=180,Xp=260,Js=36,Nc=90,Ks={weed:{name:"maconha",pack:100,retail:34},coke:{name:"p\xF3",pack:300,retail:85},ecstasy:{name:"ecstasy",pack:200,retail:58}};function Uc(n,e){try{return e!==void 0&&localStorage.setItem("gtbase:"+n,e),localStorage.getItem("gtbase:"+n)}catch{return null}}function dM(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,e=new lc({antialias:!n,alpha:!1,powerPreference:"high-performance"});e.toneMapping=ko,e.toneMappingExposure=1.17,e.shadowMap.type=Us,$r.append(e.domElement);let t=new bo,i=new Ln(57,1,.12,370),s=_p(t),r=s.vehicleSolids,o=kp(s.vehicleSolids),a=Fp(t),u=Rp(t),l=h=>h.floorY??s.floorAt(h.x,h.z,0),f=h=>s.walkSolids(h.x,h.z,l(h)),d=()=>[...s.solid,...s.closedDoorSolids()],m=h=>{h.floorY=s.floorAt(h.x,h.z,l(h))},p=h=>l(h)>1.25?[]:X,c={lastHurt:0,...jo,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,ragdoll:null,model:bs(t,Vs())},M=91,x=h=>{let y=Vr[h]?.palette??[11422e3];return M=M*1103515245+12345>>>0,y[M%y.length]},_=[{x:15.75,z:-1.8,angle:Math.PI,model:"sport"},{x:-22.8,z:4,angle:0,model:"pickup"},{x:36,z:15.3,angle:Math.PI/2,model:"luxury"},{x:53.3,z:-36,angle:0,model:"muscle"},{x:-15.9,z:-31,angle:0,model:"convertible"}],A=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033,variant:"sport"},{x:22.85,z:28,angle:0,color:4678008,variant:"chopper"}],R=[..._.map(({model:h})=>Hr(t,h,x(h))),...A.map(({color:h,variant:y})=>Mc(t,h,y))],b=["sedan","taxi","hatch","scooter","van","suv","wagon","street"],E=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778,5406086,11563879,7111513,8944529].map((h,y)=>{let v=b[y%8],N=y===3||y===7?Mc(t,h,v):Hr(t,v,x(v));return N.routeIndex=y%8,N.kind==="bike"&&(N.rider=bs(t,na(4e3+y)),N.rider.root.visible=!1),N}),S=[...R,...E],g=new Map,w=Array.from({length:32},(h,y)=>{let v=vi[y%3],N=vi[Math.floor(y/3)%3],C=y%2===0?71:85,T=(y%3-1)*20,Q=y>=24?[{x:C,z:T-10},{x:C,z:T+10},{x:C+7,z:T+10},{x:C+7,z:T-10}]:[{x:v+12,z:N-12},{x:v+12,z:N+12},{x:v-12,z:N+12},{x:v-12,z:N-12}],ne=y%4,de=Q[ne],Re=Q[(ne+1)%4],Fe=(y%3+1)/4,Je={x:de.x+(Re.x-de.x)*Fe,z:de.z+(Re.z-de.z)*Fe,next:(ne+1)%4};return Me({...Je,id:"street:"+y},"civilian",bs(t,na(1e3+y)),Q)}),F=s.buildings.filter(h=>h.clerk).map((h,y)=>Me({...h.clerk,next:0,id:"clerk:"+h.id,buildingId:h.id},"clerk",bs(t,{...na(2e3+y),shirt:"tee"}),[])),D=s.buildings.filter(h=>h.clerk),L=Array.from({length:3},(h,y)=>{let v=Ms.z-6.1+y*4.25,N={x:-1.85,z:Ms.z+[-.23,-4.4,3.94][y],next:0,id:"officer:"+y,buildingId:"station"},C=Me(N,"police",bs(t,tp([12157017,8475704,15052936][y%3])),[]),T={x:8.2,z:v,angle:Math.PI/2},Q=Hr(t,"sedan",3626613,!0);return{officer:C,berth:T,car:Q,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,route:[3,6,1][y],beat:y,startShift:[18,40,26][y]}}),V=Hr(t,"tow",12950339),z={x:42,z:60.6,angle:Math.PI/2},B={car:V,target:null,carrying:!1,stop:null,stall:0,wait:0},X=[...S,...L.map(h=>h.car),V],G=new Map,k=Array.from({length:E.length+2},(h,y)=>{let v=Me({x:0,z:0,next:0,id:"driver:"+y},"civilian",bs(t,na(3e3+y)),[]);return v.seated=!0,v.model.root.visible=!1,v});E.forEach((h,y)=>{h.kind==="car"&&(h.ownDriver=k[y])});let W=()=>k.find(h=>h.seated&&!h.riding&&!X.some(y=>y.ownDriver===h&&y.driver)),U=h=>h.ownDriver?.seated&&!h.ownDriver.riding?h.ownDriver:W(),j=[...w,...F,...L.map(h=>h.officer),...k],$=j,K=new Map(j.map(h=>[h.id,h])),ge=new Ns(1,14),Z=new $t({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),fe=new ln(.27,.115,.38),Ee={cash:new en({color:7838308}),ammo:new en({color:14395738}),weapon:new en({color:4805464})},Te=[];function Me(h,y,v,N){return{home:h,baseRole:y,role:y,model:v,path:N,...h,pace:1.15+Math.abs(h.z)%4*.11,angle:h.angle??0,floorY:h.y??0,scheduleClock:9+Math.abs(h.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,wallet:12+Math.floor(Math.abs(Math.sin(h.x*4.27+h.z*8.13))*106),down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function Xe(h){h.drop&&(t.remove(h.drop),h.drop=null),Object.assign(h,h.home,{role:h.baseRole,health:100,fear:0,down:0,angle:h.home.angle??0,floorY:h.home.y??0,scheduleClock:9+Math.abs(h.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],shoppingTrip:null,commandTarget:null,hopTime:0,stuckTime:0,walkIntent:null,pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1,ragdoll:null}),h.model.root.rotation.set(0,h.angle,0),h.model.shadow.visible=!0,h.model.root.visible=!0,m(h),h.model.root.position.set(h.x,l(h),h.z)}let Ye=Bp();Uc("sound")==="off"&&Ye.toggle();let Ke=new Y,je=new Y,dt=new Y,tt=new Y,zt=new Y,Ot=new Y,Nt=new Y,Rt=new Y,cn=new Y,Ne=!1,_t=!1,ee=null,At=!1,J=0,Et=null,it=0,Bt=0,Pe=0,Gt=0,et=0,ot=0,O=0,I=.23,se=0,me=0,pe=0,Ae=0,Ce=!0,ue="keyboard",he=Xp,_e=!1,H=!1,ae=0,le=!1,ve="pistol",ye=!1,be=0,We=0,He=Vs(),xe={weed:0,coke:0,ecstasy:0},Ze=null,ht=3,Ue=0,Qe=null,Ht=!1,yn=0,Di=0,Gn=null,Vn=null,nn=null,$s=0,vn=null,Ni=0,si=null,jt=[],Qt=Vp(),ha=()=>{Qr.textContent=Qt?"Continuar do save":"Jogar agora"},In=0,Zn=0,ts=0,js=0,Qs=0,er=!1,tr=0,eo=!1,to="",P=0,q=1,oe=0,ie=0,te=Ve("map").getContext("2d"),Ie=document.createElement("canvas");Ie.width=Ie.height=256;let De=Ie.getContext("2d"),we=Ve("atlas"),Oe=Ve("atlas-map"),Ge={x:128,z:128},nt=null,ut=new Tt(new Zi(.55),new $t({color:16362817}));t.add(ut),ut.visible=!1;function qe(h,y){nt={x:(h-128)/qt,z:(y-128)/qt},ut.position.set(nt.x,kn(nt.x,nt.z)+2.6,nt.z),ut.visible=!0,we.close(),Es.clear()}Ve("mark-lajes").onclick=()=>qe(Le(63.6),Le(0));function mt(){!Ne||As.open||we.open||(Ge.x=Le(c.x),Ge.z=Le(c.z),document.pointerLockElement&&document.exitPointerLock(),Es.clear(),we.showModal())}Ve("open-map").onclick=mt,Oe.onclick=h=>{let y=Oe.getBoundingClientRect();qe((h.clientX-y.left)*256/y.width,(h.clientY-y.top)*256/y.height)};let kt=[];function Ut(){!Ne||As.open||we.open||(Es.clear(),document.pointerLockElement&&document.exitPointerLock(),Pn.show(()=>({title:"Invent\xE1rio",note:"Carteira R$ "+he+" \xB7 Pistola "+(_e?Ft()+" balas":"\u2014")+" \xB7 Fuzil "+(ye?(ve==="rifle"?ae:We)+" balas":"\u2014"),sections:[{title:"Garagem",items:Qe?[{label:da(Qe),disabled:!0}]:[]},{title:"Estoque",items:Object.keys(Ks).map(h=>({label:Ks[h].name+" \xD7 "+xe[h],price:0,disabled:!0}))},{title:"Guarda-roupa",items:kt.map(h=>({label:h.label,price:0,buy:()=>Wt(h.changes)}))}]})))}function Ft(){return ve==="pistol"?ae:be}Ve("open-bag").onclick=Ut,document.addEventListener("keydown",h=>{h.repeat||(h.code==="KeyM"&&(we.open?we.close():mt()),h.code==="KeyI"&&Ut())});let qt=1.16,Le=h=>128+h*qt;De.fillStyle="#1d3433",De.fillRect(0,0,256,256),De.fillStyle="#46605b";for(let h of zn)De.fillRect(Le(h)-10,0,20,256),De.fillRect(0,Le(h)-10,256,20);De.fillStyle="#826849",De.fillRect(Le(62),Le(-Yn.halfDepth),(Yn.east-Yn.west)*qt,Yn.halfDepth*2*qt),De.fillStyle="#345048";for(let h of s.vehicleSolids)De.fillRect(Le(h.x-h.w/2),Le(h.z-h.d/2),h.w*qt,h.d*qt);De.fillStyle="#6a7859",De.fillRect(Le(-10),Le(28),38,38),De.fillStyle="#ffe4aa",De.beginPath(),De.arc(Le(63.6),Le(0),3,0,2*Math.PI),De.fill(),De.textAlign="right",De.font="bold 9px system-ui",De.fillText("Vila das Lajes",Le(62),Le(-2));function sn(){let h=jr.value==="high",y=jr.value==="low";e.setPixelRatio(Math.min(devicePixelRatio,h?2:y?1:n?1.45:1.5)*(y?.85:q)),e.setSize($r.clientWidth,$r.clientHeight),e.shadowMap.enabled=!y&&(h||q>.76),s.sun.shadow.needsUpdate=!0,u.setScale($r.clientHeight*e.getPixelRatio()*.92),i.aspect=$r.clientWidth/Math.max(1,$r.clientHeight),i.updateProjectionMatrix()}function Ct(){Ve("sound").textContent=Ye.enabled?"Som ligado":"Som desligado",Ve("sound").setAttribute("aria-pressed",String(Ye.enabled))}function Hn(h){As.open&&no(),Ne=h,uM.hidden=h,Ve("hud").hidden=!h,Es.clear(),h?(Ye.start(),_t||(O=.32,I=.22),_t=!0,Ce=!0,se=performance.now(),Ve("pause").focus({preventScroll:!0}),Ve("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),Ye.motor(0,!1),Ve("help").removeAttribute("open"),Ve("title").innerHTML="GT<span>BASE</span>",Ve("intro").textContent="Jogo pausado em Vila Brasa.",Qr.textContent="Continuar",Ve("reset").hidden=!1,Qr.focus())}function hn(){ss={x:NaN,z:NaN,angle:0},Vu(),kt=[],nt=null,ut.visible=!1,ee=null,Gn=null,nn=null,Vn=null,jt.length=0,he=Xp,_e=!1,H=!1,ae=0,le=!1,ve="pistol",ye=!1,be=0,We=0,c.model.weapon="pistol",xe.weed=xe.coke=xe.ecstasy=0,Ze=null,Qe&&(Ht=!0,zc(Qe)),it=Pe=ot=Gt=et=P=0,J=0,At=!1,Et=null,a.reset(),s.resetDoors(),In=Zn=ts=yn=Di=0,er=!1,tr=0,eo=!1,O=.32,I=.22,Ae=0,Object.assign(c,jo,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),m(c),c.model.root.position.set(c.x,0,c.z),c.model.root.rotation.set(0,0,0),c.model.root.visible=!0,c.model.shadow.visible=!0,Ws(c.model,0,0,!1,!1),R.forEach((y,v)=>{let{x:N,z:C,angle:T}=[..._,...A][v];ii(y,{x:N,z:C,angle:T}),y.stolen=!1,y.body.rotation.z=0,di(y,0)}),ii(V,z),Object.assign(B,{target:null,carrying:!1,wait:0,stop:null,maneuver:null,stall:0}),g.clear(),E.forEach((y,v)=>{Xr(y,y.routeIndex,v>=8?3:0),di(y,0)});for(let y of L)ii(y.car,y.berth),Object.assign(y,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),di(y.car,0);for(let y of j)Xe(y);for(let y of k)y.seated=!0,y.model.root.visible=!1;for(let y of Te)t.remove(y.mesh);Te.length=0;for(let y of X)y.passengers=[],y.root.visible=!0,y.towed=!1,y.abandoned=0,y.lastProvoked=-100,y.leftInLane=!1,y.shopping=!1,y.visitTime=-100;s.props.reset(),u.clear(),c.ragdoll=null,s.sun.shadow.needsUpdate=!0,c.deadTime=0,ma(L[0]);let h=D.find(y=>y.kind==="armory")?.entry??Fr;s.marker.position.set(h.x,.02,h.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,pe=0}function st(h){to=h,P=2.4}let ri=()=>{let h=Object.entries(Ks).filter(([y])=>xe[y]>0).map(([y,v])=>v.name+" "+xe[y]);return h.length?h.join(" \xB7 "):""},Pn=yp(As,{balance:()=>"Saldo: R$ "+he.toLocaleString("pt-BR")+(ri()?" \xB7 "+ri():"")+(_e||ye?" \xB7 Balas: "+[_e?"pistola "+(ve==="pistol"?ae:be):"",ye?"fuzil "+(ve==="rifle"?ae:We):""].filter(Boolean).join(", "):""),onClose:()=>{Es.clear(),pe=0}});function rt(h){return he<h?"Saldo insuficiente.":(he-=h,Ye.bell(),null)}function Yt(h){ve==="rifle"?We=ae:be=ae,h==="fists"?H=!1:(H=!0,ve=h),ae=ve==="rifle"?We:be,c.model.weapon=ve,vn=null,Ni=0,si=null}function Jn(){let h=["fists",..._e?["pistol"]:[],...ye?["rifle"]:[]],y=H?ve:"fists";Yt(h[(h.indexOf(y)+1)%h.length])}function Pt(h,y){ve===h?ae=Math.min(900,ae+y):h==="rifle"?We=Math.min(900,We+y):be=Math.min(360,be+y)}function rn(h,y){let v=h.model,N=bs(t,y);N.root.position.copy(v.root.position),N.root.quaternion.copy(v.root.quaternion),N.root.visible=v.root.visible,N.weapon=v.weapon,t.remove(v.root),v.root.traverse(C=>{C instanceof Tt&&C!==v.shadow&&C.geometry.dispose()}),h.model=N}function Wt(h){let y=Object.keys(h)[0];if(["shirt","legs","shoes","glasses","chain","earrings","watch","ring"].includes(y)&&!kt.some(v=>JSON.stringify(v.changes)===JSON.stringify(h))){let v={shirt:"Blusa",legs:"Cal\xE7a / bermuda",shoes:"Cal\xE7ado",glasses:"\xD3culos",chain:"Corrente",earrings:"Brinco",watch:"Rel\xF3gio",ring:"Anel"};kt.push({label:v[y]+" \xB7 "+({tee:"camiseta",tank:"regata",dress:"social",none:"sem",pants:"cal\xE7a",shorts:"bermuda",flipflops:"chinelo",sneakers:"t\xEAnis",gold:"ouro",silver:"prata",diamond:"diamante",true:"com",false:"sem"}[String(h[y])]??String(h[y]))+(h[y+"Color"]?" #"+h[y+"Color"].toString(16):""),changes:h})}return He={...He,...h},rn(c,He),null}let nr=au,Eu=[3553348,2373199,5917242,2894892,8221798,11049860,15262678],Cu=[15789282,2236962,9056042,2969482,14725949,3107660];function Si(h,y,v,N){let C=He[y]===v;return{label:C?h+" (tirar)":h,price:C?0:N,active:C,buy:()=>C?Wt({[y]:typeof v=="boolean"?!1:"none"}):rt(N)??Wt({[y]:v})}}function qp(h){return h==="store"?{title:"Balc\xE3o de comida",sections:[{title:"Card\xE1pio",items:[{label:"Lanche (+30 de vida)",price:15,disabled:c.health>=100,buy:()=>{let y=rt(15);return y||(c.health=Math.min(100,c.health+30),null)}}]}]}:h==="armory"?{title:"Loja de armas",note:"Pistola e muni\xE7\xE3o dentro da lei, mais ou menos.",sections:[{title:"Armas",items:[{label:"Pistola + "+Js+" balas",price:Wp,disabled:_e,detail:_e?"Voc\xEA j\xE1 tem uma pistola.":"",buy:()=>rt(Wp)??(_e=!0,Pt("pistol",Js),Yt("pistol"),st("Pistola comprada."),null)},{label:"Repor muni\xE7\xE3o da pistola",price:0,disabled:!_e||(ve==="pistol"?ae:be)>=Js,detail:"Completa at\xE9 "+Js+" balas.",buy:()=>(Pt("pistol",Js-(ve==="pistol"?ae:be)),null)}]}]}:h==="black"?{title:"Penhores 24h \xB7 fundos",note:"Mercado negro. Pagamento na hora, sem nota fiscal.",sections:[{title:"Armas",items:[{label:"Fuzil + "+Nc+" balas",price:1200,disabled:ye,detail:ye?"Voc\xEA j\xE1 tem um fuzil.":"Rajada r\xE1pida e dano alto.",buy:()=>rt(1200)??(ye=!0,Pt("rifle",Nc),Yt("rifle"),st("Fuzil comprado."),null)},{label:"Muni\xE7\xE3o de fuzil ("+Nc+")",price:150,disabled:!ye,buy:()=>rt(150)??(Pt("rifle",Nc),null)},{label:"Pistola + "+Js+" balas",price:220,disabled:_e,buy:()=>rt(220)??(_e=!0,Pt("pistol",Js),Yt("pistol"),null)}]},{title:"Drogas no atacado (10 unidades)",items:Object.entries(Ks).map(([y,v])=>({label:v.name[0].toUpperCase()+v.name.slice(1)+" \xB7 estoque "+xe[y],price:v.pack,detail:"Venda no varejo por R$ "+v.retail+" a unidade.",buy:()=>rt(v.pack)??(xe[y]+=10,null)}))}]}:h==="clothes"?{title:"Moda Brasa",note:"Escolha a pe\xE7a e toque em uma cor.",sections:[{title:"Parte de cima",items:[{label:"Camiseta",price:60,active:He.shirt==="tee",colors:nr,buy:y=>rt(60)??Wt({shirt:"tee",shirtColor:y??He.shirtColor})},{label:"Regata",price:45,active:He.shirt==="tank",colors:nr,buy:y=>rt(45)??Wt({shirt:"tank",shirtColor:y??He.shirtColor})},{label:"Camisa social",price:120,active:He.shirt==="dress",colors:nr,buy:y=>rt(120)??Wt({shirt:"dress",shirtColor:y??He.shirtColor})},{label:"Sem camisa",price:0,active:He.shirt==="none",buy:()=>Wt({shirt:"none"})}]},{title:"Parte de baixo",items:[{label:"Cal\xE7a",price:90,active:He.legs==="pants",colors:Eu,buy:y=>rt(90)??Wt({legs:"pants",legColor:y??He.legColor})},{label:"Bermuda",price:60,active:He.legs==="shorts",colors:Eu,buy:y=>rt(60)??Wt({legs:"shorts",legColor:y??He.legColor})}]},{title:"Cal\xE7ados",items:[{label:"T\xEAnis",price:150,active:He.shoes==="sneakers",colors:Cu,buy:y=>rt(150)??Wt({shoes:"sneakers",shoeColor:y??He.shoeColor})},{label:"Chinelo",price:25,active:He.shoes==="flipflops",colors:Cu,buy:y=>rt(25)??Wt({shoes:"flipflops",shoeColor:y??He.shoeColor})},{label:"Sapato social",price:180,active:He.shoes==="dress",buy:()=>rt(180)??Wt({shoes:"dress"})}]},{title:"Acess\xF3rios",items:[Si("\xD3culos escuros","glasses",!0,80),Si("Corrente de prata","chain","silver",250),Si("Corrente de ouro","chain","gold",900),Si("Brincos de prata","earrings","silver",120),Si("Brincos de ouro","earrings","gold",400),Si("Brincos de diamante","earrings","diamond",1500),Si("Rel\xF3gio de prata","watch","silver",300),Si("Rel\xF3gio de ouro","watch","gold",1100),Si("Anel de prata","ring","silver",150),Si("Anel de ouro","ring","gold",500)]}]}:h==="barber"?{title:"Barbearia do Z\xE9",note:"Corte e barba. Toque em uma cor para pintar.",sections:[{title:"Pele",items:[{label:"Tom de pele",price:0,colors:cu,buy:y=>Wt({skin:y??He.skin})}]},{title:"Cabelo",items:Object.entries(ru).map(([y,v])=>({label:v,price:y==="cap"?50:40,active:He.hair===y,colors:y==="bald"?void 0:y==="cap"?[1522486,9056042,2236962,2772879,14725949,15789282]:lu,buy:N=>rt(y==="cap"?50:40)??Wt(y==="cap"?{hair:y,capColor:N??He.capColor}:{hair:y,hairColor:N??He.hairColor})}))},{title:"Barba",items:Object.entries(ou).map(([y,v])=>({label:v,price:y==="none"?15:25,active:He.beard===y,buy:()=>rt(y==="none"?15:25)??Wt({beard:y})}))}]}:{title:"Loja",sections:[]}}function Yp(h){Es.clear(),document.pointerLockElement&&document.exitPointerLock(),Pn.show(()=>qp(h.service))}function no(){Pn.close()}function ua(h){let y={...h,ground:X.includes(h)?h.root.position.y:l(h),angle:h.angle},v=d();return L.some(N=>{let{officer:C,car:T,mode:Q}=N;return C.health<=0?!1:C.seated&&["driving","patrol","returning"].includes(Q)?Zr({...T,ground:T.root.position.y},y,v,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Zr({...C,ground:l(C)},y,v,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function Ru(h,y){if(y<12||$.some(T=>T.calling))return;let v=d(),N={...h,ground:l(h)},C=$.find(T=>["civilian","clerk"].includes(T.role)&&pn(T)&&!T.buyer&&!(T.brawl>0)&&re(T,h)<24&&re(T,h)>2&&Zr({...T,ground:l(T)},N,v,{range:24,fov:Math.PI*1.3,eye:1.6,aim:1.1}));C&&(C.calling={time:3.6,pressure:y,x:h.x,z:h.z})}function ns(h,y=ee??c,v=ua(y)){if(!v)return Ru(y,h),!1;let N=Ic(it);return it=Math.min(64,Math.max(it+(it>0?h*.52:0),h)),At=!0,J=.24,Et={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle},N||st("Crime visto pela pol\xEDcia."),!0}let Iu=()=>ee||l(c)>=1?null:D.find(h=>s.interiorAt(c.x,c.z,l(c))?.buildingId===h.id&&re(c,h.clerk)<3)??null,Zp={store:"Comprar comida",armory:"Abrir loja de armas",clothes:"Ver roupas",barber:"Cortar cabelo",black:"Negociar nos fundos"},Pu=()=>Qe&&Ht&&!ee&&re(c,Gs.door)<2.6,Fc=()=>ee&&ee!==Jp().find(h=>h===ee)&&re(ee,Gs.door)<3.4&&Math.hypot(ee.vx,ee.vz)<2,Lu=()=>s.interiorAt(c.x,c.z,l(c))?.buildingId==="lajes-home"&&re(c,Yn.home)<1.4,Du=()=>!ee&&(Lu()||re(c,{x:Rn.x,z:Rn.z+6.25})<1.7),Nu=()=>X,pn=h=>h&&h.health>0&&!h.seated,da=h=>(h.kind==="bike"?"Moto ":"")+(h.spec?.name??"Carro"),Uu=()=>!ee&&s.doors.find(h=>h.private&&!h.breached&&!h.opened&&Math.abs(h.base-l(c))<.85&&re(h,c)<1.62);function Fu(){if(l(c)>1.02)return null;let h=null,y=1/0;for(let v of S){let N=re(c,v),C=v.kind==="bike"?3:Math.max(3,v.halfLength+.6);B.carrying&&B.target===v||N>=C||N>=y||v.integrity<=0||v.wrecked||v.burning||Math.abs(v.speed)>3.4||(h=v,y=N)}return h}function Ui(h=!1){if(!ee)return;let{angle:y,x:v,z:N}=ee;if(!h&&Math.hypot(ee.vx,ee.vz)>4.2){st("Reduza a velocidade para sair.");return}let C=ee.kind==="bike"?1.02:ee.halfWidth+.67,T=ee.kind==="bike"?1.75:ee.halfLength+.65,Q=[C,-C,C+.53,-C-.53].map(de=>[v+Math.cos(y)*de,N-Math.sin(y)*de]);Q.push([v-Math.sin(y)*T,N-Math.cos(y)*T],[v+Math.sin(y)*T,N+Math.cos(y)*T]);let ne=Q.find(([de,Re])=>Bn({x:de,z:Re},de,Re,s.walkSolids(de,Re,0),X,$,.36));if(!ne&&!h){st("Sem espa\xE7o para abrir a porta.");return}[c.x,c.z]=ne??[jo.x,jo.z],c.floorY=0,m(c);for(let de of[...ee.passengers??[]])rr(de);c.angle=y,Object.assign(c,{vx:0,vz:0,pushX:0,pushZ:0}),Vu(),ee.abandoned=0,ee.leftInLane=!!Zu(ee),ee=null,c.model.root.visible=!0,c.model.shadow.visible=!0,c.model.root.rotation.set(0,y,0),Ws(c.model,0,0,!1,H)}function zu(){ve==="rifle"?We=ae:be=ae;let h={checkpoint:Lu()?"lajes":"brasa",wardrobe:kt,health:c.health,cash:he,armed:_e,equipped:H,ammo:be,rifle:ye,rifleAmmo:We,look:He,stash:{...xe},garage:Qe?{kind:Qe.kind,model:Qe.model,color:Qe.color}:null,recruits:jt.map(y=>y.id)};return Hp(h)}let Jp=()=>L.map(h=>h.car);function Ou(h,y,v){return Qe&&(t.remove(Qe.root),X.splice(X.indexOf(Qe),1),S.splice(S.indexOf(Qe),1)),Qe=h==="bike"?Mc(t,v,y):Hr(t,y,v),Qe.stolen=!0,X.push(Qe),S.push(Qe),Qe}function zc(h){ii(h,Gs.inside),h.root.visible=!1,di(h,0)}function Kp(h){let y=h.kind,v=h.model,N=h.color;if(Ui(!0),h!==Qe){let C=R.indexOf(h);if(C>=0){let{x:T,z:Q,angle:ne}=[..._,...A][C];ii(h,{x:T,z:Q,angle:ne}),h.stolen=!1,h.towed=!1,h.root.visible=!0,di(h,0)}else h.routeIndex>=0&&(Xr(h,h.routeIndex),di(h,0));Ou(y,v,N)}Ht=!0,zc(Qe),Object.assign(c,{x:Gs.door.x-1.6,z:Gs.door.z+1.4,floorY:0}),m(c),zu(),st("Ve\xEDculo guardado na garagem e salvo."),Ye.bell()}function $p(){Qe&&(Ht=!1,ii(Qe,Gs.out),Qe.root.visible=!0,di(Qe,0),Oc(Qe),st("Ve\xEDculo retirado da garagem."))}function jp(){Ui(!0),Object.assign(c,{x:Rn.x,z:Rn.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0,ragdoll:null}),m(c),yn=0,it=0,Di=0,O=-Math.PI/2,Ce=!0,st("Voc\xEA voltou para casa.")}function Qp(){if(Gn||c.health<=0)return;if(ee&&!Fc()){Ui();return}let h=Iu();if(h){Yp(h);return}if(Fc()){Kp(ee);return}if(Pu()){$p();return}if(Du()){st(zu()?"Progresso salvo em casa.":"O navegador bloqueou o salvamento."),Ye.bell();return}let y=Fu();if(!y){st(Uu()?"Porta trancada.":"Nada para interagir aqui.");return}if(y.driver){let v=U(y)??k.find(N=>N.exitAge>14&&N.role==="civilian"&&re(N,c)>11);if(v){let N=y.angle+(y.kind==="bike"?-1:1)*Math.PI/2,C=y.x+Math.sin(N)*(y.kind==="bike"?.95:1.51),T=y.z+Math.cos(N)*(y.kind==="bike"?.95:1.51),Q=Bn({x:C,z:T},C,T,s.walkSolids(C,T,0),X,$,.29)?{x:C,z:T}:{x:c.x,z:c.z};Xe(v),Object.assign(v,Q,{angle:N,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),Math.random()<.35&&(v.fear=0,v.brawl=9,v.attack=1.2),y.rider&&(y.rider.root.visible=!1)}y.driver=null,y.vx=y.vz=y.speed=0,y.doorTime=.65,Gn={car:y,delay:.46},st(y.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else Oc(y)}function Oc(h){if(!(h.burning||h.wrecked||h.integrity<=0)){if(ee=h,h.driver=null,c.lift=0,Object.assign(c,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),yn=0,c.model.root.visible=!0,c.model.shadow.visible=!1,h.stolen||(h.stolen=!0,ns(13)),h.passengers??=[],h.kind==="car"){let y=h.spec.seats;jt.filter(N=>pn(N)&&re(N,h)<35&&N.order!=="dealer").sort((N,C)=>re(N,h)-re(C,h)).slice(0,Math.max(0,y.length-1-h.passengers.length)).forEach((N,C)=>{let T=y[Math.min(y.length-1,1+C+h.passengers.length)];N.boardCar=h,N.boardRow=T[1],N.boardSide=Math.sign(T[0])||1})}O=h.angle,Ae=0,Ce=!0}}function Bc(h,y,v){let N=new Tt(fe,Ee[h]),C=l(y)+.13;N.position.set(y.x+.22,C,y.z+.19),t.add(N),Te.push({mesh:N,kind:h,count:v,y:C,wait:.32,left:105})}function em(h){for(let y=Te.length-1;y>=0;y--){let v=Te[y];v.left-=h,v.wait-=h,v.mesh.rotation.y+=h*2.1,v.mesh.position.y=v.y+Math.sin(v.left*3.8)*.08;let N=!ee&&c.health>0&&v.wait<0&&Math.abs(l(c)-v.y)<.65&&Math.hypot(c.x-v.mesh.position.x,c.z-v.mesh.position.z)<1.03;N&&(v.kind==="cash"?(he+=v.count,st("R$ "+v.count+" recolhidos.")):v.kind==="weapon"?(_e||(_e=!0,Yt("pistol")),Pt("pistol",v.count),st("Pistola recolhida.")):(Pt("pistol",v.count),st("+"+v.count+" balas de pistola.")),Ye.bell()),(N||v.left<=0)&&(t.remove(v.mesh),Te.splice(y,1))}}function Kn(h,y,v=null){if(h.health<=0||y<=0)return;if(h.health=Math.max(0,h.health-y),h===c&&(c.lastHurt=me),u.blood(h.x,l(h)+1.1,h.z),h.health<=0){let T=v?h.x-v.x:h.pushX,Q=v?h.z-v.z:h.pushZ;if(h.fallDir=Math.sin(h.angle)*T+Math.cos(h.angle)*Q>0?1:-1,h.deadTime=0,v&&h!==c){let ne=Math.max(.1,Math.hypot(T,Q));h.pushX+=T/ne*1.3,h.pushZ+=Q/ne*1.3}}if(h===c){ts=.22,v&&tm(v),h.health<=0&&(Ui(!0),Di=3,st("Voc\xEA caiu. Voltando para casa\u2026"));return}if(h.stagger=.32,h.fear=h.brawl>0?0:6,h.calling=null,h.buyer=null,h.surrender=0,nn?.npc===h&&(nn=null),h.health>0)return;Vn===h&&(Vn=null),h.down=h.role==="police"?28:19,h.model.shadow.visible=!1;let N=new Tt(ge,Z);N.position.set(h.x+Math.sin(h.angle)*h.fallDir*1,l(h)+.019,h.z+Math.cos(h.angle)*h.fallDir*1),N.rotation.x=-Math.PI/2,N.scale.set(.52,.32,1),t.add(N),h.drop=N,["police","ally"].includes(h.role)&&Bc("weapon",h,12),h.role!=="ally"&&!h.robbed&&Bc("cash",h,h.wallet);let C=jt.indexOf(h);C>=0&&jt.splice(C,1)}function tm(h){let y=Math.atan2(h.x-c.x,h.z-c.z)-O,v=document.createElement("div");v.className="hurt",v.style.transform="rotate("+-y+"rad)",Ve("damage-dir").append(v),window.setTimeout(()=>v.remove(),1100)}function fa(h){return[...$,c].filter(v=>v!==h&&pn(v)&&!(v===c&&ee&&ee.kind==="car")).map(v=>{let N=l(v)+(v===c?c.lift:0);return{actor:v,y:N,bounds:[v.x-.31,N+.1,v.z-.31,v.x+.31,N+1.9,v.z+.31]}})}function Bu(){i.getWorldDirection(Ot);let h=fa(c),y=d(),v=la(i.position.toArray(),Ot.toArray(),y,h,28).hit,N=[c.x,l(c)+1.38+c.lift,c.z];if(v&&re(c,v.actor)<24&&Yr(N,[v.actor.x,v.y+1.25,v.actor.z],y))return v.actor;let C=.15,T=null;for(let{actor:ne,y:de}of h){if(re(c,ne)>18)continue;tt.set(ne.x,de+1.25,ne.z).project(i);let Re=Math.hypot(tt.x,tt.y);tt.z>=1||Re>=C||!Yr(N,[ne.x,de+1.25,ne.z],y)||(C=Re,T=ne)}if(T)return T;let Q=X.filter(ne=>ne!==ee&&ne.integrity>0&&re(c,ne)<32).map(ne=>({car:ne,oriented:{center:[ne.x,ne.root.position.y+.8,ne.z],half:ne.kind==="bike"?[.4,.75,1.1]:[ne.halfWidth+.05,.75,ne.halfLength],angle:ne.angle}}));return la(i.position.toArray(),Ot.toArray(),y,Q,34).hit?.car??null}let ir=h=>L.find(y=>y.car===h),ku=h=>X.includes(h);function kc(h){if(h===ee||h.driver||wn.has(h)&&h.passengers?.length)return!0;let y=ir(h);return!!(y&&y.officer.seated&&y.officer.health>0&&["driving","patrol"].includes(y.mode))}let sr=h=>!!h&&(ku(h)?h!==ee&&h.integrity>0&&kc(h):pn(h));function Fi(h){if(h){if(ku(h)){h!==ee&&h.integrity>0&&kc(h)&&(Vn=h);return}h.role!=="ally"&&h.health>0&&(Vn=h)}}function is(h,y,v){let N=ir(h),C=N&&N.officer.seated&&["driving","patrol"].includes(N.mode)?N:null,T=C?.officer??(h.driver?U(h):null);if(!T)return!1;C||Xe(T);let Q=h.angle+(h.kind==="bike"?-1:1)*Math.PI/2,ne=h.kind==="bike"?.95:h.halfWidth+.6;return Object.assign(T,{seated:!1,x:h.x+Math.sin(Q)*ne,z:h.z+Math.cos(Q)*ne,fear:6,exitAge:0,floorY:0}),T.model.root.visible=!0,T.model.shadow.visible=!0,h.driver=null,h.vx*=.45,h.vz*=.45,h.speed*=.45,h.rider&&(h.rider.root.visible=!1),C&&(C.mode="foot"),Kn(T,y,v),!0}function Gu(h,y){if(!y||!h.flat)return!1;let v=Math.sin(h.angle),N=Math.cos(h.angle),C=y[0]-h.x,T=y[2]-h.z,Q=C*N-T*v,ne=C*v+T*N,de=y[1]-h.root.position.y,Re=!1;return h.wheels.forEach((Fe,Je)=>{!h.flat[Je]&&de<h.wheelRadius*2+.1&&Math.hypot(Q-Fe.position.x,ne-Fe.position.z)<h.wheelRadius+.2&&(h.flat[Je]=!0,Re=!0)}),Re}function nm(h,y,v,N){if(h.lastHitBy=v,y<h.wheelRadius*2&&Gu(h,N)){h===ee&&st("Pneu furado.");return}if(N&&u.sparks(N[0],N[1],N[2],4,2),h.kind==="bike"){if(y>.85||Math.random()<.45){h===ee?(Kn(c,14,v),c.health>0&&Math.random()<.3&&(Ui(!0),c.trip=.6,st("Voc\xC3\xAA caiu da moto."))):is(h,40,v);return}h.integrity=Math.max(0,h.integrity-4);return}if(y>.92){if(xu(h,N),h===ee){let C=(h.passengers??[]).filter(Q=>Q.health>0),T=C.length&&Math.random()<C.length/(C.length+1.6)?C[Math.floor(Math.random()*C.length)]:c;Kn(T,T===c?16:24,v),T===c&&st("Tiro atravessou o vidro.")}else is(h,38+Math.round(Math.random()*30),v);return}h.integrity=Math.max(0,h.integrity-3)}function im(h,y){let v=Math.sin(h.angle),N=Math.cos(h.angle),C=y.boardRow??-1,T=h.halfWidth+.55;for(let Q of[y.boardSide??1,-(y.boardSide??1)]){let ne={x:h.x+N*Q*T+v*C,z:h.z-v*Q*T+N*C};if(Bn(y,ne.x,ne.z,s.walkSolids(ne.x,ne.z,0),[],[],.3))return ne}return{x:h.x-v*(h.halfLength+.7),z:h.z-N*(h.halfLength+.7)}}let wn=new Map;function sm(h){let y=S.filter(N=>N.kind==="car"&&N!==ee&&!N.burning&&!N.wrecked&&N.integrity>12&&Math.abs(N.speed)<3&&(!Ht||N!==Qe)&&!N.shopping&&(N.passengers?.length??0)+jt.filter(C=>C.boardCar===N).length<N.spec.seats.length);y.sort((N,C)=>re(h,N)-re(h,C));let v=y[0];v&&(wn.has(v)||wn.set(v,{car:v,stall:0}),h.boardCar=v,h.boardSide=Math.sign(v.spec.seats[0][0]),h.boardRow=v.spec.seats[0][1],v.passengers??=[])}function Vu(){for(let h of wn.keys()){for(let y of[...h.passengers??[]])rr(y);for(let y of jt)y.boardCar===h&&(y.boardCar=null);h.speed=h.vx=h.vz=0}wn.clear()}function rm(h,y){let v=h.boardCar;if(!ee||ee!==v&&!wn.has(v)||v.burning||v.integrity<=0||(v.passengers?.length??0)>=v.spec.seats.length-(v===ee?1:0))return h.boardCar=null,0;if(Math.hypot(v.vx,v.vz)>2.5){let Se=Ju(v,jt.indexOf(h));return re(Se,h)>1.25?Vc(h,Se,6.1,y):0}let N=im(v,h),C=Math.sin(v.angle),T=Math.cos(v.angle),Q=h.x-v.x,ne=h.z-v.z,de=Q*C+ne*T,Re=Q*T-ne*C,Fe=(N.x-v.x)*T-(N.z-v.z)*C;if(re(h,N)<.75||re(h,v)<v.halfWidth+.9||Math.abs(Re)>v.halfWidth+.2&&Math.abs(Re)<v.halfWidth+1&&Math.abs(de)<v.halfLength-.55)return h.seated=!0,h.riding=v,h.boardCar=null,h.model.root.visible=!1,wn.has(v)&&v.driver&&is(v,0,h),v.passengers.push(h),v.doorTime=.6,0;if(Math.abs(Re)>=v.halfWidth+.45)return h.boardSide=Math.sign(Re),Mn(h,N,4.8,y);let Je=Math.sign(Fe)||1,ze=(Math.sign(de)||1)*Math.max(v.halfLength+.65,Math.abs(de)),ke=v.halfWidth+.68;return Mn(h,{x:v.x+C*ze+T*Je*ke,z:v.z+T*ze-C*Je*ke},4.8,y)}function rr(h){let y=h.riding;if(h.riding=null,h.boardCar=null,!y)return;y.passengers=(y.passengers??[]).filter(de=>de!==h);let v=Math.sin(y.angle),N=Math.cos(y.angle),C=y.halfWidth+.62,T=y.halfLength+.9,Q=[[C,-1],[-C,-1],[C,.6],[-C,.6],[0,-T],[C+.7,0],[-C-.7,0],[0,T]].map(([de,Re])=>({x:y.x+N*de+v*Re,z:y.z-v*de+N*Re})),ne=Q.find(de=>Bn(h,de.x,de.z,s.walkSolids(de.x,de.z,0),X.filter(Re=>Re!==y),$,.3))??Q[0];Object.assign(h,ne,{seated:!1,floorY:0,angle:y.angle,exitAnim:.3,exitSide:1}),m(h),h.model.root.visible=!0,h.model.shadow.visible=!0}function Hu(h){for(let y of X){if(y.kind!=="car")continue;let v=y===ee||re(y,h)<40,N=ir(y),C=N&&N.officer.seated&&N.officer.health>0&&["driving","patrol"].includes(N.mode)?N.officer:null,T=y.ownDriver?.seated&&y.driver&&y!==ee?y.ownDriver:null,Q=y===ee?c:C??T;(wn.has(y)&&y.passengers?.length?y.passengers:[Q,...y.passengers??[]]).forEach((ne,de)=>{ne&&(v?Ap(ne.model,y,de):ne.model.root.visible=!1)})}}function om(h){for(let y of jt){if(!y.riding)continue;let v=y.riding;if(!ee||ee!==v&&!wn.has(v)||y.health<=0){rr(y);continue}y.x=v.x,y.z=v.z,y.floorY=0,y.attack-=h;let N=sr(y.commandTarget)?y.commandTarget:Vn;sr(N)&&y.attack<=0&&re(v,N)<18&&Xu(y,N)}}function am(h,y){let v=d(),N={...h,ground:l(h)};for(let C of L){let T=C.officer;pn(T)&&(T===y||Zr({...T,ground:l(T)},N,v,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(C.retaliation=h)}}function lm(h){if(!h||!["civilian","resident"].includes(h.role)||h.health<=0){st("Mire em um pedestre dispon\xEDvel para recrutar.");return}h.role="ally",h.order="follow",h.surrender=0,h.fear=0,h.route=[],jt.push(h),nn?.npc===h&&(nn=null),st("Guarda-costas recrutado."),Ye.bell()}function cm(h,y){if(c.health<=0||!y||!["civilian","resident","clerk"].includes(y.role)||y.robbed||re(c,y)>9||Math.abs(l(c)-l(y))>.65){nn&&(nn.npc.surrender=0,nn=null);return}let v=c.x-y.x,N=c.z-y.z,C=Math.sin(y.angle)*v+Math.cos(y.angle)*N;if(nn?.npc!==y){if(nn&&(nn.npc.surrender=0),nn=null,C<Math.hypot(v,N)*.3||y.stagger>0||y.fear>0)return;nn={npc:y,left:5}}if(y.surrender=1,y.angle=Math.atan2(v,N),nn.left-=h,nn.left<=0){y.robbed=!0,y.surrender=0,y.fear=7;let T=D.find(Q=>Q.id===y.home.buildingId);if(Bc("cash",y,T?85+y.wallet*3:y.wallet),T){ns(30,c,!0),Et={...T.outside,y:0,health:100,seated:!1,angle:0};let Q=L.filter(ne=>ne.officer.health>0&&ne.car.integrity>12&&!ne.car.burning).sort((ne,de)=>re(ne.car,Et)-re(de.car,Et))[0];Q&&(si={unit:Q,location:Et,time:42}),st("Alarme acionado. Viatura a caminho.")}else ns(15),st("Dinheiro no ch\xE3o.");nn=null}}function hm(){c.ragdoll||In>0||c.health<=0||c.trip>.15||Gn||(c.angle=O,Qs=1-Qs,c.pushX+=Math.sin(O)*1.5,c.pushZ+=Math.cos(O)*1.5,In=Kr,er=!0,tr=Zs,Fi(vn),Ye.punch(!1))}function um(){if(er=!1,c.health<=0||ee)return;let h=Up(c,$.filter(C=>pn(C)&&C.role!=="ally"&&Math.abs(l(c)-l(C))<.73),l(c)+c.lift,d());if(!h)return;Fi(h),Ye.punch(!0);let y=h.x-c.x,v=h.z-c.z,N=Math.max(.2,Math.hypot(y,v));h.pushX=y/N*3.6,h.pushZ=v/N*3.6,Kn(h,18,c),h.role==="civilian"&&h.health>0&&!(h.brawl>0)&&Math.random()<(h.model.root.scale.x>1.05?.22:.12)&&(h.brawl=10,h.fear=0,h.attack=.4,Fi(h),st("Ele vai revidar!")),Zn=.19,ns(h.role==="police"?28:12),st(h.health<=0?"Pedestre derrubado.":"Soco acertou.")}function dm(h){if(c.ragdoll||In>0||Pe>0||c.health<=0||!_e||!H)return;if(ae<=0){h&&Fi(vn),Pe=.32,st("Sem balas. Reponha na loja.");return}let y=ua(c),v=ve==="rifle";ae--,Pe=v?.11:.52,ot=.095,c.angle=O,c.model.root.rotation.y=O,Ws(c.model,0,0,!0,!0,0,h?I:I-.22),(v?c.model.rifleMuzzle:c.model.muzzle).getWorldPosition(zt),v?Ye.rifle():Ye.shot();let N=fa(c),C=X.map(Se=>{let ft=Se.root.position.y,It=Se.kind==="bike",Zt=It?0:.1,mn=It?0:Se.spec.belt;return{car:Se,oriented:{center:[Se.x,ft+(It?.67:(Zt+mn)/2),Se.z],half:It?[.31,.44,1.08]:[Se.halfWidth-.01,(mn-Zt)/2,Se.halfLength-.05],angle:Se.angle}}});i.getWorldDirection(Ot);let T=X.filter(Se=>Se.rider&&Se.driver).map(Se=>({rider:Se,oriented:{center:[Se.x,Se.root.position.y+1.42,Se.z],half:[.32,.45,.33],angle:Se.angle}})),Q=X.filter(Se=>Se.cabin&&Se!==ee).map(Se=>{let ft=Ep(Se);return{windowCar:Se,oriented:{center:[Se.x+ft.z*Math.sin(Se.angle),Se.root.position.y+ft.y,Se.z+ft.z*Math.cos(Se.angle)],half:[ft.halfX,ft.halfY,ft.halfZ],angle:Se.angle}}}),ne=d(),de=[...N,...T,...Q,...C],Re=zt.toArray(),Fe=Np(i.position.toArray(),Ot.toArray(),Re,ne,de,{ground:kn}),Je=Fe.impact,ce=Je.hit,ze=s.doors.find(Se=>Se.private&&!Se.breached&&Je.solid===Se.closedSolid&&Math.hypot(Je.point[0]-Se.handle.x,Je.point[1]-Se.handle.y,Je.point[2]-Se.handle.z)<.28),ke=17;if(ze&&s.breachDoor(ze.id))ke=23,st("Fechadura rompida.");else if(ce?.actor&&ce.actor.role!=="ally")Fi(ce.actor),Kn(ce.actor,Math.round(Tu(Je.point[1]-ce.y)*(v?1.45:1)),c),ke=ce.actor.role==="police"?34:23,Zn=.21,st(ce.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(ce?.rider||ce?.windowCar){let Se=ce.rider??ce.windowCar;Fi(Se),ce.windowCar&&xu(Se,Je.point);let[ft,It]=Se.spec.seats?.[0]??[-.42,0],Zt={oriented:{center:[Se.x+ft*Math.cos(Se.angle)+It*Math.sin(Se.angle),Se.root.position.y+(Se.seatHip??.54)+.66,Se.z-ft*Math.sin(Se.angle)+It*Math.cos(Se.angle)],half:[.26,.28,.29],angle:Se.angle}};kc(Se)&&(ce.rider||la(Re,Fe.direction,[],[Zt],52).hit)&&is(Se,ce.rider?v?75:50:100,c)&&(Zn=.21)}else ce?.car?(Fi(ce.car),ce.car.lastHitBy=c,u.sparks(Je.point[0],Je.point[1],Je.point[2],5,2.2),Gu(ce.car,Je.point)?st("Pneu furado."):ce.car.integrity=Math.max(0,ce.car.integrity-3),Zn=.16):h&&Fi(vn);ns(ke,c,y);for(let Se of $)["civilian","resident"].includes(Se.role)&&re(Se,c)<17&&(Se.fear=Math.max(Se.fear,4.8));a.emit(Re,Je,{mark:ce?.car?!0:void 0,attach:ce?.car?.root})}function fm(h,y){let v=ee;ui(v,h,{throttle:y.y,steer:-y.x,brake:y.brake},r,Nu());let N=v.bumpedVehicle;if(N&&E.includes(N)&&N.driver&&(N.lastProvoked??-100)<me-20&&(N.lastProvoked=me,Math.random()<.12&&Math.abs(N.speed)<4&&N.kind==="car")){let C=U(N);C&&is(N,0,c)&&(C.brawl=8,C.fear=0)}Ae>1.15&&Math.abs(v.speed)>2.4&&(O=On(O,v.angle,h*2.3))}function pm(h,y){if(c.ragdoll&&(Sc(c,h,l(c),(Re,Fe)=>!Fn(Re,Fe,.25,f(c))),c.ragdoll||c.health<=0))return;let v=Math.min(1,Math.hypot(y.x,y.y)),N=c.health>0&&!Gn&&c.trip<.12,C=N?v*(y.aim?2.1:y.run?7.4:4.2):0,T=O+Math.atan2(-y.x,y.y||0);y.jump&&N&&c.lift===0&&(yn=4.18),(yn!==0||c.lift>0)&&(c.lift=Math.max(0,c.lift+yn*h-11.8*h*h),yn=c.lift>0?yn-23.6*h:0);let Q=1-Math.exp(-h*(C>.02?19:27));c.vx+=(Math.sin(T)*C-c.vx)*Q,c.vz+=(Math.cos(T)*C-c.vz)*Q;let ne=_c(c,(c.vx+c.pushX)*h,(c.vz+c.pushZ)*h,f(c),p(c),$);c.pushX*=Math.exp(-h*6.2),c.pushZ*=Math.exp(-h*6.2),c.trip=Math.max(0,c.trip-h),In<=0&&N&&(y.aim||v>.05)&&(c.angle=On(c.angle,y.aim?O:T,h*11));let de=c.model;if(m(c),de.root.position.set(c.x,l(c)+c.lift,c.z),de.shadow.visible=c.health>0&&c.lift<.06,c.health<=0){c.deadTime=(c.deadTime??0)+h;let Re=ia(de,c.deadTime,-1);de.root.rotation.set(Re,c.angle,0),de.root.position.y+=Math.abs(Math.sin(Re))*.31;return}de.root.rotation.set(Math.min(1.25,c.trip*2.7),c.angle,0),Ws(de,h,c.trip>.05?0:Math.min(7.5,ne/h),H&&(y.aim||ot>0)&&In<=0,H&&In<=0,0,y.aim?I:0),(In>0||y.aim&&!H)&&wu(de,{aim:y.aim,punch:In,pitch:I,walking:ne>.01,hand:Qs}),ne&&et<=0&&c.lift===0&&(Ye.step(),et=y.run?.27:.41)}function Wu(h){let y=Math.sin(h.angle),v=Math.cos(h.angle),N=h.halfWidth+.68;return[N,-N].flatMap(C=>[.28,-.82,1.18].map(T=>({x:h.x+v*C+y*T,z:h.z-y*C+v*T}))).find(C=>Bn(C,C.x,C.z,s.walkSolids(C.x,C.z,0),X,[],.36))}function mm(h,y,v){let N=Math.sin(y.angle),C=Math.cos(y.angle);if(!v)return null;if(![.28,.5,.73,.92].some(de=>{let Re=h.x+(v.x-h.x)*de,Fe=h.z+(v.z-h.z)*de,Je=Re-y.x,ce=Fe-y.z;return Math.abs(Je*N+ce*C)<y.halfLength+.35&&Math.abs(Je*C-ce*N)<y.halfWidth+.35}))return v;let Q=((h.x-y.x)*N+(h.z-y.z)*C>0?1:-1)*(y.halfLength+.8),ne=(v.x-y.x)*C-(v.z-y.z)*N;return{x:y.x+N*Q+C*ne,z:y.z+C*Q-N*ne}}function gm(h){let y=h.officer,v=h.car,N=Math.sin(v.angle),C=Math.cos(v.angle),T=v.halfLength+.7,Q=Wu(v)??[{x:v.x-N*T,z:v.z-C*T},{x:v.x+N*T,z:v.z+C*T}].find(ne=>Bn(ne,ne.x,ne.z,s.walkSolids(ne.x,ne.z,0),X,$,.37));return Q?(y.seated=!1,y.model.root.visible=!0,y.x=Q.x,y.z=Q.z,y.floorY=0,m(y),y.angle=v.angle,y.exitAnim=.38,y.model.shadow.visible=!0,v.doorTime=.65,h.mode="foot",!0):!1}function Xu(h,y){let v=X.includes(y)?y:null;if(re(h,y)>18||re(h,y)<.5||(v?v.integrity<=0:!pn(y)))return!1;let N=l(h),C=(v?v.root.position.y:l(y))+(y===c?c.lift:0)+(v?1.08:1.27),T=d();if(!Yr([h.x,N+1.35,h.z],[y.x,C,y.z],T))return!1;h.angle=Math.atan2(y.x-h.x,y.z-h.z),h.model.root.position.set(h.x,N,h.z),h.model.root.rotation.y=h.angle;let Q=Math.atan2(N+1.42-C,Math.max(.4,re(h,y)));Ws(h.model,0,0,!0,!0,0,Q),h.model.muzzle.getWorldPosition(Nt);let ne=me*14+h.x,de=Math.sin(ne)*(h.role==="ally"?.35:.48),Re=y.x+Math.cos(h.angle)*de,Fe=y.z-Math.sin(h.angle)*de;Rt.set(Re,C+Math.cos(ne*1.4)*.32,Fe);let Je=Math.min(24,Nt.distanceTo(Rt)+1.65),ce=cn.subVectors(Rt,Nt).normalize(),ze=fa(h);v&&ze.push({actor:v,y:0,bounds:[y.x-.93,.3,y.z-1.02,y.x+.93,1.52,y.z+1.02]});let ke=Ac(Nt.toArray(),ce.toArray(),T,ze,Je,{ground:kn});if(h.role==="ally"&&(y.role==="police"||ir(y)||ke.hit?.actor.role==="police")&&am(h,ke.hit?.actor),ke.hit&&(ke.hit.actor===y||ke.hit.actor.role==="civilian")){let Se=h.role==="police"&&y===c?.62:.83;if(v&&ke.hit.actor===v){let ft=[Nt.x+ce.x*ke.distance,Nt.y+ce.y*ke.distance,Nt.z+ce.z*ke.distance];nm(v,ft[1]-v.root.position.y,h,ft)}else Kn(ke.hit.actor,Math.round(Tu(Nt.y+ce.y*ke.distance-ke.hit.y)*Se),h)}Rt.copy(Nt).addScaledVector(ce,ke.distance),h.role!=="ally"&&(y===c||y===ee||lp(Nt,Rt,ee??c))&&Fi(h),a.emit(Nt.toArray(),ke,{enemy:!0});for(let Se of $)["civilian","clerk"].includes(Se.role)&&!(Se.brawl>0)&&re(Se,h)<16&&(Se.fear=Math.max(Se.fear,4.5));return h.attack=(h.role==="police"?.91:1.07)+(Math.sin(ne)+1)*.18,re(h,ee??c)<31&&Ye.shot(),!0}function Gc(h,y,v){let N=re(h,y);return h.stagger>0||h.exitAnim>0?{speed:0,aim:!1}:N<17&&h.attack<=0&&Xu(h,y)||h.attack>.28&&N<15.5?(h.angle=On(h.angle,Math.atan2(y.x-h.x,y.z-h.z),v*12),{speed:0,aim:!0}):{speed:N>3.3||Math.abs(l(h)-l(y))>1.8?Vc(h,y,4.4,v):0,aim:N<12}}let pa=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function qu(h){let y={kind:"car",shape:h.car.shape};return Xr(y,h.route,h.startShift),y}function ma(h,y=!0){let{car:v,officer:N}=h;if(y){let C=qu(h);ii(v,C),v.driver=C.driver}else{let C={};Xr(C,h.route),v.driver=C.driver;let T=Math.sin(v.angle),Q=Math.cos(v.angle),ne=1/0;v.driver.route.forEach((de,Re)=>{let Fe=de.x-v.x,Je=de.z-v.z,ce=Math.hypot(Fe,Je)+(Fe*T+Je*Q<0?16:0);ce<ne&&(ne=ce,v.driver.next=Re)})}h.mode="patrol",h.retaliation=null,h.stop=null,h.departing=!1,N.seated=!0,N.model.root.visible=!1,di(v,0)}function xm(h,y){let v=h.officer,N=pa[h.beat%pa.length];re(v,N)<1.1&&(h.beat++,N=pa[h.beat%pa.length]),h.intent=Mn(v,N,1.35,y)}function _m(h,y){J-=h,J<=0&&it>0&&(At=ua(y),At&&(Et={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle}),J=.24);let v=it>0&&c.health>0?At?y:Et:null,N=Ic(it);it>0&&(it=Math.max(0,it-h*(At?.23:1.1)),it===0&&(Et=null,At=!1,st("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),si&&((si.time-=h)<=0||re(si.unit.car,si.location)<10)&&(si=null),L.forEach((C,T)=>{let Q=C.officer,ne=C.car;C.retaliation&&!pn(C.retaliation)&&(C.retaliation=null);let de=si?.unit===C?si.location:null,Re=C.retaliation,Fe=de??Re??v,Je=!!(de||Re||v&&T<N);if((ne.burning||ne.wrecked)&&Q.health>0&&(C.mode="foot",Q.seated=!1),Q.health<=0){C.mode="disabled",ne.driver=null,Q.down<=0&&re(Q,y)>13&&X.every(ze=>ze===ne||re(ze,C.berth)>3.5)&&(Xe(Q),ii(ne,C.berth),di(ne,0),C.mode="ready",C.retaliation=null);return}if(C.mode==="patrol"&&(Je||ne.integrity<=0)&&(C.mode="driving",ne.driver=null,C.stop=null,C.stall=0,C.departing=!1),C.mode==="patrol")return;if(Re&&(C.mode==="ready"||C.mode==="boarding"||C.mode==="reboard")&&(C.mode="foot"),C.mode==="ready"&&Je){let ze=ne.integrity>0&&re(Q,ne)<22;C.mode=ze?"boarding":"foot",C.stop=null,C.stall=0,C.departing=ze&&re(ne,C.berth)<2}if(C.mode==="boarding"||C.mode==="reboard"){C.mode==="boarding"&&!Je&&(C.mode="reboard"),C.mode==="reboard"&&Je&&(C.mode="boarding");let ze=Wu(ne);if(ne.burning||ne.wrecked||ne.integrity<=0||re(Q,ne)>45)C.mode=Je?"foot":"ready";else if(ze&&re(Q,ze)<.63)Q.seated=!0,Q.model.root.visible=!1,ne.doorTime=.6,C.mode==="reboard"?ma(C,!1):C.mode="driving";else if(ze){let ke=mm(Q,ne,ze),Se=Bn(Q,ke.x,ke.z,s.walkSolids(ke.x,ke.z,0),X,[],.34)?ke:ze;C.intent=Mn(Q,Se,C.mode==="boarding"?3.75:2.35,h)}}if(C.mode==="driving"){if(!Je&&ne.integrity>0&&!C.departing){ma(C,!1);return}let ze=Fe?re(ne,Fe):1/0;!Je||ne.integrity<=0||C.stall>8.2&&!C.maneuver||ze<12.7&&!(Fe===ee&&Math.abs(ee.speed)>6)?(ui(ne,h,{throttle:0,steer:0,brake:!0},r,X),Math.hypot(ne.vx,ne.vz)<2.7&&!gm(C)&&ne.integrity>0&&ui(ne,h,{throttle:.21,steer:.26,brake:!1},r,X)):Lc(C,Fe,r,X,$,h)}else if(C.mode==="foot")Je&&Fe===Et?C.intent=Mn(Q,Fe,3.45,h):Je?C.combat=Gc(Q,Fe,h):ne.integrity>0&&re(Q,ne)<40?C.mode="reboard":(C.mode="ready",re(y,ne)>25&&X.every(ze=>ze===ne||re(ze,C.berth)>3.5)&&(ii(ne,C.berth),di(ne,0)));else if(C.mode==="ready"){let ze=T<2&&re(y,Q)>24&&re(y,C.berth)>19&&re(Q,C.berth)<30?qu(C):null;ze&&vu(ze,X.filter(ke=>ke!==ne),y,r)?ma(C):xm(C,h)}let ce=C.mode==="driving"||Je&&C.mode==="foot";ne.lamps.forEach((ze,ke)=>{ze.visible=!ce||Math.floor(me*8+ke)%2===0}),ce&&Bt<=0&&re(y,ne)<42&&(Ye.siren(),Bt=1.35)})}let io=(h,y,v)=>({x:h.x+Math.cos(h.angle)*y+Math.sin(h.angle)*v,z:h.z-Math.sin(h.angle)*y+Math.cos(h.angle)*v}),Yu=!1;function ym(h,y){for(let v of X){let N=re(v,y)<60,C=v.kind==="bike",T=v.root.position.y,Q=v.lastImpact??0;if(v.impact>3.4&&v.impact>Q+1.5){let ce=(v.lastSpeed??v.speed)>=0?1:-1,ze=io(v,0,ce*(v.halfLength??1.1));N&&u.sparks(ze.x,T+.45,ze.z,8+Math.round(v.impact*2),3+v.impact*.3),C||(ce>0?v.damageFront+=v.impact*1.7:v.damageRear+=v.impact*1.7)}v.lastImpact=v.impact,v.lastSpeed=v.speed;for(let ce of v.bumpers??[]){let ze=ce.end>0?v.damageFront:v.damageRear;if(ce.state===0&&ze>22&&(ce.state=1),ce.state===1&&ze>48&&(ce.state=2,t.attach(ce.mesh),ce.velocity.set(v.vx*.5+(Math.random()-.5),1.4,v.vz*.5+(Math.random()-.5)),ce.spin=(Math.random()-.5)*5),ce.state===2){let ke=ce.mesh;ke.position.addScaledVector(ce.velocity,h),ce.velocity.y-=9.8*h;let Se=kn(ke.position.x,ke.position.z)+.15;ke.position.y<Se?(ke.position.y=Se,ce.velocity.y=0,ce.velocity.x*=Math.exp(-h*5),ce.velocity.z*=Math.exp(-h*5),ce.spin*=Math.exp(-h*5),ke.rotation.x+=(0-ke.rotation.x)*Math.min(1,h*8),ke.rotation.z+=(0-ke.rotation.z)*Math.min(1,h*8)):ke.rotation.x+=ce.spin*h*.6,ke.rotation.y+=ce.spin*h}}if(v.wrecked){v.wreckClock=(v.wreckClock??0)+h,N&&v.wreckClock<30&&Math.random()<h*5&&u.engineSmoke(v.x,T+1.1,v.z,!0);continue}let ne=io(v,0,C?.35:v.halfLength-.75),de=T+(C?.65:v.spec.belt+.1);if(v.integrity<45&&N&&Math.random()<h*(v.integrity<22?14:6)&&u.engineSmoke(ne.x,de,ne.z,v.integrity<22),!v.burning&&v.integrity<=12){v.speed=0,v.vx=0,v.vz=0,v===ee&&Ui(!0);for(let ce of[...v.passengers??[]])rr(ce);(v.driver||ir(v)?.officer.seated)&&is(v,0,v),v.driver=null,v.burning=!0,v.fire=C?4.5:7,re(v,c)<4&&st("O ve\xC3\xADculo pegou fogo! Saia j\xC3\xA1.")}if(v.burning){if(v.fire-=h,v.integrity=Math.min(v.integrity,12),N)for(let ce=0;ce<2;ce++)u.flame(ne.x,de,ne.z,C?.7:1.1);v.fire<=0&&vm(v);continue}let Re=Math.hypot(v.vx,v.vz),Fe=Math.abs(v.vx*Math.cos(v.angle)-v.vz*Math.sin(v.angle)),Je=v===ee&&Yu&&Re>8;if(Re>4&&(Fe>2.6||Je)){let ce=-(v.wheelbase??1.5)/2,ze=C?[io(v,0,ce)]:[io(v,-(v.halfWidth-.17),ce),io(v,v.halfWidth-.17,ce)];v.skid??=ze.map(ke=>({...ke})),re(v.skid[0],ze[0])>.45&&(ze.forEach((ke,Se)=>{u.skid(v.skid[Se].x,v.skid[Se].z,ke.x,ke.z,kn(ke.x,ke.z)),v.skid[Se]={...ke}}),N&&Fe>3.5&&u.tireSmoke(ze[0].x,T+.2,ze[0].z))}else v.skid=null}}function vm(h){let y={x:h.x,z:h.z},v=h.root.position.y;h===ee&&(Ui(!0),Kn(c,100,y));for(let N of[...h.passengers??[]])rr(N),Kn(N,100,y);(h.driver||ir(h)?.officer.seated)&&is(h,100,y),h.burning=!1,h.wrecked=!0,h.integrity=0,h.driver=null,h.wreckClock=0,h.rider&&(h.rider.root.visible=!1),Tp(h),u.explosion(h.x,v,h.z),Ye.explosion(),re(h,ee??c)<25&&(ts=.35);for(let N of[...$,c]){if(N.seated||N===c&&ee)continue;let C=re(N,y);if(C>7.5)continue;let T=1-C/7.5,Q=Math.max(.2,C),ne=(N.x-y.x)/Q,de=(N.z-y.z)/Q;bc(N,ne*(4+8*T),3+5*T,de*(4+8*T)),Kn(N,Math.round(115*T),y)}for(let N of X){if(N===h||N.wrecked)continue;let C=re(N,y);if(C>7)continue;let T=1-C/7,Q=Math.max(.2,C);N.integrity=Math.max(0,N.integrity-48*T),N.vx+=(N.x-y.x)/Q*9*T/(N.handling?.mass??1),N.vz+=(N.z-y.z)/Q*9*T/(N.handling?.mass??1),N.damageFront+=18*T,N.damageRear+=18*T}for(let N of $)re(N,y)<35&&["civilian","resident"].includes(N.role)&&(N.fear=Math.max(N.fear,6));h.lastHitBy===c&&ns(28,c)}function Zu(h){let y=zn.reduce((N,C)=>Math.abs(N-h.x)<Math.abs(C-h.x)?N:C),v=zn.reduce((N,C)=>Math.abs(N-h.z)<Math.abs(C-h.z)?N:C);return Math.min(Math.abs(h.x-y),Math.abs(h.z-v))>3.5?null:Math.abs(h.x-y)<Math.abs(h.z-v)?{x:y+(h.x>=y?4.4:-4.4),z:h.z}:{x:h.x,z:v+(h.z>=v?4.4:-4.4)}}function Mm(h,y){B.wait-=h,!B.target&&B.wait<=0&&(B.wait=1,B.target=S.find(Q=>Q.kind==="car"&&Q!==ee&&!Q.driver&&!Q.burning&&!Q.towed&&!Q.shopping&&!wn.has(Q)&&(Q.wrecked||Q.abandoned>18&&Q.leftInLane)),Object.assign(B,{stop:null,maneuver:null,stall:0}));let v=B.target;if(!v)return;if(v===ee||v.driver||v.burning){B.target=null,B.carrying=!1;return}let N=B.carrying?z:v,C=re(V,N);if(B.carrying&&C<4.5){v.towed=!0,v.root.visible=!1,v.x=480,v.z=480,v.abandoned=0,B.target=null,B.carrying=!1,B.wait=3;return}let T=X.filter(Q=>Q!==v);if(!B.carrying&&C<6&&Math.abs(v.speed)<.65&&(B.carrying=!0,B.stop=null,B.maneuver=null,B.stall=0),C<15||N.x>62||V.x>62?ui(V,h,qr(V,N,Math.min(5,C*.53)),r,T):Lc(B,N,r,T,$,h),B.carrying){let Q=v.halfLength+V.halfLength+.1;v.x=V.x-Math.sin(V.angle)*Q,v.z=V.z-Math.cos(V.angle)*Q,v.angle=V.angle,v.speed=v.vx=v.vz=0}else if(L.some(Q=>re(Q.officer.seated?Q.car:Q.officer,v)<9)){let Q=Zu(v);if(Q){let ne=Math.min(1,h*1.3/re(v,Q)),de=v.x+(Q.x-v.x)*ne,Re=v.z+(Q.z-v.z)*ne;hi(de,Re,v.angle,r,v.shape)&&T.every(Fe=>Fe===V||re(Fe,{x:de,z:Re})>3.1)&&re(y,{x:de,z:Re})>2&&Object.assign(v,{x:de,z:Re})}}}function bm(h,y){for(let C of R)C!==ee&&C.stolen&&!C.towed&&(C.abandoned+=h);Mm(h,y);let v={player:ee,vehicles:Nu()},N=L.filter(C=>C.mode==="patrol").map(C=>C.car);for(let[C,T]of wn){if(!ee||C.wrecked||C.burning){for(let Q of[...C.passengers])rr(Q);wn.delete(C);continue}C.passengers?.length&&(re(C,ee)>8?Lc(T,ee,r,X,$.filter(Q=>!Q.seated),h):ui(C,h,{throttle:0,steer:0,brake:!0},r,X))}Lp([...E.filter(C=>!wn.has(C)&&!C.shopping),...N],v,$,r,h,g,s.signals),R.forEach((C,T)=>{if(C.towed){let{x:Q,z:ne,angle:de}=[..._,...A][T];re(y,{x:Q,z:ne})>40&&(ii(C,{x:Q,z:ne,angle:de}),C.stolen=!1,C.towed=!1,C.root.visible=!0)}});for(let C of R)wn.has(C)||B.carrying&&B.target===C||C.towed||(C!==ee&&Math.hypot(C.vx,C.vz)>.06?ui(C,h,{throttle:0,steer:0,brake:!0},r,v.vehicles):C!==ee&&(C.impact=Math.max(0,C.impact-h*21)));for(let C of X){if(C.routeIndex>=0&&C!==ee&&!wn.has(C)&&!C.shopping&&!(B.carrying&&B.target===C)){C.abandoned+=h;let T=C.towed&&C.abandoned>12,Q=(C.driver?.stuck??0)>13;if((T||Q)&&!C.burning&&re(y,C)>17){let ne={};if(Xr(ne,C.routeIndex),ne.kind=C.kind,ne.shape=C.shape,vu(ne,v.vehicles.filter(de=>de!==C),y,r)){Object.assign(C,ne,{towed:!1}),C.root.visible=!0;let de=C.ownDriver;de&&!de.seated&&!de.riding&&de.role==="civilian"&&re(de,y)>20&&(Xe(de),de.seated=!0,de.model.root.visible=!1)}}}C!==ee&&C.impact>5&&re(y,C)<18&&Gt<=0&&(Ye.crash(),Gt=.32),di(C,h,C.steer),C.rider&&(C.rider.root.visible=!!C.driver&&C.integrity>0,C.rider.root.visible&&fu(C.rider,C))}if(ee){if(ee.impact>4.1&&Gt<=0){Ye.crash(),ts=.24,Gt=.36;let C=ee,T=C.impact;st(C.integrity<43?"Motor avariado.":"Colis\xE3o."),ee&&C.kind==="bike"&&T>10.5&&(Kn(c,Math.min(40,Math.round(T*1.6))),C.integrity=Math.max(0,C.integrity-4),Ui(!0),st("Voc\xEA caiu da moto."))}if(ee&&ee.integrity<=0&&Math.hypot(ee.vx,ee.vz)<3){let C=da(ee);Ui(!0),st(C+" sem condi\xE7\xF5es de rodar.")}}}function Mn(h,y,v,N){if(!y)return 0;h.walkIntent=y;let C=f(h),T=re(h,y);if(T<.13)return 0;let Q=s.interiorAt(h.x,h.z,l(h)),ne=s.interiorAt(y.x,y.z,y.y??l(y));if(!Q&&!ne)return o(h,y,v,N);let de=y,Re=(ce,ze)=>[.24,.46,.68,.88,1].every(ke=>Fn(ce.x+(ze.x-ce.x)*ke,ce.z+(ze.z-ce.z)*ke,.29,C));if(!Re(h,y)){let ce=1/0;for(let ze of C)if(!(re(h,ze)>Math.hypot(ze.w,ze.d)*.5+3.1))for(let ke of[-1,1])for(let Se of[-1,1]){let ft={x:ze.x+ke*(ze.w*.5+.44),z:ze.z+Se*(ze.d*.5+.44)},It=re(h,ft),Zt=re(ft,y);if(It<.3||It>4.5||!Re(h,ft))continue;let mn=It+Zt+(Zt>T+.25?1.7:0);mn<ce&&(ce=mn,de=ft)}}let Fe=Math.atan2(de.x-h.x,de.z-h.z);h.angle=On(h.angle,Fe,N*8.5);let Je=Math.min(v*N,re(h,de));return Qo(h,h.x+Math.sin(Fe)*Je,h.z+Math.cos(Fe)*Je,.26,C)?v:0}let ss={x:NaN,z:NaN,angle:0};function Ju(h,y){let v=l(h);if(s.interiorAt(h.x,h.z,v))return{x:h.x,z:h.z,y:v};let N=Math.floor((Math.sqrt(1+y)-1)*.75),C=(y%2===0?1:-1)*(1.05+y%5*.66),T=(X.includes(h)?h.halfLength+3.2:3.1)+N*1.1,Q=h===c?ss.angle:h.angle,ne=Math.sin(Q),de=Math.cos(Q);for(let[Re,Fe]of[[T,C],[T,C*.38],[T,0],[1.6,0],[0,C*.5]]){let Je=h.x-ne*Re+de*Fe,ce=h.z-de*Re-ne*Fe;if(Bn(h,Je,ce,s.walkSolids(Je,ce,v),X,[],.44))return{x:Je,z:ce,y:v}}return{x:h.x,z:h.z,y:v}}function Vc(h,y,v,N){let C=s.interiorAt(h.x,h.z,l(h)),T=s.interiorAt(y.x,y.z,y.y??l(y));if(C?.buildingId===T?.buildingId&&Math.abs((C?.floor??0)-(T?.floor??0))<1.1)return h.pursuitRoute=[],h.pursuitKey="",Mn(h,y,v,N);let Q=(T?.buildingId??"street")+":"+(T?.floor??0);if(h.pursuitKey!==Q){h.pursuitKey=Q;let ne=[],de=s.buildings.find(ce=>ce.id===C?.buildingId),Re=s.buildings.find(ce=>ce.id===T?.buildingId),Fe=de?.units.find(ce=>Math.abs(ce.floor-C.floor)<.25),Je=Re?.units.find(ce=>Math.abs(ce.floor-T.floor)<.25);de&&ne.push(Fe?.inside,Fe?.entry,Fe?.outside,...[...Fe?.stairs??[]].reverse(),de.inside,de.entry,de.outside),Re&&ne.push(Re.outside,Re.entry,Re.inside,...Je?.stairs??[],Je?.outside,Je?.entry,Je?.inside),h.pursuitRoute=ne.filter(Boolean)}for(;h.pursuitRoute.length&&re(h,h.pursuitRoute[0])<.66&&Math.abs(l(h)-(h.pursuitRoute[0].y??0))<.85;)h.pursuitRoute.shift();return Mn(h,h.pursuitRoute[0]??y,v,N)}function Sm(h,y,v){let N=h.itinerary[0];return N?re(h,N)<.58&&Math.abs(l(h)-(N.y??0))<1.1?(h.itinerary.shift(),0):Mn(h,N,y,v):0}function wm(h){let y=h.calling;h.calling=null,!(!y||h.health<=0)&&(it=Math.min(64,Math.max(it,0)+y.pressure*.7),Et={x:y.x,z:y.z,y:0,health:100,seated:!1,angle:0},At=!1,st("Uma testemunha ligou para a pol\xEDcia."))}function Tm(h,y){if(h.brawl-=y,h.health<35)return h.brawl=0,h.fear=6,{speed:0};let v=re(h,c);if(v>16)return h.brawl=0,{speed:0};if(h.punchLand>0&&(h.punchLand-=y,h.punchLand<=0&&re(h,c)<1.4&&c.health>0&&!c.ragdoll)){Kn(c,6,h);let N=Math.max(.2,v);c.pushX+=(c.x-h.x)/N*2.4,c.pushZ+=(c.z-h.z)/N*2.4,Ye.punch(!0)}return ee?{speed:0}:v>1.15?{speed:Mn(h,c,3.6,y)}:(h.angle=On(h.angle,Math.atan2(c.x-h.x,c.z-h.z),y*10),h.attack<=0&&(h.punchT=Kr,h.punchHand=1-(h.punchHand??0),h.attack=1.05,h.punchLand=Zs),{speed:0})}function Ku(){let h=[];Ze&&!ee&&pn(c)&&h.push(c);for(let y of jt)y.order==="dealer"&&pn(y)&&y.post&&re(y,y.post)<7&&h.push(y);return h}let or=()=>Object.keys(Ks).filter(h=>xe[h]>0);function Am(h){if(ht-=h,!(ht>0)&&(ht=4+Math.random()*4,!!or().length))for(let y of Ku()){if($.some(C=>C.buyer?.seller===y))continue;let v=E.find(C=>C.kind==="car"&&C.driver&&C.ownDriver?.seated&&!wn.has(C)&&!C.burning&&Math.abs(C.speed)<2&&re(C,y)<26&&(C.visitTime??-100)<me-65);if(v&&Math.random()<.5){let C=Math.cos(v.angle),T=-Math.sin(v.angle),Q=[-1,1].map(Re=>({x:v.x+C*Re*2.4,z:v.z+T*Re*2.4})).find(Re=>hi(Re.x,Re.z,v.angle,r,v.shape)&&X.every(Fe=>Fe===v||re(Fe,Re)>4.8));if(!Q)continue;Object.assign(v,Q);let ne=v.ownDriver,de=v.driver;if(is(v,0,y)){v.shopping=!0,v.visitTime=me,v.speed=v.vx=v.vz=0,ne.shoppingTrip={car:v,route:de},ne.fear=0,ne.buyer={seller:y,wait:0};continue}}let N=$.find(C=>C.role==="civilian"&&pn(C)&&C.fear<=0&&!C.buyer&&!C.calling&&!(C.brawl>0)&&!C.itinerary.length&&re(C,y)>4&&re(C,y)<38&&(C.boughtAt??-99)<me-45);N&&(N.buyer={seller:y,wait:0})}}function Em(h,y){let v=h.buyer,N=v.seller;if(!Ku().includes(N)||!or().length)return h.buyer=null,0;if(re(h,N)>1.3)return Mn(h,N,1.6,y);if(h.angle=On(h.angle,Math.atan2(N.x-h.x,N.z-h.z),y*6),v.wait+=y,v.wait<1.6)return 0;let C=or(),T=C[Math.floor(Math.random()*C.length)],Q=Math.min(xe[T],1+Math.floor(Math.random()*3)),ne=Q*Ks[T].retail;return xe[T]-=Q,he+=ne,h.buyer=null,h.boughtAt=me,N===c?(st("+R$ "+ne+" \xB7 "+Ks[T].name),Ye.sale(),ua(c)?ns(16,c,!0):Ru(c,12)):(N.sales=(N.sales??0)+ne,re(N,ee??c)<30&&Ye.sale()),0}function Cm(h,y){let v=d();for(let C of L){let T=C.officer;!pn(T)||C.retaliation||re(T,h)<26&&Zr({...T,ground:l(T)},{...h,ground:l(h)},v,{range:26,fov:Math.PI*.9,eye:1.6,aim:1.2})&&(C.retaliation=h)}let N=L.map(C=>C.officer).filter(C=>pn(C)&&re(C,h)<22&&L.some(T=>T.officer===C&&T.retaliation===h)).sort((C,T)=>re(C,h)-re(T,h))[0];if(N){if(h.health>45)return h.fleeing=!1,Gc(h,N,y);h.fleeing=!0;let C=Math.atan2(h.x-N.x,h.z-N.z),T={x:h.x+Math.sin(C)*6,z:h.z+Math.cos(C)*6};return{speed:Mn(h,T,4.6,y),aim:!1}}if(h.post&&!h.fleeing){let C=$.find(T=>T.buyer?.seller===h);if(h.offerDelay=(h.offerDelay??0)-y,!C&&h.offerDelay<=0&&or().length){h.offerDelay=4+Math.random()*4;let T=$.find(Q=>pn(Q)&&Q.role==="civilian"&&!Q.buyer&&!Q.calling&&Q.fear<=0&&re(Q,h.post)<6&&(Q.boughtAt??-99)<me-30);T&&Math.random()<.55&&(T.buyer={seller:h,wait:0},C=T)}if(C&&re(C,h)>1.15&&re(C,h.post)<6)return{speed:Mn(h,C,1.2,y),aim:!1};if(C)return{speed:0,aim:!1};if(!h.dealerWalk||re(h,h.dealerWalk)<.5||(h.dealerWalkTime-=y)<=0){let T=Math.floor(Math.random()*8);h.dealerWalk=null,h.dealerWalkTime=5;for(let Q=0;Q<8;Q++){let ne=(T+Q)*Math.PI/4,de={x:h.post.x+Math.sin(ne)*3.4,z:h.post.z+Math.cos(ne)*3.4};if(re(h,de)>1.5&&Bn(h,de.x,de.z,s.walkSolids(de.x,de.z,0),X,[],.48)){h.dealerWalk=de;break}}}if(h.dealerWalk)return{speed:Mn(h,h.dealerWalk,1.25,y),aim:!1}}return h.post&&re(h,h.post)>.8?{speed:Mn(h,h.post,h.fleeing?3.2:2.6,y),aim:!1}:(h.fleeing=!1,{speed:0,aim:!1})}function Rm(h,y=vn){let v=jt.filter(N=>N.health>0&&(y?.role!=="ally"||N===y));if(!v.length){st("Recrute algu\xE9m primeiro.");return}if(h==="toggle"&&(h=v.some(N=>N.order!=="wait"&&N.order!=="dealer")?"wait":"follow"),h==="undealer"){for(let N of v)if(N.order==="dealer"){N.order="follow",N.post=null,N.dealerWalk=null,N.commandTarget=null;for(let C of j)C.buyer?.seller===N&&(C.buyer=null)}st("Ponto de venda desfeito.")}else if(h==="follow"||h==="wait"){for(let N of v)N.commandTarget=null,N.order=h,N.hold={x:N.x,z:N.z},N.post=null;st(h==="wait"?"Gangue: esperem aqui.":"Gangue: comigo.")}else if(h==="attack"){let C=(y?.role!=="ally"?y:null)??L.map(T=>T.officer).filter(T=>pn(T)&&re(T,c)<30&&it>0).sort((T,Q)=>re(T,c)-re(Q,c))[0];if(C){for(let T of v)T.commandTarget=C;st("Gangue: ataquem!")}else st("Mire no alvo para a gangue atacar.")}else if(h==="dealer"){for(let N of v)N.order="dealer",N.dealerWalk=null,N.post={x:N.x,z:N.z},N.sales??=0,N.boardCar=null;st(or().length?"Ponto de venda montado.":"Ponto montado, mas falta estoque.")}Ye.bell()}function Im(h){if(ue!=="pad"&&ue!=="touch")return;let y=.2,v=null;for(let{actor:N,y:C}of fa(c)){if(N.role==="ally"||re(N,c)>28)continue;tt.set(N.x,C+1.25,N.z).project(i);let T=Math.hypot(tt.x,tt.y);tt.z<1&&T<y&&(y=T,v={x:tt.x,y:tt.y})}v&&(O-=xt(v.x*2.2*h,-.04,.04),I-=xt(v.y*1.6*h,-.03,.03))}function $u(h,y,v=!1){$=j.filter(T=>re(T,y)<(T.role==="civilian"?69:47)||T.role==="ally"||T.role==="police"||T===Vn);let N=new Set($);for(let T of j)T.model.root.visible=N.has(T)&&!T.seated;let C=new Map($.map(T=>[T,{x:T.x,z:T.z}]));v||_m(h,y);for(let T of $){if(T.seated||(T.attack-=h,T.stagger=Math.max(0,T.stagger-h),T.injuryCooldown-=h,T.exitAnim=Math.max(0,T.exitAnim-h),T.exitAge+=h,T.ragdoll&&T.health>0&&Sc(T,h,l(T),(ce,ze)=>!Fn(ce,ze,.22,f(T)))))continue;if(T.health<=0){if(T.down=Math.max(0,T.down-h),T.deadTime+=h,T.ragdoll)Sc(T,h,l(T),(ce,ze)=>!Fn(ce,ze,.22,f(T))),T.drop&&T.drop.position.set(T.x,l(T)+.019,T.z);else if(T.deadTime<1.2){T.x+=T.pushX*h,T.z+=T.pushZ*h,T.pushX*=Math.exp(-h*5),T.pushZ*=Math.exp(-h*5);let ce=ia(T.model,T.deadTime,T.fallDir);T.model.root.rotation.set(ce,T.angle,0),T.model.root.position.set(T.x,l(T)+Math.abs(Math.sin(ce))*.31,T.z),T.drop&&T.drop.position.set(T.x+Math.sin(T.angle)*T.fallDir*1.25,l(T)+.019,T.z+Math.cos(T.angle)*T.fallDir*1.25)}if(T.drop){let ce=Math.min(.63,.32+(19-T.down)*.09);T.drop.rotation.z=T.angle,T.drop.scale.set(Math.max(.38,ce),Math.max(.24,ce*.68),1)}T.role!=="police"&&T.down<=0&&re(T.home,y)>7&&re(T,y)>7&&(Xe(T),k.includes(T)&&(T.seated=!0,T.model.root.visible=!1));continue}let Q=0,ne=!1,de=L.find(ce=>ce.officer===T);if(de)Q=de.combat?.speed??de.intent??0,ne=!!de.combat?.aim,de.intent=0,de.combat=null;else if(T.role==="ally"&&T.order==="dealer")({speed:Q,aim:ne}=Cm(T,h));else if(T.role==="ally")if(ee&&T.order!=="wait"&&(!T.boardCar||T.boardCar===ee&&re(T,ee)>12)&&sm(T),T.boardCar)Q=rm(T,h);else if(sr(T.commandTarget)||sr(Vn))({speed:Q,aim:ne}=Gc(T,sr(T.commandTarget)?T.commandTarget:Vn,h));else if(T.order==="wait")T.hold&&re(T,T.hold)>.9&&(Q=Mn(T,T.hold,3.4,h));else{let ce=Ju(y,jt.indexOf(T));(re(ce,T)>1.25||Math.abs(l(T)-ce.y)>1.75)&&(Q=Vc(T,ce,ee?6.1:4.45,h))}else if(T.brawl>0&&pn(c))({speed:Q}=Tm(T,h));else if(T.calling)T.calling.time-=h,T.angle=On(T.angle,Math.atan2(T.x-T.calling.x,T.z-T.calling.z),h*4),T.calling.time<=0&&wm(T);else if(T.buyer&&T.fear<=0)Q=Em(T,h);else if(T.shoppingTrip&&!T.buyer){let{car:ce,route:ze}=T.shoppingTrip;if(ce===ee||ce.driver||ce.wrecked||ce.burning)T.shoppingTrip=null,ce.shopping=!1;else if(re(T,ce)<ce.halfLength+.8){T.seated=!0,T.shoppingTrip=null,ce.shopping=!1,ce.driver=ze;continue}else Q=Mn(T,ce,1.8,h)}else if(T.surrender<=0){let ce=T.path[T.next];if(T.role==="clerk"&&(re(T,T.home)>.55?ce=T.home:T.angle=On(T.angle,re(c,T)<4?Math.atan2(c.x-T.x,c.z-T.z):T.home.angle,h*4)),T.role==="civilian"&&T.x<61&&!T.itinerary.length&&T.fear<=0&&D.length&&(T.scheduleClock-=h,T.scheduleClock<=0)){let ze=D[Math.floor(Math.abs(T.home.x*11+T.home.z*4+me))%D.length];re(T,ze.outside)<38&&(T.itinerary=[ze.outside,ze.entry,ze.inside,ze.entry,ze.outside]),T.scheduleClock=36+Math.abs(T.home.x)%25}if(T.fear=Math.max(0,T.fear-h),T.fear>0&&re(T,y)<15){let ze=Math.atan2(T.x-y.x,T.z-y.z);for(let ke of[0,.84,-.84,1.52,-1.52]){let Se=ze+ke;if(Qo(T,T.x+Math.sin(Se)*3.7*h,T.z+Math.cos(Se)*3.7*h,.22,f(T))){T.angle=On(T.angle,Se,h*8),Q=3.7;break}}}else T.itinerary.length?Q=Sm(T,T.pace,h):ce&&(T.path.length&&re(T,ce)<.54&&(T.next=(T.next+1)%T.path.length,ce=T.path[T.next]),Q=Mn(T,ce,T.pace,h))}let Re=C.get(T);if(Re&&T.exitAnim<=0){let ce=T.x-Re.x+T.pushX*h,ze=T.z-Re.z+T.pushZ*h;T.x=Re.x,T.z=Re.z;let ke=de?.mode==="boarding"?X.filter(It=>It!==de.car):X,Se=T.boardCar?$.filter(It=>It.role!=="ally"):$,ft=_c(T,ce,ze,f(T),l(T)>1.25?[]:ke,[...Se,...ee?[]:[c]],.29);if(Q>0&&ft<Q*h*.55){let It=Math.atan2(ce,ze),Zt=T.detourSide??(T.home.x<0?-1:1),mn=f(T),$n=Se.filter(vt=>re(vt,T)<4);for(let vt of[Zt*.65,Zt*1.25,-Zt*.65,-Zt*1.25,Zt*1.85,-Zt*1.85]){let so=It+vt,ed=Math.sin(so),td=Math.cos(so);if(Bn(T,T.x+ed*.7,T.z+td*.7,mn,ke,$n,.32)&&_c(T,ed*Q*h,td*Q*h,mn,ke,$n,.29)>h*.2){T.detourSide=Math.sign(vt),T.angle=On(T.angle,so,h*7);break}}(T.stuckTime??0)>.7&&(T.repath=Math.min(T.repath??0,.12))}if(T.walkIntent&&re(T,T.walkIntent)>.65&&re(T,Re)<h*.18?T.stuckTime=(T.stuckTime??0)+h:T.stuckTime=0,T.walkIntent=null,T.stuckTime>=3){let It=null;for(let Zt=.55;Zt<=4&&!It;Zt+=.45)for(let mn=0;mn<16;mn++){let $n=T.x+Zt*Math.sin(mn*Math.PI/8),vt=T.z+Zt*Math.cos(mn*Math.PI/8);if(Bn(T,$n,vt,s.walkSolids($n,vt,l(T)),ke,[...Se,c],.34)){It={x:$n,z:vt};break}}It&&(Object.assign(T,It),m(T),T.route=[],T.repath=0),T.stuckTime=0,It&&(T.hopTime=.36)}Q>0&&(Q=Math.min(Q,re(T,Re)/h))}if(T.pushX*=Math.exp(-h*7.6),T.pushZ*=Math.exp(-h*7.6),!v&&T.injuryCooldown<=0){let ce=ju(T,2.8);if(ce){let{car:ze,speed:ke,vx:Se,vz:ft}=ce,It=Au(ke);T.pushX=xt(Se,-8,8)*.59,T.pushZ=xt(ft,-8,8)*.59,It>0&&(T.injuryCooldown=1.18,ke>6.5&&bc(T,Se*.7,1.8+ke*.16,ft*.7),Kn(T,It),ze===ee&&It>12&&ns(19))}}let Fe=T.model;if(T.health<=0)continue;m(T),T.hopTime=Math.max(0,(T.hopTime??0)-h),Fe.root.position.set(T.x,l(T)+T.exitAnim*.35+.28*Math.sin(Math.PI*T.hopTime/.36),T.z);let Je=T.stagger>0?Math.sin(T.stagger/.32*Math.PI)*.24:0;Fe.root.rotation.set(T.exitAnim*.7-Je,T.angle,T.exitAnim*T.exitSide*.89+(T.stagger>0?Math.sin(T.stagger*9)*.12:0)),Ws(Fe,h,T.exitAnim>0?2.9:Q,ne,["police","ally"].includes(T.role),0,0,T.surrender>0),T.punchT>0?(T.punchT=Math.max(0,T.punchT-h),wu(Fe,{punch:T.punchT,hand:T.punchHand??0})):T.calling?(Fe.arms[0].rotation.set(-2.35,0,-.55),Fe.forearms[0].rotation.set(-2.05,0,0)):T.order==="dealer"&&Q<.1&&!ne&&(Fe.arms[0].rotation.set(-.4,0,-.25),Fe.arms[1].rotation.set(-.4,0,.25),Fe.forearms[0].rotation.set(-1.5,0,.4),Fe.forearms[1].rotation.set(-1.5,0,-.4))}if(!v&&!ee&&l(c)<1.15&&c.health>0&&c.lift<.3&&js<=0){let T=ju(c,2.35);if(T){let{speed:Q,vx:ne,vz:de}=T,Re=Au(Q);c.pushX=xt(ne,-13,13)*.73,c.pushZ=xt(de,-13,13)*.73,c.trip=Q>=5.3?Math.min(.82,.35+Q*.021):.12,c.vx=c.vz=0,Q>7&&bc(c,ne*.65,1.6+Q*.14,de*.65),Re>0&&(Kn(c,Re),Ye.crash(),st("Voc\xEA foi atropelado.")),js=.87}}}function ju(h,y){for(let v of X){if(l(h)>1.2||re(v,h)>5)continue;let N=G.get(v),C=N&&re(N,v)<3?N:null,T=C?Math.hypot(C.vx,C.vz):0,Q=Math.hypot(v.vx,v.vz),ne=Math.max(Q,T);if(!(ne<y||!ap(v,C,h)))return{car:v,speed:ne,vx:T>Q?C.vx:v.vx,vz:T>Q?C.vz:v.vz}}return null}function Pm(h,y){s.updateDoors(h,[y,...$.filter(v=>pn(v))])}function Lm(h,y,v){let N=l(y),C=ee?null:s.interiorAt(y.x,y.z,N),T=!!C;eo!==T&&(eo=T,Ce=!0);let Q=i.aspect<.85,de=T?v?2.25:3.4:ee?ee.kind==="bike"?8.2:Q?12:10.2:v?4.45:Q?7.9:6.5,Re=ee?1.95+ee.root.position.y:1.38+N+c.lift*.46,Fe=ee?0:v?.61:.22,Je=v?.1+I*.19:Math.max(T?.28:.1,I);je.set(y.x+Math.cos(O)*Fe,Re,y.z-Math.sin(O)*Fe),dt.set(je.x-Math.sin(O)*de*Math.cos(Je),Re+Math.sin(Je)*de,je.z-Math.cos(O)*de*Math.cos(Je));function ce(ft){C&&(ft.x=xt(ft.x,C.x-C.w*.5+.3,C.x+C.w*.5-.3),ft.z=xt(ft.z,C.z-C.d*.5+.3,C.z+C.d*.5-.3),ft.y=xt(ft.y,C.floor+.55,C.ceiling-.42))}ce(dt),s.viewBlocked(je.x,je.y,je.z,.12,!T)&&je.set(y.x,Re,y.z);for(let ft=.06;ft<=1.0001;ft+=.04){let It=Dr.lerp(je.x,dt.x,ft),Zt=Dr.lerp(je.y,dt.y,ft),mn=Dr.lerp(je.z,dt.z,ft);if(s.viewBlocked(It,Zt,mn,.32,!T)||X.some($n=>$n!==ee&&re($n,{x:It,z:mn})<2.1&&Zt<$n.root.position.y+1.7)){dt.lerp(je,1-Math.max(.02,ft-.07));break}}ce(dt);let ze=v?14:1,ke=le?I:I-.22,Se=v?Re-Math.tan(ke)*ze:Re-.07;Ke.set(je.x+Math.sin(O)*ze,Se,je.z+Math.cos(O)*ze),Ce?(i.position.copy(dt),Ce=!1):i.position.lerp(dt,1-Math.exp(-h*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!T)&&i.position.copy(dt),ce(i.position),i.lookAt(Ke),i.updateMatrixWorld()}function wi(h,y,v){te.fillStyle=y,te.beginPath(),te.arc(Le(h.x),Le(h.z),v,0,Math.PI*2),te.fill()}function Dm(h,y){let v=Ic(it),N=Math.round(re(h,Rn));Ve("detail").textContent="Casa "+N+" m \xB7 Loja "+Math.round(re(h,Fr))+" m",Ve("cash").textContent="R$ "+he.toLocaleString("pt-BR");let C=jt.filter(vt=>vt.order==="dealer"&&pn(vt)),T=jt.some(vt=>vt.order==="wait");Ve("crew").textContent="Gangue "+jt.length+(jt.length?T?" \xB7 esperando":" \xB7 seguindo":"")+(C.length?" \xB7 "+C.length+" no ponto":"");let Q=ri();Ve("stash").hidden=!Q,Ve("stash").textContent=Q;let ne=C.reduce((vt,so)=>vt+(so.sales??0),0);Ve("selling").hidden=!Ze&&!C.length,Ve("selling").textContent=(Ze?"Seu ponto de venda est\xE1 aberto. ":"")+(C.length?"Ponto da gangue: R$ "+ne:"");let de=Ve("prompt"),Re=ue==="pad"?"Y \xB7 ":ue==="keyboard"?"E \xB7 ":"",Fe=Iu(),Je=!!Fe,ce=Du(),ze=Uu(),ke=ee??Fu(),Se=Fc(),ft=Pu(),It=nn&&y&&P<=0;de.hidden=!(ke||Je||ce||ze||Se||ft||P>0||It);let Zt=Se?"Guardar na garagem":ee?"Sair "+(ee.kind==="bike"?"da moto":"do carro"):ft?"Tirar ve\xEDculo da garagem":ce?"Salvar o progresso":Je?Zp[Fe.service]:ze?"Porta trancada":ke?"Pegar "+da(ke):"";de.textContent=P>0?to:It?"Mantenha a mira \xB7 "+Math.ceil(nn.left)+" s":Re+Zt,Ve("heat").hidden=!v,Ve("heat").textContent="\u2605".repeat(v)+" PROCURADO";let mn=ve==="rifle"?"Fuzil":"Pistola";Ve("mode").textContent=ee?da(ee)+" \xB7 "+Math.round(ee.integrity)+"%"+(ee.burning?" \xB7 FOGO":""):H?mn:"Vila Brasa",Ve("reading").textContent=ee?Math.round(Math.hypot(ee.vx,ee.vz)*3.6)+" km/h":H?ae+" balas":"Punhos";let $n=Ve("health");$n.value=c.health,$n.title="Vida: "+Math.ceil(c.health)+"%",Ve("crosshair").hidden=!(y||H&&Ni>0&&!ee),Ve("interact").textContent=ee?"Sair":ce?"Salvar":Je?"Loja":"Entrar",Ve("sprint").textContent=ee?"Freio":"Correr",Ve("aim").hidden=!!ee,Ve("fire").hidden=!!ee||!H,Ve("weapon").hidden=!!ee||!(_e||ye),Ve("weapon").textContent="Arma",Ve("sell").hidden=!!ee,Ve("gang").hidden=!!ee||!jt.length,Ve("sell").setAttribute("aria-pressed",String(!!Ze)),Ve("jump").hidden=Ve("punch").hidden=!!ee,Ve("recruit").hidden=!!ee||!y,Ve("hud").classList.toggle("armed",!ee),Ve("hud").classList.toggle("driving",!!ee),te.drawImage(Ie,0,0),nt&&(re(h,nt)<2.2?(nt=null,ut.visible=!1):wi(nt,"#ffad41",4));for(let vt of S)vt!==ee&&vt.integrity>0&&wi(vt,vt.driver?"#82b9b3":"#eab987",vt.kind==="bike"?2.2:vt.driver?2.6:3.5);wi(Fr,"#eaff89",6),wi(Yn.home,"#ffe4aa",4),wi(Rn,"#dcc39b",5);for(let vt of D)vt.service==="black"&&wi(vt.entry,"#c58cff",3.2);wi(Ms,"#99c6ff",5);for(let vt of D)vt.kind!=="armory"&&wi(vt.entry,"#dbae80",2.5);for(let vt of L)["driving","patrol","foot"].includes(vt.mode)&&wi(vt.officer.seated?vt.car:vt.officer,vt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let vt of jt)wi(vt,"#97ebaf",3.5);te.save(),te.translate(Le(h.x),Le(h.z)),te.rotate(-(ee?ee.angle:c.angle)),te.fillStyle="#fff9e6",te.strokeStyle="#243938",te.lineWidth=2.7,te.beginPath(),te.moveTo(0,10),te.lineTo(-6,-6),te.lineTo(0,-3),te.lineTo(6,-6),te.closePath(),te.stroke(),te.fill(),te.restore()}function Nm(h){let y=(h-se)/1e3,v=xt(y,1/240,.05);se=h,me+=v;let N=Es.read(!!ee,v);if(N.map&&!we.open&&mt(),we.open){Ge.x=xt(Ge.x+N.x*100*v,0,256),Ge.z=xt(Ge.z-N.y*100*v,0,256);let C=Oe.getContext("2d");C.drawImage(te.canvas,0,0),C.strokeStyle="white",C.strokeRect(Ge.x-3,Ge.z-3,6,6),N.confirm?qe(Ge.x,Ge.z):N.cancel&&we.close();return}if(As.open){N.cancel||N.interact?no():N.confirm?Pn.activate():N.navUp?Pn.move(-1):N.navDown?Pn.move(1):(Ue-=v,Math.abs(N.y)>.6&&Ue<=0&&(Pn.move(N.y>0?-1:1),Ue=.22),Math.abs(N.y)<.3&&(Ue=0)),e.render(t,i);return}if(_t){if(Ne){ue=N.mode;for(let Fe of X)G.set(Fe,{x:Fe.x,z:Fe.z,vx:Fe.vx,vz:Fe.vz});N.weapon&&(_e||ye)&&!ee&&Jn(),N.sell&&!ee&&(Ze?(Ze=null,st("Ponto de venda fechado.")):or().length?(Ze={x:c.x,z:c.z},st("Ponto de venda aberto. Fique parado.")):st("Sem estoque. Compre no mercado negro da casa de penhores.")),Ze&&(ee||re(c,Ze)>4)&&(Ze=null,st("Ponto de venda fechado.")),Am(v);let C=N.aim&&!ee&&In<=0&&c.health>0;if(C!==le&&(I=C?.015:.22,le=C),Ae=Math.abs(N.lookX)+Math.abs(N.lookY)>.003?0:Ae+v,O-=N.lookX,I=xt(I+N.lookY,C?-1.03:-.31,.84),ee&&Ae>1.2&&(I+=(.24-I)*v),C&&Im(v),c.health>0&&c.health<100&&me-(c.lastHurt??0)>10&&(c.health=Math.min(100,c.health+3*v)),Gt-=v,Pe-=v,et-=v,js-=v,Bt-=v,P-=v,ot-=v,a.update(v),u.update(v),s.signals.update(v),In=Math.max(0,In-v),er&&(tr-=v,tr<=0&&um()),Zn-=v,ts-=v,Ni-=v,$s-=v,Di>0&&(Di-=v,Di<=0&&jp()),Gn&&(Gn.delay-=v,Gn.delay<=0)){let Fe=Gn.car;Gn=null,c.health>0&&Fe.integrity>0&&re(c,Fe)<3.75&&Oc(Fe)}if(N.interact&&Qp(),As.open)return;let T=s.props.update(v,X,ee??c);T.shadow&&(s.sun.shadow.needsUpdate=!0);for(let Fe of T.events)re(Fe,ee??c)<30&&(Fe.heavy?Ye.crash():Ye.punch(!0));Pm(v,ee??c),ee?fm(v,N):pm(v,{...N,aim:C}),Yu=!!N.brake,bm(v,ee??c),ym(v,ee??c),ee&&(c.x=ee.x,c.z=ee.z),om(v),Vn&&!sr(Vn)&&(Vn=null),ee?.kind==="bike"&&fu(c.model,ee);let Q=ee??c;if(!Number.isFinite(ss.x)||re(c,ss)>1.15){let Fe=Number.isFinite(ss.x)?Math.atan2(c.x-ss.x,c.z-ss.z):c.angle;ss={x:c.x,z:c.z,angle:Fe}}$u(v,Q),Hu(Q),em(v),Ye.motor(ee?.speed??0,!!ee);let ne=ee??c,de=C&&!ee&&c.health>0;N.fire&&H&&!ee&&c.health>0&&ae>0&&(Ni=1.38),Lm(v,ne,de||!ee&&Ni>0),de&&($s<=0||N.recruit||N.punch||N.fire&&Pe<=0)?(vn=Bu(),$s=.092):de||(vn=null),N.order&&Rm(N.order,de?Bu():null),N.recruit&&!ee&&lm(vn),cm(v,de&&H?vn:null),(N.punch||N.fire&&!H)&&!ee&&hm(),N.fire&&!ee&&dm(de),Ve("hitmark").hidden=Zn<=0,Ve("impact").hidden=ts<=0,s.marker.visible=re(ne,Fr)>2.8&&re(ne,Fr)<13,s.beacon.rotation.y=me*2,s.beacon.position.y=2.55+Math.sin(me*4)*.27,pe-=v,pe<=0&&(Dm(ne,de),pe=.1)}}else{let C=.54+Math.sin(me*.13)*.19,T=i.aspect<1?26:30;i.position.set(24+Math.sin(C)*T,14,17+Math.cos(C)*T),i.lookAt(10,2,13),$u(v,c,!0),Hu(c)}e.render(t,i),Ne&&jr.value==="auto"&&y>0&&y<.22&&q>.7&&(ie+=y,++oe>=85&&(ie/oe>.026&&(q=Math.max(.69,q-.16),sn()),oe=0,ie=0))}let Es=Op(()=>{we.open?we.close():As.open?no():Ne?Hn(!1):Qu()},()=>Ne),Hc=Uc("quality");(Hc==="low"||Hc==="high")&&(jr.value=Hc),jr.addEventListener("change",()=>{Uc("quality",jr.value),q=1,sn()}),Ve("sound").addEventListener("click",()=>{Uc("sound",Ye.toggle()?"on":"off"),Ct()}),Ve("pause").addEventListener("click",()=>Hn(!1)),Ve("reset").addEventListener("click",()=>{hn(),Hn(!0)}),Ve("close-shop").addEventListener("click",no),As.addEventListener("cancel",h=>{h.preventDefault(),no()});function Qu(){if(!_t&&Qt){Object.assign(c,{x:Qt.x,z:Qt.z,health:Qt.health,floorY:0}),m(c),he=Qt.cash,_e=Qt.armed,ye=Qt.rifle,be=_e?Qt.ammo:0,We=ye?Qt.rifleAmmo:0,ve="pistol",ae=be,Yt(_e?"pistol":ye?"rifle":"fists"),Object.assign(xe,Qt.stash),kt=Qt.wardrobe,He=Qt.look,rn(c,He),Qt.garage&&(Ou(Qt.garage.kind,Qt.garage.model,Qt.garage.color),Ht=!0,zc(Qe));for(let h of new Set(Qt.recruits)){let y=typeof h=="number"?w[h]:K.get(h);y&&(y.role="ally",y.order="follow",y.seated=!1,y.riding=null,y.model.root.visible=!0,jt.push(y))}Hn(!0),O=-Math.PI/2}else Hn(!0)}Qr.addEventListener("click",Qu),document.addEventListener("visibilitychange",()=>{document.hidden&&Ne&&Hn(!1)}),window.addEventListener("resize",sn),e.domElement.addEventListener("webglcontextrestored",sn),hn(),Ct(),sn(),ha(),Qr.disabled=!1,se=performance.now(),e.setAnimationLoop(Nm)}try{dM()}catch(n){console.error(n),Qr.textContent="3D indispon\xEDvel",Ve("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
