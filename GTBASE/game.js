(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var cu=0,Mc=1,hu=2;var Ki=1,uu=2,Vs=3,Ni=0,on=1,_n=2,Qi=0,Hs=1,Sc=2,bc=3,Tc=4,du=5;var ji=100,fu=101,pu=102,mu=103,gu=104,xu=200,_u=201,vu=202,yu=203,wc=204,Ac=205,Mu=206,Su=207,bu=208,Tu=209,wu=210,Au=211,Eu=212,Ru=213,Cu=214,na=0,ia=1,sa=2,Is=3,ra=4,oa=5,aa=6,la=7,Ec=0,Iu=1,Pu=2,ti=0,Rc=1,Cc=2,Ic=3,ro=4,Pc=5,Lc=6,Dc=7;var Nc=300,ts=301,Ws=302,za=303,ka=304,ca=1e3,Kn=1001,ha=1002,en=1003,Lu=1004;var oo=1005;var mn=1006,Ga=1007;var xi=1008;var Mn=1009,Uc=1010,Fc=1011,Xs=1012,Va=1013,Xn=1014,zn=1015,qn=1016,Ha=1017,Wa=1018,es=1020,Oc=35902,Bc=35899,zc=1021,kc=1022,Yn=1023,di=1026,_i=1027,Xa=1028,qa=1029,Ui=1030,Ya=1031;var Za=1033,ao=33776,lo=33777,co=33778,ho=33779,Ja=35840,$a=35841,Ka=35842,Qa=35843,ja=36196,tl=37492,el=37496,nl=37488,il=37489,uo=37490,sl=37491,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,xl=37820,_l=37821,vl=36492,yl=36494,Ml=36495,Sl=36283,bl=36284,fo=36285,Tl=36286;var br=2300,ua=2301,ta=2302,uc=2303,dc=2400,fc=2401,pc=2402;var Du=3200;var wl=0,Nu=1,vi="",dn="srgb",Tr="srgb-linear",wr="linear",_e="srgb";var ea=7680;var Uu=519,Fu=512,Ou=513,Bu=514,Gc=515,zu=516,ku=517,Vc=518,Hc=519,Gu=35044;var Wc="300 es",Un=2e3,Ps=2001;function hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){let i=Ar("canvas");return i.style.display="block",i}var Rh={},Ls=null;function Xc(...i){let t="THREE."+i.shift();Ls?Ls("log",t,...i):console.log(t,...i)}function Hu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Hu(i);let t="THREE."+i.shift();if(Ls)Ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=Hu(i);let t="THREE."+i.shift();if(Ls)Ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _r(...i){let t=i.join(" ");t in Rh||(Rh[t]=!0,Vt(...i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xu={[na]:na,[sa]:aa,[ra]:ra,[Is]:oa,[ia]:ia,[aa]:sa,[la]:la,[oa]:Is},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ch=1234567,vr=Math.PI/180,Ds=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function qc(i,t){return(i%t+t)%t}function df(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ff(i,t,e){return i!==t?(e-i)/(t-i):0}function yr(i,t,e){return(1-e)*i+e*t}function pf(i,t,e,n){return yr(i,t,1-Math.exp(-e*n))}function mf(i,t=1){return t-Math.abs(qc(i,t*2)-t)}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _f(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vf(i,t){return i+Math.random()*(t-i)}function yf(i){return i*(.5-Math.random())}function Mf(i){i!==void 0&&(Ch=i);let t=Ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sf(i){return i*vr}function bf(i){return i*Ds}function Tf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Af(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qu(i,t){if(t.constructor===Float32Array)return i;let e=Zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Yu(i,t){if(t.constructor===Float32Array)return i;let e=Zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var po={DEG2RAD:vr,RAD2DEG:Ds,generateUUID:ns,clamp:ae,euclideanModulo:qc,mapLinear:df,inverseLerp:ff,lerp:yr,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:xf,randInt:_f,randFloat:vf,randFloatSpread:yf,seededRandom:Mf,degToRad:Sf,radToDeg:bf,isPowerOfTwo:Tf,ceilPowerOfTwo:wf,floorPowerOfTwo:Yc,setQuaternionFromProperEuler:Af,normalize:Yu,denormalize:qu},Rt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(u!==y||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*y;p<0&&(d=-d,f=-f,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);g=Math.sin(g*M)/A,a=Math.sin(a*M)/A,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+y*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+y*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new O,Ih=new Fn,Jt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],y=s[0],p=s[3],g=s[6],M=s[1],A=s[4],b=s[7],C=s[2],v=s[5],x=s[8];return r[0]=o*y+a*M+l*C,r[3]=o*p+a*A+l*v,r[6]=o*g+a*b+l*x,r[1]=c*y+h*M+u*C,r[4]=c*p+h*A+u*v,r[7]=c*g+h*b+u*x,r[2]=d*y+f*M+m*C,r[5]=d*p+f*A+m*v,r[8]=d*g+f*b+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new Jt,Ph=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ef(){let i={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tr]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}var ce=Ef();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Ar("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rf=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hl(s[o].image)):r.push(Hl(s[o]))}else r=Hl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Cf=0,Wl=new O,gn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=mn,o=xi,a=Yn,l=Mn,c=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ns(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ca:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ca:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Nc;gn.DEFAULT_ANISOTROPY=1;var Ne=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,b=(f+1)/2,C=(g+1)/2,v=(h+d)/4,x=(u+y)/4,_=(m+p)/4;return A>b&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=v/n,r=x/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=v/s,r=_/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new gn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Se=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,y,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,y=c*u;e[0]=d+y*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,y=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Pf)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),bi.crossVectors(n,Tn),bi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),bi.crossVectors(n,Tn)),bi.normalize(),Co.crossVectors(Tn,bi),s[0]=bi.x,s[4]=Co.x,s[8]=Tn.x,s[1]=bi.y,s[5]=Co.y,s[9]=Tn.y,s[2]=bi.z,s[6]=Co.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],y=n[6],p=n[10],g=n[14],M=n[3],A=n[7],b=n[11],C=n[15],v=s[0],x=s[4],_=s[8],w=s[12],R=s[1],L=s[5],U=s[9],V=s[13],P=s[2],W=s[6],G=s[10],X=s[14],at=s[3],J=s[7],K=s[11],rt=s[15];return r[0]=o*v+a*R+l*P+c*at,r[4]=o*x+a*L+l*W+c*J,r[8]=o*_+a*U+l*G+c*K,r[12]=o*w+a*V+l*X+c*rt,r[1]=h*v+u*R+d*P+f*at,r[5]=h*x+u*L+d*W+f*J,r[9]=h*_+u*U+d*G+f*K,r[13]=h*w+u*V+d*X+f*rt,r[2]=m*v+y*R+p*P+g*at,r[6]=m*x+y*L+p*W+g*J,r[10]=m*_+y*U+p*G+g*K,r[14]=m*w+y*V+p*X+g*rt,r[3]=M*v+A*R+b*P+C*at,r[7]=M*x+A*L+b*W+C*J,r[11]=M*_+A*U+b*G+C*K,r[15]=M*w+A*V+b*X+C*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],y=t[7],p=t[11],g=t[15],M=l*f-c*d,A=a*f-c*u,b=a*d-l*u,C=o*f-c*h,v=o*d-l*h,x=o*u-a*h;return e*(y*M-p*A+g*b)-n*(m*M-p*C+g*v)+s*(m*A-y*C+g*x)-r*(m*b-y*v+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],y=t[13],p=t[14],g=t[15],M=e*a-n*o,A=e*l-s*o,b=e*c-r*o,C=n*l-s*a,v=n*c-r*a,x=s*c-r*l,_=h*y-u*m,w=h*p-d*m,R=h*g-f*m,L=u*p-d*y,U=u*g-f*y,V=d*g-f*p,P=M*V-A*U+b*L+C*R-v*w+x*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return t[0]=(a*V-l*U+c*L)*W,t[1]=(s*U-n*V-r*L)*W,t[2]=(y*x-p*v+g*C)*W,t[3]=(d*v-u*x-f*C)*W,t[4]=(l*R-o*V-c*w)*W,t[5]=(e*V-s*R+r*w)*W,t[6]=(p*b-m*x-g*A)*W,t[7]=(h*x-d*b+f*A)*W,t[8]=(o*U-a*R+c*_)*W,t[9]=(n*R-e*U-r*_)*W,t[10]=(m*v-y*b+g*M)*W,t[11]=(u*b-h*v-f*M)*W,t[12]=(a*w-o*L-l*_)*W,t[13]=(e*L-n*w+s*_)*W,t[14]=(y*A-m*C-p*M)*W,t[15]=(h*C-u*A+d*M)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,y=o*h,p=o*u,g=a*u,M=l*c,A=l*h,b=l*u,C=n.x,v=n.y,x=n.z;return s[0]=(1-(y+g))*C,s[1]=(f+b)*C,s[2]=(m-A)*C,s[3]=0,s[4]=(f-b)*v,s[5]=(1-(d+g))*v,s[6]=(p+M)*v,s[7]=0,s[8]=(m+A)*x,s[9]=(p-M)*x,s[10]=(1-(d+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ms.set(s[0],s[1],s[2]).length(),a=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,h=1/a,u=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===Un)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ps)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===Un)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ps)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new O,Gn=new Se,If=new O(0,0,0),Pf=new O(1,1,1),bi=new O,Co=new O,Tn=new O,Dh=new Se,Nh=new Fn,fi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lf=0,Uh=new O,gs=new Fn,oi=new Se,Io=new O,hr=new O,Df=new O,Nf=new Fn,Fh=new O(1,0,0),Oh=new O(0,1,0),Bh=new O(0,0,1),zh={type:"added"},Uf={type:"removed"},xs={type:"childadded",child:null},Xl={type:"childremoved",child:null},Ge=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new fi,n=new Fn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Jt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(hr,Io,this.up):oi.lookAt(Io,hr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(oi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),xs.child=t,this.dispatchEvent(xs),xs.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),Xl.child=t,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new O(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ff={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Po={h:0,s:0,l:0};function ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=qc(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ql(o,r,t+1/3),this.g=ql(o,r,t),this.b=ql(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return ce.workingToColorSpace(hn.copy(this),t),Math.round(ae(hn.r*255,0,255))*65536+Math.round(ae(hn.g*255,0,255))*256+Math.round(ae(hn.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=dn){ce.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Po);let n=yr(Ti.h,Po.h,e),s=yr(Ti.s,Po.s,e),r=yr(Ti.l,Po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ne;ne.NAMES=Zu;var Cr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ir=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new O,ai=new O,Yl=new O,li=new O,_s=new O,vs=new O,kh=new O,Zl=new O,Jl=new O,$l=new O,Kl=new Ne,Ql=new Ne,jl=new Ne,Ri=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),ai.subVectors(n,e),Yl.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(ai),l=Vn.dot(Yl),c=ai.dot(ai),h=ai.dot(Yl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Kl.setScalar(0),Ql.setScalar(0),jl.setScalar(0),Kl.fromBufferAttribute(t,e),Ql.fromBufferAttribute(t,n),jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kl,r.x),o.addScaledVector(Ql,r.y),o.addScaledVector(jl,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),ai.subVectors(t,e),Vn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Vn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;_s.subVectors(s,n),vs.subVectors(r,n),Zl.subVectors(t,n);let l=_s.dot(Zl),c=vs.dot(Zl);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,s);let h=_s.dot(Jl),u=vs.dot(Jl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(_s,o);$l.subVectors(t,r);let f=_s.dot($l),m=vs.dot($l);if(m>=0&&f<=m)return e.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(vs,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return kh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(kh,a);let g=1/(p+y+d);return o=y*g,a=d*g,e.copy(n).addScaledVector(_s,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Do.subVectors(this.max,ur),ys.subVectors(t.a,ur),Ms.subVectors(t.b,ur),Ss.subVectors(t.c,ur),wi.subVectors(Ms,ys),Ai.subVectors(Ss,Ms),Vi.subVectors(ys,Ss);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Vi.z,Vi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Vi.z,0,-Vi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Vi.y,Vi.x,0];return!tc(e,ys,Ms,Ss,Do)||(e=[1,0,0,0,1,0,0,0,1],!tc(e,ys,Ms,Ss,Do))?!1:(No.crossVectors(wi,Ai),e=[No.x,No.y,No.z],tc(e,ys,Ms,Ss,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new O,new O,new O,new O,new O,new O,new O,new O],Hn=new O,Lo=new jn,ys=new O,Ms=new O,Ss=new O,wi=new O,Ai=new O,Vi=new O,ur=new O,Do=new O,No=new O,Hi=new O;function tc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Xe=new O,Uo=new Rt,Of=0,pn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=t!==void 0?Zc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yu(t,this.array)}};var Pr=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bf=new jn,dr=new O,ec=new O,pi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(ec)),this.expandByPoint(dr.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zf=0,Nn=new Se,nc=new Ge,bs=new O,wn=new jn,fr=new jn,tn=new O,ze=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hf(t)?Lr:Pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(wn.min,fr.min),wn.expandByPoint(tn),tn.addVectors(wn.max,fr.max),wn.expandByPoint(tn)):(wn.expandByPoint(fr.min),wn.expandByPoint(fr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),tn.add(bs)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new O,l[w]=new O;let h=new O,u=new O,d=new O,f=new Rt,m=new Rt,y=new Rt,p=new O,g=new O;function M(w,R,L){c[w]=c[R]=c[L]=1,h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),y.fromBufferAttribute(r,L),u.sub(h),d.sub(h),m.sub(f),y.sub(f);let U=1/(m.x*y.y-y.x*m.y);isFinite(U)&&(p.copy(u).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(U),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(U),a[w].add(p),a[R].add(p),a[L].add(p),l[w].add(g),l[R].add(g),l[L].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let w=0,R=A.length;w<R;++w){let L=A[w],U=L.start,V=L.count;for(let P=U,W=U+V;P<W;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let b=new O,C=new O,v=new O,x=new O;function _(w){v.fromBufferAttribute(s,w),x.copy(v);let R=a[w];b.copy(R),b.sub(v.multiplyScalar(v.dot(R))).normalize(),C.crossVectors(x,R);let U=C.dot(l[w])<0?-1:1;o.setXYZW(w,b.x,b.y,b.z,U)}for(let w=0,R=n.count;w<R;++w)c[w]&&_(w);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new pn(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ic=new O,kf=new O,Gf=new Jt,Wn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ic.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gf.getNormalMatrix(t),s=this.coplanarPoint(ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vf=0,mi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Hs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ac,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hi=new O,sc=new O,Fo=new O,Oo=new O,Dr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sc.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(sc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),a=Oo.dot(this.direction),l=-Oo.dot(Fo),c=Oo.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sc).addScaledVector(Fo,d),f}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,y=e.y-o.y,p=e.z-o.z,g=n.x-o.x,M=n.y-o.y,A=n.z-o.z,b=Math.abs(l),C=Math.abs(c),v=Math.abs(h),x,_,w,R,L,U,V,P,W,G,X,at;if(b>=C&&b>=v?(w=l,U=u,W=m,at=g,l>=0?(x=c,_=h,R=d,L=f,V=y,P=p,G=M,X=A):(x=h,_=c,R=f,L=d,V=p,P=y,G=A,X=M)):C>=v?(w=c,U=d,W=y,at=M,c>=0?(x=h,_=l,R=f,L=u,V=p,P=m,G=A,X=g):(x=l,_=h,R=u,L=f,V=m,P=p,G=g,X=A)):(w=h,U=f,W=p,at=A,h>=0?(x=l,_=c,R=u,L=d,V=m,P=y,G=g,X=M):(x=c,_=l,R=d,L=u,V=y,P=m,G=M,X=g)),w===0)return null;let J=x/w,K=_/w,rt=1/w,Et=R-J*U,Gt=L-K*U,it=V-J*W,Mt=P-K*W,At=G-J*at,Bt=X-K*at,lt=At*Mt-Bt*it,Ut=Et*Bt-Gt*At,de=it*Gt-Mt*Et;if(s){if(lt<0||Ut<0||de<0)return null}else if((lt<0||Ut<0||de<0)&&(lt>0||Ut>0||de>0))return null;let Q=lt+Ut+de;if(Q===0)return null;let Qt=rt*(lt*U+Ut*W+de*at);return(Q>0?Qt<0:Qt>0)?null:this.at(Qt/Q,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new Se,Wi=new Dr,Bo=new pi,Vh=new O,zo=new O,ko=new O,Go=new O,rc=new O,Vo=new O,Hh=new O,Ho=new O,be=class extends Ge{constructor(t=new ze,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(rc.fromBufferAttribute(u,t),o?Vo.addScaledVector(rc,h):Vo.addScaledVector(rc.sub(e),h))}e.add(Vo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Bo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Bo,Vh)===null||Wi.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,C=A;b<C;b+=3){let v=a.getX(b),x=a.getX(b+1),_=a.getX(b+2);s=Wo(this,g,t,n,c,h,u,v,x,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let M=a.getX(p),A=a.getX(p+1),b=a.getX(p+2);s=Wo(this,o,t,n,c,h,u,M,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,C=A;b<C;b+=3){let v=b,x=b+1,_=b+2;s=Wo(this,g,t,n,c,h,u,v,x,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let M=p,A=p+1,b=p+2;s=Wo(this,o,t,n,c,h,u,M,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Hf(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ni,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:i}}function Wo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,zo),i.getVertexPosition(l,ko),i.getVertexPosition(c,Go);let h=Hf(i,t,e,n,zo,ko,Go,Hh);if(h){let u=new O;Ri.getBarycoord(Hh,zo,ko,Go,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,l,c,u,new Rt)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,l,c,u,new Rt)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};Ri.getNormal(zo,ko,Go,d.normal),h.face=d,h.barycoord=u}return h}var Nr=class extends gn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fs=class extends pn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new Se,Wh=new Se,Xo=[],Xh=new jn,Wf=new Se,pr=new be,mr=new pi,Ur=class extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Xh.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),mr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Wh.multiplyMatrices(n,Ts),pr.matrixWorld=Wh,pr.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){let l=Xo[o];l.instanceId=r,l.object=this,e.push(l)}Xo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(s*this.count),s,this.count,Xa,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new pi,Xf=new Rt(.5,.5),qo=new O,Ci=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],y=r[9],p=r[10],g=r[11],M=r[12],A=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,g-m,C-M).normalize(),s[1].setComponents(c+o,f+h,g+m,C+M).normalize(),s[2].setComponents(c+a,f+u,g+y,C+A).normalize(),s[3].setComponents(c-a,f-u,g-y,C-A).normalize(),n)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,f-d,g-p,C-b).normalize();else if(s[4].setComponents(c-l,f-d,g-p,C-b).normalize(),e===Un)s[5].setComponents(c+l,f+d,g+p,C+b).normalize();else if(e===Ps)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=Xf.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qh=new Se,ma=class i{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ci),n[s].setFromProjectionMatrix(qh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ci),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var qi=class extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new O,xa=new O,Yh=new Se,gr=new Dr,Yo=new pi,oc=new O,Zh=new O,Os=class extends Ge{constructor(t=new ze,e=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ga.distanceTo(xa);t.setAttribute("lineDistance",new le(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;Yh.copy(s).invert(),gr.copy(t.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=f,p=m-1;y<p;y+=c){let g=h.getX(y),M=h.getX(y+1),A=Zo(this,t,gr,l,g,M,y);A&&e.push(A)}if(this.isLineLoop){let y=h.getX(m-1),p=h.getX(f),g=Zo(this,t,gr,l,y,p,m-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,p=m-1;y<p;y+=c){let g=Zo(this,t,gr,l,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=Zo(this,t,gr,l,m-1,f,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ga.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(ga,xa,oc,Zh)>n)return;oc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oc);if(!(c<t.near||c>t.far))return{distance:c,point:Zh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fr=class extends gn{constructor(t=[],e=ts,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Or=class extends gn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends gn{constructor(t,e,n=Xn,s,r,o,a=en,l=en,c,h=di,u=1){if(h!==di&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Br=class extends gi{constructor(t,e=Xn,n=ts,s,r,o=en,a=en,l,c=di){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},On=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function m(y,p,g,M,A,b,C,v,x,_,w){let R=b/x,L=C/_,U=b/2,V=C/2,P=v/2,W=x+1,G=_+1,X=0,at=0,J=new O;for(let K=0;K<G;K++){let rt=K*L-V;for(let Et=0;Et<W;Et++){let Gt=Et*R-U;J[y]=Gt*M,J[p]=rt*A,J[g]=P,c.push(J.x,J.y,J.z),J[y]=0,J[p]=0,J[g]=v>0?1:-1,h.push(J.x,J.y,J.z),u.push(Et/x),u.push(1-K/_),X+=1}}for(let K=0;K<_;K++)for(let rt=0;rt<x;rt++){let Et=d+rt+W*K,Gt=d+rt+W*(K+1),it=d+(rt+1)+W*(K+1),Mt=d+(rt+1)+W*K;l.push(Et,Gt,Mt),l.push(Gt,it,Mt),at+=6}a.addGroup(f,at,w),f+=at,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Yi=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new Rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zi=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,y=[],p=n/2,g=0;M(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function M(){let b=new O,C=new O,v=0,x=(e-t)/n;for(let _=0;_<=r;_++){let w=[],R=_/r,L=R*(e-t)+t;for(let U=0;U<=s;U++){let V=U/s,P=V*l+a,W=Math.sin(P),G=Math.cos(P);C.x=L*W,C.y=-R*n+p,C.z=L*G,u.push(C.x,C.y,C.z),b.set(W,x,G).normalize(),d.push(b.x,b.y,b.z),f.push(V,1-R),w.push(m++)}y.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let R=y[w][_],L=y[w+1][_],U=y[w+1][_+1],V=y[w][_+1];(t>0||w!==0)&&(h.push(R,L,V),v+=3),(e>0||w!==r-1)&&(h.push(L,U,V),v+=3)}c.addGroup(g,v,0),g+=v}function A(b){let C=m,v=new Rt,x=new O,_=0,w=b===!0?t:e,R=b===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;let L=m;for(let U=0;U<=s;U++){let P=U/s*l+a,W=Math.cos(P),G=Math.sin(P);x.x=w*G,x.y=p*R,x.z=w*W,u.push(x.x,x.y,x.z),d.push(0,R,0),v.x=W*.5+.5,v.y=G*.5*R+.5,f.push(v.x,v.y),m++}for(let U=0;U<s;U++){let V=C+U,P=L+U;b===!0?h.push(P,P+1,V):h.push(P+1,P,V),_+=3}c.addGroup(g,_,b===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var kr=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let A=new O,b=new O,C=new O;for(let v=0;v<e.length;v+=3)f(e[v+0],A),f(e[v+1],b),f(e[v+2],C),l(A,b,C,M)}function l(M,A,b,C){let v=C+1,x=[];for(let _=0;_<=v;_++){x[_]=[];let w=M.clone().lerp(b,_/v),R=A.clone().lerp(b,_/v),L=v-_;for(let U=0;U<=L;U++)U===0&&_===v?x[_][U]=w:x[_][U]=w.clone().lerp(R,U/L)}for(let _=0;_<v;_++)for(let w=0;w<2*(v-_)-1;w++){let R=Math.floor(w/2);w%2===0?(d(x[_][R+1]),d(x[_+1][R]),d(x[_][R])):(d(x[_][R+1]),d(x[_+1][R+1]),d(x[_+1][R]))}}function c(M){let A=new O;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(M),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function h(){let M=new O;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let b=p(M)/2/Math.PI+.5,C=g(M)/Math.PI+.5;o.push(b,1-C)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let A=o[M+0],b=o[M+2],C=o[M+4],v=Math.max(A,b,C),x=Math.min(A,b,C);v>.9&&x<.1&&(A<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,A){let b=M*3;A.x=t[b+0],A.y=t[b+1],A.z=t[b+2]}function m(){let M=new O,A=new O,b=new O,C=new O,v=new Rt,x=new Rt,_=new Rt;for(let w=0,R=0;w<r.length;w+=9,R+=6){M.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),v.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),C.copy(M).add(A).add(b).divideScalar(3);let L=p(C);y(v,R+0,M,L),y(x,R+2,A,L),y(_,R+4,b,L)}}function y(M,A,b,C){C<0&&M.x===1&&(o[A]=M.x-1),b.x===0&&b.z===0&&(o[A]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Rt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],o=[],a=new O,l=new Se;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Bs=class extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_a=class extends Bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jh=new O,$h=new O,ac=new Jc,lc=new Jc,cc=new Jc,va=class extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($h.subVectors(s[0],s[1]).add(s[0]),c=$h);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),ac.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,y,p),lc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,y,p),cc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,y,p)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ac.calc(l),lc.calc(l),cc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function qf(i,t){let e=1-i;return e*e*t}function Yf(i,t){return 2*(1-i)*i*t}function Zf(i,t){return i*i*t}function Mr(i,t,e,n){return qf(i,t)+Yf(i,e)+Zf(i,n)}function Jf(i,t){let e=1-i;return e*e*e*t}function $f(i,t){let e=1-i;return 3*e*e*i*t}function Kf(i,t){return 3*(1-i)*i*i*t}function Qf(i,t){return i*i*i*t}function Sr(i,t,e,n,s){return Jf(i,t)+$f(i,e)+Kf(i,n)+Qf(i,s)}var Gr=class extends Rn{constructor(t=new Rt,e=new Rt,n=new Rt,s=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ya=class extends Rn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y),Sr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vr=class extends Rn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends Rn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends Rn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends Rn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y),Mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Kh(a,l.x,c.x,h.x,u.x),Kh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}},Qh=Object.freeze({__proto__:null,ArcCurve:_a,CatmullRomCurve3:va,CubicBezierCurve:Gr,CubicBezierCurve3:ya,EllipseCurve:Bs,LineCurve:Vr,LineCurve3:Ma,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:Sa,SplineCurve:Wr}),ba=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xr=class extends ba{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vr(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Hr(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Gr(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s),new Rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Bs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zs=class extends Xr{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xr().fromJSON(s))}return this}};function jf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ju(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return qr(r,o,e,a,l,c,0),o}function Ju(i,t,e,n,s){let r;if(s===mp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=jh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=jh(o/n|0,i[o],i[o+1],r);return r&&ks(r,r.next)&&(Zr(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ks(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ep(i,n,s,r):tp(i)){t.push(l.i,i.i,c.i),Zr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=np(Ji(i),t),qr(i,t,e,n,s,r,2)):o===2&&ip(i,t,e,n,s,r):qr(Ji(i),t,e,n,s,r,1);break}}}function tp(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&xr(s,a,r,l,o,c,m.x,m.y)&&Fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ep(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),y=Math.max(a,l,c),p=Math.max(h,u,d),g=mc(f,m,t,e,n),M=mc(y,p,t,e,n),A=i.prevZ,b=i.nextZ;for(;A&&A.z>=g&&b&&b.z<=M;){if(A.x>=f&&A.x<=y&&A.y>=m&&A.y<=p&&A!==s&&A!==o&&xr(a,h,l,u,c,d,A.x,A.y)&&Fe(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=f&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&xr(a,h,l,u,c,d,b.x,b.y)&&Fe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=g;){if(A.x>=f&&A.x<=y&&A.y>=m&&A.y<=p&&A!==s&&A!==o&&xr(a,h,l,u,c,d,A.x,A.y)&&Fe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&xr(a,h,l,u,c,d,b.x,b.y)&&Fe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function np(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ks(n,s)&&Ku(n,e,e.next,s)&&Yr(n,s)&&Yr(s,n)&&(t.push(n.i,e.i,s.i),Zr(e),Zr(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function ip(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dp(o,a)){let l=Qu(o,a);o=Ji(o,o.next),l=Ji(l,l.next),qr(o,t,e,n,s,r,0),qr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ju(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(up(c))}s.sort(rp);for(let r=0;r<s.length;r++)e=op(s[r],e);return e}function rp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function op(i,t){let e=ap(i,t);if(!e)return t;let n=Qu(e,i);return Ji(n,n.next),Ji(e,e.next)}function ap(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ks(i,e))return e;do{if(ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$u(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Yr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&lp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function lp(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function cp(i,t,e,n){let s=i;do s.z===0&&(s.z=mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hp(s)}function hp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function up(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $u(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function xr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&$u(i,t,e,n,s,r,o,a)}function dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fp(i,t)&&(Yr(i,t)&&Yr(t,i)&&pp(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||ks(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ks(i,t){return i.x===t.x&&i.y===t.y}function Ku(i,t,e,n){let s=$o(Fe(i,t,e)),r=$o(Fe(i,t,n)),o=$o(Fe(e,n,i)),a=$o(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&Jo(i,e,t)||r===0&&Jo(i,n,t)||o===0&&Jo(e,i,n)||a===0&&Jo(e,t,n))}function Jo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $o(i){return i>0?1:i<0?-1:0}function fp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yr(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function pp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qu(i,t){let e=gc(i.i,i.x,i.y),n=gc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jh(i,t,e,n){let s=gc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xc=class{static triangulate(t,e,n=2){return jf(t,e,n)}},Cs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];tu(t),eu(n,t);let o=t.length;e.forEach(tu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,eu(n,e[l]);let a=xc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function tu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function eu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Jr=class i extends kr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var $r=class i extends kr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},$i=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],y=[],p=[];for(let g=0;g<h;g++){let M=g*d-o;for(let A=0;A<c;A++){let b=A*u-r;m.push(b,-M,0),y.push(0,0,1),p.push(A/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let A=M+c*g,b=M+c*(g+1),C=M+1+c*(g+1),v=M+1+c*g;f.push(A,b,v),f.push(b,C,v)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(y,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kr=class i extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new O,m=new Rt;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let g=r+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let y=0;y<s;y++){let p=y*(n+1);for(let g=0;g<n;g++){let M=g+p,A=M,b=M+n+1,C=M+n+2,v=M+1;a.push(A,b,v),a.push(b,C,v)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Qr=class i extends ze{constructor(t=new zs([new Rt(0,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;Cs.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let M=m[p];Cs.isClockWise(M)===!0&&(m[p]=M.reverse())}let y=Cs.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let M=m[p];f=f.concat(M)}for(let p=0,g=f.length;p<g;p++){let M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,g=y.length;p<g;p++){let M=y[p],A=M[0]+u,b=M[1]+u,C=M[2]+u;n.push(A,b,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return gp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function gp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ii=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,d=new O,f=[],m=[],y=[],p=[];for(let g=0;g<=n;g++){let M=[],A=g/n,b=o+A*a,C=t*Math.cos(b),v=Math.sqrt(t*t-C*C),x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let _=0;_<=e;_++){let w=_/e,R=s+w*r;u.x=-v*Math.cos(R),u.y=C,u.z=v*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(w+x,1-A),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let A=h[g][M+1],b=h[g][M],C=h[g+1][M],v=h[g+1][M+1];(g!==0||o>0)&&f.push(A,b,v),(g!==n-1||l<Math.PI)&&f.push(b,C,v)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(y,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nu(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=is(i[e]);for(let s in n)t[s]=n[s]}return t}function nu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $c(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var ju={clone:is,merge:un},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ta=class extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xn=class extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var wa=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Aa=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ko(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ea=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fc:r=t,a=2*e-n;break;case pc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:o=t,l=2*n-e;break;case pc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),y=m*m,p=y*m,g=-d*p+2*d*y-d*m,M=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*m+1,A=(-1-f)*p+(1.5+f)*y+.5*m,b=f*p-f*y;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+M*o[c+C]+A*o[l+C]+b*o[u+C];return r}},Ra=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ca=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ia=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),y=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*m;return r}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let y=o[c+m],p=o[l+m],g=f*d+m*2,M=u[g],A=u[g+1],b=t*d+m*2,C=h[b],v=h[b+1],x=Mp(n,e,M,C,s);r[m]=td(x,y,A,v,p)}return r}};function td(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function yp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Mp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=td(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=yp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ko(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ia(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break;case uc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ko(this.settings)&&(iu(this.settings.inTangents,t),iu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ko(this.settings)&&(su(this.settings.inTangents,t),su(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&uf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let y=e[u+m];if(y!==e[d+m]||y!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ko(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function iu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function su(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ua;var Li=class extends Cn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=br;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Pa.prototype.ValueTypeName="color";var La=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};La.prototype.ValueTypeName="number";var Da=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},jr=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Cn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=br;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new Ua,Fa=class{constructor(t){this.manager=t!==void 0?t:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var to=class extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},eo=class extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},hc=new Se,ru=new O,ou=new O,Oa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(ru),ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ou),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qo=new O,jo=new Fn,$n=new O,no=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qo,jo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,jo,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qo,jo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,jo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new O,au=new Rt,lu=new Rt,fn=class extends no{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,au,lu),e.subVectors(lu,au)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var io=class extends no{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends Oa{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var As=-90,Es=1,Gs=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(As,Es,t,e);s.layers=this.layers,this.add(s);let r=new fn(As,Es,t,e);r.layers=this.layers,this.add(r);let o=new fn(As,Es,t,e);o.layers=this.layers,this.add(o);let a=new fn(As,Es,t,e);a.layers=this.layers,this.add(a);let l=new fn(As,Es,t,e);l.layers=this.layers,this.add(l);let c=new fn(As,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ba=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Kc="\\[\\]\\.:\\/",Sp=new RegExp("["+Kc+"]","g"),Qc="[^"+Kc+"]",bp="[^"+Kc.replace("\\.","")+"]",Tp=/((?:WC+[\/:])*)/.source.replace("WC",Qc),wp=/(WCOD+)?/.source.replace("WCOD",bp),Ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Rp=new RegExp("^"+Tp+wp+Ap+Ep+"$"),Cp=["material","materials","bones","map"],vc=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sp,"")}static parseTrackName(t){let e=Rp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=vc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B_=new Float32Array(1);var yc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function jc(i,t,e,n){let s=Ip(n);switch(e){case zc:return i*t;case Xa:return i*t/s.components*s.byteLength;case qa:return i*t/s.components*s.byteLength;case Ui:return i*t*2/s.components*s.byteLength;case Ya:return i*t*2/s.components*s.byteLength;case kc:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case Za:return i*t*4/s.components*s.byteLength;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Qa:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case ja:case tl:case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:case uo:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vl:case yl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sl:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ip(i){switch(i){case Mn:case Uc:return{byteLength:1,components:1};case Xs:case Fc:case qn:return{byteLength:2,components:1};case Ha:case Wa:return{byteLength:2,components:4};case Xn:case Va:case zn:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Op(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Um=`uniform sampler2D dfgLUT;
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
}`,Fm=`
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sg=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform float backgroundBlurriness;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
}`,Xg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define MATCAP
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
}`,n0=`#define MATCAP
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
}`,i0=`#define NORMAL
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
}`,s0=`#define NORMAL
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
}`,r0=`#define PHONG
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
}`,o0=`#define PHONG
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
}`,a0=`#define STANDARD
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
}`,l0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,h0=`#define TOON
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
}`,u0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 color;
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
}`,m0=`uniform float rotation;
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
}`,g0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Bp,alphahash_pars_fragment:zp,alphamap_fragment:kp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Hp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:$p,iridescence_fragment:Kp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:em,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:om,common:am,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:xm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Cm,envmap_vertex:vm,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:Sm,fog_pars_fragment:bm,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:wm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Em,lights_pars_begin:Rm,lights_toon_fragment:Im,lights_toon_pars_fragment:Pm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Dm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Fm,lights_fragment_maps:Om,lights_fragment_end:Bm,lightprobes_pars_fragment:zm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Hm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Jm,morphinstance_vertex:$m,morphcolor_vertex:Km,morphnormal_vertex:Qm,morphtarget_pars_vertex:jm,morphtarget_vertex:tg,normal_fragment_begin:eg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:rg,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:hg,opaque_fragment:ug,packing:dg,premultiplied_alpha_fragment:fg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:xg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:yg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Sg,skinbase_vertex:bg,skinning_pars_vertex:Tg,skinning_vertex:wg,skinnormal_vertex:Ag,specularmap_fragment:Eg,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Ig,transmission_fragment:Pg,transmission_pars_fragment:Lg,uv_pars_fragment:Dg,uv_pars_vertex:Ng,uv_vertex:Ug,worldpos_vertex:Fg,background_vert:Og,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:kg,cube_vert:Gg,cube_frag:Vg,depth_vert:Hg,depth_frag:Wg,distance_vert:Xg,distance_frag:qg,equirect_vert:Yg,equirect_frag:Zg,linedashed_vert:Jg,linedashed_frag:$g,meshbasic_vert:Kg,meshbasic_frag:Qg,meshlambert_vert:jg,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:o0,meshphysical_vert:a0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},bt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ni={basic:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:un([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:un([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:un([bt.points,bt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:un([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:un([bt.common,bt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:un([bt.sprite,bt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:un([bt.common,bt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:un([bt.lights,bt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ni.physical={uniforms:un([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Al={r:0,b:0,g:0},x0=new Se,Td=new Jt;Td.set(-1,0,0,0,1,0,0,0,1);function _0(i,t,e,n,s,r){let o=new ne(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=t.get(A,b)}return A}function m(M){let A=!1,b=f(M);b===null?p(o,a):b&&b.isColor&&(p(b,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,A){let b=f(A);b&&b.isCubeTexture?(c===void 0&&(c=new be(new On(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:is(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,v,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(x0.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Td),c.material.toneMapped=ce.getTransfer(b.colorSpace)!==_e,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new be(new $i(2,2),new Bn({name:"BackgroundMaterial",uniforms:is(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ce.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(Al,$c(i)),e.buffers.color.setClear(Al.r,Al.g,Al.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:y,dispose:g}}function v0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(L,U,V,P,W){let G=!1,X=u(L,P,V,U);r!==X&&(r=X,c(r.object)),G=f(L,P,V,W),G&&m(L,P,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,b(L,U,V,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,U,V,P){let W=P.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let X=L.isInstancedMesh===!0?L.id:0,at=G[X];at===void 0&&(at={},G[X]=at);let J=at[V.id];J===void 0&&(J={},at[V.id]=J);let K=J[W];return K===void 0&&(K=d(l()),J[W]=K),K}function d(L){let U=[],V=[],P=[];for(let W=0;W<e;W++)U[W]=0,V[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,U,V,P){let W=r.attributes,G=U.attributes,X=0,at=V.getAttributes();for(let J in at)if(at[J].location>=0){let rt=W[J],Et=G[J];if(Et===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Et=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Et=L.instanceColor)),rt===void 0||rt.attribute!==Et||Et&&rt.data!==Et.data)return!0;X++}return r.attributesNum!==X||r.index!==P}function m(L,U,V,P){let W={},G=U.attributes,X=0,at=V.getAttributes();for(let J in at)if(at[J].location>=0){let rt=G[J];rt===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));let Et={};Et.attribute=rt,rt&&rt.data&&(Et.data=rt.data),W[J]=Et,X++}r.attributes=W,r.attributesNum=X,r.index=P}function y(){let L=r.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function p(L){g(L,0)}function g(L,U){let V=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;V[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),W[L]!==U&&(i.vertexAttribDivisor(L,U),W[L]=U)}function M(){let L=r.newAttributes,U=r.enabledAttributes;for(let V=0,P=U.length;V<P;V++)U[V]!==L[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function A(L,U,V,P,W,G,X){X===!0?i.vertexAttribIPointer(L,U,V,W,G):i.vertexAttribPointer(L,U,V,P,W,G)}function b(L,U,V,P){y();let W=P.attributes,G=V.getAttributes(),X=U.defaultAttributeValues;for(let at in G){let J=G[at];if(J.location>=0){let K=W[at];if(K===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let rt=K.normalized,Et=K.itemSize,Gt=t.get(K);if(Gt===void 0)continue;let it=Gt.buffer,Mt=Gt.type,At=Gt.bytesPerElement,Bt=Mt===i.INT||Mt===i.UNSIGNED_INT||K.gpuType===Va;if(K.isInterleavedBufferAttribute){let lt=K.data,Ut=lt.isInterleavedBuffer===!0?lt.stride:lt.itemSize,de=K.offset;if(lt.isInstancedInterleavedBuffer||lt.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)g(J.location+Q,lt.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Q=0;Q<J.locationSize;Q++)p(J.location+Q);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Q=0;Q<J.locationSize;Q++)A(J.location+Q,Et/J.locationSize,Mt,rt,Ut*At,(de+Et/J.locationSize*Q)*At,Bt)}else{if(K.isInstancedBufferAttribute){for(let lt=0;lt<J.locationSize;lt++)g(J.location+lt,K.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<J.locationSize;lt++)p(J.location+lt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let lt=0;lt<J.locationSize;lt++)A(J.location+lt,Et/J.locationSize,Mt,rt,Et*At,Et/J.locationSize*lt*At,Bt)}}else if(X!==void 0){let rt=X[at];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(J.location,rt);break;case 3:i.vertexAttrib3fv(J.location,rt);break;case 4:i.vertexAttrib4fv(J.location,rt);break;default:i.vertexAttrib1fv(J.location,rt)}}}}M()}function C(){w();for(let L in n){let U=n[L];for(let V in U){let P=U[V];for(let W in P){let G=P[W];for(let X in G)h(G[X].object),delete G[X];delete P[W]}}delete n[L]}}function v(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let V in U){let P=U[V];for(let W in P){let G=P[W];for(let X in G)h(G[X].object),delete G[X];delete P[W]}}delete n[L.id]}function x(L){for(let U in n){let V=n[U];for(let P in V){let W=V[P];if(W[L.id]===void 0)continue;let G=W[L.id];for(let X in G)h(G[X].object),delete G[X];delete W[L.id]}}}function _(L){for(let U in n){let V=n[U],P=L.isInstancedMesh===!0?L.id:0,W=V[P];if(W!==void 0){for(let G in W){let X=W[G];for(let at in X)h(X[at].object),delete X[at];delete W[G]}delete V[P],Object.keys(V).length===0&&delete n[U]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function y0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function M0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Yn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let _=x===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Mn&&x!==zn&&!_&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:C,samples:v}}function S0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Wn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,A=M*4,b=g.clippingState||null;l.value=b,b=h(m,d,A,f);for(let C=0;C!==A;++C)b[C]=e[C];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=f+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,b=f;A!==y;++A,b+=4)o.copy(u[A]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var xo=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Qi});r.uniforms.tEquirect.value=e;let o=new be(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=mn),new Gs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},nd=256,b0=3,T0=20,wd=256,Ad=16,w0=3,A0=new O,E0=new ne,Rl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gs(1,10,null),this._boxMesh=new be(new On(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=A0}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(E0));let p=new Gs(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(nd,Yc(t))}_fromTexture(t,e){t.mapping===ts||t.mapping===Ws?this._setSize(t.image.length===0?nd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=id(t,!1,!1),n=Math.log2(t)-b0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=id(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ts||t.mapping===Ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=R0(),this._integrationMaterial=C0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ad);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-w0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(wd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=I0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function id(i,t,e){return new xo(i,{minFilter:xi,generateMipmaps:t,type:qn,colorSpace:Tr,depthBuffer:e})}function _o(i,t,e){return new Bn({name:i,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:on,blending:Qi,depthTest:!1,depthWrite:!1})}function R0(){return _o("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wd}u

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
	`)}function C0(){return _o("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ad}},`

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
	`)}function I0(){return _o("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${T0}
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
	`)}function sd(){return _o("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rd(){return _o("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===za||f===ka)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let y=new xo(m.height);return y.fromEquirectangularTexture(i,d),t.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===za||f===ka,y=f===ts||f===Ws;if(m||y){let p=e.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Rl(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return m&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Rl(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===za?d.mapping=ts:f===ka&&(d.mapping=Ws),d}function l(d){let f=0,m=6;for(let y=0;y<m;y++)d[y]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_r("WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let y=r.get(m);y&&(t.remove(y),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function h(m){let y=m.attributes;for(let p in y)t.update(y[p],i.ARRAY_BUFFER)}function u(m){let y=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let M=y!==null?y.array.length:p.array.length/3-1,A=p.count>=65535?Lr:Pr,b=new A(Math.ceil(M/3)*6,1),C=b.array;if(y!==null){let x=y.array;g=y.version;for(let _=0,w=0;_<M;_+=3){let R=x[_+0],L=x[_+1],U=x[_+2];C[w++]=R,C[w++]=L,C[w++]=L,C[w++]=U,C[w++]=U,C[w++]=R}}else{g=p.version;for(let x=0,_=0;x<M;x+=3){let w=x+0,R=x+1,L=x+2;C[_++]=w,C[_++]=R,C[_++]=R,C[_++]=L,C[_++]=L,C[_++]=w}}b.version=g;let v=r.get(m);v&&t.remove(v),r.set(m,b)}function d(m){let y=r.get(m);if(y){let p=m.index;p!==null&&y.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function N0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let p=0;p<f;p++)y+=d[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function U0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,t,e){let n=new WeakMap,s=new Ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),y===!0&&(A=3);let b=a.attributes.position.count*A,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let v=new Float32Array(b*C*4*u),x=new Er(v,b,C,u);x.type=zn,x.needsUpdate=!0;let _=A*4;for(let R=0;R<u;R++){let L=p[R],U=g[R],V=M[R],P=b*C*4*R;for(let W=0;W<L.count;W++){let G=W*_;f===!0&&(s.fromBufferAttribute(L,W),v[P+G+0]=s.x,v[P+G+1]=s.y,v[P+G+2]=s.z,v[P+G+3]=0),m===!0&&(s.fromBufferAttribute(U,W),v[P+G+4]=s.x,v[P+G+5]=s.y,v[P+G+6]=s.z,v[P+G+7]=0),y===!0&&(s.fromBufferAttribute(V,W),v[P+G+8]=s.x,v[P+G+9]=s.y,v[P+G+10]=s.z,v[P+G+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Rt(b,C)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function O0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var B0={[Rc]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[ro]:"ACES_FILMIC_TONE_MAPPING",[Lc]:"AGX_TONE_MAPPING",[Dc]:"NEUTRAL_TONE_MAPPING",[Pc]:"CUSTOM_TONE_MAPPING"};function z0(i,t,e,n,s,r){let o=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ze;h.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new le([0,2,0,0,2,0],2));let u=new Ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new be(h,u),f=new io(-1,1,1,-1,0,1),m=null,y=null,p=!1,g,M=null,A=[],b=!1;this.setSize=function(C,v){o.setSize(C,v),a!==null&&a.setSize(C,v),l!==null&&l.setSize(C,v);for(let x=0;x<A.length;x++){let _=A[x];_.setSize&&_.setSize(C,v)}},this.setEffects=function(C){A=C,b=A.length>0&&A[0].isRenderPass===!0;let v=o.width,x=o.height;A.length>0&&a===null&&(a=new An(v,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new An(v,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&A.some(w=>w.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&c===null&&(c=new gi(v,x),r===!0&&(c.format=_i,c.type=es)),o.dispose(),o.depthTexture=_?c:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let w=0;w<A.length;w++){let R=A[w];R.setSize&&R.setSize(v,x),_&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(C,v){if(p||C.toneMapping===ti&&A.length===0)return!1;if(M=v,v!==null){let x=v.width,_=v.height;(o.width!==x||o.height!==_)&&this.setSize(x,_)}return b===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=ti,!0},this.hasRenderPass=function(){return b},this.end=function(C,v){C.toneMapping=g,p=!0;let x=o,_=a;for(let w=0;w<A.length;w++){let R=A[w];R.enabled!==!1&&(R.render(C,_,x,v),R.needsSwap!==!1&&(x=_,_=_===a?l:a))}if(m!==C.outputColorSpace||y!==C.toneMapping){m=C.outputColorSpace,y=C.toneMapping,u.defines={},ce.getTransfer(m)===_e&&(u.defines.SRGB_TRANSFER="");let w=B0[y];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(M),C.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Ed=new gn,Rd=new gi(1,1),Cd=new Br(1),Id=new Er,Pd=new pa,Ld=new Fr,od=[],ad=[],ld=new Float32Array(16),cd=new Float32Array(9),hd=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=od[s];if(r===void 0&&(r=new Float32Array(s),od[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Il(i,t){let e=ad[t];e===void 0&&(e=new Int32Array(t),ad[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function k0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;hd.set(n),i.uniformMatrix2fv(this.addr,!1,hd),Je(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;cd.set(n),i.uniformMatrix3fv(this.addr,!1,cd),Je(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;ld.set(n),i.uniformMatrix4fv(this.addr,!1,ld),Je(e,n)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function K0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function Pl(i){return i.version===0&&(i.compareFunction=Hc,i.needsUpdate=!0),i}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Pl(Rd):r=Ed,e.setTexture2D(t||r,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pd,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Pl(Cd):r=Ld,e.setTextureCube(t||r,s)}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Id,s)}function rx(i){switch(i){case 5126:return k0;case 35664:return G0;case 35665:return V0;case 35666:return H0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return Q0;case 36295:return j0;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ox(i,t){i.uniform1fv(this.addr,t)}function ax(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function lx(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function cx(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function hx(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dx(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fx(i,t){i.uniform1iv(this.addr,t)}function px(i,t){i.uniform2iv(this.addr,t)}function mx(i,t){i.uniform3iv(this.addr,t)}function gx(i,t){i.uniform4iv(this.addr,t)}function xx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function vx(i,t){i.uniform3uiv(this.addr,t)}function yx(i,t){i.uniform4uiv(this.addr,t)}function Mx(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Pl(Rd):o=Ed;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pd,r[o])}function bx(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Pl(Cd):o=Ld;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Tx(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Id,r[o])}function wx(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Tx}}var nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}},ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wx(e.type)}},sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;function ud(i,t){i.seq.push(t),i.map[t.id]=t}function Ax(i,t,e){let n=i.name,s=n.length;for(th.lastIndex=0;;){let r=th.exec(n),o=th.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ud(e,c===void 0?new nh(a,i,t):new ih(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new sh(a),ud(e,u)),e=u}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ax(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function dd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ex=37297,Rx=0;function Cx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var fd=new Jt;function Ix(i){ce._getMatrix(fd,ce.workingColorSpace,i);let t=`mat3( ${fd.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Cx(i.getShaderSource(t),a)}else return r}function Px(i,t){let e=Ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lx={[Rc]:"Linear",[Cc]:"Reinhard",[Ic]:"Cineon",[ro]:"ACESFilmic",[Lc]:"AgX",[Dc]:"Neutral",[Pc]:"Custom"};function Dx(i,t){let e=Lx[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var El=new O;function Nx(){ce.getLuminanceCoefficients(El);let i=El.x.toFixed(4),t=El.y.toFixed(4),e=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function Fx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ox(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function go(i){return i!==""}function md(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function gd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(i){return i.replace(Bx,zx)}function zx(i,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return rh(e)}var kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(kx,Gx)}function Gx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Vx={[Ki]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function Hx(i){return Vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wx={[Ws]:"ENVMAP_MODE_REFRACTION"};function Xx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qx={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Pu]:"ENVMAP_BLENDING_ADD"};function Yx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qx[i.combine]||"ENVMAP_BLENDING_NONE"}function Zx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Hx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Xx(e),u=Yx(e),d=Ux(e),f=Fx(r),m=s.createProgram(),y,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(go).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(go).join(`
`),p.length>0&&(p+=`
`)):(y=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),p=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?ie.tonemapping_pars_fragment:"",e.toneMapping!==ti?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Px("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),o=rh(o),o=md(o,e),o=gd(o,e),a=rh(a),a=md(a,e),a=gd(a,e),o=xd(o),a=xd(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=g+y+o,A=g+p+a,b=dd(s,s.VERTEX_SHADER,M),C=dd(s,s.FRAGMENT_SHADER,A);s.attachShader(m,b),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function v(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(m)||"",U=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(C)||"",P=L.trim(),W=U.trim(),G=V.trim(),X=!0,at=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,C);else{let J=pd(s,b,"vertex"),K=pd(s,C,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+J+`
`+K)}else P!==""?Vt("WebGLProgram: Program Info Log:",P):(W===""||G==="")&&(at=!1);at&&(R.diagnostics={runnable:X,programLog:P,vertexShader:{log:W,prefix:y},fragmentShader:{log:G,prefix:p}})}s.deleteShader(b),s.deleteShader(C),x=new qs(s,m),_=Ox(s,m)}let x;this.getUniforms=function(){return x===void 0&&v(this),x};let _;this.getAttributes=function(){return _===void 0&&v(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(m,Ex)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=C,this}var Jx=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ah(t),e.set(t,n)),n}},ah=class{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}};function $x(i){return i===Ui||i===uo||i===fo}function Kx(i,t,e,n,s,r){let o=new Rr,a=new oh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,_,w,R,L,U){let V=R.fog,P=L.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||W,G),at=d[x.type],J=n.precision;x.precision!==null&&(J=n.getMaxPrecision(x.precision),J!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,rt=K!==void 0?K.length:0,Et=0;P.morphAttributes.position!==void 0&&(Et=1),P.morphAttributes.normal!==void 0&&(Et=2),P.morphAttributes.color!==void 0&&(Et=3);let Gt,it,Mt,At;if(at){let yt=ni[at];Gt=yt.vertexShader,it=yt.fragmentShader}else{Gt=x.vertexShader,it=x.fragmentShader;let yt=a.getVertexShaderStage(x),me=a.getFragmentShaderStage(x);a.update(x,yt,me),Mt=yt.id,At=me.id}let Bt=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Ut=L.isInstancedMesh===!0,de=L.isBatchedMesh===!0,Q=!!x.map,Qt=!!x.matcap,se=!!X,Wt=se&&X.isPMREMTexture===!0,Le=!!x.aoMap,De=!!x.lightMap,Ve=!!x.bumpMap&&x.wireframe===!1,$t=!!x.normalMap,Re=!!x.displacementMap,Ue=!!x.emissiveMap,qe=!!x.metalnessMap,Ke=!!x.roughnessMap,Ye=x.anisotropy>0,z=x.clearcoat>0,sn=x.diffuseRoughness>0,fe=x.dispersion>0,te=x.retroreflectivity>0,ct=x.iridescence>0,pe=x.sheen>0,zt=x.transmission>0,kt=Ye&&!!x.anisotropyMap,I=z&&!!x.clearcoatMap,S=z&&!!x.clearcoatNormalMap,H=z&&!!x.clearcoatRoughnessMap,ot=sn&&!!x.diffuseRoughnessMap,nt=ct&&!!x.iridescenceMap,ft=ct&&!!x.iridescenceThicknessMap,xt=pe&&!!x.sheenColorMap,tt=pe&&!!x.sheenRoughnessMap,et=!!x.specularMap,ut=!!x.specularColorMap,D=!!x.specularIntensityMap,st=zt&&!!x.transmissionMap,j=zt&&!!x.thicknessMap,pt=!!x.gradientMap,dt=!!x.alphaMap,gt=x.alphaTest>0,Dt=!!x.alphaHash,Kt=!!x.extensions,ht=ti;x.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(ht=i.toneMapping);let Ft=Wt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,qt={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:Gt,fragmentShader:it,defines:x.defines,customVertexShaderID:Mt,customFragmentShaderID:At,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:de,batchingColor:de&&L._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Q,matcap:Qt,envMap:se,envMapMode:se&&X.mapping,envMapPMREM:Wt,envMapMaxLod:Wt?Ft.length-1:null,envMapSize:Wt?Ft[0].width:null,aoMap:Le,lightMap:De,bumpMap:Ve,normalMap:$t,displacementMap:Re,emissiveMap:Ue,normalMapObjectSpace:$t&&x.normalMapType===Nu,normalMapTangentSpace:$t&&x.normalMapType===wl,packedNormalMap:$t&&x.normalMapType===wl&&$x(x.normalMap.format),metalnessMap:qe,roughnessMap:Ke,anisotropy:Ye,anisotropyMap:kt,clearcoat:z,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:H,diffuseRoughness:sn,diffuseRoughnessMap:ot,dispersion:fe,retroreflection:te,iridescence:ct,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:pe,sheenColorMap:xt,sheenRoughnessMap:tt,specularMap:et,specularColorMap:ut,specularIntensityMap:D,transmission:zt,transmissionMap:st,thicknessMap:j,gradientMap:pt,opaque:x.transparent===!1&&x.blending===Hs&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:gt,alphaHash:Dt,combine:x.combine,mapUv:Q&&f(x.map.channel),aoMapUv:Le&&f(x.aoMap.channel),lightMapUv:De&&f(x.lightMap.channel),bumpMapUv:Ve&&f(x.bumpMap.channel),normalMapUv:$t&&f(x.normalMap.channel),displacementMapUv:Re&&f(x.displacementMap.channel),emissiveMapUv:Ue&&f(x.emissiveMap.channel),metalnessMapUv:qe&&f(x.metalnessMap.channel),roughnessMapUv:Ke&&f(x.roughnessMap.channel),anisotropyMapUv:kt&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(x.sheenRoughnessMap.channel),specularMapUv:et&&f(x.specularMap.channel),specularColorMapUv:ut&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:st&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:dt&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&($t||Ye),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Q||dt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&$t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Et,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:U.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:Q&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&ce.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||de)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function y(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)_.push(w),_.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(p(_,x),g(_,x),_.push(i.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function p(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapPMREM),x.push(_.envMapMaxLod),x.push(_.envMapSize),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.diffuseRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.numLightProbeGrids),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function g(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let _=d[x.type],w;if(_){let R=ni[_];w=ju.clone(R.uniforms)}else w=x.uniforms;return w}function A(x,_){let w=h.get(_);return w!==void 0?++w.usedTimes:(w=new Zx(i,_,x,s),c.push(w),h.set(_,w)),w}function b(x){if(--x.usedTimes===0){let _=c.indexOf(x);c[_]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function v(){a.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:v}}function Qx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function vd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,y,p,g){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:g},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=p,M.group=g),t++,M}function l(d,f,m,y,p,g,M){M.reversedDepth===!0&&(p=-p);let A=a(d,f,m,y,p,g);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):e.push(A)}function c(d,f,m,y,p,g){let M=a(d,f,m,y,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||jx),n.length>1&&n.sort(f||vd),s.length>1&&s.sort(f||vd)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new yd,i.set(n,[o])):s>=r.length?(o=new yd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new ne};break;case"SpotLight":e={position:new O,direction:new O,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){let t=new e_,e=n_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Se,o=new Se;function a(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,y=0,p=0,g=0,M=0,A=0,b=0,C=0,v=0,x=0,_=0,w=0,R=0;c.sort(s_);for(let U=0,V=c.length;U<V;U++){let P=c[U],W=P.color,G=P.intensity,X=P.distance,at=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ui?at=P.shadow.map.texture:at=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*G,u+=W.g*G,d+=W.b*G;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],G);R++}else if(P.isSunLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,rt=e.get(P);rt.shadowIntensity=K.intensity,rt.shadowBias=K.bias,rt.shadowNormalBias=K.normalBias,rt.shadowRadius=K.radius,rt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=rt,n.sunShadowMap[m]=at;let Et=K.getViewportCount();for(let Gt=0;Gt<Et;Gt++)n.sunShadowMatrix[y+Gt]=K.getMatrix(Gt),n.sunShadowCascade[y+Gt]=K._cascadeData[Gt];y+=Et,m++}n.sun[f]=J,f++}else if(P.isDirectionalLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,rt=e.get(P);rt.shadowIntensity=K.intensity,rt.shadowBias=K.bias,rt.shadowNormalBias=K.normalBias,rt.shadowRadius=K.radius,rt.shadowMapSize=K.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=at,n.directionalShadowMatrix[p]=P.shadow.matrix,C++}n.directional[p]=J,p++}else if(P.isSpotLight){let J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(W).multiplyScalar(G),J.distance=X,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[M]=J;let K=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,K.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[M]=K.matrix,P.castShadow){let rt=e.get(P);rt.shadowIntensity=K.intensity,rt.shadowBias=K.bias,rt.shadowNormalBias=K.normalBias,rt.shadowRadius=K.radius,rt.shadowMapSize=K.mapSize,n.spotShadow[M]=rt,n.spotShadowMap[M]=at,x++}M++}else if(P.isRectAreaLight){let J=t.get(P);J.color.copy(W).multiplyScalar(G),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=J,A++}else if(P.isPointLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let K=P.shadow,rt=e.get(P);rt.shadowIntensity=K.intensity,rt.shadowBias=K.bias,rt.shadowNormalBias=K.normalBias,rt.shadowRadius=K.radius,rt.shadowMapSize=K.mapSize,rt.shadowCameraNear=K.camera.near,rt.shadowCameraFar=K.camera.far,n.pointShadow[g]=rt,n.pointShadowMap[g]=at,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=J,g++}else if(P.isHemisphereLight){let J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(G),J.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[b]=J,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==b||L.numSunShadows!==m||L.numDirectionalShadows!==C||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=g,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.sunLength=f,L.directionalLength=p,L.pointLength=g,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=b,L.numSunShadows=m,L.numDirectionalShadows=C,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=_,L.numLightProbes=R,n.version=i_++)}function l(c,h){let u=0,d=0,f=0,m=0,y=0,p=0,g=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let b=c[M];if(b.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(g),u++}else if(b.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(b.isSpotLight){let C=n.spot[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let C=n.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Md(i){let t=new r_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Md(i),t.set(s,[a])):r>=o.length?(a=new Md(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`,c_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],h_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Sd=new Se,mo=new O,eh=new O;function u_(i,t,e){let n=new Ci,s=new Rt,r=new Rt,o=new Ne,a=new wa,l=new Aa,c={},h=e.maxTextureSize,u={[Ni]:on,[on]:Ni,[_n]:_n},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:a_,fragmentShader:l_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new be(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let g=this.type;this.render=function(v,x,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;this.type===uu&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Qi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=v.length;P<W;P++){let G=v[P],X=G.shadow;if(X===void 0){Vt("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let at=X.getFrameExtents();s.multiply(at),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,X.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=J,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Vs){if(G.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new An(s.x,s.y,{format:Ui,type:qn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new gi(s.x,s.y,zn),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=di,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=en,X.map.depthTexture.magFilter=en}else G.isPointLight?(X.map=new xo(s.x),X.map.depthTexture=new Br(s.x,Xn)):(X.map=new An(s.x,s.y),X.map.depthTexture=new gi(s.x,s.y,Xn)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=di,this.type===Ki?(X.map.depthTexture.compareFunction=J?Vc:Gc,X.map.depthTexture.minFilter=mn,X.map.depthTexture.magFilter=mn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=en,X.map.depthTexture.magFilter=en);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,_);let rt=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:_.layers;for(let Et=0;Et<K;Et++){let Gt=X.getCamera(Et);if(G.isPointLight){let it=X.camera,Mt=X.matrix,At=G.distance||it.far;At!==it.far&&(it.far=At,it.updateProjectionMatrix()),mo.setFromMatrixPosition(G.matrixWorld),it.position.copy(mo),eh.copy(it.position),eh.add(c_[Et]),it.up.copy(h_[Et]),it.lookAt(eh),it.updateMatrixWorld(),Mt.makeTranslation(-mo.x,-mo.y,-mo.z),Sd.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Sd,it.coordinateSystem,it.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Et),i.clear();else{Et===0&&(i.setRenderTarget(X.map),i.clear());let it=X.getViewport(Et);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),U.viewport(o)}n=X.getFrustum(Et),b(x,_,Gt,G,rt,this.type)}X.isPointLightShadow!==!0&&this.type===Vs&&M(X,_),X.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,L)};function M(v,x){let _=t.update(y);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new An(s.x,s.y,{format:Ui,type:qn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(x,null,_,d,y,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(x,null,_,f,y,null)}function A(v,x,_,w){let R=null,L=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=R.uuid,V=x.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let W=P[V];W===void 0&&(W=R.clone(),P[V]=W,x.addEventListener("dispose",C)),R=W}if(R.visible=x.visible,R.wireframe=x.wireframe,w===Vs?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=_}return R}function b(v,x,_,w,R,L){if(v.visible===!1)return;if(v.layers.test(R)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&L===Vs)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);let P=t.update(v),W=v.material;if(Array.isArray(W)){let G=P.groups;for(let X=0,at=G.length;X<at;X++){let J=G[X],K=W[J.materialIndex];if(K&&K.visible){let rt=A(v,K,w,L);v.onBeforeShadow(i,v,x,_,P,rt,J),i.renderBufferDirect(_,null,P,rt,v,J),v.onAfterShadow(i,v,x,_,P,rt,J)}}}else if(W.visible){let G=A(v,W,w,L);v.onBeforeShadow(i,v,x,_,P,G,null),i.renderBufferDirect(_,null,P,G,v,null),v.onAfterShadow(i,v,x,_,P,G,null)}}let V=v.children;for(let P=0,W=V.length;P<W;P++)b(V[P],x,_,w,R,L)}function C(v){v.target.removeEventListener("dispose",C);for(let _ in c){let w=c[_],R=v.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function d_(i,t){function e(){let D=!1,st=new Ne,j=null,pt=new Ne(0,0,0,0);return{setMask:function(dt){j!==dt&&!D&&(i.colorMask(dt,dt,dt,dt),j=dt)},setLocked:function(dt){D=dt},setClear:function(dt,gt,Dt,Kt,ht){ht===!0&&(dt*=Kt,gt*=Kt,Dt*=Kt),st.set(dt,gt,Dt,Kt),pt.equals(st)===!1&&(i.clearColor(dt,gt,Dt,Kt),pt.copy(st))},reset:function(){D=!1,j=null,pt.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,j=null,pt=null,dt=null;return{setReversed:function(gt){if(st!==gt){let Dt=t.get("EXT_clip_control");gt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),st=gt;let Kt=dt;dt=null,this.setClear(Kt)}},getReversed:function(){return st},setTest:function(gt){gt?lt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(gt){j!==gt&&!D&&(i.depthMask(gt),j=gt)},setFunc:function(gt){if(st&&(gt=Xu[gt]),pt!==gt){switch(gt){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=gt}},setLocked:function(gt){D=gt},setClear:function(gt){dt!==gt&&(dt=gt,st&&(gt=1-gt),i.clearDepth(gt))},reset:function(){D=!1,j=null,pt=null,dt=null,st=!1}}}function s(){let D=!1,st=null,j=null,pt=null,dt=null,gt=null,Dt=null,Kt=null,ht=null;return{setTest:function(Ft){D||(Ft?lt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Ft){st!==Ft&&!D&&(i.stencilMask(Ft),st=Ft)},setFunc:function(Ft,qt,yt){(j!==Ft||pt!==qt||dt!==yt)&&(i.stencilFunc(Ft,qt,yt),j=Ft,pt=qt,dt=yt)},setOp:function(Ft,qt,yt){(gt!==Ft||Dt!==qt||Kt!==yt)&&(i.stencilOp(Ft,qt,yt),gt=Ft,Dt=qt,Kt=yt)},setLocked:function(Ft){D=Ft},setClear:function(Ft){ht!==Ft&&(i.clearStencil(Ft),ht=Ft)},reset:function(){D=!1,st=null,j=null,pt=null,dt=null,gt=null,Dt=null,Kt=null,ht=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],y=null,p=!1,g=null,M=null,A=null,b=null,C=null,v=null,x=null,_=new ne(0,0,0),w=0,R=!1,L=null,U=null,V=null,P=null,W=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,at=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=at>=1):J.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=at>=2);let K=null,rt={},Et=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),it=new Ne().fromArray(Et),Mt=new Ne().fromArray(Gt);function At(D,st,j,pt){let dt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(D,gt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<j;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(st+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return gt}let Bt={};Bt[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Is),Ve(!1),$t(Mc),lt(i.CULL_FACE),Le(Qi);function lt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ut(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function de(D,st){return d[D]!==st?(i.bindFramebuffer(D,st),d[D]=st,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Q(D,st){let j=m,pt=!1;if(D){j=f.get(st),j===void 0&&(j=[],f.set(st,j));let dt=D.textures;if(j.length!==dt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Dt=dt.length;gt<Dt;gt++)j[gt]=i.COLOR_ATTACHMENT0+gt;j.length=dt.length,pt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,pt=!0);pt&&i.drawBuffers(j)}function Qt(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let se={[ji]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};se[mu]=i.MIN,se[gu]=i.MAX;let Wt={[xu]:i.ZERO,[_u]:i.ONE,[vu]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[bu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Au]:i.CONSTANT_COLOR,[Eu]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(D,st,j,pt,dt,gt,Dt,Kt,ht,Ft){if(D===Qi){p===!0&&(Ut(i.BLEND),p=!1);return}if(p===!1&&(lt(i.BLEND),p=!0),D!==du){if(D!==g||Ft!==R){if((M!==ji||C!==ji)&&(i.blendEquation(i.FUNC_ADD),M=ji,C=ji),Ft)switch(D){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",D);break}else switch(D){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bc:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",D);break}A=null,b=null,v=null,x=null,_.set(0,0,0),w=0,g=D,R=Ft}return}dt=dt||st,gt=gt||j,Dt=Dt||pt,(st!==M||dt!==C)&&(i.blendEquationSeparate(se[st],se[dt]),M=st,C=dt),(j!==A||pt!==b||gt!==v||Dt!==x)&&(i.blendFuncSeparate(Wt[j],Wt[pt],Wt[gt],Wt[Dt]),A=j,b=pt,v=gt,x=Dt),(Kt.equals(_)===!1||ht!==w)&&(i.blendColor(Kt.r,Kt.g,Kt.b,ht),_.copy(Kt),w=ht),g=D,R=!1}function De(D,st){D.side===_n?Ut(i.CULL_FACE):lt(i.CULL_FACE);let j=D.side===on;st&&(j=!j),Ve(j),D.blending===Hs&&D.transparent===!1?Le(Qi):Le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let pt=D.stencilWrite;a.setTest(pt),pt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function $t(D){D!==cu?(lt(i.CULL_FACE),D!==U&&(D===Mc?i.cullFace(i.BACK):D===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),U=D}function Re(D){D!==V&&(X&&i.lineWidth(D),V=D)}function Ue(D,st,j){D?(lt(i.POLYGON_OFFSET_FILL),(P!==st||W!==j)&&(P=st,W=j,o.getReversed()&&(st=-st,j=-j),i.polygonOffset(st,j))):Ut(i.POLYGON_OFFSET_FILL)}function qe(D){D?lt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Ke(D){D===void 0&&(D=i.TEXTURE0+G-1),K!==D&&(i.activeTexture(D),K=D)}function Ye(D,st,j){j===void 0&&(K===null?j=i.TEXTURE0+G-1:j=K);let pt=rt[j];pt===void 0&&(pt={type:void 0,texture:void 0},rt[j]=pt),(pt.type!==D||pt.texture!==st)&&(K!==j&&(i.activeTexture(j),K=j),i.bindTexture(D,st||Bt[D]),pt.type=D,pt.texture=st)}function z(){let D=rt[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function sn(){try{i.compressedTexImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function fe(){try{i.compressedTexImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function te(){try{i.texSubImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function ct(){try{i.texSubImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function pe(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function kt(){try{i.texStorage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function I(){try{i.texStorage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function S(){try{i.texImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function H(){try{i.texImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function ot(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function nt(D,st){u[D]!==st&&(i.pixelStorei(D,st),u[D]=st)}function ft(D){it.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function xt(D){Mt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Mt.copy(D))}function tt(D,st){let j=c.get(st);j===void 0&&(j=new WeakMap,c.set(st,j));let pt=j.get(D);pt===void 0&&(pt=i.getUniformBlockIndex(st,D.name),i.uniformBlockBinding(st,pt,pt),j.set(D,pt))}function et(D,st,j){let dt=c.get(st).get(D);l[dt]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,dt,j),l[dt]=j)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,rt={},d={},l={},f=new WeakMap,m=[],y=null,p=!1,g=null,M=null,A=null,b=null,C=null,v=null,x=null,_=new ne(0,0,0),w=0,R=!1,L=null,U=null,V=null,P=null,W=null,it.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ut,bindFramebuffer:de,drawBuffers:Q,useProgram:Qt,setBlending:Le,setMaterial:De,setFlipSided:Ve,setCullFace:$t,setLineWidth:Re,setPolygonOffset:Ue,setScissorTest:qe,activeTexture:Ke,bindTexture:Ye,unbindTexture:z,compressedTexImage2D:sn,compressedTexImage3D:fe,texImage2D:S,texImage3D:H,pixelStorei:nt,getParameter:ot,updateUBOMapping:tt,uniformBlockBinding:et,texStorage2D:kt,texStorage3D:I,texSubImage2D:te,texSubImage3D:ct,compressedTexSubImage2D:pe,compressedTexSubImage3D:zt,scissor:ft,viewport:xt,reset:ut}}function f_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,y=new FinalizationRegistry(I=>m.delete(I)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return p?new OffscreenCanvas(I,S):Ar("canvas")}function M(I,S,H){let ot=1,nt=kt(I);if((nt.width>H||nt.height>H)&&(ot=H/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ft=Math.floor(ot*nt.width),xt=Math.floor(ot*nt.height);d===void 0&&(d=g(ft,xt));let tt=S?g(ft,xt):d;return tt.width=ft,tt.height=xt,tt.getContext("2d").drawImage(I,0,0,ft,xt),Vt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ft+"x"+xt+")."),tt}else return"data"in I&&Vt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function A(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,S,H,ot,nt,ft=!1){if(I!==null){if(i[I]!==void 0)return i[I];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xt;ot&&(xt=t.get("EXT_texture_norm16"),xt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8),H===i.UNSIGNED_SHORT&&xt&&(tt=xt.R16_EXT),H===i.SHORT&&xt&&(tt=xt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),S===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8),H===i.UNSIGNED_SHORT&&xt&&(tt=xt.RG16_EXT),H===i.SHORT&&xt&&(tt=xt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGB16_EXT),H===i.SHORT&&xt&&(tt=xt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),S===i.RGBA){let et=ft?wr:ce.getTransfer(nt);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=et===_e?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGBA16_EXT),H===i.SHORT&&xt&&(tt=xt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(I,S){let H;return I?S===null||S===Xn||S===es?H=i.DEPTH24_STENCIL8:S===zn?H=i.DEPTH32F_STENCIL8:S===Xs&&(H=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xn||S===es?H=i.DEPTH_COMPONENT24:S===zn?H=i.DEPTH_COMPONENT32F:S===Xs&&(H=i.DEPTH_COMPONENT16),H}function _(I,S){return A(I)===!0||I.isFramebufferTexture&&I.minFilter!==en&&I.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function w(I){let S=new WeakRef(I);n.get(I).__ref=S,m.add(S),y.register(I,S,S)}function R(I){let S=n.get(I).__ref;S!==void 0&&(m.delete(S),y.unregister(S))}function L(I){V(I.target)}function U(I){P(I.target)}function V(I){I.removeEventListener("dispose",L),R(I),G(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",U),R(I),at(I)}function W(){for(let I of m){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):V(S))}m.clear(),u.clear()}function G(I){let S=n.get(I);if(S.__webglInit===void 0)return;let H=I.source,ot=f.get(H);if(ot){let nt=ot[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&X(I),Object.keys(ot).length===0&&f.delete(H)}n.remove(I)}function X(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let H=I.source,ot=f.get(H);delete ot[S.__cacheKey],o.memory.textures--}function at(I){let S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let H=I.depthTexture;if(H&&H.renderTarget===I&&V(H),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(S.__webglFramebuffer[nt]))for(let ft=0;ft<S.__webglFramebuffer[nt].length;ft++)i.deleteFramebuffer(S.__webglFramebuffer[nt][ft]);else i.deleteFramebuffer(S.__webglFramebuffer[nt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[nt])}else{if(Array.isArray(S.__webglFramebuffer))for(let nt=0;nt<S.__webglFramebuffer.length;nt++)i.deleteFramebuffer(S.__webglFramebuffer[nt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let nt=0;nt<S.__webglColorRenderbuffer.length;nt++)S.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[nt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=I.textures;for(let nt=0,ft=ot.length;nt<ft;nt++){let xt=n.get(ot[nt]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ot[nt])}n.remove(I)}let J=0;function K(){J=0}function rt(){return J}function Et(I){J=I}function Gt(){let I=J;return I>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,I}function it(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Mt(I,S){let H=n.get(I);if(I.isVideoTexture&&pe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let ot=I.image;if(ot===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function At(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){De(H,I,S);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function Bt(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){De(H,I,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function lt(I,S){let H=n.get(I);if(I.version>0&&H.__version!==I.version){Ve(H,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let Ut={[ca]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},de={[en]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Q={[Fu]:i.NEVER,[Hc]:i.ALWAYS,[Ou]:i.LESS,[Gc]:i.LEQUAL,[Bu]:i.EQUAL,[Vc]:i.GEQUAL,[zu]:i.GREATER,[ku]:i.NOTEQUAL};function Qt(I,S){if(S.type===zn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===Ga||S.magFilter===oo||S.magFilter===xi||S.minFilter===mn||S.minFilter===Ga||S.minFilter===oo||S.minFilter===xi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Ut[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Ut[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Ut[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==oo&&S.minFilter!==xi||S.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function se(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",L),w(S));let ot=S.source,nt=f.get(ot);nt===void 0&&(nt={},f.set(ot,nt));let ft=it(S);if(ft!==I.__cacheKey){nt[ft]===void 0&&(nt[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),nt[ft].usedTimes++;let xt=nt[I.__cacheKey];xt!==void 0&&(nt[I.__cacheKey].usedTimes--,xt.usedTimes===0&&X(S)),I.__cacheKey=ft,I.__webglTexture=nt[ft].texture}return H}function Wt(I,S,H){return Math.floor(Math.floor(I/H)/S)}function Le(I,S,H,ot){let ft=I.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,ot,S.data);else{ft.sort((D,st)=>D.start-st.start);let xt=0;for(let D=1;D<ft.length;D++){let st=ft[xt],j=ft[D],pt=st.start+st.count,dt=Wt(j.start,S.width,4),gt=Wt(st.start,S.width,4);j.start<=pt+1&&dt===gt&&Wt(j.start+j.count-1,S.width,4)===dt?st.count=Math.max(st.count,j.start+j.count-st.start):(++xt,ft[xt]=j)}ft.length=xt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let D=0,st=ft.length;D<st;D++){let j=ft[D],pt=Math.floor(j.start/4),dt=Math.ceil(j.count/4),gt=pt%S.width,Dt=Math.floor(pt/S.width),Kt=dt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,gt,Dt,Kt,ht,H,ot,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function De(I,S,H){let ot=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=i.TEXTURE_3D);let nt=se(I,S),ft=S.source;e.bindTexture(ot,I.__webglTexture,i.TEXTURE0+H);let xt=n.get(ft);if(ft.version!==xt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ht=ce.getPrimaries(ce.workingColorSpace),Ft=S.colorSpace===vi?null:ce.getPrimaries(S.colorSpace),qt=S.colorSpace===vi||ht===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let et=M(S.image,!1,s.maxTextureSize);et=zt(S,et);let ut=r.convert(S.format,S.colorSpace),D=r.convert(S.type),st=v(S.internalFormat,ut,D,S.normalized,S.colorSpace,S.isVideoTexture);Qt(ot,S);let j,pt=S.mipmaps,dt=S.isVideoTexture!==!0,gt=xt.__version===void 0||nt===!0,Dt=ft.dataReady,Kt=_(S,et);if(S.isDepthTexture)st=x(S.format===_i,S.type),gt&&(dt?e.texStorage2D(i.TEXTURE_2D,1,st,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,st,et.width,et.height,0,ut,D,null));else if(S.isDataTexture)if(pt.length>0){dt&&gt&&e.texStorage2D(i.TEXTURE_2D,Kt,st,pt[0].width,pt[0].height);for(let ht=0,Ft=pt.length;ht<Ft;ht++)j=pt[ht],dt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,j.width,j.height,ut,D,j.data):e.texImage2D(i.TEXTURE_2D,ht,st,j.width,j.height,0,ut,D,j.data);S.generateMipmaps=!1}else dt?(gt&&e.texStorage2D(i.TEXTURE_2D,Kt,st,et.width,et.height),Dt&&Le(S,et,ut,D)):e.texImage2D(i.TEXTURE_2D,0,st,et.width,et.height,0,ut,D,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){dt&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,st,pt[0].width,pt[0].height,et.depth);for(let ht=0,Ft=pt.length;ht<Ft;ht++)if(j=pt[ht],S.format!==Yn)if(ut!==null)if(dt){if(Dt)if(S.layerUpdates.size>0){let qt=jc(j.width,j.height,S.format,S.type);for(let yt of S.layerUpdates){let me=j.data.subarray(yt*qt/j.data.BYTES_PER_ELEMENT,(yt+1)*qt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,yt,j.width,j.height,1,ut,me)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,j.width,j.height,et.depth,ut,j.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,st,j.width,j.height,et.depth,0,j.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,j.width,j.height,et.depth,ut,D,j.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,st,j.width,j.height,et.depth,0,ut,D,j.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{dt&&gt&&e.texStorage2D(i.TEXTURE_2D,Kt,st,pt[0].width,pt[0].height);for(let ht=0,Ft=pt.length;ht<Ft;ht++)j=pt[ht],S.format!==Yn?ut!==null?dt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,j.width,j.height,ut,j.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,st,j.width,j.height,0,j.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,j.width,j.height,ut,D,j.data):e.texImage2D(i.TEXTURE_2D,ht,st,j.width,j.height,0,ut,D,j.data)}else if(S.isDataArrayTexture)if(dt){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,st,et.width,et.height,et.depth),Dt)if(S.layerUpdates.size>0){let ht=jc(et.width,et.height,S.format,S.type);for(let Ft of S.layerUpdates){let qt=et.data.subarray(Ft*ht/et.data.BYTES_PER_ELEMENT,(Ft+1)*ht/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,et.width,et.height,1,ut,D,qt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,D,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,et.width,et.height,et.depth,0,ut,D,et.data);else if(S.isData3DTexture)dt?(gt&&e.texStorage3D(i.TEXTURE_3D,Kt,st,et.width,et.height,et.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,D,et.data)):e.texImage3D(i.TEXTURE_3D,0,st,et.width,et.height,et.depth,0,ut,D,et.data);else if(S.isFramebufferTexture){if(gt)if(dt)e.texStorage2D(i.TEXTURE_2D,Kt,st,et.width,et.height);else{let ht=et.width,Ft=et.height;for(let qt=0;qt<Kt;qt++)e.texImage2D(i.TEXTURE_2D,qt,st,ht,Ft,0,ut,D,null),ht>>=1,Ft>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),et.parentNode!==ht){ht.appendChild(et),u.add(S),ht.onpaint=Ft=>{let qt=Ft.changedElements;for(let yt of u)qt.includes(yt.image)&&(yt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let qt=i.RGBA,yt=i.RGBA,me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,yt,me,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(dt&&gt){let ht=kt(pt[0]);e.texStorage2D(i.TEXTURE_2D,Kt,st,ht.width,ht.height)}for(let ht=0,Ft=pt.length;ht<Ft;ht++)j=pt[ht],dt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,ut,D,j):e.texImage2D(i.TEXTURE_2D,ht,st,ut,D,j);S.generateMipmaps=!1}else if(dt){if(gt){let ht=kt(et);e.texStorage2D(i.TEXTURE_2D,Kt,st,ht.width,ht.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,D,et)}else e.texImage2D(i.TEXTURE_2D,0,st,ut,D,et);A(S)&&S.mipmapsAutoUpdate===!0&&b(ot),xt.__version=ft.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ve(I,S,H){if(S.image.length!==6)return;let ot=se(I,S),nt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let ft=n.get(nt);if(nt.version!==ft.__version||ot===!0){e.activeTexture(i.TEXTURE0+H);let xt=ce.getPrimaries(ce.workingColorSpace),tt=S.colorSpace===vi?null:ce.getPrimaries(S.colorSpace),et=S.colorSpace===vi||xt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,st=[];for(let yt=0;yt<6;yt++)!ut&&!D?st[yt]=M(S.image[yt],!0,s.maxCubemapSize):st[yt]=D?S.image[yt].image:S.image[yt],st[yt]=zt(S,st[yt]);let j=st[0],pt=r.convert(S.format,S.colorSpace),dt=r.convert(S.type),gt=v(S.internalFormat,pt,dt,S.normalized,S.colorSpace),Dt=S.isVideoTexture!==!0,Kt=ft.__version===void 0||ot===!0,ht=nt.dataReady,Ft=_(S,j);Qt(i.TEXTURE_CUBE_MAP,S);let qt;if(S.isDepthTexture){if(gt=x(S.format===_i,S.type),Kt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,gt,j.width,j.height);else for(let yt=0;yt<6;yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,gt,j.width,j.height,0,pt,dt,null)}else if(ut){Dt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,gt,j.width,j.height);for(let yt=0;yt<6;yt++){qt=st[yt].mipmaps;for(let me=0;me<qt.length;me++){let Oe=qt[me];S.format!==Yn?pt!==null?Dt?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,0,0,Oe.width,Oe.height,pt,Oe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,gt,Oe.width,Oe.height,0,Oe.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,0,0,Oe.width,Oe.height,pt,dt,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,gt,Oe.width,Oe.height,0,pt,dt,Oe.data)}}}else{if(qt=S.mipmaps,Dt&&Kt){qt.length>0&&Ft++;let yt=kt(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,gt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(D){Dt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,st[yt].width,st[yt].height,pt,dt,st[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,gt,st[yt].width,st[yt].height,0,pt,dt,st[yt].data);for(let me=0;me<qt.length;me++){let ve=qt[me].image[yt].image;Dt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,0,0,ve.width,ve.height,pt,dt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,gt,ve.width,ve.height,0,pt,dt,ve.data)}}else{Dt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,pt,dt,st[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,gt,pt,dt,st[yt]);for(let me=0;me<qt.length;me++){let Oe=qt[me];Dt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,0,0,pt,dt,Oe.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,gt,pt,dt,Oe.image[yt])}}}A(S)&&S.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ft.__version=nt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function $t(I,S,H,ot,nt,ft){let xt=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),et=v(H.internalFormat,xt,tt,H.normalized,H.colorSpace),ut=n.get(S),D=n.get(H);if(D.__renderTarget=S,!ut.__hasExternalTextures){let st=Math.max(1,S.width>>ft),j=Math.max(1,S.height>>ft);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,ft,et,st,j,S.depth,0,xt,tt,null):e.texImage2D(nt,ft,et,st,j,0,xt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ct(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,nt,D.__webglTexture,0,te(S)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,nt,D.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(I,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let ot=S.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,ft=x(S.stencilBuffer,nt),xt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(S),ft,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(S),ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ft,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,I)}else{let ot=S.textures;for(let nt=0;nt<ot.length;nt++){let ft=ot[nt],xt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),et=v(ft.internalFormat,xt,tt,ft.normalized,ft.colorSpace);ct(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(S),et,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(S),et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,et,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(I,S,H){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(S.depthTexture);nt.__renderTarget=S;let ft=ot?S.depthTexture.image[0]:S.depthTexture.image;(!nt.__webglTexture||ft.width!==S.width||ft.height!==S.height)&&(ft.width=S.width,ft.height=S.height,S.depthTexture.needsUpdate=!0),ot?lt(S.depthTexture,0):Mt(S.depthTexture,0);let xt=nt.__webglTexture,tt=te(S),et=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ut=S.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===di)ct(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,et,xt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,et,xt,0);else if(S.depthTexture.format===_i)ct(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,et,xt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,et,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(I){let S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let ot=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=ot}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let ot=0;ot<6;ot++)Ue(S.__webglFramebuffer[ot],I,ot);else I.texture.mipmaps.length>0?Ue(S.__webglFramebuffer[0],I,0):Ue(S.__webglFramebuffer,I,0);else if(H){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=i.createRenderbuffer(),Re(S.__webglDepthbuffer[ot],I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ft)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Re(S.__webglDepthbuffer,I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(I,S,H){let ot=n.get(I);S!==void 0&&$t(ot.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&qe(I)}function Ye(I){let S=I.texture,H=n.get(I),ot=n.get(S);I.addEventListener("dispose",U),w(I);let nt=I.textures,ft=I.isWebGLCubeRenderTarget===!0,xt=nt.length>1;if(xt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=S.version,o.memory.textures++),ft){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let et=0;et<S.mipmaps.length;et++)H.__webglFramebuffer[tt][et]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(S.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xt)for(let tt=0,et=nt.length;tt<et;tt++){let ut=n.get(nt[tt]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ct(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<nt.length;tt++){let et=nt[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);let ut=r.convert(et.format,et.colorSpace),D=r.convert(et.type),st=v(et.internalFormat,ut,D,et.normalized,et.colorSpace,I.isXRRenderTarget===!0),j=te(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,st,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0)for(let et=0;et<S.mipmaps.length;et++)$t(H.__webglFramebuffer[tt][et],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else $t(H.__webglFramebuffer[tt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);A(S)?b(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let tt=0,et=nt.length;tt<et;tt++){let ut=nt[tt],D=n.get(ut),st=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(st=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,D.__webglTexture),Qt(st,ut),$t(H.__webglFramebuffer,I,ut,i.COLOR_ATTACHMENT0+tt,st,0),A(ut)&&b(st)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,ot.__webglTexture),Qt(tt,S),S.mipmaps.length>0)for(let et=0;et<S.mipmaps.length;et++)$t(H.__webglFramebuffer[et],I,S,i.COLOR_ATTACHMENT0,tt,et);else $t(H.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,tt,0);A(S)?b(tt):S.mipmaps.length>0&&i.texParameteri(tt,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&qe(I)}function z(I){let S=I.textures;for(let H=0,ot=S.length;H<ot;H++){let nt=S[H];if(A(nt)&&nt.mipmapsAutoUpdate===!0){let ft=C(I),xt=n.get(nt).__webglTexture;e.bindTexture(ft,xt),b(ft),e.unbindTexture()}}}let sn=[];function fe(I){if(I.samples>0){if(ct(I)===!1){let S=I.textures,H=I.width,ot=I.height,nt=i.COLOR_BUFFER_BIT,ft=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(I),tt=S.length>1;if(tt)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let D=n.get(S[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,H,ot,0,0,H,ot,nt,i.NEAREST),l===!0&&(sn.length=0,sn.push(i.COLOR_ATTACHMENT0+ut),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&sn.push(ft),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,sn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let D=n.get(S[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function te(I){return Math.min(s.maxSamples,I.samples)}function ct(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function zt(I,S){let H=I.colorSpace,ot=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Tr&&H!==vi&&(ce.getTransfer(H)===_e?(ot!==Yn||nt!==Mn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",H)),S}function kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Gt,this.resetTextureUnits=K,this.getTextureUnits=rt,this.setTextureUnits=Et,this.setTexture2D=Mt,this.setTexture2DArray=At,this.setTexture3D=Bt,this.setTextureCube=lt,this.rebindTextures=Ke,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=ct,this.dispose=W}function p_(i,t){function e(n,s=vi){let r,o=ce.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===kc)return i.RGB;if(n===Yn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Xa)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===Za)return i.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===$a||n===Ka||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===tl||n===el||n===nl||n===il||n===uo||n===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===tl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nl)return r.COMPRESSED_R11_EAC;if(n===il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===uo)return r.COMPRESSED_RG11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===yl||n===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===bl||n===fo||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Bn({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,y=typeof XRWebGLBinding<"u",p=new lh,g={},M=e.getContextAttributes(),A=null,b=null,C=[],v=[],x=new Rt,_=null,w=null,R=new fn;R.viewport=new Ne;let L=new fn;L.viewport=new Ne;let U=[R,L],V=new Ba,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let Mt=C[it];return Mt===void 0&&(Mt=new Us,C[it]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(it){let Mt=C[it];return Mt===void 0&&(Mt=new Us,C[it]=Mt),Mt.getGripSpace()},this.getHand=function(it){let Mt=C[it];return Mt===void 0&&(Mt=new Us,C[it]=Mt),Mt.getHandSpace()};function G(it){let Mt=v.indexOf(it.inputSource);if(Mt===-1)return;let At=C[Mt];At!==void 0&&(At.update(it.inputSource,it.frame,c||o),At.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",at);for(let it=0;it<C.length;it++){let Mt=v[it];Mt!==null&&(v[it]=null,C[it].disconnect(Mt))}P=null,W=null,p.reset();for(let it in g)delete g[it];if(t.setRenderTarget(A),f=null,d=null,u=null,s=null,b=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(x.width,x.height,!1),w!==null){let it=w.camera;it.fov=w.fov,it.zoom=w.zoom,it.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",at),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Bt=null,lt=null;M.depth&&(lt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=M.stencil?_i:di,Bt=M.stencil?es:Xn);let Ut={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new An(d.textureWidth,d.textureHeight,{format:Yn,type:Mn,depthTexture:new gi(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new An(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function at(it){for(let Mt=0;Mt<it.removed.length;Mt++){let At=it.removed[Mt],Bt=v.indexOf(At);Bt>=0&&(v[Bt]=null,C[Bt].disconnect(At))}for(let Mt=0;Mt<it.added.length;Mt++){let At=it.added[Mt],Bt=v.indexOf(At);if(Bt===-1){for(let Ut=0;Ut<C.length;Ut++)if(Ut>=v.length){v.push(At),Bt=Ut;break}else if(v[Ut]===null){v[Ut]=At,Bt=Ut;break}if(Bt===-1)break}let lt=C[Bt];lt&&lt.connect(At)}}function J(it,Mt){Mt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(Mt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let Mt=it.near,At=it.far;p.texture!==null&&(p.depthNear>0&&(Mt=p.depthNear),p.depthFar>0&&(At=p.depthFar)),V.near=L.near=R.near=Mt,V.far=L.far=R.far=At,(P!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,W=V.far),V.layers.mask=it.layers.mask|6,R.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let Bt=it.parent,lt=V.cameras;J(V,Bt);for(let Ut=0;Ut<lt.length;Ut++)J(lt[Ut],Bt);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),w===null&&it.isPerspectiveCamera&&(w={camera:it,fov:it.fov,zoom:it.zoom}),K(it,V,Bt)};function K(it,Mt,At){At===null?it.matrix.copy(Mt.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(Mt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Mt.projectionMatrix),it.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ds*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(it){return g[it]};let rt=null;function Et(it,Mt){if(h=Mt.getViewerPose(c||o),m=Mt,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Bt=!1;At.length!==V.cameras.length&&(V.cameras.length=0,Bt=!0);for(let Q=0;Q<At.length;Q++){let Qt=At[Q],se=null;if(f!==null)se=f.getViewport(Qt);else{let Le=u.getViewSubImage(d,Qt);se=Le.viewport,Q===0&&(t.setRenderTargetTextures(b,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(b))}let Wt=U[Q];Wt===void 0&&(Wt=new fn,Wt.layers.enable(Q),Wt.viewport=new Ne,U[Q]=Wt),Wt.matrix.fromArray(Qt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Qt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(se.x,se.y,se.width,se.height),Q===0&&(V.matrix.copy(Wt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Bt===!0&&V.cameras.push(Wt)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Q=u.getDepthInformation(At[0]);Q&&Q.isValid&&Q.texture&&p.init(Q,s.renderState)}if(lt&&lt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let Q=0;Q<At.length;Q++){let Qt=At[Q].camera;if(Qt){let se=g[Qt];se||(se=new zr,g[Qt]=se);let Wt=u.getCameraImage(Qt);se.sourceTexture=Wt}}}}for(let At=0;At<C.length;At++){let Bt=v[At],lt=C[At];Bt!==null&&lt!==void 0&&lt.update(Bt,Mt,c||o)}rt&&rt(it,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),m=null}let Gt=new bd;Gt.setAnimationLoop(Et),this.setAnimationLoop=function(it){rt=it},this.dispose=function(){}}},x_=new Se,Dd=new Jt;Dd.set(-1,0,0,0,1,0,0,0,1);function __(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,$c(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,A,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,A):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===on&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===on&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),A=M.envMap,b=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dd),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=A*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,t,e,n){let s={},r={};function o(M,A){let b=A.program;n.uniformBlockBinding(M,b,s[M.id])}function a(M,A){let b=s[M.id];b===void 0&&(m(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",p));let C=A.program;n.updateUBOMapping(M,C);let v=t.render.frame;r[M.id]!==v&&(c(M),r[M.id]=v)}function l(M){let A=i.createBuffer(),b=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(M){let A=s[M.id],b=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,x=b.length;v<x;v++){let _=b[v];if(Array.isArray(_))for(let w=0,R=_.length;w<R;w++)h(_[w],v,w,C);else h(_,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,A,b,C){if(d(M,A,b,C)===!0){let v=M.__offset,x=M.value;if(Array.isArray(x)){let _=0;for(let w=0;w<x.length;w++){let R=x[w],L=y(R,!0);u(R,M.__data,_),_+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function u(M,A,b){typeof M=="number"||typeof M=="boolean"?A[b]=M:M.isMatrix3?(A[b]=M.elements[0],A[b+1]=M.elements[1],A[b+2]=M.elements[2],A[b+3]=0,A[b+4]=M.elements[3],A[b+5]=M.elements[4],A[b+6]=M.elements[5],A[b+7]=0,A[b+8]=M.elements[6],A[b+9]=M.elements[7],A[b+10]=M.elements[8],A[b+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-b),b):M.toArray(A,b)}function d(M,A,b,C){let v=M.value,x=A+"_"+b;if(Array.isArray(v)){C[x]===void 0&&(C[x]=[]);let _=C[x],w=!1;for(let R=0;R<v.length;R++)f(v[R],_,R)===!0&&(w=!0);return w}return f(v,C,x)}function f(M,A,b){if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let C=A[b];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(M){let A=M.uniforms,b=0,C=16;for(let x=0,_=A.length;x<_;x++){let w=Array.isArray(A[x])?A[x]:[A[x]];for(let R=0,L=w.length;R<L;R++){let U=w[R],V=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(A[x])||Array.isArray(U.value),W=b;for(let X=0,at=V.length;X<at;X++){let J=V[X],K=y(J,P),rt=b%C,Et=rt%K.boundary,Gt=rt+Et;b+=Et,Gt!==0&&C-Gt<K.storage&&(b+=C-Gt),X===0&&(W=b),b+=K.storage}let G=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new G((b-W)/Float32Array.BYTES_PER_ELEMENT),U.__offset=W}}let v=b%C;return v>0&&(b+=C-v),M.__size=b,M.__cache={},this}function y(M,A){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){let A=M.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function M_(){return ei===null&&(ei=new Nr(y_,16,16,Ui,qn),ei.name="DFG_LUT",ei.minFilter=mn,ei.magFilter=mn,ei.wrapS=Kn,ei.wrapT=Kn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Cl=class{constructor(t={}){let{canvas:e=Vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let y=f,p=new Set([Za,Ya,qa]),g=new Set([Mn,Xn,Xs,es,Ha,Wa]),M=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},C=null,v=null,x=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,V=null,P=null,W=null;this._outputColorSpace=dn;let G=0,X=0,at=null,J=-1,K=null,rt=new Ne,Et=new Ne,Gt=null,it=new ne(0),Mt=0,At=e.width,Bt=e.height,lt=1,Ut=null,de=null,Q=new Ne(0,0,At,Bt),Qt=new Ne(0,0,At,Bt),se=!1,Wt=new Ci,Le=new ma,De=!1,Ve=!1,$t=new Se,Re=new O,Ue=new Ne,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Ye(){return at===null?lt:1}let z=n;function sn(T,F){return e.getContext(T,F)}let fe,te,ct,pe,zt,kt,I,S,H,ot,nt,ft,xt,tt,et,ut,D,st,j,pt,dt,gt,Dt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),z===null){let F="webgl2";if(z=sn(F,T),z===null)throw sn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(T){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Zt("WebGLRenderer: "+T.message),T}function Kt(){fe=new L0(z),fe.init(),dt=new p_(z,fe),te=new M0(z,fe,t,dt),ct=new d_(z,fe),te.reversedDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),V=z.createFramebuffer(),P=z.createFramebuffer(),W=z.createFramebuffer(),pe=new U0(z),zt=new Qx,kt=new f_(z,fe,ct,zt,te,dt,pe),I=new P0(R),S=new Op(z),gt=new v0(z,S),H=new D0(z,S,pe,gt),ot=new O0(z,H,S,gt,pe),st=new F0(z,te,kt),et=new S0(zt),nt=new Kx(R,I,fe,te,gt,et),ft=new __(R,zt),xt=new t_,tt=new o_(fe),D=new _0(R,I,ct,ot,m,l),ut=new u_(R,ot,te),Dt=new v_(z,pe,te,ct),j=new y0(z,fe,pe),pt=new N0(z,fe,pe),pe.programs=nt.programs,R.capabilities=te,R.extensions=fe,R.properties=zt,R.renderLists=xt,R.shadowMap=ut,R.state=ct,R.info=pe}y!==Mn&&(w=new z0(y,e.width,e.height,a,s,r));let ht=new ch(R,z);this.xr=ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(T){T!==void 0&&(lt=T,this.setSize(At,Bt,!1))},this.getSize=function(T){return T.set(At,Bt)},this.setSize=function(T,F,$=!0){if(ht.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=T,Bt=F,e.width=Math.floor(T*lt),e.height=Math.floor(F*lt),$===!0&&(e.style.width=T+"px",e.style.height=F+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(At*lt,Bt*lt).floor()},this.setDrawingBufferSize=function(T,F,$){At=T,Bt=F,lt=$,e.width=Math.floor(T*$),e.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(y===Mn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(rt)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,F,$,q){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,F,$,q),ct.viewport(rt.copy(Q).multiplyScalar(Ye()).round())},this.getScissor=function(T){return T.copy(Qt)},this.setScissor=function(T,F,$,q){T.isVector4?Qt.set(T.x,T.y,T.z,T.w):Qt.set(T,F,$,q),ct.scissor(Et.copy(Qt).multiplyScalar(Ye()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){ct.setScissorTest(se=T)},this.setOpaqueSort=function(T){Ut=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,$=!0){let q=0;if(T){let Y=!1;if(at!==null){let _t=at.texture.format;Y=p.has(_t)}if(Y){let _t=at.texture.type,It=g.has(_t),mt=D.getClearColor(),St=D.getClearAlpha(),Nt=mt.r,Xt=mt.g,re=mt.b;It?(M[0]=Nt,M[1]=Xt,M[2]=re,M[3]=St,z.clearBufferuiv(z.COLOR,0,M)):(A[0]=Nt,A[1]=Xt,A[2]=re,A[3]=St,z.clearBufferiv(z.COLOR,0,A))}else q|=z.COLOR_BUFFER_BIT}F&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),D.dispose(),xt.dispose(),tt.dispose(),kt.dispose(),zt.dispose(),I.dispose(),ot.dispose(),H.dispose(),gt.dispose(),Dt.dispose(),nt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Si),ht.removeEventListener("sessionend",ir),vn.stop()};function Ft(T){T.preventDefault(),Xc("WebGLRenderer: Context Lost."),L=!0}function qt(){Xc("WebGLRenderer: Context Restored."),L=!1;let T=pe.autoReset,F=ut.enabled,$=ut.autoUpdate,q=ut.needsUpdate,Y=ut.type;Kt(),pe.autoReset=T,ut.enabled=F,ut.autoUpdate=$,ut.needsUpdate=q,ut.type=Y}function yt(T){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){let F=T.target;F.removeEventListener("dispose",me),Oe(F)}function Oe(T){ve(T),zt.remove(T)}function ve(T){let F=zt.get(T).programs;F!==void 0&&(F.forEach(function($){nt.releaseProgram($)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,q,Y,_t){F===null&&(F=qe);let It=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,mt=Ln(T,F,$,q,Y);ct.setMaterial(q,It);let St=$.index,Nt=1;if(q.wireframe===!0){if(St=H.getWireframeAttribute($),St===void 0)return;Nt=2}let Xt=$.drawRange,re=$.attributes.position,Pt=Xt.start*Nt,oe=(Xt.start+Xt.count)*Nt;_t!==null&&(Pt=Math.max(Pt,_t.start*Nt),oe=Math.min(oe,(_t.start+_t.count)*Nt)),St!==null?(Pt=Math.max(Pt,0),oe=Math.min(oe,St.count)):re!=null&&(Pt=Math.max(Pt,0),oe=Math.min(oe,re.count));let Be=oe-Pt;if(Be<0||Be===1/0)return;gt.setup(Y,q,mt,$,St);let Te,ye=j;if(St!==null&&(Te=S.get(St),ye=pt,ye.setIndex(Te)),Y.isMesh)q.wireframe===!0?(ct.setLineWidth(q.wireframeLinewidth*Ye()),ye.setMode(z.LINES)):ye.setMode(z.TRIANGLES);else if(Y.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),ct.setLineWidth(Qe*Ye()),Y.isLineSegments?ye.setMode(z.LINES):Y.isLineLoop?ye.setMode(z.LINE_LOOP):ye.setMode(z.LINE_STRIP)}else Y.isPoints?ye.setMode(z.POINTS):Y.isSprite&&ye.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))ye.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Qe=Y._multiDrawStarts,Lt=Y._multiDrawCounts,rn=Y._multiDrawCount,ge=St?S.get(St).bytesPerElement:1,kn=zt.get(q).currentProgram.getUniforms();for(let je=0;je<rn;je++)kn.setValue(z,"_gl_DrawID",je),ye.render(Qe[je]/ge,Lt[je])}else if(Y.isInstancedMesh)ye.renderInstances(Pt,Be,Y.count);else if($.isInstancedBufferGeometry){let Qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lt=Math.min($.instanceCount,Qe);ye.renderInstances(Pt,Be,Lt)}else ye.render(Pt,Be)};function ki(T,F,$,q){U!==null&&T.isNodeMaterial&&U.setObject(q,T),De===!0&&et.setState(T,$,!1),T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,bn(T,F,q),T.side=Ni,T.needsUpdate=!0,bn(T,F,q),T.side=_n):bn(T,F,q)}this.compile=function(T,F,$=null){$===null&&($=T),U!==null&&U.renderStart(T,F,$),v=tt.get($),v.init(F),_.push(v),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(),U!==null&&U.updateLights(v.state.lightsArray),Ve=this.localClippingEnabled,De=et.init(this.clippingPlanes,Ve),De===!0&&et.setGlobalState(this.clippingPlanes,F),U!==null&&ut.render(v.state.shadowsArray,$,F);let q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let _t=Y.material;if(_t)if(Array.isArray(_t))for(let It=0;It<_t.length;It++){let mt=_t[It];ki(mt,$,F,Y),q.add(mt)}else ki(_t,$,F,Y),q.add(_t)}),v=_.pop(),U!==null&&U.renderEnd(),q},this.compileAsync=function(T,F,$=null){let q=this.compile(T,F,$);return new Promise(Y=>{function _t(){if(q.forEach(function(It){let St=zt.get(It).currentProgram;(St===void 0||St.isReady())&&q.delete(It)}),q.size===0){Y(T);return}setTimeout(_t,10)}fe.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Sn=null;function Pn(T){Sn&&Sn(T)}function Si(){vn.stop()}function ir(){vn.start()}let vn=new bd;vn.setAnimationLoop(Pn),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(T){Sn=T,ht.setAnimationLoop(T),T===null?vn.stop():vn.start()},ht.addEventListener("sessionstart",Si),ht.addEventListener("sessionend",ir),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(T,F);let $=ht.enabled===!0&&ht.isPresenting===!0,q=w!==null&&(at===null||$)&&w.begin(R,at);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(F),F=ht.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,F,at),v=tt.get(T,_.length),v.init(F),v.state.textureUnits=kt.getTextureUnits(),_.push(v),$t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Le.setFromArrayCamera(F):Wt.setFromProjectionMatrix($t,Un,F.reversedDepth),Ve=this.localClippingEnabled,De=et.init(this.clippingPlanes,Ve),C=xt.get(T,x.length),C.init(),x.push(C),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&ds(It,F,-1/0,R.sortObjects)}ds(T,F,0,R.sortObjects),C.finish(),U!==null&&U.updateLights(v.state.lightsArray),R.sortObjects===!0&&C.sort(Ut,de),Ke=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ke&&D.addToRenderList(C,T),this.info.autoReset===!0&&this.info.reset(),De===!0&&et.beginShadows();let Y=v.state.shadowsArray;if(ut.render(Y,T,F),De===!0&&et.endShadows(),(q&&w.hasRenderPass())===!1){let It=C.opaque,mt=C.transmissive;if(v.setupLights(),F.isArrayCamera){let St=F.cameras;if(mt.length>0)for(let Nt=0,Xt=St.length;Nt<Xt;Nt++){let re=St[Nt];To(It,mt,T,re)}Ke&&D.render(T);for(let Nt=0,Xt=St.length;Nt<Xt;Nt++){let re=St[Nt];Ae(C,T,re,re.viewport)}}else mt.length>0&&To(It,mt,T,F),Ke&&D.render(T),Ae(C,T,F)}at!==null&&X===0&&(kt.updateMultisampleRenderTarget(at),kt.updateRenderTargetMipmap(at)),q&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,F),gt.resetDefaultState(),J=-1,K=null,_.pop(),_.length>0?(v=_[_.length-1],kt.setTextureUnits(v.state.textureUnits),De===!0&&et.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,U!==null&&U.renderEnd()};function ds(T,F,$,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){let It=F.isArrayCamera?Le:Wt;if(!T.frustumCulled||T.intersectsFrustum(It)){q&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4($t);let mt=ot.update(T),St=T.material;St.visible&&C.push(T,mt,St,$,Ue.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let It=F.isArrayCamera?Le:Wt;if(!T.frustumCulled||T.intersectsFrustum(It)){let mt=ot.update(T),St=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ue.copy(mt.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4($t)),Array.isArray(St)){let Nt=mt.groups;for(let Xt=0,re=Nt.length;Xt<re;Xt++){let Pt=Nt[Xt],oe=St[Pt.materialIndex];oe&&oe.visible&&C.push(T,mt,oe,$,Ue.z,Pt,F)}}else St.visible&&C.push(T,mt,St,$,Ue.z,null,F)}}}let _t=T.children;for(let It=0,mt=_t.length;It<mt;It++)ds(_t[It],F,$,q)}function Ae(T,F,$,q){let{opaque:Y,transmissive:_t,transparent:It}=T;v.setupLightsView($),De===!0&&et.setGlobalState(R.clippingPlanes,$),q&&ct.viewport(rt.copy(q)),Y.length>0&&fs(Y,F,$),_t.length>0&&fs(_t,F,$),It.length>0&&fs(It,F,$),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function To(T,F,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[q.id]===void 0){let Pt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[q.id]=new An(1,1,{generateMipmaps:!0,type:Pt?qn:Mn,minFilter:xi,samples:Math.max(4,te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let _t=v.state.transmissionRenderTarget[q.id],It=q.viewport||rt;_t.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let mt=R.getRenderTarget(),St=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(it),Mt=R.getClearAlpha(),Mt<1&&R.setClearColor(16777215,.5),R.clear(),Ke&&D.render($);let Xt=R.toneMapping;R.toneMapping=ti;let re=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),v.setupLightsView(q),De===!0&&et.setGlobalState(R.clippingPlanes,q),fs(T,$,q),kt.updateMultisampleRenderTarget(_t),kt.updateRenderTargetMipmap(_t),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let oe=0,Be=F.length;oe<Be;oe++){let Te=F[oe],{object:ye,geometry:Qe,material:Lt,group:rn}=Te;if(Lt.side===_n&&ye.layers.test(q.layers)){let ge=Lt.side;Lt.side=on,Lt.needsUpdate=!0,si(ye,$,q,Qe,Lt,rn),Lt.side=ge,Lt.needsUpdate=!0,Pt=!0}}Pt===!0&&(kt.updateMultisampleRenderTarget(_t),kt.updateRenderTargetMipmap(_t))}R.setRenderTarget(mt,St,Nt),R.setClearColor(it,Mt),re!==void 0&&(q.viewport=re),R.toneMapping=Xt}function fs(T,F,$){let q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,_t=T.length;Y<_t;Y++){let It=T[Y],{object:mt,geometry:St,group:Nt}=It,Xt=It.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),mt.layers.test($.layers)&&si(mt,F,$,St,Xt,Nt)}}function si(T,F,$,q,Y,_t){U!==null&&Y.isNodeMaterial&&U.setObject(T,Y),T.onBeforeRender(R,F,$,q,Y,_t),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,F,$,q,T,_t),Y.transparent===!0&&Y.side===_n&&Y.forceSinglePass===!1?(Y.side=on,Y.needsUpdate=!0,R.renderBufferDirect($,F,q,Y,T,_t),Y.side=Ni,Y.needsUpdate=!0,R.renderBufferDirect($,F,q,Y,T,_t),Y.side=_n):R.renderBufferDirect($,F,q,Y,T,_t),T.onAfterRender(R,F,$,q,Y,_t)}function sr(T){let F=0;for(let $ of T)$.texture!==null&&F++;return F}function bn(T,F,$){F.isScene!==!0&&(F=qe);let q=zt.get(T),Y=v.state.lights,_t=v.state.shadowsArray,It=Y.state.version,mt=nt.getParameters(T,Y.state,_t,F,$,v.state.lightProbeGridArray),St=nt.getProgramCacheKey(mt),Nt=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let Xt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=I.get(T.envMap||q.environment,Xt),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",me),Nt=new Map,q.programs=Nt,q.programVariants=new Map);let re=Nt.get(St);if(re!==void 0){if(q.currentProgram===re&&q.lightsStateVersion===It)return or(T,mt),re}else mt.uniforms=nt.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,$,mt),T.onBeforeCompile(mt,R),re=nt.acquireProgram(mt,St),Nt.set(St,re),q.uniforms=mt.uniforms;let Pt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=et.uniform),or(T,mt),q.needsLights=ar(T),q.lightsStateVersion=It,q.needsLights&&(Pt.ambientLightColor.value=Y.state.ambient,Pt.lightProbe.value=Y.state.probe,Pt.sunLights.value=Y.state.sun,Pt.sunLightShadows.value=Y.state.sunShadow,Pt.directionalLights.value=Y.state.directional,Pt.directionalLightShadows.value=Y.state.directionalShadow,Pt.spotLights.value=Y.state.spot,Pt.spotLightShadows.value=Y.state.spotShadow,Pt.rectAreaLights.value=Y.state.rectArea,Pt.ltc_1.value=Y.state.rectAreaLTC1,Pt.ltc_2.value=Y.state.rectAreaLTC2,Pt.pointLights.value=Y.state.point,Pt.pointLightShadows.value=Y.state.pointShadow,Pt.hemisphereLights.value=Y.state.hemi,Pt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Pt.sunShadowCascade.value=Y.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Y.state.spotLightMatrix,Pt.spotLightMap.value=Y.state.spotLightMap,Pt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=sr(v.state.lightProbeGridArray),q.currentProgram=re,q.uniformsList=null,re}function wo(T,F,$,q,Y){let _t=zt.get(T),It=_t.currentProgram.id+","+q+","+Y,mt=_t.programVariants.get(It);return mt===void 0?(mt=bn(T,F,$),_t.programVariants.set(It,mt)):(_t.currentProgram=mt,_t.uniformsList=null,_t.outputColorSpace=q,_t.toneMapping=Y),mt}function rr(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=qs.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function or(T,F){let $=zt.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Ln(T,F,$,q,Y){F.isScene!==!0&&(F=qe),kt.resetTextureUnits();let _t=F.fog,It=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,mt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ce.workingColorSpace,St=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Nt=I.get(q.envMap||It,St),Xt=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,re=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pt=!!$.morphAttributes.position,oe=!!$.morphAttributes.normal,Be=!!$.morphAttributes.color,Te=ti;q.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Te=R.toneMapping);let ye=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=ye!==void 0?ye.length:0,Lt=zt.get(q),rn=v.state.lights;if(De===!0&&(Ve===!0||T!==K)){let Ce=T===K&&q.id===J;et.setState(q,T,Ce)}let ge=!1,kn=!1;q.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==rn.state.version||Y.isBatchedMesh&&Lt.batching===!1||!Y.isBatchedMesh&&Lt.batching===!0||Y.isBatchedMesh&&Lt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Lt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Lt.instancing===!1||!Y.isInstancedMesh&&Lt.instancing===!0||Y.isSkinnedMesh&&Lt.skinning===!1||!Y.isSkinnedMesh&&Lt.skinning===!0||Y.isInstancedMesh&&Lt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Lt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Lt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Lt.instancingMorph===!1&&Y.morphTexture!==null||Lt.envMap!==Nt||q.fog===!0&&Lt.fog!==_t||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==et.numPlanes||Lt.numIntersection!==et.numIntersection)||Lt.vertexAlphas!==Xt||Lt.vertexTangents!==re||Lt.morphTargets!==Pt||Lt.morphNormals!==oe||Lt.morphColors!==Be||Lt.morphTargetsCount!==Qe||Lt.numLightProbeGrids!==sr(v.state.lightProbeGridArray)?ge=!0:(Lt.outputColorSpace!==mt||Lt.toneMapping!==Te)&&(kn=!0):(ge=!0,Lt.__version=q.version);let je=Lt.currentProgram;(ge===!0||kn===!0)&&(je=kn===!0?wo(q,F,Y,mt,Te):bn(q,F,Y),U&&q.isNodeMaterial&&U.onUpdateProgram(q,je,Lt));let Gi=!1,Jn=!1,ri=!1,he=je.getUniforms(),He=Lt.uniforms;if(ct.useProgram(je.program)&&(Gi=!0,Jn=!0,ri=!0),q.id!==J&&(J=q.id,Jn=!0),Gi||K!==T){ct.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),he.setValue(z,"projectionMatrix",T.projectionMatrix),he.setValue(z,"viewMatrix",T.matrixWorldInverse);let We=he.map.cameraPosition;We!==void 0&&We.setValue(z,Re.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&he.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&he.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,Jn=!0,ri=!0)}if(Lt.needsLights&&(rn.state.sunShadowMap.length>0&&he.setValue(z,"sunShadowMap",rn.state.sunShadowMap,kt),rn.state.directionalShadowMap.length>0&&he.setValue(z,"directionalShadowMap",rn.state.directionalShadowMap,kt),rn.state.spotShadowMap.length>0&&he.setValue(z,"spotShadowMap",rn.state.spotShadowMap,kt),rn.state.pointShadowMap.length>0&&he.setValue(z,"pointShadowMap",rn.state.pointShadowMap,kt)),Y.isSkinnedMesh){he.setOptional(z,Y,"bindMatrix"),he.setOptional(z,Y,"bindMatrixInverse");let Ce=Y.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),he.setValue(z,"boneTexture",Ce.boneTexture,kt))}Y.isBatchedMesh&&(he.setOptional(z,Y,"batchingTexture"),he.setValue(z,"batchingTexture",Y._matricesTexture,kt),he.setOptional(z,Y,"batchingIdTexture"),he.setValue(z,"batchingIdTexture",Y._indirectTexture,kt),he.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&he.setValue(z,"batchingColorTexture",Y._colorsTexture,kt));let yn=$.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&st.update(Y,$,je),(Jn||Lt.receiveShadow!==Y.receiveShadow)&&(Lt.receiveShadow=Y.receiveShadow,he.setValue(z,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(He.envMapIntensity.value=F.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=M_()),Jn){if(he.setValue(z,"toneMappingExposure",R.toneMappingExposure),Lt.needsLights&&Ao(He,ri),_t&&q.fog===!0&&ft.refreshFogUniforms(He,_t),ft.refreshMaterialUniforms(He,q,lt,Bt,v.state.transmissionRenderTarget[T.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Ce=b,We=0;for(let an of v.state.lightProbeGridArray)an.texture!==null&&(Ce.textures[We]=an.texture,Ce.min[We]=an.boundingBox.min,Ce.max[We]=an.boundingBox.max,Ce.resolution[We]=an.resolution,We++);for(let an in Ce)Ce[an].length=We;He.probesSH.value=Ce.textures,He.probesMin.value=Ce.min,He.probesMax.value=Ce.max,He.probesResolution.value=Ce.resolution}qs.upload(z,rr(Lt),He,kt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(qs.upload(z,rr(Lt),He,kt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&he.setValue(z,"center",Y.center),he.setValue(z,"modelViewMatrix",Y.modelViewMatrix),he.setValue(z,"normalMatrix",Y.normalMatrix),he.setValue(z,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ce=q.uniformsGroups;for(let We=0,an=Ce.length;We<an;We++){let Eo=Ce[We];Dt.update(Eo,je),Dt.bind(Eo,je)}}return je}function Ao(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function ar(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(T,F,$){let q=zt.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),zt.get(T.texture).__webglTexture=F,zt.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let $=zt.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,$=0){at=T,G=F,X=$;let q=null,Y=!1,_t=!1;if(T){let mt=zt.get(T);if(mt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(z.FRAMEBUFFER,mt.__webglFramebuffer),rt.copy(T.viewport),Et.copy(T.scissor),Gt=T.scissorTest,ct.viewport(rt),ct.scissor(Et),ct.setScissorTest(Gt),J=-1;return}else if(mt.__webglFramebuffer===void 0)kt.setupRenderTarget(T);else if(mt.__hasExternalTextures)kt.rebindTextures(T,zt.get(T.texture).__webglTexture,zt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xt=T.depthTexture;if(mt.__boundDepthTexture!==Xt){if(Xt!==null&&zt.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(T)}}let St=T.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(_t=!0);let Nt=zt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?q=Nt[F][$]:q=Nt[F],Y=!0):T.samples>0&&kt.useMultisampledRTT(T)===!1?q=zt.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?q=Nt[$]:q=Nt,rt.copy(T.viewport),Et.copy(T.scissor),Gt=T.scissorTest}else rt.copy(Q).multiplyScalar(lt).floor(),Et.copy(Qt).multiplyScalar(lt).floor(),Gt=se;if($!==0&&(q=V),ct.bindFramebuffer(z.FRAMEBUFFER,q)&&ct.drawBuffers(T,q),ct.viewport(rt),ct.scissor(Et),ct.setScissorTest(Gt),Y){let mt=zt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,mt.__webglTexture,$)}else if(_t){let mt=F;for(let St=0;St<T.textures.length;St++){let Nt=zt.get(T.textures[St]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+St,Nt.__webglTexture,$,mt)}}else if(T!==null&&$!==0){let mt=zt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mt.__webglTexture,$)}J=-1};function lr(T){let F=zt.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=te.textureFormatReadable(T.format),F.__typeReadable=te.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,$,q,Y,_t,It,mt=0){if(!(T&&T.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(St=St[It],Array.isArray(St)&&(St=St[0])),St){ct.bindFramebuffer(z.FRAMEBUFFER,St);try{let Nt=T.textures[mt],Xt=Nt.format,re=Nt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+mt);let Pt=lr(Nt);if(Pt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&$>=0&&$<=T.height-Y&&z.readPixels(F,$,q,Y,dt.convert(Xt),dt.convert(re),_t)}finally{let Nt=at!==null?zt.get(at).__webglFramebuffer:null;ct.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,F,$,q,Y,_t,It,mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(St=St[It],Array.isArray(St)&&(St=St[0])),St)if(F>=0&&F<=T.width-q&&$>=0&&$<=T.height-Y){ct.bindFramebuffer(z.FRAMEBUFFER,St);let Nt=T.textures[mt],Xt=Nt.format,re=Nt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+mt);let Pt=lr(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.bufferData(z.PIXEL_PACK_BUFFER,_t.byteLength,z.STREAM_READ),z.readPixels(F,$,q,Y,dt.convert(Xt),dt.convert(re),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Be=at!==null?zt.get(at).__webglFramebuffer:null;ct.bindFramebuffer(z.FRAMEBUFFER,Be);let Te=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Wu(z,Te,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_t),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(oe),z.deleteSync(Te),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(T.image.width*q),_t=Math.floor(T.image.height*q),It=F!==null?F.x:0,mt=F!==null?F.y:0;kt.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,It,mt,Y,_t),ct.unbindTexture()},this.copyTextureToTexture=function(T,F,$=null,q=null,Y=0,_t=0){let It,mt,St,Nt,Xt,re,Pt,oe,Be,Te=T.isCompressedTexture?T.mipmaps[_t]:T.image;if($!==null)It=$.max.x-$.min.x,mt=$.max.y-$.min.y,St=$.isBox3?$.max.z-$.min.z:1,Nt=$.min.x,Xt=$.min.y,re=$.isBox3?$.min.z:0;else{let he=Math.pow(2,-Y);It=Math.floor(Te.width*he),mt=Math.floor(Te.height*he),T.isDataArrayTexture?St=Te.depth:T.isData3DTexture?St=Math.floor(Te.depth*he):St=1,Nt=0,Xt=0,re=0}q!==null?(Pt=q.x,oe=q.y,Be=q.z):(Pt=0,oe=0,Be=0);let ye=dt.convert(F.format),Qe=dt.convert(F.type),Lt;F.isData3DTexture?(kt.setTexture3D(F,0),Lt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(kt.setTexture2DArray(F,0),Lt=z.TEXTURE_2D_ARRAY):(kt.setTexture2D(F,0),Lt=z.TEXTURE_2D),ct.activeTexture(z.TEXTURE0),ct.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),ct.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ct.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let rn=ct.getParameter(z.UNPACK_ROW_LENGTH),ge=ct.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=ct.getParameter(z.UNPACK_SKIP_PIXELS),je=ct.getParameter(z.UNPACK_SKIP_ROWS),Gi=ct.getParameter(z.UNPACK_SKIP_IMAGES);ct.pixelStorei(z.UNPACK_ROW_LENGTH,Te.width),ct.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te.height),ct.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),ct.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),ct.pixelStorei(z.UNPACK_SKIP_IMAGES,re);let Jn=T.isDataArrayTexture||T.isData3DTexture,ri=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let he=zt.get(T),He=zt.get(F),yn=zt.get(he.__renderTarget),Ce=zt.get(He.__renderTarget);ct.bindFramebuffer(z.READ_FRAMEBUFFER,yn.__webglFramebuffer),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let We=0;We<St;We++)Jn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(T).__webglTexture,Y,re+We),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(F).__webglTexture,_t,Be+We)),z.blitFramebuffer(Nt,Xt,Nt+It,Xt+mt,Pt,oe,Pt+It,oe+mt,z.DEPTH_BUFFER_BIT,z.NEAREST);ct.bindFramebuffer(z.READ_FRAMEBUFFER,null),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||zt.has(T)){let he=zt.get(T),He=zt.get(F);ct.bindFramebuffer(z.READ_FRAMEBUFFER,P),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,W);for(let yn=0;yn<St;yn++)Jn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,he.__webglTexture,Y,re+yn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,he.__webglTexture,Y),ri?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,_t,Be+yn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,_t),Y!==0?z.blitFramebuffer(Nt,Xt,Nt+It,Xt+mt,Pt,oe,Pt+It,oe+mt,z.COLOR_BUFFER_BIT,z.NEAREST):ri?z.copyTexSubImage3D(Lt,_t,Pt,oe,Be+yn,Nt,Xt,It,mt):z.copyTexSubImage2D(Lt,_t,Pt,oe,Nt,Xt,It,mt);ct.bindFramebuffer(z.READ_FRAMEBUFFER,null),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ri?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Lt,_t,Pt,oe,Be,It,mt,St,ye,Qe,Te.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Lt,_t,Pt,oe,Be,It,mt,St,ye,Te.data):z.texSubImage3D(Lt,_t,Pt,oe,Be,It,mt,St,ye,Qe,Te):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_t,Pt,oe,It,mt,ye,Qe,Te.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_t,Pt,oe,Te.width,Te.height,ye,Te.data):z.texSubImage2D(z.TEXTURE_2D,_t,Pt,oe,It,mt,ye,Qe,Te);ct.pixelStorei(z.UNPACK_ROW_LENGTH,rn),ct.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ge),ct.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),ct.pixelStorei(z.UNPACK_SKIP_ROWS,je),ct.pixelStorei(z.UNPACK_SKIP_IMAGES,Gi),_t===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(Lt),ct.unbindTexture()},this.initRenderTarget=function(T){zt.get(T).__webglFramebuffer===void 0&&kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?kt.setTextureCube(T,0):T.isData3DTexture?kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?kt.setTexture2DArray(T,0):kt.setTexture2D(T,0),ct.unbindTexture()},this.resetState=function(){G=0,X=0,at=null,ct.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var ii=[-57,-19,19,57],Zn=[-38,0,38],vo={x:14,z:-7},ss={x:12.05,z:-5.45},$e={x:2,z:38},nn={x:38,z:-38},Zs={x:42.3,z:-41.25},xe=(i,t,e)=>Math.max(t,Math.min(e,i)),Ct=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z);function In(i,t,e,n){return Math.abs(i)+e<65&&Math.abs(t)+e<65&&n.every(s=>{let r=i-xe(i,s.x-s.w/2,s.x+s.w/2),o=t-xe(t,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=e*e})}function yo(i,t,e,n,s){let r=i.x,o=i.z;return In(t,i.z,n,s)&&(i.x=t),In(i.x,e,n,s)&&(i.z=e),i.x!==r||i.z!==o}function Fi(i,t,e){let n=Math.atan2(Math.sin(t-i),Math.cos(t-i));return i+xe(n,-e,e)}function Nd(i=0){return Math.sign(i)*Math.max(0,(Math.abs(i)-.16)/(1-.16))}function Fd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ze;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ud(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let m=Ud(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Ud(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new pn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let y=h.getComponent(d,m);a.setComponent(d+u,m,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Od={car:{axle:1.17,radius:.98,offsets:[-1.17,0,1.17],mass:1},bike:{axle:.73,radius:.39,offsets:[-.73,0,.73],mass:.39}},dh=i=>Od[i]??Od.car;function rs(i,t){Object.assign(i,t,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function yi(i,t,e,n,s="car"){let r=Math.sin(e),o=Math.cos(e),{offsets:a,radius:l}=dh(s);return a.every(c=>In(i+r*c,t+o*c,l,n))}function Mo(i,t,e,n=0){let s=Math.sin(i.angle),r=Math.cos(i.angle),o=t-i.x,a=e-i.z,l=i.kind==="bike"?.35:.99,c=i.kind==="bike"?1.105:2.135,h=Math.abs(o*r-a*s)-l,u=Math.abs(o*s+a*r)-c;return h<=0&&u<=0||Math.hypot(Math.max(0,h),Math.max(0,u))<n}function Ll(i,t,e,n,s){let r=Math.sin(n),o=Math.cos(n),a=dh(i.kind);for(let l of s){if(l===i||Math.abs(l.x-t)>4.5||Math.abs(l.z-e)>4.5)continue;let c=Math.sin(l.angle),h=Math.cos(l.angle),u=dh(l.kind),d=a.radius+u.radius,f=d,m=0,y=0;for(let p of a.offsets)for(let g of u.offsets){let M=t+r*p-l.x-c*g,A=e+o*p-l.z-h*g,b=Math.hypot(M,A);if(b>=f)continue;f=b;let C=Math.hypot(t-l.x,e-l.z);m=b>.02?M/b:C>.02?(t-l.x)/C:r,y=b>.02?A/b:C>.02?(e-l.z)/C:o}if(f<d)return{other:l,nx:m,nz:y,mass:a.mass,otherMass:u.mass}}return null}function uh(i,t){t<2.4||(i.integrity=Math.max(0,i.integrity-(t-2.4)*2.6),i.impact=Math.max(i.impact,t))}function Mi(i,t,e,n,s){let{brake:r}=e,o=i.kind==="bike",a=i.integrity>0?e.throttle:0,l=i.integrity>0?e.steer:0;i.impact=Math.max(0,i.impact-t*21),i.steer+=(l-i.steer)*(1-Math.exp(-t*10));let c=Math.sin(i.angle),h=Math.cos(i.angle),u=i.vx*c+i.vz*h,d=Math.sign(a)*u<-.6?28:a<0?o?4.7:10:o?19.7:15.4;u=xe(u+a*d*t,o?-2.7:-8.4,o?31:27);let f=i.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;u*=Math.exp(-t*f);let m=(i.vx*h-i.vz*c)*Math.exp(-t*(r?2.15:8.1));i.vx=u*c+m*h,i.vz=u*h-m*c;let y=xe(1.9-Math.abs(u)/24,.75,1.65),p=i.steer*t*y*Math.min(1,Math.abs(u)/2.1)*Math.sign(u),g=i.angle+p*(o?1.26:r?1.58:1);yi(i.x,i.z,g,n,i.kind)&&!Ll(i,i.x,i.z,g,s)&&(i.angle=g);let M=Math.max(1,Math.ceil(Math.hypot(i.vx,i.vz)*t/.34)),A=t/M;for(let b=0;b<M;b++){let C=i.x+i.vx*A,v=i.z+i.vz*A,x=Ll(i,C,v,i.angle,s);if(x){let{other:_,nx:w,nz:R,mass:L,otherMass:U}=x,V=i.vx*w+i.vz*R,P=V-(_.vx*w+_.vz*R);if(P<0&&V<0){let G=-P*1.22/(1/L+1/U);i.vx+=w*G/L,i.vz+=R*G/L,_.vx-=w*G/U,_.vz-=R*G/U,uh(i,-P),uh(_,-P*.9);break}let W=Math.hypot(i.x-_.x,i.z-_.z);if(Math.hypot(C-_.x,v-_.z)<=W)break}if(yi(C,v,i.angle,n,i.kind))i.x=C,i.z=v;else{let _=yi(C,i.z,i.angle,n,i.kind)&&!Ll(i,C,i.z,i.angle,s),w=yi(i.x,v,i.angle,n,i.kind)&&!Ll(i,i.x,v,i.angle,s),R=Math.hypot(_?0:i.vx,w?0:i.vz);_!==w?(_&&(i.x=C),w&&(i.z=v),i.vx*=_?.84:-.22,i.vz*=w?.84:-.22):(i.vx*=-.21,i.vz*=-.21),uh(i,R||Math.hypot(i.vx,i.vz));break}}i.speed=i.vx*Math.sin(i.angle)+i.vz*Math.cos(i.angle)}function ke(i,t){let e=0;return Zn.some(n=>Math.abs(i-n)<=13.55)&&Zn.some(n=>Math.abs(t-n)<=13.55)&&(e=.16),Math.abs(i-38)<6.05&&Math.abs(t+38)<5.04&&(e=.228),Math.abs(i-2)<9.5&&Math.abs(t-38)<11&&(e=.191),i>-10.91&&i<-3.49&&Math.abs(t-38)<9.77&&(e=.234),e}function Js(i,t,e,n,s,r,o=.34){if(!In(t,e,o,n))return!1;for(let a of s)if(!(Ct(a,{x:t,z:e})>3.4||!Mo(a,t,e,o))&&(!Mo(a,i.x,i.z,o)||Ct(a,{x:t,z:e})<=Ct(a,i)))return!1;for(let a of r){if(a===i||a.health<=0||a.seated)continue;let l=o+.28;if(Ct(a,{x:t,z:e})<l&&Ct(a,{x:t,z:e})<=Ct(a,i))return!1}return!0}function fh(i,t,e,n,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(t,e)/.14)),l=i.x,c=i.z,h=t/a,u=e/a;for(let d=0;d<a;d++){let f=i.x+h,m=i.z+u;if(Js(i,f,m,n,s,r,o)){i.x=f,i.z=m;continue}h&&Js(i,f,i.z,n,s,r,o)&&(i.x=f),u&&Js(i,i.x,m,n,s,r,o)&&(i.z=m)}return Math.hypot(i.x-l,i.z-c)}function Bd(i,t,e){if(!t)return Mo(i,e.x,e.z,.28);let n=Math.max(1,Math.ceil(Ct(t,i)/.26));for(let s=0;s<=n;s++){let r=s/n,o=t.x+(i.x-t.x)*r,a=t.z+(i.z-t.z)*r,l={x:o,z:a,angle:i.angle,kind:i.kind};if(Mo(l,e.x,e.z,.28))return!0}return!1}function zd(i,t,e){let n=t.x-i.x,s=t.z-i.z,r=n*n+s*s;if(r<.001)return!1;let o=((e.x-i.x)*n+(e.z-i.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(e.x-i.x-n*o,e.z-i.z-s*o)<1.2}var S_=new On,Hd=new Ii(1,10,7),b_=new Zi(1,1,1,12),ph=new Map,T_=new xn({vertexColors:!0,roughness:.82}),kd=new xn({vertexColors:!0,roughness:.36,metalness:.18});function Oi(i,t,e=T_){if(!t.length)return;let n=t.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,l=new Float32Array(a*3),c=r.material.color;for(let h=0;h<l.length;h+=3)l[h]=c.r,l[h+1]=c.g,l[h+2]=c.b;return o.setAttribute("color",new pn(l,3)),o});i.remove(...t);let s=new be(Fd(n),e);s.receiveShadow=!0,i.add(s);for(let r of n)r.dispose()}var as=i=>i.children.filter(t=>t instanceof be);function we(i,t,e,n,s,r,o,a,l,c=!1){let h=e+":"+c;ph.has(h)||ph.set(h,new xn({color:e,roughness:c?.33:.87,metalness:c?.2:0}));let u=new be({box:S_,sphere:Hd,cylinder:b_}[t],ph.get(h));return u.scale.set(o,a,l),u.position.set(n,s,r),u.castShadow=!0,u.receiveShadow=!0,i.add(u),u}var w_=new Yi(1,16),A_=new En({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function Wd(i,t,e){let n=new be(w_,A_);return n.rotation.x=-Math.PI/2,n.position.y=.025,n.scale.set(t,e,1),i.add(n),n}function $s(i,t,e,n,s=!1){let r=new Ee,o=Wd(r,.41,.38),a=new Ee;r.add(a);let l=(y,p,g,M,A,b,C,v)=>we(a,y,p,g,M,A,b,C,v);l("box",e,0,.94,0,.45,.26,.28),l("box",t,0,1.24,0,.52,.48,.32),l("box",s?15392146:t,0,1.34,.169,.19,.1,.025),l("cylinder",n,0,1.5,0,.09,.13,.09),l("sphere",n,0,1.67,.015,.168,.197,.157),l("sphere",2366233,0,1.77,-.018,.169,.112,.151),s&&(l("sphere",1522486,0,1.79,.012,.181,.132,.164),l("box",1522486,0,1.77,.146,.25,.033,.19));let c=[],h=[],u=[],d=[];for(let y of[-1,1]){let p=new Ee;p.position.set(y*.31,1.42,0),a.add(p),we(p,"box",t,0,-.12,0,.17,.24,.18);let g=new Ee;g.position.y=-.23,p.add(g),we(g,"box",n,0,-.101,0,.14,.205,.13),we(g,"sphere",n,0,-.227,.012,.082,.084,.077),u.push(g),c.push(p);let M=new Ee;M.position.set(y*.128,.94,0),a.add(M),we(M,"box",e,0,-.205,0,.211,.41,.226);let A=new Ee;A.position.y=-.412,M.add(A),we(A,"box",e,0,-.18,0,.205,.36,.218),we(A,"box",s?15326152:2235938,0,-.388,.055,.208,.15,.32),d.push(A),h.push(M)}let f=new Ee;f.position.set(0,-.227,.012),we(f,"box",2635321,0,.012,-.002,.066,.078,.12,!0),we(f,"box",2635321,0,-.105,.054,.074,.25,.079,!0),we(f,"box",10263691,0,-.189,.095,.031,.028,.018);let m=new Ge;m.position.set(0,-.235,.053),f.add(m),u[0].add(f);for(let y of[a,...c,...u,...h,...d,f])Oi(y,as(y));return f.visible=!1,i.add(r),{root:r,body:a,arms:c,legs:h,forearms:u,shins:d,pistol:f,muzzle:m,shadow:o,stride:0}}function ls(i,t,e,n,s,r=0,o=0,a=!1){i.stride+=t*(4.6+e*1.65);let l=Math.sin(i.stride)*Math.min(.78,e*.15);i.body.position.set(0,Math.abs(l)*.072,0),i.body.rotation.set(0,0,0),i.legs[0].rotation.set(l,0,0),i.legs[1].rotation.set(-l,0,0),i.shins[0].rotation.set(Math.max(0,l)*.51,0,0),i.shins[1].rotation.set(Math.max(0,-l)*.51,0,0);for(let c of i.forearms)c.rotation.set(0,0,0);if(i.arms[0].rotation.set(n?-Math.PI/2+o:-l*.76,0,0),i.arms[1].rotation.set(n?-1.16:l*.76,0,0),i.arms[0].rotation.z=a?-.25:0,i.arms[1].rotation.z=a?.25:0,a&&(i.arms[0].rotation.x=i.arms[1].rotation.x=-2.55),r>0){let c=Math.sin(r*Math.PI);i.arms[1].rotation.x=-.64,i.arms[0].rotation.x=-.5-c*1.11,i.forearms[0].rotation.x=-.62*(1-c),i.body.rotation.y=-c*.37}else i.body.rotation.y=0;i.pistol.visible=s}var Gd=new O(0,-1,0),mh=new O,os=new O,gh=new O,xh=new O,Dl=new O,Xd=new Fn;function Vd(i,t,e,n,s,r){os.subVectors(e,i.position);let o=Math.min(n+s-.001,Math.max(.015,os.length()));os.normalize();let a=(n*n-s*s+o*o)/(2*o);gh.set(r[0],r[1],r[2]).addScaledVector(os,-gh.dot(os)).normalize(),mh.copy(i.position).addScaledVector(os,a).addScaledVector(gh,Math.sqrt(Math.max(0,n*n-a*a))),Dl.subVectors(mh,i.position).normalize(),i.quaternion.setFromUnitVectors(Gd,Dl),Dl.copy(i.position).addScaledVector(os,o).sub(mh).normalize(),t.quaternion.setFromUnitVectors(Gd,Dl.applyQuaternion(Xd.copy(i.quaternion).invert()))}function _h(i,t){t.root.updateMatrixWorld(!0),i.root.position.copy(t.body.localToWorld(xh.set(0,.1,-.31))),i.root.quaternion.copy(t.body.getWorldQuaternion(Xd)),i.shadow.visible=!1,i.pistol.visible=!1;let e=.63;i.body.rotation.set(e,0,0),i.body.position.set(0,.94*(1-Math.cos(e)),-.94*Math.sin(e)),i.root.updateMatrixWorld(!0);for(let n=0;n<2;n++){let s=n===0?-1:1,r=i.body.worldToLocal(t.handlebar.localToWorld(xh.set(s*.342,.44,-.09)));Vd(i.arms[n],i.forearms[n],r,.23,.227,[s*.57,-1,.16]);let o=i.body.worldToLocal(t.body.localToWorld(xh.set(s*.245,.39,-.22)));Vd(i.legs[n],i.shins[n],o,.412,.388,[s*.65,0,1])}}function So(i,t,e=!1){let n=new Ee;Wd(n,1.14,2.21);let s=new Ee;n.add(s);let r=(p,g,M,A,b,C,v,x,_=!1)=>we(s,p,g,M,A,b,C,v,x,_);r("box",2435629,0,.44,0,1.86,.4,4.14),r("box",t,0,.72,0,1.94,.43,4.24,!0);let o=r("box",t,0,.94,1.23,1.9,.15,1.55,!0);r("box",t,0,.93,-1.51,1.89,.14,1.1,!0);let a=new ze,l=[-.87,.92,-1.14,.87,.92,-1.14,.87,.92,.66,-.87,.92,.66,-.71,1.49,-.78,.71,1.49,-.78,.71,1.49,.16,-.71,1.49,.16];a.setAttribute("position",new le(l,3)),a.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),a.computeVertexNormals();let c=new be(a,new xn({color:3561828,roughness:.24,metalness:.42,flatShading:!0,side:_n}));c.castShadow=!0,s.add(c);let h=new Ee;h.position.set(-.974,0,.67),we(h,"box",t,0,.75,-.57,.036,.38,1.18,!0),we(h,"box",13418919,-.024,.881,-.89,.04,.04,.15,!0),Oi(h,as(h),kd),s.add(h),r("box",t,0,1.495,-.31,1.43,.075,.96,!0),r("box",3355961,0,.69,2.126,.86,.13,.05),r("box",13156268,0,.54,2.13,1.92,.12,.045,!0),r("box",13156268,0,.53,-2.13,1.93,.12,.05,!0),r("box",16707771,0,.72,-2.132,.4,.145,.03);let u=[];for(let p of[-1,1]){r("box",16769956,p*.68,.77,2.132,.43,.17,.055,!0),r("box",11021858,p*.65,.77,-2.132,.48,.17,.055,!0),r("box",2898236,p*.953,1.02,.3,.22,.11,.21),r("box",13089700,p*.98,.89,-.5,.035,.04,.26,!0);for(let g of[-1.31,1.33]){let M=new Ee;M.position.set(p*.945,.39,g),n.add(M),we(M,"cylinder",2434600,0,0,0,.408,.26,.408).rotation.z=Math.PI/2,we(M,"cylinder",11052964,p*.138,0,0,.217,.02,.217,!0).rotation.z=Math.PI/2,u.push(M)}}let d=[];e&&(d.push(r("box",15550262,-.33,1.62,-.32,.55,.14,.25)),d.push(r("box",5487086,.33,1.62,-.32,.55,.14,.25)));let f=as(s).filter(p=>p!==c&&p!==o&&!d.includes(p));Oi(s,f.filter(p=>p.material.metalness===0)),Oi(s,f.filter(p=>p.material.metalness>0),kd);for(let p of u)Oi(p,as(p));s.traverse(p=>{p instanceof be&&(p.castShadow=!1)});let m=new Ee,y=new En({color:6643544,transparent:!0,opacity:.29,depthWrite:!1});for(let p=0;p<3;p++){let g=new be(Hd,y);m.add(g)}return m.position.set(0,1.04,1.25),m.visible=!1,n.add(m),i.add(n),{root:n,body:s,wheels:u,lamps:d,hood:o,smoke:m,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,smokeTime:0,kind:"car",rider:null,door:h,doorTime:0,wheelSpin:0,handlebar:null}}function vh(i,t){let e=So(i,t),{body:n,hood:s,wheels:r,smoke:o}=e;n.clear(),e.root.remove(...r),r.length=0,e.kind="bike",e.root.children[0].scale.set(.42,1.07,1);let a=(c,h,u,d,f,m,y,p)=>we(n,c,h,u,d,f,m,y,p);a("box",3882300,0,.48,-.04,.32,.38,.7),a("sphere",t,0,.89,.34,.24,.23,.46),a("box",2369834,0,.85,-.36,.36,.13,.59),a("box",t,0,.65,-.7,.32,.17,.58),a("box",13940106,0,.8,.88,.25,.21,.11),a("box",10433836,0,.7,-.99,.2,.11,.11);let l=new Ee;l.position.set(0,.76,.38),we(l,"box",3949122,0,.44,-.09,.684,.057,.059),we(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,Oi(l,as(l)),e.handlebar=l,n.add(l),a("box",5461330,0,.39,-.22,.52,.07,.11),a("box",11578016,.232,.36,-.54,.12,.12,.72),s.visible=!1,n.add(s),o.position.set(0,.55,.32);for(let c of[-.73,.78]){let h=new Ee;h.position.set(0,.32,c),we(h,"cylinder",2434601,0,0,0,.33,.12,.33).rotation.z=Math.PI/2,we(h,"cylinder",8750213,0,0,0,.205,.14,.205).rotation.z=Math.PI/2,Oi(h,as(h)),r.push(h),e.root.add(h),a("box",5988704,0,.55,c,.09,.49,.085).rotation.x=c>0?-.21:.46}return Oi(n,as(n).filter(c=>c!==s)),e}function cs(i,t,e=0){let n=Math.sin(i.angle),s=Math.cos(i.angle),r=i.kind==="bike",o=0,a=0,l=0,c=0,h=i.wheels.map(p=>{let{x:g,z:M}=p.position,A=ke(i.x+g*s+M*n,i.z-g*n+M*s);return M>0?o+=A:a+=A,g<0?l+=A:c+=A,A}),u=(o+a)/i.wheels.length;i.root.position.set(i.x,u,i.z),i.root.rotation.y=i.angle,i.body.rotation.x=-Math.atan2((o-a)/(r?1:2),r?1.51:2.64);let d=r?i.integrity<=0?1.25:-e*Math.min(.53,Math.abs(i.speed)*.039):e*Math.min(.09,Math.abs(i.speed)*.004),f=r?0:Math.atan2((c-l)*.5,1.89);i.body.rotation.z+=(d+f-i.body.rotation.z)*(t>0?Math.min(1,t*(r?7:13)):1),i.doorTime=Math.max(0,i.doorTime-t),i.door.rotation.y=Math.sin(Math.min(1,i.doorTime/.65)*Math.PI)*1.06;let m=r?.33:.408,y=r?i.body.rotation.z:0;i.handlebar&&(i.handlebar.rotation.y=e*.22),i.wheelSpin=(i.wheelSpin+i.speed*t/m)%(Math.PI*2),i.wheels.forEach((p,g)=>{p.position.y=h[g]-u+m*Math.cos(y)+(r?Math.abs(Math.sin(y))*.06:0),p.rotation.set(i.wheelSpin,p.position.z>0?e*(r?.22:.23):0,y,"ZYX")}),i.hood.rotation.x=(100-i.integrity)*.0031,i.hood.rotation.z=(100-i.integrity)*.0013,i.smoke.visible=i.integrity<43,i.smoke.visible&&(i.smokeTime+=t,i.smoke.children.forEach((p,g)=>{let M=(i.smokeTime*(i.integrity<=0?.72:1.04)+g/3)%1;p.position.set(Math.sin(g*3.9+M*3)*M*.4,M*1.85,-M*.58),p.scale.setScalar(.12+M*.32)}))}var yh=473021;function Pe(){return yh=Math.imul(1664525,yh)+1013904223>>>0,yh/4294967296}var Bi=i=>i[Math.floor(Pe()*i.length)],E_=11116691,hs=14927521,R_=3562851,Nl=3751484;function qd(i){i.background=new ne(15840393),i.fog=new Cr(15840393,.008),i.add(new eo(16770501,5598321,2.15));let t=new so(16764565,3.2);t.position.set(-45,48,-32),t.castShadow=!0,Object.assign(t.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),t.shadow.bias=-35e-5,t.shadow.normalBias=.12,t.shadow.mapSize.set(2048,2048),t.shadow.autoUpdate=!1,i.add(t);let e=new be(new Ii(330,32,16),new Bn({side:on,depthWrite:!1,uniforms:{sun:{value:new O(-.56,.21,.8).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
      varying vec3 vDir;
      uniform vec3 sun;
      void main(){
        vec3 dir=normalize(vDir);
        vec3 dusk=mix(vec3(.91,.54,.34),vec3(.42,.55,.63),smoothstep(-.03,.77,dir.y));
        float glow=max(dot(dir,sun),0.);
        dusk+=vec3(.25,.17,.07)*pow(glow,8.);
        dusk=mix(dusk,vec3(1.,.92,.65),smoothstep(.9990,.99955,glow));
        gl_FragColor=vec4(dusk,1.);
        #include <colorspace_fragment>
      }`}));i.add(e);let n=[],s={},r={box:new On,foliage:new Jr(1,1),pole:new Zi(.8,1,1,8),hill:new Ii(1,14,9)},o=new Ge;function a(v,x,_,w,R,L,U,V,P,W=0){let G=v+":"+!!P,X=s[G]??={shape:v,shadow:!!P,items:[]};o.position.set(x,_,w),o.scale.set(R,L,U),o.rotation.y=W,o.updateMatrix(),X.items.push({matrix:o.matrix.clone(),color:new ne(V)})}function l(v,x,_,w,R,L,U,V=!1,P=0){a("box",v,x,_,w,R,L,U,V,P)}function c(v,x,_,w,R,L,U){l(v,x,_,w,R,L,U,!0),n.push({x:v,z:_,w,d:L,h:x+R/2})}function h(v,x,_=!1){let w=3.25+Pe()*2.65;if(a("pole",v,w*.48,x,_?.16:.22,w,.22,8020048,!0),_)for(let R=0;R<7;R++){let L=R*Math.PI*2/7;a("foliage",v+Math.sin(L)*.86,w,x+Math.cos(L)*.86,.42,.24,1.58,Bi([3432266,4879699,7111766]),!0,L)}else for(let R=0;R<4;R++)a("foliage",v+(Pe()-.5)*2,w+(Pe()-.3)*1.6,x+(Pe()-.5)*2,1+Pe()*.7,1.15,1.35,Bi([4614992,6718801,8889436]),!0,Pe()*6);n.push({x:v,z:x,w:.45,d:.45,h:.9*w})}function u(v,x,_,w,R,L=1784375,U=4.2,V=.65){let P=document.createElement("canvas");P.width=512,P.height=115;let W=P.getContext("2d");W.fillStyle="#e9d4a0",W.fillRect(0,0,512,115),W.strokeStyle="#645a47",W.lineWidth=6,W.strokeRect(7,7,498,101),W.font="900 50px system-ui",W.textAlign="center",W.textBaseline="middle",W.fillStyle="#"+L.toString(16).padStart(6,"0"),W.fillText(v,256,57,470);let G=new Or(P);G.colorSpace=dn;let X=new be(new $i(U,V),new En({map:G}));X.position.set(x,_,w),X.rotation.y=R,i.add(X)}function d(v,x,_,w,R,L,U,V,P){c(v,R/2+.15,x,_,R,w,L),l(v,R+.18,x,_+.32,.28,w+.32,hs,!0),l(v,R+.34,x,_-.2,.14,w-.2,7232597,!0),Pe()>.35&&l(v+_*.22,R+.72,x-w*.27,1.3,.68,1.2,6186335,!0);let W=[[0,1,_,w],[Math.PI,1,_,w],[Math.PI/2,0,w,_],[-Math.PI/2,0,w,_]];for(let[G,X,at,J]of W){let K=v+Math.sin(G)*(J/2+.047),rt=x+Math.cos(G)*(J/2+.047),Et=lt=>[K+Math.cos(G)*lt,rt-Math.sin(G)*lt],Gt=Math.floor(at/2.35),[it,Mt]=Et(-at/2+.18),[At,Bt]=Et(at/2-.18);l(it,R/2+.15,Mt,.27,R,.095,hs,!1,G),l(At,R/2+.15,Bt,.27,R,.095,hs,!1,G),l(K,.36,rt,at,.32,.11,8482920,!1,G);for(let lt=2.94;lt<R-.4;lt+=2.72)lt<3&&(P&&G===Math.PI/2||U&&G===0)||l(K,lt,rt,at,.16,.12,hs,!1,G);for(let lt=0;lt<Math.floor((R-.6)/2.72);lt++){let Ut=1.76+lt*2.7;for(let de=0;de<Gt;de++){let Q=(de-(Gt-1)/2)*2.28,Qt=P&&G===Math.PI/2||X&&G===0;if(lt===0&&(Qt&&Math.abs(Q)<1.55||U&&G===-Math.PI/2&&Math.abs(Q+at*.25)<1.55))continue;let[se,Wt]=Et(Q);l(se,Ut,Wt,1.48,1.27,.11,hs,!1,G),l(se,Ut,Wt,1.25,1.04,.15,U&&lt===0?5599344:R_,!1,G),l(se,Ut,Wt,.06,1.04,.18,hs,!1,G),l(se,Ut+.16,Wt,1.25,.04,.18,hs,!1,G),l(se,Ut-.56,Wt,1.59,.1,.24,E_,!1,G),lt>0&&Pe()>.88&&l(se,Ut-.36,Wt,.55,.4,.35,11317155,!1,G)}}if(P&&G===Math.PI/2)l(K,1.33,rt,1.57,2.34,.26,1587250,!1,G),l(K+.14,1.52,rt,1.28,1.51,.11,4682088,!1,G),l(K+.19,1.22,rt+.48,.075,.2,.08,15789459),l(K+.64,2.79,rt,4.9,.22,.78,4413767,!0,G),u("LOJA DE ARMAS",K+.13,3.1,rt,G,3233089,4.2,.47);else if(X&&G===0){if(l(K,1.13,rt,.94,1.94,.24,Nl,!1,G),U){l(K,2.64,rt+.51,_-.48,.17,1.1,7158060,!0);for(let lt=.4;lt<_-.32;lt+=.49)l(K-_/2+lt,2.53,rt+1.06,.24,.17,.07,15385990,!1);V&&u(V,K,3.08,rt+.09,G,1784375,4.2,.49)}}else if(U&&G===-Math.PI/2){let[lt,Ut]=Et(-at*.25);l(lt,1.23,Ut,1.22,2.13,.22,6449507,!1,G);for(let de=.36;de<2.29;de+=.14)l(lt,de,Ut,1.21,.027,.24,9081222,!1,G)}}}let f=new Ee;i.add(f);let m=[];function y(v,x,_,w,R,L=.228){let U=new Ee;U.position.set(v,L,x),U.rotation.y=_;let V=we(U,"box",R,w*.5,1.035,0,w-.035,2.05,.068);V.castShadow=!1,we(U,"box",11705196,w-.16,1.05,.057,.12,.075,.035).castShadow=!1,we(U,"box",11705196,w-.16,1.05,-.057,.12,.075,.035).castShadow=!1,i.add(U),m.push({door:U,angle:_,x:v+Math.cos(_)*w*.5,z:x-Math.sin(_)*w*.5});for(let P of[0,w])l(v+Math.cos(_)*P,L+1.08,x-Math.sin(_)*P,.105,2.16,.18,5851194,!1,_);l(v+Math.cos(_)*w*.5,L+2.11,x-Math.sin(_)*w*.5,w+.12,.105,.18,5851194,!1,_)}function p(){let{x:v,z:x}=nn,_=14073500,w=2.65;l(v,.17,x,12.1,.09,10.1,10319970),l(v-2.8,.218,x,5.3,.017,9.45,11705977),l(v+2.9,.218,x+2.2,5.45,.017,4.75,12625282);let R=(U,V,P,W)=>c(v+U,.2+w/2,x+V,P,w,W,_);R(-6,0,.22,10.22),R(6,0,.22,10.22),R(0,-5,12.1,.23),R(-3.195,5,5.61,.23),R(3.415,5,5.17,.23),R(.45,-3.92,.15,2.1),R(.45,-.69,.15,1.9),R(3.5,.05,4.8,.15),R(-4.3,-.6,3.45,.15),R(-2.63,-3.92,.15,2.05),l(v+.22,2.64,x+5,1.24,.43,.25,_),l(v+.45,2.59,x-2.23,.16,.52,1.27,_),y(v-.39,x+5,0,1.22,4351321),y(v+.45,x-1.64,Math.PI/2,1.22,8413516),y(v-2.63,x-1.69,Math.PI/2,1.17,9007194),l(v-2.63,2.59,x-2.27,.16,.52,1.2,_),l(v+.28,.11,x+5.9,2.55,.19,1.55,10193781);let L=(U,V,P,W,G,X)=>c(v+U,.224+W/2,x+V,P,W,G,X);L(4,-3.63,1.46,.64,2,6901828),l(v+4,.72,x-3.57,1.39,.19,1.95,5797999),l(v+4,.84,x-4.23,1.1,.13,.41,14931641),L(5.3,-1.2,.96,1.84,1.12,7689789),L(-4.84,-3.75,1.4,.81,.62,14207675),L(-4.47,-2.72,.43,.43,.64,14342095),L(-5.27,-1.7,.66,.79,.5,14342095),L(-5.18,1.3,.78,.88,2.45,7761240),L(-4.95,3.77,1.04,1.76,.75,13420459),l(v-5.18,1.12,x+1.29,.8,.12,2.45,14540226),l(v-5.2,1.19,x+1.44,.52,.025,.6,8097936),L(4.76,2.82,.91,.53,2.55,5797740),l(v+5.16,.88,x+2.82,.2,.67,2.56,4416859),L(2.78,2.8,1.15,.4,.68,8871231),L(-.36,2.98,1.23,.75,1.14,9069630),l(v+2.76,.245,x+2.77,2.12,.02,2,11109736),l(v+5.88,1.53,x+2.85,.11,1.16,2.13,11506290),l(v+6.13,1.53,x+2.85,.1,1.02,1.99,5402993),l(v+6.2,1.53,x+2.85,.08,1.04,.075,14729630),l(v+6.2,1.54,x+2.85,.08,.075,2.07,14729630),l(v+6.18,1.01,x+2.85,.23,.1,2.21,11901822),l(v-3.18,1.57,x+5.16,1.78,1.02,.14,6388343),l(v-3.18,1.55,x+5.25,.08,1.06,.1,14729630),l(v-3.18,1.59,x+5.25,1.83,.07,.1,14729630),l(v-3.18,1.03,x+5.24,1.95,.11,.24,11966585);for(let U of[-3.6,2.62])l(v+U,2.752,x+1.6,.35,.11,.35,16309677);l(v-3.73,.27,x+5.63,2.18,.09,1.23,8622181),l(v+3.76,.255,x+5.9,2.15,.09,1.58,8292960),we(f,"box",13548189,v,2.94,x,12.34,.16,10.33).castShadow=!1;for(let U of[-1,1]){let V=we(f,"box",9589308,v+U*3.08,3.52,x,6.56,.17,10.78);V.rotation.z=-U*.205,V.castShadow=!1;for(let G=-2;G<=2;G++){let X=we(f,"box",10641478,v+U*3.08,3.62,x+G*1.84,6.54,.064,.07);X.rotation.z=V.rotation.z,X.castShadow=!1}let P=new zs;P.moveTo(-6.1,2.98),P.lineTo(6.1,2.98),P.lineTo(0,4.11),P.closePath();let W=new be(new Qr(P),new xn({color:12626054,side:_n}));W.position.set(v,0,x+U*5.04),f.add(W)}we(f,"box",8866099,v,4.23,x,.28,.121,10.84).castShadow=!1,u("CASA 38",v+2.65,2.27,x+5.125,0,4868146,1.65,.34),h(v-9.5,x-5,!0),l(v+8.8,.19,x-4,4.2,.08,7.6,7570519)}function g(){let v=$e.z;l(2,.169,v,19,.045,22,6908773);let x=8886169;l(-7.4,.195,v,6.9,.078,19.5,12038048),c(-10.78,1.67,v,.3,2.96,19.8,x);for(let _ of[-9.77,9.77])c(-7.1,1.67,v+_,7.6,2.96,.29,x);for(let _ of[-5.51,5.51])c(-3.62,1.67,v+_,.28,2.96,8.59,x);l(-3.62,2.73,v,.29,.71,2.46,x),l(-7.2,3.24,v,7.64,.24,20.08,5406866),l(-7.2,3.4,v,7.58,.12,20.03,4548982),y(-3.62,v+1.22,Math.PI/2,1.2,5338246,.22),y(-3.62,v-1.21,-Math.PI/2,1.22,5338246,.22),u("RECEP\xC7\xC3O",-3.44,2.63,v,Math.PI/2,2311763,2.16,.35);for(let _ of[-5.5,5.5])c(-9.36,.74,v+_,1.35,1.04,2.1,6646115),l(-9.3,1.28,v+_,1.47,.13,2.2,11380883),l(-9.42,1.51,v+_,.44,.44,.62,2702146),l(-10.6,1.74,v+_,.07,1.16,2.8,12698800),l(-7.6,3.05,v+_,1.18,.08,.26,16771254);c(-6.82,.7,v-2.1,2.86,1.01,.62,7046533),l(-6.82,1.24,v-2.1,2.99,.12,.77,11446944),l(-2.5,3.33,v,7.1,.25,19.5,5401719,!0),c(-1.5,1.42,v-9.72,5.4,2.54,.35,8229008),c(-1.5,1.42,v+9.72,5.4,2.54,.35,8229008);for(let _ of[-9.5,9.5])c(1.04,1.65,v+_,.28,3,.31,8689042);l(1.1,2.88,v,.25,.42,19.54,5994626),u("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,v,Math.PI/2,2704468,7.2,.63);for(let _ of[-8.2,-3.95,.3,4.55,8.8])l(8.15,.208,v+_,5.3,.016,.1,14537646);for(let _ of[-6.1,-1.85,2.4])l(5.5,.208,v+_,.1,.016,3.25,14537646);l(-3.75,1.67,v-6.8,.16,1.18,2.05,3626589),l(-3.75,1.67,v+6.8,.16,1.18,2.05,3626589),l(-3.52,.21,v+3.1,.64,.08,2.45,6446161)}l(0,-.3,0,720,.1,720,8880242),l(0,-.18,0,132,.34,132,4605770);for(let v=0;v<1250;v++){let x=Pe()*130-65,_=Pe()*130-65;l(x,.001,_,.04+Pe()*.3,.007,.04+Pe()*.3,Bi([5460823,4934733,4473414,5855058]),!1,Pe()*6)}for(let v of ii)for(let x of Zn){for(let _=-10;_<=10;_+=4)l(v,.014,x+_,.12,.015,1.82,14132838);for(let _ of[-14.4,14.4])for(let w=-2;w<=2;w+=.85)l(v+w,.015,x+_,.45,.016,1.44,13156273)}for(let v of ii)for(let x of Zn){for(let _=-10;_<=10;_+=4)l(x+_,.014,v,1.82,.015,.12,14132838);for(let _ of[-14.4,14.4])for(let w=-2;w<=2;w+=.85)l(x+_,.015,v+w,1.44,.016,.45,13156273)}for(let v of Zn)for(let x of Zn){l(v,.067,x,27.1,.16,27.1,13022103),l(v,.125,x,26.7,.07,26.7,10721158);for(let _ of[-12.25,12.25])for(let w=-12;w<=12;w+=2.1)l(v+_,.164,x+w,2.32,.008,.023,12956566),l(v+w,.164,x+_,.023,.008,2.32,12956566);if(v===$e.x-2&&x===$e.z)g();else if(v===nn.x&&x===nn.z)p();else if(v===0&&x===-38){for(let _ of[-6,6]){l(v+_,.185,x,8.2,.08,19,7438938);for(let w of[-7,0,7])h(v+_,x+w,!0)}for(let _=-8;_<=8;_+=4)l(v,.177,x+_,3.1,.033,3.2,13218964);u("PRA\xC7A DA BRASA",v,1.6,x-10,Math.PI)}else{let _=[12813160,12886903,9673079,10268832,13675911,11040357,11576459];for(let w of[-5.85,5.85])for(let R of[-5.45,5.45]){let L=Bi([3.4,5.65,6.2,8.9,9.5,11.45]),U=R>0&&(w<0||x===0),V=U?Bi(["CAF\xC9 SOL","OFICINA 19","MERCADO BRASA","ARMAZ\xC9M LUZ","BAR DO PORTO"]):null,P=v===0&&x===0&&w>0&&R<0;d(v+w,x+R,8.5+Pe(),7.6+Pe(),L,Bi(_),U,V,P)}h(v+12.55,x-12.05,Pe()>.37),h(v-10.5,x+12.15,Pe()>.42)}for(let _ of[-1,1]){let w=v+_*12.85,R=x-_*9.85;a("pole",w,2.39,R,.083,4.5,.083,Nl,!0),n.push({x:w,z:R,w:.17,d:.17,h:4.65}),l(w+_*.35,4.52,R,.79,.075,.075,Nl,!0),l(w+_*.73,4.48,R,.32,.12,.19,14924165,!0),l(v+_*9,.56,x-_*12.5,1.52,.075,.46,8476742,!0),l(v+_*9,.78,x-_*12.66,1.52,.23,.075,9791828,!0),n.push({x:v+_*9,z:x-_*12.5,w:1.52,d:.5,h:.89});for(let U of[-.54,.54])l(v+_*9+U,.35,x-_*12.5,.06,.37,.37,Nl,!0);let L=v+_*10.1;a("pole",L,.52,x-_*12.55,.24,.69,.24,3493961,!0),a("pole",L,.88,x-_*12.55,.267,.1,.267,2506039,!0),n.push({x:L,z:x-_*12.55,w:.5,d:.5,h:.94}),l(L+.72,.38,x-_*12.58,.09,.39,.09,7104343,!0),l(L+.72,.58,x-_*12.58,.13,.08,.13,14197880,!0)}}for(let v=0;v<52;v++){let x=v/52*Math.PI*2,_=118+Pe()*58,w=Bi([9670532,10525321,10001560,9212560]),R=Math.sin(x)*_,L=Math.cos(x)*_;a("hill",R,-1,L,12+Pe()*33,3+Pe()*22,10+Pe()*20,w,!1,x);let U=4+Pe()*16;l(R*.76,U*.5-1,L*.76,3+Pe()*9,U,4+Pe()*8,Bi([10194306,8949389,10128258]),!1)}let M=new xn({roughness:.92});for(let{shape:v,shadow:x,items:_}of Object.values(s)){let w=new Ur(r[v],M,_.length);_.forEach(({matrix:R,color:L},U)=>{w.setMatrixAt(U,R),w.setColorAt(U,L)}),w.castShadow=x,w.receiveShadow=!0,i.add(w)}let A=new Ee,b=new be(new Kr(1.6,1.85,40),new En({color:15794054,side:_n,transparent:!0,opacity:.85,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.y=.26,A.add(b);let C=new be(new $r(.43),new En({color:15794054}));return C.position.y=2.8,A.add(C),i.add(A),{solid:n,marker:A,beacon:C,sun:t,sky:e,houseRoof:f,bed:Zs,doors:m}}var Ks=2.05,Ul=7.15;function C_(i){let t=[];return i.forEach((e,n)=>{let s=i[(n+i.length-1)%i.length],r=i[(n+1)%i.length],o=Math.sign(e[0]-s[0]),a=Math.sign(e[1]-s[1]),l=Math.sign(r[0]-e[0]),c=Math.sign(r[1]-e[1]),h={x:e[0]-a*Ks-o*Ul,z:e[1]+o*Ks-a*Ul},u={x:e[0]-c*Ks+l*Ul,z:e[1]+l*Ks+c*Ul},d=o===l&&a===c,f={x:e[0]-(d?a:a+c)*Ks,z:e[1]+(d?o:o+l)*Ks},m={x:e[0],z:e[1],id:e.join(",")};for(let y=0;y<=6;y++){let p=y/6,g=1-p;t.push({x:g*g*h.x+2*g*p*f.x+p*p*u.x,z:g*g*h.z+2*g*p*f.z+p*p*u.z,junction:m,curve:!d,angle:Math.atan2(o,a)})}}),t}var us=(i,t,e,n)=>[[i,t],[i,n],[e,n],[e,t]],I_=[us(-57,-57,57,57),us(-57,-19,19,57).reverse(),us(-19,-57,57,19),us(-19,-19,19,19).reverse(),us(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],us(-57,-57,57,57).reverse(),us(-19,-57,57,57).reverse()];function P_(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=t[0]===n[0]?1:0,r=1-s,o=ii.filter(a=>a>Math.min(t[s],n[s])&&a<Math.max(t[s],n[s]));return n[s]<t[s]&&o.reverse(),[t,...o.map(a=>r===0?[t[0],a]:[a,t[1]])]})}var L_=I_.map(i=>C_(P_(i))),D_=[1,3,1,1,5,5,7,10];function Mh(i,t){let e=L_[t],n=D_[t]*7%e.length,s=e[n],r=e[(n+e.length-1)%e.length],o=.49;rs(i,{x:r.x+(s.x-r.x)*o,z:r.z+(s.z-r.z)*o,angle:s.angle}),i.driver={route:e,next:n,cruise:8.7+t%4*1.02,stuck:0,routeIndex:t,pass:null},i.stolen=!1,i.abandoned=0}function Fl(i,t,e){let n=Math.atan2(t.x-i.x,t.z-i.z),s=Math.atan2(Math.sin(n-i.angle),Math.cos(n-i.angle)),r=e*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:xe(s*1.9,-1,1),throttle:xe((r-i.speed)*.47,-.6,1),brake:r<1.2||i.speed>r+1.8}}function Sh(i,t,e,n){let s=Math.sin(i.angle),r=Math.cos(i.angle),o=n;for(let a of t){if(a===i||Ct(a,i)>20)continue;let l=a.x-i.x,c=a.z-i.z,h=l*s+c*r,u=Math.abs(l*r-c*s);if(h<.2||u>2.18)continue;let d=Math.max(0,h-4.9),f=Math.max(0,a.vx*s+a.vz*r);o=Math.min(o,f+d*.87)}for(let a of e){if(a.down>0||a.health<=0||a.seated||Ct(a,i)>11)continue;let l=a.x-i.x,c=a.z-i.z,h=l*s+c*r,u=Math.abs(l*r-c*s);h>0&&u<1.35&&(o=Math.min(o,Math.max(0,h-3.3)*.94))}return o}function Yd(i,t,e,n){let s=Math.sin(i.angle),r=Math.cos(i.angle),a=[...t.filter(c=>c!==i&&Math.hypot(c.vx,c.vz)<2).map(c=>({other:c,radius:1.05})),...e.filter(c=>c.down<=0&&c.health!==0&&!c.seated).map(c=>({other:c,radius:.43}))].find(({other:c,radius:h})=>{let u=c.x-i.x,d=c.z-i.z,f=u*s+d*r;return f>2.25&&f<13.4&&Math.abs(u*r-d*s)<h+1.05});if(!a)return null;let l=(c,h)=>{let u=c.x-i.x,d=c.z-i.z,f=u*s+d*r;return f>-3&&f<23&&Math.abs(u*r-d*s-h)<2.3};for(let c of[2.72,-2.72]){if(t.some(d=>d!==i&&d!==a.other&&l(d,c))||e.some(d=>d!==a.other&&d.down<=0&&l(d,c)))continue;let h=i.x+s*8+r*c,u=i.z+r*8-s*c;if(yi(h,u,i.angle,n,i.kind)&&yi((h+i.x)*.5,(u+i.z)*.5,i.angle,n,i.kind))return{x:h,z:u}}return null}function N_(i,t,e,n){let s=Math.sin(i.angle),r=Math.cos(i.angle),o=c=>({along:(c.x-i.x)*s+(c.z-i.z)*r,across:(c.x-i.x)*r-(c.z-i.z)*s}),a=[...t.filter(c=>c!==i&&Math.hypot(c.vx,c.vz)<6),...e.filter(c=>c.health>0&&!c.seated&&!c.down)].map(c=>({actor:c,...o(c)})).filter(({along:c,across:h})=>c>3.2&&c<19&&Math.abs(h)<1.73);a.sort((c,h)=>c.along-h.along);let l=a[0];if(!l)return null;for(let c of[2.95,-2.95,3.45,-3.45]){let h=Math.max(13,l.along+7),u=[...t,...e].every(f=>{if(f===i||f===l.actor||f.seated||f.health<=0)return!0;let{along:m,across:y}=o(f);return m<-3||m>h+8||Math.abs(y-c)>2.28}),d=[.3,.58,.94].every(f=>{let m=h*f,y=c*Math.min(1,m/5.6),p=i.x+s*m+r*y,g=i.z+r*m-s*y,M=i.kind==="bike"?.24:.9,A=ke(i.x,i.z);return Math.abs(ke(p+r*M,g-s*M)-A)<.08&&Math.abs(ke(p-r*M,g+s*M)-A)<.08&&yi(p,g,i.angle,n,i.kind)});if(u&&d)return{x:i.x,z:i.z,sx:s,sz:r,offset:c,obstacle:l.actor,phase:"out",age:0,passed:0}}return null}function U_(i,t,e,n){t.age+=n;let{sx:s,sz:r,offset:o}=t,a=(i.x-t.x)*s+(i.z-t.z)*r,l=(i.x-t.x)*r-(i.z-t.z)*s,c=(t.obstacle.x-t.x)*s+(t.obstacle.z-t.z)*r;if(t.age>13||t.phase==="merge"&&Math.abs(l)<.53)return null;t.phase==="out"&&Math.abs(l-o)<.6&&(t.phase="pass"),t.phase!=="merge"&&a>c+5.3&&e.every(p=>p===i||Math.abs((p.x-t.x)*r-(p.z-t.z)*s)>2||Math.abs((p.x-i.x)*s+(p.z-i.z)*r)>5.5)&&(t.phase="merge");let h=t.phase==="merge"?0:o,u=e.some(y=>{if(y===i||y===t.obstacle)return!1;let p=(y.x-i.x)*s+(y.z-i.z)*r,g=(y.x-t.x)*r-(y.z-t.z)*s;return p>0&&p<7.1&&Math.abs(g-h)<1.84}),d=t.phase==="out"?4.4:7,f={x:t.x+s*(a+d)+r*h,z:t.z+r*(a+d)-s*h},m=Fl(i,f,u?0:t.phase==="out"?4.8:6.5);return u&&(m.throttle=0),m}function Zd(i,t,e,n,s,r){for(let[o,a]of r)(!a.driver||a.integrity<=0||Ct(a,a.driver.route[a.driver.next].junction)>11)&&r.delete(o);for(let o of i){let a=o.driver;if(!a||o.integrity<=0){o!==t.player&&Math.hypot(o.vx,o.vz)>.06?Mi(o,s,{throttle:0,steer:0,brake:!0},n,t.vehicles):o!==t.player&&(o.impact=Math.max(0,o.impact-s*21));continue}let{route:l}=a,c=l[a.next],h=Math.sin(o.angle),u=Math.cos(o.angle);for(let A=0;A<6;A++){let b=c.x-o.x,C=c.z-o.z;if(Math.hypot(b,C)>2.55&&(b*h+C*u>0||Math.hypot(b,C)>5))break;a.next=(a.next+1)%l.length,c=l[a.next]}let{junction:d}=c,f=Ct(o,d),m=r.get(d.id);!m&&f<9.7&&r.set(d.id,o);let y=c.curve&&f<12?Math.min(5.9,a.cruise):a.cruise;m&&m!==o&&f<15&&(y=Math.min(y,Math.max(0,f-7.4)*.96));let p=Sh(o,t.vehicles,e,y);!a.pass&&p<y*.78&&(!c.curve||f>11)&&(a.pass=N_(o,t.vehicles,e,n));let g=a.pass?U_(o,a.pass,t.vehicles,s):null;g||(a.pass=null);let M=g??Fl(o,c,p);!g&&p<.4&&(M.throttle=0),Mi(o,s,M,n,t.vehicles),a.stuck=o.speed<.65?a.stuck+s:0}}function Jd(i,t,e,n){return Ct(i,e)>13&&yi(i.x,i.z,i.angle,n,i.kind)&&t.every(s=>Ct(s,i)>5.2)}function $d(i,t,e,n){let s=0,r=n;for(let o=0;o<3;o++){let a=i[o],l=t[o],c=e[o],h=e[o+3];if(Math.abs(l)<1e-5){if(a<c||a>h)return 1/0;continue}let u=(c-a)/l,d=(h-a)/l;if(s=Math.max(s,Math.min(u,d)),r=Math.min(r,Math.max(u,d)),s>r)return 1/0}return s}function Qs(i,t,e,n,s=52){let r=s,o=null;for(let a of e){let l=[a.x-a.w*.5,0,a.z-a.d*.5,a.x+a.w*.5,a.h,a.z+a.d*.5];r=Math.min(r,$d(i,t,l,r))}t[1]<-1e-5&&(r=Math.min(r,-i[1]/t[1]));for(let a of n){let l=$d(i,t,a.bounds,r);l>=r||(r=l,o=a)}return{distance:r,hit:o}}function js(i,t,e){let n=t.map((o,a)=>o-i[a]),s=Math.hypot(...n);if(s<=1e-5)return!0;let r=n.map(o=>o/s);return Qs(i,r,e,[],s).distance>=s-.01}function Kd(i,t,e,n){let s=null,r=1.86;for(let o of t){if(o.down>0)continue;let a=o.x-i.x,l=o.z-i.z,c=Math.hypot(a,l),h=Math.sin(i.angle)*a+Math.cos(i.angle)*l;c>=r||h<c*.36||!js([i.x,e+1,i.z],[o.x,e+1,o.z],n)||(s=o,r=c)}return s}function Ot(i){return document.getElementById(i)}function Qd(i,t){let e=new Set,n=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Ot("stick"),l=Ot("nub"),c=Ot("look"),h=Ot("game"),u=Ot("view"),d=-1,f=-1,m=[],p=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",g=w=>{p=w,Ot("touch").hidden=w!=="touch",h.classList.toggle("touching",w==="touch")};g(p);let M=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","Escape"]);window.addEventListener("keydown",w=>{if(!(!M.has(w.code)||w.target instanceof HTMLSelectElement&&!t())){if((t()||w.code==="Escape")&&w.preventDefault(),w.code==="Escape"){w.repeat||i();return}t()&&(g("keyboard"),e.add(w.code),w.repeat||(w.code==="KeyE"&&n.add("interact"),w.code==="KeyF"&&n.add("fire"),w.code==="KeyR"&&n.add("punch"),w.code==="KeyG"&&n.add("recruit"),w.code==="KeyV"&&n.add("weapon"),w.code==="Space"&&n.add("jump")))}}),window.addEventListener("keyup",w=>e.delete(w.code));function A(){e.clear(),n.clear(),s.clear(),o.x=0,o.y=0,l.style.transform="",d=-1,f=-1,r.x=0,r.y=0,r.aim=!1,Ot("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",A),u.addEventListener("contextmenu",w=>w.preventDefault()),u.addEventListener("wheel",w=>{!t()||!w.deltaY||(w.preventDefault(),s.has("wheel")||(n.add("weapon"),s.add("wheel")),clearTimeout(b),b=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let b=0;u.addEventListener("pointerdown",w=>{t()&&w.pointerType==="touch"&&g("touch")}),window.addEventListener("mousedown",w=>{if(!(!t()||document.pointerLockElement!==u&&(!(w.target instanceof Node)||!u.contains(w.target)))){if(w.button===0&&document.pointerLockElement!==u&&u.requestPointerLock){let R=u.requestPointerLock();R&&R.catch(()=>{})}g("keyboard"),w.button===0&&(n.add("fire"),s.add("mouseFire")),w.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",w=>{w.button===0&&s.delete("mouseFire"),w.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",w=>{!t()||p!=="keyboard"||w.pointerType==="touch"||(document.pointerLockElement===u||w.target===u||u.contains(w.target))&&(r.x+=w.movementX,r.y+=w.movementY)});function C(w){let R=a.getBoundingClientRect(),L=w.clientX-R.left-R.width/2,U=w.clientY-R.top-R.height/2,V=R.width*.37,P=Math.max(V,Math.hypot(L,U));o.x=L/P,o.y=U/P,l.style.transform="translate("+o.x*V+"px,"+o.y*V+"px)"}a.addEventListener("pointerdown",w=>{d===-1&&(g("touch"),d=w.pointerId,a.setPointerCapture(w.pointerId),C(w))}),a.addEventListener("pointermove",w=>{w.pointerId===d&&C(w)}),a.addEventListener("lostpointercapture",w=>{w.pointerId===d&&(d=-1,o.x=0,o.y=0,l.style.transform="")});let v=0,x=0;c.addEventListener("pointerdown",w=>{f===-1&&(f=w.pointerId,v=w.clientX,x=w.clientY,c.setPointerCapture(w.pointerId))}),c.addEventListener("pointermove",w=>{w.pointerId===f&&(r.x+=(w.clientX-v)*1.45,r.y+=(w.clientY-x)*1.45,v=w.clientX,x=w.clientY)}),c.addEventListener("lostpointercapture",w=>{w.pointerId===f&&(f=-1)});for(let w of["interact","fire","aim","sprint","punch","jump","weapon","recruit"]){let R=Ot(w);R.addEventListener("pointerdown",L=>{L.preventDefault(),g("touch"),R.setPointerCapture(L.pointerId),w==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),R.setAttribute("aria-pressed",String(s.has("aim")))):w==="sprint"||w==="fire"?(s.add(w),w==="fire"&&n.add(w)):n.add(w)}),(w==="sprint"||w==="fire")&&R.addEventListener("lostpointercapture",()=>s.delete(w))}let _=!1;return{clear:A,read(w,R){_!==w&&(s.delete("aim"),Ot("aim").setAttribute("aria-pressed","false"),_=w);let L=Array.from(navigator.getGamepads?.()??[]).find(K=>K?.connected&&K.mapping==="standard"),U=L?.buttons.map(K=>K.pressed||K.value>.45)??[],V=K=>U[K]&&!m[K],P=Array.from({length:4},(K,rt)=>Nd(L?.axes[rt]));(U.some(Boolean)||P.some(K=>Math.abs(K)>.1))&&g("pad"),(V(9)||!t()&&V(0))&&i();let G=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),X=Number(e.has("KeyW")||e.has("ArrowUp"))-Number(e.has("KeyS")||e.has("ArrowDown")),at=(L?.buttons[7]?.value??0)-(L?.buttons[6]?.value??0),J={x:xe(G+o.x+P[0],-1,1),y:xe(X-o.y+(w&&Math.abs(at)>.05?at:-P[1]),-1,1),lookX:xe(r.x,-140,140)*.0032+P[2]*R*2.45,lookY:xe(r.y,-140,140)*.0028+P[3]*R*1.8,aim:!w&&(r.aim||e.has("KeyQ")||s.has("aim")||!!U[6]),run:s.has("sprint")||e.has("ShiftLeft")||e.has("ShiftRight")||!!U[0],brake:e.has("Space")||s.has("sprint")||!!U[2],interact:n.has("interact")||V(3),fire:n.has("fire")||s.has("fire")||s.has("mouseFire")||!w&&!!U[7],punch:n.has("punch")||V(1),recruit:n.has("recruit")||V(12),weapon:n.has("weapon")||V(15),jump:n.has("jump")||V(2),confirm:V(0),mode:p};return m=U,r.x=0,r.y=0,n.clear(),J}}}function jd(){let i,t,e,n,s=!0;function r(){if(s)try{i||(i=new AudioContext,t=i.createGain(),t.gain.value=.46,t.connect(i.destination),e=i.createOscillator(),e.type="triangle",n=i.createGain(),n.gain.value=0,e.connect(n).connect(t),e.start()),i.state==="suspended"&&i.resume().catch(()=>{})}catch{s=!1}}function o(a,l,c,h,u="sine",d=0){if(!i||!s||i.state!=="running")return;let f=i.currentTime+d,m=i.createOscillator(),y=i.createGain();m.type=u,m.frequency.setValueAtTime(a,f),m.frequency.exponentialRampToValueAtTime(l,f+c),y.gain.setValueAtTime(h,f),y.gain.exponentialRampToValueAtTime(.001,f+c),m.connect(y).connect(t),m.start(f),m.stop(f+c)}return{start:r,get enabled(){return s},toggle(){return s=!s,t&&(t.gain.value=s?.46:0),r(),s},motor(a,l){i&&(e.frequency.setTargetAtTime(34+Math.abs(a)*5,i.currentTime,.075),n.gain.setTargetAtTime(l?.13:0,i.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(a){o(a?109:187,a?39:73,a?.125:.084,a?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function bh(i){return i>1.53?54:i>.92?32:i>.63?24:15}function Th(i){return Math.round(xe(Math.max(0,i-2.4)**2*.24,0,86))}function wh(i){return i>=36?3:i>=20?2:i>0?1:0}function tf(i){let n=62.474999999999994,s=Array.from({length:2500},(c,h)=>({x:h%50*2.55-n,z:Math.floor(h/50)*2.55-n})),r=s.map(c=>In(c.x,c.z,.38,i)),o=s.map((c,h)=>r[h]?[h>=50?h-50:-1,h<2450?h+50:-1,h%50?h-1:-1,h%50<49?h+1:-1].filter(d=>d>=0&&r[d]&&In((c.x+s[d].x)*.5,(c.z+s[d].z)*.5,.38,i)):[]),a=c=>{let h=-1,u=1/0;for(let d=0;d<s.length;d++)if(r[d]){let f=s[d].x-c.x,m=s[d].z-c.z,y=f*f+m*m;y<u&&(h=d,u=y)}return h},l=(c,h)=>{let u=a(c),d=a(h);if(u<0||d<0||u===d)return[];let f=new Int32Array(s.length).fill(-1),m=[u];f[u]=u;for(let y=0;y<m.length;y++){let p=m[y];if(p===d){let g=[];for(let M=d;M!==u;M=f[M])g.push(s[M]);return g.reverse()}for(let g of o[p])f[g]===-1&&(f[g]=p,m.push(g))}return[]};return(c,h,u,d)=>{c.repath=(c.repath??0)-d;let f=h.x-c.x,m=h.z-c.z,y=Math.hypot(f,m);if(y<.16)return 0;let p=y<7&&[.2,.4,.6,.8,1].every(b=>In(c.x+f*b,c.z+m*b,.24,i));for(!p&&c.repath<=0&&(c.route=l(c,h),c.repath=1.25);c.route?.length&&Ct(c,c.route[0])<.7;)c.route.shift();let g=p?h:c.route?.[0]??h,M=Math.atan2(g.x-c.x,g.z-c.z),A=Math.min(u*d,Ct(c,g));return c.angle=Fi(c.angle,M,d*8.5),yo(c,c.x+Math.sin(M)*A,c.z+Math.cos(M)*A,.24,i)?u:0}}var Ol=i=>ii.reduce((t,e)=>Math.abs(i-e)<Math.abs(i-t)?e:t,ii[0]);function ef(i,t,e,n,s,r){let o=i.car;if(i.departing)if(o.x<15&&!i.stop)i.stop={x:15.6,z:i.berth.z};else if(i.stop?.x===15.6&&o.x>=14.9){let m=t.z<o.z;i.stop={x:m?20.9:17.2,z:o.z+(m?-1:1)*10}}else i.stop&&i.stop.x!==15.6&&Ct(o,i.stop)<3.4&&(i.departing=!1,i.stop=null);if(!i.stop||!i.departing&&Ct(o,i.stop)<2.6){let m=Ol(o.x),y=Ol(o.z),p=Ol(t.x),g=Ol(t.z);Math.abs(o.x-m)>3&&Math.abs(o.z-y)>3?i.stop={x:m,z:o.z}:Math.abs(o.x-m)>2.4&&Math.abs(o.z-y)<2.4?i.stop={x:p,z:y}:Math.abs(o.z-y)>2.4?i.stop={x:m,z:g}:p!==m?i.stop={x:m+Math.sign(p-m)*38,z:y}:g!==y?i.stop={x:m,z:y+Math.sign(g-y)*38}:i.stop={x:p,z:t.z}}let a=Ct(o,t),l=i.departing?6:14,c=Math.min(l,a*.85,Math.max(3,Ct(o,i.stop)*1.85)),h=Sh(o,n,s,c),u=!i.departing&&h<2.5?Yd(o,n,s,e):null,d=Fl(o,u??i.stop,u?4.4:h),f=o.impact>3||Math.abs(o.speed)<1;i.stall=f?i.stall+r:0,Mi(o,r,d,e,n)}var nf="gtbase:progress:1";function sf(i){try{let t=JSON.parse((i??globalThis.localStorage).getItem(nf));return!t||t.version!==1||!Number.isFinite(t.cash)||!Number.isFinite(t.ammo)||!Number.isFinite(t.health)?null:{x:nn.x+2.5,z:nn.z-2.73,cash:xe(Math.floor(t.cash),0,999999),armed:t.armed===!0,equipped:t.equipped===!0,ammo:xe(Math.floor(t.ammo),0,360),health:xe(Math.floor(t.health),1,100),recruits:Array.isArray(t.recruits)?t.recruits.filter(Number.isInteger).slice(0,3):[]}}catch{return null}}function rf(i,t){try{return(t??globalThis.localStorage).setItem(nf,JSON.stringify({...i,version:1})),!0}catch{return!1}}var bo=Ot("view"),F_=Ot("menu"),nr=Ot("play"),tr=Ot("quality"),zi=Ot("shop"),er=Ot("buy"),Ah=180,of=260,Bl=36;function zl(i,t){try{return t!==void 0&&localStorage.setItem("gtbase:"+i,t),localStorage.getItem("gtbase:"+i)}catch{return null}}function O_(){let i=matchMedia("(pointer:coarse), (max-width: 600px)").matches,t=new Cl({antialias:!i,alpha:!1,powerPreference:"high-performance"});t.toneMapping=ro,t.toneMappingExposure=1.17,t.shadowMap.type=Ki,bo.append(t.domElement);let e=new Ir,n=new fn(57,1,.12,370),s=qd(e),r=s.solid.filter(E=>E.h>1.7),o=tf(s.solid),a={...vo,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,model:$s(e,2386265,3553348,12220240,!0)},l=[{x:15.75,z:-1.8,angle:Math.PI,color:11422e3},{x:-22.8,z:4,angle:0,color:4362871},{x:36,z:15.3,angle:Math.PI/2,color:13084242},{x:53.3,z:-36,angle:0,color:5795484}],c=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033},{x:22.85,z:28,angle:0,color:4678008}],h=[...l.map(({color:E})=>So(e,E)),...c.map(({color:E})=>vh(e,E))],u=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((E,B)=>{let k=B===3||B===7?vh(e,E):So(e,E);return k.routeIndex=B,k.kind==="bike"&&(k.rider=$s(e,7429204,3751493,10711635),k.rider.root.visible=!1),k}),d=[...h,...u],f=new Map,m=Array.from({length:15},(E,B)=>{let k=Zn[B%3],Z=Zn[Math.floor(B/3)%3],N=[{x:k+12,z:Z-12},{x:k+12,z:Z+12},{x:k-12,z:Z+12},{x:k-12,z:Z-12}],wt=B%4,vt=N[wt],Tt=N[(wt+1)%4],Yt=(B%3+1)/4,Ht={x:vt.x+(Tt.x-vt.x)*Yt,z:vt.z+(Tt.z-vt.z)*Yt,next:(wt+1)%4};return w(Ht,"civilian",$s(e,[11626316,14333537,7242655,8810644,13024669][B%5],B%2?5199188:5522251,[12684900,8737330,15052936][B%3]),N)}),y=Array.from({length:3},(E,B)=>{let k=$e.z-6.1+B*4.25,Z={x:-7.1,z:$e.z+[-.23,-4.4,3.94][B],next:0},N=w(Z,"police",$s(e,3558501,2503491,12157017),[]),wt={x:8.2,z:k,angle:Math.PI/2},vt=So(e,3626613,!0);return{officer:N,berth:wt,car:vt,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}}),p=[...d,...y.map(E=>E.car)],g=new Map,M=Array.from({length:5},(E,B)=>{let k=w({x:0,z:0,next:0},"civilian",$s(e,8549210,4342337,[11765348,8475704][B%2]),[]);return k.seated=!0,k.model.root.visible=!1,k}),A=[...m,...y.map(E=>E.officer),...M],b=new Yi(1,14),C=new En({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),v=new On(.27,.115,.38),x={cash:new xn({color:7838308}),ammo:new xn({color:14395738}),weapon:new xn({color:4805464})},_=[];function w(E,B,k,Z){return{home:E,role:B,model:k,path:Z,...E,pace:1.15+Math.abs(E.z)%4*.11,angle:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0}}function R(E){E.drop&&(e.remove(E.drop),E.drop=null),Object.assign(E,E.home,{role:E.role==="police"?"police":"civilian",health:100,fear:0,down:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],pushX:0,pushZ:0}),E.model.root.rotation.set(0,E.angle,0),E.model.shadow.visible=!0,E.model.root.visible=!0,E.model.root.position.set(E.x,ke(E.x,E.z),E.z)}let L=jd();zl("sound")==="off"&&L.toggle();let U=new O,V=new O,P=new O,W=new O,G=new O,X=new O,at=new O,J=new O,K=new O,rt=new O,Et=0,Gt=new le(new Float32Array(6),3),it=new ze;it.setAttribute("position",Gt);let Mt=new Os(it,new qi({color:16767875,transparent:!0,opacity:.9}));Mt.frustumCulled=!1,Mt.visible=!1,e.add(Mt);let At=new le(new Float32Array(6),3),Bt=new ze;Bt.setAttribute("position",At);let lt=new Os(Bt,new qi({color:16753778,transparent:!0,opacity:.87}));lt.frustumCulled=!1,lt.visible=!1,e.add(lt);let Ut=!1,de=!1,Q=null,Qt=0,se=0,Wt=0,Le=0,De=0,Ve=0,$t=0,Re=.23,Ue=0,qe=0,Ke=0,Ye=0,z=!0,sn="keyboard",fe=of,te=!1,ct=!1,pe=0,zt=!1,kt=0,I=0,S=null,H=null,ot=null,nt=null,ft=27,xt=0,tt=null,et=0,ut=[],D=sf(),st=()=>{nr.textContent=D?"Continuar do save":"Jogar agora"},j=0,pt=0,dt=0,gt=0,Dt=!1,Kt=0,ht=!1,Ft="",qt=0,yt=1,me=0,Oe=0,ve=Ot("map").getContext("2d"),ki=document.createElement("canvas");ki.width=ki.height=256;let Sn=ki.getContext("2d"),Pn=E=>128+E*1.92;Sn.fillStyle="#1d3433",Sn.fillRect(0,0,256,256),Sn.fillStyle="#46605b";for(let E of ii)Sn.fillRect(Pn(E)-10,0,20,256),Sn.fillRect(0,Pn(E)-10,256,20);Sn.fillStyle="#345048";for(let E of s.solid)Sn.fillRect(Pn(E.x-E.w/2),Pn(E.z-E.d/2),E.w*1.92,E.d*1.92);Sn.fillStyle="#6a7859",Sn.fillRect(Pn(-10),Pn(28),38,38);function Si(){let E=tr.value==="high",B=tr.value==="low";t.setPixelRatio(Math.min(devicePixelRatio,E?2:B?1:i?1.45:1.8)*(B?.85:yt)),t.setSize(bo.clientWidth,bo.clientHeight),t.shadowMap.enabled=!B&&(E||yt>.76),s.sun.shadow.needsUpdate=!0,n.aspect=bo.clientWidth/Math.max(1,bo.clientHeight),n.updateProjectionMatrix()}function ir(){Ot("sound").textContent=L.enabled?"Som ligado":"Som desligado",Ot("sound").setAttribute("aria-pressed",String(L.enabled))}function vn(E){zi.open&&si(),Ut=E,F_.hidden=E,Ot("hud").hidden=!E,Ro.clear(),E?(L.start(),de||($t=.32,Re=.22),de=!0,z=!0,Ue=performance.now(),Ot("pause").focus({preventScroll:!0}),Ot("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),L.motor(0,!1),Ot("help").removeAttribute("open"),Ot("title").innerHTML="GT<span>BASE</span>",Ot("intro").textContent="Jogo pausado em Vila Brasa.",nr.textContent="Continuar",Ot("reset").hidden=!1,nr.focus())}function ds(){Q=null,S=null,nt=null,ot=null,H=null,ut.length=0,ft=27,fe=of,te=!1,ct=!1,pe=0,zt=!1,Qt=Wt=Ve=Le=De=qt=0,j=pt=dt=kt=I=0,Dt=!1,Kt=0,ht=!1,$t=.32,Re=.22,Ye=0,Object.assign(a,vo,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0}),a.model.root.position.set(a.x,0,a.z),a.model.root.rotation.set(0,0,0),a.model.root.visible=!0,a.model.shadow.visible=!0,ls(a.model,0,0,!1,!1),h.forEach((E,B)=>{rs(E,[...l,...c][B]),E.stolen=!1,E.body.rotation.z=0,cs(E,0)}),f.clear(),u.forEach((E,B)=>{Mh(E,B),cs(E,0)});for(let E of y)rs(E.car,E.berth),Object.assign(E,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),cs(E.car,0);for(let E of A)R(E);for(let E of M)E.seated=!0,E.model.root.visible=!1;for(let E of _)e.remove(E.mesh);_.length=0,s.marker.position.set(ss.x,0,ss.z),s.marker.visible=!0,Ke=0}function Ae(E){Ft=E,qt=2.4}function To(){Ot("shop-detail").textContent=te?"Reponha a muni\xE7\xE3o at\xE9 "+Bl+" balas, sem custo.":"Uma pistola e "+Bl+" balas por R$ "+Ah+".",Ot("shop-balance").textContent="Saldo: R$ "+fe+" \xB7 Balas: "+pe,er.textContent=te?"Repor muni\xE7\xE3o":"Comprar pistola",er.disabled=te?pe>=Bl:fe<Ah}function fs(){Ro.clear(),document.pointerLockElement&&document.exitPointerLock(),To(),zi.showModal(),er.disabled?Ot("close-shop").focus():er.focus()}function si(){zi.close(),Ro.clear(),Ke=0}function sr(){!zi.open||er.disabled||(te?Ae("Muni\xE7\xE3o reposta."):(te=!0,ct=!0,fe-=Ah,Ae("Pistola comprada.")),pe=Bl,L.bell(),si())}function bn(E){Qt=Math.min(56,Math.max(Qt+(Qt>0?E*.58:0),E))}let wo=()=>!Q&&Ct(a,ss)<2.85,rr=()=>!Q&&Ao(a)&&Ct(a,Zs)<2&&js([a.x,1.05,a.z],[Zs.x,1.05,Zs.z],s.solid),or=()=>p,Ln=E=>E.health>0&&!E.seated,Ao=({x:E,z:B})=>Math.abs(E-nn.x)<6.08&&Math.abs(B-nn.z)<5.12,ar=({x:E,z:B})=>E>-10.72&&E<-3.5&&Math.abs(B-$e.z)<9.68,lr=E=>E.kind==="bike"?"Moto":"Cup?";function T(){let E=null,B=3;for(let k of d){let Z=Ct(a,k);Z>=B||k.integrity<=0||Math.abs(k.speed)>3.4||(E=k,B=Z)}return E}function F(E=!1){if(!Q)return;let{angle:B,x:k,z:Z}=Q;if(!E&&Math.hypot(Q.vx,Q.vz)>4.2){Ae("Reduza a velocidade para sair.");return}let N=Q.kind==="bike"?1.02:1.64,wt=[N,-N,N+.53,-N-.53].map(Tt=>[k+Math.cos(B)*Tt,Z-Math.sin(B)*Tt]);wt.push([k-Math.sin(B)*2.75,Z-Math.cos(B)*2.75],[k+Math.sin(B)*2.77,Z+Math.cos(B)*2.77]);let vt=wt.find(([Tt,Yt])=>Js({x:Tt,z:Yt},Tt,Yt,s.solid,p,A,.36));if(!vt&&!E){Ae("Sem espa\xE7o para abrir a porta.");return}[a.x,a.z]=vt??[vo.x,vo.z],a.angle=B,Object.assign(a,{vx:0,vz:0,pushX:0,pushZ:0}),Q.abandoned=0,Q=null,a.model.root.visible=!0,a.model.shadow.visible=!0,a.model.root.rotation.set(0,B,0),ls(a.model,0,0,!1,ct)}function $(){F(!0),Object.assign(a,{x:nn.x+2.5,z:nn.z-2.73,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0}),kt=0,Qt=0,I=0,$t=-Math.PI/2,z=!0,Ae("Voc\xEA voltou para casa.")}function q(){if(S||a.health<=0)return;if(Q){F();return}if(wo()){fs();return}if(rr()){let B={health:a.health,cash:fe,armed:te,equipped:ct,ammo:pe,recruits:ut.map(k=>m.indexOf(k))};Ae(rf(B)?"Progresso salvo na cama.":"O navegador bloqueou o salvamento."),L.bell();return}let E=T();if(!E){Ae("Aproxime-se de um carro ou moto.");return}if(E.driver){let B=M.find(k=>k.seated)??M.find(k=>k.exitAge>14&&k.role==="civilian"&&Ct(k,a)>11);if(B){let k=E.angle-Math.PI/2,Z=E.x+Math.sin(k)*(E.kind==="bike"?.95:1.51),N=E.z+Math.cos(k)*(E.kind==="bike"?.95:1.51),wt=In(Z,N,.29,s.solid)?{x:Z,z:N}:{x:a.x,z:a.z};R(B),Object.assign(B,wt,{angle:k,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),E.rider&&(E.rider.root.visible=!1)}E.driver=null,E.vx=E.vz=E.speed=0,E.doorTime=.65,S={car:E,delay:.46},Ae(E.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else Y(E)}function Y(E){Q=E,E.driver=null,a.lift=0,Object.assign(a,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),kt=0,a.model.root.visible=E.kind==="bike",E.stolen||(E.stolen=!0,bn(13)),$t=E.angle,Ye=0,z=!0}function _t(E,B,k){let Z=new be(v,x[E]),N=ke(B.x,B.z)+.13;Z.position.set(B.x+.22,N,B.z+.19),e.add(Z),_.push({mesh:Z,kind:E,count:k,y:N,wait:.32,left:105})}function It(E){for(let B=_.length-1;B>=0;B--){let k=_[B];k.left-=E,k.wait-=E,k.mesh.rotation.y+=E*2.1,k.mesh.position.y=k.y+Math.sin(k.left*3.8)*.08;let Z=!Q&&a.health>0&&k.wait<0&&Math.hypot(a.x-k.mesh.position.x,a.z-k.mesh.position.z)<1.03;Z&&(k.kind==="cash"?(fe+=k.count,Ae("R$ "+k.count+" recolhidos.")):!te&&k.kind==="weapon"?(te=ct=!0,pe+=k.count,Ae("Pistola recolhida.")):(pe=Math.min(360,pe+k.count),Ae("+"+k.count+" balas.")),L.bell()),(Z||k.left<=0)&&(e.remove(k.mesh),_.splice(B,1))}}function mt(E,B,k=!1){if(E.health<=0||B<=0)return;if(E.health=Math.max(0,E.health-B),E===a){dt=.22,E.health<=0&&(F(!0),I=3,Ae("Voc\xEA caiu. Voltando para casa\u2026"));return}if(E.stagger=.32,E.fear=6,E.surrender=0,ot?.npc===E&&(ot=null),E.health>0)return;H===E&&(H=null),E.down=E.role==="police"?28:19,E.model.shadow.visible=!1;let Z=new be(b,C);Z.position.set(E.x,ke(E.x,E.z)+.019,E.z),Z.rotation.x=-Math.PI/2,Z.scale.set(.52,.32,1),e.add(Z),E.drop=Z,E.role==="police"?_t(te?"ammo":"weapon",E,12):E.role!=="ally"&&!E.robbed&&_t("cash",E,24+Math.floor(Math.abs(E.z)%27)),k&&E.role==="police"&&bn(43),nt===E&&(nt=null,ft=29);let N=ut.indexOf(E);N>=0&&ut.splice(N,1)}function St(E){return[...A,a].filter(k=>k!==E&&Ln(k)&&!(k===a&&Q&&Q.kind==="car")).map(k=>{let Z=ke(k.x,k.z)+(k===a?a.lift:0);return{actor:k,y:Z,bounds:[k.x-.31,Z+.1,k.z-.31,k.x+.31,Z+1.9,k.z+.31]}})}function Nt(){n.getWorldDirection(at);let E=St(a),B=Qs(n.position.toArray(),at.toArray(),s.solid,E,28).hit;if(B&&Ct(a,B.actor)<24)return B.actor;let k=.17,Z=null,N=[a.x,ke(a.x,a.z)+1.38+a.lift,a.z];for(let{actor:wt,y:vt}of E){if(Ct(a,wt)>18)continue;W.set(wt.x,vt+1.25,wt.z).project(n);let Tt=Math.hypot(W.x,W.y);W.z>=1||Tt>=k||!js(N,[wt.x,vt+1.25,wt.z],s.solid)||(k=Tt,Z=wt)}return Z}function Xt(E){E&&E.role!=="ally"&&E.health>0&&(H=E)}function re(E,B){let k=ke(E.x,E.z)+1.27;for(let Z of y){let N=Z.officer;if(!Ln(N)||Ct(N,E)>24)continue;let wt=E.x-N.x,vt=E.z-N.z,Tt=Math.sin(N.angle)*wt+Math.cos(N.angle)*vt;N!==B&&Ct(N,E)>6&&Tt<-.24*Math.hypot(wt,vt)||(N===B||js([N.x,ke(N.x,N.z)+1.55,N.z],[E.x,k,E.z],s.solid))&&(Z.retaliation=E)}}function Pt(E){if(!E||E.role!=="civilian"||E.health<=0){Ae("Mire em um pedestre para recrutar.");return}if(ut.length>=3){Ae("Sua gangue est\xE1 cheia.");return}E.role="ally",E.surrender=0,E.fear=0,E.route=[],ut.push(E),ot?.npc===E&&(ot=null),Ae("Guarda-costas recrutado."),L.bell()}function oe(E,B){if(a.health<=0||!B||B.role!=="civilian"||B.robbed||Ct(a,B)>9){ot&&(ot.npc.surrender=0,ot=null);return}let k=a.x-B.x,Z=a.z-B.z,N=Math.sin(B.angle)*k+Math.cos(B.angle)*Z;if(ot?.npc!==B){if(ot&&(ot.npc.surrender=0),ot=null,N<Math.hypot(k,Z)*.3||B.stagger>0||B.fear>0)return;ot={npc:B,left:5}}B.surrender=1,B.angle=Math.atan2(k,Z),ot.left-=E,ot.left<=0&&(B.robbed=!0,B.surrender=0,B.fear=7,_t("cash",B,38+Math.floor(Math.abs(B.z)%31)),bn(15),Ae("Dinheiro no ch\xE3o."),ot=null)}function Be(){j>0||a.health<=0||a.trip>.15||S||(a.angle=$t,j=.36,Dt=!0,Kt=.106,Xt(tt),L.punch(!1))}function Te(){if(Dt=!1,a.health<=0||Q)return;let E=Kd(a,A.filter(N=>Ln(N)&&N.role!=="ally"),ke(a.x,a.z)+a.lift,s.solid);if(!E)return;Xt(E),L.punch(!0);let B=E.x-a.x,k=E.z-a.z,Z=Math.max(.2,Math.hypot(B,k));E.pushX=B/Z*3.6,E.pushZ=k/Z*3.6,mt(E,18,!0),pt=.19,bn(E.role==="police"?28:12),Ae(E.health<=0?"Pedestre derrubado.":"Soco acertou.")}function ye(E){if(j>0||Wt>0||a.health<=0||!te||!ct)return;if(pe<=0){Wt=.32,Ae("Sem balas. Reponha na loja.");return}pe--,Wt=.28,Ve=.095,a.angle=$t,a.model.root.rotation.y=$t,ls(a.model,0,0,!0,!0,0,E?Re:Re-.22),a.model.muzzle.getWorldPosition(G),L.shot();let B=St(a),k=p.map(Ht=>{let ue=Ht.kind==="bike"?.31:.96,Me=Ht.kind==="bike"?1.08:1.84,jt=ue*Math.abs(Math.cos(Ht.angle))+Me*Math.abs(Math.sin(Ht.angle)),ee=ue*Math.abs(Math.sin(Ht.angle))+Me*Math.abs(Math.cos(Ht.angle));return{car:Ht,bounds:[Ht.x-jt,.22,Ht.z-ee,Ht.x+jt,Ht.kind==="bike"?1.1:1.52,Ht.z+ee]}}),Z=[...B,...k];n.getWorldDirection(at);let N=G.toArray(),wt=Qs(n.position.toArray(),at.toArray(),s.solid,Z,52);X.copy(n.position).addScaledVector(at,wt.distance),(X.x-G.x)*Math.sin($t)+(X.z-G.z)*Math.cos($t)<.25&&X.copy(G).addScaledVector(at,4),E&&sn!=="keyboard"&&!wt.hit&&tt&&X.set(tt.x,ke(tt.x,tt.z)+1.28,tt.z);let vt=at.subVectors(X,G).normalize(),Tt=Qs(N,vt.toArray(),s.solid,Z);X.copy(G).addScaledVector(vt,Tt.distance);let Yt=Tt.hit;Yt?.actor&&Yt.actor.role!=="ally"?(Xt(Yt.actor),mt(Yt.actor,bh(X.y-Yt.y),!0),Yt.actor.role==="police"&&bn(32),pt=.21,Ae(Yt.actor.health<=0?"Alvo derrubado.":"Disparo acertou.")):Yt?.car?(Yt.car.integrity=Math.max(0,Yt.car.integrity-5),pt=.16):E&&Xt(tt),bn(19);for(let Ht of m)Ht.role==="civilian"&&Ct(Ht,a)<18&&(Ht.fear=Math.max(Ht.fear,4.8));Gt.setXYZ(0,G.x,G.y,G.z),Gt.setXYZ(1,X.x,X.y,X.z),Gt.needsUpdate=!0}function Qe(E,B){let k=Q;Mi(k,E,{throttle:B.y,steer:-B.x,brake:B.brake},s.solid,or()),Ye>1.15&&Math.abs(k.speed)>2.4&&($t=Fi($t,k.angle,E*2.3))}function Lt(E,B){let k=Math.min(1,Math.hypot(B.x,B.y)),Z=a.health>0&&!S&&a.trip<.12,N=Z?k*(B.aim?2.1:B.run?7.4:4.2):0,wt=$t+Math.atan2(-B.x,B.y||0);B.jump&&Z&&a.lift===0&&(kt=4.18),(kt!==0||a.lift>0)&&(a.lift=Math.max(0,a.lift+kt*E-11.8*E*E),kt=a.lift>0?kt-23.6*E:0);let vt=1-Math.exp(-E*(N>.02?19:27));a.vx+=(Math.sin(wt)*N-a.vx)*vt,a.vz+=(Math.cos(wt)*N-a.vz)*vt;let Tt=fh(a,(a.vx+a.pushX)*E,(a.vz+a.pushZ)*E,s.solid,p,A);a.pushX*=Math.exp(-E*6.2),a.pushZ*=Math.exp(-E*6.2),a.trip=Math.max(0,a.trip-E),j<=0&&Z&&(B.aim||k>.05)&&(a.angle=Fi(a.angle,B.aim?$t:wt,E*11));let Yt=a.model;Yt.root.position.set(a.x,ke(a.x,a.z)+a.lift,a.z),Yt.root.rotation.set(a.health<=0?1.53:Math.min(1.25,a.trip*2.7),a.angle,0),Yt.shadow.visible=a.health>0&&a.lift<.06,ls(Yt,E,a.trip>.05?0:Math.min(7.5,Tt/E),B.aim||Ve>0,ct&&j<=0,j/.36,B.aim?Re:0),Tt&&De<=0&&a.lift===0&&(L.step(),De=B.run?.27:.41)}function rn(E){let B=E.officer,k=E.car;B.seated=!1,B.model.root.visible=!0;let Z=Math.sin(k.angle),N=Math.cos(k.angle),vt=[{x:k.x-N*1.62,z:k.z+Z*1.62},{x:k.x+N*1.62,z:k.z-Z*1.62},{x:k.x-Z*2.72,z:k.z-N*2.72}].find(({x:Tt,z:Yt})=>Js({x:Tt,z:Yt},Tt,Yt,s.solid,p,A,.31))??B.home;B.x=vt.x,B.z=vt.z,B.angle=k.angle,B.exitAnim=.38,B.model.shadow.visible=!0,k.doorTime=.65,E.mode="foot"}function ge(E,B){let k=p.includes(B)?B:null;if(Ct(E,B)>18||Ct(E,B)<.5||(k?k.integrity<=0:!Ln(B)))return!1;let Z=ke(E.x,E.z),N=ke(B.x,B.z)+(B===a?a.lift:0)+(k?1.08:1.27);if(!js([E.x,Z+1.35,E.z],[B.x,N,B.z],s.solid))return!1;E.angle=Math.atan2(B.x-E.x,B.z-E.z),E.model.root.position.set(E.x,Z,E.z),E.model.root.rotation.y=E.angle;let wt=Math.atan2(Z+1.42-N,Math.max(.4,Ct(E,B)));ls(E.model,0,0,!0,!0,0,wt),E.model.muzzle.getWorldPosition(J);let vt=qe*14+E.x,Tt=Math.sin(vt)*(E.role==="ally"?.35:.48),Yt=B.x+Math.cos(E.angle)*Tt,Ht=B.z-Math.sin(E.angle)*Tt;K.set(Yt,N+Math.cos(vt*1.4)*.32,Ht);let ue=Math.min(24,J.distanceTo(K)+1.65),Me=rt.subVectors(K,J).normalize(),jt=St(E);k&&jt.push({actor:k,y:0,bounds:[B.x-.93,.3,B.z-1.02,B.x+.93,1.52,B.z+1.02]});let ee=Qs(J.toArray(),Me.toArray(),s.solid,jt,ue);if(E.role==="ally"&&(B.role==="police"||ee.hit?.actor.role==="police")&&re(E,ee.hit?.actor),ee.hit&&(ee.hit.actor===B||ee.hit.actor.role==="civilian")){let Dn=E.role==="police"&&B===a?.62:.83;k&&ee.hit.actor===k?(k.integrity=Math.max(0,k.integrity-5),k.kind==="bike"&&mt(a,12)):mt(ee.hit.actor,Math.round(bh(J.y+Me.y*ee.distance-ee.hit.y)*Dn))}return K.copy(J).addScaledVector(Me,ee.distance),E.role!=="ally"&&(B===a||B===Q||zd(J,K,Q??a))&&Xt(E),At.setXYZ(0,J.x,J.y,J.z),At.setXYZ(1,K.x,K.y,K.z),At.needsUpdate=!0,Et=.098,E.attack=(E.role==="police"?.91:1.07)+(Math.sin(vt)+1)*.18,Ct(E,Q??a)<31&&L.shot(),!0}function kn(E,B,k){let Z=Ct(E,B);return E.stagger>0||E.exitAnim>0?{speed:0,aim:!1}:Z<17&&E.attack<=0&&ge(E,B)||E.attack>.28&&Z<15.5?(E.angle=Fi(E.angle,Math.atan2(B.x-E.x,B.z-E.z),k*12),{speed:0,aim:!0}):{speed:Z>3.3?o(E,B,4.4,k):0,aim:Z<12}}function je(E,B){if(ft-=B,nt){ft<=0&&(nt.role="civilian",nt.fear=4,nt=null,ft=37);return}if(ft>0)return;let k=m.find(Z=>Z.role==="civilian"&&Ln(Z)&&Ct(Z,E)>14&&Ct(Z,$e)<55);if(!k){ft=8;return}k.role="rogue",nt=k,ft=63,k.attack=.1}function Gi(E,B){return E.x<-5.2?{x:-4.65,z:E.z}:E.x<-3.63&&Math.abs(E.z-$e.z)>.46?{x:-4.65,z:$e.z}:E.x<-2.64?{x:-2.38,z:$e.z}:B}function Jn(E){return E.x>-3.58&&(E.x>-2.55||Math.abs(E.z-$e.z)>.5)?{x:-2.66,z:$e.z}:E.x>-4.33?{x:-4.68,z:$e.z}:E.x>-5.15&&Math.abs(E.z-E.home.z)>.5?{x:-4.68,z:E.home.z}:E.home}function ri(E,B){let k=Qt>0&&a.health>0?B:nt,Z=k===nt?nt?1:0:wh(Qt);if(Qt>0){let N=y.some(({mode:wt,officer:vt,car:Tt})=>wt==="foot"?Ln(vt)&&Ct(vt,B)<19:wt==="driving"&&Ct(Tt,B)<27);Qt=Math.max(0,Qt-E*(N?.57:.91)),Qt===0&&Ae("Voc\xEA despistou a pol\xEDcia.")}y.forEach((N,wt)=>{let vt=N.officer,Tt=N.car;N.retaliation&&!Ln(N.retaliation)&&(N.retaliation=null);let Yt=N.retaliation,Ht=Yt??k,ue=!!(Yt||k&&wt<Z);if(vt.health<=0){N.mode="disabled",vt.down<=0&&Ct(vt,B)>13&&p.every(ee=>ee===Tt||Ct(ee,N.berth)>3.5)&&(R(vt),rs(Tt,N.berth),cs(Tt,0),N.mode="ready",N.retaliation=null);return}Yt&&(N.mode==="ready"||N.mode==="boarding")&&(N.mode="foot");let Me=y.slice(0,wt).some(ee=>ee.mode==="boarding"&&ee.officer.x<-3.12);if(N.mode==="ready"&&ue&&!Me&&(N.mode="boarding",N.stop=null,N.stall=0,N.departing=!0),N.mode==="boarding")if(!ue)N.mode="foot";else{let ee={x:Tt.x-1.18,z:Tt.z};Ct(vt,ee)<.6?(vt.seated=!0,vt.model.root.visible=!1,N.mode="driving",Tt.doorTime=.6):N.intent=o(vt,Gi(vt,ee),3.85,E)}if(N.mode==="driving"){let ee=Ht?Ct(Tt,Ht):1/0;!ue||Tt.integrity<=0||N.stall>5.7||ee<12.7&&!(Ht===Q&&Math.abs(Q.speed)>6)?(Mi(Tt,E,{throttle:0,steer:0,brake:!0},s.solid,p),Math.hypot(Tt.vx,Tt.vz)<3&&rn(N)):ef(N,Ht,s.solid,p,A,E)}else if(N.mode==="foot"){let ee=ar(vt)||vt.x>-3.62&&vt.x<-2.64&&Math.abs(vt.z-$e.z)<1.2;ue&&ee&&!ar(Ht)?N.intent=o(vt,Gi(vt,Ht),4.5,E):ue?N.combat=kn(vt,Ht,E):Ct(vt,vt.home)>.72?N.intent=o(vt,Jn(vt),3.15,E):Ct(B,Tt)>12&&Ct(B,N.berth)>9&&p.every(Dn=>Dn===Tt||Ct(Dn,N.berth)>3.5)&&(rs(Tt,N.berth),cs(Tt,0),N.mode="ready")}let jt=N.mode==="driving"||ue&&N.mode==="foot";Tt.lamps.forEach((ee,Dn)=>{ee.visible=!jt||Math.floor(qe*8+Dn)%2===0}),jt&&se<=0&&Ct(B,Tt)<42&&(L.siren(),se=1.35)})}function he(E,B){let k={player:Q,vehicles:or()};Zd(u,k,A,s.solid,E,f);for(let Z of h)Z!==Q&&Math.hypot(Z.vx,Z.vz)>.06?Mi(Z,E,{throttle:0,steer:0,brake:!0},s.solid,k.vehicles):Z!==Q&&(Z.impact=Math.max(0,Z.impact-E*21));for(let Z of p){if(Z.routeIndex>=0&&Z!==Q){Z.abandoned+=E;let N=!Z.driver&&Z.abandoned>25,wt=Z.integrity<=0||(Z.driver?.stuck??0)>13;if((N||wt)&&Ct(B,Z)>17){let vt={};Mh(vt,Z.routeIndex),vt.kind=Z.kind,Jd(vt,k.vehicles.filter(Tt=>Tt!==Z),B,s.solid)&&Object.assign(Z,vt)}}Z!==Q&&Z.impact>5&&Ct(B,Z)<18&&Le<=0&&(L.crash(),Le=.32),cs(Z,E,Z.steer),Z.rider&&(Z.rider.root.visible=!!Z.driver&&Z.integrity>0,Z.rider.root.visible&&_h(Z.rider,Z))}if(Q){if(Q.impact>4.1&&Le<=0){L.crash(),dt=.24,Le=.36;let Z=Q,N=Z.impact;Ae(Z.integrity<43?"Motor avariado.":"Colis\xE3o."),N>9&&mt(a,Math.min(58,Math.round(N*(Z.kind==="bike"?2.45:1.05)))),Q&&Z.kind==="bike"&&N>10.5&&(Z.integrity=Math.max(0,Z.integrity-8),F(!0),Ae("Voc\xEA caiu da moto."))}if(Q&&Q.integrity<=0&&Math.hypot(Q.vx,Q.vz)<3){let Z=lr(Q);F(!0),Ae(Z+" sem condi\xE7\xF5es de rodar.")}}}function He(E,B,k=!1){let Z=new Map(A.map(N=>[N,{x:N.x,z:N.z}]));k||(je(B,E),ri(E,B));for(let N of A){if(N.seated)continue;if(N.attack-=E,N.stagger=Math.max(0,N.stagger-E),N.injuryCooldown-=E,N.exitAnim=Math.max(0,N.exitAnim-E),N.exitAge+=E,N.health<=0){if(N.down=Math.max(0,N.down-E),N.model.root.rotation.x+=(Math.PI/2-N.model.root.rotation.x)*Math.min(1,E*8),N.model.root.position.y=ke(N.x,N.z)+.19,N.drop){let ue=Math.min(.63,.32+(19-N.down)*.09);N.drop.rotation.z=N.angle,N.drop.scale.set(Math.max(.38,ue),Math.max(.24,ue*.68),1)}N.role!=="police"&&N.down<=0&&Ct(N.home,B)>7&&Ct(N,B)>7&&(R(N),M.includes(N)&&(N.seated=!0,N.model.root.visible=!1));continue}let wt=0,vt=!1,Tt=y.find(ue=>ue.officer===N);if(Tt)wt=Tt.combat?.speed??Tt.intent??0,vt=!!Tt.combat?.aim,Tt.intent=0,Tt.combat=null;else if(N.role==="ally")H&&Ln(H)?{speed:wt,aim:vt}=kn(N,H,E):Ct(B,N)>4.25+ut.indexOf(N)*.93&&(wt=o(N,B,Q?6.1:4.5,E));else if(N.role==="rogue"){let ue=m.filter(jt=>jt!==N&&jt.role==="civilian"&&Ln(jt)).sort((jt,ee)=>Ct(N,jt)-Ct(N,ee))[0],Me=y.map(jt=>jt.officer).find(jt=>Ln(jt)&&Ct(jt,N)<15);(Me||ue)&&({speed:wt,aim:vt}=kn(N,Me??ue,E))}else if(N.surrender<=0){let ue=N.path[N.next];if(N.fear=Math.max(0,N.fear-E),N.fear>0&&Ct(N,B)<15){let Me=Math.atan2(N.x-B.x,N.z-B.z);for(let jt of[0,.84,-.84,1.52,-1.52]){let ee=Me+jt;if(yo(N,N.x+Math.sin(ee)*3.7*E,N.z+Math.cos(ee)*3.7*E,.22,s.solid)){N.angle=Fi(N.angle,ee,E*8),wt=3.7;break}}}else if(ue){Ct(N,ue)<.43&&(N.next=(N.next+1)%N.path.length);let Me=Math.atan2(ue.x-N.x,ue.z-N.z);yo(N,N.x+Math.sin(Me)*N.pace*E,N.z+Math.cos(Me)*N.pace*E,.22,s.solid)&&(wt=N.pace),N.angle=Fi(N.angle,Me,E*8)}}let Yt=Z.get(N);if(Yt&&N.exitAnim<=0){let ue=N.x-Yt.x+N.pushX*E,Me=N.z-Yt.z+N.pushZ*E;N.x=Yt.x,N.z=Yt.z;let jt=Tt?.mode==="boarding"?p.filter(Dn=>Dn!==Tt.car):p,ee=fh(N,ue,Me,s.solid,jt,[...A,...Q?[]:[a]],.29);wt>0&&(wt=Math.min(wt,ee/E))}if(N.pushX*=Math.exp(-E*7.6),N.pushZ*=Math.exp(-E*7.6),!k&&N.injuryCooldown<=0){let ue=yn(N,2.8);if(ue){let{car:Me,speed:jt,vx:ee,vz:Dn}=ue,cr=Th(jt);N.pushX=xe(ee,-8,8)*.59,N.pushZ=xe(Dn,-8,8)*.59,cr>0&&(N.injuryCooldown=1.18,mt(N,cr,Me===Q),Me===Q&&cr>12&&bn(19))}}let Ht=N.model;N.health<=0||(Ht.root.position.set(N.x,ke(N.x,N.z)+N.exitAnim*.35,N.z),Ht.root.rotation.set(N.exitAnim*.7,N.angle,N.exitAnim*N.exitSide*.89+(N.stagger>0?Math.sin(N.stagger*9)*.21:0)),ls(Ht,E,N.exitAnim>0?2.9:wt,vt,N.role!=="civilian",0,0,N.surrender>0))}if(!k&&!Q&&a.health>0&&a.lift<.3&&gt<=0){let N=yn(a,2.35);if(N){let{speed:wt,vx:vt,vz:Tt}=N,Yt=Th(wt);a.pushX=xe(vt,-13,13)*.73,a.pushZ=xe(Tt,-13,13)*.73,a.trip=wt>=5.3?Math.min(.82,.35+wt*.021):.12,a.vx=a.vz=0,Yt>0&&(mt(a,Yt),L.crash(),Ae("Voc\xEA foi atropelado.")),gt=.87}}}function yn(E,B){for(let k of p){if(Ct(k,E)>5)continue;let Z=g.get(k),N=Z&&Ct(Z,k)<3?Z:null,wt=N?Math.hypot(N.vx,N.vz):0,vt=Math.hypot(k.vx,k.vz),Tt=Math.max(vt,wt);if(!(Tt<B||!Bd(k,N,E)))return{car:k,speed:Tt,vx:wt>vt?N.vx:k.vx,vz:wt>vt?N.vz:k.vz}}return null}function Ce(E,B){let k=[B,...y.map(Z=>Z.officer),...ut];for(let Z of s.doors){let N=k.some(vt=>!vt.seated&&vt.health!==0&&Ct(vt,Z)<2.23),wt=Z.angle+(N?1.51:0);Z.door.rotation.y+=(wt-Z.door.rotation.y)*(1-Math.exp(-E*12))}}function We(E,B,k){let Z=!Q&&Ao(B),N=!Q&&ar(B),wt=Z||N;ht!==wt&&(ht=wt,z=!0);let vt=n.aspect<.85,Yt=wt?k?2.25:3.4:Q?Q.kind==="bike"?8.2:vt?12:10.2:k?4.45:vt?7.9:6.5,Ht=Q?1.95:1.38+ke(B.x,B.z)+a.lift*.46,ue=Q?0:k?.61:.22,Me=k?.1+Re*.19:Math.max(wt?.28:.1,Re);V.set(B.x+Math.cos($t)*ue,Ht,B.z-Math.sin($t)*ue),P.set(V.x-Math.sin($t)*Yt*Math.cos(Me),Ht+Math.sin(Me)*Yt,V.z-Math.cos($t)*Yt*Math.cos(Me));function jt(ln){Z?(ln.x=xe(ln.x,nn.x-5.7,nn.x+5.7),ln.z=xe(ln.z,nn.z-4.71,nn.z+4.66)):N&&(ln.x=xe(ln.x,-10.45,-3.97),ln.z=xe(ln.z,$e.z-9.39,$e.z+9.39)),wt&&(ln.y=Math.min(ln.y,2.56))}jt(P);for(let ln=.11;ln<=1;ln+=.067){let lf=po.lerp(V.x,P.x,ln),cf=po.lerp(V.z,P.z,ln);if(!In(lf,cf,.2,r)){P.lerp(V,1-Math.max(.06,ln-.105)),P.y=Math.max(P.y,1.95);break}}jt(P);let ee=k?14:1,Dn=zt?Re:Re-.22,cr=k?Ht-Math.tan(Dn)*ee:Ht-.07;U.set(V.x+Math.sin($t)*ee,cr,V.z+Math.cos($t)*ee),z?(n.position.copy(P),z=!1):n.position.lerp(P,1-Math.exp(-E*14)),jt(n.position),n.lookAt(U),n.updateMatrixWorld()}function an(E,B,k){ve.fillStyle=B,ve.beginPath(),ve.arc(Pn(E.x),Pn(E.z),k,0,Math.PI*2),ve.fill()}function Eo(E,B){let k=wh(Qt),Z=Math.round(Ct(E,nn));Ot("detail").textContent="Casa "+Z+" m \xB7 Loja "+Math.round(Ct(E,ss))+" m",Ot("cash").textContent="R$ "+fe.toLocaleString("pt-BR"),Ot("crew").textContent="Gangue "+ut.length+" / 3";let N=Ot("prompt"),wt=sn==="pad"?"Y \xB7 ":sn==="keyboard"?"E \xB7 ":"",vt=wo(),Tt=rr(),Yt=Q??T(),Ht=ot&&B&&qt<=0;N.hidden=!(Yt||vt||Tt||qt>0||Ht);let ue=Q?"Sair "+(Q.kind==="bike"?"da moto":"do carro"):Tt?"Salvar na cama":vt?"Abrir loja de armas":Yt?"Pegar "+(Yt.kind==="bike"?"a moto":"o cup\xEA"):"";N.textContent=qt>0?Ft:Ht?"Mantenha a mira \xB7 "+Math.ceil(ot.left)+" s":wt+ue,Ot("heat").hidden=!k,Ot("heat").textContent="\u2605".repeat(k)+" PROCURADO",Ot("mode").textContent=Q?lr(Q)+" \xB7 "+Math.round(Q.integrity)+"%":ct?"Pistola":"Vila Brasa",Ot("reading").textContent=Q?Math.round(Math.hypot(Q.vx,Q.vz)*3.6)+" km/h":ct?pe+" balas":"Punhos";let Me=Ot("health");Me.value=a.health,Me.title="Vida: "+Math.ceil(a.health)+"%",Ot("crosshair").hidden=!(B||ct&&et>0&&!Q),Ot("interact").textContent=Q?"Sair":Tt?"Salvar":vt?"Loja":"Entrar",Ot("sprint").textContent=Q?"Freio":"Correr",Ot("aim").hidden=Ot("fire").hidden=!!Q||!ct,Ot("weapon").hidden=!!Q||!te,Ot("weapon").textContent=ct?"Punhos":"Pistola",Ot("jump").hidden=Ot("punch").hidden=!!Q,Ot("recruit").hidden=!!Q||!B,Ot("hud").classList.toggle("armed",te&&!Q),Ot("hud").classList.toggle("driving",!!Q),ve.drawImage(ki,0,0);for(let jt of d)jt!==Q&&jt.integrity>0&&an(jt,jt.driver?"#82b9b3":"#eab987",jt.kind==="bike"?2.2:jt.driver?2.6:3.5);an(ss,"#eaff89",6),an(nn,"#dcc39b",5),an($e,"#99c6ff",5);for(let jt of y)(jt.mode==="driving"||jt.mode==="foot")&&an(jt.mode==="driving"?jt.car:jt.officer,"#ff7769",4.6);for(let jt of ut)an(jt,"#97ebaf",3.5);ve.save(),ve.translate(Pn(E.x),Pn(E.z)),ve.rotate(-(Q?Q.angle:a.angle)),ve.fillStyle="#fff9e6",ve.strokeStyle="#243938",ve.lineWidth=2.7,ve.beginPath(),ve.moveTo(0,10),ve.lineTo(-6,-6),ve.lineTo(0,-3),ve.lineTo(6,-6),ve.closePath(),ve.stroke(),ve.fill(),ve.restore()}function af(E){let B=(E-Ue)/1e3,k=xe(B,1/240,.05);Ue=E,qe+=k;let Z=Ro.read(!!Q,k);if(zi.open){Z.punch||Z.interact?si():Z.confirm&&sr(),t.render(e,n);return}if(de){if(Ut){sn=Z.mode;for(let Ht of p)g.set(Ht,{x:Ht.x,z:Ht.z,vx:Ht.vx,vz:Ht.vz});Z.weapon&&te&&!Q&&(ct=!ct,tt=null,et=0);let N=Z.aim&&ct&&!Q&&j<=0&&a.health>0;if(N!==zt&&(Re=N?.015:.22,zt=N),Ye=Math.abs(Z.lookX)+Math.abs(Z.lookY)>.003?0:Ye+k,$t-=Z.lookX,Re=xe(Re+Z.lookY,N?-1.03:-.31,.84),Q&&Ye>1.2&&(Re+=(.24-Re)*k),Le-=k,Wt-=k,De-=k,gt-=k,se-=k,qt-=k,Ve-=k,Et-=k,j=Math.max(0,j-k),Dt&&(Kt-=k,Kt<=0&&Te()),pt-=k,dt-=k,et-=k,xt-=k,I>0&&(I-=k,I<=0&&$()),S&&(S.delay-=k,S.delay<=0)){let Ht=S.car;S=null,a.health>0&&Ht.integrity>0&&Ct(a,Ht)<3.75&&Y(Ht)}if(Z.interact&&q(),zi.open)return;Ce(k,Q??a),Q?Qe(k,Z):Lt(k,{...Z,aim:N}),he(k,Q??a),Q&&(a.x=Q.x,a.z=Q.z),Q?.kind==="bike"&&_h(a.model,Q),He(k,Q??a),It(k),L.motor(Q?.speed??0,!!Q);let vt=Q??a,Tt=N&&!Q&&a.health>0;Z.fire&&ct&&!Q&&a.health>0&&pe>0&&(et=1.38),We(k,vt,Tt||!Q&&et>0),Tt&&(xt<=0||Z.recruit||Z.punch||Z.fire&&Wt<=0)?(tt=Nt(),xt=.092):Tt||(tt=null),Z.recruit&&!Q&&Pt(tt),oe(k,tt),(Z.punch||Z.fire&&!ct)&&!Q&&Be(),Z.fire&&!Q&&ye(Tt),Mt.visible=Ve>0,lt.visible=Et>0,Ot("hitmark").hidden=pt<=0,Ot("impact").hidden=dt<=0,s.marker.visible=Ct(vt,ss)<19,s.beacon.rotation.y=qe*2,s.beacon.position.y=2.55+Math.sin(qe*4)*.27,Ke-=k,Ke<=0&&(Eo(vt,Tt),Ke=.1)}}else{let N=.54+Math.sin(qe*.13)*.19,wt=n.aspect<1?26:30;n.position.set(24+Math.sin(N)*wt,14,17+Math.cos(N)*wt),n.lookAt(10,2,13),He(k,a,!0)}t.render(e,n),Ut&&tr.value==="auto"&&B>0&&B<.22&&yt>.7&&(Oe+=B,++me>=85&&(Oe/me>.026&&(yt=Math.max(.69,yt-.16),Si()),me=0,Oe=0))}let Ro=Qd(()=>{zi.open?si():Ut?vn(!1):Eh()},()=>Ut),kl=zl("quality");(kl==="low"||kl==="high")&&(tr.value=kl),tr.addEventListener("change",()=>{zl("quality",tr.value),yt=1,Si()}),Ot("sound").addEventListener("click",()=>{zl("sound",L.toggle()?"on":"off"),ir()}),Ot("pause").addEventListener("click",()=>vn(!1)),Ot("reset").addEventListener("click",()=>{ds(),vn(!0)}),er.addEventListener("click",sr),Ot("close-shop").addEventListener("click",si),zi.addEventListener("cancel",E=>{E.preventDefault(),si()});function Eh(){if(!de&&D){Object.assign(a,{x:D.x,z:D.z,health:D.health}),fe=D.cash,te=D.armed,ct=te&&D.equipped,pe=te?D.ammo:0;for(let E of new Set(D.recruits)){let B=m[E];B&&(B.role="ally",ut.push(B))}vn(!0),$t=-Math.PI/2}else vn(!0)}nr.addEventListener("click",Eh),document.addEventListener("visibilitychange",()=>{document.hidden&&Ut&&vn(!1)}),window.addEventListener("resize",Si),t.domElement.addEventListener("webglcontextrestored",Si),ds(),ir(),Si(),st(),nr.disabled=!1,Ue=performance.now(),t.setAnimationLoop(af)}try{O_()}catch(i){console.error(i),nr.textContent="3D indispon\xEDvel",Ot("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
