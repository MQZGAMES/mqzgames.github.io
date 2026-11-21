(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var iu=0,xc=1,su=2;var ps=1,ru=2,js=3,Qi=0,un=1,yn=2,ms=0,tr=1,_c=2,yc=3,vc=4,ou=5;var gs=100,au=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,Mc=204,Sc=205,mu=206,gu=207,xu=208,_u=209,yu=210,vu=211,Mu=212,Su=213,bu=214,Qo=0,jo=1,ta=2,qs=3,ea=4,na=5,ia=6,sa=7,bc=0,wu=1,Tu=2,ri=0,wc=1,Tc=2,Ac=3,$r=4,Ec=5,Cc=6,Rc=7;var Ic=300,xs=301,er=302,Ca=303,Ra=304,ra=1e3,ei=1001,oa=1002,rn=1003,Au=1004;var Qr=1005;var on=1006,Ia=1007;var Ai=1008;var vn=1009,Pc=1010,Lc=1011,nr=1012,Pa=1013,qn=1014,Un=1015,Yn=1016,La=1017,Da=1018,_s=1020,Dc=35902,Nc=35899,Uc=1021,Fc=1022,Cn=1023,Si=1026,Ei=1027,Na=1028,Ua=1029,ji=1030,Fa=1031;var Oa=1033,jr=33776,to=33777,eo=33778,no=33779,za=35840,Ba=35841,ka=35842,Ga=35843,Va=36196,Ha=37492,Wa=37496,Xa=37488,qa=37489,io=37490,Ya=37491,Za=37808,Ja=37809,Ka=37810,$a=37811,Qa=37812,ja=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,so=36285,fl=36286;var Rr=2300,aa=2301,Ko=2302,hc=2303,uc=2400,dc=2401,fc=2402;var Eu=3200;var pl=0,Cu=1,Ci="",ln="srgb",Ir="srgb-linear",Pr="linear",Ae="srgb";var $o=7680;var Ru=519,Iu=512,Pu=513,Lu=514,Oc=515,Du=516,Nu=517,zc=518,Bc=519,Uu=35044,ml=35048;var kc="300 es",Ln=2e3,Ys=2001;function Mf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Sf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fu(){let n=Lr("canvas");return n.style.display="block",n}var Ph={},Zs=null;function Gc(...n){let t="THREE."+n.shift();Zs?Zs("log",t,...n):console.log(t,...n)}function Ou(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=Ou(n);let t="THREE."+n.shift();if(Zs)Zs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=Ou(n);let t="THREE."+n.shift();if(Zs)Zs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ar(...n){let t=n.join(" ");t in Ph||(Ph[t]=!0,$t(...n))}function zu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Bu={[Qo]:Qo,[ta]:ia,[ea]:ea,[qs]:na,[jo]:jo,[ia]:ta,[sa]:sa,[na]:qs},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,Er=Math.PI/180,Js=180/Math.PI;function ir(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function me(n,t,e){return Math.max(t,Math.min(e,n))}function Vc(n,t){return(n%t+t)%t}function bf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function wf(n,t,e){return n!==t?(e-n)/(t-n):0}function Cr(n,t,e){return(1-e)*n+e*t}function Tf(n,t,e,i){return Cr(n,t,1-Math.exp(-e*i))}function Af(n,t=1){return t-Math.abs(Vc(n,t*2)-t)}function Ef(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Cf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Rf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function If(n,t){return n+Math.random()*(t-n)}function Pf(n){return n*(.5-Math.random())}function Lf(n){n!==void 0&&(Lh=n);let t=Lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Df(n){return n*Er}function Nf(n){return n*Js}function Uf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ff(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Of(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),h=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*h,a*u,a*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ku(n,t){if(t.constructor===Float32Array)return n;let e=Wc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Gu(n,t){if(t.constructor===Float32Array)return n;let e=Wc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var sr={DEG2RAD:Er,RAD2DEG:Js,generateUUID:ir,clamp:me,euclideanModulo:Vc,mapLinear:bf,inverseLerp:wf,lerp:Cr,damp:Tf,pingpong:Af,smoothstep:Ef,smootherstep:Cf,randInt:Rf,randFloat:If,randFloatSpread:Pf,seededRandom:Lf,degToRad:Df,radToDeg:Nf,isPowerOfTwo:Uf,ceilPowerOfTwo:Ff,floorPowerOfTwo:Hc,setQuaternionFromProperEuler:Of,normalize:Gu,denormalize:ku},le=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],_=r[o+2],v=r[o+3];if(d!==v||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+d*v;m<0&&(f=-f,h=-h,_=-_,v=-v,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),T=Math.sin(S);g=Math.sin(g*S)/T,a=Math.sin(a*S)/T,l=l*g+f*a,c=c*g+h*a,u=u*g+_*a,d=d*g+v*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+_*a,d=d*g+v*a;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],_=r[o+3];return t[e]=a*_+u*d+l*h-c*f,t[e+1]=l*_+u*f+c*d-a*h,t[e+2]=c*_+u*h+a*f-l*d,t[e+3]=u*_-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new q,Dh=new Qe,jt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],v=s[0],m=s[3],g=s[6],S=s[1],T=s[4],b=s[7],I=s[2],M=s[5],p=s[8];return r[0]=o*v+a*S+l*I,r[3]=o*m+a*T+l*M,r[6]=o*g+a*b+l*p,r[1]=c*v+u*S+d*I,r[4]=c*m+u*T+d*M,r[7]=c*g+u*b+d*p,r[2]=f*v+h*S+_*I,r[5]=f*m+h*T+_*M,r[8]=f*g+h*b+_*p,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,_=e*d+i*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=h*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new jt,Nh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let n={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ir]:{primaries:t,whitePoint:i,transfer:Pr,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var pe=zf();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ps,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ps===void 0&&(Ps=Lr("canvas")),Ps.width=t.width,Ps.height=t.height;let s=Ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ps}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mi(e[i]/255)*255):e[i]=Mi(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bf=0,Ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ql(s[o].image)):r.push(ql(s[o]))}else r=ql(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?la.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var kf=0,Yl=new q,_n=class n extends ni{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=on,o=Ai,a=Cn,l=vn,c=n.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ir(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Ic;_n.DEFAULT_ANISOTROPY=1;var Ve=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,b=(h+1)/2,I=(g+1)/2,M=(u+f)/4,p=(d+v)/4,y=(_+m)/4;return T>b&&T>I?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=M/i,r=p/i):b>I?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=y/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=p/r,s=y/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-v)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends ni{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends ca{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Dr=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ye=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=_,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,h=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+h*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,h=l*d,_=c*u,v=c*d;e[0]=f+v*a,e[4]=_*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,h=l*d,_=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=_+h*a,e[1]=h+_*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,h=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=_*c-h,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=h*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,h=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=_*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+_,e[10]=f-v*d}else if(t.order==="XZY"){let f=o*l,h=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=h*d-_,e[2]=_*d-h,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,Vf)}lookAt(t,e,i){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),zi.crossVectors(i,wn),zi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),zi.crossVectors(i,wn)),zi.normalize(),Ro.crossVectors(wn,zi),s[0]=zi.x,s[4]=Ro.x,s[8]=wn.x,s[1]=zi.y,s[5]=Ro.y,s[9]=wn.y,s[2]=zi.z,s[6]=Ro.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],v=i[6],m=i[10],g=i[14],S=i[3],T=i[7],b=i[11],I=i[15],M=s[0],p=s[4],y=s[8],A=s[12],P=s[1],R=s[5],O=s[9],F=s[13],L=s[2],z=s[6],X=s[10],H=s[14],Q=s[3],B=s[7],Z=s[11],tt=s[15];return r[0]=o*M+a*P+l*L+c*Q,r[4]=o*p+a*R+l*z+c*B,r[8]=o*y+a*O+l*X+c*Z,r[12]=o*A+a*F+l*H+c*tt,r[1]=u*M+d*P+f*L+h*Q,r[5]=u*p+d*R+f*z+h*B,r[9]=u*y+d*O+f*X+h*Z,r[13]=u*A+d*F+f*H+h*tt,r[2]=_*M+v*P+m*L+g*Q,r[6]=_*p+v*R+m*z+g*B,r[10]=_*y+v*O+m*X+g*Z,r[14]=_*A+v*F+m*H+g*tt,r[3]=S*M+T*P+b*L+I*Q,r[7]=S*p+T*R+b*z+I*B,r[11]=S*y+T*O+b*X+I*Z,r[15]=S*A+T*F+b*H+I*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],_=t[3],v=t[7],m=t[11],g=t[15],S=l*h-c*f,T=a*h-c*d,b=a*f-l*d,I=o*h-c*u,M=o*f-l*u,p=o*d-a*u;return e*(v*S-m*T+g*b)-i*(_*S-m*I+g*M)+s*(_*T-v*I+g*p)-r*(_*b-v*M+m*p)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],_=t[12],v=t[13],m=t[14],g=t[15],S=e*a-i*o,T=e*l-s*o,b=e*c-r*o,I=i*l-s*a,M=i*c-r*a,p=s*c-r*l,y=u*v-d*_,A=u*m-f*_,P=u*g-h*_,R=d*m-f*v,O=d*g-h*v,F=f*g-h*m,L=S*F-T*O+b*R+I*P-M*A+p*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(a*F-l*O+c*R)*z,t[1]=(s*O-i*F-r*R)*z,t[2]=(v*p-m*M+g*I)*z,t[3]=(f*M-d*p-h*I)*z,t[4]=(l*P-o*F-c*A)*z,t[5]=(e*F-s*P+r*A)*z,t[6]=(m*b-_*p-g*T)*z,t[7]=(u*p-f*b+h*T)*z,t[8]=(o*O-a*P+c*y)*z,t[9]=(i*P-e*O-r*y)*z,t[10]=(_*M-v*b+g*S)*z,t[11]=(d*b-u*M-h*S)*z,t[12]=(a*A-o*R-l*y)*z,t[13]=(e*R-i*A+s*y)*z,t[14]=(v*T-_*I-m*S)*z,t[15]=(u*I-d*T+f*S)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,_=r*d,v=o*u,m=o*d,g=a*d,S=l*c,T=l*u,b=l*d,I=i.x,M=i.y,p=i.z;return s[0]=(1-(v+g))*I,s[1]=(h+b)*I,s[2]=(_-T)*I,s[3]=0,s[4]=(h-b)*M,s[5]=(1-(f+g))*M,s[6]=(m+S)*M,s[7]=0,s[8]=(_+T)*p,s[9]=(m-S)*p,s[10]=(1-(f+v))*p,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ls.set(s[0],s[1],s[2]).length(),a=Ls.set(s[4],s[5],s[6]).length(),l=Ls.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Ln,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===Ln)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ys)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ln,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),h=-(i+s)/(i-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===Ln)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ys)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ls=new q,Gn=new ye,Gf=new q(0,0,0),Vf=new q(1,1,1),zi=new q,Ro=new q,wn=new q,Fh=new ye,Oh=new Qe,Xn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hf=0,zh=new q,Ds=new Qe,gi=new ye,Io=new q,vr=new q,Wf=new q,Xf=new Qe,Bh=new q(1,0,0),kh=new q(0,1,0),Gh=new q(0,0,1),Vh={type:"added"},qf={type:"removed"},Ns={type:"childadded",child:null},Zl={type:"childremoved",child:null},Ze=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new q,e=new Xn,i=new Qe,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return zh.copy(t).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Io.copy(t):Io.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(vr,Io,this.up):gi.lookAt(Io,vr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(gi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vh),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vh),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new q(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yf={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Jl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=Vc(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Jl(o,r,t+1/3),this.g=Jl(o,r,t),this.b=Jl(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let i=Vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return pe.workingToColorSpace(pn.copy(this),t),Math.round(me(pn.r*255,0,255))*65536+Math.round(me(pn.g*255,0,255))*256+Math.round(me(pn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(pn.copy(this),e);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=ln){pe.workingToColorSpace(pn.copy(this),t);let e=pn.r,i=pn.g,s=pn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Po);let i=Cr(Bi.h,Po.h,e),s=Cr(Bi.s,Po.s,e),r=Cr(Bi.l,Po.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new se;se.NAMES=Vu;var Ur=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fr=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new q,xi=new q,Kl=new q,_i=new q,Us=new q,Fs=new q,Hh=new q,$l=new q,Ql=new q,jl=new q,tc=new Ve,ec=new Ve,nc=new Ve,Hi=class n{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Vn.subVectors(s,e),xi.subVectors(i,e),Kl.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(xi),l=Vn.dot(Kl),c=xi.dot(xi),u=xi.dot(Kl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-h-_,_,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,i),nc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tc,r.x),o.addScaledVector(ec,r.y),o.addScaledVector(nc,r.z),o}static isFrontFacing(t,e,i,s){return Vn.subVectors(i,e),xi.subVectors(t,e),Vn.cross(xi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Us.subVectors(s,i),Fs.subVectors(r,i),$l.subVectors(t,i);let l=Us.dot($l),c=Fs.dot($l);if(l<=0&&c<=0)return e.copy(i);Ql.subVectors(t,s);let u=Us.dot(Ql),d=Fs.dot(Ql);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(i).addScaledVector(Us,o);jl.subVectors(t,r);let h=Us.dot(jl),_=Fs.dot(jl);if(_>=0&&h<=_)return e.copy(r);let v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Fs,a);let m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Hh.subVectors(r,s),a=(d-u)/(d-u+(h-_)),e.copy(s).addScaledVector(Hh,a);let g=1/(m+v+f);return o=v*g,a=f*g,e.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Do.subVectors(this.max,Mr),Os.subVectors(t.a,Mr),zs.subVectors(t.b,Mr),Bs.subVectors(t.c,Mr),ki.subVectors(zs,Os),Gi.subVectors(Bs,zs),as.subVectors(Os,Bs);let e=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-as.z,as.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,as.z,0,-as.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-as.y,as.x,0];return!ic(e,Os,zs,Bs,Do)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,Os,zs,Bs,Do))?!1:(No.crossVectors(ki,Gi),e=[No.x,No.y,No.z],ic(e,Os,zs,Bs,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new q,new q,new q,new q,new q,new q,new q,new q],Hn=new q,Lo=new ii,Os=new q,zs=new q,Bs=new q,ki=new q,Gi=new q,as=new q,Mr=new q,Do=new q,No=new q,ls=new q;function ic(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ye=new q,Uo=new le,Zf=0,cn=class extends ni{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Uu,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=t!==void 0?Wc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ku(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Gu(t,this.array)}};var Or=class extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var zr=class extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Me=class extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Jf=new ii,Sr=new q,sc=new q,Wi=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Jf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(sc)),this.expandByPoint(Sr.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kf=0,Pn=new ye,rc=new Ze,ks=new q,Tn=new ii,br=new ii,sn=new q,je=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?zr:Or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Tn.min,br.min),Tn.expandByPoint(sn),sn.addVectors(Tn.max,br.max),Tn.expandByPoint(sn)):(Tn.expandByPoint(br.min),Tn.expandByPoint(br.max))}Tn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(t,c),sn.add(ks)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new q,l[A]=new q;let u=new q,d=new q,f=new q,h=new le,_=new le,v=new le,m=new q,g=new q;function S(A,P,R){c[A]=c[P]=c[R]=1,u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,P),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,A),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,R),d.sub(u),f.sub(u),_.sub(h),v.sub(h);let O=1/(_.x*v.y-v.x*_.y);isFinite(O)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(O),g.copy(f).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(O),a[A].add(m),a[P].add(m),a[R].add(m),l[A].add(g),l[P].add(g),l[R].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let A=0,P=T.length;A<P;++A){let R=T[A],O=R.start,F=R.count;for(let L=O,z=O+F;L<z;L+=3)S(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let b=new q,I=new q,M=new q,p=new q;function y(A){M.fromBufferAttribute(s,A),p.copy(M);let P=a[A];b.copy(P),b.sub(M.multiplyScalar(M.dot(P))).normalize(),I.crossVectors(p,P);let O=I.dot(l[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,O)}for(let A=0,P=i.count;A<P;++A)c[A]&&y(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(t)for(let f=0,h=t.count;f<h;f+=3){let _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let g=0;g<u;g++)f[_++]=c[h++]}return new cn(f,u,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=new q,$f=new q,Qf=new jt,Wn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=oc.subVectors(i,e).cross($f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jf=0,Xi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=tr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Wn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new q,ac=new q,Fo=new q,Oo=new q,ua=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ac.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(ac);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),a=Oo.dot(this.direction),l=-Oo.dot(Fo),c=Oo.lengthSq(),u=Math.abs(1-o*o),d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ac).addScaledVector(Fo,f),h}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,f=t.y-o.y,h=t.z-o.z,_=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=i.x-o.x,S=i.y-o.y,T=i.z-o.z,b=Math.abs(l),I=Math.abs(c),M=Math.abs(u),p,y,A,P,R,O,F,L,z,X,H,Q;if(b>=I&&b>=M?(A=l,O=d,z=_,Q=g,l>=0?(p=c,y=u,P=f,R=h,F=v,L=m,X=S,H=T):(p=u,y=c,P=h,R=f,F=m,L=v,X=T,H=S)):I>=M?(A=c,O=f,z=v,Q=S,c>=0?(p=u,y=l,P=h,R=d,F=m,L=_,X=T,H=g):(p=l,y=u,P=d,R=h,F=_,L=m,X=g,H=T)):(A=u,O=h,z=m,Q=T,u>=0?(p=l,y=c,P=d,R=f,F=_,L=v,X=g,H=S):(p=c,y=l,P=f,R=d,F=v,L=_,X=S,H=g)),A===0)return null;let B=p/A,Z=y/A,tt=1/A,ut=P-B*O,Et=R-Z*O,Y=F-B*z,ht=L-Z*z,Rt=X-B*Q,Lt=H-Z*Q,yt=Rt*ht-Lt*Y,Vt=ut*Lt-Et*Rt,Le=Y*Et-ht*ut;if(s){if(yt<0||Vt<0||Le<0)return null}else if((yt<0||Vt<0||Le<0)&&(yt>0||Vt>0||Le>0))return null;let kt=yt+Vt+Le;if(kt===0)return null;let oe=tt*(yt*O+Vt*z+Le*Q);return(kt>0?oe<0:oe>0)?null:this.at(oe/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wh=new ye,cs=new ua,zo=new Wi,Xh=new q,Bo=new q,ko=new q,Go=new q,lc=new q,Vo=new q,qh=new q,Ho=new q,Re=class extends Ze{constructor(t=new je,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(lc.fromBufferAttribute(d,t),o?Vo.addScaledVector(lc,u):Vo.addScaledVector(lc.sub(e),u))}e.add(Vo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(zo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(zo,Xh)===null||cs.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Wh.copy(r).invert(),cs.copy(t.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],g=o[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=S,I=T;b<I;b+=3){let M=a.getX(b),p=a.getX(b+1),y=a.getX(b+2);s=Wo(this,g,t,i,c,u,d,M,p,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=_,g=v;m<g;m+=3){let S=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);s=Wo(this,o,t,i,c,u,d,S,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],g=o[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=S,I=T;b<I;b+=3){let M=b,p=b+1,y=b+2;s=Wo(this,g,t,i,c,u,d,M,p,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,g=v;m<g;m+=3){let S=m,T=m+1,b=m+2;s=Wo(this,o,t,i,c,u,d,S,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tp(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Qi,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:n}}function Wo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Bo),n.getVertexPosition(l,ko),n.getVertexPosition(c,Go);let u=tp(n,t,e,i,Bo,ko,Go,qh);if(u){let d=new q;Hi.getBarycoord(qh,Bo,ko,Go,d),s&&(u.uv=Hi.getInterpolatedAttribute(s,a,l,c,d,new le)),r&&(u.uv1=Hi.getInterpolatedAttribute(r,a,l,c,d,new le)),o&&(u.normal=Hi.getInterpolatedAttribute(o,a,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new q,materialIndex:0};Hi.getNormal(Bo,ko,Go,f.normal),u.face=f,u.barycoord=d}return u}var us=class extends _n{constructor(t=null,e=1,i=1,s,r,o,a,l,c=rn,u=rn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=class extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new ye,Yh=new ye,Xo=[],Zh=new ii,ep=new ye,wr=new Re,Tr=new Wi,bi=class extends Re{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ep)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),Zh.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),Tr.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Yh.multiplyMatrices(i,Gs),wr.matrixWorld=Yh,wr.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){let l=Xo[o];l.instanceId=r,l.object=this,e.push(l)}Xo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new us(new Float32Array(s*this.count),s,this.count,Na,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Wi,np=new le(.5,.5),qo=new q,Yi=class{constructor(t=new Wn,e=new Wn,i=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],_=r[8],v=r[9],m=r[10],g=r[11],S=r[12],T=r[13],b=r[14],I=r[15];if(s[0].setComponents(c-o,h-u,g-_,I-S).normalize(),s[1].setComponents(c+o,h+u,g+_,I+S).normalize(),s[2].setComponents(c+a,h+d,g+v,I+T).normalize(),s[3].setComponents(c-a,h-d,g-v,I-T).normalize(),i)s[4].setComponents(l,f,m,b).normalize(),s[5].setComponents(c-l,h-f,g-m,I-b).normalize();else if(s[4].setComponents(c-l,h-f,g-m,I-b).normalize(),e===Ln)s[5].setComponents(c+l,h+f,g+m,I+b).normalize();else if(e===Ys)s[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=np.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jh=new ye,da=class n{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Jh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Yi),i[s].setFromProjectionMatrix(Jh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Yi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Br=class extends _n{constructor(t=[],e=xs,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kr=class extends _n{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends _n{constructor(t,e,i=qn,s,r,o,a=rn,l=rn,c,u=Si,d=1){if(u!==Si&&u!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gr=class extends wi{constructor(t,e=qn,i=xs,s,r,o=rn,a=rn,l,c=Si){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class n extends je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(d,2));function _(v,m,g,S,T,b,I,M,p,y,A){let P=b/p,R=I/y,O=b/2,F=I/2,L=M/2,z=p+1,X=y+1,H=0,Q=0,B=new q;for(let Z=0;Z<X;Z++){let tt=Z*R-F;for(let ut=0;ut<z;ut++){let Et=ut*P-O;B[v]=Et*S,B[m]=tt*T,B[g]=L,c.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[g]=M>0?1:-1,u.push(B.x,B.y,B.z),d.push(ut/p),d.push(1-Z/y),H+=1}}for(let Z=0;Z<y;Z++)for(let tt=0;tt<p;tt++){let ut=f+tt+z*Z,Et=f+tt+z*(Z+1),Y=f+(tt+1)+z*(Z+1),ht=f+(tt+1)+z*Z;l.push(ut,Et,ht),l.push(Et,Y,ht),Q+=6}a.addGroup(h,Q,A),h+=Q,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ds=class n extends je{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new q,u=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let h=i+d/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Dn=class n extends je{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],_=0,v=[],m=i/2,g=0;S(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(h,2));function S(){let b=new q,I=new q,M=0,p=(e-t)/i;for(let y=0;y<=r;y++){let A=[],P=y/r,R=P*(e-t)+t;for(let O=0;O<=s;O++){let F=O/s,L=F*l+a,z=Math.sin(L),X=Math.cos(L);I.x=R*z,I.y=-P*i+m,I.z=R*X,d.push(I.x,I.y,I.z),b.set(z,p,X).normalize(),f.push(b.x,b.y,b.z),h.push(F,1-P),A.push(_++)}v.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){let P=v[A][y],R=v[A+1][y],O=v[A+1][y+1],F=v[A][y+1];(t>0||A!==0)&&(u.push(P,R,F),M+=3),(e>0||A!==r-1)&&(u.push(R,O,F),M+=3)}c.addGroup(g,M,0),g+=M}function T(b){let I=_,M=new le,p=new q,y=0,A=b===!0?t:e,P=b===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*P,0),f.push(0,P,0),h.push(.5,.5),_++;let R=_;for(let O=0;O<=s;O++){let L=O/s*l+a,z=Math.cos(L),X=Math.sin(L);p.x=A*X,p.y=m*P,p.z=A*z,d.push(p.x,p.y,p.z),f.push(0,P,0),M.x=z*.5+.5,M.y=X*.5*P+.5,h.push(M.x,M.y),_++}for(let O=0;O<s;O++){let F=I+O,L=R+O;b===!0?u.push(L,L+1,F):u.push(L+1,L,F),y+=3}c.addGroup(g,y,b===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Hr=class n extends je{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let T=new q,b=new q,I=new q;for(let M=0;M<e.length;M+=3)h(e[M+0],T),h(e[M+1],b),h(e[M+2],I),l(T,b,I,S)}function l(S,T,b,I){let M=I+1,p=[];for(let y=0;y<=M;y++){p[y]=[];let A=S.clone().lerp(b,y/M),P=T.clone().lerp(b,y/M),R=M-y;for(let O=0;O<=R;O++)O===0&&y===M?p[y][O]=A:p[y][O]=A.clone().lerp(P,O/R)}for(let y=0;y<M;y++)for(let A=0;A<2*(M-y)-1;A++){let P=Math.floor(A/2);A%2===0?(f(p[y][P+1]),f(p[y+1][P]),f(p[y][P])):(f(p[y][P+1]),f(p[y+1][P+1]),f(p[y+1][P]))}}function c(S){let T=new q;for(let b=0;b<r.length;b+=3)T.x=r[b+0],T.y=r[b+1],T.z=r[b+2],T.normalize().multiplyScalar(S),r[b+0]=T.x,r[b+1]=T.y,r[b+2]=T.z}function u(){let S=new q;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let b=m(S)/2/Math.PI+.5,I=g(S)/Math.PI+.5;o.push(b,1-I)}_(),d()}function d(){for(let S=0;S<o.length;S+=6){let T=o[S+0],b=o[S+2],I=o[S+4],M=Math.max(T,b,I),p=Math.min(T,b,I);M>.9&&p<.1&&(T<.2&&(o[S+0]+=1),b<.2&&(o[S+2]+=1),I<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function h(S,T){let b=S*3;T.x=t[b+0],T.y=t[b+1],T.z=t[b+2]}function _(){let S=new q,T=new q,b=new q,I=new q,M=new le,p=new le,y=new le;for(let A=0,P=0;A<r.length;A+=9,P+=6){S.set(r[A+0],r[A+1],r[A+2]),T.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),M.set(o[P+0],o[P+1]),p.set(o[P+2],o[P+3]),y.set(o[P+4],o[P+5]),I.copy(S).add(T).add(b).divideScalar(3);let R=m(I);v(M,P+0,S,R),v(p,P+2,T,R),v(y,P+4,b,R)}}function v(S,T,b,I){I<0&&S.x===1&&(o[T]=S.x-1),b.x===0&&b.z===0&&(o[T]=I/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Ti=class n extends Hr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var fs=class n extends Hr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},si=class n extends je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],_=[],v=[],m=[];for(let g=0;g<u;g++){let S=g*f-o;for(let T=0;T<c;T++){let b=T*d-r;_.push(b,-S,0),v.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let T=S+c*g,b=S+c*(g+1),I=S+1+c*(g+1),M=S+1+c*g;h.push(T,b,M),h.push(b,I,M)}this.setIndex(h),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Wr=class n extends je{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,f=(e-t)/s,h=new q,_=new le;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let g=r+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/e+1)/2,_.y=(h.y/e+1)/2,u.push(_.x,_.y)}d+=f}for(let v=0;v<s;v++){let m=v*(i+1);for(let g=0;g<i;g++){let S=g+m,T=S,b=S+i+1,I=S+i+2,M=S+1;a.push(T,b,M),a.push(b,I,M)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zi=class n extends je{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new q,f=new q,h=[],_=[],v=[],m=[];for(let g=0;g<=i;g++){let S=[],T=g/i,b=o+T*a,I=t*Math.cos(b),M=Math.sqrt(t*t-I*I),p=0;g===0&&o===0?p=.5/e:g===i&&l===Math.PI&&(p=-.5/e);for(let y=0;y<=e;y++){let A=y/e,P=s+A*r;d.x=-M*Math.cos(P),d.y=I,d.z=M*Math.sin(P),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(A+p,1-T),S.push(c++)}u.push(S)}for(let g=0;g<i;g++)for(let S=0;S<e;S++){let T=u[g][S+1],b=u[g][S],I=u[g+1][S],M=u[g+1][S+1];(g!==0||o>0)&&h.push(T,b,M),(g!==i-1||l<Math.PI)&&h.push(b,I,M)}this.setIndex(h),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Kh(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Kh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function gn(n){let t={};for(let e=0;e<n.length;e++){let i=ys(n[e]);for(let s in i)t[s]=i[s]}return t}function Kh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ip(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Hu={clone:ys,merge:gn},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fa=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hn=class extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pa=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ma=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Yo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ji=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ga=class extends Ji{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dc:r=t,a=2*e-i;break;case fc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:o=t,l=2*i-e;break;case fc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,_=(i-e)/(s-e),v=_*_,m=v*_,g=-f*m+2*f*v-f*_,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,T=(-1-h)*m+(1.5+h)*v+.5*_,b=h*m-h*v;for(let I=0;I!==a;++I)r[I]=g*o[u+I]+S*o[c+I]+T*o[l+I]+b*o[d+I];return r}},xa=class extends Ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},_a=class extends Ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ya=class extends Ji{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-e)/(s-e),v=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*_;return r}let f=a*2,h=t-1;for(let _=0;_!==a;++_){let v=o[c+_],m=o[l+_],g=h*f+_*2,S=d[g],T=d[g+1],b=t*f+_*2,I=u[b],M=u[b+1],p=ap(i,e,S,I,s);r[_]=Wu(p,v,T,M,m)}return r}};function Wu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function op(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ap(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Wu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=op(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var En=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Yo(t.settings)&&(i.settings={inTangents:Vs(t.settings.inTangents,Array),outTangents:Vs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ya(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case Ko:e=this.InterpolantFactoryMethodSmooth;break;case hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $t("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Yo(this.settings)&&($h(this.settings.inTangents,t),$h(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Yo(this.settings)&&(Qh(this.settings.inTangents,t),Qh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Sf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ko,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let _=0;_!==i;++_){let v=e[d+_];if(v!==e[f+_]||v!==e[h+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)e[f+h]=e[d+h]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $h(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Qh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=aa;var Ki=class extends En{constructor(t,e,i){super(t,e,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Rr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};va.prototype.ValueTypeName="color";var Ma=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};Ma.prototype.ValueTypeName="number";var Sa=class extends Ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xr=class extends En{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends En{constructor(t,e,i){super(t,e,i)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Rr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};ba.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xu=new wa,Ta=class{constructor(t){this.manager=t!==void 0?t:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=class extends Ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Yr=class extends qr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},cc=new ye,jh=new q,tu=new q,Aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(cc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zo=new q,Jo=new Qe,ti=new q,Zr=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zo,Jo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Zo,Jo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new q,eu=new le,nu=new le,xn=class extends Zr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,eu,nu),e.subVectors(nu,eu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jr=class extends Zr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pc=class extends Aa{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new pc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Hs=-90,Ws=1,Qs=class extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Hs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new xn(Hs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new xn(Hs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new xn(Hs,Ws,t,e);a.layers=this.layers,this.add(a);let l=new xn(Hs,Ws,t,e);l.layers=this.layers,this.add(l);let c=new xn(Hs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ea=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var qc="\\[\\]\\.:\\/",lp=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",cp="[^"+qc.replace("\\.","")+"]",hp=/((?:WC+[\/:])*)/.source.replace("WC",Yc),up=/(WCOD+)?/.source.replace("WCOD",cp),dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),fp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),pp=new RegExp("^"+hp+up+dp+fp+"$"),mp=["material","materials","bones","map"],mc=class{constructor(t,e,i){let s=i||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Be=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(t){let e=pp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);mp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=mc;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);var gc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Zc(n,t,e,i){let s=gp(i);switch(e){case Uc:return n*t;case Na:return n*t/s.components*s.byteLength;case Ua:return n*t/s.components*s.byteLength;case ji:return n*t*2/s.components*s.byteLength;case Fa:return n*t*2/s.components*s.byteLength;case Fc:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case Oa:return n*t*4/s.components*s.byteLength;case jr:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ga:return Math.max(n,16)*Math.max(t,8)/4;case za:case ka:return Math.max(n,8)*Math.max(t,8)/2;case Va:case Ha:case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wa:case io:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ll:case cl:case hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case so:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gp(n){switch(n){case vn:case Pc:return{byteLength:1,components:1};case nr:case Lc:case Yn:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case qn:case Pa:case Un:return{byteLength:4,components:1};case Dc:case Nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fd(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function bp(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){let _=d[f],v=d[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){let v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Op=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,Mm=`uniform sampler2D dfgLUT;
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
}`,Sm=`
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
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
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform float backgroundBlurriness;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,L0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,B0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,G0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,W0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,K0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Ep,alphatest_fragment:Cp,alphatest_pars_fragment:Rp,aomap_fragment:Ip,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Dp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:Fp,iridescence_fragment:Op,bumpmap_pars_fragment:zp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Vp,color_fragment:Hp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:qp,common:Yp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Kp,emissivemap_fragment:$p,emissivemap_pars_fragment:Qp,colorspace_fragment:jp,colorspace_pars_fragment:tm,envmap_fragment:em,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:sm,envmap_physical_pars_fragment:mm,envmap_vertex:rm,fog_vertex:om,fog_pars_vertex:am,fog_fragment:lm,fog_pars_fragment:cm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:dm,lights_lambert_pars_fragment:fm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:xm,lights_phong_fragment:_m,lights_phong_pars_fragment:ym,lights_physical_fragment:vm,lights_physical_pars_fragment:Mm,lights_fragment_begin:Sm,lights_fragment_maps:bm,lights_fragment_end:wm,lightprobes_pars_fragment:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Rm,map_fragment:Im,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Fm,morphcolor_vertex:Om,morphnormal_vertex:zm,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:Gm,normal_fragment_maps:Vm,normal_pars_fragment:Hm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Km,opaque_fragment:$m,packing:Qm,premultiplied_alpha_fragment:jm,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:o0,shadowmap_vertex:a0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:d0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:x0,transmission_pars_fragment:_0,uv_pars_fragment:y0,uv_pars_vertex:v0,uv_vertex:M0,worldpos_vertex:S0,background_vert:b0,background_frag:w0,backgroundCube_vert:T0,backgroundCube_frag:A0,cube_vert:E0,cube_frag:C0,depth_vert:R0,depth_frag:I0,distance_vert:P0,distance_frag:L0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:z0,meshlambert_vert:B0,meshlambert_frag:k0,meshmatcap_vert:G0,meshmatcap_frag:V0,meshnormal_vert:H0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:K0,points_vert:$0,points_frag:Q0,shadow_vert:j0,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},Nt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ai={basic:{uniforms:gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:gn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:gn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new se(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:gn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:gn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:gn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:gn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:gn([Nt.common,Nt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:gn([Nt.lights,Nt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ai.physical={uniforms:gn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var gl={r:0,b:0,g:0},ig=new ye,pd=new jt;pd.set(-1,0,0,0,1,0,0,0,1);function sg(n,t,e,i,s,r){let o=new se(0),a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let b=S.backgroundBlurriness>0;T=t.get(T,b)}return T}function _(S){let T=!1,b=h(S);b===null?m(o,a):b&&b.isColor&&(m(b,1),T=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,T){let b=h(T);b&&b.isCubeTexture?(c===void 0&&(c=new Re(new mn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ys(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,M,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pd),c.material.toneMapped=pe.getTransfer(b.colorSpace)!==Ae,(u!==b||d!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Re(new si(2,2),new Nn({name:"BackgroundMaterial",uniforms:ys(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=pe.getTransfer(b.colorSpace)!==Ae,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB(gl,Xc(n)),e.buffers.color.setClear(gl.r,gl.g,gl.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:_,addToRenderList:v,dispose:g}}function rg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(R,O,F,L,z){let X=!1,H=d(R,L,F,O);r!==H&&(r=H,c(r.object)),X=h(R,L,F,z),X&&_(R,L,F,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(R,O,F,L),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,O,F,L){let z=L.wireframe===!0,X=i[O.id];X===void 0&&(X={},i[O.id]=X);let H=R.isInstancedMesh===!0?R.id:0,Q=X[H];Q===void 0&&(Q={},X[H]=Q);let B=Q[F.id];B===void 0&&(B={},Q[F.id]=B);let Z=B[z];return Z===void 0&&(Z=f(l()),B[z]=Z),Z}function f(R){let O=[],F=[],L=[];for(let z=0;z<e;z++)O[z]=0,F[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:L,object:R,attributes:{},index:null}}function h(R,O,F,L){let z=r.attributes,X=O.attributes,H=0,Q=F.getAttributes();for(let B in Q)if(Q[B].location>=0){let tt=z[B],ut=X[B];if(ut===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ut=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ut=R.instanceColor)),tt===void 0||tt.attribute!==ut||ut&&tt.data!==ut.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function _(R,O,F,L){let z={},X=O.attributes,H=0,Q=F.getAttributes();for(let B in Q)if(Q[B].location>=0){let tt=X[B];tt===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor));let ut={};ut.attribute=tt,tt&&tt.data&&(ut.data=tt.data),z[B]=ut,H++}r.attributes=z,r.attributesNum=H,r.index=L}function v(){let R=r.newAttributes;for(let O=0,F=R.length;O<F;O++)R[O]=0}function m(R){g(R,0)}function g(R,O){let F=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;F[R]=1,L[R]===0&&(n.enableVertexAttribArray(R),L[R]=1),z[R]!==O&&(n.vertexAttribDivisor(R,O),z[R]=O)}function S(){let R=r.newAttributes,O=r.enabledAttributes;for(let F=0,L=O.length;F<L;F++)O[F]!==R[F]&&(n.disableVertexAttribArray(F),O[F]=0)}function T(R,O,F,L,z,X,H){H===!0?n.vertexAttribIPointer(R,O,F,z,X):n.vertexAttribPointer(R,O,F,L,z,X)}function b(R,O,F,L){v();let z=L.attributes,X=F.getAttributes(),H=O.defaultAttributeValues;for(let Q in X){let B=X[Q];if(B.location>=0){let Z=z[Q];if(Z===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){let tt=Z.normalized,ut=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;let Y=Et.buffer,ht=Et.type,Rt=Et.bytesPerElement,Lt=ht===n.INT||ht===n.UNSIGNED_INT||Z.gpuType===Pa;if(Z.isInterleavedBufferAttribute){let yt=Z.data,Vt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Le=Z.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let kt=0;kt<B.locationSize;kt++)g(B.location+kt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let kt=0;kt<B.locationSize;kt++)m(B.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let kt=0;kt<B.locationSize;kt++)T(B.location+kt,ut/B.locationSize,ht,tt,Vt*Rt,(Le+ut/B.locationSize*kt)*Rt,Lt)}else{if(Z.isInstancedBufferAttribute){for(let yt=0;yt<B.locationSize;yt++)g(B.location+yt,Z.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let yt=0;yt<B.locationSize;yt++)m(B.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let yt=0;yt<B.locationSize;yt++)T(B.location+yt,ut/B.locationSize,ht,tt,ut*Rt,ut/B.locationSize*yt*Rt,Lt)}}else if(H!==void 0){let tt=H[Q];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(B.location,tt);break;case 3:n.vertexAttrib3fv(B.location,tt);break;case 4:n.vertexAttrib4fv(B.location,tt);break;default:n.vertexAttrib1fv(B.location,tt)}}}}S()}function I(){A();for(let R in i){let O=i[R];for(let F in O){let L=O[F];for(let z in L){let X=L[z];for(let H in X)u(X[H].object),delete X[H];delete L[z]}}delete i[R]}}function M(R){if(i[R.id]===void 0)return;let O=i[R.id];for(let F in O){let L=O[F];for(let z in L){let X=L[z];for(let H in X)u(X[H].object),delete X[H];delete L[z]}}delete i[R.id]}function p(R){for(let O in i){let F=i[O];for(let L in F){let z=F[L];if(z[R.id]===void 0)continue;let X=z[R.id];for(let H in X)u(X[H].object),delete X[H];delete z[R.id]}}}function y(R){for(let O in i){let F=i[O],L=R.isInstancedMesh===!0?R.id:0,z=F[L];if(z!==void 0){for(let X in z){let H=z[X];for(let Q in H)u(H[Q].object),delete H[Q];delete z[X]}delete F[L],Object.keys(F).length===0&&delete i[O]}}}function A(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:p,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function og(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ag(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let p=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(p){return!(p!==Cn&&i.convert(p)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(p){let y=p===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(p!==vn&&p!==Un&&!y&&i.convert(p)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&($t("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&$t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:b,maxSamples:I,samples:M}}function lg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Wn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){let _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,T=S*4,b=g.clippingState||null;l.value=b,b=u(_,f,T,h);for(let I=0;I!==T;++I)b[I]=e[I];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,_){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let g=h+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,b=h;T!==v;++T,b+=4)o.copy(d[T]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var ao=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ms});r.uniforms.tEquirect.value=e;let o=new Re(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=on),new Qs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},qu=256,cg=3,hg=20,md=256,gd=16,ug=3,dg=new q,fg=new se,_l=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qs(1,10,null),this._boxMesh=new Re(new mn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=dg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(fg));let m=new Qs(i,s,u);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=_,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qu,Hc(t))}_fromTexture(t,e){t.mapping===xs||t.mapping===er?this._setSize(t.image.length===0?qu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Yu(t,!1,!1),i=Math.log2(t)-cg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xs||t.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=pg(),this._integrationMaterial=mg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gd);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-ug)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(md*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=gg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Yu(n,t,e){return new ao(n,{minFilter:Ai,generateMipmaps:t,type:Yn,colorSpace:Ir,depthBuffer:e})}function lo(n,t,e){return new Nn({name:n,uniforms:t,vertexShader:ue.cube_vert,fragmentShader:e,side:un,blending:ms,depthTest:!1,depthWrite:!1})}function pg(){return lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${md}u

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
	`)}function mg(){return lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gd}},`

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
	`)}function gg(){return lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hg}
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
	`)}function Zu(){return lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ju(){return lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===Ca||h===Ra)if(t.has(f)){let _=t.get(f).texture;return a(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let v=new ao(_.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,_=h===Ca||h===Ra,v=h===xs||h===er;if(_||v){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new _l(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let S=f.image;return _&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new _l(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===Ca?f.mapping=xs:h===Ra&&(f.mapping=er),f}function l(f){let h=0,_=6;for(let v=0;v<_;v++)f[v]!==void 0&&h++;return h===_}function c(f){let h=f.target;h.removeEventListener("dispose",c);let _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function _g(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ar("WebGLRenderer: "+i+" extension not supported."),s}}}function yg(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let v=r.get(_);v&&(t.remove(v),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function u(_){let v=_.attributes;for(let m in v)t.update(v[m],n.ARRAY_BUFFER)}function d(_){let v=_.index,m=_.attributes.position,g=0;if(m===void 0)return;let S=v!==null?v.array.length:m.array.length/3-1,T=m.count>=65535?zr:Or,b=new T(Math.ceil(S/3)*6,1),I=b.array;if(v!==null){let p=v.array;g=v.version;for(let y=0,A=0;y<S;y+=3){let P=p[y+0],R=p[y+1],O=p[y+2];I[A++]=P,I[A++]=R,I[A++]=R,I[A++]=O,I[A++]=O,I[A++]=P}}else{g=m.version;for(let p=0,y=0;p<S;p+=3){let A=p+0,P=p+1,R=p+2;I[y++]=A,I[y++]=P,I[y++]=P,I[y++]=R,I[y++]=R,I[y++]=A}}b.version=g;let M=r.get(_);M&&t.remove(M),r.set(_,b)}function f(_){let v=r.get(_);if(v){let m=_.index;m!==null&&v.version<m.version&&d(_)}else d(_);return r.get(_)}function h(){for(let _ in s){let v=s[_].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function vg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),e.update(f,i,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let v=0;for(let m=0;m<h;m++)v+=f[m];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Mg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Sg(n,t,e){let i=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let A=function(){p.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],T=0;h===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let b=a.attributes.position.count*T,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let M=new Float32Array(b*I*4*d),p=new Dr(M,b,I,d);p.type=Un,p.needsUpdate=!0;let y=T*4;for(let P=0;P<d;P++){let R=m[P],O=g[P],F=S[P],L=b*I*4*P;for(let z=0;z<R.count;z++){let X=z*y;h===!0&&(s.fromBufferAttribute(R,z),M[L+X+0]=s.x,M[L+X+1]=s.y,M[L+X+2]=s.z,M[L+X+3]=0),_===!0&&(s.fromBufferAttribute(O,z),M[L+X+4]=s.x,M[L+X+5]=s.y,M[L+X+6]=s.z,M[L+X+7]=0),v===!0&&(s.fromBufferAttribute(F,z),M[L+X+8]=s.x,M[L+X+9]=s.y,M[L+X+10]=s.z,M[L+X+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:p,size:new le(b,I)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];let _=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function bg(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var wg={[wc]:"LINEAR_TONE_MAPPING",[Tc]:"REINHARD_TONE_MAPPING",[Ac]:"CINEON_TONE_MAPPING",[$r]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[Ec]:"CUSTOM_TONE_MAPPING"};function Tg(n,t,e,i,s,r){let o=new An(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new je;u.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Me([0,2,0,0,2,0],2));let d=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Re(u,d),h=new Jr(-1,1,1,-1,0,1),_=null,v=null,m=!1,g,S=null,T=[],b=!1;this.setSize=function(I,M){o.setSize(I,M),a!==null&&a.setSize(I,M),l!==null&&l.setSize(I,M);for(let p=0;p<T.length;p++){let y=T[p];y.setSize&&y.setSize(I,M)}},this.setEffects=function(I){T=I,b=T.length>0&&T[0].isRenderPass===!0;let M=o.width,p=o.height;T.length>0&&a===null&&(a=new An(M,p,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new An(M,p,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&T.some(A=>A.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new wi(M,p),r===!0&&(c.format=Ei,c.type=_s)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let A=0;A<T.length;A++){let P=T[A];P.setSize&&P.setSize(M,p),y&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(I,M){if(m||I.toneMapping===ri&&T.length===0)return!1;if(S=M,M!==null){let p=M.width,y=M.height;(o.width!==p||o.height!==y)&&this.setSize(p,y)}return b===!1&&I.setRenderTarget(o),g=I.toneMapping,I.toneMapping=ri,!0},this.hasRenderPass=function(){return b},this.end=function(I,M){I.toneMapping=g,m=!0;let p=o,y=a;for(let A=0;A<T.length;A++){let P=T[A];P.enabled!==!1&&(P.render(I,y,p,M),P.needsSwap!==!1&&(p=y,y=y===a?l:a))}if(_!==I.outputColorSpace||v!==I.toneMapping){_=I.outputColorSpace,v=I.toneMapping,d.defines={},pe.getTransfer(_)===Ae&&(d.defines.SRGB_TRANSFER="");let A=wg[v];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=p.texture,I.setRenderTarget(S),I.render(f,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var xd=new _n,_d=new wi(1,1),yd=new Gr(1),vd=new Dr,Md=new ha,Sd=new Br,Ku=[],$u=[],Qu=new Float32Array(16),ju=new Float32Array(9),td=new Float32Array(4);function or(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vl(n,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ag(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function Cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function Rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function Ig(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;td.set(i),n.uniformMatrix2fv(this.addr,!1,td),en(e,i)}}function Pg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;ju.set(i),n.uniformMatrix3fv(this.addr,!1,ju),en(e,i)}}function Lg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Qu.set(i),n.uniformMatrix4fv(this.addr,!1,Qu),en(e,i)}}function Dg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function Ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function Og(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function Ml(n){return n.version===0&&(n.compareFunction=Bc,n.needsUpdate=!0),n}function Gg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ml(_d):r=xd,e.setTexture2D(t||r,s)}function Vg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Md,s)}function Hg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ml(yd):r=Sd,e.setTextureCube(t||r,s)}function Wg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vd,s)}function Xg(n){switch(n){case 5126:return Ag;case 35664:return Eg;case 35665:return Cg;case 35666:return Rg;case 35674:return Ig;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return zg;case 36295:return Bg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Wg}}function qg(n,t){n.uniform1fv(this.addr,t)}function Yg(n,t){let e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function Zg(n,t){let e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function Jg(n,t){let e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function Kg(n,t){let e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $g(n,t){let e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Qg(n,t){let e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function jg(n,t){n.uniform1iv(this.addr,t)}function tx(n,t){n.uniform2iv(this.addr,t)}function ex(n,t){n.uniform3iv(this.addr,t)}function nx(n,t){n.uniform4iv(this.addr,t)}function ix(n,t){n.uniform1uiv(this.addr,t)}function sx(n,t){n.uniform2uiv(this.addr,t)}function rx(n,t){n.uniform3uiv(this.addr,t)}function ox(n,t){n.uniform4uiv(this.addr,t)}function ax(n,t,e){let i=this.cache,s=t.length,r=vl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ml(_d):o=xd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function lx(n,t,e){let i=this.cache,s=t.length,r=vl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Md,r[o])}function cx(n,t,e){let i=this.cache,s=t.length,r=vl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ml(yd):o=Sd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function hx(n,t,e){let i=this.cache,s=t.length,r=vl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vd,r[o])}function ux(n){switch(n){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return $g;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}var $c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Xg(e.type)}},Qc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ux(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function ed(n,t){n.seq.push(t),n.map[t.id]=t}function dx(n,t,e){let i=n.name,s=i.length;for(Jc.lastIndex=0;;){let r=Jc.exec(i),o=Jc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ed(e,c===void 0?new $c(a,n,t):new Qc(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new jc(a),ed(e,d)),e=d}}}var rr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);dx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function nd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var fx=37297,px=0;function mx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var id=new jt;function gx(n){pe._getMatrix(id,pe.workingColorSpace,n);let t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case Pr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function sd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+mx(n.getShaderSource(t),a)}else return r}function xx(n,t){let e=gx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _x={[wc]:"Linear",[Tc]:"Reinhard",[Ac]:"Cineon",[$r]:"ACESFilmic",[Cc]:"AgX",[Rc]:"Neutral",[Ec]:"Custom"};function yx(n,t){let e=_x[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xl=new q;function vx(){pe.getLuminanceCoefficients(xl);let n=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Sx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function bx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function oo(n){return n!==""}function rd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function od(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(n){return n.replace(wx,Tx)}function Tx(n,t){let e=ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return th(e)}var Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(n){return n.replace(Ax,Ex)}function Ex(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Cx={[ps]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Rx(n){return Cx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ix={[er]:"ENVMAP_MODE_REFRACTION"};function Px(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ix[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lx={[bc]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Tu]:"ENVMAP_BLENDING_ADD"};function Dx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Lx[n.combine]||"ENVMAP_BLENDING_NONE"}function Nx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Rx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Px(e),d=Dx(e),f=Mx(e),h=Sx(r),_=s.createProgram(),v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(oo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(v=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?ue.tonemapping_pars_fragment:"",e.toneMapping!==ri?yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,xx("linearToOutputTexel",e.outputColorSpace),vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=th(o),o=rd(o,e),o=od(o,e),a=th(a),a=rd(a,e),a=od(a,e),o=ad(o),a=ad(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=g+v+o,T=g+m+a,b=nd(s,s.VERTEX_SHADER,S),I=nd(s,s.FRAGMENT_SHADER,T);s.attachShader(_,b),s.attachShader(_,I),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(P){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(I)||"",L=R.trim(),z=O.trim(),X=F.trim(),H=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,I);else{let B=sd(s,b,"vertex"),Z=sd(s,I,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+B+`
`+Z)}else L!==""?$t("WebGLProgram: Program Info Log:",L):(z===""||X==="")&&(Q=!1);Q&&(P.diagnostics={runnable:H,programLog:L,vertexShader:{log:z,prefix:v},fragmentShader:{log:X,prefix:m}})}s.deleteShader(b),s.deleteShader(I),p=new rr(s,_),y=bx(s,_)}let p;this.getUniforms=function(){return p===void 0&&M(this),p};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,fx)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=px++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=I,this}var Ux=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new nh(t),e.set(t,i)),i}},nh=class{constructor(t){this.id=Ux++,this.code=t,this.usedTimes=0}};function Fx(n){return n===ji||n===io||n===so}function Ox(n,t,e,i,s,r){let o=new Nr,a=new eh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(p){return l.add(p),p===0?"uv":`uv${p}`}function _(p,y,A,P,R,O){let F=P.fog,L=R.geometry,z=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?P.environment:null,X=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,H=t.get(p.envMap||z,X),Q=f[p.type],B=i.precision;p.precision!==null&&(B=i.getMaxPrecision(p.precision),B!==p.precision&&$t("WebGLProgram.getParameters:",p.precision,"not supported, using",B,"instead."));let Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=Z!==void 0?Z.length:0,ut=0;L.morphAttributes.position!==void 0&&(ut=1),L.morphAttributes.normal!==void 0&&(ut=2),L.morphAttributes.color!==void 0&&(ut=3);let Et,Y,ht,Rt;if(Q){let Pt=ai[Q];Et=Pt.vertexShader,Y=Pt.fragmentShader}else{Et=p.vertexShader,Y=p.fragmentShader;let Pt=a.getVertexShaderStage(p),xe=a.getFragmentShaderStage(p);a.update(p,Pt,xe),ht=Pt.id,Rt=xe.id}let Lt=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Vt=R.isInstancedMesh===!0,Le=R.isBatchedMesh===!0,kt=!!p.map,oe=!!p.matcap,rt=!!H,Kt=rt&&H.isPMREMTexture===!0,Se=!!p.aoMap,Ee=!!p.lightMap,ve=!!p.bumpMap&&p.wireframe===!1,be=!!p.normalMap,ke=!!p.displacementMap,It=!!p.emissiveMap,de=!!p.metalnessMap,fe=!!p.roughnessMap,te=p.anisotropy>0,V=p.clearcoat>0,De=p.diffuseRoughness>0,ae=p.dispersion>0,Te=p.retroreflectivity>0,wt=p.iridescence>0,Ne=p.sheen>0,Yt=p.transmission>0,Zt=te&&!!p.anisotropyMap,N=V&&!!p.clearcoatMap,w=V&&!!p.clearcoatNormalMap,J=V&&!!p.clearcoatRoughnessMap,ft=De&&!!p.diffuseRoughnessMap,ot=wt&&!!p.iridescenceMap,Mt=wt&&!!p.iridescenceThicknessMap,vt=Ne&&!!p.sheenColorMap,it=Ne&&!!p.sheenRoughnessMap,nt=!!p.specularMap,gt=!!p.specularColorMap,G=!!p.specularIntensityMap,at=Yt&&!!p.transmissionMap,st=Yt&&!!p.thicknessMap,St=!!p.gradientMap,dt=!!p.alphaMap,xt=p.alphaTest>0,Wt=!!p.alphaHash,Jt=!!p.extensions,pt=ri;p.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(pt=n.toneMapping);let Ht=Kt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,re={shaderID:Q,shaderType:p.type,shaderName:p.name,vertexShader:Et,fragmentShader:Y,defines:p.defines,customVertexShaderID:ht,customFragmentShaderID:Rt,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:B,batching:Le,batchingColor:Le&&R._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&R.instanceColor!==null,instancingMorph:Vt&&R.morphTexture!==null,outputColorSpace:Lt===null?n.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:kt,matcap:oe,envMap:rt,envMapMode:rt&&H.mapping,envMapPMREM:Kt,envMapMaxLod:Kt?Ht.length-1:null,envMapSize:Kt?Ht[0].width:null,aoMap:Se,lightMap:Ee,bumpMap:ve,normalMap:be,displacementMap:ke,emissiveMap:It,normalMapObjectSpace:be&&p.normalMapType===Cu,normalMapTangentSpace:be&&p.normalMapType===pl,packedNormalMap:be&&p.normalMapType===pl&&Fx(p.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:te,anisotropyMap:Zt,clearcoat:V,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:J,diffuseRoughness:De,diffuseRoughnessMap:ft,dispersion:ae,retroreflection:Te,iridescence:wt,iridescenceMap:ot,iridescenceThicknessMap:Mt,sheen:Ne,sheenColorMap:vt,sheenRoughnessMap:it,specularMap:nt,specularColorMap:gt,specularIntensityMap:G,transmission:Yt,transmissionMap:at,thicknessMap:st,gradientMap:St,opaque:p.transparent===!1&&p.blending===tr&&p.alphaToCoverage===!1,alphaMap:dt,alphaTest:xt,alphaHash:Wt,combine:p.combine,mapUv:kt&&h(p.map.channel),aoMapUv:Se&&h(p.aoMap.channel),lightMapUv:Ee&&h(p.lightMap.channel),bumpMapUv:ve&&h(p.bumpMap.channel),normalMapUv:be&&h(p.normalMap.channel),displacementMapUv:ke&&h(p.displacementMap.channel),emissiveMapUv:It&&h(p.emissiveMap.channel),metalnessMapUv:de&&h(p.metalnessMap.channel),roughnessMapUv:fe&&h(p.roughnessMap.channel),anisotropyMapUv:Zt&&h(p.anisotropyMap.channel),clearcoatMapUv:N&&h(p.clearcoatMap.channel),clearcoatNormalMapUv:w&&h(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&h(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&h(p.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&h(p.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&h(p.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&h(p.sheenColorMap.channel),sheenRoughnessMapUv:it&&h(p.sheenRoughnessMap.channel),specularMapUv:nt&&h(p.specularMap.channel),specularColorMapUv:gt&&h(p.specularColorMap.channel),specularIntensityMapUv:G&&h(p.specularIntensityMap.channel),transmissionMapUv:at&&h(p.transmissionMap.channel),thicknessMapUv:st&&h(p.thicknessMap.channel),alphaMapUv:dt&&h(p.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||te),vertexNormals:!!L.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(kt||dt),fog:!!F,useFog:p.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:O.filter(Pt=>Pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:kt&&p.map.isVideoTexture===!0&&pe.getTransfer(p.map.colorSpace)===Ae,decodeVideoTextureEmissive:It&&p.emissiveMap.isVideoTexture===!0&&pe.getTransfer(p.emissiveMap.colorSpace)===Ae,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===yn,flipSided:p.side===un,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Jt&&p.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&p.extensions.multiDraw===!0||Le)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function v(p){let y=[];if(p.shaderID?y.push(p.shaderID):(y.push(p.customVertexShaderID),y.push(p.customFragmentShaderID)),p.defines!==void 0)for(let A in p.defines)y.push(A),y.push(p.defines[A]);return p.isRawShaderMaterial===!1&&(m(y,p),g(y,p),y.push(n.outputColorSpace)),y.push(p.customProgramCacheKey),y.join()}function m(p,y){p.push(y.precision),p.push(y.outputColorSpace),p.push(y.envMapMode),p.push(y.envMapPMREM),p.push(y.envMapMaxLod),p.push(y.envMapSize),p.push(y.mapUv),p.push(y.alphaMapUv),p.push(y.lightMapUv),p.push(y.aoMapUv),p.push(y.bumpMapUv),p.push(y.normalMapUv),p.push(y.displacementMapUv),p.push(y.emissiveMapUv),p.push(y.metalnessMapUv),p.push(y.roughnessMapUv),p.push(y.anisotropyMapUv),p.push(y.clearcoatMapUv),p.push(y.clearcoatNormalMapUv),p.push(y.clearcoatRoughnessMapUv),p.push(y.diffuseRoughnessMapUv),p.push(y.iridescenceMapUv),p.push(y.iridescenceThicknessMapUv),p.push(y.sheenColorMapUv),p.push(y.sheenRoughnessMapUv),p.push(y.specularMapUv),p.push(y.specularColorMapUv),p.push(y.specularIntensityMapUv),p.push(y.transmissionMapUv),p.push(y.thicknessMapUv),p.push(y.combine),p.push(y.fogExp2),p.push(y.sizeAttenuation),p.push(y.morphTargetsCount),p.push(y.numSunLights),p.push(y.numDirLights),p.push(y.numPointLights),p.push(y.numSpotLights),p.push(y.numSpotLightMaps),p.push(y.numHemiLights),p.push(y.numRectAreaLights),p.push(y.numSunLightShadows),p.push(y.numDirLightShadows),p.push(y.numPointLightShadows),p.push(y.numSpotLightShadows),p.push(y.numSpotLightShadowsWithMaps),p.push(y.numLightProbes),p.push(y.numLightProbeGrids),p.push(y.shadowMapType),p.push(y.toneMapping),p.push(y.numClippingPlanes),p.push(y.numClipIntersection),p.push(y.depthPacking)}function g(p,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),p.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),p.push(o.mask)}function S(p){let y=f[p.type],A;if(y){let P=ai[y];A=Hu.clone(P.uniforms)}else A=p.uniforms;return A}function T(p,y){let A=u.get(y);return A!==void 0?++A.usedTimes:(A=new Nx(n,y,p,s),c.push(A),u.set(y,A)),A}function b(p){if(--p.usedTimes===0){let y=c.indexOf(p);c[y]=c[c.length-1],c.pop(),u.delete(p.cacheKey),p.destroy()}}function I(p){a.remove(p)}function M(){a.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:S,acquireProgram:T,releaseProgram:b,releaseShaderCache:I,programs:c,dispose:M}}function zx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Bx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function cd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,_,v,m,g){let S=n[t];return S===void 0?(S={id:f.id,object:f,geometry:h,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},n[t]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=_,S.materialVariant=o(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=m,S.group=g),t++,S}function l(f,h,_,v,m,g,S){S.reversedDepth===!0&&(m=-m);let T=a(f,h,_,v,m,g);_.transmission>0?i.push(T):_.transparent===!0?s.push(T):e.push(T)}function c(f,h,_,v,m,g){let S=a(f,h,_,v,m,g);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function u(f,h){e.length>1&&e.sort(f||Bx),i.length>1&&i.sort(h||cd),s.length>1&&s.sort(h||cd)}function d(){for(let f=t,h=n.length;f<h;f++){let _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function kx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new hd,n.set(i,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Gx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new se};break;case"SpotLight":e={position:new q,direction:new q,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function Vx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Hx=0;function Wx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xx(n){let t=new Gx,e=Vx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);let s=new q,r=new ye,o=new ye;function a(c){let u=0,d=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let h=0,_=0,v=0,m=0,g=0,S=0,T=0,b=0,I=0,M=0,p=0,y=0,A=0,P=0;c.sort(Wx);for(let O=0,F=c.length;O<F;O++){let L=c[O],z=L.color,X=L.intensity,H=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ji?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*X,d+=z.g*X,f+=z.b*X;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],X);P++}else if(L.isSunLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,tt=e.get(L);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[_]=tt,i.sunShadowMap[_]=Q;let ut=Z.getViewportCount();for(let Et=0;Et<ut;Et++)i.sunShadowMatrix[v+Et]=Z.getMatrix(Et),i.sunShadowCascade[v+Et]=Z._cascadeData[Et];v+=ut,_++}i.sun[h]=B,h++}else if(L.isDirectionalLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,tt=e.get(L);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=L.shadow.matrix,I++}i.directional[m]=B,m++}else if(L.isSpotLight){let B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(z).multiplyScalar(X),B.distance=H,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[S]=B;let Z=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,Z.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[S]=Z.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=Q,p++}S++}else if(L.isRectAreaLight){let B=t.get(L);B.color.copy(z).multiplyScalar(X),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=B,T++}else if(L.isPointLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){let Z=L.shadow,tt=e.get(L);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,tt.shadowCameraNear=Z.camera.near,tt.shadowCameraFar=Z.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=B,g++}else if(L.isHemisphereLight){let B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(X),B.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[b]=B,b++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Nt.LTC_FLOAT_1,i.rectAreaLTC2=Nt.LTC_FLOAT_2):(i.rectAreaLTC1=Nt.LTC_HALF_1,i.rectAreaLTC2=Nt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let R=i.hash;(R.sunLength!==h||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==S||R.rectAreaLength!==T||R.hemiLength!==b||R.numSunShadows!==_||R.numDirectionalShadows!==I||R.numPointShadows!==M||R.numSpotShadows!==p||R.numSpotMaps!==y||R.numLightProbes!==P)&&(i.sun.length=h,i.directional.length=m,i.spot.length=S,i.rectArea.length=T,i.point.length=g,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=p,i.spotShadowMap.length=p,i.spotLightMatrix.length=p+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,R.sunLength=h,R.directionalLength=m,R.pointLength=g,R.spotLength=S,R.rectAreaLength=T,R.hemiLength=b,R.numSunShadows=_,R.numDirectionalShadows=I,R.numPointShadows=M,R.numSpotShadows=p,R.numSpotMaps=y,R.numLightProbes=P,i.version=Hx++)}function l(c,u){let d=0,f=0,h=0,_=0,v=0,m=0,g=u.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let b=c[S];if(b.isSunLight){let I=i.sun[d];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let I=i.directional[f];I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),f++}else if(b.isSpotLight){let I=i.spot[_];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),_++}else if(b.isRectAreaLight){let I=i.rectArea[v];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let I=i.point[h];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){let I=i.hemi[m];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function ud(n){let t=new Xx(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ud(n),t.set(s,[a])):r>=o.length?(a=new ud(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`,Jx=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Kx=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],dd=new ye,ro=new q,Kc=new q;function $x(n,t,e){let i=new Yi,s=new le,r=new le,o=new Ve,a=new pa,l=new ma,c={},u=e.maxTextureSize,d={[Qi]:un,[un]:Qi,[yn]:yn},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Yx,fragmentShader:Zx}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let _=new je;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Re(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let g=this.type;this.render=function(M,p,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===ru&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);let A=n.getRenderTarget(),P=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ms),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=g!==this.type;F&&p.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=M.length;L<z;L++){let X=M[L],H=X.shadow;if(H===void 0){$t("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();s.multiply(Q),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=B,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===js){if(X.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new An(s.x,s.y,{format:ji,type:Yn,minFilter:on,magFilter:on,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new wi(s.x,s.y,Un),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=Si,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn}else X.isPointLight?(H.map=new ao(s.x),H.map.depthTexture=new Gr(s.x,qn)):(H.map=new An(s.x,s.y),H.map.depthTexture=new wi(s.x,s.y,qn)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=Si,this.type===ps?(H.map.depthTexture.compareFunction=B?zc:Oc,H.map.depthTexture.minFilter=on,H.map.depthTexture.magFilter=on):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,y);let tt=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:y.layers;for(let ut=0;ut<Z;ut++){let Et=H.getCamera(ut);if(X.isPointLight){let Y=H.camera,ht=H.matrix,Rt=X.distance||Y.far;Rt!==Y.far&&(Y.far=Rt,Y.updateProjectionMatrix()),ro.setFromMatrixPosition(X.matrixWorld),Y.position.copy(ro),Kc.copy(Y.position),Kc.add(Jx[ut]),Y.up.copy(Kx[ut]),Y.lookAt(Kc),Y.updateMatrixWorld(),ht.makeTranslation(-ro.x,-ro.y,-ro.z),dd.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H._frustum.setFromProjectionMatrix(dd,Y.coordinateSystem,Y.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ut),n.clear();else{ut===0&&(n.setRenderTarget(H.map),n.clear());let Y=H.getViewport(ut);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),O.viewport(o)}i=H.getFrustum(ut),b(p,y,Et,X,tt,this.type)}H.isPointLightShadow!==!0&&this.type===js&&S(H,y),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(A,P,R)};function S(M,p){let y=t.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null?M.mapPass=new An(s.x,s.y,{format:ji,type:Yn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(p,null,y,f,v,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(p,null,y,h,v,null)}function T(M,p,y,A){let P=null,R=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)P=R;else if(P=y.isPointLight===!0?l:a,n.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let O=P.uuid,F=p.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let z=L[F];z===void 0&&(z=P.clone(),L[F]=z,p.addEventListener("dispose",I)),P=z}if(P.visible=p.visible,P.wireframe=p.wireframe,A===js?P.side=p.shadowSide!==null?p.shadowSide:p.side:P.side=p.shadowSide!==null?p.shadowSide:d[p.side],P.alphaMap=p.alphaMap,P.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,P.map=p.map,P.clipShadows=p.clipShadows,P.clippingPlanes=p.clippingPlanes,P.clipIntersection=p.clipIntersection,P.displacementMap=p.displacementMap,P.displacementScale=p.displacementScale,P.displacementBias=p.displacementBias,P.wireframeLinewidth=p.wireframeLinewidth,P.linewidth=p.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=y}return P}function b(M,p,y,A,P,R){if(M.visible===!1)return;if(M.layers.test(P)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===js)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let L=t.update(M),z=M.material;if(Array.isArray(z)){let X=L.groups;for(let H=0,Q=X.length;H<Q;H++){let B=X[H],Z=z[B.materialIndex];if(Z&&Z.visible){let tt=T(M,Z,A,R);M.onBeforeShadow(n,M,p,y,L,tt,B),n.renderBufferDirect(y,null,L,tt,M,B),M.onAfterShadow(n,M,p,y,L,tt,B)}}}else if(z.visible){let X=T(M,z,A,R);M.onBeforeShadow(n,M,p,y,L,X,null),n.renderBufferDirect(y,null,L,X,M,null),M.onAfterShadow(n,M,p,y,L,X,null)}}let F=M.children;for(let L=0,z=F.length;L<z;L++)b(F[L],p,y,A,P,R)}function I(M){M.target.removeEventListener("dispose",I);for(let y in c){let A=c[y],P=M.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Qx(n,t){function e(){let G=!1,at=new Ve,st=null,St=new Ve(0,0,0,0);return{setMask:function(dt){st!==dt&&!G&&(n.colorMask(dt,dt,dt,dt),st=dt)},setLocked:function(dt){G=dt},setClear:function(dt,xt,Wt,Jt,pt){pt===!0&&(dt*=Jt,xt*=Jt,Wt*=Jt),at.set(dt,xt,Wt,Jt),St.equals(at)===!1&&(n.clearColor(dt,xt,Wt,Jt),St.copy(at))},reset:function(){G=!1,st=null,St.set(-1,0,0,0)}}}function i(){let G=!1,at=!1,st=null,St=null,dt=null;return{setReversed:function(xt){if(at!==xt){let Wt=t.get("EXT_clip_control");xt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),at=xt;let Jt=dt;dt=null,this.setClear(Jt)}},getReversed:function(){return at},setTest:function(xt){xt?yt(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(xt){st!==xt&&!G&&(n.depthMask(xt),st=xt)},setFunc:function(xt){if(at&&(xt=Bu[xt]),St!==xt){switch(xt){case Qo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case ta:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case ea:n.depthFunc(n.EQUAL);break;case na:n.depthFunc(n.GEQUAL);break;case ia:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=xt}},setLocked:function(xt){G=xt},setClear:function(xt){dt!==xt&&(dt=xt,at&&(xt=1-xt),n.clearDepth(xt))},reset:function(){G=!1,st=null,St=null,dt=null,at=!1}}}function s(){let G=!1,at=null,st=null,St=null,dt=null,xt=null,Wt=null,Jt=null,pt=null;return{setTest:function(Ht){G||(Ht?yt(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(Ht){at!==Ht&&!G&&(n.stencilMask(Ht),at=Ht)},setFunc:function(Ht,re,Pt){(st!==Ht||St!==re||dt!==Pt)&&(n.stencilFunc(Ht,re,Pt),st=Ht,St=re,dt=Pt)},setOp:function(Ht,re,Pt){(xt!==Ht||Wt!==re||Jt!==Pt)&&(n.stencilOp(Ht,re,Pt),xt=Ht,Wt=re,Jt=Pt)},setLocked:function(Ht){G=Ht},setClear:function(Ht){pt!==Ht&&(n.clearStencil(Ht),pt=Ht)},reset:function(){G=!1,at=null,st=null,St=null,dt=null,xt=null,Wt=null,Jt=null,pt=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,u={},d={},f={},h=new WeakMap,_=[],v=null,m=!1,g=null,S=null,T=null,b=null,I=null,M=null,p=null,y=new se(0,0,0),A=0,P=!1,R=null,O=null,F=null,L=null,z=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=Q>=2);let Z=null,tt={},ut=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),Y=new Ve().fromArray(ut),ht=new Ve().fromArray(Et);function Rt(G,at,st,St){let dt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(G,xt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<st;Wt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(at+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return xt}let Lt={};Lt[n.TEXTURE_2D]=Rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Lt[n.TEXTURE_CUBE_MAP]=Rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[n.TEXTURE_2D_ARRAY]=Rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Lt[n.TEXTURE_3D]=Rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(n.DEPTH_TEST),o.setFunc(qs),ve(!1),be(xc),yt(n.CULL_FACE),Se(ms);function yt(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Vt(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Le(G,at){return f[G]!==at?(n.bindFramebuffer(G,at),f[G]=at,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=at),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=at),!0):!1}function kt(G,at){let st=_,St=!1;if(G){st=h.get(at),st===void 0&&(st=[],h.set(at,st));let dt=G.textures;if(st.length!==dt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Wt=dt.length;xt<Wt;xt++)st[xt]=n.COLOR_ATTACHMENT0+xt;st.length=dt.length,St=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,St=!0);St&&n.drawBuffers(st)}function oe(G){return v!==G?(n.useProgram(G),v=G,!0):!1}let rt={[gs]:n.FUNC_ADD,[au]:n.FUNC_SUBTRACT,[lu]:n.FUNC_REVERSE_SUBTRACT};rt[cu]=n.MIN,rt[hu]=n.MAX;let Kt={[uu]:n.ZERO,[du]:n.ONE,[fu]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[yu]:n.SRC_ALPHA_SATURATE,[xu]:n.DST_COLOR,[mu]:n.DST_ALPHA,[pu]:n.ONE_MINUS_SRC_COLOR,[Sc]:n.ONE_MINUS_SRC_ALPHA,[_u]:n.ONE_MINUS_DST_COLOR,[gu]:n.ONE_MINUS_DST_ALPHA,[vu]:n.CONSTANT_COLOR,[Mu]:n.ONE_MINUS_CONSTANT_COLOR,[Su]:n.CONSTANT_ALPHA,[bu]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(G,at,st,St,dt,xt,Wt,Jt,pt,Ht){if(G===ms){m===!0&&(Vt(n.BLEND),m=!1);return}if(m===!1&&(yt(n.BLEND),m=!0),G!==ou){if(G!==g||Ht!==P){if((S!==gs||I!==gs)&&(n.blendEquation(n.FUNC_ADD),S=gs,I=gs),Ht)switch(G){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",G);break}else switch(G){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",G);break}T=null,b=null,M=null,p=null,y.set(0,0,0),A=0,g=G,P=Ht}return}dt=dt||at,xt=xt||st,Wt=Wt||St,(at!==S||dt!==I)&&(n.blendEquationSeparate(rt[at],rt[dt]),S=at,I=dt),(st!==T||St!==b||xt!==M||Wt!==p)&&(n.blendFuncSeparate(Kt[st],Kt[St],Kt[xt],Kt[Wt]),T=st,b=St,M=xt,p=Wt),(Jt.equals(y)===!1||pt!==A)&&(n.blendColor(Jt.r,Jt.g,Jt.b,pt),y.copy(Jt),A=pt),g=G,P=!1}function Ee(G,at){G.side===yn?Vt(n.CULL_FACE):yt(n.CULL_FACE);let st=G.side===un;at&&(st=!st),ve(st),G.blending===tr&&G.transparent===!1?Se(ms):Se(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let St=G.stencilWrite;a.setTest(St),St&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),It(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function be(G){G!==iu?(yt(n.CULL_FACE),G!==O&&(G===xc?n.cullFace(n.BACK):G===su?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),O=G}function ke(G){G!==F&&(H&&n.lineWidth(G),F=G)}function It(G,at,st){G?(yt(n.POLYGON_OFFSET_FILL),(L!==at||z!==st)&&(L=at,z=st,o.getReversed()&&(at=-at,st=-st),n.polygonOffset(at,st))):Vt(n.POLYGON_OFFSET_FILL)}function de(G){G?yt(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function fe(G){G===void 0&&(G=n.TEXTURE0+X-1),Z!==G&&(n.activeTexture(G),Z=G)}function te(G,at,st){st===void 0&&(Z===null?st=n.TEXTURE0+X-1:st=Z);let St=tt[st];St===void 0&&(St={type:void 0,texture:void 0},tt[st]=St),(St.type!==G||St.texture!==at)&&(Z!==st&&(n.activeTexture(st),Z=st),n.bindTexture(G,at||Lt[G]),St.type=G,St.texture=at)}function V(){let G=tt[Z];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function De(){try{n.compressedTexImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function ae(){try{n.compressedTexImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function Te(){try{n.texSubImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function wt(){try{n.texSubImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function Ne(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function Yt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function Zt(){try{n.texStorage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function N(){try{n.texStorage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function w(){try{n.texImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function J(){try{n.texImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function ft(G){return d[G]!==void 0?d[G]:n.getParameter(G)}function ot(G,at){d[G]!==at&&(n.pixelStorei(G,at),d[G]=at)}function Mt(G){Y.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Y.copy(G))}function vt(G){ht.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ht.copy(G))}function it(G,at){let st=c.get(at);st===void 0&&(st=new WeakMap,c.set(at,st));let St=st.get(G);St===void 0&&(St=n.getUniformBlockIndex(at,G.name),n.uniformBlockBinding(at,St,St),st.set(G,St))}function nt(G,at,st){let dt=c.get(at).get(G);l[dt]!==st&&(n.bindBufferBase(n.UNIFORM_BUFFER,dt,st),l[dt]=st)}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,tt={},f={},l={},h=new WeakMap,_=[],v=null,m=!1,g=null,S=null,T=null,b=null,I=null,M=null,p=null,y=new se(0,0,0),A=0,P=!1,R=null,O=null,F=null,L=null,z=null,Y.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:Vt,bindFramebuffer:Le,drawBuffers:kt,useProgram:oe,setBlending:Se,setMaterial:Ee,setFlipSided:ve,setCullFace:be,setLineWidth:ke,setPolygonOffset:It,setScissorTest:de,activeTexture:fe,bindTexture:te,unbindTexture:V,compressedTexImage2D:De,compressedTexImage3D:ae,texImage2D:w,texImage3D:J,pixelStorei:ot,getParameter:ft,updateUBOMapping:it,uniformBlockBinding:nt,texStorage2D:Zt,texStorage3D:N,texSubImage2D:Te,texSubImage3D:wt,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Yt,scissor:Mt,viewport:vt,reset:gt}}function jx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,d=new Set,f,h=new WeakMap,_=new Set,v=new FinalizationRegistry(N=>_.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,w){return m?new OffscreenCanvas(N,w):Lr("canvas")}function S(N,w,J){let ft=1,ot=Zt(N);if((ot.width>J||ot.height>J)&&(ft=J/Math.max(ot.width,ot.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Mt=Math.floor(ft*ot.width),vt=Math.floor(ft*ot.height);f===void 0&&(f=g(Mt,vt));let it=w?g(Mt,vt):f;return it.width=Mt,it.height=vt,it.getContext("2d").drawImage(N,0,0,Mt,vt),$t("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Mt+"x"+vt+")."),it}else return"data"in N&&$t("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),N;return N}function T(N){return N.generateMipmaps}function b(N){n.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(N,w,J,ft,ot,Mt=!1){if(N!==null){if(n[N]!==void 0)return n[N];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let vt;ft&&(vt=t.get("EXT_texture_norm16"),vt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=w;if(w===n.RED&&(J===n.FLOAT&&(it=n.R32F),J===n.HALF_FLOAT&&(it=n.R16F),J===n.UNSIGNED_BYTE&&(it=n.R8),J===n.UNSIGNED_SHORT&&vt&&(it=vt.R16_EXT),J===n.SHORT&&vt&&(it=vt.R16_SNORM_EXT)),w===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(it=n.R8UI),J===n.UNSIGNED_SHORT&&(it=n.R16UI),J===n.UNSIGNED_INT&&(it=n.R32UI),J===n.BYTE&&(it=n.R8I),J===n.SHORT&&(it=n.R16I),J===n.INT&&(it=n.R32I)),w===n.RG&&(J===n.FLOAT&&(it=n.RG32F),J===n.HALF_FLOAT&&(it=n.RG16F),J===n.UNSIGNED_BYTE&&(it=n.RG8),J===n.UNSIGNED_SHORT&&vt&&(it=vt.RG16_EXT),J===n.SHORT&&vt&&(it=vt.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(it=n.RG8UI),J===n.UNSIGNED_SHORT&&(it=n.RG16UI),J===n.UNSIGNED_INT&&(it=n.RG32UI),J===n.BYTE&&(it=n.RG8I),J===n.SHORT&&(it=n.RG16I),J===n.INT&&(it=n.RG32I)),w===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(it=n.RGB8UI),J===n.UNSIGNED_SHORT&&(it=n.RGB16UI),J===n.UNSIGNED_INT&&(it=n.RGB32UI),J===n.BYTE&&(it=n.RGB8I),J===n.SHORT&&(it=n.RGB16I),J===n.INT&&(it=n.RGB32I)),w===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),J===n.UNSIGNED_INT&&(it=n.RGBA32UI),J===n.BYTE&&(it=n.RGBA8I),J===n.SHORT&&(it=n.RGBA16I),J===n.INT&&(it=n.RGBA32I)),w===n.RGB&&(J===n.UNSIGNED_SHORT&&vt&&(it=vt.RGB16_EXT),J===n.SHORT&&vt&&(it=vt.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),w===n.RGBA){let nt=Mt?Pr:pe.getTransfer(ot);J===n.FLOAT&&(it=n.RGBA32F),J===n.HALF_FLOAT&&(it=n.RGBA16F),J===n.UNSIGNED_BYTE&&(it=nt===Ae?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&vt&&(it=vt.RGBA16_EXT),J===n.SHORT&&vt&&(it=vt.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function p(N,w){let J;return N?w===null||w===qn||w===_s?J=n.DEPTH24_STENCIL8:w===Un?J=n.DEPTH32F_STENCIL8:w===nr&&(J=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===qn||w===_s?J=n.DEPTH_COMPONENT24:w===Un?J=n.DEPTH_COMPONENT32F:w===nr&&(J=n.DEPTH_COMPONENT16),J}function y(N,w){return T(N)===!0||N.isFramebufferTexture&&N.minFilter!==rn&&N.minFilter!==on?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function A(N){let w=new WeakRef(N);i.get(N).__ref=w,_.add(w),v.register(N,w,w)}function P(N){let w=i.get(N).__ref;w!==void 0&&(_.delete(w),v.unregister(w))}function R(N){F(N.target)}function O(N){L(N.target)}function F(N){N.removeEventListener("dispose",R),P(N),X(N),N.isVideoTexture&&u.delete(N),N.isHTMLTexture&&d.delete(N)}function L(N){N.removeEventListener("dispose",O),P(N),Q(N)}function z(){for(let N of _){let w=N.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):F(w))}_.clear(),d.clear()}function X(N){let w=i.get(N);if(w.__webglInit===void 0)return;let J=N.source,ft=h.get(J);if(ft){let ot=ft[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&H(N),Object.keys(ft).length===0&&h.delete(J)}i.remove(N)}function H(N){let w=i.get(N);n.deleteTexture(w.__webglTexture);let J=N.source,ft=h.get(J);delete ft[w.__cacheKey],o.memory.textures--}function Q(N){let w=i.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();let J=N.depthTexture;if(J&&J.renderTarget===N&&F(J),N.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let Mt=0;Mt<w.__webglFramebuffer[ot].length;Mt++)n.deleteFramebuffer(w.__webglFramebuffer[ot][Mt]);else n.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)n.deleteFramebuffer(w.__webglFramebuffer[ot]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ft=N.textures;for(let ot=0,Mt=ft.length;ot<Mt;ot++){let vt=i.get(ft[ot]);vt.__webglTexture&&(n.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(ft[ot])}i.remove(N)}let B=0;function Z(){B=0}function tt(){return B}function ut(N){B=N}function Et(){let N=B;return N>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,N}function Y(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function ht(N,w){let J=i.get(N);if(N.isVideoTexture&&Ne(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){let ft=N.image;if(ft===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(J,N,w);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+w)}function Rt(N,w){let J=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Ee(J,N,w);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+w)}function Lt(N,w){let J=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Ee(J,N,w);return}e.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+w)}function yt(N,w){let J=i.get(N);if(N.version>0&&J.__version!==N.version){ve(J,N,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+w)}let Vt={[ra]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[oa]:n.MIRRORED_REPEAT},Le={[rn]:n.NEAREST,[Au]:n.NEAREST_MIPMAP_NEAREST,[Qr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},kt={[Iu]:n.NEVER,[Bc]:n.ALWAYS,[Pu]:n.LESS,[Oc]:n.LEQUAL,[Lu]:n.EQUAL,[zc]:n.GEQUAL,[Du]:n.GREATER,[Nu]:n.NOTEQUAL};function oe(N,w){if(w.type===Un&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===on||w.magFilter===Ia||w.magFilter===Qr||w.magFilter===Ai||w.minFilter===on||w.minFilter===Ia||w.minFilter===Qr||w.minFilter===Ai)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Vt[w.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Vt[w.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Vt[w.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Le[w.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Le[w.minFilter]),w.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,kt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===rn||w.minFilter!==Qr&&w.minFilter!==Ai||w.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function rt(N,w){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",R),A(w));let ft=w.source,ot=h.get(ft);ot===void 0&&(ot={},h.set(ft,ot));let Mt=Y(w);if(Mt!==N.__cacheKey){ot[Mt]===void 0&&(ot[Mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ot[Mt].usedTimes++;let vt=ot[N.__cacheKey];vt!==void 0&&(ot[N.__cacheKey].usedTimes--,vt.usedTimes===0&&H(w)),N.__cacheKey=Mt,N.__webglTexture=ot[Mt].texture}return J}function Kt(N,w,J){return Math.floor(Math.floor(N/J)/w)}function Se(N,w,J,ft){let Mt=N.updateRanges;if(Mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,J,ft,w.data);else{Mt.sort((G,at)=>G.start-at.start);let vt=0;for(let G=1;G<Mt.length;G++){let at=Mt[vt],st=Mt[G],St=at.start+at.count,dt=Kt(st.start,w.width,4),xt=Kt(at.start,w.width,4);st.start<=St+1&&dt===xt&&Kt(st.start+st.count-1,w.width,4)===dt?at.count=Math.max(at.count,st.start+st.count-at.start):(++vt,Mt[vt]=st)}Mt.length=vt+1;let it=e.getParameter(n.UNPACK_ROW_LENGTH),nt=e.getParameter(n.UNPACK_SKIP_PIXELS),gt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let G=0,at=Mt.length;G<at;G++){let st=Mt[G],St=Math.floor(st.start/4),dt=Math.ceil(st.count/4),xt=St%w.width,Wt=Math.floor(St/w.width),Jt=dt,pt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Wt),e.texSubImage2D(n.TEXTURE_2D,0,xt,Wt,Jt,pt,J,ft,w.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,gt)}}function Ee(N,w,J){let ft=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ft=n.TEXTURE_3D);let ot=rt(N,w),Mt=w.source;e.bindTexture(ft,N.__webglTexture,n.TEXTURE0+J);let vt=i.get(Mt);if(Mt.version!==vt.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let pt=pe.getPrimaries(pe.workingColorSpace),Ht=w.colorSpace===Ci?null:pe.getPrimaries(w.colorSpace),re=w.colorSpace===Ci||pt===Ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let nt=S(w.image,!1,s.maxTextureSize);nt=Yt(w,nt);let gt=r.convert(w.format,w.colorSpace),G=r.convert(w.type),at=M(w.internalFormat,gt,G,w.normalized,w.colorSpace,w.isVideoTexture);oe(ft,w);let st,St=w.mipmaps,dt=w.isVideoTexture!==!0,xt=vt.__version===void 0||ot===!0,Wt=Mt.dataReady,Jt=y(w,nt);if(w.isDepthTexture)at=p(w.format===Ei,w.type),xt&&(dt?e.texStorage2D(n.TEXTURE_2D,1,at,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,at,nt.width,nt.height,0,gt,G,null));else if(w.isDataTexture)if(St.length>0){dt&&xt&&e.texStorage2D(n.TEXTURE_2D,Jt,at,St[0].width,St[0].height);for(let pt=0,Ht=St.length;pt<Ht;pt++)st=St[pt],dt?Wt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,st.width,st.height,gt,G,st.data):e.texImage2D(n.TEXTURE_2D,pt,at,st.width,st.height,0,gt,G,st.data);w.generateMipmaps=!1}else dt?(xt&&e.texStorage2D(n.TEXTURE_2D,Jt,at,nt.width,nt.height),Wt&&Se(w,nt,gt,G)):e.texImage2D(n.TEXTURE_2D,0,at,nt.width,nt.height,0,gt,G,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){dt&&xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Jt,at,St[0].width,St[0].height,nt.depth);for(let pt=0,Ht=St.length;pt<Ht;pt++)if(st=St[pt],w.format!==Cn)if(gt!==null)if(dt){if(Wt)if(w.layerUpdates.size>0){let re=Zc(st.width,st.height,w.format,w.type);for(let Pt of w.layerUpdates){let xe=st.data.subarray(Pt*re/st.data.BYTES_PER_ELEMENT,(Pt+1)*re/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,Pt,st.width,st.height,1,gt,xe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,st.width,st.height,nt.depth,gt,st.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,at,st.width,st.height,nt.depth,0,st.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,st.width,st.height,nt.depth,gt,G,st.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,at,st.width,st.height,nt.depth,0,gt,G,st.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{dt&&xt&&e.texStorage2D(n.TEXTURE_2D,Jt,at,St[0].width,St[0].height);for(let pt=0,Ht=St.length;pt<Ht;pt++)st=St[pt],w.format!==Cn?gt!==null?dt?Wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,st.width,st.height,gt,st.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,at,st.width,st.height,0,st.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Wt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,st.width,st.height,gt,G,st.data):e.texImage2D(n.TEXTURE_2D,pt,at,st.width,st.height,0,gt,G,st.data)}else if(w.isDataArrayTexture)if(dt){if(xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Jt,at,nt.width,nt.height,nt.depth),Wt)if(w.layerUpdates.size>0){let pt=Zc(nt.width,nt.height,w.format,w.type);for(let Ht of w.layerUpdates){let re=nt.data.subarray(Ht*pt/nt.data.BYTES_PER_ELEMENT,(Ht+1)*pt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ht,nt.width,nt.height,1,gt,G,re)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,G,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,at,nt.width,nt.height,nt.depth,0,gt,G,nt.data);else if(w.isData3DTexture)dt?(xt&&e.texStorage3D(n.TEXTURE_3D,Jt,at,nt.width,nt.height,nt.depth),Wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,G,nt.data)):e.texImage3D(n.TEXTURE_3D,0,at,nt.width,nt.height,nt.depth,0,gt,G,nt.data);else if(w.isFramebufferTexture){if(xt)if(dt)e.texStorage2D(n.TEXTURE_2D,Jt,at,nt.width,nt.height);else{let pt=nt.width,Ht=nt.height;for(let re=0;re<Jt;re++)e.texImage2D(n.TEXTURE_2D,re,at,pt,Ht,0,gt,G,null),pt>>=1,Ht>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let pt=n.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),nt.parentNode!==pt){pt.appendChild(nt),d.add(w),pt.onpaint=Ht=>{let re=Ht.changedElements;for(let Pt of d)re.includes(Pt.image)&&(Pt.needsUpdate=!0)},pt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,nt);else{let re=n.RGBA,Pt=n.RGBA,xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,re,Pt,xe,nt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(St.length>0){if(dt&&xt){let pt=Zt(St[0]);e.texStorage2D(n.TEXTURE_2D,Jt,at,pt.width,pt.height)}for(let pt=0,Ht=St.length;pt<Ht;pt++)st=St[pt],dt?Wt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,gt,G,st):e.texImage2D(n.TEXTURE_2D,pt,at,gt,G,st);w.generateMipmaps=!1}else if(dt){if(xt){let pt=Zt(nt);e.texStorage2D(n.TEXTURE_2D,Jt,at,pt.width,pt.height)}Wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,G,nt)}else e.texImage2D(n.TEXTURE_2D,0,at,gt,G,nt);T(w)&&w.mipmapsAutoUpdate===!0&&b(ft),vt.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ve(N,w,J){if(w.image.length!==6)return;let ft=rt(N,w),ot=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+J);let Mt=i.get(ot);if(ot.version!==Mt.__version||ft===!0){e.activeTexture(n.TEXTURE0+J);let vt=pe.getPrimaries(pe.workingColorSpace),it=w.colorSpace===Ci?null:pe.getPrimaries(w.colorSpace),nt=w.colorSpace===Ci||vt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let gt=w.isCompressedTexture||w.image[0].isCompressedTexture,G=w.image[0]&&w.image[0].isDataTexture,at=[];for(let Pt=0;Pt<6;Pt++)!gt&&!G?at[Pt]=S(w.image[Pt],!0,s.maxCubemapSize):at[Pt]=G?w.image[Pt].image:w.image[Pt],at[Pt]=Yt(w,at[Pt]);let st=at[0],St=r.convert(w.format,w.colorSpace),dt=r.convert(w.type),xt=M(w.internalFormat,St,dt,w.normalized,w.colorSpace),Wt=w.isVideoTexture!==!0,Jt=Mt.__version===void 0||ft===!0,pt=ot.dataReady,Ht=y(w,st);oe(n.TEXTURE_CUBE_MAP,w);let re;if(w.isDepthTexture){if(xt=p(w.format===Ei,w.type),Jt)if(Wt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,xt,st.width,st.height);else for(let Pt=0;Pt<6;Pt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,xt,st.width,st.height,0,St,dt,null)}else if(gt){Wt&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,xt,st.width,st.height);for(let Pt=0;Pt<6;Pt++){re=at[Pt].mipmaps;for(let xe=0;xe<re.length;xe++){let He=re[xe];w.format!==Cn?St!==null?Wt?pt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe,0,0,He.width,He.height,St,He.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe,xt,He.width,He.height,0,He.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe,0,0,He.width,He.height,St,dt,He.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe,xt,He.width,He.height,0,St,dt,He.data)}}}else{if(re=w.mipmaps,Wt&&Jt){re.length>0&&Ht++;let Pt=Zt(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,xt,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(G){Wt?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,at[Pt].width,at[Pt].height,St,dt,at[Pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,xt,at[Pt].width,at[Pt].height,0,St,dt,at[Pt].data);for(let xe=0;xe<re.length;xe++){let Rn=re[xe].image[Pt].image;Wt?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe+1,0,0,Rn.width,Rn.height,St,dt,Rn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe+1,xt,Rn.width,Rn.height,0,St,dt,Rn.data)}}else{Wt?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,St,dt,at[Pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,xt,St,dt,at[Pt]);for(let xe=0;xe<re.length;xe++){let He=re[xe];Wt?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe+1,0,0,St,dt,He.image[Pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,xe+1,xt,St,dt,He.image[Pt])}}}T(w)&&w.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Mt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function be(N,w,J,ft,ot,Mt){let vt=r.convert(J.format,J.colorSpace),it=r.convert(J.type),nt=M(J.internalFormat,vt,it,J.normalized,J.colorSpace),gt=i.get(w),G=i.get(J);if(G.__renderTarget=w,!gt.__hasExternalTextures){let at=Math.max(1,w.width>>Mt),st=Math.max(1,w.height>>Mt);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Mt,nt,at,st,w.depth,0,vt,it,null):e.texImage2D(ot,Mt,nt,at,st,0,vt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),wt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,ot,G.__webglTexture,0,Te(w)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,ot,G.__webglTexture,Mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(N,w,J){if(n.bindRenderbuffer(n.RENDERBUFFER,N),w.depthBuffer){let ft=w.depthTexture,ot=ft&&ft.isDepthTexture?ft.type:null,Mt=p(w.stencilBuffer,ot),vt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;wt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(w),Mt,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(w),Mt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,N)}else{let ft=w.textures;for(let ot=0;ot<ft.length;ot++){let Mt=ft[ot],vt=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),nt=M(Mt.internalFormat,vt,it,Mt.normalized,Mt.colorSpace);wt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(w),nt,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(w),nt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,nt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(N,w,J){let ft=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(w.depthTexture);ot.__renderTarget=w;let Mt=ft?w.depthTexture.image[0]:w.depthTexture.image;(!ot.__webglTexture||Mt.width!==w.width||Mt.height!==w.height)&&(Mt.width=w.width,Mt.height=w.height,w.depthTexture.needsUpdate=!0),ft?yt(w.depthTexture,0):ht(w.depthTexture,0);let vt=ot.__webglTexture,it=Te(w),nt=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,gt=w.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Si)wt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,gt,nt,vt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,gt,nt,vt,0);else if(w.depthTexture.format===Ei)wt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,gt,nt,vt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,gt,nt,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(N){let w=i.get(N),J=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let ft=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ft){let ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ft.removeEventListener("dispose",ot)};ft.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=ft}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let ft=0;ft<6;ft++)It(w.__webglFramebuffer[ft],N,ft);else N.texture.mipmaps.length>0?It(w.__webglFramebuffer[0],N,0):It(w.__webglFramebuffer,N,0);else if(J){w.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ft]),w.__webglDepthbuffer[ft]===void 0)w.__webglDepthbuffer[ft]=n.createRenderbuffer(),ke(w.__webglDepthbuffer[ft],N,!1);else{let ot=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ke(w.__webglDepthbuffer,N,!1);else{let ot=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(N,w,J){let ft=i.get(N);w!==void 0&&be(ft.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&de(N)}function te(N){let w=N.texture,J=i.get(N),ft=i.get(w);N.addEventListener("dispose",O),A(N);let ot=N.textures,Mt=N.isWebGLCubeRenderTarget===!0,vt=ot.length>1;if(vt||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=w.version,o.memory.textures++),Mt){J.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps.length>0){J.__webglFramebuffer[it]=[];for(let nt=0;nt<w.mipmaps.length;nt++)J.__webglFramebuffer[it][nt]=n.createFramebuffer()}else J.__webglFramebuffer[it]=n.createFramebuffer()}else{if(w.mipmaps.length>0){J.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)J.__webglFramebuffer[it]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(vt)for(let it=0,nt=ot.length;it<nt;it++){let gt=i.get(ot[it]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&wt(N)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let it=0;it<ot.length;it++){let nt=ot[it];J.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[it]);let gt=r.convert(nt.format,nt.colorSpace),G=r.convert(nt.type),at=M(nt.internalFormat,gt,G,nt.normalized,nt.colorSpace,N.isXRRenderTarget===!0),st=Te(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,st,at,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,J.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(J.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),oe(n.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps.length>0)for(let nt=0;nt<w.mipmaps.length;nt++)be(J.__webglFramebuffer[it][nt],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,nt);else be(J.__webglFramebuffer[it],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);T(w)?b(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let it=0,nt=ot.length;it<nt;it++){let gt=ot[it],G=i.get(gt),at=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(at=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,G.__webglTexture),oe(at,gt),be(J.__webglFramebuffer,N,gt,n.COLOR_ATTACHMENT0+it,at,0),T(gt)&&b(at)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(it=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,ft.__webglTexture),oe(it,w),w.mipmaps.length>0)for(let nt=0;nt<w.mipmaps.length;nt++)be(J.__webglFramebuffer[nt],N,w,n.COLOR_ATTACHMENT0,it,nt);else be(J.__webglFramebuffer,N,w,n.COLOR_ATTACHMENT0,it,0);T(w)?b(it):w.mipmaps.length>0&&n.texParameteri(it,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&de(N)}function V(N){let w=N.textures;for(let J=0,ft=w.length;J<ft;J++){let ot=w[J];if(T(ot)&&ot.mipmapsAutoUpdate===!0){let Mt=I(N),vt=i.get(ot).__webglTexture;e.bindTexture(Mt,vt),b(Mt),e.unbindTexture()}}}let De=[];function ae(N){if(N.samples>0){if(wt(N)===!1){let w=N.textures,J=N.width,ft=N.height,ot=n.COLOR_BUFFER_BIT,Mt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(N),it=w.length>1;if(it)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);let G=i.get(w[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,G,0)}n.blitFramebuffer(0,0,J,ft,0,0,J,ft,ot,n.NEAREST),l===!0&&(De.length=0,De.push(n.COLOR_ATTACHMENT0+gt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&De.push(Mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);let G=i.get(w[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,G,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Te(N){return Math.min(s.maxSamples,N.samples)}function wt(N){let w=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(N){let w=o.render.frame;u.get(N)!==w&&(u.set(N,w),N.update())}function Yt(N,w){let J=N.colorSpace,ft=N.format,ot=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==Ir&&J!==Ci&&(pe.getTransfer(J)===Ae?(ft!==Cn||ot!==vn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",J)),w}function Zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=Z,this.getTextureUnits=tt,this.setTextureUnits=ut,this.setTexture2D=ht,this.setTexture2DArray=Rt,this.setTexture3D=Lt,this.setTextureCube=yt,this.rebindTextures=fe,this.setupRenderTarget=te,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=be,this.useMultisampledRTT=wt,this.dispose=z}function t_(n,t){function e(i,s=Ci){let r,o=pe.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===La)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Da)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pc)return n.BYTE;if(i===Lc)return n.SHORT;if(i===nr)return n.UNSIGNED_SHORT;if(i===Pa)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===Uc)return n.ALPHA;if(i===Fc)return n.RGB;if(i===Cn)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===Na)return n.RED;if(i===Ua)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===Fa)return n.RG_INTEGER;if(i===Oa)return n.RGBA_INTEGER;if(i===jr||i===to||i===eo||i===no)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===Ba||i===ka||i===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Ha||i===Wa||i===Xa||i===qa||i===io||i===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Va||i===Ha)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xa)return r.COMPRESSED_R11_EAC;if(i===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===io)return r.COMPRESSED_RG11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Za||i===Ja||i===Ka||i===$a||i===Qa||i===ja||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Za)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$a)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===el)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===cl||i===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===dl||i===so||i===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Nn({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends ni{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null,v=typeof XRWebGLBinding<"u",m=new ih,g={},S=e.getContextAttributes(),T=null,b=null,I=[],M=[],p=new le,y=null,A=null,P=new xn;P.viewport=new Ve;let R=new xn;R.viewport=new Ve;let O=[P,R],F=new Ea,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ht=I[Y];return ht===void 0&&(ht=new $s,I[Y]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Y){let ht=I[Y];return ht===void 0&&(ht=new $s,I[Y]=ht),ht.getGripSpace()},this.getHand=function(Y){let ht=I[Y];return ht===void 0&&(ht=new $s,I[Y]=ht),ht.getHandSpace()};function X(Y){let ht=M.indexOf(Y.inputSource);if(ht===-1)return;let Rt=I[ht];Rt!==void 0&&(Rt.update(Y.inputSource,Y.frame,c||o),Rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<I.length;Y++){let ht=M[Y];ht!==null&&(M[Y]=null,I[Y].disconnect(ht))}L=null,z=null,m.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(T),h=null,f=null,d=null,s=null,b=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(p.width,p.height,!1),A!==null){let Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(p),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Lt=null,yt=null;S.depth&&(yt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=S.stencil?Ei:Si,Lt=S.stencil?_s:qn);let Vt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new An(f.textureWidth,f.textureHeight,{format:Cn,type:vn,depthTexture:new wi(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new An(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Y){for(let ht=0;ht<Y.removed.length;ht++){let Rt=Y.removed[ht],Lt=M.indexOf(Rt);Lt>=0&&(M[Lt]=null,I[Lt].disconnect(Rt))}for(let ht=0;ht<Y.added.length;ht++){let Rt=Y.added[ht],Lt=M.indexOf(Rt);if(Lt===-1){for(let Vt=0;Vt<I.length;Vt++)if(Vt>=M.length){M.push(Rt),Lt=Vt;break}else if(M[Vt]===null){M[Vt]=Rt,Lt=Vt;break}if(Lt===-1)break}let yt=I[Lt];yt&&yt.connect(Rt)}}function B(Y,ht){ht===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ht.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ht=Y.near,Rt=Y.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),F.near=R.near=P.near=ht,F.far=R.far=P.far=Rt,(L!==F.near||z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,z=F.far),F.layers.mask=Y.layers.mask|6,P.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let Lt=Y.parent,yt=F.cameras;B(F,Lt);for(let Vt=0;Vt<yt.length;Vt++)B(yt[Vt],Lt);F.projectionMatrix.copy(P.projectionMatrix),F.projectionMatrixInverse.copy(P.projectionMatrixInverse),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),Z(Y,F,Lt)};function Z(Y,ht,Rt){Rt===null?Y.matrix.copy(ht.matrixWorld):(Y.matrix.copy(Rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ht.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ht.projectionMatrix),Y.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Js*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return g[Y]};let tt=null;function ut(Y,ht){if(u=ht.getViewerPose(c||o),_=ht,u!==null){let Rt=u.views;h!==null&&(t.setRenderTargetFramebuffer(b,h.framebuffer),t.setRenderTarget(b));let Lt=!1;Rt.length!==F.cameras.length&&(F.cameras.length=0,Lt=!0);for(let kt=0;kt<Rt.length;kt++){let oe=Rt[kt],rt=null;if(h!==null)rt=h.getViewport(oe);else{let Se=d.getViewSubImage(f,oe);rt=Se.viewport,kt===0&&(t.setRenderTargetTextures(b,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(b))}let Kt=O[kt];Kt===void 0&&(Kt=new xn,Kt.layers.enable(kt),Kt.viewport=new Ve,O[kt]=Kt),Kt.matrix.fromArray(oe.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(oe.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(rt.x,rt.y,rt.width,rt.height),kt===0&&(F.matrix.copy(Kt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Lt===!0&&F.cameras.push(Kt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let kt=d.getDepthInformation(Rt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let kt=0;kt<Rt.length;kt++){let oe=Rt[kt].camera;if(oe){let rt=g[oe];rt||(rt=new Vr,g[oe]=rt);let Kt=d.getCameraImage(oe);rt.sourceTexture=Kt}}}}for(let Rt=0;Rt<I.length;Rt++){let Lt=M[Rt],yt=I[Rt];Lt!==null&&yt!==void 0&&yt.update(Lt,ht,c||o)}tt&&tt(Y,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),_=null}let Et=new fd;Et.setAnimationLoop(ut),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},i_=new ye,bd=new jt;bd.set(-1,0,0,0,1,0,0,0,1);function s_(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Xc(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,T,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),_(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),T=S.envMap,b=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function r_(n,t,e,i){let s={},r={};function o(S,T){let b=T.program;i.uniformBlockBinding(S,b,s[S.id])}function a(S,T){let b=s[S.id];b===void 0&&(_(S),b=l(S),s[S.id]=b,S.addEventListener("dispose",m));let I=T.program;i.updateUBOMapping(S,I);let M=t.render.frame;r[S.id]!==M&&(c(S),r[S.id]=M)}function l(S){let T=n.createBuffer(),b=S.__size,I=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,b,I),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(S){let T=s[S.id],b=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let M=0,p=b.length;M<p;M++){let y=b[M];if(Array.isArray(y))for(let A=0,P=y.length;A<P;A++)u(y[A],M,A,I);else u(y,M,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(S,T,b,I){if(f(S,T,b,I)===!0){let M=S.__offset,p=S.value;if(Array.isArray(p)){let y=0;for(let A=0;A<p.length;A++){let P=p[A],R=v(P,!0);d(P,S.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else d(p,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,S.__data)}}function d(S,T,b){typeof S=="number"||typeof S=="boolean"?T[b]=S:S.isMatrix3?(T[b]=S.elements[0],T[b+1]=S.elements[1],T[b+2]=S.elements[2],T[b+3]=0,T[b+4]=S.elements[3],T[b+5]=S.elements[4],T[b+6]=S.elements[5],T[b+7]=0,T[b+8]=S.elements[6],T[b+9]=S.elements[7],T[b+10]=S.elements[8],T[b+11]=0):ArrayBuffer.isView(S)?T.set(S.subarray(0,T.length-b),b):S.toArray(T,b)}function f(S,T,b,I){let M=S.value,p=T+"_"+b;if(Array.isArray(M)){I[p]===void 0&&(I[p]=[]);let y=I[p],A=!1;for(let P=0;P<M.length;P++)h(M[P],y,P)===!0&&(A=!0);return A}return h(M,I,p)}function h(S,T,b){if(T[b]===void 0)return typeof S=="number"||typeof S=="boolean"?T[b]=S:ArrayBuffer.isView(S)?T[b]=S.slice():T[b]=S.clone(),!0;{let I=T[b];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return T[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(I.equals(S)===!1)return I.copy(S),!0}}return!1}function _(S){let T=S.uniforms,b=0,I=16;for(let p=0,y=T.length;p<y;p++){let A=Array.isArray(T[p])?T[p]:[T[p]];for(let P=0,R=A.length;P<R;P++){let O=A[P],F=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(T[p])||Array.isArray(O.value),z=b;for(let H=0,Q=F.length;H<Q;H++){let B=F[H],Z=v(B,L),tt=b%I,ut=tt%Z.boundary,Et=tt+ut;b+=ut,Et!==0&&I-Et<Z.storage&&(b+=I-Et),H===0&&(z=b),b+=Z.storage}let X=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new X((b-z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=z}}let M=b%I;return M>0&&(b+=I-M),S.__size=b,S.__cache={},this}function v(S,T){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",S),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(S){let T=S.target;T.removeEventListener("dispose",m),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(let S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:g}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function a_(){return oi===null&&(oi=new us(o_,16,16,ji,Yn),oi.name="DFG_LUT",oi.minFilter=on,oi.magFilter=on,oi.wrapS=ei,oi.wrapT=ei,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var yl=class{constructor(t={}){let{canvas:e=Fu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=vn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let v=h,m=new Set([Oa,Fa,Ua]),g=new Set([vn,qn,nr,_s,La,Da]),S=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},I=null,M=null,p=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,O=null,F=null,L=null,z=null;this._outputColorSpace=ln;let X=0,H=0,Q=null,B=-1,Z=null,tt=new Ve,ut=new Ve,Et=null,Y=new se(0),ht=0,Rt=e.width,Lt=e.height,yt=1,Vt=null,Le=null,kt=new Ve(0,0,Rt,Lt),oe=new Ve(0,0,Rt,Lt),rt=!1,Kt=new Yi,Se=new da,Ee=!1,ve=!1,be=new ye,ke=new q,It=new Ve,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function te(){return Q===null?yt:1}let V=i;function De(E,W){return e.getContext(E,W)}let ae,Te,wt,Ne,Yt,Zt,N,w,J,ft,ot,Mt,vt,it,nt,gt,G,at,st,St,dt,xt,Wt;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),V===null){let W="webgl2";if(V=De(W,E),V===null)throw De(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(E){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),ne("WebGLRenderer: "+E.message),E}function Jt(){ae=new _g(V),ae.init(),dt=new t_(V,ae),Te=new ag(V,ae,t,dt),wt=new Qx(V,ae),Te.reversedDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),F=V.createFramebuffer(),L=V.createFramebuffer(),z=V.createFramebuffer(),Ne=new Mg(V),Yt=new zx,Zt=new jx(V,ae,wt,Yt,Te,dt,Ne),N=new xg(P),w=new bp(V),xt=new rg(V,w),J=new yg(V,w,Ne,xt),ft=new bg(V,J,w,xt,Ne),at=new Sg(V,Te,Zt),nt=new lg(Yt),ot=new Ox(P,N,ae,Te,xt,nt),Mt=new s_(P,Yt),vt=new kx,it=new qx(ae),G=new sg(P,N,wt,ft,_,l),gt=new $x(P,ft,Te),Wt=new r_(V,Ne,Te,wt),st=new og(V,ae,Ne),St=new vg(V,ae,Ne),Ne.programs=ot.programs,P.capabilities=Te,P.extensions=ae,P.properties=Yt,P.renderLists=vt,P.shadowMap=gt,P.state=wt,P.info=Ne}v!==vn&&(A=new Tg(v,e.width,e.height,a,s,r));let pt=new sh(P,V);this.xr=pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(E){E!==void 0&&(yt=E,this.setSize(Rt,Lt,!1))},this.getSize=function(E){return E.set(Rt,Lt)},this.setSize=function(E,W,et=!0){if(pt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=E,Lt=W,e.width=Math.floor(E*yt),e.height=Math.floor(W*yt),et===!0&&(e.style.width=E+"px",e.style.height=W+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(Rt*yt,Lt*yt).floor()},this.setDrawingBufferSize=function(E,W,et){Rt=E,Lt=W,yt=et,e.width=Math.floor(E*et),e.height=Math.floor(W*et),this.setViewport(0,0,E,W)},this.setEffects=function(E){if(v===vn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let W=0;W<E.length;W++)if(E[W].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(kt)},this.setViewport=function(E,W,et,K){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,W,et,K),wt.viewport(tt.copy(kt).multiplyScalar(te()).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,W,et,K){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,W,et,K),wt.scissor(ut.copy(oe).multiplyScalar(te()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){wt.setScissorTest(rt=E)},this.setOpaqueSort=function(E){Vt=E},this.setTransparentSort=function(E){Le=E},this.getClearColor=function(E){return E.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(E=!0,W=!0,et=!0){let K=0;if(E){let j=!1;if(Q!==null){let Tt=Q.texture.format;j=m.has(Tt)}if(j){let Tt=Q.texture.type,Ut=g.has(Tt),bt=G.getClearColor(),Dt=G.getClearAlpha(),Bt=bt.r,ee=bt.g,ce=bt.b;Ut?(S[0]=Bt,S[1]=ee,S[2]=ce,S[3]=Dt,V.clearBufferuiv(V.COLOR,0,S)):(T[0]=Bt,T[1]=ee,T[2]=ce,T[3]=Dt,V.clearBufferiv(V.COLOR,0,T))}else K|=V.COLOR_BUFFER_BIT}W&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),G.dispose(),vt.dispose(),it.dispose(),Zt.dispose(),Yt.dispose(),N.dispose(),ft.dispose(),J.dispose(),xt.dispose(),Wt.dispose(),ot.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Es),pt.removeEventListener("sessionend",Cs),Ie.stop()};function Ht(E){E.preventDefault(),Gc("WebGLRenderer: Context Lost."),R=!0}function re(){Gc("WebGLRenderer: Context Restored."),R=!1;let E=Ne.autoReset,W=gt.enabled,et=gt.autoUpdate,K=gt.needsUpdate,j=gt.type;Jt(),Ne.autoReset=E,gt.enabled=W,gt.autoUpdate=et,gt.needsUpdate=K,gt.type=j}function Pt(E){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xe(E){let W=E.target;W.removeEventListener("dispose",xe),He(W)}function He(E){Rn(E),Yt.remove(E)}function Rn(E){let W=Yt.get(E).programs;W!==void 0&&(W.forEach(function(et){ot.releaseProgram(et)}),E.isShaderMaterial&&ot.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,et,K,j,Tt){W===null&&(W=de);let Ut=j.isMesh&&j.matrixWorld.determinantAffine()<0,bt=Fi(E,W,et,K,j);wt.setMaterial(K,Ut);let Dt=et.index,Bt=1;if(K.wireframe===!0){if(Dt=J.getWireframeAttribute(et),Dt===void 0)return;Bt=2}let ee=et.drawRange,ce=et.attributes.position,Ot=ee.start*Bt,ie=(ee.start+ee.count)*Bt;Tt!==null&&(Ot=Math.max(Ot,Tt.start*Bt),ie=Math.min(ie,(Tt.start+Tt.count)*Bt)),Dt!==null?(Ot=Math.max(Ot,0),ie=Math.min(ie,Dt.count)):ce!=null&&(Ot=Math.max(Ot,0),ie=Math.min(ie,ce.count));let Ge=ie-Ot;if(Ge<0||Ge===1/0)return;xt.setup(j,K,bt,et,Dt);let Pe,we=st;if(Dt!==null&&(Pe=w.get(Dt),we=St,we.setIndex(Pe)),j.isMesh)K.wireframe===!0?(wt.setLineWidth(K.wireframeLinewidth*te()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if(j.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),wt.setLineWidth(Je*te()),j.isLineSegments?we.setMode(V.LINES):j.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else j.isPoints?we.setMode(V.POINTS):j.isSprite&&we.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))we.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Je=j._multiDrawStarts,Ft=j._multiDrawCounts,Ke=j._multiDrawCount,he=Dt?w.get(Dt).bytesPerElement:1,Bn=Yt.get(K).currentProgram.getUniforms();for(let nn=0;nn<Ke;nn++)Bn.setValue(V,"_gl_DrawID",nn),we.render(Je[nn]/he,Ft[nn])}else if(j.isInstancedMesh)we.renderInstances(Ot,Ge,j.count);else if(et.isInstancedBufferGeometry){let Je=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ft=Math.min(et.instanceCount,Je);we.renderInstances(Ot,Ge,Ft)}else we.render(Ot,Ge)};function xr(E,W,et,K){O!==null&&E.isNodeMaterial&&O.setObject(K,E),Ee===!0&&nt.setState(E,et,!1),E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Ui(E,W,K),E.side=Qi,E.needsUpdate=!0,Ui(E,W,K),E.side=yn):Ui(E,W,K)}this.compile=function(E,W,et=null){et===null&&(et=E),O!==null&&O.renderStart(E,W,et),M=it.get(et),M.init(W),y.push(M),et.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),E!==et&&E.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),M.setupLights(),O!==null&&O.updateLights(M.state.lightsArray),ve=this.localClippingEnabled,Ee=nt.init(this.clippingPlanes,ve),Ee===!0&&nt.setGlobalState(this.clippingPlanes,W),O!==null&&gt.render(M.state.shadowsArray,et,W);let K=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){let bt=Tt[Ut];xr(bt,et,W,j),K.add(bt)}else xr(Tt,et,W,j),K.add(Tt)}),M=y.pop(),O!==null&&O.renderEnd(),K},this.compileAsync=function(E,W,et=null){let K=this.compile(E,W,et);return new Promise(j=>{function Tt(){if(K.forEach(function(Ut){let Dt=Yt.get(Ut).currentProgram;(Dt===void 0||Dt.isReady())&&K.delete(Ut)}),K.size===0){j(E);return}setTimeout(Tt,10)}ae.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Kn=null;function Di(E){Kn&&Kn(E)}function Es(){Ie.stop()}function Cs(){Ie.start()}let Ie=new fd;Ie.setAnimationLoop(Di),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(E){Kn=E,pt.setAnimationLoop(E),E===null?Ie.stop():Ie.start()},pt.addEventListener("sessionstart",Es),pt.addEventListener("sessionend",Cs),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(E,W);let et=pt.enabled===!0&&pt.isPresenting===!0,K=A!==null&&(Q===null||et)&&A.begin(P,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,W,Q),M=it.get(E,y.length),M.init(W),M.state.textureUnits=Zt.getTextureUnits(),y.push(M),be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Se.setFromArrayCamera(W):Kt.setFromProjectionMatrix(be,Ln,W.reversedDepth),ve=this.localClippingEnabled,Ee=nt.init(this.clippingPlanes,ve),I=vt.get(E,p.length),I.init(),p.push(I),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){let Ut=P.xr.getDepthSensingMesh();Ut!==null&&Ni(Ut,W,-1/0,P.sortObjects)}Ni(E,W,0,P.sortObjects),I.finish(),O!==null&&O.updateLights(M.state.lightsArray),P.sortObjects===!0&&I.sort(Vt,Le),fe=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,fe&&G.addToRenderList(I,E),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&nt.beginShadows();let j=M.state.shadowsArray;if(gt.render(j,E,W),Ee===!0&&nt.endShadows(),(K&&A.hasRenderPass())===!1){let Ut=I.opaque,bt=I.transmissive;if(M.setupLights(),W.isArrayCamera){let Dt=W.cameras;if(bt.length>0)for(let Bt=0,ee=Dt.length;Bt<ee;Bt++){let ce=Dt[Bt];Sn(Ut,bt,E,ce)}fe&&G.render(E);for(let Bt=0,ee=Dt.length;Bt<ee;Bt++){let ce=Dt[Bt];In(I,E,ce,ce.viewport)}}else bt.length>0&&Sn(Ut,bt,E,W),fe&&G.render(E),In(I,E,W)}Q!==null&&H===0&&(Zt.updateMultisampleRenderTarget(Q),Zt.updateRenderTargetMipmap(Q)),K&&A.end(P),E.isScene===!0&&E.onAfterRender(P,E,W),xt.resetDefaultState(),B=-1,Z=null,y.pop(),y.length>0?(M=y[y.length-1],Zt.setTextureUnits(M.state.textureUnits),Ee===!0&&nt.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,p.pop(),p.length>0?I=p[p.length-1]:I=null,O!==null&&O.renderEnd()};function Ni(E,W,et,K){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)et=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){let Ut=W.isArrayCamera?Se:Kt;if(!E.frustumCulled||E.intersectsFrustum(Ut)){K&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);let bt=ft.update(E),Dt=E.material;Dt.visible&&I.push(E,bt,Dt,et,It.z,null,W)}}else if(E.isMesh||E.isLine||E.isPoints){let Ut=W.isArrayCamera?Se:Kt;if(!E.frustumCulled||E.intersectsFrustum(Ut)){let bt=ft.update(E),Dt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),It.copy(bt.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(Dt)){let Bt=bt.groups;for(let ee=0,ce=Bt.length;ee<ce;ee++){let Ot=Bt[ee],ie=Dt[Ot.materialIndex];ie&&ie.visible&&I.push(E,bt,ie,et,It.z,Ot,W)}}else Dt.visible&&I.push(E,bt,Dt,et,It.z,null,W)}}}let Tt=E.children;for(let Ut=0,bt=Tt.length;Ut<bt;Ut++)Ni(Tt[Ut],W,et,K)}function In(E,W,et,K){let{opaque:j,transmissive:Tt,transparent:Ut}=E;M.setupLightsView(et),Ee===!0&&nt.setGlobalState(P.clippingPlanes,et),K&&wt.viewport(tt.copy(K)),j.length>0&&$n(j,W,et),Tt.length>0&&$n(Tt,W,et),Ut.length>0&&$n(Ut,W,et),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Sn(E,W,et,K){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let Ot=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new An(1,1,{generateMipmaps:!0,type:Ot?Yn:vn,minFilter:Ai,samples:Math.max(4,Te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Tt=M.state.transmissionRenderTarget[K.id],Ut=K.viewport||tt;Tt.setSize(Ut.z*P.transmissionResolutionScale,Ut.w*P.transmissionResolutionScale);let bt=P.getRenderTarget(),Dt=P.getActiveCubeFace(),Bt=P.getActiveMipmapLevel();P.setRenderTarget(Tt),P.getClearColor(Y),ht=P.getClearAlpha(),ht<1&&P.setClearColor(16777215,.5),P.clear(),fe&&G.render(et);let ee=P.toneMapping;P.toneMapping=ri;let ce=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),Ee===!0&&nt.setGlobalState(P.clippingPlanes,K),$n(E,et,K),Zt.updateMultisampleRenderTarget(Tt),Zt.updateRenderTargetMipmap(Tt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ie=0,Ge=W.length;ie<Ge;ie++){let Pe=W[ie],{object:we,geometry:Je,material:Ft,group:Ke}=Pe;if(Ft.side===yn&&we.layers.test(K.layers)){let he=Ft.side;Ft.side=un,Ft.needsUpdate=!0,_r(we,et,K,Je,Ft,Ke),Ft.side=he,Ft.needsUpdate=!0,Ot=!0}}Ot===!0&&(Zt.updateMultisampleRenderTarget(Tt),Zt.updateRenderTargetMipmap(Tt))}P.setRenderTarget(bt,Dt,Bt),P.setClearColor(Y,ht),ce!==void 0&&(K.viewport=ce),P.toneMapping=ee}function $n(E,W,et){let K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=E.length;j<Tt;j++){let Ut=E[j],{object:bt,geometry:Dt,group:Bt}=Ut,ee=Ut.material;ee.allowOverride===!0&&K!==null&&(ee=K),bt.layers.test(et.layers)&&_r(bt,W,et,Dt,ee,Bt)}}function _r(E,W,et,K,j,Tt){O!==null&&j.isNodeMaterial&&O.setObject(E,j),E.onBeforeRender(P,W,et,K,j,Tt),E.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(P,W,et,K,E,Tt),j.transparent===!0&&j.side===yn&&j.forceSinglePass===!1?(j.side=un,j.needsUpdate=!0,P.renderBufferDirect(et,W,K,j,E,Tt),j.side=Qi,j.needsUpdate=!0,P.renderBufferDirect(et,W,K,j,E,Tt),j.side=yn):P.renderBufferDirect(et,W,K,j,E,Tt),E.onAfterRender(P,W,et,K,j,Tt)}function fi(E){let W=0;for(let et of E)et.texture!==null&&W++;return W}function Ui(E,W,et){W.isScene!==!0&&(W=de);let K=Yt.get(E),j=M.state.lights,Tt=M.state.shadowsArray,Ut=j.state.version,bt=ot.getParameters(E,j.state,Tt,W,et,M.state.lightProbeGridArray),Dt=ot.getProgramCacheKey(bt),Bt=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;let ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=N.get(E.envMap||K.environment,ee),K.envMapRotation=K.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",xe),Bt=new Map,K.programs=Bt,K.programVariants=new Map);let ce=Bt.get(Dt);if(ce!==void 0){if(K.currentProgram===ce&&K.lightsStateVersion===Ut)return bo(E,bt),ce}else bt.uniforms=ot.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,et,bt),E.onBeforeCompile(bt,P),ce=ot.acquireProgram(bt,Dt),Bt.set(Dt,ce),K.uniforms=bt.uniforms;let Ot=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=nt.uniform),bo(E,bt),K.needsLights=yr(E),K.lightsStateVersion=Ut,K.needsLights&&(Ot.ambientLightColor.value=j.state.ambient,Ot.lightProbe.value=j.state.probe,Ot.sunLights.value=j.state.sun,Ot.sunLightShadows.value=j.state.sunShadow,Ot.directionalLights.value=j.state.directional,Ot.directionalLightShadows.value=j.state.directionalShadow,Ot.spotLights.value=j.state.spot,Ot.spotLightShadows.value=j.state.spotShadow,Ot.rectAreaLights.value=j.state.rectArea,Ot.ltc_1.value=j.state.rectAreaLTC1,Ot.ltc_2.value=j.state.rectAreaLTC2,Ot.pointLights.value=j.state.point,Ot.pointLightShadows.value=j.state.pointShadow,Ot.hemisphereLights.value=j.state.hemi,Ot.sunShadowMatrix.value=j.state.sunShadowMatrix,Ot.sunShadowCascade.value=j.state.sunShadowCascade,Ot.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ot.spotLightMatrix.value=j.state.spotLightMatrix,Ot.spotLightMap.value=j.state.spotLightMap,Ot.pointShadowMatrix.value=j.state.pointShadowMatrix),K.numLightProbeGrids=fi(M.state.lightProbeGridArray),K.currentProgram=ce,K.uniformsList=null,ce}function Ce(E,W,et,K,j){let Tt=Yt.get(E),Ut=Tt.currentProgram.id+","+K+","+j,bt=Tt.programVariants.get(Ut);return bt===void 0?(bt=Ui(E,W,et),Tt.programVariants.set(Ut,bt)):(Tt.currentProgram=bt,Tt.uniformsList=null,Tt.outputColorSpace=K,Tt.toneMapping=j),bt}function So(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=rr.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function bo(E,W){let et=Yt.get(E);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function Fi(E,W,et,K,j){W.isScene!==!0&&(W=de),Zt.resetTextureUnits();let Tt=W.fog,Ut=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,bt=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pe.workingColorSpace,Dt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Bt=N.get(K.envMap||Ut,Dt),ee=K.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ce=!!et.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ot=!!et.morphAttributes.position,ie=!!et.morphAttributes.normal,Ge=!!et.morphAttributes.color,Pe=ri;K.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pe=P.toneMapping);let we=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Je=we!==void 0?we.length:0,Ft=Yt.get(K),Ke=M.state.lights;if(Ee===!0&&(ve===!0||E!==Z)){let Oe=E===Z&&K.id===B;nt.setState(K,E,Oe)}let he=!1,Bn=!1;K.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==Ke.state.version||j.isBatchedMesh&&Ft.batching===!1||!j.isBatchedMesh&&Ft.batching===!0||j.isBatchedMesh&&Ft.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ft.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ft.instancing===!1||!j.isInstancedMesh&&Ft.instancing===!0||j.isSkinnedMesh&&Ft.skinning===!1||!j.isSkinnedMesh&&Ft.skinning===!0||j.isInstancedMesh&&Ft.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ft.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ft.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ft.instancingMorph===!1&&j.morphTexture!==null||Ft.envMap!==Bt||K.fog===!0&&Ft.fog!==Tt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==nt.numPlanes||Ft.numIntersection!==nt.numIntersection)||Ft.vertexAlphas!==ee||Ft.vertexTangents!==ce||Ft.morphTargets!==Ot||Ft.morphNormals!==ie||Ft.morphColors!==Ge||Ft.morphTargetsCount!==Je||Ft.numLightProbeGrids!==fi(M.state.lightProbeGridArray)?he=!0:(Ft.outputColorSpace!==bt||Ft.toneMapping!==Pe)&&(Bn=!0):(he=!0,Ft.__version=K.version);let nn=Ft.currentProgram;(he===!0||Bn===!0)&&(nn=Bn===!0?Ce(K,W,j,bt,Pe):Ui(K,W,j),O&&K.isNodeMaterial&&O.onUpdateProgram(K,nn,Ft));let Rs=!1,Qn=!1,jn=!1,ge=nn.getUniforms(),$e=Ft.uniforms;if(wt.useProgram(nn.program)&&(Rs=!0,Qn=!0,jn=!0),K.id!==B&&(B=K.id,Qn=!0),Rs||Z!==E){wt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(V,"projectionMatrix",E.projectionMatrix),ge.setValue(V,"viewMatrix",E.matrixWorldInverse);let We=ge.map.cameraPosition;We!==void 0&&We.setValue(V,ke.setFromMatrixPosition(E.matrixWorld)),Te.logarithmicDepthBuffer&&ge.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ge.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Qn=!0,jn=!0)}if(Ft.needsLights&&(Ke.state.sunShadowMap.length>0&&ge.setValue(V,"sunShadowMap",Ke.state.sunShadowMap,Zt),Ke.state.directionalShadowMap.length>0&&ge.setValue(V,"directionalShadowMap",Ke.state.directionalShadowMap,Zt),Ke.state.spotShadowMap.length>0&&ge.setValue(V,"spotShadowMap",Ke.state.spotShadowMap,Zt),Ke.state.pointShadowMap.length>0&&ge.setValue(V,"pointShadowMap",Ke.state.pointShadowMap,Zt)),j.isSkinnedMesh){ge.setOptional(V,j,"bindMatrix"),ge.setOptional(V,j,"bindMatrixInverse");let Oe=j.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ge.setValue(V,"boneTexture",Oe.boneTexture,Zt))}j.isBatchedMesh&&(ge.setOptional(V,j,"batchingTexture"),ge.setValue(V,"batchingTexture",j._matricesTexture,Zt),ge.setOptional(V,j,"batchingIdTexture"),ge.setValue(V,"batchingIdTexture",j._indirectTexture,Zt),ge.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&ge.setValue(V,"batchingColorTexture",j._colorsTexture,Zt));let bn=et.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&at.update(j,et,nn),(Qn||Ft.receiveShadow!==j.receiveShadow)&&(Ft.receiveShadow=j.receiveShadow,ge.setValue(V,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&($e.envMapIntensity.value=W.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=a_()),Qn){if(ge.setValue(V,"toneMappingExposure",P.toneMappingExposure),Ft.needsLights&&wo($e,jn),Tt&&K.fog===!0&&Mt.refreshFogUniforms($e,Tt),Mt.refreshMaterialUniforms($e,K,yt,Lt,M.state.transmissionRenderTarget[E.id]),Ft.needsLights&&Ft.numLightProbeGrids>0){let Oe=b,We=0;for(let kn of M.state.lightProbeGridArray)kn.texture!==null&&(Oe.textures[We]=kn.texture,Oe.min[We]=kn.boundingBox.min,Oe.max[We]=kn.boundingBox.max,Oe.resolution[We]=kn.resolution,We++);for(let kn in Oe)Oe[kn].length=We;$e.probesSH.value=Oe.textures,$e.probesMin.value=Oe.min,$e.probesMax.value=Oe.max,$e.probesResolution.value=Oe.resolution}rr.upload(V,So(Ft),$e,Zt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(rr.upload(V,So(Ft),$e,Zt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ge.setValue(V,"center",j.center),ge.setValue(V,"modelViewMatrix",j.modelViewMatrix),ge.setValue(V,"normalMatrix",j.normalMatrix),ge.setValue(V,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){let Oe=K.uniformsGroups;for(let We=0,kn=Oe.length;We<kn;We++){let To=Oe[We];Wt.update(To,nn),Wt.bind(To,nn)}}return nn}function wo(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.sunLights.needsUpdate=W,E.sunLightShadows.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function yr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,W,et){let K=Yt.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Yt.get(E.texture).__webglTexture=W,Yt.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:et,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,W){let et=Yt.get(E);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,et=0){Q=E,X=W,H=et;let K=null,j=!1,Tt=!1;if(E){let bt=Yt.get(E);if(bt.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(V.FRAMEBUFFER,bt.__webglFramebuffer),tt.copy(E.viewport),ut.copy(E.scissor),Et=E.scissorTest,wt.viewport(tt),wt.scissor(ut),wt.setScissorTest(Et),B=-1;return}else if(bt.__webglFramebuffer===void 0)Zt.setupRenderTarget(E);else if(bt.__hasExternalTextures)Zt.rebindTextures(E,Yt.get(E.texture).__webglTexture,Yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ee=E.depthTexture;if(bt.__boundDepthTexture!==ee){if(ee!==null&&Yt.has(ee)&&(E.width!==ee.image.width||E.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Zt.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Tt=!0);let Bt=Yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[W])?K=Bt[W][et]:K=Bt[W],j=!0):E.samples>0&&Zt.useMultisampledRTT(E)===!1?K=Yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[et]:K=Bt,tt.copy(E.viewport),ut.copy(E.scissor),Et=E.scissorTest}else tt.copy(kt).multiplyScalar(yt).floor(),ut.copy(oe).multiplyScalar(yt).floor(),Et=rt;if(et!==0&&(K=F),wt.bindFramebuffer(V.FRAMEBUFFER,K)&&wt.drawBuffers(E,K),wt.viewport(tt),wt.scissor(ut),wt.setScissorTest(Et),j){let bt=Yt.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt.__webglTexture,et)}else if(Tt){let bt=W;for(let Dt=0;Dt<E.textures.length;Dt++){let Bt=Yt.get(E.textures[Dt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Dt,Bt.__webglTexture,et,bt)}}else if(E!==null&&et!==0){let bt=Yt.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bt.__webglTexture,et)}B=-1};function Oi(E){let W=Yt.get(E);return(W.__readFormat!==E.format||W.__readType!==E.type)&&(W.__readFormat=E.format,W.__readType=E.type,W.__formatReadable=Te.textureFormatReadable(E.format),W.__typeReadable=Te.textureTypeReadable(E.type)),W}this.readRenderTargetPixels=function(E,W,et,K,j,Tt,Ut,bt=0){if(!(E&&E.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(Dt=Dt[Ut],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){wt.bindFramebuffer(V.FRAMEBUFFER,Dt);try{let Bt=E.textures[bt],ee=Bt.format,ce=Bt.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let Ot=Oi(Bt);if(Ot.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-K&&et>=0&&et<=E.height-j&&V.readPixels(W,et,K,j,dt.convert(ee),dt.convert(ce),Tt)}finally{let Bt=Q!==null?Yt.get(Q).__webglFramebuffer:null;wt.bindFramebuffer(V.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,W,et,K,j,Tt,Ut,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(Dt=Dt[Ut],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(W>=0&&W<=E.width-K&&et>=0&&et<=E.height-j){wt.bindFramebuffer(V.FRAMEBUFFER,Dt);let Bt=E.textures[bt],ee=Bt.format,ce=Bt.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let Ot=Oi(Bt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ie),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),V.readPixels(W,et,K,j,dt.convert(ee),dt.convert(ce),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Ge=Q!==null?Yt.get(Q).__webglFramebuffer:null;wt.bindFramebuffer(V.FRAMEBUFFER,Ge);let Pe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await zu(V,Pe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ie),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ie),V.deleteSync(Pe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,W=null,et=0){let K=Math.pow(2,-et),j=Math.floor(E.image.width*K),Tt=Math.floor(E.image.height*K),Ut=W!==null?W.x:0,bt=W!==null?W.y:0;Zt.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,et,0,0,Ut,bt,j,Tt),wt.unbindTexture()},this.copyTextureToTexture=function(E,W,et=null,K=null,j=0,Tt=0){let Ut,bt,Dt,Bt,ee,ce,Ot,ie,Ge,Pe=E.isCompressedTexture?E.mipmaps[Tt]:E.image;if(et!==null)Ut=et.max.x-et.min.x,bt=et.max.y-et.min.y,Dt=et.isBox3?et.max.z-et.min.z:1,Bt=et.min.x,ee=et.min.y,ce=et.isBox3?et.min.z:0;else{let ge=Math.pow(2,-j);Ut=Math.floor(Pe.width*ge),bt=Math.floor(Pe.height*ge),E.isDataArrayTexture?Dt=Pe.depth:E.isData3DTexture?Dt=Math.floor(Pe.depth*ge):Dt=1,Bt=0,ee=0,ce=0}K!==null?(Ot=K.x,ie=K.y,Ge=K.z):(Ot=0,ie=0,Ge=0);let we=dt.convert(W.format),Je=dt.convert(W.type),Ft;W.isData3DTexture?(Zt.setTexture3D(W,0),Ft=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Zt.setTexture2DArray(W,0),Ft=V.TEXTURE_2D_ARRAY):(Zt.setTexture2D(W,0),Ft=V.TEXTURE_2D),wt.activeTexture(V.TEXTURE0),wt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),wt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),wt.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);let Ke=wt.getParameter(V.UNPACK_ROW_LENGTH),he=wt.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=wt.getParameter(V.UNPACK_SKIP_PIXELS),nn=wt.getParameter(V.UNPACK_SKIP_ROWS),Rs=wt.getParameter(V.UNPACK_SKIP_IMAGES);wt.pixelStorei(V.UNPACK_ROW_LENGTH,Pe.width),wt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pe.height),wt.pixelStorei(V.UNPACK_SKIP_PIXELS,Bt),wt.pixelStorei(V.UNPACK_SKIP_ROWS,ee),wt.pixelStorei(V.UNPACK_SKIP_IMAGES,ce);let Qn=E.isDataArrayTexture||E.isData3DTexture,jn=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){let ge=Yt.get(E),$e=Yt.get(W),bn=Yt.get(ge.__renderTarget),Oe=Yt.get($e.__renderTarget);wt.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let We=0;We<Dt;We++)Qn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(E).__webglTexture,j,ce+We),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(W).__webglTexture,Tt,Ge+We)),V.blitFramebuffer(Bt,ee,Bt+Ut,ee+bt,Ot,ie,Ot+Ut,ie+bt,V.DEPTH_BUFFER_BIT,V.NEAREST);wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||Yt.has(E)){let ge=Yt.get(E),$e=Yt.get(W);wt.bindFramebuffer(V.READ_FRAMEBUFFER,L),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,z);for(let bn=0;bn<Dt;bn++)Qn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ge.__webglTexture,j,ce+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ge.__webglTexture,j),jn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$e.__webglTexture,Tt,Ge+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$e.__webglTexture,Tt),j!==0?V.blitFramebuffer(Bt,ee,Bt+Ut,ee+bt,Ot,ie,Ot+Ut,ie+bt,V.COLOR_BUFFER_BIT,V.NEAREST):jn?V.copyTexSubImage3D(Ft,Tt,Ot,ie,Ge+bn,Bt,ee,Ut,bt):V.copyTexSubImage2D(Ft,Tt,Ot,ie,Bt,ee,Ut,bt);wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else jn?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(Ft,Tt,Ot,ie,Ge,Ut,bt,Dt,we,Je,Pe.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Ft,Tt,Ot,ie,Ge,Ut,bt,Dt,we,Pe.data):V.texSubImage3D(Ft,Tt,Ot,ie,Ge,Ut,bt,Dt,we,Je,Pe):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,Ot,ie,Ut,bt,we,Je,Pe.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,Ot,ie,Pe.width,Pe.height,we,Pe.data):V.texSubImage2D(V.TEXTURE_2D,Tt,Ot,ie,Ut,bt,we,Je,Pe);wt.pixelStorei(V.UNPACK_ROW_LENGTH,Ke),wt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,he),wt.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),wt.pixelStorei(V.UNPACK_SKIP_ROWS,nn),wt.pixelStorei(V.UNPACK_SKIP_IMAGES,Rs),Tt===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&V.generateMipmap(Ft),wt.unbindTexture()},this.initRenderTarget=function(E){Yt.get(E).__webglFramebuffer===void 0&&Zt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Zt.setTextureCube(E,0):E.isData3DTexture?Zt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Zt.setTexture2DArray(E,0):Zt.setTexture2D(E,0),wt.unbindTexture()},this.resetState=function(){X=0,H=0,Q=null,wt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var li=[-57,-19,19,57],Zn=[-38,0,38],ho={x:11.7,z:3.2},ar={x:12.05,z:-5.45},Ri={x:2,z:38},Mn={x:38,z:-38},wd={x:42.3,z:-41.25},_e=(n,t,e)=>Math.max(t,Math.min(e,n)),mt=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z);function Fn(n,t,e,i){return Math.abs(n)+e<65&&Math.abs(t)+e<65&&i.every(s=>{if(s.off)return!0;let r=n-_e(n,s.x-s.w/2,s.x+s.w/2),o=t-_e(t,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=e*e})}function uo(n,t,e,i,s){let r=n.x,o=n.z;return Fn(t,n.z,i,s)&&(n.x=t),Fn(n.x,e,i,s)&&(n.z=e),n.x!==r||n.z!==o}function ci(n,t,e){let i=Math.atan2(Math.sin(t-n),Math.cos(t-n));return n+_e(i,-e,e)}function Td(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function Sl(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new je;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0,h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in d.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(d.attributes[_]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in d.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[_].length!==n[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;o[_]===void 0&&(o[_]=[]),o[_].push(d.morphAttributes[_]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let _;if(e)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,u),c+=_}}if(e){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let _=0;_<h.count;++_)d.push(h.getX(_)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Ad(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let v=0;v<o[u].length;++v)h.push(o[u][v][f]);let _=Ad(h);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function Ad(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new cn(o,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let f=0,h=u.count;f<h;f++)for(let _=0;_<e;_++){let v=u.getComponent(f,_);a.setComponent(f+d,_,v)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var fo=new q;function On(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;fo.copy(t),fo[i]=0,fo.normalize();let c=.5*o/(o+a),u=1-fo.angleTo(n)/l;return Math.sign(fo[e])===1?u*c:a/(o+a)+c+c*(1-u)}var bl=class n extends mn{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new q,c=new q,u=new q(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,_=d.length/6,v=new q,m=.5/o;for(let g=0,S=0;g<d.length;g+=3,S+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/_)){case 0:v.set(1,0,0),h[S+0]=On(v,c,"z","y",r,i),h[S+1]=1-On(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),h[S+0]=1-On(v,c,"z","y",r,i),h[S+1]=1-On(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),h[S+0]=1-On(v,c,"x","z",r,t),h[S+1]=On(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),h[S+0]=1-On(v,c,"x","z",r,t),h[S+1]=1-On(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),h[S+0]=1-On(v,c,"x","y",r,t),h[S+1]=1-On(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),h[S+0]=On(v,c,"x","y",r,t),h[S+1]=1-On(v,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Ed={car:{width:.99,length:2.135,radius:.98,offsets:[-1.17,0,1.17],mass:1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},mo=n=>Ed[n]??Ed.car;function ts(n,t){n.cabin&&(n.cabin.visible=!0),Object.assign(n,t,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function Ii(n,t,e,i,s="car"){let r=Math.sin(e),o=Math.cos(e),{offsets:a,radius:l}=mo(s);return a.every(c=>Fn(n+r*c,t+o*c,l,i))}function Pi(n,t,e,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=t-n.x,a=e-n.z,{width:l,length:c}=mo(n.kind),u=Math.abs(o*r-a*s)-l,d=Math.abs(o*s+a*r)-c;return u<=0&&d<=0||Math.hypot(Math.max(0,u),Math.max(0,d))<i}function es(n,t=0){let{width:e,length:i}=mo(n),s=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t));return{width:e*s+i*r,length:i*s+e*r}}function oh(n,t,e,i=n){return Ii(n.x,n.z,n.angle,t,n.kind)&&!po(i,n.x,n.z,n.angle,e)}function po(n,t,e,i,s){let r=Math.sin(i),o=Math.cos(i),a=mo(n.kind);for(let l of s){if(l===n||Math.abs(l.x-t)>4.5||Math.abs(l.z-e)>4.5)continue;let c=Math.sin(l.angle),u=Math.cos(l.angle),d=mo(l.kind),f=a.radius+d.radius,h=f,_=0,v=0;for(let m of a.offsets)for(let g of d.offsets){let S=t+r*m-l.x-c*g,T=e+o*m-l.z-u*g,b=Math.hypot(S,T);if(b>=h)continue;h=b;let I=Math.hypot(t-l.x,e-l.z);_=b>.02?S/b:I>.02?(t-l.x)/I:r,v=b>.02?T/b:I>.02?(e-l.z)/I:o}if(h<f)return{other:l,nx:_,nz:v,mass:a.mass,otherMass:d.mass}}return null}function rh(n,t){t<2.4||(n.integrity=Math.max(0,n.integrity-(t-2.4)*2.6),n.impact=Math.max(n.impact,t))}function hi(n,t,e,i,s){let{brake:r}=e,o=n.kind==="bike",a=n.integrity>0?e.throttle:0,l=n.integrity>0?e.steer:0;n.impact=Math.max(0,n.impact-t*21),n.steer+=(l-n.steer)*(1-Math.exp(-t*10));let c=Math.sin(n.angle),u=Math.cos(n.angle),d=n.vx*c+n.vz*u,f=Math.sign(a)*d<-.6?28:a<0?o?4.7:10:o?19.7:15.4;d=_e(d+a*f*t,o?-2.7:-8.4,o?31:27);let h=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;d*=Math.exp(-t*h);let _=o?r?5.2:13.5:r?2.15:8.1,v=(n.vx*u-n.vz*c)*Math.exp(-t*_);n.vx=d*c+v*u,n.vz=d*u-v*c;let m=_e(1.9-Math.abs(d)/24,.75,1.65),g=n.steer*t*m*Math.min(1,Math.abs(d)/2.1)*Math.sign(d),S=n.angle+g*(o?1.26:r?1.58:1);Ii(n.x,n.z,S,i,n.kind)&&!po(n,n.x,n.z,S,s)&&(n.angle=S);let T=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*t/.34)),b=t/T;for(let I=0;I<T;I++){let M=n.x+n.vx*b,p=n.z+n.vz*b,y=po(n,M,p,n.angle,s);if(y){let{other:A,nx:P,nz:R,mass:O,otherMass:F}=y,L=n.vx*P+n.vz*R,z=L-(A.vx*P+A.vz*R);if(z<0&&L<0){let H=-z*1.22/(1/O+1/F);n.vx+=P*H/O,n.vz+=R*H/O,A.vx-=P*H/F,A.vz-=R*H/F,rh(n,-z),rh(A,-z*.9);break}let X=Math.hypot(n.x-A.x,n.z-A.z);if(Math.hypot(M-A.x,p-A.z)<=X)break}if(Ii(M,p,n.angle,i,n.kind))n.x=M,n.z=p;else{let A=Ii(M,n.z,n.angle,i,n.kind)&&!po(n,M,n.z,n.angle,s),P=Ii(n.x,p,n.angle,i,n.kind)&&!po(n,n.x,p,n.angle,s),R=Math.hypot(A?0:n.vx,P?0:n.vz);A!==P?(A&&(n.x=M),P&&(n.z=p),n.vx*=A?.84:-.22,n.vz*=P?.84:-.22):(n.vx*=-.21,n.vz*=-.21),rh(n,R||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function zn(n,t){let e=0;return Zn.some(i=>Math.abs(n-i)<=13.55)&&Zn.some(i=>Math.abs(t-i)<=13.55)&&(e=.16),Math.abs(n-38)<6.05&&Math.abs(t+38)<5.04&&(e=.228),Math.abs(n-2)<9.5&&Math.abs(t-38)<11&&(e=.191),n>-10.91&&n<-3.49&&Math.abs(t-38)<9.77&&(e=.234),e}function ui(n,t,e,i,s,r,o=.34){if(!Fn(t,e,o,i))return!1;for(let a of s)if(!(mt(a,{x:t,z:e})>3.4||!Pi(a,t,e,o))&&(!Pi(a,n.x,n.z,o)||mt(a,{x:t,z:e})<=mt(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let l=o+.28;if(mt(a,{x:t,z:e})<l&&mt(a,{x:t,z:e})<=mt(a,n))return!1}return!0}function wl(n,t,e,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(t,e)/.14)),l=n.x,c=n.z,u=t/a,d=e/a;for(let f=0;f<a;f++){let h=n.x+u,_=n.z+d;if(ui(n,h,_,i,s,r,o)){n.x=h,n.z=_;continue}u&&ui(n,h,n.z,i,s,r,o)&&(n.x=h),d&&ui(n,n.x,_,i,s,r,o)&&(n.z=_)}return Math.hypot(n.x-l,n.z-c)}function Cd(n,t,e){if(!t)return Pi(n,e.x,e.z,.28);let i=Math.max(1,Math.ceil(mt(t,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=t.x+(n.x-t.x)*r,a=t.z+(n.z-t.z)*r,l={x:o,z:a,angle:n.angle,kind:n.kind};if(Pi(l,e.x,e.z,.28))return!0}return!1}function Rd(n,t,e){let i=t.x-n.x,s=t.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((e.x-n.x)*i+(e.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(e.x-n.x-i*o,e.z-n.z-s*o)<1.2}var l_=new mn,c_=new bl(1,1,1,2,.29),Dd=new Zi(1,10,7),h_=new Dn(1,1,1,12),ah=new Map,u_=new hn({vertexColors:!0,roughness:.82}),Id=new hn({vertexColors:!0,roughness:.36,metalness:.18});function ns(n,t,e=u_){if(!t.length)return;let i=t.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,l=new Float32Array(a*3),c=r.material.color;for(let u=0;u<l.length;u+=3)l[u]=c.r,l[u+1]=c.g,l[u+2]=c.b;return o.setAttribute("color",new cn(l,3)),o});n.remove(...t);let s=new Re(Sl(i),e);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var Ms=n=>n.children.filter(t=>t instanceof Re);function Fe(n,t,e,i,s,r,o,a,l,c=!1){let u=e+":"+c;ah.has(u)||ah.set(u,new hn({color:e,roughness:c?.33:.87,metalness:c?.2:0}));let d=new Re({box:l_,cloth:c_,sphere:Dd,cylinder:h_}[t],ah.get(u));return d.scale.set(o,a,l),d.position.set(i,s,r),d.castShadow=!0,d.receiveShadow=!0,n.add(d),d}var d_=new ds(1,16),f_=new an({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function Nd(n,t,e){let i=new Re(d_,f_);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(t,e,1),n.add(i),i}function Ss(n,t,e,i,s=!1){let r=new Ue;r.rotation.order="YXZ";let o=Nd(r,.41,.38),a=new Ue;r.add(a);let l=(v,m,g,S,T,b,I,M)=>Fe(a,v,m,g,S,T,b,I,M);l("cloth",e,0,.94,0,.44,.25,.29),l("cloth",t,0,1.22,0,.49,.49,.31),l("cloth",t,0,1.39,0,.55,.215,.337),l("cloth",s?8486469:t,0,1.05,.006,.473,.049,.312),s&&(l("cloth",12891226,-.128,1.343,.169,.078,.057,.014),l("cloth",2445379,0,1.427,-.132,.29,.132,.084)),l("cylinder",i,0,1.5,0,.09,.13,.09),l("sphere",i,0,1.67,.015,.168,.197,.157),l("sphere",3023645,0,1.77,-.031,.162,.112,.141),l("sphere",i,0,1.655,.165,.033,.034,.034),l("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let v of[-1,1])l("sphere",i,v*.155,1.66,.023,.032,.052,.025),l("cloth",2894120,v*.061,1.711,.152,.043,.012,.012),l("cloth",10985105,v*.061,1.692,.156,.032,.012,.012),l("cloth",3024931,v*.06,1.693,.163,.016,.012,.009);s&&(l("sphere",1522486,0,1.79,.012,.181,.132,.164),l("cloth",2508606,0,1.77,.159,.27,.033,.17));let c=[],u=[],d=[],f=[];for(let v of[-1,1]){let m=new Ue;m.position.set(v*.31,1.42,0),a.add(m),Fe(m,"cloth",t,0,-.105,0,.173,.226,.187);let g=new Ue;g.position.y=-.23,m.add(g),Fe(g,"cloth",i,0,-.101,0,.132,.22,.119),Fe(g,"sphere",i,0,-.227,.012,.082,.084,.077),d.push(g),c.push(m);let S=new Ue;S.position.set(v*.128,.94,0),a.add(S),Fe(S,"cloth",e,0,-.205,0,.21,.427,.228);let T=new Ue;T.position.y=-.412,S.add(T),Fe(T,"cloth",e,0,-.18,0,.182,.38,.198),Fe(T,"cloth",s?13812648:3156777,0,-.386,.062,.201,.143,.304),Fe(T,"cloth",s?6839635:2696483,0,-.445,.059,.202,.037,.313),f.push(T),u.push(S)}let h=new Ue;h.position.set(0,-.227,.012),Fe(h,"box",2635321,0,.012,-.002,.066,.078,.12,!0),Fe(h,"box",2635321,0,-.105,.054,.074,.25,.079,!0),Fe(h,"box",10263691,0,-.189,.095,.031,.028,.018);let _=new Ze;_.position.set(0,-.235,.053),h.add(_),d[0].add(h);for(let v of[a,...c,...d,...u,...f,h])ns(v,Ms(v));return h.visible=!1,n.add(r),{root:r,body:a,arms:c,legs:u,forearms:d,shins:f,pistol:h,muzzle:_,shadow:o,stride:0}}function bs(n,t,e,i,s,r=0,o=0,a=!1){n.stride+=t*(4.6+e*1.65);let l=Math.sin(n.stride)*Math.min(.78,e*.15);n.body.position.set(0,Math.abs(l)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(l,0,0),n.legs[1].rotation.set(-l,0,0),n.shins[0].rotation.set(Math.max(0,l)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-l)*.51,0,0);for(let c of n.forearms)c.rotation.set(0,0,0);if(n.arms[0].rotation.set(i?-Math.PI/2+o:-l*.76,0,0),n.arms[1].rotation.set(i?-1.16:l*.76,0,0),n.arms[0].rotation.z=a?-.25:0,n.arms[1].rotation.z=a?.25:0,a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let c=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-c*1.11,n.forearms[0].rotation.x=-.62*(1-c),n.body.rotation.y=-c*.37}else n.body.rotation.y=0;n.pistol.visible=s}var Pd=new q(0,-1,0),lh=new q,vs=new q,ch=new q,hh=new q,Tl=new q,Ud=new Qe;function Ld(n,t,e,i,s,r){vs.subVectors(e,n.position);let o=Math.min(i+s-.001,Math.max(.015,vs.length()));vs.normalize();let a=(i*i-s*s+o*o)/(2*o);ch.set(r[0],r[1],r[2]).addScaledVector(vs,-ch.dot(vs)).normalize(),lh.copy(n.position).addScaledVector(vs,a).addScaledVector(ch,Math.sqrt(Math.max(0,i*i-a*a))),Tl.subVectors(lh,n.position).normalize(),n.quaternion.setFromUnitVectors(Pd,Tl),Tl.copy(n.position).addScaledVector(vs,o).sub(lh).normalize(),t.quaternion.setFromUnitVectors(Pd,Tl.applyQuaternion(Ud.copy(n.quaternion).invert()))}function uh(n,t){t.root.updateMatrixWorld(!0),n.root.position.copy(t.body.localToWorld(hh.set(0,.1,-.31))),n.root.quaternion.copy(t.body.getWorldQuaternion(Ud)),n.shadow.visible=!1,n.pistol.visible=!1;let e=.63;n.body.rotation.set(e,0,0),n.body.position.set(0,.94*(1-Math.cos(e)),-.94*Math.sin(e)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(t.handlebar.localToWorld(hh.set(s*.342,.44,-.09)));Ld(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(t.body.localToWorld(hh.set(s*.245,.39,-.22)));Ld(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function go(n,t,e=!1){let i=new Ue;Nd(i,1.14,2.21);let s=new Ue;i.add(s);let r=(m,g,S,T,b,I,M,p,y=!1)=>Fe(s,m,g,S,T,b,I,M,p,y);r("box",2435629,0,.4,0,1.5,.32,3.7);for(let m of[-1,1])r("box",2830387,m*.9,.44,0,.12,.22,1.66);for(let m of[-1,1])r("box",2830387,0,.42,m*1.96,1.86,.3,.42);r("box",t,0,.72,0,1.94,.43,4.24,!0);let o=r("box",t,0,.94,1.4,1.9,.15,1.2,!0);r("box",t,0,.93,-1.78,1.89,.14,.72,!0);let a=new je,l=[-.87,.92,-1.45,.87,.92,-1.45,.87,.92,.8,-.87,.92,.8,-.71,1.49,-1.06,.71,1.49,-1.06,.71,1.49,.26,-.71,1.49,.26];a.setAttribute("position",new Me(l,3)),a.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),a.computeVertexNormals();let c=new Re(a,new hn({color:3561828,roughness:.24,metalness:.42,flatShading:!0,side:yn}));c.castShadow=!0,s.add(c);let u=new Ue;u.position.set(-.974,0,.79),Fe(u,"box",t,0,.75,-.65,.036,.38,1.28,!0),Fe(u,"box",13418919,-.024,.881,-.37,.04,.04,.15,!0),ns(u,Ms(u),Id),s.add(u),r("box",t,0,1.495,-.4,1.43,.075,1.3,!0),r("box",3355961,0,.69,2.126,.86,.13,.05),r("box",13156268,0,.54,2.13,1.92,.12,.045,!0),r("box",13156268,0,.53,-2.13,1.93,.12,.05,!0),r("box",16707771,0,.72,-2.132,.4,.145,.03);let d=[];for(let m of[-1,1]){r("box",16769956,m*.68,.77,2.132,.43,.17,.055,!0),r("box",11021858,m*.65,.77,-2.132,.48,.17,.055,!0),r("box",2898236,m*1,1,.74,.1,.09,.16);for(let g of[.79,-.52,-1.47])r("box",1843234,m*.975,.72,g,.012,.42,.025);for(let g of[.42,-.74])r("box",13089700,m*.98,.89,g,.035,.04,.22,!0);for(let g of[-1.31,1.33]){let S=new Ue;S.position.set(m*.83,.39,g),i.add(S),Fe(S,"cylinder",2434600,0,0,0,.408,.24,.408).rotation.z=Math.PI/2,Fe(S,"cylinder",11052964,m*.115,0,0,.217,.02,.217,!0).rotation.z=Math.PI/2,d.push(S)}}let f=[];e&&(f.push(r("box",15550262,-.33,1.62,-.32,.55,.14,.25)),f.push(r("box",5487086,.33,1.62,-.32,.55,.14,.25)));let h=Ms(s).filter(m=>m!==c&&m!==o&&!f.includes(m));ns(s,h.filter(m=>m.material.metalness===0)),ns(s,h.filter(m=>m.material.metalness>0),Id);for(let m of d)ns(m,Ms(m));s.traverse(m=>{m instanceof Re&&(m.castShadow=!1)});let _=new Ue,v=new an({color:6643544,transparent:!0,opacity:.29,depthWrite:!1});for(let m=0;m<3;m++){let g=new Re(Dd,v);_.add(g)}return _.position.set(0,1.04,1.25),_.visible=!1,i.add(_),n.add(i),{root:i,body:s,cabin:c,wheels:d,lamps:f,hood:o,smoke:_,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,smokeTime:0,kind:"car",rider:null,door:u,doorTime:0,wheelSpin:0,handlebar:null}}function dh(n,t){let e=go(n,t),{body:i,hood:s,wheels:r,smoke:o}=e;i.clear(),e.root.remove(...r),r.length=0,e.kind="bike",e.cabin=null,e.root.children[0].scale.set(.42,1.07,1);let a=(c,u,d,f,h,_,v,m)=>Fe(i,c,u,d,f,h,_,v,m);a("box",3882300,0,.48,-.04,.32,.38,.7),a("sphere",t,0,.89,.34,.24,.23,.46),a("box",2369834,0,.85,-.36,.36,.13,.59),a("box",t,0,.65,-.7,.32,.17,.58),a("box",13940106,0,.8,.88,.25,.21,.11),a("box",10433836,0,.7,-.99,.2,.11,.11);let l=new Ue;l.position.set(0,.76,.38),Fe(l,"box",3949122,0,.44,-.09,.684,.057,.059),Fe(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,ns(l,Ms(l)),e.handlebar=l,i.add(l),a("box",5461330,0,.39,-.22,.52,.07,.11),a("box",11578016,.232,.36,-.54,.12,.12,.72),s.visible=!1,i.add(s),o.position.set(0,.55,.32);for(let c of[-.73,.78]){let u=new Ue;u.position.set(0,.33,c),Fe(u,"cylinder",2434601,0,0,0,.33,.12,.33).rotation.z=Math.PI/2,Fe(u,"cylinder",8750213,0,0,0,.205,.14,.205).rotation.z=Math.PI/2,ns(u,Ms(u)),r.push(u),i.add(u),a("box",5988704,0,.55,c,.09,.49,.085).rotation.x=c>0?-.21:.46}return ns(i,Ms(i).filter(c=>c!==s)),e}function is(n,t,e=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,l=0,c=0,u=n.wheels.map(m=>{let{x:g,z:S}=m.position,T=zn(n.x+g*s+S*i,n.z-g*i+S*s);return S>0?o+=T:a+=T,g<0?l+=T:c+=T,T}),d=(o+a)/n.wheels.length;n.root.rotation.y=n.angle,n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),r?1.51:2.64);let f=r?n.integrity<=0?1.25:-e*Math.min(.53,Math.abs(n.speed)*.039):e*Math.min(.09,Math.abs(n.speed)*.004),h=r?0:Math.atan2((c-l)*.5,1.89);n.body.rotation.z+=(f+h-n.body.rotation.z)*(t>0?Math.min(1,t*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-t),n.door.rotation.y=Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let _=r?.33:.408,v=r?n.body.rotation.z:0;n.root.position.set(n.x,d+(r?Math.abs(Math.sin(v))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=e*.22),n.wheelSpin=(n.wheelSpin+n.speed*t/_)%(Math.PI*2),n.wheels.forEach((m,g)=>{r||(m.position.y=u[g]-d+_),m.rotation.set(n.wheelSpin,m.position.z>0?e*(r?.22:.23):0,0,"YXZ")}),n.hood.rotation.x=(100-n.integrity)*.0031,n.hood.rotation.z=(100-n.integrity)*.0013,n.smoke.visible=n.integrity<43,n.smoke.visible&&(n.smokeTime+=t,n.smoke.children.forEach((m,g)=>{let S=(n.smokeTime*(n.integrity<=0?.72:1.04)+g/3)%1;m.position.set(Math.sin(g*3.9+S*3)*S*.4,S*1.85,-S*.58),m.scale.setScalar(.12+S*.32)}))}function fh(n,t,e){let i=Math.min(1,t/.22),s=Math.min(1,Math.max(0,(t-.12)/.5)),r=s*s*(3-2*s),o=t>.62?Math.sin(Math.min(1,(t-.62)/.25)*Math.PI)*.06*(1-Math.min(1,(t-.62)/.25)):0,a=e*(r*1.5-o);n.body.position.set(0,-.16*i*(1-r),0),n.body.rotation.set(e*.2*i,0,0),n.legs[0].rotation.set(-.55*i*(1-r)+.1*r,0,-.12*r),n.legs[1].rotation.set(-.35*i*(1-r)-.15*r,0,.14*r),n.shins[0].rotation.set(1.05*i*(1-r)+.2*r,0,0),n.shins[1].rotation.set(.75*i*(1-r)+.35*r,0,0);let l=Math.sin(Math.min(1,t/.5)*Math.PI);return n.arms[0].rotation.set(-e*(.6*l+.4*r),0,-.35-.6*r),n.arms[1].rotation.set(-e*(.9*l+.3*r),0,.35+.7*r),n.forearms[0].rotation.set(-.5*l-.2,0,0),n.forearms[1].rotation.set(-.3*l-.3,0,0),n.pistol.visible=!1,a}function Od(n,t){let{id:e,x:i,z:s,w:r,d:o,angle:a,kind:l,label:c,color:u}=t,{box:d,solid:f,door:h,sign:_,glazing:v,support:m,volume:g}=n,S=l==="shop"||l==="armory",T=(H,Q,B=.228)=>({x:i+Math.cos(a)*H+Math.sin(a)*Q,z:s-Math.sin(a)*H+Math.cos(a)*Q,y:B}),b=Math.abs(Math.cos(a)),I=Math.abs(Math.sin(a)),M=(H,Q,B,Z)=>({...T(H,Q),w:B*b+Z*I,d:B*I+Z*b}),p=o/2,y=-o/2,A=-r/2,P=r/2,R=(H,Q,B,Z,tt,ut,Et,Y=!1,ht=0,Rt="box")=>{let Lt=T(H,Q);d(Lt.x,B,Lt.z,Z,tt,ut,Et,Y,a,ht,Rt)},O=(H,Q,B,Z,tt,ut,Et,Y=!0)=>{R(H,Q,B,Z,tt,ut,Et,Y);let ht=M(H,Q,Z,ut);f.push({x:ht.x,z:ht.z,w:ht.w,d:ht.d,y0:B-tt*.5,h:B+tt*.5,buildingId:e})};return S?z():L();function F(H,Q,B,Z,tt){if(R(H,p+.05,Q,B+.22,Z+.22,.1,5195585),R(H,p+.085,Q,B,Z,.06,5073522),R(H,p+.12,Q,.05,Z,.03,12168856),R(H,p+.12,Q+Z*.18,B,.045,.03,12168856),R(H,p+.13,Q-Z*.5-.08,B+.36,.09,.2,Jn(u)),tt)for(let ut of[-1,1])R(H+ut*(B*.5+.24),p+.09,Q,.34,Z+.06,.05,tt)}function L(){let H=l==="apartments",Q=H?t.stories:1,B=H?3.3:3.25,Z=Q*B,tt=.228+Z;O(0,0,.228+Z/2,r,Z,o,u),R(0,p+.03,.228+.23,r+.04,.46,.08,8484463);for(let Y of[A+.12,P-.12])R(Y,p+.04,.228+Z/2,.26,Z,.1,Jn(u));for(let Y=1;Y<Q;Y++)R(0,p+.04,.228+Y*B,r+.04,.16,.1,Jn(u));let ut=H?0:-r*.18;if(R(ut,p+.05,.228+1.17,1.42,2.42,.1,5195585),R(ut,p+.09,.228+1.1,1.1,2.2,.06,H?4151902:7687224),R(ut+.38,p+.14,.228+1.08,.06,.16,.05,13810049),R(ut,p+.32,.228-.05,1.7,.14,.62,8484463),R(ut,p+.42,.228+2.62,1.9,.12,.86,Jn(u),!0),H){R(ut,p+.12,.228+2.92,1.6,.32,.05,15324320);let Y=T(ut,p+.15,.228+2.92);_(c,Y.x,Y.y,Y.z,a,5589560,1.56,.3)}else{let Y=T(ut+1.15,p+.13,1.848);_(c,Y.x,Y.y,Y.z,a,5589560,.92,.22)}let Et=l==="house"?Fd(e,[6257514,8019014,6975364]):null;for(let Y=0;Y<Q;Y++){let ht=.228+Y*B,Rt=H?[A+r*.17,A+r*.38,P-r*.38,P-r*.17]:[r*.18,r*.38];for(let Lt of Rt)if(!(Y===0&&Math.abs(Lt-ut)<1.7)&&(F(Lt,ht+1.72,H?1.26:1.2,1.34,Et),H&&Y>0&&Lt===Rt[3])){R(Lt,p+.42,ht+.95,1.8,.12,.74,8484463,!0);for(let yt of[-.8,-.4,0,.4,.8])R(Lt+yt,p+.76,ht+1.38,.04,.78,.04,4802113);R(Lt,p+.76,ht+1.78,1.72,.05,.06,4802113)}for(let Lt of[A,P]){let yt=Lt===A?-1:1;for(let Vt of H?[y+2.2,p-2.2]:[0]){let Le=T(Lt+yt*.05,Vt);d(Le.x,ht+1.72,Le.z,.1,1.56,1.32,5195585,!1,a);let kt=T(Lt+yt*.085,Vt);d(kt.x,ht+1.72,kt.z,.06,1.34,1.1,5073522,!1,a)}}}if(H){R(0,0,tt+.04,r+.12,.1,o+.12,7827562);for(let Y of[A+.1,P-.1])R(Y,0,tt+.36,.2,.56,o,Jn(u),!0);for(let Y of[y+.1,p-.1])R(0,Y,tt+.36,r,.56,.2,Jn(u),!0);R(P-2.4,y+2.1,tt+.95,2,1.8,2,9077369,!0),R(P-2.4,y+2.1,tt+1.93,2.1,.12,2.1,7301732),R(A+2.2,y+1.9,tt+.75,1.4,1.2,1.4,10134691,!0),R(A+2.2,y+1.9,tt+1.42,1.5,.12,1.5,7240057)}else{let Y=Math.min(2,o*.2);R(0,0,tt,r-.02,Y,o-.02,u,!0,0,"prism"),R(0,0,tt+.06,r+.5,Y+.12,o+.7,Fd(e,[10115652,9063482,8082502]),!0,0,"prism"),R(P-2.1,y+o*.3,tt+Y*.55,.55,1.6,.55,9402986,!0)}return{id:e,kind:l,label:c,units:[],doorIds:[],clerk:null,outside:T(ut,p+1.1,.16),entry:T(ut,p+.2),inside:T(ut,p+.2),approach:T(ut,p+2.4,.16),resident:null}}function z(){let Q=4.0200000000000005,B=.228,Z=t.doorAt??.1,tt=Math.min(r*.25,3.72),ut=[Z-r*.248,Z+r*.248],Et=.22,Y=(It,de,fe,te,V,De,ae)=>O(It,de,V+De/2,fe,De,te,ae),ht=(It,de,fe,te,V,De)=>Y((de+fe)/2,It,fe-de,Et,te,V,De),Rt=(It,de,fe,te,V,De)=>Y(It,(de+fe)/2,Et,fe-de,te,V,De),Lt=h(...X(Z-1.28/2,p),a,1.28,4285290,B,{buildingId:e,private:!1,unitId:null}),yt=T(Z,p),Vt=T(Z,p+1.05,.16),Le=T(Z,p-1.05),kt=T(Z,p+2.45,.16);g.push({...M(0,0,r-.2,o-.2),floor:B,ceiling:B+Q,buildingId:e}),O(0,0,B-.066,r-.03,.132,o-.03,11972762,!1),f[f.length-1].walkSurface=!0,m.push({...M(0,0,r-.03,o-.03),y:B,buildingId:e}),Rt(A,y,p,B,Q,u),Rt(P,y,p,B,Q,u),ht(y,A,P,B,Q,u);let oe=A,rt=[{center:Z,width:1.28,door:!0},...ut.map(It=>({center:It,width:tt,door:!1}))];rt.sort((It,de)=>It.center-de.center);let Kt=.61,Se=2.58,Ee=Se-Kt;for(let It of rt){let de=It.center-It.width*.5,fe=It.center+It.width*.5;if(ht(p,oe,de,B,Q,u),R((oe+de)/2,p+.04,B+.17,de-oe,.34,.11,8484463),oe=fe,It.door)continue;Y(It.center,p,It.width,Et,B,Kt,u),Y(It.center,p,It.width,Et,B+Se,Q-Se,u);let te=T(It.center,p+.068,B+(Se+Kt)*.5);v(te.x,te.y,te.z,It.width,Ee,a);let V=M(It.center,p,It.width,.2);f.push({x:V.x,z:V.z,w:V.w,d:V.d,y0:B+Kt,h:B+Se,buildingId:e});for(let ae of[-1,0,1])R(It.center+ae*(It.width*.5-.042),p+.13,B+(Se+Kt)*.5,.07,Ee,.084,5989472);for(let ae of[Kt,Se])R(It.center,p+.13,B+ae,It.width+.07,.081,.096,7831928);R(It.center,p+.17,B+Kt-.025,It.width+.2,.091,.25,10065280);let De=p-.48;R(It.center,De,B+.83,It.width-.24,.078,.45,11771260);for(let ae of[-.78,-.39,.39,.78])R(It.center+ae,De,B+.95+(Math.abs(ae)<.5?.055:0),.23,.26,.26,t.awning??12089684)}ht(p,oe,P,B,Q,u),R((oe+P)/2,p+.04,B+.17,P-oe,.34,.11,8484463),O(Z,p,B+2.22+(Q-2.22)/2,1.28,Q-2.22,.21,u);for(let It of[A+.17,P-.17])R(It,p+.11,B+Q/2,.22,Q,.17,Jn(u));R(0,p+.07,B+4.16-.05,r+.25,.22,.13,Jn(u));for(let It of[A,P]){let de=It===A?-1:1;for(let fe of[y+2.3,p-2.3])R(It+de*.13,fe,B+1.7,.06,1.2,1.4,5195585),R(It+de*.16,fe,B+1.7,.04,1.04,1.22,5073522),R(It+de*.2,fe,B+1.03,.16,.09,1.56,Jn(u))}let ve=T(0,y+1.89,B);ve.angle=a;let be=T(0,p+.18,B+4.16-.64);_(c,be.x,be.y,be.z,a,3232851,Math.min(5.25,r-.72),.58),R(0,p+.6,B+4.16-1.37,r-.56,.19,1.22,t.awning??7820863,!0);for(let It=A+.68;It<P-.42;It+=.46)R(It,p+1.21,B+4.16-1.46,.225,.23,.062,14006413);O(.46,y+3,B+.55,4.4,1.1,.7,6968131),R(.46,y+3,B+1.15,4.58,.14,.79,12166795,!0),R(1.33,y+3.02,B+1.42,.48,.41,.36,4083022),R(1.33,y+3.22,B+1.58,.34,.19,.051,7968922);for(let It of[A+.46,P-.46])for(let de of[y+1.75,y+4.2]){O(It,de,B+.83,.61,1.66,1.79,7037271);for(let fe=0;fe<3;fe++)for(let te of[-.55,-.17,.22,.57]){let V=[12490344,11953479,5997179][(Math.floor((te+.6)*2.3)+fe)%3];R(It+(It<0?.37:-.37),de+te,B+.47+fe*.43,.15,.25,.22,V)}}for(let It of[-.26,.26])R(It*r,0,B+4.16-.23,.32,.085,1.91,16245436);R(0,p-.8,B+.009,1.71,.016,.87,5863786);let ke=B+4.16;O(0,0,ke-.053,r+.17,.2,o+.17,8613472,!1);for(let It of[A,P])R(It,0,ke+.28,.25,.59,o+.15,Jn(u),!0);for(let It of[y,p])R(0,It,ke+.28,r+.2,.59,.25,Jn(u),!0);return R(P-1.5,y+1.45,ke+.46,1.34,.64,1.21,8418922,!0),R(P-1.5,y+1.45,ke+.82,1.14,.08,1.05,10261379),R(A+1.52,y+1.55,ke+.39,.56,.57,.57,4873822,!0),{id:e,kind:l,label:c,entry:yt,outside:Vt,inside:Le,approach:kt,resident:null,clerk:ve,doorIds:[Lt.id],units:[]}}function X(H,Q){let B=T(H,Q,.228);return[B.x,B.z]}}function Fd(n,t){let e=0;for(let i of n)e=e*31+i.charCodeAt(0)>>>0;return t[e%t.length]}function Jn(n){let t=Math.min(255,(n>>16&255)+26),e=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return t*65536+e*256+i}var zd=(n,t)=>[Math.floor((n-t*.5-1.1)/10),Math.floor((n+t*.5+1.1)/10)];function Al(n){let t=new Map;for(let e of n){let[i,s]=zd(e.x,e.w),[r,o]=zd(e.z,e.d);for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=a+","+l;t.has(c)||t.set(c,[]),t.get(c).push(e)}}return(e,i)=>t.get(Math.floor(e/10)+","+Math.floor(i/10))??[]}var Bd=(n,t,e)=>Math.abs(n-e.x)<e.w*.5+.002&&Math.abs(t-e.z)<e.d*.5+.002,p_=n=>n&&n.health!==0&&!n.seated;function kd(n,t,e,i,s){let r=Al(n),o=Al(t),a=Al(e),l=Al(i.map(b=>b.closedSolid)),c=new Map(i.map(b=>[b.id,b])),u=b=>{let I=c.get(b.doorId);return!I.breached&&I.openAmount<1.06},d=n.filter(b=>(b.y0??0)<.95&&b.h>.28&&!b.stair);function f(b,I,M=0){let p=s(b,I);for(let y of o(b,I))y.y>p&&y.y<=M+.305&&Bd(b,I,y)&&(p=y.y);return p}function h(b,I,M=0){let p=A=>!A.stair&&(!A.walkSurface||A.h>M+.305)&&(A.y0??0)<M+1.72&&A.h>M+.13,y=r(b,I).filter(p);for(let A of l(b,I))p(A)&&u(A)&&y.push(A);return y}function _(b,I,M=0){let p=null;for(let y of a(b,I))y.floor<=M+.14&&y.ceiling>=M&&Bd(b,I,y)&&(!p||y.floor>p.floor)&&(p=y);return p}function v(b,I,M,p=.3,y=!1){let A=P=>I>=(P.y0??0)-p&&I<=P.h+p&&Math.abs(b-P.x)<P.w*.5+p&&Math.abs(M-P.z)<P.d*.5+p;for(let P of r(b,M))if(!(P.off||P.prop||P.walkSurface||P.stair)&&A(P))return!0;if(y){for(let P of l(b,M))if(A(P))return!0}return!1}function m(){return i.map(b=>b.closedSolid).filter(u)}function g(b){let I=c.get(b);return!I||!I.private||I.breached?!1:(I.breached=!0,I.hold=1/0,!0)}function S(b,I){for(let M of i){let p=M.breached||M.normallyOpen;M.hold=Math.max(0,M.hold-b);for(let A of I){if(p||!p_(A))continue;let P=A.floorY??A.y??0;if(Math.abs(P-M.base)>.64)continue;let R=A.x-M.x,O=A.z-M.z,F=R*R+O*O;if(F>3.68)continue;let L=A.buildingId===M.buildingId&&(!M.unitId||A.unitId===M.unitId),z=R*M.normalX+O*M.normalZ<-.22;(!M.private||L||z&&F<2.43||M.opened&&F<1.92)&&(p=!0,M.hold=1.1)}let y=p||M.hold>0?1.48:0;M.openAmount+=(y-M.openAmount)*(1-Math.exp(-b*13)),M.opened=M.openAmount>=1.06,M.door.rotation.y=M.angle+M.openAmount}}function T(){for(let b of i)b.breached=!1,b.hold=0,b.opened=b.normallyOpen,b.openAmount=b.normallyOpen?1.48:0,b.door.rotation.y=b.angle+b.openAmount}return{vehicleSolids:d,floorAt:f,walkSolids:h,interiorAt:_,closedDoorSolids:m,breachDoor:g,updateDoors:S,resetDoors:T,viewBlocked:v}}var ph=3751484,m_={box:new mn,cylinder:new Dn(1,1,1,10),pole:new Dn(.8,1,1,8),foliage:new Ti(1,1)},lr={bin:{speed:.8,mass:.03,damage:0,radius:.27},bollard:{speed:2.6,mass:.05,damage:1,radius:.1},bench:{speed:4.2,mass:.14,damage:3,radius:.4},lamp:{speed:8.3,mass:.28,damage:9,radius:.12},tree:{speed:11.5,mass:.55,damage:16,radius:.25},palm:{speed:10.5,mass:.45,damage:13,radius:.2}};function cr(n){let t=n.map(([e,i,s,r,o,a,l,c,u=0,d=0])=>{let f=m_[e],h=f.index?f.toNonIndexed():f.clone(),_=new ye().compose(new q(i,s,r),new Qe().setFromEuler(new Xn(u,d,0,"YXZ")),new q(o,a,l));h.applyMatrix4(_);let v=new se(c),m=new Float32Array(h.attributes.position.count*3);for(let g=0;g<m.length;g+=3)m[g]=v.r,m[g+1]=v.g,m[g+2]=v.b;h.setAttribute("color",new cn(m,3));for(let g of Object.keys(h.attributes))["position","normal","color"].includes(g)||h.deleteAttribute(g);return h});return Sl(t)}var Gd={lamp:()=>cr([["pole",0,2.25,0,.083,4.5,.083,ph],["box",.35,4.36,0,.79,.075,.075,ph],["box",.73,4.32,0,.32,.12,.19,14924165],["cylinder",0,.12,0,.13,.24,.13,2961455]]),bench:()=>cr([["box",0,.4,0,1.52,.075,.46,8476742],["box",0,.62,-.16,1.52,.23,.075,9791828],...[-.54,.54].map(n=>["box",n,.19,0,.06,.37,.37,ph])]),bin:()=>cr([["pole",0,.36,0,.24,.69,.24,3493961],["pole",0,.72,0,.267,.1,.267,2506039]]),bollard:()=>cr([["box",0,.22,0,.09,.39,.09,7104343],["box",0,.42,0,.13,.08,.13,14197880]]),tree:()=>cr([["pole",0,2,0,.22,4,.22,8020048],["foliage",.2,4.3,.1,1.55,1.25,1.45,4614992,0,.4],["foliage",-.7,3.9,-.3,1.25,1.1,1.25,6718801,0,1.3],["foliage",.5,3.7,-.8,1.15,1,1.2,5798479,0,2.1],["foliage",-.2,4.9,-.2,1.05,.95,1.05,8889436,0,3]]),palm:()=>cr([["pole",0,2.3,0,.16,4.6,.22,8020048],...Array.from({length:7},(n,t)=>{let e=t*Math.PI*2/7;return["foliage",Math.sin(e)*.86,4.55,Math.cos(e)*.86,.42,.24,1.58,[3432266,4879699,7111766][t%3],0,e]})])};function Vd(n,t,e){let i=[],s={},r=new hn({vertexColors:!0,roughness:.84}),o=new ye,a=new q,l=new Qe,c=new q,u=new Qe,d=new Qe,f=new q,h=new q(0,1,0),_=!1;function v(M,p,y,A=0,P=1,R){let O=e(p,y),F={x:p,z:y,w:R?.w??lr[M].radius*2,d:R?.d??lr[M].radius*2,y0:O,h:O+(R?.h??1),prop:M};t.push(F),i.push({kind:M,x:p,z:y,y:O,rotation:A,scale:P,solid:F,broken:!1,clock:0,vx:0,vz:0,tilt:0,axisX:1,axisZ:0,spin:0,index:-1,lift:0,liftSpeed:0,spinRate:0})}function m(M){u.setFromAxisAngle(h,M.rotation+M.spin),f.set(M.axisX,0,M.axisZ),d.setFromAxisAngle(f,M.tilt),l.multiplyQuaternions(d,u);let p=lr[M.kind].radius;a.set(M.x,M.y+Math.sin(M.tilt)*p+M.lift,M.z),c.setScalar(M.scale),o.compose(a,l,c),s[M.kind].setMatrixAt(M.index,o),s[M.kind].instanceMatrix.needsUpdate=!0}function g(){for(let M of Object.keys(Gd)){let p=i.filter(A=>A.kind===M);if(!p.length)continue;let y=new bi(Gd[M](),r,p.length);y.castShadow=!0,y.receiveShadow=!0,s[M]=y,p.forEach((A,P)=>{A.index=P,m(A)}),y.computeBoundingSphere(),n.add(y)}}function S(M,p,y){let A=lr[M.kind];M.broken=!0,M.solid.off=!0,M.clock=0;let P=.55+Math.random()*.25;M.vx=p.vx*P,M.vz=p.vz*P;let R=Math.max(.01,Math.hypot(p.vx,p.vz));M.axisX=p.vz/R,M.axisZ=-p.vx/R,M.spinRate=(Math.random()-.5)*(M.kind==="bin"?7:2),M.lift=0,M.liftSpeed=M.kind==="bin"||M.kind==="bollard"?Math.min(3.2,y*.22):0;let O=1-A.mass;return p.vx*=O,p.vz*=O,A.damage&&(p.integrity=Math.max(0,p.integrity-A.damage*Math.min(1.6,y/A.speed))),p.impact=Math.max(p.impact,A.mass>.2?4.5:0),_=!0,{kind:M.kind,heavy:A.mass>.2,x:M.x,z:M.z}}function T(M,p,y){let A=[];for(let R of p){let O=Math.hypot(R.vx,R.vz);if(O<.6)continue;let F=O*M*2+.2;for(let L of i){if(L.broken||Math.abs(L.x-R.x)>3.6||Math.abs(L.z-R.z)>3.6)continue;let z={x:R.x+R.vx*M,z:R.z+R.vz*M,angle:R.angle,kind:R.kind};Pi(z,L.x,L.z,lr[L.kind].radius+F)&&O>=lr[L.kind].speed&&A.push(S(L,R,O))}}for(let R of i)if(R.broken)if(R.clock+=M,R.clock<2.5){let O=Math.exp(-M*(R.tilt>1.2?6:2.2)),F=R.x+R.vx*M,L=R.z+R.vz*M;R.x=F,R.z=L,R.vx*=O,R.vz*=O,R.spin+=(R.spinRate??0)*M*O,R.tilt=Math.min(Math.PI/2,R.tilt+M*(1.1+R.tilt*3.2)),R.liftSpeed&&(R.lift=Math.max(0,R.lift+R.liftSpeed*M),R.liftSpeed-=9.8*M,R.lift===0&&R.liftSpeed<0&&(R.liftSpeed=0)),m(R)}else R.clock>50&&Math.hypot(y.x-R.solid.x,y.z-R.solid.z)>38&&p.every(O=>Math.hypot(O.x-R.solid.x,O.z-R.solid.z)>3)&&b(R);let P=_;return _=!1,{events:A,shadow:P}}function b(M){Object.assign(M,{broken:!1,x:M.solid.x,z:M.solid.z,tilt:0,spin:0,lift:0,vx:0,vz:0,clock:0}),M.solid.off=!1,m(M),_=!0}function I(){for(let M of i)M.broken&&b(M)}return{add:v,finalize:g,update:T,reset:I,items:i}}var El=473021;function dn(){return El=Math.imul(1664525,El)+1013904223>>>0,El/4294967296}var ws=n=>n[Math.floor(dn()*n.length)];function Hd(n){El=473021,n.background=new se(15316107),n.fog=new Ur(15316107,.0068),n.add(new Yr(15266035,7890017,2.3));let t=new Kr(16763540,3);t.position.set(-45,48,-32),t.castShadow=!0,Object.assign(t.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),t.shadow.bias=-35e-5,t.shadow.normalBias=.12,t.shadow.mapSize.set(2048,2048),t.shadow.autoUpdate=!1,n.add(t);let e=new Re(new Zi(330,32,16),new Nn({side:un,depthWrite:!1,uniforms:{sun:{value:new q(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}",fragmentShader:`
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
      }`}));e.frustumCulled=!1,e.renderOrder=-100,n.add(e);let i=[],s=[],r=[],o=[],a={},l={box:new mn,foliage:new Ti(1,1),pole:new Dn(.8,1,1,8),hill:new Zi(1,14,9),prism:g_()},c=new Ze;function u(F,L,z,X,H,Q,B,Z,tt,ut=0,Et=0){let Y=L===0&&X===0?"center":Math.round(L/31)+","+Math.round(X/31),ht=F+":"+!!tt+":"+Y,Rt=a[ht]??={shape:F,shadow:!!tt,items:[]};c.position.set(L,z,X),c.scale.set(H,Q,B),c.rotation.set(Et,ut,0,"YXZ"),c.updateMatrix(),Rt.items.push({matrix:c.matrix.clone(),color:new se(Z)})}function d(F,L,z,X,H,Q,B,Z=!1,tt=0,ut=0,Et="box"){u(Et,F,L,z,X,H,Q,B,Z,tt,ut)}function f(F,L,z,X,H,Q,B){d(F,L,z,X,H,Q,B,!0),i.push({x:F,z,w:X,d:Q,y0:L-H/2,h:L+H/2})}let h=Vd(n,i,zn);function _(F,L,z=!1){h.add(z?"palm":"tree",F,L,dn()*6.28,.82+dn()*.36,{w:.45,d:.45,h:3.6})}function v(F,L,z,X,H,Q=1784375,B=4.2,Z=.65){let tt=document.createElement("canvas");tt.width=512,tt.height=115;let ut=tt.getContext("2d");ut.fillStyle="#e9d4a0",ut.fillRect(0,0,512,115),ut.strokeStyle="#645a47",ut.lineWidth=6,ut.strokeRect(7,7,498,101),ut.font="900 50px system-ui",ut.textAlign="center",ut.textBaseline="middle",ut.fillStyle="#"+Q.toString(16).padStart(6,"0"),ut.fillText(F,256,57,470);let Et=new kr(tt);Et.colorSpace=ln;let Y=new Re(new si(B,Z),new an({map:Et}));Y.position.set(L,z,X),Y.rotation.y=H,n.add(Y)}let m=new Ue;n.add(m);let g=[],S=new si,T=new hn({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:yn});function b(F,L,z,X,H,Q){let B=new Re(S,T);B.position.set(F,L,z),B.scale.set(X,H,1),B.rotation.y=Q,n.add(B)}let I={box:d,solid:i,door:M,sign:v,glazing:b,support:s,volume:r};function M(F,L,z,X,H,Q=.228,B={}){let Z=new Ue,tt=B.id??"door-"+g.length;Z.position.set(F,Q,L);let ut=Fe(Z,"box",H,X*.5,1.088,0,X-.045,2.147,.074);ut.castShadow=!1;let Et=Fe(Z,"box",10191979,X*.5,1.47,-.04,X*.64,.56,.013);Et.castShadow=!1;for(let Vt of[-1,1])Fe(Z,"box",10191195,X-.14,.99,Vt*.046,.11,.13,.035).castShadow=!1,Fe(Z,"box",12691318,X-.174,1.011,Vt*.073,.132,.042,.037).castShadow=!1;let Y=F+Math.cos(z)*X*.5,ht=L-Math.sin(z)*X*.5,Rt=B.normallyOpen?1.48:0;Z.rotation.y=z+Rt,n.add(Z);let Lt={x:Y,z:ht,w:Math.abs(Math.cos(z))*X+.083,d:Math.abs(Math.sin(z))*X+.083,y0:Q,h:Q+2.155,doorId:tt,buildingId:B.buildingId??null},yt={door:Z,id:tt,x:Y,z:ht,base:Q,angle:z,openAmount:Rt,opened:!!B.normallyOpen,breached:!1,private:!!B.private,normallyOpen:!!B.normallyOpen,hold:0,buildingId:B.buildingId??null,unitId:B.unitId??null,normalX:Math.sin(z),normalZ:Math.cos(z),handle:{x:F+Math.cos(z)*(X-.17),y:Q+1.008,z:L-Math.sin(z)*(X-.17)},closedSolid:Lt};g.push(yt);for(let Vt of[0,X])d(F+Math.cos(z)*Vt,Q+1.09,L-Math.sin(z)*Vt,.105,2.18,.178,6640456,!1,z);return d(Y,Q+2.185,ht,X+.12,.11,.178,6640456,!1,z),yt}function p(){let{x:F,z:L}=Mn,z=13216391;f(F,2.08,L,12,3.84,10,z),d(F,.39,L+5.03,12.04,.46,.08,8484463),d(F,4,L,12.06,1.7,9.98,z,!0,0,0,"prism"),d(F,4.06,L,12,1.84,10.7,9393216,!0,0,0,"prism"),d(F+3.6,4.9,L-2.2,.55,1.9,.55,9402986,!0),d(F,1.38,L+5.05,1.42,2.42,.1,5195585),d(F,1.31,L+5.09,1.1,2.2,.06,6903110),d(F,.18,L+5.35,1.7,.14,.62,8484463),d(F,2.85,L+5.45,1.9,.12,.86,14270112,!0);for(let X of[-3.6,3.6]){d(F+X,2.03,L+5.04,2.08,1.43,.1,5195585),d(F+X,2.03,L+5.07,1.86,1.21,.06,5073522),d(F+X,1.22,L+5.16,2.2,.09,.2,14270112);for(let H of[-1,1])d(F+X+H*1.17,2.03,L+5.07,.34,1.27,.05,6257514)}v("CASA 38",F+1.6,1.62,L+5.13,0,4868146,.92,.22)}function y(){let F=Ri.z;d(2,.169,F,19,.045,22,6908773),f(-7.18,2.03,F,7.35,3.68,19.56,8886169),d(-7.18,3.98,F,7.62,.23,19.8,5406866),d(-3.46,1.35,F,.12,2.32,1.7,4413028),d(-2.5,3.33,F,7.1,.25,19.5,5401719,!0),f(-1.5,1.42,F-9.72,5.4,2.54,.35,8229008),f(-1.5,1.42,F+9.72,5.4,2.54,.35,8229008);for(let z of[-9.5,9.5])f(1.04,1.65,F+z,.28,3,.31,8689042);d(1.1,2.88,F,.25,.42,19.54,5994626),v("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,F,Math.PI/2,2704468,7.2,.63);for(let z of[-8.2,-3.95,.3,4.55,8.8])d(8.15,.208,F+z,5.3,.016,.1,14537646);for(let z of[-6.1,-1.85,2.4])d(5.5,.208,F+z,.1,.016,3.25,14537646);for(let z of[-6.8,-3.4,3.4,6.8])d(-3.46,1.87,F+z,.08,1.4,2.25,5195585),d(-3.43,1.87,F+z,.05,1.18,2.05,3626589);d(-3.52,.21,F+3.1,.64,.08,2.45,6446161)}d(0,-.3,0,720,.1,720,8880242),d(0,-.18,0,132,.34,132,4605770);for(let F=0;F<1250;F++){let L=dn()*130-65,z=dn()*130-65;d(L,.001,z,.04+dn()*.3,.007,.04+dn()*.3,ws([5460823,4934733,4473414,5855058]),!1,dn()*6)}for(let F of li)for(let L of Zn){for(let z=-10;z<=10;z+=4)d(F,.014,L+z,.12,.015,1.82,14132838);for(let z of[-12.6,12.6])for(let X=-4.5;X<=4.5;X+=.9)d(F+X,.015,L+z,.45,.016,1.44,13156273)}for(let F of li)for(let L of Zn){for(let z=-10;z<=10;z+=4)d(L+z,.014,F,1.82,.015,.12,14132838);for(let z of[-12.6,12.6])for(let X=-4.5;X<=4.5;X+=.9)d(L+z,.015,F+X,1.44,.016,.45,13156273)}for(let F of Zn)for(let L of Zn){d(F,.067,L,27.1,.16,27.1,13022103),d(F,.125,L,26.7,.07,26.7,10721158);for(let z of[-12.25,12.25])for(let X=-12;X<=12;X+=2.1)d(F+z,.164,L+X,2.32,.008,.023,12956566),d(F+X,.164,L+z,.023,.008,2.32,12956566);if(F===Ri.x-2&&L===Ri.z)y();else if(F===Mn.x&&L===Mn.z)p();else if(F===0&&L===-38){for(let z of[-6,6]){d(F+z,.185,L,8.2,.08,19,7438938);for(let X of[-7,0,7])_(F+z,L+X,!0)}for(let z=-8;z<=8;z+=4)d(F,.177,L+z,3.1,.033,3.2,13218964);f(F,1.04,L-9.89,4.42,1.77,.18,9271651),v("PRA\xC7A DA BRASA",F,1.6,L-10,Math.PI)}else for(let z of[-1,1]){let X=F===0&&L===0&&z===1,H=o.filter(ht=>ht.id.startsWith("lot-")||ht.id==="armory").length,Q=H+10,B=X?"armory":H%5===1||H%5===3?"shop":H%5===0?"house":"apartments",Z=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],tt=B==="shop"?Z[Math.floor(H/2)%Z.length]:B==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(H/2)%6]:"CASA "+Q,ut=ws([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),Et=Od(I,{id:X?"armory":"lot-"+Q,kind:B,label:X?"LOJA DE ARMAS":tt,x:F+z*(X?5.7:6.25),z:L+(X?-5.45:0),angle:z*Math.PI/2,w:X?11.35:(B==="house"?13.7:15.3)+dn()*.57,d:X?9.36:9.38+dn()*.25,color:ut,upperColor:ws([12163192,10394757,12426376,11971991]),awning:ws([7821376,6190959,10446933]),fabrics:ws([7373431,8152675,9534300]),stories:H%3===0?3:2,doorAt:X?0:void 0,open:B==="house"&&H%3!==0});o.push(Et);let Y=X?4.32:L+9.83;d(F+z*6.8,.168,Y,8.3,.017,2.51,10919820);for(let ht=-3.5;ht<=3.5;ht+=.7)d(F+z*6.8+ht,.18,Y,.022,.012,2.5,12169372)}for(let z of[-1,1]){let X=F+z*12.85,H=L-z*9.85;h.add("lamp",X,H,z>0?0:Math.PI,1,{w:.17,d:.17,h:4.5}),h.add("bench",F+z*9,L-z*12.5,z>0?0:Math.PI,1,{w:1.52,d:.5,h:.73});let Q=F+z*10.1;h.add("bin",Q,L-z*12.55,0,1,{w:.5,d:.5,h:.78}),h.add("bollard",Q+.72,L-z*12.58,0,1,{w:.14,d:.14,h:.46}),_(F+z*12.3,L+z*12.3)}}for(let F=0;F<52;F++){let L=F/52*Math.PI*2,z=118+dn()*58,X=ws([9670532,10525321,10001560,9212560]),H=Math.sin(L)*z,Q=Math.cos(L)*z;u("hill",H,-1,Q,12+dn()*33,3+dn()*22,10+dn()*20,X,!1,L);let B=4+dn()*16;d(H,B*.5-1,Q,3+dn()*9,B,4+dn()*8,ws([10194306,8949389,10128258]),!1)}h.finalize();let A=new hn({roughness:.88});for(let{shape:F,shadow:L,items:z}of Object.values(a)){let X=new bi(l[F],A,z.length);z.forEach(({matrix:H,color:Q},B)=>{X.setMatrixAt(B,H),X.setColorAt(B,Q)}),X.castShadow=L,X.receiveShadow=!0,n.add(X)}let P=new Ue,R=new Re(new Wr(1.6,1.85,40),new an({color:15794054,side:yn,transparent:!0,opacity:.85,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.y=.26,P.add(R);let O=new Re(new fs(.43),new an({color:15794054}));return O.position.y=2.8,P.add(O),n.add(P),{solid:i,marker:P,beacon:O,sun:t,sky:e,houseRoof:m,bed:wd,doors:g,buildings:o,props:h,...kd(i,s,r,g,zn)}}function g_(){let n=[-.5,0,-.5],t=[-.5,0,.5],e=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],r=[.5,1,0],o=[n,t,e,i,r,s,n,r,i,n,e,r,t,r,e,t,s,r,n,s,t,n,i,s],a=new je;return a.setAttribute("position",new Me(o.flat(),3)),a.computeVertexNormals(),a}var hr=2.05,Cl=7.15;function x_(n){let t=[];return n.forEach((e,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(e[0]-s[0]),a=Math.sign(e[1]-s[1]),l=Math.sign(r[0]-e[0]),c=Math.sign(r[1]-e[1]),u={x:e[0]-a*hr-o*Cl,z:e[1]+o*hr-a*Cl},d={x:e[0]-c*hr+l*Cl,z:e[1]+l*hr+c*Cl},f=o===l&&a===c,h={x:e[0]-(f?a:a+c)*hr,z:e[1]+(f?o:o+l)*hr},_={x:e[0],z:e[1],id:e.join(",")};for(let v=0;v<=6;v++){let m=v/6,g=1-m;t.push({x:g*g*u.x+2*g*m*h.x+m*m*d.x,z:g*g*u.z+2*g*m*h.z+m*m*d.z,junction:_,curve:!f,angle:Math.atan2(o,a)})}}),t}var Ts=(n,t,e,i)=>[[n,t],[n,i],[e,i],[e,t]],__=[Ts(-57,-57,57,57),Ts(-57,-19,19,57).reverse(),Ts(-19,-57,57,19),Ts(-19,-19,19,19).reverse(),Ts(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],Ts(-57,-57,57,57).reverse(),Ts(-19,-57,57,57).reverse()];function y_(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=t[0]===i[0]?1:0,r=1-s,o=li.filter(a=>a>Math.min(t[s],i[s])&&a<Math.max(t[s],i[s]));return i[s]<t[s]&&o.reverse(),[t,...o.map(a=>r===0?[t[0],a]:[a,t[1]])]})}var v_=__.map(n=>x_(y_(n))),M_=[1,3,1,1,5,5,7,10];function xo(n,t,e=0){let i=v_[t],s=(M_[t]*7+e)%i.length,r=i[s],o=i[(s+i.length-1)%i.length],a=.49;ts(n,{x:o.x+(r.x-o.x)*a,z:o.z+(r.z-o.z)*a,angle:r.angle}),n.driver={route:i,next:s,cruise:8.7+t%4*1.02,stuck:0,routeIndex:t,pass:null},n.stolen=!1,n.abandoned=0}function Il(n,t,e){let i=Math.atan2(t.x-n.x,t.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=e*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:_e(s*1.9,-1,1),throttle:_e((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function mh(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=es(n.kind),a=n.kind==="bike",l=i;for(let c of t){if(c===n||mt(c,n)>20)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s),_=es(c.kind,c.angle-n.angle);if(f<.2||h>o.width+_.width+.16)continue;let v=Math.max(0,f-o.length-_.length-(a?.39:.64)),m=Math.max(0,c.vx*s+c.vz*r);l=Math.min(l,m+v*.87)}for(let c of e){if(c.down>0||c.health<=0||c.seated||mt(c,n)>11)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s);f>0&&h<o.width+.4&&(l=Math.min(l,Math.max(0,f-o.length-.9)*.94))}return l}function Wd(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...t.filter(c=>c!==n&&Math.hypot(c.vx,c.vz)<2).map(c=>({other:c,radius:1.05})),...e.filter(c=>c.down<=0&&c.health!==0&&!c.seated).map(c=>({other:c,radius:.43}))].find(({other:c,radius:u})=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>2.25&&h<13.4&&Math.abs(d*r-f*s)<u+1.05});if(!a)return null;let l=(c,u)=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>-3&&h<23&&Math.abs(d*r-f*s-u)<2.3};for(let c of[2.72,-2.72]){if(t.some(f=>f!==n&&f!==a.other&&l(f,c))||e.some(f=>f!==a.other&&f.down<=0&&l(f,c)))continue;let u=n.x+s*8+r*c,d=n.z+r*8-s*c;if(Ii(u,d,n.angle,i,n.kind)&&Ii((u+n.x)*.5,(d+n.z)*.5,n.angle,i,n.kind))return{x:u,z:d}}return null}function Xd(n,t,e,i){let s=n.kind==="bike",r=es(n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),l=m=>({along:(m.x-n.x)*o+(m.z-n.z)*a,across:(m.x-n.x)*a-(m.z-n.z)*o}),c=[...t.filter(m=>m!==n).map(m=>({actor:m,...es(m.kind,m.angle-n.angle),moving:!0})),...e.filter(m=>m.health>0&&!m.seated&&!m.down).map(m=>({actor:m,width:.34,length:.34,moving:!1}))].map(m=>({...m,...l(m.actor)})),u=c.filter(({actor:m,along:g,across:S,width:T,length:b,moving:I})=>g>Math.max(s?1.2:2.4,r.length+b-.3)&&g<19&&Math.abs(S)<r.width+T+.16&&(!I||Math.hypot(m.vx,m.vz)<(s?8:6)));u.sort((m,g)=>m.along-g.along);let d=u[0];if(!d||d.along-r.length-d.length<(s?1.85:2.45))return null;let f=r.width+d.width+(s?.23:.38),h=s?Math.max(1.12,f):2.95,_=s?[h,-h,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[h,-h,3.45,-3.45],v=d.along+r.length+d.length+(s?3:4.1);for(let m of _){if(Math.abs(d.across-m)<f)continue;let g=r.length+(s?3.9:5.8);if(!c.every(p=>{if(p===d)return!0;let y=p.moving?Math.max(0,-p.actor.vx*o-p.actor.vz*a):0;return p.along<-r.length-p.length-.2||p.along>v+g+Math.min(10,y)||Math.abs(p.across-m)>r.width+p.width+(s?.25:.46)}))continue;let T=Math.max(s?2.4:3.8,Math.min(s?5:6.1,d.along-r.length+1.2)),b=zn(n.x,n.z),I=Math.ceil(v/.72),M=!0;for(let p=1;p<=I;p++){let y=p*v/I,A=m*Math.min(1,y/T),P=n.x+o*y+a*A,R=n.z+a*y-o*A,O=s?.27:.9;if(Math.abs(zn(P+a*O,R-o*O)-b)>=.08||Math.abs(zn(P-a*O,R+o*O)-b)>=.08||!oh({x:P,z:R,angle:n.angle,kind:n.kind},i,t,n)){M=!1;break}}if(M)return{x:n.x,z:n.z,sx:o,sz:a,offset:m,obstacle:d.actor,phase:"out",age:0,clearAfter:r.length+d.length+(s?.9:1.2)}}return null}function S_(n,t,e,i,s=[]){t.age+=i;let r=n.kind==="bike",o=es(n.kind),{sx:a,sz:l,offset:c}=t,u=(n.x-t.x)*a+(n.z-t.z)*l,d=(n.x-t.x)*l-(n.z-t.z)*a,f=(t.obstacle.x-t.x)*a+(t.obstacle.z-t.z)*l;if(t.age>(r?10:13)||t.phase==="merge"&&Math.abs(d)<.53)return null;t.phase==="out"&&Math.abs(d-c)<(r?.28:.55)&&(t.phase="pass"),t.phase!=="merge"&&u>f+t.clearAfter&&e.every(b=>{if(b===n)return!0;let I=es(b.kind,b.angle-Math.atan2(a,l));return Math.abs((b.x-t.x)*l-(b.z-t.z)*a)>o.width+I.width+.3||Math.abs((b.x-n.x)*a+(b.z-n.z)*l)>o.length+I.length+1.25})&&(t.phase="merge");let h=t.phase==="merge"?0:c,_=e.some(T=>{if(T===n||T===t.obstacle)return!1;let b=(T.x-n.x)*a+(T.z-n.z)*l,I=(T.x-t.x)*l-(T.z-t.z)*a,M=es(T.kind,T.angle-Math.atan2(a,l));return b>0&&b<o.length+M.length+2.7&&Math.abs(I-h)<o.width+M.width+.28})||s.some(T=>{if(T.health<=0||T.seated||T.down)return!1;let b=(T.x-n.x)*a+(T.z-n.z)*l,I=(T.x-t.x)*l-(T.z-t.z)*a;return b>0&&b<o.length+2.1&&Math.abs(I-h)<o.width+.45}),v=t.phase==="out"?r?2.3:4.4:r?4.8:7,m={x:t.x+a*(u+v)+l*h,z:t.z+l*(u+v)-a*h},g=t.phase==="out"?r?4.5:4.8:r?8.1:6.5,S=Il(n,m,_?0:g);return _&&(S.throttle=0),S}function Rl(n,t,e,i,s){return oh(t,s,e,n)&&i.every(r=>r.health<=0||r.seated||r.down||!Pi(t,r.x,r.z,.26))}function b_(n,t,e,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=e.filter(u=>u!==n&&mt(n,u)<29),l=null,c=-1/0;for(let u of[0,-.62,.62,-1,1]){let d={x:n.x,z:n.z,angle:n.angle,kind:n.kind},f=0;for(let g=0;g<(r?13:19)&&(d.angle-=u*.18*(r?.75:.56),d.x-=Math.sin(d.angle)*.18,d.z-=Math.cos(d.angle)*.18,!!Rl(n,d,e,i,s));g++)f+=.18;if(f<(r?.9:1.35))continue;Rl(n,d,e,i,s)||(d.x+=Math.sin(d.angle)*.18,d.z+=Math.cos(d.angle)*.18,d.angle+=u*.18*(r?.75:.56));let h={...d},_=0;for(let g=0;g<27;g++){let S=Math.atan2(t.x-h.x,t.z-h.z);if(h.angle=ci(h.angle,S,r?.13:.092),h.x+=Math.sin(h.angle)*.24,h.z+=Math.cos(h.angle)*.24,!Rl(n,h,e,i,s))break;_+=.24}let v=r&&Xd(d,a,i,s),m=_*.67+(mt(n,t)-mt(h,t))*.38+f*.31-Math.abs(u)*.12+(v?4.6:0);m>c&&(c=m,l={steer:u,pace:o,distance:Math.max(.7,f-.26),age:0,x:n.x,z:n.z})}return l}function gh(n,t,e,i,s,r,o,a,l=!0){let c=n.kind==="bike",u=t.recoverPosition;t.recoverPosition={x:n.x,z:n.z};let d=u&&mt(u,n)>o*.57;if(t.recoverRetry=Math.max(0,(t.recoverRetry??0)-o),t.maneuver){let h=t.maneuver;h.age+=o;let _=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),v={x:n.x-Math.sin(n.angle)*_,z:n.z-Math.cos(n.angle)*_,angle:n.angle,kind:n.kind};return mt(n,h)>=h.distance||h.age>(c?2.4:2.8)||!Rl(n,v,i,s,r)?(t.maneuver=null,t.recoverWait=0,t.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:h.steer,throttle:n.speed>-h.pace?_e((n.speed+h.pace)*-.64,-.54,-.05):0,brake:!1}}t.recoverWait=!l||d||mt(n,e)<1.2?0:(t.recoverWait??0)+o;let f=c?1.08:1.75;return t.recoverRetry>0||t.recoverWait<f||n.integrity<=0?a:(t.maneuver=b_(n,e,i,s,r),t.maneuver?(t.recoverWait=0,{steer:t.maneuver.steer,throttle:-.47,brake:!1}):(t.recoverRetry=.85,a))}function qd(n,t,e,i,s,r){for(let[o,a]of r)(!a.driver||a.integrity<=0||mt(a,a.driver.route[a.driver.next].junction)>11)&&r.delete(o);for(let o of n){let a=o.driver;if(!a||o.integrity<=0){o!==t.player&&Math.hypot(o.vx,o.vz)>.06?hi(o,s,{throttle:0,steer:0,brake:!0},i,t.vehicles):o!==t.player&&(o.impact=Math.max(0,o.impact-s*21));continue}let{route:l}=a,c=o.kind==="bike",u=l[a.next],d=Math.sin(o.angle),f=Math.cos(o.angle);for(let A=0;!a.maneuver&&A<6;A++){let P=u.x-o.x,R=u.z-o.z;if(Math.hypot(P,R)>2.55&&(P*d+R*f>0||Math.hypot(P,R)>5))break;a.next=(a.next+1)%l.length,u=l[a.next]}let{junction:h}=u,_=mt(o,h),v=r.get(h.id);!v&&_<9.7&&r.set(h.id,o);let m=a.cruise*(c?1.13:1),g=u.curve&&_<12?Math.min(c?7.1:5.9,m):m,S=v&&v!==o&&_<15;S&&(g=Math.min(g,Math.max(0,_-7.4)*.96));let T=mh(o,t.vehicles,e,g);!a.pass&&!a.maneuver&&!S&&T<g*(c?.88:.78)&&(!u.curve||_>(c?8:11))&&(a.pass=Xd(o,t.vehicles,e,i));let b=a.pass?S_(o,a.pass,t.vehicles,s,e):null;b||(a.pass=null);let I=b??Il(o,u,T);!b&&T<.4&&(I.throttle=0);let M=o.x,p=o.z,y=gh(o,a,u,t.vehicles,e,i,s,I,!S||a.stuck>4.4);a.maneuver&&(a.pass=null),hi(o,s,y,i,t.vehicles),a.stuck=Math.hypot(o.x-M,o.z-p)<s*.62?a.stuck+s:0}}function xh(n,t,e,i){return mt(n,e)>13&&Ii(n.x,n.z,n.angle,i,n.kind)&&t.every(s=>mt(s,n)>5.2)}var w_=[];function _h(n,t,e,i,s){let r=-1/0,o=1/0,a=-1,l=-1;for(let c=0;c<3;c++){let u=n[c],d=t[c],f=e[c],h=e[c+3];if(Math.abs(d)<1e-5){if(u<f||u>h)return 1/0;continue}let _=1/d,v=(d>0?f-u:h-u)*_,m=(d>0?h-u:f-u)*_;if(v>r&&(r=v,a=c*2+ +(d<0)),m<o&&(o=m,l=c*2+ +(d>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=l,Math.max(0,o))}function T_(n,t,e,i){if(!i)return t[1]<-1e-5&&n[1]>=0?-n[1]/t[1]:1/0;if(t[1]>1e-5)return 1/0;let s=o=>n[1]+t[1]*o-i(n[0]+t[0]*o,n[2]+t[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,e/12);if(r<1e-5)return 1/0;for(let o=0;o<e;o+=r){let a=o,l=Math.min(o+r,e);if(!(s(l)>0)){for(let c=0;c<10;c++){let u=(a+l)*.5;s(u)>0?a=u:l=u}return l}}return 1/0}function Yd(n,t,e,i,s,r){let o=s,a=null,l=null,c=null,u=-1,d=0,f={face:-1};for(let _ of e){if(_.off)continue;let v=_.bounds??[_.x-_.w*.5,_.y0??_.base??0,_.z-_.d*.5,_.x+_.w*.5,_.h,_.z+_.d*.5],m=_h(n,t,v,o,f);m>=o||(o=m,l=_,c="solid",u=f.face)}let h=T_(n,t,o,r);h<o&&(o=h,l=null,c="ground",u=3);for(let _ of i){let v,m=_.oriented;if(m){let{center:g,half:S,angle:T}=m,b=n[0]-g[0],I=n[1]-g[1],M=n[2]-g[2],p=Math.sin(T),y=Math.cos(T),A=[y*b-p*M,I,p*b+y*M],P=[y*t[0]-p*t[2],t[1],p*t[0]+y*t[2]];v=_h(A,P,[-S[0],-S[1],-S[2],S[0],S[1],S[2]],o,f)}else if(_.bounds)v=_h(n,t,_.bounds,o,f);else continue;v>=o||(o=v,a=_,l=null,c="target",u=f.face,d=m?.angle??0)}return{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}}function _o(n,t,e,i,s=52){let{distance:r,hit:o}=Yd(n,t,e,i,s,null);return{distance:r,hit:o}}function Pl(n,t,e,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}=Yd(n,t,e,i,s,r),f=n.map((_,v)=>_+t[v]*o),h=null;if(u!==-1&&(h=[0,0,0],h[Math.floor(u/2)]=u%2?1:-1,d)){let[_,v,m]=h,g=Math.sin(d),S=Math.cos(d);h=[S*_+g*m,v,-g*_+S*m]}return{distance:o,hit:a,point:f,normal:h,solid:l,surface:c}}function Zd(n,t,e,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...t),l=a>1e-5?t.map(_=>_/a):[0,0,1],c=Pl(n,l,i,s,r,{ground:o}),u=c.point.map((_,v)=>_-e[v]),d=u.reduce((_,v,m)=>_+v*l[m],0),f=Math.hypot(...u),h=d>.025&&f>1e-5?u.map(_=>_/f):l;return{direction:h,sight:c,impact:Pl(e,h,i,s,r,{ground:o})}}function ur(n,t,e){let i=t.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return _o(n,r,e,w_,s).distance>=s-.01}function Ll(n,t,e,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let l=t.x-n.x,c=t.z-n.z,u=Math.hypot(l,c),d=(n.ground??0)+r,f=(t.ground??0)+o;if(Math.hypot(u,f-d)>s)return!1;if(u>1e-5){let h=n.angle??0;if((Math.sin(h)*l+Math.cos(h)*c)/u<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(f-d,u)+(n.pitch??0))>a*.5?!1:ur([n.x,d,n.z],[t.x,f,t.z],e)}function Jd(n,t,e,i){let s=null,r=1.86;for(let o of t){if(o.down>0)continue;let a=o.x-n.x,l=o.z-n.z,c=Math.hypot(a,l),u=Math.sin(n.angle)*a+Math.cos(n.angle)*l;c>=r||u<c*.36||!ur([n.x,e+1,n.z],[o.x,e+1,o.z],i)||(s=o,r=c)}return s}var dr=44,As=12,yh=new q(0,1,0),A_=new q(0,0,1),ss=new Qe,Li=new ye,di=new q,Dl=new q,Nl=new q,E_=new jt;function C_(){let t=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),l=Math.hypot(r,o),c=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,u=l<.35+Math.sin(a*4)*.06,d=(s*239+i*167)%19/19,f=u?9+d*27:101+d*64,h=u?.99:Math.min(.84,Math.max(0,(c-l)*3.6))*(.51+d*.49),_=(i*32+s)*4;t[_]=f,t[_+1]=f*.92,t[_+2]=f*.81,t[_+3]=Math.round(h*255)}let e=new us(t,32,32,Cn);return e.colorSpace=ln,e.magFilter=on,e.minFilter=on,e.needsUpdate=!0,e}function Ul(n,t,e,i){let s=new bi(t,e,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(ml),n.add(s),s}function R_(n){let t=new si(1,1),e=new qi(new Float32Array(dr),1);e.setUsage(ml),t.setAttribute("markAlpha",e);let i=new an({map:C_(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=Ul(n,t,i,dr);return s.renderOrder=3,{mesh:s,fade:e}}function Kd(n){let{mesh:t,fade:e}=R_(n),i=new an({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=Ul(n,new Dn(.015,.015,1,5),i,As),r=new an({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=Ul(n,new Ti(1,0),r,As),a=new an({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),l=Ul(n,new fs(1),a,As),c=Array.from({length:As},()=>({age:1/0,distance:0,point:new q,start:new q,direction:new q,surface:null})),u=Array.from({length:dr},()=>({time:0,life:0,point:new q,normal:new q,attachment:null,radius:0})),d=0,f=0,h=new ye().makeScale(0,0,0),_=new se(16768142),v=new se(16754545);function m(){for(let T=0;T<As;T++)c[T].age=1/0,s.setMatrixAt(T,h),o.setMatrixAt(T,h),l.setMatrixAt(T,h);for(let T=0;T<dr;T++)u[T].time=0,u[T].attachment=null,t.setMatrixAt(T,h),e.setX(T,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=t.instanceMatrix.needsUpdate=e.needsUpdate=!0,d=f=0}m();function g(T,b,{enemy:I=!1,mark:M=b.surface==="solid"||b.surface==="ground",attach:p=null}={}){let y=c[d],A=d;if(d=(d+1)%As,y.start.fromArray(T),y.point.fromArray(b.point),y.distance=y.start.distanceTo(y.point),y.direction.subVectors(y.point,y.start).normalize(),y.surface=b.surface,y.age=0,s.setColorAt(A,I?v:_),s.instanceColor.needsUpdate=!0,M&&b.normal&&b.surface){let P=u[f];f=(f+1)%dr,P.life=(b.surface==="ground"?8:13)+Math.random()*4,P.time=P.life,P.point.copy(y.point),P.normal.fromArray(b.normal).normalize(),P.attachment=p,P.radius=.053+Math.random()*.031,p&&(p.updateWorldMatrix(!0,!1),p.worldToLocal(P.point),P.normal.transformDirection(Li.copy(p.matrixWorld).invert()))}}function S(T){let b=!1,I=!1;for(let M=0;M<As;M++){let p=c[M];if(!Number.isFinite(p.age))continue;b=!0,p.age+=T;let y=234,A=Math.min(p.distance,p.age*y+1.7),P=Math.max(0,p.age*y-3.1),R=A-P;if(R>.018){di.copy(p.start).addScaledVector(p.direction,(A+P)*.5),ss.setFromUnitVectors(yh,p.direction);let F=Math.min(1,R/1.3);Li.compose(di,ss,Dl.set(F,R,F)),s.setMatrixAt(M,Li)}else s.setMatrixAt(M,h);if(p.age<.071){let F=Math.max(.025,.084-p.age*.78);ss.setFromUnitVectors(yh,p.direction),di.copy(p.start).addScaledVector(p.direction,.052),Li.compose(di,ss,Dl.set(F,F*2.2,F)),o.setMatrixAt(M,Li)}else o.setMatrixAt(M,h);let O=p.age-p.distance/y;if(p.surface&&O>=0&&O<.13){let F=Math.max(.006,.041-O*.27);di.copy(p.point).addScaledVector(p.direction,-(.039+O*.38)),ss.setFromUnitVectors(yh,p.direction),Li.compose(di,ss,Dl.set(F,F*2.14,F)),l.setMatrixAt(M,Li)}else l.setMatrixAt(M,h);p.age>p.distance/y+.14&&(p.age=1/0)}for(let M=0;M<dr;M++){let p=u[M];if(!(p.time<=0)){if(I=!0,p.time-=T,p.time<=0||p.attachment&&!p.attachment.visible){p.time=0,p.attachment=null,t.setMatrixAt(M,h),e.setX(M,0);continue}di.copy(p.point),Nl.copy(p.normal),p.attachment&&(p.attachment.updateWorldMatrix(!0,!1),di.applyMatrix4(p.attachment.matrixWorld),Nl.applyNormalMatrix(E_.getNormalMatrix(p.attachment.matrixWorld))),di.addScaledVector(Nl,.014),ss.setFromUnitVectors(A_,Nl),Li.compose(di,ss,Dl.set(p.radius,p.radius,p.radius)),t.setMatrixAt(M,Li),e.setX(M,Math.min(1,p.time*.57))}}b&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=!0),I&&(t.instanceMatrix.needsUpdate=e.needsUpdate=!0)}return{emit:g,update:S,reset:m}}var vo=.42,fr=.145,$d=n=>.94*n,vh=n=>n*n*(3-2*n),yo=(n,t,e)=>n+(t-n)*e;function I_(n){return n<.065?-.32*vh(n/.065):n<fr?yo(-.32,1,vh((n-.065)/(fr-.065))):n<.182?yo(1,.89,(n-fr)/(.182-fr)):.89*(1-vh((n-.182)/(vo-.182)))}function Qd(n,{aim:t=!1,punch:e=0,pitch:i=0,hand:s=0}={}){if(!t&&e<=0)return;let r=n.arms[s],o=n.arms[1-s],a=n.forearms[s],l=n.forearms[1-s],c=s===0?1:-1,u=e>0?I_(_e(vo-e,0,vo)):0,d=Math.max(0,u),f=Math.max(0,-u),h=_e(i,-.64,.53)*.62,_=.07+d*.2-f*.08;n.body.rotation.set(_,c*(.12+d*.46-f*.52),c*(-.02-d*.05)),n.body.position.y+=$d(1-Math.cos(_))-.04-d*.03,n.body.position.z+=$d(-Math.sin(_))+d*.12;let[v,m]=n.legs,[g,S]=n.shins,T=s===0?v:m,b=s===0?m:v,I=s===0?g:S,M=s===0?S:g;b.rotation.set(-.32-d*.08,0,0),M.rotation.set(.34,0,0),T.rotation.set(.26+d*.16,0,0),I.rotation.set(.18-d*.1,0,0),r.rotation.set(yo(-.86,-1.66+h,d)+f*.7,c*(.1-d*.08),c*yo(.24,-.04,d)-c*f*.25),a.rotation.set(yo(-1.62,-.04,d)-f*.2,0,c*(.1-d*.1)),o.rotation.set(-.98+d*.06,-c*.12,-c*.22),l.rotation.set(-1.78,0,-c*.08),n.pistol.visible=!1}function qt(n){return document.getElementById(n)}function jd(n,t){let e=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=qt("stick"),l=qt("nub"),c=qt("look"),u=qt("game"),d=qt("view"),f=-1,h=-1,_=[],m=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",g=A=>{m=A,qt("touch").hidden=A!=="touch",u.classList.toggle("touching",A==="touch")};g(m);let S=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","Escape"]);window.addEventListener("keydown",A=>{if(!(!S.has(A.code)||A.target instanceof HTMLSelectElement&&!t())){if((t()||A.code==="Escape")&&A.preventDefault(),A.code==="Escape"){A.repeat||n();return}t()&&(g("keyboard"),e.add(A.code),A.repeat||(A.code==="KeyE"&&i.add("interact"),A.code==="KeyF"&&i.add("fire"),A.code==="KeyR"&&i.add("punch"),A.code==="KeyG"&&i.add("recruit"),A.code==="KeyV"&&i.add("weapon"),A.code==="Space"&&i.add("jump")))}}),window.addEventListener("keyup",A=>e.delete(A.code));function T(){e.clear(),i.clear(),s.clear(),o.x=0,o.y=0,l.style.transform="",f=-1,h=-1,r.x=0,r.y=0,r.aim=!1,qt("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",T),d.addEventListener("contextmenu",A=>A.preventDefault()),d.addEventListener("wheel",A=>{!t()||!A.deltaY||(A.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(b),b=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let b=0;d.addEventListener("pointerdown",A=>{t()&&A.pointerType==="touch"&&g("touch")}),window.addEventListener("mousedown",A=>{if(!(!t()||document.pointerLockElement!==d&&(!(A.target instanceof Node)||!d.contains(A.target)))){if(A.button===0&&document.pointerLockElement!==d&&d.requestPointerLock){let P=d.requestPointerLock();P&&P.catch(()=>{})}g("keyboard"),A.button===0&&(i.add("fire"),s.add("mouseFire")),A.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",A=>{A.button===0&&s.delete("mouseFire"),A.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",A=>{!t()||m!=="keyboard"||A.pointerType==="touch"||(document.pointerLockElement===d||A.target===d||d.contains(A.target))&&(r.x+=A.movementX,r.y+=A.movementY)});function I(A){let P=a.getBoundingClientRect(),R=A.clientX-P.left-P.width/2,O=A.clientY-P.top-P.height/2,F=P.width*.37,L=Math.max(F,Math.hypot(R,O));o.x=R/L,o.y=O/L,l.style.transform="translate("+o.x*F+"px,"+o.y*F+"px)"}a.addEventListener("pointerdown",A=>{f===-1&&(g("touch"),f=A.pointerId,a.setPointerCapture(A.pointerId),I(A))}),a.addEventListener("pointermove",A=>{A.pointerId===f&&I(A)}),a.addEventListener("lostpointercapture",A=>{A.pointerId===f&&(f=-1,o.x=0,o.y=0,l.style.transform="")});let M=0,p=0;c.addEventListener("pointerdown",A=>{h===-1&&(h=A.pointerId,M=A.clientX,p=A.clientY,c.setPointerCapture(A.pointerId))}),c.addEventListener("pointermove",A=>{A.pointerId===h&&(r.x+=(A.clientX-M)*1.45,r.y+=(A.clientY-p)*1.45,M=A.clientX,p=A.clientY)}),c.addEventListener("lostpointercapture",A=>{A.pointerId===h&&(h=-1)});for(let A of["interact","fire","aim","sprint","punch","jump","weapon","recruit"]){let P=qt(A);P.addEventListener("pointerdown",R=>{R.preventDefault(),g("touch"),P.setPointerCapture(R.pointerId),A==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),P.setAttribute("aria-pressed",String(s.has("aim")))):A==="sprint"||A==="fire"?(s.add(A),A==="fire"&&i.add(A)):i.add(A)}),(A==="sprint"||A==="fire")&&P.addEventListener("lostpointercapture",()=>s.delete(A))}let y=!1;return{clear:T,read(A,P){y!==A&&(s.delete("aim"),qt("aim").setAttribute("aria-pressed","false"),y=A);let R=Array.from(navigator.getGamepads?.()??[]).find(Z=>Z?.connected&&Z.mapping==="standard"),O=R?.buttons.map(Z=>Z.pressed||Z.value>.45)??[],F=Z=>O[Z]&&!_[Z],L=Array.from({length:4},(Z,tt)=>Td(R?.axes[tt]));(O.some(Boolean)||L.some(Z=>Math.abs(Z)>.1))&&g("pad"),(F(9)||!t()&&F(0))&&n();let X=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),H=Number(e.has("KeyW")||e.has("ArrowUp"))-Number(e.has("KeyS")||e.has("ArrowDown")),Q=(R?.buttons[7]?.value??0)-(R?.buttons[6]?.value??0),B={x:_e(X+o.x+L[0],-1,1),y:_e(H-o.y+(A&&Math.abs(Q)>.05?Q:-L[1]),-1,1),lookX:_e(r.x,-140,140)*.0032+L[2]*P*2.45,lookY:_e(r.y,-140,140)*.0028+L[3]*P*1.8,aim:!A&&(r.aim||e.has("KeyQ")||s.has("aim")||!!O[6]),run:s.has("sprint")||e.has("ShiftLeft")||e.has("ShiftRight")||!!O[0],brake:e.has("Space")||s.has("sprint")||!!O[2],interact:i.has("interact")||F(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!A&&!!O[7],punch:i.has("punch")||F(1),recruit:i.has("recruit")||F(12),weapon:i.has("weapon")||F(15),jump:i.has("jump")||F(2),confirm:F(0),mode:m};return _=O,r.x=0,r.y=0,i.clear(),B}}}function tf(){let n,t,e,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,t=n.createGain(),t.gain.value=.46,t.connect(n.destination),e=n.createOscillator(),e.type="triangle",i=n.createGain(),i.gain.value=0,e.connect(i).connect(t),e.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(a,l,c,u,d="sine",f=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+f,_=n.createOscillator(),v=n.createGain();_.type=d,_.frequency.setValueAtTime(a,h),_.frequency.exponentialRampToValueAtTime(l,h+c),v.gain.setValueAtTime(u,h),v.gain.exponentialRampToValueAtTime(.001,h+c),_.connect(v).connect(t),_.start(h),_.stop(h+c)}return{start:r,get enabled(){return s},toggle(){return s=!s,t&&(t.gain.value=s?.46:0),r(),s},motor(a,l){n&&(e.frequency.setTargetAtTime(34+Math.abs(a)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(a){o(a?109:187,a?39:73,a?.125:.084,a?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function Mh(n){return n>1.53?54:n>.92?32:n>.63?24:15}function Sh(n){return Math.round(_e(Math.max(0,n-2.4)**2*.24,0,86))}function Fl(n){return n>=36?3:n>=20?2:n>0?1:0}function ef(n){let i=62.474999999999994,s=Array.from({length:2500},(f,h)=>({x:h%50*2.55-i,z:Math.floor(h/50)*2.55-i})),r=s.map(f=>Fn(f.x,f.z,.38,n)),o=s.map((f,h)=>r[h]?[h>=50?h-50:-1,h<2450?h+50:-1,h%50?h-1:-1,h%50<49?h+1:-1].filter(v=>v>=0&&r[v]&&Fn((f.x+s[v].x)*.5,(f.z+s[v].z)*.5,.38,n)):[]),a=(f,h)=>{let _=Math.max(1,Math.ceil(mt(f,h)/.42));for(let v=1;v<=_;v++){let m=v/_;if(!Fn(f.x+(h.x-f.x)*m,f.z+(h.z-f.z)*m,.31,n))return!1}return!0},l=f=>{let h=Math.round((f.x+i)/2.55),_=Math.round((f.z+i)/2.55),v=[];for(let m=Math.max(0,_-4);m<=Math.min(49,_+4);m++)for(let g=Math.max(0,h-4);g<=Math.min(49,h+4);g++){let S=m*50+g;if(!r[S])continue;let T=s[S].x-f.x,b=s[S].z-f.z;v.push({index:S,d:T*T+b*b})}v.sort((m,g)=>m.d-g.d);for(let{index:m}of v.slice(0,12))if(a(f,s[m]))return m;return v[0]?.index??-1},c=0,u=-1,d=(f,h)=>{let _=l(f),v=l(h);if(_<0||v<0||_===v)return[];let m=new Int32Array(s.length).fill(-1),g=[_];m[_]=_;for(let S=0;S<g.length;S++){let T=g[S];if(T===v){let b=[];for(let I=v;I!==_;I=m[I])b.push(s[I]);return b.reverse()}for(let b of o[T])m[b]===-1&&(m[b]=T,g.push(b))}return[]};return(f,h,_,v)=>{f.repath=(f.repath??0)-v;let m=h.x-f.x,g=h.z-f.z,S=Math.hypot(m,g);if(S<.16)return 0;let T=S<7&&a(f,h),b=Math.floor(performance.now()/16);for(b!==u&&(u=b,c=3),!T&&f.repath<=0&&(c>0?(c--,f.route=d(f,h),f.repath=1.1+Math.random()*.4):f.repath=.05);f.route?.length&&(mt(f,f.route[0])<.7||f.route.length>1&&mt(f,f.route[1])<4&&a(f,f.route[1]));)f.route.shift();let I=T?h:f.route?.[0]??h,M=Math.atan2(I.x-f.x,I.z-f.z),p=Math.min(_*v,mt(f,I));f.angle=ci(f.angle,M,v*8.5);let y=uo(f,f.x+Math.sin(M)*p,f.z+Math.cos(M)*p,.24,n);return y||(f.repath=Math.min(f.repath,.18)),y?_:0}}var Ol=n=>li.reduce((t,e)=>Math.abs(n-e)<Math.abs(n-t)?e:t,li[0]);function nf(n,t,e,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let v=t.z<o.z;n.stop={x:v?20.9:17.2,z:o.z+(v?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&mt(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&mt(o,n.stop)<2.6){let v=Ol(o.x),m=Ol(o.z),g=Ol(t.x),S=Ol(t.z);Math.abs(o.x-v)>3&&Math.abs(o.z-m)>3?n.stop={x:v,z:o.z}:Math.abs(o.x-v)>2.4&&Math.abs(o.z-m)<2.4?n.stop={x:g,z:m}:Math.abs(o.z-m)>2.4?n.stop={x:v,z:S}:g!==v?n.stop={x:v+Math.sign(g-v)*38,z:m}:S!==m?n.stop={x:v,z:m+Math.sign(S-m)*38}:n.stop={x:g,z:t.z}}let a=mt(o,t),l=n.departing?6:14,c=Math.min(l,a*.85,Math.max(3,mt(o,n.stop)*1.85)),u=mh(o,i,s,c),d=!n.departing&&u<2.5?Wd(o,i,s,e):null,f=Il(o,d??n.stop,d?4.4:u),h=gh(o,n,n.stop,i,s,e,r,f),_=o.impact>3||Math.abs(o.speed)<1;n.stall=_&&!n.maneuver?n.stall+r:0,hi(o,r,h,e,i)}var sf="gtbase:progress:1";function rf(n){try{let t=JSON.parse((n??globalThis.localStorage).getItem(sf));return!t||t.version!==1||!Number.isFinite(t.cash)||!Number.isFinite(t.ammo)||!Number.isFinite(t.health)?null:{x:Mn.x+2.5,z:Mn.z-2.73,cash:_e(Math.floor(t.cash),0,999999),armed:t.armed===!0,equipped:t.equipped===!0,ammo:_e(Math.floor(t.ammo),0,360),health:_e(Math.floor(t.health),1,100),recruits:Array.isArray(t.recruits)?[...new Set(t.recruits.filter(e=>Number.isInteger(e)&&e>=0||typeof e=="string"&&/^[\w:-]{1,80}$/.test(e)))]:[]}}catch{return null}}function of(n,t){try{return(t??globalThis.localStorage).setItem(sf,JSON.stringify({...n,version:1})),!0}catch{return!1}}var Mo=qt("view"),P_=qt("menu"),gr=qt("play"),pr=qt("quality"),rs=qt("shop"),mr=qt("buy"),bh=180,af=260,zl=36;function Bl(n,t){try{return t!==void 0&&localStorage.setItem("gtbase:"+n,t),localStorage.getItem("gtbase:"+n)}catch{return null}}function L_(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,t=new yl({antialias:!n,alpha:!1,powerPreference:"high-performance"});t.toneMapping=$r,t.toneMappingExposure=1.17,t.shadowMap.type=ps,Mo.append(t.domElement);let e=new Fr,i=new xn(57,1,.12,370),s=Hd(e),r=s.vehicleSolids,o=ef(s.vehicleSolids),a=Kd(e),l=x=>x.floorY??s.floorAt(x.x,x.z,0),c=x=>s.walkSolids(x.x,x.z,l(x)),u=()=>[...s.solid,...s.closedDoorSolids()],d=x=>{x.floorY=s.floorAt(x.x,x.z,l(x))},f=x=>l(x)>1.25?[]:y,h={...ho,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,deadTime:0,model:Ss(e,2386265,3553348,12220240,!0)},_=[{x:15.75,z:-1.8,angle:Math.PI,color:11422e3},{x:-22.8,z:4,angle:0,color:4362871},{x:36,z:15.3,angle:Math.PI/2,color:13084242},{x:53.3,z:-36,angle:0,color:5795484}],v=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033},{x:22.85,z:28,angle:0,color:4678008}],m=[..._.map(({color:x})=>go(e,x)),...v.map(({color:x})=>dh(e,x))],g=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((x,C)=>{let D=C===3||C===7?dh(e,x):go(e,x);return D.routeIndex=C,D.kind==="bike"&&(D.rider=Ss(e,7429204,3751493,10711635),D.rider.root.visible=!1),D}),S=[...m,...g],T=new Map,b=Array.from({length:15},(x,C)=>{let D=Zn[C%3],$=Zn[Math.floor(C/3)%3],k=[{x:D+12,z:$-12},{x:D+12,z:$+12},{x:D-12,z:$+12},{x:D-12,z:$-12}],U=C%4,ct=k[U],lt=k[(U+1)%4],Ct=(C%3+1)/4,Xt={x:ct.x+(lt.x-ct.x)*Ct,z:ct.z+(lt.z-ct.z)*Ct,next:(U+1)%4},Gt=[11626316,14333537,7242655,8810644,13024669];return B({...Xt,id:"street:"+C},"civilian",Ss(e,Gt[C%5],C%2?5199188:5522251,[12684900,8737330,15052936][C%3]),k)}),I=s.buildings.filter(x=>x.clerk).map((x,C)=>B({...x.clerk,next:0,id:"clerk:"+x.id,buildingId:x.id},"clerk",Ss(e,C%2?4615014:7691090,4802374,12817263),[])),M=s.buildings.filter(x=>x.clerk),p=Array.from({length:3},(x,C)=>{let D=Ri.z-6.1+C*4.25,$={x:-1.85,z:Ri.z+[-.23,-4.4,3.94][C],next:0,id:"officer:"+C,buildingId:"station"},k=B($,"police",Ss(e,3558501,2503491,12157017),[]),U={x:8.2,z:D,angle:Math.PI/2},ct=go(e,3626613,!0);return{officer:k,berth:U,car:ct,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null,route:[3,6,1][C],beat:C,startShift:[18,40,26][C]}}),y=[...S,...p.map(x=>x.car)],A=new Map,P=Array.from({length:g.length+2},(x,C)=>{let D=B({x:0,z:0,next:0,id:"driver:"+C},"civilian",Ss(e,8549210,4342337,[11765348,8475704][C%2]),[]);return D.seated=!0,D.model.root.visible=!1,D}),R=[...b,...I,...p.map(x=>x.officer),...P],O=R,F=new Map(R.map(x=>[x.id,x])),L=new ds(1,14),z=new an({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),X=new mn(.27,.115,.38),H={cash:new hn({color:7838308}),ammo:new hn({color:14395738}),weapon:new hn({color:4805464})},Q=[];function B(x,C,D,$){return{home:x,baseRole:C,role:C,model:D,path:$,...x,pace:1.15+Math.abs(x.z)%4*.11,angle:x.angle??0,floorY:x.y??0,scheduleClock:9+Math.abs(x.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}}function Z(x){x.drop&&(e.remove(x.drop),x.drop=null),Object.assign(x,x.home,{role:x.baseRole,health:100,fear:0,down:0,angle:x.home.angle??0,floorY:x.home.y??0,scheduleClock:9+Math.abs(x.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0,riding:null,boardCar:null,deadTime:0,fallDir:-1}),x.model.root.rotation.set(0,x.angle,0),x.model.shadow.visible=!0,x.model.root.visible=!0,d(x),x.model.root.position.set(x.x,l(x),x.z)}let tt=tf();Bl("sound")==="off"&&tt.toggle();let ut=new q,Et=new q,Y=new q,ht=new q,Rt=new q,Lt=new q,yt=new q,Vt=new q,Le=new q,kt=!1,oe=!1,rt=null,Kt=!1,Se=0,Ee=null,ve=0,be=0,ke=0,It=0,de=0,fe=0,te=0,V=.23,De=0,ae=0,Te=0,wt=0,Ne=!0,Yt="keyboard",Zt=af,N=!1,w=!1,J=0,ft=!1,ot=0,Mt=0,vt=null,it=null,nt=null,gt=null,G=27,at=0,st=null,St=0,dt=[],xt=rf(),Wt=()=>{gr.textContent=xt?"Continuar do save":"Jogar agora"},Jt=0,pt=0,Ht=0,re=0,Pt=0,xe=!1,He=0,Rn=!1,xr="",Kn=0,Di=1,Es=0,Cs=0,Ie=qt("map").getContext("2d"),Ni=document.createElement("canvas");Ni.width=Ni.height=256;let In=Ni.getContext("2d"),Sn=x=>128+x*1.92;In.fillStyle="#1d3433",In.fillRect(0,0,256,256),In.fillStyle="#46605b";for(let x of li)In.fillRect(Sn(x)-10,0,20,256),In.fillRect(0,Sn(x)-10,256,20);In.fillStyle="#345048";for(let x of s.vehicleSolids)In.fillRect(Sn(x.x-x.w/2),Sn(x.z-x.d/2),x.w*1.92,x.d*1.92);In.fillStyle="#6a7859",In.fillRect(Sn(-10),Sn(28),38,38);function $n(){let x=pr.value==="high",C=pr.value==="low";t.setPixelRatio(Math.min(devicePixelRatio,x?2:C?1:n?1.45:1.5)*(C?.85:Di)),t.setSize(Mo.clientWidth,Mo.clientHeight),t.shadowMap.enabled=!C&&(x||Di>.76),s.sun.shadow.needsUpdate=!0,i.aspect=Mo.clientWidth/Math.max(1,Mo.clientHeight),i.updateProjectionMatrix()}function _r(){qt("sound").textContent=tt.enabled?"Som ligado":"Som desligado",qt("sound").setAttribute("aria-pressed",String(tt.enabled))}function fi(x){rs.open&&Fi(),kt=x,P_.hidden=x,qt("hud").hidden=!x,Co.clear(),x?(tt.start(),oe||(te=.32,V=.22),oe=!0,Ne=!0,De=performance.now(),qt("pause").focus({preventScroll:!0}),qt("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),tt.motor(0,!1),qt("help").removeAttribute("open"),qt("title").innerHTML="GT<span>BASE</span>",qt("intro").textContent="Jogo pausado em Vila Brasa.",gr.textContent="Continuar",qt("reset").hidden=!1,gr.focus())}function Ui(){rt=null,vt=null,gt=null,nt=null,it=null,dt.length=0,G=27,Zt=af,N=!1,w=!1,J=0,ft=!1,ve=ke=fe=It=de=Kn=0,Se=0,Kt=!1,Ee=null,a.reset(),s.resetDoors(),Jt=pt=Ht=ot=Mt=0,xe=!1,He=0,Rn=!1,te=.32,V=.22,wt=0,Object.assign(h,ho,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),d(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,bs(h.model,0,0,!1,!1),m.forEach((C,D)=>{ts(C,[..._,...v][D]),C.stolen=!1,C.body.rotation.z=0,is(C,0)}),T.clear(),g.forEach((C,D)=>{xo(C,D),is(C,0)});for(let C of p)ts(C.car,C.berth),Object.assign(C,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),is(C.car,0);for(let C of R)Z(C);for(let C of P)C.seated=!0,C.model.root.visible=!1;for(let C of Q)e.remove(C.mesh);Q.length=0;for(let C of y)C.passengers=[];s.props.reset(),s.sun.shadow.needsUpdate=!0,h.deadTime=0,Eo(p[0]);let x=M.find(C=>C.kind==="armory")?.entry??ar;s.marker.position.set(x.x,.02,x.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,Te=0}function Ce(x){xr=x,Kn=2.4}function So(){qt("shop-detail").textContent=N?"Reponha a muni\xE7\xE3o at\xE9 "+zl+" balas, sem custo.":"Uma pistola e "+zl+" balas por R$ "+bh+".",qt("shop-balance").textContent="Saldo: R$ "+Zt+" \xB7 Balas: "+J,mr.textContent=N?"Repor muni\xE7\xE3o":"Comprar pistola",mr.disabled=N?J>=zl:Zt<bh}function bo(){Co.clear(),document.pointerLockElement&&document.exitPointerLock(),So(),rs.showModal(),mr.disabled?qt("close-shop").focus():mr.focus()}function Fi(){rs.close(),Co.clear(),Te=0}function wo(){!rs.open||mr.disabled||(N?Ce("Muni\xE7\xE3o reposta."):(N=!0,w=!0,Zt-=bh,Ce("Pistola comprada.")),J=zl,tt.bell(),Fi())}function yr(x){let C={...x,ground:y.includes(x)?x.root.position.y:l(x),angle:x.angle},D=u();return p.some($=>{let{officer:k,car:U,mode:ct}=$;return k.health<=0?!1:k.seated&&["driving","patrol","returning"].includes(ct)?Ll({...U,ground:U.root.position.y},C,D,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):Ll({...k,ground:l(k)},C,D,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function Oi(x,C=rt??h,D=yr(C)){if(!D)return!1;let $=Fl(ve);return ve=Math.min(64,Math.max(ve+(ve>0?x*.52:0),x)),Kt=!0,Se=.24,Ee={x:C.x,z:C.z,y:l(C),health:100,seated:!1,angle:C.angle},$||Ce("Crime visto pela pol\xEDcia."),!0}let E=()=>!rt&&l(h)<1&&M.some(x=>x.kind==="armory"&&s.interiorAt(h.x,h.z,l(h))?.buildingId===x.id&&mt(h,x.clerk)<3),W=()=>!rt&&mt(h,{x:Mn.x,z:Mn.z+6.25})<1.7,et=()=>y,K=x=>x&&x.health>0&&!x.seated,j=x=>x.kind==="bike"?"Moto":"Cup\xEA",Tt=()=>!rt&&s.doors.find(x=>x.private&&!x.breached&&!x.opened&&Math.abs(x.base-l(h))<.85&&mt(x,h)<1.62);function Ut(){if(l(h)>1.02)return null;let x=null,C=3;for(let D of S){let $=mt(h,D);$>=C||D.integrity<=0||Math.abs(D.speed)>3.4||(x=D,C=$)}return x}function bt(x=!1){if(!rt)return;let{angle:C,x:D,z:$}=rt;if(!x&&Math.hypot(rt.vx,rt.vz)>4.2){Ce("Reduza a velocidade para sair.");return}let k=rt.kind==="bike"?1.02:1.64,U=[k,-k,k+.53,-k-.53].map(lt=>[D+Math.cos(C)*lt,$-Math.sin(C)*lt]);U.push([D-Math.sin(C)*2.75,$-Math.cos(C)*2.75],[D+Math.sin(C)*2.77,$+Math.cos(C)*2.77]);let ct=U.find(([lt,Ct])=>ui({x:lt,z:Ct},lt,Ct,s.walkSolids(lt,Ct,0),y,O,.36));if(!ct&&!x){Ce("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=ct??[ho.x,ho.z],h.floorY=0,d(h);for(let lt of[...rt.passengers??[]])jn(lt);h.angle=C,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),rt.abandoned=0,rt=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,C,0),bs(h.model,0,0,!1,w)}function Dt(){bt(!0),Object.assign(h,{x:Mn.x,z:Mn.z+6.25,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0,deadTime:0}),d(h),ot=0,ve=0,Mt=0,te=-Math.PI/2,Ne=!0,Ce("Voc\xEA voltou para casa.")}function Bt(){if(vt||h.health<=0)return;if(rt){bt();return}if(E()){bo();return}if(W()){let C={health:h.health,cash:Zt,armed:N,equipped:w,ammo:J,recruits:dt.map(D=>D.id)};Ce(of(C)?"Progresso salvo na porta de casa.":"O navegador bloqueou o salvamento."),tt.bell();return}let x=Ut();if(!x){Ce(Tt()?"Porta trancada.":"Nada para interagir aqui.");return}if(x.driver){let C=P.find(D=>D.seated&&!D.riding)??P.find(D=>D.exitAge>14&&D.role==="civilian"&&mt(D,h)>11);if(C){let D=x.angle-Math.PI/2,$=x.x+Math.sin(D)*(x.kind==="bike"?.95:1.51),k=x.z+Math.cos(D)*(x.kind==="bike"?.95:1.51),U=ui({x:$,z:k},$,k,s.walkSolids($,k,0),y,O,.29)?{x:$,z:k}:{x:h.x,z:h.z};Z(C),Object.assign(C,U,{angle:D,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),x.rider&&(x.rider.root.visible=!1)}x.driver=null,x.vx=x.vz=x.speed=0,x.doorTime=.65,vt={car:x,delay:.46},Ce(x.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else ee(x)}function ee(x){rt=x,x.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),ot=0,h.model.root.visible=x.kind==="bike",x.stolen||(x.stolen=!0,Oi(13)),x.passengers??=[],x.kind==="car"&&dt.filter(D=>K(D)&&mt(D,x)<35).sort((D,$)=>mt(D,x)-mt($,x)).slice(0,3-x.passengers.length).forEach((D,$)=>{D.boardCar=x,D.boardSide=$%2?1:-1,D.boardRow=$===0?.55:-.75}),te=x.angle,wt=0,Ne=!0}function ce(x,C,D){let $=new Re(X,H[x]),k=l(C)+.13;$.position.set(C.x+.22,k,C.z+.19),e.add($),Q.push({mesh:$,kind:x,count:D,y:k,wait:.32,left:105})}function Ot(x){for(let C=Q.length-1;C>=0;C--){let D=Q[C];D.left-=x,D.wait-=x,D.mesh.rotation.y+=x*2.1,D.mesh.position.y=D.y+Math.sin(D.left*3.8)*.08;let $=!rt&&h.health>0&&D.wait<0&&Math.abs(l(h)-D.y)<.65&&Math.hypot(h.x-D.mesh.position.x,h.z-D.mesh.position.z)<1.03;$&&(D.kind==="cash"?(Zt+=D.count,Ce("R$ "+D.count+" recolhidos.")):!N&&D.kind==="weapon"?(N=w=!0,J+=D.count,Ce("Pistola recolhida.")):(J=Math.min(360,J+D.count),Ce("+"+D.count+" balas.")),tt.bell()),($||D.left<=0)&&(e.remove(D.mesh),Q.splice(C,1))}}function ie(x,C,D=null){if(x.health<=0||C<=0)return;if(x.health=Math.max(0,x.health-C),x.health<=0){let U=D?x.x-D.x:x.pushX,ct=D?x.z-D.z:x.pushZ;if(x.fallDir=Math.sin(x.angle)*U+Math.cos(x.angle)*ct>0?1:-1,x.deadTime=0,D&&x!==h){let lt=Math.max(.1,Math.hypot(U,ct));x.pushX+=U/lt*1.3,x.pushZ+=ct/lt*1.3}}if(x===h){Ht=.22,x.health<=0&&(bt(!0),Mt=3,Ce("Voc\xEA caiu. Voltando para casa\u2026"));return}if(x.stagger=.32,x.fear=6,x.surrender=0,nt?.npc===x&&(nt=null),x.health>0)return;it===x&&(it=null),x.down=x.role==="police"?28:19,x.model.shadow.visible=!1;let $=new Re(L,z);$.position.set(x.x+Math.sin(x.angle)*x.fallDir*1,l(x)+.019,x.z+Math.cos(x.angle)*x.fallDir*1),$.rotation.x=-Math.PI/2,$.scale.set(.52,.32,1),e.add($),x.drop=$,x.role==="police"?ce(N?"ammo":"weapon",x,12):x.role!=="ally"&&!x.robbed&&ce("cash",x,24+Math.floor(Math.abs(x.z)%27)),gt===x&&(gt=null,G=29);let k=dt.indexOf(x);k>=0&&dt.splice(k,1)}function Ge(x){return[...O,h].filter(D=>D!==x&&K(D)&&!(D===h&&rt&&rt.kind==="car")).map(D=>{let $=l(D)+(D===h?h.lift:0);return{actor:D,y:$,bounds:[D.x-.31,$+.1,D.z-.31,D.x+.31,$+1.9,D.z+.31]}})}function Pe(){i.getWorldDirection(Lt);let x=Ge(h),C=u(),D=_o(i.position.toArray(),Lt.toArray(),C,x,28).hit,$=[h.x,l(h)+1.38+h.lift,h.z];if(D&&mt(h,D.actor)<24&&ur($,[D.actor.x,D.y+1.25,D.actor.z],C))return D.actor;let k=.15,U=null;for(let{actor:lt,y:Ct}of x){if(mt(h,lt)>18)continue;ht.set(lt.x,Ct+1.25,lt.z).project(i);let Xt=Math.hypot(ht.x,ht.y);ht.z>=1||Xt>=k||!ur($,[lt.x,Ct+1.25,lt.z],C)||(k=Xt,U=lt)}if(U)return U;let ct=y.filter(lt=>lt!==rt&&lt.integrity>0&&mt(h,lt)<32).map(lt=>({car:lt,oriented:{center:[lt.x,lt.root.position.y+.8,lt.z],half:lt.kind==="bike"?[.4,.75,1.1]:[1,.75,2.15],angle:lt.angle}}));return _o(i.position.toArray(),Lt.toArray(),C,ct,34).hit?.car??null}let we=x=>p.find(C=>C.car===x),Je=x=>y.includes(x);function Ft(x){if(x===rt||x.driver)return!0;let C=we(x);return!!(C&&C.officer.seated&&C.officer.health>0&&["driving","patrol"].includes(C.mode))}let Ke=x=>!!x&&(Je(x)?x!==rt&&x.integrity>0&&Ft(x):K(x));function he(x){if(x){if(Je(x)){x!==rt&&x.integrity>0&&Ft(x)&&(it=x);return}x.role!=="ally"&&x.health>0&&(it=x)}}function Bn(x,C,D){let $=we(x),k=$&&$.officer.seated&&["driving","patrol"].includes($.mode)?$:null,U=k?.officer??(x.driver?P.find(Ct=>Ct.seated&&!Ct.riding):null);if(!U)return!1;k||Z(U);let ct=x.angle-Math.PI/2,lt=x.kind==="bike"?.95:1.55;return Object.assign(U,{seated:!1,x:x.x+Math.sin(ct)*lt,z:x.z+Math.cos(ct)*lt,fear:6,exitAge:0,floorY:0}),U.model.root.visible=!0,U.model.shadow.visible=!0,x.driver=null,x.vx*=.45,x.vz*=.45,x.speed*=.45,x.rider&&(x.rider.root.visible=!1),k&&(k.mode="foot"),ie(U,C,D),!0}function nn(x,C,D){if(x.kind==="bike"){if(C>.85||Math.random()<.45){x===rt?(ie(h,14,D),h.health>0&&Math.random()<.3&&(bt(!0),h.trip=.6,Ce("Voc\xC3\xAA caiu da moto."))):Bn(x,40,D);return}x.integrity=Math.max(0,x.integrity-4);return}if(C>.92){if(x.cabin?.visible){x.cabin.visible=!1,x===rt&&Ce("Vidros estourados.");return}x===rt?ie(h,16,D):Math.random()<.5&&Bn(x,70,D);return}x.integrity=Math.max(0,x.integrity-5)}function Rs(x,C){let D=Math.sin(x.angle),$=Math.cos(x.angle),k=C.boardRow??-.75;for(let U of[C.boardSide??1,-(C.boardSide??1)]){let ct={x:x.x+$*U*1.5+D*k,z:x.z-D*U*1.5+$*k};if(ui(C,ct.x,ct.z,s.walkSolids(ct.x,ct.z,0),[],[],.3))return ct}return{x:x.x-D*2.8,z:x.z-$*2.8}}function Qn(x,C){let D=x.boardCar;if(rt!==D||D.integrity<=0||(D.passengers?.length??0)>=3)return x.boardCar=null,0;if(Math.hypot(D.vx,D.vz)>2.5){let _t=Eh(D,dt.indexOf(x));return mt(_t,x)>1.25?Gl(x,_t,6.1,C):0}let $=Rs(D,x),k=Math.sin(D.angle),U=Math.cos(D.angle),ct=x.x-D.x,lt=x.z-D.z,Ct=ct*k+lt*U,Xt=ct*U-lt*k,Gt=($.x-D.x)*U-($.z-D.z)*k;if(mt(x,$)<.75||mt(x,D)<1.9||Math.abs(Xt)>1.2&&Math.abs(Xt)<1.95&&Math.abs(Ct)<1.6)return x.seated=!0,x.riding=D,x.boardCar=null,x.model.root.visible=!1,D.passengers.push(x),D.doorTime=.6,0;if(Math.abs(Xt)>=1.45)return x.boardSide=Math.sign(Xt),pi(x,$,4.8,C);let Qt=Math.sign(Gt)||1,zt=(Math.sign(Ct)||1)*Math.max(2.75,Math.abs(Ct));return pi(x,{x:D.x+k*zt+U*Qt*1.65,z:D.z+U*zt-k*Qt*1.65},4.8,C)}function jn(x){let C=x.riding;if(x.riding=null,x.boardCar=null,!C)return;C.passengers=(C.passengers??[]).filter(ct=>ct!==x);let D=Math.sin(C.angle),$=Math.cos(C.angle),k=[[1.6,-.75],[-1.6,-.75],[1.6,.55],[-1.6,.55],[0,-3],[2.3,0],[-2.3,0],[0,3.1]].map(([ct,lt])=>({x:C.x+$*ct+D*lt,z:C.z-D*ct+$*lt})),U=k.find(ct=>ui(x,ct.x,ct.z,s.walkSolids(ct.x,ct.z,0),y.filter(lt=>lt!==C),O,.3))??k[0];Object.assign(x,U,{seated:!1,floorY:0,angle:C.angle,exitAnim:.3,exitSide:1}),d(x),x.model.root.visible=!0,x.model.shadow.visible=!0}function ge(x){for(let C of dt){if(!C.riding)continue;let D=C.riding;if(rt!==D){jn(C);continue}C.x=D.x,C.z=D.z,C.floorY=0,C.attack-=x,Ke(it)&&C.attack<=0&&mt(D,it)<18&&Th(C,it)}}function $e(x,C){let D=u(),$={...x,ground:l(x)};for(let k of p){let U=k.officer;K(U)&&(U===C||Ll({...U,ground:l(U)},$,D,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(k.retaliation=x)}}function bn(x){if(!x||!["civilian","resident"].includes(x.role)||x.health<=0){Ce("Mire em um pedestre dispon\xEDvel para recrutar.");return}x.role="ally",x.surrender=0,x.fear=0,x.route=[],dt.push(x),nt?.npc===x&&(nt=null),Ce("Guarda-costas recrutado."),tt.bell()}function Oe(x,C){if(h.health<=0||!C||!["civilian","resident","clerk"].includes(C.role)||C.robbed||mt(h,C)>9||Math.abs(l(h)-l(C))>.65){nt&&(nt.npc.surrender=0,nt=null);return}let D=h.x-C.x,$=h.z-C.z,k=Math.sin(C.angle)*D+Math.cos(C.angle)*$;if(nt?.npc!==C){if(nt&&(nt.npc.surrender=0),nt=null,k<Math.hypot(D,$)*.3||C.stagger>0||C.fear>0)return;nt={npc:C,left:5}}C.surrender=1,C.angle=Math.atan2(D,$),nt.left-=x,nt.left<=0&&(C.robbed=!0,C.surrender=0,C.fear=7,ce("cash",C,(C.role==="clerk"?104:38)+Math.floor(Math.abs(C.z)%31)),Oi(15),Ce(C.role==="clerk"?"Dinheiro da loja no ch\xE3o.":"Dinheiro no ch\xE3o."),nt=null)}function We(){Jt>0||h.health<=0||h.trip>.15||vt||(h.angle=te,Pt=1-Pt,h.pushX+=Math.sin(te)*1.5,h.pushZ+=Math.cos(te)*1.5,Jt=vo,xe=!0,He=fr,he(st),tt.punch(!1))}function kn(){if(xe=!1,h.health<=0||rt)return;let x=Jd(h,O.filter(k=>K(k)&&k.role!=="ally"&&Math.abs(l(h)-l(k))<.73),l(h)+h.lift,u());if(!x)return;he(x),tt.punch(!0);let C=x.x-h.x,D=x.z-h.z,$=Math.max(.2,Math.hypot(C,D));x.pushX=C/$*3.6,x.pushZ=D/$*3.6,ie(x,18,h),pt=.19,Oi(x.role==="police"?28:12),Ce(x.health<=0?"Pedestre derrubado.":"Soco acertou.")}function To(x){if(Jt>0||ke>0||h.health<=0||!N||!w)return;if(J<=0){x&&he(st),ke=.32,Ce("Sem balas. Reponha na loja.");return}let C=yr(h);J--,ke=.28,fe=.095,h.angle=te,h.model.root.rotation.y=te,bs(h.model,0,0,!0,!0,0,x?V:V-.22),h.model.muzzle.getWorldPosition(Rt),tt.shot();let D=Ge(h),$=y.map(_t=>{let Xe=_t.kind==="bike"?.31:.96,ze=_t.kind==="bike"?1.08:1.84,qe=_t.root.position.y;return{car:_t,oriented:{center:[_t.x,qe+(_t.kind==="bike"?.67:.56),_t.z],half:[Xe,_t.kind==="bike"?.44:.4,ze],angle:_t.angle}}});i.getWorldDirection(Lt);let k=y.filter(_t=>_t.rider&&_t.driver).map(_t=>({rider:_t,oriented:{center:[_t.x,_t.root.position.y+1.42,_t.z],half:[.32,.45,.33],angle:_t.angle}})),U=y.filter(_t=>_t.cabin&&_t!==rt).map(_t=>({windowCar:_t,oriented:{center:[_t.x-.33*Math.sin(_t.angle),_t.root.position.y+1.21,_t.z-.33*Math.cos(_t.angle)],half:[.8,.25,1.1],angle:_t.angle}})),ct=u(),lt=[...D,...k,...U,...$],Ct=Rt.toArray(),Xt=Zd(i.position.toArray(),Lt.toArray(),Ct,ct,lt,{ground:zn}),Gt=Xt.impact,Qt=Gt.hit,At=s.doors.find(_t=>_t.private&&!_t.breached&&Gt.solid===_t.closedSolid&&Math.hypot(Gt.point[0]-_t.handle.x,Gt.point[1]-_t.handle.y,Gt.point[2]-_t.handle.z)<.28),zt=17;if(At&&s.breachDoor(At.id))zt=23,Ce("Fechadura rompida.");else if(Qt?.actor&&Qt.actor.role!=="ally")he(Qt.actor),ie(Qt.actor,Mh(Gt.point[1]-Qt.y),h),zt=Qt.actor.role==="police"?34:23,pt=.21,Ce(Qt.actor.health<=0?"Alvo derrubado.":"Disparo acertou.");else if(Qt?.rider||Qt?.windowCar){let _t=Qt.rider??Qt.windowCar;he(_t),_t.cabin&&(_t.cabin.visible=!1);let Xe={oriented:{center:[_t.x-.42*Math.cos(_t.angle),_t.root.position.y+1.2,_t.z+.42*Math.sin(_t.angle)],half:[.26,.28,.29],angle:_t.angle}};Ft(_t)&&(Qt.rider||_o(Ct,Xt.direction,[],[Xe],52).hit)&&Bn(_t,Qt.rider?50:100,h)&&(pt=.21)}else Qt?.car?(he(Qt.car),Qt.car.integrity=Math.max(0,Qt.car.integrity-5),pt=.16):x&&he(st);Oi(zt,h,C);for(let _t of O)["civilian","resident"].includes(_t.role)&&mt(_t,h)<17&&(_t.fear=Math.max(_t.fear,4.8));a.emit(Ct,Gt,{mark:Qt?.car?!0:void 0,attach:Qt?.car?.root})}function lf(x,C){let D=rt;hi(D,x,{throttle:C.y,steer:-C.x,brake:C.brake},r,et()),wt>1.15&&Math.abs(D.speed)>2.4&&(te=ci(te,D.angle,x*2.3))}function cf(x,C){let D=Math.min(1,Math.hypot(C.x,C.y)),$=h.health>0&&!vt&&h.trip<.12,k=$?D*(C.aim?2.1:C.run?7.4:4.2):0,U=te+Math.atan2(-C.x,C.y||0);C.jump&&$&&h.lift===0&&(ot=4.18),(ot!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+ot*x-11.8*x*x),ot=h.lift>0?ot-23.6*x:0);let ct=1-Math.exp(-x*(k>.02?19:27));h.vx+=(Math.sin(U)*k-h.vx)*ct,h.vz+=(Math.cos(U)*k-h.vz)*ct;let lt=wl(h,(h.vx+h.pushX)*x,(h.vz+h.pushZ)*x,c(h),f(h),O);h.pushX*=Math.exp(-x*6.2),h.pushZ*=Math.exp(-x*6.2),h.trip=Math.max(0,h.trip-x),Jt<=0&&$&&(C.aim||D>.05)&&(h.angle=ci(h.angle,C.aim?te:U,x*11));let Ct=h.model;if(d(h),Ct.root.position.set(h.x,l(h)+h.lift,h.z),Ct.shadow.visible=h.health>0&&h.lift<.06,h.health<=0){h.deadTime=(h.deadTime??0)+x;let Xt=fh(Ct,h.deadTime,-1);Ct.root.rotation.set(Xt,h.angle,0),Ct.root.position.y+=Math.abs(Math.sin(Xt))*.17;return}Ct.root.rotation.set(Math.min(1.25,h.trip*2.7),h.angle,0),bs(Ct,x,h.trip>.05?0:Math.min(7.5,lt/x),w&&(C.aim||fe>0)&&Jt<=0,w&&Jt<=0,0,C.aim?V:0),(Jt>0||C.aim&&!w)&&Qd(Ct,{aim:C.aim,punch:Jt,pitch:V,hand:Pt}),lt&&de<=0&&h.lift===0&&(tt.step(),de=C.run?.27:.41)}function wh(x){let C=Math.sin(x.angle),D=Math.cos(x.angle);return[{x:x.x-D*1.66,z:x.z+C*1.66},{x:x.x+D*1.66,z:x.z-C*1.66}].find($=>ui($,$.x,$.z,s.walkSolids($.x,$.z,0),y,O,.38))}function hf(x,C,D){let $=Math.sin(C.angle),k=Math.cos(C.angle);if(!D)return null;if(![.28,.5,.73,.92].some(Ct=>{let Xt=x.x+(D.x-x.x)*Ct,Gt=x.z+(D.z-x.z)*Ct,Qt=Xt-C.x,At=Gt-C.z;return Math.abs(Qt*$+At*k)<2.47&&Math.abs(Qt*k-At*$)<1.33}))return D;let ct=(x.x-C.x)*$+(x.z-C.z)*k>0?2.9:-2.9,lt=(D.x-C.x)*k-(D.z-C.z)*$;return{x:C.x+$*ct+k*lt,z:C.z+k*ct-$*lt}}function uf(x){let C=x.officer,D=x.car,$=Math.sin(D.angle),k=Math.cos(D.angle),U=wh(D)??[{x:D.x-$*2.83,z:D.z-k*2.83},{x:D.x+$*2.87,z:D.z+k*2.87}].find(ct=>ui(ct,ct.x,ct.z,s.walkSolids(ct.x,ct.z,0),y,O,.37));return U?(C.seated=!1,C.model.root.visible=!0,C.x=U.x,C.z=U.z,C.floorY=0,d(C),C.angle=D.angle,C.exitAnim=.38,C.model.shadow.visible=!0,D.doorTime=.65,x.mode="foot",!0):!1}function Th(x,C){let D=y.includes(C)?C:null;if(mt(x,C)>18||mt(x,C)<.5||(D?D.integrity<=0:!K(C)))return!1;let $=l(x),k=(D?D.root.position.y:l(C))+(C===h?h.lift:0)+(D?1.08:1.27),U=u();if(!ur([x.x,$+1.35,x.z],[C.x,k,C.z],U))return!1;x.angle=Math.atan2(C.x-x.x,C.z-x.z),x.model.root.position.set(x.x,$,x.z),x.model.root.rotation.y=x.angle;let ct=Math.atan2($+1.42-k,Math.max(.4,mt(x,C)));bs(x.model,0,0,!0,!0,0,ct),x.model.muzzle.getWorldPosition(yt);let lt=ae*14+x.x,Ct=Math.sin(lt)*(x.role==="ally"?.35:.48),Xt=C.x+Math.cos(x.angle)*Ct,Gt=C.z-Math.sin(x.angle)*Ct;Vt.set(Xt,k+Math.cos(lt*1.4)*.32,Gt);let Qt=Math.min(24,yt.distanceTo(Vt)+1.65),At=Le.subVectors(Vt,yt).normalize(),zt=Ge(x);D&&zt.push({actor:D,y:0,bounds:[C.x-.93,.3,C.z-1.02,C.x+.93,1.52,C.z+1.02]});let _t=Pl(yt.toArray(),At.toArray(),U,zt,Qt,{ground:zn});if(x.role==="ally"&&(C.role==="police"||we(C)||_t.hit?.actor.role==="police")&&$e(x,_t.hit?.actor),_t.hit&&(_t.hit.actor===C||_t.hit.actor.role==="civilian")){let Xe=x.role==="police"&&C===h?.62:.83;D&&_t.hit.actor===D?nn(D,yt.y+At.y*_t.distance-D.root.position.y,x):ie(_t.hit.actor,Math.round(Mh(yt.y+At.y*_t.distance-_t.hit.y)*Xe),x)}return Vt.copy(yt).addScaledVector(At,_t.distance),x.role!=="ally"&&(C===h||C===rt||Rd(yt,Vt,rt??h))&&he(x),a.emit(yt.toArray(),_t,{enemy:!0}),x.attack=(x.role==="police"?.91:1.07)+(Math.sin(lt)+1)*.18,mt(x,rt??h)<31&&tt.shot(),!0}function kl(x,C,D){let $=mt(x,C);return x.stagger>0||x.exitAnim>0?{speed:0,aim:!1}:$<17&&x.attack<=0&&Th(x,C)||x.attack>.28&&$<15.5?(x.angle=ci(x.angle,Math.atan2(C.x-x.x,C.z-x.z),D*12),{speed:0,aim:!0}):{speed:$>3.3||Math.abs(l(x)-l(C))>1.8?Gl(x,C,4.4,D):0,aim:$<12}}function df(x,C){if(G-=C,gt){G<=0&&(gt.role="civilian",gt.fear=4,gt=null,G=37);return}if(G>0)return;let D=b.find($=>$.role==="civilian"&&K($)&&mt($,x)>14&&mt($,Ri)<55);if(!D){G=8;return}D.role="rogue",gt=D,G=63,D.attack=.1}let Ao=[{x:12.4,z:25.6},{x:12.4,z:50.4},{x:-12.4,z:50.4},{x:-12.4,z:25.6}];function Ah(x){let C={kind:"car"};return xo(C,x.route,x.startShift),C}function Eo(x,C=!0){let{car:D,officer:$}=x;if(C){let k=Ah(x);ts(D,k),D.driver=k.driver}else{let k={};xo(k,x.route),D.driver=k.driver;let U=Math.sin(D.angle),ct=Math.cos(D.angle),lt=1/0;D.driver.route.forEach((Ct,Xt)=>{let Gt=Ct.x-D.x,Qt=Ct.z-D.z,At=Math.hypot(Gt,Qt)+(Gt*U+Qt*ct<0?16:0);At<lt&&(lt=At,D.driver.next=Xt)})}x.mode="patrol",x.retaliation=null,x.stop=null,x.departing=!1,$.seated=!0,$.model.root.visible=!1,is(D,0)}function ff(x,C){let D=x.officer,$=Ao[x.beat%Ao.length];mt(D,$)<1.1&&(x.beat++,$=Ao[x.beat%Ao.length]),x.intent=pi(D,$,1.35,C)}function pf(x,C){Se-=x,Se<=0&&ve>0&&(Kt=yr(C),Kt&&(Ee={x:C.x,z:C.z,y:l(C),health:100,seated:!1,angle:C.angle}),Se=.24);let D=ve>0&&h.health>0?Kt?C:Ee:gt,$=D===gt?gt?1:0:Fl(ve);ve>0&&(ve=Math.max(0,ve-x*(Kt?.23:1.1)),ve===0&&(Ee=null,Kt=!1,Ce("Voc\xC3\xAA despistou a pol\xC3\xADcia."))),p.forEach((k,U)=>{let ct=k.officer,lt=k.car;k.retaliation&&!K(k.retaliation)&&(k.retaliation=null);let Ct=k.retaliation,Xt=Ct??D,Gt=!!(Ct||D&&U<$);if(ct.health<=0){k.mode="disabled",lt.driver=null,ct.down<=0&&mt(ct,C)>13&&y.every(At=>At===lt||mt(At,k.berth)>3.5)&&(Z(ct),ts(lt,k.berth),is(lt,0),k.mode="ready",k.retaliation=null);return}if(k.mode==="patrol"&&(Gt||lt.integrity<=0)&&(k.mode="driving",lt.driver=null,k.stop=null,k.stall=0,k.departing=!1),k.mode==="patrol")return;if(Ct&&(k.mode==="ready"||k.mode==="boarding"||k.mode==="reboard")&&(k.mode="foot"),k.mode==="ready"&&Gt){let At=lt.integrity>0&&mt(ct,lt)<22;k.mode=At?"boarding":"foot",k.stop=null,k.stall=0,k.departing=At&&mt(lt,k.berth)<2}if(k.mode==="boarding"||k.mode==="reboard"){k.mode==="boarding"&&!Gt&&(k.mode="reboard"),k.mode==="reboard"&&Gt&&(k.mode="boarding");let At=wh(lt);lt.integrity<=0||mt(ct,lt)>45?k.mode=Gt?"foot":"ready":At&&mt(ct,At)<.63?(ct.seated=!0,ct.model.root.visible=!1,lt.doorTime=.6,k.mode==="reboard"?Eo(k,!1):k.mode="driving"):At&&(k.intent=pi(ct,hf(ct,lt,At),k.mode==="boarding"?3.75:1.8,x))}if(k.mode==="driving"){if(!Gt&&lt.integrity>0&&!k.departing){Eo(k,!1);return}let At=Xt?mt(lt,Xt):1/0;!Gt||lt.integrity<=0||k.stall>8.2&&!k.maneuver||At<12.7&&!(Xt===rt&&Math.abs(rt.speed)>6)?(hi(lt,x,{throttle:0,steer:0,brake:!0},r,y),Math.hypot(lt.vx,lt.vz)<2.7&&!uf(k)&&lt.integrity>0&&hi(lt,x,{throttle:.21,steer:.26,brake:!1},r,y)):nf(k,Xt,r,y,O,x)}else if(k.mode==="foot")Gt&&Xt===Ee?k.intent=pi(ct,Xt,3.45,x):Gt?k.combat=kl(ct,Xt,x):lt.integrity>0&&mt(ct,lt)<40?k.mode="reboard":(k.mode="ready",mt(C,lt)>25&&y.every(At=>At===lt||mt(At,k.berth)>3.5)&&(ts(lt,k.berth),is(lt,0)));else if(k.mode==="ready"){let At=U<2&&mt(C,ct)>24&&mt(C,k.berth)>19&&mt(ct,k.berth)<30?Ah(k):null;At&&xh(At,y.filter(zt=>zt!==lt),C,r)?Eo(k):ff(k,x)}let Qt=k.mode==="driving"||Gt&&k.mode==="foot";lt.lamps.forEach((At,zt)=>{At.visible=!Qt||Math.floor(ae*8+zt)%2===0}),Qt&&be<=0&&mt(C,lt)<42&&(tt.siren(),be=1.35)})}function mf(x,C){let D={player:rt,vehicles:et()},$=p.filter(k=>k.mode==="patrol").map(k=>k.car);qd([...g,...$],D,O,r,x,T);for(let k of m)k!==rt&&Math.hypot(k.vx,k.vz)>.06?hi(k,x,{throttle:0,steer:0,brake:!0},r,D.vehicles):k!==rt&&(k.impact=Math.max(0,k.impact-x*21));for(let k of y){if(k.routeIndex>=0&&k!==rt){k.abandoned+=x;let U=!k.driver&&k.abandoned>25,ct=k.integrity<=0||(k.driver?.stuck??0)>13;if((U||ct)&&mt(C,k)>17){let lt={};xo(lt,k.routeIndex),lt.kind=k.kind,xh(lt,D.vehicles.filter(Ct=>Ct!==k),C,r)&&Object.assign(k,lt)}}k!==rt&&k.impact>5&&mt(C,k)<18&&It<=0&&(tt.crash(),It=.32),is(k,x,k.steer),k.rider&&(k.rider.root.visible=!!k.driver&&k.integrity>0,k.rider.root.visible&&uh(k.rider,k))}if(rt){if(rt.impact>4.1&&It<=0){tt.crash(),Ht=.24,It=.36;let k=rt,U=k.impact;Ce(k.integrity<43?"Motor avariado.":"Colis\xE3o."),rt&&k.kind==="bike"&&U>10.5&&(ie(h,Math.min(40,Math.round(U*1.6))),k.integrity=Math.max(0,k.integrity-8),bt(!0),Ce("Voc\xEA caiu da moto."))}if(rt&&rt.integrity<=0&&Math.hypot(rt.vx,rt.vz)<3){let k=j(rt);bt(!0),Ce(k+" sem condi\xE7\xF5es de rodar.")}}}function pi(x,C,D,$){if(!C)return 0;let k=c(x),U=mt(x,C);if(U<.13)return 0;let ct=s.interiorAt(x.x,x.z,l(x)),lt=s.interiorAt(C.x,C.z,C.y??l(C));if(!ct&&!lt&&U>5.9)return o(x,C,D,$);let Ct=C,Xt=(At,zt)=>[.24,.46,.68,.88,1].every(_t=>Fn(At.x+(zt.x-At.x)*_t,At.z+(zt.z-At.z)*_t,.29,k));if(!Xt(x,C)){let At=1/0;for(let zt of k)if(!(mt(x,zt)>Math.hypot(zt.w,zt.d)*.5+3.1))for(let _t of[-1,1])for(let Xe of[-1,1]){let ze={x:zt.x+_t*(zt.w*.5+.44),z:zt.z+Xe*(zt.d*.5+.44)},qe=mt(x,ze),mi=mt(ze,C);if(qe<.3||qe>4.5||!Xt(x,ze))continue;let Is=qe+mi+(mi>U+.25?1.7:0);Is<At&&(At=Is,Ct=ze)}}let Gt=Math.atan2(Ct.x-x.x,Ct.z-x.z);x.angle=ci(x.angle,Gt,$*8.5);let Qt=Math.min(D*$,mt(x,Ct));return uo(x,x.x+Math.sin(Gt)*Qt,x.z+Math.cos(Gt)*Qt,.26,k)?D:0}function Eh(x,C){let D=l(x);if(s.interiorAt(x.x,x.z,D))return{x:x.x,z:x.z,y:D};let $=Math.floor((Math.sqrt(1+C)-1)*.75),k=(C%2===0?1:-1)*(1.05+C%5*.66),U=(y.includes(x)?5.6:3.1)+$*1.1,ct=Math.sin(x.angle),lt=Math.cos(x.angle);return{x:x.x-ct*U+lt*k,z:x.z-lt*U-ct*k,y:D}}function Gl(x,C,D,$){let k=s.interiorAt(x.x,x.z,l(x)),U=s.interiorAt(C.x,C.z,C.y??l(C));if(k?.buildingId===U?.buildingId&&Math.abs((k?.floor??0)-(U?.floor??0))<1.1)return x.pursuitRoute=[],x.pursuitKey="",pi(x,C,D,$);let ct=(U?.buildingId??"street")+":"+(U?.floor??0);if(x.pursuitKey!==ct){x.pursuitKey=ct;let lt=[],Ct=s.buildings.find(At=>At.id===k?.buildingId),Xt=s.buildings.find(At=>At.id===U?.buildingId),Gt=Ct?.units.find(At=>Math.abs(At.floor-k.floor)<.25),Qt=Xt?.units.find(At=>Math.abs(At.floor-U.floor)<.25);Ct&&lt.push(Gt?.inside,Gt?.entry,Gt?.outside,...[...Gt?.stairs??[]].reverse(),Ct.inside,Ct.entry,Ct.outside),Xt&&lt.push(Xt.outside,Xt.entry,Xt.inside,...Qt?.stairs??[],Qt?.outside,Qt?.entry,Qt?.inside),x.pursuitRoute=lt.filter(Boolean)}for(;x.pursuitRoute.length&&mt(x,x.pursuitRoute[0])<.66&&Math.abs(l(x)-(x.pursuitRoute[0].y??0))<.85;)x.pursuitRoute.shift();return pi(x,x.pursuitRoute[0]??C,D,$)}function gf(x,C,D){let $=x.itinerary[0];return $?mt(x,$)<.58&&Math.abs(l(x)-($.y??0))<1.1?(x.itinerary.shift(),0):pi(x,$,C,D):0}function Ch(x,C,D=!1){O=R.filter(U=>mt(U,C)<(U.role==="civilian"?69:47)||U.role==="ally"||U.role==="police"||U===gt||U===it);let $=new Set(O);for(let U of R)U.model.root.visible=$.has(U)&&!U.seated;let k=new Map(O.map(U=>[U,{x:U.x,z:U.z}]));D||(df(C,x),pf(x,C));for(let U of O){if(U.seated)continue;if(U.attack-=x,U.stagger=Math.max(0,U.stagger-x),U.injuryCooldown-=x,U.exitAnim=Math.max(0,U.exitAnim-x),U.exitAge+=x,U.health<=0){if(U.down=Math.max(0,U.down-x),U.deadTime+=x,U.deadTime<1.2){U.x+=U.pushX*x,U.z+=U.pushZ*x,U.pushX*=Math.exp(-x*5),U.pushZ*=Math.exp(-x*5);let At=fh(U.model,U.deadTime,U.fallDir);U.model.root.rotation.set(At,U.angle,0),U.model.root.position.set(U.x,l(U)+Math.abs(Math.sin(At))*.17,U.z),U.drop&&U.drop.position.set(U.x+Math.sin(U.angle)*U.fallDir*1.25,l(U)+.019,U.z+Math.cos(U.angle)*U.fallDir*1.25)}if(U.drop){let At=Math.min(.63,.32+(19-U.down)*.09);U.drop.rotation.z=U.angle,U.drop.scale.set(Math.max(.38,At),Math.max(.24,At*.68),1)}U.role!=="police"&&U.down<=0&&mt(U.home,C)>7&&mt(U,C)>7&&(Z(U),P.includes(U)&&(U.seated=!0,U.model.root.visible=!1));continue}let ct=0,lt=!1,Ct=p.find(At=>At.officer===U);if(Ct)ct=Ct.combat?.speed??Ct.intent??0,lt=!!Ct.combat?.aim,Ct.intent=0,Ct.combat=null;else if(U.role==="ally")if(U.boardCar)ct=Qn(U,x);else if(Ke(it))({speed:ct,aim:lt}=kl(U,it,x));else{let At=Eh(C,dt.indexOf(U));(mt(At,U)>1.25||Math.abs(l(U)-At.y)>1.75)&&(ct=Gl(U,At,rt?6.1:4.45,x))}else if(U.role==="rogue"){let At=b.filter(_t=>_t!==U&&_t.role==="civilian"&&K(_t)).sort((_t,Xe)=>mt(U,_t)-mt(U,Xe))[0],zt=p.map(_t=>_t.officer).find(_t=>K(_t)&&mt(_t,U)<15);(zt||At)&&({speed:ct,aim:lt}=kl(U,zt??At,x))}else if(U.surrender<=0){let At=U.path[U.next];if(U.role==="civilian"&&!U.itinerary.length&&U.fear<=0&&M.length&&(U.scheduleClock-=x,U.scheduleClock<=0)){let zt=M[Math.floor(Math.abs(U.home.x*11+U.home.z*4+ae))%M.length];mt(U,zt.outside)<38&&(U.itinerary=[zt.outside,zt.entry,zt.inside,zt.entry,zt.outside]),U.scheduleClock=36+Math.abs(U.home.x)%25}if(U.fear=Math.max(0,U.fear-x),U.fear>0&&mt(U,C)<15){let zt=Math.atan2(U.x-C.x,U.z-C.z);for(let _t of[0,.84,-.84,1.52,-1.52]){let Xe=zt+_t;if(uo(U,U.x+Math.sin(Xe)*3.7*x,U.z+Math.cos(Xe)*3.7*x,.22,c(U))){U.angle=ci(U.angle,Xe,x*8),ct=3.7;break}}}else U.itinerary.length?ct=gf(U,U.pace,x):At&&(mt(U,At)<.54&&(U.next=(U.next+1)%U.path.length,At=U.path[U.next]),ct=pi(U,At,U.pace,x))}let Xt=k.get(U);if(Xt&&U.exitAnim<=0){let At=U.x-Xt.x+U.pushX*x,zt=U.z-Xt.z+U.pushZ*x;U.x=Xt.x,U.z=Xt.z;let _t=Ct?.mode==="boarding"?y.filter(qe=>qe!==Ct.car):y,Xe=U.boardCar?O.filter(qe=>qe.role!=="ally"):O,ze=wl(U,At,zt,c(U),l(U)>1.25?[]:_t,[...Xe,...rt?[]:[h]],.29);if(ct>0&&ze<ct*x*.35){let qe=U.detourSide??1,mi=ct*x;wl(U,qe*Math.cos(U.angle)*mi,-qe*Math.sin(U.angle)*mi,c(U),_t,[...Xe,...rt?[]:[h]],.29)<mi*.25&&(U.detourSide=-qe),U.repath=0}ct>0&&(ct=Math.min(ct,ze/x))}if(U.pushX*=Math.exp(-x*7.6),U.pushZ*=Math.exp(-x*7.6),!D&&U.injuryCooldown<=0){let At=Rh(U,2.8);if(At){let{car:zt,speed:_t,vx:Xe,vz:ze}=At,qe=Sh(_t);U.pushX=_e(Xe,-8,8)*.59,U.pushZ=_e(ze,-8,8)*.59,qe>0&&(U.injuryCooldown=1.18,ie(U,qe),zt===rt&&qe>12&&Oi(19))}}let Gt=U.model;if(U.health<=0)continue;d(U),Gt.root.position.set(U.x,l(U)+U.exitAnim*.35,U.z);let Qt=U.stagger>0?Math.sin(U.stagger/.32*Math.PI)*.24:0;Gt.root.rotation.set(U.exitAnim*.7-Qt,U.angle,U.exitAnim*U.exitSide*.89+(U.stagger>0?Math.sin(U.stagger*9)*.12:0)),bs(Gt,x,U.exitAnim>0?2.9:ct,lt,["police","rogue","ally"].includes(U.role),0,0,U.surrender>0)}if(!D&&!rt&&l(h)<1.15&&h.health>0&&h.lift<.3&&re<=0){let U=Rh(h,2.35);if(U){let{speed:ct,vx:lt,vz:Ct}=U,Xt=Sh(ct);h.pushX=_e(lt,-13,13)*.73,h.pushZ=_e(Ct,-13,13)*.73,h.trip=ct>=5.3?Math.min(.82,.35+ct*.021):.12,h.vx=h.vz=0,Xt>0&&(ie(h,Xt),tt.crash(),Ce("Voc\xEA foi atropelado.")),re=.87}}}function Rh(x,C){for(let D of y){if(l(x)>1.2||mt(D,x)>5)continue;let $=A.get(D),k=$&&mt($,D)<3?$:null,U=k?Math.hypot(k.vx,k.vz):0,ct=Math.hypot(D.vx,D.vz),lt=Math.max(ct,U);if(!(lt<C||!Cd(D,k,x)))return{car:D,speed:lt,vx:U>ct?k.vx:D.vx,vz:U>ct?k.vz:D.vz}}return null}function xf(x,C){s.updateDoors(x,[C,...O.filter(D=>K(D))])}function _f(x,C,D){let $=l(C),k=rt?null:s.interiorAt(C.x,C.z,$),U=!!k;Rn!==U&&(Rn=U,Ne=!0);let ct=i.aspect<.85,Ct=U?D?2.25:3.4:rt?rt.kind==="bike"?8.2:ct?12:10.2:D?4.45:ct?7.9:6.5,Xt=rt?1.95+rt.root.position.y:1.38+$+h.lift*.46,Gt=rt?0:D?.61:.22,Qt=D?.1+V*.19:Math.max(U?.28:.1,V);Et.set(C.x+Math.cos(te)*Gt,Xt,C.z-Math.sin(te)*Gt),Y.set(Et.x-Math.sin(te)*Ct*Math.cos(Qt),Xt+Math.sin(Qt)*Ct,Et.z-Math.cos(te)*Ct*Math.cos(Qt));function At(ze){k&&(ze.x=_e(ze.x,k.x-k.w*.5+.3,k.x+k.w*.5-.3),ze.z=_e(ze.z,k.z-k.d*.5+.3,k.z+k.d*.5-.3),ze.y=_e(ze.y,k.floor+.55,k.ceiling-.42))}At(Y),s.viewBlocked(Et.x,Et.y,Et.z,.12,!U)&&Et.set(C.x,Xt,C.z);for(let ze=.06;ze<=1.0001;ze+=.04){let qe=sr.lerp(Et.x,Y.x,ze),mi=sr.lerp(Et.y,Y.y,ze),Is=sr.lerp(Et.z,Y.z,ze);if(s.viewBlocked(qe,mi,Is,.32,!U)||y.some(Hl=>Hl!==rt&&mt(Hl,{x:qe,z:Is})<2.1&&mi<Hl.root.position.y+1.7)){Y.lerp(Et,1-Math.max(.02,ze-.07));break}}At(Y);let zt=D?14:1,_t=ft?V:V-.22,Xe=D?Xt-Math.tan(_t)*zt:Xt-.07;ut.set(Et.x+Math.sin(te)*zt,Xe,Et.z+Math.cos(te)*zt),Ne?(i.position.copy(Y),Ne=!1):i.position.lerp(Y,1-Math.exp(-x*14)),s.viewBlocked(i.position.x,i.position.y,i.position.z,.28,!U)&&i.position.copy(Y),At(i.position),i.lookAt(ut),i.updateMatrixWorld()}function os(x,C,D){Ie.fillStyle=C,Ie.beginPath(),Ie.arc(Sn(x.x),Sn(x.z),D,0,Math.PI*2),Ie.fill()}function yf(x,C){let D=Fl(ve),$=Math.round(mt(x,Mn));qt("detail").textContent="Casa "+$+" m \xB7 Loja "+Math.round(mt(x,ar))+" m",qt("cash").textContent="R$ "+Zt.toLocaleString("pt-BR"),qt("crew").textContent="Gangue "+dt.length;let k=qt("prompt"),U=Yt==="pad"?"Y \xB7 ":Yt==="keyboard"?"E \xB7 ":"",ct=E(),lt=W(),Ct=Tt(),Xt=rt??Ut(),Gt=nt&&C&&Kn<=0;k.hidden=!(Xt||ct||lt||Ct||Kn>0||Gt);let Qt=rt?"Sair "+(rt.kind==="bike"?"da moto":"do carro"):lt?"Salvar na porta de casa":ct?"Abrir loja de armas":Ct?"Porta trancada":Xt?"Pegar "+(Xt.kind==="bike"?"a moto":"o cup\xEA"):"";k.textContent=Kn>0?xr:Gt?"Mantenha a mira \xB7 "+Math.ceil(nt.left)+" s":U+Qt,qt("heat").hidden=!D,qt("heat").textContent="\u2605".repeat(D)+" PROCURADO",qt("mode").textContent=rt?j(rt)+" \xB7 "+Math.round(rt.integrity)+"%":w?"Pistola":"Vila Brasa",qt("reading").textContent=rt?Math.round(Math.hypot(rt.vx,rt.vz)*3.6)+" km/h":w?J+" balas":"Punhos";let At=qt("health");At.value=h.health,At.title="Vida: "+Math.ceil(h.health)+"%",qt("crosshair").hidden=!(C||w&&St>0&&!rt),qt("interact").textContent=rt?"Sair":lt?"Salvar":ct?"Loja":"Entrar",qt("sprint").textContent=rt?"Freio":"Correr",qt("aim").hidden=!!rt,qt("fire").hidden=!!rt||!w,qt("weapon").hidden=!!rt||!N,qt("weapon").textContent=w?"Punhos":"Pistola",qt("jump").hidden=qt("punch").hidden=!!rt,qt("recruit").hidden=!!rt||!C,qt("hud").classList.toggle("armed",!rt),qt("hud").classList.toggle("driving",!!rt),Ie.drawImage(Ni,0,0);for(let zt of S)zt!==rt&&zt.integrity>0&&os(zt,zt.driver?"#82b9b3":"#eab987",zt.kind==="bike"?2.2:zt.driver?2.6:3.5);os(ar,"#eaff89",6),os(Mn,"#dcc39b",5),os(Ri,"#99c6ff",5);for(let zt of M)zt.kind!=="armory"&&os(zt.entry,"#dbae80",2.5);for(let zt of p)["driving","patrol","foot"].includes(zt.mode)&&os(zt.officer.seated?zt.car:zt.officer,zt.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let zt of dt)os(zt,"#97ebaf",3.5);Ie.save(),Ie.translate(Sn(x.x),Sn(x.z)),Ie.rotate(-(rt?rt.angle:h.angle)),Ie.fillStyle="#fff9e6",Ie.strokeStyle="#243938",Ie.lineWidth=2.7,Ie.beginPath(),Ie.moveTo(0,10),Ie.lineTo(-6,-6),Ie.lineTo(0,-3),Ie.lineTo(6,-6),Ie.closePath(),Ie.stroke(),Ie.fill(),Ie.restore()}function vf(x){let C=(x-De)/1e3,D=_e(C,1/240,.05);De=x,ae+=D;let $=Co.read(!!rt,D);if(rs.open){$.punch||$.interact?Fi():$.confirm&&wo(),t.render(e,i);return}if(oe){if(kt){Yt=$.mode;for(let Gt of y)A.set(Gt,{x:Gt.x,z:Gt.z,vx:Gt.vx,vz:Gt.vz});$.weapon&&N&&!rt&&(w=!w,st=null,St=0);let k=$.aim&&!rt&&Jt<=0&&h.health>0;if(k!==ft&&(V=k?.015:.22,ft=k),wt=Math.abs($.lookX)+Math.abs($.lookY)>.003?0:wt+D,te-=$.lookX,V=_e(V+$.lookY,k?-1.03:-.31,.84),rt&&wt>1.2&&(V+=(.24-V)*D),It-=D,ke-=D,de-=D,re-=D,be-=D,Kn-=D,fe-=D,a.update(D),Jt=Math.max(0,Jt-D),xe&&(He-=D,He<=0&&kn()),pt-=D,Ht-=D,St-=D,at-=D,Mt>0&&(Mt-=D,Mt<=0&&Dt()),vt&&(vt.delay-=D,vt.delay<=0)){let Gt=vt.car;vt=null,h.health>0&&Gt.integrity>0&&mt(h,Gt)<3.75&&ee(Gt)}if($.interact&&Bt(),rs.open)return;let U=s.props.update(D,y,rt??h);U.shadow&&(s.sun.shadow.needsUpdate=!0);for(let Gt of U.events)mt(Gt,rt??h)<30&&(Gt.heavy?tt.crash():tt.punch(!0));xf(D,rt??h),rt?lf(D,$):cf(D,{...$,aim:k}),mf(D,rt??h),rt&&(h.x=rt.x,h.z=rt.z),ge(D),it&&!Ke(it)&&(it=null),rt?.kind==="bike"&&uh(h.model,rt),Ch(D,rt??h),Ot(D),tt.motor(rt?.speed??0,!!rt);let lt=rt??h,Ct=k&&!rt&&h.health>0;$.fire&&w&&!rt&&h.health>0&&J>0&&(St=1.38),_f(D,lt,Ct||!rt&&St>0),Ct&&(at<=0||$.recruit||$.punch||$.fire&&ke<=0)?(st=Pe(),at=.092):Ct||(st=null),$.recruit&&!rt&&bn(st),Oe(D,Ct&&w?st:null),($.punch||$.fire&&!w)&&!rt&&We(),$.fire&&!rt&&To(Ct),qt("hitmark").hidden=pt<=0,qt("impact").hidden=Ht<=0,s.marker.visible=mt(lt,ar)>2.8&&mt(lt,ar)<13,s.beacon.rotation.y=ae*2,s.beacon.position.y=2.55+Math.sin(ae*4)*.27,Te-=D,Te<=0&&(yf(lt,Ct),Te=.1)}}else{let k=.54+Math.sin(ae*.13)*.19,U=i.aspect<1?26:30;i.position.set(24+Math.sin(k)*U,14,17+Math.cos(k)*U),i.lookAt(10,2,13),Ch(D,h,!0)}t.render(e,i),kt&&pr.value==="auto"&&C>0&&C<.22&&Di>.7&&(Cs+=C,++Es>=85&&(Cs/Es>.026&&(Di=Math.max(.69,Di-.16),$n()),Es=0,Cs=0))}let Co=jd(()=>{rs.open?Fi():kt?fi(!1):Ih()},()=>kt),Vl=Bl("quality");(Vl==="low"||Vl==="high")&&(pr.value=Vl),pr.addEventListener("change",()=>{Bl("quality",pr.value),Di=1,$n()}),qt("sound").addEventListener("click",()=>{Bl("sound",tt.toggle()?"on":"off"),_r()}),qt("pause").addEventListener("click",()=>fi(!1)),qt("reset").addEventListener("click",()=>{Ui(),fi(!0)}),mr.addEventListener("click",wo),qt("close-shop").addEventListener("click",Fi),rs.addEventListener("cancel",x=>{x.preventDefault(),Fi()});function Ih(){if(!oe&&xt){Object.assign(h,{x:xt.x,z:xt.z,health:xt.health,floorY:0}),d(h),Zt=xt.cash,N=xt.armed,w=N&&xt.equipped,J=N?xt.ammo:0;for(let x of new Set(xt.recruits)){let C=typeof x=="number"?b[x]:F.get(x);C&&(C.role="ally",C.seated=!1,C.riding=null,C.model.root.visible=!0,dt.push(C))}fi(!0),te=-Math.PI/2}else fi(!0)}gr.addEventListener("click",Ih),document.addEventListener("visibilitychange",()=>{document.hidden&&kt&&fi(!1)}),window.addEventListener("resize",$n),t.domElement.addEventListener("webglcontextrestored",$n),Ui(),_r(),$n(),Wt(),gr.disabled=!1,De=performance.now(),t.setAnimationLoop(vf)}try{L_()}catch(n){console.error(n),gr.textContent="3D indispon\xEDvel",qt("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
