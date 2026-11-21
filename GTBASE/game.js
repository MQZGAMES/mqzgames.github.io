(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var _d=0,uh=1,yd=2;var Fs=1,vd=2,Tr=3,ms=0,bn=1,Cn=2,zs=0,gs=1,Po=2,dh=3,fh=4,Md=5;var Os=100,bd=101,Sd=102,wd=103,Td=104,Ad=200,Ed=201,Cd=202,Rd=203,ph=204,mh=205,Id=206,Pd=207,Ld=208,Dd=209,Nd=210,Ud=211,Fd=212,zd=213,Od=214,za=0,Oa=1,Ba=2,_r=3,ka=4,Ga=5,Va=6,Ha=7,gh=0,Bd=1,kd=2,Ai=0,xh=1,_h=2,yh=3,Lo=4,vh=5,Mh=6,bh=7;var Sh=300,Bs=301,Ar=302,fl=303,pl=304,Wa=1e3,Si=1001,Xa=1002,_n=1003,Gd=1004;var Do=1005;var yn=1006,ml=1007;var Ji=1008;var Gn=1009,wh=1010,Th=1011,Er=1012,gl=1013,di=1014,ti=1015,fi=1016,xl=1017,_l=1018,ks=1020,Ah=35902,Eh=35899,Ch=1021,Rh=1022,Kn=1023,Hi=1026,Ki=1027,yl=1028,vl=1029,xs=1030,Ml=1031;var bl=1033,No=33776,Uo=33777,Fo=33778,zo=33779,Sl=35840,wl=35841,Tl=35842,Al=35843,El=36196,Cl=37492,Rl=37496,Il=37488,Pl=37489,Oo=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,zl=37812,Ol=37813,Bl=37814,kl=37815,Gl=37816,Vl=37817,Hl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Zl=36494,Jl=36495,Kl=36283,$l=36284,Bo=36285,jl=36286;var oo=2300,qa=2301,Ua=2302,ih=2303,sh=2400,rh=2401,oh=2402;var Vd=3200;var Ql=0,Hd=1,$i="",fn="srgb",ao="srgb-linear",lo="linear",Ut="srgb";var Fa=7680;var Wd=519,Xd=512,qd=513,Yd=514,Ih=515,Zd=516,Jd=517,Ph=518,Lh=519,Kd=35044,ec=35048;var Dh="300 es",ei=2e3,yr=2001;function Tm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Am(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $d(){let n=co("canvas");return n.style.display="block",n}var Wu={},vr=null;function Nh(...n){let e="THREE."+n.shift();vr?vr("log",e,...n):console.log(e,...n)}function jd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=jd(n);let e="THREE."+n.shift();if(vr)vr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=jd(n);let e="THREE."+n.shift();if(vr)vr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function io(...n){let e=n.join(" ");e in Wu||(Wu[e]=!0,Qe(...n))}function Qd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ef={[za]:za,[Ba]:Va,[ka]:ka,[_r]:Ga,[Oa]:Oa,[Va]:Ba,[Ha]:Ha,[Ga]:_r},wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,so=Math.PI/180,Mr=180/Math.PI;function Cr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function Uh(n,e){return(n%e+e)%e}function Em(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Cm(n,e,t){return n!==e?(t-n)/(e-n):0}function ro(n,e,t){return(1-t)*n+t*e}function Rm(n,e,t,i){return ro(n,e,1-Math.exp(-t*i))}function Im(n,e=1){return e-Math.abs(Uh(n,e*2)-e)}function Pm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Nm(n,e){return n+Math.random()*(e-n)}function Um(n){return n*(.5-Math.random())}function Fm(n){n!==void 0&&(Xu=n);let e=Xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zm(n){return n*so}function Om(n){return n*Mr}function Bm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function km(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),h=o((i-e)/2);switch(s){case"XYX":n.set(a*d,c*f,c*p,a*l);break;case"YZY":n.set(c*p,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*p,a*d,a*l);break;case"XZX":n.set(a*d,c*h,c*m,a*l);break;case"YXY":n.set(c*m,a*d,c*h,a*l);break;case"ZYZ":n.set(c*h,c*m,a*d,a*l);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tf(n,e){if(e.constructor===Float32Array)return n;let t=zh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function nf(n,e){if(e.constructor===Float32Array)return n;let t=zh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Rr={DEG2RAD:so,RAD2DEG:Mr,generateUUID:Cr,clamp:Et,euclideanModulo:Uh,mapLinear:Em,inverseLerp:Cm,lerp:ro,damp:Rm,pingpong:Im,smoothstep:Pm,smootherstep:Lm,randInt:Dm,randFloat:Nm,randFloatSpread:Um,seededRandom:Fm,degToRad:zm,radToDeg:Om,isPowerOfTwo:Bm,ceilPowerOfTwo:km,floorPowerOfTwo:Fh,setQuaternionFromProperEuler:Gm,normalize:nf,denormalize:tf},dt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],p=r[o+0],m=r[o+1],h=r[o+2],v=r[o+3];if(f!==v||c!==p||l!==m||d!==h){let x=c*p+l*m+d*h+f*v;x<0&&(p=-p,m=-m,h=-h,v=-v,x=-x);let _=1-a;if(x<.9995){let T=Math.acos(x),R=Math.sin(T);_=Math.sin(_*T)/R,a=Math.sin(a*T)/R,c=c*_+p*a,l=l*_+m*a,d=d*_+h*a,f=f*_+v*a}else{c=c*_+p*a,l=l*_+m*a,d=d*_+h*a,f=f*_+v*a;let T=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=T,l*=T,d*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[o],p=r[o+1],m=r[o+2],h=r[o+3];return e[t]=a*h+d*f+c*m-l*p,e[t+1]=c*h+d*p+l*f-a*m,e[t+2]=l*h+d*m+a*p-c*f,e[t+3]=d*h-a*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(s/2),f=a(r/2),p=c(i/2),m=c(s/2),h=c(r/2);switch(o){case"XYZ":this._x=p*d*f+l*m*h,this._y=l*m*f-p*d*h,this._z=l*d*h+p*m*f,this._w=l*d*f-p*m*h;break;case"YXZ":this._x=p*d*f+l*m*h,this._y=l*m*f-p*d*h,this._z=l*d*h-p*m*f,this._w=l*d*f+p*m*h;break;case"ZXY":this._x=p*d*f-l*m*h,this._y=l*m*f+p*d*h,this._z=l*d*h+p*m*f,this._w=l*d*f-p*m*h;break;case"ZYX":this._x=p*d*f-l*m*h,this._y=l*m*f+p*d*h,this._z=l*d*h-p*m*f,this._w=l*d*f+p*m*h;break;case"YZX":this._x=p*d*f+l*m*h,this._y=l*m*f+p*d*h,this._z=l*d*h-p*m*f,this._w=l*d*f-p*m*h;break;case"XZY":this._x=p*d*f-l*m*h,this._y=l*m*f-p*d*h,this._z=l*d*h+p*m*f,this._w=l*d*f+p*m*h;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],p=i+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(d-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+d)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-i*l,this._z=r*d+o*l+i*c-s*a,this._w=o*d-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zc=new X,qu=new an,it=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],p=i[2],m=i[5],h=i[8],v=s[0],x=s[3],_=s[6],T=s[1],R=s[4],M=s[7],C=s[2],S=s[5],g=s[8];return r[0]=o*v+a*T+c*C,r[3]=o*x+a*R+c*S,r[6]=o*_+a*M+c*g,r[1]=l*v+d*T+f*C,r[4]=l*x+d*R+f*S,r[7]=l*_+d*M+f*g,r[2]=p*v+m*T+h*C,r[5]=p*x+m*R+h*S,r[8]=p*_+m*M+h*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*r*d+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,p=a*c-d*r,m=l*r-o*c,h=t*f+i*p+s*m;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/h;return e[0]=f*v,e[1]=(s*l-d*i)*v,e[2]=(a*i-s*o)*v,e[3]=p*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oc=new it,Yu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){let n={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ut&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ao]:{primaries:e,whitePoint:i,transfer:lo,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}var At=Vm();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ir,Ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=co("canvas")),ir.width=e.width,ir.height=e.height;let s=ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=co("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bc(s[o].image)):r.push(Bc(s[o]))}else r=Bc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Bc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ya.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var Wm=0,kc=new X,Nn=class n extends wi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Si,s=Si,r=yn,o=Ji,a=Kn,c=Gn,l=n.DEFAULT_ANISOTROPY,d=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Cr(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wa:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wa:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Sh;Nn.DEFAULT_ANISOTROPY=1;var Yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],p=c[1],m=c[5],h=c[9],v=c[2],x=c[6],_=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-v)<.01&&Math.abs(h-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+v)<.1&&Math.abs(h+x)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,M=(m+1)/2,C=(_+1)/2,S=(d+p)/4,g=(f+v)/4,w=(h+x)/4;return R>M&&R>C?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=S/i,r=g/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=w/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=g/r,s=w/r),this.set(i,s,r,t),this}let T=Math.sqrt((x-h)*(x-h)+(f-v)*(f-v)+(p-d)*(p-d));return Math.abs(T)<.001&&(T=1),this.x=(x-h)/T,this.y=(f-v)/T,this.z=(p-d)/T,this.w=Math.acos((l+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Nn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Za{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ho=class extends Nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ct=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,d,f,p,m,h,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,d,f,p,m,h,v,x)}set(e,t,i,s,r,o,a,c,l,d,f,p,m,h,v,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=d,_[10]=f,_[14]=p,_[3]=m,_[7]=h,_[11]=v,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*d,m=o*f,h=a*d,v=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=m+h*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=h+m*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*d,m=c*f,h=l*d,v=l*f;t[0]=p+v*a,t[4]=h*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-h,t[6]=v+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*d,m=c*f,h=l*d,v=l*f;t[0]=p-v*a,t[4]=-o*f,t[8]=h+m*a,t[1]=m+h*a,t[5]=o*d,t[9]=v-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*d,m=o*f,h=a*d,v=a*f;t[0]=c*d,t[4]=h*l-m,t[8]=p*l+v,t[1]=c*f,t[5]=v*l+p,t[9]=m*l-h,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,m=o*l,h=a*c,v=a*l;t[0]=c*d,t[4]=v-p*f,t[8]=h*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*f+h,t[10]=p-v*f}else if(e.order==="XZY"){let p=o*c,m=o*l,h=a*c,v=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=p*f+v,t[5]=o*d,t[9]=m*f-h,t[2]=h*f-m,t[6]=a*d,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xm,e,qm)}lookAt(e,t,i){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),is.crossVectors(i,qn),is.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),is.crossVectors(i,qn)),is.normalize(),da.crossVectors(qn,is),s[0]=is.x,s[4]=da.x,s[8]=qn.x,s[1]=is.y,s[5]=da.y,s[9]=qn.y,s[2]=is.z,s[6]=da.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],p=i[9],m=i[13],h=i[2],v=i[6],x=i[10],_=i[14],T=i[3],R=i[7],M=i[11],C=i[15],S=s[0],g=s[4],w=s[8],F=s[12],N=s[1],E=s[5],z=s[9],W=s[13],D=s[2],k=s[6],V=s[10],B=s[14],Y=s[3],G=s[7],K=s[11],oe=s[15];return r[0]=o*S+a*N+c*D+l*Y,r[4]=o*g+a*E+c*k+l*G,r[8]=o*w+a*z+c*V+l*K,r[12]=o*F+a*W+c*B+l*oe,r[1]=d*S+f*N+p*D+m*Y,r[5]=d*g+f*E+p*k+m*G,r[9]=d*w+f*z+p*V+m*K,r[13]=d*F+f*W+p*B+m*oe,r[2]=h*S+v*N+x*D+_*Y,r[6]=h*g+v*E+x*k+_*G,r[10]=h*w+v*z+x*V+_*K,r[14]=h*F+v*W+x*B+_*oe,r[3]=T*S+R*N+M*D+C*Y,r[7]=T*g+R*E+M*k+C*G,r[11]=T*w+R*z+M*V+C*K,r[15]=T*F+R*W+M*B+C*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],p=e[10],m=e[14],h=e[3],v=e[7],x=e[11],_=e[15],T=c*m-l*p,R=a*m-l*f,M=a*p-c*f,C=o*m-l*d,S=o*p-c*d,g=o*f-a*d;return t*(v*T-x*R+_*M)-i*(h*T-x*C+_*S)+s*(h*R-v*C+_*g)-r*(h*M-v*S+x*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-i*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],p=e[10],m=e[11],h=e[12],v=e[13],x=e[14],_=e[15],T=t*a-i*o,R=t*c-s*o,M=t*l-r*o,C=i*c-s*a,S=i*l-r*a,g=s*l-r*c,w=d*v-f*h,F=d*x-p*h,N=d*_-m*h,E=f*x-p*v,z=f*_-m*v,W=p*_-m*x,D=T*W-R*z+M*E+C*N-S*F+g*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return e[0]=(a*W-c*z+l*E)*k,e[1]=(s*z-i*W-r*E)*k,e[2]=(v*g-x*S+_*C)*k,e[3]=(p*S-f*g-m*C)*k,e[4]=(c*N-o*W-l*F)*k,e[5]=(t*W-s*N+r*F)*k,e[6]=(x*M-h*g-_*R)*k,e[7]=(d*g-p*M+m*R)*k,e[8]=(o*z-a*N+l*w)*k,e[9]=(i*N-t*z-r*w)*k,e[10]=(h*S-v*M+_*T)*k,e[11]=(f*M-d*S-m*T)*k,e[12]=(a*F-o*E-c*w)*k,e[13]=(t*E-i*F+s*w)*k,e[14]=(v*R-h*C-x*T)*k,e[15]=(d*C-f*R+p*T)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+i,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,p=r*l,m=r*d,h=r*f,v=o*d,x=o*f,_=a*f,T=c*l,R=c*d,M=c*f,C=i.x,S=i.y,g=i.z;return s[0]=(1-(v+_))*C,s[1]=(m+M)*C,s[2]=(h-R)*C,s[3]=0,s[4]=(m-M)*S,s[5]=(1-(p+_))*S,s[6]=(x+T)*S,s[7]=0,s[8]=(h+R)*g,s[9]=(x-T)*g,s[10]=(1-(p+v))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=sr.set(s[0],s[1],s[2]).length(),a=sr.set(s[4],s[5],s[6]).length(),c=sr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ai.copy(this);let l=1/o,d=1/a,f=1/c;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,t.setFromRotationMatrix(ai),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=ei,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s),h,v;if(c)h=r/(o-r),v=o*r/(o-r);else if(a===ei)h=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===yr)h=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei,c=!1){let l=this.elements,d=2/(t-e),f=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s),h,v;if(c)h=1/(o-r),v=o/(o-r);else if(a===ei)h=-2/(o-r),v=-(o+r)/(o-r);else if(a===yr)h=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},sr=new X,ai=new Ct,Xm=new X(0,0,0),qm=new X(1,1,1),is=new X,da=new X,qn=new X,Ju=new Ct,Ku=new an,ui=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ym=0,$u=new X,rr=new an,zi=new Ct,fa=new X,$r=new X,Zm=new X,Jm=new an,ju=new X(1,0,0),Qu=new X(0,1,0),ed=new X(0,0,1),td={type:"added"},Km={type:"removed"},or={type:"childadded",child:null},Gc={type:"childremoved",child:null},Vt=class n extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new X,t=new ui,i=new an,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new it}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt($r,fa,this.up):zi.lookAt(fa,$r,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(zi),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),or.child=e,this.dispatchEvent(or),or.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),h=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),h.length>0&&(i.nodes=h)}return i.object=s,i;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new X(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$m={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,i),_=this._getHandJoint(l,v);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,h=.005;l.inputState.pinching&&p>m+h?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-h&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($m)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Vc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=Uh(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vc(o,r,e+1/3),this.g=Vc(o,r,e),this.b=Vc(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return At.workingToColorSpace(En.copy(this),e),Math.round(Et(En.r*255,0,255))*65536+Math.round(Et(En.g*255,0,255))*256+Math.round(Et(En.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=fn){At.workingToColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(pa);let i=ro(ss.h,pa.h,t),s=ro(ss.s,pa.s,t),r=ro(ss.l,pa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new $e;$e.NAMES=sf;var fo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var po=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new X,Oi=new X,Hc=new X,Bi=new X,ar=new X,lr=new X,nd=new X,Wc=new X,Xc=new X,qc=new X,Yc=new Yt,Zc=new Yt,Jc=new Yt,ls=class n{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){li.subVectors(s,t),Oi.subVectors(i,t),Hc.subVectors(e,t);let o=li.dot(li),a=li.dot(Oi),c=li.dot(Hc),l=Oi.dot(Oi),d=Oi.dot(Hc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(l*c-a*d)*p,h=(o*d-a*c)*p;return r.set(1-m-h,h,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Yc.setScalar(0),Zc.setScalar(0),Jc.setScalar(0),Yc.fromBufferAttribute(e,t),Zc.fromBufferAttribute(e,i),Jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Yc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(e,t,i,s){return li.subVectors(i,t),Oi.subVectors(e,t),li.cross(Oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),li.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,i),lr.subVectors(r,i),Wc.subVectors(e,i);let c=ar.dot(Wc),l=lr.dot(Wc);if(c<=0&&l<=0)return t.copy(i);Xc.subVectors(e,s);let d=ar.dot(Xc),f=lr.dot(Xc);if(d>=0&&f<=d)return t.copy(s);let p=c*f-d*l;if(p<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(i).addScaledVector(ar,o);qc.subVectors(e,r);let m=ar.dot(qc),h=lr.dot(qc);if(h>=0&&m<=h)return t.copy(r);let v=m*l-c*h;if(v<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(lr,a);let x=d*h-m*f;if(x<=0&&f-d>=0&&m-h>=0)return nd.subVectors(r,s),a=(f-d)/(f-d+(m-h)),t.copy(s).addScaledVector(nd,a);let _=1/(x+v+p);return o=v*_,a=p*_,t.copy(i).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ti=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),ga.subVectors(this.max,jr),cr.subVectors(e.a,jr),hr.subVectors(e.b,jr),ur.subVectors(e.c,jr),rs.subVectors(hr,cr),os.subVectors(ur,hr),Rs.subVectors(cr,ur);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Rs.z,Rs.y,rs.z,0,-rs.x,os.z,0,-os.x,Rs.z,0,-Rs.x,-rs.y,rs.x,0,-os.y,os.x,0,-Rs.y,Rs.x,0];return!Kc(t,cr,hr,ur,ga)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,cr,hr,ur,ga))?!1:(xa.crossVectors(rs,os),t=[xa.x,xa.y,xa.z],Kc(t,cr,hr,ur,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new X,new X,new X,new X,new X,new X,new X,new X],ci=new X,ma=new Ti,cr=new X,hr=new X,ur=new X,rs=new X,os=new X,Rs=new X,jr=new X,ga=new X,xa=new X,Is=new X;function Kc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Is.fromArray(n,r);let a=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),c=e.dot(Is),l=t.dot(Is),d=i.dot(Is);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var cn=new X,_a=new dt,jm=0,tn=class extends wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kd,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=e!==void 0?zh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):nf(e,this.array)}};var mo=class extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var go=class extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Rt=class extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qm=new Ti,Qr=new X,$c=new X,Wi=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add($c)),this.expandByPoint(Qr.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},e0=0,Qn=new Ct,jc=new Vt,dr=new X,Yn=new Ti,eo=new Ti,xn=new X,Zt=class n extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?go:mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Yn.min,eo.min),Yn.expandByPoint(xn),xn.addVectors(Yn.max,eo.max),Yn.expandByPoint(xn)):(Yn.expandByPoint(eo.min),Yn.expandByPoint(eo.max))}Yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)xn.fromBufferAttribute(a,l),c&&(dr.fromBufferAttribute(e,l),xn.add(dr)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let F=0;F<i.count;F++)a[F]=new X,c[F]=new X;let d=new X,f=new X,p=new X,m=new dt,h=new dt,v=new dt,x=new X,_=new X;function T(F,N,E){l[F]=l[N]=l[E]=1,d.fromBufferAttribute(i,F),f.fromBufferAttribute(i,N),p.fromBufferAttribute(i,E),m.fromBufferAttribute(r,F),h.fromBufferAttribute(r,N),v.fromBufferAttribute(r,E),f.sub(d),p.sub(d),h.sub(m),v.sub(m);let z=1/(h.x*v.y-v.x*h.y);isFinite(z)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(p,-h.y).multiplyScalar(z),_.copy(p).multiplyScalar(h.x).addScaledVector(f,-v.x).multiplyScalar(z),a[F].add(x),a[N].add(x),a[E].add(x),c[F].add(_),c[N].add(_),c[E].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,N=R.length;F<N;++F){let E=R[F],z=E.start,W=E.count;for(let D=z,k=z+W;D<k;D+=3)T(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new X,C=new X,S=new X,g=new X;function w(F){S.fromBufferAttribute(s,F),g.copy(S);let N=a[F];M.copy(N),M.sub(S.multiplyScalar(S.dot(N))).normalize(),C.crossVectors(g,N);let z=C.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,z)}for(let F=0,N=i.count;F<N;++F)l[F]&&w(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new X,r=new X,o=new X,a=new X,c=new X,l=new X,d=new X,f=new X;if(e)for(let p=0,m=e.count;p<m;p+=3){let h=e.getX(p+0),v=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,h),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,h),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),a.add(d),c.add(d),l.add(d),i.setXYZ(h,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,p=new l.constructor(c.length*d),m=0,h=0;for(let v=0,x=c.length;v<x;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*d;for(let _=0;_<d;_++)p[h++]=l[m++]}return new tn(p,d,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let p=l[d],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,p=l.length;f<p;f++){let m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qc=new X,t0=new X,n0=new it,hi=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Qc.subVectors(i,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||n0.getNormalMatrix(e),s=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},i0=0,Xi=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=gs,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new dt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gi=new X,eh=new X,ya=new X,va=new X,xo=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){eh.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),va.copy(this.origin).sub(eh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=va.dot(this.direction),c=-va.dot(ya),l=va.lengthSq(),d=Math.abs(1-o*o),f,p,m,h;if(d>0)if(f=o*c-a,p=o*a-c,h=r*d,f>=0)if(p>=-h)if(p<=h){let v=1/d;f*=v,p*=v,m=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p<=-h?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l):p<=h?(f=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(eh).addScaledVector(ya,p),m}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,p=e.y-o.y,m=e.z-o.z,h=t.x-o.x,v=t.y-o.y,x=t.z-o.z,_=i.x-o.x,T=i.y-o.y,R=i.z-o.z,M=Math.abs(c),C=Math.abs(l),S=Math.abs(d),g,w,F,N,E,z,W,D,k,V,B,Y;if(M>=C&&M>=S?(F=c,z=f,k=h,Y=_,c>=0?(g=l,w=d,N=p,E=m,W=v,D=x,V=T,B=R):(g=d,w=l,N=m,E=p,W=x,D=v,V=R,B=T)):C>=S?(F=l,z=p,k=v,Y=T,l>=0?(g=d,w=c,N=m,E=f,W=x,D=h,V=R,B=_):(g=c,w=d,N=f,E=m,W=h,D=x,V=_,B=R)):(F=d,z=m,k=x,Y=R,d>=0?(g=c,w=l,N=f,E=p,W=h,D=v,V=_,B=T):(g=l,w=c,N=p,E=f,W=v,D=h,V=T,B=_)),F===0)return null;let G=g/F,K=w/F,oe=1/F,j=N-G*z,xe=E-K*z,J=W-G*k,pe=D-K*k,Ce=V-G*Y,ge=B-K*Y,Me=Ce*pe-ge*J,He=j*ge-xe*Ce,ot=J*xe-pe*j;if(s){if(Me<0||He<0||ot<0)return null}else if((Me<0||He<0||ot<0)&&(Me>0||He>0||ot>0))return null;let Ze=Me+He+ot;if(Ze===0)return null;let ft=oe*(Me*z+He*k+ot*Y);return(Ze>0?ft<0:ft>0)?null:this.at(ft/Ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},id=new Ct,Ps=new xo,Ma=new Wi,sd=new X,ba=new X,Sa=new X,wa=new X,th=new X,Ta=new X,rd=new X,Aa=new X,It=class extends Vt{constructor(e=new Zt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(th.fromBufferAttribute(f,e),o?Ta.addScaledVector(th,d):Ta.addScaledVector(th.sub(t),d))}t.add(Ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(Ma.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Ma,sd)===null||Ps.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(id),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let h=0,v=p.length;h<v;h++){let x=p[h],_=o[x.materialIndex],T=Math.max(x.start,m.start),R=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let M=T,C=R;M<C;M+=3){let S=a.getX(M),g=a.getX(M+1),w=a.getX(M+2);s=Ea(this,_,e,i,l,d,f,S,g,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let h=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let x=h,_=v;x<_;x+=3){let T=a.getX(x),R=a.getX(x+1),M=a.getX(x+2);s=Ea(this,o,e,i,l,d,f,T,R,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let h=0,v=p.length;h<v;h++){let x=p[h],_=o[x.materialIndex],T=Math.max(x.start,m.start),R=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let M=T,C=R;M<C;M+=3){let S=M,g=M+1,w=M+2;s=Ea(this,_,e,i,l,d,f,S,g,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let h=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let x=h,_=v;x<_;x+=3){let T=x,R=x+1,M=x+2;s=Ea(this,o,e,i,l,d,f,T,R,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function s0(n,e,t,i,s,r,o,a){let c;if(e.side===bn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ms,a),c===null)return null;Aa.copy(a),Aa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Aa);return l<t.near||l>t.far?null:{distance:l,point:Aa.clone(),object:n}}function Ea(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ba),n.getVertexPosition(c,Sa),n.getVertexPosition(l,wa);let d=s0(n,e,t,i,ba,Sa,wa,rd);if(d){let f=new X;ls.getBarycoord(rd,ba,Sa,wa,f),s&&(d.uv=ls.getInterpolatedAttribute(s,a,c,l,f,new dt)),r&&(d.uv1=ls.getInterpolatedAttribute(r,a,c,l,f,new dt)),o&&(d.normal=ls.getInterpolatedAttribute(o,a,c,l,f,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new X,materialIndex:0};ls.getNormal(ba,Sa,wa,p.normal),d.face=p,d.barycoord=f}return d}var Ds=class extends Nn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=_n,d=_n,f,p){super(null,o,a,c,l,d,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cs=class extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new Ct,od=new Ct,Ca=[],ad=new Ti,r0=new Ct,to=new It,no=new Wi,Un=class extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,r0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),ad.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),no.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(i),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fr),od.multiplyMatrices(i,fr),to.matrixWorld=od,to.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let c=Ca[o];c.instanceId=r,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ds(new Float32Array(s*this.count),s,this.count,yl,ti));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ls=new Wi,o0=new dt(.5,.5),Ra=new X,hs=class{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],p=r[6],m=r[7],h=r[8],v=r[9],x=r[10],_=r[11],T=r[12],R=r[13],M=r[14],C=r[15];if(s[0].setComponents(l-o,m-d,_-h,C-T).normalize(),s[1].setComponents(l+o,m+d,_+h,C+T).normalize(),s[2].setComponents(l+a,m+f,_+v,C+R).normalize(),s[3].setComponents(l-a,m-f,_-v,C-R).normalize(),i)s[4].setComponents(c,p,x,M).normalize(),s[5].setComponents(l-c,m-p,_-x,C-M).normalize();else if(s[4].setComponents(l-c,m-p,_-x,C-M).normalize(),t===ei)s[5].setComponents(l+c,m+p,_+x,C+M).normalize();else if(t===yr)s[5].setComponents(c,p,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=o0.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ld=new Ct,Ka=class n{constructor(){this.coordinateSystem=ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ld.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new hs),i[s].setFromProjectionMatrix(ld,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new hs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var $a=class extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cd=new Ct,ah=new xo,Ia=new Wi,Pa=new X,_o=class extends Vt{constructor(e=new Zt,t=new $a){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;cd.copy(s).invert(),ah.copy(e.ray).applyMatrix4(cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let h=p,v=m;h<v;h++){let x=l.getX(h);Pa.fromBufferAttribute(f,x),hd(Pa,x,c,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let h=p,v=m;h<v;h++)Pa.fromBufferAttribute(f,h),hd(Pa,h,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hd(n,e,t,i,s,r,o){let a=ah.distanceSqToPoint(n);if(a<t){let c=new X;ah.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yo=class extends Nn{constructor(e=[],t=Bs,i,s,r,o,a,c,l,d){super(e,t,i,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ns=class extends Nn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Nn{constructor(e,t,i=di,s,r,o,a=_n,c=_n,l,d=Hi,f=1){if(d!==Hi&&d!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vo=class extends qi{constructor(e,t=di,i=Bs,s,r,o=_n,a=_n,c,l=Hi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mo=class extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hn=class n extends Zt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],p=0,m=0;h("z","y","x",-1,-1,i,t,e,o,r,0),h("z","y","x",1,-1,i,t,-e,o,r,1),h("x","z","y",1,1,e,i,t,s,o,2),h("x","z","y",1,-1,e,i,-t,s,o,3),h("x","y","z",1,-1,e,t,i,s,r,4),h("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function h(v,x,_,T,R,M,C,S,g,w,F){let N=M/g,E=C/w,z=M/2,W=C/2,D=S/2,k=g+1,V=w+1,B=0,Y=0,G=new X;for(let K=0;K<V;K++){let oe=K*E-W;for(let j=0;j<k;j++){let xe=j*N-z;G[v]=xe*T,G[x]=oe*R,G[_]=D,l.push(G.x,G.y,G.z),G[v]=0,G[x]=0,G[_]=S>0?1:-1,d.push(G.x,G.y,G.z),f.push(j/g),f.push(1-K/w),B+=1}}for(let K=0;K<w;K++)for(let oe=0;oe<g;oe++){let j=p+oe+k*K,xe=p+oe+k*(K+1),J=p+(oe+1)+k*(K+1),pe=p+(oe+1)+k*K;c.push(j,xe,pe),c.push(xe,J,pe),Y+=6}a.addGroup(m,Y,F),m+=Y,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Us=class n extends Zt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new X,d=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let m=i+f/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[p]/e+1)/2,d.y=(o[p+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fn=class n extends Zt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],p=[],m=[],h=0,v=[],x=i/2,_=0;T(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(m,2));function T(){let M=new X,C=new X,S=0,g=(t-e)/i;for(let w=0;w<=r;w++){let F=[],N=w/r,E=N*(t-e)+e;for(let z=0;z<=s;z++){let W=z/s,D=W*c+a,k=Math.sin(D),V=Math.cos(D);C.x=E*k,C.y=-N*i+x,C.z=E*V,f.push(C.x,C.y,C.z),M.set(k,g,V).normalize(),p.push(M.x,M.y,M.z),m.push(W,1-N),F.push(h++)}v.push(F)}for(let w=0;w<s;w++)for(let F=0;F<r;F++){let N=v[F][w],E=v[F+1][w],z=v[F+1][w+1],W=v[F][w+1];(e>0||F!==0)&&(d.push(N,E,W),S+=3),(t>0||F!==r-1)&&(d.push(E,z,W),S+=3)}l.addGroup(_,S,0),_+=S}function R(M){let C=h,S=new dt,g=new X,w=0,F=M===!0?e:t,N=M===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,x*N,0),p.push(0,N,0),m.push(.5,.5),h++;let E=h;for(let z=0;z<=s;z++){let D=z/s*c+a,k=Math.cos(D),V=Math.sin(D);g.x=F*V,g.y=x*N,g.z=F*k,f.push(g.x,g.y,g.z),p.push(0,N,0),S.x=k*.5+.5,S.y=V*.5*N+.5,m.push(S.x,S.y),h++}for(let z=0;z<s;z++){let W=C+z,D=E+z;M===!0?d.push(D,D+1,W):d.push(D+1,D,W),w+=3}l.addGroup(_,w,M===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bo=class n extends Zt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),d(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let R=new X,M=new X,C=new X;for(let S=0;S<t.length;S+=3)m(t[S+0],R),m(t[S+1],M),m(t[S+2],C),c(R,M,C,T)}function c(T,R,M,C){let S=C+1,g=[];for(let w=0;w<=S;w++){g[w]=[];let F=T.clone().lerp(M,w/S),N=R.clone().lerp(M,w/S),E=S-w;for(let z=0;z<=E;z++)z===0&&w===S?g[w][z]=F:g[w][z]=F.clone().lerp(N,z/E)}for(let w=0;w<S;w++)for(let F=0;F<2*(S-w)-1;F++){let N=Math.floor(F/2);F%2===0?(p(g[w][N+1]),p(g[w+1][N]),p(g[w][N])):(p(g[w][N+1]),p(g[w+1][N+1]),p(g[w+1][N]))}}function l(T){let R=new X;for(let M=0;M<r.length;M+=3)R.x=r[M+0],R.y=r[M+1],R.z=r[M+2],R.normalize().multiplyScalar(T),r[M+0]=R.x,r[M+1]=R.y,r[M+2]=R.z}function d(){let T=new X;for(let R=0;R<r.length;R+=3){T.x=r[R+0],T.y=r[R+1],T.z=r[R+2];let M=x(T)/2/Math.PI+.5,C=_(T)/Math.PI+.5;o.push(M,1-C)}h(),f()}function f(){for(let T=0;T<o.length;T+=6){let R=o[T+0],M=o[T+2],C=o[T+4],S=Math.max(R,M,C),g=Math.min(R,M,C);S>.9&&g<.1&&(R<.2&&(o[T+0]+=1),M<.2&&(o[T+2]+=1),C<.2&&(o[T+4]+=1))}}function p(T){r.push(T.x,T.y,T.z)}function m(T,R){let M=T*3;R.x=e[M+0],R.y=e[M+1],R.z=e[M+2]}function h(){let T=new X,R=new X,M=new X,C=new X,S=new dt,g=new dt,w=new dt;for(let F=0,N=0;F<r.length;F+=9,N+=6){T.set(r[F+0],r[F+1],r[F+2]),R.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),S.set(o[N+0],o[N+1]),g.set(o[N+2],o[N+3]),w.set(o[N+4],o[N+5]),C.copy(T).add(R).add(M).divideScalar(3);let E=x(C);v(S,N+0,T,E),v(g,N+2,R,E),v(w,N+4,M,E)}}function v(T,R,M,C){C<0&&T.x===1&&(o[R]=T.x-1),M.x===0&&M.z===0&&(o[R]=C/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function _(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Yi=class n extends bo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Zi=class n extends bo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bn=class n extends Zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,d=c+1,f=e/a,p=t/c,m=[],h=[],v=[],x=[];for(let _=0;_<d;_++){let T=_*p-o;for(let R=0;R<l;R++){let M=R*f-r;h.push(M,-T,0),v.push(0,0,1),x.push(R/a),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<a;T++){let R=T+l*_,M=T+l*(_+1),C=T+1+l*(_+1),S=T+1+l*_;m.push(R,M,S),m.push(M,C,S)}this.setIndex(m),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},So=class n extends Zt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],d=[],f=e,p=(t-e)/s,m=new X,h=new dt;for(let v=0;v<=s;v++){for(let x=0;x<=i;x++){let _=r+x/i*o;m.x=f*Math.cos(_),m.y=f*Math.sin(_),c.push(m.x,m.y,m.z),l.push(0,0,1),h.x=(m.x/t+1)/2,h.y=(m.y/t+1)/2,d.push(h.x,h.y)}f+=p}for(let v=0;v<s;v++){let x=v*(i+1);for(let _=0;_<i;_++){let T=_+x,R=T,M=T+i+1,C=T+i+2,S=T+1;a.push(R,M,S),a.push(M,C,S)}}this.setIndex(a),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var us=class n extends Zt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new X,p=new X,m=[],h=[],v=[],x=[];for(let _=0;_<=i;_++){let T=[],R=_/i,M=o+R*a,C=e*Math.cos(M),S=Math.sqrt(e*e-C*C),g=0;_===0&&o===0?g=.5/t:_===i&&c===Math.PI&&(g=-.5/t);for(let w=0;w<=t;w++){let F=w/t,N=s+F*r;f.x=-S*Math.cos(N),f.y=C,f.z=S*Math.sin(N),h.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),x.push(F+g,1-R),T.push(l++)}d.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){let R=d[_][T+1],M=d[_][T],C=d[_+1][T],S=d[_+1][T+1];(_!==0||o>0)&&m.push(R,M,S),(_!==i-1||c<Math.PI)&&m.push(M,C,S)}this.setIndex(m),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wo=class n extends Zt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],d=[],f=[],p=new X,m=new X,h=new X;for(let v=0;v<=i;v++){let x=o+v/i*a;for(let _=0;_<=s;_++){let T=_/s*r;m.x=(e+t*Math.cos(x))*Math.cos(T),m.y=(e+t*Math.cos(x))*Math.sin(T),m.z=t*Math.sin(x),l.push(m.x,m.y,m.z),p.x=e*Math.cos(T),p.y=e*Math.sin(T),h.subVectors(m,p).normalize(),d.push(h.x,h.y,h.z),f.push(_/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let x=1;x<=s;x++){let _=(s+1)*v+x-1,T=(s+1)*(v-1)+x-1,R=(s+1)*(v-1)+x,M=(s+1)*v+x;c.push(_,T,M),c.push(T,R,M)}this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(ud(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ud(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Rn(n){let e={};for(let t=0;t<n.length;t++){let i=Gs(n[t]);for(let s in i)e[s]=i[s]}return e}function ud(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function a0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Oh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var rf={clone:Gs,merge:Rn},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new dt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new it().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ja=class extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Qa=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},el=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function La(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ds=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends ds{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=e,a=2*t-i;break;case oh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case rh:o=e,c=2*i-t;break;case oh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,h=(i-t)/(s-t),v=h*h,x=v*h,_=-p*x+2*p*v-p*h,T=(1+p)*x+(-1.5-2*p)*v+(-.5+p)*h+1,R=(-1-m)*x+(1.5+m)*v+.5*h,M=m*x-m*v;for(let C=0;C!==a;++C)r[C]=_*o[d+C]+T*o[l+C]+R*o[c+C]+M*o[f+C];return r}},nl=class extends ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(i-t)/(s-t),f=1-d;for(let p=0;p!==a;++p)r[p]=o[l+p]*f+o[c+p]*d;return r}},il=class extends ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sl=class extends ds{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let h=(i-t)/(s-t),v=1-h;for(let x=0;x!==a;++x)r[x]=o[l+x]*v+o[c+x]*h;return r}let p=a*2,m=e-1;for(let h=0;h!==a;++h){let v=o[l+h],x=o[c+h],_=m*p+h*2,T=f[_],R=f[_+1],M=e*p+h*2,C=d[M],S=d[M+1],g=u0(i,t,T,C,s);r[h]=of(g,v,R,S,x)}return r}};function of(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function h0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function u0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=of(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=h0(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Jn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pr(t,this.TimeBufferType),this.values=pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pr(e.times,Array),values:pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),La(e.settings)&&(i.settings={inTangents:pr(e.settings.inTangents,Array),outTangents:pr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case qa:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break;case ih:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;La(this.settings)&&(dd(this.settings.inTangents,e),dd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;La(this.settings)&&(fd(this.settings.inTangents,e),fd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){rt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){rt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Am(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){rt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ua,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,p=f-i,m=f+i;for(let h=0;h!==i;++h){let v=t[f+h];if(v!==t[p+h]||v!==t[m+h]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,La(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function fd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=qa;var fs=class extends Jn{constructor(e,t,i){super(e,t,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=oo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Jn{constructor(e,t,i,s){super(e,t,i,s)}};rl.prototype.ValueTypeName="color";var ol=class extends Jn{constructor(e,t,i,s){super(e,t,i,s)}};ol.prototype.ValueTypeName="number";var al=class extends ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},To=class extends Jn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Jn{constructor(e,t,i){super(e,t,i)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=oo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Jn{constructor(e,t,i,s){super(e,t,i,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=l.length;f<p;f+=2){let m=l[f],h=l[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return h}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},af=new cl,hl=class{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ao=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Eo=class extends Ao{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nh=new Ct,pd=new X,md=new X,ul=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(pd),md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(md),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){nh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(nh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===yr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Da=new X,Na=new an,bi=new X,Co=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Da,Na,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Da,Na,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new X,gd=new dt,xd=new dt,Dn=class extends Co{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,gd,xd),t.subVectors(xd,gd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ro=class extends Co{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lh=class extends ul{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var mr=-90,gr=1,wr=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(mr,gr,e,t);s.layers=this.layers,this.add(s);let r=new Dn(mr,gr,e,t);r.layers=this.layers,this.add(r);let o=new Dn(mr,gr,e,t);o.layers=this.layers,this.add(o);let a=new Dn(mr,gr,e,t);a.layers=this.layers,this.add(a);let c=new Dn(mr,gr,e,t);c.layers=this.layers,this.add(c);let l=new Dn(mr,gr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}},dl=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Bh="\\[\\]\\.:\\/",d0=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",f0="[^"+Bh.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",kh),m0=/(WCOD+)?/.source.replace("WCOD",f0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),x0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),_0=new RegExp("^"+p0+m0+g0+x0+"$"),y0=["material","materials","bones","map"],ch=class{constructor(e,t,i){let s=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(e){let t=_0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);y0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=ch;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nM=new Float32Array(1);var hh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Gh(n,e,t,i){let s=v0(i);switch(t){case Ch:return n*e;case yl:return n*e/s.components*s.byteLength;case vl:return n*e/s.components*s.byteLength;case xs:return n*e*2/s.components*s.byteLength;case Ml:return n*e*2/s.components*s.byteLength;case Rh:return n*e*3/s.components*s.byteLength;case Kn:return n*e*4/s.components*s.byteLength;case bl:return n*e*4/s.components*s.byteLength;case No:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fo:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:case Al:return Math.max(n,16)*Math.max(e,8)/4;case Sl:case Tl:return Math.max(n,8)*Math.max(e,8)/2;case El:case Cl:case Il:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Oo:case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bo:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v0(n){switch(n){case Gn:case wh:return{byteLength:1,components:1};case Er:case Th:case fi:return{byteLength:2,components:1};case xl:case _l:return{byteLength:2,components:4};case di:case gl:case ti:return{byteLength:4,components:1};case Ah:case Eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function E0(n){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((m,h)=>m.start-h.start);let p=0;for(let m=1;m<f.length;m++){let h=f[p],v=f[m];v.start<=h.start+h.count+1?h.count=Math.max(h.count,v.start+v.count-h.start):(++p,f[p]=v)}f.length=p+1;for(let m=0,h=f.length;m<h;m++){let v=f[m];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,V0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
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
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yg=`#ifdef USE_ENVMAP
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
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
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
#endif`,Tg=`uniform sampler2D dfgLUT;
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
}`,Ag=`
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dx=`float getShadowMask() {
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
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,bx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`uniform float backgroundBlurriness;
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Ux=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define MATCAP
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
}`,Yx=`#define NORMAL
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
}`,Zx=`#define NORMAL
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
}`,Jx=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,Qx=`#define TOON
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
}`,e_=`#define TOON
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
}`,t_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:C0,alphahash_pars_fragment:R0,alphamap_fragment:I0,alphamap_pars_fragment:P0,alphatest_fragment:L0,alphatest_pars_fragment:D0,aomap_fragment:N0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:z0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:k0,iridescence_fragment:G0,bumpmap_pars_fragment:V0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:Y0,color_pars_fragment:Z0,color_pars_vertex:J0,color_vertex:K0,common:$0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:og,envmap_pars_fragment:ag,envmap_pars_vertex:lg,envmap_physical_pars_fragment:yg,envmap_vertex:cg,fog_vertex:hg,fog_pars_vertex:ug,fog_fragment:dg,fog_pars_fragment:fg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:_g,lights_toon_fragment:vg,lights_toon_pars_fragment:Mg,lights_phong_fragment:bg,lights_phong_pars_fragment:Sg,lights_physical_fragment:wg,lights_physical_pars_fragment:Tg,lights_fragment_begin:Ag,lights_fragment_maps:Eg,lights_fragment_end:Cg,lightprobes_pars_fragment:Rg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Dg,map_fragment:Ng,map_pars_fragment:Ug,map_particle_fragment:Fg,map_particle_pars_fragment:zg,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Bg,morphinstance_vertex:kg,morphcolor_vertex:Gg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:Yg,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:rx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:hx,shadowmap_vertex:ux,shadowmask_pars_fragment:dx,skinbase_vertex:fx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:xx,specularmap_pars_fragment:_x,tonemapping_fragment:yx,tonemapping_pars_fragment:vx,transmission_fragment:Mx,transmission_pars_fragment:bx,uv_pars_fragment:Sx,uv_pars_vertex:wx,uv_vertex:Tx,worldpos_vertex:Ax,background_vert:Ex,background_frag:Cx,backgroundCube_vert:Rx,backgroundCube_frag:Ix,cube_vert:Px,cube_frag:Lx,depth_vert:Dx,depth_frag:Nx,distance_vert:Ux,distance_frag:Fx,equirect_vert:zx,equirect_frag:Ox,linedashed_vert:Bx,linedashed_frag:kx,meshbasic_vert:Gx,meshbasic_frag:Vx,meshlambert_vert:Hx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:Yx,meshnormal_frag:Zx,meshphong_vert:Jx,meshphong_frag:Kx,meshphysical_vert:$x,meshphysical_frag:jx,meshtoon_vert:Qx,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:o_},ze={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ci={basic:{uniforms:Rn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Rn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Rn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Rn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Rn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new $e(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Rn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Rn([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Rn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Rn([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Rn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Rn([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Rn([ze.common,ze.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Rn([ze.lights,ze.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ci.physical={uniforms:Rn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var tc={r:0,b:0,g:0},a_=new Ct,If=new it;If.set(-1,0,0,0,1,0,0,0,1);function l_(n,e,t,i,s,r){let o=new $e(0),a=s===!0?0:1,c,l,d=null,f=0,p=null;function m(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let M=T.backgroundBlurriness>0;R=e.get(R,M)}return R}function h(T){let R=!1,M=m(T);M===null?x(o,a):M&&M.isColor&&(x(M,1),R=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,R){let M=m(R);M&&M.isCubeTexture?(l===void 0&&(l=new It(new hn(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Gs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,S,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(If),l.material.toneMapped=At.getTransfer(M.colorSpace)!==Ut,(d!==M||f!==M.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new It(new Bn(2,2),new kn({name:"BackgroundMaterial",uniforms:Gs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=At.getTransfer(M.colorSpace)!==Ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function x(T,R){T.getRGB(tc,Oh(n)),t.buffers.color.setClear(tc.r,tc.g,tc.b,R,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,R=1){o.set(T),a=R,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,x(o,a)},render:h,addToRenderList:v,dispose:_}}function c_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(E,z,W,D,k){let V=!1,B=f(E,D,W,z);r!==B&&(r=B,l(r.object)),V=m(E,D,W,k),V&&h(E,D,W,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(E,z,W,D),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function d(E){return n.deleteVertexArray(E)}function f(E,z,W,D){let k=D.wireframe===!0,V=i[z.id];V===void 0&&(V={},i[z.id]=V);let B=E.isInstancedMesh===!0?E.id:0,Y=V[B];Y===void 0&&(Y={},V[B]=Y);let G=Y[W.id];G===void 0&&(G={},Y[W.id]=G);let K=G[k];return K===void 0&&(K=p(c()),G[k]=K),K}function p(E){let z=[],W=[],D=[];for(let k=0;k<t;k++)z[k]=0,W[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:D,object:E,attributes:{},index:null}}function m(E,z,W,D){let k=r.attributes,V=z.attributes,B=0,Y=W.getAttributes();for(let G in Y)if(Y[G].location>=0){let oe=k[G],j=V[G];if(j===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),oe===void 0||oe.attribute!==j||j&&oe.data!==j.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function h(E,z,W,D){let k={},V=z.attributes,B=0,Y=W.getAttributes();for(let G in Y)if(Y[G].location>=0){let oe=V[G];oe===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));let j={};j.attribute=oe,oe&&oe.data&&(j.data=oe.data),k[G]=j,B++}r.attributes=k,r.attributesNum=B,r.index=D}function v(){let E=r.newAttributes;for(let z=0,W=E.length;z<W;z++)E[z]=0}function x(E){_(E,0)}function _(E,z){let W=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;W[E]=1,D[E]===0&&(n.enableVertexAttribArray(E),D[E]=1),k[E]!==z&&(n.vertexAttribDivisor(E,z),k[E]=z)}function T(){let E=r.newAttributes,z=r.enabledAttributes;for(let W=0,D=z.length;W<D;W++)z[W]!==E[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function R(E,z,W,D,k,V,B){B===!0?n.vertexAttribIPointer(E,z,W,k,V):n.vertexAttribPointer(E,z,W,D,k,V)}function M(E,z,W,D){v();let k=D.attributes,V=W.getAttributes(),B=z.defaultAttributeValues;for(let Y in V){let G=V[Y];if(G.location>=0){let K=k[Y];if(K===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){let oe=K.normalized,j=K.itemSize,xe=e.get(K);if(xe===void 0)continue;let J=xe.buffer,pe=xe.type,Ce=xe.bytesPerElement,ge=pe===n.INT||pe===n.UNSIGNED_INT||K.gpuType===gl;if(K.isInterleavedBufferAttribute){let Me=K.data,He=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,ot=K.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Ze=0;Ze<G.locationSize;Ze++)_(G.location+Ze,Me.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ze=0;Ze<G.locationSize;Ze++)x(G.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ze=0;Ze<G.locationSize;Ze++)R(G.location+Ze,j/G.locationSize,pe,oe,He*Ce,(ot+j/G.locationSize*Ze)*Ce,ge)}else{if(K.isInstancedBufferAttribute){for(let Me=0;Me<G.locationSize;Me++)_(G.location+Me,K.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Me=0;Me<G.locationSize;Me++)x(G.location+Me);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Me=0;Me<G.locationSize;Me++)R(G.location+Me,j/G.locationSize,pe,oe,j*Ce,j/G.locationSize*Me*Ce,ge)}}else if(B!==void 0){let oe=B[Y];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(G.location,oe);break;case 3:n.vertexAttrib3fv(G.location,oe);break;case 4:n.vertexAttrib4fv(G.location,oe);break;default:n.vertexAttrib1fv(G.location,oe)}}}}T()}function C(){F();for(let E in i){let z=i[E];for(let W in z){let D=z[W];for(let k in D){let V=D[k];for(let B in V)d(V[B].object),delete V[B];delete D[k]}}delete i[E]}}function S(E){if(i[E.id]===void 0)return;let z=i[E.id];for(let W in z){let D=z[W];for(let k in D){let V=D[k];for(let B in V)d(V[B].object),delete V[B];delete D[k]}}delete i[E.id]}function g(E){for(let z in i){let W=i[z];for(let D in W){let k=W[D];if(k[E.id]===void 0)continue;let V=k[E.id];for(let B in V)d(V[B].object),delete V[B];delete k[E.id]}}}function w(E){for(let z in i){let W=i[z],D=E.isInstancedMesh===!0?E.id:0,k=W[D];if(k!==void 0){for(let V in k){let B=k[V];for(let Y in B)d(B[Y].object),delete B[Y];delete k[V]}delete W[D],Object.keys(W).length===0&&delete i[z]}}}function F(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:x,disableUnusedAttributes:T}}function h_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let p=0;for(let m=0;m<d;m++)p+=l[m];t.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function u_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Kn&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let w=g===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Gn&&g!==ti&&!w&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Qe("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:M,maxSamples:C,samples:S}}function d_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new hi,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){let h=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,_=n.get(f);if(!s||h===null||h.length===0||r&&!x)r?d(null):l();else{let T=r?0:i,R=T*4,M=_.clippingState||null;c.value=M,M=d(h,p,R,m);for(let C=0;C!==R;++C)M[C]=t[C];_.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,h){let v=f!==null?f.length:0,x=null;if(v!==0){if(x=c.value,h!==!0||x===null){let _=m+v*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<_)&&(x=new Float32Array(_));for(let R=0,M=m;R!==v;++R,M+=4)o.copy(f[R]).applyMatrix4(T,a),o.normal.toArray(x,M),x[M+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}var Vo=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:zs});r.uniforms.tEquirect.value=t;let o=new It(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=yn),new wr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},lf=256,f_=3,p_=20,Pf=256,Lf=16,m_=3,g_=new X,x_=new $e,ic=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wr(1,10,null),this._boxMesh=new It(new hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=g_}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,p=c.autoClearColor,m=c.autoClearDepth,h=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(x_));let x=new wr(i,s,d);return x.position.copy(a),x.update(c,e),c.autoClear=f,c.autoClearColor=p,c.autoClearDepth=m,c.autoClearStencil=h,e.background=v,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(lf,Fh(e))}_fromTexture(e,t){e.mapping===Bs||e.mapping===Ar?this._setSize(e.image.length===0?lf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=cf(e,!1,!1),i=Math.log2(e)-f_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=cf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bs||e.mapping===Ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=__(),this._integrationMaterial=y_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Lf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-m_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Pf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=v_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function cf(n,e,t){return new Vo(n,{minFilter:Ji,generateMipmaps:e,type:fi,colorSpace:ao,depthBuffer:t})}function Ho(n,e,t){return new kn({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:bn,blending:zs,depthTest:!1,depthWrite:!1})}function __(){return Ho("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pf}u

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
	`)}function y_(){return Ho("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lf}},`

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
	`)}function v_(){return Ho("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${p_}
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
	`)}function hf(){return Ho("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function uf(){return Ho("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function M_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(p,m=!1){return p==null?null:m?o(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===fl||m===pl)if(e.has(p)){let h=e.get(p).texture;return a(h,p.mapping)}else{let h=p.image;if(h&&h.height>0){let v=new Vo(h.height);return v.fromEquirectangularTexture(n,p),e.set(p,v),p.addEventListener("dispose",l),a(v.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,h=m===fl||m===pl,v=m===Bs||m===Ar;if(h||v){let x=t.get(p),_=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return i===null&&(i=new ic(n)),x=h?i.fromEquirectangular(p,x):i.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),x.texture;if(x!==void 0)return x.texture;{let T=p.image;return h&&T&&T.height>0||v&&T&&c(T)?(i===null&&(i=new ic(n)),x=h?i.fromEquirectangular(p):i.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),p.addEventListener("dispose",d),x.texture):null}}}return p}function a(p,m){return m===fl?p.mapping=Bs:m===pl&&(p.mapping=Ar),p}function c(p){let m=0,h=6;for(let v=0;v<h;v++)p[v]!==void 0&&m++;return m===h}function l(p){let m=p.target;m.removeEventListener("dispose",l);let h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function d(p){let m=p.target;m.removeEventListener("dispose",d);let h=t.get(m);h!==void 0&&(t.delete(m),h.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function b_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&io("WebGLRenderer: "+i+" extension not supported."),s}}}function S_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(h=>delete s[h]);function a(h){c(h.target)}function c(h){h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id],o.unregister(h);let v=r.get(h);v&&(e.remove(v),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(h,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function d(h){let v=h.attributes;for(let x in v)e.update(v[x],n.ARRAY_BUFFER)}function f(h){let v=h.index,x=h.attributes.position,_=0;if(x===void 0)return;let T=v!==null?v.array.length:x.array.length/3-1,R=x.count>=65535?go:mo,M=new R(Math.ceil(T/3)*6,1),C=M.array;if(v!==null){let g=v.array;_=v.version;for(let w=0,F=0;w<T;w+=3){let N=g[w+0],E=g[w+1],z=g[w+2];C[F++]=N,C[F++]=E,C[F++]=E,C[F++]=z,C[F++]=z,C[F++]=N}}else{_=x.version;for(let g=0,w=0;g<T;g+=3){let F=g+0,N=g+1,E=g+2;C[w++]=F,C[w++]=N,C[w++]=N,C[w++]=E,C[w++]=E,C[w++]=F}}M.version=_;let S=r.get(h);S&&e.remove(S),r.set(h,M)}function p(h){let v=r.get(h);if(v){let x=h.index;x!==null&&v.version<x.version&&f(h)}else f(h);return r.get(h)}function m(){for(let h in s){let v=s[h].deref();v!==void 0&&c(v)}}return{get:l,update:d,getWireframeAttribute:p,dispose:m}}function w_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,f*o,m),t.update(p,i,m))}function d(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,m);let v=0;for(let x=0;x<m;x++)v+=p[x];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function T_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function A_(n,e,t){let i=new WeakMap,s=new Yt;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,p=i.get(a);if(p===void 0||p.count!==f){let F=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,h=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],R=0;m===!0&&(R=1),h===!0&&(R=2),v===!0&&(R=3);let M=a.attributes.position.count*R,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*C*4*f),g=new ho(S,M,C,f);g.type=ti,g.needsUpdate=!0;let w=R*4;for(let N=0;N<f;N++){let E=x[N],z=_[N],W=T[N],D=M*C*4*N;for(let k=0;k<E.count;k++){let V=k*w;m===!0&&(s.fromBufferAttribute(E,k),S[D+V+0]=s.x,S[D+V+1]=s.y,S[D+V+2]=s.z,S[D+V+3]=0),h===!0&&(s.fromBufferAttribute(z,k),S[D+V+4]=s.x,S[D+V+5]=s.y,S[D+V+6]=s.z,S[D+V+7]=0),v===!0&&(s.fromBufferAttribute(W,k),S[D+V+8]=s.x,S[D+V+9]=s.y,S[D+V+10]=s.z,S[D+V+11]=W.itemSize===4?s.w:1)}}p={count:f,texture:g,size:new dt(M,C)},i.set(a,p),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];let h=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",h),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function E_(n,e,t,i,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var C_={[xh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[Lo]:"ACES_FILMIC_TONE_MAPPING",[Mh]:"AGX_TONE_MAPPING",[bh]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function R_(n,e,t,i,s,r){let o=new Zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new Zt;d.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let f=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new It(d,f),m=new Ro(-1,1,1,-1,0,1),h=null,v=null,x=!1,_,T=null,R=[],M=!1;this.setSize=function(C,S){o.setSize(C,S),a!==null&&a.setSize(C,S),c!==null&&c.setSize(C,S);for(let g=0;g<R.length;g++){let w=R[g];w.setSize&&w.setSize(C,S)}},this.setEffects=function(C){R=C,M=R.length>0&&R[0].isRenderPass===!0;let S=o.width,g=o.height;R.length>0&&a===null&&(a=new Zn(S,g,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new Zn(S,g,{type:fi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&R.some(F=>F.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new qi(S,g),r===!0&&(l.format=Ki,l.type=ks)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let F=0;F<R.length;F++){let N=R[F];N.setSize&&N.setSize(S,g),w&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(C,S){if(x||C.toneMapping===Ai&&R.length===0)return!1;if(T=S,S!==null){let g=S.width,w=S.height;(o.width!==g||o.height!==w)&&this.setSize(g,w)}return M===!1&&C.setRenderTarget(o),_=C.toneMapping,C.toneMapping=Ai,!0},this.hasRenderPass=function(){return M},this.end=function(C,S){C.toneMapping=_,x=!0;let g=o,w=a;for(let F=0;F<R.length;F++){let N=R[F];N.enabled!==!1&&(N.render(C,w,g,S),N.needsSwap!==!1&&(g=w,w=w===a?c:a))}if(h!==C.outputColorSpace||v!==C.toneMapping){h=C.outputColorSpace,v=C.toneMapping,f.defines={},At.getTransfer(h)===Ut&&(f.defines.SRGB_TRANSFER="");let F=C_[v];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(T),C.render(p,m),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var Df=new Nn,Nf=new qi(1,1),Uf=new vo(1),Ff=new ho,zf=new Ja,Of=new yo,df=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=df[s];if(r===void 0&&(r=new Float32Array(s),df[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rc(n,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function L_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function D_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function N_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),mn(t,i)}}function U_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),mn(t,i)}}function F_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),mn(t,i)}}function z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function G_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function oc(n){return n.version===0&&(n.compareFunction=Lh,n.needsUpdate=!0),n}function X_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=oc(Nf):r=Df,t.setTexture2D(e||r,s)}function q_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zf,s)}function Y_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=oc(Uf):r=Of,t.setTextureCube(e||r,s)}function Z_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ff,s)}function J_(n){switch(n){case 5126:return I_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return z_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return k_;case 5125:return G_;case 36294:return V_;case 36295:return H_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}function K_(n,e){n.uniform1fv(this.addr,e)}function $_(n,e){let t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function j_(n,e){let t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function Q_(n,e){let t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function ey(n,e){let t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ty(n,e){let t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ny(n,e){let t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iy(n,e){n.uniform1iv(this.addr,e)}function sy(n,e){n.uniform2iv(this.addr,e)}function ry(n,e){n.uniform3iv(this.addr,e)}function oy(n,e){n.uniform4iv(this.addr,e)}function ay(n,e){n.uniform1uiv(this.addr,e)}function ly(n,e){n.uniform2uiv(this.addr,e)}function cy(n,e){n.uniform3uiv(this.addr,e)}function hy(n,e){n.uniform4uiv(this.addr,e)}function uy(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=oc(Nf):o=Df;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function dy(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zf,r[o])}function fy(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=oc(Uf):o=Of;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function py(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ff,r[o])}function my(n){switch(n){case 5126:return K_;case 35664:return $_;case 35665:return j_;case 35666:return Q_;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}var Wh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=J_(t.type)}},Xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=my(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Vh=/(\w+)(\])?(\[|\.)?/g;function xf(n,e){n.seq.push(e),n.map[e.id]=e}function gy(n,e,t){let i=n.name,s=i.length;for(Vh.lastIndex=0;;){let r=Vh.exec(i),o=Vh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){xf(t,l===void 0?new Wh(a,n,e):new Xh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new qh(a),xf(t,f)),t=f}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);gy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function _f(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xy=37297,_y=0;function yy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var yf=new it;function vy(n){At._getMatrix(yf,At.workingColorSpace,n);let e=`mat3( ${yf.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case lo:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yy(n.getShaderSource(e),a)}else return r}function My(n,e){let t=vy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var by={[xh]:"Linear",[_h]:"Reinhard",[yh]:"Cineon",[Lo]:"ACESFilmic",[Mh]:"AgX",[bh]:"Neutral",[vh]:"Custom"};function Sy(n,e){let t=by[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new X;function wy(){At.getLuminanceCoefficients(nc);let n=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function Ay(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ey(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Go(n){return n!==""}function Mf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(n){return n.replace(Cy,Ry)}function Ry(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yh(t)}var Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(n){return n.replace(Iy,Py)}function Py(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Ly={[Fs]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function Dy(n){return Ly[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ny={[Ar]:"ENVMAP_MODE_REFRACTION"};function Uy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ny[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fy={[gh]:"ENVMAP_BLENDING_MULTIPLY",[Bd]:"ENVMAP_BLENDING_MIX",[kd]:"ENVMAP_BLENDING_ADD"};function zy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Fy[n.combine]||"ENVMAP_BLENDING_NONE"}function Oy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Dy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Uy(t),f=zy(t),p=Ty(t),m=Ay(r),h=s.createProgram(),v,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Go).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(v=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ai?Sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,My("linearToOutputTexel",t.outputColorSpace),wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),o=Yh(o),o=Mf(o,t),o=bf(o,t),a=Yh(a),a=Mf(a,t),a=bf(a,t),o=Sf(o),a=Sf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let T=_+v+o,R=_+x+a,M=_f(s,s.VERTEX_SHADER,T),C=_f(s,s.FRAGMENT_SHADER,R);s.attachShader(h,M),s.attachShader(h,C),t.index0AttributeName!==void 0?s.bindAttribLocation(h,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(h,0,"position"),s.linkProgram(h);function S(N){if(n.debug.checkShaderErrors){let E=s.getProgramInfoLog(h)||"",z=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(C)||"",D=E.trim(),k=z.trim(),V=W.trim(),B=!0,Y=!0;if(s.getProgramParameter(h,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,h,M,C);else{let G=vf(s,M,"vertex"),K=vf(s,C,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(h,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+G+`
`+K)}else D!==""?Qe("WebGLProgram: Program Info Log:",D):(k===""||V==="")&&(Y=!1);Y&&(N.diagnostics={runnable:B,programLog:D,vertexShader:{log:k,prefix:v},fragmentShader:{log:V,prefix:x}})}s.deleteShader(M),s.deleteShader(C),g=new Ir(s,h),w=Ey(s,h)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(h,xy)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_y++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=C,this}var By=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Jh(e),t.set(e,i)),i}},Jh=class{constructor(e){this.id=By++,this.code=e,this.usedTimes=0}};function ky(n){return n===xs||n===Oo||n===Bo}function Gy(n,e,t,i,s,r){let o=new uo,a=new Zh,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function h(g,w,F,N,E,z){let W=N.fog,D=E.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||k,V),Y=p[g.type],G=i.precision;g.precision!==null&&(G=i.getMaxPrecision(g.precision),G!==g.precision&&Qe("WebGLProgram.getParameters:",g.precision,"not supported, using",G,"instead."));let K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=K!==void 0?K.length:0,j=0;D.morphAttributes.position!==void 0&&(j=1),D.morphAttributes.normal!==void 0&&(j=2),D.morphAttributes.color!==void 0&&(j=3);let xe,J,pe,Ce;if(Y){let Ie=Ci[Y];xe=Ie.vertexShader,J=Ie.fragmentShader}else{xe=g.vertexShader,J=g.fragmentShader;let Ie=a.getVertexShaderStage(g),Tt=a.getFragmentShaderStage(g);a.update(g,Ie,Tt),pe=Ie.id,Ce=Tt.id}let ge=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),He=E.isInstancedMesh===!0,ot=E.isBatchedMesh===!0,Ze=!!g.map,ft=!!g.matcap,wt=!!B,Ke=wt&&B.isPMREMTexture===!0,Dt=!!g.aoMap,Wt=!!g.lightMap,Gt=!!g.bumpMap&&g.wireframe===!1,Lt=!!g.normalMap,ne=!!g.displacementMap,Ue=!!g.emissiveMap,xt=!!g.metalnessMap,_t=!!g.roughnessMap,lt=g.anisotropy>0,Z=g.clearcoat>0,Ft=g.diffuseRoughness>0,pt=g.dispersion>0,zt=g.retroreflectivity>0,Le=g.iridescence>0,ct=g.sheen>0,Xe=g.transmission>0,je=lt&&!!g.anisotropyMap,O=Z&&!!g.clearcoatMap,P=Z&&!!g.clearcoatNormalMap,Q=Z&&!!g.clearcoatRoughnessMap,ye=Ft&&!!g.diffuseRoughnessMap,de=Le&&!!g.iridescenceMap,we=Le&&!!g.iridescenceThicknessMap,_e=ct&&!!g.sheenColorMap,ce=ct&&!!g.sheenRoughnessMap,he=!!g.specularMap,Re=!!g.specularColorMap,H=!!g.specularIntensityMap,ue=Xe&&!!g.transmissionMap,le=Xe&&!!g.thicknessMap,Te=!!g.gradientMap,fe=!!g.alphaMap,ve=g.alphaTest>0,We=!!g.alphaHash,at=!!g.extensions,be=Ai;g.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(be=n.toneMapping);let De=Ke?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,tt={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:xe,fragmentShader:J,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:Ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:G,batching:ot,batchingColor:ot&&E._colorsTexture!==null,instancing:He,instancingColor:He&&E.instanceColor!==null,instancingMorph:He&&E.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ze,matcap:ft,envMap:wt,envMapMode:wt&&B.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?De.length-1:null,envMapSize:Ke?De[0].width:null,aoMap:Dt,lightMap:Wt,bumpMap:Gt,normalMap:Lt,displacementMap:ne,emissiveMap:Ue,normalMapObjectSpace:Lt&&g.normalMapType===Hd,normalMapTangentSpace:Lt&&g.normalMapType===Ql,packedNormalMap:Lt&&g.normalMapType===Ql&&ky(g.normalMap.format),metalnessMap:xt,roughnessMap:_t,anisotropy:lt,anisotropyMap:je,clearcoat:Z,clearcoatMap:O,clearcoatNormalMap:P,clearcoatRoughnessMap:Q,diffuseRoughness:Ft,diffuseRoughnessMap:ye,dispersion:pt,retroreflection:zt,iridescence:Le,iridescenceMap:de,iridescenceThicknessMap:we,sheen:ct,sheenColorMap:_e,sheenRoughnessMap:ce,specularMap:he,specularColorMap:Re,specularIntensityMap:H,transmission:Xe,transmissionMap:ue,thicknessMap:le,gradientMap:Te,opaque:g.transparent===!1&&g.blending===gs&&g.alphaToCoverage===!1,alphaMap:fe,alphaTest:ve,alphaHash:We,combine:g.combine,mapUv:Ze&&m(g.map.channel),aoMapUv:Dt&&m(g.aoMap.channel),lightMapUv:Wt&&m(g.lightMap.channel),bumpMapUv:Gt&&m(g.bumpMap.channel),normalMapUv:Lt&&m(g.normalMap.channel),displacementMapUv:ne&&m(g.displacementMap.channel),emissiveMapUv:Ue&&m(g.emissiveMap.channel),metalnessMapUv:xt&&m(g.metalnessMap.channel),roughnessMapUv:_t&&m(g.roughnessMap.channel),anisotropyMapUv:je&&m(g.anisotropyMap.channel),clearcoatMapUv:O&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:P&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:de&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:ce&&m(g.sheenRoughnessMap.channel),specularMapUv:he&&m(g.specularMap.channel),specularColorMapUv:Re&&m(g.specularColorMap.channel),specularIntensityMapUv:H&&m(g.specularIntensityMap.channel),transmissionMapUv:ue&&m(g.transmissionMap.channel),thicknessMapUv:le&&m(g.thicknessMap.channel),alphaMapUv:fe&&m(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Lt||lt),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!D.attributes.uv&&(Ze||fe),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&Lt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:j,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.filter(Ie=>Ie.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:Ze&&g.map.isVideoTexture===!0&&At.getTransfer(g.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ue&&g.emissiveMap.isVideoTexture===!0&&At.getTransfer(g.emissiveMap.colorSpace)===Ut,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Cn,flipSided:g.side===bn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:at&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&g.extensions.multiDraw===!0||ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function v(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let F in g.defines)w.push(F),w.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(x(w,g),_(w,g),w.push(n.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function x(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function _(g,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function T(g){let w=p[g.type],F;if(w){let N=Ci[w];F=rf.clone(N.uniforms)}else F=g.uniforms;return F}function R(g,w){let F=d.get(w);return F!==void 0?++F.usedTimes:(F=new Oy(n,w,g,s),l.push(F),d.set(w,F)),F}function M(g){if(--g.usedTimes===0){let w=l.indexOf(g);l[w]=l[l.length-1],l.pop(),d.delete(g.cacheKey),g.destroy()}}function C(g){a.remove(g)}function S(){a.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:T,acquireProgram:R,releaseProgram:M,releaseShaderCache:C,programs:l,dispose:S}}function Vy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Hy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function a(p,m,h,v,x,_){let T=n[e];return T===void 0?(T={id:p.id,object:p,geometry:m,material:h,materialVariant:o(p),groupOrder:v,renderOrder:p.renderOrder,z:x,group:_},n[e]=T):(T.id=p.id,T.object=p,T.geometry=m,T.material=h,T.materialVariant=o(p),T.groupOrder=v,T.renderOrder=p.renderOrder,T.z=x,T.group=_),e++,T}function c(p,m,h,v,x,_,T){T.reversedDepth===!0&&(x=-x);let R=a(p,m,h,v,x,_);h.transmission>0?i.push(R):h.transparent===!0?s.push(R):t.push(R)}function l(p,m,h,v,x,_){let T=a(p,m,h,v,x,_);h.transmission>0?i.unshift(T):h.transparent===!0?s.unshift(T):t.unshift(T)}function d(p,m){t.length>1&&t.sort(p||Hy),i.length>1&&i.sort(m||Tf),s.length>1&&s.sort(m||Tf)}function f(){for(let p=e,m=n.length;p<m;p++){let h=n[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function Wy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Af,n.set(i,[o])):s>=r.length?(o=new Af,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Xy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new $e};break;case"SpotLight":t={position:new X,direction:new X,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function qy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Yy=0;function Zy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jy(n){let e=new Xy,t=qy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);let s=new X,r=new Ct,o=new Ct;function a(l){let d=0,f=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,h=0,v=0,x=0,_=0,T=0,R=0,M=0,C=0,S=0,g=0,w=0,F=0,N=0;l.sort(Zy);for(let z=0,W=l.length;z<W;z++){let D=l[z],k=D.color,V=D.intensity,B=D.distance,Y=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?Y=D.shadow.map.texture:Y=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=k.r*V,f+=k.g*V,p+=k.b*V;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],V);N++}else if(D.isSunLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,oe=t.get(D);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[h]=oe,i.sunShadowMap[h]=Y;let j=K.getViewportCount();for(let xe=0;xe<j;xe++)i.sunShadowMatrix[v+xe]=K.getMatrix(xe),i.sunShadowCascade[v+xe]=K._cascadeData[xe];v+=j,h++}i.sun[m]=G,m++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,oe=t.get(D);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,i.directionalShadow[x]=oe,i.directionalShadowMap[x]=Y,i.directionalShadowMatrix[x]=D.shadow.matrix,C++}i.directional[x]=G,x++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(k).multiplyScalar(V),G.distance=B,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[T]=G;let K=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,K.updateMatrices(D),D.castShadow&&F++),i.spotLightMatrix[T]=K.matrix,D.castShadow){let oe=t.get(D);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,i.spotShadow[T]=oe,i.spotShadowMap[T]=Y,g++}T++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(k).multiplyScalar(V),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[R]=G,R++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let K=D.shadow,oe=t.get(D);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,oe.shadowCameraNear=K.camera.near,oe.shadowCameraFar=K.camera.far,i.pointShadow[_]=oe,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=D.shadow.matrix,S++}i.point[_]=G,_++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(V),G.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[M]=G,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;let E=i.hash;(E.sunLength!==m||E.directionalLength!==x||E.pointLength!==_||E.spotLength!==T||E.rectAreaLength!==R||E.hemiLength!==M||E.numSunShadows!==h||E.numDirectionalShadows!==C||E.numPointShadows!==S||E.numSpotShadows!==g||E.numSpotMaps!==w||E.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=x,i.spot.length=T,i.rectArea.length=R,i.point.length=_,i.hemi.length=M,i.sunShadow.length=h,i.sunShadowMap.length=h,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+w-F,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=N,E.sunLength=m,E.directionalLength=x,E.pointLength=_,E.spotLength=T,E.rectAreaLength=R,E.hemiLength=M,E.numSunShadows=h,E.numDirectionalShadows=C,E.numPointShadows=S,E.numSpotShadows=g,E.numSpotMaps=w,E.numLightProbes=N,i.version=Yy++)}function c(l,d){let f=0,p=0,m=0,h=0,v=0,x=0,_=d.matrixWorldInverse;for(let T=0,R=l.length;T<R;T++){let M=l[T];if(M.isSunLight){let C=i.sun[f];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(_),f++}else if(M.isDirectionalLight){let C=i.directional[p];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(_),p++}else if(M.isSpotLight){let C=i.spot[h];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(_),h++}else if(M.isRectAreaLight){let C=i.rectArea[v];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(_),o.identity(),r.copy(M.matrixWorld),r.premultiply(_),o.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let C=i.point[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){let C=i.hemi[x];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(_),x++}}}return{setup:a,setupView:c,state:i}}function Ef(n){let e=new Jy(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function c(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ky(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ef(n),e.set(s,[a])):r>=o.length?(a=new Ef(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jy=`uniform sampler2D shadow_pass;
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
}`,Qy=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],ev=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Cf=new Ct,ko=new X,Hh=new X;function tv(n,e,t){let i=new hs,s=new dt,r=new dt,o=new Yt,a=new Qa,c=new el,l={},d=t.maxTextureSize,f={[ms]:bn,[bn]:ms,[Cn]:Cn},p=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:$y,fragmentShader:jy}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Zt;h.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new It(h,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let _=this.type;this.render=function(S,g,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===vd&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let F=n.getRenderTarget(),N=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),z=n.state;z.setBlending(zs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=_!==this.type;W&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=S.length;D<k;D++){let V=S[D],B=V.shadow;if(B===void 0){Qe("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Y=B.getFrameExtents();s.multiply(Y),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Y.x),s.x=r.x*Y.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Y.y),s.y=r.y*Y.y,B.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Tr){if(V.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Zn(s.x,s.y,{format:xs,type:fi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new qi(s.x,s.y,ti),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=Hi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=_n,B.map.depthTexture.magFilter=_n}else V.isPointLight?(B.map=new Vo(s.x),B.map.depthTexture=new vo(s.x,di)):(B.map=new Zn(s.x,s.y),B.map.depthTexture=new qi(s.x,s.y,di)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=Hi,this.type===Fs?(B.map.depthTexture.compareFunction=G?Ph:Ih,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=_n,B.map.depthTexture.magFilter=_n);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let K=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,w);let oe=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:w.layers;for(let j=0;j<K;j++){let xe=B.getCamera(j);if(V.isPointLight){let J=B.camera,pe=B.matrix,Ce=V.distance||J.far;Ce!==J.far&&(J.far=Ce,J.updateProjectionMatrix()),ko.setFromMatrixPosition(V.matrixWorld),J.position.copy(ko),Hh.copy(J.position),Hh.add(Qy[j]),J.up.copy(ev[j]),J.lookAt(Hh),J.updateMatrixWorld(),pe.makeTranslation(-ko.x,-ko.y,-ko.z),Cf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Cf,J.coordinateSystem,J.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,j),n.clear();else{j===0&&(n.setRenderTarget(B.map),n.clear());let J=B.getViewport(j);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),z.viewport(o)}i=B.getFrustum(j),M(g,w,xe,V,oe,this.type)}B.isPointLightShadow!==!0&&this.type===Tr&&T(B,w),B.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(F,N,E)};function T(S,g){let w=e.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new Zn(s.x,s.y,{format:xs,type:fi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),p.uniforms.shadow_pass.value=S.map.depthTexture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(g,null,w,p,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(g,null,w,m,v,null)}function R(S,g,w,F){let N=null,E=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)N=E;else if(N=w.isPointLight===!0?c:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=N.uuid,W=g.uuid,D=l[z];D===void 0&&(D={},l[z]=D);let k=D[W];k===void 0&&(k=N.clone(),D[W]=k,g.addEventListener("dispose",C)),N=k}if(N.visible=g.visible,N.wireframe=g.wireframe,F===Tr?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:f[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let z=n.properties.get(N);z.light=w}return N}function M(S,g,w,F,N,E){if(S.visible===!1)return;if(S.layers.test(N)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Tr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let D=e.update(S),k=S.material;if(Array.isArray(k)){let V=D.groups;for(let B=0,Y=V.length;B<Y;B++){let G=V[B],K=k[G.materialIndex];if(K&&K.visible){let oe=R(S,K,F,E);S.onBeforeShadow(n,S,g,w,D,oe,G),n.renderBufferDirect(w,null,D,oe,S,G),S.onAfterShadow(n,S,g,w,D,oe,G)}}}else if(k.visible){let V=R(S,k,F,E);S.onBeforeShadow(n,S,g,w,D,V,null),n.renderBufferDirect(w,null,D,V,S,null),S.onAfterShadow(n,S,g,w,D,V,null)}}let W=S.children;for(let D=0,k=W.length;D<k;D++)M(W[D],g,w,F,N,E)}function C(S){S.target.removeEventListener("dispose",C);for(let w in l){let F=l[w],N=S.target.uuid;N in F&&(F[N].dispose(),delete F[N])}}}function nv(n,e){function t(){let H=!1,ue=new Yt,le=null,Te=new Yt(0,0,0,0);return{setMask:function(fe){le!==fe&&!H&&(n.colorMask(fe,fe,fe,fe),le=fe)},setLocked:function(fe){H=fe},setClear:function(fe,ve,We,at,be){be===!0&&(fe*=at,ve*=at,We*=at),ue.set(fe,ve,We,at),Te.equals(ue)===!1&&(n.clearColor(fe,ve,We,at),Te.copy(ue))},reset:function(){H=!1,le=null,Te.set(-1,0,0,0)}}}function i(){let H=!1,ue=!1,le=null,Te=null,fe=null;return{setReversed:function(ve){if(ue!==ve){let We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ue=ve;let at=fe;fe=null,this.setClear(at)}},getReversed:function(){return ue},setTest:function(ve){ve?Me(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(ve){le!==ve&&!H&&(n.depthMask(ve),le=ve)},setFunc:function(ve){if(ue&&(ve=ef[ve]),Te!==ve){switch(ve){case za:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Ga:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case Ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=ve}},setLocked:function(ve){H=ve},setClear:function(ve){fe!==ve&&(fe=ve,ue&&(ve=1-ve),n.clearDepth(ve))},reset:function(){H=!1,le=null,Te=null,fe=null,ue=!1}}}function s(){let H=!1,ue=null,le=null,Te=null,fe=null,ve=null,We=null,at=null,be=null;return{setTest:function(De){H||(De?Me(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(De){ue!==De&&!H&&(n.stencilMask(De),ue=De)},setFunc:function(De,tt,Ie){(le!==De||Te!==tt||fe!==Ie)&&(n.stencilFunc(De,tt,Ie),le=De,Te=tt,fe=Ie)},setOp:function(De,tt,Ie){(ve!==De||We!==tt||at!==Ie)&&(n.stencilOp(De,tt,Ie),ve=De,We=tt,at=Ie)},setLocked:function(De){H=De},setClear:function(De){be!==De&&(n.clearStencil(De),be=De)},reset:function(){H=!1,ue=null,le=null,Te=null,fe=null,ve=null,We=null,at=null,be=null}}}let r=new t,o=new i,a=new s,c={},l=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],v=null,x=!1,_=null,T=null,R=null,M=null,C=null,S=null,g=null,w=new $e(0,0,0),F=0,N=!1,E=null,z=null,W=null,D=null,k=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=Y>=2);let K=null,oe={},j=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),J=new Yt().fromArray(j),pe=new Yt().fromArray(xe);function Ce(H,ue,le,Te){let fe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(H,ve),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<le;We++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ue+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ve}let ge={};ge[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(_r),Gt(!1),Lt(uh),Me(n.CULL_FACE),Dt(zs);function Me(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function He(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function ot(H,ue){return p[H]!==ue?(n.bindFramebuffer(H,ue),p[H]=ue,H===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ue),H===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ze(H,ue){let le=h,Te=!1;if(H){le=m.get(ue),le===void 0&&(le=[],m.set(ue,le));let fe=H.textures;if(le.length!==fe.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,We=fe.length;ve<We;ve++)le[ve]=n.COLOR_ATTACHMENT0+ve;le.length=fe.length,Te=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Te=!0);Te&&n.drawBuffers(le)}function ft(H){return v!==H?(n.useProgram(H),v=H,!0):!1}let wt={[Os]:n.FUNC_ADD,[bd]:n.FUNC_SUBTRACT,[Sd]:n.FUNC_REVERSE_SUBTRACT};wt[wd]=n.MIN,wt[Td]=n.MAX;let Ke={[Ad]:n.ZERO,[Ed]:n.ONE,[Cd]:n.SRC_COLOR,[ph]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[Ld]:n.DST_COLOR,[Id]:n.DST_ALPHA,[Rd]:n.ONE_MINUS_SRC_COLOR,[mh]:n.ONE_MINUS_SRC_ALPHA,[Dd]:n.ONE_MINUS_DST_COLOR,[Pd]:n.ONE_MINUS_DST_ALPHA,[Ud]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[zd]:n.CONSTANT_ALPHA,[Od]:n.ONE_MINUS_CONSTANT_ALPHA};function Dt(H,ue,le,Te,fe,ve,We,at,be,De){if(H===zs){x===!0&&(He(n.BLEND),x=!1);return}if(x===!1&&(Me(n.BLEND),x=!0),H!==Md){if(H!==_||De!==N){if((T!==Os||C!==Os)&&(n.blendEquation(n.FUNC_ADD),T=Os,C=Os),De)switch(H){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Po:n.blendFunc(n.ONE,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",H);break}else switch(H){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dh:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",H);break}R=null,M=null,S=null,g=null,w.set(0,0,0),F=0,_=H,N=De}return}fe=fe||ue,ve=ve||le,We=We||Te,(ue!==T||fe!==C)&&(n.blendEquationSeparate(wt[ue],wt[fe]),T=ue,C=fe),(le!==R||Te!==M||ve!==S||We!==g)&&(n.blendFuncSeparate(Ke[le],Ke[Te],Ke[ve],Ke[We]),R=le,M=Te,S=ve,g=We),(at.equals(w)===!1||be!==F)&&(n.blendColor(at.r,at.g,at.b,be),w.copy(at),F=be),_=H,N=!1}function Wt(H,ue){H.side===Cn?He(n.CULL_FACE):Me(n.CULL_FACE);let le=H.side===bn;ue&&(le=!le),Gt(le),H.blending===gs&&H.transparent===!1?Dt(zs):Dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Te=H.stencilWrite;a.setTest(Te),Te&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(H){E!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),E=H)}function Lt(H){H!==_d?(Me(n.CULL_FACE),H!==z&&(H===uh?n.cullFace(n.BACK):H===yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),z=H}function ne(H){H!==W&&(B&&n.lineWidth(H),W=H)}function Ue(H,ue,le){H?(Me(n.POLYGON_OFFSET_FILL),(D!==ue||k!==le)&&(D=ue,k=le,o.getReversed()&&(ue=-ue,le=-le),n.polygonOffset(ue,le))):He(n.POLYGON_OFFSET_FILL)}function xt(H){H?Me(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function _t(H){H===void 0&&(H=n.TEXTURE0+V-1),K!==H&&(n.activeTexture(H),K=H)}function lt(H,ue,le){le===void 0&&(K===null?le=n.TEXTURE0+V-1:le=K);let Te=oe[le];Te===void 0&&(Te={type:void 0,texture:void 0},oe[le]=Te),(Te.type!==H||Te.texture!==ue)&&(K!==le&&(n.activeTexture(le),K=le),n.bindTexture(H,ue||ge[H]),Te.type=H,Te.texture=ue)}function Z(){let H=oe[K];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ft(){try{n.compressedTexImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function pt(){try{n.compressedTexImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function zt(){try{n.texSubImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function Le(){try{n.texSubImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function ct(){try{n.compressedTexSubImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function Xe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function je(){try{n.texStorage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function O(){try{n.texStorage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function P(){try{n.texImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function Q(){try{n.texImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function ye(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function de(H,ue){f[H]!==ue&&(n.pixelStorei(H,ue),f[H]=ue)}function we(H){J.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),J.copy(H))}function _e(H){pe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),pe.copy(H))}function ce(H,ue){let le=l.get(ue);le===void 0&&(le=new WeakMap,l.set(ue,le));let Te=le.get(H);Te===void 0&&(Te=n.getUniformBlockIndex(ue,H.name),n.uniformBlockBinding(ue,Te,Te),le.set(H,Te))}function he(H,ue,le){let fe=l.get(ue).get(H);c[fe]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,fe,le),c[fe]=le)}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},K=null,oe={},p={},c={},m=new WeakMap,h=[],v=null,x=!1,_=null,T=null,R=null,M=null,C=null,S=null,g=null,w=new $e(0,0,0),F=0,N=!1,E=null,z=null,W=null,D=null,k=null,J.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:He,bindFramebuffer:ot,drawBuffers:Ze,useProgram:ft,setBlending:Dt,setMaterial:Wt,setFlipSided:Gt,setCullFace:Lt,setLineWidth:ne,setPolygonOffset:Ue,setScissorTest:xt,activeTexture:_t,bindTexture:lt,unbindTexture:Z,compressedTexImage2D:Ft,compressedTexImage3D:pt,texImage2D:P,texImage3D:Q,pixelStorei:de,getParameter:ye,updateUBOMapping:ce,uniformBlockBinding:he,texStorage2D:je,texStorage3D:O,texSubImage2D:zt,texSubImage3D:Le,compressedTexSubImage2D:ct,compressedTexSubImage3D:Xe,scissor:we,viewport:_e,reset:Re}}function iv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,d=new WeakMap,f=new Set,p,m=new WeakMap,h=new Set,v=new FinalizationRegistry(O=>h.delete(O)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,P){return x?new OffscreenCanvas(O,P):co("canvas")}function T(O,P,Q){let ye=1,de=je(O);if((de.width>Q||de.height>Q)&&(ye=Q/Math.max(de.width,de.height)),ye<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let we=Math.floor(ye*de.width),_e=Math.floor(ye*de.height);p===void 0&&(p=_(we,_e));let ce=P?_(we,_e):p;return ce.width=we,ce.height=_e,ce.getContext("2d").drawImage(O,0,0,we,_e),Qe("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+_e+")."),ce}else return"data"in O&&Qe("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function R(O){return O.generateMipmaps}function M(O){n.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(O,P,Q,ye,de,we=!1){if(O!==null){if(n[O]!==void 0)return n[O];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e;ye&&(_e=e.get("EXT_texture_norm16"),_e||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=P;if(P===n.RED&&(Q===n.FLOAT&&(ce=n.R32F),Q===n.HALF_FLOAT&&(ce=n.R16F),Q===n.UNSIGNED_BYTE&&(ce=n.R8),Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.R16_EXT),Q===n.SHORT&&_e&&(ce=_e.R16_SNORM_EXT)),P===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.R8UI),Q===n.UNSIGNED_SHORT&&(ce=n.R16UI),Q===n.UNSIGNED_INT&&(ce=n.R32UI),Q===n.BYTE&&(ce=n.R8I),Q===n.SHORT&&(ce=n.R16I),Q===n.INT&&(ce=n.R32I)),P===n.RG&&(Q===n.FLOAT&&(ce=n.RG32F),Q===n.HALF_FLOAT&&(ce=n.RG16F),Q===n.UNSIGNED_BYTE&&(ce=n.RG8),Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.RG16_EXT),Q===n.SHORT&&_e&&(ce=_e.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.RG8UI),Q===n.UNSIGNED_SHORT&&(ce=n.RG16UI),Q===n.UNSIGNED_INT&&(ce=n.RG32UI),Q===n.BYTE&&(ce=n.RG8I),Q===n.SHORT&&(ce=n.RG16I),Q===n.INT&&(ce=n.RG32I)),P===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),Q===n.UNSIGNED_INT&&(ce=n.RGB32UI),Q===n.BYTE&&(ce=n.RGB8I),Q===n.SHORT&&(ce=n.RGB16I),Q===n.INT&&(ce=n.RGB32I)),P===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),Q===n.UNSIGNED_INT&&(ce=n.RGBA32UI),Q===n.BYTE&&(ce=n.RGBA8I),Q===n.SHORT&&(ce=n.RGBA16I),Q===n.INT&&(ce=n.RGBA32I)),P===n.RGB&&(Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.RGB16_EXT),Q===n.SHORT&&_e&&(ce=_e.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),P===n.RGBA){let he=we?lo:At.getTransfer(de);Q===n.FLOAT&&(ce=n.RGBA32F),Q===n.HALF_FLOAT&&(ce=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(ce=he===Ut?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.RGBA16_EXT),Q===n.SHORT&&_e&&(ce=_e.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function g(O,P){let Q;return O?P===null||P===di||P===ks?Q=n.DEPTH24_STENCIL8:P===ti?Q=n.DEPTH32F_STENCIL8:P===Er&&(Q=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===di||P===ks?Q=n.DEPTH_COMPONENT24:P===ti?Q=n.DEPTH_COMPONENT32F:P===Er&&(Q=n.DEPTH_COMPONENT16),Q}function w(O,P){return R(O)===!0||O.isFramebufferTexture&&O.minFilter!==_n&&O.minFilter!==yn?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function F(O){let P=new WeakRef(O);i.get(O).__ref=P,h.add(P),v.register(O,P,P)}function N(O){let P=i.get(O).__ref;P!==void 0&&(h.delete(P),v.unregister(P))}function E(O){W(O.target)}function z(O){D(O.target)}function W(O){O.removeEventListener("dispose",E),N(O),V(O),O.isVideoTexture&&d.delete(O),O.isHTMLTexture&&f.delete(O)}function D(O){O.removeEventListener("dispose",z),N(O),Y(O)}function k(){for(let O of h){let P=O.deref();P!==void 0&&(P.isRenderTarget===!0?D(P):W(P))}h.clear(),f.clear()}function V(O){let P=i.get(O);if(P.__webglInit===void 0)return;let Q=O.source,ye=m.get(Q);if(ye){let de=ye[P.__cacheKey];de.usedTimes--,de.usedTimes===0&&B(O),Object.keys(ye).length===0&&m.delete(Q)}i.remove(O)}function B(O){let P=i.get(O);n.deleteTexture(P.__webglTexture);let Q=O.source,ye=m.get(Q);delete ye[P.__cacheKey],o.memory.textures--}function Y(O){let P=i.get(O);P.__depthDisposeCallback&&P.__depthDisposeCallback();let Q=O.depthTexture;if(Q&&Q.renderTarget===O&&W(Q),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(P.__webglFramebuffer[de]))for(let we=0;we<P.__webglFramebuffer[de].length;we++)n.deleteFramebuffer(P.__webglFramebuffer[de][we]);else n.deleteFramebuffer(P.__webglFramebuffer[de]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[de])}else{if(Array.isArray(P.__webglFramebuffer))for(let de=0;de<P.__webglFramebuffer.length;de++)n.deleteFramebuffer(P.__webglFramebuffer[de]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let de=0;de<P.__webglColorRenderbuffer.length;de++)P.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[de]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let ye=O.textures;for(let de=0,we=ye.length;de<we;de++){let _e=i.get(ye[de]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(ye[de])}i.remove(O)}let G=0;function K(){G=0}function oe(){return G}function j(O){G=O}function xe(){let O=G;return O>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,O}function J(O){let P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.mipmapsAutoUpdate),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function pe(O,P){let Q=i.get(O);if(O.isVideoTexture&&ct(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){let ye=O.image;if(ye===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(Q,O,P);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+P)}function Ce(O,P){let Q=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){Wt(Q,O,P);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+P)}function ge(O,P){let Q=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){Wt(Q,O,P);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+P)}function Me(O,P){let Q=i.get(O);if(O.version>0&&Q.__version!==O.version){Gt(Q,O,P);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+P)}let He={[Wa]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},ot={[_n]:n.NEAREST,[Gd]:n.NEAREST_MIPMAP_NEAREST,[Do]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[ml]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},Ze={[Xd]:n.NEVER,[Lh]:n.ALWAYS,[qd]:n.LESS,[Ih]:n.LEQUAL,[Yd]:n.EQUAL,[Ph]:n.GEQUAL,[Zd]:n.GREATER,[Jd]:n.NOTEQUAL};function ft(O,P){if(P.type===ti&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===yn||P.magFilter===ml||P.magFilter===Do||P.magFilter===Ji||P.minFilter===yn||P.minFilter===ml||P.minFilter===Do||P.minFilter===Ji)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,He[P.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,He[P.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,He[P.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,ot[P.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,ot[P.minFilter]),P.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Ze[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===_n||P.minFilter!==Do&&P.minFilter!==Ji||P.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function wt(O,P){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",E),F(P));let ye=P.source,de=m.get(ye);de===void 0&&(de={},m.set(ye,de));let we=J(P);if(we!==O.__cacheKey){de[we]===void 0&&(de[we]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),de[we].usedTimes++;let _e=de[O.__cacheKey];_e!==void 0&&(de[O.__cacheKey].usedTimes--,_e.usedTimes===0&&B(P)),O.__cacheKey=we,O.__webglTexture=de[we].texture}return Q}function Ke(O,P,Q){return Math.floor(Math.floor(O/Q)/P)}function Dt(O,P,Q,ye){let we=O.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,Q,ye,P.data);else{we.sort((H,ue)=>H.start-ue.start);let _e=0;for(let H=1;H<we.length;H++){let ue=we[_e],le=we[H],Te=ue.start+ue.count,fe=Ke(le.start,P.width,4),ve=Ke(ue.start,P.width,4);le.start<=Te+1&&fe===ve&&Ke(le.start+le.count-1,P.width,4)===fe?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++_e,we[_e]=le)}we.length=_e+1;let ce=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let H=0,ue=we.length;H<ue;H++){let le=we[H],Te=Math.floor(le.start/4),fe=Math.ceil(le.count/4),ve=Te%P.width,We=Math.floor(Te/P.width),at=fe,be=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,We),t.texSubImage2D(n.TEXTURE_2D,0,ve,We,at,be,Q,ye,P.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Wt(O,P,Q){let ye=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ye=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ye=n.TEXTURE_3D);let de=wt(O,P),we=P.source;t.bindTexture(ye,O.__webglTexture,n.TEXTURE0+Q);let _e=i.get(we);if(we.version!==_e.__version||de===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let be=At.getPrimaries(At.workingColorSpace),De=P.colorSpace===$i?null:At.getPrimaries(P.colorSpace),tt=P.colorSpace===$i||be===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let he=T(P.image,!1,s.maxTextureSize);he=Xe(P,he);let Re=r.convert(P.format,P.colorSpace),H=r.convert(P.type),ue=S(P.internalFormat,Re,H,P.normalized,P.colorSpace,P.isVideoTexture);ft(ye,P);let le,Te=P.mipmaps,fe=P.isVideoTexture!==!0,ve=_e.__version===void 0||de===!0,We=we.dataReady,at=w(P,he);if(P.isDepthTexture)ue=g(P.format===Ki,P.type),ve&&(fe?t.texStorage2D(n.TEXTURE_2D,1,ue,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ue,he.width,he.height,0,Re,H,null));else if(P.isDataTexture)if(Te.length>0){fe&&ve&&t.texStorage2D(n.TEXTURE_2D,at,ue,Te[0].width,Te[0].height);for(let be=0,De=Te.length;be<De;be++)le=Te[be],fe?We&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Re,H,le.data):t.texImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,Re,H,le.data);P.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(n.TEXTURE_2D,at,ue,he.width,he.height),We&&Dt(P,he,Re,H)):t.texImage2D(n.TEXTURE_2D,0,ue,he.width,he.height,0,Re,H,he.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){fe&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,ue,Te[0].width,Te[0].height,he.depth);for(let be=0,De=Te.length;be<De;be++)if(le=Te[be],P.format!==Kn)if(Re!==null)if(fe){if(We)if(P.layerUpdates.size>0){let tt=Gh(le.width,le.height,P.format,P.type);for(let Ie of P.layerUpdates){let Tt=le.data.subarray(Ie*tt/le.data.BYTES_PER_ELEMENT,(Ie+1)*tt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Ie,le.width,le.height,1,Re,Tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,he.depth,Re,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,ue,le.width,le.height,he.depth,0,le.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?We&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,he.depth,Re,H,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,ue,le.width,le.height,he.depth,0,Re,H,le.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{fe&&ve&&t.texStorage2D(n.TEXTURE_2D,at,ue,Te[0].width,Te[0].height);for(let be=0,De=Te.length;be<De;be++)le=Te[be],P.format!==Kn?Re!==null?fe?We&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,le.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?We&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Re,H,le.data):t.texImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,Re,H,le.data)}else if(P.isDataArrayTexture)if(fe){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,ue,he.width,he.height,he.depth),We)if(P.layerUpdates.size>0){let be=Gh(he.width,he.height,P.format,P.type);for(let De of P.layerUpdates){let tt=he.data.subarray(De*be/he.data.BYTES_PER_ELEMENT,(De+1)*be/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,he.width,he.height,1,Re,H,tt)}P.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,H,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,he.width,he.height,he.depth,0,Re,H,he.data);else if(P.isData3DTexture)fe?(ve&&t.texStorage3D(n.TEXTURE_3D,at,ue,he.width,he.height,he.depth),We&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,H,he.data)):t.texImage3D(n.TEXTURE_3D,0,ue,he.width,he.height,he.depth,0,Re,H,he.data);else if(P.isFramebufferTexture){if(ve)if(fe)t.texStorage2D(n.TEXTURE_2D,at,ue,he.width,he.height);else{let be=he.width,De=he.height;for(let tt=0;tt<at;tt++)t.texImage2D(n.TEXTURE_2D,tt,ue,be,De,0,Re,H,null),be>>=1,De>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let be=n.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),he.parentNode!==be){be.appendChild(he),f.add(P),be.onpaint=De=>{let tt=De.changedElements;for(let Ie of f)tt.includes(Ie.image)&&(Ie.needsUpdate=!0)},be.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,he);else{let tt=n.RGBA,Ie=n.RGBA,Tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,Ie,Tt,he)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(fe&&ve){let be=je(Te[0]);t.texStorage2D(n.TEXTURE_2D,at,ue,be.width,be.height)}for(let be=0,De=Te.length;be<De;be++)le=Te[be],fe?We&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Re,H,le):t.texImage2D(n.TEXTURE_2D,be,ue,Re,H,le);P.generateMipmaps=!1}else if(fe){if(ve){let be=je(he);t.texStorage2D(n.TEXTURE_2D,at,ue,be.width,be.height)}We&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,H,he)}else t.texImage2D(n.TEXTURE_2D,0,ue,Re,H,he);R(P)&&P.mipmapsAutoUpdate===!0&&M(ye),_e.__version=we.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Gt(O,P,Q){if(P.image.length!==6)return;let ye=wt(O,P),de=P.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+Q);let we=i.get(de);if(de.version!==we.__version||ye===!0){t.activeTexture(n.TEXTURE0+Q);let _e=At.getPrimaries(At.workingColorSpace),ce=P.colorSpace===$i?null:At.getPrimaries(P.colorSpace),he=P.colorSpace===$i||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Re=P.isCompressedTexture||P.image[0].isCompressedTexture,H=P.image[0]&&P.image[0].isDataTexture,ue=[];for(let Ie=0;Ie<6;Ie++)!Re&&!H?ue[Ie]=T(P.image[Ie],!0,s.maxCubemapSize):ue[Ie]=H?P.image[Ie].image:P.image[Ie],ue[Ie]=Xe(P,ue[Ie]);let le=ue[0],Te=r.convert(P.format,P.colorSpace),fe=r.convert(P.type),ve=S(P.internalFormat,Te,fe,P.normalized,P.colorSpace),We=P.isVideoTexture!==!0,at=we.__version===void 0||ye===!0,be=de.dataReady,De=w(P,le);ft(n.TEXTURE_CUBE_MAP,P);let tt;if(P.isDepthTexture){if(ve=g(P.format===Ki,P.type),at)if(We)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ve,le.width,le.height);else for(let Ie=0;Ie<6;Ie++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ve,le.width,le.height,0,Te,fe,null)}else if(Re){We&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ve,le.width,le.height);for(let Ie=0;Ie<6;Ie++){tt=ue[Ie].mipmaps;for(let Tt=0;Tt<tt.length;Tt++){let Ot=tt[Tt];P.format!==Kn?Te!==null?We?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,0,0,Ot.width,Ot.height,Te,Ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,ve,Ot.width,Ot.height,0,Ot.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,0,0,Ot.width,Ot.height,Te,fe,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,ve,Ot.width,Ot.height,0,Te,fe,Ot.data)}}}else{if(tt=P.mipmaps,We&&at){tt.length>0&&De++;let Ie=je(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ve,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(H){We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,ue[Ie].width,ue[Ie].height,Te,fe,ue[Ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ve,ue[Ie].width,ue[Ie].height,0,Te,fe,ue[Ie].data);for(let Tt=0;Tt<tt.length;Tt++){let nn=tt[Tt].image[Ie].image;We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,0,0,nn.width,nn.height,Te,fe,nn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,ve,nn.width,nn.height,0,Te,fe,nn.data)}}else{We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,Te,fe,ue[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ve,Te,fe,ue[Ie]);for(let Tt=0;Tt<tt.length;Tt++){let Ot=tt[Tt];We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,0,0,Te,fe,Ot.image[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,ve,Te,fe,Ot.image[Ie])}}}R(P)&&P.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),we.__version=de.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Lt(O,P,Q,ye,de,we){let _e=r.convert(Q.format,Q.colorSpace),ce=r.convert(Q.type),he=S(Q.internalFormat,_e,ce,Q.normalized,Q.colorSpace),Re=i.get(P),H=i.get(Q);if(H.__renderTarget=P,!Re.__hasExternalTextures){let ue=Math.max(1,P.width>>we),le=Math.max(1,P.height>>we);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,we,he,ue,le,P.depth,0,_e,ce,null):t.texImage2D(de,we,he,ue,le,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Le(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,de,H.__webglTexture,0,zt(P)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ye,de,H.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(O,P,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,O),P.depthBuffer){let ye=P.depthTexture,de=ye&&ye.isDepthTexture?ye.type:null,we=g(P.stencilBuffer,de),_e=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Le(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(P),we,P.width,P.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(P),we,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,we,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,O)}else{let ye=P.textures;for(let de=0;de<ye.length;de++){let we=ye[de],_e=r.convert(we.format,we.colorSpace),ce=r.convert(we.type),he=S(we.internalFormat,_e,ce,we.normalized,we.colorSpace);Le(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(P),he,P.width,P.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(P),he,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,he,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(O,P,Q){let ye=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(P.depthTexture);de.__renderTarget=P;let we=ye?P.depthTexture.image[0]:P.depthTexture.image;(!de.__webglTexture||we.width!==P.width||we.height!==P.height)&&(we.width=P.width,we.height=P.height,P.depthTexture.needsUpdate=!0),ye?Me(P.depthTexture,0):pe(P.depthTexture,0);let _e=de.__webglTexture,ce=zt(P),he=ye?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,Re=P.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===Hi)Le(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,_e,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,_e,0);else if(P.depthTexture.format===Ki)Le(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,_e,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(O){let P=i.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==O.depthTexture){let ye=O.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ye){let de=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ye.removeEventListener("dispose",de)};ye.addEventListener("dispose",de),P.__depthDisposeCallback=de}P.__boundDepthTexture=ye}if(O.depthTexture&&!P.__autoAllocateDepthBuffer)if(Q)for(let ye=0;ye<6;ye++)Ue(P.__webglFramebuffer[ye],O,ye);else O.texture.mipmaps.length>0?Ue(P.__webglFramebuffer[0],O,0):Ue(P.__webglFramebuffer,O,0);else if(Q){P.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[ye]),P.__webglDepthbuffer[ye]===void 0)P.__webglDepthbuffer[ye]=n.createRenderbuffer(),ne(P.__webglDepthbuffer[ye],O,!1);else{let de=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=P.__webglDepthbuffer[ye];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,we)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),ne(P.__webglDepthbuffer,O,!1);else{let de=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,we)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(O,P,Q){let ye=i.get(O);P!==void 0&&Lt(ye.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&xt(O)}function lt(O){let P=O.texture,Q=i.get(O),ye=i.get(P);O.addEventListener("dispose",z),F(O);let de=O.textures,we=O.isWebGLCubeRenderTarget===!0,_e=de.length>1;if(_e||(ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture()),ye.__version=P.version,o.memory.textures++),we){Q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(P.mipmaps.length>0){Q.__webglFramebuffer[ce]=[];for(let he=0;he<P.mipmaps.length;he++)Q.__webglFramebuffer[ce][he]=n.createFramebuffer()}else Q.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(P.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ce=0;ce<P.mipmaps.length;ce++)Q.__webglFramebuffer[ce]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ce=0,he=de.length;ce<he;ce++){let Re=i.get(de[ce]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&Le(O)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ce=0;ce<de.length;ce++){let he=de[ce];Q.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ce]);let Re=r.convert(he.format,he.colorSpace),H=r.convert(he.type),ue=S(he.internalFormat,Re,H,he.normalized,he.colorSpace,O.isXRRenderTarget===!0),le=zt(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,ye.__webglTexture),ft(n.TEXTURE_CUBE_MAP,P);for(let ce=0;ce<6;ce++)if(P.mipmaps.length>0)for(let he=0;he<P.mipmaps.length;he++)Lt(Q.__webglFramebuffer[ce][he],O,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else Lt(Q.__webglFramebuffer[ce],O,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);R(P)?M(n.TEXTURE_CUBE_MAP):P.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let ce=0,he=de.length;ce<he;ce++){let Re=de[ce],H=i.get(Re),ue=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ue=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,H.__webglTexture),ft(ue,Re),Lt(Q.__webglFramebuffer,O,Re,n.COLOR_ATTACHMENT0+ce,ue,0),R(Re)&&M(ue)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ce=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ye.__webglTexture),ft(ce,P),P.mipmaps.length>0)for(let he=0;he<P.mipmaps.length;he++)Lt(Q.__webglFramebuffer[he],O,P,n.COLOR_ATTACHMENT0,ce,he);else Lt(Q.__webglFramebuffer,O,P,n.COLOR_ATTACHMENT0,ce,0);R(P)?M(ce):P.mipmaps.length>0&&n.texParameteri(ce,n.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&xt(O)}function Z(O){let P=O.textures;for(let Q=0,ye=P.length;Q<ye;Q++){let de=P[Q];if(R(de)&&de.mipmapsAutoUpdate===!0){let we=C(O),_e=i.get(de).__webglTexture;t.bindTexture(we,_e),M(we),t.unbindTexture()}}}let Ft=[];function pt(O){if(O.samples>0){if(Le(O)===!1){let P=O.textures,Q=O.width,ye=O.height,de=n.COLOR_BUFFER_BIT,we=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(O),ce=P.length>1;if(ce)for(let Re=0;Re<P.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Re=0;Re<P.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]);let H=i.get(P[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,Q,ye,0,0,Q,ye,de,n.NEAREST),c===!0&&(Ft.length=0,Ft.push(n.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&Ft.push(we),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Re=0;Re<P.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]);let H=i.get(P[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let P=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function zt(O){return Math.min(s.maxSamples,O.samples)}function Le(O){let P=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ct(O){let P=o.render.frame;d.get(O)!==P&&(d.set(O,P),O.update())}function Xe(O,P){let Q=O.colorSpace,ye=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==ao&&Q!==$i&&(At.getTransfer(Q)===Ut?(ye!==Kn||de!==Gn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",Q)),P}function je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=xe,this.resetTextureUnits=K,this.getTextureUnits=oe,this.setTextureUnits=j,this.setTexture2D=pe,this.setTexture2DArray=Ce,this.setTexture3D=ge,this.setTextureCube=Me,this.rebindTextures=_t,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Le,this.dispose=k}function sv(n,e){function t(i,s=$i){let r,o=At.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_l)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wh)return n.BYTE;if(i===Th)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Ch)return n.ALPHA;if(i===Rh)return n.RGB;if(i===Kn)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===yl)return n.RED;if(i===vl)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===No||i===Uo||i===Fo||i===zo)if(o===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===wl||i===Tl||i===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Cl||i===Rl||i===Il||i===Pl||i===Oo||i===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===El||i===Cl)return o===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Il)return r.COMPRESSED_R11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oo)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl||i===zl||i===Ol||i===Bl||i===kl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Zl||i===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return o===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===$l||i===Bo||i===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
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

}`,Kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new kn({vertexShader:rv,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends wi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,p=null,m=null,h=null,v=typeof XRWebGLBinding<"u",x=new Kh,_={},T=t.getContextAttributes(),R=null,M=null,C=[],S=[],g=new dt,w=null,F=null,N=new Dn;N.viewport=new Yt;let E=new Dn;E.viewport=new Yt;let z=[N,E],W=new dl,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=C[J];return pe===void 0&&(pe=new Sr,C[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=C[J];return pe===void 0&&(pe=new Sr,C[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=C[J];return pe===void 0&&(pe=new Sr,C[J]=pe),pe.getHandSpace()};function V(J){let pe=S.indexOf(J.inputSource);if(pe===-1)return;let Ce=C[pe];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,l||o),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<C.length;J++){let pe=S[J];pe!==null&&(S[J]=null,C[J].disconnect(pe))}D=null,k=null,x.reset();for(let J in _)delete _[J];if(e.setRenderTarget(R),m=null,p=null,f=null,s=null,M=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(g.width,g.height,!1),F!==null){let J=F.camera;J.fov=F.fov,J.zoom=F.zoom,J.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ge=null,Me=null;T.depth&&(Me=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=T.stencil?Ki:Hi,ge=T.stencil?ks:di);let He={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new Zn(p.textureWidth,p.textureHeight,{format:Kn,type:Gn,depthTexture:new qi(p.textureWidth,p.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Ce={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(J){for(let pe=0;pe<J.removed.length;pe++){let Ce=J.removed[pe],ge=S.indexOf(Ce);ge>=0&&(S[ge]=null,C[ge].disconnect(Ce))}for(let pe=0;pe<J.added.length;pe++){let Ce=J.added[pe],ge=S.indexOf(Ce);if(ge===-1){for(let He=0;He<C.length;He++)if(He>=S.length){S.push(Ce),ge=He;break}else if(S[He]===null){S[He]=Ce,ge=He;break}if(ge===-1)break}let Me=C[ge];Me&&Me.connect(Ce)}}function G(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pe=J.near,Ce=J.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(Ce=x.depthFar)),W.near=E.near=N.near=pe,W.far=E.far=N.far=Ce,(D!==W.near||k!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,k=W.far),W.layers.mask=J.layers.mask|6,N.layers.mask=W.layers.mask&-5,E.layers.mask=W.layers.mask&-3;let ge=J.parent,Me=W.cameras;G(W,ge);for(let He=0;He<Me.length;He++)G(Me[He],ge);W.projectionMatrix.copy(N.projectionMatrix),W.projectionMatrixInverse.copy(N.projectionMatrixInverse),F===null&&J.isPerspectiveCamera&&(F={camera:J,fov:J.fov,zoom:J.zoom}),K(J,W,ge)};function K(J,pe,Ce){Ce===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Mr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(J){return _[J]};let oe=null;function j(J,pe){if(d=pe.getViewerPose(l||o),h=pe,d!==null){let Ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ge=!1;Ce.length!==W.cameras.length&&(W.cameras.length=0,ge=!0);for(let Ze=0;Ze<Ce.length;Ze++){let ft=Ce[Ze],wt=null;if(m!==null)wt=m.getViewport(ft);else{let Dt=f.getViewSubImage(p,ft);wt=Dt.viewport,Ze===0&&(e.setRenderTargetTextures(M,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(M))}let Ke=z[Ze];Ke===void 0&&(Ke=new Dn,Ke.layers.enable(Ze),Ke.viewport=new Yt,z[Ze]=Ke),Ke.matrix.fromArray(ft.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ft.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(wt.x,wt.y,wt.width,wt.height),Ze===0&&(W.matrix.copy(Ke.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ge===!0&&W.cameras.push(Ke)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Ze=f.getDepthInformation(Ce[0]);Ze&&Ze.isValid&&Ze.texture&&x.init(Ze,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ze=0;Ze<Ce.length;Ze++){let ft=Ce[Ze].camera;if(ft){let wt=_[ft];wt||(wt=new Mo,_[ft]=wt);let Ke=f.getCameraImage(ft);wt.sourceTexture=Ke}}}}for(let Ce=0;Ce<C.length;Ce++){let ge=S[Ce],Me=C[Ce];ge!==null&&Me!==void 0&&Me.update(ge,pe,l||o)}oe&&oe(J,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),h=null}let xe=new Rf;xe.setAnimationLoop(j),this.setAnimationLoop=function(J){oe=J},this.dispose=function(){}}},av=new Ct,Bf=new it;Bf.set(-1,0,0,0,1,0,0,0,1);function lv(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,Oh(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,T,R,M){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),f(x,_)):_.isMeshPhongMaterial?(r(x,_),d(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),p(x,_),_.isMeshPhysicalMaterial&&m(x,_,M)):_.isMeshMatcapMaterial?(r(x,_),h(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),v(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?c(x,_,T,R):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let T=e.get(_),R=T.envMap,M=T.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Bf),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function c(x,_,T,R){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*T,x.scale.value=R*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,T){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function h(x,_){_.matcap&&(x.matcap.value=_.matcap)}function v(x,_){let T=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cv(n,e,t,i){let s={},r={};function o(T,R){let M=R.program;i.uniformBlockBinding(T,M,s[T.id])}function a(T,R){let M=s[T.id];M===void 0&&(h(T),M=c(T),s[T.id]=M,T.addEventListener("dispose",x));let C=R.program;i.updateUBOMapping(T,C);let S=e.render.frame;r[T.id]!==S&&(l(T),r[T.id]=S)}function c(T){let R=n.createBuffer(),M=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,M,C),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function l(T){let R=s[T.id],M=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let S=0,g=M.length;S<g;S++){let w=M[S];if(Array.isArray(w))for(let F=0,N=w.length;F<N;F++)d(w[F],S,F,C);else d(w,S,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,R,M,C){if(p(T,R,M,C)===!0){let S=T.__offset,g=T.value;if(Array.isArray(g)){let w=0;for(let F=0;F<g.length;F++){let N=g[F],E=v(N,!0);f(N,T.__data,w),w+=E.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,T.__data)}}function f(T,R,M){typeof T=="number"||typeof T=="boolean"?R[M]=T:T.isMatrix3?(R[M]=T.elements[0],R[M+1]=T.elements[1],R[M+2]=T.elements[2],R[M+3]=0,R[M+4]=T.elements[3],R[M+5]=T.elements[4],R[M+6]=T.elements[5],R[M+7]=0,R[M+8]=T.elements[6],R[M+9]=T.elements[7],R[M+10]=T.elements[8],R[M+11]=0):ArrayBuffer.isView(T)?R.set(T.subarray(0,R.length-M),M):T.toArray(R,M)}function p(T,R,M,C){let S=T.value,g=R+"_"+M;if(Array.isArray(S)){C[g]===void 0&&(C[g]=[]);let w=C[g],F=!1;for(let N=0;N<S.length;N++)m(S[N],w,N)===!0&&(F=!0);return F}return m(S,C,g)}function m(T,R,M){if(R[M]===void 0)return typeof T=="number"||typeof T=="boolean"?R[M]=T:ArrayBuffer.isView(T)?R[M]=T.slice():R[M]=T.clone(),!0;{let C=R[M];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[M]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(C.equals(T)===!1)return C.copy(T),!0}}return!1}function h(T){let R=T.uniforms,M=0,C=16;for(let g=0,w=R.length;g<w;g++){let F=Array.isArray(R[g])?R[g]:[R[g]];for(let N=0,E=F.length;N<E;N++){let z=F[N],W=Array.isArray(z.value)?z.value:[z.value],D=Array.isArray(R[g])||Array.isArray(z.value),k=M;for(let B=0,Y=W.length;B<Y;B++){let G=W[B],K=v(G,D),oe=M%C,j=oe%K.boundary,xe=oe+j;M+=j,xe!==0&&C-xe<K.storage&&(M+=C-xe),B===0&&(k=M),M+=K.storage}let V=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new V((M-k)/Float32Array.BYTES_PER_ELEMENT),z.__offset=k}}let S=M%C;return S>0&&(M+=C-S),T.__size=M,T.__cache={},this}function v(T,R){let M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=16,M.storage=48):T.isMatrix4?(M.boundary=16,M.storage=64):T.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(M.boundary=16,M.storage=T.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",T),R===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function x(T){let R=T.target;R.removeEventListener("dispose",x),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function _(){for(let T in s)n.deleteBuffer(s[T]);s={},r={}}return{bind:o,update:a,dispose:_}}var hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function uv(){return Ei===null&&(Ei=new Ds(hv,16,16,xs,fi),Ei.name="DFG_LUT",Ei.minFilter=yn,Ei.magFilter=yn,Ei.wrapS=Si,Ei.wrapT=Si,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var sc=class{constructor(e={}){let{canvas:t=$d(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Gn}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let v=m,x=new Set([bl,Ml,vl]),_=new Set([Gn,di,Er,ks,xl,_l]),T=new Uint32Array(4),R=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},C=null,S=null,g=[],w=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,E=!1,z=null,W=null,D=null,k=null;this._outputColorSpace=fn;let V=0,B=0,Y=null,G=-1,K=null,oe=new Yt,j=new Yt,xe=null,J=new $e(0),pe=0,Ce=t.width,ge=t.height,Me=1,He=null,ot=null,Ze=new Yt(0,0,Ce,ge),ft=new Yt(0,0,Ce,ge),wt=!1,Ke=new hs,Dt=new Ka,Wt=!1,Gt=!1,Lt=new Ct,ne=new X,Ue=new Yt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function lt(){return Y===null?Me:1}let Z=i;function Ft(L,q){return t.getContext(L,q)}let pt,zt,Le,ct,Xe,je,O,P,Q,ye,de,we,_e,ce,he,Re,H,ue,le,Te,fe,ve,We;try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),Z===null){let q="webgl2";if(Z=Ft(q,L),Z===null)throw Ft(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(L){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),rt("WebGLRenderer: "+L.message),L}function at(){pt=new b_(Z),pt.init(),fe=new sv(Z,pt),zt=new u_(Z,pt,e,fe),Le=new nv(Z,pt),zt.reversedDepthBuffer&&p&&Le.buffers.depth.setReversed(!0),W=Z.createFramebuffer(),D=Z.createFramebuffer(),k=Z.createFramebuffer(),ct=new T_(Z),Xe=new Vy,je=new iv(Z,pt,Le,Xe,zt,fe,ct),O=new M_(N),P=new E0(Z),ve=new c_(Z,P),Q=new S_(Z,P,ct,ve),ye=new E_(Z,Q,P,ve,ct),ue=new A_(Z,zt,je),he=new d_(Xe),de=new Gy(N,O,pt,zt,ve,he),we=new lv(N,Xe),_e=new Wy,ce=new Ky(pt),H=new l_(N,O,Le,ye,h,c),Re=new tv(N,ye,zt),We=new cv(Z,ct,zt,Le),le=new h_(Z,pt,ct),Te=new w_(Z,pt,ct),ct.programs=de.programs,N.capabilities=zt,N.extensions=pt,N.properties=Xe,N.renderLists=_e,N.shadowMap=Re,N.state=Le,N.info=ct}v!==Gn&&(F=new R_(v,t.width,t.height,a,s,r));let be=new $h(N,Z);this.xr=be,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let L=pt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=pt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(L){L!==void 0&&(Me=L,this.setSize(Ce,ge,!1))},this.getSize=function(L){return L.set(Ce,ge)},this.setSize=function(L,q,te=!0){if(be.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=L,ge=q,t.width=Math.floor(L*Me),t.height=Math.floor(q*Me),te===!0&&(t.style.width=L+"px",t.style.height=q+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(Ce*Me,ge*Me).floor()},this.setDrawingBufferSize=function(L,q,te){Ce=L,ge=q,Me=te,t.width=Math.floor(L*te),t.height=Math.floor(q*te),this.setViewport(0,0,L,q)},this.setEffects=function(L){if(v===Gn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let q=0;q<L.length;q++)if(L[q].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(oe)},this.getViewport=function(L){return L.copy(Ze)},this.setViewport=function(L,q,te,ee){L.isVector4?Ze.set(L.x,L.y,L.z,L.w):Ze.set(L,q,te,ee),Le.viewport(oe.copy(Ze).multiplyScalar(lt()).round())},this.getScissor=function(L){return L.copy(ft)},this.setScissor=function(L,q,te,ee){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,q,te,ee),Le.scissor(j.copy(ft).multiplyScalar(lt()).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(L){Le.setScissorTest(wt=L)},this.setOpaqueSort=function(L){He=L},this.setTransparentSort=function(L){ot=L},this.getClearColor=function(L){return L.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(L=!0,q=!0,te=!0){let ee=0;if(L){let $=!1;if(Y!==null){let Ae=Y.texture.format;$=x.has(Ae)}if($){let Ae=Y.texture.type,qe=_.has(Ae),Ee=H.getClearColor(),Pe=H.getClearAlpha(),Ye=Ee.r,nt=Ee.g,mt=Ee.b;qe?(T[0]=Ye,T[1]=nt,T[2]=mt,T[3]=Pe,Z.clearBufferuiv(Z.COLOR,0,T)):(R[0]=Ye,R[1]=nt,R[2]=mt,R[3]=Pe,Z.clearBufferiv(Z.COLOR,0,R))}else ee|=Z.COLOR_BUFFER_BIT}q&&(ee|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(ee|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),z=L},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),H.dispose(),_e.dispose(),ce.dispose(),je.dispose(),Xe.dispose(),O.dispose(),ye.dispose(),Q.dispose(),ve.dispose(),We.dispose(),de.dispose(),be.dispose(),be.removeEventListener("sessionstart",js),be.removeEventListener("sessionend",Tn),Hn.stop()};function De(L){L.preventDefault(),Nh("WebGLRenderer: Context Lost."),E=!0}function tt(){Nh("WebGLRenderer: Context Restored."),E=!1;let L=ct.autoReset,q=Re.enabled,te=Re.autoUpdate,ee=Re.needsUpdate,$=Re.type;at(),ct.autoReset=L,Re.enabled=q,Re.autoUpdate=te,Re.needsUpdate=ee,Re.type=$}function Ie(L){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Tt(L){let q=L.target;q.removeEventListener("dispose",Tt),Ot(q)}function Ot(L){nn(L),Xe.remove(L)}function nn(L){let q=Xe.get(L).programs;q!==void 0&&(q.forEach(function(te){de.releaseProgram(te)}),L.isShaderMaterial&&de.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,te,ee,$,Ae){q===null&&(q=xt);let qe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ee=Zr(L,q,te,ee,$);Le.setMaterial(ee,qe);let Pe=te.index,Ye=1;if(ee.wireframe===!0){if(Pe=Q.getWireframeAttribute(te),Pe===void 0)return;Ye=2}let nt=te.drawRange,mt=te.attributes.position,ke=nt.start*Ye,yt=(nt.start+nt.count)*Ye;Ae!==null&&(ke=Math.max(ke,Ae.start*Ye),yt=Math.min(yt,(Ae.start+Ae.count)*Ye)),Pe!==null?(ke=Math.max(ke,0),yt=Math.min(yt,Pe.count)):mt!=null&&(ke=Math.max(ke,0),yt=Math.min(yt,mt.count));let jt=yt-ke;if(jt<0||jt===1/0)return;ve.setup($,ee,Ee,te,Pe);let st,Pt=le;if(Pe!==null&&(st=P.get(Pe),Pt=Te,Pt.setIndex(st)),$.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*lt()),Pt.setMode(Z.LINES)):Pt.setMode(Z.TRIANGLES);else if($.isLine){let un=ee.linewidth;un===void 0&&(un=1),Le.setLineWidth(un*lt()),$.isLineSegments?Pt.setMode(Z.LINES):$.isLineLoop?Pt.setMode(Z.LINE_LOOP):Pt.setMode(Z.LINE_STRIP)}else $.isPoints?Pt.setMode(Z.POINTS):$.isSprite&&Pt.setMode(Z.TRIANGLES);if($.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let un=$._multiDrawStarts,Ge=$._multiDrawCounts,gn=$._multiDrawCount,Fe=Pe?P.get(Pe).bytesPerElement:1,ri=Xe.get(ee).currentProgram.getUniforms();for(let qt=0;qt<gn;qt++)ri.setValue(Z,"_gl_DrawID",qt),Pt.render(un[qt]/Fe,Ge[qt])}else if($.isInstancedMesh)Pt.renderInstances(ke,jt,$.count);else if(te.isInstancedBufferGeometry){let un=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ge=Math.min(te.instanceCount,un);Pt.renderInstances(ke,jt,Ge)}else Pt.render(ke,jt)};function sn(L,q,te,ee){z!==null&&L.isNodeMaterial&&z.setObject(ee,L),Wt===!0&&he.setState(L,te,!1),L.transparent===!0&&L.side===Cn&&L.forceSinglePass===!1?(L.side=bn,L.needsUpdate=!0,Pi(L,q,ee),L.side=ms,L.needsUpdate=!0,Pi(L,q,ee),L.side=Cn):Pi(L,q,ee)}this.compile=function(L,q,te=null){te===null&&(te=L),z!==null&&z.renderStart(L,q,te),S=ce.get(te),S.init(q),w.push(S),te.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),L!==te&&L.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),z!==null&&z.updateLights(S.state.lightsArray),Gt=this.localClippingEnabled,Wt=he.init(this.clippingPlanes,Gt),Wt===!0&&he.setGlobalState(this.clippingPlanes,q),z!==null&&Re.render(S.state.shadowsArray,te,q);let ee=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let qe=0;qe<Ae.length;qe++){let Ee=Ae[qe];sn(Ee,te,q,$),ee.add(Ee)}else sn(Ae,te,q,$),ee.add(Ae)}),S=w.pop(),z!==null&&z.renderEnd(),ee},this.compileAsync=function(L,q,te=null){let ee=this.compile(L,q,te);return new Promise($=>{function Ae(){if(ee.forEach(function(qe){let Pe=Xe.get(qe).currentProgram;(Pe===void 0||Pe.isReady())&&ee.delete(qe)}),ee.size===0){$(L);return}setTimeout(Ae,10)}pt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let wn=null;function vi(L){wn&&wn(L)}function js(){Hn.stop()}function Tn(){Hn.start()}let Hn=new Rf;Hn.setAnimationLoop(vi),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(L){wn=L,be.setAnimationLoop(L),L===null?Hn.stop():Hn.start()},be.addEventListener("sessionstart",js),be.addEventListener("sessionend",Tn),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;z!==null&&z.renderStart(L,q);let te=be.enabled===!0&&be.isPresenting===!0,ee=F!==null&&(Y===null||te)&&F.begin(N,Y);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(q),q=be.getCamera()),L.isScene===!0&&L.onBeforeRender(N,L,q,Y),S=ce.get(L,w.length),S.init(q),S.state.textureUnits=je.getTextureUnits(),w.push(S),Lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?Dt.setFromArrayCamera(q):Ke.setFromProjectionMatrix(Lt,ei,q.reversedDepth),Gt=this.localClippingEnabled,Wt=he.init(this.clippingPlanes,Gt),C=_e.get(L,g.length),C.init(),g.push(C),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let qe=N.xr.getDepthSensingMesh();qe!==null&&Xt(qe,q,-1/0,N.sortObjects)}Xt(L,q,0,N.sortObjects),C.finish(),z!==null&&z.updateLights(S.state.lightsArray),N.sortObjects===!0&&C.sort(He,ot),_t=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,_t&&H.addToRenderList(C,L),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&he.beginShadows();let $=S.state.shadowsArray;if(Re.render($,L,q),Wt===!0&&he.endShadows(),(ee&&F.hasRenderPass())===!1){let qe=C.opaque,Ee=C.transmissive;if(S.setupLights(),q.isArrayCamera){let Pe=q.cameras;if(Ee.length>0)for(let Ye=0,nt=Pe.length;Ye<nt;Ye++){let mt=Pe[Ye];sa(qe,Ee,L,mt)}_t&&H.render(L);for(let Ye=0,nt=Pe.length;Ye<nt;Ye++){let mt=Pe[Ye];rn(C,L,mt,mt.viewport)}}else Ee.length>0&&sa(qe,Ee,L,q),_t&&H.render(L),rn(C,L,q)}Y!==null&&B===0&&(je.updateMultisampleRenderTarget(Y),je.updateRenderTargetMipmap(Y)),ee&&F.end(N),L.isScene===!0&&L.onAfterRender(N,L,q),ve.resetDefaultState(),G=-1,K=null,w.pop(),w.length>0?(S=w[w.length-1],je.setTextureUnits(S.state.textureUnits),Wt===!0&&he.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,z!==null&&z.renderEnd()};function Xt(L,q,te,ee){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){let qe=q.isArrayCamera?Dt:Ke;if(!L.frustumCulled||L.intersectsFrustum(qe)){ee&&Ue.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Lt);let Ee=ye.update(L),Pe=L.material;Pe.visible&&C.push(L,Ee,Pe,te,Ue.z,null,q)}}else if(L.isMesh||L.isLine||L.isPoints){let qe=q.isArrayCamera?Dt:Ke;if(!L.frustumCulled||L.intersectsFrustum(qe)){let Ee=ye.update(L),Pe=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ue.copy(L.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(L.matrixWorld).applyMatrix4(Lt)),Array.isArray(Pe)){let Ye=Ee.groups;for(let nt=0,mt=Ye.length;nt<mt;nt++){let ke=Ye[nt],yt=Pe[ke.materialIndex];yt&&yt.visible&&C.push(L,Ee,yt,te,Ue.z,ke,q)}}else Pe.visible&&C.push(L,Ee,Pe,te,Ue.z,null,q)}}}let Ae=L.children;for(let qe=0,Ee=Ae.length;qe<Ee;qe++)Xt(Ae[qe],q,te,ee)}function rn(L,q,te,ee){let{opaque:$,transmissive:Ae,transparent:qe}=L;S.setupLightsView(te),Wt===!0&&he.setGlobalState(N.clippingPlanes,te),ee&&Le.viewport(oe.copy(ee)),$.length>0&&vn($,q,te),Ae.length>0&&vn(Ae,q,te),qe.length>0&&vn(qe,q,te),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function sa(L,q,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ee.id]===void 0){let ke=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ee.id]=new Zn(1,1,{generateMipmaps:!0,type:ke?fi:Gn,minFilter:Ji,samples:Math.max(4,zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let Ae=S.state.transmissionRenderTarget[ee.id],qe=ee.viewport||oe;Ae.setSize(qe.z*N.transmissionResolutionScale,qe.w*N.transmissionResolutionScale);let Ee=N.getRenderTarget(),Pe=N.getActiveCubeFace(),Ye=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(J),pe=N.getClearAlpha(),pe<1&&N.setClearColor(16777215,.5),N.clear(),_t&&H.render(te);let nt=N.toneMapping;N.toneMapping=Ai;let mt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),S.setupLightsView(ee),Wt===!0&&he.setGlobalState(N.clippingPlanes,ee),vn(L,te,ee),je.updateMultisampleRenderTarget(Ae),je.updateRenderTargetMipmap(Ae),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let yt=0,jt=q.length;yt<jt;yt++){let st=q[yt],{object:Pt,geometry:un,material:Ge,group:gn}=st;if(Ge.side===Cn&&Pt.layers.test(ee.layers)){let Fe=Ge.side;Ge.side=bn,Ge.needsUpdate=!0,Mi(Pt,te,ee,un,Ge,gn),Ge.side=Fe,Ge.needsUpdate=!0,ke=!0}}ke===!0&&(je.updateMultisampleRenderTarget(Ae),je.updateRenderTargetMipmap(Ae))}N.setRenderTarget(Ee,Pe,Ye),N.setClearColor(J,pe),mt!==void 0&&(ee.viewport=mt),N.toneMapping=nt}function vn(L,q,te){let ee=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ae=L.length;$<Ae;$++){let qe=L[$],{object:Ee,geometry:Pe,group:Ye}=qe,nt=qe.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),Ee.layers.test(te.layers)&&Mi(Ee,q,te,Pe,nt,Ye)}}function Mi(L,q,te,ee,$,Ae){z!==null&&$.isNodeMaterial&&z.setObject(L,$),L.onBeforeRender(N,q,te,ee,$,Ae),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(N,q,te,ee,L,Ae),$.transparent===!0&&$.side===Cn&&$.forceSinglePass===!1?($.side=bn,$.needsUpdate=!0,N.renderBufferDirect(te,q,ee,$,L,Ae),$.side=ms,$.needsUpdate=!0,N.renderBufferDirect(te,q,ee,$,L,Ae),$.side=Cn):N.renderBufferDirect(te,q,ee,$,L,Ae),L.onAfterRender(N,q,te,ee,$,Ae)}function Ii(L){let q=0;for(let te of L)te.texture!==null&&q++;return q}function Pi(L,q,te){q.isScene!==!0&&(q=xt);let ee=Xe.get(L),$=S.state.lights,Ae=S.state.shadowsArray,qe=$.state.version,Ee=de.getParameters(L,$.state,Ae,q,te,S.state.lightProbeGridArray),Pe=de.getProgramCacheKey(Ee),Ye=ee.programs;ee.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;let nt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ee.envMap=O.get(L.envMap||ee.environment,nt),ee.envMapRotation=ee.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,Ye===void 0&&(L.addEventListener("dispose",Tt),Ye=new Map,ee.programs=Ye,ee.programVariants=new Map);let mt=Ye.get(Pe);if(mt!==void 0){if(ee.currentProgram===mt&&ee.lightsStateVersion===qe)return Ts(L,Ee),mt}else Ee.uniforms=de.getUniforms(L),z!==null&&L.isNodeMaterial&&z.build(L,te,Ee),L.onBeforeCompile(Ee,N),mt=de.acquireProgram(Ee,Pe),Ye.set(Pe,mt),ee.uniforms=Ee.uniforms;let ke=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ke.clippingPlanes=he.uniform),Ts(L,Ee),ee.needsLights=ns(L),ee.lightsStateVersion=qe,ee.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.sunLights.value=$.state.sun,ke.sunLightShadows.value=$.state.sunShadow,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.sunShadowMatrix.value=$.state.sunShadowMatrix,ke.sunShadowCascade.value=$.state.sunShadowCascade,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.numLightProbeGrids=Ii(S.state.lightProbeGridArray),ee.currentProgram=mt,ee.uniformsList=null,mt}function Yr(L,q,te,ee,$){let Ae=Xe.get(L),qe=Ae.currentProgram.id+","+ee+","+$,Ee=Ae.programVariants.get(qe);return Ee===void 0?(Ee=Pi(L,q,te),Ae.programVariants.set(qe,Ee)):(Ae.currentProgram=Ee,Ae.uniformsList=null,Ae.outputColorSpace=ee,Ae.toneMapping=$),Ee}function ws(L){if(L.uniformsList===null){let q=L.currentProgram.getUniforms();L.uniformsList=Ir.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function Ts(L,q){let te=Xe.get(L);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function Zr(L,q,te,ee,$){q.isScene!==!0&&(q=xt),je.resetTextureUnits();let Ae=q.fog,qe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Ee=Y===null?N.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:At.workingColorSpace,Pe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ye=O.get(ee.envMap||qe,Pe),nt=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,mt=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ke=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,jt=!!te.morphAttributes.color,st=Ai;ee.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(st=N.toneMapping);let Pt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,un=Pt!==void 0?Pt.length:0,Ge=Xe.get(ee),gn=S.state.lights;if(Wt===!0&&(Gt===!0||L!==K)){let kt=L===K&&ee.id===G;he.setState(ee,L,kt)}let Fe=!1,ri=!1;ee.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==gn.state.version||$.isBatchedMesh&&Ge.batching===!1||!$.isBatchedMesh&&Ge.batching===!0||$.isBatchedMesh&&Ge.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ge.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ge.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ge.instancingMorph===!1&&$.morphTexture!==null||Ge.envMap!==Ye||ee.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==he.numPlanes||Ge.numIntersection!==he.numIntersection)||Ge.vertexAlphas!==nt||Ge.vertexTangents!==mt||Ge.morphTargets!==ke||Ge.morphNormals!==yt||Ge.morphColors!==jt||Ge.morphTargetsCount!==un||Ge.numLightProbeGrids!==Ii(S.state.lightProbeGridArray)?Fe=!0:(Ge.outputColorSpace!==Ee||Ge.toneMapping!==st)&&(ri=!0):(Fe=!0,Ge.__version=ee.version);let qt=Ge.currentProgram;(Fe===!0||ri===!0)&&(qt=ri===!0?Yr(ee,q,$,Ee,st):Pi(ee,q,$),z&&ee.isNodeMaterial&&z.onUpdateProgram(ee,qt,Ge));let Qt=!1,Pn=!1,Di=!1,ut=qt.getUniforms(),ln=Ge.uniforms;if(Le.useProgram(qt.program)&&(Qt=!0,Pn=!0,Di=!0),ee.id!==G&&(G=ee.id,Pn=!0),Qt||K!==L){Le.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ut.setValue(Z,"projectionMatrix",L.projectionMatrix),ut.setValue(Z,"viewMatrix",L.matrixWorldInverse);let on=ut.map.cameraPosition;on!==void 0&&on.setValue(Z,ne.setFromMatrixPosition(L.matrixWorld)),zt.logarithmicDepthBuffer&&ut.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ut.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),K!==L&&(K=L,Pn=!0,Di=!0)}if(Ge.needsLights&&(gn.state.sunShadowMap.length>0&&ut.setValue(Z,"sunShadowMap",gn.state.sunShadowMap,je),gn.state.directionalShadowMap.length>0&&ut.setValue(Z,"directionalShadowMap",gn.state.directionalShadowMap,je),gn.state.spotShadowMap.length>0&&ut.setValue(Z,"spotShadowMap",gn.state.spotShadowMap,je),gn.state.pointShadowMap.length>0&&ut.setValue(Z,"pointShadowMap",gn.state.pointShadowMap,je)),$.isSkinnedMesh){ut.setOptional(Z,$,"bindMatrix"),ut.setOptional(Z,$,"bindMatrixInverse");let kt=$.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ut.setValue(Z,"boneTexture",kt.boneTexture,je))}$.isBatchedMesh&&(ut.setOptional(Z,$,"batchingTexture"),ut.setValue(Z,"batchingTexture",$._matricesTexture,je),ut.setOptional(Z,$,"batchingIdTexture"),ut.setValue(Z,"batchingIdTexture",$._indirectTexture,je),ut.setOptional(Z,$,"batchingColorTexture"),$._colorsTexture!==null&&ut.setValue(Z,"batchingColorTexture",$._colorsTexture,je));let Bt=te.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&ue.update($,te,qt),(Pn||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,ut.setValue(Z,"receiveShadow",$.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(ln.envMapIntensity.value=q.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=uv()),Pn){if(ut.setValue(Z,"toneMappingExposure",N.toneMappingExposure),Ge.needsLights&&ra(ln,Di),Ae&&ee.fog===!0&&we.refreshFogUniforms(ln,Ae),we.refreshMaterialUniforms(ln,ee,Me,ge,S.state.transmissionRenderTarget[L.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let kt=M,on=0;for(let jn of S.state.lightProbeGridArray)jn.texture!==null&&(kt.textures[on]=jn.texture,kt.min[on]=jn.boundingBox.min,kt.max[on]=jn.boundingBox.max,kt.resolution[on]=jn.resolution,on++);for(let jn in kt)kt[jn].length=on;ln.probesSH.value=kt.textures,ln.probesMin.value=kt.min,ln.probesMax.value=kt.max,ln.probesResolution.value=kt.resolution}Ir.upload(Z,ws(Ge),ln,je)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ir.upload(Z,ws(Ge),ln,je),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ut.setValue(Z,"center",$.center),ut.setValue(Z,"modelViewMatrix",$.modelViewMatrix),ut.setValue(Z,"normalMatrix",$.normalMatrix),ut.setValue(Z,"modelMatrix",$.matrixWorld),ee.uniformsGroups!==void 0){let kt=ee.uniformsGroups;for(let on=0,jn=kt.length;on<jn;on++){let Wn=kt[on];We.update(Wn,qt),We.bind(Wn,qt)}}return qt}function ra(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.sunLights.needsUpdate=q,L.sunLightShadows.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function ns(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,q,te){let ee=Xe.get(L);ee.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Xe.get(L.texture).__webglTexture=q,Xe.get(L.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:te,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,q){let te=Xe.get(L);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,te=0){Y=L,V=q,B=te;let ee=null,$=!1,Ae=!1;if(L){let Ee=Xe.get(L);if(Ee.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(Z.FRAMEBUFFER,Ee.__webglFramebuffer),oe.copy(L.viewport),j.copy(L.scissor),xe=L.scissorTest,Le.viewport(oe),Le.scissor(j),Le.setScissorTest(xe),G=-1;return}else if(Ee.__webglFramebuffer===void 0)je.setupRenderTarget(L);else if(Ee.__hasExternalTextures)je.rebindTextures(L,Xe.get(L.texture).__webglTexture,Xe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let nt=L.depthTexture;if(Ee.__boundDepthTexture!==nt){if(nt!==null&&Xe.has(nt)&&(L.width!==nt.image.width||L.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(L)}}let Pe=L.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ae=!0);let Ye=Xe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?ee=Ye[q][te]:ee=Ye[q],$=!0):L.samples>0&&je.useMultisampledRTT(L)===!1?ee=Xe.get(L).__webglMultisampledFramebuffer:Array.isArray(Ye)?ee=Ye[te]:ee=Ye,oe.copy(L.viewport),j.copy(L.scissor),xe=L.scissorTest}else oe.copy(Ze).multiplyScalar(Me).floor(),j.copy(ft).multiplyScalar(Me).floor(),xe=wt;if(te!==0&&(ee=W),Le.bindFramebuffer(Z.FRAMEBUFFER,ee)&&Le.drawBuffers(L,ee),Le.viewport(oe),Le.scissor(j),Le.setScissorTest(xe),$){let Ee=Xe.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee.__webglTexture,te)}else if(Ae){let Ee=q;for(let Pe=0;Pe<L.textures.length;Pe++){let Ye=Xe.get(L.textures[Pe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Pe,Ye.__webglTexture,te,Ee)}}else if(L!==null&&te!==0){let Ee=Xe.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ee.__webglTexture,te)}G=-1};function Li(L){let q=Xe.get(L);return(q.__readFormat!==L.format||q.__readType!==L.type)&&(q.__readFormat=L.format,q.__readType=L.type,q.__formatReadable=zt.textureFormatReadable(L.format),q.__typeReadable=zt.textureTypeReadable(L.type)),q}this.readRenderTargetPixels=function(L,q,te,ee,$,Ae,qe,Ee=0){if(!(L&&L.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(Pe=Pe[qe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){Le.bindFramebuffer(Z.FRAMEBUFFER,Pe);try{let Ye=L.textures[Ee],nt=Ye.format,mt=Ye.type;L.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ee);let ke=Li(Ye);if(ke.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-ee&&te>=0&&te<=L.height-$&&Z.readPixels(q,te,ee,$,fe.convert(nt),fe.convert(mt),Ae)}finally{let Ye=Y!==null?Xe.get(Y).__webglFramebuffer:null;Le.bindFramebuffer(Z.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(L,q,te,ee,$,Ae,qe,Ee=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(Pe=Pe[qe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(q>=0&&q<=L.width-ee&&te>=0&&te<=L.height-$){Le.bindFramebuffer(Z.FRAMEBUFFER,Pe);let Ye=L.textures[Ee],nt=Ye.format,mt=Ye.type;L.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ee);let ke=Li(Ye);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,yt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ae.byteLength,Z.STREAM_READ),Z.readPixels(q,te,ee,$,fe.convert(nt),fe.convert(mt),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let jt=Y!==null?Xe.get(Y).__webglFramebuffer:null;Le.bindFramebuffer(Z.FRAMEBUFFER,jt);let st=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Qd(Z,st,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,yt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ae),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(yt),Z.deleteSync(st),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,q=null,te=0){let ee=Math.pow(2,-te),$=Math.floor(L.image.width*ee),Ae=Math.floor(L.image.height*ee),qe=q!==null?q.x:0,Ee=q!==null?q.y:0;je.setTexture2D(L,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,te,0,0,qe,Ee,$,Ae),Le.unbindTexture()},this.copyTextureToTexture=function(L,q,te=null,ee=null,$=0,Ae=0){let qe,Ee,Pe,Ye,nt,mt,ke,yt,jt,st=L.isCompressedTexture?L.mipmaps[Ae]:L.image;if(te!==null)qe=te.max.x-te.min.x,Ee=te.max.y-te.min.y,Pe=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,nt=te.min.y,mt=te.isBox3?te.min.z:0;else{let ut=Math.pow(2,-$);qe=Math.floor(st.width*ut),Ee=Math.floor(st.height*ut),L.isDataArrayTexture?Pe=st.depth:L.isData3DTexture?Pe=Math.floor(st.depth*ut):Pe=1,Ye=0,nt=0,mt=0}ee!==null?(ke=ee.x,yt=ee.y,jt=ee.z):(ke=0,yt=0,jt=0);let Pt=fe.convert(q.format),un=fe.convert(q.type),Ge;q.isData3DTexture?(je.setTexture3D(q,0),Ge=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(je.setTexture2DArray(q,0),Ge=Z.TEXTURE_2D_ARRAY):(je.setTexture2D(q,0),Ge=Z.TEXTURE_2D),Le.activeTexture(Z.TEXTURE0),Le.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),Le.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Le.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);let gn=Le.getParameter(Z.UNPACK_ROW_LENGTH),Fe=Le.getParameter(Z.UNPACK_IMAGE_HEIGHT),ri=Le.getParameter(Z.UNPACK_SKIP_PIXELS),qt=Le.getParameter(Z.UNPACK_SKIP_ROWS),Qt=Le.getParameter(Z.UNPACK_SKIP_IMAGES);Le.pixelStorei(Z.UNPACK_ROW_LENGTH,st.width),Le.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,st.height),Le.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ye),Le.pixelStorei(Z.UNPACK_SKIP_ROWS,nt),Le.pixelStorei(Z.UNPACK_SKIP_IMAGES,mt);let Pn=L.isDataArrayTexture||L.isData3DTexture,Di=q.isDataArrayTexture||q.isData3DTexture;if(L.isDepthTexture){let ut=Xe.get(L),ln=Xe.get(q),Bt=Xe.get(ut.__renderTarget),kt=Xe.get(ln.__renderTarget);Le.bindFramebuffer(Z.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Le.bindFramebuffer(Z.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let on=0;on<Pe;on++)Pn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Xe.get(L).__webglTexture,$,mt+on),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Xe.get(q).__webglTexture,Ae,jt+on)),Z.blitFramebuffer(Ye,nt,Ye+qe,nt+Ee,ke,yt,ke+qe,yt+Ee,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Le.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if($!==0||L.isRenderTargetTexture||Xe.has(L)){let ut=Xe.get(L),ln=Xe.get(q);Le.bindFramebuffer(Z.READ_FRAMEBUFFER,D),Le.bindFramebuffer(Z.DRAW_FRAMEBUFFER,k);for(let Bt=0;Bt<Pe;Bt++)Pn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ut.__webglTexture,$,mt+Bt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ut.__webglTexture,$),Di?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ln.__webglTexture,Ae,jt+Bt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ln.__webglTexture,Ae),$!==0?Z.blitFramebuffer(Ye,nt,Ye+qe,nt+Ee,ke,yt,ke+qe,yt+Ee,Z.COLOR_BUFFER_BIT,Z.NEAREST):Di?Z.copyTexSubImage3D(Ge,Ae,ke,yt,jt+Bt,Ye,nt,qe,Ee):Z.copyTexSubImage2D(Ge,Ae,ke,yt,Ye,nt,qe,Ee);Le.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Di?L.isDataTexture||L.isData3DTexture?Z.texSubImage3D(Ge,Ae,ke,yt,jt,qe,Ee,Pe,Pt,un,st.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ge,Ae,ke,yt,jt,qe,Ee,Pe,Pt,st.data):Z.texSubImage3D(Ge,Ae,ke,yt,jt,qe,Ee,Pe,Pt,un,st):L.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ae,ke,yt,qe,Ee,Pt,un,st.data):L.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ae,ke,yt,st.width,st.height,Pt,st.data):Z.texSubImage2D(Z.TEXTURE_2D,Ae,ke,yt,qe,Ee,Pt,un,st);Le.pixelStorei(Z.UNPACK_ROW_LENGTH,gn),Le.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Fe),Le.pixelStorei(Z.UNPACK_SKIP_PIXELS,ri),Le.pixelStorei(Z.UNPACK_SKIP_ROWS,qt),Le.pixelStorei(Z.UNPACK_SKIP_IMAGES,Qt),Ae===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Z.generateMipmap(Ge),Le.unbindTexture()},this.initRenderTarget=function(L){Xe.get(L).__webglFramebuffer===void 0&&je.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?je.setTextureCube(L,0):L.isData3DTexture?je.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?je.setTexture2DArray(L,0):je.setTexture2D(L,0),Le.unbindTexture()},this.resetState=function(){V=0,B=0,Y=null,Le.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var $n=[-57,-19,19,57],pi=[-38,0,38],Wo={x:11.7,z:3.2},Lr={x:12.05,z:-5.45},ji={x:2,z:38},In={x:38,z:-38},Vs={door:{x:47.6,z:-33},inside:{x:47.6,z:-38.4,angle:0},out:{x:47.6,z:-29.6,angle:0}},kf={x:42.3,z:-41.25},Mt=(n,e,t)=>Math.max(e,Math.min(t,n)),ae=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function zn(n,e,t,i){return(Math.abs(n)+t<65||n>60&&n+t<84&&Math.abs(e)+t<16)&&Math.abs(e)+t<65&&i.every(s=>{if(s.off)return!0;let r=n-Mt(n,s.x-s.w/2,s.x+s.w/2),o=e-Mt(e,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=t*t})}function Xo(n,e,t,i,s){let r=n.x,o=n.z;return zn(e,n.z,i,s)&&(n.x=e),zn(n.x,t,i,s)&&(n.z=t),n.x!==r||n.z!==o}function Vn(n,e,t){let i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+Mt(i,-t,t)}function Gf(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function ac(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Zt;c.morphTargetsRelative=a;let l=0;for(let d=0;d<n.length;++d){let f=n[d],p=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[h].length!==n[0].morphAttributes[h].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+h+'" morph attribute.'),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,d),l+=h}}if(t){let d=0,f=[];for(let p=0;p<n.length;++p){let m=n[p].index;for(let h=0;h<m.count;++h)f.push(m.getX(h)+d);d+=n[p].attributes.position.count}c.setIndex(f)}for(let d in r){let f=Vf(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let p=0;p<f;++p){let m=[];for(let v=0;v<o[d].length;++v)m.push(o[d][v][p]);let h=Vf(m);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(h)}}}return c}function Vf(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let d=n[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),a=new tn(o,t,i),c=0;for(let l=0;l<n.length;++l){let d=n[l];if(d.isInterleavedBufferAttribute){let f=c/t;for(let p=0,m=d.count;p<m;p++)for(let h=0;h<t;h++){let v=d.getComponent(p,h);a.setComponent(p+f,h,v)}}else o.set(d.array,c);c+=d.count*t}return s!==void 0&&(a.gpuType=s),a}var qo=new X;function ni(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;qo.copy(e),qo[i]=0,qo.normalize();let l=.5*o/(o+a),d=1-qo.angleTo(n)/c;return Math.sign(qo[t])===1?d*l:a/(o+a)+l+l*(1-d)}var lc=class n extends hn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new X,l=new X,d=new X(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,h=f.length/6,v=new X,x=.5/o;for(let _=0,T=0;_<f.length;_+=3,T+=2)switch(c.fromArray(f,_),l.copy(c),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),f[_+0]=d.x*Math.sign(c.x)+l.x*r,f[_+1]=d.y*Math.sign(c.y)+l.y*r,f[_+2]=d.z*Math.sign(c.z)+l.z*r,p[_+0]=l.x,p[_+1]=l.y,p[_+2]=l.z,Math.floor(_/h)){case 0:v.set(1,0,0),m[T+0]=ni(v,l,"z","y",r,i),m[T+1]=1-ni(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),m[T+0]=1-ni(v,l,"z","y",r,i),m[T+1]=1-ni(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),m[T+0]=1-ni(v,l,"x","z",r,e),m[T+1]=ni(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),m[T+0]=1-ni(v,l,"x","z",r,e),m[T+1]=1-ni(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),m[T+0]=1-ni(v,l,"x","y",r,e),m[T+1]=1-ni(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),m[T+0]=ni(v,l,"x","y",r,e),m[T+1]=1-ni(v,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var dv={tee:"Camiseta",tank:"Regata",dress:"Camisa social",none:"Sem camisa"},fv={pants:"Cal\xE7a",shorts:"Bermuda"},pv={sneakers:"T\xEAnis",flipflops:"Chinelo",dress:"Sapato social"},jh={bald:"Careca",buzz:"Raspado",short:"Curto",afro:"Black power",long:"Comprido",mohawk:"Moicano",cap:"Bon\xE9"},Qh={none:"Sem barba",stubble:"Por fazer",goatee:"Cavanhaque",mustache:"Bigode",full:"Barba cheia",chevron:"Bigode e cavanhaque"},Dr={gold:14266683,silver:13225169,diamond:14677503},eu=[15921126,2040614,2772879,11680307,3107660,14725949,8014476,14711354,7307148,2592670],tu=[1906452,3876376,6964005,13081170,9318175,10132118,2772896],nu=[15052936,12684900,11765348,10119749,8475704,6175527];function Hs(){return{shirt:"tee",shirtColor:2386265,legs:"pants",legColor:3553348,shoes:"sneakers",shoeColor:13812648,hair:"cap",hairColor:1906452,beard:"none",skin:12220240,glasses:!1,chain:"none",earrings:"none",watch:"none",ring:"none",height:1,width:1,capColor:1522486}}function Hf(n=12157017){return{...Hs(),shirt:"dress",shirtColor:3558501,legColor:2503491,shoes:"dress",shoeColor:1447446,hair:"cap",capColor:1845820,skin:n,beard:"none"}}function Yo(n){let e=n*2654435761>>>0||1,t=()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296),i=r=>r[Math.floor(t()*r.length)],s=r=>{let o=t()*r.reduce((a,[,c])=>a+c,0);for(let[a,c]of r)if(o-=c,o<=0)return a;return r[0][0]};return{feminine:n%3===0,shirt:s([["tee",.46],["tank",.2],["dress",.2],["none",.08]]),shirtColor:i(eu),legs:s([["pants",.62],["shorts",.38]]),legColor:i([3553348,2373199,5917242,2894892,8221798,4020851,11049860]),shoes:s([["sneakers",.5],["flipflops",.28],["dress",.22]]),shoeColor:i([15789282,2236962,9056042,2969482,5915442]),hair:s([["short",.3],["buzz",.18],["bald",.1],["afro",.12],["long",.14],["mohawk",.05],["cap",.11]]),hairColor:i(tu.slice(0,6)),beard:n%3===0?"none":s([["none",.45],["stubble",.18],["goatee",.1],["mustache",.1],["full",.12],["chevron",.05]]),skin:i(nu),glasses:t()<.14,chain:s([["none",.82],["silver",.11],["gold",.07]]),earrings:s([["none",.88],["silver",.06],["gold",.05],["diamond",.01]]),watch:s([["none",.75],["silver",.17],["gold",.08]]),ring:s([["none",.85],["silver",.1],["gold",.05]]),height:.92+t()*.16,width:.9+t()*.25,capColor:i([1522486,9056042,2236962,2772879,14725949])}}function Wf(n){let e=Hs();if(!n||typeof n!="object")return e;let t=(r,o)=>Object.hasOwn(o,n[r])?n[r]:e[r],i=r=>Number.isInteger(n[r])&&n[r]>=0&&n[r]<=16777215?n[r]:e[r],s=(r,o)=>o.includes(n[r])?n[r]:"none";return{shirt:t("shirt",dv),shirtColor:i("shirtColor"),legs:t("legs",fv),legColor:i("legColor"),shoes:t("shoes",pv),shoeColor:i("shoeColor"),hair:t("hair",jh),hairColor:i("hairColor"),beard:t("beard",Qh),skin:i("skin"),glasses:n.glasses===!0,chain:s("chain",["gold","silver"]),earrings:s("earrings",["gold","silver","diamond"]),watch:s("watch",["gold","silver"]),ring:s("ring",["gold","silver"]),height:1,width:1,capColor:i("capColor")}}var mv=new hn,gv=new lc(1,1,1,2,.29),xv=new us(1,10,7),_v=new Fn(1,1,1,12),iu=new Map,yv=new $t({vertexColors:!0,roughness:.82}),hc=new $t({vertexColors:!0,roughness:.36,metalness:.18});function mi(n,e,t=yv){if(!e.length)return;let i=e.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,c=new Float32Array(a*3),l=r.material.color;for(let d=0;d<c.length;d+=3)c[d]=l.r,c[d+1]=l.g,c[d+2]=l.b;return o.setAttribute("color",new tn(c,3)),o});n.remove(...e);let s=new It(ac(i),t);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var Qi=n=>n.children.filter(e=>e instanceof It);function bt(n,e,t,i,s,r,o,a,c,l=!1){let d=t+":"+l;iu.has(d)||iu.set(d,new $t({color:t,roughness:l?.33:.87,metalness:l?.2:0}));let f=new It({box:mv,cloth:gv,sphere:xv,cylinder:_v}[e],iu.get(d));return f.scale.set(o,a,c),f.position.set(i,s,r),f.castShadow=!0,f.receiveShadow=!0,n.add(f),f}var vv=new Us(1,16),Mv=new Jt({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function uc(n,e,t){let i=new It(vv,Mv);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(e,t,1),n.add(i),i}var bv=new wo(1,.09,6,18),Sv=new $t({vertexColors:!0,roughness:.22,metalness:.9});var Nr=(n,e)=>{let t=Math.max(0,Math.min(255,(n>>16&255)*e)),i=Math.max(0,Math.min(255,(n>>8&255)*e)),s=Math.max(0,Math.min(255,(n&255)*e));return t<<16|i<<8|s};function ys(n,e){let t={...Hs(),...e},{skin:i}=t,s=new Nt;s.rotation.order="YXZ",s.scale.set(t.width,t.height,t.width);let r=uc(s,.41,.38),o=new Nt;s.add(o);let a=(M,C,S,g,w,F,N,E,z=!1)=>bt(o,M,C,S,g,w,F,N,E,z),c=t.shirt==="none",l=c?i:t.shirtColor;if(a("cloth",t.legColor,0,.94,0,.44,.25,.29),a("sphere",l,0,1.24,0,.275,.29,.174),c&&t.feminine&&a("sphere",t.shirtColor,0,1.34,.014,.277,.112,.172),t.shirt==="tank"){a("sphere",i,0,1.47,0,.105,.064,.115);for(let M of[-1,1])a("sphere",l,M*.174,1.435,0,.103,.066,.137)}t.shirt==="dress"&&(a("cloth",Nr(l,1.25),0,1.47,.06,.3,.06,.2),a("cloth",Nr(l,1.18),0,1.25,.158,.05,.4,.012)),a("cloth",c?3877408:4864812,0,1.05,.006,.473,.049,.312),a("cloth",12891226,-.128,1.05,.16,.06,.05,.01),a("cylinder",i,0,1.5,0,.09,.13,.09),a("sphere",i,0,1.67,.015,.168,.197,.157),a("sphere",i,0,1.655,.165,.033,.034,.034),a("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let M of[-1,1])a("sphere",i,M*.155,1.66,.023,.032,.052,.025),a("cloth",2894120,M*.061,1.711,.152,.043,.012,.012),a("cloth",10985105,M*.061,1.692,.156,.032,.012,.012),a("cloth",3024931,M*.06,1.693,.163,.016,.012,.009);let d=t.hairColor;switch(t.hair){case"buzz":a("sphere",d,0,1.735,-.02,.172,.105,.158);break;case"short":a("sphere",d,0,1.77,-.031,.162,.112,.141);break;case"afro":a("sphere",d,0,1.8,-.035,.235,.19,.225);break;case"long":a("sphere",d,0,1.765,-.03,.175,.12,.16),a("cloth",d,0,1.6,-.115,.32,.34,.1);break;case"mohawk":a("sphere",Nr(i,.8),0,1.735,-.02,.171,.1,.157),a("cloth",d,0,1.83,-.02,.05,.11,.3);break;case"cap":a("sphere",t.capColor,0,1.79,.012,.181,.132,.164),a("cloth",Nr(t.capColor,1.2),0,1.77,.159,.27,.033,.17);break;default:break}let f=t.beard;if(f==="stubble"&&a("cloth",Nr(i,.68),0,1.585,.09,.3,.1,.13),f==="full"&&a("cloth",d,0,1.585,.085,.33,.13,.16),(f==="goatee"||f==="chevron")&&a("cloth",d,0,1.555,.15,.07,.075,.04),(f==="mustache"||f==="chevron"||f==="full")&&a("cloth",d,0,1.618,.164,.1,.022,.02),t.glasses){a("cloth",1118481,0,1.703,.163,.25,.05,.02);for(let M of[-1,1])a("cloth",1118481,M*.155,1.705,.08,.012,.018,.16)}if(t.earrings!=="none")for(let M of[-1,1])a("sphere",Dr[t.earrings],M*.162,1.625,.03,.016,.016,.016,!0);if(t.chain!=="none"){let M=a("box",Dr[t.chain],0,1.43,.06,.15,.15,.15,!0);M.geometry=bv,M.rotation.x=Math.PI/2-.42,a("box",Dr[t.chain],0,1.32,.165,.04,.05,.015,!0)}let p=[],m=[],h=[],v=[];for(let M of[-1,1]){let C=new Nt;C.position.set(M*.31,1.42,0),o.add(C);let S=t.shirt==="tee"||t.shirt==="dress";bt(C,"cloth",S?l:i,0,-.105,0,S?.173:.15,.226,S?.187:.16);let g=new Nt;g.position.y=-.23,C.add(g),bt(g,"cloth",t.shirt==="dress"?l:i,0,-.101,0,.132,.22,.119),bt(g,"sphere",i,0,-.227,.012,.082,.084,.077),M===1&&t.watch!=="none"&&(bt(g,"cloth",2762018,0,-.17,0,.14,.04,.128),bt(g,"box",Dr[t.watch],0,-.17,.065,.05,.045,.012,!0)),M===-1&&t.ring!=="none"&&bt(g,"box",Dr[t.ring],.03,-.27,.05,.022,.022,.022,!0),h.push(g),p.push(C);let w=new Nt;w.position.set(M*.128,.94,0),o.add(w),bt(w,"cloth",t.legColor,0,-.205,0,.21,.427,.228);let F=new Nt;F.position.y=-.412,w.add(F);let N=t.legs==="shorts";if(bt(F,"cloth",N?i:t.legColor,0,-.18,0,N?.15:.182,.38,N?.16:.198),t.shoes==="flipflops"){bt(F,"cloth",i,0,-.405,.06,.12,.08,.24);for(let E of[-1,1])bt(F,"cloth",t.shoeColor,E*.033,-.366,.09,.023,.019,.1).rotation.y=-E*.55;bt(F,"cloth",t.shoeColor,0,-.455,.059,.15,.025,.29)}else{let E=t.shoes==="dress"?1906194:t.shoeColor;bt(F,"cloth",E,0,-.386,.062,.201,.143,.304),bt(F,"cloth",t.shoes==="dress"?1183243:Nr(E,.55),0,-.445,.059,.202,.037,.313)}v.push(F),m.push(w)}let x=new Nt;x.position.set(0,-.227,.012),bt(x,"box",2635321,0,.012,-.002,.066,.078,.12,!0),bt(x,"box",2635321,0,-.105,.054,.074,.25,.079,!0),bt(x,"box",10263691,0,-.189,.095,.031,.028,.018);let _=new Vt;_.position.set(0,-.235,.053),x.add(_),h[0].add(x);let T=new Nt;T.position.set(0,-.227,.03),bt(T,"box",2828840,0,0,.05,.08,.12,.06,!0),bt(T,"box",2303786,0,-.2,.07,.07,.5,.11,!0),bt(T,"box",1842719,0,-.62,.08,.035,.42,.035,!0),bt(T,"box",5915954,0,.22,.06,.07,.32,.12),bt(T,"box",2303786,0,-.18,-.02,.05,.16,.12,!0);let R=new Vt;R.position.set(0,-.84,.08),T.add(R),h[0].add(T);for(let M of[o,...p,...h,...m,...v,x,T]){let C=Qi(M);mi(M,C.filter(S=>S.material.metalness===0)),mi(M,C.filter(S=>S.material.metalness>0),Sv)}return x.visible=!1,T.visible=!1,n.add(s),{root:s,body:o,arms:p,legs:m,forearms:h,shins:v,pistol:x,rifle:T,muzzle:_,rifleMuzzle:R,shadow:r,stride:0,weapon:"pistol",look:t}}function Xs(n,e,t,i,s,r=0,o=0,a=!1){n.stride+=e*(4.6+t*1.65);let c=Math.sin(n.stride)*Math.min(.78,t*.15);n.body.position.set(0,Math.abs(c)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(c,0,0),n.legs[1].rotation.set(-c,0,0),n.shins[0].rotation.set(Math.max(0,c)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-c)*.51,0,0);for(let d of n.forearms)d.rotation.set(0,0,0);let l=s&&n.weapon==="rifle";if(n.arms[0].rotation.set(i?-Math.PI/2+o:-c*.76,0,0),n.arms[1].rotation.set(i?l?-Math.PI/2+o+.12:-1.16:c*.76,0,i&&l?.42:0),i&&l&&n.forearms[1].rotation.set(-.35,0,0),n.arms[0].rotation.z=a?-.25:0,(a||!(i&&l))&&(n.arms[1].rotation.z=a?.25:0),a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let d=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-d*1.11,n.forearms[0].rotation.x=-.62*(1-d),n.body.rotation.y=-d*.37}else n.body.rotation.y=0;n.pistol.visible=s&&n.weapon!=="rifle",n.rifle&&(n.rifle.visible=s&&n.weapon==="rifle")}var Xf=new X(0,-1,0),su=new X,Ws=new X,ru=new X,ou=new X,cc=new X,Yf=new an;function qf(n,e,t,i,s,r){Ws.subVectors(t,n.position);let o=Math.min(i+s-.001,Math.max(.015,Ws.length()));Ws.normalize();let a=(i*i-s*s+o*o)/(2*o);ru.set(r[0],r[1],r[2]).addScaledVector(Ws,-ru.dot(Ws)).normalize(),su.copy(n.position).addScaledVector(Ws,a).addScaledVector(ru,Math.sqrt(Math.max(0,i*i-a*a))),cc.subVectors(su,n.position).normalize(),n.quaternion.setFromUnitVectors(Xf,cc),cc.copy(n.position).addScaledVector(Ws,o).sub(su).normalize(),e.quaternion.setFromUnitVectors(Xf,cc.applyQuaternion(Yf.copy(n.quaternion).invert()))}function au(n,e){e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(ou.set(0,.1,-.31))),n.root.quaternion.copy(e.body.getWorldQuaternion(Yf)),n.shadow.visible=!1,n.pistol.visible=!1;let t=.63;n.body.rotation.set(t,0,0),n.body.position.set(0,.94*(1-Math.cos(t)),-.94*Math.sin(t)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(e.handlebar.localToWorld(ou.set(s*.342,.44,-.09)));qf(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(e.body.localToWorld(ou.set(s*.245,.39,-.22)));qf(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function Zo(n,e,t){let i=Math.min(1,e/.22),s=Math.min(1,Math.max(0,(e-.12)/.5)),r=s*s*(3-2*s),o=e>.62?Math.sin(Math.min(1,(e-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(e-.62)/.25)):0,a=t*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(t*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let c=Math.sin(Math.min(1,e/.5)*Math.PI);return n.arms[0].rotation.set(-t*(.6*c+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-t*(.9*c+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*c-.2,0,0),n.forearms[1].rotation.set(-.3*c-.3,0,0),n.pistol.visible=!1,a}var dc={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},Ko=n=>dc[n]??dc[(n??"car").split(":")[0]]??dc.car,vs=n=>n.shape??n.kind;function Zf(n,e){dc[n]=e}function ii(n,e){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0),n.repair?.(),Object.assign(n,e,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function gi(n,e,t,i,s="car"){if(n>64&&!s.startsWith("bike"))return!1;let r=Math.sin(t),o=Math.cos(t),{offsets:a,radius:c}=Ko(s);return a.every(l=>zn(n+r*l,e+o*l,c,i))}function es(n,e,t,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=e-n.x,a=t-n.z,{width:c,length:l}=Ko(vs(n)),d=Math.abs(o*r-a*s)-c,f=Math.abs(o*s+a*r)-l;return d<=0&&f<=0||Math.hypot(Math.max(0,d),Math.max(0,f))<i}function Ms(n,e=0){let{width:t,length:i}=Ko(n),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));return{width:t*s+i*r,length:i*s+t*r}}function cu(n,e,t,i=n){return gi(n.x,n.z,n.angle,e,vs(n))&&!Jo(i,n.x,n.z,n.angle,t)}function Jo(n,e,t,i,s){let r=Math.sin(i),o=Math.cos(i),a=Ko(vs(n));for(let c of s){if(c===n||Math.abs(c.x-e)>4.5||Math.abs(c.z-t)>4.5)continue;let l=Math.sin(c.angle),d=Math.cos(c.angle),f=Ko(vs(c)),p=a.radius+f.radius,m=p,h=0,v=0;for(let x of a.offsets)for(let _ of f.offsets){let T=e+r*x-c.x-l*_,R=t+o*x-c.z-d*_,M=Math.hypot(T,R);if(M>=m)continue;m=M;let C=Math.hypot(e-c.x,t-c.z);h=M>.02?T/M:C>.02?(e-c.x)/C:r,v=M>.02?R/M:C>.02?(t-c.z)/C:o}if(m<p)return{other:c,nx:h,nz:v,mass:a.mass,otherMass:f.mass}}return null}function lu(n,e){e<2.4||(n.integrity=Math.max(0,n.integrity-(e-2.4)*1.15),n.impact=Math.max(n.impact,e))}function xi(n,e,t,i,s){let{brake:r}=t,o=n.kind==="bike",a=n.integrity>0?t.throttle:0,c=n.integrity>0?t.steer:0;n.impact=Math.max(0,n.impact-e*21),n.steer+=(c-n.steer)*(1-Math.exp(-e*10));let l=Math.sin(n.angle),d=Math.cos(n.angle),f=n.vx*l+n.vz*d,p=n.handling,m=(n.flat??[]).filter(Boolean).length,h=(p?.top??(o?31:27))*(1-m*.22),v=Math.sign(a)*f<-.6?28:a<0?o?4.7:10:(p?.accel??(o?19.7:15.4))*(1-m*.15);f=Mt(f+a*v*e,o?-2.7:-8.4,h);let x=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;f*=Math.exp(-e*x);let _=r?o?5.2:2.15:(p?.grip??(o?13.5:8.1))*(1-m*.12),T=(n.vx*d-n.vz*l)*Math.exp(-e*_);n.vx=f*l+T*d,n.vz=f*d-T*l;let R=Mt(1.9-Math.abs(f)/24,.75,1.65),M=m?((n.flat?.[0]||n.flat?.[2]?1:0)-(n.flat?.[1]||n.flat?.[3]?1:0))*.12:0,C=(n.steer+M)*e*R*Math.min(1,Math.abs(f)/2.1)*Math.sign(f),S=n.angle+C*(o?1.26:r?1.58:1);gi(n.x,n.z,S,i,vs(n))&&!Jo(n,n.x,n.z,S,s)&&(n.angle=S);let g=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*e/.34)),w=e/g;for(let F=0;F<g;F++){let N=n.x+n.vx*w,E=n.z+n.vz*w,z=Jo(n,N,E,n.angle,s);if(z){let{other:W,nx:D,nz:k,mass:V,otherMass:B}=z,Y=n.vx*D+n.vz*k,G=Y-(W.vx*D+W.vz*k);if(G<0&&Y<0){let oe=-G*1.22/(1/V+1/B);n.vx+=D*oe/V,n.vz+=k*oe/V,W.vx-=D*oe/B,W.vz-=k*oe/B,lu(n,-G),lu(W,-G*.9);break}let K=Math.hypot(n.x-W.x,n.z-W.z);if(Math.hypot(N-W.x,E-W.z)<=K)break}if(gi(N,E,n.angle,i,vs(n)))n.x=N,n.z=E;else{let W=gi(N,n.z,n.angle,i,vs(n))&&!Jo(n,N,n.z,n.angle,s),D=gi(n.x,E,n.angle,i,vs(n))&&!Jo(n,n.x,E,n.angle,s),k=Math.hypot(W?0:n.vx,D?0:n.vz);W!==D?(W&&(n.x=N),D&&(n.z=E),n.vx*=W?.84:-.22,n.vz*=D?.84:-.22):(n.vx*=-.21,n.vz*=-.21),lu(n,k||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function On(n,e){let t=0;return pi.some(i=>Math.abs(n-i)<=13.55)&&pi.some(i=>Math.abs(e-i)<=13.55)&&(t=.16),Math.abs(n-38)<6.05&&Math.abs(e+38)<5.04&&(t=.228),Math.abs(n-2)<9.5&&Math.abs(e-38)<11&&(t=.191),n>-10.91&&n<-3.49&&Math.abs(e-38)<9.77&&(t=.234),t}function _i(n,e,t,i,s,r,o=.34){if(!zn(e,t,o,i))return!1;for(let a of s)if(!(ae(a,{x:e,z:t})>3.4||!es(a,e,t,o))&&(!es(a,n.x,n.z,o)||ae(a,{x:e,z:t})<=ae(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let c=o+.28;if(ae(a,{x:e,z:t})<c&&ae(a,{x:e,z:t})<=ae(a,n))return!1}return!0}function $o(n,e,t,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(e,t)/.14)),c=n.x,l=n.z,d=e/a,f=t/a;for(let p=0;p<a;p++){let m=n.x+d,h=n.z+f;if(_i(n,m,h,i,s,r,o)){n.x=m,n.z=h;continue}d&&_i(n,m,n.z,i,s,r,o)&&(n.x=m),f&&_i(n,n.x,h,i,s,r,o)&&(n.z=h)}return Math.hypot(n.x-c,n.z-l)}function Jf(n,e,t){if(!e)return es(n,t.x,t.z,.28);let i=Math.max(1,Math.ceil(ae(e,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=e.x+(n.x-e.x)*r,a=e.z+(n.z-e.z)*r,c={x:o,z:a,angle:n.angle,kind:n.kind,shape:n.shape};if(es(c,t.x,t.z,.28))return!0}return!1}function Kf(n,e,t){let i=e.x-n.x,s=e.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((t.x-n.x)*i+(t.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(t.x-n.x-i*o,t.z-n.z-s*o)<1.2}function jf(n,e){let{id:t,x:i,z:s,w:r,d:o,angle:a,kind:c,label:l,color:d}=e,{box:f,solid:p,door:m,sign:h,glazing:v,support:x,volume:_}=n,T=c==="shop"||c==="armory",R=(B,Y,G=.228)=>({x:i+Math.cos(a)*B+Math.sin(a)*Y,z:s-Math.sin(a)*B+Math.cos(a)*Y,y:G}),M=Math.abs(Math.cos(a)),C=Math.abs(Math.sin(a)),S=(B,Y,G,K)=>({...R(B,Y),w:G*M+K*C,d:G*C+K*M}),g=o/2,w=-o/2,F=-r/2,N=r/2,E=(B,Y,G,K,oe,j,xe,J=!1,pe=0,Ce="box")=>{let ge=R(B,Y);f(ge.x,G,ge.z,K,oe,j,xe,J,a,pe,Ce)},z=(B,Y,G,K,oe,j,xe,J=!0)=>{E(B,Y,G,K,oe,j,xe,J);let pe=S(B,Y,K,j);p.push({x:pe.x,z:pe.z,w:pe.w,d:pe.d,y0:G-oe*.5,h:G+oe*.5,buildingId:t})};return T?k():D();function W(B,Y,G,K,oe){if(E(B,g+.05,Y,G+.22,K+.22,.1,5195585),E(B,g+.085,Y,G,K,.06,5073522),E(B,g+.12,Y,.05,K,.03,12168856),E(B,g+.12,Y+K*.18,G,.045,.03,12168856),E(B,g+.13,Y-K*.5-.08,G+.36,.09,.2,yi(d)),oe)for(let j of[-1,1])E(B+j*(G*.5+.24),g+.09,Y,.34,K+.06,.05,oe)}function D(){let B=c==="apartments",Y=B?e.stories:1,G=B?3.3:3.25,K=Y*G,oe=.228+K;z(0,0,.228+K/2,r,K,o,d),E(0,g+.03,.228+.23,r+.04,.46,.08,8484463);for(let J of[F+.12,N-.12])E(J,g+.04,.228+K/2,.26,K,.1,yi(d));for(let J=1;J<Y;J++)E(0,g+.04,.228+J*G,r+.04,.16,.1,yi(d));let j=B?0:-r*.18;if(E(j,g+.05,.228+1.17,1.42,2.42,.1,5195585),E(j,g+.09,.228+1.1,1.1,2.2,.06,B?4151902:7687224),E(j+.38,g+.14,.228+1.08,.06,.16,.05,13810049),E(j,g+.32,.228-.05,1.7,.14,.62,8484463),E(j,g+.42,.228+2.62,1.9,.12,.86,yi(d),!0),B){E(j,g+.12,.228+2.92,1.6,.32,.05,15324320);let J=R(j,g+.15,.228+2.92);h(l,J.x,J.y,J.z,a,5589560,1.56,.3)}else{let J=R(j+1.15,g+.13,1.848);h(l,J.x,J.y,J.z,a,5589560,.92,.22)}let xe=c==="house"?$f(t,[6257514,8019014,6975364]):null;for(let J=0;J<Y;J++){let pe=.228+J*G,Ce=B?[F+r*.17,F+r*.38,N-r*.38,N-r*.17]:[r*.18,r*.38];for(let ge of Ce)if(!(J===0&&Math.abs(ge-j)<1.7)&&(W(ge,pe+1.72,B?1.26:1.2,1.34,xe),B&&J>0&&ge===Ce[3])){E(ge,g+.42,pe+.95,1.8,.12,.74,8484463,!0);for(let Me of[-.8,-.4,0,.4,.8])E(ge+Me,g+.76,pe+1.38,.04,.78,.04,4802113);E(ge,g+.76,pe+1.78,1.72,.05,.06,4802113)}for(let ge of[F,N]){let Me=ge===F?-1:1;for(let He of B?[w+2.2,g-2.2]:[0]){let ot=R(ge+Me*.05,He);f(ot.x,pe+1.72,ot.z,.1,1.56,1.32,5195585,!1,a);let Ze=R(ge+Me*.085,He);f(Ze.x,pe+1.72,Ze.z,.06,1.34,1.1,5073522,!1,a)}}}if(B){E(0,0,oe+.04,r+.12,.1,o+.12,7827562);for(let J of[F+.1,N-.1])E(J,0,oe+.36,.2,.56,o,yi(d),!0);for(let J of[w+.1,g-.1])E(0,J,oe+.36,r,.56,.2,yi(d),!0);E(N-2.4,w+2.1,oe+.95,2,1.8,2,9077369,!0),E(N-2.4,w+2.1,oe+1.93,2.1,.12,2.1,7301732),E(F+2.2,w+1.9,oe+.75,1.4,1.2,1.4,10134691,!0),E(F+2.2,w+1.9,oe+1.42,1.5,.12,1.5,7240057)}else{let J=Math.min(2,o*.2);E(0,0,oe,r-.02,J,o-.02,d,!0,0,"prism"),E(0,0,oe+.06,r+.5,J+.12,o+.7,$f(t,[10115652,9063482,8082502]),!0,0,"prism"),E(N-2.1,w+o*.3,oe+J*.55,.55,1.6,.55,9402986,!0)}return{id:t,kind:c,label:l,units:[],doorIds:[],clerk:null,outside:R(j,g+1.1,.16),entry:R(j,g+.2),inside:R(j,g+.2),approach:R(j,g+2.4,.16),resident:null}}function k(){let Y=4.0200000000000005,G=.228,K=e.doorAt??.1,oe=Math.min(r*.25,3.72),j=[K-r*.248,K+r*.248],xe=.22,J=(Ue,xt,_t,lt,Z,Ft,pt)=>z(Ue,xt,Z+Ft/2,_t,Ft,lt,pt),pe=(Ue,xt,_t,lt,Z,Ft)=>J((xt+_t)/2,Ue,_t-xt,xe,lt,Z,Ft),Ce=(Ue,xt,_t,lt,Z,Ft)=>J(Ue,(xt+_t)/2,xe,_t-xt,lt,Z,Ft),ge=m(...V(K-1.28/2,g),a,1.28,4285290,G,{buildingId:t,private:!1,unitId:null}),Me=R(K,g),He=R(K,g+1.05,.16),ot=R(K,g-1.05),Ze=R(K,g+2.45,.16);_.push({...S(0,0,r-.2,o-.2),floor:G,ceiling:G+Y,buildingId:t}),z(0,0,G-.066,r-.03,.132,o-.03,11972762,!1),p[p.length-1].walkSurface=!0,x.push({...S(0,0,r-.03,o-.03),y:G,buildingId:t}),Ce(F,w,g,G,Y,d),Ce(N,w,g,G,Y,d),pe(w,F,N,G,Y,d);let ft=F,wt=[{center:K,width:1.28,door:!0},...j.map(Ue=>({center:Ue,width:oe,door:!1}))];wt.sort((Ue,xt)=>Ue.center-xt.center);let Ke=.61,Dt=2.58,Wt=Dt-Ke;for(let Ue of wt){let xt=Ue.center-Ue.width*.5,_t=Ue.center+Ue.width*.5;if(pe(g,ft,xt,G,Y,d),E((ft+xt)/2,g+.04,G+.17,xt-ft,.34,.11,8484463),ft=_t,Ue.door)continue;J(Ue.center,g,Ue.width,xe,G,Ke,d),J(Ue.center,g,Ue.width,xe,G+Dt,Y-Dt,d);let lt=R(Ue.center,g+.068,G+(Dt+Ke)*.5);v(lt.x,lt.y,lt.z,Ue.width,Wt,a);let Z=S(Ue.center,g,Ue.width,.2);p.push({x:Z.x,z:Z.z,w:Z.w,d:Z.d,y0:G+Ke,h:G+Dt,buildingId:t});for(let pt of[-1,0,1])E(Ue.center+pt*(Ue.width*.5-.042),g+.13,G+(Dt+Ke)*.5,.07,Wt,.084,5989472);for(let pt of[Ke,Dt])E(Ue.center,g+.13,G+pt,Ue.width+.07,.081,.096,7831928);E(Ue.center,g+.17,G+Ke-.025,Ue.width+.2,.091,.25,10065280);let Ft=g-.48;E(Ue.center,Ft,G+.83,Ue.width-.24,.078,.45,11771260);for(let pt of[-.78,-.39,.39,.78])E(Ue.center+pt,Ft,G+.95+(Math.abs(pt)<.5?.055:0),.23,.26,.26,e.awning??12089684)}pe(g,ft,N,G,Y,d),E((ft+N)/2,g+.04,G+.17,N-ft,.34,.11,8484463),z(K,g,G+2.22+(Y-2.22)/2,1.28,Y-2.22,.21,d);for(let Ue of[F+.17,N-.17])E(Ue,g+.11,G+Y/2,.22,Y,.17,yi(d));E(0,g+.07,G+4.16-.05,r+.25,.22,.13,yi(d));for(let Ue of[F,N]){let xt=Ue===F?-1:1;for(let _t of[w+2.3,g-2.3])E(Ue+xt*.13,_t,G+1.7,.06,1.2,1.4,5195585),E(Ue+xt*.16,_t,G+1.7,.04,1.04,1.22,5073522),E(Ue+xt*.2,_t,G+1.03,.16,.09,1.56,yi(d))}let Gt=R(0,w+1.89,G);Gt.angle=a;let Lt=R(0,g+.18,G+4.16-.64);h(l,Lt.x,Lt.y,Lt.z,a,3232851,Math.min(5.25,r-.72),.58),E(0,g+.6,G+4.16-1.37,r-.56,.19,1.22,e.awning??7820863,!0);for(let Ue=F+.68;Ue<N-.42;Ue+=.46)E(Ue,g+1.21,G+4.16-1.46,.225,.23,.062,14006413);z(.46,w+3,G+.55,4.4,1.1,.7,6968131),E(.46,w+3,G+1.15,4.58,.14,.79,12166795,!0),E(1.33,w+3.02,G+1.42,.48,.41,.36,4083022),E(1.33,w+3.22,G+1.58,.34,.19,.051,7968922);for(let Ue of[F+.46,N-.46])for(let xt of[w+1.75,w+4.2]){z(Ue,xt,G+.83,.61,1.66,1.79,7037271);for(let _t=0;_t<3;_t++)for(let lt of[-.55,-.17,.22,.57]){let Z=[12490344,11953479,5997179][(Math.floor((lt+.6)*2.3)+_t)%3];E(Ue+(Ue<0?.37:-.37),xt+lt,G+.47+_t*.43,.15,.25,.22,Z)}}for(let Ue of[-.26,.26])E(Ue*r,0,G+4.16-.23,.32,.085,1.91,16245436);E(0,g-.8,G+.009,1.71,.016,.87,5863786);let ne=G+4.16;z(0,0,ne-.053,r+.17,.2,o+.17,8613472,!1);for(let Ue of[F,N])E(Ue,0,ne+.28,.25,.59,o+.15,yi(d),!0);for(let Ue of[w,g])E(0,Ue,ne+.28,r+.2,.59,.25,yi(d),!0);return E(N-1.5,w+1.45,ne+.46,1.34,.64,1.21,8418922,!0),E(N-1.5,w+1.45,ne+.82,1.14,.08,1.05,10261379),E(F+1.52,w+1.55,ne+.39,.56,.57,.57,4873822,!0),{id:t,kind:c,label:l,entry:Me,outside:He,inside:ot,approach:Ze,resident:null,clerk:Gt,doorIds:[ge.id],units:[]}}function V(B,Y){let G=R(B,Y,.228);return[G.x,G.z]}}function $f(n,e){let t=0;for(let i of n)t=t*31+i.charCodeAt(0)>>>0;return e[t%e.length]}function yi(n){let e=Math.min(255,(n>>16&255)+26),t=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return e*65536+t*256+i}var Qf=(n,e)=>[Math.floor((n-e*.5-1.1)/10),Math.floor((n+e*.5+1.1)/10)];function fc(n){let e=new Map;for(let t of n){let[i,s]=Qf(t.x,t.w),[r,o]=Qf(t.z,t.d);for(let a=i;a<=s;a++)for(let c=r;c<=o;c++){let l=a+","+c;e.has(l)||e.set(l,[]),e.get(l).push(t)}}return(t,i)=>e.get(Math.floor(t/10)+","+Math.floor(i/10))??[]}var ep=(n,e,t)=>Math.abs(n-t.x)<t.w*.5+.002&&Math.abs(e-t.z)<t.d*.5+.002,wv=n=>n&&n.health!==0&&!n.seated;function tp(n,e,t,i,s){let r=fc(n),o=fc(e),a=fc(t),c=fc(i.map(M=>M.closedSolid)),l=new Map(i.map(M=>[M.id,M])),d=M=>{let C=l.get(M.doorId);return!C.breached&&C.openAmount<1.06},f=n.filter(M=>(M.y0??0)<.95&&M.h>.28&&!M.stair);function p(M,C,S=0){let g=s(M,C);for(let w of o(M,C))w.y>g&&w.y<=S+.305&&ep(M,C,w)&&(g=w.y);return g}function m(M,C,S=0){let g=F=>!F.stair&&(!F.walkSurface||F.h>S+.305)&&(F.y0??0)<S+1.72&&F.h>S+.13,w=r(M,C).filter(g);for(let F of c(M,C))g(F)&&d(F)&&w.push(F);return w}function h(M,C,S=0){let g=null;for(let w of a(M,C))w.floor<=S+.14&&w.ceiling>=S&&ep(M,C,w)&&(!g||w.floor>g.floor)&&(g=w);return g}function v(M,C,S,g=.3,w=!1){let F=N=>C>=(N.y0??0)-g&&C<=N.h+g&&Math.abs(M-N.x)<N.w*.5+g&&Math.abs(S-N.z)<N.d*.5+g;for(let N of r(M,S))if(!(N.off||N.prop||N.walkSurface||N.stair)&&F(N))return!0;if(w){for(let N of c(M,S))if(F(N))return!0}return!1}function x(){return i.map(M=>M.closedSolid).filter(d)}function _(M){let C=l.get(M);return!C||!C.private||C.breached?!1:(C.breached=!0,C.hold=1/0,!0)}function T(M,C){for(let S of i){let g=S.breached||S.normallyOpen;S.hold=Math.max(0,S.hold-M);for(let F of C){if(g||!wv(F))continue;let N=F.floorY??F.y??0;if(Math.abs(N-S.base)>.64)continue;let E=F.x-S.x,z=F.z-S.z,W=E*E+z*z;if(W>3.68)continue;let D=F.buildingId===S.buildingId&&(!S.unitId||F.unitId===S.unitId),k=E*S.normalX+z*S.normalZ<-.22;(!S.private||D||k&&W<2.43||S.opened&&W<1.92)&&(g=!0,S.hold=1.1)}let w=g||S.hold>0?1.48:0;S.openAmount+=(w-S.openAmount)*(1-Math.exp(-M*13)),S.opened=S.openAmount>=1.06,S.door.rotation.y=S.angle+S.openAmount}}function R(){for(let M of i)M.breached=!1,M.hold=0,M.opened=M.normallyOpen,M.openAmount=M.normallyOpen?1.48:0,M.door.rotation.y=M.angle+M.openAmount}return{vehicleSolids:f,floorAt:p,walkSolids:m,interiorAt:h,closedDoorSolids:x,breachDoor:_,updateDoors:T,resetDoors:R,viewBlocked:v}}var hu=3751484,Tv={box:new hn,cylinder:new Fn(1,1,1,10),pole:new Fn(.8,1,1,8),foliage:new Yi(1,1)},Ur={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function Fr(n){let e=n.map(([t,i,s,r,o,a,c,l,d=0,f=0])=>{let p=Tv[t],m=p.index?p.toNonIndexed():p.clone(),h=new Ct().compose(new X(i,s,r),new an().setFromEuler(new ui(d,f,0,"YXZ")),new X(o,a,c));m.applyMatrix4(h);let v=new $e(l),x=new Float32Array(m.attributes.position.count*3);for(let _=0;_<x.length;_+=3)x[_]=v.r,x[_+1]=v.g,x[_+2]=v.b;m.setAttribute("color",new tn(x,3));for(let _ of Object.keys(m.attributes))["position","normal","color"].includes(_)||m.deleteAttribute(_);return m});return ac(e)}var np={lamp:()=>Fr([["pole",0,2.25,0,.083,4.5,.083,hu],["box",.35,4.36,0,.79,.075,.075,hu],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>Fr([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,hu])]),bin:()=>Fr([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>Fr([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>Fr([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>Fr([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,e)=>{let t=e*Math.PI*2/7;return["foliage",Math.sin(t)*.86,4.55,Math.cos(t)*.86,.42,.24,1.58,[3432266,4879699,7111766][e%3],0,t]})])};function ip(n,e,t){let i=[],s={},r=new $t({vertexColors:!0,roughness:.84}),o=new Ct,a=new X,c=new an,l=new X,d=new an,f=new an,p=new X,m=new X(0,1,0),h=!1;function v(S,g,w,F=0,N=1,E){let z=t(g,w),W={x:g,z:w,w:E?.w??Ur[S].radius*2,d:E?.d??Ur[S].radius*2,y0:z,h:z+(E?.h??1),prop:S};e.push(W),i.push({kind:S,x:g,z:w,y:z,rotation:F,scale:N,solid:W,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function x(S){d.setFromAxisAngle(m,S.rotation+S.spin),p.set(S.axisX,0,S.axisZ),f.setFromAxisAngle(p,S.tilt),c.multiplyQuaternions(f,d);let g=Ur[S.kind].radius;a.set(S.x,S.y+Math.sin(S.tilt)*g+S.lift,S.z),l.setScalar(S.scale),o.compose(a,c,l),s[S.kind].setMatrixAt(S.index,o),s[S.kind].instanceMatrix.needsUpdate=!0}function _(){for(let S of Object.keys(np)){let g=i.filter(F=>F.kind===S);if(!g.length)continue;let w=new Un(np[S](),r,g.length);w.castShadow=!0,w.receiveShadow=!0,s[S]=w,g.forEach((F,N)=>{F.index=N,x(F)}),w.computeBoundingSphere(),n.add(w)}}function T(S,g,w){let F=Ur[S.kind];S.broken=!0,S.solid.off=!0,S.clock=0;let N=.55+Math.random()*.25;S.vx=g.vx*N,S.vz=g.vz*N;let E=Math.max(.01,Math.hypot(g.vx,g.vz));S.axisX=g.vz/E,S.axisZ=-g.vx/E,S.spinRate=(Math.random()-.5)*(S.kind==="bin"?7:2),S.lift=0,S.liftSpeed=S.kind==="bin"||S.kind==="bollard"?Math.min(3.2,w*.22):0;let z=1-F.mass;return g.vx*=z,g.vz*=z,F.damage&&(g.integrity=Math.max(0,g.integrity-F.damage*Math.min(1.6,w/F.speed))),g.impact=Math.max(g.impact,F.mass>.2?4.5:0),h=!0,{kind:S.kind,heavy:F.mass>.2,x:S.x,z:S.z}}function R(S,g,w){let F=[];for(let E of g){let z=Math.hypot(E.vx,E.vz);if(z<.6)continue;let W=z*S*2+.2;for(let D of i){if(D.broken||Math.abs(D.x-E.x)>3.6||Math.abs(D.z-E.z)>3.6)continue;let k={x:E.x+E.vx*S,z:E.z+E.vz*S,angle:E.angle,kind:E.kind};es(k,D.x,D.z,Ur[D.kind].radius+W)&&z>=Ur[D.kind].speed&&F.push(T(D,E,z))}}for(let E of i)if(E.broken)if(E.clock+=S,E.clock<2.5){let z=Math.exp(-S*(E.tilt>1.2?6:2.2)),W=E.x+E.vx*S,D=E.z+E.vz*S;E.x=W,E.z=D,E.vx*=z,E.vz*=z,E.spin+=(E.spinRate??0)*S*z,E.tilt=Math.min(Math.PI/2,E.tilt+S*(1.1+E.tilt*3.2)),E.liftSpeed&&(E.lift=Math.max(0,E.lift+E.liftSpeed*S),E.liftSpeed-=9.8*S,E.lift===0&&E.liftSpeed<0&&(E.liftSpeed=0)),x(E)}else E.clock>50&&Math.hypot(w.x-E.solid.x,w.z-E.solid.z)>38&&g.every(z=>Math.hypot(z.x-E.solid.x,z.z-E.solid.z)>3)&&M(E);let N=h;return h=!1,{events:F,shadow:N}}function M(S){Object.assign(S,{broken:!1,x:S.solid.x,z:S.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),S.solid.off=!1,x(S),h=!0}function C(){for(let S of i)S.broken&&M(S)}return{add:v,finalize:_,update:R,reset:C,items:i}}var zr=20;function sp(n,e,t){let r=((n+e)%zr+zr)%zr-(t==="z"?0:10);return r>=0&&r<7?"green":r>=7&&r<9?"yellow":"red"}var Av={red:[new $e(1,.12,.08),new $e(.2,.05,.05)],yellow:[new $e(1,.72,.1),new $e(.2,.16,.05)],green:[new $e(.2,1,.45),new $e(.05,.17,.08)]};function rp(n,e){let t=[];for(let h of $n)for(let v of $n)t.push({id:h+","+v,x:h,z:v,offset:((h*7+v*3)%zr+zr)%zr});let i=[[-6.1,-6.1,Math.PI,"z"],[6.1,6.1,0,"z"],[-6.1,6.1,-Math.PI/2,"x"],[6.1,-6.1,Math.PI/2,"x"]],s=t.length*i.length,r=new Un(new Fn(.07,.08,3.3,8),new $t({color:3093555,roughness:.6}),s),o=new Un(new hn(.34,.95,.26),new $t({color:1909024,roughness:.7}),s),a=new Un(new Fn(.105,.105,.06,12),new Jt({color:16777215}),s*3),c=new Vt,l=[],d=0;for(let h of t)for(let[v,x,_,T]of i){let R=h.x+v,M=h.z+x;c.position.set(R,1.65+.16,M),c.rotation.set(0,_,0),c.scale.set(1,1,1),c.updateMatrix(),r.setMatrixAt(d,c.matrix),c.position.set(R,3.25+.16,M),c.updateMatrix(),o.setMatrixAt(d,c.matrix),["red","yellow","green"].forEach((C,S)=>{c.position.set(R+Math.sin(_)*.14,3.25+.16+.29-S*.29,M+Math.cos(_)*.14),c.rotation.set(Math.PI/2,_,0,"YXZ"),c.updateMatrix(),a.setMatrixAt(d*3+S,c.matrix),l.push({junction:h,axis:T,color:C,state:""})}),e.push({x:R,z:M,w:.2,d:.2,h:3.5,signal:!0}),d++}r.castShadow=o.castShadow=!0,n.add(r,o,a);let f=new Map(t.map(h=>[h.id,h])),p=0;function m(h){p+=h;let v=!1;l.forEach((x,_)=>{let R=sp(p,x.junction.offset,x.axis)===x.color,M=R?"on":"off";x.state!==M&&(x.state=M,a.setColorAt(_,Av[x.color][R?0:1]),v=!0)}),v&&a.instanceColor&&(a.instanceColor.needsUpdate=!0)}return m(0),{update:m,state(h,v){let x=f.get(h);return x?sp(p,x.offset,v):"green"},reset(){p=0,m(0)}}}var pc=473021;function Sn(){return pc=Math.imul(1664525,pc)+1013904223>>>0,pc/4294967296}var qs=n=>n[Math.floor(Sn()*n.length)];function op(n){pc=473021,n.background=new $e(15316107),n.fog=new fo(15316107,.0068),n.add(new Eo(15266035,7890017,2.3));let e=new Io(16763540,3);e.position.set(-45,48,-32),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),e.shadow.bias=-35e-5,e.shadow.normalBias=.12,e.shadow.mapSize.set(2048,2048),e.shadow.autoUpdate=!1,n.add(e);let t=new It(new us(330,32,16),new kn({side:bn,depthWrite:!1,uniforms:{sun:{value:new X(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));t.frustumCulled=!1,t.renderOrder=-100,n.add(t);let i=[],s=[],r=[],o=[],a={},c={box:new hn,foliage:new Yi(1,1),pole:new Fn(.8,1,1,8),hill:new us(1,14,9),prism:Ev()},l=new Vt;function d(D,k,V,B,Y,G,K,oe,j,xe=0,J=0){let pe=k===0&&B===0?"center":Math.round(k/31)+","+Math.round(B/31),Ce=D+":"+!!j+":"+pe,ge=a[Ce]??={shape:D,shadow:!!j,items:[]};l.position.set(k,V,B),l.scale.set(Y,G,K),l.rotation.set(J,xe,0,"YXZ"),l.updateMatrix(),ge.items.push({matrix:l.matrix.clone(),color:new $e(oe)})}function f(D,k,V,B,Y,G,K,oe=!1,j=0,xe=0,J="box"){d(J,D,k,V,B,Y,G,K,oe,j,xe)}function p(D,k,V,B,Y,G,K){f(D,k,V,B,Y,G,K,!0),i.push({x:D,z:V,w:B,d:G,y0:k-Y/2,h:k+Y/2})}let m=ip(n,i,On);function h(D,k,V=!1){m.add(V?"palm":"tree",D,k,Sn()*6.28,.82+Sn()*.36,{w:.45,d:.45,h:3.6})}function v(D,k,V,B,Y,G=1784375,K=4.2,oe=.65){let j=document.createElement("canvas");j.width=512,j.height=115;let xe=j.getContext("2d");xe.fillStyle="#e9d4a0",xe.fillRect(0,0,512,115),xe.strokeStyle="#645a47",xe.lineWidth=6,xe.strokeRect(7,7,498,101),xe.font="900 50px system-ui",xe.textAlign="center",xe.textBaseline="middle",xe.fillStyle="#"+G.toString(16).padStart(6,"0"),xe.fillText(D,256,57,470);let J=new Ns(j);J.colorSpace=fn;let pe=new It(new Bn(K,oe),new Jt({map:J}));pe.position.set(k,V,B),pe.rotation.y=Y,n.add(pe)}let x=new Nt;n.add(x);let _=[],T=new Bn,R=new $t({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:Cn});function M(D,k,V,B,Y,G){let K=new It(T,R);K.position.set(D,k,V),K.scale.set(B,Y,1),K.rotation.y=G,n.add(K)}let C={box:f,solid:i,door:S,sign:v,glazing:M,support:s,volume:r};function S(D,k,V,B,Y,G=.228,K={}){let oe=new Nt,j=K.id??"door-"+_.length;oe.position.set(D,G,k);let xe=bt(oe,"box",Y,B*.5,1.088,0,B-.045,2.147,.074);xe.castShadow=!1;let J=bt(oe,"box",10191979,B*.5,1.47,-.04,B*.64,.56,.013);J.castShadow=!1;for(let ot of[-1,1])bt(oe,"box",10191195,B-.14,.99,ot*.046,.11,.13,.035).castShadow=!1,bt(oe,"box",12691318,B-.174,1.011,ot*.073,.132,.042,.037).castShadow=!1;let pe=D+Math.cos(V)*B*.5,Ce=k-Math.sin(V)*B*.5,ge=K.normallyOpen?1.48:0;oe.rotation.y=V+ge,n.add(oe);let Me={x:pe,z:Ce,w:Math.abs(Math.cos(V))*B+.083,d:Math.abs(Math.sin(V))*B+.083,y0:G,h:G+2.155,doorId:j,buildingId:K.buildingId??null},He={door:oe,id:j,x:pe,z:Ce,base:G,angle:V,openAmount:ge,opened:!!K.normallyOpen,breached:!1,private:!!K.private,normallyOpen:!!K.normallyOpen,hold:0,buildingId:K.buildingId??null,unitId:K.unitId??null,normalX:Math.sin(V),normalZ:Math.cos(V),handle:{x:D+Math.cos(V)*(B-.17),y:G+1.008,z:k-Math.sin(V)*(B-.17)},closedSolid:Me};_.push(He);for(let ot of[0,B])f(D+Math.cos(V)*ot,G+1.09,k-Math.sin(V)*ot,.105,2.18,.178,6640456,!1,V);return f(pe,G+2.185,Ce,B+.12,.11,.178,6640456,!1,V),He}function g(){let{x:D,z:k}=In,V=13216391;p(D,2.08,k,12,3.84,10,V),f(D,.39,k+5.03,12.04,.46,.08,8484463),f(D,4,k,12.06,1.7,9.98,V,!0,0,0,"prism"),f(D,4.06,k,12,1.84,10.7,9393216,!0,0,0,"prism"),f(D+3.6,4.9,k-2.2,.55,1.9,.55,9402986,!0),f(D,1.38,k+5.05,1.42,2.42,.1,5195585),f(D,1.31,k+5.09,1.1,2.2,.06,6903110),f(D,.18,k+5.35,1.7,.14,.62,8484463),f(D,2.85,k+5.45,1.9,.12,.86,14270112,!0);for(let B of[-3.6,3.6]){f(D+B,2.03,k+5.04,2.08,1.43,.1,5195585),f(D+B,2.03,k+5.07,1.86,1.21,.06,5073522),f(D+B,1.22,k+5.16,2.2,.09,.2,14270112);for(let Y of[-1,1])f(D+B+Y*1.17,2.03,k+5.07,.34,1.27,.05,6257514)}v("CASA 38",D+1.6,1.62,k+5.13,0,4868146,.92,.22),p(D+9.6,1.6,k-.4,6,3.2,8,12558975),f(D+9.6,3.27,k-.4,6.3,.16,8.3,8280646,!0),f(D+9.6,1.32,k+3.62,4.4,2.5,.08,9278614);for(let B=.3;B<2.6;B+=.28)f(D+9.6,B,k+3.67,4.3,.025,.02,7304824);f(D+9.6,.173,k+8.6,4.8,.03,9.8,10262154),v("GARAGEM",D+9.6,2.85,k+3.68,0,3881523,1.4,.26)}function w(){let D=ji.z;f(2,.169,D,19,.045,22,6908773),p(-7.18,2.03,D,7.35,3.68,19.56,8886169),f(-7.18,3.98,D,7.62,.23,19.8,5406866),f(-3.46,1.35,D,.12,2.32,1.7,4413028),f(-2.5,3.33,D,7.1,.25,19.5,5401719,!0),p(-1.5,1.42,D-9.72,5.4,2.54,.35,8229008),p(-1.5,1.42,D+9.72,5.4,2.54,.35,8229008);for(let V of[-9.5,9.5])p(1.04,1.65,D+V,.28,3,.31,8689042);f(1.1,2.88,D,.25,.42,19.54,5994626),v("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,D,Math.PI/2,2704468,7.2,.63);for(let V of[-8.2,-3.95,.3,4.55,8.8])f(8.15,.208,D+V,5.3,.016,.1,14537646);for(let V of[-6.1,-1.85,2.4])f(5.5,.208,D+V,.1,.016,3.25,14537646);for(let V of[-6.8,-3.4,3.4,6.8])f(-3.46,1.87,D+V,.08,1.4,2.25,5195585),f(-3.43,1.87,D+V,.05,1.18,2.05,3626589);f(-3.52,.21,D+3.1,.64,.08,2.45,6446161)}f(0,-.3,0,720,.1,720,8880242),f(0,-.18,0,132,.34,132,4605770);for(let D=0;D<1250;D++){let k=Sn()*130-65,V=Sn()*130-65;f(k,.001,V,.04+Sn()*.3,.007,.04+Sn()*.3,qs([5460823,4934733,4473414,5855058]),!1,Sn()*6)}for(let D of $n)for(let k of pi){for(let V=-10;V<=10;V+=4)f(D,.014,k+V,.12,.015,1.82,14132838);for(let V of[-12.6,12.6])for(let B=-4.5;B<=4.5;B+=.9)f(D+B,.015,k+V,.45,.016,1.44,13156273)}for(let D of $n)for(let k of pi){for(let V=-10;V<=10;V+=4)f(k+V,.014,D,1.82,.015,.12,14132838);for(let V of[-12.6,12.6])for(let B=-4.5;B<=4.5;B+=.9)f(k+V,.015,D+B,1.44,.016,.45,13156273)}for(let D of pi)for(let k of pi){f(D,.067,k,27.1,.16,27.1,13022103),f(D,.125,k,26.7,.07,26.7,10721158);for(let V of[-12.25,12.25])for(let B=-12;B<=12;B+=2.1)f(D+V,.164,k+B,2.32,.008,.023,12956566),f(D+B,.164,k+V,.023,.008,2.32,12956566);if(D===ji.x-2&&k===ji.z)w();else if(D===In.x&&k===In.z)g();else if(D===0&&k===-38){for(let V of[-6,6]){f(D+V,.185,k,8.2,.08,19,7438938);for(let B of[-7,0,7])h(D+V,k+B,!0)}for(let V=-8;V<=8;V+=4)f(D,.177,k+V,3.1,.033,3.2,13218964);p(D,1.04,k-9.89,4.42,1.77,.18,9271651),v("PRA\xC7A DA BRASA",D,1.6,k-10,Math.PI)}else for(let V of[-1,1]){let B=D===0&&k===0&&V===1,Y=o.filter(Me=>Me.id.startsWith("lot-")||Me.id==="armory").length,G=Y+10,K=B?"armory":Y%5===1||Y%5===3?"shop":Y%5===0?"house":"apartments",oe=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],j=B?"armory":G===13?"barber":G===18?"clothes":G===21?"black":K==="shop"?"store":null,J={barber:"BARBEARIA DO Z\xC9",clothes:"MODA BRASA",black:"PENHORES 24H"}[j]??(K==="shop"?oe[Math.floor(Y/2)%oe.length]:K==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(Y/2)%6]:"CASA "+G),pe=qs([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Ce=jf(C,{id:B?"armory":"lot-"+G,kind:K,label:B?"LOJA DE ARMAS":J,x:D+V*(B?5.7:6.25),z:k+(B?-5.45:0),angle:V*Math.PI/2,w:B?11.35:(K==="house"?13.7:15.3)+Sn()*.57,d:B?9.36:9.38+Sn()*.25,color:pe,upperColor:qs([12163192,10394757,12426376,11971991]),awning:qs([7821376,6190959,10446933]),fabrics:qs([7373431,8152675,9534300]),stories:Y%3===0?3:2,doorAt:B?0:void 0,open:K==="house"&&Y%3!==0});Ce.service=j,o.push(Ce);let ge=B?4.32:k+9.83;f(D+V*6.8,.168,ge,8.3,.017,2.51,10919820);for(let Me=-3.5;Me<=3.5;Me+=.7)f(D+V*6.8+Me,.18,ge,.022,.012,2.5,12169372)}for(let V of[-1,1]){let B=D+V*12.85,Y=k-V*9.85;m.add("lamp",B,Y,V>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),m.add("bench",D+V*9,k-V*12.5,V>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let G=D+V*10.1;m.add("bin",G,k-V*12.55,0,1,{w:.5,d:.5,h:.78}),m.add("bollard",G+.72,k-V*12.58,0,1,{w:.14,d:.14,h:.46}),D===In.x&&k===In.z&&V===1||h(D+V*9.4,k+V*12.6)}}for(let D of[-1,1])p(63.6,1.85,D*1.7,.15,3.7,.15,7362375);f(63.6,3.48,0,.16,.64,3.65,7362375),v("VILA DAS LAJES",63.51,3.48,0,-Math.PI/2,3232851,3.55,.56),f(73,-.055,0,22,.1,32,10063229);for(let[D,k]of[67.5,74.5,81].entries())for(let[V,B]of[-12,-4,4,12].entries()){let Y=2.9+(D+V)%3*.85,G=[11890768,10652789,11363656,10063490][(V+D)%4];if(p(k,Y/2,B,4.8,Y,5.5,G),f(k,Y+.08,B,5,.16,5.7,8683127),f(k-2.41,1.07,B-.8,.05,2.14,.88,5786688),f(k-2.42,1.64,B+1.15,.055,.88,1.2,5464677),(V+D)%2===0){f(k-2.66,2.28,B-.8,.56,.09,1.36,8162439);for(let K of[-.42,0,.42])f(k-2.46,1.64,B+1.15+K,.04,.88,.04,2702400)}V%2===0&&f(k,Y+.55,B+1,1.3,.92,1.3,5334392)}for(let D=0;D<52;D++){let k=D/52*Math.PI*2,V=118+Sn()*58,B=qs([9670532,10525321,10001560,9212560]),Y=Math.sin(k)*V,G=Math.cos(k)*V;d("hill",Y,-1,G,12+Sn()*33,3+Sn()*22,10+Sn()*20,B,!1,k);let K=4+Sn()*16;f(Y,K*.5-1,G,3+Sn()*9,K,4+Sn()*8,qs([10194306,8949389,10128258]),!1)}m.finalize();let F=rp(n,i),N=new $t({roughness:.88});for(let{shape:D,shadow:k,items:V}of Object.values(a)){let B=new Un(c[D],N,V.length);V.forEach(({matrix:Y,color:G},K)=>{B.setMatrixAt(K,Y),B.setColorAt(K,G)}),B.castShadow=k,B.receiveShadow=!0,n.add(B)}let E=new Nt,z=new It(new So(1.6,1.85,40),new Jt({color:15794054,side:Cn,transparent:!0,opacity:.85,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.y=.26,E.add(z);let W=new It(new Zi(.43),new Jt({color:15794054}));return W.position.y=2.8,E.add(W),n.add(E),{solid:i,marker:E,beacon:W,sun:e,sky:t,houseRoof:x,bed:kf,doors:_,buildings:o,props:m,signals:F,...tp(i,s,r,_,On)}}function Ev(){let n=[-.5,0,-.5],e=[-.5,0,.5],t=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,e,t,i,r,s,n,r,i,n,t,r,e,r,t,e,s,r,n,s,e,n,i,s],a=new Zt;return a.setAttribute("position",new Rt(o.flat(),3)),a.computeVertexNormals(),a}var Cv=n=>n===0?"gr\xE1tis":"R$ "+n.toLocaleString("pt-BR"),Rv=n=>"#"+n.toString(16).padStart(6,"0");function ap(n,{balance:e,onClose:t}){let i=n.querySelector("#shop-title"),s=n.querySelector("#shop-detail"),r=n.querySelector("#shop-balance"),o=n.querySelector("#shop-list"),a=n.querySelector("#shop-status"),c=null,l=null;function d(p){let m=p?document.activeElement?.getAttribute("data-key"):null,h=l();c=h,i.textContent=h.title,s.textContent=h.note??"",r.textContent=e(),o.replaceChildren(),h.sections.forEach((_,T)=>{let R=document.createElement("h3");R.textContent=_.title,o.append(R),_.items.forEach((M,C)=>{let S=document.createElement("div");S.className="store-row"+(M.active?" active":"");let g=document.createElement("button");g.type="button",g.className="store-item",g.dataset.key=T+":"+C,g.disabled=!!M.disabled,g.innerHTML="";let w=document.createElement("span");w.textContent=M.label+(M.active?" \xB7 em uso":"");let F=document.createElement("b");if(F.textContent=M.price==null||M.disabled&&h.title==="Invent\xE1rio"?"":Cv(M.price),g.append(w,F),M.detail){let N=document.createElement("small");N.textContent=M.detail,g.append(N)}if(g.addEventListener("click",()=>f(M,void 0)),S.append(g),M.colors){let N=document.createElement("div");N.className="swatches",M.colors.forEach((E,z)=>{let W=document.createElement("button");W.type="button",W.className="swatch",W.style.background=Rv(E),W.dataset.key=T+":"+C+":"+z,W.setAttribute("aria-label",M.label+", cor "+(z+1)),W.disabled=!!M.disabled,W.addEventListener("click",()=>f(M,E)),N.append(W)}),S.append(N)}o.append(S)})}),((m?o.querySelector('[data-key="'+m+'"]'):null)??o.querySelector("button:not(:disabled)"))?.focus({preventScroll:!1})}function f(p,m){let h=p.buy(m);a.textContent=h??"Pronto!",a.classList.toggle("error",!!h),d(!0)}return{show(p){l=p,a.textContent="",d(!1),n.open||n.showModal()},close(){n.open&&n.close(),c=null,t()},move(p){let m=[...n.querySelectorAll("button:not(:disabled)")];if(!m.length)return;let h=m.indexOf(document.activeElement),v=m[(h+p+m.length)%m.length];v.focus(),v.scrollIntoView({block:"nearest"})},activate(){let p=document.activeElement;p&&n.contains(p)&&p.click()},refresh(){c&&d(!0)}}}var ea={sedan:{name:"Brasa",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[11422e3,4362871,13084242,5795484,9063749,14209732,3093558]},hatch:{name:"Pulga",category:"dia a dia",length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[.38,.18],[-.38,.18],[.38,-.86],[-.38,-.86]],doors:4,handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[14783826,6989496,14209732,11876922,9416794]},wagon:{name:"Perua",category:"dia a dia",length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3,cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[.42,.1],[-.42,.1],[.42,-1],[-.42,-1]],doors:4,handling:{top:26,accel:14,grip:8,mass:1.18},palette:[9799551,5143689,8219215,13023648],extras:["roofRack"]},taxi:{name:"T\xE1xi",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[15254855],extras:["taxi"]},pickup:{name:"Picape",category:"utilit\xE1rio",length:5.3,width:2,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[.44,-.02],[-.44,-.02]],doors:2,handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[7043674,9056042,14012354,3100527,3815994],extras:["bed"]},van:{name:"Furg\xE3o",category:"utilit\xE1rio",length:5.15,width:2,sill:.55,belt:1.06,roof:2,wheel:.41,wheelbase:3.15,cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[.45,.85],[-.45,.85]],doors:2,handling:{top:22,accel:11,grip:7,mass:1.6},palette:[15131350,10467269,13218682,7110499],extras:["box"]},suv:{name:"Jip\xE3o",category:"luxo / utilit\xE1rio",length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[.45,.05],[-.45,.05],[.45,-1],[-.45,-1]],doors:4,handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[2042416,14276303,6044462,3758922],extras:["roofRack","chrome"]},sport:{name:"Fa\xEDsca",category:"esportivo",length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[.4,-.28],[-.4,-.28]],doors:2,handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[14236459,15909424,3108822,16052714,2500907],extras:["spoiler"]},muscle:{name:"Trov\xE3o",category:"esportivo",length:4.95,width:2,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,cabin:{base:[-1.3,.5],top:[-1,-.02]},seats:[[.42,-.45],[-.42,-.45]],doors:2,handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[1908514,8199967,13855274,2972991],extras:["scoop","stripes"]},luxury:{name:"Imperador",category:"luxo",length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[.44,.12],[-.44,.12],[.44,-1.08],[-.44,-1.08]],doors:4,handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[1316376,15065818,3882821,4858664],extras:["chrome"]},convertible:{name:"Brisa",category:"luxo / esportivo",length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[.4,-.12],[-.4,-.12],[.4,-1],[-.4,-1]],doors:2,open:!0,handling:{top:34,accel:19,grip:9,mass:1.05},palette:[9425384,15328208,11872828,1851246],extras:["chrome"]}},lp={street:{name:"Rua",handling:{top:31,accel:19.7,grip:13.5,mass:.39}},sport:{name:"Raio",handling:{top:40,accel:24,grip:14.5,mass:.36}},chopper:{name:"Estradeira",handling:{top:29,accel:15,grip:12,mass:.45}},scooter:{name:"Mobilete",handling:{top:19,accel:10,grip:13,mass:.28}}};for(let[n,e]of Object.entries(ea))Zf("car:"+n,{width:e.width/2+.02,length:e.length/2+.01,radius:e.width/2-0,offsets:[-(e.length/2-e.width/2),0,e.length/2-e.width/2],mass:e.handling.mass});var Iv=new $t({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:Cn,transparent:!0,opacity:.5,depthWrite:!1});function ta(n,e="sedan",t,i=!1){let s=ea[e]??ea.sedan,r=t??s.palette[0],{length:o,width:a,sill:c,belt:l,roof:d,wheel:f,wheelbase:p}=s,m=o/2,h=s.extras??[],[v,x]=s.cabin.base,[_,T]=s.cabin.top,R=new Nt;uc(R,a/2+.17,m+.07);let M=new Nt;R.add(M);let C=(j,xe,J,pe,Ce,ge,Me,He,ot=!1)=>bt(M,j,xe,J,pe,Ce,ge,Me,He,ot),S=h.includes("chrome");C("box",2435629,0,(f*.32+c+.06)/2,0,a-.44,c+.06-f*.32,o-.9);for(let j of[-1,1])C("box",2830387,j*(a/2-.07),c-.06,0,.12,.22,Math.max(.4,p-2*f-.12));C("box",3749689,0,c,0,a-.44,.075,o-.35);for(let j of[-1,1]){for(let[xe,J]of[[-m,-p/2-f],[-p/2+f,p/2-f],[p/2+f,m]])J>xe&&C("box",r,j*(a/2-.055),(c+l)/2,(xe+J)/2,.11,l-c,J-xe,!0);for(let xe of[-p/2,p/2]){let J=Math.min(l-.05,2*f+.03);C("box",r,j*(a/2-.055),(J+l)/2,xe,.11,l-J,2*f,!0)}}for(let j of[-1,1])C("box",r,0,(c+l)/2,j*(m-.09),a-.04,l-c,.18,!0);let g=m-x-.03,w=C("box",r,0,l+.005,(x+m)/2,a-.04,.15,g,!0);!h.includes("bed")&&!h.includes("box")&&m+v>.25&&C("box",r,0,l-.005,(v-m)/2,a-.05,.14,m+v-.02,!0);let F=a/2-.07,N=a/2-.27,E=Iv.clone(),z;if(s.open){let j=new Zt;j.setAttribute("position",new Rt([-F,l,x,F,l,x,N,d,T,-N,d,T],3)),j.setIndex([0,1,2,0,2,3]),j.computeVertexNormals(),z=new It(j,E),C("box",2895665,0,d,T,a-.5,.06,.07)}else{let j=new Zt;j.setAttribute("position",new Rt([-F,l-.015,v,F,l-.015,v,F,l-.015,x,-F,l-.015,x,-N,d,_,N,d,_,N,d,T,-N,d,T],3)),j.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),j.computeVertexNormals(),z=new It(j,E),C("box",r,0,d+.035,(_+T)/2,N*2+.02,.07,T-_+.08,!0);let xe=(J,pe,Ce)=>{let ge=d-l,Me=pe-J;for(let He of[-1,1])C("box",r,He*(F+N)/2,(l+d)/2,(J+pe)/2,.08,Math.hypot(ge,Me),Ce,!0).rotation.x=Math.atan2(Me,ge)};if(xe(x,T,.08),xe(v,_,.12),s.doors===4){let J=(s.seats[0][1]+s.seats[2][1])/2+.12;for(let pe of[-1,1])C("box",r,pe*(F+N)/2,(l+d)/2,J,.08,d-l,.1,!0)}}z.renderOrder=2,M.add(z);let W=Math.min(l-.395,d-.98),D=Math.min(.62,d-l-.02+.3);for(let[j,xe]of s.seats)C("box",3486512,j,W+.18+D,xe-.3,.31,.16,.14),C("box",3815219,j,W+.12,xe,.52,.12,.52),C("box",3815219,j,W+.12+D/2,xe-.3,.5,D,.12);C("box",2828840,0,l+.045,x-.24,a-.26,.14,.34);let k=C("cylinder",1907997,s.seats[0][0],l+.07,s.seats[0][1]+.42,.17,.03,.17);k.rotation.x=Math.PI/2-.45,C("box",3355961,0,l-.24,m+.004,a*.44,.14,.05),C("box",13156268,0,c+.035,m+.006,a*.98,.1,.045,!0),C("box",13156268,0,c+.025,-m-.006,a*.98,.1,.05,!0),C("box",16707771,0,(c+l)/2,-m-.008,.4,.14,.03);for(let j of[-1,1]){C("box",16769956,j*(a/2-.29),l-.165,m+.006,.43,.17,.055,!0),C("box",11021858,j*(a/2-.3),l-.165,-m-.006,.48,.17,.055,!0),s.open||C("box",2898236,j*(a/2+.03),l+.07,x-.06,.1,.09,.16);let xe=s.doors===4?[x,(s.seats[0][1]+s.seats[2][1])/2+.12,v+.05]:[x,s.seats[0][1]-.62];for(let J of xe)C("box",1843234,j*(a/2+.005),(c+l)/2,J,.012,l-c-.02,.025);for(let J=0;J<xe.length-1;J++)C("box",13089700,j*(a/2+.01),l-.05,xe[J+1]+.25,.035,.04,.22,!0);S&&C("box",14277074,j*(a/2+.008),l-.03,0,.02,.03,o-.5,!0)}if(h.includes("taxi")&&(C("box",16249304,0,d+.16,(_+T)/2,.68,.2,.26),C("box",2779715,0,(c+l)/2+.06,0,a+.012,.08,o*.6,!0)),h.includes("spoiler")){for(let j of[-1,1])C("box",1776670,j*.6,l+.14,-m+.28,.06,.22,.08);C("box",r,0,l+.27,-m+.25,a-.2,.05,.32,!0)}if(h.includes("scoop")&&C("box",2105892,0,l+.12,(x+m)/2+.1,.5,.12,.62),h.includes("stripes"))for(let j of[-1,1])C("box",15855590,j*.2,l+.083,(x+m)/2,.16,.012,g),C("box",15855590,j*.2,d+.072,(_+T)/2,.16,.012,T-_);if(h.includes("roofRack"))for(let j of[-1,1])C("box",2500907,j*(N-.08),d+.1,(_+T)/2,.05,.06,T-_+.2);if(h.includes("bed")){for(let j of[-1,1])C("box",r,j*(a/2-.04),l+.22,(v-m)/2,.08,.44,m+v,!0);C("box",r,0,l+.22,-m+.04,a,.44,.08,!0),C("box",r,0,l+.22,v-.04,a,.44,.08,!0),C("box",2960169,0,l+.01,(v-m)/2,a-.16,.02,m+v-.12)}if(h.includes("box")){C("box",r,0,(l+2.15)/2,(v+.25-m)/2,a,2.15-l,m+v+.25,!0),C("box",2763306,0,2.15-.05,(v+.25-m)/2,a+.02,.04,m+v+.27);for(let j of[-1,1])C("box",1843234,j*.005,(l+2.1)/2,-m-.004,.015,2-l,.02)}let V=[];for(let j of[-1,1])for(let xe of[-p/2,p/2]){let J=new Nt;J.position.set(j*(a/2-.17),f,xe),R.add(J),bt(J,"cylinder",2434600,0,0,0,f,.24,f).rotation.z=Math.PI/2,bt(J,"cylinder",S?14013903:11052964,j*.115,0,0,f*.53,.02,f*.53,!0).rotation.z=Math.PI/2,V.push(J)}let B=new Nt,Y=s.doors===4?(s.seats[0][1]+s.seats[2][1])/2+.12:s.seats[0][1]-.62;B.position.set(a/2+.004,0,x),bt(B,"box",r,0,(c+l)/2+.04,-(x-Y)/2,.036,l-c-.1,x-Y,!0),mi(B,Qi(B),hc),M.add(B);let G=[1,-1].map(j=>{let xe=new Nt;return xe.position.set(0,c-.09,j*(m-.2)),bt(xe,"box",S?13619144:2830387,0,0,0,a-.08,.3,.42,S),mi(xe,Qi(xe),S?hc:void 0),M.add(xe),{mesh:xe,end:j,state:0,home:xe.position.clone(),damage:0,velocity:new X,spin:0}}),K=[];i&&(K.push(C("box",15550262,-.33,d+.13,(_+T)/2,.55,.14,.25)),K.push(C("box",5487086,.33,d+.13,(_+T)/2,.55,.14,.25)));let oe=Qi(M).filter(j=>j!==z&&j!==w&&!K.includes(j));mi(M,oe.filter(j=>j.material.metalness===0)),mi(M,oe.filter(j=>j.material.metalness>0),hc);for(let j of V)mi(j,Qi(j));return M.traverse(j=>{j instanceof It&&(j.castShadow=!1)}),n.add(R),dp({root:R,body:M,cabin:z,cracks:[],wheels:V,lamps:K,hood:w,bumpers:G,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"car",model:e,shape:"car:"+e,spec:s,color:r,handling:s.handling,rider:null,door:B,doorTime:0,wheelSpin:0,handlebar:null,wheelRadius:f,wheelbase:p,halfWidth:a/2,halfLength:m,seatHip:W,flat:[!1,!1,!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}function dp(n){let e=n;return e.repair=()=>Pv(e),e}var cp=new $t({color:2038810,roughness:1,metalness:.05});function fp(n){n.originals??=new Map,n.root.traverse(e=>{!(e instanceof It)||e===n.cabin||e.material===cp||e.parent===n.root&&e.geometry.type==="CircleGeometry"||(n.originals.set(e,e.material),e.material=cp)}),n.cabin&&(n.cabin.visible=!1);for(let e of n.cracks)e.visible=!1}function Pv(n){n.flat?.fill(!1);for(let[e,t]of n.originals??[])e.material=t;n.originals?.clear(),n.cabin&&(n.cabin.visible=!0);for(let e of n.bumpers??[])n.body.add(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.state=0,e.damage=0;Object.assign(n,{damageFront:0,damageRear:0,burning:!1,wrecked:!1,fire:0,wreckClock:0})}function mc(n,e,t="street"){let i=lp[t]??lp.street,s=new Nt;uc(s,.42,1.07*1.07);let r=new Nt;s.add(r);let o=(m,h,v,x,_,T,R,M)=>bt(r,m,h,v,x,_,T,R,M),a=t==="scooter"?.25:t==="chopper"?.36:.33,c=t==="chopper"?[-.86,.98]:t==="scooter"?[-.62,.66]:[-.73,.78];t==="scooter"?(o("box",e,0,.42,-.25,.38,.34,.8),o("box",2763821,0,.34,.2,.36,.08,.55),o("box",e,0,.72,.52,.34,.68,.16),o("box",2369834,0,.78,-.32,.34,.12,.55),o("box",13940106,0,.92,.66,.22,.14,.08)):t==="chopper"?(o("box",3882300,0,.46,-.1,.3,.34,.7),o("sphere",e,0,.86,.32,.22,.18,.5),o("box",2369834,0,.68,-.42,.38,.1,.62),o("box",e,0,.62,-.86,.3,.16,.5),o("box",14079696,.22,.34,-.42,.1,.1,.95),o("box",13940106,0,.9,1.02,.22,.2,.1)):(o("box",3882300,0,.48,-.04,.32,.38,.7),o("sphere",e,0,.89,.34,.24,.23,.46),o("box",2369834,0,.85,-.36,.36,.13,.59),o("box",e,0,.65,-.7,.32,.17,.58),o("box",13940106,0,.8,.88,.25,.21,.11),t==="sport"&&(o("box",e,0,.72,.62,.42,.5,.5),o("box",2902871,0,1.04,.72,.34,.18,.06),o("box",e,0,.8,-.72,.28,.12,.5))),o("box",10433836,0,.7,c[0]-.25,.2,.11,.11);let l=new Nt;l.position.set(0,.76,.38),bt(l,"box",3949122,0,.44,-.09,t==="chopper"?.84:.684,.057,.059),bt(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,mi(l,Qi(l)),r.add(l),o("box",5461330,0,.39,-.22,.52,.07,.11),t!=="scooter"&&o("box",11578016,.232,.36,-.54,.12,.12,.72);let d=new It(new hn(.01,.01,.01));d.visible=!1,r.add(d);let f=[];for(let m of c){let h=new Nt;h.position.set(0,a,m),bt(h,"cylinder",2434601,0,0,0,a,.12,a).rotation.z=Math.PI/2,bt(h,"cylinder",8750213,0,0,0,a*.62,.14,a*.62).rotation.z=Math.PI/2,mi(h,Qi(h)),f.push(h),r.add(h);let v=m>0?t==="chopper"?-.62:-.21:.46;o("box",5988704,0,a+.22,m+(t==="chopper"&&m>0?-.18:0),.09,t==="chopper"&&m>0?.8:.49,.085).rotation.x=v}mi(r,Qi(r).filter(m=>m!==d));let p=new Nt;return n.add(s),dp({root:s,body:r,cabin:null,cracks:[],wheels:f,lamps:[],hood:d,bumpers:[],speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"bike",model:t,shape:"bike",spec:i,color:e,handling:i.handling,rider:null,door:p,doorTime:0,wheelSpin:0,handlebar:l,wheelRadius:a,wheelbase:c[1]-c[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}var Lv=new X,Dv=new an;function pp(n,e,t){let i=e.spec.seats?.[t]??e.spec.seats?.[e.spec.seats.length-1];if(!i)return;let[s,r]=i,o=n.root.scale.y||1;e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(Lv.set(s,e.seatHip-.94*o,r))),n.root.quaternion.copy(e.body.getWorldQuaternion(Dv)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.rifle&&(n.rifle.visible=!1);let a=e.spec.roof-e.seatHip<1;n.body.position.set(0,0,0),n.body.rotation.set(a?-.3:-.12,0,0);for(let c=0;c<2;c++)n.legs[c].rotation.set(-1.42,0,(c?1:-1)*.06),n.shins[c].rotation.set(a?.35:.95,0,0),t===0?(n.arms[c].rotation.set(-.62,0,(c?-1:1)*.18),n.forearms[c].rotation.set(-.85,0,0)):(n.arms[c].rotation.set(-.32,0,(c?-1:1)*.08),n.forearms[c].rotation.set(-1.05,0,0))}var hp=null,Nv=new Bn(.28,.28),jo=new X,up=new X,Qo=new X;function Uv(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="rgba(235,242,240,.9)",e.lineWidth=1.6,e.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;e.moveTo(64,64);for(let r=1;r<=4;r++)e.lineTo(64+Math.cos(s+Math.sin(r*3.1+i)*.12)*r*14,64+Math.sin(s+Math.cos(r*2.3+i)*.12)*r*14)}for(let i of[9,20,33]){e.moveTo(64+i,64);for(let s=1;s<=24;s++)e.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}e.stroke(),e.fillStyle="rgba(250,250,245,.95)",e.beginPath(),e.arc(64,64,3.2,0,Math.PI*2),e.fill();let t=new Ns(n);return t.colorSpace=fn,new Jt({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Cn})}function uu(n,e){if(!n.cabin||!e)return;hp??=Uv(),n.root.updateMatrixWorld(!0),Qo.set(e[0],e[1],e[2]),n.body.worldToLocal(Qo);let[t,i]=n.spec.cabin.top;up.set(0,(n.spec.belt+n.spec.roof)/2,(t+i)/2),jo.subVectors(Qo,up),jo.y*=.35,jo.normalize();let s=new It(Nv,hp);s.position.copy(Qo).addScaledVector(jo,.015),s.lookAt(Qo.clone().add(jo)),s.rotation.z=Math.random()*Math.PI*2,s.renderOrder=3,n.body.add(s),n.cracks.push(s),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function mp(n){let{belt:e,roof:t,width:i,cabin:s}=n.spec,r=Math.min(s.base[0],s.top[0]),o=Math.max(s.base[1],s.top[1]);return{z:(r+o)/2,halfZ:(o-r)/2,y:(e+t)/2+.02,halfY:(t-e)/2,halfX:i/2-.1}}function si(n,e,t=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,c=0,l=0,d=n.wheels.map(M=>{let{x:C,z:S}=M.position,g=On(n.x+C*s+S*i,n.z-C*i+S*s);return S>0?o+=g:a+=g,C<0?c+=g:l+=g,g}),f=(o+a)/n.wheels.length;n.root.rotation.y=n.angle;let p=n.flat??[],m=r?0:((p[0]||p[2]?1:0)-(p[1]||p[3]?1:0))*.05;n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),n.wheelbase??2.64);let h=r?n.integrity<=0?1.25:-t*Math.min(.53,Math.abs(n.speed)*.039):t*Math.min(.09,Math.abs(n.speed)*.004),v=r?0:Math.atan2((l-c)*.5,(n.halfWidth??.97)*2)+m;n.body.rotation.z+=(h+v-n.body.rotation.z)*(e>0?Math.min(1,e*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-e),n.door.rotation.y=(r?1:-1)*Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let x=n.wheelRadius??.408,_=r?n.body.rotation.z:0;n.root.position.set(n.x,f+(r?Math.abs(Math.sin(_))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=t*.22),n.wheelSpin=(n.wheelSpin+n.speed*e/x)%(Math.PI*2),n.wheels.forEach((M,C)=>{let S=p[C];r||(M.position.y=d[C]-f+x-(S?x*.28:0)),M.scale.set(1,S?.72:1,S?1.12:1),M.rotation.set(n.wheelSpin,M.position.z>0?t*(r?.22:.23):0,0,"YXZ")});let T=100-n.integrity;n.hood.rotation.x=T*.0031+(n.damageFront>30?.18:0),n.hood.rotation.z=T*.0013;let R=n.hoodSize??(n.hoodSize=n.hood.scale.clone());n.hood.scale.set(R.x,R.y*(1+Math.min(.6,(n.damageFront??0)*.012)),R.z*(1-Math.min(.12,(n.damageFront??0)*.002)));for(let M of n.bumpers??[])M.state===1&&(M.mesh.rotation.x=M.end*.32,M.mesh.position.y=M.home.y-.12)}var Fv=`
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
  }`,zv=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;function gp(n,e,t){let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3),c=new Float32Array(e),l=new Float32Array(e),d=new Float32Array(e),f=new Float32Array(e),p=new Float32Array(e),m=new Float32Array(e),h=new Float32Array(e),v=new Zt;v.setAttribute("position",new tn(i,3)),v.setAttribute("tint",new tn(s,3)),v.setAttribute("size",new tn(r,1)),v.setAttribute("alpha",new tn(o,1));let x=new kn({vertexShader:Fv,fragmentShader:zv,transparent:!0,depthWrite:!1,blending:t?Po:gs,uniforms:{scale:{value:520}}}),_=new _o(v,x);_.frustumCulled=!1,_.visible=!1,_.renderOrder=4,n.add(_);let T=0;function R(S,g,w,F,N,E,z,W,D,k,V,B=0,Y=0){let G=T;T=(T+1)%e,i[G*3]=S,i[G*3+1]=g,i[G*3+2]=w,a[G*3]=F,a[G*3+1]=N,a[G*3+2]=E,s[G*3]=V.r,s[G*3+1]=V.g,s[G*3+2]=V.b,c[G]=z,l[G]=z,d[G]=W,f[G]=D,p[G]=k,m[G]=B,h[G]=Y,r[G]=W,o[G]=k,_.visible=!0}function M(S){let g=!1;for(let w=0;w<e;w++){if(c[w]<=0){o[w]!==0&&(o[w]=0,r[w]=0,g=!0);continue}g=!0,c[w]-=S;let F=Math.exp(-h[w]*S);a[w*3]*=F,a[w*3+2]*=F,a[w*3+1]=a[w*3+1]*F+m[w]*S,i[w*3]+=a[w*3]*S,i[w*3+1]+=a[w*3+1]*S,i[w*3+2]+=a[w*3+2]*S,m[w]<0&&i[w*3+1]<.05&&(i[w*3+1]=.05,a[w*3+1]*=-.3);let N=1-Math.max(0,c[w])/l[w];r[w]=d[w]+(f[w]-d[w])*N,o[w]=p[w]*(1-N)*(N<.12?N/.12:1)}if(g)for(let w of["position","size","alpha","tint"])v.attributes[w].needsUpdate=!0;_.visible=g}function C(){c.fill(0),o.fill(0),r.fill(0),v.attributes.alpha.needsUpdate=!0,_.visible=!1}return{spawn:R,update:M,clear:C,material:x}}function xp(n){let e=gp(n,700,!1),t=gp(n,600,!0),i=new $e,s=(d,f)=>d+Math.random()*(f-d),r=320,o=new Un(new Bn(1,1),new Jt({color:1315860,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),r);o.frustumCulled=!1,o.renderOrder=1;let a=new Ct().makeScale(0,0,0);for(let d=0;d<r;d++)o.setMatrixAt(d,a);n.add(o);let c=0,l=new Vt;return{update(d){e.update(d),t.update(d)},clear(){e.clear(),t.clear();for(let d=0;d<r;d++)o.setMatrixAt(d,a);o.instanceMatrix.needsUpdate=!0},setScale(d){e.material.uniforms.scale.value=d,t.material.uniforms.scale.value=d},engineSmoke(d,f,p,m){i.setRGB(m?.16:.5,m?.15:.48,m?.14:.45),e.spawn(d+s(-.2,.2),f,p+s(-.2,.2),s(-.3,.3),s(.9,1.5),s(-.3,.3),s(1.6,2.4),.5,m?2.4:1.8,m?.5:.32,i,0,.6)},tireSmoke(d,f,p){i.setRGB(.78,.76,.72),e.spawn(d,f,p,s(-.6,.6),s(.3,.8),s(-.6,.6),s(.8,1.3),.4,1.6,.3,i,0,1.4)},sparks(d,f,p,m=12,h=4){for(let v=0;v<m;v++)i.setRGB(1,s(.55,.85),s(.15,.35)),t.spawn(d,f,p,s(-h,h),s(.5,h*.9),s(-h,h),s(.18,.45),.09,.03,1,i,-9.8,.4)},flame(d,f,p,m=1){i.setRGB(1,s(.35,.6),.08),t.spawn(d+s(-.35,.35)*m,f,p+s(-.35,.35)*m,s(-.2,.2),s(1.4,2.4),s(-.2,.2),s(.4,.75),.75*m,.2,.85,i,0,.8),Math.random()<.45&&(i.setRGB(.13,.12,.11),e.spawn(d,f+.6,p,s(-.3,.3),s(1.2,2),s(-.3,.3),s(1.8,2.8),.7,2.8,.45,i,0,.5))},blood(d,f,p){i.setRGB(.48,.015,.025);for(let m=0;m<7;m++)e.spawn(d,f,p,s(-1.4,1.4),s(.6,2),s(-1.4,1.4),.34,.065,.025,.94,i,-9,.2)},explosion(d,f,p){i.setRGB(1,.9,.6),t.spawn(d,f+.6,p,0,0,0,.28,1.5,9,1,i);for(let m=0;m<46;m++){let h=Math.random()*Math.PI*2,v=s(.2,1),x=s(3,10);i.setRGB(1,s(.4,.75),s(.05,.2)),t.spawn(d,f+.5,p,Math.cos(h)*x*(1-v*.5),v*x,Math.sin(h)*x*(1-v*.5),s(.35,.8),s(.6,1.4),.2,.95,i,-2,1.5)}for(let m=0;m<30;m++){let h=Math.random()*Math.PI*2,v=s(1,4);i.setRGB(.1,.09,.085),e.spawn(d,f+.8,p,Math.cos(h)*v,s(1.5,4),Math.sin(h)*v,s(2.2,3.6),1.2,4.5,.7,i,0,.9)}this.sparks(d,f+.5,p,40,9)},skid(d,f,p,m,h=.012){let v=Math.hypot(p-d,m-f);v<.05||(l.position.set((d+p)/2,h+.013,(f+m)/2),l.rotation.set(-Math.PI/2,0,0),l.rotateZ(Math.atan2(p-d,m-f)),l.scale.set(.2,v+.04,1),l.updateMatrix(),o.setMatrixAt(c,l.matrix),c=(c+1)%r,o.instanceMatrix.needsUpdate=!0)}}}function gc(n,e,t,i){let s=Math.hypot(e,i),r=Math.sin(n.angle)*e+Math.cos(n.angle)*i,o=Math.cos(n.angle)*e-Math.sin(n.angle)*i;n.ragdoll={vx:e,vy:t,vz:i,y:n.ragdoll?.y??0,t:0,rest:0,rising:0,spinX:(r>=0?1:-1)*(2.5+s*.55),spinZ:-o*.35,tiltX:0,tiltZ:0},n.pushX=0,n.pushZ=0}function xc(n,e,t,i){let s=n.ragdoll;if(!s)return!1;s.t+=e;let r=n.model,o=s.y>.02||Math.abs(s.vy)>.4,a=n.x+s.vx*e,c=n.z+s.vz*e;if(i(a,n.z)?s.vx*=-.35:n.x=a,i(n.x,c)?s.vz*=-.35:n.z=c,s.vy-=9.8*e,s.y+=s.vy*e,s.y<=0){s.y=0,s.vy=Math.abs(s.vy)>2.2?-s.vy*.28:0;let f=Math.exp(-e*6);s.vx*=f,s.vz*=f,s.spinX*=Math.exp(-e*7),s.spinZ*=Math.exp(-e*7)}s.tiltX+=s.spinX*e,s.tiltZ+=s.spinZ*e;let l=!o&&Math.hypot(s.vx,s.vz)<.5;if(l){let f=Math.round(s.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;s.tiltX+=(f-s.tiltX)*Math.min(1,e*8),s.tiltZ+=(0-s.tiltZ)*Math.min(1,e*6),s.rest+=e}let d=Math.sin(s.tiltX)>=0?1:-1;if(n.health>0&&s.rest>1.1){s.rising+=e/.65;let f=Math.min(1,s.rising),p=Math.sign(Math.sin(s.tiltX))||1;if(s.tiltX=p*Math.PI/2*(1-f),s.tiltZ*=1-f,f>=1)return n.ragdoll=null,r.root.rotation.set(0,n.angle,0),!1}if(r.root.rotation.set(s.tiltX,n.angle,s.tiltZ),r.root.position.set(n.x,t+s.y+Math.max(0,-Math.cos(s.tiltX)*Math.cos(s.tiltZ))*1.88+Math.hypot(Math.sin(s.tiltX),Math.sin(s.tiltZ))*.31,n.z),o||!l){let f=s.t*13;r.body.position.set(0,0,0),r.body.rotation.set(Math.sin(f*.7)*.25,0,Math.cos(f*.6)*.2),r.arms[0].rotation.set(-1.4+Math.sin(f)*1.1,0,-.6-Math.cos(f*.8)*.5),r.arms[1].rotation.set(-1.2+Math.cos(f*1.1)*1.1,0,.6+Math.sin(f*.9)*.5),r.forearms[0].rotation.set(-.4-Math.sin(f*1.3)*.5,0,0),r.forearms[1].rotation.set(-.4-Math.cos(f*1.2)*.5,0,0),r.legs[0].rotation.set(Math.sin(f*.9)*.9,0,-.2),r.legs[1].rotation.set(-Math.sin(f*.8)*.9,0,.2),r.shins[0].rotation.set(.4+Math.abs(Math.sin(f))*.6,0,0),r.shins[1].rotation.set(.4+Math.abs(Math.cos(f))*.6,0,0),r.pistol.visible=!1,r.rifle&&(r.rifle.visible=!1)}else Zo(r,2,d);return r.shadow.visible=!1,!0}var Or=2.05,_c=7.15;function Ov(n){let e=[];return n.forEach((t,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(t[0]-s[0]),a=Math.sign(t[1]-s[1]),c=Math.sign(r[0]-t[0]),l=Math.sign(r[1]-t[1]),d={x:t[0]-a*Or-o*_c,z:t[1]+o*Or-a*_c},f={x:t[0]-l*Or+c*_c,z:t[1]+c*Or+l*_c},p=o===c&&a===l,m={x:t[0]-(p?a:a+l)*Or,z:t[1]+(p?o:o+c)*Or},h={x:t[0],z:t[1],id:t.join(",")};for(let v=0;v<=6;v++){let x=v/6,_=1-x;e.push({x:_*_*d.x+2*_*x*m.x+x*x*f.x,z:_*_*d.z+2*_*x*m.z+x*x*f.z,junction:h,curve:!p,angle:Math.atan2(o,a)})}}),e}var Ys=(n,e,t,i)=>[[n,e],[n,i],[t,i],[t,e]],Bv=[Ys(-57,-57,57,57),Ys(-57,-19,19,57).reverse(),Ys(-19,-57,57,19),Ys(-19,-19,19,19).reverse(),Ys(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],Ys(-57,-57,57,57).reverse(),Ys(-19,-57,57,57).reverse()];function kv(n){return n.flatMap((e,t)=>{let i=n[(t+1)%n.length],s=e[0]===i[0]?1:0,r=1-s,o=$n.filter(a=>a>Math.min(e[s],i[s])&&a<Math.max(e[s],i[s]));return i[s]<e[s]&&o.reverse(),[e,...o.map(a=>r===0?[e[0],a]:[a,e[1]])]})}var Gv=Bv.map(n=>Ov(kv(n))),Vv=[1,3,1,1,5,5,7,10];function Br(n,e,t=0){let i=Gv[e],s=(Vv[e]*7+t)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;ii(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+e%4*1.02,stuck:0,routeIndex:e,pass:null},n.stolen=!1,n.abandoned=0}function vc(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=t*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:Mt(s*1.9,-1,1),throttle:Mt((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function du(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=Ms(n.shape??n.kind),a=n.kind==="bike",c=i;for(let l of e){if(l===n||ae(l,n)>20)continue;let d=l.x-n.x,f=l.z-n.z,p=d*s+f*r,m=Math.abs(d*r-f*s),h=Ms(l.shape??l.kind,l.angle-n.angle);if(p<.2||m>o.width+h.width+.16)continue;let v=Math.max(0,p-o.length-h.length-(a?.39:.64)),x=Math.max(0,l.vx*s+l.vz*r);c=Math.min(c,x+v*.87)}for(let l of t){if(l.down>0||l.health<=0||l.seated||ae(l,n)>11)continue;let d=l.x-n.x,f=l.z-n.z,p=d*s+f*r,m=Math.abs(d*r-f*s);p>0&&m<o.width+.4&&(c=Math.min(c,Math.max(0,p-o.length-.9)*.94))}return c}function _p(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...e.filter(l=>l!==n&&Math.hypot(l.vx,l.vz)<2).map(l=>({other:l,radius:1.05})),...t.filter(l=>l.down<=0&&l.health!==0&&!l.seated).map(l=>({other:l,radius:.43}))].find(({other:l,radius:d})=>{let f=l.x-n.x,p=l.z-n.z,m=f*s+p*r;return m>2.25&&m<13.4&&Math.abs(f*r-p*s)<d+1.05});if(!a)return null;let c=(l,d)=>{let f=l.x-n.x,p=l.z-n.z,m=f*s+p*r;return m>-3&&m<23&&Math.abs(f*r-p*s-d)<2.3};for(let l of[2.72,-2.72]){if(e.some(p=>p!==n&&p!==a.other&&c(p,l))||t.some(p=>p!==a.other&&p.down<=0&&c(p,l)))continue;let d=n.x+s*8+r*l,f=n.z+r*8-s*l;if(gi(d,f,n.angle,i,n.shape??n.kind)&&gi((d+n.x)*.5,(f+n.z)*.5,n.angle,i,n.shape??n.kind))return{x:d,z:f}}return null}function yp(n,e,t,i){let s=n.kind==="bike",r=Ms(n.shape??n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),c=x=>({along:(x.x-n.x)*o+(x.z-n.z)*a,across:(x.x-n.x)*a-(x.z-n.z)*o}),l=[...e.filter(x=>x!==n).map(x=>({actor:x,...Ms(x.shape??x.kind,x.angle-n.angle),moving:!0})),...t.filter(x=>x.health>0&&!x.seated&&!x.down).map(x=>({actor:x,width:.34,length:.34,moving:!1}))].map(x=>({...x,...c(x.actor)})),d=l.filter(({actor:x,along:_,across:T,width:R,length:M,moving:C})=>_>Math.max(s?1.2:2.4,r.length+M-.3)&&_<19&&Math.abs(T)<r.width+R+.16&&(!C||Math.hypot(x.vx,x.vz)<(s?8:6)));d.sort((x,_)=>x.along-_.along);let f=d[0];if(!f||f.along-r.length-f.length<(s?1.85:2.45))return null;let p=r.width+f.width+(s?.23:.38),m=s?Math.max(1.12,p):2.95,h=s?[m,-m,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[m,-m,3.45,-3.45],v=f.along+r.length+f.length+(s?3:4.1);for(let x of h){if(Math.abs(f.across-x)<p)continue;let _=r.length+(s?3.9:5.8);if(!l.every(g=>{if(g===f)return!0;let w=g.moving?Math.max(0,-g.actor.vx*o-g.actor.vz*a):0;return g.along<-r.length-g.length-.2||g.along>v+_+Math.min(10,w)||Math.abs(g.across-x)>r.width+g.width+(s?.25:.46)}))continue;let R=Math.max(s?2.4:3.8,Math.min(s?5:6.1,f.along-r.length+1.2)),M=On(n.x,n.z),C=Math.ceil(v/.72),S=!0;for(let g=1;g<=C;g++){let w=g*v/C,F=x*Math.min(1,w/R),N=n.x+o*w+a*F,E=n.z+a*w-o*F,z=s?.27:.9;if(Math.abs(On(N+a*z,E-o*z)-M)>=.08||Math.abs(On(N-a*z,E+o*z)-M)>=.08||!cu({x:N,z:E,angle:n.angle,kind:n.kind,shape:n.shape},i,e,n)){S=!1;break}}if(S)return{x:n.x,z:n.z,sx:o,sz:a,offset:x,obstacle:f.actor,phase:"out",age:0,clearAfter:r.length+f.length+(s?.9:1.2)}}return null}function Hv(n,e,t,i,s=[]){e.age+=i;let r=n.kind==="bike",o=Ms(n.shape??n.kind),{sx:a,sz:c,offset:l}=e,d=(n.x-e.x)*a+(n.z-e.z)*c,f=(n.x-e.x)*c-(n.z-e.z)*a,p=(e.obstacle.x-e.x)*a+(e.obstacle.z-e.z)*c;if(e.age>(r?10:13)||e.phase==="merge"&&Math.abs(f)<.53)return null;e.phase==="out"&&Math.abs(f-l)<(r?.28:.55)&&(e.phase="pass"),e.phase!=="merge"&&d>p+e.clearAfter&&t.every(M=>{if(M===n)return!0;let C=Ms(M.shape??M.kind,M.angle-Math.atan2(a,c));return Math.abs((M.x-e.x)*c-(M.z-e.z)*a)>o.width+C.width+.3||Math.abs((M.x-n.x)*a+(M.z-n.z)*c)>o.length+C.length+1.25})&&(e.phase="merge");let m=e.phase==="merge"?0:l,h=t.some(R=>{if(R===n||R===e.obstacle)return!1;let M=(R.x-n.x)*a+(R.z-n.z)*c,C=(R.x-e.x)*c-(R.z-e.z)*a,S=Ms(R.shape??R.kind,R.angle-Math.atan2(a,c));return M>0&&M<o.length+S.length+2.7&&Math.abs(C-m)<o.width+S.width+.28})||s.some(R=>{if(R.health<=0||R.seated||R.down)return!1;let M=(R.x-n.x)*a+(R.z-n.z)*c,C=(R.x-e.x)*c-(R.z-e.z)*a;return M>0&&M<o.length+2.1&&Math.abs(C-m)<o.width+.45}),v=e.phase==="out"?r?2.3:4.4:r?4.8:7,x={x:e.x+a*(d+v)+c*m,z:e.z+c*(d+v)-a*m},_=e.phase==="out"?r?4.5:4.8:r?8.1:6.5,T=vc(n,x,h?0:_);return h&&(T.throttle=0),T}function yc(n,e,t,i,s){return cu(e,s,t,n)&&i.every(r=>r.health<=0||r.seated||r.down||!es(e,r.x,r.z,.26))}function Wv(n,e,t,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=t.filter(d=>d!==n&&ae(n,d)<29),c=null,l=-1/0;for(let d of[0,-.62,.62,-1,1]){let f={x:n.x,z:n.z,angle:n.angle,kind:n.kind,shape:n.shape},p=0;for(let _=0;_<(r?13:19)&&(f.angle-=d*.18*(r?.75:.56),f.x-=Math.sin(f.angle)*.18,f.z-=Math.cos(f.angle)*.18,!!yc(n,f,t,i,s));_++)p+=.18;if(p<(r?.9:1.35))continue;yc(n,f,t,i,s)||(f.x+=Math.sin(f.angle)*.18,f.z+=Math.cos(f.angle)*.18,f.angle+=d*.18*(r?.75:.56));let m={...f},h=0;for(let _=0;_<27;_++){let T=Math.atan2(e.x-m.x,e.z-m.z);if(m.angle=Vn(m.angle,T,r?.13:.092),m.x+=Math.sin(m.angle)*.24,m.z+=Math.cos(m.angle)*.24,!yc(n,m,t,i,s))break;h+=.24}let v=r&&yp(f,a,i,s),x=h*.67+(ae(n,e)-ae(m,e))*.38+p*.31-Math.abs(d)*.12+(v?4.6:0);x>l&&(l=x,c={steer:d,pace:o,distance:Math.max(.7,p-.26),age:0,x:n.x,z:n.z})}return c}function fu(n,e,t,i,s,r,o,a,c=!0){let l=n.kind==="bike",d=e.recoverPosition;e.recoverPosition={x:n.x,z:n.z};let f=d&&ae(d,n)>o*.57;if(e.recoverRetry=Math.max(0,(e.recoverRetry??0)-o),e.maneuver){let m=e.maneuver;m.age+=o;let h=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),v={x:n.x-Math.sin(n.angle)*h,z:n.z-Math.cos(n.angle)*h,angle:n.angle,kind:n.kind,shape:n.shape};return ae(n,m)>=m.distance||m.age>(l?2.4:2.8)||!yc(n,v,i,s,r)?(e.maneuver=null,e.recoverWait=0,e.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:m.steer,throttle:n.speed>-m.pace?Mt((n.speed+m.pace)*-.64,-.54,-.05):0,brake:!1}}e.recoverWait=!c||f||ae(n,t)<1.2?0:(e.recoverWait??0)+o;let p=l?1.08:1.75;return e.recoverRetry>0||e.recoverWait<p||n.integrity<=0?a:(e.maneuver=Wv(n,t,i,s,r),e.maneuver?(e.recoverWait=0,{steer:e.maneuver.steer,throttle:-.47,brake:!1}):(e.recoverRetry=.85,a))}function vp(n,e,t,i,s,r,o){for(let[a,c]of r)(!c.driver||c.integrity<=0||ae(c,c.driver.route[c.driver.next].junction)>11)&&r.delete(a);for(let a of n){let c=a.driver;if(!c||a.burning||a.wrecked||a.integrity<=0){a!==e.player&&Math.hypot(a.vx,a.vz)>.06?xi(a,s,{throttle:0,steer:0,brake:!0},i,e.vehicles):a!==e.player&&(a.impact=Math.max(0,a.impact-s*21));continue}let{route:l}=c,d=a.kind==="bike",f=l[c.next],p=Math.sin(a.angle),m=Math.cos(a.angle);for(let E=0;!c.maneuver&&E<6;E++){let z=f.x-a.x,W=f.z-a.z;if(Math.hypot(z,W)>2.55&&(z*p+W*m>0||Math.hypot(z,W)>5))break;c.next=(c.next+1)%l.length,f=l[c.next]}let{junction:h}=f,v=ae(a,h),x=r.get(h.id);!x&&v<9.7&&r.set(h.id,a);let _=c.cruise*(d?1.13:1),T=f.curve&&v<12?Math.min(d?7.1:5.9,_):_,R=x&&x!==a&&v<15;R&&(T=Math.min(T,Math.max(0,v-7.4)*.96));let M=!1;if(o){let E=(h.x-a.x)*p+(h.z-a.z)*m,z=o.state(h.id,Math.abs(p)>Math.abs(m)?"x":"z"),W=7.6+(a.halfLength??2.4);if(z!=="green"&&E>W-.5&&E<W+40){let D=E-W;(z==="red"||D>a.speed*a.speed/11)&&(T=Math.min(T,Math.max(0,D)*.8),M=!0)}}let C=du(a,e.vehicles,t,T);!c.pass&&!c.maneuver&&!R&&!M&&C<T*(d?.88:.78)&&(!f.curve||v>(d?8:11))&&(c.pass=yp(a,e.vehicles,t,i));let S=c.pass?Hv(a,c.pass,e.vehicles,s,t):null;S||(c.pass=null);let g=S??vc(a,f,C);!S&&C<.4&&(g.throttle=0);let w=a.x,F=a.z,N=fu(a,c,f,e.vehicles,t,i,s,g,!(R||M)||c.stuck>12);c.maneuver&&(c.pass=null),xi(a,s,N,i,e.vehicles),c.stuck=!M&&Math.hypot(a.x-w,a.z-F)<s*.62?c.stuck+s:M?c.stuck:0}}function pu(n,e,t,i){return ae(n,t)>13&&gi(n.x,n.z,n.angle,i,n.shape??n.kind)&&e.every(s=>ae(s,n)>5.2)}var Xv=[];function mu(n,e,t,i,s){let r=-1/0,o=1/0,a=-1,c=-1;for(let l=0;l<3;l++){let d=n[l],f=e[l],p=t[l],m=t[l+3];if(Math.abs(f)<1e-5){if(d<p||d>m)return 1/0;continue}let h=1/f,v=(f>0?p-d:m-d)*h,x=(f>0?m-d:p-d)*h;if(v>r&&(r=v,a=l*2+ +(f<0)),x<o&&(o=x,c=l*2+ +(f>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=c,Math.max(0,o))}function qv(n,e,t,i){if(!i)return e[1]<-1e-5&&n[1]>=0?-n[1]/e[1]:1/0;if(e[1]>1e-5)return 1/0;let s=o=>n[1]+e[1]*o-i(n[0]+e[0]*o,n[2]+e[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,t/12);if(r<1e-5)return 1/0;for(let o=0;o<t;o+=r){let a=o,c=Math.min(o+r,t);if(!(s(c)>0)){for(let l=0;l<10;l++){let d=(a+c)*.5;s(d)>0?a=d:c=d}return c}}return 1/0}function Mp(n,e,t,i,s,r){let o=s,a=null,c=null,l=null,d=-1,f=0,p={face:-1};for(let h of t){if(h.off)continue;let v=h.bounds??[h.x-h.w*.5,h.y0??h.base??0,h.z-h.d*.5,h.x+h.w*.5,h.h,h.z+h.d*.5],x=mu(n,e,v,o,p);x>=o||(o=x,c=h,l="solid",d=p.face)}let m=qv(n,e,o,r);m<o&&(o=m,c=null,l="ground",d=3);for(let h of i){let v,x=h.oriented;if(x){let{center:_,half:T,angle:R}=x,M=n[0]-_[0],C=n[1]-_[1],S=n[2]-_[2],g=Math.sin(R),w=Math.cos(R),F=[w*M-g*S,C,g*M+w*S],N=[w*e[0]-g*e[2],e[1],g*e[0]+w*e[2]];v=mu(F,N,[-T[0],-T[1],-T[2],T[0],T[1],T[2]],o,p)}else if(h.bounds)v=mu(n,e,h.bounds,o,p);else continue;v>=o||(o=v,a=h,c=null,l="target",d=p.face,f=x?.angle??0)}return{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}}function na(n,e,t,i,s=52){let{distance:r,hit:o}=Mp(n,e,t,i,s,null);return{distance:r,hit:o}}function Mc(n,e,t,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}=Mp(n,e,t,i,s,r),p=n.map((h,v)=>h+e[v]*o),m=null;if(d!==-1&&(m=[0,0,0],m[Math.floor(d/2)]=d%2?1:-1,f)){let[h,v,x]=m,_=Math.sin(f),T=Math.cos(f);m=[T*h+_*x,v,-_*h+T*x]}return{distance:o,hit:a,point:p,normal:m,solid:c,surface:l}}function bp(n,e,t,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...e),c=a>1e-5?e.map(h=>h/a):[0,0,1],l=Mc(n,c,i,s,r,{ground:o}),d=l.point.map((h,v)=>h-t[v]),f=d.reduce((h,v,x)=>h+v*c[x],0),p=Math.hypot(...d),m=f>.025&&p>1e-5?d.map(h=>h/p):c;return{direction:m,sight:l,impact:Mc(t,m,i,s,r,{ground:o})}}function kr(n,e,t){let i=e.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return na(n,r,t,Xv,s).distance>=s-.01}function Gr(n,e,t,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let c=e.x-n.x,l=e.z-n.z,d=Math.hypot(c,l),f=(n.ground??0)+r,p=(e.ground??0)+o;if(Math.hypot(d,p-f)>s)return!1;if(d>1e-5){let m=n.angle??0;if((Math.sin(m)*c+Math.cos(m)*l)/d<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(p-f,d)+(n.pitch??0))>a*.5?!1:kr([n.x,f,n.z],[e.x,p,e.z],t)}function Sp(n,e,t,i){let s=null,r=1.86;for(let o of e){if(o.down>0)continue;let a=o.x-n.x,c=o.z-n.z,l=Math.hypot(a,c),d=Math.sin(n.angle)*a+Math.cos(n.angle)*c;l>=r||d<l*.36||!kr([n.x,t+1,n.z],[o.x,t+1,o.z],i)||(s=o,r=l)}return s}var Vr=44,Zs=12,gu=new X(0,1,0),Yv=new X(0,0,1),bs=new an,ts=new Ct,Ri=new X,bc=new X,Sc=new X,Zv=new it;function Jv(){let e=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),c=Math.hypot(r,o),l=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,d=c<.35+Math.sin(a*4)*.06,f=(s*239+i*167)%19/19,p=d?9+f*27:101+f*64,m=d?.99:Math.min(.84,Math.max(0,(l-c)*3.6))*(.51+f*.49),h=(i*32+s)*4;e[h]=p,e[h+1]=p*.92,e[h+2]=p*.81,e[h+3]=Math.round(m*255)}let t=new Ds(e,32,32,Kn);return t.colorSpace=fn,t.magFilter=yn,t.minFilter=yn,t.needsUpdate=!0,t}function wc(n,e,t,i){let s=new Un(e,t,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(ec),n.add(s),s}function Kv(n){let e=new Bn(1,1),t=new cs(new Float32Array(Vr),1);t.setUsage(ec),e.setAttribute("markAlpha",t);let i=new Jt({map:Jv(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=wc(n,e,i,Vr);return s.renderOrder=3,{mesh:s,fade:t}}function wp(n){let{mesh:e,fade:t}=Kv(n),i=new Jt({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=wc(n,new Fn(.015,.015,1,5),i,Zs),r=new Jt({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=wc(n,new Yi(1,0),r,Zs),a=new Jt({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),c=wc(n,new Zi(1),a,Zs),l=Array.from({length:Zs},()=>({age:1/0,distance:0,point:new X,start:new X,direction:new X,surface:null})),d=Array.from({length:Vr},()=>({time:0,life:0,point:new X,normal:new X,attachment:null,radius:0})),f=0,p=0,m=new Ct().makeScale(0,0,0),h=new $e(16768142),v=new $e(16754545);function x(){for(let R=0;R<Zs;R++)l[R].age=1/0,s.setMatrixAt(R,m),o.setMatrixAt(R,m),c.setMatrixAt(R,m);for(let R=0;R<Vr;R++)d[R].time=0,d[R].attachment=null,e.setMatrixAt(R,m),t.setX(R,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=e.instanceMatrix.needsUpdate=t.needsUpdate=!0,f=p=0}x();function _(R,M,{enemy:C=!1,mark:S=M.surface==="solid"||M.surface==="ground",attach:g=null}={}){let w=l[f],F=f;if(f=(f+1)%Zs,w.start.fromArray(R),w.point.fromArray(M.point),w.distance=w.start.distanceTo(w.point),w.direction.subVectors(w.point,w.start).normalize(),w.surface=M.surface,w.age=0,s.setColorAt(F,C?v:h),s.instanceColor.needsUpdate=!0,S&&M.normal&&M.surface){let N=d[p];p=(p+1)%Vr,N.life=(M.surface==="ground"?8:13)+Math.random()*4,N.time=N.life,N.point.copy(w.point),N.normal.fromArray(M.normal).normalize(),N.attachment=g,N.radius=.053+Math.random()*.031,g&&(g.updateWorldMatrix(!0,!1),g.worldToLocal(N.point),N.normal.transformDirection(ts.copy(g.matrixWorld).invert()))}}function T(R){let M=!1,C=!1;for(let S=0;S<Zs;S++){let g=l[S];if(!Number.isFinite(g.age))continue;M=!0,g.age+=R;let w=234,F=Math.min(g.distance,g.age*w+1.7),N=Math.max(0,g.age*w-3.1),E=F-N;if(E>.018){Ri.copy(g.start).addScaledVector(g.direction,(F+N)*.5),bs.setFromUnitVectors(gu,g.direction);let W=Math.min(1,E/1.3);ts.compose(Ri,bs,bc.set(W,E,W)),s.setMatrixAt(S,ts)}else s.setMatrixAt(S,m);if(g.age<.071){let W=Math.max(.025,.084-g.age*.78);bs.setFromUnitVectors(gu,g.direction),Ri.copy(g.start).addScaledVector(g.direction,.052),ts.compose(Ri,bs,bc.set(W,W*2.2,W)),o.setMatrixAt(S,ts)}else o.setMatrixAt(S,m);let z=g.age-g.distance/w;if(g.surface&&z>=0&&z<.13){let W=Math.max(.006,.041-z*.27);Ri.copy(g.point).addScaledVector(g.direction,-(.039+z*.38)),bs.setFromUnitVectors(gu,g.direction),ts.compose(Ri,bs,bc.set(W,W*2.14,W)),c.setMatrixAt(S,ts)}else c.setMatrixAt(S,m);g.age>g.distance/w+.14&&(g.age=1/0)}for(let S=0;S<Vr;S++){let g=d[S];if(!(g.time<=0)){if(C=!0,g.time-=R,g.time<=0||g.attachment&&!g.attachment.visible){g.time=0,g.attachment=null,e.setMatrixAt(S,m),t.setX(S,0);continue}Ri.copy(g.point),Sc.copy(g.normal),g.attachment&&(g.attachment.updateWorldMatrix(!0,!1),Ri.applyMatrix4(g.attachment.matrixWorld),Sc.applyNormalMatrix(Zv.getNormalMatrix(g.attachment.matrixWorld))),Ri.addScaledVector(Sc,.014),bs.setFromUnitVectors(Yv,Sc),ts.compose(Ri,bs,bc.set(g.radius,g.radius,g.radius)),e.setMatrixAt(S,ts),t.setX(S,Math.min(1,g.time*.57))}}M&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0),C&&(e.instanceMatrix.needsUpdate=t.needsUpdate=!0)}return{emit:_,update:T,reset:x}}var Hr=.42,Js=.145,Tp=n=>.94*n,xu=n=>n*n*(3-2*n),ia=(n,e,t)=>n+(e-n)*t;function $v(n){return n<.065?-.32*xu(n/.065):n<Js?ia(-.32,1,xu((n-.065)/(Js-.065))):n<.182?ia(1,.89,(n-Js)/(.182-Js)):.89*(1-xu((n-.182)/(Hr-.182)))}function _u(n,{aim:e=!1,punch:t=0,pitch:i=0,hand:s=0,walking:r=!1}={}){if(!e&&t<=0)return;let o=n.arms[s],a=n.arms[1-s],c=n.forearms[s],l=n.forearms[1-s],d=s===0?1:-1,f=t>0?$v(Mt(Hr-t,0,Hr)):0,p=Math.max(0,f),m=Math.max(0,-f),h=Mt(i,-.64,.53)*.62,v=.07+p*.2-m*.08;n.body.rotation.set(v,d*(.12+p*.46-m*.52),d*(-.02-p*.05)),n.body.position.y+=Tp(1-Math.cos(v))-.04-p*.03,n.body.position.z+=Tp(-Math.sin(v))+p*.12;let[x,_]=n.legs,[T,R]=n.shins,M=s===0?x:_,C=s===0?_:x,S=s===0?T:R,g=s===0?R:T;r||(C.rotation.set(-.32-p*.08,0,0),g.rotation.set(.34,0,0),M.rotation.set(.26+p*.16,0,0),S.rotation.set(.18-p*.1,0,0)),o.rotation.set(ia(-.86,-1.66+h,p)+m*.7,d*(.1-p*.08),d*ia(.24,-.04,p)-d*m*.25),c.rotation.set(ia(-1.62,-.04,p)-m*.2,0,d*(.1-p*.1)),a.rotation.set(-.98+p*.06,-d*.12,-d*.22),l.rotation.set(-1.78,0,-d*.08),n.pistol.visible=!1}function Ve(n){return document.getElementById(n)}function Ap(n,e){let t=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Ve("stick"),c=Ve("nub"),l=Ve("look"),d=Ve("game"),f=Ve("view"),p=-1,m=-1,h=[],x=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",_=E=>{x=E,Ve("touch").hidden=E!=="touch",d.classList.toggle("touching",E==="touch")};_(x);let T=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","KeyB","Digit1","Digit2","Digit3","Digit4","Escape"]),R="";window.addEventListener("keydown",E=>{if(!(!T.has(E.code)||E.target instanceof HTMLSelectElement&&!e())){if((e()||E.code==="Escape")&&E.preventDefault(),E.code==="Escape"){E.repeat||n();return}if(e()&&(_("keyboard"),t.add(E.code),!E.repeat)){E.code==="KeyE"&&i.add("interact"),E.code==="KeyF"&&i.add("fire"),E.code==="KeyR"&&i.add("punch"),E.code==="KeyG"&&i.add("recruit"),E.code==="KeyV"&&i.add("weapon"),E.code==="Space"&&i.add("jump"),E.code==="KeyB"&&i.add("sell");let z={Digit1:"follow",Digit2:"wait",Digit3:"attack",Digit4:"dealer"};z[E.code]&&(R=z[E.code])}}}),window.addEventListener("keyup",E=>t.delete(E.code));function M(){t.clear(),i.clear(),s.clear(),o.x=0,o.y=0,c.style.transform="",p=-1,m=-1,r.x=0,r.y=0,r.aim=!1,Ve("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",M),f.addEventListener("contextmenu",E=>E.preventDefault()),f.addEventListener("wheel",E=>{!e()||!E.deltaY||(E.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(C),C=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let C=0;f.addEventListener("pointerdown",E=>{e()&&E.pointerType==="touch"&&_("touch")}),window.addEventListener("mousedown",E=>{if(!(!e()||document.pointerLockElement!==f&&(!(E.target instanceof Node)||!f.contains(E.target)))){if(E.button===0&&document.pointerLockElement!==f&&f.requestPointerLock){let z=f.requestPointerLock();z&&z.catch(()=>{})}_("keyboard"),E.button===0&&(i.add("fire"),s.add("mouseFire")),E.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",E=>{E.button===0&&s.delete("mouseFire"),E.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",E=>{!e()||x!=="keyboard"||E.pointerType==="touch"||(document.pointerLockElement===f||E.target===f||f.contains(E.target))&&(r.x+=E.movementX,r.y+=E.movementY)});function S(E){let z=a.getBoundingClientRect(),W=E.clientX-z.left-z.width/2,D=E.clientY-z.top-z.height/2,k=z.width*.37,V=Math.max(k,Math.hypot(W,D));o.x=W/V,o.y=D/V,c.style.transform="translate("+o.x*k+"px,"+o.y*k+"px)"}a.addEventListener("pointerdown",E=>{p===-1&&(_("touch"),p=E.pointerId,a.setPointerCapture(E.pointerId),S(E))}),a.addEventListener("pointermove",E=>{E.pointerId===p&&S(E)}),a.addEventListener("lostpointercapture",E=>{E.pointerId===p&&(p=-1,o.x=0,o.y=0,c.style.transform="")});let g=0,w=0;l.addEventListener("pointerdown",E=>{m===-1&&(m=E.pointerId,g=E.clientX,w=E.clientY,l.setPointerCapture(E.pointerId))}),l.addEventListener("pointermove",E=>{E.pointerId===m&&(r.x+=(E.clientX-g)*1.45,r.y+=(E.clientY-w)*1.45,g=E.clientX,w=E.clientY)}),l.addEventListener("lostpointercapture",E=>{E.pointerId===m&&(m=-1)});let F=Ve("gang-menu");for(let E of F.querySelectorAll("button"))E.addEventListener("pointerdown",z=>{z.preventDefault(),R=E.dataset.order??"",F.hidden=!0,Ve("gang").setAttribute("aria-expanded","false")});Ve("gang").addEventListener("pointerdown",E=>{E.preventDefault(),_("touch"),F.hidden=!F.hidden,Ve("gang").setAttribute("aria-expanded",String(!F.hidden))});for(let E of["interact","fire","aim","sprint","punch","jump","weapon","recruit","sell"]){let z=Ve(E);z.addEventListener("pointerdown",W=>{W.preventDefault(),_("touch"),z.setPointerCapture(W.pointerId),E==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),z.setAttribute("aria-pressed",String(s.has("aim")))):E==="sprint"||E==="fire"?(s.add(E),E==="fire"&&i.add(E)):i.add(E)}),(E==="sprint"||E==="fire")&&z.addEventListener("lostpointercapture",()=>s.delete(E))}let N=!1;return{clear:M,read(E,z){N!==E&&(s.delete("aim"),Ve("aim").setAttribute("aria-pressed","false"),N=E);let W=Array.from(navigator.getGamepads?.()??[]).find(j=>j?.connected&&j.mapping==="standard"),D=W?.buttons.map(j=>j.pressed||j.value>.45)??[],k=j=>D[j]&&!h[j],V=Array.from({length:4},(j,xe)=>Gf(W?.axes[xe]));(D.some(Boolean)||V.some(j=>Math.abs(j)>.1))&&_("pad"),(k(9)||!e()&&k(0))&&n();let Y=Number(t.has("KeyD")||t.has("ArrowRight"))-Number(t.has("KeyA")||t.has("ArrowLeft")),G=Number(t.has("KeyW")||t.has("ArrowUp"))-Number(t.has("KeyS")||t.has("ArrowDown")),K=(W?.buttons[7]?.value??0)-(W?.buttons[6]?.value??0),oe={x:Mt(Y+o.x+V[0],-1,1),y:Mt(G-o.y+(E&&Math.abs(K)>.05?K:-V[1]),-1,1),lookX:Mt(r.x,-140,140)*.0032+V[2]*z*2.45,lookY:Mt(r.y,-140,140)*.0028+V[3]*z*1.8,aim:!E&&(r.aim||t.has("KeyQ")||s.has("aim")||!!D[6]),run:s.has("sprint")||t.has("ShiftLeft")||t.has("ShiftRight")||!!D[0],brake:t.has("Space")||s.has("sprint")||!!D[2],interact:i.has("interact")||k(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!E&&!!D[7],punch:i.has("punch")||k(1),recruit:i.has("recruit")||k(12),weapon:i.has("weapon")||k(15),jump:i.has("jump")||k(2),map:k(8),confirm:k(0),cancel:k(1),navUp:k(12),navDown:k(13),sell:i.has("sell")||k(13),order:R||(k(14)?"toggle":"")||(k(4)?"attack":"")||(k(5)?"dealer":""),mode:x};return R="",h=D,r.x=0,r.y=0,i.clear(),oe}}}function Ep(){let n,e,t,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,e=n.createGain(),e.gain.value=.46,e.connect(n.destination),t=n.createOscillator(),t.type="triangle",i=n.createGain(),i.gain.value=0,t.connect(i).connect(e),t.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(c,l,d,f,p="sine",m=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+m,v=n.createOscillator(),x=n.createGain();v.type=p,v.frequency.setValueAtTime(c,h),v.frequency.exponentialRampToValueAtTime(l,h+d),x.gain.setValueAtTime(f,h),x.gain.exponentialRampToValueAtTime(.001,h+d),v.connect(x).connect(e),v.start(h),v.stop(h+d)}function a(c,l,d){if(!n||!s||n.state!=="running")return;let f=n.createBuffer(1,Math.floor(n.sampleRate*c),n.sampleRate),p=f.getChannelData(0);for(let x=0;x<p.length;x++)p[x]=(Math.random()*2-1)*Math.pow(1-x/p.length,2.2);let m=n.createBufferSource();m.buffer=f;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=d;let v=n.createGain();v.gain.value=l,m.connect(h).connect(v).connect(e),m.start()}return{start:r,explosion(){a(1.4,1.1,620),o(70,24,1.1,.7,"sawtooth")},rifle(){a(.12,.55,2400),o(240,60,.09,.4,"square")},sale(){o(880,1320,.12,.18),o(1320,1760,.16,.14,"sine",.08)},get enabled(){return s},toggle(){return s=!s,e&&(e.gain.value=s?.46:0),r(),s},motor(c,l){n&&(t.frequency.setTargetAtTime(34+Math.abs(c)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(c){o(c?109:187,c?39:73,c?.125:.084,c?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function yu(n){return n>1.53?54:n>.92?32:n>.63?24:15}function vu(n){return Math.round(Mt(Math.max(0,n-2.4)**2*.24,0,86))}function Tc(n){return n>=36?3:n>=20?2:n>0?1:0}function Cp(n){let i=62.474999999999994,s=Array.from({length:2500},(p,m)=>({x:m%50*2.55-i,z:Math.floor(m/50)*2.55-i})),r=s.map(p=>zn(p.x,p.z,.38,n)),o=s.map((p,m)=>r[m]?[m>=50?m-50:-1,m<2450?m+50:-1,m%50?m-1:-1,m%50<49?m+1:-1].filter(v=>v>=0&&r[v]&&zn((p.x+s[v].x)*.5,(p.z+s[v].z)*.5,.38,n)):[]),a=(p,m)=>{let h=Math.max(1,Math.ceil(ae(p,m)/.42));for(let v=1;v<=h;v++){let x=v/h;if(!zn(p.x+(m.x-p.x)*x,p.z+(m.z-p.z)*x,.31,n))return!1}return!0},c=p=>{let m=Math.round((p.x+i)/2.55),h=Math.round((p.z+i)/2.55),v=[];for(let x=Math.max(0,h-4);x<=Math.min(49,h+4);x++)for(let _=Math.max(0,m-4);_<=Math.min(49,m+4);_++){let T=x*50+_;if(!r[T])continue;let R=s[T].x-p.x,M=s[T].z-p.z;v.push({index:T,d:R*R+M*M})}v.sort((x,_)=>x.d-_.d);for(let{index:x}of v.slice(0,12))if(a(p,s[x]))return x;return v[0]?.index??-1},l=0,d=-1,f=(p,m)=>{let h=c(p),v=c(m);if(h<0||v<0||h===v)return[];let x=new Int32Array(s.length).fill(-1),_=[h];x[h]=h;for(let T=0;T<_.length;T++){let R=_[T];if(R===v){let M=[];for(let C=v;C!==h;C=x[C])M.push(s[C]);return M.reverse()}for(let M of o[R])x[M]===-1&&(x[M]=R,_.push(M))}return[]};return(p,m,h,v)=>{p.repath=(p.repath??0)-v;let x=m.x-p.x,_=m.z-p.z,T=Math.hypot(x,_);if(T<.16)return 0;let R=T<7&&a(p,m),M=Math.floor(performance.now()/16);for(M!==d&&(d=M,l=3),!R&&p.repath<=0&&(l>0?(l--,p.route=f(p,m),p.repath=1.1+Math.random()*.4):p.repath=.05);p.route?.length&&(ae(p,p.route[0])<.7||p.route.length>1&&ae(p,p.route[1])<4&&a(p,p.route[1]));)p.route.shift();let C=R?m:p.route?.[0]??m,S=Math.atan2(C.x-p.x,C.z-p.z),g=Math.min(h*v,ae(p,C));p.angle=Vn(p.angle,S,v*8.5);let w=Xo(p,p.x+Math.sin(S)*g,p.z+Math.cos(S)*g,.24,n);return w||(p.repath=Math.min(p.repath,.18)),w?h:0}}var Ac=n=>$n.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,$n[0]);function Mu(n,e,t,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let v=e.z<o.z;n.stop={x:v?20.9:17.2,z:o.z+(v?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&ae(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&ae(o,n.stop)<2.6){let v=Ac(o.x),x=Ac(o.z),_=Ac(e.x),T=Ac(e.z);Math.abs(o.x-v)>3&&Math.abs(o.z-x)>3?n.stop={x:v,z:o.z}:Math.abs(o.x-v)>2.4&&Math.abs(o.z-x)<2.4?n.stop={x:_,z:x}:Math.abs(o.z-x)>2.4?n.stop={x:v,z:T}:_!==v?n.stop={x:v+Math.sign(_-v)*38,z:x}:T!==x?n.stop={x:v,z:x+Math.sign(T-x)*38}:n.stop={x:_,z:e.z}}let a=ae(o,e),c=n.departing?6:14,l=Math.min(c,a*.85,Math.max(3,ae(o,n.stop)*1.85)),d=du(o,i,s,l),f=!n.departing&&d<2.5?_p(o,i,s,t):null,p=vc(o,f??n.stop,f?4.4:d),m=fu(o,n,n.stop,i,s,t,r,p),h=o.impact>3||Math.abs(o.speed)<1;n.stall=h&&!n.maneuver?n.stall+r:0,xi(o,r,m,t,i)}var Rp="gtbase:progress:1",Ec=(n,e)=>Number.isFinite(n)?Mt(Math.floor(n),0,e):0,jv=["sedan","hatch","wagon","taxi","pickup","van","suv","sport","muscle","luxury","convertible"],Qv=["street","sport","chopper","scooter"];function Ip(n){try{let e=JSON.parse((n??globalThis.localStorage).getItem(Rp));if(!e||e.version!==1||!Number.isFinite(e.cash)||!Number.isFinite(e.ammo)||!Number.isFinite(e.health))return null;let t=e.stash??{},i=e.garage,s=i&&(i.kind==="car"&&jv.includes(i.model)||i.kind==="bike"&&Qv.includes(i.model))&&Number.isInteger(i.color)&&i.color>=0&&i.color<=16777215?{kind:i.kind,model:i.model,color:i.color}:null;return{x:In.x+2.5,z:In.z-2.73,cash:Mt(Math.floor(e.cash),0,999999),armed:e.armed===!0,equipped:e.equipped===!0,ammo:Mt(Math.floor(e.ammo),0,360),rifle:e.rifle===!0,rifleAmmo:Ec(e.rifleAmmo,900),health:Mt(Math.floor(e.health),1,100),look:Wf(e.look),wardrobe:Array.isArray(e.wardrobe)?e.wardrobe.filter(r=>r&&typeof r.label=="string"&&r.changes&&typeof r.changes=="object"):[],stash:{weed:Ec(t.weed,999),coke:Ec(t.coke,999),ecstasy:Ec(t.ecstasy,999)},garage:s,recruits:Array.isArray(e.recruits)?[...new Set(e.recruits.filter(r=>Number.isInteger(r)&&r>=0||typeof r=="string"&&/^[\w:-]{1,80}$/.test(r)))]:[]}}catch{return null}}function Pp(n,e){try{return(e??globalThis.localStorage).setItem(Rp,JSON.stringify({...n,version:1})),!0}catch{return!1}}var Wr=Ve("view"),eM=Ve("menu"),qr=Ve("play"),Xr=Ve("quality"),Ss=Ve("shop"),Lp=180,Dp=260,Ks=36,Cc=90,$s={weed:{name:"maconha",pack:100,retail:34},coke:{name:"p\xF3",pack:300,retail:85},ecstasy:{name:"ecstasy",pack:200,retail:58}};function Rc(n,e){try{return e!==void 0&&localStorage.setItem("gtbase:"+n,e),localStorage.getItem("gtbase:"+n)}catch{return null}}function tM(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,e=new sc({antialias:!n,alpha:!1,powerPreference:"high-performance"});e.toneMapping=Lo,e.toneMappingExposure=1.17,e.shadowMap.type=Fs,Wr.append(e.domElement);let t=new po,i=new Dn(57,1,.12,370),s=op(t),r=s.vehicleSolids,o=Cp(s.vehicleSolids),a=wp(t),c=xp(t),l=u=>u.floorY??s.floorAt(u.x,u.z,0),d=u=>s.walkSolids(u.x,u.z,l(u)),f=()=>[...s.solid,...s.closedDoorSolids()],p=u=>{u.floorY=s.floorAt(u.x,u.z,l(u))},m=u=>l(u)>1.25?[]:z,h={lastHurt:0,...Wo,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,ragdoll:null,model:ys(t,Hs())},v=91,x=u=>{let y=ea[u]?.palette??[11422e3];return v=v*1103515245+12345>>>0,y[v%y.length]},_=[{x:15.75,z:-1.8,angle:Math.PI,model:"sport"},{x:-22.8,z:4,angle:0,model:"pickup"},{x:36,z:15.3,angle:Math.PI/2,model:"luxury"},{x:53.3,z:-36,angle:0,model:"muscle"},{x:-15.9,z:-31,angle:0,model:"convertible"}],T=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033,variant:"sport"},{x:22.85,z:28,angle:0,color:4678008,variant:"chopper"}],R=[..._.map(({model:u})=>ta(t,u,x(u))),...T.map(({color:u,variant:y})=>mc(t,u,y))],M=["sedan","taxi","hatch","scooter","van","suv","wagon","street"],C=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((u,y)=>{let b=M[y],U=y===3||y===7?mc(t,u,b):ta(t,b,x(b));return U.routeIndex=y,U.kind==="bike"&&(U.rider=ys(t,Yo(4e3+y)),U.rider.root.visible=!1),U}),S=[...R,...C],g=new Map,w=Array.from({length:19},(u,y)=>{let b=pi[y%3],U=pi[Math.floor(y/3)%3],I=y>=15?[{x:64,z:-8},{x:71,z:-8},{x:71,z:8},{x:64,z:8}]:[{x:b+12,z:U-12},{x:b+12,z:U+12},{x:b-12,z:U+12},{x:b-12,z:U-12}],A=y%4,se=I[A],ie=I[(A+1)%4],me=(y%3+1)/4,Ne={x:se.x+(ie.x-se.x)*me,z:se.z+(ie.z-se.z)*me,next:(A+1)%4};return pe({...Ne,id:"street:"+y},"civilian",ys(t,Yo(1e3+y)),I)}),F=s.buildings.filter(u=>u.clerk).map((u,y)=>pe({...u.clerk,next:0,id:"clerk:"+u.id,buildingId:u.id},"clerk",ys(t,{...Yo(2e3+y),shirt:"tee"}),[])),N=s.buildings.filter(u=>u.clerk),E=Array.from({length:3},(u,y)=>{let b=ji.z-6.1+y*4.25,U={x:-1.85,z:ji.z+[-.23,-4.4,3.94][y],next:0,id:"officer:"+y,buildingId:"station"},I=pe(U,"police",ys(t,Hf([12157017,8475704,15052936][y%3])),[]),A={x:8.2,z:b,angle:Math.PI/2},se=ta(t,"sedan",3626613,!0);return{officer:I,berth:A,car:se,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,route:[3,6,1][y],beat:y,startShift:[18,40,26][y]}}),z=[...S,...E.map(u=>u.car)],W=new Map,D=Array.from({length:C.length+2},(u,y)=>{let b=pe({x:0,z:0,next:0,id:"driver:"+y},"civilian",ys(t,Yo(3e3+y)),[]);return b.seated=!0,b.model.root.visible=!1,b});C.forEach((u,y)=>{u.kind==="car"&&(u.ownDriver=D[y])});let k=()=>D.find(u=>u.seated&&!u.riding&&!z.some(y=>y.ownDriver===u&&y.driver)),V=u=>u.ownDriver?.seated&&!u.ownDriver.riding?u.ownDriver:k(),B=[...w,...F,...E.map(u=>u.officer),...D],Y=B,G=new Map(B.map(u=>[u.id,u])),K=new Us(1,14),oe=new Jt({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),j=new hn(.27,.115,.38),xe={cash:new $t({color:7838308}),ammo:new $t({color:14395738}),weapon:new $t({color:4805464})},J=[];function pe(u,y,b,U){return{home:u,baseRole:y,role:y,model:b,path:U,...u,pace:1.15+Math.abs(u.z)%4*.11,angle:u.angle??0,floorY:u.y??0,scheduleClock:9+Math.abs(u.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function Ce(u){u.drop&&(t.remove(u.drop),u.drop=null),Object.assign(u,u.home,{role:u.baseRole,health:100,fear:0,down:0,angle:u.home.angle??0,floorY:u.home.y??0,scheduleClock:9+Math.abs(u.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],shoppingTrip:null,commandTarget:null,hopTime:0,stuckTime:0,walkIntent:null,pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1,ragdoll:null}),u.model.root.rotation.set(0,u.angle,0),u.model.shadow.visible=!0,u.model.root.visible=!0,p(u),u.model.root.position.set(u.x,l(u),u.z)}let ge=Ep();Rc("sound")==="off"&&ge.toggle();let Me=new X,He=new X,ot=new X,Ze=new X,ft=new X,wt=new X,Ke=new X,Dt=new X,Wt=new X,Gt=!1,Lt=!1,ne=null,Ue=!1,xt=0,_t=null,lt=0,Z=0,Ft=0,pt=0,zt=0,Le=0,ct=0,Xe=.23,je=0,O=0,P=0,Q=0,ye=!0,de="keyboard",we=Dp,_e=!1,ce=!1,he=0,Re=!1,H="pistol",ue=!1,le=0,Te=0,fe=Hs(),ve={weed:0,coke:0,ecstasy:0},We=null,at=3,be=0,De=null,tt=!1,Ie=0,Tt=0,Ot=null,nn=null,sn=null,wn=null,vi=27,js=0,Tn=null,Hn=0,Xt=[],rn=Ip(),sa=()=>{qr.textContent=rn?"Continuar do save":"Jogar agora"},vn=0,Mi=0,Ii=0,Pi=0,Yr=0,ws=!1,Ts=0,Zr=!1,ra="",ns=0,Li=1,L=0,q=0,te=Ve("map").getContext("2d"),ee=document.createElement("canvas");ee.width=ee.height=256;let $=ee.getContext("2d"),Ae=Ve("atlas"),qe=Ve("atlas-map"),Ee={x:128,z:128},Pe=null,Ye=new It(new Zi(.55),new Jt({color:16362817}));t.add(Ye),Ye.visible=!1;function nt(u,y){Pe={x:(u-128)/1.48,z:(y-128)/1.48},Ye.position.set(Pe.x,On(Pe.x,Pe.z)+2.6,Pe.z),Ye.visible=!0,Ae.close(),Cs.clear()}Ve("mark-lajes").onclick=()=>nt(st(63.6),st(0));function mt(){!Gt||Ss.open||Ae.open||(Ee.x=st(h.x),Ee.z=st(h.z),document.pointerLockElement&&document.exitPointerLock(),Cs.clear(),Ae.showModal())}Ve("open-map").onclick=mt,qe.onclick=u=>{let y=qe.getBoundingClientRect();nt((u.clientX-y.left)*256/y.width,(u.clientY-y.top)*256/y.height)};let ke=[];function yt(){!Gt||Ss.open||Ae.open||(Cs.clear(),document.pointerLockElement&&document.exitPointerLock(),qt.show(()=>({title:"Invent\xE1rio",note:"Carteira R$ "+we+" \xB7 Pistola "+(_e?jt()+" balas":"\u2014")+" \xB7 Fuzil "+(ue?(H==="rifle"?he:Te)+" balas":"\u2014"),sections:[{title:"Garagem",items:De?[{label:aa(De),disabled:!0}]:[]},{title:"Estoque",items:Object.keys($s).map(u=>({label:$s[u].name+" \xD7 "+ve[u],price:0,disabled:!0}))},{title:"Guarda-roupa",items:ke.map(u=>({label:u.label,price:0,buy:()=>Bt(u.changes)}))}]})))}function jt(){return H==="pistol"?he:le}Ve("open-bag").onclick=yt,document.addEventListener("keydown",u=>{u.repeat||(u.code==="KeyM"&&(Ae.open?Ae.close():mt()),u.code==="KeyI"&&yt())});let st=u=>128+u*1.48;$.fillStyle="#1d3433",$.fillRect(0,0,256,256),$.fillStyle="#46605b";for(let u of $n)$.fillRect(st(u)-10,0,20,256),$.fillRect(0,st(u)-10,256,20);$.fillStyle="#826849",$.fillRect(st(62),st(-16),22*1.48,32*1.48),$.fillStyle="#345048";for(let u of s.vehicleSolids)$.fillRect(st(u.x-u.w/2),st(u.z-u.d/2),u.w*1.48,u.d*1.48);$.fillStyle="#6a7859",$.fillRect(st(-10),st(28),38,38),$.fillStyle="#ffe4aa",$.beginPath(),$.arc(st(63.6),st(0),3,0,2*Math.PI),$.fill(),$.textAlign="right",$.font="bold 9px system-ui",$.fillText("Vila das Lajes",st(62),st(-2));function Pt(){let u=Xr.value==="high",y=Xr.value==="low";e.setPixelRatio(Math.min(devicePixelRatio,u?2:y?1:n?1.45:1.5)*(y?.85:Li)),e.setSize(Wr.clientWidth,Wr.clientHeight),e.shadowMap.enabled=!y&&(u||Li>.76),s.sun.shadow.needsUpdate=!0,c.setScale(Wr.clientHeight*e.getPixelRatio()*.92),i.aspect=Wr.clientWidth/Math.max(1,Wr.clientHeight),i.updateProjectionMatrix()}function un(){Ve("sound").textContent=ge.enabled?"Som ligado":"Som desligado",Ve("sound").setAttribute("aria-pressed",String(ge.enabled))}function Ge(u){Ss.open&&Jr(),Gt=u,eM.hidden=u,Ve("hud").hidden=!u,Cs.clear(),u?(ge.start(),Lt||(ct=.32,Xe=.22),Lt=!0,ye=!0,je=performance.now(),Ve("pause").focus({preventScroll:!0}),Ve("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),ge.motor(0,!1),Ve("help").removeAttribute("open"),Ve("title").innerHTML="GT<span>BASE</span>",Ve("intro").textContent="Jogo pausado em Vila Brasa.",qr.textContent="Continuar",Ve("reset").hidden=!1,qr.focus())}function gn(){Du(),ke=[],Pe=null,Ye.visible=!1,ne=null,Ot=null,wn=null,sn=null,nn=null,Xt.length=0,vi=27,we=Dp,_e=!1,ce=!1,he=0,Re=!1,H="pistol",ue=!1,le=0,Te=0,h.model.weapon="pistol",ve.weed=ve.coke=ve.ecstasy=0,We=null,De&&(tt=!0,Pc(De)),lt=Ft=Le=pt=zt=ns=0,xt=0,Ue=!1,_t=null,a.reset(),s.resetDoors(),vn=Mi=Ii=Ie=Tt=0,ws=!1,Ts=0,Zr=!1,ct=.32,Xe=.22,Q=0,Object.assign(h,Wo,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),p(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,Xs(h.model,0,0,!1,!1),R.forEach((y,b)=>{let{x:U,z:I,angle:A}=[..._,...T][b];ii(y,{x:U,z:I,angle:A}),y.stolen=!1,y.body.rotation.z=0,si(y,0)}),g.clear(),C.forEach((y,b)=>{Br(y,b),si(y,0)});for(let y of E)ii(y.car,y.berth),Object.assign(y,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),si(y.car,0);for(let y of B)Ce(y);for(let y of D)y.seated=!0,y.model.root.visible=!1;for(let y of J)t.remove(y.mesh);J.length=0;for(let y of z)y.passengers=[],y.shopping=!1,y.visitTime=-100;s.props.reset(),c.clear(),h.ragdoll=null,s.sun.shadow.needsUpdate=!0,h.deadTime=0,ua(E[0]);let u=N.find(y=>y.kind==="armory")?.entry??Lr;s.marker.position.set(u.x,.02,u.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,P=0}function Fe(u){ra=u,ns=2.4}let ri=()=>{let u=Object.entries($s).filter(([y])=>ve[y]>0).map(([y,b])=>b.name+" "+ve[y]);return u.length?u.join(" \xB7 "):""},qt=ap(Ss,{balance:()=>"Saldo: R$ "+we.toLocaleString("pt-BR")+(ri()?" \xB7 "+ri():"")+(_e||ue?" \xB7 Balas: "+[_e?"pistola "+(H==="pistol"?he:le):"",ue?"fuzil "+(H==="rifle"?he:Te):""].filter(Boolean).join(", "):""),onClose:()=>{Cs.clear(),P=0}});function Qt(u){return we<u?"Saldo insuficiente.":(we-=u,ge.bell(),null)}function Pn(u){H==="rifle"?Te=he:le=he,u==="fists"?ce=!1:(ce=!0,H=u),he=H==="rifle"?Te:le,h.model.weapon=H,Tn=null,Hn=0}function Di(){let u=["fists",..._e?["pistol"]:[],...ue?["rifle"]:[]],y=ce?H:"fists";Pn(u[(u.indexOf(y)+1)%u.length])}function ut(u,y){H===u?he=Math.min(900,he+y):u==="rifle"?Te=Math.min(900,Te+y):le=Math.min(360,le+y)}function ln(u,y){let b=u.model,U=ys(t,y);U.root.position.copy(b.root.position),U.root.quaternion.copy(b.root.quaternion),U.root.visible=b.root.visible,U.weapon=b.weapon,t.remove(b.root),b.root.traverse(I=>{I instanceof It&&I!==b.shadow&&I.geometry.dispose()}),u.model=U}function Bt(u){let y=Object.keys(u)[0];if(["shirt","legs","shoes","glasses","chain","earrings","watch","ring"].includes(y)&&!ke.some(b=>JSON.stringify(b.changes)===JSON.stringify(u))){let b={shirt:"Blusa",legs:"Cal\xE7a / bermuda",shoes:"Cal\xE7ado",glasses:"\xD3culos",chain:"Corrente",earrings:"Brinco",watch:"Rel\xF3gio",ring:"Anel"};ke.push({label:b[y]+" \xB7 "+({tee:"camiseta",tank:"regata",dress:"social",none:"sem",pants:"cal\xE7a",shorts:"bermuda",flipflops:"chinelo",sneakers:"t\xEAnis",gold:"ouro",silver:"prata",diamond:"diamante",true:"com",false:"sem"}[String(u[y])]??String(u[y]))+(u[y+"Color"]?" #"+u[y+"Color"].toString(16):""),changes:u})}return fe={...fe,...u},ln(h,fe),null}let kt=eu,on=[3553348,2373199,5917242,2894892,8221798,11049860,15262678],jn=[15789282,2236962,9056042,2969482,14725949,3107660];function Wn(u,y,b,U){let I=fe[y]===b;return{label:I?u+" (tirar)":u,price:I?0:U,active:I,buy:()=>I?Bt({[y]:typeof b=="boolean"?!1:"none"}):Qt(U)??Bt({[y]:b})}}function Np(u){return u==="store"?{title:"Balc\xE3o de comida",sections:[{title:"Card\xE1pio",items:[{label:"Lanche (+30 de vida)",price:15,disabled:h.health>=100,buy:()=>{let y=Qt(15);return y||(h.health=Math.min(100,h.health+30),null)}}]}]}:u==="armory"?{title:"Loja de armas",note:"Pistola e muni\xE7\xE3o dentro da lei, mais ou menos.",sections:[{title:"Armas",items:[{label:"Pistola + "+Ks+" balas",price:Lp,disabled:_e,detail:_e?"Voc\xEA j\xE1 tem uma pistola.":"",buy:()=>Qt(Lp)??(_e=!0,ut("pistol",Ks),Pn("pistol"),Fe("Pistola comprada."),null)},{label:"Repor muni\xE7\xE3o da pistola",price:0,disabled:!_e||(H==="pistol"?he:le)>=Ks,detail:"Completa at\xE9 "+Ks+" balas.",buy:()=>(ut("pistol",Ks-(H==="pistol"?he:le)),null)}]}]}:u==="black"?{title:"Penhores 24h \xB7 fundos",note:"Mercado negro. Pagamento na hora, sem nota fiscal.",sections:[{title:"Armas",items:[{label:"Fuzil + "+Cc+" balas",price:1200,disabled:ue,detail:ue?"Voc\xEA j\xE1 tem um fuzil.":"Rajada r\xE1pida e dano alto.",buy:()=>Qt(1200)??(ue=!0,ut("rifle",Cc),Pn("rifle"),Fe("Fuzil comprado."),null)},{label:"Muni\xE7\xE3o de fuzil ("+Cc+")",price:150,disabled:!ue,buy:()=>Qt(150)??(ut("rifle",Cc),null)},{label:"Pistola + "+Ks+" balas",price:220,disabled:_e,buy:()=>Qt(220)??(_e=!0,ut("pistol",Ks),Pn("pistol"),null)}]},{title:"Drogas no atacado (10 unidades)",items:Object.entries($s).map(([y,b])=>({label:b.name[0].toUpperCase()+b.name.slice(1)+" \xB7 estoque "+ve[y],price:b.pack,detail:"Venda no varejo por R$ "+b.retail+" a unidade.",buy:()=>Qt(b.pack)??(ve[y]+=10,null)}))}]}:u==="clothes"?{title:"Moda Brasa",note:"Escolha a pe\xE7a e toque em uma cor.",sections:[{title:"Parte de cima",items:[{label:"Camiseta",price:60,active:fe.shirt==="tee",colors:kt,buy:y=>Qt(60)??Bt({shirt:"tee",shirtColor:y??fe.shirtColor})},{label:"Regata",price:45,active:fe.shirt==="tank",colors:kt,buy:y=>Qt(45)??Bt({shirt:"tank",shirtColor:y??fe.shirtColor})},{label:"Camisa social",price:120,active:fe.shirt==="dress",colors:kt,buy:y=>Qt(120)??Bt({shirt:"dress",shirtColor:y??fe.shirtColor})},{label:"Sem camisa",price:0,active:fe.shirt==="none",buy:()=>Bt({shirt:"none"})}]},{title:"Parte de baixo",items:[{label:"Cal\xE7a",price:90,active:fe.legs==="pants",colors:on,buy:y=>Qt(90)??Bt({legs:"pants",legColor:y??fe.legColor})},{label:"Bermuda",price:60,active:fe.legs==="shorts",colors:on,buy:y=>Qt(60)??Bt({legs:"shorts",legColor:y??fe.legColor})}]},{title:"Cal\xE7ados",items:[{label:"T\xEAnis",price:150,active:fe.shoes==="sneakers",colors:jn,buy:y=>Qt(150)??Bt({shoes:"sneakers",shoeColor:y??fe.shoeColor})},{label:"Chinelo",price:25,active:fe.shoes==="flipflops",colors:jn,buy:y=>Qt(25)??Bt({shoes:"flipflops",shoeColor:y??fe.shoeColor})},{label:"Sapato social",price:180,active:fe.shoes==="dress",buy:()=>Qt(180)??Bt({shoes:"dress"})}]},{title:"Acess\xF3rios",items:[Wn("\xD3culos escuros","glasses",!0,80),Wn("Corrente de prata","chain","silver",250),Wn("Corrente de ouro","chain","gold",900),Wn("Brincos de prata","earrings","silver",120),Wn("Brincos de ouro","earrings","gold",400),Wn("Brincos de diamante","earrings","diamond",1500),Wn("Rel\xF3gio de prata","watch","silver",300),Wn("Rel\xF3gio de ouro","watch","gold",1100),Wn("Anel de prata","ring","silver",150),Wn("Anel de ouro","ring","gold",500)]}]}:u==="barber"?{title:"Barbearia do Z\xE9",note:"Corte e barba. Toque em uma cor para pintar.",sections:[{title:"Pele",items:[{label:"Tom de pele",price:0,colors:nu,buy:y=>Bt({skin:y??fe.skin})}]},{title:"Cabelo",items:Object.entries(jh).map(([y,b])=>({label:b,price:y==="cap"?50:40,active:fe.hair===y,colors:y==="bald"?void 0:y==="cap"?[1522486,9056042,2236962,2772879,14725949,15789282]:tu,buy:U=>Qt(y==="cap"?50:40)??Bt(y==="cap"?{hair:y,capColor:U??fe.capColor}:{hair:y,hairColor:U??fe.hairColor})}))},{title:"Barba",items:Object.entries(Qh).map(([y,b])=>({label:b,price:y==="none"?15:25,active:fe.beard===y,buy:()=>Qt(y==="none"?15:25)??Bt({beard:y})}))}]}:{title:"Loja",sections:[]}}function Up(u){Cs.clear(),document.pointerLockElement&&document.exitPointerLock(),qt.show(()=>Np(u.service))}function Jr(){qt.close()}function oa(u){let y={...u,ground:z.includes(u)?u.root.position.y:l(u),angle:u.angle},b=f();return E.some(U=>{let{officer:I,car:A,mode:se}=U;return I.health<=0?!1:I.seated&&["driving","patrol","returning"].includes(se)?Gr({...A,ground:A.root.position.y},y,b,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Gr({...I,ground:l(I)},y,b,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function bu(u,y){if(y<12||Y.some(A=>A.calling))return;let b=f(),U={...u,ground:l(u)},I=Y.find(A=>["civilian","clerk"].includes(A.role)&&en(A)&&!A.buyer&&!(A.brawl>0)&&ae(A,u)<24&&ae(A,u)>2&&Gr({...A,ground:l(A)},U,b,{range:24,fov:Math.PI*1.3,eye:1.6,aim:1.1}));I&&(I.calling={time:3.6,pressure:y,x:u.x,z:u.z})}function As(u,y=ne??h,b=oa(y)){if(!b)return bu(y,u),!1;let U=Tc(lt);return lt=Math.min(64,Math.max(lt+(lt>0?u*.52:0),u)),Ue=!0,xt=.24,_t={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle},U||Fe("Crime visto pela pol\xEDcia."),!0}let Su=()=>ne||l(h)>=1?null:N.find(u=>s.interiorAt(h.x,h.z,l(h))?.buildingId===u.id&&ae(h,u.clerk)<3)??null,Fp={store:"Comprar comida",armory:"Abrir loja de armas",clothes:"Ver roupas",barber:"Cortar cabelo",black:"Negociar nos fundos"},wu=()=>De&&tt&&!ne&&ae(h,Vs.door)<2.6,Ic=()=>ne&&ne!==zp().find(u=>u===ne)&&ae(ne,Vs.door)<3.4&&Math.hypot(ne.vx,ne.vz)<2,Tu=()=>!ne&&ae(h,{x:In.x,z:In.z+6.25})<1.7,Au=()=>z,en=u=>u&&u.health>0&&!u.seated,aa=u=>(u.kind==="bike"?"Moto ":"")+(u.spec?.name??"Carro"),Eu=()=>!ne&&s.doors.find(u=>u.private&&!u.breached&&!u.opened&&Math.abs(u.base-l(h))<.85&&ae(u,h)<1.62);function Cu(){if(l(h)>1.02)return null;let u=null,y=1/0;for(let b of S){let U=ae(h,b),I=b.kind==="bike"?3:Math.max(3,b.halfLength+.6);U>=I||U>=y||b.integrity<=0||b.wrecked||b.burning||Math.abs(b.speed)>3.4||(u=b,y=U)}return u}function Ni(u=!1){if(!ne)return;let{angle:y,x:b,z:U}=ne;if(!u&&Math.hypot(ne.vx,ne.vz)>4.2){Fe("Reduza a velocidade para sair.");return}let I=ne.kind==="bike"?1.02:ne.halfWidth+.67,A=ne.kind==="bike"?1.75:ne.halfLength+.65,se=[I,-I,I+.53,-I-.53].map(me=>[b+Math.cos(y)*me,U-Math.sin(y)*me]);se.push([b-Math.sin(y)*A,U-Math.cos(y)*A],[b+Math.sin(y)*A,U+Math.cos(y)*A]);let ie=se.find(([me,Ne])=>_i({x:me,z:Ne},me,Ne,s.walkSolids(me,Ne,0),z,Y,.36));if(!ie&&!u){Fe("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=ie??[Wo.x,Wo.z],h.floorY=0,p(h);for(let me of[...ne.passengers??[]])tr(me);h.angle=y,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),Du(),ne.abandoned=0,ne=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,y,0),Xs(h.model,0,0,!1,ce)}function Ru(){H==="rifle"?Te=he:le=he;let u={wardrobe:ke,health:h.health,cash:we,armed:_e,equipped:ce,ammo:le,rifle:ue,rifleAmmo:Te,look:fe,stash:{...ve},garage:De?{kind:De.kind,model:De.model,color:De.color}:null,recruits:Xt.map(y=>y.id)};return Pp(u)}let zp=()=>E.map(u=>u.car);function Iu(u,y,b){return De&&(t.remove(De.root),z.splice(z.indexOf(De),1),S.splice(S.indexOf(De),1)),De=u==="bike"?mc(t,b,y):ta(t,y,b),De.stolen=!0,z.push(De),S.push(De),De}function Pc(u){ii(u,Vs.inside),u.root.visible=!1,si(u,0)}function Op(u){let y=u.kind,b=u.model,U=u.color;if(Ni(!0),u!==De){let I=R.indexOf(u);if(I>=0){let{x:A,z:se,angle:ie}=[..._,...T][I];ii(u,{x:A,z:se,angle:ie}),u.stolen=!1,si(u,0)}else u.routeIndex>=0&&(Br(u,u.routeIndex),si(u,0));Iu(y,b,U)}tt=!0,Pc(De),Object.assign(h,{x:Vs.door.x-1.6,z:Vs.door.z+1.4,floorY:0}),p(h),Ru(),Fe("Ve\xEDculo guardado na garagem e salvo."),ge.bell()}function Bp(){De&&(tt=!1,ii(De,Vs.out),De.root.visible=!0,si(De,0),Lc(De),Fe("Ve\xEDculo retirado da garagem."))}function kp(){Ni(!0),Object.assign(h,{x:In.x,z:In.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0,ragdoll:null}),p(h),Ie=0,lt=0,Tt=0,ct=-Math.PI/2,ye=!0,Fe("Voc\xEA voltou para casa.")}function Gp(){if(Ot||h.health<=0)return;if(ne&&!Ic()){Ni();return}let u=Su();if(u){Up(u);return}if(Ic()){Op(ne);return}if(wu()){Bp();return}if(Tu()){Fe(Ru()?"Progresso salvo na porta de casa.":"O navegador bloqueou o salvamento."),ge.bell();return}let y=Cu();if(!y){Fe(Eu()?"Porta trancada.":"Nada para interagir aqui.");return}if(y.driver){let b=V(y)??D.find(U=>U.exitAge>14&&U.role==="civilian"&&ae(U,h)>11);if(b){let U=y.angle+(y.kind==="bike"?-1:1)*Math.PI/2,I=y.x+Math.sin(U)*(y.kind==="bike"?.95:1.51),A=y.z+Math.cos(U)*(y.kind==="bike"?.95:1.51),se=_i({x:I,z:A},I,A,s.walkSolids(I,A,0),z,Y,.29)?{x:I,z:A}:{x:h.x,z:h.z};Ce(b),Object.assign(b,se,{angle:U,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),Math.random()<.35&&(b.fear=0,b.brawl=9,b.attack=1.2),y.rider&&(y.rider.root.visible=!1)}y.driver=null,y.vx=y.vz=y.speed=0,y.doorTime=.65,Ot={car:y,delay:.46},Fe(y.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else Lc(y)}function Lc(u){if(!(u.burning||u.wrecked||u.integrity<=0)){if(ne=u,u.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),Ie=0,h.model.root.visible=!0,h.model.shadow.visible=!1,u.stolen||(u.stolen=!0,As(13)),u.passengers??=[],u.kind==="car"){let y=u.spec.seats;Xt.filter(U=>en(U)&&ae(U,u)<35&&U.order!=="dealer").sort((U,I)=>ae(U,u)-ae(I,u)).slice(0,Math.max(0,y.length-1-u.passengers.length)).forEach((U,I)=>{let A=y[Math.min(y.length-1,1+I+u.passengers.length)];U.boardCar=u,U.boardRow=A[1],U.boardSide=Math.sign(A[0])||1})}ct=u.angle,Q=0,ye=!0}}function Dc(u,y,b){let U=new It(j,xe[u]),I=l(y)+.13;U.position.set(y.x+.22,I,y.z+.19),t.add(U),J.push({mesh:U,kind:u,count:b,y:I,wait:.32,left:105})}function Vp(u){for(let y=J.length-1;y>=0;y--){let b=J[y];b.left-=u,b.wait-=u,b.mesh.rotation.y+=u*2.1,b.mesh.position.y=b.y+Math.sin(b.left*3.8)*.08;let U=!ne&&h.health>0&&b.wait<0&&Math.abs(l(h)-b.y)<.65&&Math.hypot(h.x-b.mesh.position.x,h.z-b.mesh.position.z)<1.03;U&&(b.kind==="cash"?(we+=b.count,Fe("R$ "+b.count+" recolhidos.")):!_e&&b.kind==="weapon"?(_e=!0,ut("pistol",b.count),Pn("pistol"),Fe("Pistola recolhida.")):(ut("pistol",b.count),Fe("+"+b.count+" balas de pistola.")),ge.bell()),(U||b.left<=0)&&(t.remove(b.mesh),J.splice(y,1))}}function Xn(u,y,b=null){if(u.health<=0||y<=0)return;if(u.health=Math.max(0,u.health-y),u===h&&(h.lastHurt=O),c.blood(u.x,l(u)+1.1,u.z),u.health<=0){let A=b?u.x-b.x:u.pushX,se=b?u.z-b.z:u.pushZ;if(u.fallDir=Math.sin(u.angle)*A+Math.cos(u.angle)*se>0?1:-1,u.deadTime=0,b&&u!==h){let ie=Math.max(.1,Math.hypot(A,se));u.pushX+=A/ie*1.3,u.pushZ+=se/ie*1.3}}if(u===h){Ii=.22,b&&Hp(b),u.health<=0&&(Ni(!0),Tt=3,Fe("Voc\xEA caiu. Voltando para casa\u2026"));return}if(u.stagger=.32,u.fear=u.brawl>0?0:6,u.calling=null,u.buyer=null,u.surrender=0,sn?.npc===u&&(sn=null),u.health>0)return;nn===u&&(nn=null),u.down=u.role==="police"?28:19,u.model.shadow.visible=!1;let U=new It(K,oe);U.position.set(u.x+Math.sin(u.angle)*u.fallDir*1,l(u)+.019,u.z+Math.cos(u.angle)*u.fallDir*1),U.rotation.x=-Math.PI/2,U.scale.set(.52,.32,1),t.add(U),u.drop=U,u.role==="police"?Dc(_e?"ammo":"weapon",u,12):u.role!=="ally"&&!u.robbed&&Dc("cash",u,24+Math.floor(Math.abs(u.z)%27)),wn===u&&(wn=null,vi=29);let I=Xt.indexOf(u);I>=0&&Xt.splice(I,1)}function Hp(u){let y=Math.atan2(u.x-h.x,u.z-h.z)-ct,b=document.createElement("div");b.className="hurt",b.style.transform="rotate("+-y+"rad)",Ve("damage-dir").append(b),window.setTimeout(()=>b.remove(),1100)}function la(u){return[...Y,h].filter(b=>b!==u&&en(b)&&!(b===h&&ne&&ne.kind==="car")).map(b=>{let U=l(b)+(b===h?h.lift:0);return{actor:b,y:U,bounds:[b.x-.31,U+.1,b.z-.31,b.x+.31,U+1.9,b.z+.31]}})}function Wp(){i.getWorldDirection(wt);let u=la(h),y=f(),b=na(i.position.toArray(),wt.toArray(),y,u,28).hit,U=[h.x,l(h)+1.38+h.lift,h.z];if(b&&ae(h,b.actor)<24&&kr(U,[b.actor.x,b.y+1.25,b.actor.z],y))return b.actor;let I=.15,A=null;for(let{actor:ie,y:me}of u){if(ae(h,ie)>18)continue;Ze.set(ie.x,me+1.25,ie.z).project(i);let Ne=Math.hypot(Ze.x,Ze.y);Ze.z>=1||Ne>=I||!kr(U,[ie.x,me+1.25,ie.z],y)||(I=Ne,A=ie)}if(A)return A;let se=z.filter(ie=>ie!==ne&&ie.integrity>0&&ae(h,ie)<32).map(ie=>({car:ie,oriented:{center:[ie.x,ie.root.position.y+.8,ie.z],half:ie.kind==="bike"?[.4,.75,1.1]:[ie.halfWidth+.05,.75,ie.halfLength],angle:ie.angle}}));return na(i.position.toArray(),wt.toArray(),y,se,34).hit?.car??null}let Qs=u=>E.find(y=>y.car===u),Pu=u=>z.includes(u);function Nc(u){if(u===ne||u.driver||Ln.has(u)&&u.passengers?.length)return!0;let y=Qs(u);return!!(y&&y.officer.seated&&y.officer.health>0&&["driving","patrol"].includes(y.mode))}let er=u=>!!u&&(Pu(u)?u!==ne&&u.integrity>0&&Nc(u):en(u));function Ui(u){if(u){if(Pu(u)){u!==ne&&u.integrity>0&&Nc(u)&&(nn=u);return}u.role!=="ally"&&u.health>0&&(nn=u)}}function Es(u,y,b){let U=Qs(u),I=U&&U.officer.seated&&["driving","patrol"].includes(U.mode)?U:null,A=I?.officer??(u.driver?V(u):null);if(!A)return!1;I||Ce(A);let se=u.angle+(u.kind==="bike"?-1:1)*Math.PI/2,ie=u.kind==="bike"?.95:u.halfWidth+.6;return Object.assign(A,{seated:!1,x:u.x+Math.sin(se)*ie,z:u.z+Math.cos(se)*ie,fear:6,exitAge:0,floorY:0}),A.model.root.visible=!0,A.model.shadow.visible=!0,u.driver=null,u.vx*=.45,u.vz*=.45,u.speed*=.45,u.rider&&(u.rider.root.visible=!1),I&&(I.mode="foot"),Xn(A,y,b),!0}function Lu(u,y){if(!y||!u.flat)return!1;let b=Math.sin(u.angle),U=Math.cos(u.angle),I=y[0]-u.x,A=y[2]-u.z,se=I*U-A*b,ie=I*b+A*U,me=y[1]-u.root.position.y,Ne=!1;return u.wheels.forEach((Be,et)=>{!u.flat[et]&&me<u.wheelRadius*2+.1&&Math.hypot(se-Be.position.x,ie-Be.position.z)<u.wheelRadius+.2&&(u.flat[et]=!0,Ne=!0)}),Ne}function Xp(u,y,b,U){if(u.lastHitBy=b,y<u.wheelRadius*2&&Lu(u,U)){u===ne&&Fe("Pneu furado.");return}if(U&&c.sparks(U[0],U[1],U[2],4,2),u.kind==="bike"){if(y>.85||Math.random()<.45){u===ne?(Xn(h,14,b),h.health>0&&Math.random()<.3&&(Ni(!0),h.trip=.6,Fe("Voc\xC3\xAA caiu da moto."))):Es(u,40,b);return}u.integrity=Math.max(0,u.integrity-4);return}if(y>.92){if(uu(u,U),u===ne){let I=(u.passengers??[]).filter(se=>se.health>0),A=I.length&&Math.random()<I.length/(I.length+1.6)?I[Math.floor(Math.random()*I.length)]:h;Xn(A,A===h?16:24,b),A===h&&Fe("Tiro atravessou o vidro.")}else Es(u,38+Math.round(Math.random()*30),b);return}u.integrity=Math.max(0,u.integrity-3)}function qp(u,y){let b=Math.sin(u.angle),U=Math.cos(u.angle),I=y.boardRow??-1,A=u.halfWidth+.55;for(let se of[y.boardSide??1,-(y.boardSide??1)]){let ie={x:u.x+U*se*A+b*I,z:u.z-b*se*A+U*I};if(_i(y,ie.x,ie.z,s.walkSolids(ie.x,ie.z,0),[],[],.3))return ie}return{x:u.x-b*(u.halfLength+.7),z:u.z-U*(u.halfLength+.7)}}let Ln=new Map;function Yp(u){let y=S.filter(U=>U.kind==="car"&&U!==ne&&!U.burning&&!U.wrecked&&U.integrity>12&&Math.abs(U.speed)<3&&(!tt||U!==De)&&!U.shopping&&(U.passengers?.length??0)+Xt.filter(I=>I.boardCar===U).length<U.spec.seats.length);y.sort((U,I)=>ae(u,U)-ae(u,I));let b=y[0];b&&(Ln.has(b)||Ln.set(b,{car:b,stall:0}),u.boardCar=b,u.boardSide=Math.sign(b.spec.seats[0][0]),u.boardRow=b.spec.seats[0][1],b.passengers??=[])}function Du(){for(let u of Ln.keys()){for(let y of[...u.passengers??[]])tr(y);for(let y of Xt)y.boardCar===u&&(y.boardCar=null);u.speed=u.vx=u.vz=0}Ln.clear()}function Zp(u,y){let b=u.boardCar;if(!ne||ne!==b&&!Ln.has(b)||b.burning||b.integrity<=0||(b.passengers?.length??0)>=b.spec.seats.length-(b===ne?1:0))return u.boardCar=null,0;if(Math.hypot(b.vx,b.vz)>2.5){let Se=Bu(b,Xt.indexOf(u));return ae(Se,u)>1.25?Uc(u,Se,6.1,y):0}let U=qp(b,u),I=Math.sin(b.angle),A=Math.cos(b.angle),se=u.x-b.x,ie=u.z-b.z,me=se*I+ie*A,Ne=se*A-ie*I,Be=(U.x-b.x)*A-(U.z-b.z)*I;if(ae(u,U)<.75||ae(u,b)<b.halfWidth+.9||Math.abs(Ne)>b.halfWidth+.2&&Math.abs(Ne)<b.halfWidth+1&&Math.abs(me)<b.halfLength-.55)return u.seated=!0,u.riding=b,u.boardCar=null,u.model.root.visible=!1,Ln.has(b)&&b.driver&&Es(b,0,u),b.passengers.push(u),b.doorTime=.6,0;if(Math.abs(Ne)>=b.halfWidth+.45)return u.boardSide=Math.sign(Ne),Mn(u,U,4.8,y);let et=Math.sign(Be)||1,Je=(Math.sign(me)||1)*Math.max(b.halfLength+.65,Math.abs(me)),Oe=b.halfWidth+.68;return Mn(u,{x:b.x+I*Je+A*et*Oe,z:b.z+A*Je-I*et*Oe},4.8,y)}function tr(u){let y=u.riding;if(u.riding=null,u.boardCar=null,!y)return;y.passengers=(y.passengers??[]).filter(me=>me!==u);let b=Math.sin(y.angle),U=Math.cos(y.angle),I=y.halfWidth+.62,A=y.halfLength+.9,se=[[I,-1],[-I,-1],[I,.6],[-I,.6],[0,-A],[I+.7,0],[-I-.7,0],[0,A]].map(([me,Ne])=>({x:y.x+U*me+b*Ne,z:y.z-b*me+U*Ne})),ie=se.find(me=>_i(u,me.x,me.z,s.walkSolids(me.x,me.z,0),z.filter(Ne=>Ne!==y),Y,.3))??se[0];Object.assign(u,ie,{seated:!1,floorY:0,angle:y.angle,exitAnim:.3,exitSide:1}),p(u),u.model.root.visible=!0,u.model.shadow.visible=!0}function Nu(u){for(let y of z){if(y.kind!=="car")continue;let b=y===ne||ae(y,u)<40,U=Qs(y),I=U&&U.officer.seated&&U.officer.health>0&&["driving","patrol"].includes(U.mode)?U.officer:null,A=y.ownDriver?.seated&&y.driver&&y!==ne?y.ownDriver:null,se=y===ne?h:I??A;(Ln.has(y)&&y.passengers?.length?y.passengers:[se,...y.passengers??[]]).forEach((ie,me)=>{ie&&(b?pp(ie.model,y,me):ie.model.root.visible=!1)})}}function Jp(u){for(let y of Xt){if(!y.riding)continue;let b=y.riding;if(!ne||ne!==b&&!Ln.has(b)||y.health<=0){tr(y);continue}y.x=b.x,y.z=b.z,y.floorY=0,y.attack-=u;let U=er(y.commandTarget)?y.commandTarget:nn;er(U)&&y.attack<=0&&ae(b,U)<18&&Fu(y,U)}}function Kp(u,y){let b=f(),U={...u,ground:l(u)};for(let I of E){let A=I.officer;en(A)&&(A===y||Gr({...A,ground:l(A)},U,b,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(I.retaliation=u)}}function $p(u){if(!u||!["civilian","resident"].includes(u.role)||u.health<=0){Fe("Mire em um pedestre dispon\xEDvel para recrutar.");return}u.role="ally",u.order="follow",u.surrender=0,u.fear=0,u.route=[],Xt.push(u),sn?.npc===u&&(sn=null),Fe("Guarda-costas recrutado."),ge.bell()}function jp(u,y){if(h.health<=0||!y||!["civilian","resident","clerk"].includes(y.role)||y.robbed||ae(h,y)>9||Math.abs(l(h)-l(y))>.65){sn&&(sn.npc.surrender=0,sn=null);return}let b=h.x-y.x,U=h.z-y.z,I=Math.sin(y.angle)*b+Math.cos(y.angle)*U;if(sn?.npc!==y){if(sn&&(sn.npc.surrender=0),sn=null,I<Math.hypot(b,U)*.3||y.stagger>0||y.fear>0)return;sn={npc:y,left:5}}y.surrender=1,y.angle=Math.atan2(b,U),sn.left-=u,sn.left<=0&&(y.robbed=!0,y.surrender=0,y.fear=7,Dc("cash",y,(y.role==="clerk"?104:38)+Math.floor(Math.abs(y.z)%31)),As(15),Fe(y.role==="clerk"?"Dinheiro da loja no ch\xE3o.":"Dinheiro no ch\xE3o."),sn=null)}function Qp(){h.ragdoll||vn>0||h.health<=0||h.trip>.15||Ot||(h.angle=ct,Yr=1-Yr,h.pushX+=Math.sin(ct)*1.5,h.pushZ+=Math.cos(ct)*1.5,vn=Hr,ws=!0,Ts=Js,Ui(Tn),ge.punch(!1))}function em(){if(ws=!1,h.health<=0||ne)return;let u=Sp(h,Y.filter(I=>en(I)&&I.role!=="ally"&&Math.abs(l(h)-l(I))<.73),l(h)+h.lift,f());if(!u)return;Ui(u),ge.punch(!0);let y=u.x-h.x,b=u.z-h.z,U=Math.max(.2,Math.hypot(y,b));u.pushX=y/U*3.6,u.pushZ=b/U*3.6,Xn(u,18,h),u.role==="civilian"&&u.health>0&&!(u.brawl>0)&&Math.random()<(u.model.root.scale.x>1.05?.6:.32)&&(u.brawl=10,u.fear=0,u.attack=.4,Ui(u),Fe("Ele vai revidar!")),Mi=.19,As(u.role==="police"?28:12),Fe(u.health<=0?"Pedestre derrubado.":"Soco acertou.")}function tm(u){if(h.ragdoll||vn>0||Ft>0||h.health<=0||!_e||!ce)return;if(he<=0){u&&Ui(Tn),Ft=.32,Fe("Sem balas. Reponha na loja.");return}let y=oa(h),b=H==="rifle";he--,Ft=b?.11:.52,Le=.095,h.angle=ct,h.model.root.rotation.y=ct,Xs(h.model,0,0,!0,!0,0,u?Xe:Xe-.22),(b?h.model.rifleMuzzle:h.model.muzzle).getWorldPosition(ft),b?ge.rifle():ge.shot();let U=la(h),I=z.map(Se=>{let ht=Se.root.position.y,St=Se.kind==="bike",Kt=St?0:.1,dn=St?0:Se.spec.belt;return{car:Se,oriented:{center:[Se.x,ht+(St?.67:(Kt+dn)/2),Se.z],half:St?[.31,.44,1.08]:[Se.halfWidth-.01,(dn-Kt)/2,Se.halfLength-.05],angle:Se.angle}}});i.getWorldDirection(wt);let A=z.filter(Se=>Se.rider&&Se.driver).map(Se=>({rider:Se,oriented:{center:[Se.x,Se.root.position.y+1.42,Se.z],half:[.32,.45,.33],angle:Se.angle}})),se=z.filter(Se=>Se.cabin&&Se!==ne).map(Se=>{let ht=mp(Se);return{windowCar:Se,oriented:{center:[Se.x+ht.z*Math.sin(Se.angle),Se.root.position.y+ht.y,Se.z+ht.z*Math.cos(Se.angle)],half:[ht.halfX,ht.halfY,ht.halfZ],angle:Se.angle}}}),ie=f(),me=[...U,...A,...se,...I],Ne=ft.toArray(),Be=bp(i.position.toArray(),wt.toArray(),Ne,ie,me,{ground:On}),et=Be.impact,re=et.hit,Je=s.doors.find(Se=>Se.private&&!Se.breached&&et.solid===Se.closedSolid&&Math.hypot(et.point[0]-Se.handle.x,et.point[1]-Se.handle.y,et.point[2]-Se.handle.z)<.28),Oe=17;if(Je&&s.breachDoor(Je.id))Oe=23,Fe("Fechadura rompida.");else if(re?.actor&&re.actor.role!=="ally")Ui(re.actor),Xn(re.actor,Math.round(yu(et.point[1]-re.y)*(b?1.45:1)),h),Oe=re.actor.role==="police"?34:23,Mi=.21,Fe(re.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(re?.rider||re?.windowCar){let Se=re.rider??re.windowCar;Ui(Se),re.windowCar&&uu(Se,et.point);let[ht,St]=Se.spec.seats?.[0]??[-.42,0],Kt={oriented:{center:[Se.x+ht*Math.cos(Se.angle)+St*Math.sin(Se.angle),Se.root.position.y+(Se.seatHip??.54)+.66,Se.z-ht*Math.sin(Se.angle)+St*Math.cos(Se.angle)],half:[.26,.28,.29],angle:Se.angle}};Nc(Se)&&(re.rider||na(Ne,Be.direction,[],[Kt],52).hit)&&Es(Se,re.rider?b?75:50:100,h)&&(Mi=.21)}else re?.car?(Ui(re.car),re.car.lastHitBy=h,c.sparks(et.point[0],et.point[1],et.point[2],5,2.2),Lu(re.car,et.point)?Fe("Pneu furado."):re.car.integrity=Math.max(0,re.car.integrity-3),Mi=.16):u&&Ui(Tn);As(Oe,h,y);for(let Se of Y)["civilian","resident"].includes(Se.role)&&ae(Se,h)<17&&(Se.fear=Math.max(Se.fear,4.8));a.emit(Ne,et,{mark:re?.car?!0:void 0,attach:re?.car?.root})}function nm(u,y){let b=ne;xi(b,u,{throttle:y.y,steer:-y.x,brake:y.brake},r,Au()),Q>1.15&&Math.abs(b.speed)>2.4&&(ct=Vn(ct,b.angle,u*2.3))}function im(u,y){if(h.ragdoll&&(xc(h,u,l(h),(Ne,Be)=>!zn(Ne,Be,.25,d(h))),h.ragdoll||h.health<=0))return;let b=Math.min(1,Math.hypot(y.x,y.y)),U=h.health>0&&!Ot&&h.trip<.12,I=U?b*(y.aim?2.1:y.run?7.4:4.2):0,A=ct+Math.atan2(-y.x,y.y||0);y.jump&&U&&h.lift===0&&(Ie=4.18),(Ie!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+Ie*u-11.8*u*u),Ie=h.lift>0?Ie-23.6*u:0);let se=1-Math.exp(-u*(I>.02?19:27));h.vx+=(Math.sin(A)*I-h.vx)*se,h.vz+=(Math.cos(A)*I-h.vz)*se;let ie=$o(h,(h.vx+h.pushX)*u,(h.vz+h.pushZ)*u,d(h),m(h),Y);h.pushX*=Math.exp(-u*6.2),h.pushZ*=Math.exp(-u*6.2),h.trip=Math.max(0,h.trip-u),vn<=0&&U&&(y.aim||b>.05)&&(h.angle=Vn(h.angle,y.aim?ct:A,u*11));let me=h.model;if(p(h),me.root.position.set(h.x,l(h)+h.lift,h.z),me.shadow.visible=h.health>0&&h.lift<.06,h.health<=0){h.deadTime=(h.deadTime??0)+u;let Ne=Zo(me,h.deadTime,-1);me.root.rotation.set(Ne,h.angle,0),me.root.position.y+=Math.abs(Math.sin(Ne))*.31;return}me.root.rotation.set(Math.min(1.25,h.trip*2.7),h.angle,0),Xs(me,u,h.trip>.05?0:Math.min(7.5,ie/u),ce&&(y.aim||Le>0)&&vn<=0,ce&&vn<=0,0,y.aim?Xe:0),(vn>0||y.aim&&!ce)&&_u(me,{aim:y.aim,punch:vn,pitch:Xe,walking:ie>.01,hand:Yr}),ie&&zt<=0&&h.lift===0&&(ge.step(),zt=y.run?.27:.41)}function Uu(u){let y=Math.sin(u.angle),b=Math.cos(u.angle),U=u.halfWidth+.68;return[{x:u.x-b*U,z:u.z+y*U},{x:u.x+b*U,z:u.z-y*U}].find(I=>_i(I,I.x,I.z,s.walkSolids(I.x,I.z,0),z,Y,.38))}function sm(u,y,b){let U=Math.sin(y.angle),I=Math.cos(y.angle);if(!b)return null;if(![.28,.5,.73,.92].some(me=>{let Ne=u.x+(b.x-u.x)*me,Be=u.z+(b.z-u.z)*me,et=Ne-y.x,re=Be-y.z;return Math.abs(et*U+re*I)<y.halfLength+.35&&Math.abs(et*I-re*U)<y.halfWidth+.35}))return b;let se=((u.x-y.x)*U+(u.z-y.z)*I>0?1:-1)*(y.halfLength+.8),ie=(b.x-y.x)*I-(b.z-y.z)*U;return{x:y.x+U*se+I*ie,z:y.z+I*se-U*ie}}function rm(u){let y=u.officer,b=u.car,U=Math.sin(b.angle),I=Math.cos(b.angle),A=b.halfLength+.7,se=Uu(b)??[{x:b.x-U*A,z:b.z-I*A},{x:b.x+U*A,z:b.z+I*A}].find(ie=>_i(ie,ie.x,ie.z,s.walkSolids(ie.x,ie.z,0),z,Y,.37));return se?(y.seated=!1,y.model.root.visible=!0,y.x=se.x,y.z=se.z,y.floorY=0,p(y),y.angle=b.angle,y.exitAnim=.38,y.model.shadow.visible=!0,b.doorTime=.65,u.mode="foot",!0):!1}function Fu(u,y){let b=z.includes(y)?y:null;if(ae(u,y)>18||ae(u,y)<.5||(b?b.integrity<=0:!en(y)))return!1;let U=l(u),I=(b?b.root.position.y:l(y))+(y===h?h.lift:0)+(b?1.08:1.27),A=f();if(!kr([u.x,U+1.35,u.z],[y.x,I,y.z],A))return!1;u.angle=Math.atan2(y.x-u.x,y.z-u.z),u.model.root.position.set(u.x,U,u.z),u.model.root.rotation.y=u.angle;let se=Math.atan2(U+1.42-I,Math.max(.4,ae(u,y)));Xs(u.model,0,0,!0,!0,0,se),u.model.muzzle.getWorldPosition(Ke);let ie=O*14+u.x,me=Math.sin(ie)*(u.role==="ally"?.35:.48),Ne=y.x+Math.cos(u.angle)*me,Be=y.z-Math.sin(u.angle)*me;Dt.set(Ne,I+Math.cos(ie*1.4)*.32,Be);let et=Math.min(24,Ke.distanceTo(Dt)+1.65),re=Wt.subVectors(Dt,Ke).normalize(),Je=la(u);b&&Je.push({actor:b,y:0,bounds:[y.x-.93,.3,y.z-1.02,y.x+.93,1.52,y.z+1.02]});let Oe=Mc(Ke.toArray(),re.toArray(),A,Je,et,{ground:On});if(u.role==="ally"&&(y.role==="police"||Qs(y)||Oe.hit?.actor.role==="police")&&Kp(u,Oe.hit?.actor),Oe.hit&&(Oe.hit.actor===y||Oe.hit.actor.role==="civilian")){let Se=u.role==="police"&&y===h?.62:.83;if(b&&Oe.hit.actor===b){let ht=[Ke.x+re.x*Oe.distance,Ke.y+re.y*Oe.distance,Ke.z+re.z*Oe.distance];Xp(b,ht[1]-b.root.position.y,u,ht)}else Xn(Oe.hit.actor,Math.round(yu(Ke.y+re.y*Oe.distance-Oe.hit.y)*Se),u)}Dt.copy(Ke).addScaledVector(re,Oe.distance),u.role!=="ally"&&(y===h||y===ne||Kf(Ke,Dt,ne??h))&&Ui(u),a.emit(Ke.toArray(),Oe,{enemy:!0});for(let Se of Y)["civilian","clerk"].includes(Se.role)&&!(Se.brawl>0)&&ae(Se,u)<16&&(Se.fear=Math.max(Se.fear,4.5));return u.attack=(u.role==="police"?.91:1.07)+(Math.sin(ie)+1)*.18,ae(u,ne??h)<31&&ge.shot(),!0}function ca(u,y,b){let U=ae(u,y);return u.stagger>0||u.exitAnim>0?{speed:0,aim:!1}:U<17&&u.attack<=0&&Fu(u,y)||u.attack>.28&&U<15.5?(u.angle=Vn(u.angle,Math.atan2(y.x-u.x,y.z-u.z),b*12),{speed:0,aim:!0}):{speed:U>3.3||Math.abs(l(u)-l(y))>1.8?Uc(u,y,4.4,b):0,aim:U<12}}function om(u,y){if(vi-=y,wn){vi<=0&&(wn.role="civilian",wn.fear=4,wn=null,vi=37);return}if(vi>0)return;let b=w.find(U=>U.role==="civilian"&&en(U)&&ae(U,u)>14&&ae(U,ji)<55);if(!b){vi=8;return}b.role="rogue",wn=b,vi=63,b.attack=.1}let ha=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function zu(u){let y={kind:"car",shape:u.car.shape};return Br(y,u.route,u.startShift),y}function ua(u,y=!0){let{car:b,officer:U}=u;if(y){let I=zu(u);ii(b,I),b.driver=I.driver}else{let I={};Br(I,u.route),b.driver=I.driver;let A=Math.sin(b.angle),se=Math.cos(b.angle),ie=1/0;b.driver.route.forEach((me,Ne)=>{let Be=me.x-b.x,et=me.z-b.z,re=Math.hypot(Be,et)+(Be*A+et*se<0?16:0);re<ie&&(ie=re,b.driver.next=Ne)})}u.mode="patrol",u.retaliation=null,u.stop=null,u.departing=!1,U.seated=!0,U.model.root.visible=!1,si(b,0)}function am(u,y){let b=u.officer,U=ha[u.beat%ha.length];ae(b,U)<1.1&&(u.beat++,U=ha[u.beat%ha.length]),u.intent=Mn(b,U,1.35,y)}function lm(u,y){xt-=u,xt<=0&&lt>0&&(Ue=oa(y),Ue&&(_t={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle}),xt=.24);let b=lt>0&&h.health>0?Ue?y:_t:wn,U=b===wn?wn?1:0:Tc(lt);lt>0&&(lt=Math.max(0,lt-u*(Ue?.23:1.1)),lt===0&&(_t=null,Ue=!1,Fe("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),E.forEach((I,A)=>{let se=I.officer,ie=I.car;I.retaliation&&!en(I.retaliation)&&(I.retaliation=null);let me=I.retaliation,Ne=me??b,Be=!!(me||b&&A<U);if((ie.burning||ie.wrecked)&&se.health>0&&(I.mode="foot",se.seated=!1),se.health<=0){I.mode="disabled",ie.driver=null,se.down<=0&&ae(se,y)>13&&z.every(re=>re===ie||ae(re,I.berth)>3.5)&&(Ce(se),ii(ie,I.berth),si(ie,0),I.mode="ready",I.retaliation=null);return}if(I.mode==="patrol"&&(Be||ie.integrity<=0)&&(I.mode="driving",ie.driver=null,I.stop=null,I.stall=0,I.departing=!1),I.mode==="patrol")return;if(me&&(I.mode==="ready"||I.mode==="boarding"||I.mode==="reboard")&&(I.mode="foot"),I.mode==="ready"&&Be){let re=ie.integrity>0&&ae(se,ie)<22;I.mode=re?"boarding":"foot",I.stop=null,I.stall=0,I.departing=re&&ae(ie,I.berth)<2}if(I.mode==="boarding"||I.mode==="reboard"){I.mode==="boarding"&&!Be&&(I.mode="reboard"),I.mode==="reboard"&&Be&&(I.mode="boarding");let re=Uu(ie);ie.burning||ie.wrecked||ie.integrity<=0||ae(se,ie)>45?I.mode=Be?"foot":"ready":re&&ae(se,re)<.63?(se.seated=!0,se.model.root.visible=!1,ie.doorTime=.6,I.mode==="reboard"?ua(I,!1):I.mode="driving"):re&&(I.intent=Mn(se,sm(se,ie,re),I.mode==="boarding"?3.75:1.8,u))}if(I.mode==="driving"){if(!Be&&ie.integrity>0&&!I.departing){ua(I,!1);return}let re=Ne?ae(ie,Ne):1/0;!Be||ie.integrity<=0||I.stall>8.2&&!I.maneuver||re<12.7&&!(Ne===ne&&Math.abs(ne.speed)>6)?(xi(ie,u,{throttle:0,steer:0,brake:!0},r,z),Math.hypot(ie.vx,ie.vz)<2.7&&!rm(I)&&ie.integrity>0&&xi(ie,u,{throttle:.21,steer:.26,brake:!1},r,z)):Mu(I,Ne,r,z,Y,u)}else if(I.mode==="foot")Be&&Ne===_t?I.intent=Mn(se,Ne,3.45,u):Be?I.combat=ca(se,Ne,u):ie.integrity>0&&ae(se,ie)<40?I.mode="reboard":(I.mode="ready",ae(y,ie)>25&&z.every(re=>re===ie||ae(re,I.berth)>3.5)&&(ii(ie,I.berth),si(ie,0)));else if(I.mode==="ready"){let re=A<2&&ae(y,se)>24&&ae(y,I.berth)>19&&ae(se,I.berth)<30?zu(I):null;re&&pu(re,z.filter(Je=>Je!==ie),y,r)?ua(I):am(I,u)}let et=I.mode==="driving"||Be&&I.mode==="foot";ie.lamps.forEach((re,Je)=>{re.visible=!et||Math.floor(O*8+Je)%2===0}),et&&Z<=0&&ae(y,ie)<42&&(ge.siren(),Z=1.35)})}let Kr=(u,y,b)=>({x:u.x+Math.cos(u.angle)*y+Math.sin(u.angle)*b,z:u.z-Math.sin(u.angle)*y+Math.cos(u.angle)*b}),Ou=!1;function cm(u,y){for(let b of z){let U=ae(b,y)<60,I=b.kind==="bike",A=b.root.position.y,se=b.lastImpact??0;if(b.impact>3.4&&b.impact>se+1.5){let re=(b.lastSpeed??b.speed)>=0?1:-1,Je=Kr(b,0,re*(b.halfLength??1.1));U&&c.sparks(Je.x,A+.45,Je.z,8+Math.round(b.impact*2),3+b.impact*.3),I||(re>0?b.damageFront+=b.impact*1.7:b.damageRear+=b.impact*1.7)}b.lastImpact=b.impact,b.lastSpeed=b.speed;for(let re of b.bumpers??[]){let Je=re.end>0?b.damageFront:b.damageRear;if(re.state===0&&Je>22&&(re.state=1),re.state===1&&Je>48&&(re.state=2,t.attach(re.mesh),re.velocity.set(b.vx*.5+(Math.random()-.5),1.4,b.vz*.5+(Math.random()-.5)),re.spin=(Math.random()-.5)*5),re.state===2){let Oe=re.mesh;Oe.position.addScaledVector(re.velocity,u),re.velocity.y-=9.8*u;let Se=On(Oe.position.x,Oe.position.z)+.15;Oe.position.y<Se?(Oe.position.y=Se,re.velocity.y=0,re.velocity.x*=Math.exp(-u*5),re.velocity.z*=Math.exp(-u*5),re.spin*=Math.exp(-u*5),Oe.rotation.x+=(0-Oe.rotation.x)*Math.min(1,u*8),Oe.rotation.z+=(0-Oe.rotation.z)*Math.min(1,u*8)):Oe.rotation.x+=re.spin*u*.6,Oe.rotation.y+=re.spin*u}}if(b.wrecked){b.wreckClock=(b.wreckClock??0)+u,U&&b.wreckClock<30&&Math.random()<u*5&&c.engineSmoke(b.x,A+1.1,b.z,!0);continue}let ie=Kr(b,0,I?.35:b.halfLength-.75),me=A+(I?.65:b.spec.belt+.1);if(b.integrity<45&&U&&Math.random()<u*(b.integrity<22?14:6)&&c.engineSmoke(ie.x,me,ie.z,b.integrity<22),!b.burning&&b.integrity<=12){b.speed=0,b.vx=0,b.vz=0,b===ne&&Ni(!0);for(let re of[...b.passengers??[]])tr(re);(b.driver||Qs(b)?.officer.seated)&&Es(b,0,b),b.driver=null,b.burning=!0,b.fire=I?4.5:7,ae(b,h)<4&&Fe("O ve\xC3\xADculo pegou fogo! Saia j\xC3\xA1.")}if(b.burning){if(b.fire-=u,b.integrity=Math.min(b.integrity,12),U)for(let re=0;re<2;re++)c.flame(ie.x,me,ie.z,I?.7:1.1);b.fire<=0&&hm(b);continue}let Ne=Math.hypot(b.vx,b.vz),Be=Math.abs(b.vx*Math.cos(b.angle)-b.vz*Math.sin(b.angle)),et=b===ne&&Ou&&Ne>8;if(Ne>4&&(Be>2.6||et)){let re=-(b.wheelbase??1.5)/2,Je=I?[Kr(b,0,re)]:[Kr(b,-(b.halfWidth-.17),re),Kr(b,b.halfWidth-.17,re)];b.skid??=Je.map(Oe=>({...Oe})),ae(b.skid[0],Je[0])>.45&&(Je.forEach((Oe,Se)=>{c.skid(b.skid[Se].x,b.skid[Se].z,Oe.x,Oe.z,On(Oe.x,Oe.z)),b.skid[Se]={...Oe}}),U&&Be>3.5&&c.tireSmoke(Je[0].x,A+.2,Je[0].z))}else b.skid=null}}function hm(u){let y={x:u.x,z:u.z},b=u.root.position.y;u===ne&&(Ni(!0),Xn(h,100,y));for(let U of[...u.passengers??[]])tr(U),Xn(U,100,y);(u.driver||Qs(u)?.officer.seated)&&Es(u,100,y),u.burning=!1,u.wrecked=!0,u.integrity=0,u.driver=null,u.wreckClock=0,u.rider&&(u.rider.root.visible=!1),fp(u),c.explosion(u.x,b,u.z),ge.explosion(),ae(u,ne??h)<25&&(Ii=.35);for(let U of[...Y,h]){if(U.seated||U===h&&ne)continue;let I=ae(U,y);if(I>7.5)continue;let A=1-I/7.5,se=Math.max(.2,I),ie=(U.x-y.x)/se,me=(U.z-y.z)/se;gc(U,ie*(4+8*A),3+5*A,me*(4+8*A)),Xn(U,Math.round(115*A),y)}for(let U of z){if(U===u||U.wrecked)continue;let I=ae(U,y);if(I>7)continue;let A=1-I/7,se=Math.max(.2,I);U.integrity=Math.max(0,U.integrity-48*A),U.vx+=(U.x-y.x)/se*9*A/(U.handling?.mass??1),U.vz+=(U.z-y.z)/se*9*A/(U.handling?.mass??1),U.damageFront+=18*A,U.damageRear+=18*A}for(let U of Y)ae(U,y)<35&&["civilian","resident"].includes(U.role)&&(U.fear=Math.max(U.fear,6));u.lastHitBy===h&&As(28,h)}function um(u,y){let b={player:ne,vehicles:Au()},U=E.filter(I=>I.mode==="patrol").map(I=>I.car);for(let[I,A]of Ln){if(!ne||I.wrecked||I.burning){for(let se of[...I.passengers])tr(se);Ln.delete(I);continue}I.passengers?.length&&(ae(I,ne)>8?Mu(A,ne,r,z,Y.filter(se=>!se.seated),u):xi(I,u,{throttle:0,steer:0,brake:!0},r,z))}vp([...C.filter(I=>!Ln.has(I)&&!I.shopping),...U],b,Y,r,u,g,s.signals),R.forEach((I,A)=>{if(I.wrecked&&(I.wreckClock??0)>40&&ae(y,I)>40){let{x:se,z:ie,angle:me}=[..._,...T][A];ae(y,{x:se,z:ie})>40&&(ii(I,{x:se,z:ie,angle:me}),I.stolen=!1)}});for(let I of R)Ln.has(I)||(I!==ne&&Math.hypot(I.vx,I.vz)>.06?xi(I,u,{throttle:0,steer:0,brake:!0},r,b.vehicles):I!==ne&&(I.impact=Math.max(0,I.impact-u*21)));for(let I of z){if(I.routeIndex>=0&&I!==ne&&!Ln.has(I)&&!I.shopping){I.abandoned+=u;let A=!I.driver&&I.abandoned>25||I.wrecked&&(I.wreckClock??0)>30,se=!I.wrecked&&I.integrity<=0||(I.driver?.stuck??0)>13;if((A||se)&&!I.burning&&ae(y,I)>17){let ie={};if(Br(ie,I.routeIndex),ie.kind=I.kind,ie.shape=I.shape,pu(ie,b.vehicles.filter(me=>me!==I),y,r)){Object.assign(I,ie);let me=I.ownDriver;me&&!me.seated&&!me.riding&&me.role==="civilian"&&ae(me,y)>20&&(Ce(me),me.seated=!0,me.model.root.visible=!1)}}}I!==ne&&I.impact>5&&ae(y,I)<18&&pt<=0&&(ge.crash(),pt=.32),si(I,u,I.steer),I.rider&&(I.rider.root.visible=!!I.driver&&I.integrity>0,I.rider.root.visible&&au(I.rider,I))}if(ne){if(ne.impact>4.1&&pt<=0){ge.crash(),Ii=.24,pt=.36;let I=ne,A=I.impact;Fe(I.integrity<43?"Motor avariado.":"Colis\xE3o."),ne&&I.kind==="bike"&&A>10.5&&(Xn(h,Math.min(40,Math.round(A*1.6))),I.integrity=Math.max(0,I.integrity-4),Ni(!0),Fe("Voc\xEA caiu da moto."))}if(ne&&ne.integrity<=0&&Math.hypot(ne.vx,ne.vz)<3){let I=aa(ne);Ni(!0),Fe(I+" sem condi\xE7\xF5es de rodar.")}}}function Mn(u,y,b,U){if(!y)return 0;u.walkIntent=y;let I=d(u),A=ae(u,y);if(A<.13)return 0;let se=s.interiorAt(u.x,u.z,l(u)),ie=s.interiorAt(y.x,y.z,y.y??l(y));if(!se&&!ie&&A>5.9)return o(u,y,b,U);let me=y,Ne=(re,Je)=>[.24,.46,.68,.88,1].every(Oe=>zn(re.x+(Je.x-re.x)*Oe,re.z+(Je.z-re.z)*Oe,.29,I));if(!Ne(u,y)){let re=1/0;for(let Je of I)if(!(ae(u,Je)>Math.hypot(Je.w,Je.d)*.5+3.1))for(let Oe of[-1,1])for(let Se of[-1,1]){let ht={x:Je.x+Oe*(Je.w*.5+.44),z:Je.z+Se*(Je.d*.5+.44)},St=ae(u,ht),Kt=ae(ht,y);if(St<.3||St>4.5||!Ne(u,ht))continue;let dn=St+Kt+(Kt>A+.25?1.7:0);dn<re&&(re=dn,me=ht)}}let Be=Math.atan2(me.x-u.x,me.z-u.z);u.angle=Vn(u.angle,Be,U*8.5);let et=Math.min(b*U,ae(u,me));return Xo(u,u.x+Math.sin(Be)*et,u.z+Math.cos(Be)*et,.26,I)?b:0}function Bu(u,y){let b=l(u);if(s.interiorAt(u.x,u.z,b))return{x:u.x,z:u.z,y:b};let U=Math.floor((Math.sqrt(1+y)-1)*.75),I=(y%2===0?1:-1)*(1.05+y%5*.66),A=(z.includes(u)?u.halfLength+3.2:3.1)+U*1.1,se=Math.sin(u.angle),ie=Math.cos(u.angle);return{x:u.x-se*A+ie*I,z:u.z-ie*A-se*I,y:b}}function Uc(u,y,b,U){let I=s.interiorAt(u.x,u.z,l(u)),A=s.interiorAt(y.x,y.z,y.y??l(y));if(I?.buildingId===A?.buildingId&&Math.abs((I?.floor??0)-(A?.floor??0))<1.1)return u.pursuitRoute=[],u.pursuitKey="",Mn(u,y,b,U);let se=(A?.buildingId??"street")+":"+(A?.floor??0);if(u.pursuitKey!==se){u.pursuitKey=se;let ie=[],me=s.buildings.find(re=>re.id===I?.buildingId),Ne=s.buildings.find(re=>re.id===A?.buildingId),Be=me?.units.find(re=>Math.abs(re.floor-I.floor)<.25),et=Ne?.units.find(re=>Math.abs(re.floor-A.floor)<.25);me&&ie.push(Be?.inside,Be?.entry,Be?.outside,...[...Be?.stairs??[]].reverse(),me.inside,me.entry,me.outside),Ne&&ie.push(Ne.outside,Ne.entry,Ne.inside,...et?.stairs??[],et?.outside,et?.entry,et?.inside),u.pursuitRoute=ie.filter(Boolean)}for(;u.pursuitRoute.length&&ae(u,u.pursuitRoute[0])<.66&&Math.abs(l(u)-(u.pursuitRoute[0].y??0))<.85;)u.pursuitRoute.shift();return Mn(u,u.pursuitRoute[0]??y,b,U)}function dm(u,y,b){let U=u.itinerary[0];return U?ae(u,U)<.58&&Math.abs(l(u)-(U.y??0))<1.1?(u.itinerary.shift(),0):Mn(u,U,y,b):0}function fm(u){let y=u.calling;u.calling=null,!(!y||u.health<=0)&&(lt=Math.min(64,Math.max(lt,0)+y.pressure*.7),_t={x:y.x,z:y.z,y:0,health:100,seated:!1,angle:0},Ue=!1,Fe("Uma testemunha ligou para a pol\xEDcia."))}function pm(u,y){if(u.brawl-=y,u.health<35)return u.brawl=0,u.fear=6,{speed:0};let b=ae(u,h);if(b>16)return u.brawl=0,{speed:0};if(u.punchLand>0&&(u.punchLand-=y,u.punchLand<=0&&ae(u,h)<1.4&&h.health>0&&!h.ragdoll)){Xn(h,6,u);let U=Math.max(.2,b);h.pushX+=(h.x-u.x)/U*2.4,h.pushZ+=(h.z-u.z)/U*2.4,ge.punch(!0)}return b>1.15?{speed:Mn(u,h,3.6,y)}:(u.angle=Vn(u.angle,Math.atan2(h.x-u.x,h.z-u.z),y*10),u.attack<=0&&(u.punchT=Hr,u.punchHand=1-(u.punchHand??0),u.attack=1.05,u.punchLand=Js),{speed:0})}function ku(){let u=[];We&&!ne&&en(h)&&u.push(h);for(let y of Xt)y.order==="dealer"&&en(y)&&y.post&&ae(y,y.post)<7&&u.push(y);return u}let nr=()=>Object.keys($s).filter(u=>ve[u]>0);function mm(u){if(at-=u,!(at>0)&&(at=4+Math.random()*4,!!nr().length))for(let y of ku()){if(Y.some(I=>I.buyer?.seller===y))continue;let b=C.find(I=>I.kind==="car"&&I.driver&&I.ownDriver?.seated&&!Ln.has(I)&&!I.burning&&Math.abs(I.speed)<2&&ae(I,y)<26&&(I.visitTime??-100)<O-65);if(b&&Math.random()<.5){let I=Math.cos(b.angle),A=-Math.sin(b.angle),se=[-1,1].map(Ne=>({x:b.x+I*Ne*2.4,z:b.z+A*Ne*2.4})).find(Ne=>gi(Ne.x,Ne.z,b.angle,r,b.shape)&&z.every(Be=>Be===b||ae(Be,Ne)>4.8));if(!se)continue;Object.assign(b,se);let ie=b.ownDriver,me=b.driver;if(Es(b,0,y)){b.shopping=!0,b.visitTime=O,b.speed=b.vx=b.vz=0,ie.shoppingTrip={car:b,route:me},ie.fear=0,ie.buyer={seller:y,wait:0};continue}}let U=Y.find(I=>I.role==="civilian"&&en(I)&&I.fear<=0&&!I.buyer&&!I.calling&&!(I.brawl>0)&&!I.itinerary.length&&ae(I,y)>4&&ae(I,y)<38&&(I.boughtAt??-99)<O-45);U&&(U.buyer={seller:y,wait:0})}}function gm(u,y){let b=u.buyer,U=b.seller;if(!ku().includes(U)||!nr().length)return u.buyer=null,0;if(ae(u,U)>1.3)return Mn(u,U,1.6,y);if(u.angle=Vn(u.angle,Math.atan2(U.x-u.x,U.z-u.z),y*6),b.wait+=y,b.wait<1.6)return 0;let I=nr(),A=I[Math.floor(Math.random()*I.length)],se=Math.min(ve[A],1+Math.floor(Math.random()*3)),ie=se*$s[A].retail;return ve[A]-=se,we+=ie,u.buyer=null,u.boughtAt=O,U===h?(Fe("+R$ "+ie+" \xB7 "+$s[A].name),ge.sale(),oa(h)?As(16,h,!0):bu(h,12)):(U.sales=(U.sales??0)+ie,ae(U,ne??h)<30&&ge.sale()),0}function xm(u,y){let b=f();for(let I of E){let A=I.officer;!en(A)||I.retaliation||ae(A,u)<26&&Gr({...A,ground:l(A)},{...u,ground:l(u)},b,{range:26,fov:Math.PI*.9,eye:1.6,aim:1.2})&&(I.retaliation=u)}let U=E.map(I=>I.officer).filter(I=>en(I)&&ae(I,u)<22&&E.some(A=>A.officer===I&&A.retaliation===u)).sort((I,A)=>ae(I,u)-ae(A,u))[0];if(U){if(u.health>45)return u.fleeing=!1,ca(u,U,y);u.fleeing=!0;let I=Math.atan2(u.x-U.x,u.z-U.z),A={x:u.x+Math.sin(I)*6,z:u.z+Math.cos(I)*6};return{speed:Mn(u,A,4.6,y),aim:!1}}if(u.post&&!u.fleeing){let I=Y.find(A=>A.buyer?.seller===u);if(u.offerDelay=(u.offerDelay??0)-y,!I&&u.offerDelay<=0&&nr().length){u.offerDelay=4+Math.random()*4;let A=Y.find(se=>en(se)&&se.role==="civilian"&&!se.buyer&&!se.calling&&se.fear<=0&&ae(se,u.post)<6&&(se.boughtAt??-99)<O-30);A&&Math.random()<.55&&(A.buyer={seller:u,wait:0},I=A)}if(I&&ae(I,u)>1.15&&ae(I,u.post)<6)return{speed:Mn(u,I,1.2,y),aim:!1};if(I)return{speed:0,aim:!1};{let A=O*.22+u.home.x,se={x:u.post.x+2.4*Math.sin(A),z:u.post.z+1.7*Math.cos(A)};if(ae(u,se)>.6)return{speed:Mn(u,se,1,y),aim:!1}}}return u.post&&ae(u,u.post)>.8?{speed:Mn(u,u.post,u.fleeing?3.2:2.6,y),aim:!1}:(u.fleeing=!1,{speed:0,aim:!1})}function _m(u){let y=Xt.filter(b=>b.health>0&&(Tn?.role!=="ally"||b===Tn));if(!y.length){Fe("Recrute algu\xE9m primeiro.");return}if(u==="toggle"&&(u=y.some(b=>b.order!=="wait"&&b.order!=="dealer")?"wait":"follow"),u==="follow"||u==="wait"){for(let b of y)b.commandTarget=null,b.order=u,b.hold={x:b.x,z:b.z},b.post=null;Fe(u==="wait"?"Gangue: esperem aqui.":"Gangue: comigo.")}else if(u==="attack"){let U=(Tn&&Tn.role!=="ally"?Tn:null)??E.map(I=>I.officer).filter(I=>en(I)&&ae(I,h)<30&&lt>0).sort((I,A)=>ae(I,h)-ae(A,h))[0];if(U){for(let I of y)I.commandTarget=U;Fe("Gangue: ataquem!")}else Fe("Mire no alvo para a gangue atacar.")}else if(u==="dealer"){for(let b of y)b.order="dealer",b.post={x:b.x,z:b.z},b.sales??=0,b.boardCar=null;Fe(nr().length?"Ponto de venda montado.":"Ponto montado, mas falta estoque.")}ge.bell()}function ym(u){if(de!=="pad"&&de!=="touch")return;let y=.2,b=null;for(let{actor:U,y:I}of la(h)){if(U.role==="ally"||ae(U,h)>28)continue;Ze.set(U.x,I+1.25,U.z).project(i);let A=Math.hypot(Ze.x,Ze.y);Ze.z<1&&A<y&&(y=A,b={x:Ze.x,y:Ze.y})}b&&(ct-=Mt(b.x*2.2*u,-.04,.04),Xe-=Mt(b.y*1.6*u,-.03,.03))}function Gu(u,y,b=!1){Y=B.filter(A=>ae(A,y)<(A.role==="civilian"?69:47)||A.role==="ally"||A.role==="police"||A===wn||A===nn);let U=new Set(Y);for(let A of B)A.model.root.visible=U.has(A)&&!A.seated;let I=new Map(Y.map(A=>[A,{x:A.x,z:A.z}]));b||(om(y,u),lm(u,y));for(let A of Y){if(A.seated||(A.attack-=u,A.stagger=Math.max(0,A.stagger-u),A.injuryCooldown-=u,A.exitAnim=Math.max(0,A.exitAnim-u),A.exitAge+=u,A.ragdoll&&A.health>0&&xc(A,u,l(A),(re,Je)=>!zn(re,Je,.22,d(A)))))continue;if(A.health<=0){if(A.down=Math.max(0,A.down-u),A.deadTime+=u,A.ragdoll)xc(A,u,l(A),(re,Je)=>!zn(re,Je,.22,d(A))),A.drop&&A.drop.position.set(A.x,l(A)+.019,A.z);else if(A.deadTime<1.2){A.x+=A.pushX*u,A.z+=A.pushZ*u,A.pushX*=Math.exp(-u*5),A.pushZ*=Math.exp(-u*5);let re=Zo(A.model,A.deadTime,A.fallDir);A.model.root.rotation.set(re,A.angle,0),A.model.root.position.set(A.x,l(A)+Math.abs(Math.sin(re))*.31,A.z),A.drop&&A.drop.position.set(A.x+Math.sin(A.angle)*A.fallDir*1.25,l(A)+.019,A.z+Math.cos(A.angle)*A.fallDir*1.25)}if(A.drop){let re=Math.min(.63,.32+(19-A.down)*.09);A.drop.rotation.z=A.angle,A.drop.scale.set(Math.max(.38,re),Math.max(.24,re*.68),1)}A.role!=="police"&&A.down<=0&&ae(A.home,y)>7&&ae(A,y)>7&&(Ce(A),D.includes(A)&&(A.seated=!0,A.model.root.visible=!1));continue}let se=0,ie=!1,me=E.find(re=>re.officer===A);if(me)se=me.combat?.speed??me.intent??0,ie=!!me.combat?.aim,me.intent=0,me.combat=null;else if(A.role==="ally"&&A.order==="dealer")({speed:se,aim:ie}=xm(A,u));else if(A.role==="ally")if(ne&&A.order!=="wait"&&(!A.boardCar||A.boardCar===ne&&ae(A,ne)>12)&&Yp(A),A.boardCar)se=Zp(A,u);else if(er(A.commandTarget)||er(nn))({speed:se,aim:ie}=ca(A,er(A.commandTarget)?A.commandTarget:nn,u));else if(A.order==="wait")A.hold&&ae(A,A.hold)>.9&&(se=Mn(A,A.hold,3.4,u));else{let re=Bu(y,Xt.indexOf(A));(ae(re,A)>1.25||Math.abs(l(A)-re.y)>1.75)&&(se=Uc(A,re,ne?6.1:4.45,u))}else if(A.role==="rogue"){let re=w.filter(Oe=>Oe!==A&&Oe.role==="civilian"&&en(Oe)).sort((Oe,Se)=>ae(A,Oe)-ae(A,Se))[0],Je=E.map(Oe=>Oe.officer).find(Oe=>en(Oe)&&ae(Oe,A)<15);(Je||re)&&({speed:se,aim:ie}=ca(A,Je??re,u))}else if(A.brawl>0&&!ne&&en(h))({speed:se}=pm(A,u));else if(A.calling)A.calling.time-=u,A.angle=Vn(A.angle,Math.atan2(A.x-A.calling.x,A.z-A.calling.z),u*4),A.calling.time<=0&&fm(A);else if(A.buyer&&A.fear<=0)se=gm(A,u);else if(A.shoppingTrip&&!A.buyer){let{car:re,route:Je}=A.shoppingTrip;if(re===ne||re.driver||re.wrecked||re.burning)A.shoppingTrip=null,re.shopping=!1;else if(ae(A,re)<re.halfLength+.8){A.seated=!0,A.shoppingTrip=null,re.shopping=!1,re.driver=Je;continue}else se=Mn(A,re,1.8,u)}else if(A.surrender<=0){let re=A.path[A.next];if(A.role==="clerk"&&(ae(A,A.home)>.55?re=A.home:A.angle=Vn(A.angle,ae(h,A)<4?Math.atan2(h.x-A.x,h.z-A.z):A.home.angle,u*4)),A.role==="civilian"&&!A.itinerary.length&&A.fear<=0&&N.length&&(A.scheduleClock-=u,A.scheduleClock<=0)){let Je=N[Math.floor(Math.abs(A.home.x*11+A.home.z*4+O))%N.length];ae(A,Je.outside)<38&&(A.itinerary=[Je.outside,Je.entry,Je.inside,Je.entry,Je.outside]),A.scheduleClock=36+Math.abs(A.home.x)%25}if(A.fear=Math.max(0,A.fear-u),A.fear>0&&ae(A,y)<15){let Je=Math.atan2(A.x-y.x,A.z-y.z);for(let Oe of[0,.84,-.84,1.52,-1.52]){let Se=Je+Oe;if(Xo(A,A.x+Math.sin(Se)*3.7*u,A.z+Math.cos(Se)*3.7*u,.22,d(A))){A.angle=Vn(A.angle,Se,u*8),se=3.7;break}}}else A.itinerary.length?se=dm(A,A.pace,u):re&&(A.path.length&&ae(A,re)<.54&&(A.next=(A.next+1)%A.path.length,re=A.path[A.next]),se=Mn(A,re,A.pace,u))}let Ne=I.get(A);if(Ne&&A.exitAnim<=0){let re=A.x-Ne.x+A.pushX*u,Je=A.z-Ne.z+A.pushZ*u;A.x=Ne.x,A.z=Ne.z;let Oe=me?.mode==="boarding"?z.filter(St=>St!==me.car):z,Se=A.boardCar?Y.filter(St=>St.role!=="ally"):Y,ht=$o(A,re,Je,d(A),l(A)>1.25?[]:Oe,[...Se,...ne?[]:[h]],.29);if(se>0&&ht<se*u*.35){let St=A.detourSide??1,Kt=se*u,dn=Se.find(vt=>vt!==A&&en(vt)&&ae(vt,A)<.85&&vt.role!=="clerk");if(dn){let vt=A.angle+Math.PI/2;$o(dn,-St*Math.sin(vt)*Kt*.65,-St*Math.cos(vt)*Kt*.65,d(dn),Oe,Se,.29)}$o(A,St*Math.cos(A.angle)*Kt,-St*Math.sin(A.angle)*Kt,d(A),Oe,[...Se,...ne?[]:[h]],.29)<Kt*.25&&(A.detourSide=-St),A.repath=0}if(A.walkIntent&&ae(A,A.walkIntent)>.65&&ae(A,Ne)<u*.18?A.stuckTime=(A.stuckTime??0)+u:A.stuckTime=0,A.walkIntent=null,A.stuckTime>=3){let St=null;for(let Kt=.55;Kt<=4&&!St;Kt+=.45)for(let dn=0;dn<16;dn++){let oi=A.x+Kt*Math.sin(dn*Math.PI/8),vt=A.z+Kt*Math.cos(dn*Math.PI/8);if(_i(A,oi,vt,s.walkSolids(oi,vt,l(A)),Oe,[...Se,h],.34)){St={x:oi,z:vt};break}}St&&(Object.assign(A,St),p(A),A.route=[],A.repath=0),A.stuckTime=0,St&&(A.hopTime=.36)}se>0&&(se=Math.min(se,ht/u))}if(A.pushX*=Math.exp(-u*7.6),A.pushZ*=Math.exp(-u*7.6),!b&&A.injuryCooldown<=0){let re=Vu(A,2.8);if(re){let{car:Je,speed:Oe,vx:Se,vz:ht}=re,St=vu(Oe);A.pushX=Mt(Se,-8,8)*.59,A.pushZ=Mt(ht,-8,8)*.59,St>0&&(A.injuryCooldown=1.18,Oe>6.5&&gc(A,Se*.7,1.8+Oe*.16,ht*.7),Xn(A,St),Je===ne&&St>12&&As(19))}}let Be=A.model;if(A.health<=0)continue;p(A),A.hopTime=Math.max(0,(A.hopTime??0)-u),Be.root.position.set(A.x,l(A)+A.exitAnim*.35+.28*Math.sin(Math.PI*A.hopTime/.36),A.z);let et=A.stagger>0?Math.sin(A.stagger/.32*Math.PI)*.24:0;Be.root.rotation.set(A.exitAnim*.7-et,A.angle,A.exitAnim*A.exitSide*.89+(A.stagger>0?Math.sin(A.stagger*9)*.12:0)),Xs(Be,u,A.exitAnim>0?2.9:se,ie,["police","rogue","ally"].includes(A.role),0,0,A.surrender>0),A.punchT>0?(A.punchT=Math.max(0,A.punchT-u),_u(Be,{punch:A.punchT,hand:A.punchHand??0})):A.calling?(Be.arms[0].rotation.set(-2.35,0,-.55),Be.forearms[0].rotation.set(-2.05,0,0)):A.order==="dealer"&&se<.1&&!ie&&(Be.arms[0].rotation.set(-.4,0,-.25),Be.arms[1].rotation.set(-.4,0,.25),Be.forearms[0].rotation.set(-1.5,0,.4),Be.forearms[1].rotation.set(-1.5,0,-.4))}if(!b&&!ne&&l(h)<1.15&&h.health>0&&h.lift<.3&&Pi<=0){let A=Vu(h,2.35);if(A){let{speed:se,vx:ie,vz:me}=A,Ne=vu(se);h.pushX=Mt(ie,-13,13)*.73,h.pushZ=Mt(me,-13,13)*.73,h.trip=se>=5.3?Math.min(.82,.35+se*.021):.12,h.vx=h.vz=0,se>7&&gc(h,ie*.65,1.6+se*.14,me*.65),Ne>0&&(Xn(h,Ne),ge.crash(),Fe("Voc\xEA foi atropelado.")),Pi=.87}}}function Vu(u,y){for(let b of z){if(l(u)>1.2||ae(b,u)>5)continue;let U=W.get(b),I=U&&ae(U,b)<3?U:null,A=I?Math.hypot(I.vx,I.vz):0,se=Math.hypot(b.vx,b.vz),ie=Math.max(se,A);if(!(ie<y||!Jf(b,I,u)))return{car:b,speed:ie,vx:A>se?I.vx:b.vx,vz:A>se?I.vz:b.vz}}return null}function vm(u,y){s.updateDoors(u,[y,...Y.filter(b=>en(b))])}function Mm(u,y,b){let U=l(y),I=ne?null:s.interiorAt(y.x,y.z,U),A=!!I;Zr!==A&&(Zr=A,ye=!0);let se=i.aspect<.85,me=A?b?2.25:3.4:ne?ne.kind==="bike"?8.2:se?12:10.2:b?4.45:se?7.9:6.5,Ne=ne?1.95+ne.root.position.y:1.38+U+h.lift*.46,Be=ne?0:b?.61:.22,et=b?.1+Xe*.19:Math.max(A?.28:.1,Xe);He.set(y.x+Math.cos(ct)*Be,Ne,y.z-Math.sin(ct)*Be),ot.set(He.x-Math.sin(ct)*me*Math.cos(et),Ne+Math.sin(et)*me,He.z-Math.cos(ct)*me*Math.cos(et));function re(ht){I&&(ht.x=Mt(ht.x,I.x-I.w*.5+.3,I.x+I.w*.5-.3),ht.z=Mt(ht.z,I.z-I.d*.5+.3,I.z+I.d*.5-.3),ht.y=Mt(ht.y,I.floor+.55,I.ceiling-.42))}re(ot),s.viewBlocked(He.x,He.y,He.z,.12,!A)&&He.set(y.x,Ne,y.z);for(let ht=.06;ht<=1.0001;ht+=.04){let St=Rr.lerp(He.x,ot.x,ht),Kt=Rr.lerp(He.y,ot.y,ht),dn=Rr.lerp(He.z,ot.z,ht);if(s.viewBlocked(St,Kt,dn,.32,!A)||z.some(oi=>oi!==ne&&ae(oi,{x:St,z:dn})<2.1&&Kt<oi.root.position.y+1.7)){ot.lerp(He,1-Math.max(.02,ht-.07));break}}re(ot);let Je=b?14:1,Oe=Re?Xe:Xe-.22,Se=b?Ne-Math.tan(Oe)*Je:Ne-.07;Me.set(He.x+Math.sin(ct)*Je,Se,He.z+Math.cos(ct)*Je),ye?(i.position.copy(ot),ye=!1):i.position.lerp(ot,1-Math.exp(-u*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!A)&&i.position.copy(ot),re(i.position),i.lookAt(Me),i.updateMatrixWorld()}function Fi(u,y,b){te.fillStyle=y,te.beginPath(),te.arc(st(u.x),st(u.z),b,0,Math.PI*2),te.fill()}function bm(u,y){let b=Tc(lt),U=Math.round(ae(u,In));Ve("detail").textContent="Casa "+U+" m \xB7 Loja "+Math.round(ae(u,Lr))+" m",Ve("cash").textContent="R$ "+we.toLocaleString("pt-BR");let I=Xt.filter(vt=>vt.order==="dealer"&&en(vt)),A=Xt.some(vt=>vt.order==="wait");Ve("crew").textContent="Gangue "+Xt.length+(Xt.length?A?" \xB7 esperando":" \xB7 seguindo":"")+(I.length?" \xB7 "+I.length+" no ponto":"");let se=ri();Ve("stash").hidden=!se,Ve("stash").textContent=se;let ie=I.reduce((vt,wm)=>vt+(wm.sales??0),0);Ve("selling").hidden=!We&&!I.length,Ve("selling").textContent=(We?"Seu ponto de venda est\xE1 aberto. ":"")+(I.length?"Ponto da gangue: R$ "+ie:"");let me=Ve("prompt"),Ne=de==="pad"?"Y \xB7 ":de==="keyboard"?"E \xB7 ":"",Be=Su(),et=!!Be,re=Tu(),Je=Eu(),Oe=ne??Cu(),Se=Ic(),ht=wu(),St=sn&&y&&ns<=0;me.hidden=!(Oe||et||re||Je||Se||ht||ns>0||St);let Kt=Se?"Guardar na garagem":ne?"Sair "+(ne.kind==="bike"?"da moto":"do carro"):ht?"Tirar ve\xEDculo da garagem":re?"Salvar na porta de casa":et?Fp[Be.service]:Je?"Porta trancada":Oe?"Pegar "+aa(Oe):"";me.textContent=ns>0?ra:St?"Mantenha a mira \xB7 "+Math.ceil(sn.left)+" s":Ne+Kt,Ve("heat").hidden=!b,Ve("heat").textContent="\u2605".repeat(b)+" PROCURADO";let dn=H==="rifle"?"Fuzil":"Pistola";Ve("mode").textContent=ne?aa(ne)+" \xB7 "+Math.round(ne.integrity)+"%"+(ne.burning?" \xB7 FOGO":""):ce?dn:"Vila Brasa",Ve("reading").textContent=ne?Math.round(Math.hypot(ne.vx,ne.vz)*3.6)+" km/h":ce?he+" balas":"Punhos";let oi=Ve("health");oi.value=h.health,oi.title="Vida: "+Math.ceil(h.health)+"%",Ve("crosshair").hidden=!(y||ce&&Hn>0&&!ne),Ve("interact").textContent=ne?"Sair":re?"Salvar":et?"Loja":"Entrar",Ve("sprint").textContent=ne?"Freio":"Correr",Ve("aim").hidden=!!ne,Ve("fire").hidden=!!ne||!ce,Ve("weapon").hidden=!!ne||!(_e||ue),Ve("weapon").textContent="Arma",Ve("sell").hidden=!!ne,Ve("gang").hidden=!!ne||!Xt.length,Ve("sell").setAttribute("aria-pressed",String(!!We)),Ve("jump").hidden=Ve("punch").hidden=!!ne,Ve("recruit").hidden=!!ne||!y,Ve("hud").classList.toggle("armed",!ne),Ve("hud").classList.toggle("driving",!!ne),te.drawImage(ee,0,0),Pe&&(ae(u,Pe)<2.2?(Pe=null,Ye.visible=!1):Fi(Pe,"#ffad41",4));for(let vt of S)vt!==ne&&vt.integrity>0&&Fi(vt,vt.driver?"#82b9b3":"#eab987",vt.kind==="bike"?2.2:vt.driver?2.6:3.5);Fi(Lr,"#eaff89",6),Fi(In,"#dcc39b",5);for(let vt of N)vt.service==="black"&&Fi(vt.entry,"#c58cff",3.2);Fi(ji,"#99c6ff",5);for(let vt of N)vt.kind!=="armory"&&Fi(vt.entry,"#dbae80",2.5);for(let vt of E)["driving","patrol","foot"].includes(vt.mode)&&Fi(vt.officer.seated?vt.car:vt.officer,vt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let vt of Xt)Fi(vt,"#97ebaf",3.5);te.save(),te.translate(st(u.x),st(u.z)),te.rotate(-(ne?ne.angle:h.angle)),te.fillStyle="#fff9e6",te.strokeStyle="#243938",te.lineWidth=2.7,te.beginPath(),te.moveTo(0,10),te.lineTo(-6,-6),te.lineTo(0,-3),te.lineTo(6,-6),te.closePath(),te.stroke(),te.fill(),te.restore()}function Sm(u){let y=(u-je)/1e3,b=Mt(y,1/240,.05);je=u,O+=b;let U=Cs.read(!!ne,b);if(U.map&&!Ae.open&&mt(),Ae.open){Ee.x=Mt(Ee.x+U.x*100*b,0,256),Ee.z=Mt(Ee.z-U.y*100*b,0,256);let I=qe.getContext("2d");I.drawImage(te.canvas,0,0),I.strokeStyle="white",I.strokeRect(Ee.x-3,Ee.z-3,6,6),U.confirm?nt(Ee.x,Ee.z):U.cancel&&Ae.close();return}if(Ss.open){U.cancel||U.interact?Jr():U.confirm?qt.activate():U.navUp?qt.move(-1):U.navDown?qt.move(1):(be-=b,Math.abs(U.y)>.6&&be<=0&&(qt.move(U.y>0?-1:1),be=.22),Math.abs(U.y)<.3&&(be=0)),e.render(t,i);return}if(Lt){if(Gt){de=U.mode;for(let Be of z)W.set(Be,{x:Be.x,z:Be.z,vx:Be.vx,vz:Be.vz});U.weapon&&(_e||ue)&&!ne&&Di(),U.order&&_m(U.order),U.sell&&!ne&&(We?(We=null,Fe("Ponto de venda fechado.")):nr().length?(We={x:h.x,z:h.z},Fe("Ponto de venda aberto. Fique parado.")):Fe("Sem estoque. Compre no mercado negro da casa de penhores.")),We&&(ne||ae(h,We)>4)&&(We=null,Fe("Ponto de venda fechado.")),mm(b);let I=U.aim&&!ne&&vn<=0&&h.health>0;if(I!==Re&&(Xe=I?.015:.22,Re=I),Q=Math.abs(U.lookX)+Math.abs(U.lookY)>.003?0:Q+b,ct-=U.lookX,Xe=Mt(Xe+U.lookY,I?-1.03:-.31,.84),ne&&Q>1.2&&(Xe+=(.24-Xe)*b),I&&ym(b),h.health>0&&h.health<100&&O-(h.lastHurt??0)>10&&(h.health=Math.min(100,h.health+3*b)),pt-=b,Ft-=b,zt-=b,Pi-=b,Z-=b,ns-=b,Le-=b,a.update(b),c.update(b),s.signals.update(b),vn=Math.max(0,vn-b),ws&&(Ts-=b,Ts<=0&&em()),Mi-=b,Ii-=b,Hn-=b,js-=b,Tt>0&&(Tt-=b,Tt<=0&&kp()),Ot&&(Ot.delay-=b,Ot.delay<=0)){let Be=Ot.car;Ot=null,h.health>0&&Be.integrity>0&&ae(h,Be)<3.75&&Lc(Be)}if(U.interact&&Gp(),Ss.open)return;let A=s.props.update(b,z,ne??h);A.shadow&&(s.sun.shadow.needsUpdate=!0);for(let Be of A.events)ae(Be,ne??h)<30&&(Be.heavy?ge.crash():ge.punch(!0));vm(b,ne??h),ne?nm(b,U):im(b,{...U,aim:I}),Ou=!!U.brake,um(b,ne??h),cm(b,ne??h),ne&&(h.x=ne.x,h.z=ne.z),Jp(b),nn&&!er(nn)&&(nn=null),ne?.kind==="bike"&&au(h.model,ne);let se=ne??h;Gu(b,se),Nu(se),Vp(b),ge.motor(ne?.speed??0,!!ne);let ie=ne??h,me=I&&!ne&&h.health>0;U.fire&&ce&&!ne&&h.health>0&&he>0&&(Hn=1.38),Mm(b,ie,me||!ne&&Hn>0),me&&(js<=0||U.recruit||U.punch||U.fire&&Ft<=0)?(Tn=Wp(),js=.092):me||(Tn=null),U.recruit&&!ne&&$p(Tn),jp(b,me&&ce?Tn:null),(U.punch||U.fire&&!ce)&&!ne&&Qp(),U.fire&&!ne&&tm(me),Ve("hitmark").hidden=Mi<=0,Ve("impact").hidden=Ii<=0,s.marker.visible=ae(ie,Lr)>2.8&&ae(ie,Lr)<13,s.beacon.rotation.y=O*2,s.beacon.position.y=2.55+Math.sin(O*4)*.27,P-=b,P<=0&&(bm(ie,me),P=.1)}}else{let I=.54+Math.sin(O*.13)*.19,A=i.aspect<1?26:30;i.position.set(24+Math.sin(I)*A,14,17+Math.cos(I)*A),i.lookAt(10,2,13),Gu(b,h,!0),Nu(h)}e.render(t,i),Gt&&Xr.value==="auto"&&y>0&&y<.22&&Li>.7&&(q+=y,++L>=85&&(q/L>.026&&(Li=Math.max(.69,Li-.16),Pt()),L=0,q=0))}let Cs=Ap(()=>{Ae.open?Ae.close():Ss.open?Jr():Gt?Ge(!1):Hu()},()=>Gt),Fc=Rc("quality");(Fc==="low"||Fc==="high")&&(Xr.value=Fc),Xr.addEventListener("change",()=>{Rc("quality",Xr.value),Li=1,Pt()}),Ve("sound").addEventListener("click",()=>{Rc("sound",ge.toggle()?"on":"off"),un()}),Ve("pause").addEventListener("click",()=>Ge(!1)),Ve("reset").addEventListener("click",()=>{gn(),Ge(!0)}),Ve("close-shop").addEventListener("click",Jr),Ss.addEventListener("cancel",u=>{u.preventDefault(),Jr()});function Hu(){if(!Lt&&rn){Object.assign(h,{x:rn.x,z:rn.z,health:rn.health,floorY:0}),p(h),we=rn.cash,_e=rn.armed,ue=rn.rifle,le=_e?rn.ammo:0,Te=ue?rn.rifleAmmo:0,H="pistol",he=le,Pn(_e?"pistol":ue?"rifle":"fists"),Object.assign(ve,rn.stash),ke=rn.wardrobe,fe=rn.look,ln(h,fe),rn.garage&&(Iu(rn.garage.kind,rn.garage.model,rn.garage.color),tt=!0,Pc(De));for(let u of new Set(rn.recruits)){let y=typeof u=="number"?w[u]:G.get(u);y&&(y.role="ally",y.order="follow",y.seated=!1,y.riding=null,y.model.root.visible=!0,Xt.push(y))}Ge(!0),ct=-Math.PI/2}else Ge(!0)}qr.addEventListener("click",Hu),document.addEventListener("visibilitychange",()=>{document.hidden&&Gt&&Ge(!1)}),window.addEventListener("resize",Pt),e.domElement.addEventListener("webglcontextrestored",Pt),gn(),un(),Pt(),sa(),qr.disabled=!1,je=performance.now(),e.setAnimationLoop(Sm)}try{tM()}catch(n){console.error(n),qr.textContent="3D indispon\xEDvel",Ve("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
