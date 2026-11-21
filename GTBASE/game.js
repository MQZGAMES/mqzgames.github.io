(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var qh=0,uc=1,Yh=2;var ds=1,Zh=2,$s=3,qi=0,cn=1,xn=2,fs=0,Qs=1,dc=2,fc=3,pc=4,Jh=5;var ps=100,Kh=101,$h=102,Qh=103,jh=104,tu=200,eu=201,nu=202,iu=203,mc=204,gc=205,su=206,ru=207,ou=208,au=209,lu=210,cu=211,hu=212,uu=213,du=214,Xo=0,qo=1,Yo=2,Ws=3,Zo=4,Jo=5,Ko=6,$o=7,xc=0,fu=1,pu=2,ii=0,_c=1,yc=2,vc=3,Zr=4,Mc=5,Sc=6,bc=7;var wc=300,ms=301,js=302,Ma=303,Sa=304,Qo=1e3,jn=1001,jo=1002,nn=1003,mu=1004;var Jr=1005;var sn=1006,ba=1007;var wi=1008;var Mn=1009,Tc=1010,Ac=1011,tr=1012,wa=1013,Xn=1014,zn=1015,qn=1016,Ta=1017,Aa=1018,gs=1020,Ec=35902,Rc=35899,Cc=1021,Ic=1022,Ln=1023,vi=1026,Ti=1027,Ea=1028,Ra=1029,Yi=1030,Ca=1031;var Ia=1033,Kr=33776,$r=33777,Qr=33778,jr=33779,Pa=35840,La=35841,Da=35842,Na=35843,Ua=36196,Fa=37492,Oa=37496,za=37488,Ba=37489,to=37490,ka=37491,Ga=37808,Va=37809,Ha=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,Za=37815,Ja=37816,Ka=37817,$a=37818,Qa=37819,ja=37820,tl=37821,el=36492,nl=36494,il=36495,sl=36283,rl=36284,eo=36285,ol=36286;var Ar=2300,ta=2301,Ho=2302,sc=2303,rc=2400,oc=2401,ac=2402;var gu=3200;var al=0,xu=1,Ai="",an="srgb",Er="srgb-linear",Rr="linear",Ae="srgb";var Wo=7680;var _u=519,yu=512,vu=513,Mu=514,Pc=515,Su=516,bu=517,Lc=518,Dc=519,wu=35044,ll=35048;var Nc="300 es",Fn=2e3,Xs=2001;function sf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function rf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tu(){let n=Cr("canvas");return n.style.display="block",n}var vh={},qs=null;function Uc(...n){let t="THREE."+n.shift();qs?qs("log",t,...n):console.log(t,...n)}function Au(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ee(...n){n=Au(n);let t="THREE."+n.shift();if(qs)qs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=Au(n);let t="THREE."+n.shift();if(qs)qs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function br(...n){let t=n.join(" ");t in vh||(vh[t]=!0,ee(...n))}function Eu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ru={[Xo]:Xo,[Yo]:Ko,[Zo]:Zo,[Ws]:Jo,[qo]:qo,[Ko]:Yo,[$o]:$o,[Jo]:Ws},ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,wr=Math.PI/180,Ys=180/Math.PI;function er(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function Fc(n,t){return(n%t+t)%t}function of(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function af(n,t,e){return n!==t?(e-n)/(t-n):0}function Tr(n,t,e){return(1-e)*n+e*t}function lf(n,t,e,i){return Tr(n,t,1-Math.exp(-e*i))}function cf(n,t=1){return t-Math.abs(Fc(n,t*2)-t)}function hf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function uf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function df(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ff(n,t){return n+Math.random()*(t-n)}function pf(n){return n*(.5-Math.random())}function mf(n){n!==void 0&&(Mh=n);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gf(n){return n*wr}function xf(n){return n*Ys}function _f(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function yf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Oc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),h=r((i-t)/2),x=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*x,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*x,a*c);break;case"ZYZ":n.set(l*x,l*h,a*u,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cu(n,t){if(t.constructor===Float32Array)return n;let e=zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Iu(n,t){if(t.constructor===Float32Array)return n;let e=zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var no={DEG2RAD:wr,RAD2DEG:Ys,generateUUID:er,clamp:_e,euclideanModulo:Fc,mapLinear:of,inverseLerp:af,lerp:Tr,damp:lf,pingpong:cf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:xf,isPowerOfTwo:_f,ceilPowerOfTwo:yf,floorPowerOfTwo:Oc,setQuaternionFromProperEuler:vf,normalize:Iu,denormalize:Cu},fe=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],x=r[o+2],v=r[o+3];if(d!==v||l!==f||c!==h||u!==x){let p=l*f+c*h+u*x+d*v;p<0&&(f=-f,h=-h,x=-x,v=-v,p=-p);let m=1-a;if(p<.9995){let _=Math.acos(p),S=Math.sin(_);m=Math.sin(m*_)/S,a=Math.sin(a*_)/S,l=l*m+f*a,c=c*m+h*a,u=u*m+x*a,d=d*m+v*a}else{l=l*m+f*a,c=c*m+h*a,u=u*m+x*a,d=d*m+v*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],x=r[o+3];return t[e]=a*x+u*d+l*h-c*f,t[e+1]=l*x+u*f+c*d-a*h,t[e+2]=c*x+u*h+a*f-l*d,t[e+3]=u*x-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*x,this._y=c*h*d-f*u*x,this._z=c*u*x+f*h*d,this._w=c*u*d-f*h*x;break;case"YXZ":this._x=f*u*d+c*h*x,this._y=c*h*d-f*u*x,this._z=c*u*x-f*h*d,this._w=c*u*d+f*h*x;break;case"ZXY":this._x=f*u*d-c*h*x,this._y=c*h*d+f*u*x,this._z=c*u*x+f*h*d,this._w=c*u*d-f*h*x;break;case"ZYX":this._x=f*u*d-c*h*x,this._y=c*h*d+f*u*x,this._z=c*u*x-f*h*d,this._w=c*u*d+f*h*x;break;case"YZX":this._x=f*u*d+c*h*x,this._y=c*h*d+f*u*x,this._z=c*u*x-f*h*d,this._w=c*u*d-f*h*x;break;case"XZY":this._x=f*u*d-c*h*x,this._y=c*h*d-f*u*x,this._z=c*u*x+f*h*d,this._w=c*u*d+f*h*x;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new X,Sh=new yn,ne=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],x=i[8],v=s[0],p=s[3],m=s[6],_=s[1],S=s[4],M=s[7],E=s[2],A=s[5],g=s[8];return r[0]=o*v+a*_+l*E,r[3]=o*p+a*S+l*A,r[6]=o*m+a*M+l*g,r[1]=c*v+u*_+d*E,r[4]=c*p+u*S+d*A,r[7]=c*m+u*M+d*g,r[2]=f*v+h*_+x*E,r[5]=f*p+h*S+x*A,r[8]=f*m+h*M+x*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,x=e*d+i*f+s*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=h*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bl=new ne,bh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){let n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:t,whitePoint:i,transfer:Rr,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}var xe=Mf();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cs,ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cs===void 0&&(Cs=Cr("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Cs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sf=0,Zs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kl(s[o].image)):r.push(kl(s[o]))}else r=kl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ea.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var bf=0,Gl=new X,mn=class n extends ti{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=jn,s=jn,r=sn,o=wi,a=Ln,l=Mn,c=n.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=er(),this.name="",this.source=new Zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=wc;mn.DEFAULT_ANISOTROPY=1;var Be=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],x=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,M=(h+1)/2,E=(m+1)/2,A=(u+f)/4,g=(d+v)/4,b=(x+p)/4;return S>M&&S>E?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=g/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=b/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=g/r,s=b/r),this.set(i,s,r,e),this}let _=Math.sqrt((p-x)*(p-x)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},na=class extends ti{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new mn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends na{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ir=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ee=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,x,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,x,v,p)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,x,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=x,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,h=o*d,x=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+x*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=x+h*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,h=l*d,x=c*u,v=c*d;e[0]=f+v*a,e[4]=x*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-x,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,h=l*d,x=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=x+h*a,e[1]=h+x*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,h=o*d,x=a*u,v=a*d;e[0]=l*u,e[4]=x*c-h,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=h*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,h=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=x*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+x,e[10]=f-v*d}else if(t.order==="XZY"){let f=o*l,h=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=h*d-x,e[2]=x*d-h,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wf,t,Tf)}lookAt(t,e,i){let s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Li.crossVectors(i,Rn),Li.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Li.crossVectors(i,Rn)),Li.normalize(),So.crossVectors(Rn,Li),s[0]=Li.x,s[4]=So.x,s[8]=Rn.x,s[1]=Li.y,s[5]=So.y,s[9]=Rn.y,s[2]=Li.z,s[6]=So.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],x=i[2],v=i[6],p=i[10],m=i[14],_=i[3],S=i[7],M=i[11],E=i[15],A=s[0],g=s[4],b=s[8],I=s[12],L=s[1],D=s[5],C=s[9],U=s[13],R=s[2],z=s[6],B=s[10],W=s[14],it=s[3],$=s[7],tt=s[11],st=s[15];return r[0]=o*A+a*L+l*R+c*it,r[4]=o*g+a*D+l*z+c*$,r[8]=o*b+a*C+l*B+c*tt,r[12]=o*I+a*U+l*W+c*st,r[1]=u*A+d*L+f*R+h*it,r[5]=u*g+d*D+f*z+h*$,r[9]=u*b+d*C+f*B+h*tt,r[13]=u*I+d*U+f*W+h*st,r[2]=x*A+v*L+p*R+m*it,r[6]=x*g+v*D+p*z+m*$,r[10]=x*b+v*C+p*B+m*tt,r[14]=x*I+v*U+p*W+m*st,r[3]=_*A+S*L+M*R+E*it,r[7]=_*g+S*D+M*z+E*$,r[11]=_*b+S*C+M*B+E*tt,r[15]=_*I+S*U+M*W+E*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],x=t[3],v=t[7],p=t[11],m=t[15],_=l*h-c*f,S=a*h-c*d,M=a*f-l*d,E=o*h-c*u,A=o*f-l*u,g=o*d-a*u;return e*(v*_-p*S+m*M)-i*(x*_-p*E+m*A)+s*(x*S-v*E+m*g)-r*(x*M-v*A+p*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],x=t[12],v=t[13],p=t[14],m=t[15],_=e*a-i*o,S=e*l-s*o,M=e*c-r*o,E=i*l-s*a,A=i*c-r*a,g=s*c-r*l,b=u*v-d*x,I=u*p-f*x,L=u*m-h*x,D=d*p-f*v,C=d*m-h*v,U=f*m-h*p,R=_*U-S*C+M*D+E*L-A*I+g*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return t[0]=(a*U-l*C+c*D)*z,t[1]=(s*C-i*U-r*D)*z,t[2]=(v*g-p*A+m*E)*z,t[3]=(f*A-d*g-h*E)*z,t[4]=(l*L-o*U-c*I)*z,t[5]=(e*U-s*L+r*I)*z,t[6]=(p*M-x*g-m*S)*z,t[7]=(u*g-f*M+h*S)*z,t[8]=(o*C-a*L+c*b)*z,t[9]=(i*L-e*C-r*b)*z,t[10]=(x*A-v*M+m*_)*z,t[11]=(d*M-u*A-h*_)*z,t[12]=(a*I-o*D-l*b)*z,t[13]=(e*D-i*I+s*b)*z,t[14]=(v*S-x*E-p*_)*z,t[15]=(u*E-d*S+f*_)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,x=r*d,v=o*u,p=o*d,m=a*d,_=l*c,S=l*u,M=l*d,E=i.x,A=i.y,g=i.z;return s[0]=(1-(v+m))*E,s[1]=(h+M)*E,s[2]=(x-S)*E,s[3]=0,s[4]=(h-M)*A,s[5]=(1-(f+m))*A,s[6]=(p+_)*A,s[7]=0,s[8]=(x+S)*g,s[9]=(p-_)*g,s[10]=(1-(f+v))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Is.set(s[0],s[1],s[2]).length(),a=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Fn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s),x,v;if(l)x=r/(o-r),v=o*r/(o-r);else if(a===Fn)x=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Xs)x=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Fn,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),h=-(i+s)/(i-s),x,v;if(l)x=1/(o-r),v=o/(o-r);else if(a===Fn)x=-2/(o-r),v=-(o+r)/(o-r);else if(a===Xs)x=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Is=new X,Gn=new Ee,wf=new X(0,0,0),Tf=new X(1,1,1),Li=new X,So=new X,Rn=new X,Th=new Ee,Ah=new yn,Mi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Af=0,Eh=new X,Ps=new yn,pi=new Ee,bo=new X,xr=new X,Ef=new X,Rf=new yn,Rh=new X(1,0,0),Ch=new X(0,1,0),Ih=new X(0,0,1),Ph={type:"added"},Cf={type:"removed"},Ls={type:"childadded",child:null},Vl={type:"childremoved",child:null},Je=class n extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new X,e=new Mi,i=new yn,s=new X(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ne}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?bo.copy(t):bo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(xr,bo,this.up):pi.lookAt(bo,xr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(pi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cf),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new X(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,x=.005;c.inputState.pinching&&f>h+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(If)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Hl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var he=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=Fc(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Hl(o,r,t+1/3),this.g=Hl(o,r,t),this.b=Hl(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function i(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let i=Pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return xe.workingToColorSpace(un.copy(this),t),Math.round(_e(un.r*255,0,255))*65536+Math.round(_e(un.g*255,0,255))*256+Math.round(_e(un.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(un.copy(this),e);let i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=an){xe.workingToColorSpace(un.copy(this),t);let e=un.r,i=un.g,s=un.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(wo);let i=Tr(Di.h,wo.h,e),s=Tr(Di.s,wo.s,e),r=Tr(Di.l,wo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new he;he.NAMES=Pu;var Lr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Dr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new X,mi=new X,Wl=new X,gi=new X,Ds=new X,Ns=new X,Lh=new X,Xl=new X,ql=new X,Yl=new X,Zl=new Be,Jl=new Be,Kl=new Be,Oi=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Vn.subVectors(s,e),mi.subVectors(i,e),Wl.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(mi),l=Vn.dot(Wl),c=mi.dot(mi),u=mi.dot(Wl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,x=(o*u-a*l)*f;return r.set(1-h-x,x,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Zl.setScalar(0),Jl.setScalar(0),Kl.setScalar(0),Zl.fromBufferAttribute(t,e),Jl.fromBufferAttribute(t,i),Kl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zl,r.x),o.addScaledVector(Jl,r.y),o.addScaledVector(Kl,r.z),o}static isFrontFacing(t,e,i,s){return Vn.subVectors(i,e),mi.subVectors(t,e),Vn.cross(mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Vn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ds.subVectors(s,i),Ns.subVectors(r,i),Xl.subVectors(t,i);let l=Ds.dot(Xl),c=Ns.dot(Xl);if(l<=0&&c<=0)return e.copy(i);ql.subVectors(t,s);let u=Ds.dot(ql),d=Ns.dot(ql);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(i).addScaledVector(Ds,o);Yl.subVectors(t,r);let h=Ds.dot(Yl),x=Ns.dot(Yl);if(x>=0&&h<=x)return e.copy(r);let v=h*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(Ns,a);let p=u*x-h*d;if(p<=0&&d-u>=0&&h-x>=0)return Lh.subVectors(r,s),a=(d-u)/(d-u+(h-x)),e.copy(s).addScaledVector(Lh,a);let m=1/(p+v+f);return o=v*m,a=f*m,e.copy(i).addScaledVector(Ds,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Ao.subVectors(this.max,_r),Us.subVectors(t.a,_r),Fs.subVectors(t.b,_r),Os.subVectors(t.c,_r),Ni.subVectors(Fs,Us),Ui.subVectors(Os,Fs),is.subVectors(Us,Os);let e=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-is.z,is.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,is.z,0,-is.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-is.y,is.x,0];return!$l(e,Us,Fs,Os,Ao)||(e=[1,0,0,0,1,0,0,0,1],!$l(e,Us,Fs,Os,Ao))?!1:(Eo.crossVectors(Ni,Ui),e=[Eo.x,Eo.y,Eo.z],$l(e,Us,Fs,Os,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new X,new X,new X,new X,new X,new X,new X,new X],Hn=new X,To=new ei,Us=new X,Fs=new X,Os=new X,Ni=new X,Ui=new X,is=new X,_r=new X,Ao=new X,Eo=new X,ss=new X;function $l(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ze=new X,Ro=new fe,Pf=0,pn=class extends ti{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=t!==void 0?zc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ro.fromBufferAttribute(this,e),Ro.applyMatrix3(t),this.setXY(e,Ro.x,Ro.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Cu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Iu(t,this.array)}};var Nr=class extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ur=class extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Re=class extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Lf=new ei,yr=new X,Ql=new X,zi=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Lf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(Ql)),this.expandByPoint(yr.copy(t.center).sub(Ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Df=0,Un=new Ee,jl=new Je,zs=new X,Cn=new ei,vr=new ei,en=new X,ln=class n extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,i){return Un.makeTranslation(t,e,i),this.applyMatrix4(Un),this}scale(t,e,i){return Un.makeScale(t,e,i),this.applyMatrix4(Un),this}lookAt(t){return jl.lookAt(t),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Cn.min,vr.min),Cn.expandByPoint(en),en.addVectors(Cn.max,vr.max),Cn.expandByPoint(en)):(Cn.expandByPoint(vr.min),Cn.expandByPoint(vr.max))}Cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),en.add(zs)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)a[I]=new X,l[I]=new X;let u=new X,d=new X,f=new X,h=new fe,x=new fe,v=new fe,p=new X,m=new X;function _(I,L,D){c[I]=c[L]=c[D]=1,u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,L),f.fromBufferAttribute(i,D),h.fromBufferAttribute(r,I),x.fromBufferAttribute(r,L),v.fromBufferAttribute(r,D),d.sub(u),f.sub(u),x.sub(h),v.sub(h);let C=1/(x.x*v.y-v.x*x.y);isFinite(C)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-x.y).multiplyScalar(C),m.copy(f).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(C),a[I].add(p),a[L].add(p),a[D].add(p),l[I].add(m),l[L].add(m),l[D].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,L=S.length;I<L;++I){let D=S[I],C=D.start,U=D.count;for(let R=C,z=C+U;R<z;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let M=new X,E=new X,A=new X,g=new X;function b(I){A.fromBufferAttribute(s,I),g.copy(A);let L=a[I];M.copy(L),M.sub(A.multiplyScalar(A.dot(L))).normalize(),E.crossVectors(g,L);let C=E.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,C)}for(let I=0,L=i.count;I<L;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,d=new X;if(t)for(let f=0,h=t.count;f<h;f+=3){let x=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let m=0;m<u;m++)f[x++]=c[h++]}return new pn(f,u,d)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tc=new X,Nf=new X,Uf=new ne,Wn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=tc.subVectors(i,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Uf.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ff=0,Bi=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Qs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Wn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var _i=new X,ec=new X,Co=new X,Io=new X,sa=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ec.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Io.copy(this.origin).sub(ec);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=Io.dot(this.direction),l=-Io.dot(Co),c=Io.lengthSq(),u=Math.abs(1-o*o),d,f,h,x;if(u>0)if(d=o*l-a,f=o*a-l,x=r*u,d>=0)if(f>=-x)if(f<=x){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ec).addScaledVector(Co,f),h}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,f=t.y-o.y,h=t.z-o.z,x=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=i.x-o.x,_=i.y-o.y,S=i.z-o.z,M=Math.abs(l),E=Math.abs(c),A=Math.abs(u),g,b,I,L,D,C,U,R,z,B,W,it;if(M>=E&&M>=A?(I=l,C=d,z=x,it=m,l>=0?(g=c,b=u,L=f,D=h,U=v,R=p,B=_,W=S):(g=u,b=c,L=h,D=f,U=p,R=v,B=S,W=_)):E>=A?(I=c,C=f,z=v,it=_,c>=0?(g=u,b=l,L=h,D=d,U=p,R=x,B=S,W=m):(g=l,b=u,L=d,D=h,U=x,R=p,B=m,W=S)):(I=u,C=h,z=p,it=S,u>=0?(g=l,b=c,L=d,D=f,U=x,R=v,B=m,W=_):(g=c,b=l,L=f,D=d,U=v,R=x,B=_,W=m)),I===0)return null;let $=g/I,tt=b/I,st=1/I,Pt=L-$*C,Rt=D-tt*C,et=U-$*z,wt=R-tt*z,Nt=B-$*it,Xt=W-tt*it,yt=Nt*wt-Xt*et,jt=Pt*Xt-Rt*Nt,Fe=et*Rt-wt*Pt;if(s){if(yt<0||jt<0||Fe<0)return null}else if((yt<0||jt<0||Fe<0)&&(yt>0||jt>0||Fe>0))return null;let Zt=yt+jt+Fe;if(Zt===0)return null;let ge=st*(yt*C+jt*z+Fe*it);return(Zt>0?ge<0:ge>0)?null:this.at(ge/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dh=new Ee,rs=new sa,Po=new zi,Nh=new X,Lo=new X,Do=new X,No=new X,nc=new X,Uo=new X,Uh=new X,Fo=new X,Ce=class extends Je{constructor(t=new ln,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(nc.fromBufferAttribute(d,t),o?Uo.addScaledVector(nc,u):Uo.addScaledVector(nc.sub(e),u))}e.add(Uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(Po.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Po,Nh)===null||rs.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let p=f[x],m=o[p.materialIndex],_=Math.max(p.start,h.start),S=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let M=_,E=S;M<E;M+=3){let A=a.getX(M),g=a.getX(M+1),b=a.getX(M+2);s=Oo(this,m,t,i,c,u,d,A,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let p=x,m=v;p<m;p+=3){let _=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);s=Oo(this,o,t,i,c,u,d,_,S,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let p=f[x],m=o[p.materialIndex],_=Math.max(p.start,h.start),S=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let M=_,E=S;M<E;M+=3){let A=M,g=M+1,b=M+2;s=Oo(this,m,t,i,c,u,d,A,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let p=x,m=v;p<m;p+=3){let _=p,S=p+1,M=p+2;s=Oo(this,o,t,i,c,u,d,_,S,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Of(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qi,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:n}}function Oo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Lo),n.getVertexPosition(l,Do),n.getVertexPosition(c,No);let u=Of(n,t,e,i,Lo,Do,No,Uh);if(u){let d=new X;Oi.getBarycoord(Uh,Lo,Do,No,d),s&&(u.uv=Oi.getInterpolatedAttribute(s,a,l,c,d,new fe)),r&&(u.uv1=Oi.getInterpolatedAttribute(r,a,l,c,d,new fe)),o&&(u.normal=Oi.getInterpolatedAttribute(o,a,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new X,materialIndex:0};Oi.getNormal(Lo,Do,No,f.normal),u.face=f,u.barycoord=d}return u}var as=class extends mn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=nn,u=nn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class extends pn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new Ee,Fh=new Ee,zo=[],Oh=new ei,zf=new Ee,Mr=new Ce,Sr=new zi,ls=class extends Ce{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),Oh.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Oh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),Sr.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(i),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Fh.multiplyMatrices(i,Bs),Mr.matrixWorld=Fh,Mr.raycast(t,zo);for(let o=0,a=zo.length;o<a;o++){let l=zo[o];l.instanceId=r,l.object=this,e.push(l)}zo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(s*this.count),s,this.count,Ea,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new zi,Bf=new fe(.5,.5),Bo=new X,Gi=class{constructor(t=new Wn,e=new Wn,i=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],x=r[8],v=r[9],p=r[10],m=r[11],_=r[12],S=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,h-u,m-x,E-_).normalize(),s[1].setComponents(c+o,h+u,m+x,E+_).normalize(),s[2].setComponents(c+a,h+d,m+v,E+S).normalize(),s[3].setComponents(c-a,h-d,m-v,E-S).normalize(),i)s[4].setComponents(l,f,p,M).normalize(),s[5].setComponents(c-l,h-f,m-p,E-M).normalize();else if(s[4].setComponents(c-l,h-f,m-p,E-M).normalize(),e===Fn)s[5].setComponents(c+l,h+f,m+p,E+M).normalize();else if(e===Xs)s[5].setComponents(l,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=Bf.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zh=new Ee,ra=class n{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];zh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Gi),i[s].setFromProjectionMatrix(zh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Gi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Fr=class extends mn{constructor(t=[],e=ms,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Or=class extends mn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends mn{constructor(t,e,i=Xn,s,r,o,a=nn,l=nn,c,u=vi,d=1){if(u!==vi&&u!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zr=class extends Si{constructor(t,e=Xn,i=ms,s,r,o=nn,a=nn,l,c=vi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Br=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vn=class n extends ln{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2));function x(v,p,m,_,S,M,E,A,g,b,I){let L=M/g,D=E/b,C=M/2,U=E/2,R=A/2,z=g+1,B=b+1,W=0,it=0,$=new X;for(let tt=0;tt<B;tt++){let st=tt*D-U;for(let Pt=0;Pt<z;Pt++){let Rt=Pt*L-C;$[v]=Rt*_,$[p]=st*S,$[m]=R,c.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[m]=A>0?1:-1,u.push($.x,$.y,$.z),d.push(Pt/g),d.push(1-tt/b),W+=1}}for(let tt=0;tt<b;tt++)for(let st=0;st<g;st++){let Pt=f+st+z*tt,Rt=f+st+z*(tt+1),et=f+(st+1)+z*(tt+1),wt=f+(st+1)+z*tt;l.push(Pt,Rt,wt),l.push(Rt,et,wt),it+=6}a.addGroup(h,it,I),h+=it,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var cs=class n extends ln{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new X,u=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let h=i+d/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bi=class n extends ln{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],x=0,v=[],p=i/2,m=0;_(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(h,2));function _(){let M=new X,E=new X,A=0,g=(e-t)/i;for(let b=0;b<=r;b++){let I=[],L=b/r,D=L*(e-t)+t;for(let C=0;C<=s;C++){let U=C/s,R=U*l+a,z=Math.sin(R),B=Math.cos(R);E.x=D*z,E.y=-L*i+p,E.z=D*B,d.push(E.x,E.y,E.z),M.set(z,g,B).normalize(),f.push(M.x,M.y,M.z),h.push(U,1-L),I.push(x++)}v.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let L=v[I][b],D=v[I+1][b],C=v[I+1][b+1],U=v[I][b+1];(t>0||I!==0)&&(u.push(L,D,U),A+=3),(e>0||I!==r-1)&&(u.push(D,C,U),A+=3)}c.addGroup(m,A,0),m+=A}function S(M){let E=x,A=new fe,g=new X,b=0,I=M===!0?t:e,L=M===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,p*L,0),f.push(0,L,0),h.push(.5,.5),x++;let D=x;for(let C=0;C<=s;C++){let R=C/s*l+a,z=Math.cos(R),B=Math.sin(R);g.x=I*B,g.y=p*L,g.z=I*z,d.push(g.x,g.y,g.z),f.push(0,L,0),A.x=z*.5+.5,A.y=B*.5*L+.5,h.push(A.x,A.y),x++}for(let C=0;C<s;C++){let U=E+C,R=D+C;M===!0?u.push(R,R+1,U):u.push(R+1,R,U),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var kr=class n extends ln{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new X,M=new X,E=new X;for(let A=0;A<e.length;A+=3)h(e[A+0],S),h(e[A+1],M),h(e[A+2],E),l(S,M,E,_)}function l(_,S,M,E){let A=E+1,g=[];for(let b=0;b<=A;b++){g[b]=[];let I=_.clone().lerp(M,b/A),L=S.clone().lerp(M,b/A),D=A-b;for(let C=0;C<=D;C++)C===0&&b===A?g[b][C]=I:g[b][C]=I.clone().lerp(L,C/D)}for(let b=0;b<A;b++)for(let I=0;I<2*(A-b)-1;I++){let L=Math.floor(I/2);I%2===0?(f(g[b][L+1]),f(g[b+1][L]),f(g[b][L])):(f(g[b][L+1]),f(g[b+1][L+1]),f(g[b+1][L]))}}function c(_){let S=new X;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(_),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){let _=new X;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let M=p(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;o.push(M,1-E)}x(),d()}function d(){for(let _=0;_<o.length;_+=6){let S=o[_+0],M=o[_+2],E=o[_+4],A=Math.max(S,M,E),g=Math.min(S,M,E);A>.9&&g<.1&&(S<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function h(_,S){let M=_*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function x(){let _=new X,S=new X,M=new X,E=new X,A=new fe,g=new fe,b=new fe;for(let I=0,L=0;I<r.length;I+=9,L+=6){_.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),A.set(o[L+0],o[L+1]),g.set(o[L+2],o[L+3]),b.set(o[L+4],o[L+5]),E.copy(_).add(S).add(M).divideScalar(3);let D=p(E);v(A,L+0,_,D),v(g,L+2,S,D),v(b,L+4,M,D)}}function v(_,S,M,E){E<0&&_.x===1&&(o[S]=_.x-1),M.x===0&&M.z===0&&(o[S]=E/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var hs=class n extends kr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var us=class n extends kr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},ni=class n extends ln{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],x=[],v=[],p=[];for(let m=0;m<u;m++){let _=m*f-o;for(let S=0;S<c;S++){let M=S*d-r;x.push(M,-_,0),v.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let S=_+c*m,M=_+c*(m+1),E=_+1+c*(m+1),A=_+1+c*m;h.push(S,M,A),h.push(M,E,A)}this.setIndex(h),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Gr=class n extends ln{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,f=(e-t)/s,h=new X,x=new fe;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){let m=r+p/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),x.x=(h.x/e+1)/2,x.y=(h.y/e+1)/2,u.push(x.x,x.y)}d+=f}for(let v=0;v<s;v++){let p=v*(i+1);for(let m=0;m<i;m++){let _=m+p,S=_,M=_+i+1,E=_+i+2,A=_+1;a.push(S,M,A),a.push(M,E,A)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Vi=class n extends ln{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new X,f=new X,h=[],x=[],v=[],p=[];for(let m=0;m<=i;m++){let _=[],S=m/i,M=o+S*a,E=t*Math.cos(M),A=Math.sqrt(t*t-E*E),g=0;m===0&&o===0?g=.5/e:m===i&&l===Math.PI&&(g=-.5/e);for(let b=0;b<=e;b++){let I=b/e,L=s+I*r;d.x=-A*Math.cos(L),d.y=E,d.z=A*Math.sin(L),x.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(I+g,1-S),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let S=u[m][_+1],M=u[m][_],E=u[m+1][_],A=u[m+1][_+1];(m!==0||o>0)&&h.push(S,M,A),(m!==i-1||l<Math.PI)&&h.push(M,E,A)}this.setIndex(h),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function xs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Bh(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Bh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function dn(n){let t={};for(let e=0;e<n.length;e++){let i=xs(n[e]);for(let s in i)t[s]=i[s]}return t}function Bh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Lu={clone:xs,merge:dn},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new he().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ee().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oa=class extends On{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var aa=class extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},la=class extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ks(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ko(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Hi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends Hi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oc:r=t,a=2*e-i;break;case ac:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case oc:o=t,l=2*i-e;break;case ac:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,x=(i-e)/(s-e),v=x*x,p=v*x,m=-f*p+2*f*v-f*x,_=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*x+1,S=(-1-h)*p+(1.5+h)*v+.5*x,M=h*p-h*v;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+_*o[c+E]+S*o[l+E]+M*o[d+E];return r}},ha=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},ua=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},da=class extends Hi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(i-e)/(s-e),v=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*x;return r}let f=a*2,h=t-1;for(let x=0;x!==a;++x){let v=o[c+x],p=o[l+x],m=h*f+x*2,_=d[m],S=d[m+1],M=t*f+x*2,E=u[M],A=u[M+1],g=Wf(i,e,_,E,s);r[x]=Du(g,v,S,A,p)}return r}};function Du(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Hf(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Wf(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Du(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Hf(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Pn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ko(t.settings)&&(i.settings={inTangents:ks(t.settings.inTangents,Array),outTangents:ks(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break;case sc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ee("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;ko(this.settings)&&(kh(this.settings.inTangents,t),kh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ko(this.settings)&&(Gh(this.settings.inTangents,t),Gh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){se("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&rf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let x=0;x!==i;++x){let v=e[d+x];if(v!==e[f+x]||v!==e[h+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)e[f+h]=e[d+h]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ko(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function kh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Gh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ta;var Wi=class extends Pn{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ar;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Pn{constructor(t,e,i,s){super(t,e,i,s)}};fa.prototype.ValueTypeName="color";var pa=class extends Pn{constructor(t,e,i,s){super(t,e,i,s)}};pa.prototype.ValueTypeName="number";var ma=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)yn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vr=class extends Pn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Pn{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ar;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Pn{constructor(t,e,i,s){super(t,e,i,s)}};ga.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],x=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nu=new xa,_a=class{constructor(t){this.manager=t!==void 0?t:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wr=class extends Hr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ic=new Ee,Vh=new X,Hh=new X,ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ic,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Go=new X,Vo=new yn,Qn=new X,Xr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Go,Vo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Go,Vo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new X,Wh=new fe,Xh=new fe,fn=class extends Xr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qr=class extends Xr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lc=class extends ya{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new lc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gs=-90,Vs=1,Ks=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Gs,Vs,t,e);s.layers=this.layers,this.add(s);let r=new fn(Gs,Vs,t,e);r.layers=this.layers,this.add(r);let o=new fn(Gs,Vs,t,e);o.layers=this.layers,this.add(o);let a=new fn(Gs,Vs,t,e);a.layers=this.layers,this.add(a);let l=new fn(Gs,Vs,t,e);l.layers=this.layers,this.add(l);let c=new fn(Gs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},va=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var kc="\\[\\]\\.:\\/",Xf=new RegExp("["+kc+"]","g"),Gc="[^"+kc+"]",qf="[^"+kc.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",Gc),Zf=/(WCOD+)?/.source.replace("WCOD",qf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),Kf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),$f=new RegExp("^"+Yf+Zf+Jf+Kf+"$"),Qf=["material","materials","bones","map"],cc=class{constructor(t,e,i){let s=i||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Oe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xf,"")}static parseTrackName(t){let e=$f.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=cc;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);var hc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Vc(n,t,e,i){let s=jf(i);switch(e){case Cc:return n*t;case Ea:return n*t/s.components*s.byteLength;case Ra:return n*t/s.components*s.byteLength;case Yi:return n*t*2/s.components*s.byteLength;case Ca:return n*t*2/s.components*s.byteLength;case Ic:return n*t*3/s.components*s.byteLength;case Ln:return n*t*4/s.components*s.byteLength;case Ia:return n*t*4/s.components*s.byteLength;case Kr:case $r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qr:case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case La:case Na:return Math.max(n,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(n,8)*Math.max(t,8)/2;case Ua:case Fa:case za:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:case to:case ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case el:case nl:case il:return Math.ceil(n/4)*Math.ceil(t/4)*16;case sl:case rl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case eo:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jf(n){switch(n){case Mn:case Tc:return{byteLength:1,components:1};case tr:case Ac:case qn:return{byteLength:2,components:1};case Ta:case Aa:return{byteLength:2,components:4};case Xn:case wa:case zn:return{byteLength:4,components:1};case Ec:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nd(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function op(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,x)=>h.start-x.start);let f=0;for(let h=1;h<d.length;h++){let x=d[f],v=d[h];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,x=d.length;h<x;h++){let v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
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
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`uniform sampler2D dfgLUT;
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
}`,rm=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gm=`#if defined( USE_POINTS_UV )
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
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform float backgroundBlurriness;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,fg=`#if DEPTH_PACKING == 3200
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
}`,pg=`#define DISTANCE
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
}`,mg=`#define DISTANCE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Pg=`#define STANDARD
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
}`,Lg=`#define TOON
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
}`,Dg=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:ap,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:xp,beginnormal_vertex:_p,bsdfs:yp,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Ep,color_pars_vertex:Rp,color_vertex:Cp,common:Ip,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Np,emissivemap_pars_fragment:Up,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:zp,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Hp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:$p,lights_toon_fragment:jp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,lightprobes_pars_fragment:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:_m,morphinstance_vertex:ym,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Em,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Nm,packing:Um,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:zm,dithering_pars_fragment:Bm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:$m,tonemapping_fragment:Qm,tonemapping_pars_fragment:jm,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distance_vert:pg,distance_frag:mg,equirect_vert:gg,equirect_frag:xg,linedashed_vert:_g,linedashed_frag:yg,meshbasic_vert:vg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:wg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Eg,meshphong_vert:Rg,meshphong_frag:Cg,meshphysical_vert:Ig,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Dg,points_vert:Ng,points_frag:Ug,shadow_vert:Fg,shadow_frag:Og,sprite_vert:zg,sprite_frag:Bg},Dt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ri={basic:{uniforms:dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:dn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:dn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new he(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:dn([Dt.points,Dt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:dn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:dn([Dt.common,Dt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:dn([Dt.sprite,Dt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:dn([Dt.common,Dt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:dn([Dt.lights,Dt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ri.physical={uniforms:dn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var cl={r:0,b:0,g:0},kg=new Ee,id=new ne;id.set(-1,0,0,0,1,0,0,0,1);function Gg(n,t,e,i,s,r){let o=new he(0),a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let M=_.backgroundBlurriness>0;S=t.get(S,M)}return S}function x(_){let S=!1,M=h(_);M===null?p(o,a):M&&M.isColor&&(p(M,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,S){let M=h(S);M&&M.isCubeTexture?(c===void 0&&(c=new Ce(new vn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:xs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=xe.getTransfer(M.colorSpace)!==Ae,(u!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ce(new ni(2,2),new On({name:"BackgroundMaterial",uniforms:xs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=xe.getTransfer(M.colorSpace)!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,S){_.getRGB(cl,Bc(n)),e.buffers.color.setClear(cl.r,cl.g,cl.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:x,addToRenderList:v,dispose:m}}function Vg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(D,C,U,R,z){let B=!1,W=d(D,R,U,C);r!==W&&(r=W,c(r.object)),B=h(D,R,U,z),B&&x(D,R,U,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(D,C,U,R),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,C,U,R){let z=R.wireframe===!0,B=i[C.id];B===void 0&&(B={},i[C.id]=B);let W=D.isInstancedMesh===!0?D.id:0,it=B[W];it===void 0&&(it={},B[W]=it);let $=it[U.id];$===void 0&&($={},it[U.id]=$);let tt=$[z];return tt===void 0&&(tt=f(l()),$[z]=tt),tt}function f(D){let C=[],U=[],R=[];for(let z=0;z<e;z++)C[z]=0,U[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:R,object:D,attributes:{},index:null}}function h(D,C,U,R){let z=r.attributes,B=C.attributes,W=0,it=U.getAttributes();for(let $ in it)if(it[$].location>=0){let st=z[$],Pt=B[$];if(Pt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Pt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Pt=D.instanceColor)),st===void 0||st.attribute!==Pt||Pt&&st.data!==Pt.data)return!0;W++}return r.attributesNum!==W||r.index!==R}function x(D,C,U,R){let z={},B=C.attributes,W=0,it=U.getAttributes();for(let $ in it)if(it[$].location>=0){let st=B[$];st===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(st=D.instanceColor));let Pt={};Pt.attribute=st,st&&st.data&&(Pt.data=st.data),z[$]=Pt,W++}r.attributes=z,r.attributesNum=W,r.index=R}function v(){let D=r.newAttributes;for(let C=0,U=D.length;C<U;C++)D[C]=0}function p(D){m(D,0)}function m(D,C){let U=r.newAttributes,R=r.enabledAttributes,z=r.attributeDivisors;U[D]=1,R[D]===0&&(n.enableVertexAttribArray(D),R[D]=1),z[D]!==C&&(n.vertexAttribDivisor(D,C),z[D]=C)}function _(){let D=r.newAttributes,C=r.enabledAttributes;for(let U=0,R=C.length;U<R;U++)C[U]!==D[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function S(D,C,U,R,z,B,W){W===!0?n.vertexAttribIPointer(D,C,U,z,B):n.vertexAttribPointer(D,C,U,R,z,B)}function M(D,C,U,R){v();let z=R.attributes,B=U.getAttributes(),W=C.defaultAttributeValues;for(let it in B){let $=B[it];if($.location>=0){let tt=z[it];if(tt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){let st=tt.normalized,Pt=tt.itemSize,Rt=t.get(tt);if(Rt===void 0)continue;let et=Rt.buffer,wt=Rt.type,Nt=Rt.bytesPerElement,Xt=wt===n.INT||wt===n.UNSIGNED_INT||tt.gpuType===wa;if(tt.isInterleavedBufferAttribute){let yt=tt.data,jt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Fe=tt.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Zt=0;Zt<$.locationSize;Zt++)m($.location+Zt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Zt=0;Zt<$.locationSize;Zt++)p($.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Zt=0;Zt<$.locationSize;Zt++)S($.location+Zt,Pt/$.locationSize,wt,st,jt*Nt,(Fe+Pt/$.locationSize*Zt)*Nt,Xt)}else{if(tt.isInstancedBufferAttribute){for(let yt=0;yt<$.locationSize;yt++)m($.location+yt,tt.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let yt=0;yt<$.locationSize;yt++)p($.location+yt);n.bindBuffer(n.ARRAY_BUFFER,et);for(let yt=0;yt<$.locationSize;yt++)S($.location+yt,Pt/$.locationSize,wt,st,Pt*Nt,Pt/$.locationSize*yt*Nt,Xt)}}else if(W!==void 0){let st=W[it];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv($.location,st);break;case 3:n.vertexAttrib3fv($.location,st);break;case 4:n.vertexAttrib4fv($.location,st);break;default:n.vertexAttrib1fv($.location,st)}}}}_()}function E(){I();for(let D in i){let C=i[D];for(let U in C){let R=C[U];for(let z in R){let B=R[z];for(let W in B)u(B[W].object),delete B[W];delete R[z]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let C=i[D.id];for(let U in C){let R=C[U];for(let z in R){let B=R[z];for(let W in B)u(B[W].object),delete B[W];delete R[z]}}delete i[D.id]}function g(D){for(let C in i){let U=i[C];for(let R in U){let z=U[R];if(z[D.id]===void 0)continue;let B=z[D.id];for(let W in B)u(B[W].object),delete B[W];delete z[D.id]}}}function b(D){for(let C in i){let U=i[C],R=D.isInstancedMesh===!0?D.id:0,z=U[R];if(z!==void 0){for(let B in z){let W=z[B];for(let it in W)u(W[it].object),delete W[it];delete z[B]}delete U[R],Object.keys(U).length===0&&delete i[C]}}}function I(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function Hg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Wg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Ln&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let b=g===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Mn&&g!==zn&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(ee("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:M,maxSamples:E,samples:A}}function Xg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Wn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){let x=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let _=r?0:i,S=_*4,M=m.clippingState||null;l.value=M,M=u(x,f,S,h);for(let E=0;E!==S;++E)M[E]=e[E];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,x){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,x!==!0||p===null){let m=h+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,M=h;S!==v;++S,M+=4)o.copy(d[S]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var ro=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Fr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:fs});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=sn),new Ks(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Uu=256,qg=3,Yg=20,sd=256,rd=16,Zg=3,Jg=new X,Kg=new he,ul=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ks(1,10,null),this._boxMesh=new Ce(new vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Jg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,x=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Kg));let p=new Ks(i,s,u);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=x,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Uu,Oc(t))}_fromTexture(t,e){t.mapping===ms||t.mapping===js?this._setSize(t.image.length===0?Uu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Fu(t,!1,!1),i=Math.log2(t)-qg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Fu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ms||t.mapping===js?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ou()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$g(),this._integrationMaterial=Qg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/rd);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Zg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(sd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=jg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Fu(n,t,e){return new ro(n,{minFilter:wi,generateMipmaps:t,type:qn,colorSpace:Er,depthBuffer:e})}function oo(n,t,e){return new On({name:n,uniforms:t,vertexShader:me.cube_vert,fragmentShader:e,side:cn,blending:fs,depthTest:!1,depthWrite:!1})}function $g(){return oo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sd}u

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
	`)}function Qg(){return oo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rd}},`

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
	`)}function jg(){return oo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yg}
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
	`)}function Ou(){return oo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zu(){return oo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function t0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===Ma||h===Sa)if(t.has(f)){let x=t.get(f).texture;return a(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let v=new ro(x.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,x=h===Ma||h===Sa,v=h===ms||h===js;if(x||v){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new ul(n)),p=x?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let _=f.image;return x&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new ul(n)),p=x?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===Ma?f.mapping=ms:h===Sa&&(f.mapping=js),f}function l(f){let h=0,x=6;for(let v=0;v<x;v++)f[v]!==void 0&&h++;return h===x}function c(f){let h=f.target;h.removeEventListener("dispose",c);let x=t.get(h);x!==void 0&&(t.delete(h),x.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let x=e.get(h);x!==void 0&&(e.delete(h),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function e0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&br("WebGLRenderer: "+i+" extension not supported."),s}}}function n0(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(x=>delete s[x]);function a(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let p in x.attributes)t.remove(x.attributes[p]);x.removeEventListener("dispose",a),delete s[x.id],o.unregister(x);let v=r.get(x);v&&(t.remove(v),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function u(x){let v=x.attributes;for(let p in v)t.update(v[p],n.ARRAY_BUFFER)}function d(x){let v=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let _=v!==null?v.array.length:p.array.length/3-1,S=p.count>=65535?Ur:Nr,M=new S(Math.ceil(_/3)*6,1),E=M.array;if(v!==null){let g=v.array;m=v.version;for(let b=0,I=0;b<_;b+=3){let L=g[b+0],D=g[b+1],C=g[b+2];E[I++]=L,E[I++]=D,E[I++]=D,E[I++]=C,E[I++]=C,E[I++]=L}}else{m=p.version;for(let g=0,b=0;g<_;g+=3){let I=g+0,L=g+1,D=g+2;E[b++]=I,E[b++]=L,E[b++]=L,E[b++]=D,E[b++]=D,E[b++]=I}}M.version=m;let A=r.get(x);A&&t.remove(A),r.set(x,M)}function f(x){let v=r.get(x);if(v){let p=x.index;p!==null&&v.version<p.version&&d(x)}else d(x);return r.get(x)}function h(){for(let x in s){let v=s[x].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function i0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),e.update(f,i,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let v=0;for(let p=0;p<h;p++)v+=f[p];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function s0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function r0(n,t,e){let i=new WeakMap,s=new Be;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let I=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;h===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let M=a.attributes.position.count*S,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*E*4*d),g=new Ir(A,M,E,d);g.type=zn,g.needsUpdate=!0;let b=S*4;for(let L=0;L<d;L++){let D=p[L],C=m[L],U=_[L],R=M*E*4*L;for(let z=0;z<D.count;z++){let B=z*b;h===!0&&(s.fromBufferAttribute(D,z),A[R+B+0]=s.x,A[R+B+1]=s.y,A[R+B+2]=s.z,A[R+B+3]=0),x===!0&&(s.fromBufferAttribute(C,z),A[R+B+4]=s.x,A[R+B+5]=s.y,A[R+B+6]=s.z,A[R+B+7]=0),v===!0&&(s.fromBufferAttribute(U,z),A[R+B+8]=s.x,A[R+B+9]=s.y,A[R+B+10]=s.z,A[R+B+11]=U.itemSize===4?s.w:1)}}f={count:d,texture:g,size:new fe(M,E)},i.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];let x=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function o0(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var a0={[_c]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[bc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function l0(n,t,e,i,s,r){let o=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new ln;u.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Re([0,2,0,0,2,0],2));let d=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ce(u,d),h=new qr(-1,1,1,-1,0,1),x=null,v=null,p=!1,m,_=null,S=[],M=!1;this.setSize=function(E,A){o.setSize(E,A),a!==null&&a.setSize(E,A),l!==null&&l.setSize(E,A);for(let g=0;g<S.length;g++){let b=S[g];b.setSize&&b.setSize(E,A)}},this.setEffects=function(E){S=E,M=S.length>0&&S[0].isRenderPass===!0;let A=o.width,g=o.height;S.length>0&&a===null&&(a=new In(A,g,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new In(A,g,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(I=>I.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Si(A,g),r===!0&&(c.format=Ti,c.type=gs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let I=0;I<S.length;I++){let L=S[I];L.setSize&&L.setSize(A,g),b&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(E,A){if(p||E.toneMapping===ii&&S.length===0)return!1;if(_=A,A!==null){let g=A.width,b=A.height;(o.width!==g||o.height!==b)&&this.setSize(g,b)}return M===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=ii,!0},this.hasRenderPass=function(){return M},this.end=function(E,A){E.toneMapping=m,p=!0;let g=o,b=a;for(let I=0;I<S.length;I++){let L=S[I];L.enabled!==!1&&(L.render(E,b,g,A),L.needsSwap!==!1&&(g=b,b=b===a?l:a))}if(x!==E.outputColorSpace||v!==E.toneMapping){x=E.outputColorSpace,v=E.toneMapping,d.defines={},xe.getTransfer(x)===Ae&&(d.defines.SRGB_TRANSFER="");let I=a0[v];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(_),E.render(f,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var od=new mn,ad=new Si(1,1),ld=new zr(1),cd=new Ir,hd=new ia,ud=new Fr,Bu=[],ku=[],Gu=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function ir(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fl(n,t){let e=ku[t];e===void 0&&(e=new Int32Array(t),ku[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function c0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function h0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function u0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function d0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function f0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),Qe(e,i)}}function p0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),Qe(e,i)}}function m0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,i))return;Gu.set(i),n.uniformMatrix4fv(this.addr,!1,Gu),Qe(e,i)}}function g0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function x0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function _0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function v0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function M0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function S0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function b0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function pl(n){return n.version===0&&(n.compareFunction=Dc,n.needsUpdate=!0),n}function w0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=pl(ad):r=od,e.setTexture2D(t||r,s)}function T0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hd,s)}function A0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=pl(ld):r=ud,e.setTextureCube(t||r,s)}function E0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cd,s)}function R0(n){switch(n){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return _0;case 35669:case 35673:return y0;case 5125:return v0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return E0}}function C0(n,t){n.uniform1fv(this.addr,t)}function I0(n,t){let e=ir(t,this.size,2);n.uniform2fv(this.addr,e)}function P0(n,t){let e=ir(t,this.size,3);n.uniform3fv(this.addr,e)}function L0(n,t){let e=ir(t,this.size,4);n.uniform4fv(this.addr,e)}function D0(n,t){let e=ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function N0(n,t){let e=ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function U0(n,t){let e=ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function F0(n,t){n.uniform1iv(this.addr,t)}function O0(n,t){n.uniform2iv(this.addr,t)}function z0(n,t){n.uniform3iv(this.addr,t)}function B0(n,t){n.uniform4iv(this.addr,t)}function k0(n,t){n.uniform1uiv(this.addr,t)}function G0(n,t){n.uniform2uiv(this.addr,t)}function V0(n,t){n.uniform3uiv(this.addr,t)}function H0(n,t){n.uniform4uiv(this.addr,t)}function W0(n,t,e){let i=this.cache,s=t.length,r=fl(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=pl(ad):o=od;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function X0(n,t,e){let i=this.cache,s=t.length,r=fl(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hd,r[o])}function q0(n,t,e){let i=this.cache,s=t.length,r=fl(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=pl(ld):o=ud;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Y0(n,t,e){let i=this.cache,s=t.length,r=fl(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cd,r[o])}function Z0(n){switch(n){case 5126:return C0;case 35664:return I0;case 35665:return P0;case 35666:return L0;case 35674:return D0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return z0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return G0;case 36295:return V0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}var Xc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=R0(e.type)}},qc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}},Yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function Wu(n,t){n.seq.push(t),n.map[t.id]=t}function J0(n,t,e){let i=n.name,s=i.length;for(Hc.lastIndex=0;;){let r=Hc.exec(i),o=Hc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wu(e,c===void 0?new Xc(a,n,t):new qc(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Yc(a),Wu(e,d)),e=d}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);J0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Xu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var K0=37297,$0=0;function Q0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var qu=new ne;function j0(n){xe._getMatrix(qu,xe.workingColorSpace,n);let t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case Rr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Q0(n.getShaderSource(t),a)}else return r}function tx(n,t){let e=j0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ex={[_c]:"Linear",[yc]:"Reinhard",[vc]:"Cineon",[Zr]:"ACESFilmic",[Sc]:"AgX",[bc]:"Neutral",[Mc]:"Custom"};function nx(n,t){let e=ex[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hl=new X;function ix(){xe.getLuminanceCoefficients(hl);let n=hl.x.toFixed(4),t=hl.y.toFixed(4),e=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function rx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ox(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function so(n){return n!==""}function Zu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ju(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(n){return n.replace(ax,lx)}function lx(n,t){let e=me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Zc(e)}var cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(n){return n.replace(cx,hx)}function hx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ux={[ds]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function dx(n){return ux[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fx={[js]:"ENVMAP_MODE_REFRACTION"};function px(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mx={[xc]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[pu]:"ENVMAP_BLENDING_ADD"};function gx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mx[n.combine]||"ENVMAP_BLENDING_NONE"}function xx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=px(e),d=gx(e),f=sx(e),h=rx(r),x=s.createProgram(),v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(so).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(so).join(`
`),p.length>0&&(p+=`
`)):(v=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?me.tonemapping_pars_fragment:"",e.toneMapping!==ii?nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,tx("linearToOutputTexel",e.outputColorSpace),ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(so).join(`
`)),o=Zc(o),o=Zu(o,e),o=Ju(o,e),a=Zc(a),a=Zu(a,e),a=Ju(a,e),o=Ku(o),a=Ku(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+v+o,S=m+p+a,M=Xu(s,s.VERTEX_SHADER,_),E=Xu(s,s.FRAGMENT_SHADER,S);s.attachShader(x,M),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",C=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(E)||"",R=D.trim(),z=C.trim(),B=U.trim(),W=!0,it=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,E);else{let $=Yu(s,M,"vertex"),tt=Yu(s,E,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+R+`
`+$+`
`+tt)}else R!==""?ee("WebGLProgram: Program Info Log:",R):(z===""||B==="")&&(it=!1);it&&(L.diagnostics={runnable:W,programLog:R,vertexShader:{log:z,prefix:v},fragmentShader:{log:B,prefix:p}})}s.deleteShader(M),s.deleteShader(E),g=new nr(s,x),b=ox(s,x)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,K0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}var _x=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Kc(t),e.set(t,i)),i}},Kc=class{constructor(t){this.id=_x++,this.code=t,this.usedTimes=0}};function yx(n){return n===Yi||n===to||n===eo}function vx(n,t,e,i,s,r){let o=new Pr,a=new Jc,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,b,I,L,D,C){let U=L.fog,R=D.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,W=t.get(g.envMap||z,B),it=f[g.type],$=i.precision;g.precision!==null&&($=i.getMaxPrecision(g.precision),$!==g.precision&&ee("WebGLProgram.getParameters:",g.precision,"not supported, using",$,"instead."));let tt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,st=tt!==void 0?tt.length:0,Pt=0;R.morphAttributes.position!==void 0&&(Pt=1),R.morphAttributes.normal!==void 0&&(Pt=2),R.morphAttributes.color!==void 0&&(Pt=3);let Rt,et,wt,Nt;if(it){let Ct=ri[it];Rt=Ct.vertexShader,et=Ct.fragmentShader}else{Rt=g.vertexShader,et=g.fragmentShader;let Ct=a.getVertexShaderStage(g),ve=a.getFragmentShaderStage(g);a.update(g,Ct,ve),wt=Ct.id,Nt=ve.id}let Xt=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),jt=D.isInstancedMesh===!0,Fe=D.isBatchedMesh===!0,Zt=!!g.map,ge=!!g.matcap,ct=!!W,$t=ct&&W.isPMREMTexture===!0,vt=!!g.aoMap,ot=!!g.lightMap,Et=!!g.bumpMap&&g.wireframe===!1,Wt=!!g.normalMap,te=!!g.displacementMap,le=!!g.emissiveMap,Ie=!!g.metalnessMap,Le=!!g.roughnessMap,ce=g.anisotropy>0,G=g.clearcoat>0,Xe=g.diffuseRoughness>0,de=g.dispersion>0,ue=g.retroreflectivity>0,Mt=g.iridescence>0,Te=g.sheen>0,Ot=g.transmission>0,zt=ce&&!!g.anisotropyMap,P=G&&!!g.clearcoatMap,w=G&&!!g.clearcoatNormalMap,Y=G&&!!g.clearcoatRoughnessMap,pt=Xe&&!!g.diffuseRoughnessMap,lt=Mt&&!!g.iridescenceMap,xt=Mt&&!!g.iridescenceThicknessMap,_t=Te&&!!g.sheenColorMap,Z=Te&&!!g.sheenRoughnessMap,q=!!g.specularMap,nt=!!g.specularColorMap,F=!!g.specularIntensityMap,at=Ot&&!!g.transmissionMap,J=Ot&&!!g.thicknessMap,ft=!!g.gradientMap,ut=!!g.alphaMap,dt=g.alphaTest>0,It=!!g.alphaHash,qt=!!g.extensions,ht=ii;g.toneMapped&&(Xt===null||Xt.isXRRenderTarget===!0)&&(ht=n.toneMapping);let Ft=$t?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,re={shaderID:it,shaderType:g.type,shaderName:g.name,vertexShader:Rt,fragmentShader:et,defines:g.defines,customVertexShaderID:wt,customFragmentShaderID:Nt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:$,batching:Fe,batchingColor:Fe&&D._colorsTexture!==null,instancing:jt,instancingColor:jt&&D.instanceColor!==null,instancingMorph:jt&&D.morphTexture!==null,outputColorSpace:Xt===null?n.outputColorSpace:Xt.isXRRenderTarget===!0?Xt.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Zt,matcap:ge,envMap:ct,envMapMode:ct&&W.mapping,envMapPMREM:$t,envMapMaxLod:$t?Ft.length-1:null,envMapSize:$t?Ft[0].width:null,aoMap:vt,lightMap:ot,bumpMap:Et,normalMap:Wt,displacementMap:te,emissiveMap:le,normalMapObjectSpace:Wt&&g.normalMapType===xu,normalMapTangentSpace:Wt&&g.normalMapType===al,packedNormalMap:Wt&&g.normalMapType===al&&yx(g.normalMap.format),metalnessMap:Ie,roughnessMap:Le,anisotropy:ce,anisotropyMap:zt,clearcoat:G,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:Y,diffuseRoughness:Xe,diffuseRoughnessMap:pt,dispersion:de,retroreflection:ue,iridescence:Mt,iridescenceMap:lt,iridescenceThicknessMap:xt,sheen:Te,sheenColorMap:_t,sheenRoughnessMap:Z,specularMap:q,specularColorMap:nt,specularIntensityMap:F,transmission:Ot,transmissionMap:at,thicknessMap:J,gradientMap:ft,opaque:g.transparent===!1&&g.blending===Qs&&g.alphaToCoverage===!1,alphaMap:ut,alphaTest:dt,alphaHash:It,combine:g.combine,mapUv:Zt&&h(g.map.channel),aoMapUv:vt&&h(g.aoMap.channel),lightMapUv:ot&&h(g.lightMap.channel),bumpMapUv:Et&&h(g.bumpMap.channel),normalMapUv:Wt&&h(g.normalMap.channel),displacementMapUv:te&&h(g.displacementMap.channel),emissiveMapUv:le&&h(g.emissiveMap.channel),metalnessMapUv:Ie&&h(g.metalnessMap.channel),roughnessMapUv:Le&&h(g.roughnessMap.channel),anisotropyMapUv:zt&&h(g.anisotropyMap.channel),clearcoatMapUv:P&&h(g.clearcoatMap.channel),clearcoatNormalMapUv:w&&h(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&h(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&h(g.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&h(g.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&h(g.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&h(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&h(g.sheenRoughnessMap.channel),specularMapUv:q&&h(g.specularMap.channel),specularColorMapUv:nt&&h(g.specularColorMap.channel),specularIntensityMapUv:F&&h(g.specularIntensityMap.channel),transmissionMapUv:at&&h(g.transmissionMap.channel),thicknessMapUv:J&&h(g.thicknessMap.channel),alphaMapUv:ut&&h(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Wt||ce),vertexNormals:!!R.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(Zt||ut),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||R.attributes.normal===void 0&&Wt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Pt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:Zt&&g.map.isVideoTexture===!0&&xe.getTransfer(g.map.colorSpace)===Ae,decodeVideoTextureEmissive:le&&g.emissiveMap.isVideoTexture===!0&&xe.getTransfer(g.emissiveMap.colorSpace)===Ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xn,flipSided:g.side===cn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:qt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&g.extensions.multiDraw===!0||Fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function v(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let I in g.defines)b.push(I),b.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(p(b,g),m(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function m(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function _(g){let b=f[g.type],I;if(b){let L=ri[b];I=Lu.clone(L.uniforms)}else I=g.uniforms;return I}function S(g,b){let I=u.get(b);return I!==void 0?++I.usedTimes:(I=new xx(n,b,g,s),c.push(I),u.set(b,I)),I}function M(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:_,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function Mx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ju(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,x,v,p,m){let _=n[t];return _===void 0?(_={id:f.id,object:f,geometry:h,material:x,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},n[t]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=x,_.materialVariant=o(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=p,_.group=m),t++,_}function l(f,h,x,v,p,m,_){_.reversedDepth===!0&&(p=-p);let S=a(f,h,x,v,p,m);x.transmission>0?i.push(S):x.transparent===!0?s.push(S):e.push(S)}function c(f,h,x,v,p,m){let _=a(f,h,x,v,p,m);x.transmission>0?i.unshift(_):x.transparent===!0?s.unshift(_):e.unshift(_)}function u(f,h){e.length>1&&e.sort(f||Sx),i.length>1&&i.sort(h||Qu),s.length>1&&s.sort(h||Qu)}function d(){for(let f=t,h=n.length;f<h;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function bx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ju,n.set(i,[o])):s>=r.length?(o=new ju,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function wx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new he};break;case"SpotLight":e={position:new X,direction:new X,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function Tx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ax=0;function Ex(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rx(n){let t=new wx,e=Tx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);let s=new X,r=new Ee,o=new Ee;function a(c){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,x=0,v=0,p=0,m=0,_=0,S=0,M=0,E=0,A=0,g=0,b=0,I=0,L=0;c.sort(Ex);for(let C=0,U=c.length;C<U;C++){let R=c[C],z=R.color,B=R.intensity,W=R.distance,it=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Yi?it=R.shadow.map.texture:it=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=z.r*B,d+=z.g*B,f+=z.b*B;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],B);L++}else if(R.isSunLight){let $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[x]=st,i.sunShadowMap[x]=it;let Pt=tt.getViewportCount();for(let Rt=0;Rt<Pt;Rt++)i.sunShadowMatrix[v+Rt]=tt.getMatrix(Rt),i.sunShadowCascade[v+Rt]=tt._cascadeData[Rt];v+=Pt,x++}i.sun[h]=$,h++}else if(R.isDirectionalLight){let $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,i.directionalShadow[p]=st,i.directionalShadowMap[p]=it,i.directionalShadowMatrix[p]=R.shadow.matrix,E++}i.directional[p]=$,p++}else if(R.isSpotLight){let $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(z).multiplyScalar(B),$.distance=W,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[_]=$;let tt=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,tt.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[_]=tt.matrix,R.castShadow){let st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,i.spotShadow[_]=st,i.spotShadowMap[_]=it,g++}_++}else if(R.isRectAreaLight){let $=t.get(R);$.color.copy(z).multiplyScalar(B),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[S]=$,S++}else if(R.isPointLight){let $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){let tt=R.shadow,st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,st.shadowCameraNear=tt.camera.near,st.shadowCameraFar=tt.camera.far,i.pointShadow[m]=st,i.pointShadowMap[m]=it,i.pointShadowMatrix[m]=R.shadow.matrix,A++}i.point[m]=$,m++}else if(R.isHemisphereLight){let $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(B),$.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[M]=$,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.sunLength!==h||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==x||D.numDirectionalShadows!==E||D.numPointShadows!==A||D.numSpotShadows!==g||D.numSpotMaps!==b||D.numLightProbes!==L)&&(i.sun.length=h,i.directional.length=p,i.spot.length=_,i.rectArea.length=S,i.point.length=m,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,D.sunLength=h,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=x,D.numDirectionalShadows=E,D.numPointShadows=A,D.numSpotShadows=g,D.numSpotMaps=b,D.numLightProbes=L,i.version=Ax++)}function l(c,u){let d=0,f=0,h=0,x=0,v=0,p=0,m=u.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let M=c[_];if(M.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),d++}else if(M.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(M.isSpotLight){let E=i.spot[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),x++}else if(M.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:i}}function td(n){let t=new Rx(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new td(n),t.set(s,[a])):r>=o.length?(a=new td(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`,Lx=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Dx=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],ed=new Ee,io=new X,Wc=new X;function Nx(n,t,e){let i=new Gi,s=new fe,r=new fe,o=new Be,a=new aa,l=new la,c={},u=e.maxTextureSize,d={[qi]:cn,[cn]:qi,[xn]:xn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Ix,fragmentShader:Px}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let x=new ln;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ce(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let m=this.type;this.render=function(A,g,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Zh&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);let I=n.getRenderTarget(),L=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),C=n.state;C.setBlending(fs),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let U=m!==this.type;U&&g.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(z=>z.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,z=A.length;R<z;R++){let B=A[R],W=B.shadow;if(W===void 0){ee("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();s.multiply(it),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,W.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===$s){if(B.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new In(s.x,s.y,{format:Yi,type:qn,minFilter:sn,magFilter:sn,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Si(s.x,s.y,zn),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=vi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn}else B.isPointLight?(W.map=new ro(s.x),W.map.depthTexture=new zr(s.x,Xn)):(W.map=new In(s.x,s.y),W.map.depthTexture=new Si(s.x,s.y,Xn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=vi,this.type===ds?(W.map.depthTexture.compareFunction=$?Lc:Pc,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let tt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,b);let st=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:b.layers;for(let Pt=0;Pt<tt;Pt++){let Rt=W.getCamera(Pt);if(B.isPointLight){let et=W.camera,wt=W.matrix,Nt=B.distance||et.far;Nt!==et.far&&(et.far=Nt,et.updateProjectionMatrix()),io.setFromMatrixPosition(B.matrixWorld),et.position.copy(io),Wc.copy(et.position),Wc.add(Lx[Pt]),et.up.copy(Dx[Pt]),et.lookAt(Wc),et.updateMatrixWorld(),wt.makeTranslation(-io.x,-io.y,-io.z),ed.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ed,et.coordinateSystem,et.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,Pt),n.clear();else{Pt===0&&(n.setRenderTarget(W.map),n.clear());let et=W.getViewport(Pt);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),C.viewport(o)}i=W.getFrustum(Pt),M(g,b,Rt,B,st,this.type)}W.isPointLightShadow!==!0&&this.type===$s&&_(W,b),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(I,L,D)};function _(A,g){let b=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new In(s.x,s.y,{format:Yi,type:qn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(g,null,b,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(g,null,b,h,v,null)}function S(A,g,b,I){let L=null,D=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)L=D;else if(L=b.isPointLight===!0?l:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let C=L.uuid,U=g.uuid,R=c[C];R===void 0&&(R={},c[C]=R);let z=R[U];z===void 0&&(z=L.clone(),R[U]=z,g.addEventListener("dispose",E)),L=z}if(L.visible=g.visible,L.wireframe=g.wireframe,I===$s?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:d[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let C=n.properties.get(L);C.light=b}return L}function M(A,g,b,I,L,D){if(A.visible===!1)return;if(A.layers.test(L)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===$s)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let R=t.update(A),z=A.material;if(Array.isArray(z)){let B=R.groups;for(let W=0,it=B.length;W<it;W++){let $=B[W],tt=z[$.materialIndex];if(tt&&tt.visible){let st=S(A,tt,I,D);A.onBeforeShadow(n,A,g,b,R,st,$),n.renderBufferDirect(b,null,R,st,A,$),A.onAfterShadow(n,A,g,b,R,st,$)}}}else if(z.visible){let B=S(A,z,I,D);A.onBeforeShadow(n,A,g,b,R,B,null),n.renderBufferDirect(b,null,R,B,A,null),A.onAfterShadow(n,A,g,b,R,B,null)}}let U=A.children;for(let R=0,z=U.length;R<z;R++)M(U[R],g,b,I,L,D)}function E(A){A.target.removeEventListener("dispose",E);for(let b in c){let I=c[b],L=A.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}}function Ux(n,t){function e(){let F=!1,at=new Be,J=null,ft=new Be(0,0,0,0);return{setMask:function(ut){J!==ut&&!F&&(n.colorMask(ut,ut,ut,ut),J=ut)},setLocked:function(ut){F=ut},setClear:function(ut,dt,It,qt,ht){ht===!0&&(ut*=qt,dt*=qt,It*=qt),at.set(ut,dt,It,qt),ft.equals(at)===!1&&(n.clearColor(ut,dt,It,qt),ft.copy(at))},reset:function(){F=!1,J=null,ft.set(-1,0,0,0)}}}function i(){let F=!1,at=!1,J=null,ft=null,ut=null;return{setReversed:function(dt){if(at!==dt){let It=t.get("EXT_clip_control");dt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),at=dt;let qt=ut;ut=null,this.setClear(qt)}},getReversed:function(){return at},setTest:function(dt){dt?yt(n.DEPTH_TEST):jt(n.DEPTH_TEST)},setMask:function(dt){J!==dt&&!F&&(n.depthMask(dt),J=dt)},setFunc:function(dt){if(at&&(dt=Ru[dt]),ft!==dt){switch(dt){case Xo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case Jo:n.depthFunc(n.GEQUAL);break;case Ko:n.depthFunc(n.GREATER);break;case $o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=dt}},setLocked:function(dt){F=dt},setClear:function(dt){ut!==dt&&(ut=dt,at&&(dt=1-dt),n.clearDepth(dt))},reset:function(){F=!1,J=null,ft=null,ut=null,at=!1}}}function s(){let F=!1,at=null,J=null,ft=null,ut=null,dt=null,It=null,qt=null,ht=null;return{setTest:function(Ft){F||(Ft?yt(n.STENCIL_TEST):jt(n.STENCIL_TEST))},setMask:function(Ft){at!==Ft&&!F&&(n.stencilMask(Ft),at=Ft)},setFunc:function(Ft,re,Ct){(J!==Ft||ft!==re||ut!==Ct)&&(n.stencilFunc(Ft,re,Ct),J=Ft,ft=re,ut=Ct)},setOp:function(Ft,re,Ct){(dt!==Ft||It!==re||qt!==Ct)&&(n.stencilOp(Ft,re,Ct),dt=Ft,It=re,qt=Ct)},setLocked:function(Ft){F=Ft},setClear:function(Ft){ht!==Ft&&(n.clearStencil(Ft),ht=Ft)},reset:function(){F=!1,at=null,J=null,ft=null,ut=null,dt=null,It=null,qt=null,ht=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,u={},d={},f={},h=new WeakMap,x=[],v=null,p=!1,m=null,_=null,S=null,M=null,E=null,A=null,g=null,b=new he(0,0,0),I=0,L=!1,D=null,C=null,U=null,R=null,z=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec($)[1]),W=it>=1):$.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=it>=2);let tt=null,st={},Pt=n.getParameter(n.SCISSOR_BOX),Rt=n.getParameter(n.VIEWPORT),et=new Be().fromArray(Pt),wt=new Be().fromArray(Rt);function Nt(F,at,J,ft){let ut=new Uint8Array(4),dt=n.createTexture();n.bindTexture(F,dt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<J;It++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(at+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return dt}let Xt={};Xt[n.TEXTURE_2D]=Nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Xt[n.TEXTURE_CUBE_MAP]=Nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Xt[n.TEXTURE_2D_ARRAY]=Nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xt[n.TEXTURE_3D]=Nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(n.DEPTH_TEST),o.setFunc(Ws),Et(!1),Wt(uc),yt(n.CULL_FACE),vt(fs);function yt(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function jt(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Fe(F,at){return f[F]!==at?(n.bindFramebuffer(F,at),f[F]=at,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=at),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=at),!0):!1}function Zt(F,at){let J=x,ft=!1;if(F){J=h.get(at),J===void 0&&(J=[],h.set(at,J));let ut=F.textures;if(J.length!==ut.length||J[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,It=ut.length;dt<It;dt++)J[dt]=n.COLOR_ATTACHMENT0+dt;J.length=ut.length,ft=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ft=!0);ft&&n.drawBuffers(J)}function ge(F){return v!==F?(n.useProgram(F),v=F,!0):!1}let ct={[ps]:n.FUNC_ADD,[Kh]:n.FUNC_SUBTRACT,[$h]:n.FUNC_REVERSE_SUBTRACT};ct[Qh]=n.MIN,ct[jh]=n.MAX;let $t={[tu]:n.ZERO,[eu]:n.ONE,[nu]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[lu]:n.SRC_ALPHA_SATURATE,[ou]:n.DST_COLOR,[su]:n.DST_ALPHA,[iu]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[au]:n.ONE_MINUS_DST_COLOR,[ru]:n.ONE_MINUS_DST_ALPHA,[cu]:n.CONSTANT_COLOR,[hu]:n.ONE_MINUS_CONSTANT_COLOR,[uu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(F,at,J,ft,ut,dt,It,qt,ht,Ft){if(F===fs){p===!0&&(jt(n.BLEND),p=!1);return}if(p===!1&&(yt(n.BLEND),p=!0),F!==Jh){if(F!==m||Ft!==L){if((_!==ps||E!==ps)&&(n.blendEquation(n.FUNC_ADD),_=ps,E=ps),Ft)switch(F){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fc:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",F);break}S=null,M=null,A=null,g=null,b.set(0,0,0),I=0,m=F,L=Ft}return}ut=ut||at,dt=dt||J,It=It||ft,(at!==_||ut!==E)&&(n.blendEquationSeparate(ct[at],ct[ut]),_=at,E=ut),(J!==S||ft!==M||dt!==A||It!==g)&&(n.blendFuncSeparate($t[J],$t[ft],$t[dt],$t[It]),S=J,M=ft,A=dt,g=It),(qt.equals(b)===!1||ht!==I)&&(n.blendColor(qt.r,qt.g,qt.b,ht),b.copy(qt),I=ht),m=F,L=!1}function ot(F,at){F.side===xn?jt(n.CULL_FACE):yt(n.CULL_FACE);let J=F.side===cn;at&&(J=!J),Et(J),F.blending===Qs&&F.transparent===!1?vt(fs):vt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ft=F.stencilWrite;a.setTest(ft),ft&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(F){D!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),D=F)}function Wt(F){F!==qh?(yt(n.CULL_FACE),F!==C&&(F===uc?n.cullFace(n.BACK):F===Yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):jt(n.CULL_FACE),C=F}function te(F){F!==U&&(W&&n.lineWidth(F),U=F)}function le(F,at,J){F?(yt(n.POLYGON_OFFSET_FILL),(R!==at||z!==J)&&(R=at,z=J,o.getReversed()&&(at=-at,J=-J),n.polygonOffset(at,J))):jt(n.POLYGON_OFFSET_FILL)}function Ie(F){F?yt(n.SCISSOR_TEST):jt(n.SCISSOR_TEST)}function Le(F){F===void 0&&(F=n.TEXTURE0+B-1),tt!==F&&(n.activeTexture(F),tt=F)}function ce(F,at,J){J===void 0&&(tt===null?J=n.TEXTURE0+B-1:J=tt);let ft=st[J];ft===void 0&&(ft={type:void 0,texture:void 0},st[J]=ft),(ft.type!==F||ft.texture!==at)&&(tt!==J&&(n.activeTexture(J),tt=J),n.bindTexture(F,at||Xt[F]),ft.type=F,ft.texture=at)}function G(){let F=st[tt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Xe(){try{n.compressedTexImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function de(){try{n.compressedTexImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function ue(){try{n.texSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function Mt(){try{n.texSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function Te(){try{n.compressedTexSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function Ot(){try{n.compressedTexSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function zt(){try{n.texStorage2D(...arguments)}catch(F){se("WebGLState:",F)}}function P(){try{n.texStorage3D(...arguments)}catch(F){se("WebGLState:",F)}}function w(){try{n.texImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function Y(){try{n.texImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function pt(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function lt(F,at){d[F]!==at&&(n.pixelStorei(F,at),d[F]=at)}function xt(F){et.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),et.copy(F))}function _t(F){wt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),wt.copy(F))}function Z(F,at){let J=c.get(at);J===void 0&&(J=new WeakMap,c.set(at,J));let ft=J.get(F);ft===void 0&&(ft=n.getUniformBlockIndex(at,F.name),n.uniformBlockBinding(at,ft,ft),J.set(F,ft))}function q(F,at,J){let ut=c.get(at).get(F);l[ut]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,ut,J),l[ut]=J)}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,st={},f={},l={},h=new WeakMap,x=[],v=null,p=!1,m=null,_=null,S=null,M=null,E=null,A=null,g=null,b=new he(0,0,0),I=0,L=!1,D=null,C=null,U=null,R=null,z=null,et.set(0,0,n.canvas.width,n.canvas.height),wt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:jt,bindFramebuffer:Fe,drawBuffers:Zt,useProgram:ge,setBlending:vt,setMaterial:ot,setFlipSided:Et,setCullFace:Wt,setLineWidth:te,setPolygonOffset:le,setScissorTest:Ie,activeTexture:Le,bindTexture:ce,unbindTexture:G,compressedTexImage2D:Xe,compressedTexImage3D:de,texImage2D:w,texImage3D:Y,pixelStorei:lt,getParameter:pt,updateUBOMapping:Z,uniformBlockBinding:q,texStorage2D:zt,texStorage3D:P,texSubImage2D:ue,texSubImage3D:Mt,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ot,scissor:xt,viewport:_t,reset:nt}}function Fx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,d=new Set,f,h=new WeakMap,x=new Set,v=new FinalizationRegistry(P=>x.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return p?new OffscreenCanvas(P,w):Cr("canvas")}function _(P,w,Y){let pt=1,lt=zt(P);if((lt.width>Y||lt.height>Y)&&(pt=Y/Math.max(lt.width,lt.height)),pt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let xt=Math.floor(pt*lt.width),_t=Math.floor(pt*lt.height);f===void 0&&(f=m(xt,_t));let Z=w?m(xt,_t):f;return Z.width=xt,Z.height=_t,Z.getContext("2d").drawImage(P,0,0,xt,_t),ee("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+xt+"x"+_t+")."),Z}else return"data"in P&&ee("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function S(P){return P.generateMipmaps}function M(P){n.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(P,w,Y,pt,lt,xt=!1){if(P!==null){if(n[P]!==void 0)return n[P];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _t;pt&&(_t=t.get("EXT_texture_norm16"),_t||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=w;if(w===n.RED&&(Y===n.FLOAT&&(Z=n.R32F),Y===n.HALF_FLOAT&&(Z=n.R16F),Y===n.UNSIGNED_BYTE&&(Z=n.R8),Y===n.UNSIGNED_SHORT&&_t&&(Z=_t.R16_EXT),Y===n.SHORT&&_t&&(Z=_t.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Z=n.R8UI),Y===n.UNSIGNED_SHORT&&(Z=n.R16UI),Y===n.UNSIGNED_INT&&(Z=n.R32UI),Y===n.BYTE&&(Z=n.R8I),Y===n.SHORT&&(Z=n.R16I),Y===n.INT&&(Z=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(Z=n.RG32F),Y===n.HALF_FLOAT&&(Z=n.RG16F),Y===n.UNSIGNED_BYTE&&(Z=n.RG8),Y===n.UNSIGNED_SHORT&&_t&&(Z=_t.RG16_EXT),Y===n.SHORT&&_t&&(Z=_t.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Z=n.RG8UI),Y===n.UNSIGNED_SHORT&&(Z=n.RG16UI),Y===n.UNSIGNED_INT&&(Z=n.RG32UI),Y===n.BYTE&&(Z=n.RG8I),Y===n.SHORT&&(Z=n.RG16I),Y===n.INT&&(Z=n.RG32I)),w===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),Y===n.UNSIGNED_INT&&(Z=n.RGB32UI),Y===n.BYTE&&(Z=n.RGB8I),Y===n.SHORT&&(Z=n.RGB16I),Y===n.INT&&(Z=n.RGB32I)),w===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),Y===n.UNSIGNED_INT&&(Z=n.RGBA32UI),Y===n.BYTE&&(Z=n.RGBA8I),Y===n.SHORT&&(Z=n.RGBA16I),Y===n.INT&&(Z=n.RGBA32I)),w===n.RGB&&(Y===n.UNSIGNED_SHORT&&_t&&(Z=_t.RGB16_EXT),Y===n.SHORT&&_t&&(Z=_t.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),w===n.RGBA){let q=xt?Rr:xe.getTransfer(lt);Y===n.FLOAT&&(Z=n.RGBA32F),Y===n.HALF_FLOAT&&(Z=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Z=q===Ae?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&_t&&(Z=_t.RGBA16_EXT),Y===n.SHORT&&_t&&(Z=_t.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function g(P,w){let Y;return P?w===null||w===Xn||w===gs?Y=n.DEPTH24_STENCIL8:w===zn?Y=n.DEPTH32F_STENCIL8:w===tr&&(Y=n.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xn||w===gs?Y=n.DEPTH_COMPONENT24:w===zn?Y=n.DEPTH_COMPONENT32F:w===tr&&(Y=n.DEPTH_COMPONENT16),Y}function b(P,w){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){let w=new WeakRef(P);i.get(P).__ref=w,x.add(w),v.register(P,w,w)}function L(P){let w=i.get(P).__ref;w!==void 0&&(x.delete(w),v.unregister(w))}function D(P){U(P.target)}function C(P){R(P.target)}function U(P){P.removeEventListener("dispose",D),L(P),B(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&d.delete(P)}function R(P){P.removeEventListener("dispose",C),L(P),it(P)}function z(){for(let P of x){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):U(w))}x.clear(),d.clear()}function B(P){let w=i.get(P);if(w.__webglInit===void 0)return;let Y=P.source,pt=h.get(Y);if(pt){let lt=pt[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&W(P),Object.keys(pt).length===0&&h.delete(Y)}i.remove(P)}function W(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let Y=P.source,pt=h.get(Y);delete pt[w.__cacheKey],o.memory.textures--}function it(P){let w=i.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Y=P.depthTexture;if(Y&&Y.renderTarget===P&&U(Y),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(w.__webglFramebuffer[lt]))for(let xt=0;xt<w.__webglFramebuffer[lt].length;xt++)n.deleteFramebuffer(w.__webglFramebuffer[lt][xt]);else n.deleteFramebuffer(w.__webglFramebuffer[lt]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[lt])}else{if(Array.isArray(w.__webglFramebuffer))for(let lt=0;lt<w.__webglFramebuffer.length;lt++)n.deleteFramebuffer(w.__webglFramebuffer[lt]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let lt=0;lt<w.__webglColorRenderbuffer.length;lt++)w.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[lt]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let pt=P.textures;for(let lt=0,xt=pt.length;lt<xt;lt++){let _t=i.get(pt[lt]);_t.__webglTexture&&(n.deleteTexture(_t.__webglTexture),o.memory.textures--),i.remove(pt[lt])}i.remove(P)}let $=0;function tt(){$=0}function st(){return $}function Pt(P){$=P}function Rt(){let P=$;return P>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,P}function et(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function wt(P,w){let Y=i.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){let pt=P.image;if(pt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(Y,P,w);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function Nt(P,w){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){ot(Y,P,w);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function Xt(P,w){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){ot(Y,P,w);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function yt(P,w){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){Et(Y,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}let jt={[Qo]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},Fe={[nn]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Zt={[yu]:n.NEVER,[Dc]:n.ALWAYS,[vu]:n.LESS,[Pc]:n.LEQUAL,[Mu]:n.EQUAL,[Lc]:n.GEQUAL,[Su]:n.GREATER,[bu]:n.NOTEQUAL};function ge(P,w){if(w.type===zn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===sn||w.magFilter===ba||w.magFilter===Jr||w.magFilter===wi||w.minFilter===sn||w.minFilter===ba||w.minFilter===Jr||w.minFilter===wi)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,jt[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,jt[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,jt[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Fe[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Fe[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Zt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==Jr&&w.minFilter!==wi||w.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ct(P,w){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D),I(w));let pt=w.source,lt=h.get(pt);lt===void 0&&(lt={},h.set(pt,lt));let xt=et(w);if(xt!==P.__cacheKey){lt[xt]===void 0&&(lt[xt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),lt[xt].usedTimes++;let _t=lt[P.__cacheKey];_t!==void 0&&(lt[P.__cacheKey].usedTimes--,_t.usedTimes===0&&W(w)),P.__cacheKey=xt,P.__webglTexture=lt[xt].texture}return Y}function $t(P,w,Y){return Math.floor(Math.floor(P/Y)/w)}function vt(P,w,Y,pt){let xt=P.updateRanges;if(xt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Y,pt,w.data);else{xt.sort((F,at)=>F.start-at.start);let _t=0;for(let F=1;F<xt.length;F++){let at=xt[_t],J=xt[F],ft=at.start+at.count,ut=$t(J.start,w.width,4),dt=$t(at.start,w.width,4);J.start<=ft+1&&ut===dt&&$t(J.start+J.count-1,w.width,4)===ut?at.count=Math.max(at.count,J.start+J.count-at.start):(++_t,xt[_t]=J)}xt.length=_t+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),q=e.getParameter(n.UNPACK_SKIP_PIXELS),nt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let F=0,at=xt.length;F<at;F++){let J=xt[F],ft=Math.floor(J.start/4),ut=Math.ceil(J.count/4),dt=ft%w.width,It=Math.floor(ft/w.width),qt=ut,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,It),e.texSubImage2D(n.TEXTURE_2D,0,dt,It,qt,ht,Y,pt,w.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,q),e.pixelStorei(n.UNPACK_SKIP_ROWS,nt)}}function ot(P,w,Y){let pt=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pt=n.TEXTURE_3D);let lt=ct(P,w),xt=w.source;e.bindTexture(pt,P.__webglTexture,n.TEXTURE0+Y);let _t=i.get(xt);if(xt.version!==_t.__version||lt===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ht=xe.getPrimaries(xe.workingColorSpace),Ft=w.colorSpace===Ai?null:xe.getPrimaries(w.colorSpace),re=w.colorSpace===Ai||ht===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let q=_(w.image,!1,s.maxTextureSize);q=Ot(w,q);let nt=r.convert(w.format,w.colorSpace),F=r.convert(w.type),at=A(w.internalFormat,nt,F,w.normalized,w.colorSpace,w.isVideoTexture);ge(pt,w);let J,ft=w.mipmaps,ut=w.isVideoTexture!==!0,dt=_t.__version===void 0||lt===!0,It=xt.dataReady,qt=b(w,q);if(w.isDepthTexture)at=g(w.format===Ti,w.type),dt&&(ut?e.texStorage2D(n.TEXTURE_2D,1,at,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,at,q.width,q.height,0,nt,F,null));else if(w.isDataTexture)if(ft.length>0){ut&&dt&&e.texStorage2D(n.TEXTURE_2D,qt,at,ft[0].width,ft[0].height);for(let ht=0,Ft=ft.length;ht<Ft;ht++)J=ft[ht],ut?It&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,J.width,J.height,nt,F,J.data):e.texImage2D(n.TEXTURE_2D,ht,at,J.width,J.height,0,nt,F,J.data);w.generateMipmaps=!1}else ut?(dt&&e.texStorage2D(n.TEXTURE_2D,qt,at,q.width,q.height),It&&vt(w,q,nt,F)):e.texImage2D(n.TEXTURE_2D,0,at,q.width,q.height,0,nt,F,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ut&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,at,ft[0].width,ft[0].height,q.depth);for(let ht=0,Ft=ft.length;ht<Ft;ht++)if(J=ft[ht],w.format!==Ln)if(nt!==null)if(ut){if(It)if(w.layerUpdates.size>0){let re=Vc(J.width,J.height,w.format,w.type);for(let Ct of w.layerUpdates){let ve=J.data.subarray(Ct*re/J.data.BYTES_PER_ELEMENT,(Ct+1)*re/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,Ct,J.width,J.height,1,nt,ve)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,J.width,J.height,q.depth,nt,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,at,J.width,J.height,q.depth,0,J.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?It&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,J.width,J.height,q.depth,nt,F,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,at,J.width,J.height,q.depth,0,nt,F,J.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ut&&dt&&e.texStorage2D(n.TEXTURE_2D,qt,at,ft[0].width,ft[0].height);for(let ht=0,Ft=ft.length;ht<Ft;ht++)J=ft[ht],w.format!==Ln?nt!==null?ut?It&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,J.width,J.height,nt,J.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,at,J.width,J.height,0,J.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?It&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,J.width,J.height,nt,F,J.data):e.texImage2D(n.TEXTURE_2D,ht,at,J.width,J.height,0,nt,F,J.data)}else if(w.isDataArrayTexture)if(ut){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,at,q.width,q.height,q.depth),It)if(w.layerUpdates.size>0){let ht=Vc(q.width,q.height,w.format,w.type);for(let Ft of w.layerUpdates){let re=q.data.subarray(Ft*ht/q.data.BYTES_PER_ELEMENT,(Ft+1)*ht/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ft,q.width,q.height,1,nt,F,re)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,nt,F,q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,at,q.width,q.height,q.depth,0,nt,F,q.data);else if(w.isData3DTexture)ut?(dt&&e.texStorage3D(n.TEXTURE_3D,qt,at,q.width,q.height,q.depth),It&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,nt,F,q.data)):e.texImage3D(n.TEXTURE_3D,0,at,q.width,q.height,q.depth,0,nt,F,q.data);else if(w.isFramebufferTexture){if(dt)if(ut)e.texStorage2D(n.TEXTURE_2D,qt,at,q.width,q.height);else{let ht=q.width,Ft=q.height;for(let re=0;re<qt;re++)e.texImage2D(n.TEXTURE_2D,re,at,ht,Ft,0,nt,F,null),ht>>=1,Ft>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),q.parentNode!==ht){ht.appendChild(q),d.add(w),ht.onpaint=Ft=>{let re=Ft.changedElements;for(let Ct of d)re.includes(Ct.image)&&(Ct.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,q);else{let re=n.RGBA,Ct=n.RGBA,ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,re,Ct,ve,q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ut&&dt){let ht=zt(ft[0]);e.texStorage2D(n.TEXTURE_2D,qt,at,ht.width,ht.height)}for(let ht=0,Ft=ft.length;ht<Ft;ht++)J=ft[ht],ut?It&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,nt,F,J):e.texImage2D(n.TEXTURE_2D,ht,at,nt,F,J);w.generateMipmaps=!1}else if(ut){if(dt){let ht=zt(q);e.texStorage2D(n.TEXTURE_2D,qt,at,ht.width,ht.height)}It&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt,F,q)}else e.texImage2D(n.TEXTURE_2D,0,at,nt,F,q);S(w)&&w.mipmapsAutoUpdate===!0&&M(pt),_t.__version=xt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Et(P,w,Y){if(w.image.length!==6)return;let pt=ct(P,w),lt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let xt=i.get(lt);if(lt.version!==xt.__version||pt===!0){e.activeTexture(n.TEXTURE0+Y);let _t=xe.getPrimaries(xe.workingColorSpace),Z=w.colorSpace===Ai?null:xe.getPrimaries(w.colorSpace),q=w.colorSpace===Ai||_t===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let nt=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,at=[];for(let Ct=0;Ct<6;Ct++)!nt&&!F?at[Ct]=_(w.image[Ct],!0,s.maxCubemapSize):at[Ct]=F?w.image[Ct].image:w.image[Ct],at[Ct]=Ot(w,at[Ct]);let J=at[0],ft=r.convert(w.format,w.colorSpace),ut=r.convert(w.type),dt=A(w.internalFormat,ft,ut,w.normalized,w.colorSpace),It=w.isVideoTexture!==!0,qt=xt.__version===void 0||pt===!0,ht=lt.dataReady,Ft=b(w,J);ge(n.TEXTURE_CUBE_MAP,w);let re;if(w.isDepthTexture){if(dt=g(w.format===Ti,w.type),qt)if(It)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,dt,J.width,J.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,dt,J.width,J.height,0,ft,ut,null)}else if(nt){It&&qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,dt,J.width,J.height);for(let Ct=0;Ct<6;Ct++){re=at[Ct].mipmaps;for(let ve=0;ve<re.length;ve++){let Ve=re[ve];w.format!==Ln?ft!==null?It?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve,0,0,Ve.width,Ve.height,ft,Ve.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve,dt,Ve.width,Ve.height,0,Ve.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve,0,0,Ve.width,Ve.height,ft,ut,Ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve,dt,Ve.width,Ve.height,0,ft,ut,Ve.data)}}}else{if(re=w.mipmaps,It&&qt){re.length>0&&Ft++;let Ct=zt(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,dt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(F){It?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,at[Ct].width,at[Ct].height,ft,ut,at[Ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,dt,at[Ct].width,at[Ct].height,0,ft,ut,at[Ct].data);for(let ve=0;ve<re.length;ve++){let kn=re[ve].image[Ct].image;It?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve+1,0,0,kn.width,kn.height,ft,ut,kn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve+1,dt,kn.width,kn.height,0,ft,ut,kn.data)}}else{It?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ft,ut,at[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,dt,ft,ut,at[Ct]);for(let ve=0;ve<re.length;ve++){let Ve=re[ve];It?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve+1,0,0,ft,ut,Ve.image[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ve+1,dt,ft,ut,Ve.image[Ct])}}}S(w)&&w.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),xt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Wt(P,w,Y,pt,lt,xt){let _t=r.convert(Y.format,Y.colorSpace),Z=r.convert(Y.type),q=A(Y.internalFormat,_t,Z,Y.normalized,Y.colorSpace),nt=i.get(w),F=i.get(Y);if(F.__renderTarget=w,!nt.__hasExternalTextures){let at=Math.max(1,w.width>>xt),J=Math.max(1,w.height>>xt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,xt,q,at,J,w.depth,0,_t,Z,null):e.texImage2D(lt,xt,q,at,J,0,_t,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Mt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,lt,F.__webglTexture,0,ue(w)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,lt,F.__webglTexture,xt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(P,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let pt=w.depthTexture,lt=pt&&pt.isDepthTexture?pt.type:null,xt=g(w.stencilBuffer,lt),_t=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Mt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(w),xt,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(w),xt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,xt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,P)}else{let pt=w.textures;for(let lt=0;lt<pt.length;lt++){let xt=pt[lt],_t=r.convert(xt.format,xt.colorSpace),Z=r.convert(xt.type),q=A(xt.internalFormat,_t,Z,xt.normalized,xt.colorSpace);Mt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(w),q,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(w),q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,q,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(P,w,Y){let pt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=i.get(w.depthTexture);lt.__renderTarget=w;let xt=pt?w.depthTexture.image[0]:w.depthTexture.image;(!lt.__webglTexture||xt.width!==w.width||xt.height!==w.height)&&(xt.width=w.width,xt.height=w.height,w.depthTexture.needsUpdate=!0),pt?yt(w.depthTexture,0):wt(w.depthTexture,0);let _t=lt.__webglTexture,Z=ue(w),q=pt?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,nt=w.depthTexture.format===Ti?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===vi)Mt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,q,_t,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,nt,q,_t,0);else if(w.depthTexture.format===Ti)Mt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,q,_t,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,nt,q,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(P){let w=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let pt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pt){let lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pt.removeEventListener("dispose",lt)};pt.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=pt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let pt=0;pt<6;pt++)le(w.__webglFramebuffer[pt],P,pt);else P.texture.mipmaps.length>0?le(w.__webglFramebuffer[0],P,0):le(w.__webglFramebuffer,P,0);else if(Y){w.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pt]),w.__webglDepthbuffer[pt]===void 0)w.__webglDepthbuffer[pt]=n.createRenderbuffer(),te(w.__webglDepthbuffer[pt],P,!1);else{let lt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,xt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),te(w.__webglDepthbuffer,P,!1);else{let lt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,xt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(P,w,Y){let pt=i.get(P);w!==void 0&&Wt(pt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Ie(P)}function ce(P){let w=P.texture,Y=i.get(P),pt=i.get(w);P.addEventListener("dispose",C),I(P);let lt=P.textures,xt=P.isWebGLCubeRenderTarget===!0,_t=lt.length>1;if(_t||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=w.version,o.memory.textures++),xt){Y.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(w.mipmaps.length>0){Y.__webglFramebuffer[Z]=[];for(let q=0;q<w.mipmaps.length;q++)Y.__webglFramebuffer[Z][q]=n.createFramebuffer()}else Y.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Z=0;Z<w.mipmaps.length;Z++)Y.__webglFramebuffer[Z]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(_t)for(let Z=0,q=lt.length;Z<q;Z++){let nt=i.get(lt[Z]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Mt(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<lt.length;Z++){let q=lt[Z];Y.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Z]);let nt=r.convert(q.format,q.colorSpace),F=r.convert(q.type),at=A(q.internalFormat,nt,F,q.normalized,q.colorSpace,P.isXRRenderTarget===!0),J=ue(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,at,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),te(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xt){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),ge(n.TEXTURE_CUBE_MAP,w);for(let Z=0;Z<6;Z++)if(w.mipmaps.length>0)for(let q=0;q<w.mipmaps.length;q++)Wt(Y.__webglFramebuffer[Z][q],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,q);else Wt(Y.__webglFramebuffer[Z],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);S(w)?M(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let Z=0,q=lt.length;Z<q;Z++){let nt=lt[Z],F=i.get(nt),at=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,F.__webglTexture),ge(at,nt),Wt(Y.__webglFramebuffer,P,nt,n.COLOR_ATTACHMENT0+Z,at,0),S(nt)&&M(at)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,pt.__webglTexture),ge(Z,w),w.mipmaps.length>0)for(let q=0;q<w.mipmaps.length;q++)Wt(Y.__webglFramebuffer[q],P,w,n.COLOR_ATTACHMENT0,Z,q);else Wt(Y.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,Z,0);S(w)?M(Z):w.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Ie(P)}function G(P){let w=P.textures;for(let Y=0,pt=w.length;Y<pt;Y++){let lt=w[Y];if(S(lt)&&lt.mipmapsAutoUpdate===!0){let xt=E(P),_t=i.get(lt).__webglTexture;e.bindTexture(xt,_t),M(xt),e.unbindTexture()}}}let Xe=[];function de(P){if(P.samples>0){if(Mt(P)===!1){let w=P.textures,Y=P.width,pt=P.height,lt=n.COLOR_BUFFER_BIT,xt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(P),Z=w.length>1;if(Z)for(let nt=0;nt<w.length;nt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let nt=0;nt<w.length;nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[nt]);let F=i.get(w[nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,lt,n.NEAREST),l===!0&&(Xe.length=0,Xe.push(n.COLOR_ATTACHMENT0+nt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Xe.push(xt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let nt=0;nt<w.length;nt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[nt]);let F=i.get(w[nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,F,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ue(P){return Math.min(s.maxSamples,P.samples)}function Mt(P){let w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Te(P){let w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Ot(P,w){let Y=P.colorSpace,pt=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Er&&Y!==Ai&&(xe.getTransfer(Y)===Ae?(pt!==Ln||lt!==Mn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",Y)),w}function zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Rt,this.resetTextureUnits=tt,this.getTextureUnits=st,this.setTextureUnits=Pt,this.setTexture2D=wt,this.setTexture2DArray=Nt,this.setTexture3D=Xt,this.setTextureCube=yt,this.rebindTextures=Le,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=Mt,this.dispose=z}function Ox(n,t){function e(i,s=Ai){let r,o=xe.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Ta)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Aa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ec)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tc)return n.BYTE;if(i===Ac)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===wa)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===Cc)return n.ALPHA;if(i===Ic)return n.RGB;if(i===Ln)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===Ti)return n.DEPTH_STENCIL;if(i===Ea)return n.RED;if(i===Ra)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===Ca)return n.RG_INTEGER;if(i===Ia)return n.RGBA_INTEGER;if(i===Kr||i===$r||i===Qr||i===jr)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pa||i===La||i===Da||i===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ua||i===Fa||i===Oa||i===za||i===Ba||i===to||i===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ua||i===Fa)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===za)return r.COMPRESSED_R11_EAC;if(i===Ba)return r.COMPRESSED_SIGNED_R11_EAC;if(i===to)return r.COMPRESSED_RG11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ga||i===Va||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===Ka||i===$a||i===Qa||i===ja||i===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ga)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ya)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Za)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ka)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$a)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ja)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===nl||i===il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===el)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sl||i===rl||i===eo||i===ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
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

}`,$c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new On({vertexShader:zx,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends ti{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,x=null,v=typeof XRWebGLBinding<"u",p=new $c,m={},_=e.getContextAttributes(),S=null,M=null,E=[],A=[],g=new fe,b=null,I=null,L=new fn;L.viewport=new Be;let D=new fn;D.viewport=new Be;let C=[L,D],U=new va,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let wt=E[et];return wt===void 0&&(wt=new Js,E[et]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(et){let wt=E[et];return wt===void 0&&(wt=new Js,E[et]=wt),wt.getGripSpace()},this.getHand=function(et){let wt=E[et];return wt===void 0&&(wt=new Js,E[et]=wt),wt.getHandSpace()};function B(et){let wt=A.indexOf(et.inputSource);if(wt===-1)return;let Nt=E[wt];Nt!==void 0&&(Nt.update(et.inputSource,et.frame,c||o),Nt.dispatchEvent({type:et.type,data:et.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let et=0;et<E.length;et++){let wt=A[et];wt!==null&&(A[et]=null,E[et].disconnect(wt))}R=null,z=null,p.reset();for(let et in m)delete m[et];if(t.setRenderTarget(S),h=null,f=null,d=null,s=null,M=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(g.width,g.height,!1),I!==null){let et=I.camera;et.fov=I.fov,et.zoom=I.zoom,et.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,i.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Xt=null,yt=null;_.depth&&(yt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=_.stencil?Ti:vi,Xt=_.stencil?gs:Xn);let jt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new In(f.textureWidth,f.textureHeight,{format:Ln,type:Mn,depthTexture:new Si(f.textureWidth,f.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new In(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function it(et){for(let wt=0;wt<et.removed.length;wt++){let Nt=et.removed[wt],Xt=A.indexOf(Nt);Xt>=0&&(A[Xt]=null,E[Xt].disconnect(Nt))}for(let wt=0;wt<et.added.length;wt++){let Nt=et.added[wt],Xt=A.indexOf(Nt);if(Xt===-1){for(let jt=0;jt<E.length;jt++)if(jt>=A.length){A.push(Nt),Xt=jt;break}else if(A[jt]===null){A[jt]=Nt,Xt=jt;break}if(Xt===-1)break}let yt=E[Xt];yt&&yt.connect(Nt)}}function $(et,wt){wt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(wt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let wt=et.near,Nt=et.far;p.texture!==null&&(p.depthNear>0&&(wt=p.depthNear),p.depthFar>0&&(Nt=p.depthFar)),U.near=D.near=L.near=wt,U.far=D.far=L.far=Nt,(R!==U.near||z!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),R=U.near,z=U.far),U.layers.mask=et.layers.mask|6,L.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let Xt=et.parent,yt=U.cameras;$(U,Xt);for(let jt=0;jt<yt.length;jt++)$(yt[jt],Xt);U.projectionMatrix.copy(L.projectionMatrix),U.projectionMatrixInverse.copy(L.projectionMatrixInverse),I===null&&et.isPerspectiveCamera&&(I={camera:et,fov:et.fov,zoom:et.zoom}),tt(et,U,Xt)};function tt(et,wt,Nt){Nt===null?et.matrix.copy(wt.matrixWorld):(et.matrix.copy(Nt.matrixWorld),et.matrix.invert(),et.matrix.multiply(wt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(wt.projectionMatrix),et.projectionMatrixInverse.copy(wt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ys*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=et)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(et){return m[et]};let st=null;function Pt(et,wt){if(u=wt.getViewerPose(c||o),x=wt,u!==null){let Nt=u.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let Xt=!1;Nt.length!==U.cameras.length&&(U.cameras.length=0,Xt=!0);for(let Zt=0;Zt<Nt.length;Zt++){let ge=Nt[Zt],ct=null;if(h!==null)ct=h.getViewport(ge);else{let vt=d.getViewSubImage(f,ge);ct=vt.viewport,Zt===0&&(t.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(M))}let $t=C[Zt];$t===void 0&&($t=new fn,$t.layers.enable(Zt),$t.viewport=new Be,C[Zt]=$t),$t.matrix.fromArray(ge.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ge.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ct.x,ct.y,ct.width,ct.height),Zt===0&&(U.matrix.copy($t.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Xt===!0&&U.cameras.push($t)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Zt=d.getDepthInformation(Nt[0]);Zt&&Zt.isValid&&Zt.texture&&p.init(Zt,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Zt=0;Zt<Nt.length;Zt++){let ge=Nt[Zt].camera;if(ge){let ct=m[ge];ct||(ct=new Br,m[ge]=ct);let $t=d.getCameraImage(ge);ct.sourceTexture=$t}}}}for(let Nt=0;Nt<E.length;Nt++){let Xt=A[Nt],yt=E[Nt];Xt!==null&&yt!==void 0&&yt.update(Xt,wt,c||o)}st&&st(et,wt),wt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:wt}),x=null}let Rt=new nd;Rt.setAnimationLoop(Pt),this.setAnimationLoop=function(et){st=et},this.dispose=function(){}}},kx=new Ee,dd=new ne;dd.set(-1,0,0,0,1,0,0,0,1);function Gx(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Bc(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,S,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),S=_.envMap,M=_.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(dd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vx(n,t,e,i){let s={},r={};function o(_,S){let M=S.program;i.uniformBlockBinding(_,M,s[_.id])}function a(_,S){let M=s[_.id];M===void 0&&(x(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",p));let E=S.program;i.updateUBOMapping(_,E);let A=t.render.frame;r[_.id]!==A&&(c(_),r[_.id]=A)}function l(_){let S=n.createBuffer(),M=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(_){let S=s[_.id],M=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,g=M.length;A<g;A++){let b=M[A];if(Array.isArray(b))for(let I=0,L=b.length;I<L;I++)u(b[I],A,I,E);else u(b,A,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,S,M,E){if(f(_,S,M,E)===!0){let A=_.__offset,g=_.value;if(Array.isArray(g)){let b=0;for(let I=0;I<g.length;I++){let L=g[I],D=v(L,!0);d(L,_.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,_.__data)}}function d(_,S,M){typeof _=="number"||typeof _=="boolean"?S[M]=_:_.isMatrix3?(S[M]=_.elements[0],S[M+1]=_.elements[1],S[M+2]=_.elements[2],S[M+3]=0,S[M+4]=_.elements[3],S[M+5]=_.elements[4],S[M+6]=_.elements[5],S[M+7]=0,S[M+8]=_.elements[6],S[M+9]=_.elements[7],S[M+10]=_.elements[8],S[M+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-M),M):_.toArray(S,M)}function f(_,S,M,E){let A=_.value,g=S+"_"+M;if(Array.isArray(A)){E[g]===void 0&&(E[g]=[]);let b=E[g],I=!1;for(let L=0;L<A.length;L++)h(A[L],b,L)===!0&&(I=!0);return I}return h(A,E,g)}function h(_,S,M){if(S[M]===void 0)return typeof _=="number"||typeof _=="boolean"?S[M]=_:ArrayBuffer.isView(_)?S[M]=_.slice():S[M]=_.clone(),!0;{let E=S[M];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return S[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function x(_){let S=_.uniforms,M=0,E=16;for(let g=0,b=S.length;g<b;g++){let I=Array.isArray(S[g])?S[g]:[S[g]];for(let L=0,D=I.length;L<D;L++){let C=I[L],U=Array.isArray(C.value)?C.value:[C.value],R=Array.isArray(S[g])||Array.isArray(C.value),z=M;for(let W=0,it=U.length;W<it;W++){let $=U[W],tt=v($,R),st=M%E,Pt=st%tt.boundary,Rt=st+Pt;M+=Pt,Rt!==0&&E-Rt<tt.storage&&(M+=E-Rt),W===0&&(z=M),M+=tt.storage}let B=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new B((M-z)/Float32Array.BYTES_PER_ELEMENT),C.__offset=z}}let A=M%E;return A>0&&(M+=E-A),_.__size=M,_.__cache={},this}function v(_,S){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(_){let S=_.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:m}}var Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function Wx(){return si===null&&(si=new as(Hx,16,16,Yi,qn),si.name="DFG_LUT",si.minFilter=sn,si.magFilter=sn,si.wrapS=jn,si.wrapT=jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var dl=class{constructor(t={}){let{canvas:e=Tu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Mn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;let v=h,p=new Set([Ia,Ca,Ra]),m=new Set([Mn,Xn,tr,gs,Ta,Aa]),_=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,A=null,g=[],b=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,D=!1,C=null,U=null,R=null,z=null;this._outputColorSpace=an;let B=0,W=0,it=null,$=-1,tt=null,st=new Be,Pt=new Be,Rt=null,et=new he(0),wt=0,Nt=e.width,Xt=e.height,yt=1,jt=null,Fe=null,Zt=new Be(0,0,Nt,Xt),ge=new Be(0,0,Nt,Xt),ct=!1,$t=new Gi,vt=new ra,ot=!1,Et=!1,Wt=new Ee,te=new X,le=new Be,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function ce(){return it===null?yt:1}let G=i;function Xe(T,V){return e.getContext(T,V)}let de,ue,Mt,Te,Ot,zt,P,w,Y,pt,lt,xt,_t,Z,q,nt,F,at,J,ft,ut,dt,It;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),G===null){let V="webgl2";if(G=Xe(V,T),G===null)throw Xe(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(T){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),se("WebGLRenderer: "+T.message),T}function qt(){de=new e0(G),de.init(),ut=new Ox(G,de),ue=new Wg(G,de,t,ut),Mt=new Ux(G,de),ue.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),U=G.createFramebuffer(),R=G.createFramebuffer(),z=G.createFramebuffer(),Te=new s0(G),Ot=new Mx,zt=new Fx(G,de,Mt,Ot,ue,ut,Te),P=new t0(L),w=new op(G),dt=new Vg(G,w),Y=new n0(G,w,Te,dt),pt=new o0(G,Y,w,dt,Te),at=new r0(G,ue,zt),q=new Xg(Ot),lt=new vx(L,P,de,ue,dt,q),xt=new Gx(L,Ot),_t=new bx,Z=new Cx(de),F=new Gg(L,P,Mt,pt,x,l),nt=new Nx(L,pt,ue),It=new Vx(G,Te,ue,Mt),J=new Hg(G,de,Te),ft=new i0(G,de,Te),Te.programs=lt.programs,L.capabilities=ue,L.extensions=de,L.properties=Ot,L.renderLists=_t,L.shadowMap=nt,L.state=Mt,L.info=Te}v!==Mn&&(I=new l0(v,e.width,e.height,a,s,r));let ht=new Qc(L,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(T){T!==void 0&&(yt=T,this.setSize(Nt,Xt,!1))},this.getSize=function(T){return T.set(Nt,Xt)},this.setSize=function(T,V,j=!0){if(ht.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=T,Xt=V,e.width=Math.floor(T*yt),e.height=Math.floor(V*yt),j===!0&&(e.style.width=T+"px",e.style.height=V+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Nt*yt,Xt*yt).floor()},this.setDrawingBufferSize=function(T,V,j){Nt=T,Xt=V,yt=j,e.width=Math.floor(T*j),e.height=Math.floor(V*j),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(v===Mn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(st)},this.getViewport=function(T){return T.copy(Zt)},this.setViewport=function(T,V,j,K){T.isVector4?Zt.set(T.x,T.y,T.z,T.w):Zt.set(T,V,j,K),Mt.viewport(st.copy(Zt).multiplyScalar(ce()).round())},this.getScissor=function(T){return T.copy(ge)},this.setScissor=function(T,V,j,K){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,V,j,K),Mt.scissor(Pt.copy(ge).multiplyScalar(ce()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){Mt.setScissorTest(ct=T)},this.setOpaqueSort=function(T){jt=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,j=!0){let K=0;if(T){let Q=!1;if(it!==null){let Tt=it.texture.format;Q=p.has(Tt)}if(Q){let Tt=it.texture.type,Bt=m.has(Tt),St=F.getClearColor(),Lt=F.getClearAlpha(),Yt=St.r,ie=St.g,pe=St.b;Bt?(_[0]=Yt,_[1]=ie,_[2]=pe,_[3]=Lt,G.clearBufferuiv(G.COLOR,0,_)):(S[0]=Yt,S[1]=ie,S[2]=pe,S[3]=Lt,G.clearBufferiv(G.COLOR,0,S))}else K|=G.COLOR_BUFFER_BIT}V&&(K|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),C=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),F.dispose(),_t.dispose(),Z.dispose(),zt.dispose(),Ot.dispose(),P.dispose(),pt.dispose(),Y.dispose(),dt.dispose(),It.dispose(),lt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Es),ht.removeEventListener("sessionend",ke),Dn.stop()};function Ft(T){T.preventDefault(),Uc("WebGLRenderer: Context Lost."),D=!0}function re(){Uc("WebGLRenderer: Context Restored."),D=!1;let T=Te.autoReset,V=nt.enabled,j=nt.autoUpdate,K=nt.needsUpdate,Q=nt.type;qt(),Te.autoReset=T,nt.enabled=V,nt.autoUpdate=j,nt.needsUpdate=K,nt.type=Q}function Ct(T){se("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){let V=T.target;V.removeEventListener("dispose",ve),Ve(V)}function Ve(T){kn(T),Ot.remove(T)}function kn(T){let V=Ot.get(T).programs;V!==void 0&&(V.forEach(function(j){lt.releaseProgram(j)}),T.isShaderMaterial&&lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,j,K,Q,Tt){V===null&&(V=Ie);let Bt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,St=yo(T,V,j,K,Q);Mt.setMaterial(K,Bt);let Lt=j.index,Yt=1;if(K.wireframe===!0){if(Lt=Y.getWireframeAttribute(j),Lt===void 0)return;Yt=2}let ie=j.drawRange,pe=j.attributes.position,kt=ie.start*Yt,oe=(ie.start+ie.count)*Yt;Tt!==null&&(kt=Math.max(kt,Tt.start*Yt),oe=Math.min(oe,(Tt.start+Tt.count)*Yt)),Lt!==null?(kt=Math.max(kt,0),oe=Math.min(oe,Lt.count)):pe!=null&&(kt=Math.max(kt,0),oe=Math.min(oe,pe.count));let ze=oe-kt;if(ze<0||ze===1/0)return;dt.setup(Q,K,St,j,Lt);let Pe,Me=J;if(Lt!==null&&(Pe=w.get(Lt),Me=ft,Me.setIndex(Pe)),Q.isMesh)K.wireframe===!0?(Mt.setLineWidth(K.wireframeLinewidth*ce()),Me.setMode(G.LINES)):Me.setMode(G.TRIANGLES);else if(Q.isLine){let je=K.linewidth;je===void 0&&(je=1),Mt.setLineWidth(je*ce()),Q.isLineSegments?Me.setMode(G.LINES):Q.isLineLoop?Me.setMode(G.LINE_LOOP):Me.setMode(G.LINE_STRIP)}else Q.isPoints?Me.setMode(G.POINTS):Q.isSprite&&Me.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Me.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let je=Q._multiDrawStarts,Gt=Q._multiDrawCounts,on=Q._multiDrawCount,be=Lt?w.get(Lt).bytesPerElement:1,fi=Ot.get(K).currentProgram.getUniforms();for(let tn=0;tn<on;tn++)fi.setValue(G,"_gl_DrawID",tn),Me.render(je[tn]/be,Gt[tn])}else if(Q.isInstancedMesh)Me.renderInstances(kt,ze,Q.count);else if(j.isInstancedBufferGeometry){let je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Gt=Math.min(j.instanceCount,je);Me.renderInstances(kt,ze,Gt)}else Me.render(kt,ze)};function hi(T,V,j,K){C!==null&&T.isNodeMaterial&&C.setObject(K,T),ot===!0&&q.setState(T,j,!1),T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,we(T,V,K),T.side=qi,T.needsUpdate=!0,we(T,V,K),T.side=xn):we(T,V,K)}this.compile=function(T,V,j=null){j===null&&(j=T),C!==null&&C.renderStart(T,V,j),A=Z.get(j),A.init(V),b.push(A),j.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),T!==j&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),A.setupLights(),C!==null&&C.updateLights(A.state.lightsArray),Et=this.localClippingEnabled,ot=q.init(this.clippingPlanes,Et),ot===!0&&q.setGlobalState(this.clippingPlanes,V),C!==null&&nt.render(A.state.shadowsArray,j,V);let K=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Bt=0;Bt<Tt.length;Bt++){let St=Tt[Bt];hi(St,j,V,Q),K.add(St)}else hi(Tt,j,V,Q),K.add(Tt)}),A=b.pop(),C!==null&&C.renderEnd(),K},this.compileAsync=function(T,V,j=null){let K=this.compile(T,V,j);return new Promise(Q=>{function Tt(){if(K.forEach(function(Bt){let Lt=Ot.get(Bt).currentProgram;(Lt===void 0||Lt.isReady())&&K.delete(Bt)}),K.size===0){Q(T);return}setTimeout(Tt,10)}de.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Jn=null;function dr(T){Jn&&Jn(T)}function Es(){Dn.stop()}function ke(){Dn.start()}let Dn=new nd;Dn.setAnimationLoop(dr),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(T){Jn=T,ht.setAnimationLoop(T),T===null?Dn.stop():Dn.start()},ht.addEventListener("sessionstart",Es),ht.addEventListener("sessionend",ke),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C!==null&&C.renderStart(T,V);let j=ht.enabled===!0&&ht.isPresenting===!0,K=I!==null&&(it===null||j)&&I.begin(L,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(V),V=ht.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,V,it),A=Z.get(T,b.length),A.init(V),A.state.textureUnits=zt.getTextureUnits(),b.push(A),Wt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?vt.setFromArrayCamera(V):$t.setFromProjectionMatrix(Wt,Fn,V.reversedDepth),Et=this.localClippingEnabled,ot=q.init(this.clippingPlanes,Et),E=_t.get(T,g.length),E.init(),g.push(E),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let Bt=L.xr.getDepthSensingMesh();Bt!==null&&Tn(Bt,V,-1/0,L.sortObjects)}Tn(T,V,0,L.sortObjects),E.finish(),C!==null&&C.updateLights(A.state.lightsArray),L.sortObjects===!0&&E.sort(jt,Fe),Le=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Le&&F.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),ot===!0&&q.beginShadows();let Q=A.state.shadowsArray;if(nt.render(Q,T,V),ot===!0&&q.endShadows(),(K&&I.hasRenderPass())===!1){let Bt=E.opaque,St=E.transmissive;if(A.setupLights(),V.isArrayCamera){let Lt=V.cameras;if(St.length>0)for(let Yt=0,ie=Lt.length;Yt<ie;Yt++){let pe=Lt[Yt];Ii(Bt,St,T,pe)}Le&&F.render(T);for(let Yt=0,ie=Lt.length;Yt<ie;Yt++){let pe=Lt[Yt];An(E,T,pe,pe.viewport)}}else St.length>0&&Ii(Bt,St,T,V),Le&&F.render(T),An(E,T,V)}it!==null&&W===0&&(zt.updateMultisampleRenderTarget(it),zt.updateRenderTargetMipmap(it)),K&&I.end(L),T.isScene===!0&&T.onAfterRender(L,T,V),dt.resetDefaultState(),$=-1,tt=null,b.pop(),b.length>0?(A=b[b.length-1],zt.setTextureUnits(A.state.textureUnits),ot===!0&&q.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,C!==null&&C.renderEnd()};function Tn(T,V,j,K){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let Bt=V.isArrayCamera?vt:$t;if(!T.frustumCulled||T.intersectsFrustum(Bt)){K&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Wt);let St=pt.update(T),Lt=T.material;Lt.visible&&E.push(T,St,Lt,j,le.z,null,V)}}else if(T.isMesh||T.isLine||T.isPoints){let Bt=V.isArrayCamera?vt:$t;if(!T.frustumCulled||T.intersectsFrustum(Bt)){let St=pt.update(T),Lt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),le.copy(St.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(Wt)),Array.isArray(Lt)){let Yt=St.groups;for(let ie=0,pe=Yt.length;ie<pe;ie++){let kt=Yt[ie],oe=Lt[kt.materialIndex];oe&&oe.visible&&E.push(T,St,oe,j,le.z,kt,V)}}else Lt.visible&&E.push(T,St,Lt,j,le.z,null,V)}}}let Tt=T.children;for(let Bt=0,St=Tt.length;Bt<St;Bt++)Tn(Tt[Bt],V,j,K)}function An(T,V,j,K){let{opaque:Q,transmissive:Tt,transparent:Bt}=T;A.setupLightsView(j),ot===!0&&q.setGlobalState(L.clippingPlanes,j),K&&Mt.viewport(st.copy(K)),Q.length>0&&ts(Q,V,j),Tt.length>0&&ts(Tt,V,j),Bt.length>0&&ts(Bt,V,j),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ii(T,V,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){let kt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new In(1,1,{generateMipmaps:!0,type:kt?qn:Mn,minFilter:wi,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Tt=A.state.transmissionRenderTarget[K.id],Bt=K.viewport||st;Tt.setSize(Bt.z*L.transmissionResolutionScale,Bt.w*L.transmissionResolutionScale);let St=L.getRenderTarget(),Lt=L.getActiveCubeFace(),Yt=L.getActiveMipmapLevel();L.setRenderTarget(Tt),L.getClearColor(et),wt=L.getClearAlpha(),wt<1&&L.setClearColor(16777215,.5),L.clear(),Le&&F.render(j);let ie=L.toneMapping;L.toneMapping=ii;let pe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),ot===!0&&q.setGlobalState(L.clippingPlanes,K),ts(T,j,K),zt.updateMultisampleRenderTarget(Tt),zt.updateRenderTargetMipmap(Tt),de.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let oe=0,ze=V.length;oe<ze;oe++){let Pe=V[oe],{object:Me,geometry:je,material:Gt,group:on}=Pe;if(Gt.side===xn&&Me.layers.test(K.layers)){let be=Gt.side;Gt.side=cn,Gt.needsUpdate=!0,ui(Me,j,K,je,Gt,on),Gt.side=be,Gt.needsUpdate=!0,kt=!0}}kt===!0&&(zt.updateMultisampleRenderTarget(Tt),zt.updateRenderTargetMipmap(Tt))}L.setRenderTarget(St,Lt,Yt),L.setClearColor(et,wt),pe!==void 0&&(K.viewport=pe),L.toneMapping=ie}function ts(T,V,j){let K=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,Tt=T.length;Q<Tt;Q++){let Bt=T[Q],{object:St,geometry:Lt,group:Yt}=Bt,ie=Bt.material;ie.allowOverride===!0&&K!==null&&(ie=K),St.layers.test(j.layers)&&ui(St,V,j,Lt,ie,Yt)}}function ui(T,V,j,K,Q,Tt){C!==null&&Q.isNodeMaterial&&C.setObject(T,Q),T.onBeforeRender(L,V,j,K,Q,Tt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(L,V,j,K,T,Tt),Q.transparent===!0&&Q.side===xn&&Q.forceSinglePass===!1?(Q.side=cn,Q.needsUpdate=!0,L.renderBufferDirect(j,V,K,Q,T,Tt),Q.side=qi,Q.needsUpdate=!0,L.renderBufferDirect(j,V,K,Q,T,Tt),Q.side=xn):L.renderBufferDirect(j,V,K,Q,T,Tt),T.onAfterRender(L,V,j,K,Q,Tt)}function fr(T){let V=0;for(let j of T)j.texture!==null&&V++;return V}function we(T,V,j){V.isScene!==!0&&(V=Ie);let K=Ot.get(T),Q=A.state.lights,Tt=A.state.shadowsArray,Bt=Q.state.version,St=lt.getParameters(T,Q.state,Tt,V,j,A.state.lightProbeGridArray),Lt=lt.getProgramCacheKey(St),Yt=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;let ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=P.get(T.envMap||K.environment,ie),K.envMapRotation=K.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",ve),Yt=new Map,K.programs=Yt,K.programVariants=new Map);let pe=Yt.get(Lt);if(pe!==void 0){if(K.currentProgram===pe&&K.lightsStateVersion===Bt)return di(T,St),pe}else St.uniforms=lt.getUniforms(T),C!==null&&T.isNodeMaterial&&C.build(T,j,St),T.onBeforeCompile(St,L),pe=lt.acquireProgram(St,Lt),Yt.set(Lt,pe),K.uniforms=St.uniforms;let kt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=q.uniform),di(T,St),K.needsLights=es(T),K.lightsStateVersion=Bt,K.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.sunLights.value=Q.state.sun,kt.sunLightShadows.value=Q.state.sunShadow,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.sunShadowMatrix.value=Q.state.sunShadowMatrix,kt.sunShadowCascade.value=Q.state.sunShadowCascade,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.numLightProbeGrids=fr(A.state.lightProbeGridArray),K.currentProgram=pe,K.uniformsList=null,pe}function Nl(T,V,j,K,Q){let Tt=Ot.get(T),Bt=Tt.currentProgram.id+","+K+","+Q,St=Tt.programVariants.get(Bt);return St===void 0?(St=we(T,V,j),Tt.programVariants.set(Bt,St)):(Tt.currentProgram=St,Tt.uniformsList=null,Tt.outputColorSpace=K,Tt.toneMapping=Q),St}function _o(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=nr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function di(T,V){let j=Ot.get(T);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function yo(T,V,j,K,Q){V.isScene!==!0&&(V=Ie),zt.resetTextureUnits();let Tt=V.fog,Bt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,St=it===null?L.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:xe.workingColorSpace,Lt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Yt=P.get(K.envMap||Bt,Lt),ie=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pe=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),kt=!!j.morphAttributes.position,oe=!!j.morphAttributes.normal,ze=!!j.morphAttributes.color,Pe=ii;K.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Pe=L.toneMapping);let Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,je=Me!==void 0?Me.length:0,Gt=Ot.get(K),on=A.state.lights;if(ot===!0&&(Et===!0||T!==tt)){let De=T===tt&&K.id===$;q.setState(K,T,De)}let be=!1,fi=!1;K.version===Gt.__version?Gt.needsLights&&Gt.lightsStateVersion!==on.state.version||Q.isBatchedMesh&&Gt.batching===!1||!Q.isBatchedMesh&&Gt.batching===!0||Q.isBatchedMesh&&Gt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Gt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Gt.instancing===!1||!Q.isInstancedMesh&&Gt.instancing===!0||Q.isSkinnedMesh&&Gt.skinning===!1||!Q.isSkinnedMesh&&Gt.skinning===!0||Q.isInstancedMesh&&Gt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Gt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Gt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Gt.instancingMorph===!1&&Q.morphTexture!==null||Gt.envMap!==Yt||K.fog===!0&&Gt.fog!==Tt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==q.numPlanes||Gt.numIntersection!==q.numIntersection)||Gt.vertexAlphas!==ie||Gt.vertexTangents!==pe||Gt.morphTargets!==kt||Gt.morphNormals!==oe||Gt.morphColors!==ze||Gt.morphTargetsCount!==je||Gt.numLightProbeGrids!==fr(A.state.lightProbeGridArray)?be=!0:(Gt.outputColorSpace!==St||Gt.toneMapping!==Pe)&&(fi=!0):(be=!0,Gt.__version=K.version);let tn=Gt.currentProgram;(be===!0||fi===!0)&&(tn=fi===!0?Nl(K,V,Q,St,Pe):we(K,V,Q),C&&K.isNodeMaterial&&C.onUpdateProgram(K,tn,Gt));let Rs=!1,Kn=!1,$n=!1,ye=tn.getUniforms(),Ke=Gt.uniforms;if(Mt.useProgram(tn.program)&&(Rs=!0,Kn=!0,$n=!0),K.id!==$&&($=K.id,Kn=!0),Rs||tt!==T){Mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ye.setValue(G,"projectionMatrix",T.projectionMatrix),ye.setValue(G,"viewMatrix",T.matrixWorldInverse);let qe=ye.map.cameraPosition;qe!==void 0&&qe.setValue(G,te.setFromMatrixPosition(T.matrixWorld)),ue.logarithmicDepthBuffer&&ye.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ye.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,Kn=!0,$n=!0)}if(Gt.needsLights&&(on.state.sunShadowMap.length>0&&ye.setValue(G,"sunShadowMap",on.state.sunShadowMap,zt),on.state.directionalShadowMap.length>0&&ye.setValue(G,"directionalShadowMap",on.state.directionalShadowMap,zt),on.state.spotShadowMap.length>0&&ye.setValue(G,"spotShadowMap",on.state.spotShadowMap,zt),on.state.pointShadowMap.length>0&&ye.setValue(G,"pointShadowMap",on.state.pointShadowMap,zt)),Q.isSkinnedMesh){ye.setOptional(G,Q,"bindMatrix"),ye.setOptional(G,Q,"bindMatrixInverse");let De=Q.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ye.setValue(G,"boneTexture",De.boneTexture,zt))}Q.isBatchedMesh&&(ye.setOptional(G,Q,"batchingTexture"),ye.setValue(G,"batchingTexture",Q._matricesTexture,zt),ye.setOptional(G,Q,"batchingIdTexture"),ye.setValue(G,"batchingIdTexture",Q._indirectTexture,zt),ye.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ye.setValue(G,"batchingColorTexture",Q._colorsTexture,zt));let En=j.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&at.update(Q,j,tn),(Kn||Gt.receiveShadow!==Q.receiveShadow)&&(Gt.receiveShadow=Q.receiveShadow,ye.setValue(G,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(Ke.envMapIntensity.value=V.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=Wx()),Kn){if(ye.setValue(G,"toneMappingExposure",L.toneMappingExposure),Gt.needsLights&&pr(Ke,$n),Tt&&K.fog===!0&&xt.refreshFogUniforms(Ke,Tt),xt.refreshMaterialUniforms(Ke,K,yt,Xt,A.state.transmissionRenderTarget[T.id]),Gt.needsLights&&Gt.numLightProbeGrids>0){let De=M,qe=0;for(let Nn of A.state.lightProbeGridArray)Nn.texture!==null&&(De.textures[qe]=Nn.texture,De.min[qe]=Nn.boundingBox.min,De.max[qe]=Nn.boundingBox.max,De.resolution[qe]=Nn.resolution,qe++);for(let Nn in De)De[Nn].length=qe;Ke.probesSH.value=De.textures,Ke.probesMin.value=De.min,Ke.probesMax.value=De.max,Ke.probesResolution.value=De.resolution}nr.upload(G,_o(Gt),Ke,zt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(nr.upload(G,_o(Gt),Ke,zt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ye.setValue(G,"center",Q.center),ye.setValue(G,"modelViewMatrix",Q.modelViewMatrix),ye.setValue(G,"normalMatrix",Q.normalMatrix),ye.setValue(G,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let De=K.uniformsGroups;for(let qe=0,Nn=De.length;qe<Nn;qe++){let vo=De[qe];It.update(vo,tn),It.bind(vo,tn)}}return tn}function pr(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.sunLights.needsUpdate=V,T.sunLightShadows.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function es(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,V,j){let K=Ot.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ot.get(T.texture).__webglTexture=V,Ot.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let j=Ot.get(T);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,j=0){it=T,B=V,W=j;let K=null,Q=!1,Tt=!1;if(T){let St=Ot.get(T);if(St.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(G.FRAMEBUFFER,St.__webglFramebuffer),st.copy(T.viewport),Pt.copy(T.scissor),Rt=T.scissorTest,Mt.viewport(st),Mt.scissor(Pt),Mt.setScissorTest(Rt),$=-1;return}else if(St.__webglFramebuffer===void 0)zt.setupRenderTarget(T);else if(St.__hasExternalTextures)zt.rebindTextures(T,Ot.get(T.texture).__webglTexture,Ot.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ie=T.depthTexture;if(St.__boundDepthTexture!==ie){if(ie!==null&&Ot.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(T)}}let Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Tt=!0);let Yt=Ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[V])?K=Yt[V][j]:K=Yt[V],Q=!0):T.samples>0&&zt.useMultisampledRTT(T)===!1?K=Ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?K=Yt[j]:K=Yt,st.copy(T.viewport),Pt.copy(T.scissor),Rt=T.scissorTest}else st.copy(Zt).multiplyScalar(yt).floor(),Pt.copy(ge).multiplyScalar(yt).floor(),Rt=ct;if(j!==0&&(K=U),Mt.bindFramebuffer(G.FRAMEBUFFER,K)&&Mt.drawBuffers(T,K),Mt.viewport(st),Mt.scissor(Pt),Mt.setScissorTest(Rt),Q){let St=Ot.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,St.__webglTexture,j)}else if(Tt){let St=V;for(let Lt=0;Lt<T.textures.length;Lt++){let Yt=Ot.get(T.textures[Lt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Lt,Yt.__webglTexture,j,St)}}else if(T!==null&&j!==0){let St=Ot.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,St.__webglTexture,j)}$=-1};function mr(T){let V=Ot.get(T);return(V.__readFormat!==T.format||V.__readType!==T.type)&&(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=ue.textureFormatReadable(T.format),V.__typeReadable=ue.textureTypeReadable(T.type)),V}this.readRenderTargetPixels=function(T,V,j,K,Q,Tt,Bt,St=0){if(!(T&&T.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Lt=Lt[Bt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){Mt.bindFramebuffer(G.FRAMEBUFFER,Lt);try{let Yt=T.textures[St],ie=Yt.format,pe=Yt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+St);let kt=mr(Yt);if(kt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-K&&j>=0&&j<=T.height-Q&&G.readPixels(V,j,K,Q,ut.convert(ie),ut.convert(pe),Tt)}finally{let Yt=it!==null?Ot.get(it).__webglFramebuffer:null;Mt.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(T,V,j,K,Q,Tt,Bt,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Lt=Lt[Bt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(V>=0&&V<=T.width-K&&j>=0&&j<=T.height-Q){Mt.bindFramebuffer(G.FRAMEBUFFER,Lt);let Yt=T.textures[St],ie=Yt.format,pe=Yt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+St);let kt=mr(Yt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,oe),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(V,j,K,Q,ut.convert(ie),ut.convert(pe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let ze=it!==null?Ot.get(it).__webglFramebuffer:null;Mt.bindFramebuffer(G.FRAMEBUFFER,ze);let Pe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Eu(G,Pe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,oe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(oe),G.deleteSync(Pe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,j=0){let K=Math.pow(2,-j),Q=Math.floor(T.image.width*K),Tt=Math.floor(T.image.height*K),Bt=V!==null?V.x:0,St=V!==null?V.y:0;zt.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,Bt,St,Q,Tt),Mt.unbindTexture()},this.copyTextureToTexture=function(T,V,j=null,K=null,Q=0,Tt=0){let Bt,St,Lt,Yt,ie,pe,kt,oe,ze,Pe=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(j!==null)Bt=j.max.x-j.min.x,St=j.max.y-j.min.y,Lt=j.isBox3?j.max.z-j.min.z:1,Yt=j.min.x,ie=j.min.y,pe=j.isBox3?j.min.z:0;else{let ye=Math.pow(2,-Q);Bt=Math.floor(Pe.width*ye),St=Math.floor(Pe.height*ye),T.isDataArrayTexture?Lt=Pe.depth:T.isData3DTexture?Lt=Math.floor(Pe.depth*ye):Lt=1,Yt=0,ie=0,pe=0}K!==null?(kt=K.x,oe=K.y,ze=K.z):(kt=0,oe=0,ze=0);let Me=ut.convert(V.format),je=ut.convert(V.type),Gt;V.isData3DTexture?(zt.setTexture3D(V,0),Gt=G.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(zt.setTexture2DArray(V,0),Gt=G.TEXTURE_2D_ARRAY):(zt.setTexture2D(V,0),Gt=G.TEXTURE_2D),Mt.activeTexture(G.TEXTURE0),Mt.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),Mt.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Mt.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);let on=Mt.getParameter(G.UNPACK_ROW_LENGTH),be=Mt.getParameter(G.UNPACK_IMAGE_HEIGHT),fi=Mt.getParameter(G.UNPACK_SKIP_PIXELS),tn=Mt.getParameter(G.UNPACK_SKIP_ROWS),Rs=Mt.getParameter(G.UNPACK_SKIP_IMAGES);Mt.pixelStorei(G.UNPACK_ROW_LENGTH,Pe.width),Mt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pe.height),Mt.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),Mt.pixelStorei(G.UNPACK_SKIP_ROWS,ie),Mt.pixelStorei(G.UNPACK_SKIP_IMAGES,pe);let Kn=T.isDataArrayTexture||T.isData3DTexture,$n=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let ye=Ot.get(T),Ke=Ot.get(V),En=Ot.get(ye.__renderTarget),De=Ot.get(Ke.__renderTarget);Mt.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let qe=0;qe<Lt;qe++)Kn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ot.get(T).__webglTexture,Q,pe+qe),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ot.get(V).__webglTexture,Tt,ze+qe)),G.blitFramebuffer(Yt,ie,Yt+Bt,ie+St,kt,oe,kt+Bt,oe+St,G.DEPTH_BUFFER_BIT,G.NEAREST);Mt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||Ot.has(T)){let ye=Ot.get(T),Ke=Ot.get(V);Mt.bindFramebuffer(G.READ_FRAMEBUFFER,R),Mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,z);for(let En=0;En<Lt;En++)Kn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ye.__webglTexture,Q,pe+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ye.__webglTexture,Q),$n?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ke.__webglTexture,Tt,ze+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ke.__webglTexture,Tt),Q!==0?G.blitFramebuffer(Yt,ie,Yt+Bt,ie+St,kt,oe,kt+Bt,oe+St,G.COLOR_BUFFER_BIT,G.NEAREST):$n?G.copyTexSubImage3D(Gt,Tt,kt,oe,ze+En,Yt,ie,Bt,St):G.copyTexSubImage2D(Gt,Tt,kt,oe,Yt,ie,Bt,St);Mt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else $n?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Gt,Tt,kt,oe,ze,Bt,St,Lt,Me,je,Pe.data):V.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,Tt,kt,oe,ze,Bt,St,Lt,Me,Pe.data):G.texSubImage3D(Gt,Tt,kt,oe,ze,Bt,St,Lt,Me,je,Pe):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,kt,oe,Bt,St,Me,je,Pe.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,kt,oe,Pe.width,Pe.height,Me,Pe.data):G.texSubImage2D(G.TEXTURE_2D,Tt,kt,oe,Bt,St,Me,je,Pe);Mt.pixelStorei(G.UNPACK_ROW_LENGTH,on),Mt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,be),Mt.pixelStorei(G.UNPACK_SKIP_PIXELS,fi),Mt.pixelStorei(G.UNPACK_SKIP_ROWS,tn),Mt.pixelStorei(G.UNPACK_SKIP_IMAGES,Rs),Tt===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&G.generateMipmap(Gt),Mt.unbindTexture()},this.initRenderTarget=function(T){Ot.get(T).__webglFramebuffer===void 0&&zt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?zt.setTextureCube(T,0):T.isData3DTexture?zt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?zt.setTexture2DArray(T,0):zt.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){B=0,W=0,it=null,Mt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var oi=[-57,-19,19,57],Yn=[-38,0,38],ao={x:11.7,z:3.2},sr={x:12.05,z:-5.45},bn={x:2,z:38},wn={x:38,z:-38},fd={x:42.3,z:-41.25},Se=(n,t,e)=>Math.max(t,Math.min(e,n)),At=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z);function Sn(n,t,e,i){return Math.abs(n)+e<65&&Math.abs(t)+e<65&&i.every(s=>{let r=n-Se(n,s.x-s.w/2,s.x+s.w/2),o=t-Se(t,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=e*e})}function lo(n,t,e,i,s){let r=n.x,o=n.z;return Sn(t,n.z,i,s)&&(n.x=t),Sn(n.x,e,i,s)&&(n.z=e),n.x!==r||n.z!==o}function ai(n,t,e){let i=Math.atan2(Math.sin(t-n),Math.cos(t-n));return n+Se(i,-e,e)}function pd(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function gd(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ln;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0,h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in d.attributes){if(!i.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(d.attributes[x]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in d.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[x].length!==n[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(d.morphAttributes[x]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let x;if(e)x=d.index.count;else if(d.attributes.position!==void 0)x=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,x,u),c+=x}}if(e){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let x=0;x<h.count;++x)d.push(h.getX(x)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=md(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let v=0;v<o[u].length;++v)h.push(o[u][v][f]);let x=md(h);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}}return l}function md(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new pn(o,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let f=0,h=u.count;f<h;f++)for(let x=0;x<e;x++){let v=u.getComponent(f,x);a.setComponent(f+d,x,v)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var co=new X;function Bn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;co.copy(t),co[i]=0,co.normalize();let c=.5*o/(o+a),u=1-co.angleTo(n)/l;return Math.sign(co[e])===1?u*c:a/(o+a)+c+c*(1-u)}var gl=class n extends vn{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new X,c=new X,u=new X(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,x=d.length/6,v=new X,p=.5/o;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*r,d[m+1]=u.y*Math.sign(l.y)+c.y*r,d[m+2]=u.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/x)){case 0:v.set(1,0,0),h[_+0]=Bn(v,c,"z","y",r,i),h[_+1]=1-Bn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),h[_+0]=1-Bn(v,c,"z","y",r,i),h[_+1]=1-Bn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),h[_+0]=1-Bn(v,c,"x","z",r,t),h[_+1]=Bn(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),h[_+0]=1-Bn(v,c,"x","z",r,t),h[_+1]=1-Bn(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),h[_+0]=1-Bn(v,c,"x","y",r,t),h[_+1]=1-Bn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),h[_+0]=Bn(v,c,"x","y",r,t),h[_+1]=1-Bn(v,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var xd={car:{width:.99,length:2.135,radius:.98,offsets:[-1.17,0,1.17],mass:1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},uo=n=>xd[n]??xd.car;function _s(n,t){n.cabin&&(n.cabin.visible=!0),Object.assign(n,t,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function Ei(n,t,e,i,s="car"){let r=Math.sin(e),o=Math.cos(e),{offsets:a,radius:l}=uo(s);return a.every(c=>Sn(n+r*c,t+o*c,l,i))}function ys(n,t,e,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=t-n.x,a=e-n.z,{width:l,length:c}=uo(n.kind),u=Math.abs(o*r-a*s)-l,d=Math.abs(o*s+a*r)-c;return u<=0&&d<=0||Math.hypot(Math.max(0,u),Math.max(0,d))<i}function Zi(n,t=0){let{width:e,length:i}=uo(n),s=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t));return{width:e*s+i*r,length:i*s+e*r}}function th(n,t,e,i=n){return Ei(n.x,n.z,n.angle,t,n.kind)&&!ho(i,n.x,n.z,n.angle,e)}function ho(n,t,e,i,s){let r=Math.sin(i),o=Math.cos(i),a=uo(n.kind);for(let l of s){if(l===n||Math.abs(l.x-t)>4.5||Math.abs(l.z-e)>4.5)continue;let c=Math.sin(l.angle),u=Math.cos(l.angle),d=uo(l.kind),f=a.radius+d.radius,h=f,x=0,v=0;for(let p of a.offsets)for(let m of d.offsets){let _=t+r*p-l.x-c*m,S=e+o*p-l.z-u*m,M=Math.hypot(_,S);if(M>=h)continue;h=M;let E=Math.hypot(t-l.x,e-l.z);x=M>.02?_/M:E>.02?(t-l.x)/E:r,v=M>.02?S/M:E>.02?(e-l.z)/E:o}if(h<f)return{other:l,nx:x,nz:v,mass:a.mass,otherMass:d.mass}}return null}function jc(n,t){t<2.4||(n.integrity=Math.max(0,n.integrity-(t-2.4)*2.6),n.impact=Math.max(n.impact,t))}function li(n,t,e,i,s){let{brake:r}=e,o=n.kind==="bike",a=n.integrity>0?e.throttle:0,l=n.integrity>0?e.steer:0;n.impact=Math.max(0,n.impact-t*21),n.steer+=(l-n.steer)*(1-Math.exp(-t*10));let c=Math.sin(n.angle),u=Math.cos(n.angle),d=n.vx*c+n.vz*u,f=Math.sign(a)*d<-.6?28:a<0?o?4.7:10:o?19.7:15.4;d=Se(d+a*f*t,o?-2.7:-8.4,o?31:27);let h=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;d*=Math.exp(-t*h);let x=o?r?5.2:13.5:r?2.15:8.1,v=(n.vx*u-n.vz*c)*Math.exp(-t*x);n.vx=d*c+v*u,n.vz=d*u-v*c;let p=Se(1.9-Math.abs(d)/24,.75,1.65),m=n.steer*t*p*Math.min(1,Math.abs(d)/2.1)*Math.sign(d),_=n.angle+m*(o?1.26:r?1.58:1);Ei(n.x,n.z,_,i,n.kind)&&!ho(n,n.x,n.z,_,s)&&(n.angle=_);let S=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*t/.34)),M=t/S;for(let E=0;E<S;E++){let A=n.x+n.vx*M,g=n.z+n.vz*M,b=ho(n,A,g,n.angle,s);if(b){let{other:I,nx:L,nz:D,mass:C,otherMass:U}=b,R=n.vx*L+n.vz*D,z=R-(I.vx*L+I.vz*D);if(z<0&&R<0){let W=-z*1.22/(1/C+1/U);n.vx+=L*W/C,n.vz+=D*W/C,I.vx-=L*W/U,I.vz-=D*W/U,jc(n,-z),jc(I,-z*.9);break}let B=Math.hypot(n.x-I.x,n.z-I.z);if(Math.hypot(A-I.x,g-I.z)<=B)break}if(Ei(A,g,n.angle,i,n.kind))n.x=A,n.z=g;else{let I=Ei(A,n.z,n.angle,i,n.kind)&&!ho(n,A,n.z,n.angle,s),L=Ei(n.x,g,n.angle,i,n.kind)&&!ho(n,n.x,g,n.angle,s),D=Math.hypot(I?0:n.vx,L?0:n.vz);I!==L?(I&&(n.x=A),L&&(n.z=g),n.vx*=I?.84:-.22,n.vz*=L?.84:-.22):(n.vx*=-.21,n.vz*=-.21),jc(n,D||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function Zn(n,t){let e=0;return Yn.some(i=>Math.abs(n-i)<=13.55)&&Yn.some(i=>Math.abs(t-i)<=13.55)&&(e=.16),Math.abs(n-38)<6.05&&Math.abs(t+38)<5.04&&(e=.228),Math.abs(n-2)<9.5&&Math.abs(t-38)<11&&(e=.191),n>-10.91&&n<-3.49&&Math.abs(t-38)<9.77&&(e=.234),e}function Ji(n,t,e,i,s,r,o=.34){if(!Sn(t,e,o,i))return!1;for(let a of s)if(!(At(a,{x:t,z:e})>3.4||!ys(a,t,e,o))&&(!ys(a,n.x,n.z,o)||At(a,{x:t,z:e})<=At(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let l=o+.28;if(At(a,{x:t,z:e})<l&&At(a,{x:t,z:e})<=At(a,n))return!1}return!0}function xl(n,t,e,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(t,e)/.14)),l=n.x,c=n.z,u=t/a,d=e/a;for(let f=0;f<a;f++){let h=n.x+u,x=n.z+d;if(Ji(n,h,x,i,s,r,o)){n.x=h,n.z=x;continue}u&&Ji(n,h,n.z,i,s,r,o)&&(n.x=h),d&&Ji(n,n.x,x,i,s,r,o)&&(n.z=x)}return Math.hypot(n.x-l,n.z-c)}function _d(n,t,e){if(!t)return ys(n,e.x,e.z,.28);let i=Math.max(1,Math.ceil(At(t,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=t.x+(n.x-t.x)*r,a=t.z+(n.z-t.z)*r,l={x:o,z:a,angle:n.angle,kind:n.kind};if(ys(l,e.x,e.z,.28))return!0}return!1}function yd(n,t,e){let i=t.x-n.x,s=t.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((e.x-n.x)*i+(e.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(e.x-n.x-i*o,e.z-n.z-s*o)<1.2}var Xx=new vn,qx=new gl(1,1,1,2,.29),bd=new Vi(1,10,7),Yx=new bi(1,1,1,12),eh=new Map,Zx=new gn({vertexColors:!0,roughness:.82}),vd=new gn({vertexColors:!0,roughness:.36,metalness:.18});function Ki(n,t,e=Zx){if(!t.length)return;let i=t.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,l=new Float32Array(a*3),c=r.material.color;for(let u=0;u<l.length;u+=3)l[u]=c.r,l[u+1]=c.g,l[u+2]=c.b;return o.setAttribute("color",new pn(l,3)),o});n.remove(...t);let s=new Ce(gd(i),e);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var Ms=n=>n.children.filter(t=>t instanceof Ce);function Ue(n,t,e,i,s,r,o,a,l,c=!1){let u=e+":"+c;eh.has(u)||eh.set(u,new gn({color:e,roughness:c?.33:.87,metalness:c?.2:0}));let d=new Ce({box:Xx,cloth:qx,sphere:bd,cylinder:Yx}[t],eh.get(u));return d.scale.set(o,a,l),d.position.set(i,s,r),d.castShadow=!0,d.receiveShadow=!0,n.add(d),d}var Jx=new cs(1,16),Kx=new rn({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function wd(n,t,e){let i=new Ce(Jx,Kx);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(t,e,1),n.add(i),i}function Ss(n,t,e,i,s=!1){let r=new Ne,o=wd(r,.41,.38),a=new Ne;r.add(a);let l=(v,p,m,_,S,M,E,A)=>Ue(a,v,p,m,_,S,M,E,A);l("cloth",e,0,.94,0,.44,.25,.29),l("cloth",t,0,1.22,0,.49,.49,.31),l("cloth",t,0,1.39,0,.55,.215,.337),l("cloth",s?8486469:t,0,1.05,.006,.473,.049,.312),s&&(l("cloth",12891226,-.128,1.343,.169,.078,.057,.014),l("cloth",2445379,0,1.427,-.132,.29,.132,.084)),l("cylinder",i,0,1.5,0,.09,.13,.09),l("sphere",i,0,1.67,.015,.168,.197,.157),l("sphere",3023645,0,1.77,-.031,.162,.112,.141),l("sphere",i,0,1.655,.165,.033,.034,.034),l("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let v of[-1,1])l("sphere",i,v*.155,1.66,.023,.032,.052,.025),l("cloth",2894120,v*.061,1.711,.152,.043,.012,.012),l("cloth",10985105,v*.061,1.692,.156,.032,.012,.012),l("cloth",3024931,v*.06,1.693,.163,.016,.012,.009);s&&(l("sphere",1522486,0,1.79,.012,.181,.132,.164),l("cloth",2508606,0,1.77,.159,.27,.033,.17));let c=[],u=[],d=[],f=[];for(let v of[-1,1]){let p=new Ne;p.position.set(v*.31,1.42,0),a.add(p),Ue(p,"cloth",t,0,-.105,0,.173,.226,.187);let m=new Ne;m.position.y=-.23,p.add(m),Ue(m,"cloth",i,0,-.101,0,.132,.22,.119),Ue(m,"sphere",i,0,-.227,.012,.082,.084,.077),d.push(m),c.push(p);let _=new Ne;_.position.set(v*.128,.94,0),a.add(_),Ue(_,"cloth",e,0,-.205,0,.21,.427,.228);let S=new Ne;S.position.y=-.412,_.add(S),Ue(S,"cloth",e,0,-.18,0,.182,.38,.198),Ue(S,"cloth",s?13812648:3156777,0,-.386,.062,.201,.143,.304),Ue(S,"cloth",s?6839635:2696483,0,-.445,.059,.202,.037,.313),f.push(S),u.push(_)}let h=new Ne;h.position.set(0,-.227,.012),Ue(h,"box",2635321,0,.012,-.002,.066,.078,.12,!0),Ue(h,"box",2635321,0,-.105,.054,.074,.25,.079,!0),Ue(h,"box",10263691,0,-.189,.095,.031,.028,.018);let x=new Je;x.position.set(0,-.235,.053),h.add(x),d[0].add(h);for(let v of[a,...c,...d,...u,...f,h])Ki(v,Ms(v));return h.visible=!1,n.add(r),{root:r,body:a,arms:c,legs:u,forearms:d,shins:f,pistol:h,muzzle:x,shadow:o,stride:0}}function bs(n,t,e,i,s,r=0,o=0,a=!1){n.stride+=t*(4.6+e*1.65);let l=Math.sin(n.stride)*Math.min(.78,e*.15);n.body.position.set(0,Math.abs(l)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(l,0,0),n.legs[1].rotation.set(-l,0,0),n.shins[0].rotation.set(Math.max(0,l)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-l)*.51,0,0);for(let c of n.forearms)c.rotation.set(0,0,0);if(n.arms[0].rotation.set(i?-Math.PI/2+o:-l*.76,0,0),n.arms[1].rotation.set(i?-1.16:l*.76,0,0),n.arms[0].rotation.z=a?-.25:0,n.arms[1].rotation.z=a?.25:0,a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let c=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-c*1.11,n.forearms[0].rotation.x=-.62*(1-c),n.body.rotation.y=-c*.37}else n.body.rotation.y=0;n.pistol.visible=s}var Md=new X(0,-1,0),nh=new X,vs=new X,ih=new X,sh=new X,_l=new X,Td=new yn;function Sd(n,t,e,i,s,r){vs.subVectors(e,n.position);let o=Math.min(i+s-.001,Math.max(.015,vs.length()));vs.normalize();let a=(i*i-s*s+o*o)/(2*o);ih.set(r[0],r[1],r[2]).addScaledVector(vs,-ih.dot(vs)).normalize(),nh.copy(n.position).addScaledVector(vs,a).addScaledVector(ih,Math.sqrt(Math.max(0,i*i-a*a))),_l.subVectors(nh,n.position).normalize(),n.quaternion.setFromUnitVectors(Md,_l),_l.copy(n.position).addScaledVector(vs,o).sub(nh).normalize(),t.quaternion.setFromUnitVectors(Md,_l.applyQuaternion(Td.copy(n.quaternion).invert()))}function rh(n,t){t.root.updateMatrixWorld(!0),n.root.position.copy(t.body.localToWorld(sh.set(0,.1,-.31))),n.root.quaternion.copy(t.body.getWorldQuaternion(Td)),n.shadow.visible=!1,n.pistol.visible=!1;let e=.63;n.body.rotation.set(e,0,0),n.body.position.set(0,.94*(1-Math.cos(e)),-.94*Math.sin(e)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(t.handlebar.localToWorld(sh.set(s*.342,.44,-.09)));Sd(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(t.body.localToWorld(sh.set(s*.245,.39,-.22)));Sd(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function fo(n,t,e=!1){let i=new Ne;wd(i,1.14,2.21);let s=new Ne;i.add(s);let r=(p,m,_,S,M,E,A,g,b=!1)=>Ue(s,p,m,_,S,M,E,A,g,b);r("box",2435629,0,.44,0,1.86,.4,4.14),r("box",t,0,.72,0,1.94,.43,4.24,!0);let o=r("box",t,0,.94,1.23,1.9,.15,1.55,!0);r("box",t,0,.93,-1.51,1.89,.14,1.1,!0);let a=new ln,l=[-.87,.92,-1.14,.87,.92,-1.14,.87,.92,.66,-.87,.92,.66,-.71,1.49,-.78,.71,1.49,-.78,.71,1.49,.16,-.71,1.49,.16];a.setAttribute("position",new Re(l,3)),a.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),a.computeVertexNormals();let c=new Ce(a,new gn({color:3561828,roughness:.24,metalness:.42,flatShading:!0,side:xn}));c.castShadow=!0,s.add(c);let u=new Ne;u.position.set(-.974,0,.67),Ue(u,"box",t,0,.75,-.57,.036,.38,1.18,!0),Ue(u,"box",13418919,-.024,.881,-.89,.04,.04,.15,!0),Ki(u,Ms(u),vd),s.add(u),r("box",t,0,1.495,-.31,1.43,.075,.96,!0),r("box",3355961,0,.69,2.126,.86,.13,.05),r("box",13156268,0,.54,2.13,1.92,.12,.045,!0),r("box",13156268,0,.53,-2.13,1.93,.12,.05,!0),r("box",16707771,0,.72,-2.132,.4,.145,.03);let d=[];for(let p of[-1,1]){r("box",16769956,p*.68,.77,2.132,.43,.17,.055,!0),r("box",11021858,p*.65,.77,-2.132,.48,.17,.055,!0),r("box",2898236,p*.953,1.02,.3,.22,.11,.21),r("box",13089700,p*.98,.89,-.5,.035,.04,.26,!0);for(let m of[-1.31,1.33]){let _=new Ne;_.position.set(p*.945,.39,m),i.add(_),Ue(_,"cylinder",2434600,0,0,0,.408,.26,.408).rotation.z=Math.PI/2,Ue(_,"cylinder",11052964,p*.138,0,0,.217,.02,.217,!0).rotation.z=Math.PI/2,d.push(_)}}let f=[];e&&(f.push(r("box",15550262,-.33,1.62,-.32,.55,.14,.25)),f.push(r("box",5487086,.33,1.62,-.32,.55,.14,.25)));let h=Ms(s).filter(p=>p!==c&&p!==o&&!f.includes(p));Ki(s,h.filter(p=>p.material.metalness===0)),Ki(s,h.filter(p=>p.material.metalness>0),vd);for(let p of d)Ki(p,Ms(p));s.traverse(p=>{p instanceof Ce&&(p.castShadow=!1)});let x=new Ne,v=new rn({color:6643544,transparent:!0,opacity:.29,depthWrite:!1});for(let p=0;p<3;p++){let m=new Ce(bd,v);x.add(m)}return x.position.set(0,1.04,1.25),x.visible=!1,i.add(x),n.add(i),{root:i,body:s,cabin:c,wheels:d,lamps:f,hood:o,smoke:x,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,smokeTime:0,kind:"car",rider:null,door:u,doorTime:0,wheelSpin:0,handlebar:null}}function oh(n,t){let e=fo(n,t),{body:i,hood:s,wheels:r,smoke:o}=e;i.clear(),e.root.remove(...r),r.length=0,e.kind="bike",e.root.children[0].scale.set(.42,1.07,1);let a=(c,u,d,f,h,x,v,p)=>Ue(i,c,u,d,f,h,x,v,p);a("box",3882300,0,.48,-.04,.32,.38,.7),a("sphere",t,0,.89,.34,.24,.23,.46),a("box",2369834,0,.85,-.36,.36,.13,.59),a("box",t,0,.65,-.7,.32,.17,.58),a("box",13940106,0,.8,.88,.25,.21,.11),a("box",10433836,0,.7,-.99,.2,.11,.11);let l=new Ne;l.position.set(0,.76,.38),Ue(l,"box",3949122,0,.44,-.09,.684,.057,.059),Ue(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,Ki(l,Ms(l)),e.handlebar=l,i.add(l),a("box",5461330,0,.39,-.22,.52,.07,.11),a("box",11578016,.232,.36,-.54,.12,.12,.72),s.visible=!1,i.add(s),o.position.set(0,.55,.32);for(let c of[-.73,.78]){let u=new Ne;u.position.set(0,.33,c),Ue(u,"cylinder",2434601,0,0,0,.33,.12,.33).rotation.z=Math.PI/2,Ue(u,"cylinder",8750213,0,0,0,.205,.14,.205).rotation.z=Math.PI/2,Ki(u,Ms(u)),r.push(u),i.add(u),a("box",5988704,0,.55,c,.09,.49,.085).rotation.x=c>0?-.21:.46}return Ki(i,Ms(i).filter(c=>c!==s)),e}function $i(n,t,e=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,l=0,c=0,u=n.wheels.map(p=>{let{x:m,z:_}=p.position,S=Zn(n.x+m*s+_*i,n.z-m*i+_*s);return _>0?o+=S:a+=S,m<0?l+=S:c+=S,S}),d=(o+a)/n.wheels.length;n.root.rotation.y=n.angle,n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),r?1.51:2.64);let f=r?n.integrity<=0?1.25:-e*Math.min(.53,Math.abs(n.speed)*.039):e*Math.min(.09,Math.abs(n.speed)*.004),h=r?0:Math.atan2((c-l)*.5,1.89);n.body.rotation.z+=(f+h-n.body.rotation.z)*(t>0?Math.min(1,t*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-t),n.door.rotation.y=Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let x=r?.33:.408,v=r?n.body.rotation.z:0;n.root.position.set(n.x,d+(r?Math.abs(Math.sin(v))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=e*.22),n.wheelSpin=(n.wheelSpin+n.speed*t/x)%(Math.PI*2),n.wheels.forEach((p,m)=>{r||(p.position.y=u[m]-d+x),p.rotation.set(n.wheelSpin,p.position.z>0?e*(r?.22:.23):0,0,"YXZ")}),n.hood.rotation.x=(100-n.integrity)*.0031,n.hood.rotation.z=(100-n.integrity)*.0013,n.smoke.visible=n.integrity<43,n.smoke.visible&&(n.smokeTime+=t,n.smoke.children.forEach((p,m)=>{let _=(n.smokeTime*(n.integrity<=0?.72:1.04)+m/3)%1;p.position.set(Math.sin(m*3.9+_*3)*_*.4,_*1.85,-_*.58),p.scale.setScalar(.12+_*.32)}))}function Ad(n,t){let{id:e,x:i,z:s,w:r,d:o,angle:a,kind:l,label:c,color:u}=t,{box:d,solid:f,door:h,sign:x,glazing:v,support:p,volume:m}=n,_=l==="apartments",S=l==="shop"||l==="armory",M=_?t.stories:1,E=_?3.58:S?4.16:3.45,A=vt=>.228+vt*E,g=(vt,ot,Et=.228)=>({x:i+Math.cos(a)*vt+Math.sin(a)*ot,z:s-Math.sin(a)*vt+Math.cos(a)*ot,y:Et}),b=Math.abs(Math.cos(a)),I=Math.abs(Math.sin(a)),L=(vt,ot,Et,Wt)=>({...g(vt,ot),w:Et*b+Wt*I,d:Et*I+Wt*b}),D=o/2,C=-o/2,U=-r/2,R=r/2,z=U+2.85,B=(vt,ot,Et,Wt,te,le,Ie,Le=!1,ce=0)=>{let G=g(vt,ot);d(G.x,Et,G.z,Wt,te,le,Ie,Le,a+ce)},W=(vt,ot,Et,Wt,te,le,Ie,Le=!0)=>{B(vt,ot,Et,Wt,te,le,Ie,Le);let ce=L(vt,ot,Wt,le);f.push({x:ce.x,z:ce.z,w:ce.w,d:ce.d,y0:Et-te*.5,h:Et+te*.5,buildingId:e})},it=(vt,ot,Et,Wt,te,le,Ie)=>W(ot,Et,vt+le/2,Wt,le,te,Ie),$=(vt,ot,Et,Wt,te,le)=>it(vt,(Et+Wt)/2,ot,Wt-Et,.22,te,le),tt=(vt,ot,Et,Wt,te,le)=>it(vt,ot,(Et+Wt)/2,.22,Wt-Et,te,le),st=(vt,ot,Et,Wt,te,le)=>{W(vt,ot,te-.066,Et,.132,Wt,le,!1),f[f.length-1].walkSurface=!0,p.push({...L(vt,ot,Et,Wt),y:te,buildingId:e})},Pt=(vt,ot,Et,Wt,te,le,Ie=0)=>{let Le=g(vt,ot,Et);return h(Le.x,Le.z,a+Ie,Wt,te,Et,{buildingId:e,...le})},Rt=_?U+1.43:t.doorAt??.1,et=Math.min(r*.25,3.72),wt=S?[Rt-r*.248,Rt+r*.248]:[],Nt=[];if(!S){let vt=M*E;W(0,0,.228+vt/2,r,vt,o,u),B(0,0,.228+vt+.1,r+.36,.2,o+.36,t.upperColor,!0),B(0,D+.055,1.35,1.22,2.24,.11,7687224);for(let ot=0;ot<M;ot++)for(let Et of[-r*.31,r*.31])B(Et,D+.06,A(ot)+1.88,1.74,1.25,.13,5400944),B(Et,D+.12,A(ot)+1.22,1.93,.1,.2,8484463);return{id:e,kind:l,label:c,units:[],doorIds:[],clerk:null}}let Xt=Pt(Rt-1.28/2,D,.228,1.28,S?4285290:6836289,{private:!_&&!S,unitId:_||S?null:e+":0",normallyOpen:t.open===!0});Nt.push(Xt.id);let yt=g(Rt,D),jt=g(Rt,D+1.05,.16),Fe=g(Rt,D-1.05),Zt=g(Rt,D+2.45,.16),ge=[],ct=null;for(let vt=0;vt<M;vt++){let P=function(Z,q,nt,F,at,J){W(Z,q*Ot,ot+F/2,nt,F,at,J,!1)},ot=A(vt),Et=E-.14;if(m.push({...L(0,0,r-.2,o-.2),floor:ot,ceiling:ot+Et,buildingId:e}),!_||vt===0)st(0,0,r-.03,o-.03,ot,S?11972762:11049602);else{st((z+R)/2,0,R-z,o-.1,ot,11115395);for(let Z of[-1,1])st((U+z)/2,Z*(D-.73),z-U,1.46,ot,10460044)}let Wt=vt===0?u:t.upperColor??u;if(tt(ot,U,C,D,Et,Wt),tt(ot,R,C,D,Et,Wt),$(ot,C,U,R,Et,Wt),vt===0){let Z=U,q=[{center:Rt,width:1.28,door:!0},...wt.map(nt=>({center:nt,width:et,door:!1}))];q.sort((nt,F)=>nt.center-F.center);for(let nt of q){let F=nt.center-nt.width*.5,at=nt.center+nt.width*.5;if($(ot,D,Z,F,Et,Wt),Z=at,nt.door)continue;let J=.61,ft=2.58,ut=ft-J;it(ot,nt.center,D,nt.width,.22,J,Wt),it(ot+ft,nt.center,D,nt.width,.22,Et-ft,Wt);let dt=g(nt.center,D+.068,ot+(ft+J)*.5);v(dt.x,dt.y,dt.z,nt.width,ut,a);let It=L(nt.center,D,nt.width,.2);f.push({x:It.x,z:It.z,w:It.w,d:It.d,y0:ot+J,h:ot+ft,buildingId:e});for(let ht of[-1,0,1])B(nt.center+ht*(nt.width*.5-.042),ot+(ft+J)*.5,D+.13,.07,ut,.084,5989472,!1);for(let ht of[J,J+ut*.34,ft])B(nt.center,ot+ht,D+.13,nt.width+.07,.081,.096,7831928,!1);B(nt.center,ot+J-.025,D+.17,nt.width+.2,.091,.25,10065280,!1);let qt=D-.48;B(nt.center,ot+.83,qt,nt.width-.24,.078,.45,11771260,!1);for(let ht of[-.78,-.39,.39,.78])B(nt.center+ht,ot+.95+(Math.abs(ht)<.5?.055:0),qt,.23,.26,.26,t.awning??12089684,!1)}$(ot,D,Z,R,Et,Wt),W(Rt,D,ot+2.22+(Et-2.22)/2,1.28,Et-2.22,.21,Wt)}else $(ot,D,U,R,Et,Wt);B(0,ot+.25,D+.04,r+.05,.34,.11,8484463,!1);for(let Z of[U+.17,R-.17])B(Z,ot+Et/2,D+.11,.22,Et,.17,ws(Wt),!1);B(0,ot+E-.05,D+.07,r+.25,.22,.13,ws(Wt),!1);for(let Z of vt===0&&S?[]:[U+r*.25,U+r*.51,U+r*.77]){if(vt===0&&Math.abs(Z-Rt)<1.35)continue;let q=S?2.06:1.44;B(Z,ot+1.66,D+.104,q+.2,1.29,.19,6642515,!1),B(Z,ot+1.66,D+.215,q,1.11,.055,S?5535878:4216415,!1);for(let nt of[-q*.45,0,q*.45])B(Z+nt,ot+1.66,D+.252,.052,1.11,.037,S?12041645:11575948,!1);if(B(Z,ot+1.45,D+.252,q,.052,.037,11182981,!1),B(Z,ot+1.1,D+.264,q+.25,.11,.19,ws(Wt),!1),vt>0&&Z===U+r*.77){B(Z,ot+.92,D+.41,q+.24,.12,.64,8484463,!0);for(let nt of[-.56,-.28,0,.28,.56])B(Z+nt,ot+1.27,D+.72,.039,.6,.055,6576195,!1);B(Z,ot+1.58,D+.72,q,.055,.061,6576195,!1)}}for(let Z of[U,R])for(let q of[C+2.14,D-2]){let nt=Z===U?-.128:.128;B(Z+nt,ot+1.82,q,.08,1.11,1.37,5795182,!1),B(Z+nt*1.65,ot+1.24,q,.2,.1,1.53,ws(Wt),!1),B(Z+nt*1.5,ot+1.82,q,.064,1.1,.059,ws(Wt),!1)}if(S){ct=g(0,C+1.89,ot),ct.angle=a;let Z=g(0,D+.18,ot+E-.64);x(c,Z.x,Z.y,Z.z,a,3232851,Math.min(5.25,r-.72),.58),B(0,ot+E-1.37,D+.6,r-.56,.19,1.22,t.awning??7820863,!0);for(let q=U+.68;q<R-.42;q+=.46)B(q,ot+E-1.46,D+1.21,.225,.23,.062,14006413,!1);W(.46,C+3,ot+.55,4.4,1.1,.7,6968131),B(.46,ot+1.15,C+3,4.58,.14,.79,12166795,!0),B(1.33,ot+1.42,C+3.02,.48,.41,.36,4083022,!1),B(1.33,ot+1.58,C+3.22,.34,.19,.051,7968922,!1);for(let q of[U+.46,R-.46])for(let nt of[C+1.75,C+4.2]){W(q,nt,ot+.83,.61,1.66,1.79,7037271);for(let F=0;F<3;F++)for(let at of[-.55,-.17,.22,.57]){let J=[12490344,11953479,5997179][(Math.floor((at+.6)*2.3)+F)%3];B(q+(q<0?.37:-.37),ot+.47+F*.43,nt+at,.15,.25,.22,J,!1)}}for(let q of[-.26,.26])B(q*r,ot+E-.23,0,.32,.085,1.91,16245436,!1);B(0,ot+.009,D-.8,1.71,.016,.87,5863786,!1);continue}let te=U+.14,le=yt,Ie=jt,Le=Fe,ce=[],G=vt===0&&!_?[Xt.id]:[];if(_){te=z+.1;let q=(vt%2===0?1:-1)*(D-.84),nt=1.17;tt(ot,z,C,q-nt/2,Et,14798003),tt(ot,z,q+nt/2,D,Et,14798003),W(z,q,ot+2.22+(Et-2.22)/2,.2,Et-2.22,nt,14798003);let F=Pt(z,q-nt/2,ot,nt,8412486,{private:!0,unitId:e+":"+vt},-Math.PI/2);Nt.push(F.id),G.push(F.id),le=g(z,q,ot),Ie=g(z-.73,q,ot),Le=g(z+.74,q,ot);let at=J=>J%2===0?U+.79:z-.77;for(let J=0;J<vt;J++){let ft=J%2===0?1:-1,ut=at(J);ce.push(g(ut,ft*(D-.71),A(J)));for(let dt=0;dt<=20;dt+=4){let It=ft*(D-1.3-(o-2.6)*dt/20);ce.push(g(ut,It,A(J)+E*dt/20))}ce.push(g(ut,-ft*(D-.82),A(J+1)))}if(vt<M-1){let J=vt%2===0?1:-1,ft=at(vt),ut=21,dt=(o-2.82)/ut;for(let It=1;It<=ut;It++){let qt=J*(D-1.41-(It-.5)*dt),ht=ot+E*It/ut;B(ft,ht-.063,qt,1.38,.126,dt+.028,It%2===0?9405300:10390909,!0);let Ft=L(ft,qt,1.42,dt+.025);p.push({...Ft,y:ht,buildingId:e}),f.push({x:Ft.x,z:Ft.z,w:Ft.w,d:Ft.d,y0:ht-.127,h:ht,buildingId:e,stair:!0})}for(let It=0;It<=10;It++){let qt=J*(D-1.43-(o-2.86)*It/10),ht=ot+E*It/10,Ft=ft+(vt%2===0?.7:-.7);B(Ft,ht+.55,qt,.051,1.1,.062,6183505,!1),B(Ft,ht+1.04,qt,.061,.082,dt*2.14,6837059,!1)}}B(U+1.32,ot+E-.2,q,.44,.11,.63,15063470,!1)}let Xe=R-te,de=te+Xe*.44,ue=Math.max(C+3.18,-.48),Mt=te+Xe*.24,Te=de+(R-de)*.46,Ot=_&&vt%2===1?-1:1,zt=(Z,q,...nt)=>B(Z,q*Ot,...nt);for(let[Z,q]of[[te,Mt-.48],[Mt+.48,Te-.53],[Te+.53,R]])$(ot,ue*Ot,Z,q,Et,14798003);tt(ot,de,Math.min(C*Ot,ue*Ot),Math.max(C*Ot,ue*Ot),Et,14798003);for(let[Z,q,nt]of[[Mt,.96,9271398],[Te,1.06,8544846]]){let F=Pt(Z-q*Ot/2,ue*Ot,ot,q,nt,{private:!1},Ot===1?0:Math.PI);G.push(F.id),Nt.push(F.id),W(Z,ue*Ot,ot+2.22+(Et-2.22)/2,q,Et-2.22,.2,14798003)}let w=R-1.25;P(w,C+1.2,1.47,.44,2.08,7687224),zt(w,C+1.19,ot+.52,1.47,.17,2.02,t.fabrics??6848113,!1),zt(w,C+.45,ot+.64,1.02,.15,.46,13945005,!1),P(de+.53,C+.36,.88,1.87,.68,7687224),zt(de+.55,C+.72,ot+1.11,.038,.69,.044,13150075,!1);let Y=de-.63;P(Y,C+.51,1.04,.53,.75,14999502),zt(Y,C+.42,ot+.58,.81,.07,.48,12373706,!1),P(te+.47,C+1.28,.45,.53,.62,14013634),zt(te+.47,C+1.32,ot+.55,.39,.055,.43,11643795,!1),P(te+.45,ue-.58,.57,.81,.5,9737094),zt(te+.46,ue-.58,ot+.84,.54,.1,.49,15130568,!1),zt((te+de)*.5,(C+ue)*.5,ot+.011,de-te-.24,.019,ue-C-.25,11580070,!1);let pt=te+.45;P(pt,D-2.76,.75,.87,1.65,8415561),zt(pt,D-2.76,ot+.91,.83,.09,1.74,13217414,!1),zt(pt,D-2.42,ot+.963,.45,.022,.49,5141109,!1),P(te+.45,ue+.63,.72,1.75,.71,13353637),zt(te+.81,ue+.62,ot+1.19,.049,.28,.064,7498586,!1);let lt=R-.63;P(lt,D-1.54,1.04,.51,2.03,t.fabrics??7037784),zt(lt+.43,D-1.54,ot+.79,.25,.69,2.04,6187358,!1);let xt=R-2.02;zt(xt,D-1.93,ot+.014,1.96,.025,1.87,10188389,!1),P(xt,D-1.72,.64,.43,.82,8413514);for(let Z of[[te+1.82,D-3.16],[R-2.5,C+2.13]])zt(Z[0],Z[1],ot+E-.19,.31,.067,.32,16443063,!1);let _t=_?g(z+1.2,(D-1.03)*Ot,ot):g(Rt,D-1.35,ot);ge.push({id:e+":"+vt,buildingId:e,floor:ot,entry:le,outside:Ie,inside:Le,resident:_t,doorIds:G,stairs:ce})}let $t=A(M);if(W(0,0,$t-.053,r+.17,.2,o+.17,8613472,!1),l==="house"){for(let vt=1;vt<=7;vt++){let ot=r+.68-vt*.33,Et=o+.65-vt*.58;B(0,$t+vt*.112,0,ot,.171,Et,vt%2===0?9986376:10643532,!0)}for(let vt=-4;vt<=4;vt++){let ot=vt*o/9,Et=$t+Math.max(.09,.85-Math.abs(ot)*.14);B(0,Et+.01,ot,r+.56,.079,.081,12024662,!1)}}else{for(let vt of[U,R])B(vt,$t+.28,0,.25,.59,o+.15,ws(u),!0);for(let vt of[C,D])B(0,$t+.28,vt,r+.2,.59,.25,ws(u),!0);if(B(R-1.5,$t+.46,C+1.45,1.34,.64,1.21,8418922,!0),B(R-1.5,$t+.7,C+1.45,1.14,.12,1.21,10261379,!1),B(U+1.52,$t+.39,D-1.55,.56,.57,.57,4873822,!0),B(U+1.52,$t+.71,D-1.55,.62,.13,.62,6715769,!1),!S){let vt=g(Rt+1.33,D+.17,2.758);x(c,vt.x,vt.y,vt.z,a,5589560,2.27,.42)}}return{id:e,kind:l,label:c,entry:yt,outside:jt,inside:Fe,approach:Zt,resident:ge[0]?.resident??null,clerk:ct,doorIds:Nt,units:ge}}function ws(n){let t=Math.min(255,(n>>16&255)+26),e=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return t*65536+e*256+i}var Ed=(n,t)=>[Math.floor((n-t*.5-1.1)/10),Math.floor((n+t*.5+1.1)/10)];function yl(n){let t=new Map;for(let e of n){let[i,s]=Ed(e.x,e.w),[r,o]=Ed(e.z,e.d);for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=a+","+l;t.has(c)||t.set(c,[]),t.get(c).push(e)}}return(e,i)=>t.get(Math.floor(e/10)+","+Math.floor(i/10))??[]}var Rd=(n,t,e)=>Math.abs(n-e.x)<e.w*.5+.002&&Math.abs(t-e.z)<e.d*.5+.002,$x=n=>n&&n.health!==0&&!n.seated;function Cd(n,t,e,i,s){let r=yl(n),o=yl(t),a=yl(e),l=yl(i.map(S=>S.closedSolid)),c=new Map(i.map(S=>[S.id,S])),u=S=>{let M=c.get(S.doorId);return!M.breached&&M.openAmount<1.06},d=n.filter(S=>(S.y0??0)<.95&&S.h>.28&&!S.stair);function f(S,M,E=0){let A=s(S,M);for(let g of o(S,M))g.y>A&&g.y<=E+.305&&Rd(S,M,g)&&(A=g.y);return A}function h(S,M,E=0){let A=b=>!b.stair&&(!b.walkSurface||b.h>E+.305)&&(b.y0??0)<E+1.72&&b.h>E+.13,g=r(S,M).filter(A);for(let b of l(S,M))A(b)&&u(b)&&g.push(b);return g}function x(S,M,E=0){let A=null;for(let g of a(S,M))g.floor<=E+.14&&g.ceiling>=E&&Rd(S,M,g)&&(!A||g.floor>A.floor)&&(A=g);return A}function v(){return i.map(S=>S.closedSolid).filter(u)}function p(S){let M=c.get(S);return!M||!M.private||M.breached?!1:(M.breached=!0,M.hold=1/0,!0)}function m(S,M){for(let E of i){let A=E.breached||E.normallyOpen;E.hold=Math.max(0,E.hold-S);for(let b of M){if(A||!$x(b))continue;let I=b.floorY??b.y??0;if(Math.abs(I-E.base)>.64)continue;let L=b.x-E.x,D=b.z-E.z,C=L*L+D*D;if(C>3.68)continue;let U=b.buildingId===E.buildingId&&(!E.unitId||b.unitId===E.unitId),R=L*E.normalX+D*E.normalZ<-.22;(!E.private||U||R&&C<2.43||E.opened&&C<1.92)&&(A=!0,E.hold=1.1)}let g=A||E.hold>0?1.48:0;E.openAmount+=(g-E.openAmount)*(1-Math.exp(-S*13)),E.opened=E.openAmount>=1.06,E.door.rotation.y=E.angle+E.openAmount}}function _(){for(let S of i)S.breached=!1,S.hold=0,S.opened=S.normallyOpen,S.openAmount=S.normallyOpen?1.48:0,S.door.rotation.y=S.angle+S.openAmount}return{vehicleSolids:d,floorAt:f,walkSolids:h,interiorAt:x,closedDoorSolids:v,breachDoor:p,updateDoors:m,resetDoors:_}}var vl=473021;function We(){return vl=Math.imul(1664525,vl)+1013904223>>>0,vl/4294967296}var Ri=n=>n[Math.floor(We()*n.length)],ah=3751484;function Id(n){vl=473021,n.background=new he(15316107),n.fog=new Lr(15316107,.0068),n.add(new Wr(15266035,7890017,2.3));let t=new Yr(16763540,3);t.position.set(-45,48,-32),t.castShadow=!0,Object.assign(t.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),t.shadow.bias=-35e-5,t.shadow.normalBias=.12,t.shadow.mapSize.set(2048,2048),t.shadow.autoUpdate=!1,n.add(t);let e=new Ce(new Vi(330,32,16),new On({side:cn,depthWrite:!1,uniforms:{sun:{value:new X(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));e.frustumCulled=!1,e.renderOrder=-100,n.add(e);let i=[],s=[],r=[],o=[],a={},l={box:new vn,foliage:new hs(1,1),pole:new bi(.8,1,1,8),hill:new Vi(1,14,9)},c=new Je;function u(C,U,R,z,B,W,it,$,tt,st=0){let Pt=U===0&&z===0?"center":Math.round(U/31)+","+Math.round(z/31),Rt=C+":"+!!tt+":"+Pt,et=a[Rt]??={shape:C,shadow:!!tt,items:[]};c.position.set(U,R,z),c.scale.set(B,W,it),c.rotation.y=st,c.updateMatrix(),et.items.push({matrix:c.matrix.clone(),color:new he($)})}function d(C,U,R,z,B,W,it,$=!1,tt=0){u("box",C,U,R,z,B,W,it,$,tt)}function f(C,U,R,z,B,W,it){d(C,U,R,z,B,W,it,!0),i.push({x:C,z:R,w:z,d:W,y0:U-B/2,h:U+B/2})}function h(C,U,R=!1){let z=3.25+We()*2.65;if(u("pole",C,z*.48,U,R?.16:.22,z,.22,8020048,!0),R)for(let B=0;B<7;B++){let W=B*Math.PI*2/7;u("foliage",C+Math.sin(W)*.86,z,U+Math.cos(W)*.86,.42,.24,1.58,Ri([3432266,4879699,7111766]),!0,W)}else for(let B=0;B<4;B++)u("foliage",C+(We()-.5)*2,z+(We()-.3)*1.6,U+(We()-.5)*2,1+We()*.7,1.15,1.35,Ri([4614992,6718801,8889436]),!0,We()*6);i.push({x:C,z:U,w:.45,d:.45,h:.9*z})}function x(C,U,R,z,B,W=1784375,it=4.2,$=.65){let tt=document.createElement("canvas");tt.width=512,tt.height=115;let st=tt.getContext("2d");st.fillStyle="#e9d4a0",st.fillRect(0,0,512,115),st.strokeStyle="#645a47",st.lineWidth=6,st.strokeRect(7,7,498,101),st.font="900 50px system-ui",st.textAlign="center",st.textBaseline="middle",st.fillStyle="#"+W.toString(16).padStart(6,"0"),st.fillText(C,256,57,470);let Pt=new Or(tt);Pt.colorSpace=an;let Rt=new Ce(new ni(it,$),new rn({map:Pt}));Rt.position.set(U,R,z),Rt.rotation.y=B,n.add(Rt)}let v=new Ne;n.add(v);let p=[],m=new ni,_=new gn({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:xn});function S(C,U,R,z,B,W){let it=new Ce(m,_);it.position.set(C,U,R),it.scale.set(z,B,1),it.rotation.y=W,n.add(it)}let M={box:d,solid:i,door:E,sign:x,glazing:S,support:s,volume:r};function E(C,U,R,z,B,W=.228,it={}){let $=new Ne,tt=it.id??"door-"+p.length;$.position.set(C,W,U);let st=Ue($,"box",B,z*.5,1.088,0,z-.045,2.147,.074);st.castShadow=!1;let Pt=Ue($,"box",10191979,z*.5,1.47,-.04,z*.64,.56,.013);Pt.castShadow=!1;for(let yt of[-1,1])Ue($,"box",10191195,z-.14,.99,yt*.046,.11,.13,.035).castShadow=!1,Ue($,"box",12691318,z-.174,1.011,yt*.073,.132,.042,.037).castShadow=!1;let Rt=C+Math.cos(R)*z*.5,et=U-Math.sin(R)*z*.5,wt=it.normallyOpen?1.48:0;$.rotation.y=R+wt,n.add($);let Nt={x:Rt,z:et,w:Math.abs(Math.cos(R))*z+.083,d:Math.abs(Math.sin(R))*z+.083,y0:W,h:W+2.155,doorId:tt,buildingId:it.buildingId??null},Xt={door:$,id:tt,x:Rt,z:et,base:W,angle:R,openAmount:wt,opened:!!it.normallyOpen,breached:!1,private:!!it.private,normallyOpen:!!it.normallyOpen,hold:0,buildingId:it.buildingId??null,unitId:it.unitId??null,normalX:Math.sin(R),normalZ:Math.cos(R),handle:{x:C+Math.cos(R)*(z-.17),y:W+1.008,z:U-Math.sin(R)*(z-.17)},closedSolid:Nt};p.push(Xt);for(let yt of[0,z])d(C+Math.cos(R)*yt,W+1.09,U-Math.sin(R)*yt,.105,2.18,.178,6640456,!1,R);return d(Rt,W+2.185,et,z+.12,.11,.178,6640456,!1,R),Xt}function A(){let{x:C,z:U}=wn;f(C,2.08,U,12,3.84,10,13216391),d(C,4.1,U,12.5,.22,10.48,9920072,!0),d(C,1.28,U+5.04,1.18,2.23,.1,6903110);for(let R of[-3.6,3.6])d(C+R,2.03,U+5.05,1.86,1.21,.12,5467250)}function g(){let C=bn.z;d(2,.169,C,19,.045,22,6908773),f(-7.18,2.03,C,7.35,3.68,19.56,8886169),d(-7.18,3.98,C,7.62,.23,19.8,5406866),d(-3.46,1.35,C,.12,2.32,1.7,4413028),d(-2.5,3.33,C,7.1,.25,19.5,5401719,!0),f(-1.5,1.42,C-9.72,5.4,2.54,.35,8229008),f(-1.5,1.42,C+9.72,5.4,2.54,.35,8229008);for(let R of[-9.5,9.5])f(1.04,1.65,C+R,.28,3,.31,8689042);d(1.1,2.88,C,.25,.42,19.54,5994626),x("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,C,Math.PI/2,2704468,7.2,.63);for(let R of[-8.2,-3.95,.3,4.55,8.8])d(8.15,.208,C+R,5.3,.016,.1,14537646);for(let R of[-6.1,-1.85,2.4])d(5.5,.208,C+R,.1,.016,3.25,14537646);d(-3.75,1.67,C-6.8,.16,1.18,2.05,3626589),d(-3.75,1.67,C+6.8,.16,1.18,2.05,3626589),d(-3.52,.21,C+3.1,.64,.08,2.45,6446161)}d(0,-.3,0,720,.1,720,8880242),d(0,-.18,0,132,.34,132,4605770);for(let C=0;C<1250;C++){let U=We()*130-65,R=We()*130-65;d(U,.001,R,.04+We()*.3,.007,.04+We()*.3,Ri([5460823,4934733,4473414,5855058]),!1,We()*6)}for(let C of oi)for(let U of Yn){for(let R=-10;R<=10;R+=4)d(C,.014,U+R,.12,.015,1.82,14132838);for(let R of[-12.6,12.6])for(let z=-4.5;z<=4.5;z+=.9)d(C+z,.015,U+R,.45,.016,1.44,13156273)}for(let C of oi)for(let U of Yn){for(let R=-10;R<=10;R+=4)d(U+R,.014,C,1.82,.015,.12,14132838);for(let R of[-12.6,12.6])for(let z=-4.5;z<=4.5;z+=.9)d(U+R,.015,C+z,1.44,.016,.45,13156273)}for(let C of Yn)for(let U of Yn){d(C,.067,U,27.1,.16,27.1,13022103),d(C,.125,U,26.7,.07,26.7,10721158);for(let R of[-12.25,12.25])for(let z=-12;z<=12;z+=2.1)d(C+R,.164,U+z,2.32,.008,.023,12956566),d(C+z,.164,U+R,.023,.008,2.32,12956566);if(C===bn.x-2&&U===bn.z)g();else if(C===wn.x&&U===wn.z)A();else if(C===0&&U===-38){for(let R of[-6,6]){d(C+R,.185,U,8.2,.08,19,7438938);for(let z of[-7,0,7])h(C+R,U+z,!0)}for(let R=-8;R<=8;R+=4)d(C,.177,U+R,3.1,.033,3.2,13218964);x("PRA\xC7A DA BRASA",C,1.6,U-10,Math.PI)}else for(let R of[-1,1]){let z=C===0&&U===0&&R===1,B=o.filter(et=>et.id.startsWith("lot-")||et.id==="armory").length,W=B+10,it=z?"armory":B%5===1||B%5===3?"shop":B%5===0?"house":"apartments",$=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],tt=it==="shop"?$[Math.floor(B/2)%$.length]:it==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(B/2)%6]:"CASA "+W,st=Ri([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Pt=Ad(M,{id:z?"armory":"lot-"+W,kind:it,label:z?"LOJA DE ARMAS":tt,x:C+R*(z?5.7:6.25),z:U+(z?-5.45:0),angle:R*Math.PI/2,w:z?11.35:(it==="house"?13.7:15.3)+We()*.57,d:z?9.36:9.38+We()*.25,color:st,upperColor:Ri([12163192,10394757,12426376,11971991]),awning:Ri([7821376,6190959,10446933]),fabrics:Ri([7373431,8152675,9534300]),stories:B%3===0?3:2,doorAt:z?0:void 0,open:it==="house"&&B%3!==0});o.push(Pt);let Rt=z?4.32:U+9.83;d(C+R*6.8,.168,Rt,8.3,.017,2.51,10919820);for(let et=-3.5;et<=3.5;et+=.7)d(C+R*6.8+et,.18,Rt,.022,.012,2.5,12169372)}for(let R of[-1,1]){let z=C+R*12.85,B=U-R*9.85;u("pole",z,2.39,B,.083,4.5,.083,ah,!0),i.push({x:z,z:B,w:.17,d:.17,h:4.65}),d(z+R*.35,4.52,B,.79,.075,.075,ah,!0),d(z+R*.73,4.48,B,.32,.12,.19,14924165,!0),d(C+R*9,.56,U-R*12.5,1.52,.075,.46,8476742,!0),d(C+R*9,.78,U-R*12.66,1.52,.23,.075,9791828,!0),i.push({x:C+R*9,z:U-R*12.5,w:1.52,d:.5,h:.89});for(let it of[-.54,.54])d(C+R*9+it,.35,U-R*12.5,.06,.37,.37,ah,!0);let W=C+R*10.1;u("pole",W,.52,U-R*12.55,.24,.69,.24,3493961,!0),u("pole",W,.88,U-R*12.55,.267,.1,.267,2506039,!0),i.push({x:W,z:U-R*12.55,w:.5,d:.5,h:.94}),d(W+.72,.38,U-R*12.58,.09,.39,.09,7104343,!0),d(W+.72,.58,U-R*12.58,.13,.08,.13,14197880,!0)}}for(let C=0;C<52;C++){let U=C/52*Math.PI*2,R=118+We()*58,z=Ri([9670532,10525321,10001560,9212560]),B=Math.sin(U)*R,W=Math.cos(U)*R;u("hill",B,-1,W,12+We()*33,3+We()*22,10+We()*20,z,!1,U);let it=4+We()*16;d(B,it*.5-1,W,3+We()*9,it,4+We()*8,Ri([10194306,8949389,10128258]),!1)}let b=new gn({roughness:.88});for(let{shape:C,shadow:U,items:R}of Object.values(a)){let z=new ls(l[C],b,R.length);R.forEach(({matrix:B,color:W},it)=>{z.setMatrixAt(it,B),z.setColorAt(it,W)}),z.castShadow=U,z.receiveShadow=!0,n.add(z)}let I=new Ne,L=new Ce(new Gr(1.6,1.85,40),new rn({color:15794054,side:xn,transparent:!0,opacity:.85,depthWrite:!1}));L.rotation.x=-Math.PI/2,L.position.y=.26,I.add(L);let D=new Ce(new us(.43),new rn({color:15794054}));return D.position.y=2.8,I.add(D),n.add(I),{solid:i,marker:I,beacon:D,sun:t,sky:e,houseRoof:v,bed:fd,doors:p,buildings:o,...Cd(i,s,r,p,Zn)}}var rr=2.05,Ml=7.15;function Qx(n){let t=[];return n.forEach((e,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(e[0]-s[0]),a=Math.sign(e[1]-s[1]),l=Math.sign(r[0]-e[0]),c=Math.sign(r[1]-e[1]),u={x:e[0]-a*rr-o*Ml,z:e[1]+o*rr-a*Ml},d={x:e[0]-c*rr+l*Ml,z:e[1]+l*rr+c*Ml},f=o===l&&a===c,h={x:e[0]-(f?a:a+c)*rr,z:e[1]+(f?o:o+l)*rr},x={x:e[0],z:e[1],id:e.join(",")};for(let v=0;v<=6;v++){let p=v/6,m=1-p;t.push({x:m*m*u.x+2*m*p*h.x+p*p*d.x,z:m*m*u.z+2*m*p*h.z+p*p*d.z,junction:x,curve:!f,angle:Math.atan2(o,a)})}}),t}var Ts=(n,t,e,i)=>[[n,t],[n,i],[e,i],[e,t]],jx=[Ts(-57,-57,57,57),Ts(-57,-19,19,57).reverse(),Ts(-19,-57,57,19),Ts(-19,-19,19,19).reverse(),Ts(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],Ts(-57,-57,57,57).reverse(),Ts(-19,-57,57,57).reverse()];function t_(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=t[0]===i[0]?1:0,r=1-s,o=oi.filter(a=>a>Math.min(t[s],i[s])&&a<Math.max(t[s],i[s]));return i[s]<t[s]&&o.reverse(),[t,...o.map(a=>r===0?[t[0],a]:[a,t[1]])]})}var e_=jx.map(n=>Qx(t_(n))),n_=[1,3,1,1,5,5,7,10];function po(n,t){let e=e_[t],i=n_[t]*7%e.length,s=e[i],r=e[(i+e.length-1)%e.length],o=.49;_s(n,{x:r.x+(s.x-r.x)*o,z:r.z+(s.z-r.z)*o,angle:s.angle}),n.driver={route:e,next:i,cruise:8.7+t%4*1.02,stuck:0,routeIndex:t,pass:null},n.stolen=!1,n.abandoned=0}function bl(n,t,e){let i=Math.atan2(t.x-n.x,t.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=e*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:Se(s*1.9,-1,1),throttle:Se((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function lh(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=Zi(n.kind),a=n.kind==="bike",l=i;for(let c of t){if(c===n||At(c,n)>20)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s),x=Zi(c.kind,c.angle-n.angle);if(f<.2||h>o.width+x.width+.16)continue;let v=Math.max(0,f-o.length-x.length-(a?.39:.64)),p=Math.max(0,c.vx*s+c.vz*r);l=Math.min(l,p+v*.87)}for(let c of e){if(c.down>0||c.health<=0||c.seated||At(c,n)>11)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s);f>0&&h<o.width+.4&&(l=Math.min(l,Math.max(0,f-o.length-.9)*.94))}return l}function Pd(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...t.filter(c=>c!==n&&Math.hypot(c.vx,c.vz)<2).map(c=>({other:c,radius:1.05})),...e.filter(c=>c.down<=0&&c.health!==0&&!c.seated).map(c=>({other:c,radius:.43}))].find(({other:c,radius:u})=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>2.25&&h<13.4&&Math.abs(d*r-f*s)<u+1.05});if(!a)return null;let l=(c,u)=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>-3&&h<23&&Math.abs(d*r-f*s-u)<2.3};for(let c of[2.72,-2.72]){if(t.some(f=>f!==n&&f!==a.other&&l(f,c))||e.some(f=>f!==a.other&&f.down<=0&&l(f,c)))continue;let u=n.x+s*8+r*c,d=n.z+r*8-s*c;if(Ei(u,d,n.angle,i,n.kind)&&Ei((u+n.x)*.5,(d+n.z)*.5,n.angle,i,n.kind))return{x:u,z:d}}return null}function Ld(n,t,e,i){let s=n.kind==="bike",r=Zi(n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),l=p=>({along:(p.x-n.x)*o+(p.z-n.z)*a,across:(p.x-n.x)*a-(p.z-n.z)*o}),c=[...t.filter(p=>p!==n).map(p=>({actor:p,...Zi(p.kind,p.angle-n.angle),moving:!0})),...e.filter(p=>p.health>0&&!p.seated&&!p.down).map(p=>({actor:p,width:.34,length:.34,moving:!1}))].map(p=>({...p,...l(p.actor)})),u=c.filter(({actor:p,along:m,across:_,width:S,length:M,moving:E})=>m>Math.max(s?1.2:2.4,r.length+M-.3)&&m<19&&Math.abs(_)<r.width+S+.16&&(!E||Math.hypot(p.vx,p.vz)<(s?8:6)));u.sort((p,m)=>p.along-m.along);let d=u[0];if(!d||d.along-r.length-d.length<(s?1.85:2.45))return null;let f=r.width+d.width+(s?.23:.38),h=s?Math.max(1.12,f):2.95,x=s?[h,-h,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[h,-h,3.45,-3.45],v=d.along+r.length+d.length+(s?3:4.1);for(let p of x){if(Math.abs(d.across-p)<f)continue;let m=r.length+(s?3.9:5.8);if(!c.every(g=>{if(g===d)return!0;let b=g.moving?Math.max(0,-g.actor.vx*o-g.actor.vz*a):0;return g.along<-r.length-g.length-.2||g.along>v+m+Math.min(10,b)||Math.abs(g.across-p)>r.width+g.width+(s?.25:.46)}))continue;let S=Math.max(s?2.4:3.8,Math.min(s?5:6.1,d.along-r.length+1.2)),M=Zn(n.x,n.z),E=Math.ceil(v/.72),A=!0;for(let g=1;g<=E;g++){let b=g*v/E,I=p*Math.min(1,b/S),L=n.x+o*b+a*I,D=n.z+a*b-o*I,C=s?.27:.9;if(Math.abs(Zn(L+a*C,D-o*C)-M)>=.08||Math.abs(Zn(L-a*C,D+o*C)-M)>=.08||!th({x:L,z:D,angle:n.angle,kind:n.kind},i,t,n)){A=!1;break}}if(A)return{x:n.x,z:n.z,sx:o,sz:a,offset:p,obstacle:d.actor,phase:"out",age:0,clearAfter:r.length+d.length+(s?.9:1.2)}}return null}function i_(n,t,e,i,s=[]){t.age+=i;let r=n.kind==="bike",o=Zi(n.kind),{sx:a,sz:l,offset:c}=t,u=(n.x-t.x)*a+(n.z-t.z)*l,d=(n.x-t.x)*l-(n.z-t.z)*a,f=(t.obstacle.x-t.x)*a+(t.obstacle.z-t.z)*l;if(t.age>(r?10:13)||t.phase==="merge"&&Math.abs(d)<.53)return null;t.phase==="out"&&Math.abs(d-c)<(r?.28:.55)&&(t.phase="pass"),t.phase!=="merge"&&u>f+t.clearAfter&&e.every(M=>{if(M===n)return!0;let E=Zi(M.kind,M.angle-Math.atan2(a,l));return Math.abs((M.x-t.x)*l-(M.z-t.z)*a)>o.width+E.width+.3||Math.abs((M.x-n.x)*a+(M.z-n.z)*l)>o.length+E.length+1.25})&&(t.phase="merge");let h=t.phase==="merge"?0:c,x=e.some(S=>{if(S===n||S===t.obstacle)return!1;let M=(S.x-n.x)*a+(S.z-n.z)*l,E=(S.x-t.x)*l-(S.z-t.z)*a,A=Zi(S.kind,S.angle-Math.atan2(a,l));return M>0&&M<o.length+A.length+2.7&&Math.abs(E-h)<o.width+A.width+.28})||s.some(S=>{if(S.health<=0||S.seated||S.down)return!1;let M=(S.x-n.x)*a+(S.z-n.z)*l,E=(S.x-t.x)*l-(S.z-t.z)*a;return M>0&&M<o.length+2.1&&Math.abs(E-h)<o.width+.45}),v=t.phase==="out"?r?2.3:4.4:r?4.8:7,p={x:t.x+a*(u+v)+l*h,z:t.z+l*(u+v)-a*h},m=t.phase==="out"?r?4.5:4.8:r?8.1:6.5,_=bl(n,p,x?0:m);return x&&(_.throttle=0),_}function Sl(n,t,e,i,s){return th(t,s,e,n)&&i.every(r=>r.health<=0||r.seated||r.down||!ys(t,r.x,r.z,.26))}function s_(n,t,e,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=e.filter(u=>u!==n&&At(n,u)<29),l=null,c=-1/0;for(let u of[0,-.62,.62,-1,1]){let d={x:n.x,z:n.z,angle:n.angle,kind:n.kind},f=0;for(let m=0;m<(r?13:19)&&(d.angle-=u*.18*(r?.75:.56),d.x-=Math.sin(d.angle)*.18,d.z-=Math.cos(d.angle)*.18,!!Sl(n,d,e,i,s));m++)f+=.18;if(f<(r?.9:1.35))continue;Sl(n,d,e,i,s)||(d.x+=Math.sin(d.angle)*.18,d.z+=Math.cos(d.angle)*.18,d.angle+=u*.18*(r?.75:.56));let h={...d},x=0;for(let m=0;m<27;m++){let _=Math.atan2(t.x-h.x,t.z-h.z);if(h.angle=ai(h.angle,_,r?.13:.092),h.x+=Math.sin(h.angle)*.24,h.z+=Math.cos(h.angle)*.24,!Sl(n,h,e,i,s))break;x+=.24}let v=r&&Ld(d,a,i,s),p=x*.67+(At(n,t)-At(h,t))*.38+f*.31-Math.abs(u)*.12+(v?4.6:0);p>c&&(c=p,l={steer:u,pace:o,distance:Math.max(.7,f-.26),age:0,x:n.x,z:n.z})}return l}function ch(n,t,e,i,s,r,o,a,l=!0){let c=n.kind==="bike",u=t.recoverPosition;t.recoverPosition={x:n.x,z:n.z};let d=u&&At(u,n)>o*.57;if(t.recoverRetry=Math.max(0,(t.recoverRetry??0)-o),t.maneuver){let h=t.maneuver;h.age+=o;let x=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),v={x:n.x-Math.sin(n.angle)*x,z:n.z-Math.cos(n.angle)*x,angle:n.angle,kind:n.kind};return At(n,h)>=h.distance||h.age>(c?2.4:2.8)||!Sl(n,v,i,s,r)?(t.maneuver=null,t.recoverWait=0,t.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:h.steer,throttle:n.speed>-h.pace?Se((n.speed+h.pace)*-.64,-.54,-.05):0,brake:!1}}t.recoverWait=!l||d||At(n,e)<1.2?0:(t.recoverWait??0)+o;let f=c?1.08:1.75;return t.recoverRetry>0||t.recoverWait<f||n.integrity<=0?a:(t.maneuver=s_(n,e,i,s,r),t.maneuver?(t.recoverWait=0,{steer:t.maneuver.steer,throttle:-.47,brake:!1}):(t.recoverRetry=.85,a))}function Dd(n,t,e,i,s,r){for(let[o,a]of r)(!a.driver||a.integrity<=0||At(a,a.driver.route[a.driver.next].junction)>11)&&r.delete(o);for(let o of n){let a=o.driver;if(!a||o.integrity<=0){o!==t.player&&Math.hypot(o.vx,o.vz)>.06?li(o,s,{throttle:0,steer:0,brake:!0},i,t.vehicles):o!==t.player&&(o.impact=Math.max(0,o.impact-s*21));continue}let{route:l}=a,c=o.kind==="bike",u=l[a.next],d=Math.sin(o.angle),f=Math.cos(o.angle);for(let I=0;!a.maneuver&&I<6;I++){let L=u.x-o.x,D=u.z-o.z;if(Math.hypot(L,D)>2.55&&(L*d+D*f>0||Math.hypot(L,D)>5))break;a.next=(a.next+1)%l.length,u=l[a.next]}let{junction:h}=u,x=At(o,h),v=r.get(h.id);!v&&x<9.7&&r.set(h.id,o);let p=a.cruise*(c?1.13:1),m=u.curve&&x<12?Math.min(c?7.1:5.9,p):p,_=v&&v!==o&&x<15;_&&(m=Math.min(m,Math.max(0,x-7.4)*.96));let S=lh(o,t.vehicles,e,m);!a.pass&&!a.maneuver&&!_&&S<m*(c?.88:.78)&&(!u.curve||x>(c?8:11))&&(a.pass=Ld(o,t.vehicles,e,i));let M=a.pass?i_(o,a.pass,t.vehicles,s,e):null;M||(a.pass=null);let E=M??bl(o,u,S);!M&&S<.4&&(E.throttle=0);let A=o.x,g=o.z,b=ch(o,a,u,t.vehicles,e,i,s,E,!_||a.stuck>4.4);a.maneuver&&(a.pass=null),li(o,s,b,i,t.vehicles),a.stuck=Math.hypot(o.x-A,o.z-g)<s*.62?a.stuck+s:0}}function Nd(n,t,e,i){return At(n,e)>13&&Ei(n.x,n.z,n.angle,i,n.kind)&&t.every(s=>At(s,n)>5.2)}var r_=[];function hh(n,t,e,i,s){let r=-1/0,o=1/0,a=-1,l=-1;for(let c=0;c<3;c++){let u=n[c],d=t[c],f=e[c],h=e[c+3];if(Math.abs(d)<1e-5){if(u<f||u>h)return 1/0;continue}let x=1/d,v=(d>0?f-u:h-u)*x,p=(d>0?h-u:f-u)*x;if(v>r&&(r=v,a=c*2+ +(d<0)),p<o&&(o=p,l=c*2+ +(d>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=l,Math.max(0,o))}function o_(n,t,e,i){if(!i)return t[1]<-1e-5&&n[1]>=0?-n[1]/t[1]:1/0;if(t[1]>1e-5)return 1/0;let s=o=>n[1]+t[1]*o-i(n[0]+t[0]*o,n[2]+t[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,e/12);if(r<1e-5)return 1/0;for(let o=0;o<e;o+=r){let a=o,l=Math.min(o+r,e);if(!(s(l)>0)){for(let c=0;c<10;c++){let u=(a+l)*.5;s(u)>0?a=u:l=u}return l}}return 1/0}function Ud(n,t,e,i,s,r){let o=s,a=null,l=null,c=null,u=-1,d=0,f={face:-1};for(let x of e){let v=x.bounds??[x.x-x.w*.5,x.y0??x.base??0,x.z-x.d*.5,x.x+x.w*.5,x.h,x.z+x.d*.5],p=hh(n,t,v,o,f);p>=o||(o=p,l=x,c="solid",u=f.face)}let h=o_(n,t,o,r);h<o&&(o=h,l=null,c="ground",u=3);for(let x of i){let v,p=x.oriented;if(p){let{center:m,half:_,angle:S}=p,M=n[0]-m[0],E=n[1]-m[1],A=n[2]-m[2],g=Math.sin(S),b=Math.cos(S),I=[b*M-g*A,E,g*M+b*A],L=[b*t[0]-g*t[2],t[1],g*t[0]+b*t[2]];v=hh(I,L,[-_[0],-_[1],-_[2],_[0],_[1],_[2]],o,f)}else if(x.bounds)v=hh(n,t,x.bounds,o,f);else continue;v>=o||(o=v,a=x,l=null,c="target",u=f.face,d=p?.angle??0)}return{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}}function Tl(n,t,e,i,s=52){let{distance:r,hit:o}=Ud(n,t,e,i,s,null);return{distance:r,hit:o}}function wl(n,t,e,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}=Ud(n,t,e,i,s,r),f=n.map((x,v)=>x+t[v]*o),h=null;if(u!==-1&&(h=[0,0,0],h[Math.floor(u/2)]=u%2?1:-1,d)){let[x,v,p]=h,m=Math.sin(d),_=Math.cos(d);h=[_*x+m*p,v,-m*x+_*p]}return{distance:o,hit:a,point:f,normal:h,solid:l,surface:c}}function Fd(n,t,e,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...t),l=a>1e-5?t.map(x=>x/a):[0,0,1],c=wl(n,l,i,s,r,{ground:o}),u=c.point.map((x,v)=>x-e[v]),d=u.reduce((x,v,p)=>x+v*l[p],0),f=Math.hypot(...u),h=d>.025&&f>1e-5?u.map(x=>x/f):l;return{direction:h,sight:c,impact:wl(e,h,i,s,r,{ground:o})}}function or(n,t,e){let i=t.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return Tl(n,r,e,r_,s).distance>=s-.01}function Al(n,t,e,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let l=t.x-n.x,c=t.z-n.z,u=Math.hypot(l,c),d=(n.ground??0)+r,f=(t.ground??0)+o;if(Math.hypot(u,f-d)>s)return!1;if(u>1e-5){let h=n.angle??0;if((Math.sin(h)*l+Math.cos(h)*c)/u<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(f-d,u)+(n.pitch??0))>a*.5?!1:or([n.x,d,n.z],[t.x,f,t.z],e)}function Od(n,t,e,i){let s=null,r=1.86;for(let o of t){if(o.down>0)continue;let a=o.x-n.x,l=o.z-n.z,c=Math.hypot(a,l),u=Math.sin(n.angle)*a+Math.cos(n.angle)*l;c>=r||u<c*.36||!or([n.x,e+1,n.z],[o.x,e+1,o.z],i)||(s=o,r=c)}return s}var ar=44,As=12,uh=new X(0,1,0),a_=new X(0,0,1),Qi=new yn,Ci=new Ee,ci=new X,El=new X,Rl=new X,l_=new ne;function c_(){let t=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),l=Math.hypot(r,o),c=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,u=l<.35+Math.sin(a*4)*.06,d=(s*239+i*167)%19/19,f=u?9+d*27:101+d*64,h=u?.99:Math.min(.84,Math.max(0,(c-l)*3.6))*(.51+d*.49),x=(i*32+s)*4;t[x]=f,t[x+1]=f*.92,t[x+2]=f*.81,t[x+3]=Math.round(h*255)}let e=new as(t,32,32,Ln);return e.colorSpace=an,e.magFilter=sn,e.minFilter=sn,e.needsUpdate=!0,e}function Cl(n,t,e,i){let s=new ls(t,e,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(ll),n.add(s),s}function h_(n){let t=new ni(1,1),e=new ki(new Float32Array(ar),1);e.setUsage(ll),t.setAttribute("markAlpha",e);let i=new rn({map:c_(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=Cl(n,t,i,ar);return s.renderOrder=3,{mesh:s,fade:e}}function zd(n){let{mesh:t,fade:e}=h_(n),i=new rn({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=Cl(n,new bi(.015,.015,1,5),i,As),r=new rn({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=Cl(n,new hs(1,0),r,As),a=new rn({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),l=Cl(n,new us(1),a,As),c=Array.from({length:As},()=>({age:1/0,distance:0,point:new X,start:new X,direction:new X,surface:null})),u=Array.from({length:ar},()=>({time:0,life:0,point:new X,normal:new X,attachment:null,radius:0})),d=0,f=0,h=new Ee().makeScale(0,0,0),x=new he(16768142),v=new he(16754545);function p(){for(let S=0;S<As;S++)c[S].age=1/0,s.setMatrixAt(S,h),o.setMatrixAt(S,h),l.setMatrixAt(S,h);for(let S=0;S<ar;S++)u[S].time=0,u[S].attachment=null,t.setMatrixAt(S,h),e.setX(S,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=t.instanceMatrix.needsUpdate=e.needsUpdate=!0,d=f=0}p();function m(S,M,{enemy:E=!1,mark:A=M.surface==="solid"||M.surface==="ground",attach:g=null}={}){let b=c[d],I=d;if(d=(d+1)%As,b.start.fromArray(S),b.point.fromArray(M.point),b.distance=b.start.distanceTo(b.point),b.direction.subVectors(b.point,b.start).normalize(),b.surface=M.surface,b.age=0,s.setColorAt(I,E?v:x),s.instanceColor.needsUpdate=!0,A&&M.normal&&M.surface){let L=u[f];f=(f+1)%ar,L.life=(M.surface==="ground"?8:13)+Math.random()*4,L.time=L.life,L.point.copy(b.point),L.normal.fromArray(M.normal).normalize(),L.attachment=g,L.radius=.053+Math.random()*.031,g&&(g.updateWorldMatrix(!0,!1),g.worldToLocal(L.point),L.normal.transformDirection(Ci.copy(g.matrixWorld).invert()))}}function _(S){let M=!1,E=!1;for(let A=0;A<As;A++){let g=c[A];if(!Number.isFinite(g.age))continue;M=!0,g.age+=S;let b=234,I=Math.min(g.distance,g.age*b+1.7),L=Math.max(0,g.age*b-3.1),D=I-L;if(D>.018){ci.copy(g.start).addScaledVector(g.direction,(I+L)*.5),Qi.setFromUnitVectors(uh,g.direction);let U=Math.min(1,D/1.3);Ci.compose(ci,Qi,El.set(U,D,U)),s.setMatrixAt(A,Ci)}else s.setMatrixAt(A,h);if(g.age<.071){let U=Math.max(.025,.084-g.age*.78);Qi.setFromUnitVectors(uh,g.direction),ci.copy(g.start).addScaledVector(g.direction,.052),Ci.compose(ci,Qi,El.set(U,U*2.2,U)),o.setMatrixAt(A,Ci)}else o.setMatrixAt(A,h);let C=g.age-g.distance/b;if(g.surface&&C>=0&&C<.13){let U=Math.max(.006,.041-C*.27);ci.copy(g.point).addScaledVector(g.direction,-(.039+C*.38)),Qi.setFromUnitVectors(uh,g.direction),Ci.compose(ci,Qi,El.set(U,U*2.14,U)),l.setMatrixAt(A,Ci)}else l.setMatrixAt(A,h);g.age>g.distance/b+.14&&(g.age=1/0)}for(let A=0;A<ar;A++){let g=u[A];if(!(g.time<=0)){if(E=!0,g.time-=S,g.time<=0||g.attachment&&!g.attachment.visible){g.time=0,g.attachment=null,t.setMatrixAt(A,h),e.setX(A,0);continue}ci.copy(g.point),Rl.copy(g.normal),g.attachment&&(g.attachment.updateWorldMatrix(!0,!1),ci.applyMatrix4(g.attachment.matrixWorld),Rl.applyNormalMatrix(l_.getNormalMatrix(g.attachment.matrixWorld))),ci.addScaledVector(Rl,.014),Qi.setFromUnitVectors(a_,Rl),Ci.compose(ci,Qi,El.set(g.radius,g.radius,g.radius)),t.setMatrixAt(A,Ci),e.setX(A,Math.min(1,g.time*.57))}}M&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=!0),E&&(t.instanceMatrix.needsUpdate=e.needsUpdate=!0)}return{emit:m,update:_,reset:p}}var go=.42,lr=.145,Bd=n=>.94*n,dh=n=>n*n*(3-2*n),mo=(n,t,e)=>n+(t-n)*e;function u_(n){return n<.065?-.32*dh(n/.065):n<lr?mo(-.32,1,dh((n-.065)/(lr-.065))):n<.182?mo(1,.89,(n-lr)/(.182-lr)):.89*(1-dh((n-.182)/(go-.182)))}function kd(n,{aim:t=!1,punch:e=0,pitch:i=0}={}){if(!t&&e<=0)return;let[s,r]=n.arms,[o,a]=n.forearms,l=e>0?u_(Se(go-e,0,go)):0,c=Math.max(0,l),u=Math.max(0,-l),d=Se(i,-.64,.53)*.62,f=.068+c*.17-u*.09;n.body.rotation.set(f,.09+c*.35-u*.48,-.019-c*.041),n.body.position.y+=Bd(1-Math.cos(f))-.028,n.body.position.z+=Bd(-Math.sin(f))+c*.07,s.rotation.set(mo(-.79,-1.82+d,c)+u*.88,.1-c*.065,mo(.2,-.047,c)-u*.31),o.rotation.set(mo(-1.16,-.047,c)-u*.31,.04,.11-c*.1),r.rotation.set(-.91-c*.18+d*.28,-.11,-.18-c*.02),a.rotation.set(-1.04+c*.17,-.04,-.075),n.pistol.visible=!1}function Kt(n){return document.getElementById(n)}function Gd(n,t){let e=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Kt("stick"),l=Kt("nub"),c=Kt("look"),u=Kt("game"),d=Kt("view"),f=-1,h=-1,x=[],p=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",m=I=>{p=I,Kt("touch").hidden=I!=="touch",u.classList.toggle("touching",I==="touch")};m(p);let _=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","Escape"]);window.addEventListener("keydown",I=>{if(!(!_.has(I.code)||I.target instanceof HTMLSelectElement&&!t())){if((t()||I.code==="Escape")&&I.preventDefault(),I.code==="Escape"){I.repeat||n();return}t()&&(m("keyboard"),e.add(I.code),I.repeat||(I.code==="KeyE"&&i.add("interact"),I.code==="KeyF"&&i.add("fire"),I.code==="KeyR"&&i.add("punch"),I.code==="KeyG"&&i.add("recruit"),I.code==="KeyV"&&i.add("weapon"),I.code==="Space"&&i.add("jump")))}}),window.addEventListener("keyup",I=>e.delete(I.code));function S(){e.clear(),i.clear(),s.clear(),o.x=0,o.y=0,l.style.transform="",f=-1,h=-1,r.x=0,r.y=0,r.aim=!1,Kt("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",S),d.addEventListener("contextmenu",I=>I.preventDefault()),d.addEventListener("wheel",I=>{!t()||!I.deltaY||(I.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(M),M=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let M=0;d.addEventListener("pointerdown",I=>{t()&&I.pointerType==="touch"&&m("touch")}),window.addEventListener("mousedown",I=>{if(!(!t()||document.pointerLockElement!==d&&(!(I.target instanceof Node)||!d.contains(I.target)))){if(I.button===0&&document.pointerLockElement!==d&&d.requestPointerLock){let L=d.requestPointerLock();L&&L.catch(()=>{})}m("keyboard"),I.button===0&&(i.add("fire"),s.add("mouseFire")),I.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",I=>{I.button===0&&s.delete("mouseFire"),I.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",I=>{!t()||p!=="keyboard"||I.pointerType==="touch"||(document.pointerLockElement===d||I.target===d||d.contains(I.target))&&(r.x+=I.movementX,r.y+=I.movementY)});function E(I){let L=a.getBoundingClientRect(),D=I.clientX-L.left-L.width/2,C=I.clientY-L.top-L.height/2,U=L.width*.37,R=Math.max(U,Math.hypot(D,C));o.x=D/R,o.y=C/R,l.style.transform="translate("+o.x*U+"px,"+o.y*U+"px)"}a.addEventListener("pointerdown",I=>{f===-1&&(m("touch"),f=I.pointerId,a.setPointerCapture(I.pointerId),E(I))}),a.addEventListener("pointermove",I=>{I.pointerId===f&&E(I)}),a.addEventListener("lostpointercapture",I=>{I.pointerId===f&&(f=-1,o.x=0,o.y=0,l.style.transform="")});let A=0,g=0;c.addEventListener("pointerdown",I=>{h===-1&&(h=I.pointerId,A=I.clientX,g=I.clientY,c.setPointerCapture(I.pointerId))}),c.addEventListener("pointermove",I=>{I.pointerId===h&&(r.x+=(I.clientX-A)*1.45,r.y+=(I.clientY-g)*1.45,A=I.clientX,g=I.clientY)}),c.addEventListener("lostpointercapture",I=>{I.pointerId===h&&(h=-1)});for(let I of["interact","fire","aim","sprint","punch","jump","weapon","recruit"]){let L=Kt(I);L.addEventListener("pointerdown",D=>{D.preventDefault(),m("touch"),L.setPointerCapture(D.pointerId),I==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),L.setAttribute("aria-pressed",String(s.has("aim")))):I==="sprint"||I==="fire"?(s.add(I),I==="fire"&&i.add(I)):i.add(I)}),(I==="sprint"||I==="fire")&&L.addEventListener("lostpointercapture",()=>s.delete(I))}let b=!1;return{clear:S,read(I,L){b!==I&&(s.delete("aim"),Kt("aim").setAttribute("aria-pressed","false"),b=I);let D=Array.from(navigator.getGamepads?.()??[]).find(tt=>tt?.connected&&tt.mapping==="standard"),C=D?.buttons.map(tt=>tt.pressed||tt.value>.45)??[],U=tt=>C[tt]&&!x[tt],R=Array.from({length:4},(tt,st)=>pd(D?.axes[st]));(C.some(Boolean)||R.some(tt=>Math.abs(tt)>.1))&&m("pad"),(U(9)||!t()&&U(0))&&n();let B=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),W=Number(e.has("KeyW")||e.has("ArrowUp"))-Number(e.has("KeyS")||e.has("ArrowDown")),it=(D?.buttons[7]?.value??0)-(D?.buttons[6]?.value??0),$={x:Se(B+o.x+R[0],-1,1),y:Se(W-o.y+(I&&Math.abs(it)>.05?it:-R[1]),-1,1),lookX:Se(r.x,-140,140)*.0032+R[2]*L*2.45,lookY:Se(r.y,-140,140)*.0028+R[3]*L*1.8,aim:!I&&(r.aim||e.has("KeyQ")||s.has("aim")||!!C[6]),run:s.has("sprint")||e.has("ShiftLeft")||e.has("ShiftRight")||!!C[0],brake:e.has("Space")||s.has("sprint")||!!C[2],interact:i.has("interact")||U(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!I&&!!C[7],punch:i.has("punch")||U(1),recruit:i.has("recruit")||U(12),weapon:i.has("weapon")||U(15),jump:i.has("jump")||U(2),confirm:U(0),mode:p};return x=C,r.x=0,r.y=0,i.clear(),$}}}function Vd(){let n,t,e,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,t=n.createGain(),t.gain.value=.46,t.connect(n.destination),e=n.createOscillator(),e.type="triangle",i=n.createGain(),i.gain.value=0,e.connect(i).connect(t),e.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(a,l,c,u,d="sine",f=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+f,x=n.createOscillator(),v=n.createGain();x.type=d,x.frequency.setValueAtTime(a,h),x.frequency.exponentialRampToValueAtTime(l,h+c),v.gain.setValueAtTime(u,h),v.gain.exponentialRampToValueAtTime(.001,h+c),x.connect(v).connect(t),x.start(h),x.stop(h+c)}return{start:r,get enabled(){return s},toggle(){return s=!s,t&&(t.gain.value=s?.46:0),r(),s},motor(a,l){n&&(e.frequency.setTargetAtTime(34+Math.abs(a)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(a){o(a?109:187,a?39:73,a?.125:.084,a?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function fh(n){return n>1.53?54:n>.92?32:n>.63?24:15}function ph(n){return Math.round(Se(Math.max(0,n-2.4)**2*.24,0,86))}function Il(n){return n>=36?3:n>=20?2:n>0?1:0}function Hd(n){let i=62.474999999999994,s=Array.from({length:2500},(u,d)=>({x:d%50*2.55-i,z:Math.floor(d/50)*2.55-i})),r=s.map(u=>Sn(u.x,u.z,.38,n)),o=s.map((u,d)=>r[d]?[d>=50?d-50:-1,d<2450?d+50:-1,d%50?d-1:-1,d%50<49?d+1:-1].filter(h=>h>=0&&r[h]&&Sn((u.x+s[h].x)*.5,(u.z+s[h].z)*.5,.38,n)):[]),a=(u,d)=>{let f=Math.max(1,Math.ceil(At(u,d)/.42));for(let h=1;h<=f;h++){let x=h/f;if(!Sn(u.x+(d.x-u.x)*x,u.z+(d.z-u.z)*x,.31,n))return!1}return!0},l=u=>{let d=-1,f=1/0;for(let h=0;h<s.length;h++)if(r[h]){let x=s[h].x-u.x,v=s[h].z-u.z,p=x*x+v*v;p<f&&a(u,s[h])&&(d=h,f=p)}return d},c=(u,d)=>{let f=l(u),h=l(d);if(f<0||h<0||f===h)return[];let x=new Int32Array(s.length).fill(-1),v=[f];x[f]=f;for(let p=0;p<v.length;p++){let m=v[p];if(m===h){let _=[];for(let S=h;S!==f;S=x[S])_.push(s[S]);return _.reverse()}for(let _ of o[m])x[_]===-1&&(x[_]=m,v.push(_))}return[]};return(u,d,f,h)=>{u.repath=(u.repath??0)-h;let x=d.x-u.x,v=d.z-u.z,p=Math.hypot(x,v);if(p<.16)return 0;let m=p<7&&a(u,d);for(!m&&u.repath<=0&&(u.route=c(u,d),u.repath=1.25);u.route?.length&&(At(u,u.route[0])<.7||u.route.length>1&&At(u,u.route[1])<4&&a(u,u.route[1]));)u.route.shift();let _=m?d:u.route?.[0]??d,S=Math.atan2(_.x-u.x,_.z-u.z),M=Math.min(f*h,At(u,_));u.angle=ai(u.angle,S,h*8.5);let E=lo(u,u.x+Math.sin(S)*M,u.z+Math.cos(S)*M,.24,n);return E||(u.repath=Math.min(u.repath,.18)),E?f:0}}var Pl=n=>oi.reduce((t,e)=>Math.abs(n-e)<Math.abs(n-t)?e:t,oi[0]);function Wd(n,t,e,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let v=t.z<o.z;n.stop={x:v?20.9:17.2,z:o.z+(v?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&At(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&At(o,n.stop)<2.6){let v=Pl(o.x),p=Pl(o.z),m=Pl(t.x),_=Pl(t.z);Math.abs(o.x-v)>3&&Math.abs(o.z-p)>3?n.stop={x:v,z:o.z}:Math.abs(o.x-v)>2.4&&Math.abs(o.z-p)<2.4?n.stop={x:m,z:p}:Math.abs(o.z-p)>2.4?n.stop={x:v,z:_}:m!==v?n.stop={x:v+Math.sign(m-v)*38,z:p}:_!==p?n.stop={x:v,z:p+Math.sign(_-p)*38}:n.stop={x:m,z:t.z}}let a=At(o,t),l=n.departing?6:14,c=Math.min(l,a*.85,Math.max(3,At(o,n.stop)*1.85)),u=lh(o,i,s,c),d=!n.departing&&u<2.5?Pd(o,i,s,e):null,f=bl(o,d??n.stop,d?4.4:u),h=ch(o,n,n.stop,i,s,e,r,f),x=o.impact>3||Math.abs(o.speed)<1;n.stall=x&&!n.maneuver?n.stall+r:0,li(o,r,h,e,i)}var Xd="gtbase:progress:1";function qd(n){try{let t=JSON.parse((n??globalThis.localStorage).getItem(Xd));return!t||t.version!==1||!Number.isFinite(t.cash)||!Number.isFinite(t.ammo)||!Number.isFinite(t.health)?null:{x:wn.x+2.5,z:wn.z-2.73,cash:Se(Math.floor(t.cash),0,999999),armed:t.armed===!0,equipped:t.equipped===!0,ammo:Se(Math.floor(t.ammo),0,360),health:Se(Math.floor(t.health),1,100),recruits:Array.isArray(t.recruits)?[...new Set(t.recruits.filter(e=>Number.isInteger(e)&&e>=0||typeof e=="string"&&/^[\w:-]{1,80}$/.test(e)))]:[]}}catch{return null}}function Yd(n,t){try{return(t??globalThis.localStorage).setItem(Xd,JSON.stringify({...n,version:1})),!0}catch{return!1}}var xo=Kt("view"),d_=Kt("menu"),ur=Kt("play"),cr=Kt("quality"),ji=Kt("shop"),hr=Kt("buy"),mh=180,Zd=260,Ll=36;function Dl(n,t){try{return t!==void 0&&localStorage.setItem("gtbase:"+n,t),localStorage.getItem("gtbase:"+n)}catch{return null}}function f_(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,t=new dl({antialias:!n,alpha:!1,powerPreference:"high-performance"});t.toneMapping=Zr,t.toneMappingExposure=1.17,t.shadowMap.type=ds,xo.append(t.domElement);let e=new Dr,i=new fn(57,1,.12,370),s=Id(e),r=s.vehicleSolids,o=Hd(s.vehicleSolids),a=zd(e),l=y=>y.floorY??s.floorAt(y.x,y.z,0),c=y=>s.walkSolids(y.x,y.z,l(y)),u=()=>[...s.solid,...s.closedDoorSolids()],d=y=>{y.floorY=s.floorAt(y.x,y.z,l(y))},f=y=>l(y)>1.25?[]:b,h={...ao,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,model:Ss(e,2386265,3553348,12220240,!0)},x=[{x:15.75,z:-1.8,angle:Math.PI,color:11422e3},{x:-22.8,z:4,angle:0,color:4362871},{x:36,z:15.3,angle:Math.PI/2,color:13084242},{x:53.3,z:-36,angle:0,color:5795484}],v=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033},{x:22.85,z:28,angle:0,color:4678008}],p=[...x.map(({color:y})=>fo(e,y)),...v.map(({color:y})=>oh(e,y))],m=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((y,N)=>{let O=N===3||N===7?oh(e,y):fo(e,y);return O.routeIndex=N,O.kind==="bike"&&(O.rider=Ss(e,7429204,3751493,10711635),O.rider.root.visible=!1),O}),_=[...p,...m],S=new Map,M=Array.from({length:15},(y,N)=>{let O=Yn[N%3],rt=Yn[Math.floor(N/3)%3],H=[{x:O+12,z:rt-12},{x:O+12,z:rt+12},{x:O-12,z:rt+12},{x:O-12,z:rt-12}],k=N%4,mt=H[k],bt=H[(k+1)%4],Vt=(N%3+1)/4,Jt={x:mt.x+(bt.x-mt.x)*Vt,z:mt.z+(bt.z-mt.z)*Vt,next:(k+1)%4},ae=[11626316,14333537,7242655,8810644,13024669];return $({...Jt,id:"street:"+N},"civilian",Ss(e,ae[N%5],N%2?5199188:5522251,[12684900,8737330,15052936][N%3]),H)}),E=s.buildings.filter(y=>y.clerk).map((y,N)=>$({...y.clerk,next:0,id:"clerk:"+y.id,buildingId:y.id},"clerk",Ss(e,N%2?4615014:7691090,4802374,12817263),[])),A=s.buildings.filter(y=>y.clerk),g=Array.from({length:3},(y,N)=>{let O=bn.z-6.1+N*4.25,rt={x:-1.85,z:bn.z+[-.23,-4.4,3.94][N],next:0,id:"officer:"+N,buildingId:"station"},H=$(rt,"police",Ss(e,3558501,2503491,12157017),[]),k={x:8.2,z:O,angle:Math.PI/2},mt=fo(e,3626613,!0);return{officer:H,berth:k,car:mt,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null}}),b=[..._,...g.map(y=>y.car)],I=new Map,L=Array.from({length:m.length+2},(y,N)=>{let O=$({x:0,z:0,next:0,id:"driver:"+N},"civilian",Ss(e,8549210,4342337,[11765348,8475704][N%2]),[]);return O.seated=!0,O.model.root.visible=!1,O}),D=[...M,...E,...g.map(y=>y.officer),...L],C=D,U=new Map(D.map(y=>[y.id,y])),R=new cs(1,14),z=new rn({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),B=new vn(.27,.115,.38),W={cash:new gn({color:7838308}),ammo:new gn({color:14395738}),weapon:new gn({color:4805464})},it=[];function $(y,N,O,rt){return{home:y,baseRole:N,role:N,model:O,path:rt,...y,pace:1.15+Math.abs(y.z)%4*.11,angle:y.angle??0,floorY:y.y??0,scheduleClock:9+Math.abs(y.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0}}function tt(y){y.drop&&(e.remove(y.drop),y.drop=null),Object.assign(y,y.home,{role:y.baseRole,health:100,fear:0,down:0,angle:y.home.angle??0,floorY:y.home.y??0,scheduleClock:9+Math.abs(y.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0}),y.model.root.rotation.set(0,y.angle,0),y.model.shadow.visible=!0,y.model.root.visible=!0,d(y),y.model.root.position.set(y.x,l(y),y.z)}let st=Vd();Dl("sound")==="off"&&st.toggle();let Pt=new X,Rt=new X,et=new X,wt=new X,Nt=new X,Xt=new X,yt=new X,jt=new X,Fe=new X,Zt=!1,ge=!1,ct=null,$t=!1,vt=0,ot=null,Et=0,Wt=0,te=0,le=0,Ie=0,Le=0,ce=0,G=.23,Xe=0,de=0,ue=0,Mt=0,Te=!0,Ot="keyboard",zt=Zd,P=!1,w=!1,Y=0,pt=!1,lt=0,xt=0,_t=null,Z=null,q=null,nt=null,F=27,at=0,J=null,ft=0,ut=[],dt=qd(),It=()=>{ur.textContent=dt?"Continuar do save":"Jogar agora"},qt=0,ht=0,Ft=0,re=0,Ct=!1,ve=0,Ve=!1,kn="",hi=0,Jn=1,dr=0,Es=0,ke=Kt("map").getContext("2d"),Dn=document.createElement("canvas");Dn.width=Dn.height=256;let Tn=Dn.getContext("2d"),An=y=>128+y*1.92;Tn.fillStyle="#1d3433",Tn.fillRect(0,0,256,256),Tn.fillStyle="#46605b";for(let y of oi)Tn.fillRect(An(y)-10,0,20,256),Tn.fillRect(0,An(y)-10,256,20);Tn.fillStyle="#345048";for(let y of s.vehicleSolids)Tn.fillRect(An(y.x-y.w/2),An(y.z-y.d/2),y.w*1.92,y.d*1.92);Tn.fillStyle="#6a7859",Tn.fillRect(An(-10),An(28),38,38);function Ii(){let y=cr.value==="high",N=cr.value==="low";t.setPixelRatio(Math.min(devicePixelRatio,y?2:N?1:n?1.45:1.8)*(N?.85:Jn)),t.setSize(xo.clientWidth,xo.clientHeight),t.shadowMap.enabled=!N&&(y||Jn>.76),s.sun.shadow.needsUpdate=!0,i.aspect=xo.clientWidth/Math.max(1,xo.clientHeight),i.updateProjectionMatrix()}function ts(){Kt("sound").textContent=st.enabled?"Som ligado":"Som desligado",Kt("sound").setAttribute("aria-pressed",String(st.enabled))}function ui(y){ji.open&&di(),Zt=y,d_.hidden=y,Kt("hud").hidden=!y,Mo.clear(),y?(st.start(),ge||(ce=.32,G=.22),ge=!0,Te=!0,Xe=performance.now(),Kt("pause").focus({preventScroll:!0}),Kt("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),st.motor(0,!1),Kt("help").removeAttribute("open"),Kt("title").innerHTML="GT<span>BASE</span>",Kt("intro").textContent="Jogo pausado em Vila Brasa.",ur.textContent="Continuar",Kt("reset").hidden=!1,ur.focus())}function fr(){ct=null,_t=null,nt=null,q=null,Z=null,ut.length=0,F=27,zt=Zd,P=!1,w=!1,Y=0,pt=!1,Et=te=Le=le=Ie=hi=0,vt=0,$t=!1,ot=null,a.reset(),s.resetDoors(),qt=ht=Ft=lt=xt=0,Ct=!1,ve=0,Ve=!1,ce=.32,G=.22,Mt=0,Object.assign(h,ao,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),d(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,bs(h.model,0,0,!1,!1),p.forEach((N,O)=>{_s(N,[...x,...v][O]),N.stolen=!1,N.body.rotation.z=0,$i(N,0)}),S.clear(),m.forEach((N,O)=>{po(N,O),$i(N,0)});for(let N of g)_s(N.car,N.berth),Object.assign(N,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),$i(N.car,0);for(let N of D)tt(N);for(let N of L)N.seated=!0,N.model.root.visible=!1;for(let N of it)e.remove(N.mesh);it.length=0,Ul(g[0]);let y=A.find(N=>N.kind==="armory")?.entry??sr;s.marker.position.set(y.x,.02,y.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,ue=0}function we(y){kn=y,hi=2.4}function Nl(){Kt("shop-detail").textContent=P?"Reponha a muni\xE7\xE3o at\xE9 "+Ll+" balas, sem custo.":"Uma pistola e "+Ll+" balas por R$ "+mh+".",Kt("shop-balance").textContent="Saldo: R$ "+zt+" \xB7 Balas: "+Y,hr.textContent=P?"Repor muni\xE7\xE3o":"Comprar pistola",hr.disabled=P?Y>=Ll:zt<mh}function _o(){Mo.clear(),document.pointerLockElement&&document.exitPointerLock(),Nl(),ji.showModal(),hr.disabled?Kt("close-shop").focus():hr.focus()}function di(){ji.close(),Mo.clear(),ue=0}function yo(){!ji.open||hr.disabled||(P?we("Muni\xE7\xE3o reposta."):(P=!0,w=!0,zt-=mh,we("Pistola comprada.")),Y=Ll,st.bell(),di())}function pr(y){let N={...y,ground:b.includes(y)?y.root.position.y:l(y),angle:y.angle},O=u();return g.some(rt=>{let{officer:H,car:k,mode:mt}=rt;return H.health<=0?!1:H.seated&&["driving","patrol","returning"].includes(mt)?Al({...k,ground:k.root.position.y},N,O,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Al({...H,ground:l(H)},N,O,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function es(y,N=ct??h,O=pr(N)){if(!O)return!1;let rt=Il(Et);return Et=Math.min(64,Math.max(Et+(Et>0?y*.52:0),y)),$t=!0,vt=.24,ot={x:N.x,z:N.z,y:l(N),health:100,seated:!1,angle:N.angle},rt||we("Crime visto pela pol\xEDcia."),!0}let mr=()=>!ct&&l(h)<1&&A.some(y=>y.kind==="armory"&&s.interiorAt(h.x,h.z,l(h))?.buildingId===y.id&&At(h,y.clerk)<3),T=()=>!ct&&At(h,{x:wn.x,z:wn.z+6.25})<1.7,V=()=>b,j=y=>y&&y.health>0&&!y.seated,K=({x:y,z:N})=>y>-10.72&&y<-3.5&&Math.abs(N-bn.z)<9.68,Q=y=>y.kind==="bike"?"Moto":"Cup\xEA",Tt=()=>!ct&&s.doors.find(y=>y.private&&!y.breached&&!y.opened&&Math.abs(y.base-l(h))<.85&&At(y,h)<1.62);function Bt(){if(l(h)>1.02)return null;let y=null,N=3;for(let O of _){let rt=At(h,O);rt>=N||O.integrity<=0||Math.abs(O.speed)>3.4||(y=O,N=rt)}return y}function St(y=!1){if(!ct)return;let{angle:N,x:O,z:rt}=ct;if(!y&&Math.hypot(ct.vx,ct.vz)>4.2){we("Reduza a velocidade para sair.");return}let H=ct.kind==="bike"?1.02:1.64,k=[H,-H,H+.53,-H-.53].map(bt=>[O+Math.cos(N)*bt,rt-Math.sin(N)*bt]);k.push([O-Math.sin(N)*2.75,rt-Math.cos(N)*2.75],[O+Math.sin(N)*2.77,rt+Math.cos(N)*2.77]);let mt=k.find(([bt,Vt])=>Ji({x:bt,z:Vt},bt,Vt,s.walkSolids(bt,Vt,0),b,C,.36));if(!mt&&!y){we("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=mt??[ao.x,ao.z],h.floorY=0,d(h),h.angle=N,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),ct.abandoned=0,ct=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,N,0),bs(h.model,0,0,!1,w)}function Lt(){St(!0),Object.assign(h,{x:wn.x,z:wn.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),d(h),lt=0,Et=0,xt=0,ce=-Math.PI/2,Te=!0,we("Voc\xEA voltou para casa.")}function Yt(){if(_t||h.health<=0)return;if(ct){St();return}if(mr()){_o();return}if(T()){let N={health:h.health,cash:zt,armed:P,equipped:w,ammo:Y,recruits:ut.map(O=>O.id)};we(Yd(N)?"Progresso salvo na porta de casa.":"O navegador bloqueou o salvamento."),st.bell();return}let y=Bt();if(!y){we(Tt()?"Porta trancada.":"Nada para interagir aqui.");return}if(y.driver){let N=L.find(O=>O.seated)??L.find(O=>O.exitAge>14&&O.role==="civilian"&&At(O,h)>11);if(N){let O=y.angle-Math.PI/2,rt=y.x+Math.sin(O)*(y.kind==="bike"?.95:1.51),H=y.z+Math.cos(O)*(y.kind==="bike"?.95:1.51),k=Ji({x:rt,z:H},rt,H,s.walkSolids(rt,H,0),b,C,.29)?{x:rt,z:H}:{x:h.x,z:h.z};tt(N),Object.assign(N,k,{angle:O,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),y.rider&&(y.rider.root.visible=!1)}y.driver=null,y.vx=y.vz=y.speed=0,y.doorTime=.65,_t={car:y,delay:.46},we(y.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else ie(y)}function ie(y){ct=y,y.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),lt=0,h.model.root.visible=y.kind==="bike",y.stolen||(y.stolen=!0,es(13)),ce=y.angle,Mt=0,Te=!0}function pe(y,N,O){let rt=new Ce(B,W[y]),H=l(N)+.13;rt.position.set(N.x+.22,H,N.z+.19),e.add(rt),it.push({mesh:rt,kind:y,count:O,y:H,wait:.32,left:105})}function kt(y){for(let N=it.length-1;N>=0;N--){let O=it[N];O.left-=y,O.wait-=y,O.mesh.rotation.y+=y*2.1,O.mesh.position.y=O.y+Math.sin(O.left*3.8)*.08;let rt=!ct&&h.health>0&&O.wait<0&&Math.abs(l(h)-O.y)<.65&&Math.hypot(h.x-O.mesh.position.x,h.z-O.mesh.position.z)<1.03;rt&&(O.kind==="cash"?(zt+=O.count,we("R$ "+O.count+" recolhidos.")):!P&&O.kind==="weapon"?(P=w=!0,Y+=O.count,we("Pistola recolhida.")):(Y=Math.min(360,Y+O.count),we("+"+O.count+" balas.")),st.bell()),(rt||O.left<=0)&&(e.remove(O.mesh),it.splice(N,1))}}function oe(y,N){if(y.health<=0||N<=0)return;if(y.health=Math.max(0,y.health-N),y===h){Ft=.22,y.health<=0&&(St(!0),xt=3,we("Voc\xEA caiu. Voltando para casa\u2026"));return}if(y.stagger=.32,y.fear=6,y.surrender=0,q?.npc===y&&(q=null),y.health>0)return;Z===y&&(Z=null),y.down=y.role==="police"?28:19,y.model.shadow.visible=!1;let O=new Ce(R,z);O.position.set(y.x,l(y)+.019,y.z),O.rotation.x=-Math.PI/2,O.scale.set(.52,.32,1),e.add(O),y.drop=O,y.role==="police"?pe(P?"ammo":"weapon",y,12):y.role!=="ally"&&!y.robbed&&pe("cash",y,24+Math.floor(Math.abs(y.z)%27)),nt===y&&(nt=null,F=29);let rt=ut.indexOf(y);rt>=0&&ut.splice(rt,1)}function ze(y){return[...C,h].filter(O=>O!==y&&j(O)&&!(O===h&&ct&&ct.kind==="car")).map(O=>{let rt=l(O)+(O===h?h.lift:0);return{actor:O,y:rt,bounds:[O.x-.31,rt+.1,O.z-.31,O.x+.31,rt+1.9,O.z+.31]}})}function Pe(){i.getWorldDirection(Xt);let y=ze(h),N=u(),O=Tl(i.position.toArray(),Xt.toArray(),N,y,28).hit,rt=[h.x,l(h)+1.38+h.lift,h.z];if(O&&At(h,O.actor)<24&&or(rt,[O.actor.x,O.y+1.25,O.actor.z],N))return O.actor;let H=.15,k=null;for(let{actor:mt,y:bt}of y){if(At(h,mt)>18)continue;wt.set(mt.x,bt+1.25,mt.z).project(i);let Vt=Math.hypot(wt.x,wt.y);wt.z>=1||Vt>=H||!or(rt,[mt.x,bt+1.25,mt.z],N)||(H=Vt,k=mt)}return k}function Me(y){y&&y.role!=="ally"&&y.health>0&&(Z=y)}function je(y,N){let O=u(),rt={...y,ground:l(y)};for(let H of g){let k=H.officer;j(k)&&(k===N||Al({...k,ground:l(k)},rt,O,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(H.retaliation=y)}}function Gt(y){if(!y||!["civilian","resident"].includes(y.role)||y.health<=0){we("Mire em um pedestre dispon\xEDvel para recrutar.");return}y.role="ally",y.surrender=0,y.fear=0,y.route=[],ut.push(y),q?.npc===y&&(q=null),we("Guarda-costas recrutado."),st.bell()}function on(y,N){if(h.health<=0||!N||!["civilian","resident","clerk"].includes(N.role)||N.robbed||At(h,N)>9||Math.abs(l(h)-l(N))>.65){q&&(q.npc.surrender=0,q=null);return}let O=h.x-N.x,rt=h.z-N.z,H=Math.sin(N.angle)*O+Math.cos(N.angle)*rt;if(q?.npc!==N){if(q&&(q.npc.surrender=0),q=null,H<Math.hypot(O,rt)*.3||N.stagger>0||N.fear>0)return;q={npc:N,left:5}}N.surrender=1,N.angle=Math.atan2(O,rt),q.left-=y,q.left<=0&&(N.robbed=!0,N.surrender=0,N.fear=7,pe("cash",N,(N.role==="clerk"?104:38)+Math.floor(Math.abs(N.z)%31)),es(15),we(N.role==="clerk"?"Dinheiro da loja no ch\xE3o.":"Dinheiro no ch\xE3o."),q=null)}function be(){qt>0||h.health<=0||h.trip>.15||_t||(h.angle=ce,qt=go,Ct=!0,ve=lr,Me(J),st.punch(!1))}function fi(){if(Ct=!1,h.health<=0||ct)return;let y=Od(h,C.filter(H=>j(H)&&H.role!=="ally"&&Math.abs(l(h)-l(H))<.73),l(h)+h.lift,u());if(!y)return;Me(y),st.punch(!0);let N=y.x-h.x,O=y.z-h.z,rt=Math.max(.2,Math.hypot(N,O));y.pushX=N/rt*3.6,y.pushZ=O/rt*3.6,oe(y,18),ht=.19,es(y.role==="police"?28:12),we(y.health<=0?"Pedestre derrubado.":"Soco acertou.")}function tn(y){if(qt>0||te>0||h.health<=0||!P||!w)return;if(Y<=0){y&&Me(J),te=.32,we("Sem balas. Reponha na loja.");return}let N=pr(h);Y--,te=.28,Le=.095,h.angle=ce,h.model.root.rotation.y=ce,bs(h.model,0,0,!0,!0,0,y?G:G-.22),h.model.muzzle.getWorldPosition(Nt),st.shot();let O=ze(h),rt=b.map(gt=>{let Ye=gt.kind==="bike"?.31:.96,He=gt.kind==="bike"?1.08:1.84,Ge=gt.root.position.y;return{car:gt,oriented:{center:[gt.x,Ge+(gt.kind==="bike"?.67:.56),gt.z],half:[Ye,gt.kind==="bike"?.44:.4,He],angle:gt.angle}}});i.getWorldDirection(Xt);let H=b.filter(gt=>gt.rider&&gt.driver).map(gt=>({rider:gt,oriented:{center:[gt.x,gt.root.position.y+1.42,gt.z],half:[.32,.45,.33],angle:gt.angle}})),k=b.filter(gt=>gt.cabin).map(gt=>({windowCar:gt,oriented:{center:[gt.x-.26*Math.sin(gt.angle),gt.root.position.y+1.21,gt.z-.26*Math.cos(gt.angle)],half:[.8,.25,.82],angle:gt.angle}})),mt=u(),bt=[...O,...H,...k,...rt],Vt=Nt.toArray(),Jt=Fd(i.position.toArray(),Xt.toArray(),Vt,mt,bt,{ground:Zn}),ae=Jt.impact,Ht=ae.hit,Qt=s.doors.find(gt=>gt.private&&!gt.breached&&ae.solid===gt.closedSolid&&Math.hypot(ae.point[0]-gt.handle.x,ae.point[1]-gt.handle.y,ae.point[2]-gt.handle.z)<.28),Ut=17;if(Qt&&s.breachDoor(Qt.id))Ut=23,we("Fechadura rompida.");else if(Ht?.actor&&Ht.actor.role!=="ally")Me(Ht.actor),oe(Ht.actor,fh(ae.point[1]-Ht.y)),Ut=Ht.actor.role==="police"?34:23,ht=.21,we(Ht.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(Ht?.rider||Ht?.windowCar){let gt=Ht.rider??Ht.windowCar,Ye=g.find(_n=>_n.car===gt&&(_n.mode==="driving"||_n.mode==="patrol"));gt.cabin&&(gt.cabin.visible=!1);let He=Ye?.officer??(gt.driver?L.find(_n=>_n.seated):null),Ge={oriented:{center:[gt.x-.42*Math.cos(gt.angle),gt.root.position.y+1.2,gt.z+.42*Math.sin(gt.angle)],half:[.26,.28,.29],angle:gt.angle}};if(He&&(Ht.rider||Tl(Vt,Jt.direction,[],[Ge],52).hit)){Ye||tt(He);let _n=gt.angle-Math.PI/2;Object.assign(He,{seated:!1,x:gt.x+Math.sin(_n)*1.55,z:gt.z+Math.cos(_n)*1.55,fear:6,exitAge:0}),He.model.root.visible=!0,gt.driver=null,gt.vx=gt.vz=gt.speed=0,gt.rider&&(gt.rider.root.visible=!1),Ye&&(Ye.mode="foot"),oe(He,Ht.rider?50:100),ht=.21}}else Ht?.car?(Ht.car.integrity=Math.max(0,Ht.car.integrity-5),ht=.16):y&&Me(J);es(Ut,h,N);for(let gt of C)["civilian","resident"].includes(gt.role)&&At(gt,h)<17&&(gt.fear=Math.max(gt.fear,4.8));a.emit(Vt,ae,{mark:Ht?.car?!0:void 0,attach:Ht?.car?.root})}function Rs(y,N){let O=ct;li(O,y,{throttle:N.y,steer:-N.x,brake:N.brake},r,V()),Mt>1.15&&Math.abs(O.speed)>2.4&&(ce=ai(ce,O.angle,y*2.3))}function Kn(y,N){let O=Math.min(1,Math.hypot(N.x,N.y)),rt=h.health>0&&!_t&&h.trip<.12,H=rt?O*(N.aim?2.1:N.run?7.4:4.2):0,k=ce+Math.atan2(-N.x,N.y||0);N.jump&&rt&&h.lift===0&&(lt=4.18),(lt!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+lt*y-11.8*y*y),lt=h.lift>0?lt-23.6*y:0);let mt=1-Math.exp(-y*(H>.02?19:27));h.vx+=(Math.sin(k)*H-h.vx)*mt,h.vz+=(Math.cos(k)*H-h.vz)*mt;let bt=xl(h,(h.vx+h.pushX)*y,(h.vz+h.pushZ)*y,c(h),f(h),C);h.pushX*=Math.exp(-y*6.2),h.pushZ*=Math.exp(-y*6.2),h.trip=Math.max(0,h.trip-y),qt<=0&&rt&&(N.aim||O>.05)&&(h.angle=ai(h.angle,N.aim?ce:k,y*11));let Vt=h.model;d(h),Vt.root.position.set(h.x,l(h)+h.lift,h.z),Vt.root.rotation.set(h.health<=0?1.53:Math.min(1.25,h.trip*2.7),h.angle,0),Vt.shadow.visible=h.health>0&&h.lift<.06,bs(Vt,y,h.trip>.05?0:Math.min(7.5,bt/y),w&&(N.aim||Le>0)&&qt<=0,w&&qt<=0,0,N.aim?G:0),(qt>0||N.aim&&!w)&&kd(Vt,{aim:N.aim,punch:qt,pitch:G}),bt&&Ie<=0&&h.lift===0&&(st.step(),Ie=N.run?.27:.41)}function $n(y){let N=Math.sin(y.angle),O=Math.cos(y.angle);return[{x:y.x-O*1.66,z:y.z+N*1.66},{x:y.x+O*1.66,z:y.z-N*1.66}].find(rt=>Ji(rt,rt.x,rt.z,s.walkSolids(rt.x,rt.z,0),b,C,.38))}function ye(y,N,O){let rt=Math.sin(N.angle),H=Math.cos(N.angle);if(!O)return null;if(![.28,.5,.73,.92].some(Vt=>{let Jt=y.x+(O.x-y.x)*Vt,ae=y.z+(O.z-y.z)*Vt,Ht=Jt-N.x,Qt=ae-N.z;return Math.abs(Ht*rt+Qt*H)<2.47&&Math.abs(Ht*H-Qt*rt)<1.33}))return O;let mt=(y.x-N.x)*rt+(y.z-N.z)*H>0?2.9:-2.9,bt=(O.x-N.x)*H-(O.z-N.z)*rt;return{x:N.x+rt*mt+H*bt,z:N.z+H*mt-rt*bt}}function Ke(y){let N=y.officer,O=y.car,rt=Math.sin(O.angle),H=Math.cos(O.angle),k=$n(O)??[{x:O.x-rt*2.83,z:O.z-H*2.83},{x:O.x+rt*2.87,z:O.z+H*2.87}].find(mt=>Ji(mt,mt.x,mt.z,s.walkSolids(mt.x,mt.z,0),b,C,.37));return k?(N.seated=!1,N.model.root.visible=!0,N.x=k.x,N.z=k.z,N.floorY=0,d(N),N.angle=O.angle,N.exitAnim=.38,N.model.shadow.visible=!0,O.doorTime=.65,y.mode="foot",!0):!1}function En(y,N){let O=b.includes(N)?N:null;if(At(y,N)>18||At(y,N)<.5||(O?O.integrity<=0:!j(N)))return!1;let rt=l(y),H=(O?O.root.position.y:l(N))+(N===h?h.lift:0)+(O?1.08:1.27),k=u();if(!or([y.x,rt+1.35,y.z],[N.x,H,N.z],k))return!1;y.angle=Math.atan2(N.x-y.x,N.z-y.z),y.model.root.position.set(y.x,rt,y.z),y.model.root.rotation.y=y.angle;let mt=Math.atan2(rt+1.42-H,Math.max(.4,At(y,N)));bs(y.model,0,0,!0,!0,0,mt),y.model.muzzle.getWorldPosition(yt);let bt=de*14+y.x,Vt=Math.sin(bt)*(y.role==="ally"?.35:.48),Jt=N.x+Math.cos(y.angle)*Vt,ae=N.z-Math.sin(y.angle)*Vt;jt.set(Jt,H+Math.cos(bt*1.4)*.32,ae);let Ht=Math.min(24,yt.distanceTo(jt)+1.65),Qt=Fe.subVectors(jt,yt).normalize(),Ut=ze(y);O&&Ut.push({actor:O,y:0,bounds:[N.x-.93,.3,N.z-1.02,N.x+.93,1.52,N.z+1.02]});let gt=wl(yt.toArray(),Qt.toArray(),k,Ut,Ht,{ground:Zn});if(y.role==="ally"&&(N.role==="police"||gt.hit?.actor.role==="police")&&je(y,gt.hit?.actor),gt.hit&&(gt.hit.actor===N||gt.hit.actor.role==="civilian")){let Ye=y.role==="police"&&N===h?.62:.83;O&&gt.hit.actor===O?(O.integrity=Math.max(0,O.integrity-5),O.kind==="bike"&&oe(h,12)):oe(gt.hit.actor,Math.round(fh(yt.y+Qt.y*gt.distance-gt.hit.y)*Ye))}return jt.copy(yt).addScaledVector(Qt,gt.distance),y.role!=="ally"&&(N===h||N===ct||yd(yt,jt,ct??h))&&Me(y),a.emit(yt.toArray(),gt,{enemy:!0}),y.attack=(y.role==="police"?.91:1.07)+(Math.sin(bt)+1)*.18,At(y,ct??h)<31&&st.shot(),!0}function De(y,N,O){let rt=At(y,N);return y.stagger>0||y.exitAnim>0?{speed:0,aim:!1}:rt<17&&y.attack<=0&&En(y,N)||y.attack>.28&&rt<15.5?(y.angle=ai(y.angle,Math.atan2(N.x-y.x,N.z-y.z),O*12),{speed:0,aim:!0}):{speed:rt>3.3||Math.abs(l(y)-l(N))>1.8?gh(y,N,4.4,O):0,aim:rt<12}}function qe(y,N){if(F-=N,nt){F<=0&&(nt.role="civilian",nt.fear=4,nt=null,F=37);return}if(F>0)return;let O=M.find(rt=>rt.role==="civilian"&&j(rt)&&At(rt,y)>14&&At(rt,bn)<55);if(!O){F=8;return}O.role="rogue",nt=O,F=63,O.attack=.1}function Nn(y,N){return y.x<-5.2?{x:-4.65,z:y.z}:y.x<-3.63&&Math.abs(y.z-bn.z)>.46?{x:-4.65,z:bn.z}:y.x<-2.64?{x:-2.38,z:bn.z}:N}function vo(y){return y.home}function Ul(y,N=!0){let{car:O,officer:rt}=y;if(N)po(O,3),O.x-=Math.sin(O.angle)*6.5,O.z-=Math.cos(O.angle)*6.5;else{let H={};po(H,3),O.driver=H.driver;let k=Math.sin(O.angle),mt=Math.cos(O.angle),bt=1/0;O.driver.route.forEach((Vt,Jt)=>{let ae=Vt.x-O.x,Ht=Vt.z-O.z,Qt=Math.hypot(ae,Ht)+(ae*k+Ht*mt<0?16:0);Qt<bt&&(bt=Qt,O.driver.next=Jt)})}y.mode="patrol",y.retaliation=null,y.stop=null,rt.seated=!0,rt.model.root.visible=!1,$i(O,0)}function Jd(y,N){vt-=y,vt<=0&&Et>0&&($t=pr(N),$t&&(ot={x:N.x,z:N.z,y:l(N),health:100,seated:!1,angle:N.angle}),vt=.24);let O=Et>0&&h.health>0?$t?N:ot:nt,rt=O===nt?nt?1:0:Il(Et);Et>0&&(Et=Math.max(0,Et-y*($t?.23:1.1)),Et===0&&(ot=null,$t=!1,we("Voc\xEA despistou a pol\xEDcia."))),g.forEach((H,k)=>{let mt=H.officer,bt=H.car;H.retaliation&&!j(H.retaliation)&&(H.retaliation=null);let Vt=H.retaliation,Jt=Vt??O,ae=!!(Vt||O&&k<rt);if(mt.health<=0){H.mode="disabled",bt.driver=null,mt.down<=0&&At(mt,N)>13&&b.every(Ut=>Ut===bt||At(Ut,H.berth)>3.5)&&(tt(mt),_s(bt,H.berth),$i(bt,0),H.mode="ready",H.retaliation=null);return}if(H.mode==="patrol"&&(ae||bt.integrity<=0)&&(H.mode="driving",bt.driver=null,H.stop=null,H.stall=0,H.departing=!1),H.mode==="patrol")return;Vt&&(H.mode==="ready"||H.mode==="boarding")&&(H.mode="foot");let Ht=g.slice(0,k).some(Ut=>Ut.mode==="boarding"&&Ut.officer.x<-3.12);if(H.mode==="ready"&&ae&&!Ht&&(H.mode="boarding",H.stop=null,H.stall=0,H.departing=!0),H.mode==="boarding")if(!ae)H.mode="foot";else{let Ut=$n(bt);Ut&&At(mt,Ut)<.63?(mt.seated=!0,mt.model.root.visible=!1,H.mode="driving",bt.doorTime=.6):Ut&&(H.intent=Pi(mt,Nn(mt,ye(mt,bt,Ut)),3.75,y))}if(H.mode==="driving"){if(!ae&&k===0&&bt.integrity>0&&!H.departing){Ul(H,!1);return}let Ut=Jt?At(bt,Jt):1/0;!ae||bt.integrity<=0||H.stall>8.2&&!H.maneuver||Ut<12.7&&!(Jt===ct&&Math.abs(ct.speed)>6)?(li(bt,y,{throttle:0,steer:0,brake:!0},r,b),Math.hypot(bt.vx,bt.vz)<2.7&&!Ke(H)&&bt.integrity>0&&li(bt,y,{throttle:.21,steer:.26,brake:!1},r,b)):Wd(H,Jt,r,b,C,y)}else if(H.mode==="foot"){let Ut=K(mt)||mt.x>-3.62&&mt.x<-2.64&&Math.abs(mt.z-bn.z)<1.2;ae&&Ut&&!K(Jt)?H.intent=Pi(mt,Nn(mt,Jt),4.5,y):ae&&Jt===ot?H.intent=Pi(mt,Jt,3.45,y):ae?H.combat=De(mt,Jt,y):At(mt,mt.home)>.72?H.intent=Pi(mt,vo(mt),3.15,y):At(N,bt)>12&&At(N,H.berth)>9&&b.every(gt=>gt===bt||At(gt,H.berth)>3.5)&&(_s(bt,H.berth),$i(bt,0),H.mode="ready")}else H.mode==="ready"&&k===0&&!O&&At(N,H.berth)>19&&Ul(H);let Qt=H.mode==="driving"||ae&&H.mode==="foot";bt.lamps.forEach((Ut,gt)=>{Ut.visible=!Qt||Math.floor(de*8+gt)%2===0}),Qt&&Wt<=0&&At(N,bt)<42&&(st.siren(),Wt=1.35)})}function Kd(y,N){let O={player:ct,vehicles:V()},rt=g.filter(H=>H.mode==="patrol").map(H=>H.car);Dd([...m,...rt],O,C,r,y,S);for(let H of p)H!==ct&&Math.hypot(H.vx,H.vz)>.06?li(H,y,{throttle:0,steer:0,brake:!0},r,O.vehicles):H!==ct&&(H.impact=Math.max(0,H.impact-y*21));for(let H of b){if(H.routeIndex>=0&&H!==ct){H.abandoned+=y;let k=!H.driver&&H.abandoned>25,mt=H.integrity<=0||(H.driver?.stuck??0)>13;if((k||mt)&&At(N,H)>17){let bt={};po(bt,H.routeIndex),bt.kind=H.kind,Nd(bt,O.vehicles.filter(Vt=>Vt!==H),N,r)&&Object.assign(H,bt)}}H!==ct&&H.impact>5&&At(N,H)<18&&le<=0&&(st.crash(),le=.32),$i(H,y,H.steer),H.rider&&(H.rider.root.visible=!!H.driver&&H.integrity>0,H.rider.root.visible&&rh(H.rider,H))}if(ct){if(ct.impact>4.1&&le<=0){st.crash(),Ft=.24,le=.36;let H=ct,k=H.impact;we(H.integrity<43?"Motor avariado.":"Colis\xE3o."),k>9&&oe(h,Math.min(58,Math.round(k*(H.kind==="bike"?2.45:1.05)))),ct&&H.kind==="bike"&&k>10.5&&(H.integrity=Math.max(0,H.integrity-8),St(!0),we("Voc\xEA caiu da moto."))}if(ct&&ct.integrity<=0&&Math.hypot(ct.vx,ct.vz)<3){let H=Q(ct);St(!0),we(H+" sem condi\xE7\xF5es de rodar.")}}}function Pi(y,N,O,rt){if(!N)return 0;let H=c(y),k=At(y,N);if(k<.13)return 0;let mt=s.interiorAt(y.x,y.z,l(y)),bt=s.interiorAt(N.x,N.z,N.y??l(N));if(!mt&&!bt&&k>5.9)return o(y,N,O,rt);let Vt=N,Jt=(Qt,Ut)=>[.24,.46,.68,.88,1].every(gt=>Sn(Qt.x+(Ut.x-Qt.x)*gt,Qt.z+(Ut.z-Qt.z)*gt,.29,H));if(!Jt(y,N)){let Qt=1/0;for(let Ut of H)if(!(At(y,Ut)>Math.hypot(Ut.w,Ut.d)*.5+3.1))for(let gt of[-1,1])for(let Ye of[-1,1]){let He={x:Ut.x+gt*(Ut.w*.5+.44),z:Ut.z+Ye*(Ut.d*.5+.44)},Ge=At(y,He),_n=At(He,N);if(Ge<.3||Ge>4.5||!Jt(y,He))continue;let gr=Ge+_n+(_n>k+.25?1.7:0);gr<Qt&&(Qt=gr,Vt=He)}}let ae=Math.atan2(Vt.x-y.x,Vt.z-y.z);y.angle=ai(y.angle,ae,rt*8.5);let Ht=Math.min(O*rt,At(y,Vt));return lo(y,y.x+Math.sin(ae)*Ht,y.z+Math.cos(ae)*Ht,.26,H)?O:0}function $d(y,N){let O=l(y);if(s.interiorAt(y.x,y.z,O))return{x:y.x,z:y.z,y:O};let rt=Math.floor((Math.sqrt(1+N)-1)*.75),H=(N%2===0?1:-1)*(1.05+N%5*.66),k=3.1+rt*1.1,mt=Math.sin(y.angle),bt=Math.cos(y.angle);return{x:y.x-mt*k+bt*H,z:y.z-bt*k-mt*H,y:O}}function gh(y,N,O,rt){let H=s.interiorAt(y.x,y.z,l(y)),k=s.interiorAt(N.x,N.z,N.y??l(N));if(H?.buildingId===k?.buildingId&&Math.abs((H?.floor??0)-(k?.floor??0))<1.1)return y.pursuitRoute=[],y.pursuitKey="",Pi(y,N,O,rt);let mt=(k?.buildingId??"street")+":"+(k?.floor??0);if(y.pursuitKey!==mt){y.pursuitKey=mt;let bt=[],Vt=s.buildings.find(Qt=>Qt.id===H?.buildingId),Jt=s.buildings.find(Qt=>Qt.id===k?.buildingId),ae=Vt?.units.find(Qt=>Math.abs(Qt.floor-H.floor)<.25),Ht=Jt?.units.find(Qt=>Math.abs(Qt.floor-k.floor)<.25);Vt&&bt.push(ae?.inside,ae?.entry,ae?.outside,...[...ae?.stairs??[]].reverse(),Vt.inside,Vt.entry,Vt.outside),Jt&&bt.push(Jt.outside,Jt.entry,Jt.inside,...Ht?.stairs??[],Ht?.outside,Ht?.entry,Ht?.inside),y.pursuitRoute=bt.filter(Boolean)}for(;y.pursuitRoute.length&&At(y,y.pursuitRoute[0])<.66&&Math.abs(l(y)-(y.pursuitRoute[0].y??0))<.85;)y.pursuitRoute.shift();return Pi(y,y.pursuitRoute[0]??N,O,rt)}function Qd(y,N,O){let rt=y.itinerary[0];return rt?At(y,rt)<.58&&Math.abs(l(y)-(rt.y??0))<1.1?(y.itinerary.shift(),0):Pi(y,rt,N,O):0}function xh(y,N,O=!1){C=D.filter(k=>At(k,N)<(k.role==="civilian"?69:47)||k.role==="ally"||k.role==="police"||k===nt||k===Z);let rt=new Set(C);for(let k of D)k.model.root.visible=rt.has(k)&&!k.seated;let H=new Map(C.map(k=>[k,{x:k.x,z:k.z}]));O||(qe(N,y),Jd(y,N));for(let k of C){if(k.seated)continue;if(k.attack-=y,k.stagger=Math.max(0,k.stagger-y),k.injuryCooldown-=y,k.exitAnim=Math.max(0,k.exitAnim-y),k.exitAge+=y,k.health<=0){if(k.down=Math.max(0,k.down-y),k.model.root.rotation.x+=(Math.PI/2-k.model.root.rotation.x)*Math.min(1,y*8),k.model.root.position.y=l(k)+.19,k.drop){let Ht=Math.min(.63,.32+(19-k.down)*.09);k.drop.rotation.z=k.angle,k.drop.scale.set(Math.max(.38,Ht),Math.max(.24,Ht*.68),1)}k.role!=="police"&&k.down<=0&&At(k.home,N)>7&&At(k,N)>7&&(tt(k),L.includes(k)&&(k.seated=!0,k.model.root.visible=!1));continue}let mt=0,bt=!1,Vt=g.find(Ht=>Ht.officer===k);if(Vt)mt=Vt.combat?.speed??Vt.intent??0,bt=!!Vt.combat?.aim,Vt.intent=0,Vt.combat=null;else if(k.role==="ally")if(Z&&j(Z))({speed:mt,aim:bt}=De(k,Z,y));else{let Ht=$d(N,ut.indexOf(k));(At(Ht,k)>1.25||Math.abs(l(k)-Ht.y)>1.75)&&(mt=gh(k,Ht,ct?6.1:4.45,y))}else if(k.role==="rogue"){let Ht=M.filter(Ut=>Ut!==k&&Ut.role==="civilian"&&j(Ut)).sort((Ut,gt)=>At(k,Ut)-At(k,gt))[0],Qt=g.map(Ut=>Ut.officer).find(Ut=>j(Ut)&&At(Ut,k)<15);(Qt||Ht)&&({speed:mt,aim:bt}=De(k,Qt??Ht,y))}else if(k.surrender<=0){let Ht=k.path[k.next];if(k.role==="civilian"&&!k.itinerary.length&&k.fear<=0&&A.length&&(k.scheduleClock-=y,k.scheduleClock<=0)){let Qt=A[Math.floor(Math.abs(k.home.x*11+k.home.z*4+de))%A.length];At(k,Qt.outside)<38&&(k.itinerary=[Qt.outside,Qt.entry,Qt.inside,Qt.entry,Qt.outside]),k.scheduleClock=36+Math.abs(k.home.x)%25}if(k.fear=Math.max(0,k.fear-y),k.fear>0&&At(k,N)<15){let Qt=Math.atan2(k.x-N.x,k.z-N.z);for(let Ut of[0,.84,-.84,1.52,-1.52]){let gt=Qt+Ut;if(lo(k,k.x+Math.sin(gt)*3.7*y,k.z+Math.cos(gt)*3.7*y,.22,c(k))){k.angle=ai(k.angle,gt,y*8),mt=3.7;break}}}else k.itinerary.length?mt=Qd(k,k.pace,y):Ht&&(At(k,Ht)<.54&&(k.next=(k.next+1)%k.path.length,Ht=k.path[k.next]),mt=Pi(k,Ht,k.pace,y))}let Jt=H.get(k);if(Jt&&k.exitAnim<=0){let Ht=k.x-Jt.x+k.pushX*y,Qt=k.z-Jt.z+k.pushZ*y;k.x=Jt.x,k.z=Jt.z;let Ut=Vt?.mode==="boarding"?b.filter(Ye=>Ye!==Vt.car):b,gt=xl(k,Ht,Qt,c(k),l(k)>1.25?[]:Ut,[...C,...ct?[]:[h]],.29);if(mt>0&&gt<mt*y*.35){let Ye=k.detourSide??1,He=mt*y;xl(k,Ye*Math.cos(k.angle)*He,-Ye*Math.sin(k.angle)*He,c(k),Ut,[...C,...ct?[]:[h]],.29)<He*.25&&(k.detourSide=-Ye),k.repath=0}mt>0&&(mt=Math.min(mt,gt/y))}if(k.pushX*=Math.exp(-y*7.6),k.pushZ*=Math.exp(-y*7.6),!O&&k.injuryCooldown<=0){let Ht=_h(k,2.8);if(Ht){let{car:Qt,speed:Ut,vx:gt,vz:Ye}=Ht,He=ph(Ut);k.pushX=Se(gt,-8,8)*.59,k.pushZ=Se(Ye,-8,8)*.59,He>0&&(k.injuryCooldown=1.18,oe(k,He),Qt===ct&&He>12&&es(19))}}let ae=k.model;k.health<=0||(d(k),ae.root.position.set(k.x,l(k)+k.exitAnim*.35,k.z),ae.root.rotation.set(k.exitAnim*.7,k.angle,k.exitAnim*k.exitSide*.89+(k.stagger>0?Math.sin(k.stagger*9)*.21:0)),bs(ae,y,k.exitAnim>0?2.9:mt,bt,["police","rogue","ally"].includes(k.role),0,0,k.surrender>0))}if(!O&&!ct&&l(h)<1.15&&h.health>0&&h.lift<.3&&re<=0){let k=_h(h,2.35);if(k){let{speed:mt,vx:bt,vz:Vt}=k,Jt=ph(mt);h.pushX=Se(bt,-13,13)*.73,h.pushZ=Se(Vt,-13,13)*.73,h.trip=mt>=5.3?Math.min(.82,.35+mt*.021):.12,h.vx=h.vz=0,Jt>0&&(oe(h,Jt),st.crash(),we("Voc\xEA foi atropelado.")),re=.87}}}function _h(y,N){for(let O of b){if(l(y)>1.2||At(O,y)>5)continue;let rt=I.get(O),H=rt&&At(rt,O)<3?rt:null,k=H?Math.hypot(H.vx,H.vz):0,mt=Math.hypot(O.vx,O.vz),bt=Math.max(mt,k);if(!(bt<N||!_d(O,H,y)))return{car:O,speed:bt,vx:k>mt?H.vx:O.vx,vz:k>mt?H.vz:O.vz}}return null}function jd(y,N){s.updateDoors(y,[N,...C.filter(O=>j(O))])}function tf(y,N,O){let rt=l(N),H=ct?null:s.interiorAt(N.x,N.z,rt),k=!!H;Ve!==k&&(Ve=k,Te=!0);let mt=i.aspect<.85,Vt=k?O?2.25:3.4:ct?ct.kind==="bike"?8.2:mt?12:10.2:O?4.45:mt?7.9:6.5,Jt=ct?1.95+ct.root.position.y:1.38+rt+h.lift*.46,ae=ct?0:O?.61:.22,Ht=O?.1+G*.19:Math.max(k?.28:.1,G);Rt.set(N.x+Math.cos(ce)*ae,Jt,N.z-Math.sin(ce)*ae),et.set(Rt.x-Math.sin(ce)*Vt*Math.cos(Ht),Jt+Math.sin(Ht)*Vt,Rt.z-Math.cos(ce)*Vt*Math.cos(Ht));function Qt(Ge){H&&(Ge.x=Se(Ge.x,H.x-H.w*.5+.3,H.x+H.w*.5-.3),Ge.z=Se(Ge.z,H.z-H.d*.5+.3,H.z+H.d*.5-.3),Ge.y=Se(Ge.y,H.floor+.55,H.ceiling-.42))}Qt(et);let Ut=c(N).filter(Ge=>Ge.h>rt+1.45);for(let Ge=.11;Ge<=1;Ge+=.067){let _n=no.lerp(Rt.x,et.x,Ge),gr=no.lerp(Rt.z,et.z,Ge);if(!Sn(_n,gr,.2,Ut)||b.some(Ol=>Ol!==ct&&At(Ol,{x:_n,z:gr})<2.1&&Rt.y<Ol.root.position.y+2)){et.lerp(Rt,1-Math.max(.06,Ge-.105)),et.y=Math.max(et.y,rt+1.95);break}}Qt(et);let gt=O?14:1,Ye=pt?G:G-.22,He=O?Jt-Math.tan(Ye)*gt:Jt-.07;Pt.set(Rt.x+Math.sin(ce)*gt,He,Rt.z+Math.cos(ce)*gt),Te?(i.position.copy(et),Te=!1):i.position.lerp(et,1-Math.exp(-y*14)),Sn(i.position.x,i.position.z,.21,Ut)||i.position.copy(et),Qt(i.position),i.lookAt(Pt),i.updateMatrixWorld()}function ns(y,N,O){ke.fillStyle=N,ke.beginPath(),ke.arc(An(y.x),An(y.z),O,0,Math.PI*2),ke.fill()}function ef(y,N){let O=Il(Et),rt=Math.round(At(y,wn));Kt("detail").textContent="Casa "+rt+" m \xB7 Loja "+Math.round(At(y,sr))+" m",Kt("cash").textContent="R$ "+zt.toLocaleString("pt-BR"),Kt("crew").textContent="Gangue "+ut.length;let H=Kt("prompt"),k=Ot==="pad"?"Y \xB7 ":Ot==="keyboard"?"E \xB7 ":"",mt=mr(),bt=T(),Vt=Tt(),Jt=ct??Bt(),ae=q&&N&&hi<=0;H.hidden=!(Jt||mt||bt||Vt||hi>0||ae);let Ht=ct?"Sair "+(ct.kind==="bike"?"da moto":"do carro"):bt?"Salvar na porta de casa":mt?"Abrir loja de armas":Vt?"Porta trancada":Jt?"Pegar "+(Jt.kind==="bike"?"a moto":"o cup\xEA"):"";H.textContent=hi>0?kn:ae?"Mantenha a mira \xB7 "+Math.ceil(q.left)+" s":k+Ht,Kt("heat").hidden=!O,Kt("heat").textContent="\u2605".repeat(O)+" PROCURADO",Kt("mode").textContent=ct?Q(ct)+" \xB7 "+Math.round(ct.integrity)+"%":w?"Pistola":"Vila Brasa",Kt("reading").textContent=ct?Math.round(Math.hypot(ct.vx,ct.vz)*3.6)+" km/h":w?Y+" balas":"Punhos";let Qt=Kt("health");Qt.value=h.health,Qt.title="Vida: "+Math.ceil(h.health)+"%",Kt("crosshair").hidden=!(N||w&&ft>0&&!ct),Kt("interact").textContent=ct?"Sair":bt?"Salvar":mt?"Loja":"Entrar",Kt("sprint").textContent=ct?"Freio":"Correr",Kt("aim").hidden=!!ct,Kt("fire").hidden=!!ct||!w,Kt("weapon").hidden=!!ct||!P,Kt("weapon").textContent=w?"Punhos":"Pistola",Kt("jump").hidden=Kt("punch").hidden=!!ct,Kt("recruit").hidden=!!ct||!N,Kt("hud").classList.toggle("armed",!ct),Kt("hud").classList.toggle("driving",!!ct),ke.drawImage(Dn,0,0);for(let Ut of _)Ut!==ct&&Ut.integrity>0&&ns(Ut,Ut.driver?"#82b9b3":"#eab987",Ut.kind==="bike"?2.2:Ut.driver?2.6:3.5);ns(sr,"#eaff89",6),ns(wn,"#dcc39b",5),ns(bn,"#99c6ff",5);for(let Ut of A)Ut.kind!=="armory"&&ns(Ut.entry,"#dbae80",2.5);for(let Ut of g)["driving","patrol","foot"].includes(Ut.mode)&&ns(Ut.officer.seated?Ut.car:Ut.officer,Ut.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let Ut of ut)ns(Ut,"#97ebaf",3.5);ke.save(),ke.translate(An(y.x),An(y.z)),ke.rotate(-(ct?ct.angle:h.angle)),ke.fillStyle="#fff9e6",ke.strokeStyle="#243938",ke.lineWidth=2.7,ke.beginPath(),ke.moveTo(0,10),ke.lineTo(-6,-6),ke.lineTo(0,-3),ke.lineTo(6,-6),ke.closePath(),ke.stroke(),ke.fill(),ke.restore()}function nf(y){let N=(y-Xe)/1e3,O=Se(N,1/240,.05);Xe=y,de+=O;let rt=Mo.read(!!ct,O);if(ji.open){rt.punch||rt.interact?di():rt.confirm&&yo(),t.render(e,i);return}if(ge){if(Zt){Ot=rt.mode;for(let Jt of b)I.set(Jt,{x:Jt.x,z:Jt.z,vx:Jt.vx,vz:Jt.vz});rt.weapon&&P&&!ct&&(w=!w,J=null,ft=0);let H=rt.aim&&!ct&&qt<=0&&h.health>0;if(H!==pt&&(G=H?.015:.22,pt=H),Mt=Math.abs(rt.lookX)+Math.abs(rt.lookY)>.003?0:Mt+O,ce-=rt.lookX,G=Se(G+rt.lookY,H?-1.03:-.31,.84),ct&&Mt>1.2&&(G+=(.24-G)*O),le-=O,te-=O,Ie-=O,re-=O,Wt-=O,hi-=O,Le-=O,a.update(O),qt=Math.max(0,qt-O),Ct&&(ve-=O,ve<=0&&fi()),ht-=O,Ft-=O,ft-=O,at-=O,xt>0&&(xt-=O,xt<=0&&Lt()),_t&&(_t.delay-=O,_t.delay<=0)){let Jt=_t.car;_t=null,h.health>0&&Jt.integrity>0&&At(h,Jt)<3.75&&ie(Jt)}if(rt.interact&&Yt(),ji.open)return;jd(O,ct??h),ct?Rs(O,rt):Kn(O,{...rt,aim:H}),Kd(O,ct??h),ct&&(h.x=ct.x,h.z=ct.z),ct?.kind==="bike"&&rh(h.model,ct),xh(O,ct??h),kt(O),st.motor(ct?.speed??0,!!ct);let mt=ct??h,bt=H&&!ct&&h.health>0;rt.fire&&w&&!ct&&h.health>0&&Y>0&&(ft=1.38),tf(O,mt,bt||!ct&&ft>0),bt&&(at<=0||rt.recruit||rt.punch||rt.fire&&te<=0)?(J=Pe(),at=.092):bt||(J=null),rt.recruit&&!ct&&Gt(J),on(O,bt&&w?J:null),(rt.punch||rt.fire&&!w)&&!ct&&be(),rt.fire&&!ct&&tn(bt),Kt("hitmark").hidden=ht<=0,Kt("impact").hidden=Ft<=0,s.marker.visible=At(mt,sr)>2.8&&At(mt,sr)<13,s.beacon.rotation.y=de*2,s.beacon.position.y=2.55+Math.sin(de*4)*.27,ue-=O,ue<=0&&(ef(mt,bt),ue=.1)}}else{let H=.54+Math.sin(de*.13)*.19,k=i.aspect<1?26:30;i.position.set(24+Math.sin(H)*k,14,17+Math.cos(H)*k),i.lookAt(10,2,13),xh(O,h,!0)}t.render(e,i),Zt&&cr.value==="auto"&&N>0&&N<.22&&Jn>.7&&(Es+=N,++dr>=85&&(Es/dr>.026&&(Jn=Math.max(.69,Jn-.16),Ii()),dr=0,Es=0))}let Mo=Gd(()=>{ji.open?di():Zt?ui(!1):yh()},()=>Zt),Fl=Dl("quality");(Fl==="low"||Fl==="high")&&(cr.value=Fl),cr.addEventListener("change",()=>{Dl("quality",cr.value),Jn=1,Ii()}),Kt("sound").addEventListener("click",()=>{Dl("sound",st.toggle()?"on":"off"),ts()}),Kt("pause").addEventListener("click",()=>ui(!1)),Kt("reset").addEventListener("click",()=>{fr(),ui(!0)}),hr.addEventListener("click",yo),Kt("close-shop").addEventListener("click",di),ji.addEventListener("cancel",y=>{y.preventDefault(),di()});function yh(){if(!ge&&dt){Object.assign(h,{x:dt.x,z:dt.z,health:dt.health,floorY:0}),d(h),zt=dt.cash,P=dt.armed,w=P&&dt.equipped,Y=P?dt.ammo:0;for(let y of new Set(dt.recruits)){let N=typeof y=="number"?M[y]:U.get(y);N&&(N.role="ally",N.seated=!1,N.model.root.visible=!0,ut.push(N))}ui(!0),ce=-Math.PI/2}else ui(!0)}ur.addEventListener("click",yh),document.addEventListener("visibilitychange",()=>{document.hidden&&Zt&&ui(!1)}),window.addEventListener("resize",Ii),t.domElement.addEventListener("webglcontextrestored",Ii),fr(),ts(),Ii(),It(),ur.disabled=!1,Xe=performance.now(),t.setAnimationLoop(nf)}try{f_()}catch(n){console.error(n),ur.textContent="3D indispon\xEDvel",Kt("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
