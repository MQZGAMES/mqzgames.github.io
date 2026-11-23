(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ad=0,Gh=1,ld=2;var Js=1,cd=2,Br=3,Cs=0,Cn=1,zn=2,Ks=0,Rs=1,Qo=2,Vh=3,Hh=4,hd=5;var $s=100,ud=101,fd=102,dd=103,pd=104,md=200,gd=201,xd=202,_d=203,Wh=204,Xh=205,yd=206,vd=207,Md=208,bd=209,Sd=210,wd=211,Td=212,Ad=213,Ed=214,ol=0,al=1,ll=2,Pr=3,cl=4,hl=5,ul=6,fl=7,qh=0,Cd=1,Rd=2,Oi=0,Yh=1,Zh=2,Jh=3,ea=4,Kh=5,$h=6,jh=7;var Qh=300,js=301,kr=302,zl=303,Ul=304,dl=1e3,zi=1001,pl=1002,vn=1003,Id=1004;var ta=1005;var Mn=1006,Fl=1007;var is=1008;var Jn=1009,eu=1010,tu=1011,Gr=1012,Ol=1013,Si=1014,hi=1015,wi=1016,Bl=1017,kl=1018,Qs=1020,nu=35902,iu=35899,su=1021,ru=1022,ii=1023,$i=1026,ss=1027,Gl=1028,Vl=1029,Is=1030,Hl=1031;var Wl=1033,na=33776,ia=33777,sa=33778,ra=33779,Xl=35840,ql=35841,Yl=35842,Zl=35843,Jl=36196,Kl=37492,$l=37496,jl=37488,Ql=37489,oa=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,fc=37819,dc=37820,pc=37821,mc=36492,gc=36494,xc=36495,_c=36283,yc=36284,aa=36285,vc=36286;var Co=2300,ml=2301,sl=2302,Lh=2303,Dh=2400,Nh=2401,zh=2402;var Pd=3200;var Mc=0,Ld=1,rs="",gn="srgb",Ro="srgb-linear",Io="linear",Gt="srgb";var rl=7680;var Dd=519,Nd=512,zd=513,Ud=514,ou=515,Fd=516,Od=517,au=518,lu=519,Bd=35044,bc=35048;var cu="300 es",ci=2e3,Lr=2001;function P0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function L0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){let n=Po("canvas");return n.style.display="block",n}var Df={},Dr=null;function hu(...n){let e="THREE."+n.shift();Dr?Dr("log",e,...n):console.log(e,...n)}function Gd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ct(...n){n=Gd(n);let e="THREE."+n.shift();if(Dr)Dr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function pt(...n){n=Gd(n);let e="THREE."+n.shift();if(Dr)Dr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function To(...n){let e=n.join(" ");e in Df||(Df[e]=!0,ct(...n))}function Vd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Hd={[ol]:ol,[ll]:ul,[cl]:cl,[Pr]:hl,[al]:al,[ul]:ll,[fl]:fl,[hl]:Pr},Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,Ao=Math.PI/180,Nr=180/Math.PI;function Vr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function uu(n,e){return(n%e+e)%e}function D0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function N0(n,e,t){return n!==e?(t-n)/(e-n):0}function Eo(n,e,t){return(1-t)*n+t*e}function z0(n,e,t,i){return Eo(n,e,1-Math.exp(-t*i))}function U0(n,e=1){return e-Math.abs(uu(n,e*2)-e)}function F0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function O0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function B0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function k0(n,e){return n+Math.random()*(e-n)}function G0(n){return n*(.5-Math.random())}function V0(n){n!==void 0&&(Nf=n);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H0(n){return n*Ao}function W0(n){return n*Nr}function X0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function q0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Y0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),h=o(t/2),l=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),u=o((i-e)/2);switch(s){case"XYX":n.set(a*d,h*f,h*p,a*l);break;case"YZY":n.set(h*p,a*d,h*f,a*l);break;case"ZXZ":n.set(h*f,h*p,a*d,a*l);break;case"XZX":n.set(a*d,h*u,h*m,a*l);break;case"YXY":n.set(h*m,a*d,h*u,a*l);break;case"ZYZ":n.set(h*u,h*m,a*d,a*l);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function du(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wd(n,e){if(e.constructor===Float32Array)return n;let t=du(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Xd(n,e){if(e.constructor===Float32Array)return n;let t=du(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Hr={DEG2RAD:Ao,RAD2DEG:Nr,generateUUID:Vr,clamp:It,euclideanModulo:uu,mapLinear:D0,inverseLerp:N0,lerp:Eo,damp:z0,pingpong:U0,smoothstep:F0,smootherstep:O0,randInt:B0,randFloat:k0,randFloatSpread:G0,seededRandom:V0,degToRad:H0,radToDeg:W0,isPowerOfTwo:X0,ceilPowerOfTwo:q0,floorPowerOfTwo:fu,setQuaternionFromProperEuler:Y0,normalize:Xd,denormalize:Wd},yt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let h=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],p=r[o+0],m=r[o+1],u=r[o+2],v=r[o+3];if(f!==v||h!==p||l!==m||d!==u){let g=h*p+l*m+d*u+f*v;g<0&&(p=-p,m=-m,u=-u,v=-v,g=-g);let _=1-a;if(g<.9995){let T=Math.acos(g),C=Math.sin(T);_=Math.sin(_*T)/C,a=Math.sin(a*T)/C,h=h*_+p*a,l=l*_+m*a,d=d*_+u*a,f=f*_+v*a}else{h=h*_+p*a,l=l*_+m*a,d=d*_+u*a,f=f*_+v*a;let T=1/Math.sqrt(h*h+l*l+d*d+f*f);h*=T,l*=T,d*=T,f*=T}}e[t]=h,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],h=i[s+1],l=i[s+2],d=i[s+3],f=r[o],p=r[o+1],m=r[o+2],u=r[o+3];return e[t]=a*u+d*f+h*m-l*p,e[t+1]=h*u+d*p+l*f-a*m,e[t+2]=l*u+d*m+a*p-h*f,e[t+3]=d*u-a*f-h*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,h=Math.sin,l=a(i/2),d=a(s/2),f=a(r/2),p=h(i/2),m=h(s/2),u=h(r/2);switch(o){case"XYZ":this._x=p*d*f+l*m*u,this._y=l*m*f-p*d*u,this._z=l*d*u+p*m*f,this._w=l*d*f-p*m*u;break;case"YXZ":this._x=p*d*f+l*m*u,this._y=l*m*f-p*d*u,this._z=l*d*u-p*m*f,this._w=l*d*f+p*m*u;break;case"ZXY":this._x=p*d*f-l*m*u,this._y=l*m*f+p*d*u,this._z=l*d*u+p*m*f,this._w=l*d*f-p*m*u;break;case"ZYX":this._x=p*d*f-l*m*u,this._y=l*m*f+p*d*u,this._z=l*d*u-p*m*f,this._w=l*d*f+p*m*u;break;case"YZX":this._x=p*d*f+l*m*u,this._y=l*m*f+p*d*u,this._z=l*d*u-p*m*f,this._w=l*d*f-p*m*u;break;case"XZY":this._x=p*d*f-l*m*u,this._y=l*m*f-p*d*u,this._z=l*d*u+p*m*f,this._w=l*d*f+p*m*u;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],h=t[9],l=t[2],d=t[6],f=t[10],p=i+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-h)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(d-h)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(h+d)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(h+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,h=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+s*l-r*h,this._y=s*d+o*h+r*a-i*l,this._z=r*d+o*l+i*h-s*a,this._w=o*d-i*a-s*h-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let h=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);h=Math.sin(h*l)/d,t=Math.sin(t*l)/d,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,h=e.w,l=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+h*l+o*f-a*d,this.y=i+h*d+a*l-r*f,this.z=s+h*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,h=t.z;return this.x=s*h-r*a,this.y=r*o-i*h,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fh=new J,zf=new ln,ut=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,h,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,h,l)}set(e,t,i,s,r,o,a,h,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=h,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],d=i[4],f=i[7],p=i[2],m=i[5],u=i[8],v=s[0],g=s[3],_=s[6],T=s[1],C=s[4],b=s[7],A=s[2],S=s[5],x=s[8];return r[0]=o*v+a*T+h*A,r[3]=o*g+a*C+h*S,r[6]=o*_+a*b+h*x,r[1]=l*v+d*T+f*A,r[4]=l*g+d*C+f*S,r[7]=l*_+d*b+f*x,r[2]=p*v+m*T+u*A,r[5]=p*g+m*C+u*S,r[8]=p*_+m*b+u*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*r*d+i*a*h+s*r*l-s*o*h}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],d=e[8],f=d*o-a*l,p=a*h-d*r,m=l*r-o*h,u=t*f+i*p+s*m;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/u;return e[0]=f*v,e[1]=(s*l-d*i)*v,e[2]=(a*i-s*o)*v,e[3]=p*v,e[4]=(d*t-s*h)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*h-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*o+l*a)+o+e,-s*l,s*h,-s*(-l*o+h*a)+a+t,0,0,1),this}scale(e,t){return To("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dh.makeScale(e,t)),this}rotate(e){return To("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return To("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dh=new ut,Uf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z0(){let n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Gt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Gt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?Io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ro]:{primaries:e,whitePoint:i,transfer:Io,toXYZ:Uf,fromXYZ:Ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:Gt,toXYZ:Uf,fromXYZ:Ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}var Rt=Z0();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gr,gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=Po("canvas")),gr.width=e.width,gr.height=e.height;let s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Po("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},J0=0,zr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ph(s[o].image)):r.push(ph(s[o]))}else r=ph(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}var K0=0,mh=new J,Gn=class n extends Ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=zi,s=zi,r=Mn,o=is,a=ii,h=Jn,l=n.DEFAULT_ANISOTROPY,d=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Vr(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Qh;Gn.DEFAULT_ANISOTROPY=1;var Kt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,h=e.elements,l=h[0],d=h[4],f=h[8],p=h[1],m=h[5],u=h[9],v=h[2],g=h[6],_=h[10];if(Math.abs(d-p)<.01&&Math.abs(f-v)<.01&&Math.abs(u-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+v)<.1&&Math.abs(u+g)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,b=(m+1)/2,A=(_+1)/2,S=(d+p)/4,x=(f+v)/4,w=(u+g)/4;return C>b&&C>A?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=S/i,r=x/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=w/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=w/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-u)*(g-u)+(f-v)*(f-v)+(p-d)*(p-d));return Math.abs(T)<.001&&(T=1),this.x=(g-u)/T,this.y=(f-v)/T,this.z=(p-d)/T,this.w=Math.acos((l+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Gn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends xl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Lo=class extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,h,l,d,f,p,m,u,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,h,l,d,f,p,m,u,v,g)}set(e,t,i,s,r,o,a,h,l,d,f,p,m,u,v,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=h,_[2]=l,_[6]=d,_[10]=f,_[14]=p,_[3]=m,_[7]=u,_[11]=v,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*d,m=o*f,u=a*d,v=a*f;t[0]=h*d,t[4]=-h*f,t[8]=l,t[1]=m+u*l,t[5]=p-v*l,t[9]=-a*h,t[2]=v-p*l,t[6]=u+m*l,t[10]=o*h}else if(e.order==="YXZ"){let p=h*d,m=h*f,u=l*d,v=l*f;t[0]=p+v*a,t[4]=u*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-u,t[6]=v+p*a,t[10]=o*h}else if(e.order==="ZXY"){let p=h*d,m=h*f,u=l*d,v=l*f;t[0]=p-v*a,t[4]=-o*f,t[8]=u+m*a,t[1]=m+u*a,t[5]=o*d,t[9]=v-p*a,t[2]=-o*l,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){let p=o*d,m=o*f,u=a*d,v=a*f;t[0]=h*d,t[4]=u*l-m,t[8]=p*l+v,t[1]=h*f,t[5]=v*l+p,t[9]=m*l-u,t[2]=-l,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){let p=o*h,m=o*l,u=a*h,v=a*l;t[0]=h*d,t[4]=v-p*f,t[8]=u*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*f+u,t[10]=p-v*f}else if(e.order==="XZY"){let p=o*h,m=o*l,u=a*h,v=a*l;t[0]=h*d,t[4]=-f,t[8]=l*d,t[1]=p*f+v,t[5]=o*d,t[9]=m*f-u,t[2]=u*f-m,t[6]=a*d,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($0,e,j0)}lookAt(e,t,i){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),gs.crossVectors(i,Qn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),gs.crossVectors(i,Qn)),gs.normalize(),za.crossVectors(Qn,gs),s[0]=gs.x,s[4]=za.x,s[8]=Qn.x,s[1]=gs.y,s[5]=za.y,s[9]=Qn.y,s[2]=gs.z,s[6]=za.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],d=i[1],f=i[5],p=i[9],m=i[13],u=i[2],v=i[6],g=i[10],_=i[14],T=i[3],C=i[7],b=i[11],A=i[15],S=s[0],x=s[4],w=s[8],D=s[12],L=s[1],I=s[5],k=s[9],N=s[13],O=s[2],X=s[6],q=s[10],ee=s[14],ie=s[3],K=s[7],F=s[11],B=s[15];return r[0]=o*S+a*L+h*O+l*ie,r[4]=o*x+a*I+h*X+l*K,r[8]=o*w+a*k+h*q+l*F,r[12]=o*D+a*N+h*ee+l*B,r[1]=d*S+f*L+p*O+m*ie,r[5]=d*x+f*I+p*X+m*K,r[9]=d*w+f*k+p*q+m*F,r[13]=d*D+f*N+p*ee+m*B,r[2]=u*S+v*L+g*O+_*ie,r[6]=u*x+v*I+g*X+_*K,r[10]=u*w+v*k+g*q+_*F,r[14]=u*D+v*N+g*ee+_*B,r[3]=T*S+C*L+b*O+A*ie,r[7]=T*x+C*I+b*X+A*K,r[11]=T*w+C*k+b*q+A*F,r[15]=T*D+C*N+b*ee+A*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],h=e[9],l=e[13],d=e[2],f=e[6],p=e[10],m=e[14],u=e[3],v=e[7],g=e[11],_=e[15],T=h*m-l*p,C=a*m-l*f,b=a*p-h*f,A=o*m-l*d,S=o*p-h*d,x=o*f-a*d;return t*(v*T-g*C+_*b)-i*(u*T-g*A+_*S)+s*(u*C-v*A+_*x)-r*(u*b-v*S+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],h=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-i*(r*d-a*h)+s*(r*l-o*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],d=e[8],f=e[9],p=e[10],m=e[11],u=e[12],v=e[13],g=e[14],_=e[15],T=t*a-i*o,C=t*h-s*o,b=t*l-r*o,A=i*h-s*a,S=i*l-r*a,x=s*l-r*h,w=d*v-f*u,D=d*g-p*u,L=d*_-m*u,I=f*g-p*v,k=f*_-m*v,N=p*_-m*g,O=T*N-C*k+b*I+A*L-S*D+x*w;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/O;return e[0]=(a*N-h*k+l*I)*X,e[1]=(s*k-i*N-r*I)*X,e[2]=(v*x-g*S+_*A)*X,e[3]=(p*S-f*x-m*A)*X,e[4]=(h*L-o*N-l*D)*X,e[5]=(t*N-s*L+r*D)*X,e[6]=(g*b-u*x-_*C)*X,e[7]=(d*x-p*b+m*C)*X,e[8]=(o*k-a*L+l*w)*X,e[9]=(i*L-t*k-r*w)*X,e[10]=(u*S-v*b+_*T)*X,e[11]=(f*b-d*S-m*T)*X,e[12]=(a*D-o*I-h*w)*X,e[13]=(t*I-i*D+s*w)*X,e[14]=(v*C-u*A-g*T)*X,e[15]=(d*A-f*C+p*T)*X,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,h=e.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*h,l*h+s*a,0,l*a+s*h,d*a+i,d*h-s*o,0,l*h-s*a,d*h+s*o,r*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,h=t._w,l=r+r,d=o+o,f=a+a,p=r*l,m=r*d,u=r*f,v=o*d,g=o*f,_=a*f,T=h*l,C=h*d,b=h*f,A=i.x,S=i.y,x=i.z;return s[0]=(1-(v+_))*A,s[1]=(m+b)*A,s[2]=(u-C)*A,s[3]=0,s[4]=(m-b)*S,s[5]=(1-(p+_))*S,s[6]=(g+T)*S,s[7]=0,s[8]=(u+C)*x,s[9]=(g-T)*x,s[10]=(1-(p+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=xr.set(s[0],s[1],s[2]).length(),a=xr.set(s[4],s[5],s[6]).length(),h=xr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_i.copy(this);let l=1/o,d=1/a,f=1/h;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=d,_i.elements[5]*=d,_i.elements[6]*=d,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=h,this}makePerspective(e,t,i,s,r,o,a=ci,h=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s),u,v;if(h)u=r/(o-r),v=o*r/(o-r);else if(a===ci)u=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Lr)u=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci,h=!1){let l=this.elements,d=2/(t-e),f=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s),u,v;if(h)u=1/(o-r),v=o/(o-r);else if(a===ci)u=-2/(o-r),v=-(o+r)/(o-r);else if(a===Lr)u=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=u,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xr=new J,_i=new Pt,$0=new J(0,0,0),j0=new J(1,1,1),gs=new J,za=new J,Qn=new J,Of=new Pt,Bf=new ln,bi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Q0=0,kf=new J,_r=new ln,Xi=new Pt,Ua=new J,yo=new J,eg=new J,tg=new ln,Gf=new J(1,0,0),Vf=new J(0,1,0),Hf=new J(0,0,1),Wf={type:"added"},ng={type:"removed"},yr={type:"childadded",child:null},gh={type:"childremoved",child:null},qt=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new J,t=new bi,i=new ln,s=new J(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new ut}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ua.copy(e):Ua.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(yo,Ua,this.up):Xi.lookAt(Ua,yo,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Xi),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),yr.child=e,this.dispatchEvent(yr),yr.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,d=h.length;l<d;l++){let f=h[l];r(e.shapes,f)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(e.materials,this.material[h]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(e.animations,h))}}if(t){let a=o(e.geometries),h=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),u=o(e.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),u.length>0&&(i.nodes=u)}return i.object=s,i;function o(a){let h=[];for(let l in a){let d=a[l];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new J(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),_=this._getHandJoint(l,v);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,u=.005;l.inputState.pinching&&p>m+u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function xh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=uu(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xh(o,r,e+1/3),this.g=xh(o,r,e),this.b=xh(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function i(r){r!==void 0&&parseFloat(r)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let i=qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Rt.workingToColorSpace(Dn.copy(this),e),Math.round(It(Dn.r*255,0,255))*65536+Math.round(It(Dn.g*255,0,255))*256+Math.round(It(Dn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Dn.copy(this),t);let i=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),h,l,d=(a+o)/2;if(a===o)h=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:h=(s-r)/f+(s<r?6:0);break;case s:h=(r-i)/f+2;break;case r:h=(i-s)/f+4;break}h/=6}return e.h=h,e.s=l,e.l=d,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=gn){Rt.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,i=Dn.g,s=Dn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(Fa);let i=Eo(xs.h,Fa.h,t),s=Eo(xs.s,Fa.s,t),r=Eo(xs.l,Fa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new tt;tt.NAMES=qd;var No=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zo=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new J,qi=new J,_h=new J,Yi=new J,vr=new J,Mr=new J,Xf=new J,yh=new J,vh=new J,Mh=new J,bh=new Kt,Sh=new Kt,wh=new Kt,Ms=class n{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yi.subVectors(s,t),qi.subVectors(i,t),_h.subVectors(e,t);let o=yi.dot(yi),a=yi.dot(qi),h=yi.dot(_h),l=qi.dot(qi),d=qi.dot(_h),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(l*h-a*d)*p,u=(o*d-a*h)*p;return r.set(1-m-u,u,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,h){return this.getBarycoord(e,t,i,s,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Yi.x),h.addScaledVector(o,Yi.y),h.addScaledVector(a,Yi.z),h)}static getInterpolatedAttribute(e,t,i,s,r,o){return bh.setScalar(0),Sh.setScalar(0),wh.setScalar(0),bh.fromBufferAttribute(e,t),Sh.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bh,r.x),o.addScaledVector(Sh,r.y),o.addScaledVector(wh,r.z),o}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),qi.subVectors(e,t),yi.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),yi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;vr.subVectors(s,i),Mr.subVectors(r,i),yh.subVectors(e,i);let h=vr.dot(yh),l=Mr.dot(yh);if(h<=0&&l<=0)return t.copy(i);vh.subVectors(e,s);let d=vr.dot(vh),f=Mr.dot(vh);if(d>=0&&f<=d)return t.copy(s);let p=h*f-d*l;if(p<=0&&h>=0&&d<=0&&h-d>0)return o=h/(h-d),t.copy(i).addScaledVector(vr,o);Mh.subVectors(e,r);let m=vr.dot(Mh),u=Mr.dot(Mh);if(u>=0&&m<=u)return t.copy(r);let v=m*l-h*u;if(v<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Mr,a);let g=d*u-m*f;if(g<=0&&f-d>=0&&m-u>=0)return Xf.subVectors(r,s),a=(f-d)/(f-d+(m-u)),t.copy(s).addScaledVector(Xf,a);let _=1/(g+v+p);return o=v*_,a=p*_,t.copy(i).addScaledVector(vr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fi=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Ba.subVectors(this.max,vo),br.subVectors(e.a,vo),Sr.subVectors(e.b,vo),wr.subVectors(e.c,vo),_s.subVectors(Sr,br),ys.subVectors(wr,Sr),Vs.subVectors(br,wr);let t=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-Vs.z,Vs.y,_s.z,0,-_s.x,ys.z,0,-ys.x,Vs.z,0,-Vs.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-Vs.y,Vs.x,0];return!Th(t,br,Sr,wr,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,br,Sr,wr,Ba))?!1:(ka.crossVectors(_s,ys),t=[ka.x,ka.y,ka.z],Th(t,br,Sr,wr,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new J,new J,new J,new J,new J,new J,new J,new J],vi=new J,Oa=new Fi,br=new J,Sr=new J,wr=new J,_s=new J,ys=new J,Vs=new J,vo=new J,Ba=new J,ka=new J,Hs=new J;function Th(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hs.fromArray(n,r);let a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),h=e.dot(Hs),l=t.dot(Hs),d=i.dot(Hs);if(Math.max(-Math.max(h,l,d),Math.min(h,l,d))>a)return!1}return!0}var un=new J,Ga=new yt,sg=0,sn=class extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=hi,this.version=0,this._normalizationScale=e!==void 0?du(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xd(e,this.array)}};var Uo=class extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fo=class extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Lt=class extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}},rg=new Fi,Mo=new J,Ah=new J,ji=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):rg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);let t=Mo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Mo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Ah)),this.expandByPoint(Mo.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},og=0,li=new Pt,Eh=new qt,Tr=new J,ei=new Fi,bo=new Fi,yn=new J,$t=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?Fo:Uo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(ei.min,bo.min),ei.expandByPoint(yn),yn.addVectors(ei.max,bo.max),ei.expandByPoint(yn)):(ei.expandByPoint(bo.min),ei.expandByPoint(bo.max))}ei.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],h=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)yn.fromBufferAttribute(a,l),h&&(Tr.fromBufferAttribute(e,l),yn.add(Tr)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],h=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new J,h[D]=new J;let d=new J,f=new J,p=new J,m=new yt,u=new yt,v=new yt,g=new J,_=new J;function T(D,L,I){l[D]=l[L]=l[I]=1,d.fromBufferAttribute(i,D),f.fromBufferAttribute(i,L),p.fromBufferAttribute(i,I),m.fromBufferAttribute(r,D),u.fromBufferAttribute(r,L),v.fromBufferAttribute(r,I),f.sub(d),p.sub(d),u.sub(m),v.sub(m);let k=1/(u.x*v.y-v.x*u.y);isFinite(k)&&(g.copy(f).multiplyScalar(v.y).addScaledVector(p,-u.y).multiplyScalar(k),_.copy(p).multiplyScalar(u.x).addScaledVector(f,-v.x).multiplyScalar(k),a[D].add(g),a[L].add(g),a[I].add(g),h[D].add(_),h[L].add(_),h[I].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let D=0,L=C.length;D<L;++D){let I=C[D],k=I.start,N=I.count;for(let O=k,X=k+N;O<X;O+=3)T(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let b=new J,A=new J,S=new J,x=new J;function w(D){S.fromBufferAttribute(s,D),x.copy(S);let L=a[D];b.copy(L),b.sub(S.multiplyScalar(S.dot(L))).normalize(),A.crossVectors(x,L);let k=A.dot(h[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,k)}for(let D=0,L=i.count;D<L;++D)l[D]&&w(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new J,r=new J,o=new J,a=new J,h=new J,l=new J,d=new J,f=new J;if(e)for(let p=0,m=e.count;p<m;p+=3){let u=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,u),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,u),h.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(d),h.add(d),l.add(d),i.setXYZ(u,a.x,a.y,a.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,h){let l=a.array,d=a.itemSize,f=a.normalized,p=new l.constructor(h.length*d),m=0,u=0;for(let v=0,g=h.length;v<g;v++){a.isInterleavedBufferAttribute?m=h[v]*a.data.stride+a.offset:m=h[v]*d;for(let _=0;_<d;_++)p[u++]=l[m++]}return new sn(p,d,f)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let h=s[a],l=e(h,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let h=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let p=l[d],m=e(p,i);h.push(m)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let h in i){let l=i[h];e.data.attributes[h]=l.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],d=[];for(let f=0,p=l.length;f<p;f++){let m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(s[h]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ch=new J,ag=new J,lg=new ut,Mi=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ch.subVectors(i,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||lg.getNormalMatrix(e),s=this.coplanarPoint(Ch).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cg=0,Qi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Rs,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new yt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ji=new J,Rh=new J,Va=new J,Ha=new J,Oo=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Rh.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),Ha.copy(this.origin).sub(Rh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Va),a=Ha.dot(this.direction),h=-Ha.dot(Va),l=Ha.lengthSq(),d=Math.abs(1-o*o),f,p,m,u;if(d>0)if(f=o*h-a,p=o*a-h,u=r*d,f>=0)if(p>=-u)if(p<=u){let v=1/d;f*=v,p*=v,m=f*(f+o*p+2*a)+p*(o*f+p+2*h)+l}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*h)+l;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*h)+l;else p<=-u?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-h),r),m=-f*f+p*(p+2*h)+l):p<=u?(f=0,p=Math.min(Math.max(-r,-h),r),m=p*(p+2*h)+l):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-h),r),m=-f*f+p*(p+2*h)+l);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Rh).addScaledVector(Va,p),m}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);let i=Ji.dot(this.direction),s=Ji.dot(Ji)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,h,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,h=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,h=(e.min.z-p.z)*f),i>h||a>s)||((a>i||i!==i)&&(i=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,h=a.x,l=a.y,d=a.z,f=e.x-o.x,p=e.y-o.y,m=e.z-o.z,u=t.x-o.x,v=t.y-o.y,g=t.z-o.z,_=i.x-o.x,T=i.y-o.y,C=i.z-o.z,b=Math.abs(h),A=Math.abs(l),S=Math.abs(d),x,w,D,L,I,k,N,O,X,q,ee,ie;if(b>=A&&b>=S?(D=h,k=f,X=u,ie=_,h>=0?(x=l,w=d,L=p,I=m,N=v,O=g,q=T,ee=C):(x=d,w=l,L=m,I=p,N=g,O=v,q=C,ee=T)):A>=S?(D=l,k=p,X=v,ie=T,l>=0?(x=d,w=h,L=m,I=f,N=g,O=u,q=C,ee=_):(x=h,w=d,L=f,I=m,N=u,O=g,q=_,ee=C)):(D=d,k=m,X=g,ie=C,d>=0?(x=h,w=l,L=f,I=p,N=u,O=v,q=_,ee=T):(x=l,w=h,L=p,I=f,N=v,O=u,q=T,ee=_)),D===0)return null;let K=x/D,F=w/D,B=1/D,V=L-K*k,ne=I-F*k,Q=N-K*X,ae=O-F*X,W=q-K*ie,ue=ee-F*ie,me=W*ae-ue*Q,Ie=V*ue-ne*W,$e=Q*ne-ae*V;if(s){if(me<0||Ie<0||$e<0)return null}else if((me<0||Ie<0||$e<0)&&(me>0||Ie>0||$e>0))return null;let Ee=me+Ie+$e;if(Ee===0)return null;let ot=B*(me*k+Ie*X+$e*ie);return(Ee>0?ot<0:ot>0)?null:this.at(ot/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vt=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qf=new Pt,Ws=new Oo,Wa=new ji,Yf=new J,Xa=new J,qa=new J,Ya=new J,Ih=new J,Za=new J,Zf=new J,Ja=new J,St=class extends qt{constructor(e=new $t,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Za.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let d=a[h],f=r[h];d!==0&&(Ih.fromBufferAttribute(f,e),o?Za.addScaledVector(Ih,d):Za.addScaledVector(Ih.sub(t),d))}t.add(Za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(Wa.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Wa,Yf)===null||Ws.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(qf.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(qf),!(i.boundingBox!==null&&Ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let u=0,v=p.length;u<v;u++){let g=p[u],_=o[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,A=C;b<A;b+=3){let S=a.getX(b),x=a.getX(b+1),w=a.getX(b+2);s=Ka(this,_,e,i,l,d,f,S,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let u=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=u,_=v;g<_;g+=3){let T=a.getX(g),C=a.getX(g+1),b=a.getX(g+2);s=Ka(this,o,e,i,l,d,f,T,C,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let u=0,v=p.length;u<v;u++){let g=p[u],_=o[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(h.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,A=C;b<A;b+=3){let S=b,x=b+1,w=b+2;s=Ka(this,_,e,i,l,d,f,S,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let u=Math.max(0,m.start),v=Math.min(h.count,m.start+m.count);for(let g=u,_=v;g<_;g+=3){let T=g,C=g+1,b=g+2;s=Ka(this,o,e,i,l,d,f,T,C,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function hg(n,e,t,i,s,r,o,a){let h;if(e.side===Cn?h=i.intersectTriangle(o,r,s,!0,a):h=i.intersectTriangle(s,r,o,e.side===Cs,a),h===null)return null;Ja.copy(a),Ja.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ja);return l<t.near||l>t.far?null:{distance:l,point:Ja.clone(),object:n}}function Ka(n,e,t,i,s,r,o,a,h,l){n.getVertexPosition(a,Xa),n.getVertexPosition(h,qa),n.getVertexPosition(l,Ya);let d=hg(n,e,t,i,Xa,qa,Ya,Zf);if(d){let f=new J;Ms.getBarycoord(Zf,Xa,qa,Ya,f),s&&(d.uv=Ms.getInterpolatedAttribute(s,a,h,l,f,new yt)),r&&(d.uv1=Ms.getInterpolatedAttribute(r,a,h,l,f,new yt)),o&&(d.normal=Ms.getInterpolatedAttribute(o,a,h,l,f,new J),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:h,c:l,normal:new J,materialIndex:0};Ms.getNormal(Xa,qa,Ya,p.normal),d.face=p,d.barycoord=f}return d}var qs=class extends Gn{constructor(e=null,t=1,i=1,s,r,o,a,h,l=vn,d=vn,f,p){super(null,o,a,h,l,d,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=class extends sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new Pt,Jf=new Pt,$a=[],Kf=new Fi,ug=new Pt,So=new St,wo=new ji,Vn=class extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),Kf.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(Kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),wo.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),Jf.multiplyMatrices(i,Ar),So.matrixWorld=Jf,So.raycast(e,$a);for(let o=0,a=$a.length;o<a;o++){let h=$a[o];h.instanceId=r,h.object=this,t.push(h)}$a.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(s*this.count),s,this.count,Gl,hi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,h=s*e;return r[h]=a,r.set(i,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xs=new ji,fg=new yt(.5,.5),ja=new J,Ss=class{constructor(e=new Mi,t=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],h=r[2],l=r[3],d=r[4],f=r[5],p=r[6],m=r[7],u=r[8],v=r[9],g=r[10],_=r[11],T=r[12],C=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-o,m-d,_-u,A-T).normalize(),s[1].setComponents(l+o,m+d,_+u,A+T).normalize(),s[2].setComponents(l+a,m+f,_+v,A+C).normalize(),s[3].setComponents(l-a,m-f,_-v,A-C).normalize(),i)s[4].setComponents(h,p,g,b).normalize(),s[5].setComponents(l-h,m-p,_-g,A-b).normalize();else if(s[4].setComponents(l-h,m-p,_-g,A-b).normalize(),t===ci)s[5].setComponents(l+h,m+p,_+g,A+b).normalize();else if(t===Lr)s[5].setComponents(h,p,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=fg.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ja.x=s.normal.x>0?e.max.x:e.min.x,ja.y=s.normal.y>0?e.max.y:e.min.y,ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$f=new Pt,yl=class n{constructor(){this.coordinateSystem=ci,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];$f.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ss),i[s].setFromProjectionMatrix($f,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ss),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var vl=class extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jf=new Pt,Uh=new Oo,Qa=new ji,el=new J,Bo=class extends qt{constructor(e=new $t,t=new vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;jf.copy(s).invert(),Uh.copy(e.ray).applyMatrix4(jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=i.index,f=i.attributes.position;if(l!==null){let p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let u=p,v=m;u<v;u++){let g=l.getX(u);el.fromBufferAttribute(f,g),Qf(el,g,h,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let u=p,v=m;u<v;u++)el.fromBufferAttribute(f,u),Qf(el,u,h,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qf(n,e,t,i,s,r,o){let a=Uh.distanceSqToPoint(n);if(a<t){let h=new J;Uh.closestPointToPoint(n,h),h.applyMatrix4(i);let l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ko=class extends Gn{constructor(e=[],t=js,i,s,r,o,a,h,l,d){super(e,t,i,s,r,o,a,h,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Gn{constructor(e,t,i,s,r,o,a,h,l){super(e,t,i,s,r,o,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends Gn{constructor(e,t,i=Si,s,r,o,a=vn,h=vn,l,d=$i,f=1){if(d!==$i&&d!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,o,a,h,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Go=class extends es{constructor(e,t=Si,i=js,s,r,o=vn,a=vn,h,l=$i){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,h,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vo=class extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class n extends $t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],l=[],d=[],f=[],p=0,m=0;u("z","y","x",-1,-1,i,t,e,o,r,0),u("z","y","x",1,-1,i,t,-e,o,r,1),u("x","z","y",1,1,e,i,t,s,o,2),u("x","z","y",1,-1,e,i,-t,s,o,3),u("x","y","z",1,-1,e,t,i,s,r,4),u("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function u(v,g,_,T,C,b,A,S,x,w,D){let L=b/x,I=A/w,k=b/2,N=A/2,O=S/2,X=x+1,q=w+1,ee=0,ie=0,K=new J;for(let F=0;F<q;F++){let B=F*I-N;for(let V=0;V<X;V++){let ne=V*L-k;K[v]=ne*T,K[g]=B*C,K[_]=O,l.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[_]=S>0?1:-1,d.push(K.x,K.y,K.z),f.push(V/x),f.push(1-F/w),ee+=1}}for(let F=0;F<w;F++)for(let B=0;B<x;B++){let V=p+B+X*F,ne=p+B+X*(F+1),Q=p+(B+1)+X*(F+1),ae=p+(B+1)+X*F;h.push(V,ne,ae),h.push(ne,Q,ae),ie+=6}a.addGroup(m,ie,D),m+=ie,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zs=class n extends $t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],h=[],l=new J,d=new yt;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let m=i+f/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[p]/e+1)/2,d.y=(o[p+1]/e+1)/2,h.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Hn=class n extends $t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],p=[],m=[],u=0,v=[],g=i/2,_=0;T(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(p,3)),this.setAttribute("uv",new Lt(m,2));function T(){let b=new J,A=new J,S=0,x=(t-e)/i;for(let w=0;w<=r;w++){let D=[],L=w/r,I=L*(t-e)+e;for(let k=0;k<=s;k++){let N=k/s,O=N*h+a,X=Math.sin(O),q=Math.cos(O);A.x=I*X,A.y=-L*i+g,A.z=I*q,f.push(A.x,A.y,A.z),b.set(X,x,q).normalize(),p.push(b.x,b.y,b.z),m.push(N,1-L),D.push(u++)}v.push(D)}for(let w=0;w<s;w++)for(let D=0;D<r;D++){let L=v[D][w],I=v[D+1][w],k=v[D+1][w+1],N=v[D][w+1];(e>0||D!==0)&&(d.push(L,I,N),S+=3),(t>0||D!==r-1)&&(d.push(I,k,N),S+=3)}l.addGroup(_,S,0),_+=S}function C(b){let A=u,S=new yt,x=new J,w=0,D=b===!0?e:t,L=b===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*L,0),p.push(0,L,0),m.push(.5,.5),u++;let I=u;for(let k=0;k<=s;k++){let O=k/s*h+a,X=Math.cos(O),q=Math.sin(O);x.x=D*q,x.y=g*L,x.z=D*X,f.push(x.x,x.y,x.z),p.push(0,L,0),S.x=X*.5+.5,S.y=q*.5*L+.5,m.push(S.x,S.y),u++}for(let k=0;k<s;k++){let N=A+k,O=I+k;b===!0?d.push(O,O+1,N):d.push(O+1,O,N),w+=3}l.addGroup(_,w,b===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ho=class n extends $t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),d(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let C=new J,b=new J,A=new J;for(let S=0;S<t.length;S+=3)m(t[S+0],C),m(t[S+1],b),m(t[S+2],A),h(C,b,A,T)}function h(T,C,b,A){let S=A+1,x=[];for(let w=0;w<=S;w++){x[w]=[];let D=T.clone().lerp(b,w/S),L=C.clone().lerp(b,w/S),I=S-w;for(let k=0;k<=I;k++)k===0&&w===S?x[w][k]=D:x[w][k]=D.clone().lerp(L,k/I)}for(let w=0;w<S;w++)for(let D=0;D<2*(S-w)-1;D++){let L=Math.floor(D/2);D%2===0?(p(x[w][L+1]),p(x[w+1][L]),p(x[w][L])):(p(x[w][L+1]),p(x[w+1][L+1]),p(x[w+1][L]))}}function l(T){let C=new J;for(let b=0;b<r.length;b+=3)C.x=r[b+0],C.y=r[b+1],C.z=r[b+2],C.normalize().multiplyScalar(T),r[b+0]=C.x,r[b+1]=C.y,r[b+2]=C.z}function d(){let T=new J;for(let C=0;C<r.length;C+=3){T.x=r[C+0],T.y=r[C+1],T.z=r[C+2];let b=g(T)/2/Math.PI+.5,A=_(T)/Math.PI+.5;o.push(b,1-A)}u(),f()}function f(){for(let T=0;T<o.length;T+=6){let C=o[T+0],b=o[T+2],A=o[T+4],S=Math.max(C,b,A),x=Math.min(C,b,A);S>.9&&x<.1&&(C<.2&&(o[T+0]+=1),b<.2&&(o[T+2]+=1),A<.2&&(o[T+4]+=1))}}function p(T){r.push(T.x,T.y,T.z)}function m(T,C){let b=T*3;C.x=e[b+0],C.y=e[b+1],C.z=e[b+2]}function u(){let T=new J,C=new J,b=new J,A=new J,S=new yt,x=new yt,w=new yt;for(let D=0,L=0;D<r.length;D+=9,L+=6){T.set(r[D+0],r[D+1],r[D+2]),C.set(r[D+3],r[D+4],r[D+5]),b.set(r[D+6],r[D+7],r[D+8]),S.set(o[L+0],o[L+1]),x.set(o[L+2],o[L+3]),w.set(o[L+4],o[L+5]),A.copy(T).add(C).add(b).divideScalar(3);let I=g(A);v(S,L+0,T,I),v(x,L+2,C,I),v(w,L+4,b,I)}}function v(T,C,b,A){A<0&&T.x===1&&(o[C]=T.x-1),b.x===0&&b.z===0&&(o[C]=A/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function _(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var ts=class n extends Ho{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ns=class n extends Ho{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Yn=class n extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),h=Math.floor(s),l=a+1,d=h+1,f=e/a,p=t/h,m=[],u=[],v=[],g=[];for(let _=0;_<d;_++){let T=_*p-o;for(let C=0;C<l;C++){let b=C*f-r;u.push(b,-T,0),v.push(0,0,1),g.push(C/a),g.push(1-_/h)}}for(let _=0;_<h;_++)for(let T=0;T<a;T++){let C=T+l*_,b=T+l*(_+1),A=T+1+l*(_+1),S=T+1+l*_;m.push(C,b,S),m.push(b,A,S)}this.setIndex(m),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Wo=class n extends $t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],h=[],l=[],d=[],f=e,p=(t-e)/s,m=new J,u=new yt;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let _=r+g/i*o;m.x=f*Math.cos(_),m.y=f*Math.sin(_),h.push(m.x,m.y,m.z),l.push(0,0,1),u.x=(m.x/t+1)/2,u.y=(m.y/t+1)/2,d.push(u.x,u.y)}f+=p}for(let v=0;v<s;v++){let g=v*(i+1);for(let _=0;_<i;_++){let T=_+g,C=T,b=T+i+1,A=T+i+2,S=T+1;a.push(C,b,S),a.push(b,A,S)}}this.setIndex(a),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ws=class n extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let h=Math.min(o+a,Math.PI),l=0,d=[],f=new J,p=new J,m=[],u=[],v=[],g=[];for(let _=0;_<=i;_++){let T=[],C=_/i,b=o+C*a,A=e*Math.cos(b),S=Math.sqrt(e*e-A*A),x=0;_===0&&o===0?x=.5/t:_===i&&h===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let D=w/t,L=s+D*r;f.x=-S*Math.cos(L),f.y=A,f.z=S*Math.sin(L),u.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),g.push(D+x,1-C),T.push(l++)}d.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){let C=d[_][T+1],b=d[_][T],A=d[_+1][T],S=d[_+1][T+1];(_!==0||o>0)&&m.push(C,b,S),(_!==i-1||h<Math.PI)&&m.push(b,A,S)}this.setIndex(m),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xo=class n extends $t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let h=[],l=[],d=[],f=[],p=new J,m=new J,u=new J;for(let v=0;v<=i;v++){let g=o+v/i*a;for(let _=0;_<=s;_++){let T=_/s*r;m.x=(e+t*Math.cos(g))*Math.cos(T),m.y=(e+t*Math.cos(g))*Math.sin(T),m.z=t*Math.sin(g),l.push(m.x,m.y,m.z),p.x=e*Math.cos(T),p.y=e*Math.sin(T),u.subVectors(m,p).normalize(),d.push(u.x,u.y,u.z),f.push(_/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=s;g++){let _=(s+1)*v+g-1,T=(s+1)*(v-1)+g-1,C=(s+1)*(v-1)+g,b=(s+1)*v+g;h.push(_,T,b),h.push(T,C,b)}this.setIndex(h),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function er(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(ed(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ed(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Un(n){let e={};for(let t=0;t<n.length;t++){let i=er(n[t]);for(let s in i)e[s]=i[s]}return e}function ed(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function dg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var Yd={clone:er,merge:Un},pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new yt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new J().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Kt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ml=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nn=class extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var bl=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sl=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ts=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let h=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends Ts{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,a=2*t-i;break;case zh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Nh:o=e,h=2*i-t;break;case zh:o=1,h=i+s[1]-s[0];break;default:o=e-1,h=t}let l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(h-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,u=(i-t)/(s-t),v=u*u,g=v*u,_=-p*g+2*p*v-p*u,T=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*u+1,C=(-1-m)*g+(1.5+m)*v+.5*u,b=m*g-m*v;for(let A=0;A!==a;++A)r[A]=_*o[d+A]+T*o[l+A]+C*o[h+A]+b*o[f+A];return r}},Tl=class extends Ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,d=(i-t)/(s-t),f=1-d;for(let p=0;p!==a;++p)r[p]=o[l+p]*f+o[h+p]*d;return r}},Al=class extends Ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},El=class extends Ts{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let u=(i-t)/(s-t),v=1-u;for(let g=0;g!==a;++g)r[g]=o[l+g]*v+o[h+g]*u;return r}let p=a*2,m=e-1;for(let u=0;u!==a;++u){let v=o[l+u],g=o[h+u],_=m*p+u*2,T=f[_],C=f[_+1],b=e*p+u*2,A=d[b],S=d[b+1],x=xg(i,t,T,A,s);r[u]=Zd(x,v,C,S,g)}return r}};function Zd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function gg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function xg(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Zd(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let h=gg(r,e,t,i,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-a/h))}return r}var ni=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),tl(e.settings)&&(i.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new El(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Co:t=this.InterpolantFactoryMethodDiscrete;break;case ml:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break;case Lh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ct("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;tl(this.settings)&&(td(this.settings.inTangents,e),td(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;tl(this.settings)&&(nd(this.settings.inTangents,e),nd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let h=i[a];if(typeof h=="number"&&isNaN(h)){pt("KeyframeTrack: Time is not a valid number.",this,a,h),e=!1;break}if(o!==null&&o>h){pt("KeyframeTrack: Out of order keys.",this,a,h,o),e=!1;break}o=h}if(s!==void 0&&L0(s))for(let a=0,h=s.length;a!==h;++a){let l=s[a];if(isNaN(l)){pt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,r=e.length-1,o=1;for(let a=1;a<r;++a){let h=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)h=!0;else{let f=a*i,p=f-i,m=f+i;for(let u=0;u!==i;++u){let v=t[f+u];if(v!==t[p+u]||v!==t[m+u]){h=!0;break}}}if(h){if(a!==o){e[o]=e[a];let f=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,h=o*i,l=0;l!==i;++l)t[h+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function td(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function nd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=ml;var As=class extends ni{constructor(e,t,i){super(e,t,i)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Co;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Cl.prototype.ValueTypeName="color";var Rl=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Rl.prototype.ValueTypeName="number";var Il=class extends Ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(i-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)ln.slerpFlat(r,0,o,l-a,o,l,h);return r}},qo=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends ni{constructor(e,t,i){super(e,t,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Co;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Pl.prototype.ValueTypeName="vector";var Ll=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=l.length;f<p;f+=2){let m=l[f],u=l[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jd=new Ll,Dl=class{constructor(e){this.manager=e!==void 0?e:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=class extends qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Yo=class extends Fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ph=new Pt,id=new J,sd=new J,Zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ph.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ph,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,h=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*o,0,0,.5*o+h,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+h,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nl=new J,il=new ln,Ni=new J,Jo=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nl,il,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(nl,il,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new J,rd=new yt,od=new yt,Nn=class extends Jo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,rd,od),t.subVectors(od,rd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,t-=o.offsetY*i/l,s*=o.width/h,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Fh=class extends Zo{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}},Ko=class extends Fr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$o=class extends Jo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,h=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oh=class extends Zo{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cr=-90,Rr=1,Or=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Cr,Rr,e,t);s.layers=this.layers,this.add(s);let r=new Nn(Cr,Rr,e,t);r.layers=this.layers,this.add(r);let o=new Nn(Cr,Rr,e,t);o.layers=this.layers,this.add(o);let a=new Nn(Cr,Rr,e,t);a.layers=this.layers,this.add(a);let h=new Nn(Cr,Rr,e,t);h.layers=this.layers,this.add(h);let l=new Nn(Cr,Rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,h]=t;for(let l of t)this.remove(l);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,l,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}},Nl=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var mu="\\[\\]\\.:\\/",_g=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",yg="[^"+mu.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",gu),Mg=/(WCOD+)?/.source.replace("WCOD",yg),bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),wg=new RegExp("^"+vg+Mg+bg+Sg+"$"),Tg=["material","materials","bones","map"],Bh=class{constructor(e,t,i){let s=i||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_g,"")}static parseTrackName(e){let t=wg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Tg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let h=i(a.children);if(h)return h}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Bh;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TM=new Float32Array(1);var kh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function xu(n,e,t,i){let s=Ag(i);switch(t){case su:return n*e;case Gl:return n*e/s.components*s.byteLength;case Vl:return n*e/s.components*s.byteLength;case Is:return n*e*2/s.components*s.byteLength;case Hl:return n*e*2/s.components*s.byteLength;case ru:return n*e*3/s.components*s.byteLength;case ii:return n*e*4/s.components*s.byteLength;case Wl:return n*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:case Zl:return Math.max(n,16)*Math.max(e,8)/4;case Xl:case Yl:return Math.max(n,8)*Math.max(e,8)/2;case Jl:case Kl:case jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $l:case oa:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _c:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case aa:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ag(n){switch(n){case Jn:case eu:return{byteLength:1,components:1};case Gr:case tu:case wi:return{byteLength:2,components:1};case Bl:case kl:return{byteLength:2,components:4};case Si:case Ol:case hi:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Dg(n){let e=new WeakMap;function t(a,h){let l=a.array,d=a.usage,f=l.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,h,l){let d=h.array,f=h.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((m,u)=>m.start-u.start);let p=0;for(let m=1;m<f.length;m++){let u=f[p],v=f[m];v.start<=u.start+u.count+1?u.count=Math.max(u.count,v.start+v.count-u.start):(++p,f[p]=v)}f.length=p+1;for(let m=0,u=f.length;m<u;m++){let v=f[m];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=e.get(a);h&&(n.deleteBuffer(h.buffer),e.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var Ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,Ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kg=`#ifdef USE_AOMAP
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
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
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
#endif`,Hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ix=`PhysicalMaterial material;
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
#endif`,Px=`uniform sampler2D dfgLUT;
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
}`,Lx=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,Wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n_=`#ifdef USE_NORMALMAP
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
#endif`,i_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,__=`float getShadowMask() {
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
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform float backgroundBlurriness;
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
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
}`,k_=`#if DEPTH_PACKING == 3200
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
}`,G_=`#define DISTANCE
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
}`,V_=`#define DISTANCE
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`uniform float scale;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#define LAMBERT
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
}`,K_=`#define LAMBERT
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
}`,$_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,Q_=`#define NORMAL
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
}`,e1=`#define NORMAL
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
}`,t1=`#define PHONG
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
}`,n1=`#define PHONG
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
}`,i1=`#define STANDARD
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
}`,s1=`#define STANDARD
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
}`,r1=`#define TOON
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
}`,o1=`#define TOON
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
}`,a1=`uniform float size;
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,h1=`uniform vec3 color;
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
}`,u1=`uniform float rotation;
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
}`,f1=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Ng,alphahash_pars_fragment:zg,alphamap_fragment:Ug,alphamap_pars_fragment:Fg,alphatest_fragment:Og,alphatest_pars_fragment:Bg,aomap_fragment:kg,aomap_pars_fragment:Gg,batching_pars_vertex:Vg,batching_vertex:Hg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:qg,iridescence_fragment:Yg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:Kg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:jg,color_fragment:Qg,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,defaultnormal_vertex:sx,displacementmap_pars_vertex:rx,displacementmap_vertex:ox,emissivemap_fragment:ax,emissivemap_pars_fragment:lx,colorspace_fragment:cx,colorspace_pars_fragment:hx,envmap_fragment:ux,envmap_common_pars_fragment:fx,envmap_pars_fragment:dx,envmap_pars_vertex:px,envmap_physical_pars_fragment:Tx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:xx,fog_fragment:_x,fog_pars_fragment:yx,gradientmap_pars_fragment:vx,lightmap_pars_fragment:Mx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:Sx,lights_pars_begin:wx,lights_toon_fragment:Ax,lights_toon_pars_fragment:Ex,lights_phong_fragment:Cx,lights_phong_pars_fragment:Rx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Px,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Nx,lightprobes_pars_fragment:zx,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Bx,map_fragment:kx,map_pars_fragment:Gx,map_particle_fragment:Vx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Wx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:qx,morphcolor_vertex:Yx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Jx,morphtarget_vertex:Kx,normal_fragment_begin:$x,normal_fragment_maps:jx,normal_pars_fragment:Qx,normal_pars_vertex:e_,normal_vertex:t_,normalmap_pars_fragment:n_,clearcoat_normal_fragment_begin:i_,clearcoat_normal_fragment_maps:s_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:o_,opaque_fragment:a_,packing:l_,premultiplied_alpha_fragment:c_,project_vertex:h_,dithering_fragment:u_,dithering_pars_fragment:f_,roughnessmap_fragment:d_,roughnessmap_pars_fragment:p_,shadowmap_pars_fragment:m_,shadowmap_pars_vertex:g_,shadowmap_vertex:x_,shadowmask_pars_fragment:__,skinbase_vertex:y_,skinning_pars_vertex:v_,skinning_vertex:M_,skinnormal_vertex:b_,specularmap_fragment:S_,specularmap_pars_fragment:w_,tonemapping_fragment:T_,tonemapping_pars_fragment:A_,transmission_fragment:E_,transmission_pars_fragment:C_,uv_pars_fragment:R_,uv_pars_vertex:I_,uv_vertex:P_,worldpos_vertex:L_,background_vert:D_,background_frag:N_,backgroundCube_vert:z_,backgroundCube_frag:U_,cube_vert:F_,cube_frag:O_,depth_vert:B_,depth_frag:k_,distance_vert:G_,distance_frag:V_,equirect_vert:H_,equirect_frag:W_,linedashed_vert:X_,linedashed_frag:q_,meshbasic_vert:Y_,meshbasic_frag:Z_,meshlambert_vert:J_,meshlambert_frag:K_,meshmatcap_vert:$_,meshmatcap_frag:j_,meshnormal_vert:Q_,meshnormal_frag:e1,meshphong_vert:t1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:s1,meshtoon_vert:r1,meshtoon_frag:o1,points_vert:a1,points_frag:l1,shadow_vert:c1,shadow_frag:h1,sprite_vert:u1,sprite_frag:f1},He={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ki={basic:{uniforms:Un([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Un([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Un([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Un([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Un([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new tt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Un([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Un([He.points,He.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Un([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Un([He.common,He.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Un([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Un([He.sprite,He.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Un([He.common,He.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Un([He.lights,He.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ki.physical={uniforms:Un([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var Sc={r:0,b:0,g:0},d1=new Pt,_p=new ut;_p.set(-1,0,0,0,1,0,0,0,1);function p1(n,e,t,i,s,r){let o=new tt(0),a=s===!0?0:1,h,l,d=null,f=0,p=null;function m(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let b=T.backgroundBlurriness>0;C=e.get(C,b)}return C}function u(T){let C=!1,b=m(T);b===null?g(o,a):b&&b.isColor&&(g(b,1),C=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,C){let b=m(C);b&&b.isCubeTexture?(l===void 0&&(l=new St(new tn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:er(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(d1.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_p),l.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Gt,(d!==b||f!==b.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new St(new Yn(2,2),new Zn({name:"BackgroundMaterial",uniforms:er(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function g(T,C){T.getRGB(Sc,pu(n)),t.buffers.color.setClear(Sc.r,Sc.g,Sc.b,C,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,C=1){o.set(T),a=C,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,g(o,a)},render:u,addToRenderList:v,dispose:_}}function m1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(I,k,N,O,X){let q=!1,ee=f(I,O,N,k);r!==ee&&(r=ee,l(r.object)),q=m(I,O,N,X),q&&u(I,O,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(I,k,N,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function d(I){return n.deleteVertexArray(I)}function f(I,k,N,O){let X=O.wireframe===!0,q=i[k.id];q===void 0&&(q={},i[k.id]=q);let ee=I.isInstancedMesh===!0?I.id:0,ie=q[ee];ie===void 0&&(ie={},q[ee]=ie);let K=ie[N.id];K===void 0&&(K={},ie[N.id]=K);let F=K[X];return F===void 0&&(F=p(h()),K[X]=F),F}function p(I){let k=[],N=[],O=[];for(let X=0;X<t;X++)k[X]=0,N[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:N,attributeDivisors:O,object:I,attributes:{},index:null}}function m(I,k,N,O){let X=r.attributes,q=k.attributes,ee=0,ie=N.getAttributes();for(let K in ie)if(ie[K].location>=0){let B=X[K],V=q[K];if(V===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),B===void 0||B.attribute!==V||V&&B.data!==V.data)return!0;ee++}return r.attributesNum!==ee||r.index!==O}function u(I,k,N,O){let X={},q=k.attributes,ee=0,ie=N.getAttributes();for(let K in ie)if(ie[K].location>=0){let B=q[K];B===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(B=I.instanceColor));let V={};V.attribute=B,B&&B.data&&(V.data=B.data),X[K]=V,ee++}r.attributes=X,r.attributesNum=ee,r.index=O}function v(){let I=r.newAttributes;for(let k=0,N=I.length;k<N;k++)I[k]=0}function g(I){_(I,0)}function _(I,k){let N=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;N[I]=1,O[I]===0&&(n.enableVertexAttribArray(I),O[I]=1),X[I]!==k&&(n.vertexAttribDivisor(I,k),X[I]=k)}function T(){let I=r.newAttributes,k=r.enabledAttributes;for(let N=0,O=k.length;N<O;N++)k[N]!==I[N]&&(n.disableVertexAttribArray(N),k[N]=0)}function C(I,k,N,O,X,q,ee){ee===!0?n.vertexAttribIPointer(I,k,N,X,q):n.vertexAttribPointer(I,k,N,O,X,q)}function b(I,k,N,O){v();let X=O.attributes,q=N.getAttributes(),ee=k.defaultAttributeValues;for(let ie in q){let K=q[ie];if(K.location>=0){let F=X[ie];if(F===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),F!==void 0){let B=F.normalized,V=F.itemSize,ne=e.get(F);if(ne===void 0)continue;let Q=ne.buffer,ae=ne.type,W=ne.bytesPerElement,ue=ae===n.INT||ae===n.UNSIGNED_INT||F.gpuType===Ol;if(F.isInterleavedBufferAttribute){let me=F.data,Ie=me.isInterleavedBuffer===!0?me.stride:me.itemSize,$e=F.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ee=0;Ee<K.locationSize;Ee++)_(K.location+Ee,me.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)g(K.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Ee=0;Ee<K.locationSize;Ee++)C(K.location+Ee,V/K.locationSize,ae,B,Ie*W,($e+V/K.locationSize*Ee)*W,ue)}else{if(F.isInstancedBufferAttribute){for(let me=0;me<K.locationSize;me++)_(K.location+me,F.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let me=0;me<K.locationSize;me++)g(K.location+me);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let me=0;me<K.locationSize;me++)C(K.location+me,V/K.locationSize,ae,B,V*W,V/K.locationSize*me*W,ue)}}else if(ee!==void 0){let B=ee[ie];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(K.location,B);break;case 3:n.vertexAttrib3fv(K.location,B);break;case 4:n.vertexAttrib4fv(K.location,B);break;default:n.vertexAttrib1fv(K.location,B)}}}}T()}function A(){D();for(let I in i){let k=i[I];for(let N in k){let O=k[N];for(let X in O){let q=O[X];for(let ee in q)d(q[ee].object),delete q[ee];delete O[X]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let k=i[I.id];for(let N in k){let O=k[N];for(let X in O){let q=O[X];for(let ee in q)d(q[ee].object),delete q[ee];delete O[X]}}delete i[I.id]}function x(I){for(let k in i){let N=i[k];for(let O in N){let X=N[O];if(X[I.id]===void 0)continue;let q=X[I.id];for(let ee in q)d(q[ee].object),delete q[ee];delete X[I.id]}}}function w(I){for(let k in i){let N=i[k],O=I.isInstancedMesh===!0?I.id:0,X=N[O];if(X!==void 0){for(let q in X){let ee=X[q];for(let ie in ee)d(ee[ie].object),delete ee[ie];delete X[q]}delete N[O],Object.keys(N).length===0&&delete i[k]}}}function D(){L(),o=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function g1(n,e,t){let i;function s(h){i=h}function r(h,l){n.drawArrays(i,h,l),t.update(l,i,1)}function o(h,l,d){d!==0&&(n.drawArraysInstanced(i,h,l,d),t.update(l,i,d))}function a(h,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,d);let p=0;for(let m=0;m<d;m++)p+=l[m];t.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function x1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ii&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Jn&&x!==hi&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=h(l);d!==l&&(ct("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:u,maxTextureSize:v,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:b,maxSamples:A,samples:S}}function _1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Mi,a=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){let u=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,_=n.get(f);if(!s||u===null||u.length===0||r&&!g)r?d(null):l();else{let T=r?0:i,C=T*4,b=_.clippingState||null;h.value=b,b=d(u,p,C,m);for(let A=0;A!==C;++A)b[A]=t[A];_.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,u){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=h.value,u!==!0||g===null){let _=m+v*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<_)&&(g=new Float32Array(_));for(let C=0,b=m;C!==v;++C,b+=4)o.copy(f[C]).applyMatrix4(T,a),o.normal.toArray(g,b),g[b+3]=o.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var ha=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Ks});r.uniforms.tEquirect.value=t;let o=new St(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=Mn),new Or(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Kd=256,y1=3,v1=20,yp=256,vp=16,M1=3,b1=new J,S1=new tt,Tc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Or(1,10,null),this._boxMesh=new St(new tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=b1}=r,h=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=h.autoClear,p=h.autoClearColor,m=h.autoClearDepth,u=h.autoClearStencil,v=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,v===null&&(e.background=h.getClearColor(S1));let g=new Or(i,s,d);return g.position.copy(a),g.update(h,e),h.autoClear=f,h.autoClearColor=p,h.autoClearDepth=m,h.autoClearStencil=u,e.background=v,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Kd,fu(e))}_fromTexture(e,t){e.mapping===js||e.mapping===kr?this._setSize(e.image.length===0?Kd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=$d(e,!1,!1),i=Math.log2(e)-y1;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$d(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===js||e.mapping===kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=w1(),this._integrationMaterial=T1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/vp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-M1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let h=a>0?Math.log2(t)+.5*Math.log2(6/(yp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=h,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=A1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function $d(n,e,t){return new ha(n,{minFilter:is,generateMipmaps:e,type:wi,colorSpace:Ro,depthBuffer:t})}function ua(n,e,t){return new Zn({name:n,uniforms:e,vertexShader:vt.cube_vert,fragmentShader:t,side:Cn,blending:Ks,depthTest:!1,depthWrite:!1})}function w1(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yp}u

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
	`)}function T1(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vp}},`

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
	`)}function A1(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${v1}
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
	`)}function jd(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Qd(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function E1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(p,m=!1){return p==null?null:m?o(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===zl||m===Ul)if(e.has(p)){let u=e.get(p).texture;return a(u,p.mapping)}else{let u=p.image;if(u&&u.height>0){let v=new ha(u.height);return v.fromEquirectangularTexture(n,p),e.set(p,v),p.addEventListener("dispose",l),a(v.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,u=m===zl||m===Ul,v=m===js||m===kr;if(u||v){let g=t.get(p),_=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return i===null&&(i=new Tc(n)),g=u?i.fromEquirectangular(p,g):i.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let T=p.image;return u&&T&&T.height>0||v&&T&&h(T)?(i===null&&(i=new Tc(n)),g=u?i.fromEquirectangular(p):i.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",d),g.texture):null}}}return p}function a(p,m){return m===zl?p.mapping=js:m===Ul&&(p.mapping=kr),p}function h(p){let m=0,u=6;for(let v=0;v<u;v++)p[v]!==void 0&&m++;return m===u}function l(p){let m=p.target;m.removeEventListener("dispose",l);let u=e.get(m);u!==void 0&&(e.delete(m),u.dispose())}function d(p){let m=p.target;m.removeEventListener("dispose",d);let u=t.get(m);u!==void 0&&(t.delete(m),u.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function C1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&To("WebGLRenderer: "+i+" extension not supported."),s}}}function R1(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(u=>delete s[u]);function a(u){h(u.target)}function h(u){u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id],o.unregister(u);let v=r.get(u);v&&(e.remove(v),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(u,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function d(u){let v=u.attributes;for(let g in v)e.update(v[g],n.ARRAY_BUFFER)}function f(u){let v=u.index,g=u.attributes.position,_=0;if(g===void 0)return;let T=v!==null?v.array.length:g.array.length/3-1,C=g.count>=65535?Fo:Uo,b=new C(Math.ceil(T/3)*6,1),A=b.array;if(v!==null){let x=v.array;_=v.version;for(let w=0,D=0;w<T;w+=3){let L=x[w+0],I=x[w+1],k=x[w+2];A[D++]=L,A[D++]=I,A[D++]=I,A[D++]=k,A[D++]=k,A[D++]=L}}else{_=g.version;for(let x=0,w=0;x<T;x+=3){let D=x+0,L=x+1,I=x+2;A[w++]=D,A[w++]=L,A[w++]=L,A[w++]=I,A[w++]=I,A[w++]=D}}b.version=_;let S=r.get(u);S&&e.remove(S),r.set(u,b)}function p(u){let v=r.get(u);if(v){let g=u.index;g!==null&&v.version<g.version&&f(u)}else f(u);return r.get(u)}function m(){for(let u in s){let v=s[u].deref();v!==void 0&&h(v)}}return{get:l,update:d,getWireframeAttribute:p,dispose:m}}function I1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function h(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,f*o,m),t.update(p,i,m))}function d(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,m);let v=0;for(let g=0;g<m;g++)v+=p[g];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=d}function P1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function L1(n,e,t){let i=new WeakMap,s=new Kt;function r(o,a,h){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,p=i.get(a);if(p===void 0||p.count!==f){let D=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",D)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],C=0;m===!0&&(C=1),u===!0&&(C=2),v===!0&&(C=3);let b=a.attributes.position.count*C,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*A*4*f),x=new Lo(S,b,A,f);x.type=hi,x.needsUpdate=!0;let w=C*4;for(let L=0;L<f;L++){let I=g[L],k=_[L],N=T[L],O=b*A*4*L;for(let X=0;X<I.count;X++){let q=X*w;m===!0&&(s.fromBufferAttribute(I,X),S[O+q+0]=s.x,S[O+q+1]=s.y,S[O+q+2]=s.z,S[O+q+3]=0),u===!0&&(s.fromBufferAttribute(k,X),S[O+q+4]=s.x,S[O+q+5]=s.y,S[O+q+6]=s.z,S[O+q+7]=0),v===!0&&(s.fromBufferAttribute(N,X),S[O+q+8]=s.x,S[O+q+9]=s.y,S[O+q+10]=s.z,S[O+q+11]=N.itemSize===4?s.w:1)}}p={count:f,texture:x,size:new yt(b,A)},i.set(a,p),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];let u=a.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",u),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function D1(n,e,t,i,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function a(){r=new WeakMap}function h(l){let d=l.target;d.removeEventListener("dispose",h),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var N1={[Yh]:"LINEAR_TONE_MAPPING",[Zh]:"REINHARD_TONE_MAPPING",[Jh]:"CINEON_TONE_MAPPING",[ea]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[jh]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function z1(n,e,t,i,s,r){let o=new ti(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,h=null,l=null,d=new $t;d.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let f=new Ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new St(d,f),m=new $o(-1,1,1,-1,0,1),u=null,v=null,g=!1,_,T=null,C=[],b=!1;this.setSize=function(A,S){o.setSize(A,S),a!==null&&a.setSize(A,S),h!==null&&h.setSize(A,S);for(let x=0;x<C.length;x++){let w=C[x];w.setSize&&w.setSize(A,S)}},this.setEffects=function(A){C=A,b=C.length>0&&C[0].isRenderPass===!0;let S=o.width,x=o.height;C.length>0&&a===null&&(a=new ti(S,x,{type:wi,depthBuffer:!1,stencilBuffer:!1}),h=new ti(S,x,{type:wi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&C.some(D=>D.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new es(S,x),r===!0&&(l.format=ss,l.type=Qs)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let D=0;D<C.length;D++){let L=C[D];L.setSize&&L.setSize(S,x),w&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(l)}},this.begin=function(A,S){if(g||A.toneMapping===Oi&&C.length===0)return!1;if(T=S,S!==null){let x=S.width,w=S.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return b===!1&&A.setRenderTarget(o),_=A.toneMapping,A.toneMapping=Oi,!0},this.hasRenderPass=function(){return b},this.end=function(A,S){A.toneMapping=_,g=!0;let x=o,w=a;for(let D=0;D<C.length;D++){let L=C[D];L.enabled!==!1&&(L.render(A,w,x,S),L.needsSwap!==!1&&(x=w,w=w===a?h:a))}if(u!==A.outputColorSpace||v!==A.toneMapping){u=A.outputColorSpace,v=A.toneMapping,f.defines={},Rt.getTransfer(u)===Gt&&(f.defines.SRGB_TRANSFER="");let D=N1[v];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(T),A.render(p,m),T=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),h!==null&&h.dispose(),d.dispose(),f.dispose()}}var Mp=new Gn,bp=new es(1,1),Sp=new Go(1),wp=new Lo,Tp=new _l,Ap=new ko,ep=[],tp=[],np=new Float32Array(16),ip=new Float32Array(9),sp=new Float32Array(4);function Xr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ep[s];if(r===void 0&&(r=new Float32Array(s),ep[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ec(n,e){let t=tp[e];t===void 0&&(t=new Int32Array(e),tp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function U1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function O1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function B1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function k1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;sp.set(i),n.uniformMatrix2fv(this.addr,!1,sp),_n(t,i)}}function G1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;ip.set(i),n.uniformMatrix3fv(this.addr,!1,ip),_n(t,i)}}function V1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;np.set(i),n.uniformMatrix4fv(this.addr,!1,np),_n(t,i)}}function H1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function Y1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function J1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function K1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function Cc(n){return n.version===0&&(n.compareFunction=lu,n.needsUpdate=!0),n}function $1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Cc(bp):r=Mp,t.setTexture2D(e||r,s)}function j1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tp,s)}function Q1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Cc(Sp):r=Ap,t.setTextureCube(e||r,s)}function ey(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||wp,s)}function ty(n){switch(n){case 5126:return U1;case 35664:return F1;case 35665:return O1;case 35666:return B1;case 35674:return k1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return H1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return Z1;case 36295:return J1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return ey}}function ny(n,e){n.uniform1fv(this.addr,e)}function iy(n,e){let t=Xr(e,this.size,2);n.uniform2fv(this.addr,t)}function sy(n,e){let t=Xr(e,this.size,3);n.uniform3fv(this.addr,t)}function ry(n,e){let t=Xr(e,this.size,4);n.uniform4fv(this.addr,t)}function oy(n,e){let t=Xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ay(n,e){let t=Xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ly(n,e){let t=Xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cy(n,e){n.uniform1iv(this.addr,e)}function hy(n,e){n.uniform2iv(this.addr,e)}function uy(n,e){n.uniform3iv(this.addr,e)}function fy(n,e){n.uniform4iv(this.addr,e)}function dy(n,e){n.uniform1uiv(this.addr,e)}function py(n,e){n.uniform2uiv(this.addr,e)}function my(n,e){n.uniform3uiv(this.addr,e)}function gy(n,e){n.uniform4uiv(this.addr,e)}function xy(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Cc(bp):o=Mp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function _y(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tp,r[o])}function yy(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Cc(Sp):o=Ap;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function vy(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wp,r[o])}function My(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return hy;case 35668:case 35672:return uy;case 35669:case 35673:return fy;case 5125:return dy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return vy}}var vu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ty(t.type)}},Mu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=My(t.type)}},bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},_u=/(\w+)(\])?(\[|\.)?/g;function rp(n,e){n.seq.push(e),n.map[e.id]=e}function by(n,e,t){let i=n.name,s=i.length;for(_u.lastIndex=0;;){let r=_u.exec(i),o=_u.lastIndex,a=r[1],h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){rp(t,l===void 0?new vu(a,n,e):new Mu(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new bu(a),rp(t,f)),t=f}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),h=e.getUniformLocation(t,a.name);by(a,h,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],h=i[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function op(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Sy=37297,wy=0;function Ty(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ap=new ut;function Ay(n){Rt._getMatrix(ap,Rt.workingColorSpace,n);let e=`mat3( ${ap.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(n)){case Io:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ty(n.getShaderSource(e),a)}else return r}function Ey(n,e){let t=Ay(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Cy={[Yh]:"Linear",[Zh]:"Reinhard",[Jh]:"Cineon",[ea]:"ACESFilmic",[$h]:"AgX",[jh]:"Neutral",[Kh]:"Custom"};function Ry(n,e){let t=Cy[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new J;function Iy(){Rt.getLuminanceCoefficients(wc);let n=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Py(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Ly(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ca(n){return n!==""}function cp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(n){return n.replace(Ny,zy)}function zy(n,e){let t=vt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Su(t)}var Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(n){return n.replace(Uy,Fy)}function Fy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Oy={[Js]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function By(n){return Oy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ky={[kr]:"ENVMAP_MODE_REFRACTION"};function Gy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ky[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vy={[qh]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function Hy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Vy[n.combine]||"ENVMAP_BLENDING_NONE"}function Wy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,h=By(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Gy(t),f=Hy(t),p=Py(t),m=Ly(r),u=s.createProgram(),v,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ca).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ca).join(`
`),g.length>0&&(g+=`
`)):(v=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),g=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Ey("linearToOutputTexel",t.outputColorSpace),Iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),o=Su(o),o=cp(o,t),o=hp(o,t),a=Su(a),a=cp(a,t),a=hp(a,t),o=up(o),a=up(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let T=_+v+o,C=_+g+a,b=op(s,s.VERTEX_SHADER,T),A=op(s,s.FRAGMENT_SHADER,C);s.attachShader(u,b),s.attachShader(u,A),t.index0AttributeName!==void 0?s.bindAttribLocation(u,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(u,0,"position"),s.linkProgram(u);function S(L){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(u)||"",k=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(A)||"",O=I.trim(),X=k.trim(),q=N.trim(),ee=!0,ie=!0;if(s.getProgramParameter(u,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,u,b,A);else{let K=lp(s,b,"vertex"),F=lp(s,A,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(u,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+K+`
`+F)}else O!==""?ct("WebGLProgram: Program Info Log:",O):(X===""||q==="")&&(ie=!1);ie&&(L.diagnostics={runnable:ee,programLog:O,vertexShader:{log:X,prefix:v},fragmentShader:{log:q,prefix:g}})}s.deleteShader(b),s.deleteShader(A),x=new Wr(s,u),w=Dy(s,u)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(u,Sy)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wy++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=b,this.fragmentShader=A,this}var Xy=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tu(e),t.set(e,i)),i}},Tu=class{constructor(e){this.id=Xy++,this.code=e,this.usedTimes=0}};function qy(n){return n===Is||n===oa||n===aa}function Yy(n,e,t,i,s,r){let o=new Do,a=new wu,h=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return h.add(x),x===0?"uv":`uv${x}`}function u(x,w,D,L,I,k){let N=L.fog,O=I.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||X,q),ie=p[x.type],K=i.precision;x.precision!==null&&(K=i.getMaxPrecision(x.precision),K!==x.precision&&ct("WebGLProgram.getParameters:",x.precision,"not supported, using",K,"instead."));let F=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,B=F!==void 0?F.length:0,V=0;O.morphAttributes.position!==void 0&&(V=1),O.morphAttributes.normal!==void 0&&(V=2),O.morphAttributes.color!==void 0&&(V=3);let ne,Q,ae,W;if(ie){let ke=ki[ie];ne=ke.vertexShader,Q=ke.fragmentShader}else{ne=x.vertexShader,Q=x.fragmentShader;let ke=a.getVertexShaderStage(x),Dt=a.getFragmentShaderStage(x);a.update(x,ke,Dt),ae=ke.id,W=Dt.id}let ue=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,$e=I.isBatchedMesh===!0,Ee=!!x.map,ot=!!x.matcap,Ke=!!ee,je=Ke&&ee.isPMREMTexture===!0,Mt=!!x.aoMap,Ct=!!x.lightMap,jt=!!x.bumpMap&&x.wireframe===!1,wt=!!x.normalMap,cn=!!x.displacementMap,Ht=!!x.emissiveMap,Ge=!!x.metalnessMap,Tt=!!x.roughnessMap,te=x.anisotropy>0,j=x.clearcoat>0,Ft=x.diffuseRoughness>0,mt=x.dispersion>0,rt=x.retroreflectivity>0,Be=x.iridescence>0,Wt=x.sheen>0,Qe=x.transmission>0,lt=te&&!!x.anisotropyMap,G=j&&!!x.clearcoatMap,P=j&&!!x.clearcoatNormalMap,re=j&&!!x.clearcoatRoughnessMap,Ce=Ft&&!!x.diffuseRoughnessMap,xe=Be&&!!x.iridescenceMap,Ne=Be&&!!x.iridescenceThicknessMap,ze=Wt&&!!x.sheenColorMap,_e=Wt&&!!x.sheenRoughnessMap,ye=!!x.specularMap,Pe=!!x.specularColorMap,H=!!x.specularIntensityMap,ge=Qe&&!!x.transmissionMap,fe=Qe&&!!x.thicknessMap,Ue=!!x.gradientMap,Te=!!x.alphaMap,Re=x.alphaTest>0,qe=!!x.alphaHash,at=!!x.extensions,be=Oi;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(be=n.toneMapping);let Ze=je?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,st={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:Q,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:K,batching:$e,batchingColor:$e&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:ot,envMap:Ke,envMapMode:Ke&&ee.mapping,envMapPMREM:je,envMapMaxLod:je?Ze.length-1:null,envMapSize:je?Ze[0].width:null,aoMap:Mt,lightMap:Ct,bumpMap:jt,normalMap:wt,displacementMap:cn,emissiveMap:Ht,normalMapObjectSpace:wt&&x.normalMapType===Ld,normalMapTangentSpace:wt&&x.normalMapType===Mc,packedNormalMap:wt&&x.normalMapType===Mc&&qy(x.normalMap.format),metalnessMap:Ge,roughnessMap:Tt,anisotropy:te,anisotropyMap:lt,clearcoat:j,clearcoatMap:G,clearcoatNormalMap:P,clearcoatRoughnessMap:re,diffuseRoughness:Ft,diffuseRoughnessMap:Ce,dispersion:mt,retroreflection:rt,iridescence:Be,iridescenceMap:xe,iridescenceThicknessMap:Ne,sheen:Wt,sheenColorMap:ze,sheenRoughnessMap:_e,specularMap:ye,specularColorMap:Pe,specularIntensityMap:H,transmission:Qe,transmissionMap:ge,thicknessMap:fe,gradientMap:Ue,opaque:x.transparent===!1&&x.blending===Rs&&x.alphaToCoverage===!1,alphaMap:Te,alphaTest:Re,alphaHash:qe,combine:x.combine,mapUv:Ee&&m(x.map.channel),aoMapUv:Mt&&m(x.aoMap.channel),lightMapUv:Ct&&m(x.lightMap.channel),bumpMapUv:jt&&m(x.bumpMap.channel),normalMapUv:wt&&m(x.normalMap.channel),displacementMapUv:cn&&m(x.displacementMap.channel),emissiveMapUv:Ht&&m(x.emissiveMap.channel),metalnessMapUv:Ge&&m(x.metalnessMap.channel),roughnessMapUv:Tt&&m(x.roughnessMap.channel),anisotropyMapUv:lt&&m(x.anisotropyMap.channel),clearcoatMapUv:G&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:P&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&m(x.sheenRoughnessMap.channel),specularMapUv:ye&&m(x.specularMap.channel),specularColorMapUv:Pe&&m(x.specularColorMap.channel),specularIntensityMapUv:H&&m(x.specularIntensityMap.channel),transmissionMapUv:ge&&m(x.transmissionMap.channel),thicknessMapUv:fe&&m(x.thicknessMap.channel),alphaMapUv:Te&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(wt||te),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Ee||Te),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&wt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.filter(ke=>ke.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&Rt.getTransfer(x.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(x.emissiveMap.colorSpace)===Gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=h.has(1),st.vertexUv2s=h.has(2),st.vertexUv3s=h.has(3),h.clear(),st}function v(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)w.push(D),w.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(w,x),_(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let w=p[x.type],D;if(w){let L=ki[w];D=Yd.clone(L.uniforms)}else D=x.uniforms;return D}function C(x,w){let D=d.get(w);return D!==void 0?++D.usedTimes:(D=new Wy(n,w,x,s),l.push(D),d.set(w,D)),D}function b(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function S(){a.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:T,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:S}}function Zy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,h){n.get(o)[a]=h}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Jy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function dp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function a(p,m,u,v,g,_){let T=n[e];return T===void 0?(T={id:p.id,object:p,geometry:m,material:u,materialVariant:o(p),groupOrder:v,renderOrder:p.renderOrder,z:g,group:_},n[e]=T):(T.id=p.id,T.object=p,T.geometry=m,T.material=u,T.materialVariant=o(p),T.groupOrder=v,T.renderOrder=p.renderOrder,T.z=g,T.group=_),e++,T}function h(p,m,u,v,g,_,T){T.reversedDepth===!0&&(g=-g);let C=a(p,m,u,v,g,_);u.transmission>0?i.push(C):u.transparent===!0?s.push(C):t.push(C)}function l(p,m,u,v,g,_){let T=a(p,m,u,v,g,_);u.transmission>0?i.unshift(T):u.transparent===!0?s.unshift(T):t.unshift(T)}function d(p,m){t.length>1&&t.sort(p||Jy),i.length>1&&i.sort(m||dp),s.length>1&&s.sort(m||dp)}function f(){for(let p=e,m=n.length;p<m;p++){let u=n[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:h,unshift:l,finish:f,sort:d}}function Ky(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new pp,n.set(i,[o])):s>=r.length?(o=new pp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $y(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new tt};break;case"SpotLight":t={position:new J,direction:new J,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function jy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Qy=0;function ev(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tv(n){let e=new $y,t=jy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new J);let s=new J,r=new Pt,o=new Pt;function a(l){let d=0,f=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,u=0,v=0,g=0,_=0,T=0,C=0,b=0,A=0,S=0,x=0,w=0,D=0,L=0;l.sort(ev);for(let k=0,N=l.length;k<N;k++){let O=l[k],X=O.color,q=O.intensity,ee=O.distance,ie=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Is?ie=O.shadow.map.texture:ie=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)d+=X.r*q,f+=X.g*q,p+=X.b*q;else if(O.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(O.sh.coefficients[K],q);L++}else if(O.isSunLight){let K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let F=O.shadow,B=t.get(O);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),i.sunShadow[u]=B,i.sunShadowMap[u]=ie;let V=F.getViewportCount();for(let ne=0;ne<V;ne++)i.sunShadowMatrix[v+ne]=F.getMatrix(ne),i.sunShadowCascade[v+ne]=F._cascadeData[ne];v+=V,u++}i.sun[m]=K,m++}else if(O.isDirectionalLight){let K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let F=O.shadow,B=t.get(O);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=O.shadow.matrix,A++}i.directional[g]=K,g++}else if(O.isSpotLight){let K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(X).multiplyScalar(q),K.distance=ee,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,i.spot[T]=K;let F=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,F.updateMatrices(O),O.castShadow&&D++),i.spotLightMatrix[T]=F.matrix,O.castShadow){let B=t.get(O);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=ie,x++}T++}else if(O.isRectAreaLight){let K=e.get(O);K.color.copy(X).multiplyScalar(q),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),i.rectArea[C]=K,C++}else if(O.isPointLight){let K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){let F=O.shadow,B=t.get(O);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,B.shadowCameraNear=F.camera.near,B.shadowCameraFar=F.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=O.shadow.matrix,S++}i.point[_]=K,_++}else if(O.isHemisphereLight){let K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(q),K.groundColor.copy(O.groundColor).multiplyScalar(q),i.hemi[b]=K,b++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;let I=i.hash;(I.sunLength!==m||I.directionalLength!==g||I.pointLength!==_||I.spotLength!==T||I.rectAreaLength!==C||I.hemiLength!==b||I.numSunShadows!==u||I.numDirectionalShadows!==A||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=g,i.spot.length=T,i.rectArea.length=C,i.point.length=_,i.hemi.length=b,i.sunShadow.length=u,i.sunShadowMap.length=u,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,I.sunLength=m,I.directionalLength=g,I.pointLength=_,I.spotLength=T,I.rectAreaLength=C,I.hemiLength=b,I.numSunShadows=u,I.numDirectionalShadows=A,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=L,i.version=Qy++)}function h(l,d){let f=0,p=0,m=0,u=0,v=0,g=0,_=d.matrixWorldInverse;for(let T=0,C=l.length;T<C;T++){let b=l[T];if(b.isSunLight){let A=i.sun[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(_),f++}else if(b.isDirectionalLight){let A=i.directional[p];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),p++}else if(b.isSpotLight){let A=i.spot[u];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),u++}else if(b.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let A=i.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(_),g++}}}return{setup:a,setupView:h,state:i}}function mp(n){let e=new tv(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function h(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function nv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mp(n),e.set(s,[a])):r>=o.length?(a=new mp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
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
}`,rv=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],ov=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],gp=new Pt,la=new J,yu=new J;function av(n,e,t){let i=new Ss,s=new yt,r=new yt,o=new Kt,a=new bl,h=new Sl,l={},d=t.maxTextureSize,f={[Cs]:Cn,[Cn]:Cs,[zn]:zn},p=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let u=new $t;u.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new St(u,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let _=this.type;this.render=function(S,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===cd&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let D=n.getRenderTarget(),L=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ks),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=_!==this.type;N&&x.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=S.length;O<X;O++){let q=S[O],ee=q.shadow;if(ee===void 0){ct("WebGLShadowMap:",q,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let ie=ee.getFrameExtents();s.multiply(ie),r.copy(ee.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,ee.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,ee.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=K,ee.map===null||N===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Br){if(q.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new ti(s.x,s.y,{format:Is,type:wi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),ee.map.texture.name=q.name+".shadowMap",ee.map.depthTexture=new es(s.x,s.y,hi),ee.map.depthTexture.name=q.name+".shadowMapDepth",ee.map.depthTexture.format=$i,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=vn,ee.map.depthTexture.magFilter=vn}else q.isPointLight?(ee.map=new ha(s.x),ee.map.depthTexture=new Go(s.x,Si)):(ee.map=new ti(s.x,s.y),ee.map.depthTexture=new es(s.x,s.y,Si)),ee.map.depthTexture.name=q.name+".shadowMap",ee.map.depthTexture.format=$i,this.type===Js?(ee.map.depthTexture.compareFunction=K?au:ou,ee.map.depthTexture.minFilter=Mn,ee.map.depthTexture.magFilter=Mn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=vn,ee.map.depthTexture.magFilter=vn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);let F=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();q.isPointLight!==!0&&ee.updateMatrices(q,w);let B=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:w.layers;for(let V=0;V<F;V++){let ne=ee.getCamera(V);if(q.isPointLight){let Q=ee.camera,ae=ee.matrix,W=q.distance||Q.far;W!==Q.far&&(Q.far=W,Q.updateProjectionMatrix()),la.setFromMatrixPosition(q.matrixWorld),Q.position.copy(la),yu.copy(Q.position),yu.add(rv[V]),Q.up.copy(ov[V]),Q.lookAt(yu),Q.updateMatrixWorld(),ae.makeTranslation(-la.x,-la.y,-la.z),gp.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(gp,Q.coordinateSystem,Q.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)n.setRenderTarget(ee.map,V),n.clear();else{V===0&&(n.setRenderTarget(ee.map),n.clear());let Q=ee.getViewport(V);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(o)}i=ee.getFrustum(V),b(x,w,ne,q,B,this.type)}ee.isPointLightShadow!==!0&&this.type===Br&&T(ee,w),ee.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(D,L,I)};function T(S,x){let w=e.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new ti(s.x,s.y,{format:Is,type:wi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),p.uniforms.shadow_pass.value=S.map.depthTexture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(x,null,w,p,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(x,null,w,m,v,null)}function C(S,x,w,D){let L=null,I=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)L=I;else if(L=w.isPointLight===!0?h:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=L.uuid,N=x.uuid,O=l[k];O===void 0&&(O={},l[k]=O);let X=O[N];X===void 0&&(X=L.clone(),O[N]=X,x.addEventListener("dispose",A)),L=X}if(L.visible=x.visible,L.wireframe=x.wireframe,D===Br?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:f[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,w.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let k=n.properties.get(L);k.light=w}return L}function b(S,x,w,D,L,I){if(S.visible===!1)return;if(S.layers.test(L)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Br)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let O=e.update(S),X=S.material;if(Array.isArray(X)){let q=O.groups;for(let ee=0,ie=q.length;ee<ie;ee++){let K=q[ee],F=X[K.materialIndex];if(F&&F.visible){let B=C(S,F,D,I);S.onBeforeShadow(n,S,x,w,O,B,K),n.renderBufferDirect(w,null,O,B,S,K),S.onAfterShadow(n,S,x,w,O,B,K)}}}else if(X.visible){let q=C(S,X,D,I);S.onBeforeShadow(n,S,x,w,O,q,null),n.renderBufferDirect(w,null,O,q,S,null),S.onAfterShadow(n,S,x,w,O,q,null)}}let N=S.children;for(let O=0,X=N.length;O<X;O++)b(N[O],x,w,D,L,I)}function A(S){S.target.removeEventListener("dispose",A);for(let w in l){let D=l[w],L=S.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}function lv(n,e){function t(){let H=!1,ge=new Kt,fe=null,Ue=new Kt(0,0,0,0);return{setMask:function(Te){fe!==Te&&!H&&(n.colorMask(Te,Te,Te,Te),fe=Te)},setLocked:function(Te){H=Te},setClear:function(Te,Re,qe,at,be){be===!0&&(Te*=at,Re*=at,qe*=at),ge.set(Te,Re,qe,at),Ue.equals(ge)===!1&&(n.clearColor(Te,Re,qe,at),Ue.copy(ge))},reset:function(){H=!1,fe=null,Ue.set(-1,0,0,0)}}}function i(){let H=!1,ge=!1,fe=null,Ue=null,Te=null;return{setReversed:function(Re){if(ge!==Re){let qe=e.get("EXT_clip_control");Re?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),ge=Re;let at=Te;Te=null,this.setClear(at)}},getReversed:function(){return ge},setTest:function(Re){Re?me(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Re){fe!==Re&&!H&&(n.depthMask(Re),fe=Re)},setFunc:function(Re){if(ge&&(Re=Hd[Re]),Ue!==Re){switch(Re){case ol:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=Re}},setLocked:function(Re){H=Re},setClear:function(Re){Te!==Re&&(Te=Re,ge&&(Re=1-Re),n.clearDepth(Re))},reset:function(){H=!1,fe=null,Ue=null,Te=null,ge=!1}}}function s(){let H=!1,ge=null,fe=null,Ue=null,Te=null,Re=null,qe=null,at=null,be=null;return{setTest:function(Ze){H||(Ze?me(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Ze){ge!==Ze&&!H&&(n.stencilMask(Ze),ge=Ze)},setFunc:function(Ze,st,ke){(fe!==Ze||Ue!==st||Te!==ke)&&(n.stencilFunc(Ze,st,ke),fe=Ze,Ue=st,Te=ke)},setOp:function(Ze,st,ke){(Re!==Ze||qe!==st||at!==ke)&&(n.stencilOp(Ze,st,ke),Re=Ze,qe=st,at=ke)},setLocked:function(Ze){H=Ze},setClear:function(Ze){be!==Ze&&(n.clearStencil(Ze),be=Ze)},reset:function(){H=!1,ge=null,fe=null,Ue=null,Te=null,Re=null,qe=null,at=null,be=null}}}let r=new t,o=new i,a=new s,h={},l=new WeakMap,d={},f={},p={},m=new WeakMap,u=[],v=null,g=!1,_=null,T=null,C=null,b=null,A=null,S=null,x=null,w=new tt(0,0,0),D=0,L=!1,I=null,k=null,N=null,O=null,X=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,ie=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(K)[1]),ee=ie>=1):K.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ee=ie>=2);let F=null,B={},V=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Q=new Kt().fromArray(V),ae=new Kt().fromArray(ne);function W(H,ge,fe,Ue){let Te=new Uint8Array(4),Re=n.createTexture();n.bindTexture(H,Re),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<fe;qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ge+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Re}let ue={};ue[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(Pr),jt(!1),wt(Gh),me(n.CULL_FACE),Mt(Ks);function me(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function Ie(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function $e(H,ge){return p[H]!==ge?(n.bindFramebuffer(H,ge),p[H]=ge,H===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ge),H===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ee(H,ge){let fe=u,Ue=!1;if(H){fe=m.get(ge),fe===void 0&&(fe=[],m.set(ge,fe));let Te=H.textures;if(fe.length!==Te.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,qe=Te.length;Re<qe;Re++)fe[Re]=n.COLOR_ATTACHMENT0+Re;fe.length=Te.length,Ue=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(fe)}function ot(H){return v!==H?(n.useProgram(H),v=H,!0):!1}let Ke={[$s]:n.FUNC_ADD,[ud]:n.FUNC_SUBTRACT,[fd]:n.FUNC_REVERSE_SUBTRACT};Ke[dd]=n.MIN,Ke[pd]=n.MAX;let je={[md]:n.ZERO,[gd]:n.ONE,[xd]:n.SRC_COLOR,[Wh]:n.SRC_ALPHA,[Sd]:n.SRC_ALPHA_SATURATE,[Md]:n.DST_COLOR,[yd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[Xh]:n.ONE_MINUS_SRC_ALPHA,[bd]:n.ONE_MINUS_DST_COLOR,[vd]:n.ONE_MINUS_DST_ALPHA,[wd]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[Ad]:n.CONSTANT_ALPHA,[Ed]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(H,ge,fe,Ue,Te,Re,qe,at,be,Ze){if(H===Ks){g===!0&&(Ie(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),H!==hd){if(H!==_||Ze!==L){if((T!==$s||A!==$s)&&(n.blendEquation(n.FUNC_ADD),T=$s,A=$s),Ze)switch(H){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.ONE,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:pt("WebGLState: Invalid blending: ",H);break}else switch(H){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vh:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",H);break}C=null,b=null,S=null,x=null,w.set(0,0,0),D=0,_=H,L=Ze}return}Te=Te||ge,Re=Re||fe,qe=qe||Ue,(ge!==T||Te!==A)&&(n.blendEquationSeparate(Ke[ge],Ke[Te]),T=ge,A=Te),(fe!==C||Ue!==b||Re!==S||qe!==x)&&(n.blendFuncSeparate(je[fe],je[Ue],je[Re],je[qe]),C=fe,b=Ue,S=Re,x=qe),(at.equals(w)===!1||be!==D)&&(n.blendColor(at.r,at.g,at.b,be),w.copy(at),D=be),_=H,L=!1}function Ct(H,ge){H.side===zn?Ie(n.CULL_FACE):me(n.CULL_FACE);let fe=H.side===Cn;ge&&(fe=!fe),jt(fe),H.blending===Rs&&H.transparent===!1?Mt(Ks):Mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ue=H.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(H){I!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),I=H)}function wt(H){H!==ad?(me(n.CULL_FACE),H!==k&&(H===Gh?n.cullFace(n.BACK):H===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),k=H}function cn(H){H!==N&&(ee&&n.lineWidth(H),N=H)}function Ht(H,ge,fe){H?(me(n.POLYGON_OFFSET_FILL),(O!==ge||X!==fe)&&(O=ge,X=fe,o.getReversed()&&(ge=-ge,fe=-fe),n.polygonOffset(ge,fe))):Ie(n.POLYGON_OFFSET_FILL)}function Ge(H){H?me(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Tt(H){H===void 0&&(H=n.TEXTURE0+q-1),F!==H&&(n.activeTexture(H),F=H)}function te(H,ge,fe){fe===void 0&&(F===null?fe=n.TEXTURE0+q-1:fe=F);let Ue=B[fe];Ue===void 0&&(Ue={type:void 0,texture:void 0},B[fe]=Ue),(Ue.type!==H||Ue.texture!==ge)&&(F!==fe&&(n.activeTexture(fe),F=fe),n.bindTexture(H,ge||ue[H]),Ue.type=H,Ue.texture=ge)}function j(){let H=B[F];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ft(){try{n.compressedTexImage2D(...arguments)}catch(H){pt("WebGLState:",H)}}function mt(){try{n.compressedTexImage3D(...arguments)}catch(H){pt("WebGLState:",H)}}function rt(){try{n.texSubImage2D(...arguments)}catch(H){pt("WebGLState:",H)}}function Be(){try{n.texSubImage3D(...arguments)}catch(H){pt("WebGLState:",H)}}function Wt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){pt("WebGLState:",H)}}function Qe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){pt("WebGLState:",H)}}function lt(){try{n.texStorage2D(...arguments)}catch(H){pt("WebGLState:",H)}}function G(){try{n.texStorage3D(...arguments)}catch(H){pt("WebGLState:",H)}}function P(){try{n.texImage2D(...arguments)}catch(H){pt("WebGLState:",H)}}function re(){try{n.texImage3D(...arguments)}catch(H){pt("WebGLState:",H)}}function Ce(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function xe(H,ge){f[H]!==ge&&(n.pixelStorei(H,ge),f[H]=ge)}function Ne(H){Q.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Q.copy(H))}function ze(H){ae.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ae.copy(H))}function _e(H,ge){let fe=l.get(ge);fe===void 0&&(fe=new WeakMap,l.set(ge,fe));let Ue=fe.get(H);Ue===void 0&&(Ue=n.getUniformBlockIndex(ge,H.name),n.uniformBlockBinding(ge,Ue,Ue),fe.set(H,Ue))}function ye(H,ge,fe){let Te=l.get(ge).get(H);h[Te]!==fe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Te,fe),h[Te]=fe)}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},F=null,B={},p={},h={},m=new WeakMap,u=[],v=null,g=!1,_=null,T=null,C=null,b=null,A=null,S=null,x=null,w=new tt(0,0,0),D=0,L=!1,I=null,k=null,N=null,O=null,X=null,Q.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Ie,bindFramebuffer:$e,drawBuffers:Ee,useProgram:ot,setBlending:Mt,setMaterial:Ct,setFlipSided:jt,setCullFace:wt,setLineWidth:cn,setPolygonOffset:Ht,setScissorTest:Ge,activeTexture:Tt,bindTexture:te,unbindTexture:j,compressedTexImage2D:Ft,compressedTexImage3D:mt,texImage2D:P,texImage3D:re,pixelStorei:xe,getParameter:Ce,updateUBOMapping:_e,uniformBlockBinding:ye,texStorage2D:lt,texStorage3D:G,texSubImage2D:rt,texSubImage3D:Be,compressedTexSubImage2D:Wt,compressedTexSubImage3D:Qe,scissor:Ne,viewport:ze,reset:Pe}}function cv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,d=new WeakMap,f=new Set,p,m=new WeakMap,u=new Set,v=new FinalizationRegistry(G=>u.delete(G)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(G,P){return g?new OffscreenCanvas(G,P):Po("canvas")}function T(G,P,re){let Ce=1,xe=lt(G);if((xe.width>re||xe.height>re)&&(Ce=re/Math.max(xe.width,xe.height)),Ce<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let Ne=Math.floor(Ce*xe.width),ze=Math.floor(Ce*xe.height);p===void 0&&(p=_(Ne,ze));let _e=P?_(Ne,ze):p;return _e.width=Ne,_e.height=ze,_e.getContext("2d").drawImage(G,0,0,Ne,ze),ct("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ne+"x"+ze+")."),_e}else return"data"in G&&ct("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),G;return G}function C(G){return G.generateMipmaps}function b(G){n.generateMipmap(G)}function A(G){return G.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?n.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(G,P,re,Ce,xe,Ne=!1){if(G!==null){if(n[G]!==void 0)return n[G];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ze;Ce&&(ze=e.get("EXT_texture_norm16"),ze||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=P;if(P===n.RED&&(re===n.FLOAT&&(_e=n.R32F),re===n.HALF_FLOAT&&(_e=n.R16F),re===n.UNSIGNED_BYTE&&(_e=n.R8),re===n.UNSIGNED_SHORT&&ze&&(_e=ze.R16_EXT),re===n.SHORT&&ze&&(_e=ze.R16_SNORM_EXT)),P===n.RED_INTEGER&&(re===n.UNSIGNED_BYTE&&(_e=n.R8UI),re===n.UNSIGNED_SHORT&&(_e=n.R16UI),re===n.UNSIGNED_INT&&(_e=n.R32UI),re===n.BYTE&&(_e=n.R8I),re===n.SHORT&&(_e=n.R16I),re===n.INT&&(_e=n.R32I)),P===n.RG&&(re===n.FLOAT&&(_e=n.RG32F),re===n.HALF_FLOAT&&(_e=n.RG16F),re===n.UNSIGNED_BYTE&&(_e=n.RG8),re===n.UNSIGNED_SHORT&&ze&&(_e=ze.RG16_EXT),re===n.SHORT&&ze&&(_e=ze.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(re===n.UNSIGNED_BYTE&&(_e=n.RG8UI),re===n.UNSIGNED_SHORT&&(_e=n.RG16UI),re===n.UNSIGNED_INT&&(_e=n.RG32UI),re===n.BYTE&&(_e=n.RG8I),re===n.SHORT&&(_e=n.RG16I),re===n.INT&&(_e=n.RG32I)),P===n.RGB_INTEGER&&(re===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),re===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),re===n.UNSIGNED_INT&&(_e=n.RGB32UI),re===n.BYTE&&(_e=n.RGB8I),re===n.SHORT&&(_e=n.RGB16I),re===n.INT&&(_e=n.RGB32I)),P===n.RGBA_INTEGER&&(re===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),re===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),re===n.UNSIGNED_INT&&(_e=n.RGBA32UI),re===n.BYTE&&(_e=n.RGBA8I),re===n.SHORT&&(_e=n.RGBA16I),re===n.INT&&(_e=n.RGBA32I)),P===n.RGB&&(re===n.UNSIGNED_SHORT&&ze&&(_e=ze.RGB16_EXT),re===n.SHORT&&ze&&(_e=ze.RGB16_SNORM_EXT),re===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),re===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),P===n.RGBA){let ye=Ne?Io:Rt.getTransfer(xe);re===n.FLOAT&&(_e=n.RGBA32F),re===n.HALF_FLOAT&&(_e=n.RGBA16F),re===n.UNSIGNED_BYTE&&(_e=ye===Gt?n.SRGB8_ALPHA8:n.RGBA8),re===n.UNSIGNED_SHORT&&ze&&(_e=ze.RGBA16_EXT),re===n.SHORT&&ze&&(_e=ze.RGBA16_SNORM_EXT),re===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),re===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function x(G,P){let re;return G?P===null||P===Si||P===Qs?re=n.DEPTH24_STENCIL8:P===hi?re=n.DEPTH32F_STENCIL8:P===Gr&&(re=n.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Si||P===Qs?re=n.DEPTH_COMPONENT24:P===hi?re=n.DEPTH_COMPONENT32F:P===Gr&&(re=n.DEPTH_COMPONENT16),re}function w(G,P){return C(G)===!0||G.isFramebufferTexture&&G.minFilter!==vn&&G.minFilter!==Mn?Math.log2(Math.max(P.width,P.height))+1:G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?P.mipmaps.length:1}function D(G){let P=new WeakRef(G);i.get(G).__ref=P,u.add(P),v.register(G,P,P)}function L(G){let P=i.get(G).__ref;P!==void 0&&(u.delete(P),v.unregister(P))}function I(G){N(G.target)}function k(G){O(G.target)}function N(G){G.removeEventListener("dispose",I),L(G),q(G),G.isVideoTexture&&d.delete(G),G.isHTMLTexture&&f.delete(G)}function O(G){G.removeEventListener("dispose",k),L(G),ie(G)}function X(){for(let G of u){let P=G.deref();P!==void 0&&(P.isRenderTarget===!0?O(P):N(P))}u.clear(),f.clear()}function q(G){let P=i.get(G);if(P.__webglInit===void 0)return;let re=G.source,Ce=m.get(re);if(Ce){let xe=Ce[P.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&ee(G),Object.keys(Ce).length===0&&m.delete(re)}i.remove(G)}function ee(G){let P=i.get(G);n.deleteTexture(P.__webglTexture);let re=G.source,Ce=m.get(re);delete Ce[P.__cacheKey],o.memory.textures--}function ie(G){let P=i.get(G);P.__depthDisposeCallback&&P.__depthDisposeCallback();let re=G.depthTexture;if(re&&re.renderTarget===G&&N(re),G.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(P.__webglFramebuffer[xe]))for(let Ne=0;Ne<P.__webglFramebuffer[xe].length;Ne++)n.deleteFramebuffer(P.__webglFramebuffer[xe][Ne]);else n.deleteFramebuffer(P.__webglFramebuffer[xe]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[xe])}else{if(Array.isArray(P.__webglFramebuffer))for(let xe=0;xe<P.__webglFramebuffer.length;xe++)n.deleteFramebuffer(P.__webglFramebuffer[xe]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let xe=0;xe<P.__webglColorRenderbuffer.length;xe++)P.__webglColorRenderbuffer[xe]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[xe]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let Ce=G.textures;for(let xe=0,Ne=Ce.length;xe<Ne;xe++){let ze=i.get(Ce[xe]);ze.__webglTexture&&(n.deleteTexture(ze.__webglTexture),o.memory.textures--),i.remove(Ce[xe])}i.remove(G)}let K=0;function F(){K=0}function B(){return K}function V(G){K=G}function ne(){let G=K;return G>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,G}function Q(G){let P=[];return P.push(G.wrapS),P.push(G.wrapT),P.push(G.wrapR||0),P.push(G.magFilter),P.push(G.minFilter),P.push(G.anisotropy),P.push(G.internalFormat),P.push(G.format),P.push(G.type),P.push(G.generateMipmaps),P.push(G.mipmapsAutoUpdate),P.push(G.premultiplyAlpha),P.push(G.flipY),P.push(G.unpackAlignment),P.push(G.colorSpace),P.join()}function ae(G,P){let re=i.get(G);if(G.isVideoTexture&&Wt(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&re.__version!==G.version){let Ce=G.image;if(Ce===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Ce.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(re,G,P);return}}else G.isExternalTexture&&(re.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,re.__webglTexture,n.TEXTURE0+P)}function W(G,P){let re=i.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&re.__version!==G.version){Ct(re,G,P);return}else G.isExternalTexture&&(re.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,re.__webglTexture,n.TEXTURE0+P)}function ue(G,P){let re=i.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&re.__version!==G.version){Ct(re,G,P);return}t.bindTexture(n.TEXTURE_3D,re.__webglTexture,n.TEXTURE0+P)}function me(G,P){let re=i.get(G);if(G.version>0&&re.__version!==G.version){jt(re,G,P);return}t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture,n.TEXTURE0+P)}let Ie={[dl]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},$e={[vn]:n.NEAREST,[Id]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Fl]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Ee={[Nd]:n.NEVER,[lu]:n.ALWAYS,[zd]:n.LESS,[ou]:n.LEQUAL,[Ud]:n.EQUAL,[au]:n.GEQUAL,[Fd]:n.GREATER,[Od]:n.NOTEQUAL};function ot(G,P){if(P.type===hi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Mn||P.magFilter===Fl||P.magFilter===ta||P.magFilter===is||P.minFilter===Mn||P.minFilter===Fl||P.minFilter===ta||P.minFilter===is)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(G,n.TEXTURE_WRAP_S,Ie[P.wrapS]),n.texParameteri(G,n.TEXTURE_WRAP_T,Ie[P.wrapT]),(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)&&n.texParameteri(G,n.TEXTURE_WRAP_R,Ie[P.wrapR]),n.texParameteri(G,n.TEXTURE_MAG_FILTER,$e[P.magFilter]),n.texParameteri(G,n.TEXTURE_MIN_FILTER,$e[P.minFilter]),P.compareFunction&&(n.texParameteri(G,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(G,n.TEXTURE_COMPARE_FUNC,Ee[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===vn||P.minFilter!==ta&&P.minFilter!==is||P.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let re=e.get("EXT_texture_filter_anisotropic");n.texParameterf(G,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Ke(G,P){let re=!1;G.__webglInit===void 0&&(G.__webglInit=!0,P.addEventListener("dispose",I),D(P));let Ce=P.source,xe=m.get(Ce);xe===void 0&&(xe={},m.set(Ce,xe));let Ne=Q(P);if(Ne!==G.__cacheKey){xe[Ne]===void 0&&(xe[Ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,re=!0),xe[Ne].usedTimes++;let ze=xe[G.__cacheKey];ze!==void 0&&(xe[G.__cacheKey].usedTimes--,ze.usedTimes===0&&ee(P)),G.__cacheKey=Ne,G.__webglTexture=xe[Ne].texture}return re}function je(G,P,re){return Math.floor(Math.floor(G/re)/P)}function Mt(G,P,re,Ce){let Ne=G.updateRanges;if(Ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,re,Ce,P.data);else{Ne.sort((H,ge)=>H.start-ge.start);let ze=0;for(let H=1;H<Ne.length;H++){let ge=Ne[ze],fe=Ne[H],Ue=ge.start+ge.count,Te=je(fe.start,P.width,4),Re=je(ge.start,P.width,4);fe.start<=Ue+1&&Te===Re&&je(fe.start+fe.count-1,P.width,4)===Te?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++ze,Ne[ze]=fe)}Ne.length=ze+1;let _e=t.getParameter(n.UNPACK_ROW_LENGTH),ye=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let H=0,ge=Ne.length;H<ge;H++){let fe=Ne[H],Ue=Math.floor(fe.start/4),Te=Math.ceil(fe.count/4),Re=Ue%P.width,qe=Math.floor(Ue/P.width),at=Te,be=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(n.UNPACK_SKIP_ROWS,qe),t.texSubImage2D(n.TEXTURE_2D,0,Re,qe,at,be,re,Ce,P.data)}G.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function Ct(G,P,re){let Ce=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Ce=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Ce=n.TEXTURE_3D);let xe=Ke(G,P),Ne=P.source;t.bindTexture(Ce,G.__webglTexture,n.TEXTURE0+re);let ze=i.get(Ne);if(Ne.version!==ze.__version||xe===!0){if(t.activeTexture(n.TEXTURE0+re),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let be=Rt.getPrimaries(Rt.workingColorSpace),Ze=P.colorSpace===rs?null:Rt.getPrimaries(P.colorSpace),st=P.colorSpace===rs||be===Ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let ye=T(P.image,!1,s.maxTextureSize);ye=Qe(P,ye);let Pe=r.convert(P.format,P.colorSpace),H=r.convert(P.type),ge=S(P.internalFormat,Pe,H,P.normalized,P.colorSpace,P.isVideoTexture);ot(Ce,P);let fe,Ue=P.mipmaps,Te=P.isVideoTexture!==!0,Re=ze.__version===void 0||xe===!0,qe=Ne.dataReady,at=w(P,ye);if(P.isDepthTexture)ge=x(P.format===ss,P.type),Re&&(Te?t.texStorage2D(n.TEXTURE_2D,1,ge,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,ge,ye.width,ye.height,0,Pe,H,null));else if(P.isDataTexture)if(Ue.length>0){Te&&Re&&t.texStorage2D(n.TEXTURE_2D,at,ge,Ue[0].width,Ue[0].height);for(let be=0,Ze=Ue.length;be<Ze;be++)fe=Ue[be],Te?qe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,fe.width,fe.height,Pe,H,fe.data):t.texImage2D(n.TEXTURE_2D,be,ge,fe.width,fe.height,0,Pe,H,fe.data);P.generateMipmaps=!1}else Te?(Re&&t.texStorage2D(n.TEXTURE_2D,at,ge,ye.width,ye.height),qe&&Mt(P,ye,Pe,H)):t.texImage2D(n.TEXTURE_2D,0,ge,ye.width,ye.height,0,Pe,H,ye.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Te&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,ge,Ue[0].width,Ue[0].height,ye.depth);for(let be=0,Ze=Ue.length;be<Ze;be++)if(fe=Ue[be],P.format!==ii)if(Pe!==null)if(Te){if(qe)if(P.layerUpdates.size>0){let st=xu(fe.width,fe.height,P.format,P.type);for(let ke of P.layerUpdates){let Dt=fe.data.subarray(ke*st/fe.data.BYTES_PER_ELEMENT,(ke+1)*st/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,ke,fe.width,fe.height,1,Pe,Dt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,fe.width,fe.height,ye.depth,Pe,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,ge,fe.width,fe.height,ye.depth,0,fe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?qe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,fe.width,fe.height,ye.depth,Pe,H,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,ge,fe.width,fe.height,ye.depth,0,Pe,H,fe.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Te&&Re&&t.texStorage2D(n.TEXTURE_2D,at,ge,Ue[0].width,Ue[0].height);for(let be=0,Ze=Ue.length;be<Ze;be++)fe=Ue[be],P.format!==ii?Pe!==null?Te?qe&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,fe.width,fe.height,Pe,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,be,ge,fe.width,fe.height,0,fe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?qe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,fe.width,fe.height,Pe,H,fe.data):t.texImage2D(n.TEXTURE_2D,be,ge,fe.width,fe.height,0,Pe,H,fe.data)}else if(P.isDataArrayTexture)if(Te){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,ge,ye.width,ye.height,ye.depth),qe)if(P.layerUpdates.size>0){let be=xu(ye.width,ye.height,P.format,P.type);for(let Ze of P.layerUpdates){let st=ye.data.subarray(Ze*be/ye.data.BYTES_PER_ELEMENT,(Ze+1)*be/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ze,ye.width,ye.height,1,Pe,H,st)}P.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,H,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ye.width,ye.height,ye.depth,0,Pe,H,ye.data);else if(P.isData3DTexture)Te?(Re&&t.texStorage3D(n.TEXTURE_3D,at,ge,ye.width,ye.height,ye.depth),qe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,H,ye.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ye.width,ye.height,ye.depth,0,Pe,H,ye.data);else if(P.isFramebufferTexture){if(Re)if(Te)t.texStorage2D(n.TEXTURE_2D,at,ge,ye.width,ye.height);else{let be=ye.width,Ze=ye.height;for(let st=0;st<at;st++)t.texImage2D(n.TEXTURE_2D,st,ge,be,Ze,0,Pe,H,null),be>>=1,Ze>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let be=n.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),ye.parentNode!==be){be.appendChild(ye),f.add(P),be.onpaint=Ze=>{let st=Ze.changedElements;for(let ke of f)st.includes(ke.image)&&(ke.needsUpdate=!0)},be.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ye);else{let st=n.RGBA,ke=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,st,ke,Dt,ye)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Te&&Re){let be=lt(Ue[0]);t.texStorage2D(n.TEXTURE_2D,at,ge,be.width,be.height)}for(let be=0,Ze=Ue.length;be<Ze;be++)fe=Ue[be],Te?qe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Pe,H,fe):t.texImage2D(n.TEXTURE_2D,be,ge,Pe,H,fe);P.generateMipmaps=!1}else if(Te){if(Re){let be=lt(ye);t.texStorage2D(n.TEXTURE_2D,at,ge,be.width,be.height)}qe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,H,ye)}else t.texImage2D(n.TEXTURE_2D,0,ge,Pe,H,ye);C(P)&&P.mipmapsAutoUpdate===!0&&b(Ce),ze.__version=Ne.version,P.onUpdate&&P.onUpdate(P)}G.__version=P.version}function jt(G,P,re){if(P.image.length!==6)return;let Ce=Ke(G,P),xe=P.source;t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+re);let Ne=i.get(xe);if(xe.version!==Ne.__version||Ce===!0){t.activeTexture(n.TEXTURE0+re);let ze=Rt.getPrimaries(Rt.workingColorSpace),_e=P.colorSpace===rs?null:Rt.getPrimaries(P.colorSpace),ye=P.colorSpace===rs||ze===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Pe=P.isCompressedTexture||P.image[0].isCompressedTexture,H=P.image[0]&&P.image[0].isDataTexture,ge=[];for(let ke=0;ke<6;ke++)!Pe&&!H?ge[ke]=T(P.image[ke],!0,s.maxCubemapSize):ge[ke]=H?P.image[ke].image:P.image[ke],ge[ke]=Qe(P,ge[ke]);let fe=ge[0],Ue=r.convert(P.format,P.colorSpace),Te=r.convert(P.type),Re=S(P.internalFormat,Ue,Te,P.normalized,P.colorSpace),qe=P.isVideoTexture!==!0,at=Ne.__version===void 0||Ce===!0,be=xe.dataReady,Ze=w(P,fe);ot(n.TEXTURE_CUBE_MAP,P);let st;if(P.isDepthTexture){if(Re=x(P.format===ss,P.type),at)if(qe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Re,fe.width,fe.height);else for(let ke=0;ke<6;ke++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Re,fe.width,fe.height,0,Ue,Te,null)}else if(Pe){qe&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,Re,fe.width,fe.height);for(let ke=0;ke<6;ke++){st=ge[ke].mipmaps;for(let Dt=0;Dt<st.length;Dt++){let it=st[Dt];P.format!==ii?Ue!==null?qe?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt,0,0,it.width,it.height,Ue,it.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt,Re,it.width,it.height,0,it.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt,0,0,it.width,it.height,Ue,Te,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt,Re,it.width,it.height,0,Ue,Te,it.data)}}}else{if(st=P.mipmaps,qe&&at){st.length>0&&Ze++;let ke=lt(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,Re,ke.width,ke.height)}for(let ke=0;ke<6;ke++)if(H){qe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,ge[ke].width,ge[ke].height,Ue,Te,ge[ke].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Re,ge[ke].width,ge[ke].height,0,Ue,Te,ge[ke].data);for(let Dt=0;Dt<st.length;Dt++){let Sn=st[Dt].image[ke].image;qe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt+1,0,0,Sn.width,Sn.height,Ue,Te,Sn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt+1,Re,Sn.width,Sn.height,0,Ue,Te,Sn.data)}}else{qe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,Ue,Te,ge[ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Re,Ue,Te,ge[ke]);for(let Dt=0;Dt<st.length;Dt++){let it=st[Dt];qe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt+1,0,0,Ue,Te,it.image[ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Dt+1,Re,Ue,Te,it.image[ke])}}}C(P)&&P.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Ne.__version=xe.version,P.onUpdate&&P.onUpdate(P)}G.__version=P.version}function wt(G,P,re,Ce,xe,Ne){let ze=r.convert(re.format,re.colorSpace),_e=r.convert(re.type),ye=S(re.internalFormat,ze,_e,re.normalized,re.colorSpace),Pe=i.get(P),H=i.get(re);if(H.__renderTarget=P,!Pe.__hasExternalTextures){let ge=Math.max(1,P.width>>Ne),fe=Math.max(1,P.height>>Ne);xe===n.TEXTURE_3D||xe===n.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ne,ye,ge,fe,P.depth,0,ze,_e,null):t.texImage2D(xe,Ne,ye,ge,fe,0,ze,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,G),Be(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,xe,H.__webglTexture,0,rt(P)):(xe===n.TEXTURE_2D||xe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ce,xe,H.__webglTexture,Ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function cn(G,P,re){if(n.bindRenderbuffer(n.RENDERBUFFER,G),P.depthBuffer){let Ce=P.depthTexture,xe=Ce&&Ce.isDepthTexture?Ce.type:null,Ne=x(P.stencilBuffer,xe),ze=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Be(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(P),Ne,P.width,P.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(P),Ne,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ze,n.RENDERBUFFER,G)}else{let Ce=P.textures;for(let xe=0;xe<Ce.length;xe++){let Ne=Ce[xe],ze=r.convert(Ne.format,Ne.colorSpace),_e=r.convert(Ne.type),ye=S(Ne.internalFormat,ze,_e,Ne.normalized,Ne.colorSpace);Be(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(P),ye,P.width,P.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(P),ye,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,ye,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(G,P,re){let Ce=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,G),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xe=i.get(P.depthTexture);xe.__renderTarget=P;let Ne=Ce?P.depthTexture.image[0]:P.depthTexture.image;(!xe.__webglTexture||Ne.width!==P.width||Ne.height!==P.height)&&(Ne.width=P.width,Ne.height=P.height,P.depthTexture.needsUpdate=!0),Ce?me(P.depthTexture,0):ae(P.depthTexture,0);let ze=xe.__webglTexture,_e=rt(P),ye=Ce?n.TEXTURE_CUBE_MAP_POSITIVE_X+re:n.TEXTURE_2D,Pe=P.depthTexture.format===ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===$i)Be(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ye,ze,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ye,ze,0);else if(P.depthTexture.format===ss)Be(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ye,ze,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ye,ze,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(G){let P=i.get(G),re=G.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==G.depthTexture){let Ce=G.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),Ce){let xe=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,Ce.removeEventListener("dispose",xe)};Ce.addEventListener("dispose",xe),P.__depthDisposeCallback=xe}P.__boundDepthTexture=Ce}if(G.depthTexture&&!P.__autoAllocateDepthBuffer)if(re)for(let Ce=0;Ce<6;Ce++)Ht(P.__webglFramebuffer[Ce],G,Ce);else G.texture.mipmaps.length>0?Ht(P.__webglFramebuffer[0],G,0):Ht(P.__webglFramebuffer,G,0);else if(re){P.__webglDepthbuffer=[];for(let Ce=0;Ce<6;Ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[Ce]),P.__webglDepthbuffer[Ce]===void 0)P.__webglDepthbuffer[Ce]=n.createRenderbuffer(),cn(P.__webglDepthbuffer[Ce],G,!1);else{let xe=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=P.__webglDepthbuffer[Ce];n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,Ne)}}else if(G.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),cn(P.__webglDepthbuffer,G,!1);else{let xe=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,Ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(G,P,re){let Ce=i.get(G);P!==void 0&&wt(Ce.__webglFramebuffer,G,G.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),re!==void 0&&Ge(G)}function te(G){let P=G.texture,re=i.get(G),Ce=i.get(P);G.addEventListener("dispose",k),D(G);let xe=G.textures,Ne=G.isWebGLCubeRenderTarget===!0,ze=xe.length>1;if(ze||(Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture()),Ce.__version=P.version,o.memory.textures++),Ne){re.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(P.mipmaps.length>0){re.__webglFramebuffer[_e]=[];for(let ye=0;ye<P.mipmaps.length;ye++)re.__webglFramebuffer[_e][ye]=n.createFramebuffer()}else re.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(P.mipmaps.length>0){re.__webglFramebuffer=[];for(let _e=0;_e<P.mipmaps.length;_e++)re.__webglFramebuffer[_e]=n.createFramebuffer()}else re.__webglFramebuffer=n.createFramebuffer();if(ze)for(let _e=0,ye=xe.length;_e<ye;_e++){let Pe=i.get(xe[_e]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(G.samples>0&&Be(G)===!1){re.__webglMultisampledFramebuffer=n.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let _e=0;_e<xe.length;_e++){let ye=xe[_e];re.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);let Pe=r.convert(ye.format,ye.colorSpace),H=r.convert(ye.type),ge=S(ye.internalFormat,Pe,H,ye.normalized,ye.colorSpace,G.isXRRenderTarget===!0),fe=rt(G);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ge,G.width,G.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,re.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),G.depthBuffer&&(re.__webglDepthRenderbuffer=n.createRenderbuffer(),cn(re.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(n.TEXTURE_CUBE_MAP,Ce.__webglTexture),ot(n.TEXTURE_CUBE_MAP,P);for(let _e=0;_e<6;_e++)if(P.mipmaps.length>0)for(let ye=0;ye<P.mipmaps.length;ye++)wt(re.__webglFramebuffer[_e][ye],G,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else wt(re.__webglFramebuffer[_e],G,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);C(P)?b(n.TEXTURE_CUBE_MAP):P.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}else if(ze){for(let _e=0,ye=xe.length;_e<ye;_e++){let Pe=xe[_e],H=i.get(Pe),ge=n.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ge=G.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,H.__webglTexture),ot(ge,Pe),wt(re.__webglFramebuffer,G,Pe,n.COLOR_ATTACHMENT0+_e,ge,0),C(Pe)&&b(ge)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(_e=G.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ce.__webglTexture),ot(_e,P),P.mipmaps.length>0)for(let ye=0;ye<P.mipmaps.length;ye++)wt(re.__webglFramebuffer[ye],G,P,n.COLOR_ATTACHMENT0,_e,ye);else wt(re.__webglFramebuffer,G,P,n.COLOR_ATTACHMENT0,_e,0);C(P)?b(_e):P.mipmaps.length>0&&n.texParameteri(_e,n.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}G.depthBuffer&&Ge(G)}function j(G){let P=G.textures;for(let re=0,Ce=P.length;re<Ce;re++){let xe=P[re];if(C(xe)&&xe.mipmapsAutoUpdate===!0){let Ne=A(G),ze=i.get(xe).__webglTexture;t.bindTexture(Ne,ze),b(Ne),t.unbindTexture()}}}let Ft=[];function mt(G){if(G.samples>0){if(Be(G)===!1){let P=G.textures,re=G.width,Ce=G.height,xe=n.COLOR_BUFFER_BIT,Ne=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=i.get(G),_e=P.length>1;if(_e)for(let Pe=0;Pe<P.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),G.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Pe=0;Pe<P.length;Pe++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(xe|=n.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(xe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Pe]);let H=i.get(P[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,re,Ce,0,0,re,Ce,xe,n.NEAREST),h===!0&&(Ft.length=0,Ft.push(n.COLOR_ATTACHMENT0+Pe),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&Ft.push(Ne),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Pe=0;Pe<P.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Pe]);let H=i.get(P[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&h){let P=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function rt(G){return Math.min(s.maxSamples,G.samples)}function Be(G){let P=i.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Wt(G){let P=o.render.frame;d.get(G)!==P&&(d.set(G,P),G.update())}function Qe(G,P){let re=G.colorSpace,Ce=G.format,xe=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||re!==Ro&&re!==rs&&(Rt.getTransfer(re)===Gt?(Ce!==ii||xe!==Jn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",re)),P}function lt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(l.width=G.naturalWidth||G.width,l.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(l.width=G.displayWidth,l.height=G.displayHeight):(l.width=G.width,l.height=G.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=F,this.getTextureUnits=B,this.setTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=W,this.setTexture3D=ue,this.setTextureCube=me,this.rebindTextures=Tt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Be,this.dispose=X}function hv(n,e){function t(i,s=rs){let r,o=Rt.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===eu)return n.BYTE;if(i===tu)return n.SHORT;if(i===Gr)return n.UNSIGNED_SHORT;if(i===Ol)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===su)return n.ALPHA;if(i===ru)return n.RGB;if(i===ii)return n.RGBA;if(i===$i)return n.DEPTH_COMPONENT;if(i===ss)return n.DEPTH_STENCIL;if(i===Gl)return n.RED;if(i===Vl)return n.RED_INTEGER;if(i===Is)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xl||i===ql||i===Yl||i===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Kl||i===$l||i===jl||i===Ql||i===oa||i===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jl||i===Kl)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$l)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===jl)return r.COMPRESSED_R11_EAC;if(i===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return r.COMPRESSED_RG11_EAC;if(i===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===yc||i===aa||i===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
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

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zn({vertexShader:uv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends Ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",h=1,l=null,d=null,f=null,p=null,m=null,u=null,v=typeof XRWebGLBinding<"u",g=new Au,_={},T=t.getContextAttributes(),C=null,b=null,A=[],S=[],x=new yt,w=null,D=null,L=new Nn;L.viewport=new Kt;let I=new Nn;I.viewport=new Kt;let k=[L,I],N=new Nl,O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=A[Q];return ae===void 0&&(ae=new Ur,A[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=A[Q];return ae===void 0&&(ae=new Ur,A[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=A[Q];return ae===void 0&&(ae=new Ur,A[Q]=ae),ae.getHandSpace()};function q(Q){let ae=S.indexOf(Q.inputSource);if(ae===-1)return;let W=A[ae];W!==void 0&&(W.update(Q.inputSource,Q.frame,l||o),W.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ee(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<A.length;Q++){let ae=S[Q];ae!==null&&(S[Q]=null,A[Q].disconnect(ae))}O=null,X=null,g.reset();for(let Q in _)delete _[Q];if(e.setRenderTarget(C),m=null,p=null,f=null,s=null,b=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return u},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,ue=null,me=null;T.depth&&(me=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=T.stencil?ss:$i,ue=T.stencil?Qs:Si);let Ie={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new ti(p.textureWidth,p.textureHeight,{format:ii,type:Jn,depthTexture:new es(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let W={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ti(m.framebufferWidth,m.framebufferHeight,{format:ii,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(Q){for(let ae=0;ae<Q.removed.length;ae++){let W=Q.removed[ae],ue=S.indexOf(W);ue>=0&&(S[ue]=null,A[ue].disconnect(W))}for(let ae=0;ae<Q.added.length;ae++){let W=Q.added[ae],ue=S.indexOf(W);if(ue===-1){for(let Ie=0;Ie<A.length;Ie++)if(Ie>=S.length){S.push(W),ue=Ie;break}else if(S[Ie]===null){S[Ie]=W,ue=Ie;break}if(ue===-1)break}let me=A[ue];me&&me.connect(W)}}function K(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,W=Q.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(W=g.depthFar)),N.near=I.near=L.near=ae,N.far=I.far=L.far=W,(O!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,X=N.far),N.layers.mask=Q.layers.mask|6,L.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let ue=Q.parent,me=N.cameras;K(N,ue);for(let Ie=0;Ie<me.length;Ie++)K(me[Ie],ue);N.projectionMatrix.copy(L.projectionMatrix),N.projectionMatrixInverse.copy(L.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),F(Q,N,ue)};function F(Q,ae,W){W===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(W.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Nr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function(Q){h=Q,p!==null&&(p.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Q){return _[Q]};let B=null;function V(Q,ae){if(d=ae.getViewerPose(l||o),u=ae,d!==null){let W=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ue=!1;W.length!==N.cameras.length&&(N.cameras.length=0,ue=!0);for(let Ee=0;Ee<W.length;Ee++){let ot=W[Ee],Ke=null;if(m!==null)Ke=m.getViewport(ot);else{let Mt=f.getViewSubImage(p,ot);Ke=Mt.viewport,Ee===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(b))}let je=k[Ee];je===void 0&&(je=new Nn,je.layers.enable(Ee),je.viewport=new Kt,k[Ee]=je),je.matrix.fromArray(ot.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ot.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ee===0&&(N.matrix.copy(je.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ue===!0&&N.cameras.push(je)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Ee=f.getDepthInformation(W[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(Ee,s.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ee=0;Ee<W.length;Ee++){let ot=W[Ee].camera;if(ot){let Ke=_[ot];Ke||(Ke=new Vo,_[ot]=Ke);let je=f.getCameraImage(ot);Ke.sourceTexture=je}}}}for(let W=0;W<A.length;W++){let ue=S[W],me=A[W];ue!==null&&me!==void 0&&me.update(ue,ae,l||o)}B&&B(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),u=null}let ne=new xp;ne.setAnimationLoop(V),this.setAnimationLoop=function(Q){B=Q},this.dispose=function(){}}},dv=new Pt,Ep=new ut;Ep.set(-1,0,0,0,1,0,0,0,1);function pv(n,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,pu(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function s(g,_,T,C,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(g,_):_.isMeshLambertMaterial?(r(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(g,_),f(g,_)):_.isMeshPhongMaterial?(r(g,_),d(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(g,_),p(g,_),_.isMeshPhysicalMaterial&&m(g,_,b)):_.isMeshMatcapMaterial?(r(g,_),u(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),v(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?h(g,_,T,C):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Cn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Cn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let T=e.get(_),C=T.envMap,b=T.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ep),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function h(g,_,T,C){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*T,g.scale.value=C*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function d(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function p(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,T){g.ior.value=_.ior,_.diffuseRoughness>0&&(g.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.retroreflectivity>0&&(g.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function u(g,_){_.matcap&&(g.matcap.value=_.matcap)}function v(g,_){let T=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mv(n,e,t,i){let s={},r={};function o(T,C){let b=C.program;i.uniformBlockBinding(T,b,s[T.id])}function a(T,C){let b=s[T.id];b===void 0&&(u(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",g));let A=C.program;i.updateUBOMapping(T,A);let S=e.render.frame;r[T.id]!==S&&(l(T),r[T.id]=S)}function h(T){let C=n.createBuffer(),b=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),C}function l(T){let C=s[T.id],b=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let S=0,x=b.length;S<x;S++){let w=b[S];if(Array.isArray(w))for(let D=0,L=w.length;D<L;D++)d(w[D],S,D,A);else d(w,S,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,C,b,A){if(p(T,C,b,A)===!0){let S=T.__offset,x=T.value;if(Array.isArray(x)){let w=0;for(let D=0;D<x.length;D++){let L=x[D],I=v(L,!0);f(L,T.__data,w),w+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,T.__data)}}function f(T,C,b){typeof T=="number"||typeof T=="boolean"?C[b]=T:T.isMatrix3?(C[b]=T.elements[0],C[b+1]=T.elements[1],C[b+2]=T.elements[2],C[b+3]=0,C[b+4]=T.elements[3],C[b+5]=T.elements[4],C[b+6]=T.elements[5],C[b+7]=0,C[b+8]=T.elements[6],C[b+9]=T.elements[7],C[b+10]=T.elements[8],C[b+11]=0):ArrayBuffer.isView(T)?C.set(T.subarray(0,C.length-b),b):T.toArray(C,b)}function p(T,C,b,A){let S=T.value,x=C+"_"+b;if(Array.isArray(S)){A[x]===void 0&&(A[x]=[]);let w=A[x],D=!1;for(let L=0;L<S.length;L++)m(S[L],w,L)===!0&&(D=!0);return D}return m(S,A,x)}function m(T,C,b){if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:ArrayBuffer.isView(T)?C[b]=T.slice():C[b]=T.clone(),!0;{let A=C[b];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return C[b]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(A.equals(T)===!1)return A.copy(T),!0}}return!1}function u(T){let C=T.uniforms,b=0,A=16;for(let x=0,w=C.length;x<w;x++){let D=Array.isArray(C[x])?C[x]:[C[x]];for(let L=0,I=D.length;L<I;L++){let k=D[L],N=Array.isArray(k.value)?k.value:[k.value],O=Array.isArray(C[x])||Array.isArray(k.value),X=b;for(let ee=0,ie=N.length;ee<ie;ee++){let K=N[ee],F=v(K,O),B=b%A,V=B%F.boundary,ne=B+V;b+=V,ne!==0&&A-ne<F.storage&&(b+=A-ne),ee===0&&(X=b),b+=F.storage}let q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new q((b-X)/Float32Array.BYTES_PER_ELEMENT),k.__offset=X}}let S=b%A;return S>0&&(b+=A-S),T.__size=b,T.__cache={},this}function v(T,C){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=16,b.storage=48):T.isMatrix4?(b.boundary=16,b.storage=64):T.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(b.boundary=16,b.storage=T.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",T),C===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(T){let C=T.target;C.removeEventListener("dispose",g),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function _(){for(let T in s)n.deleteBuffer(s[T]);s={},r={}}return{bind:o,update:a,dispose:_}}var gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function xv(){return Bi===null&&(Bi=new qs(gv,16,16,Is,wi),Bi.name="DFG_LUT",Bi.minFilter=Mn,Bi.magFilter=Mn,Bi.wrapS=zi,Bi.wrapT=zi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Ac=class{constructor(e={}){let{canvas:t=kd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Jn}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;let v=m,g=new Set([Wl,Hl,Vl]),_=new Set([Jn,Si,Gr,Qs,Bl,kl]),T=new Uint32Array(4),C=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,S=null,x=[],w=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,I=!1,k=null,N=null,O=null,X=null;this._outputColorSpace=gn;let q=0,ee=0,ie=null,K=-1,F=null,B=new Kt,V=new Kt,ne=null,Q=new tt(0),ae=0,W=t.width,ue=t.height,me=1,Ie=null,$e=null,Ee=new Kt(0,0,W,ue),ot=new Kt(0,0,W,ue),Ke=!1,je=new Ss,Mt=new yl,Ct=!1,jt=!1,wt=new Pt,cn=new J,Ht=new Kt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function te(){return ie===null?me:1}let j=i;function Ft(U,$){return t.getContext(U,$)}let mt,rt,Be,Wt,Qe,lt,G,P,re,Ce,xe,Ne,ze,_e,ye,Pe,H,ge,fe,Ue,Te,Re,qe;try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",ke,!1),j===null){let $="webgl2";if(j=Ft($,U),j===null)throw Ft($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(U){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),pt("WebGLRenderer: "+U.message),U}function at(){mt=new C1(j),mt.init(),Te=new hv(j,mt),rt=new x1(j,mt,e,Te),Be=new lv(j,mt),rt.reversedDepthBuffer&&p&&Be.buffers.depth.setReversed(!0),N=j.createFramebuffer(),O=j.createFramebuffer(),X=j.createFramebuffer(),Wt=new P1(j),Qe=new Zy,lt=new cv(j,mt,Be,Qe,rt,Te,Wt),G=new E1(L),P=new Dg(j),Re=new m1(j,P),re=new R1(j,P,Wt,Re),Ce=new D1(j,re,P,Re,Wt),ge=new L1(j,rt,lt),ye=new _1(Qe),xe=new Yy(L,G,mt,rt,Re,ye),Ne=new pv(L,Qe),ze=new Ky,_e=new nv(mt),H=new p1(L,G,Be,Ce,u,h),Pe=new av(L,Ce,rt),qe=new mv(j,Wt,rt,Be),fe=new g1(j,mt,Wt),Ue=new I1(j,mt,Wt),Wt.programs=xe.programs,L.capabilities=rt,L.extensions=mt,L.properties=Qe,L.renderLists=ze,L.shadowMap=Pe,L.state=Be,L.info=Wt}v!==Jn&&(D=new z1(v,t.width,t.height,a,s,r));let be=new Eu(L,j);this.xr=be,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let U=mt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=mt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(U){U!==void 0&&(me=U,this.setSize(W,ue,!1))},this.getSize=function(U){return U.set(W,ue)},this.setSize=function(U,$,de=!0){if(be.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}W=U,ue=$,t.width=Math.floor(U*me),t.height=Math.floor($*me),de===!0&&(t.style.width=U+"px",t.style.height=$+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(W*me,ue*me).floor()},this.setDrawingBufferSize=function(U,$,de){W=U,ue=$,me=de,t.width=Math.floor(U*de),t.height=Math.floor($*de),this.setViewport(0,0,U,$)},this.setEffects=function(U){if(v===Jn){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let $=0;$<U.length;$++)if(U[$].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(B)},this.getViewport=function(U){return U.copy(Ee)},this.setViewport=function(U,$,de,oe){U.isVector4?Ee.set(U.x,U.y,U.z,U.w):Ee.set(U,$,de,oe),Be.viewport(B.copy(Ee).multiplyScalar(te()).round())},this.getScissor=function(U){return U.copy(ot)},this.setScissor=function(U,$,de,oe){U.isVector4?ot.set(U.x,U.y,U.z,U.w):ot.set(U,$,de,oe),Be.scissor(V.copy(ot).multiplyScalar(te()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(U){Be.setScissorTest(Ke=U)},this.setOpaqueSort=function(U){Ie=U},this.setTransparentSort=function(U){$e=U},this.getClearColor=function(U){return U.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(U=!0,$=!0,de=!0){let oe=0;if(U){let le=!1;if(ie!==null){let Oe=ie.texture.format;le=g.has(Oe)}if(le){let Oe=ie.texture.type,Le=_.has(Oe),Fe=H.getClearColor(),De=H.getClearAlpha(),Xe=Fe.r,ht=Fe.g,dt=Fe.b;Le?(T[0]=Xe,T[1]=ht,T[2]=dt,T[3]=De,j.clearBufferuiv(j.COLOR,0,T)):(C[0]=Xe,C[1]=ht,C[2]=dt,C[3]=De,j.clearBufferiv(j.COLOR,0,C))}else oe|=j.COLOR_BUFFER_BIT}$&&(oe|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(oe|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&j.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),k=U},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),H.dispose(),ze.dispose(),_e.dispose(),lt.dispose(),Qe.dispose(),G.dispose(),Ce.dispose(),re.dispose(),Re.dispose(),qe.dispose(),xe.dispose(),be.dispose(),be.removeEventListener("sessionstart",Bn),be.removeEventListener("sessionend",on),pi.stop()};function Ze(U){U.preventDefault(),hu("WebGLRenderer: Context Lost."),I=!0}function st(){hu("WebGLRenderer: Context Restored."),I=!1;let U=Wt.autoReset,$=Pe.enabled,de=Pe.autoUpdate,oe=Pe.needsUpdate,le=Pe.type;at(),Wt.autoReset=U,Pe.enabled=$,Pe.autoUpdate=de,Pe.needsUpdate=oe,Pe.type=le}function ke(U){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Dt(U){let $=U.target;$.removeEventListener("dispose",Dt),it($)}function it(U){Sn(U),Qe.remove(U)}function Sn(U){let $=Qe.get(U).programs;$!==void 0&&($.forEach(function(de){xe.releaseProgram(de)}),U.isShaderMaterial&&xe.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,de,oe,le,Oe){$===null&&($=Ge);let Le=le.isMesh&&le.matrixWorld.determinantAffine()<0,Fe=fo(U,$,de,oe,le);Be.setMaterial(oe,Le);let De=de.index,Xe=1;if(oe.wireframe===!0){if(De=re.getWireframeAttribute(de),De===void 0)return;Xe=2}let ht=de.drawRange,dt=de.attributes.position,We=ht.start*Xe,_t=(ht.start+ht.count)*Xe;Oe!==null&&(We=Math.max(We,Oe.start*Xe),_t=Math.min(_t,(Oe.start+Oe.count)*Xe)),De!==null?(We=Math.max(We,0),_t=Math.min(_t,De.count)):dt!=null&&(We=Math.max(We,0),_t=Math.min(_t,dt.count));let Jt=_t-We;if(Jt<0||Jt===1/0)return;Re.setup(le,oe,Fe,de,De);let Ot,Nt=fe;if(De!==null&&(Ot=P.get(De),Nt=Ue,Nt.setIndex(Ot)),le.isMesh)oe.wireframe===!0?(Be.setLineWidth(oe.wireframeLinewidth*te()),Nt.setMode(j.LINES)):Nt.setMode(j.TRIANGLES);else if(le.isLine){let fn=oe.linewidth;fn===void 0&&(fn=1),Be.setLineWidth(fn*te()),le.isLineSegments?Nt.setMode(j.LINES):le.isLineLoop?Nt.setMode(j.LINE_LOOP):Nt.setMode(j.LINE_STRIP)}else le.isPoints?Nt.setMode(j.POINTS):le.isSprite&&Nt.setMode(j.TRIANGLES);if(le.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let fn=le._multiDrawStarts,Je=le._multiDrawCounts,en=le._multiDrawCount,nt=De?P.get(De).bytesPerElement:1,$n=Qe.get(oe).currentProgram.getUniforms();for(let dn=0;dn<en;dn++)$n.setValue(j,"_gl_DrawID",dn),Nt.render(fn[dn]/nt,Je[dn])}else if(le.isInstancedMesh)Nt.renderInstances(We,Jt,le.count);else if(de.isInstancedBufferGeometry){let fn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Je=Math.min(de.instanceCount,fn);Nt.renderInstances(We,Jt,Je)}else Nt.render(We,Jt)};function di(U,$,de,oe){k!==null&&U.isNodeMaterial&&k.setObject(oe,U),Ct===!0&&ye.setState(U,de,!1),U.transparent===!0&&U.side===zn&&U.forceSinglePass===!1?(U.side=Cn,U.needsUpdate=!0,Bs(U,$,oe),U.side=Cs,U.needsUpdate=!0,Bs(U,$,oe),U.side=zn):Bs(U,$,oe)}this.compile=function(U,$,de=null){de===null&&(de=U),k!==null&&k.renderStart(U,$,de),S=_e.get(de),S.init($),w.push(S),de.traverseVisible(function(le){le.isLight&&le.layers.test($.layers)&&(S.pushLight(le),le.castShadow&&S.pushShadow(le))}),U!==de&&U.traverseVisible(function(le){le.isLight&&le.layers.test($.layers)&&(S.pushLight(le),le.castShadow&&S.pushShadow(le))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),jt=this.localClippingEnabled,Ct=ye.init(this.clippingPlanes,jt),Ct===!0&&ye.setGlobalState(this.clippingPlanes,$),k!==null&&Pe.render(S.state.shadowsArray,de,$);let oe=new Set;return U.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let Oe=le.material;if(Oe)if(Array.isArray(Oe))for(let Le=0;Le<Oe.length;Le++){let Fe=Oe[Le];di(Fe,de,$,le),oe.add(Fe)}else di(Oe,de,$,le),oe.add(Oe)}),S=w.pop(),k!==null&&k.renderEnd(),oe},this.compileAsync=function(U,$,de=null){let oe=this.compile(U,$,de);return new Promise(le=>{function Oe(){if(oe.forEach(function(Le){let De=Qe.get(Le).currentProgram;(De===void 0||De.isReady())&&oe.delete(Le)}),oe.size===0){le(U);return}setTimeout(Oe,10)}mt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ii=null;function ri(U){Ii&&Ii(U)}function Bn(){pi.stop()}function on(){pi.start()}let pi=new xp;pi.setAnimationLoop(ri),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(U){Ii=U,be.setAnimationLoop(U),U===null?pi.stop():pi.start()},be.addEventListener("sessionstart",Bn),be.addEventListener("sessionend",on),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(U,$);let de=be.enabled===!0&&be.isPresenting===!0,oe=D!==null&&(ie===null||de)&&D.begin(L,ie);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera($),$=be.getCamera()),U.isScene===!0&&U.onBeforeRender(L,U,$,ie),S=_e.get(U,w.length),S.init($),S.state.textureUnits=lt.getTextureUnits(),w.push(S),wt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?Mt.setFromArrayCamera($):je.setFromProjectionMatrix(wt,ci,$.reversedDepth),jt=this.localClippingEnabled,Ct=ye.init(this.clippingPlanes,jt),A=ze.get(U,x.length),A.init(),x.push(A),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let Le=L.xr.getDepthSensingMesh();Le!==null&&Kn(Le,$,-1/0,L.sortObjects)}Kn(U,$,0,L.sortObjects),A.finish(),k!==null&&k.updateLights(S.state.lightsArray),L.sortObjects===!0&&A.sort(Ie,$e),Tt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Tt&&H.addToRenderList(A,U),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&ye.beginShadows();let le=S.state.shadowsArray;if(Pe.render(le,U,$),Ct===!0&&ye.endShadows(),(oe&&D.hasRenderPass())===!1){let Le=A.opaque,Fe=A.transmissive;if(S.setupLights(),$.isArrayCamera){let De=$.cameras;if(Fe.length>0)for(let Xe=0,ht=De.length;Xe<ht;Xe++){let dt=De[Xe];oi(Le,Fe,U,dt)}Tt&&H.render(U);for(let Xe=0,ht=De.length;Xe<ht;Xe++){let dt=De[Xe];ds(A,U,dt,dt.viewport)}}else Fe.length>0&&oi(Le,Fe,U,$),Tt&&H.render(U),ds(A,U,$)}ie!==null&&ee===0&&(lt.updateMultisampleRenderTarget(ie),lt.updateRenderTargetMipmap(ie)),oe&&D.end(L),U.isScene===!0&&U.onAfterRender(L,U,$),Re.resetDefaultState(),K=-1,F=null,w.pop(),w.length>0?(S=w[w.length-1],lt.setTextureUnits(S.state.textureUnits),Ct===!0&&ye.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,k!==null&&k.renderEnd()};function Kn(U,$,de,oe){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)de=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLight)S.pushLight(U),U.castShadow&&S.pushShadow(U);else if(U.isSprite){let Le=$.isArrayCamera?Mt:je;if(!U.frustumCulled||U.intersectsFrustum(Le)){oe&&Ht.setFromMatrixPosition(U.matrixWorld).applyMatrix4(wt);let Fe=Ce.update(U),De=U.material;De.visible&&A.push(U,Fe,De,de,Ht.z,null,$)}}else if(U.isMesh||U.isLine||U.isPoints){let Le=$.isArrayCamera?Mt:je;if(!U.frustumCulled||U.intersectsFrustum(Le)){let Fe=Ce.update(U),De=U.material;if(oe&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ht.copy(U.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ht.copy(Fe.boundingSphere.center)),Ht.applyMatrix4(U.matrixWorld).applyMatrix4(wt)),Array.isArray(De)){let Xe=Fe.groups;for(let ht=0,dt=Xe.length;ht<dt;ht++){let We=Xe[ht],_t=De[We.materialIndex];_t&&_t.visible&&A.push(U,Fe,_t,de,Ht.z,We,$)}}else De.visible&&A.push(U,Fe,De,de,Ht.z,null,$)}}}let Oe=U.children;for(let Le=0,Fe=Oe.length;Le<Fe;Le++)Kn(Oe[Le],$,de,oe)}function ds(U,$,de,oe){let{opaque:le,transmissive:Oe,transparent:Le}=U;S.setupLightsView(de),Ct===!0&&ye.setGlobalState(L.clippingPlanes,de),oe&&Be.viewport(B.copy(oe)),le.length>0&&Xt(le,$,de),Oe.length>0&&Xt(Oe,$,de),Le.length>0&&Xt(Le,$,de),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function oi(U,$,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[oe.id]===void 0){let We=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[oe.id]=new ti(1,1,{generateMipmaps:!0,type:We?wi:Jn,minFilter:is,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let Oe=S.state.transmissionRenderTarget[oe.id],Le=oe.viewport||B;Oe.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);let Fe=L.getRenderTarget(),De=L.getActiveCubeFace(),Xe=L.getActiveMipmapLevel();L.setRenderTarget(Oe),L.getClearColor(Q),ae=L.getClearAlpha(),ae<1&&L.setClearColor(16777215,.5),L.clear(),Tt&&H.render(de);let ht=L.toneMapping;L.toneMapping=Oi;let dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),S.setupLightsView(oe),Ct===!0&&ye.setGlobalState(L.clippingPlanes,oe),Xt(U,de,oe),lt.updateMultisampleRenderTarget(Oe),lt.updateRenderTargetMipmap(Oe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let _t=0,Jt=$.length;_t<Jt;_t++){let Ot=$[_t],{object:Nt,geometry:fn,material:Je,group:en}=Ot;if(Je.side===zn&&Nt.layers.test(oe.layers)){let nt=Je.side;Je.side=Cn,Je.needsUpdate=!0,Qt(Nt,de,oe,fn,Je,en),Je.side=nt,Je.needsUpdate=!0,We=!0}}We===!0&&(lt.updateMultisampleRenderTarget(Oe),lt.updateRenderTargetMipmap(Oe))}L.setRenderTarget(Fe,De,Xe),L.setClearColor(Q,ae),dt!==void 0&&(oe.viewport=dt),L.toneMapping=ht}function Xt(U,$,de){let oe=$.isScene===!0?$.overrideMaterial:null;for(let le=0,Oe=U.length;le<Oe;le++){let Le=U[le],{object:Fe,geometry:De,group:Xe}=Le,ht=Le.material;ht.allowOverride===!0&&oe!==null&&(ht=oe),Fe.layers.test(de.layers)&&Qt(Fe,$,de,De,ht,Xe)}}function Qt(U,$,de,oe,le,Oe){k!==null&&le.isNodeMaterial&&k.setObject(U,le),U.onBeforeRender(L,$,de,oe,le,Oe),U.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),le.onBeforeRender(L,$,de,oe,U,Oe),le.transparent===!0&&le.side===zn&&le.forceSinglePass===!1?(le.side=Cn,le.needsUpdate=!0,L.renderBufferDirect(de,$,oe,le,U,Oe),le.side=Cs,le.needsUpdate=!0,L.renderBufferDirect(de,$,oe,le,U,Oe),le.side=zn):L.renderBufferDirect(de,$,oe,le,U,Oe),U.onAfterRender(L,$,de,oe,le,Oe)}function Os(U){let $=0;for(let de of U)de.texture!==null&&$++;return $}function Bs(U,$,de){$.isScene!==!0&&($=Ge);let oe=Qe.get(U),le=S.state.lights,Oe=S.state.shadowsArray,Le=le.state.version,Fe=xe.getParameters(U,le.state,Oe,$,de,S.state.lightProbeGridArray),De=xe.getProgramCacheKey(Fe),Xe=oe.programs;oe.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?$.environment:null,oe.fog=$.fog;let ht=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;oe.envMap=G.get(U.envMap||oe.environment,ht),oe.envMapRotation=oe.environment!==null&&U.envMap===null?$.environmentRotation:U.envMapRotation,Xe===void 0&&(U.addEventListener("dispose",Dt),Xe=new Map,oe.programs=Xe,oe.programVariants=new Map);let dt=Xe.get(De);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===Le)return Vi(U,Fe),dt}else Fe.uniforms=xe.getUniforms(U),k!==null&&U.isNodeMaterial&&k.build(U,de,Fe),U.onBeforeCompile(Fe,L),dt=xe.acquireProgram(Fe,De),Xe.set(De,dt),oe.uniforms=Fe.uniforms;let We=oe.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(We.clippingPlanes=ye.uniform),Vi(U,Fe),oe.needsLights=ur(U),oe.lightsStateVersion=Le,oe.needsLights&&(We.ambientLightColor.value=le.state.ambient,We.lightProbe.value=le.state.probe,We.sunLights.value=le.state.sun,We.sunLightShadows.value=le.state.sunShadow,We.directionalLights.value=le.state.directional,We.directionalLightShadows.value=le.state.directionalShadow,We.spotLights.value=le.state.spot,We.spotLightShadows.value=le.state.spotShadow,We.rectAreaLights.value=le.state.rectArea,We.ltc_1.value=le.state.rectAreaLTC1,We.ltc_2.value=le.state.rectAreaLTC2,We.pointLights.value=le.state.point,We.pointLightShadows.value=le.state.pointShadow,We.hemisphereLights.value=le.state.hemi,We.sunShadowMatrix.value=le.state.sunShadowMatrix,We.sunShadowCascade.value=le.state.sunShadowCascade,We.directionalShadowMatrix.value=le.state.directionalShadowMatrix,We.spotLightMatrix.value=le.state.spotLightMatrix,We.spotLightMap.value=le.state.spotLightMap,We.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.numLightProbeGrids=Os(S.state.lightProbeGridArray),oe.currentProgram=dt,oe.uniformsList=null,dt}function qn(U,$,de,oe,le){let Oe=Qe.get(U),Le=Oe.currentProgram.id+","+oe+","+le,Fe=Oe.programVariants.get(Le);return Fe===void 0?(Fe=Bs(U,$,de),Oe.programVariants.set(Le,Fe)):(Oe.currentProgram=Fe,Oe.uniformsList=null,Oe.outputColorSpace=oe,Oe.toneMapping=le),Fe}function Pi(U){if(U.uniformsList===null){let $=U.currentProgram.getUniforms();U.uniformsList=Wr.seqWithValue($.seq,U.uniforms)}return U.uniformsList}function Vi(U,$){let de=Qe.get(U);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function fo(U,$,de,oe,le){$.isScene!==!0&&($=Ge),lt.resetTextureUnits();let Oe=$.fog,Le=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?$.environment:null,Fe=ie===null?L.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Rt.workingColorSpace,De=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Xe=G.get(oe.envMap||Le,De),ht=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,dt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!de.morphAttributes.position,_t=!!de.morphAttributes.normal,Jt=!!de.morphAttributes.color,Ot=Oi;oe.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ot=L.toneMapping);let Nt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,fn=Nt!==void 0?Nt.length:0,Je=Qe.get(oe),en=S.state.lights;if(Ct===!0&&(jt===!0||U!==F)){let Bt=U===F&&oe.id===K;ye.setState(oe,U,Bt)}let nt=!1,$n=!1;oe.version===Je.__version?Je.needsLights&&Je.lightsStateVersion!==en.state.version||le.isBatchedMesh&&Je.batching===!1||!le.isBatchedMesh&&Je.batching===!0||le.isBatchedMesh&&Je.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&Je.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&Je.instancing===!1||!le.isInstancedMesh&&Je.instancing===!0||le.isSkinnedMesh&&Je.skinning===!1||!le.isSkinnedMesh&&Je.skinning===!0||le.isInstancedMesh&&Je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Je.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Je.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Je.instancingMorph===!1&&le.morphTexture!==null||Je.envMap!==Xe||oe.fog===!0&&Je.fog!==Oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ye.numPlanes||Je.numIntersection!==ye.numIntersection)||Je.vertexAlphas!==ht||Je.vertexTangents!==dt||Je.morphTargets!==We||Je.morphNormals!==_t||Je.morphColors!==Jt||Je.morphTargetsCount!==fn||Je.numLightProbeGrids!==Os(S.state.lightProbeGridArray)?nt=!0:(Je.outputColorSpace!==Fe||Je.toneMapping!==Ot)&&($n=!0):(nt=!0,Je.__version=oe.version);let dn=Je.currentProgram;(nt===!0||$n===!0)&&(dn=$n===!0?qn(oe,$,le,Fe,Ot):Bs(oe,$,le),k&&oe.isNodeMaterial&&k.onUpdateProgram(oe,dn,Je));let mi=!1,gi=!1,et=!1,At=dn.getUniforms(),Yt=Je.uniforms;if(Be.useProgram(dn.program)&&(mi=!0,gi=!0,et=!0),oe.id!==K&&(K=oe.id,gi=!0),mi||F!==U){Be.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),At.setValue(j,"projectionMatrix",U.projectionMatrix),At.setValue(j,"viewMatrix",U.matrixWorldInverse);let hn=At.map.cameraPosition;hn!==void 0&&hn.setValue(j,cn.setFromMatrixPosition(U.matrixWorld)),rt.logarithmicDepthBuffer&&At.setValue(j,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&At.setValue(j,"isOrthographic",U.isOrthographicCamera===!0),F!==U&&(F=U,gi=!0,et=!0)}if(Je.needsLights&&(en.state.sunShadowMap.length>0&&At.setValue(j,"sunShadowMap",en.state.sunShadowMap,lt),en.state.directionalShadowMap.length>0&&At.setValue(j,"directionalShadowMap",en.state.directionalShadowMap,lt),en.state.spotShadowMap.length>0&&At.setValue(j,"spotShadowMap",en.state.spotShadowMap,lt),en.state.pointShadowMap.length>0&&At.setValue(j,"pointShadowMap",en.state.pointShadowMap,lt)),le.isSkinnedMesh){At.setOptional(j,le,"bindMatrix"),At.setOptional(j,le,"bindMatrixInverse");let Bt=le.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),At.setValue(j,"boneTexture",Bt.boneTexture,lt))}le.isBatchedMesh&&(At.setOptional(j,le,"batchingTexture"),At.setValue(j,"batchingTexture",le._matricesTexture,lt),At.setOptional(j,le,"batchingIdTexture"),At.setValue(j,"batchingIdTexture",le._indirectTexture,lt),At.setOptional(j,le,"batchingColorTexture"),le._colorsTexture!==null&&At.setValue(j,"batchingColorTexture",le._colorsTexture,lt));let Ut=de.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&ge.update(le,de,dn),(gi||Je.receiveShadow!==le.receiveShadow)&&(Je.receiveShadow=le.receiveShadow,At.setValue(j,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&$.environment!==null&&(Yt.envMapIntensity.value=$.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=xv()),gi){if(At.setValue(j,"toneMappingExposure",L.toneMappingExposure),Je.needsLights&&po(Yt,et),Oe&&oe.fog===!0&&Ne.refreshFogUniforms(Yt,Oe),Ne.refreshMaterialUniforms(Yt,oe,me,ue,S.state.transmissionRenderTarget[U.id]),Je.needsLights&&Je.numLightProbeGrids>0){let Bt=b,hn=0;for(let wn of S.state.lightProbeGridArray)wn.texture!==null&&(Bt.textures[hn]=wn.texture,Bt.min[hn]=wn.boundingBox.min,Bt.max[hn]=wn.boundingBox.max,Bt.resolution[hn]=wn.resolution,hn++);for(let wn in Bt)Bt[wn].length=hn;Yt.probesSH.value=Bt.textures,Yt.probesMin.value=Bt.min,Yt.probesMax.value=Bt.max,Yt.probesResolution.value=Bt.resolution}Wr.upload(j,Pi(Je),Yt,lt)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Wr.upload(j,Pi(Je),Yt,lt),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&At.setValue(j,"center",le.center),At.setValue(j,"modelViewMatrix",le.modelViewMatrix),At.setValue(j,"normalMatrix",le.normalMatrix),At.setValue(j,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){let Bt=oe.uniformsGroups;for(let hn=0,wn=Bt.length;hn<wn;hn++){let mo=Bt[hn];qe.update(mo,dn),qe.bind(mo,dn)}}return dn}function po(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.sunLights.needsUpdate=$,U.sunLightShadows.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function ur(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(U,$,de){let oe=Qe.get(U);oe.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Qe.get(U.texture).__webglTexture=$,Qe.get(U.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,$){let de=Qe.get(U);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,de=0){ie=U,q=$,ee=de;let oe=null,le=!1,Oe=!1;if(U){let Fe=Qe.get(U);if(Fe.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(j.FRAMEBUFFER,Fe.__webglFramebuffer),B.copy(U.viewport),V.copy(U.scissor),ne=U.scissorTest,Be.viewport(B),Be.scissor(V),Be.setScissorTest(ne),K=-1;return}else if(Fe.__webglFramebuffer===void 0)lt.setupRenderTarget(U);else if(Fe.__hasExternalTextures)lt.rebindTextures(U,Qe.get(U.texture).__webglTexture,Qe.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let ht=U.depthTexture;if(Fe.__boundDepthTexture!==ht){if(ht!==null&&Qe.has(ht)&&(U.width!==ht.image.width||U.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(U)}}let De=U.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Oe=!0);let Xe=Qe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Xe[$])?oe=Xe[$][de]:oe=Xe[$],le=!0):U.samples>0&&lt.useMultisampledRTT(U)===!1?oe=Qe.get(U).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[de]:oe=Xe,B.copy(U.viewport),V.copy(U.scissor),ne=U.scissorTest}else B.copy(Ee).multiplyScalar(me).floor(),V.copy(ot).multiplyScalar(me).floor(),ne=Ke;if(de!==0&&(oe=N),Be.bindFramebuffer(j.FRAMEBUFFER,oe)&&Be.drawBuffers(U,oe),Be.viewport(B),Be.scissor(V),Be.setScissorTest(ne),le){let Fe=Qe.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe.__webglTexture,de)}else if(Oe){let Fe=$;for(let De=0;De<U.textures.length;De++){let Xe=Qe.get(U.textures[De]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+De,Xe.__webglTexture,de,Fe)}}else if(U!==null&&de!==0){let Fe=Qe.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Fe.__webglTexture,de)}K=-1};function ks(U){let $=Qe.get(U);return($.__readFormat!==U.format||$.__readType!==U.type)&&($.__readFormat=U.format,$.__readType=U.type,$.__formatReadable=rt.textureFormatReadable(U.format),$.__typeReadable=rt.textureTypeReadable(U.type)),$}this.readRenderTargetPixels=function(U,$,de,oe,le,Oe,Le,Fe=0){if(!(U&&U.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Qe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le],Array.isArray(De)&&(De=De[0])),De){Be.bindFramebuffer(j.FRAMEBUFFER,De);try{let Xe=U.textures[Fe],ht=Xe.format,dt=Xe.type;U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Fe);let We=ks(Xe);if(We.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-oe&&de>=0&&de<=U.height-le&&j.readPixels($,de,oe,le,Te.convert(ht),Te.convert(dt),Oe)}finally{let Xe=ie!==null?Qe.get(ie).__webglFramebuffer:null;Be.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(U,$,de,oe,le,Oe,Le,Fe=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Qe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le],Array.isArray(De)&&(De=De[0])),De)if($>=0&&$<=U.width-oe&&de>=0&&de<=U.height-le){Be.bindFramebuffer(j.FRAMEBUFFER,De);let Xe=U.textures[Fe],ht=Xe.format,dt=Xe.type;U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Fe);let We=ks(Xe);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,_t),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),j.readPixels($,de,oe,le,Te.convert(ht),Te.convert(dt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let Jt=ie!==null?Qe.get(ie).__webglFramebuffer:null;Be.bindFramebuffer(j.FRAMEBUFFER,Jt);let Ot=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Vd(j,Ot,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,_t),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(_t),j.deleteSync(Ot),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,$=null,de=0){let oe=Math.pow(2,-de),le=Math.floor(U.image.width*oe),Oe=Math.floor(U.image.height*oe),Le=$!==null?$.x:0,Fe=$!==null?$.y:0;lt.setTexture2D(U,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,Le,Fe,le,Oe),Be.unbindTexture()},this.copyTextureToTexture=function(U,$,de=null,oe=null,le=0,Oe=0){let Le,Fe,De,Xe,ht,dt,We,_t,Jt,Ot=U.isCompressedTexture?U.mipmaps[Oe]:U.image;if(de!==null)Le=de.max.x-de.min.x,Fe=de.max.y-de.min.y,De=de.isBox3?de.max.z-de.min.z:1,Xe=de.min.x,ht=de.min.y,dt=de.isBox3?de.min.z:0;else{let At=Math.pow(2,-le);Le=Math.floor(Ot.width*At),Fe=Math.floor(Ot.height*At),U.isDataArrayTexture?De=Ot.depth:U.isData3DTexture?De=Math.floor(Ot.depth*At):De=1,Xe=0,ht=0,dt=0}oe!==null?(We=oe.x,_t=oe.y,Jt=oe.z):(We=0,_t=0,Jt=0);let Nt=Te.convert($.format),fn=Te.convert($.type),Je;$.isData3DTexture?(lt.setTexture3D($,0),Je=j.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(lt.setTexture2DArray($,0),Je=j.TEXTURE_2D_ARRAY):(lt.setTexture2D($,0),Je=j.TEXTURE_2D),Be.activeTexture(j.TEXTURE0),Be.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),Be.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Be.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);let en=Be.getParameter(j.UNPACK_ROW_LENGTH),nt=Be.getParameter(j.UNPACK_IMAGE_HEIGHT),$n=Be.getParameter(j.UNPACK_SKIP_PIXELS),dn=Be.getParameter(j.UNPACK_SKIP_ROWS),mi=Be.getParameter(j.UNPACK_SKIP_IMAGES);Be.pixelStorei(j.UNPACK_ROW_LENGTH,Ot.width),Be.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ot.height),Be.pixelStorei(j.UNPACK_SKIP_PIXELS,Xe),Be.pixelStorei(j.UNPACK_SKIP_ROWS,ht),Be.pixelStorei(j.UNPACK_SKIP_IMAGES,dt);let gi=U.isDataArrayTexture||U.isData3DTexture,et=$.isDataArrayTexture||$.isData3DTexture;if(U.isDepthTexture){let At=Qe.get(U),Yt=Qe.get($),Ut=Qe.get(At.__renderTarget),Bt=Qe.get(Yt.__renderTarget);Be.bindFramebuffer(j.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Be.bindFramebuffer(j.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let hn=0;hn<De;hn++)gi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Qe.get(U).__webglTexture,le,dt+hn),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Qe.get($).__webglTexture,Oe,Jt+hn)),j.blitFramebuffer(Xe,ht,Xe+Le,ht+Fe,We,_t,We+Le,_t+Fe,j.DEPTH_BUFFER_BIT,j.NEAREST);Be.bindFramebuffer(j.READ_FRAMEBUFFER,null),Be.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(le!==0||U.isRenderTargetTexture||Qe.has(U)){let At=Qe.get(U),Yt=Qe.get($);Be.bindFramebuffer(j.READ_FRAMEBUFFER,O),Be.bindFramebuffer(j.DRAW_FRAMEBUFFER,X);for(let Ut=0;Ut<De;Ut++)gi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,At.__webglTexture,le,dt+Ut):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,At.__webglTexture,le),et?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Yt.__webglTexture,Oe,Jt+Ut):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Yt.__webglTexture,Oe),le!==0?j.blitFramebuffer(Xe,ht,Xe+Le,ht+Fe,We,_t,We+Le,_t+Fe,j.COLOR_BUFFER_BIT,j.NEAREST):et?j.copyTexSubImage3D(Je,Oe,We,_t,Jt+Ut,Xe,ht,Le,Fe):j.copyTexSubImage2D(Je,Oe,We,_t,Xe,ht,Le,Fe);Be.bindFramebuffer(j.READ_FRAMEBUFFER,null),Be.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else et?U.isDataTexture||U.isData3DTexture?j.texSubImage3D(Je,Oe,We,_t,Jt,Le,Fe,De,Nt,fn,Ot.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(Je,Oe,We,_t,Jt,Le,Fe,De,Nt,Ot.data):j.texSubImage3D(Je,Oe,We,_t,Jt,Le,Fe,De,Nt,fn,Ot):U.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Oe,We,_t,Le,Fe,Nt,fn,Ot.data):U.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Oe,We,_t,Ot.width,Ot.height,Nt,Ot.data):j.texSubImage2D(j.TEXTURE_2D,Oe,We,_t,Le,Fe,Nt,fn,Ot);Be.pixelStorei(j.UNPACK_ROW_LENGTH,en),Be.pixelStorei(j.UNPACK_IMAGE_HEIGHT,nt),Be.pixelStorei(j.UNPACK_SKIP_PIXELS,$n),Be.pixelStorei(j.UNPACK_SKIP_ROWS,dn),Be.pixelStorei(j.UNPACK_SKIP_IMAGES,mi),Oe===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&j.generateMipmap(Je),Be.unbindTexture()},this.initRenderTarget=function(U){Qe.get(U).__webglFramebuffer===void 0&&lt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?lt.setTextureCube(U,0):U.isData3DTexture?lt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?lt.setTexture2DArray(U,0):lt.setTexture2D(U,0),Be.unbindTexture()},this.resetState=function(){q=0,ee=0,ie=null,Be.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var Wn={west:62,east:106,halfDepth:48,home:{x:96,z:41.52}},Ti={west:39,east:65,north:63,south:87,gate:{x:55,z:64},bay:{x:55,z:76},approach:{x:55,z:57}},rn=[-57,-19,19,57],Ai=[-38,0,38],fa={x:11.7,z:3.2},qr={x:12.05,z:-5.45},Ps={x:2,z:38},In={x:38,z:-38},tr={door:{x:47.6,z:-33},inside:{x:47.6,z:-38.4,angle:0},out:{x:47.6,z:-29.6,angle:0}},Cp={x:42.3,z:-41.25},xt=(n,e,t)=>Math.max(e,Math.min(t,n)),se=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Rn(n,e,t,i){let s=Math.abs(n)+t<65&&Math.abs(e)+t<65,r=n>Wn.west&&n+t<Wn.east&&Math.abs(e)+t<Wn.halfDepth,o=n-t>Ti.west&&n+t<Ti.east&&e>Ti.north&&e+t<Ti.south;return(s||r||o)&&i.every(a=>{if(a.off)return!0;let h=n-xt(n,a.x-a.w/2,a.x+a.w/2),l=e-xt(e,a.z-a.d/2,a.z+a.d/2);return h*h+l*l>=t*t})}function da(n,e,t,i,s){let r=n.x,o=n.z;return Rn(e,n.z,i,s)&&(n.x=e),Rn(n.x,t,i,s)&&(n.z=t),n.x!==r||n.z!==o}function bn(n,e,t){let i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+xt(i,-t,t)}function Rp(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function Rc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,h=new $t;h.morphTargetsRelative=a;let l=0;for(let d=0;d<n.length;++d){let f=n[d],p=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[u].length!==n[0].morphAttributes[u].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+u+'" morph attribute.'),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,u,d),l+=u}}if(t){let d=0,f=[];for(let p=0;p<n.length;++p){let m=n[p].index;for(let u=0;u<m.count;++u)f.push(m.getX(u)+d);d+=n[p].attributes.position.count}h.setIndex(f)}for(let d in r){let f=Ip(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;h.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f!==0){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[d]=[];for(let p=0;p<f;++p){let m=[];for(let v=0;v<o[d].length;++v)m.push(o[d][v][p]);let u=Ip(m);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;h.morphAttributes[d].push(u)}}}return h}function Ip(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let d=n[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),a=new sn(o,t,i),h=0;for(let l=0;l<n.length;++l){let d=n[l];if(d.isInterleavedBufferAttribute){let f=h/t;for(let p=0,m=d.count;p<m;p++)for(let u=0;u<t;u++){let v=d.getComponent(p,u);a.setComponent(p+f,u,v)}}else o.set(d.array,h);h+=d.count*t}return s!==void 0&&(a.gpuType=s),a}var pa=new J;function ui(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),h=Math.PI/4;pa.copy(e),pa[i]=0,pa.normalize();let l=.5*o/(o+a),d=1-pa.angleTo(n)/h;return Math.sign(pa[t])===1?d*l:a/(o+a)+l+l*(1-d)}var ma=class n extends tn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let h=new J,l=new J,d=new J(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,u=f.length/6,v=new J,g=.5/o;for(let _=0,T=0;_<f.length;_+=3,T+=2)switch(h.fromArray(f,_),l.copy(h),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[_+0]=d.x*Math.sign(h.x)+l.x*r,f[_+1]=d.y*Math.sign(h.y)+l.y*r,f[_+2]=d.z*Math.sign(h.z)+l.z*r,p[_+0]=l.x,p[_+1]=l.y,p[_+2]=l.z,Math.floor(_/u)){case 0:v.set(1,0,0),m[T+0]=ui(v,l,"z","y",r,i),m[T+1]=1-ui(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),m[T+0]=1-ui(v,l,"z","y",r,i),m[T+1]=1-ui(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),m[T+0]=1-ui(v,l,"x","z",r,e),m[T+1]=ui(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),m[T+0]=1-ui(v,l,"x","z",r,e),m[T+1]=1-ui(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),m[T+0]=1-ui(v,l,"x","y",r,e),m[T+1]=1-ui(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),m[T+0]=ui(v,l,"x","y",r,e),m[T+1]=1-ui(v,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var _v={tee:"Camiseta",tank:"Regata",dress:"Camisa social",none:"Sem camisa"},yv={pants:"Cal\xE7a",shorts:"Bermuda"},vv={sneakers:"T\xEAnis",flipflops:"Chinelo",dress:"Sapato social"},Cu={bald:"Careca",buzz:"Raspado",short:"Curto",afro:"Black power",long:"Comprido",mohawk:"Moicano",cap:"Bon\xE9"},Ru={none:"Sem barba",stubble:"Por fazer",goatee:"Cavanhaque",mustache:"Bigode",full:"Barba cheia",chevron:"Bigode e cavanhaque"},Yr={gold:14266683,silver:13225169,diamond:14677503},Iu=[15921126,2040614,2772879,11680307,3107660,14725949,8014476,14711354,7307148,2592670],Pu=[1906452,3876376,6964005,13081170,9318175,10132118,2772896],Lu=[15052936,12684900,11765348,10119749,8475704,6175527];function nr(){return{shirt:"tee",shirtColor:2386265,legs:"pants",legColor:3553348,shoes:"sneakers",shoeColor:13812648,hair:"cap",hairColor:1906452,beard:"none",skin:12220240,glasses:!1,chain:"none",earrings:"none",watch:"none",ring:"none",height:1,width:1,capColor:1522486}}function Pp(n=12157017){return{...nr(),shirt:"dress",shirtColor:3558501,legColor:2503491,shoes:"dress",shoeColor:1447446,hair:"cap",capColor:1845820,skin:n,beard:"none"}}function ga(n){let e=n*2654435761>>>0||1,t=()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296),i=r=>r[Math.floor(t()*r.length)],s=r=>{let o=t()*r.reduce((a,[,h])=>a+h,0);for(let[a,h]of r)if(o-=h,o<=0)return a;return r[0][0]};return{feminine:n%3===0,shirt:s([["tee",.46],["tank",.2],["dress",.2],["none",.08]]),shirtColor:i(Iu),legs:s([["pants",.62],["shorts",.38]]),legColor:i([3553348,2373199,5917242,2894892,8221798,4020851,11049860]),shoes:s([["sneakers",.5],["flipflops",.28],["dress",.22]]),shoeColor:i([15789282,2236962,9056042,2969482,5915442]),hair:s([["short",.3],["buzz",.18],["bald",.1],["afro",.12],["long",.14],["mohawk",.05],["cap",.11]]),hairColor:i(Pu.slice(0,6)),beard:n%3===0?"none":s([["none",.45],["stubble",.18],["goatee",.1],["mustache",.1],["full",.12],["chevron",.05]]),skin:i(Lu),glasses:t()<.14,chain:s([["none",.82],["silver",.11],["gold",.07]]),earrings:s([["none",.88],["silver",.06],["gold",.05],["diamond",.01]]),watch:s([["none",.75],["silver",.17],["gold",.08]]),ring:s([["none",.85],["silver",.1],["gold",.05]]),height:.92+t()*.16,width:.9+t()*.25,capColor:i([1522486,9056042,2236962,2772879,14725949])}}function Lp(n){let e=nr();if(!n||typeof n!="object")return e;let t=(r,o)=>Object.hasOwn(o,n[r])?n[r]:e[r],i=r=>Number.isInteger(n[r])&&n[r]>=0&&n[r]<=16777215?n[r]:e[r],s=(r,o)=>o.includes(n[r])?n[r]:"none";return{shirt:t("shirt",_v),shirtColor:i("shirtColor"),legs:t("legs",yv),legColor:i("legColor"),shoes:t("shoes",vv),shoeColor:i("shoeColor"),hair:t("hair",Cu),hairColor:i("hairColor"),beard:t("beard",Ru),skin:i("skin"),glasses:n.glasses===!0,chain:s("chain",["gold","silver"]),earrings:s("earrings",["gold","silver","diamond"]),watch:s("watch",["gold","silver"]),ring:s("ring",["gold","silver"]),height:1,width:1,capColor:i("capColor")}}var Mv=new tn,bv=new ma(1,1,1,4,.23),Sv=new ma(1,1,1,2,.29),wv=new ws(1,10,7),Tv=new Hn(1,1,1,12),Du=new Map,Av=new nn({vertexColors:!0,roughness:.82}),Lc=new nn({vertexColors:!0,roughness:.36,metalness:.18});function Ei(n,e,t=Av){if(!e.length)return;let i=e.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,h=new Float32Array(a*3),l=r.material.color;for(let d=0;d<h.length;d+=3){let f=l;if(r.userData.tankSkin){let p=r.geometry.attributes.position,m=Math.floor(d/9)*3,u=(p.getX(m)+p.getX(m+1)+p.getX(m+2))/3,v=(p.getY(m)+p.getY(m+1)+p.getY(m+2))/3;(v>.49||v>.14&&Math.abs(u)>.36||v>.27&&Math.abs(u)<.14)&&(f=r.userData.tankSkin)}h[d]=f.r,h[d+1]=f.g,h[d+2]=f.b}return o.setAttribute("color",new sn(h,3)),o});n.remove(...e);let s=new St(Rc(i),t);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var as=n=>n.children.filter(e=>e instanceof St);function ft(n,e,t,i,s,r,o,a,h,l=!1){let d=t+":"+l;Du.has(d)||Du.set(d,new nn({color:t,roughness:l?.33:.87,metalness:l?.2:0}));let f=new St({box:Mv,cloth:Sv,sphere:wv,cylinder:Tv}[e],Du.get(d));return f.scale.set(o,a,h),f.position.set(i,s,r),f.castShadow=!0,f.receiveShadow=!0,n.add(f),f}var Ev=new Zs(1,16),Cv=new Vt({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function Dc(n,e,t){let i=new St(Ev,Cv);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(e,t,1),n.add(i),i}var Rv=new Xo(1,.09,6,18),Iv=new nn({vertexColors:!0,roughness:.22,metalness:.9});var Zr=(n,e)=>{let t=Math.max(0,Math.min(255,(n>>16&255)*e)),i=Math.max(0,Math.min(255,(n>>8&255)*e)),s=Math.max(0,Math.min(255,(n&255)*e));return t<<16|i<<8|s};function Ls(n,e){let t={...nr(),...e},{skin:i}=t,s=new Et;s.rotation.order="YXZ",s.scale.set(t.width,t.height,t.width);let r=Dc(s,.41,.38),o=new Et;s.add(o);let a=(A,S,x,w,D,L,I,k,N=!1)=>ft(o,A,S,x,w,D,L,I,k,N),h=t.shirt==="none",l=h?i:t.shirtColor;a("cloth",t.legColor,0,.94,0,.44,.25,.29);let d=a(t.shirt==="tank"?"box":"cloth",l,0,1.25,0,.52,.49,.32);t.shirt==="tank"&&(d.geometry=bv,d.userData.tankSkin=new tt(i)),h&&t.feminine&&a("cloth",t.shirtColor,0,1.34,.16,.47,.12,.012),t.shirt==="dress"&&(a("cloth",Zr(l,1.25),0,1.47,.06,.3,.06,.2),a("cloth",Zr(l,1.18),0,1.25,.158,.05,.4,.012)),a("cloth",h?3877408:4864812,0,1.05,.006,.473,.049,.312),a("cloth",12891226,-.128,1.05,.16,.06,.05,.01),a("cylinder",i,0,1.5,0,.09,.13,.09),a("sphere",i,0,1.67,.015,.168,.197,.157),a("sphere",i,0,1.655,.165,.033,.034,.034),a("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let A of[-1,1])a("sphere",i,A*.155,1.66,.023,.032,.052,.025),a("cloth",2894120,A*.061,1.711,.152,.043,.012,.012),a("cloth",10985105,A*.061,1.692,.156,.032,.012,.012),a("cloth",3024931,A*.06,1.693,.163,.016,.012,.009);let f=t.hairColor;switch(t.hair){case"buzz":a("sphere",f,0,1.735,-.02,.172,.105,.158);break;case"short":a("sphere",f,0,1.77,-.031,.162,.112,.141);break;case"afro":a("sphere",f,0,1.8,-.035,.235,.19,.225);break;case"long":a("sphere",f,0,1.765,-.03,.175,.12,.16),a("cloth",f,0,1.6,-.115,.32,.34,.1);break;case"mohawk":a("sphere",Zr(i,.8),0,1.735,-.02,.171,.1,.157),a("cloth",f,0,1.83,-.02,.05,.11,.3);break;case"cap":a("sphere",t.capColor,0,1.79,.012,.181,.132,.164),a("cloth",Zr(t.capColor,1.2),0,1.77,.159,.27,.033,.17);break;default:break}let p=t.beard;if(p==="stubble"&&a("cloth",Zr(i,.68),0,1.585,.09,.3,.1,.13),p==="full"&&a("cloth",f,0,1.585,.085,.33,.13,.16),(p==="goatee"||p==="chevron")&&a("cloth",f,0,1.555,.15,.07,.075,.04),(p==="mustache"||p==="chevron"||p==="full")&&a("cloth",f,0,1.618,.164,.1,.022,.02),t.glasses){a("cloth",1118481,0,1.703,.163,.25,.05,.02);for(let A of[-1,1])a("cloth",1118481,A*.155,1.705,.08,.012,.018,.16)}if(t.earrings!=="none")for(let A of[-1,1])a("sphere",Yr[t.earrings],A*.162,1.625,.03,.016,.016,.016,!0);if(t.chain!=="none"){let A=a("box",Yr[t.chain],0,1.43,.06,.15,.15,.15,!0);A.geometry=Rv,A.rotation.x=Math.PI/2-.42,a("box",Yr[t.chain],0,1.32,.165,.04,.05,.015,!0)}let m=[],u=[],v=[],g=[];for(let A of[-1,1]){let S=new Et;S.position.set(A*.31,1.42,0),o.add(S);let x=t.shirt==="tee"||t.shirt==="dress";ft(S,"cloth",x?l:i,0,-.105,0,x?.173:.15,.226,x?.187:.16);let w=new Et;w.position.y=-.23,S.add(w),ft(w,"cloth",t.shirt==="dress"?l:i,0,-.101,0,.132,.22,.119),ft(w,"sphere",i,0,-.227,.012,.082,.084,.077),A===1&&t.watch!=="none"&&(ft(w,"cloth",2762018,0,-.17,0,.14,.04,.128),ft(w,"box",Yr[t.watch],0,-.17,.065,.05,.045,.012,!0)),A===-1&&t.ring!=="none"&&ft(w,"box",Yr[t.ring],.03,-.27,.05,.022,.022,.022,!0),v.push(w),m.push(S);let D=new Et;D.position.set(A*.128,.94,0),o.add(D),ft(D,"cloth",t.legColor,0,-.205,0,.21,.427,.228);let L=new Et;L.position.y=-.412,D.add(L);let I=t.legs==="shorts";if(ft(L,"cloth",I?i:t.legColor,0,-.18,0,I?.15:.182,.38,I?.16:.198),t.shoes==="flipflops"){ft(L,"cloth",i,0,-.405,.06,.12,.08,.24);for(let k of[-1,1])ft(L,"cloth",t.shoeColor,k*.033,-.366,.09,.023,.019,.1).rotation.y=-k*.55;ft(L,"cloth",t.shoeColor,0,-.455,.059,.15,.025,.29)}else{let k=t.shoes==="dress"?1906194:t.shoeColor;ft(L,"cloth",k,0,-.386,.062,.201,.143,.304),ft(L,"cloth",t.shoes==="dress"?1183243:Zr(k,.55),0,-.445,.059,.202,.037,.313)}g.push(L),u.push(D)}let _=new Et;_.position.set(0,-.227,.012),ft(_,"box",2635321,0,.012,-.002,.066,.078,.12,!0),ft(_,"box",2635321,0,-.105,.054,.074,.25,.079,!0),ft(_,"box",10263691,0,-.189,.095,.031,.028,.018);let T=new qt;T.position.set(0,-.235,.053),_.add(T),v[0].add(_);let C=new Et;C.position.set(0,-.227,.03),ft(C,"box",2828840,0,0,.05,.08,.12,.06,!0),ft(C,"box",2303786,0,-.2,.07,.07,.5,.11,!0),ft(C,"box",1842719,0,-.62,.08,.035,.42,.035,!0),ft(C,"box",5915954,0,.22,.06,.07,.32,.12),ft(C,"box",2303786,0,-.18,-.02,.05,.16,.12,!0);let b=new qt;b.position.set(0,-.84,.08),C.add(b),v[0].add(C);for(let A of[o,...m,...v,...u,...g,_,C]){let S=as(A);Ei(A,S.filter(x=>x.material.metalness===0)),Ei(A,S.filter(x=>x.material.metalness>0),Iv)}return _.visible=!1,C.visible=!1,n.add(s),{root:s,body:o,arms:m,legs:u,forearms:v,shins:g,pistol:_,rifle:C,muzzle:T,rifleMuzzle:b,shadow:r,stride:0,weapon:"pistol",look:t}}function sr(n,e,t,i,s,r=0,o=0,a=!1){n.root.scale.y=n.look.height,n.stride+=e*(4.6+t*1.65);let h=Math.sin(n.stride)*Math.min(.78,t*.15);n.body.position.set(0,Math.abs(h)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(h,0,0),n.legs[1].rotation.set(-h,0,0),n.shins[0].rotation.set(Math.max(0,h)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-h)*.51,0,0);for(let d of n.forearms)d.rotation.set(0,0,0);let l=s&&n.weapon==="rifle";if(n.arms[0].rotation.set(i?-Math.PI/2+o:-h*.76,0,0),n.arms[1].rotation.set(i?l?-Math.PI/2+o+.12:-1.16:h*.76,0,i&&l?.42:0),n.arms[0].rotation.z=a?-.25:0,(a||!(i&&l))&&(n.arms[1].rotation.z=a?.25:0),a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let d=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-d*1.11,n.forearms[0].rotation.x=-.62*(1-d),n.body.rotation.y=-d*.37}else n.body.rotation.y=0;if(n.pistol.visible=s&&n.weapon!=="rifle",n.rifle)if(n.rifle.visible=l,i&&l&&!a&&r<=0){let d=n.rifle;d.parent!==n.body&&n.body.add(d),d.position.set(.018,1.3,.19),d.rotation.set(-Math.PI/2+o,0,0);let f=Np(d,0,.01,0);Jr(n.arms[0],n.forearms[0],f,.23,.227,[-.65,-1,0]);let p=Np(d,0,-.14,-.032);Jr(n.arms[1],n.forearms[1],p,.23,.227,[.65,-1,0])}else n.rifle.parent!==n.forearms[0]&&(n.forearms[0].add(n.rifle),n.rifle.position.set(0,-.227,.03),n.rifle.rotation.set(0,0,0))}var Dp=new J(0,-1,0),Nu=new J,ir=new J,zu=new J,Pc=new J,Ic=new J,zp=new ln;function Np(n,e,t,i){return Pc.set(e,t,i).applyEuler(n.rotation).add(n.position)}function Jr(n,e,t,i,s,r){ir.subVectors(t,n.position);let o=Math.min(i+s-.001,Math.max(.015,ir.length()));ir.normalize();let a=(i*i-s*s+o*o)/(2*o);zu.set(r[0],r[1],r[2]).addScaledVector(ir,-zu.dot(ir)).normalize(),Nu.copy(n.position).addScaledVector(ir,a).addScaledVector(zu,Math.sqrt(Math.max(0,i*i-a*a))),Ic.subVectors(Nu,n.position).normalize(),n.quaternion.setFromUnitVectors(Dp,Ic),Ic.copy(n.position).addScaledVector(ir,o).sub(Nu).normalize(),e.quaternion.setFromUnitVectors(Dp,Ic.applyQuaternion(zp.copy(n.quaternion).invert()))}function Uu(n,e){n.root.scale.y=n.look.height,e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(Pc.set(0,.1,-.31))),n.root.quaternion.copy(e.body.getWorldQuaternion(zp)),n.shadow.visible=!1,n.pistol.visible=!1;let t=.63;n.body.rotation.set(t,0,0),n.body.position.set(0,.94*(1-Math.cos(t)),-.94*Math.sin(t)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(e.handlebar.localToWorld(Pc.set(s*.342,.44,-.09)));Jr(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(e.body.localToWorld(Pc.set(s*.245,.39,-.22)));Jr(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function xa(n,e,t){let i=Math.min(1,e/.22),s=Math.min(1,Math.max(0,(e-.12)/.5)),r=s*s*(3-2*s),o=e>.62?Math.sin(Math.min(1,(e-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(e-.62)/.25)):0,a=t*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(t*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let h=Math.sin(Math.min(1,e/.5)*Math.PI);return n.arms[0].rotation.set(-t*(.6*h+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-t*(.9*h+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*h-.2,0,0),n.forearms[1].rotation.set(-.3*h-.3,0,0),n.pistol.visible=!1,a}var Nc={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},ya=n=>Nc[n]??Nc[(n??"car").split(":")[0]]??Nc.car,Ds=n=>n.shape??n.kind;function Op(n,e){Nc[n]=e}function si(n,e){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0),n.repair?.(),Object.assign(n,e,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}var Up=new WeakMap,Kr=12,Fp=(n,e)=>n*1e4+e;function Pv(n,e,t){if(t.length<24)return t;let i=Up.get(t);if(!i){i=new Map;for(let s of t){let r=Math.floor((s.x-s.w/2-3.8)/Kr),o=Math.floor((s.x+s.w/2+3.8)/Kr),a=Math.floor((s.z-s.d/2-3.8)/Kr),h=Math.floor((s.z+s.d/2+3.8)/Kr);for(let l=r;l<=o;l++)for(let d=a;d<=h;d++){let f=Fp(l,d);i.has(f)||i.set(f,[]),i.get(f).push(s)}}Up.set(t,i)}return i.get(Fp(Math.floor(n/Kr),Math.floor(e/Kr)))??[]}function Ci(n,e,t,i,s="car"){let r=Math.sin(t),o=Math.cos(t),{offsets:a,radius:h}=ya(s),l=Pv(n,e,i);return a.every(d=>Rn(n+r*d,e+o*d,h,l))}function ls(n,e,t,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=e-n.x,a=t-n.z,{width:h,length:l}=ya(Ds(n)),d=Math.abs(o*r-a*s)-h,f=Math.abs(o*s+a*r)-l;return d<=0&&f<=0||Math.hypot(Math.max(0,d),Math.max(0,f))<i}function cs(n,e=0){let{width:t,length:i}=ya(n),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));return{width:t*s+i*r,length:i*s+t*r}}function Ns(n,e,t,i=n){return Ci(n.x,n.z,n.angle,e,Ds(n))&&!_a(i,n.x,n.z,n.angle,t)}function _a(n,e,t,i,s){let r=Math.sin(i),o=Math.cos(i),a=ya(Ds(n));for(let h of s){if(h===n||Math.abs(h.x-e)>4.5||Math.abs(h.z-t)>4.5)continue;let l=Math.sin(h.angle),d=Math.cos(h.angle),f=ya(Ds(h)),p=a.radius+f.radius,m=p,u=0,v=0;for(let g of a.offsets)for(let _ of f.offsets){let T=e+r*g-h.x-l*_,C=t+o*g-h.z-d*_,b=Math.hypot(T,C);if(b>=m)continue;m=b;let A=Math.hypot(e-h.x,t-h.z);u=b>.02?T/b:A>.02?(e-h.x)/A:r,v=b>.02?C/b:A>.02?(t-h.z)/A:o}if(m<p)return{other:h,nx:u,nz:v,mass:a.mass,otherMass:f.mass}}return null}function Fu(n,e){e<2.4||(n.integrity=Math.max(0,n.integrity-(e-2.4)*1.15),n.impact=Math.max(n.impact,e))}function Fn(n,e,t,i,s,r=null){let o=!r||r(n.x,n.z,n.angle,Ds(n)),a=(k,N,O)=>Ci(k,N,O,i,Ds(n))&&(!r||!o||r(k,N,O,Ds(n))),{brake:h}=t,l=n.kind==="bike",d=n.integrity>0?t.throttle:0;n.bumpedVehicle=null;let f=n.integrity>0?t.steer:0;n.impact=Math.max(0,n.impact-e*21),n.steer+=(f-n.steer)*(1-Math.exp(-e*10));let p=Math.sin(n.angle),m=Math.cos(n.angle),u=n.vx*p+n.vz*m,v=n.handling,g=(n.flat??[]).filter(Boolean).length,_=(v?.top??(l?31:27))*(1-g*.22),T=Math.sign(d)*u<-.6?28:d<0?l?4.7:10:(v?.accel??(l?19.7:15.4))*(1-g*.15);u=xt(u+d*T*e,l?-2.7:-8.4,_);let C=n.integrity<=0?3.8:h?l?6.7:5.5:Math.abs(d)<.07?1.58:.36;u*=Math.exp(-e*C);let b=h?l?5.2:2.15:(v?.grip??(l?13.5:8.1))*(1-g*.12),A=(n.vx*m-n.vz*p)*Math.exp(-e*b);n.vx=u*p+A*m,n.vz=u*m-A*p;let S=xt(1.9-Math.abs(u)/24,.75,1.65),x=g?((n.flat?.[0]||n.flat?.[2]?1:0)-(n.flat?.[1]||n.flat?.[3]?1:0))*.12:0,w=(n.steer+x)*e*S*Math.min(1,Math.abs(u)/2.1)*Math.sign(u),D=n.angle+w*(l?1.26:h?1.58:1);a(n.x,n.z,D)&&!_a(n,n.x,n.z,D,s)&&(n.angle=D);let L=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*e/.34)),I=e/L;for(let k=0;k<L;k++){let N=n.x+n.vx*I,O=n.z+n.vz*I,X=_a(n,N,O,n.angle,s);if(X){let{other:q,nx:ee,nz:ie,mass:K,otherMass:F}=X,B=n.vx*ee+n.vz*ie,V=B-(q.vx*ee+q.vz*ie);if(V<0&&B<0){let Q=-V*1.22/(1/K+1/F);n.vx+=ee*Q/K,n.vz+=ie*Q/K,q.vx-=ee*Q/F,q.vz-=ie*Q/F,V<-3.5&&(n.bumpedVehicle=q),Fu(n,-V),Fu(q,-V*.9);break}let ne=Math.hypot(n.x-q.x,n.z-q.z);if(Math.hypot(N-q.x,O-q.z)<=ne)break}if(a(N,O,n.angle))n.x=N,n.z=O;else{let q=a(N,n.z,n.angle)&&!_a(n,N,n.z,n.angle,s),ee=a(n.x,O,n.angle)&&!_a(n,n.x,O,n.angle,s),ie=Math.hypot(q?0:n.vx,ee?0:n.vz);q!==ee?(q&&(n.x=N),ee&&(n.z=O),n.vx*=q?.84:-.22,n.vz*=ee?.84:-.22):(n.vx*=-.21,n.vz*=-.21),Ci(N,O,n.angle,i,Ds(n))===!1&&Fu(n,ie||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function Xn(n,e){let t=0;return Ai.some(i=>Math.abs(n-i)<=13.55)&&Ai.some(i=>Math.abs(e-i)<=13.55)&&(t=.16),Math.abs(n-38)<6.05&&Math.abs(e+38)<5.04&&(t=.228),Math.abs(n-2)<9.5&&Math.abs(e-38)<11&&(t=.191),n>-10.91&&n<-3.49&&Math.abs(e-38)<9.77&&(t=.234),t}function On(n,e,t,i,s,r,o=.34){if(!Rn(e,t,o,i))return!1;for(let a of s)if(!(se(a,{x:e,z:t})>3.4||!ls(a,e,t,o))&&(!ls(a,n.x,n.z,o)||se(a,{x:e,z:t})<=se(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let h=o+.19;if(se(a,{x:e,z:t})<h&&se(a,{x:e,z:t})<=se(a,n))return!1}return!0}function zc(n,e,t,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(e,t)/.14)),h=n.x,l=n.z,d=e/a,f=t/a;for(let p=0;p<a;p++){let m=n.x+d,u=n.z+f;if(On(n,m,u,i,s,r,o)){n.x=m,n.z=u;continue}d&&On(n,m,n.z,i,s,r,o)&&(n.x=m),f&&On(n,n.x,u,i,s,r,o)&&(n.z=u)}return Math.hypot(n.x-h,n.z-l)}function Bp(n,e,t){if(!e)return ls(n,t.x,t.z,.28);let i=Math.max(1,Math.ceil(se(e,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=e.x+(n.x-e.x)*r,a=e.z+(n.z-e.z)*r,h={x:o,z:a,angle:n.angle,kind:n.kind,shape:n.shape};if(ls(h,t.x,t.z,.28))return!0}return!1}function kp(n,e,t){let i=e.x-n.x,s=e.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((t.x-n.x)*i+(t.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(t.x-n.x-i*o,t.z-n.z-s*o)<1.2}function Vp(n,e){let{id:t,x:i,z:s,w:r,d:o,angle:a,kind:h,label:l,color:d}=e,{box:f,solid:p,door:m,sign:u,glazing:v,support:g,volume:_}=n,T=h==="shop"||h==="armory",C=(ie,K,F=.228)=>({x:i+Math.cos(a)*ie+Math.sin(a)*K,z:s-Math.sin(a)*ie+Math.cos(a)*K,y:F}),b=Math.abs(Math.cos(a)),A=Math.abs(Math.sin(a)),S=(ie,K,F,B)=>({...C(ie,K),w:F*b+B*A,d:F*A+B*b}),x=o/2,w=-o/2,D=-r/2,L=r/2,I=(ie,K,F,B,V,ne,Q,ae=!1,W=0,ue="box")=>{let me=C(ie,K);f(me.x,F,me.z,B,V,ne,Q,ae,a,W,ue)},k=(ie,K,F,B,V,ne,Q,ae=!0)=>{I(ie,K,F,B,V,ne,Q,ae);let W=S(ie,K,B,ne);p.push({x:W.x,z:W.z,w:W.w,d:W.d,y0:F-V*.5,h:F+V*.5,buildingId:t})};return T?q():X();function N(ie,K,F,B,V){if(I(ie,x+.05,K,F+.22,B+.22,.1,5195585),I(ie,x+.085,K,F,B,.06,5073522),I(ie,x+.12,K,.05,B,.03,12168856),I(ie,x+.12,K+B*.18,F,.045,.03,12168856),I(ie,x+.13,K-B*.5-.08,F+.36,.09,.2,Ri(d)),V)for(let ne of[-1,1])I(ie+ne*(F*.5+.24),x+.09,K,.34,B+.06,.05,V)}function O(ie,K,F=[]){let B=Dv(t),V=(ae,W)=>{for(let ue=0;ue<F.length;ue+=2)if(ae+W>F[ue]&&ae-W<F[ue+1])return!1;return!0},Q=B()<.55?[0,$r(d,-.28),$r(d,.22),7301215][Math.floor(B()*4)%4]:0;Q&&I(0,x+.052,ie+.46+.36,r-.5,.72,.022,Q);for(let ae=0;ae<(B()<.7?2:1);ae++){let W=.9+B()*1.1,ue=.7+B()*.8,me=D+1.1+B()*(r-2.4),Ie=ie+.9+B()*Math.max(.2,K*.4);if(V(me,W/2)){I(me,x+.056,Ie,W,ue,.018,9262144);for(let $e=0;$e<Math.floor(ue/.2);$e++)I(me,x+.068,Ie-ue/2+.1+$e*.2,W,.022,.01,5978671);for(let $e=0;$e<5;$e++)I(me+(B()-.5)*W*.8,x+.07,Ie+(B()-.5)*ue*.7,.2,.09,.012,[10509895,8277050,11561552][$e%3]);B()<.6&&I(me+W*.45,x+.054,Ie+ue*.5,.5,.3,.014,$r(d,.12))}}for(let ae=0;ae<2+Math.floor(B()*3);ae++){let W=D+.8+B()*(r-1.6);if(!V(W,.2))continue;let ue=.9+B()*1.6;I(W,x+.054,ie+K-.5-ue/2,.12+B()*.18,ue,.012,$r(d,-.2))}if(B()<.65){let ae=D+1+B()*(r-2),W=ie+.6+B()*1.1;if(V(ae,.2))for(let ue=0;ue<6;ue++)I(ae+(ue%2?.06:-.05),x+.058,W+ue*.2,.025,.24,.012,3880240)}if(B()<.7){let ae=L-.5-B()*1.5;V(ae,.3)&&(I(ae,x+.09,ie+1.2,.38,.5,.09,9211786),I(ae,x+.15,ie+1.35,.14,.1,.04,15262416))}if(B()<.55){let ae=D+.55;I(ae,x+.09,ie+K*.5,.09,K,.09,8093308)}if(B()<.5&&K>3.4){let ae=D+r*(.25+B()*.5);V(ae,.5)&&(I(ae,x+.2,ie+2.55,.62,.4,.3,15329504),I(ae,x+.2,ie+2.55,.42,.28,.31,7830656))}return B}function X(){let ie=h==="apartments",K=ie?e.stories:1,F=ie?3.3:3.25,B=K*F,V=.228+B;k(0,0,.228+B/2,r,B,o,d),I(0,x+.03,.228+.23,r+.04,.46,.08,8484463);for(let W of[D+.12,L-.12])I(W,x+.04,.228+B/2,.26,B,.1,Ri(d));for(let W=1;W<K;W++)I(0,x+.04,.228+W*F,r+.04,.16,.1,Ri(d));let ne=ie?0:-r*.18;if(I(ne,x+.05,.228+1.17,1.42,2.42,.1,5195585),I(ne,x+.09,.228+1.1,1.1,2.2,.06,ie?4151902:7687224),I(ne+.38,x+.14,.228+1.08,.06,.16,.05,13810049),I(ne,x+.32,.228-.05,1.7,.14,.62,8484463),I(ne,x+.42,.228+2.62,1.9,.12,.86,Ri(d),!0),ie){I(ne,x+.12,.228+2.92,1.6,.32,.05,15324320);let W=C(ne,x+.15,.228+2.92);u(l,W.x,W.y,W.z,a,5589560,1.56,.3)}else{let W=C(ne+1.15,x+.13,1.848);u(l,W.x,W.y,W.z,a,5589560,.92,.22)}let Q=h==="house"?Lv(t,[6257514,8019014,6975364]):null;for(let W=0;W<K;W++){let ue=.228+W*F,me=ie?[D+r*.17,D+r*.38,L-r*.38,L-r*.17]:[r*.18,r*.38];for(let Ie of me)if(!(W===0&&Math.abs(Ie-ne)<1.7)&&(N(Ie,ue+1.72,ie?1.26:1.2,1.34,Q),ie&&W>0&&Ie===me[3])){I(Ie,x+.42,ue+.95,1.8,.12,.74,8484463,!0);for(let $e of[-.8,-.4,0,.4,.8])I(Ie+$e,x+.76,ue+1.38,.04,.78,.04,4802113);I(Ie,x+.76,ue+1.78,1.72,.05,.06,4802113)}for(let Ie of[D,L]){let $e=Ie===D?-1:1;for(let Ee of ie?[w+2.2,x-2.2]:[0]){let ot=C(Ie+$e*.05,Ee);f(ot.x,ue+1.72,ot.z,.1,1.56,1.32,5195585,!1,a);let Ke=C(Ie+$e*.085,Ee);f(Ke.x,ue+1.72,Ke.z,.06,1.34,1.1,5073522,!1,a)}}}let ae=O(.228+.5,Math.min(B,3.1),[ne-1.1,ne+1.1]);if(ie){I(0,0,V+.04,r+.12,.1,o+.12,7827562);for(let W of[D+.1,L-.1])I(W,0,V+.36,.2,.56,o,Ri(d),!0);for(let W of[w+.1,x-.1])I(0,W,V+.36,r,.56,.2,Ri(d),!0);I(L-2.4,w+2.1,V+.95,2,1.8,2,9077369,!0),I(L-2.4,w+2.1,V+1.93,2.1,.12,2.1,7301732),I(D+2.2,w+1.9,V+.75,1.4,1.2,1.4,10134691,!0),I(D+2.2,w+1.9,V+1.42,1.5,.12,1.5,7240057)}else{let W=Math.min(2,o*.2);I(0,0,V,r-.02,W,o-.02,d,!0,0,"prism");let ue=Gp[Math.floor(ae()*Gp.length)];I(0,0,V+.06,r+.5,W+.12,o+.7,ue,!0,0,"prism"),I(0,0,V+W+.12,r+.6,.09,.34,$r(ue,-.22),!1),I(0,x+.34,V+.04,r+.5,.09,.12,7238002),ae()<.5&&I(-r*.2+ae()*r*.3,x-.9,V+.34,.9,.07,1.4,$r(ue,.18));let me=ae()<.5?1:-1;I(me*(r*.3),w+o*.3,V+W*.55,.55+ae()*.25,1.6,.55,9402986,!0)}return{id:t,kind:h,label:l,units:[],doorIds:[],clerk:null,outside:C(ne,x+1.1,.16),entry:C(ne,x+.2),inside:C(ne,x+.2),approach:C(ne,x+2.4,.16),resident:null}}function q(){let K=4.0200000000000005,F=.228,B=e.doorAt??.1,V=Math.min(r*.25,3.72),ne=[B-r*.248,B+r*.248],Q=.22,ae=(Ge,Tt,te,j,Ft,mt,rt)=>k(Ge,Tt,Ft+mt/2,te,mt,j,rt),W=(Ge,Tt,te,j,Ft,mt)=>ae((Tt+te)/2,Ge,te-Tt,Q,j,Ft,mt),ue=(Ge,Tt,te,j,Ft,mt)=>ae(Ge,(Tt+te)/2,Q,te-Tt,j,Ft,mt),me=m(...ee(B-1.28/2,x),a,1.28,4285290,F,{buildingId:t,private:!1,unitId:null}),Ie=C(B,x),$e=C(B,x+1.05,.16),Ee=C(B,x-1.05),ot=C(B,x+2.45,.16);_.push({...S(0,0,r-.2,o-.2),floor:F,ceiling:F+K,buildingId:t}),k(0,0,F-.066,r-.03,.132,o-.03,11972762,!1),p[p.length-1].walkSurface=!0,g.push({...S(0,0,r-.03,o-.03),y:F,buildingId:t}),ue(D,w,x,F,K,d),ue(L,w,x,F,K,d),W(w,D,L,F,K,d);let Ke=D,je=[{center:B,width:1.28,door:!0},...ne.map(Ge=>({center:Ge,width:V,door:!1}))];je.sort((Ge,Tt)=>Ge.center-Tt.center);let Mt=.61,Ct=2.58,jt=Ct-Mt;for(let Ge of je){let Tt=Ge.center-Ge.width*.5,te=Ge.center+Ge.width*.5;if(W(x,Ke,Tt,F,K,d),I((Ke+Tt)/2,x+.04,F+.17,Tt-Ke,.34,.11,8484463),Ke=te,Ge.door)continue;ae(Ge.center,x,Ge.width,Q,F,Mt,d),ae(Ge.center,x,Ge.width,Q,F+Ct,K-Ct,d);let j=C(Ge.center,x+.068,F+(Ct+Mt)*.5);v(j.x,j.y,j.z,Ge.width,jt,a);let Ft=S(Ge.center,x,Ge.width,.2);p.push({x:Ft.x,z:Ft.z,w:Ft.w,d:Ft.d,y0:F+Mt,h:F+Ct,buildingId:t});for(let rt of[-1,0,1])I(Ge.center+rt*(Ge.width*.5-.042),x+.13,F+(Ct+Mt)*.5,.07,jt,.084,5989472);for(let rt of[Mt,Ct])I(Ge.center,x+.13,F+rt,Ge.width+.07,.081,.096,7831928);I(Ge.center,x+.17,F+Mt-.025,Ge.width+.2,.091,.25,10065280);let mt=x-.48;I(Ge.center,mt,F+.83,Ge.width-.24,.078,.45,11771260);for(let rt of[-.78,-.39,.39,.78])I(Ge.center+rt,mt,F+.95+(Math.abs(rt)<.5?.055:0),.23,.26,.26,e.awning??12089684)}W(x,Ke,L,F,K,d),I((Ke+L)/2,x+.04,F+.17,L-Ke,.34,.11,8484463),k(B,x,F+2.22+(K-2.22)/2,1.28,K-2.22,.21,d);for(let Ge of[D+.17,L-.17])I(Ge,x+.11,F+K/2,.22,K,.17,Ri(d));I(0,x+.07,F+4.16-.05,r+.25,.22,.13,Ri(d));for(let Ge of[D,L]){let Tt=Ge===D?-1:1;for(let te of[w+2.3,x-2.3])I(Ge+Tt*.13,te,F+1.7,.06,1.2,1.4,5195585),I(Ge+Tt*.16,te,F+1.7,.04,1.04,1.22,5073522),I(Ge+Tt*.2,te,F+1.03,.16,.09,1.56,Ri(d))}O(F+.3,K-.6,[B-1.6,B+1.6,ne[0]-V/2-.2,ne[0]+V/2+.2,ne[1]-V/2-.2,ne[1]+V/2+.2]);let wt=C(0,w+1.89,F);wt.angle=a;let cn=C(0,x+.18,F+4.16-.64);u(l,cn.x,cn.y,cn.z,a,3232851,Math.min(5.25,r-.72),.58),I(0,x+.6,F+4.16-1.37,r-.56,.19,1.22,e.awning??7820863,!0);for(let Ge=D+.68;Ge<L-.42;Ge+=.46)I(Ge,x+1.21,F+4.16-1.46,.225,.23,.062,14006413);k(.46,w+3,F+.55,4.4,1.1,.7,6968131),I(.46,w+3,F+1.15,4.58,.14,.79,12166795,!0),I(1.33,w+3.02,F+1.42,.48,.41,.36,4083022),I(1.33,w+3.22,F+1.58,.34,.19,.051,7968922);for(let Ge of[D+.46,L-.46])for(let Tt of[w+1.75,w+4.2]){k(Ge,Tt,F+.83,.61,1.66,1.79,7037271);for(let te=0;te<3;te++)for(let j of[-.55,-.17,.22,.57]){let Ft=[12490344,11953479,5997179][(Math.floor((j+.6)*2.3)+te)%3];I(Ge+(Ge<0?.37:-.37),Tt+j,F+.47+te*.43,.15,.25,.22,Ft)}}for(let Ge of[-.26,.26])I(Ge*r,0,F+4.16-.23,.32,.085,1.91,16245436);I(0,x-.8,F+.009,1.71,.016,.87,5863786);let Ht=F+4.16;k(0,0,Ht-.053,r+.17,.2,o+.17,8613472,!1);for(let Ge of[D,L])I(Ge,0,Ht+.28,.25,.59,o+.15,Ri(d),!0);for(let Ge of[w,x])I(0,Ge,Ht+.28,r+.2,.59,.25,Ri(d),!0);return I(L-1.5,w+1.45,Ht+.46,1.34,.64,1.21,8418922,!0),I(L-1.5,w+1.45,Ht+.82,1.14,.08,1.05,10261379),I(D+1.52,w+1.55,Ht+.39,.56,.57,.57,4873822,!0),{id:t,kind:h,label:l,entry:Ie,outside:$e,inside:Ee,approach:ot,resident:null,clerk:wt,doorIds:[me.id],units:[]}}function ee(ie,K){let F=C(ie,K,.228);return[F.x,F.z]}}function Lv(n,e){let t=0;for(let i of n)t=t*31+i.charCodeAt(0)>>>0;return e[t%e.length]}function Ri(n){let e=Math.min(255,(n>>16&255)+26),t=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return e*65536+t*256+i}function Dv(n){let e=0;for(let t of n)e=e*131+t.charCodeAt(0)>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function $r(n,e){let t=i=>Math.max(0,Math.min(255,Math.round(i*(1+e))));return t(n>>16&255)*65536+t(n>>8&255)*256+t(n&255)}var Gp=[10115652,9063482,8082502,11035978,7301734,6115656];var Hp=(n,e)=>[Math.floor((n-e*.5-1.1)/10),Math.floor((n+e*.5+1.1)/10)];function Uc(n){let e=new Map;for(let t of n){let[i,s]=Hp(t.x,t.w),[r,o]=Hp(t.z,t.d);for(let a=i;a<=s;a++)for(let h=r;h<=o;h++){let l=a+","+h;e.has(l)||e.set(l,[]),e.get(l).push(t)}}return(t,i)=>e.get(Math.floor(t/10)+","+Math.floor(i/10))??[]}var Wp=(n,e,t)=>Math.abs(n-t.x)<t.w*.5+.002&&Math.abs(e-t.z)<t.d*.5+.002,Nv=n=>n&&n.health!==0&&!n.seated;function Xp(n,e,t,i,s){let r=Uc(n),o=Uc(e),a=Uc(t),h=Uc(i.map(b=>b.closedSolid)),l=new Map(i.map(b=>[b.id,b])),d=b=>{let A=l.get(b.doorId);return!A.breached&&A.openAmount<1.06},f=n.filter(b=>(b.y0??0)<.95&&b.h>.28&&!b.stair);function p(b,A,S=0){let x=s(b,A);for(let w of o(b,A))w.y>x&&w.y<=S+.305&&Wp(b,A,w)&&(x=w.y);return x}function m(b,A,S=0){let x=D=>!D.stair&&(!D.walkSurface||D.h>S+.305)&&(D.y0??0)<S+1.72&&D.h>S+.13,w=r(b,A).filter(x);for(let D of h(b,A))x(D)&&d(D)&&w.push(D);return w}function u(b,A,S=0){let x=null;for(let w of a(b,A))w.floor<=S+.14&&w.ceiling>=S&&Wp(b,A,w)&&(!x||w.floor>x.floor)&&(x=w);return x}function v(b,A,S,x=.3,w=!1){let D=L=>A>=(L.y0??0)-x&&A<=L.h+x&&Math.abs(b-L.x)<L.w*.5+x&&Math.abs(S-L.z)<L.d*.5+x;for(let L of r(b,S))if(!(L.off||L.prop||L.walkSurface||L.stair)&&D(L))return!0;if(w){for(let L of h(b,S))if(D(L))return!0}return!1}function g(){return i.map(b=>b.closedSolid).filter(d)}function _(b){let A=l.get(b);return!A||!A.private||A.breached?!1:(A.breached=!0,A.hold=1/0,!0)}function T(b,A){for(let S of i){let x=S.breached||S.normallyOpen;S.hold=Math.max(0,S.hold-b);for(let D of A){if(x||!Nv(D))continue;let L=D.floorY??D.y??0;if(Math.abs(L-S.base)>.64)continue;let I=D.x-S.x,k=D.z-S.z,N=I*I+k*k;if(N>3.68)continue;let O=D.buildingId===S.buildingId&&(!S.unitId||D.unitId===S.unitId),X=I*S.normalX+k*S.normalZ<-.22;(!S.private||O||X&&N<2.43||S.opened&&N<1.92)&&(x=!0,S.hold=1.1)}let w=x||S.hold>0?1.48:0;S.openAmount+=(w-S.openAmount)*(1-Math.exp(-b*13)),S.opened=S.openAmount>=1.06,S.door.rotation.y=S.angle+S.openAmount}}function C(){for(let b of i)b.breached=!1,b.hold=0,b.opened=b.normallyOpen,b.openAmount=b.normallyOpen?1.48:0,b.door.rotation.y=b.angle+b.openAmount}return{vehicleSolids:f,floorAt:p,walkSolids:m,interiorAt:u,closedDoorSolids:g,breachDoor:_,updateDoors:T,resetDoors:C,viewBlocked:v}}var Ou=3751484,zv={box:new tn,cylinder:new Hn(1,1,1,10),pole:new Hn(.8,1,1,8),foliage:new ts(1,1)},jr={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function Qr(n){let e=n.map(([t,i,s,r,o,a,h,l,d=0,f=0])=>{let p=zv[t],m=p.index?p.toNonIndexed():p.clone(),u=new Pt().compose(new J(i,s,r),new ln().setFromEuler(new bi(d,f,0,"YXZ")),new J(o,a,h));m.applyMatrix4(u);let v=new tt(l),g=new Float32Array(m.attributes.position.count*3);for(let _=0;_<g.length;_+=3)g[_]=v.r,g[_+1]=v.g,g[_+2]=v.b;m.setAttribute("color",new sn(g,3));for(let _ of Object.keys(m.attributes))["position","normal","color"].includes(_)||m.deleteAttribute(_);return m});return Rc(e)}var qp={lamp:()=>Qr([["pole",0,2.25,0,.083,4.5,.083,Ou],["box",.35,4.36,0,.79,.075,.075,Ou],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>Qr([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,Ou])]),bin:()=>Qr([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>Qr([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>Qr([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>Qr([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,e)=>{let t=e*Math.PI*2/7;return["foliage",Math.sin(t)*.86,4.55,Math.cos(t)*.86,.42,.24,1.58,[3432266,4879699,7111766][e%3],0,t]})])};function Yp(n,e,t){let i=[],s={},r=new nn({vertexColors:!0,roughness:.84}),o=new Pt,a=new J,h=new ln,l=new J,d=new ln,f=new ln,p=new J,m=new J(0,1,0),u=!1;function v(S,x,w,D=0,L=1,I){let k=t(x,w),N={x,z:w,w:I?.w??jr[S].radius*2,d:I?.d??jr[S].radius*2,y0:k,h:k+(I?.h??1),prop:S};e.push(N),i.push({kind:S,x,z:w,y:k,rotation:D,scale:L,solid:N,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function g(S){d.setFromAxisAngle(m,S.rotation+S.spin),p.set(S.axisX,0,S.axisZ),f.setFromAxisAngle(p,S.tilt),h.multiplyQuaternions(f,d);let x=jr[S.kind].radius;a.set(S.x,S.y+Math.sin(S.tilt)*x+S.lift,S.z),l.setScalar(S.scale),o.compose(a,h,l),s[S.kind].setMatrixAt(S.index,o),s[S.kind].instanceMatrix.needsUpdate=!0}function _(){for(let S of Object.keys(qp)){let x=i.filter(D=>D.kind===S);if(!x.length)continue;let w=new Vn(qp[S](),r,x.length);w.castShadow=!0,w.receiveShadow=!0,s[S]=w,x.forEach((D,L)=>{D.index=L,g(D)}),w.computeBoundingSphere(),n.add(w)}}function T(S,x,w){let D=jr[S.kind];S.broken=!0,S.solid.off=!0,S.clock=0;let L=.55+Math.random()*.25;S.vx=x.vx*L,S.vz=x.vz*L;let I=Math.max(.01,Math.hypot(x.vx,x.vz));S.axisX=x.vz/I,S.axisZ=-x.vx/I,S.spinRate=(Math.random()-.5)*(S.kind==="bin"?7:2),S.lift=0,S.liftSpeed=S.kind==="bin"||S.kind==="bollard"?Math.min(3.2,w*.22):0;let k=1-D.mass;return x.vx*=k,x.vz*=k,D.damage&&(x.integrity=Math.max(0,x.integrity-D.damage*Math.min(1.6,w/D.speed))),x.impact=Math.max(x.impact,D.mass>.2?4.5:0),u=!0,{kind:S.kind,heavy:D.mass>.2,x:S.x,z:S.z}}function C(S,x,w){let D=[];for(let I of x){let k=Math.hypot(I.vx,I.vz);if(k<.6)continue;let N=k*S*2+.2;for(let O of i){if(O.broken||Math.abs(O.x-I.x)>3.6||Math.abs(O.z-I.z)>3.6)continue;let X={x:I.x+I.vx*S,z:I.z+I.vz*S,angle:I.angle,kind:I.kind};ls(X,O.x,O.z,jr[O.kind].radius+N)&&k>=jr[O.kind].speed&&D.push(T(O,I,k))}}for(let I of i)if(I.broken)if(I.clock+=S,I.clock<2.5){let k=Math.exp(-S*(I.tilt>1.2?6:2.2)),N=I.x+I.vx*S,O=I.z+I.vz*S;I.x=N,I.z=O,I.vx*=k,I.vz*=k,I.spin+=(I.spinRate??0)*S*k,I.tilt=Math.min(Math.PI/2,I.tilt+S*(1.1+I.tilt*3.2)),I.liftSpeed&&(I.lift=Math.max(0,I.lift+I.liftSpeed*S),I.liftSpeed-=9.8*S,I.lift===0&&I.liftSpeed<0&&(I.liftSpeed=0)),g(I)}else I.clock>50&&Math.hypot(w.x-I.solid.x,w.z-I.solid.z)>38&&x.every(k=>Math.hypot(k.x-I.solid.x,k.z-I.solid.z)>3)&&b(I);let L=u;return u=!1,{events:D,shadow:L}}function b(S){Object.assign(S,{broken:!1,x:S.solid.x,z:S.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),S.solid.off=!1,g(S),u=!0}function A(){for(let S of i)S.broken&&b(S)}return{add:v,finalize:_,update:C,reset:A,items:i}}var eo=20;function Zp(n,e,t){let r=((n+e)%eo+eo)%eo-(t==="z"?0:10);return r>=0&&r<7?"green":r>=7&&r<9?"yellow":"red"}var Uv={red:[new tt(1,.12,.08),new tt(.2,.05,.05)],yellow:[new tt(1,.72,.1),new tt(.2,.16,.05)],green:[new tt(.2,1,.45),new tt(.05,.17,.08)]};function Jp(n,e){let t=[];for(let u of rn)for(let v of rn)t.push({id:u+","+v,x:u,z:v,offset:((u*7+v*3)%eo+eo)%eo});let i=[[-6.1,-6.1,Math.PI,"z"],[6.1,6.1,0,"z"],[-6.1,6.1,-Math.PI/2,"x"],[6.1,-6.1,Math.PI/2,"x"]],s=t.length*i.length,r=new Vn(new Hn(.07,.08,3.3,8),new nn({color:3093555,roughness:.6}),s),o=new Vn(new tn(.34,.95,.26),new nn({color:1909024,roughness:.7}),s),a=new Vn(new Hn(.105,.105,.06,12),new Vt({color:16777215}),s*3),h=new qt,l=[],d=0;for(let u of t)for(let[v,g,_,T]of i){let C=u.x+v,b=u.z+g;h.position.set(C,1.65+.16,b),h.rotation.set(0,_,0),h.scale.set(1,1,1),h.updateMatrix(),r.setMatrixAt(d,h.matrix),h.position.set(C,3.25+.16,b),h.updateMatrix(),o.setMatrixAt(d,h.matrix),["red","yellow","green"].forEach((A,S)=>{h.position.set(C+Math.sin(_)*.14,3.25+.16+.29-S*.29,b+Math.cos(_)*.14),h.rotation.set(Math.PI/2,_,0,"YXZ"),h.updateMatrix(),a.setMatrixAt(d*3+S,h.matrix),l.push({junction:u,axis:T,color:A,state:""})}),e.push({x:C,z:b,w:.2,d:.2,h:3.5,signal:!0}),d++}r.castShadow=o.castShadow=!0,n.add(r,o,a);let f=new Map(t.map(u=>[u.id,u])),p=0;function m(u){p+=u;let v=!1;l.forEach((g,_)=>{let C=Zp(p,g.junction.offset,g.axis)===g.color,b=C?"on":"off";g.state!==b&&(g.state=b,a.setColorAt(_,Uv[g.color][C?0:1]),v=!0)}),v&&a.instanceColor&&(a.instanceColor.needsUpdate=!0)}return m(0),{update:m,state(u,v){let g=f.get(u);return g?Zp(p,g.offset,v):"green"},reset(){p=0,m(0)}}}var Fv=16769190,Bu=6445906,Ov={sala:{x:[95,98],z:[41,45]},quarto:{x:[98,101],z:[41,45]},cozinha:{x:[98,101],z:[37,41]},banheiro:{x:[95,98],z:[37,41]}};function Kp(n,e){let t=new Et;n.add(t);let i=(D,L,I,k,N,O,X,q,ee=!1)=>{let ie=ft(t,D,L,I,k,N,O,X,q,ee);return ie.castShadow=!1,ie},s=(D,L,I,k,N,O,X)=>{let q=new St(Bv,new Vt({color:D}));return q.scale.set(N,O,X),q.position.set(L,I,k),t.add(q),q},r=(D,L,I,k,N)=>e.push({x:D,z:L,w:I,d:k,y0:.04,h:N,prop:!0}),o=.046;i("box",11188667,96.55,o+.004,39,2.9,.012,3.8),i("box",14208951,99.5,o+.004,39,2.9,.012,3.8),i("box",10243388,96.7,o+.004,43,2.4,.012,1.7),i("box",4157307,99.45,o+.004,43.5,1.5,.012,1.8),i("box",1908514,97.9,1.28,44.2,.07,.62,1.1);let a=s(1382685,97.855,1.28,44.2,.02,.52,.98);i("box",7297090,96.95,.2,42.2,.7,.4,.9),r(96.95,42.2,.7,.9,.4),i("box",15327175,95.13,1.7,41.3,.03,.34,.26),i("box",8010283,95.13,1.72,41.3,.032,.08,.26),i("box",8084031,100.78,1.55,39.6,.28,.07,1.5);for(let D of[39.1,39.5,39.95])i("cylinder",9278099,100.76,1.7,D,.07,.12,.07);i("box",7297090,99.2,.38,40.15,.95,.05,.7);for(let[D,L]of[[98.8,39.8],[99.6,39.8],[98.8,40.6],[99.6,40.6]])i("box",5720122,D,.28,L,.07,.5,.07);i("cylinder",12098413,99.6,.43,41.05,.2,.04,.2),r(99.2,40.15,.95,.7,.6);let h=s(3812388,99.1,.915,38.16,.34,.012,.34);i("box",12570064,95.65,.09,37.7,1,.09,1),i("box",9284019,95.15,1.1,37.7,.03,2,1),i("box",10404040,95.65,1.1,38.22,1,2,.03),i("cylinder",13620180,95.65,2.1,37.2,.06,.28,.06,!0),i("box",15855592,97.15,.24,37.62,.38,.4,.62),i("box",15855592,97.15,.62,37.28,.4,.3,.14),r(97.15,37.62,.4,.62,.5),i("box",13623524,96.4,1.55,37.13,.78,.62,.03,!0),i("box",15327695,96.4,1,37.13,.5,.1,.04),i("box",7297090,100.55,.26,44.4,.42,.5,.42),r(100.55,44.4,.42,.42,.5),i("box",3814703,100.55,.55,44.4,.1,.12,.1);let l=s(Bu,100.55,.72,44.4,.26,.2,.26);i("box",8219224,98.7,1,44.85,.06,1.9,.02),i("box",15327175,96.2,1.65,44.86,.5,.36,.02),i("box",10125160,96.2,1.65,44.87,.42,.28,.02);let d={};for(let[D,L,I]of[["sala",96.55,42.9],["cozinha",99.3,39.2],["banheiro",96.6,39.2]])i("cylinder",4867905,L,2.66,I,.02,.04,.02),d[D]={shade:s(Bu,L,2.58,I,.36,.07,.36),x:L,y:2.5,z:I,on:!1};d.quarto={shade:l,x:100.55,y:.9,z:44.4,on:!1};for(let[D,L,I,k,N]of[[95.12,1.3,42.4,.02,.1],[98.5,1.3,37.12,.1,.02],[97.4,1.3,37.12,.1,.02]])i("box",15131091,D,L,I,k,.16,N);let f=[];function p(D,L,I,k,N,O,X){let q=s(10933478,D,L,I,k==="x"?.02:N,O,k==="x"?N:.02),ee=k==="x"?D<98?.06:-.06:0;i("box",5195585,D,L,I,k==="x"?.05:N+.14,O+.14,k==="x"?N+.14:.05);let ie=[-1,1].map(()=>i("box",X,D+ee*1.2,L-.02,I,k==="x"?.05:N*.5,O+.3,k==="x"?N*.5:.05));return{pane:q,panels:ie,span:N,axis:k,base:k==="x"?I:D,open:1,goal:1,anchor:{x:D+ee*1.2,z:I}}}f.push(p(95.17,1.55,43.4,"x",1.1,1.1,11882815)),f.push(p(100.84,1.55,42.1,"x",1,1.1,5209996));let m=p(100.84,1.5,39,"x",.9,.9,13678455);f.push(m);let u=!1,v=0,g={fridge:0,stove:0,shower:0},_=new Ko(16766880,0,9,1.5);_.castShadow=!1,t.add(_);let T=(D,L)=>{d[D].on=L,d[D].shade.material.color.setHex(L?Fv:Bu)},C=D=>D,b=[{id:"sala-light",x:95.45,z:42.4,reach:1.2,label:()=>d.sala.on?"Apagar a luz da sala":"Acender a luz da sala",use:()=>(T("sala",!d.sala.on),C(d.sala.on?"Luz da sala acesa.":"Luz da sala apagada."))},{id:"cozinha-light",x:98.5,z:37.55,reach:1.15,label:()=>d.cozinha.on?"Apagar a luz da cozinha":"Acender a luz da cozinha",use:()=>(T("cozinha",!d.cozinha.on),C(d.cozinha.on?"Luz da cozinha acesa.":"Luz da cozinha apagada."))},{id:"banheiro-light",x:97.4,z:37.55,reach:1,label:()=>d.banheiro.on?"Apagar a luz do banheiro":"Acender a luz do banheiro",use:()=>(T("banheiro",!d.banheiro.on),C(d.banheiro.on?"Luz do banheiro acesa.":"Luz do banheiro apagada."))},{id:"abajur",x:100.3,z:44,reach:1.2,label:()=>d.quarto.on?"Apagar o abajur":"Acender o abajur",use:()=>(T("quarto",!d.quarto.on),C(d.quarto.on?"Abajur aceso.":"Abajur apagado."))},{id:"tv",x:96.9,z:44,reach:1.7,label:()=>u?"Desligar a TV":"Ligar a TV",use:()=>(u=!u,a.material.color.setHex(u?8373493:1382685),C(u?"A TV est\xE1 passando um jogo antigo.":"TV desligada."))},{id:"cortina-sala",x:95.7,z:43.4,reach:1.3,label:()=>f[0].goal?"Fechar a cortina da sala":"Abrir a cortina da sala",use:()=>(f[0].goal=f[0].goal?0:1,C(f[0].goal?"Cortina aberta.":"Cortina fechada."))},{id:"cortina-quarto",x:100.3,z:42.3,reach:1.3,label:()=>f[1].goal?"Fechar a cortina do quarto":"Abrir a cortina do quarto",use:()=>(f[1].goal=f[1].goal?0:1,C(f[1].goal?"Cortina aberta.":"Cortina fechada."))},{id:"geladeira",x:100,z:38.9,reach:1.1,label:()=>g.fridge>0?"Geladeira (vazia por agora)":"Pegar algo na geladeira",use:D=>g.fridge>0?C("A geladeira est\xE1 quase vazia."):(g.fridge=90,D.heal(20),C("Voc\xEA comeu um prato de arroz com ovo. +20 de vida."))},{id:"fogao",x:99.1,z:38.9,reach:1,label:()=>g.stove>0?"Fog\xE3o (ainda quente)":"Esquentar uma panela",use:D=>g.stove>0?C("A panela ainda est\xE1 quente."):(g.stove=70,h.material.color.setHex(16742965),D.heal(12),C("Caf\xE9 coado e p\xE3o na chapa. +12 de vida."))},{id:"chuveiro",x:95.95,z:38.55,reach:1.1,label:()=>g.shower>0?"Chuveiro":"Tomar banho",use:D=>g.shower>0?C("Voc\xEA acabou de tomar banho."):(g.shower=120,D.heal(10),C("Banho frio e r\xE1pido. +10 de vida."))},{id:"vaso",x:97.15,z:38.45,reach:1,label:()=>"Dar descarga",use:D=>(D.flush(),C("Descarga."))},{id:"pia",x:96.4,z:38.15,reach:1.2,label:()=>"Lavar o rosto",use:()=>C("Voc\xEA lavou o rosto e se olhou no espelho.")}];function A(D){let L=null,I=1/0;for(let k of b){let N=Math.hypot(D.x-k.x,D.z-k.z);N<k.reach&&N<I&&(L=k,I=N)}return L}function S(D,L){for(let[I,{x:[k,N],z:[O,X]}]of Object.entries(Ov))if(D>=k&&D<N&&L>=O&&L<X)return I;return null}function x(D,L,I){g.fridge=Math.max(0,g.fridge-D),g.stove=Math.max(0,g.stove-D),g.shower=Math.max(0,g.shower-D),g.stove<=0&&h.material.color.setHex(3812388),u&&(v+=D,a.material.color.setHSL(.55+Math.sin(v*3.1)*.04,.55,.58+Math.sin(v*17)*.06));for(let O of f){O.open+=(O.goal-O.open)*Math.min(1,D*4);let[X,q]=O.panels,ee=O.span*.5,ie=Math.max(.08,ee*(1-O.open*.78)),K=O.base;O.axis==="x"&&(X.scale.z=q.scale.z=ie,X.position.z=K-ee+ie/2,q.position.z=K+ee-ie/2),O.pane.visible=O.open>.45}let k=null,N=1/0;if(I)for(let O of Object.values(d)){if(!O.on)continue;let X=Math.hypot(L.x-O.x,L.z-O.z);X<N&&(N=X,k=O)}k&&_.position.set(k.x,k.y,k.z),_.intensity+=((k?18:0)-_.intensity)*Math.min(1,D*6)}function w(){for(let D of Object.keys(d))T(D,D==="sala");u=!1,a.material.color.setHex(1382685);for(let D of f)D.goal=D.open=1;g.fridge=g.stove=g.shower=0}return w(),{things:b,nearest:A,update:x,reset:w,roomOf:S,lights:d,curtains:f,get tvOn(){return u}}}var Bv=new tn(1,1,1);var Fc=473021;function Pn(){return Fc=Math.imul(1664525,Fc)+1013904223>>>0,Fc/4294967296}var rr=n=>n[Math.floor(Pn()*n.length)];function $p(n){Fc=473021,n.background=new tt(15316107),n.fog=new No(15316107,.0068),n.add(new Yo(15266035,7890017,2.3));let e=new jo(16763540,3);e.position.set(-45,48,-32),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),e.shadow.bias=-35e-5,e.shadow.normalBias=.12,e.shadow.mapSize.set(2048,2048),e.shadow.autoUpdate=!1,n.add(e);let t=new St(new ws(330,32,16),new Zn({side:Cn,depthWrite:!1,uniforms:{sun:{value:new J(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));t.frustumCulled=!1,t.renderOrder=-100,n.add(t);let i=[],s=[],r=[],o=[],a={},h={box:new tn,foliage:new ts(1,1),pole:new Hn(.8,1,1,8),hill:new ws(1,14,9),prism:kv()},l=new qt;function d(F,B,V,ne,Q,ae,W,ue,me,Ie=0,$e=0){let Ee=B===0&&ne===0?"center":Math.round(B/31)+","+Math.round(ne/31),ot=F+":"+!!me+":"+Ee,Ke=a[ot]??={shape:F,shadow:!!me,items:[]};l.position.set(B,V,ne),l.scale.set(Q,ae,W),l.rotation.set($e,Ie,0,"YXZ"),l.updateMatrix(),Ke.items.push({matrix:l.matrix.clone(),color:new tt(ue)})}function f(F,B,V,ne,Q,ae,W,ue=!1,me=0,Ie=0,$e="box"){d($e,F,B,V,ne,Q,ae,W,ue,me,Ie)}function p(F,B,V,ne,Q,ae,W){f(F,B,V,ne,Q,ae,W,!0),i.push({x:F,z:V,w:ne,d:ae,y0:B-Q/2,h:B+Q/2})}let m=Yp(n,i,Xn);function u(F,B,V=!1){m.add(V?"palm":"tree",F,B,Pn()*6.28,.82+Pn()*.36,{w:.45,d:.45,h:3.6})}function v(F,B,V,ne,Q,ae=1784375,W=4.2,ue=.65){let me=document.createElement("canvas");me.width=512,me.height=115;let Ie=me.getContext("2d");Ie.fillStyle="#e9d4a0",Ie.fillRect(0,0,512,115),Ie.strokeStyle="#645a47",Ie.lineWidth=6,Ie.strokeRect(7,7,498,101),Ie.font="900 50px system-ui",Ie.textAlign="center",Ie.textBaseline="middle",Ie.fillStyle="#"+ae.toString(16).padStart(6,"0"),Ie.fillText(F,256,57,470);let $e=new Ys(me);$e.colorSpace=gn;let Ee=new St(new Yn(W,ue),new Vt({map:$e}));Ee.position.set(B,V,ne),Ee.rotation.y=Q,n.add(Ee)}let g=new Et;n.add(g);let _=[],T=new Yn,C=new nn({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:zn});function b(F,B,V,ne,Q,ae){let W=new St(T,C);W.position.set(F,B,V),W.scale.set(ne,Q,1),W.rotation.y=ae,n.add(W)}let A={box:f,solid:i,door:S,sign:v,glazing:b,support:s,volume:r};function S(F,B,V,ne,Q,ae=.228,W={}){let ue=new Et,me=W.id??"door-"+_.length;ue.position.set(F,ae,B);let Ie=ft(ue,"box",Q,ne*.5,1.088,0,ne-.045,2.147,.074);Ie.castShadow=!1;let $e=ft(ue,"box",10191979,ne*.5,1.47,-.04,ne*.64,.56,.013);$e.castShadow=!1;for(let Ct of[-1,1])ft(ue,"box",10191195,ne-.14,.99,Ct*.046,.11,.13,.035).castShadow=!1,ft(ue,"box",12691318,ne-.174,1.011,Ct*.073,.132,.042,.037).castShadow=!1;let Ee=F+Math.cos(V)*ne*.5,ot=B-Math.sin(V)*ne*.5,Ke=W.normallyOpen?1.48:0;ue.rotation.y=V+Ke,n.add(ue);let je={x:Ee,z:ot,w:Math.abs(Math.cos(V))*ne+.083,d:Math.abs(Math.sin(V))*ne+.083,y0:ae,h:ae+2.155,doorId:me,buildingId:W.buildingId??null},Mt={door:ue,id:me,x:Ee,z:ot,base:ae,angle:V,openAmount:Ke,opened:!!W.normallyOpen,breached:!1,private:!!W.private,normallyOpen:!!W.normallyOpen,hold:0,buildingId:W.buildingId??null,unitId:W.unitId??null,normalX:Math.sin(V),normalZ:Math.cos(V),handle:{x:F+Math.cos(V)*(ne-.17),y:ae+1.008,z:B-Math.sin(V)*(ne-.17)},closedSolid:je};_.push(Mt);for(let Ct of[0,ne])f(F+Math.cos(V)*Ct,ae+1.09,B-Math.sin(V)*Ct,.105,2.18,.178,6640456,!1,V);return f(Ee,ae+2.185,ot,ne+.12,.11,.178,6640456,!1,V),Mt}function x(){let{x:F,z:B}=In,V=13216391;p(F,2.08,B,12,3.84,10,V),f(F,.39,B+5.03,12.04,.46,.08,8484463),f(F,4,B,12.06,1.7,9.98,V,!0,0,0,"prism"),f(F,4.06,B,12,1.84,10.7,9393216,!0,0,0,"prism"),f(F+3.6,4.9,B-2.2,.55,1.9,.55,9402986,!0),f(F,1.38,B+5.05,1.42,2.42,.1,5195585),f(F,1.31,B+5.09,1.1,2.2,.06,6903110),f(F,.18,B+5.35,1.7,.14,.62,8484463),f(F,2.85,B+5.45,1.9,.12,.86,14270112,!0);for(let ne of[-3.6,3.6]){f(F+ne,2.03,B+5.04,2.08,1.43,.1,5195585),f(F+ne,2.03,B+5.07,1.86,1.21,.06,5073522),f(F+ne,1.22,B+5.16,2.2,.09,.2,14270112);for(let Q of[-1,1])f(F+ne+Q*1.17,2.03,B+5.07,.34,1.27,.05,6257514)}v("CASA 38",F+1.6,1.62,B+5.13,0,4868146,.92,.22),p(F+9.6,1.6,B-.4,6,3.2,8,12558975),f(F+9.6,3.27,B-.4,6.3,.16,8.3,8280646,!0),f(F+9.6,1.32,B+3.62,4.4,2.5,.08,9278614);for(let ne=.3;ne<2.6;ne+=.28)f(F+9.6,ne,B+3.67,4.3,.025,.02,7304824);f(F+9.6,.173,B+8.6,4.8,.03,9.8,10262154),v("GARAGEM",F+9.6,2.85,B+3.68,0,3881523,1.4,.26)}function w(F,B){for(let V of[-1,1]){f(F+V*13.34,.168,B,.26,.012,22.4,13485233),f(F+V*13.5,.082,B,.04,.164,22.4,10261637),f(F,.168,B+V*13.34,22.4,.012,.26,13485233),f(F,.082,B+V*13.5,22.4,.164,.04,10261637);for(let ne of[-12.6,12.6]){for(let Q=0;Q<3;Q++){let ae=[.115,.07,.03][Q],W=13.62+Q*.36;f(F+V*W,ae/2,B+ne,.36,ae,1.7,11840408),f(F+ne,ae/2,B+V*W,1.7,ae,.36,11840408)}f(F+V*13.1,.168,B+ne,.5,.012,1.7,14267978),f(F+ne,.168,B+V*13.1,1.7,.012,.5,14267978),f(F+V*12.4,.169,B+ne*.99,1.9,.011,1.9,12366235)}}}function D(){let F=Ps.z;f(2,.169,F,19,.045,22,6908773),p(-7.18,2.03,F,7.35,3.68,19.56,8886169),f(-7.18,3.98,F,7.62,.23,19.8,5406866),f(-3.46,1.35,F,.12,2.32,1.7,4413028),f(-2.5,3.33,F,7.1,.25,19.5,5401719,!0),p(-1.5,1.42,F-9.72,5.4,2.54,.35,8229008),p(-1.5,1.42,F+9.72,5.4,2.54,.35,8229008);for(let V of[-9.5,9.5])p(1.04,1.65,F+V,.28,3,.31,8689042);f(1.1,2.88,F,.25,.42,19.54,5994626),v("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,F,Math.PI/2,2704468,7.2,.63);for(let V of[-8.2,-3.95,.3,4.55,8.8])f(8.15,.208,F+V,5.3,.016,.1,14537646);for(let V of[-6.1,-1.85,2.4])f(5.5,.208,F+V,.1,.016,3.25,14537646);for(let V of[-6.8,-3.4,3.4,6.8])f(-3.46,1.87,F+V,.08,1.4,2.25,5195585),f(-3.43,1.87,F+V,.05,1.18,2.05,3626589);f(-3.52,.21,F+3.1,.64,.08,2.45,6446161)}f(0,-.3,0,720,.1,720,8880242),f(0,-.18,0,132,.34,132,4605770);for(let F=0;F<1250;F++){let B=Pn()*130-65,V=Pn()*130-65;f(B,.001,V,.04+Pn()*.3,.007,.04+Pn()*.3,rr([5460823,4934733,4473414,5855058]),!1,Pn()*6)}for(let F of rn)for(let B of Ai){for(let V=-10;V<=10;V+=4)f(F,.014,B+V,.12,.015,1.82,14132838);for(let V of[-12.6,12.6])for(let ne=-4.5;ne<=4.5;ne+=.9)f(F+ne,.015,B+V,.45,.016,1.44,13156273)}for(let F of rn)for(let B of Ai){for(let V=-10;V<=10;V+=4)f(B+V,.014,F,1.82,.015,.12,14132838);for(let V of[-12.6,12.6])for(let ne=-4.5;ne<=4.5;ne+=.9)f(B+V,.015,F+ne,1.44,.016,.45,13156273)}for(let F of Ai)for(let B of Ai){f(F,.067,B,27.1,.16,27.1,13022103),f(F,.125,B,26.7,.07,26.7,10721158);for(let V of[-12.25,12.25])for(let ne=-12;ne<=12;ne+=2.1)f(F+V,.164,B+ne,2.32,.008,.023,12956566),f(F+ne,.164,B+V,.023,.008,2.32,12956566);if(w(F,B),F===Ps.x-2&&B===Ps.z)D();else if(F===In.x&&B===In.z)x();else if(F===0&&B===-38){for(let V of[-6,6]){f(F+V,.185,B,8.2,.08,19,7438938);for(let ne of[-7,0,7])u(F+V,B+ne,!0)}for(let V=-8;V<=8;V+=4)f(F,.177,B+V,3.1,.033,3.2,13218964);p(F,1.04,B-9.89,4.42,1.77,.18,9271651),v("PRA\xC7A DA BRASA",F,1.6,B-10,Math.PI)}else for(let V of[-1,1]){let ne=F===0&&B===0&&V===1,Q=o.filter(je=>je.id.startsWith("lot-")||je.id==="armory").length,ae=Q+10,W=ne?"armory":Q%5===1||Q%5===3?"shop":Q%5===0?"house":"apartments",ue=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],me=ne?"armory":ae===13?"barber":ae===18?"clothes":ae===21?"black":ae===16?"workshop":W==="shop"?"store":null,$e={barber:"BARBEARIA DO Z\xC9",clothes:"MODA BRASA",black:"PENHORES 24H",workshop:"OFICINA DO BIGODE"}[me]??(W==="shop"?ue[Math.floor(Q/2)%ue.length]:W==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(Q/2)%6]:"CASA "+ae),Ee=rr([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),ot=Vp(A,{id:ne?"armory":"lot-"+ae,kind:W,label:ne?"LOJA DE ARMAS":$e,x:F+V*(ne?5.7:6.25),z:B+(ne?-5.45:0),angle:V*Math.PI/2,w:ne?11.35:(W==="house"?13.7:15.3)+Pn()*.57,d:ne?9.36:9.38+Pn()*.25,color:Ee,upperColor:rr([12163192,10394757,12426376,11971991]),awning:rr([7821376,6190959,10446933]),fabrics:rr([7373431,8152675,9534300]),stories:Q%3===0?3:2,doorAt:ne?0:void 0,open:W==="house"&&Q%3!==0});ot.service=me,o.push(ot);let Ke=ne?4.32:B+9.83;f(F+V*6.8,.168,Ke,8.3,.017,2.51,10919820);for(let je=-3.5;je<=3.5;je+=.7)f(F+V*6.8+je,.18,Ke,.022,.012,2.5,12169372)}for(let V of[-1,1]){let ne=F+V*12.85,Q=B-V*9.85;m.add("lamp",ne,Q,V>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),m.add("bench",F+V*9,B-V*12.5,V>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let ae=F+V*10.1;m.add("bin",ae,B-V*12.55,0,1,{w:.5,d:.5,h:.78}),m.add("bollard",ae+.72,B-V*12.58,0,1,{w:.14,d:.14,h:.46}),F===In.x&&B===In.z&&V===1||u(F+V*9.4,B+V*12.6)}}for(let F of[-1,1])p(63.6,1.85,F*2.5,.15,3.7,.15,7362375);f(63.6,3.48,0,.16,.64,5.15,7362375),v("VILA DAS LAJES",63.51,3.48,0,-Math.PI/2,3232851,3.55,.56),f(84,-.055,0,44,.1,Wn.halfDepth*2,10063229);for(let F of[63.45,71,78,85,93,101])f(F,-.003,0,2.4,.012,94,10393225);for(let F of[-30,-20,-10,0,10,20,30,40])f(84,-.001,F,43.8,.014,3.2,11115405);for(let[F,B]of[67.5,74.5,81,89,97,104].entries())for(let[V,ne]of[-44,-35,-25,-15,-5,5,15,25,35,44].entries()){if(F>=4&&ne>=35||ne===-5&&F<3)continue;let Q=2.9+(F+V)%3*.85,ae=[11890768,10652789,11363656,10063490][(V+F)%4];if(p(B,Q/2,ne,4.1,Q,5.2,ae),f(B,Q+.08,ne,4.3,.16,5.4,8683127),f(B-2.06,1.07,ne-.8,.05,2.14,.88,5786688),f(B-2.07,1.64,ne+1.15,.055,.88,1.2,5464677),(V+F)%2===0){f(B-2.32,2.28,ne-.8,.56,.09,1.36,8162439);for(let ue of[-.42,0,.42])f(B-2.11,1.64,ne+1.15+ue,.04,.88,.04,2702400)}V%2===0&&f(B,Q+.55,ne+1,1.3,.92,1.3,5334392);let W=(V*131+F*57+V*F*13)%97;if(W%3===0){f(B-2.07,1.95,ne+1.9,.04,1,1.3,9262144);for(let ue=0;ue<5;ue++)f(B-2.09,1.5+ue*.2,ne+1.9,.02,.022,1.3,5978671)}if(W%4===1&&f(B-2.07,.45,ne,.04,.9,4.1,[6257514,8019014,6975364][W%3]),W%5===2)for(let ue of[-1.7,0,1.7])f(B+ue*0,Q+.5,ne+ue,.05,.8,.05,4930354);W%6===0&&(f(B+1.4,Q+.6,ne-1.7,.5,.08,.5,13619922,!1,0,.5),f(B+1.4,Q+.38,ne-1.7,.05,.5,.05,5593690)),W%7<3&&f(B-2.08,Q-.9,ne-1.6,.02,1.8,.3,8018501),W%8===4&&(f(B-2.18,1.1,ne+1,.28,.32,.06,15197919),f(B-2.2,1.1,ne+1,.24,.2,.07,7107447))}let L=98,I=41;f(L,.022,I,6,.044,8,11971222),p(L,1.37,I-4,6.2,2.7,.18,11904388),p(L,1.37,I+4,6.2,2.7,.18,11904388),p(L+3,1.37,I,.18,2.7,8,11904388);for(let F of[-1,1])p(L-3,1.37,I+F*2.42,.18,2.7,3.16,11904388),p(L+F*1.76,1.37,I,2.42,2.7,.14,12891799),p(L,1.37,I+F*3.18,.14,2.7,1.62,12891799);p(L,2.77,I,6.18,.17,8.2,7828075),r.push({buildingId:"lajes-home",unitId:"lajes-home:0",x:L,z:I,w:5.8,d:7.8,floor:0,ceiling:2.68}),v("CASA",94.87,2.34,I,-Math.PI/2,3232851,.95,.28),p(96.1,.36,43.7,.85,.7,1.76,6912108),f(96.1,.75,43.7,.86,.09,1.7,12102280),p(99.7,.27,43.6,1.18,.51,1.91,8938317),f(99.7,.58,43.6,1.18,.13,1.88,13086100),f(99.7,.67,44.27,.92,.13,.39,15853006),p(96.4,.44,38.65,1.6,.86,.56,7239797),f(96.4,.9,38.65,1.64,.07,.61,12633269),f(100,.38,38.1,.59,.75,.63,14998731),f(99.1,.84,38.16,.62,.14,.44,14076597);let k=Kp(n,i),N=Ti,O=(N.west+N.east)/2;f(O,.005,75,25.8,.014,24,7564899),f(N.gate.x,.004,62.2,7.5,.015,4.8,7564899);for(let F of[N.west+.3,N.east-.3])p(F,.8,75,.24,1.6,24,6776155);p(O,.8,86.72,25.6,1.6,.24,6776155),p(45.3,.8,63,12.4,1.6,.22,6776155),p(62,.8,63,5.6,1.6,.22,6776155),f(43.8,1.55,66.6,5,3.1,4,11115653),v("FERRO-VELHO",43.8,2.5,64.56,Math.PI,3232851,4.3,.55);for(let F=42;F<=62;F+=3.2)f(F,.015,81,.045,.012,5,12035445);for(let F=0;F<52;F++){let B=F/52*Math.PI*2,V=118+Pn()*58,ne=rr([9670532,10525321,10001560,9212560]),Q=Math.sin(B)*V,ae=Math.cos(B)*V;d("hill",Q,-1,ae,12+Pn()*33,3+Pn()*22,10+Pn()*20,ne,!1,B);let W=4+Pn()*16;f(Q,W*.5-1,ae,3+Pn()*9,W,4+Pn()*8,rr([10194306,8949389,10128258]),!1)}m.finalize();let X=Jp(n,i),q=new nn({roughness:.88});for(let{shape:F,shadow:B,items:V}of Object.values(a)){let ne=new Vn(h[F],q,V.length);V.forEach(({matrix:Q,color:ae},W)=>{ne.setMatrixAt(W,Q),ne.setColorAt(W,ae)}),ne.castShadow=B,ne.receiveShadow=!0,n.add(ne)}let ee=new Et,ie=new St(new Wo(1.6,1.85,40),new Vt({color:15794054,side:zn,transparent:!0,opacity:.85,depthWrite:!1}));ie.rotation.x=-Math.PI/2,ie.position.y=.26,ee.add(ie);let K=new St(new ns(.43),new Vt({color:15794054}));return K.position.y=2.8,ee.add(K),n.add(ee),{solid:i,marker:ee,beacon:K,sun:e,sky:t,houseRoof:g,bed:Cp,doors:_,buildings:o,props:m,signals:X,lajesHome:k,...Xp(i,s,r,_,Xn)}}function kv(){let n=[-.5,0,-.5],e=[-.5,0,.5],t=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,e,t,i,r,s,n,r,i,n,t,r,e,r,t,e,s,r,n,s,e,n,i,s],a=new $t;return a.setAttribute("position",new Lt(o.flat(),3)),a.computeVertexNormals(),a}var Gv=n=>n===0?"gr\xE1tis":"R$ "+n.toLocaleString("pt-BR"),Vv=n=>"#"+n.toString(16).padStart(6,"0");function jp(n,{balance:e,onClose:t}){let i=n.querySelector("#shop-title"),s=n.querySelector("#shop-detail"),r=n.querySelector("#shop-balance"),o=n.querySelector("#shop-list"),a=n.querySelector("#shop-status"),h=null,l=null;function d(p){let m=p?document.activeElement?.getAttribute("data-key"):null,u=l();h=u,i.textContent=u.title,s.textContent=u.note??"",r.textContent=e(),o.replaceChildren(),u.sections.forEach((_,T)=>{let C=document.createElement("h3");C.textContent=_.title,o.append(C),_.items.forEach((b,A)=>{let S=document.createElement("div");S.className="store-row"+(b.active?" active":"");let x=document.createElement("button");x.type="button",x.className="store-item",x.dataset.key=T+":"+A,x.disabled=!!b.disabled,x.innerHTML="";let w=document.createElement("span");w.textContent=b.label+(b.active?" \xB7 em uso":"");let D=document.createElement("b");if(D.textContent=b.price==null||b.disabled&&u.title==="Invent\xE1rio"?"":Gv(b.price),x.append(w,D),b.detail){let L=document.createElement("small");L.textContent=b.detail,x.append(L)}if(x.addEventListener("click",()=>f(b,void 0)),S.append(x),b.colors){let L=document.createElement("div");L.className="swatches",b.colors.forEach((I,k)=>{let N=document.createElement("button");N.type="button",N.className="swatch",N.style.background=Vv(I),N.dataset.key=T+":"+A+":"+k,N.setAttribute("aria-label",b.label+", cor "+(k+1)),N.disabled=!!b.disabled,N.addEventListener("click",()=>f(b,I)),L.append(N)}),S.append(L)}o.append(S)})}),((m?o.querySelector('[data-key="'+m+'"]'):null)??o.querySelector("button:not(:disabled)"))?.focus({preventScroll:!1})}function f(p,m){let u=p.buy(m);a.textContent=u??"Pronto!",a.classList.toggle("error",!!u),d(!0)}return{show(p){l=p,a.textContent="",d(!1),n.open||n.showModal()},close(){n.open&&n.close(),h=null,t()},move(p){let m=[...n.querySelectorAll("button:not(:disabled)")];if(!m.length)return;let u=m.indexOf(document.activeElement),v=m[(u+p+m.length)%m.length];v.focus(),v.scrollIntoView({block:"nearest"})},activate(){let p=document.activeElement;p&&n.contains(p)&&p.click()},refresh(){h&&d(!0)}}}var to={sedan:{name:"Brasa",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[11422e3,4362871,13084242,5795484,9063749,14209732,3093558]},hatch:{name:"Pulga",category:"dia a dia",length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[.38,.18],[-.38,.18],[.38,-.86],[-.38,-.86]],doors:4,handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[14783826,6989496,14209732,11876922,9416794]},wagon:{name:"Perua",category:"dia a dia",length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3,cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[.42,.1],[-.42,.1],[.42,-1],[-.42,-1]],doors:4,handling:{top:26,accel:14,grip:8,mass:1.18},palette:[9799551,5143689,8219215,13023648],extras:["roofRack"]},taxi:{name:"T\xE1xi",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[15254855],extras:["taxi"]},pickup:{name:"Picape",category:"utilit\xE1rio",length:5.3,width:2,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[.44,-.02],[-.44,-.02]],doors:2,handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[7043674,9056042,14012354,3100527,3815994],extras:["bed"]},van:{name:"Furg\xE3o",category:"utilit\xE1rio",length:5.15,width:2,sill:.55,belt:1.06,roof:2,wheel:.41,wheelbase:3.15,cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[.45,.85],[-.45,.85]],doors:2,handling:{top:22,accel:11,grip:7,mass:1.6},palette:[15131350,10467269,13218682,7110499],extras:["box"]},suv:{name:"Jip\xE3o",category:"luxo / utilit\xE1rio",length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[.45,.05],[-.45,.05],[.45,-1],[-.45,-1]],doors:4,handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[2042416,14276303,6044462,3758922],extras:["roofRack","chrome"]},sport:{name:"Fa\xEDsca",category:"esportivo",length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[.4,-.28],[-.4,-.28]],doors:2,handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[14236459,15909424,3108822,16052714,2500907],extras:["spoiler"]},muscle:{name:"Trov\xE3o",category:"esportivo",length:4.95,width:2,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,cabin:{base:[-1.3,.5],top:[-1,-.02]},seats:[[.42,-.45],[-.42,-.45]],doors:2,handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[1908514,8199967,13855274,2972991],extras:["scoop","stripes"]},luxury:{name:"Imperador",category:"luxo",length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[.44,.12],[-.44,.12],[.44,-1.08],[-.44,-1.08]],doors:4,handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[1316376,15065818,3882821,4858664],extras:["chrome"]},convertible:{name:"Brisa",category:"luxo / esportivo",length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[.4,-.12],[-.4,-.12],[.4,-1],[-.4,-1]],doors:2,open:!0,handling:{top:34,accel:19,grip:9,mass:1.05},palette:[9425384,15328208,11872828,1851246],extras:["chrome"]}},Qp={street:{name:"Rua",handling:{top:31,accel:19.7,grip:13.5,mass:.39}},sport:{name:"Raio",handling:{top:40,accel:24,grip:14.5,mass:.36}},chopper:{name:"Estradeira",handling:{top:29,accel:15,grip:12,mass:.45}},scooter:{name:"Mobilete",handling:{top:19,accel:10,grip:13,mass:.28}}};for(let[n,e]of Object.entries(to))Op("car:"+n,{width:e.width/2+.02,length:e.length/2+.01,radius:e.width/2-0,offsets:[-(e.length/2-e.width/2),0,e.length/2-e.width/2],mass:e.handling.mass});var im=new tn(1,1,1),Hv=new nn({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:zn,transparent:!0,opacity:.5,depthWrite:!1});function no(n,e="sedan",t,i=!1){let s=e==="tow"?{...to.pickup,name:"Guincho",extras:["bed","tow"]}:to[e]??to.sedan,r=t??s.palette[0],{length:o,width:a,sill:h,belt:l,roof:d,wheel:f,wheelbase:p}=s,m=o/2,u=s.extras??[],[v,g]=s.cabin.base,[_,T]=s.cabin.top,C=new Et;Dc(C,a/2+.17,m+.07);let b=new Et;C.add(b);let A=(W,ue,me,Ie,$e,Ee,ot,Ke,je=!1)=>ft(b,W,ue,me,Ie,$e,Ee,ot,Ke,je),S=u.includes("chrome");A("box",2435629,0,(f*.32+h+.06)/2,0,a-.44,h+.06-f*.32,o-.9);for(let W of[-1,1])A("box",2830387,W*(a/2-.07),h-.06,0,.12,.22,Math.max(.4,p-2*f-.12));A("box",3749689,0,h,0,a-.44,.075,o-.35);for(let W of[-1,1]){for(let[ue,me]of[[-m,-p/2-f],[-p/2+f,p/2-f],[p/2+f,m]])me>ue&&A("box",r,W*(a/2-.055),(h+l)/2,(ue+me)/2,.11,l-h,me-ue,!0);for(let ue of[-p/2,p/2]){let me=Math.min(l-.05,2*f+.03);A("box",r,W*(a/2-.055),(me+l)/2,ue,.11,l-me,2*f,!0)}}for(let W of[-1,1])A("box",r,0,(h+l)/2,W*(m-.09),a-.04,l-h,.18,!0);let x=m-g-.03,w=A("box",r,0,l+.005,(g+m)/2,a-.04,.15,x,!0);!u.includes("bed")&&!u.includes("box")&&m+v>.25&&A("box",r,0,l-.005,(v-m)/2,a-.05,.14,m+v-.02,!0);let D=a/2-.07,L=a/2-.27,I=Hv.clone(),k;if(s.open){let W=new $t;W.setAttribute("position",new Lt([-D,l,g,D,l,g,L,d,T,-L,d,T],3)),W.setIndex([0,1,2,0,2,3]),W.computeVertexNormals(),k=new St(W,I),A("box",2895665,0,d,T,a-.5,.06,.07)}else{let W=new $t;W.setAttribute("position",new Lt([-D,l-.015,v,D,l-.015,v,D,l-.015,g,-D,l-.015,g,-L,d,_,L,d,_,L,d,T,-L,d,T],3)),W.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),W.computeVertexNormals(),k=new St(W,I),A("box",r,0,d+.035,(_+T)/2,L*2+.02,.07,T-_+.08,!0);let ue=(me,Ie,$e)=>{let Ee=d-l,ot=Ie-me;for(let Ke of[-1,1])A("box",r,Ke*(D+L)/2,(l+d)/2,(me+Ie)/2,.08,Math.hypot(Ee,ot),$e,!0).rotation.x=Math.atan2(ot,Ee)};if(ue(g,T,.08),ue(v,_,.12),s.doors===4){let me=(s.seats[0][1]+s.seats[2][1])/2+.12;for(let Ie of[-1,1])A("box",r,Ie*(D+L)/2,(l+d)/2,me,.08,d-l,.1,!0)}}k.renderOrder=2,b.add(k);let N=Math.min(l-.26,d-.99),O=Math.min(.62,d-l-.02+.3);for(let[W,ue]of s.seats)A("cloth",3486512,W,N+.06+O,ue-.235,.31,.16,.14),A("cloth",3815219,W,N-.1,ue+.12,.51,.14,.54),A("box",3815219,W,N+O/2,ue-.235,.5,O,.13);A("box",2828840,0,l+.045,g-.24,a-.26,.14,.34);let X=new Et;X.position.set(s.seats[0][0],l+.07,s.seats[0][1]+.42),X.rotation.x=Math.PI/2-.45;let q=new Et;X.add(q),ft(q,"cylinder",1907997,0,0,0,.17,.03,.17),ft(q,"box",7105124,0,.018,0,.3,.012,.03),ft(q,"box",7105124,0,.018,.07,.03,.012,.14),A("cloth",2106922,0,N+.02,(v+g)*.5,.19,.23,Math.min(1.25,g-v));for(let W of[-1,1])A("box",6643286,W*(a/2-.15),(h+l)/2,(v+g)/2,.08,.085,g-v),A("box",11951652,W*(a*.5-.13),l-.205,m+.006,.12,.064,.032,!0),A("box",12959664,W*(a*.5-.26),h-.07,-m-.036,.12,.076,.09,!0);A("cloth",2435629,0,l-.21,m+.009,a*.41,.13,.026);for(let W=0;W<3;W++)A("box",7630694,0,l-.25+W*.04,m+.026,a*.36,.013,.014,!0);A("box",3355961,0,l-.24,m+.004,a*.44,.14,.05),A("box",13156268,0,h+.035,m+.006,a*.98,.1,.045,!0),A("box",13156268,0,h+.025,-m-.006,a*.98,.1,.05,!0),A("box",16707771,0,(h+l)/2,-m-.008,.4,.14,.03);for(let W of[-1,1]){A("box",16769956,W*(a/2-.29),l-.165,m+.006,.43,.17,.055,!0),A("box",11021858,W*(a/2-.3),l-.165,-m-.006,.48,.17,.055,!0),s.open||A("box",2898236,W*(a/2+.03),l+.07,g-.06,.1,.09,.16);let ue=s.doors===4?[g,(s.seats[0][1]+s.seats[2][1])/2+.12,v+.05]:[g,s.seats[0][1]-.62];for(let me of ue)A("box",1843234,W*(a/2+.005),(h+l)/2,me,.012,l-h-.02,.025);for(let me=0;me<ue.length-1;me++)A("box",13089700,W*(a/2+.01),l-.05,ue[me+1]+Math.min(.21,(ue[me]-ue[me+1])*.25),.035,.04,.22,!0);S&&A("box",14277074,W*(a/2+.008),l-.03,0,.02,.03,o-.5,!0)}if(u.includes("taxi")&&(A("box",16249304,0,d+.16,(_+T)/2,.68,.2,.26),A("box",2779715,0,(h+l)/2+.06,0,a+.012,.08,o*.6,!0)),u.includes("spoiler")){for(let W of[-1,1])A("box",1776670,W*.6,l+.14,-m+.28,.06,.22,.08);A("box",r,0,l+.27,-m+.25,a-.2,.05,.32,!0)}if(u.includes("scoop")&&A("box",2105892,0,l+.12,(g+m)/2+.1,.5,.12,.62),u.includes("stripes"))for(let W of[-1,1])A("box",15855590,W*.2,l+.083,(g+m)/2,.16,.012,x),A("box",15855590,W*.2,d+.072,(_+T)/2,.16,.012,T-_);if(u.includes("roofRack"))for(let W of[-1,1])A("box",2500907,W*(L-.08),d+.1,(_+T)/2,.05,.06,T-_+.2);if(u.includes("tow")&&(A("box",3553336,0,l+.18,-o*.34,.73,.51,.35),A("box",15047465,0,d+.1,(_+T)/2,.68,.13,.28,!0),A("box",6776928,0,l-.17,-m-.19,.91,.13,.33,!0)),u.includes("bed")){for(let W of[-1,1])A("box",r,W*(a/2-.04),l+.22,(v-m)/2,.08,.44,m+v,!0);A("box",r,0,l+.22,-m+.04,a,.44,.08,!0),A("box",r,0,l+.22,v-.04,a,.44,.08,!0),A("box",2960169,0,l+.01,(v-m)/2,a-.16,.02,m+v-.12)}if(u.includes("box")){A("box",r,0,(l+2.15)/2,(v+.25-m)/2,a,2.15-l,m+v+.25,!0),A("box",2763306,0,2.15-.05,(v+.25-m)/2,a+.02,.04,m+v+.27);for(let W of[-1,1])A("box",1843234,W*.005,(l+2.1)/2,-m-.004,.015,2-l,.02)}let ee=[];for(let W of[-1,1])for(let ue of[-p/2,p/2]){let me=new Et;me.position.set(W*(a/2-.17),f,ue),C.add(me),ft(me,"cylinder",2434600,0,0,0,f,.24,f).rotation.z=Math.PI/2,ft(me,"cylinder",S?14013903:11052964,W*.115,0,0,f*.53,.02,f*.53,!0).rotation.z=Math.PI/2,ee.push(me)}let ie=new Et,K=s.doors===4?(s.seats[0][1]+s.seats[2][1])/2+.12:s.seats[0][1]-.62;ie.position.set(a/2+.004,0,g),ft(ie,"box",r,0,(h+l)/2+.04,-(g-K)/2,.036,l-h-.1,g-K,!0),Ei(ie,as(ie),Lc),b.add(ie);let F=[1,-1].map(W=>{let ue=new Et;return ue.position.set(0,h-.09,W*(m-.2)),ft(ue,"box",S?13619144:2830387,0,0,0,a-.08,.3,.42,S),Ei(ue,as(ue),S?Lc:void 0),b.add(ue),{mesh:ue,end:W,state:0,home:ue.position.clone(),damage:0,velocity:new J,spin:0}}),B=[];i&&(B.push(A("box",15550262,-.33,d+.13,(_+T)/2,.55,.14,.25)),B.push(A("box",5487086,.33,d+.13,(_+T)/2,.55,.14,.25)));let V=as(b).filter(W=>W!==k&&W!==w&&!B.includes(W));Ei(b,V.filter(W=>W.material.metalness===0)),Ei(b,V.filter(W=>W.material.metalness>0),Lc);for(let W of ee)Ei(W,as(W));b.traverse(W=>{W instanceof St&&(W.castShadow=!1)}),b.add(X);let ne=new Vt({color:16757276}),Q={left:[],right:[]};for(let W of[-1,1])for(let[ue,me,Ie]of[[m+.014,l-.2,.1],[-m-.014,l-.2,.12]]){let $e=new St(im,ne);$e.scale.set(Ie,.085,.03),$e.position.set(W*(a/2-.07),me,ue),$e.visible=!1,b.add($e),Q[W>0?"left":"right"].push($e)}let ae=null;if(u.includes("tow")){let W=new Et;W.position.set(0,l+.28,-o*.3),ft(W,"box",4539969,0,0,-.8,.135,.16,1.6,!0),ft(W,"box",15047465,0,0,-1.62,.2,.2,.16);let ue=new Et,me=ft(ue,"box",2105376,0,-.3,0,.03,1,.03),Ie=ft(ue,"box",13619144,0,-.65,0,.13,.1,.15,!0);b.add(W,ue),ae={pivot:W,hang:ue,cable:me,hook:Ie,length:1.62}}return n.add(C),sm({root:C,body:b,cabin:k,cracks:[],wheels:ee,lamps:B,hood:w,bumpers:F,blinkers:Q,towArm:ae,armAngle:.35,signal:0,steeringWheel:{tilt:X,spin:q},towTilt:0,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"car",model:e,shape:e==="tow"?"car:pickup":"car:"+e,spec:s,color:r,handling:s.handling,rider:null,door:ie,doorTime:0,wheelSpin:0,handlebar:null,wheelRadius:f,wheelbase:p,halfWidth:a/2,halfLength:m,seatHip:N,flat:[!1,!1,!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}function sm(n){let e=n;return e.repair=()=>Wv(e),e}var em=new nn({color:2038810,roughness:1,metalness:.05});function rm(n){n.originals??=new Map,n.root.traverse(e=>{!(e instanceof St)||e===n.cabin||e.material===em||e.parent===n.root&&e.geometry.type==="CircleGeometry"||(n.originals.set(e,e.material),e.material=em)}),n.cabin&&(n.cabin.visible=!1);for(let e of n.cracks)e.visible=!1}function Wv(n){n.flat?.fill(!1);for(let[e,t]of n.originals??[])e.material=t;n.originals?.clear(),n.cabin&&(n.cabin.visible=!0);for(let e of n.bumpers??[])n.body.add(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.state=0,e.damage=0;Object.assign(n,{damageFront:0,damageRear:0,burning:!1,wrecked:!1,fire:0,wreckClock:0})}function om(n){let e=t=>n.bumpers?.find(i=>i.end===t);return{front:Math.round(Math.min(100,(n.damageFront??0)+(e(1)?.state?30:0))),rear:Math.round(Math.min(100,(n.damageRear??0)+(e(-1)?.state?30:0))),glass:n.cracks?.length??0,tires:(n.flat??[]).filter(Boolean).length,mechanics:Math.max(0,Math.round(100-n.integrity))}}function am(n,e){if(e==="front"||e==="rear"){let t=e==="front"?1:-1;t>0?n.damageFront=0:n.damageRear=0;for(let i of n.bumpers??[])i.end===t&&(n.body.add(i.mesh),i.mesh.position.copy(i.home),i.mesh.rotation.set(0,0,0),i.state=0,i.damage=0)}else if(e==="glass"){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0)}else e==="tires"?n.flat?.fill(!1):e==="mechanics"&&(n.integrity=Math.max(n.integrity,100))}var lm={spoiler:{label:"Aerof\xF3lio"},rack:{label:"Bagageiro de teto"},bullbar:{label:"Quebra-mato refor\xE7ado"}},cm=Object.fromEntries(Object.entries(lm).map(([n,{label:e}])=>[n,e]));function ku(n,e,t){if(n.kind!=="car"||!lm[e])return;if(n.fitted??=new Set,n.fittedMeshes??={},!t){for(let f of n.fittedMeshes[e]??[])f.removeFromParent();delete n.fittedMeshes[e],n.fitted.delete(e);return}if(n.fitted.has(e))return;let{spec:i}=n,{width:s,length:r,roof:o,belt:a}=i,h=r/2,l=[],d=(f,p,m,u,v,g,_,T,C=!1)=>l.push(ft(n.body,f,p,m,u,v,g,_,T,C));if(e==="spoiler"){for(let f of[-1,1])d("box",1776670,f*.6,a+.16,-h+.3,.06,.26,.08);d("box",n.color,0,a+.31,-h+.27,s-.2,.05,.34,!0)}else if(e==="rack"){let[f,p]=i.cabin.top;for(let m of[-1,1])d("box",2500907,m*(s/2-.35),o+.12,(f+p)/2,.05,.06,p-f+.25);for(let m of[f+.1,(f+p)/2,p-.1])d("box",2500907,0,o+.15,m,s-.7,.04,.05)}else if(e==="bullbar"){d("box",2763822,0,i.sill+.06,h+.18,s-.3,.07,.07,!0);for(let f of[-1,1])d("box",2763822,f*(s/2-.3),i.sill+.28,h+.15,.06,.5,.06,!0);d("box",2763822,0,i.sill+.5,h+.13,s-.4,.06,.06,!0)}n.fittedMeshes[e]=l,n.fitted.add(e)}function Gu(n){let e=n.spec.handling,{engine:t=0,tires:i=0}=n.upgrades??{};n.handling={...e,top:e.top*(1+.055*t),accel:e.accel*(1+.09*t),grip:e.grip*(1+.075*i)}}function Oc(n,e,t="street"){let i=Qp[t]??Qp.street,s=new Et;Dc(s,.42,1.07*1.07);let r=new Et;s.add(r);let o=(v,g,_,T,C,b,A,S)=>ft(r,v,g,_,T,C,b,A,S),a=t==="scooter"?.25:t==="chopper"?.36:.33,h=t==="chopper"?[-.86,.98]:t==="scooter"?[-.62,.66]:[-.73,.78];t==="scooter"?(o("box",e,0,.42,-.25,.38,.34,.8),o("box",2763821,0,.34,.2,.36,.08,.55),o("box",e,0,.72,.52,.34,.68,.16),o("box",2369834,0,.78,-.32,.34,.12,.55),o("box",13940106,0,.92,.66,.22,.14,.08)):t==="chopper"?(o("box",3882300,0,.46,-.1,.3,.34,.7),o("sphere",e,0,.86,.32,.22,.18,.5),o("box",2369834,0,.68,-.42,.38,.1,.62),o("box",e,0,.62,-.86,.3,.16,.5),o("box",14079696,.22,.34,-.42,.1,.1,.95),o("box",13940106,0,.9,1.02,.22,.2,.1)):(o("box",3882300,0,.48,-.04,.32,.38,.7),o("sphere",e,0,.89,.34,.24,.23,.46),o("box",2369834,0,.85,-.36,.36,.13,.59),o("box",e,0,.65,-.7,.32,.17,.58),o("box",13940106,0,.8,.88,.25,.21,.11),t==="sport"&&(o("box",e,0,.72,.62,.42,.5,.5),o("box",2902871,0,1.04,.72,.34,.18,.06),o("box",e,0,.8,-.72,.28,.12,.5))),o("box",10433836,0,.7,h[0]-.25,.2,.11,.11);for(let v of[-1,1]){let g=o("box",3817536,v*.27,1.28,.47,.035,.22,.035);g.rotation.z=-v*.4,o("cloth",4343880,v*.32,1.39,.47,.17,.078,.056),o("box",11630140,v*.19,.76,h[0]-.17,.11,.073,.08)}let l=new Et;l.position.set(0,.76,.38),ft(l,"box",3949122,0,.44,-.09,t==="chopper"?.84:.684,.057,.059),ft(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,Ei(l,as(l)),r.add(l),o("box",5461330,0,.39,-.22,.52,.07,.11),t!=="scooter"&&o("box",11578016,.232,.36,-.54,.12,.12,.72);let d=new St(new tn(.01,.01,.01));d.visible=!1,r.add(d);let f=[];for(let v of h){let g=new Et;g.position.set(0,a,v),ft(g,"cylinder",2434601,0,0,0,a,.12,a).rotation.z=Math.PI/2,ft(g,"cylinder",8750213,0,0,0,a*.62,.14,a*.62).rotation.z=Math.PI/2,Ei(g,as(g)),f.push(g),r.add(g);let _=v>0?t==="chopper"?-.62:-.21:.46;o("box",5988704,0,a+.22,v+(t==="chopper"&&v>0?-.18:0),.09,t==="chopper"&&v>0?.8:.49,.085).rotation.x=_}Ei(r,as(r).filter(v=>v!==d));let p=new Et,m=new Vt({color:16757276}),u={left:[],right:[]};for(let v of[-1,1])for(let[g,_,T]of[[.3,1.2,.47],[.19,.76,h[0]-.17]]){let C=new St(im,m);C.scale.set(.07,.05,.05),C.position.set(v*g,_,T),C.visible=!1,r.add(C),u[v>0?"left":"right"].push(C)}return n.add(s),sm({root:s,body:r,cabin:null,cracks:[],wheels:f,lamps:[],hood:d,bumpers:[],blinkers:u,signal:0,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"bike",model:t,shape:"bike",spec:i,color:e,handling:i.handling,rider:null,door:p,doorTime:0,wheelSpin:0,handlebar:l,wheelRadius:a,wheelbase:h[1]-h[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}var Xv=new J,qv=new ln;function hm(n,e,t){let i=e.spec.seats?.[t]??e.spec.seats?.[e.spec.seats.length-1];if(!i)return;let[s,r]=i,[o,a]=e.spec.cabin.top,h=e.spec.open?r:Math.max(o+.07,Math.min(a-.03,r)),l=e.seatHip-.03,d=e.spec.open?n.look.height:Math.min(n.look.height,(e.spec.roof-l-.035)/1.1);n.root.scale.y=d,e.body.updateWorldMatrix(!0,!1),n.root.position.copy(e.body.localToWorld(Xv.set(s,l-.815*d,h))),n.root.quaternion.copy(e.body.getWorldQuaternion(qv)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.rifle&&(n.rifle.visible=!1);let f=e.spec.roof-e.seatHip<1.05;n.body.position.set(0,0,0),n.body.rotation.set(0,0,0);for(let p=0;p<2;p++)n.legs[p].rotation.set(f?-1.52:-1.44,0,0),n.shins[p].rotation.set(f?1.04:1.26,0,0),t===0?(n.arms[p].rotation.set(-.62,0,(p?-1:1)*.18),n.forearms[p].rotation.set(-.85,0,0)):(n.arms[p].rotation.set(-.32,0,(p?-1:1)*.08),n.forearms[p].rotation.set(-1.05,0,0));t===0&&e.steeringWheel&&Kv(n,e)}var Yv=new J,Zv=new J(0,1,0);function Jv(n,e,t=new J){let{spin:i}=n.steeringWheel,s=.4;return t.set(e*Math.sin(1.02)*.155,0,-Math.cos(1.02)*.155),t.applyAxisAngle(Zv,(s-1)*i.rotation.y),i.localToWorld(t)}function Kv(n,e){e.root.updateMatrixWorld(!0),n.root.updateMatrixWorld(!0);for(let t=0;t<2;t++){let i=t===0?-1:1,s=n.body.worldToLocal(Jv(e,i,Yv));Jr(n.arms[t],n.forearms[t],s,.23,.227,[i*.57,-1,.16])}}var tm=null,$v=new Yn(.28,.28),va=new J,nm=new J,Ma=new J;function jv(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="rgba(235,242,240,.9)",e.lineWidth=1.6,e.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;e.moveTo(64,64);for(let r=1;r<=4;r++)e.lineTo(64+Math.cos(s+Math.sin(r*3.1+i)*.12)*r*14,64+Math.sin(s+Math.cos(r*2.3+i)*.12)*r*14)}for(let i of[9,20,33]){e.moveTo(64+i,64);for(let s=1;s<=24;s++)e.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}e.stroke(),e.fillStyle="rgba(250,250,245,.95)",e.beginPath(),e.arc(64,64,3.2,0,Math.PI*2),e.fill();let t=new Ys(n);return t.colorSpace=gn,new Vt({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:zn})}function Vu(n,e){if(!n.cabin||!e)return;tm??=jv(),n.root.updateMatrixWorld(!0),Ma.set(e[0],e[1],e[2]),n.body.worldToLocal(Ma);let[t,i]=n.spec.cabin.top;nm.set(0,(n.spec.belt+n.spec.roof)/2,(t+i)/2),va.subVectors(Ma,nm),va.y*=.35,va.normalize();let s=new St($v,tm);s.position.copy(Ma).addScaledVector(va,.015),s.lookAt(Ma.clone().add(va)),s.rotation.z=Math.random()*Math.PI*2,s.renderOrder=3,n.body.add(s),n.cracks.push(s),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function um(n){let{belt:e,roof:t,width:i,cabin:s}=n.spec,r=Math.min(s.base[0],s.top[0]),o=Math.max(s.base[1],s.top[1]);return{z:(r+o)/2,halfZ:(o-r)/2,y:(e+t)/2+.02,halfY:(t-e)/2,halfX:i/2-.1}}function fi(n,e,t=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,h=0,l=0,d=n.wheels.map(b=>{let{x:A,z:S}=b.position,x=Xn(n.x+A*s+S*i,n.z-A*i+S*s);return S>0?o+=x:a+=x,A<0?h+=x:l+=x,x}),f=(o+a)/n.wheels.length;n.root.rotation.y=n.angle;let p=n.flat??[],m=r?0:((p[0]||p[2]?1:0)-(p[1]||p[3]?1:0))*.05;n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),n.wheelbase??2.64);let u=r?n.integrity<=0?1.25:-t*Math.min(.53,Math.abs(n.speed)*.039):t*Math.min(.09,Math.abs(n.speed)*.004),v=r?0:Math.atan2((l-h)*.5,(n.halfWidth??.97)*2)+m;n.body.rotation.z+=(u+v-n.body.rotation.z)*(e>0?Math.min(1,e*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-e),n.door.rotation.y=(r?1:-1)*Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let g=n.wheelRadius??.408,_=r?n.body.rotation.z:0;if(n.root.position.set(n.x,f+(r?Math.abs(Math.sin(_))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=t*.22),n.wheelSpin=(n.wheelSpin+n.speed*e/g)%(Math.PI*2),n.wheels.forEach((b,A)=>{let S=p[A];r||(b.position.y=d[A]-f+g-(S?g*.28:0)),b.scale.set(1,S?.72:1,S?1.12:1),b.rotation.set(n.wheelSpin,b.position.z>0?t*(r?.22:.23):0,0,"YXZ")}),n.blinkers){let b=n.signal&&Math.floor(performance.now()/330)%2===0;for(let A of n.blinkers.left)A.visible=!!(b&&n.signal>0);for(let A of n.blinkers.right)A.visible=!!(b&&n.signal<0)}if(n.steeringWheel&&(n.steeringWheel.spin.rotation.y=-t*2.6),n.towArm){let{pivot:b,hang:A,cable:S,hook:x,length:w}=n.towArm;b.rotation.x=n.armAngle;let D=b.position.y+Math.sin(n.armAngle)*w,L=b.position.z-Math.cos(n.armAngle)*w;A.position.set(0,D,L);let I=Math.min(1.5,Math.max(.08,D-.5));S.scale.y=I,S.position.y=-I/2,x.position.y=-I-.05}n.towTilt&&(n.body.rotation.x+=n.towTilt);let T=100-n.integrity;n.hood.rotation.x=T*.0031+(n.damageFront>30?.18:0),n.hood.rotation.z=T*.0013;let C=n.hoodSize??(n.hoodSize=n.hood.scale.clone());n.hood.scale.set(C.x,C.y*(1+Math.min(.6,(n.damageFront??0)*.012)),C.z*(1-Math.min(.12,(n.damageFront??0)*.002)));for(let b of n.bumpers??[])b.state===1&&(b.mesh.rotation.x=b.end*.32,b.mesh.position.y=b.home.y-.12)}var Qv=`
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
  }`,eM=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;function fm(n,e,t){let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3),h=new Float32Array(e),l=new Float32Array(e),d=new Float32Array(e),f=new Float32Array(e),p=new Float32Array(e),m=new Float32Array(e),u=new Float32Array(e),v=new $t;v.setAttribute("position",new sn(i,3)),v.setAttribute("tint",new sn(s,3)),v.setAttribute("size",new sn(r,1)),v.setAttribute("alpha",new sn(o,1));let g=new Zn({vertexShader:Qv,fragmentShader:eM,transparent:!0,depthWrite:!1,blending:t?Qo:Rs,uniforms:{scale:{value:520}}}),_=new Bo(v,g);_.frustumCulled=!1,_.visible=!1,_.renderOrder=4,n.add(_);let T=0;function C(S,x,w,D,L,I,k,N,O,X,q,ee=0,ie=0){let K=T;T=(T+1)%e,i[K*3]=S,i[K*3+1]=x,i[K*3+2]=w,a[K*3]=D,a[K*3+1]=L,a[K*3+2]=I,s[K*3]=q.r,s[K*3+1]=q.g,s[K*3+2]=q.b,h[K]=k,l[K]=k,d[K]=N,f[K]=O,p[K]=X,m[K]=ee,u[K]=ie,r[K]=N,o[K]=X,_.visible=!0}function b(S){let x=!1;for(let w=0;w<e;w++){if(h[w]<=0){o[w]!==0&&(o[w]=0,r[w]=0,x=!0);continue}x=!0,h[w]-=S;let D=Math.exp(-u[w]*S);a[w*3]*=D,a[w*3+2]*=D,a[w*3+1]=a[w*3+1]*D+m[w]*S,i[w*3]+=a[w*3]*S,i[w*3+1]+=a[w*3+1]*S,i[w*3+2]+=a[w*3+2]*S,m[w]<0&&i[w*3+1]<.05&&(i[w*3+1]=.05,a[w*3+1]*=-.3);let L=1-Math.max(0,h[w])/l[w];r[w]=d[w]+(f[w]-d[w])*L,o[w]=p[w]*(1-L)*(L<.12?L/.12:1)}if(x)for(let w of["position","size","alpha","tint"])v.attributes[w].needsUpdate=!0;_.visible=x}function A(){h.fill(0),o.fill(0),r.fill(0),v.attributes.alpha.needsUpdate=!0,_.visible=!1}return{spawn:C,update:b,clear:A,material:g}}function dm(n){let e=fm(n,700,!1),t=fm(n,600,!0),i=new tt,s=(d,f)=>d+Math.random()*(f-d),r=320,o=new Vn(new Yn(1,1),new Vt({color:1315860,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),r);o.frustumCulled=!1,o.renderOrder=1;let a=new Pt().makeScale(0,0,0);for(let d=0;d<r;d++)o.setMatrixAt(d,a);n.add(o);let h=0,l=new qt;return{update(d){e.update(d),t.update(d)},clear(){e.clear(),t.clear();for(let d=0;d<r;d++)o.setMatrixAt(d,a);o.instanceMatrix.needsUpdate=!0},setScale(d){e.material.uniforms.scale.value=d,t.material.uniforms.scale.value=d},engineSmoke(d,f,p,m){i.setRGB(m?.16:.5,m?.15:.48,m?.14:.45),e.spawn(d+s(-.2,.2),f,p+s(-.2,.2),s(-.3,.3),s(.9,1.5),s(-.3,.3),s(1.6,2.4),.5,m?2.4:1.8,m?.5:.32,i,0,.6)},tireSmoke(d,f,p){i.setRGB(.78,.76,.72),e.spawn(d,f,p,s(-.6,.6),s(.3,.8),s(-.6,.6),s(.8,1.3),.4,1.6,.3,i,0,1.4)},sparks(d,f,p,m=12,u=4){for(let v=0;v<m;v++)i.setRGB(1,s(.55,.85),s(.15,.35)),t.spawn(d,f,p,s(-u,u),s(.5,u*.9),s(-u,u),s(.18,.45),.09,.03,1,i,-9.8,.4)},flame(d,f,p,m=1){i.setRGB(1,s(.35,.6),.08),t.spawn(d+s(-.35,.35)*m,f,p+s(-.35,.35)*m,s(-.2,.2),s(1.4,2.4),s(-.2,.2),s(.4,.75),.75*m,.2,.85,i,0,.8),Math.random()<.45&&(i.setRGB(.13,.12,.11),e.spawn(d,f+.6,p,s(-.3,.3),s(1.2,2),s(-.3,.3),s(1.8,2.8),.7,2.8,.45,i,0,.5))},blood(d,f,p){i.setRGB(.48,.015,.025);for(let m=0;m<7;m++)e.spawn(d,f,p,s(-1.4,1.4),s(.6,2),s(-1.4,1.4),.34,.065,.025,.94,i,-9,.2)},explosion(d,f,p){i.setRGB(1,.9,.6),t.spawn(d,f+.6,p,0,0,0,.28,1.5,9,1,i);for(let m=0;m<46;m++){let u=Math.random()*Math.PI*2,v=s(.2,1),g=s(3,10);i.setRGB(1,s(.4,.75),s(.05,.2)),t.spawn(d,f+.5,p,Math.cos(u)*g*(1-v*.5),v*g,Math.sin(u)*g*(1-v*.5),s(.35,.8),s(.6,1.4),.2,.95,i,-2,1.5)}for(let m=0;m<30;m++){let u=Math.random()*Math.PI*2,v=s(1,4);i.setRGB(.1,.09,.085),e.spawn(d,f+.8,p,Math.cos(u)*v,s(1.5,4),Math.sin(u)*v,s(2.2,3.6),1.2,4.5,.7,i,0,.9)}this.sparks(d,f+.5,p,40,9)},skid(d,f,p,m,u=.012){let v=Math.hypot(p-d,m-f);v<.05||(l.position.set((d+p)/2,u+.013,(f+m)/2),l.rotation.set(-Math.PI/2,0,0),l.rotateZ(Math.atan2(p-d,m-f)),l.scale.set(.2,v+.04,1),l.updateMatrix(),o.setMatrixAt(h,l.matrix),h=(h+1)%r,o.instanceMatrix.needsUpdate=!0)}}}function Bc(n,e,t,i){let s=Math.hypot(e,i),r=Math.sin(n.angle)*e+Math.cos(n.angle)*i,o=Math.cos(n.angle)*e-Math.sin(n.angle)*i;n.ragdoll={vx:e,vy:t,vz:i,y:n.ragdoll?.y??0,t:0,rest:0,rising:0,spinX:(r>=0?1:-1)*(2.5+s*.55),spinZ:-o*.35,tiltX:0,tiltZ:0},n.pushX=0,n.pushZ=0}function kc(n,e,t,i){let s=n.ragdoll;if(!s)return!1;s.t+=e;let r=n.model,o=s.y>.02||Math.abs(s.vy)>.4,a=n.x+s.vx*e,h=n.z+s.vz*e;if(i(a,n.z)?s.vx*=-.35:n.x=a,i(n.x,h)?s.vz*=-.35:n.z=h,s.vy-=9.8*e,s.y+=s.vy*e,s.y<=0){s.y=0,s.vy=Math.abs(s.vy)>2.2?-s.vy*.28:0;let f=Math.exp(-e*6);s.vx*=f,s.vz*=f,s.spinX*=Math.exp(-e*7),s.spinZ*=Math.exp(-e*7)}s.tiltX+=s.spinX*e,s.tiltZ+=s.spinZ*e;let l=!o&&Math.hypot(s.vx,s.vz)<.5;if(l){let f=Math.round(s.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;s.tiltX+=(f-s.tiltX)*Math.min(1,e*8),s.tiltZ+=(0-s.tiltZ)*Math.min(1,e*6),s.rest+=e}let d=Math.sin(s.tiltX)>=0?1:-1;if(n.health>0&&s.rest>1.1){s.rising+=e/.65;let f=Math.min(1,s.rising),p=Math.sign(Math.sin(s.tiltX))||1;if(s.tiltX=p*Math.PI/2*(1-f),s.tiltZ*=1-f,f>=1)return n.ragdoll=null,r.root.rotation.set(0,n.angle,0),!1}if(r.root.rotation.set(s.tiltX,n.angle,s.tiltZ),r.root.position.set(n.x,t+s.y+Math.max(0,-Math.cos(s.tiltX)*Math.cos(s.tiltZ))*1.88+Math.hypot(Math.sin(s.tiltX),Math.sin(s.tiltZ))*.31,n.z),o||!l){let f=s.t*13;r.body.position.set(0,0,0),r.body.rotation.set(Math.sin(f*.7)*.25,0,Math.cos(f*.6)*.2),r.arms[0].rotation.set(-1.4+Math.sin(f)*1.1,0,-.6-Math.cos(f*.8)*.5),r.arms[1].rotation.set(-1.2+Math.cos(f*1.1)*1.1,0,.6+Math.sin(f*.9)*.5),r.forearms[0].rotation.set(-.4-Math.sin(f*1.3)*.5,0,0),r.forearms[1].rotation.set(-.4-Math.cos(f*1.2)*.5,0,0),r.legs[0].rotation.set(Math.sin(f*.9)*.9,0,-.2),r.legs[1].rotation.set(-Math.sin(f*.8)*.9,0,.2),r.shins[0].rotation.set(.4+Math.abs(Math.sin(f))*.6,0,0),r.shins[1].rotation.set(.4+Math.abs(Math.cos(f))*.6,0,0),r.pistol.visible=!1,r.rifle&&(r.rifle.visible=!1)}else xa(r,2,d);return r.shadow.visible=!1,!0}var Xu=2.05,tM=5.37,pm=n=>Math.min(Math.abs(n+57),Math.abs(n+19),Math.abs(n-19),Math.abs(n-57));function or(n,e,t,i){let{width:s,length:r}=cs(i),o=Math.sin(t),a=Math.cos(t);for(let h of[-1,1])for(let l of[-1,1]){let d=n+o*(r-.26)*h+a*(s-.09)*l,f=e+a*(r-.26)*h-o*(s-.09)*l;if(Math.min(pm(d),pm(f))>tM||Math.max(Math.abs(d),Math.abs(f))>62.45)return!1}return!0}var Gc=7.15;function xm(n,e=Xu){let t=[];return n.forEach((i,s)=>{let r=n[(s+n.length-1)%n.length],o=n[(s+1)%n.length],a=Math.sign(i[0]-r[0]),h=Math.sign(i[1]-r[1]),l=Math.sign(o[0]-i[0]),d=Math.sign(o[1]-i[1]),f={x:i[0]-h*e-a*Gc,z:i[1]+a*e-h*Gc},p={x:i[0]-d*e+l*Gc,z:i[1]+l*e+d*Gc},m=a===l&&h===d,u={x:i[0]-(m?h:h+d)*e,z:i[1]+(m?a:a+l)*e},v=Math.atan2(a,h),g=Math.atan2(l,d),_=Math.atan2(Math.sin(g-v),Math.cos(g-v)),T={x:i[0],z:i[1],id:i.join(",")};for(let C=0;C<=6;C++){let b=C/6,A=1-b;t.push({x:A*A*f.x+2*A*b*u.x+b*b*p.x,z:A*A*f.z+2*A*b*u.z+b*b*p.z,junction:T,curve:!m,angle:v,turn:_})}}),t}var us=(n,e,t,i)=>[[n,e],[n,i],[t,i],[t,e]],Sa=[us(-57,-57,57,57),us(-57,-19,19,57).reverse(),us(-19,-57,57,19),us(-19,-19,19,19).reverse(),us(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],us(-57,-57,57,57).reverse(),us(-19,-57,57,57).reverse()],nM=[us(-19,-57,19,57),us(-57,19,57,57).reverse()],_m=2.78;function iM(n){return n.flatMap((e,t)=>{let i=n[(t+1)%n.length],s=e[0]===i[0]?1:0,r=1-s,o=rn.filter(a=>a>Math.min(e[s],i[s])&&a<Math.max(e[s],i[s]));return i[s]<e[s]&&o.reverse(),[e,...o.map(a=>r===0?[e[0],a]:[a,e[1]])]})}var qu=[...Sa,...nM].map(iM),Yu=qu.map((n,e)=>xm(n,e>=Sa.length?_m:Xu)),sM=[1,3,1,1,5,5,7,10,2,3];function io(n,e,t=0){let i=Yu[e],s=(sM[e]*7+t)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;si(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+e%4*1.02,stuck:0,routeIndex:e,pass:null,nodes:qu[e],parkTimer:28+(e*17+t*7)%70},n.signal=0,n.stolen=!1,n.abandoned=0}function zs(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=t*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:xt(s*1.9,-1,1),throttle:xt((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function wa(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=cs(n.shape??n.kind),a=n.kind==="bike",h=i;for(let l of e){if(l===n||se(l,n)>20)continue;let d=l.x-n.x,f=l.z-n.z,p=d*s+f*r,m=Math.abs(d*r-f*s),u=cs(l.shape??l.kind,l.angle-n.angle);if(p<.2||m>o.width+u.width+.16)continue;let v=Math.max(0,p-o.length-u.length-(a?.39:.64)),g=Math.max(0,l.vx*s+l.vz*r);h=Math.min(h,g+v*.87)}for(let l of t){if(l.down>0||l.health<=0||l.seated||se(l,n)>11)continue;let d=l.x-n.x,f=l.z-n.z,p=d*s+f*r,m=Math.abs(d*r-f*s);p>0&&m<o.width+.4&&(h=Math.min(h,Math.max(0,p-o.length-.9)*.94))}return h}function ym(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...e.filter(l=>l!==n&&Math.hypot(l.vx,l.vz)<2).map(l=>({other:l,radius:1.05})),...t.filter(l=>l.down<=0&&l.health!==0&&!l.seated).map(l=>({other:l,radius:.43}))].find(({other:l,radius:d})=>{let f=l.x-n.x,p=l.z-n.z,m=f*s+p*r;return m>2.25&&m<13.4&&Math.abs(f*r-p*s)<d+1.05});if(!a)return null;let h=(l,d)=>{let f=l.x-n.x,p=l.z-n.z,m=f*s+p*r;return m>-3&&m<23&&Math.abs(f*r-p*s-d)<2.3};for(let l of[2.72,-2.72]){if(e.some(p=>p!==n&&p!==a.other&&h(p,l))||t.some(p=>p!==a.other&&p.down<=0&&h(p,l)))continue;let d=n.x+s*8+r*l,f=n.z+r*8-s*l;if(Ci(d,f,n.angle,i,n.shape??n.kind)&&Ci((d+n.x)*.5,(f+n.z)*.5,n.angle,i,n.shape??n.kind))return{x:d,z:f}}return null}function vm(n,e,t,i){let s=n.kind==="bike",r=cs(n.shape??n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),h=g=>({along:(g.x-n.x)*o+(g.z-n.z)*a,across:(g.x-n.x)*a-(g.z-n.z)*o}),l=[...e.filter(g=>g!==n).map(g=>({actor:g,...cs(g.shape??g.kind,g.angle-n.angle),moving:!0})),...t.filter(g=>g.health>0&&!g.seated&&!g.down).map(g=>({actor:g,width:.34,length:.34,moving:!1}))].map(g=>({...g,...h(g.actor)})),d=l.filter(({actor:g,along:_,across:T,width:C,length:b,moving:A})=>_>Math.max(s?1.2:2.4,r.length+b-.3)&&_<19&&Math.abs(T)<r.width+C+.16&&(!A||Math.hypot(g.vx,g.vz)<(s?8:6)));d.sort((g,_)=>g.along-_.along);let f=d[0];if(!f||f.along-r.length-f.length<(s?1.85:2.45))return null;let p=r.width+f.width+(s?.23:.38),m=s?Math.max(1.12,p):2.95,u=s?[m,-m,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[m,-m,3.45,-3.45],v=f.along+r.length+f.length+(s?3:4.1);for(let g of u){if(Math.abs(f.across-g)<p)continue;let _=r.length+(s?3.9:5.8);if(!l.every(x=>{if(x===f)return!0;let w=x.moving?Math.max(0,-x.actor.vx*o-x.actor.vz*a):0;return x.along<-r.length-x.length-.2||x.along>v+_+Math.min(10,w)||Math.abs(x.across-g)>r.width+x.width+(s?.25:.46)}))continue;let C=Math.max(s?2.4:3.8,Math.min(s?5:6.1,f.along-r.length+1.2)),b=Xn(n.x,n.z),A=Math.ceil(v/(s?.72:.92)),S=!0;for(let x=1;x<=A;x++){let w=x*v/A,D=g*Math.min(1,w/C),L=n.x+o*w+a*D,I=n.z+a*w-o*D,k=s?.27:.9;if(Math.abs(Xn(L+a*k,I-o*k)-b)>=.08||Math.abs(Xn(L-a*k,I+o*k)-b)>=.08||!Ns({x:L,z:I,angle:n.angle,kind:n.kind,shape:n.shape},i,e,n)){S=!1;break}}if(S)return{x:n.x,z:n.z,sx:o,sz:a,offset:g,obstacle:f.actor,phase:"out",age:0,clearAfter:r.length+f.length+(s?.9:1.2)}}return null}function rM(n,e,t,i,s=[]){e.age+=i;let r=n.kind==="bike",o=cs(n.shape??n.kind),{sx:a,sz:h,offset:l}=e,d=(n.x-e.x)*a+(n.z-e.z)*h,f=(n.x-e.x)*h-(n.z-e.z)*a,p=(e.obstacle.x-e.x)*a+(e.obstacle.z-e.z)*h;if(e.age>(r?10:13)||e.phase==="merge"&&Math.abs(f)<.53)return null;e.phase==="out"&&Math.abs(f-l)<(r?.28:.55)&&(e.phase="pass"),e.phase!=="merge"&&d>p+e.clearAfter&&t.every(b=>{if(b===n)return!0;let A=cs(b.shape??b.kind,b.angle-Math.atan2(a,h));return Math.abs((b.x-e.x)*h-(b.z-e.z)*a)>o.width+A.width+.3||Math.abs((b.x-n.x)*a+(b.z-n.z)*h)>o.length+A.length+1.25})&&(e.phase="merge");let m=e.phase==="merge"?0:l,u=t.some(C=>{if(C===n||C===e.obstacle)return!1;let b=(C.x-n.x)*a+(C.z-n.z)*h,A=(C.x-e.x)*h-(C.z-e.z)*a,S=cs(C.shape??C.kind,C.angle-Math.atan2(a,h));return b>0&&b<o.length+S.length+2.7&&Math.abs(A-m)<o.width+S.width+.28})||s.some(C=>{if(C.health<=0||C.seated||C.down)return!1;let b=(C.x-n.x)*a+(C.z-n.z)*h,A=(C.x-e.x)*h-(C.z-e.z)*a;return b>0&&b<o.length+2.1&&Math.abs(A-m)<o.width+.45}),v=e.phase==="out"?r?2.3:4.4:r?4.8:7,g={x:e.x+a*(d+v)+h*m,z:e.z+h*(d+v)-a*m},_=e.phase==="out"?r?4.5:4.8:r?8.1:6.5,T=zs(n,g,u?0:_);return u&&(T.throttle=0),T}function ba(n,e,t,i,s){return n.driver?.cityTraffic&&!or(e.x,e.z,e.angle,n.shape??n.kind)?!1:Ns(e,s,t,n)&&i.every(r=>r.health<=0||r.seated||r.down||!ls(e,r.x,r.z,.26))}function oM(n,e,t,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=t.filter(d=>d!==n&&se(n,d)<29),h=null,l=-1/0;for(let d of[0,-.62,.62,-1,1]){let f={x:n.x,z:n.z,angle:n.angle,kind:n.kind,shape:n.shape},p=0;for(let _=0;_<(r?13:19)&&(f.angle-=d*.18*(r?.75:.56),f.x-=Math.sin(f.angle)*.18,f.z-=Math.cos(f.angle)*.18,!!ba(n,f,t,i,s));_++)p+=.18;if(p<(r?.9:1.35))continue;ba(n,f,t,i,s)||(f.x+=Math.sin(f.angle)*.18,f.z+=Math.cos(f.angle)*.18,f.angle+=d*.18*(r?.75:.56));let m={...f},u=0;for(let _=0;_<27;_++){let T=Math.atan2(e.x-m.x,e.z-m.z);if(m.angle=bn(m.angle,T,r?.13:.092),m.x+=Math.sin(m.angle)*.24,m.z+=Math.cos(m.angle)*.24,!ba(n,m,t,i,s))break;u+=.24}let v=r&&vm(f,a,i,s),g=u*.67+(se(n,e)-se(m,e))*.38+p*.31-Math.abs(d)*.12+(v?4.6:0);g>l&&(l=g,h={steer:d,pace:o,distance:Math.max(.7,p-.26),age:0,x:n.x,z:n.z})}return h}function Zu(n,e,t,i,s,r,o,a,h=!0){let l=n.kind==="bike",d=e.recoverPosition;e.recoverPosition={x:n.x,z:n.z};let f=d&&se(d,n)>o*.57;if(e.recoverRetry=Math.max(0,(e.recoverRetry??0)-o),e.maneuver){let m=e.maneuver;m.age+=o;let u=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),v={x:n.x-Math.sin(n.angle)*u,z:n.z-Math.cos(n.angle)*u,angle:n.angle,kind:n.kind,shape:n.shape};return se(n,m)>=m.distance||m.age>(l?2.4:2.8)||!ba(n,v,i,s,r)?(e.maneuver=null,e.recoverWait=0,e.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:m.steer,throttle:n.speed>-m.pace?xt((n.speed+m.pace)*-.64,-.54,-.05):0,brake:!1}}e.recoverWait=!h||f||se(n,t)<1.2?0:(e.recoverWait??0)+o;let p=l?1.08:1.45;return e.recoverRetry>0||e.recoverWait<p||n.integrity<=0?a:(e.maneuver=oM(n,t,i,s,r),e.maneuver?(e.recoverWait=0,{steer:e.maneuver.steer,throttle:-.47,brake:!1}):(e.recoverRetry=.85,a))}var Mm=n=>Math.atan2(Math.sin(n),Math.cos(n)),mm=new Map,Hu=0,aM=(n,e)=>[n,e],gm=rn.flatMap((n,e)=>rn.map((t,i)=>({x:n,z:t,i:e,j:i}))),hs=(n,e)=>n+","+e;function lM(n){let e=n.driver,t=e?.nodes;if(!t)return null;let i=t.length,s=Math.floor(e.next/7),o=(e.next%7>=3?s+1:s)%i,a=t[o],h=t[(o+1)%i],l=t[(o+i-1)%i],d=t[(o+2)%i];mm.set(hs(...a)+">"+hs(...h),Hu+35);let f=A=>gm.find(S=>S.x===A[0]&&S.z===A[1]),p=f(a),m=f(h);if(!p||!m)return null;let u=new Map([[hs(p.x,p.z),null]]),v=[p],g=(A,S)=>(mm.get(hs(A.x,A.z)+">"+hs(S.x,S.z))??0)>Hu||S===m&&A.x===d[0]&&A.z===d[1]||A===p&&S.x===l[0]&&S.z===l[1];for(let A=0;A<v.length;A++){let S=v[A];if(S===m)break;for(let[x,w]of[[1,0],[-1,0],[0,1],[0,-1]]){let D=gm.find(L=>L.i===S.i+x&&L.j===S.j+w);!D||u.has(hs(D.x,D.z))||g(S,D)||(u.set(hs(D.x,D.z),S),v.push(D))}}if(!u.has(hs(m.x,m.z)))return null;let _=[];for(let A=m;A;A=u.get(hs(A.x,A.z)))_.unshift(aM(A.x,A.z));if(_.length<4)return null;let T=[];for(let A=2;A<i;A++)T.push(t[(o+A)%i]);let C=[..._,...T];return{route:xm(C,e.routeIndex>=Sa.length?_m:Xu),nodes:C,index:0}}function Wu(n){let e=n.driver;if(!e)return;let t=Math.sin(n.angle),i=Math.cos(n.angle),s=e.routeIndex>=Sa.length,r=null,o=1/0;Yu.forEach((a,h)=>{if(h>=Sa.length===s)for(let l=0;l<a.length;l++){let d=a[l],f=d.x-n.x,p=d.z-n.z,m=Math.hypot(f,p);if(m>42||f*t+p*i<.5)continue;let u=a[(l+1)%a.length],v=Math.hypot(u.x-d.x,u.z-d.z)>.05?Math.atan2(u.x-d.x,u.z-d.z):d.angle,g=Math.abs(Mm(v-n.angle)),_=m+g*8+(d.curve?2:0);_<o&&(o=_,r={route:a,index:l,routeIndex:h})}}),r&&(e.route=r.route,e.next=r.index,e.routeIndex=r.routeIndex,e.nodes=qu[r.routeIndex],e.pass=null,e.stuck=0,e.recoverWait=0)}function cM(n,e,t,i,s,r,o=Math.PI-.32){if(e.t+=r,e.age+=r,e.turned+=Mm(n.angle-e.prev)*e.dir,e.prev=n.angle,e.turned>=o||e.step>4||e.age>16)return null;let h=e.step%2===1?-1:1,l={x:n.x+Math.sin(n.angle)*h*1.2,z:n.z+Math.cos(n.angle)*h*1.2,angle:n.angle,kind:n.kind,shape:n.shape},d=!ba(n,l,t,i,s),f=[1.45,2.35,o,o,o][e.step];if((e.turned>=f||d&&e.t>.35||e.t>3.2)&&(e.step++,e.t=0),e.step>4)return null;let p=e.step%2===1;return{steer:p?-e.dir:e.dir,throttle:xt(((p?-2.6:3.1)-n.speed)*.8,-.62,.62),brake:!1}}function hM(n,e,t,i,s){if(e.curve)return null;let r=Math.sin(n.angle),o=Math.cos(n.angle),a=Math.abs(o)>.97,h=Math.abs(r)>.97;if(!a&&!h)return null;let l=h?Math.sign(r):0,d=a?Math.sign(o):0,f=a?Math.round(-Math.cos(n.angle)):0,p=h?Math.round(Math.sin(n.angle)):0,m=b=>rn.reduce((A,S)=>Math.abs(A-b)<Math.abs(S-b)?A:S),u=a?m(n.x)+f*4.28:n.x+l*15,v=h?m(n.z)+p*4.28:n.z+d*15,g=a?v:u;if(Math.abs(g)>54||rn.some(b=>Math.abs(b-g)<12.5))return null;let _=Math.atan2(l,d),T={x:u,z:v,angle:_,hx:l,hz:d,rx:f,rz:p},C=n.shape??n.kind;return!or(u,v,_,C)||!Ci(u,v,_,s,C)||t.some(b=>b!==n&&se(b,T)<7.2)||i.some(b=>b.health>0&&se(b,T)<3.2)?null:T}function uM(n,e,t,i,s,r,o){let a=e.parking;a.age+=r;let h=a.slot,l=t.vehicles,d={steer:0,throttle:0,brake:!0};if(a.phase==="approach"){n.signal=-1;let f=(h.x-n.x)*h.hx+(h.z-n.z)*h.hz,p=se(n,h),m={x:h.x-h.hx*5.2-h.rx*1,z:h.z-h.hz*5.2-h.rz*1},u=f>6.8?m:h,v=Math.max(1.3,Math.min(5.2,p*.55+1)),g=wa(n,l,i,v);if(d=zs(n,u,g),f<-1||a.age>34)return e.parking=null,e.parkTimer=60,n.signal=0,Wu(n),!1;p<.9&&Math.abs(n.speed)<1.6&&(a.phase="parked",a.age=0,a.wait=16+((n.x*7+n.z*3)%1+1)%1*26,n.signal=0)}else if(a.phase==="parked"){n.signal=0;let f=bn(n.angle,h.angle,r*.9);Ci(n.x,n.z,f,s,n.shape??n.kind)&&or(n.x,n.z,f,n.shape??n.kind)&&(n.angle=f),d={steer:0,throttle:0,brake:!0};let p=h.hx,m=h.hz,u=l.some(v=>v!==n&&Math.hypot(v.vx,v.vz)>2&&(n.x-v.x)*p+(n.z-v.z)*m>0&&(n.x-v.x)*p+(n.z-v.z)*m<16&&Math.abs((v.x-n.x)*-m+(v.z-n.z)*p)<3.4);a.age>a.wait&&!u&&(a.phase="leave",a.age=0)}else{n.signal=1;let f={x:h.x+h.hx*6.5+h.rx*-2.3,z:h.z+h.hz*6.5+h.rz*-2.3},p=wa(n,l,i,Math.min(4.6,2+a.age*1.4));if(d=zs(n,f,p),se(n,f)<2||a.age>9||(n.x-h.x)*h.hx+(n.z-h.z)*h.hz>5.5)return e.parking=null,e.parkTimer=70,n.signal=0,Wu(n),Fn(n,r,d,s,l,o),!0}return Fn(n,r,d,s,l,o),!0}function bm(n,e,t,i,s,r,o){Hu+=s;for(let[h,l]of r)(!l.driver||l.integrity<=0||se(l,l.driver.route[l.driver.next].junction)>11)&&r.delete(h);let a=0;for(let h of n)h.driver?.parking&&a++;for(let h of n){let l=h.driver;if(!l||h.burning||h.wrecked||h.integrity<=0){h.signal=0,h!==e.player&&Math.hypot(h.vx,h.vz)>.06?Fn(h,s,{throttle:0,steer:0,brake:!0},i,e.vehicles):h!==e.player&&(h.impact=Math.max(0,h.impact-s*21));continue}let{route:d}=l,f=e.keepToStreet?or:null;if(l.cityTraffic=!!f,l.parking&&uM(h,l,e,t,i,s,f)){l.stuck=0;continue}l.passRetry=(l.passRetry??0)-s,l.detourRetry=Math.max(0,(l.detourRetry??0)-s);let p=h.kind==="bike";if(l.uturn){let B=cM(h,l.uturn,e.vehicles,t,i,s);if(h.signal=1,B){Fn(h,s,B,i,e.vehicles,f);continue}l.uturn=null,l.uturnRetry=40,h.signal=0,Wu(h);continue}l.uturnRetry=Math.max(0,(l.uturnRetry??0)-s);let m=d[l.next],u=Math.sin(h.angle),v=Math.cos(h.angle);for(let B=0;!l.maneuver&&B<6;B++){let V=m.x-h.x,ne=m.z-h.z;if(Math.hypot(V,ne)>2.55&&(V*u+ne*v>0||Math.hypot(V,ne)>5))break;l.next=(l.next+1)%d.length,m=d[l.next]}let{junction:g}=m,_=se(h,g),T=r.get(g.id);!T&&_<7.1&&r.set(g.id,h);let C=l.cruise*(p?1.13:1),b=l.style??(l.routeIndex%3===0?"cautious":l.routeIndex%3===1?"professional":"hurried");l.style=b;let A=b==="cautious"?.78:b==="hurried"?1.12:1,S=(m.curve&&_<12?Math.min(p?5.9:4.7,C):C)*A,x=T&&T!==h&&T.integrity>0&&se(T,g)<7.1,w=T&&T!==h&&_<15&&(x||_>se(T,g));w&&(S=Math.min(S,Math.max(0,_-7.4)*.96));let D=(g.x-h.x)*u+(g.z-h.z)*v,L=!1;if(o){let B=o.state(g.id,Math.abs(u)>Math.abs(v)?"x":"z"),V=7.6+(h.halfLength??2.4);if(B!=="green"&&D>V-.5&&D<V+40){let ne=D-V;(B==="red"||ne>h.speed*h.speed/11)&&(S=Math.min(S,Math.max(0,ne)*.8),L=!0)}}let I=6.4,k=I+1.2+(h.halfLength??2.4);if(D>k-1.6&&D<k+22&&Math.max(Math.abs(u),Math.abs(v))>.93){let B=g.x-Math.sign(Math.round(u))*I,V=g.z-Math.sign(Math.round(v))*I;t.some(Q=>Q.health>0&&!Q.seated&&!Q.down&&(Math.abs(u)>Math.abs(v)?Math.abs(Q.x-B)<2.3&&Math.abs(Q.z-V)<5.7:Math.abs(Q.z-V)<2.3&&Math.abs(Q.x-B)<5.7))&&(S=Math.min(S,Math.max(0,D-k)*.7),L=!0)}let N=0;m.curve&&D>0&&_<26&&(N=Math.sign(m.turn));let O=wa(h,e.vehicles,t,S),X=b==="hurried"?.86:b==="cautious"?.66:.78;l.passRetry<=0&&!l.pass&&!l.maneuver&&!w&&!L&&O<S*(p?.88:X)&&(!m.curve||_>(p?8:11))&&(l.pass=vm(h,e.vehicles,t,i),l.passRetry=l.pass?.age??(p?.1:.55+l.routeIndex%4*.13));let q=l.pass?rM(h,l.pass,e.vehicles,s,t):null;q?N=(l.pass.phase==="merge"?-1:1)*Math.sign(l.pass.offset):l.pass=null,h.signal=N;let ee=q??zs(h,m,O);!q&&O<.4&&(ee.throttle=0);let ie=h.x,K=h.z;if(f&&l.stuck>5&&!L&&!w&&!l.maneuver&&l.detourRetry===0){l.detourRetry=6;let B=fM(h,m)??lM(h);B&&(l.route=B.route,l.next=B.index,B.nodes&&(l.nodes=B.nodes),l.pass=null,l.recoverWait=0,l.stuck=0)}if(f&&!p&&l.stuck>8.5&&!L&&!w&&!l.maneuver&&!l.uturn&&l.uturnRetry<=0&&(l.uturn={prev:h.angle,turned:0,dir:1,t:0,age:0,step:0}),l.parkTimer-=s,l.parkTimer<=0&&f&&!p){if(l.parkWish=(l.parkWish??30)-s,l.parkLook=(l.parkLook??0)-s,l.parkWish<=0)l.parkTimer=60+((h.x*13+h.z*7)%1+1)%1*80,l.parkWish=null,l.parkLook=0;else if(l.parkLook<=0&&(l.parkLook=.5,a<2&&!l.pass&&!l.maneuver&&!L&&!w&&!h.lamps?.length)){let B=hM(h,m,e.vehicles,t,i);if(B){l.parking={slot:B,phase:"approach",age:0},l.parkWish=null,a++;continue}}}let F=Zu(h,l,m,e.vehicles,t,i,s,ee,!L&&!w);l.maneuver&&(l.pass=null),Fn(h,s,F,i,e.vehicles,f),l.stuck=!L&&Math.hypot(h.x-ie,h.z-K)<s*.62?l.stuck+s:L?l.stuck:Math.max(0,l.stuck-s*2)}}function fM(n,e){if(se(n,e.junction)>15)return null;let t=Math.sin(n.angle),i=Math.cos(n.angle),s=null,r=1/0;for(let o of Yu)for(let a=0;a<o.length;a++){let h=o[a],l=o[(a+3)%o.length];if(h.junction.id!==e.junction.id||se(l,e)<4)continue;let d=h.x-n.x,f=h.z-n.z,p=Math.hypot(d,f);if(p<3||p>13||d*t+f*i<0||se(l,e)<se(h,e))continue;let m=p+Math.abs(d*i-f*t)*1.5;m<r&&(r=m,s={route:o,index:a})}return s}function Vc(n,e,t,i){return se(n,t)>13&&Ci(n.x,n.z,n.angle,i,n.shape??n.kind)&&e.every(s=>se(s,n)>5.2)}var dM=[];function Ju(n,e,t,i,s){let r=-1/0,o=1/0,a=-1,h=-1;for(let l=0;l<3;l++){let d=n[l],f=e[l],p=t[l],m=t[l+3];if(Math.abs(f)<1e-5){if(d<p||d>m)return 1/0;continue}let u=1/f,v=(f>0?p-d:m-d)*u,g=(f>0?m-d:p-d)*u;if(v>r&&(r=v,a=l*2+ +(f<0)),g<o&&(o=g,h=l*2+ +(f>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=h,Math.max(0,o))}function pM(n,e,t,i){if(!i)return e[1]<-1e-5&&n[1]>=0?-n[1]/e[1]:1/0;if(e[1]>1e-5)return 1/0;let s=o=>n[1]+e[1]*o-i(n[0]+e[0]*o,n[2]+e[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,t/12);if(r<1e-5)return 1/0;for(let o=0;o<t;o+=r){let a=o,h=Math.min(o+r,t);if(!(s(h)>0)){for(let l=0;l<10;l++){let d=(a+h)*.5;s(d)>0?a=d:h=d}return h}}return 1/0}function Sm(n,e,t,i,s,r){let o=s,a=null,h=null,l=null,d=-1,f=0,p={face:-1};for(let u of t){if(u.off)continue;let v=u.bounds??[u.x-u.w*.5,u.y0??u.base??0,u.z-u.d*.5,u.x+u.w*.5,u.h,u.z+u.d*.5],g=Ju(n,e,v,o,p);g>=o||(o=g,h=u,l="solid",d=p.face)}let m=pM(n,e,o,r);m<o&&(o=m,h=null,l="ground",d=3);for(let u of i){let v,g=u.oriented;if(g){let{center:_,half:T,angle:C}=g,b=n[0]-_[0],A=n[1]-_[1],S=n[2]-_[2],x=Math.sin(C),w=Math.cos(C),D=[w*b-x*S,A,x*b+w*S],L=[w*e[0]-x*e[2],e[1],x*e[0]+w*e[2]];v=Ju(D,L,[-T[0],-T[1],-T[2],T[0],T[1],T[2]],o,p)}else if(u.bounds)v=Ju(n,e,u.bounds,o,p);else continue;v>=o||(o=v,a=u,h=null,l="target",d=p.face,f=g?.angle??0)}return{distance:o,hit:a,solid:h,surface:l,face:d,rotation:f}}function Ta(n,e,t,i,s=52){let{distance:r,hit:o}=Sm(n,e,t,i,s,null);return{distance:r,hit:o}}function Hc(n,e,t,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:h,surface:l,face:d,rotation:f}=Sm(n,e,t,i,s,r),p=n.map((u,v)=>u+e[v]*o),m=null;if(d!==-1&&(m=[0,0,0],m[Math.floor(d/2)]=d%2?1:-1,f)){let[u,v,g]=m,_=Math.sin(f),T=Math.cos(f);m=[T*u+_*g,v,-_*u+T*g]}return{distance:o,hit:a,point:p,normal:m,solid:h,surface:l}}function wm(n,e,t,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...e),h=a>1e-5?e.map(u=>u/a):[0,0,1],l=Hc(n,h,i,s,r,{ground:o}),d=l.point.map((u,v)=>u-t[v]),f=d.reduce((u,v,g)=>u+v*h[g],0),p=Math.hypot(...d),m=f>.025&&p>1e-5?d.map(u=>u/p):h;return{direction:m,sight:l,impact:Hc(t,m,i,s,r,{ground:o})}}function so(n,e,t){let i=e.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return Ta(n,r,t,dM,s).distance>=s-.01}function ro(n,e,t,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let h=e.x-n.x,l=e.z-n.z,d=Math.hypot(h,l),f=(n.ground??0)+r,p=(e.ground??0)+o;if(Math.hypot(d,p-f)>s)return!1;if(d>1e-5){let m=n.angle??0;if((Math.sin(m)*h+Math.cos(m)*l)/d<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(p-f,d)+(n.pitch??0))>a*.5?!1:so([n.x,f,n.z],[e.x,p,e.z],t)}function Tm(n,e,t,i){let s=null,r=1.86;for(let o of e){if(o.down>0)continue;let a=o.x-n.x,h=o.z-n.z,l=Math.hypot(a,h),d=Math.sin(n.angle)*a+Math.cos(n.angle)*h;l>=r||d<l*.36||!so([n.x,t+1,n.z],[o.x,t+1,o.z],i)||(s=o,r=l)}return s}var oo=44,ar=12,Ku=new J(0,1,0),mM=new J(0,0,1),Us=new ln,fs=new Pt,Gi=new J,Wc=new J,Xc=new J,gM=new ut;function xM(){let e=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),h=Math.hypot(r,o),l=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,d=h<.35+Math.sin(a*4)*.06,f=(s*239+i*167)%19/19,p=d?9+f*27:101+f*64,m=d?.99:Math.min(.84,Math.max(0,(l-h)*3.6))*(.51+f*.49),u=(i*32+s)*4;e[u]=p,e[u+1]=p*.92,e[u+2]=p*.81,e[u+3]=Math.round(m*255)}let t=new qs(e,32,32,ii);return t.colorSpace=gn,t.magFilter=Mn,t.minFilter=Mn,t.needsUpdate=!0,t}function qc(n,e,t,i){let s=new Vn(e,t,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(bc),n.add(s),s}function _M(n){let e=new Yn(1,1),t=new bs(new Float32Array(oo),1);t.setUsage(bc),e.setAttribute("markAlpha",t);let i=new Vt({map:xM(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=qc(n,e,i,oo);return s.renderOrder=3,{mesh:s,fade:t}}function Am(n){let{mesh:e,fade:t}=_M(n),i=new Vt({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=qc(n,new Hn(.015,.015,1,5),i,ar),r=new Vt({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=qc(n,new ts(1,0),r,ar),a=new Vt({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),h=qc(n,new ns(1),a,ar),l=Array.from({length:ar},()=>({age:1/0,distance:0,point:new J,start:new J,direction:new J,surface:null})),d=Array.from({length:oo},()=>({time:0,life:0,point:new J,normal:new J,attachment:null,radius:0})),f=0,p=0,m=new Pt().makeScale(0,0,0),u=new tt(16768142),v=new tt(16754545);function g(){for(let C=0;C<ar;C++)l[C].age=1/0,s.setMatrixAt(C,m),o.setMatrixAt(C,m),h.setMatrixAt(C,m);for(let C=0;C<oo;C++)d[C].time=0,d[C].attachment=null,e.setMatrixAt(C,m),t.setX(C,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=h.instanceMatrix.needsUpdate=e.instanceMatrix.needsUpdate=t.needsUpdate=!0,f=p=0}g();function _(C,b,{enemy:A=!1,mark:S=b.surface==="solid"||b.surface==="ground",attach:x=null}={}){let w=l[f],D=f;if(f=(f+1)%ar,w.start.fromArray(C),w.point.fromArray(b.point),w.distance=w.start.distanceTo(w.point),w.direction.subVectors(w.point,w.start).normalize(),w.surface=b.surface,w.age=0,s.setColorAt(D,A?v:u),s.instanceColor.needsUpdate=!0,S&&b.normal&&b.surface){let L=d[p];p=(p+1)%oo,L.life=(b.surface==="ground"?8:13)+Math.random()*4,L.time=L.life,L.point.copy(w.point),L.normal.fromArray(b.normal).normalize(),L.attachment=x,L.radius=.053+Math.random()*.031,x&&(x.updateWorldMatrix(!0,!1),x.worldToLocal(L.point),L.normal.transformDirection(fs.copy(x.matrixWorld).invert()))}}function T(C){let b=!1,A=!1;for(let S=0;S<ar;S++){let x=l[S];if(!Number.isFinite(x.age))continue;b=!0,x.age+=C;let w=234,D=Math.min(x.distance,x.age*w+1.7),L=Math.max(0,x.age*w-3.1),I=D-L;if(I>.018){Gi.copy(x.start).addScaledVector(x.direction,(D+L)*.5),Us.setFromUnitVectors(Ku,x.direction);let N=Math.min(1,I/1.3);fs.compose(Gi,Us,Wc.set(N,I,N)),s.setMatrixAt(S,fs)}else s.setMatrixAt(S,m);if(x.age<.071){let N=Math.max(.025,.084-x.age*.78);Us.setFromUnitVectors(Ku,x.direction),Gi.copy(x.start).addScaledVector(x.direction,.052),fs.compose(Gi,Us,Wc.set(N,N*2.2,N)),o.setMatrixAt(S,fs)}else o.setMatrixAt(S,m);let k=x.age-x.distance/w;if(x.surface&&k>=0&&k<.13){let N=Math.max(.006,.041-k*.27);Gi.copy(x.point).addScaledVector(x.direction,-(.039+k*.38)),Us.setFromUnitVectors(Ku,x.direction),fs.compose(Gi,Us,Wc.set(N,N*2.14,N)),h.setMatrixAt(S,fs)}else h.setMatrixAt(S,m);x.age>x.distance/w+.14&&(x.age=1/0)}for(let S=0;S<oo;S++){let x=d[S];if(!(x.time<=0)){if(A=!0,x.time-=C,x.time<=0||x.attachment&&!x.attachment.visible){x.time=0,x.attachment=null,e.setMatrixAt(S,m),t.setX(S,0);continue}Gi.copy(x.point),Xc.copy(x.normal),x.attachment&&(x.attachment.updateWorldMatrix(!0,!1),Gi.applyMatrix4(x.attachment.matrixWorld),Xc.applyNormalMatrix(gM.getNormalMatrix(x.attachment.matrixWorld))),Gi.addScaledVector(Xc,.014),Us.setFromUnitVectors(mM,Xc),fs.compose(Gi,Us,Wc.set(x.radius,x.radius,x.radius)),e.setMatrixAt(S,fs),t.setX(S,Math.min(1,x.time*.57))}}b&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=h.instanceMatrix.needsUpdate=!0),A&&(e.instanceMatrix.needsUpdate=t.needsUpdate=!0)}return{emit:_,update:T,reset:g}}var ao=.42,lr=.145,Em=n=>.94*n,$u=n=>n*n*(3-2*n),Aa=(n,e,t)=>n+(e-n)*t;function yM(n){return n<.065?-.32*$u(n/.065):n<lr?Aa(-.32,1,$u((n-.065)/(lr-.065))):n<.182?Aa(1,.89,(n-lr)/(.182-lr)):.89*(1-$u((n-.182)/(ao-.182)))}function ju(n,{aim:e=!1,punch:t=0,pitch:i=0,hand:s=0,walking:r=!1}={}){if(!e&&t<=0)return;let o=n.arms[s],a=n.arms[1-s],h=n.forearms[s],l=n.forearms[1-s],d=s===0?1:-1,f=t>0?yM(xt(ao-t,0,ao)):0,p=Math.max(0,f),m=Math.max(0,-f),u=xt(i,-.64,.53)*.62,v=.07+p*.2-m*.08;n.body.rotation.set(v,d*(.12+p*.46-m*.52),d*(-.02-p*.05)),n.body.position.y+=Em(1-Math.cos(v))-.04-p*.03,n.body.position.z+=Em(-Math.sin(v))+p*.12;let[g,_]=n.legs,[T,C]=n.shins,b=s===0?g:_,A=s===0?_:g,S=s===0?T:C,x=s===0?C:T;r||(A.rotation.set(-.32-p*.08,0,0),x.rotation.set(.34,0,0),b.rotation.set(.26+p*.16,0,0),S.rotation.set(.18-p*.1,0,0)),o.rotation.set(Aa(-.86,-1.66+u,p)+m*.7,d*(.1-p*.08),d*Aa(.24,-.04,p)-d*m*.25),h.rotation.set(Aa(-1.62,-.04,p)-m*.2,0,d*(.1-p*.1)),a.rotation.set(-.98+p*.06,-d*.12,-d*.22),l.rotation.set(-1.78,0,-d*.08),n.pistol.visible=!1}function Ye(n){return document.getElementById(n)}function Cm(n,e){let t=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Ye("stick"),h=Ye("nub"),l=Ye("look"),d=Ye("game"),f=Ye("view"),p=-1,m=-1,u=[],g=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",_=N=>{g=N,Ye("touch").hidden=N!=="touch",d.classList.toggle("touching",N==="touch")};_(g);let T=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","KeyB","Digit1","Digit2","Digit3","Digit4","Escape"]),C="",b=0,A=!1;window.addEventListener("keydown",N=>{if(!(!T.has(N.code)||N.target instanceof HTMLSelectElement&&!e())){if((e()||N.code==="Escape")&&N.preventDefault(),N.code==="Escape"){N.repeat||n();return}if(e()&&(_("keyboard"),t.add(N.code),!N.repeat)){N.code==="KeyE"&&i.add("interact"),N.code==="KeyF"&&i.add("fire"),N.code==="KeyR"&&i.add("punch"),N.code==="KeyG"&&i.add("recruit"),N.code==="KeyV"&&i.add("weapon"),N.code==="Space"&&i.add("jump"),N.code==="KeyB"&&i.add("sell");let O={Digit1:"follow",Digit2:"wait",Digit3:"attack"};O[N.code]&&(C=O[N.code])}}}),window.addEventListener("keyup",N=>{N.code==="Digit4"&&t.has("Digit4")&&!A&&(C="dealer"),t.delete(N.code)});function S(){t.clear(),b=0,A=!1,C="",i.clear(),s.clear(),o.x=0,o.y=0,h.style.transform="",p=-1,m=-1,r.x=0,r.y=0,r.aim=!1,Ye("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",S),f.addEventListener("contextmenu",N=>N.preventDefault()),f.addEventListener("wheel",N=>{!e()||!N.deltaY||(N.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(x),x=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let x=0;f.addEventListener("pointerdown",N=>{e()&&N.pointerType==="touch"&&_("touch")}),window.addEventListener("mousedown",N=>{if(!(!e()||document.pointerLockElement!==f&&(!(N.target instanceof Node)||!f.contains(N.target)))){if(N.button===0&&document.pointerLockElement!==f&&f.requestPointerLock){let O=f.requestPointerLock();O&&O.catch(()=>{})}_("keyboard"),N.button===0&&(i.add("fire"),s.add("mouseFire")),N.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",N=>{N.button===0&&s.delete("mouseFire"),N.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",N=>{!e()||g!=="keyboard"||N.pointerType==="touch"||(document.pointerLockElement===f||N.target===f||f.contains(N.target))&&(r.x+=N.movementX,r.y+=N.movementY)});function w(N){let O=a.getBoundingClientRect(),X=N.clientX-O.left-O.width/2,q=N.clientY-O.top-O.height/2,ee=O.width*.37,ie=Math.max(ee,Math.hypot(X,q));o.x=X/ie,o.y=q/ie,h.style.transform="translate("+o.x*ee+"px,"+o.y*ee+"px)"}a.addEventListener("pointerdown",N=>{p===-1&&(_("touch"),p=N.pointerId,a.setPointerCapture(N.pointerId),w(N))}),a.addEventListener("pointermove",N=>{N.pointerId===p&&w(N)}),a.addEventListener("lostpointercapture",N=>{N.pointerId===p&&(p=-1,o.x=0,o.y=0,h.style.transform="")});let D=0,L=0;l.addEventListener("pointerdown",N=>{m===-1&&(m=N.pointerId,D=N.clientX,L=N.clientY,l.setPointerCapture(N.pointerId))}),l.addEventListener("pointermove",N=>{N.pointerId===m&&(r.x+=(N.clientX-D)*1.45,r.y+=(N.clientY-L)*1.45,D=N.clientX,L=N.clientY)}),l.addEventListener("lostpointercapture",N=>{N.pointerId===m&&(m=-1)});let I=Ye("gang-menu");for(let N of I.querySelectorAll("button"))N.addEventListener("pointerdown",O=>{O.preventDefault(),C=N.dataset.order??"",I.hidden=!0,Ye("gang").setAttribute("aria-expanded","false")});Ye("gang").addEventListener("pointerdown",N=>{N.preventDefault(),_("touch"),I.hidden=!I.hidden,Ye("gang").setAttribute("aria-expanded",String(!I.hidden))});for(let N of["interact","fire","aim","sprint","punch","jump","weapon","recruit","sell"]){let O=Ye(N);O.addEventListener("pointerdown",X=>{X.preventDefault(),_("touch"),O.setPointerCapture(X.pointerId),N==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),O.setAttribute("aria-pressed",String(s.has("aim")))):N==="sprint"||N==="fire"?(s.add(N),N==="fire"&&i.add(N)):i.add(N)}),(N==="sprint"||N==="fire")&&O.addEventListener("lostpointercapture",()=>s.delete(N))}let k=!1;return{clear:S,read(N,O){k!==N&&(s.delete("aim"),Ye("aim").setAttribute("aria-pressed","false"),k=N);let X=Array.from(navigator.getGamepads?.()??[]).find(ae=>ae?.connected&&ae.mapping==="standard"),q=X?.buttons.map(ae=>ae.pressed||ae.value>.45)??[],ee=ae=>q[ae]&&!u[ae],ie=Array.from({length:4},(ae,W)=>Rp(X?.axes[W]));(q.some(Boolean)||ie.some(ae=>Math.abs(ae)>.1))&&_("pad"),(ee(9)||!e()&&ee(0))&&n();let F=Number(t.has("KeyD")||t.has("ArrowRight"))-Number(t.has("KeyA")||t.has("ArrowLeft")),B=Number(t.has("KeyW")||t.has("ArrowUp"))-Number(t.has("KeyS")||t.has("ArrowDown")),V=(X?.buttons[7]?.value??0)-(X?.buttons[6]?.value??0),ne=t.has("Digit4")||!!q[5];ne&&!A?(b+=O,b>=.55&&(C="undealer",A=!0)):ne||(u[5]&&!A&&(C="dealer"),b=0,A=!1);let Q={x:xt(F+o.x+ie[0],-1,1),y:xt(B-o.y+(N&&Math.abs(V)>.05?V:-ie[1]),-1,1),lookX:xt(r.x,-140,140)*.0032+ie[2]*O*2.45,lookY:xt(r.y,-140,140)*.0028+ie[3]*O*1.8,aim:!N&&(r.aim||t.has("KeyQ")||s.has("aim")||!!q[6]),run:s.has("sprint")||t.has("ShiftLeft")||t.has("ShiftRight")||!!q[0],brake:t.has("Space")||s.has("sprint")||!!q[2],interact:i.has("interact")||ee(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!N&&!!q[7],punch:i.has("punch")||ee(1),recruit:i.has("recruit")||ee(12),weapon:i.has("weapon")||ee(15),jump:i.has("jump")||ee(2),map:ee(8),confirm:ee(0),cancel:ee(1),navUp:ee(12),navDown:ee(13),sell:i.has("sell")||ee(13),order:C||(ee(14)?"toggle":"")||(ee(4)?"attack":""),mode:g};return C="",u=q,r.x=0,r.y=0,i.clear(),Q}}}function Rm(n){return n?.kind==="bike"?"bike":/utilit/i.test(n?.spec?.category??"")?"utility":"car"}function Im(){let n,e,t,i,s="car",r=!0;function o(){if(r)try{n||(n=new AudioContext,e=n.createGain(),e.gain.value=.46,e.connect(n.destination),t=n.createOscillator(),t.type="triangle",i=n.createGain(),i.gain.value=0,t.connect(i).connect(e),t.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{r=!1}}function a(l,d,f,p,m="sine",u=0){if(!n||!r||n.state!=="running")return;let v=n.currentTime+u,g=n.createOscillator(),_=n.createGain();g.type=m,g.frequency.setValueAtTime(l,v),g.frequency.exponentialRampToValueAtTime(d,v+f),_.gain.setValueAtTime(p,v),_.gain.exponentialRampToValueAtTime(.001,v+f),g.connect(_).connect(e),g.start(v),g.stop(v+f)}function h(l,d,f){if(!n||!r||n.state!=="running")return;let p=n.createBuffer(1,Math.floor(n.sampleRate*l),n.sampleRate),m=p.getChannelData(0);for(let _=0;_<m.length;_++)m[_]=(Math.random()*2-1)*Math.pow(1-_/m.length,2.2);let u=n.createBufferSource();u.buffer=p;let v=n.createBiquadFilter();v.type="lowpass",v.frequency.value=f;let g=n.createGain();g.gain.value=d,u.connect(v).connect(g).connect(e),u.start()}return{start:o,explosion(){h(1.4,1.1,620),a(70,24,1.1,.7,"sawtooth")},rifle(){h(.12,.55,2400),a(240,60,.09,.4,"square")},sale(){a(880,1320,.12,.18),a(1320,1760,.16,.14,"sine",.08)},get enabled(){return r},toggle(){return r=!r,e&&(e.gain.value=r?.46:0),o(),r},motor(l,d,f="car"){if(!n)return;s=f;let p=s==="bike"?7.2:s==="utility"?4.1:5;t.frequency.setTargetAtTime((s==="bike"?48:30)+Math.abs(l)*p,n.currentTime,.075),t.type=s==="bike"?"sawtooth":s==="utility"?"square":"triangle",i.gain.setTargetAtTime(d?.13:0,n.currentTime,.11)},step(){a(79,47,.085,.12,"triangle")},shot(){a(194,44,.15,.59,"square")},punch(l){a(l?109:187,l?39:73,l?.125:.084,l?.45:.13,"triangle")},crash(){a(98,29,.24,.34,"sawtooth")},bell(){a(442,521,.2,.25),a(660,840,.29,.2,"sine",.11)},click(){a(1500,900,.03,.12,"square")},flush(){h(1.3,.38,1800)},siren(){a(440,660,.35,.15),a(660,400,.36,.15,"sine",.33)}}}function Qu(n){return n>1.53?54:n>.92?32:n>.63?24:15}function ef(n){return Math.round(xt(Math.max(0,n-2.4)**2*.24,0,86))}function Yc(n){return n>=36?3:n>=20?2:n>0?1:0}var Jc=5.37,Kc=n=>rn.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,rn[0]),tf=(n,e)=>Math.abs(n-Kc(n))<Jc||Math.abs(e-Kc(e))<Jc,Pm=[-50.6,-25.4,-12.6,12.6,25.4,50.6],nf=(n,e)=>Math.abs(n-Kc(n))<Jc&&Pm.some(t=>Math.abs(e-t)<2.1)||Math.abs(e-Kc(e))<Jc&&Pm.some(t=>Math.abs(n-t)<2.1);function Lm(n,e){if(tf(n.x,n.z)&&!nf(n.x,n.z))return!1;let t=Math.max(2,Math.ceil(Math.hypot(e.x-n.x,e.z-n.z)/.55));for(let i=1;i<=t;i++){let s=i/t,r=n.x+(e.x-n.x)*s,o=n.z+(e.z-n.z)*s;if(tf(r,o)&&!nf(r,o))return!0}return!1}function Dm(n){let s=62.474999999999994,r=Array.from({length:3350},(g,_)=>({x:_%67*2.55-s,z:Math.floor(_/67)*2.55-s})),o=r.map(g=>Rn(g.x,g.z,.38,n)),a=r.map(g=>tf(g.x,g.z)),h=r.map(g=>nf(g.x,g.z)),l=(g,_)=>!a[_]||h[_]||a[g]&&!h[g],d=r.map((g,_)=>o[_]?[_>=67?_-67:-1,_<3283?_+67:-1,_%67?_-1:-1,_%67<66?_+1:-1].filter(C=>C>=0&&o[C]&&l(_,C)&&Rn((g.x+r[C].x)*.5,(g.z+r[C].z)*.5,.38,n)):[]),f=(g,_)=>{let T=Math.max(1,Math.ceil(se(g,_)/.42));for(let C=1;C<=T;C++){let b=C/T;if(!Rn(g.x+(_.x-g.x)*b,g.z+(_.z-g.z)*b,.31,n))return!1}return!0},p=g=>{let _=Math.round((g.x+s)/2.55),T=Math.round((g.z+s)/2.55),C=[];for(let b=Math.max(0,T-4);b<=Math.min(49,T+4);b++)for(let A=Math.max(0,_-4);A<=Math.min(66,_+4);A++){let S=b*67+A;if(!o[S])continue;let x=r[S].x-g.x,w=r[S].z-g.z;C.push({index:S,d:x*x+w*w})}C.sort((b,A)=>b.d-A.d);for(let{index:b}of C.slice(0,12))if(f(g,r[b]))return b;return-1},m=0,u=-1,v=(g,_)=>{let T=p(g),C=p(_);if(T<0||C<0)return[];if(T===C)return[r[T]];let b=new Int32Array(r.length).fill(-1),A=[T];b[T]=T;for(let S=0;S<A.length;S++){let x=A[S];if(x===C){let w=[];for(let D=C;D!==T;D=b[D])w.push(r[D]);return w.push(r[T]),w.reverse()}for(let w of d[x])b[w]===-1&&(b[w]=x,A.push(w))}return[]};return(g,_,T,C)=>{g.repath=(g.repath??0)-C;let b=_.x-g.x,A=_.z-g.z,S=Math.hypot(b,A);if(S<.16)return 0;let x=S<12&&f(g,_)&&!Lm(g,_);x&&(g.route=[]);let w=Math.floor(performance.now()/16);for(w!==u&&(u=w,m=3),!x&&g.repath<=0&&(m>0?(m--,g.route=v(g,_),g.repath=1.1+Math.random()*.4):g.repath=.05);g.route?.length&&(se(g,g.route[0])<.7||g.route.length>1&&se(g,g.route[1])<4&&f(g,g.route[1])&&!Lm(g,g.route[1]));)g.route.shift();let D=x?_:g.route?.[0]??_,L=Math.atan2(D.x-g.x,D.z-g.z),I=Math.min(T*C,se(g,D));g.angle=bn(g.angle,L,C*8.5);let k=da(g,g.x+Math.sin(L)*I,g.z+Math.cos(L)*I,.24,n);return k||(g.repath=Math.min(g.repath,.18)),k?T:0}}var Zc=n=>rn.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,rn[0]);function $c(n,e,t,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let v=e.z<o.z;n.stop={x:v?20.9:17.2,z:o.z+(v?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&se(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&se(o,n.stop)<2.6){let v=Zc(o.x),g=Zc(o.z),_=Zc(e.x),T=Zc(e.z);Math.abs(o.x-v)>3&&Math.abs(o.z-g)>3?n.stop={x:v,z:o.z}:Math.abs(o.x-v)>2.4&&Math.abs(o.z-g)<2.4?n.stop={x:_,z:g}:Math.abs(o.z-g)>2.4?n.stop={x:v,z:T}:_!==v?n.stop={x:v+Math.sign(_-v)*38,z:g}:T!==g?n.stop={x:v,z:g+Math.sign(T-g)*38}:Math.abs(e.x-o.x)>Math.abs(e.z-o.z)?n.stop={x:e.x,z:T}:n.stop={x:_,z:e.z}}let a=se(o,e),h=n.departing?6:14,l=Math.min(h,a*.85,Math.max(3,se(o,n.stop)*1.85)),d=wa(o,i,s,l),f=!n.departing&&d<2.5?ym(o,i,s,t):null,p=zs(o,f??n.stop,f?4.4:d),m=Zu(o,n,n.stop,i,s,t,r,p),u=o.impact>3||Math.abs(o.speed)<1;n.stall=u&&!n.maneuver?n.stall+r:0,Fn(o,r,m,t,i)}var Nm="gtbase:progress:1",lo=(n,e)=>Number.isFinite(n)?xt(Math.floor(n),0,e):0,vM=["sedan","hatch","wagon","taxi","pickup","van","suv","sport","muscle","luxury","convertible"],MM=["street","sport","chopper","scooter"],bM=["spoiler","rack","bullbar"];function zm(n){try{let e=JSON.parse((n??globalThis.localStorage).getItem(Nm));if(!e||e.version!==1||!Number.isFinite(e.cash)||!Number.isFinite(e.ammo)||!Number.isFinite(e.health))return null;let t=e.stash??{},i=e.garage,s=i&&(i.kind==="car"&&vM.includes(i.model)||i.kind==="bike"&&MM.includes(i.model))&&Number.isInteger(i.color)&&i.color>=0&&i.color<=16777215?{kind:i.kind,model:i.model,color:i.color,upgrades:{engine:lo(i.upgrades?.engine,3),tires:lo(i.upgrades?.tires,2)},fitted:Array.isArray(i.fitted)?i.fitted.filter(r=>bM.includes(r)):[]}:null;return{checkpoint:e.checkpoint==="lajes"?"lajes":"brasa",...e.checkpoint==="lajes"?Wn.home:{x:In.x+2.5,z:In.z-2.73},cash:xt(Math.floor(e.cash),0,999999),armed:e.armed===!0,equipped:e.equipped===!0,ammo:xt(Math.floor(e.ammo),0,360),rifle:e.rifle===!0,rifleAmmo:lo(e.rifleAmmo,900),health:xt(Math.floor(e.health),1,100),look:Lp(e.look),wardrobe:Array.isArray(e.wardrobe)?e.wardrobe.filter(r=>r&&typeof r.label=="string"&&r.changes&&typeof r.changes=="object"):[],stash:{weed:lo(t.weed,999),coke:lo(t.coke,999),ecstasy:lo(t.ecstasy,999)},garage:s,recruits:Array.isArray(e.recruits)?[...new Set(e.recruits.filter(r=>Number.isInteger(r)&&r>=0||typeof r=="string"&&/^[\w:-]{1,80}$/.test(r)))]:[]}}catch{return null}}function Um(n,e){try{return(e??globalThis.localStorage).setItem(Nm,JSON.stringify({...n,version:1})),!0}catch{return!1}}var co=Ye("view"),SM=Ye("menu"),uo=Ye("play"),ho=Ye("quality"),Fs=Ye("shop"),Fm=180,Om=260,cr=36,jc=90,hr={weed:{name:"maconha",pack:100,retail:34},coke:{name:"p\xF3",pack:300,retail:85},ecstasy:{name:"ecstasy",pack:200,retail:58}};function Qc(n,e){try{return e!==void 0&&localStorage.setItem("gtbase:"+n,e),localStorage.getItem("gtbase:"+n)}catch{return null}}function wM(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,e=new Ac({antialias:!n,alpha:!1,powerPreference:"high-performance"});e.toneMapping=ea,e.toneMappingExposure=1.17,e.shadowMap.type=Js,co.append(e.domElement);let t=new zo,i=new Nn(57,1,.12,370),s=$p(t),r=s.vehicleSolids,o=Dm(s.vehicleSolids),a=Am(t),h=dm(t),l=c=>c.floorY??s.floorAt(c.x,c.z,0),d=c=>s.walkSolids(c.x,c.z,l(c)),f=()=>[...s.solid,...s.closedDoorSolids()],p=c=>{c.floorY=s.floorAt(c.x,c.z,l(c))},m=c=>l(c)>1.25?[]:q,u={boarding:null,alighting:null,lastHurt:0,...fa,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,ragdoll:null,model:Ls(t,nr())},v=91,g=c=>{let y=to[c]?.palette??[11422e3];return v=v*1103515245+12345>>>0,y[v%y.length]},_=[{x:15.75,z:-1.8,angle:Math.PI,model:"sport"},{x:-22.8,z:4,angle:0,model:"pickup"},{x:36,z:15.3,angle:Math.PI/2,model:"luxury"},{x:53.3,z:-36,angle:0,model:"muscle"},{x:-15.9,z:-31,angle:0,model:"convertible"}],T=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033,variant:"sport"},{x:22.85,z:28,angle:0,color:4678008,variant:"chopper"}],C=[..._.map(({model:c})=>no(t,c,g(c))),...T.map(({color:c,variant:y})=>Oc(t,c,y))],b=["sedan","taxi","hatch","scooter","van","suv","wagon","street"],A=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778,5406086,11563879,7111513,8944529].map((c,y)=>{let M=b[y%8],z=y===3||y===7?Oc(t,c,M):no(t,M,g(M));return z.routeIndex=y===3||y===7?8+(y===7?1:0):y%8,z.kind==="bike"&&(z.rider=Ls(t,ga(4e3+y)),z.rider.root.visible=!1),z}),S=[...C,...A],x=new Map,w=[],D=Array.from({length:32},(c,y)=>{let M=Ai[y%3],z=Ai[Math.floor(y/3)%3],R=y%2===0?71:85,Z=(y%3-1)*20,E=y>=24?[{x:R,z:Z-10},{x:R,z:Z+10},{x:R+7,z:Z+10},{x:R+7,z:Z-10}]:[{x:M+12,z:z-12},{x:M+12,z:z+12},{x:M-12,z:z+12},{x:M-12,z:z-12}],Y=(y*3+Math.floor(y/9))%4,he;for(let Ae=0;Ae<36&&!he;Ae++){let we=(Y+Ae%4)%4,Se=E[we],Me=E[(we+1)%4],ce=.1+Math.floor(Ae/4)*.1,pe={x:Se.x+(Me.x-Se.x)*ce,z:Se.z+(Me.z-Se.z)*ce,next:(we+1)%4};Rn(pe.x,pe.z,.46,s.walkSolids(pe.x,pe.z,0))&&w.every(ve=>se(pe,ve)>11.7)&&(he=pe)}return he??={...E[Y],next:(Y+1)%4},w.push(he),Ie({...he,id:"street:"+y},"civilian",Ls(t,ga(1e3+y)),E)}),L=s.buildings.filter(c=>c.clerk).map((c,y)=>Ie({...c.clerk,next:0,id:"clerk:"+c.id,buildingId:c.id},"clerk",Ls(t,{...ga(2e3+y),shirt:"tee"}),[])),I=s.buildings.filter(c=>c.clerk),k=Array.from({length:3},(c,y)=>{let M=Ps.z-6.1+y*4.25,z={x:-1.85,z:Ps.z+[-.23,-4.4,3.94][y],next:0,id:"officer:"+y,buildingId:"station"},R=Ie(z,"police",Ls(t,Pp([12157017,8475704,15052936][y%3])),[]),Z={x:8.2,z:M,angle:Math.PI/2},E=no(t,"sedan",3626613,!0);return{officer:R,berth:Z,car:E,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,park:null,parkWait:0,route:[3,6,1][y],beat:y,startShift:[18,40,26][y]}}),N=no(t,"tow",12950339),O={x:Ti.bay.x,z:Ti.bay.z-4,angle:Math.PI},X={car:N,target:null,hitch:null,carrying:!1,unload:0,stop:null,stall:0,wait:0,engage:0,prevAngle:0},q=[...S,...k.map(c=>c.car),N],ee=new Map,ie=Array.from({length:A.length+2},(c,y)=>{let M=Ie({x:0,z:0,next:0,id:"driver:"+y},"civilian",Ls(t,ga(3e3+y)),[]);return M.seated=!0,M.model.root.visible=!1,M});A.forEach((c,y)=>{c.kind==="car"&&(c.ownDriver=ie[y])});let K=()=>ie.find(c=>c.seated&&!c.riding&&!q.some(y=>y.ownDriver===c&&y.driver)),F=c=>c.ownDriver?.seated&&!c.ownDriver.riding?c.ownDriver:K(),B=[...D,...L,...k.map(c=>c.officer),...ie],V=B,ne=new Map(B.map(c=>[c.id,c])),Q=new Zs(1,14),ae=new Vt({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),W=new tn(.27,.115,.38),ue={cash:new nn({color:7838308}),ammo:new nn({color:14395738}),weapon:new nn({color:4805464})},me=[];function Ie(c,y,M,z){return{home:c,baseRole:y,role:y,model:M,path:z,...c,pace:1.15+Math.abs(c.z)%4*.11,angle:c.angle??0,floorY:c.y??0,scheduleClock:9+Math.abs(c.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,wallet:12+Math.floor(Math.abs(Math.sin(c.x*4.27+c.z*8.13))*106),down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function $e(c){c.drop&&(t.remove(c.drop),c.drop=null),Object.assign(c,c.home,{role:c.baseRole,health:100,fear:0,down:0,angle:c.home.angle??0,floorY:c.home.y??0,scheduleClock:9+Math.abs(c.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],shoppingTrip:null,commandTarget:null,hopTime:0,stuckTime:0,walkIntent:null,pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1,ragdoll:null}),c.model.root.rotation.set(0,c.angle,0),c.model.shadow.visible=!0,c.model.root.visible=!0,p(c),c.model.root.position.set(c.x,l(c),c.z)}let Ee=Im();Qc("sound")==="off"&&Ee.toggle();let ot=new J,Ke=new J,je=new J,Mt=new J,Ct=new J,jt=new J,wt=new J,cn=new J,Ht=new J,Ge=!1,Tt=!1,te=null,j=!1,Ft=0,mt=null,rt=0,Be=0,Wt=0,Qe=0,lt=0,G=0,P=0,re=.23,Ce=0,xe=0,Ne=0,ze=0,_e=!0,ye="keyboard",Pe=Om,H=!1,ge=!1,fe=0,Ue=!1,Te="pistol",Re=!1,qe=0,at=0,be=nr(),Ze={weed:0,coke:0,ecstasy:0},st=null,ke=3,Dt=0,it=null,Sn=!1,di=0,Ii=0,ri=null,Bn=null,on=null,pi=0,Kn=null,ds=0,oi=null,Xt=[],Qt=zm(),Os=Qt?.checkpoint??null,Bs=()=>{uo.textContent=Qt?"Continuar do save":"Jogar agora"},qn=0,Pi=0,Vi=0,fo=0,po=0,ur=!1,ks=0,U=!1,$="",de=0,oe=1,le=0,Oe=0,Le=Ye("map").getContext("2d"),Fe=document.createElement("canvas");Fe.width=Fe.height=256;let De=Fe.getContext("2d"),Xe=Ye("atlas"),ht=Ye("atlas-map"),dt={x:128,z:128},We=null,_t=new St(new ns(.55),new Vt({color:16362817}));t.add(_t),_t.visible=!1;function Jt(c,y){We={x:(c-128)/en,z:(y-128)/en},_t.position.set(We.x,Xn(We.x,We.z)+2.6,We.z),_t.visible=!0,Xe.close(),Gs.clear()}Ye("mark-lajes").onclick=()=>Jt(nt(63.6),nt(0));function Ot(){!Ge||Fs.open||Xe.open||(dt.x=nt(u.x),dt.z=nt(u.z),document.pointerLockElement&&document.exitPointerLock(),Gs.clear(),Xe.showModal())}Ye("open-map").onclick=Ot,ht.onclick=c=>{let y=ht.getBoundingClientRect();Jt((c.clientX-y.left)*256/y.width,(c.clientY-y.top)*256/y.height)};let Nt=[];function fn(){!Ge||Fs.open||Xe.open||(Gs.clear(),document.pointerLockElement&&document.exitPointerLock(),Yt.show(()=>({title:"Invent\xE1rio",note:"Carteira R$ "+Pe+" \xB7 Pistola "+(H?Je()+" balas":"\u2014")+" \xB7 Fuzil "+(Re?(Te==="rifle"?fe:at)+" balas":"\u2014"),sections:[{title:"Garagem",items:it?[{label:xo(it),disabled:!0}]:[]},{title:"Estoque",items:Object.keys(hr).map(c=>({label:hr[c].name+" \xD7 "+Ze[c],price:0,disabled:!0}))},{title:"Guarda-roupa",items:Nt.map(c=>({label:c.label,price:0,buy:()=>kn(c.changes)}))}]})))}function Je(){return Te==="pistol"?fe:qe}Ye("open-bag").onclick=fn,document.addEventListener("keydown",c=>{c.repeat||(c.code==="KeyM"&&(Xe.open?Xe.close():Ot()),c.code==="KeyI"&&fn())});let en=1.16,nt=c=>128+c*en;De.fillStyle="#1d3433",De.fillRect(0,0,256,256),De.fillStyle="#46605b";for(let c of rn)De.fillRect(nt(c)-10,0,20,256),De.fillRect(0,nt(c)-10,256,20);De.fillStyle="#826849",De.fillRect(nt(62),nt(-Wn.halfDepth),(Wn.east-Wn.west)*en,Wn.halfDepth*2*en),De.fillStyle="#345048";for(let c of s.vehicleSolids)De.fillRect(nt(c.x-c.w/2),nt(c.z-c.d/2),c.w*en,c.d*en);De.fillStyle="#6a7859",De.fillRect(nt(-10),nt(28),38,38),De.fillStyle="#ffe4aa",De.beginPath(),De.arc(nt(63.6),nt(0),3,0,2*Math.PI),De.fill(),De.textAlign="right",De.font="bold 9px system-ui",De.fillText("Vila das Lajes",nt(62),nt(-2));function $n(){let c=ho.value==="high",y=ho.value==="low";e.setPixelRatio(Math.min(devicePixelRatio,c?2:y?1:n?1.45:1.5)*(y?.85:oe)),e.setSize(co.clientWidth,co.clientHeight),e.shadowMap.enabled=!y&&(c||oe>.76),s.sun.shadow.needsUpdate=!0,h.setScale(co.clientHeight*e.getPixelRatio()*.92),i.aspect=co.clientWidth/Math.max(1,co.clientHeight),i.updateProjectionMatrix()}function dn(){Ye("sound").textContent=Ee.enabled?"Som ligado":"Som desligado",Ye("sound").setAttribute("aria-pressed",String(Ee.enabled))}function mi(c){Fs.open&&go(),Ge=c,SM.hidden=c,Ye("hud").hidden=!c,Gs.clear(),c?(Ee.start(),Tt||(P=.32,re=.22),Tt=!0,_e=!0,Ce=performance.now(),Ye("pause").focus({preventScroll:!0}),Ye("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),Ee.motor(0,!1),Ye("help").removeAttribute("open"),Ye("title").innerHTML="GT<span>BASE</span>",Ye("intro").textContent="Jogo pausado em Vila Brasa.",uo.textContent="Continuar",Ye("reset").hidden=!1,uo.focus())}function gi(){ms={x:NaN,z:NaN,angle:0},vf(),Nt=[],We=null,_t.visible=!1,te=null,ri=null,on=null,Bn=null,Xt.length=0,Pe=Om,H=!1,ge=!1,fe=0,Ue=!1,Te="pistol",Re=!1,qe=0,at=0,u.model.weapon="pistol",Ze.weed=Ze.coke=Ze.ecstasy=0,st=null,it&&(Sn=!0,rh(it)),rt=Wt=G=Qe=lt=de=0,Ft=0,j=!1,mt=null,a.reset(),s.resetDoors(),qn=Pi=Vi=di=Ii=0,ur=!1,ks=0,U=!1,P=.32,re=.22,ze=0,Object.assign(u,fa,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),p(u),u.model.root.position.set(u.x,0,u.z),u.model.root.rotation.set(0,0,0),u.model.root.visible=!0,u.model.shadow.visible=!0,sr(u.model,0,0,!1,!1),C.forEach((y,M)=>{let{x:z,z:R,angle:Z}=[..._,...T][M];si(y,{x:z,z:R,angle:Z}),y.stolen=!1,y.body.rotation.z=0,fi(y,0)}),si(N,O),Object.assign(X,{target:null,hitch:null,carrying:!1,unload:0,wait:0,stop:null,maneuver:null,stall:0,engage:0}),N.armAngle=.35,x.clear(),A.forEach((y,M)=>{io(y,y.routeIndex,M>=8?3:0),fi(y,0)});for(let y of k)si(y.car,y.berth),Object.assign(y,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,park:null,parkWait:0}),fi(y.car,0);for(let y of B)$e(y);for(let y of ie)y.seated=!0,y.model.root.visible=!1;for(let y of me)t.remove(y.mesh);me.length=0;for(let y of q)y.passengers=[],y.towTilt=0,y.signal=0,y.root.visible=!0,y.towed=!1,y.abandoned=0,y.lastProvoked=-100,y.leftInLane=!1,y.shopping=!1,y.visitTime=-100;s.props.reset(),s.lajesHome.reset(),h.clear(),u.ragdoll=null,s.sun.shadow.needsUpdate=!0,u.deadTime=0,Da(k[0]);let c=I.find(y=>y.kind==="armory")?.entry??qr;s.marker.position.set(c.x,.02,c.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,Ne=0}function et(c){$=c,de=2.4}let At=()=>{let c=Object.entries(hr).filter(([y])=>Ze[y]>0).map(([y,M])=>M.name+" "+Ze[y]);return c.length?c.join(" \xB7 "):""},Yt=jp(Fs,{balance:()=>"Saldo: R$ "+Pe.toLocaleString("pt-BR")+(At()?" \xB7 "+At():"")+(H||Re?" \xB7 Balas: "+[H?"pistola "+(Te==="pistol"?fe:qe):"",Re?"fuzil "+(Te==="rifle"?fe:at):""].filter(Boolean).join(", "):""),onClose:()=>{Gs.clear(),Ne=0}});function Ut(c){return Pe<c?"Saldo insuficiente.":(Pe-=c,Ee.bell(),null)}function Bt(c){Te==="rifle"?at=fe:qe=fe,c==="fists"?ge=!1:(ge=!0,Te=c),fe=Te==="rifle"?at:qe,u.model.weapon=Te,Kn=null,ds=0,oi=null}function hn(){let c=["fists",...H?["pistol"]:[],...Re?["rifle"]:[]],y=ge?Te:"fists";Bt(c[(c.indexOf(y)+1)%c.length])}function wn(c,y){Te===c?fe=Math.min(900,fe+y):c==="rifle"?at=Math.min(900,at+y):qe=Math.min(360,qe+y)}function mo(c,y){let M=c.model,z=Ls(t,y);z.root.position.copy(M.root.position),z.root.quaternion.copy(M.root.quaternion),z.root.visible=M.root.visible,z.weapon=M.weapon,t.remove(M.root),M.root.traverse(R=>{R instanceof St&&R!==M.shadow&&R.geometry.dispose()}),c.model=z}function kn(c){let y=Object.keys(c)[0];if(["shirt","legs","shoes","glasses","chain","earrings","watch","ring"].includes(y)&&!Nt.some(M=>JSON.stringify(M.changes)===JSON.stringify(c))){let M={shirt:"Blusa",legs:"Cal\xE7a / bermuda",shoes:"Cal\xE7ado",glasses:"\xD3culos",chain:"Corrente",earrings:"Brinco",watch:"Rel\xF3gio",ring:"Anel"};Nt.push({label:M[y]+" \xB7 "+({tee:"camiseta",tank:"regata",dress:"social",none:"sem",pants:"cal\xE7a",shorts:"bermuda",flipflops:"chinelo",sneakers:"t\xEAnis",gold:"ouro",silver:"prata",diamond:"diamante",true:"com",false:"sem"}[String(c[y])]??String(c[y]))+(c[y+"Color"]?" #"+c[y+"Color"].toString(16):""),changes:c})}return be={...be,...c},mo(u,be),null}let eh=Iu,sf=[3553348,2373199,5917242,2894892,8221798,11049860,15262678],rf=[15789282,2236962,9056042,2969482,14725949,3107660];function Li(c,y,M,z){let R=be[y]===M;return{label:R?c+" (tirar)":c,price:R?0:z,active:R,buy:()=>R?kn({[y]:typeof M=="boolean"?!1:"none"}):Ut(z)??kn({[y]:M})}}function Bm(c){return c==="store"?{title:"Balc\xE3o de comida",sections:[{title:"Card\xE1pio",items:[{label:"Lanche (+30 de vida)",price:15,disabled:u.health>=100,buy:()=>{let y=Ut(15);return y||(u.health=Math.min(100,u.health+30),null)}}]}]}:c==="armory"?{title:"Loja de armas",note:"Pistola e muni\xE7\xE3o dentro da lei, mais ou menos.",sections:[{title:"Armas",items:[{label:"Pistola + "+cr+" balas",price:Fm,disabled:H,detail:H?"Voc\xEA j\xE1 tem uma pistola.":"",buy:()=>Ut(Fm)??(H=!0,wn("pistol",cr),Bt("pistol"),et("Pistola comprada."),null)},{label:"Repor muni\xE7\xE3o da pistola",price:0,disabled:!H||(Te==="pistol"?fe:qe)>=cr,detail:"Completa at\xE9 "+cr+" balas.",buy:()=>(wn("pistol",cr-(Te==="pistol"?fe:qe)),null)}]}]}:c==="black"?{title:"Penhores 24h \xB7 fundos",note:"Mercado negro. Pagamento na hora, sem nota fiscal.",sections:[{title:"Armas",items:[{label:"Fuzil + "+jc+" balas",price:1200,disabled:Re,detail:Re?"Voc\xEA j\xE1 tem um fuzil.":"Rajada r\xE1pida e dano alto.",buy:()=>Ut(1200)??(Re=!0,wn("rifle",jc),Bt("rifle"),et("Fuzil comprado."),null)},{label:"Muni\xE7\xE3o de fuzil ("+jc+")",price:150,disabled:!Re,buy:()=>Ut(150)??(wn("rifle",jc),null)},{label:"Pistola + "+cr+" balas",price:220,disabled:H,buy:()=>Ut(220)??(H=!0,wn("pistol",cr),Bt("pistol"),null)}]},{title:"Drogas no atacado (10 unidades)",items:Object.entries(hr).map(([y,M])=>({label:M.name[0].toUpperCase()+M.name.slice(1)+" \xB7 estoque "+Ze[y],price:M.pack,detail:"Venda no varejo por R$ "+M.retail+" a unidade.",buy:()=>Ut(M.pack)??(Ze[y]+=10,null)}))}]}:c==="clothes"?{title:"Moda Brasa",note:"Escolha a pe\xE7a e toque em uma cor.",sections:[{title:"Parte de cima",items:[{label:"Camiseta",price:60,active:be.shirt==="tee",colors:eh,buy:y=>Ut(60)??kn({shirt:"tee",shirtColor:y??be.shirtColor})},{label:"Regata",price:45,active:be.shirt==="tank",colors:eh,buy:y=>Ut(45)??kn({shirt:"tank",shirtColor:y??be.shirtColor})},{label:"Camisa social",price:120,active:be.shirt==="dress",colors:eh,buy:y=>Ut(120)??kn({shirt:"dress",shirtColor:y??be.shirtColor})},{label:"Sem camisa",price:0,active:be.shirt==="none",buy:()=>kn({shirt:"none"})}]},{title:"Parte de baixo",items:[{label:"Cal\xE7a",price:90,active:be.legs==="pants",colors:sf,buy:y=>Ut(90)??kn({legs:"pants",legColor:y??be.legColor})},{label:"Bermuda",price:60,active:be.legs==="shorts",colors:sf,buy:y=>Ut(60)??kn({legs:"shorts",legColor:y??be.legColor})}]},{title:"Cal\xE7ados",items:[{label:"T\xEAnis",price:150,active:be.shoes==="sneakers",colors:rf,buy:y=>Ut(150)??kn({shoes:"sneakers",shoeColor:y??be.shoeColor})},{label:"Chinelo",price:25,active:be.shoes==="flipflops",colors:rf,buy:y=>Ut(25)??kn({shoes:"flipflops",shoeColor:y??be.shoeColor})},{label:"Sapato social",price:180,active:be.shoes==="dress",buy:()=>Ut(180)??kn({shoes:"dress"})}]},{title:"Acess\xF3rios",items:[Li("\xD3culos escuros","glasses",!0,80),Li("Corrente de prata","chain","silver",250),Li("Corrente de ouro","chain","gold",900),Li("Brincos de prata","earrings","silver",120),Li("Brincos de ouro","earrings","gold",400),Li("Brincos de diamante","earrings","diamond",1500),Li("Rel\xF3gio de prata","watch","silver",300),Li("Rel\xF3gio de ouro","watch","gold",1100),Li("Anel de prata","ring","silver",150),Li("Anel de ouro","ring","gold",500)]}]}:c==="barber"?{title:"Barbearia do Z\xE9",note:"Corte e barba. Toque em uma cor para pintar.",sections:[{title:"Pele",items:[{label:"Tom de pele",price:0,colors:Lu,buy:y=>kn({skin:y??be.skin})}]},{title:"Cabelo",items:Object.entries(Cu).map(([y,M])=>({label:M,price:y==="cap"?50:40,active:be.hair===y,colors:y==="bald"?void 0:y==="cap"?[1522486,9056042,2236962,2772879,14725949,15789282]:Pu,buy:z=>Ut(y==="cap"?50:40)??kn(y==="cap"?{hair:y,capColor:z??be.capColor}:{hair:y,hairColor:z??be.hairColor})}))},{title:"Barba",items:Object.entries(Ru).map(([y,M])=>({label:M,price:y==="none"?15:25,active:be.beard===y,buy:()=>Ut(y==="none"?15:25)??kn({beard:y})}))}]}:c==="workshop"?Gm(of):{title:"Loja",sections:[]}}let of=null,Ea=()=>I.find(c=>c.service==="workshop");function km(){let c=Ea();if(!c)return null;if(te?.kind==="car")return te;let y=S.filter(M=>M.kind==="car"&&M.stolen&&M.integrity>0&&!M.towed&&se(M,c.approach)<22&&(M!==it||!Sn));return y.sort((M,z)=>se(M,c.approach)-se(z,c.approach)),y[0]??null}let th=()=>te?.kind==="car"&&Math.hypot(te.vx,te.vz)<2.5&&Ea()&&se(te,Ea().approach)<9?Ea():null;function Gm(c){if(!c)return{title:"Oficina do Bigode",note:"Traga um carro seu at\xE9 a porta da oficina e volte ao balc\xE3o.",sections:[]};let y=om(c),M=(Se,Me,ce,pe,ve)=>({label:Se,price:ce>0?pe:null,disabled:ce<=0,detail:ce>0?ve:"Em dia.",buy:()=>{let Ve=Ut(pe);return Ve||(am(c,Me),et(Se+" feito."),null)}}),z=75+y.front*2.4|0,R=75+y.rear*2.4|0,Z=55*y.glass,E=48*y.tires,Y=y.mechanics*3.6|0,he=c.upgrades??={engine:0,tires:0},Ae=(Se,Me,ce,pe,ve)=>{let Ve=he[Me]??0,gt=pe[Ve]??0;return{label:Se+(Ve?" \xB7 n\xEDvel "+Ve:""),price:Ve>=ce?null:gt,disabled:Ve>=ce,detail:Ve>=ce?"N\xEDvel m\xE1ximo.":ve,buy:()=>{let bt=Ut(gt);return bt||(he[Me]=Ve+1,Gu(c),et(Se+" instalado."),null)}}},we=(Se,Me)=>{let ce=c.fitted?.has(Se)??!1;return{label:cm[Se]+(ce?" (tirar)":""),price:ce?0:Me,active:ce,buy:()=>{let pe=ce?null:Ut(Me);return pe||(ku(c,Se,!ce),null)}}};return{title:"Oficina do Bigode",note:xo(c)+" \xB7 integridade "+Math.round(c.integrity)+"%. Cada reparo \xE9 cobrado por pe\xE7a.",sections:[{title:"Reparos",items:[M("Lataria e para-choque dianteiros","front",y.front,z,"Dano "+y.front+"%."),M("Lataria e para-choque traseiros","rear",y.rear,R,"Dano "+y.rear+"%."),M("Vidros trincados","glass",y.glass,Z,y.glass+" marca(s) de bala."),M("Pneus furados","tires",y.tires,E,y.tires+" pneu(s)."),M("Motor e mec\xE2nica","mechanics",y.mechanics,Y,"Falta "+y.mechanics+"% de integridade.")]},{title:"Pe\xE7as de desempenho",items:[Ae("Motor","engine",3,[700,1500,2800],"+5,5% de velocidade m\xE1xima e +9% de acelera\xE7\xE3o por n\xEDvel."),Ae("Pneus esportivos","tires",2,[450,900],"+7,5% de ader\xEAncia por n\xEDvel.")]},{title:"Acess\xF3rios",items:[we("spoiler",380),we("rack",260),we("bullbar",540)]}]}}function nh(c){of=c.service==="workshop"?km():null,Gs.clear(),document.pointerLockElement&&document.exitPointerLock(),Yt.show(()=>Bm(c.service))}function go(){Yt.close()}function Ca(c){let y={...c,ground:q.includes(c)?c.root.position.y:l(c),angle:c.angle},M=f();return k.some(z=>{let{officer:R,car:Z,mode:E}=z;return R.health<=0?!1:R.seated&&["driving","patrol","returning"].includes(E)?ro({...Z,ground:Z.root.position.y},y,M,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):ro({...R,ground:l(R)},y,M,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function af(c,y){if(y<12||V.some(Z=>Z.calling))return;let M=f(),z={...c,ground:l(c)},R=V.find(Z=>["civilian","clerk"].includes(Z.role)&&an(Z)&&!Z.buyer&&!(Z.brawl>0)&&se(Z,c)<24&&se(Z,c)>2&&ro({...Z,ground:l(Z)},z,M,{range:24,fov:Math.PI*1.3,eye:1.6,aim:1.1}));R&&(R.calling={time:3.6,pressure:y,x:c.x,z:c.z})}function Hi(c,y=te??u,M=Ca(y)){if(!M)return af(y,c),!1;let z=Yc(rt);return rt=Math.min(64,Math.max(rt+(rt>0?c*.52:0),c)),j=!0,Ft=.24,mt={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle},z||et("Crime visto pela pol\xEDcia."),!0}let lf=()=>te||l(u)>=1?null:I.find(c=>s.interiorAt(u.x,u.z,l(u))?.buildingId===c.id&&se(u,c.clerk)<3)??null,Vm={store:"Comprar comida",armory:"Abrir loja de armas",clothes:"Ver roupas",barber:"Cortar cabelo",black:"Negociar nos fundos",workshop:"Abrir a oficina"},cf=()=>it&&Sn&&!te&&se(u,tr.door)<2.6,Ra=()=>te&&te!==Wm().find(c=>c===te)&&se(te,tr.door)<3.4&&Math.hypot(te.vx,te.vz)<2,hf=()=>s.interiorAt(u.x,u.z,l(u))?.buildingId==="lajes-home"&&se(u,Wn.home)<1.4,Hm={heal:c=>{u.health=Math.min(100,u.health+c)},flush:()=>Ee.flush()},ih=()=>!te&&s.interiorAt(u.x,u.z,l(u))?.buildingId==="lajes-home"?s.lajesHome.nearest(u):null,uf=()=>!te&&(hf()||se(u,{x:In.x,z:In.z+6.25})<1.7),ff=()=>q,an=c=>c&&c.health>0&&!c.seated,xo=c=>(c.kind==="bike"?"Moto ":"")+(c.spec?.name??"Carro"),df=()=>!te&&s.doors.find(c=>c.private&&!c.breached&&!c.opened&&Math.abs(c.base-l(u))<.85&&se(c,u)<1.62);function pf(){if(l(u)>1.02)return null;let c=null,y=1/0;for(let M of S){let z=se(u,M),R=M.kind==="bike"?3:Math.max(3,M.halfLength+.6);X.carrying&&X.target===M||z>=R||z>=y||M.integrity<=0||M.wrecked||M.burning||Math.abs(M.speed)>3.4||(c=M,y=z)}return c}function Di(c=!1){if(!te)return;let{angle:y,x:M,z}=te;if(!c&&Math.hypot(te.vx,te.vz)>4.2){et("Reduza a velocidade para sair.");return}let R=te.kind==="bike"?1.02:te.halfWidth+.67,Z=te.kind==="bike"?1.75:te.halfLength+.65,E=[R,-R,R+.53,-R-.53].map(he=>[M+Math.cos(y)*he,z-Math.sin(y)*he]);E.push([M-Math.sin(y)*Z,z-Math.cos(y)*Z],[M+Math.sin(y)*Z,z+Math.cos(y)*Z]);let Y=E.find(([he,Ae])=>On({x:he,z:Ae},he,Ae,s.walkSolids(he,Ae,0),q,V,.36));if(!Y&&!c){et("Sem espa\xE7o para abrir a porta.");return}[u.x,u.z]=Y??[fa.x,fa.z],u.floorY=0,p(u);for(let he of[...te.passengers??[]])pr(he);u.angle=y,Object.assign(u,{vx:0,vz:0,pushX:0,pushZ:0}),vf(),te.abandoned=0,te.leftInLane=!!g0(te),te.doorTime=.65,u.alighting={t:0,from:u.model.root.position.clone()},u.boarding=null,te=null,u.model.root.visible=!0,u.model.shadow.visible=!0,u.model.root.rotation.set(0,y,0),sr(u.model,0,0,!1,ge)}function sh(){Te==="rifle"?at=fe:qe=fe;let c={checkpoint:hf()?"lajes":"brasa",wardrobe:Nt,health:u.health,cash:Pe,armed:H,equipped:ge,ammo:qe,rifle:Re,rifleAmmo:at,look:be,stash:{...Ze},garage:it?{kind:it.kind,model:it.model,color:it.color,upgrades:{...it.upgrades},fitted:[...it.fitted??[]]}:null,recruits:Xt.map(M=>M.id)},y=Um(c);return y&&(Os=c.checkpoint),y}let Wm=()=>k.map(c=>c.car);function mf(c,y,M,z=null){if(it&&(t.remove(it.root),q.splice(q.indexOf(it),1),S.splice(S.indexOf(it),1)),it=c==="bike"?Oc(t,M,y):no(t,y,M),it.stolen=!0,it.upgrades={engine:0,tires:0,...z?.upgrades},c==="car"){Gu(it);for(let R of z?.fitted??[])ku(it,R,!0)}return q.push(it),S.push(it),it}function rh(c){si(c,tr.inside),c.root.visible=!1,fi(c,0)}function Xm(c){let y=c.kind,M=c.model,z=c.color;if(Di(!0),c!==it){let R=C.indexOf(c);if(R>=0){let{x:Z,z:E,angle:Y}=[..._,...T][R];si(c,{x:Z,z:E,angle:Y}),c.stolen=!1,c.towed=!1,c.root.visible=!0,fi(c,0)}else c.routeIndex>=0&&(io(c,c.routeIndex),fi(c,0));mf(y,M,z,c)}Sn=!0,rh(it),Object.assign(u,{x:tr.door.x-1.6,z:tr.door.z+1.4,floorY:0}),p(u),sh(),et("Ve\xEDculo guardado na garagem e salvo."),Ee.bell()}function qm(){it&&(Sn=!1,si(it,tr.out),it.root.visible=!0,fi(it,0),Ia(it),et("Ve\xEDculo retirado da garagem."))}function Ym(){Di(!0),Object.assign(u,{x:In.x,z:In.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0,ragdoll:null}),p(u),di=0,rt=0,Ii=0,P=-Math.PI/2,_e=!0,et("Voc\xEA voltou para casa.")}function gf(){if(ri||u.health<=0)return;let c=th();if(c&&!Ra()){nh(c);return}if(te&&!Ra()){Di();return}let y=lf();if(y){nh(y);return}if(Ra()){Xm(te);return}if(cf()){qm();return}if(uf()){et(sh()?"Progresso salvo em casa.":"O navegador bloqueou o salvamento."),Ee.bell();return}let M=ih();if(M){et(M.use(Hm)),Ee.click();return}let z=pf();if(!z){et(df()?"Porta trancada.":"Nada para interagir aqui.");return}if(z.driver){let R=F(z)??ie.find(Z=>Z.exitAge>14&&Z.role==="civilian"&&se(Z,u)>11);if(R){let Z=z.angle+(z.kind==="bike"?-1:1)*Math.PI/2,E=z.x+Math.sin(Z)*(z.kind==="bike"?.95:1.51),Y=z.z+Math.cos(Z)*(z.kind==="bike"?.95:1.51),he=On({x:E,z:Y},E,Y,s.walkSolids(E,Y,0),q,V,.29)?{x:E,z:Y}:{x:u.x,z:u.z};$e(R),Object.assign(R,he,{angle:Z,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),Math.random()<.35&&(R.fear=0,R.brawl=9,R.attack=1.2),z.rider&&(z.rider.root.visible=!1)}z.driver=null,z.vx=z.vz=z.speed=0,z.doorTime=.65,ri={car:z,delay:.46},et(z.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else Ia(z)}function Ia(c){c.burning||c.wrecked||c.integrity<=0||(te=c,c.driver=null,c.doorTime=.65,u.boarding=c.kind==="car"?{t:0,from:u.model.root.position.clone()}:null,u.alighting=null,u.lift=0,Object.assign(u,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),di=0,u.model.root.visible=!0,u.model.shadow.visible=!1,c.stolen||(c.stolen=!0,Hi(13)),c.passengers??=[],c.kind==="car"&&Zm(c),P=c.angle,ze=0,_e=!0)}function Zm(c){let y=c.spec.seats,M=Xt.filter(E=>an(E)&&!E.riding&&se(E,c)<60&&E.order!=="dealer"&&E.order!=="wait").sort((E,Y)=>se(E,c)-se(Y,c)),z=Math.max(0,y.length-1-c.passengers.length);if(M.splice(0,z).forEach((E,Y)=>{let he=y[Math.min(y.length-1,1+Y+c.passengers.length)];E.boardCar=c,E.boardRow=he[1],E.boardSide=Math.sign(he[0])||1}),!M.length)return;let R=S.filter(E=>E.kind==="car"&&E!==c&&!E.burning&&!E.wrecked&&E.integrity>12&&!E.driver&&Math.abs(E.speed)<3&&(!Sn||E!==it)&&!E.shopping&&!E.towed&&se(E,c)<45&&!(X.carrying&&X.target===E)).sort((E,Y)=>se(E,c)-se(Y,c)),Z=0;for(let E of R){if(!M.length)break;let Y=E.spec.seats.length-(E.passengers?.length??0),he=M.splice(0,Y);he.length&&(Z++,E.passengers??=[],pn.set(E,pn.get(E)??{car:E,stall:0}),he.forEach((Ae,we)=>{let Se=E.spec.seats[Math.min(E.spec.seats.length-1,we)];Ae.boardCar=E,Ae.boardRow=Se[1],Ae.boardSide=Math.sign(Se[0])||1}))}Z&&et("A gangue se dividiu em "+(Z+1)+" carros.")}function oh(c,y,M){let z=new St(W,ue[c]),R=l(y)+.13;z.position.set(y.x+.22,R,y.z+.19),t.add(z),me.push({mesh:z,kind:c,count:M,y:R,wait:.32,left:105})}function Jm(c){for(let y=me.length-1;y>=0;y--){let M=me[y];M.left-=c,M.wait-=c,M.mesh.rotation.y+=c*2.1,M.mesh.position.y=M.y+Math.sin(M.left*3.8)*.08;let z=!te&&u.health>0&&M.wait<0&&Math.abs(l(u)-M.y)<.65&&Math.hypot(u.x-M.mesh.position.x,u.z-M.mesh.position.z)<1.03;z&&(M.kind==="cash"?(Pe+=M.count,et("R$ "+M.count+" recolhidos.")):M.kind==="weapon"?(H||(H=!0,Bt("pistol")),wn("pistol",M.count),et("Pistola recolhida.")):(wn("pistol",M.count),et("+"+M.count+" balas de pistola.")),Ee.bell()),(z||M.left<=0)&&(t.remove(M.mesh),me.splice(y,1))}}function jn(c,y,M=null){if(c.health<=0||y<=0)return;if(c.health=Math.max(0,c.health-y),c===u&&(u.lastHurt=xe),h.blood(c.x,l(c)+1.1,c.z),c.health<=0){let Z=M?c.x-M.x:c.pushX,E=M?c.z-M.z:c.pushZ;if(c.fallDir=Math.sin(c.angle)*Z+Math.cos(c.angle)*E>0?1:-1,c.deadTime=0,M&&c!==u){let Y=Math.max(.1,Math.hypot(Z,E));c.pushX+=Z/Y*1.3,c.pushZ+=E/Y*1.3}}if(c===u){Vi=.22,M&&Km(M),c.health<=0&&(Di(!0),Ii=3,et("Voc\xEA caiu. Voltando para casa\u2026"));return}if(c.stagger=.32,c.fear=c.brawl>0?0:6,c.calling=null,c.buyer=null,c.surrender=0,on?.npc===c&&(on=null),c.health>0)return;Bn===c&&(Bn=null),c.down=c.role==="police"?28:19,c.model.shadow.visible=!1;let z=new St(Q,ae);z.position.set(c.x+Math.sin(c.angle)*c.fallDir*1,l(c)+.019,c.z+Math.cos(c.angle)*c.fallDir*1),z.rotation.x=-Math.PI/2,z.scale.set(.52,.32,1),t.add(z),c.drop=z,["police","ally"].includes(c.role)&&oh("weapon",c,12),c.role!=="ally"&&!c.robbed&&oh("cash",c,c.wallet);let R=Xt.indexOf(c);R>=0&&Xt.splice(R,1)}function Km(c){let y=Math.atan2(c.x-u.x,c.z-u.z)-P,M=document.createElement("div");M.className="hurt",M.style.transform="rotate("+-y+"rad)",Ye("damage-dir").append(M),window.setTimeout(()=>M.remove(),1100)}function Pa(c){return[...V,u].filter(M=>M!==c&&an(M)&&!(M===u&&te&&te.kind==="car")).map(M=>{let z=l(M)+(M===u?u.lift:0);return{actor:M,y:z,bounds:[M.x-.31,z+.1,M.z-.31,M.x+.31,z+1.9,M.z+.31]}})}function xf(){i.getWorldDirection(jt);let c=Pa(u),y=f(),M=Ta(i.position.toArray(),jt.toArray(),y,c,28).hit,z=[u.x,l(u)+1.38+u.lift,u.z];if(M&&se(u,M.actor)<24&&so(z,[M.actor.x,M.y+1.25,M.actor.z],y))return M.actor;let R=.15,Z=null;for(let{actor:Y,y:he}of c){if(se(u,Y)>18)continue;Mt.set(Y.x,he+1.25,Y.z).project(i);let Ae=Math.hypot(Mt.x,Mt.y);Mt.z>=1||Ae>=R||!so(z,[Y.x,he+1.25,Y.z],y)||(R=Ae,Z=Y)}if(Z)return Z;let E=q.filter(Y=>Y!==te&&Y.integrity>0&&se(u,Y)<32).map(Y=>({car:Y,oriented:{center:[Y.x,Y.root.position.y+.8,Y.z],half:Y.kind==="bike"?[.4,.75,1.1]:[Y.halfWidth+.05,.75,Y.halfLength],angle:Y.angle}}));return Ta(i.position.toArray(),jt.toArray(),y,E,34).hit?.car??null}let fr=c=>k.find(y=>y.car===c),_f=c=>q.includes(c);function ah(c){if(c===te||c.driver||pn.has(c)&&c.passengers?.length)return!0;let y=fr(c);return!!(y&&y.officer.seated&&y.officer.health>0&&["driving","patrol"].includes(y.mode))}let dr=c=>!!c&&(_f(c)?c!==te&&c.integrity>0&&ah(c):an(c));function Wi(c){if(c){if(_f(c)){c!==te&&c.integrity>0&&ah(c)&&(Bn=c);return}c.role!=="ally"&&c.health>0&&(Bn=c)}}function ps(c,y,M){let z=fr(c),R=z&&z.officer.seated&&["driving","patrol"].includes(z.mode)?z:null,Z=R?.officer??(c.driver?F(c):null);if(!Z)return!1;R||$e(Z);let E=c.angle+(c.kind==="bike"?-1:1)*Math.PI/2,Y=c.kind==="bike"?.95:c.halfWidth+.6;return Object.assign(Z,{seated:!1,x:c.x+Math.sin(E)*Y,z:c.z+Math.cos(E)*Y,fear:6,exitAge:0,floorY:0}),Z.model.root.visible=!0,Z.model.shadow.visible=!0,c.driver=null,c.vx*=.45,c.vz*=.45,c.speed*=.45,c.rider&&(c.rider.root.visible=!1),R&&(R.mode="foot"),jn(Z,y,M),!0}function yf(c,y){if(!y||!c.flat)return!1;let M=Math.sin(c.angle),z=Math.cos(c.angle),R=y[0]-c.x,Z=y[2]-c.z,E=R*z-Z*M,Y=R*M+Z*z,he=y[1]-c.root.position.y,Ae=!1;return c.wheels.forEach((we,Se)=>{!c.flat[Se]&&he<c.wheelRadius*2+.1&&Math.hypot(E-we.position.x,Y-we.position.z)<c.wheelRadius+.2&&(c.flat[Se]=!0,Ae=!0)}),Ae}function $m(c,y,M,z){if(c.lastHitBy=M,y<c.wheelRadius*2&&yf(c,z)){c===te&&et("Pneu furado.");return}if(z&&h.sparks(z[0],z[1],z[2],4,2),c.kind==="bike"){if(y>.85||Math.random()<.45){c===te?(jn(u,14,M),u.health>0&&Math.random()<.3&&(Di(!0),u.trip=.6,et("Voc\xC3\xAA caiu da moto."))):ps(c,40,M);return}c.integrity=Math.max(0,c.integrity-4);return}if(y>.92){if(Vu(c,z),c===te){let R=(c.passengers??[]).filter(E=>E.health>0),Z=R.length&&Math.random()<R.length/(R.length+1.6)?R[Math.floor(Math.random()*R.length)]:u;jn(Z,Z===u?16:24,M),Z===u&&et("Tiro atravessou o vidro.")}else ps(c,38+Math.round(Math.random()*30),M);return}c.integrity=Math.max(0,c.integrity-3)}function jm(c,y){let M=Math.sin(c.angle),z=Math.cos(c.angle),R=y.boardRow??-1,Z=c.halfWidth+.55;for(let E of[y.boardSide??1,-(y.boardSide??1)]){let Y={x:c.x+z*E*Z+M*R,z:c.z-M*E*Z+z*R};if(On(y,Y.x,Y.z,s.walkSolids(Y.x,Y.z,0),[],[],.3))return Y}return{x:c.x-M*(c.halfLength+.7),z:c.z-z*(c.halfLength+.7)}}let pn=new Map;function Qm(c){let y=S.filter(z=>z.kind==="car"&&z!==te&&!z.burning&&!z.wrecked&&z.integrity>12&&Math.abs(z.speed)<3&&(!Sn||z!==it)&&!z.shopping&&(z.passengers?.length??0)+Xt.filter(R=>R.boardCar===z).length<z.spec.seats.length);y.sort((z,R)=>se(c,z)-se(c,R));let M=y[0];M&&(pn.has(M)||pn.set(M,{car:M,stall:0}),c.boardCar=M,c.boardSide=Math.sign(M.spec.seats[0][0]),c.boardRow=M.spec.seats[0][1],M.passengers??=[])}function vf(){for(let c of pn.keys()){for(let y of[...c.passengers??[]])pr(y);for(let y of Xt)y.boardCar===c&&(y.boardCar=null);c.speed=c.vx=c.vz=0}pn.clear()}function e0(c,y){let M=c.boardCar;if(!te||te!==M&&!pn.has(M)||M.burning||M.integrity<=0||(M.passengers?.length??0)>=M.spec.seats.length-(M===te?1:0))return c.boardCar=null,0;if(Math.hypot(M.vx,M.vz)>2.5){let ve=Cf(M,Xt.indexOf(c));return se(ve,c)>1.25?ch(c,ve,6.1,y):0}let z=jm(M,c),R=Math.sin(M.angle),Z=Math.cos(M.angle),E=c.x-M.x,Y=c.z-M.z,he=E*R+Y*Z,Ae=E*Z-Y*R,we=(z.x-M.x)*Z-(z.z-M.z)*R;if(se(c,z)<.75||se(c,M)<M.halfWidth+.9||Math.abs(Ae)>M.halfWidth+.2&&Math.abs(Ae)<M.halfWidth+1&&Math.abs(he)<M.halfLength-.55)return c.seated=!0,c.riding=M,c.boardCar=null,c.model.root.visible=!1,pn.has(M)&&M.driver&&ps(M,0,c),M.passengers.push(c),M.doorTime=.6,0;if(Math.abs(Ae)>=M.halfWidth+.45)return c.boardSide=Math.sign(Ae),Tn(c,z,4.8,y);let Se=Math.sign(we)||1,ce=(Math.sign(he)||1)*Math.max(M.halfLength+.65,Math.abs(he)),pe=M.halfWidth+.68;return Tn(c,{x:M.x+R*ce+Z*Se*pe,z:M.z+Z*ce-R*Se*pe},4.8,y)}function pr(c){let y=c.riding;if(c.riding=null,c.boardCar=null,!y)return;y.passengers=(y.passengers??[]).filter(he=>he!==c);let M=Math.sin(y.angle),z=Math.cos(y.angle),R=y.halfWidth+.62,Z=y.halfLength+.9,E=[[R,-1],[-R,-1],[R,.6],[-R,.6],[0,-Z],[R+.7,0],[-R-.7,0],[0,Z]].map(([he,Ae])=>({x:y.x+z*he+M*Ae,z:y.z-M*he+z*Ae})),Y=E.find(he=>On(c,he.x,he.z,s.walkSolids(he.x,he.z,0),q.filter(Ae=>Ae!==y),V,.3))??E[0];Object.assign(c,Y,{seated:!1,floorY:0,angle:y.angle,exitAnim:.3,exitSide:1}),p(c),c.model.root.visible=!0,c.model.shadow.visible=!0}function Mf(c,y=0){for(let M of q){if(M.kind!=="car")continue;let z=M===te||se(M,c)<40,R=fr(M),Z=R&&R.officer.seated&&R.officer.health>0&&["driving","patrol"].includes(R.mode)?R.officer:null,E=M.ownDriver?.seated&&M.driver&&M!==te?M.ownDriver:null,Y=M===te?u:Z??E;(pn.has(M)&&M.passengers?.length?M.passengers:[Y,...M.passengers??[]]).forEach((he,Ae)=>{if(he)if(z){if(hm(he.model,M,Ae),he===u&&u.boarding&&M===te){let we=u.boarding;we.t+=y;let Se=xt(we.t/.5,0,1),Me=Se*Se*(3-2*Se),ce=he.model.root.position;ce.lerpVectors(we.from,ce.clone(),Me),ce.y+=Math.sin(Math.PI*Se)*.14,Se>=1&&(u.boarding=null)}}else he.model.root.visible=!1})}}function t0(c){for(let y of Xt){if(!y.riding)continue;let M=y.riding;if(!te||te!==M&&!pn.has(M)||y.health<=0){pr(y);continue}y.x=M.x,y.z=M.z,y.floorY=0,y.attack-=c;let z=dr(y.commandTarget)?y.commandTarget:Bn;dr(z)&&y.attack<=0&&se(M,z)<18&&wf(y,z)}}function n0(c,y){let M=f(),z={...c,ground:l(c)};for(let R of k){let Z=R.officer;an(Z)&&(Z===y||ro({...Z,ground:l(Z)},z,M,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(R.retaliation=c)}}function bf(c){if(!c||!["civilian","resident"].includes(c.role)||c.health<=0){et("Mire em um pedestre dispon\xEDvel para recrutar.");return}c.role="ally",c.order="follow",c.surrender=0,c.fear=0,c.route=[],Xt.push(c),on?.npc===c&&(on=null),et("Guarda-costas recrutado."),Ee.bell()}function i0(c,y){if(u.health<=0||!y||!["civilian","resident","clerk"].includes(y.role)||y.robbed||se(u,y)>9||Math.abs(l(u)-l(y))>.65){on&&(on.npc.surrender=0,on=null);return}let M=u.x-y.x,z=u.z-y.z,R=Math.sin(y.angle)*M+Math.cos(y.angle)*z;if(on?.npc!==y){if(on&&(on.npc.surrender=0),on=null,R<Math.hypot(M,z)*.3||y.stagger>0||y.fear>0)return;on={npc:y,left:5}}if(y.surrender=1,y.angle=Math.atan2(M,z),on.left-=c,on.left<=0){y.robbed=!0,y.surrender=0,y.fear=7;let Z=I.find(E=>E.id===y.home.buildingId);if(oh("cash",y,Z?85+y.wallet*3:y.wallet),Z){Hi(30,u,!0),mt={...Z.outside,y:0,health:100,seated:!1,angle:0};let E=k.filter(Y=>Y.officer.health>0&&Y.car.integrity>12&&!Y.car.burning).sort((Y,he)=>se(Y.car,mt)-se(he.car,mt))[0];E&&(oi={unit:E,location:mt,time:42}),et("Alarme acionado. Viatura a caminho.")}else Hi(15),et("Dinheiro no ch\xE3o.");on=null}}function s0(){u.ragdoll||qn>0||u.health<=0||u.trip>.15||ri||(u.angle=P,po=1-po,u.pushX+=Math.sin(P)*1.5,u.pushZ+=Math.cos(P)*1.5,qn=ao,ur=!0,ks=lr,Wi(Kn),Ee.punch(!1))}function r0(){if(ur=!1,u.health<=0||te)return;let c=Tm(u,V.filter(R=>an(R)&&R.role!=="ally"&&Math.abs(l(u)-l(R))<.73),l(u)+u.lift,f());if(!c)return;Wi(c),Ee.punch(!0);let y=c.x-u.x,M=c.z-u.z,z=Math.max(.2,Math.hypot(y,M));c.pushX=y/z*3.6,c.pushZ=M/z*3.6,jn(c,18,u),c.role==="civilian"&&c.health>0&&!(c.brawl>0)&&Math.random()<(c.model.root.scale.x>1.05?.22:.12)&&(c.brawl=10,c.fear=0,c.attack=.4,Wi(c),et("Ele vai revidar!")),Pi=.19,Hi(c.role==="police"?28:12),et(c.health<=0?"Pedestre derrubado.":"Soco acertou.")}function o0(c){if(u.ragdoll||qn>0||Wt>0||u.health<=0||!H||!ge)return;if(fe<=0){c&&Wi(Kn),Wt=.32,et("Sem balas. Reponha na loja.");return}let y=Ca(u),M=Te==="rifle";fe--,Wt=M?.11:.52,G=.095,u.angle=P,u.model.root.rotation.y=P,sr(u.model,0,0,!0,!0,0,c?re:re-.22),(M?u.model.rifleMuzzle:u.model.muzzle).getWorldPosition(Ct),M?Ee.rifle():Ee.shot();let z=Pa(u),R=q.map(ve=>{let Ve=ve.root.position.y,gt=ve.kind==="bike",bt=gt?0:.1,kt=gt?0:ve.spec.belt;return{car:ve,oriented:{center:[ve.x,Ve+(gt?.67:(bt+kt)/2),ve.z],half:gt?[.31,.44,1.08]:[ve.halfWidth-.01,(kt-bt)/2,ve.halfLength-.05],angle:ve.angle}}});i.getWorldDirection(jt);let Z=q.filter(ve=>ve.rider&&ve.driver).map(ve=>({rider:ve,oriented:{center:[ve.x,ve.root.position.y+1.42,ve.z],half:[.32,.45,.33],angle:ve.angle}})),E=q.filter(ve=>ve.cabin&&ve!==te).map(ve=>{let Ve=um(ve);return{windowCar:ve,oriented:{center:[ve.x+Ve.z*Math.sin(ve.angle),ve.root.position.y+Ve.y,ve.z+Ve.z*Math.cos(ve.angle)],half:[Ve.halfX,Ve.halfY,Ve.halfZ],angle:ve.angle}}}),Y=f(),he=[...z,...Z,...E,...R],Ae=Ct.toArray(),we=wm(i.position.toArray(),jt.toArray(),Ae,Y,he,{ground:Xn}),Se=we.impact,Me=Se.hit,ce=s.doors.find(ve=>ve.private&&!ve.breached&&Se.solid===ve.closedSolid&&Math.hypot(Se.point[0]-ve.handle.x,Se.point[1]-ve.handle.y,Se.point[2]-ve.handle.z)<.28),pe=17;if(ce&&s.breachDoor(ce.id))pe=23,et("Fechadura rompida.");else if(Me?.actor&&Me.actor.role!=="ally")Wi(Me.actor),jn(Me.actor,Math.round(Qu(Se.point[1]-Me.y)*(M?1.45:1)),u),pe=Me.actor.role==="police"?34:23,Pi=.21,et(Me.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(Me?.rider||Me?.windowCar){let ve=Me.rider??Me.windowCar;Wi(ve),Me.windowCar&&Vu(ve,Se.point);let[Ve,gt]=ve.spec.seats?.[0]??[-.42,0],bt={oriented:{center:[ve.x+Ve*Math.cos(ve.angle)+gt*Math.sin(ve.angle),ve.root.position.y+(ve.seatHip??.54)+.66,ve.z-Ve*Math.sin(ve.angle)+gt*Math.cos(ve.angle)],half:[.26,.28,.29],angle:ve.angle}};ah(ve)&&(Me.rider||Ta(Ae,we.direction,[],[bt],52).hit)&&ps(ve,Me.rider?M?75:50:100,u)&&(Pi=.21)}else Me?.car?(Wi(Me.car),Me.car.lastHitBy=u,h.sparks(Se.point[0],Se.point[1],Se.point[2],5,2.2),yf(Me.car,Se.point)?et("Pneu furado."):Me.car.integrity=Math.max(0,Me.car.integrity-3),Pi=.16):c&&Wi(Kn);Hi(pe,u,y);for(let ve of V)["civilian","resident"].includes(ve.role)&&se(ve,u)<17&&(ve.fear=Math.max(ve.fear,4.8));a.emit(Ae,Se,{mark:Me?.car?!0:void 0,attach:Me?.car?.root})}function a0(c,y){let M=te;Fn(M,c,{throttle:y.y,steer:-y.x,brake:y.brake},r,ff());let z=M.bumpedVehicle;if(z&&A.includes(z)&&z.driver&&(z.lastProvoked??-100)<xe-20&&(z.lastProvoked=xe,Math.random()<.035&&Math.abs(z.speed)<2.2&&z.kind==="car")){let R=F(z);R&&ps(z,0,u)&&(R.brawl=8,R.fear=0)}ze>1.15&&Math.abs(M.speed)>2.4&&(P=bn(P,M.angle,c*2.3))}function l0(c,y){if(u.ragdoll&&(kc(u,c,l(u),(Ae,we)=>!Rn(Ae,we,.25,d(u))),u.ragdoll||u.health<=0))return;let M=Math.min(1,Math.hypot(y.x,y.y)),z=u.health>0&&!ri&&u.trip<.12,R=z?M*(y.aim?2.1:y.run?7.4:4.2):0,Z=P+Math.atan2(-y.x,y.y||0);y.jump&&z&&u.lift===0&&(di=4.18),(di!==0||u.lift>0)&&(u.lift=Math.max(0,u.lift+di*c-11.8*c*c),di=u.lift>0?di-23.6*c:0);let E=1-Math.exp(-c*(R>.02?19:27));u.vx+=(Math.sin(Z)*R-u.vx)*E,u.vz+=(Math.cos(Z)*R-u.vz)*E;let Y=zc(u,(u.vx+u.pushX)*c,(u.vz+u.pushZ)*c,d(u),m(u),V);u.pushX*=Math.exp(-c*6.2),u.pushZ*=Math.exp(-c*6.2),u.trip=Math.max(0,u.trip-c),qn<=0&&z&&(y.aim||M>.05)&&(u.angle=bn(u.angle,y.aim?P:Z,c*11));let he=u.model;if(p(u),he.root.position.set(u.x,l(u)+u.lift,u.z),u.alighting){let Ae=u.alighting;Ae.t+=c;let we=xt(Ae.t/.4,0,1),Se=we*we*(3-2*we);he.root.position.lerpVectors(Ae.from,he.root.position.clone(),Se),he.root.position.y+=Math.sin(Math.PI*we)*.1,we>=1&&(u.alighting=null)}if(he.shadow.visible=u.health>0&&u.lift<.06,u.health<=0){u.deadTime=(u.deadTime??0)+c;let Ae=xa(he,u.deadTime,-1);he.root.rotation.set(Ae,u.angle,0),he.root.position.y+=Math.abs(Math.sin(Ae))*.31;return}he.root.rotation.set(Math.min(1.25,u.trip*2.7),u.angle,0),sr(he,c,u.trip>.05?0:Math.min(7.5,Y/c),ge&&(y.aim||G>0)&&qn<=0,ge&&qn<=0,0,y.aim?re:0),(qn>0||y.aim&&!ge)&&ju(he,{aim:y.aim,punch:qn,pitch:re,walking:Y>.01,hand:po}),Y&&lt<=0&&u.lift===0&&(Ee.step(),lt=y.run?.27:.41)}function Sf(c){let y=Math.sin(c.angle),M=Math.cos(c.angle),z=c.halfWidth+.68;return[z,-z].flatMap(R=>[.28,-.82,1.18].map(Z=>({x:c.x+M*R+y*Z,z:c.z-y*R+M*Z}))).find(R=>On(R,R.x,R.z,s.walkSolids(R.x,R.z,0),q,[],.36))}function c0(c,y,M){let z=Math.sin(y.angle),R=Math.cos(y.angle);if(!M)return null;if(![.28,.5,.73,.92].some(he=>{let Ae=c.x+(M.x-c.x)*he,we=c.z+(M.z-c.z)*he,Se=Ae-y.x,Me=we-y.z;return Math.abs(Se*z+Me*R)<y.halfLength+.35&&Math.abs(Se*R-Me*z)<y.halfWidth+.35}))return M;let E=((c.x-y.x)*z+(c.z-y.z)*R>0?1:-1)*(y.halfLength+.8),Y=(M.x-y.x)*R-(M.z-y.z)*z;return{x:y.x+z*E+R*Y,z:y.z+R*E-z*Y}}function h0(c){let y=c.officer,M=c.car,z=Math.sin(M.angle),R=Math.cos(M.angle),Z=M.halfLength+.7,E=Sf(M)??[{x:M.x-z*Z,z:M.z-R*Z},{x:M.x+z*Z,z:M.z+R*Z}].find(Y=>On(Y,Y.x,Y.z,s.walkSolids(Y.x,Y.z,0),q,V,.37));return E?(y.seated=!1,y.model.root.visible=!0,y.x=E.x,y.z=E.z,y.floorY=0,p(y),y.angle=M.angle,c.park=null,y.exitAnim=.38,y.model.shadow.visible=!0,M.doorTime=.65,c.mode="foot",!0):!1}function wf(c,y){let M=q.includes(y)?y:null;if(se(c,y)>18||se(c,y)<.5||(M?M.integrity<=0:!an(y)))return!1;let z=l(c),R=(M?M.root.position.y:l(y))+(y===u?u.lift:0)+(M?1.08:1.27),Z=f();if(!so([c.x,z+1.35,c.z],[y.x,R,y.z],Z))return!1;c.angle=Math.atan2(y.x-c.x,y.z-c.z),c.model.root.position.set(c.x,z,c.z),c.model.root.rotation.y=c.angle;let E=Math.atan2(z+1.42-R,Math.max(.4,se(c,y)));sr(c.model,0,0,!0,!0,0,E),c.model.muzzle.getWorldPosition(wt);let Y=xe*14+c.x,he=Math.sin(Y)*(c.role==="ally"?.35:.48),Ae=y.x+Math.cos(c.angle)*he,we=y.z-Math.sin(c.angle)*he;cn.set(Ae,R+Math.cos(Y*1.4)*.32,we);let Se=Math.min(24,wt.distanceTo(cn)+1.65),Me=Ht.subVectors(cn,wt).normalize(),ce=Pa(c);M&&ce.push({actor:M,y:0,bounds:[y.x-.93,.3,y.z-1.02,y.x+.93,1.52,y.z+1.02]});let pe=Hc(wt.toArray(),Me.toArray(),Z,ce,Se,{ground:Xn});if(c.role==="ally"&&(y.role==="police"||fr(y)||pe.hit?.actor.role==="police")&&n0(c,pe.hit?.actor),pe.hit&&(pe.hit.actor===y||pe.hit.actor.role==="civilian")){let ve=c.role==="police"&&y===u?.62:.83;if(M&&pe.hit.actor===M){let Ve=[wt.x+Me.x*pe.distance,wt.y+Me.y*pe.distance,wt.z+Me.z*pe.distance];$m(M,Ve[1]-M.root.position.y,c,Ve)}else jn(pe.hit.actor,Math.round(Qu(wt.y+Me.y*pe.distance-pe.hit.y)*ve),c)}cn.copy(wt).addScaledVector(Me,pe.distance),c.role!=="ally"&&(y===u||y===te||kp(wt,cn,te??u))&&Wi(c),a.emit(wt.toArray(),pe,{enemy:!0});for(let ve of V)["civilian","clerk"].includes(ve.role)&&!(ve.brawl>0)&&se(ve,c)<16&&(ve.fear=Math.max(ve.fear,4.5));return c.attack=(c.role==="police"?.91:1.07)+(Math.sin(Y)+1)*.18,se(c,te??u)<31&&Ee.shot(),!0}function lh(c,y,M){let z=se(c,y);return c.stagger>0||c.exitAnim>0?{speed:0,aim:!1}:z<17&&c.attack<=0&&wf(c,y)||c.attack>.28&&z<15.5?(c.angle=bn(c.angle,Math.atan2(y.x-c.x,y.z-c.z),M*12),{speed:0,aim:!0}):{speed:z>3.3||Math.abs(l(c)-l(y))>1.8?ch(c,y,4.4,M):0,aim:z<12}}let La=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function Tf(c){let y={kind:"car",shape:c.car.shape};return io(y,c.route,c.startShift),y}function Da(c,y=!0){let{car:M,officer:z}=c;if(y){let R=Tf(c);si(M,R),M.driver=R.driver}else{let R={};io(R,c.route),M.driver=R.driver;let Z=Math.sin(M.angle),E=Math.cos(M.angle),Y=1/0;M.driver.route.forEach((he,Ae)=>{let we=he.x-M.x,Se=he.z-M.z,Me=Math.hypot(we,Se)+(we*Z+Se*E<0?16:0);Me<Y&&(Y=Me,M.driver.next=Ae)})}c.mode="patrol",c.retaliation=null,c.stop=null,c.departing=!1,z.seated=!0,z.model.root.visible=!1,fi(M,0)}function u0(c,y){let M=c.officer,z=La[c.beat%La.length];se(M,z)<1.1&&(c.beat++,z=La[c.beat%La.length]),c.intent=Tn(M,z,1.35,y)}function f0(c,y){let M=c.car,z=M.shape,R=Y=>rn.reduce((he,Ae)=>Math.abs(he-Y)<Math.abs(Ae-Y)?he:Ae),Z=null,E=1/0;for(let Y=0;Y<16;Y++){let he=Y/16*Math.PI*2,Ae=8.5+Y%3*1.2,we=y.x+Math.sin(he)*Ae,Se=y.z+Math.cos(he)*Ae,Me=R(we),ce=R(Se),pe=Math.abs(we-Me),ve=Math.abs(Se-ce),Ve=pe<5.2&&ve>11,gt=ve<5.2&&pe>11;if(!Ve&&!gt)continue;let bt=Ve?pe:ve;if(bt<2.6||bt>4.5)continue;let kt=Ve?Se>M.z?1:-1:we>M.x?1:-1,mn=Ve?kt>0?0:Math.PI:kt>0?Math.PI/2:-Math.PI/2,An={x:Ve?Me+Math.sign(we-Me)*3.7:we,z:gt?ce+Math.sign(Se-ce)*3.7:Se,angle:mn,kind:"car",shape:z};if(!or(An.x,An.z,An.angle,z)||!Ns(An,r,q,M)||V.some(En=>an(En)&&se(En,An)<2.6))continue;let ai=se(M,An)+Math.abs(bt-3.7)*3;ai<E&&(E=ai,Z=An)}return Z}function d0(c,y){Ft-=c,Ft<=0&&rt>0&&(j=Ca(y),j&&(mt={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle}),Ft=.24);let M=rt>0&&u.health>0?j?y:mt:null,z=Yc(rt);rt>0&&(rt=Math.max(0,rt-c*(j?.23:1.1)),rt===0&&(mt=null,j=!1,et("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),oi&&((oi.time-=c)<=0||se(oi.unit.car,oi.location)<10)&&(oi=null),k.forEach((R,Z)=>{let E=R.officer,Y=R.car;R.retaliation&&!an(R.retaliation)&&(R.retaliation=null);let he=oi?.unit===R?oi.location:null,Ae=R.retaliation,we=he??Ae??M,Se=!!(he||Ae||M&&Z<z);if((Y.burning||Y.wrecked)&&E.health>0&&(R.mode="foot",E.seated=!1),E.health<=0){R.mode="disabled",Y.driver=null,E.down<=0&&se(E,y)>13&&q.every(ce=>ce===Y||se(ce,R.berth)>3.5)&&($e(E),si(Y,R.berth),fi(Y,0),R.mode="ready",R.retaliation=null);return}if(R.mode==="patrol"&&(Se||Y.integrity<=0)&&(R.mode="driving",Y.driver=null,R.stop=null,R.stall=0,R.departing=!1),R.mode==="patrol")return;if(Ae&&(R.mode==="ready"||R.mode==="boarding"||R.mode==="reboard")&&(R.mode="foot"),R.mode==="ready"&&Se){let ce=Y.integrity>0&&se(E,Y)<22;R.mode=ce?"boarding":"foot",R.stop=null,R.stall=0,R.departing=ce&&se(Y,R.berth)<2}if(R.mode==="boarding"||R.mode==="reboard"){R.mode==="boarding"&&!Se&&(R.mode="reboard"),R.mode==="reboard"&&Se&&(R.mode="boarding");let ce=Sf(Y);if(Y.burning||Y.wrecked||Y.integrity<=0||se(E,Y)>45)R.mode=Se?"foot":"ready";else if(ce&&se(E,ce)<.63)E.seated=!0,E.model.root.visible=!1,Y.doorTime=.6,R.mode==="reboard"?Da(R,!1):R.mode="driving";else if(ce){let pe=c0(E,Y,ce),ve=On(E,pe.x,pe.z,s.walkSolids(pe.x,pe.z,0),q,[],.34)?pe:ce;R.intent=Tn(E,ve,R.mode==="boarding"?3.75:2.35,c)}}if(R.mode==="driving"){if(!Se&&Y.integrity>0&&!R.departing){Da(R,!1);return}let ce=we?se(Y,we):1/0;R.parkWait=Math.max(0,(R.parkWait??0)-c),R.park&&(!we||se(R.park,we)>17)&&(R.park=null),!R.park&&Se&&we&&ce<46&&R.parkWait<=0&&!R.departing&&(R.park=f0(R,we),R.parkWait=R.park?0:1.2);let pe=R.park?se(Y,R.park)<2.7:ce<12.7;!Se||Y.integrity<=0||R.stall>8.2&&!R.maneuver||pe&&!(we===te&&Math.abs(te.speed)>6)||R.park&&ce<6.5?(Fn(Y,c,{throttle:0,steer:0,brake:!0},r,q),Math.hypot(Y.vx,Y.vz)<2.7&&!h0(R)&&Y.integrity>0&&Fn(Y,c,{throttle:.21,steer:.26,brake:!1},r,q)):$c(R,R.park??we,r,q,V,c)}else if(R.mode==="foot")Se&&we===mt?R.intent=Tn(E,we,3.45,c):Se?R.combat=lh(E,we,c):Y.integrity>0&&se(E,Y)<40?R.mode="reboard":(R.mode="ready",se(y,Y)>25&&q.every(ce=>ce===Y||se(ce,R.berth)>3.5)&&(si(Y,R.berth),fi(Y,0)));else if(R.mode==="ready"){let ce=Z<2&&se(y,E)>24&&se(y,R.berth)>19&&se(E,R.berth)<30?Tf(R):null;ce&&Vc(ce,q.filter(pe=>pe!==Y),y,r)?Da(R):u0(R,c)}let Me=R.mode==="driving"||Se&&R.mode==="foot";Y.lamps.forEach((ce,pe)=>{ce.visible=!Me||Math.floor(xe*8+pe)%2===0}),Me&&Be<=0&&se(y,Y)<42&&(Ee.siren(),Be=1.35)})}let _o=(c,y,M)=>({x:c.x+Math.cos(c.angle)*y+Math.sin(c.angle)*M,z:c.z-Math.sin(c.angle)*y+Math.cos(c.angle)*M}),Af=!1;function p0(c,y){for(let M of q){let z=se(M,y)<60,R=M.kind==="bike",Z=M.root.position.y,E=M.lastImpact??0;if(M.impact>3.4&&M.impact>E+1.5){let Me=(M.lastSpeed??M.speed)>=0?1:-1,ce=_o(M,0,Me*(M.halfLength??1.1));z&&h.sparks(ce.x,Z+.45,ce.z,8+Math.round(M.impact*2),3+M.impact*.3),R||(Me>0?M.damageFront+=M.impact*1.7:M.damageRear+=M.impact*1.7)}M.lastImpact=M.impact,M.lastSpeed=M.speed;for(let Me of M.bumpers??[]){let ce=Me.end>0?M.damageFront:M.damageRear;if(Me.state===0&&ce>22&&(Me.state=1),Me.state===1&&ce>48&&(Me.state=2,t.attach(Me.mesh),Me.velocity.set(M.vx*.5+(Math.random()-.5),1.4,M.vz*.5+(Math.random()-.5)),Me.spin=(Math.random()-.5)*5),Me.state===2){let pe=Me.mesh;pe.position.addScaledVector(Me.velocity,c),Me.velocity.y-=9.8*c;let ve=Xn(pe.position.x,pe.position.z)+.15;pe.position.y<ve?(pe.position.y=ve,Me.velocity.y=0,Me.velocity.x*=Math.exp(-c*5),Me.velocity.z*=Math.exp(-c*5),Me.spin*=Math.exp(-c*5),pe.rotation.x+=(0-pe.rotation.x)*Math.min(1,c*8),pe.rotation.z+=(0-pe.rotation.z)*Math.min(1,c*8)):pe.rotation.x+=Me.spin*c*.6,pe.rotation.y+=Me.spin*c}}if(M.wrecked){M.wreckClock=(M.wreckClock??0)+c,z&&M.wreckClock<30&&Math.random()<c*5&&h.engineSmoke(M.x,Z+1.1,M.z,!0);continue}let Y=_o(M,0,R?.35:M.halfLength-.75),he=Z+(R?.65:M.spec.belt+.1);if(M.integrity<45&&z&&Math.random()<c*(M.integrity<22?14:6)&&h.engineSmoke(Y.x,he,Y.z,M.integrity<22),!M.burning&&M.integrity<=12){M.speed=0,M.vx=0,M.vz=0,M===te&&Di(!0);for(let Me of[...M.passengers??[]])pr(Me);(M.driver||fr(M)?.officer.seated)&&ps(M,0,M),M.driver=null,M.burning=!0,M.fire=R?4.5:7,se(M,u)<4&&et("O ve\xC3\xADculo pegou fogo! Saia j\xC3\xA1.")}if(M.burning){if(M.fire-=c,M.integrity=Math.min(M.integrity,12),z)for(let Me=0;Me<2;Me++)h.flame(Y.x,he,Y.z,R?.7:1.1);M.fire<=0&&m0(M);continue}let Ae=Math.hypot(M.vx,M.vz),we=Math.abs(M.vx*Math.cos(M.angle)-M.vz*Math.sin(M.angle)),Se=M===te&&Af&&Ae>8;if(Ae>4&&(we>2.6||Se)){let Me=-(M.wheelbase??1.5)/2,ce=R?[_o(M,0,Me)]:[_o(M,-(M.halfWidth-.17),Me),_o(M,M.halfWidth-.17,Me)];M.skid??=ce.map(pe=>({...pe})),se(M.skid[0],ce[0])>.45&&(ce.forEach((pe,ve)=>{h.skid(M.skid[ve].x,M.skid[ve].z,pe.x,pe.z,Xn(pe.x,pe.z)),M.skid[ve]={...pe}}),z&&we>3.5&&h.tireSmoke(ce[0].x,Z+.2,ce[0].z))}else M.skid=null}}function m0(c){let y={x:c.x,z:c.z},M=c.root.position.y;c===te&&(Di(!0),jn(u,100,y));for(let z of[...c.passengers??[]])pr(z),jn(z,100,y);(c.driver||fr(c)?.officer.seated)&&ps(c,100,y),c.burning=!1,c.wrecked=!0,c.integrity=0,c.driver=null,c.wreckClock=0,c.rider&&(c.rider.root.visible=!1),rm(c),h.explosion(c.x,M,c.z),Ee.explosion(),se(c,te??u)<25&&(Vi=.35);for(let z of[...V,u]){if(z.seated||z===u&&te)continue;let R=se(z,y);if(R>7.5)continue;let Z=1-R/7.5,E=Math.max(.2,R),Y=(z.x-y.x)/E,he=(z.z-y.z)/E;Bc(z,Y*(4+8*Z),3+5*Z,he*(4+8*Z)),jn(z,Math.round(115*Z),y)}for(let z of q){if(z===c||z.wrecked)continue;let R=se(z,y);if(R>7)continue;let Z=1-R/7,E=Math.max(.2,R);z.integrity=Math.max(0,z.integrity-48*Z),z.vx+=(z.x-y.x)/E*9*Z/(z.handling?.mass??1),z.vz+=(z.z-y.z)/E*9*Z/(z.handling?.mass??1),z.damageFront+=18*Z,z.damageRear+=18*Z}for(let z of V)se(z,y)<35&&["civilian","resident"].includes(z.role)&&(z.fear=Math.max(z.fear,6));c.lastHitBy===u&&Hi(28,u)}function g0(c){let y=rn.reduce((z,R)=>Math.abs(z-c.x)<Math.abs(R-c.x)?z:R),M=rn.reduce((z,R)=>Math.abs(z-c.z)<Math.abs(R-c.z)?z:R);return Math.min(Math.abs(c.x-y),Math.abs(c.z-M))>3.5?null:Math.abs(c.x-y)<Math.abs(c.z-M)?{x:y+(c.x>=y?4.4:-4.4),z:c.z}:{x:c.x,z:M+(c.z>=M?4.4:-4.4)}}function x0(c){if(X.wait-=c,!X.target&&X.wait<=0){X.wait=1;let ce=S.filter(pe=>pe.kind==="car"&&pe!==te&&!pe.driver&&!pe.burning&&!pe.towed&&!pe.shopping&&!pn.has(pe)&&(pe.wrecked||pe.abandoned>18&&pe.leftInLane));ce.sort((pe,ve)=>se(pe,N)-se(ve,N));for(let pe of ce){let ve=pe.halfLength+N.halfLength+.14,Ve=q.filter(bt=>bt!==N&&bt!==pe),gt=[1,-1].map(bt=>({x:pe.x+Math.sin(pe.angle)*ve*bt,z:pe.z+Math.cos(pe.angle)*ve*bt,angle:pe.angle+(bt<0?Math.PI:0)})).filter(bt=>Ns({...bt,kind:"car",shape:N.shape},r,Ve));if(gt.sort((bt,kt)=>se(bt,N)-se(kt,N)),!!gt.length){Object.assign(X,{target:pe,hitch:gt[0],stop:null,maneuver:null,stall:0,engage:0});break}}}let y=X.target,M=()=>{if(!y)return .35;if(X.unload>0)return 1-X.unload/2.5<.45?-.5:.35;if(X.engage>0&&!X.carrying){let ce=X.engage/2.2;return ce<.38||ce<.58?-.5:.12}return X.carrying?.12:.35};if(N.armAngle+=(M()-N.armAngle)*Math.min(1,c*5),!y)return;if(y===te||y.driver||y.burning||y.towed){y.towTilt=0,Object.assign(X,{target:null,hitch:null,carrying:!1,unload:0,engage:0});return}let z=X.carrying?-.14:X.engage>1.3?-.14*Math.min(1,(X.engage-1.3)/.9):0,R=X.unload>0&&X.unload<1.4?0:z;if(y.towTilt=(y.towTilt??0)+(R-(y.towTilt??0))*Math.min(1,c*4),X.unload>0){X.unload-=c,X.unload<=0&&(y.towed=!0,y.root.visible=!1,y.x=480,y.z=480,y.abandoned=0,y.towTilt=0,y.steer=0,Object.assign(X,{target:null,hitch:null,carrying:!1,unload:0,engage:0,wait:2.5,stop:null}));return}let Z=q.filter(ce=>ce!==y),E=se(N,X.hitch);if(!X.carrying&&E<3.4&&Math.abs(y.speed)<.7){X.align=(X.align??0)+c;let ce=X.hitch,pe=Math.abs(Math.atan2(Math.sin(N.angle-ce.angle),Math.cos(N.angle-ce.angle))),ve=se(N,ce);if((ve>.12||pe>.06)&&X.align<7){let Ve=Math.min(ve,c*2.4),gt={x:N.x+(ce.x-N.x)/Math.max(ve,.001)*Ve,z:N.z+(ce.z-N.z)/Math.max(ve,.001)*Ve,angle:bn(N.angle,ce.angle,c*2.4),kind:"car",shape:N.shape};Ns(gt,r,Z,N)&&Object.assign(N,{x:gt.x,z:gt.z,angle:gt.angle}),N.vx=N.vz=N.speed=0;return}Fn(N,c,{throttle:0,steer:0,brake:!0},r,Z),X.engage+=c,X.engage>=2.2&&(X.carrying=!0,X.stop=null,X.maneuver=null,X.stall=0,X.prevAngle=y.angle);return}X.carrying||(X.engage=0,X.align=0);let{approach:Y,gate:he,bay:Ae}=Ti,we=N.z>57&&Math.abs(N.x-he.x)<3.4;if(X.carrying&&N.z>Ae.z-1.2&&we){N.speed=N.vx=N.vz=0,y.speed=y.vx=y.vz=0,X.unload=2.5;return}let Se=X.carrying?we||se(N,Y)<4?Ae:Y:N.z>60.2?Y:X.hitch,Me=se(N,Se);if(Me<15||N.z>60||Se.x>62){let ce=zs(N,Se,Math.min(X.carrying?5:7.5,Me*.85));Fn(N,c,ce,r,Z)}else $c(X,Se,r,Z,V,c);if(X.carrying){let ce=y.halfLength+N.halfLength+.14,pe=Math.atan2(N.x-y.x,N.z-y.z),ve=N.x-Math.sin(pe)*ce,Ve=N.z-Math.cos(pe)*ce;Ci(ve,Ve,pe,r,y.shape)&&Object.assign(y,{x:ve,z:Ve,angle:pe});let gt=bn(0,pe-(X.prevAngle??pe),1)/Math.max(c,.001);X.prevAngle=pe,y.steer+=(xt(gt*.45,-1,1)-y.steer)*Math.min(1,c*8),y.vx=y.vz=0,y.speed=N.speed}}function Ef(c,y){for(let R of C)R!==te&&R.stolen&&!R.towed&&(R.abandoned+=c);x0(c);let M={player:te,vehicles:ff(),keepToStreet:!0},z=k.filter(R=>R.mode==="patrol").map(R=>R.car);for(let[R,Z]of pn){if(!te||R.wrecked||R.burning){for(let E of[...R.passengers])pr(E);pn.delete(R);continue}R.passengers?.length&&(se(R,te)>8?$c(Z,te,r,q,V.filter(E=>!E.seated),c):Fn(R,c,{throttle:0,steer:0,brake:!0},r,q))}bm([...A.filter(R=>!pn.has(R)&&!R.shopping&&!R.towed&&!(X.carrying&&X.target===R)),...z],M,V,r,c,x,s.signals),C.forEach((R,Z)=>{if(R.towed){let{x:E,z:Y,angle:he}=[..._,...T][Z];se(y,{x:E,z:Y})>40&&Vc({...R,x:E,z:Y,angle:he},M.vehicles.filter(Ae=>Ae!==R),y,r)&&(si(R,{x:E,z:Y,angle:he}),R.stolen=!1,R.towed=!1,R.root.visible=!0)}});for(let R of C)pn.has(R)||X.carrying&&X.target===R||R.towed||(R!==te&&Math.hypot(R.vx,R.vz)>.06?Fn(R,c,{throttle:0,steer:0,brake:!0},r,M.vehicles):R!==te&&(R.impact=Math.max(0,R.impact-c*21)));for(let R of q){if(R.routeIndex>=0&&R!==te&&!pn.has(R)&&!R.shopping&&!(X.carrying&&X.target===R)){R.abandoned+=c;let Z=R.towed&&R.abandoned>12,E=(R.driver?.stuck??0)>24;if((Z||E)&&!R.burning&&se(y,R)>17){let Y={};if(io(Y,R.routeIndex,Math.floor(xe)%7),Y.kind=R.kind,Y.shape=R.shape,Vc(Y,M.vehicles.filter(he=>he!==R),y,r)){Object.assign(R,Y,{towed:!1}),R.root.visible=!0;let he=R.ownDriver;he&&!he.seated&&!he.riding&&he.role==="civilian"&&se(he,y)>20&&($e(he),he.seated=!0,he.model.root.visible=!1)}}}R!==te&&R.impact>5&&se(y,R)<18&&Qe<=0&&(Ee.crash(),Qe=.32),!R.towed&&(fi(R,c,R.steer),R.rider&&(R.rider.root.visible=!!R.driver&&R.integrity>0,R.rider.root.visible&&Uu(R.rider,R)))}if(te){if(te.impact>4.1&&Qe<=0){Ee.crash(),Vi=.24,Qe=.36;let R=te,Z=R.impact;et(R.integrity<43?"Motor avariado.":"Colis\xE3o."),te&&R.kind==="bike"&&Z>10.5&&(jn(u,Math.min(40,Math.round(Z*1.6))),R.integrity=Math.max(0,R.integrity-4),Di(!0),et("Voc\xEA caiu da moto."))}if(te&&te.integrity<=0&&Math.hypot(te.vx,te.vz)<3){let R=xo(te);Di(!0),et(R+" sem condi\xE7\xF5es de rodar.")}}}function Tn(c,y,M,z){if(!y)return 0;c.walkIntent=y;let R=d(c),Z=se(c,y);if(Z<.13)return 0;let E=s.interiorAt(c.x,c.z,l(c)),Y=s.interiorAt(y.x,y.z,y.y??l(y));if(!E&&!Y)return o(c,y,M,z);let he=y,Ae=(Me,ce)=>[.24,.46,.68,.88,1].every(pe=>Rn(Me.x+(ce.x-Me.x)*pe,Me.z+(ce.z-Me.z)*pe,.29,R));if(!Ae(c,y)){let Me=1/0;for(let ce of R)if(!(se(c,ce)>Math.hypot(ce.w,ce.d)*.5+3.1))for(let pe of[-1,1])for(let ve of[-1,1]){let Ve={x:ce.x+pe*(ce.w*.5+.44),z:ce.z+ve*(ce.d*.5+.44)},gt=se(c,Ve),bt=se(Ve,y);if(gt<.3||gt>4.5||!Ae(c,Ve))continue;let kt=gt+bt+(bt>Z+.25?1.7:0);kt<Me&&(Me=kt,he=Ve)}}let we=Math.atan2(he.x-c.x,he.z-c.z);c.angle=bn(c.angle,we,z*8.5);let Se=Math.min(M*z,se(c,he));return da(c,c.x+Math.sin(we)*Se,c.z+Math.cos(we)*Se,.26,R)?M:0}let ms={x:NaN,z:NaN,angle:0};function Cf(c,y){let M=l(c);if(s.interiorAt(c.x,c.z,M))return{x:c.x,z:c.z,y:M};let z=Math.floor((Math.sqrt(1+y)-1)*.75),R=(y%2===0?1:-1)*(1.05+y%5*.66),Z=(q.includes(c)?c.halfLength+3.2:3.1)+z*1.1,E=c===u?ms.angle:c.angle,Y=Math.sin(E),he=Math.cos(E);for(let[Ae,we]of[[Z,R],[Z,R*.38],[Z,0],[1.6,0],[0,R*.5]]){let Se=c.x-Y*Ae+he*we,Me=c.z-he*Ae-Y*we;if(On(c,Se,Me,s.walkSolids(Se,Me,M),q,[],.44))return{x:Se,z:Me,y:M}}return{x:c.x,z:c.z,y:M}}function ch(c,y,M,z){let R=s.interiorAt(c.x,c.z,l(c)),Z=s.interiorAt(y.x,y.z,y.y??l(y));if(R?.buildingId===Z?.buildingId&&Math.abs((R?.floor??0)-(Z?.floor??0))<1.1)return c.pursuitRoute=[],c.pursuitKey="",Tn(c,y,M,z);let E=(Z?.buildingId??"street")+":"+(Z?.floor??0);if(c.pursuitKey!==E){c.pursuitKey=E;let Y=[],he=s.buildings.find(Me=>Me.id===R?.buildingId),Ae=s.buildings.find(Me=>Me.id===Z?.buildingId),we=he?.units.find(Me=>Math.abs(Me.floor-R.floor)<.25),Se=Ae?.units.find(Me=>Math.abs(Me.floor-Z.floor)<.25);he&&Y.push(we?.inside,we?.entry,we?.outside,...[...we?.stairs??[]].reverse(),he.inside,he.entry,he.outside),Ae&&Y.push(Ae.outside,Ae.entry,Ae.inside,...Se?.stairs??[],Se?.outside,Se?.entry,Se?.inside),c.pursuitRoute=Y.filter(Boolean)}for(;c.pursuitRoute.length&&se(c,c.pursuitRoute[0])<.66&&Math.abs(l(c)-(c.pursuitRoute[0].y??0))<.85;)c.pursuitRoute.shift();return Tn(c,c.pursuitRoute[0]??y,M,z)}function _0(c,y,M){let z=c.itinerary[0];return z?se(c,z)<.58&&Math.abs(l(c)-(z.y??0))<1.1?(c.itinerary.shift(),0):Tn(c,z,y,M):0}function y0(c){let y=c.calling;c.calling=null,!(!y||c.health<=0)&&(rt=Math.min(64,Math.max(rt,0)+y.pressure*.7),mt={x:y.x,z:y.z,y:0,health:100,seated:!1,angle:0},j=!1,et("Uma testemunha ligou para a pol\xEDcia."))}function v0(c,y){if(c.brawl-=y,c.health<35)return c.brawl=0,c.fear=6,{speed:0};let M=se(c,u);if(M>16)return c.brawl=0,{speed:0};if(c.punchLand>0&&(c.punchLand-=y,c.punchLand<=0&&se(c,u)<1.4&&u.health>0&&!u.ragdoll)){jn(u,6,c);let z=Math.max(.2,M);u.pushX+=(u.x-c.x)/z*2.4,u.pushZ+=(u.z-c.z)/z*2.4,Ee.punch(!0)}return te?{speed:0}:M>1.15?{speed:Tn(c,u,3.6,y)}:(c.angle=bn(c.angle,Math.atan2(u.x-c.x,u.z-c.z),y*10),c.attack<=0&&(c.punchT=ao,c.punchHand=1-(c.punchHand??0),c.attack=1.05,c.punchLand=lr),{speed:0})}function Rf(){let c=[];st&&!te&&an(u)&&c.push(u);for(let y of Xt)y.order==="dealer"&&an(y)&&y.post&&se(y,y.post)<7&&c.push(y);return c}let mr=()=>Object.keys(hr).filter(c=>Ze[c]>0);function M0(c){if(ke-=c,!(ke>0)&&(ke=4+Math.random()*4,!!mr().length))for(let y of Rf()){if(V.some(R=>R.buyer?.seller===y))continue;let M=A.find(R=>R.kind==="car"&&R.driver&&R.ownDriver?.seated&&!pn.has(R)&&!R.burning&&Math.abs(R.speed)<2&&se(R,y)<26&&(R.visitTime??-100)<xe-65);if(M&&Math.random()<.12){let R=Math.cos(M.angle),Z=-Math.sin(M.angle),E=[-1,1].map(Y=>({x:M.x+R*Y*2.4,z:M.z+Z*Y*2.4})).find(Y=>or(Y.x,Y.z,M.angle,M.shape)&&Ns({...Y,angle:M.angle,kind:M.kind,shape:M.shape},r,q.filter(he=>he!==M)));if(E){Object.assign(M,E);let Y=M.ownDriver,he=M.driver;if(ps(M,0,y)){M.shopping=!0,M.visitTime=xe,M.speed=M.vx=M.vz=0,Y.shoppingTrip={car:M,route:he},Y.fear=0,Y.buyer={seller:y,wait:0};continue}}}let z=V.find(R=>R.role==="civilian"&&an(R)&&R.fear<=0&&!R.buyer&&!R.calling&&!(R.brawl>0)&&!R.itinerary.length&&se(R,y)>4&&se(R,y)<38&&(R.boughtAt??-99)<xe-45);z&&(z.buyer={seller:y,wait:0})}}function b0(c,y){let M=c.buyer,z=M.seller;if(!Rf().includes(z)||!mr().length)return c.buyer=null,0;if(se(c,z)>1.3)return Tn(c,z,1.6,y);if(c.angle=bn(c.angle,Math.atan2(z.x-c.x,z.z-c.z),y*6),M.wait+=y,M.wait<1.6)return 0;let R=mr(),Z=R[Math.floor(Math.random()*R.length)],E=Math.min(Ze[Z],1+Math.floor(Math.random()*3)),Y=E*hr[Z].retail;return Ze[Z]-=E,Pe+=Y,c.buyer=null,c.boughtAt=xe,z===u?(et("+R$ "+Y+" \xB7 "+hr[Z].name),Ee.sale(),Ca(u)?Hi(16,u,!0):af(u,12)):(z.sales=(z.sales??0)+Y,se(z,te??u)<30&&Ee.sale()),0}function S0(c,y){let M=f();for(let R of k){let Z=R.officer;!an(Z)||R.retaliation||se(Z,c)<26&&ro({...Z,ground:l(Z)},{...c,ground:l(c)},M,{range:26,fov:Math.PI*.9,eye:1.6,aim:1.2})&&(R.retaliation=c)}let z=k.map(R=>R.officer).filter(R=>an(R)&&se(R,c)<22&&k.some(Z=>Z.officer===R&&Z.retaliation===c)).sort((R,Z)=>se(R,c)-se(Z,c))[0];if(z){if(c.health>45)return c.fleeing=!1,lh(c,z,y);c.fleeing=!0;let R=Math.atan2(c.x-z.x,c.z-z.z),Z={x:c.x+Math.sin(R)*6,z:c.z+Math.cos(R)*6};return{speed:Tn(c,Z,4.6,y),aim:!1}}if(c.post&&!c.fleeing){let R=V.find(Z=>Z.buyer?.seller===c);if(c.offerDelay=(c.offerDelay??0)-y,!R&&c.offerDelay<=0&&mr().length){c.offerDelay=4+Math.random()*4;let Z=V.find(E=>an(E)&&E.role==="civilian"&&!E.buyer&&!E.calling&&E.fear<=0&&se(E,c.post)<6&&(E.boughtAt??-99)<xe-30);Z&&Math.random()<.55&&(Z.buyer={seller:c,wait:0},R=Z)}if(R&&se(R,c)>1.15&&se(R,c.post)<6)return{speed:Tn(c,R,1.2,y),aim:!1};if(R)return{speed:0,aim:!1};if(!c.dealerWalk||se(c,c.dealerWalk)<.5||(c.dealerWalkTime-=y)<=0){let Z=Math.floor(Math.random()*8);c.dealerWalk=null,c.dealerWalkTime=5;for(let E=0;E<8;E++){let Y=(Z+E)*Math.PI/4,he={x:c.post.x+Math.sin(Y)*3.4,z:c.post.z+Math.cos(Y)*3.4};if(se(c,he)>1.5&&On(c,he.x,he.z,s.walkSolids(he.x,he.z,0),q,[],.48)){c.dealerWalk=he;break}}}if(c.dealerWalk)return{speed:Tn(c,c.dealerWalk,1.25,y),aim:!1}}return c.post&&se(c,c.post)>.8?{speed:Tn(c,c.post,c.fleeing?3.2:2.6,y),aim:!1}:(c.fleeing=!1,{speed:0,aim:!1})}function w0(c,y=Kn){let M=Xt.filter(z=>z.health>0&&(y?.role!=="ally"||z===y));if(!M.length){et("Recrute algu\xE9m primeiro.");return}if(c==="toggle"&&(c=M.some(z=>z.order!=="wait"&&z.order!=="dealer")?"wait":"follow"),c==="undealer"){for(let z of M)if(z.order==="dealer"){z.order="follow",z.post=null,z.dealerWalk=null,z.commandTarget=null;for(let R of B)R.buyer?.seller===z&&(R.buyer=null)}et("Ponto de venda desfeito.")}else if(c==="follow"||c==="wait"){for(let z of M)z.commandTarget=null,z.order=c,z.hold={x:z.x,z:z.z},z.post=null;et(c==="wait"?"Gangue: esperem aqui.":"Gangue: comigo.")}else if(c==="attack"){let R=(y?.role!=="ally"?y:null)??k.map(Z=>Z.officer).filter(Z=>an(Z)&&se(Z,u)<30&&rt>0).sort((Z,E)=>se(Z,u)-se(E,u))[0];if(R){for(let Z of M)Z.commandTarget=R;et("Gangue: ataquem!")}else et("Mire no alvo para a gangue atacar.")}else if(c==="dealer"){for(let z of M)z.order="dealer",z.dealerWalk=null,z.post={x:z.x,z:z.z},z.sales??=0,z.boardCar=null;et(mr().length?"Ponto de venda montado.":"Ponto montado, mas falta estoque.")}Ee.bell()}function T0(c){if(ye!=="pad"&&ye!=="touch")return;let y=.2,M=null;for(let{actor:z,y:R}of Pa(u)){if(z.role==="ally"||se(z,u)>28)continue;Mt.set(z.x,R+1.25,z.z).project(i);let Z=Math.hypot(Mt.x,Mt.y);Mt.z<1&&Z<y&&(y=Z,M={x:Mt.x,y:Mt.y})}M&&(P-=xt(M.x*2.2*c,-.04,.04),re-=xt(M.y*1.6*c,-.03,.03))}function hh(c,y,M=!1){V=B.filter(E=>se(E,y)<(E.role==="civilian"?69:47)||E.role==="ally"||E.role==="police"||E===Bn);let z=new Set(V);for(let E of B)E.model.root.visible=z.has(E)&&!E.seated;let R=te?V:[...V,u],Z=new Map(V.map(E=>[E,{x:E.x,z:E.z}]));M||d0(c,y);for(let E of V){if(E.seated||(E.attack-=c,E.stagger=Math.max(0,E.stagger-c),E.injuryCooldown-=c,E.exitAnim=Math.max(0,E.exitAnim-c),E.exitAge+=c,E.ragdoll&&E.health>0&&kc(E,c,l(E),(ce,pe)=>!Rn(ce,pe,.22,d(E)))))continue;if(E.health<=0){if(E.down=Math.max(0,E.down-c),E.deadTime+=c,E.ragdoll)kc(E,c,l(E),(ce,pe)=>!Rn(ce,pe,.22,d(E))),E.drop&&E.drop.position.set(E.x,l(E)+.019,E.z);else if(E.deadTime<1.2){E.x+=E.pushX*c,E.z+=E.pushZ*c,E.pushX*=Math.exp(-c*5),E.pushZ*=Math.exp(-c*5);let ce=xa(E.model,E.deadTime,E.fallDir);E.model.root.rotation.set(ce,E.angle,0),E.model.root.position.set(E.x,l(E)+Math.abs(Math.sin(ce))*.31,E.z),E.drop&&E.drop.position.set(E.x+Math.sin(E.angle)*E.fallDir*1.25,l(E)+.019,E.z+Math.cos(E.angle)*E.fallDir*1.25)}if(E.drop){let ce=Math.min(.63,.32+(19-E.down)*.09);E.drop.rotation.z=E.angle,E.drop.scale.set(Math.max(.38,ce),Math.max(.24,ce*.68),1)}E.role!=="police"&&E.down<=0&&se(E.home,y)>10&&se(E,y)>10&&V.every(ce=>ce===E||!an(ce)||se(ce,E.home)>1.55)&&On(E,E.home.x,E.home.z,s.walkSolids(E.home.x,E.home.z,0),q,[],.42)&&($e(E),ie.includes(E)&&(E.seated=!0,E.model.root.visible=!1));continue}let Y=0,he=!1,Ae=k.find(ce=>ce.officer===E);if(Ae)Y=Ae.combat?.speed??Ae.intent??0,he=!!Ae.combat?.aim,Ae.intent=0,Ae.combat=null;else if(E.role==="ally"&&E.order==="dealer")({speed:Y,aim:he}=S0(E,c));else if(E.role==="ally")if(te&&E.order!=="wait"&&(!E.boardCar||E.boardCar===te&&se(E,te)>12)&&Qm(E),E.boardCar)Y=e0(E,c);else if(dr(E.commandTarget)||dr(Bn))({speed:Y,aim:he}=lh(E,dr(E.commandTarget)?E.commandTarget:Bn,c));else if(E.order==="wait")E.hold&&se(E,E.hold)>.9&&(Y=Tn(E,E.hold,3.4,c));else{let ce=Cf(y,Xt.indexOf(E));(se(ce,E)>1.25||Math.abs(l(E)-ce.y)>1.75)&&(Y=ch(E,ce,te?6.1:4.45,c))}else if(E.brawl>0&&an(u))({speed:Y}=v0(E,c));else if(E.calling)E.calling.time-=c,E.angle=bn(E.angle,Math.atan2(E.x-E.calling.x,E.z-E.calling.z),c*4),E.calling.time<=0&&y0(E);else if(E.buyer&&E.fear<=0)Y=b0(E,c);else if(E.shoppingTrip&&!E.buyer){let{car:ce,route:pe}=E.shoppingTrip;if(ce===te||ce.driver||ce.wrecked||ce.burning)E.shoppingTrip=null,ce.shopping=!1;else if(se(E,ce)<ce.halfLength+.8){E.seated=!0,E.shoppingTrip=null,ce.shopping=!1,ce.driver=pe;continue}else Y=Tn(E,ce,1.8,c)}else if(E.surrender<=0){let ce=E.path[E.next];if(E.role==="clerk"&&(se(E,E.home)>.55?ce=E.home:E.angle=bn(E.angle,se(u,E)<4?Math.atan2(u.x-E.x,u.z-E.z):E.home.angle,c*4)),E.role==="civilian"&&E.x<61&&!E.itinerary.length&&E.fear<=0&&I.length&&(E.scheduleClock-=c,E.scheduleClock<=0)){let pe=I[Math.floor(Math.abs(E.home.x*11+E.home.z*4+xe))%I.length];se(E,pe.outside)<38&&(E.itinerary=[pe.outside,pe.entry,pe.inside,pe.entry,pe.outside]),E.scheduleClock=36+Math.abs(E.home.x)%25}if(E.fear=Math.max(0,E.fear-c),E.fear>0&&se(E,y)<15){let pe=Math.atan2(E.x-y.x,E.z-y.z);for(let ve of[0,.84,-.84,1.52,-1.52]){let Ve=pe+ve;if(da(E,E.x+Math.sin(Ve)*3.7*c,E.z+Math.cos(Ve)*3.7*c,.22,d(E))){E.angle=bn(E.angle,Ve,c*8),Y=3.7;break}}}else E.itinerary.length?Y=_0(E,E.pace,c):ce&&(E.path.length&&se(E,ce)<.54&&(E.next=(E.next+1)%E.path.length,ce=E.path[E.next]),Y=Tn(E,ce,E.pace,c))}let we=Z.get(E);if(we&&E.exitAnim<=0&&(E.walkIntent||E.x!==we.x||E.z!==we.z||Math.abs(E.pushX)+Math.abs(E.pushZ)>.015)){let ce=A0(E,we,c),pe=ce?0:E.x-we.x+E.pushX*c,ve=ce?0:E.z-we.z+E.pushZ*c;ce&&(Y=0),E.x=we.x,E.z=we.z;let Ve=Ae?.mode==="boarding"?q.filter(kt=>kt!==Ae.car):q,gt=R.filter(kt=>kt!==E&&se(kt,we)<3.6&&(!E.boardCar||kt.role!=="ally")),bt=zc(E,pe,ve,d(E),l(E)>1.25?[]:Ve,gt,.29);if(Y>0&&bt<Y*c*.55){let kt=Math.atan2(pe,ve),mn=E.detourSide??(E.home.x<0?-1:1),An=d(E),ai=gt.filter(En=>se(En,E)<4);for(let En of[mn*.65,mn*1.25,-mn*.65,-mn*1.25,mn*1.85,-mn*1.85]){let zt=kt+En,Na=Math.sin(zt),Lf=Math.cos(zt);if(On(E,E.x+Na*.7,E.z+Lf*.7,An,Ve,ai,.32)&&zc(E,Na*Y*c,Lf*Y*c,An,Ve,ai,.29)>c*.2){E.detourSide=Math.sign(En),E.angle=bn(E.angle,zt,c*7);break}}(E.stuckTime??0)>.7&&(E.repath=Math.min(E.repath??0,.12))}if(E.walkIntent&&se(E,E.walkIntent)>.65&&se(E,we)<c*.18?E.stuckTime=(E.stuckTime??0)+c:E.stuckTime=0,E.walkIntent=null,E.stuckTime>=3){let kt=null;for(let mn=.55;mn<=4&&!kt;mn+=.45)for(let An=0;An<16;An++){let ai=E.x+mn*Math.sin(An*Math.PI/8),En=E.z+mn*Math.cos(An*Math.PI/8);if(On(E,ai,En,s.walkSolids(ai,En,l(E)),Ve,[...gt,u],.34)){kt={x:ai,z:En};break}}kt&&(Object.assign(E,kt),p(E),E.route=[],E.repath=0),E.stuckTime=0,kt&&(E.hopTime=.36)}Y>0&&(Y=Math.min(Y,se(E,we)/c))}if(E.pushX*=Math.exp(-c*7.6),E.pushZ*=Math.exp(-c*7.6),!M&&E.injuryCooldown<=0){let ce=If(E,2.8);if(ce){let{car:pe,speed:ve,vx:Ve,vz:gt}=ce,bt=ef(ve);E.pushX=xt(Ve,-8,8)*.59,E.pushZ=xt(gt,-8,8)*.59,bt>0&&(E.injuryCooldown=1.18,ve>6.5&&Bc(E,Ve*.7,1.8+ve*.16,gt*.7),jn(E,bt),pe===te&&bt>12&&Hi(19))}}let Se=E.model;if(E.health<=0)continue;p(E),E.hopTime=Math.max(0,(E.hopTime??0)-c),Se.root.position.set(E.x,l(E)+E.exitAnim*.35+.28*Math.sin(Math.PI*E.hopTime/.36),E.z);let Me=E.stagger>0?Math.sin(E.stagger/.32*Math.PI)*.24:0;if(Se.root.rotation.set(E.exitAnim*.7-Me,E.angle,E.exitAnim*E.exitSide*.89+(E.stagger>0?Math.sin(E.stagger*9)*.12:0)),sr(Se,c,E.exitAnim>0?2.9:Y,he,["police","ally"].includes(E.role),0,0,E.surrender>0),E.shoulder>0){let ce=1-E.shoulder/(E.shoulderLength||.6),pe=Math.sin(Math.PI*xt(ce,0,1))*(E.shoulderLength>.6?.95:.58);Se.body.rotation.y+=-E.shoulderSide*pe,Se.body.rotation.z+=E.shoulderSide*pe*.12}E.punchT>0?(E.punchT=Math.max(0,E.punchT-c),ju(Se,{punch:E.punchT,hand:E.punchHand??0})):E.calling?(Se.arms[0].rotation.set(-2.35,0,-.55),Se.forearms[0].rotation.set(-2.05,0,0)):E.order==="dealer"&&Y<.1&&!he&&(Se.arms[0].rotation.set(-.4,0,-.25),Se.arms[1].rotation.set(-.4,0,.25),Se.forearms[0].rotation.set(-1.5,0,.4),Se.forearms[1].rotation.set(-1.5,0,-.4))}if(!M&&!te&&l(u)<1.15&&u.health>0&&u.lift<.3&&fo<=0){let E=If(u,2.35);if(E){let{speed:Y,vx:he,vz:Ae}=E,we=ef(Y);u.pushX=xt(he,-13,13)*.73,u.pushZ=xt(Ae,-13,13)*.73,u.trip=Y>=5.3?Math.min(.82,.35+Y*.021):.12,u.vx=u.vz=0,Y>7&&Bc(u,he*.65,1.6+Y*.14,Ae*.65),we>0&&(jn(u,we),Ee.crash(),et("Voc\xEA foi atropelado.")),fo=.87}}}function A0(c,y,M){if(c.yieldTime=Math.max(0,(c.yieldTime??0)-M),c.yieldPause=Math.max(0,(c.yieldPause??0)-M),c.shoulder=Math.max(0,(c.shoulder??0)-M),!["civilian","resident"].includes(c.role)||c.fear>0||c.exitAnim>0)return!1;let z=Math.sin(c.angle),R=Math.cos(c.angle),Z=null,E=1/0;for(let pe of V){if(pe===c||!an(pe)||!["civilian","resident"].includes(pe.role))continue;let ve=pe.x-c.x,Ve=pe.z-c.z,gt=Math.hypot(ve,Ve);gt>1.9||gt<.05||ve*z+Ve*R<.12||z*Math.sin(pe.angle)+R*Math.cos(pe.angle)>-.25||gt<E&&(E=gt,Z=pe)}if(!Z)return c.yieldTime>0;let Y=Z.x-c.x,he=Z.z-c.z,Ae=Math.sign(Y*R-he*z)||1;if(c.shoulder<=0&&E<1.35&&(c.shoulder=c.shoulderLength=.6,c.shoulderSide=Ae),c.yieldTime>0)return!0;if(c.yieldPause>0||String(c.id)>String(Z.id))return!1;let we=d(c),Se=R,Me=-z,ce=pe=>{let ve=0;for(;ve<1.6&&Rn(c.x+Se*pe*(ve+.25),c.z+Me*pe*(ve+.25),.2,we);)ve+=.25;return ve};return ce(1)+ce(-1)>=2.7?!1:(c.yieldTime=.8,c.yieldPause=2.6,c.shoulder=c.shoulderLength=.8,c.shoulderSide=ce(1)<ce(-1)?1:-1,!0)}function If(c,y){for(let M of q){if(l(c)>1.2||se(M,c)>5)continue;let z=ee.get(M),R=z&&se(z,M)<3?z:null,Z=R?Math.hypot(R.vx,R.vz):0,E=Math.hypot(M.vx,M.vz),Y=Math.max(E,Z);if(!(Y<y||!Bp(M,R,c)))return{car:M,speed:Y,vx:Z>E?R.vx:M.vx,vz:Z>E?R.vz:M.vz}}return null}function E0(c,y){s.updateDoors(c,[y,...V.filter(M=>an(M))])}function C0(c,y,M){let z=l(y),R=te?null:s.interiorAt(y.x,y.z,z),Z=!!R;U!==Z&&(U=Z,_e=!0);let E=i.aspect<.85,he=Z?M?2.25:3.4:te?te.kind==="bike"?8.2:E?12:10.2:M?4.45:E?7.9:6.5,Ae=te?1.95+te.root.position.y:1.38+z+u.lift*.46,we=te?0:M?.61:.22,Se=M?.1+re*.19:Math.max(Z?.28:.1,re);Ke.set(y.x+Math.cos(P)*we,Ae,y.z-Math.sin(P)*we),je.set(Ke.x-Math.sin(P)*he*Math.cos(Se),Ae+Math.sin(Se)*he,Ke.z-Math.cos(P)*he*Math.cos(Se));function Me(Ve){R&&(Ve.x=xt(Ve.x,R.x-R.w*.5+.3,R.x+R.w*.5-.3),Ve.z=xt(Ve.z,R.z-R.d*.5+.3,R.z+R.d*.5-.3),Ve.y=xt(Ve.y,R.floor+.55,R.ceiling-.42))}Me(je),s.viewBlocked(Ke.x,Ke.y,Ke.z,.12,!Z)&&Ke.set(y.x,Ae,y.z);for(let Ve=.06;Ve<=1.0001;Ve+=.04){let gt=Hr.lerp(Ke.x,je.x,Ve),bt=Hr.lerp(Ke.y,je.y,Ve),kt=Hr.lerp(Ke.z,je.z,Ve);if(s.viewBlocked(gt,bt,kt,.32,!Z)||q.some(mn=>mn!==te&&se(mn,{x:gt,z:kt})<2.1&&bt<mn.root.position.y+1.7)){je.lerp(Ke,1-Math.max(.02,Ve-.07));break}}Me(je);let ce=M?14:1,pe=Ue?re:re-.22,ve=M?Ae-Math.tan(pe)*ce:Ae-.07;ot.set(Ke.x+Math.sin(P)*ce,ve,Ke.z+Math.cos(P)*ce),_e?(i.position.copy(je),_e=!1):i.position.lerp(je,1-Math.exp(-c*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!Z)&&i.position.copy(je),Me(i.position),i.lookAt(ot),i.updateMatrixWorld()}function xi(c,y,M){Le.fillStyle=y,Le.beginPath(),Le.arc(nt(c.x),nt(c.z),M,0,Math.PI*2),Le.fill()}function R0(c,y){let M=Yc(rt),z=Math.round(se(c,In));Ye("detail").textContent="Casa "+z+" m \xB7 Loja "+Math.round(se(c,qr))+" m",Ye("cash").textContent="R$ "+Pe.toLocaleString("pt-BR");let R=Xt.filter(zt=>zt.order==="dealer"&&an(zt)),Z=Xt.some(zt=>zt.order==="wait");Ye("crew").textContent="Gangue "+Xt.length+(Xt.length?Z?" \xB7 esperando":" \xB7 seguindo":"")+(R.length?" \xB7 "+R.length+" no ponto":"");let E=At();Ye("stash").hidden=!E,Ye("stash").textContent=E;let Y=R.reduce((zt,Na)=>zt+(Na.sales??0),0);Ye("selling").hidden=!st&&!R.length,Ye("selling").textContent=(st?"Seu ponto de venda est\xE1 aberto. ":"")+(R.length?"Ponto da gangue: R$ "+Y:"");let he=Ye("prompt"),Ae=ye==="pad"?"Y \xB7 ":ye==="keyboard"?"E \xB7 ":"",we=lf(),Se=!!we,Me=uf(),ce=df(),pe=te??pf(),ve=Ra(),Ve=cf(),gt=th(),bt=Me?null:ih(),kt=on&&y&&de<=0;he.hidden=!(pe||Se||Me||ce||ve||Ve||gt||bt||de>0||kt);let mn=ve?"Guardar na garagem":gt?"Entrar na oficina":te?"Sair "+(te.kind==="bike"?"da moto":"do carro"):Ve?"Tirar ve\xEDculo da garagem":Me?"Salvar o progresso":bt?bt.label():Se?Vm[we.service]:ce?"Porta trancada":pe?"Pegar "+xo(pe):"";he.textContent=de>0?$:kt?"Mantenha a mira \xB7 "+Math.ceil(on.left)+" s":Ae+mn,Ye("heat").hidden=!M,Ye("heat").textContent="\u2605".repeat(M)+" PROCURADO";let An=Te==="rifle"?"Fuzil":"Pistola";Ye("mode").textContent=te?xo(te)+" \xB7 "+Math.round(te.integrity)+"%"+(te.burning?" \xB7 FOGO":""):ge?An:"Vila Brasa",Ye("reading").textContent=te?Math.round(Math.hypot(te.vx,te.vz)*3.6)+" km/h":ge?fe+" balas":"Punhos";let ai=Ye("health");ai.value=u.health,ai.title="Vida: "+Math.ceil(u.health)+"%",Ye("crosshair").hidden=!(y||ge&&ds>0&&!te),Ye("interact").textContent=te?"Sair":Me?"Salvar":bt?"Usar":Se?"Loja":"Entrar",Ye("sprint").textContent=te?"Freio":"Correr",Ye("aim").hidden=!!te,Ye("fire").hidden=!!te||!ge,Ye("weapon").hidden=!!te||!(H||Re),Ye("weapon").textContent="Arma",Ye("sell").hidden=!!te,Ye("gang").hidden=!!te||!Xt.length,Ye("sell").setAttribute("aria-pressed",String(!!st)),Ye("jump").hidden=Ye("punch").hidden=!!te,Ye("recruit").hidden=!!te||!y,Ye("hud").classList.toggle("armed",!te),Ye("hud").classList.toggle("driving",!!te),Le.drawImage(Fe,0,0),We&&(se(c,We)<2.2?(We=null,_t.visible=!1):xi(We,"#ffad41",4));for(let zt of S)zt!==te&&zt.integrity>0&&xi(zt,zt.driver?"#82b9b3":"#eab987",zt.kind==="bike"?2.2:zt.driver?2.6:3.5);xi(qr,"#eaff89",6),xi(Ti.bay,"#d1ad62",3.5),xi(Wn.home,"#ffe4aa",4),xi(In,"#dcc39b",5);let En=Os==="lajes"?Wn.home:Os==="brasa"?In:null;if(En){let zt=9+Math.sin(xe*4)*1.6;Le.strokeStyle="#ffd35a",Le.lineWidth=2.2,Le.beginPath(),Le.arc(nt(En.x),nt(En.z),zt,0,Math.PI*2),Le.stroke(),Le.fillStyle="#ffd35a",Le.font="bold 8px system-ui",Le.textAlign="center",Le.fillText("SAVE",nt(En.x),nt(En.z)-zt-2)}for(let zt of I)zt.service==="black"&&xi(zt.entry,"#c58cff",3.2);xi(Ps,"#99c6ff",5);for(let zt of I)zt.kind!=="armory"&&xi(zt.entry,"#dbae80",2.5);for(let zt of k)["driving","patrol","foot"].includes(zt.mode)&&xi(zt.officer.seated?zt.car:zt.officer,zt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let zt of Xt)xi(zt,"#97ebaf",3.5);Le.save(),Le.translate(nt(c.x),nt(c.z)),Le.rotate(-(te?te.angle:u.angle)),Le.fillStyle="#fff9e6",Le.strokeStyle="#243938",Le.lineWidth=2.7,Le.beginPath(),Le.moveTo(0,10),Le.lineTo(-6,-6),Le.lineTo(0,-3),Le.lineTo(6,-6),Le.closePath(),Le.stroke(),Le.fill(),Le.restore()}function I0(c){let y=(c-Ce)/1e3,M=xt(y,1/240,.05);Ce=c,xe+=M;let z=Gs.read(!!te,M);if(z.map&&!Xe.open&&Ot(),Xe.open){dt.x=xt(dt.x+z.x*100*M,0,256),dt.z=xt(dt.z-z.y*100*M,0,256);let R=ht.getContext("2d");R.drawImage(Le.canvas,0,0),R.strokeStyle="white",R.strokeRect(dt.x-3,dt.z-3,6,6),z.confirm?Jt(dt.x,dt.z):z.cancel&&Xe.close();return}if(Fs.open){z.cancel||z.interact?go():z.confirm?Yt.activate():z.navUp?Yt.move(-1):z.navDown?Yt.move(1):(Dt-=M,Math.abs(z.y)>.6&&Dt<=0&&(Yt.move(z.y>0?-1:1),Dt=.22),Math.abs(z.y)<.3&&(Dt=0)),e.render(t,i);return}if(Tt){if(Ge){ye=z.mode;for(let we of q)ee.set(we,{x:we.x,z:we.z,vx:we.vx,vz:we.vz});z.weapon&&(H||Re)&&!te&&hn(),z.sell&&!te&&(st?(st=null,et("Ponto de venda fechado.")):mr().length?(st={x:u.x,z:u.z},et("Ponto de venda aberto. Fique parado.")):et("Sem estoque. Compre no mercado negro da casa de penhores.")),st&&(te||se(u,st)>4)&&(st=null,et("Ponto de venda fechado.")),M0(M);let R=z.aim&&!te&&qn<=0&&u.health>0;if(R!==Ue&&(re=R?.015:.22,Ue=R),ze=Math.abs(z.lookX)+Math.abs(z.lookY)>.003?0:ze+M,P-=z.lookX,re=xt(re+z.lookY,R?-1.03:-.31,.84),te&&ze>1.2&&(re+=(.24-re)*M),R&&T0(M),u.health>0&&u.health<100&&xe-(u.lastHurt??0)>10&&(u.health=Math.min(100,u.health+3*M)),Qe-=M,Wt-=M,lt-=M,fo-=M,Be-=M,de-=M,G-=M,a.update(M),h.update(M),s.signals.update(M),qn=Math.max(0,qn-M),ur&&(ks-=M,ks<=0&&r0()),Pi-=M,Vi-=M,ds-=M,pi-=M,Ii>0&&(Ii-=M,Ii<=0&&Ym()),ri&&(ri.delay-=M,ri.delay<=0)){let we=ri.car;ri=null,u.health>0&&we.integrity>0&&se(u,we)<3.75&&Ia(we)}if(z.interact&&gf(),Fs.open)return;let Z=s.props.update(M,q,te??u);Z.shadow&&(s.sun.shadow.needsUpdate=!0);for(let we of Z.events)se(we,te??u)<30&&(we.heavy?Ee.crash():Ee.punch(!0));E0(M,te??u),te?a0(M,z):l0(M,{...z,aim:R}),Af=!!z.brake,Ef(M,te??u),p0(M,te??u),te&&(u.x=te.x,u.z=te.z),t0(M),Bn&&!dr(Bn)&&(Bn=null),te?.kind==="bike"&&Uu(u.model,te);let E=te??u;if(!Number.isFinite(ms.x)||se(u,ms)>1.15){let we=Number.isFinite(ms.x)?Math.atan2(u.x-ms.x,u.z-ms.z):u.angle;ms={x:u.x,z:u.z,angle:we}}hh(M,E),Mf(E,M),Jm(M),s.lajesHome.update(M,u,s.interiorAt(u.x,u.z,l(u))?.buildingId==="lajes-home"),Ee.motor(te?.speed??0,!!te,Rm(te));let Y=te??u,he=R&&!te&&u.health>0;z.fire&&ge&&!te&&u.health>0&&fe>0&&(ds=1.38),C0(M,Y,he||!te&&ds>0),he&&(pi<=0||z.recruit||z.punch||z.fire&&Wt<=0)?(Kn=xf(),pi=.092):he||(Kn=null),z.order&&w0(z.order,he?xf():null),z.recruit&&!te&&bf(Kn),i0(M,he&&ge?Kn:null),(z.punch||z.fire&&!ge)&&!te&&s0(),z.fire&&!te&&o0(he),Ye("hitmark").hidden=Pi<=0,Ye("impact").hidden=Vi<=0,s.marker.visible=se(Y,qr)>2.8&&se(Y,qr)<13,s.beacon.rotation.y=xe*2,s.beacon.position.y=2.55+Math.sin(xe*4)*.27,Ne-=M,Ne<=0&&(R0(Y,he),Ne=.1)}}else{let R=.54+Math.sin(xe*.13)*.19,Z=i.aspect<1?26:30;i.position.set(24+Math.sin(R)*Z,14,17+Math.cos(R)*Z),i.lookAt(10,2,13),hh(M,u,!0),Mf(u)}e.render(t,i),Ge&&ho.value==="auto"&&y>0&&y<.22&&oe>.7&&(Oe+=y,++le>=85&&(Oe/le>.026&&(oe=Math.max(.69,oe-.16),$n()),le=0,Oe=0))}let Gs=Cm(()=>{Xe.open?Xe.close():Fs.open?go():Ge?mi(!1):Pf()},()=>Ge),uh=Qc("quality");(uh==="low"||uh==="high")&&(ho.value=uh),ho.addEventListener("change",()=>{Qc("quality",ho.value),oe=1,$n()}),Ye("sound").addEventListener("click",()=>{Qc("sound",Ee.toggle()?"on":"off"),dn()}),Ye("pause").addEventListener("click",()=>mi(!1)),Ye("reset").addEventListener("click",()=>{gi(),mi(!0)}),Ye("close-shop").addEventListener("click",go),Fs.addEventListener("cancel",c=>{c.preventDefault(),go()});function Pf(){if(!Tt&&Qt){Object.assign(u,{x:Qt.x,z:Qt.z,health:Qt.health,floorY:0}),p(u),Pe=Qt.cash,H=Qt.armed,Re=Qt.rifle,qe=H?Qt.ammo:0,at=Re?Qt.rifleAmmo:0,Te="pistol",fe=qe,Bt(H?"pistol":Re?"rifle":"fists"),Object.assign(Ze,Qt.stash),Nt=Qt.wardrobe,be=Qt.look,mo(u,be),Qt.garage&&(mf(Qt.garage.kind,Qt.garage.model,Qt.garage.color,Qt.garage),Sn=!0,rh(it));for(let c of new Set(Qt.recruits)){let y=typeof c=="number"?D[c]:ne.get(c);y&&(y.role="ally",y.order="follow",y.seated=!1,y.riding=null,y.model.root.visible=!0,Xt.push(y))}mi(!0),P=-Math.PI/2}else mi(!0)}uo.addEventListener("click",Pf),document.addEventListener("visibilitychange",()=>{document.hidden&&Ge&&mi(!1)}),window.addEventListener("resize",$n),e.domElement.addEventListener("webglcontextrestored",$n),new URLSearchParams(location.search).has("debug")&&(window.__gtbase={player:u,cars:q,traffic:A,tow:X,police:k,world:s,pedestrians:B,civilianCars:S,garage:()=>it,state:()=>({driving:te,heat:rt,cash:Pe,playing:Ge,lastSave:Os}),place:(c,y)=>{Object.assign(u,{x:c,z:y}),p(u),_e=!0},interact:gf,workshopStop:th,homeFixture:ih,saveGame:sh,enter:Ia,exitVehicle:Di,openShop:nh,publicShops:I,gang:Xt,recruit:bf,escorts:pn,crime:()=>Hi(40,u,!0),setDriving:c=>{te=c},step:(c,y=1)=>{for(let M=0;M<y;M++)s.signals.update(c),hh(c,u),Ef(c,u)}}),gi(),dn(),$n(),Bs(),uo.disabled=!1,Ce=performance.now(),e.setAnimationLoop(I0)}try{wM()}catch(n){console.error(n),uo.textContent="3D indispon\xEDvel",Ye("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
