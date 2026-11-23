(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var hd=0,Hh=1,ud=2;var Ks=1,fd=2,kr=3,Is=0,Cn=1,zn=2,$s=0,Ps=1,ea=2,Wh=3,Xh=4,dd=5;var js=100,pd=101,md=102,gd=103,xd=104,_d=200,yd=201,vd=202,Md=203,qh=204,Yh=205,bd=206,Sd=207,wd=208,Td=209,Ad=210,Ed=211,Cd=212,Rd=213,Id=214,ll=0,cl=1,hl=2,Lr=3,ul=4,fl=5,dl=6,pl=7,Zh=0,Pd=1,Ld=2,Oi=0,Jh=1,Kh=2,$h=3,ta=4,jh=5,Qh=6,eu=7;var tu=300,Qs=301,Gr=302,Fl=303,Ol=304,ml=1e3,zi=1001,gl=1002,bn=1003,Dd=1004;var na=1005;var Sn=1006,Bl=1007;var is=1008;var jn=1009,nu=1010,iu=1011,Vr=1012,kl=1013,Mi=1014,fi=1015,bi=1016,Gl=1017,Vl=1018,er=1020,su=35902,ru=35899,ou=1021,au=1022,ri=1023,$i=1026,ss=1027,Hl=1028,Wl=1029,Ls=1030,Xl=1031;var ql=1033,ia=33776,sa=33777,ra=33778,oa=33779,Yl=35840,Zl=35841,Jl=35842,Kl=35843,$l=36196,jl=37492,Ql=37496,ec=37488,tc=37489,aa=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,xc=36492,_c=36494,yc=36495,vc=36283,Mc=36284,la=36285,bc=36286;var Ro=2300,xl=2301,ol=2302,Nh=2303,zh=2400,Uh=2401,Fh=2402;var Nd=3200;var Sc=0,zd=1,rs="",xn="srgb",Io="srgb-linear",Po="linear",Vt="srgb";var al=7680;var Ud=519,Fd=512,Od=513,Bd=514,lu=515,kd=516,Gd=517,cu=518,hu=519,Vd=35044,wc=35048;var uu="300 es",ui=2e3,Dr=2001;function U0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function F0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hd(){let n=Lo("canvas");return n.style.display="block",n}var Uf={},Nr=null;function fu(...n){let e="THREE."+n.shift();Nr?Nr("log",e,...n):console.log(e,...n)}function Wd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=Wd(n);let e="THREE."+n.shift();if(Nr)Nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ft(...n){n=Wd(n);let e="THREE."+n.shift();if(Nr)Nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ao(...n){let e=n.join(" ");e in Uf||(Uf[e]=!0,ot(...n))}function Xd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var qd={[ll]:ll,[hl]:dl,[ul]:ul,[Lr]:fl,[cl]:cl,[dl]:hl,[pl]:pl,[fl]:Lr},Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=1234567,Eo=Math.PI/180,zr=180/Math.PI;function Hr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function du(n,e){return(n%e+e)%e}function O0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function B0(n,e,t){return n!==e?(t-n)/(e-n):0}function Co(n,e,t){return(1-t)*n+t*e}function k0(n,e,t,i){return Co(n,e,1-Math.exp(-t*i))}function G0(n,e=1){return e-Math.abs(du(n,e*2)-e)}function V0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function H0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function W0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function X0(n,e){return n+Math.random()*(e-n)}function q0(n){return n*(.5-Math.random())}function Y0(n){n!==void 0&&(Ff=n);let e=Ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Z0(n){return n*Eo}function J0(n){return n*zr}function K0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function $0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function j0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),h=o(t/2),l=r((e+i)/2),f=o((e+i)/2),d=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),u=o((i-e)/2);switch(s){case"XYX":n.set(a*f,h*d,h*p,a*l);break;case"YZY":n.set(h*p,a*f,h*d,a*l);break;case"ZXZ":n.set(h*d,h*p,a*f,a*l);break;case"XZX":n.set(a*f,h*u,h*m,a*l);break;case"YXY":n.set(h*m,a*f,h*u,a*l);break;case"ZYZ":n.set(h*u,h*m,a*f,a*l);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yd(n,e){if(e.constructor===Float32Array)return n;let t=mu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Zd(n,e){if(e.constructor===Float32Array)return n;let t=mu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Wr={DEG2RAD:Eo,RAD2DEG:zr,generateUUID:Hr,clamp:Rt,euclideanModulo:du,mapLinear:O0,inverseLerp:B0,lerp:Co,damp:k0,pingpong:G0,smoothstep:V0,smootherstep:H0,randInt:W0,randFloat:X0,randFloatSpread:q0,seededRandom:Y0,degToRad:Z0,radToDeg:J0,isPowerOfTwo:K0,ceilPowerOfTwo:$0,floorPowerOfTwo:pu,setQuaternionFromProperEuler:j0,normalize:Zd,denormalize:Yd},yt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let h=i[s+0],l=i[s+1],f=i[s+2],d=i[s+3],p=r[o+0],m=r[o+1],u=r[o+2],M=r[o+3];if(d!==M||h!==p||l!==m||f!==u){let g=h*p+l*m+f*u+d*M;g<0&&(p=-p,m=-m,u=-u,M=-M,g=-g);let _=1-a;if(g<.9995){let T=Math.acos(g),R=Math.sin(T);_=Math.sin(_*T)/R,a=Math.sin(a*T)/R,h=h*_+p*a,l=l*_+m*a,f=f*_+u*a,d=d*_+M*a}else{h=h*_+p*a,l=l*_+m*a,f=f*_+u*a,d=d*_+M*a;let T=1/Math.sqrt(h*h+l*l+f*f+d*d);h*=T,l*=T,f*=T,d*=T}}e[t]=h,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],h=i[s+1],l=i[s+2],f=i[s+3],d=r[o],p=r[o+1],m=r[o+2],u=r[o+3];return e[t]=a*u+f*d+h*m-l*p,e[t+1]=h*u+f*p+l*d-a*m,e[t+2]=l*u+f*m+a*p-h*d,e[t+3]=f*u-a*d-h*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,h=Math.sin,l=a(i/2),f=a(s/2),d=a(r/2),p=h(i/2),m=h(s/2),u=h(r/2);switch(o){case"XYZ":this._x=p*f*d+l*m*u,this._y=l*m*d-p*f*u,this._z=l*f*u+p*m*d,this._w=l*f*d-p*m*u;break;case"YXZ":this._x=p*f*d+l*m*u,this._y=l*m*d-p*f*u,this._z=l*f*u-p*m*d,this._w=l*f*d+p*m*u;break;case"ZXY":this._x=p*f*d-l*m*u,this._y=l*m*d+p*f*u,this._z=l*f*u+p*m*d,this._w=l*f*d-p*m*u;break;case"ZYX":this._x=p*f*d-l*m*u,this._y=l*m*d+p*f*u,this._z=l*f*u-p*m*d,this._w=l*f*d+p*m*u;break;case"YZX":this._x=p*f*d+l*m*u,this._y=l*m*d+p*f*u,this._z=l*f*u-p*m*d,this._w=l*f*d-p*m*u;break;case"XZY":this._x=p*f*d-l*m*u,this._y=l*m*d-p*f*u,this._z=l*f*u+p*m*d,this._w=l*f*d+p*m*u;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],h=t[9],l=t[2],f=t[6],d=t[10],p=i+a+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-h)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(f-h)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(h+f)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(h+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,h=t._y,l=t._z,f=t._w;return this._x=i*f+o*a+s*l-r*h,this._y=s*f+o*h+r*a-i*l,this._z=r*f+o*l+i*h-s*a,this._w=o*f-i*a-s*h-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let h=1-t;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);h=Math.sin(h*l)/f,t=Math.sin(t*l)/f,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Of.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,h=e.w,l=2*(o*s-a*i),f=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+h*l+o*d-a*f,this.y=i+h*f+a*l-r*d,this.z=s+h*d+r*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,h=t.z;return this.x=s*h-r*a,this.y=r*o-i*h,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ph=new $,Of=new un,at=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,h,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,h,l)}set(e,t,i,s,r,o,a,h,l){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=h,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],f=i[4],d=i[7],p=i[2],m=i[5],u=i[8],M=s[0],g=s[3],_=s[6],T=s[1],R=s[4],b=s[7],E=s[2],S=s[5],x=s[8];return r[0]=o*M+a*T+h*E,r[3]=o*g+a*R+h*S,r[6]=o*_+a*b+h*x,r[1]=l*M+f*T+d*E,r[4]=l*g+f*R+d*S,r[7]=l*_+f*b+d*x,r[2]=p*M+m*T+u*E,r[5]=p*g+m*R+u*S,r[8]=p*_+m*b+u*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-i*r*f+i*a*h+s*r*l-s*o*h}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],f=e[8],d=f*o-a*l,p=a*h-f*r,m=l*r-o*h,u=t*d+i*p+s*m;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/u;return e[0]=d*M,e[1]=(s*l-f*i)*M,e[2]=(a*i-s*o)*M,e[3]=p*M,e[4]=(f*t-s*h)*M,e[5]=(s*r-a*t)*M,e[6]=m*M,e[7]=(i*h-l*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*o+l*a)+o+e,-s*l,s*h,-s*(-l*o+h*a)+a+t,0,0,1),this}scale(e,t){return Ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,t)),this}rotate(e){return Ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return Ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mh=new at,Bf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q0(){let n={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Vt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?Po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Io]:{primaries:e,whitePoint:i,transfer:Po,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),n}var Ct=Q0();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xr,_l=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xr===void 0&&(xr=Lo("canvas")),xr.width=e.width,xr.height=e.height;let s=xr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=xr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,Ur=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gh(s[o].image)):r.push(gh(s[o]))}else r=gh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_l.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}var tg=0,xh=new $,Hn=class n extends Ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=zi,s=zi,r=Sn,o=is,a=ri,h=jn,l=n.DEFAULT_ANISOTROPY,f=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Hr(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ml:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ml:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=tu;Hn.DEFAULT_ANISOTROPY=1;var jt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,h=e.elements,l=h[0],f=h[4],d=h[8],p=h[1],m=h[5],u=h[9],M=h[2],g=h[6],_=h[10];if(Math.abs(f-p)<.01&&Math.abs(d-M)<.01&&Math.abs(u-g)<.01){if(Math.abs(f+p)<.1&&Math.abs(d+M)<.1&&Math.abs(u+g)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,b=(m+1)/2,E=(_+1)/2,S=(f+p)/4,x=(d+M)/4,w=(u+g)/4;return R>b&&R>E?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=S/i,r=x/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=w/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-u)*(g-u)+(d-M)*(d-M)+(p-f)*(p-f));return Math.abs(T)<.001&&(T=1),this.x=(g-u)/T,this.y=(d-M)/T,this.z=(p-f)/T,this.w=Math.acos((l+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Hn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ur(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Do=class extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var It=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,h,l,f,d,p,m,u,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,h,l,f,d,p,m,u,M,g)}set(e,t,i,s,r,o,a,h,l,f,d,p,m,u,M,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=h,_[2]=l,_[6]=f,_[10]=d,_[14]=p,_[3]=m,_[7]=u,_[11]=M,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(s),l=Math.sin(s),f=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*f,m=o*d,u=a*f,M=a*d;t[0]=h*f,t[4]=-h*d,t[8]=l,t[1]=m+u*l,t[5]=p-M*l,t[9]=-a*h,t[2]=M-p*l,t[6]=u+m*l,t[10]=o*h}else if(e.order==="YXZ"){let p=h*f,m=h*d,u=l*f,M=l*d;t[0]=p+M*a,t[4]=u*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=m*a-u,t[6]=M+p*a,t[10]=o*h}else if(e.order==="ZXY"){let p=h*f,m=h*d,u=l*f,M=l*d;t[0]=p-M*a,t[4]=-o*d,t[8]=u+m*a,t[1]=m+u*a,t[5]=o*f,t[9]=M-p*a,t[2]=-o*l,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){let p=o*f,m=o*d,u=a*f,M=a*d;t[0]=h*f,t[4]=u*l-m,t[8]=p*l+M,t[1]=h*d,t[5]=M*l+p,t[9]=m*l-u,t[2]=-l,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){let p=o*h,m=o*l,u=a*h,M=a*l;t[0]=h*f,t[4]=M-p*d,t[8]=u*d+m,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*d+u,t[10]=p-M*d}else if(e.order==="XZY"){let p=o*h,m=o*l,u=a*h,M=a*l;t[0]=h*f,t[4]=-d,t[8]=l*f,t[1]=p*d+M,t[5]=o*f,t[9]=m*d-u,t[2]=u*d-m,t[6]=a*f,t[10]=M*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,i){let s=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),_s.crossVectors(i,ti),_s.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),_s.crossVectors(i,ti)),_s.normalize(),Fa.crossVectors(ti,_s),s[0]=_s.x,s[4]=Fa.x,s[8]=ti.x,s[1]=_s.y,s[5]=Fa.y,s[9]=ti.y,s[2]=_s.z,s[6]=Fa.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],f=i[1],d=i[5],p=i[9],m=i[13],u=i[2],M=i[6],g=i[10],_=i[14],T=i[3],R=i[7],b=i[11],E=i[15],S=s[0],x=s[4],w=s[8],L=s[12],I=s[1],P=s[5],k=s[9],O=s[13],F=s[2],te=s[6],H=s[10],W=s[14],se=s[3],Q=s[7],B=s[11],G=s[15];return r[0]=o*S+a*I+h*F+l*se,r[4]=o*x+a*P+h*te+l*Q,r[8]=o*w+a*k+h*H+l*B,r[12]=o*L+a*O+h*W+l*G,r[1]=f*S+d*I+p*F+m*se,r[5]=f*x+d*P+p*te+m*Q,r[9]=f*w+d*k+p*H+m*B,r[13]=f*L+d*O+p*W+m*G,r[2]=u*S+M*I+g*F+_*se,r[6]=u*x+M*P+g*te+_*Q,r[10]=u*w+M*k+g*H+_*B,r[14]=u*L+M*O+g*W+_*G,r[3]=T*S+R*I+b*F+E*se,r[7]=T*x+R*P+b*te+E*Q,r[11]=T*w+R*k+b*H+E*B,r[15]=T*L+R*O+b*W+E*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],h=e[9],l=e[13],f=e[2],d=e[6],p=e[10],m=e[14],u=e[3],M=e[7],g=e[11],_=e[15],T=h*m-l*p,R=a*m-l*d,b=a*p-h*d,E=o*m-l*f,S=o*p-h*f,x=o*d-a*f;return t*(M*T-g*R+_*b)-i*(u*T-g*E+_*S)+s*(u*R-M*E+_*x)-r*(u*b-M*S+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],h=e[2],l=e[6],f=e[10];return t*(o*f-a*l)-i*(r*f-a*h)+s*(r*l-o*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],f=e[8],d=e[9],p=e[10],m=e[11],u=e[12],M=e[13],g=e[14],_=e[15],T=t*a-i*o,R=t*h-s*o,b=t*l-r*o,E=i*h-s*a,S=i*l-r*a,x=s*l-r*h,w=f*M-d*u,L=f*g-p*u,I=f*_-m*u,P=d*g-p*M,k=d*_-m*M,O=p*_-m*g,F=T*O-R*k+b*P+E*I-S*L+x*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let te=1/F;return e[0]=(a*O-h*k+l*P)*te,e[1]=(s*k-i*O-r*P)*te,e[2]=(M*x-g*S+_*E)*te,e[3]=(p*S-d*x-m*E)*te,e[4]=(h*I-o*O-l*L)*te,e[5]=(t*O-s*I+r*L)*te,e[6]=(g*b-u*x-_*R)*te,e[7]=(f*x-p*b+m*R)*te,e[8]=(o*k-a*I+l*w)*te,e[9]=(i*I-t*k-r*w)*te,e[10]=(u*S-M*b+_*T)*te,e[11]=(d*b-f*S-m*T)*te,e[12]=(a*L-o*P-h*w)*te,e[13]=(t*P-i*L+s*w)*te,e[14]=(M*R-u*E-g*T)*te,e[15]=(f*E-d*R+p*T)*te,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,h=e.z,l=r*o,f=r*a;return this.set(l*o+i,l*a-s*h,l*h+s*a,0,l*a+s*h,f*a+i,f*h-s*o,0,l*h-s*a,f*h+s*o,r*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,h=t._w,l=r+r,f=o+o,d=a+a,p=r*l,m=r*f,u=r*d,M=o*f,g=o*d,_=a*d,T=h*l,R=h*f,b=h*d,E=i.x,S=i.y,x=i.z;return s[0]=(1-(M+_))*E,s[1]=(m+b)*E,s[2]=(u-R)*E,s[3]=0,s[4]=(m-b)*S,s[5]=(1-(p+_))*S,s[6]=(g+T)*S,s[7]=0,s[8]=(u+R)*x,s[9]=(g-T)*x,s[10]=(1-(p+M))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=_r.set(s[0],s[1],s[2]).length(),a=_r.set(s[4],s[5],s[6]).length(),h=_r.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let l=1/o,f=1/a,d=1/h;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=f,gi.elements[5]*=f,gi.elements[6]*=f,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,t.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=h,this}makePerspective(e,t,i,s,r,o,a=ui,h=!1){let l=this.elements,f=2*r/(t-e),d=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s),u,M;if(h)u=r/(o-r),M=o*r/(o-r);else if(a===ui)u=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Dr)u=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ui,h=!1){let l=this.elements,f=2/(t-e),d=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s),u,M;if(h)u=1/(o-r),M=o/(o-r);else if(a===ui)u=-2/(o-r),M=-(o+r)/(o-r);else if(a===Dr)u=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=u,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},_r=new $,gi=new It,ng=new $(0,0,0),ig=new $(1,1,1),_s=new $,Fa=new $,ti=new $,Gf=new It,Vf=new un,vi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],f=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vf.setFromEuler(this),this.setFromQuaternion(Vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var No=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,Hf=new $,yr=new un,Xi=new It,Oa=new $,vo=new $,rg=new $,og=new un,Wf=new $(1,0,0),Xf=new $(0,1,0),qf=new $(0,0,1),Yf={type:"added"},ag={type:"removed"},vr={type:"childadded",child:null},_h={type:"childremoved",child:null},Jt=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new $,t=new vi,i=new un,s=new $(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new at}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Wf,e)}rotateY(e){return this.rotateOnAxis(Xf,e)}rotateZ(e){return this.rotateOnAxis(qf,e)}translateOnAxis(e,t){return Hf.copy(e).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wf,e)}translateY(e){return this.translateOnAxis(Xf,e)}translateZ(e){return this.translateOnAxis(qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oa.copy(e):Oa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(vo,Oa,this.up):Xi.lookAt(Oa,vo,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Xi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yf),vr.child=e,this.dispatchEvent(vr),vr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ag),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yf),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,f=h.length;l<f;l++){let d=h[l];r(e.shapes,d)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(e.materials,this.material[h]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(e.animations,h))}}if(t){let a=o(e.geometries),h=o(e.materials),l=o(e.textures),f=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),u=o(e.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),u.length>0&&(i.nodes=u)}return i.object=s,i;function o(a){let h=[];for(let l in a){let f=a[l];delete f.metadata,h.push(f)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new $(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var At=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,i),_=this._getHandJoint(l,M);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=f.position.distanceTo(d.position),m=.02,u=.005;l.inputState.pinching&&p>m+u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new At;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=du(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=yh(o,r,e+1/3),this.g=yh(o,r,e),this.b=yh(o,r,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=xn){function i(r){r!==void 0&&parseFloat(r)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let i=Jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Ct.workingToColorSpace(Dn.copy(this),e),Math.round(Rt(Dn.r*255,0,255))*65536+Math.round(Rt(Dn.g*255,0,255))*256+Math.round(Rt(Dn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Dn.copy(this),t);let i=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),h,l,f=(a+o)/2;if(a===o)h=0,l=0;else{let d=o-a;switch(l=f<=.5?d/(o+a):d/(2-o-a),o){case i:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-i)/d+2;break;case r:h=(i-s)/d+4;break}h/=6}return e.h=h,e.s=l,e.l=f,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=xn){Ct.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,i=Dn.g,s=Dn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Ba);let i=Co(ys.h,Ba.h,t),s=Co(ys.s,Ba.s,t),r=Co(ys.l,Ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new et;et.NAMES=Jd;var zo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Uo=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new $,qi=new $,vh=new $,Yi=new $,Mr=new $,br=new $,Zf=new $,Mh=new $,bh=new $,Sh=new $,wh=new jt,Th=new jt,Ah=new jt,Ss=class n{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xi.subVectors(s,t),qi.subVectors(i,t),vh.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(qi),h=xi.dot(vh),l=qi.dot(qi),f=qi.dot(vh),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(l*h-a*f)*p,u=(o*f-a*h)*p;return r.set(1-m-u,u,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,h){return this.getBarycoord(e,t,i,s,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Yi.x),h.addScaledVector(o,Yi.y),h.addScaledVector(a,Yi.z),h)}static getInterpolatedAttribute(e,t,i,s,r,o){return wh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),wh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wh,r.x),o.addScaledVector(Th,r.y),o.addScaledVector(Ah,r.z),o}static isFrontFacing(e,t,i,s){return xi.subVectors(i,t),qi.subVectors(e,t),xi.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),xi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Mr.subVectors(s,i),br.subVectors(r,i),Mh.subVectors(e,i);let h=Mr.dot(Mh),l=br.dot(Mh);if(h<=0&&l<=0)return t.copy(i);bh.subVectors(e,s);let f=Mr.dot(bh),d=br.dot(bh);if(f>=0&&d<=f)return t.copy(s);let p=h*d-f*l;if(p<=0&&h>=0&&f<=0&&h-f>0)return o=h/(h-f),t.copy(i).addScaledVector(Mr,o);Sh.subVectors(e,r);let m=Mr.dot(Sh),u=br.dot(Sh);if(u>=0&&m<=u)return t.copy(r);let M=m*l-h*u;if(M<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(br,a);let g=f*u-m*d;if(g<=0&&d-f>=0&&m-u>=0)return Zf.subVectors(r,s),a=(d-f)/(d-f+(m-u)),t.copy(s).addScaledVector(Zf,a);let _=1/(g+M+p);return o=M*_,a=p*_,t.copy(i).addScaledVector(Mr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fi=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ga.subVectors(this.max,Mo),Sr.subVectors(e.a,Mo),wr.subVectors(e.b,Mo),Tr.subVectors(e.c,Mo),vs.subVectors(wr,Sr),Ms.subVectors(Tr,wr),Hs.subVectors(Sr,Tr);let t=[0,-vs.z,vs.y,0,-Ms.z,Ms.y,0,-Hs.z,Hs.y,vs.z,0,-vs.x,Ms.z,0,-Ms.x,Hs.z,0,-Hs.x,-vs.y,vs.x,0,-Ms.y,Ms.x,0,-Hs.y,Hs.x,0];return!Eh(t,Sr,wr,Tr,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,Sr,wr,Tr,Ga))?!1:(Va.crossVectors(vs,Ms),t=[Va.x,Va.y,Va.z],Eh(t,Sr,wr,Tr,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new $,new $,new $,new $,new $,new $,new $,new $],_i=new $,ka=new Fi,Sr=new $,wr=new $,Tr=new $,vs=new $,Ms=new $,Hs=new $,Mo=new $,Ga=new $,Va=new $,Ws=new $;function Eh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ws.fromArray(n,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),h=e.dot(Ws),l=t.dot(Ws),f=i.dot(Ws);if(Math.max(-Math.max(h,l,f),Math.min(h,l,f))>a)return!1}return!0}var pn=new $,Ha=new yt,cg=0,ln=class extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vd,this.updateRanges=[],this.gpuType=fi,this.version=0,this._normalizationScale=e!==void 0?mu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zd(e,this.array)}};var Fo=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Oo=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pt=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},hg=new Fi,bo=new $,Ch=new $,ji=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):hg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);let t=bo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(bo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Ch)),this.expandByPoint(bo.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ug=0,hi=new It,Rh=new Jt,Ar=new $,ni=new Fi,So=new Fi,Mn=new $,Qt=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?Oo:Fo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(ni.min,So.min),ni.expandByPoint(Mn),Mn.addVectors(ni.max,So.max),ni.expandByPoint(Mn)):(ni.expandByPoint(So.min),ni.expandByPoint(So.max))}ni.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],h=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Mn.fromBufferAttribute(a,l),h&&(Ar.fromBufferAttribute(e,l),Mn.add(Ar)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],h=[],l=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new $,h[L]=new $;let f=new $,d=new $,p=new $,m=new yt,u=new yt,M=new yt,g=new $,_=new $;function T(L,I,P){l[L]=l[I]=l[P]=1,f.fromBufferAttribute(i,L),d.fromBufferAttribute(i,I),p.fromBufferAttribute(i,P),m.fromBufferAttribute(r,L),u.fromBufferAttribute(r,I),M.fromBufferAttribute(r,P),d.sub(f),p.sub(f),u.sub(m),M.sub(m);let k=1/(u.x*M.y-M.x*u.y);isFinite(k)&&(g.copy(d).multiplyScalar(M.y).addScaledVector(p,-u.y).multiplyScalar(k),_.copy(p).multiplyScalar(u.x).addScaledVector(d,-M.x).multiplyScalar(k),a[L].add(g),a[I].add(g),a[P].add(g),h[L].add(_),h[I].add(_),h[P].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,I=R.length;L<I;++L){let P=R[L],k=P.start,O=P.count;for(let F=k,te=k+O;F<te;F+=3)T(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new $,E=new $,S=new $,x=new $;function w(L){S.fromBufferAttribute(s,L),x.copy(S);let I=a[L];b.copy(I),b.sub(S.multiplyScalar(S.dot(I))).normalize(),E.crossVectors(x,I);let k=E.dot(h[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,k)}for(let L=0,I=i.count;L<I;++L)l[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new $,r=new $,o=new $,a=new $,h=new $,l=new $,f=new $,d=new $;if(e)for(let p=0,m=e.count;p<m;p+=3){let u=e.getX(p+0),M=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,u),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),a.fromBufferAttribute(i,u),h.fromBufferAttribute(i,M),l.fromBufferAttribute(i,g),a.add(f),h.add(f),l.add(f),i.setXYZ(u,a.x,a.y,a.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,h){let l=a.array,f=a.itemSize,d=a.normalized,p=new l.constructor(h.length*f),m=0,u=0;for(let M=0,g=h.length;M<g;M++){a.isInterleavedBufferAttribute?m=h[M]*a.data.stride+a.offset:m=h[M]*f;for(let _=0;_<f;_++)p[u++]=l[m++]}return new ln(p,f,d)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let h=s[a],l=e(h,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let h=[],l=r[a];for(let f=0,d=l.length;f<d;f++){let p=l[f],m=e(p,i);h.push(m)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let h in i){let l=i[h];e.data.attributes[h]=l.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],f=[];for(let d=0,p=l.length;d<p;d++){let m=l[d];f.push(m.toJSON(e.data))}f.length>0&&(s[h]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],d=r[l];for(let p=0,m=d.length;p<m;p++)f.push(d[p].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,f=o.length;l<f;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ih=new $,fg=new $,dg=new at,yi=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ih.subVectors(i,t).cross(fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ih),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dg.getNormalMatrix(e),s=this.coplanarPoint(Ih).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pg=0,Qi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Ps,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new yt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ji=new $,Ph=new $,Wa=new $,Xa=new $,Bo=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ph.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Xa.copy(this.origin).sub(Ph);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Xa.dot(this.direction),h=-Xa.dot(Wa),l=Xa.lengthSq(),f=Math.abs(1-o*o),d,p,m,u;if(f>0)if(d=o*h-a,p=o*a-h,u=r*f,d>=0)if(p>=-u)if(p<=u){let M=1/f;d*=M,p*=M,m=d*(d+o*p+2*a)+p*(o*d+p+2*h)+l}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*h)+l;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*h)+l;else p<=-u?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-h),r),m=-d*d+p*(p+2*h)+l):p<=u?(d=0,p=Math.min(Math.max(-r,-h),r),m=p*(p+2*h)+l):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-h),r),m=-d*d+p*(p+2*h)+l);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ph).addScaledVector(Wa,p),m}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);let i=Ji.dot(this.direction),s=Ji.dot(Ji)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,h,l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),f>=0?(r=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(r=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,h=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,h=(e.min.z-p.z)*d),i>h||a>s)||((a>i||i!==i)&&(i=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,h=a.x,l=a.y,f=a.z,d=e.x-o.x,p=e.y-o.y,m=e.z-o.z,u=t.x-o.x,M=t.y-o.y,g=t.z-o.z,_=i.x-o.x,T=i.y-o.y,R=i.z-o.z,b=Math.abs(h),E=Math.abs(l),S=Math.abs(f),x,w,L,I,P,k,O,F,te,H,W,se;if(b>=E&&b>=S?(L=h,k=d,te=u,se=_,h>=0?(x=l,w=f,I=p,P=m,O=M,F=g,H=T,W=R):(x=f,w=l,I=m,P=p,O=g,F=M,H=R,W=T)):E>=S?(L=l,k=p,te=M,se=T,l>=0?(x=f,w=h,I=m,P=d,O=g,F=u,H=R,W=_):(x=h,w=f,I=d,P=m,O=u,F=g,H=_,W=R)):(L=f,k=m,te=g,se=R,f>=0?(x=h,w=l,I=d,P=p,O=u,F=M,H=_,W=T):(x=l,w=h,I=p,P=d,O=M,F=u,H=T,W=_)),L===0)return null;let Q=x/L,B=w/L,G=1/L,J=I-Q*k,j=P-B*k,K=O-Q*te,le=F-B*te,Y=H-Q*se,de=W-B*se,re=Y*le-de*K,Ie=J*de-j*Y,nt=K*j-le*J;if(s){if(re<0||Ie<0||nt<0)return null}else if((re<0||Ie<0||nt<0)&&(re>0||Ie>0||nt>0))return null;let De=re+Ie+nt;if(De===0)return null;let Oe=G*(re*k+Ie*te+nt*se);return(De>0?Oe<0:Oe>0)?null:this.at(Oe/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jf=new It,Xs=new Bo,qa=new ji,Kf=new $,Ya=new $,Za=new $,Ja=new $,Lh=new $,Ka=new $,$f=new $,$a=new $,Tt=class extends Jt{constructor(e=new Qt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let f=a[h],d=r[h];f!==0&&(Lh.fromBufferAttribute(d,e),o?Ka.addScaledVector(Lh,f):Ka.addScaledVector(Lh.sub(t),f))}t.add(Ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(qa.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(qa,Kf)===null||Xs.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(Jf.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Jf),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let u=0,M=p.length;u<M;u++){let g=p[u],_=o[g.materialIndex],T=Math.max(g.start,m.start),R=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,E=R;b<E;b+=3){let S=a.getX(b),x=a.getX(b+1),w=a.getX(b+2);s=ja(this,_,e,i,l,f,d,S,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let u=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=u,_=M;g<_;g+=3){let T=a.getX(g),R=a.getX(g+1),b=a.getX(g+2);s=ja(this,o,e,i,l,f,d,T,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let u=0,M=p.length;u<M;u++){let g=p[u],_=o[g.materialIndex],T=Math.max(g.start,m.start),R=Math.min(h.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,E=R;b<E;b+=3){let S=b,x=b+1,w=b+2;s=ja(this,_,e,i,l,f,d,S,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let u=Math.max(0,m.start),M=Math.min(h.count,m.start+m.count);for(let g=u,_=M;g<_;g+=3){let T=g,R=g+1,b=g+2;s=ja(this,o,e,i,l,f,d,T,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function mg(n,e,t,i,s,r,o,a){let h;if(e.side===Cn?h=i.intersectTriangle(o,r,s,!0,a):h=i.intersectTriangle(s,r,o,e.side===Is,a),h===null)return null;$a.copy(a),$a.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo($a);return l<t.near||l>t.far?null:{distance:l,point:$a.clone(),object:n}}function ja(n,e,t,i,s,r,o,a,h,l){n.getVertexPosition(a,Ya),n.getVertexPosition(h,Za),n.getVertexPosition(l,Ja);let f=mg(n,e,t,i,Ya,Za,Ja,$f);if(f){let d=new $;Ss.getBarycoord($f,Ya,Za,Ja,d),s&&(f.uv=Ss.getInterpolatedAttribute(s,a,h,l,d,new yt)),r&&(f.uv1=Ss.getInterpolatedAttribute(r,a,h,l,d,new yt)),o&&(f.normal=Ss.getInterpolatedAttribute(o,a,h,l,d,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let p={a,b:h,c:l,normal:new $,materialIndex:0};Ss.getNormal(Ya,Za,Ja,p.normal),f.face=p,f.barycoord=d}return f}var Ys=class extends Hn{constructor(e=null,t=1,i=1,s,r,o,a,h,l=bn,f=bn,d,p){super(null,o,a,h,l,f,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ws=class extends ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new It,jf=new It,Qa=[],Qf=new Fi,gg=new It,wo=new Tt,To=new ji,Wn=class extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),Qf.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),To.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(To)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),jf.multiplyMatrices(i,Er),wo.matrixWorld=jf,wo.raycast(e,Qa);for(let o=0,a=Qa.length;o<a;o++){let h=Qa[o];h.instanceId=r,h.object=this,t.push(h)}Qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ys(new Float32Array(s*this.count),s,this.count,Hl,fi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,h=s*e;return r[h]=a,r.set(i,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new ji,xg=new yt(.5,.5),el=new $,Ts=class{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],h=r[2],l=r[3],f=r[4],d=r[5],p=r[6],m=r[7],u=r[8],M=r[9],g=r[10],_=r[11],T=r[12],R=r[13],b=r[14],E=r[15];if(s[0].setComponents(l-o,m-f,_-u,E-T).normalize(),s[1].setComponents(l+o,m+f,_+u,E+T).normalize(),s[2].setComponents(l+a,m+d,_+M,E+R).normalize(),s[3].setComponents(l-a,m-d,_-M,E-R).normalize(),i)s[4].setComponents(h,p,g,b).normalize(),s[5].setComponents(l-h,m-p,_-g,E-b).normalize();else if(s[4].setComponents(l-h,m-p,_-g,E-b).normalize(),t===ui)s[5].setComponents(l+h,m+p,_+g,E+b).normalize();else if(t===Dr)s[5].setComponents(h,p,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=xg.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(el.x=s.normal.x>0?e.max.x:e.min.x,el.y=s.normal.y>0?e.max.y:e.min.y,el.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ed=new It,Ml=class n{constructor(){this.coordinateSystem=ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ed.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ts),i[s].setFromProjectionMatrix(ed,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ts),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var bl=class extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},td=new It,Oh=new Bo,tl=new ji,nl=new $,ko=class extends Jt{constructor(e=new Qt,t=new bl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;td.copy(s).invert(),Oh.copy(e.ray).applyMatrix4(td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=i.index,d=i.attributes.position;if(l!==null){let p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let u=p,M=m;u<M;u++){let g=l.getX(u);nl.fromBufferAttribute(d,g),nd(nl,g,h,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let u=p,M=m;u<M;u++)nl.fromBufferAttribute(d,u),nd(nl,u,h,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nd(n,e,t,i,s,r,o){let a=Oh.distanceSqToPoint(n);if(a<t){let h=new $;Oh.closestPointToPoint(n,h),h.applyMatrix4(i);let l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Go=class extends Hn{constructor(e=[],t=Qs,i,s,r,o,a,h,l,f){super(e,t,i,s,r,o,a,h,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zs=class extends Hn{constructor(e,t,i,s,r,o,a,h,l){super(e,t,i,s,r,o,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends Hn{constructor(e,t,i=Mi,s,r,o,a=bn,h=bn,l,f=$i,d=1){if(f!==$i&&f!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,o,a,h,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vo=class extends es{constructor(e,t=Mi,i=Qs,s,r,o=bn,a=bn,h,l=$i){let f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,h,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ho=class extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class n extends Qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],l=[],f=[],d=[],p=0,m=0;u("z","y","x",-1,-1,i,t,e,o,r,0),u("z","y","x",1,-1,i,t,-e,o,r,1),u("x","z","y",1,1,e,i,t,s,o,2),u("x","z","y",1,-1,e,i,-t,s,o,3),u("x","y","z",1,-1,e,t,i,s,r,4),u("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(d,2));function u(M,g,_,T,R,b,E,S,x,w,L){let I=b/x,P=E/w,k=b/2,O=E/2,F=S/2,te=x+1,H=w+1,W=0,se=0,Q=new $;for(let B=0;B<H;B++){let G=B*P-O;for(let J=0;J<te;J++){let j=J*I-k;Q[M]=j*T,Q[g]=G*R,Q[_]=F,l.push(Q.x,Q.y,Q.z),Q[M]=0,Q[g]=0,Q[_]=S>0?1:-1,f.push(Q.x,Q.y,Q.z),d.push(J/x),d.push(1-B/w),W+=1}}for(let B=0;B<w;B++)for(let G=0;G<x;G++){let J=p+G+te*B,j=p+G+te*(B+1),K=p+(G+1)+te*(B+1),le=p+(G+1)+te*B;h.push(J,j,le),h.push(j,K,le),se+=6}a.addGroup(m,se,L),m+=se,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Js=class n extends Qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],h=[],l=new $,f=new yt;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let m=i+d/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(o[p]/e+1)/2,f.y=(o[p+1]/e+1)/2,h.push(f.x,f.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xn=class n extends Qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};let l=this;s=Math.floor(s),r=Math.floor(r);let f=[],d=[],p=[],m=[],u=0,M=[],g=i/2,_=0;T(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(f),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(p,3)),this.setAttribute("uv",new Pt(m,2));function T(){let b=new $,E=new $,S=0,x=(t-e)/i;for(let w=0;w<=r;w++){let L=[],I=w/r,P=I*(t-e)+e;for(let k=0;k<=s;k++){let O=k/s,F=O*h+a,te=Math.sin(F),H=Math.cos(F);E.x=P*te,E.y=-I*i+g,E.z=P*H,d.push(E.x,E.y,E.z),b.set(te,x,H).normalize(),p.push(b.x,b.y,b.z),m.push(O,1-I),L.push(u++)}M.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let I=M[L][w],P=M[L+1][w],k=M[L+1][w+1],O=M[L][w+1];(e>0||L!==0)&&(f.push(I,P,O),S+=3),(t>0||L!==r-1)&&(f.push(P,k,O),S+=3)}l.addGroup(_,S,0),_+=S}function R(b){let E=u,S=new yt,x=new $,w=0,L=b===!0?e:t,I=b===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*I,0),p.push(0,I,0),m.push(.5,.5),u++;let P=u;for(let k=0;k<=s;k++){let F=k/s*h+a,te=Math.cos(F),H=Math.sin(F);x.x=L*H,x.y=g*I,x.z=L*te,d.push(x.x,x.y,x.z),p.push(0,I,0),S.x=te*.5+.5,S.y=H*.5*I+.5,m.push(S.x,S.y),u++}for(let k=0;k<s;k++){let O=E+k,F=P+k;b===!0?f.push(F,F+1,O):f.push(F+1,F,O),w+=3}l.addGroup(_,w,b===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Wo=class n extends Qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),f(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let R=new $,b=new $,E=new $;for(let S=0;S<t.length;S+=3)m(t[S+0],R),m(t[S+1],b),m(t[S+2],E),h(R,b,E,T)}function h(T,R,b,E){let S=E+1,x=[];for(let w=0;w<=S;w++){x[w]=[];let L=T.clone().lerp(b,w/S),I=R.clone().lerp(b,w/S),P=S-w;for(let k=0;k<=P;k++)k===0&&w===S?x[w][k]=L:x[w][k]=L.clone().lerp(I,k/P)}for(let w=0;w<S;w++)for(let L=0;L<2*(S-w)-1;L++){let I=Math.floor(L/2);L%2===0?(p(x[w][I+1]),p(x[w+1][I]),p(x[w][I])):(p(x[w][I+1]),p(x[w+1][I+1]),p(x[w+1][I]))}}function l(T){let R=new $;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(T),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function f(){let T=new $;for(let R=0;R<r.length;R+=3){T.x=r[R+0],T.y=r[R+1],T.z=r[R+2];let b=g(T)/2/Math.PI+.5,E=_(T)/Math.PI+.5;o.push(b,1-E)}u(),d()}function d(){for(let T=0;T<o.length;T+=6){let R=o[T+0],b=o[T+2],E=o[T+4],S=Math.max(R,b,E),x=Math.min(R,b,E);S>.9&&x<.1&&(R<.2&&(o[T+0]+=1),b<.2&&(o[T+2]+=1),E<.2&&(o[T+4]+=1))}}function p(T){r.push(T.x,T.y,T.z)}function m(T,R){let b=T*3;R.x=e[b+0],R.y=e[b+1],R.z=e[b+2]}function u(){let T=new $,R=new $,b=new $,E=new $,S=new yt,x=new yt,w=new yt;for(let L=0,I=0;L<r.length;L+=9,I+=6){T.set(r[L+0],r[L+1],r[L+2]),R.set(r[L+3],r[L+4],r[L+5]),b.set(r[L+6],r[L+7],r[L+8]),S.set(o[I+0],o[I+1]),x.set(o[I+2],o[I+3]),w.set(o[I+4],o[I+5]),E.copy(T).add(R).add(b).divideScalar(3);let P=g(E);M(S,I+0,T,P),M(x,I+2,R,P),M(w,I+4,b,P)}}function M(T,R,b,E){E<0&&T.x===1&&(o[R]=T.x-1),b.x===0&&b.z===0&&(o[R]=E/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function _(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var ts=class n extends Wo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ns=class n extends Wo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Kn=class n extends Qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),h=Math.floor(s),l=a+1,f=h+1,d=e/a,p=t/h,m=[],u=[],M=[],g=[];for(let _=0;_<f;_++){let T=_*p-o;for(let R=0;R<l;R++){let b=R*d-r;u.push(b,-T,0),M.push(0,0,1),g.push(R/a),g.push(1-_/h)}}for(let _=0;_<h;_++)for(let T=0;T<a;T++){let R=T+l*_,b=T+l*(_+1),E=T+1+l*(_+1),S=T+1+l*_;m.push(R,b,S),m.push(b,E,S)}this.setIndex(m),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Xo=class n extends Qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],h=[],l=[],f=[],d=e,p=(t-e)/s,m=new $,u=new yt;for(let M=0;M<=s;M++){for(let g=0;g<=i;g++){let _=r+g/i*o;m.x=d*Math.cos(_),m.y=d*Math.sin(_),h.push(m.x,m.y,m.z),l.push(0,0,1),u.x=(m.x/t+1)/2,u.y=(m.y/t+1)/2,f.push(u.x,u.y)}d+=p}for(let M=0;M<s;M++){let g=M*(i+1);for(let _=0;_<i;_++){let T=_+g,R=T,b=T+i+1,E=T+i+2,S=T+1;a.push(R,b,S),a.push(b,E,S)}}this.setIndex(a),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var As=class n extends Qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let h=Math.min(o+a,Math.PI),l=0,f=[],d=new $,p=new $,m=[],u=[],M=[],g=[];for(let _=0;_<=i;_++){let T=[],R=_/i,b=o+R*a,E=e*Math.cos(b),S=Math.sqrt(e*e-E*E),x=0;_===0&&o===0?x=.5/t:_===i&&h===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let L=w/t,I=s+L*r;d.x=-S*Math.cos(I),d.y=E,d.z=S*Math.sin(I),u.push(d.x,d.y,d.z),p.copy(d).normalize(),M.push(p.x,p.y,p.z),g.push(L+x,1-R),T.push(l++)}f.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){let R=f[_][T+1],b=f[_][T],E=f[_+1][T],S=f[_+1][T+1];(_!==0||o>0)&&m.push(R,b,S),(_!==i-1||h<Math.PI)&&m.push(b,E,S)}this.setIndex(m),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qo=class n extends Qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let h=[],l=[],f=[],d=[],p=new $,m=new $,u=new $;for(let M=0;M<=i;M++){let g=o+M/i*a;for(let _=0;_<=s;_++){let T=_/s*r;m.x=(e+t*Math.cos(g))*Math.cos(T),m.y=(e+t*Math.cos(g))*Math.sin(T),m.z=t*Math.sin(g),l.push(m.x,m.y,m.z),p.x=e*Math.cos(T),p.y=e*Math.sin(T),u.subVectors(m,p).normalize(),f.push(u.x,u.y,u.z),d.push(_/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=s;g++){let _=(s+1)*M+g-1,T=(s+1)*(M-1)+g-1,R=(s+1)*(M-1)+g,b=(s+1)*M+g;h.push(_,T,b),h.push(T,R,b)}this.setIndex(h),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function tr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(id(s))s.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(id(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Un(n){let e={};for(let t=0;t<n.length;t++){let i=tr(n[t]);for(let s in i)e[s]=i[s]}return e}function id(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _g(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var Kd={clone:tr,merge:Un},yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=_g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(s.value);break;case"v2":this.uniforms[i].value=new yt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new It().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sl=class extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},an=class extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var wl=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tl=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function il(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Es=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let h=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Al=class extends Es{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uh:r=e,a=2*t-i;break;case Fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Uh:o=e,h=2*i-t;break;case Fh:o=1,h=i+s[1]-s[0];break;default:o=e-1,h=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(h-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,f=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,u=(i-t)/(s-t),M=u*u,g=M*u,_=-p*g+2*p*M-p*u,T=(1+p)*g+(-1.5-2*p)*M+(-.5+p)*u+1,R=(-1-m)*g+(1.5+m)*M+.5*u,b=m*g-m*M;for(let E=0;E!==a;++E)r[E]=_*o[f+E]+T*o[l+E]+R*o[h+E]+b*o[d+E];return r}},El=class extends Es{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,f=(i-t)/(s-t),d=1-f;for(let p=0;p!==a;++p)r[p]=o[l+p]*d+o[h+p]*f;return r}},Cl=class extends Es{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rl=class extends Es{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,f=this.inTangents,d=this.outTangents;if(!f||!d){let u=(i-t)/(s-t),M=1-u;for(let g=0;g!==a;++g)r[g]=o[l+g]*M+o[h+g]*u;return r}let p=a*2,m=e-1;for(let u=0;u!==a;++u){let M=o[l+u],g=o[h+u],_=m*p+u*2,T=d[_],R=d[_+1],b=e*p+u*2,E=f[b],S=f[b+1],x=bg(i,t,T,E,s);r[u]=$d(x,M,R,S,g)}return r}};function $d(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Mg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function bg(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=$d(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let h=Mg(r,e,t,i,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-a/h))}return r}var si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),il(e.settings)&&(i.settings={inTangents:Cr(e.settings.inTangents,Array),outTangents:Cr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break;case Nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ot("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return ol;case this.InterpolantFactoryMethodBezier:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;il(this.settings)&&(sd(this.settings.inTangents,e),sd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;il(this.settings)&&(rd(this.settings.inTangents,e),rd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let h=i[a];if(typeof h=="number"&&isNaN(h)){ft("KeyframeTrack: Time is not a valid number.",this,a,h),e=!1;break}if(o!==null&&o>h){ft("KeyframeTrack: Out of order keys.",this,a,h,o),e=!1;break}o=h}if(s!==void 0&&F0(s))for(let a=0,h=s.length;a!==h;++a){let l=s[a];if(isNaN(l)){ft("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let h=!1,l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(s)h=!0;else{let d=a*i,p=d-i,m=d+i;for(let u=0;u!==i;++u){let M=t[d+u];if(M!==t[p+u]||M!==t[m+u]){h=!0;break}}}if(h){if(a!==o){e[o]=e[a];let d=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,h=o*i,l=0;l!==i;++l)t[h+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function rd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=xl;var Cs=class extends si{constructor(e,t,i){super(e,t,i)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ro;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends si{constructor(e,t,i,s){super(e,t,i,s)}};Il.prototype.ValueTypeName="color";var Pl=class extends si{constructor(e,t,i,s){super(e,t,i,s)}};Pl.prototype.ValueTypeName="number";var Ll=class extends Es{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(i-t)/(s-t),l=e*a;for(let f=l+a;l!==f;l+=4)un.slerpFlat(r,0,o,l-a,o,l,h);return r}},Yo=class extends si{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends si{constructor(e,t,i){super(e,t,i)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ro;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends si{constructor(e,t,i,s){super(e,t,i,s)}};Dl.prototype.ValueTypeName="vector";var Nl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,d){return l.push(f,d),this},this.removeHandler=function(f){let d=l.indexOf(f);return d!==-1&&l.splice(d,2),this},this.getHandler=function(f){for(let d=0,p=l.length;d<p;d+=2){let m=l[d],u=l[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jd=new Nl,zl=class{constructor(e){this.manager=e!==void 0?e:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};zl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zo=class extends Or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Dh=new It,od=new $,ad=new $,Jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Dh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Dh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,h=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Dr||e.reversedDepth?t.set(.5*o,0,0,.5*o+h,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+h,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sl=new $,rl=new un,Ni=new $,Ko=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,rl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sl,rl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bs=new $,ld=new yt,cd=new yt,Nn=class extends Ko{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,t-=o.offsetY*i/l,s*=o.width/h,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Bh=class extends Jo{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}},$o=class extends Or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},jo=class extends Ko{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,h=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kh=class extends Jo{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qo=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new kh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Rr=-90,Ir=1,Br=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Rr,Ir,e,t);s.layers=this.layers,this.add(s);let r=new Nn(Rr,Ir,e,t);r.layers=this.layers,this.add(r);let o=new Nn(Rr,Ir,e,t);o.layers=this.layers,this.add(o);let a=new Nn(Rr,Ir,e,t);a.layers=this.layers,this.add(a);let h=new Nn(Rr,Ir,e,t);h.layers=this.layers,this.add(h);let l=new Nn(Rr,Ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,h]=t;for(let l of t)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,l,f]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,p,m),e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}},Ul=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var xu="\\[\\]\\.:\\/",Sg=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",wg="[^"+xu.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",_u),Ag=/(WCOD+)?/.source.replace("WCOD",wg),Eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),Rg=new RegExp("^"+Tg+Ag+Eg+Cg+"$"),Ig=["material","materials","bones","map"],Gh=class{constructor(e,t,i){let s=i||Kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Kt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(e){let t=Rg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ig.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let h=i(a.children);if(h)return h}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=Gh;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IM=new Float32Array(1);var Vh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function yu(n,e,t,i){let s=Pg(i);switch(t){case ou:return n*e;case Hl:return n*e/s.components*s.byteLength;case Wl:return n*e/s.components*s.byteLength;case Ls:return n*e*2/s.components*s.byteLength;case Xl:return n*e*2/s.components*s.byteLength;case au:return n*e*3/s.components*s.byteLength;case ri:return n*e*4/s.components*s.byteLength;case ql:return n*e*4/s.components*s.byteLength;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Kl:return Math.max(n,16)*Math.max(e,8)/4;case Yl:case Jl:return Math.max(n,8)*Math.max(e,8)/2;case $l:case jl:case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ql:case aa:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xc:case _c:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case la:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pg(n){switch(n){case jn:case nu:return{byteLength:1,components:1};case Vr:case iu:case bi:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case Mi:case kl:case fi:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Og(n){let e=new WeakMap;function t(a,h){let l=a.array,f=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,l,f),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,h,l){let f=h.array,d=h.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,f);else{d.sort((m,u)=>m.start-u.start);let p=0;for(let m=1;m<d.length;m++){let u=d[p],M=d[m];M.start<=u.start+u.count+1?u.count=Math.max(u.count,M.start+M.count-u.start):(++p,d[p]=M)}d.length=p+1;for(let m=0,u=d.length;m<u;m++){let M=d[m];n.bufferSubData(l,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=e.get(a);h&&(n.deleteBuffer(h.buffer),e.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
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
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
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
#endif`,Ux=`uniform sampler2D dfgLUT;
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
}`,Fx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
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
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform float backgroundBlurriness;
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
}`,q_=`#define DISTANCE
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
}`,Y_=`#define DISTANCE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,s1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,o1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,c1=`#define STANDARD
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
}`,h1=`#define TOON
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
}`,u1=`#define TOON
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
}`,f1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,x1=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:Bg,alphahash_pars_fragment:kg,alphamap_fragment:Gg,alphamap_pars_fragment:Vg,alphatest_fragment:Hg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:qg,batching_pars_vertex:Yg,batching_vertex:Zg,begin_vertex:Jg,beginnormal_vertex:Kg,bsdfs:$g,iridescence_fragment:jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:rx,color_pars_vertex:ox,color_vertex:ax,common:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:hx,displacementmap_vertex:ux,emissivemap_fragment:fx,emissivemap_pars_fragment:dx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:xx,envmap_pars_fragment:_x,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Ix,envmap_vertex:vx,fog_vertex:Mx,fog_pars_vertex:bx,fog_fragment:Sx,fog_pars_fragment:wx,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:Cx,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:Lx,lights_phong_fragment:Dx,lights_phong_pars_fragment:Nx,lights_physical_fragment:zx,lights_physical_pars_fragment:Ux,lights_fragment_begin:Fx,lights_fragment_maps:Ox,lights_fragment_end:Bx,lightprobes_pars_fragment:kx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Hx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:Yx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:Kx,morphinstance_vertex:$x,morphcolor_vertex:jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:e_,morphtarget_vertex:t_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:s_,normal_pars_vertex:r_,normal_vertex:o_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:u_,opaque_fragment:f_,packing:d_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:g_,dithering_pars_fragment:x_,roughnessmap_fragment:__,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:M_,shadowmap_vertex:b_,shadowmask_pars_fragment:S_,skinbase_vertex:w_,skinning_pars_vertex:T_,skinning_vertex:A_,skinnormal_vertex:E_,specularmap_fragment:C_,specularmap_pars_fragment:R_,tonemapping_fragment:I_,tonemapping_pars_fragment:P_,transmission_fragment:L_,transmission_pars_fragment:D_,uv_pars_fragment:N_,uv_pars_vertex:z_,uv_vertex:U_,worldpos_vertex:F_,background_vert:O_,background_frag:B_,backgroundCube_vert:k_,backgroundCube_frag:G_,cube_vert:V_,cube_frag:H_,depth_vert:W_,depth_frag:X_,distance_vert:q_,distance_frag:Y_,equirect_vert:Z_,equirect_frag:J_,linedashed_vert:K_,linedashed_frag:$_,meshbasic_vert:j_,meshbasic_frag:Q_,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:s1,meshnormal_frag:r1,meshphong_vert:o1,meshphong_frag:a1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:h1,meshtoon_frag:u1,points_vert:f1,points_frag:d1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:x1},We={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ki={basic:{uniforms:Un([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Un([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Un([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Un([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Un([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new et(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Un([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Un([We.points,We.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Un([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Un([We.common,We.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Un([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Un([We.sprite,We.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Un([We.common,We.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Un([We.lights,We.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ki.physical={uniforms:Un([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var Tc={r:0,b:0,g:0},_1=new It,Mp=new at;Mp.set(-1,0,0,0,1,0,0,0,1);function y1(n,e,t,i,s,r){let o=new et(0),a=s===!0?0:1,h,l,f=null,d=0,p=null;function m(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let b=T.backgroundBlurriness>0;R=e.get(R,b)}return R}function u(T){let R=!1,b=m(T);b===null?g(o,a):b&&b.isColor&&(g(b,1),R=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(T,R){let b=m(R);b&&b.isCubeTexture?(l===void 0&&(l=new Tt(new on(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:tr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_1.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Mp),l.material.toneMapped=Ct.getTransfer(b.colorSpace)!==Vt,(f!==b||d!==b.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Tt(new Kn(2,2),new $n({name:"BackgroundMaterial",uniforms:tr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(b.colorSpace)!==Vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function g(T,R){T.getRGB(Tc,gu(n)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,R,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,R=1){o.set(T),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,g(o,a)},render:u,addToRenderList:M,dispose:_}}function v1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(P,k,O,F,te){let H=!1,W=d(P,F,O,k);r!==W&&(r=W,l(r.object)),H=m(P,F,O,te),H&&u(P,F,O,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(P,k,O,F),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function f(P){return n.deleteVertexArray(P)}function d(P,k,O,F){let te=F.wireframe===!0,H=i[k.id];H===void 0&&(H={},i[k.id]=H);let W=P.isInstancedMesh===!0?P.id:0,se=H[W];se===void 0&&(se={},H[W]=se);let Q=se[O.id];Q===void 0&&(Q={},se[O.id]=Q);let B=Q[te];return B===void 0&&(B=p(h()),Q[te]=B),B}function p(P){let k=[],O=[],F=[];for(let te=0;te<t;te++)k[te]=0,O[te]=0,F[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:F,object:P,attributes:{},index:null}}function m(P,k,O,F){let te=r.attributes,H=k.attributes,W=0,se=O.getAttributes();for(let Q in se)if(se[Q].location>=0){let G=te[Q],J=H[Q];if(J===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function u(P,k,O,F){let te={},H=k.attributes,W=0,se=O.getAttributes();for(let Q in se)if(se[Q].location>=0){let G=H[Q];G===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));let J={};J.attribute=G,G&&G.data&&(J.data=G.data),te[Q]=J,W++}r.attributes=te,r.attributesNum=W,r.index=F}function M(){let P=r.newAttributes;for(let k=0,O=P.length;k<O;k++)P[k]=0}function g(P){_(P,0)}function _(P,k){let O=r.newAttributes,F=r.enabledAttributes,te=r.attributeDivisors;O[P]=1,F[P]===0&&(n.enableVertexAttribArray(P),F[P]=1),te[P]!==k&&(n.vertexAttribDivisor(P,k),te[P]=k)}function T(){let P=r.newAttributes,k=r.enabledAttributes;for(let O=0,F=k.length;O<F;O++)k[O]!==P[O]&&(n.disableVertexAttribArray(O),k[O]=0)}function R(P,k,O,F,te,H,W){W===!0?n.vertexAttribIPointer(P,k,O,te,H):n.vertexAttribPointer(P,k,O,F,te,H)}function b(P,k,O,F){M();let te=F.attributes,H=O.getAttributes(),W=k.defaultAttributeValues;for(let se in H){let Q=H[se];if(Q.location>=0){let B=te[se];if(B===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),B!==void 0){let G=B.normalized,J=B.itemSize,j=e.get(B);if(j===void 0)continue;let K=j.buffer,le=j.type,Y=j.bytesPerElement,de=le===n.INT||le===n.UNSIGNED_INT||B.gpuType===kl;if(B.isInterleavedBufferAttribute){let re=B.data,Ie=re.isInterleavedBuffer===!0?re.stride:re.itemSize,nt=B.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let De=0;De<Q.locationSize;De++)_(Q.location+De,re.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<Q.locationSize;De++)g(Q.location+De);n.bindBuffer(n.ARRAY_BUFFER,K);for(let De=0;De<Q.locationSize;De++)R(Q.location+De,J/Q.locationSize,le,G,Ie*Y,(nt+J/Q.locationSize*De)*Y,de)}else{if(B.isInstancedBufferAttribute){for(let re=0;re<Q.locationSize;re++)_(Q.location+re,B.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let re=0;re<Q.locationSize;re++)g(Q.location+re);n.bindBuffer(n.ARRAY_BUFFER,K);for(let re=0;re<Q.locationSize;re++)R(Q.location+re,J/Q.locationSize,le,G,J*Y,J/Q.locationSize*re*Y,de)}}else if(W!==void 0){let G=W[se];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(Q.location,G);break;case 3:n.vertexAttrib3fv(Q.location,G);break;case 4:n.vertexAttrib4fv(Q.location,G);break;default:n.vertexAttrib1fv(Q.location,G)}}}}T()}function E(){L();for(let P in i){let k=i[P];for(let O in k){let F=k[O];for(let te in F){let H=F[te];for(let W in H)f(H[W].object),delete H[W];delete F[te]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let O in k){let F=k[O];for(let te in F){let H=F[te];for(let W in H)f(H[W].object),delete H[W];delete F[te]}}delete i[P.id]}function x(P){for(let k in i){let O=i[k];for(let F in O){let te=O[F];if(te[P.id]===void 0)continue;let H=te[P.id];for(let W in H)f(H[W].object),delete H[W];delete te[P.id]}}}function w(P){for(let k in i){let O=i[k],F=P.isInstancedMesh===!0?P.id:0,te=O[F];if(te!==void 0){for(let H in te){let W=te[H];for(let se in W)f(W[se].object),delete W[se];delete te[H]}delete O[F],Object.keys(O).length===0&&delete i[k]}}}function L(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:g,disableUnusedAttributes:T}}function M1(n,e,t){let i;function s(h){i=h}function r(h,l){n.drawArrays(i,h,l),t.update(l,i,1)}function o(h,l,f){f!==0&&(n.drawArraysInstanced(i,h,l,f),t.update(l,i,f))}function a(h,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,f);let p=0;for(let m=0;m<f;m++)p+=l[m];t.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function b1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ri&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==jn&&x!==fi&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=h(l);f!==l&&(ot("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:u,maxTextureSize:M,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:b,maxSamples:E,samples:S}}function S1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new yi,a=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||i!==0||s;return s=p,i=d.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=f(d,p,0)},this.setState=function(d,p,m){let u=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,_=n.get(d);if(!s||u===null||u.length===0||r&&!g)r?f(null):l();else{let T=r?0:i,R=T*4,b=_.clippingState||null;h.value=b,b=f(u,p,R,m);for(let E=0;E!==R;++E)b[E]=t[E];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,p,m,u){let M=d!==null?d.length:0,g=null;if(M!==0){if(g=h.value,u!==!0||g===null){let _=m+M*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<_)&&(g=new Float32Array(_));for(let R=0,b=m;R!==M;++R,b+=4)o.copy(d[R]).applyMatrix4(T,a),o.normal.toArray(g,b),g[b+3]=o.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var ua=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Go(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:$s});r.uniforms.tEquirect.value=t;let o=new Tt(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=Sn),new Br(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Qd=256,w1=3,T1=20,bp=256,Sp=16,A1=3,E1=new $,C1=new et,Ec=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Br(1,10,null),this._boxMesh=new Tt(new on(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=E1}=r,h=this._renderer;this._setSize(o);let l=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);let d=h.autoClear,p=h.autoClearColor,m=h.autoClearDepth,u=h.autoClearStencil,M=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,M===null&&(e.background=h.getClearColor(C1));let g=new Br(i,s,f);return g.position.copy(a),g.update(h,e),h.autoClear=d,h.autoClearColor=p,h.autoClearDepth=m,h.autoClearStencil=u,e.background=M,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Qd,pu(e))}_fromTexture(e,t){e.mapping===Qs||e.mapping===Gr?this._setSize(e.image.length===0?Qd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=ep(e,!1,!1),i=Math.log2(e)-w1;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ep(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Qs||e.mapping===Gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=R1(),this._integrationMaterial=I1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Sp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-A1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let h=a>0?Math.log2(t)+.5*Math.log2(6/(bp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=h,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=P1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function ep(n,e,t){return new ua(n,{minFilter:is,generateMipmaps:e,type:bi,colorSpace:Io,depthBuffer:t})}function fa(n,e,t){return new $n({name:n,uniforms:e,vertexShader:St.cube_vert,fragmentShader:t,side:Cn,blending:$s,depthTest:!1,depthWrite:!1})}function R1(){return fa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bp}u

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
	`)}function I1(){return fa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Sp}},`

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
	`)}function P1(){return fa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${T1}
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
	`)}function tp(){return fa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function np(){return fa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function L1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(p,m=!1){return p==null?null:m?o(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===Fl||m===Ol)if(e.has(p)){let u=e.get(p).texture;return a(u,p.mapping)}else{let u=p.image;if(u&&u.height>0){let M=new ua(u.height);return M.fromEquirectangularTexture(n,p),e.set(p,M),p.addEventListener("dispose",l),a(M.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,u=m===Fl||m===Ol,M=m===Qs||m===Gr;if(u||M){let g=t.get(p),_=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return i===null&&(i=new Ec(n)),g=u?i.fromEquirectangular(p,g):i.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let T=p.image;return u&&T&&T.height>0||M&&T&&h(T)?(i===null&&(i=new Ec(n)),g=u?i.fromEquirectangular(p):i.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",f),g.texture):null}}}return p}function a(p,m){return m===Fl?p.mapping=Qs:m===Ol&&(p.mapping=Gr),p}function h(p){let m=0,u=6;for(let M=0;M<u;M++)p[M]!==void 0&&m++;return m===u}function l(p){let m=p.target;m.removeEventListener("dispose",l);let u=e.get(m);u!==void 0&&(e.delete(m),u.dispose())}function f(p){let m=p.target;m.removeEventListener("dispose",f);let u=t.get(m);u!==void 0&&(t.delete(m),u.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function D1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ao("WebGLRenderer: "+i+" extension not supported."),s}}}function N1(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(u=>delete s[u]);function a(u){h(u.target)}function h(u){u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id],o.unregister(u);let M=r.get(u);M&&(e.remove(M),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(u,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function f(u){let M=u.attributes;for(let g in M)e.update(M[g],n.ARRAY_BUFFER)}function d(u){let M=u.index,g=u.attributes.position,_=0;if(g===void 0)return;let T=M!==null?M.array.length:g.array.length/3-1,R=g.count>=65535?Oo:Fo,b=new R(Math.ceil(T/3)*6,1),E=b.array;if(M!==null){let x=M.array;_=M.version;for(let w=0,L=0;w<T;w+=3){let I=x[w+0],P=x[w+1],k=x[w+2];E[L++]=I,E[L++]=P,E[L++]=P,E[L++]=k,E[L++]=k,E[L++]=I}}else{_=g.version;for(let x=0,w=0;x<T;x+=3){let L=x+0,I=x+1,P=x+2;E[w++]=L,E[w++]=I,E[w++]=I,E[w++]=P,E[w++]=P,E[w++]=L}}b.version=_;let S=r.get(u);S&&e.remove(S),r.set(u,b)}function p(u){let M=r.get(u);if(M){let g=u.index;g!==null&&M.version<g.version&&d(u)}else d(u);return r.get(u)}function m(){for(let u in s){let M=s[u].deref();M!==void 0&&h(M)}}return{get:l,update:f,getWireframeAttribute:p,dispose:m}}function z1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function h(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function l(d,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,d*o,m),t.update(p,i,m))}function f(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,m);let M=0;for(let g=0;g<m;g++)M+=p[g];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=f}function U1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function F1(n,e,t){let i=new WeakMap,s=new jt;function r(o,a,h){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0,p=i.get(a);if(p===void 0||p.count!==d){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],R=0;m===!0&&(R=1),u===!0&&(R=2),M===!0&&(R=3);let b=a.attributes.position.count*R,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*E*4*d),x=new Do(S,b,E,d);x.type=fi,x.needsUpdate=!0;let w=R*4;for(let I=0;I<d;I++){let P=g[I],k=_[I],O=T[I],F=b*E*4*I;for(let te=0;te<P.count;te++){let H=te*w;m===!0&&(s.fromBufferAttribute(P,te),S[F+H+0]=s.x,S[F+H+1]=s.y,S[F+H+2]=s.z,S[F+H+3]=0),u===!0&&(s.fromBufferAttribute(k,te),S[F+H+4]=s.x,S[F+H+5]=s.y,S[F+H+6]=s.z,S[F+H+7]=0),M===!0&&(s.fromBufferAttribute(O,te),S[F+H+8]=s.x,S[F+H+9]=s.y,S[F+H+10]=s.z,S[F+H+11]=O.itemSize===4?s.w:1)}}p={count:d,texture:x,size:new yt(b,E)},i.set(a,p),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let M=0;M<l.length;M++)m+=l[M];let u=a.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",u),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function O1(n,e,t,i,s){let r=new WeakMap;function o(l){let f=s.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function a(){r=new WeakMap}function h(l){let f=l.target;f.removeEventListener("dispose",h),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var B1={[Jh]:"LINEAR_TONE_MAPPING",[Kh]:"REINHARD_TONE_MAPPING",[$h]:"CINEON_TONE_MAPPING",[ta]:"ACES_FILMIC_TONE_MAPPING",[Qh]:"AGX_TONE_MAPPING",[eu]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function k1(n,e,t,i,s,r){let o=new ii(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,h=null,l=null,f=new Qt;f.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Pt([0,2,0,0,2,0],2));let d=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Tt(f,d),m=new jo(-1,1,1,-1,0,1),u=null,M=null,g=!1,_,T=null,R=[],b=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),h!==null&&h.setSize(E,S);for(let x=0;x<R.length;x++){let w=R[x];w.setSize&&w.setSize(E,S)}},this.setEffects=function(E){R=E,b=R.length>0&&R[0].isRenderPass===!0;let S=o.width,x=o.height;R.length>0&&a===null&&(a=new ii(S,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}),h=new ii(S,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&R.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new es(S,x),r===!0&&(l.format=ss,l.type=er)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<R.length;L++){let I=R[L];I.setSize&&I.setSize(S,x),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(E,S){if(g||E.toneMapping===Oi&&R.length===0)return!1;if(T=S,S!==null){let x=S.width,w=S.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return b===!1&&E.setRenderTarget(o),_=E.toneMapping,E.toneMapping=Oi,!0},this.hasRenderPass=function(){return b},this.end=function(E,S){E.toneMapping=_,g=!0;let x=o,w=a;for(let L=0;L<R.length;L++){let I=R[L];I.enabled!==!1&&(I.render(E,w,x,S),I.needsSwap!==!1&&(x=w,w=w===a?h:a))}if(u!==E.outputColorSpace||M!==E.toneMapping){u=E.outputColorSpace,M=E.toneMapping,d.defines={},Ct.getTransfer(u)===Vt&&(d.defines.SRGB_TRANSFER="");let L=B1[M];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(T),E.render(p,m),T=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),h!==null&&h.dispose(),f.dispose(),d.dispose()}}var wp=new Hn,Tp=new es(1,1),Ap=new Vo(1),Ep=new Do,Cp=new vl,Rp=new Go,ip=[],sp=[],rp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function qr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ip[s];if(r===void 0&&(r=new Float32Array(s),ip[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rc(n,e){let t=sp[e];t===void 0&&(t=new Int32Array(e),sp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function G1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function V1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function H1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function X1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;ap.set(i),n.uniformMatrix2fv(this.addr,!1,ap),yn(t,i)}}function q1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;op.set(i),n.uniformMatrix3fv(this.addr,!1,op),yn(t,i)}}function Y1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;rp.set(i),n.uniformMatrix4fv(this.addr,!1,rp),yn(t,i)}}function Z1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function J1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function K1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function $1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function j1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function Ic(n){return n.version===0&&(n.compareFunction=hu,n.needsUpdate=!0),n}function ny(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ic(Tp):r=wp,t.setTexture2D(e||r,s)}function iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ic(Ap):r=Rp,t.setTextureCube(e||r,s)}function ry(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ep,s)}function oy(n){switch(n){case 5126:return G1;case 35664:return V1;case 35665:return H1;case 35666:return W1;case 35674:return X1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return Z1;case 35667:case 35671:return J1;case 35668:case 35672:return K1;case 35669:case 35673:return $1;case 5125:return j1;case 36294:return Q1;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}function ay(n,e){n.uniform1fv(this.addr,e)}function ly(n,e){let t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function cy(n,e){let t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function hy(n,e){let t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function uy(n,e){let t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fy(n,e){let t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dy(n,e){let t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function py(n,e){n.uniform1iv(this.addr,e)}function my(n,e){n.uniform2iv(this.addr,e)}function gy(n,e){n.uniform3iv(this.addr,e)}function xy(n,e){n.uniform4iv(this.addr,e)}function _y(n,e){n.uniform1uiv(this.addr,e)}function yy(n,e){n.uniform2uiv(this.addr,e)}function vy(n,e){n.uniform3uiv(this.addr,e)}function My(n,e){n.uniform4uiv(this.addr,e)}function by(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ic(Tp):o=wp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Sy(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cp,r[o])}function wy(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ic(Ap):o=Rp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ty(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ep,r[o])}function Ay(n){switch(n){case 5126:return ay;case 35664:return ly;case 35665:return cy;case 35666:return hy;case 35674:return uy;case 35675:return fy;case 35676:return dy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return xy;case 5125:return _y;case 36294:return yy;case 36295:return vy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ty}}var bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oy(t.type)}},Su=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ay(t.type)}},wu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},vu=/(\w+)(\])?(\[|\.)?/g;function lp(n,e){n.seq.push(e),n.map[e.id]=e}function Ey(n,e,t){let i=n.name,s=i.length;for(vu.lastIndex=0;;){let r=vu.exec(i),o=vu.lastIndex,a=r[1],h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){lp(t,l===void 0?new bu(a,n,e):new Su(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new wu(a),lp(t,d)),t=d}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),h=e.getUniformLocation(t,a.name);Ey(a,h,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],h=i[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function cp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Cy=37297,Ry=0;function Iy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var hp=new at;function Py(n){Ct._getMatrix(hp,Ct.workingColorSpace,n);let e=`mat3( ${hp.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Po:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function up(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Iy(n.getShaderSource(e),a)}else return r}function Ly(n,e){let t=Py(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Dy={[Jh]:"Linear",[Kh]:"Reinhard",[$h]:"Cineon",[ta]:"ACESFilmic",[Qh]:"AgX",[eu]:"Neutral",[jh]:"Custom"};function Ny(n,e){let t=Dy[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ac=new $;function zy(){Ct.getLuminanceCoefficients(Ac);let n=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Fy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Oy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ha(n){return n!==""}function fp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var By=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(n){return n.replace(By,ky)}function ky(n,e){let t=St[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Tu(t)}var Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(n){return n.replace(Gy,Vy)}function Vy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Hy={[Ks]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function Wy(n){return Hy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xy={[Gr]:"ENVMAP_MODE_REFRACTION"};function qy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Xy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yy={[Zh]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Ld]:"ENVMAP_BLENDING_ADD"};function Zy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Yy[n.combine]||"ENVMAP_BLENDING_NONE"}function Jy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,h=Wy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=qy(t),d=Zy(t),p=Uy(t),m=Fy(r),u=s.createProgram(),M,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ha).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ha).join(`
`),g.length>0&&(g+=`
`)):(M=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),g=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?St.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),zy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),o=Tu(o),o=fp(o,t),o=dp(o,t),a=Tu(a),a=fp(a,t),a=dp(a,t),o=pp(o),a=pp(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,M=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let T=_+M+o,R=_+g+a,b=cp(s,s.VERTEX_SHADER,T),E=cp(s,s.FRAGMENT_SHADER,R);s.attachShader(u,b),s.attachShader(u,E),t.index0AttributeName!==void 0?s.bindAttribLocation(u,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(u,0,"position"),s.linkProgram(u);function S(I){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(u)||"",k=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(E)||"",F=P.trim(),te=k.trim(),H=O.trim(),W=!0,se=!0;if(s.getProgramParameter(u,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,u,b,E);else{let Q=up(s,b,"vertex"),B=up(s,E,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(u,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+Q+`
`+B)}else F!==""?ot("WebGLProgram: Program Info Log:",F):(te===""||H==="")&&(se=!1);se&&(I.diagnostics={runnable:W,programLog:F,vertexShader:{log:te,prefix:M},fragmentShader:{log:H,prefix:g}})}s.deleteShader(b),s.deleteShader(E),x=new Xr(s,u),w=Oy(s,u)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(u,Cy)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=b,this.fragmentShader=E,this}var Ky=0,Au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Eu(e),t.set(e,i)),i}},Eu=class{constructor(e){this.id=Ky++,this.code=e,this.usedTimes=0}};function $y(n){return n===Ls||n===aa||n===la}function jy(n,e,t,i,s,r){let o=new No,a=new Au,h=new Set,l=[],f=new Map,d=i.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return h.add(x),x===0?"uv":`uv${x}`}function u(x,w,L,I,P,k){let O=I.fog,F=P.geometry,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||te,H),se=p[x.type],Q=i.precision;x.precision!==null&&(Q=i.getMaxPrecision(x.precision),Q!==x.precision&&ot("WebGLProgram.getParameters:",x.precision,"not supported, using",Q,"instead."));let B=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,G=B!==void 0?B.length:0,J=0;F.morphAttributes.position!==void 0&&(J=1),F.morphAttributes.normal!==void 0&&(J=2),F.morphAttributes.color!==void 0&&(J=3);let j,K,le,Y;if(se){let Ue=ki[se];j=Ue.vertexShader,K=Ue.fragmentShader}else{j=x.vertexShader,K=x.fragmentShader;let Ue=a.getVertexShaderStage(x),Ut=a.getFragmentShaderStage(x);a.update(x,Ue,Ut),le=Ue.id,Y=Ut.id}let de=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),Ie=P.isInstancedMesh===!0,nt=P.isBatchedMesh===!0,De=!!x.map,Oe=!!x.matcap,je=!!W,Ke=je&&W.isPMREMTexture===!0,pt=!!x.aoMap,ct=!!x.lightMap,tn=!!x.bumpMap&&x.wireframe===!1,Lt=!!x.normalMap,Wt=!!x.displacementMap,zt=!!x.emissiveMap,Ye=!!x.metalnessMap,mt=!!x.roughnessMap,Et=x.anisotropy>0,U=x.clearcoat>0,Dt=x.diffuseRoughness>0,vt=x.dispersion>0,gt=x.retroreflectivity>0,Pe=x.iridescence>0,nn=x.sheen>0,Qe=x.transmission>0,rt=Et&&!!x.anisotropyMap,V=U&&!!x.clearcoatMap,D=U&&!!x.clearcoatNormalMap,ne=U&&!!x.clearcoatRoughnessMap,be=Dt&&!!x.diffuseRoughnessMap,ve=Pe&&!!x.iridescenceMap,Ee=Pe&&!!x.iridescenceThicknessMap,ze=nn&&!!x.sheenColorMap,ge=nn&&!!x.sheenRoughnessMap,xe=!!x.specularMap,Ne=!!x.specularColorMap,X=!!x.specularIntensityMap,me=Qe&&!!x.transmissionMap,ue=Qe&&!!x.thicknessMap,Ae=!!x.gradientMap,Le=!!x.alphaMap,Ce=x.alphaTest>0,He=!!x.alphaHash,st=!!x.extensions,Re=Oi;x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Re=n.toneMapping);let Be=Ke?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,it={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:K,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Q,batching:nt,batchingColor:nt&&P._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:Oe,envMap:je,envMapMode:je&&W.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?Be.length-1:null,envMapSize:Ke?Be[0].width:null,aoMap:pt,lightMap:ct,bumpMap:tn,normalMap:Lt,displacementMap:Wt,emissiveMap:zt,normalMapObjectSpace:Lt&&x.normalMapType===zd,normalMapTangentSpace:Lt&&x.normalMapType===Sc,packedNormalMap:Lt&&x.normalMapType===Sc&&$y(x.normalMap.format),metalnessMap:Ye,roughnessMap:mt,anisotropy:Et,anisotropyMap:rt,clearcoat:U,clearcoatMap:V,clearcoatNormalMap:D,clearcoatRoughnessMap:ne,diffuseRoughness:Dt,diffuseRoughnessMap:be,dispersion:vt,retroreflection:gt,iridescence:Pe,iridescenceMap:ve,iridescenceThicknessMap:Ee,sheen:nn,sheenColorMap:ze,sheenRoughnessMap:ge,specularMap:xe,specularColorMap:Ne,specularIntensityMap:X,transmission:Qe,transmissionMap:me,thicknessMap:ue,gradientMap:Ae,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:Ce,alphaHash:He,combine:x.combine,mapUv:De&&m(x.map.channel),aoMapUv:pt&&m(x.aoMap.channel),lightMapUv:ct&&m(x.lightMap.channel),bumpMapUv:tn&&m(x.bumpMap.channel),normalMapUv:Lt&&m(x.normalMap.channel),displacementMapUv:Wt&&m(x.displacementMap.channel),emissiveMapUv:zt&&m(x.emissiveMap.channel),metalnessMapUv:Ye&&m(x.metalnessMap.channel),roughnessMapUv:mt&&m(x.roughnessMap.channel),anisotropyMapUv:rt&&m(x.anisotropyMap.channel),clearcoatMapUv:V&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:D&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(x.sheenRoughnessMap.channel),specularMapUv:xe&&m(x.specularMap.channel),specularColorMapUv:Ne&&m(x.specularColorMap.channel),specularIntensityMapUv:X&&m(x.specularIntensityMap.channel),transmissionMapUv:me&&m(x.transmissionMap.channel),thicknessMapUv:ue&&m(x.thicknessMap.channel),alphaMapUv:Le&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Lt||Et),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(De||Le),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:J,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&Ct.getTransfer(x.map.colorSpace)===Vt,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(x.emissiveMap.colorSpace)===Vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=h.has(1),it.vertexUv2s=h.has(2),it.vertexUv3s=h.has(3),h.clear(),it}function M(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(w,x),_(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let w=p[x.type],L;if(w){let I=ki[w];L=Kd.clone(I.uniforms)}else L=x.uniforms;return L}function R(x,w){let L=f.get(w);return L!==void 0?++L.usedTimes:(L=new Jy(n,w,x,s),l.push(L),f.set(w,L)),L}function b(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function S(){a.dispose()}return{getParameters:u,getProgramCacheKey:M,getUniforms:T,acquireProgram:R,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:S}}function Qy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,h){n.get(o)[a]=h}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function gp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function a(p,m,u,M,g,_){let T=n[e];return T===void 0?(T={id:p.id,object:p,geometry:m,material:u,materialVariant:o(p),groupOrder:M,renderOrder:p.renderOrder,z:g,group:_},n[e]=T):(T.id=p.id,T.object=p,T.geometry=m,T.material=u,T.materialVariant=o(p),T.groupOrder=M,T.renderOrder=p.renderOrder,T.z=g,T.group=_),e++,T}function h(p,m,u,M,g,_,T){T.reversedDepth===!0&&(g=-g);let R=a(p,m,u,M,g,_);u.transmission>0?i.push(R):u.transparent===!0?s.push(R):t.push(R)}function l(p,m,u,M,g,_){let T=a(p,m,u,M,g,_);u.transmission>0?i.unshift(T):u.transparent===!0?s.unshift(T):t.unshift(T)}function f(p,m){t.length>1&&t.sort(p||ev),i.length>1&&i.sort(m||gp),s.length>1&&s.sort(m||gp)}function d(){for(let p=e,m=n.length;p<m;p++){let u=n[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:h,unshift:l,finish:d,sort:f}}function tv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new xp,n.set(i,[o])):s>=r.length?(o=new xp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new et};break;case"SpotLight":t={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var sv=0;function rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ov(n){let e=new nv,t=iv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);let s=new $,r=new It,o=new It;function a(l){let f=0,d=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,u=0,M=0,g=0,_=0,T=0,R=0,b=0,E=0,S=0,x=0,w=0,L=0,I=0;l.sort(rv);for(let k=0,O=l.length;k<O;k++){let F=l[k],te=F.color,H=F.intensity,W=F.distance,se=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ls?se=F.shadow.map.texture:se=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)f+=te.r*H,d+=te.g*H,p+=te.b*H;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(F.sh.coefficients[Q],H);I++}else if(F.isSunLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let B=F.shadow,G=t.get(F);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),i.sunShadow[u]=G,i.sunShadowMap[u]=se;let J=B.getViewportCount();for(let j=0;j<J;j++)i.sunShadowMatrix[M+j]=B.getMatrix(j),i.sunShadowCascade[M+j]=B._cascadeData[j];M+=J,u++}i.sun[m]=Q,m++}else if(F.isDirectionalLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let B=F.shadow,G=t.get(F);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,i.directionalShadow[g]=G,i.directionalShadowMap[g]=se,i.directionalShadowMatrix[g]=F.shadow.matrix,E++}i.directional[g]=Q,g++}else if(F.isSpotLight){let Q=e.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(te).multiplyScalar(H),Q.distance=W,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,i.spot[T]=Q;let B=F.shadow;if(F.map&&(i.spotLightMap[w]=F.map,w++,B.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[T]=B.matrix,F.castShadow){let G=t.get(F);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,i.spotShadow[T]=G,i.spotShadowMap[T]=se,x++}T++}else if(F.isRectAreaLight){let Q=e.get(F);Q.color.copy(te).multiplyScalar(H),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),i.rectArea[R]=Q,R++}else if(F.isPointLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){let B=F.shadow,G=t.get(F);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=F.shadow.matrix,S++}i.point[_]=Q,_++}else if(F.isHemisphereLight){let Q=e.get(F);Q.skyColor.copy(F.color).multiplyScalar(H),Q.groundColor.copy(F.groundColor).multiplyScalar(H),i.hemi[b]=Q,b++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;let P=i.hash;(P.sunLength!==m||P.directionalLength!==g||P.pointLength!==_||P.spotLength!==T||P.rectAreaLength!==R||P.hemiLength!==b||P.numSunShadows!==u||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==I)&&(i.sun.length=m,i.directional.length=g,i.spot.length=T,i.rectArea.length=R,i.point.length=_,i.hemi.length=b,i.sunShadow.length=u,i.sunShadowMap.length=u,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,P.sunLength=m,P.directionalLength=g,P.pointLength=_,P.spotLength=T,P.rectAreaLength=R,P.hemiLength=b,P.numSunShadows=u,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=I,i.version=sv++)}function h(l,f){let d=0,p=0,m=0,u=0,M=0,g=0,_=f.matrixWorldInverse;for(let T=0,R=l.length;T<R;T++){let b=l[T];if(b.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(_),d++}else if(b.isDirectionalLight){let E=i.directional[p];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),p++}else if(b.isSpotLight){let E=i.spot[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),u++}else if(b.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),M++}else if(b.isPointLight){let E=i.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(_),g++}}}return{setup:a,setupView:h,state:i}}function _p(n){let e=new ov(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function h(){e.setup(t),s.sort((d,p)=>d.priority-p.priority||d.id-p.id)}function l(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function av(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _p(n),e.set(s,[a])):r>=o.length?(a=new _p(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`,hv=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],uv=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],yp=new It,ca=new $,Mu=new $;function fv(n,e,t){let i=new Ts,s=new yt,r=new yt,o=new jt,a=new wl,h=new Tl,l={},f=t.maxTextureSize,d={[Is]:Cn,[Cn]:Is,[zn]:zn},p=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let u=new Qt;u.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Tt(u,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let _=this.type;this.render=function(S,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===fd&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);let L=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending($s),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=_!==this.type;O&&x.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(te=>te.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,te=S.length;F<te;F++){let H=S[F],W=H.shadow;if(W===void 0){ot("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let se=W.getFrameExtents();s.multiply(se),r.copy(W.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/se.y),s.y=r.y*se.y,W.mapSize.y=r.y));let Q=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===kr){if(H.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ii(s.x,s.y,{format:Ls,type:bi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new es(s.x,s.y,fi),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=$i,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=bn,W.map.depthTexture.magFilter=bn}else H.isPointLight?(W.map=new ua(s.x),W.map.depthTexture=new Vo(s.x,Mi)):(W.map=new ii(s.x,s.y),W.map.depthTexture=new es(s.x,s.y,Mi)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=$i,this.type===Ks?(W.map.depthTexture.compareFunction=Q?cu:lu,W.map.depthTexture.minFilter=Sn,W.map.depthTexture.magFilter=Sn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=bn,W.map.depthTexture.magFilter=bn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let B=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();H.isPointLight!==!0&&W.updateMatrices(H,w);let G=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:w.layers;for(let J=0;J<B;J++){let j=W.getCamera(J);if(H.isPointLight){let K=W.camera,le=W.matrix,Y=H.distance||K.far;Y!==K.far&&(K.far=Y,K.updateProjectionMatrix()),ca.setFromMatrixPosition(H.matrixWorld),K.position.copy(ca),Mu.copy(K.position),Mu.add(hv[J]),K.up.copy(uv[J]),K.lookAt(Mu),K.updateMatrixWorld(),le.makeTranslation(-ca.x,-ca.y,-ca.z),yp.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix(yp,K.coordinateSystem,K.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,J),n.clear();else{J===0&&(n.setRenderTarget(W.map),n.clear());let K=W.getViewport(J);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),k.viewport(o)}i=W.getFrustum(J),b(x,w,j,H,G,this.type)}W.isPointLightShadow!==!0&&this.type===kr&&T(W,w),W.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(L,I,P)};function T(S,x){let w=e.update(M);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new ii(s.x,s.y,{format:Ls,type:bi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),p.uniforms.shadow_pass.value=S.map.depthTexture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(x,null,w,p,M,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(x,null,w,m,M,null)}function R(S,x,w,L){let I=null,P=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)I=P;else if(I=w.isPointLight===!0?h:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=I.uuid,O=x.uuid,F=l[k];F===void 0&&(F={},l[k]=F);let te=F[O];te===void 0&&(te=I.clone(),F[O]=te,x.addEventListener("dispose",E)),I=te}if(I.visible=x.visible,I.wireframe=x.wireframe,L===kr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:d[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let k=n.properties.get(I);k.light=w}return I}function b(S,x,w,L,I,P){if(S.visible===!1)return;if(S.layers.test(I)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===kr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let F=e.update(S),te=S.material;if(Array.isArray(te)){let H=F.groups;for(let W=0,se=H.length;W<se;W++){let Q=H[W],B=te[Q.materialIndex];if(B&&B.visible){let G=R(S,B,L,P);S.onBeforeShadow(n,S,x,w,F,G,Q),n.renderBufferDirect(w,null,F,G,S,Q),S.onAfterShadow(n,S,x,w,F,G,Q)}}}else if(te.visible){let H=R(S,te,L,P);S.onBeforeShadow(n,S,x,w,F,H,null),n.renderBufferDirect(w,null,F,H,S,null),S.onAfterShadow(n,S,x,w,F,H,null)}}let O=S.children;for(let F=0,te=O.length;F<te;F++)b(O[F],x,w,L,I,P)}function E(S){S.target.removeEventListener("dispose",E);for(let w in l){let L=l[w],I=S.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function dv(n,e){function t(){let X=!1,me=new jt,ue=null,Ae=new jt(0,0,0,0);return{setMask:function(Le){ue!==Le&&!X&&(n.colorMask(Le,Le,Le,Le),ue=Le)},setLocked:function(Le){X=Le},setClear:function(Le,Ce,He,st,Re){Re===!0&&(Le*=st,Ce*=st,He*=st),me.set(Le,Ce,He,st),Ae.equals(me)===!1&&(n.clearColor(Le,Ce,He,st),Ae.copy(me))},reset:function(){X=!1,ue=null,Ae.set(-1,0,0,0)}}}function i(){let X=!1,me=!1,ue=null,Ae=null,Le=null;return{setReversed:function(Ce){if(me!==Ce){let He=e.get("EXT_clip_control");Ce?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),me=Ce;let st=Le;Le=null,this.setClear(st)}},getReversed:function(){return me},setTest:function(Ce){Ce?re(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Ce){ue!==Ce&&!X&&(n.depthMask(Ce),ue=Ce)},setFunc:function(Ce){if(me&&(Ce=qd[Ce]),Ae!==Ce){switch(Ce){case ll:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case fl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=Ce}},setLocked:function(Ce){X=Ce},setClear:function(Ce){Le!==Ce&&(Le=Ce,me&&(Ce=1-Ce),n.clearDepth(Ce))},reset:function(){X=!1,ue=null,Ae=null,Le=null,me=!1}}}function s(){let X=!1,me=null,ue=null,Ae=null,Le=null,Ce=null,He=null,st=null,Re=null;return{setTest:function(Be){X||(Be?re(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Be){me!==Be&&!X&&(n.stencilMask(Be),me=Be)},setFunc:function(Be,it,Ue){(ue!==Be||Ae!==it||Le!==Ue)&&(n.stencilFunc(Be,it,Ue),ue=Be,Ae=it,Le=Ue)},setOp:function(Be,it,Ue){(Ce!==Be||He!==it||st!==Ue)&&(n.stencilOp(Be,it,Ue),Ce=Be,He=it,st=Ue)},setLocked:function(Be){X=Be},setClear:function(Be){Re!==Be&&(n.clearStencil(Be),Re=Be)},reset:function(){X=!1,me=null,ue=null,Ae=null,Le=null,Ce=null,He=null,st=null,Re=null}}}let r=new t,o=new i,a=new s,h={},l=new WeakMap,f={},d={},p={},m=new WeakMap,u=[],M=null,g=!1,_=null,T=null,R=null,b=null,E=null,S=null,x=null,w=new et(0,0,0),L=0,I=!1,P=null,k=null,O=null,F=null,te=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=se>=1):Q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=se>=2);let B=null,G={},J=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),K=new jt().fromArray(J),le=new jt().fromArray(j);function Y(X,me,ue,Ae){let Le=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(X,Ce),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ue;He++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(me+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Ce}let de={};de[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Lr),tn(!1),Lt(Hh),re(n.CULL_FACE),pt($s);function re(X){f[X]!==!0&&(n.enable(X),f[X]=!0)}function Ie(X){f[X]!==!1&&(n.disable(X),f[X]=!1)}function nt(X,me){return p[X]!==me?(n.bindFramebuffer(X,me),p[X]=me,X===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=me),X===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=me),!0):!1}function De(X,me){let ue=u,Ae=!1;if(X){ue=m.get(me),ue===void 0&&(ue=[],m.set(me,ue));let Le=X.textures;if(ue.length!==Le.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,He=Le.length;Ce<He;Ce++)ue[Ce]=n.COLOR_ATTACHMENT0+Ce;ue.length=Le.length,Ae=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ue)}function Oe(X){return M!==X?(n.useProgram(X),M=X,!0):!1}let je={[js]:n.FUNC_ADD,[pd]:n.FUNC_SUBTRACT,[md]:n.FUNC_REVERSE_SUBTRACT};je[gd]=n.MIN,je[xd]=n.MAX;let Ke={[_d]:n.ZERO,[yd]:n.ONE,[vd]:n.SRC_COLOR,[qh]:n.SRC_ALPHA,[Ad]:n.SRC_ALPHA_SATURATE,[wd]:n.DST_COLOR,[bd]:n.DST_ALPHA,[Md]:n.ONE_MINUS_SRC_COLOR,[Yh]:n.ONE_MINUS_SRC_ALPHA,[Td]:n.ONE_MINUS_DST_COLOR,[Sd]:n.ONE_MINUS_DST_ALPHA,[Ed]:n.CONSTANT_COLOR,[Cd]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Id]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(X,me,ue,Ae,Le,Ce,He,st,Re,Be){if(X===$s){g===!0&&(Ie(n.BLEND),g=!1);return}if(g===!1&&(re(n.BLEND),g=!0),X!==dd){if(X!==_||Be!==I){if((T!==js||E!==js)&&(n.blendEquation(n.FUNC_ADD),T=js,E=js),Be)switch(X){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.ONE,n.ONE);break;case Wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",X);break}else switch(X){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",X);break}R=null,b=null,S=null,x=null,w.set(0,0,0),L=0,_=X,I=Be}return}Le=Le||me,Ce=Ce||ue,He=He||Ae,(me!==T||Le!==E)&&(n.blendEquationSeparate(je[me],je[Le]),T=me,E=Le),(ue!==R||Ae!==b||Ce!==S||He!==x)&&(n.blendFuncSeparate(Ke[ue],Ke[Ae],Ke[Ce],Ke[He]),R=ue,b=Ae,S=Ce,x=He),(st.equals(w)===!1||Re!==L)&&(n.blendColor(st.r,st.g,st.b,Re),w.copy(st),L=Re),_=X,I=!1}function ct(X,me){X.side===zn?Ie(n.CULL_FACE):re(n.CULL_FACE);let ue=X.side===Cn;me&&(ue=!ue),tn(ue),X.blending===Ps&&X.transparent===!1?pt($s):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ae=X.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function tn(X){P!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),P=X)}function Lt(X){X!==hd?(re(n.CULL_FACE),X!==k&&(X===Hh?n.cullFace(n.BACK):X===ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),k=X}function Wt(X){X!==O&&(W&&n.lineWidth(X),O=X)}function zt(X,me,ue){X?(re(n.POLYGON_OFFSET_FILL),(F!==me||te!==ue)&&(F=me,te=ue,o.getReversed()&&(me=-me,ue=-ue),n.polygonOffset(me,ue))):Ie(n.POLYGON_OFFSET_FILL)}function Ye(X){X?re(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function mt(X){X===void 0&&(X=n.TEXTURE0+H-1),B!==X&&(n.activeTexture(X),B=X)}function Et(X,me,ue){ue===void 0&&(B===null?ue=n.TEXTURE0+H-1:ue=B);let Ae=G[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},G[ue]=Ae),(Ae.type!==X||Ae.texture!==me)&&(B!==ue&&(n.activeTexture(ue),B=ue),n.bindTexture(X,me||de[X]),Ae.type=X,Ae.texture=me)}function U(){let X=G[B];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Dt(){try{n.compressedTexImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function vt(){try{n.compressedTexImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function gt(){try{n.texSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function Pe(){try{n.texSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function nn(){try{n.compressedTexSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function Qe(){try{n.compressedTexSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function rt(){try{n.texStorage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function V(){try{n.texStorage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function D(){try{n.texImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function ne(){try{n.texImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function be(X){return d[X]!==void 0?d[X]:n.getParameter(X)}function ve(X,me){d[X]!==me&&(n.pixelStorei(X,me),d[X]=me)}function Ee(X){K.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),K.copy(X))}function ze(X){le.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),le.copy(X))}function ge(X,me){let ue=l.get(me);ue===void 0&&(ue=new WeakMap,l.set(me,ue));let Ae=ue.get(X);Ae===void 0&&(Ae=n.getUniformBlockIndex(me,X.name),n.uniformBlockBinding(me,Ae,Ae),ue.set(X,Ae))}function xe(X,me,ue){let Le=l.get(me).get(X);h[Le]!==ue&&(n.bindBufferBase(n.UNIFORM_BUFFER,Le,ue),h[Le]=ue)}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},d={},B=null,G={},p={},h={},m=new WeakMap,u=[],M=null,g=!1,_=null,T=null,R=null,b=null,E=null,S=null,x=null,w=new et(0,0,0),L=0,I=!1,P=null,k=null,O=null,F=null,te=null,K.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Ie,bindFramebuffer:nt,drawBuffers:De,useProgram:Oe,setBlending:pt,setMaterial:ct,setFlipSided:tn,setCullFace:Lt,setLineWidth:Wt,setPolygonOffset:zt,setScissorTest:Ye,activeTexture:mt,bindTexture:Et,unbindTexture:U,compressedTexImage2D:Dt,compressedTexImage3D:vt,texImage2D:D,texImage3D:ne,pixelStorei:ve,getParameter:be,updateUBOMapping:ge,uniformBlockBinding:xe,texStorage2D:rt,texStorage3D:V,texSubImage2D:gt,texSubImage3D:Pe,compressedTexSubImage2D:nn,compressedTexSubImage3D:Qe,scissor:Ee,viewport:ze,reset:Ne}}function pv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,f=new WeakMap,d=new Set,p,m=new WeakMap,u=new Set,M=new FinalizationRegistry(V=>u.delete(V)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(V,D){return g?new OffscreenCanvas(V,D):Lo("canvas")}function T(V,D,ne){let be=1,ve=rt(V);if((ve.width>ne||ve.height>ne)&&(be=ne/Math.max(ve.width,ve.height)),be<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let Ee=Math.floor(be*ve.width),ze=Math.floor(be*ve.height);p===void 0&&(p=_(Ee,ze));let ge=D?_(Ee,ze):p;return ge.width=Ee,ge.height=ze,ge.getContext("2d").drawImage(V,0,0,Ee,ze),ot("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ee+"x"+ze+")."),ge}else return"data"in V&&ot("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),V;return V}function R(V){return V.generateMipmaps}function b(V){n.generateMipmap(V)}function E(V){return V.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?n.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(V,D,ne,be,ve,Ee=!1){if(V!==null){if(n[V]!==void 0)return n[V];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let ze;be&&(ze=e.get("EXT_texture_norm16"),ze||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=D;if(D===n.RED&&(ne===n.FLOAT&&(ge=n.R32F),ne===n.HALF_FLOAT&&(ge=n.R16F),ne===n.UNSIGNED_BYTE&&(ge=n.R8),ne===n.UNSIGNED_SHORT&&ze&&(ge=ze.R16_EXT),ne===n.SHORT&&ze&&(ge=ze.R16_SNORM_EXT)),D===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ge=n.R8UI),ne===n.UNSIGNED_SHORT&&(ge=n.R16UI),ne===n.UNSIGNED_INT&&(ge=n.R32UI),ne===n.BYTE&&(ge=n.R8I),ne===n.SHORT&&(ge=n.R16I),ne===n.INT&&(ge=n.R32I)),D===n.RG&&(ne===n.FLOAT&&(ge=n.RG32F),ne===n.HALF_FLOAT&&(ge=n.RG16F),ne===n.UNSIGNED_BYTE&&(ge=n.RG8),ne===n.UNSIGNED_SHORT&&ze&&(ge=ze.RG16_EXT),ne===n.SHORT&&ze&&(ge=ze.RG16_SNORM_EXT)),D===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ge=n.RG8UI),ne===n.UNSIGNED_SHORT&&(ge=n.RG16UI),ne===n.UNSIGNED_INT&&(ge=n.RG32UI),ne===n.BYTE&&(ge=n.RG8I),ne===n.SHORT&&(ge=n.RG16I),ne===n.INT&&(ge=n.RG32I)),D===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),ne===n.UNSIGNED_INT&&(ge=n.RGB32UI),ne===n.BYTE&&(ge=n.RGB8I),ne===n.SHORT&&(ge=n.RGB16I),ne===n.INT&&(ge=n.RGB32I)),D===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),ne===n.UNSIGNED_INT&&(ge=n.RGBA32UI),ne===n.BYTE&&(ge=n.RGBA8I),ne===n.SHORT&&(ge=n.RGBA16I),ne===n.INT&&(ge=n.RGBA32I)),D===n.RGB&&(ne===n.UNSIGNED_SHORT&&ze&&(ge=ze.RGB16_EXT),ne===n.SHORT&&ze&&(ge=ze.RGB16_SNORM_EXT),ne===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),ne===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),D===n.RGBA){let xe=Ee?Po:Ct.getTransfer(ve);ne===n.FLOAT&&(ge=n.RGBA32F),ne===n.HALF_FLOAT&&(ge=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(ge=xe===Vt?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT&&ze&&(ge=ze.RGBA16_EXT),ne===n.SHORT&&ze&&(ge=ze.RGBA16_SNORM_EXT),ne===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function x(V,D){let ne;return V?D===null||D===Mi||D===er?ne=n.DEPTH24_STENCIL8:D===fi?ne=n.DEPTH32F_STENCIL8:D===Vr&&(ne=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Mi||D===er?ne=n.DEPTH_COMPONENT24:D===fi?ne=n.DEPTH_COMPONENT32F:D===Vr&&(ne=n.DEPTH_COMPONENT16),ne}function w(V,D){return R(V)===!0||V.isFramebufferTexture&&V.minFilter!==bn&&V.minFilter!==Sn?Math.log2(Math.max(D.width,D.height))+1:V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?D.mipmaps.length:1}function L(V){let D=new WeakRef(V);i.get(V).__ref=D,u.add(D),M.register(V,D,D)}function I(V){let D=i.get(V).__ref;D!==void 0&&(u.delete(D),M.unregister(D))}function P(V){O(V.target)}function k(V){F(V.target)}function O(V){V.removeEventListener("dispose",P),I(V),H(V),V.isVideoTexture&&f.delete(V),V.isHTMLTexture&&d.delete(V)}function F(V){V.removeEventListener("dispose",k),I(V),se(V)}function te(){for(let V of u){let D=V.deref();D!==void 0&&(D.isRenderTarget===!0?F(D):O(D))}u.clear(),d.clear()}function H(V){let D=i.get(V);if(D.__webglInit===void 0)return;let ne=V.source,be=m.get(ne);if(be){let ve=be[D.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&W(V),Object.keys(be).length===0&&m.delete(ne)}i.remove(V)}function W(V){let D=i.get(V);n.deleteTexture(D.__webglTexture);let ne=V.source,be=m.get(ne);delete be[D.__cacheKey],o.memory.textures--}function se(V){let D=i.get(V);D.__depthDisposeCallback&&D.__depthDisposeCallback();let ne=V.depthTexture;if(ne&&ne.renderTarget===V&&O(ne),V.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(D.__webglFramebuffer[ve]))for(let Ee=0;Ee<D.__webglFramebuffer[ve].length;Ee++)n.deleteFramebuffer(D.__webglFramebuffer[ve][Ee]);else n.deleteFramebuffer(D.__webglFramebuffer[ve]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[ve])}else{if(Array.isArray(D.__webglFramebuffer))for(let ve=0;ve<D.__webglFramebuffer.length;ve++)n.deleteFramebuffer(D.__webglFramebuffer[ve]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ve=0;ve<D.__webglColorRenderbuffer.length;ve++)D.__webglColorRenderbuffer[ve]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[ve]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let be=V.textures;for(let ve=0,Ee=be.length;ve<Ee;ve++){let ze=i.get(be[ve]);ze.__webglTexture&&(n.deleteTexture(ze.__webglTexture),o.memory.textures--),i.remove(be[ve])}i.remove(V)}let Q=0;function B(){Q=0}function G(){return Q}function J(V){Q=V}function j(){let V=Q;return V>=s.maxTextures&&ot("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,V}function K(V){let D=[];return D.push(V.wrapS),D.push(V.wrapT),D.push(V.wrapR||0),D.push(V.magFilter),D.push(V.minFilter),D.push(V.anisotropy),D.push(V.internalFormat),D.push(V.format),D.push(V.type),D.push(V.generateMipmaps),D.push(V.mipmapsAutoUpdate),D.push(V.premultiplyAlpha),D.push(V.flipY),D.push(V.unpackAlignment),D.push(V.colorSpace),D.join()}function le(V,D){let ne=i.get(V);if(V.isVideoTexture&&nn(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&ne.__version!==V.version){let be=V.image;if(be===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(ne,V,D);return}}else V.isExternalTexture&&(ne.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+D)}function Y(V,D){let ne=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&ne.__version!==V.version){ct(ne,V,D);return}else V.isExternalTexture&&(ne.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+D)}function de(V,D){let ne=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&ne.__version!==V.version){ct(ne,V,D);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+D)}function re(V,D){let ne=i.get(V);if(V.version>0&&ne.__version!==V.version){tn(ne,V,D);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+D)}let Ie={[ml]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},nt={[bn]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[na]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},De={[Fd]:n.NEVER,[hu]:n.ALWAYS,[Od]:n.LESS,[lu]:n.LEQUAL,[Bd]:n.EQUAL,[cu]:n.GEQUAL,[kd]:n.GREATER,[Gd]:n.NOTEQUAL};function Oe(V,D){if(D.type===fi&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===Sn||D.magFilter===Bl||D.magFilter===na||D.magFilter===is||D.minFilter===Sn||D.minFilter===Bl||D.minFilter===na||D.minFilter===is)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(V,n.TEXTURE_WRAP_S,Ie[D.wrapS]),n.texParameteri(V,n.TEXTURE_WRAP_T,Ie[D.wrapT]),(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)&&n.texParameteri(V,n.TEXTURE_WRAP_R,Ie[D.wrapR]),n.texParameteri(V,n.TEXTURE_MAG_FILTER,nt[D.magFilter]),n.texParameteri(V,n.TEXTURE_MIN_FILTER,nt[D.minFilter]),D.compareFunction&&(n.texParameteri(V,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(V,n.TEXTURE_COMPARE_FUNC,De[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===bn||D.minFilter!==na&&D.minFilter!==is||D.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||i.get(D).__currentAnisotropy){let ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(V,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy}}}function je(V,D){let ne=!1;V.__webglInit===void 0&&(V.__webglInit=!0,D.addEventListener("dispose",P),L(D));let be=D.source,ve=m.get(be);ve===void 0&&(ve={},m.set(be,ve));let Ee=K(D);if(Ee!==V.__cacheKey){ve[Ee]===void 0&&(ve[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),ve[Ee].usedTimes++;let ze=ve[V.__cacheKey];ze!==void 0&&(ve[V.__cacheKey].usedTimes--,ze.usedTimes===0&&W(D)),V.__cacheKey=Ee,V.__webglTexture=ve[Ee].texture}return ne}function Ke(V,D,ne){return Math.floor(Math.floor(V/ne)/D)}function pt(V,D,ne,be){let Ee=V.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,D.width,D.height,ne,be,D.data);else{Ee.sort((X,me)=>X.start-me.start);let ze=0;for(let X=1;X<Ee.length;X++){let me=Ee[ze],ue=Ee[X],Ae=me.start+me.count,Le=Ke(ue.start,D.width,4),Ce=Ke(me.start,D.width,4);ue.start<=Ae+1&&Le===Ce&&Ke(ue.start+ue.count-1,D.width,4)===Le?me.count=Math.max(me.count,ue.start+ue.count-me.start):(++ze,Ee[ze]=ue)}Ee.length=ze+1;let ge=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ne=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,D.width);for(let X=0,me=Ee.length;X<me;X++){let ue=Ee[X],Ae=Math.floor(ue.start/4),Le=Math.ceil(ue.count/4),Ce=Ae%D.width,He=Math.floor(Ae/D.width),st=Le,Re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,He),t.texSubImage2D(n.TEXTURE_2D,0,Ce,He,st,Re,ne,be,D.data)}V.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function ct(V,D,ne){let be=n.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(be=n.TEXTURE_2D_ARRAY),D.isData3DTexture&&(be=n.TEXTURE_3D);let ve=je(V,D),Ee=D.source;t.bindTexture(be,V.__webglTexture,n.TEXTURE0+ne);let ze=i.get(Ee);if(Ee.version!==ze.__version||ve===!0){if(t.activeTexture(n.TEXTURE0+ne),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let Re=Ct.getPrimaries(Ct.workingColorSpace),Be=D.colorSpace===rs?null:Ct.getPrimaries(D.colorSpace),it=D.colorSpace===rs||Re===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment);let xe=T(D.image,!1,s.maxTextureSize);xe=Qe(D,xe);let Ne=r.convert(D.format,D.colorSpace),X=r.convert(D.type),me=S(D.internalFormat,Ne,X,D.normalized,D.colorSpace,D.isVideoTexture);Oe(be,D);let ue,Ae=D.mipmaps,Le=D.isVideoTexture!==!0,Ce=ze.__version===void 0||ve===!0,He=Ee.dataReady,st=w(D,xe);if(D.isDepthTexture)me=x(D.format===ss,D.type),Ce&&(Le?t.texStorage2D(n.TEXTURE_2D,1,me,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,me,xe.width,xe.height,0,Ne,X,null));else if(D.isDataTexture)if(Ae.length>0){Le&&Ce&&t.texStorage2D(n.TEXTURE_2D,st,me,Ae[0].width,Ae[0].height);for(let Re=0,Be=Ae.length;Re<Be;Re++)ue=Ae[Re],Le?He&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,ue.width,ue.height,Ne,X,ue.data):t.texImage2D(n.TEXTURE_2D,Re,me,ue.width,ue.height,0,Ne,X,ue.data);D.generateMipmaps=!1}else Le?(Ce&&t.texStorage2D(n.TEXTURE_2D,st,me,xe.width,xe.height),He&&pt(D,xe,Ne,X)):t.texImage2D(n.TEXTURE_2D,0,me,xe.width,xe.height,0,Ne,X,xe.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Le&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,me,Ae[0].width,Ae[0].height,xe.depth);for(let Re=0,Be=Ae.length;Re<Be;Re++)if(ue=Ae[Re],D.format!==ri)if(Ne!==null)if(Le){if(He)if(D.layerUpdates.size>0){let it=yu(ue.width,ue.height,D.format,D.type);for(let Ue of D.layerUpdates){let Ut=ue.data.subarray(Ue*it/ue.data.BYTES_PER_ELEMENT,(Ue+1)*it/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,Ue,ue.width,ue.height,1,Ne,Ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,ue.width,ue.height,xe.depth,Ne,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Re,me,ue.width,ue.height,xe.depth,0,ue.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,ue.width,ue.height,xe.depth,Ne,X,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Re,me,ue.width,ue.height,xe.depth,0,Ne,X,ue.data);D.layerUpdates.size>0&&D.clearLayerUpdates()}else{Le&&Ce&&t.texStorage2D(n.TEXTURE_2D,st,me,Ae[0].width,Ae[0].height);for(let Re=0,Be=Ae.length;Re<Be;Re++)ue=Ae[Re],D.format!==ri?Ne!==null?Le?He&&t.compressedTexSubImage2D(n.TEXTURE_2D,Re,0,0,ue.width,ue.height,Ne,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Re,me,ue.width,ue.height,0,ue.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?He&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,ue.width,ue.height,Ne,X,ue.data):t.texImage2D(n.TEXTURE_2D,Re,me,ue.width,ue.height,0,Ne,X,ue.data)}else if(D.isDataArrayTexture)if(Le){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,me,xe.width,xe.height,xe.depth),He)if(D.layerUpdates.size>0){let Re=yu(xe.width,xe.height,D.format,D.type);for(let Be of D.layerUpdates){let it=xe.data.subarray(Be*Re/xe.data.BYTES_PER_ELEMENT,(Be+1)*Re/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,xe.width,xe.height,1,Ne,X,it)}D.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,X,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,xe.width,xe.height,xe.depth,0,Ne,X,xe.data);else if(D.isData3DTexture)Le?(Ce&&t.texStorage3D(n.TEXTURE_3D,st,me,xe.width,xe.height,xe.depth),He&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,X,xe.data)):t.texImage3D(n.TEXTURE_3D,0,me,xe.width,xe.height,xe.depth,0,Ne,X,xe.data);else if(D.isFramebufferTexture){if(Ce)if(Le)t.texStorage2D(n.TEXTURE_2D,st,me,xe.width,xe.height);else{let Re=xe.width,Be=xe.height;for(let it=0;it<st;it++)t.texImage2D(n.TEXTURE_2D,it,me,Re,Be,0,Ne,X,null),Re>>=1,Be>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in n){let Re=n.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),xe.parentNode!==Re){Re.appendChild(xe),d.add(D),Re.onpaint=Be=>{let it=Be.changedElements;for(let Ue of d)it.includes(Ue.image)&&(Ue.needsUpdate=!0)},Re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{let it=n.RGBA,Ue=n.RGBA,Ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,it,Ue,Ut,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Le&&Ce){let Re=rt(Ae[0]);t.texStorage2D(n.TEXTURE_2D,st,me,Re.width,Re.height)}for(let Re=0,Be=Ae.length;Re<Be;Re++)ue=Ae[Re],Le?He&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,Ne,X,ue):t.texImage2D(n.TEXTURE_2D,Re,me,Ne,X,ue);D.generateMipmaps=!1}else if(Le){if(Ce){let Re=rt(xe);t.texStorage2D(n.TEXTURE_2D,st,me,Re.width,Re.height)}He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,X,xe)}else t.texImage2D(n.TEXTURE_2D,0,me,Ne,X,xe);R(D)&&D.mipmapsAutoUpdate===!0&&b(be),ze.__version=Ee.version,D.onUpdate&&D.onUpdate(D)}V.__version=D.version}function tn(V,D,ne){if(D.image.length!==6)return;let be=je(V,D),ve=D.source;t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+ne);let Ee=i.get(ve);if(ve.version!==Ee.__version||be===!0){t.activeTexture(n.TEXTURE0+ne);let ze=Ct.getPrimaries(Ct.workingColorSpace),ge=D.colorSpace===rs?null:Ct.getPrimaries(D.colorSpace),xe=D.colorSpace===rs||ze===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ne=D.isCompressedTexture||D.image[0].isCompressedTexture,X=D.image[0]&&D.image[0].isDataTexture,me=[];for(let Ue=0;Ue<6;Ue++)!Ne&&!X?me[Ue]=T(D.image[Ue],!0,s.maxCubemapSize):me[Ue]=X?D.image[Ue].image:D.image[Ue],me[Ue]=Qe(D,me[Ue]);let ue=me[0],Ae=r.convert(D.format,D.colorSpace),Le=r.convert(D.type),Ce=S(D.internalFormat,Ae,Le,D.normalized,D.colorSpace),He=D.isVideoTexture!==!0,st=Ee.__version===void 0||be===!0,Re=ve.dataReady,Be=w(D,ue);Oe(n.TEXTURE_CUBE_MAP,D);let it;if(D.isDepthTexture){if(Ce=x(D.format===ss,D.type),st)if(He)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ce,ue.width,ue.height);else for(let Ue=0;Ue<6;Ue++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ce,ue.width,ue.height,0,Ae,Le,null)}else if(Ne){He&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,Ce,ue.width,ue.height);for(let Ue=0;Ue<6;Ue++){it=me[Ue].mipmaps;for(let Ut=0;Ut<it.length;Ut++){let sn=it[Ut];D.format!==ri?Ae!==null?He?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut,0,0,sn.width,sn.height,Ae,sn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut,Ce,sn.width,sn.height,0,sn.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut,0,0,sn.width,sn.height,Ae,Le,sn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut,Ce,sn.width,sn.height,0,Ae,Le,sn.data)}}}else{if(it=D.mipmaps,He&&st){it.length>0&&Be++;let Ue=rt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,Ce,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(X){He?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,me[Ue].width,me[Ue].height,Ae,Le,me[Ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ce,me[Ue].width,me[Ue].height,0,Ae,Le,me[Ue].data);for(let Ut=0;Ut<it.length;Ut++){let xt=it[Ut].image[Ue].image;He?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut+1,0,0,xt.width,xt.height,Ae,Le,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut+1,Ce,xt.width,xt.height,0,Ae,Le,xt.data)}}else{He?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,Ae,Le,me[Ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ce,Ae,Le,me[Ue]);for(let Ut=0;Ut<it.length;Ut++){let sn=it[Ut];He?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut+1,0,0,Ae,Le,sn.image[Ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ut+1,Ce,Ae,Le,sn.image[Ue])}}}R(D)&&D.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Ee.__version=ve.version,D.onUpdate&&D.onUpdate(D)}V.__version=D.version}function Lt(V,D,ne,be,ve,Ee){let ze=r.convert(ne.format,ne.colorSpace),ge=r.convert(ne.type),xe=S(ne.internalFormat,ze,ge,ne.normalized,ne.colorSpace),Ne=i.get(D),X=i.get(ne);if(X.__renderTarget=D,!Ne.__hasExternalTextures){let me=Math.max(1,D.width>>Ee),ue=Math.max(1,D.height>>Ee);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,Ee,xe,me,ue,D.depth,0,ze,ge,null):t.texImage2D(ve,Ee,xe,me,ue,0,ze,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,V),Pe(D)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ve,X.__webglTexture,0,gt(D)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,be,ve,X.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(V,D,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,V),D.depthBuffer){let be=D.depthTexture,ve=be&&be.isDepthTexture?be.type:null,Ee=x(D.stencilBuffer,ve),ze=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(D)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(D),Ee,D.width,D.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(D),Ee,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ze,n.RENDERBUFFER,V)}else{let be=D.textures;for(let ve=0;ve<be.length;ve++){let Ee=be[ve],ze=r.convert(Ee.format,Ee.colorSpace),ge=r.convert(Ee.type),xe=S(Ee.internalFormat,ze,ge,Ee.normalized,Ee.colorSpace);Pe(D)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(D),xe,D.width,D.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(D),xe,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,xe,D.width,D.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(V,D,ne){let be=D.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,V),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ve=i.get(D.depthTexture);ve.__renderTarget=D;let Ee=be?D.depthTexture.image[0]:D.depthTexture.image;(!ve.__webglTexture||Ee.width!==D.width||Ee.height!==D.height)&&(Ee.width=D.width,Ee.height=D.height,D.depthTexture.needsUpdate=!0),be?re(D.depthTexture,0):le(D.depthTexture,0);let ze=ve.__webglTexture,ge=gt(D),xe=be?n.TEXTURE_CUBE_MAP_POSITIVE_X+ne:n.TEXTURE_2D,Ne=D.depthTexture.format===ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(D.depthTexture.format===$i)Pe(D)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,xe,ze,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,xe,ze,0);else if(D.depthTexture.format===ss)Pe(D)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,xe,ze,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,xe,ze,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(V){let D=i.get(V),ne=V.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==V.depthTexture){let be=V.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),be){let ve=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,be.removeEventListener("dispose",ve)};be.addEventListener("dispose",ve),D.__depthDisposeCallback=ve}D.__boundDepthTexture=be}if(V.depthTexture&&!D.__autoAllocateDepthBuffer)if(ne)for(let be=0;be<6;be++)zt(D.__webglFramebuffer[be],V,be);else V.texture.mipmaps.length>0?zt(D.__webglFramebuffer[0],V,0):zt(D.__webglFramebuffer,V,0);else if(ne){D.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer[be]),D.__webglDepthbuffer[be]===void 0)D.__webglDepthbuffer[be]=n.createRenderbuffer(),Wt(D.__webglDepthbuffer[be],V,!1);else{let ve=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=D.__webglDepthbuffer[be];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,Ee)}}else if(V.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=n.createRenderbuffer(),Wt(D.__webglDepthbuffer,V,!1);else{let ve=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=D.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,Ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(V,D,ne){let be=i.get(V);D!==void 0&&Lt(be.__webglFramebuffer,V,V.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&Ye(V)}function Et(V){let D=V.texture,ne=i.get(V),be=i.get(D);V.addEventListener("dispose",k),L(V);let ve=V.textures,Ee=V.isWebGLCubeRenderTarget===!0,ze=ve.length>1;if(ze||(be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture()),be.__version=D.version,o.memory.textures++),Ee){ne.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(D.mipmaps.length>0){ne.__webglFramebuffer[ge]=[];for(let xe=0;xe<D.mipmaps.length;xe++)ne.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else ne.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(D.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ge=0;ge<D.mipmaps.length;ge++)ne.__webglFramebuffer[ge]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(ze)for(let ge=0,xe=ve.length;ge<xe;ge++){let Ne=i.get(ve[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(V.samples>0&&Pe(V)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ge=0;ge<ve.length;ge++){let xe=ve[ge];ne.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[ge]);let Ne=r.convert(xe.format,xe.colorSpace),X=r.convert(xe.type),me=S(xe.internalFormat,Ne,X,xe.normalized,xe.colorSpace,V.isXRRenderTarget===!0),ue=gt(V);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,me,V.width,V.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,ne.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),V.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(ne.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,D);for(let ge=0;ge<6;ge++)if(D.mipmaps.length>0)for(let xe=0;xe<D.mipmaps.length;xe++)Lt(ne.__webglFramebuffer[ge][xe],V,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Lt(ne.__webglFramebuffer[ge],V,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);R(D)?b(n.TEXTURE_CUBE_MAP):D.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,D.mipmaps.length-1),t.unbindTexture()}else if(ze){for(let ge=0,xe=ve.length;ge<xe;ge++){let Ne=ve[ge],X=i.get(Ne),me=n.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(me=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,X.__webglTexture),Oe(me,Ne),Lt(ne.__webglFramebuffer,V,Ne,n.COLOR_ATTACHMENT0+ge,me,0),R(Ne)&&b(me)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ge=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,be.__webglTexture),Oe(ge,D),D.mipmaps.length>0)for(let xe=0;xe<D.mipmaps.length;xe++)Lt(ne.__webglFramebuffer[xe],V,D,n.COLOR_ATTACHMENT0,ge,xe);else Lt(ne.__webglFramebuffer,V,D,n.COLOR_ATTACHMENT0,ge,0);R(D)?b(ge):D.mipmaps.length>0&&n.texParameteri(ge,n.TEXTURE_MAX_LEVEL,D.mipmaps.length-1),t.unbindTexture()}V.depthBuffer&&Ye(V)}function U(V){let D=V.textures;for(let ne=0,be=D.length;ne<be;ne++){let ve=D[ne];if(R(ve)&&ve.mipmapsAutoUpdate===!0){let Ee=E(V),ze=i.get(ve).__webglTexture;t.bindTexture(Ee,ze),b(Ee),t.unbindTexture()}}}let Dt=[];function vt(V){if(V.samples>0){if(Pe(V)===!1){let D=V.textures,ne=V.width,be=V.height,ve=n.COLOR_BUFFER_BIT,Ee=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=i.get(V),ge=D.length>1;if(ge)for(let Ne=0;Ne<D.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),V.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ne=0;Ne<D.length;Ne++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ne]);let X=i.get(D[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,ne,be,0,0,ne,be,ve,n.NEAREST),h===!0&&(Dt.length=0,Dt.push(n.COLOR_ATTACHMENT0+Ne),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&Dt.push(Ee),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<D.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ne]);let X=i.get(D[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,X,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&h){let D=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[D])}}}function gt(V){return Math.min(s.maxSamples,V.samples)}function Pe(V){let D=i.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function nn(V){let D=o.render.frame;f.get(V)!==D&&(f.set(V,D),V.update())}function Qe(V,D){let ne=V.colorSpace,be=V.format,ve=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||ne!==Io&&ne!==rs&&(Ct.getTransfer(ne)===Vt?(be!==ri||ve!==jn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",ne)),D}function rt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(l.width=V.naturalWidth||V.width,l.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(l.width=V.displayWidth,l.height=V.displayHeight):(l.width=V.width,l.height=V.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=B,this.getTextureUnits=G,this.setTextureUnits=J,this.setTexture2D=le,this.setTexture2DArray=Y,this.setTexture3D=de,this.setTextureCube=re,this.rebindTextures=mt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Pe,this.dispose=te}function mv(n,e){function t(i,s=rs){let r,o=Ct.getTransfer(s);if(i===jn)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===su)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ru)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nu)return n.BYTE;if(i===iu)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===kl)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===ou)return n.ALPHA;if(i===au)return n.RGB;if(i===ri)return n.RGBA;if(i===$i)return n.DEPTH_COMPONENT;if(i===ss)return n.DEPTH_STENCIL;if(i===Hl)return n.RED;if(i===Wl)return n.RED_INTEGER;if(i===Ls)return n.RG;if(i===Xl)return n.RG_INTEGER;if(i===ql)return n.RGBA_INTEGER;if(i===ia||i===sa||i===ra||i===oa)if(o===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yl||i===Zl||i===Jl||i===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===jl||i===Ql||i===ec||i===tc||i===aa||i===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$l||i===jl)return o===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ql)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ec)return r.COMPRESSED_R11_EAC;if(i===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===aa)return r.COMPRESSED_RG11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xc||i===_c||i===yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xc)return o===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vc||i===Mc||i===la||i===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xv=`
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

}`,Cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new $n({vertexShader:gv,fragmentShader:xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends Ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",h=1,l=null,f=null,d=null,p=null,m=null,u=null,M=typeof XRWebGLBinding<"u",g=new Cu,_={},T=t.getContextAttributes(),R=null,b=null,E=[],S=[],x=new yt,w=null,L=null,I=new Nn;I.viewport=new jt;let P=new Nn;P.viewport=new jt;let k=[I,P],O=new Ul,F=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=E[K];return le===void 0&&(le=new Fr,E[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=E[K];return le===void 0&&(le=new Fr,E[K]=le),le.getGripSpace()},this.getHand=function(K){let le=E[K];return le===void 0&&(le=new Fr,E[K]=le),le.getHandSpace()};function H(K){let le=S.indexOf(K.inputSource);if(le===-1)return;let Y=E[le];Y!==void 0&&(Y.update(K.inputSource,K.frame,l||o),Y.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",se);for(let K=0;K<E.length;K++){let le=S[K];le!==null&&(S[K]=null,E[K].disconnect(le))}F=null,te=null,g.reset();for(let K in _)delete _[K];if(e.setRenderTarget(R),m=null,p=null,d=null,s=null,b=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return u},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",se),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,de=null,re=null;T.depth&&(re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=T.stencil?ss:$i,de=T.stencil?er:Mi);let Ie={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new ii(p.textureWidth,p.textureHeight,{format:ri,type:jn,depthTexture:new es(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Y={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ii(m.framebufferWidth,m.framebufferHeight,{format:ri,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(K){for(let le=0;le<K.removed.length;le++){let Y=K.removed[le],de=S.indexOf(Y);de>=0&&(S[de]=null,E[de].disconnect(Y))}for(let le=0;le<K.added.length;le++){let Y=K.added[le],de=S.indexOf(Y);if(de===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=S.length){S.push(Y),de=Ie;break}else if(S[Ie]===null){S[Ie]=Y,de=Ie;break}if(de===-1)break}let re=E[de];re&&re.connect(Y)}}function Q(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let le=K.near,Y=K.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),O.near=P.near=I.near=le,O.far=P.far=I.far=Y,(F!==O.near||te!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,te=O.far),O.layers.mask=K.layers.mask|6,I.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let de=K.parent,re=O.cameras;Q(O,de);for(let Ie=0;Ie<re.length;Ie++)Q(re[Ie],de);O.projectionMatrix.copy(I.projectionMatrix),O.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),B(K,O,de)};function B(K,le,Y){Y===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Y.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function(K){h=K,p!==null&&(p.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(K){return _[K]};let G=null;function J(K,le){if(f=le.getViewerPose(l||o),u=le,f!==null){let Y=f.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let de=!1;Y.length!==O.cameras.length&&(O.cameras.length=0,de=!0);for(let De=0;De<Y.length;De++){let Oe=Y[De],je=null;if(m!==null)je=m.getViewport(Oe);else{let pt=d.getViewSubImage(p,Oe);je=pt.viewport,De===0&&(e.setRenderTargetTextures(b,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(b))}let Ke=k[De];Ke===void 0&&(Ke=new Nn,Ke.layers.enable(De),Ke.viewport=new jt,k[De]=Ke),Ke.matrix.fromArray(Oe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Oe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(je.x,je.y,je.width,je.height),De===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),de===!0&&O.cameras.push(Ke)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let De=d.getDepthInformation(Y[0]);De&&De.isValid&&De.texture&&g.init(De,s.renderState)}if(re&&re.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let De=0;De<Y.length;De++){let Oe=Y[De].camera;if(Oe){let je=_[Oe];je||(je=new Ho,_[Oe]=je);let Ke=d.getCameraImage(Oe);je.sourceTexture=Ke}}}}for(let Y=0;Y<E.length;Y++){let de=S[Y],re=E[Y];de!==null&&re!==void 0&&re.update(de,le,l||o)}G&&G(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),u=null}let j=new vp;j.setAnimationLoop(J),this.setAnimationLoop=function(K){G=K},this.dispose=function(){}}},_v=new It,Ip=new at;Ip.set(-1,0,0,0,1,0,0,0,1);function yv(n,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,gu(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function s(g,_,T,R,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(g,_):_.isMeshLambertMaterial?(r(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(g,_),d(g,_)):_.isMeshPhongMaterial?(r(g,_),f(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(g,_),p(g,_),_.isMeshPhysicalMaterial&&m(g,_,b)):_.isMeshMatcapMaterial?(r(g,_),u(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),M(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?h(g,_,T,R):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Cn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Cn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let T=e.get(_),R=T.envMap,b=T.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ip),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function h(g,_,T,R){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*T,g.scale.value=R*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function f(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function d(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function p(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,T){g.ior.value=_.ior,_.diffuseRoughness>0&&(g.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.retroreflectivity>0&&(g.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function u(g,_){_.matcap&&(g.matcap.value=_.matcap)}function M(g,_){let T=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vv(n,e,t,i){let s={},r={};function o(T,R){let b=R.program;i.uniformBlockBinding(T,b,s[T.id])}function a(T,R){let b=s[T.id];b===void 0&&(u(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",g));let E=R.program;i.updateUBOMapping(T,E);let S=e.render.frame;r[T.id]!==S&&(l(T),r[T.id]=S)}function h(T){let R=n.createBuffer(),b=T.__size,E=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,b,E),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function l(T){let R=s[T.id],b=T.uniforms,E=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let S=0,x=b.length;S<x;S++){let w=b[S];if(Array.isArray(w))for(let L=0,I=w.length;L<I;L++)f(w[L],S,L,E);else f(w,S,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,R,b,E){if(p(T,R,b,E)===!0){let S=T.__offset,x=T.value;if(Array.isArray(x)){let w=0;for(let L=0;L<x.length;L++){let I=x[L],P=M(I,!0);d(I,T.__data,w),w+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,T.__data)}}function d(T,R,b){typeof T=="number"||typeof T=="boolean"?R[b]=T:T.isMatrix3?(R[b]=T.elements[0],R[b+1]=T.elements[1],R[b+2]=T.elements[2],R[b+3]=0,R[b+4]=T.elements[3],R[b+5]=T.elements[4],R[b+6]=T.elements[5],R[b+7]=0,R[b+8]=T.elements[6],R[b+9]=T.elements[7],R[b+10]=T.elements[8],R[b+11]=0):ArrayBuffer.isView(T)?R.set(T.subarray(0,R.length-b),b):T.toArray(R,b)}function p(T,R,b,E){let S=T.value,x=R+"_"+b;if(Array.isArray(S)){E[x]===void 0&&(E[x]=[]);let w=E[x],L=!1;for(let I=0;I<S.length;I++)m(S[I],w,I)===!0&&(L=!0);return L}return m(S,E,x)}function m(T,R,b){if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:ArrayBuffer.isView(T)?R[b]=T.slice():R[b]=T.clone(),!0;{let E=R[b];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return R[b]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(E.equals(T)===!1)return E.copy(T),!0}}return!1}function u(T){let R=T.uniforms,b=0,E=16;for(let x=0,w=R.length;x<w;x++){let L=Array.isArray(R[x])?R[x]:[R[x]];for(let I=0,P=L.length;I<P;I++){let k=L[I],O=Array.isArray(k.value)?k.value:[k.value],F=Array.isArray(R[x])||Array.isArray(k.value),te=b;for(let W=0,se=O.length;W<se;W++){let Q=O[W],B=M(Q,F),G=b%E,J=G%B.boundary,j=G+J;b+=J,j!==0&&E-j<B.storage&&(b+=E-j),W===0&&(te=b),b+=B.storage}let H=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new H((b-te)/Float32Array.BYTES_PER_ELEMENT),k.__offset=te}}let S=b%E;return S>0&&(b+=E-S),T.__size=b,T.__cache={},this}function M(T,R){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=16,b.storage=48):T.isMatrix4?(b.boundary=16,b.storage=64):T.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(b.boundary=16,b.storage=T.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",T),R===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(T){let R=T.target;R.removeEventListener("dispose",g),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function _(){for(let T in s)n.deleteBuffer(s[T]);s={},r={}}return{bind:o,update:a,dispose:_}}var Mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function bv(){return Bi===null&&(Bi=new Ys(Mv,16,16,Ls,bi),Bi.name="DFG_LUT",Bi.minFilter=Sn,Bi.magFilter=Sn,Bi.wrapS=zi,Bi.wrapT=zi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Cc=class{constructor(e={}){let{canvas:t=Hd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:m=jn}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;let M=m,g=new Set([ql,Xl,Wl]),_=new Set([jn,Mi,Vr,er,Gl,Vl]),T=new Uint32Array(4),R=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,S=null,x=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,k=null,O=null,F=null,te=null;this._outputColorSpace=xn;let H=0,W=0,se=null,Q=-1,B=null,G=new jt,J=new jt,j=null,K=new et(0),le=0,Y=t.width,de=t.height,re=1,Ie=null,nt=null,De=new jt(0,0,Y,de),Oe=new jt(0,0,Y,de),je=!1,Ke=new Ts,pt=new Ml,ct=!1,tn=!1,Lt=new It,Wt=new $,zt=new jt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Et(){return se===null?re:1}let U=i;function Dt(z,ee){return t.getContext(z,ee)}let vt,gt,Pe,nn,Qe,rt,V,D,ne,be,ve,Ee,ze,ge,xe,Ne,X,me,ue,Ae,Le,Ce,He;try{let z={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),U===null){let ee="webgl2";if(U=Dt(ee,z),U===null)throw Dt(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(z){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ft("WebGLRenderer: "+z.message),z}function st(){vt=new D1(U),vt.init(),Le=new mv(U,vt),gt=new b1(U,vt,e,Le),Pe=new dv(U,vt),gt.reversedDepthBuffer&&p&&Pe.buffers.depth.setReversed(!0),O=U.createFramebuffer(),F=U.createFramebuffer(),te=U.createFramebuffer(),nn=new U1(U),Qe=new Qy,rt=new pv(U,vt,Pe,Qe,gt,Le,nn),V=new L1(I),D=new Og(U),Ce=new v1(U,D),ne=new N1(U,D,nn,Ce),be=new O1(U,ne,D,Ce,nn),me=new F1(U,gt,rt),xe=new S1(Qe),ve=new jy(I,V,vt,gt,Ce,xe),Ee=new yv(I,Qe),ze=new tv,ge=new av(vt),X=new y1(I,V,Pe,be,u,h),Ne=new fv(I,be,gt),He=new vv(U,nn,gt,Pe),ue=new M1(U,vt,nn),Ae=new z1(U,vt,nn),nn.programs=ve.programs,I.capabilities=gt,I.extensions=vt,I.properties=Qe,I.renderLists=ze,I.shadowMap=Ne,I.state=Pe,I.info=nn}M!==jn&&(L=new k1(M,t.width,t.height,a,s,r));let Re=new Ru(I,U);this.xr=Re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let z=vt.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){let z=vt.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(z){z!==void 0&&(re=z,this.setSize(Y,de,!1))},this.getSize=function(z){return z.set(Y,de)},this.setSize=function(z,ee,pe=!0){if(Re.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=z,de=ee,t.width=Math.floor(z*re),t.height=Math.floor(ee*re),pe===!0&&(t.style.width=z+"px",t.style.height=ee+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,z,ee)},this.getDrawingBufferSize=function(z){return z.set(Y*re,de*re).floor()},this.setDrawingBufferSize=function(z,ee,pe){Y=z,de=ee,re=pe,t.width=Math.floor(z*pe),t.height=Math.floor(ee*pe),this.setViewport(0,0,z,ee)},this.setEffects=function(z){if(M===jn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let ee=0;ee<z.length;ee++)if(z[ee].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(G)},this.getViewport=function(z){return z.copy(De)},this.setViewport=function(z,ee,pe,oe){z.isVector4?De.set(z.x,z.y,z.z,z.w):De.set(z,ee,pe,oe),Pe.viewport(G.copy(De).multiplyScalar(Et()).round())},this.getScissor=function(z){return z.copy(Oe)},this.setScissor=function(z,ee,pe,oe){z.isVector4?Oe.set(z.x,z.y,z.z,z.w):Oe.set(z,ee,pe,oe),Pe.scissor(J.copy(Oe).multiplyScalar(Et()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(z){Pe.setScissorTest(je=z)},this.setOpaqueSort=function(z){Ie=z},this.setTransparentSort=function(z){nt=z},this.getClearColor=function(z){return z.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(z=!0,ee=!0,pe=!0){let oe=0;if(z){let ae=!1;if(se!==null){let Fe=se.texture.format;ae=g.has(Fe)}if(ae){let Fe=se.texture.type,Je=_.has(Fe),Me=X.getClearColor(),Ge=X.getClearAlpha(),ke=Me.r,tt=Me.g,Mt=Me.b;Je?(T[0]=ke,T[1]=tt,T[2]=Mt,T[3]=Ge,U.clearBufferuiv(U.COLOR,0,T)):(R[0]=ke,R[1]=tt,R[2]=Mt,R[3]=Ge,U.clearBufferiv(U.COLOR,0,R))}else oe|=U.COLOR_BUFFER_BIT}ee&&(oe|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(oe|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&U.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),k=z},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),X.dispose(),ze.dispose(),ge.dispose(),rt.dispose(),Qe.dispose(),V.dispose(),be.dispose(),ne.dispose(),Ce.dispose(),He.dispose(),ve.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Qn),Re.removeEventListener("sessionend",Bn),Yt.stop()};function Be(z){z.preventDefault(),fu("WebGLRenderer: Context Lost."),P=!0}function it(){fu("WebGLRenderer: Context Restored."),P=!1;let z=nn.autoReset,ee=Ne.enabled,pe=Ne.autoUpdate,oe=Ne.needsUpdate,ae=Ne.type;st(),nn.autoReset=z,Ne.enabled=ee,Ne.autoUpdate=pe,Ne.needsUpdate=oe,Ne.type=ae}function Ue(z){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Ut(z){let ee=z.target;ee.removeEventListener("dispose",Ut),sn(ee)}function sn(z){xt(z),Qe.remove(z)}function xt(z){let ee=Qe.get(z).programs;ee!==void 0&&(ee.forEach(function(pe){ve.releaseProgram(pe)}),z.isShaderMaterial&&ve.releaseShaderCache(z))}this.renderBufferDirect=function(z,ee,pe,oe,ae,Fe){ee===null&&(ee=Ye);let Je=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Me=ms(z,ee,pe,oe,ae);Pe.setMaterial(oe,Je);let Ge=pe.index,ke=1;if(oe.wireframe===!0){if(Ge=ne.getWireframeAttribute(pe),Ge===void 0)return;ke=2}let tt=pe.drawRange,Mt=pe.attributes.position,Xe=tt.start*ke,ht=(tt.start+tt.count)*ke;Fe!==null&&(Xe=Math.max(Xe,Fe.start*ke),ht=Math.min(ht,(Fe.start+Fe.count)*ke)),Ge!==null?(Xe=Math.max(Xe,0),ht=Math.min(ht,Ge.count)):Mt!=null&&(Xe=Math.max(Xe,0),ht=Math.min(ht,Mt.count));let Ht=ht-Xe;if(Ht<0||Ht===1/0)return;Ce.setup(ae,oe,Me,pe,Ge);let Ft,Bt=ue;if(Ge!==null&&(Ft=D.get(Ge),Bt=Ae,Bt.setIndex(Ft)),ae.isMesh)oe.wireframe===!0?(Pe.setLineWidth(oe.wireframeLinewidth*Et()),Bt.setMode(U.LINES)):Bt.setMode(U.TRIANGLES);else if(ae.isLine){let fn=oe.linewidth;fn===void 0&&(fn=1),Pe.setLineWidth(fn*Et()),ae.isLineSegments?Bt.setMode(U.LINES):ae.isLineLoop?Bt.setMode(U.LINE_LOOP):Bt.setMode(U.LINE_STRIP)}else ae.isPoints?Bt.setMode(U.POINTS):ae.isSprite&&Bt.setMode(U.TRIANGLES);if(ae.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let fn=ae._multiDrawStarts,Ze=ae._multiDrawCounts,vn=ae._multiDrawCount,Ot=Ge?D.get(Ge).bytesPerElement:1,Gn=Qe.get(oe).currentProgram.getUniforms();for(let ut=0;ut<vn;ut++)Gn.setValue(U,"_gl_DrawID",ut),Bt.render(fn[ut]/Ot,Ze[ut])}else if(ae.isInstancedMesh)Bt.renderInstances(Xe,Ht,ae.count);else if(pe.isInstancedBufferGeometry){let fn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ze=Math.min(pe.instanceCount,fn);Bt.renderInstances(Xe,Ht,Ze)}else Bt.render(Xe,Ht)};function mi(z,ee,pe,oe){k!==null&&z.isNodeMaterial&&k.setObject(oe,z),ct===!0&&xe.setState(z,pe,!1),z.transparent===!0&&z.side===zn&&z.forceSinglePass===!1?(z.side=Cn,z.needsUpdate=!0,Ei(z,ee,oe),z.side=Is,z.needsUpdate=!0,Ei(z,ee,oe),z.side=zn):Ei(z,ee,oe)}this.compile=function(z,ee,pe=null){pe===null&&(pe=z),k!==null&&k.renderStart(z,ee,pe),S=ge.get(pe),S.init(ee),w.push(S),pe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(S.pushLight(ae),ae.castShadow&&S.pushShadow(ae))}),z!==pe&&z.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(S.pushLight(ae),ae.castShadow&&S.pushShadow(ae))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),tn=this.localClippingEnabled,ct=xe.init(this.clippingPlanes,tn),ct===!0&&xe.setGlobalState(this.clippingPlanes,ee),k!==null&&Ne.render(S.state.shadowsArray,pe,ee);let oe=new Set;return z.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Fe=ae.material;if(Fe)if(Array.isArray(Fe))for(let Je=0;Je<Fe.length;Je++){let Me=Fe[Je];mi(Me,pe,ee,ae),oe.add(Me)}else mi(Fe,pe,ee,ae),oe.add(Fe)}),S=w.pop(),k!==null&&k.renderEnd(),oe},this.compileAsync=function(z,ee,pe=null){let oe=this.compile(z,ee,pe);return new Promise(ae=>{function Fe(){if(oe.forEach(function(Je){let Ge=Qe.get(Je).currentProgram;(Ge===void 0||Ge.isReady())&&oe.delete(Je)}),oe.size===0){ae(z);return}setTimeout(Fe,10)}vt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ai=null;function ds(z){ai&&ai(z)}function Qn(){Yt.stop()}function Bn(){Yt.start()}let Yt=new vp;Yt.setAnimationLoop(ds),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(z){ai=z,Re.setAnimationLoop(z),z===null?Yt.stop():Yt.start()},Re.addEventListener("sessionstart",Qn),Re.addEventListener("sessionend",Bn),this.render=function(z,ee){if(ee!==void 0&&ee.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(z,ee);let pe=Re.enabled===!0&&Re.isPresenting===!0,oe=L!==null&&(se===null||pe)&&L.begin(I,se);if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(ee),ee=Re.getCamera()),z.isScene===!0&&z.onBeforeRender(I,z,ee,se),S=ge.get(z,w.length),S.init(ee),S.state.textureUnits=rt.getTextureUnits(),w.push(S),Lt.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ee.isArrayCamera?pt.setFromArrayCamera(ee):Ke.setFromProjectionMatrix(Lt,ui,ee.reversedDepth),tn=this.localClippingEnabled,ct=xe.init(this.clippingPlanes,tn),E=ze.get(z,x.length),E.init(),x.push(E),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){let Je=I.xr.getDepthSensingMesh();Je!==null&&ks(Je,ee,-1/0,I.sortObjects)}ks(z,ee,0,I.sortObjects),E.finish(),k!==null&&k.updateLights(S.state.lightsArray),I.sortObjects===!0&&E.sort(Ie,nt),mt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,mt&&X.addToRenderList(E,z),this.info.autoReset===!0&&this.info.reset(),ct===!0&&xe.beginShadows();let ae=S.state.shadowsArray;if(Ne.render(ae,z,ee),ct===!0&&xe.endShadows(),(oe&&L.hasRenderPass())===!1){let Je=E.opaque,Me=E.transmissive;if(S.setupLights(),ee.isArrayCamera){let Ge=ee.cameras;if(Me.length>0)for(let ke=0,tt=Ge.length;ke<tt;ke++){let Mt=Ge[ke];ps(Je,Me,z,Mt)}mt&&X.render(z);for(let ke=0,tt=Ge.length;ke<tt;ke++){let Mt=Ge[ke];li(E,z,Mt,Mt.viewport)}}else Me.length>0&&ps(Je,Me,z,ee),mt&&X.render(z),li(E,z,ee)}se!==null&&W===0&&(rt.updateMultisampleRenderTarget(se),rt.updateRenderTargetMipmap(se)),oe&&L.end(I),z.isScene===!0&&z.onAfterRender(I,z,ee),Ce.resetDefaultState(),Q=-1,B=null,w.pop(),w.length>0?(S=w[w.length-1],rt.setTextureUnits(S.state.textureUnits),ct===!0&&xe.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,k!==null&&k.renderEnd()};function ks(z,ee,pe,oe){if(z.visible===!1)return;if(z.layers.test(ee.layers)){if(z.isGroup)pe=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(ee);else if(z.isLight)S.pushLight(z),z.castShadow&&S.pushShadow(z);else if(z.isSprite){let Je=ee.isArrayCamera?pt:Ke;if(!z.frustumCulled||z.intersectsFrustum(Je)){oe&&zt.setFromMatrixPosition(z.matrixWorld).applyMatrix4(Lt);let Me=be.update(z),Ge=z.material;Ge.visible&&E.push(z,Me,Ge,pe,zt.z,null,ee)}}else if(z.isMesh||z.isLine||z.isPoints){let Je=ee.isArrayCamera?pt:Ke;if(!z.frustumCulled||z.intersectsFrustum(Je)){let Me=be.update(z),Ge=z.material;if(oe&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),zt.copy(z.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),zt.copy(Me.boundingSphere.center)),zt.applyMatrix4(z.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ge)){let ke=Me.groups;for(let tt=0,Mt=ke.length;tt<Mt;tt++){let Xe=ke[tt],ht=Ge[Xe.materialIndex];ht&&ht.visible&&E.push(z,Me,ht,pe,zt.z,Xe,ee)}}else Ge.visible&&E.push(z,Me,Ge,pe,zt.z,null,ee)}}}let Fe=z.children;for(let Je=0,Me=Fe.length;Je<Me;Je++)ks(Fe[Je],ee,pe,oe)}function li(z,ee,pe,oe){let{opaque:ae,transmissive:Fe,transparent:Je}=z;S.setupLightsView(pe),ct===!0&&xe.setGlobalState(I.clippingPlanes,pe),oe&&Pe.viewport(G.copy(oe)),ae.length>0&&Zn(ae,ee,pe),Fe.length>0&&Zn(Fe,ee,pe),Je.length>0&&Zn(Je,ee,pe),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ps(z,ee,pe,oe){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[oe.id]===void 0){let Xe=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[oe.id]=new ii(1,1,{generateMipmaps:!0,type:Xe?bi:jn,minFilter:is,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}let Fe=S.state.transmissionRenderTarget[oe.id],Je=oe.viewport||G;Fe.setSize(Je.z*I.transmissionResolutionScale,Je.w*I.transmissionResolutionScale);let Me=I.getRenderTarget(),Ge=I.getActiveCubeFace(),ke=I.getActiveMipmapLevel();I.setRenderTarget(Fe),I.getClearColor(K),le=I.getClearAlpha(),le<1&&I.setClearColor(16777215,.5),I.clear(),mt&&X.render(pe);let tt=I.toneMapping;I.toneMapping=Oi;let Mt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),S.setupLightsView(oe),ct===!0&&xe.setGlobalState(I.clippingPlanes,oe),Zn(z,pe,oe),rt.updateMultisampleRenderTarget(Fe),rt.updateRenderTargetMipmap(Fe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ht=0,Ht=ee.length;ht<Ht;ht++){let Ft=ee[ht],{object:Bt,geometry:fn,material:Ze,group:vn}=Ft;if(Ze.side===zn&&Bt.layers.test(oe.layers)){let Ot=Ze.side;Ze.side=Cn,Ze.needsUpdate=!0,$t(Bt,pe,oe,fn,Ze,vn),Ze.side=Ot,Ze.needsUpdate=!0,Xe=!0}}Xe===!0&&(rt.updateMultisampleRenderTarget(Fe),rt.updateRenderTargetMipmap(Fe))}I.setRenderTarget(Me,Ge,ke),I.setClearColor(K,le),Mt!==void 0&&(oe.viewport=Mt),I.toneMapping=tt}function Zn(z,ee,pe){let oe=ee.isScene===!0?ee.overrideMaterial:null;for(let ae=0,Fe=z.length;ae<Fe;ae++){let Je=z[ae],{object:Me,geometry:Ge,group:ke}=Je,tt=Je.material;tt.allowOverride===!0&&oe!==null&&(tt=oe),Me.layers.test(pe.layers)&&$t(Me,ee,pe,Ge,tt,ke)}}function $t(z,ee,pe,oe,ae,Fe){k!==null&&ae.isNodeMaterial&&k.setObject(z,ae),z.onBeforeRender(I,ee,pe,oe,ae,Fe),z.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),ae.onBeforeRender(I,ee,pe,oe,z,Fe),ae.transparent===!0&&ae.side===zn&&ae.forceSinglePass===!1?(ae.side=Cn,ae.needsUpdate=!0,I.renderBufferDirect(pe,ee,oe,ae,z,Fe),ae.side=Is,ae.needsUpdate=!0,I.renderBufferDirect(pe,ee,oe,ae,z,Fe),ae.side=zn):I.renderBufferDirect(pe,ee,oe,ae,z,Fe),z.onAfterRender(I,ee,pe,oe,ae,Fe)}function rn(z){let ee=0;for(let pe of z)pe.texture!==null&&ee++;return ee}function Ei(z,ee,pe){ee.isScene!==!0&&(ee=Ye);let oe=Qe.get(z),ae=S.state.lights,Fe=S.state.shadowsArray,Je=ae.state.version,Me=ve.getParameters(z,ae.state,Fe,ee,pe,S.state.lightProbeGridArray),Ge=ve.getProgramCacheKey(Me),ke=oe.programs;oe.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?ee.environment:null,oe.fog=ee.fog;let tt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;oe.envMap=V.get(z.envMap||oe.environment,tt),oe.envMapRotation=oe.environment!==null&&z.envMap===null?ee.environmentRotation:z.envMapRotation,ke===void 0&&(z.addEventListener("dispose",Ut),ke=new Map,oe.programs=ke,oe.programVariants=new Map);let Mt=ke.get(Ge);if(Mt!==void 0){if(oe.currentProgram===Mt&&oe.lightsStateVersion===Je)return Ci(z,Me),Mt}else Me.uniforms=ve.getUniforms(z),k!==null&&z.isNodeMaterial&&k.build(z,pe,Me),z.onBeforeCompile(Me,I),Mt=ve.acquireProgram(Me,Ge),ke.set(Ge,Mt),oe.uniforms=Me.uniforms;let Xe=oe.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(Xe.clippingPlanes=xe.uniform),Ci(z,Me),oe.needsLights=mo(z),oe.lightsStateVersion=Je,oe.needsLights&&(Xe.ambientLightColor.value=ae.state.ambient,Xe.lightProbe.value=ae.state.probe,Xe.sunLights.value=ae.state.sun,Xe.sunLightShadows.value=ae.state.sunShadow,Xe.directionalLights.value=ae.state.directional,Xe.directionalLightShadows.value=ae.state.directionalShadow,Xe.spotLights.value=ae.state.spot,Xe.spotLightShadows.value=ae.state.spotShadow,Xe.rectAreaLights.value=ae.state.rectArea,Xe.ltc_1.value=ae.state.rectAreaLTC1,Xe.ltc_2.value=ae.state.rectAreaLTC2,Xe.pointLights.value=ae.state.point,Xe.pointLightShadows.value=ae.state.pointShadow,Xe.hemisphereLights.value=ae.state.hemi,Xe.sunShadowMatrix.value=ae.state.sunShadowMatrix,Xe.sunShadowCascade.value=ae.state.sunShadowCascade,Xe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ae.state.spotLightMatrix,Xe.spotLightMap.value=ae.state.spotLightMap,Xe.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.numLightProbeGrids=rn(S.state.lightProbeGridArray),oe.currentProgram=Mt,oe.uniformsList=null,Mt}function th(z,ee,pe,oe,ae){let Fe=Qe.get(z),Je=Fe.currentProgram.id+","+oe+","+ae,Me=Fe.programVariants.get(Je);return Me===void 0?(Me=Ei(z,ee,pe),Fe.programVariants.set(Je,Me)):(Fe.currentProgram=Me,Fe.uniformsList=null,Fe.outputColorSpace=oe,Fe.toneMapping=ae),Me}function kn(z){if(z.uniformsList===null){let ee=z.currentProgram.getUniforms();z.uniformsList=Xr.seqWithValue(ee.seq,z.uniforms)}return z.uniformsList}function Ci(z,ee){let pe=Qe.get(z);pe.outputColorSpace=ee.outputColorSpace,pe.batching=ee.batching,pe.batchingColor=ee.batchingColor,pe.instancing=ee.instancing,pe.instancingColor=ee.instancingColor,pe.instancingMorph=ee.instancingMorph,pe.skinning=ee.skinning,pe.morphTargets=ee.morphTargets,pe.morphNormals=ee.morphNormals,pe.morphColors=ee.morphColors,pe.morphTargetsCount=ee.morphTargetsCount,pe.numClippingPlanes=ee.numClippingPlanes,pe.numIntersection=ee.numClipIntersection,pe.vertexAlphas=ee.vertexAlphas,pe.vertexTangents=ee.vertexTangents,pe.toneMapping=ee.toneMapping}function ms(z,ee,pe,oe,ae){ee.isScene!==!0&&(ee=Ye),rt.resetTextureUnits();let Fe=ee.fog,Je=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?ee.environment:null,Me=se===null?I.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ct.workingColorSpace,Ge=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,ke=V.get(oe.envMap||Je,Ge),tt=oe.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Mt=!!pe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Xe=!!pe.morphAttributes.position,ht=!!pe.morphAttributes.normal,Ht=!!pe.morphAttributes.color,Ft=Oi;oe.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ft=I.toneMapping);let Bt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,fn=Bt!==void 0?Bt.length:0,Ze=Qe.get(oe),vn=S.state.lights;if(ct===!0&&(tn===!0||z!==B)){let qt=z===B&&oe.id===Q;xe.setState(oe,z,qt)}let Ot=!1,Gn=!1;oe.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==vn.state.version||ae.isBatchedMesh&&Ze.batching===!1||!ae.isBatchedMesh&&Ze.batching===!0||ae.isBatchedMesh&&Ze.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ze.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ze.instancingMorph===!1&&ae.morphTexture!==null||Ze.envMap!==ke||oe.fog===!0&&Ze.fog!==Fe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==xe.numPlanes||Ze.numIntersection!==xe.numIntersection)||Ze.vertexAlphas!==tt||Ze.vertexTangents!==Mt||Ze.morphTargets!==Xe||Ze.morphNormals!==ht||Ze.morphColors!==Ht||Ze.morphTargetsCount!==fn||Ze.numLightProbeGrids!==rn(S.state.lightProbeGridArray)?Ot=!0:(Ze.outputColorSpace!==Me||Ze.toneMapping!==Ft)&&(Gn=!0):(Ot=!0,Ze.__version=oe.version);let ut=Ze.currentProgram;(Ot===!0||Gn===!0)&&(ut=Gn===!0?th(oe,ee,ae,Me,Ft):Ei(oe,ee,ae),k&&oe.isNodeMaterial&&k.onUpdateProgram(oe,ut,Ze));let go=!1,Jn=!1,Ri=!1,bt=ut.getUniforms(),dn=Ze.uniforms;if(Pe.useProgram(ut.program)&&(go=!0,Jn=!0,Ri=!0),oe.id!==Q&&(Q=oe.id,Jn=!0),go||B!==z){Pe.buffers.depth.getReversed()&&z.reversedDepth!==!0&&(z._reversedDepth=!0,z.updateProjectionMatrix()),bt.setValue(U,"projectionMatrix",z.projectionMatrix),bt.setValue(U,"viewMatrix",z.matrixWorldInverse);let Zt=bt.map.cameraPosition;Zt!==void 0&&Zt.setValue(U,Wt.setFromMatrixPosition(z.matrixWorld)),gt.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&bt.setValue(U,"isOrthographic",z.isOrthographicCamera===!0),B!==z&&(B=z,Jn=!0,Ri=!0)}if(Ze.needsLights&&(vn.state.sunShadowMap.length>0&&bt.setValue(U,"sunShadowMap",vn.state.sunShadowMap,rt),vn.state.directionalShadowMap.length>0&&bt.setValue(U,"directionalShadowMap",vn.state.directionalShadowMap,rt),vn.state.spotShadowMap.length>0&&bt.setValue(U,"spotShadowMap",vn.state.spotShadowMap,rt),vn.state.pointShadowMap.length>0&&bt.setValue(U,"pointShadowMap",vn.state.pointShadowMap,rt)),ae.isSkinnedMesh){bt.setOptional(U,ae,"bindMatrix"),bt.setOptional(U,ae,"bindMatrixInverse");let qt=ae.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),bt.setValue(U,"boneTexture",qt.boneTexture,rt))}ae.isBatchedMesh&&(bt.setOptional(U,ae,"batchingTexture"),bt.setValue(U,"batchingTexture",ae._matricesTexture,rt),bt.setOptional(U,ae,"batchingIdTexture"),bt.setValue(U,"batchingIdTexture",ae._indirectTexture,rt),bt.setOptional(U,ae,"batchingColorTexture"),ae._colorsTexture!==null&&bt.setValue(U,"batchingColorTexture",ae._colorsTexture,rt));let $e=pe.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&me.update(ae,pe,ut),(Jn||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,bt.setValue(U,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&ee.environment!==null&&(dn.envMapIntensity.value=ee.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=bv()),Jn){if(bt.setValue(U,"toneMappingExposure",I.toneMappingExposure),Ze.needsLights&&po(dn,Ri),Fe&&oe.fog===!0&&Ee.refreshFogUniforms(dn,Fe),Ee.refreshMaterialUniforms(dn,oe,re,de,S.state.transmissionRenderTarget[z.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){let qt=b,Zt=0;for(let kt of S.state.lightProbeGridArray)kt.texture!==null&&(qt.textures[Zt]=kt.texture,qt.min[Zt]=kt.boundingBox.min,qt.max[Zt]=kt.boundingBox.max,qt.resolution[Zt]=kt.resolution,Zt++);for(let kt in qt)qt[kt].length=Zt;dn.probesSH.value=qt.textures,dn.probesMin.value=qt.min,dn.probesMax.value=qt.max,dn.probesResolution.value=qt.resolution}Xr.upload(U,kn(Ze),dn,rt)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Xr.upload(U,kn(Ze),dn,rt),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&bt.setValue(U,"center",ae.center),bt.setValue(U,"modelViewMatrix",ae.modelViewMatrix),bt.setValue(U,"normalMatrix",ae.normalMatrix),bt.setValue(U,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){let qt=oe.uniformsGroups;for(let Zt=0,kt=qt.length;Zt<kt;Zt++){let Ii=qt[Zt];He.update(Ii,ut),He.bind(Ii,ut)}}return ut}function po(z,ee){z.ambientLightColor.needsUpdate=ee,z.lightProbe.needsUpdate=ee,z.sunLights.needsUpdate=ee,z.sunLightShadows.needsUpdate=ee,z.directionalLights.needsUpdate=ee,z.directionalLightShadows.needsUpdate=ee,z.pointLights.needsUpdate=ee,z.pointLightShadows.needsUpdate=ee,z.spotLights.needsUpdate=ee,z.spotLightShadows.needsUpdate=ee,z.rectAreaLights.needsUpdate=ee,z.hemisphereLights.needsUpdate=ee}function mo(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(z,ee,pe){let oe=Qe.get(z);oe.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Qe.get(z.texture).__webglTexture=ee,Qe.get(z.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:pe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,ee){let pe=Qe.get(z);pe.__webglFramebuffer=ee,pe.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(z,ee=0,pe=0){se=z,H=ee,W=pe;let oe=null,ae=!1,Fe=!1;if(z){let Me=Qe.get(z);if(Me.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),G.copy(z.viewport),J.copy(z.scissor),j=z.scissorTest,Pe.viewport(G),Pe.scissor(J),Pe.setScissorTest(j),Q=-1;return}else if(Me.__webglFramebuffer===void 0)rt.setupRenderTarget(z);else if(Me.__hasExternalTextures)rt.rebindTextures(z,Qe.get(z.texture).__webglTexture,Qe.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let tt=z.depthTexture;if(Me.__boundDepthTexture!==tt){if(tt!==null&&Qe.has(tt)&&(z.width!==tt.image.width||z.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(z)}}let Ge=z.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Fe=!0);let ke=Qe.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(ke[ee])?oe=ke[ee][pe]:oe=ke[ee],ae=!0):z.samples>0&&rt.useMultisampledRTT(z)===!1?oe=Qe.get(z).__webglMultisampledFramebuffer:Array.isArray(ke)?oe=ke[pe]:oe=ke,G.copy(z.viewport),J.copy(z.scissor),j=z.scissorTest}else G.copy(De).multiplyScalar(re).floor(),J.copy(Oe).multiplyScalar(re).floor(),j=je;if(pe!==0&&(oe=O),Pe.bindFramebuffer(U.FRAMEBUFFER,oe)&&Pe.drawBuffers(z,oe),Pe.viewport(G),Pe.scissor(J),Pe.setScissorTest(j),ae){let Me=Qe.get(z.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me.__webglTexture,pe)}else if(Fe){let Me=ee;for(let Ge=0;Ge<z.textures.length;Ge++){let ke=Qe.get(z.textures[Ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ge,ke.__webglTexture,pe,Me)}}else if(z!==null&&pe!==0){let Me=Qe.get(z.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,pe)}Q=-1};function Gs(z){let ee=Qe.get(z);return(ee.__readFormat!==z.format||ee.__readType!==z.type)&&(ee.__readFormat=z.format,ee.__readType=z.type,ee.__formatReadable=gt.textureFormatReadable(z.format),ee.__typeReadable=gt.textureTypeReadable(z.type)),ee}this.readRenderTargetPixels=function(z,ee,pe,oe,ae,Fe,Je,Me=0){if(!(z&&z.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Qe.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Je!==void 0&&(Ge=Ge[Je],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){Pe.bindFramebuffer(U.FRAMEBUFFER,Ge);try{let ke=z.textures[Me],tt=ke.format,Mt=ke.type;z.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Xe=Gs(ke);if(Xe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=z.width-oe&&pe>=0&&pe<=z.height-ae&&U.readPixels(ee,pe,oe,ae,Le.convert(tt),Le.convert(Mt),Fe)}finally{let ke=se!==null?Qe.get(se).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(z,ee,pe,oe,ae,Fe,Je,Me=0){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Qe.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Je!==void 0&&(Ge=Ge[Je],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(ee>=0&&ee<=z.width-oe&&pe>=0&&pe<=z.height-ae){Pe.bindFramebuffer(U.FRAMEBUFFER,Ge);let ke=z.textures[Me],tt=ke.format,Mt=ke.type;z.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Xe=Gs(ke);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.bufferData(U.PIXEL_PACK_BUFFER,Fe.byteLength,U.STREAM_READ),U.readPixels(ee,pe,oe,ae,Le.convert(tt),Le.convert(Mt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ht=se!==null?Qe.get(se).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Ht);let Ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xd(U,Ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ht),U.deleteSync(Ft),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,ee=null,pe=0){let oe=Math.pow(2,-pe),ae=Math.floor(z.image.width*oe),Fe=Math.floor(z.image.height*oe),Je=ee!==null?ee.x:0,Me=ee!==null?ee.y:0;rt.setTexture2D(z,0),U.copyTexSubImage2D(U.TEXTURE_2D,pe,0,0,Je,Me,ae,Fe),Pe.unbindTexture()},this.copyTextureToTexture=function(z,ee,pe=null,oe=null,ae=0,Fe=0){let Je,Me,Ge,ke,tt,Mt,Xe,ht,Ht,Ft=z.isCompressedTexture?z.mipmaps[Fe]:z.image;if(pe!==null)Je=pe.max.x-pe.min.x,Me=pe.max.y-pe.min.y,Ge=pe.isBox3?pe.max.z-pe.min.z:1,ke=pe.min.x,tt=pe.min.y,Mt=pe.isBox3?pe.min.z:0;else{let bt=Math.pow(2,-ae);Je=Math.floor(Ft.width*bt),Me=Math.floor(Ft.height*bt),z.isDataArrayTexture?Ge=Ft.depth:z.isData3DTexture?Ge=Math.floor(Ft.depth*bt):Ge=1,ke=0,tt=0,Mt=0}oe!==null?(Xe=oe.x,ht=oe.y,Ht=oe.z):(Xe=0,ht=0,Ht=0);let Bt=Le.convert(ee.format),fn=Le.convert(ee.type),Ze;ee.isData3DTexture?(rt.setTexture3D(ee,0),Ze=U.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(rt.setTexture2DArray(ee,0),Ze=U.TEXTURE_2D_ARRAY):(rt.setTexture2D(ee,0),Ze=U.TEXTURE_2D),Pe.activeTexture(U.TEXTURE0),Pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ee.flipY),Pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Pe.pixelStorei(U.UNPACK_ALIGNMENT,ee.unpackAlignment);let vn=Pe.getParameter(U.UNPACK_ROW_LENGTH),Ot=Pe.getParameter(U.UNPACK_IMAGE_HEIGHT),Gn=Pe.getParameter(U.UNPACK_SKIP_PIXELS),ut=Pe.getParameter(U.UNPACK_SKIP_ROWS),go=Pe.getParameter(U.UNPACK_SKIP_IMAGES);Pe.pixelStorei(U.UNPACK_ROW_LENGTH,Ft.width),Pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ft.height),Pe.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),Pe.pixelStorei(U.UNPACK_SKIP_ROWS,tt),Pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Mt);let Jn=z.isDataArrayTexture||z.isData3DTexture,Ri=ee.isDataArrayTexture||ee.isData3DTexture;if(z.isDepthTexture){let bt=Qe.get(z),dn=Qe.get(ee),$e=Qe.get(bt.__renderTarget),qt=Qe.get(dn.__renderTarget);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,$e.__webglFramebuffer),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Zt=0;Zt<Ge;Zt++)Jn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qe.get(z).__webglTexture,ae,Mt+Zt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qe.get(ee).__webglTexture,Fe,Ht+Zt)),U.blitFramebuffer(ke,tt,ke+Je,tt+Me,Xe,ht,Xe+Je,ht+Me,U.DEPTH_BUFFER_BIT,U.NEAREST);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ae!==0||z.isRenderTargetTexture||Qe.has(z)){let bt=Qe.get(z),dn=Qe.get(ee);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,F),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,te);for(let $e=0;$e<Ge;$e++)Jn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,ae,Mt+$e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,ae),Ri?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dn.__webglTexture,Fe,Ht+$e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dn.__webglTexture,Fe),ae!==0?U.blitFramebuffer(ke,tt,ke+Je,tt+Me,Xe,ht,Xe+Je,ht+Me,U.COLOR_BUFFER_BIT,U.NEAREST):Ri?U.copyTexSubImage3D(Ze,Fe,Xe,ht,Ht+$e,ke,tt,Je,Me):U.copyTexSubImage2D(Ze,Fe,Xe,ht,ke,tt,Je,Me);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ri?z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Ze,Fe,Xe,ht,Ht,Je,Me,Ge,Bt,fn,Ft.data):ee.isCompressedArrayTexture?U.compressedTexSubImage3D(Ze,Fe,Xe,ht,Ht,Je,Me,Ge,Bt,Ft.data):U.texSubImage3D(Ze,Fe,Xe,ht,Ht,Je,Me,Ge,Bt,fn,Ft):z.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Fe,Xe,ht,Je,Me,Bt,fn,Ft.data):z.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Fe,Xe,ht,Ft.width,Ft.height,Bt,Ft.data):U.texSubImage2D(U.TEXTURE_2D,Fe,Xe,ht,Je,Me,Bt,fn,Ft);Pe.pixelStorei(U.UNPACK_ROW_LENGTH,vn),Pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot),Pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Gn),Pe.pixelStorei(U.UNPACK_SKIP_ROWS,ut),Pe.pixelStorei(U.UNPACK_SKIP_IMAGES,go),Fe===0&&ee.generateMipmaps===!0&&ee.mipmapsAutoUpdate===!0&&U.generateMipmap(Ze),Pe.unbindTexture()},this.initRenderTarget=function(z){Qe.get(z).__webglFramebuffer===void 0&&rt.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?rt.setTextureCube(z,0):z.isData3DTexture?rt.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?rt.setTexture2DArray(z,0):rt.setTexture2D(z,0),Pe.unbindTexture()},this.resetState=function(){H=0,W=0,se=null,Pe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}};var en={west:62,east:106,halfDepth:48,home:{x:96,z:41.52}},qn={west:39,east:65,north:63,south:87,gate:{x:55,z:64},bay:{x:55,z:76},approach:{x:55,z:57}},cn=[-57,-19,19,57],Si=[-38,0,38],da={x:11.7,z:3.2},Yr={x:12.05,z:-5.45},Ds={x:2,z:38},In={x:38,z:-38},nr={door:{x:47.6,z:-33},inside:{x:47.6,z:-38.4,angle:0},out:{x:47.6,z:-29.6,angle:0}},Pp={x:42.3,z:-41.25},_t=(n,e,t)=>Math.max(e,Math.min(t,n)),ie=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Rn(n,e,t,i){let s=Math.abs(n)+t<65&&Math.abs(e)+t<65,r=n>en.west&&n+t<en.east&&Math.abs(e)+t<en.halfDepth,o=n-t>qn.west&&n+t<qn.east&&e>qn.north&&e+t<qn.south;return(s||r||o)&&i.every(a=>{if(a.off)return!0;let h=n-_t(n,a.x-a.w/2,a.x+a.w/2),l=e-_t(e,a.z-a.d/2,a.z+a.d/2);return h*h+l*l>=t*t})}function pa(n,e,t,i,s){let r=n.x,o=n.z;return Rn(e,n.z,i,s)&&(n.x=e),Rn(n.x,t,i,s)&&(n.z=t),n.x!==r||n.z!==o}function wn(n,e,t){let i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+_t(i,-t,t)}function Lp(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function Pc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,h=new Qt;h.morphTargetsRelative=a;let l=0;for(let f=0;f<n.length;++f){let d=n[f],p=0,m=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[u].length!==n[0].morphAttributes[u].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have the same number of morph targets for the "'+u+'" morph attribute.'),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of morph attributes."),null;if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,u,f),l+=u}}if(t){let f=0,d=[];for(let p=0;p<n.length;++p){let m=n[p].index;for(let u=0;u<m.count;++u)d.push(m.getX(u)+f);f+=n[p].attributes.position.count}h.setIndex(d)}for(let f in r){let d=Dp(r[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;h.setAttribute(f,d)}for(let f in o){let d=o[f][0].length;if(d!==0){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[f]=[];for(let p=0;p<d;++p){let m=[];for(let M=0;M<o[f].length;++M)m.push(o[f][M][p]);let u=Dp(m);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;h.morphAttributes[f].push(u)}}}return h}function Dp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let f=n[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}let o=new e(r),a=new ln(o,t,i),h=0;for(let l=0;l<n.length;++l){let f=n[l];if(f.isInterleavedBufferAttribute){let d=h/t;for(let p=0,m=f.count;p<m;p++)for(let u=0;u<t;u++){let M=f.getComponent(p,u);a.setComponent(p+d,u,M)}}else o.set(f.array,h);h+=f.count*t}return s!==void 0&&(a.gpuType=s),a}var ma=new $;function di(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),h=Math.PI/4;ma.copy(e),ma[i]=0,ma.normalize();let l=.5*o/(o+a),f=1-ma.angleTo(n)/h;return Math.sign(ma[t])===1?f*l:a/(o+a)+l+l*(1-f)}var ga=class n extends on{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let h=new $,l=new $,f=new $(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,u=d.length/6,M=new $,g=.5/o;for(let _=0,T=0;_<d.length;_+=3,T+=2)switch(h.fromArray(d,_),l.copy(h),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[_+0]=f.x*Math.sign(h.x)+l.x*r,d[_+1]=f.y*Math.sign(h.y)+l.y*r,d[_+2]=f.z*Math.sign(h.z)+l.z*r,p[_+0]=l.x,p[_+1]=l.y,p[_+2]=l.z,Math.floor(_/u)){case 0:M.set(1,0,0),m[T+0]=di(M,l,"z","y",r,i),m[T+1]=1-di(M,l,"y","z",r,t);break;case 1:M.set(-1,0,0),m[T+0]=1-di(M,l,"z","y",r,i),m[T+1]=1-di(M,l,"y","z",r,t);break;case 2:M.set(0,1,0),m[T+0]=1-di(M,l,"x","z",r,e),m[T+1]=di(M,l,"z","x",r,i);break;case 3:M.set(0,-1,0),m[T+0]=1-di(M,l,"x","z",r,e),m[T+1]=1-di(M,l,"z","x",r,i);break;case 4:M.set(0,0,1),m[T+0]=1-di(M,l,"x","y",r,e),m[T+1]=1-di(M,l,"y","x",r,t);break;case 5:M.set(0,0,-1),m[T+0]=di(M,l,"x","y",r,e),m[T+1]=1-di(M,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Sv={tee:"Camiseta",tank:"Regata",dress:"Camisa social",none:"Sem camisa"},wv={pants:"Cal\xE7a",shorts:"Bermuda"},Tv={sneakers:"T\xEAnis",flipflops:"Chinelo",dress:"Sapato social"},Iu={bald:"Careca",buzz:"Raspado",short:"Curto",afro:"Black power",long:"Comprido",mohawk:"Moicano",cap:"Bon\xE9"},Pu={none:"Sem barba",stubble:"Por fazer",goatee:"Cavanhaque",mustache:"Bigode",full:"Barba cheia",chevron:"Bigode e cavanhaque"},Zr={gold:14266683,silver:13225169,diamond:14677503},Lu=[15921126,2040614,2772879,11680307,3107660,14725949,8014476,14711354,7307148,2592670],Du=[1906452,3876376,6964005,13081170,9318175,10132118,2772896],Nu=[15052936,12684900,11765348,10119749,8475704,6175527];function ir(){return{shirt:"tee",shirtColor:2386265,legs:"pants",legColor:3553348,shoes:"sneakers",shoeColor:13812648,hair:"cap",hairColor:1906452,beard:"none",skin:12220240,glasses:!1,chain:"none",earrings:"none",watch:"none",ring:"none",height:1,width:1,capColor:1522486}}function Np(n=12157017){return{...ir(),shirt:"dress",shirtColor:3558501,legColor:2503491,shoes:"dress",shoeColor:1447446,hair:"cap",capColor:1845820,skin:n,beard:"none"}}function xa(n){let e=n*2654435761>>>0||1,t=()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296),i=r=>r[Math.floor(t()*r.length)],s=r=>{let o=t()*r.reduce((a,[,h])=>a+h,0);for(let[a,h]of r)if(o-=h,o<=0)return a;return r[0][0]};return{feminine:n%3===0,shirt:s([["tee",.46],["tank",.2],["dress",.2],["none",.08]]),shirtColor:i(Lu),legs:s([["pants",.62],["shorts",.38]]),legColor:i([3553348,2373199,5917242,2894892,8221798,4020851,11049860]),shoes:s([["sneakers",.5],["flipflops",.28],["dress",.22]]),shoeColor:i([15789282,2236962,9056042,2969482,5915442]),hair:s([["short",.3],["buzz",.18],["bald",.1],["afro",.12],["long",.14],["mohawk",.05],["cap",.11]]),hairColor:i(Du.slice(0,6)),beard:n%3===0?"none":s([["none",.45],["stubble",.18],["goatee",.1],["mustache",.1],["full",.12],["chevron",.05]]),skin:i(Nu),glasses:t()<.14,chain:s([["none",.82],["silver",.11],["gold",.07]]),earrings:s([["none",.88],["silver",.06],["gold",.05],["diamond",.01]]),watch:s([["none",.75],["silver",.17],["gold",.08]]),ring:s([["none",.85],["silver",.1],["gold",.05]]),height:.92+t()*.16,width:.9+t()*.25,capColor:i([1522486,9056042,2236962,2772879,14725949])}}function zp(n){let e=ir();if(!n||typeof n!="object")return e;let t=(r,o)=>Object.hasOwn(o,n[r])?n[r]:e[r],i=r=>Number.isInteger(n[r])&&n[r]>=0&&n[r]<=16777215?n[r]:e[r],s=(r,o)=>o.includes(n[r])?n[r]:"none";return{shirt:t("shirt",Sv),shirtColor:i("shirtColor"),legs:t("legs",wv),legColor:i("legColor"),shoes:t("shoes",Tv),shoeColor:i("shoeColor"),hair:t("hair",Iu),hairColor:i("hairColor"),beard:t("beard",Pu),skin:i("skin"),glasses:n.glasses===!0,chain:s("chain",["gold","silver"]),earrings:s("earrings",["gold","silver","diamond"]),watch:s("watch",["gold","silver"]),ring:s("ring",["gold","silver"]),height:1,width:1,capColor:i("capColor")}}var Av=new on,Ev=new ga(1,1,1,4,.23),Cv=new ga(1,1,1,2,.29),Rv=new As(1,10,7),Iv=new Xn(1,1,1,12),zu=new Map,Pv=new an({vertexColors:!0,roughness:.82}),Dc=new an({vertexColors:!0,roughness:.36,metalness:.18});function wi(n,e,t=Pv){if(!e.length)return;let i=e.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,h=new Float32Array(a*3),l=r.material.color;for(let f=0;f<h.length;f+=3){let d=l;if(r.userData.tankSkin){let p=r.geometry.attributes.position,m=Math.floor(f/9)*3,u=(p.getX(m)+p.getX(m+1)+p.getX(m+2))/3,M=(p.getY(m)+p.getY(m+1)+p.getY(m+2))/3;(M>.49||M>.14&&Math.abs(u)>.36||M>.27&&Math.abs(u)<.14)&&(d=r.userData.tankSkin)}h[f]=d.r,h[f+1]=d.g,h[f+2]=d.b}return o.setAttribute("color",new ln(h,3)),o});n.remove(...e);let s=new Tt(Pc(i),t);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var as=n=>n.children.filter(e=>e instanceof Tt);function lt(n,e,t,i,s,r,o,a,h,l=!1){let f=t+":"+l;zu.has(f)||zu.set(f,new an({color:t,roughness:l?.33:.87,metalness:l?.2:0}));let d=new Tt({box:Av,cloth:Cv,sphere:Rv,cylinder:Iv}[e],zu.get(f));return d.scale.set(o,a,h),d.position.set(i,s,r),d.castShadow=!0,d.receiveShadow=!0,n.add(d),d}var Lv=new Js(1,16),Dv=new Xt({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function Nc(n,e,t){let i=new Tt(Lv,Dv);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(e,t,1),n.add(i),i}var Nv=new qo(1,.09,6,18),zv=new an({vertexColors:!0,roughness:.22,metalness:.9});var Jr=(n,e)=>{let t=Math.max(0,Math.min(255,(n>>16&255)*e)),i=Math.max(0,Math.min(255,(n>>8&255)*e)),s=Math.max(0,Math.min(255,(n&255)*e));return t<<16|i<<8|s};function Ns(n,e){let t={...ir(),...e},{skin:i}=t,s=new At;s.rotation.order="YXZ",s.scale.set(t.width,t.height,t.width);let r=Nc(s,.41,.38),o=new At;s.add(o);let a=(E,S,x,w,L,I,P,k,O=!1)=>lt(o,E,S,x,w,L,I,P,k,O),h=t.shirt==="none",l=h?i:t.shirtColor;a("cloth",t.legColor,0,.94,0,.44,.25,.29);let f=a(t.shirt==="tank"?"box":"cloth",l,0,1.25,0,.52,.49,.32);t.shirt==="tank"&&(f.geometry=Ev,f.userData.tankSkin=new et(i)),h&&t.feminine&&a("cloth",t.shirtColor,0,1.34,.16,.47,.12,.012),t.shirt==="dress"&&(a("cloth",Jr(l,1.25),0,1.47,.06,.3,.06,.2),a("cloth",Jr(l,1.18),0,1.25,.158,.05,.4,.012)),a("cloth",h?3877408:4864812,0,1.05,.006,.473,.049,.312),a("cloth",12891226,-.128,1.05,.16,.06,.05,.01),a("cylinder",i,0,1.5,0,.09,.13,.09),a("sphere",i,0,1.67,.015,.168,.197,.157),a("sphere",i,0,1.655,.165,.033,.034,.034),a("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let E of[-1,1])a("sphere",i,E*.155,1.66,.023,.032,.052,.025),a("cloth",2894120,E*.061,1.711,.152,.043,.012,.012),a("cloth",10985105,E*.061,1.692,.156,.032,.012,.012),a("cloth",3024931,E*.06,1.693,.163,.016,.012,.009);let d=t.hairColor;switch(t.hair){case"buzz":a("sphere",d,0,1.735,-.02,.172,.105,.158);break;case"short":a("sphere",d,0,1.77,-.031,.162,.112,.141);break;case"afro":a("sphere",d,0,1.8,-.035,.235,.19,.225);break;case"long":a("sphere",d,0,1.765,-.03,.175,.12,.16),a("cloth",d,0,1.6,-.115,.32,.34,.1);break;case"mohawk":a("sphere",Jr(i,.8),0,1.735,-.02,.171,.1,.157),a("cloth",d,0,1.83,-.02,.05,.11,.3);break;case"cap":a("sphere",t.capColor,0,1.79,.012,.181,.132,.164),a("cloth",Jr(t.capColor,1.2),0,1.77,.159,.27,.033,.17);break;default:break}let p=t.beard;if(p==="stubble"&&a("cloth",Jr(i,.68),0,1.585,.09,.3,.1,.13),p==="full"&&a("cloth",d,0,1.585,.085,.33,.13,.16),(p==="goatee"||p==="chevron")&&a("cloth",d,0,1.555,.15,.07,.075,.04),(p==="mustache"||p==="chevron"||p==="full")&&a("cloth",d,0,1.618,.164,.1,.022,.02),t.glasses){a("cloth",1118481,0,1.703,.163,.25,.05,.02);for(let E of[-1,1])a("cloth",1118481,E*.155,1.705,.08,.012,.018,.16)}if(t.earrings!=="none")for(let E of[-1,1])a("sphere",Zr[t.earrings],E*.162,1.625,.03,.016,.016,.016,!0);if(t.chain!=="none"){let E=a("box",Zr[t.chain],0,1.43,.06,.15,.15,.15,!0);E.geometry=Nv,E.rotation.x=Math.PI/2-.42,a("box",Zr[t.chain],0,1.32,.165,.04,.05,.015,!0)}let m=[],u=[],M=[],g=[];for(let E of[-1,1]){let S=new At;S.position.set(E*.31,1.42,0),o.add(S);let x=t.shirt==="tee"||t.shirt==="dress";lt(S,"cloth",x?l:i,0,-.105,0,x?.173:.15,.226,x?.187:.16);let w=new At;w.position.y=-.23,S.add(w),lt(w,"cloth",t.shirt==="dress"?l:i,0,-.101,0,.132,.22,.119),lt(w,"sphere",i,0,-.227,.012,.082,.084,.077),E===1&&t.watch!=="none"&&(lt(w,"cloth",2762018,0,-.17,0,.14,.04,.128),lt(w,"box",Zr[t.watch],0,-.17,.065,.05,.045,.012,!0)),E===-1&&t.ring!=="none"&&lt(w,"box",Zr[t.ring],.03,-.27,.05,.022,.022,.022,!0),M.push(w),m.push(S);let L=new At;L.position.set(E*.128,.94,0),o.add(L),lt(L,"cloth",t.legColor,0,-.205,0,.21,.427,.228);let I=new At;I.position.y=-.412,L.add(I);let P=t.legs==="shorts";if(lt(I,"cloth",P?i:t.legColor,0,-.18,0,P?.15:.182,.38,P?.16:.198),t.shoes==="flipflops"){lt(I,"cloth",i,0,-.405,.06,.12,.08,.24);for(let k of[-1,1])lt(I,"cloth",t.shoeColor,k*.033,-.366,.09,.023,.019,.1).rotation.y=-k*.55;lt(I,"cloth",t.shoeColor,0,-.455,.059,.15,.025,.29)}else{let k=t.shoes==="dress"?1906194:t.shoeColor;lt(I,"cloth",k,0,-.386,.062,.201,.143,.304),lt(I,"cloth",t.shoes==="dress"?1183243:Jr(k,.55),0,-.445,.059,.202,.037,.313)}g.push(I),u.push(L)}let _=new At;_.position.set(0,-.227,.012),lt(_,"box",2635321,0,.012,-.002,.066,.078,.12,!0),lt(_,"box",2635321,0,-.105,.054,.074,.25,.079,!0),lt(_,"box",10263691,0,-.189,.095,.031,.028,.018);let T=new Jt;T.position.set(0,-.235,.053),_.add(T),M[0].add(_);let R=new At;R.position.set(0,-.227,.03),lt(R,"box",2828840,0,0,.05,.08,.12,.06,!0),lt(R,"box",2303786,0,-.2,.07,.07,.5,.11,!0),lt(R,"box",1842719,0,-.62,.08,.035,.42,.035,!0),lt(R,"box",5915954,0,.12,.06,.07,.16,.12),lt(R,"box",2303786,0,-.18,-.02,.05,.16,.12,!0);let b=new Jt;b.position.set(0,-.84,.08),R.add(b),M[0].add(R);for(let E of[o,...m,...M,...u,...g,_,R]){let S=as(E);wi(E,S.filter(x=>x.material.metalness===0)),wi(E,S.filter(x=>x.material.metalness>0),zv)}return _.visible=!1,R.visible=!1,n.add(s),{root:s,body:o,arms:m,legs:u,forearms:M,shins:g,pistol:_,rifle:R,muzzle:T,rifleMuzzle:b,shadow:r,stride:0,weapon:"pistol",look:t}}function rr(n,e,t,i,s,r=0,o=0,a=!1){n.root.scale.y=n.look.height,n.stride+=e*(4.6+t*1.65);let h=Math.sin(n.stride)*Math.min(.78,t*.15);n.body.position.set(0,Math.abs(h)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(h,0,0),n.legs[1].rotation.set(-h,0,0),n.shins[0].rotation.set(Math.max(0,h)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-h)*.51,0,0);for(let f of n.forearms)f.rotation.set(0,0,0);n.arms.forEach((f,d)=>f.position.set(d?.31:-.31,1.42,0));let l=s&&n.weapon==="rifle";if(n.arms[0].rotation.set(i?-Math.PI/2+o:-h*.76,0,0),n.arms[1].rotation.set(i?l?-Math.PI/2+o+.12:-1.16:h*.76,0,i&&l?.42:0),n.arms[0].rotation.z=a?-.25:0,(a||!(i&&l))&&(n.arms[1].rotation.z=a?.25:0),a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let f=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-f*1.11,n.forearms[0].rotation.x=-.62*(1-f),n.body.rotation.y=-f*.37}else n.body.rotation.y=0;if(n.pistol.visible=s&&n.weapon!=="rifle",n.rifle){n.rifle.visible=l;let f=n.rifle;l&&i&&!a&&r<=0?(f.parent!==n.body&&n.body.add(f),n.body.rotation.y=Fp,n.arms[0].position.set(-.28,1.42,.06),n.arms[1].position.set(.28,1.42,.06),f.rotation.set(-Math.PI/2+o,-Fp,0,"YXZ"),f.scale.setScalar(Kr),f.position.set(-.04,1.48,.18).sub($r.set(0,.2*Kr,.06*Kr).applyEuler(f.rotation)),jr(n.arms[0],n.forearms[0],Op(f,0,-.1,-.06),.23,.227,[-.7,-1,-.1]),jr(n.arms[1],n.forearms[1],Op(f,0,-.14,.02),.23,.227,[.5,-1,-.1])):l&&!a&&r<=0?(f.parent!==n.forearms[0]&&n.forearms[0].add(f),n.arms[0].rotation.set(-.12-h*.18,0,-.06),n.forearms[0].rotation.set(-.42,0,0),f.scale.setScalar(Kr),f.rotation.set(-.62,0,0),f.position.set(0,-.227,0).sub($r.set(0,-.1*Kr,-.06*Kr).applyEuler(f.rotation))):f.parent!==n.forearms[0]&&(n.forearms[0].add(f),f.position.set(0,-.227,.03),f.rotation.set(0,0,0),f.scale.setScalar(1))}}var Up=new $(0,-1,0),Fp=-.3,Kr=.75,Uu=new $,sr=new $,Fu=new $,Lc=new $,$r=new $,Bp=new un;function Op(n,e,t,i){return Lc.set(e,t,i).multiply(n.scale).applyEuler(n.rotation).add(n.position)}function jr(n,e,t,i,s,r){sr.subVectors(t,n.position);let o=Math.min(i+s-.001,Math.max(.015,sr.length()));sr.normalize();let a=(i*i-s*s+o*o)/(2*o);Fu.set(r[0],r[1],r[2]).addScaledVector(sr,-Fu.dot(sr)).normalize(),Uu.copy(n.position).addScaledVector(sr,a).addScaledVector(Fu,Math.sqrt(Math.max(0,i*i-a*a))),$r.subVectors(Uu,n.position).normalize(),n.quaternion.setFromUnitVectors(Up,$r),$r.copy(n.position).addScaledVector(sr,o).sub(Uu).normalize(),e.quaternion.setFromUnitVectors(Up,$r.applyQuaternion(Bp.copy(n.quaternion).invert()))}function Ou(n,e){n.root.scale.y=n.look.height,e.root.updateMatrixWorld(!0),n.root.position.copy(e.body.localToWorld(Lc.set(0,.1,-.31))),n.root.quaternion.copy(e.body.getWorldQuaternion(Bp)),n.shadow.visible=!1,n.pistol.visible=!1;let t=.63;n.body.rotation.set(t,0,0),n.body.position.set(0,.94*(1-Math.cos(t)),-.94*Math.sin(t)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(e.handlebar.localToWorld(Lc.set(s*.342,.44,-.09)));jr(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(e.body.localToWorld(Lc.set(s*.245,.39,-.22)));jr(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function _a(n,e,t){let i=Math.min(1,e/.22),s=Math.min(1,Math.max(0,(e-.12)/.5)),r=s*s*(3-2*s),o=e>.62?Math.sin(Math.min(1,(e-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(e-.62)/.25)):0,a=t*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(t*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let h=Math.sin(Math.min(1,e/.5)*Math.PI);return n.arms[0].rotation.set(-t*(.6*h+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-t*(.9*h+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*h-.2,0,0),n.forearms[1].rotation.set(-.3*h-.3,0,0),n.pistol.visible=!1,a}var zc={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},va=n=>zc[n]??zc[(n??"car").split(":")[0]]??zc.car,zs=n=>n.shape??n.kind;function Vp(n,e){zc[n]=e}function oi(n,e){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0),n.repair?.(),Object.assign(n,e,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}var kp=new WeakMap,Qr=12,Gp=(n,e)=>n*1e4+e;function Uv(n,e,t){if(t.length<24)return t;let i=kp.get(t);if(!i){i=new Map;for(let s of t){let r=Math.floor((s.x-s.w/2-3.8)/Qr),o=Math.floor((s.x+s.w/2+3.8)/Qr),a=Math.floor((s.z-s.d/2-3.8)/Qr),h=Math.floor((s.z+s.d/2+3.8)/Qr);for(let l=r;l<=o;l++)for(let f=a;f<=h;f++){let d=Gp(l,f);i.has(d)||i.set(d,[]),i.get(d).push(s)}}kp.set(t,i)}return i.get(Gp(Math.floor(n/Qr),Math.floor(e/Qr)))??[]}function Ti(n,e,t,i,s="car"){let r=Math.sin(t),o=Math.cos(t),{offsets:a,radius:h}=va(s),l=Uv(n,e,i);return a.every(f=>Rn(n+r*f,e+o*f,h,l))}function ls(n,e,t,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=e-n.x,a=t-n.z,{width:h,length:l}=va(zs(n)),f=Math.abs(o*r-a*s)-h,d=Math.abs(o*s+a*r)-l;return f<=0&&d<=0||Math.hypot(Math.max(0,f),Math.max(0,d))<i}function cs(n,e=0){let{width:t,length:i}=va(n),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));return{width:t*s+i*r,length:i*s+t*r}}function Us(n,e,t,i=n){return Ti(n.x,n.z,n.angle,e,zs(n))&&!ya(i,n.x,n.z,n.angle,t)}function ya(n,e,t,i,s){let r=Math.sin(i),o=Math.cos(i),a=va(zs(n));for(let h of s){if(h===n||Math.abs(h.x-e)>4.5||Math.abs(h.z-t)>4.5)continue;let l=Math.sin(h.angle),f=Math.cos(h.angle),d=va(zs(h)),p=a.radius+d.radius,m=p,u=0,M=0;for(let g of a.offsets)for(let _ of d.offsets){let T=e+r*g-h.x-l*_,R=t+o*g-h.z-f*_,b=Math.hypot(T,R);if(b>=m)continue;m=b;let E=Math.hypot(e-h.x,t-h.z);u=b>.02?T/b:E>.02?(e-h.x)/E:r,M=b>.02?R/b:E>.02?(t-h.z)/E:o}if(m<p)return{other:h,nx:u,nz:M,mass:a.mass,otherMass:d.mass}}return null}function Bu(n,e){e<2.4||(n.integrity=Math.max(0,n.integrity-(e-2.4)*1.15),n.impact=Math.max(n.impact,e))}function Fn(n,e,t,i,s,r=null){let o=!r||r(n.x,n.z,n.angle,zs(n)),a=(k,O,F)=>Ti(k,O,F,i,zs(n))&&(!r||!o||r(k,O,F,zs(n))),{brake:h}=t,l=n.kind==="bike",f=n.integrity>0?t.throttle:0;n.bumpedVehicle=null;let d=n.integrity>0?t.steer:0;n.impact=Math.max(0,n.impact-e*21),n.steer+=(d-n.steer)*(1-Math.exp(-e*10));let p=Math.sin(n.angle),m=Math.cos(n.angle),u=n.vx*p+n.vz*m,M=n.handling,g=(n.flat??[]).filter(Boolean).length,_=(M?.top??(l?31:27))*(1-g*.22),T=Math.sign(f)*u<-.6?28:f<0?l?4.7:10:(M?.accel??(l?19.7:15.4))*(1-g*.15);u=_t(u+f*T*e,l?-2.7:-8.4,_);let R=n.integrity<=0?3.8:h?l?6.7:5.5:Math.abs(f)<.07?1.58:.36;u*=Math.exp(-e*R);let b=h?l?5.2:2.15:(M?.grip??(l?13.5:8.1))*(1-g*.12),E=(n.vx*m-n.vz*p)*Math.exp(-e*b);n.vx=u*p+E*m,n.vz=u*m-E*p;let S=_t(1.9-Math.abs(u)/24,.75,1.65),x=g?((n.flat?.[0]||n.flat?.[2]?1:0)-(n.flat?.[1]||n.flat?.[3]?1:0))*.12:0,w=(n.steer+x)*e*S*Math.min(1,Math.abs(u)/2.1)*Math.sign(u),L=n.angle+w*(l?1.26:h?1.58:1);a(n.x,n.z,L)&&!ya(n,n.x,n.z,L,s)&&(n.angle=L);let I=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*e/.34)),P=e/I;for(let k=0;k<I;k++){let O=n.x+n.vx*P,F=n.z+n.vz*P,te=ya(n,O,F,n.angle,s);if(te){let{other:H,nx:W,nz:se,mass:Q,otherMass:B}=te,G=n.vx*W+n.vz*se,J=G-(H.vx*W+H.vz*se);if(J<0&&G<0){let K=-J*1.22/(1/Q+1/B);n.vx+=W*K/Q,n.vz+=se*K/Q,H.vx-=W*K/B,H.vz-=se*K/B,J<-3.5&&(n.bumpedVehicle=H),Bu(n,-J),Bu(H,-J*.9);break}let j=Math.hypot(n.x-H.x,n.z-H.z);if(Math.hypot(O-H.x,F-H.z)<=j)break}if(a(O,F,n.angle))n.x=O,n.z=F;else{let H=a(O,n.z,n.angle)&&!ya(n,O,n.z,n.angle,s),W=a(n.x,F,n.angle)&&!ya(n,n.x,F,n.angle,s),se=Math.hypot(H?0:n.vx,W?0:n.vz);H!==W?(H&&(n.x=O),W&&(n.z=F),n.vx*=H?.84:-.22,n.vz*=W?.84:-.22):(n.vx*=-.21,n.vz*=-.21),Ti(O,F,n.angle,i,zs(n))===!1&&Bu(n,se||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function Yn(n,e){let t=0;return Si.some(i=>Math.abs(n-i)<=13.55)&&Si.some(i=>Math.abs(e-i)<=13.55)&&(t=.16),Math.abs(n-38)<6.05&&Math.abs(e+38)<5.04&&(t=.228),Math.abs(n-2)<9.5&&Math.abs(e-38)<11&&(t=.191),n>-10.91&&n<-3.49&&Math.abs(e-38)<9.77&&(t=.234),t}function On(n,e,t,i,s,r,o=.34){if(!Rn(e,t,o,i))return!1;for(let a of s)if(!(ie(a,{x:e,z:t})>3.4||!ls(a,e,t,o))&&(!ls(a,n.x,n.z,o)||ie(a,{x:e,z:t})<=ie(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let h=o+.19;if(ie(a,{x:e,z:t})<h&&ie(a,{x:e,z:t})<=ie(a,n))return!1}return!0}function Uc(n,e,t,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(e,t)/.14)),h=n.x,l=n.z,f=e/a,d=t/a;for(let p=0;p<a;p++){let m=n.x+f,u=n.z+d;if(On(n,m,u,i,s,r,o)){n.x=m,n.z=u;continue}f&&On(n,m,n.z,i,s,r,o)&&(n.x=m),d&&On(n,n.x,u,i,s,r,o)&&(n.z=u)}return Math.hypot(n.x-h,n.z-l)}function Hp(n,e,t){if(!e)return ls(n,t.x,t.z,.28);let i=Math.max(1,Math.ceil(ie(e,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=e.x+(n.x-e.x)*r,a=e.z+(n.z-e.z)*r,h={x:o,z:a,angle:n.angle,kind:n.kind,shape:n.shape};if(ls(h,t.x,t.z,.28))return!0}return!1}function Wp(n,e,t){let i=e.x-n.x,s=e.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((t.x-n.x)*i+(t.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(t.x-n.x-i*o,t.z-n.z-s*o)<1.2}function qp(n,e){let{id:t,x:i,z:s,w:r,d:o,angle:a,kind:h,label:l,color:f}=e,{box:d,solid:p,door:m,sign:u,glazing:M,support:g,volume:_}=n,T=h==="shop"||h==="armory",R=(se,Q,B=.228)=>({x:i+Math.cos(a)*se+Math.sin(a)*Q,z:s-Math.sin(a)*se+Math.cos(a)*Q,y:B}),b=Math.abs(Math.cos(a)),E=Math.abs(Math.sin(a)),S=(se,Q,B,G)=>({...R(se,Q),w:B*b+G*E,d:B*E+G*b}),x=o/2,w=-o/2,L=-r/2,I=r/2,P=(se,Q,B,G,J,j,K,le=!1,Y=0,de="box")=>{let re=R(se,Q);d(re.x,B,re.z,G,J,j,K,le,a,Y,de)},k=(se,Q,B,G,J,j,K,le=!0)=>{P(se,Q,B,G,J,j,K,le);let Y=S(se,Q,G,j);p.push({x:Y.x,z:Y.z,w:Y.w,d:Y.d,y0:B-J*.5,h:B+J*.5,buildingId:t})};return T?H():te();function O(se,Q,B,G,J){if(P(se,x+.05,Q,B+.22,G+.22,.1,5195585),P(se,x+.085,Q,B,G,.06,5073522),P(se,x+.12,Q,.05,G,.03,12168856),P(se,x+.12,Q+G*.18,B,.045,.03,12168856),P(se,x+.13,Q-G*.5-.08,B+.36,.09,.2,Ai(f)),J)for(let j of[-1,1])P(se+j*(B*.5+.24),x+.09,Q,.34,G+.06,.05,J)}function F(se,Q,B=[]){let G=Ov(t),J=(K,le)=>{if(K-le<L+.35||K+le>I-.35)return!1;for(let Y=0;Y<B.length;Y+=2)if(K+le>B[Y]&&K-le<B[Y+1])return!1;return!0},j=K=>{for(let le=0;le<8;le++){let Y=L+.4+K+G()*(r-.8-K*2);if(J(Y,K))return Y}return null};if(G()<.55){let K=[Ma(f,-.28),Ma(f,.22),7301215][Math.floor(G()*3)],le=[];for(let de=0;de<B.length;de+=2)le.push([B[de],B[de+1]]);le.sort((de,re)=>de[0]-re[0]);let Y=L+.25;for(let[de,re]of[...le,[I-.25,I-.25]])de-Y>.3&&P((Y+de)/2,x+.052,se+.36,de-Y,.72,.022,K),Y=Math.max(Y,re)}for(let K=0;K<(G()<.7?2:1);K++){let le=.8+G()*.7,Y=.5+G()*.5,de=j(le/2);if(de===null)continue;let re=se+.95+G()*Math.max(0,Q-Y-1.4)+Y/2;P(de,x+.056,re,le,Y,.018,9262144);for(let Ie=1;Ie<Math.floor(Y/.18);Ie++)P(de,x+.068,re-Y/2+Ie*.18,le,.022,.01,5978671)}for(let K=0;K<2+Math.floor(G()*2);K++){let le=j(.12);if(le===null)continue;let Y=.8+G()*1.2;P(le,x+.054,se+Q-.15-Y/2,.14,Y,.012,Ma(f,-.18))}if(G()<.6){let K=j(.12);if(K!==null)for(let le=0;le<5;le++)P(K+(le%2?.05:-.04),x+.058,se+.8+le*.19,.022,.22,.012,3880240)}if(G()<.7){let K=j(.25);K!==null&&(P(K,x+.09,se+1.25,.38,.5,.09,9211786),P(K,x+.15,se+1.4,.14,.1,.04,15262416))}return G}function te(){let se=h==="apartments",Q=se?e.stories:1,B=se?3.3:3.25,G=Q*B,J=.228+G;k(0,0,.228+G/2,r,G,o,f),P(0,x+.03,.228+.23,r+.04,.46,.08,8484463);for(let re of[L+.12,I-.12])P(re,x+.04,.228+G/2,.26,G,.1,Ai(f));for(let re=1;re<Q;re++)P(0,x+.04,.228+re*B,r+.04,.16,.1,Ai(f));let j=se?0:-r*.18;if(P(j,x+.05,.228+1.17,1.42,2.42,.1,5195585),P(j,x+.09,.228+1.1,1.1,2.2,.06,se?4151902:7687224),P(j+.38,x+.14,.228+1.08,.06,.16,.05,13810049),P(j,x+.32,.228-.05,1.7,.14,.62,8484463),P(j,x+.42,.228+2.62,1.9,.12,.86,Ai(f),!0),se){P(j,x+.12,.228+2.92,1.6,.32,.05,15324320);let re=R(j,x+.15,.228+2.92);u(l,re.x,re.y,re.z,a,5589560,1.56,.3)}else{let re=R(j+1.15,x+.13,1.848);u(l,re.x,re.y,re.z,a,5589560,.92,.22)}let K=h==="house"?Fv(t,[6257514,8019014,6975364]):null;for(let re=0;re<Q;re++){let Ie=.228+re*B,nt=se?[L+r*.17,L+r*.38,I-r*.38,I-r*.17]:[r*.18,r*.38];for(let De of nt)if(!(re===0&&Math.abs(De-j)<1.7)&&(O(De,Ie+1.72,se?1.26:1.2,1.34,K),se&&re>0&&De===nt[3])){P(De,x+.42,Ie+.95,1.8,.12,.74,8484463,!0);for(let Oe of[-.8,-.4,0,.4,.8])P(De+Oe,x+.76,Ie+1.38,.04,.78,.04,4802113);P(De,x+.76,Ie+1.78,1.72,.05,.06,4802113)}for(let De of[L,I]){let Oe=De===L?-1:1;for(let je of se?[w+2.2,x-2.2]:[0]){let Ke=R(De+Oe*.05,je);d(Ke.x,Ie+1.72,Ke.z,.1,1.56,1.32,5195585,!1,a);let pt=R(De+Oe*.085,je);d(pt.x,Ie+1.72,pt.z,.06,1.34,1.1,5073522,!1,a)}}}let le=se?[L+r*.17,L+r*.38,I-r*.38,I-r*.17]:[r*.18,r*.38],Y=(se?1.26:1.2)/2+(h==="house"?.6:.25),de=F(.228,Math.min(G,3.15),[j-1.15,j+1.15,...le.flatMap(re=>[re-Y,re+Y])]);if(se){P(0,0,J+.04,r+.12,.1,o+.12,7827562);for(let re of[L+.1,I-.1])P(re,0,J+.36,.2,.56,o,Ai(f),!0);for(let re of[w+.1,x-.1])P(0,re,J+.36,r,.56,.2,Ai(f),!0);P(I-2.4,w+2.1,J+.95,2,1.8,2,9077369,!0),P(I-2.4,w+2.1,J+1.93,2.1,.12,2.1,7301732),P(L+2.2,w+1.9,J+.75,1.4,1.2,1.4,10134691,!0),P(L+2.2,w+1.9,J+1.42,1.5,.12,1.5,7240057)}else{let re=Math.min(2,o*.2);P(0,0,J,r-.02,re,o-.02,f,!0,0,"prism");let Ie=Xp[Math.floor(de()*Xp.length)];P(0,0,J+.06,r+.5,re+.12,o+.7,Ie,!0,0,"prism"),P(0,0,J+re+.12,r+.6,.09,.34,Ma(Ie,-.22),!1),P(0,x+.34,J+.04,r+.5,.09,.12,7238002),de()<.5&&P(-r*.2+de()*r*.3,x-.9,J+.34,.9,.07,1.4,Ma(Ie,.18));let nt=de()<.5?1:-1;P(nt*(r*.3),w+o*.3,J+re*.55,.55+de()*.25,1.6,.55,9402986,!0)}return{id:t,kind:h,label:l,units:[],doorIds:[],clerk:null,outside:R(j,x+1.1,.16),entry:R(j,x+.2),inside:R(j,x+.2),approach:R(j,x+2.4,.16),resident:null}}function H(){let Q=4.0200000000000005,B=.228,G=e.doorAt??.1,J=Math.min(r*.25,3.72),j=[G-r*.248,G+r*.248],K=.22,le=(Ye,mt,Et,U,Dt,vt,gt)=>k(Ye,mt,Dt+vt/2,Et,vt,U,gt),Y=(Ye,mt,Et,U,Dt,vt)=>le((mt+Et)/2,Ye,Et-mt,K,U,Dt,vt),de=(Ye,mt,Et,U,Dt,vt)=>le(Ye,(mt+Et)/2,K,Et-mt,U,Dt,vt),re=m(...W(G-1.28/2,x),a,1.28,4285290,B,{buildingId:t,private:!1,unitId:null}),Ie=R(G,x),nt=R(G,x+1.05,.16),De=R(G,x-1.05),Oe=R(G,x+2.45,.16);_.push({...S(0,0,r-.2,o-.2),floor:B,ceiling:B+Q,buildingId:t}),k(0,0,B-.066,r-.03,.132,o-.03,11972762,!1),p[p.length-1].walkSurface=!0,g.push({...S(0,0,r-.03,o-.03),y:B,buildingId:t}),de(L,w,x,B,Q,f),de(I,w,x,B,Q,f),Y(w,L,I,B,Q,f);let je=L,Ke=[{center:G,width:1.28,door:!0},...j.map(Ye=>({center:Ye,width:J,door:!1}))];Ke.sort((Ye,mt)=>Ye.center-mt.center);let pt=.61,ct=2.58,tn=ct-pt;for(let Ye of Ke){let mt=Ye.center-Ye.width*.5,Et=Ye.center+Ye.width*.5;if(Y(x,je,mt,B,Q,f),P((je+mt)/2,x+.04,B+.17,mt-je,.34,.11,8484463),je=Et,Ye.door)continue;le(Ye.center,x,Ye.width,K,B,pt,f),le(Ye.center,x,Ye.width,K,B+ct,Q-ct,f);let U=R(Ye.center,x+.068,B+(ct+pt)*.5);M(U.x,U.y,U.z,Ye.width,tn,a);let Dt=S(Ye.center,x,Ye.width,.2);p.push({x:Dt.x,z:Dt.z,w:Dt.w,d:Dt.d,y0:B+pt,h:B+ct,buildingId:t});for(let gt of[-1,0,1])P(Ye.center+gt*(Ye.width*.5-.042),x+.13,B+(ct+pt)*.5,.07,tn,.084,5989472);for(let gt of[pt,ct])P(Ye.center,x+.13,B+gt,Ye.width+.07,.081,.096,7831928);P(Ye.center,x+.17,B+pt-.025,Ye.width+.2,.091,.25,10065280);let vt=x-.48;P(Ye.center,vt,B+.83,Ye.width-.24,.078,.45,11771260);for(let gt of[-.78,-.39,.39,.78])P(Ye.center+gt,vt,B+.95+(Math.abs(gt)<.5?.055:0),.23,.26,.26,e.awning??12089684)}Y(x,je,I,B,Q,f),P((je+I)/2,x+.04,B+.17,I-je,.34,.11,8484463),k(G,x,B+2.22+(Q-2.22)/2,1.28,Q-2.22,.21,f);for(let Ye of[L+.17,I-.17])P(Ye,x+.11,B+Q/2,.22,Q,.17,Ai(f));P(0,x+.07,B+4.16-.05,r+.25,.22,.13,Ai(f));for(let Ye of[L,I]){let mt=Ye===L?-1:1;for(let Et of[w+2.3,x-2.3])P(Ye+mt*.13,Et,B+1.7,.06,1.2,1.4,5195585),P(Ye+mt*.16,Et,B+1.7,.04,1.04,1.22,5073522),P(Ye+mt*.2,Et,B+1.03,.16,.09,1.56,Ai(f))}F(B,Q-.3,[G-1.6,G+1.6,j[0]-J/2-.2,j[0]+J/2+.2,j[1]-J/2-.2,j[1]+J/2+.2]);let Lt=R(0,w+1.89,B);Lt.angle=a;let Wt=R(0,x+.18,B+4.16-.64);u(l,Wt.x,Wt.y,Wt.z,a,3232851,Math.min(5.25,r-.72),.58),P(0,x+.6,B+4.16-1.37,r-.56,.19,1.22,e.awning??7820863,!0);for(let Ye=L+.68;Ye<I-.42;Ye+=.46)P(Ye,x+1.21,B+4.16-1.46,.225,.23,.062,14006413);k(.46,w+3,B+.55,4.4,1.1,.7,6968131),P(.46,w+3,B+1.15,4.58,.14,.79,12166795,!0),P(1.33,w+3.02,B+1.42,.48,.41,.36,4083022),P(1.33,w+3.22,B+1.58,.34,.19,.051,7968922);for(let Ye of[L+.46,I-.46])for(let mt of[w+1.75,w+4.2]){k(Ye,mt,B+.83,.61,1.66,1.79,7037271);for(let Et=0;Et<3;Et++)for(let U of[-.55,-.17,.22,.57]){let Dt=[12490344,11953479,5997179][(Math.floor((U+.6)*2.3)+Et)%3];P(Ye+(Ye<0?.37:-.37),mt+U,B+.47+Et*.43,.15,.25,.22,Dt)}}for(let Ye of[-.26,.26])P(Ye*r,0,B+4.16-.23,.32,.085,1.91,16245436);P(0,x-.8,B+.009,1.71,.016,.87,5863786);let zt=B+4.16;k(0,0,zt-.053,r+.17,.2,o+.17,8613472,!1);for(let Ye of[L,I])P(Ye,0,zt+.28,.25,.59,o+.15,Ai(f),!0);for(let Ye of[w,x])P(0,Ye,zt+.28,r+.2,.59,.25,Ai(f),!0);return P(I-1.5,w+1.45,zt+.46,1.34,.64,1.21,8418922,!0),P(I-1.5,w+1.45,zt+.82,1.14,.08,1.05,10261379),P(L+1.52,w+1.55,zt+.39,.56,.57,.57,4873822,!0),{id:t,kind:h,label:l,entry:Ie,outside:nt,inside:De,approach:Oe,resident:null,clerk:Lt,doorIds:[re.id],units:[]}}function W(se,Q){let B=R(se,Q,.228);return[B.x,B.z]}}function Fv(n,e){let t=0;for(let i of n)t=t*31+i.charCodeAt(0)>>>0;return e[t%e.length]}function Ai(n){let e=Math.min(255,(n>>16&255)+26),t=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return e*65536+t*256+i}function Ov(n){let e=0;for(let t of n)e=e*131+t.charCodeAt(0)>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function Ma(n,e){let t=i=>Math.max(0,Math.min(255,Math.round(i*(1+e))));return t(n>>16&255)*65536+t(n>>8&255)*256+t(n&255)}var Xp=[10115652,9063482,8082502,11035978,7301734,6115656];var Yp=(n,e)=>[Math.floor((n-e*.5-1.1)/10),Math.floor((n+e*.5+1.1)/10)];function Fc(n){let e=new Map;for(let t of n){let[i,s]=Yp(t.x,t.w),[r,o]=Yp(t.z,t.d);for(let a=i;a<=s;a++)for(let h=r;h<=o;h++){let l=a+","+h;e.has(l)||e.set(l,[]),e.get(l).push(t)}}return(t,i)=>e.get(Math.floor(t/10)+","+Math.floor(i/10))??[]}var Zp=(n,e,t)=>Math.abs(n-t.x)<t.w*.5+.002&&Math.abs(e-t.z)<t.d*.5+.002,Bv=n=>n&&n.health!==0&&!n.seated;function Jp(n,e,t,i,s){let r=Fc(n),o=Fc(e),a=Fc(t),h=Fc(i.map(b=>b.closedSolid)),l=new Map(i.map(b=>[b.id,b])),f=b=>{let E=l.get(b.doorId);return!E.breached&&E.openAmount<1.06},d=n.filter(b=>(b.y0??0)<.95&&b.h>.28&&!b.stair);function p(b,E,S=0){let x=s(b,E);for(let w of o(b,E))w.y>x&&w.y<=S+.305&&Zp(b,E,w)&&(x=w.y);return x}function m(b,E,S=0){let x=L=>!L.stair&&(!L.walkSurface||L.h>S+.305)&&(L.y0??0)<S+1.72&&L.h>S+.13,w=r(b,E).filter(x);for(let L of h(b,E))x(L)&&f(L)&&w.push(L);return w}function u(b,E,S=0){let x=null;for(let w of a(b,E))w.floor<=S+.14&&w.ceiling>=S&&Zp(b,E,w)&&(!x||w.floor>x.floor)&&(x=w);return x}function M(b,E,S,x=.3,w=!1){let L=I=>E>=(I.y0??0)-x&&E<=I.h+x&&Math.abs(b-I.x)<I.w*.5+x&&Math.abs(S-I.z)<I.d*.5+x;for(let I of r(b,S))if(!(I.off||I.prop||I.walkSurface||I.stair)&&L(I))return!0;if(w){for(let I of h(b,S))if(L(I))return!0}return!1}function g(){return i.map(b=>b.closedSolid).filter(f)}function _(b){let E=l.get(b);return!E||!E.private||E.breached?!1:(E.breached=!0,E.hold=1/0,!0)}function T(b,E){for(let S of i){let x=S.breached||S.normallyOpen;S.hold=Math.max(0,S.hold-b);for(let L of E){if(x||!Bv(L))continue;let I=L.floorY??L.y??0;if(Math.abs(I-S.base)>.64)continue;let P=L.x-S.x,k=L.z-S.z,O=P*P+k*k;if(O>3.68)continue;let F=L.buildingId===S.buildingId&&(!S.unitId||L.unitId===S.unitId),te=P*S.normalX+k*S.normalZ<-.22;(!S.private||F||te&&O<2.43||S.opened&&O<1.92)&&(x=!0,S.hold=1.1)}let w=x||S.hold>0?1.48:0;S.openAmount+=(w-S.openAmount)*(1-Math.exp(-b*13)),S.opened=S.openAmount>=1.06,S.door.rotation.y=S.angle+S.openAmount}}function R(){for(let b of i)b.breached=!1,b.hold=0,b.opened=b.normallyOpen,b.openAmount=b.normallyOpen?1.48:0,b.door.rotation.y=b.angle+b.openAmount}return{vehicleSolids:d,floorAt:p,walkSolids:m,interiorAt:u,closedDoorSolids:g,breachDoor:_,updateDoors:T,resetDoors:R,viewBlocked:M}}var ku=3751484,kv={box:new on,cylinder:new Xn(1,1,1,10),pole:new Xn(.8,1,1,8),foliage:new ts(1,1)},eo={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function to(n){let e=n.map(([t,i,s,r,o,a,h,l,f=0,d=0])=>{let p=kv[t],m=p.index?p.toNonIndexed():p.clone(),u=new It().compose(new $(i,s,r),new un().setFromEuler(new vi(f,d,0,"YXZ")),new $(o,a,h));m.applyMatrix4(u);let M=new et(l),g=new Float32Array(m.attributes.position.count*3);for(let _=0;_<g.length;_+=3)g[_]=M.r,g[_+1]=M.g,g[_+2]=M.b;m.setAttribute("color",new ln(g,3));for(let _ of Object.keys(m.attributes))["position","normal","color"].includes(_)||m.deleteAttribute(_);return m});return Pc(e)}var Kp={lamp:()=>to([["pole",0,2.25,0,.083,4.5,.083,ku],["box",.35,4.36,0,.79,.075,.075,ku],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>to([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,ku])]),bin:()=>to([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>to([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>to([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>to([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,e)=>{let t=e*Math.PI*2/7;return["foliage",Math.sin(t)*.86,4.55,Math.cos(t)*.86,.42,.24,1.58,[3432266,4879699,7111766][e%3],0,t]})])};function $p(n,e,t){let i=[],s={},r=new an({vertexColors:!0,roughness:.84}),o=new It,a=new $,h=new un,l=new $,f=new un,d=new un,p=new $,m=new $(0,1,0),u=!1;function M(S,x,w,L=0,I=1,P){let k=t(x,w),O={x,z:w,w:P?.w??eo[S].radius*2,d:P?.d??eo[S].radius*2,y0:k,h:k+(P?.h??1),prop:S};e.push(O),i.push({kind:S,x,z:w,y:k,rotation:L,scale:I,solid:O,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function g(S){f.setFromAxisAngle(m,S.rotation+S.spin),p.set(S.axisX,0,S.axisZ),d.setFromAxisAngle(p,S.tilt),h.multiplyQuaternions(d,f);let x=eo[S.kind].radius;a.set(S.x,S.y+Math.sin(S.tilt)*x+S.lift,S.z),l.setScalar(S.scale),o.compose(a,h,l),s[S.kind].setMatrixAt(S.index,o),s[S.kind].instanceMatrix.needsUpdate=!0}function _(){for(let S of Object.keys(Kp)){let x=i.filter(L=>L.kind===S);if(!x.length)continue;let w=new Wn(Kp[S](),r,x.length);w.castShadow=!0,w.receiveShadow=!0,s[S]=w,x.forEach((L,I)=>{L.index=I,g(L)}),w.computeBoundingSphere(),n.add(w)}}function T(S,x,w){let L=eo[S.kind];S.broken=!0,S.solid.off=!0,S.clock=0;let I=.55+Math.random()*.25;S.vx=x.vx*I,S.vz=x.vz*I;let P=Math.max(.01,Math.hypot(x.vx,x.vz));S.axisX=x.vz/P,S.axisZ=-x.vx/P,S.spinRate=(Math.random()-.5)*(S.kind==="bin"?7:2),S.lift=0,S.liftSpeed=S.kind==="bin"||S.kind==="bollard"?Math.min(3.2,w*.22):0;let k=1-L.mass;return x.vx*=k,x.vz*=k,L.damage&&(x.integrity=Math.max(0,x.integrity-L.damage*Math.min(1.6,w/L.speed))),x.impact=Math.max(x.impact,L.mass>.2?4.5:0),u=!0,{kind:S.kind,heavy:L.mass>.2,x:S.x,z:S.z}}function R(S,x,w){let L=[];for(let P of x){let k=Math.hypot(P.vx,P.vz);if(k<.6)continue;let O=k*S*2+.2;for(let F of i){if(F.broken||Math.abs(F.x-P.x)>3.6||Math.abs(F.z-P.z)>3.6)continue;let te={x:P.x+P.vx*S,z:P.z+P.vz*S,angle:P.angle,kind:P.kind};ls(te,F.x,F.z,eo[F.kind].radius+O)&&k>=eo[F.kind].speed&&L.push(T(F,P,k))}}for(let P of i)if(P.broken)if(P.clock+=S,P.clock<2.5){let k=Math.exp(-S*(P.tilt>1.2?6:2.2)),O=P.x+P.vx*S,F=P.z+P.vz*S;P.x=O,P.z=F,P.vx*=k,P.vz*=k,P.spin+=(P.spinRate??0)*S*k,P.tilt=Math.min(Math.PI/2,P.tilt+S*(1.1+P.tilt*3.2)),P.liftSpeed&&(P.lift=Math.max(0,P.lift+P.liftSpeed*S),P.liftSpeed-=9.8*S,P.lift===0&&P.liftSpeed<0&&(P.liftSpeed=0)),g(P)}else P.clock>50&&Math.hypot(w.x-P.solid.x,w.z-P.solid.z)>38&&x.every(k=>Math.hypot(k.x-P.solid.x,k.z-P.solid.z)>3)&&b(P);let I=u;return u=!1,{events:L,shadow:I}}function b(S){Object.assign(S,{broken:!1,x:S.solid.x,z:S.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),S.solid.off=!1,g(S),u=!0}function E(){for(let S of i)S.broken&&b(S)}return{add:M,finalize:_,update:R,reset:E,items:i}}var no=20;function jp(n,e,t){let r=((n+e)%no+no)%no-(t==="z"?0:10);return r>=0&&r<7?"green":r>=7&&r<9?"yellow":"red"}var Gv={red:[new et(1,.12,.08),new et(.2,.05,.05)],yellow:[new et(1,.72,.1),new et(.2,.16,.05)],green:[new et(.2,1,.45),new et(.05,.17,.08)]};function Qp(n,e){let t=[];for(let u of cn)for(let M of cn)t.push({id:u+","+M,x:u,z:M,offset:((u*7+M*3)%no+no)%no});let i=[[-6.1,-6.1,Math.PI,"z"],[6.1,6.1,0,"z"],[-6.1,6.1,-Math.PI/2,"x"],[6.1,-6.1,Math.PI/2,"x"]],s=t.length*i.length,r=new Wn(new Xn(.07,.08,3.3,8),new an({color:3093555,roughness:.6}),s),o=new Wn(new on(.34,.95,.26),new an({color:1909024,roughness:.7}),s),a=new Wn(new Xn(.105,.105,.06,12),new Xt({color:16777215}),s*3),h=new Jt,l=[],f=0;for(let u of t)for(let[M,g,_,T]of i){let R=u.x+M,b=u.z+g;h.position.set(R,1.65+.16,b),h.rotation.set(0,_,0),h.scale.set(1,1,1),h.updateMatrix(),r.setMatrixAt(f,h.matrix),h.position.set(R,3.25+.16,b),h.updateMatrix(),o.setMatrixAt(f,h.matrix),["red","yellow","green"].forEach((E,S)=>{h.position.set(R+Math.sin(_)*.14,3.25+.16+.29-S*.29,b+Math.cos(_)*.14),h.rotation.set(Math.PI/2,_,0,"YXZ"),h.updateMatrix(),a.setMatrixAt(f*3+S,h.matrix),l.push({junction:u,axis:T,color:E,state:""})}),e.push({x:R,z:b,w:.2,d:.2,h:3.5,signal:!0}),f++}r.castShadow=o.castShadow=!0,n.add(r,o,a);let d=new Map(t.map(u=>[u.id,u])),p=0;function m(u){p+=u;let M=!1;l.forEach((g,_)=>{let R=jp(p,g.junction.offset,g.axis)===g.color,b=R?"on":"off";g.state!==b&&(g.state=b,a.setColorAt(_,Gv[g.color][R?0:1]),M=!0)}),M&&a.instanceColor&&(a.instanceColor.needsUpdate=!0)}return m(0),{update:m,state(u,M){let g=d.get(u);return g?jp(p,g.offset,M):"green"},reset(){p=0,m(0)}}}var Vv=16769190,Gu=6445906,Hv={sala:{x:[95,98],z:[41,45]},quarto:{x:[98,101],z:[41,45]},cozinha:{x:[98,101],z:[37,41]},banheiro:{x:[95,98],z:[37,41]}};function em(n,e){let t=new At;n.add(t);let i=(L,I,P,k,O,F,te,H,W=!1)=>{let se=lt(t,L,I,P,k,O,F,te,H,W);return se.castShadow=!1,se},s=(L,I,P,k,O,F,te)=>{let H=new Tt(Wv,new Xt({color:L}));return H.scale.set(O,F,te),H.position.set(I,P,k),t.add(H),H},r=(L,I,P,k,O)=>e.push({x:L,z:I,w:P,d:k,y0:.04,h:O,prop:!0}),o=.046;i("box",11188667,96.55,o+.004,39,2.9,.012,3.8),i("box",14208951,99.5,o+.004,39,2.9,.012,3.8),i("box",10243388,96.7,o+.004,43,2.4,.012,1.7),i("box",4157307,99.45,o+.004,43.5,1.5,.012,1.8),i("box",1908514,97.9,1.28,44.2,.07,.62,1.1);let a=s(1382685,97.855,1.28,44.2,.02,.52,.98);i("box",7297090,97.1,.2,43.7,.5,.4,.9),r(97.1,43.7,.5,.9,.4),i("box",15327175,95.13,1.7,41.3,.03,.34,.26),i("box",8010283,95.13,1.72,41.3,.032,.08,.26),i("box",8084031,100.78,1.55,39.6,.28,.07,1.5);for(let L of[39.1,39.5,39.95])i("cylinder",9278099,100.76,1.7,L,.07,.12,.07);i("box",7297090,99.2,.38,40.15,.95,.05,.7);for(let[L,I]of[[98.8,39.8],[99.6,39.8],[98.8,40.6],[99.6,40.6]])i("box",5720122,L,.28,I,.07,.5,.07);i("cylinder",12098413,99.6,.43,41.05,.2,.04,.2),r(99.2,40.15,.95,.7,.6);let h=s(3812388,99.1,.915,38.16,.34,.012,.34);i("box",12570064,95.65,.09,37.7,1,.09,1),i("box",9284019,95.15,1.1,37.7,.03,2,1),i("box",10404040,95.65,1.1,38.22,1,2,.03),i("cylinder",13620180,95.65,2.1,37.2,.06,.28,.06,!0),i("box",15855592,97.15,.24,37.62,.38,.4,.62),i("box",15855592,97.15,.62,37.28,.4,.3,.14),r(97.15,37.62,.4,.62,.5),i("box",13623524,96.4,1.55,37.13,.78,.62,.03,!0),i("box",15327695,96.4,1,37.13,.5,.1,.04),i("box",7297090,100.55,.26,44.4,.42,.5,.42),r(100.55,44.4,.42,.42,.5),i("box",3814703,100.55,.55,44.4,.1,.12,.1);let l=s(Gu,100.55,.72,44.4,.26,.2,.26);i("box",8219224,98.7,1,44.85,.06,1.9,.02),i("box",15327175,96.2,1.65,44.86,.5,.36,.02),i("box",10125160,96.2,1.65,44.87,.42,.28,.02);let f={};for(let[L,I,P]of[["sala",96.55,42.9],["cozinha",99.3,39.2],["banheiro",96.6,39.2]])i("cylinder",4867905,I,2.66,P,.02,.04,.02),f[L]={shade:s(Gu,I,2.58,P,.36,.07,.36),x:I,y:2.5,z:P,on:!1};f.quarto={shade:l,x:100.55,y:.9,z:44.4,on:!1};for(let[L,I,P,k,O]of[[95.12,1.3,44.7,.02,.1],[98.5,1.3,37.12,.1,.02],[97.4,1.3,37.12,.1,.02]])i("box",15131091,L,I,P,k,.16,O);let d=[];function p(L,I,P,k,O,F,te){let H=s(10933478,L,I,P,k==="x"?.02:O,F,k==="x"?O:.02),W=k==="x"?L<98?.06:-.06:0;i("box",5195585,L,I,P,k==="x"?.05:O+.14,F+.14,k==="x"?O+.14:.05);let se=[-1,1].map(()=>i("box",te,L+W*1.2,I-.02,P,k==="x"?.05:O*.5,F+.3,k==="x"?O*.5:.05));return{pane:H,panels:se,span:O,axis:k,base:k==="x"?P:L,open:1,goal:1,anchor:{x:L+W*1.2,z:P}}}d.push(p(95.17,1.55,43.75,"x",1.1,1.1,11882815)),d.push(p(100.84,1.55,42.1,"x",1,1.1,5209996));let m=p(100.84,1.5,39,"x",.9,.9,13678455);d.push(m);let u=!1,M=0,g={fridge:0,stove:0,shower:0},_=new $o(16766880,0,9,1.5);_.castShadow=!1,t.add(_);let T=(L,I)=>{f[L].on=I,f[L].shade.material.color.setHex(I?Vv:Gu)},R=L=>L,b=[{id:"sala-light",x:95.45,z:44.65,reach:1.2,label:()=>f.sala.on?"Apagar a luz da sala":"Acender a luz da sala",use:()=>(T("sala",!f.sala.on),R(f.sala.on?"Luz da sala acesa.":"Luz da sala apagada."))},{id:"cozinha-light",x:98.5,z:37.55,reach:1.15,label:()=>f.cozinha.on?"Apagar a luz da cozinha":"Acender a luz da cozinha",use:()=>(T("cozinha",!f.cozinha.on),R(f.cozinha.on?"Luz da cozinha acesa.":"Luz da cozinha apagada."))},{id:"banheiro-light",x:97.4,z:37.55,reach:1,label:()=>f.banheiro.on?"Apagar a luz do banheiro":"Acender a luz do banheiro",use:()=>(T("banheiro",!f.banheiro.on),R(f.banheiro.on?"Luz do banheiro acesa.":"Luz do banheiro apagada."))},{id:"abajur",x:100.3,z:44,reach:1.2,label:()=>f.quarto.on?"Apagar o abajur":"Acender o abajur",use:()=>(T("quarto",!f.quarto.on),R(f.quarto.on?"Abajur aceso.":"Abajur apagado."))},{id:"tv",x:96.9,z:44,reach:1.7,label:()=>u?"Desligar a TV":"Ligar a TV",use:()=>(u=!u,a.material.color.setHex(u?8373493:1382685),R(u?"A TV est\xE1 passando um jogo antigo.":"TV desligada."))},{id:"cortina-sala",x:95.7,z:43.75,reach:1.3,label:()=>d[0].goal?"Fechar a cortina da sala":"Abrir a cortina da sala",use:()=>(d[0].goal=d[0].goal?0:1,R(d[0].goal?"Cortina aberta.":"Cortina fechada."))},{id:"cortina-quarto",x:100.3,z:42.3,reach:1.3,label:()=>d[1].goal?"Fechar a cortina do quarto":"Abrir a cortina do quarto",use:()=>(d[1].goal=d[1].goal?0:1,R(d[1].goal?"Cortina aberta.":"Cortina fechada."))},{id:"geladeira",x:100,z:38.9,reach:1.1,label:()=>g.fridge>0?"Geladeira (vazia por agora)":"Pegar algo na geladeira",use:L=>g.fridge>0?R("A geladeira est\xE1 quase vazia."):(g.fridge=90,L.heal(20),R("Voc\xEA comeu um prato de arroz com ovo. +20 de vida."))},{id:"fogao",x:99.1,z:38.9,reach:1,label:()=>g.stove>0?"Fog\xE3o (ainda quente)":"Esquentar uma panela",use:L=>g.stove>0?R("A panela ainda est\xE1 quente."):(g.stove=70,h.material.color.setHex(16742965),L.heal(12),R("Caf\xE9 coado e p\xE3o na chapa. +12 de vida."))},{id:"chuveiro",x:95.95,z:38.55,reach:1.1,label:()=>g.shower>0?"Chuveiro":"Tomar banho",use:L=>g.shower>0?R("Voc\xEA acabou de tomar banho."):(g.shower=120,L.heal(10),R("Banho frio e r\xE1pido. +10 de vida."))},{id:"vaso",x:97.15,z:38.45,reach:1,label:()=>"Dar descarga",use:L=>(L.flush(),R("Descarga."))},{id:"pia",x:96.4,z:38.15,reach:1.2,label:()=>"Lavar o rosto",use:()=>R("Voc\xEA lavou o rosto e se olhou no espelho.")}];function E(L){let I=null,P=1/0;for(let k of b){let O=Math.hypot(L.x-k.x,L.z-k.z);O<k.reach&&O<P&&(I=k,P=O)}return I}function S(L,I){for(let[P,{x:[k,O],z:[F,te]}]of Object.entries(Hv))if(L>=k&&L<O&&I>=F&&I<te)return P;return null}function x(L,I,P){g.fridge=Math.max(0,g.fridge-L),g.stove=Math.max(0,g.stove-L),g.shower=Math.max(0,g.shower-L),g.stove<=0&&h.material.color.setHex(3812388),u&&(M+=L,a.material.color.setHSL(.55+Math.sin(M*3.1)*.04,.55,.58+Math.sin(M*17)*.06));for(let F of d){F.open+=(F.goal-F.open)*Math.min(1,L*4);let[te,H]=F.panels,W=F.span*.5,se=Math.max(.08,W*(1-F.open*.78)),Q=F.base;F.axis==="x"&&(te.scale.z=H.scale.z=se,te.position.z=Q-W+se/2,H.position.z=Q+W-se/2),F.pane.visible=F.open>.45}let k=null,O=1/0;if(P)for(let F of Object.values(f)){if(!F.on)continue;let te=Math.hypot(I.x-F.x,I.z-F.z);te<O&&(O=te,k=F)}k&&_.position.set(k.x,k.y,k.z),_.intensity+=((k?18:0)-_.intensity)*Math.min(1,L*6)}function w(){for(let L of Object.keys(f))T(L,L==="sala");u=!1,a.material.color.setHex(1382685);for(let L of d)L.goal=L.open=1;g.fridge=g.stove=g.shower=0}return w(),{things:b,nearest:E,update:x,reset:w,roomOf:S,lights:f,curtains:d,get tvOn(){return u}}}var Wv=new on(1,1,1);var Oc=473021;function Pn(){return Oc=Math.imul(1664525,Oc)+1013904223>>>0,Oc/4294967296}var or=n=>n[Math.floor(Pn()*n.length)];function tm(n){Oc=473021,n.background=new et(15316107),n.fog=new zo(15316107,.0068),n.add(new Zo(15266035,7890017,2.3));let e=new Qo(16763540,3);e.position.set(-45,48,-32),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),e.shadow.bias=-35e-5,e.shadow.normalBias=.12,e.shadow.mapSize.set(2048,2048),e.shadow.autoUpdate=!1,n.add(e);let t=new Tt(new As(330,32,16),new $n({side:Cn,depthWrite:!1,uniforms:{sun:{value:new $(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));t.frustumCulled=!1,t.renderOrder=-100,n.add(t);let i=[],s=[],r=[],o=[],a={},h={box:new on,foliage:new ts(1,1),pole:new Xn(.8,1,1,8),hill:new As(1,14,9),prism:Xv()},l=new Jt;function f(B,G,J,j,K,le,Y,de,re,Ie=0,nt=0){let De=G===0&&j===0?"center":Math.round(G/31)+","+Math.round(j/31),Oe=B+":"+!!re+":"+De,je=a[Oe]??={shape:B,shadow:!!re,items:[]};l.position.set(G,J,j),l.scale.set(K,le,Y),l.rotation.set(nt,Ie,0,"YXZ"),l.updateMatrix(),je.items.push({matrix:l.matrix.clone(),color:new et(de)})}function d(B,G,J,j,K,le,Y,de=!1,re=0,Ie=0,nt="box"){f(nt,B,G,J,j,K,le,Y,de,re,Ie)}function p(B,G,J,j,K,le,Y){d(B,G,J,j,K,le,Y,!0),i.push({x:B,z:J,w:j,d:le,y0:G-K/2,h:G+K/2})}let m=$p(n,i,Yn);function u(B,G,J=!1){m.add(J?"palm":"tree",B,G,Pn()*6.28,.82+Pn()*.36,{w:.45,d:.45,h:3.6})}function M(B,G,J,j,K,le=1784375,Y=4.2,de=.65){let re=document.createElement("canvas");re.width=512,re.height=115;let Ie=re.getContext("2d");Ie.fillStyle="#e9d4a0",Ie.fillRect(0,0,512,115),Ie.strokeStyle="#645a47",Ie.lineWidth=6,Ie.strokeRect(7,7,498,101),Ie.font="900 50px system-ui",Ie.textAlign="center",Ie.textBaseline="middle",Ie.fillStyle="#"+le.toString(16).padStart(6,"0"),Ie.fillText(B,256,57,470);let nt=new Zs(re);nt.colorSpace=xn;let De=new Tt(new Kn(Y,de),new Xt({map:nt}));De.position.set(G,J,j),De.rotation.y=K,n.add(De)}let g=new At;n.add(g);let _=[],T=new Kn,R=new an({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:zn});function b(B,G,J,j,K,le){let Y=new Tt(T,R);Y.position.set(B,G,J),Y.scale.set(j,K,1),Y.rotation.y=le,n.add(Y)}let E={box:d,solid:i,door:S,sign:M,glazing:b,support:s,volume:r};function S(B,G,J,j,K,le=.228,Y={}){let de=new At,re=Y.id??"door-"+_.length;de.position.set(B,le,G);let Ie=lt(de,"box",K,j*.5,1.088,0,j-.045,2.147,.074);Ie.castShadow=!1;let nt=lt(de,"box",10191979,j*.5,1.47,-.04,j*.64,.56,.013);nt.castShadow=!1;for(let ct of[-1,1])lt(de,"box",10191195,j-.14,.99,ct*.046,.11,.13,.035).castShadow=!1,lt(de,"box",12691318,j-.174,1.011,ct*.073,.132,.042,.037).castShadow=!1;let De=B+Math.cos(J)*j*.5,Oe=G-Math.sin(J)*j*.5,je=Y.normallyOpen?1.48:0;de.rotation.y=J+je,n.add(de);let Ke={x:De,z:Oe,w:Math.abs(Math.cos(J))*j+.083,d:Math.abs(Math.sin(J))*j+.083,y0:le,h:le+2.155,doorId:re,buildingId:Y.buildingId??null},pt={door:de,id:re,x:De,z:Oe,base:le,angle:J,openAmount:je,opened:!!Y.normallyOpen,breached:!1,private:!!Y.private,normallyOpen:!!Y.normallyOpen,hold:0,buildingId:Y.buildingId??null,unitId:Y.unitId??null,normalX:Math.sin(J),normalZ:Math.cos(J),handle:{x:B+Math.cos(J)*(j-.17),y:le+1.008,z:G-Math.sin(J)*(j-.17)},closedSolid:Ke};_.push(pt);for(let ct of[0,j])d(B+Math.cos(J)*ct,le+1.09,G-Math.sin(J)*ct,.105,2.18,.178,6640456,!1,J);return d(De,le+2.185,Oe,j+.12,.11,.178,6640456,!1,J),pt}function x(){let{x:B,z:G}=In,J=13216391;p(B,2.08,G,12,3.84,10,J),d(B,.39,G+5.03,12.04,.46,.08,8484463),d(B,4,G,12.06,1.7,9.98,J,!0,0,0,"prism"),d(B,4.06,G,12,1.84,10.7,9393216,!0,0,0,"prism"),d(B+3.6,4.9,G-2.2,.55,1.9,.55,9402986,!0),d(B,1.38,G+5.05,1.42,2.42,.1,5195585),d(B,1.31,G+5.09,1.1,2.2,.06,6903110),d(B,.18,G+5.35,1.7,.14,.62,8484463),d(B,2.85,G+5.45,1.9,.12,.86,14270112,!0);for(let j of[-3.6,3.6]){d(B+j,2.03,G+5.04,2.08,1.43,.1,5195585),d(B+j,2.03,G+5.07,1.86,1.21,.06,5073522),d(B+j,1.22,G+5.16,2.2,.09,.2,14270112);for(let K of[-1,1])d(B+j+K*1.17,2.03,G+5.07,.34,1.27,.05,6257514)}M("CASA 38",B+1.6,1.62,G+5.13,0,4868146,.92,.22),p(B+9.6,1.6,G-.4,6,3.2,8,12558975),d(B+9.6,3.27,G-.4,6.3,.16,8.3,8280646,!0),d(B+9.6,1.32,G+3.62,4.4,2.5,.08,9278614);for(let j=.3;j<2.6;j+=.28)d(B+9.6,j,G+3.67,4.3,.025,.02,7304824);d(B+9.6,.173,G+8.6,4.8,.03,9.8,10262154),M("GARAGEM",B+9.6,2.85,G+3.68,0,3881523,1.4,.26)}function w(B,G){for(let J of[-1,1])d(B+J*13.34,.168,G,.26,.012,22.4,13485233),d(B+J*13.5,.082,G,.04,.164,22.4,10261637),d(B,.168,G+J*13.34,22.4,.012,.26,13485233),d(B,.082,G+J*13.5,22.4,.164,.04,10261637)}function L(){let B=Ds.z;d(2,.169,B,19,.045,22,6908773),p(-7.18,2.03,B,7.35,3.68,19.56,8886169),d(-7.18,3.98,B,7.62,.23,19.8,5406866),d(-3.46,1.35,B,.12,2.32,1.7,4413028),d(-2.5,3.33,B,7.1,.25,19.5,5401719,!0),p(-1.5,1.42,B-9.72,5.4,2.54,.35,8229008),p(-1.5,1.42,B+9.72,5.4,2.54,.35,8229008);for(let J of[-9.5,9.5])p(1.04,1.65,B+J,.28,3,.31,8689042);d(1.1,2.88,B,.25,.42,19.54,5994626),M("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,B,Math.PI/2,2704468,7.2,.63);for(let J of[-8.2,-3.95,.3,4.55,8.8])d(8.15,.208,B+J,5.3,.016,.1,14537646);for(let J of[-6.1,-1.85,2.4])d(5.5,.208,B+J,.1,.016,3.25,14537646);for(let J of[-6.8,-3.4,3.4,6.8])d(-3.46,1.87,B+J,.08,1.4,2.25,5195585),d(-3.43,1.87,B+J,.05,1.18,2.05,3626589);d(-3.52,.21,B+3.1,.64,.08,2.45,6446161)}d(0,-.3,0,720,.1,720,8880242),d(0,-.18,0,132,.34,132,4605770);for(let B=0;B<1250;B++){let G=Pn()*130-65,J=Pn()*130-65;d(G,.001,J,.04+Pn()*.3,.007,.04+Pn()*.3,or([5460823,4934733,4473414,5855058]),!1,Pn()*6)}for(let B of cn)for(let G of Si){for(let J=-10;J<=10;J+=4)d(B,.014,G+J,.12,.015,1.82,14132838);for(let J of[-12.6,12.6])for(let j=-4.5;j<=4.5;j+=.9)d(B+j,.015,G+J,.45,.016,1.44,13156273)}for(let B of cn)for(let G of Si){for(let J=-10;J<=10;J+=4)d(G+J,.014,B,1.82,.015,.12,14132838);for(let J of[-12.6,12.6])for(let j=-4.5;j<=4.5;j+=.9)d(G+J,.015,B+j,1.44,.016,.45,13156273)}for(let B of Si)for(let G of Si){d(B,.067,G,27.1,.16,27.1,13022103),d(B,.125,G,26.7,.07,26.7,10721158);for(let J of[-12.25,12.25])for(let j=-12;j<=12;j+=2.1)d(B+J,.164,G+j,2.32,.008,.023,12956566),d(B+j,.164,G+J,.023,.008,2.32,12956566);if(w(B,G),B===Ds.x-2&&G===Ds.z)L();else if(B===In.x&&G===In.z)x();else if(B===0&&G===-38){for(let J of[-6,6]){d(B+J,.185,G,8.2,.08,19,7438938);for(let j of[-7,0,7])u(B+J,G+j,!0)}for(let J=-8;J<=8;J+=4)d(B,.177,G+J,3.1,.033,3.2,13218964);p(B,1.04,G-9.89,4.42,1.77,.18,9271651),M("PRA\xC7A DA BRASA",B,1.6,G-10,Math.PI)}else for(let J of[-1,1]){let j=B===0&&G===0&&J===1,K=o.filter(je=>je.id.startsWith("lot-")||je.id==="armory").length,le=K+10,Y=j?"armory":K%5===1||K%5===3?"shop":K%5===0?"house":"apartments",de=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],re=j?"armory":le===13?"barber":le===18?"clothes":le===21?"black":le===16?"workshop":Y==="shop"?"store":null,nt={barber:"BARBEARIA DO Z\xC9",clothes:"MODA BRASA",black:"PENHORES 24H",workshop:"OFICINA DO BIGODE"}[re]??(Y==="shop"?de[Math.floor(K/2)%de.length]:Y==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(K/2)%6]:"CASA "+le),De=or([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Oe=qp(E,{id:j?"armory":"lot-"+le,kind:Y,label:j?"LOJA DE ARMAS":nt,x:B+J*(j?5.7:6.25),z:G+(j?-5.45:0),angle:J*Math.PI/2,w:j?11.35:(Y==="house"?13.7:15.3)+Pn()*.57,d:j?9.36:9.38+Pn()*.25,color:De,upperColor:or([12163192,10394757,12426376,11971991]),awning:or([7821376,6190959,10446933]),fabrics:or([7373431,8152675,9534300]),stories:K%3===0?3:2,doorAt:j?0:void 0,open:Y==="house"&&K%3!==0});Oe.service=re,o.push(Oe)}for(let J of[-1,1]){let j=B+J*12.85,K=G-J*9.85;m.add("lamp",j,K,J>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),m.add("bench",B+J*9,G-J*12.5,J>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let le=B+J*10.1;m.add("bin",le,G-J*12.55,0,1,{w:.5,d:.5,h:.78}),m.add("bollard",le+.72,G-J*12.58,0,1,{w:.14,d:.14,h:.46}),B===In.x&&G===In.z&&J===1||u(B+J*9.4,G+J*12.6)}}for(let B of[-1,1])p(63.6,1.85,B*2.5,.15,3.7,.15,7362375);d(63.6,3.48,0,.16,.64,5.15,7362375),M("VILA DAS LAJES",63.51,3.48,0,-Math.PI/2,3232851,3.55,.56),d(84,-.055,0,44,.1,en.halfDepth*2,10063229);for(let B of[63.45,71,78,85,93,101])d(B,-.003,0,2.4,.012,94,10393225);for(let B of[-30,-20,-10,0,10,20,30,40])d(84,-.001,B,43.8,.014,3.2,11115405);for(let[B,G]of[67.5,74.5,81,89,97,104].entries())for(let[J,j]of[-44,-35,-25,-15,-5,5,15,25,35,44].entries()){if(B>=4&&j>=35||j===-5&&B<3)continue;let K=2.9+(B+J)%3*.85,le=[11890768,10652789,11363656,10063490][(J+B)%4];if(p(G,K/2,j,4.1,K,5.2,le),d(G,K+.08,j,4.3,.16,5.4,8683127),d(G-2.06,1.07,j-.8,.05,2.14,.88,5786688),d(G-2.07,1.64,j+1.15,.055,.88,1.2,5464677),(J+B)%2===0){d(G-2.32,2.28,j-.8,.56,.09,1.36,8162439);for(let de of[-.42,0,.42])d(G-2.11,1.64,j+1.15+de,.04,.88,.04,2702400)}J%2===0&&d(G,K+.55,j+1,1.3,.92,1.3,5334392);let Y=(J*131+B*57+J*B*13)%97;if(Y%3===0){d(G-2.07,1.75,j-2,.04,.9,.9,9262144);for(let de=0;de<4;de++)d(G-2.09,1.39+de*.2,j-2,.02,.022,.9,5978671)}if(Y%4===1)for(let[de,re]of[[-2.55,-1.3],[-.3,2.55]])d(G-2.07,.45,j+(de+re)/2,.04,.9,re-de,[6257514,8019014,6975364][Y%3]);if(Y%5===2)for(let de of[-1.7,0,1.7])d(G,K+.5,j+de,.05,.8,.05,4930354);Y%6===0&&(d(G+1.4,K+.6,j-1.7,.5,.08,.5,13619922,!1,0,.5),d(G+1.4,K+.38,j-1.7,.05,.5,.05,5593690)),Y%7<3&&d(G-2.08,K-.9,j+2.25,.02,1.8,.3,8018501),Y%8===4&&(d(G-2.18,.62,j+1.15,.12,.32,.5,15197919),d(G-2.25,.62,j+1.15,.02,.22,.4,7107447))}let I=98,P=41;d(I,.022,P,6,.044,8,11971222),p(I,1.37,P-4,6.2,2.7,.18,11904388),p(I,1.37,P+4,6.2,2.7,.18,11904388),p(I+3,1.37,P,.18,2.7,8,11904388),p(I-3,1.37,P-1.9,.18,2.7,4.2,11904388),p(I-3,1.37,P+2.9,.18,2.7,2.2,11904388);for(let B of[-1,1])p(I+B*1.76,1.37,P,2.42,2.7,.14,12891799),p(I,1.37,P+B*3.18,.14,2.7,1.62,12891799);d(I-3,2.45,P+1,.18,.5,1.6,11904388),S(I-3,P+.2,-Math.PI/2,1.6,8015414,.022,{buildingId:"lajes-home",unitId:"lajes-home:0",id:"lajes-home-door"}),p(I,2.77,P,6.18,.17,8.2,7828075),r.push({buildingId:"lajes-home",unitId:"lajes-home:0",x:I,z:P,w:5.8,d:7.8,floor:0,ceiling:2.68}),M("CASA",94.87,2.34,P+1,-Math.PI/2,3232851,.95,.28),p(96.1,.36,43.7,.85,.7,1.76,6912108),d(96.1,.75,43.7,.86,.09,1.7,12102280),p(99.7,.27,43.6,1.18,.51,1.91,8938317),d(99.7,.58,43.6,1.18,.13,1.88,13086100),d(99.7,.67,44.27,.92,.13,.39,15853006),p(96.4,.44,38.65,1.6,.86,.56,7239797),d(96.4,.9,38.65,1.64,.07,.61,12633269),d(100,.38,38.1,.59,.75,.63,14998731),d(99.1,.84,38.16,.62,.14,.44,14076597);let k=em(n,i),O=qn,F=(O.west+O.east)/2;d(F,.005,75,25.8,.014,24,7564899),d(O.gate.x,.004,62.2,7.5,.015,4.8,7564899);for(let B of[O.west+.3,O.east-.3])p(B,.8,75,.24,1.6,24,6776155);p(F,.8,86.72,25.6,1.6,.24,6776155),p(45.3,.8,63,12.4,1.6,.22,6776155),p(62,.8,63,5.6,1.6,.22,6776155),d(43.8,1.55,66.6,5,3.1,4,11115653),M("FERRO-VELHO",43.8,2.5,64.56,Math.PI,3232851,4.3,.55);for(let B=42;B<=62;B+=3.2)d(B,.015,81,.045,.012,5,12035445);for(let B=0;B<52;B++){let G=B/52*Math.PI*2,J=118+Pn()*58,j=or([9670532,10525321,10001560,9212560]),K=12+Pn()*33,le=3+Pn()*22,Y=10+Pn()*20,de=4+Pn()*16,re=3+Pn()*9,Ie=4+Pn()*8,nt=or([10194306,8949389,10128258]),De=Math.max(K,Y)+4,Oe=ct=>{let tn=Math.sin(G)*ct,Lt=Math.cos(G)*ct;return[[-70,70,-70,70],[en.west-4,en.east+2,-en.halfDepth-4,en.halfDepth+4],[qn.west-4,qn.east+4,qn.north-4,qn.south+4]].some(([Wt,zt,Ye,mt])=>tn+De>Wt&&tn-De<zt&&Lt+De>Ye&&Lt-De<mt)},je=J;for(;Oe(je)&&je<J+120;)je+=4;let Ke=Math.sin(G)*je,pt=Math.cos(G)*je;f("hill",Ke,-1,pt,K,le,Y,j,!1,G),d(Ke,de*.5-1,pt,re,de,Ie,nt,!1)}m.finalize();let te=Qp(n,i),H=new an({roughness:.88});for(let{shape:B,shadow:G,items:J}of Object.values(a)){let j=new Wn(h[B],H,J.length);J.forEach(({matrix:K,color:le},Y)=>{j.setMatrixAt(Y,K),j.setColorAt(Y,le)}),j.castShadow=G,j.receiveShadow=!0,n.add(j)}let W=new At,se=new Tt(new Xo(1.6,1.85,40),new Xt({color:15794054,side:zn,transparent:!0,opacity:.85,depthWrite:!1}));se.rotation.x=-Math.PI/2,se.position.y=.26,W.add(se);let Q=new Tt(new ns(.43),new Xt({color:15794054}));return Q.position.y=2.8,W.add(Q),n.add(W),{solid:i,marker:W,beacon:Q,sun:e,sky:t,houseRoof:g,bed:Pp,doors:_,buildings:o,props:m,signals:te,lajesHome:k,...Jp(i,s,r,_,Yn)}}function Xv(){let n=[-.5,0,-.5],e=[-.5,0,.5],t=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,e,t,i,r,s,n,r,i,n,t,r,e,r,t,e,s,r,n,s,e,n,i,s],a=new Qt;return a.setAttribute("position",new Pt(o.flat(),3)),a.computeVertexNormals(),a}var qv=n=>n===0?"gr\xE1tis":"R$ "+n.toLocaleString("pt-BR"),Yv=n=>"#"+n.toString(16).padStart(6,"0");function nm(n,{balance:e,onClose:t}){let i=n.querySelector("#shop-title"),s=n.querySelector("#shop-detail"),r=n.querySelector("#shop-balance"),o=n.querySelector("#shop-list"),a=n.querySelector("#shop-status"),h=null,l=null;function f(p){let m=p?document.activeElement?.getAttribute("data-key"):null,u=l();h=u,i.textContent=u.title,s.textContent=u.note??"",r.textContent=e(),o.replaceChildren(),u.sections.forEach((_,T)=>{let R=document.createElement("h3");R.textContent=_.title,o.append(R),_.items.forEach((b,E)=>{let S=document.createElement("div");S.className="store-row"+(b.active?" active":"");let x=document.createElement("button");x.type="button",x.className="store-item",x.dataset.key=T+":"+E,x.disabled=!!b.disabled,x.innerHTML="";let w=document.createElement("span");w.textContent=b.label+(b.active?" \xB7 em uso":"");let L=document.createElement("b");if(L.textContent=b.price==null||b.disabled&&u.title==="Invent\xE1rio"?"":qv(b.price),x.append(w,L),b.detail){let I=document.createElement("small");I.textContent=b.detail,x.append(I)}if(x.addEventListener("click",()=>d(b,void 0)),S.append(x),b.colors){let I=document.createElement("div");I.className="swatches",b.colors.forEach((P,k)=>{let O=document.createElement("button");O.type="button",O.className="swatch",O.style.background=Yv(P),O.dataset.key=T+":"+E+":"+k,O.setAttribute("aria-label",b.label+", cor "+(k+1)),O.disabled=!!b.disabled,O.addEventListener("click",()=>d(b,P)),I.append(O)}),S.append(I)}o.append(S)})}),((m?o.querySelector('[data-key="'+m+'"]'):null)??o.querySelector("button:not(:disabled)"))?.focus({preventScroll:!1})}function d(p,m){let u=p.buy(m);a.textContent=u??"Pronto!",a.classList.toggle("error",!!u),f(!0)}return{show(p){l=p,a.textContent="",f(!1),n.open||n.showModal()},close(){n.open&&n.close(),h=null,t()},move(p){let m=[...n.querySelectorAll("button:not(:disabled)")];if(!m.length)return;let u=m.indexOf(document.activeElement),M=m[(u+p+m.length)%m.length];M.focus(),M.scrollIntoView({block:"nearest"})},activate(){let p=document.activeElement;p&&n.contains(p)&&p.click()},refresh(){h&&f(!0)}}}var ar={sedan:{name:"Brasa",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15.4,grip:8.1,mass:1.1},palette:[11422e3,4362871,13084242,5795484,9063749,14209732,3093558]},hatch:{name:"Pulga",category:"dia a dia",length:3.95,width:1.78,sill:.49,belt:.92,roof:1.5,wheel:.36,wheelbase:2.45,cabin:{base:[-1.72,.62],top:[-1.66,.05]},seats:[[.38,.18],[-.38,.18],[.38,-.86],[-.38,-.86]],doors:4,handling:{top:24,accel:13.6,grip:8.6,mass:.85},palette:[14783826,6989496,14209732,11876922,9416794]},wagon:{name:"Perua",category:"dia a dia",length:4.9,width:1.92,sill:.5,belt:.94,roof:1.52,wheel:.41,wheelbase:3,cabin:{base:[-2.25,.92],top:[-2.18,.31]},seats:[[.42,.1],[-.42,.1],[.42,-1],[-.42,-1]],doors:4,handling:{top:26,accel:14,grip:8,mass:1.18},palette:[9799551,5143689,8219215,13023648],extras:["roofRack"]},taxi:{name:"T\xE1xi",category:"dia a dia",length:4.8,width:1.94,sill:.505,belt:.935,roof:1.49,wheel:.41,wheelbase:2.98,cabin:{base:[-1.64,.9],top:[-1.2,.29]},seats:[[.42,.06],[-.42,.06],[.42,-1.04],[-.42,-1.04]],doors:4,handling:{top:27,accel:15,grip:8.1,mass:1.1},palette:[15254855],extras:["taxi"]},pickup:{name:"Picape",category:"utilit\xE1rio",length:5.3,width:2,sill:.66,belt:1.1,roof:1.86,wheel:.46,wheelbase:3.25,cabin:{base:[-.62,1.02],top:[-.52,.48]},seats:[[.44,-.02],[-.44,-.02]],doors:2,handling:{top:25,accel:13,grip:7.6,mass:1.45},palette:[7043674,9056042,14012354,3100527,3815994],extras:["bed"]},van:{name:"Furg\xE3o",category:"utilit\xE1rio",length:5.15,width:2,sill:.55,belt:1.06,roof:2,wheel:.41,wheelbase:3.15,cabin:{base:[.15,1.5],top:[.4,.95]},seats:[[.45,.85],[-.45,.85]],doors:2,handling:{top:22,accel:11,grip:7,mass:1.6},palette:[15131350,10467269,13218682,7110499],extras:["box"]},suv:{name:"Jip\xE3o",category:"luxo / utilit\xE1rio",length:4.85,width:2.02,sill:.7,belt:1.13,roof:1.9,wheel:.48,wheelbase:2.95,cabin:{base:[-1.98,.78],top:[-1.88,.26]},seats:[[.45,.05],[-.45,.05],[.45,-1],[-.45,-1]],doors:4,handling:{top:28,accel:14.6,grip:7.8,mass:1.45},palette:[2042416,14276303,6044462,3758922],extras:["roofRack","chrome"]},sport:{name:"Fa\xEDsca",category:"esportivo",length:4.45,width:1.98,sill:.4,belt:.76,roof:1.2,wheel:.38,wheelbase:2.7,cabin:{base:[-1.05,.62],top:[-.55,.02]},seats:[[.4,-.28],[-.4,-.28]],doors:2,handling:{top:40,accel:23,grip:9.8,mass:.95},palette:[14236459,15909424,3108822,16052714,2500907],extras:["spoiler"]},muscle:{name:"Trov\xE3o",category:"esportivo",length:4.95,width:2,sill:.46,belt:.88,roof:1.34,wheel:.43,wheelbase:2.95,cabin:{base:[-1.3,.5],top:[-1,-.02]},seats:[[.42,-.45],[-.42,-.45]],doors:2,handling:{top:36,accel:21,grip:7.4,mass:1.25},palette:[1908514,8199967,13855274,2972991],extras:["scoop","stripes"]},luxury:{name:"Imperador",category:"luxo",length:5.35,width:2.02,sill:.5,belt:.98,roof:1.55,wheel:.43,wheelbase:3.25,cabin:{base:[-1.95,.98],top:[-1.45,.36]},seats:[[.44,.12],[-.44,.12],[.44,-1.08],[-.44,-1.08]],doors:4,handling:{top:33,accel:16,grip:8.6,mass:1.35},palette:[1316376,15065818,3882821,4858664],extras:["chrome"]},convertible:{name:"Brisa",category:"luxo / esportivo",length:4.6,width:1.95,sill:.46,belt:.86,roof:1.3,wheel:.4,wheelbase:2.75,cabin:{base:[-1.35,.7],top:[-1.35,.36]},seats:[[.4,-.12],[-.4,-.12],[.4,-1],[-.4,-1]],doors:2,open:!0,handling:{top:34,accel:19,grip:9,mass:1.05},palette:[9425384,15328208,11872828,1851246],extras:["chrome"]}},im={street:{name:"Rua",handling:{top:31,accel:19.7,grip:13.5,mass:.39}},sport:{name:"Raio",handling:{top:40,accel:24,grip:14.5,mass:.36}},chopper:{name:"Estradeira",handling:{top:29,accel:15,grip:12,mass:.45}},scooter:{name:"Mobilete",handling:{top:19,accel:10,grip:13,mass:.28}}};for(let[n,e]of Object.entries(ar))Vp("car:"+n,{width:e.width/2+.02,length:e.length/2+.01,radius:e.width/2-0,offsets:[-(e.length/2-e.width/2),0,e.length/2-e.width/2],mass:e.handling.mass});var am=new on(1,1,1),Zv=new an({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:zn,transparent:!0,opacity:.5,depthWrite:!1});function io(n,e="sedan",t,i=!1){let s=e==="tow"?{...ar.pickup,name:"Guincho",extras:["bed","tow"]}:ar[e]??ar.sedan,r=t??s.palette[0],{length:o,width:a,sill:h,belt:l,roof:f,wheel:d,wheelbase:p}=s,m=o/2,u=s.extras??[],[M,g]=s.cabin.base,[_,T]=s.cabin.top,R=new At;Nc(R,a/2+.17,m+.07);let b=new At;R.add(b);let E=(Y,de,re,Ie,nt,De,Oe,je,Ke=!1)=>lt(b,Y,de,re,Ie,nt,De,Oe,je,Ke),S=u.includes("chrome");E("box",2435629,0,(d*.32+h+.06)/2,0,a-.44,h+.06-d*.32,o-.9);for(let Y of[-1,1])E("box",2830387,Y*(a/2-.07),h-.06,0,.12,.22,Math.max(.4,p-2*d-.12));E("box",3749689,0,h,0,a-.44,.075,o-.35);for(let Y of[-1,1]){for(let[de,re]of[[-m,-p/2-d],[-p/2+d,p/2-d],[p/2+d,m]])re>de&&E("box",r,Y*(a/2-.055),(h+l)/2,(de+re)/2,.11,l-h,re-de,!0);for(let de of[-p/2,p/2]){let re=Math.min(l-.05,2*d+.03);E("box",r,Y*(a/2-.055),(re+l)/2,de,.11,l-re,2*d,!0)}}for(let Y of[-1,1])E("box",r,0,(h+l)/2,Y*(m-.09),a-.04,l-h,.18,!0);let x=m-g-.03,w=E("box",r,0,l+.005,(g+m)/2,a-.04,.15,x,!0);!u.includes("bed")&&!u.includes("box")&&m+M>.25&&E("box",r,0,l-.005,(M-m)/2,a-.05,.14,m+M-.02,!0);let L=a/2-.07,I=a/2-.27,P=Zv.clone(),k;if(s.open){let Y=new Qt;Y.setAttribute("position",new Pt([-L,l,g,L,l,g,I,f,T,-I,f,T],3)),Y.setIndex([0,1,2,0,2,3]),Y.computeVertexNormals(),k=new Tt(Y,P),E("box",2895665,0,f,T,a-.5,.06,.07)}else{let Y=new Qt;Y.setAttribute("position",new Pt([-L,l-.015,M,L,l-.015,M,L,l-.015,g,-L,l-.015,g,-I,f,_,I,f,_,I,f,T,-I,f,T],3)),Y.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),Y.computeVertexNormals(),k=new Tt(Y,P),E("box",r,0,f+.035,(_+T)/2,I*2+.02,.07,T-_+.08,!0);let de=(re,Ie,nt)=>{let De=f-l,Oe=Ie-re;for(let je of[-1,1])E("box",r,je*(L+I)/2,(l+f)/2,(re+Ie)/2,.08,Math.hypot(De,Oe),nt,!0).rotation.x=Math.atan2(Oe,De)};if(de(g,T,.08),de(M,_,.12),s.doors===4){let re=(s.seats[0][1]+s.seats[2][1])/2+.12;for(let Ie of[-1,1])E("box",r,Ie*(L+I)/2,(l+f)/2,re,.08,f-l,.1,!0)}}k.renderOrder=2,b.add(k);let O=Math.min(l-.26,f-.99),F=Math.min(.62,f-l-.02+.3);for(let[Y,de]of s.seats)E("cloth",3486512,Y,O+.06+F,de-.235,.31,.16,.14),E("cloth",3815219,Y,O-.1,de+.12,.51,.14,.54),E("box",3815219,Y,O+F/2,de-.235,.5,F,.13);E("box",2828840,0,l+.045,g-.24,a-.26,.14,.34);let te=new At;te.position.set(s.seats[0][0],l+.07,s.seats[0][1]+.42),te.rotation.x=Math.PI/2-.45;let H=new At;te.add(H),lt(H,"cylinder",1907997,0,0,0,.17,.03,.17),lt(H,"box",7105124,0,.018,0,.3,.012,.03),lt(H,"box",7105124,0,.018,.07,.03,.012,.14),E("cloth",2106922,0,O+.02,(M+g)*.5,.19,.23,Math.min(1.25,g-M));for(let Y of[-1,1])E("box",6643286,Y*(a/2-.15),(h+l)/2,(M+g)/2,.08,.085,g-M),E("box",11951652,Y*(a*.5-.13),l-.205,m+.006,.12,.064,.032,!0),E("box",12959664,Y*(a*.5-.26),h-.07,-m-.036,.12,.076,.09,!0);E("cloth",2435629,0,l-.21,m+.009,a*.41,.13,.026);for(let Y=0;Y<3;Y++)E("box",7630694,0,l-.25+Y*.04,m+.026,a*.36,.013,.014,!0);E("box",3355961,0,l-.24,m+.004,a*.44,.14,.05),E("box",13156268,0,h+.035,m+.006,a*.98,.1,.045,!0),E("box",13156268,0,h+.025,-m-.006,a*.98,.1,.05,!0),E("box",16707771,0,(h+l)/2,-m-.008,.4,.14,.03);for(let Y of[-1,1]){E("box",16769956,Y*(a/2-.29),l-.165,m+.006,.43,.17,.055,!0),E("box",11021858,Y*(a/2-.3),l-.165,-m-.006,.48,.17,.055,!0),s.open||E("box",2898236,Y*(a/2+.03),l+.07,g-.06,.1,.09,.16);let de=s.doors===4?[g,(s.seats[0][1]+s.seats[2][1])/2+.12,M+.05]:[g,s.seats[0][1]-.62];for(let re of de)E("box",1843234,Y*(a/2+.005),(h+l)/2,re,.012,l-h-.02,.025);for(let re=0;re<de.length-1;re++)E("box",13089700,Y*(a/2+.01),l-.05,de[re+1]+Math.min(.21,(de[re]-de[re+1])*.25),.035,.04,.22,!0);S&&E("box",14277074,Y*(a/2+.008),l-.03,0,.02,.03,o-.5,!0)}if(u.includes("taxi")&&(E("box",16249304,0,f+.16,(_+T)/2,.68,.2,.26),E("box",2779715,0,(h+l)/2+.06,0,a+.012,.08,o*.6,!0)),u.includes("spoiler")){for(let Y of[-1,1])E("box",1776670,Y*.6,l+.14,-m+.28,.06,.22,.08);E("box",r,0,l+.27,-m+.25,a-.2,.05,.32,!0)}if(u.includes("scoop")&&E("box",2105892,0,l+.12,(g+m)/2+.1,.5,.12,.62),u.includes("stripes"))for(let Y of[-1,1])E("box",15855590,Y*.2,l+.083,(g+m)/2,.16,.012,x),E("box",15855590,Y*.2,f+.072,(_+T)/2,.16,.012,T-_);if(u.includes("roofRack"))for(let Y of[-1,1])E("box",2500907,Y*(I-.08),f+.1,(_+T)/2,.05,.06,T-_+.2);if(u.includes("tow")&&(E("box",3553336,0,l+.18,-o*.34,.73,.51,.35),E("box",15047465,0,f+.1,(_+T)/2,.68,.13,.28,!0),E("box",6776928,0,l-.17,-m-.19,.91,.13,.33,!0)),u.includes("bed")){for(let Y of[-1,1])E("box",r,Y*(a/2-.04),l+.22,(M-m)/2,.08,.44,m+M,!0);E("box",r,0,l+.22,-m+.04,a,.44,.08,!0),E("box",r,0,l+.22,M-.04,a,.44,.08,!0),E("box",2960169,0,l+.01,(M-m)/2,a-.16,.02,m+M-.12)}if(u.includes("box")){E("box",r,0,(l+2.15)/2,(M+.25-m)/2,a,2.15-l,m+M+.25,!0),E("box",2763306,0,2.15-.05,(M+.25-m)/2,a+.02,.04,m+M+.27);for(let Y of[-1,1])E("box",1843234,Y*.005,(l+2.1)/2,-m-.004,.015,2-l,.02)}let W=[];for(let Y of[-1,1])for(let de of[-p/2,p/2]){let re=new At;re.position.set(Y*(a/2-.17),d,de),R.add(re),lt(re,"cylinder",2434600,0,0,0,d,.24,d).rotation.z=Math.PI/2,lt(re,"cylinder",S?14013903:11052964,Y*.115,0,0,d*.53,.02,d*.53,!0).rotation.z=Math.PI/2,W.push(re)}let se=new At,Q=s.doors===4?(s.seats[0][1]+s.seats[2][1])/2+.12:s.seats[0][1]-.62;se.position.set(a/2+.004,0,g),lt(se,"box",r,0,(h+l)/2+.04,-(g-Q)/2,.036,l-h-.1,g-Q,!0),wi(se,as(se),Dc),b.add(se);let B=[1,-1].map(Y=>{let de=new At;return de.position.set(0,h-.09,Y*(m-.2)),lt(de,"box",S?13619144:2830387,0,0,0,a-.08,.3,.42,S),wi(de,as(de),S?Dc:void 0),b.add(de),{mesh:de,end:Y,state:0,home:de.position.clone(),damage:0,velocity:new $,spin:0}}),G=[];i&&(G.push(E("box",15550262,-.33,f+.13,(_+T)/2,.55,.14,.25)),G.push(E("box",5487086,.33,f+.13,(_+T)/2,.55,.14,.25)));let J=as(b).filter(Y=>Y!==k&&Y!==w&&!G.includes(Y));wi(b,J.filter(Y=>Y.material.metalness===0)),wi(b,J.filter(Y=>Y.material.metalness>0),Dc);for(let Y of W)wi(Y,as(Y));b.traverse(Y=>{Y instanceof Tt&&(Y.castShadow=!1)}),b.add(te);let j=new Xt({color:16757276}),K={left:[],right:[]};for(let Y of[-1,1])for(let[de,re,Ie]of[[m+.014,l-.2,.1],[-m-.014,l-.2,.12]]){let nt=new Tt(am,j);nt.scale.set(Ie,.085,.03),nt.position.set(Y*(a/2-.07),re,de),nt.visible=!1,b.add(nt),K[Y>0?"left":"right"].push(nt)}let le=null;if(u.includes("tow")){let Y=new At;Y.position.set(0,l+.28,-o*.3),lt(Y,"box",4539969,0,0,-.8,.135,.16,1.6,!0),lt(Y,"box",15047465,0,0,-1.62,.2,.2,.16);let de=new At,re=lt(de,"box",2105376,0,-.3,0,.03,1,.03),Ie=lt(de,"box",13619144,0,-.65,0,.13,.1,.15,!0);b.add(Y,de),le={pivot:Y,hang:de,cable:re,hook:Ie,length:1.62}}return n.add(R),lm({root:R,body:b,cabin:k,cracks:[],wheels:W,lamps:G,hood:w,bumpers:B,blinkers:K,towArm:le,armAngle:.35,signal:0,steeringWheel:{tilt:te,spin:H},towTilt:0,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"car",model:e,shape:e==="tow"?"car:pickup":"car:"+e,spec:s,color:r,handling:s.handling,rider:null,door:se,doorTime:0,wheelSpin:0,handlebar:null,wheelRadius:d,wheelbase:p,halfWidth:a/2,halfLength:m,seatHip:O,flat:[!1,!1,!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}function lm(n){let e=n;return e.repair=()=>Jv(e),e}var sm=new an({color:2038810,roughness:1,metalness:.05});function cm(n){n.originals??=new Map,n.root.traverse(e=>{!(e instanceof Tt)||e===n.cabin||e.material===sm||e.parent===n.root&&e.geometry.type==="CircleGeometry"||(n.originals.set(e,e.material),e.material=sm)}),n.cabin&&(n.cabin.visible=!1);for(let e of n.cracks)e.visible=!1}function Jv(n){n.flat?.fill(!1);for(let[e,t]of n.originals??[])e.material=t;n.originals?.clear(),n.cabin&&(n.cabin.visible=!0);for(let e of n.bumpers??[])n.body.add(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.state=0,e.damage=0;Object.assign(n,{damageFront:0,damageRear:0,burning:!1,wrecked:!1,fire:0,wreckClock:0})}function hm(n){let e=t=>n.bumpers?.find(i=>i.end===t);return{front:Math.round(Math.min(100,(n.damageFront??0)+(e(1)?.state?30:0))),rear:Math.round(Math.min(100,(n.damageRear??0)+(e(-1)?.state?30:0))),glass:n.cracks?.length??0,tires:(n.flat??[]).filter(Boolean).length,mechanics:Math.max(0,Math.round(100-n.integrity))}}function um(n,e){if(e==="front"||e==="rear"){let t=e==="front"?1:-1;t>0?n.damageFront=0:n.damageRear=0;for(let i of n.bumpers??[])i.end===t&&(n.body.add(i.mesh),i.mesh.position.copy(i.home),i.mesh.rotation.set(0,0,0),i.state=0,i.damage=0)}else if(e==="glass"){for(let t of n.cracks??[])t.removeFromParent();n.cracks&&(n.cracks.length=0)}else e==="tires"?n.flat?.fill(!1):e==="mechanics"&&(n.integrity=Math.max(n.integrity,100))}var fm={spoiler:{label:"Aerof\xF3lio"},rack:{label:"Bagageiro de teto"},bullbar:{label:"Quebra-mato refor\xE7ado"}},dm=Object.fromEntries(Object.entries(fm).map(([n,{label:e}])=>[n,e]));function Vu(n,e,t){if(n.kind!=="car"||!fm[e])return;if(n.fitted??=new Set,n.fittedMeshes??={},!t){for(let d of n.fittedMeshes[e]??[])d.removeFromParent();delete n.fittedMeshes[e],n.fitted.delete(e);return}if(n.fitted.has(e))return;let{spec:i}=n,{width:s,length:r,roof:o,belt:a}=i,h=r/2,l=[],f=(d,p,m,u,M,g,_,T,R=!1)=>l.push(lt(n.body,d,p,m,u,M,g,_,T,R));if(e==="spoiler"){for(let d of[-1,1])f("box",1776670,d*.6,a+.16,-h+.3,.06,.26,.08);f("box",n.color,0,a+.31,-h+.27,s-.2,.05,.34,!0)}else if(e==="rack"){let[d,p]=i.cabin.top;for(let m of[-1,1])f("box",2500907,m*(s/2-.35),o+.12,(d+p)/2,.05,.06,p-d+.25);for(let m of[d+.1,(d+p)/2,p-.1])f("box",2500907,0,o+.15,m,s-.7,.04,.05)}else if(e==="bullbar"){f("box",2763822,0,i.sill+.06,h+.18,s-.3,.07,.07,!0);for(let d of[-1,1])f("box",2763822,d*(s/2-.3),i.sill+.28,h+.15,.06,.5,.06,!0);f("box",2763822,0,i.sill+.5,h+.13,s-.4,.06,.06,!0)}n.fittedMeshes[e]=l,n.fitted.add(e)}function Hu(n){let e=n.spec.handling,{engine:t=0,tires:i=0}=n.upgrades??{};n.handling={...e,top:e.top*(1+.055*t),accel:e.accel*(1+.09*t),grip:e.grip*(1+.075*i)}}function Bc(n,e,t="street"){let i=im[t]??im.street,s=new At;Nc(s,.42,1.07*1.07);let r=new At;s.add(r);let o=(M,g,_,T,R,b,E,S)=>lt(r,M,g,_,T,R,b,E,S),a=t==="scooter"?.25:t==="chopper"?.36:.33,h=t==="chopper"?[-.86,.98]:t==="scooter"?[-.62,.66]:[-.73,.78];t==="scooter"?(o("box",e,0,.42,-.25,.38,.34,.8),o("box",2763821,0,.34,.2,.36,.08,.55),o("box",e,0,.72,.52,.34,.68,.16),o("box",2369834,0,.78,-.32,.34,.12,.55),o("box",13940106,0,.92,.66,.22,.14,.08)):t==="chopper"?(o("box",3882300,0,.46,-.1,.3,.34,.7),o("sphere",e,0,.86,.32,.22,.18,.5),o("box",2369834,0,.68,-.42,.38,.1,.62),o("box",e,0,.62,-.86,.3,.16,.5),o("box",14079696,.22,.34,-.42,.1,.1,.95),o("box",13940106,0,.9,1.02,.22,.2,.1)):(o("box",3882300,0,.48,-.04,.32,.38,.7),o("sphere",e,0,.89,.34,.24,.23,.46),o("box",2369834,0,.85,-.36,.36,.13,.59),o("box",e,0,.65,-.7,.32,.17,.58),o("box",13940106,0,.8,.88,.25,.21,.11),t==="sport"&&(o("box",e,0,.72,.62,.42,.5,.5),o("box",2902871,0,1.04,.72,.34,.18,.06),o("box",e,0,.8,-.72,.28,.12,.5))),o("box",10433836,0,.7,h[0]-.25,.2,.11,.11);for(let M of[-1,1]){let g=o("box",3817536,M*.27,1.28,.47,.035,.22,.035);g.rotation.z=-M*.4,o("cloth",4343880,M*.32,1.39,.47,.17,.078,.056),o("box",11630140,M*.19,.76,h[0]-.17,.11,.073,.08)}let l=new At;l.position.set(0,.76,.38),lt(l,"box",3949122,0,.44,-.09,t==="chopper"?.84:.684,.057,.059),lt(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,wi(l,as(l)),r.add(l),o("box",5461330,0,.39,-.22,.52,.07,.11),t!=="scooter"&&o("box",11578016,.232,.36,-.54,.12,.12,.72);let f=new Tt(new on(.01,.01,.01));f.visible=!1,r.add(f);let d=[];for(let M of h){let g=new At;g.position.set(0,a,M),lt(g,"cylinder",2434601,0,0,0,a,.12,a).rotation.z=Math.PI/2,lt(g,"cylinder",8750213,0,0,0,a*.62,.14,a*.62).rotation.z=Math.PI/2,wi(g,as(g)),d.push(g),r.add(g);let _=M>0?t==="chopper"?-.62:-.21:.46;o("box",5988704,0,a+.22,M+(t==="chopper"&&M>0?-.18:0),.09,t==="chopper"&&M>0?.8:.49,.085).rotation.x=_}wi(r,as(r).filter(M=>M!==f));let p=new At,m=new Xt({color:16757276}),u={left:[],right:[]};for(let M of[-1,1])for(let[g,_,T]of[[.3,1.2,.47],[.19,.76,h[0]-.17]]){let R=new Tt(am,m);R.scale.set(.07,.05,.05),R.position.set(M*g,_,T),R.visible=!1,r.add(R),u[M>0?"left":"right"].push(R)}return n.add(s),lm({root:s,body:r,cabin:null,cracks:[],wheels:d,lamps:[],hood:f,bumpers:[],blinkers:u,signal:0,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,kind:"bike",model:t,shape:"bike",spec:i,color:e,handling:i.handling,rider:null,door:p,doorTime:0,wheelSpin:0,handlebar:l,wheelRadius:a,wheelbase:h[1]-h[0],halfWidth:.35,halfLength:1.1,seatHip:.6,flat:[!1,!1],fire:0,burning:!1,wrecked:!1,damageFront:0,damageRear:0})}var Kv=new $,$v=new un;function pm(n,e,t){let i=e.spec.seats?.[t]??e.spec.seats?.[e.spec.seats.length-1];if(!i)return;let[s,r]=i,[o,a]=e.spec.cabin.top,h=e.spec.open?r:Math.max(o+.07,Math.min(a-.03,r)),l=e.seatHip-.03,f=e.spec.open?n.look.height:Math.min(n.look.height,(e.spec.roof-l-.035)/1.1);n.root.scale.y=f,e.body.updateWorldMatrix(!0,!1),n.root.position.copy(e.body.localToWorld(Kv.set(s,l-.815*f,h))),n.root.quaternion.copy(e.body.getWorldQuaternion($v)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.rifle&&(n.rifle.visible=!1);let d=e.spec.roof-e.seatHip<1.05;n.body.position.set(0,0,0),n.body.rotation.set(0,0,0);for(let p=0;p<2;p++)n.legs[p].rotation.set(d?-1.52:-1.44,0,0),n.shins[p].rotation.set(d?1.04:1.26,0,0),t===0?(n.arms[p].rotation.set(-.62,0,(p?-1:1)*.18),n.forearms[p].rotation.set(-.85,0,0)):(n.arms[p].rotation.set(-.32,0,(p?-1:1)*.08),n.forearms[p].rotation.set(-1.05,0,0));t===0&&e.steeringWheel&&tM(n,e)}var jv=new $,Qv=new $(0,1,0);function eM(n,e,t=new $){let{spin:i}=n.steeringWheel,s=.4;return t.set(e*Math.sin(1.02)*.155,0,-Math.cos(1.02)*.155),t.applyAxisAngle(Qv,(s-1)*i.rotation.y),i.localToWorld(t)}function tM(n,e){e.root.updateMatrixWorld(!0),n.root.updateMatrixWorld(!0);for(let t=0;t<2;t++){let i=t===0?-1:1,s=n.body.worldToLocal(eM(e,i,jv));jr(n.arms[t],n.forearms[t],s,.23,.227,[i*.57,-1,.16])}}var rm=null,nM=new Kn(.28,.28),ba=new $,om=new $,Sa=new $;function iM(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="rgba(235,242,240,.9)",e.lineWidth=1.6,e.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;e.moveTo(64,64);for(let r=1;r<=4;r++)e.lineTo(64+Math.cos(s+Math.sin(r*3.1+i)*.12)*r*14,64+Math.sin(s+Math.cos(r*2.3+i)*.12)*r*14)}for(let i of[9,20,33]){e.moveTo(64+i,64);for(let s=1;s<=24;s++)e.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}e.stroke(),e.fillStyle="rgba(250,250,245,.95)",e.beginPath(),e.arc(64,64,3.2,0,Math.PI*2),e.fill();let t=new Zs(n);return t.colorSpace=xn,new Xt({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:zn})}function Wu(n,e){if(!n.cabin||!e)return;rm??=iM(),n.root.updateMatrixWorld(!0),Sa.set(e[0],e[1],e[2]),n.body.worldToLocal(Sa);let[t,i]=n.spec.cabin.top;om.set(0,(n.spec.belt+n.spec.roof)/2,(t+i)/2),ba.subVectors(Sa,om),ba.y*=.35,ba.normalize();let s=new Tt(nM,rm);s.position.copy(Sa).addScaledVector(ba,.015),s.lookAt(Sa.clone().add(ba)),s.rotation.z=Math.random()*Math.PI*2,s.renderOrder=3,n.body.add(s),n.cracks.push(s),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function mm(n){let{belt:e,roof:t,width:i,cabin:s}=n.spec,r=Math.min(s.base[0],s.top[0]),o=Math.max(s.base[1],s.top[1]);return{z:(r+o)/2,halfZ:(o-r)/2,y:(e+t)/2+.02,halfY:(t-e)/2,halfX:i/2-.1}}function pi(n,e,t=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,h=0,l=0,f=n.wheels.map(b=>{let{x:E,z:S}=b.position,x=Yn(n.x+E*s+S*i,n.z-E*i+S*s);return S>0?o+=x:a+=x,E<0?h+=x:l+=x,x}),d=(o+a)/n.wheels.length;n.root.rotation.y=n.angle;let p=n.flat??[],m=r?0:((p[0]||p[2]?1:0)-(p[1]||p[3]?1:0))*.05;n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),n.wheelbase??2.64);let u=r?n.integrity<=0?1.25:-t*Math.min(.53,Math.abs(n.speed)*.039):t*Math.min(.09,Math.abs(n.speed)*.004),M=r?0:Math.atan2((l-h)*.5,(n.halfWidth??.97)*2)+m;n.body.rotation.z+=(u+M-n.body.rotation.z)*(e>0?Math.min(1,e*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-e),n.door.rotation.y=(r?1:-1)*Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let g=n.wheelRadius??.408,_=r?n.body.rotation.z:0;if(n.root.position.set(n.x,d+(r?Math.abs(Math.sin(_))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=t*.22),n.wheelSpin=(n.wheelSpin+n.speed*e/g)%(Math.PI*2),n.wheels.forEach((b,E)=>{let S=p[E];r||(b.position.y=f[E]-d+g-(S?g*.28:0)),b.scale.set(1,S?.72:1,S?1.12:1),b.rotation.set(n.wheelSpin,b.position.z>0?t*(r?.22:.23):0,0,"YXZ")}),n.blinkers){let b=n.signal&&Math.floor(performance.now()/330)%2===0;for(let E of n.blinkers.left)E.visible=!!(b&&n.signal>0);for(let E of n.blinkers.right)E.visible=!!(b&&n.signal<0)}if(n.steeringWheel&&(n.steeringWheel.spin.rotation.y=-t*2.6),n.towArm){let{pivot:b,hang:E,cable:S,hook:x,length:w}=n.towArm;b.rotation.x=n.armAngle;let L=b.position.y+Math.sin(n.armAngle)*w,I=b.position.z-Math.cos(n.armAngle)*w;E.position.set(0,L,I);let P=Math.min(1.5,Math.max(.08,L-.5));S.scale.y=P,S.position.y=-P/2,x.position.y=-P-.05}n.towTilt&&(n.body.rotation.x+=n.towTilt);let T=100-n.integrity;n.hood.rotation.x=T*.0031+(n.damageFront>30?.18:0),n.hood.rotation.z=T*.0013;let R=n.hoodSize??(n.hoodSize=n.hood.scale.clone());n.hood.scale.set(R.x,R.y*(1+Math.min(.6,(n.damageFront??0)*.012)),R.z*(1-Math.min(.12,(n.damageFront??0)*.002)));for(let b of n.bumpers??[])b.state===1&&(b.mesh.rotation.x=b.end*.32,b.mesh.position.y=b.home.y-.12)}var sM=`
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
  }`,rM=`
  varying float vAlpha;
  varying vec3 vTint;
  void main(){
    float d=length(gl_PointCoord-.5);
    if(d>.5) discard;
    gl_FragColor=vec4(vTint,vAlpha*(1.-smoothstep(.18,.5,d)));
    #include <colorspace_fragment>
  }`;function gm(n,e,t){let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3),h=new Float32Array(e),l=new Float32Array(e),f=new Float32Array(e),d=new Float32Array(e),p=new Float32Array(e),m=new Float32Array(e),u=new Float32Array(e),M=new Qt;M.setAttribute("position",new ln(i,3)),M.setAttribute("tint",new ln(s,3)),M.setAttribute("size",new ln(r,1)),M.setAttribute("alpha",new ln(o,1));let g=new $n({vertexShader:sM,fragmentShader:rM,transparent:!0,depthWrite:!1,blending:t?ea:Ps,uniforms:{scale:{value:520}}}),_=new ko(M,g);_.frustumCulled=!1,_.visible=!1,_.renderOrder=4,n.add(_);let T=0;function R(S,x,w,L,I,P,k,O,F,te,H,W=0,se=0){let Q=T;T=(T+1)%e,i[Q*3]=S,i[Q*3+1]=x,i[Q*3+2]=w,a[Q*3]=L,a[Q*3+1]=I,a[Q*3+2]=P,s[Q*3]=H.r,s[Q*3+1]=H.g,s[Q*3+2]=H.b,h[Q]=k,l[Q]=k,f[Q]=O,d[Q]=F,p[Q]=te,m[Q]=W,u[Q]=se,r[Q]=O,o[Q]=te,_.visible=!0}function b(S){let x=!1;for(let w=0;w<e;w++){if(h[w]<=0){o[w]!==0&&(o[w]=0,r[w]=0,x=!0);continue}x=!0,h[w]-=S;let L=Math.exp(-u[w]*S);a[w*3]*=L,a[w*3+2]*=L,a[w*3+1]=a[w*3+1]*L+m[w]*S,i[w*3]+=a[w*3]*S,i[w*3+1]+=a[w*3+1]*S,i[w*3+2]+=a[w*3+2]*S,m[w]<0&&i[w*3+1]<.05&&(i[w*3+1]=.05,a[w*3+1]*=-.3);let I=1-Math.max(0,h[w])/l[w];r[w]=f[w]+(d[w]-f[w])*I,o[w]=p[w]*(1-I)*(I<.12?I/.12:1)}if(x)for(let w of["position","size","alpha","tint"])M.attributes[w].needsUpdate=!0;_.visible=x}function E(){h.fill(0),o.fill(0),r.fill(0),M.attributes.alpha.needsUpdate=!0,_.visible=!1}return{spawn:R,update:b,clear:E,material:g}}function xm(n){let e=gm(n,700,!1),t=gm(n,600,!0),i=new et,s=(f,d)=>f+Math.random()*(d-f),r=320,o=new Wn(new Kn(1,1),new Xt({color:1315860,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),r);o.frustumCulled=!1,o.renderOrder=1;let a=new It().makeScale(0,0,0);for(let f=0;f<r;f++)o.setMatrixAt(f,a);n.add(o);let h=0,l=new Jt;return{update(f){e.update(f),t.update(f)},clear(){e.clear(),t.clear();for(let f=0;f<r;f++)o.setMatrixAt(f,a);o.instanceMatrix.needsUpdate=!0},setScale(f){e.material.uniforms.scale.value=f,t.material.uniforms.scale.value=f},engineSmoke(f,d,p,m){i.setRGB(m?.16:.5,m?.15:.48,m?.14:.45),e.spawn(f+s(-.2,.2),d,p+s(-.2,.2),s(-.3,.3),s(.9,1.5),s(-.3,.3),s(1.6,2.4),.5,m?2.4:1.8,m?.5:.32,i,0,.6)},tireSmoke(f,d,p){i.setRGB(.78,.76,.72),e.spawn(f,d,p,s(-.6,.6),s(.3,.8),s(-.6,.6),s(.8,1.3),.4,1.6,.3,i,0,1.4)},sparks(f,d,p,m=12,u=4){for(let M=0;M<m;M++)i.setRGB(1,s(.55,.85),s(.15,.35)),t.spawn(f,d,p,s(-u,u),s(.5,u*.9),s(-u,u),s(.18,.45),.09,.03,1,i,-9.8,.4)},flame(f,d,p,m=1){i.setRGB(1,s(.35,.6),.08),t.spawn(f+s(-.35,.35)*m,d,p+s(-.35,.35)*m,s(-.2,.2),s(1.4,2.4),s(-.2,.2),s(.4,.75),.75*m,.2,.85,i,0,.8),Math.random()<.45&&(i.setRGB(.13,.12,.11),e.spawn(f,d+.6,p,s(-.3,.3),s(1.2,2),s(-.3,.3),s(1.8,2.8),.7,2.8,.45,i,0,.5))},blood(f,d,p){i.setRGB(.48,.015,.025);for(let m=0;m<7;m++)e.spawn(f,d,p,s(-1.4,1.4),s(.6,2),s(-1.4,1.4),.34,.065,.025,.94,i,-9,.2)},explosion(f,d,p){i.setRGB(1,.9,.6),t.spawn(f,d+.6,p,0,0,0,.28,1.5,9,1,i);for(let m=0;m<46;m++){let u=Math.random()*Math.PI*2,M=s(.2,1),g=s(3,10);i.setRGB(1,s(.4,.75),s(.05,.2)),t.spawn(f,d+.5,p,Math.cos(u)*g*(1-M*.5),M*g,Math.sin(u)*g*(1-M*.5),s(.35,.8),s(.6,1.4),.2,.95,i,-2,1.5)}for(let m=0;m<30;m++){let u=Math.random()*Math.PI*2,M=s(1,4);i.setRGB(.1,.09,.085),e.spawn(f,d+.8,p,Math.cos(u)*M,s(1.5,4),Math.sin(u)*M,s(2.2,3.6),1.2,4.5,.7,i,0,.9)}this.sparks(f,d+.5,p,40,9)},skid(f,d,p,m,u=.012){let M=Math.hypot(p-f,m-d);M<.05||(l.position.set((f+p)/2,u+.013,(d+m)/2),l.rotation.set(-Math.PI/2,0,0),l.rotateZ(Math.atan2(p-f,m-d)),l.scale.set(.2,M+.04,1),l.updateMatrix(),o.setMatrixAt(h,l.matrix),h=(h+1)%r,o.instanceMatrix.needsUpdate=!0)}}}function kc(n,e,t,i){let s=Math.hypot(e,i),r=Math.sin(n.angle)*e+Math.cos(n.angle)*i,o=Math.cos(n.angle)*e-Math.sin(n.angle)*i;n.ragdoll={vx:e,vy:t,vz:i,y:n.ragdoll?.y??0,t:0,rest:0,rising:0,spinX:(r>=0?1:-1)*(2.5+s*.55),spinZ:-o*.35,tiltX:0,tiltZ:0},n.pushX=0,n.pushZ=0}function Gc(n,e,t,i){let s=n.ragdoll;if(!s)return!1;s.t+=e;let r=n.model,o=s.y>.02||Math.abs(s.vy)>.4,a=n.x+s.vx*e,h=n.z+s.vz*e;if(i(a,n.z)?s.vx*=-.35:n.x=a,i(n.x,h)?s.vz*=-.35:n.z=h,s.vy-=9.8*e,s.y+=s.vy*e,s.y<=0){s.y=0,s.vy=Math.abs(s.vy)>2.2?-s.vy*.28:0;let d=Math.exp(-e*6);s.vx*=d,s.vz*=d,s.spinX*=Math.exp(-e*7),s.spinZ*=Math.exp(-e*7)}s.tiltX+=s.spinX*e,s.tiltZ+=s.spinZ*e;let l=!o&&Math.hypot(s.vx,s.vz)<.5;if(l){let d=Math.round(s.tiltX/Math.PI-.5)*Math.PI+Math.PI/2;s.tiltX+=(d-s.tiltX)*Math.min(1,e*8),s.tiltZ+=(0-s.tiltZ)*Math.min(1,e*6),s.rest+=e}let f=Math.sin(s.tiltX)>=0?1:-1;if(n.health>0&&s.rest>1.1){s.rising+=e/.65;let d=Math.min(1,s.rising),p=Math.sign(Math.sin(s.tiltX))||1;if(s.tiltX=p*Math.PI/2*(1-d),s.tiltZ*=1-d,d>=1)return n.ragdoll=null,r.root.rotation.set(0,n.angle,0),!1}if(r.root.rotation.set(s.tiltX,n.angle,s.tiltZ),r.root.position.set(n.x,t+s.y+Math.max(0,-Math.cos(s.tiltX)*Math.cos(s.tiltZ))*1.88+Math.hypot(Math.sin(s.tiltX),Math.sin(s.tiltZ))*.31,n.z),o||!l){let d=s.t*13;r.body.position.set(0,0,0),r.body.rotation.set(Math.sin(d*.7)*.25,0,Math.cos(d*.6)*.2),r.arms[0].rotation.set(-1.4+Math.sin(d)*1.1,0,-.6-Math.cos(d*.8)*.5),r.arms[1].rotation.set(-1.2+Math.cos(d*1.1)*1.1,0,.6+Math.sin(d*.9)*.5),r.forearms[0].rotation.set(-.4-Math.sin(d*1.3)*.5,0,0),r.forearms[1].rotation.set(-.4-Math.cos(d*1.2)*.5,0,0),r.legs[0].rotation.set(Math.sin(d*.9)*.9,0,-.2),r.legs[1].rotation.set(-Math.sin(d*.8)*.9,0,.2),r.shins[0].rotation.set(.4+Math.abs(Math.sin(d))*.6,0,0),r.shins[1].rotation.set(.4+Math.abs(Math.cos(d))*.6,0,0),r.pistol.visible=!1,r.rifle&&(r.rifle.visible=!1)}else _a(r,2,f);return r.shadow.visible=!1,!0}var Yu=2.05,oM=5.37,_m=n=>Math.min(Math.abs(n+57),Math.abs(n+19),Math.abs(n-19),Math.abs(n-57));function lr(n,e,t,i){let{width:s,length:r}=cs(i),o=Math.sin(t),a=Math.cos(t);for(let h of[-1,1])for(let l of[-1,1]){let f=n+o*(r-.26)*h+a*(s-.09)*l,d=e+a*(r-.26)*h-o*(s-.09)*l;if(Math.min(_m(f),_m(d))>oM||Math.max(Math.abs(f),Math.abs(d))>62.45)return!1}return!0}var Vc=7.15;function Mm(n,e=Yu){let t=[];return n.forEach((i,s)=>{let r=n[(s+n.length-1)%n.length],o=n[(s+1)%n.length],a=Math.sign(i[0]-r[0]),h=Math.sign(i[1]-r[1]),l=Math.sign(o[0]-i[0]),f=Math.sign(o[1]-i[1]),d={x:i[0]-h*e-a*Vc,z:i[1]+a*e-h*Vc},p={x:i[0]-f*e+l*Vc,z:i[1]+l*e+f*Vc},m=a===l&&h===f,u={x:i[0]-(m?h:h+f)*e,z:i[1]+(m?a:a+l)*e},M=Math.atan2(a,h),g=Math.atan2(l,f),_=Math.atan2(Math.sin(g-M),Math.cos(g-M)),T={x:i[0],z:i[1],id:i.join(",")};for(let R=0;R<=6;R++){let b=R/6,E=1-b;t.push({x:E*E*d.x+2*E*b*u.x+b*b*p.x,z:E*E*d.z+2*E*b*u.z+b*b*p.z,junction:T,curve:!m,angle:M,turn:_})}}),t}var us=(n,e,t,i)=>[[n,e],[n,i],[t,i],[t,e]],Ta=[us(-57,-57,57,57),us(-57,-19,19,57).reverse(),us(-19,-57,57,19),us(-19,-19,19,19).reverse(),us(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],us(-57,-57,57,57).reverse(),us(-19,-57,57,57).reverse()],aM=[us(-19,-57,19,57),us(-57,19,57,57).reverse()],bm=2.78;function lM(n){return n.flatMap((e,t)=>{let i=n[(t+1)%n.length],s=e[0]===i[0]?1:0,r=1-s,o=cn.filter(a=>a>Math.min(e[s],i[s])&&a<Math.max(e[s],i[s]));return i[s]<e[s]&&o.reverse(),[e,...o.map(a=>r===0?[e[0],a]:[a,e[1]])]})}var Zu=[...Ta,...aM].map(lM),Ju=Zu.map((n,e)=>Mm(n,e>=Ta.length?bm:Yu)),cM=[1,3,1,1,5,5,7,10,2,3];function so(n,e,t=0){let i=Ju[e],s=(cM[e]*7+t)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;oi(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+e%4*1.02,stuck:0,routeIndex:e,pass:null,nodes:Zu[e],parkTimer:28+(e*17+t*7)%70},n.signal=0,n.stolen=!1,n.abandoned=0}function Fs(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=t*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:_t(s*1.9,-1,1),throttle:_t((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function Aa(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=cs(n.shape??n.kind),a=n.kind==="bike",h=i;for(let l of e){if(l===n||ie(l,n)>20)continue;let f=l.x-n.x,d=l.z-n.z,p=f*s+d*r,m=Math.abs(f*r-d*s),u=cs(l.shape??l.kind,l.angle-n.angle);if(p<.2||m>o.width+u.width+.16)continue;let M=Math.max(0,p-o.length-u.length-(a?.39:.64)),g=Math.max(0,l.vx*s+l.vz*r);h=Math.min(h,g+M*.87)}for(let l of t){if(l.down>0||l.health<=0||l.seated||ie(l,n)>11)continue;let f=l.x-n.x,d=l.z-n.z,p=f*s+d*r,m=Math.abs(f*r-d*s);p>0&&m<o.width+.4&&(h=Math.min(h,Math.max(0,p-o.length-.9)*.94))}return h}function Sm(n,e,t,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...e.filter(l=>l!==n&&Math.hypot(l.vx,l.vz)<2).map(l=>({other:l,radius:1.05})),...t.filter(l=>l.down<=0&&l.health!==0&&!l.seated).map(l=>({other:l,radius:.43}))].find(({other:l,radius:f})=>{let d=l.x-n.x,p=l.z-n.z,m=d*s+p*r;return m>2.25&&m<13.4&&Math.abs(d*r-p*s)<f+1.05});if(!a)return null;let h=(l,f)=>{let d=l.x-n.x,p=l.z-n.z,m=d*s+p*r;return m>-3&&m<23&&Math.abs(d*r-p*s-f)<2.3};for(let l of[2.72,-2.72]){if(e.some(p=>p!==n&&p!==a.other&&h(p,l))||t.some(p=>p!==a.other&&p.down<=0&&h(p,l)))continue;let f=n.x+s*8+r*l,d=n.z+r*8-s*l;if(Ti(f,d,n.angle,i,n.shape??n.kind)&&Ti((f+n.x)*.5,(d+n.z)*.5,n.angle,i,n.shape??n.kind))return{x:f,z:d}}return null}function wm(n,e,t,i){let s=n.kind==="bike",r=cs(n.shape??n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),h=g=>({along:(g.x-n.x)*o+(g.z-n.z)*a,across:(g.x-n.x)*a-(g.z-n.z)*o}),l=[...e.filter(g=>g!==n).map(g=>({actor:g,...cs(g.shape??g.kind,g.angle-n.angle),moving:!0})),...t.filter(g=>g.health>0&&!g.seated&&!g.down).map(g=>({actor:g,width:.34,length:.34,moving:!1}))].map(g=>({...g,...h(g.actor)})),f=l.filter(({actor:g,along:_,across:T,width:R,length:b,moving:E})=>_>Math.max(s?1.2:2.4,r.length+b-.3)&&_<19&&Math.abs(T)<r.width+R+.16&&(!E||Math.hypot(g.vx,g.vz)<(s?8:6)));f.sort((g,_)=>g.along-_.along);let d=f[0];if(!d||d.along-r.length-d.length<(s?1.85:2.45))return null;let p=r.width+d.width+(s?.23:.38),m=s?Math.max(1.12,p):2.95,u=s?[m,-m,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[m,-m,3.45,-3.45],M=d.along+r.length+d.length+(s?3:4.1);for(let g of u){if(Math.abs(d.across-g)<p)continue;let _=r.length+(s?3.9:5.8);if(!l.every(x=>{if(x===d)return!0;let w=x.moving?Math.max(0,-x.actor.vx*o-x.actor.vz*a):0;return x.along<-r.length-x.length-.2||x.along>M+_+Math.min(10,w)||Math.abs(x.across-g)>r.width+x.width+(s?.25:.46)}))continue;let R=Math.max(s?2.4:3.8,Math.min(s?5:6.1,d.along-r.length+1.2)),b=Yn(n.x,n.z),E=Math.ceil(M/(s?.72:.92)),S=!0;for(let x=1;x<=E;x++){let w=x*M/E,L=g*Math.min(1,w/R),I=n.x+o*w+a*L,P=n.z+a*w-o*L,k=s?.27:.9;if(Math.abs(Yn(I+a*k,P-o*k)-b)>=.08||Math.abs(Yn(I-a*k,P+o*k)-b)>=.08||!Us({x:I,z:P,angle:n.angle,kind:n.kind,shape:n.shape},i,e,n)){S=!1;break}}if(S)return{x:n.x,z:n.z,sx:o,sz:a,offset:g,obstacle:d.actor,phase:"out",age:0,clearAfter:r.length+d.length+(s?.9:1.2)}}return null}function hM(n,e,t,i,s=[]){e.age+=i;let r=n.kind==="bike",o=cs(n.shape??n.kind),{sx:a,sz:h,offset:l}=e,f=(n.x-e.x)*a+(n.z-e.z)*h,d=(n.x-e.x)*h-(n.z-e.z)*a,p=(e.obstacle.x-e.x)*a+(e.obstacle.z-e.z)*h;if(e.age>(r?10:13)||e.phase==="merge"&&Math.abs(d)<.53)return null;e.phase==="out"&&Math.abs(d-l)<(r?.28:.55)&&(e.phase="pass"),e.phase!=="merge"&&f>p+e.clearAfter&&t.every(b=>{if(b===n)return!0;let E=cs(b.shape??b.kind,b.angle-Math.atan2(a,h));return Math.abs((b.x-e.x)*h-(b.z-e.z)*a)>o.width+E.width+.3||Math.abs((b.x-n.x)*a+(b.z-n.z)*h)>o.length+E.length+1.25})&&(e.phase="merge");let m=e.phase==="merge"?0:l,u=t.some(R=>{if(R===n||R===e.obstacle)return!1;let b=(R.x-n.x)*a+(R.z-n.z)*h,E=(R.x-e.x)*h-(R.z-e.z)*a,S=cs(R.shape??R.kind,R.angle-Math.atan2(a,h));return b>0&&b<o.length+S.length+2.7&&Math.abs(E-m)<o.width+S.width+.28})||s.some(R=>{if(R.health<=0||R.seated||R.down)return!1;let b=(R.x-n.x)*a+(R.z-n.z)*h,E=(R.x-e.x)*h-(R.z-e.z)*a;return b>0&&b<o.length+2.1&&Math.abs(E-m)<o.width+.45}),M=e.phase==="out"?r?2.3:4.4:r?4.8:7,g={x:e.x+a*(f+M)+h*m,z:e.z+h*(f+M)-a*m},_=e.phase==="out"?r?4.5:4.8:r?8.1:6.5,T=Fs(n,g,u?0:_);return u&&(T.throttle=0),T}function wa(n,e,t,i,s){return n.driver?.cityTraffic&&!lr(e.x,e.z,e.angle,n.shape??n.kind)?!1:Us(e,s,t,n)&&i.every(r=>r.health<=0||r.seated||r.down||!ls(e,r.x,r.z,.26))}function uM(n,e,t,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=t.filter(f=>f!==n&&ie(n,f)<29),h=null,l=-1/0;for(let f of[0,-.62,.62,-1,1]){let d={x:n.x,z:n.z,angle:n.angle,kind:n.kind,shape:n.shape},p=0;for(let _=0;_<(r?13:19)&&(d.angle-=f*.18*(r?.75:.56),d.x-=Math.sin(d.angle)*.18,d.z-=Math.cos(d.angle)*.18,!!wa(n,d,t,i,s));_++)p+=.18;if(p<(r?.9:1.35))continue;wa(n,d,t,i,s)||(d.x+=Math.sin(d.angle)*.18,d.z+=Math.cos(d.angle)*.18,d.angle+=f*.18*(r?.75:.56));let m={...d},u=0;for(let _=0;_<27;_++){let T=Math.atan2(e.x-m.x,e.z-m.z);if(m.angle=wn(m.angle,T,r?.13:.092),m.x+=Math.sin(m.angle)*.24,m.z+=Math.cos(m.angle)*.24,!wa(n,m,t,i,s))break;u+=.24}let M=r&&wm(d,a,i,s),g=u*.67+(ie(n,e)-ie(m,e))*.38+p*.31-Math.abs(f)*.12+(M?4.6:0);g>l&&(l=g,h={steer:f,pace:o,distance:Math.max(.7,p-.26),age:0,x:n.x,z:n.z})}return h}function Ku(n,e,t,i,s,r,o,a,h=!0){let l=n.kind==="bike",f=e.recoverPosition;e.recoverPosition={x:n.x,z:n.z};let d=f&&ie(f,n)>o*.57;if(e.recoverRetry=Math.max(0,(e.recoverRetry??0)-o),e.maneuver){let m=e.maneuver;m.age+=o;let u=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),M={x:n.x-Math.sin(n.angle)*u,z:n.z-Math.cos(n.angle)*u,angle:n.angle,kind:n.kind,shape:n.shape};return ie(n,m)>=m.distance||m.age>(l?2.4:2.8)||!wa(n,M,i,s,r)?(e.maneuver=null,e.recoverWait=0,e.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:m.steer,throttle:n.speed>-m.pace?_t((n.speed+m.pace)*-.64,-.54,-.05):0,brake:!1}}e.recoverWait=!h||d||ie(n,t)<1.2?0:(e.recoverWait??0)+o;let p=l?1.08:1.45;return e.recoverRetry>0||e.recoverWait<p||n.integrity<=0?a:(e.maneuver=uM(n,t,i,s,r),e.maneuver?(e.recoverWait=0,{steer:e.maneuver.steer,throttle:-.47,brake:!1}):(e.recoverRetry=.85,a))}var Tm=n=>Math.atan2(Math.sin(n),Math.cos(n)),ym=new Map,Xu=0,fM=(n,e)=>[n,e],vm=cn.flatMap((n,e)=>cn.map((t,i)=>({x:n,z:t,i:e,j:i}))),hs=(n,e)=>n+","+e;function dM(n){let e=n.driver,t=e?.nodes;if(!t)return null;let i=t.length,s=Math.floor(e.next/7),o=(e.next%7>=3?s+1:s)%i,a=t[o],h=t[(o+1)%i],l=t[(o+i-1)%i],f=t[(o+2)%i];ym.set(hs(...a)+">"+hs(...h),Xu+35);let d=E=>vm.find(S=>S.x===E[0]&&S.z===E[1]),p=d(a),m=d(h);if(!p||!m)return null;let u=new Map([[hs(p.x,p.z),null]]),M=[p],g=(E,S)=>(ym.get(hs(E.x,E.z)+">"+hs(S.x,S.z))??0)>Xu||S===m&&E.x===f[0]&&E.z===f[1]||E===p&&S.x===l[0]&&S.z===l[1];for(let E=0;E<M.length;E++){let S=M[E];if(S===m)break;for(let[x,w]of[[1,0],[-1,0],[0,1],[0,-1]]){let L=vm.find(I=>I.i===S.i+x&&I.j===S.j+w);!L||u.has(hs(L.x,L.z))||g(S,L)||(u.set(hs(L.x,L.z),S),M.push(L))}}if(!u.has(hs(m.x,m.z)))return null;let _=[];for(let E=m;E;E=u.get(hs(E.x,E.z)))_.unshift(fM(E.x,E.z));if(_.length<4)return null;let T=[];for(let E=2;E<i;E++)T.push(t[(o+E)%i]);let R=[..._,...T];return{route:Mm(R,e.routeIndex>=Ta.length?bm:Yu),nodes:R,index:0}}function qu(n){let e=n.driver;if(!e)return;let t=Math.sin(n.angle),i=Math.cos(n.angle),s=e.routeIndex>=Ta.length,r=null,o=1/0;Ju.forEach((a,h)=>{if(h>=Ta.length===s)for(let l=0;l<a.length;l++){let f=a[l],d=f.x-n.x,p=f.z-n.z,m=Math.hypot(d,p);if(m>42||d*t+p*i<.5)continue;let u=a[(l+1)%a.length],M=Math.hypot(u.x-f.x,u.z-f.z)>.05?Math.atan2(u.x-f.x,u.z-f.z):f.angle,g=Math.abs(Tm(M-n.angle)),_=m+g*8+(f.curve?2:0);_<o&&(o=_,r={route:a,index:l,routeIndex:h})}}),r&&(e.route=r.route,e.next=r.index,e.routeIndex=r.routeIndex,e.nodes=Zu[r.routeIndex],e.pass=null,e.stuck=0,e.recoverWait=0)}function pM(n,e,t,i,s,r,o=Math.PI-.32){if(e.t+=r,e.age+=r,e.turned+=Tm(n.angle-e.prev)*e.dir,e.prev=n.angle,e.turned>=o||e.step>4||e.age>16)return null;let h=e.step%2===1?-1:1,l={x:n.x+Math.sin(n.angle)*h*1.2,z:n.z+Math.cos(n.angle)*h*1.2,angle:n.angle,kind:n.kind,shape:n.shape},f=!wa(n,l,t,i,s),d=[1.45,2.35,o,o,o][e.step];if((e.turned>=d||f&&e.t>.35||e.t>3.2)&&(e.step++,e.t=0),e.step>4)return null;let p=e.step%2===1;return{steer:p?-e.dir:e.dir,throttle:_t(((p?-2.6:3.1)-n.speed)*.8,-.62,.62),brake:!1}}function mM(n,e,t,i,s){if(e.curve)return null;let r=Math.sin(n.angle),o=Math.cos(n.angle),a=Math.abs(o)>.97,h=Math.abs(r)>.97;if(!a&&!h)return null;let l=h?Math.sign(r):0,f=a?Math.sign(o):0,d=a?Math.round(-Math.cos(n.angle)):0,p=h?Math.round(Math.sin(n.angle)):0,m=b=>cn.reduce((E,S)=>Math.abs(E-b)<Math.abs(S-b)?E:S),u=a?m(n.x)+d*4.28:n.x+l*15,M=h?m(n.z)+p*4.28:n.z+f*15,g=a?M:u;if(Math.abs(g)>54||cn.some(b=>Math.abs(b-g)<12.5))return null;let _=Math.atan2(l,f),T={x:u,z:M,angle:_,hx:l,hz:f,rx:d,rz:p},R=n.shape??n.kind;return!lr(u,M,_,R)||!Ti(u,M,_,s,R)||t.some(b=>b!==n&&ie(b,T)<7.2)||i.some(b=>b.health>0&&ie(b,T)<3.2)?null:T}function gM(n,e,t,i,s,r,o){let a=e.parking;a.age+=r;let h=a.slot,l=t.vehicles,f={steer:0,throttle:0,brake:!0};if(a.phase==="approach"){n.signal=-1;let d=(h.x-n.x)*h.hx+(h.z-n.z)*h.hz,p=ie(n,h),m={x:h.x-h.hx*5.2-h.rx*1,z:h.z-h.hz*5.2-h.rz*1},u=d>6.8?m:h,M=Math.max(1.3,Math.min(5.2,p*.55+1)),g=Aa(n,l,i,M);if(f=Fs(n,u,g),d<-1||a.age>34)return e.parking=null,e.parkTimer=60,n.signal=0,qu(n),!1;p<.9&&Math.abs(n.speed)<1.6&&(a.phase="parked",a.age=0,a.wait=16+((n.x*7+n.z*3)%1+1)%1*26,n.signal=0)}else if(a.phase==="parked"){n.signal=0;let d=wn(n.angle,h.angle,r*.9);Ti(n.x,n.z,d,s,n.shape??n.kind)&&lr(n.x,n.z,d,n.shape??n.kind)&&(n.angle=d),f={steer:0,throttle:0,brake:!0};let p=h.hx,m=h.hz,u=l.some(M=>M!==n&&Math.hypot(M.vx,M.vz)>2&&(n.x-M.x)*p+(n.z-M.z)*m>0&&(n.x-M.x)*p+(n.z-M.z)*m<16&&Math.abs((M.x-n.x)*-m+(M.z-n.z)*p)<3.4);a.age>a.wait&&!u&&(a.phase="leave",a.age=0)}else{n.signal=1;let d={x:h.x+h.hx*6.5+h.rx*-2.3,z:h.z+h.hz*6.5+h.rz*-2.3},p=Aa(n,l,i,Math.min(4.6,2+a.age*1.4));if(f=Fs(n,d,p),ie(n,d)<2||a.age>9||(n.x-h.x)*h.hx+(n.z-h.z)*h.hz>5.5)return e.parking=null,e.parkTimer=70,n.signal=0,qu(n),Fn(n,r,f,s,l,o),!0}return Fn(n,r,f,s,l,o),!0}function Am(n,e,t,i,s,r,o){Xu+=s;for(let[h,l]of r)(!l.driver||l.integrity<=0||ie(l,l.driver.route[l.driver.next].junction)>11)&&r.delete(h);let a=0;for(let h of n)h.driver?.parking&&a++;for(let h of n){let l=h.driver;if(!l||h.burning||h.wrecked||h.integrity<=0){h.signal=0,h!==e.player&&Math.hypot(h.vx,h.vz)>.06?Fn(h,s,{throttle:0,steer:0,brake:!0},i,e.vehicles):h!==e.player&&(h.impact=Math.max(0,h.impact-s*21));continue}let{route:f}=l,d=e.keepToStreet?lr:null;if(l.cityTraffic=!!d,l.parking&&gM(h,l,e,t,i,s,d)){l.stuck=0;continue}l.passRetry=(l.passRetry??0)-s,l.detourRetry=Math.max(0,(l.detourRetry??0)-s);let p=h.kind==="bike";if(l.uturn){let G=pM(h,l.uturn,e.vehicles,t,i,s);if(h.signal=1,G){Fn(h,s,G,i,e.vehicles,d);continue}l.uturn=null,l.uturnRetry=40,h.signal=0,qu(h);continue}l.uturnRetry=Math.max(0,(l.uturnRetry??0)-s);let m=f[l.next],u=Math.sin(h.angle),M=Math.cos(h.angle);for(let G=0;!l.maneuver&&G<6;G++){let J=m.x-h.x,j=m.z-h.z;if(Math.hypot(J,j)>2.55&&(J*u+j*M>0||Math.hypot(J,j)>5))break;l.next=(l.next+1)%f.length,m=f[l.next]}let{junction:g}=m,_=ie(h,g),T=r.get(g.id);!T&&_<7.1&&r.set(g.id,h);let R=l.cruise*(p?1.13:1),b=l.style??(l.routeIndex%3===0?"cautious":l.routeIndex%3===1?"professional":"hurried");l.style=b;let E=b==="cautious"?.78:b==="hurried"?1.12:1,S=(m.curve&&_<12?Math.min(p?5.9:4.7,R):R)*E,x=T&&T!==h&&T.integrity>0&&ie(T,g)<7.1,w=T&&T!==h&&_<15&&(x||_>ie(T,g));w&&(S=Math.min(S,Math.max(0,_-7.4)*.96));let L=(g.x-h.x)*u+(g.z-h.z)*M,I=!1;if(o){let G=o.state(g.id,Math.abs(u)>Math.abs(M)?"x":"z"),J=7.6+(h.halfLength??2.4);if(G!=="green"&&L>J-.5&&L<J+40){let j=L-J;(G==="red"||j>h.speed*h.speed/11)&&(S=Math.min(S,Math.max(0,j)*.8),I=!0)}}let P=6.4,k=P+1.2+(h.halfLength??2.4);if(L>k-1.6&&L<k+22&&Math.max(Math.abs(u),Math.abs(M))>.93){let G=g.x-Math.sign(Math.round(u))*P,J=g.z-Math.sign(Math.round(M))*P;t.some(K=>K.health>0&&!K.seated&&!K.down&&(Math.abs(u)>Math.abs(M)?Math.abs(K.x-G)<2.3&&Math.abs(K.z-J)<5.7:Math.abs(K.z-J)<2.3&&Math.abs(K.x-G)<5.7))&&(S=Math.min(S,Math.max(0,L-k)*.7),I=!0)}let O=0;m.curve&&L>0&&_<26&&(O=Math.sign(m.turn));let F=Aa(h,e.vehicles,t,S),te=b==="hurried"?.86:b==="cautious"?.66:.78;l.passRetry<=0&&!l.pass&&!l.maneuver&&!w&&!I&&F<S*(p?.88:te)&&(!m.curve||_>(p?8:11))&&(l.pass=wm(h,e.vehicles,t,i),l.passRetry=l.pass?.age??(p?.1:.55+l.routeIndex%4*.13));let H=l.pass?hM(h,l.pass,e.vehicles,s,t):null;H?O=(l.pass.phase==="merge"?-1:1)*Math.sign(l.pass.offset):l.pass=null,h.signal=O;let W=H??Fs(h,m,F);!H&&F<.4&&(W.throttle=0);let se=h.x,Q=h.z;if(d&&l.stuck>5&&!I&&!w&&!l.maneuver&&l.detourRetry===0){l.detourRetry=6;let G=xM(h,m)??dM(h);G&&(l.route=G.route,l.next=G.index,G.nodes&&(l.nodes=G.nodes),l.pass=null,l.recoverWait=0,l.stuck=0)}if(d&&!p&&l.stuck>8.5&&!I&&!w&&!l.maneuver&&!l.uturn&&l.uturnRetry<=0&&(l.uturn={prev:h.angle,turned:0,dir:1,t:0,age:0,step:0}),l.parkTimer-=s,l.parkTimer<=0&&d&&!p){if(l.parkWish=(l.parkWish??30)-s,l.parkLook=(l.parkLook??0)-s,l.parkWish<=0)l.parkTimer=60+((h.x*13+h.z*7)%1+1)%1*80,l.parkWish=null,l.parkLook=0;else if(l.parkLook<=0&&(l.parkLook=.5,a<2&&!l.pass&&!l.maneuver&&!I&&!w&&!h.lamps?.length)){let G=mM(h,m,e.vehicles,t,i);if(G){l.parking={slot:G,phase:"approach",age:0},l.parkWish=null,a++;continue}}}let B=Ku(h,l,m,e.vehicles,t,i,s,W,!I&&!w);l.maneuver&&(l.pass=null),Fn(h,s,B,i,e.vehicles,d),l.stuck=!I&&Math.hypot(h.x-se,h.z-Q)<s*.62?l.stuck+s:I?l.stuck:Math.max(0,l.stuck-s*2)}}function xM(n,e){if(ie(n,e.junction)>15)return null;let t=Math.sin(n.angle),i=Math.cos(n.angle),s=null,r=1/0;for(let o of Ju)for(let a=0;a<o.length;a++){let h=o[a],l=o[(a+3)%o.length];if(h.junction.id!==e.junction.id||ie(l,e)<4)continue;let f=h.x-n.x,d=h.z-n.z,p=Math.hypot(f,d);if(p<3||p>13||f*t+d*i<0||ie(l,e)<ie(h,e))continue;let m=p+Math.abs(f*i-d*t)*1.5;m<r&&(r=m,s={route:o,index:a})}return s}function Hc(n,e,t,i){return ie(n,t)>13&&Ti(n.x,n.z,n.angle,i,n.shape??n.kind)&&e.every(s=>ie(s,n)>5.2)}var _M=[];function $u(n,e,t,i,s){let r=-1/0,o=1/0,a=-1,h=-1;for(let l=0;l<3;l++){let f=n[l],d=e[l],p=t[l],m=t[l+3];if(Math.abs(d)<1e-5){if(f<p||f>m)return 1/0;continue}let u=1/d,M=(d>0?p-f:m-f)*u,g=(d>0?m-f:p-f)*u;if(M>r&&(r=M,a=l*2+ +(d<0)),g<o&&(o=g,h=l*2+ +(d>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=h,Math.max(0,o))}function yM(n,e,t,i){if(!i)return e[1]<-1e-5&&n[1]>=0?-n[1]/e[1]:1/0;if(e[1]>1e-5)return 1/0;let s=o=>n[1]+e[1]*o-i(n[0]+e[0]*o,n[2]+e[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,t/12);if(r<1e-5)return 1/0;for(let o=0;o<t;o+=r){let a=o,h=Math.min(o+r,t);if(!(s(h)>0)){for(let l=0;l<10;l++){let f=(a+h)*.5;s(f)>0?a=f:h=f}return h}}return 1/0}function Em(n,e,t,i,s,r){let o=s,a=null,h=null,l=null,f=-1,d=0,p={face:-1};for(let u of t){if(u.off)continue;let M=u.bounds??[u.x-u.w*.5,u.y0??u.base??0,u.z-u.d*.5,u.x+u.w*.5,u.h,u.z+u.d*.5],g=$u(n,e,M,o,p);g>=o||(o=g,h=u,l="solid",f=p.face)}let m=yM(n,e,o,r);m<o&&(o=m,h=null,l="ground",f=3);for(let u of i){let M,g=u.oriented;if(g){let{center:_,half:T,angle:R}=g,b=n[0]-_[0],E=n[1]-_[1],S=n[2]-_[2],x=Math.sin(R),w=Math.cos(R),L=[w*b-x*S,E,x*b+w*S],I=[w*e[0]-x*e[2],e[1],x*e[0]+w*e[2]];M=$u(L,I,[-T[0],-T[1],-T[2],T[0],T[1],T[2]],o,p)}else if(u.bounds)M=$u(n,e,u.bounds,o,p);else continue;M>=o||(o=M,a=u,h=null,l="target",f=p.face,d=g?.angle??0)}return{distance:o,hit:a,solid:h,surface:l,face:f,rotation:d}}function Ea(n,e,t,i,s=52){let{distance:r,hit:o}=Em(n,e,t,i,s,null);return{distance:r,hit:o}}function Wc(n,e,t,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:h,surface:l,face:f,rotation:d}=Em(n,e,t,i,s,r),p=n.map((u,M)=>u+e[M]*o),m=null;if(f!==-1&&(m=[0,0,0],m[Math.floor(f/2)]=f%2?1:-1,d)){let[u,M,g]=m,_=Math.sin(d),T=Math.cos(d);m=[T*u+_*g,M,-_*u+T*g]}return{distance:o,hit:a,point:p,normal:m,solid:h,surface:l}}function Cm(n,e,t,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...e),h=a>1e-5?e.map(u=>u/a):[0,0,1],l=Wc(n,h,i,s,r,{ground:o}),f=l.point.map((u,M)=>u-t[M]),d=f.reduce((u,M,g)=>u+M*h[g],0),p=Math.hypot(...f),m=d>.025&&p>1e-5?f.map(u=>u/p):h;return{direction:m,sight:l,impact:Wc(t,m,i,s,r,{ground:o})}}function ro(n,e,t){let i=e.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return Ea(n,r,t,_M,s).distance>=s-.01}function oo(n,e,t,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let h=e.x-n.x,l=e.z-n.z,f=Math.hypot(h,l),d=(n.ground??0)+r,p=(e.ground??0)+o;if(Math.hypot(f,p-d)>s)return!1;if(f>1e-5){let m=n.angle??0;if((Math.sin(m)*h+Math.cos(m)*l)/f<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(p-d,f)+(n.pitch??0))>a*.5?!1:ro([n.x,d,n.z],[e.x,p,e.z],t)}function Rm(n,e,t,i){let s=null,r=1.86;for(let o of e){if(o.down>0)continue;let a=o.x-n.x,h=o.z-n.z,l=Math.hypot(a,h),f=Math.sin(n.angle)*a+Math.cos(n.angle)*h;l>=r||f<l*.36||!ro([n.x,t+1,n.z],[o.x,t+1,o.z],i)||(s=o,r=l)}return s}var ao=44,cr=12,ju=new $(0,1,0),vM=new $(0,0,1),Os=new un,fs=new It,Gi=new $,Xc=new $,qc=new $,MM=new at;function bM(){let e=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),h=Math.hypot(r,o),l=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,f=h<.35+Math.sin(a*4)*.06,d=(s*239+i*167)%19/19,p=f?9+d*27:101+d*64,m=f?.99:Math.min(.84,Math.max(0,(l-h)*3.6))*(.51+d*.49),u=(i*32+s)*4;e[u]=p,e[u+1]=p*.92,e[u+2]=p*.81,e[u+3]=Math.round(m*255)}let t=new Ys(e,32,32,ri);return t.colorSpace=xn,t.magFilter=Sn,t.minFilter=Sn,t.needsUpdate=!0,t}function Yc(n,e,t,i){let s=new Wn(e,t,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(wc),n.add(s),s}function SM(n){let e=new Kn(1,1),t=new ws(new Float32Array(ao),1);t.setUsage(wc),e.setAttribute("markAlpha",t);let i=new Xt({map:bM(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=Yc(n,e,i,ao);return s.renderOrder=3,{mesh:s,fade:t}}function Im(n){let{mesh:e,fade:t}=SM(n),i=new Xt({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=Yc(n,new Xn(.015,.015,1,5),i,cr),r=new Xt({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=Yc(n,new ts(1,0),r,cr),a=new Xt({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),h=Yc(n,new ns(1),a,cr),l=Array.from({length:cr},()=>({age:1/0,distance:0,point:new $,start:new $,direction:new $,surface:null})),f=Array.from({length:ao},()=>({time:0,life:0,point:new $,normal:new $,attachment:null,radius:0})),d=0,p=0,m=new It().makeScale(0,0,0),u=new et(16768142),M=new et(16754545);function g(){for(let R=0;R<cr;R++)l[R].age=1/0,s.setMatrixAt(R,m),o.setMatrixAt(R,m),h.setMatrixAt(R,m);for(let R=0;R<ao;R++)f[R].time=0,f[R].attachment=null,e.setMatrixAt(R,m),t.setX(R,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=h.instanceMatrix.needsUpdate=e.instanceMatrix.needsUpdate=t.needsUpdate=!0,d=p=0}g();function _(R,b,{enemy:E=!1,mark:S=b.surface==="solid"||b.surface==="ground",attach:x=null}={}){let w=l[d],L=d;if(d=(d+1)%cr,w.start.fromArray(R),w.point.fromArray(b.point),w.distance=w.start.distanceTo(w.point),w.direction.subVectors(w.point,w.start).normalize(),w.surface=b.surface,w.age=0,s.setColorAt(L,E?M:u),s.instanceColor.needsUpdate=!0,S&&b.normal&&b.surface){let I=f[p];p=(p+1)%ao,I.life=(b.surface==="ground"?8:13)+Math.random()*4,I.time=I.life,I.point.copy(w.point),I.normal.fromArray(b.normal).normalize(),I.attachment=x,I.radius=.053+Math.random()*.031,x&&(x.updateWorldMatrix(!0,!1),x.worldToLocal(I.point),I.normal.transformDirection(fs.copy(x.matrixWorld).invert()))}}function T(R){let b=!1,E=!1;for(let S=0;S<cr;S++){let x=l[S];if(!Number.isFinite(x.age))continue;b=!0,x.age+=R;let w=234,L=Math.min(x.distance,x.age*w+1.7),I=Math.max(0,x.age*w-3.1),P=L-I;if(P>.018){Gi.copy(x.start).addScaledVector(x.direction,(L+I)*.5),Os.setFromUnitVectors(ju,x.direction);let O=Math.min(1,P/1.3);fs.compose(Gi,Os,Xc.set(O,P,O)),s.setMatrixAt(S,fs)}else s.setMatrixAt(S,m);if(x.age<.071){let O=Math.max(.025,.084-x.age*.78);Os.setFromUnitVectors(ju,x.direction),Gi.copy(x.start).addScaledVector(x.direction,.052),fs.compose(Gi,Os,Xc.set(O,O*2.2,O)),o.setMatrixAt(S,fs)}else o.setMatrixAt(S,m);let k=x.age-x.distance/w;if(x.surface&&k>=0&&k<.13){let O=Math.max(.006,.041-k*.27);Gi.copy(x.point).addScaledVector(x.direction,-(.039+k*.38)),Os.setFromUnitVectors(ju,x.direction),fs.compose(Gi,Os,Xc.set(O,O*2.14,O)),h.setMatrixAt(S,fs)}else h.setMatrixAt(S,m);x.age>x.distance/w+.14&&(x.age=1/0)}for(let S=0;S<ao;S++){let x=f[S];if(!(x.time<=0)){if(E=!0,x.time-=R,x.time<=0||x.attachment&&!x.attachment.visible){x.time=0,x.attachment=null,e.setMatrixAt(S,m),t.setX(S,0);continue}Gi.copy(x.point),qc.copy(x.normal),x.attachment&&(x.attachment.updateWorldMatrix(!0,!1),Gi.applyMatrix4(x.attachment.matrixWorld),qc.applyNormalMatrix(MM.getNormalMatrix(x.attachment.matrixWorld))),Gi.addScaledVector(qc,.014),Os.setFromUnitVectors(vM,qc),fs.compose(Gi,Os,Xc.set(x.radius,x.radius,x.radius)),e.setMatrixAt(S,fs),t.setX(S,Math.min(1,x.time*.57))}}b&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=h.instanceMatrix.needsUpdate=!0),E&&(e.instanceMatrix.needsUpdate=t.needsUpdate=!0)}return{emit:_,update:T,reset:g}}var lo=.42,hr=.145,Pm=n=>.94*n,Qu=n=>n*n*(3-2*n),Ca=(n,e,t)=>n+(e-n)*t;function wM(n){return n<.065?-.32*Qu(n/.065):n<hr?Ca(-.32,1,Qu((n-.065)/(hr-.065))):n<.182?Ca(1,.89,(n-hr)/(.182-hr)):.89*(1-Qu((n-.182)/(lo-.182)))}function ef(n,{aim:e=!1,punch:t=0,pitch:i=0,hand:s=0,walking:r=!1}={}){if(!e&&t<=0)return;let o=n.arms[s],a=n.arms[1-s],h=n.forearms[s],l=n.forearms[1-s],f=s===0?1:-1,d=t>0?wM(_t(lo-t,0,lo)):0,p=Math.max(0,d),m=Math.max(0,-d),u=_t(i,-.64,.53)*.62,M=.07+p*.2-m*.08;n.body.rotation.set(M,f*(.12+p*.46-m*.52),f*(-.02-p*.05)),n.body.position.y+=Pm(1-Math.cos(M))-.04-p*.03,n.body.position.z+=Pm(-Math.sin(M))+p*.12;let[g,_]=n.legs,[T,R]=n.shins,b=s===0?g:_,E=s===0?_:g,S=s===0?T:R,x=s===0?R:T;r||(E.rotation.set(-.32-p*.08,0,0),x.rotation.set(.34,0,0),b.rotation.set(.26+p*.16,0,0),S.rotation.set(.18-p*.1,0,0)),o.rotation.set(Ca(-.86,-1.66+u,p)+m*.7,f*(.1-p*.08),f*Ca(.24,-.04,p)-f*m*.25),h.rotation.set(Ca(-1.62,-.04,p)-m*.2,0,f*(.1-p*.1)),a.rotation.set(-.98+p*.06,-f*.12,-f*.22),l.rotation.set(-1.78,0,-f*.08),n.pistol.visible=!1}function qe(n){return document.getElementById(n)}function Lm(n,e){let t=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=qe("stick"),h=qe("nub"),l=qe("look"),f=qe("game"),d=qe("view"),p=-1,m=-1,u=[],g=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",_=O=>{g=O,qe("touch").hidden=O!=="touch",f.classList.toggle("touching",O==="touch")};_(g);let T=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","KeyB","Digit1","Digit2","Digit3","Digit4","Escape"]),R="",b=0,E=!1;window.addEventListener("keydown",O=>{if(!(!T.has(O.code)||O.target instanceof HTMLSelectElement&&!e())){if((e()||O.code==="Escape")&&O.preventDefault(),O.code==="Escape"){O.repeat||n();return}if(e()&&(_("keyboard"),t.add(O.code),!O.repeat)){O.code==="KeyE"&&i.add("interact"),O.code==="KeyF"&&i.add("fire"),O.code==="KeyR"&&i.add("punch"),O.code==="KeyG"&&i.add("recruit"),O.code==="KeyV"&&i.add("weapon"),O.code==="Space"&&i.add("jump"),O.code==="KeyB"&&i.add("sell");let F={Digit1:"follow",Digit2:"wait",Digit3:"attack"};F[O.code]&&(R=F[O.code])}}}),window.addEventListener("keyup",O=>{O.code==="Digit4"&&t.has("Digit4")&&!E&&(R="dealer"),t.delete(O.code)});function S(){t.clear(),b=0,E=!1,R="",i.clear(),s.clear(),o.x=0,o.y=0,h.style.transform="",p=-1,m=-1,r.x=0,r.y=0,r.aim=!1,qe("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",S),d.addEventListener("contextmenu",O=>O.preventDefault()),d.addEventListener("wheel",O=>{!e()||!O.deltaY||(O.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(x),x=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let x=0;d.addEventListener("pointerdown",O=>{e()&&O.pointerType==="touch"&&_("touch")}),window.addEventListener("mousedown",O=>{if(!(!e()||document.pointerLockElement!==d&&(!(O.target instanceof Node)||!d.contains(O.target)))){if(O.button===0&&document.pointerLockElement!==d&&d.requestPointerLock){let F=d.requestPointerLock();F&&F.catch(()=>{})}_("keyboard"),O.button===0&&(i.add("fire"),s.add("mouseFire")),O.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",O=>{O.button===0&&s.delete("mouseFire"),O.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",O=>{!e()||g!=="keyboard"||O.pointerType==="touch"||(document.pointerLockElement===d||O.target===d||d.contains(O.target))&&(r.x+=O.movementX,r.y+=O.movementY)});function w(O){let F=a.getBoundingClientRect(),te=O.clientX-F.left-F.width/2,H=O.clientY-F.top-F.height/2,W=F.width*.37,se=Math.max(W,Math.hypot(te,H));o.x=te/se,o.y=H/se,h.style.transform="translate("+o.x*W+"px,"+o.y*W+"px)"}a.addEventListener("pointerdown",O=>{p===-1&&(_("touch"),p=O.pointerId,a.setPointerCapture(O.pointerId),w(O))}),a.addEventListener("pointermove",O=>{O.pointerId===p&&w(O)}),a.addEventListener("lostpointercapture",O=>{O.pointerId===p&&(p=-1,o.x=0,o.y=0,h.style.transform="")});let L=0,I=0;l.addEventListener("pointerdown",O=>{m===-1&&(m=O.pointerId,L=O.clientX,I=O.clientY,l.setPointerCapture(O.pointerId))}),l.addEventListener("pointermove",O=>{O.pointerId===m&&(r.x+=(O.clientX-L)*1.45,r.y+=(O.clientY-I)*1.45,L=O.clientX,I=O.clientY)}),l.addEventListener("lostpointercapture",O=>{O.pointerId===m&&(m=-1)});let P=qe("gang-menu");for(let O of P.querySelectorAll("button"))O.addEventListener("pointerdown",F=>{F.preventDefault(),R=O.dataset.order??"",P.hidden=!0,qe("gang").setAttribute("aria-expanded","false")});qe("gang").addEventListener("pointerdown",O=>{O.preventDefault(),_("touch"),P.hidden=!P.hidden,qe("gang").setAttribute("aria-expanded",String(!P.hidden))});for(let O of["interact","fire","aim","sprint","punch","jump","weapon","recruit","sell"]){let F=qe(O);F.addEventListener("pointerdown",te=>{te.preventDefault(),_("touch"),F.setPointerCapture(te.pointerId),O==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),F.setAttribute("aria-pressed",String(s.has("aim")))):O==="sprint"||O==="fire"?(s.add(O),O==="fire"&&i.add(O)):i.add(O)}),(O==="sprint"||O==="fire")&&F.addEventListener("lostpointercapture",()=>s.delete(O))}let k=!1;return{clear:S,read(O,F){k!==O&&(s.delete("aim"),qe("aim").setAttribute("aria-pressed","false"),k=O);let te=Array.from(navigator.getGamepads?.()??[]).find(le=>le?.connected&&le.mapping==="standard"),H=te?.buttons.map(le=>le.pressed||le.value>.45)??[],W=le=>H[le]&&!u[le],se=Array.from({length:4},(le,Y)=>Lp(te?.axes[Y]));(H.some(Boolean)||se.some(le=>Math.abs(le)>.1))&&_("pad"),(W(9)||!e()&&W(0))&&n();let B=Number(t.has("KeyD")||t.has("ArrowRight"))-Number(t.has("KeyA")||t.has("ArrowLeft")),G=Number(t.has("KeyW")||t.has("ArrowUp"))-Number(t.has("KeyS")||t.has("ArrowDown")),J=(te?.buttons[7]?.value??0)-(te?.buttons[6]?.value??0),j=t.has("Digit4")||!!H[5];j&&!E?(b+=F,b>=.55&&(R="undealer",E=!0)):j||(u[5]&&!E&&(R="dealer"),b=0,E=!1);let K={x:_t(B+o.x+se[0],-1,1),y:_t(G-o.y+(O&&Math.abs(J)>.05?J:-se[1]),-1,1),lookX:_t(r.x,-140,140)*.0032+se[2]*F*2.45,lookY:_t(r.y,-140,140)*.0028+se[3]*F*1.8,aim:!O&&(r.aim||t.has("KeyQ")||s.has("aim")||!!H[6]),run:s.has("sprint")||t.has("ShiftLeft")||t.has("ShiftRight")||!!H[0],brake:t.has("Space")||s.has("sprint")||!!H[2],interact:i.has("interact")||W(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!O&&!!H[7],punch:i.has("punch")||W(1),recruit:i.has("recruit")||W(12),weapon:i.has("weapon")||W(15),jump:i.has("jump")||W(2),map:W(8),confirm:W(0),cancel:W(1),navUp:W(12),navDown:W(13),sell:i.has("sell")||W(13),order:R||(W(14)?"toggle":"")||(W(4)?"attack":""),mode:g};return R="",u=H,r.x=0,r.y=0,i.clear(),K}}}function Dm(n){return n?.kind==="bike"?"bike":/utilit/i.test(n?.spec?.category??"")?"utility":"car"}function Nm(){let n,e,t,i,s="car",r=!0;function o(){if(r)try{n||(n=new AudioContext,e=n.createGain(),e.gain.value=.46,e.connect(n.destination),t=n.createOscillator(),t.type="triangle",i=n.createGain(),i.gain.value=0,t.connect(i).connect(e),t.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{r=!1}}function a(l,f,d,p,m="sine",u=0){if(!n||!r||n.state!=="running")return;let M=n.currentTime+u,g=n.createOscillator(),_=n.createGain();g.type=m,g.frequency.setValueAtTime(l,M),g.frequency.exponentialRampToValueAtTime(f,M+d),_.gain.setValueAtTime(p,M),_.gain.exponentialRampToValueAtTime(.001,M+d),g.connect(_).connect(e),g.start(M),g.stop(M+d)}function h(l,f,d){if(!n||!r||n.state!=="running")return;let p=n.createBuffer(1,Math.floor(n.sampleRate*l),n.sampleRate),m=p.getChannelData(0);for(let _=0;_<m.length;_++)m[_]=(Math.random()*2-1)*Math.pow(1-_/m.length,2.2);let u=n.createBufferSource();u.buffer=p;let M=n.createBiquadFilter();M.type="lowpass",M.frequency.value=d;let g=n.createGain();g.gain.value=f,u.connect(M).connect(g).connect(e),u.start()}return{start:o,explosion(){h(1.4,1.1,620),a(70,24,1.1,.7,"sawtooth")},rifle(){h(.12,.55,2400),a(240,60,.09,.4,"square")},sale(){a(880,1320,.12,.18),a(1320,1760,.16,.14,"sine",.08)},get enabled(){return r},toggle(){return r=!r,e&&(e.gain.value=r?.46:0),o(),r},motor(l,f,d="car"){if(!n)return;s=d;let p=s==="bike"?7.2:s==="utility"?4.1:5;t.frequency.setTargetAtTime((s==="bike"?48:30)+Math.abs(l)*p,n.currentTime,.075),t.type=s==="bike"?"sawtooth":s==="utility"?"square":"triangle",i.gain.setTargetAtTime(f?.13:0,n.currentTime,.11)},step(){a(79,47,.085,.12,"triangle")},shot(){a(194,44,.15,.59,"square")},punch(l){a(l?109:187,l?39:73,l?.125:.084,l?.45:.13,"triangle")},crash(){a(98,29,.24,.34,"sawtooth")},bell(){a(442,521,.2,.25),a(660,840,.29,.2,"sine",.11)},click(){a(1500,900,.03,.12,"square")},flush(){h(1.3,.38,1800)},siren(){a(440,660,.35,.15),a(660,400,.36,.15,"sine",.33)}}}function tf(n){return n>1.53?54:n>.92?32:n>.63?24:15}function nf(n){return Math.round(_t(Math.max(0,n-2.4)**2*.24,0,86))}function Zc(n){return n>=36?3:n>=20?2:n>0?1:0}var Kc=5.37,$c=n=>cn.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,cn[0]),sf=(n,e)=>Math.abs(n-$c(n))<Kc||Math.abs(e-$c(e))<Kc,zm=[-50.6,-25.4,-12.6,12.6,25.4,50.6],rf=(n,e)=>Math.abs(n-$c(n))<Kc&&zm.some(t=>Math.abs(e-t)<2.1)||Math.abs(e-$c(e))<Kc&&zm.some(t=>Math.abs(n-t)<2.1);function Um(n,e){if(sf(n.x,n.z)&&!rf(n.x,n.z))return!1;let t=Math.max(2,Math.ceil(Math.hypot(e.x-n.x,e.z-n.z)/.55));for(let i=1;i<=t;i++){let s=i/t,r=n.x+(e.x-n.x)*s,o=n.z+(e.z-n.z)*s;if(sf(r,o)&&!rf(r,o))return!0}return!1}function Fm(n){let s=62.474999999999994,r=Array.from({length:3350},(g,_)=>({x:_%67*2.55-s,z:Math.floor(_/67)*2.55-s})),o=r.map(g=>Rn(g.x,g.z,.38,n)),a=r.map(g=>sf(g.x,g.z)),h=r.map(g=>rf(g.x,g.z)),l=(g,_)=>!a[_]||h[_]||a[g]&&!h[g],f=r.map((g,_)=>o[_]?[_>=67?_-67:-1,_<3283?_+67:-1,_%67?_-1:-1,_%67<66?_+1:-1].filter(R=>R>=0&&o[R]&&l(_,R)&&Rn((g.x+r[R].x)*.5,(g.z+r[R].z)*.5,.38,n)):[]),d=(g,_)=>{let T=Math.max(1,Math.ceil(ie(g,_)/.42));for(let R=1;R<=T;R++){let b=R/T;if(!Rn(g.x+(_.x-g.x)*b,g.z+(_.z-g.z)*b,.31,n))return!1}return!0},p=g=>{let _=Math.round((g.x+s)/2.55),T=Math.round((g.z+s)/2.55),R=[];for(let b=Math.max(0,T-4);b<=Math.min(49,T+4);b++)for(let E=Math.max(0,_-4);E<=Math.min(66,_+4);E++){let S=b*67+E;if(!o[S])continue;let x=r[S].x-g.x,w=r[S].z-g.z;R.push({index:S,d:x*x+w*w})}R.sort((b,E)=>b.d-E.d);for(let{index:b}of R.slice(0,12))if(d(g,r[b]))return b;return-1},m=0,u=-1,M=(g,_)=>{let T=p(g),R=p(_);if(T<0||R<0)return[];if(T===R)return[r[T]];let b=new Int32Array(r.length).fill(-1),E=[T];b[T]=T;for(let S=0;S<E.length;S++){let x=E[S];if(x===R){let w=[];for(let L=R;L!==T;L=b[L])w.push(r[L]);return w.push(r[T]),w.reverse()}for(let w of f[x])b[w]===-1&&(b[w]=x,E.push(w))}return[]};return(g,_,T,R)=>{g.repath=(g.repath??0)-R;let b=_.x-g.x,E=_.z-g.z,S=Math.hypot(b,E);if(S<.16)return 0;let x=S<12&&d(g,_)&&!Um(g,_);x&&(g.route=[]);let w=Math.floor(performance.now()/16);for(w!==u&&(u=w,m=3),!x&&g.repath<=0&&(m>0?(m--,g.route=M(g,_),g.repath=1.1+Math.random()*.4):g.repath=.05);g.route?.length&&(ie(g,g.route[0])<.7||g.route.length>1&&ie(g,g.route[1])<4&&d(g,g.route[1])&&!Um(g,g.route[1]));)g.route.shift();let L=x?_:g.route?.[0]??_,I=Math.atan2(L.x-g.x,L.z-g.z),P=Math.min(T*R,ie(g,L));g.angle=wn(g.angle,I,R*8.5);let k=pa(g,g.x+Math.sin(I)*P,g.z+Math.cos(I)*P,.24,n);return k||(g.repath=Math.min(g.repath,.18)),k?T:0}}var Jc=n=>cn.reduce((e,t)=>Math.abs(n-t)<Math.abs(n-e)?t:e,cn[0]);function jc(n,e,t,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let M=e.z<o.z;n.stop={x:M?20.9:17.2,z:o.z+(M?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&ie(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&ie(o,n.stop)<2.6){let M=Jc(o.x),g=Jc(o.z),_=Jc(e.x),T=Jc(e.z);Math.abs(o.x-M)>3&&Math.abs(o.z-g)>3?n.stop={x:M,z:o.z}:Math.abs(o.x-M)>2.4&&Math.abs(o.z-g)<2.4?n.stop={x:_,z:g}:Math.abs(o.z-g)>2.4?n.stop={x:M,z:T}:_!==M?n.stop={x:M+Math.sign(_-M)*38,z:g}:T!==g?n.stop={x:M,z:g+Math.sign(T-g)*38}:Math.abs(e.x-o.x)>Math.abs(e.z-o.z)?n.stop={x:e.x,z:T}:n.stop={x:_,z:e.z}}let a=ie(o,e),h=n.departing?6:14,l=Math.min(h,a*.85,Math.max(3,ie(o,n.stop)*1.85)),f=Aa(o,i,s,l),d=!n.departing&&f<2.5?Sm(o,i,s,t):null,p=Fs(o,d??n.stop,d?4.4:f),m=Ku(o,n,n.stop,i,s,t,r,p),u=o.impact>3||Math.abs(o.speed)<1;n.stall=u&&!n.maneuver?n.stall+r:0,Fn(o,r,m,t,i)}var Om="gtbase:progress:1",co=(n,e)=>Number.isFinite(n)?_t(Math.floor(n),0,e):0,TM=["sedan","hatch","wagon","taxi","pickup","van","suv","sport","muscle","luxury","convertible"],AM=["street","sport","chopper","scooter"],EM=["spoiler","rack","bullbar"];function Bm(n){try{let e=JSON.parse((n??globalThis.localStorage).getItem(Om));if(!e||e.version!==1||!Number.isFinite(e.cash)||!Number.isFinite(e.ammo)||!Number.isFinite(e.health))return null;let t=e.stash??{},i=e.garage,s=i&&(i.kind==="car"&&TM.includes(i.model)||i.kind==="bike"&&AM.includes(i.model))&&Number.isInteger(i.color)&&i.color>=0&&i.color<=16777215?{kind:i.kind,model:i.model,color:i.color,upgrades:{engine:co(i.upgrades?.engine,3),tires:co(i.upgrades?.tires,2)},fitted:Array.isArray(i.fitted)?i.fitted.filter(r=>EM.includes(r)):[]}:null;return{checkpoint:e.checkpoint==="lajes"?"lajes":"brasa",...e.checkpoint==="lajes"?en.home:{x:In.x+2.5,z:In.z-2.73},cash:_t(Math.floor(e.cash),0,999999),armed:e.armed===!0,equipped:e.equipped===!0,ammo:_t(Math.floor(e.ammo),0,360),rifle:e.rifle===!0,rifleAmmo:co(e.rifleAmmo,900),health:_t(Math.floor(e.health),1,100),look:zp(e.look),wardrobe:Array.isArray(e.wardrobe)?e.wardrobe.filter(r=>r&&typeof r.label=="string"&&r.changes&&typeof r.changes=="object"):[],stash:{weed:co(t.weed,999),coke:co(t.coke,999),ecstasy:co(t.ecstasy,999)},garage:s,recruits:Array.isArray(e.recruits)?[...new Set(e.recruits.filter(r=>Number.isInteger(r)&&r>=0||typeof r=="string"&&/^[\w:-]{1,80}$/.test(r)))]:[]}}catch{return null}}function km(n,e){try{return(e??globalThis.localStorage).setItem(Om,JSON.stringify({...n,version:1})),!0}catch{return!1}}var ho=qe("view"),CM=qe("menu"),fo=qe("play"),uo=qe("quality"),Bs=qe("shop"),Gm=180,Vm=260,ur=36,Qc=90,fr={weed:{name:"maconha",pack:100,retail:34},coke:{name:"p\xF3",pack:300,retail:85},ecstasy:{name:"ecstasy",pack:200,retail:58}};function eh(n,e){try{return e!==void 0&&localStorage.setItem("gtbase:"+n,e),localStorage.getItem("gtbase:"+n)}catch{return null}}function RM(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,e=new Cc({antialias:!n,alpha:!1,powerPreference:"high-performance"});e.toneMapping=ta,e.toneMappingExposure=1.17,e.shadowMap.type=Ks,ho.append(e.domElement);let t=new Uo,i=new Nn(57,1,.12,370),s=tm(t),r=s.vehicleSolids,o=Fm(s.vehicleSolids),a=Im(t),h=xm(t),l=c=>c.floorY??s.floorAt(c.x,c.z,0),f=c=>s.walkSolids(c.x,c.z,l(c)),d=()=>[...s.solid,...s.closedDoorSolids()],p=c=>{c.floorY=s.floorAt(c.x,c.z,l(c))},m=c=>l(c)>1.25?[]:W,u={boarding:null,alighting:null,lastHurt:0,...da,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,ragdoll:null,model:Ns(t,ir())},M=91,g=c=>{let y=ar[c]?.palette??[11422e3];return M=M*1103515245+12345>>>0,y[M%y.length]},_=[{x:15.75,z:-1.8,angle:Math.PI,model:"sport"},{x:-22.8,z:4,angle:0,model:"pickup"},{x:36,z:15.3,angle:Math.PI/2,model:"luxury"},{x:53.3,z:-36,angle:0,model:"muscle"},{x:-15.9,z:-31,angle:0,model:"convertible"}],T=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033,variant:"sport"},{x:22.85,z:28,angle:0,color:4678008,variant:"chopper"}],R=[..._.map(({model:c})=>io(t,c,g(c))),...T.map(({color:c,variant:y})=>Bc(t,c,y))],b=["sedan","taxi","hatch","scooter","van","suv","wagon","street"],E=["sedan","hatch","taxi","suv"],S=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778,5406086,11563879,7111513,8944529].map((c,y)=>{let v=y===3||y===7,N=v?b[y]:ar[b[y%8]]?b[y%8]:E[y%E.length],C=v?Bc(t,c,N):io(t,N,g(N));return C.routeIndex=y===3||y===7?8+(y===7?1:0):y%8,C.kind==="bike"&&(C.rider=Ns(t,xa(4e3+y)),C.rider.root.visible=!1),C}),x=[...R,...S],w=new Map,L=[],I=Array.from({length:32},(c,y)=>{let v=Si[y%3],N=Si[Math.floor(y/3)%3],C=y%2===0?71:85,Z=(y%3-1)*20,A=y>=24?[{x:C,z:Z-10},{x:C,z:Z+10},{x:C+7,z:Z+10},{x:C+7,z:Z-10}]:[{x:v+12,z:N-12},{x:v+12,z:N+12},{x:v-12,z:N+12},{x:v-12,z:N-12}],q=(y*3+Math.floor(y/9))%4,he;for(let Te=0;Te<36&&!he;Te++){let we=(q+Te%4)%4,Se=A[we],ye=A[(we+1)%4],ce=.1+Math.floor(Te/4)*.1,fe={x:Se.x+(ye.x-Se.x)*ce,z:Se.z+(ye.z-Se.z)*ce,next:(we+1)%4};Rn(fe.x,fe.z,.46,s.walkSolids(fe.x,fe.z,0))&&L.every(_e=>ie(fe,_e)>11.7)&&(he=fe)}return he??={...A[q],next:(q+1)%4},L.push(he),nt({...he,id:"street:"+y},"civilian",Ns(t,xa(1e3+y)),A)}),P=s.buildings.filter(c=>c.clerk).map((c,y)=>nt({...c.clerk,next:0,id:"clerk:"+c.id,buildingId:c.id},"clerk",Ns(t,{...xa(2e3+y),shirt:"tee"}),[])),k=s.buildings.filter(c=>c.clerk),O=Array.from({length:3},(c,y)=>{let v=Ds.z-6.1+y*4.25,N={x:-1.85,z:Ds.z+[-.23,-4.4,3.94][y],next:0,id:"officer:"+y,buildingId:"station"},C=nt(N,"police",Ns(t,Np([12157017,8475704,15052936][y%3])),[]),Z={x:8.2,z:v,angle:Math.PI/2},A=io(t,"sedan",3626613,!0);return{officer:C,berth:Z,car:A,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,park:null,parkWait:0,route:[3,6,1][y],beat:y,startShift:[18,40,26][y]}}),F=io(t,"tow",12950339),te={x:qn.bay.x,z:qn.bay.z-4,angle:Math.PI},H={car:F,target:null,hitch:null,carrying:!1,unload:0,stop:null,stall:0,wait:0,engage:0,prevAngle:0},W=[...x,...O.map(c=>c.car),F],se=new Map,Q=Array.from({length:S.length+2},(c,y)=>{let v=nt({x:0,z:0,next:0,id:"driver:"+y},"civilian",Ns(t,xa(3e3+y)),[]);return v.seated=!0,v.model.root.visible=!1,v});S.forEach((c,y)=>{c.kind==="car"&&(c.ownDriver=Q[y])});let B=()=>Q.find(c=>c.seated&&!c.riding&&!W.some(y=>y.ownDriver===c&&y.driver)),G=c=>c.ownDriver?.seated&&!c.ownDriver.riding?c.ownDriver:B(),J=[...I,...P,...O.map(c=>c.officer),...Q],j=J,K=new Map(J.map(c=>[c.id,c])),le=new Js(1,14),Y=new Xt({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),de=new on(.27,.115,.38),re={cash:new an({color:7838308}),ammo:new an({color:14395738}),weapon:new an({color:4805464})},Ie=[];function nt(c,y,v,N){return{home:c,baseRole:y,role:y,model:v,path:N,...c,pace:1.15+Math.abs(c.z)%4*.11,angle:c.angle??0,floorY:c.y??0,scheduleClock:9+Math.abs(c.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,wallet:12+Math.floor(Math.abs(Math.sin(c.x*4.27+c.z*8.13))*106),down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function De(c){c.drop&&(t.remove(c.drop),c.drop=null),Object.assign(c,c.home,{role:c.baseRole,health:100,fear:0,down:0,angle:c.home.angle??0,floorY:c.home.y??0,scheduleClock:9+Math.abs(c.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],shoppingTrip:null,commandTarget:null,hopTime:0,stuckTime:0,walkIntent:null,pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1,ragdoll:null}),c.model.root.rotation.set(0,c.angle,0),c.model.shadow.visible=!0,c.model.root.visible=!0,p(c),c.model.root.position.set(c.x,l(c),c.z)}let Oe=Nm();eh("sound")==="off"&&Oe.toggle();let je=new $,Ke=new $,pt=new $,ct=new $,tn=new $,Lt=new $,Wt=new $,zt=new $,Ye=new $,mt=!1,Et=!1,U=null,Dt=!1,vt=0,gt=null,Pe=0,nn=0,Qe=0,rt=0,V=0,D=0,ne=0,be=.23,ve=0,Ee=0,ze=0,ge=0,xe=!0,Ne="keyboard",X=Vm,me=!1,ue=!1,Ae=0,Le=!1,Ce="pistol",He=!1,st=0,Re=0,Be=ir(),it={weed:0,coke:0,ecstasy:0},Ue=null,Ut=3,sn=0,xt=null,mi=!1,ai=0,ds=0,Qn=null,Bn=null,Yt=null,ks=0,li=null,ps=0,Zn=null,$t=[],rn=Bm(),Ei=rn?.checkpoint??null,th=()=>{fo.textContent=rn?"Continuar do save":"Jogar agora"},kn=0,Ci=0,ms=0,po=0,mo=0,Gs=!1,z=0,ee=!1,pe="",oe=0,ae=1,Fe=0,Je=0,Me=qe("map").getContext("2d"),Ge=document.createElement("canvas");Ge.width=Ge.height=256;let ke=Ge.getContext("2d"),tt=qe("atlas"),Mt=qe("atlas-map"),Xe={x:128,z:128},ht=null,Ht=null,Ft=new Tt(new ns(.55),new Xt({color:16362817}));t.add(Ft),Ft.visible=!1;function Bt(c,y){ht={x:(c-128)/Gn,z:(y-128)/Gn},Ft.position.set(ht.x,Yn(ht.x,ht.z)+2.6,ht.z),Ft.visible=!0,tt.close(),Vs.clear()}qe("mark-lajes").onclick=()=>Bt(ut(63.6),ut(0)),qe("mark-lajes-home").onclick=()=>Bt(ut(en.home.x-1.6),ut(en.home.z));function fn(){!mt||Bs.open||tt.open||(Xe.x=ut(u.x),Xe.z=ut(u.z),document.pointerLockElement&&document.exitPointerLock(),Vs.clear(),tt.showModal())}qe("open-map").onclick=fn,Mt.onclick=c=>{let y=Mt.getBoundingClientRect();Bt((c.clientX-y.left)*256/y.width,(c.clientY-y.top)*256/y.height)};let Ze=[];function vn(){!mt||Bs.open||tt.open||(Vs.clear(),document.pointerLockElement&&document.exitPointerLock(),Zt.show(()=>({title:"Invent\xE1rio",note:"Carteira R$ "+X+" \xB7 Pistola "+(me?Ot()+" balas":"\u2014")+" \xB7 Fuzil "+(He?(Ce==="rifle"?Ae:Re)+" balas":"\u2014"),sections:[{title:"Garagem",items:xt?[{label:_o(xt),disabled:!0}]:[]},{title:"Estoque",items:Object.keys(fr).map(c=>({label:fr[c].name+" \xD7 "+it[c],price:0,disabled:!0}))},{title:"Guarda-roupa",items:Ze.map(c=>({label:c.label,price:0,buy:()=>Vn(c.changes)}))}]})))}function Ot(){return Ce==="pistol"?Ae:st}qe("open-bag").onclick=vn,document.addEventListener("keydown",c=>{c.repeat||(c.code==="KeyM"&&(tt.open?tt.close():fn()),c.code==="KeyI"&&vn())});let Gn=1.16,ut=c=>128+c*Gn;ke.fillStyle="#1d3433",ke.fillRect(0,0,256,256),ke.fillStyle="#46605b";for(let c of cn)ke.fillRect(ut(c)-10,0,20,256),ke.fillRect(0,ut(c)-10,256,20);ke.fillStyle="#826849",ke.fillRect(ut(62),ut(-en.halfDepth),(en.east-en.west)*Gn,en.halfDepth*2*Gn),ke.fillStyle="#345048";for(let c of s.vehicleSolids)ke.fillRect(ut(c.x-c.w/2),ut(c.z-c.d/2),c.w*Gn,c.d*Gn);ke.fillStyle="#6a7859",ke.fillRect(ut(-10),ut(28),38,38),ke.fillStyle="#ffe4aa",ke.beginPath(),ke.arc(ut(63.6),ut(0),3,0,2*Math.PI),ke.fill(),ke.textAlign="right",ke.font="bold 9px system-ui",ke.fillText("Vila das Lajes",ut(62),ut(-2)),((c,y,v,N)=>{c.fillStyle="#ffd35a",c.strokeStyle="#243938",c.lineWidth=1.5,c.beginPath(),c.moveTo(y-N,v),c.lineTo(y,v-N),c.lineTo(y+N,v),c.lineTo(y+N*.75,v),c.lineTo(y+N*.75,v+N*.9),c.lineTo(y-N*.75,v+N*.9),c.lineTo(y-N*.75,v),c.closePath(),c.fill(),c.stroke()})(ke,ut(en.home.x),ut(en.home.z),5),ke.fillStyle="#ffe4aa",ke.textAlign="right",ke.fillText("Sua casa",ut(en.home.x)-7,ut(en.home.z)+3);function Jn(){let c=uo.value==="high",y=uo.value==="low";e.setPixelRatio(Math.min(devicePixelRatio,c?2:y?1:n?1.45:1.5)*(y?.85:ae)),e.setSize(ho.clientWidth,ho.clientHeight),e.shadowMap.enabled=!y&&(c||ae>.76),s.sun.shadow.needsUpdate=!0,h.setScale(ho.clientHeight*e.getPixelRatio()*.92),i.aspect=ho.clientWidth/Math.max(1,ho.clientHeight),i.updateProjectionMatrix()}function Ri(){qe("sound").textContent=Oe.enabled?"Som ligado":"Som desligado",qe("sound").setAttribute("aria-pressed",String(Oe.enabled))}function bt(c){Bs.open&&xo(),mt=c,CM.hidden=c,qe("hud").hidden=!c,Vs.clear(),c?(Oe.start(),Et||(ne=.32,be=.22),Et=!0,xe=!0,ve=performance.now(),qe("pause").focus({preventScroll:!0}),qe("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),Oe.motor(0,!1),qe("help").removeAttribute("open"),qe("title").innerHTML="GT<span>BASE</span>",qe("intro").textContent="Jogo pausado em Vila Brasa.",fo.textContent="Continuar",qe("reset").hidden=!1,fo.focus())}function dn(){xs={x:NaN,z:NaN,angle:0},Sf(),Ze=[],ht=null,Ft.visible=!1,U=null,Qn=null,Yt=null,Bn=null,$t.length=0,X=Vm,me=!1,ue=!1,Ae=0,Le=!1,Ce="pistol",He=!1,st=0,Re=0,u.model.weapon="pistol",it.weed=it.coke=it.ecstasy=0,Ue=null,xt&&(mi=!0,ah(xt)),Pe=Qe=D=rt=V=oe=0,vt=0,Dt=!1,gt=null,a.reset(),s.resetDoors(),kn=Ci=ms=ai=ds=0,Gs=!1,z=0,ee=!1,ne=.32,be=.22,ge=0,Object.assign(u,da,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),p(u),u.model.root.position.set(u.x,0,u.z),u.model.root.rotation.set(0,0,0),u.model.root.visible=!0,u.model.shadow.visible=!0,rr(u.model,0,0,!1,!1),R.forEach((y,v)=>{let{x:N,z:C,angle:Z}=[..._,...T][v];oi(y,{x:N,z:C,angle:Z}),y.stolen=!1,y.body.rotation.z=0,pi(y,0)}),oi(F,te),Object.assign(H,{target:null,hitch:null,carrying:!1,unload:0,wait:0,stop:null,maneuver:null,stall:0,engage:0}),F.armAngle=.35,w.clear(),S.forEach((y,v)=>{so(y,y.routeIndex,v>=8?3:0),pi(y,0)});for(let y of O)oi(y.car,y.berth),Object.assign(y,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,park:null,parkWait:0}),pi(y.car,0);for(let y of J)De(y);for(let y of Q)y.seated=!0,y.model.root.visible=!1;for(let y of Ie)t.remove(y.mesh);Ie.length=0;for(let y of W)y.passengers=[],y.towTilt=0,y.signal=0,y.root.visible=!0,y.towed=!1,y.abandoned=0,y.lastProvoked=-100,y.leftInLane=!1,y.shopping=!1,y.visitTime=-100;s.props.reset(),s.lajesHome.reset(),h.clear(),u.ragdoll=null,s.sun.shadow.needsUpdate=!0,u.deadTime=0,za(O[0]);let c=k.find(y=>y.kind==="armory")?.entry??Yr;s.marker.position.set(c.x,.02,c.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,ze=0}function $e(c){pe=c,oe=2.4}let qt=()=>{let c=Object.entries(fr).filter(([y])=>it[y]>0).map(([y,v])=>v.name+" "+it[y]);return c.length?c.join(" \xB7 "):""},Zt=nm(Bs,{balance:()=>"Saldo: R$ "+X.toLocaleString("pt-BR")+(qt()?" \xB7 "+qt():"")+(me||He?" \xB7 Balas: "+[me?"pistola "+(Ce==="pistol"?Ae:st):"",He?"fuzil "+(Ce==="rifle"?Ae:Re):""].filter(Boolean).join(", "):""),onClose:()=>{Vs.clear(),ze=0}});function kt(c){return X<c?"Saldo insuficiente.":(X-=c,Oe.bell(),null)}function Ii(c){Ce==="rifle"?Re=Ae:st=Ae,c==="fists"?ue=!1:(ue=!0,Ce=c),Ae=Ce==="rifle"?Re:st,u.model.weapon=Ce,li=null,ps=0,Zn=null}function Hm(){let c=["fists",...me?["pistol"]:[],...He?["rifle"]:[]],y=ue?Ce:"fists";Ii(c[(c.indexOf(y)+1)%c.length])}function Vi(c,y){Ce===c?Ae=Math.min(900,Ae+y):c==="rifle"?Re=Math.min(900,Re+y):st=Math.min(360,st+y)}function of(c,y){let v=c.model,N=Ns(t,y);N.root.position.copy(v.root.position),N.root.quaternion.copy(v.root.quaternion),N.root.visible=v.root.visible,N.weapon=v.weapon,t.remove(v.root),v.root.traverse(C=>{C instanceof Tt&&C!==v.shadow&&C.geometry.dispose()}),c.model=N}function Vn(c){let y=Object.keys(c)[0];if(["shirt","legs","shoes","glasses","chain","earrings","watch","ring"].includes(y)&&!Ze.some(v=>JSON.stringify(v.changes)===JSON.stringify(c))){let v={shirt:"Blusa",legs:"Cal\xE7a / bermuda",shoes:"Cal\xE7ado",glasses:"\xD3culos",chain:"Corrente",earrings:"Brinco",watch:"Rel\xF3gio",ring:"Anel"};Ze.push({label:v[y]+" \xB7 "+({tee:"camiseta",tank:"regata",dress:"social",none:"sem",pants:"cal\xE7a",shorts:"bermuda",flipflops:"chinelo",sneakers:"t\xEAnis",gold:"ouro",silver:"prata",diamond:"diamante",true:"com",false:"sem"}[String(c[y])]??String(c[y]))+(c[y+"Color"]?" #"+c[y+"Color"].toString(16):""),changes:c})}return Be={...Be,...c},of(u,Be),null}let nh=Lu,af=[3553348,2373199,5917242,2894892,8221798,11049860,15262678],lf=[15789282,2236962,9056042,2969482,14725949,3107660];function Pi(c,y,v,N){let C=Be[y]===v;return{label:C?c+" (tirar)":c,price:C?0:N,active:C,buy:()=>C?Vn({[y]:typeof v=="boolean"?!1:"none"}):kt(N)??Vn({[y]:v})}}function Wm(c){return c==="store"?{title:"Balc\xE3o de comida",sections:[{title:"Card\xE1pio",items:[{label:"Lanche (+30 de vida)",price:15,disabled:u.health>=100,buy:()=>{let y=kt(15);return y||(u.health=Math.min(100,u.health+30),null)}}]}]}:c==="armory"?{title:"Loja de armas",note:"Pistola e muni\xE7\xE3o dentro da lei, mais ou menos.",sections:[{title:"Armas",items:[{label:"Pistola + "+ur+" balas",price:Gm,disabled:me,detail:me?"Voc\xEA j\xE1 tem uma pistola.":"",buy:()=>kt(Gm)??(me=!0,Vi("pistol",ur),Ii("pistol"),$e("Pistola comprada."),null)},{label:"Repor muni\xE7\xE3o da pistola",price:0,disabled:!me||(Ce==="pistol"?Ae:st)>=ur,detail:"Completa at\xE9 "+ur+" balas.",buy:()=>(Vi("pistol",ur-(Ce==="pistol"?Ae:st)),null)}]}]}:c==="black"?{title:"Penhores 24h \xB7 fundos",note:"Mercado negro. Pagamento na hora, sem nota fiscal.",sections:[{title:"Armas",items:[{label:"Fuzil + "+Qc+" balas",price:1200,disabled:He,detail:He?"Voc\xEA j\xE1 tem um fuzil.":"Rajada r\xE1pida e dano alto.",buy:()=>kt(1200)??(He=!0,Vi("rifle",Qc),Ii("rifle"),$e("Fuzil comprado."),null)},{label:"Muni\xE7\xE3o de fuzil ("+Qc+")",price:150,disabled:!He,buy:()=>kt(150)??(Vi("rifle",Qc),null)},{label:"Pistola + "+ur+" balas",price:220,disabled:me,buy:()=>kt(220)??(me=!0,Vi("pistol",ur),Ii("pistol"),null)}]},{title:"Drogas no atacado (10 unidades)",items:Object.entries(fr).map(([y,v])=>({label:v.name[0].toUpperCase()+v.name.slice(1)+" \xB7 estoque "+it[y],price:v.pack,detail:"Venda no varejo por R$ "+v.retail+" a unidade.",buy:()=>kt(v.pack)??(it[y]+=10,null)}))}]}:c==="clothes"?{title:"Moda Brasa",note:"Escolha a pe\xE7a e toque em uma cor.",sections:[{title:"Parte de cima",items:[{label:"Camiseta",price:60,active:Be.shirt==="tee",colors:nh,buy:y=>kt(60)??Vn({shirt:"tee",shirtColor:y??Be.shirtColor})},{label:"Regata",price:45,active:Be.shirt==="tank",colors:nh,buy:y=>kt(45)??Vn({shirt:"tank",shirtColor:y??Be.shirtColor})},{label:"Camisa social",price:120,active:Be.shirt==="dress",colors:nh,buy:y=>kt(120)??Vn({shirt:"dress",shirtColor:y??Be.shirtColor})},{label:"Sem camisa",price:0,active:Be.shirt==="none",buy:()=>Vn({shirt:"none"})}]},{title:"Parte de baixo",items:[{label:"Cal\xE7a",price:90,active:Be.legs==="pants",colors:af,buy:y=>kt(90)??Vn({legs:"pants",legColor:y??Be.legColor})},{label:"Bermuda",price:60,active:Be.legs==="shorts",colors:af,buy:y=>kt(60)??Vn({legs:"shorts",legColor:y??Be.legColor})}]},{title:"Cal\xE7ados",items:[{label:"T\xEAnis",price:150,active:Be.shoes==="sneakers",colors:lf,buy:y=>kt(150)??Vn({shoes:"sneakers",shoeColor:y??Be.shoeColor})},{label:"Chinelo",price:25,active:Be.shoes==="flipflops",colors:lf,buy:y=>kt(25)??Vn({shoes:"flipflops",shoeColor:y??Be.shoeColor})},{label:"Sapato social",price:180,active:Be.shoes==="dress",buy:()=>kt(180)??Vn({shoes:"dress"})}]},{title:"Acess\xF3rios",items:[Pi("\xD3culos escuros","glasses",!0,80),Pi("Corrente de prata","chain","silver",250),Pi("Corrente de ouro","chain","gold",900),Pi("Brincos de prata","earrings","silver",120),Pi("Brincos de ouro","earrings","gold",400),Pi("Brincos de diamante","earrings","diamond",1500),Pi("Rel\xF3gio de prata","watch","silver",300),Pi("Rel\xF3gio de ouro","watch","gold",1100),Pi("Anel de prata","ring","silver",150),Pi("Anel de ouro","ring","gold",500)]}]}:c==="barber"?{title:"Barbearia do Z\xE9",note:"Corte e barba. Toque em uma cor para pintar.",sections:[{title:"Pele",items:[{label:"Tom de pele",price:0,colors:Nu,buy:y=>Vn({skin:y??Be.skin})}]},{title:"Cabelo",items:Object.entries(Iu).map(([y,v])=>({label:v,price:y==="cap"?50:40,active:Be.hair===y,colors:y==="bald"?void 0:y==="cap"?[1522486,9056042,2236962,2772879,14725949,15789282]:Du,buy:N=>kt(y==="cap"?50:40)??Vn(y==="cap"?{hair:y,capColor:N??Be.capColor}:{hair:y,hairColor:N??Be.hairColor})}))},{title:"Barba",items:Object.entries(Pu).map(([y,v])=>({label:v,price:y==="none"?15:25,active:Be.beard===y,buy:()=>kt(y==="none"?15:25)??Vn({beard:y})}))}]}:c==="workshop"?qm(cf):{title:"Loja",sections:[]}}let cf=null,Ra=()=>k.find(c=>c.service==="workshop");function Xm(){let c=Ra();if(!c)return null;if(U?.kind==="car")return U;let y=x.filter(v=>v.kind==="car"&&v.stolen&&v.integrity>0&&!v.towed&&ie(v,c.approach)<22&&(v!==xt||!mi));return y.sort((v,N)=>ie(v,c.approach)-ie(N,c.approach)),y[0]??null}let ih=()=>U?.kind==="car"&&Math.hypot(U.vx,U.vz)<2.5&&Ra()&&ie(U,Ra().approach)<9?Ra():null;function qm(c){if(!c)return{title:"Oficina do Bigode",note:"Traga um carro seu at\xE9 a porta da oficina e volte ao balc\xE3o.",sections:[]};let y=hm(c),v=(Se,ye,ce,fe,_e)=>({label:Se,price:ce>0?fe:null,disabled:ce<=0,detail:ce>0?_e:"Em dia.",buy:()=>{let Ve=kt(fe);return Ve||(um(c,ye),$e(Se+" feito."),null)}}),N=75+y.front*2.4|0,C=75+y.rear*2.4|0,Z=55*y.glass,A=48*y.tires,q=y.mechanics*3.6|0,he=c.upgrades??={engine:0,tires:0},Te=(Se,ye,ce,fe,_e)=>{let Ve=he[ye]??0,dt=fe[Ve]??0;return{label:Se+(Ve?" \xB7 n\xEDvel "+Ve:""),price:Ve>=ce?null:dt,disabled:Ve>=ce,detail:Ve>=ce?"N\xEDvel m\xE1ximo.":_e,buy:()=>{let wt=kt(dt);return wt||(he[ye]=Ve+1,Hu(c),$e(Se+" instalado."),null)}}},we=(Se,ye)=>{let ce=c.fitted?.has(Se)??!1;return{label:dm[Se]+(ce?" (tirar)":""),price:ce?0:ye,active:ce,buy:()=>{let fe=ce?null:kt(ye);return fe||(Vu(c,Se,!ce),null)}}};return{title:"Oficina do Bigode",note:_o(c)+" \xB7 integridade "+Math.round(c.integrity)+"%. Cada reparo \xE9 cobrado por pe\xE7a.",sections:[{title:"Reparos",items:[v("Lataria e para-choque dianteiros","front",y.front,N,"Dano "+y.front+"%."),v("Lataria e para-choque traseiros","rear",y.rear,C,"Dano "+y.rear+"%."),v("Vidros trincados","glass",y.glass,Z,y.glass+" marca(s) de bala."),v("Pneus furados","tires",y.tires,A,y.tires+" pneu(s)."),v("Motor e mec\xE2nica","mechanics",y.mechanics,q,"Falta "+y.mechanics+"% de integridade.")]},{title:"Pe\xE7as de desempenho",items:[Te("Motor","engine",3,[700,1500,2800],"+5,5% de velocidade m\xE1xima e +9% de acelera\xE7\xE3o por n\xEDvel."),Te("Pneus esportivos","tires",2,[450,900],"+7,5% de ader\xEAncia por n\xEDvel.")]},{title:"Acess\xF3rios",items:[we("spoiler",380),we("rack",260),we("bullbar",540)]}]}}function sh(c){cf=c.service==="workshop"?Xm():null,Vs.clear(),document.pointerLockElement&&document.exitPointerLock(),Zt.show(()=>Wm(c.service))}function xo(){Zt.close()}function Ia(c){let y={...c,ground:W.includes(c)?c.root.position.y:l(c),angle:c.angle},v=d();return O.some(N=>{let{officer:C,car:Z,mode:A}=N;return C.health<=0?!1:C.seated&&["driving","patrol","returning"].includes(A)?oo({...Z,ground:Z.root.position.y},y,v,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):oo({...C,ground:l(C)},y,v,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function hf(c,y){if(y<12||j.some(Z=>Z.calling))return;let v=d(),N={...c,ground:l(c)},C=j.find(Z=>["civilian","clerk"].includes(Z.role)&&hn(Z)&&!Z.buyer&&!(Z.brawl>0)&&ie(Z,c)<24&&ie(Z,c)>2&&oo({...Z,ground:l(Z)},N,v,{range:24,fov:Math.PI*1.3,eye:1.6,aim:1.1}));C&&(C.calling={time:3.6,pressure:y,x:c.x,z:c.z})}function Hi(c,y=U??u,v=Ia(y)){if(!v)return hf(y,c),!1;let N=Zc(Pe);return Pe=Math.min(64,Math.max(Pe+(Pe>0?c*.52:0),c)),Dt=!0,vt=.24,gt={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle},N||$e("Crime visto pela pol\xEDcia."),!0}let uf=()=>U||l(u)>=1?null:k.find(c=>s.interiorAt(u.x,u.z,l(u))?.buildingId===c.id&&ie(u,c.clerk)<3)??null,Ym={store:"Comprar comida",armory:"Abrir loja de armas",clothes:"Ver roupas",barber:"Cortar cabelo",black:"Negociar nos fundos",workshop:"Abrir a oficina"},ff=()=>xt&&mi&&!U&&ie(u,nr.door)<2.6,Pa=()=>U&&U!==Jm().find(c=>c===U)&&ie(U,nr.door)<3.4&&Math.hypot(U.vx,U.vz)<2,df=()=>s.interiorAt(u.x,u.z,l(u))?.buildingId==="lajes-home"&&ie(u,en.home)<1.4,Zm={heal:c=>{u.health=Math.min(100,u.health+c)},flush:()=>Oe.flush()},rh=()=>!U&&s.interiorAt(u.x,u.z,l(u))?.buildingId==="lajes-home"?s.lajesHome.nearest(u):null,pf=()=>!U&&(df()||ie(u,{x:In.x,z:In.z+6.25})<1.7),mf=()=>W,hn=c=>c&&c.health>0&&!c.seated,_o=c=>(c.kind==="bike"?"Moto ":"")+(c.spec?.name??"Carro"),gf=()=>!U&&s.doors.find(c=>c.private&&!c.breached&&!c.opened&&Math.abs(c.base-l(u))<.85&&ie(c,u)<1.62);function xf(){if(l(u)>1.02)return null;let c=null,y=1/0;for(let v of x){let N=ie(u,v),C=v.kind==="bike"?3:Math.max(3,v.halfLength+.6);H.carrying&&H.target===v||N>=C||N>=y||v.integrity<=0||v.wrecked||v.burning||Math.abs(v.speed)>3.4||(c=v,y=N)}return c}function Li(c=!1){if(!U)return;let{angle:y,x:v,z:N}=U;if(!c&&Math.hypot(U.vx,U.vz)>4.2){$e("Reduza a velocidade para sair.");return}let C=U.kind==="bike"?1.02:U.halfWidth+.67,Z=U.kind==="bike"?1.75:U.halfLength+.65,A=[C,-C,C+.53,-C-.53].map(he=>[v+Math.cos(y)*he,N-Math.sin(y)*he]);A.push([v-Math.sin(y)*Z,N-Math.cos(y)*Z],[v+Math.sin(y)*Z,N+Math.cos(y)*Z]);let q=A.find(([he,Te])=>On({x:he,z:Te},he,Te,s.walkSolids(he,Te,0),W,j,.36));if(!q&&!c){$e("Sem espa\xE7o para abrir a porta.");return}[u.x,u.z]=q??[da.x,da.z],u.floorY=0,p(u);for(let he of[...U.passengers??[]])mr(he);u.angle=y,Object.assign(u,{vx:0,vz:0,pushX:0,pushZ:0}),Sf(),U.abandoned=0,U.leftInLane=!!M0(U),U.doorTime=.65,u.alighting={t:0,from:u.model.root.position.clone()},u.boarding=null,U=null,u.model.root.visible=!0,u.model.shadow.visible=!0,u.model.root.rotation.set(0,y,0),rr(u.model,0,0,!1,ue)}function oh(){Ce==="rifle"?Re=Ae:st=Ae;let c={checkpoint:df()?"lajes":"brasa",wardrobe:Ze,health:u.health,cash:X,armed:me,equipped:ue,ammo:st,rifle:He,rifleAmmo:Re,look:Be,stash:{...it},garage:xt?{kind:xt.kind,model:xt.model,color:xt.color,upgrades:{...xt.upgrades},fitted:[...xt.fitted??[]]}:null,recruits:$t.map(v=>v.id)},y=km(c);return y&&(Ei=c.checkpoint),y}let Jm=()=>O.map(c=>c.car);function _f(c,y,v,N=null){if(xt&&(t.remove(xt.root),W.splice(W.indexOf(xt),1),x.splice(x.indexOf(xt),1)),xt=c==="bike"?Bc(t,v,y):io(t,y,v),xt.stolen=!0,xt.upgrades={engine:0,tires:0,...N?.upgrades},c==="car"){Hu(xt);for(let C of N?.fitted??[])Vu(xt,C,!0)}return W.push(xt),x.push(xt),xt}function ah(c){oi(c,nr.inside),c.root.visible=!1,pi(c,0)}function Km(c){let y=c.kind,v=c.model,N=c.color;if(Li(!0),c!==xt){let C=R.indexOf(c);if(C>=0){let{x:Z,z:A,angle:q}=[..._,...T][C];oi(c,{x:Z,z:A,angle:q}),c.stolen=!1,c.towed=!1,c.root.visible=!0,pi(c,0)}else c.routeIndex>=0&&(so(c,c.routeIndex),pi(c,0));_f(y,v,N,c)}mi=!0,ah(xt),Object.assign(u,{x:nr.door.x-1.6,z:nr.door.z+1.4,floorY:0}),p(u),oh(),$e("Ve\xEDculo guardado na garagem e salvo."),Oe.bell()}function $m(){xt&&(mi=!1,oi(xt,nr.out),xt.root.visible=!0,pi(xt,0),La(xt),$e("Ve\xEDculo retirado da garagem."))}function jm(){Li(!0),Object.assign(u,{x:In.x,z:In.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0,ragdoll:null}),p(u),ai=0,Pe=0,ds=0,ne=-Math.PI/2,xe=!0,$e("Voc\xEA voltou para casa.")}function yf(){if(Qn||u.health<=0)return;let c=ih();if(c&&!Pa()){sh(c);return}if(U&&!Pa()){Li();return}let y=uf();if(y){sh(y);return}if(Pa()){Km(U);return}if(ff()){$m();return}if(pf()){$e(oh()?"Progresso salvo em casa.":"O navegador bloqueou o salvamento."),Oe.bell();return}let v=rh();if(v){$e(v.use(Zm)),Oe.click();return}let N=xf();if(!N){$e(gf()?"Porta trancada.":"Nada para interagir aqui.");return}if(N.driver){let C=G(N)??Q.find(Z=>Z.exitAge>14&&Z.role==="civilian"&&ie(Z,u)>11);if(C){let Z=N.angle+(N.kind==="bike"?-1:1)*Math.PI/2,A=N.x+Math.sin(Z)*(N.kind==="bike"?.95:1.51),q=N.z+Math.cos(Z)*(N.kind==="bike"?.95:1.51),he=On({x:A,z:q},A,q,s.walkSolids(A,q,0),W,j,.29)?{x:A,z:q}:{x:u.x,z:u.z};De(C),Object.assign(C,he,{angle:Z,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),Math.random()<.35&&(C.fear=0,C.brawl=9,C.attack=1.2),N.rider&&(N.rider.root.visible=!1)}N.driver=null,N.vx=N.vz=N.speed=0,N.doorTime=.65,Qn={car:N,delay:.46},$e(N.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else La(N)}function La(c){c.burning||c.wrecked||c.integrity<=0||(U=c,c.driver=null,c.doorTime=.65,u.boarding=c.kind==="car"?{t:0,from:u.model.root.position.clone()}:null,u.alighting=null,u.lift=0,Object.assign(u,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),ai=0,u.model.root.visible=!0,u.model.shadow.visible=!1,c.stolen||(c.stolen=!0,Hi(13)),c.passengers??=[],c.kind==="car"&&Qm(c),ne=c.angle,ge=0,xe=!0)}function Qm(c){let y=c.spec.seats,v=$t.filter(A=>hn(A)&&!A.riding&&ie(A,c)<60&&A.order!=="dealer"&&A.order!=="wait").sort((A,q)=>ie(A,c)-ie(q,c)),N=Math.max(0,y.length-1-c.passengers.length);if(v.splice(0,N).forEach((A,q)=>{let he=y[Math.min(y.length-1,1+q+c.passengers.length)];A.boardCar=c,A.boardRow=he[1],A.boardSide=Math.sign(he[0])||1}),!v.length)return;let C=x.filter(A=>A.kind==="car"&&A!==c&&!A.burning&&!A.wrecked&&A.integrity>12&&!A.driver&&Math.abs(A.speed)<3&&(!mi||A!==xt)&&!A.shopping&&!A.towed&&ie(A,c)<45&&!(H.carrying&&H.target===A)).sort((A,q)=>ie(A,c)-ie(q,c)),Z=0;for(let A of C){if(!v.length)break;let q=A.spec.seats.length-(A.passengers?.length??0),he=v.splice(0,q);he.length&&(Z++,A.passengers??=[],mn.set(A,mn.get(A)??{car:A,stall:0}),he.forEach((Te,we)=>{let Se=A.spec.seats[Math.min(A.spec.seats.length-1,we)];Te.boardCar=A,Te.boardRow=Se[1],Te.boardSide=Math.sign(Se[0])||1}))}Z&&$e("A gangue se dividiu em "+(Z+1)+" carros.")}function lh(c,y,v){let N=new Tt(de,re[c]),C=l(y)+.13;N.position.set(y.x+.22,C,y.z+.19),t.add(N),Ie.push({mesh:N,kind:c,count:v,y:C,wait:.32,left:105})}function e0(c){for(let y=Ie.length-1;y>=0;y--){let v=Ie[y];v.left-=c,v.wait-=c,v.mesh.rotation.y+=c*2.1,v.mesh.position.y=v.y+Math.sin(v.left*3.8)*.08;let N=!U&&u.health>0&&v.wait<0&&Math.abs(l(u)-v.y)<.65&&Math.hypot(u.x-v.mesh.position.x,u.z-v.mesh.position.z)<1.03;N&&(v.kind==="cash"?(X+=v.count,$e("R$ "+v.count+" recolhidos.")):v.kind==="weapon"?(me||(me=!0,Ii("pistol")),Vi("pistol",v.count),$e("Pistola recolhida.")):(Vi("pistol",v.count),$e("+"+v.count+" balas de pistola.")),Oe.bell()),(N||v.left<=0)&&(t.remove(v.mesh),Ie.splice(y,1))}}function ei(c,y,v=null){if(c.health<=0||y<=0)return;if(c.health=Math.max(0,c.health-y),c===u&&(u.lastHurt=Ee),h.blood(c.x,l(c)+1.1,c.z),c.health<=0){let Z=v?c.x-v.x:c.pushX,A=v?c.z-v.z:c.pushZ;if(c.fallDir=Math.sin(c.angle)*Z+Math.cos(c.angle)*A>0?1:-1,c.deadTime=0,v&&c!==u){let q=Math.max(.1,Math.hypot(Z,A));c.pushX+=Z/q*1.3,c.pushZ+=A/q*1.3}}if(c===u){ms=.22,v&&t0(v),c.health<=0&&(Li(!0),ds=3,$e("Voc\xEA caiu. Voltando para casa\u2026"));return}if(c.stagger=.32,c.fear=c.brawl>0?0:6,c.calling=null,c.buyer=null,c.surrender=0,Yt?.npc===c&&(Yt=null),c.health>0)return;Bn===c&&(Bn=null),c.down=c.role==="police"?28:19,c.model.shadow.visible=!1;let N=new Tt(le,Y);N.position.set(c.x+Math.sin(c.angle)*c.fallDir*1,l(c)+.019,c.z+Math.cos(c.angle)*c.fallDir*1),N.rotation.x=-Math.PI/2,N.scale.set(.52,.32,1),t.add(N),c.drop=N,["police","ally"].includes(c.role)&&lh("weapon",c,12),c.role!=="ally"&&!c.robbed&&lh("cash",c,c.wallet);let C=$t.indexOf(c);C>=0&&$t.splice(C,1)}function t0(c){let y=Math.atan2(c.x-u.x,c.z-u.z)-ne,v=document.createElement("div");v.className="hurt",v.style.transform="rotate("+-y+"rad)",qe("damage-dir").append(v),window.setTimeout(()=>v.remove(),1100)}function Da(c){return[...j,u].filter(v=>v!==c&&hn(v)&&!(v===u&&U&&U.kind==="car")).map(v=>{let N=l(v)+(v===u?u.lift:0);return{actor:v,y:N,bounds:[v.x-.31,N+.1,v.z-.31,v.x+.31,N+1.9,v.z+.31]}})}function vf(){i.getWorldDirection(Lt);let c=Da(u),y=d(),v=Ea(i.position.toArray(),Lt.toArray(),y,c,28).hit,N=[u.x,l(u)+1.38+u.lift,u.z];if(v&&ie(u,v.actor)<24&&ro(N,[v.actor.x,v.y+1.25,v.actor.z],y))return v.actor;let C=.15,Z=null;for(let{actor:q,y:he}of c){if(ie(u,q)>18)continue;ct.set(q.x,he+1.25,q.z).project(i);let Te=Math.hypot(ct.x,ct.y);ct.z>=1||Te>=C||!ro(N,[q.x,he+1.25,q.z],y)||(C=Te,Z=q)}if(Z)return Z;let A=W.filter(q=>q!==U&&q.integrity>0&&ie(u,q)<32).map(q=>({car:q,oriented:{center:[q.x,q.root.position.y+.8,q.z],half:q.kind==="bike"?[.4,.75,1.1]:[q.halfWidth+.05,.75,q.halfLength],angle:q.angle}}));return Ea(i.position.toArray(),Lt.toArray(),y,A,34).hit?.car??null}let dr=c=>O.find(y=>y.car===c),Mf=c=>W.includes(c);function ch(c){if(c===U||c.driver||mn.has(c)&&c.passengers?.length)return!0;let y=dr(c);return!!(y&&y.officer.seated&&y.officer.health>0&&["driving","patrol"].includes(y.mode))}let pr=c=>!!c&&(Mf(c)?c!==U&&c.integrity>0&&ch(c):hn(c));function Wi(c){if(c){if(Mf(c)){c!==U&&c.integrity>0&&ch(c)&&(Bn=c);return}c.role!=="ally"&&c.health>0&&(Bn=c)}}function gs(c,y,v){let N=dr(c),C=N&&N.officer.seated&&["driving","patrol"].includes(N.mode)?N:null,Z=C?.officer??(c.driver?G(c):null);if(!Z)return!1;C||De(Z);let A=c.angle+(c.kind==="bike"?-1:1)*Math.PI/2,q=c.kind==="bike"?.95:c.halfWidth+.6;return Object.assign(Z,{seated:!1,x:c.x+Math.sin(A)*q,z:c.z+Math.cos(A)*q,fear:6,exitAge:0,floorY:0}),Z.model.root.visible=!0,Z.model.shadow.visible=!0,c.driver=null,c.vx*=.45,c.vz*=.45,c.speed*=.45,c.rider&&(c.rider.root.visible=!1),C&&(C.mode="foot"),ei(Z,y,v),!0}function bf(c,y){if(!y||!c.flat)return!1;let v=Math.sin(c.angle),N=Math.cos(c.angle),C=y[0]-c.x,Z=y[2]-c.z,A=C*N-Z*v,q=C*v+Z*N,he=y[1]-c.root.position.y,Te=!1;return c.wheels.forEach((we,Se)=>{!c.flat[Se]&&he<c.wheelRadius*2+.1&&Math.hypot(A-we.position.x,q-we.position.z)<c.wheelRadius+.2&&(c.flat[Se]=!0,Te=!0)}),Te}function n0(c,y,v,N){if(c.lastHitBy=v,y<c.wheelRadius*2&&bf(c,N)){c===U&&$e("Pneu furado.");return}if(N&&h.sparks(N[0],N[1],N[2],4,2),c.kind==="bike"){if(y>.85||Math.random()<.45){c===U?(ei(u,14,v),u.health>0&&Math.random()<.3&&(Li(!0),u.trip=.6,$e("Voc\xEA caiu da moto."))):gs(c,40,v);return}c.integrity=Math.max(0,c.integrity-4);return}if(y>.92){if(Wu(c,N),c===U){let C=(c.passengers??[]).filter(A=>A.health>0),Z=C.length&&Math.random()<C.length/(C.length+1.6)?C[Math.floor(Math.random()*C.length)]:u;ei(Z,Z===u?16:24,v),Z===u&&$e("Tiro atravessou o vidro.")}else gs(c,38+Math.round(Math.random()*30),v);return}c.integrity=Math.max(0,c.integrity-3)}function i0(c,y){let v=Math.sin(c.angle),N=Math.cos(c.angle),C=y.boardRow??-1,Z=c.halfWidth+.55;for(let A of[y.boardSide??1,-(y.boardSide??1)]){let q={x:c.x+N*A*Z+v*C,z:c.z-v*A*Z+N*C};if(On(y,q.x,q.z,s.walkSolids(q.x,q.z,0),[],[],.3))return q}return{x:c.x-v*(c.halfLength+.7),z:c.z-N*(c.halfLength+.7)}}let mn=new Map;function s0(c){let y=x.filter(N=>N.kind==="car"&&N!==U&&!N.burning&&!N.wrecked&&N.integrity>12&&Math.abs(N.speed)<3&&(!mi||N!==xt)&&!N.shopping&&(N.passengers?.length??0)+$t.filter(C=>C.boardCar===N).length<N.spec.seats.length);y.sort((N,C)=>ie(c,N)-ie(c,C));let v=y[0];v&&(mn.has(v)||mn.set(v,{car:v,stall:0}),c.boardCar=v,c.boardSide=Math.sign(v.spec.seats[0][0]),c.boardRow=v.spec.seats[0][1],v.passengers??=[])}function Sf(){for(let c of mn.keys()){for(let y of[...c.passengers??[]])mr(y);for(let y of $t)y.boardCar===c&&(y.boardCar=null);c.speed=c.vx=c.vz=0}mn.clear()}function r0(c,y){let v=c.boardCar;if(!U||U!==v&&!mn.has(v)||v.burning||v.integrity<=0||(v.passengers?.length??0)>=v.spec.seats.length-(v===U?1:0))return c.boardCar=null,0;if(Math.hypot(v.vx,v.vz)>2.5){let _e=Pf(v,$t.indexOf(c));return ie(_e,c)>1.25?uh(c,_e,6.1,y):0}let N=i0(v,c),C=Math.sin(v.angle),Z=Math.cos(v.angle),A=c.x-v.x,q=c.z-v.z,he=A*C+q*Z,Te=A*Z-q*C,we=(N.x-v.x)*Z-(N.z-v.z)*C;if(ie(c,N)<.75||ie(c,v)<v.halfWidth+.9||Math.abs(Te)>v.halfWidth+.2&&Math.abs(Te)<v.halfWidth+1&&Math.abs(he)<v.halfLength-.55)return c.seated=!0,c.riding=v,c.boardCar=null,c.model.root.visible=!1,mn.has(v)&&v.driver&&gs(v,0,c),v.passengers.push(c),v.doorTime=.6,0;if(Math.abs(Te)>=v.halfWidth+.45)return c.boardSide=Math.sign(Te),Tn(c,N,4.8,y);let Se=Math.sign(we)||1,ce=(Math.sign(he)||1)*Math.max(v.halfLength+.65,Math.abs(he)),fe=v.halfWidth+.68;return Tn(c,{x:v.x+C*ce+Z*Se*fe,z:v.z+Z*ce-C*Se*fe},4.8,y)}function mr(c){let y=c.riding;if(c.riding=null,c.boardCar=null,!y)return;y.passengers=(y.passengers??[]).filter(he=>he!==c);let v=Math.sin(y.angle),N=Math.cos(y.angle),C=y.halfWidth+.62,Z=y.halfLength+.9,A=[[C,-1],[-C,-1],[C,.6],[-C,.6],[0,-Z],[C+.7,0],[-C-.7,0],[0,Z]].map(([he,Te])=>({x:y.x+N*he+v*Te,z:y.z-v*he+N*Te})),q=A.find(he=>On(c,he.x,he.z,s.walkSolids(he.x,he.z,0),W.filter(Te=>Te!==y),j,.3))??A[0];Object.assign(c,q,{seated:!1,floorY:0,angle:y.angle,exitAnim:.3,exitSide:1}),p(c),c.model.root.visible=!0,c.model.shadow.visible=!0}function wf(c,y=0){for(let v of W){if(v.kind!=="car")continue;let N=v===U||ie(v,c)<40,C=dr(v),Z=C&&C.officer.seated&&C.officer.health>0&&["driving","patrol"].includes(C.mode)?C.officer:null,A=v.ownDriver?.seated&&v.driver&&v!==U?v.ownDriver:null,q=v===U?u:Z??A;(mn.has(v)&&v.passengers?.length?v.passengers:[q,...v.passengers??[]]).forEach((he,Te)=>{if(he)if(N){if(pm(he.model,v,Te),he===u&&u.boarding&&v===U){let we=u.boarding;we.t+=y;let Se=_t(we.t/.5,0,1),ye=Se*Se*(3-2*Se),ce=he.model.root.position;ce.lerpVectors(we.from,ce.clone(),ye),ce.y+=Math.sin(Math.PI*Se)*.14,Se>=1&&(u.boarding=null)}}else he.model.root.visible=!1})}}function o0(c){for(let y of $t){if(!y.riding)continue;let v=y.riding;if(!U||U!==v&&!mn.has(v)||y.health<=0){mr(y);continue}y.x=v.x,y.z=v.z,y.floorY=0,y.attack-=c;let N=pr(y.commandTarget)?y.commandTarget:Bn;pr(N)&&y.attack<=0&&ie(v,N)<18&&Ef(y,N)}}function a0(c,y){let v=d(),N={...c,ground:l(c)};for(let C of O){let Z=C.officer;hn(Z)&&(Z===y||oo({...Z,ground:l(Z)},N,v,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(C.retaliation=c)}}function Tf(c){if(!c||!["civilian","resident"].includes(c.role)||c.health<=0){$e("Mire em um pedestre dispon\xEDvel para recrutar.");return}c.role="ally",c.order="follow",c.surrender=0,c.fear=0,c.route=[],$t.push(c),Yt?.npc===c&&(Yt=null),$e("Guarda-costas recrutado."),Oe.bell()}function l0(c,y){if(u.health<=0||!y||!["civilian","resident","clerk"].includes(y.role)||y.robbed||ie(u,y)>9||Math.abs(l(u)-l(y))>.65){Yt&&(Yt.npc.surrender=0,Yt=null);return}let v=u.x-y.x,N=u.z-y.z,C=Math.sin(y.angle)*v+Math.cos(y.angle)*N;if(Yt?.npc!==y){if(Yt&&(Yt.npc.surrender=0),Yt=null,C<Math.hypot(v,N)*.3||y.stagger>0||y.fear>0)return;Yt={npc:y,left:5}}if(y.surrender=1,y.angle=Math.atan2(v,N),Yt.left-=c,Yt.left<=0){y.robbed=!0,y.surrender=0,y.fear=7;let Z=k.find(A=>A.id===y.home.buildingId);if(lh("cash",y,Z?85+y.wallet*3:y.wallet),Z){Hi(30,u,!0),gt={...Z.outside,y:0,health:100,seated:!1,angle:0};let A=O.filter(q=>q.officer.health>0&&q.car.integrity>12&&!q.car.burning).sort((q,he)=>ie(q.car,gt)-ie(he.car,gt))[0];A&&(Zn={unit:A,location:gt,time:42}),$e("Alarme acionado. Viatura a caminho.")}else Hi(15),$e("Dinheiro no ch\xE3o.");Yt=null}}function c0(){u.ragdoll||kn>0||u.health<=0||u.trip>.15||Qn||(u.angle=ne,mo=1-mo,u.pushX+=Math.sin(ne)*1.5,u.pushZ+=Math.cos(ne)*1.5,kn=lo,Gs=!0,z=hr,Wi(li),Oe.punch(!1))}function h0(){if(Gs=!1,u.health<=0||U)return;let c=Rm(u,j.filter(C=>hn(C)&&C.role!=="ally"&&Math.abs(l(u)-l(C))<.73),l(u)+u.lift,d());if(!c)return;Wi(c),Oe.punch(!0);let y=c.x-u.x,v=c.z-u.z,N=Math.max(.2,Math.hypot(y,v));c.pushX=y/N*3.6,c.pushZ=v/N*3.6,ei(c,18,u),c.role==="civilian"&&c.health>0&&!(c.brawl>0)&&Math.random()<(c.model.root.scale.x>1.05?.22:.12)&&(c.brawl=10,c.fear=0,c.attack=.4,Wi(c),$e("Ele vai revidar!")),Ci=.19,Hi(c.role==="police"?28:12),$e(c.health<=0?"Pedestre derrubado.":"Soco acertou.")}function u0(c){if(u.ragdoll||kn>0||Qe>0||u.health<=0||!ue||!(Ce==="rifle"?He:me))return;if(Ae<=0){c&&Wi(li),Qe=.32,$e("Sem balas. Reponha na loja.");return}let y=Ia(u),v=Ce==="rifle";Ae--,Qe=v?.11:.52,D=.095,u.angle=ne,u.model.root.rotation.y=ne,rr(u.model,0,0,!0,!0,0,c?be:be-.22),(v?u.model.rifleMuzzle:u.model.muzzle).getWorldPosition(tn),v?Oe.rifle():Oe.shot();let N=Da(u),C=W.map(_e=>{let Ve=_e.root.position.y,dt=_e.kind==="bike",wt=dt?0:.1,Gt=dt?0:_e.spec.belt;return{car:_e,oriented:{center:[_e.x,Ve+(dt?.67:(wt+Gt)/2),_e.z],half:dt?[.31,.44,1.08]:[_e.halfWidth-.01,(Gt-wt)/2,_e.halfLength-.05],angle:_e.angle}}});i.getWorldDirection(Lt);let Z=W.filter(_e=>_e.rider&&_e.driver).map(_e=>({rider:_e,oriented:{center:[_e.x,_e.root.position.y+1.42,_e.z],half:[.32,.45,.33],angle:_e.angle}})),A=W.filter(_e=>_e.cabin&&_e!==U).map(_e=>{let Ve=mm(_e);return{windowCar:_e,oriented:{center:[_e.x+Ve.z*Math.sin(_e.angle),_e.root.position.y+Ve.y,_e.z+Ve.z*Math.cos(_e.angle)],half:[Ve.halfX,Ve.halfY,Ve.halfZ],angle:_e.angle}}}),q=d(),he=[...N,...Z,...A,...C],Te=tn.toArray(),we=Cm(i.position.toArray(),Lt.toArray(),Te,q,he,{ground:Yn}),Se=we.impact,ye=Se.hit,ce=s.doors.find(_e=>_e.private&&!_e.breached&&Se.solid===_e.closedSolid&&Math.hypot(Se.point[0]-_e.handle.x,Se.point[1]-_e.handle.y,Se.point[2]-_e.handle.z)<.28),fe=17;if(ce&&s.breachDoor(ce.id))fe=23,$e("Fechadura rompida.");else if(ye?.actor&&ye.actor.role!=="ally")Wi(ye.actor),ei(ye.actor,Math.round(tf(Se.point[1]-ye.y)*(v?1.45:1)),u),fe=ye.actor.role==="police"?34:23,Ci=.21,$e(ye.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(ye?.rider||ye?.windowCar){let _e=ye.rider??ye.windowCar;Wi(_e),ye.windowCar&&Wu(_e,Se.point);let[Ve,dt]=_e.spec.seats?.[0]??[-.42,0],wt={oriented:{center:[_e.x+Ve*Math.cos(_e.angle)+dt*Math.sin(_e.angle),_e.root.position.y+(_e.seatHip??.54)+.66,_e.z-Ve*Math.sin(_e.angle)+dt*Math.cos(_e.angle)],half:[.26,.28,.29],angle:_e.angle}};ch(_e)&&(ye.rider||Ea(Te,we.direction,[],[wt],52).hit)&&gs(_e,ye.rider?v?75:50:100,u)&&(Ci=.21)}else ye?.car?(Wi(ye.car),ye.car.lastHitBy=u,h.sparks(Se.point[0],Se.point[1],Se.point[2],5,2.2),bf(ye.car,Se.point)?$e("Pneu furado."):ye.car.integrity=Math.max(0,ye.car.integrity-3),Ci=.16):c&&Wi(li);Hi(fe,u,y);for(let _e of j)["civilian","resident"].includes(_e.role)&&ie(_e,u)<17&&(_e.fear=Math.max(_e.fear,4.8));a.emit(Te,Se,{mark:ye?.car?!0:void 0,attach:ye?.car?.root})}function f0(c,y){let v=U;Fn(v,c,{throttle:y.y,steer:-y.x,brake:y.brake},r,mf());let N=v.bumpedVehicle;if(N&&S.includes(N)&&N.driver&&(N.lastProvoked??-100)<Ee-20&&(N.lastProvoked=Ee,Math.random()<.035&&Math.abs(N.speed)<2.2&&N.kind==="car")){let C=G(N);C&&gs(N,0,u)&&(C.brawl=8,C.fear=0)}ge>1.15&&Math.abs(v.speed)>2.4&&(ne=wn(ne,v.angle,c*2.3))}function d0(c,y){if(u.ragdoll&&(Gc(u,c,l(u),(Te,we)=>!Rn(Te,we,.25,f(u))),u.ragdoll||u.health<=0))return;let v=Math.min(1,Math.hypot(y.x,y.y)),N=u.health>0&&!Qn&&u.trip<.12,C=N?v*(y.aim?2.1:y.run?7.4:4.2):0,Z=ne+Math.atan2(-y.x,y.y||0);y.jump&&N&&u.lift===0&&(ai=4.18),(ai!==0||u.lift>0)&&(u.lift=Math.max(0,u.lift+ai*c-11.8*c*c),ai=u.lift>0?ai-23.6*c:0);let A=1-Math.exp(-c*(C>.02?19:27));u.vx+=(Math.sin(Z)*C-u.vx)*A,u.vz+=(Math.cos(Z)*C-u.vz)*A;let q=Uc(u,(u.vx+u.pushX)*c,(u.vz+u.pushZ)*c,f(u),m(u),j);u.pushX*=Math.exp(-c*6.2),u.pushZ*=Math.exp(-c*6.2),u.trip=Math.max(0,u.trip-c),kn<=0&&N&&(y.aim||v>.05)&&(u.angle=wn(u.angle,y.aim?ne:Z,c*11));let he=u.model;if(p(u),he.root.position.set(u.x,l(u)+u.lift,u.z),u.alighting){let Te=u.alighting;Te.t+=c;let we=_t(Te.t/.4,0,1),Se=we*we*(3-2*we);he.root.position.lerpVectors(Te.from,he.root.position.clone(),Se),he.root.position.y+=Math.sin(Math.PI*we)*.1,we>=1&&(u.alighting=null)}if(he.shadow.visible=u.health>0&&u.lift<.06,u.health<=0){u.deadTime=(u.deadTime??0)+c;let Te=_a(he,u.deadTime,-1);he.root.rotation.set(Te,u.angle,0),he.root.position.y+=Math.abs(Math.sin(Te))*.31;return}he.root.rotation.set(Math.min(1.25,u.trip*2.7),u.angle,0),rr(he,c,u.trip>.05?0:Math.min(7.5,q/c),ue&&(y.aim||D>0)&&kn<=0,ue&&kn<=0,0,y.aim?be:0),(kn>0||y.aim&&!ue)&&ef(he,{aim:y.aim,punch:kn,pitch:be,walking:q>.01,hand:mo}),q&&V<=0&&u.lift===0&&(Oe.step(),V=y.run?.27:.41)}function Af(c){let y=Math.sin(c.angle),v=Math.cos(c.angle),N=c.halfWidth+.68;return[N,-N].flatMap(C=>[.28,-.82,1.18].map(Z=>({x:c.x+v*C+y*Z,z:c.z-y*C+v*Z}))).find(C=>On(C,C.x,C.z,s.walkSolids(C.x,C.z,0),W,[],.36))}function p0(c,y,v){let N=Math.sin(y.angle),C=Math.cos(y.angle);if(!v)return null;if(![.28,.5,.73,.92].some(he=>{let Te=c.x+(v.x-c.x)*he,we=c.z+(v.z-c.z)*he,Se=Te-y.x,ye=we-y.z;return Math.abs(Se*N+ye*C)<y.halfLength+.35&&Math.abs(Se*C-ye*N)<y.halfWidth+.35}))return v;let A=((c.x-y.x)*N+(c.z-y.z)*C>0?1:-1)*(y.halfLength+.8),q=(v.x-y.x)*C-(v.z-y.z)*N;return{x:y.x+N*A+C*q,z:y.z+C*A-N*q}}function m0(c){let y=c.officer,v=c.car,N=Math.sin(v.angle),C=Math.cos(v.angle),Z=v.halfLength+.7,A=Af(v)??[{x:v.x-N*Z,z:v.z-C*Z},{x:v.x+N*Z,z:v.z+C*Z}].find(q=>On(q,q.x,q.z,s.walkSolids(q.x,q.z,0),W,j,.37));return A?(y.seated=!1,y.model.root.visible=!0,y.x=A.x,y.z=A.z,y.floorY=0,p(y),y.angle=v.angle,c.park=null,y.exitAnim=.38,y.model.shadow.visible=!0,v.doorTime=.65,c.mode="foot",!0):!1}function Ef(c,y){let v=W.includes(y)?y:null;if(ie(c,y)>18||ie(c,y)<.5||(v?v.integrity<=0:!hn(y)))return!1;let N=l(c),C=(v?v.root.position.y:l(y))+(y===u?u.lift:0)+(v?1.08:1.27),Z=d();if(!ro([c.x,N+1.35,c.z],[y.x,C,y.z],Z))return!1;c.angle=Math.atan2(y.x-c.x,y.z-c.z),c.model.root.position.set(c.x,N,c.z),c.model.root.rotation.y=c.angle;let A=Math.atan2(N+1.42-C,Math.max(.4,ie(c,y)));rr(c.model,0,0,!0,!0,0,A),c.model.muzzle.getWorldPosition(Wt);let q=Ee*14+c.x,he=Math.sin(q)*(c.role==="ally"?.35:.48),Te=y.x+Math.cos(c.angle)*he,we=y.z-Math.sin(c.angle)*he;zt.set(Te,C+Math.cos(q*1.4)*.32,we);let Se=Math.min(24,Wt.distanceTo(zt)+1.65),ye=Ye.subVectors(zt,Wt).normalize(),ce=Da(c);v&&ce.push({actor:v,y:0,bounds:[y.x-.93,.3,y.z-1.02,y.x+.93,1.52,y.z+1.02]});let fe=Wc(Wt.toArray(),ye.toArray(),Z,ce,Se,{ground:Yn});if(c.role==="ally"&&(y.role==="police"||dr(y)||fe.hit?.actor.role==="police")&&a0(c,fe.hit?.actor),fe.hit&&(fe.hit.actor===y||fe.hit.actor.role==="civilian")){let _e=c.role==="police"&&y===u?.62:.83;if(v&&fe.hit.actor===v){let Ve=[Wt.x+ye.x*fe.distance,Wt.y+ye.y*fe.distance,Wt.z+ye.z*fe.distance];n0(v,Ve[1]-v.root.position.y,c,Ve)}else ei(fe.hit.actor,Math.round(tf(Wt.y+ye.y*fe.distance-fe.hit.y)*_e),c)}zt.copy(Wt).addScaledVector(ye,fe.distance),c.role!=="ally"&&(y===u||y===U||Wp(Wt,zt,U??u))&&Wi(c),a.emit(Wt.toArray(),fe,{enemy:!0});for(let _e of j)["civilian","clerk"].includes(_e.role)&&!(_e.brawl>0)&&ie(_e,c)<16&&(_e.fear=Math.max(_e.fear,4.5));return c.attack=(c.role==="police"?.91:1.07)+(Math.sin(q)+1)*.18,ie(c,U??u)<31&&Oe.shot(),!0}function hh(c,y,v){let N=ie(c,y);return c.stagger>0||c.exitAnim>0?{speed:0,aim:!1}:N<17&&c.attack<=0&&Ef(c,y)||c.attack>.28&&N<15.5?(c.angle=wn(c.angle,Math.atan2(y.x-c.x,y.z-c.z),v*12),{speed:0,aim:!0}):{speed:N>3.3||Math.abs(l(c)-l(y))>1.8?uh(c,y,4.4,v):0,aim:N<12}}let Na=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function Cf(c){let y={kind:"car",shape:c.car.shape};return so(y,c.route,c.startShift),y}function za(c,y=!0){let{car:v,officer:N}=c;if(y){let C=Cf(c);oi(v,C),v.driver=C.driver}else{let C={};so(C,c.route),v.driver=C.driver;let Z=Math.sin(v.angle),A=Math.cos(v.angle),q=1/0;v.driver.route.forEach((he,Te)=>{let we=he.x-v.x,Se=he.z-v.z,ye=Math.hypot(we,Se)+(we*Z+Se*A<0?16:0);ye<q&&(q=ye,v.driver.next=Te)})}c.mode="patrol",c.retaliation=null,c.stop=null,c.departing=!1,N.seated=!0,N.model.root.visible=!1,pi(v,0)}function g0(c,y){let v=c.officer,N=Na[c.beat%Na.length];ie(v,N)<1.1&&(c.beat++,N=Na[c.beat%Na.length]),c.intent=Tn(v,N,1.35,y)}function x0(c,y){let v=c.car,N=v.shape,C=q=>cn.reduce((he,Te)=>Math.abs(he-q)<Math.abs(Te-q)?he:Te),Z=null,A=1/0;for(let q=0;q<16;q++){let he=q/16*Math.PI*2,Te=8.5+q%3*1.2,we=y.x+Math.sin(he)*Te,Se=y.z+Math.cos(he)*Te,ye=C(we),ce=C(Se),fe=Math.abs(we-ye),_e=Math.abs(Se-ce),Ve=fe<5.2&&_e>11,dt=_e<5.2&&fe>11;if(!Ve&&!dt)continue;let wt=Ve?fe:_e;if(wt<2.6||wt>4.5)continue;let Gt=Ve?Se>v.z?1:-1:we>v.x?1:-1,gn=Ve?Gt>0?0:Math.PI:Gt>0?Math.PI/2:-Math.PI/2,An={x:Ve?ye+Math.sign(we-ye)*3.7:we,z:dt?ce+Math.sign(Se-ce)*3.7:Se,angle:gn,kind:"car",shape:N};if(!lr(An.x,An.z,An.angle,N)||!Us(An,r,W,v)||j.some(En=>hn(En)&&ie(En,An)<2.6))continue;let ci=ie(v,An)+Math.abs(wt-3.7)*3;ci<A&&(A=ci,Z=An)}return Z}function _0(c,y){vt-=c,vt<=0&&Pe>0&&(Dt=Ia(y),Dt&&(gt={x:y.x,z:y.z,y:l(y),health:100,seated:!1,angle:y.angle}),vt=.24);let v=Pe>0&&u.health>0?Dt?y:gt:null,N=Zc(Pe);Pe>0&&(Pe=Math.max(0,Pe-c*(Dt?.23:1.1)),Pe===0&&(gt=null,Dt=!1,$e("Voc\xEA despistou a pol\xEDcia."))),Zn&&((Zn.time-=c)<=0||ie(Zn.unit.car,Zn.location)<10)&&(Zn=null),O.forEach((C,Z)=>{let A=C.officer,q=C.car;C.retaliation&&!hn(C.retaliation)&&(C.retaliation=null);let he=Zn?.unit===C?Zn.location:null,Te=C.retaliation,we=he??Te??v,Se=!!(he||Te||v&&Z<N);if((q.burning||q.wrecked)&&A.health>0&&(C.mode="foot",A.seated=!1),A.health<=0){C.mode="disabled",q.driver=null,A.down<=0&&ie(A,y)>13&&W.every(ce=>ce===q||ie(ce,C.berth)>3.5)&&(De(A),oi(q,C.berth),pi(q,0),C.mode="ready",C.retaliation=null);return}if(C.mode==="patrol"&&(Se||q.integrity<=0)&&(C.mode="driving",q.driver=null,C.stop=null,C.stall=0,C.departing=!1),C.mode==="patrol")return;if(Te&&(C.mode==="ready"||C.mode==="boarding"||C.mode==="reboard")&&(C.mode="foot"),C.mode==="ready"&&Se){let ce=q.integrity>0&&ie(A,q)<22;C.mode=ce?"boarding":"foot",C.stop=null,C.stall=0,C.departing=ce&&ie(q,C.berth)<2}if(C.mode==="boarding"||C.mode==="reboard"){C.mode==="boarding"&&!Se&&(C.mode="reboard"),C.mode==="reboard"&&Se&&(C.mode="boarding");let ce=Af(q);if(q.burning||q.wrecked||q.integrity<=0||ie(A,q)>45)C.mode=Se?"foot":"ready";else if(ce&&ie(A,ce)<.63)A.seated=!0,A.model.root.visible=!1,q.doorTime=.6,C.mode==="reboard"?za(C,!1):C.mode="driving";else if(ce){let fe=p0(A,q,ce),_e=On(A,fe.x,fe.z,s.walkSolids(fe.x,fe.z,0),W,[],.34)?fe:ce;C.intent=Tn(A,_e,C.mode==="boarding"?3.75:2.35,c)}}if(C.mode==="driving"){if(!Se&&q.integrity>0&&!C.departing){za(C,!1);return}let ce=we?ie(q,we):1/0;C.parkWait=Math.max(0,(C.parkWait??0)-c),C.park&&(!we||ie(C.park,we)>17)&&(C.park=null),!C.park&&Se&&we&&ce<46&&C.parkWait<=0&&!C.departing&&(C.park=x0(C,we),C.parkWait=C.park?0:1.2);let fe=C.park?ie(q,C.park)<2.7:ce<12.7;!Se||q.integrity<=0||C.stall>8.2&&!C.maneuver||fe&&!(we===U&&Math.abs(U.speed)>6)||C.park&&ce<6.5?(Fn(q,c,{throttle:0,steer:0,brake:!0},r,W),Math.hypot(q.vx,q.vz)<2.7&&!m0(C)&&q.integrity>0&&Fn(q,c,{throttle:.21,steer:.26,brake:!1},r,W)):jc(C,C.park??we,r,W,j,c)}else if(C.mode==="foot")Se&&we===gt?C.intent=Tn(A,we,3.45,c):Se?C.combat=hh(A,we,c):q.integrity>0&&ie(A,q)<40?C.mode="reboard":(C.mode="ready",ie(y,q)>25&&W.every(ce=>ce===q||ie(ce,C.berth)>3.5)&&(oi(q,C.berth),pi(q,0)));else if(C.mode==="ready"){let ce=Z<2&&ie(y,A)>24&&ie(y,C.berth)>19&&ie(A,C.berth)<30?Cf(C):null;ce&&Hc(ce,W.filter(fe=>fe!==q),y,r)?za(C):g0(C,c)}let ye=C.mode==="driving"||Se&&C.mode==="foot";q.lamps.forEach((ce,fe)=>{ce.visible=!ye||Math.floor(Ee*8+fe)%2===0}),ye&&nn<=0&&ie(y,q)<42&&(Oe.siren(),nn=1.35)})}let yo=(c,y,v)=>({x:c.x+Math.cos(c.angle)*y+Math.sin(c.angle)*v,z:c.z-Math.sin(c.angle)*y+Math.cos(c.angle)*v}),Rf=!1;function y0(c,y){for(let v of W){let N=ie(v,y)<60,C=v.kind==="bike",Z=v.root.position.y,A=v.lastImpact??0;if(v.impact>3.4&&v.impact>A+1.5){let ye=(v.lastSpeed??v.speed)>=0?1:-1,ce=yo(v,0,ye*(v.halfLength??1.1));N&&h.sparks(ce.x,Z+.45,ce.z,8+Math.round(v.impact*2),3+v.impact*.3),C||(ye>0?v.damageFront+=v.impact*1.7:v.damageRear+=v.impact*1.7)}v.lastImpact=v.impact,v.lastSpeed=v.speed;for(let ye of v.bumpers??[]){let ce=ye.end>0?v.damageFront:v.damageRear;if(ye.state===0&&ce>22&&(ye.state=1),ye.state===1&&ce>48&&(ye.state=2,t.attach(ye.mesh),ye.velocity.set(v.vx*.5+(Math.random()-.5),1.4,v.vz*.5+(Math.random()-.5)),ye.spin=(Math.random()-.5)*5),ye.state===2){let fe=ye.mesh;fe.position.addScaledVector(ye.velocity,c),ye.velocity.y-=9.8*c;let _e=Yn(fe.position.x,fe.position.z)+.15;fe.position.y<_e?(fe.position.y=_e,ye.velocity.y=0,ye.velocity.x*=Math.exp(-c*5),ye.velocity.z*=Math.exp(-c*5),ye.spin*=Math.exp(-c*5),fe.rotation.x+=(0-fe.rotation.x)*Math.min(1,c*8),fe.rotation.z+=(0-fe.rotation.z)*Math.min(1,c*8)):fe.rotation.x+=ye.spin*c*.6,fe.rotation.y+=ye.spin*c}}if(v.wrecked){v.wreckClock=(v.wreckClock??0)+c,N&&v.wreckClock<30&&Math.random()<c*5&&h.engineSmoke(v.x,Z+1.1,v.z,!0);continue}let q=yo(v,0,C?.35:v.halfLength-.75),he=Z+(C?.65:v.spec.belt+.1);if(v.integrity<45&&N&&Math.random()<c*(v.integrity<22?14:6)&&h.engineSmoke(q.x,he,q.z,v.integrity<22),!v.burning&&v.integrity<=12){v.speed=0,v.vx=0,v.vz=0,v===U&&Li(!0);for(let ye of[...v.passengers??[]])mr(ye);(v.driver||dr(v)?.officer.seated)&&gs(v,0,v),v.driver=null,v.burning=!0,v.fire=C?4.5:7,ie(v,u)<4&&$e("O ve\xEDculo pegou fogo! Saia j\xE1.")}if(v.burning){if(v.fire-=c,v.integrity=Math.min(v.integrity,12),N)for(let ye=0;ye<2;ye++)h.flame(q.x,he,q.z,C?.7:1.1);v.fire<=0&&v0(v);continue}let Te=Math.hypot(v.vx,v.vz),we=Math.abs(v.vx*Math.cos(v.angle)-v.vz*Math.sin(v.angle)),Se=v===U&&Rf&&Te>8;if(Te>4&&(we>2.6||Se)){let ye=-(v.wheelbase??1.5)/2,ce=C?[yo(v,0,ye)]:[yo(v,-(v.halfWidth-.17),ye),yo(v,v.halfWidth-.17,ye)];v.skid??=ce.map(fe=>({...fe})),ie(v.skid[0],ce[0])>.45&&(ce.forEach((fe,_e)=>{h.skid(v.skid[_e].x,v.skid[_e].z,fe.x,fe.z,Yn(fe.x,fe.z)),v.skid[_e]={...fe}}),N&&we>3.5&&h.tireSmoke(ce[0].x,Z+.2,ce[0].z))}else v.skid=null}}function v0(c){let y={x:c.x,z:c.z},v=c.root.position.y;c===U&&(Li(!0),ei(u,100,y));for(let N of[...c.passengers??[]])mr(N),ei(N,100,y);(c.driver||dr(c)?.officer.seated)&&gs(c,100,y),c.burning=!1,c.wrecked=!0,c.integrity=0,c.driver=null,c.wreckClock=0,c.rider&&(c.rider.root.visible=!1),cm(c),h.explosion(c.x,v,c.z),Oe.explosion(),ie(c,U??u)<25&&(ms=.35);for(let N of[...j,u]){if(N.seated||N===u&&U)continue;let C=ie(N,y);if(C>7.5)continue;let Z=1-C/7.5,A=Math.max(.2,C),q=(N.x-y.x)/A,he=(N.z-y.z)/A;kc(N,q*(4+8*Z),3+5*Z,he*(4+8*Z)),ei(N,Math.round(115*Z),y)}for(let N of W){if(N===c||N.wrecked)continue;let C=ie(N,y);if(C>7)continue;let Z=1-C/7,A=Math.max(.2,C);N.integrity=Math.max(0,N.integrity-48*Z),N.vx+=(N.x-y.x)/A*9*Z/(N.handling?.mass??1),N.vz+=(N.z-y.z)/A*9*Z/(N.handling?.mass??1),N.damageFront+=18*Z,N.damageRear+=18*Z}for(let N of j)ie(N,y)<35&&["civilian","resident"].includes(N.role)&&(N.fear=Math.max(N.fear,6));c.lastHitBy===u&&Hi(28,u)}function M0(c){let y=cn.reduce((N,C)=>Math.abs(N-c.x)<Math.abs(C-c.x)?N:C),v=cn.reduce((N,C)=>Math.abs(N-c.z)<Math.abs(C-c.z)?N:C);return Math.min(Math.abs(c.x-y),Math.abs(c.z-v))>3.5?null:Math.abs(c.x-y)<Math.abs(c.z-v)?{x:y+(c.x>=y?4.4:-4.4),z:c.z}:{x:c.x,z:v+(c.z>=v?4.4:-4.4)}}function b0(c){if(H.wait-=c,!H.target&&H.wait<=0){H.wait=1;let ce=x.filter(fe=>fe.kind==="car"&&fe!==U&&!fe.driver&&!fe.burning&&!fe.towed&&!fe.shopping&&!mn.has(fe)&&(fe.wrecked||fe.abandoned>18&&fe.leftInLane));ce.sort((fe,_e)=>ie(fe,F)-ie(_e,F));for(let fe of ce){let _e=fe.halfLength+F.halfLength+.14,Ve=W.filter(wt=>wt!==F&&wt!==fe),dt=[1,-1].map(wt=>({x:fe.x+Math.sin(fe.angle)*_e*wt,z:fe.z+Math.cos(fe.angle)*_e*wt,angle:fe.angle+(wt<0?Math.PI:0)})).filter(wt=>Us({...wt,kind:"car",shape:F.shape},r,Ve));if(dt.sort((wt,Gt)=>ie(wt,F)-ie(Gt,F)),!!dt.length){Object.assign(H,{target:fe,hitch:dt[0],stop:null,maneuver:null,stall:0,engage:0});break}}}let y=H.target,v=()=>{if(!y)return .35;if(H.unload>0)return 1-H.unload/2.5<.45?-.5:.35;if(H.engage>0&&!H.carrying){let ce=H.engage/2.2;return ce<.38||ce<.58?-.5:.12}return H.carrying?.12:.35};if(F.armAngle+=(v()-F.armAngle)*Math.min(1,c*5),!y)return;if(y===U||y.driver||y.burning||y.towed){y.towTilt=0,Object.assign(H,{target:null,hitch:null,carrying:!1,unload:0,engage:0});return}let N=H.carrying?-.14:H.engage>1.3?-.14*Math.min(1,(H.engage-1.3)/.9):0,C=H.unload>0&&H.unload<1.4?0:N;if(y.towTilt=(y.towTilt??0)+(C-(y.towTilt??0))*Math.min(1,c*4),H.unload>0){H.unload-=c,H.unload<=0&&(y.towed=!0,y.root.visible=!1,y.x=480,y.z=480,y.abandoned=0,y.towTilt=0,y.steer=0,Object.assign(H,{target:null,hitch:null,carrying:!1,unload:0,engage:0,wait:2.5,stop:null}));return}let Z=W.filter(ce=>ce!==y),A=ie(F,H.hitch);if(!H.carrying&&A<3.4&&Math.abs(y.speed)<.7){H.align=(H.align??0)+c;let ce=H.hitch,fe=Math.abs(Math.atan2(Math.sin(F.angle-ce.angle),Math.cos(F.angle-ce.angle))),_e=ie(F,ce);if((_e>.12||fe>.06)&&H.align<7){let Ve=Math.min(_e,c*2.4),dt={x:F.x+(ce.x-F.x)/Math.max(_e,.001)*Ve,z:F.z+(ce.z-F.z)/Math.max(_e,.001)*Ve,angle:wn(F.angle,ce.angle,c*2.4),kind:"car",shape:F.shape};Us(dt,r,Z,F)&&Object.assign(F,{x:dt.x,z:dt.z,angle:dt.angle}),F.vx=F.vz=F.speed=0;return}Fn(F,c,{throttle:0,steer:0,brake:!0},r,Z),H.engage+=c,H.engage>=2.2&&(H.carrying=!0,H.stop=null,H.maneuver=null,H.stall=0,H.prevAngle=y.angle);return}H.carrying||(H.engage=0,H.align=0);let{approach:q,gate:he,bay:Te}=qn,we=F.z>57&&Math.abs(F.x-he.x)<3.4;if(H.carrying&&F.z>Te.z-1.2&&we){F.speed=F.vx=F.vz=0,y.speed=y.vx=y.vz=0,H.unload=2.5;return}let Se=H.carrying?we||ie(F,q)<4?Te:q:F.z>60.2?q:H.hitch,ye=ie(F,Se);if(ye<15||F.z>60||Se.x>62){let ce=Fs(F,Se,Math.min(H.carrying?5:7.5,ye*.85));Fn(F,c,ce,r,Z)}else jc(H,Se,r,Z,j,c);if(H.carrying){let ce=y.halfLength+F.halfLength+.14,fe=Math.atan2(F.x-y.x,F.z-y.z),_e=F.x-Math.sin(fe)*ce,Ve=F.z-Math.cos(fe)*ce;Ti(_e,Ve,fe,r,y.shape)&&Object.assign(y,{x:_e,z:Ve,angle:fe});let dt=wn(0,fe-(H.prevAngle??fe),1)/Math.max(c,.001);H.prevAngle=fe,y.steer+=(_t(dt*.45,-1,1)-y.steer)*Math.min(1,c*8),y.vx=y.vz=0,y.speed=F.speed}}function If(c,y){for(let C of R)C!==U&&C.stolen&&!C.towed&&(C.abandoned+=c);b0(c);let v={player:U,vehicles:mf(),keepToStreet:!0},N=O.filter(C=>C.mode==="patrol").map(C=>C.car);for(let[C,Z]of mn){if(!U||C.wrecked||C.burning){for(let A of[...C.passengers])mr(A);mn.delete(C);continue}C.passengers?.length&&(ie(C,U)>8?jc(Z,U,r,W,j.filter(A=>!A.seated),c):Fn(C,c,{throttle:0,steer:0,brake:!0},r,W))}Am([...S.filter(C=>!mn.has(C)&&!C.shopping&&!C.towed&&!(H.carrying&&H.target===C)),...N],v,j,r,c,w,s.signals),R.forEach((C,Z)=>{if(C.towed){let{x:A,z:q,angle:he}=[..._,...T][Z];ie(y,{x:A,z:q})>40&&Hc({...C,x:A,z:q,angle:he},v.vehicles.filter(Te=>Te!==C),y,r)&&(oi(C,{x:A,z:q,angle:he}),C.stolen=!1,C.towed=!1,C.root.visible=!0)}});for(let C of R)mn.has(C)||H.carrying&&H.target===C||C.towed||(C!==U&&Math.hypot(C.vx,C.vz)>.06?Fn(C,c,{throttle:0,steer:0,brake:!0},r,v.vehicles):C!==U&&(C.impact=Math.max(0,C.impact-c*21)));for(let C of W){if(C.routeIndex>=0&&C!==U&&!mn.has(C)&&!C.shopping&&!(H.carrying&&H.target===C)){C.abandoned+=c;let Z=C.towed&&C.abandoned>12,A=(C.driver?.stuck??0)>24;if((Z||A)&&!C.burning&&ie(y,C)>17){let q={};if(so(q,C.routeIndex,Math.floor(Ee)%7),q.kind=C.kind,q.shape=C.shape,Hc(q,v.vehicles.filter(he=>he!==C),y,r)){Object.assign(C,q,{towed:!1}),C.root.visible=!0;let he=C.ownDriver;he&&!he.seated&&!he.riding&&he.role==="civilian"&&ie(he,y)>20&&(De(he),he.seated=!0,he.model.root.visible=!1)}}}C!==U&&C.impact>5&&ie(y,C)<18&&rt<=0&&(Oe.crash(),rt=.32),!C.towed&&(pi(C,c,C.steer),C.rider&&(C.rider.root.visible=!!C.driver&&C.integrity>0,C.rider.root.visible&&Ou(C.rider,C)))}if(U){if(U.impact>4.1&&rt<=0){Oe.crash(),ms=.24,rt=.36;let C=U,Z=C.impact;$e(C.integrity<43?"Motor avariado.":"Colis\xE3o."),U&&C.kind==="bike"&&Z>10.5&&(ei(u,Math.min(40,Math.round(Z*1.6))),C.integrity=Math.max(0,C.integrity-4),Li(!0),$e("Voc\xEA caiu da moto."))}if(U&&U.integrity<=0&&Math.hypot(U.vx,U.vz)<3){let C=_o(U);Li(!0),$e(C+" sem condi\xE7\xF5es de rodar.")}}}function Tn(c,y,v,N){if(!y)return 0;c.walkIntent=y;let C=f(c),Z=ie(c,y);if(Z<.13)return 0;let A=s.interiorAt(c.x,c.z,l(c)),q=s.interiorAt(y.x,y.z,y.y??l(y));if(!A&&!q)return o(c,y,v,N);let he=y,Te=(ye,ce)=>[.24,.46,.68,.88,1].every(fe=>Rn(ye.x+(ce.x-ye.x)*fe,ye.z+(ce.z-ye.z)*fe,.29,C));if(!Te(c,y)){let ye=1/0;for(let ce of C)if(!(ie(c,ce)>Math.hypot(ce.w,ce.d)*.5+3.1))for(let fe of[-1,1])for(let _e of[-1,1]){let Ve={x:ce.x+fe*(ce.w*.5+.44),z:ce.z+_e*(ce.d*.5+.44)},dt=ie(c,Ve),wt=ie(Ve,y);if(dt<.3||dt>4.5||!Te(c,Ve))continue;let Gt=dt+wt+(wt>Z+.25?1.7:0);Gt<ye&&(ye=Gt,he=Ve)}}let we=Math.atan2(he.x-c.x,he.z-c.z);c.angle=wn(c.angle,we,N*8.5);let Se=Math.min(v*N,ie(c,he));return pa(c,c.x+Math.sin(we)*Se,c.z+Math.cos(we)*Se,.26,C)?v:0}let xs={x:NaN,z:NaN,angle:0};function Pf(c,y){let v=l(c);if(s.interiorAt(c.x,c.z,v))return{x:c.x,z:c.z,y:v};let N=Math.floor((Math.sqrt(1+y)-1)*.75),C=(y%2===0?1:-1)*(1.05+y%5*.66),Z=(W.includes(c)?c.halfLength+3.2:3.1)+N*1.1,A=c===u?xs.angle:c.angle,q=Math.sin(A),he=Math.cos(A);for(let[Te,we]of[[Z,C],[Z,C*.38],[Z,0],[1.6,0],[0,C*.5]]){let Se=c.x-q*Te+he*we,ye=c.z-he*Te-q*we;if(On(c,Se,ye,s.walkSolids(Se,ye,v),W,[],.44))return{x:Se,z:ye,y:v}}return{x:c.x,z:c.z,y:v}}function uh(c,y,v,N){let C=s.interiorAt(c.x,c.z,l(c)),Z=s.interiorAt(y.x,y.z,y.y??l(y));if(C?.buildingId===Z?.buildingId&&Math.abs((C?.floor??0)-(Z?.floor??0))<1.1)return c.pursuitRoute=[],c.pursuitKey="",Tn(c,y,v,N);let A=(Z?.buildingId??"street")+":"+(Z?.floor??0);if(c.pursuitKey!==A){c.pursuitKey=A;let q=[],he=s.buildings.find(ye=>ye.id===C?.buildingId),Te=s.buildings.find(ye=>ye.id===Z?.buildingId),we=he?.units.find(ye=>Math.abs(ye.floor-C.floor)<.25),Se=Te?.units.find(ye=>Math.abs(ye.floor-Z.floor)<.25);he&&q.push(we?.inside,we?.entry,we?.outside,...[...we?.stairs??[]].reverse(),he.inside,he.entry,he.outside),Te&&q.push(Te.outside,Te.entry,Te.inside,...Se?.stairs??[],Se?.outside,Se?.entry,Se?.inside),c.pursuitRoute=q.filter(Boolean)}for(;c.pursuitRoute.length&&ie(c,c.pursuitRoute[0])<.66&&Math.abs(l(c)-(c.pursuitRoute[0].y??0))<.85;)c.pursuitRoute.shift();return Tn(c,c.pursuitRoute[0]??y,v,N)}function S0(c,y,v){let N=c.itinerary[0];return N?ie(c,N)<.58&&Math.abs(l(c)-(N.y??0))<1.1?(c.itinerary.shift(),0):Tn(c,N,y,v):0}function w0(c){let y=c.calling;c.calling=null,!(!y||c.health<=0)&&(Pe=Math.min(64,Math.max(Pe,0)+y.pressure*.7),gt={x:y.x,z:y.z,y:0,health:100,seated:!1,angle:0},Dt=!1,$e("Uma testemunha ligou para a pol\xEDcia."))}function T0(c,y){if(c.brawl-=y,c.health<35)return c.brawl=0,c.fear=6,{speed:0};let v=ie(c,u);if(v>16)return c.brawl=0,{speed:0};if(c.punchLand>0&&(c.punchLand-=y,c.punchLand<=0&&ie(c,u)<1.4&&u.health>0&&!u.ragdoll)){ei(u,6,c);let N=Math.max(.2,v);u.pushX+=(u.x-c.x)/N*2.4,u.pushZ+=(u.z-c.z)/N*2.4,Oe.punch(!0)}return U?{speed:0}:v>1.15?{speed:Tn(c,u,3.6,y)}:(c.angle=wn(c.angle,Math.atan2(u.x-c.x,u.z-c.z),y*10),c.attack<=0&&(c.punchT=lo,c.punchHand=1-(c.punchHand??0),c.attack=1.05,c.punchLand=hr),{speed:0})}function Lf(){let c=[];Ue&&!U&&hn(u)&&c.push(u);for(let y of $t)y.order==="dealer"&&hn(y)&&y.post&&ie(y,y.post)<7&&c.push(y);return c}let gr=()=>Object.keys(fr).filter(c=>it[c]>0);function A0(c){if(Ut-=c,!(Ut>0)&&(Ut=4+Math.random()*4,!!gr().length))for(let y of Lf()){if(j.some(C=>C.buyer?.seller===y))continue;let v=S.find(C=>C.kind==="car"&&C.driver&&C.ownDriver?.seated&&!mn.has(C)&&!C.burning&&Math.abs(C.speed)<2&&ie(C,y)<26&&(C.visitTime??-100)<Ee-65);if(v&&Math.random()<.12){let C=Math.cos(v.angle),Z=-Math.sin(v.angle),A=[-1,1].map(q=>({x:v.x+C*q*2.4,z:v.z+Z*q*2.4})).find(q=>lr(q.x,q.z,v.angle,v.shape)&&Us({...q,angle:v.angle,kind:v.kind,shape:v.shape},r,W.filter(he=>he!==v)));if(A){Object.assign(v,A);let q=v.ownDriver,he=v.driver;if(gs(v,0,y)){v.shopping=!0,v.visitTime=Ee,v.speed=v.vx=v.vz=0,q.shoppingTrip={car:v,route:he},q.fear=0,q.buyer={seller:y,wait:0};continue}}}let N=j.find(C=>C.role==="civilian"&&hn(C)&&C.fear<=0&&!C.buyer&&!C.calling&&!(C.brawl>0)&&!C.itinerary.length&&ie(C,y)>4&&ie(C,y)<38&&(C.boughtAt??-99)<Ee-45);N&&(N.buyer={seller:y,wait:0})}}function E0(c,y){let v=c.buyer,N=v.seller;if(!Lf().includes(N)||!gr().length)return c.buyer=null,0;if(ie(c,N)>1.3)return Tn(c,N,1.6,y);if(c.angle=wn(c.angle,Math.atan2(N.x-c.x,N.z-c.z),y*6),v.wait+=y,v.wait<1.6)return 0;let C=gr(),Z=C[Math.floor(Math.random()*C.length)],A=Math.min(it[Z],1+Math.floor(Math.random()*3)),q=A*fr[Z].retail;return it[Z]-=A,X+=q,c.buyer=null,c.boughtAt=Ee,N===u?($e("+R$ "+q+" \xB7 "+fr[Z].name),Oe.sale(),Ia(u)?Hi(16,u,!0):hf(u,12)):(N.sales=(N.sales??0)+q,ie(N,U??u)<30&&Oe.sale()),0}function C0(c,y){let v=d();for(let C of O){let Z=C.officer;!hn(Z)||C.retaliation||ie(Z,c)<26&&oo({...Z,ground:l(Z)},{...c,ground:l(c)},v,{range:26,fov:Math.PI*.9,eye:1.6,aim:1.2})&&(C.retaliation=c)}let N=O.map(C=>C.officer).filter(C=>hn(C)&&ie(C,c)<22&&O.some(Z=>Z.officer===C&&Z.retaliation===c)).sort((C,Z)=>ie(C,c)-ie(Z,c))[0];if(N){if(c.health>45)return c.fleeing=!1,hh(c,N,y);c.fleeing=!0;let C=Math.atan2(c.x-N.x,c.z-N.z),Z={x:c.x+Math.sin(C)*6,z:c.z+Math.cos(C)*6};return{speed:Tn(c,Z,4.6,y),aim:!1}}if(c.post&&!c.fleeing){let C=j.find(Z=>Z.buyer?.seller===c);if(c.offerDelay=(c.offerDelay??0)-y,!C&&c.offerDelay<=0&&gr().length){c.offerDelay=4+Math.random()*4;let Z=j.find(A=>hn(A)&&A.role==="civilian"&&!A.buyer&&!A.calling&&A.fear<=0&&ie(A,c.post)<6&&(A.boughtAt??-99)<Ee-30);Z&&Math.random()<.55&&(Z.buyer={seller:c,wait:0},C=Z)}if(C&&ie(C,c)>1.15&&ie(C,c.post)<6)return{speed:Tn(c,C,1.2,y),aim:!1};if(C)return{speed:0,aim:!1};if(!c.dealerWalk||ie(c,c.dealerWalk)<.5||(c.dealerWalkTime-=y)<=0){let Z=Math.floor(Math.random()*8);c.dealerWalk=null,c.dealerWalkTime=5;for(let A=0;A<8;A++){let q=(Z+A)*Math.PI/4,he={x:c.post.x+Math.sin(q)*3.4,z:c.post.z+Math.cos(q)*3.4};if(ie(c,he)>1.5&&On(c,he.x,he.z,s.walkSolids(he.x,he.z,0),W,[],.48)){c.dealerWalk=he;break}}}if(c.dealerWalk)return{speed:Tn(c,c.dealerWalk,1.25,y),aim:!1}}return c.post&&ie(c,c.post)>.8?{speed:Tn(c,c.post,c.fleeing?3.2:2.6,y),aim:!1}:(c.fleeing=!1,{speed:0,aim:!1})}function R0(c,y=li){let v=$t.filter(N=>N.health>0&&(y?.role!=="ally"||N===y));if(!v.length){$e("Recrute algu\xE9m primeiro.");return}if(c==="toggle"&&(c=v.some(N=>N.order!=="wait"&&N.order!=="dealer")?"wait":"follow"),c==="undealer"){for(let N of v)if(N.order==="dealer"){N.order="follow",N.post=null,N.dealerWalk=null,N.commandTarget=null;for(let C of J)C.buyer?.seller===N&&(C.buyer=null)}$e("Ponto de venda desfeito.")}else if(c==="follow"||c==="wait"){for(let N of v)N.commandTarget=null,N.order=c,N.hold={x:N.x,z:N.z},N.post=null;$e(c==="wait"?"Gangue: esperem aqui.":"Gangue: comigo.")}else if(c==="attack"){let C=(y?.role!=="ally"?y:null)??O.map(Z=>Z.officer).filter(Z=>hn(Z)&&ie(Z,u)<30&&Pe>0).sort((Z,A)=>ie(Z,u)-ie(A,u))[0];if(C){for(let Z of v)Z.commandTarget=C;$e("Gangue: ataquem!")}else $e("Mire no alvo para a gangue atacar.")}else if(c==="dealer"){for(let N of v)N.order="dealer",N.dealerWalk=null,N.post={x:N.x,z:N.z},N.sales??=0,N.boardCar=null;$e(gr().length?"Ponto de venda montado.":"Ponto montado, mas falta estoque.")}Oe.bell()}function I0(c){if(Ne!=="pad"&&Ne!=="touch")return;let y=.2,v=null;for(let{actor:N,y:C}of Da(u)){if(N.role==="ally"||ie(N,u)>28)continue;ct.set(N.x,C+1.25,N.z).project(i);let Z=Math.hypot(ct.x,ct.y);ct.z<1&&Z<y&&(y=Z,v={x:ct.x,y:ct.y})}v&&(ne-=_t(v.x*2.2*c,-.04,.04),be-=_t(v.y*1.6*c,-.03,.03))}function fh(c,y,v=!1){j=J.filter(A=>ie(A,y)<(A.role==="civilian"?69:47)||A.role==="ally"||A.role==="police"||A===Bn);let N=new Set(j);for(let A of J)A.model.root.visible=N.has(A)&&!A.seated;let C=U?j:[...j,u],Z=new Map(j.map(A=>[A,{x:A.x,z:A.z}]));v||_0(c,y);for(let A of j){if(A.seated||(A.attack-=c,A.stagger=Math.max(0,A.stagger-c),A.injuryCooldown-=c,A.exitAnim=Math.max(0,A.exitAnim-c),A.exitAge+=c,A.ragdoll&&A.health>0&&Gc(A,c,l(A),(ce,fe)=>!Rn(ce,fe,.22,f(A)))))continue;if(A.health<=0){if(A.down=Math.max(0,A.down-c),A.deadTime+=c,A.ragdoll)Gc(A,c,l(A),(ce,fe)=>!Rn(ce,fe,.22,f(A))),A.drop&&A.drop.position.set(A.x,l(A)+.019,A.z);else if(A.deadTime<1.2){A.x+=A.pushX*c,A.z+=A.pushZ*c,A.pushX*=Math.exp(-c*5),A.pushZ*=Math.exp(-c*5);let ce=_a(A.model,A.deadTime,A.fallDir);A.model.root.rotation.set(ce,A.angle,0),A.model.root.position.set(A.x,l(A)+Math.abs(Math.sin(ce))*.31,A.z),A.drop&&A.drop.position.set(A.x+Math.sin(A.angle)*A.fallDir*1.25,l(A)+.019,A.z+Math.cos(A.angle)*A.fallDir*1.25)}if(A.drop){let ce=Math.min(.63,.32+(19-A.down)*.09);A.drop.rotation.z=A.angle,A.drop.scale.set(Math.max(.38,ce),Math.max(.24,ce*.68),1)}A.role!=="police"&&A.down<=0&&ie(A.home,y)>10&&ie(A,y)>10&&j.every(ce=>ce===A||!hn(ce)||ie(ce,A.home)>1.55)&&On(A,A.home.x,A.home.z,s.walkSolids(A.home.x,A.home.z,0),W,[],.42)&&(De(A),Q.includes(A)&&(A.seated=!0,A.model.root.visible=!1));continue}let q=0,he=!1,Te=O.find(ce=>ce.officer===A);if(Te)q=Te.combat?.speed??Te.intent??0,he=!!Te.combat?.aim,Te.intent=0,Te.combat=null;else if(A.role==="ally"&&A.order==="dealer")({speed:q,aim:he}=C0(A,c));else if(A.role==="ally")if(U&&A.order!=="wait"&&(!A.boardCar||A.boardCar===U&&ie(A,U)>12)&&s0(A),A.boardCar)q=r0(A,c);else if(pr(A.commandTarget)||pr(Bn))({speed:q,aim:he}=hh(A,pr(A.commandTarget)?A.commandTarget:Bn,c));else if(A.order==="wait")A.hold&&ie(A,A.hold)>.9&&(q=Tn(A,A.hold,3.4,c));else{let ce=Pf(y,$t.indexOf(A));(ie(ce,A)>1.25||Math.abs(l(A)-ce.y)>1.75)&&(q=uh(A,ce,U?6.1:4.45,c))}else if(A.brawl>0&&hn(u))({speed:q}=T0(A,c));else if(A.calling)A.calling.time-=c,A.angle=wn(A.angle,Math.atan2(A.x-A.calling.x,A.z-A.calling.z),c*4),A.calling.time<=0&&w0(A);else if(A.buyer&&A.fear<=0)q=E0(A,c);else if(A.shoppingTrip&&!A.buyer){let{car:ce,route:fe}=A.shoppingTrip;if(ce===U||ce.driver||ce.wrecked||ce.burning)A.shoppingTrip=null,ce.shopping=!1;else if(ie(A,ce)<ce.halfLength+.8){A.seated=!0,A.shoppingTrip=null,ce.shopping=!1,ce.driver=fe;continue}else q=Tn(A,ce,1.8,c)}else if(A.surrender<=0){let ce=A.path[A.next];if(A.role==="clerk"&&(ie(A,A.home)>.55?ce=A.home:A.angle=wn(A.angle,ie(u,A)<4?Math.atan2(u.x-A.x,u.z-A.z):A.home.angle,c*4)),A.role==="civilian"&&A.x<61&&!A.itinerary.length&&A.fear<=0&&k.length&&(A.scheduleClock-=c,A.scheduleClock<=0)){let fe=k[Math.floor(Math.abs(A.home.x*11+A.home.z*4+Ee))%k.length];ie(A,fe.outside)<38&&(A.itinerary=[fe.outside,fe.entry,fe.inside,fe.entry,fe.outside]),A.scheduleClock=36+Math.abs(A.home.x)%25}if(A.fear=Math.max(0,A.fear-c),A.fear>0&&ie(A,y)<15){let fe=Math.atan2(A.x-y.x,A.z-y.z);for(let _e of[0,.84,-.84,1.52,-1.52]){let Ve=fe+_e;if(pa(A,A.x+Math.sin(Ve)*3.7*c,A.z+Math.cos(Ve)*3.7*c,.22,f(A))){A.angle=wn(A.angle,Ve,c*8),q=3.7;break}}}else A.itinerary.length?q=S0(A,A.pace,c):ce&&(A.path.length&&ie(A,ce)<.54&&(A.next=(A.next+1)%A.path.length,ce=A.path[A.next]),q=Tn(A,ce,A.pace,c))}let we=Z.get(A);if(we&&A.exitAnim<=0&&(A.walkIntent||A.x!==we.x||A.z!==we.z||Math.abs(A.pushX)+Math.abs(A.pushZ)>.015)){let ce=P0(A,we,c),fe=ce?0:A.x-we.x+A.pushX*c,_e=ce?0:A.z-we.z+A.pushZ*c;ce&&(q=0),A.x=we.x,A.z=we.z;let Ve=Te?.mode==="boarding"?W.filter(Gt=>Gt!==Te.car):W,dt=C.filter(Gt=>Gt!==A&&ie(Gt,we)<3.6&&(!A.boardCar||Gt.role!=="ally")),wt=Uc(A,fe,_e,f(A),l(A)>1.25?[]:Ve,dt,.29);if(q>0&&wt<q*c*.55){let Gt=Math.atan2(fe,_e),gn=A.detourSide??(A.home.x<0?-1:1),An=f(A),ci=dt.filter(En=>ie(En,A)<4);for(let En of[gn*.65,gn*1.25,-gn*.65,-gn*1.25,gn*1.85,-gn*1.85]){let Nt=Gt+En,Ua=Math.sin(Nt),zf=Math.cos(Nt);if(On(A,A.x+Ua*.7,A.z+zf*.7,An,Ve,ci,.32)&&Uc(A,Ua*q*c,zf*q*c,An,Ve,ci,.29)>c*.2){A.detourSide=Math.sign(En),A.angle=wn(A.angle,Nt,c*7);break}}(A.stuckTime??0)>.7&&(A.repath=Math.min(A.repath??0,.12))}if(A.walkIntent&&ie(A,A.walkIntent)>.65&&ie(A,we)<c*.18?A.stuckTime=(A.stuckTime??0)+c:A.stuckTime=0,A.walkIntent=null,A.stuckTime>=3){let Gt=null;for(let gn=.55;gn<=4&&!Gt;gn+=.45)for(let An=0;An<16;An++){let ci=A.x+gn*Math.sin(An*Math.PI/8),En=A.z+gn*Math.cos(An*Math.PI/8);if(On(A,ci,En,s.walkSolids(ci,En,l(A)),Ve,[...dt,u],.34)){Gt={x:ci,z:En};break}}Gt&&(Object.assign(A,Gt),p(A),A.route=[],A.repath=0),A.stuckTime=0,Gt&&(A.hopTime=.36)}q>0&&(q=Math.min(q,ie(A,we)/c))}if(A.pushX*=Math.exp(-c*7.6),A.pushZ*=Math.exp(-c*7.6),!v&&A.injuryCooldown<=0){let ce=Df(A,2.8);if(ce){let{car:fe,speed:_e,vx:Ve,vz:dt}=ce,wt=nf(_e);A.pushX=_t(Ve,-8,8)*.59,A.pushZ=_t(dt,-8,8)*.59,wt>0&&(A.injuryCooldown=1.18,_e>6.5&&kc(A,Ve*.7,1.8+_e*.16,dt*.7),ei(A,wt),fe===U&&wt>12&&Hi(19))}}let Se=A.model;if(A.health<=0)continue;p(A),A.hopTime=Math.max(0,(A.hopTime??0)-c),Se.root.position.set(A.x,l(A)+A.exitAnim*.35+.28*Math.sin(Math.PI*A.hopTime/.36),A.z);let ye=A.stagger>0?Math.sin(A.stagger/.32*Math.PI)*.24:0;if(Se.root.rotation.set(A.exitAnim*.7-ye,A.angle,A.exitAnim*A.exitSide*.89+(A.stagger>0?Math.sin(A.stagger*9)*.12:0)),rr(Se,c,A.exitAnim>0?2.9:q,he,["police","ally"].includes(A.role),0,0,A.surrender>0),A.shoulder>0){let ce=1-A.shoulder/(A.shoulderLength||.6),fe=Math.sin(Math.PI*_t(ce,0,1))*(A.shoulderLength>.6?.95:.58);Se.body.rotation.y+=-A.shoulderSide*fe,Se.body.rotation.z+=A.shoulderSide*fe*.12}A.punchT>0?(A.punchT=Math.max(0,A.punchT-c),ef(Se,{punch:A.punchT,hand:A.punchHand??0})):A.calling?(Se.arms[0].rotation.set(-2.35,0,-.55),Se.forearms[0].rotation.set(-2.05,0,0)):A.order==="dealer"&&q<.1&&!he&&(Se.arms[0].rotation.set(-.4,0,-.25),Se.arms[1].rotation.set(-.4,0,.25),Se.forearms[0].rotation.set(-1.5,0,.4),Se.forearms[1].rotation.set(-1.5,0,-.4))}if(!v&&!U&&l(u)<1.15&&u.health>0&&u.lift<.3&&po<=0){let A=Df(u,2.35);if(A){let{speed:q,vx:he,vz:Te}=A,we=nf(q);u.pushX=_t(he,-13,13)*.73,u.pushZ=_t(Te,-13,13)*.73,u.trip=q>=5.3?Math.min(.82,.35+q*.021):.12,u.vx=u.vz=0,q>7&&kc(u,he*.65,1.6+q*.14,Te*.65),we>0&&(ei(u,we),Oe.crash(),$e("Voc\xEA foi atropelado.")),po=.87}}}function P0(c,y,v){if(c.yieldTime=Math.max(0,(c.yieldTime??0)-v),c.yieldPause=Math.max(0,(c.yieldPause??0)-v),c.shoulder=Math.max(0,(c.shoulder??0)-v),!["civilian","resident"].includes(c.role)||c.fear>0||c.exitAnim>0)return!1;let N=Math.sin(c.angle),C=Math.cos(c.angle),Z=null,A=1/0;for(let fe of j){if(fe===c||!hn(fe)||!["civilian","resident"].includes(fe.role))continue;let _e=fe.x-c.x,Ve=fe.z-c.z,dt=Math.hypot(_e,Ve);dt>1.9||dt<.05||_e*N+Ve*C<.12||N*Math.sin(fe.angle)+C*Math.cos(fe.angle)>-.25||dt<A&&(A=dt,Z=fe)}if(!Z)return c.yieldTime>0;let q=Z.x-c.x,he=Z.z-c.z,Te=Math.sign(q*C-he*N)||1;if(c.shoulder<=0&&A<1.35&&(c.shoulder=c.shoulderLength=.6,c.shoulderSide=Te),c.yieldTime>0)return!0;if(c.yieldPause>0||String(c.id)>String(Z.id))return!1;let we=f(c),Se=C,ye=-N,ce=fe=>{let _e=0;for(;_e<1.6&&Rn(c.x+Se*fe*(_e+.25),c.z+ye*fe*(_e+.25),.2,we);)_e+=.25;return _e};return ce(1)+ce(-1)>=2.7?!1:(c.yieldTime=.8,c.yieldPause=2.6,c.shoulder=c.shoulderLength=.8,c.shoulderSide=ce(1)<ce(-1)?1:-1,!0)}function Df(c,y){for(let v of W){if(l(c)>1.2||ie(v,c)>5)continue;let N=se.get(v),C=N&&ie(N,v)<3?N:null,Z=C?Math.hypot(C.vx,C.vz):0,A=Math.hypot(v.vx,v.vz),q=Math.max(A,Z);if(!(q<y||!Hp(v,C,c)))return{car:v,speed:q,vx:Z>A?C.vx:v.vx,vz:Z>A?C.vz:v.vz}}return null}function L0(c,y){s.updateDoors(c,[y,...j.filter(v=>hn(v))])}function D0(c,y,v){let N=l(y),C=U?null:s.interiorAt(y.x,y.z,N),Z=!!C;ee!==Z&&(ee=Z,xe=!0);let A=i.aspect<.85,he=Z?v?2.25:3.4:U?U.kind==="bike"?8.2:A?12:10.2:v?4.45:A?7.9:6.5,Te=U?1.95+U.root.position.y:1.38+N+u.lift*.46,we=U?0:v?.61:.22,Se=v?.1+be*.19:Math.max(Z?.28:.1,be);Ke.set(y.x+Math.cos(ne)*we,Te,y.z-Math.sin(ne)*we),pt.set(Ke.x-Math.sin(ne)*he*Math.cos(Se),Te+Math.sin(Se)*he,Ke.z-Math.cos(ne)*he*Math.cos(Se));function ye(Ve){C&&(Ve.x=_t(Ve.x,C.x-C.w*.5+.3,C.x+C.w*.5-.3),Ve.z=_t(Ve.z,C.z-C.d*.5+.3,C.z+C.d*.5-.3),Ve.y=_t(Ve.y,C.floor+.55,C.ceiling-.42))}ye(pt),s.viewBlocked(Ke.x,Ke.y,Ke.z,.12,!Z)&&Ke.set(y.x,Te,y.z);for(let Ve=.06;Ve<=1.0001;Ve+=.04){let dt=Wr.lerp(Ke.x,pt.x,Ve),wt=Wr.lerp(Ke.y,pt.y,Ve),Gt=Wr.lerp(Ke.z,pt.z,Ve);if(s.viewBlocked(dt,wt,Gt,.32,!Z)||W.some(gn=>gn!==U&&ie(gn,{x:dt,z:Gt})<2.1&&wt<gn.root.position.y+1.7)){pt.lerp(Ke,1-Math.max(.02,Ve-.07));break}}ye(pt);let ce=v?14:1,fe=Le?be:be-.22,_e=v?Te-Math.tan(fe)*ce:Te-.07;je.set(Ke.x+Math.sin(ne)*ce,_e,Ke.z+Math.cos(ne)*ce),xe?(i.position.copy(pt),xe=!1):i.position.lerp(pt,1-Math.exp(-c*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!Z)&&i.position.copy(pt),ye(i.position),i.lookAt(je),i.updateMatrixWorld()}function Di(c,y,v){Me.fillStyle=y,Me.beginPath(),Me.arc(ut(c.x),ut(c.z),v,0,Math.PI*2),Me.fill()}function N0(c,y){let v=Zc(Pe),N=Math.round(ie(c,In));qe("detail").textContent="Casa "+N+" m \xB7 Loja "+Math.round(ie(c,Yr))+" m",qe("cash").textContent="R$ "+X.toLocaleString("pt-BR");let C=$t.filter(Nt=>Nt.order==="dealer"&&hn(Nt)),Z=$t.some(Nt=>Nt.order==="wait");qe("crew").textContent="Gangue "+$t.length+($t.length?Z?" \xB7 esperando":" \xB7 seguindo":"")+(C.length?" \xB7 "+C.length+" no ponto":"");let A=qt();qe("stash").hidden=!A,qe("stash").textContent=A;let q=C.reduce((Nt,Ua)=>Nt+(Ua.sales??0),0);qe("selling").hidden=!Ue&&!C.length,qe("selling").textContent=(Ue?"Seu ponto de venda est\xE1 aberto. ":"")+(C.length?"Ponto da gangue: R$ "+q:"");let he=qe("prompt"),Te=Ne==="pad"?"Y \xB7 ":Ne==="keyboard"?"E \xB7 ":"",we=uf(),Se=!!we,ye=pf(),ce=gf(),fe=U??xf(),_e=Pa(),Ve=ff(),dt=ih(),wt=ye?null:rh(),Gt=Yt&&y&&oe<=0;he.hidden=!(fe||Se||ye||ce||_e||Ve||dt||wt||oe>0||Gt);let gn=_e?"Guardar na garagem":dt?"Entrar na oficina":U?"Sair "+(U.kind==="bike"?"da moto":"do carro"):Ve?"Tirar ve\xEDculo da garagem":ye?"Salvar o progresso":wt?wt.label():Se?Ym[we.service]:ce?"Porta trancada":fe?"Pegar "+_o(fe):"";he.textContent=oe>0?pe:Gt?"Mantenha a mira \xB7 "+Math.ceil(Yt.left)+" s":Te+gn,qe("heat").hidden=!v,qe("heat").textContent="\u2605".repeat(v)+" PROCURADO";let An=Ce==="rifle"?"Fuzil":"Pistola";qe("mode").textContent=U?_o(U)+" \xB7 "+Math.round(U.integrity)+"%"+(U.burning?" \xB7 FOGO":""):ue?An:"Vila Brasa",qe("reading").textContent=U?Math.round(Math.hypot(U.vx,U.vz)*3.6)+" km/h":ue?Ae+" balas":"Punhos";let ci=qe("health");ci.value=u.health,ci.title="Vida: "+Math.ceil(u.health)+"%",qe("crosshair").hidden=!(y||ue&&ps>0&&!U),qe("interact").textContent=U?"Sair":ye?"Salvar":wt?"Usar":Se?"Loja":"Entrar",qe("sprint").textContent=U?"Freio":"Correr",qe("aim").hidden=!!U,qe("fire").hidden=!!U||!ue,qe("weapon").hidden=!!U||!(me||He),qe("weapon").textContent="Arma",qe("sell").hidden=!!U,qe("gang").hidden=!!U||!$t.length,qe("sell").setAttribute("aria-pressed",String(!!Ue)),qe("jump").hidden=qe("punch").hidden=!!U,qe("recruit").hidden=!!U||!y,qe("hud").classList.toggle("armed",!U),qe("hud").classList.toggle("driving",!!U),Me.drawImage(Ge,0,0),ht&&(ie(c,ht)<2.2?(ht=null,Ft.visible=!1):Di(ht,"#ffad41",4));for(let Nt of x)Nt!==U&&Nt.integrity>0&&Di(Nt,Nt.driver?"#82b9b3":"#eab987",Nt.kind==="bike"?2.2:Nt.driver?2.6:3.5);Di(Yr,"#eaff89",6),Di(qn.bay,"#d1ad62",3.5),Di(In,"#dcc39b",5);let En=Ei==="lajes"?en.home:Ei==="brasa"?In:null;if(En){let Nt=9+Math.sin(Ee*4)*1.6;Me.strokeStyle="#ffd35a",Me.lineWidth=2.2,Me.beginPath(),Me.arc(ut(En.x),ut(En.z),Nt,0,Math.PI*2),Me.stroke(),Me.fillStyle="#ffd35a",Me.font="bold 8px system-ui",Me.textAlign="center",Me.fillText("SAVE",ut(En.x),ut(En.z)-Nt-2)}for(let Nt of k)Nt.service==="black"&&Di(Nt.entry,"#c58cff",3.2);Di(Ds,"#99c6ff",5);for(let Nt of k)Nt.kind!=="armory"&&Di(Nt.entry,"#dbae80",2.5);for(let Nt of O)["driving","patrol","foot"].includes(Nt.mode)&&Di(Nt.officer.seated?Nt.car:Nt.officer,Nt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let Nt of $t)Di(Nt,"#97ebaf",3.5);Me.save(),Me.translate(ut(c.x),ut(c.z)),Me.rotate(-(U?U.angle:u.angle)),Me.fillStyle="#fff9e6",Me.strokeStyle="#243938",Me.lineWidth=2.7,Me.beginPath(),Me.moveTo(0,10),Me.lineTo(-6,-6),Me.lineTo(0,-3),Me.lineTo(6,-6),Me.closePath(),Me.stroke(),Me.fill(),Me.restore()}function z0(c){let y=(c-ve)/1e3,v=_t(y,1/240,.05);ve=c,Ee+=v;let N=Vs.read(!!U,v);if(N.map&&!tt.open&&fn(),tt.open){Xe.x=_t(Xe.x+N.x*100*v,0,256),Xe.z=_t(Xe.z-N.y*100*v,0,256);let C=Mt.getContext("2d");C.drawImage(Me.canvas,0,0),C.strokeStyle="white",C.strokeRect(Xe.x-3,Xe.z-3,6,6),N.confirm?Bt(Xe.x,Xe.z):N.cancel&&tt.close();return}if(Bs.open){N.cancel||N.interact?xo():N.confirm?Zt.activate():N.navUp?Zt.move(-1):N.navDown?Zt.move(1):(sn-=v,Math.abs(N.y)>.6&&sn<=0&&(Zt.move(N.y>0?-1:1),sn=.22),Math.abs(N.y)<.3&&(sn=0)),e.render(t,i);return}if(Et){if(mt){Ne=N.mode;for(let we of W)se.set(we,{x:we.x,z:we.z,vx:we.vx,vz:we.vz});N.weapon&&(me||He)&&!U&&Hm(),N.sell&&!U&&(Ue?(Ue=null,$e("Ponto de venda fechado.")):gr().length?(Ue={x:u.x,z:u.z},$e("Ponto de venda aberto. Fique parado.")):$e("Sem estoque. Compre no mercado negro da casa de penhores.")),Ue&&(U||ie(u,Ue)>4)&&(Ue=null,$e("Ponto de venda fechado.")),A0(v);let C=N.aim&&!U&&kn<=0&&u.health>0;if(C!==Le&&(be=C?.015:.22,Le=C),ge=Math.abs(N.lookX)+Math.abs(N.lookY)>.003?0:ge+v,ne-=N.lookX,be=_t(be+N.lookY,C?-1.03:-.31,.84),U&&ge>1.2&&(be+=(.24-be)*v),C&&I0(v),u.health>0&&u.health<100&&Ee-(u.lastHurt??0)>10&&(u.health=Math.min(100,u.health+3*v)),rt-=v,Qe-=v,V-=v,po-=v,nn-=v,oe-=v,D-=v,a.update(v),h.update(v),s.signals.update(v),kn=Math.max(0,kn-v),Gs&&(z-=v,z<=0&&h0()),Ci-=v,ms-=v,ps-=v,ks-=v,ds>0&&(ds-=v,ds<=0&&jm()),Qn&&(Qn.delay-=v,Qn.delay<=0)){let we=Qn.car;Qn=null,u.health>0&&we.integrity>0&&ie(u,we)<3.75&&La(we)}if(N.interact&&yf(),Bs.open)return;let Z=s.props.update(v,W,U??u);Z.shadow&&(s.sun.shadow.needsUpdate=!0);for(let we of Z.events)ie(we,U??u)<30&&(we.heavy?Oe.crash():Oe.punch(!0));L0(v,U??u),U?f0(v,N):d0(v,{...N,aim:C}),Rf=!!N.brake,If(v,U??u),y0(v,U??u),U&&(u.x=U.x,u.z=U.z),o0(v),Bn&&!pr(Bn)&&(Bn=null),U?.kind==="bike"&&Ou(u.model,U);let A=U??u;if(!Number.isFinite(xs.x)||ie(u,xs)>1.15){let we=Number.isFinite(xs.x)?Math.atan2(u.x-xs.x,u.z-xs.z):u.angle;xs={x:u.x,z:u.z,angle:we}}fh(v,A),wf(A,v),e0(v),s.lajesHome.update(v,u,s.interiorAt(u.x,u.z,l(u))?.buildingId==="lajes-home"),Oe.motor(U?.speed??0,!!U,Dm(U));let q=U??u,he=C&&!U&&u.health>0;N.fire&&ue&&!U&&u.health>0&&Ae>0&&(ps=1.38),D0(v,q,he||!U&&ps>0),he&&(ks<=0||N.recruit||N.punch||N.fire&&Qe<=0)?(li=vf(),ks=.092):he||(li=null),N.order&&R0(N.order,he?vf():null),N.recruit&&!U&&Tf(li),l0(v,he&&ue?li:null),(N.punch||N.fire&&!ue)&&!U&&c0(),N.fire&&!U&&u0(he),qe("hitmark").hidden=Ci<=0,qe("impact").hidden=ms<=0,s.marker.visible=ie(q,Yr)>2.8&&ie(q,Yr)<13,s.beacon.rotation.y=Ee*2,s.beacon.position.y=2.55+Math.sin(Ee*4)*.27,ze-=v,ze<=0&&(N0(q,he),ze=.1)}}else{let C=.54+Math.sin(Ee*.13)*.19,Z=i.aspect<1?26:30;i.position.set(24+Math.sin(C)*Z,14,17+Math.cos(C)*Z),i.lookAt(10,2,13),fh(v,u,!0),wf(u)}Ht&&(i.position.set(Ht[0],Ht[1],Ht[2]),i.lookAt(Ht[3],Ht[4],Ht[5])),e.render(t,i),mt&&uo.value==="auto"&&y>0&&y<.22&&ae>.7&&(Je+=y,++Fe>=85&&(Je/Fe>.026&&(ae=Math.max(.69,ae-.16),Jn()),Fe=0,Je=0))}let Vs=Lm(()=>{tt.open?tt.close():Bs.open?xo():mt?bt(!1):Nf()},()=>mt),dh=eh("quality");(dh==="low"||dh==="high")&&(uo.value=dh),uo.addEventListener("change",()=>{eh("quality",uo.value),ae=1,Jn()}),qe("sound").addEventListener("click",()=>{eh("sound",Oe.toggle()?"on":"off"),Ri()}),qe("pause").addEventListener("click",()=>bt(!1)),qe("reset").addEventListener("click",()=>{dn(),bt(!0)}),qe("close-shop").addEventListener("click",xo),Bs.addEventListener("cancel",c=>{c.preventDefault(),xo()});function Nf(){if(!Et&&rn){Object.assign(u,{x:rn.x,z:rn.z,health:rn.health,floorY:0}),p(u),X=rn.cash,me=rn.armed,He=rn.rifle,st=me?rn.ammo:0,Re=He?rn.rifleAmmo:0,Ce="pistol",Ae=st,Ii(me?"pistol":He?"rifle":"fists"),Object.assign(it,rn.stash),Ze=rn.wardrobe,Be=rn.look,of(u,Be),rn.garage&&(_f(rn.garage.kind,rn.garage.model,rn.garage.color,rn.garage),mi=!0,ah(xt));for(let c of new Set(rn.recruits)){let y=typeof c=="number"?I[c]:K.get(c);y&&(y.role="ally",y.order="follow",y.seated=!1,y.riding=null,y.model.root.visible=!0,$t.push(y))}bt(!0),ne=-Math.PI/2}else bt(!0)}fo.addEventListener("click",Nf),document.addEventListener("visibilitychange",()=>{document.hidden&&mt&&bt(!1)}),window.addEventListener("resize",Jn),e.domElement.addEventListener("webglcontextrestored",Jn),new URLSearchParams(location.search).has("debug")&&(window.__gtbase={player:u,cars:W,traffic:S,tow:H,police:O,world:s,pedestrians:J,civilianCars:x,garage:()=>xt,state:()=>({driving:U,heat:Pe,cash:X,playing:mt,lastSave:Ei}),place:(c,y)=>{Object.assign(u,{x:c,z:y}),p(u),xe=!0},interact:yf,workshopStop:ih,homeFixture:rh,saveGame:oh,enter:La,exitVehicle:Li,openShop:sh,publicShops:k,gang:$t,recruit:Tf,escorts:mn,crime:()=>Hi(40,u,!0),setDriving:c=>{U=c},view:(...c)=>{Ht=c.length?c:null},arm:c=>{c==="rifle"?(He=!0,Vi("rifle",90)):(me=!0,Vi("pistol",36)),Ii(c)},ammo:()=>Ae,setYaw:c=>{ne=c},step:(c,y=1)=>{for(let v=0;v<y;v++)s.signals.update(c),fh(c,u),If(c,u)}}),dn(),Ri(),Jn(),th(),fo.disabled=!1,ve=performance.now(),e.setAnimationLoop(z0)}try{RM()}catch(n){console.error(n),fo.textContent="3D indispon\xEDvel",qe("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
