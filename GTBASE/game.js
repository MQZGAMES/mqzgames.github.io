(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var lu=0,vc=1,cu=2;var ys=1,hu=2,er=3,Qi=0,un=1,gn=2,vs=0,nr=1,Mc=2,Sc=3,bc=4,uu=5;var Ms=100,du=101,fu=102,pu=103,mu=104,gu=200,xu=201,_u=202,yu=203,wc=204,Tc=205,vu=206,Mu=207,Su=208,bu=209,wu=210,Tu=211,Au=212,Eu=213,Cu=214,jo=0,ta=1,ea=2,Zs=3,na=4,ia=5,sa=6,ra=7,Ac=0,Ru=1,Iu=2,ii=0,Ec=1,Cc=2,Rc=3,Qr=4,Ic=5,Pc=6,Lc=7;var Dc=300,Ss=301,ir=302,Ra=303,Ia=304,oa=1e3,ti=1001,aa=1002,an=1003,Pu=1004;var jr=1005;var ln=1006,Pa=1007;var Ai=1008;var Sn=1009,Nc=1010,Uc=1011,sr=1012,La=1013,Zn=1014,Fn=1015,Jn=1016,Da=1017,Na=1018,bs=1020,Fc=35902,Oc=35899,zc=1021,Bc=1022,In=1023,Si=1026,Ei=1027,Ua=1028,Fa=1029,ji=1030,Oa=1031;var za=1033,to=33776,eo=33777,no=33778,io=33779,Ba=35840,ka=35841,Ga=35842,Va=35843,Ha=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,so=37490,Za=37491,Ja=37808,Ka=37809,$a=37810,Qa=37811,ja=37812,tl=37813,el=37814,nl=37815,il=37816,sl=37817,rl=37818,ol=37819,al=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,ro=36285,pl=36286;var Pr=2300,la=2301,$o=2302,fc=2303,pc=2400,mc=2401,gc=2402;var Lu=3200;var ml=0,Du=1,Ci="",$e="srgb",Lr="srgb-linear",Dr="linear",Ie="srgb";var Qo=7680;var Nu=519,Uu=512,Fu=513,Ou=514,kc=515,zu=516,Bu=517,Gc=518,Vc=519,ku=35044,gl=35048;var Hc="300 es",Ln=2e3,Js=2001;function Lf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Df(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gu(){let n=Nr("canvas");return n.style.display="block",n}var Fh={},Ks=null;function Wc(...n){let t="THREE."+n.shift();Ks?Ks("log",t,...n):console.log(t,...n)}function Vu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=Vu(n);let t="THREE."+n.shift();if(Ks)Ks("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=Vu(n);let t="THREE."+n.shift();if(Ks)Ks("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Cr(...n){let t=n.join(" ");t in Fh||(Fh[t]=!0,$t(...n))}function Hu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Wu={[jo]:jo,[ea]:sa,[na]:na,[Zs]:ia,[ta]:ta,[sa]:ea,[ra]:ra,[ia]:Zs},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,Rr=Math.PI/180,$s=180/Math.PI;function rr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function xe(n,t,e){return Math.max(t,Math.min(e,n))}function Xc(n,t){return(n%t+t)%t}function Nf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Uf(n,t,e){return n!==t?(e-n)/(t-n):0}function Ir(n,t,e){return(1-e)*n+e*t}function Ff(n,t,e,i){return Ir(n,t,1-Math.exp(-e*i))}function Of(n,t=1){return t-Math.abs(Xc(n,t*2)-t)}function zf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Bf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function kf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Gf(n,t){return n+Math.random()*(t-n)}function Vf(n){return n*(.5-Math.random())}function Hf(n){n!==void 0&&(Oh=n);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wf(n){return n*Rr}function Xf(n){return n*$s}function qf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Yf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),h=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*h,a*u,a*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xu(n,t){if(t.constructor===Float32Array)return n;let e=Yc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function qu(n,t){if(t.constructor===Float32Array)return n;let e=Yc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var or={DEG2RAD:Rr,RAD2DEG:$s,generateUUID:rr,clamp:xe,euclideanModulo:Xc,mapLinear:Nf,inverseLerp:Uf,lerp:Ir,damp:Ff,pingpong:Of,smoothstep:zf,smootherstep:Bf,randInt:kf,randFloat:Gf,randFloatSpread:Vf,seededRandom:Hf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:qc,setQuaternionFromProperEuler:Zf,normalize:qu,denormalize:Xu},oe=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+d*M;m<0&&(f=-f,h=-h,_=-_,M=-M,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),T=Math.sin(y);g=Math.sin(g*y)/T,a=Math.sin(a*y)/T,l=l*g+f*a,c=c*g+h*a,u=u*g+_*a,d=d*g+M*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+_*a,d=d*g+M*a;let y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],_=r[o+3];return t[e]=a*_+u*d+l*h-c*f,t[e+1]=l*_+u*f+c*d-a*h,t[e+2]=c*_+u*h+a*f-l*d,t[e+3]=u*_-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yl=new W,zh=new Qe,ee=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],M=s[0],m=s[3],g=s[6],y=s[1],T=s[4],S=s[7],R=s[2],b=s[5],p=s[8];return r[0]=o*M+a*y+l*R,r[3]=o*m+a*T+l*b,r[6]=o*g+a*S+l*p,r[1]=c*M+u*y+d*R,r[4]=c*m+u*T+d*b,r[7]=c*g+u*S+d*p,r[2]=f*M+h*y+_*R,r[5]=f*m+h*T+_*b,r[8]=f*g+h*S+_*p,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,_=e*d+i*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*c-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=h*M,t[7]=(i*l-c*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zl.makeScale(t,e)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zl.makeRotation(-t)),this}translate(t,e){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zl=new ee,Bh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){let n={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ie&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ie&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lr]:{primaries:t,whitePoint:i,transfer:Dr,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:Ie,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}var ge=Jf();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ds,ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ds===void 0&&(Ds=Nr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mi(e[i]/255)*255):e[i]=Mi(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kf=0,Qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jl(s[o].image)):r.push(Jl(s[o]))}else r=Jl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ca.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var $f=0,Kl=new W,yn=class n extends ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ti,s=ti,r=ln,o=Ai,a=In,l=Sn,c=n.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=rr(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kl).x}get height(){return this.source.getSize(Kl).y}get depth(){return this.source.getSize(Kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Dc;yn.DEFAULT_ANISOTROPY=1;var ke=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],M=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,S=(h+1)/2,R=(g+1)/2,b=(u+f)/4,p=(d+M)/4,v=(_+m)/4;return T>S&&T>R?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=b/i,r=p/i):S>R?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=b/s,r=v/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=p/r,s=v/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-M)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ha=class extends ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new yn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends ha{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ur=class extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ua=class extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var be=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,M,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,M,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=_,g[11]=M,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,h=o*d,_=a*u,M=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+_*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=_+h*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,h=l*d,_=c*u,M=c*d;e[0]=f+M*a,e[4]=_*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-_,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,h=l*d,_=c*u,M=c*d;e[0]=f-M*a,e[4]=-o*d,e[8]=_+h*a,e[1]=h+_*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,h=o*d,_=a*u,M=a*d;e[0]=l*u,e[4]=_*c-h,e[8]=f*c+M,e[1]=l*d,e[5]=M*c+f,e[9]=h*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,h=o*c,_=a*l,M=a*c;e[0]=l*u,e[4]=M-f*d,e[8]=_*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+_,e[10]=f-M*d}else if(t.order==="XZY"){let f=o*l,h=o*c,_=a*l,M=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+M,e[5]=o*u,e[9]=h*d-_,e[2]=_*d-h,e[6]=a*u,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,jf)}lookAt(t,e,i){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),zi.crossVectors(i,An),zi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),zi.crossVectors(i,An)),zi.normalize(),Io.crossVectors(An,zi),s[0]=zi.x,s[4]=Io.x,s[8]=An.x,s[1]=zi.y,s[5]=Io.y,s[9]=An.y,s[2]=zi.z,s[6]=Io.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],M=i[6],m=i[10],g=i[14],y=i[3],T=i[7],S=i[11],R=i[15],b=s[0],p=s[4],v=s[8],A=s[12],I=s[1],P=s[5],G=s[9],F=s[13],L=s[2],B=s[6],q=s[10],H=s[14],Q=s[3],k=s[7],Y=s[11],et=s[15];return r[0]=o*b+a*I+l*L+c*Q,r[4]=o*p+a*P+l*B+c*k,r[8]=o*v+a*G+l*q+c*Y,r[12]=o*A+a*F+l*H+c*et,r[1]=u*b+d*I+f*L+h*Q,r[5]=u*p+d*P+f*B+h*k,r[9]=u*v+d*G+f*q+h*Y,r[13]=u*A+d*F+f*H+h*et,r[2]=_*b+M*I+m*L+g*Q,r[6]=_*p+M*P+m*B+g*k,r[10]=_*v+M*G+m*q+g*Y,r[14]=_*A+M*F+m*H+g*et,r[3]=y*b+T*I+S*L+R*Q,r[7]=y*p+T*P+S*B+R*k,r[11]=y*v+T*G+S*q+R*Y,r[15]=y*A+T*F+S*H+R*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],_=t[3],M=t[7],m=t[11],g=t[15],y=l*h-c*f,T=a*h-c*d,S=a*f-l*d,R=o*h-c*u,b=o*f-l*u,p=o*d-a*u;return e*(M*y-m*T+g*S)-i*(_*y-m*R+g*b)+s*(_*T-M*R+g*p)-r*(_*S-M*b+m*p)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],_=t[12],M=t[13],m=t[14],g=t[15],y=e*a-i*o,T=e*l-s*o,S=e*c-r*o,R=i*l-s*a,b=i*c-r*a,p=s*c-r*l,v=u*M-d*_,A=u*m-f*_,I=u*g-h*_,P=d*m-f*M,G=d*g-h*M,F=f*g-h*m,L=y*F-T*G+S*P+R*I-b*A+p*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(a*F-l*G+c*P)*B,t[1]=(s*G-i*F-r*P)*B,t[2]=(M*p-m*b+g*R)*B,t[3]=(f*b-d*p-h*R)*B,t[4]=(l*I-o*F-c*A)*B,t[5]=(e*F-s*I+r*A)*B,t[6]=(m*S-_*p-g*T)*B,t[7]=(u*p-f*S+h*T)*B,t[8]=(o*G-a*I+c*v)*B,t[9]=(i*I-e*G-r*v)*B,t[10]=(_*b-M*S+g*y)*B,t[11]=(d*S-u*b-h*y)*B,t[12]=(a*A-o*P-l*v)*B,t[13]=(e*P-i*A+s*v)*B,t[14]=(M*T-_*R-m*y)*B,t[15]=(u*R-d*T+f*y)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,_=r*d,M=o*u,m=o*d,g=a*d,y=l*c,T=l*u,S=l*d,R=i.x,b=i.y,p=i.z;return s[0]=(1-(M+g))*R,s[1]=(h+S)*R,s[2]=(_-T)*R,s[3]=0,s[4]=(h-S)*b,s[5]=(1-(f+g))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(_+T)*p,s[9]=(m-y)*p,s[10]=(1-(f+M))*p,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hn.copy(this);let c=1/o,u=1/a,d=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Ln,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s),_,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===Ln)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Js)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ln,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),h=-(i+s)/(i-s),_,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===Ln)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Js)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ns=new W,Hn=new be,Qf=new W(0,0,0),jf=new W(1,1,1),zi=new W,Io=new W,An=new W,Gh=new be,Vh=new Qe,Yn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tp=0,Hh=new W,Us=new Qe,gi=new be,Po=new W,Sr=new W,ep=new W,np=new Qe,Wh=new W(1,0,0),Xh=new W(0,1,0),qh=new W(0,0,1),Yh={type:"added"},ip={type:"removed"},Fs={type:"childadded",child:null},$l={type:"childremoved",child:null},Ke=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new W,e=new Yn,i=new Qe,s=new W(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new ee}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Po.copy(t):Po.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Sr,Po,this.up):gi.lookAt(Po,Sr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(gi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new W(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),g=this._getHandJoint(c,M);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Ql(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=i,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ge.workingColorSpace){if(t=Xc(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ql(o,r,t+1/3),this.g=Ql(o,r,t),this.b=Ql(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let i=Yu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ge.workingToColorSpace(pn.copy(this),t),Math.round(xe(pn.r*255,0,255))*65536+Math.round(xe(pn.g*255,0,255))*256+Math.round(xe(pn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(pn.copy(this),e);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=$e){ge.workingToColorSpace(pn.copy(this),t);let e=pn.r,i=pn.g,s=pn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Lo);let i=Ir(Bi.h,Lo.h,e),s=Ir(Bi.s,Lo.s,e),r=Ir(Bi.l,Lo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new se;se.NAMES=Yu;var Or=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zr=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new W,xi=new W,jl=new W,_i=new W,Os=new W,zs=new W,Zh=new W,tc=new W,ec=new W,nc=new W,ic=new ke,sc=new ke,rc=new ke,Hi=class n{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wn.subVectors(s,e),xi.subVectors(i,e),jl.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(xi),l=Wn.dot(jl),c=xi.dot(xi),u=xi.dot(jl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-h-_,_,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ic.setScalar(0),sc.setScalar(0),rc.setScalar(0),ic.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,i),rc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ic,r.x),o.addScaledVector(sc,r.y),o.addScaledVector(rc,r.z),o}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),xi.subVectors(t,e),Wn.cross(xi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,i),zs.subVectors(r,i),tc.subVectors(t,i);let l=Os.dot(tc),c=zs.dot(tc);if(l<=0&&c<=0)return e.copy(i);ec.subVectors(t,s);let u=Os.dot(ec),d=zs.dot(ec);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(i).addScaledVector(Os,o);nc.subVectors(t,r);let h=Os.dot(nc),_=zs.dot(nc);if(_>=0&&h<=_)return e.copy(r);let M=h*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(zs,a);let m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Zh.subVectors(r,s),a=(d-u)/(d-u+(h-_)),e.copy(s).addScaledVector(Zh,a);let g=1/(m+M+f);return o=M*g,a=f*g,e.copy(i).addScaledVector(Os,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ni=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Do.copy(i.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),No.subVectors(this.max,br),Bs.subVectors(t.a,br),ks.subVectors(t.b,br),Gs.subVectors(t.c,br),ki.subVectors(ks,Bs),Gi.subVectors(Gs,ks),us.subVectors(Bs,Gs);let e=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-us.z,us.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,us.z,0,-us.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-us.y,us.x,0];return!oc(e,Bs,ks,Gs,No)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,Bs,ks,Gs,No))?!1:(Uo.crossVectors(ki,Gi),e=[Uo.x,Uo.y,Uo.z],oc(e,Bs,ks,Gs,No))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,Do=new ni,Bs=new W,ks=new W,Gs=new W,ki=new W,Gi=new W,us=new W,br=new W,No=new W,Uo=new W,ds=new W;function oc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ds.fromArray(n,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),u=i.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Je=new W,Fo=new oe,rp=0,cn=class extends ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ku,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?Yc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):qu(t,this.array)}};var Br=class extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var kr=class extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Te=class extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},op=new ni,wr=new W,ac=new W,Wi=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):op.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(ac)),this.expandByPoint(wr.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ap=0,Pn=new be,lc=new Ke,Vs=new W,En=new ni,Tr=new ni,on=new W,je=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lf(t)?kr:Br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(En.min,Tr.min),En.expandByPoint(on),on.addVectors(En.max,Tr.max),En.expandByPoint(on)):(En.expandByPoint(Tr.min),En.expandByPoint(Tr.max))}En.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),on.add(Vs)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new W,l[A]=new W;let u=new W,d=new W,f=new W,h=new oe,_=new oe,M=new oe,m=new W,g=new W;function y(A,I,P){c[A]=c[I]=c[P]=1,u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,I),f.fromBufferAttribute(i,P),h.fromBufferAttribute(r,A),_.fromBufferAttribute(r,I),M.fromBufferAttribute(r,P),d.sub(u),f.sub(u),_.sub(h),M.sub(h);let G=1/(_.x*M.y-M.x*_.y);isFinite(G)&&(m.copy(d).multiplyScalar(M.y).addScaledVector(f,-_.y).multiplyScalar(G),g.copy(f).multiplyScalar(_.x).addScaledVector(d,-M.x).multiplyScalar(G),a[A].add(m),a[I].add(m),a[P].add(m),l[A].add(g),l[I].add(g),l[P].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let A=0,I=T.length;A<I;++A){let P=T[A],G=P.start,F=P.count;for(let L=G,B=G+F;L<B;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let S=new W,R=new W,b=new W,p=new W;function v(A){b.fromBufferAttribute(s,A),p.copy(b);let I=a[A];S.copy(I),S.sub(b.multiplyScalar(b.dot(I))).normalize(),R.crossVectors(p,I);let G=R.dot(l[A])<0?-1:1;o.setXYZW(A,S.x,S.y,S.z,G)}for(let A=0,I=i.count;A<I;++A)c[A]&&v(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(t)for(let f=0,h=t.count;f<h;f+=3){let _=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?h=l[M]*a.data.stride+a.offset:h=l[M]*u;for(let g=0;g<u;g++)f[_++]=c[h++]}return new cn(f,u,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var cc=new W,lp=new W,cp=new ee,qn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=cc.subVectors(i,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(cc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||cp.getNormalMatrix(t),s=this.coplanarPoint(cc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hp=0,Xi=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=nr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qo,this.stencilZFail=Qo,this.stencilZPass=Qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new qn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new W,hc=new W,Oo=new W,zo=new W,da=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hc.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),zo.copy(this.origin).sub(hc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Oo),a=zo.dot(this.direction),l=-zo.dot(Oo),c=zo.lengthSq(),u=Math.abs(1-o*o),d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){let M=1/u;d*=M,f*=M,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hc).addScaledVector(Oo,f),h}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,f=t.y-o.y,h=t.z-o.z,_=e.x-o.x,M=e.y-o.y,m=e.z-o.z,g=i.x-o.x,y=i.y-o.y,T=i.z-o.z,S=Math.abs(l),R=Math.abs(c),b=Math.abs(u),p,v,A,I,P,G,F,L,B,q,H,Q;if(S>=R&&S>=b?(A=l,G=d,B=_,Q=g,l>=0?(p=c,v=u,I=f,P=h,F=M,L=m,q=y,H=T):(p=u,v=c,I=h,P=f,F=m,L=M,q=T,H=y)):R>=b?(A=c,G=f,B=M,Q=y,c>=0?(p=u,v=l,I=h,P=d,F=m,L=_,q=T,H=g):(p=l,v=u,I=d,P=h,F=_,L=m,q=g,H=T)):(A=u,G=h,B=m,Q=T,u>=0?(p=l,v=c,I=d,P=f,F=_,L=M,q=g,H=y):(p=c,v=l,I=f,P=d,F=M,L=_,q=y,H=g)),A===0)return null;let k=p/A,Y=v/A,et=1/A,dt=I-k*G,Mt=P-Y*G,K=F-k*B,ht=L-Y*B,wt=q-k*Q,Nt=H-Y*Q,At=wt*ht-Nt*K,Ht=dt*Nt-Mt*wt,fe=K*Mt-ht*dt;if(s){if(At<0||Ht<0||fe<0)return null}else if((At<0||Ht<0||fe<0)&&(At>0||Ht>0||fe>0))return null;let Wt=At+Ht+fe;if(Wt===0)return null;let he=et*(At*G+Ht*B+fe*Q);return(Wt>0?he<0:he>0)?null:this.at(he/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jh=new be,fs=new da,Bo=new Wi,Kh=new W,ko=new W,Go=new W,Vo=new W,uc=new W,Ho=new W,$h=new W,Wo=new W,Pe=class extends Ke{constructor(t=new je,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(uc.fromBufferAttribute(d,t),o?Ho.addScaledVector(uc,u):Ho.addScaledVector(uc.sub(e),u))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(Bo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Bo,Kh)===null||fs.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Jh.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){let m=f[_],g=o[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,R=T;S<R;S+=3){let b=a.getX(S),p=a.getX(S+1),v=a.getX(S+2);s=Xo(this,g,t,i,c,u,d,b,p,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let m=_,g=M;m<g;m+=3){let y=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=Xo(this,o,t,i,c,u,d,y,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){let m=f[_],g=o[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,R=T;S<R;S+=3){let b=S,p=S+1,v=S+2;s=Xo(this,g,t,i,c,u,d,b,p,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=_,g=M;m<g;m+=3){let y=m,T=m+1,S=m+2;s=Xo(this,o,t,i,c,u,d,y,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function up(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Qi,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ko),n.getVertexPosition(l,Go),n.getVertexPosition(c,Vo);let u=up(n,t,e,i,ko,Go,Vo,$h);if(u){let d=new W;Hi.getBarycoord($h,ko,Go,Vo,d),s&&(u.uv=Hi.getInterpolatedAttribute(s,a,l,c,d,new oe)),r&&(u.uv1=Hi.getInterpolatedAttribute(r,a,l,c,d,new oe)),o&&(u.normal=Hi.getInterpolatedAttribute(o,a,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new W,materialIndex:0};Hi.getNormal(ko,Go,Vo,f.normal),u.face=f,u.barycoord=d}return u}var ms=class extends yn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=an,u=an,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=class extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hs=new be,Qh=new be,qo=[],jh=new ni,dp=new be,Ar=new Pe,Er=new Wi,bi=class extends Pe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,dp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hs),jh.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(jh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hs),Er.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Qh.multiplyMatrices(i,Hs),Ar.matrixWorld=Qh,Ar.raycast(t,qo);for(let o=0,a=qo.length;o<a;o++){let l=qo[o];l.instanceId=r,l.object=this,e.push(l)}qo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ms(new Float32Array(s*this.count),s,this.count,Ua,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new Wi,fp=new oe(.5,.5),Yo=new W,Yi=class{constructor(t=new qn,e=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],_=r[8],M=r[9],m=r[10],g=r[11],y=r[12],T=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-o,h-u,g-_,R-y).normalize(),s[1].setComponents(c+o,h+u,g+_,R+y).normalize(),s[2].setComponents(c+a,h+d,g+M,R+T).normalize(),s[3].setComponents(c-a,h-d,g-M,R-T).normalize(),i)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,h-f,g-m,R-S).normalize();else if(s[4].setComponents(c-l,h-f,g-m,R-S).normalize(),e===Ln)s[5].setComponents(c+l,h+f,g+m,R+S).normalize();else if(e===Js)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);let e=fp.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Yo.x=s.normal.x>0?t.max.x:t.min.x,Yo.y=s.normal.y>0?t.max.y:t.min.y,Yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tu=new be,fa=class n{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];tu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Yi),i[s].setFromProjectionMatrix(tu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Yi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Gr=class extends yn{constructor(t=[],e=Ss,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gs=class extends yn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends yn{constructor(t,e,i=Zn,s,r,o,a=an,l=an,c,u=Si,d=1){if(u!==Si&&u!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vr=class extends wi{constructor(t,e=Zn,i=Ss,s,r,o=an,a=an,l,c=Si){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class n extends je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function _(M,m,g,y,T,S,R,b,p,v,A){let I=S/p,P=R/v,G=S/2,F=R/2,L=b/2,B=p+1,q=v+1,H=0,Q=0,k=new W;for(let Y=0;Y<q;Y++){let et=Y*P-F;for(let dt=0;dt<B;dt++){let Mt=dt*I-G;k[M]=Mt*y,k[m]=et*T,k[g]=L,c.push(k.x,k.y,k.z),k[M]=0,k[m]=0,k[g]=b>0?1:-1,u.push(k.x,k.y,k.z),d.push(dt/p),d.push(1-Y/v),H+=1}}for(let Y=0;Y<v;Y++)for(let et=0;et<p;et++){let dt=f+et+B*Y,Mt=f+et+B*(Y+1),K=f+(et+1)+B*(Y+1),ht=f+(et+1)+B*Y;l.push(dt,Mt,ht),l.push(Mt,K,ht),Q+=6}a.addGroup(h,Q,A),h+=Q,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xs=class n extends je{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new W,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let h=i+d/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Dn=class n extends je{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],_=0,M=[],m=i/2,g=0;y(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(h,2));function y(){let S=new W,R=new W,b=0,p=(e-t)/i;for(let v=0;v<=r;v++){let A=[],I=v/r,P=I*(e-t)+t;for(let G=0;G<=s;G++){let F=G/s,L=F*l+a,B=Math.sin(L),q=Math.cos(L);R.x=P*B,R.y=-I*i+m,R.z=P*q,d.push(R.x,R.y,R.z),S.set(B,p,q).normalize(),f.push(S.x,S.y,S.z),h.push(F,1-I),A.push(_++)}M.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let I=M[A][v],P=M[A+1][v],G=M[A+1][v+1],F=M[A][v+1];(t>0||A!==0)&&(u.push(I,P,F),b+=3),(e>0||A!==r-1)&&(u.push(P,G,F),b+=3)}c.addGroup(g,b,0),g+=b}function T(S){let R=_,b=new oe,p=new W,v=0,A=S===!0?t:e,I=S===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*I,0),f.push(0,I,0),h.push(.5,.5),_++;let P=_;for(let G=0;G<=s;G++){let L=G/s*l+a,B=Math.cos(L),q=Math.sin(L);p.x=A*q,p.y=m*I,p.z=A*B,d.push(p.x,p.y,p.z),f.push(0,I,0),b.x=B*.5+.5,b.y=q*.5*I+.5,h.push(b.x,b.y),_++}for(let G=0;G<s;G++){let F=R+G,L=P+G;S===!0?u.push(L,L+1,F):u.push(L+1,L,F),v+=3}c.addGroup(g,v,S===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Wr=class n extends je{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let T=new W,S=new W,R=new W;for(let b=0;b<e.length;b+=3)h(e[b+0],T),h(e[b+1],S),h(e[b+2],R),l(T,S,R,y)}function l(y,T,S,R){let b=R+1,p=[];for(let v=0;v<=b;v++){p[v]=[];let A=y.clone().lerp(S,v/b),I=T.clone().lerp(S,v/b),P=b-v;for(let G=0;G<=P;G++)G===0&&v===b?p[v][G]=A:p[v][G]=A.clone().lerp(I,G/P)}for(let v=0;v<b;v++)for(let A=0;A<2*(b-v)-1;A++){let I=Math.floor(A/2);A%2===0?(f(p[v][I+1]),f(p[v+1][I]),f(p[v][I])):(f(p[v][I+1]),f(p[v+1][I+1]),f(p[v+1][I]))}}function c(y){let T=new W;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(y),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function u(){let y=new W;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let S=m(y)/2/Math.PI+.5,R=g(y)/Math.PI+.5;o.push(S,1-R)}_(),d()}function d(){for(let y=0;y<o.length;y+=6){let T=o[y+0],S=o[y+2],R=o[y+4],b=Math.max(T,S,R),p=Math.min(T,S,R);b>.9&&p<.1&&(T<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function h(y,T){let S=y*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function _(){let y=new W,T=new W,S=new W,R=new W,b=new oe,p=new oe,v=new oe;for(let A=0,I=0;A<r.length;A+=9,I+=6){y.set(r[A+0],r[A+1],r[A+2]),T.set(r[A+3],r[A+4],r[A+5]),S.set(r[A+6],r[A+7],r[A+8]),b.set(o[I+0],o[I+1]),p.set(o[I+2],o[I+3]),v.set(o[I+4],o[I+5]),R.copy(y).add(T).add(S).divideScalar(3);let P=m(R);M(b,I+0,y,P),M(p,I+2,T,P),M(v,I+4,S,P)}}function M(y,T,S,R){R<0&&y.x===1&&(o[T]=y.x-1),S.x===0&&S.z===0&&(o[T]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Ti=class n extends Wr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var _s=class n extends Wr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Nn=class n extends je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],_=[],M=[],m=[];for(let g=0;g<u;g++){let y=g*f-o;for(let T=0;T<c;T++){let S=T*d-r;_.push(S,-y,0),M.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let T=y+c*g,S=y+c*(g+1),R=y+1+c*(g+1),b=y+1+c*g;h.push(T,S,b),h.push(S,R,b)}this.setIndex(h),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(M,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Xr=class n extends je{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,f=(e-t)/s,h=new W,_=new oe;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let g=r+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/e+1)/2,_.y=(h.y/e+1)/2,u.push(_.x,_.y)}d+=f}for(let M=0;M<s;M++){let m=M*(i+1);for(let g=0;g<i;g++){let y=g+m,T=y,S=y+i+1,R=y+i+2,b=y+1;a.push(T,S,b),a.push(S,R,b)}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zi=class n extends je{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new W,f=new W,h=[],_=[],M=[],m=[];for(let g=0;g<=i;g++){let y=[],T=g/i,S=o+T*a,R=t*Math.cos(S),b=Math.sqrt(t*t-R*R),p=0;g===0&&o===0?p=.5/e:g===i&&l===Math.PI&&(p=-.5/e);for(let v=0;v<=e;v++){let A=v/e,I=s+A*r;d.x=-b*Math.cos(I),d.y=R,d.z=b*Math.sin(I),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(A+p,1-T),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let T=u[g][y+1],S=u[g][y],R=u[g+1][y],b=u[g+1][y+1];(g!==0||o>0)&&h.push(T,S,b),(g!==i-1||l<Math.PI)&&h.push(S,R,b)}this.setIndex(h),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(M,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ws(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(eu(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(eu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function xn(n){let t={};for(let e=0;e<n.length;e++){let i=ws(n[e]);for(let s in i)t[s]=i[s]}return t}function eu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function pp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var Zu={clone:ws,merge:xn},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[i].value=new be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},pa=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hn=class extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ma=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ga=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ws(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Zo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ji=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends Ji{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mc:r=t,a=2*e-i;break;case gc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mc:o=t,l=2*i-e;break;case gc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,_=(i-e)/(s-e),M=_*_,m=M*_,g=-f*m+2*f*M-f*_,y=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*_+1,T=(-1-h)*m+(1.5+h)*M+.5*_,S=h*m-h*M;for(let R=0;R!==a;++R)r[R]=g*o[u+R]+y*o[c+R]+T*o[l+R]+S*o[d+R];return r}},_a=class extends Ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},ya=class extends Ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},va=class extends Ji{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-e)/(s-e),M=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*M+o[l+m]*_;return r}let f=a*2,h=t-1;for(let _=0;_!==a;++_){let M=o[c+_],m=o[l+_],g=h*f+_*2,y=d[g],T=d[g+1],S=t*f+_*2,R=u[S],b=u[S+1],p=_p(i,e,y,R,s);r[_]=Ju(p,M,T,b,m)}return r}};function Ju(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function xp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function _p(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ju(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=xp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Rn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ws(e,this.TimeBufferType),this.values=Ws(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ws(t.times,Array),values:Ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Zo(t.settings)&&(i.settings={inTangents:Ws(t.settings.inTangents,Array),outTangents:Ws(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new va(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case la:e=this.InterpolantFactoryMethodLinear;break;case $o:e=this.InterpolantFactoryMethodSmooth;break;case fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $t("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Zo(this.settings)&&(nu(this.settings.inTangents,t),nu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Zo(this.settings)&&(iu(this.settings.inTangents,t),iu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Df(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$o,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let _=0;_!==i;++_){let M=e[d+_];if(M!==e[f+_]||M!==e[h+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)e[f+h]=e[d+h]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function iu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=la;var Ki=class extends Rn{constructor(t,e,i){super(t,e,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Pr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};Ma.prototype.ValueTypeName="color";var Sa=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};Sa.prototype.ValueTypeName="number";var ba=class extends Ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},qr=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Rn{constructor(t,e,i){super(t,e,i)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Pr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};wa.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ku=new Ta,Aa=class{constructor(t){this.manager=t!==void 0?t:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zr=class extends Yr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},dc=new be,su=new W,ru=new W,Ea=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(dc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jo=new W,Ko=new Qe,jn=new W,Jr=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jo,Ko,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Jo,Ko,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new W,ou=new oe,au=new oe,_n=class extends Jr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,ou,au),e.subVectors(au,ou)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Kr=class extends Jr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xc=class extends Ea{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new xc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xs=-90,qs=1,tr=class extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Xs,qs,t,e);s.layers=this.layers,this.add(s);let r=new _n(Xs,qs,t,e);r.layers=this.layers,this.add(r);let o=new _n(Xs,qs,t,e);o.layers=this.layers,this.add(o);let a=new _n(Xs,qs,t,e);a.layers=this.layers,this.add(a);let l=new _n(Xs,qs,t,e);l.layers=this.layers,this.add(l);let c=new _n(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ca=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Jc="\\[\\]\\.:\\/",yp=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",vp="[^"+Jc.replace("\\.","")+"]",Mp=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Sp=/(WCOD+)?/.source.replace("WCOD",vp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Tp=new RegExp("^"+Mp+Sp+bp+wp+"$"),Ap=["material","materials","bones","map"],_c=class{constructor(t,e,i){let s=i||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Be=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yp,"")}static parseTrackName(t){let e=Tp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ap.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=_c;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y_=new Float32Array(1);var yc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function $c(n,t,e,i){let s=Ep(i);switch(e){case zc:return n*t;case Ua:return n*t/s.components*s.byteLength;case Fa:return n*t/s.components*s.byteLength;case ji:return n*t*2/s.components*s.byteLength;case Oa:return n*t*2/s.components*s.byteLength;case Bc:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case za:return n*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ka:case Va:return Math.max(n,16)*Math.max(t,8)/4;case Ba:case Ga:return Math.max(n,8)*Math.max(t,8)/2;case Ha:case Wa:case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xa:case so:case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case cl:case hl:case ul:return Math.ceil(n/4)*Math.ceil(t/4)*16;case dl:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ro:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ep(n){switch(n){case Sn:case Nc:return{byteLength:1,components:1};case sr:case Uc:case Jn:return{byteLength:2,components:1};case Da:case Na:return{byteLength:2,components:4};case Zn:case La:case Fn:return{byteLength:4,components:1};case Fc:case Oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _d(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Np(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){let _=d[f],M=d[h];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){let M=d[h];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sm=`#define PI 3.141592653589793
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
} // validated`,rm=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
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
#endif`,Lm=`uniform sampler2D dfgLUT;
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
}`,Dm=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform float backgroundBlurriness;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,K0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,ag=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Up,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:zp,alphatest_fragment:Bp,alphatest_pars_fragment:kp,aomap_fragment:Gp,aomap_pars_fragment:Vp,batching_pars_vertex:Hp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:jp,color_fragment:tm,color_pars_fragment:em,color_pars_vertex:nm,color_vertex:im,common:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Am,envmap_vertex:gm,fog_vertex:xm,fog_pars_vertex:_m,fog_fragment:ym,fog_pars_fragment:vm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:Sm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:wm,lights_pars_begin:Tm,lights_toon_fragment:Em,lights_toon_pars_fragment:Cm,lights_phong_fragment:Rm,lights_phong_pars_fragment:Im,lights_physical_fragment:Pm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Dm,lights_fragment_maps:Nm,lights_fragment_end:Um,lightprobes_pars_fragment:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:km,map_fragment:Gm,map_pars_fragment:Vm,map_particle_fragment:Hm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Km,morphtarget_vertex:$m,normal_fragment_begin:Qm,normal_fragment_maps:jm,normal_pars_fragment:t0,normal_pars_vertex:e0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:a0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:d0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:x0,shadowmap_vertex:_0,shadowmask_pars_fragment:y0,skinbase_vertex:v0,skinning_pars_vertex:M0,skinning_vertex:S0,skinnormal_vertex:b0,specularmap_fragment:w0,specularmap_pars_fragment:T0,tonemapping_fragment:A0,tonemapping_pars_fragment:E0,transmission_fragment:C0,transmission_pars_fragment:R0,uv_pars_fragment:I0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:D0,background_vert:N0,background_frag:U0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:z0,cube_frag:B0,depth_vert:k0,depth_frag:G0,distance_vert:V0,distance_frag:H0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:K0,meshlambert_frag:$0,meshmatcap_vert:Q0,meshmatcap_frag:j0,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},Dt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},ri={basic:{uniforms:xn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:xn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:xn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:xn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:xn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:xn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:xn([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:xn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:xn([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:xn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:xn([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:xn([Dt.common,Dt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:xn([Dt.lights,Dt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ri.physical={uniforms:xn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var xl={r:0,b:0,g:0},pg=new be,yd=new ee;yd.set(-1,0,0,0,1,0,0,0,1);function mg(n,t,e,i,s,r){let o=new se(0),a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let S=y.backgroundBlurriness>0;T=t.get(T,S)}return T}function _(y){let T=!1,S=h(y);S===null?m(o,a):S&&S.isColor&&(m(S,1),T=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,T){let S=h(T);S&&S.isCubeTexture?(c===void 0&&(c=new Pe(new mn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ws(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yd),c.material.toneMapped=ge.getTransfer(S.colorSpace)!==Ie,(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pe(new Nn(2,2),new Un({name:"BackgroundMaterial",uniforms:ws(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ge.getTransfer(S.colorSpace)!==Ie,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(xl,Zc(n)),e.buffers.color.setClear(xl.r,xl.g,xl.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:M,dispose:g}}function gg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(P,G,F,L,B){let q=!1,H=d(P,L,F,G);r!==H&&(r=H,c(r.object)),q=h(P,L,F,B),q&&_(P,L,F,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(P,G,F,L),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function d(P,G,F,L){let B=L.wireframe===!0,q=i[G.id];q===void 0&&(q={},i[G.id]=q);let H=P.isInstancedMesh===!0?P.id:0,Q=q[H];Q===void 0&&(Q={},q[H]=Q);let k=Q[F.id];k===void 0&&(k={},Q[F.id]=k);let Y=k[B];return Y===void 0&&(Y=f(l()),k[B]=Y),Y}function f(P){let G=[],F=[],L=[];for(let B=0;B<e;B++)G[B]=0,F[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:F,attributeDivisors:L,object:P,attributes:{},index:null}}function h(P,G,F,L){let B=r.attributes,q=G.attributes,H=0,Q=F.getAttributes();for(let k in Q)if(Q[k].location>=0){let et=B[k],dt=q[k];if(dt===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),et===void 0||et.attribute!==dt||dt&&et.data!==dt.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function _(P,G,F,L){let B={},q=G.attributes,H=0,Q=F.getAttributes();for(let k in Q)if(Q[k].location>=0){let et=q[k];et===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let dt={};dt.attribute=et,et&&et.data&&(dt.data=et.data),B[k]=dt,H++}r.attributes=B,r.attributesNum=H,r.index=L}function M(){let P=r.newAttributes;for(let G=0,F=P.length;G<F;G++)P[G]=0}function m(P){g(P,0)}function g(P,G){let F=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;F[P]=1,L[P]===0&&(n.enableVertexAttribArray(P),L[P]=1),B[P]!==G&&(n.vertexAttribDivisor(P,G),B[P]=G)}function y(){let P=r.newAttributes,G=r.enabledAttributes;for(let F=0,L=G.length;F<L;F++)G[F]!==P[F]&&(n.disableVertexAttribArray(F),G[F]=0)}function T(P,G,F,L,B,q,H){H===!0?n.vertexAttribIPointer(P,G,F,B,q):n.vertexAttribPointer(P,G,F,L,B,q)}function S(P,G,F,L){M();let B=L.attributes,q=F.getAttributes(),H=G.defaultAttributeValues;for(let Q in q){let k=q[Q];if(k.location>=0){let Y=B[Q];if(Y===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let et=Y.normalized,dt=Y.itemSize,Mt=t.get(Y);if(Mt===void 0)continue;let K=Mt.buffer,ht=Mt.type,wt=Mt.bytesPerElement,Nt=ht===n.INT||ht===n.UNSIGNED_INT||Y.gpuType===La;if(Y.isInterleavedBufferAttribute){let At=Y.data,Ht=At.isInterleavedBuffer===!0?At.stride:At.itemSize,fe=Y.offset;if(At.isInstancedInterleavedBuffer||At.isInstancedBufferAttribute){for(let Wt=0;Wt<k.locationSize;Wt++)g(k.location+Wt,At.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Wt=0;Wt<k.locationSize;Wt++)m(k.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Wt=0;Wt<k.locationSize;Wt++)T(k.location+Wt,dt/k.locationSize,ht,et,Ht*wt,(fe+dt/k.locationSize*Wt)*wt,Nt)}else{if(Y.isInstancedBufferAttribute){for(let At=0;At<k.locationSize;At++)g(k.location+At,Y.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let At=0;At<k.locationSize;At++)m(k.location+At);n.bindBuffer(n.ARRAY_BUFFER,K);for(let At=0;At<k.locationSize;At++)T(k.location+At,dt/k.locationSize,ht,et,dt*wt,dt/k.locationSize*At*wt,Nt)}}else if(H!==void 0){let et=H[Q];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(k.location,et);break;case 3:n.vertexAttrib3fv(k.location,et);break;case 4:n.vertexAttrib4fv(k.location,et);break;default:n.vertexAttrib1fv(k.location,et)}}}}y()}function R(){A();for(let P in i){let G=i[P];for(let F in G){let L=G[F];for(let B in L){let q=L[B];for(let H in q)u(q[H].object),delete q[H];delete L[B]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;let G=i[P.id];for(let F in G){let L=G[F];for(let B in L){let q=L[B];for(let H in q)u(q[H].object),delete q[H];delete L[B]}}delete i[P.id]}function p(P){for(let G in i){let F=i[G];for(let L in F){let B=F[L];if(B[P.id]===void 0)continue;let q=B[P.id];for(let H in q)u(q[H].object),delete q[H];delete B[P.id]}}}function v(P){for(let G in i){let F=i[G],L=P.isInstancedMesh===!0?P.id:0,B=F[L];if(B!==void 0){for(let q in B){let H=B[q];for(let Q in H)u(H[Q].object),delete H[Q];delete B[q]}delete F[L],Object.keys(F).length===0&&delete i[G]}}}function A(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:p,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function xg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _g(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let p=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(p){return!(p!==In&&i.convert(p)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(p){let v=p===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(p!==Sn&&p!==Fn&&!v&&i.convert(p)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&($t("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&$t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:R,samples:b}}function yg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new qn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let y=r?0:i,T=y*4,S=g.clippingState||null;l.value=S,S=u(_,f,T,h);for(let R=0;R!==T;++R)S[R]=e[R];g.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let g=h+M*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,S=h;T!==M;++T,S+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var lo=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:vs});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=ln),new tr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},$u=256,vg=3,Mg=20,vd=256,Md=16,Sg=3,bg=new W,wg=new se,yl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new tr(1,10,null),this._boxMesh=new Pe(new mn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=bg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(wg));let m=new tr(i,s,u);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=_,t.background=M,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max($u,qc(t))}_fromTexture(t,e){t.mapping===Ss||t.mapping===ir?this._setSize(t.image.length===0?$u:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Qu(t,!1,!1),i=Math.log2(t)-vg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Qu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ss||t.mapping===ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ju()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Tg(),this._integrationMaterial=Ag());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Md);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Sg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(vd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Eg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Qu(n,t,e){return new lo(n,{minFilter:Ai,generateMipmaps:t,type:Jn,colorSpace:Lr,depthBuffer:e})}function co(n,t,e){return new Un({name:n,uniforms:t,vertexShader:ce.cube_vert,fragmentShader:e,side:un,blending:vs,depthTest:!1,depthWrite:!1})}function Tg(){return co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vd}u

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
	`)}function Ag(){return co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Md}},`

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
	`)}function Eg(){return co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mg}
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
	`)}function ju(){return co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function td(){return co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===Ra||h===Ia)if(t.has(f)){let _=t.get(f).texture;return a(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let M=new lo(_.height);return M.fromEquirectangularTexture(n,f),t.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,_=h===Ra||h===Ia,M=h===Ss||h===ir;if(_||M){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new yl(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return _&&y&&y.height>0||M&&y&&l(y)?(i===null&&(i=new yl(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===Ra?f.mapping=Ss:h===Ia&&(f.mapping=ir),f}function l(f){let h=0,_=6;for(let M=0;M<_;M++)f[M]!==void 0&&h++;return h===_}function c(f){let h=f.target;h.removeEventListener("dispose",c);let _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Rg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Cr("WebGLRenderer: "+i+" extension not supported."),s}}}function Ig(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let M=r.get(_);M&&(t.remove(M),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function u(_){let M=_.attributes;for(let m in M)t.update(M[m],n.ARRAY_BUFFER)}function d(_){let M=_.index,m=_.attributes.position,g=0;if(m===void 0)return;let y=M!==null?M.array.length:m.array.length/3-1,T=m.count>=65535?kr:Br,S=new T(Math.ceil(y/3)*6,1),R=S.array;if(M!==null){let p=M.array;g=M.version;for(let v=0,A=0;v<y;v+=3){let I=p[v+0],P=p[v+1],G=p[v+2];R[A++]=I,R[A++]=P,R[A++]=P,R[A++]=G,R[A++]=G,R[A++]=I}}else{g=m.version;for(let p=0,v=0;p<y;p+=3){let A=p+0,I=p+1,P=p+2;R[v++]=A,R[v++]=I,R[v++]=I,R[v++]=P,R[v++]=P,R[v++]=A}}S.version=g;let b=r.get(_);b&&t.remove(b),r.set(_,S)}function f(_){let M=r.get(_);if(M){let m=_.index;m!==null&&M.version<m.version&&d(_)}else d(_);return r.get(_)}function h(){for(let _ in s){let M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function Pg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),e.update(f,i,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let M=0;for(let m=0;m<h;m++)M+=f[m];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Lg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Dg(n,t,e){let i=new WeakMap,s=new ke;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let A=function(){p.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],T=0;h===!0&&(T=1),_===!0&&(T=2),M===!0&&(T=3);let S=a.attributes.position.count*T,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let b=new Float32Array(S*R*4*d),p=new Ur(b,S,R,d);p.type=Fn,p.needsUpdate=!0;let v=T*4;for(let I=0;I<d;I++){let P=m[I],G=g[I],F=y[I],L=S*R*4*I;for(let B=0;B<P.count;B++){let q=B*v;h===!0&&(s.fromBufferAttribute(P,B),b[L+q+0]=s.x,b[L+q+1]=s.y,b[L+q+2]=s.z,b[L+q+3]=0),_===!0&&(s.fromBufferAttribute(G,B),b[L+q+4]=s.x,b[L+q+5]=s.y,b[L+q+6]=s.z,b[L+q+7]=0),M===!0&&(s.fromBufferAttribute(F,B),b[L+q+8]=s.x,b[L+q+9]=s.y,b[L+q+10]=s.z,b[L+q+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:p,size:new oe(S,R)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let M=0;M<c.length;M++)h+=c[M];let _=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ng(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Ug={[Ec]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Rc]:"CINEON_TONE_MAPPING",[Qr]:"ACES_FILMIC_TONE_MAPPING",[Pc]:"AGX_TONE_MAPPING",[Lc]:"NEUTRAL_TONE_MAPPING",[Ic]:"CUSTOM_TONE_MAPPING"};function Fg(n,t,e,i,s,r){let o=new Cn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new je;u.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Te([0,2,0,0,2,0],2));let d=new pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pe(u,d),h=new Kr(-1,1,1,-1,0,1),_=null,M=null,m=!1,g,y=null,T=[],S=!1;this.setSize=function(R,b){o.setSize(R,b),a!==null&&a.setSize(R,b),l!==null&&l.setSize(R,b);for(let p=0;p<T.length;p++){let v=T[p];v.setSize&&v.setSize(R,b)}},this.setEffects=function(R){T=R,S=T.length>0&&T[0].isRenderPass===!0;let b=o.width,p=o.height;T.length>0&&a===null&&(a=new Cn(b,p,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(b,p,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&T.some(A=>A.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new wi(b,p),r===!0&&(c.format=Ei,c.type=bs)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let A=0;A<T.length;A++){let I=T[A];I.setSize&&I.setSize(b,p),v&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,b){if(m||R.toneMapping===ii&&T.length===0)return!1;if(y=b,b!==null){let p=b.width,v=b.height;(o.width!==p||o.height!==v)&&this.setSize(p,v)}return S===!1&&R.setRenderTarget(o),g=R.toneMapping,R.toneMapping=ii,!0},this.hasRenderPass=function(){return S},this.end=function(R,b){R.toneMapping=g,m=!0;let p=o,v=a;for(let A=0;A<T.length;A++){let I=T[A];I.enabled!==!1&&(I.render(R,v,p,b),I.needsSwap!==!1&&(p=v,v=v===a?l:a))}if(_!==R.outputColorSpace||M!==R.toneMapping){_=R.outputColorSpace,M=R.toneMapping,d.defines={},ge.getTransfer(_)===Ie&&(d.defines.SRGB_TRANSFER="");let A=Ug[M];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=p.texture,R.setRenderTarget(y),R.render(f,h),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Sd=new yn,bd=new wi(1,1),wd=new Vr(1),Td=new Ur,Ad=new ua,Ed=new Gr,ed=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function lr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ml(n,t){let e=nd[t];e===void 0&&(e=new Int32Array(t),nd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Og(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function Gg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),nn(e,i)}}function Vg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),nn(e,i)}}function Hg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),nn(e,i)}}function Wg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function Zg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function $g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function Sl(n){return n.version===0&&(n.compareFunction=Vc,n.needsUpdate=!0),n}function Qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Sl(bd):r=Sd,e.setTexture2D(t||r,s)}function jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ad,s)}function tx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Sl(wd):r=Ed,e.setTextureCube(t||r,s)}function ex(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Td,s)}function nx(n){switch(n){case 5126:return Og;case 35664:return zg;case 35665:return Bg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return Kg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}function ix(n,t){n.uniform1fv(this.addr,t)}function sx(n,t){let e=lr(t,this.size,2);n.uniform2fv(this.addr,e)}function rx(n,t){let e=lr(t,this.size,3);n.uniform3fv(this.addr,e)}function ox(n,t){let e=lr(t,this.size,4);n.uniform4fv(this.addr,e)}function ax(n,t){let e=lr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function lx(n,t){let e=lr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function cx(n,t){let e=lr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function hx(n,t){n.uniform1iv(this.addr,t)}function ux(n,t){n.uniform2iv(this.addr,t)}function dx(n,t){n.uniform3iv(this.addr,t)}function fx(n,t){n.uniform4iv(this.addr,t)}function px(n,t){n.uniform1uiv(this.addr,t)}function mx(n,t){n.uniform2uiv(this.addr,t)}function gx(n,t){n.uniform3uiv(this.addr,t)}function xx(n,t){n.uniform4uiv(this.addr,t)}function _x(n,t,e){let i=this.cache,s=t.length,r=Ml(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Sl(bd):o=Sd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function yx(n,t,e){let i=this.cache,s=t.length,r=Ml(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ad,r[o])}function vx(n,t,e){let i=this.cache,s=t.length,r=Ml(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Sl(wd):o=Ed;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Mx(n,t,e){let i=this.cache,s=t.length,r=Ml(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Td,r[o])}function Sx(n){switch(n){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return Mx}}var th=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=nx(e.type)}},eh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sx(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function od(n,t){n.seq.push(t),n.map[t.id]=t}function bx(n,t,e){let i=n.name,s=i.length;for(Qc.lastIndex=0;;){let r=Qc.exec(i),o=Qc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){od(e,c===void 0?new th(a,n,t):new eh(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new nh(a),od(e,d)),e=d}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);bx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ad(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var wx=37297,Tx=0;function Ax(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ld=new ee;function Ex(n){ge._getMatrix(ld,ge.workingColorSpace,n);let t=`mat3( ${ld.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(n)){case Dr:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function cd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ax(n.getShaderSource(t),a)}else return r}function Cx(n,t){let e=Ex(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Rx={[Ec]:"Linear",[Cc]:"Reinhard",[Rc]:"Cineon",[Qr]:"ACESFilmic",[Pc]:"AgX",[Lc]:"Neutral",[Ic]:"Custom"};function Ix(n,t){let e=Rx[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _l=new W;function Px(){ge.getLuminanceCoefficients(_l);let n=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Dx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Nx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ao(n){return n!==""}function hd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ud(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(n){return n.replace(Ux,Fx)}function Fx(n,t){let e=ce[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ih(e)}var Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(n){return n.replace(Ox,zx)}function zx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Bx={[ys]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function kx(n){return Bx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gx={[ir]:"ENVMAP_MODE_REFRACTION"};function Vx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Gx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hx={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[Ru]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function Wx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Hx[n.combine]||"ENVMAP_BLENDING_NONE"}function Xx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=kx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Vx(e),d=Wx(e),f=Lx(e),h=Dx(r),_=s.createProgram(),M,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(ao).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(M=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?ce.tonemapping_pars_fragment:"",e.toneMapping!==ii?Ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Cx("linearToOutputTexel",e.outputColorSpace),Px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=ih(o),o=hd(o,e),o=ud(o,e),a=ih(a),a=hd(a,e),a=ud(a,e),o=dd(o),a=dd(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+M+o,T=g+m+a,S=ad(s,s.VERTEX_SHADER,y),R=ad(s,s.FRAGMENT_SHADER,T);s.attachShader(_,S),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(I){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(R)||"",L=P.trim(),B=G.trim(),q=F.trim(),H=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,S,R);else{let k=cd(s,S,"vertex"),Y=cd(s,R,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+k+`
`+Y)}else L!==""?$t("WebGLProgram: Program Info Log:",L):(B===""||q==="")&&(Q=!1);Q&&(I.diagnostics={runnable:H,programLog:L,vertexShader:{log:B,prefix:M},fragmentShader:{log:q,prefix:m}})}s.deleteShader(S),s.deleteShader(R),p=new ar(s,_),v=Nx(s,_)}let p;this.getUniforms=function(){return p===void 0&&b(this),p};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,wx)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}var qx=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new rh(t),e.set(t,i)),i}},rh=class{constructor(t){this.id=qx++,this.code=t,this.usedTimes=0}};function Yx(n){return n===ji||n===so||n===ro}function Zx(n,t,e,i,s,r){let o=new Fr,a=new sh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(p){return l.add(p),p===0?"uv":`uv${p}`}function _(p,v,A,I,P,G){let F=I.fog,L=P.geometry,B=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?I.environment:null,q=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,H=t.get(p.envMap||B,q),Q=f[p.type],k=i.precision;p.precision!==null&&(k=i.getMaxPrecision(p.precision),k!==p.precision&&$t("WebGLProgram.getParameters:",p.precision,"not supported, using",k,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,et=Y!==void 0?Y.length:0,dt=0;L.morphAttributes.position!==void 0&&(dt=1),L.morphAttributes.normal!==void 0&&(dt=2),L.morphAttributes.color!==void 0&&(dt=3);let Mt,K,ht,wt;if(Q){let It=ri[Q];Mt=It.vertexShader,K=It.fragmentShader}else{Mt=p.vertexShader,K=p.fragmentShader;let It=a.getVertexShaderStage(p),Se=a.getFragmentShaderStage(p);a.update(p,It,Se),ht=It.id,wt=Se.id}let Nt=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Ht=P.isInstancedMesh===!0,fe=P.isBatchedMesh===!0,Wt=!!p.map,he=!!p.matcap,pe=!!H,Qt=pe&&H.isPMREMTexture===!0,rt=!!p.aoMap,Ee=!!p.lightMap,Ge=!!p.bumpMap&&p.wireframe===!1,ve=!!p.normalMap,we=!!p.displacementMap,Pt=!!p.emissiveMap,ae=!!p.metalnessMap,ue=!!p.roughnessMap,Ce=p.anisotropy>0,X=p.clearcoat>0,re=p.diffuseRoughness>0,jt=p.dispersion>0,Le=p.retroreflectivity>0,Et=p.iridescence>0,Fe=p.sheen>0,Xt=p.transmission>0,Zt=Ce&&!!p.anisotropyMap,N=X&&!!p.clearcoatMap,w=X&&!!p.clearcoatNormalMap,Z=X&&!!p.clearcoatRoughnessMap,ut=re&&!!p.diffuseRoughnessMap,at=Et&&!!p.iridescenceMap,St=Et&&!!p.iridescenceThicknessMap,yt=Fe&&!!p.sheenColorMap,ot=Fe&&!!p.sheenRoughnessMap,it=!!p.specularMap,pt=!!p.specularColorMap,O=!!p.specularIntensityMap,st=Xt&&!!p.transmissionMap,nt=Xt&&!!p.thicknessMap,Tt=!!p.gradientMap,mt=!!p.alphaMap,vt=p.alphaTest>0,Ut=!!p.alphaHash,Jt=!!p.extensions,xt=ii;p.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(xt=n.toneMapping);let Ot=Qt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,te={shaderID:Q,shaderType:p.type,shaderName:p.name,vertexShader:Mt,fragmentShader:K,defines:p.defines,customVertexShaderID:ht,customFragmentShaderID:wt,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:k,batching:fe,batchingColor:fe&&P._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&P.instanceColor!==null,instancingMorph:Ht&&P.morphTexture!==null,outputColorSpace:Nt===null?n.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Wt,matcap:he,envMap:pe,envMapMode:pe&&H.mapping,envMapPMREM:Qt,envMapMaxLod:Qt?Ot.length-1:null,envMapSize:Qt?Ot[0].width:null,aoMap:rt,lightMap:Ee,bumpMap:Ge,normalMap:ve,displacementMap:we,emissiveMap:Pt,normalMapObjectSpace:ve&&p.normalMapType===Du,normalMapTangentSpace:ve&&p.normalMapType===ml,packedNormalMap:ve&&p.normalMapType===ml&&Yx(p.normalMap.format),metalnessMap:ae,roughnessMap:ue,anisotropy:Ce,anisotropyMap:Zt,clearcoat:X,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:Z,diffuseRoughness:re,diffuseRoughnessMap:ut,dispersion:jt,retroreflection:Le,iridescence:Et,iridescenceMap:at,iridescenceThicknessMap:St,sheen:Fe,sheenColorMap:yt,sheenRoughnessMap:ot,specularMap:it,specularColorMap:pt,specularIntensityMap:O,transmission:Xt,transmissionMap:st,thicknessMap:nt,gradientMap:Tt,opaque:p.transparent===!1&&p.blending===nr&&p.alphaToCoverage===!1,alphaMap:mt,alphaTest:vt,alphaHash:Ut,combine:p.combine,mapUv:Wt&&h(p.map.channel),aoMapUv:rt&&h(p.aoMap.channel),lightMapUv:Ee&&h(p.lightMap.channel),bumpMapUv:Ge&&h(p.bumpMap.channel),normalMapUv:ve&&h(p.normalMap.channel),displacementMapUv:we&&h(p.displacementMap.channel),emissiveMapUv:Pt&&h(p.emissiveMap.channel),metalnessMapUv:ae&&h(p.metalnessMap.channel),roughnessMapUv:ue&&h(p.roughnessMap.channel),anisotropyMapUv:Zt&&h(p.anisotropyMap.channel),clearcoatMapUv:N&&h(p.clearcoatMap.channel),clearcoatNormalMapUv:w&&h(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&h(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&h(p.diffuseRoughnessMap.channel),iridescenceMapUv:at&&h(p.iridescenceMap.channel),iridescenceThicknessMapUv:St&&h(p.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&h(p.sheenColorMap.channel),sheenRoughnessMapUv:ot&&h(p.sheenRoughnessMap.channel),specularMapUv:it&&h(p.specularMap.channel),specularColorMapUv:pt&&h(p.specularColorMap.channel),specularIntensityMapUv:O&&h(p.specularIntensityMap.channel),transmissionMapUv:st&&h(p.transmissionMap.channel),thicknessMapUv:nt&&h(p.thicknessMap.channel),alphaMapUv:mt&&h(p.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ve||Ce),vertexNormals:!!L.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Wt||mt),fog:!!F,useFog:p.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||L.attributes.normal===void 0&&ve===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:At,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:dt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:G.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:Wt&&p.map.isVideoTexture===!0&&ge.getTransfer(p.map.colorSpace)===Ie,decodeVideoTextureEmissive:Pt&&p.emissiveMap.isVideoTexture===!0&&ge.getTransfer(p.emissiveMap.colorSpace)===Ie,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===gn,flipSided:p.side===un,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Jt&&p.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&p.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function M(p){let v=[];if(p.shaderID?v.push(p.shaderID):(v.push(p.customVertexShaderID),v.push(p.customFragmentShaderID)),p.defines!==void 0)for(let A in p.defines)v.push(A),v.push(p.defines[A]);return p.isRawShaderMaterial===!1&&(m(v,p),g(v,p),v.push(n.outputColorSpace)),v.push(p.customProgramCacheKey),v.join()}function m(p,v){p.push(v.precision),p.push(v.outputColorSpace),p.push(v.envMapMode),p.push(v.envMapPMREM),p.push(v.envMapMaxLod),p.push(v.envMapSize),p.push(v.mapUv),p.push(v.alphaMapUv),p.push(v.lightMapUv),p.push(v.aoMapUv),p.push(v.bumpMapUv),p.push(v.normalMapUv),p.push(v.displacementMapUv),p.push(v.emissiveMapUv),p.push(v.metalnessMapUv),p.push(v.roughnessMapUv),p.push(v.anisotropyMapUv),p.push(v.clearcoatMapUv),p.push(v.clearcoatNormalMapUv),p.push(v.clearcoatRoughnessMapUv),p.push(v.diffuseRoughnessMapUv),p.push(v.iridescenceMapUv),p.push(v.iridescenceThicknessMapUv),p.push(v.sheenColorMapUv),p.push(v.sheenRoughnessMapUv),p.push(v.specularMapUv),p.push(v.specularColorMapUv),p.push(v.specularIntensityMapUv),p.push(v.transmissionMapUv),p.push(v.thicknessMapUv),p.push(v.combine),p.push(v.fogExp2),p.push(v.sizeAttenuation),p.push(v.morphTargetsCount),p.push(v.numSunLights),p.push(v.numDirLights),p.push(v.numPointLights),p.push(v.numSpotLights),p.push(v.numSpotLightMaps),p.push(v.numHemiLights),p.push(v.numRectAreaLights),p.push(v.numSunLightShadows),p.push(v.numDirLightShadows),p.push(v.numPointLightShadows),p.push(v.numSpotLightShadows),p.push(v.numSpotLightShadowsWithMaps),p.push(v.numLightProbes),p.push(v.numLightProbeGrids),p.push(v.shadowMapType),p.push(v.toneMapping),p.push(v.numClippingPlanes),p.push(v.numClipIntersection),p.push(v.depthPacking)}function g(p,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),p.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),p.push(o.mask)}function y(p){let v=f[p.type],A;if(v){let I=ri[v];A=Zu.clone(I.uniforms)}else A=p.uniforms;return A}function T(p,v){let A=u.get(v);return A!==void 0?++A.usedTimes:(A=new Xx(n,v,p,s),c.push(A),u.set(v,A)),A}function S(p){if(--p.usedTimes===0){let v=c.indexOf(p);c[v]=c[c.length-1],c.pop(),u.delete(p.cacheKey),p.destroy()}}function R(p){a.remove(p)}function b(){a.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:b}}function Jx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Kx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function pd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function md(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,_,M,m,g){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:h,material:_,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:g},n[t]=y):(y.id=f.id,y.object=f,y.geometry=h,y.material=_,y.materialVariant=o(f),y.groupOrder=M,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,h,_,M,m,g,y){y.reversedDepth===!0&&(m=-m);let T=a(f,h,_,M,m,g);_.transmission>0?i.push(T):_.transparent===!0?s.push(T):e.push(T)}function c(f,h,_,M,m,g){let y=a(f,h,_,M,m,g);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function u(f,h){e.length>1&&e.sort(f||Kx),i.length>1&&i.sort(h||pd),s.length>1&&s.sort(h||pd)}function d(){for(let f=t,h=n.length;f<h;f++){let _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function $x(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new md,n.set(i,[o])):s>=r.length?(o=new md,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new se};break;case"SpotLight":e={position:new W,direction:new W,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function jx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var t_=0;function e_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function n_(n){let t=new Qx,e=jx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new be,o=new be;function a(c){let u=0,d=0,f=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let h=0,_=0,M=0,m=0,g=0,y=0,T=0,S=0,R=0,b=0,p=0,v=0,A=0,I=0;c.sort(e_);for(let G=0,F=c.length;G<F;G++){let L=c[G],B=L.color,q=L.intensity,H=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ji?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=B.r*q,d+=B.g*q,f+=B.b*q;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],q);I++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,et=e.get(L);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[_]=et,i.sunShadowMap[_]=Q;let dt=Y.getViewportCount();for(let Mt=0;Mt<dt;Mt++)i.sunShadowMatrix[M+Mt]=Y.getMatrix(Mt),i.sunShadowCascade[M+Mt]=Y._cascadeData[Mt];M+=dt,_++}i.sun[h]=k,h++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,et=e.get(L);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=L.shadow.matrix,R++}i.directional[m]=k,m++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(B).multiplyScalar(q),k.distance=H,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[y]=k;let Y=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,Y.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[y]=Y.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,i.spotShadow[y]=et,i.spotShadowMap[y]=Q,p++}y++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(B).multiplyScalar(q),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=k,T++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let Y=L.shadow,et=e.get(L);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,et.shadowCameraNear=Y.camera.near,et.shadowCameraFar=Y.camera.far,i.pointShadow[g]=et,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,b++}i.point[g]=k,g++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(q),k.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[S]=k,S++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let P=i.hash;(P.sunLength!==h||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==T||P.hemiLength!==S||P.numSunShadows!==_||P.numDirectionalShadows!==R||P.numPointShadows!==b||P.numSpotShadows!==p||P.numSpotMaps!==v||P.numLightProbes!==I)&&(i.sun.length=h,i.directional.length=m,i.spot.length=y,i.rectArea.length=T,i.point.length=g,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=p,i.spotShadowMap.length=p,i.spotLightMatrix.length=p+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,P.sunLength=h,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=T,P.hemiLength=S,P.numSunShadows=_,P.numDirectionalShadows=R,P.numPointShadows=b,P.numSpotShadows=p,P.numSpotMaps=v,P.numLightProbes=I,i.version=t_++)}function l(c,u){let d=0,f=0,h=0,_=0,M=0,m=0,g=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let S=c[y];if(S.isSunLight){let R=i.sun[d];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(g),d++}else if(S.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),f++}else if(S.isSpotLight){let R=i.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),_++}else if(S.isRectAreaLight){let R=i.rectArea[M];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){let R=i.point[h];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function gd(n){let t=new n_(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function i_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new gd(n),t.set(s,[a])):r>=o.length?(a=new gd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
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
}`,o_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],a_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],xd=new be,oo=new W,jc=new W;function l_(n,t,e){let i=new Yi,s=new oe,r=new oe,o=new ke,a=new ma,l=new ga,c={},u=e.maxTextureSize,d={[Qi]:un,[un]:Qi,[gn]:gn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let _=new je;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Pe(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let g=this.type;this.render=function(b,p,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===hu&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let A=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),G=n.state;G.setBlending(vs),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let F=g!==this.type;F&&p.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=b.length;L<B;L++){let q=b[L],H=q.shadow;if(H===void 0){$t("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();s.multiply(Q),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y));let k=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=k,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===er){if(q.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Cn(s.x,s.y,{format:ji,type:Jn,minFilter:ln,magFilter:ln,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new wi(s.x,s.y,Fn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=Si,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=an,H.map.depthTexture.magFilter=an}else q.isPointLight?(H.map=new lo(s.x),H.map.depthTexture=new Vr(s.x,Zn)):(H.map=new Cn(s.x,s.y),H.map.depthTexture=new wi(s.x,s.y,Zn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=Si,this.type===ys?(H.map.depthTexture.compareFunction=k?Gc:kc,H.map.depthTexture.minFilter=ln,H.map.depthTexture.magFilter=ln):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=an,H.map.depthTexture.magFilter=an);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Y=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,v);let et=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:v.layers;for(let dt=0;dt<Y;dt++){let Mt=H.getCamera(dt);if(q.isPointLight){let K=H.camera,ht=H.matrix,wt=q.distance||K.far;wt!==K.far&&(K.far=wt,K.updateProjectionMatrix()),oo.setFromMatrixPosition(q.matrixWorld),K.position.copy(oo),jc.copy(K.position),jc.add(o_[dt]),K.up.copy(a_[dt]),K.lookAt(jc),K.updateMatrixWorld(),ht.makeTranslation(-oo.x,-oo.y,-oo.z),xd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(xd,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,dt),n.clear();else{dt===0&&(n.setRenderTarget(H.map),n.clear());let K=H.getViewport(dt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),G.viewport(o)}i=H.getFrustum(dt),S(p,v,Mt,q,et,this.type)}H.isPointLightShadow!==!0&&this.type===er&&y(H,v),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(A,I,P)};function y(b,p){let v=t.update(M);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new Cn(s.x,s.y,{format:ji,type:Jn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(p,null,v,f,M,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(p,null,v,h,M,null)}function T(b,p,v,A){let I=null,P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)I=P;else if(I=v.isPointLight===!0?l:a,n.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let G=I.uuid,F=p.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let B=L[F];B===void 0&&(B=I.clone(),L[F]=B,p.addEventListener("dispose",R)),I=B}if(I.visible=p.visible,I.wireframe=p.wireframe,A===er?I.side=p.shadowSide!==null?p.shadowSide:p.side:I.side=p.shadowSide!==null?p.shadowSide:d[p.side],I.alphaMap=p.alphaMap,I.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,I.map=p.map,I.clipShadows=p.clipShadows,I.clippingPlanes=p.clippingPlanes,I.clipIntersection=p.clipIntersection,I.displacementMap=p.displacementMap,I.displacementScale=p.displacementScale,I.displacementBias=p.displacementBias,I.wireframeLinewidth=p.wireframeLinewidth,I.linewidth=p.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let G=n.properties.get(I);G.light=v}return I}function S(b,p,v,A,I,P){if(b.visible===!1)return;if(b.layers.test(I)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===er)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let L=t.update(b),B=b.material;if(Array.isArray(B)){let q=L.groups;for(let H=0,Q=q.length;H<Q;H++){let k=q[H],Y=B[k.materialIndex];if(Y&&Y.visible){let et=T(b,Y,A,P);b.onBeforeShadow(n,b,p,v,L,et,k),n.renderBufferDirect(v,null,L,et,b,k),b.onAfterShadow(n,b,p,v,L,et,k)}}}else if(B.visible){let q=T(b,B,A,P);b.onBeforeShadow(n,b,p,v,L,q,null),n.renderBufferDirect(v,null,L,q,b,null),b.onAfterShadow(n,b,p,v,L,q,null)}}let F=b.children;for(let L=0,B=F.length;L<B;L++)S(F[L],p,v,A,I,P)}function R(b){b.target.removeEventListener("dispose",R);for(let v in c){let A=c[v],I=b.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function c_(n,t){function e(){let O=!1,st=new ke,nt=null,Tt=new ke(0,0,0,0);return{setMask:function(mt){nt!==mt&&!O&&(n.colorMask(mt,mt,mt,mt),nt=mt)},setLocked:function(mt){O=mt},setClear:function(mt,vt,Ut,Jt,xt){xt===!0&&(mt*=Jt,vt*=Jt,Ut*=Jt),st.set(mt,vt,Ut,Jt),Tt.equals(st)===!1&&(n.clearColor(mt,vt,Ut,Jt),Tt.copy(st))},reset:function(){O=!1,nt=null,Tt.set(-1,0,0,0)}}}function i(){let O=!1,st=!1,nt=null,Tt=null,mt=null;return{setReversed:function(vt){if(st!==vt){let Ut=t.get("EXT_clip_control");vt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),st=vt;let Jt=mt;mt=null,this.setClear(Jt)}},getReversed:function(){return st},setTest:function(vt){vt?At(n.DEPTH_TEST):Ht(n.DEPTH_TEST)},setMask:function(vt){nt!==vt&&!O&&(n.depthMask(vt),nt=vt)},setFunc:function(vt){if(st&&(vt=Wu[vt]),Tt!==vt){switch(vt){case jo:n.depthFunc(n.NEVER);break;case ta:n.depthFunc(n.ALWAYS);break;case ea:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case na:n.depthFunc(n.EQUAL);break;case ia:n.depthFunc(n.GEQUAL);break;case sa:n.depthFunc(n.GREATER);break;case ra:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Tt=vt}},setLocked:function(vt){O=vt},setClear:function(vt){mt!==vt&&(mt=vt,st&&(vt=1-vt),n.clearDepth(vt))},reset:function(){O=!1,nt=null,Tt=null,mt=null,st=!1}}}function s(){let O=!1,st=null,nt=null,Tt=null,mt=null,vt=null,Ut=null,Jt=null,xt=null;return{setTest:function(Ot){O||(Ot?At(n.STENCIL_TEST):Ht(n.STENCIL_TEST))},setMask:function(Ot){st!==Ot&&!O&&(n.stencilMask(Ot),st=Ot)},setFunc:function(Ot,te,It){(nt!==Ot||Tt!==te||mt!==It)&&(n.stencilFunc(Ot,te,It),nt=Ot,Tt=te,mt=It)},setOp:function(Ot,te,It){(vt!==Ot||Ut!==te||Jt!==It)&&(n.stencilOp(Ot,te,It),vt=Ot,Ut=te,Jt=It)},setLocked:function(Ot){O=Ot},setClear:function(Ot){xt!==Ot&&(n.clearStencil(Ot),xt=Ot)},reset:function(){O=!1,st=null,nt=null,Tt=null,mt=null,vt=null,Ut=null,Jt=null,xt=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,u={},d={},f={},h=new WeakMap,_=[],M=null,m=!1,g=null,y=null,T=null,S=null,R=null,b=null,p=null,v=new se(0,0,0),A=0,I=!1,P=null,G=null,F=null,L=null,B=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Q>=2);let Y=null,et={},dt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),K=new ke().fromArray(dt),ht=new ke().fromArray(Mt);function wt(O,st,nt,Tt){let mt=new Uint8Array(4),vt=n.createTexture();n.bindTexture(O,vt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<nt;Ut++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,Tt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(st+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return vt}let Nt={};Nt[n.TEXTURE_2D]=wt(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[n.TEXTURE_2D_ARRAY]=wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),At(n.DEPTH_TEST),o.setFunc(Zs),Ge(!1),ve(vc),At(n.CULL_FACE),rt(vs);function At(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Ht(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function fe(O,st){return f[O]!==st?(n.bindFramebuffer(O,st),f[O]=st,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=st),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Wt(O,st){let nt=_,Tt=!1;if(O){nt=h.get(st),nt===void 0&&(nt=[],h.set(st,nt));let mt=O.textures;if(nt.length!==mt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Ut=mt.length;vt<Ut;vt++)nt[vt]=n.COLOR_ATTACHMENT0+vt;nt.length=mt.length,Tt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,Tt=!0);Tt&&n.drawBuffers(nt)}function he(O){return M!==O?(n.useProgram(O),M=O,!0):!1}let pe={[Ms]:n.FUNC_ADD,[du]:n.FUNC_SUBTRACT,[fu]:n.FUNC_REVERSE_SUBTRACT};pe[pu]=n.MIN,pe[mu]=n.MAX;let Qt={[gu]:n.ZERO,[xu]:n.ONE,[_u]:n.SRC_COLOR,[wc]:n.SRC_ALPHA,[wu]:n.SRC_ALPHA_SATURATE,[Su]:n.DST_COLOR,[vu]:n.DST_ALPHA,[yu]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[bu]:n.ONE_MINUS_DST_COLOR,[Mu]:n.ONE_MINUS_DST_ALPHA,[Tu]:n.CONSTANT_COLOR,[Au]:n.ONE_MINUS_CONSTANT_COLOR,[Eu]:n.CONSTANT_ALPHA,[Cu]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(O,st,nt,Tt,mt,vt,Ut,Jt,xt,Ot){if(O===vs){m===!0&&(Ht(n.BLEND),m=!1);return}if(m===!1&&(At(n.BLEND),m=!0),O!==uu){if(O!==g||Ot!==I){if((y!==Ms||R!==Ms)&&(n.blendEquation(n.FUNC_ADD),y=Ms,R=Ms),Ot)switch(O){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",O);break}else switch(O){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",O);break}T=null,S=null,b=null,p=null,v.set(0,0,0),A=0,g=O,I=Ot}return}mt=mt||st,vt=vt||nt,Ut=Ut||Tt,(st!==y||mt!==R)&&(n.blendEquationSeparate(pe[st],pe[mt]),y=st,R=mt),(nt!==T||Tt!==S||vt!==b||Ut!==p)&&(n.blendFuncSeparate(Qt[nt],Qt[Tt],Qt[vt],Qt[Ut]),T=nt,S=Tt,b=vt,p=Ut),(Jt.equals(v)===!1||xt!==A)&&(n.blendColor(Jt.r,Jt.g,Jt.b,xt),v.copy(Jt),A=xt),g=O,I=!1}function Ee(O,st){O.side===gn?Ht(n.CULL_FACE):At(n.CULL_FACE);let nt=O.side===un;st&&(nt=!nt),Ge(nt),O.blending===nr&&O.transparent===!1?rt(vs):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Tt=O.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?At(n.SAMPLE_ALPHA_TO_COVERAGE):Ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){P!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),P=O)}function ve(O){O!==lu?(At(n.CULL_FACE),O!==G&&(O===vc?n.cullFace(n.BACK):O===cu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ht(n.CULL_FACE),G=O}function we(O){O!==F&&(H&&n.lineWidth(O),F=O)}function Pt(O,st,nt){O?(At(n.POLYGON_OFFSET_FILL),(L!==st||B!==nt)&&(L=st,B=nt,o.getReversed()&&(st=-st,nt=-nt),n.polygonOffset(st,nt))):Ht(n.POLYGON_OFFSET_FILL)}function ae(O){O?At(n.SCISSOR_TEST):Ht(n.SCISSOR_TEST)}function ue(O){O===void 0&&(O=n.TEXTURE0+q-1),Y!==O&&(n.activeTexture(O),Y=O)}function Ce(O,st,nt){nt===void 0&&(Y===null?nt=n.TEXTURE0+q-1:nt=Y);let Tt=et[nt];Tt===void 0&&(Tt={type:void 0,texture:void 0},et[nt]=Tt),(Tt.type!==O||Tt.texture!==st)&&(Y!==nt&&(n.activeTexture(nt),Y=nt),n.bindTexture(O,st||Nt[O]),Tt.type=O,Tt.texture=st)}function X(){let O=et[Y];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function jt(){try{n.compressedTexImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function Le(){try{n.texSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Et(){try{n.texSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function Fe(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Xt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function Zt(){try{n.texStorage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function N(){try{n.texStorage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function w(){try{n.texImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Z(){try{n.texImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function ut(O){return d[O]!==void 0?d[O]:n.getParameter(O)}function at(O,st){d[O]!==st&&(n.pixelStorei(O,st),d[O]=st)}function St(O){K.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),K.copy(O))}function yt(O){ht.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ht.copy(O))}function ot(O,st){let nt=c.get(st);nt===void 0&&(nt=new WeakMap,c.set(st,nt));let Tt=nt.get(O);Tt===void 0&&(Tt=n.getUniformBlockIndex(st,O.name),n.uniformBlockBinding(st,Tt,Tt),nt.set(O,Tt))}function it(O,st,nt){let mt=c.get(st).get(O);l[mt]!==nt&&(n.bindBufferBase(n.UNIFORM_BUFFER,mt,nt),l[mt]=nt)}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,et={},f={},l={},h=new WeakMap,_=[],M=null,m=!1,g=null,y=null,T=null,S=null,R=null,b=null,p=null,v=new se(0,0,0),A=0,I=!1,P=null,G=null,F=null,L=null,B=null,K.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:At,disable:Ht,bindFramebuffer:fe,drawBuffers:Wt,useProgram:he,setBlending:rt,setMaterial:Ee,setFlipSided:Ge,setCullFace:ve,setLineWidth:we,setPolygonOffset:Pt,setScissorTest:ae,activeTexture:ue,bindTexture:Ce,unbindTexture:X,compressedTexImage2D:re,compressedTexImage3D:jt,texImage2D:w,texImage3D:Z,pixelStorei:at,getParameter:ut,updateUBOMapping:ot,uniformBlockBinding:it,texStorage2D:Zt,texStorage3D:N,texSubImage2D:Le,texSubImage3D:Et,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Xt,scissor:St,viewport:yt,reset:pt}}function h_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,d=new Set,f,h=new WeakMap,_=new Set,M=new FinalizationRegistry(N=>_.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,w){return m?new OffscreenCanvas(N,w):Nr("canvas")}function y(N,w,Z){let ut=1,at=Zt(N);if((at.width>Z||at.height>Z)&&(ut=Z/Math.max(at.width,at.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let St=Math.floor(ut*at.width),yt=Math.floor(ut*at.height);f===void 0&&(f=g(St,yt));let ot=w?g(St,yt):f;return ot.width=St,ot.height=yt,ot.getContext("2d").drawImage(N,0,0,St,yt),$t("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+St+"x"+yt+")."),ot}else return"data"in N&&$t("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),N;return N}function T(N){return N.generateMipmaps}function S(N){n.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,w,Z,ut,at,St=!1){if(N!==null){if(n[N]!==void 0)return n[N];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let yt;ut&&(yt=t.get("EXT_texture_norm16"),yt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=w;if(w===n.RED&&(Z===n.FLOAT&&(ot=n.R32F),Z===n.HALF_FLOAT&&(ot=n.R16F),Z===n.UNSIGNED_BYTE&&(ot=n.R8),Z===n.UNSIGNED_SHORT&&yt&&(ot=yt.R16_EXT),Z===n.SHORT&&yt&&(ot=yt.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.R8UI),Z===n.UNSIGNED_SHORT&&(ot=n.R16UI),Z===n.UNSIGNED_INT&&(ot=n.R32UI),Z===n.BYTE&&(ot=n.R8I),Z===n.SHORT&&(ot=n.R16I),Z===n.INT&&(ot=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(ot=n.RG32F),Z===n.HALF_FLOAT&&(ot=n.RG16F),Z===n.UNSIGNED_BYTE&&(ot=n.RG8),Z===n.UNSIGNED_SHORT&&yt&&(ot=yt.RG16_EXT),Z===n.SHORT&&yt&&(ot=yt.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ot=n.RG16UI),Z===n.UNSIGNED_INT&&(ot=n.RG32UI),Z===n.BYTE&&(ot=n.RG8I),Z===n.SHORT&&(ot=n.RG16I),Z===n.INT&&(ot=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),Z===n.UNSIGNED_INT&&(ot=n.RGB32UI),Z===n.BYTE&&(ot=n.RGB8I),Z===n.SHORT&&(ot=n.RGB16I),Z===n.INT&&(ot=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ot=n.RGBA32UI),Z===n.BYTE&&(ot=n.RGBA8I),Z===n.SHORT&&(ot=n.RGBA16I),Z===n.INT&&(ot=n.RGBA32I)),w===n.RGB&&(Z===n.UNSIGNED_SHORT&&yt&&(ot=yt.RGB16_EXT),Z===n.SHORT&&yt&&(ot=yt.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),w===n.RGBA){let it=St?Dr:ge.getTransfer(at);Z===n.FLOAT&&(ot=n.RGBA32F),Z===n.HALF_FLOAT&&(ot=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ot=it===Ie?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&yt&&(ot=yt.RGBA16_EXT),Z===n.SHORT&&yt&&(ot=yt.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function p(N,w){let Z;return N?w===null||w===Zn||w===bs?Z=n.DEPTH24_STENCIL8:w===Fn?Z=n.DEPTH32F_STENCIL8:w===sr&&(Z=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zn||w===bs?Z=n.DEPTH_COMPONENT24:w===Fn?Z=n.DEPTH_COMPONENT32F:w===sr&&(Z=n.DEPTH_COMPONENT16),Z}function v(N,w){return T(N)===!0||N.isFramebufferTexture&&N.minFilter!==an&&N.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function A(N){let w=new WeakRef(N);i.get(N).__ref=w,_.add(w),M.register(N,w,w)}function I(N){let w=i.get(N).__ref;w!==void 0&&(_.delete(w),M.unregister(w))}function P(N){F(N.target)}function G(N){L(N.target)}function F(N){N.removeEventListener("dispose",P),I(N),q(N),N.isVideoTexture&&u.delete(N),N.isHTMLTexture&&d.delete(N)}function L(N){N.removeEventListener("dispose",G),I(N),Q(N)}function B(){for(let N of _){let w=N.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):F(w))}_.clear(),d.clear()}function q(N){let w=i.get(N);if(w.__webglInit===void 0)return;let Z=N.source,ut=h.get(Z);if(ut){let at=ut[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&H(N),Object.keys(ut).length===0&&h.delete(Z)}i.remove(N)}function H(N){let w=i.get(N);n.deleteTexture(w.__webglTexture);let Z=N.source,ut=h.get(Z);delete ut[w.__cacheKey],o.memory.textures--}function Q(N){let w=i.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Z=N.depthTexture;if(Z&&Z.renderTarget===N&&F(Z),N.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(w.__webglFramebuffer[at]))for(let St=0;St<w.__webglFramebuffer[at].length;St++)n.deleteFramebuffer(w.__webglFramebuffer[at][St]);else n.deleteFramebuffer(w.__webglFramebuffer[at]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[at])}else{if(Array.isArray(w.__webglFramebuffer))for(let at=0;at<w.__webglFramebuffer.length;at++)n.deleteFramebuffer(w.__webglFramebuffer[at]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let at=0;at<w.__webglColorRenderbuffer.length;at++)w.__webglColorRenderbuffer[at]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[at]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ut=N.textures;for(let at=0,St=ut.length;at<St;at++){let yt=i.get(ut[at]);yt.__webglTexture&&(n.deleteTexture(yt.__webglTexture),o.memory.textures--),i.remove(ut[at])}i.remove(N)}let k=0;function Y(){k=0}function et(){return k}function dt(N){k=N}function Mt(){let N=k;return N>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function K(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function ht(N,w){let Z=i.get(N);if(N.isVideoTexture&&Fe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){let ut=N.image;if(ut===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Z,N,w);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function wt(N,w){let Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ee(Z,N,w);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function Nt(N,w){let Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ee(Z,N,w);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function At(N,w){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){Ge(Z,N,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}let Ht={[oa]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[aa]:n.MIRRORED_REPEAT},fe={[an]:n.NEAREST,[Pu]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},Wt={[Uu]:n.NEVER,[Vc]:n.ALWAYS,[Fu]:n.LESS,[kc]:n.LEQUAL,[Ou]:n.EQUAL,[Gc]:n.GEQUAL,[zu]:n.GREATER,[Bu]:n.NOTEQUAL};function he(N,w){if(w.type===Fn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===Pa||w.magFilter===jr||w.magFilter===Ai||w.minFilter===ln||w.minFilter===Pa||w.minFilter===jr||w.minFilter===Ai)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Ht[w.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Ht[w.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Ht[w.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,fe[w.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Wt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===an||w.minFilter!==jr&&w.minFilter!==Ai||w.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function pe(N,w){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",P),A(w));let ut=w.source,at=h.get(ut);at===void 0&&(at={},h.set(ut,at));let St=K(w);if(St!==N.__cacheKey){at[St]===void 0&&(at[St]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),at[St].usedTimes++;let yt=at[N.__cacheKey];yt!==void 0&&(at[N.__cacheKey].usedTimes--,yt.usedTimes===0&&H(w)),N.__cacheKey=St,N.__webglTexture=at[St].texture}return Z}function Qt(N,w,Z){return Math.floor(Math.floor(N/Z)/w)}function rt(N,w,Z,ut){let St=N.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Z,ut,w.data);else{St.sort((O,st)=>O.start-st.start);let yt=0;for(let O=1;O<St.length;O++){let st=St[yt],nt=St[O],Tt=st.start+st.count,mt=Qt(nt.start,w.width,4),vt=Qt(st.start,w.width,4);nt.start<=Tt+1&&mt===vt&&Qt(nt.start+nt.count-1,w.width,4)===mt?st.count=Math.max(st.count,nt.start+nt.count-st.start):(++yt,St[yt]=nt)}St.length=yt+1;let ot=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let O=0,st=St.length;O<st;O++){let nt=St[O],Tt=Math.floor(nt.start/4),mt=Math.ceil(nt.count/4),vt=Tt%w.width,Ut=Math.floor(Tt/w.width),Jt=mt,xt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ut),e.texSubImage2D(n.TEXTURE_2D,0,vt,Ut,Jt,xt,Z,ut,w.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ot),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,pt)}}function Ee(N,w,Z){let ut=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ut=n.TEXTURE_3D);let at=pe(N,w),St=w.source;e.bindTexture(ut,N.__webglTexture,n.TEXTURE0+Z);let yt=i.get(St);if(St.version!==yt.__version||at===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let xt=ge.getPrimaries(ge.workingColorSpace),Ot=w.colorSpace===Ci?null:ge.getPrimaries(w.colorSpace),te=w.colorSpace===Ci||xt===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let it=y(w.image,!1,s.maxTextureSize);it=Xt(w,it);let pt=r.convert(w.format,w.colorSpace),O=r.convert(w.type),st=b(w.internalFormat,pt,O,w.normalized,w.colorSpace,w.isVideoTexture);he(ut,w);let nt,Tt=w.mipmaps,mt=w.isVideoTexture!==!0,vt=yt.__version===void 0||at===!0,Ut=St.dataReady,Jt=v(w,it);if(w.isDepthTexture)st=p(w.format===Ei,w.type),vt&&(mt?e.texStorage2D(n.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,pt,O,null));else if(w.isDataTexture)if(Tt.length>0){mt&&vt&&e.texStorage2D(n.TEXTURE_2D,Jt,st,Tt[0].width,Tt[0].height);for(let xt=0,Ot=Tt.length;xt<Ot;xt++)nt=Tt[xt],mt?Ut&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,nt.width,nt.height,pt,O,nt.data):e.texImage2D(n.TEXTURE_2D,xt,st,nt.width,nt.height,0,pt,O,nt.data);w.generateMipmaps=!1}else mt?(vt&&e.texStorage2D(n.TEXTURE_2D,Jt,st,it.width,it.height),Ut&&rt(w,it,pt,O)):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,pt,O,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){mt&&vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Jt,st,Tt[0].width,Tt[0].height,it.depth);for(let xt=0,Ot=Tt.length;xt<Ot;xt++)if(nt=Tt[xt],w.format!==In)if(pt!==null)if(mt){if(Ut)if(w.layerUpdates.size>0){let te=$c(nt.width,nt.height,w.format,w.type);for(let It of w.layerUpdates){let Se=nt.data.subarray(It*te/nt.data.BYTES_PER_ELEMENT,(It+1)*te/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,It,nt.width,nt.height,1,pt,Se)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,nt.width,nt.height,it.depth,pt,nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xt,st,nt.width,nt.height,it.depth,0,nt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,nt.width,nt.height,it.depth,pt,O,nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,xt,st,nt.width,nt.height,it.depth,0,pt,O,nt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{mt&&vt&&e.texStorage2D(n.TEXTURE_2D,Jt,st,Tt[0].width,Tt[0].height);for(let xt=0,Ot=Tt.length;xt<Ot;xt++)nt=Tt[xt],w.format!==In?pt!==null?mt?Ut&&e.compressedTexSubImage2D(n.TEXTURE_2D,xt,0,0,nt.width,nt.height,pt,nt.data):e.compressedTexImage2D(n.TEXTURE_2D,xt,st,nt.width,nt.height,0,nt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Ut&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,nt.width,nt.height,pt,O,nt.data):e.texImage2D(n.TEXTURE_2D,xt,st,nt.width,nt.height,0,pt,O,nt.data)}else if(w.isDataArrayTexture)if(mt){if(vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Jt,st,it.width,it.height,it.depth),Ut)if(w.layerUpdates.size>0){let xt=$c(it.width,it.height,w.format,w.type);for(let Ot of w.layerUpdates){let te=it.data.subarray(Ot*xt/it.data.BYTES_PER_ELEMENT,(Ot+1)*xt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ot,it.width,it.height,1,pt,O,te)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,O,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,pt,O,it.data);else if(w.isData3DTexture)mt?(vt&&e.texStorage3D(n.TEXTURE_3D,Jt,st,it.width,it.height,it.depth),Ut&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,O,it.data)):e.texImage3D(n.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,pt,O,it.data);else if(w.isFramebufferTexture){if(vt)if(mt)e.texStorage2D(n.TEXTURE_2D,Jt,st,it.width,it.height);else{let xt=it.width,Ot=it.height;for(let te=0;te<Jt;te++)e.texImage2D(n.TEXTURE_2D,te,st,xt,Ot,0,pt,O,null),xt>>=1,Ot>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let xt=n.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),it.parentNode!==xt){xt.appendChild(it),d.add(w),xt.onpaint=Ot=>{let te=Ot.changedElements;for(let It of d)te.includes(It.image)&&(It.needsUpdate=!0)},xt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let te=n.RGBA,It=n.RGBA,Se=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,te,It,Se,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(mt&&vt){let xt=Zt(Tt[0]);e.texStorage2D(n.TEXTURE_2D,Jt,st,xt.width,xt.height)}for(let xt=0,Ot=Tt.length;xt<Ot;xt++)nt=Tt[xt],mt?Ut&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,pt,O,nt):e.texImage2D(n.TEXTURE_2D,xt,st,pt,O,nt);w.generateMipmaps=!1}else if(mt){if(vt){let xt=Zt(it);e.texStorage2D(n.TEXTURE_2D,Jt,st,xt.width,xt.height)}Ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,O,it)}else e.texImage2D(n.TEXTURE_2D,0,st,pt,O,it);T(w)&&w.mipmapsAutoUpdate===!0&&S(ut),yt.__version=St.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Ge(N,w,Z){if(w.image.length!==6)return;let ut=pe(N,w),at=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);let St=i.get(at);if(at.version!==St.__version||ut===!0){e.activeTexture(n.TEXTURE0+Z);let yt=ge.getPrimaries(ge.workingColorSpace),ot=w.colorSpace===Ci?null:ge.getPrimaries(w.colorSpace),it=w.colorSpace===Ci||yt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let pt=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,st=[];for(let It=0;It<6;It++)!pt&&!O?st[It]=y(w.image[It],!0,s.maxCubemapSize):st[It]=O?w.image[It].image:w.image[It],st[It]=Xt(w,st[It]);let nt=st[0],Tt=r.convert(w.format,w.colorSpace),mt=r.convert(w.type),vt=b(w.internalFormat,Tt,mt,w.normalized,w.colorSpace),Ut=w.isVideoTexture!==!0,Jt=St.__version===void 0||ut===!0,xt=at.dataReady,Ot=v(w,nt);he(n.TEXTURE_CUBE_MAP,w);let te;if(w.isDepthTexture){if(vt=p(w.format===Ei,w.type),Jt)if(Ut)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,vt,nt.width,nt.height);else for(let It=0;It<6;It++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,nt.width,nt.height,0,Tt,mt,null)}else if(pt){Ut&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,vt,nt.width,nt.height);for(let It=0;It<6;It++){te=st[It].mipmaps;for(let Se=0;Se<te.length;Se++){let He=te[Se];w.format!==In?Tt!==null?Ut?xt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se,0,0,He.width,He.height,Tt,He.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se,vt,He.width,He.height,0,He.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se,0,0,He.width,He.height,Tt,mt,He.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se,vt,He.width,He.height,0,Tt,mt,He.data)}}}else{if(te=w.mipmaps,Ut&&Jt){te.length>0&&Ot++;let It=Zt(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,vt,It.width,It.height)}for(let It=0;It<6;It++)if(O){Ut?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,st[It].width,st[It].height,Tt,mt,st[It].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,st[It].width,st[It].height,0,Tt,mt,st[It].data);for(let Se=0;Se<te.length;Se++){let wn=te[Se].image[It].image;Ut?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se+1,0,0,wn.width,wn.height,Tt,mt,wn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se+1,vt,wn.width,wn.height,0,Tt,mt,wn.data)}}else{Ut?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,Tt,mt,st[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,Tt,mt,st[It]);for(let Se=0;Se<te.length;Se++){let He=te[Se];Ut?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se+1,0,0,Tt,mt,He.image[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Se+1,vt,Tt,mt,He.image[It])}}}T(w)&&w.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),St.__version=at.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ve(N,w,Z,ut,at,St){let yt=r.convert(Z.format,Z.colorSpace),ot=r.convert(Z.type),it=b(Z.internalFormat,yt,ot,Z.normalized,Z.colorSpace),pt=i.get(w),O=i.get(Z);if(O.__renderTarget=w,!pt.__hasExternalTextures){let st=Math.max(1,w.width>>St),nt=Math.max(1,w.height>>St);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,St,it,st,nt,w.depth,0,yt,ot,null):e.texImage2D(at,St,it,st,nt,0,yt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),Et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,at,O.__webglTexture,0,Le(w)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,at,O.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function we(N,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),w.depthBuffer){let ut=w.depthTexture,at=ut&&ut.isDepthTexture?ut.type:null,St=p(w.stencilBuffer,at),yt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(w),St,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(w),St,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,St,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,N)}else{let ut=w.textures;for(let at=0;at<ut.length;at++){let St=ut[at],yt=r.convert(St.format,St.colorSpace),ot=r.convert(St.type),it=b(St.internalFormat,yt,ot,St.normalized,St.colorSpace);Et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(w),it,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(w),it,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,it,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(N,w,Z){let ut=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(w.depthTexture);at.__renderTarget=w;let St=ut?w.depthTexture.image[0]:w.depthTexture.image;(!at.__webglTexture||St.width!==w.width||St.height!==w.height)&&(St.width=w.width,St.height=w.height,w.depthTexture.needsUpdate=!0),ut?At(w.depthTexture,0):ht(w.depthTexture,0);let yt=at.__webglTexture,ot=Le(w),it=ut?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,pt=w.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Si)Et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,it,yt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,pt,it,yt,0);else if(w.depthTexture.format===Ei)Et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,it,yt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,pt,it,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(N){let w=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let ut=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ut){let at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ut.removeEventListener("dispose",at)};ut.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=ut}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let ut=0;ut<6;ut++)Pt(w.__webglFramebuffer[ut],N,ut);else N.texture.mipmaps.length>0?Pt(w.__webglFramebuffer[0],N,0):Pt(w.__webglFramebuffer,N,0);else if(Z){w.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ut]),w.__webglDepthbuffer[ut]===void 0)w.__webglDepthbuffer[ut]=n.createRenderbuffer(),we(w.__webglDepthbuffer[ut],N,!1);else{let at=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=w.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,St)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),we(w.__webglDepthbuffer,N,!1);else{let at=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,St)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(N,w,Z){let ut=i.get(N);w!==void 0&&ve(ut.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ae(N)}function Ce(N){let w=N.texture,Z=i.get(N),ut=i.get(w);N.addEventListener("dispose",G),A(N);let at=N.textures,St=N.isWebGLCubeRenderTarget===!0,yt=at.length>1;if(yt||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=w.version,o.memory.textures++),St){Z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(w.mipmaps.length>0){Z.__webglFramebuffer[ot]=[];for(let it=0;it<w.mipmaps.length;it++)Z.__webglFramebuffer[ot][it]=n.createFramebuffer()}else Z.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ot=0;ot<w.mipmaps.length;ot++)Z.__webglFramebuffer[ot]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ot=0,it=at.length;ot<it;ot++){let pt=i.get(at[ot]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Et(N)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ot=0;ot<at.length;ot++){let it=at[ot];Z.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ot]);let pt=r.convert(it.format,it.colorSpace),O=r.convert(it.type),st=b(it.internalFormat,pt,O,it.normalized,it.colorSpace,N.isXRRenderTarget===!0),nt=Le(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,st,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),we(Z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),he(n.TEXTURE_CUBE_MAP,w);for(let ot=0;ot<6;ot++)if(w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)ve(Z.__webglFramebuffer[ot][it],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,it);else ve(Z.__webglFramebuffer[ot],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);T(w)?S(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let ot=0,it=at.length;ot<it;ot++){let pt=at[ot],O=i.get(pt),st=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,O.__webglTexture),he(st,pt),ve(Z.__webglFramebuffer,N,pt,n.COLOR_ATTACHMENT0+ot,st,0),T(pt)&&S(st)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ot=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,ut.__webglTexture),he(ot,w),w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)ve(Z.__webglFramebuffer[it],N,w,n.COLOR_ATTACHMENT0,ot,it);else ve(Z.__webglFramebuffer,N,w,n.COLOR_ATTACHMENT0,ot,0);T(w)?S(ot):w.mipmaps.length>0&&n.texParameteri(ot,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&ae(N)}function X(N){let w=N.textures;for(let Z=0,ut=w.length;Z<ut;Z++){let at=w[Z];if(T(at)&&at.mipmapsAutoUpdate===!0){let St=R(N),yt=i.get(at).__webglTexture;e.bindTexture(St,yt),S(St),e.unbindTexture()}}}let re=[];function jt(N){if(N.samples>0){if(Et(N)===!1){let w=N.textures,Z=N.width,ut=N.height,at=n.COLOR_BUFFER_BIT,St=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(N),ot=w.length>1;if(ot)for(let pt=0;pt<w.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<w.length;pt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);let O=i.get(w[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,Z,ut,0,0,Z,ut,at,n.NEAREST),l===!0&&(re.length=0,re.push(n.COLOR_ATTACHMENT0+pt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&re.push(St),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<w.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);let O=i.get(w[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Le(N){return Math.min(s.maxSamples,N.samples)}function Et(N){let w=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(N){let w=o.render.frame;u.get(N)!==w&&(u.set(N,w),N.update())}function Xt(N,w){let Z=N.colorSpace,ut=N.format,at=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Lr&&Z!==Ci&&(ge.getTransfer(Z)===Ie?(ut!==In||at!==Sn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",Z)),w}function Zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=Mt,this.resetTextureUnits=Y,this.getTextureUnits=et,this.setTextureUnits=dt,this.setTexture2D=ht,this.setTexture2DArray=wt,this.setTexture3D=Nt,this.setTextureCube=At,this.rebindTextures=ue,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Et,this.dispose=B}function u_(n,t){function e(i,s=Ci){let r,o=ge.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Da)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Na)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return n.BYTE;if(i===Uc)return n.SHORT;if(i===sr)return n.UNSIGNED_SHORT;if(i===La)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Jn)return n.HALF_FLOAT;if(i===zc)return n.ALPHA;if(i===Bc)return n.RGB;if(i===In)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===Ua)return n.RED;if(i===Fa)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===Oa)return n.RG_INTEGER;if(i===za)return n.RGBA_INTEGER;if(i===to||i===eo||i===no||i===io)if(o===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ba||i===ka||i===Ga||i===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===so||i===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ha||i===Wa)return o===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qa)return r.COMPRESSED_R11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(i===so)return r.COMPRESSED_RG11_EAC;if(i===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ja||i===Ka||i===$a||i===Qa||i===ja||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ja)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===hl||i===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===cl)return o===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===fl||i===ro||i===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Un({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends ei{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null,M=typeof XRWebGLBinding<"u",m=new oh,g={},y=e.getContextAttributes(),T=null,S=null,R=[],b=[],p=new oe,v=null,A=null,I=new _n;I.viewport=new ke;let P=new _n;P.viewport=new ke;let G=[I,P],F=new Ca,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=R[K];return ht===void 0&&(ht=new js,R[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=R[K];return ht===void 0&&(ht=new js,R[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=R[K];return ht===void 0&&(ht=new js,R[K]=ht),ht.getHandSpace()};function q(K){let ht=b.indexOf(K.inputSource);if(ht===-1)return;let wt=R[ht];wt!==void 0&&(wt.update(K.inputSource,K.frame,c||o),wt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let K=0;K<R.length;K++){let ht=b[K];ht!==null&&(b[K]=null,R[K].disconnect(ht))}L=null,B=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(T),h=null,f=null,d=null,s=null,S=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(p.width,p.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(p),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Nt=null,At=null;y.depth&&(At=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=y.stencil?Ei:Si,Nt=y.stencil?bs:Zn);let Ht={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Cn(f.textureWidth,f.textureHeight,{format:In,type:Sn,depthTexture:new wi(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let wt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Cn(h.framebufferWidth,h.framebufferHeight,{format:In,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(K){for(let ht=0;ht<K.removed.length;ht++){let wt=K.removed[ht],Nt=b.indexOf(wt);Nt>=0&&(b[Nt]=null,R[Nt].disconnect(wt))}for(let ht=0;ht<K.added.length;ht++){let wt=K.added[ht],Nt=b.indexOf(wt);if(Nt===-1){for(let Ht=0;Ht<R.length;Ht++)if(Ht>=b.length){b.push(wt),Nt=Ht;break}else if(b[Ht]===null){b[Ht]=wt,Nt=Ht;break}if(Nt===-1)break}let At=R[Nt];At&&At.connect(wt)}}function k(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ht=K.near,wt=K.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),F.near=P.near=I.near=ht,F.far=P.far=I.far=wt,(L!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,B=F.far),F.layers.mask=K.layers.mask|6,I.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let Nt=K.parent,At=F.cameras;k(F,Nt);for(let Ht=0;Ht<At.length;Ht++)k(At[Ht],Nt);F.projectionMatrix.copy(I.projectionMatrix),F.projectionMatrixInverse.copy(I.projectionMatrixInverse),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,F,Nt)};function Y(K,ht,wt){wt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(wt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$s*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return g[K]};let et=null;function dt(K,ht){if(u=ht.getViewerPose(c||o),_=ht,u!==null){let wt=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let Nt=!1;wt.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let Wt=0;Wt<wt.length;Wt++){let he=wt[Wt],pe=null;if(h!==null)pe=h.getViewport(he);else{let rt=d.getViewSubImage(f,he);pe=rt.viewport,Wt===0&&(t.setRenderTargetTextures(S,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(S))}let Qt=G[Wt];Qt===void 0&&(Qt=new _n,Qt.layers.enable(Wt),Qt.viewport=new ke,G[Wt]=Qt),Qt.matrix.fromArray(he.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(he.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(pe.x,pe.y,pe.width,pe.height),Wt===0&&(F.matrix.copy(Qt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(Qt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let Wt=d.getDepthInformation(wt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(At&&At.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Wt=0;Wt<wt.length;Wt++){let he=wt[Wt].camera;if(he){let pe=g[he];pe||(pe=new Hr,g[he]=pe);let Qt=d.getCameraImage(he);pe.sourceTexture=Qt}}}}for(let wt=0;wt<R.length;wt++){let Nt=b[wt],At=R[wt];Nt!==null&&At!==void 0&&At.update(Nt,ht,c||o)}et&&et(K,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),_=null}let Mt=new _d;Mt.setAnimationLoop(dt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},p_=new be,Cd=new ee;Cd.set(-1,0,0,0,1,0,0,0,1);function m_(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Zc(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,T,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),_(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),M(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),T=y.envMap,S=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function M(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function g_(n,t,e,i){let s={},r={};function o(y,T){let S=T.program;i.uniformBlockBinding(y,S,s[y.id])}function a(y,T){let S=s[y.id];S===void 0&&(_(y),S=l(y),s[y.id]=S,y.addEventListener("dispose",m));let R=T.program;i.updateUBOMapping(y,R);let b=t.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function l(y){let T=n.createBuffer(),S=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,S,R),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(y){let T=s[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let b=0,p=S.length;b<p;b++){let v=S[b];if(Array.isArray(v))for(let A=0,I=v.length;A<I;A++)u(v[A],b,A,R);else u(v,b,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,T,S,R){if(f(y,T,S,R)===!0){let b=y.__offset,p=y.value;if(Array.isArray(p)){let v=0;for(let A=0;A<p.length;A++){let I=p[A],P=M(I,!0);d(I,y.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(p,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,y.__data)}}function d(y,T,S){typeof y=="number"||typeof y=="boolean"?T[S]=y:y.isMatrix3?(T[S]=y.elements[0],T[S+1]=y.elements[1],T[S+2]=y.elements[2],T[S+3]=0,T[S+4]=y.elements[3],T[S+5]=y.elements[4],T[S+6]=y.elements[5],T[S+7]=0,T[S+8]=y.elements[6],T[S+9]=y.elements[7],T[S+10]=y.elements[8],T[S+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-S),S):y.toArray(T,S)}function f(y,T,S,R){let b=y.value,p=T+"_"+S;if(Array.isArray(b)){R[p]===void 0&&(R[p]=[]);let v=R[p],A=!1;for(let I=0;I<b.length;I++)h(b[I],v,I)===!0&&(A=!0);return A}return h(b,R,p)}function h(y,T,S){if(T[S]===void 0)return typeof y=="number"||typeof y=="boolean"?T[S]=y:ArrayBuffer.isView(y)?T[S]=y.slice():T[S]=y.clone(),!0;{let R=T[S];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return T[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function _(y){let T=y.uniforms,S=0,R=16;for(let p=0,v=T.length;p<v;p++){let A=Array.isArray(T[p])?T[p]:[T[p]];for(let I=0,P=A.length;I<P;I++){let G=A[I],F=Array.isArray(G.value)?G.value:[G.value],L=Array.isArray(T[p])||Array.isArray(G.value),B=S;for(let H=0,Q=F.length;H<Q;H++){let k=F[H],Y=M(k,L),et=S%R,dt=et%Y.boundary,Mt=et+dt;S+=dt,Mt!==0&&R-Mt<Y.storage&&(S+=R-Mt),H===0&&(B=S),S+=Y.storage}let q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new q((S-B)/Float32Array.BYTES_PER_ELEMENT),G.__offset=B}}let b=S%R;return b>0&&(S+=R-b),y.__size=S,y.__cache={},this}function M(y,T){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(y){let T=y.target;T.removeEventListener("dispose",m),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var x_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function __(){return si===null&&(si=new ms(x_,16,16,ji,Jn),si.name="DFG_LUT",si.minFilter=ln,si.magFilter=ln,si.wrapS=ti,si.wrapT=ti,si.generateMipmaps=!1,si.needsUpdate=!0),si}var vl=class{constructor(t={}){let{canvas:e=Gu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Sn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=h,m=new Set([za,Oa,Fa]),g=new Set([Sn,Zn,sr,bs,Da,Na]),y=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},R=null,b=null,p=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,G=null,F=null,L=null,B=null;this._outputColorSpace=$e;let q=0,H=0,Q=null,k=-1,Y=null,et=new ke,dt=new ke,Mt=null,K=new se(0),ht=0,wt=e.width,Nt=e.height,At=1,Ht=null,fe=null,Wt=new ke(0,0,wt,Nt),he=new ke(0,0,wt,Nt),pe=!1,Qt=new Yi,rt=new fa,Ee=!1,Ge=!1,ve=new be,we=new W,Pt=new ke,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Ce(){return Q===null?At:1}let X=i;function re(E,V){return e.getContext(E,V)}let jt,Le,Et,Fe,Xt,Zt,N,w,Z,ut,at,St,yt,ot,it,pt,O,st,nt,Tt,mt,vt,Ut;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",It,!1),X===null){let V="webgl2";if(X=re(V,E),X===null)throw re(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(E){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",It,!1),ne("WebGLRenderer: "+E.message),E}function Jt(){jt=new Rg(X),jt.init(),mt=new u_(X,jt),Le=new _g(X,jt,t,mt),Et=new c_(X,jt),Le.reversedDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),F=X.createFramebuffer(),L=X.createFramebuffer(),B=X.createFramebuffer(),Fe=new Lg(X),Xt=new Jx,Zt=new h_(X,jt,Et,Xt,Le,mt,Fe),N=new Cg(I),w=new Np(X),vt=new gg(X,w),Z=new Ig(X,w,Fe,vt),ut=new Ng(X,Z,w,vt,Fe),st=new Dg(X,Le,Zt),it=new yg(Xt),at=new Zx(I,N,jt,Le,vt,it),St=new m_(I,Xt),yt=new $x,ot=new i_(jt),O=new mg(I,N,Et,ut,_,l),pt=new l_(I,ut,Le),Ut=new g_(X,Fe,Le,Et),nt=new xg(X,jt,Fe),Tt=new Pg(X,jt,Fe),Fe.programs=at.programs,I.capabilities=Le,I.extensions=jt,I.properties=Xt,I.renderLists=yt,I.shadowMap=pt,I.state=Et,I.info=Fe}M!==Sn&&(A=new Fg(M,e.width,e.height,a,s,r));let xt=new ah(I,X);this.xr=xt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let E=jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(E){E!==void 0&&(At=E,this.setSize(wt,Nt,!1))},this.getSize=function(E){return E.set(wt,Nt)},this.setSize=function(E,V,tt=!0){if(xt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=E,Nt=V,e.width=Math.floor(E*At),e.height=Math.floor(V*At),tt===!0&&(e.style.width=E+"px",e.style.height=V+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(wt*At,Nt*At).floor()},this.setDrawingBufferSize=function(E,V,tt){wt=E,Nt=V,At=tt,e.width=Math.floor(E*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(M===Sn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(Wt)},this.setViewport=function(E,V,tt,$){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,V,tt,$),Et.viewport(et.copy(Wt).multiplyScalar(Ce()).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,V,tt,$){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,V,tt,$),Et.scissor(dt.copy(he).multiplyScalar(Ce()).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){Et.setScissorTest(pe=E)},this.setOpaqueSort=function(E){Ht=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,tt=!0){let $=0;if(E){let j=!1;if(Q!==null){let _t=Q.texture.format;j=m.has(_t)}if(j){let _t=Q.texture.type,zt=g.has(_t),Ct=O.getClearColor(),Lt=O.getClearAlpha(),Bt=Ct.r,ie=Ct.g,de=Ct.b;zt?(y[0]=Bt,y[1]=ie,y[2]=de,y[3]=Lt,X.clearBufferuiv(X.COLOR,0,y)):(T[0]=Bt,T[1]=ie,T[2]=de,T[3]=Lt,X.clearBufferiv(X.COLOR,0,T))}else $|=X.COLOR_BUFFER_BIT}V&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",It,!1),O.dispose(),yt.dispose(),ot.dispose(),Zt.dispose(),Xt.dispose(),N.dispose(),ut.dispose(),Z.dispose(),vt.dispose(),Ut.dispose(),at.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",ui),xt.removeEventListener("sessionend",di),kn.stop()};function Ot(E){E.preventDefault(),Wc("WebGLRenderer: Context Lost."),P=!0}function te(){Wc("WebGLRenderer: Context Restored."),P=!1;let E=Fe.autoReset,V=pt.enabled,tt=pt.autoUpdate,$=pt.needsUpdate,j=pt.type;Jt(),Fe.autoReset=E,pt.enabled=V,pt.autoUpdate=tt,pt.needsUpdate=$,pt.type=j}function It(E){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Se(E){let V=E.target;V.removeEventListener("dispose",Se),He(V)}function He(E){wn(E),Xt.remove(E)}function wn(E){let V=Xt.get(E).programs;V!==void 0&&(V.forEach(function(tt){at.releaseProgram(tt)}),E.isShaderMaterial&&at.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,tt,$,j,_t){V===null&&(V=ae);let zt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ct=Gl(E,V,tt,$,j);Et.setMaterial($,zt);let Lt=tt.index,Bt=1;if($.wireframe===!0){if(Lt=Z.getWireframeAttribute(tt),Lt===void 0)return;Bt=2}let ie=tt.drawRange,de=tt.attributes.position,kt=ie.start*Bt,le=(ie.start+ie.count)*Bt;_t!==null&&(kt=Math.max(kt,_t.start*Bt),le=Math.min(le,(_t.start+_t.count)*Bt)),Lt!==null?(kt=Math.max(kt,0),le=Math.min(le,Lt.count)):de!=null&&(kt=Math.max(kt,0),le=Math.min(le,de.count));let We=le-kt;if(We<0||We===1/0)return;vt.setup(j,$,Ct,tt,Lt);let me,Ae=nt;if(Lt!==null&&(me=w.get(Lt),Ae=Tt,Ae.setIndex(me)),j.isMesh)$.wireframe===!0?(Et.setLineWidth($.wireframeLinewidth*Ce()),Ae.setMode(X.LINES)):Ae.setMode(X.TRIANGLES);else if(j.isLine){let sn=$.linewidth;sn===void 0&&(sn=1),Et.setLineWidth(sn*Ce()),j.isLineSegments?Ae.setMode(X.LINES):j.isLineLoop?Ae.setMode(X.LINE_LOOP):Ae.setMode(X.LINE_STRIP)}else j.isPoints?Ae.setMode(X.POINTS):j.isSprite&&Ae.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let sn=j._multiDrawStarts,Ft=j._multiDrawCounts,rn=j._multiDrawCount,_e=Lt?w.get(Lt).bytesPerElement:1,Gn=Xt.get($).currentProgram.getUniforms();for(let Oe=0;Oe<rn;Oe++)Gn.setValue(X,"_gl_DrawID",Oe),Ae.render(sn[Oe]/_e,Ft[Oe])}else if(j.isInstancedMesh)Ae.renderInstances(kt,We,j.count);else if(tt.isInstancedBufferGeometry){let sn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ft=Math.min(tt.instanceCount,sn);Ae.renderInstances(kt,We,Ft)}else Ae.render(kt,We)};function os(E,V,tt,$){G!==null&&E.isNodeMaterial&&G.setObject($,E),Ee===!0&&it.setState(E,tt,!1),E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Ni(E,V,$),E.side=Qi,E.needsUpdate=!0,Ni(E,V,$),E.side=gn):Ni(E,V,$)}this.compile=function(E,V,tt=null){tt===null&&(tt=E),G!==null&&G.renderStart(E,V,tt),b=ot.get(tt),b.init(V),v.push(b),tt.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),E!==tt&&E.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),G!==null&&G.updateLights(b.state.lightsArray),Ge=this.localClippingEnabled,Ee=it.init(this.clippingPlanes,Ge),Ee===!0&&it.setGlobalState(this.clippingPlanes,V),G!==null&&pt.render(b.state.shadowsArray,tt,V);let $=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let _t=j.material;if(_t)if(Array.isArray(_t))for(let zt=0;zt<_t.length;zt++){let Ct=_t[zt];os(Ct,tt,V,j),$.add(Ct)}else os(_t,tt,V,j),$.add(_t)}),b=v.pop(),G!==null&&G.renderEnd(),$},this.compileAsync=function(E,V,tt=null){let $=this.compile(E,V,tt);return new Promise(j=>{function _t(){if($.forEach(function(zt){let Lt=Xt.get(zt).currentProgram;(Lt===void 0||Lt.isReady())&&$.delete(zt)}),$.size===0){j(E);return}setTimeout(_t,10)}jt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let as=null;function To(E){as&&as(E)}function ui(){kn.stop()}function di(){kn.start()}let kn=new _d;kn.setAnimationLoop(To),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){as=E,xt.setAnimationLoop(E),E===null?kn.stop():kn.start()},xt.addEventListener("sessionstart",ui),xt.addEventListener("sessionend",di),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;G!==null&&G.renderStart(E,V);let tt=xt.enabled===!0&&xt.isPresenting===!0,$=A!==null&&(Q===null||tt)&&A.begin(I,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(V),V=xt.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,V,Q),b=ot.get(E,v.length),b.init(V),b.state.textureUnits=Zt.getTextureUnits(),v.push(b),ve.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?rt.setFromArrayCamera(V):Qt.setFromProjectionMatrix(ve,Ln,V.reversedDepth),Ge=this.localClippingEnabled,Ee=it.init(this.clippingPlanes,Ge),R=yt.get(E,p.length),R.init(),p.push(R),this.info.render.frame++,xt.enabled===!0&&xt.isPresenting===!0){let zt=I.xr.getDepthSensingMesh();zt!==null&&ls(zt,V,-1/0,I.sortObjects)}ls(E,V,0,I.sortObjects),R.finish(),G!==null&&G.updateLights(b.state.lightsArray),I.sortObjects===!0&&R.sort(Ht,fe),ue=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,ue&&O.addToRenderList(R,E),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&it.beginShadows();let j=b.state.shadowsArray;if(pt.render(j,E,V),Ee===!0&&it.endShadows(),($&&A.hasRenderPass())===!1){let zt=R.opaque,Ct=R.transmissive;if(b.setupLights(),V.isArrayCamera){let Lt=V.cameras;if(Ct.length>0)for(let Bt=0,ie=Lt.length;Bt<ie;Bt++){let de=Lt[Bt];cs(zt,Ct,E,de)}ue&&O.render(E);for(let Bt=0,ie=Lt.length;Bt<ie;Bt++){let de=Lt[Bt];Ve(R,E,de,de.viewport)}}else Ct.length>0&&cs(zt,Ct,E,V),ue&&O.render(E),Ve(R,E,V)}Q!==null&&H===0&&(Zt.updateMultisampleRenderTarget(Q),Zt.updateRenderTargetMipmap(Q)),$&&A.end(I),E.isScene===!0&&E.onAfterRender(I,E,V),vt.resetDefaultState(),k=-1,Y=null,v.pop(),v.length>0?(b=v[v.length-1],Zt.setTextureUnits(b.state.textureUnits),Ee===!0&&it.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,p.pop(),p.length>0?R=p[p.length-1]:R=null,G!==null&&G.renderEnd()};function ls(E,V,tt,$){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)tt=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){let zt=V.isArrayCamera?rt:Qt;if(!E.frustumCulled||E.intersectsFrustum(zt)){$&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let Ct=ut.update(E),Lt=E.material;Lt.visible&&R.push(E,Ct,Lt,tt,Pt.z,null,V)}}else if(E.isMesh||E.isLine||E.isPoints){let zt=V.isArrayCamera?rt:Qt;if(!E.frustumCulled||E.intersectsFrustum(zt)){let Ct=ut.update(E),Lt=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Pt.copy(Ct.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Lt)){let Bt=Ct.groups;for(let ie=0,de=Bt.length;ie<de;ie++){let kt=Bt[ie],le=Lt[kt.materialIndex];le&&le.visible&&R.push(E,Ct,le,tt,Pt.z,kt,V)}}else Lt.visible&&R.push(E,Ct,Lt,tt,Pt.z,null,V)}}}let _t=E.children;for(let zt=0,Ct=_t.length;zt<Ct;zt++)ls(_t[zt],V,tt,$)}function Ve(E,V,tt,$){let{opaque:j,transmissive:_t,transparent:zt}=E;b.setupLightsView(tt),Ee===!0&&it.setGlobalState(I.clippingPlanes,tt),$&&Et.viewport(et.copy($)),j.length>0&&vn(j,V,tt),_t.length>0&&vn(_t,V,tt),zt.length>0&&vn(zt,V,tt),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function cs(E,V,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[$.id]===void 0){let kt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[$.id]=new Cn(1,1,{generateMipmaps:!0,type:kt?Jn:Sn,minFilter:Ai,samples:Math.max(4,Le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let _t=b.state.transmissionRenderTarget[$.id],zt=$.viewport||et;_t.setSize(zt.z*I.transmissionResolutionScale,zt.w*I.transmissionResolutionScale);let Ct=I.getRenderTarget(),Lt=I.getActiveCubeFace(),Bt=I.getActiveMipmapLevel();I.setRenderTarget(_t),I.getClearColor(K),ht=I.getClearAlpha(),ht<1&&I.setClearColor(16777215,.5),I.clear(),ue&&O.render(tt);let ie=I.toneMapping;I.toneMapping=ii;let de=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),Ee===!0&&it.setGlobalState(I.clippingPlanes,$),vn(E,tt,$),Zt.updateMultisampleRenderTarget(_t),Zt.updateRenderTargetMipmap(_t),jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let le=0,We=V.length;le<We;le++){let me=V[le],{object:Ae,geometry:sn,material:Ft,group:rn}=me;if(Ft.side===gn&&Ae.layers.test($.layers)){let _e=Ft.side;Ft.side=un,Ft.needsUpdate=!0,Tn(Ae,tt,$,sn,Ft,rn),Ft.side=_e,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(Zt.updateMultisampleRenderTarget(_t),Zt.updateRenderTargetMipmap(_t))}I.setRenderTarget(Ct,Lt,Bt),I.setClearColor(K,ht),de!==void 0&&($.viewport=de),I.toneMapping=ie}function vn(E,V,tt){let $=V.isScene===!0?V.overrideMaterial:null;for(let j=0,_t=E.length;j<_t;j++){let zt=E[j],{object:Ct,geometry:Lt,group:Bt}=zt,ie=zt.material;ie.allowOverride===!0&&$!==null&&(ie=$),Ct.layers.test(tt.layers)&&Tn(Ct,V,tt,Lt,ie,Bt)}}function Tn(E,V,tt,$,j,_t){G!==null&&j.isNodeMaterial&&G.setObject(E,j),E.onBeforeRender(I,V,tt,$,j,_t),E.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(I,V,tt,$,E,_t),j.transparent===!0&&j.side===gn&&j.forceSinglePass===!1?(j.side=un,j.needsUpdate=!0,I.renderBufferDirect(tt,V,$,j,E,_t),j.side=Qi,j.needsUpdate=!0,I.renderBufferDirect(tt,V,$,j,E,_t),j.side=gn):I.renderBufferDirect(tt,V,$,j,E,_t),E.onAfterRender(I,V,tt,$,j,_t)}function Di(E){let V=0;for(let tt of E)tt.texture!==null&&V++;return V}function Ni(E,V,tt){V.isScene!==!0&&(V=ae);let $=Xt.get(E),j=b.state.lights,_t=b.state.shadowsArray,zt=j.state.version,Ct=at.getParameters(E,j.state,_t,V,tt,b.state.lightProbeGridArray),Lt=at.getProgramCacheKey(Ct),Bt=$.programs;$.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;let ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;$.envMap=N.get(E.envMap||$.environment,ie),$.envMapRotation=$.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Se),Bt=new Map,$.programs=Bt,$.programVariants=new Map);let de=Bt.get(Lt);if(de!==void 0){if($.currentProgram===de&&$.lightsStateVersion===zt)return Re(E,Ct),de}else Ct.uniforms=at.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,tt,Ct),E.onBeforeCompile(Ct,I),de=at.acquireProgram(Ct,Lt),Bt.set(Lt,de),$.uniforms=Ct.uniforms;let kt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=it.uniform),Re(E,Ct),$.needsLights=Fi(E),$.lightsStateVersion=zt,$.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.sunLights.value=j.state.sun,kt.sunLightShadows.value=j.state.sunShadow,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.sunShadowMatrix.value=j.state.sunShadowMatrix,kt.sunShadowCascade.value=j.state.sunShadowCascade,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.numLightProbeGrids=Di(b.state.lightProbeGridArray),$.currentProgram=de,$.uniformsList=null,de}function Ui(E,V,tt,$,j){let _t=Xt.get(E),zt=_t.currentProgram.id+","+$+","+j,Ct=_t.programVariants.get(zt);return Ct===void 0?(Ct=Ni(E,V,tt),_t.programVariants.set(zt,Ct)):(_t.currentProgram=Ct,_t.uniformsList=null,_t.outputColorSpace=$,_t.toneMapping=j),Ct}function vr(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=ar.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Re(E,V){let tt=Xt.get(E);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function Gl(E,V,tt,$,j){V.isScene!==!0&&(V=ae),Zt.resetTextureUnits();let _t=V.fog,zt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,Ct=Q===null?I.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ge.workingColorSpace,Lt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Bt=N.get($.envMap||zt,Lt),ie=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,de=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),kt=!!tt.morphAttributes.position,le=!!tt.morphAttributes.normal,We=!!tt.morphAttributes.color,me=ii;$.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(me=I.toneMapping);let Ae=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,sn=Ae!==void 0?Ae.length:0,Ft=Xt.get($),rn=b.state.lights;if(Ee===!0&&(Ge===!0||E!==Y)){let ze=E===Y&&$.id===k;it.setState($,E,ze)}let _e=!1,Gn=!1;$.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==rn.state.version||j.isBatchedMesh&&Ft.batching===!1||!j.isBatchedMesh&&Ft.batching===!0||j.isBatchedMesh&&Ft.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ft.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ft.instancing===!1||!j.isInstancedMesh&&Ft.instancing===!0||j.isSkinnedMesh&&Ft.skinning===!1||!j.isSkinnedMesh&&Ft.skinning===!0||j.isInstancedMesh&&Ft.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ft.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ft.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ft.instancingMorph===!1&&j.morphTexture!==null||Ft.envMap!==Bt||$.fog===!0&&Ft.fog!==_t||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==it.numPlanes||Ft.numIntersection!==it.numIntersection)||Ft.vertexAlphas!==ie||Ft.vertexTangents!==de||Ft.morphTargets!==kt||Ft.morphNormals!==le||Ft.morphColors!==We||Ft.morphTargetsCount!==sn||Ft.numLightProbeGrids!==Di(b.state.lightProbeGridArray)?_e=!0:(Ft.outputColorSpace!==Ct||Ft.toneMapping!==me)&&(Gn=!0):(_e=!0,Ft.__version=$.version);let Oe=Ft.currentProgram;(_e===!0||Gn===!0)&&(Oe=Gn===!0?Ui($,V,j,Ct,me):Ni($,V,j),G&&$.isNodeMaterial&&G.onUpdateProgram($,Oe,Ft));let Oi=!1,Qn=!1,fi=!1,ye=Oe.getUniforms(),Xe=Ft.uniforms;if(Et.useProgram(Oe.program)&&(Oi=!0,Qn=!0,fi=!0),$.id!==k&&(k=$.id,Qn=!0),Oi||Y!==E){Et.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ye.setValue(X,"projectionMatrix",E.projectionMatrix),ye.setValue(X,"viewMatrix",E.matrixWorldInverse);let qe=ye.map.cameraPosition;qe!==void 0&&qe.setValue(X,we.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&ye.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ye.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,Qn=!0,fi=!0)}if(Ft.needsLights&&(rn.state.sunShadowMap.length>0&&ye.setValue(X,"sunShadowMap",rn.state.sunShadowMap,Zt),rn.state.directionalShadowMap.length>0&&ye.setValue(X,"directionalShadowMap",rn.state.directionalShadowMap,Zt),rn.state.spotShadowMap.length>0&&ye.setValue(X,"spotShadowMap",rn.state.spotShadowMap,Zt),rn.state.pointShadowMap.length>0&&ye.setValue(X,"pointShadowMap",rn.state.pointShadowMap,Zt)),j.isSkinnedMesh){ye.setOptional(X,j,"bindMatrix"),ye.setOptional(X,j,"bindMatrixInverse");let ze=j.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ye.setValue(X,"boneTexture",ze.boneTexture,Zt))}j.isBatchedMesh&&(ye.setOptional(X,j,"batchingTexture"),ye.setValue(X,"batchingTexture",j._matricesTexture,Zt),ye.setOptional(X,j,"batchingIdTexture"),ye.setValue(X,"batchingIdTexture",j._indirectTexture,Zt),ye.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&ye.setValue(X,"batchingColorTexture",j._colorsTexture,Zt));let Mn=tt.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&st.update(j,tt,Oe),(Qn||Ft.receiveShadow!==j.receiveShadow)&&(Ft.receiveShadow=j.receiveShadow,ye.setValue(X,"receiveShadow",j.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(Xe.envMapIntensity.value=V.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=__()),Qn){if(ye.setValue(X,"toneMappingExposure",I.toneMappingExposure),Ft.needsLights&&Vl(Xe,fi),_t&&$.fog===!0&&St.refreshFogUniforms(Xe,_t),St.refreshMaterialUniforms(Xe,$,At,Nt,b.state.transmissionRenderTarget[E.id]),Ft.needsLights&&Ft.numLightProbeGrids>0){let ze=S,qe=0;for(let Vn of b.state.lightProbeGridArray)Vn.texture!==null&&(ze.textures[qe]=Vn.texture,ze.min[qe]=Vn.boundingBox.min,ze.max[qe]=Vn.boundingBox.max,ze.resolution[qe]=Vn.resolution,qe++);for(let Vn in ze)ze[Vn].length=qe;Xe.probesSH.value=ze.textures,Xe.probesMin.value=ze.min,Xe.probesMax.value=ze.max,Xe.probesResolution.value=ze.resolution}ar.upload(X,vr(Ft),Xe,Zt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ar.upload(X,vr(Ft),Xe,Zt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ye.setValue(X,"center",j.center),ye.setValue(X,"modelViewMatrix",j.modelViewMatrix),ye.setValue(X,"normalMatrix",j.normalMatrix),ye.setValue(X,"modelMatrix",j.matrixWorld),$.uniformsGroups!==void 0){let ze=$.uniformsGroups;for(let qe=0,Vn=ze.length;qe<Vn;qe++){let Ao=ze[qe];Ut.update(Ao,Oe),Ut.bind(Ao,Oe)}}return Oe}function Vl(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.sunLights.needsUpdate=V,E.sunLightShadows.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Fi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,V,tt){let $=Xt.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Xt.get(E.texture).__webglTexture=V,Xt.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){let tt=Xt.get(E);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,tt=0){Q=E,q=V,H=tt;let $=null,j=!1,_t=!1;if(E){let Ct=Xt.get(E);if(Ct.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(X.FRAMEBUFFER,Ct.__webglFramebuffer),et.copy(E.viewport),dt.copy(E.scissor),Mt=E.scissorTest,Et.viewport(et),Et.scissor(dt),Et.setScissorTest(Mt),k=-1;return}else if(Ct.__webglFramebuffer===void 0)Zt.setupRenderTarget(E);else if(Ct.__hasExternalTextures)Zt.rebindTextures(E,Xt.get(E.texture).__webglTexture,Xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ie=E.depthTexture;if(Ct.__boundDepthTexture!==ie){if(ie!==null&&Xt.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Zt.setupDepthRenderbuffer(E)}}let Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(_t=!0);let Bt=Xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?$=Bt[V][tt]:$=Bt[V],j=!0):E.samples>0&&Zt.useMultisampledRTT(E)===!1?$=Xt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?$=Bt[tt]:$=Bt,et.copy(E.viewport),dt.copy(E.scissor),Mt=E.scissorTest}else et.copy(Wt).multiplyScalar(At).floor(),dt.copy(he).multiplyScalar(At).floor(),Mt=pe;if(tt!==0&&($=F),Et.bindFramebuffer(X.FRAMEBUFFER,$)&&Et.drawBuffers(E,$),Et.viewport(et),Et.scissor(dt),Et.setScissorTest(Mt),j){let Ct=Xt.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ct.__webglTexture,tt)}else if(_t){let Ct=V;for(let Lt=0;Lt<E.textures.length;Lt++){let Bt=Xt.get(E.textures[Lt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Lt,Bt.__webglTexture,tt,Ct)}}else if(E!==null&&tt!==0){let Ct=Xt.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ct.__webglTexture,tt)}k=-1};function Mr(E){let V=Xt.get(E);return(V.__readFormat!==E.format||V.__readType!==E.type)&&(V.__readFormat=E.format,V.__readType=E.type,V.__formatReadable=Le.textureFormatReadable(E.format),V.__typeReadable=Le.textureTypeReadable(E.type)),V}this.readRenderTargetPixels=function(E,V,tt,$,j,_t,zt,Ct=0){if(!(E&&E.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&zt!==void 0&&(Lt=Lt[zt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){Et.bindFramebuffer(X.FRAMEBUFFER,Lt);try{let Bt=E.textures[Ct],ie=Bt.format,de=Bt.type;E.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ct);let kt=Mr(Bt);if(kt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-$&&tt>=0&&tt<=E.height-j&&X.readPixels(V,tt,$,j,mt.convert(ie),mt.convert(de),_t)}finally{let Bt=Q!==null?Xt.get(Q).__webglFramebuffer:null;Et.bindFramebuffer(X.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,V,tt,$,j,_t,zt,Ct=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&zt!==void 0&&(Lt=Lt[zt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(V>=0&&V<=E.width-$&&tt>=0&&tt<=E.height-j){Et.bindFramebuffer(X.FRAMEBUFFER,Lt);let Bt=E.textures[Ct],ie=Bt.format,de=Bt.type;E.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ct);let kt=Mr(Bt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.bufferData(X.PIXEL_PACK_BUFFER,_t.byteLength,X.STREAM_READ),X.readPixels(V,tt,$,j,mt.convert(ie),mt.convert(de),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let We=Q!==null?Xt.get(Q).__webglFramebuffer:null;Et.bindFramebuffer(X.FRAMEBUFFER,We);let me=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Hu(X,me,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,_t),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(le),X.deleteSync(me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,tt=0){let $=Math.pow(2,-tt),j=Math.floor(E.image.width*$),_t=Math.floor(E.image.height*$),zt=V!==null?V.x:0,Ct=V!==null?V.y:0;Zt.setTexture2D(E,0),X.copyTexSubImage2D(X.TEXTURE_2D,tt,0,0,zt,Ct,j,_t),Et.unbindTexture()},this.copyTextureToTexture=function(E,V,tt=null,$=null,j=0,_t=0){let zt,Ct,Lt,Bt,ie,de,kt,le,We,me=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(tt!==null)zt=tt.max.x-tt.min.x,Ct=tt.max.y-tt.min.y,Lt=tt.isBox3?tt.max.z-tt.min.z:1,Bt=tt.min.x,ie=tt.min.y,de=tt.isBox3?tt.min.z:0;else{let ye=Math.pow(2,-j);zt=Math.floor(me.width*ye),Ct=Math.floor(me.height*ye),E.isDataArrayTexture?Lt=me.depth:E.isData3DTexture?Lt=Math.floor(me.depth*ye):Lt=1,Bt=0,ie=0,de=0}$!==null?(kt=$.x,le=$.y,We=$.z):(kt=0,le=0,We=0);let Ae=mt.convert(V.format),sn=mt.convert(V.type),Ft;V.isData3DTexture?(Zt.setTexture3D(V,0),Ft=X.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Zt.setTexture2DArray(V,0),Ft=X.TEXTURE_2D_ARRAY):(Zt.setTexture2D(V,0),Ft=X.TEXTURE_2D),Et.activeTexture(X.TEXTURE0),Et.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),Et.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Et.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);let rn=Et.getParameter(X.UNPACK_ROW_LENGTH),_e=Et.getParameter(X.UNPACK_IMAGE_HEIGHT),Gn=Et.getParameter(X.UNPACK_SKIP_PIXELS),Oe=Et.getParameter(X.UNPACK_SKIP_ROWS),Oi=Et.getParameter(X.UNPACK_SKIP_IMAGES);Et.pixelStorei(X.UNPACK_ROW_LENGTH,me.width),Et.pixelStorei(X.UNPACK_IMAGE_HEIGHT,me.height),Et.pixelStorei(X.UNPACK_SKIP_PIXELS,Bt),Et.pixelStorei(X.UNPACK_SKIP_ROWS,ie),Et.pixelStorei(X.UNPACK_SKIP_IMAGES,de);let Qn=E.isDataArrayTexture||E.isData3DTexture,fi=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){let ye=Xt.get(E),Xe=Xt.get(V),Mn=Xt.get(ye.__renderTarget),ze=Xt.get(Xe.__renderTarget);Et.bindFramebuffer(X.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Et.bindFramebuffer(X.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let qe=0;qe<Lt;qe++)Qn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xt.get(E).__webglTexture,j,de+qe),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xt.get(V).__webglTexture,_t,We+qe)),X.blitFramebuffer(Bt,ie,Bt+zt,ie+Ct,kt,le,kt+zt,le+Ct,X.DEPTH_BUFFER_BIT,X.NEAREST);Et.bindFramebuffer(X.READ_FRAMEBUFFER,null),Et.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||Xt.has(E)){let ye=Xt.get(E),Xe=Xt.get(V);Et.bindFramebuffer(X.READ_FRAMEBUFFER,L),Et.bindFramebuffer(X.DRAW_FRAMEBUFFER,B);for(let Mn=0;Mn<Lt;Mn++)Qn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ye.__webglTexture,j,de+Mn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ye.__webglTexture,j),fi?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,_t,We+Mn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Xe.__webglTexture,_t),j!==0?X.blitFramebuffer(Bt,ie,Bt+zt,ie+Ct,kt,le,kt+zt,le+Ct,X.COLOR_BUFFER_BIT,X.NEAREST):fi?X.copyTexSubImage3D(Ft,_t,kt,le,We+Mn,Bt,ie,zt,Ct):X.copyTexSubImage2D(Ft,_t,kt,le,Bt,ie,zt,Ct);Et.bindFramebuffer(X.READ_FRAMEBUFFER,null),Et.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else fi?E.isDataTexture||E.isData3DTexture?X.texSubImage3D(Ft,_t,kt,le,We,zt,Ct,Lt,Ae,sn,me.data):V.isCompressedArrayTexture?X.compressedTexSubImage3D(Ft,_t,kt,le,We,zt,Ct,Lt,Ae,me.data):X.texSubImage3D(Ft,_t,kt,le,We,zt,Ct,Lt,Ae,sn,me):E.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,_t,kt,le,zt,Ct,Ae,sn,me.data):E.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,_t,kt,le,me.width,me.height,Ae,me.data):X.texSubImage2D(X.TEXTURE_2D,_t,kt,le,zt,Ct,Ae,sn,me);Et.pixelStorei(X.UNPACK_ROW_LENGTH,rn),Et.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_e),Et.pixelStorei(X.UNPACK_SKIP_PIXELS,Gn),Et.pixelStorei(X.UNPACK_SKIP_ROWS,Oe),Et.pixelStorei(X.UNPACK_SKIP_IMAGES,Oi),_t===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&X.generateMipmap(Ft),Et.unbindTexture()},this.initRenderTarget=function(E){Xt.get(E).__webglFramebuffer===void 0&&Zt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Zt.setTextureCube(E,0):E.isData3DTexture?Zt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Zt.setTexture2DArray(E,0):Zt.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){q=0,H=0,Q=null,Et.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var oi=[-57,-19,19,57],Kn=[-38,0,38],uo={x:11.7,z:3.2},cr={x:12.05,z:-5.45},Ri={x:2,z:38},bn={x:38,z:-38},Rd={x:42.3,z:-41.25},Me=(n,t,e)=>Math.max(t,Math.min(e,n)),ft=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z);function On(n,t,e,i){return Math.abs(n)+e<65&&Math.abs(t)+e<65&&i.every(s=>{if(s.off)return!0;let r=n-Me(n,s.x-s.w/2,s.x+s.w/2),o=t-Me(t,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=e*e})}function fo(n,t,e,i,s){let r=n.x,o=n.z;return On(t,n.z,i,s)&&(n.x=t),On(n.x,e,i,s)&&(n.z=e),n.x!==r||n.z!==o}function ai(n,t,e){let i=Math.atan2(Math.sin(t-n),Math.cos(t-n));return n+Me(i,-e,e)}function Id(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function bl(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new je;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0,h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in d.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(d.attributes[_]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in d.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[_].length!==n[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;o[_]===void 0&&(o[_]=[]),o[_].push(d.morphAttributes[_]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let _;if(e)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,u),c+=_}}if(e){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let _=0;_<h.count;++_)d.push(h.getX(_)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Pd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let M=0;M<o[u].length;++M)h.push(o[u][M][f]);let _=Pd(h);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function Pd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new cn(o,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let f=0,h=u.count;f<h;f++)for(let _=0;_<e;_++){let M=u.getComponent(f,_);a.setComponent(f+d,_,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var po=new W;function zn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;po.copy(t),po[i]=0,po.normalize();let c=.5*o/(o+a),u=1-po.angleTo(n)/l;return Math.sign(po[e])===1?u*c:a/(o+a)+c+c*(1-u)}var wl=class n extends mn{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new W,c=new W,u=new W(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,_=d.length/6,M=new W,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/_)){case 0:M.set(1,0,0),h[y+0]=zn(M,c,"z","y",r,i),h[y+1]=1-zn(M,c,"y","z",r,e);break;case 1:M.set(-1,0,0),h[y+0]=1-zn(M,c,"z","y",r,i),h[y+1]=1-zn(M,c,"y","z",r,e);break;case 2:M.set(0,1,0),h[y+0]=1-zn(M,c,"x","z",r,t),h[y+1]=zn(M,c,"z","x",r,i);break;case 3:M.set(0,-1,0),h[y+0]=1-zn(M,c,"x","z",r,t),h[y+1]=1-zn(M,c,"z","x",r,i);break;case 4:M.set(0,0,1),h[y+0]=1-zn(M,c,"x","y",r,t),h[y+1]=1-zn(M,c,"y","x",r,e);break;case 5:M.set(0,0,-1),h[y+0]=zn(M,c,"x","y",r,t),h[y+1]=1-zn(M,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Ld={car:{width:.99,length:2.41,radius:.98,offsets:[-1.43,0,1.43],mass:1.1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},go=n=>Ld[n]??Ld.car;function ts(n,t){for(let e of n.cracks??[])e.removeFromParent();n.cracks&&(n.cracks.length=0),Object.assign(n,t,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function Ii(n,t,e,i,s="car"){let r=Math.sin(e),o=Math.cos(e),{offsets:a,radius:l}=go(s);return a.every(c=>On(n+r*c,t+o*c,l,i))}function Pi(n,t,e,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=t-n.x,a=e-n.z,{width:l,length:c}=go(n.kind),u=Math.abs(o*r-a*s)-l,d=Math.abs(o*s+a*r)-c;return u<=0&&d<=0||Math.hypot(Math.max(0,u),Math.max(0,d))<i}function es(n,t=0){let{width:e,length:i}=go(n),s=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t));return{width:e*s+i*r,length:i*s+e*r}}function ch(n,t,e,i=n){return Ii(n.x,n.z,n.angle,t,n.kind)&&!mo(i,n.x,n.z,n.angle,e)}function mo(n,t,e,i,s){let r=Math.sin(i),o=Math.cos(i),a=go(n.kind);for(let l of s){if(l===n||Math.abs(l.x-t)>4.5||Math.abs(l.z-e)>4.5)continue;let c=Math.sin(l.angle),u=Math.cos(l.angle),d=go(l.kind),f=a.radius+d.radius,h=f,_=0,M=0;for(let m of a.offsets)for(let g of d.offsets){let y=t+r*m-l.x-c*g,T=e+o*m-l.z-u*g,S=Math.hypot(y,T);if(S>=h)continue;h=S;let R=Math.hypot(t-l.x,e-l.z);_=S>.02?y/S:R>.02?(t-l.x)/R:r,M=S>.02?T/S:R>.02?(e-l.z)/R:o}if(h<f)return{other:l,nx:_,nz:M,mass:a.mass,otherMass:d.mass}}return null}function lh(n,t){t<2.4||(n.integrity=Math.max(0,n.integrity-(t-2.4)*2.6),n.impact=Math.max(n.impact,t))}function li(n,t,e,i,s){let{brake:r}=e,o=n.kind==="bike",a=n.integrity>0?e.throttle:0,l=n.integrity>0?e.steer:0;n.impact=Math.max(0,n.impact-t*21),n.steer+=(l-n.steer)*(1-Math.exp(-t*10));let c=Math.sin(n.angle),u=Math.cos(n.angle),d=n.vx*c+n.vz*u,f=Math.sign(a)*d<-.6?28:a<0?o?4.7:10:o?19.7:15.4;d=Me(d+a*f*t,o?-2.7:-8.4,o?31:27);let h=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;d*=Math.exp(-t*h);let _=o?r?5.2:13.5:r?2.15:8.1,M=(n.vx*u-n.vz*c)*Math.exp(-t*_);n.vx=d*c+M*u,n.vz=d*u-M*c;let m=Me(1.9-Math.abs(d)/24,.75,1.65),g=n.steer*t*m*Math.min(1,Math.abs(d)/2.1)*Math.sign(d),y=n.angle+g*(o?1.26:r?1.58:1);Ii(n.x,n.z,y,i,n.kind)&&!mo(n,n.x,n.z,y,s)&&(n.angle=y);let T=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*t/.34)),S=t/T;for(let R=0;R<T;R++){let b=n.x+n.vx*S,p=n.z+n.vz*S,v=mo(n,b,p,n.angle,s);if(v){let{other:A,nx:I,nz:P,mass:G,otherMass:F}=v,L=n.vx*I+n.vz*P,B=L-(A.vx*I+A.vz*P);if(B<0&&L<0){let H=-B*1.22/(1/G+1/F);n.vx+=I*H/G,n.vz+=P*H/G,A.vx-=I*H/F,A.vz-=P*H/F,lh(n,-B),lh(A,-B*.9);break}let q=Math.hypot(n.x-A.x,n.z-A.z);if(Math.hypot(b-A.x,p-A.z)<=q)break}if(Ii(b,p,n.angle,i,n.kind))n.x=b,n.z=p;else{let A=Ii(b,n.z,n.angle,i,n.kind)&&!mo(n,b,n.z,n.angle,s),I=Ii(n.x,p,n.angle,i,n.kind)&&!mo(n,n.x,p,n.angle,s),P=Math.hypot(A?0:n.vx,I?0:n.vz);A!==I?(A&&(n.x=b),I&&(n.z=p),n.vx*=A?.84:-.22,n.vz*=I?.84:-.22):(n.vx*=-.21,n.vz*=-.21),lh(n,P||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function Bn(n,t){let e=0;return Kn.some(i=>Math.abs(n-i)<=13.55)&&Kn.some(i=>Math.abs(t-i)<=13.55)&&(e=.16),Math.abs(n-38)<6.05&&Math.abs(t+38)<5.04&&(e=.228),Math.abs(n-2)<9.5&&Math.abs(t-38)<11&&(e=.191),n>-10.91&&n<-3.49&&Math.abs(t-38)<9.77&&(e=.234),e}function ci(n,t,e,i,s,r,o=.34){if(!On(t,e,o,i))return!1;for(let a of s)if(!(ft(a,{x:t,z:e})>3.4||!Pi(a,t,e,o))&&(!Pi(a,n.x,n.z,o)||ft(a,{x:t,z:e})<=ft(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let l=o+.28;if(ft(a,{x:t,z:e})<l&&ft(a,{x:t,z:e})<=ft(a,n))return!1}return!0}function Tl(n,t,e,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(t,e)/.14)),l=n.x,c=n.z,u=t/a,d=e/a;for(let f=0;f<a;f++){let h=n.x+u,_=n.z+d;if(ci(n,h,_,i,s,r,o)){n.x=h,n.z=_;continue}u&&ci(n,h,n.z,i,s,r,o)&&(n.x=h),d&&ci(n,n.x,_,i,s,r,o)&&(n.z=_)}return Math.hypot(n.x-l,n.z-c)}function Dd(n,t,e){if(!t)return Pi(n,e.x,e.z,.28);let i=Math.max(1,Math.ceil(ft(t,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=t.x+(n.x-t.x)*r,a=t.z+(n.z-t.z)*r,l={x:o,z:a,angle:n.angle,kind:n.kind};if(Pi(l,e.x,e.z,.28))return!0}return!1}function Nd(n,t,e){let i=t.x-n.x,s=t.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((e.x-n.x)*i+(e.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(e.x-n.x-i*o,e.z-n.z-s*o)<1.2}var y_=new mn,v_=new wl(1,1,1,2,.29),Gd=new Zi(1,10,7),M_=new Dn(1,1,1,12),hh=new Map,S_=new hn({vertexColors:!0,roughness:.82}),Ud=new hn({vertexColors:!0,roughness:.36,metalness:.18});function ns(n,t,e=S_){if(!t.length)return;let i=t.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,l=new Float32Array(a*3),c=r.material.color;for(let u=0;u<l.length;u+=3)l[u]=c.r,l[u+1]=c.g,l[u+2]=c.b;return o.setAttribute("color",new cn(l,3)),o});n.remove(...t);let s=new Pe(bl(i),e);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var As=n=>n.children.filter(t=>t instanceof Pe);function Ue(n,t,e,i,s,r,o,a,l,c=!1){let u=e+":"+c;hh.has(u)||hh.set(u,new hn({color:e,roughness:c?.33:.87,metalness:c?.2:0}));let d=new Pe({box:y_,cloth:v_,sphere:Gd,cylinder:M_}[t],hh.get(u));return d.scale.set(o,a,l),d.position.set(i,s,r),d.castShadow=!0,d.receiveShadow=!0,n.add(d),d}var b_=new xs(1,16),w_=new tn({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function Vd(n,t,e){let i=new Pe(b_,w_);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(t,e,1),n.add(i),i}function Es(n,t,e,i,s=!1){let r=new Ne;r.rotation.order="YXZ";let o=Vd(r,.41,.38),a=new Ne;r.add(a);let l=(M,m,g,y,T,S,R,b)=>Ue(a,M,m,g,y,T,S,R,b);l("cloth",e,0,.94,0,.44,.25,.29),l("cloth",t,0,1.22,0,.49,.49,.31),l("cloth",t,0,1.39,0,.55,.215,.337),l("cloth",s?8486469:t,0,1.05,.006,.473,.049,.312),s&&(l("cloth",12891226,-.128,1.343,.169,.078,.057,.014),l("cloth",2445379,0,1.427,-.132,.29,.132,.084)),l("cylinder",i,0,1.5,0,.09,.13,.09),l("sphere",i,0,1.67,.015,.168,.197,.157),l("sphere",3023645,0,1.77,-.031,.162,.112,.141),l("sphere",i,0,1.655,.165,.033,.034,.034),l("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let M of[-1,1])l("sphere",i,M*.155,1.66,.023,.032,.052,.025),l("cloth",2894120,M*.061,1.711,.152,.043,.012,.012),l("cloth",10985105,M*.061,1.692,.156,.032,.012,.012),l("cloth",3024931,M*.06,1.693,.163,.016,.012,.009);s&&(l("sphere",1522486,0,1.79,.012,.181,.132,.164),l("cloth",2508606,0,1.77,.159,.27,.033,.17));let c=[],u=[],d=[],f=[];for(let M of[-1,1]){let m=new Ne;m.position.set(M*.31,1.42,0),a.add(m),Ue(m,"cloth",t,0,-.105,0,.173,.226,.187);let g=new Ne;g.position.y=-.23,m.add(g),Ue(g,"cloth",i,0,-.101,0,.132,.22,.119),Ue(g,"sphere",i,0,-.227,.012,.082,.084,.077),d.push(g),c.push(m);let y=new Ne;y.position.set(M*.128,.94,0),a.add(y),Ue(y,"cloth",e,0,-.205,0,.21,.427,.228);let T=new Ne;T.position.y=-.412,y.add(T),Ue(T,"cloth",e,0,-.18,0,.182,.38,.198),Ue(T,"cloth",s?13812648:3156777,0,-.386,.062,.201,.143,.304),Ue(T,"cloth",s?6839635:2696483,0,-.445,.059,.202,.037,.313),f.push(T),u.push(y)}let h=new Ne;h.position.set(0,-.227,.012),Ue(h,"box",2635321,0,.012,-.002,.066,.078,.12,!0),Ue(h,"box",2635321,0,-.105,.054,.074,.25,.079,!0),Ue(h,"box",10263691,0,-.189,.095,.031,.028,.018);let _=new Ke;_.position.set(0,-.235,.053),h.add(_),d[0].add(h);for(let M of[a,...c,...d,...u,...f,h])ns(M,As(M));return h.visible=!1,n.add(r),{root:r,body:a,arms:c,legs:u,forearms:d,shins:f,pistol:h,muzzle:_,shadow:o,stride:0}}function Cs(n,t,e,i,s,r=0,o=0,a=!1){n.stride+=t*(4.6+e*1.65);let l=Math.sin(n.stride)*Math.min(.78,e*.15);n.body.position.set(0,Math.abs(l)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(l,0,0),n.legs[1].rotation.set(-l,0,0),n.shins[0].rotation.set(Math.max(0,l)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-l)*.51,0,0);for(let c of n.forearms)c.rotation.set(0,0,0);if(n.arms[0].rotation.set(i?-Math.PI/2+o:-l*.76,0,0),n.arms[1].rotation.set(i?-1.16:l*.76,0,0),n.arms[0].rotation.z=a?-.25:0,n.arms[1].rotation.z=a?.25:0,a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let c=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-c*1.11,n.forearms[0].rotation.x=-.62*(1-c),n.body.rotation.y=-c*.37}else n.body.rotation.y=0;n.pistol.visible=s}var Fd=new W(0,-1,0),uh=new W,Ts=new W,dh=new W,fh=new W,Al=new W,ph=new Qe;function Od(n,t,e,i,s,r){Ts.subVectors(e,n.position);let o=Math.min(i+s-.001,Math.max(.015,Ts.length()));Ts.normalize();let a=(i*i-s*s+o*o)/(2*o);dh.set(r[0],r[1],r[2]).addScaledVector(Ts,-dh.dot(Ts)).normalize(),uh.copy(n.position).addScaledVector(Ts,a).addScaledVector(dh,Math.sqrt(Math.max(0,i*i-a*a))),Al.subVectors(uh,n.position).normalize(),n.quaternion.setFromUnitVectors(Fd,Al),Al.copy(n.position).addScaledVector(Ts,o).sub(uh).normalize(),t.quaternion.setFromUnitVectors(Fd,Al.applyQuaternion(ph.copy(n.quaternion).invert()))}function mh(n,t){t.root.updateMatrixWorld(!0),n.root.position.copy(t.body.localToWorld(fh.set(0,.1,-.31))),n.root.quaternion.copy(t.body.getWorldQuaternion(ph)),n.shadow.visible=!1,n.pistol.visible=!1;let e=.63;n.body.rotation.set(e,0,0),n.body.position.set(0,.94*(1-Math.cos(e)),-.94*Math.sin(e)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(t.handlebar.localToWorld(fh.set(s*.342,.44,-.09)));Od(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(t.body.localToWorld(fh.set(s*.245,.39,-.22)));Od(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}var hr=1.13;function yo(n,t,e=!1){let i=hr,s=new Ne;Vd(s,1.14,2.21*i);let r=new Ne;s.add(r);let o=(y,T,S,R,b,p,v,A,I=!1)=>Ue(r,y,T,S,R,b*i,p,v,A*i,I);o("box",2435629,0,.35,0,1.5,.44,3.7);for(let y of[-1,1])o("box",2830387,y*.9,.44,0,.12,.22,1.66);for(let y of[-1,1])o("box",2830387,0,.42,y*1.96,1.86,.3,.42);o("box",t,0,.72,0,1.94,.43,4.24,!0);let a=o("box",t,0,.94,1.4,1.9,.15,1.2,!0);o("box",t,0,.93,-1.78,1.89,.14,.72,!0);let l=new je,c=[-.87,.92,-1.45,.87,.92,-1.45,.87,.92,.8,-.87,.92,.8,-.71,1.49,-1.06,.71,1.49,-1.06,.71,1.49,.26,-.71,1.49,.26];for(let y=2;y<c.length;y+=3)c[y]*=i;l.setAttribute("position",new Te(c,3)),l.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),l.computeVertexNormals();let u=new Pe(l,new hn({color:2902871,roughness:.12,metalness:.35,flatShading:!0,side:gn,transparent:!0,opacity:.5,depthWrite:!1}));u.castShadow=!1,u.renderOrder=2,r.add(u);for(let y of[-1,1])o("box",3815219,y*.42,.66,.05,.52,.12,.52),o("box",3815219,y*.42,.98,-.26,.5,.62,.12),o("box",3157290,y*.42,1.33,-.27,.24,.16,.1);o("box",3815219,0,.66,-.92,1.52,.12,.54),o("box",3815219,0,.98,-1.21,1.52,.6,.12),o("box",2828840,0,.98,.66,1.7,.14,.34);for(let y of[-1,1])o("box",t,y*.79,1.21,.53,.08,.828,.08/i,!0).rotation.x=-.828,o("box",t,y*.79,1.21,-.4,.08,.56,.1/i,!0),o("box",t,y*.79,1.21,-1.255,.08,.713,.12/i,!0).rotation.x=.667;let d=o("cylinder",1907997,-.42,1,.44,.17,.03,.17);d.rotation.x=Math.PI/2-.45;let f=new Ne;f.position.set(-.974,0,.79*i),Ue(f,"box",t,0,.75,-.65*i,.036,.38,1.28*i,!0),Ue(f,"box",13418919,-.024,.881,-.37*i,.04,.04,.15,!0),ns(f,As(f),Ud),r.add(f),o("box",t,0,1.495,-.4,1.43,.075,1.3,!0),o("box",3355961,0,.69,2.126,.86,.13,.05),o("box",13156268,0,.54,2.13,1.92,.12,.045,!0),o("box",13156268,0,.53,-2.13,1.93,.12,.05,!0),o("box",16707771,0,.72,-2.132,.4,.145,.03);let h=[];for(let y of[-1,1]){o("box",16769956,y*.68,.77,2.132,.43,.17,.055,!0),o("box",11021858,y*.65,.77,-2.132,.48,.17,.055,!0),o("box",2898236,y*1,1,.74,.1,.09,.16);for(let T of[.79,-.52,-1.47])o("box",1843234,y*.975,.72,T,.012,.42,.025);for(let T of[.42,-.74])o("box",13089700,y*.98,.89,T,.035,.04,.22,!0);for(let T of[-1.31,1.33]){let S=new Ne;S.position.set(y*.83,.39,T*i),s.add(S),Ue(S,"cylinder",2434600,0,0,0,.408,.24,.408).rotation.z=Math.PI/2,Ue(S,"cylinder",11052964,y*.115,0,0,.217,.02,.217,!0).rotation.z=Math.PI/2,h.push(S)}}let _=[];e&&(_.push(o("box",15550262,-.33,1.62,-.32,.55,.14,.25)),_.push(o("box",5487086,.33,1.62,-.32,.55,.14,.25)));let M=As(r).filter(y=>y!==u&&y!==a&&!_.includes(y));ns(r,M.filter(y=>y.material.metalness===0)),ns(r,M.filter(y=>y.material.metalness>0),Ud);for(let y of h)ns(y,As(y));r.traverse(y=>{y instanceof Pe&&(y.castShadow=!1)});let m=new Ne,g=new tn({color:6643544,transparent:!0,opacity:.29,depthWrite:!1});for(let y=0;y<3;y++){let T=new Pe(Gd,g);m.add(T)}return m.position.set(0,1.04,1.25*i),m.visible=!1,s.add(m),n.add(s),{root:s,body:r,cabin:u,cracks:[],wheels:h,lamps:_,hood:a,smoke:m,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,smokeTime:0,kind:"car",rider:null,door:f,doorTime:0,wheelSpin:0,handlebar:null}}function gh(n,t){let e=yo(n,t),{body:i,hood:s,wheels:r,smoke:o}=e;i.clear(),e.root.remove(...r),r.length=0,e.kind="bike",e.cabin=null,e.root.children[0].scale.set(.42,1.07,1);let a=(c,u,d,f,h,_,M,m)=>Ue(i,c,u,d,f,h,_,M,m);a("box",3882300,0,.48,-.04,.32,.38,.7),a("sphere",t,0,.89,.34,.24,.23,.46),a("box",2369834,0,.85,-.36,.36,.13,.59),a("box",t,0,.65,-.7,.32,.17,.58),a("box",13940106,0,.8,.88,.25,.21,.11),a("box",10433836,0,.7,-.99,.2,.11,.11);let l=new Ne;l.position.set(0,.76,.38),Ue(l,"box",3949122,0,.44,-.09,.684,.057,.059),Ue(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,ns(l,As(l)),e.handlebar=l,i.add(l),a("box",5461330,0,.39,-.22,.52,.07,.11),a("box",11578016,.232,.36,-.54,.12,.12,.72),s.visible=!1,i.add(s),o.position.set(0,.55,.32);for(let c of[-.73,.78]){let u=new Ne;u.position.set(0,.33,c),Ue(u,"cylinder",2434601,0,0,0,.33,.12,.33).rotation.z=Math.PI/2,Ue(u,"cylinder",8750213,0,0,0,.205,.14,.205).rotation.z=Math.PI/2,ns(u,As(u)),r.push(u),i.add(u),a("box",5988704,0,.55,c,.09,.49,.085).rotation.x=c>0?-.21:.46}return ns(i,As(i).filter(c=>c!==s)),e}function is(n,t,e=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,l=0,c=0,u=n.wheels.map(m=>{let{x:g,z:y}=m.position,T=Bn(n.x+g*s+y*i,n.z-g*i+y*s);return y>0?o+=T:a+=T,g<0?l+=T:c+=T,T}),d=(o+a)/n.wheels.length;n.root.rotation.y=n.angle,n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),r?1.51:2.64);let f=r?n.integrity<=0?1.25:-e*Math.min(.53,Math.abs(n.speed)*.039):e*Math.min(.09,Math.abs(n.speed)*.004),h=r?0:Math.atan2((c-l)*.5,1.89);n.body.rotation.z+=(f+h-n.body.rotation.z)*(t>0?Math.min(1,t*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-t),n.door.rotation.y=Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let _=r?.33:.408,M=r?n.body.rotation.z:0;n.root.position.set(n.x,d+(r?Math.abs(Math.sin(M))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=e*.22),n.wheelSpin=(n.wheelSpin+n.speed*t/_)%(Math.PI*2),n.wheels.forEach((m,g)=>{r||(m.position.y=u[g]-d+_),m.rotation.set(n.wheelSpin,m.position.z>0?e*(r?.22:.23):0,0,"YXZ")}),n.hood.rotation.x=(100-n.integrity)*.0031,n.hood.rotation.z=(100-n.integrity)*.0013,n.smoke.visible=n.integrity<43,n.smoke.visible&&(n.smokeTime+=t,n.smoke.children.forEach((m,g)=>{let y=(n.smokeTime*(n.integrity<=0?.72:1.04)+g/3)%1;m.position.set(Math.sin(g*3.9+y*3)*y*.4,y*1.85,-y*.58),m.scale.setScalar(.12+y*.32)}))}function xh(n,t,e){let i=Math.min(1,t/.22),s=Math.min(1,Math.max(0,(t-.12)/.5)),r=s*s*(3-2*s),o=t>.62?Math.sin(Math.min(1,(t-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(t-.62)/.25)):0,a=e*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(e*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let l=Math.sin(Math.min(1,t/.5)*Math.PI);return n.arms[0].rotation.set(-e*(.6*l+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-e*(.9*l+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*l-.2,0,0),n.forearms[1].rotation.set(-.3*l-.3,0,0),n.pistol.visible=!1,a}var zd=[[-.42,.05],[.42,.05],[-.42,-.92],[.42,-.92]],T_=new W;function Hd(n,t,e){let[i,s]=zd[e]??zd[3];t.root.updateMatrixWorld(!0),n.root.position.copy(t.body.localToWorld(T_.set(i,.54-.94,s*hr))),n.root.quaternion.copy(t.body.getWorldQuaternion(ph)),n.root.visible=!0,n.shadow.visible=!1,n.pistol.visible=!1,n.body.position.set(0,0,0),n.body.rotation.set(-.12,0,0);for(let r=0;r<2;r++)n.legs[r].rotation.set(-1.42,0,(r?1:-1)*.06),n.shins[r].rotation.set(.95,0,0),e===0?(n.arms[r].rotation.set(-.62,0,(r?-1:1)*.18),n.forearms[r].rotation.set(-.85,0,0)):(n.arms[r].rotation.set(-.32,0,(r?-1:1)*.08),n.forearms[r].rotation.set(-1.05,0,0))}var Bd=null,A_=new Nn(.28,.28),xo=new W,kd=new W,_o=new W;function E_(){let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d");t.strokeStyle="rgba(235,242,240,.9)",t.lineWidth=1.6,t.beginPath();for(let i=0;i<11;i++){let s=i/11*Math.PI*2+Math.sin(i*7.1)*.2;t.moveTo(64,64);let r=64,o=64;for(let a=1;a<=4;a++)r=64+Math.cos(s+Math.sin(a*3.1+i)*.12)*a*14,o=64+Math.sin(s+Math.cos(a*2.3+i)*.12)*a*14,t.lineTo(r,o)}for(let i of[9,20,33]){t.moveTo(64+i,64);for(let s=1;s<=24;s++)t.lineTo(64+Math.cos(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1),64+Math.sin(s/24*Math.PI*2)*i*(.9+Math.sin(s*5.3)*.1))}t.stroke(),t.fillStyle="rgba(250,250,245,.95)",t.beginPath(),t.arc(64,64,3.2,0,Math.PI*2),t.fill();let e=new gs(n);return e.colorSpace=$e,new tn({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:gn})}function _h(n,t){if(!n.cabin)return;Bd??=E_(),n.root.updateMatrixWorld(!0),_o.set(t[0],t[1],t[2]),n.body.worldToLocal(_o),kd.set(0,1.2,-.4*hr),xo.subVectors(_o,kd),xo.y*=.35,xo.normalize();let e=new Pe(A_,Bd);e.position.copy(_o).addScaledVector(xo,.015),e.lookAt(_o.clone().add(xo)),e.rotation.z=Math.random()*Math.PI*2,e.renderOrder=3,n.body.add(e),n.cracks.push(e),n.cracks.length>8&&n.cracks.shift().removeFromParent()}function Xd(n,t){let{id:e,x:i,z:s,w:r,d:o,angle:a,kind:l,label:c,color:u}=t,{box:d,solid:f,door:h,sign:_,glazing:M,support:m,volume:g}=n,y=l==="shop"||l==="armory",T=(H,Q,k=.228)=>({x:i+Math.cos(a)*H+Math.sin(a)*Q,z:s-Math.sin(a)*H+Math.cos(a)*Q,y:k}),S=Math.abs(Math.cos(a)),R=Math.abs(Math.sin(a)),b=(H,Q,k,Y)=>({...T(H,Q),w:k*S+Y*R,d:k*R+Y*S}),p=o/2,v=-o/2,A=-r/2,I=r/2,P=(H,Q,k,Y,et,dt,Mt,K=!1,ht=0,wt="box")=>{let Nt=T(H,Q);d(Nt.x,k,Nt.z,Y,et,dt,Mt,K,a,ht,wt)},G=(H,Q,k,Y,et,dt,Mt,K=!0)=>{P(H,Q,k,Y,et,dt,Mt,K);let ht=b(H,Q,Y,dt);f.push({x:ht.x,z:ht.z,w:ht.w,d:ht.d,y0:k-et*.5,h:k+et*.5,buildingId:e})};return y?B():L();function F(H,Q,k,Y,et){if(P(H,p+.05,Q,k+.22,Y+.22,.1,5195585),P(H,p+.085,Q,k,Y,.06,5073522),P(H,p+.12,Q,.05,Y,.03,12168856),P(H,p+.12,Q+Y*.18,k,.045,.03,12168856),P(H,p+.13,Q-Y*.5-.08,k+.36,.09,.2,$n(u)),et)for(let dt of[-1,1])P(H+dt*(k*.5+.24),p+.09,Q,.34,Y+.06,.05,et)}function L(){let H=l==="apartments",Q=H?t.stories:1,k=H?3.3:3.25,Y=Q*k,et=.228+Y;G(0,0,.228+Y/2,r,Y,o,u),P(0,p+.03,.228+.23,r+.04,.46,.08,8484463);for(let K of[A+.12,I-.12])P(K,p+.04,.228+Y/2,.26,Y,.1,$n(u));for(let K=1;K<Q;K++)P(0,p+.04,.228+K*k,r+.04,.16,.1,$n(u));let dt=H?0:-r*.18;if(P(dt,p+.05,.228+1.17,1.42,2.42,.1,5195585),P(dt,p+.09,.228+1.1,1.1,2.2,.06,H?4151902:7687224),P(dt+.38,p+.14,.228+1.08,.06,.16,.05,13810049),P(dt,p+.32,.228-.05,1.7,.14,.62,8484463),P(dt,p+.42,.228+2.62,1.9,.12,.86,$n(u),!0),H){P(dt,p+.12,.228+2.92,1.6,.32,.05,15324320);let K=T(dt,p+.15,.228+2.92);_(c,K.x,K.y,K.z,a,5589560,1.56,.3)}else{let K=T(dt+1.15,p+.13,1.848);_(c,K.x,K.y,K.z,a,5589560,.92,.22)}let Mt=l==="house"?Wd(e,[6257514,8019014,6975364]):null;for(let K=0;K<Q;K++){let ht=.228+K*k,wt=H?[A+r*.17,A+r*.38,I-r*.38,I-r*.17]:[r*.18,r*.38];for(let Nt of wt)if(!(K===0&&Math.abs(Nt-dt)<1.7)&&(F(Nt,ht+1.72,H?1.26:1.2,1.34,Mt),H&&K>0&&Nt===wt[3])){P(Nt,p+.42,ht+.95,1.8,.12,.74,8484463,!0);for(let At of[-.8,-.4,0,.4,.8])P(Nt+At,p+.76,ht+1.38,.04,.78,.04,4802113);P(Nt,p+.76,ht+1.78,1.72,.05,.06,4802113)}for(let Nt of[A,I]){let At=Nt===A?-1:1;for(let Ht of H?[v+2.2,p-2.2]:[0]){let fe=T(Nt+At*.05,Ht);d(fe.x,ht+1.72,fe.z,.1,1.56,1.32,5195585,!1,a);let Wt=T(Nt+At*.085,Ht);d(Wt.x,ht+1.72,Wt.z,.06,1.34,1.1,5073522,!1,a)}}}if(H){P(0,0,et+.04,r+.12,.1,o+.12,7827562);for(let K of[A+.1,I-.1])P(K,0,et+.36,.2,.56,o,$n(u),!0);for(let K of[v+.1,p-.1])P(0,K,et+.36,r,.56,.2,$n(u),!0);P(I-2.4,v+2.1,et+.95,2,1.8,2,9077369,!0),P(I-2.4,v+2.1,et+1.93,2.1,.12,2.1,7301732),P(A+2.2,v+1.9,et+.75,1.4,1.2,1.4,10134691,!0),P(A+2.2,v+1.9,et+1.42,1.5,.12,1.5,7240057)}else{let K=Math.min(2,o*.2);P(0,0,et,r-.02,K,o-.02,u,!0,0,"prism"),P(0,0,et+.06,r+.5,K+.12,o+.7,Wd(e,[10115652,9063482,8082502]),!0,0,"prism"),P(I-2.1,v+o*.3,et+K*.55,.55,1.6,.55,9402986,!0)}return{id:e,kind:l,label:c,units:[],doorIds:[],clerk:null,outside:T(dt,p+1.1,.16),entry:T(dt,p+.2),inside:T(dt,p+.2),approach:T(dt,p+2.4,.16),resident:null}}function B(){let Q=4.0200000000000005,k=.228,Y=t.doorAt??.1,et=Math.min(r*.25,3.72),dt=[Y-r*.248,Y+r*.248],Mt=.22,K=(Pt,ae,ue,Ce,X,re,jt)=>G(Pt,ae,X+re/2,ue,re,Ce,jt),ht=(Pt,ae,ue,Ce,X,re)=>K((ae+ue)/2,Pt,ue-ae,Mt,Ce,X,re),wt=(Pt,ae,ue,Ce,X,re)=>K(Pt,(ae+ue)/2,Mt,ue-ae,Ce,X,re),Nt=h(...q(Y-1.28/2,p),a,1.28,4285290,k,{buildingId:e,private:!1,unitId:null}),At=T(Y,p),Ht=T(Y,p+1.05,.16),fe=T(Y,p-1.05),Wt=T(Y,p+2.45,.16);g.push({...b(0,0,r-.2,o-.2),floor:k,ceiling:k+Q,buildingId:e}),G(0,0,k-.066,r-.03,.132,o-.03,11972762,!1),f[f.length-1].walkSurface=!0,m.push({...b(0,0,r-.03,o-.03),y:k,buildingId:e}),wt(A,v,p,k,Q,u),wt(I,v,p,k,Q,u),ht(v,A,I,k,Q,u);let he=A,pe=[{center:Y,width:1.28,door:!0},...dt.map(Pt=>({center:Pt,width:et,door:!1}))];pe.sort((Pt,ae)=>Pt.center-ae.center);let Qt=.61,rt=2.58,Ee=rt-Qt;for(let Pt of pe){let ae=Pt.center-Pt.width*.5,ue=Pt.center+Pt.width*.5;if(ht(p,he,ae,k,Q,u),P((he+ae)/2,p+.04,k+.17,ae-he,.34,.11,8484463),he=ue,Pt.door)continue;K(Pt.center,p,Pt.width,Mt,k,Qt,u),K(Pt.center,p,Pt.width,Mt,k+rt,Q-rt,u);let Ce=T(Pt.center,p+.068,k+(rt+Qt)*.5);M(Ce.x,Ce.y,Ce.z,Pt.width,Ee,a);let X=b(Pt.center,p,Pt.width,.2);f.push({x:X.x,z:X.z,w:X.w,d:X.d,y0:k+Qt,h:k+rt,buildingId:e});for(let jt of[-1,0,1])P(Pt.center+jt*(Pt.width*.5-.042),p+.13,k+(rt+Qt)*.5,.07,Ee,.084,5989472);for(let jt of[Qt,rt])P(Pt.center,p+.13,k+jt,Pt.width+.07,.081,.096,7831928);P(Pt.center,p+.17,k+Qt-.025,Pt.width+.2,.091,.25,10065280);let re=p-.48;P(Pt.center,re,k+.83,Pt.width-.24,.078,.45,11771260);for(let jt of[-.78,-.39,.39,.78])P(Pt.center+jt,re,k+.95+(Math.abs(jt)<.5?.055:0),.23,.26,.26,t.awning??12089684)}ht(p,he,I,k,Q,u),P((he+I)/2,p+.04,k+.17,I-he,.34,.11,8484463),G(Y,p,k+2.22+(Q-2.22)/2,1.28,Q-2.22,.21,u);for(let Pt of[A+.17,I-.17])P(Pt,p+.11,k+Q/2,.22,Q,.17,$n(u));P(0,p+.07,k+4.16-.05,r+.25,.22,.13,$n(u));for(let Pt of[A,I]){let ae=Pt===A?-1:1;for(let ue of[v+2.3,p-2.3])P(Pt+ae*.13,ue,k+1.7,.06,1.2,1.4,5195585),P(Pt+ae*.16,ue,k+1.7,.04,1.04,1.22,5073522),P(Pt+ae*.2,ue,k+1.03,.16,.09,1.56,$n(u))}let Ge=T(0,v+1.89,k);Ge.angle=a;let ve=T(0,p+.18,k+4.16-.64);_(c,ve.x,ve.y,ve.z,a,3232851,Math.min(5.25,r-.72),.58),P(0,p+.6,k+4.16-1.37,r-.56,.19,1.22,t.awning??7820863,!0);for(let Pt=A+.68;Pt<I-.42;Pt+=.46)P(Pt,p+1.21,k+4.16-1.46,.225,.23,.062,14006413);G(.46,v+3,k+.55,4.4,1.1,.7,6968131),P(.46,v+3,k+1.15,4.58,.14,.79,12166795,!0),P(1.33,v+3.02,k+1.42,.48,.41,.36,4083022),P(1.33,v+3.22,k+1.58,.34,.19,.051,7968922);for(let Pt of[A+.46,I-.46])for(let ae of[v+1.75,v+4.2]){G(Pt,ae,k+.83,.61,1.66,1.79,7037271);for(let ue=0;ue<3;ue++)for(let Ce of[-.55,-.17,.22,.57]){let X=[12490344,11953479,5997179][(Math.floor((Ce+.6)*2.3)+ue)%3];P(Pt+(Pt<0?.37:-.37),ae+Ce,k+.47+ue*.43,.15,.25,.22,X)}}for(let Pt of[-.26,.26])P(Pt*r,0,k+4.16-.23,.32,.085,1.91,16245436);P(0,p-.8,k+.009,1.71,.016,.87,5863786);let we=k+4.16;G(0,0,we-.053,r+.17,.2,o+.17,8613472,!1);for(let Pt of[A,I])P(Pt,0,we+.28,.25,.59,o+.15,$n(u),!0);for(let Pt of[v,p])P(0,Pt,we+.28,r+.2,.59,.25,$n(u),!0);return P(I-1.5,v+1.45,we+.46,1.34,.64,1.21,8418922,!0),P(I-1.5,v+1.45,we+.82,1.14,.08,1.05,10261379),P(A+1.52,v+1.55,we+.39,.56,.57,.57,4873822,!0),{id:e,kind:l,label:c,entry:At,outside:Ht,inside:fe,approach:Wt,resident:null,clerk:Ge,doorIds:[Nt.id],units:[]}}function q(H,Q){let k=T(H,Q,.228);return[k.x,k.z]}}function Wd(n,t){let e=0;for(let i of n)e=e*31+i.charCodeAt(0)>>>0;return t[e%t.length]}function $n(n){let t=Math.min(255,(n>>16&255)+26),e=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return t*65536+e*256+i}var qd=(n,t)=>[Math.floor((n-t*.5-1.1)/10),Math.floor((n+t*.5+1.1)/10)];function El(n){let t=new Map;for(let e of n){let[i,s]=qd(e.x,e.w),[r,o]=qd(e.z,e.d);for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=a+","+l;t.has(c)||t.set(c,[]),t.get(c).push(e)}}return(e,i)=>t.get(Math.floor(e/10)+","+Math.floor(i/10))??[]}var Yd=(n,t,e)=>Math.abs(n-e.x)<e.w*.5+.002&&Math.abs(t-e.z)<e.d*.5+.002,C_=n=>n&&n.health!==0&&!n.seated;function Zd(n,t,e,i,s){let r=El(n),o=El(t),a=El(e),l=El(i.map(S=>S.closedSolid)),c=new Map(i.map(S=>[S.id,S])),u=S=>{let R=c.get(S.doorId);return!R.breached&&R.openAmount<1.06},d=n.filter(S=>(S.y0??0)<.95&&S.h>.28&&!S.stair);function f(S,R,b=0){let p=s(S,R);for(let v of o(S,R))v.y>p&&v.y<=b+.305&&Yd(S,R,v)&&(p=v.y);return p}function h(S,R,b=0){let p=A=>!A.stair&&(!A.walkSurface||A.h>b+.305)&&(A.y0??0)<b+1.72&&A.h>b+.13,v=r(S,R).filter(p);for(let A of l(S,R))p(A)&&u(A)&&v.push(A);return v}function _(S,R,b=0){let p=null;for(let v of a(S,R))v.floor<=b+.14&&v.ceiling>=b&&Yd(S,R,v)&&(!p||v.floor>p.floor)&&(p=v);return p}function M(S,R,b,p=.3,v=!1){let A=I=>R>=(I.y0??0)-p&&R<=I.h+p&&Math.abs(S-I.x)<I.w*.5+p&&Math.abs(b-I.z)<I.d*.5+p;for(let I of r(S,b))if(!(I.off||I.prop||I.walkSurface||I.stair)&&A(I))return!0;if(v){for(let I of l(S,b))if(A(I))return!0}return!1}function m(){return i.map(S=>S.closedSolid).filter(u)}function g(S){let R=c.get(S);return!R||!R.private||R.breached?!1:(R.breached=!0,R.hold=1/0,!0)}function y(S,R){for(let b of i){let p=b.breached||b.normallyOpen;b.hold=Math.max(0,b.hold-S);for(let A of R){if(p||!C_(A))continue;let I=A.floorY??A.y??0;if(Math.abs(I-b.base)>.64)continue;let P=A.x-b.x,G=A.z-b.z,F=P*P+G*G;if(F>3.68)continue;let L=A.buildingId===b.buildingId&&(!b.unitId||A.unitId===b.unitId),B=P*b.normalX+G*b.normalZ<-.22;(!b.private||L||B&&F<2.43||b.opened&&F<1.92)&&(p=!0,b.hold=1.1)}let v=p||b.hold>0?1.48:0;b.openAmount+=(v-b.openAmount)*(1-Math.exp(-S*13)),b.opened=b.openAmount>=1.06,b.door.rotation.y=b.angle+b.openAmount}}function T(){for(let S of i)S.breached=!1,S.hold=0,S.opened=S.normallyOpen,S.openAmount=S.normallyOpen?1.48:0,S.door.rotation.y=S.angle+S.openAmount}return{vehicleSolids:d,floorAt:f,walkSolids:h,interiorAt:_,closedDoorSolids:m,breachDoor:g,updateDoors:y,resetDoors:T,viewBlocked:M}}var yh=3751484,R_={box:new mn,cylinder:new Dn(1,1,1,10),pole:new Dn(.8,1,1,8),foliage:new Ti(1,1)},ur={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function dr(n){let t=n.map(([e,i,s,r,o,a,l,c,u=0,d=0])=>{let f=R_[e],h=f.index?f.toNonIndexed():f.clone(),_=new be().compose(new W(i,s,r),new Qe().setFromEuler(new Yn(u,d,0,"YXZ")),new W(o,a,l));h.applyMatrix4(_);let M=new se(c),m=new Float32Array(h.attributes.position.count*3);for(let g=0;g<m.length;g+=3)m[g]=M.r,m[g+1]=M.g,m[g+2]=M.b;h.setAttribute("color",new cn(m,3));for(let g of Object.keys(h.attributes))["position","normal","color"].includes(g)||h.deleteAttribute(g);return h});return bl(t)}var Jd={lamp:()=>dr([["pole",0,2.25,0,.083,4.5,.083,yh],["box",.35,4.36,0,.79,.075,.075,yh],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>dr([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,yh])]),bin:()=>dr([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>dr([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>dr([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>dr([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,t)=>{let e=t*Math.PI*2/7;return["foliage",Math.sin(e)*.86,4.55,Math.cos(e)*.86,.42,.24,1.58,[3432266,4879699,7111766][t%3],0,e]})])};function Kd(n,t,e){let i=[],s={},r=new hn({vertexColors:!0,roughness:.84}),o=new be,a=new W,l=new Qe,c=new W,u=new Qe,d=new Qe,f=new W,h=new W(0,1,0),_=!1;function M(b,p,v,A=0,I=1,P){let G=e(p,v),F={x:p,z:v,w:P?.w??ur[b].radius*2,d:P?.d??ur[b].radius*2,y0:G,h:G+(P?.h??1),prop:b};t.push(F),i.push({kind:b,x:p,z:v,y:G,rotation:A,scale:I,solid:F,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function m(b){u.setFromAxisAngle(h,b.rotation+b.spin),f.set(b.axisX,0,b.axisZ),d.setFromAxisAngle(f,b.tilt),l.multiplyQuaternions(d,u);let p=ur[b.kind].radius;a.set(b.x,b.y+Math.sin(b.tilt)*p+b.lift,b.z),c.setScalar(b.scale),o.compose(a,l,c),s[b.kind].setMatrixAt(b.index,o),s[b.kind].instanceMatrix.needsUpdate=!0}function g(){for(let b of Object.keys(Jd)){let p=i.filter(A=>A.kind===b);if(!p.length)continue;let v=new bi(Jd[b](),r,p.length);v.castShadow=!0,v.receiveShadow=!0,s[b]=v,p.forEach((A,I)=>{A.index=I,m(A)}),v.computeBoundingSphere(),n.add(v)}}function y(b,p,v){let A=ur[b.kind];b.broken=!0,b.solid.off=!0,b.clock=0;let I=.55+Math.random()*.25;b.vx=p.vx*I,b.vz=p.vz*I;let P=Math.max(.01,Math.hypot(p.vx,p.vz));b.axisX=p.vz/P,b.axisZ=-p.vx/P,b.spinRate=(Math.random()-.5)*(b.kind==="bin"?7:2),b.lift=0,b.liftSpeed=b.kind==="bin"||b.kind==="bollard"?Math.min(3.2,v*.22):0;let G=1-A.mass;return p.vx*=G,p.vz*=G,A.damage&&(p.integrity=Math.max(0,p.integrity-A.damage*Math.min(1.6,v/A.speed))),p.impact=Math.max(p.impact,A.mass>.2?4.5:0),_=!0,{kind:b.kind,heavy:A.mass>.2,x:b.x,z:b.z}}function T(b,p,v){let A=[];for(let P of p){let G=Math.hypot(P.vx,P.vz);if(G<.6)continue;let F=G*b*2+.2;for(let L of i){if(L.broken||Math.abs(L.x-P.x)>3.6||Math.abs(L.z-P.z)>3.6)continue;let B={x:P.x+P.vx*b,z:P.z+P.vz*b,angle:P.angle,kind:P.kind};Pi(B,L.x,L.z,ur[L.kind].radius+F)&&G>=ur[L.kind].speed&&A.push(y(L,P,G))}}for(let P of i)if(P.broken)if(P.clock+=b,P.clock<2.5){let G=Math.exp(-b*(P.tilt>1.2?6:2.2)),F=P.x+P.vx*b,L=P.z+P.vz*b;P.x=F,P.z=L,P.vx*=G,P.vz*=G,P.spin+=(P.spinRate??0)*b*G,P.tilt=Math.min(Math.PI/2,P.tilt+b*(1.1+P.tilt*3.2)),P.liftSpeed&&(P.lift=Math.max(0,P.lift+P.liftSpeed*b),P.liftSpeed-=9.8*b,P.lift===0&&P.liftSpeed<0&&(P.liftSpeed=0)),m(P)}else P.clock>50&&Math.hypot(v.x-P.solid.x,v.z-P.solid.z)>38&&p.every(G=>Math.hypot(G.x-P.solid.x,G.z-P.solid.z)>3)&&S(P);let I=_;return _=!1,{events:A,shadow:I}}function S(b){Object.assign(b,{broken:!1,x:b.solid.x,z:b.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),b.solid.off=!1,m(b),_=!0}function R(){for(let b of i)b.broken&&S(b)}return{add:M,finalize:g,update:T,reset:R,items:i}}var Cl=473021;function dn(){return Cl=Math.imul(1664525,Cl)+1013904223>>>0,Cl/4294967296}var Rs=n=>n[Math.floor(dn()*n.length)];function $d(n){Cl=473021,n.background=new se(15316107),n.fog=new Or(15316107,.0068),n.add(new Zr(15266035,7890017,2.3));let t=new $r(16763540,3);t.position.set(-45,48,-32),t.castShadow=!0,Object.assign(t.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),t.shadow.bias=-35e-5,t.shadow.normalBias=.12,t.shadow.mapSize.set(2048,2048),t.shadow.autoUpdate=!1,n.add(t);let e=new Pe(new Zi(330,32,16),new Un({side:un,depthWrite:!1,uniforms:{sun:{value:new W(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));e.frustumCulled=!1,e.renderOrder=-100,n.add(e);let i=[],s=[],r=[],o=[],a={},l={box:new mn,foliage:new Ti(1,1),pole:new Dn(.8,1,1,8),hill:new Zi(1,14,9),prism:I_()},c=new Ke;function u(F,L,B,q,H,Q,k,Y,et,dt=0,Mt=0){let K=L===0&&q===0?"center":Math.round(L/31)+","+Math.round(q/31),ht=F+":"+!!et+":"+K,wt=a[ht]??={shape:F,shadow:!!et,items:[]};c.position.set(L,B,q),c.scale.set(H,Q,k),c.rotation.set(Mt,dt,0,"YXZ"),c.updateMatrix(),wt.items.push({matrix:c.matrix.clone(),color:new se(Y)})}function d(F,L,B,q,H,Q,k,Y=!1,et=0,dt=0,Mt="box"){u(Mt,F,L,B,q,H,Q,k,Y,et,dt)}function f(F,L,B,q,H,Q,k){d(F,L,B,q,H,Q,k,!0),i.push({x:F,z:B,w:q,d:Q,y0:L-H/2,h:L+H/2})}let h=Kd(n,i,Bn);function _(F,L,B=!1){h.add(B?"palm":"tree",F,L,dn()*6.28,.82+dn()*.36,{w:.45,d:.45,h:3.6})}function M(F,L,B,q,H,Q=1784375,k=4.2,Y=.65){let et=document.createElement("canvas");et.width=512,et.height=115;let dt=et.getContext("2d");dt.fillStyle="#e9d4a0",dt.fillRect(0,0,512,115),dt.strokeStyle="#645a47",dt.lineWidth=6,dt.strokeRect(7,7,498,101),dt.font="900 50px system-ui",dt.textAlign="center",dt.textBaseline="middle",dt.fillStyle="#"+Q.toString(16).padStart(6,"0"),dt.fillText(F,256,57,470);let Mt=new gs(et);Mt.colorSpace=$e;let K=new Pe(new Nn(k,Y),new tn({map:Mt}));K.position.set(L,B,q),K.rotation.y=H,n.add(K)}let m=new Ne;n.add(m);let g=[],y=new Nn,T=new hn({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:gn});function S(F,L,B,q,H,Q){let k=new Pe(y,T);k.position.set(F,L,B),k.scale.set(q,H,1),k.rotation.y=Q,n.add(k)}let R={box:d,solid:i,door:b,sign:M,glazing:S,support:s,volume:r};function b(F,L,B,q,H,Q=.228,k={}){let Y=new Ne,et=k.id??"door-"+g.length;Y.position.set(F,Q,L);let dt=Ue(Y,"box",H,q*.5,1.088,0,q-.045,2.147,.074);dt.castShadow=!1;let Mt=Ue(Y,"box",10191979,q*.5,1.47,-.04,q*.64,.56,.013);Mt.castShadow=!1;for(let Ht of[-1,1])Ue(Y,"box",10191195,q-.14,.99,Ht*.046,.11,.13,.035).castShadow=!1,Ue(Y,"box",12691318,q-.174,1.011,Ht*.073,.132,.042,.037).castShadow=!1;let K=F+Math.cos(B)*q*.5,ht=L-Math.sin(B)*q*.5,wt=k.normallyOpen?1.48:0;Y.rotation.y=B+wt,n.add(Y);let Nt={x:K,z:ht,w:Math.abs(Math.cos(B))*q+.083,d:Math.abs(Math.sin(B))*q+.083,y0:Q,h:Q+2.155,doorId:et,buildingId:k.buildingId??null},At={door:Y,id:et,x:K,z:ht,base:Q,angle:B,openAmount:wt,opened:!!k.normallyOpen,breached:!1,private:!!k.private,normallyOpen:!!k.normallyOpen,hold:0,buildingId:k.buildingId??null,unitId:k.unitId??null,normalX:Math.sin(B),normalZ:Math.cos(B),handle:{x:F+Math.cos(B)*(q-.17),y:Q+1.008,z:L-Math.sin(B)*(q-.17)},closedSolid:Nt};g.push(At);for(let Ht of[0,q])d(F+Math.cos(B)*Ht,Q+1.09,L-Math.sin(B)*Ht,.105,2.18,.178,6640456,!1,B);return d(K,Q+2.185,ht,q+.12,.11,.178,6640456,!1,B),At}function p(){let{x:F,z:L}=bn,B=13216391;f(F,2.08,L,12,3.84,10,B),d(F,.39,L+5.03,12.04,.46,.08,8484463),d(F,4,L,12.06,1.7,9.98,B,!0,0,0,"prism"),d(F,4.06,L,12,1.84,10.7,9393216,!0,0,0,"prism"),d(F+3.6,4.9,L-2.2,.55,1.9,.55,9402986,!0),d(F,1.38,L+5.05,1.42,2.42,.1,5195585),d(F,1.31,L+5.09,1.1,2.2,.06,6903110),d(F,.18,L+5.35,1.7,.14,.62,8484463),d(F,2.85,L+5.45,1.9,.12,.86,14270112,!0);for(let q of[-3.6,3.6]){d(F+q,2.03,L+5.04,2.08,1.43,.1,5195585),d(F+q,2.03,L+5.07,1.86,1.21,.06,5073522),d(F+q,1.22,L+5.16,2.2,.09,.2,14270112);for(let H of[-1,1])d(F+q+H*1.17,2.03,L+5.07,.34,1.27,.05,6257514)}M("CASA 38",F+1.6,1.62,L+5.13,0,4868146,.92,.22)}function v(){let F=Ri.z;d(2,.169,F,19,.045,22,6908773),f(-7.18,2.03,F,7.35,3.68,19.56,8886169),d(-7.18,3.98,F,7.62,.23,19.8,5406866),d(-3.46,1.35,F,.12,2.32,1.7,4413028),d(-2.5,3.33,F,7.1,.25,19.5,5401719,!0),f(-1.5,1.42,F-9.72,5.4,2.54,.35,8229008),f(-1.5,1.42,F+9.72,5.4,2.54,.35,8229008);for(let B of[-9.5,9.5])f(1.04,1.65,F+B,.28,3,.31,8689042);d(1.1,2.88,F,.25,.42,19.54,5994626),M("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,F,Math.PI/2,2704468,7.2,.63);for(let B of[-8.2,-3.95,.3,4.55,8.8])d(8.15,.208,F+B,5.3,.016,.1,14537646);for(let B of[-6.1,-1.85,2.4])d(5.5,.208,F+B,.1,.016,3.25,14537646);for(let B of[-6.8,-3.4,3.4,6.8])d(-3.46,1.87,F+B,.08,1.4,2.25,5195585),d(-3.43,1.87,F+B,.05,1.18,2.05,3626589);d(-3.52,.21,F+3.1,.64,.08,2.45,6446161)}d(0,-.3,0,720,.1,720,8880242),d(0,-.18,0,132,.34,132,4605770);for(let F=0;F<1250;F++){let L=dn()*130-65,B=dn()*130-65;d(L,.001,B,.04+dn()*.3,.007,.04+dn()*.3,Rs([5460823,4934733,4473414,5855058]),!1,dn()*6)}for(let F of oi)for(let L of Kn){for(let B=-10;B<=10;B+=4)d(F,.014,L+B,.12,.015,1.82,14132838);for(let B of[-12.6,12.6])for(let q=-4.5;q<=4.5;q+=.9)d(F+q,.015,L+B,.45,.016,1.44,13156273)}for(let F of oi)for(let L of Kn){for(let B=-10;B<=10;B+=4)d(L+B,.014,F,1.82,.015,.12,14132838);for(let B of[-12.6,12.6])for(let q=-4.5;q<=4.5;q+=.9)d(L+B,.015,F+q,1.44,.016,.45,13156273)}for(let F of Kn)for(let L of Kn){d(F,.067,L,27.1,.16,27.1,13022103),d(F,.125,L,26.7,.07,26.7,10721158);for(let B of[-12.25,12.25])for(let q=-12;q<=12;q+=2.1)d(F+B,.164,L+q,2.32,.008,.023,12956566),d(F+q,.164,L+B,.023,.008,2.32,12956566);if(F===Ri.x-2&&L===Ri.z)v();else if(F===bn.x&&L===bn.z)p();else if(F===0&&L===-38){for(let B of[-6,6]){d(F+B,.185,L,8.2,.08,19,7438938);for(let q of[-7,0,7])_(F+B,L+q,!0)}for(let B=-8;B<=8;B+=4)d(F,.177,L+B,3.1,.033,3.2,13218964);f(F,1.04,L-9.89,4.42,1.77,.18,9271651),M("PRA\xC7A DA BRASA",F,1.6,L-10,Math.PI)}else for(let B of[-1,1]){let q=F===0&&L===0&&B===1,H=o.filter(ht=>ht.id.startsWith("lot-")||ht.id==="armory").length,Q=H+10,k=q?"armory":H%5===1||H%5===3?"shop":H%5===0?"house":"apartments",Y=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],et=k==="shop"?Y[Math.floor(H/2)%Y.length]:k==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(H/2)%6]:"CASA "+Q,dt=Rs([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Mt=Xd(R,{id:q?"armory":"lot-"+Q,kind:k,label:q?"LOJA DE ARMAS":et,x:F+B*(q?5.7:6.25),z:L+(q?-5.45:0),angle:B*Math.PI/2,w:q?11.35:(k==="house"?13.7:15.3)+dn()*.57,d:q?9.36:9.38+dn()*.25,color:dt,upperColor:Rs([12163192,10394757,12426376,11971991]),awning:Rs([7821376,6190959,10446933]),fabrics:Rs([7373431,8152675,9534300]),stories:H%3===0?3:2,doorAt:q?0:void 0,open:k==="house"&&H%3!==0});o.push(Mt);let K=q?4.32:L+9.83;d(F+B*6.8,.168,K,8.3,.017,2.51,10919820);for(let ht=-3.5;ht<=3.5;ht+=.7)d(F+B*6.8+ht,.18,K,.022,.012,2.5,12169372)}for(let B of[-1,1]){let q=F+B*12.85,H=L-B*9.85;h.add("lamp",q,H,B>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),h.add("bench",F+B*9,L-B*12.5,B>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let Q=F+B*10.1;h.add("bin",Q,L-B*12.55,0,1,{w:.5,d:.5,h:.78}),h.add("bollard",Q+.72,L-B*12.58,0,1,{w:.14,d:.14,h:.46}),_(F+B*12.3,L+B*12.3)}}for(let F=0;F<52;F++){let L=F/52*Math.PI*2,B=118+dn()*58,q=Rs([9670532,10525321,10001560,9212560]),H=Math.sin(L)*B,Q=Math.cos(L)*B;u("hill",H,-1,Q,12+dn()*33,3+dn()*22,10+dn()*20,q,!1,L);let k=4+dn()*16;d(H,k*.5-1,Q,3+dn()*9,k,4+dn()*8,Rs([10194306,8949389,10128258]),!1)}h.finalize();let A=new hn({roughness:.88});for(let{shape:F,shadow:L,items:B}of Object.values(a)){let q=new bi(l[F],A,B.length);B.forEach(({matrix:H,color:Q},k)=>{q.setMatrixAt(k,H),q.setColorAt(k,Q)}),q.castShadow=L,q.receiveShadow=!0,n.add(q)}let I=new Ne,P=new Pe(new Xr(1.6,1.85,40),new tn({color:15794054,side:gn,transparent:!0,opacity:.85,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.y=.26,I.add(P);let G=new Pe(new _s(.43),new tn({color:15794054}));return G.position.y=2.8,I.add(G),n.add(I),{solid:i,marker:I,beacon:G,sun:t,sky:e,houseRoof:m,bed:Rd,doors:g,buildings:o,props:h,...Zd(i,s,r,g,Bn)}}function I_(){let n=[-.5,0,-.5],t=[-.5,0,.5],e=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,t,e,i,r,s,n,r,i,n,e,r,t,r,e,t,s,r,n,s,t,n,i,s],a=new je;return a.setAttribute("position",new Te(o.flat(),3)),a.computeVertexNormals(),a}var fr=2.05,Rl=7.15;function P_(n){let t=[];return n.forEach((e,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(e[0]-s[0]),a=Math.sign(e[1]-s[1]),l=Math.sign(r[0]-e[0]),c=Math.sign(r[1]-e[1]),u={x:e[0]-a*fr-o*Rl,z:e[1]+o*fr-a*Rl},d={x:e[0]-c*fr+l*Rl,z:e[1]+l*fr+c*Rl},f=o===l&&a===c,h={x:e[0]-(f?a:a+c)*fr,z:e[1]+(f?o:o+l)*fr},_={x:e[0],z:e[1],id:e.join(",")};for(let M=0;M<=6;M++){let m=M/6,g=1-m;t.push({x:g*g*u.x+2*g*m*h.x+m*m*d.x,z:g*g*u.z+2*g*m*h.z+m*m*d.z,junction:_,curve:!f,angle:Math.atan2(o,a)})}}),t}var Is=(n,t,e,i)=>[[n,t],[n,i],[e,i],[e,t]],L_=[Is(-57,-57,57,57),Is(-57,-19,19,57).reverse(),Is(-19,-57,57,19),Is(-19,-19,19,19).reverse(),Is(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],Is(-57,-57,57,57).reverse(),Is(-19,-57,57,57).reverse()];function D_(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=t[0]===i[0]?1:0,r=1-s,o=oi.filter(a=>a>Math.min(t[s],i[s])&&a<Math.max(t[s],i[s]));return i[s]<t[s]&&o.reverse(),[t,...o.map(a=>r===0?[t[0],a]:[a,t[1]])]})}var N_=L_.map(n=>P_(D_(n))),U_=[1,3,1,1,5,5,7,10];function vo(n,t,e=0){let i=N_[t],s=(U_[t]*7+e)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;ts(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+t%4*1.02,stuck:0,routeIndex:t,pass:null},n.stolen=!1,n.abandoned=0}function Pl(n,t,e){let i=Math.atan2(t.x-n.x,t.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=e*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:Me(s*1.9,-1,1),throttle:Me((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function vh(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=es(n.kind),a=n.kind==="bike",l=i;for(let c of t){if(c===n||ft(c,n)>20)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s),_=es(c.kind,c.angle-n.angle);if(f<.2||h>o.width+_.width+.16)continue;let M=Math.max(0,f-o.length-_.length-(a?.39:.64)),m=Math.max(0,c.vx*s+c.vz*r);l=Math.min(l,m+M*.87)}for(let c of e){if(c.down>0||c.health<=0||c.seated||ft(c,n)>11)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s);f>0&&h<o.width+.4&&(l=Math.min(l,Math.max(0,f-o.length-.9)*.94))}return l}function Qd(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...t.filter(c=>c!==n&&Math.hypot(c.vx,c.vz)<2).map(c=>({other:c,radius:1.05})),...e.filter(c=>c.down<=0&&c.health!==0&&!c.seated).map(c=>({other:c,radius:.43}))].find(({other:c,radius:u})=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>2.25&&h<13.4&&Math.abs(d*r-f*s)<u+1.05});if(!a)return null;let l=(c,u)=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>-3&&h<23&&Math.abs(d*r-f*s-u)<2.3};for(let c of[2.72,-2.72]){if(t.some(f=>f!==n&&f!==a.other&&l(f,c))||e.some(f=>f!==a.other&&f.down<=0&&l(f,c)))continue;let u=n.x+s*8+r*c,d=n.z+r*8-s*c;if(Ii(u,d,n.angle,i,n.kind)&&Ii((u+n.x)*.5,(d+n.z)*.5,n.angle,i,n.kind))return{x:u,z:d}}return null}function jd(n,t,e,i){let s=n.kind==="bike",r=es(n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),l=m=>({along:(m.x-n.x)*o+(m.z-n.z)*a,across:(m.x-n.x)*a-(m.z-n.z)*o}),c=[...t.filter(m=>m!==n).map(m=>({actor:m,...es(m.kind,m.angle-n.angle),moving:!0})),...e.filter(m=>m.health>0&&!m.seated&&!m.down).map(m=>({actor:m,width:.34,length:.34,moving:!1}))].map(m=>({...m,...l(m.actor)})),u=c.filter(({actor:m,along:g,across:y,width:T,length:S,moving:R})=>g>Math.max(s?1.2:2.4,r.length+S-.3)&&g<19&&Math.abs(y)<r.width+T+.16&&(!R||Math.hypot(m.vx,m.vz)<(s?8:6)));u.sort((m,g)=>m.along-g.along);let d=u[0];if(!d||d.along-r.length-d.length<(s?1.85:2.45))return null;let f=r.width+d.width+(s?.23:.38),h=s?Math.max(1.12,f):2.95,_=s?[h,-h,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[h,-h,3.45,-3.45],M=d.along+r.length+d.length+(s?3:4.1);for(let m of _){if(Math.abs(d.across-m)<f)continue;let g=r.length+(s?3.9:5.8);if(!c.every(p=>{if(p===d)return!0;let v=p.moving?Math.max(0,-p.actor.vx*o-p.actor.vz*a):0;return p.along<-r.length-p.length-.2||p.along>M+g+Math.min(10,v)||Math.abs(p.across-m)>r.width+p.width+(s?.25:.46)}))continue;let T=Math.max(s?2.4:3.8,Math.min(s?5:6.1,d.along-r.length+1.2)),S=Bn(n.x,n.z),R=Math.ceil(M/.72),b=!0;for(let p=1;p<=R;p++){let v=p*M/R,A=m*Math.min(1,v/T),I=n.x+o*v+a*A,P=n.z+a*v-o*A,G=s?.27:.9;if(Math.abs(Bn(I+a*G,P-o*G)-S)>=.08||Math.abs(Bn(I-a*G,P+o*G)-S)>=.08||!ch({x:I,z:P,angle:n.angle,kind:n.kind},i,t,n)){b=!1;break}}if(b)return{x:n.x,z:n.z,sx:o,sz:a,offset:m,obstacle:d.actor,phase:"out",age:0,clearAfter:r.length+d.length+(s?.9:1.2)}}return null}function F_(n,t,e,i,s=[]){t.age+=i;let r=n.kind==="bike",o=es(n.kind),{sx:a,sz:l,offset:c}=t,u=(n.x-t.x)*a+(n.z-t.z)*l,d=(n.x-t.x)*l-(n.z-t.z)*a,f=(t.obstacle.x-t.x)*a+(t.obstacle.z-t.z)*l;if(t.age>(r?10:13)||t.phase==="merge"&&Math.abs(d)<.53)return null;t.phase==="out"&&Math.abs(d-c)<(r?.28:.55)&&(t.phase="pass"),t.phase!=="merge"&&u>f+t.clearAfter&&e.every(S=>{if(S===n)return!0;let R=es(S.kind,S.angle-Math.atan2(a,l));return Math.abs((S.x-t.x)*l-(S.z-t.z)*a)>o.width+R.width+.3||Math.abs((S.x-n.x)*a+(S.z-n.z)*l)>o.length+R.length+1.25})&&(t.phase="merge");let h=t.phase==="merge"?0:c,_=e.some(T=>{if(T===n||T===t.obstacle)return!1;let S=(T.x-n.x)*a+(T.z-n.z)*l,R=(T.x-t.x)*l-(T.z-t.z)*a,b=es(T.kind,T.angle-Math.atan2(a,l));return S>0&&S<o.length+b.length+2.7&&Math.abs(R-h)<o.width+b.width+.28})||s.some(T=>{if(T.health<=0||T.seated||T.down)return!1;let S=(T.x-n.x)*a+(T.z-n.z)*l,R=(T.x-t.x)*l-(T.z-t.z)*a;return S>0&&S<o.length+2.1&&Math.abs(R-h)<o.width+.45}),M=t.phase==="out"?r?2.3:4.4:r?4.8:7,m={x:t.x+a*(u+M)+l*h,z:t.z+l*(u+M)-a*h},g=t.phase==="out"?r?4.5:4.8:r?8.1:6.5,y=Pl(n,m,_?0:g);return _&&(y.throttle=0),y}function Il(n,t,e,i,s){return ch(t,s,e,n)&&i.every(r=>r.health<=0||r.seated||r.down||!Pi(t,r.x,r.z,.26))}function O_(n,t,e,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=e.filter(u=>u!==n&&ft(n,u)<29),l=null,c=-1/0;for(let u of[0,-.62,.62,-1,1]){let d={x:n.x,z:n.z,angle:n.angle,kind:n.kind},f=0;for(let g=0;g<(r?13:19)&&(d.angle-=u*.18*(r?.75:.56),d.x-=Math.sin(d.angle)*.18,d.z-=Math.cos(d.angle)*.18,!!Il(n,d,e,i,s));g++)f+=.18;if(f<(r?.9:1.35))continue;Il(n,d,e,i,s)||(d.x+=Math.sin(d.angle)*.18,d.z+=Math.cos(d.angle)*.18,d.angle+=u*.18*(r?.75:.56));let h={...d},_=0;for(let g=0;g<27;g++){let y=Math.atan2(t.x-h.x,t.z-h.z);if(h.angle=ai(h.angle,y,r?.13:.092),h.x+=Math.sin(h.angle)*.24,h.z+=Math.cos(h.angle)*.24,!Il(n,h,e,i,s))break;_+=.24}let M=r&&jd(d,a,i,s),m=_*.67+(ft(n,t)-ft(h,t))*.38+f*.31-Math.abs(u)*.12+(M?4.6:0);m>c&&(c=m,l={steer:u,pace:o,distance:Math.max(.7,f-.26),age:0,x:n.x,z:n.z})}return l}function Mh(n,t,e,i,s,r,o,a,l=!0){let c=n.kind==="bike",u=t.recoverPosition;t.recoverPosition={x:n.x,z:n.z};let d=u&&ft(u,n)>o*.57;if(t.recoverRetry=Math.max(0,(t.recoverRetry??0)-o),t.maneuver){let h=t.maneuver;h.age+=o;let _=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),M={x:n.x-Math.sin(n.angle)*_,z:n.z-Math.cos(n.angle)*_,angle:n.angle,kind:n.kind};return ft(n,h)>=h.distance||h.age>(c?2.4:2.8)||!Il(n,M,i,s,r)?(t.maneuver=null,t.recoverWait=0,t.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:h.steer,throttle:n.speed>-h.pace?Me((n.speed+h.pace)*-.64,-.54,-.05):0,brake:!1}}t.recoverWait=!l||d||ft(n,e)<1.2?0:(t.recoverWait??0)+o;let f=c?1.08:1.75;return t.recoverRetry>0||t.recoverWait<f||n.integrity<=0?a:(t.maneuver=O_(n,e,i,s,r),t.maneuver?(t.recoverWait=0,{steer:t.maneuver.steer,throttle:-.47,brake:!1}):(t.recoverRetry=.85,a))}function tf(n,t,e,i,s,r){for(let[o,a]of r)(!a.driver||a.integrity<=0||ft(a,a.driver.route[a.driver.next].junction)>11)&&r.delete(o);for(let o of n){let a=o.driver;if(!a||o.integrity<=0){o!==t.player&&Math.hypot(o.vx,o.vz)>.06?li(o,s,{throttle:0,steer:0,brake:!0},i,t.vehicles):o!==t.player&&(o.impact=Math.max(0,o.impact-s*21));continue}let{route:l}=a,c=o.kind==="bike",u=l[a.next],d=Math.sin(o.angle),f=Math.cos(o.angle);for(let A=0;!a.maneuver&&A<6;A++){let I=u.x-o.x,P=u.z-o.z;if(Math.hypot(I,P)>2.55&&(I*d+P*f>0||Math.hypot(I,P)>5))break;a.next=(a.next+1)%l.length,u=l[a.next]}let{junction:h}=u,_=ft(o,h),M=r.get(h.id);!M&&_<9.7&&r.set(h.id,o);let m=a.cruise*(c?1.13:1),g=u.curve&&_<12?Math.min(c?7.1:5.9,m):m,y=M&&M!==o&&_<15;y&&(g=Math.min(g,Math.max(0,_-7.4)*.96));let T=vh(o,t.vehicles,e,g);!a.pass&&!a.maneuver&&!y&&T<g*(c?.88:.78)&&(!u.curve||_>(c?8:11))&&(a.pass=jd(o,t.vehicles,e,i));let S=a.pass?F_(o,a.pass,t.vehicles,s,e):null;S||(a.pass=null);let R=S??Pl(o,u,T);!S&&T<.4&&(R.throttle=0);let b=o.x,p=o.z,v=Mh(o,a,u,t.vehicles,e,i,s,R,!y||a.stuck>4.4);a.maneuver&&(a.pass=null),li(o,s,v,i,t.vehicles),a.stuck=Math.hypot(o.x-b,o.z-p)<s*.62?a.stuck+s:0}}function Sh(n,t,e,i){return ft(n,e)>13&&Ii(n.x,n.z,n.angle,i,n.kind)&&t.every(s=>ft(s,n)>5.2)}var z_=[];function bh(n,t,e,i,s){let r=-1/0,o=1/0,a=-1,l=-1;for(let c=0;c<3;c++){let u=n[c],d=t[c],f=e[c],h=e[c+3];if(Math.abs(d)<1e-5){if(u<f||u>h)return 1/0;continue}let _=1/d,M=(d>0?f-u:h-u)*_,m=(d>0?h-u:f-u)*_;if(M>r&&(r=M,a=c*2+ +(d<0)),m<o&&(o=m,l=c*2+ +(d>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=l,Math.max(0,o))}function B_(n,t,e,i){if(!i)return t[1]<-1e-5&&n[1]>=0?-n[1]/t[1]:1/0;if(t[1]>1e-5)return 1/0;let s=o=>n[1]+t[1]*o-i(n[0]+t[0]*o,n[2]+t[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,e/12);if(r<1e-5)return 1/0;for(let o=0;o<e;o+=r){let a=o,l=Math.min(o+r,e);if(!(s(l)>0)){for(let c=0;c<10;c++){let u=(a+l)*.5;s(u)>0?a=u:l=u}return l}}return 1/0}function ef(n,t,e,i,s,r){let o=s,a=null,l=null,c=null,u=-1,d=0,f={face:-1};for(let _ of e){if(_.off)continue;let M=_.bounds??[_.x-_.w*.5,_.y0??_.base??0,_.z-_.d*.5,_.x+_.w*.5,_.h,_.z+_.d*.5],m=bh(n,t,M,o,f);m>=o||(o=m,l=_,c="solid",u=f.face)}let h=B_(n,t,o,r);h<o&&(o=h,l=null,c="ground",u=3);for(let _ of i){let M,m=_.oriented;if(m){let{center:g,half:y,angle:T}=m,S=n[0]-g[0],R=n[1]-g[1],b=n[2]-g[2],p=Math.sin(T),v=Math.cos(T),A=[v*S-p*b,R,p*S+v*b],I=[v*t[0]-p*t[2],t[1],p*t[0]+v*t[2]];M=bh(A,I,[-y[0],-y[1],-y[2],y[0],y[1],y[2]],o,f)}else if(_.bounds)M=bh(n,t,_.bounds,o,f);else continue;M>=o||(o=M,a=_,l=null,c="target",u=f.face,d=m?.angle??0)}return{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}}function Mo(n,t,e,i,s=52){let{distance:r,hit:o}=ef(n,t,e,i,s,null);return{distance:r,hit:o}}function Ll(n,t,e,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}=ef(n,t,e,i,s,r),f=n.map((_,M)=>_+t[M]*o),h=null;if(u!==-1&&(h=[0,0,0],h[Math.floor(u/2)]=u%2?1:-1,d)){let[_,M,m]=h,g=Math.sin(d),y=Math.cos(d);h=[y*_+g*m,M,-g*_+y*m]}return{distance:o,hit:a,point:f,normal:h,solid:l,surface:c}}function nf(n,t,e,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...t),l=a>1e-5?t.map(_=>_/a):[0,0,1],c=Ll(n,l,i,s,r,{ground:o}),u=c.point.map((_,M)=>_-e[M]),d=u.reduce((_,M,m)=>_+M*l[m],0),f=Math.hypot(...u),h=d>.025&&f>1e-5?u.map(_=>_/f):l;return{direction:h,sight:c,impact:Ll(e,h,i,s,r,{ground:o})}}function pr(n,t,e){let i=t.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return Mo(n,r,e,z_,s).distance>=s-.01}function Dl(n,t,e,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let l=t.x-n.x,c=t.z-n.z,u=Math.hypot(l,c),d=(n.ground??0)+r,f=(t.ground??0)+o;if(Math.hypot(u,f-d)>s)return!1;if(u>1e-5){let h=n.angle??0;if((Math.sin(h)*l+Math.cos(h)*c)/u<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(f-d,u)+(n.pitch??0))>a*.5?!1:pr([n.x,d,n.z],[t.x,f,t.z],e)}function sf(n,t,e,i){let s=null,r=1.86;for(let o of t){if(o.down>0)continue;let a=o.x-n.x,l=o.z-n.z,c=Math.hypot(a,l),u=Math.sin(n.angle)*a+Math.cos(n.angle)*l;c>=r||u<c*.36||!pr([n.x,e+1,n.z],[o.x,e+1,o.z],i)||(s=o,r=c)}return s}var mr=44,Ps=12,wh=new W(0,1,0),k_=new W(0,0,1),ss=new Qe,Li=new be,hi=new W,Nl=new W,Ul=new W,G_=new ee;function V_(){let t=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),l=Math.hypot(r,o),c=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,u=l<.35+Math.sin(a*4)*.06,d=(s*239+i*167)%19/19,f=u?9+d*27:101+d*64,h=u?.99:Math.min(.84,Math.max(0,(c-l)*3.6))*(.51+d*.49),_=(i*32+s)*4;t[_]=f,t[_+1]=f*.92,t[_+2]=f*.81,t[_+3]=Math.round(h*255)}let e=new ms(t,32,32,In);return e.colorSpace=$e,e.magFilter=ln,e.minFilter=ln,e.needsUpdate=!0,e}function Fl(n,t,e,i){let s=new bi(t,e,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(gl),n.add(s),s}function H_(n){let t=new Nn(1,1),e=new qi(new Float32Array(mr),1);e.setUsage(gl),t.setAttribute("markAlpha",e);let i=new tn({map:V_(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=Fl(n,t,i,mr);return s.renderOrder=3,{mesh:s,fade:e}}function rf(n){let{mesh:t,fade:e}=H_(n),i=new tn({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=Fl(n,new Dn(.015,.015,1,5),i,Ps),r=new tn({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=Fl(n,new Ti(1,0),r,Ps),a=new tn({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),l=Fl(n,new _s(1),a,Ps),c=Array.from({length:Ps},()=>({age:1/0,distance:0,point:new W,start:new W,direction:new W,surface:null})),u=Array.from({length:mr},()=>({time:0,life:0,point:new W,normal:new W,attachment:null,radius:0})),d=0,f=0,h=new be().makeScale(0,0,0),_=new se(16768142),M=new se(16754545);function m(){for(let T=0;T<Ps;T++)c[T].age=1/0,s.setMatrixAt(T,h),o.setMatrixAt(T,h),l.setMatrixAt(T,h);for(let T=0;T<mr;T++)u[T].time=0,u[T].attachment=null,t.setMatrixAt(T,h),e.setX(T,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=t.instanceMatrix.needsUpdate=e.needsUpdate=!0,d=f=0}m();function g(T,S,{enemy:R=!1,mark:b=S.surface==="solid"||S.surface==="ground",attach:p=null}={}){let v=c[d],A=d;if(d=(d+1)%Ps,v.start.fromArray(T),v.point.fromArray(S.point),v.distance=v.start.distanceTo(v.point),v.direction.subVectors(v.point,v.start).normalize(),v.surface=S.surface,v.age=0,s.setColorAt(A,R?M:_),s.instanceColor.needsUpdate=!0,b&&S.normal&&S.surface){let I=u[f];f=(f+1)%mr,I.life=(S.surface==="ground"?8:13)+Math.random()*4,I.time=I.life,I.point.copy(v.point),I.normal.fromArray(S.normal).normalize(),I.attachment=p,I.radius=.053+Math.random()*.031,p&&(p.updateWorldMatrix(!0,!1),p.worldToLocal(I.point),I.normal.transformDirection(Li.copy(p.matrixWorld).invert()))}}function y(T){let S=!1,R=!1;for(let b=0;b<Ps;b++){let p=c[b];if(!Number.isFinite(p.age))continue;S=!0,p.age+=T;let v=234,A=Math.min(p.distance,p.age*v+1.7),I=Math.max(0,p.age*v-3.1),P=A-I;if(P>.018){hi.copy(p.start).addScaledVector(p.direction,(A+I)*.5),ss.setFromUnitVectors(wh,p.direction);let F=Math.min(1,P/1.3);Li.compose(hi,ss,Nl.set(F,P,F)),s.setMatrixAt(b,Li)}else s.setMatrixAt(b,h);if(p.age<.071){let F=Math.max(.025,.084-p.age*.78);ss.setFromUnitVectors(wh,p.direction),hi.copy(p.start).addScaledVector(p.direction,.052),Li.compose(hi,ss,Nl.set(F,F*2.2,F)),o.setMatrixAt(b,Li)}else o.setMatrixAt(b,h);let G=p.age-p.distance/v;if(p.surface&&G>=0&&G<.13){let F=Math.max(.006,.041-G*.27);hi.copy(p.point).addScaledVector(p.direction,-(.039+G*.38)),ss.setFromUnitVectors(wh,p.direction),Li.compose(hi,ss,Nl.set(F,F*2.14,F)),l.setMatrixAt(b,Li)}else l.setMatrixAt(b,h);p.age>p.distance/v+.14&&(p.age=1/0)}for(let b=0;b<mr;b++){let p=u[b];if(!(p.time<=0)){if(R=!0,p.time-=T,p.time<=0||p.attachment&&!p.attachment.visible){p.time=0,p.attachment=null,t.setMatrixAt(b,h),e.setX(b,0);continue}hi.copy(p.point),Ul.copy(p.normal),p.attachment&&(p.attachment.updateWorldMatrix(!0,!1),hi.applyMatrix4(p.attachment.matrixWorld),Ul.applyNormalMatrix(G_.getNormalMatrix(p.attachment.matrixWorld))),hi.addScaledVector(Ul,.014),ss.setFromUnitVectors(k_,Ul),Li.compose(hi,ss,Nl.set(p.radius,p.radius,p.radius)),t.setMatrixAt(b,Li),e.setX(b,Math.min(1,p.time*.57))}}S&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=!0),R&&(t.instanceMatrix.needsUpdate=e.needsUpdate=!0)}return{emit:g,update:y,reset:m}}var bo=.42,gr=.145,of=n=>.94*n,Th=n=>n*n*(3-2*n),So=(n,t,e)=>n+(t-n)*e;function W_(n){return n<.065?-.32*Th(n/.065):n<gr?So(-.32,1,Th((n-.065)/(gr-.065))):n<.182?So(1,.89,(n-gr)/(.182-gr)):.89*(1-Th((n-.182)/(bo-.182)))}function af(n,{aim:t=!1,punch:e=0,pitch:i=0,hand:s=0}={}){if(!t&&e<=0)return;let r=n.arms[s],o=n.arms[1-s],a=n.forearms[s],l=n.forearms[1-s],c=s===0?1:-1,u=e>0?W_(Me(bo-e,0,bo)):0,d=Math.max(0,u),f=Math.max(0,-u),h=Me(i,-.64,.53)*.62,_=.07+d*.2-f*.08;n.body.rotation.set(_,c*(.12+d*.46-f*.52),c*(-.02-d*.05)),n.body.position.y+=of(1-Math.cos(_))-.04-d*.03,n.body.position.z+=of(-Math.sin(_))+d*.12;let[M,m]=n.legs,[g,y]=n.shins,T=s===0?M:m,S=s===0?m:M,R=s===0?g:y,b=s===0?y:g;S.rotation.set(-.32-d*.08,0,0),b.rotation.set(.34,0,0),T.rotation.set(.26+d*.16,0,0),R.rotation.set(.18-d*.1,0,0),r.rotation.set(So(-.86,-1.66+h,d)+f*.7,c*(.1-d*.08),c*So(.24,-.04,d)-c*f*.25),a.rotation.set(So(-1.62,-.04,d)-f*.2,0,c*(.1-d*.1)),o.rotation.set(-.98+d*.06,-c*.12,-c*.22),l.rotation.set(-1.78,0,-c*.08),n.pistol.visible=!1}function Yt(n){return document.getElementById(n)}function lf(n,t){let e=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=Yt("stick"),l=Yt("nub"),c=Yt("look"),u=Yt("game"),d=Yt("view"),f=-1,h=-1,_=[],m=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",g=A=>{m=A,Yt("touch").hidden=A!=="touch",u.classList.toggle("touching",A==="touch")};g(m);let y=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","Escape"]);window.addEventListener("keydown",A=>{if(!(!y.has(A.code)||A.target instanceof HTMLSelectElement&&!t())){if((t()||A.code==="Escape")&&A.preventDefault(),A.code==="Escape"){A.repeat||n();return}t()&&(g("keyboard"),e.add(A.code),A.repeat||(A.code==="KeyE"&&i.add("interact"),A.code==="KeyF"&&i.add("fire"),A.code==="KeyR"&&i.add("punch"),A.code==="KeyG"&&i.add("recruit"),A.code==="KeyV"&&i.add("weapon"),A.code==="Space"&&i.add("jump")))}}),window.addEventListener("keyup",A=>e.delete(A.code));function T(){e.clear(),i.clear(),s.clear(),o.x=0,o.y=0,l.style.transform="",f=-1,h=-1,r.x=0,r.y=0,r.aim=!1,Yt("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",T),d.addEventListener("contextmenu",A=>A.preventDefault()),d.addEventListener("wheel",A=>{!t()||!A.deltaY||(A.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(S),S=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let S=0;d.addEventListener("pointerdown",A=>{t()&&A.pointerType==="touch"&&g("touch")}),window.addEventListener("mousedown",A=>{if(!(!t()||document.pointerLockElement!==d&&(!(A.target instanceof Node)||!d.contains(A.target)))){if(A.button===0&&document.pointerLockElement!==d&&d.requestPointerLock){let I=d.requestPointerLock();I&&I.catch(()=>{})}g("keyboard"),A.button===0&&(i.add("fire"),s.add("mouseFire")),A.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",A=>{A.button===0&&s.delete("mouseFire"),A.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",A=>{!t()||m!=="keyboard"||A.pointerType==="touch"||(document.pointerLockElement===d||A.target===d||d.contains(A.target))&&(r.x+=A.movementX,r.y+=A.movementY)});function R(A){let I=a.getBoundingClientRect(),P=A.clientX-I.left-I.width/2,G=A.clientY-I.top-I.height/2,F=I.width*.37,L=Math.max(F,Math.hypot(P,G));o.x=P/L,o.y=G/L,l.style.transform="translate("+o.x*F+"px,"+o.y*F+"px)"}a.addEventListener("pointerdown",A=>{f===-1&&(g("touch"),f=A.pointerId,a.setPointerCapture(A.pointerId),R(A))}),a.addEventListener("pointermove",A=>{A.pointerId===f&&R(A)}),a.addEventListener("lostpointercapture",A=>{A.pointerId===f&&(f=-1,o.x=0,o.y=0,l.style.transform="")});let b=0,p=0;c.addEventListener("pointerdown",A=>{h===-1&&(h=A.pointerId,b=A.clientX,p=A.clientY,c.setPointerCapture(A.pointerId))}),c.addEventListener("pointermove",A=>{A.pointerId===h&&(r.x+=(A.clientX-b)*1.45,r.y+=(A.clientY-p)*1.45,b=A.clientX,p=A.clientY)}),c.addEventListener("lostpointercapture",A=>{A.pointerId===h&&(h=-1)});for(let A of["interact","fire","aim","sprint","punch","jump","weapon","recruit"]){let I=Yt(A);I.addEventListener("pointerdown",P=>{P.preventDefault(),g("touch"),I.setPointerCapture(P.pointerId),A==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),I.setAttribute("aria-pressed",String(s.has("aim")))):A==="sprint"||A==="fire"?(s.add(A),A==="fire"&&i.add(A)):i.add(A)}),(A==="sprint"||A==="fire")&&I.addEventListener("lostpointercapture",()=>s.delete(A))}let v=!1;return{clear:T,read(A,I){v!==A&&(s.delete("aim"),Yt("aim").setAttribute("aria-pressed","false"),v=A);let P=Array.from(navigator.getGamepads?.()??[]).find(Y=>Y?.connected&&Y.mapping==="standard"),G=P?.buttons.map(Y=>Y.pressed||Y.value>.45)??[],F=Y=>G[Y]&&!_[Y],L=Array.from({length:4},(Y,et)=>Id(P?.axes[et]));(G.some(Boolean)||L.some(Y=>Math.abs(Y)>.1))&&g("pad"),(F(9)||!t()&&F(0))&&n();let q=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),H=Number(e.has("KeyW")||e.has("ArrowUp"))-Number(e.has("KeyS")||e.has("ArrowDown")),Q=(P?.buttons[7]?.value??0)-(P?.buttons[6]?.value??0),k={x:Me(q+o.x+L[0],-1,1),y:Me(H-o.y+(A&&Math.abs(Q)>.05?Q:-L[1]),-1,1),lookX:Me(r.x,-140,140)*.0032+L[2]*I*2.45,lookY:Me(r.y,-140,140)*.0028+L[3]*I*1.8,aim:!A&&(r.aim||e.has("KeyQ")||s.has("aim")||!!G[6]),run:s.has("sprint")||e.has("ShiftLeft")||e.has("ShiftRight")||!!G[0],brake:e.has("Space")||s.has("sprint")||!!G[2],interact:i.has("interact")||F(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!A&&!!G[7],punch:i.has("punch")||F(1),recruit:i.has("recruit")||F(12),weapon:i.has("weapon")||F(15),jump:i.has("jump")||F(2),confirm:F(0),mode:m};return _=G,r.x=0,r.y=0,i.clear(),k}}}function cf(){let n,t,e,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,t=n.createGain(),t.gain.value=.46,t.connect(n.destination),e=n.createOscillator(),e.type="triangle",i=n.createGain(),i.gain.value=0,e.connect(i).connect(t),e.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(a,l,c,u,d="sine",f=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+f,_=n.createOscillator(),M=n.createGain();_.type=d,_.frequency.setValueAtTime(a,h),_.frequency.exponentialRampToValueAtTime(l,h+c),M.gain.setValueAtTime(u,h),M.gain.exponentialRampToValueAtTime(.001,h+c),_.connect(M).connect(t),_.start(h),_.stop(h+c)}return{start:r,get enabled(){return s},toggle(){return s=!s,t&&(t.gain.value=s?.46:0),r(),s},motor(a,l){n&&(e.frequency.setTargetAtTime(34+Math.abs(a)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(a){o(a?109:187,a?39:73,a?.125:.084,a?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function Ah(n){return n>1.53?54:n>.92?32:n>.63?24:15}function Eh(n){return Math.round(Me(Math.max(0,n-2.4)**2*.24,0,86))}function Ol(n){return n>=36?3:n>=20?2:n>0?1:0}function hf(n){let i=62.474999999999994,s=Array.from({length:2500},(f,h)=>({x:h%50*2.55-i,z:Math.floor(h/50)*2.55-i})),r=s.map(f=>On(f.x,f.z,.38,n)),o=s.map((f,h)=>r[h]?[h>=50?h-50:-1,h<2450?h+50:-1,h%50?h-1:-1,h%50<49?h+1:-1].filter(M=>M>=0&&r[M]&&On((f.x+s[M].x)*.5,(f.z+s[M].z)*.5,.38,n)):[]),a=(f,h)=>{let _=Math.max(1,Math.ceil(ft(f,h)/.42));for(let M=1;M<=_;M++){let m=M/_;if(!On(f.x+(h.x-f.x)*m,f.z+(h.z-f.z)*m,.31,n))return!1}return!0},l=f=>{let h=Math.round((f.x+i)/2.55),_=Math.round((f.z+i)/2.55),M=[];for(let m=Math.max(0,_-4);m<=Math.min(49,_+4);m++)for(let g=Math.max(0,h-4);g<=Math.min(49,h+4);g++){let y=m*50+g;if(!r[y])continue;let T=s[y].x-f.x,S=s[y].z-f.z;M.push({index:y,d:T*T+S*S})}M.sort((m,g)=>m.d-g.d);for(let{index:m}of M.slice(0,12))if(a(f,s[m]))return m;return M[0]?.index??-1},c=0,u=-1,d=(f,h)=>{let _=l(f),M=l(h);if(_<0||M<0||_===M)return[];let m=new Int32Array(s.length).fill(-1),g=[_];m[_]=_;for(let y=0;y<g.length;y++){let T=g[y];if(T===M){let S=[];for(let R=M;R!==_;R=m[R])S.push(s[R]);return S.reverse()}for(let S of o[T])m[S]===-1&&(m[S]=T,g.push(S))}return[]};return(f,h,_,M)=>{f.repath=(f.repath??0)-M;let m=h.x-f.x,g=h.z-f.z,y=Math.hypot(m,g);if(y<.16)return 0;let T=y<7&&a(f,h),S=Math.floor(performance.now()/16);for(S!==u&&(u=S,c=3),!T&&f.repath<=0&&(c>0?(c--,f.route=d(f,h),f.repath=1.1+Math.random()*.4):f.repath=.05);f.route?.length&&(ft(f,f.route[0])<.7||f.route.length>1&&ft(f,f.route[1])<4&&a(f,f.route[1]));)f.route.shift();let R=T?h:f.route?.[0]??h,b=Math.atan2(R.x-f.x,R.z-f.z),p=Math.min(_*M,ft(f,R));f.angle=ai(f.angle,b,M*8.5);let v=fo(f,f.x+Math.sin(b)*p,f.z+Math.cos(b)*p,.24,n);return v||(f.repath=Math.min(f.repath,.18)),v?_:0}}var zl=n=>oi.reduce((t,e)=>Math.abs(n-e)<Math.abs(n-t)?e:t,oi[0]);function uf(n,t,e,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let M=t.z<o.z;n.stop={x:M?20.9:17.2,z:o.z+(M?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&ft(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&ft(o,n.stop)<2.6){let M=zl(o.x),m=zl(o.z),g=zl(t.x),y=zl(t.z);Math.abs(o.x-M)>3&&Math.abs(o.z-m)>3?n.stop={x:M,z:o.z}:Math.abs(o.x-M)>2.4&&Math.abs(o.z-m)<2.4?n.stop={x:g,z:m}:Math.abs(o.z-m)>2.4?n.stop={x:M,z:y}:g!==M?n.stop={x:M+Math.sign(g-M)*38,z:m}:y!==m?n.stop={x:M,z:m+Math.sign(y-m)*38}:n.stop={x:g,z:t.z}}let a=ft(o,t),l=n.departing?6:14,c=Math.min(l,a*.85,Math.max(3,ft(o,n.stop)*1.85)),u=vh(o,i,s,c),d=!n.departing&&u<2.5?Qd(o,i,s,e):null,f=Pl(o,d??n.stop,d?4.4:u),h=Mh(o,n,n.stop,i,s,e,r,f),_=o.impact>3||Math.abs(o.speed)<1;n.stall=_&&!n.maneuver?n.stall+r:0,li(o,r,h,e,i)}var df="gtbase:progress:1";function ff(n){try{let t=JSON.parse((n??globalThis.localStorage).getItem(df));return!t||t.version!==1||!Number.isFinite(t.cash)||!Number.isFinite(t.ammo)||!Number.isFinite(t.health)?null:{x:bn.x+2.5,z:bn.z-2.73,cash:Me(Math.floor(t.cash),0,999999),armed:t.armed===!0,equipped:t.equipped===!0,ammo:Me(Math.floor(t.ammo),0,360),health:Me(Math.floor(t.health),1,100),recruits:Array.isArray(t.recruits)?[...new Set(t.recruits.filter(e=>Number.isInteger(e)&&e>=0||typeof e=="string"&&/^[\w:-]{1,80}$/.test(e)))]:[]}}catch{return null}}function pf(n,t){try{return(t??globalThis.localStorage).setItem(df,JSON.stringify({...n,version:1})),!0}catch{return!1}}var wo=Yt("view"),X_=Yt("menu"),yr=Yt("play"),xr=Yt("quality"),rs=Yt("shop"),_r=Yt("buy"),Ch=180,mf=260,Bl=36;function kl(n,t){try{return t!==void 0&&localStorage.setItem("gtbase:"+n,t),localStorage.getItem("gtbase:"+n)}catch{return null}}function q_(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,t=new vl({antialias:!n,alpha:!1,powerPreference:"high-performance"});t.toneMapping=Qr,t.toneMappingExposure=1.17,t.shadowMap.type=ys,wo.append(t.domElement);let e=new zr,i=new _n(57,1,.12,370),s=$d(e),r=s.vehicleSolids,o=hf(s.vehicleSolids),a=rf(e),l=x=>x.floorY??s.floorAt(x.x,x.z,0),c=x=>s.walkSolids(x.x,x.z,l(x)),u=()=>[...s.solid,...s.closedDoorSolids()],d=x=>{x.floorY=s.floorAt(x.x,x.z,l(x))},f=x=>l(x)>1.25?[]:v,h={...uo,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,model:Es(e,2386265,3553348,12220240,!0)},_=[{x:15.75,z:-1.8,angle:Math.PI,color:11422e3},{x:-22.8,z:4,angle:0,color:4362871},{x:36,z:15.3,angle:Math.PI/2,color:13084242},{x:53.3,z:-36,angle:0,color:5795484}],M=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033},{x:22.85,z:28,angle:0,color:4678008}],m=[..._.map(({color:x})=>yo(e,x)),...M.map(({color:x})=>gh(e,x))],g=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((x,C)=>{let D=C===3||C===7?gh(e,x):yo(e,x);return D.routeIndex=C,D.kind==="bike"&&(D.rider=Es(e,7429204,3751493,10711635),D.rider.root.visible=!1),D}),y=[...m,...g],T=new Map,S=Array.from({length:15},(x,C)=>{let D=Kn[C%3],J=Kn[Math.floor(C/3)%3],z=[{x:D+12,z:J-12},{x:D+12,z:J+12},{x:D-12,z:J+12},{x:D-12,z:J-12}],U=C%4,ct=z[U],lt=z[(U+1)%4],bt=(C%3+1)/4,qt={x:ct.x+(lt.x-ct.x)*bt,z:ct.z+(lt.z-ct.z)*bt,next:(U+1)%4},Vt=[11626316,14333537,7242655,8810644,13024669];return et({...qt,id:"street:"+C},"civilian",Es(e,Vt[C%5],C%2?5199188:5522251,[12684900,8737330,15052936][C%3]),z)}),R=s.buildings.filter(x=>x.clerk).map((x,C)=>et({...x.clerk,next:0,id:"clerk:"+x.id,buildingId:x.id},"clerk",Es(e,C%2?4615014:7691090,4802374,12817263),[])),b=s.buildings.filter(x=>x.clerk),p=Array.from({length:3},(x,C)=>{let D=Ri.z-6.1+C*4.25,J={x:-1.85,z:Ri.z+[-.23,-4.4,3.94][C],next:0,id:"officer:"+C,buildingId:"station"},z=et(J,"police",Es(e,3558501,2503491,12157017),[]),U={x:8.2,z:D,angle:Math.PI/2},ct=yo(e,3626613,!0);return{officer:z,berth:U,car:ct,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,route:[3,6,1][C],beat:C,startShift:[18,40,26][C]}}),v=[...y,...p.map(x=>x.car)],A=new Map,I=Array.from({length:g.length+2},(x,C)=>{let D=et({x:0,z:0,next:0,id:"driver:"+C},"civilian",Es(e,8549210,4342337,[11765348,8475704][C%2]),[]);return D.seated=!0,D.model.root.visible=!1,D});g.forEach((x,C)=>{x.kind==="car"&&(x.ownDriver=I[C])});let P=()=>I.find(x=>x.seated&&!x.riding&&!v.some(C=>C.ownDriver===x&&C.driver)),G=x=>x.ownDriver?.seated&&!x.ownDriver.riding?x.ownDriver:P(),F=[...S,...R,...p.map(x=>x.officer),...I],L=F,B=new Map(F.map(x=>[x.id,x])),q=new xs(1,14),H=new tn({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),Q=new mn(.27,.115,.38),k={cash:new hn({color:7838308}),ammo:new hn({color:14395738}),weapon:new hn({color:4805464})},Y=[];function et(x,C,D,J){return{home:x,baseRole:C,role:C,model:D,path:J,...x,pace:1.15+Math.abs(x.z)%4*.11,angle:x.angle??0,floorY:x.y??0,scheduleClock:9+Math.abs(x.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function dt(x){x.drop&&(e.remove(x.drop),x.drop=null),Object.assign(x,x.home,{role:x.baseRole,health:100,fear:0,down:0,angle:x.home.angle??0,floorY:x.home.y??0,scheduleClock:9+Math.abs(x.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}),x.model.root.rotation.set(0,x.angle,0),x.model.shadow.visible=!0,x.model.root.visible=!0,d(x),x.model.root.position.set(x.x,l(x),x.z)}let Mt=cf();kl("sound")==="off"&&Mt.toggle();let K=new W,ht=new W,wt=new W,Nt=new W,At=new W,Ht=new W,fe=new W,Wt=new W,he=new W,pe=!1,Qt=!1,rt=null,Ee=!1,Ge=0,ve=null,we=0,Pt=0,ae=0,ue=0,Ce=0,X=0,re=0,jt=.23,Le=0,Et=0,Fe=0,Xt=0,Zt=!0,N="keyboard",w=mf,Z=!1,ut=!1,at=0,St=!1,yt=0,ot=0,it=null,pt=null,O=null,st=null,nt=27,Tt=0,mt=null,vt=0,Ut=[],Jt=ff(),xt=()=>{yr.textContent=Jt?"Continuar do save":"Jogar agora"},Ot=0,te=0,It=0,Se=0,He=0,wn=!1,os=0,as=!1,To="",ui=0,di=1,kn=0,ls=0,Ve=Yt("map").getContext("2d"),cs=document.createElement("canvas");cs.width=cs.height=256;let vn=cs.getContext("2d"),Tn=x=>128+x*1.92;vn.fillStyle="#1d3433",vn.fillRect(0,0,256,256),vn.fillStyle="#46605b";for(let x of oi)vn.fillRect(Tn(x)-10,0,20,256),vn.fillRect(0,Tn(x)-10,256,20);vn.fillStyle="#345048";for(let x of s.vehicleSolids)vn.fillRect(Tn(x.x-x.w/2),Tn(x.z-x.d/2),x.w*1.92,x.d*1.92);vn.fillStyle="#6a7859",vn.fillRect(Tn(-10),Tn(28),38,38);function Di(){let x=xr.value==="high",C=xr.value==="low";t.setPixelRatio(Math.min(devicePixelRatio,x?2:C?1:n?1.45:1.5)*(C?.85:di)),t.setSize(wo.clientWidth,wo.clientHeight),t.shadowMap.enabled=!C&&(x||di>.76),s.sun.shadow.needsUpdate=!0,i.aspect=wo.clientWidth/Math.max(1,wo.clientHeight),i.updateProjectionMatrix()}function Ni(){Yt("sound").textContent=Mt.enabled?"Som ligado":"Som desligado",Yt("sound").setAttribute("aria-pressed",String(Mt.enabled))}function Ui(x){rs.open&&Fi(),pe=x,X_.hidden=x,Yt("hud").hidden=!x,Ro.clear(),x?(Mt.start(),Qt||(re=.32,jt=.22),Qt=!0,Zt=!0,Le=performance.now(),Yt("pause").focus({preventScroll:!0}),Yt("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),Mt.motor(0,!1),Yt("help").removeAttribute("open"),Yt("title").innerHTML="GT<span>BASE</span>",Yt("intro").textContent="Jogo pausado em Vila Brasa.",yr.textContent="Continuar",Yt("reset").hidden=!1,yr.focus())}function vr(){rt=null,it=null,st=null,O=null,pt=null,Ut.length=0,nt=27,w=mf,Z=!1,ut=!1,at=0,St=!1,we=ae=X=ue=Ce=ui=0,Ge=0,Ee=!1,ve=null,a.reset(),s.resetDoors(),Ot=te=It=yt=ot=0,wn=!1,os=0,as=!1,re=.32,jt=.22,Xt=0,Object.assign(h,uo,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),d(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,Cs(h.model,0,0,!1,!1),m.forEach((C,D)=>{ts(C,[..._,...M][D]),C.stolen=!1,C.body.rotation.z=0,is(C,0)}),T.clear(),g.forEach((C,D)=>{vo(C,D),is(C,0)});for(let C of p)ts(C.car,C.berth),Object.assign(C,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),is(C.car,0);for(let C of F)dt(C);for(let C of I)C.seated=!0,C.model.root.visible=!1;for(let C of Y)e.remove(C.mesh);Y.length=0;for(let C of v)C.passengers=[];s.props.reset(),s.sun.shadow.needsUpdate=!0,h.deadTime=0,Co(p[0]);let x=b.find(C=>C.kind==="armory")?.entry??cr;s.marker.position.set(x.x,.02,x.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,Fe=0}function Re(x){To=x,ui=2.4}function Gl(){Yt("shop-detail").textContent=Z?"Reponha a muni\xE7\xE3o at\xE9 "+Bl+" balas, sem custo.":"Uma pistola e "+Bl+" balas por R$ "+Ch+".",Yt("shop-balance").textContent="Saldo: R$ "+w+" \xB7 Balas: "+at,_r.textContent=Z?"Repor muni\xE7\xE3o":"Comprar pistola",_r.disabled=Z?at>=Bl:w<Ch}function Vl(){Ro.clear(),document.pointerLockElement&&document.exitPointerLock(),Gl(),rs.showModal(),_r.disabled?Yt("close-shop").focus():_r.focus()}function Fi(){rs.close(),Ro.clear(),Fe=0}function Mr(){!rs.open||_r.disabled||(Z?Re("Muni\xE7\xE3o reposta."):(Z=!0,ut=!0,w-=Ch,Re("Pistola comprada.")),at=Bl,Mt.bell(),Fi())}function E(x){let C={...x,ground:v.includes(x)?x.root.position.y:l(x),angle:x.angle},D=u();return p.some(J=>{let{officer:z,car:U,mode:ct}=J;return z.health<=0?!1:z.seated&&["driving","patrol","returning"].includes(ct)?Dl({...U,ground:U.root.position.y},C,D,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Dl({...z,ground:l(z)},C,D,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function V(x,C=rt??h,D=E(C)){if(!D)return!1;let J=Ol(we);return we=Math.min(64,Math.max(we+(we>0?x*.52:0),x)),Ee=!0,Ge=.24,ve={x:C.x,z:C.z,y:l(C),health:100,seated:!1,angle:C.angle},J||Re("Crime visto pela pol\xEDcia."),!0}let tt=()=>!rt&&l(h)<1&&b.some(x=>x.kind==="armory"&&s.interiorAt(h.x,h.z,l(h))?.buildingId===x.id&&ft(h,x.clerk)<3),$=()=>!rt&&ft(h,{x:bn.x,z:bn.z+6.25})<1.7,j=()=>v,_t=x=>x&&x.health>0&&!x.seated,zt=x=>x.kind==="bike"?"Moto":"Cup\xEA",Ct=()=>!rt&&s.doors.find(x=>x.private&&!x.breached&&!x.opened&&Math.abs(x.base-l(h))<.85&&ft(x,h)<1.62);function Lt(){if(l(h)>1.02)return null;let x=null,C=3;for(let D of y){let J=ft(h,D);J>=C||D.integrity<=0||Math.abs(D.speed)>3.4||(x=D,C=J)}return x}function Bt(x=!1){if(!rt)return;let{angle:C,x:D,z:J}=rt;if(!x&&Math.hypot(rt.vx,rt.vz)>4.2){Re("Reduza a velocidade para sair.");return}let z=rt.kind==="bike"?1.02:1.64,U=[z,-z,z+.53,-z-.53].map(lt=>[D+Math.cos(C)*lt,J-Math.sin(C)*lt]);U.push([D-Math.sin(C)*3.05,J-Math.cos(C)*3.05],[D+Math.sin(C)*3.05,J+Math.cos(C)*3.05]);let ct=U.find(([lt,bt])=>ci({x:lt,z:bt},lt,bt,s.walkSolids(lt,bt,0),v,L,.36));if(!ct&&!x){Re("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=ct??[uo.x,uo.z],h.floorY=0,d(h);for(let lt of[...rt.passengers??[]])Xe(lt);h.angle=C,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),rt.abandoned=0,rt=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,C,0),Cs(h.model,0,0,!1,ut)}function ie(){Bt(!0),Object.assign(h,{x:bn.x,z:bn.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0}),d(h),yt=0,we=0,ot=0,re=-Math.PI/2,Zt=!0,Re("Voc\xEA voltou para casa.")}function de(){if(it||h.health<=0)return;if(rt){Bt();return}if(tt()){Vl();return}if($()){let C={health:h.health,cash:w,armed:Z,equipped:ut,ammo:at,recruits:Ut.map(D=>D.id)};Re(pf(C)?"Progresso salvo na porta de casa.":"O navegador bloqueou o salvamento."),Mt.bell();return}let x=Lt();if(!x){Re(Ct()?"Porta trancada.":"Nada para interagir aqui.");return}if(x.driver){let C=G(x)??I.find(D=>D.exitAge>14&&D.role==="civilian"&&ft(D,h)>11);if(C){let D=x.angle-Math.PI/2,J=x.x+Math.sin(D)*(x.kind==="bike"?.95:1.51),z=x.z+Math.cos(D)*(x.kind==="bike"?.95:1.51),U=ci({x:J,z},J,z,s.walkSolids(J,z,0),v,L,.29)?{x:J,z}:{x:h.x,z:h.z};dt(C),Object.assign(C,U,{angle:D,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),x.rider&&(x.rider.root.visible=!1)}x.driver=null,x.vx=x.vz=x.speed=0,x.doorTime=.65,it={car:x,delay:.46},Re(x.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else kt(x)}function kt(x){rt=x,x.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),yt=0,h.model.root.visible=!0,h.model.shadow.visible=!1,x.stolen||(x.stolen=!0,V(13)),x.passengers??=[],x.kind==="car"&&Ut.filter(D=>_t(D)&&ft(D,x)<35).sort((D,J)=>ft(D,x)-ft(J,x)).slice(0,3-x.passengers.length).forEach((D,J)=>{D.boardCar=x,D.boardSide=J===1?-1:1,D.boardRow=J===0?.62:-1}),re=x.angle,Xt=0,Zt=!0}function le(x,C,D){let J=new Pe(Q,k[x]),z=l(C)+.13;J.position.set(C.x+.22,z,C.z+.19),e.add(J),Y.push({mesh:J,kind:x,count:D,y:z,wait:.32,left:105})}function We(x){for(let C=Y.length-1;C>=0;C--){let D=Y[C];D.left-=x,D.wait-=x,D.mesh.rotation.y+=x*2.1,D.mesh.position.y=D.y+Math.sin(D.left*3.8)*.08;let J=!rt&&h.health>0&&D.wait<0&&Math.abs(l(h)-D.y)<.65&&Math.hypot(h.x-D.mesh.position.x,h.z-D.mesh.position.z)<1.03;J&&(D.kind==="cash"?(w+=D.count,Re("R$ "+D.count+" recolhidos.")):!Z&&D.kind==="weapon"?(Z=ut=!0,at+=D.count,Re("Pistola recolhida.")):(at=Math.min(360,at+D.count),Re("+"+D.count+" balas.")),Mt.bell()),(J||D.left<=0)&&(e.remove(D.mesh),Y.splice(C,1))}}function me(x,C,D=null){if(x.health<=0||C<=0)return;if(x.health=Math.max(0,x.health-C),x.health<=0){let U=D?x.x-D.x:x.pushX,ct=D?x.z-D.z:x.pushZ;if(x.fallDir=Math.sin(x.angle)*U+Math.cos(x.angle)*ct>0?1:-1,x.deadTime=0,D&&x!==h){let lt=Math.max(.1,Math.hypot(U,ct));x.pushX+=U/lt*1.3,x.pushZ+=ct/lt*1.3}}if(x===h){It=.22,x.health<=0&&(Bt(!0),ot=3,Re("Voc\xEA caiu. Voltando para casa\u2026"));return}if(x.stagger=.32,x.fear=6,x.surrender=0,O?.npc===x&&(O=null),x.health>0)return;pt===x&&(pt=null),x.down=x.role==="police"?28:19,x.model.shadow.visible=!1;let J=new Pe(q,H);J.position.set(x.x+Math.sin(x.angle)*x.fallDir*1,l(x)+.019,x.z+Math.cos(x.angle)*x.fallDir*1),J.rotation.x=-Math.PI/2,J.scale.set(.52,.32,1),e.add(J),x.drop=J,x.role==="police"?le(Z?"ammo":"weapon",x,12):x.role!=="ally"&&!x.robbed&&le("cash",x,24+Math.floor(Math.abs(x.z)%27)),st===x&&(st=null,nt=29);let z=Ut.indexOf(x);z>=0&&Ut.splice(z,1)}function Ae(x){return[...L,h].filter(D=>D!==x&&_t(D)&&!(D===h&&rt&&rt.kind==="car")).map(D=>{let J=l(D)+(D===h?h.lift:0);return{actor:D,y:J,bounds:[D.x-.31,J+.1,D.z-.31,D.x+.31,J+1.9,D.z+.31]}})}function sn(){i.getWorldDirection(Ht);let x=Ae(h),C=u(),D=Mo(i.position.toArray(),Ht.toArray(),C,x,28).hit,J=[h.x,l(h)+1.38+h.lift,h.z];if(D&&ft(h,D.actor)<24&&pr(J,[D.actor.x,D.y+1.25,D.actor.z],C))return D.actor;let z=.15,U=null;for(let{actor:lt,y:bt}of x){if(ft(h,lt)>18)continue;Nt.set(lt.x,bt+1.25,lt.z).project(i);let qt=Math.hypot(Nt.x,Nt.y);Nt.z>=1||qt>=z||!pr(J,[lt.x,bt+1.25,lt.z],C)||(z=qt,U=lt)}if(U)return U;let ct=v.filter(lt=>lt!==rt&&lt.integrity>0&&ft(h,lt)<32).map(lt=>({car:lt,oriented:{center:[lt.x,lt.root.position.y+.8,lt.z],half:lt.kind==="bike"?[.4,.75,1.1]:[1,.75,2.42],angle:lt.angle}}));return Mo(i.position.toArray(),Ht.toArray(),C,ct,34).hit?.car??null}let Ft=x=>p.find(C=>C.car===x),rn=x=>v.includes(x);function _e(x){if(x===rt||x.driver)return!0;let C=Ft(x);return!!(C&&C.officer.seated&&C.officer.health>0&&["driving","patrol"].includes(C.mode))}let Gn=x=>!!x&&(rn(x)?x!==rt&&x.integrity>0&&_e(x):_t(x));function Oe(x){if(x){if(rn(x)){x!==rt&&x.integrity>0&&_e(x)&&(pt=x);return}x.role!=="ally"&&x.health>0&&(pt=x)}}function Oi(x,C,D){let J=Ft(x),z=J&&J.officer.seated&&["driving","patrol"].includes(J.mode)?J:null,U=z?.officer??(x.driver?G(x):null);if(!U)return!1;z||dt(U);let ct=x.angle-Math.PI/2,lt=x.kind==="bike"?.95:1.55;return Object.assign(U,{seated:!1,x:x.x+Math.sin(ct)*lt,z:x.z+Math.cos(ct)*lt,fear:6,exitAge:0,floorY:0}),U.model.root.visible=!0,U.model.shadow.visible=!0,x.driver=null,x.vx*=.45,x.vz*=.45,x.speed*=.45,x.rider&&(x.rider.root.visible=!1),z&&(z.mode="foot"),me(U,C,D),!0}function Qn(x,C,D,J){if(x.kind==="bike"){if(C>.85||Math.random()<.45){x===rt?(me(h,14,D),h.health>0&&Math.random()<.3&&(Bt(!0),h.trip=.6,Re("Voc\xC3\xAA caiu da moto."))):Oi(x,40,D);return}x.integrity=Math.max(0,x.integrity-4);return}if(C>.92){if(_h(x,J),x===rt){let z=(x.passengers??[]).filter(ct=>ct.health>0),U=z.length&&Math.random()<z.length/(z.length+1.6)?z[Math.floor(Math.random()*z.length)]:h;me(U,U===h?16:24,D),U===h&&Re("Tiro atravessou o vidro.")}else Oi(x,38+Math.round(Math.random()*30),D);return}x.integrity=Math.max(0,x.integrity-5)}function fi(x,C){let D=Math.sin(x.angle),J=Math.cos(x.angle),z=(C.boardRow??-1)*hr*.9;for(let U of[C.boardSide??1,-(C.boardSide??1)]){let ct={x:x.x+J*U*1.5+D*z,z:x.z-D*U*1.5+J*z};if(ci(C,ct.x,ct.z,s.walkSolids(ct.x,ct.z,0),[],[],.3))return ct}return{x:x.x-D*3.1,z:x.z-J*3.1}}function ye(x,C){let D=x.boardCar;if(rt!==D||D.integrity<=0||(D.passengers?.length??0)>=3)return x.boardCar=null,0;if(Math.hypot(D.vx,D.vz)>2.5){let gt=Lh(D,Ut.indexOf(x));return ft(gt,x)>1.25?Wl(x,gt,6.1,C):0}let J=fi(D,x),z=Math.sin(D.angle),U=Math.cos(D.angle),ct=x.x-D.x,lt=x.z-D.z,bt=ct*z+lt*U,qt=ct*U-lt*z,Vt=(J.x-D.x)*U-(J.z-D.z)*z;if(ft(x,J)<.75||ft(x,D)<1.9||Math.abs(qt)>1.2&&Math.abs(qt)<1.95&&Math.abs(bt)<1.85)return x.seated=!0,x.riding=D,x.boardCar=null,x.model.root.visible=!1,D.passengers.push(x),D.doorTime=.6,0;if(Math.abs(qt)>=1.45)return x.boardSide=Math.sign(qt),pi(x,J,4.8,C);let Kt=Math.sign(Vt)||1,Gt=(Math.sign(bt)||1)*Math.max(3.05,Math.abs(bt));return pi(x,{x:D.x+z*Gt+U*Kt*1.65,z:D.z+U*Gt-z*Kt*1.65},4.8,C)}function Xe(x){let C=x.riding;if(x.riding=null,x.boardCar=null,!C)return;C.passengers=(C.passengers??[]).filter(ct=>ct!==x);let D=Math.sin(C.angle),J=Math.cos(C.angle),z=[[1.6,-1],[-1.6,-1],[1.6,.62],[-1.6,.62],[0,-3.3],[2.3,0],[-2.3,0],[0,3.4]].map(([ct,lt])=>({x:C.x+J*ct+D*lt,z:C.z-D*ct+J*lt})),U=z.find(ct=>ci(x,ct.x,ct.z,s.walkSolids(ct.x,ct.z,0),v.filter(lt=>lt!==C),L,.3))??z[0];Object.assign(x,U,{seated:!1,floorY:0,angle:C.angle,exitAnim:.3,exitSide:1}),d(x),x.model.root.visible=!0,x.model.shadow.visible=!0}function Mn(x){for(let C of v){if(C.kind!=="car")continue;let D=ft(C,x)<70,J=Ft(C),z=J&&J.officer.seated&&J.officer.health>0&&["driving","patrol"].includes(J.mode)?J.officer:null,U=C.ownDriver?.seated&&C.driver&&C!==rt?C.ownDriver:null;[C===rt?h:z??U,...C.passengers??[]].forEach((lt,bt)=>{lt&&(D?Hd(lt.model,C,bt):lt.model.root.visible=!1)})}}function ze(x){for(let C of Ut){if(!C.riding)continue;let D=C.riding;if(rt!==D||C.health<=0){Xe(C);continue}C.x=D.x,C.z=D.z,C.floorY=0,C.attack-=x,Gn(pt)&&C.attack<=0&&ft(D,pt)<18&&Ih(C,pt)}}function qe(x,C){let D=u(),J={...x,ground:l(x)};for(let z of p){let U=z.officer;_t(U)&&(U===C||Dl({...U,ground:l(U)},J,D,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(z.retaliation=x)}}function Vn(x){if(!x||!["civilian","resident"].includes(x.role)||x.health<=0){Re("Mire em um pedestre dispon\xEDvel para recrutar.");return}x.role="ally",x.surrender=0,x.fear=0,x.route=[],Ut.push(x),O?.npc===x&&(O=null),Re("Guarda-costas recrutado."),Mt.bell()}function Ao(x,C){if(h.health<=0||!C||!["civilian","resident","clerk"].includes(C.role)||C.robbed||ft(h,C)>9||Math.abs(l(h)-l(C))>.65){O&&(O.npc.surrender=0,O=null);return}let D=h.x-C.x,J=h.z-C.z,z=Math.sin(C.angle)*D+Math.cos(C.angle)*J;if(O?.npc!==C){if(O&&(O.npc.surrender=0),O=null,z<Math.hypot(D,J)*.3||C.stagger>0||C.fear>0)return;O={npc:C,left:5}}C.surrender=1,C.angle=Math.atan2(D,J),O.left-=x,O.left<=0&&(C.robbed=!0,C.surrender=0,C.fear=7,le("cash",C,(C.role==="clerk"?104:38)+Math.floor(Math.abs(C.z)%31)),V(15),Re(C.role==="clerk"?"Dinheiro da loja no ch\xE3o.":"Dinheiro no ch\xE3o."),O=null)}function gf(){Ot>0||h.health<=0||h.trip>.15||it||(h.angle=re,He=1-He,h.pushX+=Math.sin(re)*1.5,h.pushZ+=Math.cos(re)*1.5,Ot=bo,wn=!0,os=gr,Oe(mt),Mt.punch(!1))}function xf(){if(wn=!1,h.health<=0||rt)return;let x=sf(h,L.filter(z=>_t(z)&&z.role!=="ally"&&Math.abs(l(h)-l(z))<.73),l(h)+h.lift,u());if(!x)return;Oe(x),Mt.punch(!0);let C=x.x-h.x,D=x.z-h.z,J=Math.max(.2,Math.hypot(C,D));x.pushX=C/J*3.6,x.pushZ=D/J*3.6,me(x,18,h),te=.19,V(x.role==="police"?28:12),Re(x.health<=0?"Pedestre derrubado.":"Soco acertou.")}function _f(x){if(Ot>0||ae>0||h.health<=0||!Z||!ut)return;if(at<=0){x&&Oe(mt),ae=.32,Re("Sem balas. Reponha na loja.");return}let C=E(h);at--,ae=.28,X=.095,h.angle=re,h.model.root.rotation.y=re,Cs(h.model,0,0,!0,!0,0,x?jt:jt-.22),h.model.muzzle.getWorldPosition(At),Mt.shot();let D=Ae(h),J=v.map(gt=>{let Ye=gt.kind==="bike"?.31:.96,De=gt.kind==="bike"?1.08:1.84,Ze=gt.root.position.y;return{car:gt,oriented:{center:[gt.x,Ze+(gt.kind==="bike"?.67:.56),gt.z],half:[Ye,gt.kind==="bike"?.44:.4,gt.kind==="bike"?De:De*hr],angle:gt.angle}}});i.getWorldDirection(Ht);let z=v.filter(gt=>gt.rider&&gt.driver).map(gt=>({rider:gt,oriented:{center:[gt.x,gt.root.position.y+1.42,gt.z],half:[.32,.45,.33],angle:gt.angle}})),U=v.filter(gt=>gt.cabin&&gt!==rt).map(gt=>({windowCar:gt,oriented:{center:[gt.x-.37*Math.sin(gt.angle),gt.root.position.y+1.21,gt.z-.37*Math.cos(gt.angle)],half:[.8,.25,1.25],angle:gt.angle}})),ct=u(),lt=[...D,...z,...U,...J],bt=At.toArray(),qt=nf(i.position.toArray(),Ht.toArray(),bt,ct,lt,{ground:Bn}),Vt=qt.impact,Kt=Vt.hit,Rt=s.doors.find(gt=>gt.private&&!gt.breached&&Vt.solid===gt.closedSolid&&Math.hypot(Vt.point[0]-gt.handle.x,Vt.point[1]-gt.handle.y,Vt.point[2]-gt.handle.z)<.28),Gt=17;if(Rt&&s.breachDoor(Rt.id))Gt=23,Re("Fechadura rompida.");else if(Kt?.actor&&Kt.actor.role!=="ally")Oe(Kt.actor),me(Kt.actor,Ah(Vt.point[1]-Kt.y),h),Gt=Kt.actor.role==="police"?34:23,te=.21,Re(Kt.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(Kt?.rider||Kt?.windowCar){let gt=Kt.rider??Kt.windowCar;Oe(gt),Kt.windowCar&&_h(gt,Vt.point);let Ye={oriented:{center:[gt.x-.42*Math.cos(gt.angle),gt.root.position.y+1.2,gt.z+.42*Math.sin(gt.angle)],half:[.26,.28,.29],angle:gt.angle}};_e(gt)&&(Kt.rider||Mo(bt,qt.direction,[],[Ye],52).hit)&&Oi(gt,Kt.rider?50:100,h)&&(te=.21)}else Kt?.car?(Oe(Kt.car),Kt.car.integrity=Math.max(0,Kt.car.integrity-5),te=.16):x&&Oe(mt);V(Gt,h,C);for(let gt of L)["civilian","resident"].includes(gt.role)&&ft(gt,h)<17&&(gt.fear=Math.max(gt.fear,4.8));a.emit(bt,Vt,{mark:Kt?.car?!0:void 0,attach:Kt?.car?.root})}function yf(x,C){let D=rt;li(D,x,{throttle:C.y,steer:-C.x,brake:C.brake},r,j()),Xt>1.15&&Math.abs(D.speed)>2.4&&(re=ai(re,D.angle,x*2.3))}function vf(x,C){let D=Math.min(1,Math.hypot(C.x,C.y)),J=h.health>0&&!it&&h.trip<.12,z=J?D*(C.aim?2.1:C.run?7.4:4.2):0,U=re+Math.atan2(-C.x,C.y||0);C.jump&&J&&h.lift===0&&(yt=4.18),(yt!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+yt*x-11.8*x*x),yt=h.lift>0?yt-23.6*x:0);let ct=1-Math.exp(-x*(z>.02?19:27));h.vx+=(Math.sin(U)*z-h.vx)*ct,h.vz+=(Math.cos(U)*z-h.vz)*ct;let lt=Tl(h,(h.vx+h.pushX)*x,(h.vz+h.pushZ)*x,c(h),f(h),L);h.pushX*=Math.exp(-x*6.2),h.pushZ*=Math.exp(-x*6.2),h.trip=Math.max(0,h.trip-x),Ot<=0&&J&&(C.aim||D>.05)&&(h.angle=ai(h.angle,C.aim?re:U,x*11));let bt=h.model;if(d(h),bt.root.position.set(h.x,l(h)+h.lift,h.z),bt.shadow.visible=h.health>0&&h.lift<.06,h.health<=0){h.deadTime=(h.deadTime??0)+x;let qt=xh(bt,h.deadTime,-1);bt.root.rotation.set(qt,h.angle,0),bt.root.position.y+=Math.abs(Math.sin(qt))*.17;return}bt.root.rotation.set(Math.min(1.25,h.trip*2.7),h.angle,0),Cs(bt,x,h.trip>.05?0:Math.min(7.5,lt/x),ut&&(C.aim||X>0)&&Ot<=0,ut&&Ot<=0,0,C.aim?jt:0),(Ot>0||C.aim&&!ut)&&af(bt,{aim:C.aim,punch:Ot,pitch:jt,hand:He}),lt&&Ce<=0&&h.lift===0&&(Mt.step(),Ce=C.run?.27:.41)}function Rh(x){let C=Math.sin(x.angle),D=Math.cos(x.angle);return[{x:x.x-D*1.66,z:x.z+C*1.66},{x:x.x+D*1.66,z:x.z-C*1.66}].find(J=>ci(J,J.x,J.z,s.walkSolids(J.x,J.z,0),v,L,.38))}function Mf(x,C,D){let J=Math.sin(C.angle),z=Math.cos(C.angle);if(!D)return null;if(![.28,.5,.73,.92].some(bt=>{let qt=x.x+(D.x-x.x)*bt,Vt=x.z+(D.z-x.z)*bt,Kt=qt-C.x,Rt=Vt-C.z;return Math.abs(Kt*J+Rt*z)<2.75&&Math.abs(Kt*z-Rt*J)<1.33}))return D;let ct=(x.x-C.x)*J+(x.z-C.z)*z>0?3.2:-3.2,lt=(D.x-C.x)*z-(D.z-C.z)*J;return{x:C.x+J*ct+z*lt,z:C.z+z*ct-J*lt}}function Sf(x){let C=x.officer,D=x.car,J=Math.sin(D.angle),z=Math.cos(D.angle),U=Rh(D)??[{x:D.x-J*3.1,z:D.z-z*3.1},{x:D.x+J*3.1,z:D.z+z*3.1}].find(ct=>ci(ct,ct.x,ct.z,s.walkSolids(ct.x,ct.z,0),v,L,.37));return U?(C.seated=!1,C.model.root.visible=!0,C.x=U.x,C.z=U.z,C.floorY=0,d(C),C.angle=D.angle,C.exitAnim=.38,C.model.shadow.visible=!0,D.doorTime=.65,x.mode="foot",!0):!1}function Ih(x,C){let D=v.includes(C)?C:null;if(ft(x,C)>18||ft(x,C)<.5||(D?D.integrity<=0:!_t(C)))return!1;let J=l(x),z=(D?D.root.position.y:l(C))+(C===h?h.lift:0)+(D?1.08:1.27),U=u();if(!pr([x.x,J+1.35,x.z],[C.x,z,C.z],U))return!1;x.angle=Math.atan2(C.x-x.x,C.z-x.z),x.model.root.position.set(x.x,J,x.z),x.model.root.rotation.y=x.angle;let ct=Math.atan2(J+1.42-z,Math.max(.4,ft(x,C)));Cs(x.model,0,0,!0,!0,0,ct),x.model.muzzle.getWorldPosition(fe);let lt=Et*14+x.x,bt=Math.sin(lt)*(x.role==="ally"?.35:.48),qt=C.x+Math.cos(x.angle)*bt,Vt=C.z-Math.sin(x.angle)*bt;Wt.set(qt,z+Math.cos(lt*1.4)*.32,Vt);let Kt=Math.min(24,fe.distanceTo(Wt)+1.65),Rt=he.subVectors(Wt,fe).normalize(),Gt=Ae(x);D&&Gt.push({actor:D,y:0,bounds:[C.x-.93,.3,C.z-1.02,C.x+.93,1.52,C.z+1.02]});let gt=Ll(fe.toArray(),Rt.toArray(),U,Gt,Kt,{ground:Bn});if(x.role==="ally"&&(C.role==="police"||Ft(C)||gt.hit?.actor.role==="police")&&qe(x,gt.hit?.actor),gt.hit&&(gt.hit.actor===C||gt.hit.actor.role==="civilian")){let Ye=x.role==="police"&&C===h?.62:.83;if(D&&gt.hit.actor===D){let De=[fe.x+Rt.x*gt.distance,fe.y+Rt.y*gt.distance,fe.z+Rt.z*gt.distance];Qn(D,De[1]-D.root.position.y,x,De)}else me(gt.hit.actor,Math.round(Ah(fe.y+Rt.y*gt.distance-gt.hit.y)*Ye),x)}return Wt.copy(fe).addScaledVector(Rt,gt.distance),x.role!=="ally"&&(C===h||C===rt||Nd(fe,Wt,rt??h))&&Oe(x),a.emit(fe.toArray(),gt,{enemy:!0}),x.attack=(x.role==="police"?.91:1.07)+(Math.sin(lt)+1)*.18,ft(x,rt??h)<31&&Mt.shot(),!0}function Hl(x,C,D){let J=ft(x,C);return x.stagger>0||x.exitAnim>0?{speed:0,aim:!1}:J<17&&x.attack<=0&&Ih(x,C)||x.attack>.28&&J<15.5?(x.angle=ai(x.angle,Math.atan2(C.x-x.x,C.z-x.z),D*12),{speed:0,aim:!0}):{speed:J>3.3||Math.abs(l(x)-l(C))>1.8?Wl(x,C,4.4,D):0,aim:J<12}}function bf(x,C){if(nt-=C,st){nt<=0&&(st.role="civilian",st.fear=4,st=null,nt=37);return}if(nt>0)return;let D=S.find(J=>J.role==="civilian"&&_t(J)&&ft(J,x)>14&&ft(J,Ri)<55);if(!D){nt=8;return}D.role="rogue",st=D,nt=63,D.attack=.1}let Eo=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function Ph(x){let C={kind:"car"};return vo(C,x.route,x.startShift),C}function Co(x,C=!0){let{car:D,officer:J}=x;if(C){let z=Ph(x);ts(D,z),D.driver=z.driver}else{let z={};vo(z,x.route),D.driver=z.driver;let U=Math.sin(D.angle),ct=Math.cos(D.angle),lt=1/0;D.driver.route.forEach((bt,qt)=>{let Vt=bt.x-D.x,Kt=bt.z-D.z,Rt=Math.hypot(Vt,Kt)+(Vt*U+Kt*ct<0?16:0);Rt<lt&&(lt=Rt,D.driver.next=qt)})}x.mode="patrol",x.retaliation=null,x.stop=null,x.departing=!1,J.seated=!0,J.model.root.visible=!1,is(D,0)}function wf(x,C){let D=x.officer,J=Eo[x.beat%Eo.length];ft(D,J)<1.1&&(x.beat++,J=Eo[x.beat%Eo.length]),x.intent=pi(D,J,1.35,C)}function Tf(x,C){Ge-=x,Ge<=0&&we>0&&(Ee=E(C),Ee&&(ve={x:C.x,z:C.z,y:l(C),health:100,seated:!1,angle:C.angle}),Ge=.24);let D=we>0&&h.health>0?Ee?C:ve:st,J=D===st?st?1:0:Ol(we);we>0&&(we=Math.max(0,we-x*(Ee?.23:1.1)),we===0&&(ve=null,Ee=!1,Re("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),p.forEach((z,U)=>{let ct=z.officer,lt=z.car;z.retaliation&&!_t(z.retaliation)&&(z.retaliation=null);let bt=z.retaliation,qt=bt??D,Vt=!!(bt||D&&U<J);if(ct.health<=0){z.mode="disabled",lt.driver=null,ct.down<=0&&ft(ct,C)>13&&v.every(Rt=>Rt===lt||ft(Rt,z.berth)>3.5)&&(dt(ct),ts(lt,z.berth),is(lt,0),z.mode="ready",z.retaliation=null);return}if(z.mode==="patrol"&&(Vt||lt.integrity<=0)&&(z.mode="driving",lt.driver=null,z.stop=null,z.stall=0,z.departing=!1),z.mode==="patrol")return;if(bt&&(z.mode==="ready"||z.mode==="boarding"||z.mode==="reboard")&&(z.mode="foot"),z.mode==="ready"&&Vt){let Rt=lt.integrity>0&&ft(ct,lt)<22;z.mode=Rt?"boarding":"foot",z.stop=null,z.stall=0,z.departing=Rt&&ft(lt,z.berth)<2}if(z.mode==="boarding"||z.mode==="reboard"){z.mode==="boarding"&&!Vt&&(z.mode="reboard"),z.mode==="reboard"&&Vt&&(z.mode="boarding");let Rt=Rh(lt);lt.integrity<=0||ft(ct,lt)>45?z.mode=Vt?"foot":"ready":Rt&&ft(ct,Rt)<.63?(ct.seated=!0,ct.model.root.visible=!1,lt.doorTime=.6,z.mode==="reboard"?Co(z,!1):z.mode="driving"):Rt&&(z.intent=pi(ct,Mf(ct,lt,Rt),z.mode==="boarding"?3.75:1.8,x))}if(z.mode==="driving"){if(!Vt&&lt.integrity>0&&!z.departing){Co(z,!1);return}let Rt=qt?ft(lt,qt):1/0;!Vt||lt.integrity<=0||z.stall>8.2&&!z.maneuver||Rt<12.7&&!(qt===rt&&Math.abs(rt.speed)>6)?(li(lt,x,{throttle:0,steer:0,brake:!0},r,v),Math.hypot(lt.vx,lt.vz)<2.7&&!Sf(z)&&lt.integrity>0&&li(lt,x,{throttle:.21,steer:.26,brake:!1},r,v)):uf(z,qt,r,v,L,x)}else if(z.mode==="foot")Vt&&qt===ve?z.intent=pi(ct,qt,3.45,x):Vt?z.combat=Hl(ct,qt,x):lt.integrity>0&&ft(ct,lt)<40?z.mode="reboard":(z.mode="ready",ft(C,lt)>25&&v.every(Rt=>Rt===lt||ft(Rt,z.berth)>3.5)&&(ts(lt,z.berth),is(lt,0)));else if(z.mode==="ready"){let Rt=U<2&&ft(C,ct)>24&&ft(C,z.berth)>19&&ft(ct,z.berth)<30?Ph(z):null;Rt&&Sh(Rt,v.filter(Gt=>Gt!==lt),C,r)?Co(z):wf(z,x)}let Kt=z.mode==="driving"||Vt&&z.mode==="foot";lt.lamps.forEach((Rt,Gt)=>{Rt.visible=!Kt||Math.floor(Et*8+Gt)%2===0}),Kt&&Pt<=0&&ft(C,lt)<42&&(Mt.siren(),Pt=1.35)})}function Af(x,C){let D={player:rt,vehicles:j()},J=p.filter(z=>z.mode==="patrol").map(z=>z.car);tf([...g,...J],D,L,r,x,T);for(let z of m)z!==rt&&Math.hypot(z.vx,z.vz)>.06?li(z,x,{throttle:0,steer:0,brake:!0},r,D.vehicles):z!==rt&&(z.impact=Math.max(0,z.impact-x*21));for(let z of v){if(z.routeIndex>=0&&z!==rt){z.abandoned+=x;let U=!z.driver&&z.abandoned>25,ct=z.integrity<=0||(z.driver?.stuck??0)>13;if((U||ct)&&ft(C,z)>17){let lt={};if(vo(lt,z.routeIndex),lt.kind=z.kind,Sh(lt,D.vehicles.filter(bt=>bt!==z),C,r)){Object.assign(z,lt);let bt=z.ownDriver;bt&&!bt.seated&&!bt.riding&&bt.role==="civilian"&&ft(bt,C)>20&&(dt(bt),bt.seated=!0,bt.model.root.visible=!1)}}}z!==rt&&z.impact>5&&ft(C,z)<18&&ue<=0&&(Mt.crash(),ue=.32),is(z,x,z.steer),z.rider&&(z.rider.root.visible=!!z.driver&&z.integrity>0,z.rider.root.visible&&mh(z.rider,z))}if(rt){if(rt.impact>4.1&&ue<=0){Mt.crash(),It=.24,ue=.36;let z=rt,U=z.impact;Re(z.integrity<43?"Motor avariado.":"Colis\xE3o."),rt&&z.kind==="bike"&&U>10.5&&(me(h,Math.min(40,Math.round(U*1.6))),z.integrity=Math.max(0,z.integrity-8),Bt(!0),Re("Voc\xEA caiu da moto."))}if(rt&&rt.integrity<=0&&Math.hypot(rt.vx,rt.vz)<3){let z=zt(rt);Bt(!0),Re(z+" sem condi\xE7\xF5es de rodar.")}}}function pi(x,C,D,J){if(!C)return 0;let z=c(x),U=ft(x,C);if(U<.13)return 0;let ct=s.interiorAt(x.x,x.z,l(x)),lt=s.interiorAt(C.x,C.z,C.y??l(C));if(!ct&&!lt&&U>5.9)return o(x,C,D,J);let bt=C,qt=(Rt,Gt)=>[.24,.46,.68,.88,1].every(gt=>On(Rt.x+(Gt.x-Rt.x)*gt,Rt.z+(Gt.z-Rt.z)*gt,.29,z));if(!qt(x,C)){let Rt=1/0;for(let Gt of z)if(!(ft(x,Gt)>Math.hypot(Gt.w,Gt.d)*.5+3.1))for(let gt of[-1,1])for(let Ye of[-1,1]){let De={x:Gt.x+gt*(Gt.w*.5+.44),z:Gt.z+Ye*(Gt.d*.5+.44)},Ze=ft(x,De),mi=ft(De,C);if(Ze<.3||Ze>4.5||!qt(x,De))continue;let Ls=Ze+mi+(mi>U+.25?1.7:0);Ls<Rt&&(Rt=Ls,bt=De)}}let Vt=Math.atan2(bt.x-x.x,bt.z-x.z);x.angle=ai(x.angle,Vt,J*8.5);let Kt=Math.min(D*J,ft(x,bt));return fo(x,x.x+Math.sin(Vt)*Kt,x.z+Math.cos(Vt)*Kt,.26,z)?D:0}function Lh(x,C){let D=l(x);if(s.interiorAt(x.x,x.z,D))return{x:x.x,z:x.z,y:D};let J=Math.floor((Math.sqrt(1+C)-1)*.75),z=(C%2===0?1:-1)*(1.05+C%5*.66),U=(v.includes(x)?5.6:3.1)+J*1.1,ct=Math.sin(x.angle),lt=Math.cos(x.angle);return{x:x.x-ct*U+lt*z,z:x.z-lt*U-ct*z,y:D}}function Wl(x,C,D,J){let z=s.interiorAt(x.x,x.z,l(x)),U=s.interiorAt(C.x,C.z,C.y??l(C));if(z?.buildingId===U?.buildingId&&Math.abs((z?.floor??0)-(U?.floor??0))<1.1)return x.pursuitRoute=[],x.pursuitKey="",pi(x,C,D,J);let ct=(U?.buildingId??"street")+":"+(U?.floor??0);if(x.pursuitKey!==ct){x.pursuitKey=ct;let lt=[],bt=s.buildings.find(Rt=>Rt.id===z?.buildingId),qt=s.buildings.find(Rt=>Rt.id===U?.buildingId),Vt=bt?.units.find(Rt=>Math.abs(Rt.floor-z.floor)<.25),Kt=qt?.units.find(Rt=>Math.abs(Rt.floor-U.floor)<.25);bt&&lt.push(Vt?.inside,Vt?.entry,Vt?.outside,...[...Vt?.stairs??[]].reverse(),bt.inside,bt.entry,bt.outside),qt&&lt.push(qt.outside,qt.entry,qt.inside,...Kt?.stairs??[],Kt?.outside,Kt?.entry,Kt?.inside),x.pursuitRoute=lt.filter(Boolean)}for(;x.pursuitRoute.length&&ft(x,x.pursuitRoute[0])<.66&&Math.abs(l(x)-(x.pursuitRoute[0].y??0))<.85;)x.pursuitRoute.shift();return pi(x,x.pursuitRoute[0]??C,D,J)}function Ef(x,C,D){let J=x.itinerary[0];return J?ft(x,J)<.58&&Math.abs(l(x)-(J.y??0))<1.1?(x.itinerary.shift(),0):pi(x,J,C,D):0}function Dh(x,C,D=!1){L=F.filter(U=>ft(U,C)<(U.role==="civilian"?69:47)||U.role==="ally"||U.role==="police"||U===st||U===pt);let J=new Set(L);for(let U of F)U.model.root.visible=J.has(U)&&!U.seated;let z=new Map(L.map(U=>[U,{x:U.x,z:U.z}]));D||(bf(C,x),Tf(x,C));for(let U of L){if(U.seated)continue;if(U.attack-=x,U.stagger=Math.max(0,U.stagger-x),U.injuryCooldown-=x,U.exitAnim=Math.max(0,U.exitAnim-x),U.exitAge+=x,U.health<=0){if(U.down=Math.max(0,U.down-x),U.deadTime+=x,U.deadTime<1.2){U.x+=U.pushX*x,U.z+=U.pushZ*x,U.pushX*=Math.exp(-x*5),U.pushZ*=Math.exp(-x*5);let Rt=xh(U.model,U.deadTime,U.fallDir);U.model.root.rotation.set(Rt,U.angle,0),U.model.root.position.set(U.x,l(U)+Math.abs(Math.sin(Rt))*.17,U.z),U.drop&&U.drop.position.set(U.x+Math.sin(U.angle)*U.fallDir*1.25,l(U)+.019,U.z+Math.cos(U.angle)*U.fallDir*1.25)}if(U.drop){let Rt=Math.min(.63,.32+(19-U.down)*.09);U.drop.rotation.z=U.angle,U.drop.scale.set(Math.max(.38,Rt),Math.max(.24,Rt*.68),1)}U.role!=="police"&&U.down<=0&&ft(U.home,C)>7&&ft(U,C)>7&&(dt(U),I.includes(U)&&(U.seated=!0,U.model.root.visible=!1));continue}let ct=0,lt=!1,bt=p.find(Rt=>Rt.officer===U);if(bt)ct=bt.combat?.speed??bt.intent??0,lt=!!bt.combat?.aim,bt.intent=0,bt.combat=null;else if(U.role==="ally")if(U.boardCar)ct=ye(U,x);else if(Gn(pt))({speed:ct,aim:lt}=Hl(U,pt,x));else{let Rt=Lh(C,Ut.indexOf(U));(ft(Rt,U)>1.25||Math.abs(l(U)-Rt.y)>1.75)&&(ct=Wl(U,Rt,rt?6.1:4.45,x))}else if(U.role==="rogue"){let Rt=S.filter(gt=>gt!==U&&gt.role==="civilian"&&_t(gt)).sort((gt,Ye)=>ft(U,gt)-ft(U,Ye))[0],Gt=p.map(gt=>gt.officer).find(gt=>_t(gt)&&ft(gt,U)<15);(Gt||Rt)&&({speed:ct,aim:lt}=Hl(U,Gt??Rt,x))}else if(U.surrender<=0){let Rt=U.path[U.next];if(U.role==="civilian"&&!U.itinerary.length&&U.fear<=0&&b.length&&(U.scheduleClock-=x,U.scheduleClock<=0)){let Gt=b[Math.floor(Math.abs(U.home.x*11+U.home.z*4+Et))%b.length];ft(U,Gt.outside)<38&&(U.itinerary=[Gt.outside,Gt.entry,Gt.inside,Gt.entry,Gt.outside]),U.scheduleClock=36+Math.abs(U.home.x)%25}if(U.fear=Math.max(0,U.fear-x),U.fear>0&&ft(U,C)<15){let Gt=Math.atan2(U.x-C.x,U.z-C.z);for(let gt of[0,.84,-.84,1.52,-1.52]){let Ye=Gt+gt;if(fo(U,U.x+Math.sin(Ye)*3.7*x,U.z+Math.cos(Ye)*3.7*x,.22,c(U))){U.angle=ai(U.angle,Ye,x*8),ct=3.7;break}}}else U.itinerary.length?ct=Ef(U,U.pace,x):Rt&&(ft(U,Rt)<.54&&(U.next=(U.next+1)%U.path.length,Rt=U.path[U.next]),ct=pi(U,Rt,U.pace,x))}let qt=z.get(U);if(qt&&U.exitAnim<=0){let Rt=U.x-qt.x+U.pushX*x,Gt=U.z-qt.z+U.pushZ*x;U.x=qt.x,U.z=qt.z;let gt=bt?.mode==="boarding"?v.filter(Ze=>Ze!==bt.car):v,Ye=U.boardCar?L.filter(Ze=>Ze.role!=="ally"):L,De=Tl(U,Rt,Gt,c(U),l(U)>1.25?[]:gt,[...Ye,...rt?[]:[h]],.29);if(ct>0&&De<ct*x*.35){let Ze=U.detourSide??1,mi=ct*x;Tl(U,Ze*Math.cos(U.angle)*mi,-Ze*Math.sin(U.angle)*mi,c(U),gt,[...Ye,...rt?[]:[h]],.29)<mi*.25&&(U.detourSide=-Ze),U.repath=0}ct>0&&(ct=Math.min(ct,De/x))}if(U.pushX*=Math.exp(-x*7.6),U.pushZ*=Math.exp(-x*7.6),!D&&U.injuryCooldown<=0){let Rt=Nh(U,2.8);if(Rt){let{car:Gt,speed:gt,vx:Ye,vz:De}=Rt,Ze=Eh(gt);U.pushX=Me(Ye,-8,8)*.59,U.pushZ=Me(De,-8,8)*.59,Ze>0&&(U.injuryCooldown=1.18,me(U,Ze),Gt===rt&&Ze>12&&V(19))}}let Vt=U.model;if(U.health<=0)continue;d(U),Vt.root.position.set(U.x,l(U)+U.exitAnim*.35,U.z);let Kt=U.stagger>0?Math.sin(U.stagger/.32*Math.PI)*.24:0;Vt.root.rotation.set(U.exitAnim*.7-Kt,U.angle,U.exitAnim*U.exitSide*.89+(U.stagger>0?Math.sin(U.stagger*9)*.12:0)),Cs(Vt,x,U.exitAnim>0?2.9:ct,lt,["police","rogue","ally"].includes(U.role),0,0,U.surrender>0)}if(!D&&!rt&&l(h)<1.15&&h.health>0&&h.lift<.3&&Se<=0){let U=Nh(h,2.35);if(U){let{speed:ct,vx:lt,vz:bt}=U,qt=Eh(ct);h.pushX=Me(lt,-13,13)*.73,h.pushZ=Me(bt,-13,13)*.73,h.trip=ct>=5.3?Math.min(.82,.35+ct*.021):.12,h.vx=h.vz=0,qt>0&&(me(h,qt),Mt.crash(),Re("Voc\xEA foi atropelado.")),Se=.87}}}function Nh(x,C){for(let D of v){if(l(x)>1.2||ft(D,x)>5)continue;let J=A.get(D),z=J&&ft(J,D)<3?J:null,U=z?Math.hypot(z.vx,z.vz):0,ct=Math.hypot(D.vx,D.vz),lt=Math.max(ct,U);if(!(lt<C||!Dd(D,z,x)))return{car:D,speed:lt,vx:U>ct?z.vx:D.vx,vz:U>ct?z.vz:D.vz}}return null}function Cf(x,C){s.updateDoors(x,[C,...L.filter(D=>_t(D))])}function Rf(x,C,D){let J=l(C),z=rt?null:s.interiorAt(C.x,C.z,J),U=!!z;as!==U&&(as=U,Zt=!0);let ct=i.aspect<.85,bt=U?D?2.25:3.4:rt?rt.kind==="bike"?8.2:ct?12:10.2:D?4.45:ct?7.9:6.5,qt=rt?1.95+rt.root.position.y:1.38+J+h.lift*.46,Vt=rt?0:D?.61:.22,Kt=D?.1+jt*.19:Math.max(U?.28:.1,jt);ht.set(C.x+Math.cos(re)*Vt,qt,C.z-Math.sin(re)*Vt),wt.set(ht.x-Math.sin(re)*bt*Math.cos(Kt),qt+Math.sin(Kt)*bt,ht.z-Math.cos(re)*bt*Math.cos(Kt));function Rt(De){z&&(De.x=Me(De.x,z.x-z.w*.5+.3,z.x+z.w*.5-.3),De.z=Me(De.z,z.z-z.d*.5+.3,z.z+z.d*.5-.3),De.y=Me(De.y,z.floor+.55,z.ceiling-.42))}Rt(wt),s.viewBlocked(ht.x,ht.y,ht.z,.12,!U)&&ht.set(C.x,qt,C.z);for(let De=.06;De<=1.0001;De+=.04){let Ze=or.lerp(ht.x,wt.x,De),mi=or.lerp(ht.y,wt.y,De),Ls=or.lerp(ht.z,wt.z,De);if(s.viewBlocked(Ze,mi,Ls,.32,!U)||v.some(ql=>ql!==rt&&ft(ql,{x:Ze,z:Ls})<2.1&&mi<ql.root.position.y+1.7)){wt.lerp(ht,1-Math.max(.02,De-.07));break}}Rt(wt);let Gt=D?14:1,gt=St?jt:jt-.22,Ye=D?qt-Math.tan(gt)*Gt:qt-.07;K.set(ht.x+Math.sin(re)*Gt,Ye,ht.z+Math.cos(re)*Gt),Zt?(i.position.copy(wt),Zt=!1):i.position.lerp(wt,1-Math.exp(-x*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!U)&&i.position.copy(wt),Rt(i.position),i.lookAt(K),i.updateMatrixWorld()}function hs(x,C,D){Ve.fillStyle=C,Ve.beginPath(),Ve.arc(Tn(x.x),Tn(x.z),D,0,Math.PI*2),Ve.fill()}function If(x,C){let D=Ol(we),J=Math.round(ft(x,bn));Yt("detail").textContent="Casa "+J+" m \xB7 Loja "+Math.round(ft(x,cr))+" m",Yt("cash").textContent="R$ "+w.toLocaleString("pt-BR"),Yt("crew").textContent="Gangue "+Ut.length;let z=Yt("prompt"),U=N==="pad"?"Y \xB7 ":N==="keyboard"?"E \xB7 ":"",ct=tt(),lt=$(),bt=Ct(),qt=rt??Lt(),Vt=O&&C&&ui<=0;z.hidden=!(qt||ct||lt||bt||ui>0||Vt);let Kt=rt?"Sair "+(rt.kind==="bike"?"da moto":"do carro"):lt?"Salvar na porta de casa":ct?"Abrir loja de armas":bt?"Porta trancada":qt?"Pegar "+(qt.kind==="bike"?"a moto":"o cup\xEA"):"";z.textContent=ui>0?To:Vt?"Mantenha a mira \xB7 "+Math.ceil(O.left)+" s":U+Kt,Yt("heat").hidden=!D,Yt("heat").textContent="\u2605".repeat(D)+" PROCURADO",Yt("mode").textContent=rt?zt(rt)+" \xB7 "+Math.round(rt.integrity)+"%":ut?"Pistola":"Vila Brasa",Yt("reading").textContent=rt?Math.round(Math.hypot(rt.vx,rt.vz)*3.6)+" km/h":ut?at+" balas":"Punhos";let Rt=Yt("health");Rt.value=h.health,Rt.title="Vida: "+Math.ceil(h.health)+"%",Yt("crosshair").hidden=!(C||ut&&vt>0&&!rt),Yt("interact").textContent=rt?"Sair":lt?"Salvar":ct?"Loja":"Entrar",Yt("sprint").textContent=rt?"Freio":"Correr",Yt("aim").hidden=!!rt,Yt("fire").hidden=!!rt||!ut,Yt("weapon").hidden=!!rt||!Z,Yt("weapon").textContent=ut?"Punhos":"Pistola",Yt("jump").hidden=Yt("punch").hidden=!!rt,Yt("recruit").hidden=!!rt||!C,Yt("hud").classList.toggle("armed",!rt),Yt("hud").classList.toggle("driving",!!rt),Ve.drawImage(cs,0,0);for(let Gt of y)Gt!==rt&&Gt.integrity>0&&hs(Gt,Gt.driver?"#82b9b3":"#eab987",Gt.kind==="bike"?2.2:Gt.driver?2.6:3.5);hs(cr,"#eaff89",6),hs(bn,"#dcc39b",5),hs(Ri,"#99c6ff",5);for(let Gt of b)Gt.kind!=="armory"&&hs(Gt.entry,"#dbae80",2.5);for(let Gt of p)["driving","patrol","foot"].includes(Gt.mode)&&hs(Gt.officer.seated?Gt.car:Gt.officer,Gt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let Gt of Ut)hs(Gt,"#97ebaf",3.5);Ve.save(),Ve.translate(Tn(x.x),Tn(x.z)),Ve.rotate(-(rt?rt.angle:h.angle)),Ve.fillStyle="#fff9e6",Ve.strokeStyle="#243938",Ve.lineWidth=2.7,Ve.beginPath(),Ve.moveTo(0,10),Ve.lineTo(-6,-6),Ve.lineTo(0,-3),Ve.lineTo(6,-6),Ve.closePath(),Ve.stroke(),Ve.fill(),Ve.restore()}function Pf(x){let C=(x-Le)/1e3,D=Me(C,1/240,.05);Le=x,Et+=D;let J=Ro.read(!!rt,D);if(rs.open){J.punch||J.interact?Fi():J.confirm&&Mr(),t.render(e,i);return}if(Qt){if(pe){N=J.mode;for(let Vt of v)A.set(Vt,{x:Vt.x,z:Vt.z,vx:Vt.vx,vz:Vt.vz});J.weapon&&Z&&!rt&&(ut=!ut,mt=null,vt=0);let z=J.aim&&!rt&&Ot<=0&&h.health>0;if(z!==St&&(jt=z?.015:.22,St=z),Xt=Math.abs(J.lookX)+Math.abs(J.lookY)>.003?0:Xt+D,re-=J.lookX,jt=Me(jt+J.lookY,z?-1.03:-.31,.84),rt&&Xt>1.2&&(jt+=(.24-jt)*D),ue-=D,ae-=D,Ce-=D,Se-=D,Pt-=D,ui-=D,X-=D,a.update(D),Ot=Math.max(0,Ot-D),wn&&(os-=D,os<=0&&xf()),te-=D,It-=D,vt-=D,Tt-=D,ot>0&&(ot-=D,ot<=0&&ie()),it&&(it.delay-=D,it.delay<=0)){let Vt=it.car;it=null,h.health>0&&Vt.integrity>0&&ft(h,Vt)<3.75&&kt(Vt)}if(J.interact&&de(),rs.open)return;let U=s.props.update(D,v,rt??h);U.shadow&&(s.sun.shadow.needsUpdate=!0);for(let Vt of U.events)ft(Vt,rt??h)<30&&(Vt.heavy?Mt.crash():Mt.punch(!0));Cf(D,rt??h),rt?yf(D,J):vf(D,{...J,aim:z}),Af(D,rt??h),rt&&(h.x=rt.x,h.z=rt.z),ze(D),pt&&!Gn(pt)&&(pt=null),rt?.kind==="bike"&&mh(h.model,rt);let ct=rt??h;Dh(D,ct),Mn(ct),We(D),Mt.motor(rt?.speed??0,!!rt);let lt=rt??h,bt=z&&!rt&&h.health>0;J.fire&&ut&&!rt&&h.health>0&&at>0&&(vt=1.38),Rf(D,lt,bt||!rt&&vt>0),bt&&(Tt<=0||J.recruit||J.punch||J.fire&&ae<=0)?(mt=sn(),Tt=.092):bt||(mt=null),J.recruit&&!rt&&Vn(mt),Ao(D,bt&&ut?mt:null),(J.punch||J.fire&&!ut)&&!rt&&gf(),J.fire&&!rt&&_f(bt),Yt("hitmark").hidden=te<=0,Yt("impact").hidden=It<=0,s.marker.visible=ft(lt,cr)>2.8&&ft(lt,cr)<13,s.beacon.rotation.y=Et*2,s.beacon.position.y=2.55+Math.sin(Et*4)*.27,Fe-=D,Fe<=0&&(If(lt,bt),Fe=.1)}}else{let z=.54+Math.sin(Et*.13)*.19,U=i.aspect<1?26:30;i.position.set(24+Math.sin(z)*U,14,17+Math.cos(z)*U),i.lookAt(10,2,13),Dh(D,h,!0),Mn(h)}t.render(e,i),pe&&xr.value==="auto"&&C>0&&C<.22&&di>.7&&(ls+=C,++kn>=85&&(ls/kn>.026&&(di=Math.max(.69,di-.16),Di()),kn=0,ls=0))}let Ro=lf(()=>{rs.open?Fi():pe?Ui(!1):Uh()},()=>pe),Xl=kl("quality");(Xl==="low"||Xl==="high")&&(xr.value=Xl),xr.addEventListener("change",()=>{kl("quality",xr.value),di=1,Di()}),Yt("sound").addEventListener("click",()=>{kl("sound",Mt.toggle()?"on":"off"),Ni()}),Yt("pause").addEventListener("click",()=>Ui(!1)),Yt("reset").addEventListener("click",()=>{vr(),Ui(!0)}),_r.addEventListener("click",Mr),Yt("close-shop").addEventListener("click",Fi),rs.addEventListener("cancel",x=>{x.preventDefault(),Fi()});function Uh(){if(!Qt&&Jt){Object.assign(h,{x:Jt.x,z:Jt.z,health:Jt.health,floorY:0}),d(h),w=Jt.cash,Z=Jt.armed,ut=Z&&Jt.equipped,at=Z?Jt.ammo:0;for(let x of new Set(Jt.recruits)){let C=typeof x=="number"?S[x]:B.get(x);C&&(C.role="ally",C.seated=!1,C.riding=null,C.model.root.visible=!0,Ut.push(C))}Ui(!0),re=-Math.PI/2}else Ui(!0)}yr.addEventListener("click",Uh),document.addEventListener("visibilitychange",()=>{document.hidden&&pe&&Ui(!1)}),window.addEventListener("resize",Di),t.domElement.addEventListener("webglcontextrestored",Di),vr(),Ni(),Di(),xt(),yr.disabled=!1,Le=performance.now(),t.setAnimationLoop(Pf)}try{q_()}catch(n){console.error(n),yr.textContent="3D indispon\xEDvel",Yt("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
