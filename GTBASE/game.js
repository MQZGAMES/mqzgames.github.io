(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Td=0,ph=1,Ad=2;var Os=1,Ed=2,Er=3,xs=0,bn=1,En=2,Bs=0,_s=1,No=2,mh=3,gh=4,Cd=5;var ks=100,Rd=101,Id=102,Pd=103,Ld=104,Dd=200,Nd=201,Ud=202,Fd=203,xh=204,_h=205,zd=206,Od=207,Bd=208,kd=209,Gd=210,Vd=211,Hd=212,Wd=213,Xd=214,Ba=0,ka=1,Ga=2,vr=3,Va=4,Ha=5,Wa=6,Xa=7,yh=0,qd=1,Yd=2,Ci=0,vh=1,Mh=2,bh=3,Uo=4,Sh=5,wh=6,Th=7;var Ah=300,Gs=301,Cr=302,ml=303,gl=304,qa=1e3,Ti=1001,Ya=1002,_n=1003,Zd=1004;var Fo=1005;var yn=1006,xl=1007;var Ki=1008;var Gn=1009,Eh=1010,Ch=1011,Rr=1012,_l=1013,pi=1014,ii=1015,mi=1016,yl=1017,vl=1018,Vs=1020,Rh=35902,Ih=35899,Ph=1021,Lh=1022,$n=1023,Wi=1026,$i=1027,Ml=1028,bl=1029,ys=1030,Sl=1031;var wl=1033,zo=33776,Oo=33777,Bo=33778,ko=33779,Tl=35840,Al=35841,El=35842,Cl=35843,Rl=36196,Il=37492,Pl=37496,Ll=37488,Dl=37489,Go=37490,Nl=37491,Ul=37808,Fl=37809,zl=37810,Ol=37811,Bl=37812,kl=37813,Gl=37814,Vl=37815,Hl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,Zl=37821,Jl=36492,Kl=36494,$l=36495,jl=36283,Ql=36284,Vo=36285,ec=36286;var co=2300,Za=2301,za=2302,oh=2303,ah=2400,lh=2401,ch=2402;var Jd=3200;var tc=0,Kd=1,ji="",dn="srgb",ho="srgb-linear",uo="linear",Ut="srgb";var Oa=7680;var $d=519,jd=512,Qd=513,ef=514,Dh=515,tf=516,nf=517,Nh=518,Uh=519,sf=35044,nc=35048;var Fh="300 es",ni=2e3,Mr=2001;function Im(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rf(){let n=fo("canvas");return n.style.display="block",n}var $u={},br=null;function zh(...n){let e="THREE."+n.shift();br?br("log",e,...n):console.log(e,...n)}function of(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=of(n);let e="THREE."+n.shift();if(br)br("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=of(n);let e="THREE."+n.shift();if(br)br("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function oo(...n){let e=n.join(" ");e in $u||($u[e]=!0,et(...n))}function af(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var lf={[Ba]:Ba,[Ga]:Wa,[Va]:Va,[vr]:Ha,[ka]:ka,[Wa]:Ga,[Xa]:Xa,[Ha]:vr},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=1234567,ao=Math.PI/180,Sr=180/Math.PI;function Ir(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Oh(n,e){return(n%e+e)%e}function Lm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Dm(n,e,t){return n!==e?(t-n)/(e-n):0}function lo(n,e,t){return(1-t)*n+t*e}function Nm(n,e,t,i){return lo(n,e,1-Math.exp(-t*i))}function Um(n,e=1){return e-Math.abs(Oh(n,e*2)-e)}function Fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Om(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bm(n,e){return n+Math.random()*(e-n)}function km(n){return n*(.5-Math.random())}function Gm(n){n!==void 0&&(ju=n);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vm(n){return n*ao}function Hm(n){return n*Sr}function Wm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),m=o((e-i)/2),p=r((i-e)/2),h=o((i-e)/2);switch(s){case"XYX":n.set(a*d,c*f,c*m,a*l);break;case"YZY":n.set(c*m,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*m,a*d,a*l);break;case"XZX":n.set(a*d,c*h,c*p,a*l);break;case"YXY":n.set(c*p,a*d,c*h,a*l);break;case"ZYZ":n.set(c*h,c*p,a*d,a*l);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cf(n,e){if(e.constructor===Float32Array)return n;let t=kh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function hf(n,e){if(e.constructor===Float32Array)return n;let t=kh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Pr={DEG2RAD:ao,RAD2DEG:Sr,generateUUID:Ir,clamp:At,euclideanModulo:Oh,mapLinear:Lm,inverseLerp:Dm,lerp:lo,damp:Nm,pingpong:Um,smoothstep:Fm,smootherstep:zm,randInt:Om,randFloat:Bm,randFloatSpread:km,seededRandom:Gm,degToRad:Vm,radToDeg:Hm,isPowerOfTwo:Wm,ceilPowerOfTwo:Xm,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:qm,normalize:hf,denormalize:cf},dt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],m=r[o+0],p=r[o+1],h=r[o+2],v=r[o+3];if(f!==v||c!==m||l!==p||d!==h){let x=c*m+l*p+d*h+f*v;x<0&&(m=-m,p=-p,h=-h,v=-v,x=-x);let _=1-a;if(x<.9995){let A=Math.acos(x),C=Math.sin(A);_=Math.sin(_*A)/C,a=Math.sin(a*A)/C,c=c*_+m*a,l=l*_+p*a,d=d*_+h*a,f=f*_+v*a}else{c=c*_+m*a,l=l*_+p*a,d=d*_+h*a,f=f*_+v*a;let A=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=A,l*=A,d*=A,f*=A}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[o],m=r[o+1],p=r[o+2],h=r[o+3];return e[t]=a*h+d*f+c*p-l*m,e[t+1]=c*h+d*m+l*f-a*p,e[t+2]=l*h+d*p+a*m-c*f,e[t+3]=d*h-a*f-c*m-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(s/2),f=a(r/2),m=c(i/2),p=c(s/2),h=c(r/2);switch(o){case"XYZ":this._x=m*d*f+l*p*h,this._y=l*p*f-m*d*h,this._z=l*d*h+m*p*f,this._w=l*d*f-m*p*h;break;case"YXZ":this._x=m*d*f+l*p*h,this._y=l*p*f-m*d*h,this._z=l*d*h-m*p*f,this._w=l*d*f+m*p*h;break;case"ZXY":this._x=m*d*f-l*p*h,this._y=l*p*f+m*d*h,this._z=l*d*h+m*p*f,this._w=l*d*f-m*p*h;break;case"ZYX":this._x=m*d*f-l*p*h,this._y=l*p*f+m*d*h,this._z=l*d*h-m*p*f,this._w=l*d*f+m*p*h;break;case"YZX":this._x=m*d*f+l*p*h,this._y=l*p*f+m*d*h,this._z=l*d*h-m*p*f,this._w=l*d*f-m*p*h;break;case"XZY":this._x=m*d*f-l*p*h,this._y=l*p*f-m*d*h,this._z=l*d*h+m*p*f,this._w=l*d*f+m*p*h;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],m=i+a+f;if(m>0){let p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(d-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-i*l,this._z=r*d+o*l+i*c-s*a,this._w=o*d-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new X,Qu=new an,it=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],m=i[2],p=i[5],h=i[8],v=s[0],x=s[3],_=s[6],A=s[1],C=s[4],b=s[7],E=s[2],S=s[5],g=s[8];return r[0]=o*v+a*A+c*E,r[3]=o*x+a*C+c*S,r[6]=o*_+a*b+c*g,r[1]=l*v+d*A+f*E,r[4]=l*x+d*C+f*S,r[7]=l*_+d*b+f*g,r[2]=m*v+p*A+h*E,r[5]=m*x+p*C+h*S,r[8]=m*_+p*b+h*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*r*d+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,m=a*c-d*r,p=l*r-o*c,h=t*f+i*m+s*p;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/h;return e[0]=f*v,e[1]=(s*l-d*i)*v,e[2]=(a*i-s*o)*v,e[3]=m*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gc=new it,ed=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ym(){let n={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ut&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ho]:{primaries:e,whitePoint:i,transfer:uo,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}var Tt=Ym();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rr,Ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=fo("canvas")),rr.width=e.width,rr.height=e.height;let s=rr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zm=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vc(s[o].image)):r.push(Vc(s[o]))}else r=Vc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ja.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var Jm=0,Hc=new X,Dn=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ti,s=Ti,r=yn,o=Ki,a=$n,c=Gn,l=n.DEFAULT_ANISOTROPY,d=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Ir(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ah;Dn.DEFAULT_ANISOTROPY=1;var Zt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],m=c[1],p=c[5],h=c[9],v=c[2],x=c[6],_=c[10];if(Math.abs(d-m)<.01&&Math.abs(f-v)<.01&&Math.abs(h-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+v)<.1&&Math.abs(h+x)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,b=(p+1)/2,E=(_+1)/2,S=(d+m)/4,g=(f+v)/4,w=(h+x)/4;return C>b&&C>E?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=S/i,r=g/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=g/r,s=w/r),this.set(i,s,r,t),this}let A=Math.sqrt((x-h)*(x-h)+(f-v)*(f-v)+(m-d)*(m-d));return Math.abs(A)<.001&&(A=1),this.x=(x-h)/A,this.y=(f-v)/A,this.z=(m-d)/A,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Dn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},po=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Et=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,d,f,m,p,h,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,d,f,m,p,h,v,x)}set(e,t,i,s,r,o,a,c,l,d,f,m,p,h,v,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=d,_[10]=f,_[14]=m,_[3]=p,_[7]=h,_[11]=v,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let m=o*d,p=o*f,h=a*d,v=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=p+h*l,t[5]=m-v*l,t[9]=-a*c,t[2]=v-m*l,t[6]=h+p*l,t[10]=o*c}else if(e.order==="YXZ"){let m=c*d,p=c*f,h=l*d,v=l*f;t[0]=m+v*a,t[4]=h*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-h,t[6]=v+m*a,t[10]=o*c}else if(e.order==="ZXY"){let m=c*d,p=c*f,h=l*d,v=l*f;t[0]=m-v*a,t[4]=-o*f,t[8]=h+p*a,t[1]=p+h*a,t[5]=o*d,t[9]=v-m*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let m=o*d,p=o*f,h=a*d,v=a*f;t[0]=c*d,t[4]=h*l-p,t[8]=m*l+v,t[1]=c*f,t[5]=v*l+m,t[9]=p*l-h,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,p=o*l,h=a*c,v=a*l;t[0]=c*d,t[4]=v-m*f,t[8]=h*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*f+h,t[10]=m-v*f}else if(e.order==="XZY"){let m=o*c,p=o*l,h=a*c,v=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=m*f+v,t[5]=o*d,t[9]=p*f-h,t[2]=h*f-p,t[6]=a*d,t[10]=v*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Km,e,$m)}lookAt(e,t,i){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),rs.crossVectors(i,Yn),rs.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),rs.crossVectors(i,Yn)),rs.normalize(),pa.crossVectors(Yn,rs),s[0]=rs.x,s[4]=pa.x,s[8]=Yn.x,s[1]=rs.y,s[5]=pa.y,s[9]=Yn.y,s[2]=rs.z,s[6]=pa.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],m=i[9],p=i[13],h=i[2],v=i[6],x=i[10],_=i[14],A=i[3],C=i[7],b=i[11],E=i[15],S=s[0],g=s[4],w=s[8],z=s[12],N=s[1],D=s[5],k=s[9],F=s[13],P=s[2],V=s[6],H=s[10],B=s[14],q=s[3],G=s[7],K=s[11],ae=s[15];return r[0]=o*S+a*N+c*P+l*q,r[4]=o*g+a*D+c*V+l*G,r[8]=o*w+a*k+c*H+l*K,r[12]=o*z+a*F+c*B+l*ae,r[1]=d*S+f*N+m*P+p*q,r[5]=d*g+f*D+m*V+p*G,r[9]=d*w+f*k+m*H+p*K,r[13]=d*z+f*F+m*B+p*ae,r[2]=h*S+v*N+x*P+_*q,r[6]=h*g+v*D+x*V+_*G,r[10]=h*w+v*k+x*H+_*K,r[14]=h*z+v*F+x*B+_*ae,r[3]=A*S+C*N+b*P+E*q,r[7]=A*g+C*D+b*V+E*G,r[11]=A*w+C*k+b*H+E*K,r[15]=A*z+C*F+b*B+E*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],m=e[10],p=e[14],h=e[3],v=e[7],x=e[11],_=e[15],A=c*p-l*m,C=a*p-l*f,b=a*m-c*f,E=o*p-l*d,S=o*m-c*d,g=o*f-a*d;return t*(v*A-x*C+_*b)-i*(h*A-x*E+_*S)+s*(h*C-v*E+_*g)-r*(h*b-v*S+x*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-i*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],m=e[10],p=e[11],h=e[12],v=e[13],x=e[14],_=e[15],A=t*a-i*o,C=t*c-s*o,b=t*l-r*o,E=i*c-s*a,S=i*l-r*a,g=s*l-r*c,w=d*v-f*h,z=d*x-m*h,N=d*_-p*h,D=f*x-m*v,k=f*_-p*v,F=m*_-p*x,P=A*F-C*k+b*D+E*N-S*z+g*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=(a*F-c*k+l*D)*V,e[1]=(s*k-i*F-r*D)*V,e[2]=(v*g-x*S+_*E)*V,e[3]=(m*S-f*g-p*E)*V,e[4]=(c*N-o*F-l*z)*V,e[5]=(t*F-s*N+r*z)*V,e[6]=(x*b-h*g-_*C)*V,e[7]=(d*g-m*b+p*C)*V,e[8]=(o*k-a*N+l*w)*V,e[9]=(i*N-t*k-r*w)*V,e[10]=(h*S-v*b+_*A)*V,e[11]=(f*b-d*S-p*A)*V,e[12]=(a*z-o*D-c*w)*V,e[13]=(t*D-i*z+s*w)*V,e[14]=(v*C-h*E-x*A)*V,e[15]=(d*E-f*C+m*A)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+i,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,m=r*l,p=r*d,h=r*f,v=o*d,x=o*f,_=a*f,A=c*l,C=c*d,b=c*f,E=i.x,S=i.y,g=i.z;return s[0]=(1-(v+_))*E,s[1]=(p+b)*E,s[2]=(h-C)*E,s[3]=0,s[4]=(p-b)*S,s[5]=(1-(m+_))*S,s[6]=(x+A)*S,s[7]=0,s[8]=(h+C)*g,s[9]=(x-A)*g,s[10]=(1-(m+v))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=or.set(s[0],s[1],s[2]).length(),a=or.set(s[4],s[5],s[6]).length(),c=or.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let l=1/o,d=1/a,f=1/c;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=d,ci.elements[5]*=d,ci.elements[6]*=d,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,t.setFromRotationMatrix(ci),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=ni,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(i-s),m=(t+e)/(t-e),p=(i+s)/(i-s),h,v;if(c)h=r/(o-r),v=o*r/(o-r);else if(a===ni)h=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Mr)h=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni,c=!1){let l=this.elements,d=2/(t-e),f=2/(i-s),m=-(t+e)/(t-e),p=-(i+s)/(i-s),h,v;if(c)h=1/(o-r),v=o/(o-r);else if(a===ni)h=-2/(o-r),v=-(o+r)/(o-r);else if(a===Mr)h=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},or=new X,ci=new Et,Km=new X(0,0,0),$m=new X(1,1,1),rs=new X,pa=new X,Yn=new X,nd=new Et,id=new an,fi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jm=0,sd=new X,ar=new an,Oi=new Et,ma=new X,eo=new X,Qm=new X,e0=new an,rd=new X(1,0,0),od=new X(0,1,0),ad=new X(0,0,1),ld={type:"added"},t0={type:"removed"},lr={type:"childadded",child:null},Wc={type:"childremoved",child:null},Vt=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new X,t=new fi,i=new an,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new it}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(eo,ma,this.up):Oi.lookAt(ma,eo,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Oi),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),lr.child=e,this.dispatchEvent(lr),lr.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),m=o(e.skeletons),p=o(e.animations),h=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),h.length>0&&(i.nodes=h)}return i.object=s,i;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new X(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},n0={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,i),_=this._getHandJoint(l,v);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=d.position.distanceTo(f.position),p=.02,h=.005;l.inputState.pinching&&m>p+h?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=p-h&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Xc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=Oh(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xc(o,r,e+1/3),this.g=Xc(o,r,e),this.b=Xc(o,r,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function i(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let i=uf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Tt.workingToColorSpace(An.copy(this),e),Math.round(At(An.r*255,0,255))*65536+Math.round(At(An.g*255,0,255))*256+Math.round(At(An.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(An.copy(this),t);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=dn){Tt.workingToColorSpace(An.copy(this),e);let t=An.r,i=An.g,s=An.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(ga);let i=lo(os.h,ga.h,t),s=lo(os.s,ga.s,t),r=lo(os.l,ga.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Ke;Ke.NAMES=uf;var go=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xo=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new X,Bi=new X,qc=new X,ki=new X,cr=new X,hr=new X,cd=new X,Yc=new X,Zc=new X,Jc=new X,Kc=new Zt,$c=new Zt,jc=new Zt,hs=class n{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hi.subVectors(s,t),Bi.subVectors(i,t),qc.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(Bi),c=hi.dot(qc),l=Bi.dot(Bi),d=Bi.dot(qc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let m=1/f,p=(l*c-a*d)*m,h=(o*d-a*c)*m;return r.set(1-p-h,h,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(a,ki.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Kc.setScalar(0),$c.setScalar(0),jc.setScalar(0),Kc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,i),jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(jc,r.z),o}static isFrontFacing(e,t,i,s){return hi.subVectors(i,t),Bi.subVectors(e,t),hi.cross(Bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;cr.subVectors(s,i),hr.subVectors(r,i),Yc.subVectors(e,i);let c=cr.dot(Yc),l=hr.dot(Yc);if(c<=0&&l<=0)return t.copy(i);Zc.subVectors(e,s);let d=cr.dot(Zc),f=hr.dot(Zc);if(d>=0&&f<=d)return t.copy(s);let m=c*f-d*l;if(m<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(i).addScaledVector(cr,o);Jc.subVectors(e,r);let p=cr.dot(Jc),h=hr.dot(Jc);if(h>=0&&p<=h)return t.copy(r);let v=p*l-c*h;if(v<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(hr,a);let x=d*h-p*f;if(x<=0&&f-d>=0&&p-h>=0)return cd.subVectors(r,s),a=(f-d)/(f-d+(p-h)),t.copy(s).addScaledVector(cd,a);let _=1/(x+v+m);return o=v*_,a=m*_,t.copy(i).addScaledVector(cr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),_a.subVectors(this.max,to),ur.subVectors(e.a,to),dr.subVectors(e.b,to),fr.subVectors(e.c,to),as.subVectors(dr,ur),ls.subVectors(fr,dr),Ps.subVectors(ur,fr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ps.z,Ps.y,as.z,0,-as.x,ls.z,0,-ls.x,Ps.z,0,-Ps.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ps.y,Ps.x,0];return!Qc(t,ur,dr,fr,_a)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,ur,dr,fr,_a))?!1:(ya.crossVectors(as,ls),t=[ya.x,ya.y,ya.z],Qc(t,ur,dr,fr,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new X,new X,new X,new X,new X,new X,new X,new X],ui=new X,xa=new Ei,ur=new X,dr=new X,fr=new X,as=new X,ls=new X,Ps=new X,to=new X,_a=new X,ya=new X,Ls=new X;function Qc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ls.fromArray(n,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=e.dot(Ls),l=t.dot(Ls),d=i.dot(Ls);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var hn=new X,va=new dt,i0=0,en=class extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sf,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?kh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):cf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hf(e,this.array)}};var _o=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var yo=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ct=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},s0=new Ei,no=new X,eh=new X,Xi=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):s0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(eh)),this.expandByPoint(no.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},r0=0,ti=new Et,th=new Vt,pr=new X,Zn=new Ei,io=new Ei,xn=new X,Jt=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Im(e)?yo:_o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];io.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Zn.min,io.min),Zn.expandByPoint(xn),xn.addVectors(Zn.max,io.max),Zn.expandByPoint(xn)):(Zn.expandByPoint(io.min),Zn.expandByPoint(io.max))}Zn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)xn.fromBufferAttribute(a,l),c&&(pr.fromBufferAttribute(e,l),xn.add(pr)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new en(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let z=0;z<i.count;z++)a[z]=new X,c[z]=new X;let d=new X,f=new X,m=new X,p=new dt,h=new dt,v=new dt,x=new X,_=new X;function A(z,N,D){l[z]=l[N]=l[D]=1,d.fromBufferAttribute(i,z),f.fromBufferAttribute(i,N),m.fromBufferAttribute(i,D),p.fromBufferAttribute(r,z),h.fromBufferAttribute(r,N),v.fromBufferAttribute(r,D),f.sub(d),m.sub(d),h.sub(p),v.sub(p);let k=1/(h.x*v.y-v.x*h.y);isFinite(k)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(m,-h.y).multiplyScalar(k),_.copy(m).multiplyScalar(h.x).addScaledVector(f,-v.x).multiplyScalar(k),a[z].add(x),a[N].add(x),a[D].add(x),c[z].add(_),c[N].add(_),c[D].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,N=C.length;z<N;++z){let D=C[z],k=D.start,F=D.count;for(let P=k,V=k+F;P<V;P+=3)A(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let b=new X,E=new X,S=new X,g=new X;function w(z){S.fromBufferAttribute(s,z),g.copy(S);let N=a[z];b.copy(N),b.sub(S.multiplyScalar(S.dot(N))).normalize(),E.crossVectors(g,N);let k=E.dot(c[z])<0?-1:1;o.setXYZW(z,b.x,b.y,b.z,k)}for(let z=0,N=i.count;z<N;++z)l[z]&&w(z);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);let s=new X,r=new X,o=new X,a=new X,c=new X,l=new X,d=new X,f=new X;if(e)for(let m=0,p=e.count;m<p;m+=3){let h=e.getX(m+0),v=e.getX(m+1),x=e.getX(m+2);s.fromBufferAttribute(t,h),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,h),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),a.add(d),c.add(d),l.add(d),i.setXYZ(h,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,m=new l.constructor(c.length*d),p=0,h=0;for(let v=0,x=c.length;v<x;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*d;for(let _=0;_<d;_++)m[h++]=l[p++]}return new en(m,d,f)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let m=l[d],p=e(m,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,m=l.length;f<m;f++){let p=l[f];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let m=0,p=f.length;m<p;m++)d.push(f[m].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nh=new X,o0=new X,a0=new it,di=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nh.subVectors(i,t).cross(o0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||a0.getNormalMatrix(e),s=this.coplanarPoint(nh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},l0=0,qi=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=_s,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=_h,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new di().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new dt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Vi=new X,ih=new X,Ma=new X,ba=new X,vo=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ih.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),ba.copy(this.origin).sub(ih);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ma),a=ba.dot(this.direction),c=-ba.dot(Ma),l=ba.lengthSq(),d=Math.abs(1-o*o),f,m,p,h;if(d>0)if(f=o*c-a,m=o*a-c,h=r*d,f>=0)if(m>=-h)if(m<=h){let v=1/d;f*=v,m*=v,p=f*(f+o*m+2*a)+m*(o*f+m+2*c)+l}else m=r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*c)+l;else m=-r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*c)+l;else m<=-h?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+m*(m+2*c)+l):m<=h?(f=0,m=Math.min(Math.max(-r,-c),r),p=m*(m+2*c)+l):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+m*(m+2*c)+l);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ih).addScaledVector(Ma,m),p}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(i=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(i=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),d>=0?(r=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,m=e.y-o.y,p=e.z-o.z,h=t.x-o.x,v=t.y-o.y,x=t.z-o.z,_=i.x-o.x,A=i.y-o.y,C=i.z-o.z,b=Math.abs(c),E=Math.abs(l),S=Math.abs(d),g,w,z,N,D,k,F,P,V,H,B,q;if(b>=E&&b>=S?(z=c,k=f,V=h,q=_,c>=0?(g=l,w=d,N=m,D=p,F=v,P=x,H=A,B=C):(g=d,w=l,N=p,D=m,F=x,P=v,H=C,B=A)):E>=S?(z=l,k=m,V=v,q=A,l>=0?(g=d,w=c,N=p,D=f,F=x,P=h,H=C,B=_):(g=c,w=d,N=f,D=p,F=h,P=x,H=_,B=C)):(z=d,k=p,V=x,q=C,d>=0?(g=c,w=l,N=f,D=m,F=h,P=v,H=_,B=A):(g=l,w=c,N=m,D=f,F=v,P=h,H=A,B=_)),z===0)return null;let G=g/z,K=w/z,ae=1/z,j=N-G*k,xe=D-K*k,Z=F-G*V,de=P-K*V,Ae=H-G*q,ge=B-K*q,Me=Ae*de-ge*Z,He=j*ge-xe*Ae,ot=Z*xe-de*j;if(s){if(Me<0||He<0||ot<0)return null}else if((Me<0||He<0||ot<0)&&(Me>0||He>0||ot>0))return null;let Je=Me+He+ot;if(Je===0)return null;let ft=ae*(Me*k+He*V+ot*q);return(Je>0?ft<0:ft>0)?null:this.at(ft/Je,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new Et,Ds=new vo,Sa=new Xi,ud=new X,wa=new X,Ta=new X,Aa=new X,sh=new X,Ea=new X,dd=new X,Ca=new X,Rt=class extends Vt{constructor(e=new Jt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(sh.fromBufferAttribute(f,e),o?Ea.addScaledVector(sh,d):Ea.addScaledVector(sh.sub(t),d))}t.add(Ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Sa.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Sa,ud)===null||Ds.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(hd.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(hd),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let h=0,v=m.length;h<v;h++){let x=m[h],_=o[x.materialIndex],A=Math.max(x.start,p.start),C=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let b=A,E=C;b<E;b+=3){let S=a.getX(b),g=a.getX(b+1),w=a.getX(b+2);s=Ra(this,_,e,i,l,d,f,S,g,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let h=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let x=h,_=v;x<_;x+=3){let A=a.getX(x),C=a.getX(x+1),b=a.getX(x+2);s=Ra(this,o,e,i,l,d,f,A,C,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let h=0,v=m.length;h<v;h++){let x=m[h],_=o[x.materialIndex],A=Math.max(x.start,p.start),C=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let b=A,E=C;b<E;b+=3){let S=b,g=b+1,w=b+2;s=Ra(this,_,e,i,l,d,f,S,g,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let h=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let x=h,_=v;x<_;x+=3){let A=x,C=x+1,b=x+2;s=Ra(this,o,e,i,l,d,f,A,C,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function c0(n,e,t,i,s,r,o,a){let c;if(e.side===bn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===xs,a),c===null)return null;Ca.copy(a),Ca.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:n}}function Ra(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,wa),n.getVertexPosition(c,Ta),n.getVertexPosition(l,Aa);let d=c0(n,e,t,i,wa,Ta,Aa,dd);if(d){let f=new X;hs.getBarycoord(dd,wa,Ta,Aa,f),s&&(d.uv=hs.getInterpolatedAttribute(s,a,c,l,f,new dt)),r&&(d.uv1=hs.getInterpolatedAttribute(r,a,c,l,f,new dt)),o&&(d.normal=hs.getInterpolatedAttribute(o,a,c,l,f,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new X,materialIndex:0};hs.getNormal(wa,Ta,Aa,m.normal),d.face=m,d.barycoord=f}return d}var Us=class extends Dn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=_n,d=_n,f,m){super(null,o,a,c,l,d,s,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var us=class extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Et,fd=new Et,Ia=[],pd=new Ei,h0=new Et,so=new Rt,ro=new Xi,Nn=class extends Rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new us(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,h0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),pd.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),ro.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(i),e.ray.intersectsSphere(ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),fd.multiplyMatrices(i,mr),so.matrixWorld=fd,so.raycast(e,Ia);for(let o=0,a=Ia.length;o<a;o++){let c=Ia[o];c.instanceId=r,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Us(new Float32Array(s*this.count),s,this.count,Ml,ii));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new Xi,u0=new dt(.5,.5),Pa=new X,ds=class{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],m=r[6],p=r[7],h=r[8],v=r[9],x=r[10],_=r[11],A=r[12],C=r[13],b=r[14],E=r[15];if(s[0].setComponents(l-o,p-d,_-h,E-A).normalize(),s[1].setComponents(l+o,p+d,_+h,E+A).normalize(),s[2].setComponents(l+a,p+f,_+v,E+C).normalize(),s[3].setComponents(l-a,p-f,_-v,E-C).normalize(),i)s[4].setComponents(c,m,x,b).normalize(),s[5].setComponents(l-c,p-m,_-x,E-b).normalize();else if(s[4].setComponents(l-c,p-m,_-x,E-b).normalize(),t===ni)s[5].setComponents(l+c,p+m,_+x,E+b).normalize();else if(t===Mr)s[5].setComponents(c,m,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);let t=u0.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Pa.x=s.normal.x>0?e.max.x:e.min.x,Pa.y=s.normal.y>0?e.max.y:e.min.y,Pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},md=new Et,ja=class n{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];md.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ds),i[s].setFromProjectionMatrix(md,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ds),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Qa=class extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gd=new Et,hh=new vo,La=new Xi,Da=new X,Mo=class extends Vt{constructor(e=new Jt,t=new Qa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;gd.copy(s).invert(),hh.copy(e.ray).applyMatrix4(gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let m=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let h=m,v=p;h<v;h++){let x=l.getX(h);Da.fromBufferAttribute(f,x),xd(Da,x,c,s,e,t,this)}}else{let m=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let h=m,v=p;h<v;h++)Da.fromBufferAttribute(f,h),xd(Da,h,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xd(n,e,t,i,s,r,o){let a=hh.distanceSqToPoint(n);if(a<t){let c=new X;hh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var bo=class extends Dn{constructor(e=[],t=Gs,i,s,r,o,a,c,l,d){super(e,t,i,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fs=class extends Dn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends Dn{constructor(e,t,i=pi,s,r,o,a=_n,c=_n,l,d=Wi,f=1){if(d!==Wi&&d!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:f};super(m,s,r,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},So=class extends Yi{constructor(e,t=pi,i=Gs,s,r,o=_n,a=_n,c,l=Wi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wo=class extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ln=class n extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],m=0,p=0;h("z","y","x",-1,-1,i,t,e,o,r,0),h("z","y","x",1,-1,i,t,-e,o,r,1),h("x","z","y",1,1,e,i,t,s,o,2),h("x","z","y",1,-1,e,i,-t,s,o,3),h("x","y","z",1,-1,e,t,i,s,r,4),h("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2));function h(v,x,_,A,C,b,E,S,g,w,z){let N=b/g,D=E/w,k=b/2,F=E/2,P=S/2,V=g+1,H=w+1,B=0,q=0,G=new X;for(let K=0;K<H;K++){let ae=K*D-F;for(let j=0;j<V;j++){let xe=j*N-k;G[v]=xe*A,G[x]=ae*C,G[_]=P,l.push(G.x,G.y,G.z),G[v]=0,G[x]=0,G[_]=S>0?1:-1,d.push(G.x,G.y,G.z),f.push(j/g),f.push(1-K/w),B+=1}}for(let K=0;K<w;K++)for(let ae=0;ae<g;ae++){let j=m+ae+V*K,xe=m+ae+V*(K+1),Z=m+(ae+1)+V*(K+1),de=m+(ae+1)+V*K;c.push(j,xe,de),c.push(xe,Z,de),q+=6}a.addGroup(p,q,z),p+=q,m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var zs=class n extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new X,d=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,m=3;f<=t;f++,m+=3){let p=i+f/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[m]/e+1)/2,d.y=(o[m+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Un=class n extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],m=[],p=[],h=0,v=[],x=i/2,_=0;A(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(m,3)),this.setAttribute("uv",new Ct(p,2));function A(){let b=new X,E=new X,S=0,g=(t-e)/i;for(let w=0;w<=r;w++){let z=[],N=w/r,D=N*(t-e)+e;for(let k=0;k<=s;k++){let F=k/s,P=F*c+a,V=Math.sin(P),H=Math.cos(P);E.x=D*V,E.y=-N*i+x,E.z=D*H,f.push(E.x,E.y,E.z),b.set(V,g,H).normalize(),m.push(b.x,b.y,b.z),p.push(F,1-N),z.push(h++)}v.push(z)}for(let w=0;w<s;w++)for(let z=0;z<r;z++){let N=v[z][w],D=v[z+1][w],k=v[z+1][w+1],F=v[z][w+1];(e>0||z!==0)&&(d.push(N,D,F),S+=3),(t>0||z!==r-1)&&(d.push(D,k,F),S+=3)}l.addGroup(_,S,0),_+=S}function C(b){let E=h,S=new dt,g=new X,w=0,z=b===!0?e:t,N=b===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,x*N,0),m.push(0,N,0),p.push(.5,.5),h++;let D=h;for(let k=0;k<=s;k++){let P=k/s*c+a,V=Math.cos(P),H=Math.sin(P);g.x=z*H,g.y=x*N,g.z=z*V,f.push(g.x,g.y,g.z),m.push(0,N,0),S.x=V*.5+.5,S.y=H*.5*N+.5,p.push(S.x,S.y),h++}for(let k=0;k<s;k++){let F=E+k,P=D+k;b===!0?d.push(P,P+1,F):d.push(P+1,P,F),w+=3}l.addGroup(_,w,b===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var To=class n extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),d(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let C=new X,b=new X,E=new X;for(let S=0;S<t.length;S+=3)p(t[S+0],C),p(t[S+1],b),p(t[S+2],E),c(C,b,E,A)}function c(A,C,b,E){let S=E+1,g=[];for(let w=0;w<=S;w++){g[w]=[];let z=A.clone().lerp(b,w/S),N=C.clone().lerp(b,w/S),D=S-w;for(let k=0;k<=D;k++)k===0&&w===S?g[w][k]=z:g[w][k]=z.clone().lerp(N,k/D)}for(let w=0;w<S;w++)for(let z=0;z<2*(S-w)-1;z++){let N=Math.floor(z/2);z%2===0?(m(g[w][N+1]),m(g[w+1][N]),m(g[w][N])):(m(g[w][N+1]),m(g[w+1][N+1]),m(g[w+1][N]))}}function l(A){let C=new X;for(let b=0;b<r.length;b+=3)C.x=r[b+0],C.y=r[b+1],C.z=r[b+2],C.normalize().multiplyScalar(A),r[b+0]=C.x,r[b+1]=C.y,r[b+2]=C.z}function d(){let A=new X;for(let C=0;C<r.length;C+=3){A.x=r[C+0],A.y=r[C+1],A.z=r[C+2];let b=x(A)/2/Math.PI+.5,E=_(A)/Math.PI+.5;o.push(b,1-E)}h(),f()}function f(){for(let A=0;A<o.length;A+=6){let C=o[A+0],b=o[A+2],E=o[A+4],S=Math.max(C,b,E),g=Math.min(C,b,E);S>.9&&g<.1&&(C<.2&&(o[A+0]+=1),b<.2&&(o[A+2]+=1),E<.2&&(o[A+4]+=1))}}function m(A){r.push(A.x,A.y,A.z)}function p(A,C){let b=A*3;C.x=e[b+0],C.y=e[b+1],C.z=e[b+2]}function h(){let A=new X,C=new X,b=new X,E=new X,S=new dt,g=new dt,w=new dt;for(let z=0,N=0;z<r.length;z+=9,N+=6){A.set(r[z+0],r[z+1],r[z+2]),C.set(r[z+3],r[z+4],r[z+5]),b.set(r[z+6],r[z+7],r[z+8]),S.set(o[N+0],o[N+1]),g.set(o[N+2],o[N+3]),w.set(o[N+4],o[N+5]),E.copy(A).add(C).add(b).divideScalar(3);let D=x(E);v(S,N+0,A,D),v(g,N+2,C,D),v(w,N+4,b,D)}}function v(A,C,b,E){E<0&&A.x===1&&(o[C]=A.x-1),b.x===0&&b.z===0&&(o[C]=E/2/Math.PI+.5)}function x(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Zi=class n extends To{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ji=class n extends To{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bn=class n extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,d=c+1,f=e/a,m=t/c,p=[],h=[],v=[],x=[];for(let _=0;_<d;_++){let A=_*m-o;for(let C=0;C<l;C++){let b=C*f-r;h.push(b,-A,0),v.push(0,0,1),x.push(C/a),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let A=0;A<a;A++){let C=A+l*_,b=A+l*(_+1),E=A+1+l*(_+1),S=A+1+l*_;p.push(C,b,S),p.push(b,E,S)}this.setIndex(p),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ao=class n extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],d=[],f=e,m=(t-e)/s,p=new X,h=new dt;for(let v=0;v<=s;v++){for(let x=0;x<=i;x++){let _=r+x/i*o;p.x=f*Math.cos(_),p.y=f*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),h.x=(p.x/t+1)/2,h.y=(p.y/t+1)/2,d.push(h.x,h.y)}f+=m}for(let v=0;v<s;v++){let x=v*(i+1);for(let _=0;_<i;_++){let A=_+x,C=A,b=A+i+1,E=A+i+2,S=A+1;a.push(C,b,S),a.push(b,E,S)}}this.setIndex(a),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var fs=class n extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new X,m=new X,p=[],h=[],v=[],x=[];for(let _=0;_<=i;_++){let A=[],C=_/i,b=o+C*a,E=e*Math.cos(b),S=Math.sqrt(e*e-E*E),g=0;_===0&&o===0?g=.5/t:_===i&&c===Math.PI&&(g=-.5/t);for(let w=0;w<=t;w++){let z=w/t,N=s+z*r;f.x=-S*Math.cos(N),f.y=E,f.z=S*Math.sin(N),h.push(f.x,f.y,f.z),m.copy(f).normalize(),v.push(m.x,m.y,m.z),x.push(z+g,1-C),A.push(l++)}d.push(A)}for(let _=0;_<i;_++)for(let A=0;A<t;A++){let C=d[_][A+1],b=d[_][A],E=d[_+1][A],S=d[_+1][A+1];(_!==0||o>0)&&p.push(C,b,S),(_!==i-1||c<Math.PI)&&p.push(b,E,S)}this.setIndex(p),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Eo=class n extends Jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],d=[],f=[],m=new X,p=new X,h=new X;for(let v=0;v<=i;v++){let x=o+v/i*a;for(let _=0;_<=s;_++){let A=_/s*r;p.x=(e+t*Math.cos(x))*Math.cos(A),p.y=(e+t*Math.cos(x))*Math.sin(A),p.z=t*Math.sin(x),l.push(p.x,p.y,p.z),m.x=e*Math.cos(A),m.y=e*Math.sin(A),h.subVectors(p,m).normalize(),d.push(h.x,h.y,h.z),f.push(_/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let x=1;x<=s;x++){let _=(s+1)*v+x-1,A=(s+1)*(v-1)+x-1,C=(s+1)*(v-1)+x,b=(s+1)*v+x;c.push(_,A,b),c.push(A,C,b)}this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(_d(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(_d(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=Hs(n[t]);for(let s in i)e[s]=i[s]}return e}function _d(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function d0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}var df={clone:Hs,merge:Cn},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new dt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new it().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},el=class extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var tl=class extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nl=class extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Na(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ps=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},il=class extends ps{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lh:r=e,a=2*t-i;break;case ch:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case lh:o=e,c=2*i-t;break;case ch:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,p=this._weightNext,h=(i-t)/(s-t),v=h*h,x=v*h,_=-m*x+2*m*v-m*h,A=(1+m)*x+(-1.5-2*m)*v+(-.5+m)*h+1,C=(-1-p)*x+(1.5+p)*v+.5*h,b=p*x-p*v;for(let E=0;E!==a;++E)r[E]=_*o[d+E]+A*o[l+E]+C*o[c+E]+b*o[f+E];return r}},sl=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(i-t)/(s-t),f=1-d;for(let m=0;m!==a;++m)r[m]=o[l+m]*f+o[c+m]*d;return r}},rl=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ol=class extends ps{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let h=(i-t)/(s-t),v=1-h;for(let x=0;x!==a;++x)r[x]=o[l+x]*v+o[c+x]*h;return r}let m=a*2,p=e-1;for(let h=0;h!==a;++h){let v=o[l+h],x=o[c+h],_=p*m+h*2,A=f[_],C=f[_+1],b=e*m+h*2,E=d[b],S=d[b+1],g=g0(i,t,A,E,s);r[h]=ff(g,v,C,S,x)}return r}};function ff(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function m0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function g0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=ff(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=m0(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Na(e.settings)&&(i.settings={inTangents:gr(e.settings.inTangents,Array),outTangents:gr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break;case oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return et("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Na(this.settings)&&(yd(this.settings.inTangents,e),yd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Na(this.settings)&&(vd(this.settings.inTangents,e),vd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){rt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){rt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Pm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){rt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===za,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,m=f-i,p=f+i;for(let h=0;h!==i;++h){let v=t[f+h];if(v!==t[m+h]||v!==t[p+h]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,m=o*i;for(let p=0;p!==i;++p)t[m+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Na(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function vd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Za;var ms=class extends Kn{constructor(e,t,i){super(e,t,i)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=co;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Kn{constructor(e,t,i,s){super(e,t,i,s)}};al.prototype.ValueTypeName="color";var ll=class extends Kn{constructor(e,t,i,s){super(e,t,i,s)}};ll.prototype.ValueTypeName="number";var cl=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},Co=class extends Kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Kn{constructor(e,t,i){super(e,t,i)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=co;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Kn{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="vector";var ul=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=l.length;f<m;f+=2){let p=l[f],h=l[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return h}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pf=new ul,dl=class{constructor(e){this.manager=e!==void 0?e:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ro=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Io=class extends Ro{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},rh=new Et,Md=new X,bd=new X,fl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Mr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ua=new X,Fa=new an,wi=new X,Po=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ua,Fa,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ua,Fa,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new X,Sd=new dt,wd=new dt,Ln=class extends Po{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,wd),t.subVectors(wd,Sd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Lo=class extends Po{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uh=class extends fl{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new uh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xr=-90,_r=1,Ar=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ln(xr,_r,e,t);s.layers=this.layers,this.add(s);let r=new Ln(xr,_r,e,t);r.layers=this.layers,this.add(r);let o=new Ln(xr,_r,e,t);o.layers=this.layers,this.add(o);let a=new Ln(xr,_r,e,t);a.layers=this.layers,this.add(a);let c=new Ln(xr,_r,e,t);c.layers=this.layers,this.add(c);let l=new Ln(xr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,m,p),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}},pl=class extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Vh="\\[\\]\\.:\\/",x0=new RegExp("["+Vh+"]","g"),Hh="[^"+Vh+"]",_0="[^"+Vh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",Hh),v0=/(WCOD+)?/.source.replace("WCOD",_0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),S0=new RegExp("^"+y0+v0+M0+b0+"$"),w0=["material","materials","bones","map"],dh=class{constructor(e,t,i){let s=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(e){let t=S0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);w0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=dh;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lM=new Float32Array(1);var fh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Wh(n,e,t,i){let s=T0(i);switch(t){case Ph:return n*e;case Ml:return n*e/s.components*s.byteLength;case bl:return n*e/s.components*s.byteLength;case ys:return n*e*2/s.components*s.byteLength;case Sl:return n*e*2/s.components*s.byteLength;case Lh:return n*e*3/s.components*s.byteLength;case $n:return n*e*4/s.components*s.byteLength;case wl:return n*e*4/s.components*s.byteLength;case zo:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(n,16)*Math.max(e,8)/4;case Tl:case El:return Math.max(n,8)*Math.max(e,8)/2;case Rl:case Il:case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Go:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Kl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vo:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T0(n){switch(n){case Gn:case Eh:return{byteLength:1,components:1};case Rr:case Ch:case mi:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case pi:case _l:case ii:return{byteLength:4,components:1};case Rh:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ff(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function L0(n){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((p,h)=>p.start-h.start);let m=0;for(let p=1;p<f.length;p++){let h=f[m],v=f[p];v.start<=h.start+h.count+1?h.count=Math.max(h.count,v.start+v.count-h.start):(++m,f[m]=v)}f.length=m+1;for(let p=0,h=f.length;p<h;p++){let v=f[p];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`vec3 transformedNormal = objectNormal;
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
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
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
#endif`,Ig=`uniform sampler2D dfgLUT;
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
}`,Pg=`
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
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
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xx=`float getShadowMask() {
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
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform float backgroundBlurriness;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,Gx=`#define DISTANCE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
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
}`,Kx=`#define MATCAP
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
}`,$x=`#define MATCAP
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
}`,jx=`#define NORMAL
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
}`,Qx=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:D0,alphahash_pars_fragment:N0,alphamap_fragment:U0,alphamap_pars_fragment:F0,alphatest_fragment:z0,alphatest_pars_fragment:O0,aomap_fragment:B0,aomap_pars_fragment:k0,batching_pars_vertex:G0,batching_vertex:V0,begin_vertex:H0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:$0,color_fragment:j0,color_pars_fragment:Q0,color_pars_vertex:eg,color_vertex:tg,common:ng,defaultnormal_vertex:ig,displacementmap_pars_vertex:sg,displacementmap_vertex:rg,emissivemap_fragment:og,emissivemap_pars_fragment:ag,colorspace_fragment:lg,colorspace_pars_fragment:cg,envmap_fragment:hg,envmap_common_pars_fragment:ug,envmap_pars_fragment:dg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:wg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:xg,fog_pars_fragment:_g,gradientmap_pars_fragment:yg,lightmap_pars_fragment:vg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:bg,lights_pars_begin:Sg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Eg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Pg,lights_fragment_maps:Lg,lights_fragment_end:Dg,lightprobes_pars_fragment:Ng,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Og,map_fragment:Bg,map_pars_fragment:kg,map_particle_fragment:Gg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Jg,normal_fragment_begin:Kg,normal_fragment_maps:$g,normal_pars_fragment:jg,normal_pars_vertex:Qg,normal_vertex:ex,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:sx,iridescence_pars_fragment:rx,opaque_fragment:ox,packing:ax,premultiplied_alpha_fragment:lx,project_vertex:cx,dithering_fragment:hx,dithering_pars_fragment:ux,roughnessmap_fragment:dx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:xx,skinbase_vertex:_x,skinning_pars_vertex:yx,skinning_vertex:vx,skinnormal_vertex:Mx,specularmap_fragment:bx,specularmap_pars_fragment:Sx,tonemapping_fragment:wx,tonemapping_pars_fragment:Tx,transmission_fragment:Ax,transmission_pars_fragment:Ex,uv_pars_fragment:Cx,uv_pars_vertex:Rx,uv_vertex:Ix,worldpos_vertex:Px,background_vert:Lx,background_frag:Dx,backgroundCube_vert:Nx,backgroundCube_frag:Ux,cube_vert:Fx,cube_frag:zx,depth_vert:Ox,depth_frag:Bx,distance_vert:kx,distance_frag:Gx,equirect_vert:Vx,equirect_frag:Hx,linedashed_vert:Wx,linedashed_frag:Xx,meshbasic_vert:qx,meshbasic_frag:Yx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:Kx,meshmatcap_frag:$x,meshnormal_vert:jx,meshnormal_frag:Qx,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:h_,sprite_frag:u_},Oe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ii={basic:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Cn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Cn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Cn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Cn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Cn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Cn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Cn([Oe.common,Oe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Cn([Oe.lights,Oe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ii.physical={uniforms:Cn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var ic={r:0,b:0,g:0},d_=new Et,zf=new it;zf.set(-1,0,0,0,1,0,0,0,1);function f_(n,e,t,i,s,r){let o=new Ke(0),a=s===!0?0:1,c,l,d=null,f=0,m=null;function p(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){let b=A.backgroundBlurriness>0;C=e.get(C,b)}return C}function h(A){let C=!1,b=p(A);b===null?x(o,a):b&&b.isColor&&(x(b,1),C=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(A,C){let b=p(C);b&&b.isCubeTexture?(l===void 0&&(l=new Rt(new ln(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Hs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(d_.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zf),l.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Ut,(d!==b||f!==b.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,m=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Rt(new Bn(2,2),new kn({name:"BackgroundMaterial",uniforms:Hs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function x(A,C){A.getRGB(ic,Gh(n)),t.buffers.color.setClear(ic.r,ic.g,ic.b,C,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,C=1){o.set(A),a=C,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,x(o,a)},render:h,addToRenderList:v,dispose:_}}function p_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(D,k,F,P,V){let H=!1,B=f(D,P,F,k);r!==B&&(r=B,l(r.object)),H=p(D,P,F,V),H&&h(D,P,F,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(D,k,F,P),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function f(D,k,F,P){let V=P.wireframe===!0,H=i[k.id];H===void 0&&(H={},i[k.id]=H);let B=D.isInstancedMesh===!0?D.id:0,q=H[B];q===void 0&&(q={},H[B]=q);let G=q[F.id];G===void 0&&(G={},q[F.id]=G);let K=G[V];return K===void 0&&(K=m(c()),G[V]=K),K}function m(D){let k=[],F=[],P=[];for(let V=0;V<t;V++)k[V]=0,F[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:P,object:D,attributes:{},index:null}}function p(D,k,F,P){let V=r.attributes,H=k.attributes,B=0,q=F.getAttributes();for(let G in q)if(q[G].location>=0){let ae=V[G],j=H[G];if(j===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),ae===void 0||ae.attribute!==j||j&&ae.data!==j.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function h(D,k,F,P){let V={},H=k.attributes,B=0,q=F.getAttributes();for(let G in q)if(q[G].location>=0){let ae=H[G];ae===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));let j={};j.attribute=ae,ae&&ae.data&&(j.data=ae.data),V[G]=j,B++}r.attributes=V,r.attributesNum=B,r.index=P}function v(){let D=r.newAttributes;for(let k=0,F=D.length;k<F;k++)D[k]=0}function x(D){_(D,0)}function _(D,k){let F=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;F[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),V[D]!==k&&(n.vertexAttribDivisor(D,k),V[D]=k)}function A(){let D=r.newAttributes,k=r.enabledAttributes;for(let F=0,P=k.length;F<P;F++)k[F]!==D[F]&&(n.disableVertexAttribArray(F),k[F]=0)}function C(D,k,F,P,V,H,B){B===!0?n.vertexAttribIPointer(D,k,F,V,H):n.vertexAttribPointer(D,k,F,P,V,H)}function b(D,k,F,P){v();let V=P.attributes,H=F.getAttributes(),B=k.defaultAttributeValues;for(let q in H){let G=H[q];if(G.location>=0){let K=V[q];if(K===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){let ae=K.normalized,j=K.itemSize,xe=e.get(K);if(xe===void 0)continue;let Z=xe.buffer,de=xe.type,Ae=xe.bytesPerElement,ge=de===n.INT||de===n.UNSIGNED_INT||K.gpuType===_l;if(K.isInterleavedBufferAttribute){let Me=K.data,He=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,ot=K.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Je=0;Je<G.locationSize;Je++)_(G.location+Je,Me.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Je=0;Je<G.locationSize;Je++)x(G.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Je=0;Je<G.locationSize;Je++)C(G.location+Je,j/G.locationSize,de,ae,He*Ae,(ot+j/G.locationSize*Je)*Ae,ge)}else{if(K.isInstancedBufferAttribute){for(let Me=0;Me<G.locationSize;Me++)_(G.location+Me,K.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Me=0;Me<G.locationSize;Me++)x(G.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Me=0;Me<G.locationSize;Me++)C(G.location+Me,j/G.locationSize,de,ae,j*Ae,j/G.locationSize*Me*Ae,ge)}}else if(B!==void 0){let ae=B[q];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(G.location,ae);break;case 3:n.vertexAttrib3fv(G.location,ae);break;case 4:n.vertexAttrib4fv(G.location,ae);break;default:n.vertexAttrib1fv(G.location,ae)}}}}A()}function E(){z();for(let D in i){let k=i[D];for(let F in k){let P=k[F];for(let V in P){let H=P[V];for(let B in H)d(H[B].object),delete H[B];delete P[V]}}delete i[D]}}function S(D){if(i[D.id]===void 0)return;let k=i[D.id];for(let F in k){let P=k[F];for(let V in P){let H=P[V];for(let B in H)d(H[B].object),delete H[B];delete P[V]}}delete i[D.id]}function g(D){for(let k in i){let F=i[k];for(let P in F){let V=F[P];if(V[D.id]===void 0)continue;let H=V[D.id];for(let B in H)d(H[B].object),delete H[B];delete V[D.id]}}}function w(D){for(let k in i){let F=i[k],P=D.isInstancedMesh===!0?D.id:0,V=F[P];if(V!==void 0){for(let H in V){let B=V[H];for(let q in B)d(B[q].object),delete B[q];delete V[H]}delete F[P],Object.keys(F).length===0&&delete i[k]}}}function z(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function m_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let m=0;for(let p=0;p<d;p++)m+=l[p];t.update(m,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function g_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==$n&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let w=g===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Gn&&g!==ii&&!w&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(et("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:b,maxSamples:E,samples:S}}function x_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new di,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let p=f.length!==0||m||i!==0||s;return s=m,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,p){let h=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,_=n.get(f);if(!s||h===null||h.length===0||r&&!x)r?d(null):l();else{let A=r?0:i,C=A*4,b=_.clippingState||null;c.value=b,b=d(h,m,C,p);for(let E=0;E!==C;++E)b[E]=t[E];_.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,m,p,h){let v=f!==null?f.length:0,x=null;if(v!==0){if(x=c.value,h!==!0||x===null){let _=p+v*4,A=m.matrixWorldInverse;a.getNormalMatrix(A),(x===null||x.length<_)&&(x=new Float32Array(_));for(let C=0,b=p;C!==v;++C,b+=4)o.copy(f[C]).applyMatrix4(A,a),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}var Xo=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Bs});r.uniforms.tEquirect.value=t;let o=new Rt(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=yn),new Ar(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},mf=256,__=3,y_=20,Of=256,Bf=16,v_=3,M_=new X,b_=new Ke,rc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ar(1,10,null),this._boxMesh=new Rt(new ln(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=M_}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,m=c.autoClearColor,p=c.autoClearDepth,h=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(b_));let x=new Ar(i,s,d);return x.position.copy(a),x.update(c,e),c.autoClear=f,c.autoClearColor=m,c.autoClearDepth=p,c.autoClearStencil=h,e.background=v,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(mf,Bh(e))}_fromTexture(e,t){e.mapping===Gs||e.mapping===Cr?this._setSize(e.image.length===0?mf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=gf(e,!1,!1),i=Math.log2(e)-__;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=gf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Gs||e.mapping===Cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=S_(),this._integrationMaterial=w_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Bf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-v_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Of*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=T_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function gf(n,e,t){return new Xo(n,{minFilter:Ki,generateMipmaps:e,type:mi,colorSpace:ho,depthBuffer:t})}function qo(n,e,t){return new kn({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:bn,blending:Bs,depthTest:!1,depthWrite:!1})}function S_(){return qo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Of}u

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
	`)}function w_(){return qo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bf}},`

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
	`)}function T_(){return qo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${y_}
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
	`)}function xf(){return qo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _f(){return qo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function A_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(m,p=!1){return m==null?null:p?o(m):r(m)}function r(m){if(m&&m.isTexture){let p=m.mapping;if(p===ml||p===gl)if(e.has(m)){let h=e.get(m).texture;return a(h,m.mapping)}else{let h=m.image;if(h&&h.height>0){let v=new Xo(h.height);return v.fromEquirectangularTexture(n,m),e.set(m,v),m.addEventListener("dispose",l),a(v.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture&&m.isPMREMTexture!==!0){let p=m.mapping,h=p===ml||p===gl,v=p===Gs||p===Cr;if(h||v){let x=t.get(m),_=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new rc(n)),x=h?i.fromEquirectangular(m,x):i.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{let A=m.image;return h&&A&&A.height>0||v&&A&&c(A)?(i===null&&(i=new rc(n)),x=h?i.fromEquirectangular(m):i.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",d),x.texture):null}}}return m}function a(m,p){return p===ml?m.mapping=Gs:p===gl&&(m.mapping=Cr),m}function c(m){let p=0,h=6;for(let v=0;v<h;v++)m[v]!==void 0&&p++;return p===h}function l(m){let p=m.target;p.removeEventListener("dispose",l);let h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function d(m){let p=m.target;p.removeEventListener("dispose",d);let h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function E_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&oo("WebGLRenderer: "+i+" extension not supported."),s}}}function C_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(h=>delete s[h]);function a(h){c(h.target)}function c(h){h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id],o.unregister(h);let v=r.get(h);v&&(e.remove(v),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(h,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function d(h){let v=h.attributes;for(let x in v)e.update(v[x],n.ARRAY_BUFFER)}function f(h){let v=h.index,x=h.attributes.position,_=0;if(x===void 0)return;let A=v!==null?v.array.length:x.array.length/3-1,C=x.count>=65535?yo:_o,b=new C(Math.ceil(A/3)*6,1),E=b.array;if(v!==null){let g=v.array;_=v.version;for(let w=0,z=0;w<A;w+=3){let N=g[w+0],D=g[w+1],k=g[w+2];E[z++]=N,E[z++]=D,E[z++]=D,E[z++]=k,E[z++]=k,E[z++]=N}}else{_=x.version;for(let g=0,w=0;g<A;g+=3){let z=g+0,N=g+1,D=g+2;E[w++]=z,E[w++]=N,E[w++]=N,E[w++]=D,E[w++]=D,E[w++]=z}}b.version=_;let S=r.get(h);S&&e.remove(S),r.set(h,b)}function m(h){let v=r.get(h);if(v){let x=h.index;x!==null&&v.version<x.version&&f(h)}else f(h);return r.get(h)}function p(){for(let h in s){let v=s[h].deref();v!==void 0&&c(v)}}return{get:l,update:d,getWireframeAttribute:m,dispose:p}}function R_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function l(f,m,p){p!==0&&(n.drawElementsInstanced(i,m,r,f*o,p),t.update(m,i,p))}function d(f,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,p);let v=0;for(let x=0;x<p;x++)v+=m[x];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function I_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function P_(n,e,t){let i=new WeakMap,s=new Zt;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,m=i.get(a);if(m===void 0||m.count!==f){let z=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",z)};m!==void 0&&m.texture.dispose();let p=a.morphAttributes.position!==void 0,h=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],C=0;p===!0&&(C=1),h===!0&&(C=2),v===!0&&(C=3);let b=a.attributes.position.count*C,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*E*4*f),g=new po(S,b,E,f);g.type=ii,g.needsUpdate=!0;let w=C*4;for(let N=0;N<f;N++){let D=x[N],k=_[N],F=A[N],P=b*E*4*N;for(let V=0;V<D.count;V++){let H=V*w;p===!0&&(s.fromBufferAttribute(D,V),S[P+H+0]=s.x,S[P+H+1]=s.y,S[P+H+2]=s.z,S[P+H+3]=0),h===!0&&(s.fromBufferAttribute(k,V),S[P+H+4]=s.x,S[P+H+5]=s.y,S[P+H+6]=s.z,S[P+H+7]=0),v===!0&&(s.fromBufferAttribute(F,V),S[P+H+8]=s.x,S[P+H+9]=s.y,S[P+H+10]=s.z,S[P+H+11]=F.itemSize===4?s.w:1)}}m={count:f,texture:g,size:new dt(b,E)},i.set(a,m),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let h=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",h),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function L_(n,e,t,i,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,m=e.get(l,f);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return m}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var D_={[vh]:"LINEAR_TONE_MAPPING",[Mh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function N_(n,e,t,i,s,r){let o=new Jn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new Jt;d.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let f=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Rt(d,f),p=new Lo(-1,1,1,-1,0,1),h=null,v=null,x=!1,_,A=null,C=[],b=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),c!==null&&c.setSize(E,S);for(let g=0;g<C.length;g++){let w=C[g];w.setSize&&w.setSize(E,S)}},this.setEffects=function(E){C=E,b=C.length>0&&C[0].isRenderPass===!0;let S=o.width,g=o.height;C.length>0&&a===null&&(a=new Jn(S,g,{type:mi,depthBuffer:!1,stencilBuffer:!1}),c=new Jn(S,g,{type:mi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&C.some(z=>z.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new Yi(S,g),r===!0&&(l.format=$i,l.type=Vs)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let z=0;z<C.length;z++){let N=C[z];N.setSize&&N.setSize(S,g),w&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(E,S){if(x||E.toneMapping===Ci&&C.length===0)return!1;if(A=S,S!==null){let g=S.width,w=S.height;(o.width!==g||o.height!==w)&&this.setSize(g,w)}return b===!1&&E.setRenderTarget(o),_=E.toneMapping,E.toneMapping=Ci,!0},this.hasRenderPass=function(){return b},this.end=function(E,S){E.toneMapping=_,x=!0;let g=o,w=a;for(let z=0;z<C.length;z++){let N=C[z];N.enabled!==!1&&(N.render(E,w,g,S),N.needsSwap!==!1&&(g=w,w=w===a?c:a))}if(h!==E.outputColorSpace||v!==E.toneMapping){h=E.outputColorSpace,v=E.toneMapping,f.defines={},Tt.getTransfer(h)===Ut&&(f.defines.SRGB_TRANSFER="");let z=D_[v];z&&(f.defines[z]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(A),E.render(m,p),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var kf=new Dn,Gf=new Yi(1,1),Vf=new So(1),Hf=new po,Wf=new $a,Xf=new bo,yf=[],vf=[],Mf=new Float32Array(16),bf=new Float32Array(9),Sf=new Float32Array(4);function Dr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ac(n,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function U_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function B_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;Sf.set(i),n.uniformMatrix2fv(this.addr,!1,Sf),pn(t,i)}}function k_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;bf.set(i),n.uniformMatrix3fv(this.addr,!1,bf),pn(t,i)}}function G_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;Mf.set(i),n.uniformMatrix4fv(this.addr,!1,Mf),pn(t,i)}}function V_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function X_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function q_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function J_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function lc(n){return n.version===0&&(n.compareFunction=Uh,n.needsUpdate=!0),n}function K_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=lc(Gf):r=kf,t.setTexture2D(e||r,s)}function $_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wf,s)}function j_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=lc(Vf):r=Xf,t.setTextureCube(e||r,s)}function Q_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hf,s)}function ey(n){switch(n){case 5126:return U_;case 35664:return F_;case 35665:return z_;case 35666:return O_;case 35674:return B_;case 35675:return k_;case 35676:return G_;case 5124:case 35670:return V_;case 35667:case 35671:return H_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Q_}}function ty(n,e){n.uniform1fv(this.addr,e)}function ny(n,e){let t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function iy(n,e){let t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function sy(n,e){let t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function ry(n,e){let t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oy(n,e){let t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ay(n,e){let t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ly(n,e){n.uniform1iv(this.addr,e)}function cy(n,e){n.uniform2iv(this.addr,e)}function hy(n,e){n.uniform3iv(this.addr,e)}function uy(n,e){n.uniform4iv(this.addr,e)}function dy(n,e){n.uniform1uiv(this.addr,e)}function fy(n,e){n.uniform2uiv(this.addr,e)}function py(n,e){n.uniform3uiv(this.addr,e)}function my(n,e){n.uniform4uiv(this.addr,e)}function gy(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=lc(Gf):o=kf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function xy(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wf,r[o])}function _y(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=lc(Vf):o=Xf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function yy(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hf,r[o])}function vy(n){switch(n){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return yy}}var Yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ey(t.type)}},Zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}},Jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Xh=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function My(n,e,t){let i=n.name,s=i.length;for(Xh.lastIndex=0;;){let r=Xh.exec(i),o=Xh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){wf(t,l===void 0?new Yh(a,n,e):new Zh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Jh(a),wf(t,f)),t=f}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);My(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Tf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var by=37297,Sy=0;function wy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Af=new it;function Ty(n){Tt._getMatrix(Af,Tt.workingColorSpace,n);let e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case uo:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ef(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+wy(n.getShaderSource(e),a)}else return r}function Ay(n,e){let t=Ty(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ey={[vh]:"Linear",[Mh]:"Reinhard",[bh]:"Cineon",[Uo]:"ACESFilmic",[wh]:"AgX",[Th]:"Neutral",[Sh]:"Custom"};function Cy(n,e){let t=Ey[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sc=new X;function Ry(){Tt.getLuminanceCoefficients(sc);let n=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Py(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ly(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wo(n){return n!==""}function Cf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Rf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(n){return n.replace(Dy,Ny)}function Ny(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Kh(t)}var Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(n){return n.replace(Uy,Fy)}function Fy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var zy={[Os]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function Oy(n){return zy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var By={[Cr]:"ENVMAP_MODE_REFRACTION"};function ky(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":By[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gy={[yh]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function Vy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Gy[n.combine]||"ENVMAP_BLENDING_NONE"}function Hy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Oy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=ky(t),f=Vy(t),m=Iy(t),p=Py(r),h=s.createProgram(),v,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wo).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wo).join(`
`),x.length>0&&(x+=`
`)):(v=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),x=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Ay("linearToOutputTexel",t.outputColorSpace),Ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Kh(o),o=Cf(o,t),o=Rf(o,t),a=Kh(a),a=Cf(a,t),a=Rf(a,t),o=If(o),a=If(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let A=_+v+o,C=_+x+a,b=Tf(s,s.VERTEX_SHADER,A),E=Tf(s,s.FRAGMENT_SHADER,C);s.attachShader(h,b),s.attachShader(h,E),t.index0AttributeName!==void 0?s.bindAttribLocation(h,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(h,0,"position"),s.linkProgram(h);function S(N){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(h)||"",k=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(E)||"",P=D.trim(),V=k.trim(),H=F.trim(),B=!0,q=!0;if(s.getProgramParameter(h,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,h,b,E);else{let G=Ef(s,b,"vertex"),K=Ef(s,E,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(h,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+G+`
`+K)}else P!==""?et("WebGLProgram: Program Info Log:",P):(V===""||H==="")&&(q=!1);q&&(N.diagnostics={runnable:B,programLog:P,vertexShader:{log:V,prefix:v},fragmentShader:{log:H,prefix:x}})}s.deleteShader(b),s.deleteShader(E),g=new Lr(s,h),w=Ly(s,h)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(h,by)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=b,this.fragmentShader=E,this}var Wy=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jh(e),t.set(e,i)),i}},jh=class{constructor(e){this.id=Wy++,this.code=e,this.usedTimes=0}};function Xy(n){return n===ys||n===Go||n===Vo}function qy(n,e,t,i,s,r){let o=new mo,a=new $h,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function h(g,w,z,N,D,k){let F=N.fog,P=D.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||V,H),q=m[g.type],G=i.precision;g.precision!==null&&(G=i.getMaxPrecision(g.precision),G!==g.precision&&et("WebGLProgram.getParameters:",g.precision,"not supported, using",G,"instead."));let K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ae=K!==void 0?K.length:0,j=0;P.morphAttributes.position!==void 0&&(j=1),P.morphAttributes.normal!==void 0&&(j=2),P.morphAttributes.color!==void 0&&(j=3);let xe,Z,de,Ae;if(q){let Pe=Ii[q];xe=Pe.vertexShader,Z=Pe.fragmentShader}else{xe=g.vertexShader,Z=g.fragmentShader;let Pe=a.getVertexShaderStage(g),St=a.getFragmentShaderStage(g);a.update(g,Pe,St),de=Pe.id,Ae=St.id}let ge=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),He=D.isInstancedMesh===!0,ot=D.isBatchedMesh===!0,Je=!!g.map,ft=!!g.matcap,bt=!!B,$e=bt&&B.isPMREMTexture===!0,Dt=!!g.aoMap,Wt=!!g.lightMap,Gt=!!g.bumpMap&&g.wireframe===!1,Lt=!!g.normalMap,ie=!!g.displacementMap,Ue=!!g.emissiveMap,xt=!!g.metalnessMap,_t=!!g.roughnessMap,lt=g.anisotropy>0,J=g.clearcoat>0,Ft=g.diffuseRoughness>0,pt=g.dispersion>0,zt=g.retroreflectivity>0,De=g.iridescence>0,ct=g.sheen>0,Xe=g.transmission>0,Qe=lt&&!!g.anisotropyMap,O=J&&!!g.clearcoatMap,I=J&&!!g.clearcoatNormalMap,Q=J&&!!g.clearcoatRoughnessMap,ye=Ft&&!!g.diffuseRoughnessMap,pe=De&&!!g.iridescenceMap,Se=De&&!!g.iridescenceThicknessMap,_e=ct&&!!g.sheenColorMap,ce=ct&&!!g.sheenRoughnessMap,he=!!g.specularMap,Re=!!g.specularColorMap,W=!!g.specularIntensityMap,ue=Xe&&!!g.transmissionMap,le=Xe&&!!g.thicknessMap,Te=!!g.gradientMap,me=!!g.alphaMap,ve=g.alphaTest>0,We=!!g.alphaHash,at=!!g.extensions,be=Ci;g.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(be=n.toneMapping);let Ne=$e?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,tt={shaderID:q,shaderType:g.type,shaderName:g.name,vertexShader:xe,fragmentShader:Z,defines:g.defines,customVertexShaderID:de,customFragmentShaderID:Ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:G,batching:ot,batchingColor:ot&&D._colorsTexture!==null,instancing:He,instancingColor:He&&D.instanceColor!==null,instancingMorph:He&&D.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Je,matcap:ft,envMap:bt,envMapMode:bt&&B.mapping,envMapPMREM:$e,envMapMaxLod:$e?Ne.length-1:null,envMapSize:$e?Ne[0].width:null,aoMap:Dt,lightMap:Wt,bumpMap:Gt,normalMap:Lt,displacementMap:ie,emissiveMap:Ue,normalMapObjectSpace:Lt&&g.normalMapType===Kd,normalMapTangentSpace:Lt&&g.normalMapType===tc,packedNormalMap:Lt&&g.normalMapType===tc&&Xy(g.normalMap.format),metalnessMap:xt,roughnessMap:_t,anisotropy:lt,anisotropyMap:Qe,clearcoat:J,clearcoatMap:O,clearcoatNormalMap:I,clearcoatRoughnessMap:Q,diffuseRoughness:Ft,diffuseRoughnessMap:ye,dispersion:pt,retroreflection:zt,iridescence:De,iridescenceMap:pe,iridescenceThicknessMap:Se,sheen:ct,sheenColorMap:_e,sheenRoughnessMap:ce,specularMap:he,specularColorMap:Re,specularIntensityMap:W,transmission:Xe,transmissionMap:ue,thicknessMap:le,gradientMap:Te,opaque:g.transparent===!1&&g.blending===_s&&g.alphaToCoverage===!1,alphaMap:me,alphaTest:ve,alphaHash:We,combine:g.combine,mapUv:Je&&p(g.map.channel),aoMapUv:Dt&&p(g.aoMap.channel),lightMapUv:Wt&&p(g.lightMap.channel),bumpMapUv:Gt&&p(g.bumpMap.channel),normalMapUv:Lt&&p(g.normalMap.channel),displacementMapUv:ie&&p(g.displacementMap.channel),emissiveMapUv:Ue&&p(g.emissiveMap.channel),metalnessMapUv:xt&&p(g.metalnessMap.channel),roughnessMapUv:_t&&p(g.roughnessMap.channel),anisotropyMapUv:Qe&&p(g.anisotropyMap.channel),clearcoatMapUv:O&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:I&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:ce&&p(g.sheenRoughnessMap.channel),specularMapUv:he&&p(g.specularMap.channel),specularColorMapUv:Re&&p(g.specularColorMap.channel),specularIntensityMapUv:W&&p(g.specularIntensityMap.channel),transmissionMapUv:ue&&p(g.transmissionMap.channel),thicknessMapUv:le&&p(g.thicknessMap.channel),alphaMapUv:me&&p(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Lt||lt),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Je||me),fog:!!F,useFog:g.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&Lt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:j,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:Je&&g.map.isVideoTexture===!0&&Tt.getTransfer(g.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ue&&g.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(g.emissiveMap.colorSpace)===Ut,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===En,flipSided:g.side===bn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:at&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&g.extensions.multiDraw===!0||ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function v(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let z in g.defines)w.push(z),w.push(g.defines[z]);return g.isRawShaderMaterial===!1&&(x(w,g),_(w,g),w.push(n.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function x(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function _(g,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function A(g){let w=m[g.type],z;if(w){let N=Ii[w];z=df.clone(N.uniforms)}else z=g.uniforms;return z}function C(g,w){let z=d.get(w);return z!==void 0?++z.usedTimes:(z=new Hy(n,w,g,s),l.push(z),d.set(w,z)),z}function b(g){if(--g.usedTimes===0){let w=l.indexOf(g);l[w]=l[l.length-1],l.pop(),d.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function S(){a.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:A,acquireProgram:C,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:S}}function Yy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Zy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Lf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Df(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(m){let p=0;return m.isInstancedMesh&&(p+=2),m.isSkinnedMesh&&(p+=1),p}function a(m,p,h,v,x,_){let A=n[e];return A===void 0?(A={id:m.id,object:m,geometry:p,material:h,materialVariant:o(m),groupOrder:v,renderOrder:m.renderOrder,z:x,group:_},n[e]=A):(A.id=m.id,A.object=m,A.geometry=p,A.material=h,A.materialVariant=o(m),A.groupOrder=v,A.renderOrder=m.renderOrder,A.z=x,A.group=_),e++,A}function c(m,p,h,v,x,_,A){A.reversedDepth===!0&&(x=-x);let C=a(m,p,h,v,x,_);h.transmission>0?i.push(C):h.transparent===!0?s.push(C):t.push(C)}function l(m,p,h,v,x,_){let A=a(m,p,h,v,x,_);h.transmission>0?i.unshift(A):h.transparent===!0?s.unshift(A):t.unshift(A)}function d(m,p){t.length>1&&t.sort(m||Zy),i.length>1&&i.sort(p||Lf),s.length>1&&s.sort(p||Lf)}function f(){for(let m=e,p=n.length;m<p;m++){let h=n[m];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function Jy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Df,n.set(i,[o])):s>=r.length?(o=new Df,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ky(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Ke};break;case"SpotLight":t={position:new X,direction:new X,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function $y(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jy=0;function Qy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ev(n){let e=new Ky,t=$y(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);let s=new X,r=new Et,o=new Et;function a(l){let d=0,f=0,m=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,h=0,v=0,x=0,_=0,A=0,C=0,b=0,E=0,S=0,g=0,w=0,z=0,N=0;l.sort(Qy);for(let k=0,F=l.length;k<F;k++){let P=l[k],V=P.color,H=P.intensity,B=P.distance,q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ys?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=V.r*H,f+=V.g*H,m+=V.b*H;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],H);N++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,ae=t.get(P);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[h]=ae,i.sunShadowMap[h]=q;let j=K.getViewportCount();for(let xe=0;xe<j;xe++)i.sunShadowMatrix[v+xe]=K.getMatrix(xe),i.sunShadowCascade[v+xe]=K._cascadeData[xe];v+=j,h++}i.sun[p]=G,p++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,ae=t.get(P);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,i.directionalShadow[x]=ae,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=P.shadow.matrix,E++}i.directional[x]=G,x++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(V).multiplyScalar(H),G.distance=B,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[A]=G;let K=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&z++),i.spotLightMatrix[A]=K.matrix,P.castShadow){let ae=t.get(P);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,i.spotShadow[A]=ae,i.spotShadowMap[A]=q,g++}A++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(V).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[C]=G,C++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let K=P.shadow,ae=t.get(P);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,ae.shadowCameraNear=K.camera.near,ae.shadowCameraFar=K.camera.far,i.pointShadow[_]=ae,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=G,_++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H),G.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[b]=G,b++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;let D=i.hash;(D.sunLength!==p||D.directionalLength!==x||D.pointLength!==_||D.spotLength!==A||D.rectAreaLength!==C||D.hemiLength!==b||D.numSunShadows!==h||D.numDirectionalShadows!==E||D.numPointShadows!==S||D.numSpotShadows!==g||D.numSpotMaps!==w||D.numLightProbes!==N)&&(i.sun.length=p,i.directional.length=x,i.spot.length=A,i.rectArea.length=C,i.point.length=_,i.hemi.length=b,i.sunShadow.length=h,i.sunShadowMap.length=h,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+w-z,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=N,D.sunLength=p,D.directionalLength=x,D.pointLength=_,D.spotLength=A,D.rectAreaLength=C,D.hemiLength=b,D.numSunShadows=h,D.numDirectionalShadows=E,D.numPointShadows=S,D.numSpotShadows=g,D.numSpotMaps=w,D.numLightProbes=N,i.version=jy++)}function c(l,d){let f=0,m=0,p=0,h=0,v=0,x=0,_=d.matrixWorldInverse;for(let A=0,C=l.length;A<C;A++){let b=l[A];if(b.isSunLight){let E=i.sun[f];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(_),f++}else if(b.isDirectionalLight){let E=i.directional[m];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),m++}else if(b.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),h++}else if(b.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(_),x++}}}return{setup:a,setupView:c,state:i}}function Nf(n){let e=new ev(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function c(){e.setup(t),s.sort((f,m)=>f.priority-m.priority||f.id-m.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function tv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Nf(n),e.set(s,[a])):r>=o.length?(a=new Nf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`,sv=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],rv=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Uf=new Et,Ho=new X,qh=new X;function ov(n,e,t){let i=new ds,s=new dt,r=new dt,o=new Zt,a=new tl,c=new nl,l={},d=t.maxTextureSize,f={[xs]:bn,[bn]:xs,[En]:En},m=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),p=m.clone();p.defines.HORIZONTAL_PASS=1;let h=new Jt;h.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Rt(h,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let _=this.type;this.render=function(S,g,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===Ed&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let z=n.getRenderTarget(),N=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Bs),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=_!==this.type;F&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=S.length;P<V;P++){let H=S[P],B=H.shadow;if(B===void 0){et("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let q=B.getFrameExtents();s.multiply(q),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/q.x),s.x=r.x*q.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/q.y),s.y=r.y*q.y,B.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Er){if(H.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Jn(s.x,s.y,{format:ys,type:mi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Yi(s.x,s.y,ii),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=Wi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=_n,B.map.depthTexture.magFilter=_n}else H.isPointLight?(B.map=new Xo(s.x),B.map.depthTexture=new So(s.x,pi)):(B.map=new Jn(s.x,s.y),B.map.depthTexture=new Yi(s.x,s.y,pi)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=Wi,this.type===Os?(B.map.depthTexture.compareFunction=G?Nh:Dh,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=_n,B.map.depthTexture.magFilter=_n);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let K=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();H.isPointLight!==!0&&B.updateMatrices(H,w);let ae=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:w.layers;for(let j=0;j<K;j++){let xe=B.getCamera(j);if(H.isPointLight){let Z=B.camera,de=B.matrix,Ae=H.distance||Z.far;Ae!==Z.far&&(Z.far=Ae,Z.updateProjectionMatrix()),Ho.setFromMatrixPosition(H.matrixWorld),Z.position.copy(Ho),qh.copy(Z.position),qh.add(sv[j]),Z.up.copy(rv[j]),Z.lookAt(qh),Z.updateMatrixWorld(),de.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Uf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Uf,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,j),n.clear();else{j===0&&(n.setRenderTarget(B.map),n.clear());let Z=B.getViewport(j);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),k.viewport(o)}i=B.getFrustum(j),b(g,w,xe,H,ae,this.type)}B.isPointLightShadow!==!0&&this.type===Er&&A(B,w),B.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(z,N,D)};function A(S,g){let w=e.update(v);m.defines.VSM_SAMPLES!==S.blurSamples&&(m.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Jn(s.x,s.y,{format:ys,type:mi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),m.uniforms.shadow_pass.value=S.map.depthTexture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(g,null,w,m,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(g,null,w,p,v,null)}function C(S,g,w,z){let N=null,D=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)N=D;else if(N=w.isPointLight===!0?c:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=N.uuid,F=g.uuid,P=l[k];P===void 0&&(P={},l[k]=P);let V=P[F];V===void 0&&(V=N.clone(),P[F]=V,g.addEventListener("dispose",E)),N=V}if(N.visible=g.visible,N.wireframe=g.wireframe,z===Er?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:f[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let k=n.properties.get(N);k.light=w}return N}function b(S,g,w,z,N,D){if(S.visible===!1)return;if(S.layers.test(N)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===Er)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let P=e.update(S),V=S.material;if(Array.isArray(V)){let H=P.groups;for(let B=0,q=H.length;B<q;B++){let G=H[B],K=V[G.materialIndex];if(K&&K.visible){let ae=C(S,K,z,D);S.onBeforeShadow(n,S,g,w,P,ae,G),n.renderBufferDirect(w,null,P,ae,S,G),S.onAfterShadow(n,S,g,w,P,ae,G)}}}else if(V.visible){let H=C(S,V,z,D);S.onBeforeShadow(n,S,g,w,P,H,null),n.renderBufferDirect(w,null,P,H,S,null),S.onAfterShadow(n,S,g,w,P,H,null)}}let F=S.children;for(let P=0,V=F.length;P<V;P++)b(F[P],g,w,z,N,D)}function E(S){S.target.removeEventListener("dispose",E);for(let w in l){let z=l[w],N=S.target.uuid;N in z&&(z[N].dispose(),delete z[N])}}}function av(n,e){function t(){let W=!1,ue=new Zt,le=null,Te=new Zt(0,0,0,0);return{setMask:function(me){le!==me&&!W&&(n.colorMask(me,me,me,me),le=me)},setLocked:function(me){W=me},setClear:function(me,ve,We,at,be){be===!0&&(me*=at,ve*=at,We*=at),ue.set(me,ve,We,at),Te.equals(ue)===!1&&(n.clearColor(me,ve,We,at),Te.copy(ue))},reset:function(){W=!1,le=null,Te.set(-1,0,0,0)}}}function i(){let W=!1,ue=!1,le=null,Te=null,me=null;return{setReversed:function(ve){if(ue!==ve){let We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ue=ve;let at=me;me=null,this.setClear(at)}},getReversed:function(){return ue},setTest:function(ve){ve?Me(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(ve){le!==ve&&!W&&(n.depthMask(ve),le=ve)},setFunc:function(ve){if(ue&&(ve=lf[ve]),Te!==ve){switch(ve){case Ba:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=ve}},setLocked:function(ve){W=ve},setClear:function(ve){me!==ve&&(me=ve,ue&&(ve=1-ve),n.clearDepth(ve))},reset:function(){W=!1,le=null,Te=null,me=null,ue=!1}}}function s(){let W=!1,ue=null,le=null,Te=null,me=null,ve=null,We=null,at=null,be=null;return{setTest:function(Ne){W||(Ne?Me(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(Ne){ue!==Ne&&!W&&(n.stencilMask(Ne),ue=Ne)},setFunc:function(Ne,tt,Pe){(le!==Ne||Te!==tt||me!==Pe)&&(n.stencilFunc(Ne,tt,Pe),le=Ne,Te=tt,me=Pe)},setOp:function(Ne,tt,Pe){(ve!==Ne||We!==tt||at!==Pe)&&(n.stencilOp(Ne,tt,Pe),ve=Ne,We=tt,at=Pe)},setLocked:function(Ne){W=Ne},setClear:function(Ne){be!==Ne&&(n.clearStencil(Ne),be=Ne)},reset:function(){W=!1,ue=null,le=null,Te=null,me=null,ve=null,We=null,at=null,be=null}}}let r=new t,o=new i,a=new s,c={},l=new WeakMap,d={},f={},m={},p=new WeakMap,h=[],v=null,x=!1,_=null,A=null,C=null,b=null,E=null,S=null,g=null,w=new Ke(0,0,0),z=0,N=!1,D=null,k=null,F=null,P=null,V=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=q>=2);let K=null,ae={},j=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Z=new Zt().fromArray(j),de=new Zt().fromArray(xe);function Ae(W,ue,le,Te){let me=new Uint8Array(4),ve=n.createTexture();n.bindTexture(W,ve),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<le;We++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ue+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ve}let ge={};ge[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(vr),Gt(!1),Lt(ph),Me(n.CULL_FACE),Dt(Bs);function Me(W){d[W]!==!0&&(n.enable(W),d[W]=!0)}function He(W){d[W]!==!1&&(n.disable(W),d[W]=!1)}function ot(W,ue){return m[W]!==ue?(n.bindFramebuffer(W,ue),m[W]=ue,W===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ue),W===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Je(W,ue){let le=h,Te=!1;if(W){le=p.get(ue),le===void 0&&(le=[],p.set(ue,le));let me=W.textures;if(le.length!==me.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,We=me.length;ve<We;ve++)le[ve]=n.COLOR_ATTACHMENT0+ve;le.length=me.length,Te=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Te=!0);Te&&n.drawBuffers(le)}function ft(W){return v!==W?(n.useProgram(W),v=W,!0):!1}let bt={[ks]:n.FUNC_ADD,[Rd]:n.FUNC_SUBTRACT,[Id]:n.FUNC_REVERSE_SUBTRACT};bt[Pd]=n.MIN,bt[Ld]=n.MAX;let $e={[Dd]:n.ZERO,[Nd]:n.ONE,[Ud]:n.SRC_COLOR,[xh]:n.SRC_ALPHA,[Gd]:n.SRC_ALPHA_SATURATE,[Bd]:n.DST_COLOR,[zd]:n.DST_ALPHA,[Fd]:n.ONE_MINUS_SRC_COLOR,[_h]:n.ONE_MINUS_SRC_ALPHA,[kd]:n.ONE_MINUS_DST_COLOR,[Od]:n.ONE_MINUS_DST_ALPHA,[Vd]:n.CONSTANT_COLOR,[Hd]:n.ONE_MINUS_CONSTANT_COLOR,[Wd]:n.CONSTANT_ALPHA,[Xd]:n.ONE_MINUS_CONSTANT_ALPHA};function Dt(W,ue,le,Te,me,ve,We,at,be,Ne){if(W===Bs){x===!0&&(He(n.BLEND),x=!1);return}if(x===!1&&(Me(n.BLEND),x=!0),W!==Cd){if(W!==_||Ne!==N){if((A!==ks||E!==ks)&&(n.blendEquation(n.FUNC_ADD),A=ks,E=ks),Ne)switch(W){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",W);break}else switch(W){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mh:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",W);break}C=null,b=null,S=null,g=null,w.set(0,0,0),z=0,_=W,N=Ne}return}me=me||ue,ve=ve||le,We=We||Te,(ue!==A||me!==E)&&(n.blendEquationSeparate(bt[ue],bt[me]),A=ue,E=me),(le!==C||Te!==b||ve!==S||We!==g)&&(n.blendFuncSeparate($e[le],$e[Te],$e[ve],$e[We]),C=le,b=Te,S=ve,g=We),(at.equals(w)===!1||be!==z)&&(n.blendColor(at.r,at.g,at.b,be),w.copy(at),z=be),_=W,N=!1}function Wt(W,ue){W.side===En?He(n.CULL_FACE):Me(n.CULL_FACE);let le=W.side===bn;ue&&(le=!le),Gt(le),W.blending===_s&&W.transparent===!1?Dt(Bs):Dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Te=W.stencilWrite;a.setTest(Te),Te&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ue(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(W){D!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),D=W)}function Lt(W){W!==Td?(Me(n.CULL_FACE),W!==k&&(W===ph?n.cullFace(n.BACK):W===Ad?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),k=W}function ie(W){W!==F&&(B&&n.lineWidth(W),F=W)}function Ue(W,ue,le){W?(Me(n.POLYGON_OFFSET_FILL),(P!==ue||V!==le)&&(P=ue,V=le,o.getReversed()&&(ue=-ue,le=-le),n.polygonOffset(ue,le))):He(n.POLYGON_OFFSET_FILL)}function xt(W){W?Me(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function _t(W){W===void 0&&(W=n.TEXTURE0+H-1),K!==W&&(n.activeTexture(W),K=W)}function lt(W,ue,le){le===void 0&&(K===null?le=n.TEXTURE0+H-1:le=K);let Te=ae[le];Te===void 0&&(Te={type:void 0,texture:void 0},ae[le]=Te),(Te.type!==W||Te.texture!==ue)&&(K!==le&&(n.activeTexture(le),K=le),n.bindTexture(W,ue||ge[W]),Te.type=W,Te.texture=ue)}function J(){let W=ae[K];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ft(){try{n.compressedTexImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function pt(){try{n.compressedTexImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function zt(){try{n.texSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function De(){try{n.texSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function ct(){try{n.compressedTexSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function Xe(){try{n.compressedTexSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Qe(){try{n.texStorage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function O(){try{n.texStorage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function I(){try{n.texImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function Q(){try{n.texImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function ye(W){return f[W]!==void 0?f[W]:n.getParameter(W)}function pe(W,ue){f[W]!==ue&&(n.pixelStorei(W,ue),f[W]=ue)}function Se(W){Z.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Z.copy(W))}function _e(W){de.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),de.copy(W))}function ce(W,ue){let le=l.get(ue);le===void 0&&(le=new WeakMap,l.set(ue,le));let Te=le.get(W);Te===void 0&&(Te=n.getUniformBlockIndex(ue,W.name),n.uniformBlockBinding(ue,Te,Te),le.set(W,Te))}function he(W,ue,le){let me=l.get(ue).get(W);c[me]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,me,le),c[me]=le)}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},K=null,ae={},m={},c={},p=new WeakMap,h=[],v=null,x=!1,_=null,A=null,C=null,b=null,E=null,S=null,g=null,w=new Ke(0,0,0),z=0,N=!1,D=null,k=null,F=null,P=null,V=null,Z.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:He,bindFramebuffer:ot,drawBuffers:Je,useProgram:ft,setBlending:Dt,setMaterial:Wt,setFlipSided:Gt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ue,setScissorTest:xt,activeTexture:_t,bindTexture:lt,unbindTexture:J,compressedTexImage2D:Ft,compressedTexImage3D:pt,texImage2D:I,texImage3D:Q,pixelStorei:pe,getParameter:ye,updateUBOMapping:ce,uniformBlockBinding:he,texStorage2D:Qe,texStorage3D:O,texSubImage2D:zt,texSubImage3D:De,compressedTexSubImage2D:ct,compressedTexSubImage3D:Xe,scissor:Se,viewport:_e,reset:Re}}function lv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,d=new WeakMap,f=new Set,m,p=new WeakMap,h=new Set,v=new FinalizationRegistry(O=>h.delete(O)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,I){return x?new OffscreenCanvas(O,I):fo("canvas")}function A(O,I,Q){let ye=1,pe=Qe(O);if((pe.width>Q||pe.height>Q)&&(ye=Q/Math.max(pe.width,pe.height)),ye<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Se=Math.floor(ye*pe.width),_e=Math.floor(ye*pe.height);m===void 0&&(m=_(Se,_e));let ce=I?_(Se,_e):m;return ce.width=Se,ce.height=_e,ce.getContext("2d").drawImage(O,0,0,Se,_e),et("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Se+"x"+_e+")."),ce}else return"data"in O&&et("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),O;return O}function C(O){return O.generateMipmaps}function b(O){n.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(O,I,Q,ye,pe,Se=!1){if(O!==null){if(n[O]!==void 0)return n[O];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e;ye&&(_e=e.get("EXT_texture_norm16"),_e||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=I;if(I===n.RED&&(Q===n.FLOAT&&(ce=n.R32F),Q===n.HALF_FLOAT&&(ce=n.R16F),Q===n.UNSIGNED_BYTE&&(ce=n.R8),Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.R16_EXT),Q===n.SHORT&&_e&&(ce=_e.R16_SNORM_EXT)),I===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.R8UI),Q===n.UNSIGNED_SHORT&&(ce=n.R16UI),Q===n.UNSIGNED_INT&&(ce=n.R32UI),Q===n.BYTE&&(ce=n.R8I),Q===n.SHORT&&(ce=n.R16I),Q===n.INT&&(ce=n.R32I)),I===n.RG&&(Q===n.FLOAT&&(ce=n.RG32F),Q===n.HALF_FLOAT&&(ce=n.RG16F),Q===n.UNSIGNED_BYTE&&(ce=n.RG8),Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.RG16_EXT),Q===n.SHORT&&_e&&(ce=_e.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.RG8UI),Q===n.UNSIGNED_SHORT&&(ce=n.RG16UI),Q===n.UNSIGNED_INT&&(ce=n.RG32UI),Q===n.BYTE&&(ce=n.RG8I),Q===n.SHORT&&(ce=n.RG16I),Q===n.INT&&(ce=n.RG32I)),I===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),Q===n.UNSIGNED_INT&&(ce=n.RGB32UI),Q===n.BYTE&&(ce=n.RGB8I),Q===n.SHORT&&(ce=n.RGB16I),Q===n.INT&&(ce=n.RGB32I)),I===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),Q===n.UNSIGNED_INT&&(ce=n.RGBA32UI),Q===n.BYTE&&(ce=n.RGBA8I),Q===n.SHORT&&(ce=n.RGBA16I),Q===n.INT&&(ce=n.RGBA32I)),I===n.RGB&&(Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.RGB16_EXT),Q===n.SHORT&&_e&&(ce=_e.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),I===n.RGBA){let he=Se?uo:Tt.getTransfer(pe);Q===n.FLOAT&&(ce=n.RGBA32F),Q===n.HALF_FLOAT&&(ce=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(ce=he===Ut?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&_e&&(ce=_e.RGBA16_EXT),Q===n.SHORT&&_e&&(ce=_e.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function g(O,I){let Q;return O?I===null||I===pi||I===Vs?Q=n.DEPTH24_STENCIL8:I===ii?Q=n.DEPTH32F_STENCIL8:I===Rr&&(Q=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===pi||I===Vs?Q=n.DEPTH_COMPONENT24:I===ii?Q=n.DEPTH_COMPONENT32F:I===Rr&&(Q=n.DEPTH_COMPONENT16),Q}function w(O,I){return C(O)===!0||O.isFramebufferTexture&&O.minFilter!==_n&&O.minFilter!==yn?Math.log2(Math.max(I.width,I.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?I.mipmaps.length:1}function z(O){let I=new WeakRef(O);i.get(O).__ref=I,h.add(I),v.register(O,I,I)}function N(O){let I=i.get(O).__ref;I!==void 0&&(h.delete(I),v.unregister(I))}function D(O){F(O.target)}function k(O){P(O.target)}function F(O){O.removeEventListener("dispose",D),N(O),H(O),O.isVideoTexture&&d.delete(O),O.isHTMLTexture&&f.delete(O)}function P(O){O.removeEventListener("dispose",k),N(O),q(O)}function V(){for(let O of h){let I=O.deref();I!==void 0&&(I.isRenderTarget===!0?P(I):F(I))}h.clear(),f.clear()}function H(O){let I=i.get(O);if(I.__webglInit===void 0)return;let Q=O.source,ye=p.get(Q);if(ye){let pe=ye[I.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&B(O),Object.keys(ye).length===0&&p.delete(Q)}i.remove(O)}function B(O){let I=i.get(O);n.deleteTexture(I.__webglTexture);let Q=O.source,ye=p.get(Q);delete ye[I.__cacheKey],o.memory.textures--}function q(O){let I=i.get(O);I.__depthDisposeCallback&&I.__depthDisposeCallback();let Q=O.depthTexture;if(Q&&Q.renderTarget===O&&F(Q),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(I.__webglFramebuffer[pe]))for(let Se=0;Se<I.__webglFramebuffer[pe].length;Se++)n.deleteFramebuffer(I.__webglFramebuffer[pe][Se]);else n.deleteFramebuffer(I.__webglFramebuffer[pe]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[pe])}else{if(Array.isArray(I.__webglFramebuffer))for(let pe=0;pe<I.__webglFramebuffer.length;pe++)n.deleteFramebuffer(I.__webglFramebuffer[pe]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let pe=0;pe<I.__webglColorRenderbuffer.length;pe++)I.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[pe]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let ye=O.textures;for(let pe=0,Se=ye.length;pe<Se;pe++){let _e=i.get(ye[pe]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(ye[pe])}i.remove(O)}let G=0;function K(){G=0}function ae(){return G}function j(O){G=O}function xe(){let O=G;return O>=s.maxTextures&&et("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,O}function Z(O){let I=[];return I.push(O.wrapS),I.push(O.wrapT),I.push(O.wrapR||0),I.push(O.magFilter),I.push(O.minFilter),I.push(O.anisotropy),I.push(O.internalFormat),I.push(O.format),I.push(O.type),I.push(O.generateMipmaps),I.push(O.mipmapsAutoUpdate),I.push(O.premultiplyAlpha),I.push(O.flipY),I.push(O.unpackAlignment),I.push(O.colorSpace),I.join()}function de(O,I){let Q=i.get(O);if(O.isVideoTexture&&ct(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){let ye=O.image;if(ye===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(Q,O,I);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+I)}function Ae(O,I){let Q=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){Wt(Q,O,I);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+I)}function ge(O,I){let Q=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){Wt(Q,O,I);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+I)}function Me(O,I){let Q=i.get(O);if(O.version>0&&Q.__version!==O.version){Gt(Q,O,I);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+I)}let He={[qa]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},ot={[_n]:n.NEAREST,[Zd]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[xl]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},Je={[jd]:n.NEVER,[Uh]:n.ALWAYS,[Qd]:n.LESS,[Dh]:n.LEQUAL,[ef]:n.EQUAL,[Nh]:n.GEQUAL,[tf]:n.GREATER,[nf]:n.NOTEQUAL};function ft(O,I){if(I.type===ii&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===yn||I.magFilter===xl||I.magFilter===Fo||I.magFilter===Ki||I.minFilter===yn||I.minFilter===xl||I.minFilter===Fo||I.minFilter===Ki)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,He[I.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,He[I.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,He[I.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,ot[I.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,ot[I.minFilter]),I.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Je[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===_n||I.minFilter!==Fo&&I.minFilter!==Ki||I.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function bt(O,I){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,I.addEventListener("dispose",D),z(I));let ye=I.source,pe=p.get(ye);pe===void 0&&(pe={},p.set(ye,pe));let Se=Z(I);if(Se!==O.__cacheKey){pe[Se]===void 0&&(pe[Se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),pe[Se].usedTimes++;let _e=pe[O.__cacheKey];_e!==void 0&&(pe[O.__cacheKey].usedTimes--,_e.usedTimes===0&&B(I)),O.__cacheKey=Se,O.__webglTexture=pe[Se].texture}return Q}function $e(O,I,Q){return Math.floor(Math.floor(O/Q)/I)}function Dt(O,I,Q,ye){let Se=O.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,Q,ye,I.data);else{Se.sort((W,ue)=>W.start-ue.start);let _e=0;for(let W=1;W<Se.length;W++){let ue=Se[_e],le=Se[W],Te=ue.start+ue.count,me=$e(le.start,I.width,4),ve=$e(ue.start,I.width,4);le.start<=Te+1&&me===ve&&$e(le.start+le.count-1,I.width,4)===me?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++_e,Se[_e]=le)}Se.length=_e+1;let ce=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let W=0,ue=Se.length;W<ue;W++){let le=Se[W],Te=Math.floor(le.start/4),me=Math.ceil(le.count/4),ve=Te%I.width,We=Math.floor(Te/I.width),at=me,be=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,We),t.texSubImage2D(n.TEXTURE_2D,0,ve,We,at,be,Q,ye,I.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Wt(O,I,Q){let ye=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ye=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ye=n.TEXTURE_3D);let pe=bt(O,I),Se=I.source;t.bindTexture(ye,O.__webglTexture,n.TEXTURE0+Q);let _e=i.get(Se);if(Se.version!==_e.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let be=Tt.getPrimaries(Tt.workingColorSpace),Ne=I.colorSpace===ji?null:Tt.getPrimaries(I.colorSpace),tt=I.colorSpace===ji||be===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let he=A(I.image,!1,s.maxTextureSize);he=Xe(I,he);let Re=r.convert(I.format,I.colorSpace),W=r.convert(I.type),ue=S(I.internalFormat,Re,W,I.normalized,I.colorSpace,I.isVideoTexture);ft(ye,I);let le,Te=I.mipmaps,me=I.isVideoTexture!==!0,ve=_e.__version===void 0||pe===!0,We=Se.dataReady,at=w(I,he);if(I.isDepthTexture)ue=g(I.format===$i,I.type),ve&&(me?t.texStorage2D(n.TEXTURE_2D,1,ue,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ue,he.width,he.height,0,Re,W,null));else if(I.isDataTexture)if(Te.length>0){me&&ve&&t.texStorage2D(n.TEXTURE_2D,at,ue,Te[0].width,Te[0].height);for(let be=0,Ne=Te.length;be<Ne;be++)le=Te[be],me?We&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Re,W,le.data):t.texImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,Re,W,le.data);I.generateMipmaps=!1}else me?(ve&&t.texStorage2D(n.TEXTURE_2D,at,ue,he.width,he.height),We&&Dt(I,he,Re,W)):t.texImage2D(n.TEXTURE_2D,0,ue,he.width,he.height,0,Re,W,he.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){me&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,ue,Te[0].width,Te[0].height,he.depth);for(let be=0,Ne=Te.length;be<Ne;be++)if(le=Te[be],I.format!==$n)if(Re!==null)if(me){if(We)if(I.layerUpdates.size>0){let tt=Wh(le.width,le.height,I.format,I.type);for(let Pe of I.layerUpdates){let St=le.data.subarray(Pe*tt/le.data.BYTES_PER_ELEMENT,(Pe+1)*tt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Pe,le.width,le.height,1,Re,St)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,he.depth,Re,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,ue,le.width,le.height,he.depth,0,le.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?We&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,he.depth,Re,W,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,ue,le.width,le.height,he.depth,0,Re,W,le.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{me&&ve&&t.texStorage2D(n.TEXTURE_2D,at,ue,Te[0].width,Te[0].height);for(let be=0,Ne=Te.length;be<Ne;be++)le=Te[be],I.format!==$n?Re!==null?me?We&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,le.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?We&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Re,W,le.data):t.texImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,Re,W,le.data)}else if(I.isDataArrayTexture)if(me){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,ue,he.width,he.height,he.depth),We)if(I.layerUpdates.size>0){let be=Wh(he.width,he.height,I.format,I.type);for(let Ne of I.layerUpdates){let tt=he.data.subarray(Ne*be/he.data.BYTES_PER_ELEMENT,(Ne+1)*be/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,he.width,he.height,1,Re,W,tt)}I.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,W,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,he.width,he.height,he.depth,0,Re,W,he.data);else if(I.isData3DTexture)me?(ve&&t.texStorage3D(n.TEXTURE_3D,at,ue,he.width,he.height,he.depth),We&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,W,he.data)):t.texImage3D(n.TEXTURE_3D,0,ue,he.width,he.height,he.depth,0,Re,W,he.data);else if(I.isFramebufferTexture){if(ve)if(me)t.texStorage2D(n.TEXTURE_2D,at,ue,he.width,he.height);else{let be=he.width,Ne=he.height;for(let tt=0;tt<at;tt++)t.texImage2D(n.TEXTURE_2D,tt,ue,be,Ne,0,Re,W,null),be>>=1,Ne>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let be=n.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),he.parentNode!==be){be.appendChild(he),f.add(I),be.onpaint=Ne=>{let tt=Ne.changedElements;for(let Pe of f)tt.includes(Pe.image)&&(Pe.needsUpdate=!0)},be.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,he);else{let tt=n.RGBA,Pe=n.RGBA,St=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,Pe,St,he)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(me&&ve){let be=Qe(Te[0]);t.texStorage2D(n.TEXTURE_2D,at,ue,be.width,be.height)}for(let be=0,Ne=Te.length;be<Ne;be++)le=Te[be],me?We&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Re,W,le):t.texImage2D(n.TEXTURE_2D,be,ue,Re,W,le);I.generateMipmaps=!1}else if(me){if(ve){let be=Qe(he);t.texStorage2D(n.TEXTURE_2D,at,ue,be.width,be.height)}We&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,W,he)}else t.texImage2D(n.TEXTURE_2D,0,ue,Re,W,he);C(I)&&I.mipmapsAutoUpdate===!0&&b(ye),_e.__version=Se.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Gt(O,I,Q){if(I.image.length!==6)return;let ye=bt(O,I),pe=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+Q);let Se=i.get(pe);if(pe.version!==Se.__version||ye===!0){t.activeTexture(n.TEXTURE0+Q);let _e=Tt.getPrimaries(Tt.workingColorSpace),ce=I.colorSpace===ji?null:Tt.getPrimaries(I.colorSpace),he=I.colorSpace===ji||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Re=I.isCompressedTexture||I.image[0].isCompressedTexture,W=I.image[0]&&I.image[0].isDataTexture,ue=[];for(let Pe=0;Pe<6;Pe++)!Re&&!W?ue[Pe]=A(I.image[Pe],!0,s.maxCubemapSize):ue[Pe]=W?I.image[Pe].image:I.image[Pe],ue[Pe]=Xe(I,ue[Pe]);let le=ue[0],Te=r.convert(I.format,I.colorSpace),me=r.convert(I.type),ve=S(I.internalFormat,Te,me,I.normalized,I.colorSpace),We=I.isVideoTexture!==!0,at=Se.__version===void 0||ye===!0,be=pe.dataReady,Ne=w(I,le);ft(n.TEXTURE_CUBE_MAP,I);let tt;if(I.isDepthTexture){if(ve=g(I.format===$i,I.type),at)if(We)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ve,le.width,le.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,le.width,le.height,0,Te,me,null)}else if(Re){We&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ve,le.width,le.height);for(let Pe=0;Pe<6;Pe++){tt=ue[Pe].mipmaps;for(let St=0;St<tt.length;St++){let Ot=tt[St];I.format!==$n?Te!==null?We?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St,0,0,Ot.width,Ot.height,Te,Ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St,ve,Ot.width,Ot.height,0,Ot.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St,0,0,Ot.width,Ot.height,Te,me,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St,ve,Ot.width,Ot.height,0,Te,me,Ot.data)}}}else{if(tt=I.mipmaps,We&&at){tt.length>0&&Ne++;let Pe=Qe(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ve,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(W){We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ue[Pe].width,ue[Pe].height,Te,me,ue[Pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,ue[Pe].width,ue[Pe].height,0,Te,me,ue[Pe].data);for(let St=0;St<tt.length;St++){let tn=tt[St].image[Pe].image;We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St+1,0,0,tn.width,tn.height,Te,me,tn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St+1,ve,tn.width,tn.height,0,Te,me,tn.data)}}else{We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Te,me,ue[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,Te,me,ue[Pe]);for(let St=0;St<tt.length;St++){let Ot=tt[St];We?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St+1,0,0,Te,me,Ot.image[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,St+1,ve,Te,me,Ot.image[Pe])}}}C(I)&&I.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Se.__version=pe.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Lt(O,I,Q,ye,pe,Se){let _e=r.convert(Q.format,Q.colorSpace),ce=r.convert(Q.type),he=S(Q.internalFormat,_e,ce,Q.normalized,Q.colorSpace),Re=i.get(I),W=i.get(Q);if(W.__renderTarget=I,!Re.__hasExternalTextures){let ue=Math.max(1,I.width>>Se),le=Math.max(1,I.height>>Se);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Se,he,ue,le,I.depth,0,_e,ce,null):t.texImage2D(pe,Se,he,ue,le,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),De(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,pe,W.__webglTexture,0,zt(I)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ye,pe,W.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(O,I,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,O),I.depthBuffer){let ye=I.depthTexture,pe=ye&&ye.isDepthTexture?ye.type:null,Se=g(I.stencilBuffer,pe),_e=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;De(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(I),Se,I.width,I.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(I),Se,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Se,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,O)}else{let ye=I.textures;for(let pe=0;pe<ye.length;pe++){let Se=ye[pe],_e=r.convert(Se.format,Se.colorSpace),ce=r.convert(Se.type),he=S(Se.internalFormat,_e,ce,Se.normalized,Se.colorSpace);De(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(I),he,I.width,I.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(I),he,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,he,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(O,I,Q){let ye=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(I.depthTexture);pe.__renderTarget=I;let Se=ye?I.depthTexture.image[0]:I.depthTexture.image;(!pe.__webglTexture||Se.width!==I.width||Se.height!==I.height)&&(Se.width=I.width,Se.height=I.height,I.depthTexture.needsUpdate=!0),ye?Me(I.depthTexture,0):de(I.depthTexture,0);let _e=pe.__webglTexture,ce=zt(I),he=ye?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,Re=I.depthTexture.format===$i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===Wi)De(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,_e,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,_e,0);else if(I.depthTexture.format===$i)De(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,_e,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(O){let I=i.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==O.depthTexture){let ye=O.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ye){let pe=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ye.removeEventListener("dispose",pe)};ye.addEventListener("dispose",pe),I.__depthDisposeCallback=pe}I.__boundDepthTexture=ye}if(O.depthTexture&&!I.__autoAllocateDepthBuffer)if(Q)for(let ye=0;ye<6;ye++)Ue(I.__webglFramebuffer[ye],O,ye);else O.texture.mipmaps.length>0?Ue(I.__webglFramebuffer[0],O,0):Ue(I.__webglFramebuffer,O,0);else if(Q){I.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[ye]),I.__webglDepthbuffer[ye]===void 0)I.__webglDepthbuffer[ye]=n.createRenderbuffer(),ie(I.__webglDepthbuffer[ye],O,!1);else{let pe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer[ye];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Se)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),ie(I.__webglDepthbuffer,O,!1);else{let pe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(O,I,Q){let ye=i.get(O);I!==void 0&&Lt(ye.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&xt(O)}function lt(O){let I=O.texture,Q=i.get(O),ye=i.get(I);O.addEventListener("dispose",k),z(O);let pe=O.textures,Se=O.isWebGLCubeRenderTarget===!0,_e=pe.length>1;if(_e||(ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture()),ye.__version=I.version,o.memory.textures++),Se){Q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(I.mipmaps.length>0){Q.__webglFramebuffer[ce]=[];for(let he=0;he<I.mipmaps.length;he++)Q.__webglFramebuffer[ce][he]=n.createFramebuffer()}else Q.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(I.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ce=0;ce<I.mipmaps.length;ce++)Q.__webglFramebuffer[ce]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ce=0,he=pe.length;ce<he;ce++){let Re=i.get(pe[ce]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&De(O)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ce=0;ce<pe.length;ce++){let he=pe[ce];Q.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ce]);let Re=r.convert(he.format,he.colorSpace),W=r.convert(he.type),ue=S(he.internalFormat,Re,W,he.normalized,he.colorSpace,O.isXRRenderTarget===!0),le=zt(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,ye.__webglTexture),ft(n.TEXTURE_CUBE_MAP,I);for(let ce=0;ce<6;ce++)if(I.mipmaps.length>0)for(let he=0;he<I.mipmaps.length;he++)Lt(Q.__webglFramebuffer[ce][he],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else Lt(Q.__webglFramebuffer[ce],O,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);C(I)?b(n.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let ce=0,he=pe.length;ce<he;ce++){let Re=pe[ce],W=i.get(Re),ue=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ue=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),ft(ue,Re),Lt(Q.__webglFramebuffer,O,Re,n.COLOR_ATTACHMENT0+ce,ue,0),C(Re)&&b(ue)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ce=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ye.__webglTexture),ft(ce,I),I.mipmaps.length>0)for(let he=0;he<I.mipmaps.length;he++)Lt(Q.__webglFramebuffer[he],O,I,n.COLOR_ATTACHMENT0,ce,he);else Lt(Q.__webglFramebuffer,O,I,n.COLOR_ATTACHMENT0,ce,0);C(I)?b(ce):I.mipmaps.length>0&&n.texParameteri(ce,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&xt(O)}function J(O){let I=O.textures;for(let Q=0,ye=I.length;Q<ye;Q++){let pe=I[Q];if(C(pe)&&pe.mipmapsAutoUpdate===!0){let Se=E(O),_e=i.get(pe).__webglTexture;t.bindTexture(Se,_e),b(Se),t.unbindTexture()}}}let Ft=[];function pt(O){if(O.samples>0){if(De(O)===!1){let I=O.textures,Q=O.width,ye=O.height,pe=n.COLOR_BUFFER_BIT,Se=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(O),ce=I.length>1;if(ce)for(let Re=0;Re<I.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Re=0;Re<I.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]);let W=i.get(I[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,W,0)}n.blitFramebuffer(0,0,Q,ye,0,0,Q,ye,pe,n.NEAREST),c===!0&&(Ft.length=0,Ft.push(n.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&Ft.push(Se),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Re=0;Re<I.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]);let W=i.get(I[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,W,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let I=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function zt(O){return Math.min(s.maxSamples,O.samples)}function De(O){let I=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function ct(O){let I=o.render.frame;d.get(O)!==I&&(d.set(O,I),O.update())}function Xe(O,I){let Q=O.colorSpace,ye=O.format,pe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==ho&&Q!==ji&&(Tt.getTransfer(Q)===Ut?(ye!==$n||pe!==Gn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",Q)),I}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=xe,this.resetTextureUnits=K,this.getTextureUnits=ae,this.setTextureUnits=j,this.setTexture2D=de,this.setTexture2DArray=Ae,this.setTexture3D=ge,this.setTextureCube=Me,this.rebindTextures=_t,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=De,this.dispose=V}function cv(n,e){function t(i,s=ji){let r,o=Tt.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ih)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Eh)return n.BYTE;if(i===Ch)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Ph)return n.ALPHA;if(i===Lh)return n.RGB;if(i===$n)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===Ml)return n.RED;if(i===bl)return n.RED_INTEGER;if(i===ys)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===wl)return n.RGBA_INTEGER;if(i===zo||i===Oo||i===Bo||i===ko)if(o===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Al||i===El||i===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Il||i===Pl||i===Ll||i===Dl||i===Go||i===Nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rl||i===Il)return o===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return r.COMPRESSED_RG11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Fl||i===zl||i===Ol||i===Bl||i===kl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===Kl||i===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jl)return o===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Ql||i===Vo||i===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uv=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new wo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new kn({vertexShader:hv,fragmentShader:uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends Ai{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,m=null,p=null,h=null,v=typeof XRWebGLBinding<"u",x=new Qh,_={},A=t.getContextAttributes(),C=null,b=null,E=[],S=[],g=new dt,w=null,z=null,N=new Ln;N.viewport=new Zt;let D=new Ln;D.viewport=new Zt;let k=[N,D],F=new pl,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=E[Z];return de===void 0&&(de=new Tr,E[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=E[Z];return de===void 0&&(de=new Tr,E[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=E[Z];return de===void 0&&(de=new Tr,E[Z]=de),de.getHandSpace()};function H(Z){let de=S.indexOf(Z.inputSource);if(de===-1)return;let Ae=E[de];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,l||o),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let Z=0;Z<E.length;Z++){let de=S[Z];de!==null&&(S[Z]=null,E[Z].disconnect(de))}P=null,V=null,x.reset();for(let Z in _)delete _[Z];if(e.setRenderTarget(C),p=null,m=null,f=null,s=null,b=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(g.width,g.height,!1),z!==null){let Z=z.camera;Z.fov=z.fov,Z.zoom=z.zoom,Z.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),A.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ge=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=A.stencil?$i:Wi,ge=A.stencil?Vs:pi);let He={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),m=f.createProjectionLayer(He),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new Jn(m.textureWidth,m.textureHeight,{format:$n,type:Gn,depthTexture:new Yi(m.textureWidth,m.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Ae={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Jn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(Z){for(let de=0;de<Z.removed.length;de++){let Ae=Z.removed[de],ge=S.indexOf(Ae);ge>=0&&(S[ge]=null,E[ge].disconnect(Ae))}for(let de=0;de<Z.added.length;de++){let Ae=Z.added[de],ge=S.indexOf(Ae);if(ge===-1){for(let He=0;He<E.length;He++)if(He>=S.length){S.push(Ae),ge=He;break}else if(S[He]===null){S[He]=Ae,ge=He;break}if(ge===-1)break}let Me=E[ge];Me&&Me.connect(Ae)}}function G(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let de=Z.near,Ae=Z.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),F.near=D.near=N.near=de,F.far=D.far=N.far=Ae,(P!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,V=F.far),F.layers.mask=Z.layers.mask|6,N.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let ge=Z.parent,Me=F.cameras;G(F,ge);for(let He=0;He<Me.length;He++)G(Me[He],ge);F.projectionMatrix.copy(N.projectionMatrix),F.projectionMatrixInverse.copy(N.projectionMatrixInverse),z===null&&Z.isPerspectiveCamera&&(z={camera:Z,fov:Z.fov,zoom:Z.zoom}),K(Z,F,ge)};function K(Z,de,Ae){Ae===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Sr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(m===null&&p===null))return c},this.setFoveation=function(Z){c=Z,m!==null&&(m.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(Z){return _[Z]};let ae=null;function j(Z,de){if(d=de.getViewerPose(l||o),h=de,d!==null){let Ae=d.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ge=!1;Ae.length!==F.cameras.length&&(F.cameras.length=0,ge=!0);for(let Je=0;Je<Ae.length;Je++){let ft=Ae[Je],bt=null;if(p!==null)bt=p.getViewport(ft);else{let Dt=f.getViewSubImage(m,ft);bt=Dt.viewport,Je===0&&(e.setRenderTargetTextures(b,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(b))}let $e=k[Je];$e===void 0&&($e=new Ln,$e.layers.enable(Je),$e.viewport=new Zt,k[Je]=$e),$e.matrix.fromArray(ft.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ft.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(bt.x,bt.y,bt.width,bt.height),Je===0&&(F.matrix.copy($e.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ge===!0&&F.cameras.push($e)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Je=f.getDepthInformation(Ae[0]);Je&&Je.isValid&&Je.texture&&x.init(Je,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Je=0;Je<Ae.length;Je++){let ft=Ae[Je].camera;if(ft){let bt=_[ft];bt||(bt=new wo,_[ft]=bt);let $e=f.getCameraImage(ft);bt.sourceTexture=$e}}}}for(let Ae=0;Ae<E.length;Ae++){let ge=S[Ae],Me=E[Ae];ge!==null&&Me!==void 0&&Me.update(ge,de,l||o)}ae&&ae(Z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),h=null}let xe=new Ff;xe.setAnimationLoop(j),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}},dv=new Et,qf=new it;qf.set(-1,0,0,0,1,0,0,0,1);function fv(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,Gh(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,A,C,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),f(x,_)):_.isMeshPhongMaterial?(r(x,_),d(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),m(x,_),_.isMeshPhysicalMaterial&&p(x,_,b)):_.isMeshMatcapMaterial?(r(x,_),h(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),v(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?c(x,_,A,C):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let A=e.get(_),C=A.envMap,b=A.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(qf),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function c(x,_,A,C){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*A,x.scale.value=C*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function p(x,_,A){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function h(x,_){_.matcap&&(x.matcap.value=_.matcap)}function v(x,_){let A=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pv(n,e,t,i){let s={},r={};function o(A,C){let b=C.program;i.uniformBlockBinding(A,b,s[A.id])}function a(A,C){let b=s[A.id];b===void 0&&(h(A),b=c(A),s[A.id]=b,A.addEventListener("dispose",x));let E=C.program;i.updateUBOMapping(A,E);let S=e.render.frame;r[A.id]!==S&&(l(A),r[A.id]=S)}function c(A){let C=n.createBuffer(),b=A.__size,E=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,b,E),n.bindBuffer(n.UNIFORM_BUFFER,null),C}function l(A){let C=s[A.id],b=A.uniforms,E=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let S=0,g=b.length;S<g;S++){let w=b[S];if(Array.isArray(w))for(let z=0,N=w.length;z<N;z++)d(w[z],S,z,E);else d(w,S,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,C,b,E){if(m(A,C,b,E)===!0){let S=A.__offset,g=A.value;if(Array.isArray(g)){let w=0;for(let z=0;z<g.length;z++){let N=g[z],D=v(N,!0);f(N,A.__data,w),w+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,A.__data)}}function f(A,C,b){typeof A=="number"||typeof A=="boolean"?C[b]=A:A.isMatrix3?(C[b]=A.elements[0],C[b+1]=A.elements[1],C[b+2]=A.elements[2],C[b+3]=0,C[b+4]=A.elements[3],C[b+5]=A.elements[4],C[b+6]=A.elements[5],C[b+7]=0,C[b+8]=A.elements[6],C[b+9]=A.elements[7],C[b+10]=A.elements[8],C[b+11]=0):ArrayBuffer.isView(A)?C.set(A.subarray(0,C.length-b),b):A.toArray(C,b)}function m(A,C,b,E){let S=A.value,g=C+"_"+b;if(Array.isArray(S)){E[g]===void 0&&(E[g]=[]);let w=E[g],z=!1;for(let N=0;N<S.length;N++)p(S[N],w,N)===!0&&(z=!0);return z}return p(S,E,g)}function p(A,C,b){if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:ArrayBuffer.isView(A)?C[b]=A.slice():C[b]=A.clone(),!0;{let E=C[b];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return C[b]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(E.equals(A)===!1)return E.copy(A),!0}}return!1}function h(A){let C=A.uniforms,b=0,E=16;for(let g=0,w=C.length;g<w;g++){let z=Array.isArray(C[g])?C[g]:[C[g]];for(let N=0,D=z.length;N<D;N++){let k=z[N],F=Array.isArray(k.value)?k.value:[k.value],P=Array.isArray(C[g])||Array.isArray(k.value),V=b;for(let B=0,q=F.length;B<q;B++){let G=F[B],K=v(G,P),ae=b%E,j=ae%K.boundary,xe=ae+j;b+=j,xe!==0&&E-xe<K.storage&&(b+=E-xe),B===0&&(V=b),b+=K.storage}let H=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new H((b-V)/Float32Array.BYTES_PER_ELEMENT),k.__offset=V}}let S=b%E;return S>0&&(b+=E-S),A.__size=b,A.__cache={},this}function v(A,C){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=16,b.storage=48):A.isMatrix4?(b.boundary=16,b.storage=64):A.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(b.boundary=16,b.storage=A.byteLength):et("WebGLRenderer: Unsupported uniform value type.",A),C===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function x(A){let C=A.target;C.removeEventListener("dispose",x),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function _(){for(let A in s)n.deleteBuffer(s[A]);s={},r={}}return{bind:o,update:a,dispose:_}}var mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function gv(){return Ri===null&&(Ri=new Us(mv,16,16,ys,mi),Ri.name="DFG_LUT",Ri.minFilter=yn,Ri.magFilter=yn,Ri.wrapS=Ti,Ri.wrapT=Ti,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var oc=class{constructor(e={}){let{canvas:t=rf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:p=Gn}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let v=p,x=new Set([wl,Sl,bl]),_=new Set([Gn,pi,Rr,Vs,yl,vl]),A=new Uint32Array(4),C=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,S=null,g=[],w=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,D=!1,k=null,F=null,P=null,V=null;this._outputColorSpace=dn;let H=0,B=0,q=null,G=-1,K=null,ae=new Zt,j=new Zt,xe=null,Z=new Ke(0),de=0,Ae=t.width,ge=t.height,Me=1,He=null,ot=null,Je=new Zt(0,0,Ae,ge),ft=new Zt(0,0,Ae,ge),bt=!1,$e=new ds,Dt=new ja,Wt=!1,Gt=!1,Lt=new Et,ie=new X,Ue=new Zt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function lt(){return q===null?Me:1}let J=i;function Ft(L,Y){return t.getContext(L,Y)}let pt,zt,De,ct,Xe,Qe,O,I,Q,ye,pe,Se,_e,ce,he,Re,W,ue,le,Te,me,ve,We;try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),J===null){let Y="webgl2";if(J=Ft(Y,L),J===null)throw Ft(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(L){throw t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),rt("WebGLRenderer: "+L.message),L}function at(){pt=new E_(J),pt.init(),me=new cv(J,pt),zt=new g_(J,pt,e,me),De=new av(J,pt),zt.reversedDepthBuffer&&m&&De.buffers.depth.setReversed(!0),F=J.createFramebuffer(),P=J.createFramebuffer(),V=J.createFramebuffer(),ct=new I_(J),Xe=new Yy,Qe=new lv(J,pt,De,Xe,zt,me,ct),O=new A_(N),I=new L0(J),ve=new p_(J,I),Q=new C_(J,I,ct,ve),ye=new L_(J,Q,I,ve,ct),ue=new P_(J,zt,Qe),he=new x_(Xe),pe=new qy(N,O,pt,zt,ve,he),Se=new fv(N,Xe),_e=new Jy,ce=new tv(pt),W=new f_(N,O,De,ye,h,c),Re=new ov(N,ye,zt),We=new pv(J,ct,zt,De),le=new m_(J,pt,ct),Te=new R_(J,pt,ct),ct.programs=pe.programs,N.capabilities=zt,N.extensions=pt,N.properties=Xe,N.renderLists=_e,N.shadowMap=Re,N.state=De,N.info=ct}v!==Gn&&(z=new N_(v,t.width,t.height,a,s,r));let be=new eu(N,J);this.xr=be,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let L=pt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=pt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(L){L!==void 0&&(Me=L,this.setSize(Ae,ge,!1))},this.getSize=function(L){return L.set(Ae,ge)},this.setSize=function(L,Y,te=!0){if(be.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=L,ge=Y,t.width=Math.floor(L*Me),t.height=Math.floor(Y*Me),te===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(Ae*Me,ge*Me).floor()},this.setDrawingBufferSize=function(L,Y,te){Ae=L,ge=Y,Me=te,t.width=Math.floor(L*te),t.height=Math.floor(Y*te),this.setViewport(0,0,L,Y)},this.setEffects=function(L){if(v===Gn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Y=0;Y<L.length;Y++)if(L[Y].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(ae)},this.getViewport=function(L){return L.copy(Je)},this.setViewport=function(L,Y,te,ee){L.isVector4?Je.set(L.x,L.y,L.z,L.w):Je.set(L,Y,te,ee),De.viewport(ae.copy(Je).multiplyScalar(lt()).round())},this.getScissor=function(L){return L.copy(ft)},this.setScissor=function(L,Y,te,ee){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,Y,te,ee),De.scissor(j.copy(ft).multiplyScalar(lt()).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(L){De.setScissorTest(bt=L)},this.setOpaqueSort=function(L){He=L},this.setTransparentSort=function(L){ot=L},this.getClearColor=function(L){return L.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(L=!0,Y=!0,te=!0){let ee=0;if(L){let $=!1;if(q!==null){let Ee=q.texture.format;$=x.has(Ee)}if($){let Ee=q.texture.type,qe=_.has(Ee),Ce=W.getClearColor(),Le=W.getClearAlpha(),Ye=Ce.r,nt=Ce.g,mt=Ce.b;qe?(A[0]=Ye,A[1]=nt,A[2]=mt,A[3]=Le,J.clearBufferuiv(J.COLOR,0,A)):(C[0]=Ye,C[1]=nt,C[2]=mt,C[3]=Le,J.clearBufferiv(J.COLOR,0,C))}else ee|=J.COLOR_BUFFER_BIT}Y&&(ee|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(ee|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&J.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),k=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),W.dispose(),_e.dispose(),ce.dispose(),Qe.dispose(),Xe.dispose(),O.dispose(),ye.dispose(),Q.dispose(),ve.dispose(),We.dispose(),pe.dispose(),be.dispose(),be.removeEventListener("sessionstart",er),be.removeEventListener("sessionend",Qn),Hn.stop()};function Ne(L){L.preventDefault(),zh("WebGLRenderer: Context Lost."),D=!0}function tt(){zh("WebGLRenderer: Context Restored."),D=!1;let L=ct.autoReset,Y=Re.enabled,te=Re.autoUpdate,ee=Re.needsUpdate,$=Re.type;at(),ct.autoReset=L,Re.enabled=Y,Re.autoUpdate=te,Re.needsUpdate=ee,Re.type=$}function Pe(L){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function St(L){let Y=L.target;Y.removeEventListener("dispose",St),Ot(Y)}function Ot(L){tn(L),Xe.remove(L)}function tn(L){let Y=Xe.get(L).programs;Y!==void 0&&(Y.forEach(function(te){pe.releaseProgram(te)}),L.isShaderMaterial&&pe.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,te,ee,$,Ee){Y===null&&(Y=xt);let qe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ce=Kr(L,Y,te,ee,$);De.setMaterial(ee,qe);let Le=te.index,Ye=1;if(ee.wireframe===!0){if(Le=Q.getWireframeAttribute(te),Le===void 0)return;Ye=2}let nt=te.drawRange,mt=te.attributes.position,ke=nt.start*Ye,yt=(nt.start+nt.count)*Ye;Ee!==null&&(ke=Math.max(ke,Ee.start*Ye),yt=Math.min(yt,(Ee.start+Ee.count)*Ye)),Le!==null?(ke=Math.max(ke,0),yt=Math.min(yt,Le.count)):mt!=null&&(ke=Math.max(ke,0),yt=Math.min(yt,mt.count));let jt=yt-ke;if(jt<0||jt===1/0)return;ve.setup($,ee,Ce,te,Le);let st,It=le;if(Le!==null&&(st=I.get(Le),It=Te,It.setIndex(st)),$.isMesh)ee.wireframe===!0?(De.setLineWidth(ee.wireframeLinewidth*lt()),It.setMode(J.LINES)):It.setMode(J.TRIANGLES);else if($.isLine){let un=ee.linewidth;un===void 0&&(un=1),De.setLineWidth(un*lt()),$.isLineSegments?It.setMode(J.LINES):$.isLineLoop?It.setMode(J.LINE_LOOP):It.setMode(J.LINE_STRIP)}else $.isPoints?It.setMode(J.POINTS):$.isSprite&&It.setMode(J.TRIANGLES);if($.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))It.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let un=$._multiDrawStarts,Ge=$._multiDrawCounts,mn=$._multiDrawCount,Fe=Le?I.get(Le).bytesPerElement:1,li=Xe.get(ee).currentProgram.getUniforms();for(let qt=0;qt<mn;qt++)li.setValue(J,"_gl_DrawID",qt),It.render(un[qt]/Fe,Ge[qt])}else if($.isInstancedMesh)It.renderInstances(ke,jt,$.count);else if(te.isInstancedBufferGeometry){let un=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ge=Math.min(te.instanceCount,un);It.renderInstances(ke,jt,Ge)}else It.render(ke,jt)};function nn(L,Y,te,ee){k!==null&&L.isNodeMaterial&&k.setObject(ee,L),Wt===!0&&he.setState(L,te,!1),L.transparent===!0&&L.side===En&&L.forceSinglePass===!1?(L.side=bn,L.needsUpdate=!0,Di(L,Y,ee),L.side=xs,L.needsUpdate=!0,Di(L,Y,ee),L.side=En):Di(L,Y,ee)}this.compile=function(L,Y,te=null){te===null&&(te=L),k!==null&&k.renderStart(L,Y,te),S=ce.get(te),S.init(Y),w.push(S),te.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),L!==te&&L.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),Gt=this.localClippingEnabled,Wt=he.init(this.clippingPlanes,Gt),Wt===!0&&he.setGlobalState(this.clippingPlanes,Y),k!==null&&Re.render(S.state.shadowsArray,te,Y);let ee=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let qe=0;qe<Ee.length;qe++){let Ce=Ee[qe];nn(Ce,te,Y,$),ee.add(Ce)}else nn(Ee,te,Y,$),ee.add(Ee)}),S=w.pop(),k!==null&&k.renderEnd(),ee},this.compileAsync=function(L,Y,te=null){let ee=this.compile(L,Y,te);return new Promise($=>{function Ee(){if(ee.forEach(function(qe){let Le=Xe.get(qe).currentProgram;(Le===void 0||Le.isReady())&&ee.delete(qe)}),ee.size===0){$(L);return}setTimeout(Ee,10)}pt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wn=null;function Mi(L){wn&&wn(L)}function er(){Hn.stop()}function Qn(){Hn.start()}let Hn=new Ff;Hn.setAnimationLoop(Mi),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(L){wn=L,be.setAnimationLoop(L),L===null?Hn.stop():Hn.start()},be.addEventListener("sessionstart",er),be.addEventListener("sessionend",Qn),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(L,Y);let te=be.enabled===!0&&be.isPresenting===!0,ee=z!==null&&(q===null||te)&&z.begin(N,q);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(Y),Y=be.getCamera()),L.isScene===!0&&L.onBeforeRender(N,L,Y,q),S=ce.get(L,w.length),S.init(Y),S.state.textureUnits=Qe.getTextureUnits(),w.push(S),Lt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?Dt.setFromArrayCamera(Y):$e.setFromProjectionMatrix(Lt,ni,Y.reversedDepth),Gt=this.localClippingEnabled,Wt=he.init(this.clippingPlanes,Gt),E=_e.get(L,g.length),E.init(),g.push(E),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let qe=N.xr.getDepthSensingMesh();qe!==null&&Xt(qe,Y,-1/0,N.sortObjects)}Xt(L,Y,0,N.sortObjects),E.finish(),k!==null&&k.updateLights(S.state.lightsArray),N.sortObjects===!0&&E.sort(He,ot),_t=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,_t&&W.addToRenderList(E,L),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&he.beginShadows();let $=S.state.shadowsArray;if(Re.render($,L,Y),Wt===!0&&he.endShadows(),(ee&&z.hasRenderPass())===!1){let qe=E.opaque,Ce=E.transmissive;if(S.setupLights(),Y.isArrayCamera){let Le=Y.cameras;if(Ce.length>0)for(let Ye=0,nt=Le.length;Ye<nt;Ye++){let mt=Le[Ye];oa(qe,Ce,L,mt)}_t&&W.render(L);for(let Ye=0,nt=Le.length;Ye<nt;Ye++){let mt=Le[Ye];sn(E,L,mt,mt.viewport)}}else Ce.length>0&&oa(qe,Ce,L,Y),_t&&W.render(L),sn(E,L,Y)}q!==null&&B===0&&(Qe.updateMultisampleRenderTarget(q),Qe.updateRenderTargetMipmap(q)),ee&&z.end(N),L.isScene===!0&&L.onAfterRender(N,L,Y),ve.resetDefaultState(),G=-1,K=null,w.pop(),w.length>0?(S=w[w.length-1],Qe.setTextureUnits(S.state.textureUnits),Wt===!0&&he.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,k!==null&&k.renderEnd()};function Xt(L,Y,te,ee){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){let qe=Y.isArrayCamera?Dt:$e;if(!L.frustumCulled||L.intersectsFrustum(qe)){ee&&Ue.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Lt);let Ce=ye.update(L),Le=L.material;Le.visible&&E.push(L,Ce,Le,te,Ue.z,null,Y)}}else if(L.isMesh||L.isLine||L.isPoints){let qe=Y.isArrayCamera?Dt:$e;if(!L.frustumCulled||L.intersectsFrustum(qe)){let Ce=ye.update(L),Le=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ue.copy(L.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ue.copy(Ce.boundingSphere.center)),Ue.applyMatrix4(L.matrixWorld).applyMatrix4(Lt)),Array.isArray(Le)){let Ye=Ce.groups;for(let nt=0,mt=Ye.length;nt<mt;nt++){let ke=Ye[nt],yt=Le[ke.materialIndex];yt&&yt.visible&&E.push(L,Ce,yt,te,Ue.z,ke,Y)}}else Le.visible&&E.push(L,Ce,Le,te,Ue.z,null,Y)}}}let Ee=L.children;for(let qe=0,Ce=Ee.length;qe<Ce;qe++)Xt(Ee[qe],Y,te,ee)}function sn(L,Y,te,ee){let{opaque:$,transmissive:Ee,transparent:qe}=L;S.setupLightsView(te),Wt===!0&&he.setGlobalState(N.clippingPlanes,te),ee&&De.viewport(ae.copy(ee)),$.length>0&&vn($,Y,te),Ee.length>0&&vn(Ee,Y,te),qe.length>0&&vn(qe,Y,te),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function oa(L,Y,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ee.id]===void 0){let ke=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ee.id]=new Jn(1,1,{generateMipmaps:!0,type:ke?mi:Gn,minFilter:Ki,samples:Math.max(4,zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}let Ee=S.state.transmissionRenderTarget[ee.id],qe=ee.viewport||ae;Ee.setSize(qe.z*N.transmissionResolutionScale,qe.w*N.transmissionResolutionScale);let Ce=N.getRenderTarget(),Le=N.getActiveCubeFace(),Ye=N.getActiveMipmapLevel();N.setRenderTarget(Ee),N.getClearColor(Z),de=N.getClearAlpha(),de<1&&N.setClearColor(16777215,.5),N.clear(),_t&&W.render(te);let nt=N.toneMapping;N.toneMapping=Ci;let mt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),S.setupLightsView(ee),Wt===!0&&he.setGlobalState(N.clippingPlanes,ee),vn(L,te,ee),Qe.updateMultisampleRenderTarget(Ee),Qe.updateRenderTargetMipmap(Ee),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let yt=0,jt=Y.length;yt<jt;yt++){let st=Y[yt],{object:It,geometry:un,material:Ge,group:mn}=st;if(Ge.side===En&&It.layers.test(ee.layers)){let Fe=Ge.side;Ge.side=bn,Ge.needsUpdate=!0,bi(It,te,ee,un,Ge,mn),Ge.side=Fe,Ge.needsUpdate=!0,ke=!0}}ke===!0&&(Qe.updateMultisampleRenderTarget(Ee),Qe.updateRenderTargetMipmap(Ee))}N.setRenderTarget(Ce,Le,Ye),N.setClearColor(Z,de),mt!==void 0&&(ee.viewport=mt),N.toneMapping=nt}function vn(L,Y,te){let ee=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ee=L.length;$<Ee;$++){let qe=L[$],{object:Ce,geometry:Le,group:Ye}=qe,nt=qe.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),Ce.layers.test(te.layers)&&bi(Ce,Y,te,Le,nt,Ye)}}function bi(L,Y,te,ee,$,Ee){k!==null&&$.isNodeMaterial&&k.setObject(L,$),L.onBeforeRender(N,Y,te,ee,$,Ee),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(N,Y,te,ee,L,Ee),$.transparent===!0&&$.side===En&&$.forceSinglePass===!1?($.side=bn,$.needsUpdate=!0,N.renderBufferDirect(te,Y,ee,$,L,Ee),$.side=xs,$.needsUpdate=!0,N.renderBufferDirect(te,Y,ee,$,L,Ee),$.side=En):N.renderBufferDirect(te,Y,ee,$,L,Ee),L.onAfterRender(N,Y,te,ee,$,Ee)}function Li(L){let Y=0;for(let te of L)te.texture!==null&&Y++;return Y}function Di(L,Y,te){Y.isScene!==!0&&(Y=xt);let ee=Xe.get(L),$=S.state.lights,Ee=S.state.shadowsArray,qe=$.state.version,Ce=pe.getParameters(L,$.state,Ee,Y,te,S.state.lightProbeGridArray),Le=pe.getProgramCacheKey(Ce),Ye=ee.programs;ee.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Y.environment:null,ee.fog=Y.fog;let nt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ee.envMap=O.get(L.envMap||ee.environment,nt),ee.envMapRotation=ee.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,Ye===void 0&&(L.addEventListener("dispose",St),Ye=new Map,ee.programs=Ye,ee.programVariants=new Map);let mt=Ye.get(Le);if(mt!==void 0){if(ee.currentProgram===mt&&ee.lightsStateVersion===qe)return Es(L,Ce),mt}else Ce.uniforms=pe.getUniforms(L),k!==null&&L.isNodeMaterial&&k.build(L,te,Ce),L.onBeforeCompile(Ce,N),mt=pe.acquireProgram(Ce,Le),Ye.set(Le,mt),ee.uniforms=Ce.uniforms;let ke=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ke.clippingPlanes=he.uniform),Es(L,Ce),ee.needsLights=is(L),ee.lightsStateVersion=qe,ee.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.sunLights.value=$.state.sun,ke.sunLightShadows.value=$.state.sunShadow,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.sunShadowMatrix.value=$.state.sunShadowMatrix,ke.sunShadowCascade.value=$.state.sunShadowCascade,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.numLightProbeGrids=Li(S.state.lightProbeGridArray),ee.currentProgram=mt,ee.uniformsList=null,mt}function Jr(L,Y,te,ee,$){let Ee=Xe.get(L),qe=Ee.currentProgram.id+","+ee+","+$,Ce=Ee.programVariants.get(qe);return Ce===void 0?(Ce=Di(L,Y,te),Ee.programVariants.set(qe,Ce)):(Ee.currentProgram=Ce,Ee.uniformsList=null,Ee.outputColorSpace=ee,Ee.toneMapping=$),Ce}function As(L){if(L.uniformsList===null){let Y=L.currentProgram.getUniforms();L.uniformsList=Lr.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Es(L,Y){let te=Xe.get(L);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function Kr(L,Y,te,ee,$){Y.isScene!==!0&&(Y=xt),Qe.resetTextureUnits();let Ee=Y.fog,qe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Y.environment:null,Ce=q===null?N.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Tt.workingColorSpace,Le=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ye=O.get(ee.envMap||qe,Le),nt=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,mt=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ke=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,jt=!!te.morphAttributes.color,st=Ci;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(st=N.toneMapping);let It=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,un=It!==void 0?It.length:0,Ge=Xe.get(ee),mn=S.state.lights;if(Wt===!0&&(Gt===!0||L!==K)){let kt=L===K&&ee.id===G;he.setState(ee,L,kt)}let Fe=!1,li=!1;ee.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==mn.state.version||$.isBatchedMesh&&Ge.batching===!1||!$.isBatchedMesh&&Ge.batching===!0||$.isBatchedMesh&&Ge.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ge.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ge.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ge.instancingMorph===!1&&$.morphTexture!==null||Ge.envMap!==Ye||ee.fog===!0&&Ge.fog!==Ee||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==he.numPlanes||Ge.numIntersection!==he.numIntersection)||Ge.vertexAlphas!==nt||Ge.vertexTangents!==mt||Ge.morphTargets!==ke||Ge.morphNormals!==yt||Ge.morphColors!==jt||Ge.morphTargetsCount!==un||Ge.numLightProbeGrids!==Li(S.state.lightProbeGridArray)?Fe=!0:(Ge.outputColorSpace!==Ce||Ge.toneMapping!==st)&&(li=!0):(Fe=!0,Ge.__version=ee.version);let qt=Ge.currentProgram;(Fe===!0||li===!0)&&(qt=li===!0?Jr(ee,Y,$,Ce,st):Di(ee,Y,$),k&&ee.isNodeMaterial&&k.onUpdateProgram(ee,qt,Ge));let Qt=!1,In=!1,Ui=!1,ht=qt.getUniforms(),cn=Ge.uniforms;if(De.useProgram(qt.program)&&(Qt=!0,In=!0,Ui=!0),ee.id!==G&&(G=ee.id,In=!0),Qt||K!==L){De.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ht.setValue(J,"projectionMatrix",L.projectionMatrix),ht.setValue(J,"viewMatrix",L.matrixWorldInverse);let rn=ht.map.cameraPosition;rn!==void 0&&rn.setValue(J,ie.setFromMatrixPosition(L.matrixWorld)),zt.logarithmicDepthBuffer&&ht.setValue(J,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ht.setValue(J,"isOrthographic",L.isOrthographicCamera===!0),K!==L&&(K=L,In=!0,Ui=!0)}if(Ge.needsLights&&(mn.state.sunShadowMap.length>0&&ht.setValue(J,"sunShadowMap",mn.state.sunShadowMap,Qe),mn.state.directionalShadowMap.length>0&&ht.setValue(J,"directionalShadowMap",mn.state.directionalShadowMap,Qe),mn.state.spotShadowMap.length>0&&ht.setValue(J,"spotShadowMap",mn.state.spotShadowMap,Qe),mn.state.pointShadowMap.length>0&&ht.setValue(J,"pointShadowMap",mn.state.pointShadowMap,Qe)),$.isSkinnedMesh){ht.setOptional(J,$,"bindMatrix"),ht.setOptional(J,$,"bindMatrixInverse");let kt=$.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ht.setValue(J,"boneTexture",kt.boneTexture,Qe))}$.isBatchedMesh&&(ht.setOptional(J,$,"batchingTexture"),ht.setValue(J,"batchingTexture",$._matricesTexture,Qe),ht.setOptional(J,$,"batchingIdTexture"),ht.setValue(J,"batchingIdTexture",$._indirectTexture,Qe),ht.setOptional(J,$,"batchingColorTexture"),$._colorsTexture!==null&&ht.setValue(J,"batchingColorTexture",$._colorsTexture,Qe));let Bt=te.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&ue.update($,te,qt),(In||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,ht.setValue(J,"receiveShadow",$.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Y.environment!==null&&(cn.envMapIntensity.value=Y.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=gv()),In){if(ht.setValue(J,"toneMappingExposure",N.toneMappingExposure),Ge.needsLights&&aa(cn,Ui),Ee&&ee.fog===!0&&Se.refreshFogUniforms(cn,Ee),Se.refreshMaterialUniforms(cn,ee,Me,ge,S.state.transmissionRenderTarget[L.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let kt=b,rn=0;for(let ei of S.state.lightProbeGridArray)ei.texture!==null&&(kt.textures[rn]=ei.texture,kt.min[rn]=ei.boundingBox.min,kt.max[rn]=ei.boundingBox.max,kt.resolution[rn]=ei.resolution,rn++);for(let ei in kt)kt[ei].length=rn;cn.probesSH.value=kt.textures,cn.probesMin.value=kt.min,cn.probesMax.value=kt.max,cn.probesResolution.value=kt.resolution}Lr.upload(J,As(Ge),cn,Qe)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Lr.upload(J,As(Ge),cn,Qe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ht.setValue(J,"center",$.center),ht.setValue(J,"modelViewMatrix",$.modelViewMatrix),ht.setValue(J,"normalMatrix",$.normalMatrix),ht.setValue(J,"modelMatrix",$.matrixWorld),ee.uniformsGroups!==void 0){let kt=ee.uniformsGroups;for(let rn=0,ei=kt.length;rn<ei;rn++){let Wn=kt[rn];We.update(Wn,qt),We.bind(Wn,qt)}}return qt}function aa(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.sunLights.needsUpdate=Y,L.sunLightShadows.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function is(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(L,Y,te){let ee=Xe.get(L);ee.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Xe.get(L.texture).__webglTexture=Y,Xe.get(L.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:te,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Y){let te=Xe.get(L);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,te=0){q=L,H=Y,B=te;let ee=null,$=!1,Ee=!1;if(L){let Ce=Xe.get(L);if(Ce.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(J.FRAMEBUFFER,Ce.__webglFramebuffer),ae.copy(L.viewport),j.copy(L.scissor),xe=L.scissorTest,De.viewport(ae),De.scissor(j),De.setScissorTest(xe),G=-1;return}else if(Ce.__webglFramebuffer===void 0)Qe.setupRenderTarget(L);else if(Ce.__hasExternalTextures)Qe.rebindTextures(L,Xe.get(L.texture).__webglTexture,Xe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let nt=L.depthTexture;if(Ce.__boundDepthTexture!==nt){if(nt!==null&&Xe.has(nt)&&(L.width!==nt.image.width||L.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(L)}}let Le=L.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);let Ye=Xe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?ee=Ye[Y][te]:ee=Ye[Y],$=!0):L.samples>0&&Qe.useMultisampledRTT(L)===!1?ee=Xe.get(L).__webglMultisampledFramebuffer:Array.isArray(Ye)?ee=Ye[te]:ee=Ye,ae.copy(L.viewport),j.copy(L.scissor),xe=L.scissorTest}else ae.copy(Je).multiplyScalar(Me).floor(),j.copy(ft).multiplyScalar(Me).floor(),xe=bt;if(te!==0&&(ee=F),De.bindFramebuffer(J.FRAMEBUFFER,ee)&&De.drawBuffers(L,ee),De.viewport(ae),De.scissor(j),De.setScissorTest(xe),$){let Ce=Xe.get(L.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce.__webglTexture,te)}else if(Ee){let Ce=Y;for(let Le=0;Le<L.textures.length;Le++){let Ye=Xe.get(L.textures[Le]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Le,Ye.__webglTexture,te,Ce)}}else if(L!==null&&te!==0){let Ce=Xe.get(L.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ce.__webglTexture,te)}G=-1};function Ni(L){let Y=Xe.get(L);return(Y.__readFormat!==L.format||Y.__readType!==L.type)&&(Y.__readFormat=L.format,Y.__readType=L.type,Y.__formatReadable=zt.textureFormatReadable(L.format),Y.__typeReadable=zt.textureTypeReadable(L.type)),Y}this.readRenderTargetPixels=function(L,Y,te,ee,$,Ee,qe,Ce=0){if(!(L&&L.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(Le=Le[qe],Array.isArray(Le)&&(Le=Le[0])),Le){De.bindFramebuffer(J.FRAMEBUFFER,Le);try{let Ye=L.textures[Ce],nt=Ye.format,mt=Ye.type;L.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ce);let ke=Ni(Ye);if(ke.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-ee&&te>=0&&te<=L.height-$&&J.readPixels(Y,te,ee,$,me.convert(nt),me.convert(mt),Ee)}finally{let Ye=q!==null?Xe.get(q).__webglFramebuffer:null;De.bindFramebuffer(J.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(L,Y,te,ee,$,Ee,qe,Ce=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(Le=Le[qe],Array.isArray(Le)&&(Le=Le[0])),Le)if(Y>=0&&Y<=L.width-ee&&te>=0&&te<=L.height-$){De.bindFramebuffer(J.FRAMEBUFFER,Le);let Ye=L.textures[Ce],nt=Ye.format,mt=Ye.type;L.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ce);let ke=Ni(Ye);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,yt),J.bufferData(J.PIXEL_PACK_BUFFER,Ee.byteLength,J.STREAM_READ),J.readPixels(Y,te,ee,$,me.convert(nt),me.convert(mt),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let jt=q!==null?Xe.get(q).__webglFramebuffer:null;De.bindFramebuffer(J.FRAMEBUFFER,jt);let st=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await af(J,st,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,yt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ee),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(yt),J.deleteSync(st),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Y=null,te=0){let ee=Math.pow(2,-te),$=Math.floor(L.image.width*ee),Ee=Math.floor(L.image.height*ee),qe=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;Qe.setTexture2D(L,0),J.copyTexSubImage2D(J.TEXTURE_2D,te,0,0,qe,Ce,$,Ee),De.unbindTexture()},this.copyTextureToTexture=function(L,Y,te=null,ee=null,$=0,Ee=0){let qe,Ce,Le,Ye,nt,mt,ke,yt,jt,st=L.isCompressedTexture?L.mipmaps[Ee]:L.image;if(te!==null)qe=te.max.x-te.min.x,Ce=te.max.y-te.min.y,Le=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,nt=te.min.y,mt=te.isBox3?te.min.z:0;else{let ht=Math.pow(2,-$);qe=Math.floor(st.width*ht),Ce=Math.floor(st.height*ht),L.isDataArrayTexture?Le=st.depth:L.isData3DTexture?Le=Math.floor(st.depth*ht):Le=1,Ye=0,nt=0,mt=0}ee!==null?(ke=ee.x,yt=ee.y,jt=ee.z):(ke=0,yt=0,jt=0);let It=me.convert(Y.format),un=me.convert(Y.type),Ge;Y.isData3DTexture?(Qe.setTexture3D(Y,0),Ge=J.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Qe.setTexture2DArray(Y,0),Ge=J.TEXTURE_2D_ARRAY):(Qe.setTexture2D(Y,0),Ge=J.TEXTURE_2D),De.activeTexture(J.TEXTURE0),De.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,Y.flipY),De.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),De.pixelStorei(J.UNPACK_ALIGNMENT,Y.unpackAlignment);let mn=De.getParameter(J.UNPACK_ROW_LENGTH),Fe=De.getParameter(J.UNPACK_IMAGE_HEIGHT),li=De.getParameter(J.UNPACK_SKIP_PIXELS),qt=De.getParameter(J.UNPACK_SKIP_ROWS),Qt=De.getParameter(J.UNPACK_SKIP_IMAGES);De.pixelStorei(J.UNPACK_ROW_LENGTH,st.width),De.pixelStorei(J.UNPACK_IMAGE_HEIGHT,st.height),De.pixelStorei(J.UNPACK_SKIP_PIXELS,Ye),De.pixelStorei(J.UNPACK_SKIP_ROWS,nt),De.pixelStorei(J.UNPACK_SKIP_IMAGES,mt);let In=L.isDataArrayTexture||L.isData3DTexture,Ui=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isDepthTexture){let ht=Xe.get(L),cn=Xe.get(Y),Bt=Xe.get(ht.__renderTarget),kt=Xe.get(cn.__renderTarget);De.bindFramebuffer(J.READ_FRAMEBUFFER,Bt.__webglFramebuffer),De.bindFramebuffer(J.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let rn=0;rn<Le;rn++)In&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Xe.get(L).__webglTexture,$,mt+rn),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Xe.get(Y).__webglTexture,Ee,jt+rn)),J.blitFramebuffer(Ye,nt,Ye+qe,nt+Ce,ke,yt,ke+qe,yt+Ce,J.DEPTH_BUFFER_BIT,J.NEAREST);De.bindFramebuffer(J.READ_FRAMEBUFFER,null),De.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if($!==0||L.isRenderTargetTexture||Xe.has(L)){let ht=Xe.get(L),cn=Xe.get(Y);De.bindFramebuffer(J.READ_FRAMEBUFFER,P),De.bindFramebuffer(J.DRAW_FRAMEBUFFER,V);for(let Bt=0;Bt<Le;Bt++)In?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ht.__webglTexture,$,mt+Bt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ht.__webglTexture,$),Ui?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,cn.__webglTexture,Ee,jt+Bt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,cn.__webglTexture,Ee),$!==0?J.blitFramebuffer(Ye,nt,Ye+qe,nt+Ce,ke,yt,ke+qe,yt+Ce,J.COLOR_BUFFER_BIT,J.NEAREST):Ui?J.copyTexSubImage3D(Ge,Ee,ke,yt,jt+Bt,Ye,nt,qe,Ce):J.copyTexSubImage2D(Ge,Ee,ke,yt,Ye,nt,qe,Ce);De.bindFramebuffer(J.READ_FRAMEBUFFER,null),De.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ui?L.isDataTexture||L.isData3DTexture?J.texSubImage3D(Ge,Ee,ke,yt,jt,qe,Ce,Le,It,un,st.data):Y.isCompressedArrayTexture?J.compressedTexSubImage3D(Ge,Ee,ke,yt,jt,qe,Ce,Le,It,st.data):J.texSubImage3D(Ge,Ee,ke,yt,jt,qe,Ce,Le,It,un,st):L.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ee,ke,yt,qe,Ce,It,un,st.data):L.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ee,ke,yt,st.width,st.height,It,st.data):J.texSubImage2D(J.TEXTURE_2D,Ee,ke,yt,qe,Ce,It,un,st);De.pixelStorei(J.UNPACK_ROW_LENGTH,mn),De.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Fe),De.pixelStorei(J.UNPACK_SKIP_PIXELS,li),De.pixelStorei(J.UNPACK_SKIP_ROWS,qt),De.pixelStorei(J.UNPACK_SKIP_IMAGES,Qt),Ee===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&J.generateMipmap(Ge),De.unbindTexture()},this.initRenderTarget=function(L){Xe.get(L).__webglFramebuffer===void 0&&Qe.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Qe.setTextureCube(L,0):L.isData3DTexture?Qe.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Qe.setTexture2DArray(L,0):Qe.setTexture2D(L,0),De.unbindTexture()},this.resetState=function(){H=0,B=0,q=null,De.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}};var si={west:62,east:84,halfDepth:48,home:{x:71,z:43}},jn=[-57,-19,19,57],gi=[-38,0,38],Yo={x:11.7,z:3.2},Nr={x:12.05,z:-5.45},Qi={x:2,z:38},Rn={x:38,z:-38},Ws={door:{x:47.6,z:-33},inside:{x:47.6,z:-38.4,angle:0},out:{x:47.6,z:-29.6,angle:0}},Yf={x:42.3,z:-41.25},vt=(n,e,t)=>Math.max(e,Math.min(t,n)),oe=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Fn(n,e,t,i){return(Math.abs(n)+t<65||n>si.west&&n+t<si.east&&Math.abs(e)+t<si.halfDepth)&&Math.abs(e)+t<65&&i.every(s=>{if(s.off)return!0;let r=n-vt(n,s.x-s.w/2,s.x+s.w/2),o=e-vt(e,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=t*t})}function Zo(n,e,t,i,s){let r=n.x,o=n.z;return Fn(e,n.z,i,s)&&(n.x=e),Fn(n.x,t,i,s)&&(n.z=t),n.x!==r||n.z!==o}function zn(n,e,t){let i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+vt(i,-t,t)}function Zf(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function cc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Jt;c.morphTargetsRelative=a;let l=0;for(let d=0;d<n.length;++d){let f=n[d],m=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[h].length!==n[0].morphAttributes[h].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+h+'" morph attribute.'),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,d),l+=h}}if(t){let d=0,f=[];for(let m=0;m<n.length;++m){let p=n[m].index;for(let h=0;h<p.count;++h)f.push(p.getX(h)+d);d+=n[m].attributes.position.count}c.setIndex(f)}for(let d in r){let f=Jf(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let m=0;m<f;++m){let p=[];for(let v=0;v<o[d].length;++v)p.push(o[d][v][m]);let h=Jf(p);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(h)}}}return c}function Jf(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let d=n[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),a=new en(o,t,i),c=0;for(let l=0;l<n.length;++l){let d=n[l];if(d.isInterleavedBufferAttribute){let f=c/t;for(let m=0,p=d.count;m<p;m++)for(let h=0;h<t;h++){let v=d.getComponent(m,h);a.setComponent(m+f,h,v)}}else o.set(d.array,c);c+=d.count*t}return s!==void 0&&(a.gpuType=s),a}var Jo=new X;function ri(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Jo.copy(e),Jo[i]=0,Jo.normalize();let l=.5*o/(o+a),d=1-Jo.angleTo(n)/c;return Math.sign(Jo[t])===1?d*l:a/(o+a)+l+l*(1-d)}var hc=class n extends ln{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new X,l=new X,d=new X(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,m=this.attributes.normal.array,p=this.attributes.uv.array,h=f.length/6,v=new X,x=.5/o;for(let _=0,A=0;_<f.length;_+=3,A+=2)switch(c.fromArray(f,_),l.copy(c),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),f[_+0]=d.x*Math.sign(c.x)+l.x*r,f[_+1]=d.y*Math.sign(c.y)+l.y*r,f[_+2]=d.z*Math.sign(c.z)+l.z*r,m[_+0]=l.x,m[_+1]=l.y,m[_+2]=l.z,Math.floor(_/h)){case 0:v.set(1,0,0),p[A+0]=ri(v,l,"z","y",r,i),p[A+1]=1-ri(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),p[A+0]=1-ri(v,l,"z","y",r,i),p[A+1]=1-ri(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),p[A+0]=1-ri(v,l,"x","z",r,e),p[A+1]=ri(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),p[A+0]=1-ri(v,l,"x","z",r,e),p[A+1]=1-ri(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),p[A+0]=1-ri(v,l,"x","y",r,e),p[A+1]=1-ri(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),p[A+0]=ri(v,l,"x","y",r,e),p[A+1]=1-ri(v,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var xv={tee:"Camiseta",tank:"Regata",dress:"Camisa social",none:"Sem camisa"},_v={pants:"Cal\xE7a",shorts:"Bermuda"},yv={sneakers:"T\xEAnis",flipflops:"Chinelo",dress:"Sapato social"},tu={bald:"Careca",buzz:"Raspado",short:"Curto",afro:"Black power",long:"Comprido",mohawk:"Moicano",cap:"Bon\xE9"},nu={none:"Sem barba",stubble:"Por fazer",goatee:"Cavanhaque",mustache:"Bigode",full:"Barba cheia",chevron:"Bigode e cavanhaque"},Ur={gold:14266683,silver:13225169,diamond:14677503},iu=[15921126,2040614,2772879,11680307,3107660,14725949,8014476,14711354,7307148,2592670],su=[1906452,3876376,6964005,13081170,9318175,10132118,2772896],ru=[15052936,12684900,11765348,10119749,8475704,6175527];function Xs(){return{shirt:"tee",shirtColor:2386265,legs:"pants",legColor:3553348,shoes:"sneakers",shoeColor:13812648,hair:"cap",hairColor:1906452,beard:"none",skin:12220240,glasses:!1,chain:"none",earrings:"none",watch:"none",ring:"none",height:1,width:1,capColor:1522486}}function Kf(n=12157017){return{...Xs(),shirt:"dress",shirtColor:3558501,legColor:2503491,shoes:"dress",shoeColor:1447446,hair:"cap",capColor:1845820,skin:n,beard:"none"}}function Ko(n){let e=n*2654435761>>>0||1,t=()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296),i=r=>r[Math.floor(t()*r.length)],s=r=>{let o=t()*r.reduce((a,[,c])=>a+c,0);for(let[a,c]of r)if(o-=c,o<=0)return a;return r[0][0]};return{feminine:n%3===0,shirt:s([["tee",.46],["tank",.2],["dress",.2],["none",.08]]),shirtColor:i(iu),legs:s([["pants",.62],["shorts",.38]]),legColor:i([3553348,2373199,5917242,2894892,8221798,4020851,11049860]),shoes:s([["sneakers",.5],["flipflops",.28],["dress",.22]]),shoeColor:i([15789282,2236962,9056042,2969482,5915442]),hair:s([["short",.3],["buzz",.18],["bald",.1],["afro",.12],["long",.14],["mohawk",.05],["cap",.11]]),hairColor:i(su.slice(0,6)),beard:n%3===0?"none":s([["none",.45],["stubble",.18],["goatee",.1],["mustache",.1],["full",.12],["chevron",.05]]),skin:i(ru),glasses:t()<.14,chain:s([["none",.82],["silver",.11],["gold",.07]]),earrings:s([["none",.88],["silver",.06],["gold",.05],["diamond",.01]]),watch:s([["none",.75],["silver",.17],["gold",.08]]),ring:s([["none",.85],["silver",.1],["gold",.05]]),height:.92+t()*.16,width:.9+t()*.25,capColor:i([1522486,9056042,2236962,2772879,14725949])}}function $f(n){let e=Xs();if(!n||typeof n!="object")return e;let t=(r,o)=>Object.hasOwn(o,n[r])?n[r]:e[r],i=r=>Number.isInteger(n[r])&&n[r]>=0&&n[r]<=16777215?n[r]:e[r],s=(r,o)=>o.includes(n[r])?n[r]:"none";return{shirt:t("shirt",xv),shirtColor:i("shirtColor"),legs:t("legs",_v),legColor:i("legColor"),shoes:t("shoes",yv),shoeColor:i("shoeColor"),hair:t("hair",tu),hairColor:i("hairColor"),beard:t("beard",nu),skin:i("skin"),glasses:n.glasses===!0,chain:s("chain",["gold","silver"]),earrings:s("earrings",["gold","silver","diamond"]),watch:s("watch",["gold","silver"]),ring:s("ring",["gold","silver"]),height:1,width:1,capColor:i("capColor")}}var vv=new ln,Mv=new ln(1,1,1,10,8,2).toNonIndexed(),bv=new hc(1,1,1,2,.29),Sv=new fs(1,10,7),wv=new Un(1,1,1,12),ou=new Map,Tv=new $t({vertexColors:!0,roughness:.82}),dc=new $t({vertexColors:!0,roughness:.36,metalness:.18});function xi(n,e,t=Tv){if(!e.length)return;let i=e.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,c=new Float32Array(a*3),l=r.material.color;for(let d=0;d<c.length;d+=3){let f=l;if(r.userData.tankSkin){let m=r.geometry.attributes.position,p=Math.floor(d/9)*3,h=(m.getX(p)+m.getX(p+1)+m.getX(p+2))/3,v=(m.getY(p)+m.getY(p+1)+m.getY(p+2))/3;(v>.49||v>.14&&Math.abs(h)>.36||v>.27&&Math.abs(h)<.14)&&(f=r.userData.tankSkin)}c[d]=f.r,c[d+1]=f.g,c[d+2]=f.b}return o.setAttribute("color",new en(c,3)),o});n.remove(...e);let s=new Rt(cc(i),t);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var es=n=>n.children.filter(e=>e instanceof Rt);function Mt(n,e,t,i,s,r,o,a,c,l=!1){let d=t+":"+l;ou.has(d)||ou.set(d,new $t({color:t,roughness:l?.33:.87,metalness:l?.2:0}));let f=new Rt({box:vv,cloth:bv,sphere:Sv,cylinder:wv}[e],ou.get(d));return f.scale.set(o,a,c),f.position.set(i,s,r),f.castShadow=!0,f.receiveShadow=!0,n.add(f),f}var Av=new zs(1,16),Ev=new Kt({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function fc(n,e,t){let i=new Rt(Av,Ev);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(e,t,1),n.add(i),i}var Cv=new Eo(1,.09,6,18),Rv=new $t({vertexColors:!0,roughness:.22,metalness:.9});var Fr=(n,e)=>{let t=Math.max(0,Math.min(255,(n>>16&255)*e)),i=Math.max(0,Math.min(255,(n>>8&255)*e)),s=Math.max(0,Math.min(255,(n&255)*e));return t<<16|i<<8|s};function Ms(n,e){let t={...Xs(),...e},{skin:i}=t,s=new Nt;s.rotation.order="YXZ",s.scale.set(t.width,t.height,t.width);let r=fc(s,.41,.38),o=new Nt;s.add(o);let a=(E,S,g,w,z,N,D,k,F=!1)=>Mt(o,E,S,g,w,z,N,D,k,F),c=t.shirt==="none",l=c?i:t.shirtColor;a("cloth",t.legColor,0,.94,0,.44,.25,.29);let d=a(t.shirt==="tank"?"box":"cloth",l,0,1.25,0,.52,.49,.32);t.shirt==="tank"&&(d.geometry=Mv,d.userData.tankSkin=new Ke(i)),c&&t.feminine&&a("cloth",t.shirtColor,0,1.34,.16,.47,.12,.012),t.shirt==="dress"&&(a("cloth",Fr(l,1.25),0,1.47,.06,.3,.06,.2),a("cloth",Fr(l,1.18),0,1.25,.158,.05,.4,.012)),a("cloth",c?3877408:4864812,0,1.05,.006,.473,.049,.312),a("cloth",12891226,-.128,1.05,.16,.06,.05,.01),a("cylinder",i,0,1.5,0,.09,.13,.09),a("sphere",i,0,1.67,.015,.168,.197,.157),a("sphere",i,0,1.655,.165,.033,.034,.034),a("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let E of[-1,1])a("sphere",i,E*.155,1.66,.023,.032,.052,.025),a("cloth",2894120,E*.061,1.711,.152,.043,.012,.012),a("cloth",10985105,E*.061,1.692,.156,.032,.012,.012),a("cloth",3024931,E*.06,1.693,.163,.016,.012,.009);let f=t.hairColor;switch(t.hair){case"buzz":a("sphere",f,0,1.735,-.02,.172,.105,.158);break;case"short":a("sphere",f,0,1.77,-.031,.162,.112,.141);break;case"afro":a("sphere",f,0,1.8,-.035,.235,.19,.225);break;case"long":a("sphere",f,0,1.765,-.03,.175,.12,.16),a("cloth",f,0,1.6,-.115,.32,.34,.1);break;case"mohawk":a("sphere",Fr(i,.8),0,1.735,-.02,.171,.1,.157),a("cloth",f,0,1.83,-.02,.05,.11,.3);break;case"cap":a("sphere",t.capColor,0,1.79,.012,.181,.132,.164),a("cloth",Fr(t.capColor,1.2),0,1.77,.159,.27,.033,.17);break;default:break}let m=t.beard;if(m==="stubble"&&a("cloth",Fr(i,.68),0,1.585,.09,.3,.1,.13),m==="full"&&a("cloth",f,0,1.585,.085,.33,.13,.16),(m==="goatee"||m==="chevron")&&a("cloth",f,0,1.555,.15,.07,.075,.04),(m==="mustache"||m==="chevron"||m==="full")&&a("cloth",f,0,1.618,.164,.1,.022,.02),t.glasses){a("cloth",1118481,0,1.703,.163,.25,.05,.02);for(let E of[-1,1])a("cloth",1118481,E*.155,1.705,.08,.012,.018,.16)}if(t.earrings!=="none")for(let E of[-1,1])a("sphere",Ur[t.earrings],E*.162,1.625,.03,.016,.016,.016,!0);if(t.chain!=="none"){let E=a("box",Ur[t.chain],0,1.43,.06,.15,.15,.15,!0);E.geometry=Cv,E.rotation.x=Math.PI/2-.42,a("box",Ur[t.chain],0,1.32,.165,.04,.05,.015,!0)}let p=[],h=[],v=[],x=[];for(let E of[-1,1]){let S=new Nt;S.position.set(E*.31,1.42,0),o.add(S);let g=t.shirt==="tee"||t.shirt==="dress";Mt(S,"cloth",g?l:i,0,-.105,0,g?.173:.15,.226,g?.187:.16);let w=new Nt;w.position.y=-.23,S.add(w),Mt(w,"cloth",t.shirt==="dress"?l:i,0,-.101,0,.132,.22,.119),Mt(w,"sphere",i,0,-.227,.012,.082,.084,.077),E===1&&t.watch!=="none"&&(Mt(w,"cloth",2762018,0,-.17,0,.14,.04,.128),Mt(w,"box",Ur[t.watch],0,-.17,.065,.05,.045,.012,!0)),E===-1&&t.ring!=="none"&&Mt(w,"box",Ur[t.ring],.03,-.27,.05,.022,.022,.022,!0),v.push(w),p.push(S);let z=new Nt;z.position.set(E*.128,.94,0),o.add(z),Mt(z,"cloth",t.legColor,0,-.205,0,.21,.427,.228);let N=new Nt;N.position.y=-.412,z.add(N);let D=t.legs==="shorts";if(Mt(N,"cloth",D?i:t.legColor,0,-.18,0,D?.15:.182,.38,D?.16:.198),t.shoes==="flipflops"){Mt(N,"cloth",i,0,-.405,.06,.12,.08,.24);for(let k of[-1,1])Mt(N,"cloth",t.shoeColor,k*.033,-.366,.09,.023,.019,.1).rotation.y=-k*.55;Mt(N,"cloth",t.shoeColor,0,-.455,.059,.15,.025,.29)}else{let k=t.shoes==="dress"?1906194:t.shoeColor;Mt(N,"cloth",k,0,-.386,.062,.201,.143,.304),Mt(N,"cloth",t.shoes==="dress"?1183243:Fr(k,.55),0,-.445,.059,.202,.037,.313)}x.push(N),h.push(z)}let _=new Nt;_.position.set(0,-.227,.012),Mt(_,"box",2635321,0,.012,-.002,.066,.078,.12,!0),Mt(_,"box",2635321,0,-.105,.054,.074,.25,.079,!0),Mt(_,"box",10263691,0,-.189,.095,.031,.028,.018);let A=new Vt;A.position.set(0,-.235,.053),_.add(A),v[0].add(_);let C=new Nt;C.position.set(0,-.227,.03),Mt(C,"box",2828840,0,0,.05,.08,.12,.06,!0),Mt(C,"box",2303786,0,-.2,.07,.07,.5,.11,!0),Mt(C,"box",1842719,0,-.62,.08,.035,.42,.035,!0),Mt(C,"box",5915954,0,.22,.06,.07,.32,.12),Mt(C,"box",2303786,0,-.18,-.02,.05,.16,.12,!0);let b=new Vt;b.position.set(0,-.84,.08),C.add(b),v[0].add(C);for(let E of[o,...p,...v,...h,...x,_,C]){let S=es(E);xi(E,S.filter(g=>g.material.metalness===0)),xi(E,S.filter(g=>g.material.metalness>0),Rv)}return _.visible=!1,C.visible=!1,n.add(s),{root:s,body:o,arms:p,legs:h,forearms:v,shins:x,pistol:_,rifle:C,muzzle:A,rifleMuzzle:b,shadow:r,stride:0,weapon:"pistol",look:t}}function Ys(n,e,t,i,s,r=0,o=0,a=!1){n.stride+=e*(4.6+t*1.65);let c=Math.sin(n.stride)*Math.min(.78,t*.15);n.body.position.set(0,Math.abs(c)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(c,0,0),n.legs[1].rotation.set(-c,0,0),n.shins[0].rotation.set(Math.max(0,c)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-c)*.51,0,0);for(let d of n.forearms)d.rotation.set(0,0,0);let l=s&&n.weapon==="rifle";if(n.arms[0].rotation.set(i?-Math.PI/2+o:-c*.76,0,0),n.arms[1].rotation.set(i?l?-Math.PI/2+o+.12:-1.16:c*.76,0,i&&l?.42:0),i&&l&&n.forearms[1].rotation.set(-.35,0,0),n.arms[0].rotation.z=a?-.25:0,(a||!(i&&l))&&(n.arms[1].rotation.z=a?.25:0),a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let d=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-d*1.11,n.forearms[0].rotation.x=-.62*(1-d),n.body.rotation.y=-d*.37}else n.body.rotation.y=0;n.pistol.visible=s&&n.weapon!=="rifle",n.rifle&&(n.rifle.visible=s&&n.weapon==="rifle")}var jf=new X(0,-1,0),au=new X,qs=new X,lu=new X,cu=new X,uc=new X,ep=new an;function Qf(n,e,t,i,s,r){qs.subVectors(t,n.position);let o=Math.min(i+s-.001,Math.max(.015,qs.length()));qs.normalize();let a=(i*i-s*s+o*o)/(2*o);lu.set(r[0],r[1],r[2]).addScaledVector(qs,-lu.dot(qs)).normalize(),au.copy(n.position).addScaledVector(qs,a).addScaledVector(lu,Math.sqrt(Math.max(0,i*i-a*a))),uc.subVectors(au,n.position).normalize(),n.quaternion.setFromUnitVectors(jf,uc),uc.copy(n.position).addScaledVector(qs,o).sub(au).normalize(),e.quaternion.setFromUnitVectors(jf,uc.applyQuaternion(ep.copy(n.quaternion).invert()))}function hu(n,e){e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(cu.set(0,.1,-.31))),n.root.quaternion.copy(e.body.getWorldQuaternion(ep)),n.shadow.visible=!1,n.pistol.visible=!1;let t=.63;n.body.rotation.set(t,0,0),n.body.position.set(0,.94*(1-Math.cos(t)),-.94*Math.sin(t)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(e.handlebar.localToWorld(cu.set(s*.342,.44,-.09)));Qf(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(e.body.localToWorld(cu.set(s*.245,.39,-.22)));Qf(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function $o(n,e,t){let i=Math.min(1,e/.22),s=Math.min(1,Math.max(0,(e-.12)/.5)),r=s*s*(3-2*s),o=e>.62?Math.sin(Math.min(1,(e-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(e-.62)/.25)):0,a=t*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(t*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let c=Math.sin(Math.min(1,e/.5)*Math.PI);return n.arms[0].rotation.set(-t*(.6*c+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-t*(.9*c+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*c-.2,0,0),n.forearms[1].rotation.set(-.3*c-.3,0,0),n.pistol.visible=!1,a}var pc={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},Qo=n=>pc[n]??pc[(n??"car").split(":")[0]]??pc.car,bs=n=>n.shape??n.kind;function tp(n,e){pc[n]=e}function oi(n,e){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0),n.repair?.(),Object.assign(n,e,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function _i(n,e,t,i,s="car"){if(n>64&&!s.startsWith("bike"))return!1;let r=Math.sin(t),o=Math.cos(t),{offsets:a,radius:c}=Qo(s);return a.every(l=>Fn(n+r*l,e+o*l,c,i))}function ts(n,e,t,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=e-n.x,a=t-n.z,{width:c,length:l}=Qo(bs(n)),d=Math.abs(o*r-a*s)-c,f=Math.abs(o*s+a*r)-l;return d<=0&&f<=0||Math.hypot(Math.max(0,d),Math.max(0,f))<i}function Ss(n,e=0){let{width:t,length:i}=Qo(n),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));return{width:t*s+i*r,length:i*s+t*r}}function du(n,e,t,i=n){return _i(n.x,n.z,n.angle,e,bs(n))&&!jo(i,n.x,n.z,n.angle,t)}function jo(n,e,t,i,s){let r=Math.sin(i),o=Math.cos(i),a=Qo(bs(n));for(let c of s){if(c===n||Math.abs(c.x-e)>4.5||Math.abs(c.z-t)>4.5)continue;let l=Math.sin(c.angle),d=Math.cos(c.angle),f=Qo(bs(c)),m=a.radius+f.radius,p=m,h=0,v=0;for(let x of a.offsets)for(let _ of f.offsets){let A=e+r*x-c.x-l*_,C=t+o*x-c.z-d*_,b=Math.hypot(A,C);if(b>=p)continue;p=b;let E=Math.hypot(e-c.x,t-c.z);h=b>.02?A/b:E>.02?(e-c.x)/E:r,v=b>.02?C/b:E>.02?(t-c.z)/E:o}if(p<m)return{other:c,nx:h,nz:v,mass:a.mass,otherMass:f.mass}}return null}function uu(n,e){e<2.4||(n.integrity=Math.max(0,n.integrity-(e-2.4)*1.15),n.impact=Math.max(n.impact,e))}function yi(n,e,t,i,s){let{brake:r}=t,o=n.kind==="bike",a=n.integrity>0?t.throttle:0,c=n.integrity>0?t.steer:0;n.impact=Math.max(0,n.impact-e*21),n.steer+=(c-n.steer)*(1-Math.exp(-e*10));let l=Math.sin(n.angle),d=Math.cos(n.angle),f=n.vx*l+n.vz*d,m=n.handling,p=(n.flat??[]).filter(Boolean).length,h=(m?.top??(o?31:27))*(1-p*.22),v=Math.sign(a)*f<-.6?28:a<0?o?4.7:10:(m?.accel??(o?19.7:15.4))*(1-p*.15);f=vt(f+a*v*e,o?-2.7:-8.4,h);let x=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;f*=Math.exp(-e*x);let _=r?o?5.2:2.15:(m?.grip??(o?13.5:8.1))*(1-p*.12),A=(n.vx*d-n.vz*l)*Math.exp(-e*_);n.vx=f*l+A*d,n.vz=f*d-A*l;let C=vt(1.9-Math.abs(f)/24,.75,1.65),b=p?((n.flat?.[0]||n.flat?.[2]?1:0)-(n.flat?.[1]||n.flat?.[3]?1:0))*.12:0,E=(n.steer+b)*e*C*Math.min(1,Math.abs(f)/2.1)*Math.sign(f),S=n.angle+E*(o?1.26:r?1.58:1);_i(n.x,n.z,S,i,bs(n))&&!jo(n,n.x,n.z,S,s)&&(n.angle=S);let g=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*e/.34)),w=e/g;for(let z=0;z<g;z++){let N=n.x+n.vx*w,D=n.z+n.vz*w,k=jo(n,N,D,n.angle,s);if(k){let{other:F,nx:P,nz:V,mass:H,otherMass:B}=k,q=n.vx*P+n.vz*V,G=q-(F.vx*P+F.vz*V);if(G<0&&q<0){let ae=-G*1.22/(1/H+1/B);n.vx+=P*ae/H,n.vz+=V*ae/H,F.vx-=P*ae/B,F.vz-=V*ae/B,uu(n,-G),uu(F,-G*.9);break}let K=Math.hypot(n.x-F.x,n.z-F.z);if(Math.hypot(N-F.x,D-F.z)<=K)break}if(_i(N,D,n.angle,i,bs(n)))n.x=N,n.z=D;else{let F=_i(N,n.z,n.angle,i,bs(n))&&!jo(n,N,n.z,n.angle,s),P=_i(n.x,D,n.angle,i,bs(n))&&!jo(n,n.x,D,n.angle,s),V=Math.hypot(F?0:n.vx,P?0:n.vz);F!==P?(F&&(n.x=N),P&&(n.z=D),n.vx*=F?.84:-.22,n.vz*=P?.84:-.22):(n.vx*=-.21,n.vz*=-.21),uu(n,V||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function On(n,e){let t=0;return gi.some(i=>Math.abs(n-i)<=13.55)&&gi.some(i=>Math.abs(e-i)<=13.55)&&(t=.16),Math.abs(n-38)<6.05&&Math.abs(e+38)<5.04&&(t=.228),Math.abs(n-2)<9.5&&Math.abs(e-38)<11&&(t=.191),n>-10.91&&n<-3.49&&Math.abs(e-38)<9.77&&(t=.234),t}function Vn(n,e,t,i,s,r,o=.34){if(!Fn(e,t,o,i))return!1;for(let a of s)if(!(oe(a,{x:e,z:t})>3.4||!ts(a,e,t,o))&&(!ts(a,n.x,n.z,o)||oe(a,{x:e,z:t})<=oe(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let c=o+.28;if(oe(a,{x:e,z:t})<c&&oe(a,{x:e,z:t})<=oe(a,n))return!1}return!0}function mc(n,e,t,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(e,t)/.14)),c=n.x,l=n.z,d=e/a,f=t/a;for(let m=0;m<a;m++){let p=n.x+d,h=n.z+f;if(Vn(n,p,h,i,s,r,o)){n.x=p,n.z=h;continue}d&&Vn(n,p,n.z,i,s,r,o)&&(n.x=p),f&&Vn(n,n.x,h,i,s,r,o)&&(n.z=h)}return Math.hypot(n.x-c,n.z-l)}function np(n,e,t){if(!e)return ts(n,t.x,t.z,.28);let i=Math.max(1,Math.ceil(oe(e,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=e.x+(n.x-e.x)*r,a=e.z+(n.z-e.z)*r,c={x:o,z:a,angle:n.angle,kind:n.kind,shape:n.shape};if(ts(c,t.x,t.z,.28))return!0}return!1}function ip(n,e,t){let i=e.x-n.x,s=e.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((t.x-n.x)*i+(t.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(t.x-n.x-i*o,t.z-n.z-s*o)<1.2}function rp(n,e){let{id:t,x:i,z:s,w:r,d:o,angle:a,kind:c,label:l,color:d}=e,{box:f,solid:m,door:p,sign:h,glazing:v,support:x,volume:_}=n,A=c==="shop"||c==="armory",C=(B,q,G=.228)=>({x:i+Math.cos(a)*B+Math.sin(a)*q,z:s-Math.sin(a)*B+Math.cos(a)*q,y:G}),b=Math.abs(Math.cos(a)),E=Math.abs(Math.sin(a)),S=(B,q,G,K)=>({...C(B,q),w:G*b+K*E,d:G*E+K*b}),g=o/2,w=-o/2,z=-r/2,N=r/2,D=(B,q,G,K,ae,j,xe,Z=!1,de=0,Ae="box")=>{let ge=C(B,q);f(ge.x,G,ge.z,K,ae,j,xe,Z,a,de,Ae)},k=(B,q,G,K,ae,j,xe,Z=!0)=>{D(B,q,G,K,ae,j,xe,Z);let de=S(B,q,K,j);m.push({x:de.x,z:de.z,w:de.w,d:de.d,y0:G-ae*.5,h:G+ae*.5,buildingId:t})};return A?V():P();function F(B,q,G,K,ae){if(D(B,g+.05,q,G+.22,K+.22,.1,5195585),D(B,g+.085,q,G,K,.06,5073522),D(B,g+.12,q,.05,K,.03,12168856),D(B,g+.12,q+K*.18,G,.045,.03,12168856),D(B,g+.13,q-K*.5-.08,G+.36,.09,.2,vi(d)),ae)for(let j of[-1,1])D(B+j*(G*.5+.24),g+.09,q,.34,K+.06,.05,ae)}function P(){let B=c==="apartments",q=B?e.stories:1,G=B?3.3:3.25,K=q*G,ae=.228+K;k(0,0,.228+K/2,r,K,o,d),D(0,g+.03,.228+.23,r+.04,.46,.08,8484463);for(let Z of[z+.12,N-.12])D(Z,g+.04,.228+K/2,.26,K,.1,vi(d));for(let Z=1;Z<q;Z++)D(0,g+.04,.228+Z*G,r+.04,.16,.1,vi(d));let j=B?0:-r*.18;if(D(j,g+.05,.228+1.17,1.42,2.42,.1,5195585),D(j,g+.09,.228+1.1,1.1,2.2,.06,B?4151902:7687224),D(j+.38,g+.14,.228+1.08,.06,.16,.05,13810049),D(j,g+.32,.228-.05,1.7,.14,.62,8484463),D(j,g+.42,.228+2.62,1.9,.12,.86,vi(d),!0),B){D(j,g+.12,.228+2.92,1.6,.32,.05,15324320);let Z=C(j,g+.15,.228+2.92);h(l,Z.x,Z.y,Z.z,a,5589560,1.56,.3)}else{let Z=C(j+1.15,g+.13,1.848);h(l,Z.x,Z.y,Z.z,a,5589560,.92,.22)}let xe=c==="house"?sp(t,[6257514,8019014,6975364]):null;for(let Z=0;Z<q;Z++){let de=.228+Z*G,Ae=B?[z+r*.17,z+r*.38,N-r*.38,N-r*.17]:[r*.18,r*.38];for(let ge of Ae)if(!(Z===0&&Math.abs(ge-j)<1.7)&&(F(ge,de+1.72,B?1.26:1.2,1.34,xe),B&&Z>0&&ge===Ae[3])){D(ge,g+.42,de+.95,1.8,.12,.74,8484463,!0);for(let Me of[-.8,-.4,0,.4,.8])D(ge+Me,g+.76,de+1.38,.04,.78,.04,4802113);D(ge,g+.76,de+1.78,1.72,.05,.06,4802113)}for(let ge of[z,N]){let Me=ge===z?-1:1;for(let He of B?[w+2.2,g-2.2]:[0]){let ot=C(ge+Me*.05,He);f(ot.x,de+1.72,ot.z,.1,1.56,1.32,5195585,!1,a);let Je=C(ge+Me*.085,He);f(Je.x,de+1.72,Je.z,.06,1.34,1.1,5073522,!1,a)}}}if(B){D(0,0,ae+.04,r+.12,.1,o+.12,7827562);for(let Z of[z+.1,N-.1])D(Z,0,ae+.36,.2,.56,o,vi(d),!0);for(let Z of[w+.1,g-.1])D(0,Z,ae+.36,r,.56,.2,vi(d),!0);D(N-2.4,w+2.1,ae+.95,2,1.8,2,9077369,!0),D(N-2.4,w+2.1,ae+1.93,2.1,.12,2.1,7301732),D(z+2.2,w+1.9,ae+.75,1.4,1.2,1.4,10134691,!0),D(z+2.2,w+1.9,ae+1.42,1.5,.12,1.5,7240057)}else{let Z=Math.min(2,o*.2);D(0,0,ae,r-.02,Z,o-.02,d,!0,0,"prism"),D(0,0,ae+.06,r+.5,Z+.12,o+.7,sp(t,[10115652,9063482,8082502]),!0,0,"prism"),D(N-2.1,w+o*.3,ae+Z*.55,.55,1.6,.55,9402986,!0)}return{id:t,kind:c,label:l,units:[],doorIds:[],clerk:null,outside:C(j,g+1.1,.16),entry:C(j,g+.2),inside:C(j,g+.2),approach:C(j,g+2.4,.16),resident:null}}function V(){let q=4.0200000000000005,G=.228,K=e.doorAt??.1,ae=Math.min(r*.25,3.72),j=[K-r*.248,K+r*.248],xe=.22,Z=(Ue,xt,_t,lt,J,Ft,pt)=>k(Ue,xt,J+Ft/2,_t,Ft,lt,pt),de=(Ue,xt,_t,lt,J,Ft)=>Z((xt+_t)/2,Ue,_t-xt,xe,lt,J,Ft),Ae=(Ue,xt,_t,lt,J,Ft)=>Z(Ue,(xt+_t)/2,xe,_t-xt,lt,J,Ft),ge=p(...H(K-1.28/2,g),a,1.28,4285290,G,{buildingId:t,private:!1,unitId:null}),Me=C(K,g),He=C(K,g+1.05,.16),ot=C(K,g-1.05),Je=C(K,g+2.45,.16);_.push({...S(0,0,r-.2,o-.2),floor:G,ceiling:G+q,buildingId:t}),k(0,0,G-.066,r-.03,.132,o-.03,11972762,!1),m[m.length-1].walkSurface=!0,x.push({...S(0,0,r-.03,o-.03),y:G,buildingId:t}),Ae(z,w,g,G,q,d),Ae(N,w,g,G,q,d),de(w,z,N,G,q,d);let ft=z,bt=[{center:K,width:1.28,door:!0},...j.map(Ue=>({center:Ue,width:ae,door:!1}))];bt.sort((Ue,xt)=>Ue.center-xt.center);let $e=.61,Dt=2.58,Wt=Dt-$e;for(let Ue of bt){let xt=Ue.center-Ue.width*.5,_t=Ue.center+Ue.width*.5;if(de(g,ft,xt,G,q,d),D((ft+xt)/2,g+.04,G+.17,xt-ft,.34,.11,8484463),ft=_t,Ue.door)continue;Z(Ue.center,g,Ue.width,xe,G,$e,d),Z(Ue.center,g,Ue.width,xe,G+Dt,q-Dt,d);let lt=C(Ue.center,g+.068,G+(Dt+$e)*.5);v(lt.x,lt.y,lt.z,Ue.width,Wt,a);let J=S(Ue.center,g,Ue.width,.2);m.push({x:J.x,z:J.z,w:J.w,d:J.d,y0:G+$e,h:G+Dt,buildingId:t});for(let pt of[-1,0,1])D(Ue.center+pt*(Ue.width*.5-.042),g+.13,G+(Dt+$e)*.5,.07,Wt,.084,5989472);for(let pt of[$e,Dt])D(Ue.center,g+.13,G+pt,Ue.width+.07,.081,.096,7831928);D(Ue.center,g+.17,G+$e-.025,Ue.width+.2,.091,.25,10065280);let Ft=g-.48;D(Ue.center,Ft,G+.83,Ue.width-.24,.078,.45,11771260);for(let pt of[-.78,-.39,.39,.78])D(Ue.center+pt,Ft,G+.95+(Math.abs(pt)<.5?.055:0),.23,.26,.26,e.awning??12089684)}de(g,ft,N,G,q,d),D((ft+N)/2,g+.04,G+.17,N-ft,.34,.11,8484463),k(K,g,G+2.22+(q-2.22)/2,1.28,q-2.22,.21,d);for(let Ue of[z+.17,N-.17])D(Ue,g+.11,G+q/2,.22,q,.17,vi(d));D(0,g+.07,G+4.16-.05,r+.25,.22,.13,vi(d));for(let Ue of[z,N]){let xt=Ue===z?-1:1;for(let _t of[w+2.3,g-2.3])D(Ue+xt*.13,_t,G+1.7,.06,1.2,1.4,5195585),D(Ue+xt*.16,_t,G+1.7,.04,1.04,1.22,5073522),D(Ue+xt*.2,_t,G+1.03,.16,.09,1.56,vi(d))}let Gt=C(0,w+1.89,G);Gt.angle=a;let Lt=C(0,g+.18,G+4.16-.64);h(l,Lt.x,Lt.y,Lt.z,a,3232851,Math.min(5.25,r-.72),.58),D(0,g+.6,G+4.16-1.37,r-.56,.19,1.22,e.awning??7820863,!0);for(let Ue=z+.68;Ue<N-.42;Ue+=.46)D(Ue,g+1.21,G+4.16-1.46,.225,.23,.062,14006413);k(.46,w+3,G+.55,4.4,1.1,.7,6968131),D(.46,w+3,G+1.15,4.58,.14,.79,12166795,!0),D(1.33,w+3.02,G+1.42,.48,.41,.36,4083022),D(1.33,w+3.22,G+1.58,.34,.19,.051,7968922);for(let Ue of[z+.46,N-.46])for(let xt of[w+1.75,w+4.2]){k(Ue,xt,G+.83,.61,1.66,1.79,7037271);for(let _t=0;_t<3;_t++)for(let lt of[-.55,-.17,.22,.57]){let J=[12490344,11953479,5997179][(Math.floor((lt+.6)*2.3)+_t)%3];D(Ue+(Ue<0?.37:-.37),xt+lt,G+.47+_t*.43,.15,.25,.22,J)}}for(let Ue of[-.26,.26])D(Ue*r,0,G+4.16-.23,.32,.085,1.91,16245436);D(0,g-.8,G+.009,1.71,.016,.87,5863786);let ie=G+4.16;k(0,0,ie-.053,r+.17,.2,o+.17,8613472,!1);for(let Ue of[z,N])D(Ue,0,ie+.28,.25,.59,o+.15,vi(d),!0);for(let Ue of[w,g])D(0,Ue,ie+.28,r+.2,.59,.25,vi(d),!0);return D(N-1.5,w+1.45,ie+.46,1.34,.64,1.21,8418922,!0),D(N-1.5,w+1.45,ie+.82,1.14,.08,1.05,10261379),D(z+1.52,w+1.55,ie+.39,.56,.57,.57,4873822,!0),{id:t,kind:c,label:l,entry:Me,outside:He,inside:ot,approach:Je,resident:null,clerk:Gt,doorIds:[ge.id],units:[]}}function H(B,q){let G=C(B,q,.228);return[G.x,G.z]}}function sp(n,e){let t=0;for(let i of n)t=t*31+i.charCodeAt(0)>>>0;return e[t%e.length]}function vi(n){let e=Math.min(255,(n>>16&255)+26),t=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return e*65536+t*256+i}var op=(n,e)=>[Math.floor((n-e*.5-1.1)/10),Math.floor((n+e*.5+1.1)/10)];function gc(n){let e=new Map;for(let t of n){let[i,s]=op(t.x,t.w),[r,o]=op(t.z,t.d);for(let a=i;a<=s;a++)for(let c=r;c<=o;c++){let l=a+","+c;e.has(l)||e.set(l,[]),e.get(l).push(t)}}return(t,i)=>e.get(Math.floor(t/10)+","+Math.floor(i/10))??[]}var ap=(n,e,t)=>Math.abs(n-t.x)<t.w*.5+.002&&Math.abs(e-t.z)<t.d*.5+.002,Iv=n=>n&&n.health!==0&&!n.seated;function lp(n,e,t,i,s){let r=gc(n),o=gc(e),a=gc(t),c=gc(i.map(b=>b.closedSolid)),l=new Map(i.map(b=>[b.id,b])),d=b=>{let E=l.get(b.doorId);return!E.breached&&E.openAmount<1.06},f=n.filter(b=>(b.y0??0)<.95&&b.h>.28&&!b.stair);function m(b,E,S=0){let g=s(b,E);for(let w of o(b,E))w.y>g&&w.y<=S+.305&&ap(b,E,w)&&(g=w.y);return g}function p(b,E,S=0){let g=z=>!z.stair&&(!z.walkSurface||z.h>S+.305)&&(z.y0??0)<S+1.72&&z.h>S+.13,w=r(b,E).filter(g);for(let z of c(b,E))g(z)&&d(z)&&w.push(z);return w}function h(b,E,S=0){let g=null;for(let w of a(b,E))w.floor<=S+.14&&w.ceiling>=S&&ap(b,E,w)&&(!g||w.floor>g.floor)&&(g=w);return g}function v(b,E,S,g=.3,w=!1){let z=N=>E>=(N.y0??0)-g&&E<=N.h+g&&Math.abs(b-N.x)<N.w*.5+g&&Math.abs(S-N.z)<N.d*.5+g;for(let N of r(b,S))if(!(N.off||N.prop||N.walkSurface||N.stair)&&z(N))return!0;if(w){for(let N of c(b,S))if(z(N))return!0}return!1}function x(){return i.map(b=>b.closedSolid).filter(d)}function _(b){let E=l.get(b);return!E||!E.private||E.breached?!1:(E.breached=!0,E.hold=1/0,!0)}function A(b,E){for(let S of i){let g=S.breached||S.normallyOpen;S.hold=Math.max(0,S.hold-b);for(let z of E){if(g||!Iv(z))continue;let N=z.floorY??z.y??0;if(Math.abs(N-S.base)>.64)continue;let D=z.x-S.x,k=z.z-S.z,F=D*D+k*k;if(F>3.68)continue;let P=z.buildingId===S.buildingId&&(!S.unitId||z.unitId===S.unitId),V=D*S.normalX+k*S.normalZ<-.22;(!S.private||P||V&&F<2.43||S.opened&&F<1.92)&&(g=!0,S.hold=1.1)}let w=g||S.hold>0?1.48:0;S.openAmount+=(w-S.openAmount)*(1-Math.exp(-b*13)),S.opened=S.openAmount>=1.06,S.door.rotation.y=S.angle+S.openAmount}}function C(){for(let b of i)b.breached=!1,b.hold=0,b.opened=b.normallyOpen,b.openAmount=b.normallyOpen?1.48:0,b.door.rotation.y=b.angle+b.openAmount}return{vehicleSolids:f,floorAt:m,walkSolids:p,interiorAt:h,closedDoorSolids:x,breachDoor:_,updateDoors:A,resetDoors:C,viewBlocked:v}}var fu=3751484,Pv={box:new ln,cylinder:new Un(1,1,1,10),pole:new Un(.8,1,1,8),foliage:new Zi(1,1)},zr={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function Or(n){let e=n.map(([t,i,s,r,o,a,c,l,d=0,f=0])=>{let m=Pv[t],p=m.index?m.toNonIndexed():m.clone(),h=new Et().compose(new X(i,s,r),new an().setFromEuler(new fi(d,f,0,"YXZ")),new X(o,a,c));p.applyMatrix4(h);let v=new Ke(l),x=new Float32Array(p.attributes.position.count*3);for(let _=0;_<x.length;_+=3)x[_]=v.r,x[_+1]=v.g,x[_+2]=v.b;p.setAttribute("color",new en(x,3));for(let _ of Object.keys(p.attributes))["position","normal","color"].includes(_)||p.deleteAttribute(_);return p});return cc(e)}var cp={lamp:()=>Or([["pole",0,2.25,0,.083,4.5,.083,fu],["box",.35,4.36,0,.79,.075,.075,fu],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>Or([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,fu])]),bin:()=>Or([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>Or([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>Or([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>Or([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,e)=>{let t=e*Math.PI*2/7;return["foliage",Math.sin(t)*.86,4.55,Math.cos(t)*.86,.42,.24,1.58,[3432266,4879699,7111766][e%3],0,t]})])};function hp(n,e,t){let i=[],s={},r=new $t({vertexColors:!0,roughness:.84}),o=new Et,a=new X,c=new an,l=new X,d=new an,f=new an,m=new X,p=new X(0,1,0),h=!1;function v(S,g,w,z=0,N=1,D){let k=t(g,w),F={x:g,z:w,w:D?.w??zr[S].radius*2,d:D?.d??zr[S].radius*2,y0:k,h:k+(D?.h??1),prop:S};e.push(F),i.push({kind:S,x:g,z:w,y:k,rotation:z,scale:N,solid:F,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function x(S){d.setFromAxisAngle(p,S.rotation+S.spin),m.set(S.axisX,0,S.axisZ),f.setFromAxisAngle(m,S.tilt),c.multiplyQuaternions(f,d);let g=zr[S.kind].radius;a.set(S.x,S.y+Math.sin(S.tilt)*g+S.lift,S.z),l.setScalar(S.scale),o.compose(a,c,l),s[S.kind].setMatrixAt(S.index,o),s[S.kind].instanceMatrix.needsUpdate=!0}function _(){for(let S of Object.keys(cp)){let g=i.filter(z=>z.kind===S);if(!g.length)continue;let w=new Nn(cp[S](),r,g.length);w.castShadow=!0,w.receiveShadow=!0,s[S]=w,g.forEach((z,N)=>{z.index=N,x(z)}),w.computeBoundingSphere(),n.add(w)}}function A(S,g,w){let z=zr[S.kind];S.broken=!0,S.solid.off=!0,S.clock=0;let N=.55+Math.random()*.25;S.vx=g.vx*N,S.vz=g.vz*N;let D=Math.max(.01,Math.hypot(g.vx,g.vz));S.axisX=g.vz/D,S.axisZ=-g.vx/D,S.spinRate=(Math.random()-.5)*(S.kind==="bin"?7:2),S.lift=0,S.liftSpeed=S.kind==="bin"||S.kind==="bollard"?Math.min(3.2,w*.22):0;let k=1-z.mass;return g.vx*=k,g.vz*=k,z.damage&&(g.integrity=Math.max(0,g.integrity-z.damage*Math.min(1.6,w/z.speed))),g.impact=Math.max(g.impact,z.mass>.2?4.5:0),h=!0,{kind:S.kind,heavy:z.mass>.2,x:S.x,z:S.z}}function C(S,g,w){let z=[];for(let D of g){let k=Math.hypot(D.vx,D.vz);if(k<.6)continue;let F=k*S*2+.2;for(let P of i){if(P.broken||Math.abs(P.x-D.x)>3.6||Math.abs(P.z-D.z)>3.6)continue;let V={x:D.x+D.vx*S,z:D.z+D.vz*S,angle:D.angle,kind:D.kind};ts(V,P.x,P.z,zr[P.kind].radius+F)&&k>=zr[P.kind].speed&&z.push(A(P,D,k))}}for(let D of i)if(D.broken)if(D.clock+=S,D.clock<2.5){let k=Math.exp(-S*(D.tilt>1.2?6:2.2)),F=D.x+D.vx*S,P=D.z+D.vz*S;D.x=F,D.z=P,D.vx*=k,D.vz*=k,D.spin+=(D.spinRate??0)*S*k,D.tilt=Math.min(Math.PI/2,D.tilt+S*(1.1+D.tilt*3.2)),D.liftSpeed&&(D.lift=Math.max(0,D.lift+D.liftSpeed*S),D.liftSpeed-=9.8*S,D.lift===0&&D.liftSpeed<0&&(D.liftSpeed=0)),x(D)}else D.clock>50&&Math.hypot(w.x-D.solid.x,w.z-D.solid.z)>38&&g.every(k=>Math.hypot(k.x-D.solid.x,k.z-D.solid.z)>3)&&b(D);let N=h;return h=!1,{events:z,shadow:N}}function b(S){Object.assign(S,{broken:!1,x:S.solid.x,z:S.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),S.solid.off=!1,x(S),h=!0}function E(){for(let S of i)S.broken&&b(S)}return{add:v,finalize:_,update:C,reset:E,items:i}}var Br=20;function up(n,e,t){let r=((n+e)%Br+Br)%Br-(t==="z"?0:10);return r>=0&&r<7?"green":r>=7&&r<9?"yellow":"red"}var Lv={red:[new Ke(1,.12,.08),new Ke(.2,.05,.05)],yellow:[new Ke(1,.72,.1),new Ke(.2,.16,.05)],green:[new Ke(.2,1,.45),new Ke(.05,.17,.08)]};function dp(n,e){let t=[];for(let h of jn)for(let v of jn)t.push({id:h+","+v,x:h,z:v,offset:((h*7+v*3)%Br+Br)%Br});let i=[[-6.1,-6.1,Math.PI,"z"],[6.1,6.1,0,"z"],[-6.1,6.1,-Math.PI/2,"x"],[6.1,-6.1,Math.PI/2,"x"]],s=t.length*i.length,r=new Nn(new Un(.07,.08,3.3,8),new $t({color:3093555,roughness:.6}),s),o=new Nn(new ln(.34,.95,.26),new $t({color:1909024,roughness:.7}),s),a=new Nn(new Un(.105,.105,.06,12),new Kt({color:16777215}),s*3),c=new Vt,l=[],d=0;for(let h of t)for(let[v,x,_,A]of i){let C=h.x+v,b=h.z+x;c.position.set(C,1.65+.16,b),c.rotation.set(0,_,0),c.scale.set(1,1,1),c.updateMatrix(),r.setMatrixAt(d,c.matrix),c.position.set(C,3.25+.16,b),c.updateMatrix(),o.setMatrixAt(d,c.matrix),["red","yellow","green"].forEach((E,S)=>{c.position.set(C+Math.sin(_)*.14,3.25+.16+.29-S*.29,b+Math.cos(_)*.14),c.rotation.set(Math.PI/2,_,0,"YXZ"),c.updateMatrix(),a.setMatrixAt(d*3+S,c.matrix),l.push({junction:h,axis:A,color:E,state:""})}),e.push({x:C,z:b,w:.2,d:.2,h:3.5,signal:!0}),d++}r.castShadow=o.castShadow=!0,n.add(r,o,a);let f=new Map(t.map(h=>[h.id,h])),m=0;function p(h){m+=h;let v=!1;l.forEach((x,_)=>{let C=up(m,x.junction.offset,x.axis)===x.color,b=C?"on":"off";x.state!==b&&(x.state=b,a.setColorAt(_,Lv[x.color][C?0:1]),v=!0)}),v&&a.instanceColor&&(a.instanceColor.needsUpdate=!0)}return p(0),{update:p,state(h,v){let x=f.get(h);return x?up(m,x.offset,v):"green"},reset(){m=0,p(0)}}}var xc=473021;function Sn(){return xc=Math.imul(1664525,xc)+1013904223>>>0,xc/4294967296}var Zs=n=>n[Math.floor(Sn()*n.length)];function fp(n){xc=473021,n.background=new Ke(15316107),n.fog=new go(15316107,.0068),n.add(new Io(15266035,7890017,2.3));let e=new Do(16763540,3);e.position.set(-45,48,-32),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),e.shadow.bias=-35e-5,e.shadow.normalBias=.12,e.shadow.mapSize.set(2048,2048),e.shadow.autoUpdate=!1,n.add(e);let t=new Rt(new fs(330,32,16),new kn({side:bn,depthWrite:!1,uniforms:{sun:{value:new X(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));t.frustumCulled=!1,t.renderOrder=-100,n.add(t);let i=[],s=[],r=[],o=[],a={},c={box:new ln,foliage:new Zi(1,1),pole:new Un(.8,1,1,8),hill:new fs(1,14,9),prism:Dv()},l=new Vt;function d(P,V,H,B,q,G,K,ae,j,xe=0,Z=0){let de=V===0&&B===0?"center":Math.round(V/31)+","+Math.round(B/31),Ae=P+":"+!!j+":"+de,ge=a[Ae]??={shape:P,shadow:!!j,items:[]};l.position.set(V,H,B),l.scale.set(q,G,K),l.rotation.set(Z,xe,0,"YXZ"),l.updateMatrix(),ge.items.push({matrix:l.matrix.clone(),color:new Ke(ae)})}function f(P,V,H,B,q,G,K,ae=!1,j=0,xe=0,Z="box"){d(Z,P,V,H,B,q,G,K,ae,j,xe)}function m(P,V,H,B,q,G,K){f(P,V,H,B,q,G,K,!0),i.push({x:P,z:H,w:B,d:G,y0:V-q/2,h:V+q/2})}let p=hp(n,i,On);function h(P,V,H=!1){p.add(H?"palm":"tree",P,V,Sn()*6.28,.82+Sn()*.36,{w:.45,d:.45,h:3.6})}function v(P,V,H,B,q,G=1784375,K=4.2,ae=.65){let j=document.createElement("canvas");j.width=512,j.height=115;let xe=j.getContext("2d");xe.fillStyle="#e9d4a0",xe.fillRect(0,0,512,115),xe.strokeStyle="#645a47",xe.lineWidth=6,xe.strokeRect(7,7,498,101),xe.font="900 50px system-ui",xe.textAlign="center",xe.textBaseline="middle",xe.fillStyle="#"+G.toString(16).padStart(6,"0"),xe.fillText(P,256,57,470);let Z=new Fs(j);Z.colorSpace=dn;let de=new Rt(new Bn(K,ae),new Kt({map:Z}));de.position.set(V,H,B),de.rotation.y=q,n.add(de)}let x=new Nt;n.add(x);let _=[],A=new Bn,C=new $t({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:En});function b(P,V,H,B,q,G){let K=new Rt(A,C);K.position.set(P,V,H),K.scale.set(B,q,1),K.rotation.y=G,n.add(K)}let E={box:f,solid:i,door:S,sign:v,glazing:b,support:s,volume:r};function S(P,V,H,B,q,G=.228,K={}){let ae=new Nt,j=K.id??"door-"+_.length;ae.position.set(P,G,V);let xe=Mt(ae,"box",q,B*.5,1.088,0,B-.045,2.147,.074);xe.castShadow=!1;let Z=Mt(ae,"box",10191979,B*.5,1.47,-.04,B*.64,.56,.013);Z.castShadow=!1;for(let ot of[-1,1])Mt(ae,"box",10191195,B-.14,.99,ot*.046,.11,.13,.035).castShadow=!1,Mt(ae,"box",12691318,B-.174,1.011,ot*.073,.132,.042,.037).castShadow=!1;let de=P+Math.cos(H)*B*.5,Ae=V-Math.sin(H)*B*.5,ge=K.normallyOpen?1.48:0;ae.rotation.y=H+ge,n.add(ae);let Me={x:de,z:Ae,w:Math.abs(Math.cos(H))*B+.083,d:Math.abs(Math.sin(H))*B+.083,y0:G,h:G+2.155,doorId:j,buildingId:K.buildingId??null},He={door:ae,id:j,x:de,z:Ae,base:G,angle:H,openAmount:ge,opened:!!K.normallyOpen,breached:!1,private:!!K.private,normallyOpen:!!K.normallyOpen,hold:0,buildingId:K.buildingId??null,unitId:K.unitId??null,normalX:Math.sin(H),normalZ:Math.cos(H),handle:{x:P+Math.cos(H)*(B-.17),y:G+1.008,z:V-Math.sin(H)*(B-.17)},closedSolid:Me};_.push(He);for(let ot of[0,B])f(P+Math.cos(H)*ot,G+1.09,V-Math.sin(H)*ot,.105,2.18,.178,6640456,!1,H);return f(de,G+2.185,Ae,B+.12,.11,.178,6640456,!1,H),He}function g(){let{x:P,z:V}=Rn,H=13216391;m(P,2.08,V,12,3.84,10,H),f(P,.39,V+5.03,12.04,.46,.08,8484463),f(P,4,V,12.06,1.7,9.98,H,!0,0,0,"prism"),f(P,4.06,V,12,1.84,10.7,9393216,!0,0,0,"prism"),f(P+3.6,4.9,V-2.2,.55,1.9,.55,9402986,!0),f(P,1.38,V+5.05,1.42,2.42,.1,5195585),f(P,1.31,V+5.09,1.1,2.2,.06,6903110),f(P,.18,V+5.35,1.7,.14,.62,8484463),f(P,2.85,V+5.45,1.9,.12,.86,14270112,!0);for(let B of[-3.6,3.6]){f(P+B,2.03,V+5.04,2.08,1.43,.1,5195585),f(P+B,2.03,V+5.07,1.86,1.21,.06,5073522),f(P+B,1.22,V+5.16,2.2,.09,.2,14270112);for(let q of[-1,1])f(P+B+q*1.17,2.03,V+5.07,.34,1.27,.05,6257514)}v("CASA 38",P+1.6,1.62,V+5.13,0,4868146,.92,.22),m(P+9.6,1.6,V-.4,6,3.2,8,12558975),f(P+9.6,3.27,V-.4,6.3,.16,8.3,8280646,!0),f(P+9.6,1.32,V+3.62,4.4,2.5,.08,9278614);for(let B=.3;B<2.6;B+=.28)f(P+9.6,B,V+3.67,4.3,.025,.02,7304824);f(P+9.6,.173,V+8.6,4.8,.03,9.8,10262154),v("GARAGEM",P+9.6,2.85,V+3.68,0,3881523,1.4,.26)}function w(){let P=Qi.z;f(2,.169,P,19,.045,22,6908773),m(-7.18,2.03,P,7.35,3.68,19.56,8886169),f(-7.18,3.98,P,7.62,.23,19.8,5406866),f(-3.46,1.35,P,.12,2.32,1.7,4413028),f(-2.5,3.33,P,7.1,.25,19.5,5401719,!0),m(-1.5,1.42,P-9.72,5.4,2.54,.35,8229008),m(-1.5,1.42,P+9.72,5.4,2.54,.35,8229008);for(let H of[-9.5,9.5])m(1.04,1.65,P+H,.28,3,.31,8689042);f(1.1,2.88,P,.25,.42,19.54,5994626),v("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,P,Math.PI/2,2704468,7.2,.63);for(let H of[-8.2,-3.95,.3,4.55,8.8])f(8.15,.208,P+H,5.3,.016,.1,14537646);for(let H of[-6.1,-1.85,2.4])f(5.5,.208,P+H,.1,.016,3.25,14537646);for(let H of[-6.8,-3.4,3.4,6.8])f(-3.46,1.87,P+H,.08,1.4,2.25,5195585),f(-3.43,1.87,P+H,.05,1.18,2.05,3626589);f(-3.52,.21,P+3.1,.64,.08,2.45,6446161)}f(0,-.3,0,720,.1,720,8880242),f(0,-.18,0,132,.34,132,4605770);for(let P=0;P<1250;P++){let V=Sn()*130-65,H=Sn()*130-65;f(V,.001,H,.04+Sn()*.3,.007,.04+Sn()*.3,Zs([5460823,4934733,4473414,5855058]),!1,Sn()*6)}for(let P of jn)for(let V of gi){for(let H=-10;H<=10;H+=4)f(P,.014,V+H,.12,.015,1.82,14132838);for(let H of[-12.6,12.6])for(let B=-4.5;B<=4.5;B+=.9)f(P+B,.015,V+H,.45,.016,1.44,13156273)}for(let P of jn)for(let V of gi){for(let H=-10;H<=10;H+=4)f(V+H,.014,P,1.82,.015,.12,14132838);for(let H of[-12.6,12.6])for(let B=-4.5;B<=4.5;B+=.9)f(V+H,.015,P+B,1.44,.016,.45,13156273)}for(let P of gi)for(let V of gi){f(P,.067,V,27.1,.16,27.1,13022103),f(P,.125,V,26.7,.07,26.7,10721158);for(let H of[-12.25,12.25])for(let B=-12;B<=12;B+=2.1)f(P+H,.164,V+B,2.32,.008,.023,12956566),f(P+B,.164,V+H,.023,.008,2.32,12956566);if(P===Qi.x-2&&V===Qi.z)w();else if(P===Rn.x&&V===Rn.z)g();else if(P===0&&V===-38){for(let H of[-6,6]){f(P+H,.185,V,8.2,.08,19,7438938);for(let B of[-7,0,7])h(P+H,V+B,!0)}for(let H=-8;H<=8;H+=4)f(P,.177,V+H,3.1,.033,3.2,13218964);m(P,1.04,V-9.89,4.42,1.77,.18,9271651),v("PRA\xC7A DA BRASA",P,1.6,V-10,Math.PI)}else for(let H of[-1,1]){let B=P===0&&V===0&&H===1,q=o.filter(Me=>Me.id.startsWith("lot-")||Me.id==="armory").length,G=q+10,K=B?"armory":q%5===1||q%5===3?"shop":q%5===0?"house":"apartments",ae=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],j=B?"armory":G===13?"barber":G===18?"clothes":G===21?"black":K==="shop"?"store":null,Z={barber:"BARBEARIA DO Z\xC9",clothes:"MODA BRASA",black:"PENHORES 24H"}[j]??(K==="shop"?ae[Math.floor(q/2)%ae.length]:K==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(q/2)%6]:"CASA "+G),de=Zs([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Ae=rp(E,{id:B?"armory":"lot-"+G,kind:K,label:B?"LOJA DE ARMAS":Z,x:P+H*(B?5.7:6.25),z:V+(B?-5.45:0),angle:H*Math.PI/2,w:B?11.35:(K==="house"?13.7:15.3)+Sn()*.57,d:B?9.36:9.38+Sn()*.25,color:de,upperColor:Zs([12163192,10394757,12426376,11971991]),awning:Zs([7821376,6190959,10446933]),fabrics:Zs([7373431,8152675,9534300]),stories:q%3===0?3:2,doorAt:B?0:void 0,open:K==="house"&&q%3!==0});Ae.service=j,o.push(Ae);let ge=B?4.32:V+9.83;f(P+H*6.8,.168,ge,8.3,.017,2.51,10919820);for(let Me=-3.5;Me<=3.5;Me+=.7)f(P+H*6.8+Me,.18,ge,.022,.012,2.5,12169372)}for(let H of[-1,1]){let B=P+H*12.85,q=V-H*9.85;p.add("lamp",B,q,H>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),p.add("bench",P+H*9,V-H*12.5,H>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let G=P+H*10.1;p.add("bin",G,V-H*12.55,0,1,{w:.5,d:.5,h:.78}),p.add("bollard",G+.72,V-H*12.58,0,1,{w:.14,d:.14,h:.46}),P===Rn.x&&V===Rn.z&&H===1||h(P+H*9.4,V+H*12.6)}}for(let P of[-1,1])m(63.6,1.85,P*1.7,.15,3.7,.15,7362375);f(63.6,3.48,0,.16,.64,3.65,7362375),v("VILA DAS LAJES",63.51,3.48,0,-Math.PI/2,3232851,3.55,.56),f(73,-.055,0,22,.1,si.halfDepth*2,10063229);for(let P of[63.45,71,78])f(P,-.003,0,2.4,.012,94,10393225);for(let P of[-30,-20,-10,0,10,20,30,40])f(73,-.001,P,21.8,.014,2.5,11115405);for(let[P,V]of[67.5,74.5,81].entries())for(let[H,B]of[-44,-35,-25,-15,-5,5,15,25,35,44].entries()){if(P===1&&B===44)continue;let q=2.9+(P+H)%3*.85,G=[11890768,10652789,11363656,10063490][(H+P)%4];if(m(V,q/2,B,4.1,q,5.2,G),f(V,q+.08,B,4.3,.16,5.4,8683127),f(V-2.06,1.07,B-.8,.05,2.14,.88,5786688),f(V-2.07,1.64,B+1.15,.055,.88,1.2,5464677),(H+P)%2===0){f(V-2.32,2.28,B-.8,.56,.09,1.36,8162439);for(let K of[-.42,0,.42])f(V-2.11,1.64,B+1.15+K,.04,.88,.04,2702400)}H%2===0&&f(V,q+.55,B+1,1.3,.92,1.3,5334392)}m(74,1.36,43,4.05,2.72,4.8,11904388),f(74,2.78,43,4.25,.16,5.02,7828075),f(71.96,1,43,.04,2,.96,5006171),v("CASA",71.93,2.27,43,-Math.PI/2,3232851,.95,.28);for(let P=0;P<52;P++){let V=P/52*Math.PI*2,H=118+Sn()*58,B=Zs([9670532,10525321,10001560,9212560]),q=Math.sin(V)*H,G=Math.cos(V)*H;d("hill",q,-1,G,12+Sn()*33,3+Sn()*22,10+Sn()*20,B,!1,V);let K=4+Sn()*16;f(q,K*.5-1,G,3+Sn()*9,K,4+Sn()*8,Zs([10194306,8949389,10128258]),!1)}p.finalize();let z=dp(n,i),N=new $t({roughness:.88});for(let{shape:P,shadow:V,items:H}of Object.values(a)){let B=new Nn(c[P],N,H.length);H.forEach(({matrix:q,color:G},K)=>{B.setMatrixAt(K,q),B.setColorAt(K,G)}),B.castShadow=V,B.receiveShadow=!0,n.add(B)}let D=new Nt,k=new Rt(new Ao(1.6,1.85,40),new Kt({color:15794054,side:En,transparent:!0,opacity:.85,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.position.y=.26,D.add(k);let F=new Rt(new Ji(.43),new Kt({color:15794054}));return F.position.y=2.8,D.add(F),n.add(D),{solid:i,marker:D,beacon:F,sun:e,sky:t,houseRoof:x,bed:Yf,doors:_,buildings:o,props:p,signals:z,...lp(i,s,r,_,On)}}function Dv(){let n=[-.5,0,-.5],e=[-.5,0,.5],t=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,e,t,i,r,s,n,r,i,n,t,r,e,r,t,e,s,r,n,s,e,n,i,s],a=new Jt;return a.setAttribute("position",new Ct(o.flat(),3)),a.computeVertexNormals(),a}var Nv=n=>n===0?"gr\xE1tis":"R$ "+n.toLocaleString("pt-BR"),Uv=n=>"#"+n.toString(16).padStart(6,"0");function pp(n,{balance:e,onClose:t}){let i=n.querySelector("#shop-title"),s=n.querySelector("#shop-detail"),r=n.querySelector("#shop-balance"),o=n.querySelector("#shop-list"),a=n.querySelector("#shop-status"),c=null,l=null;function d(m){let p=m?document.activeElement?.getAttribute("data-key"):null,h=l();c=h,i.textContent=h.title,s.textContent=h.note??"",r.textContent=e(),o.replaceChildren(),h.sections.forEach((_,A)=>{let C=document.createElement("h3");C.textContent=_.title,o.append(C),_.items.forEach((b,E)=>{let S=document.createElement("div");S.className="store-row"+(b.active?" active":"");let g=document.createElement("button");g.type="button",g.className="store-item",g.dataset.key=A+":"+E,g.disabled=!!b.disabled,g.innerHTML="";let w=document.createElement("span");w.textContent=b.label+(b.active?" \xB7 em uso":"");let z=document.createElement("b");if(z.textContent=b.price==null||b.disabled&&h.title==="Invent\xE1rio"?"":Nv(b.price),g.append(w,z),b.detail){let N=document.createElement("small");N.textContent=b.detail,g.append(N)}if(g.addEventListener("click",()=>f(b,void 0)),S.append(g),b.colors){let N=document.createElement("div");N.className="swatches",b.colors.forEach((D,k)=>{let F=document.createElement("button");F.type="button",F.className="swatch",F.style.background=Uv(D),F.dataset.key=A+":"+E+":"+k,F.setAttribute("aria-label",b.label+", cor "+(k+1)),F.disabled=!!b.disabled,F.addEventListener("click",()=>f(b,D)),N.append(F)}),S.append(N)}o.append(S)})}),((p?o.querySelector('[data-key="'+p+'"]'):null)??o.querySelector("button:not(:disabled)"))?.focus({preventScroll:!1})}function f(m,p){let h=m.buy(p);a.textContent=h??"Pronto!",a.classList.toggle("error",!!h),d(!0)}return{show(m){l=m,a.textContent="",d(!1),n.open||n.showModal()},close(){n.open&&n.close(),c=null,t()},move(m){let p=[...n.querySelectorAll("button:not(:disabled)")];if(!p.length)return;let h=p.indexOf(document.activeElement),v=p[(h+m+p.length)%p.length];v.focus(),v.scrollIntoView({block:"nearest"})},activate(){let m=document.activeElement;m&&n.contains(m)&&m.click()},refresh(){c&&d(!0)}}}var na={sedan:{name:"Brasa",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[11422e3,4362871,13084242,5795484,9063749,14209732,3093558]},hatch:{name:"Pulga",category:"dia a dia",length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[.38,.18],[-.38,.18],[.38,-.86],[-.38,-.86]],doors:4,handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[14783826,6989496,14209732,11876922,9416794]},wagon:{name:"Perua",category:"dia a dia",length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3,cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[.42,.1],[-.42,.1],[.42,-1],[-.42,-1]],doors:4,handling:{top:26,accel:14,grip:8,mass:1.18},palette:[9799551,5143689,8219215,13023648],extras:["roofRack"]},taxi:{name:"T\xE1xi",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[15254855],extras:["taxi"]},pickup:{name:"Picape",category:"utilit\xE1rio",length:5.3,width:2,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[.44,-.02],[-.44,-.02]],doors:2,handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[7043674,9056042,14012354,3100527,3815994],extras:["bed"]},van:{name:"Furg\xE3o",category:"utilit\xE1rio",length:5.15,width:2,sill:.55,belt:1.06,roof:2,wheel:.41,wheelbase:3.15,cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[.45,.85],[-.45,.85]],doors:2,handling:{top:22,accel:11,grip:7,mass:1.6},palette:[15131350,10467269,13218682,7110499],extras:["box"]},suv:{name:"Jip\xE3o",category:"luxo / utilit\xE1rio",length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[.45,.05],[-.45,.05],[.45,-1],[-.45,-1]],doors:4,handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[2042416,14276303,6044462,3758922],extras:["roofRack","chrome"]},sport:{name:"Fa\xEDsca",category:"esportivo",length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[.4,-.28],[-.4,-.28]],doors:2,handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[14236459,15909424,3108822,16052714,2500907],extras:["spoiler"]},muscle:{name:"Trov\xE3o",category:"esportivo",length:4.95,width:2,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,cabin:{base:[-1.3,.5],top:[-1,-.02]},seats:[[.42,-.45],[-.42,-.45]],doors:2,handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[1908514,8199967,13855274,2972991],extras:["scoop","stripes"]},luxury:{name:"Imperador",category:"luxo",length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[.44,.12],[-.44,.12],[.44,-1.08],[-.44,-1.08]],doors:4,handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[1316376,15065818,3882821,4858664],extras:["chrome"]},convertible:{name:"Brisa",category:"luxo / esportivo",length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[.4,-.12],[-.4,-.12],[.4,-1],[-.4,-1]],doors:2,open:!0,handling:{top:34,accel:19,grip:9,mass:1.05},palette:[9425384,15328208,11872828,1851246],extras:["chrome"]}},mp={street:{name:"Rua",handling:{top:31,accel:19.7,grip:13.5,mass:.39}},sport:{name:"Raio",handling:{top:40,accel:24,grip:14.5,mass:.36}},chopper:{name:"Estradeira",handling:{top:29,accel:15,grip:12,mass:.45}},scooter:{name:"Mobilete",handling:{top:19,accel:10,grip:13,mass:.28}}};for(let[n,e]of Object.entries(na))tp("car:"+n,{width:e.width/2+.02,length:e.length/2+.01,radius:e.width/2-0,offsets:[-(e.length/2-e.width/2),0,e.length/2-e.width/2],mass:e.handling.mass});var Fv=new $t({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:En,transparent:!0,opacity:.5,depthWrite:!1});function ia(n,e="sedan",t,i=!1){let s=na[e]??na.sedan,r=t??s.palette[0],{length:o,width:a,sill:c,belt:l,roof:d,wheel:f,wheelbase:m}=s,p=o/2,h=s.extras??[],[v,x]=s.cabin.base,[_,A]=s.cabin.top,C=new Nt;fc(C,a/2+.17,p+.07);let b=new Nt;C.add(b);let E=(j,xe,Z,de,Ae,ge,Me,He,ot=!1)=>Mt(b,j,xe,Z,de,Ae,ge,Me,He,ot),S=h.includes("chrome");E("box",2435629,0,(f*.32+c+.06)/2,0,a-.44,c+.06-f*.32,o-.9);for(let j of[-1,1])E("box",2830387,j*(a/2-.07),c-.06,0,.12,.22,Math.max(.4,m-2*f-.12));E("box",3749689,0,c,0,a-.44,.075,o-.35);for(let j of[-1,1]){for(let[xe,Z]of[[-p,-m/2-f],[-m/2+f,m/2-f],[m/2+f,p]])Z>xe&&E("box",r,j*(a/2-.055),(c+l)/2,(xe+Z)/2,.11,l-c,Z-xe,!0);for(let xe of[-m/2,m/2]){let Z=Math.min(l-.05,2*f+.03);E("box",r,j*(a/2-.055),(Z+l)/2,xe,.11,l-Z,2*f,!0)}}for(let j of[-1,1])E("box",r,0,(c+l)/2,j*(p-.09),a-.04,l-c,.18,!0);let g=p-x-.03,w=E("box",r,0,l+.005,(x+p)/2,a-.04,.15,g,!0);!h.includes("bed")&&!h.includes("box")&&p+v>.25&&E("box",r,0,l-.005,(v-p)/2,a-.05,.14,p+v-.02,!0);let z=a/2-.07,N=a/2-.27,D=Fv.clone(),k;if(s.open){let j=new Jt;j.setAttribute("position",new Ct([-z,l,x,z,l,x,N,d,A,-N,d,A],3)),j.setIndex([0,1,2,0,2,3]),j.computeVertexNormals(),k=new Rt(j,D),E("box",2895665,0,d,A,a-.5,.06,.07)}else{let j=new Jt;j.setAttribute("position",new Ct([-z,l-.015,v,z,l-.015,v,z,l-.015,x,-z,l-.015,x,-N,d,_,N,d,_,N,d,A,-N,d,A],3)),j.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),j.computeVertexNormals(),k=new Rt(j,D),E("box",r,0,d+.035,(_+A)/2,N*2+.02,.07,A-_+.08,!0);let xe=(Z,de,Ae)=>{let ge=d-l,Me=de-Z;for(let He of[-1,1])E("box",r,He*(z+N)/2,(l+d)/2,(Z+de)/2,.08,Math.hypot(ge,Me),Ae,!0).rotation.x=Math.atan2(Me,ge)};if(xe(x,A,.08),xe(v,_,.12),s.doors===4){let Z=(s.seats[0][1]+s.seats[2][1])/2+.12;for(let de of[-1,1])E("box",r,de*(z+N)/2,(l+d)/2,Z,.08,d-l,.1,!0)}}k.renderOrder=2,b.add(k);let F=Math.min(l-.26,d-.99),P=Math.min(.62,d-l-.02+.3);for(let[j,xe]of s.seats)E("cloth",3486512,j,F+.06+P,xe-.235,.31,.16,.14),E("cloth",3815219,j,F-.1,xe+.12,.51,.14,.54),E("box",3815219,j,F+P/2,xe-.235,.5,P,.13);E("box",2828840,0,l+.045,x-.24,a-.26,.14,.34);let V=E("cylinder",1907997,s.seats[0][0],l+.07,s.seats[0][1]+.42,.17,.03,.17);V.rotation.x=Math.PI/2-.45,E("cloth",2106922,0,F+.02,(v+x)*.5,.19,.23,Math.min(1.25,x-v));for(let j of[-1,1])E("box",6643286,j*(a/2-.15),(c+l)/2,(v+x)/2,.08,.085,x-v),E("box",11951652,j*(a*.5-.13),l-.205,p+.006,.12,.064,.032,!0),E("box",12959664,j*(a*.5-.26),c-.07,-p-.036,.12,.076,.09,!0);E("box",3355961,0,l-.24,p+.004,a*.44,.14,.05),E("box",13156268,0,c+.035,p+.006,a*.98,.1,.045,!0),E("box",13156268,0,c+.025,-p-.006,a*.98,.1,.05,!0),E("box",16707771,0,(c+l)/2,-p-.008,.4,.14,.03);for(let j of[-1,1]){E("box",16769956,j*(a/2-.29),l-.165,p+.006,.43,.17,.055,!0),E("box",11021858,j*(a/2-.3),l-.165,-p-.006,.48,.17,.055,!0),s.open||E("box",2898236,j*(a/2+.03),l+.07,x-.06,.1,.09,.16);let xe=s.doors===4?[x,(s.seats[0][1]+s.seats[2][1])/2+.12,v+.05]:[x,s.seats[0][1]-.62];for(let Z of xe)E("box",1843234,j*(a/2+.005),(c+l)/2,Z,.012,l-c-.02,.025);for(let Z=0;Z<xe.length-1;Z++)E("box",13089700,j*(a/2+.01),l-.05,xe[Z+1]+.25,.035,.04,.22,!0);S&&E("box",14277074,j*(a/2+.008),l-.03,0,.02,.03,o-.5,!0)}if(h.includes("taxi")&&(E("box",16249304,0,d+.16,(_+A)/2,.68,.2,.26),E("box",2779715,0,(c+l)/2+.06,0,a+.012,.08,o*.6,!0)),h.includes("spoiler")){for(let j of[-1,1])E("box",1776670,j*.6,l+.14,-p+.28,.06,.22,.08);E("box",r,0,l+.27,-p+.25,a-.2,.05,.32,!0)}if(h.includes("scoop")&&E("box",2105892,0,l+.12,(x+p)/2+.1,.5,.12,.62),h.includes("stripes"))for(let j of[-1,1])E("box",15855590,j*.2,l+.083,(x+p)/2,.16,.012,g),E("box",15855590,j*.2,d+.072,(_+A)/2,.16,.012,A-_);if(h.includes("roofRack"))for(let j of[-1,1])E("box",2500907,j*(N-.08),d+.1,(_+A)/2,.05,.06,A-_+.2);if(h.includes("bed")){for(let j of[-1,1])E("box",r,j*(a/2-.04),l+.22,(v-p)/2,.08,.44,p+v,!0);E("box",r,0,l+.22,-p+.04,a,.44,.08,!0),E("box",r,0,l+.22,v-.04,a,.44,.08,!0),E("box",2960169,0,l+.01,(v-p)/2,a-.16,.02,p+v-.12)}if(h.includes("box")){E("box",r,0,(l+2.15)/2,(v+.25-p)/2,a,2.15-l,p+v+.25,!0),E("box",2763306,0,2.15-.05,(v+.25-p)/2,a+.02,.04,p+v+.27);for(let j of[-1,1])E("box",1843234,j*.005,(l+2.1)/2,-p-.004,.015,2-l,.02)}let H=[];for(let j of[-1,1])for(let xe of[-m/2,m/2]){let Z=new Nt;Z.position.set(j*(a/2-.17),f,xe),C.add(Z),Mt(Z,"cylinder",2434600,0,0,0,f,.24,f).rotation.z=Math.PI/2,Mt(Z,"cylinder",S?14013903:11052964,j*.115,0,0,f*.53,.02,f*.53,!0).rotation.z=Math.PI/2,H.push(Z)}let B=new Nt,q=s.doors===4?(s.seats[0][1]+s.seats[2][1])/2+.12:s.seats[0][1]-.62;B.position.set(a/2+.004,0,x),Mt(B,"box",r,0,(c+l)/2+.04,-(x-q)/2,.036,l-c-.1,x-q,!0),xi(B,es(B),dc),b.add(B);let G=[1,-1].map(j=>{let xe=new Nt;return xe.position.set(0,c-.09,j*(p-.2)),Mt(xe,"box",S?13619144:2830387,0,0,0,a-.08,.3,.42,S),xi(xe,es(xe),S?dc:void 0),b.add(xe),{mesh:xe,end:j,state:0,home:xe.position.clone(),damage:0,velocity:new X,spin:0}}),K=[];i&&(K.push(E("box",15550262,-.33,d+.13,(_+A)/2,.55,.14,.25)),K.push(E("box",5487086,.33,d+.13,(_+A)/2,.55,.14,.25)));let ae=es(b).filter(j=>j!==k&&j!==w&&!K.includes(j));xi(b,ae.filter(j=>j.material.metalness===0)),xi(b,ae.filter(j=>j.material.metalness>0),dc);for(let j of H)xi(j,es(j));return b.traverse(j=>{j instanceof Rt&&(j.castShadow=!1)}),n.add(C),yp({root:C,body:b,cabin:k,cracks:[],wheels:H,lamps:K,hood:w,bumpers:G,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"car",model:e,shape:"car:"+e,spec:s,color:r,handling:s.handling,rider:null,door:B,doorTime:0,wheelSpin:0,handlebar:null,wheelRadius:f,wheelbase:m,halfWidth:a/2,halfLength:p,seatHip:F,flat:[!1,!1,!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}function yp(n){let e=n;return e.repair=()=>zv(e),e}var gp=new $t({color:2038810,roughness:1,metalness:.05});function vp(n){n.originals??=new Map,n.root.traverse(e=>{!(e instanceof Rt)||e===n.cabin||e.material===gp||e.parent===n.root&&e.geometry.type==="CircleGeometry"||(n.originals.set(e,e.material),e.material=gp)}),n.cabin&&(n.cabin.visible=!1);for(let e of n.cracks)e.visible=!1}function zv(n){n.flat?.fill(!1);for(let[e,t]of n.originals??[])e.material=t;n.originals?.clear(),n.cabin&&(n.cabin.visible=!0);for(let e of n.bumpers??[])n.body.add(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.state=0,e.damage=0;Object.assign(n,{damageFront:0,damageRear:0,burning:!1,wrecked:!1,fire:0,wreckClock:0})}function _c(n,e,t="street"){let i=mp[t]??mp.street,s=new Nt;fc(s,.42,1.07*1.07);let r=new Nt;s.add(r);let o=(p,h,v,x,_,A,C,b)=>Mt(r,p,h,v,x,_,A,C,b),a=t==="scooter"?.25:t==="chopper"?.36:.33,c=t==="chopper"?[-.86,.98]:t==="scooter"?[-.62,.66]:[-.73,.78];t==="scooter"?(o("box",e,0,.42,-.25,.38,.34,.8),o("box",2763821,0,.34,.2,.36,.08,.55),o("box",e,0,.72,.52,.34,.68,.16),o("box",2369834,0,.78,-.32,.34,.12,.55),o("box",13940106,0,.92,.66,.22,.14,.08)):t==="chopper"?(o("box",3882300,0,.46,-.1,.3,.34,.7),o("sphere",e,0,.86,.32,.22,.18,.5),o("box",2369834,0,.68,-.42,.38,.1,.62),o("box",e,0,.62,-.86,.3,.16,.5),o("box",14079696,.22,.34,-.42,.1,.1,.95),o("box",13940106,0,.9,1.02,.22,.2,.1)):(o("box",3882300,0,.48,-.04,.32,.38,.7),o("sphere",e,0,.89,.34,.24,.23,.46),o("box",2369834,0,.85,-.36,.36,.13,.59),o("box",e,0,.65,-.7,.32,.17,.58),o("box",13940106,0,.8,.88,.25,.21,.11),t==="sport"&&(o("box",e,0,.72,.62,.42,.5,.5),o("box",2902871,0,1.04,.72,.34,.18,.06),o("box",e,0,.8,-.72,.28,.12,.5))),o("box",10433836,0,.7,c[0]-.25,.2,.11,.11);for(let p of[-1,1]){let h=o("box",3817536,p*.27,1.28,.47,.035,.22,.035);h.rotation.z=-p*.4,o("cloth",4343880,p*.32,1.39,.47,.17,.078,.056),o("box",11630140,p*.19,.76,c[0]-.17,.11,.073,.08)}let l=new Nt;l.position.set(0,.76,.38),Mt(l,"box",3949122,0,.44,-.09,t==="chopper"?.84:.684,.057,.059),Mt(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,xi(l,es(l)),r.add(l),o("box",5461330,0,.39,-.22,.52,.07,.11),t!=="scooter"&&o("box",11578016,.232,.36,-.54,.12,.12,.72);let d=new Rt(new ln(.01,.01,.01));d.visible=!1,r.add(d);let f=[];for(let p of c){let h=new Nt;h.position.set(0,a,p),Mt(h,"cylinder",2434601,0,0,0,a,.12,a).rotation.z=Math.PI/2,Mt(h,"cylinder",8750213,0,0,0,a*.62,.14,a*.62).rotation.z=Math.PI/2,xi(h,es(h)),f.push(h),r.add(h);let v=p>0?t==="chopper"?-.62:-.21:.46;o("box",5988704,0,a+.22,p+(t==="chopper"&&p>0?-.18:0),.09,t==="chopper"&&p>0?.8:.49,.085).rotation.x=v}xi(r,es(r).filter(p=>p!==d));let m=new Nt;return n.add(s),yp({root:s,body:r,cabin:null,cracks:[],wheels:f,lamps:[],hood:d,bumpers:[],speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"bike",model:t,shape:"bike",spec:i,color:e,handling:i.handling,rider:null,door:m,doorTime:0,wheelSpin:0,handlebar:l,wheelRadius:a,wheelbase:c[1]-c[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}var Ov=new X,Bv=new an;function Mp(n,e,t){let i=e.spec.seats?.[t]??e.spec.seats?.[e.spec.seats.length-1];if(!i)return;let[s,r]=i,o=n.root.scale.y||1;e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(Ov.set(s,e.seatHip-.94*o,r))),n.root.quaternion.copy(e.body.getWorldQuaternion(Bv)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.rifle&&(n.rifle.visible=!1);let a=e.spec.roof-e.seatHip<1.05;n.body.position.set(0,0,0),n.body.rotation.set(0,0,0);for(let c=0;c<2;c++)n.legs[c].rotation.set(a?-1.52:-1.44,0,0),n.shins[c].rotation.set(a?1.04:1.26,0,0),t===0?(n.arms[c].rotation.set(-.62,0,(c?-1:1)*.18),n.forearms[c].rotation.set(-.85,0,0)):(n.arms[c].rotation.set(-.32,0,(c?-1:1)*.08),n.forearms[c].rotation.set(-1.05,0,0))}var xp=null,kv=new Bn(.28,.28),ea=new X,_p=new X,ta=new X;function Gv(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="rgba(235,242,240,.9)",e.lineWidth=1.6,e.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;e.moveTo(64,64);for(let r=1;r<=4;r++)e.lineTo(64+Math.cos(s+Math.sin(r*3.1+i)*.12)*r*14,64+Math.sin(s+Math.cos(r*2.3+i)*.12)*r*14)}for(let i of[9,20,33]){e.moveTo(64+i,64);for(let s=1;s<=24;s++)e.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}e.stroke(),e.fillStyle="rgba(250,250,245,.95)",e.beginPath(),e.arc(64,64,3.2,0,Math.PI*2),e.fill();let t=new Fs(n);return t.colorSpace=dn,new Kt({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:En})}function pu(n,e){if(!n.cabin||!e)return;xp??=Gv(),n.root.updateMatrixWorld(!0),ta.set(e[0],e[1],e[2]),n.body.worldToLocal(ta);let[t,i]=n.spec.cabin.top;_p.set(0,(n.spec.belt+n.spec.roof)/2,(t+i)/2),ea.subVectors(ta,_p),ea.y*=.35,ea.normalize();let s=new Rt(kv,xp);s.position.copy(ta).addScaledVector(ea,.015),s.lookAt(ta.clone().add(ea)),s.rotation.z=Math.random()*Math.PI*2,s.renderOrder=3,n.body.add(s),n.cracks.push(s),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function bp(n){let{belt:e,roof:t,width:i,cabin:s}=n.spec,r=Math.min(s.base[0],s.top[0]),o=Math.max(s.base[1],s.top[1]);return{z:(r+o)/2,halfZ:(o-r)/2,y:(e+t)/2+.02,halfY:(t-e)/2,halfX:i/2-.1}}function ai(n,e,t=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,c=0,l=0,d=n.wheels.map(b=>{let{x:E,z:S}=b.position,g=On(n.x+E*s+S*i,n.z-E*i+S*s);return S>0?o+=g:a+=g,E<0?c+=g:l+=g,g}),f=(o+a)/n.wheels.length;n.root.rotation.y=n.angle;let m=n.flat??[],p=r?0:((m[0]||m[2]?1:0)-(m[1]||m[3]?1:0))*.05;n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),n.wheelbase??2.64);let h=r?n.integrity<=0?1.25:-t*Math.min(.53,Math.abs(n.speed)*.039):t*Math.min(.09,Math.abs(n.speed)*.004),v=r?0:Math.atan2((l-c)*.5,(n.halfWidth??.97)*2)+p;n.body.rotation.z+=(h+v-n.body.rotation.z)*(e>0?Math.min(1,e*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-e),n.door.rotation.y=(r?1:-1)*Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let x=n.wheelRadius??.408,_=r?n.body.rotation.z:0;n.root.position.set(n.x,f+(r?Math.abs(Math.sin(_))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=t*.22),n.wheelSpin=(n.wheelSpin+n.speed*e/x)%(Math.PI*2),n.wheels.forEach((b,E)=>{let S=m[E];r||(b.position.y=d[E]-f+x-(S?x*.28:0)),b.scale.set(1,S?.72:1,S?1.12:1),b.rotation.set(n.wheelSpin,b.position.z>0?t*(r?.22:.23):0,0,"YXZ")});let A=100-n.integrity;n.hood.rotation.x=A*.0031+(n.damageFront>30?.18:0),n.hood.rotation.z=A*.0013;let C=n.hoodSize??(n.hoodSize=n.hood.scale.clone());n.hood.scale.set(C.x,C.y*(1+Math.min(.6,(n.damageFront??0)*.012)),C.z*(1-Math.min(.12,(n.damageFront??0)*.002)));for(let b of n.bumpers??[])b.state===1&&(b.mesh.rotation.x=b.end*.32,b.mesh.position.y=b.home.y-.12)}var Vv=`
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
  }`,Hv=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;function Sp(n,e,t){let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3),c=new Float32Array(e),l=new Float32Array(e),d=new Float32Array(e),f=new Float32Array(e),m=new Float32Array(e),p=new Float32Array(e),h=new Float32Array(e),v=new Jt;v.setAttribute("position",new en(i,3)),v.setAttribute("tint",new en(s,3)),v.setAttribute("size",new en(r,1)),v.setAttribute("alpha",new en(o,1));let x=new kn({vertexShader:Vv,fragmentShader:Hv,transparent:!0,depthWrite:!1,blending:t?No:_s,uniforms:{scale:{value:520}}}),_=new Mo(v,x);_.frustumCulled=!1,_.visible=!1,_.renderOrder=4,n.add(_);let A=0;function C(S,g,w,z,N,D,k,F,P,V,H,B=0,q=0){let G=A;A=(A+1)%e,i[G*3]=S,i[G*3+1]=g,i[G*3+2]=w,a[G*3]=z,a[G*3+1]=N,a[G*3+2]=D,s[G*3]=H.r,s[G*3+1]=H.g,s[G*3+2]=H.b,c[G]=k,l[G]=k,d[G]=F,f[G]=P,m[G]=V,p[G]=B,h[G]=q,r[G]=F,o[G]=V,_.visible=!0}function b(S){let g=!1;for(let w=0;w<e;w++){if(c[w]<=0){o[w]!==0&&(o[w]=0,r[w]=0,g=!0);continue}g=!0,c[w]-=S;let z=Math.exp(-h[w]*S);a[w*3]*=z,a[w*3+2]*=z,a[w*3+1]=a[w*3+1]*z+p[w]*S,i[w*3]+=a[w*3]*S,i[w*3+1]+=a[w*3+1]*S,i[w*3+2]+=a[w*3+2]*S,p[w]<0&&i[w*3+1]<.05&&(i[w*3+1]=.05,a[w*3+1]*=-.3);let N=1-Math.max(0,c[w])/l[w];r[w]=d[w]+(f[w]-d[w])*N,o[w]=m[w]*(1-N)*(N<.12?N/.12:1)}if(g)for(let w of["position","size","alpha","tint"])v.attributes[w].needsUpdate=!0;_.visible=g}function E(){c.fill(0),o.fill(0),r.fill(0),v.attributes.alpha.needsUpdate=!0,_.visible=!1}return{spawn:C,update:b,clear:E,material:x}}function wp(n){let e=Sp(n,700,!1),t=Sp(n,600,!0),i=new Ke,s=(d,f)=>d+Math.random()*(f-d),r=320,o=new Nn(new Bn(1,1),new Kt({color:1315860,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),r);o.frustumCulled=!1,o.renderOrder=1;let a=new Et().makeScale(0,0,0);for(let d=0;d<r;d++)o.setMatrixAt(d,a);n.add(o);let c=0,l=new Vt;return{update(d){e.update(d),t.update(d)},clear(){e.clear(),t.clear();for(let d=0;d<r;d++)o.setMatrixAt(d,a);o.instanceMatrix.needsUpdate=!0},setScale(d){e.material.uniforms.scale.value=d,t.material.uniforms.scale.value=d},engineSmoke(d,f,m,p){i.setRGB(p?.16:.5,p?.15:.48,p?.14:.45),e.spawn(d+s(-.2,.2),f,m+s(-.2,.2),s(-.3,.3),s(.9,1.5),s(-.3,.3),s(1.6,2.4),.5,p?2.4:1.8,p?.5:.32,i,0,.6)},tireSmoke(d,f,m){i.setRGB(.78,.76,.72),e.spawn(d,f,m,s(-.6,.6),s(.3,.8),s(-.6,.6),s(.8,1.3),.4,1.6,.3,i,0,1.4)},sparks(d,f,m,p=12,h=4){for(let v=0;v<p;v++)i.setRGB(1,s(.55,.85),s(.15,.35)),t.spawn(d,f,m,s(-h,h),s(.5,h*.9),s(-h,h),s(.18,.45),.09,.03,1,i,-9.8,.4)},flame(d,f,m,p=1){i.setRGB(1,s(.35,.6),.08),t.spawn(d+s(-.35,.35)*p,f,m+s(-.35,.35)*p,s(-.2,.2),s(1.4,2.4),s(-.2,.2),s(.4,.75),.75*p,.2,.85,i,0,.8),Math.random()<.45&&(i.setRGB(.13,.12,.11),e.spawn(d,f+.6,m,s(-.3,.3),s(1.2,2),s(-.3,.3),s(1.8,2.8),.7,2.8,.45,i,0,.5))},blood(d,f,m){i.setRGB(.48,.015,.025);for(let p=0;p<7;p++)e.spawn(d,f,m,s(-1.4,1.4),s(.6,2),s(-1.4,1.4),.34,.065,.025,.94,i,-9,.2)},explosion(d,f,m){i.setRGB(1,.9,.6),t.spawn(d,f+.6,m,0,0,0,.28,1.5,9,1,i);for(let p=0;p<46;p++){let h=Math.random()*Math.PI*2,v=s(.2,1),x=s(3,10);i.setRGB(1,s(.4,.75),s(.05,.2)),t.spawn(d,f+.5,m,Math.cos(h)*x*(1-v*.5),v*x,Math.sin(h)*x*(1-v*.5),s(.35,.8),s(.6,1.4),.2,.95,i,-2,1.5)}for(let p=0;p<30;p++){let h=Math.random()*Math.PI*2,v=s(1,4);i.setRGB(.1,.09,.085),e.spawn(d,f+.8,m,Math.cos(h)*v,s(1.5,4),Math.sin(h)*v,s(2.2,3.6),1.2,4.5,.7,i,0,.9)}this.sparks(d,f+.5,m,40,9)},skid(d,f,m,p,h=.012){let v=Math.hypot(m-d,p-f);v<.05||(l.position.set((d+m)/2,h+.013,(f+p)/2),l.rotation.set(-Math.PI/2,0,0),l.rotateZ(Math.atan2(m-d,p-f)),l.scale.set(.2,v+.04,1),l.updateMatrix(),o.setMatrixAt(c,l.matrix),c=(c+1)%r,o.instanceMatrix.needsUpdate=!0)}}}function yc(n,e,t,i){let s=Math.hypot(e,i),r=Math.sin(n.angle)*e+Math.cos(n.angle)*i,o=Math.cos(n.angle)*e-Math.sin(n.angle)*i;n.ragdoll={vx:e,vy:t,vz:i,y:n.ragdoll?.y??0,t:0,rest:0,rising:0,spinX:(r>=0?1:-1)*(2.5+s*.55),spinZ:-o*.35,tiltX:0,tiltZ:0},n.pushX=0,n.pushZ=0}function vc(n,e,t,i){let s=n.ragdoll;if(!s)return!1;s.t+=e;let r=n.model,o=s.y>.02||Math.abs(s.vy)>.4,a=n.x+s.vx*e,c=n.z+s.vz*e;if(i(a,n.z)?s.vx*=-.35:n.x=a,i(n.x,c)?s.vz*=-.35:n.z=c,s.vy-=9.8*e,s.y+=s.vy*e,s.y<=0){s.y=0,s.vy=Math.abs(s.vy)>2.2?-s.vy*.28:0;let f=Math.exp(-e*6);s.vx*=f,s.vz*=f,s.spinX*=Math.exp(-e*7),s.spinZ*=Math.exp(-e*7)}s.tiltX+=s.spinX*e,s.tiltZ+=s.spinZ*e;let l=!o&&Math.hypot(s.vx,s.vz)<.5;if(l){let f=Math.round(s.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;s.tiltX+=(f-s.tiltX)*Math.min(1,e*8),s.tiltZ+=(0-s.tiltZ)*Math.min(1,e*6),s.rest+=e}let d=Math.sin(s.tiltX)>=0?1:-1;if(n.health>0&&s.rest>1.1){s.rising+=e/.65;let f=Math.min(1,s.rising),m=Math.sign(Math.sin(s.tiltX))||1;if(s.tiltX=m*Math.PI/2*(1-f),s.tiltZ*=1-f,f>=1)return n.ragdoll=null,r.root.rotation.set(0,n.angle,0),!1}if(r.root.rotation.set(s.tiltX,n.angle,s.tiltZ),r.root.position.set(n.x,t+s.y+Math.max(0,-Math.cos(s.tiltX)*Math.cos(s.tiltZ))*1.88+Math.hypot(Math.sin(s.tiltX),Math.sin(s.tiltZ))*.31,n.z),o||!l){let f=s.t*13;r.body.position.set(0,0,0),r.body.rotation.set(Math.sin(f*.7)*.25,0,Math.cos(f*.6)*.2),r.arms[0].rotation.set(-1.4+Math.sin(f)*1.1,0,-.6-Math.cos(f*.8)*.5),r.arms[1].rotation.set(-1.2+Math.cos(f*1.1)*1.1,0,.6+Math.sin(f*.9)*.5),r.forearms[0].rotation.set(-.4-Math.sin(f*1.3)*.5,0,0),r.forearms[1].rotation.set(-.4-Math.cos(f*1.2)*.5,0,0),r.legs[0].rotation.set(Math.sin(f*.9)*.9,0,-.2),r.legs[1].rotation.set(-Math.sin(f*.8)*.9,0,.2),r.shins[0].rotation.set(.4+Math.abs(Math.sin(f))*.6,0,0),r.shins[1].rotation.set(.4+Math.abs(Math.cos(f))*.6,0,0),r.pistol.visible=!1,r.rifle&&(r.rifle.visible=!1)}else $o(r,2,d);return r.shadow.visible=!1,!0}var kr=2.05,Mc=7.15;function Wv(n){let e=[];return n.forEach((t,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(t[0]-s[0]),a=Math.sign(t[1]-s[1]),c=Math.sign(r[0]-t[0]),l=Math.sign(r[1]-t[1]),d={x:t[0]-a*kr-o*Mc,z:t[1]+o*kr-a*Mc},f={x:t[0]-l*kr+c*Mc,z:t[1]+c*kr+l*Mc},m=o===c&&a===l,p={x:t[0]-(m?a:a+l)*kr,z:t[1]+(m?o:o+c)*kr},h={x:t[0],z:t[1],id:t.join(",")};for(let v=0;v<=6;v++){let x=v/6,_=1-x;e.push({x:_*_*d.x+2*_*x*p.x+x*x*f.x,z:_*_*d.z+2*_*x*p.z+x*x*f.z,junction:h,curve:!m,angle:Math.atan2(o,a)})}}),e}var Js=(n,e,t,i)=>[[n,e],[n,i],[t,i],[t,e]],Xv=[Js(-57,-57,57,57),Js(-57,-19,19,57).reverse(),Js(-19,-57,57,19),Js(-19,-19,19,19).reverse(),Js(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],Js(-57,-57,57,57).reverse(),Js(-19,-57,57,57).reverse()];function qv(n){return n.flatMap((e,t)=>{let i=n[(t+1)%n.length],s=e[0]===i[0]?1:0,r=1-s,o=jn.filter(a=>a>Math.min(e[s],i[s])&&a<Math.max(e[s],i[s]));return i[s]<e[s]&&o.reverse(),[e,...o.map(a=>r===0?[e[0],a]:[a,e[1]])]})}var Yv=Xv.map(n=>Wv(qv(n))),Zv=[1,3,1,1,5,5,7,10];function Gr(n,e,t=0){let i=Yv[e],s=(Zv[e]*7+t)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;oi(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+e%4*1.02,stuck:0,routeIndex:e,pass:null},n.stolen=!1,n.abandoned=0}function Sc(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=t*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:vt(s*1.9,-1,1),throttle:vt((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function mu(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=Ss(n.shape??n.kind),a=n.kind==="bike",c=i;for(let l of e){if(l===n||oe(l,n)>20)continue;let d=l.x-n.x,f=l.z-n.z,m=d*s+f*r,p=Math.abs(d*r-f*s),h=Ss(l.shape??l.kind,l.angle-n.angle);if(m<.2||p>o.width+h.width+.16)continue;let v=Math.max(0,m-o.length-h.length-(a?.39:.64)),x=Math.max(0,l.vx*s+l.vz*r);c=Math.min(c,x+v*.87)}for(let l of t){if(l.down>0||l.health<=0||l.seated||oe(l,n)>11)continue;let d=l.x-n.x,f=l.z-n.z,m=d*s+f*r,p=Math.abs(d*r-f*s);m>0&&p<o.width+.4&&(c=Math.min(c,Math.max(0,m-o.length-.9)*.94))}return c}function Tp(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...e.filter(l=>l!==n&&Math.hypot(l.vx,l.vz)<2).map(l=>({other:l,radius:1.05})),...t.filter(l=>l.down<=0&&l.health!==0&&!l.seated).map(l=>({other:l,radius:.43}))].find(({other:l,radius:d})=>{let f=l.x-n.x,m=l.z-n.z,p=f*s+m*r;return p>2.25&&p<13.4&&Math.abs(f*r-m*s)<d+1.05});if(!a)return null;let c=(l,d)=>{let f=l.x-n.x,m=l.z-n.z,p=f*s+m*r;return p>-3&&p<23&&Math.abs(f*r-m*s-d)<2.3};for(let l of[2.72,-2.72]){if(e.some(m=>m!==n&&m!==a.other&&c(m,l))||t.some(m=>m!==a.other&&m.down<=0&&c(m,l)))continue;let d=n.x+s*8+r*l,f=n.z+r*8-s*l;if(_i(d,f,n.angle,i,n.shape??n.kind)&&_i((d+n.x)*.5,(f+n.z)*.5,n.angle,i,n.shape??n.kind))return{x:d,z:f}}return null}function Ap(n,e,t,i){let s=n.kind==="bike",r=Ss(n.shape??n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),c=x=>({along:(x.x-n.x)*o+(x.z-n.z)*a,across:(x.x-n.x)*a-(x.z-n.z)*o}),l=[...e.filter(x=>x!==n).map(x=>({actor:x,...Ss(x.shape??x.kind,x.angle-n.angle),moving:!0})),...t.filter(x=>x.health>0&&!x.seated&&!x.down).map(x=>({actor:x,width:.34,length:.34,moving:!1}))].map(x=>({...x,...c(x.actor)})),d=l.filter(({actor:x,along:_,across:A,width:C,length:b,moving:E})=>_>Math.max(s?1.2:2.4,r.length+b-.3)&&_<19&&Math.abs(A)<r.width+C+.16&&(!E||Math.hypot(x.vx,x.vz)<(s?8:6)));d.sort((x,_)=>x.along-_.along);let f=d[0];if(!f||f.along-r.length-f.length<(s?1.85:2.45))return null;let m=r.width+f.width+(s?.23:.38),p=s?Math.max(1.12,m):2.95,h=s?[p,-p,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[p,-p,3.45,-3.45],v=f.along+r.length+f.length+(s?3:4.1);for(let x of h){if(Math.abs(f.across-x)<m)continue;let _=r.length+(s?3.9:5.8);if(!l.every(g=>{if(g===f)return!0;let w=g.moving?Math.max(0,-g.actor.vx*o-g.actor.vz*a):0;return g.along<-r.length-g.length-.2||g.along>v+_+Math.min(10,w)||Math.abs(g.across-x)>r.width+g.width+(s?.25:.46)}))continue;let C=Math.max(s?2.4:3.8,Math.min(s?5:6.1,f.along-r.length+1.2)),b=On(n.x,n.z),E=Math.ceil(v/.72),S=!0;for(let g=1;g<=E;g++){let w=g*v/E,z=x*Math.min(1,w/C),N=n.x+o*w+a*z,D=n.z+a*w-o*z,k=s?.27:.9;if(Math.abs(On(N+a*k,D-o*k)-b)>=.08||Math.abs(On(N-a*k,D+o*k)-b)>=.08||!du({x:N,z:D,angle:n.angle,kind:n.kind,shape:n.shape},i,e,n)){S=!1;break}}if(S)return{x:n.x,z:n.z,sx:o,sz:a,offset:x,obstacle:f.actor,phase:"out",age:0,clearAfter:r.length+f.length+(s?.9:1.2)}}return null}function Jv(n,e,t,i,s=[]){e.age+=i;let r=n.kind==="bike",o=Ss(n.shape??n.kind),{sx:a,sz:c,offset:l}=e,d=(n.x-e.x)*a+(n.z-e.z)*c,f=(n.x-e.x)*c-(n.z-e.z)*a,m=(e.obstacle.x-e.x)*a+(e.obstacle.z-e.z)*c;if(e.age>(r?10:13)||e.phase==="merge"&&Math.abs(f)<.53)return null;e.phase==="out"&&Math.abs(f-l)<(r?.28:.55)&&(e.phase="pass"),e.phase!=="merge"&&d>m+e.clearAfter&&t.every(b=>{if(b===n)return!0;let E=Ss(b.shape??b.kind,b.angle-Math.atan2(a,c));return Math.abs((b.x-e.x)*c-(b.z-e.z)*a)>o.width+E.width+.3||Math.abs((b.x-n.x)*a+(b.z-n.z)*c)>o.length+E.length+1.25})&&(e.phase="merge");let p=e.phase==="merge"?0:l,h=t.some(C=>{if(C===n||C===e.obstacle)return!1;let b=(C.x-n.x)*a+(C.z-n.z)*c,E=(C.x-e.x)*c-(C.z-e.z)*a,S=Ss(C.shape??C.kind,C.angle-Math.atan2(a,c));return b>0&&b<o.length+S.length+2.7&&Math.abs(E-p)<o.width+S.width+.28})||s.some(C=>{if(C.health<=0||C.seated||C.down)return!1;let b=(C.x-n.x)*a+(C.z-n.z)*c,E=(C.x-e.x)*c-(C.z-e.z)*a;return b>0&&b<o.length+2.1&&Math.abs(E-p)<o.width+.45}),v=e.phase==="out"?r?2.3:4.4:r?4.8:7,x={x:e.x+a*(d+v)+c*p,z:e.z+c*(d+v)-a*p},_=e.phase==="out"?r?4.5:4.8:r?8.1:6.5,A=Sc(n,x,h?0:_);return h&&(A.throttle=0),A}function bc(n,e,t,i,s){return du(e,s,t,n)&&i.every(r=>r.health<=0||r.seated||r.down||!ts(e,r.x,r.z,.26))}function Kv(n,e,t,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=t.filter(d=>d!==n&&oe(n,d)<29),c=null,l=-1/0;for(let d of[0,-.62,.62,-1,1]){let f={x:n.x,z:n.z,angle:n.angle,kind:n.kind,shape:n.shape},m=0;for(let _=0;_<(r?13:19)&&(f.angle-=d*.18*(r?.75:.56),f.x-=Math.sin(f.angle)*.18,f.z-=Math.cos(f.angle)*.18,!!bc(n,f,t,i,s));_++)m+=.18;if(m<(r?.9:1.35))continue;bc(n,f,t,i,s)||(f.x+=Math.sin(f.angle)*.18,f.z+=Math.cos(f.angle)*.18,f.angle+=d*.18*(r?.75:.56));let p={...f},h=0;for(let _=0;_<27;_++){let A=Math.atan2(e.x-p.x,e.z-p.z);if(p.angle=zn(p.angle,A,r?.13:.092),p.x+=Math.sin(p.angle)*.24,p.z+=Math.cos(p.angle)*.24,!bc(n,p,t,i,s))break;h+=.24}let v=r&&Ap(f,a,i,s),x=h*.67+(oe(n,e)-oe(p,e))*.38+m*.31-Math.abs(d)*.12+(v?4.6:0);x>l&&(l=x,c={steer:d,pace:o,distance:Math.max(.7,m-.26),age:0,x:n.x,z:n.z})}return c}function gu(n,e,t,i,s,r,o,a,c=!0){let l=n.kind==="bike",d=e.recoverPosition;e.recoverPosition={x:n.x,z:n.z};let f=d&&oe(d,n)>o*.57;if(e.recoverRetry=Math.max(0,(e.recoverRetry??0)-o),e.maneuver){let p=e.maneuver;p.age+=o;let h=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),v={x:n.x-Math.sin(n.angle)*h,z:n.z-Math.cos(n.angle)*h,angle:n.angle,kind:n.kind,shape:n.shape};return oe(n,p)>=p.distance||p.age>(l?2.4:2.8)||!bc(n,v,i,s,r)?(e.maneuver=null,e.recoverWait=0,e.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:p.steer,throttle:n.speed>-p.pace?vt((n.speed+p.pace)*-.64,-.54,-.05):0,brake:!1}}e.recoverWait=!c||f||oe(n,t)<1.2?0:(e.recoverWait??0)+o;let m=l?1.08:1.75;return e.recoverRetry>0||e.recoverWait<m||n.integrity<=0?a:(e.maneuver=Kv(n,t,i,s,r),e.maneuver?(e.recoverWait=0,{steer:e.maneuver.steer,throttle:-.47,brake:!1}):(e.recoverRetry=.85,a))}function Ep(n,e,t,i,s,r,o){for(let[a,c]of r)(!c.driver||c.integrity<=0||oe(c,c.driver.route[c.driver.next].junction)>11)&&r.delete(a);for(let a of n){let c=a.driver;if(!c||a.burning||a.wrecked||a.integrity<=0){a!==e.player&&Math.hypot(a.vx,a.vz)>.06?yi(a,s,{throttle:0,steer:0,brake:!0},i,e.vehicles):a!==e.player&&(a.impact=Math.max(0,a.impact-s*21));continue}let{route:l}=c,d=a.kind==="bike",f=l[c.next],m=Math.sin(a.angle),p=Math.cos(a.angle);for(let D=0;!c.maneuver&&D<6;D++){let k=f.x-a.x,F=f.z-a.z;if(Math.hypot(k,F)>2.55&&(k*m+F*p>0||Math.hypot(k,F)>5))break;c.next=(c.next+1)%l.length,f=l[c.next]}let{junction:h}=f,v=oe(a,h),x=r.get(h.id);!x&&v<9.7&&r.set(h.id,a);let _=c.cruise*(d?1.13:1),A=f.curve&&v<12?Math.min(d?7.1:5.9,_):_,C=x&&x!==a&&v<15;C&&(A=Math.min(A,Math.max(0,v-7.4)*.96));let b=!1;if(o){let D=(h.x-a.x)*m+(h.z-a.z)*p,k=o.state(h.id,Math.abs(m)>Math.abs(p)?"x":"z"),F=7.6+(a.halfLength??2.4);if(k!=="green"&&D>F-.5&&D<F+40){let P=D-F;(k==="red"||P>a.speed*a.speed/11)&&(A=Math.min(A,Math.max(0,P)*.8),b=!0)}}let E=mu(a,e.vehicles,t,A);!c.pass&&!c.maneuver&&!C&&!b&&E<A*(d?.88:.78)&&(!f.curve||v>(d?8:11))&&(c.pass=Ap(a,e.vehicles,t,i));let S=c.pass?Jv(a,c.pass,e.vehicles,s,t):null;S||(c.pass=null);let g=S??Sc(a,f,E);!S&&E<.4&&(g.throttle=0);let w=a.x,z=a.z,N=gu(a,c,f,e.vehicles,t,i,s,g,!(C||b)||c.stuck>12);c.maneuver&&(c.pass=null),yi(a,s,N,i,e.vehicles),c.stuck=!b&&Math.hypot(a.x-w,a.z-z)<s*.62?c.stuck+s:b?c.stuck:0}}function xu(n,e,t,i){return oe(n,t)>13&&_i(n.x,n.z,n.angle,i,n.shape??n.kind)&&e.every(s=>oe(s,n)>5.2)}var $v=[];function _u(n,e,t,i,s){let r=-1/0,o=1/0,a=-1,c=-1;for(let l=0;l<3;l++){let d=n[l],f=e[l],m=t[l],p=t[l+3];if(Math.abs(f)<1e-5){if(d<m||d>p)return 1/0;continue}let h=1/f,v=(f>0?m-d:p-d)*h,x=(f>0?p-d:m-d)*h;if(v>r&&(r=v,a=l*2+ +(f<0)),x<o&&(o=x,c=l*2+ +(f>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=c,Math.max(0,o))}function jv(n,e,t,i){if(!i)return e[1]<-1e-5&&n[1]>=0?-n[1]/e[1]:1/0;if(e[1]>1e-5)return 1/0;let s=o=>n[1]+e[1]*o-i(n[0]+e[0]*o,n[2]+e[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,t/12);if(r<1e-5)return 1/0;for(let o=0;o<t;o+=r){let a=o,c=Math.min(o+r,t);if(!(s(c)>0)){for(let l=0;l<10;l++){let d=(a+c)*.5;s(d)>0?a=d:c=d}return c}}return 1/0}function Cp(n,e,t,i,s,r){let o=s,a=null,c=null,l=null,d=-1,f=0,m={face:-1};for(let h of t){if(h.off)continue;let v=h.bounds??[h.x-h.w*.5,h.y0??h.base??0,h.z-h.d*.5,h.x+h.w*.5,h.h,h.z+h.d*.5],x=_u(n,e,v,o,m);x>=o||(o=x,c=h,l="solid",d=m.face)}let p=jv(n,e,o,r);p<o&&(o=p,c=null,l="ground",d=3);for(let h of i){let v,x=h.oriented;if(x){let{center:_,half:A,angle:C}=x,b=n[0]-_[0],E=n[1]-_[1],S=n[2]-_[2],g=Math.sin(C),w=Math.cos(C),z=[w*b-g*S,E,g*b+w*S],N=[w*e[0]-g*e[2],e[1],g*e[0]+w*e[2]];v=_u(z,N,[-A[0],-A[1],-A[2],A[0],A[1],A[2]],o,m)}else if(h.bounds)v=_u(n,e,h.bounds,o,m);else continue;v>=o||(o=v,a=h,c=null,l="target",d=m.face,f=x?.angle??0)}return{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}}function sa(n,e,t,i,s=52){let{distance:r,hit:o}=Cp(n,e,t,i,s,null);return{distance:r,hit:o}}function wc(n,e,t,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:c,surface:l,face:d,rotation:f}=Cp(n,e,t,i,s,r),m=n.map((h,v)=>h+e[v]*o),p=null;if(d!==-1&&(p=[0,0,0],p[Math.floor(d/2)]=d%2?1:-1,f)){let[h,v,x]=p,_=Math.sin(f),A=Math.cos(f);p=[A*h+_*x,v,-_*h+A*x]}return{distance:o,hit:a,point:m,normal:p,solid:c,surface:l}}function Rp(n,e,t,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...e),c=a>1e-5?e.map(h=>h/a):[0,0,1],l=wc(n,c,i,s,r,{ground:o}),d=l.point.map((h,v)=>h-t[v]),f=d.reduce((h,v,x)=>h+v*c[x],0),m=Math.hypot(...d),p=f>.025&&m>1e-5?d.map(h=>h/m):c;return{direction:p,sight:l,impact:wc(t,p,i,s,r,{ground:o})}}function Vr(n,e,t){let i=e.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return sa(n,r,t,$v,s).distance>=s-.01}function Hr(n,e,t,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let c=e.x-n.x,l=e.z-n.z,d=Math.hypot(c,l),f=(n.ground??0)+r,m=(e.ground??0)+o;if(Math.hypot(d,m-f)>s)return!1;if(d>1e-5){let p=n.angle??0;if((Math.sin(p)*c+Math.cos(p)*l)/d<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(m-f,d)+(n.pitch??0))>a*.5?!1:Vr([n.x,f,n.z],[e.x,m,e.z],t)}function Ip(n,e,t,i){let s=null,r=1.86;for(let o of e){if(o.down>0)continue;let a=o.x-n.x,c=o.z-n.z,l=Math.hypot(a,c),d=Math.sin(n.angle)*a+Math.cos(n.angle)*c;l>=r||d<l*.36||!Vr([n.x,t+1,n.z],[o.x,t+1,o.z],i)||(s=o,r=l)}return s}var Wr=44,Ks=12,yu=new X(0,1,0),Qv=new X(0,0,1),ws=new an,ns=new Et,Pi=new X,Tc=new X,Ac=new X,eM=new it;function tM(){let e=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),c=Math.hypot(r,o),l=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,d=c<.35+Math.sin(a*4)*.06,f=(s*239+i*167)%19/19,m=d?9+f*27:101+f*64,p=d?.99:Math.min(.84,Math.max(0,(l-c)*3.6))*(.51+f*.49),h=(i*32+s)*4;e[h]=m,e[h+1]=m*.92,e[h+2]=m*.81,e[h+3]=Math.round(p*255)}let t=new Us(e,32,32,$n);return t.colorSpace=dn,t.magFilter=yn,t.minFilter=yn,t.needsUpdate=!0,t}function Ec(n,e,t,i){let s=new Nn(e,t,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(nc),n.add(s),s}function nM(n){let e=new Bn(1,1),t=new us(new Float32Array(Wr),1);t.setUsage(nc),e.setAttribute("markAlpha",t);let i=new Kt({map:tM(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=Ec(n,e,i,Wr);return s.renderOrder=3,{mesh:s,fade:t}}function Pp(n){let{mesh:e,fade:t}=nM(n),i=new Kt({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=Ec(n,new Un(.015,.015,1,5),i,Ks),r=new Kt({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=Ec(n,new Zi(1,0),r,Ks),a=new Kt({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),c=Ec(n,new Ji(1),a,Ks),l=Array.from({length:Ks},()=>({age:1/0,distance:0,point:new X,start:new X,direction:new X,surface:null})),d=Array.from({length:Wr},()=>({time:0,life:0,point:new X,normal:new X,attachment:null,radius:0})),f=0,m=0,p=new Et().makeScale(0,0,0),h=new Ke(16768142),v=new Ke(16754545);function x(){for(let C=0;C<Ks;C++)l[C].age=1/0,s.setMatrixAt(C,p),o.setMatrixAt(C,p),c.setMatrixAt(C,p);for(let C=0;C<Wr;C++)d[C].time=0,d[C].attachment=null,e.setMatrixAt(C,p),t.setX(C,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=e.instanceMatrix.needsUpdate=t.needsUpdate=!0,f=m=0}x();function _(C,b,{enemy:E=!1,mark:S=b.surface==="solid"||b.surface==="ground",attach:g=null}={}){let w=l[f],z=f;if(f=(f+1)%Ks,w.start.fromArray(C),w.point.fromArray(b.point),w.distance=w.start.distanceTo(w.point),w.direction.subVectors(w.point,w.start).normalize(),w.surface=b.surface,w.age=0,s.setColorAt(z,E?v:h),s.instanceColor.needsUpdate=!0,S&&b.normal&&b.surface){let N=d[m];m=(m+1)%Wr,N.life=(b.surface==="ground"?8:13)+Math.random()*4,N.time=N.life,N.point.copy(w.point),N.normal.fromArray(b.normal).normalize(),N.attachment=g,N.radius=.053+Math.random()*.031,g&&(g.updateWorldMatrix(!0,!1),g.worldToLocal(N.point),N.normal.transformDirection(ns.copy(g.matrixWorld).invert()))}}function A(C){let b=!1,E=!1;for(let S=0;S<Ks;S++){let g=l[S];if(!Number.isFinite(g.age))continue;b=!0,g.age+=C;let w=234,z=Math.min(g.distance,g.age*w+1.7),N=Math.max(0,g.age*w-3.1),D=z-N;if(D>.018){Pi.copy(g.start).addScaledVector(g.direction,(z+N)*.5),ws.setFromUnitVectors(yu,g.direction);let F=Math.min(1,D/1.3);ns.compose(Pi,ws,Tc.set(F,D,F)),s.setMatrixAt(S,ns)}else s.setMatrixAt(S,p);if(g.age<.071){let F=Math.max(.025,.084-g.age*.78);ws.setFromUnitVectors(yu,g.direction),Pi.copy(g.start).addScaledVector(g.direction,.052),ns.compose(Pi,ws,Tc.set(F,F*2.2,F)),o.setMatrixAt(S,ns)}else o.setMatrixAt(S,p);let k=g.age-g.distance/w;if(g.surface&&k>=0&&k<.13){let F=Math.max(.006,.041-k*.27);Pi.copy(g.point).addScaledVector(g.direction,-(.039+k*.38)),ws.setFromUnitVectors(yu,g.direction),ns.compose(Pi,ws,Tc.set(F,F*2.14,F)),c.setMatrixAt(S,ns)}else c.setMatrixAt(S,p);g.age>g.distance/w+.14&&(g.age=1/0)}for(let S=0;S<Wr;S++){let g=d[S];if(!(g.time<=0)){if(E=!0,g.time-=C,g.time<=0||g.attachment&&!g.attachment.visible){g.time=0,g.attachment=null,e.setMatrixAt(S,p),t.setX(S,0);continue}Pi.copy(g.point),Ac.copy(g.normal),g.attachment&&(g.attachment.updateWorldMatrix(!0,!1),Pi.applyMatrix4(g.attachment.matrixWorld),Ac.applyNormalMatrix(eM.getNormalMatrix(g.attachment.matrixWorld))),Pi.addScaledVector(Ac,.014),ws.setFromUnitVectors(Qv,Ac),ns.compose(Pi,ws,Tc.set(g.radius,g.radius,g.radius)),e.setMatrixAt(S,ns),t.setX(S,Math.min(1,g.time*.57))}}b&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0),E&&(e.instanceMatrix.needsUpdate=t.needsUpdate=!0)}return{emit:_,update:A,reset:x}}var Xr=.42,$s=.145,Lp=n=>.94*n,vu=n=>n*n*(3-2*n),ra=(n,e,t)=>n+(e-n)*t;function iM(n){return n<.065?-.32*vu(n/.065):n<$s?ra(-.32,1,vu((n-.065)/($s-.065))):n<.182?ra(1,.89,(n-$s)/(.182-$s)):.89*(1-vu((n-.182)/(Xr-.182)))}function Mu(n,{aim:e=!1,punch:t=0,pitch:i=0,hand:s=0,walking:r=!1}={}){if(!e&&t<=0)return;let o=n.arms[s],a=n.arms[1-s],c=n.forearms[s],l=n.forearms[1-s],d=s===0?1:-1,f=t>0?iM(vt(Xr-t,0,Xr)):0,m=Math.max(0,f),p=Math.max(0,-f),h=vt(i,-.64,.53)*.62,v=.07+m*.2-p*.08;n.body.rotation.set(v,d*(.12+m*.46-p*.52),d*(-.02-m*.05)),n.body.position.y+=Lp(1-Math.cos(v))-.04-m*.03,n.body.position.z+=Lp(-Math.sin(v))+m*.12;let[x,_]=n.legs,[A,C]=n.shins,b=s===0?x:_,E=s===0?_:x,S=s===0?A:C,g=s===0?C:A;r||(E.rotation.set(-.32-m*.08,0,0),g.rotation.set(.34,0,0),b.rotation.set(.26+m*.16,0,0),S.rotation.set(.18-m*.1,0,0)),o.rotation.set(ra(-.86,-1.66+h,m)+p*.7,d*(.1-m*.08),d*ra(.24,-.04,m)-d*p*.25),c.rotation.set(ra(-1.62,-.04,m)-p*.2,0,d*(.1-m*.1)),a.rotation.set(-.98+m*.06,-d*.12,-d*.22),l.rotation.set(-1.78,0,-d*.08),n.pistol.visible=!1}function Ve(n){return document.getElementById(n)}function Dp(n,e){let t=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Ve("stick"),c=Ve("nub"),l=Ve("look"),d=Ve("game"),f=Ve("view"),m=-1,p=-1,h=[],x=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",_=F=>{x=F,Ve("touch").hidden=F!=="touch",d.classList.toggle("touching",F==="touch")};_(x);let A=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","KeyB","Digit1","Digit2","Digit3","Digit4","Escape"]),C="",b=0,E=!1;window.addEventListener("keydown",F=>{if(!(!A.has(F.code)||F.target instanceof HTMLSelectElement&&!e())){if((e()||F.code==="Escape")&&F.preventDefault(),F.code==="Escape"){F.repeat||n();return}if(e()&&(_("keyboard"),t.add(F.code),!F.repeat)){F.code==="KeyE"&&i.add("interact"),F.code==="KeyF"&&i.add("fire"),F.code==="KeyR"&&i.add("punch"),F.code==="KeyG"&&i.add("recruit"),F.code==="KeyV"&&i.add("weapon"),F.code==="Space"&&i.add("jump"),F.code==="KeyB"&&i.add("sell");let P={Digit1:"follow",Digit2:"wait",Digit3:"attack"};P[F.code]&&(C=P[F.code])}}}),window.addEventListener("keyup",F=>{F.code==="Digit4"&&t.has("Digit4")&&!E&&(C="dealer"),t.delete(F.code)});function S(){t.clear(),b=0,E=!1,C="",i.clear(),s.clear(),o.x=0,o.y=0,c.style.transform="",m=-1,p=-1,r.x=0,r.y=0,r.aim=!1,Ve("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",S),f.addEventListener("contextmenu",F=>F.preventDefault()),f.addEventListener("wheel",F=>{!e()||!F.deltaY||(F.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(g),g=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let g=0;f.addEventListener("pointerdown",F=>{e()&&F.pointerType==="touch"&&_("touch")}),window.addEventListener("mousedown",F=>{if(!(!e()||document.pointerLockElement!==f&&(!(F.target instanceof Node)||!f.contains(F.target)))){if(F.button===0&&document.pointerLockElement!==f&&f.requestPointerLock){let P=f.requestPointerLock();P&&P.catch(()=>{})}_("keyboard"),F.button===0&&(i.add("fire"),s.add("mouseFire")),F.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",F=>{F.button===0&&s.delete("mouseFire"),F.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",F=>{!e()||x!=="keyboard"||F.pointerType==="touch"||(document.pointerLockElement===f||F.target===f||f.contains(F.target))&&(r.x+=F.movementX,r.y+=F.movementY)});function w(F){let P=a.getBoundingClientRect(),V=F.clientX-P.left-P.width/2,H=F.clientY-P.top-P.height/2,B=P.width*.37,q=Math.max(B,Math.hypot(V,H));o.x=V/q,o.y=H/q,c.style.transform="translate("+o.x*B+"px,"+o.y*B+"px)"}a.addEventListener("pointerdown",F=>{m===-1&&(_("touch"),m=F.pointerId,a.setPointerCapture(F.pointerId),w(F))}),a.addEventListener("pointermove",F=>{F.pointerId===m&&w(F)}),a.addEventListener("lostpointercapture",F=>{F.pointerId===m&&(m=-1,o.x=0,o.y=0,c.style.transform="")});let z=0,N=0;l.addEventListener("pointerdown",F=>{p===-1&&(p=F.pointerId,z=F.clientX,N=F.clientY,l.setPointerCapture(F.pointerId))}),l.addEventListener("pointermove",F=>{F.pointerId===p&&(r.x+=(F.clientX-z)*1.45,r.y+=(F.clientY-N)*1.45,z=F.clientX,N=F.clientY)}),l.addEventListener("lostpointercapture",F=>{F.pointerId===p&&(p=-1)});let D=Ve("gang-menu");for(let F of D.querySelectorAll("button"))F.addEventListener("pointerdown",P=>{P.preventDefault(),C=F.dataset.order??"",D.hidden=!0,Ve("gang").setAttribute("aria-expanded","false")});Ve("gang").addEventListener("pointerdown",F=>{F.preventDefault(),_("touch"),D.hidden=!D.hidden,Ve("gang").setAttribute("aria-expanded",String(!D.hidden))});for(let F of["interact","fire","aim","sprint","punch","jump","weapon","recruit","sell"]){let P=Ve(F);P.addEventListener("pointerdown",V=>{V.preventDefault(),_("touch"),P.setPointerCapture(V.pointerId),F==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),P.setAttribute("aria-pressed",String(s.has("aim")))):F==="sprint"||F==="fire"?(s.add(F),F==="fire"&&i.add(F)):i.add(F)}),(F==="sprint"||F==="fire")&&P.addEventListener("lostpointercapture",()=>s.delete(F))}let k=!1;return{clear:S,read(F,P){k!==F&&(s.delete("aim"),Ve("aim").setAttribute("aria-pressed","false"),k=F);let V=Array.from(navigator.getGamepads?.()??[]).find(de=>de?.connected&&de.mapping==="standard"),H=V?.buttons.map(de=>de.pressed||de.value>.45)??[],B=de=>H[de]&&!h[de],q=Array.from({length:4},(de,Ae)=>Zf(V?.axes[Ae]));(H.some(Boolean)||q.some(de=>Math.abs(de)>.1))&&_("pad"),(B(9)||!e()&&B(0))&&n();let K=Number(t.has("KeyD")||t.has("ArrowRight"))-Number(t.has("KeyA")||t.has("ArrowLeft")),ae=Number(t.has("KeyW")||t.has("ArrowUp"))-Number(t.has("KeyS")||t.has("ArrowDown")),j=(V?.buttons[7]?.value??0)-(V?.buttons[6]?.value??0),xe=t.has("Digit4")||!!H[5];xe&&!E?(b+=P,b>=.55&&(C="undealer",E=!0)):xe||(h[5]&&!E&&(C="dealer"),b=0,E=!1);let Z={x:vt(K+o.x+q[0],-1,1),y:vt(ae-o.y+(F&&Math.abs(j)>.05?j:-q[1]),-1,1),lookX:vt(r.x,-140,140)*.0032+q[2]*P*2.45,lookY:vt(r.y,-140,140)*.0028+q[3]*P*1.8,aim:!F&&(r.aim||t.has("KeyQ")||s.has("aim")||!!H[6]),run:s.has("sprint")||t.has("ShiftLeft")||t.has("ShiftRight")||!!H[0],brake:t.has("Space")||s.has("sprint")||!!H[2],interact:i.has("interact")||B(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!F&&!!H[7],punch:i.has("punch")||B(1),recruit:i.has("recruit")||B(12),weapon:i.has("weapon")||B(15),jump:i.has("jump")||B(2),map:B(8),confirm:B(0),cancel:B(1),navUp:B(12),navDown:B(13),sell:i.has("sell")||B(13),order:C||(B(14)?"toggle":"")||(B(4)?"attack":""),mode:x};return C="",h=H,r.x=0,r.y=0,i.clear(),Z}}}function Np(){let n,e,t,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,e=n.createGain(),e.gain.value=.46,e.connect(n.destination),t=n.createOscillator(),t.type="triangle",i=n.createGain(),i.gain.value=0,t.connect(i).connect(e),t.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(c,l,d,f,m="sine",p=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+p,v=n.createOscillator(),x=n.createGain();v.type=m,v.frequency.setValueAtTime(c,h),v.frequency.exponentialRampToValueAtTime(l,h+d),x.gain.setValueAtTime(f,h),x.gain.exponentialRampToValueAtTime(.001,h+d),v.connect(x).connect(e),v.start(h),v.stop(h+d)}function a(c,l,d){if(!n||!s||n.state!=="running")return;let f=n.createBuffer(1,Math.floor(n.sampleRate*c),n.sampleRate),m=f.getChannelData(0);for(let x=0;x<m.length;x++)m[x]=(Math.random()*2-1)*Math.pow(1-x/m.length,2.2);let p=n.createBufferSource();p.buffer=f;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=d;let v=n.createGain();v.gain.value=l,p.connect(h).connect(v).connect(e),p.start()}return{start:r,explosion(){a(1.4,1.1,620),o(70,24,1.1,.7,"sawtooth")},rifle(){a(.12,.55,2400),o(240,60,.09,.4,"square")},sale(){o(880,1320,.12,.18),o(1320,1760,.16,.14,"sine",.08)},get enabled(){return s},toggle(){return s=!s,e&&(e.gain.value=s?.46:0),r(),s},motor(c,l){n&&(t.frequency.setTargetAtTime(34+Math.abs(c)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(c){o(c?109:187,c?39:73,c?.125:.084,c?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function bu(n){return n>1.53?54:n>.92?32:n>.63?24:15}function Su(n){return Math.round(vt(Math.max(0,n-2.4)**2*.24,0,86))}function Cc(n){return n>=36?3:n>=20?2:n>0?1:0}function Up(n){let s=62.474999999999994,r=Array.from({length:2900},(p,h)=>({x:h%58*2.55-s,z:Math.floor(h/58)*2.55-s})),o=r.map(p=>Fn(p.x,p.z,.38,n)),a=r.map((p,h)=>o[h]?[h>=58?h-58:-1,h<2842?h+58:-1,h%58?h-1:-1,h%58<57?h+1:-1].filter(x=>x>=0&&o[x]&&Fn((p.x+r[x].x)*.5,(p.z+r[x].z)*.5,.38,n)):[]),c=(p,h)=>{let v=Math.max(1,Math.ceil(oe(p,h)/.42));for(let x=1;x<=v;x++){let _=x/v;if(!Fn(p.x+(h.x-p.x)*_,p.z+(h.z-p.z)*_,.31,n))return!1}return!0},l=p=>{let h=Math.round((p.x+s)/2.55),v=Math.round((p.z+s)/2.55),x=[];for(let _=Math.max(0,v-4);_<=Math.min(49,v+4);_++)for(let A=Math.max(0,h-4);A<=Math.min(57,h+4);A++){let C=_*58+A;if(!o[C])continue;let b=r[C].x-p.x,E=r[C].z-p.z;x.push({index:C,d:b*b+E*E})}x.sort((_,A)=>_.d-A.d);for(let{index:_}of x.slice(0,12))if(c(p,r[_]))return _;return-1},d=0,f=-1,m=(p,h)=>{let v=l(p),x=l(h);if(v<0||x<0)return[];if(v===x)return[r[v]];let _=new Int32Array(r.length).fill(-1),A=[v];_[v]=v;for(let C=0;C<A.length;C++){let b=A[C];if(b===x){let E=[];for(let S=x;S!==v;S=_[S])E.push(r[S]);return E.push(r[v]),E.reverse()}for(let E of a[b])_[E]===-1&&(_[E]=b,A.push(E))}return[]};return(p,h,v,x)=>{p.repath=(p.repath??0)-x;let _=h.x-p.x,A=h.z-p.z,C=Math.hypot(_,A);if(C<.16)return 0;let b=C<12&&c(p,h);b&&(p.route=[]);let E=Math.floor(performance.now()/16);for(E!==f&&(f=E,d=3),!b&&p.repath<=0&&(d>0?(d--,p.route=m(p,h),p.repath=1.1+Math.random()*.4):p.repath=.05);p.route?.length&&(oe(p,p.route[0])<.7||p.route.length>1&&oe(p,p.route[1])<4&&c(p,p.route[1]));)p.route.shift();let S=b?h:p.route?.[0]??h,g=Math.atan2(S.x-p.x,S.z-p.z),w=Math.min(v*x,oe(p,S));p.angle=zn(p.angle,g,x*8.5);let z=Zo(p,p.x+Math.sin(g)*w,p.z+Math.cos(g)*w,.24,n);return z||(p.repath=Math.min(p.repath,.18)),z?v:0}}var Rc=n=>jn.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,jn[0]);function wu(n,e,t,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let v=e.z<o.z;n.stop={x:v?20.9:17.2,z:o.z+(v?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&oe(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&oe(o,n.stop)<2.6){let v=Rc(o.x),x=Rc(o.z),_=Rc(e.x),A=Rc(e.z);Math.abs(o.x-v)>3&&Math.abs(o.z-x)>3?n.stop={x:v,z:o.z}:Math.abs(o.x-v)>2.4&&Math.abs(o.z-x)<2.4?n.stop={x:_,z:x}:Math.abs(o.z-x)>2.4?n.stop={x:v,z:A}:_!==v?n.stop={x:v+Math.sign(_-v)*38,z:x}:A!==x?n.stop={x:v,z:x+Math.sign(A-x)*38}:n.stop={x:_,z:e.z}}let a=oe(o,e),c=n.departing?6:14,l=Math.min(c,a*.85,Math.max(3,oe(o,n.stop)*1.85)),d=mu(o,i,s,l),f=!n.departing&&d<2.5?Tp(o,i,s,t):null,m=Sc(o,f??n.stop,f?4.4:d),p=gu(o,n,n.stop,i,s,t,r,m),h=o.impact>3||Math.abs(o.speed)<1;n.stall=h&&!n.maneuver?n.stall+r:0,yi(o,r,p,t,i)}var Fp="gtbase:progress:1",Ic=(n,e)=>Number.isFinite(n)?vt(Math.floor(n),0,e):0,sM=["sedan","hatch","wagon","taxi","pickup","van","suv","sport","muscle","luxury","convertible"],rM=["street","sport","chopper","scooter"];function zp(n){try{let e=JSON.parse((n??globalThis.localStorage).getItem(Fp));if(!e||e.version!==1||!Number.isFinite(e.cash)||!Number.isFinite(e.ammo)||!Number.isFinite(e.health))return null;let t=e.stash??{},i=e.garage,s=i&&(i.kind==="car"&&sM.includes(i.model)||i.kind==="bike"&&rM.includes(i.model))&&Number.isInteger(i.color)&&i.color>=0&&i.color<=16777215?{kind:i.kind,model:i.model,color:i.color}:null;return{...e.checkpoint==="lajes"?si.home:{x:Rn.x+2.5,z:Rn.z-2.73},cash:vt(Math.floor(e.cash),0,999999),armed:e.armed===!0,equipped:e.equipped===!0,ammo:vt(Math.floor(e.ammo),0,360),rifle:e.rifle===!0,rifleAmmo:Ic(e.rifleAmmo,900),health:vt(Math.floor(e.health),1,100),look:$f(e.look),wardrobe:Array.isArray(e.wardrobe)?e.wardrobe.filter(r=>r&&typeof r.label=="string"&&r.changes&&typeof r.changes=="object"):[],stash:{weed:Ic(t.weed,999),coke:Ic(t.coke,999),ecstasy:Ic(t.ecstasy,999)},garage:s,recruits:Array.isArray(e.recruits)?[...new Set(e.recruits.filter(r=>Number.isInteger(r)&&r>=0||typeof r=="string"&&/^[\w:-]{1,80}$/.test(r)))]:[]}}catch{return null}}function Op(n,e){try{return(e??globalThis.localStorage).setItem(Fp,JSON.stringify({...n,version:1})),!0}catch{return!1}}var qr=Ve("view"),oM=Ve("menu"),Zr=Ve("play"),Yr=Ve("quality"),Ts=Ve("shop"),Bp=180,kp=260,js=36,Pc=90,Qs={weed:{name:"maconha",pack:100,retail:34},coke:{name:"p\xF3",pack:300,retail:85},ecstasy:{name:"ecstasy",pack:200,retail:58}};function Lc(n,e){try{return e!==void 0&&localStorage.setItem("gtbase:"+n,e),localStorage.getItem("gtbase:"+n)}catch{return null}}function aM(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,e=new oc({antialias:!n,alpha:!1,powerPreference:"high-performance"});e.toneMapping=Uo,e.toneMappingExposure=1.17,e.shadowMap.type=Os,qr.append(e.domElement);let t=new xo,i=new Ln(57,1,.12,370),s=fp(t),r=s.vehicleSolids,o=Up(s.vehicleSolids),a=Pp(t),c=wp(t),l=u=>u.floorY??s.floorAt(u.x,u.z,0),d=u=>s.walkSolids(u.x,u.z,l(u)),f=()=>[...s.solid,...s.closedDoorSolids()],m=u=>{u.floorY=s.floorAt(u.x,u.z,l(u))},p=u=>l(u)>1.25?[]:k,h={lastHurt:0,...Yo,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,ragdoll:null,model:Ms(t,Xs())},v=91,x=u=>{let y=na[u]?.palette??[11422e3];return v=v*1103515245+12345>>>0,y[v%y.length]},_=[{x:15.75,z:-1.8,angle:Math.PI,model:"sport"},{x:-22.8,z:4,angle:0,model:"pickup"},{x:36,z:15.3,angle:Math.PI/2,model:"luxury"},{x:53.3,z:-36,angle:0,model:"muscle"},{x:-15.9,z:-31,angle:0,model:"convertible"}],A=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033,variant:"sport"},{x:22.85,z:28,angle:0,color:4678008,variant:"chopper"}],C=[..._.map(({model:u})=>ia(t,u,x(u))),...A.map(({color:u,variant:y})=>_c(t,u,y))],b=["sedan","taxi","hatch","scooter","van","suv","wagon","street"],E=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((u,y)=>{let M=b[y],U=y===3||y===7?_c(t,u,M):ia(t,M,x(M));return U.routeIndex=y,U.kind==="bike"&&(U.rider=Ms(t,Ko(4e3+y)),U.rider.root.visible=!1),U}),S=[...C,...E],g=new Map,w=Array.from({length:19},(u,y)=>{let M=gi[y%3],U=gi[Math.floor(y/3)%3],R=y>=15?[{x:64,z:-8},{x:71,z:-8},{x:71,z:8},{x:64,z:8}]:[{x:M+12,z:U-12},{x:M+12,z:U+12},{x:M-12,z:U+12},{x:M-12,z:U-12}],T=y%4,se=R[T],ne=R[(T+1)%4],fe=(y%3+1)/4,Ie={x:se.x+(ne.x-se.x)*fe,z:se.z+(ne.z-se.z)*fe,next:(T+1)%4};return de({...Ie,id:"street:"+y},"civilian",Ms(t,Ko(1e3+y)),R)}),z=s.buildings.filter(u=>u.clerk).map((u,y)=>de({...u.clerk,next:0,id:"clerk:"+u.id,buildingId:u.id},"clerk",Ms(t,{...Ko(2e3+y),shirt:"tee"}),[])),N=s.buildings.filter(u=>u.clerk),D=Array.from({length:3},(u,y)=>{let M=Qi.z-6.1+y*4.25,U={x:-1.85,z:Qi.z+[-.23,-4.4,3.94][y],next:0,id:"officer:"+y,buildingId:"station"},R=de(U,"police",Ms(t,Kf([12157017,8475704,15052936][y%3])),[]),T={x:8.2,z:M,angle:Math.PI/2},se=ia(t,"sedan",3626613,!0);return{officer:R,berth:T,car:se,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,route:[3,6,1][y],beat:y,startShift:[18,40,26][y]}}),k=[...S,...D.map(u=>u.car)],F=new Map,P=Array.from({length:E.length+2},(u,y)=>{let M=de({x:0,z:0,next:0,id:"driver:"+y},"civilian",Ms(t,Ko(3e3+y)),[]);return M.seated=!0,M.model.root.visible=!1,M});E.forEach((u,y)=>{u.kind==="car"&&(u.ownDriver=P[y])});let V=()=>P.find(u=>u.seated&&!u.riding&&!k.some(y=>y.ownDriver===u&&y.driver)),H=u=>u.ownDriver?.seated&&!u.ownDriver.riding?u.ownDriver:V(),B=[...w,...z,...D.map(u=>u.officer),...P],q=B,G=new Map(B.map(u=>[u.id,u])),K=new zs(1,14),ae=new Kt({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),j=new ln(.27,.115,.38),xe={cash:new $t({color:7838308}),ammo:new $t({color:14395738}),weapon:new $t({color:4805464})},Z=[];function de(u,y,M,U){return{home:u,baseRole:y,role:y,model:M,path:U,...u,pace:1.15+Math.abs(u.z)%4*.11,angle:u.angle??0,floorY:u.y??0,scheduleClock:9+Math.abs(u.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function Ae(u){u.drop&&(t.remove(u.drop),u.drop=null),Object.assign(u,u.home,{role:u.baseRole,health:100,fear:0,down:0,angle:u.home.angle??0,floorY:u.home.y??0,scheduleClock:9+Math.abs(u.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],shoppingTrip:null,commandTarget:null,hopTime:0,stuckTime:0,walkIntent:null,pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1,ragdoll:null}),u.model.root.rotation.set(0,u.angle,0),u.model.shadow.visible=!0,u.model.root.visible=!0,m(u),u.model.root.position.set(u.x,l(u),u.z)}let ge=Np();Lc("sound")==="off"&&ge.toggle();let Me=new X,He=new X,ot=new X,Je=new X,ft=new X,bt=new X,$e=new X,Dt=new X,Wt=new X,Gt=!1,Lt=!1,ie=null,Ue=!1,xt=0,_t=null,lt=0,J=0,Ft=0,pt=0,zt=0,De=0,ct=0,Xe=.23,Qe=0,O=0,I=0,Q=0,ye=!0,pe="keyboard",Se=kp,_e=!1,ce=!1,he=0,Re=!1,W="pistol",ue=!1,le=0,Te=0,me=Xs(),ve={weed:0,coke:0,ecstasy:0},We=null,at=3,be=0,Ne=null,tt=!1,Pe=0,St=0,Ot=null,tn=null,nn=null,wn=null,Mi=27,er=0,Qn=null,Hn=0,Xt=[],sn=zp(),oa=()=>{Zr.textContent=sn?"Continuar do save":"Jogar agora"},vn=0,bi=0,Li=0,Di=0,Jr=0,As=!1,Es=0,Kr=!1,aa="",is=0,Ni=1,L=0,Y=0,te=Ve("map").getContext("2d"),ee=document.createElement("canvas");ee.width=ee.height=256;let $=ee.getContext("2d"),Ee=Ve("atlas"),qe=Ve("atlas-map"),Ce={x:128,z:128},Le=null,Ye=new Rt(new Ji(.55),new Kt({color:16362817}));t.add(Ye),Ye.visible=!1;function nt(u,y){Le={x:(u-128)/1.48,z:(y-128)/1.48},Ye.position.set(Le.x,On(Le.x,Le.z)+2.6,Le.z),Ye.visible=!0,Ee.close(),Is.clear()}Ve("mark-lajes").onclick=()=>nt(st(63.6),st(0));function mt(){!Gt||Ts.open||Ee.open||(Ce.x=st(h.x),Ce.z=st(h.z),document.pointerLockElement&&document.exitPointerLock(),Is.clear(),Ee.showModal())}Ve("open-map").onclick=mt,qe.onclick=u=>{let y=qe.getBoundingClientRect();nt((u.clientX-y.left)*256/y.width,(u.clientY-y.top)*256/y.height)};let ke=[];function yt(){!Gt||Ts.open||Ee.open||(Is.clear(),document.pointerLockElement&&document.exitPointerLock(),qt.show(()=>({title:"Invent\xE1rio",note:"Carteira R$ "+Se+" \xB7 Pistola "+(_e?jt()+" balas":"\u2014")+" \xB7 Fuzil "+(ue?(W==="rifle"?he:Te)+" balas":"\u2014"),sections:[{title:"Garagem",items:Ne?[{label:ca(Ne),disabled:!0}]:[]},{title:"Estoque",items:Object.keys(Qs).map(u=>({label:Qs[u].name+" \xD7 "+ve[u],price:0,disabled:!0}))},{title:"Guarda-roupa",items:ke.map(u=>({label:u.label,price:0,buy:()=>Bt(u.changes)}))}]})))}function jt(){return W==="pistol"?he:le}Ve("open-bag").onclick=yt,document.addEventListener("keydown",u=>{u.repeat||(u.code==="KeyM"&&(Ee.open?Ee.close():mt()),u.code==="KeyI"&&yt())});let st=u=>128+u*1.48;$.fillStyle="#1d3433",$.fillRect(0,0,256,256),$.fillStyle="#46605b";for(let u of jn)$.fillRect(st(u)-10,0,20,256),$.fillRect(0,st(u)-10,256,20);$.fillStyle="#826849",$.fillRect(st(62),st(-si.halfDepth),22*1.48,si.halfDepth*2*1.48),$.fillStyle="#345048";for(let u of s.vehicleSolids)$.fillRect(st(u.x-u.w/2),st(u.z-u.d/2),u.w*1.48,u.d*1.48);$.fillStyle="#6a7859",$.fillRect(st(-10),st(28),38,38),$.fillStyle="#ffe4aa",$.beginPath(),$.arc(st(63.6),st(0),3,0,2*Math.PI),$.fill(),$.textAlign="right",$.font="bold 9px system-ui",$.fillText("Vila das Lajes",st(62),st(-2));function It(){let u=Yr.value==="high",y=Yr.value==="low";e.setPixelRatio(Math.min(devicePixelRatio,u?2:y?1:n?1.45:1.5)*(y?.85:Ni)),e.setSize(qr.clientWidth,qr.clientHeight),e.shadowMap.enabled=!y&&(u||Ni>.76),s.sun.shadow.needsUpdate=!0,c.setScale(qr.clientHeight*e.getPixelRatio()*.92),i.aspect=qr.clientWidth/Math.max(1,qr.clientHeight),i.updateProjectionMatrix()}function un(){Ve("sound").textContent=ge.enabled?"Som ligado":"Som desligado",Ve("sound").setAttribute("aria-pressed",String(ge.enabled))}function Ge(u){Ts.open&&$r(),Gt=u,oM.hidden=u,Ve("hud").hidden=!u,Is.clear(),u?(ge.start(),Lt||(ct=.32,Xe=.22),Lt=!0,ye=!0,Qe=performance.now(),Ve("pause").focus({preventScroll:!0}),Ve("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),ge.motor(0,!1),Ve("help").removeAttribute("open"),Ve("title").innerHTML="GT<span>BASE</span>",Ve("intro").textContent="Jogo pausado em Vila Brasa.",Zr.textContent="Continuar",Ve("reset").hidden=!1,Zr.focus())}function mn(){ss={x:NaN,z:NaN,angle:0},Ou(),ke=[],Le=null,Ye.visible=!1,ie=null,Ot=null,wn=null,nn=null,tn=null,Xt.length=0,Mi=27,Se=kp,_e=!1,ce=!1,he=0,Re=!1,W="pistol",ue=!1,le=0,Te=0,h.model.weapon="pistol",ve.weed=ve.coke=ve.ecstasy=0,We=null,Ne&&(tt=!0,Nc(Ne)),lt=Ft=De=pt=zt=is=0,xt=0,Ue=!1,_t=null,a.reset(),s.resetDoors(),vn=bi=Li=Pe=St=0,As=!1,Es=0,Kr=!1,ct=.32,Xe=.22,Q=0,Object.assign(h,Yo,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),m(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,Ys(h.model,0,0,!1,!1),C.forEach((y,M)=>{let{x:U,z:R,angle:T}=[..._,...A][M];oi(y,{x:U,z:R,angle:T}),y.stolen=!1,y.body.rotation.z=0,ai(y,0)}),g.clear(),E.forEach((y,M)=>{Gr(y,M),ai(y,0)});for(let y of D)oi(y.car,y.berth),Object.assign(y,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),ai(y.car,0);for(let y of B)Ae(y);for(let y of P)y.seated=!0,y.model.root.visible=!1;for(let y of Z)t.remove(y.mesh);Z.length=0;for(let y of k)y.passengers=[],y.shopping=!1,y.visitTime=-100;s.props.reset(),c.clear(),h.ragdoll=null,s.sun.shadow.needsUpdate=!0,h.deadTime=0,fa(D[0]);let u=N.find(y=>y.kind==="armory")?.entry??Nr;s.marker.position.set(u.x,.02,u.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,I=0}function Fe(u){aa=u,is=2.4}let li=()=>{let u=Object.entries(Qs).filter(([y])=>ve[y]>0).map(([y,M])=>M.name+" "+ve[y]);return u.length?u.join(" \xB7 "):""},qt=pp(Ts,{balance:()=>"Saldo: R$ "+Se.toLocaleString("pt-BR")+(li()?" \xB7 "+li():"")+(_e||ue?" \xB7 Balas: "+[_e?"pistola "+(W==="pistol"?he:le):"",ue?"fuzil "+(W==="rifle"?he:Te):""].filter(Boolean).join(", "):""),onClose:()=>{Is.clear(),I=0}});function Qt(u){return Se<u?"Saldo insuficiente.":(Se-=u,ge.bell(),null)}function In(u){W==="rifle"?Te=he:le=he,u==="fists"?ce=!1:(ce=!0,W=u),he=W==="rifle"?Te:le,h.model.weapon=W,Qn=null,Hn=0}function Ui(){let u=["fists",..._e?["pistol"]:[],...ue?["rifle"]:[]],y=ce?W:"fists";In(u[(u.indexOf(y)+1)%u.length])}function ht(u,y){W===u?he=Math.min(900,he+y):u==="rifle"?Te=Math.min(900,Te+y):le=Math.min(360,le+y)}function cn(u,y){let M=u.model,U=Ms(t,y);U.root.position.copy(M.root.position),U.root.quaternion.copy(M.root.quaternion),U.root.visible=M.root.visible,U.weapon=M.weapon,t.remove(M.root),M.root.traverse(R=>{R instanceof Rt&&R!==M.shadow&&R.geometry.dispose()}),u.model=U}function Bt(u){let y=Object.keys(u)[0];if(["shirt","legs","shoes","glasses","chain","earrings","watch","ring"].includes(y)&&!ke.some(M=>JSON.stringify(M.changes)===JSON.stringify(u))){let M={shirt:"Blusa",legs:"Cal\xE7a / bermuda",shoes:"Cal\xE7ado",glasses:"\xD3culos",chain:"Corrente",earrings:"Brinco",watch:"Rel\xF3gio",ring:"Anel"};ke.push({label:M[y]+" \xB7 "+({tee:"camiseta",tank:"regata",dress:"social",none:"sem",pants:"cal\xE7a",shorts:"bermuda",flipflops:"chinelo",sneakers:"t\xEAnis",gold:"ouro",silver:"prata",diamond:"diamante",true:"com",false:"sem"}[String(u[y])]??String(u[y]))+(u[y+"Color"]?" #"+u[y+"Color"].toString(16):""),changes:u})}return me={...me,...u},cn(h,me),null}let kt=iu,rn=[3553348,2373199,5917242,2894892,8221798,11049860,15262678],ei=[15789282,2236962,9056042,2969482,14725949,3107660];function Wn(u,y,M,U){let R=me[y]===M;return{label:R?u+" (tirar)":u,price:R?0:U,active:R,buy:()=>R?Bt({[y]:typeof M=="boolean"?!1:"none"}):Qt(U)??Bt({[y]:M})}}function Gp(u){return u==="store"?{title:"Balc\xE3o de comida",sections:[{title:"Card\xE1pio",items:[{label:"Lanche (+30 de vida)",price:15,disabled:h.health>=100,buy:()=>{let y=Qt(15);return y||(h.health=Math.min(100,h.health+30),null)}}]}]}:u==="armory"?{title:"Loja de armas",note:"Pistola e muni\xE7\xE3o dentro da lei, mais ou menos.",sections:[{title:"Armas",items:[{label:"Pistola + "+js+" balas",price:Bp,disabled:_e,detail:_e?"Voc\xEA j\xE1 tem uma pistola.":"",buy:()=>Qt(Bp)??(_e=!0,ht("pistol",js),In("pistol"),Fe("Pistola comprada."),null)},{label:"Repor muni\xE7\xE3o da pistola",price:0,disabled:!_e||(W==="pistol"?he:le)>=js,detail:"Completa at\xE9 "+js+" balas.",buy:()=>(ht("pistol",js-(W==="pistol"?he:le)),null)}]}]}:u==="black"?{title:"Penhores 24h \xB7 fundos",note:"Mercado negro. Pagamento na hora, sem nota fiscal.",sections:[{title:"Armas",items:[{label:"Fuzil + "+Pc+" balas",price:1200,disabled:ue,detail:ue?"Voc\xEA j\xE1 tem um fuzil.":"Rajada r\xE1pida e dano alto.",buy:()=>Qt(1200)??(ue=!0,ht("rifle",Pc),In("rifle"),Fe("Fuzil comprado."),null)},{label:"Muni\xE7\xE3o de fuzil ("+Pc+")",price:150,disabled:!ue,buy:()=>Qt(150)??(ht("rifle",Pc),null)},{label:"Pistola + "+js+" balas",price:220,disabled:_e,buy:()=>Qt(220)??(_e=!0,ht("pistol",js),In("pistol"),null)}]},{title:"Drogas no atacado (10 unidades)",items:Object.entries(Qs).map(([y,M])=>({label:M.name[0].toUpperCase()+M.name.slice(1)+" \xB7 estoque "+ve[y],price:M.pack,detail:"Venda no varejo por R$ "+M.retail+" a unidade.",buy:()=>Qt(M.pack)??(ve[y]+=10,null)}))}]}:u==="clothes"?{title:"Moda Brasa",note:"Escolha a pe\xE7a e toque em uma cor.",sections:[{title:"Parte de cima",items:[{label:"Camiseta",price:60,active:me.shirt==="tee",colors:kt,buy:y=>Qt(60)??Bt({shirt:"tee",shirtColor:y??me.shirtColor})},{label:"Regata",price:45,active:me.shirt==="tank",colors:kt,buy:y=>Qt(45)??Bt({shirt:"tank",shirtColor:y??me.shirtColor})},{label:"Camisa social",price:120,active:me.shirt==="dress",colors:kt,buy:y=>Qt(120)??Bt({shirt:"dress",shirtColor:y??me.shirtColor})},{label:"Sem camisa",price:0,active:me.shirt==="none",buy:()=>Bt({shirt:"none"})}]},{title:"Parte de baixo",items:[{label:"Cal\xE7a",price:90,active:me.legs==="pants",colors:rn,buy:y=>Qt(90)??Bt({legs:"pants",legColor:y??me.legColor})},{label:"Bermuda",price:60,active:me.legs==="shorts",colors:rn,buy:y=>Qt(60)??Bt({legs:"shorts",legColor:y??me.legColor})}]},{title:"Cal\xE7ados",items:[{label:"T\xEAnis",price:150,active:me.shoes==="sneakers",colors:ei,buy:y=>Qt(150)??Bt({shoes:"sneakers",shoeColor:y??me.shoeColor})},{label:"Chinelo",price:25,active:me.shoes==="flipflops",colors:ei,buy:y=>Qt(25)??Bt({shoes:"flipflops",shoeColor:y??me.shoeColor})},{label:"Sapato social",price:180,active:me.shoes==="dress",buy:()=>Qt(180)??Bt({shoes:"dress"})}]},{title:"Acess\xF3rios",items:[Wn("\xD3culos escuros","glasses",!0,80),Wn("Corrente de prata","chain","silver",250),Wn("Corrente de ouro","chain","gold",900),Wn("Brincos de prata","earrings","silver",120),Wn("Brincos de ouro","earrings","gold",400),Wn("Brincos de diamante","earrings","diamond",1500),Wn("Rel\xF3gio de prata","watch","silver",300),Wn("Rel\xF3gio de ouro","watch","gold",1100),Wn("Anel de prata","ring","silver",150),Wn("Anel de ouro","ring","gold",500)]}]}:u==="barber"?{title:"Barbearia do Z\xE9",note:"Corte e barba. Toque em uma cor para pintar.",sections:[{title:"Pele",items:[{label:"Tom de pele",price:0,colors:ru,buy:y=>Bt({skin:y??me.skin})}]},{title:"Cabelo",items:Object.entries(tu).map(([y,M])=>({label:M,price:y==="cap"?50:40,active:me.hair===y,colors:y==="bald"?void 0:y==="cap"?[1522486,9056042,2236962,2772879,14725949,15789282]:su,buy:U=>Qt(y==="cap"?50:40)??Bt(y==="cap"?{hair:y,capColor:U??me.capColor}:{hair:y,hairColor:U??me.hairColor})}))},{title:"Barba",items:Object.entries(nu).map(([y,M])=>({label:M,price:y==="none"?15:25,active:me.beard===y,buy:()=>Qt(y==="none"?15:25)??Bt({beard:y})}))}]}:{title:"Loja",sections:[]}}function Vp(u){Is.clear(),document.pointerLockElement&&document.exitPointerLock(),qt.show(()=>Gp(u.service))}function $r(){qt.close()}function la(u){let y={...u,ground:k.includes(u)?u.root.position.y:l(u),angle:u.angle},M=f();return D.some(U=>{let{officer:R,car:T,mode:se}=U;return R.health<=0?!1:R.seated&&["driving","patrol","returning"].includes(se)?Hr({...T,ground:T.root.position.y},y,M,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Hr({...R,ground:l(R)},y,M,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function Tu(u,y){if(y<12||q.some(T=>T.calling))return;let M=f(),U={...u,ground:l(u)},R=q.find(T=>["civilian","clerk"].includes(T.role)&&on(T)&&!T.buyer&&!(T.brawl>0)&&oe(T,u)<24&&oe(T,u)>2&&Hr({...T,ground:l(T)},U,M,{range:24,fov:Math.PI*1.3,eye:1.6,aim:1.1}));R&&(R.calling={time:3.6,pressure:y,x:u.x,z:u.z})}function Cs(u,y=ie??h,M=la(y)){if(!M)return Tu(y,u),!1;let U=Cc(lt);return lt=Math.min(64,Math.max(lt+(lt>0?u*.52:0),u)),Ue=!0,xt=.24,_t={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle},U||Fe("Crime visto pela pol\xEDcia."),!0}let Au=()=>ie||l(h)>=1?null:N.find(u=>s.interiorAt(h.x,h.z,l(h))?.buildingId===u.id&&oe(h,u.clerk)<3)??null,Hp={store:"Comprar comida",armory:"Abrir loja de armas",clothes:"Ver roupas",barber:"Cortar cabelo",black:"Negociar nos fundos"},Eu=()=>Ne&&tt&&!ie&&oe(h,Ws.door)<2.6,Dc=()=>ie&&ie!==Wp().find(u=>u===ie)&&oe(ie,Ws.door)<3.4&&Math.hypot(ie.vx,ie.vz)<2,Cu=()=>oe(h,si.home)<1.55,Ru=()=>!ie&&(Cu()||oe(h,{x:Rn.x,z:Rn.z+6.25})<1.7),Iu=()=>k,on=u=>u&&u.health>0&&!u.seated,ca=u=>(u.kind==="bike"?"Moto ":"")+(u.spec?.name??"Carro"),Pu=()=>!ie&&s.doors.find(u=>u.private&&!u.breached&&!u.opened&&Math.abs(u.base-l(h))<.85&&oe(u,h)<1.62);function Lu(){if(l(h)>1.02)return null;let u=null,y=1/0;for(let M of S){let U=oe(h,M),R=M.kind==="bike"?3:Math.max(3,M.halfLength+.6);U>=R||U>=y||M.integrity<=0||M.wrecked||M.burning||Math.abs(M.speed)>3.4||(u=M,y=U)}return u}function Fi(u=!1){if(!ie)return;let{angle:y,x:M,z:U}=ie;if(!u&&Math.hypot(ie.vx,ie.vz)>4.2){Fe("Reduza a velocidade para sair.");return}let R=ie.kind==="bike"?1.02:ie.halfWidth+.67,T=ie.kind==="bike"?1.75:ie.halfLength+.65,se=[R,-R,R+.53,-R-.53].map(fe=>[M+Math.cos(y)*fe,U-Math.sin(y)*fe]);se.push([M-Math.sin(y)*T,U-Math.cos(y)*T],[M+Math.sin(y)*T,U+Math.cos(y)*T]);let ne=se.find(([fe,Ie])=>Vn({x:fe,z:Ie},fe,Ie,s.walkSolids(fe,Ie,0),k,q,.36));if(!ne&&!u){Fe("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=ne??[Yo.x,Yo.z],h.floorY=0,m(h);for(let fe of[...ie.passengers??[]])ir(fe);h.angle=y,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),Ou(),ie.abandoned=0,ie=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,y,0),Ys(h.model,0,0,!1,ce)}function Du(){W==="rifle"?Te=he:le=he;let u={checkpoint:Cu()?"lajes":"brasa",wardrobe:ke,health:h.health,cash:Se,armed:_e,equipped:ce,ammo:le,rifle:ue,rifleAmmo:Te,look:me,stash:{...ve},garage:Ne?{kind:Ne.kind,model:Ne.model,color:Ne.color}:null,recruits:Xt.map(y=>y.id)};return Op(u)}let Wp=()=>D.map(u=>u.car);function Nu(u,y,M){return Ne&&(t.remove(Ne.root),k.splice(k.indexOf(Ne),1),S.splice(S.indexOf(Ne),1)),Ne=u==="bike"?_c(t,M,y):ia(t,y,M),Ne.stolen=!0,k.push(Ne),S.push(Ne),Ne}function Nc(u){oi(u,Ws.inside),u.root.visible=!1,ai(u,0)}function Xp(u){let y=u.kind,M=u.model,U=u.color;if(Fi(!0),u!==Ne){let R=C.indexOf(u);if(R>=0){let{x:T,z:se,angle:ne}=[..._,...A][R];oi(u,{x:T,z:se,angle:ne}),u.stolen=!1,ai(u,0)}else u.routeIndex>=0&&(Gr(u,u.routeIndex),ai(u,0));Nu(y,M,U)}tt=!0,Nc(Ne),Object.assign(h,{x:Ws.door.x-1.6,z:Ws.door.z+1.4,floorY:0}),m(h),Du(),Fe("Ve\xEDculo guardado na garagem e salvo."),ge.bell()}function qp(){Ne&&(tt=!1,oi(Ne,Ws.out),Ne.root.visible=!0,ai(Ne,0),Uc(Ne),Fe("Ve\xEDculo retirado da garagem."))}function Yp(){Fi(!0),Object.assign(h,{x:Rn.x,z:Rn.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0,ragdoll:null}),m(h),Pe=0,lt=0,St=0,ct=-Math.PI/2,ye=!0,Fe("Voc\xEA voltou para casa.")}function Zp(){if(Ot||h.health<=0)return;if(ie&&!Dc()){Fi();return}let u=Au();if(u){Vp(u);return}if(Dc()){Xp(ie);return}if(Eu()){qp();return}if(Ru()){Fe(Du()?"Progresso salvo na porta de casa.":"O navegador bloqueou o salvamento."),ge.bell();return}let y=Lu();if(!y){Fe(Pu()?"Porta trancada.":"Nada para interagir aqui.");return}if(y.driver){let M=H(y)??P.find(U=>U.exitAge>14&&U.role==="civilian"&&oe(U,h)>11);if(M){let U=y.angle+(y.kind==="bike"?-1:1)*Math.PI/2,R=y.x+Math.sin(U)*(y.kind==="bike"?.95:1.51),T=y.z+Math.cos(U)*(y.kind==="bike"?.95:1.51),se=Vn({x:R,z:T},R,T,s.walkSolids(R,T,0),k,q,.29)?{x:R,z:T}:{x:h.x,z:h.z};Ae(M),Object.assign(M,se,{angle:U,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),Math.random()<.35&&(M.fear=0,M.brawl=9,M.attack=1.2),y.rider&&(y.rider.root.visible=!1)}y.driver=null,y.vx=y.vz=y.speed=0,y.doorTime=.65,Ot={car:y,delay:.46},Fe(y.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else Uc(y)}function Uc(u){if(!(u.burning||u.wrecked||u.integrity<=0)){if(ie=u,u.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),Pe=0,h.model.root.visible=!0,h.model.shadow.visible=!1,u.stolen||(u.stolen=!0,Cs(13)),u.passengers??=[],u.kind==="car"){let y=u.spec.seats;Xt.filter(U=>on(U)&&oe(U,u)<35&&U.order!=="dealer").sort((U,R)=>oe(U,u)-oe(R,u)).slice(0,Math.max(0,y.length-1-u.passengers.length)).forEach((U,R)=>{let T=y[Math.min(y.length-1,1+R+u.passengers.length)];U.boardCar=u,U.boardRow=T[1],U.boardSide=Math.sign(T[0])||1})}ct=u.angle,Q=0,ye=!0}}function Fc(u,y,M){let U=new Rt(j,xe[u]),R=l(y)+.13;U.position.set(y.x+.22,R,y.z+.19),t.add(U),Z.push({mesh:U,kind:u,count:M,y:R,wait:.32,left:105})}function Jp(u){for(let y=Z.length-1;y>=0;y--){let M=Z[y];M.left-=u,M.wait-=u,M.mesh.rotation.y+=u*2.1,M.mesh.position.y=M.y+Math.sin(M.left*3.8)*.08;let U=!ie&&h.health>0&&M.wait<0&&Math.abs(l(h)-M.y)<.65&&Math.hypot(h.x-M.mesh.position.x,h.z-M.mesh.position.z)<1.03;U&&(M.kind==="cash"?(Se+=M.count,Fe("R$ "+M.count+" recolhidos.")):!_e&&M.kind==="weapon"?(_e=!0,ht("pistol",M.count),In("pistol"),Fe("Pistola recolhida.")):(ht("pistol",M.count),Fe("+"+M.count+" balas de pistola.")),ge.bell()),(U||M.left<=0)&&(t.remove(M.mesh),Z.splice(y,1))}}function Xn(u,y,M=null){if(u.health<=0||y<=0)return;if(u.health=Math.max(0,u.health-y),u===h&&(h.lastHurt=O),c.blood(u.x,l(u)+1.1,u.z),u.health<=0){let T=M?u.x-M.x:u.pushX,se=M?u.z-M.z:u.pushZ;if(u.fallDir=Math.sin(u.angle)*T+Math.cos(u.angle)*se>0?1:-1,u.deadTime=0,M&&u!==h){let ne=Math.max(.1,Math.hypot(T,se));u.pushX+=T/ne*1.3,u.pushZ+=se/ne*1.3}}if(u===h){Li=.22,M&&Kp(M),u.health<=0&&(Fi(!0),St=3,Fe("Voc\xEA caiu. Voltando para casa\u2026"));return}if(u.stagger=.32,u.fear=u.brawl>0?0:6,u.calling=null,u.buyer=null,u.surrender=0,nn?.npc===u&&(nn=null),u.health>0)return;tn===u&&(tn=null),u.down=u.role==="police"?28:19,u.model.shadow.visible=!1;let U=new Rt(K,ae);U.position.set(u.x+Math.sin(u.angle)*u.fallDir*1,l(u)+.019,u.z+Math.cos(u.angle)*u.fallDir*1),U.rotation.x=-Math.PI/2,U.scale.set(.52,.32,1),t.add(U),u.drop=U,u.role==="police"?Fc(_e?"ammo":"weapon",u,12):u.role!=="ally"&&!u.robbed&&Fc("cash",u,24+Math.floor(Math.abs(u.z)%27)),wn===u&&(wn=null,Mi=29);let R=Xt.indexOf(u);R>=0&&Xt.splice(R,1)}function Kp(u){let y=Math.atan2(u.x-h.x,u.z-h.z)-ct,M=document.createElement("div");M.className="hurt",M.style.transform="rotate("+-y+"rad)",Ve("damage-dir").append(M),window.setTimeout(()=>M.remove(),1100)}function ha(u){return[...q,h].filter(M=>M!==u&&on(M)&&!(M===h&&ie&&ie.kind==="car")).map(M=>{let U=l(M)+(M===h?h.lift:0);return{actor:M,y:U,bounds:[M.x-.31,U+.1,M.z-.31,M.x+.31,U+1.9,M.z+.31]}})}function Uu(){i.getWorldDirection(bt);let u=ha(h),y=f(),M=sa(i.position.toArray(),bt.toArray(),y,u,28).hit,U=[h.x,l(h)+1.38+h.lift,h.z];if(M&&oe(h,M.actor)<24&&Vr(U,[M.actor.x,M.y+1.25,M.actor.z],y))return M.actor;let R=.15,T=null;for(let{actor:ne,y:fe}of u){if(oe(h,ne)>18)continue;Je.set(ne.x,fe+1.25,ne.z).project(i);let Ie=Math.hypot(Je.x,Je.y);Je.z>=1||Ie>=R||!Vr(U,[ne.x,fe+1.25,ne.z],y)||(R=Ie,T=ne)}if(T)return T;let se=k.filter(ne=>ne!==ie&&ne.integrity>0&&oe(h,ne)<32).map(ne=>({car:ne,oriented:{center:[ne.x,ne.root.position.y+.8,ne.z],half:ne.kind==="bike"?[.4,.75,1.1]:[ne.halfWidth+.05,.75,ne.halfLength],angle:ne.angle}}));return sa(i.position.toArray(),bt.toArray(),y,se,34).hit?.car??null}let tr=u=>D.find(y=>y.car===u),Fu=u=>k.includes(u);function zc(u){if(u===ie||u.driver||Pn.has(u)&&u.passengers?.length)return!0;let y=tr(u);return!!(y&&y.officer.seated&&y.officer.health>0&&["driving","patrol"].includes(y.mode))}let nr=u=>!!u&&(Fu(u)?u!==ie&&u.integrity>0&&zc(u):on(u));function zi(u){if(u){if(Fu(u)){u!==ie&&u.integrity>0&&zc(u)&&(tn=u);return}u.role!=="ally"&&u.health>0&&(tn=u)}}function Rs(u,y,M){let U=tr(u),R=U&&U.officer.seated&&["driving","patrol"].includes(U.mode)?U:null,T=R?.officer??(u.driver?H(u):null);if(!T)return!1;R||Ae(T);let se=u.angle+(u.kind==="bike"?-1:1)*Math.PI/2,ne=u.kind==="bike"?.95:u.halfWidth+.6;return Object.assign(T,{seated:!1,x:u.x+Math.sin(se)*ne,z:u.z+Math.cos(se)*ne,fear:6,exitAge:0,floorY:0}),T.model.root.visible=!0,T.model.shadow.visible=!0,u.driver=null,u.vx*=.45,u.vz*=.45,u.speed*=.45,u.rider&&(u.rider.root.visible=!1),R&&(R.mode="foot"),Xn(T,y,M),!0}function zu(u,y){if(!y||!u.flat)return!1;let M=Math.sin(u.angle),U=Math.cos(u.angle),R=y[0]-u.x,T=y[2]-u.z,se=R*U-T*M,ne=R*M+T*U,fe=y[1]-u.root.position.y,Ie=!1;return u.wheels.forEach((ze,je)=>{!u.flat[je]&&fe<u.wheelRadius*2+.1&&Math.hypot(se-ze.position.x,ne-ze.position.z)<u.wheelRadius+.2&&(u.flat[je]=!0,Ie=!0)}),Ie}function $p(u,y,M,U){if(u.lastHitBy=M,y<u.wheelRadius*2&&zu(u,U)){u===ie&&Fe("Pneu furado.");return}if(U&&c.sparks(U[0],U[1],U[2],4,2),u.kind==="bike"){if(y>.85||Math.random()<.45){u===ie?(Xn(h,14,M),h.health>0&&Math.random()<.3&&(Fi(!0),h.trip=.6,Fe("Voc\xC3\xAA caiu da moto."))):Rs(u,40,M);return}u.integrity=Math.max(0,u.integrity-4);return}if(y>.92){if(pu(u,U),u===ie){let R=(u.passengers??[]).filter(se=>se.health>0),T=R.length&&Math.random()<R.length/(R.length+1.6)?R[Math.floor(Math.random()*R.length)]:h;Xn(T,T===h?16:24,M),T===h&&Fe("Tiro atravessou o vidro.")}else Rs(u,38+Math.round(Math.random()*30),M);return}u.integrity=Math.max(0,u.integrity-3)}function jp(u,y){let M=Math.sin(u.angle),U=Math.cos(u.angle),R=y.boardRow??-1,T=u.halfWidth+.55;for(let se of[y.boardSide??1,-(y.boardSide??1)]){let ne={x:u.x+U*se*T+M*R,z:u.z-M*se*T+U*R};if(Vn(y,ne.x,ne.z,s.walkSolids(ne.x,ne.z,0),[],[],.3))return ne}return{x:u.x-M*(u.halfLength+.7),z:u.z-U*(u.halfLength+.7)}}let Pn=new Map;function Qp(u){let y=S.filter(U=>U.kind==="car"&&U!==ie&&!U.burning&&!U.wrecked&&U.integrity>12&&Math.abs(U.speed)<3&&(!tt||U!==Ne)&&!U.shopping&&(U.passengers?.length??0)+Xt.filter(R=>R.boardCar===U).length<U.spec.seats.length);y.sort((U,R)=>oe(u,U)-oe(u,R));let M=y[0];M&&(Pn.has(M)||Pn.set(M,{car:M,stall:0}),u.boardCar=M,u.boardSide=Math.sign(M.spec.seats[0][0]),u.boardRow=M.spec.seats[0][1],M.passengers??=[])}function Ou(){for(let u of Pn.keys()){for(let y of[...u.passengers??[]])ir(y);for(let y of Xt)y.boardCar===u&&(y.boardCar=null);u.speed=u.vx=u.vz=0}Pn.clear()}function em(u,y){let M=u.boardCar;if(!ie||ie!==M&&!Pn.has(M)||M.burning||M.integrity<=0||(M.passengers?.length??0)>=M.spec.seats.length-(M===ie?1:0))return u.boardCar=null,0;if(Math.hypot(M.vx,M.vz)>2.5){let we=Wu(M,Xt.indexOf(u));return oe(we,u)>1.25?Oc(u,we,6.1,y):0}let U=jp(M,u),R=Math.sin(M.angle),T=Math.cos(M.angle),se=u.x-M.x,ne=u.z-M.z,fe=se*R+ne*T,Ie=se*T-ne*R,ze=(U.x-M.x)*T-(U.z-M.z)*R;if(oe(u,U)<.75||oe(u,M)<M.halfWidth+.9||Math.abs(Ie)>M.halfWidth+.2&&Math.abs(Ie)<M.halfWidth+1&&Math.abs(fe)<M.halfLength-.55)return u.seated=!0,u.riding=M,u.boardCar=null,u.model.root.visible=!1,Pn.has(M)&&M.driver&&Rs(M,0,u),M.passengers.push(u),M.doorTime=.6,0;if(Math.abs(Ie)>=M.halfWidth+.45)return u.boardSide=Math.sign(Ie),Mn(u,U,4.8,y);let je=Math.sign(ze)||1,Ze=(Math.sign(fe)||1)*Math.max(M.halfLength+.65,Math.abs(fe)),Be=M.halfWidth+.68;return Mn(u,{x:M.x+R*Ze+T*je*Be,z:M.z+T*Ze-R*je*Be},4.8,y)}function ir(u){let y=u.riding;if(u.riding=null,u.boardCar=null,!y)return;y.passengers=(y.passengers??[]).filter(fe=>fe!==u);let M=Math.sin(y.angle),U=Math.cos(y.angle),R=y.halfWidth+.62,T=y.halfLength+.9,se=[[R,-1],[-R,-1],[R,.6],[-R,.6],[0,-T],[R+.7,0],[-R-.7,0],[0,T]].map(([fe,Ie])=>({x:y.x+U*fe+M*Ie,z:y.z-M*fe+U*Ie})),ne=se.find(fe=>Vn(u,fe.x,fe.z,s.walkSolids(fe.x,fe.z,0),k.filter(Ie=>Ie!==y),q,.3))??se[0];Object.assign(u,ne,{seated:!1,floorY:0,angle:y.angle,exitAnim:.3,exitSide:1}),m(u),u.model.root.visible=!0,u.model.shadow.visible=!0}function Bu(u){for(let y of k){if(y.kind!=="car")continue;let M=y===ie||oe(y,u)<40,U=tr(y),R=U&&U.officer.seated&&U.officer.health>0&&["driving","patrol"].includes(U.mode)?U.officer:null,T=y.ownDriver?.seated&&y.driver&&y!==ie?y.ownDriver:null,se=y===ie?h:R??T;(Pn.has(y)&&y.passengers?.length?y.passengers:[se,...y.passengers??[]]).forEach((ne,fe)=>{ne&&(M?Mp(ne.model,y,fe):ne.model.root.visible=!1)})}}function tm(u){for(let y of Xt){if(!y.riding)continue;let M=y.riding;if(!ie||ie!==M&&!Pn.has(M)||y.health<=0){ir(y);continue}y.x=M.x,y.z=M.z,y.floorY=0,y.attack-=u;let U=nr(y.commandTarget)?y.commandTarget:tn;nr(U)&&y.attack<=0&&oe(M,U)<18&&Gu(y,U)}}function nm(u,y){let M=f(),U={...u,ground:l(u)};for(let R of D){let T=R.officer;on(T)&&(T===y||Hr({...T,ground:l(T)},U,M,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(R.retaliation=u)}}function im(u){if(!u||!["civilian","resident"].includes(u.role)||u.health<=0){Fe("Mire em um pedestre dispon\xEDvel para recrutar.");return}u.role="ally",u.order="follow",u.surrender=0,u.fear=0,u.route=[],Xt.push(u),nn?.npc===u&&(nn=null),Fe("Guarda-costas recrutado."),ge.bell()}function sm(u,y){if(h.health<=0||!y||!["civilian","resident","clerk"].includes(y.role)||y.robbed||oe(h,y)>9||Math.abs(l(h)-l(y))>.65){nn&&(nn.npc.surrender=0,nn=null);return}let M=h.x-y.x,U=h.z-y.z,R=Math.sin(y.angle)*M+Math.cos(y.angle)*U;if(nn?.npc!==y){if(nn&&(nn.npc.surrender=0),nn=null,R<Math.hypot(M,U)*.3||y.stagger>0||y.fear>0)return;nn={npc:y,left:5}}y.surrender=1,y.angle=Math.atan2(M,U),nn.left-=u,nn.left<=0&&(y.robbed=!0,y.surrender=0,y.fear=7,Fc("cash",y,(y.role==="clerk"?104:38)+Math.floor(Math.abs(y.z)%31)),Cs(15),Fe(y.role==="clerk"?"Dinheiro da loja no ch\xE3o.":"Dinheiro no ch\xE3o."),nn=null)}function rm(){h.ragdoll||vn>0||h.health<=0||h.trip>.15||Ot||(h.angle=ct,Jr=1-Jr,h.pushX+=Math.sin(ct)*1.5,h.pushZ+=Math.cos(ct)*1.5,vn=Xr,As=!0,Es=$s,zi(Qn),ge.punch(!1))}function om(){if(As=!1,h.health<=0||ie)return;let u=Ip(h,q.filter(R=>on(R)&&R.role!=="ally"&&Math.abs(l(h)-l(R))<.73),l(h)+h.lift,f());if(!u)return;zi(u),ge.punch(!0);let y=u.x-h.x,M=u.z-h.z,U=Math.max(.2,Math.hypot(y,M));u.pushX=y/U*3.6,u.pushZ=M/U*3.6,Xn(u,18,h),u.role==="civilian"&&u.health>0&&!(u.brawl>0)&&Math.random()<(u.model.root.scale.x>1.05?.6:.32)&&(u.brawl=10,u.fear=0,u.attack=.4,zi(u),Fe("Ele vai revidar!")),bi=.19,Cs(u.role==="police"?28:12),Fe(u.health<=0?"Pedestre derrubado.":"Soco acertou.")}function am(u){if(h.ragdoll||vn>0||Ft>0||h.health<=0||!_e||!ce)return;if(he<=0){u&&zi(Qn),Ft=.32,Fe("Sem balas. Reponha na loja.");return}let y=la(h),M=W==="rifle";he--,Ft=M?.11:.52,De=.095,h.angle=ct,h.model.root.rotation.y=ct,Ys(h.model,0,0,!0,!0,0,u?Xe:Xe-.22),(M?h.model.rifleMuzzle:h.model.muzzle).getWorldPosition(ft),M?ge.rifle():ge.shot();let U=ha(h),R=k.map(we=>{let ut=we.root.position.y,Pt=we.kind==="bike",Yt=Pt?0:.1,gn=Pt?0:we.spec.belt;return{car:we,oriented:{center:[we.x,ut+(Pt?.67:(Yt+gn)/2),we.z],half:Pt?[.31,.44,1.08]:[we.halfWidth-.01,(gn-Yt)/2,we.halfLength-.05],angle:we.angle}}});i.getWorldDirection(bt);let T=k.filter(we=>we.rider&&we.driver).map(we=>({rider:we,oriented:{center:[we.x,we.root.position.y+1.42,we.z],half:[.32,.45,.33],angle:we.angle}})),se=k.filter(we=>we.cabin&&we!==ie).map(we=>{let ut=bp(we);return{windowCar:we,oriented:{center:[we.x+ut.z*Math.sin(we.angle),we.root.position.y+ut.y,we.z+ut.z*Math.cos(we.angle)],half:[ut.halfX,ut.halfY,ut.halfZ],angle:we.angle}}}),ne=f(),fe=[...U,...T,...se,...R],Ie=ft.toArray(),ze=Rp(i.position.toArray(),bt.toArray(),Ie,ne,fe,{ground:On}),je=ze.impact,re=je.hit,Ze=s.doors.find(we=>we.private&&!we.breached&&je.solid===we.closedSolid&&Math.hypot(je.point[0]-we.handle.x,je.point[1]-we.handle.y,je.point[2]-we.handle.z)<.28),Be=17;if(Ze&&s.breachDoor(Ze.id))Be=23,Fe("Fechadura rompida.");else if(re?.actor&&re.actor.role!=="ally")zi(re.actor),Xn(re.actor,Math.round(bu(je.point[1]-re.y)*(M?1.45:1)),h),Be=re.actor.role==="police"?34:23,bi=.21,Fe(re.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(re?.rider||re?.windowCar){let we=re.rider??re.windowCar;zi(we),re.windowCar&&pu(we,je.point);let[ut,Pt]=we.spec.seats?.[0]??[-.42,0],Yt={oriented:{center:[we.x+ut*Math.cos(we.angle)+Pt*Math.sin(we.angle),we.root.position.y+(we.seatHip??.54)+.66,we.z-ut*Math.sin(we.angle)+Pt*Math.cos(we.angle)],half:[.26,.28,.29],angle:we.angle}};zc(we)&&(re.rider||sa(Ie,ze.direction,[],[Yt],52).hit)&&Rs(we,re.rider?M?75:50:100,h)&&(bi=.21)}else re?.car?(zi(re.car),re.car.lastHitBy=h,c.sparks(je.point[0],je.point[1],je.point[2],5,2.2),zu(re.car,je.point)?Fe("Pneu furado."):re.car.integrity=Math.max(0,re.car.integrity-3),bi=.16):u&&zi(Qn);Cs(Be,h,y);for(let we of q)["civilian","resident"].includes(we.role)&&oe(we,h)<17&&(we.fear=Math.max(we.fear,4.8));a.emit(Ie,je,{mark:re?.car?!0:void 0,attach:re?.car?.root})}function lm(u,y){let M=ie;yi(M,u,{throttle:y.y,steer:-y.x,brake:y.brake},r,Iu()),Q>1.15&&Math.abs(M.speed)>2.4&&(ct=zn(ct,M.angle,u*2.3))}function cm(u,y){if(h.ragdoll&&(vc(h,u,l(h),(Ie,ze)=>!Fn(Ie,ze,.25,d(h))),h.ragdoll||h.health<=0))return;let M=Math.min(1,Math.hypot(y.x,y.y)),U=h.health>0&&!Ot&&h.trip<.12,R=U?M*(y.aim?2.1:y.run?7.4:4.2):0,T=ct+Math.atan2(-y.x,y.y||0);y.jump&&U&&h.lift===0&&(Pe=4.18),(Pe!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+Pe*u-11.8*u*u),Pe=h.lift>0?Pe-23.6*u:0);let se=1-Math.exp(-u*(R>.02?19:27));h.vx+=(Math.sin(T)*R-h.vx)*se,h.vz+=(Math.cos(T)*R-h.vz)*se;let ne=mc(h,(h.vx+h.pushX)*u,(h.vz+h.pushZ)*u,d(h),p(h),q);h.pushX*=Math.exp(-u*6.2),h.pushZ*=Math.exp(-u*6.2),h.trip=Math.max(0,h.trip-u),vn<=0&&U&&(y.aim||M>.05)&&(h.angle=zn(h.angle,y.aim?ct:T,u*11));let fe=h.model;if(m(h),fe.root.position.set(h.x,l(h)+h.lift,h.z),fe.shadow.visible=h.health>0&&h.lift<.06,h.health<=0){h.deadTime=(h.deadTime??0)+u;let Ie=$o(fe,h.deadTime,-1);fe.root.rotation.set(Ie,h.angle,0),fe.root.position.y+=Math.abs(Math.sin(Ie))*.31;return}fe.root.rotation.set(Math.min(1.25,h.trip*2.7),h.angle,0),Ys(fe,u,h.trip>.05?0:Math.min(7.5,ne/u),ce&&(y.aim||De>0)&&vn<=0,ce&&vn<=0,0,y.aim?Xe:0),(vn>0||y.aim&&!ce)&&Mu(fe,{aim:y.aim,punch:vn,pitch:Xe,walking:ne>.01,hand:Jr}),ne&&zt<=0&&h.lift===0&&(ge.step(),zt=y.run?.27:.41)}function ku(u){let y=Math.sin(u.angle),M=Math.cos(u.angle),U=u.halfWidth+.68;return[{x:u.x-M*U,z:u.z+y*U},{x:u.x+M*U,z:u.z-y*U}].find(R=>Vn(R,R.x,R.z,s.walkSolids(R.x,R.z,0),k,q,.38))}function hm(u,y,M){let U=Math.sin(y.angle),R=Math.cos(y.angle);if(!M)return null;if(![.28,.5,.73,.92].some(fe=>{let Ie=u.x+(M.x-u.x)*fe,ze=u.z+(M.z-u.z)*fe,je=Ie-y.x,re=ze-y.z;return Math.abs(je*U+re*R)<y.halfLength+.35&&Math.abs(je*R-re*U)<y.halfWidth+.35}))return M;let se=((u.x-y.x)*U+(u.z-y.z)*R>0?1:-1)*(y.halfLength+.8),ne=(M.x-y.x)*R-(M.z-y.z)*U;return{x:y.x+U*se+R*ne,z:y.z+R*se-U*ne}}function um(u){let y=u.officer,M=u.car,U=Math.sin(M.angle),R=Math.cos(M.angle),T=M.halfLength+.7,se=ku(M)??[{x:M.x-U*T,z:M.z-R*T},{x:M.x+U*T,z:M.z+R*T}].find(ne=>Vn(ne,ne.x,ne.z,s.walkSolids(ne.x,ne.z,0),k,q,.37));return se?(y.seated=!1,y.model.root.visible=!0,y.x=se.x,y.z=se.z,y.floorY=0,m(y),y.angle=M.angle,y.exitAnim=.38,y.model.shadow.visible=!0,M.doorTime=.65,u.mode="foot",!0):!1}function Gu(u,y){let M=k.includes(y)?y:null;if(oe(u,y)>18||oe(u,y)<.5||(M?M.integrity<=0:!on(y)))return!1;let U=l(u),R=(M?M.root.position.y:l(y))+(y===h?h.lift:0)+(M?1.08:1.27),T=f();if(!Vr([u.x,U+1.35,u.z],[y.x,R,y.z],T))return!1;u.angle=Math.atan2(y.x-u.x,y.z-u.z),u.model.root.position.set(u.x,U,u.z),u.model.root.rotation.y=u.angle;let se=Math.atan2(U+1.42-R,Math.max(.4,oe(u,y)));Ys(u.model,0,0,!0,!0,0,se),u.model.muzzle.getWorldPosition($e);let ne=O*14+u.x,fe=Math.sin(ne)*(u.role==="ally"?.35:.48),Ie=y.x+Math.cos(u.angle)*fe,ze=y.z-Math.sin(u.angle)*fe;Dt.set(Ie,R+Math.cos(ne*1.4)*.32,ze);let je=Math.min(24,$e.distanceTo(Dt)+1.65),re=Wt.subVectors(Dt,$e).normalize(),Ze=ha(u);M&&Ze.push({actor:M,y:0,bounds:[y.x-.93,.3,y.z-1.02,y.x+.93,1.52,y.z+1.02]});let Be=wc($e.toArray(),re.toArray(),T,Ze,je,{ground:On});if(u.role==="ally"&&(y.role==="police"||tr(y)||Be.hit?.actor.role==="police")&&nm(u,Be.hit?.actor),Be.hit&&(Be.hit.actor===y||Be.hit.actor.role==="civilian")){let we=u.role==="police"&&y===h?.62:.83;if(M&&Be.hit.actor===M){let ut=[$e.x+re.x*Be.distance,$e.y+re.y*Be.distance,$e.z+re.z*Be.distance];$p(M,ut[1]-M.root.position.y,u,ut)}else Xn(Be.hit.actor,Math.round(bu($e.y+re.y*Be.distance-Be.hit.y)*we),u)}Dt.copy($e).addScaledVector(re,Be.distance),u.role!=="ally"&&(y===h||y===ie||ip($e,Dt,ie??h))&&zi(u),a.emit($e.toArray(),Be,{enemy:!0});for(let we of q)["civilian","clerk"].includes(we.role)&&!(we.brawl>0)&&oe(we,u)<16&&(we.fear=Math.max(we.fear,4.5));return u.attack=(u.role==="police"?.91:1.07)+(Math.sin(ne)+1)*.18,oe(u,ie??h)<31&&ge.shot(),!0}function ua(u,y,M){let U=oe(u,y);return u.stagger>0||u.exitAnim>0?{speed:0,aim:!1}:U<17&&u.attack<=0&&Gu(u,y)||u.attack>.28&&U<15.5?(u.angle=zn(u.angle,Math.atan2(y.x-u.x,y.z-u.z),M*12),{speed:0,aim:!0}):{speed:U>3.3||Math.abs(l(u)-l(y))>1.8?Oc(u,y,4.4,M):0,aim:U<12}}function dm(u,y){if(Mi-=y,wn){Mi<=0&&(wn.role="civilian",wn.fear=4,wn=null,Mi=37);return}if(Mi>0)return;let M=w.find(U=>U.role==="civilian"&&on(U)&&oe(U,u)>14&&oe(U,Qi)<55);if(!M){Mi=8;return}M.role="rogue",wn=M,Mi=63,M.attack=.1}let da=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function Vu(u){let y={kind:"car",shape:u.car.shape};return Gr(y,u.route,u.startShift),y}function fa(u,y=!0){let{car:M,officer:U}=u;if(y){let R=Vu(u);oi(M,R),M.driver=R.driver}else{let R={};Gr(R,u.route),M.driver=R.driver;let T=Math.sin(M.angle),se=Math.cos(M.angle),ne=1/0;M.driver.route.forEach((fe,Ie)=>{let ze=fe.x-M.x,je=fe.z-M.z,re=Math.hypot(ze,je)+(ze*T+je*se<0?16:0);re<ne&&(ne=re,M.driver.next=Ie)})}u.mode="patrol",u.retaliation=null,u.stop=null,u.departing=!1,U.seated=!0,U.model.root.visible=!1,ai(M,0)}function fm(u,y){let M=u.officer,U=da[u.beat%da.length];oe(M,U)<1.1&&(u.beat++,U=da[u.beat%da.length]),u.intent=Mn(M,U,1.35,y)}function pm(u,y){xt-=u,xt<=0&&lt>0&&(Ue=la(y),Ue&&(_t={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle}),xt=.24);let M=lt>0&&h.health>0?Ue?y:_t:wn,U=M===wn?wn?1:0:Cc(lt);lt>0&&(lt=Math.max(0,lt-u*(Ue?.23:1.1)),lt===0&&(_t=null,Ue=!1,Fe("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),D.forEach((R,T)=>{let se=R.officer,ne=R.car;R.retaliation&&!on(R.retaliation)&&(R.retaliation=null);let fe=R.retaliation,Ie=fe??M,ze=!!(fe||M&&T<U);if((ne.burning||ne.wrecked)&&se.health>0&&(R.mode="foot",se.seated=!1),se.health<=0){R.mode="disabled",ne.driver=null,se.down<=0&&oe(se,y)>13&&k.every(re=>re===ne||oe(re,R.berth)>3.5)&&(Ae(se),oi(ne,R.berth),ai(ne,0),R.mode="ready",R.retaliation=null);return}if(R.mode==="patrol"&&(ze||ne.integrity<=0)&&(R.mode="driving",ne.driver=null,R.stop=null,R.stall=0,R.departing=!1),R.mode==="patrol")return;if(fe&&(R.mode==="ready"||R.mode==="boarding"||R.mode==="reboard")&&(R.mode="foot"),R.mode==="ready"&&ze){let re=ne.integrity>0&&oe(se,ne)<22;R.mode=re?"boarding":"foot",R.stop=null,R.stall=0,R.departing=re&&oe(ne,R.berth)<2}if(R.mode==="boarding"||R.mode==="reboard"){R.mode==="boarding"&&!ze&&(R.mode="reboard"),R.mode==="reboard"&&ze&&(R.mode="boarding");let re=ku(ne);ne.burning||ne.wrecked||ne.integrity<=0||oe(se,ne)>45?R.mode=ze?"foot":"ready":re&&oe(se,re)<.63?(se.seated=!0,se.model.root.visible=!1,ne.doorTime=.6,R.mode==="reboard"?fa(R,!1):R.mode="driving"):re&&(R.intent=Mn(se,hm(se,ne,re),R.mode==="boarding"?3.75:1.8,u))}if(R.mode==="driving"){if(!ze&&ne.integrity>0&&!R.departing){fa(R,!1);return}let re=Ie?oe(ne,Ie):1/0;!ze||ne.integrity<=0||R.stall>8.2&&!R.maneuver||re<12.7&&!(Ie===ie&&Math.abs(ie.speed)>6)?(yi(ne,u,{throttle:0,steer:0,brake:!0},r,k),Math.hypot(ne.vx,ne.vz)<2.7&&!um(R)&&ne.integrity>0&&yi(ne,u,{throttle:.21,steer:.26,brake:!1},r,k)):wu(R,Ie,r,k,q,u)}else if(R.mode==="foot")ze&&Ie===_t?R.intent=Mn(se,Ie,3.45,u):ze?R.combat=ua(se,Ie,u):ne.integrity>0&&oe(se,ne)<40?R.mode="reboard":(R.mode="ready",oe(y,ne)>25&&k.every(re=>re===ne||oe(re,R.berth)>3.5)&&(oi(ne,R.berth),ai(ne,0)));else if(R.mode==="ready"){let re=T<2&&oe(y,se)>24&&oe(y,R.berth)>19&&oe(se,R.berth)<30?Vu(R):null;re&&xu(re,k.filter(Ze=>Ze!==ne),y,r)?fa(R):fm(R,u)}let je=R.mode==="driving"||ze&&R.mode==="foot";ne.lamps.forEach((re,Ze)=>{re.visible=!je||Math.floor(O*8+Ze)%2===0}),je&&J<=0&&oe(y,ne)<42&&(ge.siren(),J=1.35)})}let jr=(u,y,M)=>({x:u.x+Math.cos(u.angle)*y+Math.sin(u.angle)*M,z:u.z-Math.sin(u.angle)*y+Math.cos(u.angle)*M}),Hu=!1;function mm(u,y){for(let M of k){let U=oe(M,y)<60,R=M.kind==="bike",T=M.root.position.y,se=M.lastImpact??0;if(M.impact>3.4&&M.impact>se+1.5){let re=(M.lastSpeed??M.speed)>=0?1:-1,Ze=jr(M,0,re*(M.halfLength??1.1));U&&c.sparks(Ze.x,T+.45,Ze.z,8+Math.round(M.impact*2),3+M.impact*.3),R||(re>0?M.damageFront+=M.impact*1.7:M.damageRear+=M.impact*1.7)}M.lastImpact=M.impact,M.lastSpeed=M.speed;for(let re of M.bumpers??[]){let Ze=re.end>0?M.damageFront:M.damageRear;if(re.state===0&&Ze>22&&(re.state=1),re.state===1&&Ze>48&&(re.state=2,t.attach(re.mesh),re.velocity.set(M.vx*.5+(Math.random()-.5),1.4,M.vz*.5+(Math.random()-.5)),re.spin=(Math.random()-.5)*5),re.state===2){let Be=re.mesh;Be.position.addScaledVector(re.velocity,u),re.velocity.y-=9.8*u;let we=On(Be.position.x,Be.position.z)+.15;Be.position.y<we?(Be.position.y=we,re.velocity.y=0,re.velocity.x*=Math.exp(-u*5),re.velocity.z*=Math.exp(-u*5),re.spin*=Math.exp(-u*5),Be.rotation.x+=(0-Be.rotation.x)*Math.min(1,u*8),Be.rotation.z+=(0-Be.rotation.z)*Math.min(1,u*8)):Be.rotation.x+=re.spin*u*.6,Be.rotation.y+=re.spin*u}}if(M.wrecked){M.wreckClock=(M.wreckClock??0)+u,U&&M.wreckClock<30&&Math.random()<u*5&&c.engineSmoke(M.x,T+1.1,M.z,!0);continue}let ne=jr(M,0,R?.35:M.halfLength-.75),fe=T+(R?.65:M.spec.belt+.1);if(M.integrity<45&&U&&Math.random()<u*(M.integrity<22?14:6)&&c.engineSmoke(ne.x,fe,ne.z,M.integrity<22),!M.burning&&M.integrity<=12){M.speed=0,M.vx=0,M.vz=0,M===ie&&Fi(!0);for(let re of[...M.passengers??[]])ir(re);(M.driver||tr(M)?.officer.seated)&&Rs(M,0,M),M.driver=null,M.burning=!0,M.fire=R?4.5:7,oe(M,h)<4&&Fe("O ve\xC3\xADculo pegou fogo! Saia j\xC3\xA1.")}if(M.burning){if(M.fire-=u,M.integrity=Math.min(M.integrity,12),U)for(let re=0;re<2;re++)c.flame(ne.x,fe,ne.z,R?.7:1.1);M.fire<=0&&gm(M);continue}let Ie=Math.hypot(M.vx,M.vz),ze=Math.abs(M.vx*Math.cos(M.angle)-M.vz*Math.sin(M.angle)),je=M===ie&&Hu&&Ie>8;if(Ie>4&&(ze>2.6||je)){let re=-(M.wheelbase??1.5)/2,Ze=R?[jr(M,0,re)]:[jr(M,-(M.halfWidth-.17),re),jr(M,M.halfWidth-.17,re)];M.skid??=Ze.map(Be=>({...Be})),oe(M.skid[0],Ze[0])>.45&&(Ze.forEach((Be,we)=>{c.skid(M.skid[we].x,M.skid[we].z,Be.x,Be.z,On(Be.x,Be.z)),M.skid[we]={...Be}}),U&&ze>3.5&&c.tireSmoke(Ze[0].x,T+.2,Ze[0].z))}else M.skid=null}}function gm(u){let y={x:u.x,z:u.z},M=u.root.position.y;u===ie&&(Fi(!0),Xn(h,100,y));for(let U of[...u.passengers??[]])ir(U),Xn(U,100,y);(u.driver||tr(u)?.officer.seated)&&Rs(u,100,y),u.burning=!1,u.wrecked=!0,u.integrity=0,u.driver=null,u.wreckClock=0,u.rider&&(u.rider.root.visible=!1),vp(u),c.explosion(u.x,M,u.z),ge.explosion(),oe(u,ie??h)<25&&(Li=.35);for(let U of[...q,h]){if(U.seated||U===h&&ie)continue;let R=oe(U,y);if(R>7.5)continue;let T=1-R/7.5,se=Math.max(.2,R),ne=(U.x-y.x)/se,fe=(U.z-y.z)/se;yc(U,ne*(4+8*T),3+5*T,fe*(4+8*T)),Xn(U,Math.round(115*T),y)}for(let U of k){if(U===u||U.wrecked)continue;let R=oe(U,y);if(R>7)continue;let T=1-R/7,se=Math.max(.2,R);U.integrity=Math.max(0,U.integrity-48*T),U.vx+=(U.x-y.x)/se*9*T/(U.handling?.mass??1),U.vz+=(U.z-y.z)/se*9*T/(U.handling?.mass??1),U.damageFront+=18*T,U.damageRear+=18*T}for(let U of q)oe(U,y)<35&&["civilian","resident"].includes(U.role)&&(U.fear=Math.max(U.fear,6));u.lastHitBy===h&&Cs(28,h)}function xm(u,y){let M={player:ie,vehicles:Iu()},U=D.filter(R=>R.mode==="patrol").map(R=>R.car);for(let[R,T]of Pn){if(!ie||R.wrecked||R.burning){for(let se of[...R.passengers])ir(se);Pn.delete(R);continue}R.passengers?.length&&(oe(R,ie)>8?wu(T,ie,r,k,q.filter(se=>!se.seated),u):yi(R,u,{throttle:0,steer:0,brake:!0},r,k))}Ep([...E.filter(R=>!Pn.has(R)&&!R.shopping),...U],M,q,r,u,g,s.signals),C.forEach((R,T)=>{if(R.wrecked&&(R.wreckClock??0)>40&&oe(y,R)>40){let{x:se,z:ne,angle:fe}=[..._,...A][T];oe(y,{x:se,z:ne})>40&&(oi(R,{x:se,z:ne,angle:fe}),R.stolen=!1)}});for(let R of C)Pn.has(R)||(R!==ie&&Math.hypot(R.vx,R.vz)>.06?yi(R,u,{throttle:0,steer:0,brake:!0},r,M.vehicles):R!==ie&&(R.impact=Math.max(0,R.impact-u*21)));for(let R of k){if(R.routeIndex>=0&&R!==ie&&!Pn.has(R)&&!R.shopping){R.abandoned+=u;let T=!R.driver&&R.abandoned>25||R.wrecked&&(R.wreckClock??0)>30,se=!R.wrecked&&R.integrity<=0||(R.driver?.stuck??0)>13;if((T||se)&&!R.burning&&oe(y,R)>17){let ne={};if(Gr(ne,R.routeIndex),ne.kind=R.kind,ne.shape=R.shape,xu(ne,M.vehicles.filter(fe=>fe!==R),y,r)){Object.assign(R,ne);let fe=R.ownDriver;fe&&!fe.seated&&!fe.riding&&fe.role==="civilian"&&oe(fe,y)>20&&(Ae(fe),fe.seated=!0,fe.model.root.visible=!1)}}}R!==ie&&R.impact>5&&oe(y,R)<18&&pt<=0&&(ge.crash(),pt=.32),ai(R,u,R.steer),R.rider&&(R.rider.root.visible=!!R.driver&&R.integrity>0,R.rider.root.visible&&hu(R.rider,R))}if(ie){if(ie.impact>4.1&&pt<=0){ge.crash(),Li=.24,pt=.36;let R=ie,T=R.impact;Fe(R.integrity<43?"Motor avariado.":"Colis\xE3o."),ie&&R.kind==="bike"&&T>10.5&&(Xn(h,Math.min(40,Math.round(T*1.6))),R.integrity=Math.max(0,R.integrity-4),Fi(!0),Fe("Voc\xEA caiu da moto."))}if(ie&&ie.integrity<=0&&Math.hypot(ie.vx,ie.vz)<3){let R=ca(ie);Fi(!0),Fe(R+" sem condi\xE7\xF5es de rodar.")}}}function Mn(u,y,M,U){if(!y)return 0;u.walkIntent=y;let R=d(u),T=oe(u,y);if(T<.13)return 0;let se=s.interiorAt(u.x,u.z,l(u)),ne=s.interiorAt(y.x,y.z,y.y??l(y));if(!se&&!ne)return o(u,y,M,U);let fe=y,Ie=(re,Ze)=>[.24,.46,.68,.88,1].every(Be=>Fn(re.x+(Ze.x-re.x)*Be,re.z+(Ze.z-re.z)*Be,.29,R));if(!Ie(u,y)){let re=1/0;for(let Ze of R)if(!(oe(u,Ze)>Math.hypot(Ze.w,Ze.d)*.5+3.1))for(let Be of[-1,1])for(let we of[-1,1]){let ut={x:Ze.x+Be*(Ze.w*.5+.44),z:Ze.z+we*(Ze.d*.5+.44)},Pt=oe(u,ut),Yt=oe(ut,y);if(Pt<.3||Pt>4.5||!Ie(u,ut))continue;let gn=Pt+Yt+(Yt>T+.25?1.7:0);gn<re&&(re=gn,fe=ut)}}let ze=Math.atan2(fe.x-u.x,fe.z-u.z);u.angle=zn(u.angle,ze,U*8.5);let je=Math.min(M*U,oe(u,fe));return Zo(u,u.x+Math.sin(ze)*je,u.z+Math.cos(ze)*je,.26,R)?M:0}let ss={x:NaN,z:NaN,angle:0};function Wu(u,y){let M=l(u);if(s.interiorAt(u.x,u.z,M))return{x:u.x,z:u.z,y:M};let U=Math.floor((Math.sqrt(1+y)-1)*.75),R=(y%2===0?1:-1)*(1.05+y%5*.66),T=(k.includes(u)?u.halfLength+3.2:3.1)+U*1.1,se=u===h?ss.angle:u.angle,ne=Math.sin(se),fe=Math.cos(se);for(let[Ie,ze]of[[T,R],[T,R*.38],[T,0],[1.6,0],[0,R*.5]]){let je=u.x-ne*Ie+fe*ze,re=u.z-fe*Ie-ne*ze;if(Vn(u,je,re,s.walkSolids(je,re,M),k,[],.44))return{x:je,z:re,y:M}}return{x:u.x,z:u.z,y:M}}function Oc(u,y,M,U){let R=s.interiorAt(u.x,u.z,l(u)),T=s.interiorAt(y.x,y.z,y.y??l(y));if(R?.buildingId===T?.buildingId&&Math.abs((R?.floor??0)-(T?.floor??0))<1.1)return u.pursuitRoute=[],u.pursuitKey="",Mn(u,y,M,U);let se=(T?.buildingId??"street")+":"+(T?.floor??0);if(u.pursuitKey!==se){u.pursuitKey=se;let ne=[],fe=s.buildings.find(re=>re.id===R?.buildingId),Ie=s.buildings.find(re=>re.id===T?.buildingId),ze=fe?.units.find(re=>Math.abs(re.floor-R.floor)<.25),je=Ie?.units.find(re=>Math.abs(re.floor-T.floor)<.25);fe&&ne.push(ze?.inside,ze?.entry,ze?.outside,...[...ze?.stairs??[]].reverse(),fe.inside,fe.entry,fe.outside),Ie&&ne.push(Ie.outside,Ie.entry,Ie.inside,...je?.stairs??[],je?.outside,je?.entry,je?.inside),u.pursuitRoute=ne.filter(Boolean)}for(;u.pursuitRoute.length&&oe(u,u.pursuitRoute[0])<.66&&Math.abs(l(u)-(u.pursuitRoute[0].y??0))<.85;)u.pursuitRoute.shift();return Mn(u,u.pursuitRoute[0]??y,M,U)}function _m(u,y,M){let U=u.itinerary[0];return U?oe(u,U)<.58&&Math.abs(l(u)-(U.y??0))<1.1?(u.itinerary.shift(),0):Mn(u,U,y,M):0}function ym(u){let y=u.calling;u.calling=null,!(!y||u.health<=0)&&(lt=Math.min(64,Math.max(lt,0)+y.pressure*.7),_t={x:y.x,z:y.z,y:0,health:100,seated:!1,angle:0},Ue=!1,Fe("Uma testemunha ligou para a pol\xEDcia."))}function vm(u,y){if(u.brawl-=y,u.health<35)return u.brawl=0,u.fear=6,{speed:0};let M=oe(u,h);if(M>16)return u.brawl=0,{speed:0};if(u.punchLand>0&&(u.punchLand-=y,u.punchLand<=0&&oe(u,h)<1.4&&h.health>0&&!h.ragdoll)){Xn(h,6,u);let U=Math.max(.2,M);h.pushX+=(h.x-u.x)/U*2.4,h.pushZ+=(h.z-u.z)/U*2.4,ge.punch(!0)}return M>1.15?{speed:Mn(u,h,3.6,y)}:(u.angle=zn(u.angle,Math.atan2(h.x-u.x,h.z-u.z),y*10),u.attack<=0&&(u.punchT=Xr,u.punchHand=1-(u.punchHand??0),u.attack=1.05,u.punchLand=$s),{speed:0})}function Xu(){let u=[];We&&!ie&&on(h)&&u.push(h);for(let y of Xt)y.order==="dealer"&&on(y)&&y.post&&oe(y,y.post)<7&&u.push(y);return u}let sr=()=>Object.keys(Qs).filter(u=>ve[u]>0);function Mm(u){if(at-=u,!(at>0)&&(at=4+Math.random()*4,!!sr().length))for(let y of Xu()){if(q.some(R=>R.buyer?.seller===y))continue;let M=E.find(R=>R.kind==="car"&&R.driver&&R.ownDriver?.seated&&!Pn.has(R)&&!R.burning&&Math.abs(R.speed)<2&&oe(R,y)<26&&(R.visitTime??-100)<O-65);if(M&&Math.random()<.5){let R=Math.cos(M.angle),T=-Math.sin(M.angle),se=[-1,1].map(Ie=>({x:M.x+R*Ie*2.4,z:M.z+T*Ie*2.4})).find(Ie=>_i(Ie.x,Ie.z,M.angle,r,M.shape)&&k.every(ze=>ze===M||oe(ze,Ie)>4.8));if(!se)continue;Object.assign(M,se);let ne=M.ownDriver,fe=M.driver;if(Rs(M,0,y)){M.shopping=!0,M.visitTime=O,M.speed=M.vx=M.vz=0,ne.shoppingTrip={car:M,route:fe},ne.fear=0,ne.buyer={seller:y,wait:0};continue}}let U=q.find(R=>R.role==="civilian"&&on(R)&&R.fear<=0&&!R.buyer&&!R.calling&&!(R.brawl>0)&&!R.itinerary.length&&oe(R,y)>4&&oe(R,y)<38&&(R.boughtAt??-99)<O-45);U&&(U.buyer={seller:y,wait:0})}}function bm(u,y){let M=u.buyer,U=M.seller;if(!Xu().includes(U)||!sr().length)return u.buyer=null,0;if(oe(u,U)>1.3)return Mn(u,U,1.6,y);if(u.angle=zn(u.angle,Math.atan2(U.x-u.x,U.z-u.z),y*6),M.wait+=y,M.wait<1.6)return 0;let R=sr(),T=R[Math.floor(Math.random()*R.length)],se=Math.min(ve[T],1+Math.floor(Math.random()*3)),ne=se*Qs[T].retail;return ve[T]-=se,Se+=ne,u.buyer=null,u.boughtAt=O,U===h?(Fe("+R$ "+ne+" \xB7 "+Qs[T].name),ge.sale(),la(h)?Cs(16,h,!0):Tu(h,12)):(U.sales=(U.sales??0)+ne,oe(U,ie??h)<30&&ge.sale()),0}function Sm(u,y){let M=f();for(let R of D){let T=R.officer;!on(T)||R.retaliation||oe(T,u)<26&&Hr({...T,ground:l(T)},{...u,ground:l(u)},M,{range:26,fov:Math.PI*.9,eye:1.6,aim:1.2})&&(R.retaliation=u)}let U=D.map(R=>R.officer).filter(R=>on(R)&&oe(R,u)<22&&D.some(T=>T.officer===R&&T.retaliation===u)).sort((R,T)=>oe(R,u)-oe(T,u))[0];if(U){if(u.health>45)return u.fleeing=!1,ua(u,U,y);u.fleeing=!0;let R=Math.atan2(u.x-U.x,u.z-U.z),T={x:u.x+Math.sin(R)*6,z:u.z+Math.cos(R)*6};return{speed:Mn(u,T,4.6,y),aim:!1}}if(u.post&&!u.fleeing){let R=q.find(T=>T.buyer?.seller===u);if(u.offerDelay=(u.offerDelay??0)-y,!R&&u.offerDelay<=0&&sr().length){u.offerDelay=4+Math.random()*4;let T=q.find(se=>on(se)&&se.role==="civilian"&&!se.buyer&&!se.calling&&se.fear<=0&&oe(se,u.post)<6&&(se.boughtAt??-99)<O-30);T&&Math.random()<.55&&(T.buyer={seller:u,wait:0},R=T)}if(R&&oe(R,u)>1.15&&oe(R,u.post)<6)return{speed:Mn(u,R,1.2,y),aim:!1};if(R)return{speed:0,aim:!1};if(!u.dealerWalk||oe(u,u.dealerWalk)<.5||(u.dealerWalkTime-=y)<=0){let T=Math.floor(Math.random()*8);u.dealerWalk=null,u.dealerWalkTime=5;for(let se=0;se<8;se++){let ne=(T+se)*Math.PI/4,fe={x:u.post.x+Math.sin(ne)*3.4,z:u.post.z+Math.cos(ne)*3.4};if(oe(u,fe)>1.5&&Vn(u,fe.x,fe.z,s.walkSolids(fe.x,fe.z,0),k,[],.48)){u.dealerWalk=fe;break}}}if(u.dealerWalk)return{speed:Mn(u,u.dealerWalk,1.25,y),aim:!1}}return u.post&&oe(u,u.post)>.8?{speed:Mn(u,u.post,u.fleeing?3.2:2.6,y),aim:!1}:(u.fleeing=!1,{speed:0,aim:!1})}function wm(u,y=Qn){let M=Xt.filter(U=>U.health>0&&(y?.role!=="ally"||U===y));if(!M.length){Fe("Recrute algu\xE9m primeiro.");return}if(u==="toggle"&&(u=M.some(U=>U.order!=="wait"&&U.order!=="dealer")?"wait":"follow"),u==="undealer"){for(let U of M)if(U.order==="dealer"){U.order="follow",U.post=null,U.dealerWalk=null,U.commandTarget=null;for(let R of B)R.buyer?.seller===U&&(R.buyer=null)}Fe("Ponto de venda desfeito.")}else if(u==="follow"||u==="wait"){for(let U of M)U.commandTarget=null,U.order=u,U.hold={x:U.x,z:U.z},U.post=null;Fe(u==="wait"?"Gangue: esperem aqui.":"Gangue: comigo.")}else if(u==="attack"){let R=(y?.role!=="ally"?y:null)??D.map(T=>T.officer).filter(T=>on(T)&&oe(T,h)<30&&lt>0).sort((T,se)=>oe(T,h)-oe(se,h))[0];if(R){for(let T of M)T.commandTarget=R;Fe("Gangue: ataquem!")}else Fe("Mire no alvo para a gangue atacar.")}else if(u==="dealer"){for(let U of M)U.order="dealer",U.dealerWalk=null,U.post={x:U.x,z:U.z},U.sales??=0,U.boardCar=null;Fe(sr().length?"Ponto de venda montado.":"Ponto montado, mas falta estoque.")}ge.bell()}function Tm(u){if(pe!=="pad"&&pe!=="touch")return;let y=.2,M=null;for(let{actor:U,y:R}of ha(h)){if(U.role==="ally"||oe(U,h)>28)continue;Je.set(U.x,R+1.25,U.z).project(i);let T=Math.hypot(Je.x,Je.y);Je.z<1&&T<y&&(y=T,M={x:Je.x,y:Je.y})}M&&(ct-=vt(M.x*2.2*u,-.04,.04),Xe-=vt(M.y*1.6*u,-.03,.03))}function qu(u,y,M=!1){q=B.filter(T=>oe(T,y)<(T.role==="civilian"?69:47)||T.role==="ally"||T.role==="police"||T===wn||T===tn);let U=new Set(q);for(let T of B)T.model.root.visible=U.has(T)&&!T.seated;let R=new Map(q.map(T=>[T,{x:T.x,z:T.z}]));M||(dm(y,u),pm(u,y));for(let T of q){if(T.seated||(T.attack-=u,T.stagger=Math.max(0,T.stagger-u),T.injuryCooldown-=u,T.exitAnim=Math.max(0,T.exitAnim-u),T.exitAge+=u,T.ragdoll&&T.health>0&&vc(T,u,l(T),(re,Ze)=>!Fn(re,Ze,.22,d(T)))))continue;if(T.health<=0){if(T.down=Math.max(0,T.down-u),T.deadTime+=u,T.ragdoll)vc(T,u,l(T),(re,Ze)=>!Fn(re,Ze,.22,d(T))),T.drop&&T.drop.position.set(T.x,l(T)+.019,T.z);else if(T.deadTime<1.2){T.x+=T.pushX*u,T.z+=T.pushZ*u,T.pushX*=Math.exp(-u*5),T.pushZ*=Math.exp(-u*5);let re=$o(T.model,T.deadTime,T.fallDir);T.model.root.rotation.set(re,T.angle,0),T.model.root.position.set(T.x,l(T)+Math.abs(Math.sin(re))*.31,T.z),T.drop&&T.drop.position.set(T.x+Math.sin(T.angle)*T.fallDir*1.25,l(T)+.019,T.z+Math.cos(T.angle)*T.fallDir*1.25)}if(T.drop){let re=Math.min(.63,.32+(19-T.down)*.09);T.drop.rotation.z=T.angle,T.drop.scale.set(Math.max(.38,re),Math.max(.24,re*.68),1)}T.role!=="police"&&T.down<=0&&oe(T.home,y)>7&&oe(T,y)>7&&(Ae(T),P.includes(T)&&(T.seated=!0,T.model.root.visible=!1));continue}let se=0,ne=!1,fe=D.find(re=>re.officer===T);if(fe)se=fe.combat?.speed??fe.intent??0,ne=!!fe.combat?.aim,fe.intent=0,fe.combat=null;else if(T.role==="ally"&&T.order==="dealer")({speed:se,aim:ne}=Sm(T,u));else if(T.role==="ally")if(ie&&T.order!=="wait"&&(!T.boardCar||T.boardCar===ie&&oe(T,ie)>12)&&Qp(T),T.boardCar)se=em(T,u);else if(nr(T.commandTarget)||nr(tn))({speed:se,aim:ne}=ua(T,nr(T.commandTarget)?T.commandTarget:tn,u));else if(T.order==="wait")T.hold&&oe(T,T.hold)>.9&&(se=Mn(T,T.hold,3.4,u));else{let re=Wu(y,Xt.indexOf(T));(oe(re,T)>1.25||Math.abs(l(T)-re.y)>1.75)&&(se=Oc(T,re,ie?6.1:4.45,u))}else if(T.role==="rogue"){let re=w.filter(Be=>Be!==T&&Be.role==="civilian"&&on(Be)).sort((Be,we)=>oe(T,Be)-oe(T,we))[0],Ze=D.map(Be=>Be.officer).find(Be=>on(Be)&&oe(Be,T)<15);(Ze||re)&&({speed:se,aim:ne}=ua(T,Ze??re,u))}else if(T.brawl>0&&!ie&&on(h))({speed:se}=vm(T,u));else if(T.calling)T.calling.time-=u,T.angle=zn(T.angle,Math.atan2(T.x-T.calling.x,T.z-T.calling.z),u*4),T.calling.time<=0&&ym(T);else if(T.buyer&&T.fear<=0)se=bm(T,u);else if(T.shoppingTrip&&!T.buyer){let{car:re,route:Ze}=T.shoppingTrip;if(re===ie||re.driver||re.wrecked||re.burning)T.shoppingTrip=null,re.shopping=!1;else if(oe(T,re)<re.halfLength+.8){T.seated=!0,T.shoppingTrip=null,re.shopping=!1,re.driver=Ze;continue}else se=Mn(T,re,1.8,u)}else if(T.surrender<=0){let re=T.path[T.next];if(T.role==="clerk"&&(oe(T,T.home)>.55?re=T.home:T.angle=zn(T.angle,oe(h,T)<4?Math.atan2(h.x-T.x,h.z-T.z):T.home.angle,u*4)),T.role==="civilian"&&!T.itinerary.length&&T.fear<=0&&N.length&&(T.scheduleClock-=u,T.scheduleClock<=0)){let Ze=N[Math.floor(Math.abs(T.home.x*11+T.home.z*4+O))%N.length];oe(T,Ze.outside)<38&&(T.itinerary=[Ze.outside,Ze.entry,Ze.inside,Ze.entry,Ze.outside]),T.scheduleClock=36+Math.abs(T.home.x)%25}if(T.fear=Math.max(0,T.fear-u),T.fear>0&&oe(T,y)<15){let Ze=Math.atan2(T.x-y.x,T.z-y.z);for(let Be of[0,.84,-.84,1.52,-1.52]){let we=Ze+Be;if(Zo(T,T.x+Math.sin(we)*3.7*u,T.z+Math.cos(we)*3.7*u,.22,d(T))){T.angle=zn(T.angle,we,u*8),se=3.7;break}}}else T.itinerary.length?se=_m(T,T.pace,u):re&&(T.path.length&&oe(T,re)<.54&&(T.next=(T.next+1)%T.path.length,re=T.path[T.next]),se=Mn(T,re,T.pace,u))}let Ie=R.get(T);if(Ie&&T.exitAnim<=0){let re=T.x-Ie.x+T.pushX*u,Ze=T.z-Ie.z+T.pushZ*u;T.x=Ie.x,T.z=Ie.z;let Be=fe?.mode==="boarding"?k.filter(Pt=>Pt!==fe.car):k,we=T.boardCar?q.filter(Pt=>Pt.role!=="ally"):q,ut=mc(T,re,Ze,d(T),l(T)>1.25?[]:Be,[...we,...ie?[]:[h]],.29);if(se>0&&ut<se*u*.55){let Pt=Math.atan2(re,Ze),Yt=T.detourSide??(T.home.x<0?-1:1),gn=d(T),qn=we.filter(wt=>oe(wt,T)<4);for(let wt of[Yt*.65,Yt*1.25,-Yt*.65,-Yt*1.25,Yt*1.85,-Yt*1.85]){let Qr=Pt+wt,Ju=Math.sin(Qr),Ku=Math.cos(Qr);if(Vn(T,T.x+Ju*.7,T.z+Ku*.7,gn,Be,qn,.32)&&mc(T,Ju*se*u,Ku*se*u,gn,Be,qn,.29)>u*.2){T.detourSide=Math.sign(wt),T.angle=zn(T.angle,Qr,u*7);break}}(T.stuckTime??0)>.7&&(T.repath=Math.min(T.repath??0,.12))}if(T.walkIntent&&oe(T,T.walkIntent)>.65&&oe(T,Ie)<u*.18?T.stuckTime=(T.stuckTime??0)+u:T.stuckTime=0,T.walkIntent=null,T.stuckTime>=3){let Pt=null;for(let Yt=.55;Yt<=4&&!Pt;Yt+=.45)for(let gn=0;gn<16;gn++){let qn=T.x+Yt*Math.sin(gn*Math.PI/8),wt=T.z+Yt*Math.cos(gn*Math.PI/8);if(Vn(T,qn,wt,s.walkSolids(qn,wt,l(T)),Be,[...we,h],.34)){Pt={x:qn,z:wt};break}}Pt&&(Object.assign(T,Pt),m(T),T.route=[],T.repath=0),T.stuckTime=0,Pt&&(T.hopTime=.36)}se>0&&(se=Math.min(se,oe(T,Ie)/u))}if(T.pushX*=Math.exp(-u*7.6),T.pushZ*=Math.exp(-u*7.6),!M&&T.injuryCooldown<=0){let re=Yu(T,2.8);if(re){let{car:Ze,speed:Be,vx:we,vz:ut}=re,Pt=Su(Be);T.pushX=vt(we,-8,8)*.59,T.pushZ=vt(ut,-8,8)*.59,Pt>0&&(T.injuryCooldown=1.18,Be>6.5&&yc(T,we*.7,1.8+Be*.16,ut*.7),Xn(T,Pt),Ze===ie&&Pt>12&&Cs(19))}}let ze=T.model;if(T.health<=0)continue;m(T),T.hopTime=Math.max(0,(T.hopTime??0)-u),ze.root.position.set(T.x,l(T)+T.exitAnim*.35+.28*Math.sin(Math.PI*T.hopTime/.36),T.z);let je=T.stagger>0?Math.sin(T.stagger/.32*Math.PI)*.24:0;ze.root.rotation.set(T.exitAnim*.7-je,T.angle,T.exitAnim*T.exitSide*.89+(T.stagger>0?Math.sin(T.stagger*9)*.12:0)),Ys(ze,u,T.exitAnim>0?2.9:se,ne,["police","rogue","ally"].includes(T.role),0,0,T.surrender>0),T.punchT>0?(T.punchT=Math.max(0,T.punchT-u),Mu(ze,{punch:T.punchT,hand:T.punchHand??0})):T.calling?(ze.arms[0].rotation.set(-2.35,0,-.55),ze.forearms[0].rotation.set(-2.05,0,0)):T.order==="dealer"&&se<.1&&!ne&&(ze.arms[0].rotation.set(-.4,0,-.25),ze.arms[1].rotation.set(-.4,0,.25),ze.forearms[0].rotation.set(-1.5,0,.4),ze.forearms[1].rotation.set(-1.5,0,-.4))}if(!M&&!ie&&l(h)<1.15&&h.health>0&&h.lift<.3&&Di<=0){let T=Yu(h,2.35);if(T){let{speed:se,vx:ne,vz:fe}=T,Ie=Su(se);h.pushX=vt(ne,-13,13)*.73,h.pushZ=vt(fe,-13,13)*.73,h.trip=se>=5.3?Math.min(.82,.35+se*.021):.12,h.vx=h.vz=0,se>7&&yc(h,ne*.65,1.6+se*.14,fe*.65),Ie>0&&(Xn(h,Ie),ge.crash(),Fe("Voc\xEA foi atropelado.")),Di=.87}}}function Yu(u,y){for(let M of k){if(l(u)>1.2||oe(M,u)>5)continue;let U=F.get(M),R=U&&oe(U,M)<3?U:null,T=R?Math.hypot(R.vx,R.vz):0,se=Math.hypot(M.vx,M.vz),ne=Math.max(se,T);if(!(ne<y||!np(M,R,u)))return{car:M,speed:ne,vx:T>se?R.vx:M.vx,vz:T>se?R.vz:M.vz}}return null}function Am(u,y){s.updateDoors(u,[y,...q.filter(M=>on(M))])}function Em(u,y,M){let U=l(y),R=ie?null:s.interiorAt(y.x,y.z,U),T=!!R;Kr!==T&&(Kr=T,ye=!0);let se=i.aspect<.85,fe=T?M?2.25:3.4:ie?ie.kind==="bike"?8.2:se?12:10.2:M?4.45:se?7.9:6.5,Ie=ie?1.95+ie.root.position.y:1.38+U+h.lift*.46,ze=ie?0:M?.61:.22,je=M?.1+Xe*.19:Math.max(T?.28:.1,Xe);He.set(y.x+Math.cos(ct)*ze,Ie,y.z-Math.sin(ct)*ze),ot.set(He.x-Math.sin(ct)*fe*Math.cos(je),Ie+Math.sin(je)*fe,He.z-Math.cos(ct)*fe*Math.cos(je));function re(ut){R&&(ut.x=vt(ut.x,R.x-R.w*.5+.3,R.x+R.w*.5-.3),ut.z=vt(ut.z,R.z-R.d*.5+.3,R.z+R.d*.5-.3),ut.y=vt(ut.y,R.floor+.55,R.ceiling-.42))}re(ot),s.viewBlocked(He.x,He.y,He.z,.12,!T)&&He.set(y.x,Ie,y.z);for(let ut=.06;ut<=1.0001;ut+=.04){let Pt=Pr.lerp(He.x,ot.x,ut),Yt=Pr.lerp(He.y,ot.y,ut),gn=Pr.lerp(He.z,ot.z,ut);if(s.viewBlocked(Pt,Yt,gn,.32,!T)||k.some(qn=>qn!==ie&&oe(qn,{x:Pt,z:gn})<2.1&&Yt<qn.root.position.y+1.7)){ot.lerp(He,1-Math.max(.02,ut-.07));break}}re(ot);let Ze=M?14:1,Be=Re?Xe:Xe-.22,we=M?Ie-Math.tan(Be)*Ze:Ie-.07;Me.set(He.x+Math.sin(ct)*Ze,we,He.z+Math.cos(ct)*Ze),ye?(i.position.copy(ot),ye=!1):i.position.lerp(ot,1-Math.exp(-u*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!T)&&i.position.copy(ot),re(i.position),i.lookAt(Me),i.updateMatrixWorld()}function Si(u,y,M){te.fillStyle=y,te.beginPath(),te.arc(st(u.x),st(u.z),M,0,Math.PI*2),te.fill()}function Cm(u,y){let M=Cc(lt),U=Math.round(oe(u,Rn));Ve("detail").textContent="Casa "+U+" m \xB7 Loja "+Math.round(oe(u,Nr))+" m",Ve("cash").textContent="R$ "+Se.toLocaleString("pt-BR");let R=Xt.filter(wt=>wt.order==="dealer"&&on(wt)),T=Xt.some(wt=>wt.order==="wait");Ve("crew").textContent="Gangue "+Xt.length+(Xt.length?T?" \xB7 esperando":" \xB7 seguindo":"")+(R.length?" \xB7 "+R.length+" no ponto":"");let se=li();Ve("stash").hidden=!se,Ve("stash").textContent=se;let ne=R.reduce((wt,Qr)=>wt+(Qr.sales??0),0);Ve("selling").hidden=!We&&!R.length,Ve("selling").textContent=(We?"Seu ponto de venda est\xE1 aberto. ":"")+(R.length?"Ponto da gangue: R$ "+ne:"");let fe=Ve("prompt"),Ie=pe==="pad"?"Y \xB7 ":pe==="keyboard"?"E \xB7 ":"",ze=Au(),je=!!ze,re=Ru(),Ze=Pu(),Be=ie??Lu(),we=Dc(),ut=Eu(),Pt=nn&&y&&is<=0;fe.hidden=!(Be||je||re||Ze||we||ut||is>0||Pt);let Yt=we?"Guardar na garagem":ie?"Sair "+(ie.kind==="bike"?"da moto":"do carro"):ut?"Tirar ve\xEDculo da garagem":re?"Salvar na porta de casa":je?Hp[ze.service]:Ze?"Porta trancada":Be?"Pegar "+ca(Be):"";fe.textContent=is>0?aa:Pt?"Mantenha a mira \xB7 "+Math.ceil(nn.left)+" s":Ie+Yt,Ve("heat").hidden=!M,Ve("heat").textContent="\u2605".repeat(M)+" PROCURADO";let gn=W==="rifle"?"Fuzil":"Pistola";Ve("mode").textContent=ie?ca(ie)+" \xB7 "+Math.round(ie.integrity)+"%"+(ie.burning?" \xB7 FOGO":""):ce?gn:"Vila Brasa",Ve("reading").textContent=ie?Math.round(Math.hypot(ie.vx,ie.vz)*3.6)+" km/h":ce?he+" balas":"Punhos";let qn=Ve("health");qn.value=h.health,qn.title="Vida: "+Math.ceil(h.health)+"%",Ve("crosshair").hidden=!(y||ce&&Hn>0&&!ie),Ve("interact").textContent=ie?"Sair":re?"Salvar":je?"Loja":"Entrar",Ve("sprint").textContent=ie?"Freio":"Correr",Ve("aim").hidden=!!ie,Ve("fire").hidden=!!ie||!ce,Ve("weapon").hidden=!!ie||!(_e||ue),Ve("weapon").textContent="Arma",Ve("sell").hidden=!!ie,Ve("gang").hidden=!!ie||!Xt.length,Ve("sell").setAttribute("aria-pressed",String(!!We)),Ve("jump").hidden=Ve("punch").hidden=!!ie,Ve("recruit").hidden=!!ie||!y,Ve("hud").classList.toggle("armed",!ie),Ve("hud").classList.toggle("driving",!!ie),te.drawImage(ee,0,0),Le&&(oe(u,Le)<2.2?(Le=null,Ye.visible=!1):Si(Le,"#ffad41",4));for(let wt of S)wt!==ie&&wt.integrity>0&&Si(wt,wt.driver?"#82b9b3":"#eab987",wt.kind==="bike"?2.2:wt.driver?2.6:3.5);Si(Nr,"#eaff89",6),Si(si.home,"#ffe4aa",4),Si(Rn,"#dcc39b",5);for(let wt of N)wt.service==="black"&&Si(wt.entry,"#c58cff",3.2);Si(Qi,"#99c6ff",5);for(let wt of N)wt.kind!=="armory"&&Si(wt.entry,"#dbae80",2.5);for(let wt of D)["driving","patrol","foot"].includes(wt.mode)&&Si(wt.officer.seated?wt.car:wt.officer,wt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let wt of Xt)Si(wt,"#97ebaf",3.5);te.save(),te.translate(st(u.x),st(u.z)),te.rotate(-(ie?ie.angle:h.angle)),te.fillStyle="#fff9e6",te.strokeStyle="#243938",te.lineWidth=2.7,te.beginPath(),te.moveTo(0,10),te.lineTo(-6,-6),te.lineTo(0,-3),te.lineTo(6,-6),te.closePath(),te.stroke(),te.fill(),te.restore()}function Rm(u){let y=(u-Qe)/1e3,M=vt(y,1/240,.05);Qe=u,O+=M;let U=Is.read(!!ie,M);if(U.map&&!Ee.open&&mt(),Ee.open){Ce.x=vt(Ce.x+U.x*100*M,0,256),Ce.z=vt(Ce.z-U.y*100*M,0,256);let R=qe.getContext("2d");R.drawImage(te.canvas,0,0),R.strokeStyle="white",R.strokeRect(Ce.x-3,Ce.z-3,6,6),U.confirm?nt(Ce.x,Ce.z):U.cancel&&Ee.close();return}if(Ts.open){U.cancel||U.interact?$r():U.confirm?qt.activate():U.navUp?qt.move(-1):U.navDown?qt.move(1):(be-=M,Math.abs(U.y)>.6&&be<=0&&(qt.move(U.y>0?-1:1),be=.22),Math.abs(U.y)<.3&&(be=0)),e.render(t,i);return}if(Lt){if(Gt){pe=U.mode;for(let ze of k)F.set(ze,{x:ze.x,z:ze.z,vx:ze.vx,vz:ze.vz});U.weapon&&(_e||ue)&&!ie&&Ui(),U.sell&&!ie&&(We?(We=null,Fe("Ponto de venda fechado.")):sr().length?(We={x:h.x,z:h.z},Fe("Ponto de venda aberto. Fique parado.")):Fe("Sem estoque. Compre no mercado negro da casa de penhores.")),We&&(ie||oe(h,We)>4)&&(We=null,Fe("Ponto de venda fechado.")),Mm(M);let R=U.aim&&!ie&&vn<=0&&h.health>0;if(R!==Re&&(Xe=R?.015:.22,Re=R),Q=Math.abs(U.lookX)+Math.abs(U.lookY)>.003?0:Q+M,ct-=U.lookX,Xe=vt(Xe+U.lookY,R?-1.03:-.31,.84),ie&&Q>1.2&&(Xe+=(.24-Xe)*M),R&&Tm(M),h.health>0&&h.health<100&&O-(h.lastHurt??0)>10&&(h.health=Math.min(100,h.health+3*M)),pt-=M,Ft-=M,zt-=M,Di-=M,J-=M,is-=M,De-=M,a.update(M),c.update(M),s.signals.update(M),vn=Math.max(0,vn-M),As&&(Es-=M,Es<=0&&om()),bi-=M,Li-=M,Hn-=M,er-=M,St>0&&(St-=M,St<=0&&Yp()),Ot&&(Ot.delay-=M,Ot.delay<=0)){let ze=Ot.car;Ot=null,h.health>0&&ze.integrity>0&&oe(h,ze)<3.75&&Uc(ze)}if(U.interact&&Zp(),Ts.open)return;let T=s.props.update(M,k,ie??h);T.shadow&&(s.sun.shadow.needsUpdate=!0);for(let ze of T.events)oe(ze,ie??h)<30&&(ze.heavy?ge.crash():ge.punch(!0));Am(M,ie??h),ie?lm(M,U):cm(M,{...U,aim:R}),Hu=!!U.brake,xm(M,ie??h),mm(M,ie??h),ie&&(h.x=ie.x,h.z=ie.z),tm(M),tn&&!nr(tn)&&(tn=null),ie?.kind==="bike"&&hu(h.model,ie);let se=ie??h;if(!Number.isFinite(ss.x)||oe(h,ss)>1.15){let ze=Number.isFinite(ss.x)?Math.atan2(h.x-ss.x,h.z-ss.z):h.angle;ss={x:h.x,z:h.z,angle:ze}}qu(M,se),Bu(se),Jp(M),ge.motor(ie?.speed??0,!!ie);let ne=ie??h,fe=R&&!ie&&h.health>0;U.fire&&ce&&!ie&&h.health>0&&he>0&&(Hn=1.38),Em(M,ne,fe||!ie&&Hn>0),fe&&(er<=0||U.recruit||U.punch||U.fire&&Ft<=0)?(Qn=Uu(),er=.092):fe||(Qn=null),U.order&&wm(U.order,fe?Uu():null),U.recruit&&!ie&&im(Qn),sm(M,fe&&ce?Qn:null),(U.punch||U.fire&&!ce)&&!ie&&rm(),U.fire&&!ie&&am(fe),Ve("hitmark").hidden=bi<=0,Ve("impact").hidden=Li<=0,s.marker.visible=oe(ne,Nr)>2.8&&oe(ne,Nr)<13,s.beacon.rotation.y=O*2,s.beacon.position.y=2.55+Math.sin(O*4)*.27,I-=M,I<=0&&(Cm(ne,fe),I=.1)}}else{let R=.54+Math.sin(O*.13)*.19,T=i.aspect<1?26:30;i.position.set(24+Math.sin(R)*T,14,17+Math.cos(R)*T),i.lookAt(10,2,13),qu(M,h,!0),Bu(h)}e.render(t,i),Gt&&Yr.value==="auto"&&y>0&&y<.22&&Ni>.7&&(Y+=y,++L>=85&&(Y/L>.026&&(Ni=Math.max(.69,Ni-.16),It()),L=0,Y=0))}let Is=Dp(()=>{Ee.open?Ee.close():Ts.open?$r():Gt?Ge(!1):Zu()},()=>Gt),Bc=Lc("quality");(Bc==="low"||Bc==="high")&&(Yr.value=Bc),Yr.addEventListener("change",()=>{Lc("quality",Yr.value),Ni=1,It()}),Ve("sound").addEventListener("click",()=>{Lc("sound",ge.toggle()?"on":"off"),un()}),Ve("pause").addEventListener("click",()=>Ge(!1)),Ve("reset").addEventListener("click",()=>{mn(),Ge(!0)}),Ve("close-shop").addEventListener("click",$r),Ts.addEventListener("cancel",u=>{u.preventDefault(),$r()});function Zu(){if(!Lt&&sn){Object.assign(h,{x:sn.x,z:sn.z,health:sn.health,floorY:0}),m(h),Se=sn.cash,_e=sn.armed,ue=sn.rifle,le=_e?sn.ammo:0,Te=ue?sn.rifleAmmo:0,W="pistol",he=le,In(_e?"pistol":ue?"rifle":"fists"),Object.assign(ve,sn.stash),ke=sn.wardrobe,me=sn.look,cn(h,me),sn.garage&&(Nu(sn.garage.kind,sn.garage.model,sn.garage.color),tt=!0,Nc(Ne));for(let u of new Set(sn.recruits)){let y=typeof u=="number"?w[u]:G.get(u);y&&(y.role="ally",y.order="follow",y.seated=!1,y.riding=null,y.model.root.visible=!0,Xt.push(y))}Ge(!0),ct=-Math.PI/2}else Ge(!0)}Zr.addEventListener("click",Zu),document.addEventListener("visibilitychange",()=>{document.hidden&&Gt&&Ge(!1)}),window.addEventListener("resize",It),e.domElement.addEventListener("webglcontextrestored",It),mn(),un(),It(),oa(),Zr.disabled=!1,Qe=performance.now(),e.setAnimationLoop(Rm)}try{aM()}catch(n){console.error(n),Zr.textContent="3D indispon\xEDvel",Ve("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
