(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Nd=0,Th=1,Ud=2;var ks=1,Fd=2,Lr=3,bs=0,bn=1,En=2,Gs=0,Ss=1,Vo=2,Ah=3,Eh=4,zd=5;var Vs=100,Od=101,Bd=102,kd=103,Gd=104,Vd=200,Hd=201,Wd=202,Xd=203,Ch=204,Rh=205,qd=206,Yd=207,Zd=208,Jd=209,Kd=210,$d=211,jd=212,Qd=213,ef=214,Wa=0,Xa=1,qa=2,Tr=3,Ya=4,Za=5,Ja=6,Ka=7,Ih=0,tf=1,nf=2,Li=0,Ph=1,Lh=2,Dh=3,Ho=4,Nh=5,Uh=6,Fh=7;var zh=300,Hs=301,Dr=302,vl=303,Ml=304,$a=1e3,Ri=1001,ja=1002,yn=1003,sf=1004;var Wo=1005;var vn=1006,bl=1007;var ji=1008;var Wn=1009,Oh=1010,Bh=1011,Nr=1012,Sl=1013,_i=1014,ri=1015,yi=1016,wl=1017,Tl=1018,Ws=1020,kh=35902,Gh=35899,Vh=1021,Hh=1022,jn=1023,qi=1026,Qi=1027,Al=1028,El=1029,ws=1030,Cl=1031;var Rl=1033,Xo=33776,qo=33777,Yo=33778,Zo=33779,Il=35840,Pl=35841,Ll=35842,Dl=35843,Nl=36196,Ul=37492,Fl=37496,zl=37488,Ol=37489,Jo=37490,Bl=37491,kl=37808,Gl=37809,Vl=37810,Hl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Zl=37816,Jl=37817,Kl=37818,$l=37819,jl=37820,Ql=37821,ec=36492,tc=36494,nc=36495,ic=36283,sc=36284,Ko=36285,rc=36286;var _o=2300,Qa=2301,Va=2302,xh=2303,_h=2400,yh=2401,vh=2402;var rf=3200;var oc=0,of=1,es="",un="srgb",yo="srgb-linear",vo="linear",Ot="srgb";var Ha=7680;var af=519,lf=512,cf=513,hf=514,Wh=515,uf=516,df=517,Xh=518,qh=519,ff=35044,ac=35048;var Yh="300 es",si=2e3,Ar=2001;function Wm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pf(){let n=Mo("canvas");return n.style.display="block",n}var od={},Er=null;function Zh(...n){let e="THREE."+n.shift();Er?Er("log",e,...n):console.log(e,...n)}function mf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=mf(n);let e="THREE."+n.shift();if(Er)Er("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=mf(n);let e="THREE."+n.shift();if(Er)Er("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function mo(...n){let e=n.join(" ");e in od||(od[e]=!0,it(...n))}function gf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var xf={[Wa]:Wa,[qa]:Ja,[Ya]:Ya,[Tr]:Za,[Xa]:Xa,[Ja]:qa,[Ka]:Ka,[Za]:Tr},Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,go=Math.PI/180,Cr=180/Math.PI;function Ur(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function Jh(n,e){return(n%e+e)%e}function qm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ym(n,e,t){return n!==e?(t-n)/(e-n):0}function xo(n,e,t){return(1-t)*n+t*e}function Zm(n,e,t,i){return xo(n,e,1-Math.exp(-t*i))}function Jm(n,e=1){return e-Math.abs(Jh(n,e*2)-e)}function Km(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $m(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qm(n,e){return n+Math.random()*(e-n)}function e0(n){return n*(.5-Math.random())}function t0(n){n!==void 0&&(ad=n);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n0(n){return n*go}function i0(n){return n*Cr}function s0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function r0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function o0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),m=o((e-i)/2),p=r((i-e)/2),h=o((i-e)/2);switch(s){case"XYX":n.set(a*d,c*f,c*m,a*l);break;case"YZY":n.set(c*m,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*m,a*d,a*l);break;case"XZX":n.set(a*d,c*h,c*p,a*l);break;case"YXY":n.set(c*p,a*d,c*h,a*l);break;case"ZYZ":n.set(c*h,c*p,a*d,a*l);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $h(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _f(n,e){if(e.constructor===Float32Array)return n;let t=$h(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function yf(n,e){if(e.constructor===Float32Array)return n;let t=$h(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Fr={DEG2RAD:go,RAD2DEG:Cr,generateUUID:Ur,clamp:Et,euclideanModulo:Jh,mapLinear:qm,inverseLerp:Ym,lerp:xo,damp:Zm,pingpong:Jm,smoothstep:Km,smootherstep:$m,randInt:jm,randFloat:Qm,randFloatSpread:e0,seededRandom:t0,degToRad:n0,radToDeg:i0,isPowerOfTwo:s0,ceilPowerOfTwo:r0,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:o0,normalize:yf,denormalize:_f},gt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],m=r[o+0],p=r[o+1],h=r[o+2],v=r[o+3];if(f!==v||c!==m||l!==p||d!==h){let g=c*m+l*p+d*h+f*v;g<0&&(m=-m,p=-p,h=-h,v=-v,g=-g);let _=1-a;if(g<.9995){let T=Math.acos(g),R=Math.sin(T);_=Math.sin(_*T)/R,a=Math.sin(a*T)/R,c=c*_+m*a,l=l*_+p*a,d=d*_+h*a,f=f*_+v*a}else{c=c*_+m*a,l=l*_+p*a,d=d*_+h*a,f=f*_+v*a;let T=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=T,l*=T,d*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[o],m=r[o+1],p=r[o+2],h=r[o+3];return e[t]=a*h+d*f+c*p-l*m,e[t+1]=c*h+d*m+l*f-a*p,e[t+2]=l*h+d*p+a*m-c*f,e[t+3]=d*h-a*f-c*m-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(s/2),f=a(r/2),m=c(i/2),p=c(s/2),h=c(r/2);switch(o){case"XYZ":this._x=m*d*f+l*p*h,this._y=l*p*f-m*d*h,this._z=l*d*h+m*p*f,this._w=l*d*f-m*p*h;break;case"YXZ":this._x=m*d*f+l*p*h,this._y=l*p*f-m*d*h,this._z=l*d*h-m*p*f,this._w=l*d*f+m*p*h;break;case"ZXY":this._x=m*d*f-l*p*h,this._y=l*p*f+m*d*h,this._z=l*d*h+m*p*f,this._w=l*d*f-m*p*h;break;case"ZYX":this._x=m*d*f-l*p*h,this._y=l*p*f+m*d*h,this._z=l*d*h-m*p*f,this._w=l*d*f+m*p*h;break;case"YZX":this._x=m*d*f+l*p*h,this._y=l*p*f+m*d*h,this._z=l*d*h-m*p*f,this._w=l*d*f-m*p*h;break;case"XZY":this._x=m*d*f-l*p*h,this._y=l*p*f-m*d*h,this._z=l*d*h+m*p*f,this._w=l*d*f+m*p*h;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],m=i+a+f;if(m>0){let p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(d-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-i*l,this._z=r*d+o*l+i*c-s*a,this._w=o*d-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new K,ld=new an,ot=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],m=i[2],p=i[5],h=i[8],v=s[0],g=s[3],_=s[6],T=s[1],R=s[4],b=s[7],A=s[2],S=s[5],x=s[8];return r[0]=o*v+a*T+c*A,r[3]=o*g+a*R+c*S,r[6]=o*_+a*b+c*x,r[1]=l*v+d*T+f*A,r[4]=l*g+d*R+f*S,r[7]=l*_+d*b+f*x,r[2]=m*v+p*T+h*A,r[5]=m*g+p*R+h*S,r[8]=m*_+p*b+h*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*r*d+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,m=a*c-d*r,p=l*r-o*c,h=t*f+i*m+s*p;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/h;return e[0]=f*v,e[1]=(s*l-d*i)*v,e[2]=(a*i-s*o)*v,e[3]=m*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,t)),this}rotate(e){return mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jc=new ot,cd=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a0(){let n={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yo]:{primaries:e,whitePoint:i,transfer:vo,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var At=a0();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hr,el=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=Mo("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},l0=0,Rr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qc(s[o].image)):r.push(Qc(s[o]))}else r=Qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?el.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var c0=0,eh=new K,Un=class n extends Ii{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ri,s=Ri,r=vn,o=ji,a=jn,c=Wn,l=n.DEFAULT_ANISOTROPY,d=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ur(),this.name="",this.source=new Rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=zh;Un.DEFAULT_ANISOTROPY=1;var Zt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],m=c[1],p=c[5],h=c[9],v=c[2],g=c[6],_=c[10];if(Math.abs(d-m)<.01&&Math.abs(f-v)<.01&&Math.abs(h-g)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+v)<.1&&Math.abs(h+g)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,b=(p+1)/2,A=(_+1)/2,S=(d+m)/4,x=(f+v)/4,w=(h+g)/4;return R>b&&R>A?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=S/i,r=x/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=w/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=w/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-h)*(g-h)+(f-v)*(f-v)+(m-d)*(m-d));return Math.abs(T)<.001&&(T=1),this.x=(g-h)/T,this.y=(f-v)/T,this.z=(m-d)/T,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Un({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends tl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},bo=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ct=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,d,f,m,p,h,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,d,f,m,p,h,v,g)}set(e,t,i,s,r,o,a,c,l,d,f,m,p,h,v,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=d,_[10]=f,_[14]=m,_[3]=p,_[7]=h,_[11]=v,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let m=o*d,p=o*f,h=a*d,v=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=p+h*l,t[5]=m-v*l,t[9]=-a*c,t[2]=v-m*l,t[6]=h+p*l,t[10]=o*c}else if(e.order==="YXZ"){let m=c*d,p=c*f,h=l*d,v=l*f;t[0]=m+v*a,t[4]=h*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-h,t[6]=v+m*a,t[10]=o*c}else if(e.order==="ZXY"){let m=c*d,p=c*f,h=l*d,v=l*f;t[0]=m-v*a,t[4]=-o*f,t[8]=h+p*a,t[1]=p+h*a,t[5]=o*d,t[9]=v-m*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let m=o*d,p=o*f,h=a*d,v=a*f;t[0]=c*d,t[4]=h*l-p,t[8]=m*l+v,t[1]=c*f,t[5]=v*l+m,t[9]=p*l-h,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,p=o*l,h=a*c,v=a*l;t[0]=c*d,t[4]=v-m*f,t[8]=h*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*f+h,t[10]=m-v*f}else if(e.order==="XZY"){let m=o*c,p=o*l,h=a*c,v=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=m*f+v,t[5]=o*d,t[9]=p*f-h,t[2]=h*f-p,t[6]=a*d,t[10]=v*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h0,e,u0)}lookAt(e,t,i){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),hs.crossVectors(i,Zn),hs.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),hs.crossVectors(i,Zn)),hs.normalize(),ya.crossVectors(Zn,hs),s[0]=hs.x,s[4]=ya.x,s[8]=Zn.x,s[1]=hs.y,s[5]=ya.y,s[9]=Zn.y,s[2]=hs.z,s[6]=ya.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],m=i[9],p=i[13],h=i[2],v=i[6],g=i[10],_=i[14],T=i[3],R=i[7],b=i[11],A=i[15],S=s[0],x=s[4],w=s[8],z=s[12],D=s[1],N=s[5],G=s[9],U=s[13],B=s[2],Q=s[6],Z=s[10],Y=s[14],k=s[3],F=s[7],V=s[11],q=s[15];return r[0]=o*S+a*D+c*B+l*k,r[4]=o*x+a*N+c*Q+l*F,r[8]=o*w+a*G+c*Z+l*V,r[12]=o*z+a*U+c*Y+l*q,r[1]=d*S+f*D+m*B+p*k,r[5]=d*x+f*N+m*Q+p*F,r[9]=d*w+f*G+m*Z+p*V,r[13]=d*z+f*U+m*Y+p*q,r[2]=h*S+v*D+g*B+_*k,r[6]=h*x+v*N+g*Q+_*F,r[10]=h*w+v*G+g*Z+_*V,r[14]=h*z+v*U+g*Y+_*q,r[3]=T*S+R*D+b*B+A*k,r[7]=T*x+R*N+b*Q+A*F,r[11]=T*w+R*G+b*Z+A*V,r[15]=T*z+R*U+b*Y+A*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],m=e[10],p=e[14],h=e[3],v=e[7],g=e[11],_=e[15],T=c*p-l*m,R=a*p-l*f,b=a*m-c*f,A=o*p-l*d,S=o*m-c*d,x=o*f-a*d;return t*(v*T-g*R+_*b)-i*(h*T-g*A+_*S)+s*(h*R-v*A+_*x)-r*(h*b-v*S+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-i*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],m=e[10],p=e[11],h=e[12],v=e[13],g=e[14],_=e[15],T=t*a-i*o,R=t*c-s*o,b=t*l-r*o,A=i*c-s*a,S=i*l-r*a,x=s*l-r*c,w=d*v-f*h,z=d*g-m*h,D=d*_-p*h,N=f*g-m*v,G=f*_-p*v,U=m*_-p*g,B=T*U-R*G+b*N+A*D-S*z+x*w;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/B;return e[0]=(a*U-c*G+l*N)*Q,e[1]=(s*G-i*U-r*N)*Q,e[2]=(v*x-g*S+_*A)*Q,e[3]=(m*S-f*x-p*A)*Q,e[4]=(c*D-o*U-l*z)*Q,e[5]=(t*U-s*D+r*z)*Q,e[6]=(g*b-h*x-_*R)*Q,e[7]=(d*x-m*b+p*R)*Q,e[8]=(o*G-a*D+l*w)*Q,e[9]=(i*D-t*G-r*w)*Q,e[10]=(h*S-v*b+_*T)*Q,e[11]=(f*b-d*S-p*T)*Q,e[12]=(a*z-o*N-c*w)*Q,e[13]=(t*N-i*z+s*w)*Q,e[14]=(v*R-h*A-g*T)*Q,e[15]=(d*A-f*R+m*T)*Q,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+i,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,m=r*l,p=r*d,h=r*f,v=o*d,g=o*f,_=a*f,T=c*l,R=c*d,b=c*f,A=i.x,S=i.y,x=i.z;return s[0]=(1-(v+_))*A,s[1]=(p+b)*A,s[2]=(h-R)*A,s[3]=0,s[4]=(p-b)*S,s[5]=(1-(m+_))*S,s[6]=(g+T)*S,s[7]=0,s[8]=(h+R)*x,s[9]=(g-T)*x,s[10]=(1-(m+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ur.set(s[0],s[1],s[2]).length(),a=ur.set(s[4],s[5],s[6]).length(),c=ur.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let l=1/o,d=1/a,f=1/c;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=d,fi.elements[5]*=d,fi.elements[6]*=d,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,t.setFromRotationMatrix(fi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=si,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(i-s),m=(t+e)/(t-e),p=(i+s)/(i-s),h,v;if(c)h=r/(o-r),v=o*r/(o-r);else if(a===si)h=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ar)h=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=si,c=!1){let l=this.elements,d=2/(t-e),f=2/(i-s),m=-(t+e)/(t-e),p=-(i+s)/(i-s),h,v;if(c)h=1/(o-r),v=o/(o-r);else if(a===si)h=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ar)h=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ur=new K,fi=new Ct,h0=new K(0,0,0),u0=new K(1,1,1),hs=new K,ya=new K,Zn=new K,ud=new Ct,dd=new an,xi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},d0=0,fd=new K,dr=new an,ki=new Ct,va=new K,lo=new K,f0=new K,p0=new an,pd=new K(1,0,0),md=new K(0,1,0),gd=new K(0,0,1),xd={type:"added"},m0={type:"removed"},fr={type:"childadded",child:null},th={type:"childremoved",child:null},Vt=class n extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new K,t=new xi,i=new an,s=new K(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new ot}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(lo,va,this.up):ki.lookAt(va,lo,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(ki),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xd),fr.child=e,this.dispatchEvent(fr),fr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m0),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xd),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,p0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),m=o(e.skeletons),p=o(e.animations),h=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),h.length>0&&(i.nodes=h)}return i.object=s,i;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new K(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ut=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),_=this._getHandJoint(l,v);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=d.position.distanceTo(f.position),p=.02,h=.005;l.inputState.pinching&&m>p+h?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=p-h&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function nh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=Jh(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=nh(o,r,e+1/3),this.g=nh(o,r,e),this.b=nh(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return At.workingToColorSpace(An.copy(this),e),Math.round(Et(An.r*255,0,255))*65536+Math.round(Et(An.g*255,0,255))*256+Math.round(Et(An.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(An.copy(this),t);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=un){At.workingToColorSpace(An.copy(this),e);let t=An.r,i=An.g,s=An.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Ma);let i=xo(us.h,Ma.h,t),s=xo(us.s,Ma.s,t),r=xo(us.l,Ma.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new $e;$e.NAMES=vf;var wo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var To=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new K,Gi=new K,ih=new K,Vi=new K,pr=new K,mr=new K,_d=new K,sh=new K,rh=new K,oh=new K,ah=new Zt,lh=new Zt,ch=new Zt,ms=class n{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),Gi.subVectors(i,t),ih.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Gi),c=pi.dot(ih),l=Gi.dot(Gi),d=Gi.dot(ih),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let m=1/f,p=(l*c-a*d)*m,h=(o*d-a*c)*m;return r.set(1-p-h,h,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ah.setScalar(0),lh.setScalar(0),ch.setScalar(0),ah.fromBufferAttribute(e,t),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ah,r.x),o.addScaledVector(lh,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),Gi.subVectors(e,t),pi.cross(Gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),pi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;pr.subVectors(s,i),mr.subVectors(r,i),sh.subVectors(e,i);let c=pr.dot(sh),l=mr.dot(sh);if(c<=0&&l<=0)return t.copy(i);rh.subVectors(e,s);let d=pr.dot(rh),f=mr.dot(rh);if(d>=0&&f<=d)return t.copy(s);let m=c*f-d*l;if(m<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(i).addScaledVector(pr,o);oh.subVectors(e,r);let p=pr.dot(oh),h=mr.dot(oh);if(h>=0&&p<=h)return t.copy(r);let v=p*l-c*h;if(v<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(mr,a);let g=d*h-p*f;if(g<=0&&f-d>=0&&p-h>=0)return _d.subVectors(r,s),a=(f-d)/(f-d+(p-h)),t.copy(s).addScaledVector(_d,a);let _=1/(g+v+m);return o=v*_,a=m*_,t.copy(i).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pi=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Sa.subVectors(this.max,co),gr.subVectors(e.a,co),xr.subVectors(e.b,co),_r.subVectors(e.c,co),ds.subVectors(xr,gr),fs.subVectors(_r,xr),Ds.subVectors(gr,_r);let t=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-Ds.z,Ds.y,ds.z,0,-ds.x,fs.z,0,-fs.x,Ds.z,0,-Ds.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-Ds.y,Ds.x,0];return!hh(t,gr,xr,_r,Sa)||(t=[1,0,0,0,1,0,0,0,1],!hh(t,gr,xr,_r,Sa))?!1:(wa.crossVectors(ds,fs),t=[wa.x,wa.y,wa.z],hh(t,gr,xr,_r,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new K,new K,new K,new K,new K,new K,new K,new K],mi=new K,ba=new Pi,gr=new K,xr=new K,_r=new K,ds=new K,fs=new K,Ds=new K,co=new K,Sa=new K,wa=new K,Ns=new K;function hh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ns.fromArray(n,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),d=i.dot(Ns);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var ln=new K,Ta=new gt,x0=0,sn=class extends Ii{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ff,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=e!==void 0?$h(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_f(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yf(e,this.array)}};var Ao=class extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Eo=class extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Rt=class extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}},_0=new Pi,ho=new K,uh=new K,Yi=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);let t=ho.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(uh)),this.expandByPoint(ho.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},y0=0,ii=new Ct,dh=new Vt,yr=new K,Jn=new Pi,uo=new Pi,_n=new K,Jt=class n extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?Eo:Ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Jn.min,uo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,uo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(uo.min),Jn.expandByPoint(uo.max))}Jn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)_n.fromBufferAttribute(a,l),c&&(yr.fromBufferAttribute(e,l),_n.add(yr)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let z=0;z<i.count;z++)a[z]=new K,c[z]=new K;let d=new K,f=new K,m=new K,p=new gt,h=new gt,v=new gt,g=new K,_=new K;function T(z,D,N){l[z]=l[D]=l[N]=1,d.fromBufferAttribute(i,z),f.fromBufferAttribute(i,D),m.fromBufferAttribute(i,N),p.fromBufferAttribute(r,z),h.fromBufferAttribute(r,D),v.fromBufferAttribute(r,N),f.sub(d),m.sub(d),h.sub(p),v.sub(p);let G=1/(h.x*v.y-v.x*h.y);isFinite(G)&&(g.copy(f).multiplyScalar(v.y).addScaledVector(m,-h.y).multiplyScalar(G),_.copy(m).multiplyScalar(h.x).addScaledVector(f,-v.x).multiplyScalar(G),a[z].add(g),a[D].add(g),a[N].add(g),c[z].add(_),c[D].add(_),c[N].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let z=0,D=R.length;z<D;++z){let N=R[z],G=N.start,U=N.count;for(let B=G,Q=G+U;B<Q;B+=3)T(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new K,A=new K,S=new K,x=new K;function w(z){S.fromBufferAttribute(s,z),x.copy(S);let D=a[z];b.copy(D),b.sub(S.multiplyScalar(S.dot(D))).normalize(),A.crossVectors(x,D);let G=A.dot(c[z])<0?-1:1;o.setXYZW(z,b.x,b.y,b.z,G)}for(let z=0,D=i.count;z<D;++z)l[z]&&w(z);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);let s=new K,r=new K,o=new K,a=new K,c=new K,l=new K,d=new K,f=new K;if(e)for(let m=0,p=e.count;m<p;m+=3){let h=e.getX(m+0),v=e.getX(m+1),g=e.getX(m+2);s.fromBufferAttribute(t,h),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,h),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(d),c.add(d),l.add(d),i.setXYZ(h,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,m=new l.constructor(c.length*d),p=0,h=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*d;for(let _=0;_<d;_++)m[h++]=l[p++]}return new sn(m,d,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let m=l[d],p=e(m,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,m=l.length;f<m;f++){let p=l[f];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let m=0,p=f.length;m<p;m++)d.push(f[m].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fh=new K,v0=new K,M0=new ot,gi=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=fh.subVectors(i,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||M0.getNormalMatrix(e),s=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},b0=0,Zi=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Ss,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Rh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wi=new K,ph=new K,Aa=new K,Ea=new K,Co=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ph.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Ea.copy(this.origin).sub(ph);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Aa),a=Ea.dot(this.direction),c=-Ea.dot(Aa),l=Ea.lengthSq(),d=Math.abs(1-o*o),f,m,p,h;if(d>0)if(f=o*c-a,m=o*a-c,h=r*d,f>=0)if(m>=-h)if(m<=h){let v=1/d;f*=v,m*=v,p=f*(f+o*m+2*a)+m*(o*f+m+2*c)+l}else m=r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*c)+l;else m=-r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*c)+l;else m<=-h?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+m*(m+2*c)+l):m<=h?(f=0,m=Math.min(Math.max(-r,-c),r),p=m*(m+2*c)+l):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+m*(m+2*c)+l);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ph).addScaledVector(Aa,m),p}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);let i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(i=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(i=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),d>=0?(r=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,m=e.y-o.y,p=e.z-o.z,h=t.x-o.x,v=t.y-o.y,g=t.z-o.z,_=i.x-o.x,T=i.y-o.y,R=i.z-o.z,b=Math.abs(c),A=Math.abs(l),S=Math.abs(d),x,w,z,D,N,G,U,B,Q,Z,Y,k;if(b>=A&&b>=S?(z=c,G=f,Q=h,k=_,c>=0?(x=l,w=d,D=m,N=p,U=v,B=g,Z=T,Y=R):(x=d,w=l,D=p,N=m,U=g,B=v,Z=R,Y=T)):A>=S?(z=l,G=m,Q=v,k=T,l>=0?(x=d,w=c,D=p,N=f,U=g,B=h,Z=R,Y=_):(x=c,w=d,D=f,N=p,U=h,B=g,Z=_,Y=R)):(z=d,G=p,Q=g,k=R,d>=0?(x=c,w=l,D=f,N=m,U=h,B=v,Z=_,Y=T):(x=l,w=c,D=m,N=f,U=v,B=h,Z=T,Y=_)),z===0)return null;let F=x/z,V=w/z,q=1/z,X=D-F*G,pe=N-V*G,W=U-F*Q,de=B-V*Q,Ae=Z-F*k,Re=Y-V*k,ve=Ae*de-Re*W,Xe=X*Re-pe*Ae,dt=W*pe-de*X;if(s){if(ve<0||Xe<0||dt<0)return null}else if((ve<0||Xe<0||dt<0)&&(ve>0||Xe>0||dt>0))return null;let Ie=ve+Xe+dt;if(Ie===0)return null;let st=q*(ve*G+Xe*Q+dt*k);return(Ie>0?st<0:st>0)?null:this.at(st/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yd=new Ct,Us=new Co,Ca=new Yi,vd=new K,Ra=new K,Ia=new K,Pa=new K,mh=new K,La=new K,Md=new K,Da=new K,Pt=class extends Vt{constructor(e=new Jt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){La.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(mh.fromBufferAttribute(f,e),o?La.addScaledVector(mh,d):La.addScaledVector(mh.sub(t),d))}t.add(La)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(Ca.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Ca,vd)===null||Us.origin.distanceToSquared(vd)>(e.far-e.near)**2))&&(yd.copy(r).invert(),Us.copy(e.ray).applyMatrix4(yd),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let h=0,v=m.length;h<v;h++){let g=m[h],_=o[g.materialIndex],T=Math.max(g.start,p.start),R=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let b=T,A=R;b<A;b+=3){let S=a.getX(b),x=a.getX(b+1),w=a.getX(b+2);s=Na(this,_,e,i,l,d,f,S,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let h=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=h,_=v;g<_;g+=3){let T=a.getX(g),R=a.getX(g+1),b=a.getX(g+2);s=Na(this,o,e,i,l,d,f,T,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let h=0,v=m.length;h<v;h++){let g=m[h],_=o[g.materialIndex],T=Math.max(g.start,p.start),R=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let b=T,A=R;b<A;b+=3){let S=b,x=b+1,w=b+2;s=Na(this,_,e,i,l,d,f,S,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let h=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=h,_=v;g<_;g+=3){let T=g,R=g+1,b=g+2;s=Na(this,o,e,i,l,d,f,T,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function S0(n,e,t,i,s,r,o,a){let c;if(e.side===bn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===bs,a),c===null)return null;Da.copy(a),Da.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Da);return l<t.near||l>t.far?null:{distance:l,point:Da.clone(),object:n}}function Na(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Ra),n.getVertexPosition(c,Ia),n.getVertexPosition(l,Pa);let d=S0(n,e,t,i,Ra,Ia,Pa,Md);if(d){let f=new K;ms.getBarycoord(Md,Ra,Ia,Pa,f),s&&(d.uv=ms.getInterpolatedAttribute(s,a,c,l,f,new gt)),r&&(d.uv1=ms.getInterpolatedAttribute(r,a,c,l,f,new gt)),o&&(d.normal=ms.getInterpolatedAttribute(o,a,c,l,f,new K),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new K,materialIndex:0};ms.getNormal(Ra,Ia,Pa,m.normal),d.face=m,d.barycoord=f}return d}var zs=class extends Un{constructor(e=null,t=1,i=1,s,r,o,a,c,l=yn,d=yn,f,m){super(null,o,a,c,l,d,s,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vr=new Ct,bd=new Ct,Ua=[],Sd=new Pi,w0=new Ct,fo=new Pt,po=new Yi,Fn=class extends Pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,w0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vr),Sd.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(Sd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vr),po.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),bd.multiplyMatrices(i,vr),fo.matrixWorld=bd,fo.raycast(e,Ua);for(let o=0,a=Ua.length;o<a;o++){let c=Ua[o];c.instanceId=r,c.object=this,t.push(c)}Ua.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new zs(new Float32Array(s*this.count),s,this.count,Al,ri));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Yi,T0=new gt(.5,.5),Fa=new K,xs=class{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],m=r[6],p=r[7],h=r[8],v=r[9],g=r[10],_=r[11],T=r[12],R=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-o,p-d,_-h,A-T).normalize(),s[1].setComponents(l+o,p+d,_+h,A+T).normalize(),s[2].setComponents(l+a,p+f,_+v,A+R).normalize(),s[3].setComponents(l-a,p-f,_-v,A-R).normalize(),i)s[4].setComponents(c,m,g,b).normalize(),s[5].setComponents(l-c,p-m,_-g,A-b).normalize();else if(s[4].setComponents(l-c,p-m,_-g,A-b).normalize(),t===si)s[5].setComponents(l+c,p+m,_+g,A+b).normalize();else if(t===Ar)s[5].setComponents(c,m,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=T0.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Fa.x=s.normal.x>0?e.max.x:e.min.x,Fa.y=s.normal.y>0?e.max.y:e.min.y,Fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wd=new Ct,il=class n{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];wd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new xs),i[s].setFromProjectionMatrix(wd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new xs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var sl=class extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Td=new Ct,Mh=new Co,za=new Yi,Oa=new K,Ro=class extends Vt{constructor(e=new Jt,t=new sl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Td.copy(s).invert(),Mh.copy(e.ray).applyMatrix4(Td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let m=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let h=m,v=p;h<v;h++){let g=l.getX(h);Oa.fromBufferAttribute(f,g),Ad(Oa,g,c,s,e,t,this)}}else{let m=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let h=m,v=p;h<v;h++)Oa.fromBufferAttribute(f,h),Ad(Oa,h,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ad(n,e,t,i,s,r,o){let a=Mh.distanceSqToPoint(n);if(a<t){let c=new K;Mh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Io=class extends Un{constructor(e=[],t=Hs,i,s,r,o,a,c,l,d){super(e,t,i,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Os=class extends Un{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends Un{constructor(e,t,i=_i,s,r,o,a=yn,c=yn,l,d=qi,f=1){if(d!==qi&&d!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:f};super(m,s,r,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Po=class extends Ji{constructor(e,t=_i,i=Hs,s,r,o=yn,a=yn,c,l=qi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lo=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cn=class n extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],m=0,p=0;h("z","y","x",-1,-1,i,t,e,o,r,0),h("z","y","x",1,-1,i,t,-e,o,r,1),h("x","z","y",1,1,e,i,t,s,o,2),h("x","z","y",1,-1,e,i,-t,s,o,3),h("x","y","z",1,-1,e,t,i,s,r,4),h("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function h(v,g,_,T,R,b,A,S,x,w,z){let D=b/x,N=A/w,G=b/2,U=A/2,B=S/2,Q=x+1,Z=w+1,Y=0,k=0,F=new K;for(let V=0;V<Z;V++){let q=V*N-U;for(let X=0;X<Q;X++){let pe=X*D-G;F[v]=pe*T,F[g]=q*R,F[_]=B,l.push(F.x,F.y,F.z),F[v]=0,F[g]=0,F[_]=S>0?1:-1,d.push(F.x,F.y,F.z),f.push(X/x),f.push(1-V/w),Y+=1}}for(let V=0;V<w;V++)for(let q=0;q<x;q++){let X=m+q+Q*V,pe=m+q+Q*(V+1),W=m+(q+1)+Q*(V+1),de=m+(q+1)+Q*V;c.push(X,pe,de),c.push(pe,W,de),k+=6}a.addGroup(p,k,z),p+=k,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Bs=class n extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new K,d=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,m=3;f<=t;f++,m+=3){let p=i+f/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[m]/e+1)/2,d.y=(o[m+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zn=class n extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],m=[],p=[],h=0,v=[],g=i/2,_=0;T(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(p,2));function T(){let b=new K,A=new K,S=0,x=(t-e)/i;for(let w=0;w<=r;w++){let z=[],D=w/r,N=D*(t-e)+e;for(let G=0;G<=s;G++){let U=G/s,B=U*c+a,Q=Math.sin(B),Z=Math.cos(B);A.x=N*Q,A.y=-D*i+g,A.z=N*Z,f.push(A.x,A.y,A.z),b.set(Q,x,Z).normalize(),m.push(b.x,b.y,b.z),p.push(U,1-D),z.push(h++)}v.push(z)}for(let w=0;w<s;w++)for(let z=0;z<r;z++){let D=v[z][w],N=v[z+1][w],G=v[z+1][w+1],U=v[z][w+1];(e>0||z!==0)&&(d.push(D,N,U),S+=3),(t>0||z!==r-1)&&(d.push(N,G,U),S+=3)}l.addGroup(_,S,0),_+=S}function R(b){let A=h,S=new gt,x=new K,w=0,z=b===!0?e:t,D=b===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,g*D,0),m.push(0,D,0),p.push(.5,.5),h++;let N=h;for(let G=0;G<=s;G++){let B=G/s*c+a,Q=Math.cos(B),Z=Math.sin(B);x.x=z*Z,x.y=g*D,x.z=z*Q,f.push(x.x,x.y,x.z),m.push(0,D,0),S.x=Q*.5+.5,S.y=Z*.5*D+.5,p.push(S.x,S.y),h++}for(let G=0;G<s;G++){let U=A+G,B=N+G;b===!0?d.push(B,B+1,U):d.push(B+1,B,U),w+=3}l.addGroup(_,w,b===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Do=class n extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),d(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let R=new K,b=new K,A=new K;for(let S=0;S<t.length;S+=3)p(t[S+0],R),p(t[S+1],b),p(t[S+2],A),c(R,b,A,T)}function c(T,R,b,A){let S=A+1,x=[];for(let w=0;w<=S;w++){x[w]=[];let z=T.clone().lerp(b,w/S),D=R.clone().lerp(b,w/S),N=S-w;for(let G=0;G<=N;G++)G===0&&w===S?x[w][G]=z:x[w][G]=z.clone().lerp(D,G/N)}for(let w=0;w<S;w++)for(let z=0;z<2*(S-w)-1;z++){let D=Math.floor(z/2);z%2===0?(m(x[w][D+1]),m(x[w+1][D]),m(x[w][D])):(m(x[w][D+1]),m(x[w+1][D+1]),m(x[w+1][D]))}}function l(T){let R=new K;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(T),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function d(){let T=new K;for(let R=0;R<r.length;R+=3){T.x=r[R+0],T.y=r[R+1],T.z=r[R+2];let b=g(T)/2/Math.PI+.5,A=_(T)/Math.PI+.5;o.push(b,1-A)}h(),f()}function f(){for(let T=0;T<o.length;T+=6){let R=o[T+0],b=o[T+2],A=o[T+4],S=Math.max(R,b,A),x=Math.min(R,b,A);S>.9&&x<.1&&(R<.2&&(o[T+0]+=1),b<.2&&(o[T+2]+=1),A<.2&&(o[T+4]+=1))}}function m(T){r.push(T.x,T.y,T.z)}function p(T,R){let b=T*3;R.x=e[b+0],R.y=e[b+1],R.z=e[b+2]}function h(){let T=new K,R=new K,b=new K,A=new K,S=new gt,x=new gt,w=new gt;for(let z=0,D=0;z<r.length;z+=9,D+=6){T.set(r[z+0],r[z+1],r[z+2]),R.set(r[z+3],r[z+4],r[z+5]),b.set(r[z+6],r[z+7],r[z+8]),S.set(o[D+0],o[D+1]),x.set(o[D+2],o[D+3]),w.set(o[D+4],o[D+5]),A.copy(T).add(R).add(b).divideScalar(3);let N=g(A);v(S,D+0,T,N),v(x,D+2,R,N),v(w,D+4,b,N)}}function v(T,R,b,A){A<0&&T.x===1&&(o[R]=T.x-1),b.x===0&&b.z===0&&(o[R]=A/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function _(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Ki=class n extends Do{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var $i=class n extends Do{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vn=class n extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,d=c+1,f=e/a,m=t/c,p=[],h=[],v=[],g=[];for(let _=0;_<d;_++){let T=_*m-o;for(let R=0;R<l;R++){let b=R*f-r;h.push(b,-T,0),v.push(0,0,1),g.push(R/a),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<a;T++){let R=T+l*_,b=T+l*(_+1),A=T+1+l*(_+1),S=T+1+l*_;p.push(R,b,S),p.push(b,A,S)}this.setIndex(p),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},No=class n extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],d=[],f=e,m=(t-e)/s,p=new K,h=new gt;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let _=r+g/i*o;p.x=f*Math.cos(_),p.y=f*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),h.x=(p.x/t+1)/2,h.y=(p.y/t+1)/2,d.push(h.x,h.y)}f+=m}for(let v=0;v<s;v++){let g=v*(i+1);for(let _=0;_<i;_++){let T=_+g,R=T,b=T+i+1,A=T+i+2,S=T+1;a.push(R,b,S),a.push(b,A,S)}}this.setIndex(a),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _s=class n extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new K,m=new K,p=[],h=[],v=[],g=[];for(let _=0;_<=i;_++){let T=[],R=_/i,b=o+R*a,A=e*Math.cos(b),S=Math.sqrt(e*e-A*A),x=0;_===0&&o===0?x=.5/t:_===i&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let z=w/t,D=s+z*r;f.x=-S*Math.cos(D),f.y=A,f.z=S*Math.sin(D),h.push(f.x,f.y,f.z),m.copy(f).normalize(),v.push(m.x,m.y,m.z),g.push(z+x,1-R),T.push(l++)}d.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){let R=d[_][T+1],b=d[_][T],A=d[_+1][T],S=d[_+1][T+1];(_!==0||o>0)&&p.push(R,b,S),(_!==i-1||c<Math.PI)&&p.push(b,A,S)}this.setIndex(p),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Uo=class n extends Jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],d=[],f=[],m=new K,p=new K,h=new K;for(let v=0;v<=i;v++){let g=o+v/i*a;for(let _=0;_<=s;_++){let T=_/s*r;p.x=(e+t*Math.cos(g))*Math.cos(T),p.y=(e+t*Math.cos(g))*Math.sin(T),p.z=t*Math.sin(g),l.push(p.x,p.y,p.z),m.x=e*Math.cos(T),m.y=e*Math.sin(T),h.subVectors(p,m).normalize(),d.push(h.x,h.y,h.z),f.push(_/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=s;g++){let _=(s+1)*v+g-1,T=(s+1)*(v-1)+g-1,R=(s+1)*(v-1)+g,b=(s+1)*v+g;c.push(_,T,b),c.push(T,R,b)}this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ed(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ed(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=Xs(n[t]);for(let s in i)e[s]=i[s]}return e}function Ed(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function A0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var Mf={clone:Xs,merge:Cn},E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rl=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ol=class extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},al=class extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ba(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ys=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends ys{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yh:r=e,a=2*t-i;break;case vh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case yh:o=e,c=2*i-t;break;case vh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,p=this._weightNext,h=(i-t)/(s-t),v=h*h,g=v*h,_=-m*g+2*m*v-m*h,T=(1+m)*g+(-1.5-2*m)*v+(-.5+m)*h+1,R=(-1-p)*g+(1.5+p)*v+.5*h,b=p*g-p*v;for(let A=0;A!==a;++A)r[A]=_*o[d+A]+T*o[l+A]+R*o[c+A]+b*o[f+A];return r}},cl=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(i-t)/(s-t),f=1-d;for(let m=0;m!==a;++m)r[m]=o[l+m]*f+o[c+m]*d;return r}},hl=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ul=class extends ys{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let h=(i-t)/(s-t),v=1-h;for(let g=0;g!==a;++g)r[g]=o[l+g]*v+o[c+g]*h;return r}let m=a*2,p=e-1;for(let h=0;h!==a;++h){let v=o[l+h],g=o[c+h],_=p*m+h*2,T=f[_],R=f[_+1],b=e*m+h*2,A=d[b],S=d[b+1],x=I0(i,t,T,A,s);r[h]=bf(x,v,R,S,g)}return r}};function bf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function R0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function I0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=bf(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=R0(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var $n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mr(t,this.TimeBufferType),this.values=Mr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mr(e.times,Array),values:Mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ba(e.settings)&&(i.settings={inTangents:Mr(e.settings.inTangents,Array),outTangents:Mr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _o:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case xh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Ba(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ba(this.settings)&&(Rd(this.settings.inTangents,e),Rd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ct("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Xm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,m=f-i,p=f+i;for(let h=0;h!==i;++h){let v=t[f+h];if(v!==t[m+h]||v!==t[p+h]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,m=o*i;for(let p=0;p!==i;++p)t[m+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ba(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Rd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Qa;var vs=class extends $n{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=_o;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};dl.prototype.ValueTypeName="color";var fl=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};fl.prototype.ValueTypeName="number";var pl=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},Fo=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends $n{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=_o;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};ml.prototype.ValueTypeName="vector";var gl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=l.length;f<m;f+=2){let p=l[f],h=l[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return h}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sf=new gl,xl=class{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Oo=class extends zo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gh=new Ct,Id=new K,Pd=new K,_l=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ka=new K,Ga=new an,Ci=new K,Bo=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Ga,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ka,Ga,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new K,Ld=new gt,Dd=new gt,Nn=class extends Bo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,Ld,Dd),t.subVectors(Dd,Ld)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ko=class extends Bo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bh=class extends _l{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Go=class extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var br=-90,Sr=1,Pr=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(br,Sr,e,t);s.layers=this.layers,this.add(s);let r=new Nn(br,Sr,e,t);r.layers=this.layers,this.add(r);let o=new Nn(br,Sr,e,t);o.layers=this.layers,this.add(o);let a=new Nn(br,Sr,e,t);a.layers=this.layers,this.add(a);let c=new Nn(br,Sr,e,t);c.layers=this.layers,this.add(c);let l=new Nn(br,Sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,m,p),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}},yl=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Qh="\\[\\]\\.:\\/",P0=new RegExp("["+Qh+"]","g"),eu="[^"+Qh+"]",L0="[^"+Qh.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",eu),N0=/(WCOD+)?/.source.replace("WCOD",L0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),z0=new RegExp("^"+D0+N0+U0+F0+"$"),O0=["material","materials","bones","map"],Sh=class{constructor(e,t,i){let s=i||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},qt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(e){let t=z0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);O0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=Sh;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wM=new Float32Array(1);var wh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function tu(n,e,t,i){let s=B0(i);switch(t){case Vh:return n*e;case Al:return n*e/s.components*s.byteLength;case El:return n*e/s.components*s.byteLength;case ws:return n*e*2/s.components*s.byteLength;case Cl:return n*e*2/s.components*s.byteLength;case Hh:return n*e*3/s.components*s.byteLength;case jn:return n*e*4/s.components*s.byteLength;case Rl:return n*e*4/s.components*s.byteLength;case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Dl:return Math.max(n,16)*Math.max(e,8)/4;case Il:case Ll:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case Ul:case zl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Jo:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ko:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(n){switch(n){case Wn:case Oh:return{byteLength:1,components:1};case Nr:case Bh:case yi:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case _i:case Sl:case ri:return{byteLength:4,components:1};case kh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function q0(n){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((p,h)=>p.start-h.start);let m=0;for(let p=1;p<f.length;p++){let h=f[m],v=f[p];v.start<=h.start+h.count+1?h.count=Math.max(h.count,v.start+v.count-h.start):(++m,f[m]=v)}f.length=m+1;for(let p=0,h=f.length;p<h;p++){let v=f[p];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
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
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,xg=`vec3 transformedNormal = objectNormal;
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
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
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
#endif`,Wg=`uniform sampler2D dfgLUT;
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
}`,Xg=`
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
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
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Px=`float getShadowMask() {
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
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform float backgroundBlurriness;
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define LAMBERT
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
}`,h_=`#define MATCAP
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
}`,u_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
}`,f_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,__=`#define TOON
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
}`,y_=`#define TOON
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
}`,v_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Y0,alphahash_pars_fragment:Z0,alphamap_fragment:J0,alphamap_pars_fragment:K0,alphatest_fragment:$0,alphatest_pars_fragment:j0,aomap_fragment:Q0,aomap_pars_fragment:eg,batching_pars_vertex:tg,batching_vertex:ng,begin_vertex:ig,beginnormal_vertex:sg,bsdfs:rg,iridescence_fragment:og,bumpmap_pars_fragment:ag,clipping_planes_fragment:lg,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:hg,clipping_planes_vertex:ug,color_fragment:dg,color_pars_fragment:fg,color_pars_vertex:pg,color_vertex:mg,common:gg,defaultnormal_vertex:xg,displacementmap_pars_vertex:_g,displacementmap_vertex:yg,emissivemap_fragment:vg,emissivemap_pars_fragment:Mg,colorspace_fragment:bg,colorspace_pars_fragment:Sg,envmap_fragment:wg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:Ag,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Og,envmap_vertex:Cg,fog_vertex:Rg,fog_pars_vertex:Ig,fog_fragment:Pg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Fg,lights_pars_begin:zg,lights_toon_fragment:Bg,lights_toon_pars_fragment:kg,lights_phong_fragment:Gg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,lightprobes_pars_fragment:Zg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:jg,map_fragment:Qg,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:rx,morphcolor_vertex:ox,morphnormal_vertex:ax,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:hx,normal_fragment_maps:ux,normal_pars_fragment:dx,normal_pars_vertex:fx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:yx,opaque_fragment:vx,packing:Mx,premultiplied_alpha_fragment:bx,project_vertex:Sx,dithering_fragment:wx,dithering_pars_fragment:Tx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Px,skinbase_vertex:Lx,skinning_pars_vertex:Dx,skinning_vertex:Nx,skinnormal_vertex:Ux,specularmap_fragment:Fx,specularmap_pars_fragment:zx,tonemapping_fragment:Ox,tonemapping_pars_fragment:Bx,transmission_fragment:kx,transmission_pars_fragment:Gx,uv_pars_fragment:Vx,uv_pars_vertex:Hx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Yx,backgroundCube_vert:Zx,backgroundCube_frag:Jx,cube_vert:Kx,cube_frag:$x,depth_vert:jx,depth_frag:Qx,distance_vert:e_,distance_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:h_,meshmatcap_frag:u_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:x_,meshtoon_vert:__,meshtoon_frag:y_,points_vert:v_,points_frag:M_,shadow_vert:b_,shadow_frag:S_,sprite_vert:w_,sprite_frag:T_},Be={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ni={basic:{uniforms:Cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Cn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Cn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new $e(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Cn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Cn([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Cn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Cn([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Cn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Cn([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Cn([Be.common,Be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Cn([Be.lights,Be.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ni.physical={uniforms:Cn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var lc={r:0,b:0,g:0},A_=new Ct,qf=new ot;qf.set(-1,0,0,0,1,0,0,0,1);function E_(n,e,t,i,s,r){let o=new $e(0),a=s===!0?0:1,c,l,d=null,f=0,m=null;function p(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let b=T.backgroundBlurriness>0;R=e.get(R,b)}return R}function h(T){let R=!1,b=p(T);b===null?g(o,a):b&&b.isColor&&(g(b,1),R=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,R){let b=p(R);b&&b.isCubeTexture?(l===void 0&&(l=new Pt(new cn(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Xs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qf),l.material.toneMapped=At.getTransfer(b.colorSpace)!==Ot,(d!==b||f!==b.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,m=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Pt(new Vn(2,2),new Hn({name:"BackgroundMaterial",uniforms:Xs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=At.getTransfer(b.colorSpace)!==Ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,R){T.getRGB(lc,jh(n)),t.buffers.color.setClear(lc.r,lc.g,lc.b,R,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,R=1){o.set(T),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,g(o,a)},render:h,addToRenderList:v,dispose:_}}function C_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(N,G,U,B,Q){let Z=!1,Y=f(N,B,U,G);r!==Y&&(r=Y,l(r.object)),Z=p(N,B,U,Q),Z&&h(N,B,U,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(N,G,U,B),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function d(N){return n.deleteVertexArray(N)}function f(N,G,U,B){let Q=B.wireframe===!0,Z=i[G.id];Z===void 0&&(Z={},i[G.id]=Z);let Y=N.isInstancedMesh===!0?N.id:0,k=Z[Y];k===void 0&&(k={},Z[Y]=k);let F=k[U.id];F===void 0&&(F={},k[U.id]=F);let V=F[Q];return V===void 0&&(V=m(c()),F[Q]=V),V}function m(N){let G=[],U=[],B=[];for(let Q=0;Q<t;Q++)G[Q]=0,U[Q]=0,B[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:U,attributeDivisors:B,object:N,attributes:{},index:null}}function p(N,G,U,B){let Q=r.attributes,Z=G.attributes,Y=0,k=U.getAttributes();for(let F in k)if(k[F].location>=0){let q=Q[F],X=Z[F];if(X===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),q===void 0||q.attribute!==X||X&&q.data!==X.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function h(N,G,U,B){let Q={},Z=G.attributes,Y=0,k=U.getAttributes();for(let F in k)if(k[F].location>=0){let q=Z[F];q===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(q=N.instanceColor));let X={};X.attribute=q,q&&q.data&&(X.data=q.data),Q[F]=X,Y++}r.attributes=Q,r.attributesNum=Y,r.index=B}function v(){let N=r.newAttributes;for(let G=0,U=N.length;G<U;G++)N[G]=0}function g(N){_(N,0)}function _(N,G){let U=r.newAttributes,B=r.enabledAttributes,Q=r.attributeDivisors;U[N]=1,B[N]===0&&(n.enableVertexAttribArray(N),B[N]=1),Q[N]!==G&&(n.vertexAttribDivisor(N,G),Q[N]=G)}function T(){let N=r.newAttributes,G=r.enabledAttributes;for(let U=0,B=G.length;U<B;U++)G[U]!==N[U]&&(n.disableVertexAttribArray(U),G[U]=0)}function R(N,G,U,B,Q,Z,Y){Y===!0?n.vertexAttribIPointer(N,G,U,Q,Z):n.vertexAttribPointer(N,G,U,B,Q,Z)}function b(N,G,U,B){v();let Q=B.attributes,Z=U.getAttributes(),Y=G.defaultAttributeValues;for(let k in Z){let F=Z[k];if(F.location>=0){let V=Q[k];if(V===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(V=N.instanceColor)),V!==void 0){let q=V.normalized,X=V.itemSize,pe=e.get(V);if(pe===void 0)continue;let W=pe.buffer,de=pe.type,Ae=pe.bytesPerElement,Re=de===n.INT||de===n.UNSIGNED_INT||V.gpuType===Sl;if(V.isInterleavedBufferAttribute){let ve=V.data,Xe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,dt=V.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ie=0;Ie<F.locationSize;Ie++)_(F.location+Ie,ve.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)g(F.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Ie=0;Ie<F.locationSize;Ie++)R(F.location+Ie,X/F.locationSize,de,q,Xe*Ae,(dt+X/F.locationSize*Ie)*Ae,Re)}else{if(V.isInstancedBufferAttribute){for(let ve=0;ve<F.locationSize;ve++)_(F.location+ve,V.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ve=0;ve<F.locationSize;ve++)g(F.location+ve);n.bindBuffer(n.ARRAY_BUFFER,W);for(let ve=0;ve<F.locationSize;ve++)R(F.location+ve,X/F.locationSize,de,q,X*Ae,X/F.locationSize*ve*Ae,Re)}}else if(Y!==void 0){let q=Y[k];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(F.location,q);break;case 3:n.vertexAttrib3fv(F.location,q);break;case 4:n.vertexAttrib4fv(F.location,q);break;default:n.vertexAttrib1fv(F.location,q)}}}}T()}function A(){z();for(let N in i){let G=i[N];for(let U in G){let B=G[U];for(let Q in B){let Z=B[Q];for(let Y in Z)d(Z[Y].object),delete Z[Y];delete B[Q]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let G=i[N.id];for(let U in G){let B=G[U];for(let Q in B){let Z=B[Q];for(let Y in Z)d(Z[Y].object),delete Z[Y];delete B[Q]}}delete i[N.id]}function x(N){for(let G in i){let U=i[G];for(let B in U){let Q=U[B];if(Q[N.id]===void 0)continue;let Z=Q[N.id];for(let Y in Z)d(Z[Y].object),delete Z[Y];delete Q[N.id]}}}function w(N){for(let G in i){let U=i[G],B=N.isInstancedMesh===!0?N.id:0,Q=U[B];if(Q!==void 0){for(let Z in Q){let Y=Q[Z];for(let k in Y)d(Y[k].object),delete Y[k];delete Q[Z]}delete U[B],Object.keys(U).length===0&&delete i[G]}}}function z(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function R_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let m=0;for(let p=0;p<d;p++)m+=l[p];t.update(m,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function I_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==jn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Wn&&x!==ri&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(it("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:b,maxSamples:A,samples:S}}function P_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new gi,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let p=f.length!==0||m||i!==0||s;return s=m,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,p){let h=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,_=n.get(f);if(!s||h===null||h.length===0||r&&!g)r?d(null):l();else{let T=r?0:i,R=T*4,b=_.clippingState||null;c.value=b,b=d(h,m,R,p);for(let A=0;A!==R;++A)b[A]=t[A];_.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,m,p,h){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=c.value,h!==!0||g===null){let _=p+v*4,T=m.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<_)&&(g=new Float32Array(_));for(let R=0,b=p;R!==v;++R,b+=4)o.copy(f[R]).applyMatrix4(T,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Qo=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Gs});r.uniforms.tEquirect.value=t;let o=new Pt(s,r),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=vn),new Pr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},wf=256,L_=3,D_=20,Yf=256,Zf=16,N_=3,U_=new K,F_=new $e,hc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pr(1,10,null),this._boxMesh=new Pt(new cn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=U_}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,m=c.autoClearColor,p=c.autoClearDepth,h=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(F_));let g=new Pr(i,s,d);return g.position.copy(a),g.update(c,e),c.autoClear=f,c.autoClearColor=m,c.autoClearDepth=p,c.autoClearStencil=h,e.background=v,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wf,Kh(e))}_fromTexture(e,t){e.mapping===Hs||e.mapping===Dr?this._setSize(e.image.length===0?wf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Tf(e,!1,!1),i=Math.log2(e)-L_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Tf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hs||e.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Af()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=z_(),this._integrationMaterial=O_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Zf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-N_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Yf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=B_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Tf(n,e,t){return new Qo(n,{minFilter:ji,generateMipmaps:e,type:yi,colorSpace:yo,depthBuffer:t})}function ea(n,e,t){return new Hn({name:n,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:bn,blending:Gs,depthTest:!1,depthWrite:!1})}function z_(){return ea("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yf}u

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
	`)}function O_(){return ea("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zf}},`

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
	`)}function B_(){return ea("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${D_}
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
	`)}function Af(){return ea("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ef(){return ea("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function k_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(m,p=!1){return m==null?null:p?o(m):r(m)}function r(m){if(m&&m.isTexture){let p=m.mapping;if(p===vl||p===Ml)if(e.has(m)){let h=e.get(m).texture;return a(h,m.mapping)}else{let h=m.image;if(h&&h.height>0){let v=new Qo(h.height);return v.fromEquirectangularTexture(n,m),e.set(m,v),m.addEventListener("dispose",l),a(v.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture&&m.isPMREMTexture!==!0){let p=m.mapping,h=p===vl||p===Ml,v=p===Hs||p===Dr;if(h||v){let g=t.get(m),_=g!==void 0?g.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new hc(n)),g=h?i.fromEquirectangular(m,g):i.fromCubemap(m,g),g.texture.pmremVersion=m.pmremVersion,t.set(m,g),g.texture;if(g!==void 0)return g.texture;{let T=m.image;return h&&T&&T.height>0||v&&T&&c(T)?(i===null&&(i=new hc(n)),g=h?i.fromEquirectangular(m):i.fromCubemap(m),g.texture.pmremVersion=m.pmremVersion,t.set(m,g),m.addEventListener("dispose",d),g.texture):null}}}return m}function a(m,p){return p===vl?m.mapping=Hs:p===Ml&&(m.mapping=Dr),m}function c(m){let p=0,h=6;for(let v=0;v<h;v++)m[v]!==void 0&&p++;return p===h}function l(m){let p=m.target;p.removeEventListener("dispose",l);let h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function d(m){let p=m.target;p.removeEventListener("dispose",d);let h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function G_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&mo("WebGLRenderer: "+i+" extension not supported."),s}}}function V_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(h=>delete s[h]);function a(h){c(h.target)}function c(h){h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id],o.unregister(h);let v=r.get(h);v&&(e.remove(v),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(h,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function d(h){let v=h.attributes;for(let g in v)e.update(v[g],n.ARRAY_BUFFER)}function f(h){let v=h.index,g=h.attributes.position,_=0;if(g===void 0)return;let T=v!==null?v.array.length:g.array.length/3-1,R=g.count>=65535?Eo:Ao,b=new R(Math.ceil(T/3)*6,1),A=b.array;if(v!==null){let x=v.array;_=v.version;for(let w=0,z=0;w<T;w+=3){let D=x[w+0],N=x[w+1],G=x[w+2];A[z++]=D,A[z++]=N,A[z++]=N,A[z++]=G,A[z++]=G,A[z++]=D}}else{_=g.version;for(let x=0,w=0;x<T;x+=3){let z=x+0,D=x+1,N=x+2;A[w++]=z,A[w++]=D,A[w++]=D,A[w++]=N,A[w++]=N,A[w++]=z}}b.version=_;let S=r.get(h);S&&e.remove(S),r.set(h,b)}function m(h){let v=r.get(h);if(v){let g=h.index;g!==null&&v.version<g.version&&f(h)}else f(h);return r.get(h)}function p(){for(let h in s){let v=s[h].deref();v!==void 0&&c(v)}}return{get:l,update:d,getWireframeAttribute:m,dispose:p}}function H_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function l(f,m,p){p!==0&&(n.drawElementsInstanced(i,m,r,f*o,p),t.update(m,i,p))}function d(f,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,p);let v=0;for(let g=0;g<p;g++)v+=m[g];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function W_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function X_(n,e,t){let i=new WeakMap,s=new Zt;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,m=i.get(a);if(m===void 0||m.count!==f){let z=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",z)};m!==void 0&&m.texture.dispose();let p=a.morphAttributes.position!==void 0,h=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],R=0;p===!0&&(R=1),h===!0&&(R=2),v===!0&&(R=3);let b=a.attributes.position.count*R,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*A*4*f),x=new bo(S,b,A,f);x.type=ri,x.needsUpdate=!0;let w=R*4;for(let D=0;D<f;D++){let N=g[D],G=_[D],U=T[D],B=b*A*4*D;for(let Q=0;Q<N.count;Q++){let Z=Q*w;p===!0&&(s.fromBufferAttribute(N,Q),S[B+Z+0]=s.x,S[B+Z+1]=s.y,S[B+Z+2]=s.z,S[B+Z+3]=0),h===!0&&(s.fromBufferAttribute(G,Q),S[B+Z+4]=s.x,S[B+Z+5]=s.y,S[B+Z+6]=s.z,S[B+Z+7]=0),v===!0&&(s.fromBufferAttribute(U,Q),S[B+Z+8]=s.x,S[B+Z+9]=s.y,S[B+Z+10]=s.z,S[B+Z+11]=U.itemSize===4?s.w:1)}}m={count:f,texture:x,size:new gt(b,A)},i.set(a,m),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let h=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",h),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function q_(n,e,t,i,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,m=e.get(l,f);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return m}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Y_={[Ph]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Dh]:"CINEON_TONE_MAPPING",[Ho]:"ACES_FILMIC_TONE_MAPPING",[Uh]:"AGX_TONE_MAPPING",[Fh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function Z_(n,e,t,i,s,r){let o=new Kn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new Jt;d.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let f=new rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Pt(d,f),p=new ko(-1,1,1,-1,0,1),h=null,v=null,g=!1,_,T=null,R=[],b=!1;this.setSize=function(A,S){o.setSize(A,S),a!==null&&a.setSize(A,S),c!==null&&c.setSize(A,S);for(let x=0;x<R.length;x++){let w=R[x];w.setSize&&w.setSize(A,S)}},this.setEffects=function(A){R=A,b=R.length>0&&R[0].isRenderPass===!0;let S=o.width,x=o.height;R.length>0&&a===null&&(a=new Kn(S,x,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new Kn(S,x,{type:yi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&R.some(z=>z.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new Ji(S,x),r===!0&&(l.format=Qi,l.type=Ws)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let z=0;z<R.length;z++){let D=R[z];D.setSize&&D.setSize(S,x),w&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(A,S){if(g||A.toneMapping===Li&&R.length===0)return!1;if(T=S,S!==null){let x=S.width,w=S.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return b===!1&&A.setRenderTarget(o),_=A.toneMapping,A.toneMapping=Li,!0},this.hasRenderPass=function(){return b},this.end=function(A,S){A.toneMapping=_,g=!0;let x=o,w=a;for(let z=0;z<R.length;z++){let D=R[z];D.enabled!==!1&&(D.render(A,w,x,S),D.needsSwap!==!1&&(x=w,w=w===a?c:a))}if(h!==A.outputColorSpace||v!==A.toneMapping){h=A.outputColorSpace,v=A.toneMapping,f.defines={},At.getTransfer(h)===Ot&&(f.defines.SRGB_TRANSFER="");let z=Y_[v];z&&(f.defines[z]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(T),A.render(m,p),T=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var Jf=new Un,Kf=new Ji(1,1),$f=new Po(1),jf=new bo,Qf=new nl,ep=new Io,Cf=[],Rf=[],If=new Float32Array(16),Pf=new Float32Array(9),Lf=new Float32Array(4);function Or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dc(n,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function J_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function $_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function Q_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Lf.set(i),n.uniformMatrix2fv(this.addr,!1,Lf),fn(t,i)}}function ey(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Pf.set(i),n.uniformMatrix3fv(this.addr,!1,Pf),fn(t,i)}}function ty(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;If.set(i),n.uniformMatrix4fv(this.addr,!1,If),fn(t,i)}}function ny(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function oy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function fc(n){return n.version===0&&(n.compareFunction=qh,n.needsUpdate=!0),n}function hy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=fc(Kf):r=Jf,t.setTexture2D(e||r,s)}function uy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Qf,s)}function dy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=fc($f):r=ep,t.setTextureCube(e||r,s)}function fy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||jf,s)}function py(n){switch(n){case 5126:return J_;case 35664:return K_;case 35665:return $_;case 35666:return j_;case 35674:return Q_;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return ry;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return fy}}function my(n,e){n.uniform1fv(this.addr,e)}function gy(n,e){let t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function xy(n,e){let t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function _y(n,e){let t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function yy(n,e){let t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vy(n,e){let t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function My(n,e){let t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function by(n,e){n.uniform1iv(this.addr,e)}function Sy(n,e){n.uniform2iv(this.addr,e)}function wy(n,e){n.uniform3iv(this.addr,e)}function Ty(n,e){n.uniform4iv(this.addr,e)}function Ay(n,e){n.uniform1uiv(this.addr,e)}function Ey(n,e){n.uniform2uiv(this.addr,e)}function Cy(n,e){n.uniform3uiv(this.addr,e)}function Ry(n,e){n.uniform4uiv(this.addr,e)}function Iy(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=fc(Kf):o=Jf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Py(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qf,r[o])}function Ly(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=fc($f):o=ep;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Dy(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jf,r[o])}function Ny(n){switch(n){case 5126:return my;case 35664:return gy;case 35665:return xy;case 35666:return _y;case 35674:return yy;case 35675:return vy;case 35676:return My;case 5124:case 35670:return by;case 35667:case 35671:return Sy;case 35668:case 35672:return wy;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ey;case 36295:return Cy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}var su=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=py(t.type)}},ru=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ny(t.type)}},ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},nu=/(\w+)(\])?(\[|\.)?/g;function Df(n,e){n.seq.push(e),n.map[e.id]=e}function Uy(n,e,t){let i=n.name,s=i.length;for(nu.lastIndex=0;;){let r=nu.exec(i),o=nu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Df(t,l===void 0?new su(a,n,e):new ru(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ou(a),Df(t,f)),t=f}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Uy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Nf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Fy=37297,zy=0;function Oy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Uf=new ot;function By(n){At._getMatrix(Uf,At.workingColorSpace,n);let e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case vo:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ff(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Oy(n.getShaderSource(e),a)}else return r}function ky(n,e){let t=By(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Gy={[Ph]:"Linear",[Lh]:"Reinhard",[Dh]:"Cineon",[Ho]:"ACESFilmic",[Uh]:"AgX",[Fh]:"Neutral",[Nh]:"Custom"};function Vy(n,e){let t=Gy[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new K;function Hy(){At.getLuminanceCoefficients(cc);let n=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function Xy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jo(n){return n!==""}function zf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(Yy,Zy)}function Zy(n,e){let t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return au(t)}var Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(n){return n.replace(Jy,Ky)}function Ky(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var $y={[ks]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function jy(n){return $y[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qy={[Dr]:"ENVMAP_MODE_REFRACTION"};function ev(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tv={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function nv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tv[n.combine]||"ENVMAP_BLENDING_NONE"}function iv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=jy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=ev(t),f=nv(t),m=Wy(t),p=Xy(r),h=s.createProgram(),v,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),g.length>0&&(g+=`
`)):(v=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),g=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?_t.tonemapping_pars_fragment:"",t.toneMapping!==Li?Vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=au(o),o=zf(o,t),o=Of(o,t),a=au(a),a=zf(a,t),a=Of(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let T=_+v+o,R=_+g+a,b=Nf(s,s.VERTEX_SHADER,T),A=Nf(s,s.FRAGMENT_SHADER,R);s.attachShader(h,b),s.attachShader(h,A),t.index0AttributeName!==void 0?s.bindAttribLocation(h,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(h,0,"position"),s.linkProgram(h);function S(D){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(h)||"",G=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(A)||"",B=N.trim(),Q=G.trim(),Z=U.trim(),Y=!0,k=!0;if(s.getProgramParameter(h,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,h,b,A);else{let F=Ff(s,b,"vertex"),V=Ff(s,A,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(h,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+F+`
`+V)}else B!==""?it("WebGLProgram: Program Info Log:",B):(Q===""||Z==="")&&(k=!1);k&&(D.diagnostics={runnable:Y,programLog:B,vertexShader:{log:Q,prefix:v},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(b),s.deleteShader(A),x=new zr(s,h),w=qy(s,h)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(h,Fy)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zy++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=b,this.fragmentShader=A,this}var sv=0,lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cu(e),t.set(e,i)),i}},cu=class{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}};function rv(n){return n===ws||n===Jo||n===Ko}function ov(n,e,t,i,s,r){let o=new So,a=new lu,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function h(x,w,z,D,N,G){let U=D.fog,B=N.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||Q,Z),k=m[x.type],F=i.precision;x.precision!==null&&(F=i.getMaxPrecision(x.precision),F!==x.precision&&it("WebGLProgram.getParameters:",x.precision,"not supported, using",F,"instead."));let V=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,q=V!==void 0?V.length:0,X=0;B.morphAttributes.position!==void 0&&(X=1),B.morphAttributes.normal!==void 0&&(X=2),B.morphAttributes.color!==void 0&&(X=3);let pe,W,de,Ae;if(k){let Oe=Ni[k];pe=Oe.vertexShader,W=Oe.fragmentShader}else{pe=x.vertexShader,W=x.fragmentShader;let Oe=a.getVertexShaderStage(x),Lt=a.getFragmentShaderStage(x);a.update(x,Oe,Lt),de=Oe.id,Ae=Lt.id}let Re=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Xe=N.isInstancedMesh===!0,dt=N.isBatchedMesh===!0,Ie=!!x.map,st=!!x.matcap,at=!!Y,Je=at&&Y.isPMREMTexture===!0,St=!!x.aoMap,Ht=!!x.lightMap,$t=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,jt=!!x.displacementMap,ke=!!x.emissiveMap,ft=!!x.metalnessMap,wt=!!x.roughnessMap,ne=x.anisotropy>0,$=x.clearcoat>0,Bt=x.diffuseRoughness>0,ut=x.dispersion>0,pt=x.retroreflectivity>0,ze=x.iridescence>0,kt=x.sheen>0,Ke=x.transmission>0,nt=ne&&!!x.anisotropyMap,O=$&&!!x.clearcoatMap,I=$&&!!x.clearcoatNormalMap,te=$&&!!x.clearcoatRoughnessMap,we=Bt&&!!x.diffuseRoughnessMap,ce=ze&&!!x.iridescenceMap,Pe=ze&&!!x.iridescenceThicknessMap,Le=kt&&!!x.sheenColorMap,he=kt&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Ee=!!x.specularColorMap,H=!!x.specularIntensityMap,le=Ke&&!!x.transmissionMap,oe=Ke&&!!x.thicknessMap,De=!!x.gradientMap,ye=!!x.alphaMap,Te=x.alphaTest>0,Ge=!!x.alphaHash,tt=!!x.extensions,me=Li;x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(me=n.toneMapping);let Ye=Je?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,et={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:W,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:F,batching:dt,batchingColor:dt&&N._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&N.instanceColor!==null,instancingMorph:Xe&&N.morphTexture!==null,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:st,envMap:at,envMapMode:at&&Y.mapping,envMapPMREM:Je,envMapMaxLod:Je?Ye.length-1:null,envMapSize:Je?Ye[0].width:null,aoMap:St,lightMap:Ht,bumpMap:$t,normalMap:yt,displacementMap:jt,emissiveMap:ke,normalMapObjectSpace:yt&&x.normalMapType===of,normalMapTangentSpace:yt&&x.normalMapType===oc,packedNormalMap:yt&&x.normalMapType===oc&&rv(x.normalMap.format),metalnessMap:ft,roughnessMap:wt,anisotropy:ne,anisotropyMap:nt,clearcoat:$,clearcoatMap:O,clearcoatNormalMap:I,clearcoatRoughnessMap:te,diffuseRoughness:Bt,diffuseRoughnessMap:we,dispersion:ut,retroreflection:pt,iridescence:ze,iridescenceMap:ce,iridescenceThicknessMap:Pe,sheen:kt,sheenColorMap:Le,sheenRoughnessMap:he,specularMap:fe,specularColorMap:Ee,specularIntensityMap:H,transmission:Ke,transmissionMap:le,thicknessMap:oe,gradientMap:De,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:Te,alphaHash:Ge,combine:x.combine,mapUv:Ie&&p(x.map.channel),aoMapUv:St&&p(x.aoMap.channel),lightMapUv:Ht&&p(x.lightMap.channel),bumpMapUv:$t&&p(x.bumpMap.channel),normalMapUv:yt&&p(x.normalMap.channel),displacementMapUv:jt&&p(x.displacementMap.channel),emissiveMapUv:ke&&p(x.emissiveMap.channel),metalnessMapUv:ft&&p(x.metalnessMap.channel),roughnessMapUv:wt&&p(x.roughnessMap.channel),anisotropyMapUv:nt&&p(x.anisotropyMap.channel),clearcoatMapUv:O&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:I&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&p(x.sheenRoughnessMap.channel),specularMapUv:fe&&p(x.specularMap.channel),specularColorMapUv:Ee&&p(x.specularColorMap.channel),specularIntensityMapUv:H&&p(x.specularIntensityMap.channel),transmissionMapUv:le&&p(x.transmissionMap.channel),thicknessMapUv:oe&&p(x.thicknessMap.channel),alphaMapUv:ye&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(yt||ne),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ie||ye),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:X,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&At.getTransfer(x.map.colorSpace)===Ot,decodeVideoTextureEmissive:ke&&x.emissiveMap.isVideoTexture===!0&&At.getTransfer(x.emissiveMap.colorSpace)===Ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function v(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let z in x.defines)w.push(z),w.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(g(w,x),_(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let w=m[x.type],z;if(w){let D=Ni[w];z=Mf.clone(D.uniforms)}else z=x.uniforms;return z}function R(x,w){let z=d.get(w);return z!==void 0?++z.usedTimes:(z=new iv(n,w,x,s),l.push(z),d.set(w,z)),z}function b(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function S(){a.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:T,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:S}}function av(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(m){let p=0;return m.isInstancedMesh&&(p+=2),m.isSkinnedMesh&&(p+=1),p}function a(m,p,h,v,g,_){let T=n[e];return T===void 0?(T={id:m.id,object:m,geometry:p,material:h,materialVariant:o(m),groupOrder:v,renderOrder:m.renderOrder,z:g,group:_},n[e]=T):(T.id=m.id,T.object=m,T.geometry=p,T.material=h,T.materialVariant=o(m),T.groupOrder=v,T.renderOrder=m.renderOrder,T.z=g,T.group=_),e++,T}function c(m,p,h,v,g,_,T){T.reversedDepth===!0&&(g=-g);let R=a(m,p,h,v,g,_);h.transmission>0?i.push(R):h.transparent===!0?s.push(R):t.push(R)}function l(m,p,h,v,g,_){let T=a(m,p,h,v,g,_);h.transmission>0?i.unshift(T):h.transparent===!0?s.unshift(T):t.unshift(T)}function d(m,p){t.length>1&&t.sort(m||lv),i.length>1&&i.sort(p||Gf),s.length>1&&s.sort(p||Gf)}function f(){for(let m=e,p=n.length;m<p;m++){let h=n[m];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function cv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Vf,n.set(i,[o])):s>=r.length?(o=new Vf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new $e};break;case"SpotLight":t={position:new K,direction:new K,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function uv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var dv=0;function fv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pv(n){let e=new hv,t=uv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new K);let s=new K,r=new Ct,o=new Ct;function a(l){let d=0,f=0,m=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,h=0,v=0,g=0,_=0,T=0,R=0,b=0,A=0,S=0,x=0,w=0,z=0,D=0;l.sort(fv);for(let G=0,U=l.length;G<U;G++){let B=l[G],Q=B.color,Z=B.intensity,Y=B.distance,k=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ws?k=B.shadow.map.texture:k=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)d+=Q.r*Z,f+=Q.g*Z,m+=Q.b*Z;else if(B.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(B.sh.coefficients[F],Z);D++}else if(B.isSunLight){let F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let V=B.shadow,q=t.get(B);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[h]=q,i.sunShadowMap[h]=k;let X=V.getViewportCount();for(let pe=0;pe<X;pe++)i.sunShadowMatrix[v+pe]=V.getMatrix(pe),i.sunShadowCascade[v+pe]=V._cascadeData[pe];v+=X,h++}i.sun[p]=F,p++}else if(B.isDirectionalLight){let F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let V=B.shadow,q=t.get(B);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.directionalShadow[g]=q,i.directionalShadowMap[g]=k,i.directionalShadowMatrix[g]=B.shadow.matrix,A++}i.directional[g]=F,g++}else if(B.isSpotLight){let F=e.get(B);F.position.setFromMatrixPosition(B.matrixWorld),F.color.copy(Q).multiplyScalar(Z),F.distance=Y,F.coneCos=Math.cos(B.angle),F.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),F.decay=B.decay,i.spot[T]=F;let V=B.shadow;if(B.map&&(i.spotLightMap[w]=B.map,w++,V.updateMatrices(B),B.castShadow&&z++),i.spotLightMatrix[T]=V.matrix,B.castShadow){let q=t.get(B);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.spotShadow[T]=q,i.spotShadowMap[T]=k,x++}T++}else if(B.isRectAreaLight){let F=e.get(B);F.color.copy(Q).multiplyScalar(Z),F.halfWidth.set(B.width*.5,0,0),F.halfHeight.set(0,B.height*.5,0),i.rectArea[R]=F,R++}else if(B.isPointLight){let F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),F.distance=B.distance,F.decay=B.decay,B.castShadow){let V=B.shadow,q=t.get(B);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=B.shadow.matrix,S++}i.point[_]=F,_++}else if(B.isHemisphereLight){let F=e.get(B);F.skyColor.copy(B.color).multiplyScalar(Z),F.groundColor.copy(B.groundColor).multiplyScalar(Z),i.hemi[b]=F,b++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;let N=i.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==_||N.spotLength!==T||N.rectAreaLength!==R||N.hemiLength!==b||N.numSunShadows!==h||N.numDirectionalShadows!==A||N.numPointShadows!==S||N.numSpotShadows!==x||N.numSpotMaps!==w||N.numLightProbes!==D)&&(i.sun.length=p,i.directional.length=g,i.spot.length=T,i.rectArea.length=R,i.point.length=_,i.hemi.length=b,i.sunShadow.length=h,i.sunShadowMap.length=h,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-z,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=D,N.sunLength=p,N.directionalLength=g,N.pointLength=_,N.spotLength=T,N.rectAreaLength=R,N.hemiLength=b,N.numSunShadows=h,N.numDirectionalShadows=A,N.numPointShadows=S,N.numSpotShadows=x,N.numSpotMaps=w,N.numLightProbes=D,i.version=dv++)}function c(l,d){let f=0,m=0,p=0,h=0,v=0,g=0,_=d.matrixWorldInverse;for(let T=0,R=l.length;T<R;T++){let b=l[T];if(b.isSunLight){let A=i.sun[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(_),f++}else if(b.isDirectionalLight){let A=i.directional[m];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),m++}else if(b.isSpotLight){let A=i.spot[h];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),h++}else if(b.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let A=i.point[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(_),g++}}}return{setup:a,setupView:c,state:i}}function Hf(n){let e=new pv(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function c(){e.setup(t),s.sort((f,m)=>f.priority-m.priority||f.id-m.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function mv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Hf(n),e.set(s,[a])):r>=o.length?(a=new Hf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`,_v=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],yv=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Wf=new Ct,$o=new K,iu=new K;function vv(n,e,t){let i=new xs,s=new gt,r=new gt,o=new Zt,a=new ol,c=new al,l={},d=t.maxTextureSize,f={[bs]:bn,[bn]:bs,[En]:En},m=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),p=m.clone();p.defines.HORIZONTAL_PASS=1;let h=new Jt;h.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pt(h,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let _=this.type;this.render=function(S,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Fd&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let z=n.getRenderTarget(),D=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Gs),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let U=_!==this.type;U&&x.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Q=>Q.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Q=S.length;B<Q;B++){let Z=S[B],Y=Z.shadow;if(Y===void 0){it("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let k=Y.getFrameExtents();s.multiply(k),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/k.x),s.x=r.x*k.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/k.y),s.y=r.y*k.y,Y.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=F,Y.map===null||U===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Lr){if(Z.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Kn(s.x,s.y,{format:ws,type:yi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new Ji(s.x,s.y,ri),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=qi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn}else Z.isPointLight?(Y.map=new Qo(s.x),Y.map.depthTexture=new Po(s.x,_i)):(Y.map=new Kn(s.x,s.y),Y.map.depthTexture=new Ji(s.x,s.y,_i)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=qi,this.type===ks?(Y.map.depthTexture.compareFunction=F?Xh:Wh,Y.map.depthTexture.minFilter=vn,Y.map.depthTexture.magFilter=vn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let V=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Z.isPointLight!==!0&&Y.updateMatrices(Z,w);let q=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:w.layers;for(let X=0;X<V;X++){let pe=Y.getCamera(X);if(Z.isPointLight){let W=Y.camera,de=Y.matrix,Ae=Z.distance||W.far;Ae!==W.far&&(W.far=Ae,W.updateProjectionMatrix()),$o.setFromMatrixPosition(Z.matrixWorld),W.position.copy($o),iu.copy(W.position),iu.add(_v[X]),W.up.copy(yv[X]),W.lookAt(iu),W.updateMatrixWorld(),de.makeTranslation(-$o.x,-$o.y,-$o.z),Wf.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Wf,W.coordinateSystem,W.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,X),n.clear();else{X===0&&(n.setRenderTarget(Y.map),n.clear());let W=Y.getViewport(X);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),G.viewport(o)}i=Y.getFrustum(X),b(x,w,pe,Z,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Lr&&T(Y,w),Y.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(z,D,N)};function T(S,x){let w=e.update(v);m.defines.VSM_SAMPLES!==S.blurSamples&&(m.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Kn(s.x,s.y,{format:ws,type:yi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),m.uniforms.shadow_pass.value=S.map.depthTexture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(x,null,w,m,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(x,null,w,p,v,null)}function R(S,x,w,z){let D=null,N=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)D=N;else if(D=w.isPointLight===!0?c:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let G=D.uuid,U=x.uuid,B=l[G];B===void 0&&(B={},l[G]=B);let Q=B[U];Q===void 0&&(Q=D.clone(),B[U]=Q,x.addEventListener("dispose",A)),D=Q}if(D.visible=x.visible,D.wireframe=x.wireframe,z===Lr?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:f[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,w.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let G=n.properties.get(D);G.light=w}return D}function b(S,x,w,z,D,N){if(S.visible===!1)return;if(S.layers.test(D)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===Lr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let B=e.update(S),Q=S.material;if(Array.isArray(Q)){let Z=B.groups;for(let Y=0,k=Z.length;Y<k;Y++){let F=Z[Y],V=Q[F.materialIndex];if(V&&V.visible){let q=R(S,V,z,N);S.onBeforeShadow(n,S,x,w,B,q,F),n.renderBufferDirect(w,null,B,q,S,F),S.onAfterShadow(n,S,x,w,B,q,F)}}}else if(Q.visible){let Z=R(S,Q,z,N);S.onBeforeShadow(n,S,x,w,B,Z,null),n.renderBufferDirect(w,null,B,Z,S,null),S.onAfterShadow(n,S,x,w,B,Z,null)}}let U=S.children;for(let B=0,Q=U.length;B<Q;B++)b(U[B],x,w,z,D,N)}function A(S){S.target.removeEventListener("dispose",A);for(let w in l){let z=l[w],D=S.target.uuid;D in z&&(z[D].dispose(),delete z[D])}}}function Mv(n,e){function t(){let H=!1,le=new Zt,oe=null,De=new Zt(0,0,0,0);return{setMask:function(ye){oe!==ye&&!H&&(n.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){H=ye},setClear:function(ye,Te,Ge,tt,me){me===!0&&(ye*=tt,Te*=tt,Ge*=tt),le.set(ye,Te,Ge,tt),De.equals(le)===!1&&(n.clearColor(ye,Te,Ge,tt),De.copy(le))},reset:function(){H=!1,oe=null,De.set(-1,0,0,0)}}}function i(){let H=!1,le=!1,oe=null,De=null,ye=null;return{setReversed:function(Te){if(le!==Te){let Ge=e.get("EXT_clip_control");Te?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),le=Te;let tt=ye;ye=null,this.setClear(tt)}},getReversed:function(){return le},setTest:function(Te){Te?ve(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(Te){oe!==Te&&!H&&(n.depthMask(Te),oe=Te)},setFunc:function(Te){if(le&&(Te=xf[Te]),De!==Te){switch(Te){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=Te}},setLocked:function(Te){H=Te},setClear:function(Te){ye!==Te&&(ye=Te,le&&(Te=1-Te),n.clearDepth(Te))},reset:function(){H=!1,oe=null,De=null,ye=null,le=!1}}}function s(){let H=!1,le=null,oe=null,De=null,ye=null,Te=null,Ge=null,tt=null,me=null;return{setTest:function(Ye){H||(Ye?ve(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(Ye){le!==Ye&&!H&&(n.stencilMask(Ye),le=Ye)},setFunc:function(Ye,et,Oe){(oe!==Ye||De!==et||ye!==Oe)&&(n.stencilFunc(Ye,et,Oe),oe=Ye,De=et,ye=Oe)},setOp:function(Ye,et,Oe){(Te!==Ye||Ge!==et||tt!==Oe)&&(n.stencilOp(Ye,et,Oe),Te=Ye,Ge=et,tt=Oe)},setLocked:function(Ye){H=Ye},setClear:function(Ye){me!==Ye&&(n.clearStencil(Ye),me=Ye)},reset:function(){H=!1,le=null,oe=null,De=null,ye=null,Te=null,Ge=null,tt=null,me=null}}}let r=new t,o=new i,a=new s,c={},l=new WeakMap,d={},f={},m={},p=new WeakMap,h=[],v=null,g=!1,_=null,T=null,R=null,b=null,A=null,S=null,x=null,w=new $e(0,0,0),z=0,D=!1,N=null,G=null,U=null,B=null,Q=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,k=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=k>=2);let V=null,q={},X=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),W=new Zt().fromArray(X),de=new Zt().fromArray(pe);function Ae(H,le,oe,De){let ye=new Uint8Array(4),Te=n.createTexture();n.bindTexture(H,Te),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<oe;Ge++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(le+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Te}let Re={};Re[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Tr),$t(!1),yt(Th),ve(n.CULL_FACE),St(Gs);function ve(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function Xe(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function dt(H,le){return m[H]!==le?(n.bindFramebuffer(H,le),m[H]=le,H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=le),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Ie(H,le){let oe=h,De=!1;if(H){oe=p.get(le),oe===void 0&&(oe=[],p.set(le,oe));let ye=H.textures;if(oe.length!==ye.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ge=ye.length;Te<Ge;Te++)oe[Te]=n.COLOR_ATTACHMENT0+Te;oe.length=ye.length,De=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,De=!0);De&&n.drawBuffers(oe)}function st(H){return v!==H?(n.useProgram(H),v=H,!0):!1}let at={[Vs]:n.FUNC_ADD,[Od]:n.FUNC_SUBTRACT,[Bd]:n.FUNC_REVERSE_SUBTRACT};at[kd]=n.MIN,at[Gd]=n.MAX;let Je={[Vd]:n.ZERO,[Hd]:n.ONE,[Wd]:n.SRC_COLOR,[Ch]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[qd]:n.DST_ALPHA,[Xd]:n.ONE_MINUS_SRC_COLOR,[Rh]:n.ONE_MINUS_SRC_ALPHA,[Jd]:n.ONE_MINUS_DST_COLOR,[Yd]:n.ONE_MINUS_DST_ALPHA,[$d]:n.CONSTANT_COLOR,[jd]:n.ONE_MINUS_CONSTANT_COLOR,[Qd]:n.CONSTANT_ALPHA,[ef]:n.ONE_MINUS_CONSTANT_ALPHA};function St(H,le,oe,De,ye,Te,Ge,tt,me,Ye){if(H===Gs){g===!0&&(Xe(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),H!==zd){if(H!==_||Ye!==D){if((T!==Vs||A!==Vs)&&(n.blendEquation(n.FUNC_ADD),T=Vs,A=Vs),Ye)switch(H){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vo:n.blendFunc(n.ONE,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",H);break}else switch(H){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ah:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",H);break}R=null,b=null,S=null,x=null,w.set(0,0,0),z=0,_=H,D=Ye}return}ye=ye||le,Te=Te||oe,Ge=Ge||De,(le!==T||ye!==A)&&(n.blendEquationSeparate(at[le],at[ye]),T=le,A=ye),(oe!==R||De!==b||Te!==S||Ge!==x)&&(n.blendFuncSeparate(Je[oe],Je[De],Je[Te],Je[Ge]),R=oe,b=De,S=Te,x=Ge),(tt.equals(w)===!1||me!==z)&&(n.blendColor(tt.r,tt.g,tt.b,me),w.copy(tt),z=me),_=H,D=!1}function Ht(H,le){H.side===En?Xe(n.CULL_FACE):ve(n.CULL_FACE);let oe=H.side===bn;le&&(oe=!oe),$t(oe),H.blending===Ss&&H.transparent===!1?St(Gs):St(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let De=H.stencilWrite;a.setTest(De),De&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ke(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function $t(H){N!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),N=H)}function yt(H){H!==Nd?(ve(n.CULL_FACE),H!==G&&(H===Th?n.cullFace(n.BACK):H===Ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),G=H}function jt(H){H!==U&&(Y&&n.lineWidth(H),U=H)}function ke(H,le,oe){H?(ve(n.POLYGON_OFFSET_FILL),(B!==le||Q!==oe)&&(B=le,Q=oe,o.getReversed()&&(le=-le,oe=-oe),n.polygonOffset(le,oe))):Xe(n.POLYGON_OFFSET_FILL)}function ft(H){H?ve(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function wt(H){H===void 0&&(H=n.TEXTURE0+Z-1),V!==H&&(n.activeTexture(H),V=H)}function ne(H,le,oe){oe===void 0&&(V===null?oe=n.TEXTURE0+Z-1:oe=V);let De=q[oe];De===void 0&&(De={type:void 0,texture:void 0},q[oe]=De),(De.type!==H||De.texture!==le)&&(V!==oe&&(n.activeTexture(oe),V=oe),n.bindTexture(H,le||Re[H]),De.type=H,De.texture=le)}function $(){let H=q[V];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Bt(){try{n.compressedTexImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function ut(){try{n.compressedTexImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function pt(){try{n.texSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function ze(){try{n.texSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function kt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function Ke(){try{n.compressedTexSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function nt(){try{n.texStorage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function O(){try{n.texStorage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function I(){try{n.texImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function te(){try{n.texImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function we(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function ce(H,le){f[H]!==le&&(n.pixelStorei(H,le),f[H]=le)}function Pe(H){W.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),W.copy(H))}function Le(H){de.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),de.copy(H))}function he(H,le){let oe=l.get(le);oe===void 0&&(oe=new WeakMap,l.set(le,oe));let De=oe.get(H);De===void 0&&(De=n.getUniformBlockIndex(le,H.name),n.uniformBlockBinding(le,De,De),oe.set(H,De))}function fe(H,le,oe){let ye=l.get(le).get(H);c[ye]!==oe&&(n.bindBufferBase(n.UNIFORM_BUFFER,ye,oe),c[ye]=oe)}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},V=null,q={},m={},c={},p=new WeakMap,h=[],v=null,g=!1,_=null,T=null,R=null,b=null,A=null,S=null,x=null,w=new $e(0,0,0),z=0,D=!1,N=null,G=null,U=null,B=null,Q=null,W.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Xe,bindFramebuffer:dt,drawBuffers:Ie,useProgram:st,setBlending:St,setMaterial:Ht,setFlipSided:$t,setCullFace:yt,setLineWidth:jt,setPolygonOffset:ke,setScissorTest:ft,activeTexture:wt,bindTexture:ne,unbindTexture:$,compressedTexImage2D:Bt,compressedTexImage3D:ut,texImage2D:I,texImage3D:te,pixelStorei:ce,getParameter:we,updateUBOMapping:he,uniformBlockBinding:fe,texStorage2D:nt,texStorage3D:O,texSubImage2D:pt,texSubImage3D:ze,compressedTexSubImage2D:kt,compressedTexSubImage3D:Ke,scissor:Pe,viewport:Le,reset:Ee}}function bv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,d=new WeakMap,f=new Set,m,p=new WeakMap,h=new Set,v=new FinalizationRegistry(O=>h.delete(O)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,I){return g?new OffscreenCanvas(O,I):Mo("canvas")}function T(O,I,te){let we=1,ce=nt(O);if((ce.width>te||ce.height>te)&&(we=te/Math.max(ce.width,ce.height)),we<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Pe=Math.floor(we*ce.width),Le=Math.floor(we*ce.height);m===void 0&&(m=_(Pe,Le));let he=I?_(Pe,Le):m;return he.width=Pe,he.height=Le,he.getContext("2d").drawImage(O,0,0,Pe,Le),it("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Pe+"x"+Le+")."),he}else return"data"in O&&it("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),O;return O}function R(O){return O.generateMipmaps}function b(O){n.generateMipmap(O)}function A(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(O,I,te,we,ce,Pe=!1){if(O!==null){if(n[O]!==void 0)return n[O];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Le;we&&(Le=e.get("EXT_texture_norm16"),Le||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=I;if(I===n.RED&&(te===n.FLOAT&&(he=n.R32F),te===n.HALF_FLOAT&&(he=n.R16F),te===n.UNSIGNED_BYTE&&(he=n.R8),te===n.UNSIGNED_SHORT&&Le&&(he=Le.R16_EXT),te===n.SHORT&&Le&&(he=Le.R16_SNORM_EXT)),I===n.RED_INTEGER&&(te===n.UNSIGNED_BYTE&&(he=n.R8UI),te===n.UNSIGNED_SHORT&&(he=n.R16UI),te===n.UNSIGNED_INT&&(he=n.R32UI),te===n.BYTE&&(he=n.R8I),te===n.SHORT&&(he=n.R16I),te===n.INT&&(he=n.R32I)),I===n.RG&&(te===n.FLOAT&&(he=n.RG32F),te===n.HALF_FLOAT&&(he=n.RG16F),te===n.UNSIGNED_BYTE&&(he=n.RG8),te===n.UNSIGNED_SHORT&&Le&&(he=Le.RG16_EXT),te===n.SHORT&&Le&&(he=Le.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(te===n.UNSIGNED_BYTE&&(he=n.RG8UI),te===n.UNSIGNED_SHORT&&(he=n.RG16UI),te===n.UNSIGNED_INT&&(he=n.RG32UI),te===n.BYTE&&(he=n.RG8I),te===n.SHORT&&(he=n.RG16I),te===n.INT&&(he=n.RG32I)),I===n.RGB_INTEGER&&(te===n.UNSIGNED_BYTE&&(he=n.RGB8UI),te===n.UNSIGNED_SHORT&&(he=n.RGB16UI),te===n.UNSIGNED_INT&&(he=n.RGB32UI),te===n.BYTE&&(he=n.RGB8I),te===n.SHORT&&(he=n.RGB16I),te===n.INT&&(he=n.RGB32I)),I===n.RGBA_INTEGER&&(te===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),te===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),te===n.UNSIGNED_INT&&(he=n.RGBA32UI),te===n.BYTE&&(he=n.RGBA8I),te===n.SHORT&&(he=n.RGBA16I),te===n.INT&&(he=n.RGBA32I)),I===n.RGB&&(te===n.UNSIGNED_SHORT&&Le&&(he=Le.RGB16_EXT),te===n.SHORT&&Le&&(he=Le.RGB16_SNORM_EXT),te===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),te===n.UNSIGNED_INT_10F_11F_11F_REV&&(he=n.R11F_G11F_B10F)),I===n.RGBA){let fe=Pe?vo:At.getTransfer(ce);te===n.FLOAT&&(he=n.RGBA32F),te===n.HALF_FLOAT&&(he=n.RGBA16F),te===n.UNSIGNED_BYTE&&(he=fe===Ot?n.SRGB8_ALPHA8:n.RGBA8),te===n.UNSIGNED_SHORT&&Le&&(he=Le.RGBA16_EXT),te===n.SHORT&&Le&&(he=Le.RGBA16_SNORM_EXT),te===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),te===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function x(O,I){let te;return O?I===null||I===_i||I===Ws?te=n.DEPTH24_STENCIL8:I===ri?te=n.DEPTH32F_STENCIL8:I===Nr&&(te=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===_i||I===Ws?te=n.DEPTH_COMPONENT24:I===ri?te=n.DEPTH_COMPONENT32F:I===Nr&&(te=n.DEPTH_COMPONENT16),te}function w(O,I){return R(O)===!0||O.isFramebufferTexture&&O.minFilter!==yn&&O.minFilter!==vn?Math.log2(Math.max(I.width,I.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?I.mipmaps.length:1}function z(O){let I=new WeakRef(O);i.get(O).__ref=I,h.add(I),v.register(O,I,I)}function D(O){let I=i.get(O).__ref;I!==void 0&&(h.delete(I),v.unregister(I))}function N(O){U(O.target)}function G(O){B(O.target)}function U(O){O.removeEventListener("dispose",N),D(O),Z(O),O.isVideoTexture&&d.delete(O),O.isHTMLTexture&&f.delete(O)}function B(O){O.removeEventListener("dispose",G),D(O),k(O)}function Q(){for(let O of h){let I=O.deref();I!==void 0&&(I.isRenderTarget===!0?B(I):U(I))}h.clear(),f.clear()}function Z(O){let I=i.get(O);if(I.__webglInit===void 0)return;let te=O.source,we=p.get(te);if(we){let ce=we[I.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&Y(O),Object.keys(we).length===0&&p.delete(te)}i.remove(O)}function Y(O){let I=i.get(O);n.deleteTexture(I.__webglTexture);let te=O.source,we=p.get(te);delete we[I.__cacheKey],o.memory.textures--}function k(O){let I=i.get(O);I.__depthDisposeCallback&&I.__depthDisposeCallback();let te=O.depthTexture;if(te&&te.renderTarget===O&&U(te),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(I.__webglFramebuffer[ce]))for(let Pe=0;Pe<I.__webglFramebuffer[ce].length;Pe++)n.deleteFramebuffer(I.__webglFramebuffer[ce][Pe]);else n.deleteFramebuffer(I.__webglFramebuffer[ce]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[ce])}else{if(Array.isArray(I.__webglFramebuffer))for(let ce=0;ce<I.__webglFramebuffer.length;ce++)n.deleteFramebuffer(I.__webglFramebuffer[ce]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ce=0;ce<I.__webglColorRenderbuffer.length;ce++)I.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[ce]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let we=O.textures;for(let ce=0,Pe=we.length;ce<Pe;ce++){let Le=i.get(we[ce]);Le.__webglTexture&&(n.deleteTexture(Le.__webglTexture),o.memory.textures--),i.remove(we[ce])}i.remove(O)}let F=0;function V(){F=0}function q(){return F}function X(O){F=O}function pe(){let O=F;return O>=s.maxTextures&&it("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,O}function W(O){let I=[];return I.push(O.wrapS),I.push(O.wrapT),I.push(O.wrapR||0),I.push(O.magFilter),I.push(O.minFilter),I.push(O.anisotropy),I.push(O.internalFormat),I.push(O.format),I.push(O.type),I.push(O.generateMipmaps),I.push(O.mipmapsAutoUpdate),I.push(O.premultiplyAlpha),I.push(O.flipY),I.push(O.unpackAlignment),I.push(O.colorSpace),I.join()}function de(O,I){let te=i.get(O);if(O.isVideoTexture&&kt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&te.__version!==O.version){let we=O.image;if(we===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(te,O,I);return}}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,te.__webglTexture,n.TEXTURE0+I)}function Ae(O,I){let te=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){Ht(te,O,I);return}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,te.__webglTexture,n.TEXTURE0+I)}function Re(O,I){let te=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){Ht(te,O,I);return}t.bindTexture(n.TEXTURE_3D,te.__webglTexture,n.TEXTURE0+I)}function ve(O,I){let te=i.get(O);if(O.version>0&&te.__version!==O.version){$t(te,O,I);return}t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture,n.TEXTURE0+I)}let Xe={[$a]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},dt={[yn]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[Wo]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[bl]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},Ie={[lf]:n.NEVER,[qh]:n.ALWAYS,[cf]:n.LESS,[Wh]:n.LEQUAL,[hf]:n.EQUAL,[Xh]:n.GEQUAL,[uf]:n.GREATER,[df]:n.NOTEQUAL};function st(O,I){if(I.type===ri&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===vn||I.magFilter===bl||I.magFilter===Wo||I.magFilter===ji||I.minFilter===vn||I.minFilter===bl||I.minFilter===Wo||I.minFilter===ji)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Xe[I.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Xe[I.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Xe[I.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,dt[I.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,dt[I.minFilter]),I.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Ie[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===yn||I.minFilter!==Wo&&I.minFilter!==ji||I.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function at(O,I){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,I.addEventListener("dispose",N),z(I));let we=I.source,ce=p.get(we);ce===void 0&&(ce={},p.set(we,ce));let Pe=W(I);if(Pe!==O.__cacheKey){ce[Pe]===void 0&&(ce[Pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,te=!0),ce[Pe].usedTimes++;let Le=ce[O.__cacheKey];Le!==void 0&&(ce[O.__cacheKey].usedTimes--,Le.usedTimes===0&&Y(I)),O.__cacheKey=Pe,O.__webglTexture=ce[Pe].texture}return te}function Je(O,I,te){return Math.floor(Math.floor(O/te)/I)}function St(O,I,te,we){let Pe=O.updateRanges;if(Pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,te,we,I.data);else{Pe.sort((H,le)=>H.start-le.start);let Le=0;for(let H=1;H<Pe.length;H++){let le=Pe[Le],oe=Pe[H],De=le.start+le.count,ye=Je(oe.start,I.width,4),Te=Je(le.start,I.width,4);oe.start<=De+1&&ye===Te&&Je(oe.start+oe.count-1,I.width,4)===ye?le.count=Math.max(le.count,oe.start+oe.count-le.start):(++Le,Pe[Le]=oe)}Pe.length=Le+1;let he=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let H=0,le=Pe.length;H<le;H++){let oe=Pe[H],De=Math.floor(oe.start/4),ye=Math.ceil(oe.count/4),Te=De%I.width,Ge=Math.floor(De/I.width),tt=ye,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(n.TEXTURE_2D,0,Te,Ge,tt,me,te,we,I.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,he),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Ht(O,I,te){let we=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(we=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(we=n.TEXTURE_3D);let ce=at(O,I),Pe=I.source;t.bindTexture(we,O.__webglTexture,n.TEXTURE0+te);let Le=i.get(Pe);if(Pe.version!==Le.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+te),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let me=At.getPrimaries(At.workingColorSpace),Ye=I.colorSpace===es?null:At.getPrimaries(I.colorSpace),et=I.colorSpace===es||me===Ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let fe=T(I.image,!1,s.maxTextureSize);fe=Ke(I,fe);let Ee=r.convert(I.format,I.colorSpace),H=r.convert(I.type),le=S(I.internalFormat,Ee,H,I.normalized,I.colorSpace,I.isVideoTexture);st(we,I);let oe,De=I.mipmaps,ye=I.isVideoTexture!==!0,Te=Le.__version===void 0||ce===!0,Ge=Pe.dataReady,tt=w(I,fe);if(I.isDepthTexture)le=x(I.format===Qi,I.type),Te&&(ye?t.texStorage2D(n.TEXTURE_2D,1,le,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,le,fe.width,fe.height,0,Ee,H,null));else if(I.isDataTexture)if(De.length>0){ye&&Te&&t.texStorage2D(n.TEXTURE_2D,tt,le,De[0].width,De[0].height);for(let me=0,Ye=De.length;me<Ye;me++)oe=De[me],ye?Ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,oe.width,oe.height,Ee,H,oe.data):t.texImage2D(n.TEXTURE_2D,me,le,oe.width,oe.height,0,Ee,H,oe.data);I.generateMipmaps=!1}else ye?(Te&&t.texStorage2D(n.TEXTURE_2D,tt,le,fe.width,fe.height),Ge&&St(I,fe,Ee,H)):t.texImage2D(n.TEXTURE_2D,0,le,fe.width,fe.height,0,Ee,H,fe.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ye&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,le,De[0].width,De[0].height,fe.depth);for(let me=0,Ye=De.length;me<Ye;me++)if(oe=De[me],I.format!==jn)if(Ee!==null)if(ye){if(Ge)if(I.layerUpdates.size>0){let et=tu(oe.width,oe.height,I.format,I.type);for(let Oe of I.layerUpdates){let Lt=oe.data.subarray(Oe*et/oe.data.BYTES_PER_ELEMENT,(Oe+1)*et/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,Oe,oe.width,oe.height,1,Ee,Lt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,oe.width,oe.height,fe.depth,Ee,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,le,oe.width,oe.height,fe.depth,0,oe.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?Ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,oe.width,oe.height,fe.depth,Ee,H,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,le,oe.width,oe.height,fe.depth,0,Ee,H,oe.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{ye&&Te&&t.texStorage2D(n.TEXTURE_2D,tt,le,De[0].width,De[0].height);for(let me=0,Ye=De.length;me<Ye;me++)oe=De[me],I.format!==jn?Ee!==null?ye?Ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,oe.width,oe.height,Ee,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,me,le,oe.width,oe.height,0,oe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?Ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,oe.width,oe.height,Ee,H,oe.data):t.texImage2D(n.TEXTURE_2D,me,le,oe.width,oe.height,0,Ee,H,oe.data)}else if(I.isDataArrayTexture)if(ye){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,le,fe.width,fe.height,fe.depth),Ge)if(I.layerUpdates.size>0){let me=tu(fe.width,fe.height,I.format,I.type);for(let Ye of I.layerUpdates){let et=fe.data.subarray(Ye*me/fe.data.BYTES_PER_ELEMENT,(Ye+1)*me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ye,fe.width,fe.height,1,Ee,H,et)}I.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,H,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,fe.width,fe.height,fe.depth,0,Ee,H,fe.data);else if(I.isData3DTexture)ye?(Te&&t.texStorage3D(n.TEXTURE_3D,tt,le,fe.width,fe.height,fe.depth),Ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,H,fe.data)):t.texImage3D(n.TEXTURE_3D,0,le,fe.width,fe.height,fe.depth,0,Ee,H,fe.data);else if(I.isFramebufferTexture){if(Te)if(ye)t.texStorage2D(n.TEXTURE_2D,tt,le,fe.width,fe.height);else{let me=fe.width,Ye=fe.height;for(let et=0;et<tt;et++)t.texImage2D(n.TEXTURE_2D,et,le,me,Ye,0,Ee,H,null),me>>=1,Ye>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),fe.parentNode!==me){me.appendChild(fe),f.add(I),me.onpaint=Ye=>{let et=Ye.changedElements;for(let Oe of f)et.includes(Oe.image)&&(Oe.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,fe);else{let et=n.RGBA,Oe=n.RGBA,Lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,et,Oe,Lt,fe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(ye&&Te){let me=nt(De[0]);t.texStorage2D(n.TEXTURE_2D,tt,le,me.width,me.height)}for(let me=0,Ye=De.length;me<Ye;me++)oe=De[me],ye?Ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ee,H,oe):t.texImage2D(n.TEXTURE_2D,me,le,Ee,H,oe);I.generateMipmaps=!1}else if(ye){if(Te){let me=nt(fe);t.texStorage2D(n.TEXTURE_2D,tt,le,me.width,me.height)}Ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,H,fe)}else t.texImage2D(n.TEXTURE_2D,0,le,Ee,H,fe);R(I)&&I.mipmapsAutoUpdate===!0&&b(we),Le.__version=Pe.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function $t(O,I,te){if(I.image.length!==6)return;let we=at(O,I),ce=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+te);let Pe=i.get(ce);if(ce.version!==Pe.__version||we===!0){t.activeTexture(n.TEXTURE0+te);let Le=At.getPrimaries(At.workingColorSpace),he=I.colorSpace===es?null:At.getPrimaries(I.colorSpace),fe=I.colorSpace===es||Le===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ee=I.isCompressedTexture||I.image[0].isCompressedTexture,H=I.image[0]&&I.image[0].isDataTexture,le=[];for(let Oe=0;Oe<6;Oe++)!Ee&&!H?le[Oe]=T(I.image[Oe],!0,s.maxCubemapSize):le[Oe]=H?I.image[Oe].image:I.image[Oe],le[Oe]=Ke(I,le[Oe]);let oe=le[0],De=r.convert(I.format,I.colorSpace),ye=r.convert(I.type),Te=S(I.internalFormat,De,ye,I.normalized,I.colorSpace),Ge=I.isVideoTexture!==!0,tt=Pe.__version===void 0||we===!0,me=ce.dataReady,Ye=w(I,oe);st(n.TEXTURE_CUBE_MAP,I);let et;if(I.isDepthTexture){if(Te=x(I.format===Qi,I.type),tt)if(Ge)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Te,oe.width,oe.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Te,oe.width,oe.height,0,De,ye,null)}else if(Ee){Ge&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ye,Te,oe.width,oe.height);for(let Oe=0;Oe<6;Oe++){et=le[Oe].mipmaps;for(let Lt=0;Lt<et.length;Lt++){let ht=et[Lt];I.format!==jn?De!==null?Ge?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt,0,0,ht.width,ht.height,De,ht.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt,Te,ht.width,ht.height,0,ht.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt,0,0,ht.width,ht.height,De,ye,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt,Te,ht.width,ht.height,0,De,ye,ht.data)}}}else{if(et=I.mipmaps,Ge&&tt){et.length>0&&Ye++;let Oe=nt(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ye,Te,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(H){Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,le[Oe].width,le[Oe].height,De,ye,le[Oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Te,le[Oe].width,le[Oe].height,0,De,ye,le[Oe].data);for(let Lt=0;Lt<et.length;Lt++){let Ln=et[Lt].image[Oe].image;Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt+1,0,0,Ln.width,Ln.height,De,ye,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt+1,Te,Ln.width,Ln.height,0,De,ye,Ln.data)}}else{Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,De,ye,le[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Te,De,ye,le[Oe]);for(let Lt=0;Lt<et.length;Lt++){let ht=et[Lt];Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt+1,0,0,De,ye,ht.image[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Lt+1,Te,De,ye,ht.image[Oe])}}}R(I)&&I.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Pe.__version=ce.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function yt(O,I,te,we,ce,Pe){let Le=r.convert(te.format,te.colorSpace),he=r.convert(te.type),fe=S(te.internalFormat,Le,he,te.normalized,te.colorSpace),Ee=i.get(I),H=i.get(te);if(H.__renderTarget=I,!Ee.__hasExternalTextures){let le=Math.max(1,I.width>>Pe),oe=Math.max(1,I.height>>Pe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,Pe,fe,le,oe,I.depth,0,Le,he,null):t.texImage2D(ce,Pe,fe,le,oe,0,Le,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),ze(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ce,H.__webglTexture,0,pt(I)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,we,ce,H.__webglTexture,Pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(O,I,te){if(n.bindRenderbuffer(n.RENDERBUFFER,O),I.depthBuffer){let we=I.depthTexture,ce=we&&we.isDepthTexture?we.type:null,Pe=x(I.stencilBuffer,ce),Le=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ze(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(I),Pe,I.width,I.height):te?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(I),Pe,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,O)}else{let we=I.textures;for(let ce=0;ce<we.length;ce++){let Pe=we[ce],Le=r.convert(Pe.format,Pe.colorSpace),he=r.convert(Pe.type),fe=S(Pe.internalFormat,Le,he,Pe.normalized,Pe.colorSpace);ze(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(I),fe,I.width,I.height):te?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(I),fe,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,fe,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(O,I,te){let we=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=i.get(I.depthTexture);ce.__renderTarget=I;let Pe=we?I.depthTexture.image[0]:I.depthTexture.image;(!ce.__webglTexture||Pe.width!==I.width||Pe.height!==I.height)&&(Pe.width=I.width,Pe.height=I.height,I.depthTexture.needsUpdate=!0),we?ve(I.depthTexture,0):de(I.depthTexture,0);let Le=ce.__webglTexture,he=pt(I),fe=we?n.TEXTURE_CUBE_MAP_POSITIVE_X+te:n.TEXTURE_2D,Ee=I.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===qi)ze(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,fe,Le,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,fe,Le,0);else if(I.depthTexture.format===Qi)ze(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,fe,Le,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,fe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(O){let I=i.get(O),te=O.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==O.depthTexture){let we=O.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),we){let ce=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,we.removeEventListener("dispose",ce)};we.addEventListener("dispose",ce),I.__depthDisposeCallback=ce}I.__boundDepthTexture=we}if(O.depthTexture&&!I.__autoAllocateDepthBuffer)if(te)for(let we=0;we<6;we++)ke(I.__webglFramebuffer[we],O,we);else O.texture.mipmaps.length>0?ke(I.__webglFramebuffer[0],O,0):ke(I.__webglFramebuffer,O,0);else if(te){I.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[we]),I.__webglDepthbuffer[we]===void 0)I.__webglDepthbuffer[we]=n.createRenderbuffer(),jt(I.__webglDepthbuffer[we],O,!1);else{let ce=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=I.__webglDepthbuffer[we];n.bindRenderbuffer(n.RENDERBUFFER,Pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Pe)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),jt(I.__webglDepthbuffer,O,!1);else{let ce=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(O,I,te){let we=i.get(O);I!==void 0&&yt(we.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),te!==void 0&&ft(O)}function ne(O){let I=O.texture,te=i.get(O),we=i.get(I);O.addEventListener("dispose",G),z(O);let ce=O.textures,Pe=O.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture()),we.__version=I.version,o.memory.textures++),Pe){te.__webglFramebuffer=[];for(let he=0;he<6;he++)if(I.mipmaps.length>0){te.__webglFramebuffer[he]=[];for(let fe=0;fe<I.mipmaps.length;fe++)te.__webglFramebuffer[he][fe]=n.createFramebuffer()}else te.__webglFramebuffer[he]=n.createFramebuffer()}else{if(I.mipmaps.length>0){te.__webglFramebuffer=[];for(let he=0;he<I.mipmaps.length;he++)te.__webglFramebuffer[he]=n.createFramebuffer()}else te.__webglFramebuffer=n.createFramebuffer();if(Le)for(let he=0,fe=ce.length;he<fe;he++){let Ee=i.get(ce[he]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&ze(O)===!1){te.__webglMultisampledFramebuffer=n.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let he=0;he<ce.length;he++){let fe=ce[he];te.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,te.__webglColorRenderbuffer[he]);let Ee=r.convert(fe.format,fe.colorSpace),H=r.convert(fe.type),le=S(fe.internalFormat,Ee,H,fe.normalized,fe.colorSpace,O.isXRRenderTarget===!0),oe=pt(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,le,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,te.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=n.createRenderbuffer(),jt(te.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(n.TEXTURE_CUBE_MAP,we.__webglTexture),st(n.TEXTURE_CUBE_MAP,I);for(let he=0;he<6;he++)if(I.mipmaps.length>0)for(let fe=0;fe<I.mipmaps.length;fe++)yt(te.__webglFramebuffer[he][fe],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else yt(te.__webglFramebuffer[he],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);R(I)?b(n.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let he=0,fe=ce.length;he<fe;he++){let Ee=ce[he],H=i.get(Ee),le=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(le=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,H.__webglTexture),st(le,Ee),yt(te.__webglFramebuffer,O,Ee,n.COLOR_ATTACHMENT0+he,le,0),R(Ee)&&b(le)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(he=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,we.__webglTexture),st(he,I),I.mipmaps.length>0)for(let fe=0;fe<I.mipmaps.length;fe++)yt(te.__webglFramebuffer[fe],O,I,n.COLOR_ATTACHMENT0,he,fe);else yt(te.__webglFramebuffer,O,I,n.COLOR_ATTACHMENT0,he,0);R(I)?b(he):I.mipmaps.length>0&&n.texParameteri(he,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&ft(O)}function $(O){let I=O.textures;for(let te=0,we=I.length;te<we;te++){let ce=I[te];if(R(ce)&&ce.mipmapsAutoUpdate===!0){let Pe=A(O),Le=i.get(ce).__webglTexture;t.bindTexture(Pe,Le),b(Pe),t.unbindTexture()}}}let Bt=[];function ut(O){if(O.samples>0){if(ze(O)===!1){let I=O.textures,te=O.width,we=O.height,ce=n.COLOR_BUFFER_BIT,Pe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(O),he=I.length>1;if(he)for(let Ee=0;Ee<I.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ee=0;Ee<I.length;Ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);let H=i.get(I[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,te,we,0,0,te,we,ce,n.NEAREST),c===!0&&(Bt.length=0,Bt.push(n.COLOR_ATTACHMENT0+Ee),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&Bt.push(Pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<I.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);let H=i.get(I[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let I=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function pt(O){return Math.min(s.maxSamples,O.samples)}function ze(O){let I=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function kt(O){let I=o.render.frame;d.get(O)!==I&&(d.set(O,I),O.update())}function Ke(O,I){let te=O.colorSpace,we=O.format,ce=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==yo&&te!==es&&(At.getTransfer(te)===Ot?(we!==jn||ce!==Wn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",te)),I}function nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=pe,this.resetTextureUnits=V,this.getTextureUnits=q,this.setTextureUnits=X,this.setTexture2D=de,this.setTexture2DArray=Ae,this.setTexture3D=Re,this.setTextureCube=ve,this.rebindTextures=wt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ze,this.dispose=Q}function Sv(n,e){function t(i,s=es){let r,o=At.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oh)return n.BYTE;if(i===Bh)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===_i)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Vh)return n.ALPHA;if(i===Hh)return n.RGB;if(i===jn)return n.RGBA;if(i===qi)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===Al)return n.RED;if(i===El)return n.RED_INTEGER;if(i===ws)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Xo||i===qo||i===Yo||i===Zo)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Pl||i===Ll||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Ul||i===Fl||i===zl||i===Ol||i===Jo||i===Bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nl||i===Ul)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zl)return r.COMPRESSED_R11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Jo)return r.COMPRESSED_RG11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===$l||i===jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$l)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===tc||i===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ec)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ic||i===sc||i===Ko||i===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
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

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Hn({vertexShader:wv,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends Ii{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,m=null,p=null,h=null,v=typeof XRWebGLBinding<"u",g=new hu,_={},T=t.getContextAttributes(),R=null,b=null,A=[],S=[],x=new gt,w=null,z=null,D=new Nn;D.viewport=new Zt;let N=new Nn;N.viewport=new Zt;let G=[D,N],U=new yl,B=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let de=A[W];return de===void 0&&(de=new Ir,A[W]=de),de.getTargetRaySpace()},this.getControllerGrip=function(W){let de=A[W];return de===void 0&&(de=new Ir,A[W]=de),de.getGripSpace()},this.getHand=function(W){let de=A[W];return de===void 0&&(de=new Ir,A[W]=de),de.getHandSpace()};function Z(W){let de=S.indexOf(W.inputSource);if(de===-1)return;let Ae=A[de];Ae!==void 0&&(Ae.update(W.inputSource,W.frame,l||o),Ae.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",k);for(let W=0;W<A.length;W++){let de=S[W];de!==null&&(S[W]=null,A[W].disconnect(de))}B=null,Q=null,g.reset();for(let W in _)delete _[W];if(e.setRenderTarget(R),p=null,m=null,f=null,s=null,b=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),z!==null){let W=z.camera;W.fov=z.fov,W.zoom=z.zoom,W.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Re=null,ve=null;T.depth&&(ve=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=T.stencil?Qi:qi,Re=T.stencil?Ws:_i);let Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),m=f.createProjectionLayer(Xe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new Kn(m.textureWidth,m.textureHeight,{format:jn,type:Wn,depthTexture:new Ji(m.textureWidth,m.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Ae={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Kn(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(W){for(let de=0;de<W.removed.length;de++){let Ae=W.removed[de],Re=S.indexOf(Ae);Re>=0&&(S[Re]=null,A[Re].disconnect(Ae))}for(let de=0;de<W.added.length;de++){let Ae=W.added[de],Re=S.indexOf(Ae);if(Re===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=S.length){S.push(Ae),Re=Xe;break}else if(S[Xe]===null){S[Xe]=Ae,Re=Xe;break}if(Re===-1)break}let ve=A[Re];ve&&ve.connect(Ae)}}function F(W,de){de===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(de.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let de=W.near,Ae=W.far;g.texture!==null&&(g.depthNear>0&&(de=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),U.near=N.near=D.near=de,U.far=N.far=D.far=Ae,(B!==U.near||Q!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,Q=U.far),U.layers.mask=W.layers.mask|6,D.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let Re=W.parent,ve=U.cameras;F(U,Re);for(let Xe=0;Xe<ve.length;Xe++)F(ve[Xe],Re);U.projectionMatrix.copy(D.projectionMatrix),U.projectionMatrixInverse.copy(D.projectionMatrixInverse),z===null&&W.isPerspectiveCamera&&(z={camera:W,fov:W.fov,zoom:W.zoom}),V(W,U,Re)};function V(W,de,Ae){Ae===null?W.matrix.copy(de.matrixWorld):(W.matrix.copy(Ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(de.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(de.projectionMatrix),W.projectionMatrixInverse.copy(de.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(m===null&&p===null))return c},this.setFoveation=function(W){c=W,m!==null&&(m.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(W){return _[W]};let q=null;function X(W,de){if(d=de.getViewerPose(l||o),h=de,d!==null){let Ae=d.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Re=!1;Ae.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let Ie=0;Ie<Ae.length;Ie++){let st=Ae[Ie],at=null;if(p!==null)at=p.getViewport(st);else{let St=f.getViewSubImage(m,st);at=St.viewport,Ie===0&&(e.setRenderTargetTextures(b,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(b))}let Je=G[Ie];Je===void 0&&(Je=new Nn,Je.layers.enable(Ie),Je.viewport=new Zt,G[Ie]=Je),Je.matrix.fromArray(st.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(st.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(at.x,at.y,at.width,at.height),Ie===0&&(U.matrix.copy(Je.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push(Je)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Ie=f.getDepthInformation(Ae[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ie=0;Ie<Ae.length;Ie++){let st=Ae[Ie].camera;if(st){let at=_[st];at||(at=new Lo,_[st]=at);let Je=f.getCameraImage(st);at.sourceTexture=Je}}}}for(let Ae=0;Ae<A.length;Ae++){let Re=S[Ae],ve=A[Ae];Re!==null&&ve!==void 0&&ve.update(Re,de,l||o)}q&&q(W,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),h=null}let pe=new Xf;pe.setAnimationLoop(X),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}},Av=new Ct,tp=new ot;tp.set(-1,0,0,0,1,0,0,0,1);function Ev(n,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,jh(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function s(g,_,T,R,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(g,_):_.isMeshLambertMaterial?(r(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(g,_),f(g,_)):_.isMeshPhongMaterial?(r(g,_),d(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(g,_),m(g,_),_.isMeshPhysicalMaterial&&p(g,_,b)):_.isMeshMatcapMaterial?(r(g,_),h(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),v(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?c(g,_,T,R):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===bn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===bn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let T=e.get(_),R=T.envMap,b=T.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tp),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,T,R){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*T,g.scale.value=R*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function d(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function m(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function p(g,_,T){g.ior.value=_.ior,_.diffuseRoughness>0&&(g.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.retroreflectivity>0&&(g.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function h(g,_){_.matcap&&(g.matcap.value=_.matcap)}function v(g,_){let T=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cv(n,e,t,i){let s={},r={};function o(T,R){let b=R.program;i.uniformBlockBinding(T,b,s[T.id])}function a(T,R){let b=s[T.id];b===void 0&&(h(T),b=c(T),s[T.id]=b,T.addEventListener("dispose",g));let A=R.program;i.updateUBOMapping(T,A);let S=e.render.frame;r[T.id]!==S&&(l(T),r[T.id]=S)}function c(T){let R=n.createBuffer(),b=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function l(T){let R=s[T.id],b=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let S=0,x=b.length;S<x;S++){let w=b[S];if(Array.isArray(w))for(let z=0,D=w.length;z<D;z++)d(w[z],S,z,A);else d(w,S,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,R,b,A){if(m(T,R,b,A)===!0){let S=T.__offset,x=T.value;if(Array.isArray(x)){let w=0;for(let z=0;z<x.length;z++){let D=x[z],N=v(D,!0);f(D,T.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,T.__data)}}function f(T,R,b){typeof T=="number"||typeof T=="boolean"?R[b]=T:T.isMatrix3?(R[b]=T.elements[0],R[b+1]=T.elements[1],R[b+2]=T.elements[2],R[b+3]=0,R[b+4]=T.elements[3],R[b+5]=T.elements[4],R[b+6]=T.elements[5],R[b+7]=0,R[b+8]=T.elements[6],R[b+9]=T.elements[7],R[b+10]=T.elements[8],R[b+11]=0):ArrayBuffer.isView(T)?R.set(T.subarray(0,R.length-b),b):T.toArray(R,b)}function m(T,R,b,A){let S=T.value,x=R+"_"+b;if(Array.isArray(S)){A[x]===void 0&&(A[x]=[]);let w=A[x],z=!1;for(let D=0;D<S.length;D++)p(S[D],w,D)===!0&&(z=!0);return z}return p(S,A,x)}function p(T,R,b){if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:ArrayBuffer.isView(T)?R[b]=T.slice():R[b]=T.clone(),!0;{let A=R[b];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return R[b]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(A.equals(T)===!1)return A.copy(T),!0}}return!1}function h(T){let R=T.uniforms,b=0,A=16;for(let x=0,w=R.length;x<w;x++){let z=Array.isArray(R[x])?R[x]:[R[x]];for(let D=0,N=z.length;D<N;D++){let G=z[D],U=Array.isArray(G.value)?G.value:[G.value],B=Array.isArray(R[x])||Array.isArray(G.value),Q=b;for(let Y=0,k=U.length;Y<k;Y++){let F=U[Y],V=v(F,B),q=b%A,X=q%V.boundary,pe=q+X;b+=X,pe!==0&&A-pe<V.storage&&(b+=A-pe),Y===0&&(Q=b),b+=V.storage}let Z=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Z((b-Q)/Float32Array.BYTES_PER_ELEMENT),G.__offset=Q}}let S=b%A;return S>0&&(b+=A-S),T.__size=b,T.__cache={},this}function v(T,R){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=16,b.storage=48):T.isMatrix4?(b.boundary=16,b.storage=64):T.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(b.boundary=16,b.storage=T.byteLength):it("WebGLRenderer: Unsupported uniform value type.",T),R===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(T){let R=T.target;R.removeEventListener("dispose",g),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function _(){for(let T in s)n.deleteBuffer(s[T]);s={},r={}}return{bind:o,update:a,dispose:_}}var Rv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function Iv(){return Di===null&&(Di=new zs(Rv,16,16,ws,yi),Di.name="DFG_LUT",Di.minFilter=vn,Di.magFilter=vn,Di.wrapS=Ri,Di.wrapT=Ri,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var uc=class{constructor(e={}){let{canvas:t=pf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:p=Wn}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let v=p,g=new Set([Rl,Cl,El]),_=new Set([Wn,_i,Nr,Ws,wl,Tl]),T=new Uint32Array(4),R=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,S=null,x=[],w=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,N=!1,G=null,U=null,B=null,Q=null;this._outputColorSpace=un;let Z=0,Y=0,k=null,F=-1,V=null,q=new Zt,X=new Zt,pe=null,W=new $e(0),de=0,Ae=t.width,Re=t.height,ve=1,Xe=null,dt=null,Ie=new Zt(0,0,Ae,Re),st=new Zt(0,0,Ae,Re),at=!1,Je=new xs,St=new il,Ht=!1,$t=!1,yt=new Ct,jt=new K,ke=new Zt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function ne(){return k===null?ve:1}let $=i;function Bt(P,J){return t.getContext(P,J)}let ut,pt,ze,kt,Ke,nt,O,I,te,we,ce,Pe,Le,he,fe,Ee,H,le,oe,De,ye,Te,Ge;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),$===null){let J="webgl2";if($=Bt(J,P),$===null)throw Bt(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(P){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),ct("WebGLRenderer: "+P.message),P}function tt(){ut=new G_($),ut.init(),ye=new Sv($,ut),pt=new I_($,ut,e,ye),ze=new Mv($,ut),pt.reversedDepthBuffer&&m&&ze.buffers.depth.setReversed(!0),U=$.createFramebuffer(),B=$.createFramebuffer(),Q=$.createFramebuffer(),kt=new W_($),Ke=new av,nt=new bv($,ut,ze,Ke,pt,ye,kt),O=new k_(D),I=new q0($),Te=new C_($,I),te=new V_($,I,kt,Te),we=new q_($,te,I,Te,kt),le=new X_($,pt,nt),fe=new P_(Ke),ce=new ov(D,O,ut,pt,Te,fe),Pe=new Ev(D,Ke),Le=new cv,he=new mv(ut),H=new E_(D,O,ze,we,h,c),Ee=new vv(D,we,pt),Ge=new Cv($,kt,pt,ze),oe=new R_($,ut,kt),De=new H_($,ut,kt),kt.programs=ce.programs,D.capabilities=pt,D.extensions=ut,D.properties=Ke,D.renderLists=Le,D.shadowMap=Ee,D.state=ze,D.info=kt}v!==Wn&&(z=new Z_(v,t.width,t.height,a,s,r));let me=new uu(D,$);this.xr=me,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let P=ut.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ut.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(P){P!==void 0&&(ve=P,this.setSize(Ae,Re,!1))},this.getSize=function(P){return P.set(Ae,Re)},this.setSize=function(P,J,ae=!0){if(me.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=P,Re=J,t.width=Math.floor(P*ve),t.height=Math.floor(J*ve),ae===!0&&(t.style.width=P+"px",t.style.height=J+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(Ae*ve,Re*ve).floor()},this.setDrawingBufferSize=function(P,J,ae){Ae=P,Re=J,ve=ae,t.width=Math.floor(P*ae),t.height=Math.floor(J*ae),this.setViewport(0,0,P,J)},this.setEffects=function(P){if(v===Wn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let J=0;J<P.length;J++)if(P[J].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(q)},this.getViewport=function(P){return P.copy(Ie)},this.setViewport=function(P,J,ae,ie){P.isVector4?Ie.set(P.x,P.y,P.z,P.w):Ie.set(P,J,ae,ie),ze.viewport(q.copy(Ie).multiplyScalar(ne()).round())},this.getScissor=function(P){return P.copy(st)},this.setScissor=function(P,J,ae,ie){P.isVector4?st.set(P.x,P.y,P.z,P.w):st.set(P,J,ae,ie),ze.scissor(X.copy(st).multiplyScalar(ne()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(P){ze.setScissorTest(at=P)},this.setOpaqueSort=function(P){Xe=P},this.setTransparentSort=function(P){dt=P},this.getClearColor=function(P){return P.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(P=!0,J=!0,ae=!0){let ie=0;if(P){let se=!1;if(k!==null){let Me=k.texture.format;se=g.has(Me)}if(se){let Me=k.texture.type,qe=_.has(Me),Se=H.getClearColor(),Ue=H.getClearAlpha(),Ze=Se.r,je=Se.g,lt=Se.b;qe?(T[0]=Ze,T[1]=je,T[2]=lt,T[3]=Ue,$.clearBufferuiv($.COLOR,0,T)):(R[0]=Ze,R[1]=je,R[2]=lt,R[3]=Ue,$.clearBufferiv($.COLOR,0,R))}else ie|=$.COLOR_BUFFER_BIT}J&&(ie|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ie|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&$.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),G=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),H.dispose(),Le.dispose(),he.dispose(),nt.dispose(),Ke.dispose(),O.dispose(),we.dispose(),te.dispose(),Te.dispose(),Ge.dispose(),ce.dispose(),me.dispose(),me.removeEventListener("sessionstart",Dn),me.removeEventListener("sessionend",rn),hi.stop()};function Ye(P){P.preventDefault(),Zh("WebGLRenderer: Context Lost."),N=!0}function et(){Zh("WebGLRenderer: Context Restored."),N=!1;let P=kt.autoReset,J=Ee.enabled,ae=Ee.autoUpdate,ie=Ee.needsUpdate,se=Ee.type;tt(),kt.autoReset=P,Ee.enabled=J,Ee.autoUpdate=ae,Ee.needsUpdate=ie,Ee.type=se}function Oe(P){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Lt(P){let J=P.target;J.removeEventListener("dispose",Lt),ht(J)}function ht(P){Ln(P),Ke.remove(P)}function Ln(P){let J=Ke.get(P).programs;J!==void 0&&(J.forEach(function(ae){ce.releaseProgram(ae)}),P.isShaderMaterial&&ce.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,ae,ie,se,Me){J===null&&(J=ft);let qe=se.isMesh&&se.matrixWorld.determinantAffine()<0,Se=ro(P,J,ae,ie,se);ze.setMaterial(ie,qe);let Ue=ae.index,Ze=1;if(ie.wireframe===!0){if(Ue=te.getWireframeAttribute(ae),Ue===void 0)return;Ze=2}let je=ae.drawRange,lt=ae.attributes.position,He=je.start*Ze,xt=(je.start+je.count)*Ze;Me!==null&&(He=Math.max(He,Me.start*Ze),xt=Math.min(xt,(Me.start+Me.count)*Ze)),Ue!==null?(He=Math.max(He,0),xt=Math.min(xt,Ue.count)):lt!=null&&(He=Math.max(He,0),xt=Math.min(xt,lt.count));let Yt=xt-He;if(Yt<0||Yt===1/0)return;Te.setup(se,ie,Se,ae,Ue);let Nt,Ft=oe;if(Ue!==null&&(Nt=I.get(Ue),Ft=De,Ft.setIndex(Nt)),se.isMesh)ie.wireframe===!0?(ze.setLineWidth(ie.wireframeLinewidth*ne()),Ft.setMode($.LINES)):Ft.setMode($.TRIANGLES);else if(se.isLine){let mn=ie.linewidth;mn===void 0&&(mn=1),ze.setLineWidth(mn*ne()),se.isLineSegments?Ft.setMode($.LINES):se.isLineLoop?Ft.setMode($.LINE_LOOP):Ft.setMode($.LINE_STRIP)}else se.isPoints?Ft.setMode($.POINTS):se.isSprite&&Ft.setMode($.TRIANGLES);if(se.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let mn=se._multiDrawStarts,Ve=se._multiDrawCounts,Tt=se._multiDrawCount,bt=Ue?I.get(Ue).bytesPerElement:1,Ti=Ke.get(ie).currentProgram.getUniforms();for(let Qt=0;Qt<Tt;Qt++)Ti.setValue($,"_gl_DrawID",Qt),Ft.render(mn[Qt]/bt,Ve[Qt])}else if(se.isInstancedMesh)Ft.renderInstances(He,Yt,se.count);else if(ae.isInstancedBufferGeometry){let mn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ve=Math.min(ae.instanceCount,mn);Ft.renderInstances(He,Yt,Ve)}else Ft.render(He,Yt)};function ci(P,J,ae,ie){G!==null&&P.isNodeMaterial&&G.setObject(ie,P),Ht===!0&&fe.setState(P,ae,!1),P.transparent===!0&&P.side===En&&P.forceSinglePass===!1?(P.side=bn,P.needsUpdate=!0,pn(P,J,ie),P.side=bs,P.needsUpdate=!0,pn(P,J,ie),P.side=En):pn(P,J,ie)}this.compile=function(P,J,ae=null){ae===null&&(ae=P),G!==null&&G.renderStart(P,J,ae),S=he.get(ae),S.init(J),w.push(S),ae.traverseVisible(function(se){se.isLight&&se.layers.test(J.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),P!==ae&&P.traverseVisible(function(se){se.isLight&&se.layers.test(J.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),S.setupLights(),G!==null&&G.updateLights(S.state.lightsArray),$t=this.localClippingEnabled,Ht=fe.init(this.clippingPlanes,$t),Ht===!0&&fe.setGlobalState(this.clippingPlanes,J),G!==null&&Ee.render(S.state.shadowsArray,ae,J);let ie=new Set;return P.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Me=se.material;if(Me)if(Array.isArray(Me))for(let qe=0;qe<Me.length;qe++){let Se=Me[qe];ci(Se,ae,J,se),ie.add(Se)}else ci(Me,ae,J,se),ie.add(Me)}),S=w.pop(),G!==null&&G.renderEnd(),ie},this.compileAsync=function(P,J,ae=null){let ie=this.compile(P,J,ae);return new Promise(se=>{function Me(){if(ie.forEach(function(qe){let Ue=Ke.get(qe).currentProgram;(Ue===void 0||Ue.isReady())&&ie.delete(qe)}),ie.size===0){se(P);return}setTimeout(Me,10)}ut.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let wi=null;function ei(P){wi&&wi(P)}function Dn(){hi.stop()}function rn(){hi.start()}let hi=new Xf;hi.setAnimationLoop(ei),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(P){wi=P,me.setAnimationLoop(P),P===null?hi.stop():hi.start()},me.addEventListener("sessionstart",Dn),me.addEventListener("sessionend",rn),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(P,J);let ae=me.enabled===!0&&me.isPresenting===!0,ie=z!==null&&(k===null||ae)&&z.begin(D,k);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(J),J=me.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,J,k),S=he.get(P,w.length),S.init(J),S.state.textureUnits=nt.getTextureUnits(),w.push(S),yt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),J.isArrayCamera?St.setFromArrayCamera(J):Je.setFromProjectionMatrix(yt,si,J.reversedDepth),$t=this.localClippingEnabled,Ht=fe.init(this.clippingPlanes,$t),A=Le.get(P,x.length),A.init(),x.push(A),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let qe=D.xr.getDepthSensingMesh();qe!==null&&qn(qe,J,-1/0,D.sortObjects)}qn(P,J,0,D.sortObjects),A.finish(),G!==null&&G.updateLights(S.state.lightsArray),D.sortObjects===!0&&A.sort(Xe,dt),wt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,wt&&H.addToRenderList(A,P),this.info.autoReset===!0&&this.info.reset(),Ht===!0&&fe.beginShadows();let se=S.state.shadowsArray;if(Ee.render(se,P,J),Ht===!0&&fe.endShadows(),(ie&&z.hasRenderPass())===!1){let qe=A.opaque,Se=A.transmissive;if(S.setupLights(),J.isArrayCamera){let Ue=J.cameras;if(Se.length>0)for(let Ze=0,je=Ue.length;Ze<je;Ze++){let lt=Ue[Ze];ti(qe,Se,P,lt)}wt&&H.render(P);for(let Ze=0,je=Ue.length;Ze<je;Ze++){let lt=Ue[Ze];os(A,P,lt,lt.viewport)}}else Se.length>0&&ti(qe,Se,P,J),wt&&H.render(P),os(A,P,J)}k!==null&&Y===0&&(nt.updateMultisampleRenderTarget(k),nt.updateRenderTargetMipmap(k)),ie&&z.end(D),P.isScene===!0&&P.onAfterRender(D,P,J),Te.resetDefaultState(),F=-1,V=null,w.pop(),w.length>0?(S=w[w.length-1],nt.setTextureUnits(S.state.textureUnits),Ht===!0&&fe.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,G!==null&&G.renderEnd()};function qn(P,J,ae,ie){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){let qe=J.isArrayCamera?St:Je;if(!P.frustumCulled||P.intersectsFrustum(qe)){ie&&ke.setFromMatrixPosition(P.matrixWorld).applyMatrix4(yt);let Se=we.update(P),Ue=P.material;Ue.visible&&A.push(P,Se,Ue,ae,ke.z,null,J)}}else if(P.isMesh||P.isLine||P.isPoints){let qe=J.isArrayCamera?St:Je;if(!P.frustumCulled||P.intersectsFrustum(qe)){let Se=we.update(P),Ue=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ke.copy(P.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ke.copy(Se.boundingSphere.center)),ke.applyMatrix4(P.matrixWorld).applyMatrix4(yt)),Array.isArray(Ue)){let Ze=Se.groups;for(let je=0,lt=Ze.length;je<lt;je++){let He=Ze[je],xt=Ue[He.materialIndex];xt&&xt.visible&&A.push(P,Se,xt,ae,ke.z,He,J)}}else Ue.visible&&A.push(P,Se,Ue,ae,ke.z,null,J)}}}let Me=P.children;for(let qe=0,Se=Me.length;qe<Se;qe++)qn(Me[qe],J,ae,ie)}function os(P,J,ae,ie){let{opaque:se,transmissive:Me,transparent:qe}=P;S.setupLightsView(ae),Ht===!0&&fe.setGlobalState(D.clippingPlanes,ae),ie&&ze.viewport(q.copy(ie)),se.length>0&&Wt(se,J,ae),Me.length>0&&Wt(Me,J,ae),qe.length>0&&Wt(qe,J,ae),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ti(P,J,ae,ie){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){let He=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new Kn(1,1,{generateMipmaps:!0,type:He?yi:Wn,minFilter:ji,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let Me=S.state.transmissionRenderTarget[ie.id],qe=ie.viewport||q;Me.setSize(qe.z*D.transmissionResolutionScale,qe.w*D.transmissionResolutionScale);let Se=D.getRenderTarget(),Ue=D.getActiveCubeFace(),Ze=D.getActiveMipmapLevel();D.setRenderTarget(Me),D.getClearColor(W),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),wt&&H.render(ae);let je=D.toneMapping;D.toneMapping=Li;let lt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),Ht===!0&&fe.setGlobalState(D.clippingPlanes,ie),Wt(P,ae,ie),nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me),ut.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let xt=0,Yt=J.length;xt<Yt;xt++){let Nt=J[xt],{object:Ft,geometry:mn,material:Ve,group:Tt}=Nt;if(Ve.side===En&&Ft.layers.test(ie.layers)){let bt=Ve.side;Ve.side=bn,Ve.needsUpdate=!0,on(Ft,ae,ie,mn,Ve,Tt),Ve.side=bt,Ve.needsUpdate=!0,He=!0}}He===!0&&(nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me))}D.setRenderTarget(Se,Ue,Ze),D.setClearColor(W,de),lt!==void 0&&(ie.viewport=lt),D.toneMapping=je}function Wt(P,J,ae){let ie=J.isScene===!0?J.overrideMaterial:null;for(let se=0,Me=P.length;se<Me;se++){let qe=P[se],{object:Se,geometry:Ue,group:Ze}=qe,je=qe.material;je.allowOverride===!0&&ie!==null&&(je=ie),Se.layers.test(ae.layers)&&on(Se,J,ae,Ue,je,Ze)}}function on(P,J,ae,ie,se,Me){G!==null&&se.isNodeMaterial&&G.setObject(P,se),P.onBeforeRender(D,J,ae,ie,se,Me),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),se.onBeforeRender(D,J,ae,ie,P,Me),se.transparent===!0&&se.side===En&&se.forceSinglePass===!1?(se.side=bn,se.needsUpdate=!0,D.renderBufferDirect(ae,J,ie,se,P,Me),se.side=bs,se.needsUpdate=!0,D.renderBufferDirect(ae,J,ie,se,P,Me),se.side=En):D.renderBufferDirect(ae,J,ie,se,P,Me),P.onAfterRender(D,J,ae,ie,se,Me)}function fa(P){let J=0;for(let ae of P)ae.texture!==null&&J++;return J}function pn(P,J,ae){J.isScene!==!0&&(J=ft);let ie=Ke.get(P),se=S.state.lights,Me=S.state.shadowsArray,qe=se.state.version,Se=ce.getParameters(P,se.state,Me,J,ae,S.state.lightProbeGridArray),Ue=ce.getProgramCacheKey(Se),Ze=ie.programs;ie.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?J.environment:null,ie.fog=J.fog;let je=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ie.envMap=O.get(P.envMap||ie.environment,je),ie.envMapRotation=ie.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Ze===void 0&&(P.addEventListener("dispose",Lt),Ze=new Map,ie.programs=Ze,ie.programVariants=new Map);let lt=Ze.get(Ue);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===qe)return nr(P,Se),lt}else Se.uniforms=ce.getUniforms(P),G!==null&&P.isNodeMaterial&&G.build(P,ae,Se),P.onBeforeCompile(Se,D),lt=ce.acquireProgram(Se,Ue),Ze.set(Ue,lt),ie.uniforms=Se.uniforms;let He=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(He.clippingPlanes=fe.uniform),nr(P,Se),ie.needsLights=sr(P),ie.lightsStateVersion=qe,ie.needsLights&&(He.ambientLightColor.value=se.state.ambient,He.lightProbe.value=se.state.probe,He.sunLights.value=se.state.sun,He.sunLightShadows.value=se.state.sunShadow,He.directionalLights.value=se.state.directional,He.directionalLightShadows.value=se.state.directionalShadow,He.spotLights.value=se.state.spot,He.spotLightShadows.value=se.state.spotShadow,He.rectAreaLights.value=se.state.rectArea,He.ltc_1.value=se.state.rectAreaLTC1,He.ltc_2.value=se.state.rectAreaLTC2,He.pointLights.value=se.state.point,He.pointLightShadows.value=se.state.pointShadow,He.hemisphereLights.value=se.state.hemi,He.sunShadowMatrix.value=se.state.sunShadowMatrix,He.sunShadowCascade.value=se.state.sunShadowCascade,He.directionalShadowMatrix.value=se.state.directionalShadowMatrix,He.spotLightMatrix.value=se.state.spotLightMatrix,He.spotLightMap.value=se.state.spotLightMap,He.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.numLightProbeGrids=fa(S.state.lightProbeGridArray),ie.currentProgram=lt,ie.uniformsList=null,lt}function Fi(P,J,ae,ie,se){let Me=Ke.get(P),qe=Me.currentProgram.id+","+ie+","+se,Se=Me.programVariants.get(qe);return Se===void 0?(Se=pn(P,J,ae),Me.programVariants.set(qe,Se)):(Me.currentProgram=Se,Me.uniformsList=null,Me.outputColorSpace=ie,Me.toneMapping=se),Se}function zi(P){if(P.uniformsList===null){let J=P.currentProgram.getUniforms();P.uniformsList=zr.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function nr(P,J){let ae=Ke.get(P);ae.outputColorSpace=J.outputColorSpace,ae.batching=J.batching,ae.batchingColor=J.batchingColor,ae.instancing=J.instancing,ae.instancingColor=J.instancingColor,ae.instancingMorph=J.instancingMorph,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function ro(P,J,ae,ie,se){J.isScene!==!0&&(J=ft),nt.resetTextureUnits();let Me=J.fog,qe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?J.environment:null,Se=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:At.workingColorSpace,Ue=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ze=O.get(ie.envMap||qe,Ue),je=ie.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),He=!!ae.morphAttributes.position,xt=!!ae.morphAttributes.normal,Yt=!!ae.morphAttributes.color,Nt=Li;ie.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Nt=D.toneMapping);let Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,mn=Ft!==void 0?Ft.length:0,Ve=Ke.get(ie),Tt=S.state.lights;if(Ht===!0&&($t===!0||P!==V)){let Xt=P===V&&ie.id===F;fe.setState(ie,P,Xt)}let bt=!1,Ti=!1;ie.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Tt.state.version||se.isBatchedMesh&&Ve.batching===!1||!se.isBatchedMesh&&Ve.batching===!0||se.isBatchedMesh&&Ve.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Ve.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Ve.instancing===!1||!se.isInstancedMesh&&Ve.instancing===!0||se.isSkinnedMesh&&Ve.skinning===!1||!se.isSkinnedMesh&&Ve.skinning===!0||se.isInstancedMesh&&Ve.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ve.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ve.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ve.instancingMorph===!1&&se.morphTexture!==null||Ve.envMap!==Ze||ie.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==lt||Ve.morphTargets!==He||Ve.morphNormals!==xt||Ve.morphColors!==Yt||Ve.morphTargetsCount!==mn||Ve.numLightProbeGrids!==fa(S.state.lightProbeGridArray)?bt=!0:(Ve.outputColorSpace!==Se||Ve.toneMapping!==Nt)&&(Ti=!0):(bt=!0,Ve.__version=ie.version);let Qt=Ve.currentProgram;(bt===!0||Ti===!0)&&(Qt=Ti===!0?Fi(ie,J,se,Se,Nt):pn(ie,J,se),G&&ie.isNodeMaterial&&G.onUpdateProgram(ie,Qt,Ve));let Ps=!1,Qe=!1,ui=!1,mt=Qt.getUniforms(),It=Ve.uniforms;if(ze.useProgram(Qt.program)&&(Ps=!0,Qe=!0,ui=!0),ie.id!==F&&(F=ie.id,Qe=!0),Ps||V!==P){ze.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),mt.setValue($,"projectionMatrix",P.projectionMatrix),mt.setValue($,"viewMatrix",P.matrixWorldInverse);let Gt=mt.map.cameraPosition;Gt!==void 0&&Gt.setValue($,jt.setFromMatrixPosition(P.matrixWorld)),pt.logarithmicDepthBuffer&&mt.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&mt.setValue($,"isOrthographic",P.isOrthographicCamera===!0),V!==P&&(V=P,Qe=!0,ui=!0)}if(Ve.needsLights&&(Tt.state.sunShadowMap.length>0&&mt.setValue($,"sunShadowMap",Tt.state.sunShadowMap,nt),Tt.state.directionalShadowMap.length>0&&mt.setValue($,"directionalShadowMap",Tt.state.directionalShadowMap,nt),Tt.state.spotShadowMap.length>0&&mt.setValue($,"spotShadowMap",Tt.state.spotShadowMap,nt),Tt.state.pointShadowMap.length>0&&mt.setValue($,"pointShadowMap",Tt.state.pointShadowMap,nt)),se.isSkinnedMesh){mt.setOptional($,se,"bindMatrix"),mt.setOptional($,se,"bindMatrixInverse");let Xt=se.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),mt.setValue($,"boneTexture",Xt.boneTexture,nt))}se.isBatchedMesh&&(mt.setOptional($,se,"batchingTexture"),mt.setValue($,"batchingTexture",se._matricesTexture,nt),mt.setOptional($,se,"batchingIdTexture"),mt.setValue($,"batchingIdTexture",se._indirectTexture,nt),mt.setOptional($,se,"batchingColorTexture"),se._colorsTexture!==null&&mt.setValue($,"batchingColorTexture",se._colorsTexture,nt));let gn=ae.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&le.update(se,ae,Qt),(Qe||Ve.receiveShadow!==se.receiveShadow)&&(Ve.receiveShadow=se.receiveShadow,mt.setValue($,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&J.environment!==null&&(It.envMapIntensity.value=J.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Iv()),Qe){if(mt.setValue($,"toneMappingExposure",D.toneMappingExposure),Ve.needsLights&&ir(It,ui),Me&&ie.fog===!0&&Pe.refreshFogUniforms(It,Me),Pe.refreshMaterialUniforms(It,ie,ve,Re,S.state.transmissionRenderTarget[P.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Xt=b,Gt=0;for(let ni of S.state.lightProbeGridArray)ni.texture!==null&&(Xt.textures[Gt]=ni.texture,Xt.min[Gt]=ni.boundingBox.min,Xt.max[Gt]=ni.boundingBox.max,Xt.resolution[Gt]=ni.resolution,Gt++);for(let ni in Xt)Xt[ni].length=Gt;It.probesSH.value=Xt.textures,It.probesMin.value=Xt.min,It.probesMax.value=Xt.max,It.probesResolution.value=Xt.resolution}zr.upload($,zi(Ve),It,nt)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(zr.upload($,zi(Ve),It,nt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&mt.setValue($,"center",se.center),mt.setValue($,"modelViewMatrix",se.modelViewMatrix),mt.setValue($,"normalMatrix",se.normalMatrix),mt.setValue($,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){let Xt=ie.uniformsGroups;for(let Gt=0,ni=Xt.length;Gt<ni;Gt++){let xn=Xt[Gt];Ge.update(xn,Qt),Ge.bind(xn,Qt)}}return Qt}function ir(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.sunLights.needsUpdate=J,P.sunLightShadows.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function sr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,J,ae){let ie=Ke.get(P);ie.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Ke.get(P.texture).__webglTexture=J,Ke.get(P.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ae,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,J){let ae=Ke.get(P);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,ae=0){k=P,Z=J,Y=ae;let ie=null,se=!1,Me=!1;if(P){let Se=Ke.get(P);if(Se.__useDefaultFramebuffer!==void 0){ze.bindFramebuffer($.FRAMEBUFFER,Se.__webglFramebuffer),q.copy(P.viewport),X.copy(P.scissor),pe=P.scissorTest,ze.viewport(q),ze.scissor(X),ze.setScissorTest(pe),F=-1;return}else if(Se.__webglFramebuffer===void 0)nt.setupRenderTarget(P);else if(Se.__hasExternalTextures)nt.rebindTextures(P,Ke.get(P.texture).__webglTexture,Ke.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let je=P.depthTexture;if(Se.__boundDepthTexture!==je){if(je!==null&&Ke.has(je)&&(P.width!==je.image.width||P.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(P)}}let Ue=P.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);let Ze=Ke.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ze[J])?ie=Ze[J][ae]:ie=Ze[J],se=!0):P.samples>0&&nt.useMultisampledRTT(P)===!1?ie=Ke.get(P).__webglMultisampledFramebuffer:Array.isArray(Ze)?ie=Ze[ae]:ie=Ze,q.copy(P.viewport),X.copy(P.scissor),pe=P.scissorTest}else q.copy(Ie).multiplyScalar(ve).floor(),X.copy(st).multiplyScalar(ve).floor(),pe=at;if(ae!==0&&(ie=U),ze.bindFramebuffer($.FRAMEBUFFER,ie)&&ze.drawBuffers(P,ie),ze.viewport(q),ze.scissor(X),ze.setScissorTest(pe),se){let Se=Ke.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se.__webglTexture,ae)}else if(Me){let Se=J;for(let Ue=0;Ue<P.textures.length;Ue++){let Ze=Ke.get(P.textures[Ue]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ue,Ze.__webglTexture,ae,Se)}}else if(P!==null&&ae!==0){let Se=Ke.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Se.__webglTexture,ae)}F=-1};function rr(P){let J=Ke.get(P);return(J.__readFormat!==P.format||J.__readType!==P.type)&&(J.__readFormat=P.format,J.__readType=P.type,J.__formatReadable=pt.textureFormatReadable(P.format),J.__typeReadable=pt.textureTypeReadable(P.type)),J}this.readRenderTargetPixels=function(P,J,ae,ie,se,Me,qe,Se=0){if(!(P&&P.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Ue=Ue[qe],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){ze.bindFramebuffer($.FRAMEBUFFER,Ue);try{let Ze=P.textures[Se],je=Ze.format,lt=Ze.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Se);let He=rr(Ze);if(He.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-ie&&ae>=0&&ae<=P.height-se&&$.readPixels(J,ae,ie,se,ye.convert(je),ye.convert(lt),Me)}finally{let Ze=k!==null?Ke.get(k).__webglFramebuffer:null;ze.bindFramebuffer($.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(P,J,ae,ie,se,Me,qe,Se=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Ue=Ue[qe],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(J>=0&&J<=P.width-ie&&ae>=0&&ae<=P.height-se){ze.bindFramebuffer($.FRAMEBUFFER,Ue);let Ze=P.textures[Se],je=Ze.format,lt=Ze.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Se);let He=rr(Ze);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,xt),$.bufferData($.PIXEL_PACK_BUFFER,Me.byteLength,$.STREAM_READ),$.readPixels(J,ae,ie,se,ye.convert(je),ye.convert(lt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Yt=k!==null?Ke.get(k).__webglFramebuffer:null;ze.bindFramebuffer($.FRAMEBUFFER,Yt);let Nt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await gf($,Nt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,xt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Me),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(xt),$.deleteSync(Nt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,J=null,ae=0){let ie=Math.pow(2,-ae),se=Math.floor(P.image.width*ie),Me=Math.floor(P.image.height*ie),qe=J!==null?J.x:0,Se=J!==null?J.y:0;nt.setTexture2D(P,0),$.copyTexSubImage2D($.TEXTURE_2D,ae,0,0,qe,Se,se,Me),ze.unbindTexture()},this.copyTextureToTexture=function(P,J,ae=null,ie=null,se=0,Me=0){let qe,Se,Ue,Ze,je,lt,He,xt,Yt,Nt=P.isCompressedTexture?P.mipmaps[Me]:P.image;if(ae!==null)qe=ae.max.x-ae.min.x,Se=ae.max.y-ae.min.y,Ue=ae.isBox3?ae.max.z-ae.min.z:1,Ze=ae.min.x,je=ae.min.y,lt=ae.isBox3?ae.min.z:0;else{let mt=Math.pow(2,-se);qe=Math.floor(Nt.width*mt),Se=Math.floor(Nt.height*mt),P.isDataArrayTexture?Ue=Nt.depth:P.isData3DTexture?Ue=Math.floor(Nt.depth*mt):Ue=1,Ze=0,je=0,lt=0}ie!==null?(He=ie.x,xt=ie.y,Yt=ie.z):(He=0,xt=0,Yt=0);let Ft=ye.convert(J.format),mn=ye.convert(J.type),Ve;J.isData3DTexture?(nt.setTexture3D(J,0),Ve=$.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(nt.setTexture2DArray(J,0),Ve=$.TEXTURE_2D_ARRAY):(nt.setTexture2D(J,0),Ve=$.TEXTURE_2D),ze.activeTexture($.TEXTURE0),ze.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),ze.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),ze.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);let Tt=ze.getParameter($.UNPACK_ROW_LENGTH),bt=ze.getParameter($.UNPACK_IMAGE_HEIGHT),Ti=ze.getParameter($.UNPACK_SKIP_PIXELS),Qt=ze.getParameter($.UNPACK_SKIP_ROWS),Ps=ze.getParameter($.UNPACK_SKIP_IMAGES);ze.pixelStorei($.UNPACK_ROW_LENGTH,Nt.width),ze.pixelStorei($.UNPACK_IMAGE_HEIGHT,Nt.height),ze.pixelStorei($.UNPACK_SKIP_PIXELS,Ze),ze.pixelStorei($.UNPACK_SKIP_ROWS,je),ze.pixelStorei($.UNPACK_SKIP_IMAGES,lt);let Qe=P.isDataArrayTexture||P.isData3DTexture,ui=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){let mt=Ke.get(P),It=Ke.get(J),gn=Ke.get(mt.__renderTarget),Xt=Ke.get(It.__renderTarget);ze.bindFramebuffer($.READ_FRAMEBUFFER,gn.__webglFramebuffer),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Gt=0;Gt<Ue;Gt++)Qe&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ke.get(P).__webglTexture,se,lt+Gt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ke.get(J).__webglTexture,Me,Yt+Gt)),$.blitFramebuffer(Ze,je,Ze+qe,je+Se,He,xt,He+qe,xt+Se,$.DEPTH_BUFFER_BIT,$.NEAREST);ze.bindFramebuffer($.READ_FRAMEBUFFER,null),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(se!==0||P.isRenderTargetTexture||Ke.has(P)){let mt=Ke.get(P),It=Ke.get(J);ze.bindFramebuffer($.READ_FRAMEBUFFER,B),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,Q);for(let gn=0;gn<Ue;gn++)Qe?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,mt.__webglTexture,se,lt+gn):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,mt.__webglTexture,se),ui?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,It.__webglTexture,Me,Yt+gn):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,It.__webglTexture,Me),se!==0?$.blitFramebuffer(Ze,je,Ze+qe,je+Se,He,xt,He+qe,xt+Se,$.COLOR_BUFFER_BIT,$.NEAREST):ui?$.copyTexSubImage3D(Ve,Me,He,xt,Yt+gn,Ze,je,qe,Se):$.copyTexSubImage2D(Ve,Me,He,xt,Ze,je,qe,Se);ze.bindFramebuffer($.READ_FRAMEBUFFER,null),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else ui?P.isDataTexture||P.isData3DTexture?$.texSubImage3D(Ve,Me,He,xt,Yt,qe,Se,Ue,Ft,mn,Nt.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(Ve,Me,He,xt,Yt,qe,Se,Ue,Ft,Nt.data):$.texSubImage3D(Ve,Me,He,xt,Yt,qe,Se,Ue,Ft,mn,Nt):P.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Me,He,xt,qe,Se,Ft,mn,Nt.data):P.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Me,He,xt,Nt.width,Nt.height,Ft,Nt.data):$.texSubImage2D($.TEXTURE_2D,Me,He,xt,qe,Se,Ft,mn,Nt);ze.pixelStorei($.UNPACK_ROW_LENGTH,Tt),ze.pixelStorei($.UNPACK_IMAGE_HEIGHT,bt),ze.pixelStorei($.UNPACK_SKIP_PIXELS,Ti),ze.pixelStorei($.UNPACK_SKIP_ROWS,Qt),ze.pixelStorei($.UNPACK_SKIP_IMAGES,Ps),Me===0&&J.generateMipmaps===!0&&J.mipmapsAutoUpdate===!0&&$.generateMipmap(Ve),ze.unbindTexture()},this.initRenderTarget=function(P){Ke.get(P).__webglFramebuffer===void 0&&nt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?nt.setTextureCube(P,0):P.isData3DTexture?nt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?nt.setTexture2DArray(P,0):nt.setTexture2D(P,0),ze.unbindTexture()},this.resetState=function(){Z=0,Y=0,k=null,ze.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var Xn={west:62,east:106,halfDepth:48,home:{x:96,z:41.52}},vi={west:39,east:65,north:63,south:87,gate:{x:55,z:64},bay:{x:55,z:76},approach:{x:55,z:57}},On=[-57,-19,19,57],Mi=[-38,0,38],ta={x:11.7,z:3.2},Br={x:12.05,z:-5.45},As={x:2,z:38},In={x:38,z:-38},qs={door:{x:47.6,z:-33},inside:{x:47.6,z:-38.4,angle:0},out:{x:47.6,z:-29.6,angle:0}},np={x:42.3,z:-41.25},vt=(n,e,t)=>Math.max(e,Math.min(t,n)),re=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Rn(n,e,t,i){let s=Math.abs(n)+t<65&&Math.abs(e)+t<65,r=n>Xn.west&&n+t<Xn.east&&Math.abs(e)+t<Xn.halfDepth,o=n-t>vi.west&&n+t<vi.east&&e>vi.north&&e+t<vi.south;return(s||r||o)&&i.every(a=>{if(a.off)return!0;let c=n-vt(n,a.x-a.w/2,a.x+a.w/2),l=e-vt(e,a.z-a.d/2,a.z+a.d/2);return c*c+l*l>=t*t})}function na(n,e,t,i,s){let r=n.x,o=n.z;return Rn(e,n.z,i,s)&&(n.x=e),Rn(n.x,t,i,s)&&(n.z=t),n.x!==r||n.z!==o}function Bn(n,e,t){let i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+vt(i,-t,t)}function ip(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function pc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Jt;c.morphTargetsRelative=a;let l=0;for(let d=0;d<n.length;++d){let f=n[d],m=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[h].length!==n[0].morphAttributes[h].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+h+'" morph attribute.'),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,d),l+=h}}if(t){let d=0,f=[];for(let m=0;m<n.length;++m){let p=n[m].index;for(let h=0;h<p.count;++h)f.push(p.getX(h)+d);d+=n[m].attributes.position.count}c.setIndex(f)}for(let d in r){let f=sp(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let m=0;m<f;++m){let p=[];for(let v=0;v<o[d].length;++v)p.push(o[d][v][m]);let h=sp(p);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(h)}}}return c}function sp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let d=n[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),a=new sn(o,t,i),c=0;for(let l=0;l<n.length;++l){let d=n[l];if(d.isInterleavedBufferAttribute){let f=c/t;for(let m=0,p=d.count;m<p;m++)for(let h=0;h<t;h++){let v=d.getComponent(m,h);a.setComponent(m+f,h,v)}}else o.set(d.array,c);c+=d.count*t}return s!==void 0&&(a.gpuType=s),a}var ia=new K;function oi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;ia.copy(e),ia[i]=0,ia.normalize();let l=.5*o/(o+a),d=1-ia.angleTo(n)/c;return Math.sign(ia[t])===1?d*l:a/(o+a)+l+l*(1-d)}var sa=class n extends cn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new K,l=new K,d=new K(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,m=this.attributes.normal.array,p=this.attributes.uv.array,h=f.length/6,v=new K,g=.5/o;for(let _=0,T=0;_<f.length;_+=3,T+=2)switch(c.fromArray(f,_),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[_+0]=d.x*Math.sign(c.x)+l.x*r,f[_+1]=d.y*Math.sign(c.y)+l.y*r,f[_+2]=d.z*Math.sign(c.z)+l.z*r,m[_+0]=l.x,m[_+1]=l.y,m[_+2]=l.z,Math.floor(_/h)){case 0:v.set(1,0,0),p[T+0]=oi(v,l,"z","y",r,i),p[T+1]=1-oi(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),p[T+0]=1-oi(v,l,"z","y",r,i),p[T+1]=1-oi(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),p[T+0]=1-oi(v,l,"x","z",r,e),p[T+1]=oi(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),p[T+0]=1-oi(v,l,"x","z",r,e),p[T+1]=1-oi(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),p[T+0]=1-oi(v,l,"x","y",r,e),p[T+1]=1-oi(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),p[T+0]=oi(v,l,"x","y",r,e),p[T+1]=1-oi(v,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Pv={tee:"Camiseta",tank:"Regata",dress:"Camisa social",none:"Sem camisa"},Lv={pants:"Cal\xE7a",shorts:"Bermuda"},Dv={sneakers:"T\xEAnis",flipflops:"Chinelo",dress:"Sapato social"},du={bald:"Careca",buzz:"Raspado",short:"Curto",afro:"Black power",long:"Comprido",mohawk:"Moicano",cap:"Bon\xE9"},fu={none:"Sem barba",stubble:"Por fazer",goatee:"Cavanhaque",mustache:"Bigode",full:"Barba cheia",chevron:"Bigode e cavanhaque"},kr={gold:14266683,silver:13225169,diamond:14677503},pu=[15921126,2040614,2772879,11680307,3107660,14725949,8014476,14711354,7307148,2592670],mu=[1906452,3876376,6964005,13081170,9318175,10132118,2772896],gu=[15052936,12684900,11765348,10119749,8475704,6175527];function Ys(){return{shirt:"tee",shirtColor:2386265,legs:"pants",legColor:3553348,shoes:"sneakers",shoeColor:13812648,hair:"cap",hairColor:1906452,beard:"none",skin:12220240,glasses:!1,chain:"none",earrings:"none",watch:"none",ring:"none",height:1,width:1,capColor:1522486}}function rp(n=12157017){return{...Ys(),shirt:"dress",shirtColor:3558501,legColor:2503491,shoes:"dress",shoeColor:1447446,hair:"cap",capColor:1845820,skin:n,beard:"none"}}function ra(n){let e=n*2654435761>>>0||1,t=()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296),i=r=>r[Math.floor(t()*r.length)],s=r=>{let o=t()*r.reduce((a,[,c])=>a+c,0);for(let[a,c]of r)if(o-=c,o<=0)return a;return r[0][0]};return{feminine:n%3===0,shirt:s([["tee",.46],["tank",.2],["dress",.2],["none",.08]]),shirtColor:i(pu),legs:s([["pants",.62],["shorts",.38]]),legColor:i([3553348,2373199,5917242,2894892,8221798,4020851,11049860]),shoes:s([["sneakers",.5],["flipflops",.28],["dress",.22]]),shoeColor:i([15789282,2236962,9056042,2969482,5915442]),hair:s([["short",.3],["buzz",.18],["bald",.1],["afro",.12],["long",.14],["mohawk",.05],["cap",.11]]),hairColor:i(mu.slice(0,6)),beard:n%3===0?"none":s([["none",.45],["stubble",.18],["goatee",.1],["mustache",.1],["full",.12],["chevron",.05]]),skin:i(gu),glasses:t()<.14,chain:s([["none",.82],["silver",.11],["gold",.07]]),earrings:s([["none",.88],["silver",.06],["gold",.05],["diamond",.01]]),watch:s([["none",.75],["silver",.17],["gold",.08]]),ring:s([["none",.85],["silver",.1],["gold",.05]]),height:.92+t()*.16,width:.9+t()*.25,capColor:i([1522486,9056042,2236962,2772879,14725949])}}function op(n){let e=Ys();if(!n||typeof n!="object")return e;let t=(r,o)=>Object.hasOwn(o,n[r])?n[r]:e[r],i=r=>Number.isInteger(n[r])&&n[r]>=0&&n[r]<=16777215?n[r]:e[r],s=(r,o)=>o.includes(n[r])?n[r]:"none";return{shirt:t("shirt",Pv),shirtColor:i("shirtColor"),legs:t("legs",Lv),legColor:i("legColor"),shoes:t("shoes",Dv),shoeColor:i("shoeColor"),hair:t("hair",du),hairColor:i("hairColor"),beard:t("beard",fu),skin:i("skin"),glasses:n.glasses===!0,chain:s("chain",["gold","silver"]),earrings:s("earrings",["gold","silver","diamond"]),watch:s("watch",["gold","silver"]),ring:s("ring",["gold","silver"]),height:1,width:1,capColor:i("capColor")}}var Nv=new cn,Uv=new sa(1,1,1,4,.23),Fv=new sa(1,1,1,2,.29),zv=new _s(1,10,7),Ov=new zn(1,1,1,12),xu=new Map,Bv=new en({vertexColors:!0,roughness:.82}),_c=new en({vertexColors:!0,roughness:.36,metalness:.18});function bi(n,e,t=Bv){if(!e.length)return;let i=e.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,c=new Float32Array(a*3),l=r.material.color;for(let d=0;d<c.length;d+=3){let f=l;if(r.userData.tankSkin){let m=r.geometry.attributes.position,p=Math.floor(d/9)*3,h=(m.getX(p)+m.getX(p+1)+m.getX(p+2))/3,v=(m.getY(p)+m.getY(p+1)+m.getY(p+2))/3;(v>.49||v>.14&&Math.abs(h)>.36||v>.27&&Math.abs(h)<.14)&&(f=r.userData.tankSkin)}c[d]=f.r,c[d+1]=f.g,c[d+2]=f.b}return o.setAttribute("color",new sn(c,3)),o});n.remove(...e);let s=new Pt(pc(i),t);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var ts=n=>n.children.filter(e=>e instanceof Pt);function Mt(n,e,t,i,s,r,o,a,c,l=!1){let d=t+":"+l;xu.has(d)||xu.set(d,new en({color:t,roughness:l?.33:.87,metalness:l?.2:0}));let f=new Pt({box:Nv,cloth:Fv,sphere:zv,cylinder:Ov}[e],xu.get(d));return f.scale.set(o,a,c),f.position.set(i,s,r),f.castShadow=!0,f.receiveShadow=!0,n.add(f),f}var kv=new Bs(1,16),Gv=new Kt({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function yc(n,e,t){let i=new Pt(kv,Gv);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(e,t,1),n.add(i),i}var Vv=new Uo(1,.09,6,18),Hv=new en({vertexColors:!0,roughness:.22,metalness:.9});var Gr=(n,e)=>{let t=Math.max(0,Math.min(255,(n>>16&255)*e)),i=Math.max(0,Math.min(255,(n>>8&255)*e)),s=Math.max(0,Math.min(255,(n&255)*e));return t<<16|i<<8|s};function Es(n,e){let t={...Ys(),...e},{skin:i}=t,s=new Ut;s.rotation.order="YXZ",s.scale.set(t.width,t.height,t.width);let r=yc(s,.41,.38),o=new Ut;s.add(o);let a=(A,S,x,w,z,D,N,G,U=!1)=>Mt(o,A,S,x,w,z,D,N,G,U),c=t.shirt==="none",l=c?i:t.shirtColor;a("cloth",t.legColor,0,.94,0,.44,.25,.29);let d=a(t.shirt==="tank"?"box":"cloth",l,0,1.25,0,.52,.49,.32);t.shirt==="tank"&&(d.geometry=Uv,d.userData.tankSkin=new $e(i)),c&&t.feminine&&a("cloth",t.shirtColor,0,1.34,.16,.47,.12,.012),t.shirt==="dress"&&(a("cloth",Gr(l,1.25),0,1.47,.06,.3,.06,.2),a("cloth",Gr(l,1.18),0,1.25,.158,.05,.4,.012)),a("cloth",c?3877408:4864812,0,1.05,.006,.473,.049,.312),a("cloth",12891226,-.128,1.05,.16,.06,.05,.01),a("cylinder",i,0,1.5,0,.09,.13,.09),a("sphere",i,0,1.67,.015,.168,.197,.157),a("sphere",i,0,1.655,.165,.033,.034,.034),a("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let A of[-1,1])a("sphere",i,A*.155,1.66,.023,.032,.052,.025),a("cloth",2894120,A*.061,1.711,.152,.043,.012,.012),a("cloth",10985105,A*.061,1.692,.156,.032,.012,.012),a("cloth",3024931,A*.06,1.693,.163,.016,.012,.009);let f=t.hairColor;switch(t.hair){case"buzz":a("sphere",f,0,1.735,-.02,.172,.105,.158);break;case"short":a("sphere",f,0,1.77,-.031,.162,.112,.141);break;case"afro":a("sphere",f,0,1.8,-.035,.235,.19,.225);break;case"long":a("sphere",f,0,1.765,-.03,.175,.12,.16),a("cloth",f,0,1.6,-.115,.32,.34,.1);break;case"mohawk":a("sphere",Gr(i,.8),0,1.735,-.02,.171,.1,.157),a("cloth",f,0,1.83,-.02,.05,.11,.3);break;case"cap":a("sphere",t.capColor,0,1.79,.012,.181,.132,.164),a("cloth",Gr(t.capColor,1.2),0,1.77,.159,.27,.033,.17);break;default:break}let m=t.beard;if(m==="stubble"&&a("cloth",Gr(i,.68),0,1.585,.09,.3,.1,.13),m==="full"&&a("cloth",f,0,1.585,.085,.33,.13,.16),(m==="goatee"||m==="chevron")&&a("cloth",f,0,1.555,.15,.07,.075,.04),(m==="mustache"||m==="chevron"||m==="full")&&a("cloth",f,0,1.618,.164,.1,.022,.02),t.glasses){a("cloth",1118481,0,1.703,.163,.25,.05,.02);for(let A of[-1,1])a("cloth",1118481,A*.155,1.705,.08,.012,.018,.16)}if(t.earrings!=="none")for(let A of[-1,1])a("sphere",kr[t.earrings],A*.162,1.625,.03,.016,.016,.016,!0);if(t.chain!=="none"){let A=a("box",kr[t.chain],0,1.43,.06,.15,.15,.15,!0);A.geometry=Vv,A.rotation.x=Math.PI/2-.42,a("box",kr[t.chain],0,1.32,.165,.04,.05,.015,!0)}let p=[],h=[],v=[],g=[];for(let A of[-1,1]){let S=new Ut;S.position.set(A*.31,1.42,0),o.add(S);let x=t.shirt==="tee"||t.shirt==="dress";Mt(S,"cloth",x?l:i,0,-.105,0,x?.173:.15,.226,x?.187:.16);let w=new Ut;w.position.y=-.23,S.add(w),Mt(w,"cloth",t.shirt==="dress"?l:i,0,-.101,0,.132,.22,.119),Mt(w,"sphere",i,0,-.227,.012,.082,.084,.077),A===1&&t.watch!=="none"&&(Mt(w,"cloth",2762018,0,-.17,0,.14,.04,.128),Mt(w,"box",kr[t.watch],0,-.17,.065,.05,.045,.012,!0)),A===-1&&t.ring!=="none"&&Mt(w,"box",kr[t.ring],.03,-.27,.05,.022,.022,.022,!0),v.push(w),p.push(S);let z=new Ut;z.position.set(A*.128,.94,0),o.add(z),Mt(z,"cloth",t.legColor,0,-.205,0,.21,.427,.228);let D=new Ut;D.position.y=-.412,z.add(D);let N=t.legs==="shorts";if(Mt(D,"cloth",N?i:t.legColor,0,-.18,0,N?.15:.182,.38,N?.16:.198),t.shoes==="flipflops"){Mt(D,"cloth",i,0,-.405,.06,.12,.08,.24);for(let G of[-1,1])Mt(D,"cloth",t.shoeColor,G*.033,-.366,.09,.023,.019,.1).rotation.y=-G*.55;Mt(D,"cloth",t.shoeColor,0,-.455,.059,.15,.025,.29)}else{let G=t.shoes==="dress"?1906194:t.shoeColor;Mt(D,"cloth",G,0,-.386,.062,.201,.143,.304),Mt(D,"cloth",t.shoes==="dress"?1183243:Gr(G,.55),0,-.445,.059,.202,.037,.313)}g.push(D),h.push(z)}let _=new Ut;_.position.set(0,-.227,.012),Mt(_,"box",2635321,0,.012,-.002,.066,.078,.12,!0),Mt(_,"box",2635321,0,-.105,.054,.074,.25,.079,!0),Mt(_,"box",10263691,0,-.189,.095,.031,.028,.018);let T=new Vt;T.position.set(0,-.235,.053),_.add(T),v[0].add(_);let R=new Ut;R.position.set(0,-.227,.03),Mt(R,"box",2828840,0,0,.05,.08,.12,.06,!0),Mt(R,"box",2303786,0,-.2,.07,.07,.5,.11,!0),Mt(R,"box",1842719,0,-.62,.08,.035,.42,.035,!0),Mt(R,"box",5915954,0,.22,.06,.07,.32,.12),Mt(R,"box",2303786,0,-.18,-.02,.05,.16,.12,!0);let b=new Vt;b.position.set(0,-.84,.08),R.add(b),v[0].add(R);for(let A of[o,...p,...v,...h,...g,_,R]){let S=ts(A);bi(A,S.filter(x=>x.material.metalness===0)),bi(A,S.filter(x=>x.material.metalness>0),Hv)}return _.visible=!1,R.visible=!1,n.add(s),{root:s,body:o,arms:p,legs:h,forearms:v,shins:g,pistol:_,rifle:R,muzzle:T,rifleMuzzle:b,shadow:r,stride:0,weapon:"pistol",look:t}}function Js(n,e,t,i,s,r=0,o=0,a=!1){n.root.scale.y=n.look.height,n.stride+=e*(4.6+t*1.65);let c=Math.sin(n.stride)*Math.min(.78,t*.15);n.body.position.set(0,Math.abs(c)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(c,0,0),n.legs[1].rotation.set(-c,0,0),n.shins[0].rotation.set(Math.max(0,c)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-c)*.51,0,0);for(let d of n.forearms)d.rotation.set(0,0,0);let l=s&&n.weapon==="rifle";if(n.arms[0].rotation.set(i?-Math.PI/2+o:-c*.76,0,0),n.arms[1].rotation.set(i?l?-Math.PI/2+o+.12:-1.16:c*.76,0,i&&l?.42:0),n.arms[0].rotation.z=a?-.25:0,(a||!(i&&l))&&(n.arms[1].rotation.z=a?.25:0),a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let d=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-d*1.11,n.forearms[0].rotation.x=-.62*(1-d),n.body.rotation.y=-d*.37}else n.body.rotation.y=0;if(n.pistol.visible=s&&n.weapon!=="rifle",n.rifle)if(n.rifle.visible=l,i&&l&&!a&&r<=0){let d=n.rifle;d.parent!==n.body&&n.body.add(d),d.position.set(.018,1.3,.19),d.rotation.set(-Math.PI/2+o,0,0);let f=lp(d,0,.01,0);xc(n.arms[0],n.forearms[0],f,.23,.227,[-.65,-1,0]);let m=lp(d,0,-.14,-.032);xc(n.arms[1],n.forearms[1],m,.23,.227,[.65,-1,0])}else n.rifle.parent!==n.forearms[0]&&(n.forearms[0].add(n.rifle),n.rifle.position.set(0,-.227,.03),n.rifle.rotation.set(0,0,0))}var ap=new K(0,-1,0),_u=new K,Zs=new K,yu=new K,gc=new K,mc=new K,cp=new an;function lp(n,e,t,i){return gc.set(e,t,i).applyEuler(n.rotation).add(n.position)}function xc(n,e,t,i,s,r){Zs.subVectors(t,n.position);let o=Math.min(i+s-.001,Math.max(.015,Zs.length()));Zs.normalize();let a=(i*i-s*s+o*o)/(2*o);yu.set(r[0],r[1],r[2]).addScaledVector(Zs,-yu.dot(Zs)).normalize(),_u.copy(n.position).addScaledVector(Zs,a).addScaledVector(yu,Math.sqrt(Math.max(0,i*i-a*a))),mc.subVectors(_u,n.position).normalize(),n.quaternion.setFromUnitVectors(ap,mc),mc.copy(n.position).addScaledVector(Zs,o).sub(_u).normalize(),e.quaternion.setFromUnitVectors(ap,mc.applyQuaternion(cp.copy(n.quaternion).invert()))}function vu(n,e){n.root.scale.y=n.look.height,e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(gc.set(0,.1,-.31))),n.root.quaternion.copy(e.body.getWorldQuaternion(cp)),n.shadow.visible=!1,n.pistol.visible=!1;let t=.63;n.body.rotation.set(t,0,0),n.body.position.set(0,.94*(1-Math.cos(t)),-.94*Math.sin(t)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(e.handlebar.localToWorld(gc.set(s*.342,.44,-.09)));xc(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(e.body.localToWorld(gc.set(s*.245,.39,-.22)));xc(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function oa(n,e,t){let i=Math.min(1,e/.22),s=Math.min(1,Math.max(0,(e-.12)/.5)),r=s*s*(3-2*s),o=e>.62?Math.sin(Math.min(1,(e-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(e-.62)/.25)):0,a=t*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(t*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let c=Math.sin(Math.min(1,e/.5)*Math.PI);return n.arms[0].rotation.set(-t*(.6*c+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-t*(.9*c+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*c-.2,0,0),n.forearms[1].rotation.set(-.3*c-.3,0,0),n.pistol.visible=!1,a}var vc={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},la=n=>vc[n]??vc[(n??"car").split(":")[0]]??vc.car,Cs=n=>n.shape??n.kind;function dp(n,e){vc[n]=e}function Qn(n,e){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0),n.repair?.(),Object.assign(n,e,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}var hp=new WeakMap,Vr=12,up=(n,e)=>n*1e4+e;function Wv(n,e,t){if(t.length<24)return t;let i=hp.get(t);if(!i){i=new Map;for(let s of t){let r=Math.floor((s.x-s.w/2-3.8)/Vr),o=Math.floor((s.x+s.w/2+3.8)/Vr),a=Math.floor((s.z-s.d/2-3.8)/Vr),c=Math.floor((s.z+s.d/2+3.8)/Vr);for(let l=r;l<=o;l++)for(let d=a;d<=c;d++){let f=up(l,d);i.has(f)||i.set(f,[]),i.get(f).push(s)}}hp.set(t,i)}return i.get(up(Math.floor(n/Vr),Math.floor(e/Vr)))??[]}function ns(n,e,t,i,s="car"){let r=Math.sin(t),o=Math.cos(t),{offsets:a,radius:c}=la(s),l=Wv(n,e,i);return a.every(d=>Rn(n+r*d,e+o*d,c,l))}function is(n,e,t,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=e-n.x,a=t-n.z,{width:c,length:l}=la(Cs(n)),d=Math.abs(o*r-a*s)-c,f=Math.abs(o*s+a*r)-l;return d<=0&&f<=0||Math.hypot(Math.max(0,d),Math.max(0,f))<i}function ss(n,e=0){let{width:t,length:i}=la(n),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));return{width:t*s+i*r,length:i*s+t*r}}function Hr(n,e,t,i=n){return ns(n.x,n.z,n.angle,e,Cs(n))&&!aa(i,n.x,n.z,n.angle,t)}function aa(n,e,t,i,s){let r=Math.sin(i),o=Math.cos(i),a=la(Cs(n));for(let c of s){if(c===n||Math.abs(c.x-e)>4.5||Math.abs(c.z-t)>4.5)continue;let l=Math.sin(c.angle),d=Math.cos(c.angle),f=la(Cs(c)),m=a.radius+f.radius,p=m,h=0,v=0;for(let g of a.offsets)for(let _ of f.offsets){let T=e+r*g-c.x-l*_,R=t+o*g-c.z-d*_,b=Math.hypot(T,R);if(b>=p)continue;p=b;let A=Math.hypot(e-c.x,t-c.z);h=b>.02?T/b:A>.02?(e-c.x)/A:r,v=b>.02?R/b:A>.02?(t-c.z)/A:o}if(p<m)return{other:c,nx:h,nz:v,mass:a.mass,otherMass:f.mass}}return null}function Mu(n,e){e<2.4||(n.integrity=Math.max(0,n.integrity-(e-2.4)*1.15),n.impact=Math.max(n.impact,e))}function ai(n,e,t,i,s,r=null){let o=!r||r(n.x,n.z,n.angle,Cs(n)),a=(G,U,B)=>ns(G,U,B,i,Cs(n))&&(!r||!o||r(G,U,B,Cs(n))),{brake:c}=t,l=n.kind==="bike",d=n.integrity>0?t.throttle:0;n.bumpedVehicle=null;let f=n.integrity>0?t.steer:0;n.impact=Math.max(0,n.impact-e*21),n.steer+=(f-n.steer)*(1-Math.exp(-e*10));let m=Math.sin(n.angle),p=Math.cos(n.angle),h=n.vx*m+n.vz*p,v=n.handling,g=(n.flat??[]).filter(Boolean).length,_=(v?.top??(l?31:27))*(1-g*.22),T=Math.sign(d)*h<-.6?28:d<0?l?4.7:10:(v?.accel??(l?19.7:15.4))*(1-g*.15);h=vt(h+d*T*e,l?-2.7:-8.4,_);let R=n.integrity<=0?3.8:c?l?6.7:5.5:Math.abs(d)<.07?1.58:.36;h*=Math.exp(-e*R);let b=c?l?5.2:2.15:(v?.grip??(l?13.5:8.1))*(1-g*.12),A=(n.vx*p-n.vz*m)*Math.exp(-e*b);n.vx=h*m+A*p,n.vz=h*p-A*m;let S=vt(1.9-Math.abs(h)/24,.75,1.65),x=g?((n.flat?.[0]||n.flat?.[2]?1:0)-(n.flat?.[1]||n.flat?.[3]?1:0))*.12:0,w=(n.steer+x)*e*S*Math.min(1,Math.abs(h)/2.1)*Math.sign(h),z=n.angle+w*(l?1.26:c?1.58:1);a(n.x,n.z,z)&&!aa(n,n.x,n.z,z,s)&&(n.angle=z);let D=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*e/.34)),N=e/D;for(let G=0;G<D;G++){let U=n.x+n.vx*N,B=n.z+n.vz*N,Q=aa(n,U,B,n.angle,s);if(Q){let{other:Z,nx:Y,nz:k,mass:F,otherMass:V}=Q,q=n.vx*Y+n.vz*k,X=q-(Z.vx*Y+Z.vz*k);if(X<0&&q<0){let W=-X*1.22/(1/F+1/V);n.vx+=Y*W/F,n.vz+=k*W/F,Z.vx-=Y*W/V,Z.vz-=k*W/V,X<-3.5&&(n.bumpedVehicle=Z),Mu(n,-X),Mu(Z,-X*.9);break}let pe=Math.hypot(n.x-Z.x,n.z-Z.z);if(Math.hypot(U-Z.x,B-Z.z)<=pe)break}if(a(U,B,n.angle))n.x=U,n.z=B;else{let Z=a(U,n.z,n.angle)&&!aa(n,U,n.z,n.angle,s),Y=a(n.x,B,n.angle)&&!aa(n,n.x,B,n.angle,s),k=Math.hypot(Z?0:n.vx,Y?0:n.vz);Z!==Y?(Z&&(n.x=U),Y&&(n.z=B),n.vx*=Z?.84:-.22,n.vz*=Y?.84:-.22):(n.vx*=-.21,n.vz*=-.21),ns(U,B,n.angle,i,Cs(n))===!1&&Mu(n,k||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function kn(n,e){let t=0;return Mi.some(i=>Math.abs(n-i)<=13.55)&&Mi.some(i=>Math.abs(e-i)<=13.55)&&(t=.16),Math.abs(n-38)<6.05&&Math.abs(e+38)<5.04&&(t=.228),Math.abs(n-2)<9.5&&Math.abs(e-38)<11&&(t=.191),n>-10.91&&n<-3.49&&Math.abs(e-38)<9.77&&(t=.234),t}function Pn(n,e,t,i,s,r,o=.34){if(!Rn(e,t,o,i))return!1;for(let a of s)if(!(re(a,{x:e,z:t})>3.4||!is(a,e,t,o))&&(!is(a,n.x,n.z,o)||re(a,{x:e,z:t})<=re(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let c=o+.19;if(re(a,{x:e,z:t})<c&&re(a,{x:e,z:t})<=re(a,n))return!1}return!0}function Mc(n,e,t,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(e,t)/.14)),c=n.x,l=n.z,d=e/a,f=t/a;for(let m=0;m<a;m++){let p=n.x+d,h=n.z+f;if(Pn(n,p,h,i,s,r,o)){n.x=p,n.z=h;continue}d&&Pn(n,p,n.z,i,s,r,o)&&(n.x=p),f&&Pn(n,n.x,h,i,s,r,o)&&(n.z=h)}return Math.hypot(n.x-c,n.z-l)}function fp(n,e,t){if(!e)return is(n,t.x,t.z,.28);let i=Math.max(1,Math.ceil(re(e,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=e.x+(n.x-e.x)*r,a=e.z+(n.z-e.z)*r,c={x:o,z:a,angle:n.angle,kind:n.kind,shape:n.shape};if(is(c,t.x,t.z,.28))return!0}return!1}function pp(n,e,t){let i=e.x-n.x,s=e.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((t.x-n.x)*i+(t.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(t.x-n.x-i*o,t.z-n.z-s*o)<1.2}function gp(n,e){let{id:t,x:i,z:s,w:r,d:o,angle:a,kind:c,label:l,color:d}=e,{box:f,solid:m,door:p,sign:h,glazing:v,support:g,volume:_}=n,T=c==="shop"||c==="armory",R=(Y,k,F=.228)=>({x:i+Math.cos(a)*Y+Math.sin(a)*k,z:s-Math.sin(a)*Y+Math.cos(a)*k,y:F}),b=Math.abs(Math.cos(a)),A=Math.abs(Math.sin(a)),S=(Y,k,F,V)=>({...R(Y,k),w:F*b+V*A,d:F*A+V*b}),x=o/2,w=-o/2,z=-r/2,D=r/2,N=(Y,k,F,V,q,X,pe,W=!1,de=0,Ae="box")=>{let Re=R(Y,k);f(Re.x,F,Re.z,V,q,X,pe,W,a,de,Ae)},G=(Y,k,F,V,q,X,pe,W=!0)=>{N(Y,k,F,V,q,X,pe,W);let de=S(Y,k,V,X);m.push({x:de.x,z:de.z,w:de.w,d:de.d,y0:F-q*.5,h:F+q*.5,buildingId:t})};return T?Q():B();function U(Y,k,F,V,q){if(N(Y,x+.05,k,F+.22,V+.22,.1,5195585),N(Y,x+.085,k,F,V,.06,5073522),N(Y,x+.12,k,.05,V,.03,12168856),N(Y,x+.12,k+V*.18,F,.045,.03,12168856),N(Y,x+.13,k-V*.5-.08,F+.36,.09,.2,Si(d)),q)for(let X of[-1,1])N(Y+X*(F*.5+.24),x+.09,k,.34,V+.06,.05,q)}function B(){let Y=c==="apartments",k=Y?e.stories:1,F=Y?3.3:3.25,V=k*F,q=.228+V;G(0,0,.228+V/2,r,V,o,d),N(0,x+.03,.228+.23,r+.04,.46,.08,8484463);for(let W of[z+.12,D-.12])N(W,x+.04,.228+V/2,.26,V,.1,Si(d));for(let W=1;W<k;W++)N(0,x+.04,.228+W*F,r+.04,.16,.1,Si(d));let X=Y?0:-r*.18;if(N(X,x+.05,.228+1.17,1.42,2.42,.1,5195585),N(X,x+.09,.228+1.1,1.1,2.2,.06,Y?4151902:7687224),N(X+.38,x+.14,.228+1.08,.06,.16,.05,13810049),N(X,x+.32,.228-.05,1.7,.14,.62,8484463),N(X,x+.42,.228+2.62,1.9,.12,.86,Si(d),!0),Y){N(X,x+.12,.228+2.92,1.6,.32,.05,15324320);let W=R(X,x+.15,.228+2.92);h(l,W.x,W.y,W.z,a,5589560,1.56,.3)}else{let W=R(X+1.15,x+.13,1.848);h(l,W.x,W.y,W.z,a,5589560,.92,.22)}let pe=c==="house"?mp(t,[6257514,8019014,6975364]):null;for(let W=0;W<k;W++){let de=.228+W*F,Ae=Y?[z+r*.17,z+r*.38,D-r*.38,D-r*.17]:[r*.18,r*.38];for(let Re of Ae)if(!(W===0&&Math.abs(Re-X)<1.7)&&(U(Re,de+1.72,Y?1.26:1.2,1.34,pe),Y&&W>0&&Re===Ae[3])){N(Re,x+.42,de+.95,1.8,.12,.74,8484463,!0);for(let ve of[-.8,-.4,0,.4,.8])N(Re+ve,x+.76,de+1.38,.04,.78,.04,4802113);N(Re,x+.76,de+1.78,1.72,.05,.06,4802113)}for(let Re of[z,D]){let ve=Re===z?-1:1;for(let Xe of Y?[w+2.2,x-2.2]:[0]){let dt=R(Re+ve*.05,Xe);f(dt.x,de+1.72,dt.z,.1,1.56,1.32,5195585,!1,a);let Ie=R(Re+ve*.085,Xe);f(Ie.x,de+1.72,Ie.z,.06,1.34,1.1,5073522,!1,a)}}}if(Y){N(0,0,q+.04,r+.12,.1,o+.12,7827562);for(let W of[z+.1,D-.1])N(W,0,q+.36,.2,.56,o,Si(d),!0);for(let W of[w+.1,x-.1])N(0,W,q+.36,r,.56,.2,Si(d),!0);N(D-2.4,w+2.1,q+.95,2,1.8,2,9077369,!0),N(D-2.4,w+2.1,q+1.93,2.1,.12,2.1,7301732),N(z+2.2,w+1.9,q+.75,1.4,1.2,1.4,10134691,!0),N(z+2.2,w+1.9,q+1.42,1.5,.12,1.5,7240057)}else{let W=Math.min(2,o*.2);N(0,0,q,r-.02,W,o-.02,d,!0,0,"prism"),N(0,0,q+.06,r+.5,W+.12,o+.7,mp(t,[10115652,9063482,8082502]),!0,0,"prism"),N(D-2.1,w+o*.3,q+W*.55,.55,1.6,.55,9402986,!0)}return{id:t,kind:c,label:l,units:[],doorIds:[],clerk:null,outside:R(X,x+1.1,.16),entry:R(X,x+.2),inside:R(X,x+.2),approach:R(X,x+2.4,.16),resident:null}}function Q(){let k=4.0200000000000005,F=.228,V=e.doorAt??.1,q=Math.min(r*.25,3.72),X=[V-r*.248,V+r*.248],pe=.22,W=(ke,ft,wt,ne,$,Bt,ut)=>G(ke,ft,$+Bt/2,wt,Bt,ne,ut),de=(ke,ft,wt,ne,$,Bt)=>W((ft+wt)/2,ke,wt-ft,pe,ne,$,Bt),Ae=(ke,ft,wt,ne,$,Bt)=>W(ke,(ft+wt)/2,pe,wt-ft,ne,$,Bt),Re=p(...Z(V-1.28/2,x),a,1.28,4285290,F,{buildingId:t,private:!1,unitId:null}),ve=R(V,x),Xe=R(V,x+1.05,.16),dt=R(V,x-1.05),Ie=R(V,x+2.45,.16);_.push({...S(0,0,r-.2,o-.2),floor:F,ceiling:F+k,buildingId:t}),G(0,0,F-.066,r-.03,.132,o-.03,11972762,!1),m[m.length-1].walkSurface=!0,g.push({...S(0,0,r-.03,o-.03),y:F,buildingId:t}),Ae(z,w,x,F,k,d),Ae(D,w,x,F,k,d),de(w,z,D,F,k,d);let st=z,at=[{center:V,width:1.28,door:!0},...X.map(ke=>({center:ke,width:q,door:!1}))];at.sort((ke,ft)=>ke.center-ft.center);let Je=.61,St=2.58,Ht=St-Je;for(let ke of at){let ft=ke.center-ke.width*.5,wt=ke.center+ke.width*.5;if(de(x,st,ft,F,k,d),N((st+ft)/2,x+.04,F+.17,ft-st,.34,.11,8484463),st=wt,ke.door)continue;W(ke.center,x,ke.width,pe,F,Je,d),W(ke.center,x,ke.width,pe,F+St,k-St,d);let ne=R(ke.center,x+.068,F+(St+Je)*.5);v(ne.x,ne.y,ne.z,ke.width,Ht,a);let $=S(ke.center,x,ke.width,.2);m.push({x:$.x,z:$.z,w:$.w,d:$.d,y0:F+Je,h:F+St,buildingId:t});for(let ut of[-1,0,1])N(ke.center+ut*(ke.width*.5-.042),x+.13,F+(St+Je)*.5,.07,Ht,.084,5989472);for(let ut of[Je,St])N(ke.center,x+.13,F+ut,ke.width+.07,.081,.096,7831928);N(ke.center,x+.17,F+Je-.025,ke.width+.2,.091,.25,10065280);let Bt=x-.48;N(ke.center,Bt,F+.83,ke.width-.24,.078,.45,11771260);for(let ut of[-.78,-.39,.39,.78])N(ke.center+ut,Bt,F+.95+(Math.abs(ut)<.5?.055:0),.23,.26,.26,e.awning??12089684)}de(x,st,D,F,k,d),N((st+D)/2,x+.04,F+.17,D-st,.34,.11,8484463),G(V,x,F+2.22+(k-2.22)/2,1.28,k-2.22,.21,d);for(let ke of[z+.17,D-.17])N(ke,x+.11,F+k/2,.22,k,.17,Si(d));N(0,x+.07,F+4.16-.05,r+.25,.22,.13,Si(d));for(let ke of[z,D]){let ft=ke===z?-1:1;for(let wt of[w+2.3,x-2.3])N(ke+ft*.13,wt,F+1.7,.06,1.2,1.4,5195585),N(ke+ft*.16,wt,F+1.7,.04,1.04,1.22,5073522),N(ke+ft*.2,wt,F+1.03,.16,.09,1.56,Si(d))}let $t=R(0,w+1.89,F);$t.angle=a;let yt=R(0,x+.18,F+4.16-.64);h(l,yt.x,yt.y,yt.z,a,3232851,Math.min(5.25,r-.72),.58),N(0,x+.6,F+4.16-1.37,r-.56,.19,1.22,e.awning??7820863,!0);for(let ke=z+.68;ke<D-.42;ke+=.46)N(ke,x+1.21,F+4.16-1.46,.225,.23,.062,14006413);G(.46,w+3,F+.55,4.4,1.1,.7,6968131),N(.46,w+3,F+1.15,4.58,.14,.79,12166795,!0),N(1.33,w+3.02,F+1.42,.48,.41,.36,4083022),N(1.33,w+3.22,F+1.58,.34,.19,.051,7968922);for(let ke of[z+.46,D-.46])for(let ft of[w+1.75,w+4.2]){G(ke,ft,F+.83,.61,1.66,1.79,7037271);for(let wt=0;wt<3;wt++)for(let ne of[-.55,-.17,.22,.57]){let $=[12490344,11953479,5997179][(Math.floor((ne+.6)*2.3)+wt)%3];N(ke+(ke<0?.37:-.37),ft+ne,F+.47+wt*.43,.15,.25,.22,$)}}for(let ke of[-.26,.26])N(ke*r,0,F+4.16-.23,.32,.085,1.91,16245436);N(0,x-.8,F+.009,1.71,.016,.87,5863786);let jt=F+4.16;G(0,0,jt-.053,r+.17,.2,o+.17,8613472,!1);for(let ke of[z,D])N(ke,0,jt+.28,.25,.59,o+.15,Si(d),!0);for(let ke of[w,x])N(0,ke,jt+.28,r+.2,.59,.25,Si(d),!0);return N(D-1.5,w+1.45,jt+.46,1.34,.64,1.21,8418922,!0),N(D-1.5,w+1.45,jt+.82,1.14,.08,1.05,10261379),N(z+1.52,w+1.55,jt+.39,.56,.57,.57,4873822,!0),{id:t,kind:c,label:l,entry:ve,outside:Xe,inside:dt,approach:Ie,resident:null,clerk:$t,doorIds:[Re.id],units:[]}}function Z(Y,k){let F=R(Y,k,.228);return[F.x,F.z]}}function mp(n,e){let t=0;for(let i of n)t=t*31+i.charCodeAt(0)>>>0;return e[t%e.length]}function Si(n){let e=Math.min(255,(n>>16&255)+26),t=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return e*65536+t*256+i}var xp=(n,e)=>[Math.floor((n-e*.5-1.1)/10),Math.floor((n+e*.5+1.1)/10)];function bc(n){let e=new Map;for(let t of n){let[i,s]=xp(t.x,t.w),[r,o]=xp(t.z,t.d);for(let a=i;a<=s;a++)for(let c=r;c<=o;c++){let l=a+","+c;e.has(l)||e.set(l,[]),e.get(l).push(t)}}return(t,i)=>e.get(Math.floor(t/10)+","+Math.floor(i/10))??[]}var _p=(n,e,t)=>Math.abs(n-t.x)<t.w*.5+.002&&Math.abs(e-t.z)<t.d*.5+.002,Xv=n=>n&&n.health!==0&&!n.seated;function yp(n,e,t,i,s){let r=bc(n),o=bc(e),a=bc(t),c=bc(i.map(b=>b.closedSolid)),l=new Map(i.map(b=>[b.id,b])),d=b=>{let A=l.get(b.doorId);return!A.breached&&A.openAmount<1.06},f=n.filter(b=>(b.y0??0)<.95&&b.h>.28&&!b.stair);function m(b,A,S=0){let x=s(b,A);for(let w of o(b,A))w.y>x&&w.y<=S+.305&&_p(b,A,w)&&(x=w.y);return x}function p(b,A,S=0){let x=z=>!z.stair&&(!z.walkSurface||z.h>S+.305)&&(z.y0??0)<S+1.72&&z.h>S+.13,w=r(b,A).filter(x);for(let z of c(b,A))x(z)&&d(z)&&w.push(z);return w}function h(b,A,S=0){let x=null;for(let w of a(b,A))w.floor<=S+.14&&w.ceiling>=S&&_p(b,A,w)&&(!x||w.floor>x.floor)&&(x=w);return x}function v(b,A,S,x=.3,w=!1){let z=D=>A>=(D.y0??0)-x&&A<=D.h+x&&Math.abs(b-D.x)<D.w*.5+x&&Math.abs(S-D.z)<D.d*.5+x;for(let D of r(b,S))if(!(D.off||D.prop||D.walkSurface||D.stair)&&z(D))return!0;if(w){for(let D of c(b,S))if(z(D))return!0}return!1}function g(){return i.map(b=>b.closedSolid).filter(d)}function _(b){let A=l.get(b);return!A||!A.private||A.breached?!1:(A.breached=!0,A.hold=1/0,!0)}function T(b,A){for(let S of i){let x=S.breached||S.normallyOpen;S.hold=Math.max(0,S.hold-b);for(let z of A){if(x||!Xv(z))continue;let D=z.floorY??z.y??0;if(Math.abs(D-S.base)>.64)continue;let N=z.x-S.x,G=z.z-S.z,U=N*N+G*G;if(U>3.68)continue;let B=z.buildingId===S.buildingId&&(!S.unitId||z.unitId===S.unitId),Q=N*S.normalX+G*S.normalZ<-.22;(!S.private||B||Q&&U<2.43||S.opened&&U<1.92)&&(x=!0,S.hold=1.1)}let w=x||S.hold>0?1.48:0;S.openAmount+=(w-S.openAmount)*(1-Math.exp(-b*13)),S.opened=S.openAmount>=1.06,S.door.rotation.y=S.angle+S.openAmount}}function R(){for(let b of i)b.breached=!1,b.hold=0,b.opened=b.normallyOpen,b.openAmount=b.normallyOpen?1.48:0,b.door.rotation.y=b.angle+b.openAmount}return{vehicleSolids:f,floorAt:m,walkSolids:p,interiorAt:h,closedDoorSolids:g,breachDoor:_,updateDoors:T,resetDoors:R,viewBlocked:v}}var bu=3751484,qv={box:new cn,cylinder:new zn(1,1,1,10),pole:new zn(.8,1,1,8),foliage:new Ki(1,1)},Wr={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function Xr(n){let e=n.map(([t,i,s,r,o,a,c,l,d=0,f=0])=>{let m=qv[t],p=m.index?m.toNonIndexed():m.clone(),h=new Ct().compose(new K(i,s,r),new an().setFromEuler(new xi(d,f,0,"YXZ")),new K(o,a,c));p.applyMatrix4(h);let v=new $e(l),g=new Float32Array(p.attributes.position.count*3);for(let _=0;_<g.length;_+=3)g[_]=v.r,g[_+1]=v.g,g[_+2]=v.b;p.setAttribute("color",new sn(g,3));for(let _ of Object.keys(p.attributes))["position","normal","color"].includes(_)||p.deleteAttribute(_);return p});return pc(e)}var vp={lamp:()=>Xr([["pole",0,2.25,0,.083,4.5,.083,bu],["box",.35,4.36,0,.79,.075,.075,bu],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>Xr([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,bu])]),bin:()=>Xr([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>Xr([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>Xr([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>Xr([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,e)=>{let t=e*Math.PI*2/7;return["foliage",Math.sin(t)*.86,4.55,Math.cos(t)*.86,.42,.24,1.58,[3432266,4879699,7111766][e%3],0,t]})])};function Mp(n,e,t){let i=[],s={},r=new en({vertexColors:!0,roughness:.84}),o=new Ct,a=new K,c=new an,l=new K,d=new an,f=new an,m=new K,p=new K(0,1,0),h=!1;function v(S,x,w,z=0,D=1,N){let G=t(x,w),U={x,z:w,w:N?.w??Wr[S].radius*2,d:N?.d??Wr[S].radius*2,y0:G,h:G+(N?.h??1),prop:S};e.push(U),i.push({kind:S,x,z:w,y:G,rotation:z,scale:D,solid:U,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function g(S){d.setFromAxisAngle(p,S.rotation+S.spin),m.set(S.axisX,0,S.axisZ),f.setFromAxisAngle(m,S.tilt),c.multiplyQuaternions(f,d);let x=Wr[S.kind].radius;a.set(S.x,S.y+Math.sin(S.tilt)*x+S.lift,S.z),l.setScalar(S.scale),o.compose(a,c,l),s[S.kind].setMatrixAt(S.index,o),s[S.kind].instanceMatrix.needsUpdate=!0}function _(){for(let S of Object.keys(vp)){let x=i.filter(z=>z.kind===S);if(!x.length)continue;let w=new Fn(vp[S](),r,x.length);w.castShadow=!0,w.receiveShadow=!0,s[S]=w,x.forEach((z,D)=>{z.index=D,g(z)}),w.computeBoundingSphere(),n.add(w)}}function T(S,x,w){let z=Wr[S.kind];S.broken=!0,S.solid.off=!0,S.clock=0;let D=.55+Math.random()*.25;S.vx=x.vx*D,S.vz=x.vz*D;let N=Math.max(.01,Math.hypot(x.vx,x.vz));S.axisX=x.vz/N,S.axisZ=-x.vx/N,S.spinRate=(Math.random()-.5)*(S.kind==="bin"?7:2),S.lift=0,S.liftSpeed=S.kind==="bin"||S.kind==="bollard"?Math.min(3.2,w*.22):0;let G=1-z.mass;return x.vx*=G,x.vz*=G,z.damage&&(x.integrity=Math.max(0,x.integrity-z.damage*Math.min(1.6,w/z.speed))),x.impact=Math.max(x.impact,z.mass>.2?4.5:0),h=!0,{kind:S.kind,heavy:z.mass>.2,x:S.x,z:S.z}}function R(S,x,w){let z=[];for(let N of x){let G=Math.hypot(N.vx,N.vz);if(G<.6)continue;let U=G*S*2+.2;for(let B of i){if(B.broken||Math.abs(B.x-N.x)>3.6||Math.abs(B.z-N.z)>3.6)continue;let Q={x:N.x+N.vx*S,z:N.z+N.vz*S,angle:N.angle,kind:N.kind};is(Q,B.x,B.z,Wr[B.kind].radius+U)&&G>=Wr[B.kind].speed&&z.push(T(B,N,G))}}for(let N of i)if(N.broken)if(N.clock+=S,N.clock<2.5){let G=Math.exp(-S*(N.tilt>1.2?6:2.2)),U=N.x+N.vx*S,B=N.z+N.vz*S;N.x=U,N.z=B,N.vx*=G,N.vz*=G,N.spin+=(N.spinRate??0)*S*G,N.tilt=Math.min(Math.PI/2,N.tilt+S*(1.1+N.tilt*3.2)),N.liftSpeed&&(N.lift=Math.max(0,N.lift+N.liftSpeed*S),N.liftSpeed-=9.8*S,N.lift===0&&N.liftSpeed<0&&(N.liftSpeed=0)),g(N)}else N.clock>50&&Math.hypot(w.x-N.solid.x,w.z-N.solid.z)>38&&x.every(G=>Math.hypot(G.x-N.solid.x,G.z-N.solid.z)>3)&&b(N);let D=h;return h=!1,{events:z,shadow:D}}function b(S){Object.assign(S,{broken:!1,x:S.solid.x,z:S.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),S.solid.off=!1,g(S),h=!0}function A(){for(let S of i)S.broken&&b(S)}return{add:v,finalize:_,update:R,reset:A,items:i}}var qr=20;function bp(n,e,t){let r=((n+e)%qr+qr)%qr-(t==="z"?0:10);return r>=0&&r<7?"green":r>=7&&r<9?"yellow":"red"}var Yv={red:[new $e(1,.12,.08),new $e(.2,.05,.05)],yellow:[new $e(1,.72,.1),new $e(.2,.16,.05)],green:[new $e(.2,1,.45),new $e(.05,.17,.08)]};function Sp(n,e){let t=[];for(let h of On)for(let v of On)t.push({id:h+","+v,x:h,z:v,offset:((h*7+v*3)%qr+qr)%qr});let i=[[-6.1,-6.1,Math.PI,"z"],[6.1,6.1,0,"z"],[-6.1,6.1,-Math.PI/2,"x"],[6.1,-6.1,Math.PI/2,"x"]],s=t.length*i.length,r=new Fn(new zn(.07,.08,3.3,8),new en({color:3093555,roughness:.6}),s),o=new Fn(new cn(.34,.95,.26),new en({color:1909024,roughness:.7}),s),a=new Fn(new zn(.105,.105,.06,12),new Kt({color:16777215}),s*3),c=new Vt,l=[],d=0;for(let h of t)for(let[v,g,_,T]of i){let R=h.x+v,b=h.z+g;c.position.set(R,1.65+.16,b),c.rotation.set(0,_,0),c.scale.set(1,1,1),c.updateMatrix(),r.setMatrixAt(d,c.matrix),c.position.set(R,3.25+.16,b),c.updateMatrix(),o.setMatrixAt(d,c.matrix),["red","yellow","green"].forEach((A,S)=>{c.position.set(R+Math.sin(_)*.14,3.25+.16+.29-S*.29,b+Math.cos(_)*.14),c.rotation.set(Math.PI/2,_,0,"YXZ"),c.updateMatrix(),a.setMatrixAt(d*3+S,c.matrix),l.push({junction:h,axis:T,color:A,state:""})}),e.push({x:R,z:b,w:.2,d:.2,h:3.5,signal:!0}),d++}r.castShadow=o.castShadow=!0,n.add(r,o,a);let f=new Map(t.map(h=>[h.id,h])),m=0;function p(h){m+=h;let v=!1;l.forEach((g,_)=>{let R=bp(m,g.junction.offset,g.axis)===g.color,b=R?"on":"off";g.state!==b&&(g.state=b,a.setColorAt(_,Yv[g.color][R?0:1]),v=!0)}),v&&a.instanceColor&&(a.instanceColor.needsUpdate=!0)}return p(0),{update:p,state(h,v){let g=f.get(h);return g?bp(m,g.offset,v):"green"},reset(){m=0,p(0)}}}var Sc=473021;function Sn(){return Sc=Math.imul(1664525,Sc)+1013904223>>>0,Sc/4294967296}var Ks=n=>n[Math.floor(Sn()*n.length)];function wp(n){Sc=473021,n.background=new $e(15316107),n.fog=new wo(15316107,.0068),n.add(new Oo(15266035,7890017,2.3));let e=new Go(16763540,3);e.position.set(-45,48,-32),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),e.shadow.bias=-35e-5,e.shadow.normalBias=.12,e.shadow.mapSize.set(2048,2048),e.shadow.autoUpdate=!1,n.add(e);let t=new Pt(new _s(330,32,16),new Hn({side:bn,depthWrite:!1,uniforms:{sun:{value:new K(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));t.frustumCulled=!1,t.renderOrder=-100,n.add(t);let i=[],s=[],r=[],o=[],a={},c={box:new cn,foliage:new Ki(1,1),pole:new zn(.8,1,1,8),hill:new _s(1,14,9),prism:Zv()},l=new Vt;function d(k,F,V,q,X,pe,W,de,Ae,Re=0,ve=0){let Xe=F===0&&q===0?"center":Math.round(F/31)+","+Math.round(q/31),dt=k+":"+!!Ae+":"+Xe,Ie=a[dt]??={shape:k,shadow:!!Ae,items:[]};l.position.set(F,V,q),l.scale.set(X,pe,W),l.rotation.set(ve,Re,0,"YXZ"),l.updateMatrix(),Ie.items.push({matrix:l.matrix.clone(),color:new $e(de)})}function f(k,F,V,q,X,pe,W,de=!1,Ae=0,Re=0,ve="box"){d(ve,k,F,V,q,X,pe,W,de,Ae,Re)}function m(k,F,V,q,X,pe,W){f(k,F,V,q,X,pe,W,!0),i.push({x:k,z:V,w:q,d:pe,y0:F-X/2,h:F+X/2})}let p=Mp(n,i,kn);function h(k,F,V=!1){p.add(V?"palm":"tree",k,F,Sn()*6.28,.82+Sn()*.36,{w:.45,d:.45,h:3.6})}function v(k,F,V,q,X,pe=1784375,W=4.2,de=.65){let Ae=document.createElement("canvas");Ae.width=512,Ae.height=115;let Re=Ae.getContext("2d");Re.fillStyle="#e9d4a0",Re.fillRect(0,0,512,115),Re.strokeStyle="#645a47",Re.lineWidth=6,Re.strokeRect(7,7,498,101),Re.font="900 50px system-ui",Re.textAlign="center",Re.textBaseline="middle",Re.fillStyle="#"+pe.toString(16).padStart(6,"0"),Re.fillText(k,256,57,470);let ve=new Os(Ae);ve.colorSpace=un;let Xe=new Pt(new Vn(W,de),new Kt({map:ve}));Xe.position.set(F,V,q),Xe.rotation.y=X,n.add(Xe)}let g=new Ut;n.add(g);let _=[],T=new Vn,R=new en({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:En});function b(k,F,V,q,X,pe){let W=new Pt(T,R);W.position.set(k,F,V),W.scale.set(q,X,1),W.rotation.y=pe,n.add(W)}let A={box:f,solid:i,door:S,sign:v,glazing:b,support:s,volume:r};function S(k,F,V,q,X,pe=.228,W={}){let de=new Ut,Ae=W.id??"door-"+_.length;de.position.set(k,pe,F);let Re=Mt(de,"box",X,q*.5,1.088,0,q-.045,2.147,.074);Re.castShadow=!1;let ve=Mt(de,"box",10191979,q*.5,1.47,-.04,q*.64,.56,.013);ve.castShadow=!1;for(let Je of[-1,1])Mt(de,"box",10191195,q-.14,.99,Je*.046,.11,.13,.035).castShadow=!1,Mt(de,"box",12691318,q-.174,1.011,Je*.073,.132,.042,.037).castShadow=!1;let Xe=k+Math.cos(V)*q*.5,dt=F-Math.sin(V)*q*.5,Ie=W.normallyOpen?1.48:0;de.rotation.y=V+Ie,n.add(de);let st={x:Xe,z:dt,w:Math.abs(Math.cos(V))*q+.083,d:Math.abs(Math.sin(V))*q+.083,y0:pe,h:pe+2.155,doorId:Ae,buildingId:W.buildingId??null},at={door:de,id:Ae,x:Xe,z:dt,base:pe,angle:V,openAmount:Ie,opened:!!W.normallyOpen,breached:!1,private:!!W.private,normallyOpen:!!W.normallyOpen,hold:0,buildingId:W.buildingId??null,unitId:W.unitId??null,normalX:Math.sin(V),normalZ:Math.cos(V),handle:{x:k+Math.cos(V)*(q-.17),y:pe+1.008,z:F-Math.sin(V)*(q-.17)},closedSolid:st};_.push(at);for(let Je of[0,q])f(k+Math.cos(V)*Je,pe+1.09,F-Math.sin(V)*Je,.105,2.18,.178,6640456,!1,V);return f(Xe,pe+2.185,dt,q+.12,.11,.178,6640456,!1,V),at}function x(){let{x:k,z:F}=In,V=13216391;m(k,2.08,F,12,3.84,10,V),f(k,.39,F+5.03,12.04,.46,.08,8484463),f(k,4,F,12.06,1.7,9.98,V,!0,0,0,"prism"),f(k,4.06,F,12,1.84,10.7,9393216,!0,0,0,"prism"),f(k+3.6,4.9,F-2.2,.55,1.9,.55,9402986,!0),f(k,1.38,F+5.05,1.42,2.42,.1,5195585),f(k,1.31,F+5.09,1.1,2.2,.06,6903110),f(k,.18,F+5.35,1.7,.14,.62,8484463),f(k,2.85,F+5.45,1.9,.12,.86,14270112,!0);for(let q of[-3.6,3.6]){f(k+q,2.03,F+5.04,2.08,1.43,.1,5195585),f(k+q,2.03,F+5.07,1.86,1.21,.06,5073522),f(k+q,1.22,F+5.16,2.2,.09,.2,14270112);for(let X of[-1,1])f(k+q+X*1.17,2.03,F+5.07,.34,1.27,.05,6257514)}v("CASA 38",k+1.6,1.62,F+5.13,0,4868146,.92,.22),m(k+9.6,1.6,F-.4,6,3.2,8,12558975),f(k+9.6,3.27,F-.4,6.3,.16,8.3,8280646,!0),f(k+9.6,1.32,F+3.62,4.4,2.5,.08,9278614);for(let q=.3;q<2.6;q+=.28)f(k+9.6,q,F+3.67,4.3,.025,.02,7304824);f(k+9.6,.173,F+8.6,4.8,.03,9.8,10262154),v("GARAGEM",k+9.6,2.85,F+3.68,0,3881523,1.4,.26)}function w(){let k=As.z;f(2,.169,k,19,.045,22,6908773),m(-7.18,2.03,k,7.35,3.68,19.56,8886169),f(-7.18,3.98,k,7.62,.23,19.8,5406866),f(-3.46,1.35,k,.12,2.32,1.7,4413028),f(-2.5,3.33,k,7.1,.25,19.5,5401719,!0),m(-1.5,1.42,k-9.72,5.4,2.54,.35,8229008),m(-1.5,1.42,k+9.72,5.4,2.54,.35,8229008);for(let V of[-9.5,9.5])m(1.04,1.65,k+V,.28,3,.31,8689042);f(1.1,2.88,k,.25,.42,19.54,5994626),v("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,k,Math.PI/2,2704468,7.2,.63);for(let V of[-8.2,-3.95,.3,4.55,8.8])f(8.15,.208,k+V,5.3,.016,.1,14537646);for(let V of[-6.1,-1.85,2.4])f(5.5,.208,k+V,.1,.016,3.25,14537646);for(let V of[-6.8,-3.4,3.4,6.8])f(-3.46,1.87,k+V,.08,1.4,2.25,5195585),f(-3.43,1.87,k+V,.05,1.18,2.05,3626589);f(-3.52,.21,k+3.1,.64,.08,2.45,6446161)}f(0,-.3,0,720,.1,720,8880242),f(0,-.18,0,132,.34,132,4605770);for(let k=0;k<1250;k++){let F=Sn()*130-65,V=Sn()*130-65;f(F,.001,V,.04+Sn()*.3,.007,.04+Sn()*.3,Ks([5460823,4934733,4473414,5855058]),!1,Sn()*6)}for(let k of On)for(let F of Mi){for(let V=-10;V<=10;V+=4)f(k,.014,F+V,.12,.015,1.82,14132838);for(let V of[-12.6,12.6])for(let q=-4.5;q<=4.5;q+=.9)f(k+q,.015,F+V,.45,.016,1.44,13156273)}for(let k of On)for(let F of Mi){for(let V=-10;V<=10;V+=4)f(F+V,.014,k,1.82,.015,.12,14132838);for(let V of[-12.6,12.6])for(let q=-4.5;q<=4.5;q+=.9)f(F+V,.015,k+q,1.44,.016,.45,13156273)}for(let k of Mi)for(let F of Mi){f(k,.067,F,27.1,.16,27.1,13022103),f(k,.125,F,26.7,.07,26.7,10721158);for(let V of[-12.25,12.25])for(let q=-12;q<=12;q+=2.1)f(k+V,.164,F+q,2.32,.008,.023,12956566),f(k+q,.164,F+V,.023,.008,2.32,12956566);if(k===As.x-2&&F===As.z)w();else if(k===In.x&&F===In.z)x();else if(k===0&&F===-38){for(let V of[-6,6]){f(k+V,.185,F,8.2,.08,19,7438938);for(let q of[-7,0,7])h(k+V,F+q,!0)}for(let V=-8;V<=8;V+=4)f(k,.177,F+V,3.1,.033,3.2,13218964);m(k,1.04,F-9.89,4.42,1.77,.18,9271651),v("PRA\xC7A DA BRASA",k,1.6,F-10,Math.PI)}else for(let V of[-1,1]){let q=k===0&&F===0&&V===1,X=o.filter(st=>st.id.startsWith("lot-")||st.id==="armory").length,pe=X+10,W=q?"armory":X%5===1||X%5===3?"shop":X%5===0?"house":"apartments",de=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],Ae=q?"armory":pe===13?"barber":pe===18?"clothes":pe===21?"black":W==="shop"?"store":null,ve={barber:"BARBEARIA DO Z\xC9",clothes:"MODA BRASA",black:"PENHORES 24H"}[Ae]??(W==="shop"?de[Math.floor(X/2)%de.length]:W==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(X/2)%6]:"CASA "+pe),Xe=Ks([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),dt=gp(A,{id:q?"armory":"lot-"+pe,kind:W,label:q?"LOJA DE ARMAS":ve,x:k+V*(q?5.7:6.25),z:F+(q?-5.45:0),angle:V*Math.PI/2,w:q?11.35:(W==="house"?13.7:15.3)+Sn()*.57,d:q?9.36:9.38+Sn()*.25,color:Xe,upperColor:Ks([12163192,10394757,12426376,11971991]),awning:Ks([7821376,6190959,10446933]),fabrics:Ks([7373431,8152675,9534300]),stories:X%3===0?3:2,doorAt:q?0:void 0,open:W==="house"&&X%3!==0});dt.service=Ae,o.push(dt);let Ie=q?4.32:F+9.83;f(k+V*6.8,.168,Ie,8.3,.017,2.51,10919820);for(let st=-3.5;st<=3.5;st+=.7)f(k+V*6.8+st,.18,Ie,.022,.012,2.5,12169372)}for(let V of[-1,1]){let q=k+V*12.85,X=F-V*9.85;p.add("lamp",q,X,V>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),p.add("bench",k+V*9,F-V*12.5,V>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let pe=k+V*10.1;p.add("bin",pe,F-V*12.55,0,1,{w:.5,d:.5,h:.78}),p.add("bollard",pe+.72,F-V*12.58,0,1,{w:.14,d:.14,h:.46}),k===In.x&&F===In.z&&V===1||h(k+V*9.4,F+V*12.6)}}for(let k of[-1,1])m(63.6,1.85,k*2.5,.15,3.7,.15,7362375);f(63.6,3.48,0,.16,.64,5.15,7362375),v("VILA DAS LAJES",63.51,3.48,0,-Math.PI/2,3232851,3.55,.56),f(84,-.055,0,44,.1,Xn.halfDepth*2,10063229);for(let k of[63.45,71,78,85,93,101])f(k,-.003,0,2.4,.012,94,10393225);for(let k of[-30,-20,-10,0,10,20,30,40])f(84,-.001,k,43.8,.014,3.2,11115405);for(let[k,F]of[67.5,74.5,81,89,97,104].entries())for(let[V,q]of[-44,-35,-25,-15,-5,5,15,25,35,44].entries()){if(k>=4&&q>=35||q===-5&&k<3)continue;let X=2.9+(k+V)%3*.85,pe=[11890768,10652789,11363656,10063490][(V+k)%4];if(m(F,X/2,q,4.1,X,5.2,pe),f(F,X+.08,q,4.3,.16,5.4,8683127),f(F-2.06,1.07,q-.8,.05,2.14,.88,5786688),f(F-2.07,1.64,q+1.15,.055,.88,1.2,5464677),(V+k)%2===0){f(F-2.32,2.28,q-.8,.56,.09,1.36,8162439);for(let W of[-.42,0,.42])f(F-2.11,1.64,q+1.15+W,.04,.88,.04,2702400)}V%2===0&&f(F,X+.55,q+1,1.3,.92,1.3,5334392)}let z=98,D=41;f(z,.022,D,6,.044,8,11971222),m(z,1.37,D-4,6.2,2.7,.18,11904388),m(z,1.37,D+4,6.2,2.7,.18,11904388),m(z+3,1.37,D,.18,2.7,8,11904388);for(let k of[-1,1])m(z-3,1.37,D+k*2.42,.18,2.7,3.16,11904388),m(z+k*1.76,1.37,D,2.42,2.7,.14,12891799),m(z,1.37,D+k*3.18,.14,2.7,1.62,12891799);m(z,2.77,D,6.18,.17,8.2,7828075),r.push({buildingId:"lajes-home",unitId:"lajes-home:0",x:z,z:D,w:5.8,d:7.8,floor:0,ceiling:2.68}),v("CASA",94.87,2.34,D,-Math.PI/2,3232851,.95,.28),m(96.1,.36,43.7,.85,.7,1.76,6912108),f(96.1,.75,43.7,.86,.09,1.7,12102280),m(99.7,.27,43.6,1.18,.51,1.91,8938317),f(99.7,.58,43.6,1.18,.13,1.88,13086100),f(99.7,.67,44.27,.92,.13,.39,15853006),m(96.4,.44,38.65,1.6,.86,.56,7239797),f(96.4,.9,38.65,1.64,.07,.61,12633269),f(100,.38,38.1,.59,.75,.63,14998731),f(99.1,.84,38.16,.62,.14,.44,14076597);let N=vi,G=(N.west+N.east)/2;f(G,.005,75,25.8,.014,24,7564899),f(N.gate.x,.004,62.2,7.5,.015,4.8,7564899);for(let k of[N.west+.3,N.east-.3])m(k,.8,75,.24,1.6,24,6776155);m(G,.8,86.72,25.6,1.6,.24,6776155),m(45.3,.8,63,12.4,1.6,.22,6776155),m(62,.8,63,5.6,1.6,.22,6776155),f(43.8,1.55,66.6,5,3.1,4,11115653),v("FERRO-VELHO",43.8,2.5,64.56,Math.PI,3232851,4.3,.55);for(let k=42;k<=62;k+=3.2)f(k,.015,81,.045,.012,5,12035445);for(let k=0;k<52;k++){let F=k/52*Math.PI*2,V=118+Sn()*58,q=Ks([9670532,10525321,10001560,9212560]),X=Math.sin(F)*V,pe=Math.cos(F)*V;d("hill",X,-1,pe,12+Sn()*33,3+Sn()*22,10+Sn()*20,q,!1,F);let W=4+Sn()*16;f(X,W*.5-1,pe,3+Sn()*9,W,4+Sn()*8,Ks([10194306,8949389,10128258]),!1)}p.finalize();let U=Sp(n,i),B=new en({roughness:.88});for(let{shape:k,shadow:F,items:V}of Object.values(a)){let q=new Fn(c[k],B,V.length);V.forEach(({matrix:X,color:pe},W)=>{q.setMatrixAt(W,X),q.setColorAt(W,pe)}),q.castShadow=F,q.receiveShadow=!0,n.add(q)}let Q=new Ut,Z=new Pt(new No(1.6,1.85,40),new Kt({color:15794054,side:En,transparent:!0,opacity:.85,depthWrite:!1}));Z.rotation.x=-Math.PI/2,Z.position.y=.26,Q.add(Z);let Y=new Pt(new $i(.43),new Kt({color:15794054}));return Y.position.y=2.8,Q.add(Y),n.add(Q),{solid:i,marker:Q,beacon:Y,sun:e,sky:t,houseRoof:g,bed:np,doors:_,buildings:o,props:p,signals:U,...yp(i,s,r,_,kn)}}function Zv(){let n=[-.5,0,-.5],e=[-.5,0,.5],t=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,e,t,i,r,s,n,r,i,n,t,r,e,r,t,e,s,r,n,s,e,n,i,s],a=new Jt;return a.setAttribute("position",new Rt(o.flat(),3)),a.computeVertexNormals(),a}var Jv=n=>n===0?"gr\xE1tis":"R$ "+n.toLocaleString("pt-BR"),Kv=n=>"#"+n.toString(16).padStart(6,"0");function Tp(n,{balance:e,onClose:t}){let i=n.querySelector("#shop-title"),s=n.querySelector("#shop-detail"),r=n.querySelector("#shop-balance"),o=n.querySelector("#shop-list"),a=n.querySelector("#shop-status"),c=null,l=null;function d(m){let p=m?document.activeElement?.getAttribute("data-key"):null,h=l();c=h,i.textContent=h.title,s.textContent=h.note??"",r.textContent=e(),o.replaceChildren(),h.sections.forEach((_,T)=>{let R=document.createElement("h3");R.textContent=_.title,o.append(R),_.items.forEach((b,A)=>{let S=document.createElement("div");S.className="store-row"+(b.active?" active":"");let x=document.createElement("button");x.type="button",x.className="store-item",x.dataset.key=T+":"+A,x.disabled=!!b.disabled,x.innerHTML="";let w=document.createElement("span");w.textContent=b.label+(b.active?" \xB7 em uso":"");let z=document.createElement("b");if(z.textContent=b.price==null||b.disabled&&h.title==="Invent\xE1rio"?"":Jv(b.price),x.append(w,z),b.detail){let D=document.createElement("small");D.textContent=b.detail,x.append(D)}if(x.addEventListener("click",()=>f(b,void 0)),S.append(x),b.colors){let D=document.createElement("div");D.className="swatches",b.colors.forEach((N,G)=>{let U=document.createElement("button");U.type="button",U.className="swatch",U.style.background=Kv(N),U.dataset.key=T+":"+A+":"+G,U.setAttribute("aria-label",b.label+", cor "+(G+1)),U.disabled=!!b.disabled,U.addEventListener("click",()=>f(b,N)),D.append(U)}),S.append(D)}o.append(S)})}),((p?o.querySelector('[data-key="'+p+'"]'):null)??o.querySelector("button:not(:disabled)"))?.focus({preventScroll:!1})}function f(m,p){let h=m.buy(p);a.textContent=h??"Pronto!",a.classList.toggle("error",!!h),d(!0)}return{show(m){l=m,a.textContent="",d(!1),n.open||n.showModal()},close(){n.open&&n.close(),c=null,t()},move(m){let p=[...n.querySelectorAll("button:not(:disabled)")];if(!p.length)return;let h=p.indexOf(document.activeElement),v=p[(h+m+p.length)%p.length];v.focus(),v.scrollIntoView({block:"nearest"})},activate(){let m=document.activeElement;m&&n.contains(m)&&m.click()},refresh(){c&&d(!0)}}}var Yr={sedan:{name:"Brasa",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[11422e3,4362871,13084242,5795484,9063749,14209732,3093558]},hatch:{name:"Pulga",category:"dia a dia",length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[.38,.18],[-.38,.18],[.38,-.86],[-.38,-.86]],doors:4,handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[14783826,6989496,14209732,11876922,9416794]},wagon:{name:"Perua",category:"dia a dia",length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3,cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[.42,.1],[-.42,.1],[.42,-1],[-.42,-1]],doors:4,handling:{top:26,accel:14,grip:8,mass:1.18},palette:[9799551,5143689,8219215,13023648],extras:["roofRack"]},taxi:{name:"T\xE1xi",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[15254855],extras:["taxi"]},pickup:{name:"Picape",category:"utilit\xE1rio",length:5.3,width:2,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[.44,-.02],[-.44,-.02]],doors:2,handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[7043674,9056042,14012354,3100527,3815994],extras:["bed"]},van:{name:"Furg\xE3o",category:"utilit\xE1rio",length:5.15,width:2,sill:.55,belt:1.06,roof:2,wheel:.41,wheelbase:3.15,cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[.45,.85],[-.45,.85]],doors:2,handling:{top:22,accel:11,grip:7,mass:1.6},palette:[15131350,10467269,13218682,7110499],extras:["box"]},suv:{name:"Jip\xE3o",category:"luxo / utilit\xE1rio",length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[.45,.05],[-.45,.05],[.45,-1],[-.45,-1]],doors:4,handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[2042416,14276303,6044462,3758922],extras:["roofRack","chrome"]},sport:{name:"Fa\xEDsca",category:"esportivo",length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[.4,-.28],[-.4,-.28]],doors:2,handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[14236459,15909424,3108822,16052714,2500907],extras:["spoiler"]},muscle:{name:"Trov\xE3o",category:"esportivo",length:4.95,width:2,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,cabin:{base:[-1.3,.5],top:[-1,-.02]},seats:[[.42,-.45],[-.42,-.45]],doors:2,handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[1908514,8199967,13855274,2972991],extras:["scoop","stripes"]},luxury:{name:"Imperador",category:"luxo",length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[.44,.12],[-.44,.12],[.44,-1.08],[-.44,-1.08]],doors:4,handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[1316376,15065818,3882821,4858664],extras:["chrome"]},convertible:{name:"Brisa",category:"luxo / esportivo",length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[.4,-.12],[-.4,-.12],[.4,-1],[-.4,-1]],doors:2,open:!0,handling:{top:34,accel:19,grip:9,mass:1.05},palette:[9425384,15328208,11872828,1851246],extras:["chrome"]}},Ap={street:{name:"Rua",handling:{top:31,accel:19.7,grip:13.5,mass:.39}},sport:{name:"Raio",handling:{top:40,accel:24,grip:14.5,mass:.36}},chopper:{name:"Estradeira",handling:{top:29,accel:15,grip:12,mass:.45}},scooter:{name:"Mobilete",handling:{top:19,accel:10,grip:13,mass:.28}}};for(let[n,e]of Object.entries(Yr))dp("car:"+n,{width:e.width/2+.02,length:e.length/2+.01,radius:e.width/2-0,offsets:[-(e.length/2-e.width/2),0,e.length/2-e.width/2],mass:e.handling.mass});var $v=new en({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:En,transparent:!0,opacity:.5,depthWrite:!1});function Zr(n,e="sedan",t,i=!1){let s=e==="tow"?{...Yr.pickup,name:"Guincho",extras:["bed","tow"]}:Yr[e]??Yr.sedan,r=t??s.palette[0],{length:o,width:a,sill:c,belt:l,roof:d,wheel:f,wheelbase:m}=s,p=o/2,h=s.extras??[],[v,g]=s.cabin.base,[_,T]=s.cabin.top,R=new Ut;yc(R,a/2+.17,p+.07);let b=new Ut;R.add(b);let A=(X,pe,W,de,Ae,Re,ve,Xe,dt=!1)=>Mt(b,X,pe,W,de,Ae,Re,ve,Xe,dt),S=h.includes("chrome");A("box",2435629,0,(f*.32+c+.06)/2,0,a-.44,c+.06-f*.32,o-.9);for(let X of[-1,1])A("box",2830387,X*(a/2-.07),c-.06,0,.12,.22,Math.max(.4,m-2*f-.12));A("box",3749689,0,c,0,a-.44,.075,o-.35);for(let X of[-1,1]){for(let[pe,W]of[[-p,-m/2-f],[-m/2+f,m/2-f],[m/2+f,p]])W>pe&&A("box",r,X*(a/2-.055),(c+l)/2,(pe+W)/2,.11,l-c,W-pe,!0);for(let pe of[-m/2,m/2]){let W=Math.min(l-.05,2*f+.03);A("box",r,X*(a/2-.055),(W+l)/2,pe,.11,l-W,2*f,!0)}}for(let X of[-1,1])A("box",r,0,(c+l)/2,X*(p-.09),a-.04,l-c,.18,!0);let x=p-g-.03,w=A("box",r,0,l+.005,(g+p)/2,a-.04,.15,x,!0);!h.includes("bed")&&!h.includes("box")&&p+v>.25&&A("box",r,0,l-.005,(v-p)/2,a-.05,.14,p+v-.02,!0);let z=a/2-.07,D=a/2-.27,N=$v.clone(),G;if(s.open){let X=new Jt;X.setAttribute("position",new Rt([-z,l,g,z,l,g,D,d,T,-D,d,T],3)),X.setIndex([0,1,2,0,2,3]),X.computeVertexNormals(),G=new Pt(X,N),A("box",2895665,0,d,T,a-.5,.06,.07)}else{let X=new Jt;X.setAttribute("position",new Rt([-z,l-.015,v,z,l-.015,v,z,l-.015,g,-z,l-.015,g,-D,d,_,D,d,_,D,d,T,-D,d,T],3)),X.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),X.computeVertexNormals(),G=new Pt(X,N),A("box",r,0,d+.035,(_+T)/2,D*2+.02,.07,T-_+.08,!0);let pe=(W,de,Ae)=>{let Re=d-l,ve=de-W;for(let Xe of[-1,1])A("box",r,Xe*(z+D)/2,(l+d)/2,(W+de)/2,.08,Math.hypot(Re,ve),Ae,!0).rotation.x=Math.atan2(ve,Re)};if(pe(g,T,.08),pe(v,_,.12),s.doors===4){let W=(s.seats[0][1]+s.seats[2][1])/2+.12;for(let de of[-1,1])A("box",r,de*(z+D)/2,(l+d)/2,W,.08,d-l,.1,!0)}}G.renderOrder=2,b.add(G);let U=Math.min(l-.26,d-.99),B=Math.min(.62,d-l-.02+.3);for(let[X,pe]of s.seats)A("cloth",3486512,X,U+.06+B,pe-.235,.31,.16,.14),A("cloth",3815219,X,U-.1,pe+.12,.51,.14,.54),A("box",3815219,X,U+B/2,pe-.235,.5,B,.13);A("box",2828840,0,l+.045,g-.24,a-.26,.14,.34);let Q=A("cylinder",1907997,s.seats[0][0],l+.07,s.seats[0][1]+.42,.17,.03,.17);Q.rotation.x=Math.PI/2-.45,A("cloth",2106922,0,U+.02,(v+g)*.5,.19,.23,Math.min(1.25,g-v));for(let X of[-1,1])A("box",6643286,X*(a/2-.15),(c+l)/2,(v+g)/2,.08,.085,g-v),A("box",11951652,X*(a*.5-.13),l-.205,p+.006,.12,.064,.032,!0),A("box",12959664,X*(a*.5-.26),c-.07,-p-.036,.12,.076,.09,!0);A("cloth",2435629,0,l-.21,p+.009,a*.41,.13,.026);for(let X=0;X<3;X++)A("box",7630694,0,l-.25+X*.04,p+.026,a*.36,.013,.014,!0);A("box",3355961,0,l-.24,p+.004,a*.44,.14,.05),A("box",13156268,0,c+.035,p+.006,a*.98,.1,.045,!0),A("box",13156268,0,c+.025,-p-.006,a*.98,.1,.05,!0),A("box",16707771,0,(c+l)/2,-p-.008,.4,.14,.03);for(let X of[-1,1]){A("box",16769956,X*(a/2-.29),l-.165,p+.006,.43,.17,.055,!0),A("box",11021858,X*(a/2-.3),l-.165,-p-.006,.48,.17,.055,!0),s.open||A("box",2898236,X*(a/2+.03),l+.07,g-.06,.1,.09,.16);let pe=s.doors===4?[g,(s.seats[0][1]+s.seats[2][1])/2+.12,v+.05]:[g,s.seats[0][1]-.62];for(let W of pe)A("box",1843234,X*(a/2+.005),(c+l)/2,W,.012,l-c-.02,.025);for(let W=0;W<pe.length-1;W++)A("box",13089700,X*(a/2+.01),l-.05,pe[W+1]+Math.min(.21,(pe[W]-pe[W+1])*.25),.035,.04,.22,!0);S&&A("box",14277074,X*(a/2+.008),l-.03,0,.02,.03,o-.5,!0)}if(h.includes("taxi")&&(A("box",16249304,0,d+.16,(_+T)/2,.68,.2,.26),A("box",2779715,0,(c+l)/2+.06,0,a+.012,.08,o*.6,!0)),h.includes("spoiler")){for(let X of[-1,1])A("box",1776670,X*.6,l+.14,-p+.28,.06,.22,.08);A("box",r,0,l+.27,-p+.25,a-.2,.05,.32,!0)}if(h.includes("scoop")&&A("box",2105892,0,l+.12,(g+p)/2+.1,.5,.12,.62),h.includes("stripes"))for(let X of[-1,1])A("box",15855590,X*.2,l+.083,(g+p)/2,.16,.012,x),A("box",15855590,X*.2,d+.072,(_+T)/2,.16,.012,T-_);if(h.includes("roofRack"))for(let X of[-1,1])A("box",2500907,X*(D-.08),d+.1,(_+T)/2,.05,.06,T-_+.2);if(h.includes("tow")){let X=A("box",4539969,0,l+.35,-o*.3,.135,.16,1.55,!0);X.rotation.x=-.32,A("box",3553336,0,l+.18,-o*.34,.73,.51,.35),A("box",15047465,0,d+.1,(_+T)/2,.68,.13,.28,!0),A("box",6776928,0,l-.17,-p-.19,.91,.13,.33,!0)}if(h.includes("bed")){for(let X of[-1,1])A("box",r,X*(a/2-.04),l+.22,(v-p)/2,.08,.44,p+v,!0);A("box",r,0,l+.22,-p+.04,a,.44,.08,!0),A("box",r,0,l+.22,v-.04,a,.44,.08,!0),A("box",2960169,0,l+.01,(v-p)/2,a-.16,.02,p+v-.12)}if(h.includes("box")){A("box",r,0,(l+2.15)/2,(v+.25-p)/2,a,2.15-l,p+v+.25,!0),A("box",2763306,0,2.15-.05,(v+.25-p)/2,a+.02,.04,p+v+.27);for(let X of[-1,1])A("box",1843234,X*.005,(l+2.1)/2,-p-.004,.015,2-l,.02)}let Z=[];for(let X of[-1,1])for(let pe of[-m/2,m/2]){let W=new Ut;W.position.set(X*(a/2-.17),f,pe),R.add(W),Mt(W,"cylinder",2434600,0,0,0,f,.24,f).rotation.z=Math.PI/2,Mt(W,"cylinder",S?14013903:11052964,X*.115,0,0,f*.53,.02,f*.53,!0).rotation.z=Math.PI/2,Z.push(W)}let Y=new Ut,k=s.doors===4?(s.seats[0][1]+s.seats[2][1])/2+.12:s.seats[0][1]-.62;Y.position.set(a/2+.004,0,g),Mt(Y,"box",r,0,(c+l)/2+.04,-(g-k)/2,.036,l-c-.1,g-k,!0),bi(Y,ts(Y),_c),b.add(Y);let F=[1,-1].map(X=>{let pe=new Ut;return pe.position.set(0,c-.09,X*(p-.2)),Mt(pe,"box",S?13619144:2830387,0,0,0,a-.08,.3,.42,S),bi(pe,ts(pe),S?_c:void 0),b.add(pe),{mesh:pe,end:X,state:0,home:pe.position.clone(),damage:0,velocity:new K,spin:0}}),V=[];i&&(V.push(A("box",15550262,-.33,d+.13,(_+T)/2,.55,.14,.25)),V.push(A("box",5487086,.33,d+.13,(_+T)/2,.55,.14,.25)));let q=ts(b).filter(X=>X!==G&&X!==w&&!V.includes(X));bi(b,q.filter(X=>X.material.metalness===0)),bi(b,q.filter(X=>X.material.metalness>0),_c);for(let X of Z)bi(X,ts(X));return b.traverse(X=>{X instanceof Pt&&(X.castShadow=!1)}),n.add(R),Ip({root:R,body:b,cabin:G,cracks:[],wheels:Z,lamps:V,hood:w,bumpers:F,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"car",model:e,shape:e==="tow"?"car:pickup":"car:"+e,spec:s,color:r,handling:s.handling,rider:null,door:Y,doorTime:0,wheelSpin:0,handlebar:null,wheelRadius:f,wheelbase:m,halfWidth:a/2,halfLength:p,seatHip:U,flat:[!1,!1,!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}function Ip(n){let e=n;return e.repair=()=>jv(e),e}var Ep=new en({color:2038810,roughness:1,metalness:.05});function Pp(n){n.originals??=new Map,n.root.traverse(e=>{!(e instanceof Pt)||e===n.cabin||e.material===Ep||e.parent===n.root&&e.geometry.type==="CircleGeometry"||(n.originals.set(e,e.material),e.material=Ep)}),n.cabin&&(n.cabin.visible=!1);for(let e of n.cracks)e.visible=!1}function jv(n){n.flat?.fill(!1);for(let[e,t]of n.originals??[])e.material=t;n.originals?.clear(),n.cabin&&(n.cabin.visible=!0);for(let e of n.bumpers??[])n.body.add(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.state=0,e.damage=0;Object.assign(n,{damageFront:0,damageRear:0,burning:!1,wrecked:!1,fire:0,wreckClock:0})}function wc(n,e,t="street"){let i=Ap[t]??Ap.street,s=new Ut;yc(s,.42,1.07*1.07);let r=new Ut;s.add(r);let o=(p,h,v,g,_,T,R,b)=>Mt(r,p,h,v,g,_,T,R,b),a=t==="scooter"?.25:t==="chopper"?.36:.33,c=t==="chopper"?[-.86,.98]:t==="scooter"?[-.62,.66]:[-.73,.78];t==="scooter"?(o("box",e,0,.42,-.25,.38,.34,.8),o("box",2763821,0,.34,.2,.36,.08,.55),o("box",e,0,.72,.52,.34,.68,.16),o("box",2369834,0,.78,-.32,.34,.12,.55),o("box",13940106,0,.92,.66,.22,.14,.08)):t==="chopper"?(o("box",3882300,0,.46,-.1,.3,.34,.7),o("sphere",e,0,.86,.32,.22,.18,.5),o("box",2369834,0,.68,-.42,.38,.1,.62),o("box",e,0,.62,-.86,.3,.16,.5),o("box",14079696,.22,.34,-.42,.1,.1,.95),o("box",13940106,0,.9,1.02,.22,.2,.1)):(o("box",3882300,0,.48,-.04,.32,.38,.7),o("sphere",e,0,.89,.34,.24,.23,.46),o("box",2369834,0,.85,-.36,.36,.13,.59),o("box",e,0,.65,-.7,.32,.17,.58),o("box",13940106,0,.8,.88,.25,.21,.11),t==="sport"&&(o("box",e,0,.72,.62,.42,.5,.5),o("box",2902871,0,1.04,.72,.34,.18,.06),o("box",e,0,.8,-.72,.28,.12,.5))),o("box",10433836,0,.7,c[0]-.25,.2,.11,.11);for(let p of[-1,1]){let h=o("box",3817536,p*.27,1.28,.47,.035,.22,.035);h.rotation.z=-p*.4,o("cloth",4343880,p*.32,1.39,.47,.17,.078,.056),o("box",11630140,p*.19,.76,c[0]-.17,.11,.073,.08)}let l=new Ut;l.position.set(0,.76,.38),Mt(l,"box",3949122,0,.44,-.09,t==="chopper"?.84:.684,.057,.059),Mt(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,bi(l,ts(l)),r.add(l),o("box",5461330,0,.39,-.22,.52,.07,.11),t!=="scooter"&&o("box",11578016,.232,.36,-.54,.12,.12,.72);let d=new Pt(new cn(.01,.01,.01));d.visible=!1,r.add(d);let f=[];for(let p of c){let h=new Ut;h.position.set(0,a,p),Mt(h,"cylinder",2434601,0,0,0,a,.12,a).rotation.z=Math.PI/2,Mt(h,"cylinder",8750213,0,0,0,a*.62,.14,a*.62).rotation.z=Math.PI/2,bi(h,ts(h)),f.push(h),r.add(h);let v=p>0?t==="chopper"?-.62:-.21:.46;o("box",5988704,0,a+.22,p+(t==="chopper"&&p>0?-.18:0),.09,t==="chopper"&&p>0?.8:.49,.085).rotation.x=v}bi(r,ts(r).filter(p=>p!==d));let m=new Ut;return n.add(s),Ip({root:s,body:r,cabin:null,cracks:[],wheels:f,lamps:[],hood:d,bumpers:[],speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"bike",model:t,shape:"bike",spec:i,color:e,handling:i.handling,rider:null,door:m,doorTime:0,wheelSpin:0,handlebar:l,wheelRadius:a,wheelbase:c[1]-c[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}var Qv=new K,eM=new an;function Lp(n,e,t){let i=e.spec.seats?.[t]??e.spec.seats?.[e.spec.seats.length-1];if(!i)return;let[s,r]=i,[o,a]=e.spec.cabin.top,c=e.spec.open?r:Math.max(o+.07,Math.min(a-.03,r)),l=e.seatHip-.03,d=e.spec.open?n.look.height:Math.min(n.look.height,(e.spec.roof-l-.035)/1.1);n.root.scale.y=d,e.body.updateWorldMatrix(!0,!1),n.root.position.copy(e.body.localToWorld(Qv.set(s,l-.815*d,c))),n.root.quaternion.copy(e.body.getWorldQuaternion(eM)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.rifle&&(n.rifle.visible=!1);let f=e.spec.roof-e.seatHip<1.05;n.body.position.set(0,0,0),n.body.rotation.set(0,0,0);for(let m=0;m<2;m++)n.legs[m].rotation.set(f?-1.52:-1.44,0,0),n.shins[m].rotation.set(f?1.04:1.26,0,0),t===0?(n.arms[m].rotation.set(-.62,0,(m?-1:1)*.18),n.forearms[m].rotation.set(-.85,0,0)):(n.arms[m].rotation.set(-.32,0,(m?-1:1)*.08),n.forearms[m].rotation.set(-1.05,0,0))}var Cp=null,tM=new Vn(.28,.28),ca=new K,Rp=new K,ha=new K;function nM(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="rgba(235,242,240,.9)",e.lineWidth=1.6,e.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;e.moveTo(64,64);for(let r=1;r<=4;r++)e.lineTo(64+Math.cos(s+Math.sin(r*3.1+i)*.12)*r*14,64+Math.sin(s+Math.cos(r*2.3+i)*.12)*r*14)}for(let i of[9,20,33]){e.moveTo(64+i,64);for(let s=1;s<=24;s++)e.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}e.stroke(),e.fillStyle="rgba(250,250,245,.95)",e.beginPath(),e.arc(64,64,3.2,0,Math.PI*2),e.fill();let t=new Os(n);return t.colorSpace=un,new Kt({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:En})}function Su(n,e){if(!n.cabin||!e)return;Cp??=nM(),n.root.updateMatrixWorld(!0),ha.set(e[0],e[1],e[2]),n.body.worldToLocal(ha);let[t,i]=n.spec.cabin.top;Rp.set(0,(n.spec.belt+n.spec.roof)/2,(t+i)/2),ca.subVectors(ha,Rp),ca.y*=.35,ca.normalize();let s=new Pt(tM,Cp);s.position.copy(ha).addScaledVector(ca,.015),s.lookAt(ha.clone().add(ca)),s.rotation.z=Math.random()*Math.PI*2,s.renderOrder=3,n.body.add(s),n.cracks.push(s),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function Dp(n){let{belt:e,roof:t,width:i,cabin:s}=n.spec,r=Math.min(s.base[0],s.top[0]),o=Math.max(s.base[1],s.top[1]);return{z:(r+o)/2,halfZ:(o-r)/2,y:(e+t)/2+.02,halfY:(t-e)/2,halfX:i/2-.1}}function li(n,e,t=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,c=0,l=0,d=n.wheels.map(b=>{let{x:A,z:S}=b.position,x=kn(n.x+A*s+S*i,n.z-A*i+S*s);return S>0?o+=x:a+=x,A<0?c+=x:l+=x,x}),f=(o+a)/n.wheels.length;n.root.rotation.y=n.angle;let m=n.flat??[],p=r?0:((m[0]||m[2]?1:0)-(m[1]||m[3]?1:0))*.05;n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),n.wheelbase??2.64);let h=r?n.integrity<=0?1.25:-t*Math.min(.53,Math.abs(n.speed)*.039):t*Math.min(.09,Math.abs(n.speed)*.004),v=r?0:Math.atan2((l-c)*.5,(n.halfWidth??.97)*2)+p;n.body.rotation.z+=(h+v-n.body.rotation.z)*(e>0?Math.min(1,e*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-e),n.door.rotation.y=(r?1:-1)*Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let g=n.wheelRadius??.408,_=r?n.body.rotation.z:0;n.root.position.set(n.x,f+(r?Math.abs(Math.sin(_))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=t*.22),n.wheelSpin=(n.wheelSpin+n.speed*e/g)%(Math.PI*2),n.wheels.forEach((b,A)=>{let S=m[A];r||(b.position.y=d[A]-f+g-(S?g*.28:0)),b.scale.set(1,S?.72:1,S?1.12:1),b.rotation.set(n.wheelSpin,b.position.z>0?t*(r?.22:.23):0,0,"YXZ")});let T=100-n.integrity;n.hood.rotation.x=T*.0031+(n.damageFront>30?.18:0),n.hood.rotation.z=T*.0013;let R=n.hoodSize??(n.hoodSize=n.hood.scale.clone());n.hood.scale.set(R.x,R.y*(1+Math.min(.6,(n.damageFront??0)*.012)),R.z*(1-Math.min(.12,(n.damageFront??0)*.002)));for(let b of n.bumpers??[])b.state===1&&(b.mesh.rotation.x=b.end*.32,b.mesh.position.y=b.home.y-.12)}var iM=`
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
  }`,sM=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;function Np(n,e,t){let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3),c=new Float32Array(e),l=new Float32Array(e),d=new Float32Array(e),f=new Float32Array(e),m=new Float32Array(e),p=new Float32Array(e),h=new Float32Array(e),v=new Jt;v.setAttribute("position",new sn(i,3)),v.setAttribute("tint",new sn(s,3)),v.setAttribute("size",new sn(r,1)),v.setAttribute("alpha",new sn(o,1));let g=new Hn({vertexShader:iM,fragmentShader:sM,transparent:!0,depthWrite:!1,blending:t?Vo:Ss,uniforms:{scale:{value:520}}}),_=new Ro(v,g);_.frustumCulled=!1,_.visible=!1,_.renderOrder=4,n.add(_);let T=0;function R(S,x,w,z,D,N,G,U,B,Q,Z,Y=0,k=0){let F=T;T=(T+1)%e,i[F*3]=S,i[F*3+1]=x,i[F*3+2]=w,a[F*3]=z,a[F*3+1]=D,a[F*3+2]=N,s[F*3]=Z.r,s[F*3+1]=Z.g,s[F*3+2]=Z.b,c[F]=G,l[F]=G,d[F]=U,f[F]=B,m[F]=Q,p[F]=Y,h[F]=k,r[F]=U,o[F]=Q,_.visible=!0}function b(S){let x=!1;for(let w=0;w<e;w++){if(c[w]<=0){o[w]!==0&&(o[w]=0,r[w]=0,x=!0);continue}x=!0,c[w]-=S;let z=Math.exp(-h[w]*S);a[w*3]*=z,a[w*3+2]*=z,a[w*3+1]=a[w*3+1]*z+p[w]*S,i[w*3]+=a[w*3]*S,i[w*3+1]+=a[w*3+1]*S,i[w*3+2]+=a[w*3+2]*S,p[w]<0&&i[w*3+1]<.05&&(i[w*3+1]=.05,a[w*3+1]*=-.3);let D=1-Math.max(0,c[w])/l[w];r[w]=d[w]+(f[w]-d[w])*D,o[w]=m[w]*(1-D)*(D<.12?D/.12:1)}if(x)for(let w of["position","size","alpha","tint"])v.attributes[w].needsUpdate=!0;_.visible=x}function A(){c.fill(0),o.fill(0),r.fill(0),v.attributes.alpha.needsUpdate=!0,_.visible=!1}return{spawn:R,update:b,clear:A,material:g}}function Up(n){let e=Np(n,700,!1),t=Np(n,600,!0),i=new $e,s=(d,f)=>d+Math.random()*(f-d),r=320,o=new Fn(new Vn(1,1),new Kt({color:1315860,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),r);o.frustumCulled=!1,o.renderOrder=1;let a=new Ct().makeScale(0,0,0);for(let d=0;d<r;d++)o.setMatrixAt(d,a);n.add(o);let c=0,l=new Vt;return{update(d){e.update(d),t.update(d)},clear(){e.clear(),t.clear();for(let d=0;d<r;d++)o.setMatrixAt(d,a);o.instanceMatrix.needsUpdate=!0},setScale(d){e.material.uniforms.scale.value=d,t.material.uniforms.scale.value=d},engineSmoke(d,f,m,p){i.setRGB(p?.16:.5,p?.15:.48,p?.14:.45),e.spawn(d+s(-.2,.2),f,m+s(-.2,.2),s(-.3,.3),s(.9,1.5),s(-.3,.3),s(1.6,2.4),.5,p?2.4:1.8,p?.5:.32,i,0,.6)},tireSmoke(d,f,m){i.setRGB(.78,.76,.72),e.spawn(d,f,m,s(-.6,.6),s(.3,.8),s(-.6,.6),s(.8,1.3),.4,1.6,.3,i,0,1.4)},sparks(d,f,m,p=12,h=4){for(let v=0;v<p;v++)i.setRGB(1,s(.55,.85),s(.15,.35)),t.spawn(d,f,m,s(-h,h),s(.5,h*.9),s(-h,h),s(.18,.45),.09,.03,1,i,-9.8,.4)},flame(d,f,m,p=1){i.setRGB(1,s(.35,.6),.08),t.spawn(d+s(-.35,.35)*p,f,m+s(-.35,.35)*p,s(-.2,.2),s(1.4,2.4),s(-.2,.2),s(.4,.75),.75*p,.2,.85,i,0,.8),Math.random()<.45&&(i.setRGB(.13,.12,.11),e.spawn(d,f+.6,m,s(-.3,.3),s(1.2,2),s(-.3,.3),s(1.8,2.8),.7,2.8,.45,i,0,.5))},blood(d,f,m){i.setRGB(.48,.015,.025);for(let p=0;p<7;p++)e.spawn(d,f,m,s(-1.4,1.4),s(.6,2),s(-1.4,1.4),.34,.065,.025,.94,i,-9,.2)},explosion(d,f,m){i.setRGB(1,.9,.6),t.spawn(d,f+.6,m,0,0,0,.28,1.5,9,1,i);for(let p=0;p<46;p++){let h=Math.random()*Math.PI*2,v=s(.2,1),g=s(3,10);i.setRGB(1,s(.4,.75),s(.05,.2)),t.spawn(d,f+.5,m,Math.cos(h)*g*(1-v*.5),v*g,Math.sin(h)*g*(1-v*.5),s(.35,.8),s(.6,1.4),.2,.95,i,-2,1.5)}for(let p=0;p<30;p++){let h=Math.random()*Math.PI*2,v=s(1,4);i.setRGB(.1,.09,.085),e.spawn(d,f+.8,m,Math.cos(h)*v,s(1.5,4),Math.sin(h)*v,s(2.2,3.6),1.2,4.5,.7,i,0,.9)}this.sparks(d,f+.5,m,40,9)},skid(d,f,m,p,h=.012){let v=Math.hypot(m-d,p-f);v<.05||(l.position.set((d+m)/2,h+.013,(f+p)/2),l.rotation.set(-Math.PI/2,0,0),l.rotateZ(Math.atan2(m-d,p-f)),l.scale.set(.2,v+.04,1),l.updateMatrix(),o.setMatrixAt(c,l.matrix),c=(c+1)%r,o.instanceMatrix.needsUpdate=!0)}}}function Tc(n,e,t,i){let s=Math.hypot(e,i),r=Math.sin(n.angle)*e+Math.cos(n.angle)*i,o=Math.cos(n.angle)*e-Math.sin(n.angle)*i;n.ragdoll={vx:e,vy:t,vz:i,y:n.ragdoll?.y??0,t:0,rest:0,rising:0,spinX:(r>=0?1:-1)*(2.5+s*.55),spinZ:-o*.35,tiltX:0,tiltZ:0},n.pushX=0,n.pushZ=0}function Ac(n,e,t,i){let s=n.ragdoll;if(!s)return!1;s.t+=e;let r=n.model,o=s.y>.02||Math.abs(s.vy)>.4,a=n.x+s.vx*e,c=n.z+s.vz*e;if(i(a,n.z)?s.vx*=-.35:n.x=a,i(n.x,c)?s.vz*=-.35:n.z=c,s.vy-=9.8*e,s.y+=s.vy*e,s.y<=0){s.y=0,s.vy=Math.abs(s.vy)>2.2?-s.vy*.28:0;let f=Math.exp(-e*6);s.vx*=f,s.vz*=f,s.spinX*=Math.exp(-e*7),s.spinZ*=Math.exp(-e*7)}s.tiltX+=s.spinX*e,s.tiltZ+=s.spinZ*e;let l=!o&&Math.hypot(s.vx,s.vz)<.5;if(l){let f=Math.round(s.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;s.tiltX+=(f-s.tiltX)*Math.min(1,e*8),s.tiltZ+=(0-s.tiltZ)*Math.min(1,e*6),s.rest+=e}let d=Math.sin(s.tiltX)>=0?1:-1;if(n.health>0&&s.rest>1.1){s.rising+=e/.65;let f=Math.min(1,s.rising),m=Math.sign(Math.sin(s.tiltX))||1;if(s.tiltX=m*Math.PI/2*(1-f),s.tiltZ*=1-f,f>=1)return n.ragdoll=null,r.root.rotation.set(0,n.angle,0),!1}if(r.root.rotation.set(s.tiltX,n.angle,s.tiltZ),r.root.position.set(n.x,t+s.y+Math.max(0,-Math.cos(s.tiltX)*Math.cos(s.tiltZ))*1.88+Math.hypot(Math.sin(s.tiltX),Math.sin(s.tiltZ))*.31,n.z),o||!l){let f=s.t*13;r.body.position.set(0,0,0),r.body.rotation.set(Math.sin(f*.7)*.25,0,Math.cos(f*.6)*.2),r.arms[0].rotation.set(-1.4+Math.sin(f)*1.1,0,-.6-Math.cos(f*.8)*.5),r.arms[1].rotation.set(-1.2+Math.cos(f*1.1)*1.1,0,.6+Math.sin(f*.9)*.5),r.forearms[0].rotation.set(-.4-Math.sin(f*1.3)*.5,0,0),r.forearms[1].rotation.set(-.4-Math.cos(f*1.2)*.5,0,0),r.legs[0].rotation.set(Math.sin(f*.9)*.9,0,-.2),r.legs[1].rotation.set(-Math.sin(f*.8)*.9,0,.2),r.shins[0].rotation.set(.4+Math.abs(Math.sin(f))*.6,0,0),r.shins[1].rotation.set(.4+Math.abs(Math.cos(f))*.6,0,0),r.pistol.visible=!1,r.rifle&&(r.rifle.visible=!1)}else oa(r,2,d);return r.shadow.visible=!1,!0}var Jr=2.05,rM=5.37,Fp=n=>Math.min(Math.abs(n+57),Math.abs(n+19),Math.abs(n-19),Math.abs(n-57));function Rc(n,e,t,i){let{width:s,length:r}=ss(i),o=Math.sin(t),a=Math.cos(t);for(let c of[-1,1])for(let l of[-1,1]){let d=n+o*(r-.26)*c+a*(s-.09)*l,f=e+a*(r-.26)*c-o*(s-.09)*l;if(Math.min(Fp(d),Fp(f))>rM||Math.max(Math.abs(d),Math.abs(f))>62.45)return!1}return!0}var Ec=7.15;function oM(n){let e=[];return n.forEach((t,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(t[0]-s[0]),a=Math.sign(t[1]-s[1]),c=Math.sign(r[0]-t[0]),l=Math.sign(r[1]-t[1]),d={x:t[0]-a*Jr-o*Ec,z:t[1]+o*Jr-a*Ec},f={x:t[0]-l*Jr+c*Ec,z:t[1]+c*Jr+l*Ec},m=o===c&&a===l,p={x:t[0]-(m?a:a+l)*Jr,z:t[1]+(m?o:o+c)*Jr},h={x:t[0],z:t[1],id:t.join(",")};for(let v=0;v<=6;v++){let g=v/6,_=1-g;e.push({x:_*_*d.x+2*_*g*p.x+g*g*f.x,z:_*_*d.z+2*_*g*p.z+g*g*f.z,junction:h,curve:!m,angle:Math.atan2(o,a)})}}),e}var $s=(n,e,t,i)=>[[n,e],[n,i],[t,i],[t,e]],aM=[$s(-57,-57,57,57),$s(-57,-19,19,57).reverse(),$s(-19,-57,57,19),$s(-19,-19,19,19).reverse(),$s(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],$s(-57,-57,57,57).reverse(),$s(-19,-57,57,57).reverse()];function lM(n){return n.flatMap((e,t)=>{let i=n[(t+1)%n.length],s=e[0]===i[0]?1:0,r=1-s,o=On.filter(a=>a>Math.min(e[s],i[s])&&a<Math.max(e[s],i[s]));return i[s]<e[s]&&o.reverse(),[e,...o.map(a=>r===0?[e[0],a]:[a,e[1]])]})}var zp=aM.map(n=>oM(lM(n))),cM=[1,3,1,1,5,5,7,10];function Kr(n,e,t=0){let i=zp[e],s=(cM[e]*7+t)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;Qn(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+e%4*1.02,stuck:0,routeIndex:e,pass:null},n.stolen=!1,n.abandoned=0}function $r(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=t*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:vt(s*1.9,-1,1),throttle:vt((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function wu(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=ss(n.shape??n.kind),a=n.kind==="bike",c=i;for(let l of e){if(l===n||re(l,n)>20)continue;let d=l.x-n.x,f=l.z-n.z,m=d*s+f*r,p=Math.abs(d*r-f*s),h=ss(l.shape??l.kind,l.angle-n.angle);if(m<.2||p>o.width+h.width+.16)continue;let v=Math.max(0,m-o.length-h.length-(a?.39:.64)),g=Math.max(0,l.vx*s+l.vz*r);c=Math.min(c,g+v*.87)}for(let l of t){if(l.down>0||l.health<=0||l.seated||re(l,n)>11)continue;let d=l.x-n.x,f=l.z-n.z,m=d*s+f*r,p=Math.abs(d*r-f*s);m>0&&p<o.width+.4&&(c=Math.min(c,Math.max(0,m-o.length-.9)*.94))}return c}function Op(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...e.filter(l=>l!==n&&Math.hypot(l.vx,l.vz)<2).map(l=>({other:l,radius:1.05})),...t.filter(l=>l.down<=0&&l.health!==0&&!l.seated).map(l=>({other:l,radius:.43}))].find(({other:l,radius:d})=>{let f=l.x-n.x,m=l.z-n.z,p=f*s+m*r;return p>2.25&&p<13.4&&Math.abs(f*r-m*s)<d+1.05});if(!a)return null;let c=(l,d)=>{let f=l.x-n.x,m=l.z-n.z,p=f*s+m*r;return p>-3&&p<23&&Math.abs(f*r-m*s-d)<2.3};for(let l of[2.72,-2.72]){if(e.some(m=>m!==n&&m!==a.other&&c(m,l))||t.some(m=>m!==a.other&&m.down<=0&&c(m,l)))continue;let d=n.x+s*8+r*l,f=n.z+r*8-s*l;if(ns(d,f,n.angle,i,n.shape??n.kind)&&ns((d+n.x)*.5,(f+n.z)*.5,n.angle,i,n.shape??n.kind))return{x:d,z:f}}return null}function Bp(n,e,t,i){let s=n.kind==="bike",r=ss(n.shape??n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),c=g=>({along:(g.x-n.x)*o+(g.z-n.z)*a,across:(g.x-n.x)*a-(g.z-n.z)*o}),l=[...e.filter(g=>g!==n).map(g=>({actor:g,...ss(g.shape??g.kind,g.angle-n.angle),moving:!0})),...t.filter(g=>g.health>0&&!g.seated&&!g.down).map(g=>({actor:g,width:.34,length:.34,moving:!1}))].map(g=>({...g,...c(g.actor)})),d=l.filter(({actor:g,along:_,across:T,width:R,length:b,moving:A})=>_>Math.max(s?1.2:2.4,r.length+b-.3)&&_<19&&Math.abs(T)<r.width+R+.16&&(!A||Math.hypot(g.vx,g.vz)<(s?8:6)));d.sort((g,_)=>g.along-_.along);let f=d[0];if(!f||f.along-r.length-f.length<(s?1.85:2.45))return null;let m=r.width+f.width+(s?.23:.38),p=s?Math.max(1.12,m):2.95,h=s?[p,-p,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[p,-p,3.45,-3.45],v=f.along+r.length+f.length+(s?3:4.1);for(let g of h){if(Math.abs(f.across-g)<m)continue;let _=r.length+(s?3.9:5.8);if(!l.every(x=>{if(x===f)return!0;let w=x.moving?Math.max(0,-x.actor.vx*o-x.actor.vz*a):0;return x.along<-r.length-x.length-.2||x.along>v+_+Math.min(10,w)||Math.abs(x.across-g)>r.width+x.width+(s?.25:.46)}))continue;let R=Math.max(s?2.4:3.8,Math.min(s?5:6.1,f.along-r.length+1.2)),b=kn(n.x,n.z),A=Math.ceil(v/(s?.72:.92)),S=!0;for(let x=1;x<=A;x++){let w=x*v/A,z=g*Math.min(1,w/R),D=n.x+o*w+a*z,N=n.z+a*w-o*z,G=s?.27:.9;if(Math.abs(kn(D+a*G,N-o*G)-b)>=.08||Math.abs(kn(D-a*G,N+o*G)-b)>=.08||!Hr({x:D,z:N,angle:n.angle,kind:n.kind,shape:n.shape},i,e,n)){S=!1;break}}if(S)return{x:n.x,z:n.z,sx:o,sz:a,offset:g,obstacle:f.actor,phase:"out",age:0,clearAfter:r.length+f.length+(s?.9:1.2)}}return null}function hM(n,e,t,i,s=[]){e.age+=i;let r=n.kind==="bike",o=ss(n.shape??n.kind),{sx:a,sz:c,offset:l}=e,d=(n.x-e.x)*a+(n.z-e.z)*c,f=(n.x-e.x)*c-(n.z-e.z)*a,m=(e.obstacle.x-e.x)*a+(e.obstacle.z-e.z)*c;if(e.age>(r?10:13)||e.phase==="merge"&&Math.abs(f)<.53)return null;e.phase==="out"&&Math.abs(f-l)<(r?.28:.55)&&(e.phase="pass"),e.phase!=="merge"&&d>m+e.clearAfter&&t.every(b=>{if(b===n)return!0;let A=ss(b.shape??b.kind,b.angle-Math.atan2(a,c));return Math.abs((b.x-e.x)*c-(b.z-e.z)*a)>o.width+A.width+.3||Math.abs((b.x-n.x)*a+(b.z-n.z)*c)>o.length+A.length+1.25})&&(e.phase="merge");let p=e.phase==="merge"?0:l,h=t.some(R=>{if(R===n||R===e.obstacle)return!1;let b=(R.x-n.x)*a+(R.z-n.z)*c,A=(R.x-e.x)*c-(R.z-e.z)*a,S=ss(R.shape??R.kind,R.angle-Math.atan2(a,c));return b>0&&b<o.length+S.length+2.7&&Math.abs(A-p)<o.width+S.width+.28})||s.some(R=>{if(R.health<=0||R.seated||R.down)return!1;let b=(R.x-n.x)*a+(R.z-n.z)*c,A=(R.x-e.x)*c-(R.z-e.z)*a;return b>0&&b<o.length+2.1&&Math.abs(A-p)<o.width+.45}),v=e.phase==="out"?r?2.3:4.4:r?4.8:7,g={x:e.x+a*(d+v)+c*p,z:e.z+c*(d+v)-a*p},_=e.phase==="out"?r?4.5:4.8:r?8.1:6.5,T=$r(n,g,h?0:_);return h&&(T.throttle=0),T}function Cc(n,e,t,i,s){return n.driver?.cityTraffic&&!Rc(e.x,e.z,e.angle,n.shape??n.kind)?!1:Hr(e,s,t,n)&&i.every(r=>r.health<=0||r.seated||r.down||!is(e,r.x,r.z,.26))}function uM(n,e,t,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=t.filter(d=>d!==n&&re(n,d)<29),c=null,l=-1/0;for(let d of[0,-.62,.62,-1,1]){let f={x:n.x,z:n.z,angle:n.angle,kind:n.kind,shape:n.shape},m=0;for(let _=0;_<(r?13:19)&&(f.angle-=d*.18*(r?.75:.56),f.x-=Math.sin(f.angle)*.18,f.z-=Math.cos(f.angle)*.18,!!Cc(n,f,t,i,s));_++)m+=.18;if(m<(r?.9:1.35))continue;Cc(n,f,t,i,s)||(f.x+=Math.sin(f.angle)*.18,f.z+=Math.cos(f.angle)*.18,f.angle+=d*.18*(r?.75:.56));let p={...f},h=0;for(let _=0;_<27;_++){let T=Math.atan2(e.x-p.x,e.z-p.z);if(p.angle=Bn(p.angle,T,r?.13:.092),p.x+=Math.sin(p.angle)*.24,p.z+=Math.cos(p.angle)*.24,!Cc(n,p,t,i,s))break;h+=.24}let v=r&&Bp(f,a,i,s),g=h*.67+(re(n,e)-re(p,e))*.38+m*.31-Math.abs(d)*.12+(v?4.6:0);g>l&&(l=g,c={steer:d,pace:o,distance:Math.max(.7,m-.26),age:0,x:n.x,z:n.z})}return c}function Tu(n,e,t,i,s,r,o,a,c=!0){let l=n.kind==="bike",d=e.recoverPosition;e.recoverPosition={x:n.x,z:n.z};let f=d&&re(d,n)>o*.57;if(e.recoverRetry=Math.max(0,(e.recoverRetry??0)-o),e.maneuver){let p=e.maneuver;p.age+=o;let h=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),v={x:n.x-Math.sin(n.angle)*h,z:n.z-Math.cos(n.angle)*h,angle:n.angle,kind:n.kind,shape:n.shape};return re(n,p)>=p.distance||p.age>(l?2.4:2.8)||!Cc(n,v,i,s,r)?(e.maneuver=null,e.recoverWait=0,e.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:p.steer,throttle:n.speed>-p.pace?vt((n.speed+p.pace)*-.64,-.54,-.05):0,brake:!1}}e.recoverWait=!c||f||re(n,t)<1.2?0:(e.recoverWait??0)+o;let m=l?1.08:1.45;return e.recoverRetry>0||e.recoverWait<m||n.integrity<=0?a:(e.maneuver=uM(n,t,i,s,r),e.maneuver?(e.recoverWait=0,{steer:e.maneuver.steer,throttle:-.47,brake:!1}):(e.recoverRetry=.85,a))}function kp(n,e,t,i,s,r,o){for(let[a,c]of r)(!c.driver||c.integrity<=0||re(c,c.driver.route[c.driver.next].junction)>11)&&r.delete(a);for(let a of n){let c=a.driver;if(!c||a.burning||a.wrecked||a.integrity<=0){a!==e.player&&Math.hypot(a.vx,a.vz)>.06?ai(a,s,{throttle:0,steer:0,brake:!0},i,e.vehicles):a!==e.player&&(a.impact=Math.max(0,a.impact-s*21));continue}let{route:l}=c,d=e.keepToStreet?Rc:null;c.cityTraffic=!!d,c.passRetry=(c.passRetry??0)-s,c.detourRetry=Math.max(0,(c.detourRetry??0)-s);let f=a.kind==="bike",m=l[c.next],p=Math.sin(a.angle),h=Math.cos(a.angle);for(let G=0;!c.maneuver&&G<6;G++){let U=m.x-a.x,B=m.z-a.z;if(Math.hypot(U,B)>2.55&&(U*p+B*h>0||Math.hypot(U,B)>5))break;c.next=(c.next+1)%l.length,m=l[c.next]}let{junction:v}=m,g=re(a,v),_=r.get(v.id);!_&&g<7.1&&r.set(v.id,a);let T=c.cruise*(f?1.13:1),R=m.curve&&g<12?Math.min(f?5.9:4.7,T):T,b=_&&_!==a&&g<15;b&&(R=Math.min(R,Math.max(0,g-7.4)*.96));let A=!1;if(o){let G=(v.x-a.x)*p+(v.z-a.z)*h,U=o.state(v.id,Math.abs(p)>Math.abs(h)?"x":"z"),B=7.6+(a.halfLength??2.4);if(U!=="green"&&G>B-.5&&G<B+40){let Q=G-B;(U==="red"||Q>a.speed*a.speed/11)&&(R=Math.min(R,Math.max(0,Q)*.8),A=!0)}}let S=wu(a,e.vehicles,t,R);c.passRetry<=0&&!c.pass&&!c.maneuver&&!b&&!A&&S<R*(f?.88:.78)&&(!m.curve||g>(f?8:11))&&(c.pass=Bp(a,e.vehicles,t,i),c.passRetry=c.pass?.age??(f?.1:.55+c.routeIndex%4*.13));let x=c.pass?hM(a,c.pass,e.vehicles,s,t):null;x||(c.pass=null);let w=x??$r(a,m,S);!x&&S<.4&&(w.throttle=0);let z=a.x,D=a.z;if(d&&c.stuck>5&&!A&&!b&&!c.maneuver&&c.detourRetry===0){c.detourRetry=6;let G=dM(a,m);G&&(c.route=G.route,c.next=G.index,c.pass=null,c.recoverWait=0,c.stuck=0)}let N=Tu(a,c,m,e.vehicles,t,i,s,w,!A&&!b);c.maneuver&&(c.pass=null),ai(a,s,N,i,e.vehicles,d),c.stuck=!A&&Math.hypot(a.x-z,a.z-D)<s*.62?c.stuck+s:A?c.stuck:Math.max(0,c.stuck-s*2)}}function dM(n,e){if(re(n,e.junction)>15)return null;let t=Math.sin(n.angle),i=Math.cos(n.angle),s=null,r=1/0;for(let o of zp)for(let a=0;a<o.length;a++){let c=o[a],l=o[(a+3)%o.length];if(c.junction.id!==e.junction.id||re(l,e)<4)continue;let d=c.x-n.x,f=c.z-n.z,m=Math.hypot(d,f);if(m<3||m>13||d*t+f*i<0||re(l,e)<re(c,e))continue;let p=m+Math.abs(d*i-f*t)*1.5;p<r&&(r=p,s={route:o,index:a})}return s}function Ic(n,e,t,i){return re(n,t)>13&&ns(n.x,n.z,n.angle,i,n.shape??n.kind)&&e.every(s=>re(s,n)>5.2)}var fM=[];function Au(n,e,t,i,s){let r=-1/0,o=1/0,a=-1,c=-1;for(let l=0;l<3;l++){let d=n[l],f=e[l],m=t[l],p=t[l+3];if(Math.abs(f)<1e-5){if(d<m||d>p)return 1/0;continue}let h=1/f,v=(f>0?m-d:p-d)*h,g=(f>0?p-d:m-d)*h;if(v>r&&(r=v,a=l*2+ +(f<0)),g<o&&(o=g,c=l*2+ +(f>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=c,Math.max(0,o))}function pM(n,e,t,i){if(!i)return e[1]<-1e-5&&n[1]>=0?-n[1]/e[1]:1/0;if(e[1]>1e-5)return 1/0;let s=o=>n[1]+e[1]*o-i(n[0]+e[0]*o,n[2]+e[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,t/12);if(r<1e-5)return 1/0;for(let o=0;o<t;o+=r){let a=o,c=Math.min(o+r,t);if(!(s(c)>0)){for(let l=0;l<10;l++){let d=(a+c)*.5;s(d)>0?a=d:c=d}return c}}return 1/0}function Gp(n,e,t,i,s,r){let o=s,a=null,c=null,l=null,d=-1,f=0,m={face:-1};for(let h of t){if(h.off)continue;let v=h.bounds??[h.x-h.w*.5,h.y0??h.base??0,h.z-h.d*.5,h.x+h.w*.5,h.h,h.z+h.d*.5],g=Au(n,e,v,o,m);g>=o||(o=g,c=h,l="solid",d=m.face)}let p=pM(n,e,o,r);p<o&&(o=p,c=null,l="ground",d=3);for(let h of i){let v,g=h.oriented;if(g){let{center:_,half:T,angle:R}=g,b=n[0]-_[0],A=n[1]-_[1],S=n[2]-_[2],x=Math.sin(R),w=Math.cos(R),z=[w*b-x*S,A,x*b+w*S],D=[w*e[0]-x*e[2],e[1],x*e[0]+w*e[2]];v=Au(z,D,[-T[0],-T[1],-T[2],T[0],T[1],T[2]],o,m)}else if(h.bounds)v=Au(n,e,h.bounds,o,m);else continue;v>=o||(o=v,a=h,c=null,l="target",d=m.face,f=g?.angle??0)}return{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}}function ua(n,e,t,i,s=52){let{distance:r,hit:o}=Gp(n,e,t,i,s,null);return{distance:r,hit:o}}function Pc(n,e,t,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}=Gp(n,e,t,i,s,r),m=n.map((h,v)=>h+e[v]*o),p=null;if(d!==-1&&(p=[0,0,0],p[Math.floor(d/2)]=d%2?1:-1,f)){let[h,v,g]=p,_=Math.sin(f),T=Math.cos(f);p=[T*h+_*g,v,-_*h+T*g]}return{distance:o,hit:a,point:m,normal:p,solid:c,surface:l}}function Vp(n,e,t,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...e),c=a>1e-5?e.map(h=>h/a):[0,0,1],l=Pc(n,c,i,s,r,{ground:o}),d=l.point.map((h,v)=>h-t[v]),f=d.reduce((h,v,g)=>h+v*c[g],0),m=Math.hypot(...d),p=f>.025&&m>1e-5?d.map(h=>h/m):c;return{direction:p,sight:l,impact:Pc(t,p,i,s,r,{ground:o})}}function jr(n,e,t){let i=e.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return ua(n,r,t,fM,s).distance>=s-.01}function Qr(n,e,t,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let c=e.x-n.x,l=e.z-n.z,d=Math.hypot(c,l),f=(n.ground??0)+r,m=(e.ground??0)+o;if(Math.hypot(d,m-f)>s)return!1;if(d>1e-5){let p=n.angle??0;if((Math.sin(p)*c+Math.cos(p)*l)/d<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(m-f,d)+(n.pitch??0))>a*.5?!1:jr([n.x,f,n.z],[e.x,m,e.z],t)}function Hp(n,e,t,i){let s=null,r=1.86;for(let o of e){if(o.down>0)continue;let a=o.x-n.x,c=o.z-n.z,l=Math.hypot(a,c),d=Math.sin(n.angle)*a+Math.cos(n.angle)*c;l>=r||d<l*.36||!jr([n.x,t+1,n.z],[o.x,t+1,o.z],i)||(s=o,r=l)}return s}var eo=44,js=12,Eu=new K(0,1,0),mM=new K(0,0,1),Rs=new an,rs=new Ct,Ui=new K,Lc=new K,Dc=new K,gM=new ot;function xM(){let e=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),c=Math.hypot(r,o),l=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,d=c<.35+Math.sin(a*4)*.06,f=(s*239+i*167)%19/19,m=d?9+f*27:101+f*64,p=d?.99:Math.min(.84,Math.max(0,(l-c)*3.6))*(.51+f*.49),h=(i*32+s)*4;e[h]=m,e[h+1]=m*.92,e[h+2]=m*.81,e[h+3]=Math.round(p*255)}let t=new zs(e,32,32,jn);return t.colorSpace=un,t.magFilter=vn,t.minFilter=vn,t.needsUpdate=!0,t}function Nc(n,e,t,i){let s=new Fn(e,t,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(ac),n.add(s),s}function _M(n){let e=new Vn(1,1),t=new gs(new Float32Array(eo),1);t.setUsage(ac),e.setAttribute("markAlpha",t);let i=new Kt({map:xM(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=Nc(n,e,i,eo);return s.renderOrder=3,{mesh:s,fade:t}}function Wp(n){let{mesh:e,fade:t}=_M(n),i=new Kt({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=Nc(n,new zn(.015,.015,1,5),i,js),r=new Kt({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=Nc(n,new Ki(1,0),r,js),a=new Kt({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),c=Nc(n,new $i(1),a,js),l=Array.from({length:js},()=>({age:1/0,distance:0,point:new K,start:new K,direction:new K,surface:null})),d=Array.from({length:eo},()=>({time:0,life:0,point:new K,normal:new K,attachment:null,radius:0})),f=0,m=0,p=new Ct().makeScale(0,0,0),h=new $e(16768142),v=new $e(16754545);function g(){for(let R=0;R<js;R++)l[R].age=1/0,s.setMatrixAt(R,p),o.setMatrixAt(R,p),c.setMatrixAt(R,p);for(let R=0;R<eo;R++)d[R].time=0,d[R].attachment=null,e.setMatrixAt(R,p),t.setX(R,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=e.instanceMatrix.needsUpdate=t.needsUpdate=!0,f=m=0}g();function _(R,b,{enemy:A=!1,mark:S=b.surface==="solid"||b.surface==="ground",attach:x=null}={}){let w=l[f],z=f;if(f=(f+1)%js,w.start.fromArray(R),w.point.fromArray(b.point),w.distance=w.start.distanceTo(w.point),w.direction.subVectors(w.point,w.start).normalize(),w.surface=b.surface,w.age=0,s.setColorAt(z,A?v:h),s.instanceColor.needsUpdate=!0,S&&b.normal&&b.surface){let D=d[m];m=(m+1)%eo,D.life=(b.surface==="ground"?8:13)+Math.random()*4,D.time=D.life,D.point.copy(w.point),D.normal.fromArray(b.normal).normalize(),D.attachment=x,D.radius=.053+Math.random()*.031,x&&(x.updateWorldMatrix(!0,!1),x.worldToLocal(D.point),D.normal.transformDirection(rs.copy(x.matrixWorld).invert()))}}function T(R){let b=!1,A=!1;for(let S=0;S<js;S++){let x=l[S];if(!Number.isFinite(x.age))continue;b=!0,x.age+=R;let w=234,z=Math.min(x.distance,x.age*w+1.7),D=Math.max(0,x.age*w-3.1),N=z-D;if(N>.018){Ui.copy(x.start).addScaledVector(x.direction,(z+D)*.5),Rs.setFromUnitVectors(Eu,x.direction);let U=Math.min(1,N/1.3);rs.compose(Ui,Rs,Lc.set(U,N,U)),s.setMatrixAt(S,rs)}else s.setMatrixAt(S,p);if(x.age<.071){let U=Math.max(.025,.084-x.age*.78);Rs.setFromUnitVectors(Eu,x.direction),Ui.copy(x.start).addScaledVector(x.direction,.052),rs.compose(Ui,Rs,Lc.set(U,U*2.2,U)),o.setMatrixAt(S,rs)}else o.setMatrixAt(S,p);let G=x.age-x.distance/w;if(x.surface&&G>=0&&G<.13){let U=Math.max(.006,.041-G*.27);Ui.copy(x.point).addScaledVector(x.direction,-(.039+G*.38)),Rs.setFromUnitVectors(Eu,x.direction),rs.compose(Ui,Rs,Lc.set(U,U*2.14,U)),c.setMatrixAt(S,rs)}else c.setMatrixAt(S,p);x.age>x.distance/w+.14&&(x.age=1/0)}for(let S=0;S<eo;S++){let x=d[S];if(!(x.time<=0)){if(A=!0,x.time-=R,x.time<=0||x.attachment&&!x.attachment.visible){x.time=0,x.attachment=null,e.setMatrixAt(S,p),t.setX(S,0);continue}Ui.copy(x.point),Dc.copy(x.normal),x.attachment&&(x.attachment.updateWorldMatrix(!0,!1),Ui.applyMatrix4(x.attachment.matrixWorld),Dc.applyNormalMatrix(gM.getNormalMatrix(x.attachment.matrixWorld))),Ui.addScaledVector(Dc,.014),Rs.setFromUnitVectors(mM,Dc),rs.compose(Ui,Rs,Lc.set(x.radius,x.radius,x.radius)),e.setMatrixAt(S,rs),t.setX(S,Math.min(1,x.time*.57))}}b&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0),A&&(e.instanceMatrix.needsUpdate=t.needsUpdate=!0)}return{emit:_,update:T,reset:g}}var to=.42,Qs=.145,Xp=n=>.94*n,Cu=n=>n*n*(3-2*n),da=(n,e,t)=>n+(e-n)*t;function yM(n){return n<.065?-.32*Cu(n/.065):n<Qs?da(-.32,1,Cu((n-.065)/(Qs-.065))):n<.182?da(1,.89,(n-Qs)/(.182-Qs)):.89*(1-Cu((n-.182)/(to-.182)))}function Ru(n,{aim:e=!1,punch:t=0,pitch:i=0,hand:s=0,walking:r=!1}={}){if(!e&&t<=0)return;let o=n.arms[s],a=n.arms[1-s],c=n.forearms[s],l=n.forearms[1-s],d=s===0?1:-1,f=t>0?yM(vt(to-t,0,to)):0,m=Math.max(0,f),p=Math.max(0,-f),h=vt(i,-.64,.53)*.62,v=.07+m*.2-p*.08;n.body.rotation.set(v,d*(.12+m*.46-p*.52),d*(-.02-m*.05)),n.body.position.y+=Xp(1-Math.cos(v))-.04-m*.03,n.body.position.z+=Xp(-Math.sin(v))+m*.12;let[g,_]=n.legs,[T,R]=n.shins,b=s===0?g:_,A=s===0?_:g,S=s===0?T:R,x=s===0?R:T;r||(A.rotation.set(-.32-m*.08,0,0),x.rotation.set(.34,0,0),b.rotation.set(.26+m*.16,0,0),S.rotation.set(.18-m*.1,0,0)),o.rotation.set(da(-.86,-1.66+h,m)+p*.7,d*(.1-m*.08),d*da(.24,-.04,m)-d*p*.25),c.rotation.set(da(-1.62,-.04,m)-p*.2,0,d*(.1-m*.1)),a.rotation.set(-.98+m*.06,-d*.12,-d*.22),l.rotation.set(-1.78,0,-d*.08),n.pistol.visible=!1}function We(n){return document.getElementById(n)}function qp(n,e){let t=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=We("stick"),c=We("nub"),l=We("look"),d=We("game"),f=We("view"),m=-1,p=-1,h=[],g=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",_=U=>{g=U,We("touch").hidden=U!=="touch",d.classList.toggle("touching",U==="touch")};_(g);let T=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","KeyB","Digit1","Digit2","Digit3","Digit4","Escape"]),R="",b=0,A=!1;window.addEventListener("keydown",U=>{if(!(!T.has(U.code)||U.target instanceof HTMLSelectElement&&!e())){if((e()||U.code==="Escape")&&U.preventDefault(),U.code==="Escape"){U.repeat||n();return}if(e()&&(_("keyboard"),t.add(U.code),!U.repeat)){U.code==="KeyE"&&i.add("interact"),U.code==="KeyF"&&i.add("fire"),U.code==="KeyR"&&i.add("punch"),U.code==="KeyG"&&i.add("recruit"),U.code==="KeyV"&&i.add("weapon"),U.code==="Space"&&i.add("jump"),U.code==="KeyB"&&i.add("sell");let B={Digit1:"follow",Digit2:"wait",Digit3:"attack"};B[U.code]&&(R=B[U.code])}}}),window.addEventListener("keyup",U=>{U.code==="Digit4"&&t.has("Digit4")&&!A&&(R="dealer"),t.delete(U.code)});function S(){t.clear(),b=0,A=!1,R="",i.clear(),s.clear(),o.x=0,o.y=0,c.style.transform="",m=-1,p=-1,r.x=0,r.y=0,r.aim=!1,We("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",S),f.addEventListener("contextmenu",U=>U.preventDefault()),f.addEventListener("wheel",U=>{!e()||!U.deltaY||(U.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(x),x=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let x=0;f.addEventListener("pointerdown",U=>{e()&&U.pointerType==="touch"&&_("touch")}),window.addEventListener("mousedown",U=>{if(!(!e()||document.pointerLockElement!==f&&(!(U.target instanceof Node)||!f.contains(U.target)))){if(U.button===0&&document.pointerLockElement!==f&&f.requestPointerLock){let B=f.requestPointerLock();B&&B.catch(()=>{})}_("keyboard"),U.button===0&&(i.add("fire"),s.add("mouseFire")),U.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",U=>{U.button===0&&s.delete("mouseFire"),U.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",U=>{!e()||g!=="keyboard"||U.pointerType==="touch"||(document.pointerLockElement===f||U.target===f||f.contains(U.target))&&(r.x+=U.movementX,r.y+=U.movementY)});function w(U){let B=a.getBoundingClientRect(),Q=U.clientX-B.left-B.width/2,Z=U.clientY-B.top-B.height/2,Y=B.width*.37,k=Math.max(Y,Math.hypot(Q,Z));o.x=Q/k,o.y=Z/k,c.style.transform="translate("+o.x*Y+"px,"+o.y*Y+"px)"}a.addEventListener("pointerdown",U=>{m===-1&&(_("touch"),m=U.pointerId,a.setPointerCapture(U.pointerId),w(U))}),a.addEventListener("pointermove",U=>{U.pointerId===m&&w(U)}),a.addEventListener("lostpointercapture",U=>{U.pointerId===m&&(m=-1,o.x=0,o.y=0,c.style.transform="")});let z=0,D=0;l.addEventListener("pointerdown",U=>{p===-1&&(p=U.pointerId,z=U.clientX,D=U.clientY,l.setPointerCapture(U.pointerId))}),l.addEventListener("pointermove",U=>{U.pointerId===p&&(r.x+=(U.clientX-z)*1.45,r.y+=(U.clientY-D)*1.45,z=U.clientX,D=U.clientY)}),l.addEventListener("lostpointercapture",U=>{U.pointerId===p&&(p=-1)});let N=We("gang-menu");for(let U of N.querySelectorAll("button"))U.addEventListener("pointerdown",B=>{B.preventDefault(),R=U.dataset.order??"",N.hidden=!0,We("gang").setAttribute("aria-expanded","false")});We("gang").addEventListener("pointerdown",U=>{U.preventDefault(),_("touch"),N.hidden=!N.hidden,We("gang").setAttribute("aria-expanded",String(!N.hidden))});for(let U of["interact","fire","aim","sprint","punch","jump","weapon","recruit","sell"]){let B=We(U);B.addEventListener("pointerdown",Q=>{Q.preventDefault(),_("touch"),B.setPointerCapture(Q.pointerId),U==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),B.setAttribute("aria-pressed",String(s.has("aim")))):U==="sprint"||U==="fire"?(s.add(U),U==="fire"&&i.add(U)):i.add(U)}),(U==="sprint"||U==="fire")&&B.addEventListener("lostpointercapture",()=>s.delete(U))}let G=!1;return{clear:S,read(U,B){G!==U&&(s.delete("aim"),We("aim").setAttribute("aria-pressed","false"),G=U);let Q=Array.from(navigator.getGamepads?.()??[]).find(de=>de?.connected&&de.mapping==="standard"),Z=Q?.buttons.map(de=>de.pressed||de.value>.45)??[],Y=de=>Z[de]&&!h[de],k=Array.from({length:4},(de,Ae)=>ip(Q?.axes[Ae]));(Z.some(Boolean)||k.some(de=>Math.abs(de)>.1))&&_("pad"),(Y(9)||!e()&&Y(0))&&n();let V=Number(t.has("KeyD")||t.has("ArrowRight"))-Number(t.has("KeyA")||t.has("ArrowLeft")),q=Number(t.has("KeyW")||t.has("ArrowUp"))-Number(t.has("KeyS")||t.has("ArrowDown")),X=(Q?.buttons[7]?.value??0)-(Q?.buttons[6]?.value??0),pe=t.has("Digit4")||!!Z[5];pe&&!A?(b+=B,b>=.55&&(R="undealer",A=!0)):pe||(h[5]&&!A&&(R="dealer"),b=0,A=!1);let W={x:vt(V+o.x+k[0],-1,1),y:vt(q-o.y+(U&&Math.abs(X)>.05?X:-k[1]),-1,1),lookX:vt(r.x,-140,140)*.0032+k[2]*B*2.45,lookY:vt(r.y,-140,140)*.0028+k[3]*B*1.8,aim:!U&&(r.aim||t.has("KeyQ")||s.has("aim")||!!Z[6]),run:s.has("sprint")||t.has("ShiftLeft")||t.has("ShiftRight")||!!Z[0],brake:t.has("Space")||s.has("sprint")||!!Z[2],interact:i.has("interact")||Y(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!U&&!!Z[7],punch:i.has("punch")||Y(1),recruit:i.has("recruit")||Y(12),weapon:i.has("weapon")||Y(15),jump:i.has("jump")||Y(2),map:Y(8),confirm:Y(0),cancel:Y(1),navUp:Y(12),navDown:Y(13),sell:i.has("sell")||Y(13),order:R||(Y(14)?"toggle":"")||(Y(4)?"attack":""),mode:g};return R="",h=Z,r.x=0,r.y=0,i.clear(),W}}}function Yp(){let n,e,t,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,e=n.createGain(),e.gain.value=.46,e.connect(n.destination),t=n.createOscillator(),t.type="triangle",i=n.createGain(),i.gain.value=0,t.connect(i).connect(e),t.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(c,l,d,f,m="sine",p=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+p,v=n.createOscillator(),g=n.createGain();v.type=m,v.frequency.setValueAtTime(c,h),v.frequency.exponentialRampToValueAtTime(l,h+d),g.gain.setValueAtTime(f,h),g.gain.exponentialRampToValueAtTime(.001,h+d),v.connect(g).connect(e),v.start(h),v.stop(h+d)}function a(c,l,d){if(!n||!s||n.state!=="running")return;let f=n.createBuffer(1,Math.floor(n.sampleRate*c),n.sampleRate),m=f.getChannelData(0);for(let g=0;g<m.length;g++)m[g]=(Math.random()*2-1)*Math.pow(1-g/m.length,2.2);let p=n.createBufferSource();p.buffer=f;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=d;let v=n.createGain();v.gain.value=l,p.connect(h).connect(v).connect(e),p.start()}return{start:r,explosion(){a(1.4,1.1,620),o(70,24,1.1,.7,"sawtooth")},rifle(){a(.12,.55,2400),o(240,60,.09,.4,"square")},sale(){o(880,1320,.12,.18),o(1320,1760,.16,.14,"sine",.08)},get enabled(){return s},toggle(){return s=!s,e&&(e.gain.value=s?.46:0),r(),s},motor(c,l){n&&(t.frequency.setTargetAtTime(34+Math.abs(c)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(c){o(c?109:187,c?39:73,c?.125:.084,c?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function Iu(n){return n>1.53?54:n>.92?32:n>.63?24:15}function Pu(n){return Math.round(vt(Math.max(0,n-2.4)**2*.24,0,86))}function Uc(n){return n>=36?3:n>=20?2:n>0?1:0}function Zp(n){let s=62.474999999999994,r=Array.from({length:3350},(p,h)=>({x:h%67*2.55-s,z:Math.floor(h/67)*2.55-s})),o=r.map(p=>Rn(p.x,p.z,.38,n)),a=r.map((p,h)=>o[h]?[h>=67?h-67:-1,h<3283?h+67:-1,h%67?h-1:-1,h%67<66?h+1:-1].filter(g=>g>=0&&o[g]&&Rn((p.x+r[g].x)*.5,(p.z+r[g].z)*.5,.38,n)):[]),c=(p,h)=>{let v=Math.max(1,Math.ceil(re(p,h)/.42));for(let g=1;g<=v;g++){let _=g/v;if(!Rn(p.x+(h.x-p.x)*_,p.z+(h.z-p.z)*_,.31,n))return!1}return!0},l=p=>{let h=Math.round((p.x+s)/2.55),v=Math.round((p.z+s)/2.55),g=[];for(let _=Math.max(0,v-4);_<=Math.min(49,v+4);_++)for(let T=Math.max(0,h-4);T<=Math.min(66,h+4);T++){let R=_*67+T;if(!o[R])continue;let b=r[R].x-p.x,A=r[R].z-p.z;g.push({index:R,d:b*b+A*A})}g.sort((_,T)=>_.d-T.d);for(let{index:_}of g.slice(0,12))if(c(p,r[_]))return _;return-1},d=0,f=-1,m=(p,h)=>{let v=l(p),g=l(h);if(v<0||g<0)return[];if(v===g)return[r[v]];let _=new Int32Array(r.length).fill(-1),T=[v];_[v]=v;for(let R=0;R<T.length;R++){let b=T[R];if(b===g){let A=[];for(let S=g;S!==v;S=_[S])A.push(r[S]);return A.push(r[v]),A.reverse()}for(let A of a[b])_[A]===-1&&(_[A]=b,T.push(A))}return[]};return(p,h,v,g)=>{p.repath=(p.repath??0)-g;let _=h.x-p.x,T=h.z-p.z,R=Math.hypot(_,T);if(R<.16)return 0;let b=R<12&&c(p,h);b&&(p.route=[]);let A=Math.floor(performance.now()/16);for(A!==f&&(f=A,d=3),!b&&p.repath<=0&&(d>0?(d--,p.route=m(p,h),p.repath=1.1+Math.random()*.4):p.repath=.05);p.route?.length&&(re(p,p.route[0])<.7||p.route.length>1&&re(p,p.route[1])<4&&c(p,p.route[1]));)p.route.shift();let S=b?h:p.route?.[0]??h,x=Math.atan2(S.x-p.x,S.z-p.z),w=Math.min(v*g,re(p,S));p.angle=Bn(p.angle,x,g*8.5);let z=na(p,p.x+Math.sin(x)*w,p.z+Math.cos(x)*w,.24,n);return z||(p.repath=Math.min(p.repath,.18)),z?v:0}}var Fc=n=>On.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,On[0]);function zc(n,e,t,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let v=e.z<o.z;n.stop={x:v?20.9:17.2,z:o.z+(v?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&re(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&re(o,n.stop)<2.6){let v=Fc(o.x),g=Fc(o.z),_=Fc(e.x),T=Fc(e.z);Math.abs(o.x-v)>3&&Math.abs(o.z-g)>3?n.stop={x:v,z:o.z}:Math.abs(o.x-v)>2.4&&Math.abs(o.z-g)<2.4?n.stop={x:_,z:g}:Math.abs(o.z-g)>2.4?n.stop={x:v,z:T}:_!==v?n.stop={x:v+Math.sign(_-v)*38,z:g}:T!==g?n.stop={x:v,z:g+Math.sign(T-g)*38}:n.stop={x:_,z:e.z}}let a=re(o,e),c=n.departing?6:14,l=Math.min(c,a*.85,Math.max(3,re(o,n.stop)*1.85)),d=wu(o,i,s,l),f=!n.departing&&d<2.5?Op(o,i,s,t):null,m=$r(o,f??n.stop,f?4.4:d),p=Tu(o,n,n.stop,i,s,t,r,m),h=o.impact>3||Math.abs(o.speed)<1;n.stall=h&&!n.maneuver?n.stall+r:0,ai(o,r,p,t,i)}var Jp="gtbase:progress:1",Oc=(n,e)=>Number.isFinite(n)?vt(Math.floor(n),0,e):0,vM=["sedan","hatch","wagon","taxi","pickup","van","suv","sport","muscle","luxury","convertible"],MM=["street","sport","chopper","scooter"];function Kp(n){try{let e=JSON.parse((n??globalThis.localStorage).getItem(Jp));if(!e||e.version!==1||!Number.isFinite(e.cash)||!Number.isFinite(e.ammo)||!Number.isFinite(e.health))return null;let t=e.stash??{},i=e.garage,s=i&&(i.kind==="car"&&vM.includes(i.model)||i.kind==="bike"&&MM.includes(i.model))&&Number.isInteger(i.color)&&i.color>=0&&i.color<=16777215?{kind:i.kind,model:i.model,color:i.color}:null;return{...e.checkpoint==="lajes"?Xn.home:{x:In.x+2.5,z:In.z-2.73},cash:vt(Math.floor(e.cash),0,999999),armed:e.armed===!0,equipped:e.equipped===!0,ammo:vt(Math.floor(e.ammo),0,360),rifle:e.rifle===!0,rifleAmmo:Oc(e.rifleAmmo,900),health:vt(Math.floor(e.health),1,100),look:op(e.look),wardrobe:Array.isArray(e.wardrobe)?e.wardrobe.filter(r=>r&&typeof r.label=="string"&&r.changes&&typeof r.changes=="object"):[],stash:{weed:Oc(t.weed,999),coke:Oc(t.coke,999),ecstasy:Oc(t.ecstasy,999)},garage:s,recruits:Array.isArray(e.recruits)?[...new Set(e.recruits.filter(r=>Number.isInteger(r)&&r>=0||typeof r=="string"&&/^[\w:-]{1,80}$/.test(r)))]:[]}}catch{return null}}function $p(n,e){try{return(e??globalThis.localStorage).setItem(Jp,JSON.stringify({...n,version:1})),!0}catch{return!1}}var no=We("view"),bM=We("menu"),so=We("play"),io=We("quality"),Is=We("shop"),jp=180,Qp=260,er=36,Bc=90,tr={weed:{name:"maconha",pack:100,retail:34},coke:{name:"p\xF3",pack:300,retail:85},ecstasy:{name:"ecstasy",pack:200,retail:58}};function kc(n,e){try{return e!==void 0&&localStorage.setItem("gtbase:"+n,e),localStorage.getItem("gtbase:"+n)}catch{return null}}function SM(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,e=new uc({antialias:!n,alpha:!1,powerPreference:"high-performance"});e.toneMapping=Ho,e.toneMappingExposure=1.17,e.shadowMap.type=ks,no.append(e.domElement);let t=new To,i=new Nn(57,1,.12,370),s=wp(t),r=s.vehicleSolids,o=Zp(s.vehicleSolids),a=Wp(t),c=Up(t),l=u=>u.floorY??s.floorAt(u.x,u.z,0),d=u=>s.walkSolids(u.x,u.z,l(u)),f=()=>[...s.solid,...s.closedDoorSolids()],m=u=>{u.floorY=s.floorAt(u.x,u.z,l(u))},p=u=>l(u)>1.25?[]:Z,h={lastHurt:0,...ta,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,ragdoll:null,model:Es(t,Ys())},v=91,g=u=>{let y=Yr[u]?.palette??[11422e3];return v=v*1103515245+12345>>>0,y[v%y.length]},_=[{x:15.75,z:-1.8,angle:Math.PI,model:"sport"},{x:-22.8,z:4,angle:0,model:"pickup"},{x:36,z:15.3,angle:Math.PI/2,model:"luxury"},{x:53.3,z:-36,angle:0,model:"muscle"},{x:-15.9,z:-31,angle:0,model:"convertible"}],T=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033,variant:"sport"},{x:22.85,z:28,angle:0,color:4678008,variant:"chopper"}],R=[..._.map(({model:u})=>Zr(t,u,g(u))),...T.map(({color:u,variant:y})=>wc(t,u,y))],b=["sedan","taxi","hatch","scooter","van","suv","wagon","street"],A=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778,5406086,11563879,7111513,8944529].map((u,y)=>{let M=b[y%8],L=y===3||y===7?wc(t,u,M):Zr(t,M,g(M));return L.routeIndex=y%8,L.kind==="bike"&&(L.rider=Es(t,ra(4e3+y)),L.rider.root.visible=!1),L}),S=[...R,...A],x=new Map,w=[],z=Array.from({length:32},(u,y)=>{let M=Mi[y%3],L=Mi[Math.floor(y/3)%3],E=y%2===0?71:85,j=(y%3-1)*20,C=y>=24?[{x:E,z:j-10},{x:E,z:j+10},{x:E+7,z:j+10},{x:E+7,z:j-10}]:[{x:M+12,z:L-12},{x:M+12,z:L+12},{x:M-12,z:L+12},{x:M-12,z:L-12}],ee=(y*3+Math.floor(y/9))%4,ue;for(let Fe=0;Fe<36&&!ue;Fe++){let Ne=(ee+Fe%4)%4,be=C[Ne],ge=C[(Ne+1)%4],xe=.1+Math.floor(Fe/4)*.1,Ce={x:be.x+(ge.x-be.x)*xe,z:be.z+(ge.z-be.z)*xe,next:(Ne+1)%4};Rn(Ce.x,Ce.z,.46,s.walkSolids(Ce.x,Ce.z,0))&&w.every(_e=>re(Ce,_e)>11.7)&&(ue=Ce)}return ue??={...C[ee],next:(ee+1)%4},w.push(ue),Xe({...ue,id:"street:"+y},"civilian",Es(t,ra(1e3+y)),C)}),D=s.buildings.filter(u=>u.clerk).map((u,y)=>Xe({...u.clerk,next:0,id:"clerk:"+u.id,buildingId:u.id},"clerk",Es(t,{...ra(2e3+y),shirt:"tee"}),[])),N=s.buildings.filter(u=>u.clerk),G=Array.from({length:3},(u,y)=>{let M=As.z-6.1+y*4.25,L={x:-1.85,z:As.z+[-.23,-4.4,3.94][y],next:0,id:"officer:"+y,buildingId:"station"},E=Xe(L,"police",Es(t,rp([12157017,8475704,15052936][y%3])),[]),j={x:8.2,z:M,angle:Math.PI/2},C=Zr(t,"sedan",3626613,!0);return{officer:E,berth:j,car:C,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,route:[3,6,1][y],beat:y,startShift:[18,40,26][y]}}),U=Zr(t,"tow",12950339),B={x:vi.bay.x,z:vi.bay.z-4,angle:Math.PI},Q={car:U,target:null,hitch:null,carrying:!1,unload:0,stop:null,stall:0,wait:0},Z=[...S,...G.map(u=>u.car),U],Y=new Map,k=Array.from({length:A.length+2},(u,y)=>{let M=Xe({x:0,z:0,next:0,id:"driver:"+y},"civilian",Es(t,ra(3e3+y)),[]);return M.seated=!0,M.model.root.visible=!1,M});A.forEach((u,y)=>{u.kind==="car"&&(u.ownDriver=k[y])});let F=()=>k.find(u=>u.seated&&!u.riding&&!Z.some(y=>y.ownDriver===u&&y.driver)),V=u=>u.ownDriver?.seated&&!u.ownDriver.riding?u.ownDriver:F(),q=[...z,...D,...G.map(u=>u.officer),...k],X=q,pe=new Map(q.map(u=>[u.id,u])),W=new Bs(1,14),de=new Kt({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),Ae=new cn(.27,.115,.38),Re={cash:new en({color:7838308}),ammo:new en({color:14395738}),weapon:new en({color:4805464})},ve=[];function Xe(u,y,M,L){return{home:u,baseRole:y,role:y,model:M,path:L,...u,pace:1.15+Math.abs(u.z)%4*.11,angle:u.angle??0,floorY:u.y??0,scheduleClock:9+Math.abs(u.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,wallet:12+Math.floor(Math.abs(Math.sin(u.x*4.27+u.z*8.13))*106),down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function dt(u){u.drop&&(t.remove(u.drop),u.drop=null),Object.assign(u,u.home,{role:u.baseRole,health:100,fear:0,down:0,angle:u.home.angle??0,floorY:u.home.y??0,scheduleClock:9+Math.abs(u.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],shoppingTrip:null,commandTarget:null,hopTime:0,stuckTime:0,walkIntent:null,pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1,ragdoll:null}),u.model.root.rotation.set(0,u.angle,0),u.model.shadow.visible=!0,u.model.root.visible=!0,m(u),u.model.root.position.set(u.x,l(u),u.z)}let Ie=Yp();kc("sound")==="off"&&Ie.toggle();let st=new K,at=new K,Je=new K,St=new K,Ht=new K,$t=new K,yt=new K,jt=new K,ke=new K,ft=!1,wt=!1,ne=null,$=!1,Bt=0,ut=null,pt=0,ze=0,kt=0,Ke=0,nt=0,O=0,I=0,te=.23,we=0,ce=0,Pe=0,Le=0,he=!0,fe="keyboard",Ee=Qp,H=!1,le=!1,oe=0,De=!1,ye="pistol",Te=!1,Ge=0,tt=0,me=Ys(),Ye={weed:0,coke:0,ecstasy:0},et=null,Oe=3,Lt=0,ht=null,Ln=!1,ci=0,wi=0,ei=null,Dn=null,rn=null,hi=0,qn=null,os=0,ti=null,Wt=[],on=Kp(),fa=()=>{so.textContent=on?"Continuar do save":"Jogar agora"},pn=0,Fi=0,zi=0,nr=0,ro=0,ir=!1,sr=0,rr=!1,P="",J=0,ae=1,ie=0,se=0,Me=We("map").getContext("2d"),qe=document.createElement("canvas");qe.width=qe.height=256;let Se=qe.getContext("2d"),Ue=We("atlas"),Ze=We("atlas-map"),je={x:128,z:128},lt=null,He=new Pt(new $i(.55),new Kt({color:16362817}));t.add(He),He.visible=!1;function xt(u,y){lt={x:(u-128)/Ve,z:(y-128)/Ve},He.position.set(lt.x,kn(lt.x,lt.z)+2.6,lt.z),He.visible=!0,Ue.close(),Ls.clear()}We("mark-lajes").onclick=()=>xt(Tt(63.6),Tt(0));function Yt(){!ft||Is.open||Ue.open||(je.x=Tt(h.x),je.z=Tt(h.z),document.pointerLockElement&&document.exitPointerLock(),Ls.clear(),Ue.showModal())}We("open-map").onclick=Yt,Ze.onclick=u=>{let y=Ze.getBoundingClientRect();xt((u.clientX-y.left)*256/y.width,(u.clientY-y.top)*256/y.height)};let Nt=[];function Ft(){!ft||Is.open||Ue.open||(Ls.clear(),document.pointerLockElement&&document.exitPointerLock(),mt.show(()=>({title:"Invent\xE1rio",note:"Carteira R$ "+Ee+" \xB7 Pistola "+(H?mn()+" balas":"\u2014")+" \xB7 Fuzil "+(Te?(ye==="rifle"?oe:tt)+" balas":"\u2014"),sections:[{title:"Garagem",items:ht?[{label:ma(ht),disabled:!0}]:[]},{title:"Estoque",items:Object.keys(tr).map(u=>({label:tr[u].name+" \xD7 "+Ye[u],price:0,disabled:!0}))},{title:"Guarda-roupa",items:Nt.map(u=>({label:u.label,price:0,buy:()=>xn(u.changes)}))}]})))}function mn(){return ye==="pistol"?oe:Ge}We("open-bag").onclick=Ft,document.addEventListener("keydown",u=>{u.repeat||(u.code==="KeyM"&&(Ue.open?Ue.close():Yt()),u.code==="KeyI"&&Ft())});let Ve=1.16,Tt=u=>128+u*Ve;Se.fillStyle="#1d3433",Se.fillRect(0,0,256,256),Se.fillStyle="#46605b";for(let u of On)Se.fillRect(Tt(u)-10,0,20,256),Se.fillRect(0,Tt(u)-10,256,20);Se.fillStyle="#826849",Se.fillRect(Tt(62),Tt(-Xn.halfDepth),(Xn.east-Xn.west)*Ve,Xn.halfDepth*2*Ve),Se.fillStyle="#345048";for(let u of s.vehicleSolids)Se.fillRect(Tt(u.x-u.w/2),Tt(u.z-u.d/2),u.w*Ve,u.d*Ve);Se.fillStyle="#6a7859",Se.fillRect(Tt(-10),Tt(28),38,38),Se.fillStyle="#ffe4aa",Se.beginPath(),Se.arc(Tt(63.6),Tt(0),3,0,2*Math.PI),Se.fill(),Se.textAlign="right",Se.font="bold 9px system-ui",Se.fillText("Vila das Lajes",Tt(62),Tt(-2));function bt(){let u=io.value==="high",y=io.value==="low";e.setPixelRatio(Math.min(devicePixelRatio,u?2:y?1:n?1.45:1.5)*(y?.85:ae)),e.setSize(no.clientWidth,no.clientHeight),e.shadowMap.enabled=!y&&(u||ae>.76),s.sun.shadow.needsUpdate=!0,c.setScale(no.clientHeight*e.getPixelRatio()*.92),i.aspect=no.clientWidth/Math.max(1,no.clientHeight),i.updateProjectionMatrix()}function Ti(){We("sound").textContent=Ie.enabled?"Som ligado":"Som desligado",We("sound").setAttribute("aria-pressed",String(Ie.enabled))}function Qt(u){Is.open&&oo(),ft=u,bM.hidden=u,We("hud").hidden=!u,Ls.clear(),u?(Ie.start(),wt||(I=.32,te=.22),wt=!0,he=!0,we=performance.now(),We("pause").focus({preventScroll:!0}),We("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),Ie.motor(0,!1),We("help").removeAttribute("open"),We("title").innerHTML="GT<span>BASE</span>",We("intro").textContent="Jogo pausado em Vila Brasa.",so.textContent="Continuar",We("reset").hidden=!1,so.focus())}function Ps(){cs={x:NaN,z:NaN,angle:0},Yu(),Nt=[],lt=null,He.visible=!1,ne=null,ei=null,rn=null,Dn=null,Wt.length=0,Ee=Qp,H=!1,le=!1,oe=0,De=!1,ye="pistol",Te=!1,Ge=0,tt=0,h.model.weapon="pistol",Ye.weed=Ye.coke=Ye.ecstasy=0,et=null,ht&&(Ln=!0,Hc(ht)),pt=kt=O=Ke=nt=J=0,Bt=0,$=!1,ut=null,a.reset(),s.resetDoors(),pn=Fi=zi=ci=wi=0,ir=!1,sr=0,rr=!1,I=.32,te=.22,Le=0,Object.assign(h,ta,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),m(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,Js(h.model,0,0,!1,!1),R.forEach((y,M)=>{let{x:L,z:E,angle:j}=[..._,...T][M];Qn(y,{x:L,z:E,angle:j}),y.stolen=!1,y.body.rotation.z=0,li(y,0)}),Qn(U,B),Object.assign(Q,{target:null,hitch:null,carrying:!1,unload:0,wait:0,stop:null,maneuver:null,stall:0}),x.clear(),A.forEach((y,M)=>{Kr(y,y.routeIndex,M>=8?3:0),li(y,0)});for(let y of G)Qn(y.car,y.berth),Object.assign(y,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),li(y.car,0);for(let y of q)dt(y);for(let y of k)y.seated=!0,y.model.root.visible=!1;for(let y of ve)t.remove(y.mesh);ve.length=0;for(let y of Z)y.passengers=[],y.root.visible=!0,y.towed=!1,y.abandoned=0,y.lastProvoked=-100,y.leftInLane=!1,y.shopping=!1,y.visitTime=-100;s.props.reset(),c.clear(),h.ragdoll=null,s.sun.shadow.needsUpdate=!0,h.deadTime=0,_a(G[0]);let u=N.find(y=>y.kind==="armory")?.entry??Br;s.marker.position.set(u.x,.02,u.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,Pe=0}function Qe(u){P=u,J=2.4}let ui=()=>{let u=Object.entries(tr).filter(([y])=>Ye[y]>0).map(([y,M])=>M.name+" "+Ye[y]);return u.length?u.join(" \xB7 "):""},mt=Tp(Is,{balance:()=>"Saldo: R$ "+Ee.toLocaleString("pt-BR")+(ui()?" \xB7 "+ui():"")+(H||Te?" \xB7 Balas: "+[H?"pistola "+(ye==="pistol"?oe:Ge):"",Te?"fuzil "+(ye==="rifle"?oe:tt):""].filter(Boolean).join(", "):""),onClose:()=>{Ls.clear(),Pe=0}});function It(u){return Ee<u?"Saldo insuficiente.":(Ee-=u,Ie.bell(),null)}function gn(u){ye==="rifle"?tt=oe:Ge=oe,u==="fists"?le=!1:(le=!0,ye=u),oe=ye==="rifle"?tt:Ge,h.model.weapon=ye,qn=null,os=0,ti=null}function Xt(){let u=["fists",...H?["pistol"]:[],...Te?["rifle"]:[]],y=le?ye:"fists";gn(u[(u.indexOf(y)+1)%u.length])}function Gt(u,y){ye===u?oe=Math.min(900,oe+y):u==="rifle"?tt=Math.min(900,tt+y):Ge=Math.min(360,Ge+y)}function ni(u,y){let M=u.model,L=Es(t,y);L.root.position.copy(M.root.position),L.root.quaternion.copy(M.root.quaternion),L.root.visible=M.root.visible,L.weapon=M.weapon,t.remove(M.root),M.root.traverse(E=>{E instanceof Pt&&E!==M.shadow&&E.geometry.dispose()}),u.model=L}function xn(u){let y=Object.keys(u)[0];if(["shirt","legs","shoes","glasses","chain","earrings","watch","ring"].includes(y)&&!Nt.some(M=>JSON.stringify(M.changes)===JSON.stringify(u))){let M={shirt:"Blusa",legs:"Cal\xE7a / bermuda",shoes:"Cal\xE7ado",glasses:"\xD3culos",chain:"Corrente",earrings:"Brinco",watch:"Rel\xF3gio",ring:"Anel"};Nt.push({label:M[y]+" \xB7 "+({tee:"camiseta",tank:"regata",dress:"social",none:"sem",pants:"cal\xE7a",shorts:"bermuda",flipflops:"chinelo",sneakers:"t\xEAnis",gold:"ouro",silver:"prata",diamond:"diamante",true:"com",false:"sem"}[String(u[y])]??String(u[y]))+(u[y+"Color"]?" #"+u[y+"Color"].toString(16):""),changes:u})}return me={...me,...u},ni(h,me),null}let Gc=pu,Lu=[3553348,2373199,5917242,2894892,8221798,11049860,15262678],Du=[15789282,2236962,9056042,2969482,14725949,3107660];function Ai(u,y,M,L){let E=me[y]===M;return{label:E?u+" (tirar)":u,price:E?0:L,active:E,buy:()=>E?xn({[y]:typeof M=="boolean"?!1:"none"}):It(L)??xn({[y]:M})}}function em(u){return u==="store"?{title:"Balc\xE3o de comida",sections:[{title:"Card\xE1pio",items:[{label:"Lanche (+30 de vida)",price:15,disabled:h.health>=100,buy:()=>{let y=It(15);return y||(h.health=Math.min(100,h.health+30),null)}}]}]}:u==="armory"?{title:"Loja de armas",note:"Pistola e muni\xE7\xE3o dentro da lei, mais ou menos.",sections:[{title:"Armas",items:[{label:"Pistola + "+er+" balas",price:jp,disabled:H,detail:H?"Voc\xEA j\xE1 tem uma pistola.":"",buy:()=>It(jp)??(H=!0,Gt("pistol",er),gn("pistol"),Qe("Pistola comprada."),null)},{label:"Repor muni\xE7\xE3o da pistola",price:0,disabled:!H||(ye==="pistol"?oe:Ge)>=er,detail:"Completa at\xE9 "+er+" balas.",buy:()=>(Gt("pistol",er-(ye==="pistol"?oe:Ge)),null)}]}]}:u==="black"?{title:"Penhores 24h \xB7 fundos",note:"Mercado negro. Pagamento na hora, sem nota fiscal.",sections:[{title:"Armas",items:[{label:"Fuzil + "+Bc+" balas",price:1200,disabled:Te,detail:Te?"Voc\xEA j\xE1 tem um fuzil.":"Rajada r\xE1pida e dano alto.",buy:()=>It(1200)??(Te=!0,Gt("rifle",Bc),gn("rifle"),Qe("Fuzil comprado."),null)},{label:"Muni\xE7\xE3o de fuzil ("+Bc+")",price:150,disabled:!Te,buy:()=>It(150)??(Gt("rifle",Bc),null)},{label:"Pistola + "+er+" balas",price:220,disabled:H,buy:()=>It(220)??(H=!0,Gt("pistol",er),gn("pistol"),null)}]},{title:"Drogas no atacado (10 unidades)",items:Object.entries(tr).map(([y,M])=>({label:M.name[0].toUpperCase()+M.name.slice(1)+" \xB7 estoque "+Ye[y],price:M.pack,detail:"Venda no varejo por R$ "+M.retail+" a unidade.",buy:()=>It(M.pack)??(Ye[y]+=10,null)}))}]}:u==="clothes"?{title:"Moda Brasa",note:"Escolha a pe\xE7a e toque em uma cor.",sections:[{title:"Parte de cima",items:[{label:"Camiseta",price:60,active:me.shirt==="tee",colors:Gc,buy:y=>It(60)??xn({shirt:"tee",shirtColor:y??me.shirtColor})},{label:"Regata",price:45,active:me.shirt==="tank",colors:Gc,buy:y=>It(45)??xn({shirt:"tank",shirtColor:y??me.shirtColor})},{label:"Camisa social",price:120,active:me.shirt==="dress",colors:Gc,buy:y=>It(120)??xn({shirt:"dress",shirtColor:y??me.shirtColor})},{label:"Sem camisa",price:0,active:me.shirt==="none",buy:()=>xn({shirt:"none"})}]},{title:"Parte de baixo",items:[{label:"Cal\xE7a",price:90,active:me.legs==="pants",colors:Lu,buy:y=>It(90)??xn({legs:"pants",legColor:y??me.legColor})},{label:"Bermuda",price:60,active:me.legs==="shorts",colors:Lu,buy:y=>It(60)??xn({legs:"shorts",legColor:y??me.legColor})}]},{title:"Cal\xE7ados",items:[{label:"T\xEAnis",price:150,active:me.shoes==="sneakers",colors:Du,buy:y=>It(150)??xn({shoes:"sneakers",shoeColor:y??me.shoeColor})},{label:"Chinelo",price:25,active:me.shoes==="flipflops",colors:Du,buy:y=>It(25)??xn({shoes:"flipflops",shoeColor:y??me.shoeColor})},{label:"Sapato social",price:180,active:me.shoes==="dress",buy:()=>It(180)??xn({shoes:"dress"})}]},{title:"Acess\xF3rios",items:[Ai("\xD3culos escuros","glasses",!0,80),Ai("Corrente de prata","chain","silver",250),Ai("Corrente de ouro","chain","gold",900),Ai("Brincos de prata","earrings","silver",120),Ai("Brincos de ouro","earrings","gold",400),Ai("Brincos de diamante","earrings","diamond",1500),Ai("Rel\xF3gio de prata","watch","silver",300),Ai("Rel\xF3gio de ouro","watch","gold",1100),Ai("Anel de prata","ring","silver",150),Ai("Anel de ouro","ring","gold",500)]}]}:u==="barber"?{title:"Barbearia do Z\xE9",note:"Corte e barba. Toque em uma cor para pintar.",sections:[{title:"Pele",items:[{label:"Tom de pele",price:0,colors:gu,buy:y=>xn({skin:y??me.skin})}]},{title:"Cabelo",items:Object.entries(du).map(([y,M])=>({label:M,price:y==="cap"?50:40,active:me.hair===y,colors:y==="bald"?void 0:y==="cap"?[1522486,9056042,2236962,2772879,14725949,15789282]:mu,buy:L=>It(y==="cap"?50:40)??xn(y==="cap"?{hair:y,capColor:L??me.capColor}:{hair:y,hairColor:L??me.hairColor})}))},{title:"Barba",items:Object.entries(fu).map(([y,M])=>({label:M,price:y==="none"?15:25,active:me.beard===y,buy:()=>It(y==="none"?15:25)??xn({beard:y})}))}]}:{title:"Loja",sections:[]}}function tm(u){Ls.clear(),document.pointerLockElement&&document.exitPointerLock(),mt.show(()=>em(u.service))}function oo(){mt.close()}function pa(u){let y={...u,ground:Z.includes(u)?u.root.position.y:l(u),angle:u.angle},M=f();return G.some(L=>{let{officer:E,car:j,mode:C}=L;return E.health<=0?!1:E.seated&&["driving","patrol","returning"].includes(C)?Qr({...j,ground:j.root.position.y},y,M,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Qr({...E,ground:l(E)},y,M,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function Nu(u,y){if(y<12||X.some(j=>j.calling))return;let M=f(),L={...u,ground:l(u)},E=X.find(j=>["civilian","clerk"].includes(j.role)&&hn(j)&&!j.buyer&&!(j.brawl>0)&&re(j,u)<24&&re(j,u)>2&&Qr({...j,ground:l(j)},L,M,{range:24,fov:Math.PI*1.3,eye:1.6,aim:1.1}));E&&(E.calling={time:3.6,pressure:y,x:u.x,z:u.z})}function as(u,y=ne??h,M=pa(y)){if(!M)return Nu(y,u),!1;let L=Uc(pt);return pt=Math.min(64,Math.max(pt+(pt>0?u*.52:0),u)),$=!0,Bt=.24,ut={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle},L||Qe("Crime visto pela pol\xEDcia."),!0}let Uu=()=>ne||l(h)>=1?null:N.find(u=>s.interiorAt(h.x,h.z,l(h))?.buildingId===u.id&&re(h,u.clerk)<3)??null,nm={store:"Comprar comida",armory:"Abrir loja de armas",clothes:"Ver roupas",barber:"Cortar cabelo",black:"Negociar nos fundos"},Fu=()=>ht&&Ln&&!ne&&re(h,qs.door)<2.6,Vc=()=>ne&&ne!==im().find(u=>u===ne)&&re(ne,qs.door)<3.4&&Math.hypot(ne.vx,ne.vz)<2,zu=()=>s.interiorAt(h.x,h.z,l(h))?.buildingId==="lajes-home"&&re(h,Xn.home)<1.4,Ou=()=>!ne&&(zu()||re(h,{x:In.x,z:In.z+6.25})<1.7),Bu=()=>Z,hn=u=>u&&u.health>0&&!u.seated,ma=u=>(u.kind==="bike"?"Moto ":"")+(u.spec?.name??"Carro"),ku=()=>!ne&&s.doors.find(u=>u.private&&!u.breached&&!u.opened&&Math.abs(u.base-l(h))<.85&&re(u,h)<1.62);function Gu(){if(l(h)>1.02)return null;let u=null,y=1/0;for(let M of S){let L=re(h,M),E=M.kind==="bike"?3:Math.max(3,M.halfLength+.6);Q.carrying&&Q.target===M||L>=E||L>=y||M.integrity<=0||M.wrecked||M.burning||Math.abs(M.speed)>3.4||(u=M,y=L)}return u}function Oi(u=!1){if(!ne)return;let{angle:y,x:M,z:L}=ne;if(!u&&Math.hypot(ne.vx,ne.vz)>4.2){Qe("Reduza a velocidade para sair.");return}let E=ne.kind==="bike"?1.02:ne.halfWidth+.67,j=ne.kind==="bike"?1.75:ne.halfLength+.65,C=[E,-E,E+.53,-E-.53].map(ue=>[M+Math.cos(y)*ue,L-Math.sin(y)*ue]);C.push([M-Math.sin(y)*j,L-Math.cos(y)*j],[M+Math.sin(y)*j,L+Math.cos(y)*j]);let ee=C.find(([ue,Fe])=>Pn({x:ue,z:Fe},ue,Fe,s.walkSolids(ue,Fe,0),Z,X,.36));if(!ee&&!u){Qe("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=ee??[ta.x,ta.z],h.floorY=0,m(h);for(let ue of[...ne.passengers??[]])lr(ue);h.angle=y,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),Yu(),ne.abandoned=0,ne.leftInLane=!!Rm(ne),ne=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,y,0),Js(h.model,0,0,!1,le)}function Vu(){ye==="rifle"?tt=oe:Ge=oe;let u={checkpoint:zu()?"lajes":"brasa",wardrobe:Nt,health:h.health,cash:Ee,armed:H,equipped:le,ammo:Ge,rifle:Te,rifleAmmo:tt,look:me,stash:{...Ye},garage:ht?{kind:ht.kind,model:ht.model,color:ht.color}:null,recruits:Wt.map(y=>y.id)};return $p(u)}let im=()=>G.map(u=>u.car);function Hu(u,y,M){return ht&&(t.remove(ht.root),Z.splice(Z.indexOf(ht),1),S.splice(S.indexOf(ht),1)),ht=u==="bike"?wc(t,M,y):Zr(t,y,M),ht.stolen=!0,Z.push(ht),S.push(ht),ht}function Hc(u){Qn(u,qs.inside),u.root.visible=!1,li(u,0)}function sm(u){let y=u.kind,M=u.model,L=u.color;if(Oi(!0),u!==ht){let E=R.indexOf(u);if(E>=0){let{x:j,z:C,angle:ee}=[..._,...T][E];Qn(u,{x:j,z:C,angle:ee}),u.stolen=!1,u.towed=!1,u.root.visible=!0,li(u,0)}else u.routeIndex>=0&&(Kr(u,u.routeIndex),li(u,0));Hu(y,M,L)}Ln=!0,Hc(ht),Object.assign(h,{x:qs.door.x-1.6,z:qs.door.z+1.4,floorY:0}),m(h),Vu(),Qe("Ve\xEDculo guardado na garagem e salvo."),Ie.bell()}function rm(){ht&&(Ln=!1,Qn(ht,qs.out),ht.root.visible=!0,li(ht,0),Wc(ht),Qe("Ve\xEDculo retirado da garagem."))}function om(){Oi(!0),Object.assign(h,{x:In.x,z:In.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0,ragdoll:null}),m(h),ci=0,pt=0,wi=0,I=-Math.PI/2,he=!0,Qe("Voc\xEA voltou para casa.")}function am(){if(ei||h.health<=0)return;if(ne&&!Vc()){Oi();return}let u=Uu();if(u){tm(u);return}if(Vc()){sm(ne);return}if(Fu()){rm();return}if(Ou()){Qe(Vu()?"Progresso salvo em casa.":"O navegador bloqueou o salvamento."),Ie.bell();return}let y=Gu();if(!y){Qe(ku()?"Porta trancada.":"Nada para interagir aqui.");return}if(y.driver){let M=V(y)??k.find(L=>L.exitAge>14&&L.role==="civilian"&&re(L,h)>11);if(M){let L=y.angle+(y.kind==="bike"?-1:1)*Math.PI/2,E=y.x+Math.sin(L)*(y.kind==="bike"?.95:1.51),j=y.z+Math.cos(L)*(y.kind==="bike"?.95:1.51),C=Pn({x:E,z:j},E,j,s.walkSolids(E,j,0),Z,X,.29)?{x:E,z:j}:{x:h.x,z:h.z};dt(M),Object.assign(M,C,{angle:L,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),Math.random()<.35&&(M.fear=0,M.brawl=9,M.attack=1.2),y.rider&&(y.rider.root.visible=!1)}y.driver=null,y.vx=y.vz=y.speed=0,y.doorTime=.65,ei={car:y,delay:.46},Qe(y.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else Wc(y)}function Wc(u){if(!(u.burning||u.wrecked||u.integrity<=0)){if(ne=u,u.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),ci=0,h.model.root.visible=!0,h.model.shadow.visible=!1,u.stolen||(u.stolen=!0,as(13)),u.passengers??=[],u.kind==="car"){let y=u.spec.seats;Wt.filter(L=>hn(L)&&re(L,u)<35&&L.order!=="dealer").sort((L,E)=>re(L,u)-re(E,u)).slice(0,Math.max(0,y.length-1-u.passengers.length)).forEach((L,E)=>{let j=y[Math.min(y.length-1,1+E+u.passengers.length)];L.boardCar=u,L.boardRow=j[1],L.boardSide=Math.sign(j[0])||1})}I=u.angle,Le=0,he=!0}}function Xc(u,y,M){let L=new Pt(Ae,Re[u]),E=l(y)+.13;L.position.set(y.x+.22,E,y.z+.19),t.add(L),ve.push({mesh:L,kind:u,count:M,y:E,wait:.32,left:105})}function lm(u){for(let y=ve.length-1;y>=0;y--){let M=ve[y];M.left-=u,M.wait-=u,M.mesh.rotation.y+=u*2.1,M.mesh.position.y=M.y+Math.sin(M.left*3.8)*.08;let L=!ne&&h.health>0&&M.wait<0&&Math.abs(l(h)-M.y)<.65&&Math.hypot(h.x-M.mesh.position.x,h.z-M.mesh.position.z)<1.03;L&&(M.kind==="cash"?(Ee+=M.count,Qe("R$ "+M.count+" recolhidos.")):M.kind==="weapon"?(H||(H=!0,gn("pistol")),Gt("pistol",M.count),Qe("Pistola recolhida.")):(Gt("pistol",M.count),Qe("+"+M.count+" balas de pistola.")),Ie.bell()),(L||M.left<=0)&&(t.remove(M.mesh),ve.splice(y,1))}}function Yn(u,y,M=null){if(u.health<=0||y<=0)return;if(u.health=Math.max(0,u.health-y),u===h&&(h.lastHurt=ce),c.blood(u.x,l(u)+1.1,u.z),u.health<=0){let j=M?u.x-M.x:u.pushX,C=M?u.z-M.z:u.pushZ;if(u.fallDir=Math.sin(u.angle)*j+Math.cos(u.angle)*C>0?1:-1,u.deadTime=0,M&&u!==h){let ee=Math.max(.1,Math.hypot(j,C));u.pushX+=j/ee*1.3,u.pushZ+=C/ee*1.3}}if(u===h){zi=.22,M&&cm(M),u.health<=0&&(Oi(!0),wi=3,Qe("Voc\xEA caiu. Voltando para casa\u2026"));return}if(u.stagger=.32,u.fear=u.brawl>0?0:6,u.calling=null,u.buyer=null,u.surrender=0,rn?.npc===u&&(rn=null),u.health>0)return;Dn===u&&(Dn=null),u.down=u.role==="police"?28:19,u.model.shadow.visible=!1;let L=new Pt(W,de);L.position.set(u.x+Math.sin(u.angle)*u.fallDir*1,l(u)+.019,u.z+Math.cos(u.angle)*u.fallDir*1),L.rotation.x=-Math.PI/2,L.scale.set(.52,.32,1),t.add(L),u.drop=L,["police","ally"].includes(u.role)&&Xc("weapon",u,12),u.role!=="ally"&&!u.robbed&&Xc("cash",u,u.wallet);let E=Wt.indexOf(u);E>=0&&Wt.splice(E,1)}function cm(u){let y=Math.atan2(u.x-h.x,u.z-h.z)-I,M=document.createElement("div");M.className="hurt",M.style.transform="rotate("+-y+"rad)",We("damage-dir").append(M),window.setTimeout(()=>M.remove(),1100)}function ga(u){return[...X,h].filter(M=>M!==u&&hn(M)&&!(M===h&&ne&&ne.kind==="car")).map(M=>{let L=l(M)+(M===h?h.lift:0);return{actor:M,y:L,bounds:[M.x-.31,L+.1,M.z-.31,M.x+.31,L+1.9,M.z+.31]}})}function Wu(){i.getWorldDirection($t);let u=ga(h),y=f(),M=ua(i.position.toArray(),$t.toArray(),y,u,28).hit,L=[h.x,l(h)+1.38+h.lift,h.z];if(M&&re(h,M.actor)<24&&jr(L,[M.actor.x,M.y+1.25,M.actor.z],y))return M.actor;let E=.15,j=null;for(let{actor:ee,y:ue}of u){if(re(h,ee)>18)continue;St.set(ee.x,ue+1.25,ee.z).project(i);let Fe=Math.hypot(St.x,St.y);St.z>=1||Fe>=E||!jr(L,[ee.x,ue+1.25,ee.z],y)||(E=Fe,j=ee)}if(j)return j;let C=Z.filter(ee=>ee!==ne&&ee.integrity>0&&re(h,ee)<32).map(ee=>({car:ee,oriented:{center:[ee.x,ee.root.position.y+.8,ee.z],half:ee.kind==="bike"?[.4,.75,1.1]:[ee.halfWidth+.05,.75,ee.halfLength],angle:ee.angle}}));return ua(i.position.toArray(),$t.toArray(),y,C,34).hit?.car??null}let or=u=>G.find(y=>y.car===u),Xu=u=>Z.includes(u);function qc(u){if(u===ne||u.driver||wn.has(u)&&u.passengers?.length)return!0;let y=or(u);return!!(y&&y.officer.seated&&y.officer.health>0&&["driving","patrol"].includes(y.mode))}let ar=u=>!!u&&(Xu(u)?u!==ne&&u.integrity>0&&qc(u):hn(u));function Bi(u){if(u){if(Xu(u)){u!==ne&&u.integrity>0&&qc(u)&&(Dn=u);return}u.role!=="ally"&&u.health>0&&(Dn=u)}}function ls(u,y,M){let L=or(u),E=L&&L.officer.seated&&["driving","patrol"].includes(L.mode)?L:null,j=E?.officer??(u.driver?V(u):null);if(!j)return!1;E||dt(j);let C=u.angle+(u.kind==="bike"?-1:1)*Math.PI/2,ee=u.kind==="bike"?.95:u.halfWidth+.6;return Object.assign(j,{seated:!1,x:u.x+Math.sin(C)*ee,z:u.z+Math.cos(C)*ee,fear:6,exitAge:0,floorY:0}),j.model.root.visible=!0,j.model.shadow.visible=!0,u.driver=null,u.vx*=.45,u.vz*=.45,u.speed*=.45,u.rider&&(u.rider.root.visible=!1),E&&(E.mode="foot"),Yn(j,y,M),!0}function qu(u,y){if(!y||!u.flat)return!1;let M=Math.sin(u.angle),L=Math.cos(u.angle),E=y[0]-u.x,j=y[2]-u.z,C=E*L-j*M,ee=E*M+j*L,ue=y[1]-u.root.position.y,Fe=!1;return u.wheels.forEach((Ne,be)=>{!u.flat[be]&&ue<u.wheelRadius*2+.1&&Math.hypot(C-Ne.position.x,ee-Ne.position.z)<u.wheelRadius+.2&&(u.flat[be]=!0,Fe=!0)}),Fe}function hm(u,y,M,L){if(u.lastHitBy=M,y<u.wheelRadius*2&&qu(u,L)){u===ne&&Qe("Pneu furado.");return}if(L&&c.sparks(L[0],L[1],L[2],4,2),u.kind==="bike"){if(y>.85||Math.random()<.45){u===ne?(Yn(h,14,M),h.health>0&&Math.random()<.3&&(Oi(!0),h.trip=.6,Qe("Voc\xC3\xAA caiu da moto."))):ls(u,40,M);return}u.integrity=Math.max(0,u.integrity-4);return}if(y>.92){if(Su(u,L),u===ne){let E=(u.passengers??[]).filter(C=>C.health>0),j=E.length&&Math.random()<E.length/(E.length+1.6)?E[Math.floor(Math.random()*E.length)]:h;Yn(j,j===h?16:24,M),j===h&&Qe("Tiro atravessou o vidro.")}else ls(u,38+Math.round(Math.random()*30),M);return}u.integrity=Math.max(0,u.integrity-3)}function um(u,y){let M=Math.sin(u.angle),L=Math.cos(u.angle),E=y.boardRow??-1,j=u.halfWidth+.55;for(let C of[y.boardSide??1,-(y.boardSide??1)]){let ee={x:u.x+L*C*j+M*E,z:u.z-M*C*j+L*E};if(Pn(y,ee.x,ee.z,s.walkSolids(ee.x,ee.z,0),[],[],.3))return ee}return{x:u.x-M*(u.halfLength+.7),z:u.z-L*(u.halfLength+.7)}}let wn=new Map;function dm(u){let y=S.filter(L=>L.kind==="car"&&L!==ne&&!L.burning&&!L.wrecked&&L.integrity>12&&Math.abs(L.speed)<3&&(!Ln||L!==ht)&&!L.shopping&&(L.passengers?.length??0)+Wt.filter(E=>E.boardCar===L).length<L.spec.seats.length);y.sort((L,E)=>re(u,L)-re(u,E));let M=y[0];M&&(wn.has(M)||wn.set(M,{car:M,stall:0}),u.boardCar=M,u.boardSide=Math.sign(M.spec.seats[0][0]),u.boardRow=M.spec.seats[0][1],M.passengers??=[])}function Yu(){for(let u of wn.keys()){for(let y of[...u.passengers??[]])lr(y);for(let y of Wt)y.boardCar===u&&(y.boardCar=null);u.speed=u.vx=u.vz=0}wn.clear()}function fm(u,y){let M=u.boardCar;if(!ne||ne!==M&&!wn.has(M)||M.burning||M.integrity<=0||(M.passengers?.length??0)>=M.spec.seats.length-(M===ne?1:0))return u.boardCar=null,0;if(Math.hypot(M.vx,M.vz)>2.5){let _e=Qu(M,Wt.indexOf(u));return re(_e,u)>1.25?Zc(u,_e,6.1,y):0}let L=um(M,u),E=Math.sin(M.angle),j=Math.cos(M.angle),C=u.x-M.x,ee=u.z-M.z,ue=C*E+ee*j,Fe=C*j-ee*E,Ne=(L.x-M.x)*j-(L.z-M.z)*E;if(re(u,L)<.75||re(u,M)<M.halfWidth+.9||Math.abs(Fe)>M.halfWidth+.2&&Math.abs(Fe)<M.halfWidth+1&&Math.abs(ue)<M.halfLength-.55)return u.seated=!0,u.riding=M,u.boardCar=null,u.model.root.visible=!1,wn.has(M)&&M.driver&&ls(M,0,u),M.passengers.push(u),M.doorTime=.6,0;if(Math.abs(Fe)>=M.halfWidth+.45)return u.boardSide=Math.sign(Fe),Mn(u,L,4.8,y);let be=Math.sign(Ne)||1,xe=(Math.sign(ue)||1)*Math.max(M.halfLength+.65,Math.abs(ue)),Ce=M.halfWidth+.68;return Mn(u,{x:M.x+E*xe+j*be*Ce,z:M.z+j*xe-E*be*Ce},4.8,y)}function lr(u){let y=u.riding;if(u.riding=null,u.boardCar=null,!y)return;y.passengers=(y.passengers??[]).filter(ue=>ue!==u);let M=Math.sin(y.angle),L=Math.cos(y.angle),E=y.halfWidth+.62,j=y.halfLength+.9,C=[[E,-1],[-E,-1],[E,.6],[-E,.6],[0,-j],[E+.7,0],[-E-.7,0],[0,j]].map(([ue,Fe])=>({x:y.x+L*ue+M*Fe,z:y.z-M*ue+L*Fe})),ee=C.find(ue=>Pn(u,ue.x,ue.z,s.walkSolids(ue.x,ue.z,0),Z.filter(Fe=>Fe!==y),X,.3))??C[0];Object.assign(u,ee,{seated:!1,floorY:0,angle:y.angle,exitAnim:.3,exitSide:1}),m(u),u.model.root.visible=!0,u.model.shadow.visible=!0}function Zu(u){for(let y of Z){if(y.kind!=="car")continue;let M=y===ne||re(y,u)<40,L=or(y),E=L&&L.officer.seated&&L.officer.health>0&&["driving","patrol"].includes(L.mode)?L.officer:null,j=y.ownDriver?.seated&&y.driver&&y!==ne?y.ownDriver:null,C=y===ne?h:E??j;(wn.has(y)&&y.passengers?.length?y.passengers:[C,...y.passengers??[]]).forEach((ee,ue)=>{ee&&(M?Lp(ee.model,y,ue):ee.model.root.visible=!1)})}}function pm(u){for(let y of Wt){if(!y.riding)continue;let M=y.riding;if(!ne||ne!==M&&!wn.has(M)||y.health<=0){lr(y);continue}y.x=M.x,y.z=M.z,y.floorY=0,y.attack-=u;let L=ar(y.commandTarget)?y.commandTarget:Dn;ar(L)&&y.attack<=0&&re(M,L)<18&&Ku(y,L)}}function mm(u,y){let M=f(),L={...u,ground:l(u)};for(let E of G){let j=E.officer;hn(j)&&(j===y||Qr({...j,ground:l(j)},L,M,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(E.retaliation=u)}}function gm(u){if(!u||!["civilian","resident"].includes(u.role)||u.health<=0){Qe("Mire em um pedestre dispon\xEDvel para recrutar.");return}u.role="ally",u.order="follow",u.surrender=0,u.fear=0,u.route=[],Wt.push(u),rn?.npc===u&&(rn=null),Qe("Guarda-costas recrutado."),Ie.bell()}function xm(u,y){if(h.health<=0||!y||!["civilian","resident","clerk"].includes(y.role)||y.robbed||re(h,y)>9||Math.abs(l(h)-l(y))>.65){rn&&(rn.npc.surrender=0,rn=null);return}let M=h.x-y.x,L=h.z-y.z,E=Math.sin(y.angle)*M+Math.cos(y.angle)*L;if(rn?.npc!==y){if(rn&&(rn.npc.surrender=0),rn=null,E<Math.hypot(M,L)*.3||y.stagger>0||y.fear>0)return;rn={npc:y,left:5}}if(y.surrender=1,y.angle=Math.atan2(M,L),rn.left-=u,rn.left<=0){y.robbed=!0,y.surrender=0,y.fear=7;let j=N.find(C=>C.id===y.home.buildingId);if(Xc("cash",y,j?85+y.wallet*3:y.wallet),j){as(30,h,!0),ut={...j.outside,y:0,health:100,seated:!1,angle:0};let C=G.filter(ee=>ee.officer.health>0&&ee.car.integrity>12&&!ee.car.burning).sort((ee,ue)=>re(ee.car,ut)-re(ue.car,ut))[0];C&&(ti={unit:C,location:ut,time:42}),Qe("Alarme acionado. Viatura a caminho.")}else as(15),Qe("Dinheiro no ch\xE3o.");rn=null}}function _m(){h.ragdoll||pn>0||h.health<=0||h.trip>.15||ei||(h.angle=I,ro=1-ro,h.pushX+=Math.sin(I)*1.5,h.pushZ+=Math.cos(I)*1.5,pn=to,ir=!0,sr=Qs,Bi(qn),Ie.punch(!1))}function ym(){if(ir=!1,h.health<=0||ne)return;let u=Hp(h,X.filter(E=>hn(E)&&E.role!=="ally"&&Math.abs(l(h)-l(E))<.73),l(h)+h.lift,f());if(!u)return;Bi(u),Ie.punch(!0);let y=u.x-h.x,M=u.z-h.z,L=Math.max(.2,Math.hypot(y,M));u.pushX=y/L*3.6,u.pushZ=M/L*3.6,Yn(u,18,h),u.role==="civilian"&&u.health>0&&!(u.brawl>0)&&Math.random()<(u.model.root.scale.x>1.05?.22:.12)&&(u.brawl=10,u.fear=0,u.attack=.4,Bi(u),Qe("Ele vai revidar!")),Fi=.19,as(u.role==="police"?28:12),Qe(u.health<=0?"Pedestre derrubado.":"Soco acertou.")}function vm(u){if(h.ragdoll||pn>0||kt>0||h.health<=0||!H||!le)return;if(oe<=0){u&&Bi(qn),kt=.32,Qe("Sem balas. Reponha na loja.");return}let y=pa(h),M=ye==="rifle";oe--,kt=M?.11:.52,O=.095,h.angle=I,h.model.root.rotation.y=I,Js(h.model,0,0,!0,!0,0,u?te:te-.22),(M?h.model.rifleMuzzle:h.model.muzzle).getWorldPosition(Ht),M?Ie.rifle():Ie.shot();let L=ga(h),E=Z.map(_e=>{let rt=_e.root.position.y,tn=_e.kind==="bike",zt=tn?0:.1,nn=tn?0:_e.spec.belt;return{car:_e,oriented:{center:[_e.x,rt+(tn?.67:(zt+nn)/2),_e.z],half:tn?[.31,.44,1.08]:[_e.halfWidth-.01,(nn-zt)/2,_e.halfLength-.05],angle:_e.angle}}});i.getWorldDirection($t);let j=Z.filter(_e=>_e.rider&&_e.driver).map(_e=>({rider:_e,oriented:{center:[_e.x,_e.root.position.y+1.42,_e.z],half:[.32,.45,.33],angle:_e.angle}})),C=Z.filter(_e=>_e.cabin&&_e!==ne).map(_e=>{let rt=Dp(_e);return{windowCar:_e,oriented:{center:[_e.x+rt.z*Math.sin(_e.angle),_e.root.position.y+rt.y,_e.z+rt.z*Math.cos(_e.angle)],half:[rt.halfX,rt.halfY,rt.halfZ],angle:_e.angle}}}),ee=f(),ue=[...L,...j,...C,...E],Fe=Ht.toArray(),Ne=Vp(i.position.toArray(),$t.toArray(),Fe,ee,ue,{ground:kn}),be=Ne.impact,ge=be.hit,xe=s.doors.find(_e=>_e.private&&!_e.breached&&be.solid===_e.closedSolid&&Math.hypot(be.point[0]-_e.handle.x,be.point[1]-_e.handle.y,be.point[2]-_e.handle.z)<.28),Ce=17;if(xe&&s.breachDoor(xe.id))Ce=23,Qe("Fechadura rompida.");else if(ge?.actor&&ge.actor.role!=="ally")Bi(ge.actor),Yn(ge.actor,Math.round(Iu(be.point[1]-ge.y)*(M?1.45:1)),h),Ce=ge.actor.role==="police"?34:23,Fi=.21,Qe(ge.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(ge?.rider||ge?.windowCar){let _e=ge.rider??ge.windowCar;Bi(_e),ge.windowCar&&Su(_e,be.point);let[rt,tn]=_e.spec.seats?.[0]??[-.42,0],zt={oriented:{center:[_e.x+rt*Math.cos(_e.angle)+tn*Math.sin(_e.angle),_e.root.position.y+(_e.seatHip??.54)+.66,_e.z-rt*Math.sin(_e.angle)+tn*Math.cos(_e.angle)],half:[.26,.28,.29],angle:_e.angle}};qc(_e)&&(ge.rider||ua(Fe,Ne.direction,[],[zt],52).hit)&&ls(_e,ge.rider?M?75:50:100,h)&&(Fi=.21)}else ge?.car?(Bi(ge.car),ge.car.lastHitBy=h,c.sparks(be.point[0],be.point[1],be.point[2],5,2.2),qu(ge.car,be.point)?Qe("Pneu furado."):ge.car.integrity=Math.max(0,ge.car.integrity-3),Fi=.16):u&&Bi(qn);as(Ce,h,y);for(let _e of X)["civilian","resident"].includes(_e.role)&&re(_e,h)<17&&(_e.fear=Math.max(_e.fear,4.8));a.emit(Fe,be,{mark:ge?.car?!0:void 0,attach:ge?.car?.root})}function Mm(u,y){let M=ne;ai(M,u,{throttle:y.y,steer:-y.x,brake:y.brake},r,Bu());let L=M.bumpedVehicle;if(L&&A.includes(L)&&L.driver&&(L.lastProvoked??-100)<ce-20&&(L.lastProvoked=ce,Math.random()<.035&&Math.abs(L.speed)<2.2&&L.kind==="car")){let E=V(L);E&&ls(L,0,h)&&(E.brawl=8,E.fear=0)}Le>1.15&&Math.abs(M.speed)>2.4&&(I=Bn(I,M.angle,u*2.3))}function bm(u,y){if(h.ragdoll&&(Ac(h,u,l(h),(Fe,Ne)=>!Rn(Fe,Ne,.25,d(h))),h.ragdoll||h.health<=0))return;let M=Math.min(1,Math.hypot(y.x,y.y)),L=h.health>0&&!ei&&h.trip<.12,E=L?M*(y.aim?2.1:y.run?7.4:4.2):0,j=I+Math.atan2(-y.x,y.y||0);y.jump&&L&&h.lift===0&&(ci=4.18),(ci!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+ci*u-11.8*u*u),ci=h.lift>0?ci-23.6*u:0);let C=1-Math.exp(-u*(E>.02?19:27));h.vx+=(Math.sin(j)*E-h.vx)*C,h.vz+=(Math.cos(j)*E-h.vz)*C;let ee=Mc(h,(h.vx+h.pushX)*u,(h.vz+h.pushZ)*u,d(h),p(h),X);h.pushX*=Math.exp(-u*6.2),h.pushZ*=Math.exp(-u*6.2),h.trip=Math.max(0,h.trip-u),pn<=0&&L&&(y.aim||M>.05)&&(h.angle=Bn(h.angle,y.aim?I:j,u*11));let ue=h.model;if(m(h),ue.root.position.set(h.x,l(h)+h.lift,h.z),ue.shadow.visible=h.health>0&&h.lift<.06,h.health<=0){h.deadTime=(h.deadTime??0)+u;let Fe=oa(ue,h.deadTime,-1);ue.root.rotation.set(Fe,h.angle,0),ue.root.position.y+=Math.abs(Math.sin(Fe))*.31;return}ue.root.rotation.set(Math.min(1.25,h.trip*2.7),h.angle,0),Js(ue,u,h.trip>.05?0:Math.min(7.5,ee/u),le&&(y.aim||O>0)&&pn<=0,le&&pn<=0,0,y.aim?te:0),(pn>0||y.aim&&!le)&&Ru(ue,{aim:y.aim,punch:pn,pitch:te,walking:ee>.01,hand:ro}),ee&&nt<=0&&h.lift===0&&(Ie.step(),nt=y.run?.27:.41)}function Ju(u){let y=Math.sin(u.angle),M=Math.cos(u.angle),L=u.halfWidth+.68;return[L,-L].flatMap(E=>[.28,-.82,1.18].map(j=>({x:u.x+M*E+y*j,z:u.z-y*E+M*j}))).find(E=>Pn(E,E.x,E.z,s.walkSolids(E.x,E.z,0),Z,[],.36))}function Sm(u,y,M){let L=Math.sin(y.angle),E=Math.cos(y.angle);if(!M)return null;if(![.28,.5,.73,.92].some(ue=>{let Fe=u.x+(M.x-u.x)*ue,Ne=u.z+(M.z-u.z)*ue,be=Fe-y.x,ge=Ne-y.z;return Math.abs(be*L+ge*E)<y.halfLength+.35&&Math.abs(be*E-ge*L)<y.halfWidth+.35}))return M;let C=((u.x-y.x)*L+(u.z-y.z)*E>0?1:-1)*(y.halfLength+.8),ee=(M.x-y.x)*E-(M.z-y.z)*L;return{x:y.x+L*C+E*ee,z:y.z+E*C-L*ee}}function wm(u){let y=u.officer,M=u.car,L=Math.sin(M.angle),E=Math.cos(M.angle),j=M.halfLength+.7,C=Ju(M)??[{x:M.x-L*j,z:M.z-E*j},{x:M.x+L*j,z:M.z+E*j}].find(ee=>Pn(ee,ee.x,ee.z,s.walkSolids(ee.x,ee.z,0),Z,X,.37));return C?(y.seated=!1,y.model.root.visible=!0,y.x=C.x,y.z=C.z,y.floorY=0,m(y),y.angle=M.angle,y.exitAnim=.38,y.model.shadow.visible=!0,M.doorTime=.65,u.mode="foot",!0):!1}function Ku(u,y){let M=Z.includes(y)?y:null;if(re(u,y)>18||re(u,y)<.5||(M?M.integrity<=0:!hn(y)))return!1;let L=l(u),E=(M?M.root.position.y:l(y))+(y===h?h.lift:0)+(M?1.08:1.27),j=f();if(!jr([u.x,L+1.35,u.z],[y.x,E,y.z],j))return!1;u.angle=Math.atan2(y.x-u.x,y.z-u.z),u.model.root.position.set(u.x,L,u.z),u.model.root.rotation.y=u.angle;let C=Math.atan2(L+1.42-E,Math.max(.4,re(u,y)));Js(u.model,0,0,!0,!0,0,C),u.model.muzzle.getWorldPosition(yt);let ee=ce*14+u.x,ue=Math.sin(ee)*(u.role==="ally"?.35:.48),Fe=y.x+Math.cos(u.angle)*ue,Ne=y.z-Math.sin(u.angle)*ue;jt.set(Fe,E+Math.cos(ee*1.4)*.32,Ne);let be=Math.min(24,yt.distanceTo(jt)+1.65),ge=ke.subVectors(jt,yt).normalize(),xe=ga(u);M&&xe.push({actor:M,y:0,bounds:[y.x-.93,.3,y.z-1.02,y.x+.93,1.52,y.z+1.02]});let Ce=Pc(yt.toArray(),ge.toArray(),j,xe,be,{ground:kn});if(u.role==="ally"&&(y.role==="police"||or(y)||Ce.hit?.actor.role==="police")&&mm(u,Ce.hit?.actor),Ce.hit&&(Ce.hit.actor===y||Ce.hit.actor.role==="civilian")){let _e=u.role==="police"&&y===h?.62:.83;if(M&&Ce.hit.actor===M){let rt=[yt.x+ge.x*Ce.distance,yt.y+ge.y*Ce.distance,yt.z+ge.z*Ce.distance];hm(M,rt[1]-M.root.position.y,u,rt)}else Yn(Ce.hit.actor,Math.round(Iu(yt.y+ge.y*Ce.distance-Ce.hit.y)*_e),u)}jt.copy(yt).addScaledVector(ge,Ce.distance),u.role!=="ally"&&(y===h||y===ne||pp(yt,jt,ne??h))&&Bi(u),a.emit(yt.toArray(),Ce,{enemy:!0});for(let _e of X)["civilian","clerk"].includes(_e.role)&&!(_e.brawl>0)&&re(_e,u)<16&&(_e.fear=Math.max(_e.fear,4.5));return u.attack=(u.role==="police"?.91:1.07)+(Math.sin(ee)+1)*.18,re(u,ne??h)<31&&Ie.shot(),!0}function Yc(u,y,M){let L=re(u,y);return u.stagger>0||u.exitAnim>0?{speed:0,aim:!1}:L<17&&u.attack<=0&&Ku(u,y)||u.attack>.28&&L<15.5?(u.angle=Bn(u.angle,Math.atan2(y.x-u.x,y.z-u.z),M*12),{speed:0,aim:!0}):{speed:L>3.3||Math.abs(l(u)-l(y))>1.8?Zc(u,y,4.4,M):0,aim:L<12}}let xa=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function $u(u){let y={kind:"car",shape:u.car.shape};return Kr(y,u.route,u.startShift),y}function _a(u,y=!0){let{car:M,officer:L}=u;if(y){let E=$u(u);Qn(M,E),M.driver=E.driver}else{let E={};Kr(E,u.route),M.driver=E.driver;let j=Math.sin(M.angle),C=Math.cos(M.angle),ee=1/0;M.driver.route.forEach((ue,Fe)=>{let Ne=ue.x-M.x,be=ue.z-M.z,ge=Math.hypot(Ne,be)+(Ne*j+be*C<0?16:0);ge<ee&&(ee=ge,M.driver.next=Fe)})}u.mode="patrol",u.retaliation=null,u.stop=null,u.departing=!1,L.seated=!0,L.model.root.visible=!1,li(M,0)}function Tm(u,y){let M=u.officer,L=xa[u.beat%xa.length];re(M,L)<1.1&&(u.beat++,L=xa[u.beat%xa.length]),u.intent=Mn(M,L,1.35,y)}function Am(u,y){Bt-=u,Bt<=0&&pt>0&&($=pa(y),$&&(ut={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle}),Bt=.24);let M=pt>0&&h.health>0?$?y:ut:null,L=Uc(pt);pt>0&&(pt=Math.max(0,pt-u*($?.23:1.1)),pt===0&&(ut=null,$=!1,Qe("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),ti&&((ti.time-=u)<=0||re(ti.unit.car,ti.location)<10)&&(ti=null),G.forEach((E,j)=>{let C=E.officer,ee=E.car;E.retaliation&&!hn(E.retaliation)&&(E.retaliation=null);let ue=ti?.unit===E?ti.location:null,Fe=E.retaliation,Ne=ue??Fe??M,be=!!(ue||Fe||M&&j<L);if((ee.burning||ee.wrecked)&&C.health>0&&(E.mode="foot",C.seated=!1),C.health<=0){E.mode="disabled",ee.driver=null,C.down<=0&&re(C,y)>13&&Z.every(xe=>xe===ee||re(xe,E.berth)>3.5)&&(dt(C),Qn(ee,E.berth),li(ee,0),E.mode="ready",E.retaliation=null);return}if(E.mode==="patrol"&&(be||ee.integrity<=0)&&(E.mode="driving",ee.driver=null,E.stop=null,E.stall=0,E.departing=!1),E.mode==="patrol")return;if(Fe&&(E.mode==="ready"||E.mode==="boarding"||E.mode==="reboard")&&(E.mode="foot"),E.mode==="ready"&&be){let xe=ee.integrity>0&&re(C,ee)<22;E.mode=xe?"boarding":"foot",E.stop=null,E.stall=0,E.departing=xe&&re(ee,E.berth)<2}if(E.mode==="boarding"||E.mode==="reboard"){E.mode==="boarding"&&!be&&(E.mode="reboard"),E.mode==="reboard"&&be&&(E.mode="boarding");let xe=Ju(ee);if(ee.burning||ee.wrecked||ee.integrity<=0||re(C,ee)>45)E.mode=be?"foot":"ready";else if(xe&&re(C,xe)<.63)C.seated=!0,C.model.root.visible=!1,ee.doorTime=.6,E.mode==="reboard"?_a(E,!1):E.mode="driving";else if(xe){let Ce=Sm(C,ee,xe),_e=Pn(C,Ce.x,Ce.z,s.walkSolids(Ce.x,Ce.z,0),Z,[],.34)?Ce:xe;E.intent=Mn(C,_e,E.mode==="boarding"?3.75:2.35,u)}}if(E.mode==="driving"){if(!be&&ee.integrity>0&&!E.departing){_a(E,!1);return}let xe=Ne?re(ee,Ne):1/0;!be||ee.integrity<=0||E.stall>8.2&&!E.maneuver||xe<12.7&&!(Ne===ne&&Math.abs(ne.speed)>6)?(ai(ee,u,{throttle:0,steer:0,brake:!0},r,Z),Math.hypot(ee.vx,ee.vz)<2.7&&!wm(E)&&ee.integrity>0&&ai(ee,u,{throttle:.21,steer:.26,brake:!1},r,Z)):zc(E,Ne,r,Z,X,u)}else if(E.mode==="foot")be&&Ne===ut?E.intent=Mn(C,Ne,3.45,u):be?E.combat=Yc(C,Ne,u):ee.integrity>0&&re(C,ee)<40?E.mode="reboard":(E.mode="ready",re(y,ee)>25&&Z.every(xe=>xe===ee||re(xe,E.berth)>3.5)&&(Qn(ee,E.berth),li(ee,0)));else if(E.mode==="ready"){let xe=j<2&&re(y,C)>24&&re(y,E.berth)>19&&re(C,E.berth)<30?$u(E):null;xe&&Ic(xe,Z.filter(Ce=>Ce!==ee),y,r)?_a(E):Tm(E,u)}let ge=E.mode==="driving"||be&&E.mode==="foot";ee.lamps.forEach((xe,Ce)=>{xe.visible=!ge||Math.floor(ce*8+Ce)%2===0}),ge&&ze<=0&&re(y,ee)<42&&(Ie.siren(),ze=1.35)})}let ao=(u,y,M)=>({x:u.x+Math.cos(u.angle)*y+Math.sin(u.angle)*M,z:u.z-Math.sin(u.angle)*y+Math.cos(u.angle)*M}),ju=!1;function Em(u,y){for(let M of Z){let L=re(M,y)<60,E=M.kind==="bike",j=M.root.position.y,C=M.lastImpact??0;if(M.impact>3.4&&M.impact>C+1.5){let ge=(M.lastSpeed??M.speed)>=0?1:-1,xe=ao(M,0,ge*(M.halfLength??1.1));L&&c.sparks(xe.x,j+.45,xe.z,8+Math.round(M.impact*2),3+M.impact*.3),E||(ge>0?M.damageFront+=M.impact*1.7:M.damageRear+=M.impact*1.7)}M.lastImpact=M.impact,M.lastSpeed=M.speed;for(let ge of M.bumpers??[]){let xe=ge.end>0?M.damageFront:M.damageRear;if(ge.state===0&&xe>22&&(ge.state=1),ge.state===1&&xe>48&&(ge.state=2,t.attach(ge.mesh),ge.velocity.set(M.vx*.5+(Math.random()-.5),1.4,M.vz*.5+(Math.random()-.5)),ge.spin=(Math.random()-.5)*5),ge.state===2){let Ce=ge.mesh;Ce.position.addScaledVector(ge.velocity,u),ge.velocity.y-=9.8*u;let _e=kn(Ce.position.x,Ce.position.z)+.15;Ce.position.y<_e?(Ce.position.y=_e,ge.velocity.y=0,ge.velocity.x*=Math.exp(-u*5),ge.velocity.z*=Math.exp(-u*5),ge.spin*=Math.exp(-u*5),Ce.rotation.x+=(0-Ce.rotation.x)*Math.min(1,u*8),Ce.rotation.z+=(0-Ce.rotation.z)*Math.min(1,u*8)):Ce.rotation.x+=ge.spin*u*.6,Ce.rotation.y+=ge.spin*u}}if(M.wrecked){M.wreckClock=(M.wreckClock??0)+u,L&&M.wreckClock<30&&Math.random()<u*5&&c.engineSmoke(M.x,j+1.1,M.z,!0);continue}let ee=ao(M,0,E?.35:M.halfLength-.75),ue=j+(E?.65:M.spec.belt+.1);if(M.integrity<45&&L&&Math.random()<u*(M.integrity<22?14:6)&&c.engineSmoke(ee.x,ue,ee.z,M.integrity<22),!M.burning&&M.integrity<=12){M.speed=0,M.vx=0,M.vz=0,M===ne&&Oi(!0);for(let ge of[...M.passengers??[]])lr(ge);(M.driver||or(M)?.officer.seated)&&ls(M,0,M),M.driver=null,M.burning=!0,M.fire=E?4.5:7,re(M,h)<4&&Qe("O ve\xC3\xADculo pegou fogo! Saia j\xC3\xA1.")}if(M.burning){if(M.fire-=u,M.integrity=Math.min(M.integrity,12),L)for(let ge=0;ge<2;ge++)c.flame(ee.x,ue,ee.z,E?.7:1.1);M.fire<=0&&Cm(M);continue}let Fe=Math.hypot(M.vx,M.vz),Ne=Math.abs(M.vx*Math.cos(M.angle)-M.vz*Math.sin(M.angle)),be=M===ne&&ju&&Fe>8;if(Fe>4&&(Ne>2.6||be)){let ge=-(M.wheelbase??1.5)/2,xe=E?[ao(M,0,ge)]:[ao(M,-(M.halfWidth-.17),ge),ao(M,M.halfWidth-.17,ge)];M.skid??=xe.map(Ce=>({...Ce})),re(M.skid[0],xe[0])>.45&&(xe.forEach((Ce,_e)=>{c.skid(M.skid[_e].x,M.skid[_e].z,Ce.x,Ce.z,kn(Ce.x,Ce.z)),M.skid[_e]={...Ce}}),L&&Ne>3.5&&c.tireSmoke(xe[0].x,j+.2,xe[0].z))}else M.skid=null}}function Cm(u){let y={x:u.x,z:u.z},M=u.root.position.y;u===ne&&(Oi(!0),Yn(h,100,y));for(let L of[...u.passengers??[]])lr(L),Yn(L,100,y);(u.driver||or(u)?.officer.seated)&&ls(u,100,y),u.burning=!1,u.wrecked=!0,u.integrity=0,u.driver=null,u.wreckClock=0,u.rider&&(u.rider.root.visible=!1),Pp(u),c.explosion(u.x,M,u.z),Ie.explosion(),re(u,ne??h)<25&&(zi=.35);for(let L of[...X,h]){if(L.seated||L===h&&ne)continue;let E=re(L,y);if(E>7.5)continue;let j=1-E/7.5,C=Math.max(.2,E),ee=(L.x-y.x)/C,ue=(L.z-y.z)/C;Tc(L,ee*(4+8*j),3+5*j,ue*(4+8*j)),Yn(L,Math.round(115*j),y)}for(let L of Z){if(L===u||L.wrecked)continue;let E=re(L,y);if(E>7)continue;let j=1-E/7,C=Math.max(.2,E);L.integrity=Math.max(0,L.integrity-48*j),L.vx+=(L.x-y.x)/C*9*j/(L.handling?.mass??1),L.vz+=(L.z-y.z)/C*9*j/(L.handling?.mass??1),L.damageFront+=18*j,L.damageRear+=18*j}for(let L of X)re(L,y)<35&&["civilian","resident"].includes(L.role)&&(L.fear=Math.max(L.fear,6));u.lastHitBy===h&&as(28,h)}function Rm(u){let y=On.reduce((L,E)=>Math.abs(L-u.x)<Math.abs(E-u.x)?L:E),M=On.reduce((L,E)=>Math.abs(L-u.z)<Math.abs(E-u.z)?L:E);return Math.min(Math.abs(u.x-y),Math.abs(u.z-M))>3.5?null:Math.abs(u.x-y)<Math.abs(u.z-M)?{x:y+(u.x>=y?4.4:-4.4),z:u.z}:{x:u.x,z:M+(u.z>=M?4.4:-4.4)}}function Im(u){if(Q.wait-=u,!Q.target&&Q.wait<=0){Q.wait=1;let Ne=S.filter(be=>be.kind==="car"&&be!==ne&&!be.driver&&!be.burning&&!be.towed&&!be.shopping&&!wn.has(be)&&(be.wrecked||be.abandoned>18&&be.leftInLane));Ne.sort((be,ge)=>re(be,U)-re(ge,U));for(let be of Ne){let ge=be.halfLength+U.halfLength+.14,xe=Z.filter(_e=>_e!==U&&_e!==be),Ce=[1,-1].map(_e=>({x:be.x+Math.sin(be.angle)*ge*_e,z:be.z+Math.cos(be.angle)*ge*_e,angle:be.angle+(_e<0?Math.PI:0)})).filter(_e=>Hr({..._e,kind:"car",shape:U.shape},r,xe));if(Ce.sort((_e,rt)=>re(_e,U)-re(rt,U)),!!Ce.length){Object.assign(Q,{target:be,hitch:Ce[0],stop:null,maneuver:null,stall:0});break}}}let y=Q.target;if(!y)return;if(y===ne||y.driver||y.burning||y.towed){Object.assign(Q,{target:null,hitch:null,carrying:!1,unload:0});return}if(Q.unload>0){Q.unload-=u,Q.unload<=0&&(y.towed=!0,y.root.visible=!1,y.x=480,y.z=480,y.abandoned=0,Object.assign(Q,{target:null,hitch:null,carrying:!1,unload:0,wait:2.5,stop:null}));return}let M=Z.filter(Ne=>Ne!==y),L=re(U,Q.hitch);!Q.carrying&&L<2.2&&Math.abs(y.speed)<.7&&(Q.carrying=!0,Q.stop=null,Q.maneuver=null,Q.stall=0);let{approach:E,gate:j,bay:C}=vi,ee=U.z>57&&Math.abs(U.x-j.x)<3.4;if(Q.carrying&&U.z>C.z-1.2&&ee){U.speed=U.vx=U.vz=0,y.speed=y.vx=y.vz=0,Q.unload=2.5;return}let ue=Q.carrying?ee||re(U,E)<4?C:E:U.z>60.2?E:Q.hitch,Fe=re(U,ue);if(Fe<15||U.z>60||ue.x>62){let Ne=$r(U,ue,Math.min(Q.carrying?5:7.5,Fe*.85));ai(U,u,Ne,r,M)}else zc(Q,ue,r,M,X,u);if(Q.carrying){let Ne=y.halfLength+U.halfLength+.14,be=Math.atan2(U.x-y.x,U.z-y.z),ge=U.x-Math.sin(be)*Ne,xe=U.z-Math.cos(be)*Ne;ns(ge,xe,be,r,y.shape)&&Object.assign(y,{x:ge,z:xe,angle:be}),y.speed=y.vx=y.vz=0}}function Pm(u,y){for(let E of R)E!==ne&&E.stolen&&!E.towed&&(E.abandoned+=u);Im(u);let M={player:ne,vehicles:Bu(),keepToStreet:!0},L=G.filter(E=>E.mode==="patrol").map(E=>E.car);for(let[E,j]of wn){if(!ne||E.wrecked||E.burning){for(let C of[...E.passengers])lr(C);wn.delete(E);continue}E.passengers?.length&&(re(E,ne)>8?zc(j,ne,r,Z,X.filter(C=>!C.seated),u):ai(E,u,{throttle:0,steer:0,brake:!0},r,Z))}kp([...A.filter(E=>!wn.has(E)&&!E.shopping&&!E.towed&&!(Q.carrying&&Q.target===E)),...L],M,X,r,u,x,s.signals),R.forEach((E,j)=>{if(E.towed){let{x:C,z:ee,angle:ue}=[..._,...T][j];re(y,{x:C,z:ee})>40&&Ic({...E,x:C,z:ee,angle:ue},M.vehicles.filter(Fe=>Fe!==E),y,r)&&(Qn(E,{x:C,z:ee,angle:ue}),E.stolen=!1,E.towed=!1,E.root.visible=!0)}});for(let E of R)wn.has(E)||Q.carrying&&Q.target===E||E.towed||(E!==ne&&Math.hypot(E.vx,E.vz)>.06?ai(E,u,{throttle:0,steer:0,brake:!0},r,M.vehicles):E!==ne&&(E.impact=Math.max(0,E.impact-u*21)));for(let E of Z){if(E.routeIndex>=0&&E!==ne&&!wn.has(E)&&!E.shopping&&!(Q.carrying&&Q.target===E)){E.abandoned+=u;let j=E.towed&&E.abandoned>12,C=(E.driver?.stuck??0)>24;if((j||C)&&!E.burning&&re(y,E)>17){let ee={};if(Kr(ee,E.routeIndex,Math.floor(ce)%7),ee.kind=E.kind,ee.shape=E.shape,Ic(ee,M.vehicles.filter(ue=>ue!==E),y,r)){Object.assign(E,ee,{towed:!1}),E.root.visible=!0;let ue=E.ownDriver;ue&&!ue.seated&&!ue.riding&&ue.role==="civilian"&&re(ue,y)>20&&(dt(ue),ue.seated=!0,ue.model.root.visible=!1)}}}E!==ne&&E.impact>5&&re(y,E)<18&&Ke<=0&&(Ie.crash(),Ke=.32),!E.towed&&(li(E,u,E.steer),E.rider&&(E.rider.root.visible=!!E.driver&&E.integrity>0,E.rider.root.visible&&vu(E.rider,E)))}if(ne){if(ne.impact>4.1&&Ke<=0){Ie.crash(),zi=.24,Ke=.36;let E=ne,j=E.impact;Qe(E.integrity<43?"Motor avariado.":"Colis\xE3o."),ne&&E.kind==="bike"&&j>10.5&&(Yn(h,Math.min(40,Math.round(j*1.6))),E.integrity=Math.max(0,E.integrity-4),Oi(!0),Qe("Voc\xEA caiu da moto."))}if(ne&&ne.integrity<=0&&Math.hypot(ne.vx,ne.vz)<3){let E=ma(ne);Oi(!0),Qe(E+" sem condi\xE7\xF5es de rodar.")}}}function Mn(u,y,M,L){if(!y)return 0;u.walkIntent=y;let E=d(u),j=re(u,y);if(j<.13)return 0;let C=s.interiorAt(u.x,u.z,l(u)),ee=s.interiorAt(y.x,y.z,y.y??l(y));if(!C&&!ee)return o(u,y,M,L);let ue=y,Fe=(ge,xe)=>[.24,.46,.68,.88,1].every(Ce=>Rn(ge.x+(xe.x-ge.x)*Ce,ge.z+(xe.z-ge.z)*Ce,.29,E));if(!Fe(u,y)){let ge=1/0;for(let xe of E)if(!(re(u,xe)>Math.hypot(xe.w,xe.d)*.5+3.1))for(let Ce of[-1,1])for(let _e of[-1,1]){let rt={x:xe.x+Ce*(xe.w*.5+.44),z:xe.z+_e*(xe.d*.5+.44)},tn=re(u,rt),zt=re(rt,y);if(tn<.3||tn>4.5||!Fe(u,rt))continue;let nn=tn+zt+(zt>j+.25?1.7:0);nn<ge&&(ge=nn,ue=rt)}}let Ne=Math.atan2(ue.x-u.x,ue.z-u.z);u.angle=Bn(u.angle,Ne,L*8.5);let be=Math.min(M*L,re(u,ue));return na(u,u.x+Math.sin(Ne)*be,u.z+Math.cos(Ne)*be,.26,E)?M:0}let cs={x:NaN,z:NaN,angle:0};function Qu(u,y){let M=l(u);if(s.interiorAt(u.x,u.z,M))return{x:u.x,z:u.z,y:M};let L=Math.floor((Math.sqrt(1+y)-1)*.75),E=(y%2===0?1:-1)*(1.05+y%5*.66),j=(Z.includes(u)?u.halfLength+3.2:3.1)+L*1.1,C=u===h?cs.angle:u.angle,ee=Math.sin(C),ue=Math.cos(C);for(let[Fe,Ne]of[[j,E],[j,E*.38],[j,0],[1.6,0],[0,E*.5]]){let be=u.x-ee*Fe+ue*Ne,ge=u.z-ue*Fe-ee*Ne;if(Pn(u,be,ge,s.walkSolids(be,ge,M),Z,[],.44))return{x:be,z:ge,y:M}}return{x:u.x,z:u.z,y:M}}function Zc(u,y,M,L){let E=s.interiorAt(u.x,u.z,l(u)),j=s.interiorAt(y.x,y.z,y.y??l(y));if(E?.buildingId===j?.buildingId&&Math.abs((E?.floor??0)-(j?.floor??0))<1.1)return u.pursuitRoute=[],u.pursuitKey="",Mn(u,y,M,L);let C=(j?.buildingId??"street")+":"+(j?.floor??0);if(u.pursuitKey!==C){u.pursuitKey=C;let ee=[],ue=s.buildings.find(ge=>ge.id===E?.buildingId),Fe=s.buildings.find(ge=>ge.id===j?.buildingId),Ne=ue?.units.find(ge=>Math.abs(ge.floor-E.floor)<.25),be=Fe?.units.find(ge=>Math.abs(ge.floor-j.floor)<.25);ue&&ee.push(Ne?.inside,Ne?.entry,Ne?.outside,...[...Ne?.stairs??[]].reverse(),ue.inside,ue.entry,ue.outside),Fe&&ee.push(Fe.outside,Fe.entry,Fe.inside,...be?.stairs??[],be?.outside,be?.entry,be?.inside),u.pursuitRoute=ee.filter(Boolean)}for(;u.pursuitRoute.length&&re(u,u.pursuitRoute[0])<.66&&Math.abs(l(u)-(u.pursuitRoute[0].y??0))<.85;)u.pursuitRoute.shift();return Mn(u,u.pursuitRoute[0]??y,M,L)}function Lm(u,y,M){let L=u.itinerary[0];return L?re(u,L)<.58&&Math.abs(l(u)-(L.y??0))<1.1?(u.itinerary.shift(),0):Mn(u,L,y,M):0}function Dm(u){let y=u.calling;u.calling=null,!(!y||u.health<=0)&&(pt=Math.min(64,Math.max(pt,0)+y.pressure*.7),ut={x:y.x,z:y.z,y:0,health:100,seated:!1,angle:0},$=!1,Qe("Uma testemunha ligou para a pol\xEDcia."))}function Nm(u,y){if(u.brawl-=y,u.health<35)return u.brawl=0,u.fear=6,{speed:0};let M=re(u,h);if(M>16)return u.brawl=0,{speed:0};if(u.punchLand>0&&(u.punchLand-=y,u.punchLand<=0&&re(u,h)<1.4&&h.health>0&&!h.ragdoll)){Yn(h,6,u);let L=Math.max(.2,M);h.pushX+=(h.x-u.x)/L*2.4,h.pushZ+=(h.z-u.z)/L*2.4,Ie.punch(!0)}return ne?{speed:0}:M>1.15?{speed:Mn(u,h,3.6,y)}:(u.angle=Bn(u.angle,Math.atan2(h.x-u.x,h.z-u.z),y*10),u.attack<=0&&(u.punchT=to,u.punchHand=1-(u.punchHand??0),u.attack=1.05,u.punchLand=Qs),{speed:0})}function ed(){let u=[];et&&!ne&&hn(h)&&u.push(h);for(let y of Wt)y.order==="dealer"&&hn(y)&&y.post&&re(y,y.post)<7&&u.push(y);return u}let cr=()=>Object.keys(tr).filter(u=>Ye[u]>0);function Um(u){if(Oe-=u,!(Oe>0)&&(Oe=4+Math.random()*4,!!cr().length))for(let y of ed()){if(X.some(E=>E.buyer?.seller===y))continue;let M=A.find(E=>E.kind==="car"&&E.driver&&E.ownDriver?.seated&&!wn.has(E)&&!E.burning&&Math.abs(E.speed)<2&&re(E,y)<26&&(E.visitTime??-100)<ce-65);if(M&&Math.random()<.12){let E=Math.cos(M.angle),j=-Math.sin(M.angle),C=[-1,1].map(ee=>({x:M.x+E*ee*2.4,z:M.z+j*ee*2.4})).find(ee=>Rc(ee.x,ee.z,M.angle,M.shape)&&Hr({...ee,angle:M.angle,kind:M.kind,shape:M.shape},r,Z.filter(ue=>ue!==M)));if(C){Object.assign(M,C);let ee=M.ownDriver,ue=M.driver;if(ls(M,0,y)){M.shopping=!0,M.visitTime=ce,M.speed=M.vx=M.vz=0,ee.shoppingTrip={car:M,route:ue},ee.fear=0,ee.buyer={seller:y,wait:0};continue}}}let L=X.find(E=>E.role==="civilian"&&hn(E)&&E.fear<=0&&!E.buyer&&!E.calling&&!(E.brawl>0)&&!E.itinerary.length&&re(E,y)>4&&re(E,y)<38&&(E.boughtAt??-99)<ce-45);L&&(L.buyer={seller:y,wait:0})}}function Fm(u,y){let M=u.buyer,L=M.seller;if(!ed().includes(L)||!cr().length)return u.buyer=null,0;if(re(u,L)>1.3)return Mn(u,L,1.6,y);if(u.angle=Bn(u.angle,Math.atan2(L.x-u.x,L.z-u.z),y*6),M.wait+=y,M.wait<1.6)return 0;let E=cr(),j=E[Math.floor(Math.random()*E.length)],C=Math.min(Ye[j],1+Math.floor(Math.random()*3)),ee=C*tr[j].retail;return Ye[j]-=C,Ee+=ee,u.buyer=null,u.boughtAt=ce,L===h?(Qe("+R$ "+ee+" \xB7 "+tr[j].name),Ie.sale(),pa(h)?as(16,h,!0):Nu(h,12)):(L.sales=(L.sales??0)+ee,re(L,ne??h)<30&&Ie.sale()),0}function zm(u,y){let M=f();for(let E of G){let j=E.officer;!hn(j)||E.retaliation||re(j,u)<26&&Qr({...j,ground:l(j)},{...u,ground:l(u)},M,{range:26,fov:Math.PI*.9,eye:1.6,aim:1.2})&&(E.retaliation=u)}let L=G.map(E=>E.officer).filter(E=>hn(E)&&re(E,u)<22&&G.some(j=>j.officer===E&&j.retaliation===u)).sort((E,j)=>re(E,u)-re(j,u))[0];if(L){if(u.health>45)return u.fleeing=!1,Yc(u,L,y);u.fleeing=!0;let E=Math.atan2(u.x-L.x,u.z-L.z),j={x:u.x+Math.sin(E)*6,z:u.z+Math.cos(E)*6};return{speed:Mn(u,j,4.6,y),aim:!1}}if(u.post&&!u.fleeing){let E=X.find(j=>j.buyer?.seller===u);if(u.offerDelay=(u.offerDelay??0)-y,!E&&u.offerDelay<=0&&cr().length){u.offerDelay=4+Math.random()*4;let j=X.find(C=>hn(C)&&C.role==="civilian"&&!C.buyer&&!C.calling&&C.fear<=0&&re(C,u.post)<6&&(C.boughtAt??-99)<ce-30);j&&Math.random()<.55&&(j.buyer={seller:u,wait:0},E=j)}if(E&&re(E,u)>1.15&&re(E,u.post)<6)return{speed:Mn(u,E,1.2,y),aim:!1};if(E)return{speed:0,aim:!1};if(!u.dealerWalk||re(u,u.dealerWalk)<.5||(u.dealerWalkTime-=y)<=0){let j=Math.floor(Math.random()*8);u.dealerWalk=null,u.dealerWalkTime=5;for(let C=0;C<8;C++){let ee=(j+C)*Math.PI/4,ue={x:u.post.x+Math.sin(ee)*3.4,z:u.post.z+Math.cos(ee)*3.4};if(re(u,ue)>1.5&&Pn(u,ue.x,ue.z,s.walkSolids(ue.x,ue.z,0),Z,[],.48)){u.dealerWalk=ue;break}}}if(u.dealerWalk)return{speed:Mn(u,u.dealerWalk,1.25,y),aim:!1}}return u.post&&re(u,u.post)>.8?{speed:Mn(u,u.post,u.fleeing?3.2:2.6,y),aim:!1}:(u.fleeing=!1,{speed:0,aim:!1})}function Om(u,y=qn){let M=Wt.filter(L=>L.health>0&&(y?.role!=="ally"||L===y));if(!M.length){Qe("Recrute algu\xE9m primeiro.");return}if(u==="toggle"&&(u=M.some(L=>L.order!=="wait"&&L.order!=="dealer")?"wait":"follow"),u==="undealer"){for(let L of M)if(L.order==="dealer"){L.order="follow",L.post=null,L.dealerWalk=null,L.commandTarget=null;for(let E of q)E.buyer?.seller===L&&(E.buyer=null)}Qe("Ponto de venda desfeito.")}else if(u==="follow"||u==="wait"){for(let L of M)L.commandTarget=null,L.order=u,L.hold={x:L.x,z:L.z},L.post=null;Qe(u==="wait"?"Gangue: esperem aqui.":"Gangue: comigo.")}else if(u==="attack"){let E=(y?.role!=="ally"?y:null)??G.map(j=>j.officer).filter(j=>hn(j)&&re(j,h)<30&&pt>0).sort((j,C)=>re(j,h)-re(C,h))[0];if(E){for(let j of M)j.commandTarget=E;Qe("Gangue: ataquem!")}else Qe("Mire no alvo para a gangue atacar.")}else if(u==="dealer"){for(let L of M)L.order="dealer",L.dealerWalk=null,L.post={x:L.x,z:L.z},L.sales??=0,L.boardCar=null;Qe(cr().length?"Ponto de venda montado.":"Ponto montado, mas falta estoque.")}Ie.bell()}function Bm(u){if(fe!=="pad"&&fe!=="touch")return;let y=.2,M=null;for(let{actor:L,y:E}of ga(h)){if(L.role==="ally"||re(L,h)>28)continue;St.set(L.x,E+1.25,L.z).project(i);let j=Math.hypot(St.x,St.y);St.z<1&&j<y&&(y=j,M={x:St.x,y:St.y})}M&&(I-=vt(M.x*2.2*u,-.04,.04),te-=vt(M.y*1.6*u,-.03,.03))}function td(u,y,M=!1){X=q.filter(C=>re(C,y)<(C.role==="civilian"?69:47)||C.role==="ally"||C.role==="police"||C===Dn);let L=new Set(X);for(let C of q)C.model.root.visible=L.has(C)&&!C.seated;let E=ne?X:[...X,h],j=new Map(X.map(C=>[C,{x:C.x,z:C.z}]));M||Am(u,y);for(let C of X){if(C.seated||(C.attack-=u,C.stagger=Math.max(0,C.stagger-u),C.injuryCooldown-=u,C.exitAnim=Math.max(0,C.exitAnim-u),C.exitAge+=u,C.ragdoll&&C.health>0&&Ac(C,u,l(C),(xe,Ce)=>!Rn(xe,Ce,.22,d(C)))))continue;if(C.health<=0){if(C.down=Math.max(0,C.down-u),C.deadTime+=u,C.ragdoll)Ac(C,u,l(C),(xe,Ce)=>!Rn(xe,Ce,.22,d(C))),C.drop&&C.drop.position.set(C.x,l(C)+.019,C.z);else if(C.deadTime<1.2){C.x+=C.pushX*u,C.z+=C.pushZ*u,C.pushX*=Math.exp(-u*5),C.pushZ*=Math.exp(-u*5);let xe=oa(C.model,C.deadTime,C.fallDir);C.model.root.rotation.set(xe,C.angle,0),C.model.root.position.set(C.x,l(C)+Math.abs(Math.sin(xe))*.31,C.z),C.drop&&C.drop.position.set(C.x+Math.sin(C.angle)*C.fallDir*1.25,l(C)+.019,C.z+Math.cos(C.angle)*C.fallDir*1.25)}if(C.drop){let xe=Math.min(.63,.32+(19-C.down)*.09);C.drop.rotation.z=C.angle,C.drop.scale.set(Math.max(.38,xe),Math.max(.24,xe*.68),1)}C.role!=="police"&&C.down<=0&&re(C.home,y)>10&&re(C,y)>10&&X.every(xe=>xe===C||!hn(xe)||re(xe,C.home)>1.55)&&Pn(C,C.home.x,C.home.z,s.walkSolids(C.home.x,C.home.z,0),Z,[],.42)&&(dt(C),k.includes(C)&&(C.seated=!0,C.model.root.visible=!1));continue}let ee=0,ue=!1,Fe=G.find(xe=>xe.officer===C);if(Fe)ee=Fe.combat?.speed??Fe.intent??0,ue=!!Fe.combat?.aim,Fe.intent=0,Fe.combat=null;else if(C.role==="ally"&&C.order==="dealer")({speed:ee,aim:ue}=zm(C,u));else if(C.role==="ally")if(ne&&C.order!=="wait"&&(!C.boardCar||C.boardCar===ne&&re(C,ne)>12)&&dm(C),C.boardCar)ee=fm(C,u);else if(ar(C.commandTarget)||ar(Dn))({speed:ee,aim:ue}=Yc(C,ar(C.commandTarget)?C.commandTarget:Dn,u));else if(C.order==="wait")C.hold&&re(C,C.hold)>.9&&(ee=Mn(C,C.hold,3.4,u));else{let xe=Qu(y,Wt.indexOf(C));(re(xe,C)>1.25||Math.abs(l(C)-xe.y)>1.75)&&(ee=Zc(C,xe,ne?6.1:4.45,u))}else if(C.brawl>0&&hn(h))({speed:ee}=Nm(C,u));else if(C.calling)C.calling.time-=u,C.angle=Bn(C.angle,Math.atan2(C.x-C.calling.x,C.z-C.calling.z),u*4),C.calling.time<=0&&Dm(C);else if(C.buyer&&C.fear<=0)ee=Fm(C,u);else if(C.shoppingTrip&&!C.buyer){let{car:xe,route:Ce}=C.shoppingTrip;if(xe===ne||xe.driver||xe.wrecked||xe.burning)C.shoppingTrip=null,xe.shopping=!1;else if(re(C,xe)<xe.halfLength+.8){C.seated=!0,C.shoppingTrip=null,xe.shopping=!1,xe.driver=Ce;continue}else ee=Mn(C,xe,1.8,u)}else if(C.surrender<=0){let xe=C.path[C.next];if(C.role==="clerk"&&(re(C,C.home)>.55?xe=C.home:C.angle=Bn(C.angle,re(h,C)<4?Math.atan2(h.x-C.x,h.z-C.z):C.home.angle,u*4)),C.role==="civilian"&&C.x<61&&!C.itinerary.length&&C.fear<=0&&N.length&&(C.scheduleClock-=u,C.scheduleClock<=0)){let Ce=N[Math.floor(Math.abs(C.home.x*11+C.home.z*4+ce))%N.length];re(C,Ce.outside)<38&&(C.itinerary=[Ce.outside,Ce.entry,Ce.inside,Ce.entry,Ce.outside]),C.scheduleClock=36+Math.abs(C.home.x)%25}if(C.fear=Math.max(0,C.fear-u),C.fear>0&&re(C,y)<15){let Ce=Math.atan2(C.x-y.x,C.z-y.z);for(let _e of[0,.84,-.84,1.52,-1.52]){let rt=Ce+_e;if(na(C,C.x+Math.sin(rt)*3.7*u,C.z+Math.cos(rt)*3.7*u,.22,d(C))){C.angle=Bn(C.angle,rt,u*8),ee=3.7;break}}}else C.itinerary.length?ee=Lm(C,C.pace,u):xe&&(C.path.length&&re(C,xe)<.54&&(C.next=(C.next+1)%C.path.length,xe=C.path[C.next]),ee=Mn(C,xe,C.pace,u))}let Ne=j.get(C);if(Ne&&C.exitAnim<=0&&(C.walkIntent||C.x!==Ne.x||C.z!==Ne.z||Math.abs(C.pushX)+Math.abs(C.pushZ)>.015)){let xe=C.x-Ne.x+C.pushX*u,Ce=C.z-Ne.z+C.pushZ*u;C.x=Ne.x,C.z=Ne.z;let _e=Fe?.mode==="boarding"?Z.filter(zt=>zt!==Fe.car):Z,rt=E.filter(zt=>zt!==C&&re(zt,Ne)<3.6&&(!C.boardCar||zt.role!=="ally")),tn=Mc(C,xe,Ce,d(C),l(C)>1.25?[]:_e,rt,.29);if(ee>0&&tn<ee*u*.55){let zt=Math.atan2(xe,Ce),nn=C.detourSide??(C.home.x<0?-1:1),Gn=d(C),Dt=rt.filter(Ei=>re(Ei,C)<4);for(let Ei of[nn*.65,nn*1.25,-nn*.65,-nn*1.25,nn*1.85,-nn*1.85]){let Kc=zt+Ei,sd=Math.sin(Kc),rd=Math.cos(Kc);if(Pn(C,C.x+sd*.7,C.z+rd*.7,Gn,_e,Dt,.32)&&Mc(C,sd*ee*u,rd*ee*u,Gn,_e,Dt,.29)>u*.2){C.detourSide=Math.sign(Ei),C.angle=Bn(C.angle,Kc,u*7);break}}(C.stuckTime??0)>.7&&(C.repath=Math.min(C.repath??0,.12))}if(C.walkIntent&&re(C,C.walkIntent)>.65&&re(C,Ne)<u*.18?C.stuckTime=(C.stuckTime??0)+u:C.stuckTime=0,C.walkIntent=null,C.stuckTime>=3){let zt=null;for(let nn=.55;nn<=4&&!zt;nn+=.45)for(let Gn=0;Gn<16;Gn++){let Dt=C.x+nn*Math.sin(Gn*Math.PI/8),Ei=C.z+nn*Math.cos(Gn*Math.PI/8);if(Pn(C,Dt,Ei,s.walkSolids(Dt,Ei,l(C)),_e,[...rt,h],.34)){zt={x:Dt,z:Ei};break}}zt&&(Object.assign(C,zt),m(C),C.route=[],C.repath=0),C.stuckTime=0,zt&&(C.hopTime=.36)}ee>0&&(ee=Math.min(ee,re(C,Ne)/u))}if(C.pushX*=Math.exp(-u*7.6),C.pushZ*=Math.exp(-u*7.6),!M&&C.injuryCooldown<=0){let xe=nd(C,2.8);if(xe){let{car:Ce,speed:_e,vx:rt,vz:tn}=xe,zt=Pu(_e);C.pushX=vt(rt,-8,8)*.59,C.pushZ=vt(tn,-8,8)*.59,zt>0&&(C.injuryCooldown=1.18,_e>6.5&&Tc(C,rt*.7,1.8+_e*.16,tn*.7),Yn(C,zt),Ce===ne&&zt>12&&as(19))}}let be=C.model;if(C.health<=0)continue;m(C),C.hopTime=Math.max(0,(C.hopTime??0)-u),be.root.position.set(C.x,l(C)+C.exitAnim*.35+.28*Math.sin(Math.PI*C.hopTime/.36),C.z);let ge=C.stagger>0?Math.sin(C.stagger/.32*Math.PI)*.24:0;be.root.rotation.set(C.exitAnim*.7-ge,C.angle,C.exitAnim*C.exitSide*.89+(C.stagger>0?Math.sin(C.stagger*9)*.12:0)),Js(be,u,C.exitAnim>0?2.9:ee,ue,["police","ally"].includes(C.role),0,0,C.surrender>0),C.punchT>0?(C.punchT=Math.max(0,C.punchT-u),Ru(be,{punch:C.punchT,hand:C.punchHand??0})):C.calling?(be.arms[0].rotation.set(-2.35,0,-.55),be.forearms[0].rotation.set(-2.05,0,0)):C.order==="dealer"&&ee<.1&&!ue&&(be.arms[0].rotation.set(-.4,0,-.25),be.arms[1].rotation.set(-.4,0,.25),be.forearms[0].rotation.set(-1.5,0,.4),be.forearms[1].rotation.set(-1.5,0,-.4))}if(!M&&!ne&&l(h)<1.15&&h.health>0&&h.lift<.3&&nr<=0){let C=nd(h,2.35);if(C){let{speed:ee,vx:ue,vz:Fe}=C,Ne=Pu(ee);h.pushX=vt(ue,-13,13)*.73,h.pushZ=vt(Fe,-13,13)*.73,h.trip=ee>=5.3?Math.min(.82,.35+ee*.021):.12,h.vx=h.vz=0,ee>7&&Tc(h,ue*.65,1.6+ee*.14,Fe*.65),Ne>0&&(Yn(h,Ne),Ie.crash(),Qe("Voc\xEA foi atropelado.")),nr=.87}}}function nd(u,y){for(let M of Z){if(l(u)>1.2||re(M,u)>5)continue;let L=Y.get(M),E=L&&re(L,M)<3?L:null,j=E?Math.hypot(E.vx,E.vz):0,C=Math.hypot(M.vx,M.vz),ee=Math.max(C,j);if(!(ee<y||!fp(M,E,u)))return{car:M,speed:ee,vx:j>C?E.vx:M.vx,vz:j>C?E.vz:M.vz}}return null}function km(u,y){s.updateDoors(u,[y,...X.filter(M=>hn(M))])}function Gm(u,y,M){let L=l(y),E=ne?null:s.interiorAt(y.x,y.z,L),j=!!E;rr!==j&&(rr=j,he=!0);let C=i.aspect<.85,ue=j?M?2.25:3.4:ne?ne.kind==="bike"?8.2:C?12:10.2:M?4.45:C?7.9:6.5,Fe=ne?1.95+ne.root.position.y:1.38+L+h.lift*.46,Ne=ne?0:M?.61:.22,be=M?.1+te*.19:Math.max(j?.28:.1,te);at.set(y.x+Math.cos(I)*Ne,Fe,y.z-Math.sin(I)*Ne),Je.set(at.x-Math.sin(I)*ue*Math.cos(be),Fe+Math.sin(be)*ue,at.z-Math.cos(I)*ue*Math.cos(be));function ge(rt){E&&(rt.x=vt(rt.x,E.x-E.w*.5+.3,E.x+E.w*.5-.3),rt.z=vt(rt.z,E.z-E.d*.5+.3,E.z+E.d*.5-.3),rt.y=vt(rt.y,E.floor+.55,E.ceiling-.42))}ge(Je),s.viewBlocked(at.x,at.y,at.z,.12,!j)&&at.set(y.x,Fe,y.z);for(let rt=.06;rt<=1.0001;rt+=.04){let tn=Fr.lerp(at.x,Je.x,rt),zt=Fr.lerp(at.y,Je.y,rt),nn=Fr.lerp(at.z,Je.z,rt);if(s.viewBlocked(tn,zt,nn,.32,!j)||Z.some(Gn=>Gn!==ne&&re(Gn,{x:tn,z:nn})<2.1&&zt<Gn.root.position.y+1.7)){Je.lerp(at,1-Math.max(.02,rt-.07));break}}ge(Je);let xe=M?14:1,Ce=De?te:te-.22,_e=M?Fe-Math.tan(Ce)*xe:Fe-.07;st.set(at.x+Math.sin(I)*xe,_e,at.z+Math.cos(I)*xe),he?(i.position.copy(Je),he=!1):i.position.lerp(Je,1-Math.exp(-u*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!j)&&i.position.copy(Je),ge(i.position),i.lookAt(st),i.updateMatrixWorld()}function di(u,y,M){Me.fillStyle=y,Me.beginPath(),Me.arc(Tt(u.x),Tt(u.z),M,0,Math.PI*2),Me.fill()}function Vm(u,y){let M=Uc(pt),L=Math.round(re(u,In));We("detail").textContent="Casa "+L+" m \xB7 Loja "+Math.round(re(u,Br))+" m",We("cash").textContent="R$ "+Ee.toLocaleString("pt-BR");let E=Wt.filter(Dt=>Dt.order==="dealer"&&hn(Dt)),j=Wt.some(Dt=>Dt.order==="wait");We("crew").textContent="Gangue "+Wt.length+(Wt.length?j?" \xB7 esperando":" \xB7 seguindo":"")+(E.length?" \xB7 "+E.length+" no ponto":"");let C=ui();We("stash").hidden=!C,We("stash").textContent=C;let ee=E.reduce((Dt,Ei)=>Dt+(Ei.sales??0),0);We("selling").hidden=!et&&!E.length,We("selling").textContent=(et?"Seu ponto de venda est\xE1 aberto. ":"")+(E.length?"Ponto da gangue: R$ "+ee:"");let ue=We("prompt"),Fe=fe==="pad"?"Y \xB7 ":fe==="keyboard"?"E \xB7 ":"",Ne=Uu(),be=!!Ne,ge=Ou(),xe=ku(),Ce=ne??Gu(),_e=Vc(),rt=Fu(),tn=rn&&y&&J<=0;ue.hidden=!(Ce||be||ge||xe||_e||rt||J>0||tn);let zt=_e?"Guardar na garagem":ne?"Sair "+(ne.kind==="bike"?"da moto":"do carro"):rt?"Tirar ve\xEDculo da garagem":ge?"Salvar o progresso":be?nm[Ne.service]:xe?"Porta trancada":Ce?"Pegar "+ma(Ce):"";ue.textContent=J>0?P:tn?"Mantenha a mira \xB7 "+Math.ceil(rn.left)+" s":Fe+zt,We("heat").hidden=!M,We("heat").textContent="\u2605".repeat(M)+" PROCURADO";let nn=ye==="rifle"?"Fuzil":"Pistola";We("mode").textContent=ne?ma(ne)+" \xB7 "+Math.round(ne.integrity)+"%"+(ne.burning?" \xB7 FOGO":""):le?nn:"Vila Brasa",We("reading").textContent=ne?Math.round(Math.hypot(ne.vx,ne.vz)*3.6)+" km/h":le?oe+" balas":"Punhos";let Gn=We("health");Gn.value=h.health,Gn.title="Vida: "+Math.ceil(h.health)+"%",We("crosshair").hidden=!(y||le&&os>0&&!ne),We("interact").textContent=ne?"Sair":ge?"Salvar":be?"Loja":"Entrar",We("sprint").textContent=ne?"Freio":"Correr",We("aim").hidden=!!ne,We("fire").hidden=!!ne||!le,We("weapon").hidden=!!ne||!(H||Te),We("weapon").textContent="Arma",We("sell").hidden=!!ne,We("gang").hidden=!!ne||!Wt.length,We("sell").setAttribute("aria-pressed",String(!!et)),We("jump").hidden=We("punch").hidden=!!ne,We("recruit").hidden=!!ne||!y,We("hud").classList.toggle("armed",!ne),We("hud").classList.toggle("driving",!!ne),Me.drawImage(qe,0,0),lt&&(re(u,lt)<2.2?(lt=null,He.visible=!1):di(lt,"#ffad41",4));for(let Dt of S)Dt!==ne&&Dt.integrity>0&&di(Dt,Dt.driver?"#82b9b3":"#eab987",Dt.kind==="bike"?2.2:Dt.driver?2.6:3.5);di(Br,"#eaff89",6),di(vi.bay,"#d1ad62",3.5),di(Xn.home,"#ffe4aa",4),di(In,"#dcc39b",5);for(let Dt of N)Dt.service==="black"&&di(Dt.entry,"#c58cff",3.2);di(As,"#99c6ff",5);for(let Dt of N)Dt.kind!=="armory"&&di(Dt.entry,"#dbae80",2.5);for(let Dt of G)["driving","patrol","foot"].includes(Dt.mode)&&di(Dt.officer.seated?Dt.car:Dt.officer,Dt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let Dt of Wt)di(Dt,"#97ebaf",3.5);Me.save(),Me.translate(Tt(u.x),Tt(u.z)),Me.rotate(-(ne?ne.angle:h.angle)),Me.fillStyle="#fff9e6",Me.strokeStyle="#243938",Me.lineWidth=2.7,Me.beginPath(),Me.moveTo(0,10),Me.lineTo(-6,-6),Me.lineTo(0,-3),Me.lineTo(6,-6),Me.closePath(),Me.stroke(),Me.fill(),Me.restore()}function Hm(u){let y=(u-we)/1e3,M=vt(y,1/240,.05);we=u,ce+=M;let L=Ls.read(!!ne,M);if(L.map&&!Ue.open&&Yt(),Ue.open){je.x=vt(je.x+L.x*100*M,0,256),je.z=vt(je.z-L.y*100*M,0,256);let E=Ze.getContext("2d");E.drawImage(Me.canvas,0,0),E.strokeStyle="white",E.strokeRect(je.x-3,je.z-3,6,6),L.confirm?xt(je.x,je.z):L.cancel&&Ue.close();return}if(Is.open){L.cancel||L.interact?oo():L.confirm?mt.activate():L.navUp?mt.move(-1):L.navDown?mt.move(1):(Lt-=M,Math.abs(L.y)>.6&&Lt<=0&&(mt.move(L.y>0?-1:1),Lt=.22),Math.abs(L.y)<.3&&(Lt=0)),e.render(t,i);return}if(wt){if(ft){fe=L.mode;for(let Ne of Z)Y.set(Ne,{x:Ne.x,z:Ne.z,vx:Ne.vx,vz:Ne.vz});L.weapon&&(H||Te)&&!ne&&Xt(),L.sell&&!ne&&(et?(et=null,Qe("Ponto de venda fechado.")):cr().length?(et={x:h.x,z:h.z},Qe("Ponto de venda aberto. Fique parado.")):Qe("Sem estoque. Compre no mercado negro da casa de penhores.")),et&&(ne||re(h,et)>4)&&(et=null,Qe("Ponto de venda fechado.")),Um(M);let E=L.aim&&!ne&&pn<=0&&h.health>0;if(E!==De&&(te=E?.015:.22,De=E),Le=Math.abs(L.lookX)+Math.abs(L.lookY)>.003?0:Le+M,I-=L.lookX,te=vt(te+L.lookY,E?-1.03:-.31,.84),ne&&Le>1.2&&(te+=(.24-te)*M),E&&Bm(M),h.health>0&&h.health<100&&ce-(h.lastHurt??0)>10&&(h.health=Math.min(100,h.health+3*M)),Ke-=M,kt-=M,nt-=M,nr-=M,ze-=M,J-=M,O-=M,a.update(M),c.update(M),s.signals.update(M),pn=Math.max(0,pn-M),ir&&(sr-=M,sr<=0&&ym()),Fi-=M,zi-=M,os-=M,hi-=M,wi>0&&(wi-=M,wi<=0&&om()),ei&&(ei.delay-=M,ei.delay<=0)){let Ne=ei.car;ei=null,h.health>0&&Ne.integrity>0&&re(h,Ne)<3.75&&Wc(Ne)}if(L.interact&&am(),Is.open)return;let j=s.props.update(M,Z,ne??h);j.shadow&&(s.sun.shadow.needsUpdate=!0);for(let Ne of j.events)re(Ne,ne??h)<30&&(Ne.heavy?Ie.crash():Ie.punch(!0));km(M,ne??h),ne?Mm(M,L):bm(M,{...L,aim:E}),ju=!!L.brake,Pm(M,ne??h),Em(M,ne??h),ne&&(h.x=ne.x,h.z=ne.z),pm(M),Dn&&!ar(Dn)&&(Dn=null),ne?.kind==="bike"&&vu(h.model,ne);let C=ne??h;if(!Number.isFinite(cs.x)||re(h,cs)>1.15){let Ne=Number.isFinite(cs.x)?Math.atan2(h.x-cs.x,h.z-cs.z):h.angle;cs={x:h.x,z:h.z,angle:Ne}}td(M,C),Zu(C),lm(M),Ie.motor(ne?.speed??0,!!ne);let ee=ne??h,ue=E&&!ne&&h.health>0;L.fire&&le&&!ne&&h.health>0&&oe>0&&(os=1.38),Gm(M,ee,ue||!ne&&os>0),ue&&(hi<=0||L.recruit||L.punch||L.fire&&kt<=0)?(qn=Wu(),hi=.092):ue||(qn=null),L.order&&Om(L.order,ue?Wu():null),L.recruit&&!ne&&gm(qn),xm(M,ue&&le?qn:null),(L.punch||L.fire&&!le)&&!ne&&_m(),L.fire&&!ne&&vm(ue),We("hitmark").hidden=Fi<=0,We("impact").hidden=zi<=0,s.marker.visible=re(ee,Br)>2.8&&re(ee,Br)<13,s.beacon.rotation.y=ce*2,s.beacon.position.y=2.55+Math.sin(ce*4)*.27,Pe-=M,Pe<=0&&(Vm(ee,ue),Pe=.1)}}else{let E=.54+Math.sin(ce*.13)*.19,j=i.aspect<1?26:30;i.position.set(24+Math.sin(E)*j,14,17+Math.cos(E)*j),i.lookAt(10,2,13),td(M,h,!0),Zu(h)}e.render(t,i),ft&&io.value==="auto"&&y>0&&y<.22&&ae>.7&&(se+=y,++ie>=85&&(se/ie>.026&&(ae=Math.max(.69,ae-.16),bt()),ie=0,se=0))}let Ls=qp(()=>{Ue.open?Ue.close():Is.open?oo():ft?Qt(!1):id()},()=>ft),Jc=kc("quality");(Jc==="low"||Jc==="high")&&(io.value=Jc),io.addEventListener("change",()=>{kc("quality",io.value),ae=1,bt()}),We("sound").addEventListener("click",()=>{kc("sound",Ie.toggle()?"on":"off"),Ti()}),We("pause").addEventListener("click",()=>Qt(!1)),We("reset").addEventListener("click",()=>{Ps(),Qt(!0)}),We("close-shop").addEventListener("click",oo),Is.addEventListener("cancel",u=>{u.preventDefault(),oo()});function id(){if(!wt&&on){Object.assign(h,{x:on.x,z:on.z,health:on.health,floorY:0}),m(h),Ee=on.cash,H=on.armed,Te=on.rifle,Ge=H?on.ammo:0,tt=Te?on.rifleAmmo:0,ye="pistol",oe=Ge,gn(H?"pistol":Te?"rifle":"fists"),Object.assign(Ye,on.stash),Nt=on.wardrobe,me=on.look,ni(h,me),on.garage&&(Hu(on.garage.kind,on.garage.model,on.garage.color),Ln=!0,Hc(ht));for(let u of new Set(on.recruits)){let y=typeof u=="number"?z[u]:pe.get(u);y&&(y.role="ally",y.order="follow",y.seated=!1,y.riding=null,y.model.root.visible=!0,Wt.push(y))}Qt(!0),I=-Math.PI/2}else Qt(!0)}so.addEventListener("click",id),document.addEventListener("visibilitychange",()=>{document.hidden&&ft&&Qt(!1)}),window.addEventListener("resize",bt),e.domElement.addEventListener("webglcontextrestored",bt),Ps(),Ti(),bt(),fa(),so.disabled=!1,we=performance.now(),e.setAnimationLoop(Hm)}try{SM()}catch(n){console.error(n),so.textContent="3D indispon\xEDvel",We("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
